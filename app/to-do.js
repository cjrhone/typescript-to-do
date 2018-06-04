var Task = /** @class */ (function () {
    // description: string;
    // priority: string;
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    // this.done = false;
    // this.description = description;
    // this.priority = priority;
    //constructor instantiates new tasks
    Task.prototype.markDone = function () {
        this.done = true;
        //this runs markDone() which marks the done property from false to true upon instantion
    };
    ;
    return Task;
}());
;
var tasks = [];
// Task[] is an array data type
tasks.push(new Task('Do the dishes.', 'Medium'));
//Typescript requires strings be single quotes ('example')
tasks.push(new Task('Buy Chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));
tasks[1].markDone();
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(task);
}
;
