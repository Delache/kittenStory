import { Router } from '@angular/router';
import { KittenService } from './../shared/kitten.service';
import { Kitten } from './../shared/models/kitten';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {
  newKitten: Kitten = new Kitten();

  constructor(private service: KittenService, private router: Router ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.service.kittens.push({...this.newKitten});
    console.log(this.newKitten);
    this.router.navigate(['']);

  }
}
