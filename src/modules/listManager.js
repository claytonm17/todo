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

    // Return information to put tasks on DOM
    function pullTasks() {
        let mainTasks = [];

        for (let i = 0; i < toDoList.length; i++) {
            mainTasks.push(toDoList[i]);
        }

        return mainTasks;
    }

    return {
        addNewItem,
        removeItem,
        logList,
        changeProjectName,
        pullTasks,
    }
})();

export default {
    toDoManager,
}