import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className='bg-cyan-400 bg-opacity-70 w-3/6  text-center rounded-md shadow-md p-4 '>
        <h2 className="text-2xl font-bold drop-shadow-2xl 0 ">About Me </h2>
      </div>

      <div className='bg-cyan-300 w-full md:w-5/6  rounded-md shadow-xl p-4'>
        <div className="flex flex-col md:flex-row gap-2 rounded-md p-4 bg-[url('/paper.jpeg')] bg-cover">
          <Image src="/limoDriver.jpg" alt="Patrick MacDonald" width={200} height={200} className="rounded-md" />
          <p className="flex flex-col indent-4  text-lg md:text-xl text-center  justify-center items-center">
            With over 13 years of experience behind the wheel, I&lsquo;ve established a versatile and accomplished
            career as a commercial driver. My expertise spans a broad range of vehicles, including tow trucks,
            luxury limousines, party buses, and specialized equipment like crane trucks. Additionally, I&lsquo;ve
            logged extensive hours driving tractor trailers, demonstrating my adaptability and proficiency in
            operating diverse commercial vehicles. This wealth of experience has honed my skills in safety,
            logistics, and customer service, making me a reliable and skilled professional in the transportation
            industry.
          </p>
        </div>
      </div>

      <div className='bg-cyan-300 bg-opacity-70 w-full md:w-5/6  rounded-md shadow-xl p-4'>
        <div className="flex flex-col md:flex-row gap-2 rounded-md p-4 bg-[url('/paper.jpeg')] bg-cover">
          <p className="flex flex-col indent-4  text-lg md:text-xl text-center  justify-center items-center">
            I&lsquo;ve made the exciting decision to switch careers and pursue software development.
            Currently enrolled at Bow Valley College, I&lsquo;m acquiring the skills and knowledge
            necessary to succeed in this dynamic field. I&lsquo;m eager to apply my strong work ethic and problem-solving
            abilities to drive innovation and growth in tech.
          </p>
          <Image src="/truckDriver.jpg" alt="Patrick MacDonald" width={200} height={200} className="flex flex-row rounded-md ml-auto" />
        </div>
      </div>

      <div className='bg-cyan-300 w-full md:w-5/6  rounded-md shadow-xl p-4'>
        <div className="flex flex-col md:flex-row gap-2 rounded-md p-4 bg-[url('/paper.jpeg')] bg-cover">
          <p className="flex flex-col indent-4  text-lg md:text-xl text-center  justify-center items-center">
            I&lsquo;m a passionate software developer with a specialty in building high-performance applications using
            Next.js and TypeScript. With a strong foundation in modern web development, I&lsquo;m excited to bring my skills
            to innovative projects. Currently, I&lsquo;m exploring the capabilities of Vercel for seamless hosting and deployment.
            I&lsquo;m now seeking opportunities in the software industry where I can leverage my expertise to drive impactful solutions,
            collaborate with like-minded professionals, and continue growing as a develope
          </p>
        </div>
      </div>
    </>
  );
}
