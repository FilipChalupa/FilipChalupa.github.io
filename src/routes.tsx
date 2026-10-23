import type { ReactNode } from 'react'
import type { PageMeta } from './meta'
import { Home } from './pages/Home'
import { Identity } from './pages/Identity'
import { LastFmNow } from './pages/LastFmNow'
import { NotFound } from './pages/NotFound'
import { Projects } from './pages/Projects'
import { Stream3d } from './pages/Stream3d'
import { accounts } from './pages/transfer/accounts'
import { TransferAccount } from './pages/transfer/TransferAccount'
import { TransferIndex } from './pages/transfer/TransferIndex'

export type Page = {
	path: string
	meta: PageMeta
	element: ReactNode
}

const transferTitle = 'Bankovní spojení | Filip Chalupa'

export const pages: Page[] = [
	{ path: '/', meta: { title: 'Filip Chalupa' }, element: <Home /> },
	{
		path: '/identity/',
		meta: { title: 'Identita | Filip Chalupa' },
		element: <Identity />,
	},
	{
		path: '/projects/',
		meta: { title: 'Vybrané projekty | Filip Chalupa' },
		element: <Projects />,
	},
	{
		path: '/transfer/',
		meta: { title: transferTitle },
		element: <TransferIndex />,
	},
	...accounts.map((account) => ({
		path: `/transfer/${account.slug}/`,
		meta: { title: `${account.name} | ${transferTitle}` },
		element: <TransferAccount account={account} />,
	})),
	{
		path: '/3d-stream/',
		meta: {
			title: '3D print',
			description: 'Stream právě probíhajícího tisku v manGowebu',
			themeColor: '#000000',
			icons: [{ href: '/3d-stream/icon.png', type: 'image/png', sizes: '64x64' }],
			upgradeInsecureRequests: true,
		},
		element: <Stream3d />,
	},
	{
		path: '/last.fm-now/',
		meta: {
			title: 'Last.fm now',
			description: 'Shows currently playing track.',
			lang: 'en',
			icons: [
				{
					href: '/last.fm-now/assets/images/favicon.png',
					type: 'image/png',
					sizes: '16x16',
				},
				{
					href: '/last.fm-now/assets/images/favicon-32x32.png',
					type: 'image/png',
					sizes: '32x32',
				},
			],
		},
		element: <LastFmNow />,
	},
]

export const notFoundPage: Page = {
	path: '*',
	meta: { title: 'Stránka nenalezena | Filip Chalupa' },
	element: <NotFound />,
}
