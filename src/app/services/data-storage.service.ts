import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './recipe.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private basUrl = "https://ng-recipe-book-17a85-default-rtdb.firebaseio.com/recipes.json";
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) { }

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.basUrl, recipes).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

  //sets recipes array in the recipeService with data from firebase
  fetchRecipes(){
    return this.http.get<Recipe[]>(this.basUrl)
    .pipe(map(res =>{
      return res.map(res => {
        return {...res, ingredients: res.ingredients ? res.ingredients : []};
      });
    }), tap(res => {
      this.recipeService.setRecipes(res);
    }));
  }
}
