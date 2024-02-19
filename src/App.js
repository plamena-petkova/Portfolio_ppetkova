import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { DeveloperProvider } from "./context/developerContext";
import { NotificationProvider } from "./context/notificationContext";
import Notification from "./components/Notification/Notification";

const App = () => {
  
  return (
    <BrowserRouter basename="/">
      <NotificationProvider>
      <Notification />
      <DeveloperProvider>
        <HomeView />
      </DeveloperProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
};

export default App;
