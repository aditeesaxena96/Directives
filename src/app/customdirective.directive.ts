import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor( private ref :ElementRef) { }
  @Input() userColor : string;

  @HostListener('mouseenter') mouseEnterCallBack()
  {
    this.changeColor(this.userColor)
  }

  @HostListener ('mouseleave') mouseLeaveCallBack()
  {
    this.changeColor('black')
  }
  changeColor(color : any)
  {
    console.log("aditee")
    this.ref.nativeElement.style.color= color
  }
}
