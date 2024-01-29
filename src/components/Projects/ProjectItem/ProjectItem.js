import "./ProjectItem.scss";
import logoChat from "../../../assets/remote-5491798_1280.png";
import { Button } from "../../Button/Button";
import { Chip } from "../../Chip/Chip";

export function ProjectItem() {
  return (
    <article className="project__card">
      <div className="project__card--picture">
        <img src={logoChat} alt="chat-logo" className="project__card--picture-img" />
      </div>
      <div className="project__card--text">
        <h2 className="project__card--heading">ChatZak</h2>
        <div className="project__card--text-techstack">
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
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          illo odit blanditiis, provident tempora sapiente esse libero vitae
          voluptates, commodi nam tenetur iure saepe beatae praesentium mollitia
          tempore aliquam error?
        </p>
        <div className="project__card-btns">
        <Button caption={"Live Demo"} buttonClass={"btn btn--project"} />
        <Button caption={"Github"} buttonClass={"btn btn--project"} />
        </div>
       
      </div>
    </article>
  );
}
