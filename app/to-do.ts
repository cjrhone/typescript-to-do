class Task {
  done: boolean = false;
  // description: string;
  // priority: string;

  constructor(public description: string, public priority: string){}
    // this.done = false;
    // this.description = description;
    // this.priority = priority;

    //constructor instantiates new tasks

    markDone(){
      this.done = true;
      //this runs markDone() which marks the done property from false to true
    };
};

var tasks: Task[] = [];
// Task[] is an array data type
tasks.push(new Task('Do the dishes.', 'Medium'));
//Typescript requires strings be single quotes ('example')
tasks.push(new Task('Buy Chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));

tasks[1].markDone();
//marks the 2nd task as done

for(var task of tasks){
  console.log(task);
};
