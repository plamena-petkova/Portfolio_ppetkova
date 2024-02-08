import {developerRoute, projectsRoute, timelineRoute} from "../utils/routes"


export const getDeveloperByUsername = async (username) => {
  const response = await fetch(
    `${developerRoute}/${username}`
  );
  const developers = await response.json();

  const dev = developers.user;
  dev.forEach((dev) => {
    if (dev.username === username) {
      try {
        sessionStorage.setItem("devResume", JSON.stringify(dev));
      } catch (e) {
        console.error(e);
      }
    }
  });
};

export const getTimelineByUsername = async (username) => {
  const response = await fetch(
    `${timelineRoute}/${username}`
  );
  const timeline = await response.json();

  try {
    sessionStorage.setItem("devTimeline", JSON.stringify(timeline));
  } catch (e) {
    console.error(e);
  }
} 

export const getProjectsByUsername = async (username) => {
  const response = await fetch(
    `${projectsRoute}/${username}`
  );
  const projects = await response.json();

  try {
    sessionStorage.setItem("devProjects", JSON.stringify(projects));
  } catch (e) {
    console.error(e);
  }
}
