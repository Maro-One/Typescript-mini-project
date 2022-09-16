
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

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
        this.attach();
    }
    private gatherUserInput(): [string,string,number] | void {
        const enteredTitle =  this.titleInputElement.value;
        const enteredDescription =  this.descriptionInputElement.value;
        const enteredPeople =  this.peopleInputElement.value;
        if (enteredTitle.trim().length === 0 ||enteredDescription.trim().length === 0 ||enteredPeople.trim().length === 0 ){
            alert('Invalid input');
            return;
        }else{
            return [enteredTitle,enteredDescription,+enteredPeople]
        }
    }
    private clearInputs(){
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    private submitHandler(event: Event) {

        event.preventDefault();
        const userInput = this.gatherUserInput();
        if(Array.isArray(userInput)){
            const [title, desc, people] =userInput;
            console.log(title, desc, people);
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