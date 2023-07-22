import { Injectable , EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  recipes: Recipe[] = [
    new Recipe(
      'Kolkata Biriyani',
      'Most beloved dish in kolkata',
      'https://assets.cntraveller.in/photos/62644db46511cf2003cee423/16:9/w_1920,h_1080,c_limit/kolkata-biryani-lead.jpg',
      [
        new Ingredients('Meat',1),
        new Ingredients('French Fries',20)
      ]),
    new Recipe(
      'Kolkata Rasgulla',
      'The taste of Bengal',
      'https://www.chezshuchi.com/images/rasgulla11.JPG',
      [
        new Ingredients('Buns',2),
        new Ingredients('Meat', 1)
      ])
  ]

  ingredients : Ingredients[] = [
    new Ingredients('Apple',5),
    new Ingredients('Tomatoes',6)
  ]

  ingredientAdded = new Subject<Ingredients>()

  addIngredient(ingredient:Ingredients){
    this.ingredientAdded.next(ingredient)
  }
  //ingredientAdded = new EventEmitter<{name : string,amount : number}>()

  addIngreToShopping(ingredients:Ingredients[]){
    for(let i = 0; i < ingredients.length ; i++){
      this.ingredients.push(ingredients[i])
    }
  }

  getRecipe(id:any){
    return this.recipes[id]
  }
}
