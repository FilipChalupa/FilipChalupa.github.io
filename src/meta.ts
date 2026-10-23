import { useEffect } from 'react'

export type PageMeta = {
	title: string
	description?: string
	lang?: string
	themeColor?: string
	icons?: { href: string; type?: string; sizes?: string }[]
	upgradeInsecureRequests?: boolean
}

export const defaultIcons: PageMeta['icons'] = [
	{ href: '/assets/profile.jpg', type: 'image/png' },
]

export const useDocumentMeta = ({ title, lang = 'cs' }: PageMeta) => {
	useEffect(() => {
		document.title = title
		document.documentElement.lang = lang
	}, [title, lang])
}
