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

    return {
        loadDefaultPage,
    }
})();

export default {
    userInterface,
}