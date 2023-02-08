import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import useSound from "use-sound";
import "./exo-header-styles.css";
const ExoHeader = ({ sound, title }) => {
  const [play] = useSound(sound);

  return (
    <div className="exo-header">
      <h1>{title}</h1>
      {sound !== undefined && (
        <button className="sound" onClick={play}>
          <AudiotrackIcon />
        </button>
      )}
    </div>
  );
};

export default ExoHeader;
