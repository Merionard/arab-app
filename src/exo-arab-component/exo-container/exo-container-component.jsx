import { useState } from "react";
import alif from "../../sounds/alif.mp3";
import ba from "../../sounds/ba.mp3";
import ExoEcouteChoixMultiple from "../ecoute-choix-multiple/ecoute-choix-multiple-component";

const exercices = [
  {
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
  {
    id: 2,
    sound: ba,
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
];

const ExoContainer = () => {
  const [currentExercice, setCurrentExercice] = useState(exercices[0]);
  const [exercicesFinished, setExercicesFinished] = useState(false);

  console.log(currentExercice);

  const callNext = () => {
    const currentIndex = exercices.indexOf(currentExercice);
    if (currentIndex === exercices.length - 1) {
      setExercicesFinished(true);
      return;
    }
    setCurrentExercice(exercices[currentIndex + 1]);
  };
  return (
    <div className="exo-container">
      {!exercicesFinished ? (
        <div>
          <ExoEcouteChoixMultiple
            key={currentExercice.id}
            exoData={currentExercice}
            callNext={callNext}
          />
          <span>
            {exercices.indexOf(currentExercice) + 1}/{exercices.length}
          </span>
        </div>
      ) : (
        <p>GG</p>
      )}
    </div>
  );
};

export default ExoContainer;
