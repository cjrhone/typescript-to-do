import { BrowserModule } from '@angular/platform-browser';
//imports code to run our app in the browser, allow us to add conditionals and loops to components
import { NgModule } from '@angular/core';
//imports general Module code from the Angular framework's core

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
//application's root component


@NgModule({
  //informs Angular that this is a module
  declarations: [
    AppComponent,
    WelcomeComponent
  //declaration is an array of all components that will reside in this module.
  //when we generate new components they'll be added here
  ],
  imports: [
    BrowserModule
  //imports other pieces of our application we want for this module
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap is array of components required upon launching application
})
export class AppModule { }
