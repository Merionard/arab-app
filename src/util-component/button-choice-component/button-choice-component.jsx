import "./button-choice-styles.css";

const ButtonChoice = ({ choice, ...otherProps }) => (
  <button
    className="btn-choice"
    id={choice.id}
    value={choice.value}
    {...otherProps}
  >
    {choice.value}
  </button>
);

export default ButtonChoice;
