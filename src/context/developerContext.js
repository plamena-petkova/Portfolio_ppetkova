import { createContext, useContext, useState, useEffect } from "react";
import { getCertificatesByUsername, getDeveloperByUsername, getProjectsByUsername, getSkillsByUsername, getTimelineByUsername } from "../services/developerService";

export const DeveloperContext = createContext();

export const DeveloperProvider = ({ children }) => {

  const [username, setUsername] = useState('pl.petkova');
  const [developer, setDeveloper] = useState({});
  const [timeline, setTimeline] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState({});
  const [certificates, setCertificates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username) {
      setLoading(true); 

      Promise.all([
        getDeveloperByUsername(username),
        getTimelineByUsername(username),
        getProjectsByUsername(username),
        getSkillsByUsername(username),
        getCertificatesByUsername(username),
      ])
        .then(([developerResult, timelineResult, projectsResult, skillsResult, certificatesResult]) => {

          setDeveloper(developerResult);
          setTimeline(timelineResult);
          setProjects(projectsResult);
          setSkills(skillsResult);
          setCertificates(certificatesResult);
        })
        .finally(() => {

          setLoading(false);
        });
    }
  }, [username]);

  return (
    <DeveloperContext.Provider value={{ developer, timeline, projects, skills, certificates, loading, username, setUsername }}>
      {children}
    </DeveloperContext.Provider>
  );
};

export const useDeveloperContext = () => {
  const developerState = useContext(DeveloperContext);

  if (!developerState) {
    throw new Error('No Developer state');
  }

  return developerState;
};
