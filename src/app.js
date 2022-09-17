/*
// autobind decorator

function autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
*/
//validation interface
//Project State Management
var ProjectState = /** @class */ (function () {
    function ProjectState() {
        this.listeners = [];
        this.projects = [];
    }
    ProjectState.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    };
    ProjectState.prototype.addListener = function (listenerFn) {
        this.listeners.push(listenerFn);
    };
    ProjectState.prototype.addProject = function (title, description, numOfPeople) {
        var newProject = {
            id: Math.random.toString(),
            title: title,
            description: description,
            people: numOfPeople
        };
        this.projects.push(newProject);
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listenerFn = _a[_i];
            listenerFn(this.projects.slice());
        }
    };
    return ProjectState;
}());
var projectState = ProjectState.getInstance();
//ProjectList
var ProjectList = /** @class */ (function () {
    function ProjectList(type) {
        this.type = type;
        this.templateElement = document.getElementById('project-list');
        this.hostElement = document.getElementById('app');
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "".concat(this.type, "-projects");
        this.attach();
        this.renderContent();
    }
    ProjectList.prototype.renderContent = function () {
        var listId = "".concat(this.type, "-projects-list");
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent = this.type.toUpperCase() + ' PROJECTS';
    };
    ProjectList.prototype.attach = function () {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    };
    return ProjectList;
}());
function validate(validatableInput) {
    var isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}
// ProjectInput Class
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    ProjectInput.prototype.gatherUserInput = function () {
        var enteredTitle = this.titleInputElement.value;
        var enteredDescription = this.descriptionInputElement.value;
        var enteredPeople = this.peopleInputElement.value;
        var titleValidatable = {
            value: enteredTitle,
            required: true
        };
        var descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
            maxLength: 20
        };
        var peopleValidatable = {
            value: enteredPeople,
            required: true,
            min: 1,
            max: 5
        };
        if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
            alert('Invalid input');
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    };
    ProjectInput.prototype.clearInputs = function () {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    };
    ProjectInput.prototype.submitHandler = function (event) {
        event.preventDefault();
        var userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            var title = userInput[0], desc = userInput[1], people = userInput[2];
            projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    };
    ProjectInput.prototype.configure = function () {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    };
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
        this.element.id = 'user-input';
    };
    return ProjectInput;
}());
var prjInput = new ProjectInput();
var activePrjList = new ProjectList('active');
var finishedPrjList = new ProjectList('finished');
/*

let temp = document.getElementById('project-input');
document.body.appendChild(temp.content);

let temp1 = document.getElementById('single-project');
document.body.appendChild(temp1.content);

let temp2 = document.getElementById('project-list');
document.body.appendChild(temp2.content);

let form = document.getElementById('form');

let dataArray = [];


form.addEventListener('submit', (e) => {

    e.preventDefault();

    let data = {
        title: String = document.getElementById("title"),
        description: String = document.getElementById('description'),
        people: Number = document.getElementById('people')
    }



    if (data.title.value === '' || data.title == null) {
        alert('Title required');
        return;

    }
    if (data.description.value === '' || data.description.value == null) {
        alert('Description required');
        return;

    }
    if (data.description.value === 0 || data.description.value == null) {
        alert('Peoples number required');
        return;

    }
    else {
        dataArray.push(data.title.value);
        dataArray.push(data.description.value);
        dataArray.push(data.people.value);

        dataArray.forEach(element => {

            let content = document.createTextNode(element);
            var li = document.createElement("li");
            li.innerHTML = element;

            document.getElementById('list').append(li);

        });
        dataArray = [];
    }


    document.querySelector('form').reset();

})
*/ 
