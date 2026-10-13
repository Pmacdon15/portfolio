import ContentContainer from '@/components/ui/content-container'
import ContentContainerImageLeft from '@/components/ui/content-container-image-left'
import ContentContainerImageRight from '@/components/ui/content-container-image-right'
import ProjectsContainer from '@/components/ui/projects-container'

const text1 = `Just graduated from Bow Valley College for software development, and I'm passionate in both the cliché and the literal sense. I have a love for making websites — it seems like the greatest equalizer.
				As a solo dev with a single user, I have access to the same hardware as billion-dollar companies through services like Vercel and AWS. A site I build can scale up and handle as many users as Netflix, with the reliability to match.
`

const text2 = `I've leveraged a great online community of "pay as you grow" and "pay as you use" providers to gain skill and experience working with services such as Clerk, WorkOS, Kinde, Novu, Google Cloud,
			   Neon, and Vercel Blob, to name a few. These skills let me set up and configure new services into projects with comfort.
`

const text3 = `My framework of choice is Next.js, and of course I use Tailwind. What excites me about Next.js is its blend of server and client components, with the added layer of static and dynamic content. Its rendering
				strategy and cached components are really interesting to me — especially the tactics you can use to keep a component static. I'm also very interested in what Svelte is doing with the way it fetches data on the client or server,
				giving components direct access to the values instead of prop drilling. Although most of my projects are with Next.js, I'm very open to learning and playing around with other frameworks and languages.
				Speaking of which — TypeScript or JavaScript? TS all day; the type gymnastics save you tenfold in the long run. Anyway, if you've got this far, thank you.
`

export default function Home() {
	return (
		<>
			<ContentContainerImageLeft
				imagePath={'/limoDriver.jpg'}
				text={text1}
			/>
			<ContentContainerImageRight imagePath={'/pat.jpg'} text={text2} />
			<ContentContainer text={text3} />
			<ProjectsContainer />
		</>
	)
}
