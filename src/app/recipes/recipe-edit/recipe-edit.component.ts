import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  paramid: any;
  showEdit: boolean = false;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=>{
      this.paramid = params.id
      if(this.paramid){
        this.showEdit = true
      }
      console.log(this.showEdit)
    })
  }

}
