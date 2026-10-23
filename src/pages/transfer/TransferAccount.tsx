import { PageLayout } from '../../components/PageLayout'
import { QrCode } from '../../components/QrCode'
import { TextLink } from '../../components/TextLink'
import { AccountTable } from './AccountTable'
import type { Account } from './accounts'
import { QrPayment } from './QrPayment'

export const TransferAccount = ({ account }: { account: Account }) => (
	<PageLayout>
		<nav className="text-sm">
			<TextLink to="/transfer/">← Bankovní spojení</TextLink>
		</nav>
		<h1 className="text-2xl font-bold my-4">{account.name}</h1>
		{account.tables.map((table, index) => (
			<AccountTable
				key={index}
				table={table}
				color={table.color ?? account.color}
			/>
		))}
		{account.iban && (
			<section>
				<h2 className="text-xl font-bold mt-8">QR platba</h2>
				<p className="text-sm mt-1 opacity-75">
					Vyplněné údaje se propíšou do adresy stránky, takže odkaz jde poslat
					dál.
				</p>
				<QrPayment iban={account.iban} color={account.color} />
			</section>
		)}
		{account.qr && (
			<figure className="my-4 text-center">
				<QrCode value={account.qr.value} label={account.qr.label} />
			</figure>
		)}
	</PageLayout>
)
