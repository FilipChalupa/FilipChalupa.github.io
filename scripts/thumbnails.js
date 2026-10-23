// Creates thumbnails for the projects page from screenshots of the web apps,
// or from the image in `thumbnailSource`.
// Run manually, the result is committed:
//   node --experimental-strip-types scripts/thumbnails.js [slug...]
// Uses the installed Google Chrome, set CHROME_PATH to use another browser.
import fs from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'
import { projectSections } from '../src/pages/projects/data.ts'

const outputDirectory = path.resolve('public/projects')
const width = 960
const height = 600

const only = process.argv.slice(2)
const projects = projectSections
	.flatMap(({ projects }) => projects)
	.filter(
		({ url, slug, noThumbnail }) =>
			url && !noThumbnail && (only.length === 0 || only.includes(slug)),
	)

const browser = await chromium.launch(
	process.env.CHROME_PATH
		? { executablePath: process.env.CHROME_PATH }
		: { channel: 'chrome' },
)
const context = await browser.newContext({
	viewport: { width: 1280, height: 800 },
	ignoreHTTPSErrors: true,
	colorScheme: 'light',
	// Kde je Brno points to Brno from the current location
	geolocation: { latitude: 50.0755, longitude: 14.4378 },
	permissions: ['geolocation'],
})
await fs.mkdir(outputDirectory, { recursive: true })

const takeScreenshot = async (page, url) => {
	// Apps on free hosting can take a while to wake up
	await page.goto(new URL(url, 'https://filipchalupa.cz/').href, {
		timeout: 120_000,
	})
	await page.waitForTimeout(3000)
	return page.screenshot()
}

const download = async (url) => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(`${url} responded ${response.status}`)
	}
	return Buffer.from(await response.arrayBuffer())
}

for (const { slug, url, thumbnailSource } of projects) {
	const page = await context.newPage()
	try {
		const image = thumbnailSource
			? await download(thumbnailSource)
			: await takeScreenshot(page, url)
		const webp = await page.evaluate(
			async ({ image, width, height }) => {
				const bitmap = await createImageBitmap(new Blob([new Uint8Array(image)]))
				// Cover the thumbnail, cropping the overflowing side
				const scale = Math.max(width / bitmap.width, height / bitmap.height)
				const canvas = new OffscreenCanvas(width, height)
				canvas
					.getContext('2d')
					.drawImage(
						bitmap,
						(width - bitmap.width * scale) / 2,
						(height - bitmap.height * scale) / 2,
						bitmap.width * scale,
						bitmap.height * scale,
					)
				const blob = await canvas.convertToBlob({
					type: 'image/webp',
					quality: 0.8,
				})
				return [...new Uint8Array(await blob.arrayBuffer())]
			},
			{ image: [...image], width, height },
		)
		await fs.writeFile(
			path.join(outputDirectory, `${slug}.webp`),
			Buffer.from(webp),
		)
		console.log(`${slug}: ${Math.round(webp.length / 1024)} kB`)
	} catch (error) {
		console.error(`${slug}: ${error.message}`)
	} finally {
		await page.close()
	}
}

await browser.close()
