import listManager from './modules/listManager.js';
import manipulateDOM from './modules/userInterface.js';
import { format, parse } from 'date-fns';
import './styles.css';

const { toDoManager } = listManager;
const { userInterface } = manipulateDOM;

// For displaying
const today = new Date();
const formattedDate = format(today, 'yyyy-MM-dd HH:mm:ss');
console.log(formattedDate);

// Use form date input to pull due date
var result = parse('1999-09-28', 'yyyy-mm-dd', new Date())
console.log(result)

toDoManager.addNewItem('Homework', 'Chemistry reading', 'Friday', 'Medium', false);
toDoManager.addNewItem('Meeting', 'Meet with execs', 'Monday', 'High', true);

toDoManager.changeProjectName('household');
toDoManager.addNewItem('Do the dishes', '', 'Today', 'Low', false);
toDoManager.addNewItem('Laundry', '', 'Today', 'Low', false);
toDoManager.addNewItem('Walk the dog', 'Be sure to bring treats!', 'Today', 'Medium', true);

toDoManager.changeProjectName('default');
toDoManager.addNewItem('Play video games', 'Minecraft or fortnite', 'Today', 'Low', false);

toDoManager.logList()

userInterface.loadDefaultPage();

// Pull length of amount of tasks and pull exact data to input for DOM
let numberOfTasks = toDoManager.pullTasks().length;
console.log(numberOfTasks);
// console.log(toDoManager.pullTasks())

function getTaskInformation(tasks) {
    const taskInformation = [];
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        taskInformation.push({
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            priority: task.priority,
            isComplete: task.isComplete,
            project: task.project
        })
        return taskInformation;
    }
}

console.log(toDoManager.pullTasks()); // Get all info