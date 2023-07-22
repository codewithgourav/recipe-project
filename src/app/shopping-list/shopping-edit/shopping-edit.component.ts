import { Component, ElementRef, OnInit,ViewChild , EventEmitter ,Output } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput! : ElementRef
  @ViewChild('amountInput') amountInput! : ElementRef
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    this.userService.addIngredient({
      name : this.nameInput.nativeElement.value,
      amount:this.amountInput.nativeElement.value
    })
  }
}
