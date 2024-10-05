import PageHeader from "@/components/ui/page-header";
import ProjectContainerLeft from "@/components/ui/projects-container-image-left";
import ProjectContainerRight from "@/components/ui/projects-container-image-right";

const projects = [
  {
    title: "Pat's Pre-Trips",
    text: `Pat's Pre-trips is a web app that I developed using Type Script, Nextjs, Mui and Auth Kit. It is a pre-trip
    inspection app that allows users to create an account, log in, and perform inspections and list on route defects. The app
    features Auth Kit by Work OS for signup page and sign in as well as backend authentication. Additionally,
    the app includes a current trips and past trips page. The app is designed to be user-friendly and intuitive,
    providing a seamless experience for users. I am proud of the outcome of this project and look forward to
    further enhancing its capabilities in the future.`,
    imagePath: "/PreTrips.jpg",
    githubUrl: "https://github.com/Pmacdon15/pats-pretrip",
    url: "https://patspretrips.vercel.app/"
  },
  {
    title: "Pat GPT",
    text: `PatGPT is an Android app that I developed using Java and XML. It
              serves as both a chat and image generator application, leveraging the
              power of the GPT-3 Turbo and DALL-E-3 models. Currently, it's a work
              in progress, serving as the final assignment for my mobile app
              development class. While I'm satisfied with the app's overall layout
              and functionality, there are several enhancements I plan to implement.
              These include enabling users to share images directly instead of just
              links, facilitating text sharing, incorporating a history feature, and
              integrating an SQLite database for improved data management.`,
    imagePath: "/PatGPT.png",
    githubUrl: "https://github.com/Pmacdon15/PatGPT",
    url: ""
  },
  {
    title: "Pat Chat",
    text: `PatChat is a real-time chat application built utilizing JavaScript, WebSockets, and Node.js, enabling seamless user interactions.`,
    imagePath: "/PatChat.png",
    githubUrl: "https://github.com/Pmacdon15/PatChat",
    url: "https://www.patchat.ca"
  },
  {
    title: "Guess The Celebrity Game",
    text: `I developed 'Guess The Celebrity Game' using Java within Android
                  Studio, aiming to create an entertaining and interactive experience
                  for users. This project served as a pivotal learning opportunity,
                  allowing me to delve deeper into Android Studio, Java programming, and
                  the Android operating system. Throughout the development process, I
                  acquired a comprehensive understanding of essential concepts such as
                  saving and restoring state, as well as exploring various built-in
                  functions that can be overridden to customize app behavior.`,
    imagePath: "/GuessingGame.png",
    githubUrl: "https://github.com/Pmacdon15/Guess-The-Celebrity-Game",
    url: ""
  },
  {
    title: "Todo",
    text:` I developed a todo app using JavaScript, Express, Node.js, JWT, and
        MySQL. The APIs are secured through user authorization facilitated by
        JWT and cookies. Users can create an account, log in, and perform CRUD
        operations on todos. Additionally, the app features a signup page for
        new users. Crafting this project was both enjoyable and enlightening. It provided
        me with valuable insights into user authentication and API protection
        using JWT and cookies. Furthermore, I deepened my understanding of
        Express and gained proficiency in MySQL. I eagerly anticipate
        furthering my expertise in these areas in the future.`,
    imagePath: "/Todo.png",
    githubUrl: "https://github.com/Pmacdon15/todo",
    url: ""
  },
  {
    title: "Shenanigans Mac-Server-Face",
    text:`This server is a central hub for conducting HID attacks, optimized for use with the O.MG cable and other HID injection tools. 
                It seamlessly interfaces with devices, executing PowerShell and Bash scripts on target systems. The server boasts an extensive script library, 
                including utilities for WiFi password extraction, file mapping, and whimsical pranks like Rick Rolls and fake ransomware attacks. With robust 
                storage and dual base script versions for Ducky and HID devices, users can easily initiate and manage scripts. Offering a versatile and 
                user-friendly platform for practical data extraction and creative explorations.`,
    imagePath: "/Shenanigans.jpeg",
    githubUrl: "https://github.com/Pmacdon15/MacServerFace",
    url: ""
  },
  {
    title: "Next Phisher",
    text: `Next Phisher is a Next.js-based phishing framework featuring a decoy website that redirects users to a customizable phishing page. 
                Admins can seamlessly redirect users and capture sensitive information, which is displayed in the administrative panel. Ideal for security testing 
                and awareness training, Next Phisher provides a sophisticated and manageable phishing solution.`,
    imagePath: "/Shenanigans.jpeg",
    githubUrl: "https://github.com/Pmacdon15/nextphisher",
    url: ""
  }
];


export default function Projects() {
  return (
    <>
      <PageHeader title="Projects" />
      {projects.map((project, index) => {
        const ProjectContainer = index % 2 === 0 ? ProjectContainerLeft : ProjectContainerRight;
        return (
          <ProjectContainer
            key={index}
            title={project.title}
            text={project.text}
            imagePath={project.imagePath}
            gitHubUrl={project.githubUrl}
            linkText={project.title}
            website={project.url}
          />
        );
      })}      
    </>
  );
};