import "./ProjectItem.scss";
import { Button } from "../../Button/Button";
import { Chip } from "../../Chip/Chip";
import { useNavigate } from "react-router-dom";

export function ProjectItem({ project }) {
  const techStackArray = Object.values(project.techStack);
  const items = techStackArray[0].split(",");

  const navigate = useNavigate();

  const openDetailsPage = (id) => {
    navigate(`/project/${id}`);
  };

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
        <div className="">
          <h2 className="project__card--heading">{project.name}</h2>
          <div className="project__card--text-techstack">
            {items.map((stack) => {
              return <Chip key={stack} techName={stack} />;
            })}
          </div>
          <p>{project.about}</p>
        </div>
        <div className="project__card-btns">
          <Button
            hrefLink={project.liveDemo}
            caption={`Live Demo`}
            buttonClass={"btn btn--project"}
            newTab={true}
          />

          <a
            className="btn btn--project"
            onClick={() => openDetailsPage(project._id)}
            href={`/project/${project._id}`}
          >
            Details
          </a>
        </div>
      </div>
    </article>
  );
}
