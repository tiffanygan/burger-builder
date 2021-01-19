import Ingredient from "./Ingredient";
import { IngredientName } from "../Burger/Buger";

interface IngredientsPropsIngredient {
  name: IngredientName;
  value: number;
}

interface IngredientsProps {
  ingredients: IngredientsPropsIngredient[];
}

const Ingredients: React.FC<IngredientsProps> = (props) => {
  const ingredients = props.ingredients.map((ingredient) => {
    const jsxArray = [];
    for (let i = 0; i < ingredient.value; i++) {
      switch (ingredient.name) {
        case "cheese":
          jsxArray.push(
            <Ingredient value={ingredient.name} key={ingredient.name + i} />
          );
          break;
        case "meat":
          jsxArray.push(
            <Ingredient value={ingredient.name} key={ingredient.name + i} />
          );
          break;
        case "salad":
          jsxArray.push(
            <Ingredient value={ingredient.name} key={ingredient.name + i} />
          );
          break;
        default:
          jsxArray.push(<Ingredient value="bread" key={ingredient.name + i} />);
      }
    }
    return jsxArray;
  });

  return <div>{ingredients}</div>;
};

export default Ingredients;
