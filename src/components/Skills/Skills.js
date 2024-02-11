import IcomoonReact from "icomoon-react";
import iconSet from "../../assets/selection.json";
import "./Skills.scss";
import { useDeveloperContext } from "../../context/developerContext";
import { useEffect, useState } from "react";

export function Skills() {
  const { skills } = useDeveloperContext();

  const [frontendList, setFrontendList] = useState([]);
  const [backendList, setBackendList] = useState([]);
  const [othersList, setOthersList] = useState([]);
  

  useEffect(() => {
    if(skills && skills.skills) {
      setFrontendList(skills?.skills[0]?.frontend[0].split(', '));
      setBackendList(skills?.skills[0]?.backend[0].split(', '));
      setOthersList(skills?.skills[0]?.others[0].split(', '));
    }
  }, [skills])


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
            {frontendList.length && frontendList.map((listItem, index) => {
              return (
                <div
                  key={index}
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
            {backendList.length && backendList.map((listItem, index) => {
              return (
                <div
                  key={index}
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
            {othersList.length && othersList.map((listItem, index) => {
              return (
                <div
                  key={index}
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

