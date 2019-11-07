import { CardDirective } from './../../../directive/card.directive';
import { Kitten } from './../../../shared/models/kitten';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-kitten',
  templateUrl: './kitten.component.html',
  styleUrls: ['./kitten.component.scss']
})
export class KittenComponent implements OnInit {
  @Input() kitten: Kitten;
  @Output() kittenClicked = new EventEmitter<Kitten>();
  ngOnInit() {
  }
  clicked() {
    this.kittenClicked.emit(this.kitten);
  }

}
