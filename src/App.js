import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { DeveloperProvider } from "./context/developerContext";
import { NotificationProvider } from "./context/notificationContext";
import Notification from "./components/Notification/Notification";
import { NotFound } from "./views/NotFound";
import ProjectDetailsView from "./views/ProjectDetailsView/ProjectDetailsView";

const App = () => {

  return (
    <BrowserRouter basename="/">
      <NotificationProvider>
        <Notification />
        <DeveloperProvider>
          <Routes>
            <Route index element={<HomeView />} />
            <Route path=":username" element={<HomeView />} />
            <Route path="/project/:id" element={<ProjectDetailsView />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DeveloperProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
};

export default App;
