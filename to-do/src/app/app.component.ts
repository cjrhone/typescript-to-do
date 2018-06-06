import { Component } from '@angular/core';
import { Task } from './models/task.model';

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


  tasks: Task[] = [
    new Task("Finish Angular Homework", 3),
    new Task('Begin Brainstorming', 2),
    new Task('Add README to Angular repos on GitHub', 2)
  ];

  priorityColor(currentTask){ //property binding the priority for each task
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  selectedTask = null;
  // defined selectedTask as first task [0] in our tasks array

  finishedEditing() {
    console.log("clicked done");
    this.selectedTask = null;
    console.log("POOF");
  }

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }
}

//   export class Task {
//     public done: boolean = false;
//     constructor(public description: string) { }
// }
//This export was moved to models/task.model.ts for MVC efficiency

// firstTask: Task = new Task("Finish weekend Angular homework for Epicodus course!");
//Task is a data type now, thanks to export class Task
