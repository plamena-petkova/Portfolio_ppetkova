import { Certificates } from "../components/Certificates/Certificates";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navigation/Navigation";
import { ProjectView } from "../components/Projects/ProjectView/ProjectView";
import { Skills } from "../components/Skills/Skills";
import { TimelineView } from "../components/Timeline/TimelineView/TimelineView";

export function HomeView({developer}) {



  return (
    <>
      <Navigation developer={developer} />
      <Header developer={developer} />
      <TimelineView developer={developer} />
      <ProjectView developer={developer} />
      <Skills developer={developer} />
      <Certificates developer={developer} />
      <Footer developer={developer} />
    </>
  );
}
