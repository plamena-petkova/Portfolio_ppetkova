import { ProjectItem } from "../ProjectItem/ProjectItem";
import "./ProjectView.scss";

export function ProjectView() {
  return (
    <section id="projects" className="container__projects">
      <h2 className="container__projects-heading">Personal <span className="container__projects-heading--italic">Projects</span></h2>
      <ProjectItem />
    </section>
  );
}
