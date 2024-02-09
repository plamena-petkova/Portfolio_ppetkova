import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { useEffect } from "react";
import { getCertificatesByUsername, getDeveloperByUsername, getProjectsByUsername, getSkillsByUsername, getTimelineByUsername } from "./services/developerService";
import { DeveloperProvider } from "./context/developerContext";

const App = () => {

  const username = 'pl.petkova'

  useEffect(() => {
    getDeveloperByUsername(username);
    getTimelineByUsername(username);
    getProjectsByUsername(username);
    getSkillsByUsername(username);
    getCertificatesByUsername(username);
  }, []);

  return (
    <BrowserRouter basename="/">
      <DeveloperProvider>
        <HomeView />
      </DeveloperProvider>
    </BrowserRouter>
  );
};

export default App;
