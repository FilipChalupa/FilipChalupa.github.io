import { Fragment, type ReactNode } from 'react'
import { PageLayout } from '../components/PageLayout'
import { TextLink } from '../components/TextLink'

type Project = {
	links: { label: string; href: string }[]
	extras?: { label: string; href: string }[]
	note?: ReactNode
}

const github = (repository: string) => ({
	label: 'repo',
	href: `https://github.com/FilipChalupa/${repository}`,
})
const npm = (name: string) => ({
	label: name,
	href: `https://www.npmjs.com/package/${name}`,
})
const android = (id: string) => ({
	label: 'Android',
	href: `https://play.google.com/store/apps/details?id=${id}`,
})

const Key = ({ children }: { children: ReactNode }) => (
	<code className="bg-gray-200 dark:bg-gray-700 px-1">{children}</code>
)

const sections: { title: string; projects: Project[] }[] = [
	{
		title: 'Hry / Games',
		projects: [
			{
				links: [{ label: 'Ballgo', href: '/ballgo/' }],
				extras: [github('Ballgo')],
			},
			{
				links: [
					{
						label: 'Matematické bludiště',
						href: 'https://matematicke-bludiste.vercel.app/',
					},
				],
				extras: [github('math-maze'), android('app.mathmaze.twa')],
			},
			{
				links: [{ label: 'mathStroke', href: 'https://genesis.mathstroke.com/' }],
				extras: [github('mathStroke')],
			},
			{
				links: [
					{
						label: 'mathStroke 2 (rozpracováno / work in progress)',
						href: 'https://www.mathstroke.com/',
					},
				],
				extras: [github('mathStroke-2')],
			},
			{
				links: [{ label: 'DoTap', href: 'https://filipchalupa.cz/doTap/' }],
				extras: [github('doTap')],
			},
			{
				links: [
					{
						label: 'Lightning aquarium',
						href: 'https://filipchalupa.cz/lightning-aquarium/',
					},
				],
				extras: [github('lightning-aquarium')],
			},
			{
				links: [
					{ label: 'Smart Snake', href: 'https://smart-snake.onrender.com/' },
				],
				extras: [github('Smart-Snake')],
				note: (
					<>
						(ovládání <Key>a</Key>, <Key>i</Key>, <Key>enter</Key>,{' '}
						<Key>k</Key>, <Key>l</Key>, <Key>⬅</Key> a <Key>➡</Key>)
					</>
				),
			},
			{
				links: [
					{
						label: 'Honeycomb score tracker',
						href: 'https://98qkcv.csb.app/',
					},
				],
				extras: [
					{
						label: 'source code',
						href: 'https://codesandbox.io/p/sandbox/honeycomb-score-tracker-98qkcv',
					},
				],
			},
		],
	},
	{
		title: 'Balíčky / Packages',
		projects: [
			{ links: [npm('pwa-install-handler'), npm('react-use-pwa-install')] },
			{ links: [npm('hiding-header'), npm('hiding-header-react')] },
			{ links: [npm('use-storage-backed-state')] },
			{ links: [npm('collapsible-react-component')] },
			{ links: [npm('shared-loading-indicator')] },
			{ links: [npm('nextjs-button-base')] },
			{ links: [npm('use-more-than-click')] },
			{ links: [npm('react-use-clock')] },
			{ links: [npm('react-keep-awake')] },
			{ links: [npm('react-chromecast-caf')] },
			{ links: [npm('countdown-control'), npm('use-countdown-control')] },
			{ links: [npm('branch-deploy')] },
			{ links: [npm('react-use-platform')] },
			{ links: [npm('custom-listenable')] },
			{ links: [npm('connection-state'), npm('use-connection-state')] },
			{ links: [npm('nextjs-webmanifest')] },
			{ links: [npm('react-ripple-click')] },
			{ links: [npm('react-use-drag')] },
			{ links: [npm('enqueue-task')] },
			{ links: [npm('react-swipe-action')] },
			{ links: [npm('react-debounce-resize')] },
			{ links: [npm('@device-portal/react')] },
			{ links: [npm('node-red-contrib-traffic-light')] },
			{ links: [npm('node-red-contrib-tcp-escpos')] },
		],
	},
	{
		title: 'Různé / Others',
		projects: [
			{
				links: [{ label: 'Just Time', href: 'https://just-time.eu/' }],
				extras: [github('Just-Time'), android('eu.just_time.twa')],
			},
			{
				links: [{ label: 'Just Countdown', href: 'https://just-countdown.eu/' }],
				extras: [github('Just-Countdown')],
			},
			{
				links: [{ label: 'Just Bitcoin', href: 'https://just-bitcoin.eu/' }],
				extras: [github('Just-Bitcoin')],
			},
			{
				links: [{ label: 'Just Stopwatch', href: 'https://just-stopwatch.eu/' }],
				extras: [github('Just-Stopwatch')],
			},
			{
				links: [{ label: 'Kde je Brno', href: '/kde-je-brno/' }],
				extras: [github('where-is')],
			},
			{
				// The web app is no longer running
				links: [
					{
						label: 'Virtual Thermal Printer',
						href: github('virtual-thermal-printer').href,
					},
				],
			},
			{
				links: [{ label: 'Last.fm now', href: '/last.fm-now/#Ofecka_' }],
				extras: [github('Last.fm-now')],
			},
			{
				links: [
					{ label: 'V síti filtr', href: 'https://filipchalupa.cz/V-siti-filter/' },
				],
				extras: [github('V-siti-filter')],
			},
		],
	},
]

export const Projects = () => (
	<PageLayout>
		<h1 className="text-2xl font-bold my-4">Vybrané projekty</h1>
		{sections.map(({ title, projects }) => (
			<section key={title} className="my-4">
				<h2 className="text-xl font-bold my-4">{title}</h2>
				<ul className="list-disc pl-5">
					{projects.map(({ links, extras = [], note }) => (
						<li key={links[0].href}>
							{links.map(({ label, href }, index) => (
								<Fragment key={href}>
									{index > 0 && ', '}
									<TextLink href={href}>{label}</TextLink>
								</Fragment>
							))}
							{extras.map(({ label, href }) => (
								<Fragment key={href}>
									{' '}
									[<TextLink href={href}>{label}</TextLink>]
								</Fragment>
							))}
							{note && <> {note}</>}
						</li>
					))}
				</ul>
			</section>
		))}
	</PageLayout>
)
