const userInterface = (function () {

    function loadDefaultPage() {
        const contentContianer = document.querySelector('#content');
        contentContianer.appendChild(loadHeader());
    }

    function loadHeader() {
        const header = document.createElement('header');
        header.setAttribute('class', 'header');
        
        const title = document.createElement('h1');
        title.textContent = 'To-Do';
        const logo = document.createElement('img');

        header.appendChild(title);
        header.appendChild(logo);

        return header;
    }

    return {
        loadDefaultPage,
    }
})();

export default {
    userInterface,
}