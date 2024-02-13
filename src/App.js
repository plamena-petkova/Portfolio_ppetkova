import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { DeveloperProvider } from "./context/developerContext";

const App = () => {


  return (
    <BrowserRouter basename="/">
      <DeveloperProvider>
        <HomeView />
      </DeveloperProvider>
    </BrowserRouter>
  );
};

export default App;
