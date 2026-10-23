import { useEffect, useState, type ChangeEvent } from 'react'
import { useSearchParams } from 'react-router'
import { QrCode } from '../../components/QrCode'
import {
	emptyPayment,
	fromSearchParams,
	parseAmount,
	sanitizeMessage,
	sanitizeVariableSymbol,
	toSearchParams,
	toSpayd,
	type PaymentValues,
} from './spayd'

const inputClassName =
	'w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-2'

const sanitizers: Partial<Record<keyof PaymentValues, (value: string) => string>> =
	{
		variableSymbol: sanitizeVariableSymbol,
		message: sanitizeMessage,
	}

export const QrPayment = ({ iban, color }: { iban: string; color: string }) => {
	const [searchParams, setSearchParams] = useSearchParams()
	// Prerendered HTML has no query, so the URL is read only after hydration
	const [values, setValues] = useState(emptyPayment)
	const [status, setStatus] = useState('')
	const [canShare, setCanShare] = useState(false)

	useEffect(() => {
		setValues(fromSearchParams(searchParams))
		setCanShare('share' in navigator)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleChange =
		(name: keyof PaymentValues) => (event: ChangeEvent<HTMLInputElement>) => {
			const value = sanitizers[name]?.(event.target.value) ?? event.target.value
			const next = { ...values, [name]: value }
			setValues(next)
			setStatus('')
			setSearchParams(toSearchParams(next), {
				replace: true,
				preventScrollReset: true,
			})
		}

	const copyLink = async () => {
		try {
			await navigator.clipboard.writeText(location.href)
			setStatus('Zkopírováno')
		} catch {
			setStatus(location.href)
		}
	}

	const share = () => {
		navigator.share({ title: 'QR platba', url: location.href }).catch(() => {})
	}

	const invalidAmount = Number.isNaN(parseAmount(values.amount))

	return (
		<form
			className="grid gap-4 sm:grid-cols-[1fr_auto] items-start my-4 dark:text-gray-200"
			onSubmit={(event) => event.preventDefault()}
		>
			<div className="grid gap-3">
				<label className="block">
					<span className="block text-sm mb-1">Částka (Kč)</span>
					<input
						value={values.amount}
						onChange={handleChange('amount')}
						inputMode="decimal"
						autoComplete="off"
						placeholder="nevyplněno"
						aria-invalid={invalidAmount}
						className={inputClassName}
					/>
					{invalidAmount && (
						<span className="block text-sm mt-1 text-red-600 dark:text-red-400">
							Neplatná částka, v QR kódu nebude.
						</span>
					)}
				</label>
				<label className="block">
					<span className="block text-sm mb-1">Variabilní symbol</span>
					<input
						value={values.variableSymbol}
						onChange={handleChange('variableSymbol')}
						inputMode="numeric"
						autoComplete="off"
						className={inputClassName}
					/>
				</label>
				<label className="block">
					<span className="block text-sm mb-1">Zpráva pro příjemce</span>
					<input
						value={values.message}
						onChange={handleChange('message')}
						maxLength={60}
						autoComplete="off"
						className={inputClassName}
					/>
				</label>
				<div className="flex flex-wrap items-center gap-3">
					<button
						type="button"
						onClick={copyLink}
						className="py-2 px-3 text-white hover:opacity-90"
						style={{ backgroundColor: color }}
					>
						Kopírovat odkaz
					</button>
					{canShare && (
						<button
							type="button"
							onClick={share}
							className="py-2 px-3 text-white hover:opacity-90"
							style={{ backgroundColor: color }}
						>
							Sdílet
						</button>
					)}
					<span className="text-sm break-all" aria-live="polite">
						{status}
					</span>
				</div>
			</div>
			{/* Pushed down by the label height and sized to span the three inputs */}
			<figure className="justify-self-center text-center sm:mt-6">
				<QrCode value={toSpayd(iban, values)} label="QR platba" size={198} />
				<figcaption className="text-sm mt-1">QR Platba</figcaption>
			</figure>
		</form>
	)
}
