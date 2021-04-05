import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[];
  /*
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
  */

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  getRecipe(id: number){
    return this.recipes.slice()[id];
  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  //replaces our recipes array with recipes from firebase datastorage
  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
