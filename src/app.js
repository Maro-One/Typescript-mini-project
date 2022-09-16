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
// ProjectInput Class
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
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
        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPeople.trim().length === 0) {
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
            console.log(title, desc, people);
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
