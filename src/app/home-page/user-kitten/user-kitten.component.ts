import { Kitten } from '../../shared/models/kitten';
import { MockAdoptKittens } from '../../shared/mock-adoptKittens';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {
  adoptedKittens: Kitten[];
  constructor() { }

  ngOnInit() {
    this.adoptedKittens = MockAdoptKittens;
  }

}
