import "./App.scss";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
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
          <Routes>
            <Route index element={<HomeView />} />
            <Route path=":username" element={<HomeView />} />
            <Route path="/*" element={<div>No Page</div>} />
          </Routes>
        </DeveloperProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
};

export default App;
