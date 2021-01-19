import { IngredientName } from "../Burger/Buger";

interface ControlProps {
  value: IngredientName;
  onClickHandler: (e: React.MouseEvent, name: IngredientName) => void;
}

const Control: React.FC<ControlProps> = (props) => {
  const buttonStyle = { marginRight: "1rem" };

  return (
    <div>
      <button
        style={buttonStyle}
        onClick={(e: React.MouseEvent) => props.onClickHandler(e, props.value)}
      >
        Less
      </button>
      <button
        onClick={(e: React.MouseEvent) => props.onClickHandler(e, props.value)}
      >
        More
      </button>
    </div>
  );
};

export default Control;
