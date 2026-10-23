import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { App } from './App'

export { notFoundPage, pages } from './routes'
export { defaultIcons } from './meta'

export const render = (url: string) =>
	renderToString(
		<StrictMode>
			<StaticRouter location={url}>
				<App />
			</StaticRouter>
		</StrictMode>,
	)
