// Plain data without JSX, scripts/thumbnails.js reads it too

export type Link = { label: string; href: string }

export type Project = {
	// Thumbnail is public/projects/<slug>.webp
	slug: string
	name: string
	description: string
	// Running web app, projects without one get a placeholder thumbnail
	url?: string
	// Image used for the thumbnail instead of a screenshot of the app
	thumbnailSource?: string
	// Placeholder thumbnail even though the app runs
	noThumbnail?: boolean
	links: Link[]
	controls?: string[]
}

export type PackageGroup = {
	description: string
	packages: { name: string; repository: string }[]
}

const github = (repository: string): Link => ({
	label: 'Repo',
	href: `https://github.com/FilipChalupa/${repository}`,
})
const android = (id: string): Link => ({
	label: 'Android',
	href: `https://play.google.com/store/apps/details?id=${id}`,
})

export const projectSections: { title: string; projects: Project[] }[] = [
	{
		title: 'Hry / Games',
		projects: [
			{
				slug: 'ballgo',
				thumbnailSource:
					'https://raw.githubusercontent.com/Onset/Ballgo/master/printscreen.png',
				name: 'Ballgo',
				description:
					'Hra s kuličkou, ovládá se šipkami nebo nakláněním telefonu.',
				url: '/ballgo/',
				links: [github('Ballgo')],
			},
			{
				slug: 'matematicke-bludiste',
				thumbnailSource:
					'https://raw.githubusercontent.com/FilipChalupa/math-maze/main/public/og-image.jpg',
				name: 'Matematické bludiště',
				description:
					'Hra na trénování matematiky. Cestu bludištěm otevírají správně spočítané příklady.',
				url: 'https://matematicke-bludiste.vercel.app/',
				links: [github('math-maze'), android('app.mathmaze.twa')],
			},
			{
				slug: 'mathstroke',
				name: 'mathStroke',
				description: 'Multiplayerová webová hra s počítáním na rychlost.',
				url: 'https://genesis.mathstroke.com/',
				links: [github('mathStroke')],
			},
			{
				slug: 'mathstroke-2',
				name: 'mathStroke 2',
				description: 'Nová verze mathStroke, zatím rozpracovaná.',
				url: 'https://www.mathstroke.com/',
				links: [github('mathStroke-2')],
			},
			{
				slug: 'dotap',
				thumbnailSource:
					'https://raw.githubusercontent.com/Onset/doTap/master/screen-recording.gif',
				name: 'DoTap',
				description: 'Rychlá hra na postřeh, ve které se ťuká ve správnou chvíli.',
				url: 'https://filipchalupa.cz/doTap/',
				links: [github('doTap')],
			},
			{
				slug: 'lightning-aquarium',
				name: 'Lightning aquarium',
				description:
					'Akvárium, ve kterém nakrmíš rybky zaplacením 100 satů přes Lightning.',
				url: 'https://filipchalupa.cz/lightning-aquarium/',
				links: [github('lightning-aquarium')],
			},
			{
				slug: 'smart-snake',
				name: 'Smart Snake',
				description:
					'Had pro více hráčů. První načtení může chvíli trvat, server se probouzí.',
				url: 'https://smart-snake.onrender.com/',
				links: [github('Smart-Snake')],
				controls: ['a', 'i', 'enter', 'k', 'l', '⬅', '➡'],
			},
			{
				slug: 'honeycomb-score-tracker',
				name: 'Honeycomb score tracker',
				description: 'Počítadlo bodů pro deskovou hru.',
				url: 'https://98qkcv.csb.app/',
				// CodeSandbox previews load too unreliably for a screenshot
				noThumbnail: true,
				links: [
					{
						label: 'Zdrojový kód',
						href: 'https://codesandbox.io/p/sandbox/honeycomb-score-tracker-98qkcv',
					},
				],
			},
		],
	},
	{
		title: 'Různé / Others',
		projects: [
			{
				slug: 'just-time',
				name: 'Just Time',
				description: 'Přesný čas přes celou obrazovku.',
				url: 'https://just-time.eu/',
				links: [github('Just-Time'), android('eu.just_time.twa')],
			},
			{
				slug: 'just-countdown',
				name: 'Just Countdown',
				description: 'Odpočet s dálkovým ovládáním z jiného zařízení.',
				url: 'https://just-countdown.eu/',
				links: [github('Just-Countdown')],
			},
			{
				slug: 'just-bitcoin',
				name: 'Just Bitcoin',
				description: 'Aktuální cena bitcoinu.',
				url: 'https://just-bitcoin.eu/',
				links: [github('Just-Bitcoin')],
			},
			{
				slug: 'just-stopwatch',
				name: 'Just Stopwatch',
				description: 'Jednoduché stopky.',
				url: 'https://just-stopwatch.eu/',
				links: [github('Just-Stopwatch')],
			},
			{
				slug: 'kde-je-brno',
				name: 'Kde je Brno',
				description: 'Ukazuje, kterým směrem a jak daleko je Brno.',
				url: '/kde-je-brno/',
				links: [github('where-is')],
			},
			{
				slug: 'virtual-thermal-printer',
				name: 'Virtual Thermal Printer',
				description:
					'Webová simulace termotiskárny s příkazy ESC/POS a Epson ePOS.',
				links: [github('virtual-thermal-printer')],
			},
			{
				slug: 'last-fm-now',
				name: 'Last.fm now',
				description: 'Právě hrající skladba z Last.fm, sama se aktualizuje.',
				url: '/last.fm-now/#Ofecka_',
				links: [github('Last.fm-now')],
			},
			{
				slug: 'v-siti-filtr',
				thumbnailSource:
					'https://raw.githubusercontent.com/FilipChalupa/V-siti-filter/master/screen.jpg',
				name: 'V síti filtr',
				description:
					'Videofiltr pro webkameru inspirovaný dokumentem V síti.',
				url: 'https://filipchalupa.cz/V-siti-filter/',
				links: [github('V-siti-filter')],
			},
		],
	},
]

const npmPackage = (name: string, repository = name) => ({
	name,
	repository: `https://github.com/FilipChalupa/${repository}`,
})

export const packageGroups: PackageGroup[] = [
	{
		description: 'Tlačítko pro instalaci PWA aplikace.',
		packages: [
			npmPackage('pwa-install-handler'),
			npmPackage('react-use-pwa-install'),
		],
	},
	{
		description: 'Hlavička, která se při scrollování schová a zase ukáže.',
		packages: [npmPackage('hiding-header'), npmPackage('hiding-header-react')],
	},
	{
		description: 'React stav uložený v localStorage nebo sessionStorage.',
		packages: [npmPackage('use-storage-backed-state')],
	},
	{
		description: 'Animované rozbalování a sbalování obsahu.',
		packages: [npmPackage('collapsible-react-component')],
	},
	{
		description: 'Sdílený stav načítání napříč komponentami.',
		packages: [npmPackage('shared-loading-indicator')],
	},
	{
		description: 'Základ tlačítka a odkazu pro Next.js.',
		packages: [npmPackage('nextjs-button-base')],
	},
	{
		description: 'Dvojklik a dlouhé podržení na tlačítkách.',
		packages: [npmPackage('use-more-than-click')],
	},
	{
		description: 'React hook s aktuálním časem.',
		packages: [npmPackage('react-use-clock')],
	},
	{
		description: 'Zabrání zhasnutí obrazovky.',
		packages: [npmPackage('react-keep-awake')],
	},
	{
		description: 'React hooky pro Chromecast odesílač i přijímač.',
		packages: [npmPackage('react-chromecast-caf')],
	},
	{
		description: 'Ovladatelný odpočet.',
		packages: [
			npmPackage('countdown-control'),
			npmPackage('use-countdown-control'),
		],
	},
	{
		description: 'Nasazení pushem do větve deploy.',
		packages: [npmPackage('branch-deploy')],
	},
	{
		description: 'Zjistí platformu klienta.',
		packages: [npmPackage('react-use-platform')],
	},
	{
		description: 'Vlastní objekt s addListener a removeListener.',
		packages: [npmPackage('custom-listenable')],
	},
	{
		description: 'Hlídá, jestli je zařízení online.',
		packages: [
			npmPackage('connection-state'),
			npmPackage('use-connection-state'),
		],
	},
	{
		description: 'Snadné přidání webmanifestu do Next.js.',
		packages: [npmPackage('nextjs-webmanifest')],
	},
	{
		description: 'Vlnka po kliknutí na tlačítko.',
		packages: [npmPackage('react-ripple-click')],
	},
	{
		description: 'Jednodušší obsluha tažení.',
		packages: [npmPackage('react-use-drag')],
	},
	{
		description: 'Fronta úloh.',
		packages: [npmPackage('enqueue-task')],
	},
	{
		description: 'Odsunutí položky prstem, které odkryje akci.',
		packages: [npmPackage('react-swipe-action')],
	},
	{
		description: 'Během změny velikosti prvku ukazuje čekající stav.',
		packages: [npmPackage('react-debounce-resize')],
	},
	{
		description: 'Jednoduchý datový kanál WebRTC pro React.',
		packages: [npmPackage('@device-portal/react', 'device-portal')],
	},
	{
		description: 'Uzel semaforu pro Node-RED.',
		packages: [npmPackage('node-red-contrib-traffic-light')],
	},
	{
		description: 'Tisk ESC/POS přes TCP/IP z Node-RED.',
		packages: [npmPackage('node-red-contrib-tcp-escpos')],
	},
]
