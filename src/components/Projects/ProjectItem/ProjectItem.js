import "./ProjectItem.scss";
import logoChat from "../../../assets/remote-5491798_1280.png";
import { Button } from "../../Button/Button";

export function ProjectItem() {
  return (
    <div className="project__card">
      <h2 className="project__card--heading">ChatZak</h2>
      <div className="project__card--base">
        <img src={logoChat} alt="chat-logo" className="project__card--img" />
        <Button caption={"Show"} buttonClass={"btn btn--project"} />
      </div>
    </div>
  );
}
