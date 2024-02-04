import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { HomeView } from "./views/HomeView";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <HomeView />
    </BrowserRouter>
  );
};

export default App;
