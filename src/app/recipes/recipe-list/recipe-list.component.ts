import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() myRecipe = new EventEmitter<{ name: string; description: string; imagePath: string; }>() 
  recipes : any
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.recipes = this.userService.recipes
  }

  getRecipe(recipe:{ name: string; description: string; imagePath: string; }){
    this.userService.myRecipe.emit(recipe)
  }
}
