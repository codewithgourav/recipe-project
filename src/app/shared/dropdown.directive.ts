import { Directive , HostListener , Renderer2 , ElementRef , HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open')isOpen = false
  constructor(private renderer : Renderer2 , private elRef : ElementRef) { }

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen
  }  
}
