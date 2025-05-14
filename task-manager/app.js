const { saveTasks, loadTasks }= require('./fileHandler'); 
const {addTask, listTasks}= require('./taskManager');

let tasks= [];

addTask(tasks, "Complete modules"); // add task to tasks array
addTask(tasks, "Practice assignments");
addTask(tasks, "Go for a walk");
listTasks(tasks); 

saveTasks('tasks.json', tasks); //loads tasks array to tasks.json file
console.log(loadTasks('tasks.json')); // loads json file back to tasks array
