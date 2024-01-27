import "./ProjectItem.scss";
import logoChat from "../../../assets/chatzakLogo.png";

export function ProjectItem() {
  return (
    <div className="project__card">
      <h2 className="project__card--heading">
        ChatZak application to connect people
      </h2>
      <img
        src={logoChat}
        alt="project-1"
        className="project__card--img"
      />
    </div>
  );
}
