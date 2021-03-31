import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styles: [
  ],
  providers:[
    RecipeService
  ]

})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    }, error => {
      console.log(error);
    });
  }

}
