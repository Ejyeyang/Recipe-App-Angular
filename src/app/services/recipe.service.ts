import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    //testing recipe data
    new Recipe(
      "A test recipe",
      "testing",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      [
        new Ingredient("cheese", 1),
        new Ingredient("apple", 2)
      ]
    ),
    new Recipe(
      "A test recipe again",
      "testing again",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      [
        new Ingredient("cheese", 1),
        new Ingredient("peanutbutter", 1)
      ]
    ),
    new Recipe(
      "A test recipe again again",
      "testing again again",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      [
        new Ingredient("cheese", 1),
        new Ingredient("strawberry", 1)
      ]
    )
  ];

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
