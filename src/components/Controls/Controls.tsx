import { IngredientName } from "../Burger/Buger";
import Control from "./Control";

interface ControlsProps {
  value: IngredientName;
  onClickHandler: (e: React.MouseEvent, name: IngredientName) => void;
}

const Controls: React.FC<ControlsProps> = (props) => {
  return (
    <li>
      {props.value}
      <Control onClickHandler={props.onClickHandler} value={props.value} />
    </li>
  );
};

export default Controls;
