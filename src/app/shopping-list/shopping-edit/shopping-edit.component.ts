import { Component, ElementRef, OnInit,ViewChild , EventEmitter ,Output, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  form!: FormGroup;
  editItemIndex:any
  editMode:boolean = false
  editItem : any
  subscription!: Subscription;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl('',Validators.required),
      amount : new FormControl('',[Validators.required,Validators.pattern('^[1-9]+[0-9]*$')])
    })

    this.subscription = this.userService.startedEditing.subscribe((index:any)=>{
      this.editItemIndex = index;
      this.editMode = true
      this.editItem = this.userService.getIngredients(this.editItemIndex)
      this.form.setValue({
        name:this.editItem.name,
        amount:this.editItem.amount
      })
    })
  }

  onAddItem(){
    if(this.editMode){
      this.userService.updateIngredient(this.editItemIndex,this.form.value)
      this.form.reset()
    }else{
      this.userService.addIngredient({
        name : this.form?.value.name,
        amount:this.form?.value.amount    
      })
      this.form.reset()
    }
    this.editMode = false
  }

  onClear(){
    this.form.reset()
    this.editMode = false
  }
  onDelete(){
    this.userService.deleteItem(this.editItemIndex)
    this.onClear()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
