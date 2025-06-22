import ProjectContainerLeft from "@/components/ui/projects-container-image-left";
import ProjectContainerRight from "@/components/ui/projects-container-image-right";
import { projects } from "@/lib/utils/projects";

export default function Projects() {
  return (
    <>
      {projects.map((project, index) => {
        //Switch between left and right image containers
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