import { PageLayout } from '../components/PageLayout'
import { TextLink } from '../components/TextLink'

const profiles = [
	{ label: 'GitHub (FilipChalupa)', href: 'https://github.com/FilipChalupa' },
	{
		label: 'LinkedIn (Filip Chalupa)',
		href: 'https://www.linkedin.com/in/chalupafilip/',
	},
	{ label: 'Twitter (filipchalupa)', href: 'https://twitter.com/filipchalupa' },
	{
		label: 'YouTube (FilipChalupa)',
		href: 'https://www.youtube.com/c/FilipChalupa',
	},
	{
		label: 'Facebook (Filip Chalupa)',
		href: 'https://www.facebook.com/profile.Filip',
	},
	{
		label: 'Instagram (_ofecka_)',
		href: 'https://www.instagram.com/_ofecka_/',
	},
	{ label: 'TikTok (ofecka)', href: 'https://www.tiktok.com/@ofecka' },
	{
		label: 'Amboss (ln.filipchalupa.cz)',
		href: 'https://amboss.space/node/03ccf481ea6ee6f8fb919e697268d86a6cb1cf21279deac757e20d976b0a1fdac6',
	},
	{ label: 'Npmjs (onset)', href: 'https://www.npmjs.com/~onset' },
]

export const Identity = () => (
	<PageLayout>
		<h1 className="text-xl font-bold my-4">Identita</h1>
		<ul className="list-disc pl-5">
			{profiles.map(({ label, href }) => (
				<li key={href}>
					<TextLink href={href}>{label}</TextLink>
				</li>
			))}
		</ul>
	</PageLayout>
)
