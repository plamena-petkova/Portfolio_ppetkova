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
      setLoading(true); // Set loading to true when the API calls begin

      // Wait for all API calls to finish
      Promise.all([
        getDeveloperByUsername(username),
        getTimelineByUsername(username),
        getProjectsByUsername(username),
        getSkillsByUsername(username),
        getCertificatesByUsername(username),
      ])
        .then(([developerResult, timelineResult, projectsResult, skillsResult, certificatesResult]) => {
          // Set state with all the fetched data
          setDeveloper(developerResult);
          setTimeline(timelineResult);
          setProjects(projectsResult);
          setSkills(skillsResult);
          setCertificates(certificatesResult);
        })
        .finally(() => {
          // Set loading to false once all data is loaded
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
