import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive ({
  selector: '[appCard]'
})
export class CardDirective {
  private initialColor = '#f5f5f5';
  private defaultcolor = '#009688';
  private defaultHeight = 180;
  private backgroundColor = '#45A29E';

constructor(private el: ElementRef) {
  this.setBorder(this.initialColor);
  this.setHeight(this.defaultHeight);

}
@Input ('appCard') borderColor: string;

@HostListener('mouseenter') onmouseEnter() {
  this.setBorder(this.borderColor || this.defaultcolor);
  this.setVisible();

}
@HostListener('mouseleave') onmouseLeave() {
  this.setBorder(this.initialColor);
  this.setHidden();
}
private setBorder(color: string) {
  const border = 'solid 3px ' + color;
  this.el.nativeElement.style.border = border;
}
public setHidden() {
  this.el.nativeElement.style.color = '#45A29E';
}
private setVisible() {
  this.el.nativeElement.style.color = 'black';
}

private setHeight(height: number) {
  this.el.nativeElement.style.height = height + 'px';
}

}
