import type { AccountTable as AccountTableType } from './accounts'

// Break inside a word only when it can't fit otherwise (addresses, e-mails)
const hasLongWord = (text: string) =>
	text.split(' ').some((word) => word.length > 20)

export const AccountTable = ({
	table: { columns, rows },
	color,
}: {
	table: AccountTableType
	color: string
}) => (
	<table className="w-full border-collapse my-4 dark:text-gray-200">
		<thead>
			<tr className="border border-gray-300 dark:border-gray-600">
				{columns.map(({ label, alignRight }) => (
					<th
						key={label}
						className={`py-2 px-2 text-white ${alignRight ? 'text-right' : ''}`}
						style={{ backgroundColor: color, textShadow: '0 0 3px #000000' }}
					>
						{label}
					</th>
				))}
			</tr>
		</thead>
		<tbody>
			{rows.map((row, rowIndex) => (
				<tr
					key={rowIndex}
					className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700"
				>
					{row.map((cell, columnIndex) => {
						const { text, href, muted } =
							typeof cell === 'string' ? { text: cell } : cell
						return (
							<td
								key={columnIndex}
								className={`py-2 px-2 ${hasLongWord(text) ? 'wrap-anywhere' : ''} ${columns[columnIndex].alignRight ? 'text-right' : 'text-center'} ${muted ? 'opacity-20' : 'select-all'}`}
							>
								{href ? (
									<a href={href} className="text-brand-green hover:underline">
										{text}
									</a>
								) : (
									text
								)}
							</td>
						)
					})}
				</tr>
			))}
		</tbody>
	</table>
)
