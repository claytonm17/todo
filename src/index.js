// Todo list data manager
const toDoManager = (function () {

    class ToDoItem {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }

        log() {
            console.log(`Title: ${this.title}`)
            console.log(`Description: ${this.description}`)
            console.log(`Due Date: ${this.dueDate}`)
            console.log(`Priority: ${this.priority}`)
        }
    }

    const toDoList = []
    
    function addNewItem(title, description, dueDate, priority) {
        const newItem = new ToDoItem(title, description, dueDate, priority)
        toDoList.push(newItem);
    }

    function removeItem(index) {
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
    }
})();

toDoManager.addNewItem('Homework', 'Chemistry reading', 'Friday', 'Medium');
toDoManager.addNewItem('Meeting', 'Meet with execs', 'Monday', 'High');


toDoManager.logList()

toDoManager.removeItem(0)

toDoManager.logList()