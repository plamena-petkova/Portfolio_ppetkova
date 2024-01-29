import { ProjectItem } from "../ProjectItem/ProjectItem";
import "./ProjectView.scss";

export function ProjectView({ items }) {
  return (
    <section id="projects" className="container__projects">
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </section>
  );
}
