import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import {Header } from "../src/components/Header/Header"
import { Navigation } from "./components/Navigation/Navigation";
import { TimelineView } from "./components/Timeline/TimelineView/TimelineView";
import { ProjectView } from "./components/Projects/ProjectView/ProjectView";
import { Skills } from "../src/components/Skills/Skills"
import { Certificates } from "../src/components/Certificates/Certificates"
import { Footer } from "../src/components/Footer/Footer"
import { HomeView } from "./views/HomeView";
import { useEffect } from "react";
import { getDeveloperByUsername } from "./services/developerService";
import { useState } from "react";

const App = () => {

  const [developer, setDeveloper] = useState({});

  useEffect(() => {
    getDeveloperByUsername('pl.petkova');
    setDeveloper(JSON.parse(localStorage.getItem('devResume')));

  }, [])



  return (
    <BrowserRouter basename="/">
      <HomeView developer={developer} />
    </BrowserRouter>
  );
};

export default App;
