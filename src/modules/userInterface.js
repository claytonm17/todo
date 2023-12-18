const userInterface = (function () {

    function loadDefaultPage() {

        const contentContainer = document.querySelector('#content');
        contentContainer.appendChild(loadHeader());

        contentContainer.appendChild(loadWorkspace());
        const workspace = document.querySelector('.workspace');
        workspace.appendChild(loadNavBar());
        workspace.appendChild(loadTaskSpace('Main'));
    }

    function loadHeader() {

        const header = document.createElement('header');
        header.setAttribute('class', 'header');
        
        const title = document.createElement('h1');
        title.textContent = 'To-Do';
        const logo = document.createElement('img');
        logo.setAttribute('src', '../src/images/main-logo.svg');
        logo.setAttribute('alt', 'Square logo with a checkmark');


        header.appendChild(logo);
        header.appendChild(title);

        return header;
    }

    function loadWorkspace() {

        const workspace = document.createElement('div');
        workspace.setAttribute('class', 'workspace');

        return workspace;
    }

    function loadNavBar() {

        const navBar = document.createElement('nav');
        navBar.setAttribute('class', 'navbar');

        const buttonTab = document.createElement('div');
        buttonTab.setAttribute('class', 'button-tab');
        navBar.appendChild(buttonTab);

        buttonTab.appendChild(loadIconButton('home.svg', 'Home', true));
        buttonTab.appendChild(loadIconButton('calendar-day.svg', 'Today', false));
        buttonTab.appendChild(loadIconButton('calendar-week.svg', 'This week', false));

        const projectTab = document.createElement('div');
        projectTab.setAttribute('class', 'project-tab');
        navBar.appendChild(projectTab);

        const projectHeader = document.createElement('h2');
        projectHeader.textContent = 'Projects';
        projectTab.appendChild(projectHeader);

        projectTab.appendChild(loadIconButton('list.svg', 'Main', false));
        projectTab.appendChild(loadIconButton('calendar-add.svg', 'Main', false));
        
        // Implement logic for adding projects, etc

        return navBar;
    }

    function loadIconButton(source, text, isActive) {
        // source: svg file, text: words, isActive: for selected page

        const iconButton = document.createElement('button');
        iconButton.setAttribute('class', 'icon-button');

        if (isActive === true) {
            iconButton.classList.add('active');
        }

        const iconImage = document.createElement('img');
        iconImage.setAttribute('src', `../src/images/${source}`);
        iconImage.setAttribute('alt', `Icon for ${text} button`);
        iconImage.setAttribute('class', 'inline-icon');

        const iconText = document.createElement('div');
        iconText.textContent = text;

        iconButton.appendChild(iconImage);
        iconButton.appendChild(iconText);

        return iconButton;
    }

    function loadTaskSpace(project) {
        // Add logic for changing title based on project
        const taskSpace = document.createElement('main');
        taskSpace.setAttribute('class', 'tasks');

        const title = document.createElement('h2');
        title.setAttribute('class', 'nav');
        title.textContent = project;

        const taskList = document.createElement('div');
        taskList.setAttribute('class', 'task-list');

        taskSpace.appendChild(title);
        taskSpace.appendChild(taskList);

        return taskSpace;
    }

    // Load input popup
    function inputForm() {
        const form = document.createElement('form');
        form.setAttribute('class', 'form-box');

        const formHeader = document.createElement('div');
        formHeader.setAttribute('class', 'form-box-header');

            const title = document.createElement('h2');
            title.setAttribute('class', 'form-box-title');
            title.textContent = 'Create a new task';

            const close = document.createElement('div');
            close.setAttribute('class', 'form-box-close');
            close.textContent = 'X';

        formHeader.appendChild(title);
        formHeader.appendChild(close)

        const formContent = document.createElement('div');
        formContent.setAttribute('class', 'form-box-content');

            const taskName = document.createElement('textarea');
            taskName.name = 'new-title';
            taskName.id = 'title-new';
            taskName.maxLength = '40';
            taskName.placeholder = 'Title: My task';

            const taskDesc = document.createElement('textarea');
            taskDesc.name = 'new-description';
            taskDesc.id = 'description-new';
            taskDesc.rows = '4';
            taskDesc.placeholder = 'Details: e.g walk the dog';

            const dateBox = document.createElement('div');
            dateBox.className = 'date-box';

                const dateTitle = document.createElement('div');
                dateTitle.className = 'date-title';
                dateTitle.textContent = 'Due Date:';

                const dateInput = document.createElement('input');
                dateInput.name = 'date';
                dateInput.type = 'date';

                dateBox.appendChild(dateTitle);
                dateBox.appendChild(dateInput);

            const priorityRow = document.createElement('div');
            priorityRow.className = 'priority-row';

                const priorityTitle = document.createElement('div');
                priorityTitle.className = 'priority-title';
                priorityTitle.textContent = 'Priority:';

                const submitButton = document.createElement('input');
                submitButton.type = 'submit';
                submitButton.classList = 'form-submit';
                submitButton.id = 'submit';
                submitButton.value = 'add-to-list';

                priorityRow.appendChild(priorityTitle);
                priorityRow.appendChild(radioButton('low'));
                priorityRow.appendChild(radioButton('medium'));
                priorityRow.appendChild(radioButton('high'));
                priorityRow.appendChild(submitButton);

        formContent.appendChild(taskName);
        formContent.appendChild(taskDesc);
        formContent.appendChild(dateBox);
        formContent.appendChild(priorityRow);

        form.appendChild(formHeader);
        form.appendChild(formContent);

        return form;
    }

    function radioButton(priority) {
        const buttonContainer = document.createElement('label');
        buttonContainer.setAttribute('for', `priority-${priority}`);
        buttonContainer.className = 'priority-label';

        // Capitalize priority level
        const priorityCap = priority.charAt(0).toUpperCase() + priority.slice(1);
        buttonContainer.textContent = priorityCap;

        const priorityInput = document.createElement('input');
        priorityInput.name = 'priority';
        priorityInput.type = 'radio';
        priorityInput.value = priority;
        priorityInput.id = `priority-${priority}`;
        priorityInput.className = 'priority-button';

        buttonContainer.appendChild(priorityInput);

        return buttonContainer;
    }

    function backdropBlur() {
        const blur = document.createElement('div');
        blur.setAttribute('class', 'blur');

        return blur;
    }

    function loadInputForm() {
        const contentContainer = document.querySelector('#content');

        contentContainer.appendChild(backdropBlur());
        contentContainer.appendChild(inputForm());
    }

    return {
        loadDefaultPage,
        loadInputForm,
    }
})();

export default {
    userInterface,
}