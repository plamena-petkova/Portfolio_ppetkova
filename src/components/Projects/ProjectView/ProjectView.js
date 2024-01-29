import { ProjectItem } from "../ProjectItem/ProjectItem";
import "./ProjectView.scss";

export function ProjectView({ items }) {
  return (
    <div className="container__projects">
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
}
