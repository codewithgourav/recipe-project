import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {


  recipes : any;

  
  constructor(private activatedRoute : ActivatedRoute,private userService : UserService) { }

  ngOnInit(): void {
    this.recipes = this.userService.recipes
  }

  

}
