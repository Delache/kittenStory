import { Kitten } from './../../../shared/models/kitten';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kitten',
  templateUrl: './kitten.component.html',
  styleUrls: ['./kitten.component.scss']
})
export class KittenComponent implements OnInit {
  @Input() kitten: Kitten;

  ngOnInit() {
  }

}
