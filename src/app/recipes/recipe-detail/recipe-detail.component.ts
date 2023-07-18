import { Component, OnInit , Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe!:Recipe 
  constructor( private userService : UserService) { }

  ngOnInit(): void {
    this.userService.myRecipe.subscribe((resp)=>{
      this.selectedRecipe = resp
    })
  }

}
