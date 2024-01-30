import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { ProjectView } from "./components/Projects/ProjectView/ProjectView";

import { Skills } from "./components/Skills/Skills";
import { BrowserRouter } from "react-router-dom";
import { TimelineView } from "./components/Timeline/TimelineView/TimelineView";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Navigation />
        <Header />
        <TimelineView />
        <ProjectView />
        <Skills />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
