import PageHeader from "@/components/ui/page-header";
import ProjectContainer from "@/components/ui/projects-container";

const text1 = `Pat's Pre-trips is a web app that I developed using Type Script, Nextjs, Mui and Auth Kit. It is a pre-trip
            inspection app
            that allows users to create an account, log in, and perform inspections and list on route defects. The app
            features Auth Kit by Work OS for signup page and sign in as well as backend authentication. Additionally,
            the
            app includes a current trips and past trips page. The app is designed to be user-friendly and intuitive,
            providing a seamless experience for users. I am proud of the outcome of this project and look forward to
            further enhancing its capabilities in the future.`;

export default function Projects() {
  return (
    <>
      <PageHeader title="Projects" />
      <ProjectContainer text={text1} imagePath={"/PreTrips.jpg"} url={"https://github.com/Pmacdon15/pats-pretrip"} linkText={"Pat's Pre Trips"} />
    </>
  );
};