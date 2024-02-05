import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import {Header } from "../src/components/Header/Header"
import { Navigation } from "./components/Navigation/Navigation";
import { TimelineView } from "./components/Timeline/TimelineView/TimelineView";
import { ProjectView } from "./components/Projects/ProjectView/ProjectView";
import { Skills } from "../src/components/Skills/Skills"
import { Certificates } from "../src/components/Certificates/Certificates"
import { Footer } from "../src/components/Footer/Footer"

const App = () => {



  return (
    <BrowserRouter basename="/">
      <Navigation />
      <Header />
      <TimelineView />
      <ProjectView />
      <Skills />
      <Certificates />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
