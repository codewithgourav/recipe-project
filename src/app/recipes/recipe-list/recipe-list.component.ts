import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  activeIndex : any
  recipes : any
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit(): void {
    this.recipes = this.userService.recipes
  }

  setActiveItem(i:any){
    this.activeIndex = i
  }
}
