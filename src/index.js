import listManager from './modules/listManager.js';

const { toDoManager } = listManager;

toDoManager.addNewItem('Homework', 'Chemistry reading', 'Friday', 'Medium', false);
toDoManager.addNewItem('Meeting', 'Meet with execs', 'Monday', 'High', true);

toDoManager.changeProjectName('household');
toDoManager.addNewItem('Do the dishes', '', 'Today', 'Low', false);
toDoManager.addNewItem('Laundry', '', 'Today', 'Low', false);
toDoManager.addNewItem('Walk the dog', 'Be sure to bring treats!', 'Today', 'Medium', true);

toDoManager.changeProjectName('default');
toDoManager.addNewItem('Play video games', 'Minecraft or fortnite', 'Today', 'Low', false);

toDoManager.logList()