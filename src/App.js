import "./App.css";
import ExoEcouteLettre from "./components/speech-recognition-component/exo-arab-component/exo-ecoute-lettre-component";
import ExoLettreArabeContainer from "./components/speech-recognition-component/exo-arab-component/exo-lettre-arabe-container-component";

const App = () => {
  return (
    <div className="app-container">
      <ExoEcouteLettre />
    </div>
  );
};

export default App;
