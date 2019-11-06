import { MockAdoptKittens } from './mock-adoptKittens';
import { MockKittens } from './mock-kittens';
import { Kitten } from './models/kitten';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KittenService {
  constructor() { }

  kittens: Kitten[] = MockKittens;
  adoptedKittens: Kitten[] = MockAdoptKittens;

}
