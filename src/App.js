import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home-component";
import Navigation from "./routes/navigation/navigation-component";
import ExoContainer from "./exo-arab-component/exo-container/exo-container-component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="exo1" element={<ExoContainer />} />
      </Route>
    </Routes>
  );
};

export default App;
