import { useState } from "react";
import ExoEcouteChoixMultiple from "../ecoute-choix-multiple/ecoute-choix-multiple-component";
import ExoEcouteEcriture from "../ecoute-ecriture/ecoute-ecriture-component";
import ExoHeader from "../exo-header/exo-header-component";
import "./exo-container-styles.css";

const ExoContainer = ({ typeExo, title, exercicesData }) => {
  const [currentExercice, setCurrentExercice] = useState(exercicesData[0]);
  const [exercicesFinished, setExercicesFinished] = useState(false);

  const callNext = () => {
    const currentIndex = exercicesData.indexOf(currentExercice);
    if (currentIndex === exercicesData.length - 1) {
      setExercicesFinished(true);
      return;
    }
    setCurrentExercice(exercicesData[currentIndex + 1]);
  };
  return (
    <div className="exo-container">
      <ExoHeader sound={currentExercice.sound} title={title} />
      {!exercicesFinished ? (
        <div>
          {typeExo === "multiChoice" ? (
            <ExoEcouteChoixMultiple
              key={currentExercice.id}
              exoData={currentExercice}
              callNext={callNext}
            />
          ) : (
            <ExoEcouteEcriture
              key={currentExercice.id}
              exoData={currentExercice}
              callNext={callNext}
            />
          )}

          <span>
            {exercicesData.indexOf(currentExercice) + 1}/{exercicesData.length}
          </span>
        </div>
      ) : (
        <p>GG</p>
      )}
    </div>
  );
};

export default ExoContainer;
