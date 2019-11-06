import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive ({
  selector: '[appCard]'
})
export class CardDirective {
  private initialColor = '#f5f5f5';
  private defaultcolor = '#009688';
  private defaultHeight = 180;
  private visibility = 'visible';


constructor(private el: ElementRef) {
  this.setBorder(this.initialColor);
  this.setHeight(this.defaultHeight);
  this.setVisible(this.visibility);
}
@Input ('appCard') borderColor: string;

@HostListener('mouseenter') onmouseEnter() {
  this.setBorder(this.borderColor || this.defaultcolor);
  this.setVisible(this.visibility);
}
@HostListener('mouseleave') onmouseLeave() {
  this.setBorder(this.initialColor);
}
private setBorder(color: string) {
  const border = 'solid 4px ' + color;
  this.el.nativeElement.style.border = border;
}

private setHeight(height: number) {
  this.el.nativeElement.style.height = height + 'px';
}
private setVisible(display: string) {
  this.el.nativeElement.style.visibility = this.visibility;
}
}
