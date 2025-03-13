import "./ProjectItem.scss";
import { Button } from "../../Button/Button";
import { Chip } from "../../Chip/Chip";

export function ProjectItem({ project }) {
  const techStackArray = Object.values(project.techStack);
  const items = techStackArray[0].split(",");

  return (
    <article className="project__card">
      <div className="project__card--picture">
        <img
          src={project.picture}
          alt="chat-logo"
          className="project__card--picture-img"
        />
      </div>
      <div className="project__card--text">
        <h2 className="project__card--heading">{project.name}</h2>
        <div className="project__card--text-techstack">
          {items.map((stack) => {
            return <Chip key={stack} techName={stack} />;
          })}
        </div>
        <p>{project.about}</p>
        <div className="project__card-btns">
          <Button
            hrefLink={project.liveDemo}
            caption={`Live Demo`}
            buttonClass={"btn btn--project"}
            newTab={true}
          />

          {project.gitRepo.map((btn, index) => {
            return (
              <Button
                key={index}
                hrefLink={btn.link}
                caption={`GutHub Repo ${btn.use}`}
                buttonClass={"btn btn--project"}
                newTab={true}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}
