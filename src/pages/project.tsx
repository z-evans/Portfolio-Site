import { FunctionComponent } from "react";
import content from "../data/content";
import { ProjectCards, ProjectSection } from "../styles/pages/project";

interface ProjectProps {
  name: string;
  description: string;
  src: string | undefined;
  image: string;
  tech: string[];
}

const ProjectItem: FunctionComponent<ProjectProps> = ({
  name,
  description,
  src,
  image,
  tech,
}) => {
  return (
    <a href={src} target="_blank" key={name}>
      <div className="content">
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <div>
            {tech.map((x) => (
              <img src={x} key={x} />
            ))}
          </div>
        </div>
        <img src={image} alt={name} />
      </div>
    </a>
  );
};

function ProjectPage() {
  return (
    <>
      <ProjectSection>
        <div>
          <h2>My Projects</h2>
          <ProjectCards>{content.pages.projects.map(ProjectItem)}</ProjectCards>
        </div>
      </ProjectSection>
    </>
  );
}

export default ProjectPage;
