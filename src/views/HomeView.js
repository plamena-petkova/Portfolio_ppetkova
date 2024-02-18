import { useInView } from "react-intersection-observer";
import { Button } from "../components/Button/Button";
import { Certificates } from "../components/Certificates/Certificates";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navigation/Navigation";
import { ProjectView } from "../components/Projects/ProjectView/ProjectView";
import { Skills } from "../components/Skills/Skills";
import { TimelineView } from "../components/Timeline/TimelineView/TimelineView";
import CircularProgress from "@mui/material/CircularProgress";
import { useDeveloperContext } from "../context/developerContext";
import { Box } from "@mui/material";

export function HomeView() {
  const { loading } = useDeveloperContext();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const { ref: aboutRef, inView: aboutSectionIsVisible } = useInView();

  return (
    <>
      <div ref={aboutRef}>
        {!aboutSectionIsVisible && (
          <Button
            caption={"Up"}
            btnClicked={scrollToTop}
            buttonClass={"btn btn--transparent btn--transparent-scroll"}
          />
        )}
        <Navigation />
        <Header />
      </div>
      {loading && (
        <Box sx={{ display: "flex", justifyContent:'center' }}>
          <CircularProgress />
        </Box>
      )}
      <TimelineView />
      <ProjectView />
      <Skills />
      <Certificates />
      <Footer />
    </>
  );
}
