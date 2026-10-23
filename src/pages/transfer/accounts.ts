export type Cell = string | { text: string; href?: string; muted?: boolean }

export type AccountTable = {
	color?: string
	columns: { label: string; alignRight?: boolean }[]
	rows: Cell[][]
}

export type Account = {
	slug: string
	name: string
	color: string
	summary: string
	tables: AccountTable[]
	// Czech account, the page offers QR Platba (SPAYD)
	iban?: string
	qr?: { value: string; label: string }
}

const phone = '+420 731 742 950'
const email = 'chalupa.filip@gmail.com'
const bitcoinAddress = 'bc1qn9fwmetym38szaerupmcmpa0kgun6xsx366h97'

export const accounts: Account[] = [
	{
		slug: 'ceska-sporitelna',
		name: 'Česká spořitelna',
		color: '#005e8f',
		summary: '2211262093/0800',
		iban: 'CZ2108000000002211262093',
		tables: [
			{
				columns: [
					{ label: 'Předčíslí', alignRight: true },
					{ label: 'Číslo účtu', alignRight: true },
					{ label: 'Kód banky' },
				],
				rows: [[{ text: '000000', muted: true }, '2211262093', '0800']],
			},
			{
				columns: [{ label: 'IBAN' }, { label: 'BIC/SWIFT' }],
				rows: [['CZ21 0800 0000 0022 1126 2093', 'GIBACZPX']],
			},
			{ columns: [{ label: 'Platba na kontakt' }], rows: [[phone]] },
		],
	},
	{
		slug: 'csob',
		name: 'ČSOB',
		color: '#0099cc',
		summary: '298930736/0300',
		iban: 'CZ0403000000000298930736',
		tables: [
			{
				columns: [
					{ label: 'Číslo účtu', alignRight: true },
					{ label: 'Kód banky' },
				],
				rows: [['298930736', '0300']],
			},
			{
				columns: [{ label: 'IBAN' }, { label: 'BIC/SWIFT' }],
				rows: [['CZ04 0300 0000 0002 9893 0736', 'CEKOCZPP']],
			},
		],
	},
	{
		slug: 'moneta',
		name: 'Moneta',
		color: '#2b1f69',
		summary: '265611341/0600',
		iban: 'CZ4806000000000265611341',
		tables: [
			{
				columns: [
					{ label: 'Číslo účtu', alignRight: true },
					{ label: 'Kód banky' },
				],
				rows: [['265611341', '0600']],
			},
			{
				columns: [{ label: 'IBAN' }, { label: 'BIC/SWIFT' }],
				rows: [['CZ48 0600 0000 0002 6561 1341', 'AGBACZPP']],
			},
		],
	},
	{
		slug: 'revolut',
		name: 'Revolut',
		color: '#0566eb',
		summary: '@filipchalupa',
		tables: [
			{
				columns: [
					{ label: 'Uživatelské jméno' },
					{ label: 'E-mail' },
					{ label: 'Telefon' },
				],
				rows: [
					[
						{
							text: '@filipchalupa',
							href: 'https://revolut.me/filipchalupa',
						},
						email,
						phone,
					],
				],
			},
		],
	},
	{
		slug: 'bitcoin',
		name: 'Bitcoin',
		color: '#f79400',
		summary: `${bitcoinAddress.slice(0, 10)}…`,
		qr: { value: `bitcoin:${bitcoinAddress}`, label: 'QR adresa' },
		tables: [{ columns: [{ label: 'Adresa' }], rows: [[bitcoinAddress]] }],
	},
	{
		slug: 'lightning-network',
		name: 'Lightning network',
		color: '#f8700d',
		summary: 'fch@bitlifi.com',
		tables: [
			{
				columns: [{ label: 'Lightning Address' }],
				rows: [
					['fch@bitlifi.com'],
					['+420731742950@bitlifi.com'],
					['fila@walletofsatoshi.com'],
				],
			},
			{
				color: '#04a600',
				columns: [{ label: 'tippin.me' }],
				rows: [
					[
						{
							text: 'tippin.me/@filipchalupa',
							href: 'https://tippin.me/@filipchalupa',
						},
					],
				],
			},
		],
	},
	{
		slug: 'paypal',
		name: 'PayPal',
		color: '#0569b6',
		summary: 'ChalupaFilip',
		tables: [
			{
				columns: [
					{ label: 'Uživatelské jméno' },
					{ label: 'E-mail' },
					{ label: 'Telefon' },
				],
				rows: [
					[
						{ text: 'ChalupaFilip', href: 'https://paypal.me/ChalupaFilip' },
						email,
						phone,
					],
				],
			},
		],
	},
	{
		slug: 'transfer-wise',
		name: 'TransferWise',
		color: '#37517e',
		summary: 'P5111082',
		tables: [
			{
				columns: [{ label: 'E-mail' }, { label: 'Membership number' }],
				rows: [[email, 'P5111082']],
			},
		],
	},
]
