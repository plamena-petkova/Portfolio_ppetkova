import { useEffect, useState } from "react";
import { useDeveloperContext } from "../../../context/developerContext";
import { ProjectItem } from "../ProjectItem/ProjectItem";
import "./ProjectView.scss";

export function ProjectView() {

  const {projects} = useDeveloperContext();

  const [projectsArray, setProjectsArray] = useState([]);

  useEffect(() => {
    if(projects) {
      setProjectsArray(projects.projects)
    }
  }, [projects])


  return (
    <section id="projects" className="container__projects">
      <h2 className="container__projects-heading">Personal <span className="container__projects-heading--italic">Projects</span></h2>
      {projectsArray?.length && projectsArray.map((project) => {
        return <ProjectItem key={project._id} project={project} />
      })}
    </section>
  );
}
