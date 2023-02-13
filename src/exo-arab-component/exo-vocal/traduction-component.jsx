import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";
import ExoContainer from "../exo-container/exo-container-component";
import ExoHeader from "../exo-header/exo-header-component";

const TraductionOrale = () => {
  const [message, setMessage] = useState("");

  const commands = [
    {
      command: "انا من فرنسا",
      callback: (command, spokenPhrase) => {
        console.log("callback");
        if (command === spokenPhrase) {
          setMessage(`Bravo!`);
        } else {
          setMessage("Non vous avez dit:" + spokenPhrase);
        }
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.5,
    },
  ];

  const { transcript, listening, resetTranscript } = useSpeechRecognition({
    commands,
  });

  const reset = () => {
    resetTranscript();
    setMessage("");
  };

  const startListening = () => {
    SpeechRecognition.startListening({ language: "ar-SA" });
  };

  return (
    <ExoContainer>
      <ExoHeader sound={null} title={"Traduisez la phrase ci-dessous"} />
      <p>Traduisez la phrase ci-desous:</p>
      <p>Je viens de France</p>
      <button onClick={startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={reset}>Reset</button>
      <p>{transcript}</p>
      <p>{message}</p>
    </ExoContainer>
  );
};

export default TraductionOrale;
