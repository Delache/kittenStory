import { MockKittens } from './../../shared/mock-kittens';
import { MockAdoptKittens } from './../../shared/mock-adoptKittens';
import { Kitten } from '../../shared/models/kitten';
import { MockKittens } from '../../shared/mock-kittens';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {
  kittensList: Kitten [];
  clickedKitten: Kitten;
  @Output() adoptEvent = new EventEmitter<Kitten>();
  constructor() { }

  ngOnInit() {
    this.kittensList = MockKittens;
  }
  adoptedKitten(data: Kitten) {
   this.clickedKitten = data;
   MockAdoptKittens.push( this.clickedKitten );
   MockKittens.splice(MockKittens.indexOf(this.clickedKitten), 1);
  }

}
