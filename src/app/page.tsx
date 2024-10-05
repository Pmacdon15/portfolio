import PageHeader from "@/components/ui/page-header";
import ContentContainerImageLeft from "@/components/ui/content-container-image-left";
import ContentContainerImageRight from "@/components/ui/content-container-image-right";
import ContentContainer from "@/components/ui/content-container";

const text1 = `I‘m a passionate software developer with a specializing in building high-performance applications using Next.js and TypeScript. 
                With a strong foundation in modern web development. Currently, I‘m exploring the capabilities of Vercel for seamless hosting and deployment. 
                Currently in my last year at Bow Valley College, I‘m now seeking opportunities in the software industry where I can leverage my expertise to 
                drive impactful solutions, collaborate with like-minded professionals on innovative projects, and continue growing as a developer. I‘m eager 
                to apply my strong work ethic and problem-solving abilities to drive innovation and growth in tech. `;

const text2 = `Currently in my last year at Bow Valley College, I‘m now seeking opportunities in the software industry where I can leverage my expertise 
                to drive impactful solutions, collaborate with like-minded professionals on innovative projects, and continue growing as a developer. I‘m eager to start 
                collaborating with a team of like-minded professionals on innovative projects and continue growing as a developer. `;

const text3 = `This wealth of experience has honed my skills in safety, logistics, and customer service, making me a reliable and skilled professional 
                in the transportation industry. What I bring into development from driving is impeccable time management and taking initiative in problem solving and dealing with uniqie situations.`;

export default function Home() {
  return (
    <>
      <PageHeader title='About Me' />
      <ContentContainerImageLeft text={text1} imagePath={'/limoDriver.jpg'} />
      <ContentContainerImageRight text={text2} imagePath={'/truckDriver.jpg'} />
      <ContentContainer text={text3} />
    </>
  );
}
