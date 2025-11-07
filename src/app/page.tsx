import { CarouselProjects } from '@/components/carousels/carousel-projects'
import ContentContainer from '@/components/ui/content-container'
import ContentContainerImageLeft from '@/components/ui/content-container-image-left'
import ContentContainerImageRight from '@/components/ui/content-container-image-right'

const text1 = `I’m a passionate software developer specializing in high-performance applications with Next.js 
                and TypeScript. I love the flexibility of Next.js and the seamless deployment that Vercel offers, making every 
                project smoother and more efficient. I’m also excited about exploring the many storage tools and options available 
                to enhance functionality. With a strong foundation in state management, I excel at creating custom hooks to boost 
                performance. Currently in my final year at Bow Valley College, I’m eager to bring my problem-solving skills and dedication
                to a collaborative team where I can drive innovation and grow in the software industry `

const text2 = `As a driven software developer, I'm excited to expand my expertise and collaborate with like-minded professionals on cutting-edge projects. With a solid foundation in modern web development,
               I'm eager to explore new technologies and innovative solutions.`

const text3 = `prior experience in the transportation industry has instilled in me valuable skills in logistics, problem-solving, and customer service. As a developer, I leverage these strengths to deliver timely, 
              reliable, and innovative solutions, approaching each challenge with initiative and creative thinking.`

export default function Home() {
	return (
		<>
			<ContentContainerImageLeft
				imagePath={'/limoDriver.jpg'}
				text={text1}
			/>
			<ContentContainerImageRight
				imagePath={'/truckDriver.jpg'}
				text={text2}
			/>
			<ContentContainer text={text3} />
			<CarouselProjects />
		</>
	)
}
