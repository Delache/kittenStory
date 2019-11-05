import { Kitten } from './../shared/models/kitten';
import { MockKittens } from './../shared/mock-kittens';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {
  kittensList: Kitten [];
  constructor() { }

  ngOnInit() {
    this.kittensList = MockKittens;
  }

}
