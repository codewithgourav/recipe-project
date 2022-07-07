import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe','This is a test Recipe','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg'),
    new Recipe('Test Recipe1','This is a test Recipe2','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
