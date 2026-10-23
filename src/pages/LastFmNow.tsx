import { useEffect, useState, type FormEvent } from 'react'

const apiKey = '4bf2f3f683673b6f60730f65cf30cb28'

type Track = {
	id: string
	title: string
	artist: string
	album: string
	cover: string
}

type LastFmImage = { size: string; '#text': string }

const getUsername = () => decodeURIComponent(location.hash.slice(1))

const fetchRecentTrack = async (username: string): Promise<Track> => {
	const response = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(username)}&limit=1&api_key=${apiKey}&format=json`,
	)
	const data = await response.json()
	const track = data.recenttracks?.track?.[0]
	if (!track) {
		throw new Error('No tracks')
	}
	const images: LastFmImage[] = track.image ?? []
	const cover = (
		images.find(({ size }) => size === 'extralarge') ?? images.at(-1)
	)?.['#text']
	return {
		id: track.url,
		title: track.name,
		artist: track.artist['#text'],
		album: track.album['#text'],
		cover: cover ?? '',
	}
}

const notify = ({ title, artist, cover }: Track) => {
	if (!('Notification' in window) || !document.hidden) {
		return
	}
	if (Notification.permission !== 'granted') {
		Notification.requestPermission()
		return
	}
	const notification = new Notification(title, {
		body: `by ${artist}`,
		icon: cover,
	})
	notification.addEventListener('click', () => {
		window.focus()
		notification.close()
	})
	setTimeout(() => notification.close(), 7000)
}

const TrackItem = ({ track, isOld }: { track: Track; isOld: boolean }) => {
	const [isShown, setIsShown] = useState(false)

	useEffect(() => {
		const frame = requestAnimationFrame(() => setIsShown(true))
		return () => cancelAnimationFrame(frame)
	}, [])

	const background = track.cover ? `url("${track.cover}")` : undefined
	const isVisible = isShown && !isOld

	return (
		<div
			className={`absolute inset-0 overflow-hidden flex justify-center items-center transition-[opacity,visibility] duration-500 ${isVisible ? '' : 'opacity-0 invisible'} ${isOld ? 'delay-500' : ''} ${track.cover ? '' : 'bg-white/20'}`}
		>
			<div
				className="absolute -inset-[30px] opacity-85 bg-center bg-no-repeat bg-cover grayscale blur-[1vw]"
				style={{ backgroundImage: background }}
			/>
			<div className="relative flex flex-col md:flex-row p-4 max-w-full">
				{track.cover && (
					<div
						className="mx-auto md:mr-5 w-[300px] max-w-full aspect-square bg-center bg-no-repeat bg-cover"
						style={{ backgroundImage: background }}
					/>
				)}
				<div className="md:max-w-[500px] md:min-w-[300px] [text-shadow:0_0_30px_rgba(0,0,0,0.5)]">
					<div className="mt-1 text-5xl md:-mt-2">{track.title}</div>
					<div className="text-3xl py-3">{track.artist}</div>
					<div>{track.album}</div>
				</div>
			</div>
		</div>
	)
}

export const LastFmNow = () => {
	// null until the hash is read in the browser
	const [username, setUsername] = useState<string | null>(null)
	const [tracks, setTracks] = useState<Track[]>([])
	const [input, setInput] = useState('')

	useEffect(() => {
		const update = () => {
			setUsername(getUsername())
			setTracks([])
		}
		update()
		window.addEventListener('hashchange', update)
		return () => window.removeEventListener('hashchange', update)
	}, [])

	useEffect(() => {
		if (!username) {
			return
		}
		let timeout: ReturnType<typeof setTimeout>
		let isActive = true
		const poll = async () => {
			let delay = 2000
			try {
				const track = await fetchRecentTrack(username)
				if (!isActive) {
					return
				}
				setTracks((tracks) => {
					if (tracks.at(-1)?.id === track.id) {
						return tracks
					}
					notify(track)
					return [...tracks.slice(-1), track]
				})
			} catch (error) {
				console.error(error)
				delay = 5000
			}
			if (isActive) {
				timeout = setTimeout(poll, delay)
			}
		}
		poll()
		return () => {
			isActive = false
			clearTimeout(timeout)
		}
	}, [username])

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		location.hash = input
	}

	const isSelectorShown = username === ''
	const isLoading = username !== '' && tracks.length === 0

	return (
		<div className="fixed inset-0 bg-black text-white font-[Verdana,Geneva,sans-serif]">
			<div
				className={`fixed inset-0 pointer-events-none animate-loading-intro transition-[opacity,visibility] duration-300 ${isLoading ? '' : 'opacity-0 invisible'}`}
			>
				<div className="fixed left-1/2 top-1/2 size-[10vw] -m-[5vw] rounded-full border-[0.3em] border-white animate-loading-pulse" />
			</div>
			{tracks.map((track, index) => (
				<TrackItem
					key={track.id}
					track={track}
					isOld={index < tracks.length - 1}
				/>
			))}
			<section
				className={`absolute inset-0 z-10 bg-black p-4 text-center flex flex-col justify-center items-center transition-[opacity,visibility] duration-500 ${isSelectorShown ? '' : 'opacity-0 invisible'}`}
			>
				<h1 className="text-3xl">Last.fm now playing</h1>
				<form onSubmit={handleSubmit} className="mt-4">
					<input
						value={input}
						onChange={(event) => setInput(event.target.value)}
						placeholder="Username"
						className="block bg-black text-white border border-white px-2 py-1"
					/>
					<button className="mt-2 border-2 border-white rounded-sm px-4 py-1 cursor-pointer">
						Submit
					</button>
				</form>
				<a
					href="https://github.com/Onset/Last.fm-now"
					target="_blank"
					className="mt-12 text-xs text-brand-green hover:underline"
				>
					About Last.fm now
				</a>
			</section>
		</div>
	)
}
