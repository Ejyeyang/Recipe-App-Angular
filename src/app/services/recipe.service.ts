import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    //testing recipe data
    new Recipe(
      "A test recipe",
      "testing",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    ),
    new Recipe(
      "A test recipe again",
      "testing again",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    ),
    new Recipe(
      "A test recipe again again",
      "testing again again",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    )
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }
}
