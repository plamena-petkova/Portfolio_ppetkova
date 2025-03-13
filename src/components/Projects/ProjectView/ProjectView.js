import { useDeveloperContext } from "../../../context/developerContext";
import { ProjectItem } from "../ProjectItem/ProjectItem";
import "./ProjectView.scss";

export function ProjectView() {
  const { projects } = useDeveloperContext();

  return (
    <section id="projects" className="container__projects">
      <h2 className="container__projects-heading">
        Personal{" "}
        <span className="container__projects-heading--italic">Projects</span>
      </h2>
      <div className="container__projects--items">
        {projects?.projects?.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}
