import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients! : Ingredients[]
  
  constructor(private userService : UserService) { }

  ngOnInit(): void {
   
    this.ingredients = this.userService.ingredients

    this.userService.ingredientAdded.subscribe((ingred)=>{
      this.ingredients.push(ingred)
    })
  }

  onIngredientAdded(e:{name : string,amount : number}){
    this.userService.ingredients.push(e)
  }
}
