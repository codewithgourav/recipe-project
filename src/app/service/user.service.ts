import { Injectable , EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredients } from '../shared/ingredients.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  recipes: Recipe[] = [
    new Recipe('Test Recipe','This is a test Recipe','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg'),
    new Recipe('Test Recipe1','This is a test Recipe2','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg')
  ]

  ingredients : Ingredients[] = [
    new Ingredients('Apple',5),
    new Ingredients('Tomatoes',6)
  ]
  myRecipe = new EventEmitter<{ name: string; description: string; imagePath: string; }>()
  ingredientAdded = new EventEmitter<{name : string,amount : number}>()
}
