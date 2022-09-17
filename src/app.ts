
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

interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

//Project State Management

class ProjectState {
    private listeners: any[] = [];
    private projects: any[]=[];
    private static instance: ProjectState;

    private constructor(){

    }

    static getInstance(){
        if(this.instance){
            return this.instance
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addListener(listenerFn: Function){
        this.listeners.push(listenerFn);
    }

    addProject(title: string,description: string,numOfPeople: number ){
        const newProject = {
            id: Math.random.toString(),
            title: title,
            description: description,
            people: numOfPeople
        };
        this.projects.push(newProject);
        for (const listenerFn of this.listeners){
            listenerFn(this.projects.slice());
        }
    }
}

const projectState = ProjectState.getInstance();

//ProjectList
 class ProjectList {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    constructor(private type: 'active'|'finished') {
        this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;



        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLElement;
        this.element.id = `${this.type}-projects`;

        this.attach();
        this.renderContent();

    }

    private renderContent(){
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase()+' PROJECTS';
    }
    private attach(){
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
 }


function validate(validatableInput: Validatable) {
    let isValid = true;
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
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;



        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
        this.attach();
    }
    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const titleValidatable: Validatable = {
            value: enteredTitle,
            required: true
        };
        const descriptionValidatable: Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
            maxLength: 20
        };
        const peopleValidatable: Validatable = {
            value: enteredPeople,
            required: true,
            min: 1,
            max: 5
        };
        if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
            alert('Invalid input');
            return;
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }

    }
    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    private submitHandler(event: Event) {

        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
        this.element.id = 'user-input';

    }

}
const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
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