import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './home-page/list-kitten/list-kitten.component';
import { UserKittenComponent } from './home-page/user-kitten/user-kitten.component';
import { HomePageComponent } from './home-page/home-page.component';
import { KittenComponent } from './home-page/list-kitten/kitten/kitten.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent,
    HomePageComponent,
    KittenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
