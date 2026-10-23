import qrcode from 'qrcode-generator'
import { useMemo } from 'react'

qrcode.stringToBytes = (value) => Array.from(new TextEncoder().encode(value))

const margin = 4

export const QrCode = ({
	value,
	label,
	size = 200,
}: {
	value: string
	label: string
	size?: number
}) => {
	const { path, viewBoxSize } = useMemo(() => {
		const qr = qrcode(0, 'M')
		qr.addData(value, 'Byte')
		qr.make()
		const count = qr.getModuleCount()
		let path = ''
		for (let row = 0; row < count; row++) {
			for (let column = 0; column < count; column++) {
				if (qr.isDark(row, column)) {
					path += `M${column + margin} ${row + margin}h1v1h-1z`
				}
			}
		}
		return { path, viewBoxSize: count + margin * 2 }
	}, [value])

	return (
		<svg
			viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
			width={size}
			height={size}
			role="img"
			aria-label={label}
			shapeRendering="crispEdges"
			className="bg-white max-w-full h-auto"
		>
			<path d={path} fill="#000" />
		</svg>
	)
}
