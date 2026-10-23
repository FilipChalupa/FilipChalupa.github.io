import { Route, Routes } from 'react-router'
import { useDocumentMeta } from './meta'
import { notFoundPage, pages, type Page as PageType } from './routes'

const Page = ({ page }: { page: PageType }) => {
	useDocumentMeta(page.meta)
	return page.element
}

export const App = () => (
	<Routes>
		{[...pages, notFoundPage].map((page) => (
			<Route key={page.path} path={page.path} element={<Page page={page} />} />
		))}
	</Routes>
)
