import type { ReactNode } from 'react'
import { Link } from 'react-router'

const className = 'text-brand-green hover:underline'

// `to` is a page of this app, `href` anything else (including the static
// apps in public/, which the router doesn't know about)
export const TextLink = ({
	children,
	...target
}: { children: ReactNode } & ({ to: string } | { href: string })) =>
	'to' in target ? (
		<Link to={target.to} className={className}>
			{children}
		</Link>
	) : (
		<a href={target.href} className={className}>
			{children}
		</a>
	)
