import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Ingredients } from '../shared/ingredients.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients! : Ingredients[]
  private onAddedIngredient: Subscription | undefined;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
   
    this.ingredients = this.userService.ingredients

    this.onAddedIngredient = this.userService.ingredientAdded.subscribe((ingred)=>{
      this.ingredients.push(ingred)
    })
  }

  onIngredientAdded(e:{name : string,amount : number}){
    this.userService.ingredients.push(e)
  }
  onEditItem(i:any){
    this.userService.startedEditing.next(i)
  }
  ngOnDestroy(): void {
    this.onAddedIngredient?.unsubscribe()
  }
}
