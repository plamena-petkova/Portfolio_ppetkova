import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { useEffect } from "react";
import { getDeveloperByUsername, getProjectsByUsername, getTimelineByUsername } from "./services/developerService";
import { DeveloperProvider } from "./context/developerContext";

const App = () => {

  const username = 'pl.petkova'

  useEffect(() => {
    getDeveloperByUsername(username);
    getTimelineByUsername(username);
    getProjectsByUsername(username);
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
