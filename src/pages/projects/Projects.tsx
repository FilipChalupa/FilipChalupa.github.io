import { PageLayout } from '../../components/PageLayout'
import { packageGroups, projectSections, type Project } from './data'

const linkClassName = 'text-brand-green hover:underline'

const Thumbnail = ({ project }: { project: Project }) => {
	const className =
		'block aspect-[8/5] border-b border-gray-200 dark:border-gray-700'
	if (!project.url || project.noThumbnail) {
		return (
			<div
				className={`${className} flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 text-center text-2xl font-bold text-gray-400 dark:text-gray-500`}
			>
				{project.name}
			</div>
		)
	}
	return (
		<a href={project.url} className={`${className} overflow-hidden`} tabIndex={-1}>
			<img
				src={`/projects/${project.slug}.webp`}
				alt=""
				width="960"
				height="600"
				loading="lazy"
				className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
			/>
		</a>
	)
}

const ProjectCard = ({ project }: { project: Project }) => (
	<li className="group flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-brand-green">
		<Thumbnail project={project} />
		<div className="flex grow flex-col gap-2 p-4">
			<h3 className="text-lg font-bold">
				{project.url ? (
					<a href={project.url} className="hover:text-brand-green">
						{project.name}
					</a>
				) : (
					project.name
				)}
			</h3>
			<p className="text-sm text-gray-600 dark:text-gray-300">
				{project.description}
			</p>
			{project.controls && (
				<p className="flex flex-wrap items-center gap-1 text-sm">
					Ovládání:
					{project.controls.map((key) => (
						<kbd
							key={key}
							className="bg-gray-200 dark:bg-gray-700 px-1 font-mono"
						>
							{key}
						</kbd>
					))}
				</p>
			)}
			<p className="mt-auto flex flex-wrap gap-x-4 pt-2 text-sm">
				{project.url && (
					<a href={project.url} className={`${linkClassName} font-bold`}>
						Otevřít
					</a>
				)}
				{project.links.map(({ label, href }) => (
					<a key={href} href={href} className={linkClassName}>
						{label}
					</a>
				))}
			</p>
		</div>
	</li>
)

export const Projects = () => (
	<PageLayout wide>
		<h1 className="text-2xl font-bold my-4">Vybrané projekty</h1>
		{projectSections.map(({ title, projects }) => (
			<section key={title} className="my-8">
				<h2 className="text-xl font-bold mb-4">{title}</h2>
				<ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
				</ul>
			</section>
		))}
		<section className="my-8">
			<h2 className="text-xl font-bold mb-4">Balíčky / Packages</h2>
			<ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{packageGroups.map(({ description, packages }) => (
					<li
						key={packages[0].name}
						className="flex flex-col gap-1 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-3"
					>
						{packages.map(({ name, repository }) => (
							<p key={name} className="flex flex-wrap items-baseline gap-x-2">
								<a
									href={`https://www.npmjs.com/package/${name}`}
									className={`${linkClassName} font-mono text-sm font-bold break-all`}
								>
									{name}
								</a>
								<a
									href={repository}
									className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
								>
									GitHub
								</a>
							</p>
						))}
						<p className="text-sm text-gray-600 dark:text-gray-300">
							{description}
						</p>
					</li>
				))}
			</ul>
		</section>
	</PageLayout>
)
