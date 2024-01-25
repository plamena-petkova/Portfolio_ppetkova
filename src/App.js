import "./App.scss";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Timestamp } from "./components/Timestamp/Timestamp";

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Timestamp/>
    </>
  );
};

export default App;
