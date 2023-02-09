import { useState } from "react";
import "./ecoute-ecriture-styles.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { TextField } from "@mui/material";

const ExoEcouteEcriture = ({ exoData }) => {
  const [answerField, setAnswerField] = useState("");
  const [isAnswerValid, setIsAnserValid] = useState("");

  const { answer } = exoData;
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

  return (
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
      <Button variant="contained" endIcon={<SendIcon />} onClick={validAnswer}>
        Go
      </Button>
      {result}
    </div>
  );
};

export default ExoEcouteEcriture;
