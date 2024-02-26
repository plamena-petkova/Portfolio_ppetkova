import {certificatesRoute, developerRoute, projectsRoute, skillsRoute, timelineRoute} from "../utils/routes"


export const getAllDevelopers = async () => {
  const response = await fetch(
    `${developerRoute}`
  );
  const allDevelopers = await response.json();

 return allDevelopers.users;
}


export const getDeveloperByUsername = async (username) => {
  const response = await fetch(
    `${developerRoute}/${username}`
  );
  const developers = await response.json();

  const dev = developers.user;
  return dev.find((developer) => 
   developer.username === username
  );
};

export const getTimelineByUsername = async (username) => {
  const response = await fetch(
    `${timelineRoute}/${username}`
  );
  const timeline = await response.json();

 return timeline;
} 

export const getProjectsByUsername = async (username) => {
  const response = await fetch(
    `${projectsRoute}/${username}`
  );
  const projects = await response.json();

 return projects;
}


export const getSkillsByUsername = async (username) => {
  const response = await fetch(
    `${skillsRoute}/${username}`
  );
  const skills = await response.json();

  return skills;
}

export const getCertificatesByUsername = async (username) => {
  const response = await fetch(
    `${certificatesRoute}/${username}`
  );
  const certificates = await response.json();

 return certificates;
}


