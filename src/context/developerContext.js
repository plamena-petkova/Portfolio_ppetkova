import { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCertificatesByUsername, getDeveloperByUsername, getProjectsByUsername, getSkillsByUsername, getTimelineByUsername } from "../services/developerService";



export const DeveloperContext = createContext();

export const DeveloperProvider = ({ children }) => {

    //const [allUsers, setAllUsers] = useState([]);
    const [username, setUsername] = useState('pl.petkova');
    const [developer, setDeveloper] = useState({});
    const [timeline, setTimeline] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState({});
    const [certificates, setCertificates] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if(username) {
        getDeveloperByUsername(username).then(result => {
          setDeveloper(result);
          setLoading(false);
      });
        getTimelineByUsername(username).then(result => {
          setTimeline(result);
          setLoading(false);
        });
        getProjectsByUsername(username).then(result => {
          setProjects(result);
          setLoading(false);
      });
        getSkillsByUsername(username).then(result => {
          setSkills(result);
          setLoading(false);
      });
        getCertificatesByUsername(username).then(result => {
          setCertificates(result);
          setLoading(false);
      });
      }

    }, [username]);

    return (
        <DeveloperContext.Provider value={{ developer, timeline, projects, skills, certificates, loading, username, setUsername}}>
            {children}
        </DeveloperContext.Provider>
    );
};


export const    useDeveloperContext = () => {
    const developerState = useContext(DeveloperContext);

    if(!developerState) {
        throw new Error('No Developer state');
    }

    return developerState;
}