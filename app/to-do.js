var Task = /** @class */ (function () {
    // description: string;
    // priority: string;
    function Task(description, priority) {
        // this.done = false;
        // this.description = description;
        // this.priority = priority;
        this.description = description;
        this.priority = priority;
        this.done = false;
        //constructor instantiates new tasks
    }
    return Task;
}());
var tasks = [];
// Task[] is an array data type
tasks.push(new Task('Do the dishes.', 'Medium'));
//Typescript requires strings be single quotes ('example')
console.log(tasks);
