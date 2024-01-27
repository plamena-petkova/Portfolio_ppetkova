import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { ProjectView } from "./components/Projects/ProjectView/ProjectView";
import { Timeline } from "./components/Timeline/Timeline";

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Timeline />
      <ProjectView />
      <Footer />

    </>
  );
};

export default App;
