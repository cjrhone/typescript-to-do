import { BrowserModule } from '@angular/platform-browser';
//imports code to run our app in the browser, allow us to add conditionals and loops to components
import { NgModule } from '@angular/core';
//imports general Module code from the Angular framework's core

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
//application's root component
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CompletenessPipe } from './completeness.pipe';


@NgModule({
  //informs Angular that this is a module
  declarations: [
    AppComponent,
    WelcomeComponent,
    TaskListComponent,
    EditTaskComponent,
    NewTaskComponent,
    CompletenessPipe
  //declaration is an array of all components that will reside in this module.
  //when we generate new components they'll be added here
  ],
  imports: [
    BrowserModule,
    FormsModule
  //imports other pieces of our application we want for this module
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap is array of components required upon launching application
})
export class AppModule { }
