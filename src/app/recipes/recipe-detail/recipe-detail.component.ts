import { Component, OnInit , Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe!:Recipe 
  routerId:any
  constructor( private userService : UserService ,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=>{
      this.routerId = params.id
      this.selectedRecipe = this.userService.getRecipe(this.routerId)
    })

  }

  addToShoppingList(){
    this.userService.addIngreToShopping(this.selectedRecipe.ingredients)
  }
}
