import { useState } from "react";
import "./ecoute-ecriture-styles.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { TextField } from "@mui/material";
import ExoHeader from "../exo-header/exo-header-component";

const ExoEcouteEcriture = ({ exo }) => {
  const [exercices, setExercices] = useState(exo);
  const [currentExercice, setCurrentExercice] = useState(exercices[0]);
  const [finished, setfinished] = useState(false);

  const [answerField, setAnswerField] = useState("");
  const [isAnswerValid, setIsAnserValid] = useState("");

  const { answer, sound } = currentExercice;
  let result;
  const onChangeHandler = (event) => {
    setAnswerField(event.target.value);
  };

  const validAnswer = () => {
    setIsAnserValid(answer === answerField);
  };
  if (isAnswerValid !== "") {
    result = isAnswerValid ? <p>"GG"</p> : "Correction: " + answer;
  }

  const callNext = () => {
    const currentIndex = exercices.indexOf(currentExercice);
    if (currentIndex === exercices.length - 1) {
      setfinished(true);
      return;
    }
    setCurrentExercice(exercices[currentIndex + 1]);
  };

  return (
    <div className="exo-container">
      <ExoHeader
        sound={sound}
        title={"Ecouter et sélectionner la lettre correspondante"}
      />
      <div className="input-container">
        <TextField
          id="outlined-basic"
          label="Traduisez"
          variant="outlined"
          onChange={onChangeHandler}
          className="form-input"
          focused={isAnswerValid !== ""}
          color={
            isAnswerValid === ""
              ? "secondary"
              : isAnswerValid
              ? "success"
              : "error"
          }
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={validAnswer}
        >
          Go
        </Button>
        {result}
        <div className="exo-footer">
          {isAnswerValid && (
            <button className="btn-next" onClick={callNext}>
              Suivant
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExoEcouteEcriture;
