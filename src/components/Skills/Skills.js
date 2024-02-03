import IcomoonReact from "icomoon-react";
import iconSet from "../../assets/selection.json";
import "./Skills.scss";

export function Skills() {
  return (
    <section id="skills" className="container__skills">
      <div className="container__skills-heading">
        <h2 className="container__skills-heading-text">My <span className="container__skills-heading-text-italic">Skills</span></h2>
      </div>
      <div className="container__skills-items">
        <div className="container__skills-items-frontend">
          <section className="container__skills-list">
            <div className="container__skills-items-frontend-icon">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={70}
                icon="embed2"
              />
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Javascript</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>React</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Angular</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>HTML/CSS/SASS</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>React Redux Toolkit</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Material UI</p>
            </div>
          </section>
        </div>
        <div className="container__skills-items-backend">
          <section className="container__skills-list">
            <div className="container__skills-items-backend-icon">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={70}
                icon="database"
              />
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Node.js</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Express</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>MongoDB/Atlas</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Rest APIs</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Rest APIs</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Socket.IO</p>
            </div>
          </section>
        </div>
        <div className="container__skills-items-others">
          <section className="container__skills-list">
            <div className="container__skills-items-others-icon">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={70}
                icon="stack"
              />
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Github</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Servicenow</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Jira</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Scrum/Agile</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Firebase</p>
            </div>
            <div className="container__skills-list-item-box">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="checkmark"
              ></IcomoonReact>
              <p>Rest APIs</p>
            </div>
          </section>
        </div>
      </div>
      <div className="container__skills-certificates"></div>
    </section>
  );
}

//  <h1 className="container__heading">Skills Overview</h1>
