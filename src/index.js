// Basic todo list manager
const toDoManager = (function () {

    // Project name is default unless another list is chosen
    let project = 'default'
    function changeProjectName(name){
        if (name !== undefined && name !== ''){
            project = name;
        }
    }

    class ToDoItem {
        constructor(title, description, dueDate, priority, isComplete, project) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.isComplete = isComplete;
            this.project = project;
        }

        log() {
            console.log(`Title: ${this.title}`)
            console.log(`Description: ${this.description}`)
            console.log(`Due Date: ${this.dueDate}`)
            console.log(`Priority: ${this.priority}`)
            console.log(this.isComplete)
            console.log(`Project: ${this.project}`)
        }
    }

    const toDoList = []
    
    // By default the task is not complete and in the default project
    function addNewItem(title, description, dueDate, priority, isComplete) {
        const newItem = new ToDoItem(title, description, dueDate, priority, isComplete, project)  
        toDoList.push(newItem);
    }

    function removeItem(index) {
        index = index - 1; // To match task number
        if (index >= 0 && index < toDoList.length) {
            toDoList.splice(index, 1)
        } else {
            console.log('Invalid index')
        }
    }

    function logList() {
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`Task ${i + 1}`)
            toDoList[i].log()
            console.log('----------')
        }
    }

    return {
        addNewItem,
        removeItem,
        logList,
        changeProjectName,
    }
})();

toDoManager.addNewItem('Homework', 'Chemistry reading', 'Friday', 'Medium', false);
toDoManager.addNewItem('Meeting', 'Meet with execs', 'Monday', 'High', true);

toDoManager.changeProjectName('household');
toDoManager.addNewItem('Do the dishes', '', 'Today', 'Low', false);
toDoManager.addNewItem('Laundry', '', 'Today', 'Low', false);
toDoManager.addNewItem('Walk the dog', 'Be sure to bring treats!', 'Today', 'Medium', true);

toDoManager.changeProjectName('default');
toDoManager.addNewItem('Play video games', 'Minecraft or fortnite', 'Today', 'Low', false);

toDoManager.logList()