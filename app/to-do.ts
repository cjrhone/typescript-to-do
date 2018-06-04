class Task {
  done: boolean = false;
  // description: string;
  // priority: string;

  constructor(public description: string, public priority: string){
    // this.done = false;
    // this.description = description;
    // this.priority = priority;

    //constructor instantiates new tasks
  }

}

var tasks: Task[] = [];
// Task[] is an array data type
tasks.push(new Task('Do the dishes.', 'Medium'));
//Typescript requires strings be single quotes ('example')
console.log(tasks);
