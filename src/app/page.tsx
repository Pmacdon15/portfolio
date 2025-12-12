import ContentContainer from '@/components/ui/content-container'
import ContentContainerImageLeft from '@/components/ui/content-container-image-left'
import ContentContainerImageRight from '@/components/ui/content-container-image-right'
import ProjectsContainer from '@/components/ui/projects-container'

const text1 = `Just graduated college for software development at Bow Valley College I'm passionate in both the cliche and literal sense. I have a love for making websites, it seems like the greatest equalizer.
				My self a solo dev with only 1 user has access to the same hardware as billion dollar companies with services such as Vercel and AWS. A site I build can scale up and handle and many users as netflix and 
				has reliability too.
`

const text2 = `I've leveraged a great online community that have a "pay as you grow" or "pay as you use" to gain skill and experience working with different service providers such as Clerk, WorkOs, Kinde, Novu, Google Cloud,
			   Neon, Vercel Blobs to name a few. I believe these skills have allow me to setup and configure new services in to projects with comfort. 
`

const text3 = `My framework of choice is NextJs, and of corse I use Tailwind. What excited me about NextJs its its blend of server and client components with the added layer of static and dynamic content. NextJs rendering
				strategy cached components is really interesting to me especially the tactics you can use to keep a component static. I also very interested in what Svelte is doing with the way they fetch data on the client or sever 
				and components have access to the values instead of prop drilling. Although most of my projects are with NextJs I'm very open to learning and playing around with other frameworks and langues. 
				Speaking of which Type Script or Java Script? TS all day, the type gymnastics saves you 10 fold in the long run. Anyways if you've got this far thank you.      
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
