import useSound from "use-sound";
import alif from "../../../sounds/alif.mp3";
import ba from "../../../sounds/ba.mp3";
import "./exo-ecoute-lettre-styles.css";
import { Button, ToggleButton, Icon } from "@mui/material/";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

const ExoEcouteLettre = ({ sound, correctAnswer }) => {
  const [play] = useSound(ba);
  const errorStyle = { "background-color": "red" };

  const handleClick = (btnValue) => {
    if (btnValue === correctAnswer) {
    }
  };
  return (
    <div className="exo-container">
      <div className="exo-header">
        <h1>Ecouter et sélectionner la lettre correspondante</h1>
        <Button variant="outlined" onClick={play}>
          <AudiotrackIcon />
        </Button>
      </div>
      <div className="lettres-container">
        <button className="lettre-item" style={errorStyle}>
          ا
        </button>
        <Button variant="outlined" className="lettre-item">
          ب
        </Button>
        <Button variant="outlined" className="lettre-item">
          ث
        </Button>
      </div>
    </div>
  );
};

export default ExoEcouteLettre;
