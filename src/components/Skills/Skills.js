import IcomoonReact from "icomoon-react";
import iconSet from "../../assets/selection.json";
import "./Skills.scss";
import { useDeveloperContext } from "../../context/developerContext";

export function Skills() {
  const { skills } = useDeveloperContext();

  const frontSkills = skills?.skills[0]?.frontend;
  const frontednList = frontSkills[0]?.split(",");

  const backendSkills = skills?.skills[0]?.backend;
  const othersSkills = skills.skills[0]?.others;

  const backendList = backendSkills[0].split(",");
  const othersList = othersSkills[0].split(",");

  return (
    <section id="skills" className="container__skills">
      <div className="container__skills-heading">
        <h2 className="container__skills-heading-text">
          My{" "}
          <span className="container__skills-heading-text-italic">Skills</span>
        </h2>
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
            {frontednList.map((listItem, index) => {
              return (
                <div
                  key={listItem.index}
                  className="container__skills-list-item-box"
                >
                  <IcomoonReact
                    iconSet={iconSet}
                    color="#00db00"
                    size={20}
                    icon="checkmark"
                  ></IcomoonReact>
                  <p>{listItem}</p>
                </div>
              );
            })}
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
            {backendList.map((listItem) => {
              return (
                <div
                  key={listItem.index}
                  className="container__skills-list-item-box"
                >
                  <IcomoonReact
                    iconSet={iconSet}
                    color="#00db00"
                    size={20}
                    icon="checkmark"
                  ></IcomoonReact>
                  <p>{listItem}</p>
                </div>
              );
            })}
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
            {othersList.map((listItem, index) => {
              return (
                <div
                  key={listItem.index}
                  className="container__skills-list-item-box"
                >
                  <IcomoonReact
                    iconSet={iconSet}
                    color="#00db00"
                    size={20}
                    icon="checkmark"
                  ></IcomoonReact>
                  <p>{listItem}</p>
                </div>
              );
            })}
          </section>
        </div>
      </div>
      <div className="container__skills-certificates"></div>
    </section>
  );
}

