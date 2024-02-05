import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import {Header } from "../src/components/Header/Header"
import { Navigation } from "./components/Navigation/Navigation";
import { TimelineView } from "./components/Timeline/TimelineView/TimelineView";
import { ProjectView } from "./components/Projects/ProjectView/ProjectView";
import { Skills } from "../src/components/Skills/Skills"
import { Certificates } from "../src/components/Certificates/Certificates"
import { Footer } from "../src/components/Footer/Footer"
import { useState } from "react";

const App = () => {

  const [themeColor, setThemeColor] = useState('');


  const handleTheme = (theme) => {
    if(theme) {
      setThemeColor('dark');
    } else {
      setThemeColor('light');
    }
  }

  console.log('Theme', themeColor);

  return (
    <BrowserRouter basename="/">
      <Navigation id='light' theme={handleTheme} />
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
