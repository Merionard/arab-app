import { useState } from "react";

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
    result = isAnswerValid ? <p>"GG"</p> : "RATE";
  }

  return (
    <div>
      <input onChange={onChangeHandler} type="text" />
      <button onClick={validAnswer}>GO</button>
      {result}
    </div>
  );
};

export default ExoEcouteEcriture;
