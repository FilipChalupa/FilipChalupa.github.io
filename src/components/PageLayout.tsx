import type { ReactNode } from 'react'
import { Link } from 'react-router'

export const PageLayout = ({
	children,
	wide = false,
}: {
	children: ReactNode
	wide?: boolean
}) => (
	<div className={`${wide ? 'max-w-5xl' : 'max-w-2xl'} mx-auto px-4 pb-8`}>
		<header className="my-4">
			<Link
				to="/"
				className="text-brand-green text-2xl font-bold hover:underline"
			>
				Filip Chalupa
			</Link>
		</header>
		{children}
	</div>
)
