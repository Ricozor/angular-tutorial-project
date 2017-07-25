import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is just a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('pear', 3),
        new Ingredient('chocolate tablet', 1)
      ]
    ),
    new Recipe(
      'A second test recipe',
      'This is just another test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('cheese', 5),
        new Ingredient('tomato', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice(); //slice ici permet de creer une nouvelle reference du tableau, pour prevenir des modification
  }
}
