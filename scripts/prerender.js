// Renders every page into its own index.html, so GitHub Pages can serve
// each URL directly and React only hydrates it in the browser.
import fs from 'node:fs/promises'
import path from 'node:path'

const dist = path.resolve('dist')
const ssrDist = path.resolve('dist-ssr')
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')
const { render, pages, notFoundPage, defaultIcons } = await import(
	path.join(ssrDist, 'entry-server.js')
)

const escape = (value) =>
	String(value)
		.replaceAll('&', '&amp;')
		.replaceAll('"', '&quot;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')

const renderHead = (meta) =>
	[
		`<title>${escape(meta.title)}</title>`,
		meta.description &&
			`<meta name="description" content="${escape(meta.description)}" />`,
		meta.themeColor &&
			`<meta name="theme-color" content="${escape(meta.themeColor)}" />`,
		meta.upgradeInsecureRequests &&
			'<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />',
		...(meta.icons ?? defaultIcons).map(
			({ href, type, sizes }) =>
				`<link rel="icon" href="${escape(href)}"${type ? ` type="${escape(type)}"` : ''}${sizes ? ` sizes="${escape(sizes)}"` : ''} />`,
		),
	]
		.filter(Boolean)
		.join('\n\t\t')

const renderPage = (page, url) =>
	template
		.replace('<html lang="cs">', `<html lang="${escape(page.meta.lang ?? 'cs')}">`)
		.replace('<!--app-head-->', renderHead(page.meta))
		.replace('<!--app-html-->', render(url))

for (const page of pages) {
	const directory = path.join(dist, page.path)
	await fs.mkdir(directory, { recursive: true })
	await fs.writeFile(path.join(directory, 'index.html'), renderPage(page, page.path))
	console.log(`prerendered ${page.path}`)
}
await fs.writeFile(
	path.join(dist, '404.html'),
	renderPage(notFoundPage, '/404/'),
)
console.log('prerendered 404.html')

await fs.rm(ssrDist, { recursive: true })
