import "./Burger.css";
import { Component } from "react";
import Controls from "../Controls/Controls";
import Ingredient from "../Ingredients/Ingredient";
import Ingredients from "../Ingredients/Ingredients";

export enum IngredientName {
  CHEESE = "cheese",
  MEAT = "meat",
  SALAD = "salad",
}

interface BurgerStateIngredient {
  name: IngredientName;
  value: number;
}

interface BurgerState {
  ingredients: BurgerStateIngredient[];
  price: number;
}

export default class Burger extends Component<any, BurgerState> {
  state: Readonly<BurgerState> = {
    ingredients: [
      { name: IngredientName.CHEESE, value: 0 },
      { name: IngredientName.MEAT, value: 0 },
      { name: IngredientName.SALAD, value: 0 },
    ],
    price: 1,
  };

  onClickHandler: (e: React.MouseEvent, name: IngredientName) => void = (
    e,
    name
  ) => {
    const action = (e.target as HTMLButtonElement).textContent;
    const change = action === "Less" ? -1 : 1;
    const updatedIngredients = [...this.state.ingredients];
    const updatedItem = updatedIngredients.find(
      (ingredientObj) => ingredientObj.name === name
    );
    updatedItem!.value = updatedItem!.value + change;
    let updatedPrice = this.state.price + change;
    if (updatedItem!.value < 0) {
      updatedItem!.value = 0;
    }
    if (updatedPrice < 1) {
      updatedPrice = 1;
    }
    this.setState({ ingredients: updatedIngredients, price: updatedPrice });
  };

  render() {
    return (
      <div>
        <div className="Burger">
          <Ingredient value="bread"></Ingredient>
          <Ingredients ingredients={this.state.ingredients} />
          <Ingredient value="bread"></Ingredient>
        </div>
        <h2>Price: {this.state.price}</h2>
        <ul>
          <Controls
            value={IngredientName.CHEESE}
            onClickHandler={this.onClickHandler}
          />
          <Controls
            value={IngredientName.MEAT}
            onClickHandler={this.onClickHandler}
          />
          <Controls
            value={IngredientName.SALAD}
            onClickHandler={this.onClickHandler}
          />
        </ul>
      </div>
    );
  }
}
