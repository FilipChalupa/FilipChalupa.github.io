import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { PageLayout } from '../../components/PageLayout'
import { accounts } from './accounts'

export const TransferIndex = () => {
	const { hash } = useLocation()
	const navigate = useNavigate()

	// Accounts used to be sections of this page, keep old links working
	useEffect(() => {
		const account = accounts.find(({ slug }) => `#${slug}` === hash)
		if (account) {
			navigate(`/transfer/${account.slug}/`, { replace: true })
		}
	}, [hash, navigate])

	return (
		<PageLayout>
			<h1 className="text-2xl font-bold my-4">Bankovní spojení</h1>
			<ul className="grid gap-2">
				{accounts.map(({ slug, name, color, summary }) => (
					<li key={slug}>
						<Link
							to={`/transfer/${slug}/`}
							className="flex flex-wrap items-baseline justify-between gap-x-4 border-l-8 py-3 px-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
							style={{ borderLeftColor: color }}
						>
							<span className="font-bold">{name}</span>
							<span className="text-sm opacity-75">{summary}</span>
						</Link>
					</li>
				))}
			</ul>
		</PageLayout>
	)
}
