import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() childTaskList: Task[]; //defining @Input as a childTaskList with a Task[] data type
  @Output() clickSender = new EventEmitter();

  editButtonClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  // tasks: Task[] = [
  //   new Task('Finish Angular homework', 3),
  //   new Task('Begin brainstorming', 2),
  //   new Task('Add README file', 2)
  // ];
  filterByCompleteness: string = "incompleteTasks";

  onChange(optionFromMenu) {
  this.filterByCompleteness = optionFromMenu;
}

toggleDone(clickedTask: Task, setCompleteness: boolean) {
     clickedTask.done = setCompleteness;
   }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
