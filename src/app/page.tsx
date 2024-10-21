import PageHeader from "@/components/ui/page-header";
import ContentContainerImageLeft from "@/components/ui/content-container-image-left";
import ContentContainerImageRight from "@/components/ui/content-container-image-right";
import ContentContainer from "@/components/ui/content-container";

const text1 = `I‘m a passionate software developer with a specializing in building high-performance applications using Next.js and TypeScript. 
                With a strong foundation in modern web development. Currently, I‘m exploring the capabilities of Vercel for seamless hosting and deployment. 
                Currently in my last year at Bow Valley College, I‘m now seeking opportunities in the software industry where I can leverage my expertise to 
                drive impactful solutions, collaborate with like-minded professionals on innovative projects, and continue growing as a developer. I‘m eager 
                to apply my strong work ethic and problem-solving abilities to drive innovation and growth in tech. `;

const text2 = `As a driven software developer, I'm excited to expand my expertise and collaborate with like-minded professionals on cutting-edge projects. With a solid foundation in modern web development,
               I'm eager to explore new technologies and innovative solutions."`;

const text3 = `prior experience in the transportation industry has instilled in me valuable skills in logistics, problem-solving, and customer service. As a developer, I leverage these strengths to deliver timely, 
              reliable, and innovative solutions, approaching each challenge with initiative and creative thinking.`;

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
