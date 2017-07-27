import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Banana', 3),
        new Ingredient('Apple', 5)
    ];

    getIngredient() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
}
