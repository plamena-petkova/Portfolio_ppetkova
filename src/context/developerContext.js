import { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";



export const DeveloperContext = createContext();

export const DeveloperProvider = ({ children }) => {
    
    const [developer, setDeveloper] = useState({});
    const [timeline, setTimeline] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState({});
    const [certificates, setCertificates] = useState({});

    useEffect(() => {
      setDeveloper(JSON.parse(sessionStorage.getItem("devResume")));
      setTimeline(JSON.parse(sessionStorage.getItem("devTimeline")));
      setProjects(JSON.parse(sessionStorage.getItem("devProjects")));
      setSkills(JSON.parse(sessionStorage.getItem("devSkills")));
      setCertificates(JSON.parse(sessionStorage.getItem("devCertificates")));
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