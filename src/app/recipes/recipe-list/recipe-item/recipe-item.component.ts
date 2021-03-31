import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: [
  ]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
