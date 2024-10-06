import PageHeader from "@/components/ui/page-header";
import Image from "next/image";
const certs = ['cSharp.png', 'networking.png', 'python.png',];

export default function Page() {
  return (
    <>
      <PageHeader title="Certifications" />
      <>
        {certs.map((cert, index) => (
          <div className='bg-cyan-300 w-fit  rounded-md shadow-xl p-4'>
            <div className="flex flex-col gap-2 rounded-md p-4 bg-[url('/paper.jpeg')] bg-cover">
              <Image key={index} src={`/certs/${cert}`} alt={cert} width={600} height={600} />
            </div>
          </div>

        ))}
      </>
    </>
  );
};