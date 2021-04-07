import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './recipe.service';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private basUrl = "https://ng-recipe-book-17a85-default-rtdb.firebaseio.com/recipes.json";
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
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

      return this.http.get<Recipe[]>(
        this.basUrl,
      ).pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
        );
  }
}
