import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home-component";
import Navigation from "./routes/navigation/navigation-component";
import ba from "./sounds/ba.mp3";
import alif from "./sounds/alif.mp3";
import ExoEcouteChoixMultiple from "./exo-arab-component/ecoute-choix-multiple/ecoute-choix-multiple-component";
import ExoEcouteEcriture from "./exo-arab-component/ecoute-ecriture/ecoute-ecriture-component";
import TraductionOrale from "./exo-arab-component/exo-vocal/traduction-component";

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
      { id: "9", value: "ا" },
      { id: "10", value: "ب" },
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
          element={<ExoEcouteChoixMultiple exo={exercicesMultiChoice} />}
        />
        <Route
          path="exo2"
          element={
            <TraductionOrale
              exos={[{ phrase: "Je viens de france", answer: "انا من فرنسا" }]}
            />
          }
        />
        <Route path="exo3" element={<ExoEcouteEcriture exo={exoEcriture} />} />
      </Route>
    </Routes>
  );
};

export default App;
