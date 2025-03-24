import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Chip } from "../../components/Chip/Chip";
import { useParams } from "react-router-dom";
import { useDeveloperContext } from "../../context/developerContext";
import "./ProjectDetailsView.scss";
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { Box, CircularProgress } from "@mui/material";

const ProjectDetailsView = () => {
  const { id } = useParams();
  const { projects } = useDeveloperContext();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projects?.projects) {
      const selectedProject = projects.projects.find(
        (projectItem) => projectItem._id === id
      );
      setProject(selectedProject);
    }
  }, [projects, id]);

  if (!project) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          overflow: "auto",
          top: 0,
          position: "fixed",
          backdropFilter: "blur(1rem)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const techStackArray = project.techStack
    ? Object.values(project.techStack)
    : [];
  const items = techStackArray.length > 0 ? techStackArray[0].split(",") : [];

  return (
    <>
      <Navigation links={true} />
      <div className="project__card-container">
        <div className="project__card-container--image">
          <img
            src={project.picture}
            alt="project-pic"
            className="project__card-container--image-img"
          />
        </div>
        <div className="project__card--text">
          <h2 className="project__card--heading">{project.name}</h2>
          <div className="project__card--text-techstack">
            {items.length > 0 ? (
              items.map((stack) => {
                return <Chip key={stack} techName={stack} />;
              })
            ) : (
              <p>No tech stack available</p>
            )}
          </div>
          <p>{project.about}</p>
          <div className="project__card-btns">
            <Button
              hrefLink={project.liveDemo}
              caption="Live Demo"
              buttonClass="btn btn--project"
              newTab={true}
            />

            {project.gitRepo && project.gitRepo.length > 0 ? (
              project.gitRepo.map((btn, index) => (
                <Button
                  key={index}
                  hrefLink={btn.link}
                  caption={`GitHub Repo ${btn.use}`}
                  buttonClass="btn btn--project"
                  newTab={true}
                />
              ))
            ) : (
              <p>No GitHub repos available</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetailsView;
