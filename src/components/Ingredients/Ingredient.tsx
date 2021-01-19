import "./Ingredient.css";

interface IngredientProps {
  value: string;
}

const Ingredient: React.FC<IngredientProps> = (props) => {
  return <p className={props.value}>your burger is made of {props.value}</p>;
};

export default Ingredient;
