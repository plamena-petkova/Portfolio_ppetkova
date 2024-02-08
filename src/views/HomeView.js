import { Certificates } from "../components/Certificates/Certificates";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navigation/Navigation";
import { ProjectView } from "../components/Projects/ProjectView/ProjectView";
import { Skills } from "../components/Skills/Skills";
import { TimelineView } from "../components/Timeline/TimelineView/TimelineView";


export function HomeView() {

  return (
    <>
      <Navigation />
      <Header />
      <TimelineView />
      <ProjectView />
      <Skills />
      <Certificates />
      <Footer />
    </>
  );
}
