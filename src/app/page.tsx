import PageHeader from "@/components/ui/page-header";
import ContentContainerImageLeft from "@/components/ui/content-container-image-left";
import ContentContainerImageRight from "@/components/ui/content-container-image-right";
import ContentContainer from "@/components/ui/content-container";

const text1 = `With over 13 years of experience behind the wheel, I&lsquo;ve established a versatile and accomplished
            career as a commercial driver. My expertise spans a broad range of vehicles, including tow trucks,
            luxury limousines, party buses, and specialized equipment like crane trucks. Additionally, I&lsquo;ve
            logged extensive hours driving tractor trailers, demonstrating my adaptability and proficiency in
            operating diverse commercial vehicles. This wealth of experience has honed my skills in safety,
            logistics, and customer service, making me a reliable and skilled professional in the transportation
            industry.`;

const text2 = `I&lsquo;ve made the exciting decision to switch careers and pursue software development.
            Currently enrolled at Bow Valley College, I&lsquo;m acquiring the skills and knowledge
            necessary to succeed in this dynamic field. I&lsquo;m eager to apply my strong work ethic and problem-solving
            abilities to drive innovation and growth in tech.`;

const text3 = `I&lsquo;m a passionate software developer with a specialty in building high-performance applications using
            Next.js and TypeScript. With a strong foundation in modern web development, I&lsquo;m excited to bring my skills
            to innovative projects. Currently, I&lsquo;m exploring the capabilities of Vercel for seamless hosting and deployment.
            I&lsquo;m now seeking opportunities in the software industry where I can leverage my expertise to drive impactful solutions,
            collaborate with like-minded professionals, and continue growing as a developer.`;

export default function Home() {
  return (
    <>
      <PageHeader title='About Me' />
      <ContentContainerImageLeft text={text1} imagePath={'/limoDriver.jpg'} > </ContentContainerImageLeft>
      <ContentContainerImageRight text={text2} imagePath={'/truckDriver.jpg'} />
      <ContentContainer text={text3} />      
    </>
  );
}
