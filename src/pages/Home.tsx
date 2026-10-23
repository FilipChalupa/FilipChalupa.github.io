import { Fragment } from 'react'
import { Link } from 'react-router'

const links = [
	{ to: '/identity/', label: 'Identita' },
	{ to: '/projects/', label: 'Vybrané projekty' },
	{ to: '/transfer/', label: 'Bankovní spojení' },
]

export const Home = () => (
	<div className="text-center p-4 min-h-dvh flex flex-col items-center">
		<div className="grow" />
		<img
			src="/assets/profile.jpg"
			alt="Profilová fotka"
			width="720"
			height="478"
			className="rounded-full w-80 h-80 max-w-[80vw] max-h-[80vw] object-cover"
		/>
		<h1 className="mt-7 mb-2.5 text-4xl">Filip Chalupa</h1>
		<a href="mailto:chalupa.filip@gmail.com" className="text-brand-green">
			chalupa.filip@gmail.com
		</a>
		<footer className="grow-[2] mt-4 flex justify-end items-end content-end flex-wrap gap-x-4 sm:gap-x-0 w-full">
			{links.map(({ to, label }, index) => (
				<Fragment key={to}>
					{index > 0 && <span className="hidden sm:inline px-2">|</span>}
					<Link to={to} className="text-brand-green px-2 hover:underline">
						{label}
					</Link>
				</Fragment>
			))}
		</footer>
	</div>
)
