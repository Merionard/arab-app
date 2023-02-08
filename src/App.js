import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home-component";
import Navigation from "./routes/navigation/navigation-component";
import ExoContainer from "./exo-arab-component/exo-container/exo-container-component";
import TestRecognitionArabe from "./recognition-arabe-component";
import ba from "./sounds/ba.mp3";
import alif from "./sounds/alif.mp3";

const exercicesMultiChoice = [
  {
    id: 1,
    sound: alif,
    choices: [
      { id: "1", value: "ا" },
      { id: "2", value: "ب" },
      { id: "3", value: "ت" },
      { id: "4", value: "ت" },
      { id: "5", value: "ت" },
      { id: "6", value: "ت" },
      { id: "7", value: "ت" },
      { id: "8", value: "ت" },
    ],
    answer: "ا",
  },
  {
    id: 2,
    sound: ba,
    choices: [
      { id: "1", value: "ا" },
      { id: "2", value: "ب" },
    ],
    answer: "ا",
  },
];

const exoEcriture = [{ id: 1, sound: ba, answer: "test" }];

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="exo1"
          element={
            <ExoContainer
              typeExo="multiChoice"
              title="Ecouter et sélectionner la lettre correspondante"
              exercicesData={exercicesMultiChoice}
            />
          }
        />
        <Route path="exo2" element={<TestRecognitionArabe />} />
        <Route
          path="exo3"
          element={
            <ExoContainer
              title="Ecoutez et traduisez à l'écrit"
              exercicesData={exoEcriture}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
