import "./App.css";
import ExoEcouteChoixMultiple from "./exo-arab-component/ecoute-choix-multiple/ecoute-choix-multiple-component";
import alif from "./sounds/alif.mp3";

const exercices = {
  exo1: {
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
};

const App = () => {
  return (
    <div className="app-container">
      <ExoEcouteChoixMultiple
        key={exercices.exo1.id}
        exoData={exercices.exo1}
      />
    </div>
  );
};

export default App;
