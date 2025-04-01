import IcomoonReact from "icomoon-react";
import iconSet from "../../assets/selection.json";
import "./Skills.scss";
import { useDeveloperContext } from "../../context/developerContext";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

export function Skills() {
  const { skills } = useDeveloperContext();

  const [frontendList, setFrontendList] = useState([]);
  const [backendList, setBackendList] = useState([]);
  const [othersList, setOthersList] = useState([]);
  const [validIcons, setValidIcons] = useState({});

  const formatTechName = useCallback((name) => {
    return name.toLowerCase().replace(/\s+/g, "");
  }, []);

  const getLogoUrlVariant = useCallback((tech, variant) => {
    const formatted = formatTechName(tech);
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${formatted}/${formatted}-${variant}.svg`;
  }, [formatTechName]);

  const checkImageExists = useCallback((url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }, []);

  const checkIconVariants = useCallback(async (tech) => {
    const variants = ["original", "plain", "original-wordmark", "plain-wordmark"];
 
    for (const variant of variants) {
      const url = getLogoUrlVariant(tech, variant);
      const exists = await checkImageExists(url);
      
      if (exists) {
        setValidIcons(prev => ({ 
          ...prev, 
          [tech]: { url, exists: true } 
        }));
        return;
      }
    }
    
    setValidIcons(prev => ({ 
      ...prev, 
      [tech]: { url: null, exists: false } 
    }));
  }, [getLogoUrlVariant, checkImageExists]);

  useEffect(() => {
    if (skills && skills.skills) {
      setFrontendList(skills?.skills[0]?.frontend[0]?.split(", "));
      setBackendList(skills?.skills[0]?.backend[0]?.split(", "));
      setOthersList(skills?.skills[0]?.others[0]?.split(", "));
    }
  }, [skills]);

  useEffect(() => {
    const allTechs = [...frontendList, ...backendList, ...othersList];
    
    allTechs.forEach(tech => {
      checkIconVariants(tech);
    });
  }, [frontendList, backendList, othersList, checkIconVariants]);

  const TechItem = ({ tech, index }) => {
    const iconInfo = validIcons[tech];
    
    return (
      <div className="container__skills-list-item-box">
        {iconInfo?.exists ? (
          <motion.img
            src={iconInfo.url}
            alt={tech}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          />
        ) : (
          <IcomoonReact
            iconSet={iconSet}
            color="#00db00"
            size={20}
            icon="checkmark"
          />
        )}
        <p>{tech}</p>
      </div>
    );
  };

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
            {frontendList?.length > 0 &&
              frontendList.map((tech, index) => (
                <TechItem key={index} tech={tech} index={index} />
              ))}
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
            {backendList?.length > 0 &&
              backendList.map((tech, index) => (
                <TechItem key={index} tech={tech} index={index} />
              ))}
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
            {othersList?.length > 0 &&
              othersList.map((tech, index) => (
                <TechItem key={index} tech={tech} index={index} />
              ))}
          </section>
        </div>
      </div>
      <div className="container__skills-certificates"></div>
    </section>
  );
}