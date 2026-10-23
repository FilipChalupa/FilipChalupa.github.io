// QR Platba, the Czech payment QR format: https://qr-platba.cz/pro-vyvojare/

export type PaymentValues = {
	amount: string
	variableSymbol: string
	message: string
}

export const emptyPayment: PaymentValues = {
	amount: '',
	variableSymbol: '',
	message: '',
}

// Parameter names of the shareable URL
const searchParamNames: Record<keyof PaymentValues, string> = {
	amount: 'castka',
	variableSymbol: 'vs',
	message: 'zprava',
}

export const sanitizeVariableSymbol = (value: string) =>
	value.replace(/\D/g, '').slice(0, 10)

// `*` separates the fields of the format
export const sanitizeMessage = (value: string) =>
	value.replace(/\*/g, '').slice(0, 60)

export const parseAmount = (value: string) => {
	if (!value.trim()) {
		return null
	}
	const amount = Number(value.replace(/\s/g, '').replace(',', '.'))
	return amount > 0 && amount < 1e7 ? Math.round(amount * 100) / 100 : NaN
}

export const toSpayd = (iban: string, values: PaymentValues) => {
	const amount = parseAmount(values.amount)
	const message = sanitizeMessage(values.message).trim()
	return [
		'SPD',
		'1.0',
		`ACC:${iban}`,
		amount && `AM:${amount.toFixed(2)}`,
		'CC:CZK',
		'RN:Filip Chalupa',
		values.variableSymbol && `X-VS:${values.variableSymbol}`,
		message && `MSG:${message}`,
	]
		.filter(Boolean)
		.join('*')
}

export const fromSearchParams = (params: URLSearchParams): PaymentValues => ({
	amount: params.get(searchParamNames.amount) ?? '',
	variableSymbol: sanitizeVariableSymbol(
		params.get(searchParamNames.variableSymbol) ?? '',
	),
	message: sanitizeMessage(params.get(searchParamNames.message) ?? ''),
})

export const toSearchParams = (values: PaymentValues) => {
	const params = new URLSearchParams()
	for (const [key, name] of Object.entries(searchParamNames)) {
		const value = values[key as keyof PaymentValues].trim()
		if (value) {
			params.set(name, value)
		}
	}
	return params
}
