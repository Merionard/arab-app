import useSound from "use-sound";
import "./ecoute-choix-multiple-styles.css";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import { useState } from "react";
import ButtonChoice from "../../util-component/button-choice-component/button-choice-component";

const ExoEcouteChoixMultiple = ({ exoData, callNext }) => {
  const { sound, answer, choices } = exoData;
  const [play] = useSound(sound);

  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [selectedId, setSelectedId] = useState("");

  const styles = {
    success: { backgroundColor: "green" },
    error: { backgroundColor: "red" },
    default: { backgroundColor: "#fafbfc" },
  };

  const handleClick = (event) => {
    setSelectedId(event.target.id);
    console.log(event.target.value);
    console.log(event.target.id);
    if (event.target.value === answer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  const getStyle = (id) => {
    if (id !== selectedId) {
      return styles.default;
    }
    if (isAnswerCorrect) {
      return styles.success;
    }
    return styles.error;
  };

  return (
    <div className="exo-choice-multiple-container">
      <div className="exo-header">
        <h1>Ecouter et sélectionner la lettre correspondante</h1>
        <button className="sound" onClick={play}>
          <AudiotrackIcon />
        </button>
      </div>
      <div className="choices-container">
        {choices.map((choice) => {
          return (
            <ButtonChoice
              key={choice.id}
              choice={choice}
              onClick={handleClick}
              style={getStyle(choice.id)}
            />
          );
        })}
      </div>
      <div className="exo-footer">
        {isAnswerCorrect && (
          <button className="btn-next" onClick={callNext}>
            Suivant
          </button>
        )}
      </div>
    </div>
  );
};

export default ExoEcouteChoixMultiple;
