import { PageLayout } from '../components/PageLayout'
import { TextLink } from '../components/TextLink'

export const NotFound = () => (
	<PageLayout>
		<h1 className="text-2xl font-bold my-4">Stránka nenalezena</h1>
		<p>
			Tahle stránka neexistuje. Zkus{' '}
			<TextLink to="/">úvodní stránku</TextLink>.
		</p>
	</PageLayout>
)
