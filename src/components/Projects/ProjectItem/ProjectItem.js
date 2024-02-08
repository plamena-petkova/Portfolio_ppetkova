import "./ProjectItem.scss";
import { Button } from "../../Button/Button";
import { Chip } from "../../Chip/Chip";

export function ProjectItem({project}) {

  const techStackArray = Object.values(project.techStack);
  const items = techStackArray[0].split(',');

  return (
    <article className="project__card">
      <div className="project__card--picture">
        <img src={project.picture} alt="chat-logo" className="project__card--picture-img" />
      </div>
      <div className="project__card--text">
        <h2 className="project__card--heading">{project.name}</h2>
        <div className="project__card--text-techstack">
          {items.map((stack, index) => {
            return <Chip key={index} techName={stack}/>
          })}
        </div>
        <p>
          {project.about}
        </p>
        <div className="project__card-btns">
        <Button hrefLink={project.liveDemo} caption={"Live Demo"} buttonClass={"btn btn--project"} />
        <Button hrefLink={project.gitRepo} caption={'Github Repo'} buttonClass={"btn btn--project"} />
        </div>
      </div>
    </article>
  );
}

/*
         <Chip techName={'React'} />
          <Chip techName={'Material UI'} />
          <Chip techName={'Socket.IO'} />
          <Chip techName={'Node.js/Express'} />
          <Chip techName={'MongoDB Atlas'} />
          <Chip techName={'Mongoose'} />
          <Chip techName={'React Redux'} />
          <Chip techName={'Emoji Picker React'} />
          <Chip techName={'React Router Dom'} />
          <Chip techName={'Uuid'} />
          <Chip techName={'Axios'} />

  */
