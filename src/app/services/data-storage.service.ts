import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';

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
}
