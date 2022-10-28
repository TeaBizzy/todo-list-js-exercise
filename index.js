// Create a new task by poppulating an object.
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title,
    description,
    complete: false,
    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    markComplete: function() {
      this.complete = true;
    },
    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };

  return task;
};





// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do laundry", "😨");
const task3 = newTask("No Desc");
const tasks = [task1, task2, task3];


task1.logState();
task1.markComplete();
task1.logState();

console.log(tasks);
