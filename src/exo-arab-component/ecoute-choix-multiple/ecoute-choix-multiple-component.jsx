import "./ecoute-choix-multiple-styles.css";
import { useEffect, useState } from "react";
import ButtonChoice from "../../util-component/button-choice-component/button-choice-component";
import ExoHeader from "../exo-header/exo-header-component";
import ExoContainer from "../exo-container/exo-container-component";

const styles = {
  success: { backgroundColor: "green" },
  error: { backgroundColor: "red" },
  default: { backgroundColor: "#fafbfc" },
};

const ExoEcouteChoixMultiple = ({ exo }) => {
  console.log("render");
  const [exercices, setExercices] = useState(exo);
  const [currentExercice, setCurrentExercice] = useState(exercices[0]);
  const [finished, setfinished] = useState(false);
  const [defaultStyle, setDefaultStyle] = useState(styles.default);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [selectedId, setSelectedId] = useState("");

  const { sound, answer, choices } = currentExercice;

  const callNext = () => {
    setDefaultStyle(styles.default);
    const currentIndex = exercices.indexOf(currentExercice);
    if (currentIndex === exercices.length - 1) {
      setfinished(true);
      return;
    }
    setCurrentExercice(exercices[currentIndex + 1]);
  };

  useEffect(() => {
    setDefaultStyle(null);
  }, [isAnswerCorrect]);

  const handleClick = (event) => {
    setSelectedId(event.target.id);

    if (event.target.value === answer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  const getStyle = (id) => {
    console.log("getStyle");
    if (id !== selectedId) {
      return styles.default;
    }
    if (isAnswerCorrect) {
      return styles.success;
    }
    return styles.error;
  };

  return (
    <ExoContainer>
      <ExoHeader
        sound={sound}
        title={"Ecouter et sélectionner la lettre correspondante"}
      />
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
      <span>
        {exercices.indexOf(currentExercice) + 1}/{exercices.length}
      </span>
    </ExoContainer>
  );
};

export default ExoEcouteChoixMultiple;
