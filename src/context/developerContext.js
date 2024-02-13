import { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCertificatesByUsername, getDeveloperByUsername, getProjectsByUsername, getSkillsByUsername, getTimelineByUsername } from "../services/developerService";



export const DeveloperContext = createContext();

export const DeveloperProvider = ({ children }) => {
    
    const [developer, setDeveloper] = useState({});
    const [timeline, setTimeline] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState({});
    const [certificates, setCertificates] = useState({});

    const username = 'pl.petkova'

    useEffect(() => {
      getDeveloperByUsername(username).then(result => setDeveloper(result));
      getTimelineByUsername(username).then(result => setTimeline(result));;
      getProjectsByUsername(username).then(result => setProjects(result));;
      getSkillsByUsername(username).then(result => setSkills(result));;
      getCertificatesByUsername(username).then(result => setCertificates(result));;
    }, []);
  


    return (
        <DeveloperContext.Provider value={{ developer, timeline, projects, skills, certificates }}>
            {children}
        </DeveloperContext.Provider>
    );
};


export const    useDeveloperContext = () => {
    const developerState = useContext(DeveloperContext);

    return developerState;
}