import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect, useState } from "react";
import ExoContainer from "../exo-container/exo-container-component";
import ExoHeader from "../exo-header/exo-header-component";
import "./vocal-style.css";

const TraductionOrale = ({ exos }) => {
  const [message, setMessage] = useState("");
  const [currentExercice, setCurrentExercice] = useState(exos[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [validated, setValidated] = useState(false);

  const { phrase, answer } = currentExercice;

  useEffect(() => {
    setCurrentIndex(exos.indexOf(currentExercice));
  }, [currentExercice, exos]);

  const { transcript, resetTranscript } = useSpeechRecognition();

  const callNext = () => {
    setCurrentExercice(exos[currentIndex + 1]);
  };

  const reset = () => {
    resetTranscript();
    setMessage("");
  };

  const startListening = () => {
    SpeechRecognition.startListening({ language: "ar-SA" });
  };

  const validate = () => {
    SpeechRecognition.stopListening();
    setValidated(true);
    if (transcript === answer) {
      setMessage("Bravo");
    } else {
      setMessage("Erreur la réponse était: " + answer);
    }
  };

  return (
    <ExoContainer>
      <ExoHeader sound={null} title={"Traduisez: " + phrase} />

      <div className="d-flex justify-content-end align-items-center">
        <button onClick={startListening}>Start</button>
        <button onClick={validate}>Validate</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="d-flex flew-wrap justify-content-center">
        <p>{transcript}</p>
        <div className="breakllll"></div>
      </div>
      <div className="d-flex flew-wrap justify-content-center">
        <p>{message}</p>
      </div>
      <div className="exo-footer">
        {validated && !(currentIndex === exos.length - 1) && (
          <button className="btn-next" onClick={callNext}>
            Suivant
          </button>
        )}
        {currentIndex === exos.length - 1 && validated && (
          <button>Terminer</button>
        )}
      </div>
      <span>
        {exos.indexOf(currentExercice) + 1}/{exos.length}
      </span>
    </ExoContainer>
  );
};

export default TraductionOrale;
