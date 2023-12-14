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

// userInterface.loadDefaultPage();