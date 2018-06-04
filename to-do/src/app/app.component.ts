import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//where the application should be rendered, app-root name can be changed
  templateUrl: './app.component.html',//how the application should look
  styleUrls: ['./app.component.css']//how the application should be styled
})
// @Component == annotation or decorator
export class AppComponent {
  title = 'app'; //changes {{ title }} to 'app'
  currentFocus: string = 'Angular Homework'; //changes {{ currentFocus }} to 'Angular Homework'
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  //In Angular, when a variable in a component's class declaration references another variable in the class, it must be prefaced with the this keyword.

  firstTask: Task = new Task("Finish weekend Angular homework for Epicodus course!");
  //Task is a data type now, thanks to export class Task 
}

  export class Task {
    public done: boolean = false;
    constructor(public description: string) {}
}
