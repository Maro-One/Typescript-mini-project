/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/base-component.ts":
/*!******************************************!*\
  !*** ./src/components/base-component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


// Component Base Class
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Component = /** @class */ (function () {
    function Component(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    Component.prototype.attach = function (insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    };
    return Component;
}());
exports["default"] = Component;


/***/ }),

/***/ "./src/components/project-input.ts":
/*!*****************************************!*\
  !*** ./src/components/project-input.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectInput = void 0;
var base_component_1 = __importDefault(__webpack_require__(/*! ./base-component */ "./src/components/base-component.ts"));
var Validation = __importStar(__webpack_require__(/*! ../util/validation */ "./src/util/validation.ts"));
var autobind_1 = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
var project_1 = __webpack_require__(/*! ../state/project */ "./src/state/project.ts");
// ProjectInput Class
var ProjectInput = /** @class */ (function (_super) {
    __extends(ProjectInput, _super);
    function ProjectInput() {
        var _this = _super.call(this, 'project-input', 'app', true, 'user-input') || this;
        _this.titleInputElement = _this.element.querySelector('#title');
        _this.descriptionInputElement = _this.element.querySelector('#description');
        _this.peopleInputElement = _this.element.querySelector('#people');
        _this.configure();
        return _this;
    }
    ProjectInput.prototype.configure = function () {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    };
    ProjectInput.prototype.renderContent = function () {
    };
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
        if (!Validation.validate(titleValidatable) || !Validation.validate(descriptionValidatable) || !Validation.validate(peopleValidatable)) {
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
            project_1.projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    };
    __decorate([
        autobind_1.autobind
    ], ProjectInput.prototype, "submitHandler", null);
    return ProjectInput;
}(base_component_1.default));
exports.ProjectInput = ProjectInput;


/***/ }),

/***/ "./src/components/project-item.ts":
/*!****************************************!*\
  !*** ./src/components/project-item.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectItem = void 0;
var base_component_1 = __importDefault(__webpack_require__(/*! ./base-component */ "./src/components/base-component.ts"));
var autobind_1 = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
//ProjectItem Class
var ProjectItem = /** @class */ (function (_super) {
    __extends(ProjectItem, _super);
    function ProjectItem(hostId, project) {
        var _this = _super.call(this, 'single-project', hostId, false, project.id) || this;
        _this.project = project;
        _this.configure();
        _this.renderContent();
        return _this;
    }
    Object.defineProperty(ProjectItem.prototype, "persons", {
        get: function () {
            if (this.project.people === 1) {
                return '1 person';
            }
            else {
                return "".concat(this.project.people, " persons");
            }
        },
        enumerable: false,
        configurable: true
    });
    ProjectItem.prototype.dragStartHandler = function (event) {
        event.dataTransfer.setData('text/plain', this.project.id);
        event.dataTransfer.effectAllowed = 'move';
    };
    ProjectItem.prototype.dragEndHandler = function (event) {
        console.log('DragEnd');
    };
    ProjectItem.prototype.configure = function () {
        this.element.addEventListener('dragstart', this.dragStartHandler.bind(this));
        this.element.addEventListener('dragend', this.dragEndHandler.bind(this));
    };
    ProjectItem.prototype.renderContent = function () {
        this.element.querySelector('h2').textContent = this.project.title;
        this.element.querySelector('h3').textContent = this.persons + ' assigned';
        this.element.querySelector('p').textContent = this.project.description;
    };
    __decorate([
        autobind_1.autobind
    ], ProjectItem.prototype, "dragStartHandler", null);
    return ProjectItem;
}(base_component_1.default));
exports.ProjectItem = ProjectItem;


/***/ }),

/***/ "./src/components/project-list.ts":
/*!****************************************!*\
  !*** ./src/components/project-list.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectList = void 0;
var project_1 = __webpack_require__(/*! ../models/project */ "./src/models/project.ts");
var base_component_1 = __importDefault(__webpack_require__(/*! ./base-component */ "./src/components/base-component.ts"));
var autobind_1 = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
var project_2 = __webpack_require__(/*! ../state/project */ "./src/state/project.ts");
var project_item_1 = __webpack_require__(/*! ./project-item */ "./src/components/project-item.ts");
//ProjectList
var ProjectList = /** @class */ (function (_super) {
    __extends(ProjectList, _super);
    function ProjectList(type) {
        var _this = _super.call(this, 'project-list', 'app', false, "".concat(type, "-projects")) || this;
        _this.type = type;
        _this.assignedProjects = [];
        _this.configure();
        _this.renderContent();
        return _this;
    }
    ProjectList.prototype.dragOverHandler = function (event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            var listEl = this.element.querySelector('ul');
            listEl.classList.add('droppable');
        }
    };
    ProjectList.prototype.dropHandler = function (event) {
        var prjId = event.dataTransfer.getData('text/plain');
        project_2.projectState.moveProject(prjId, this.type === 'active' ? project_1.ProjectStatus.Active : project_1.ProjectStatus.finished);
    };
    ProjectList.prototype.dragLeaveHandler = function (_) {
        var listEl = this.element.querySelector('ul');
        listEl.classList.remove('droppable');
    };
    ProjectList.prototype.configure = function () {
        var _this = this;
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);
        project_2.projectState.addListener(function (projects) {
            var relevantProjects = projects.filter(function (prj) {
                if (_this.type === 'active') {
                    return prj.status === project_1.ProjectStatus.Active;
                }
                return prj.status === project_1.ProjectStatus.finished;
            });
            _this.assignedProjects = relevantProjects;
            _this.renderProjects();
        });
        this.renderContent();
    };
    ProjectList.prototype.renderContent = function () {
        var listId = "".concat(this.type, "-projects-list");
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent = this.type.toUpperCase() + ' PROJECTS';
    };
    ProjectList.prototype.renderProjects = function () {
        var listEl = document.getElementById("".concat(this.type, "-projects-list"));
        listEl.innerHTML = '';
        for (var _i = 0, _a = this.assignedProjects; _i < _a.length; _i++) {
            var prjItem = _a[_i];
            new project_item_1.ProjectItem(this.element.querySelector('ul').id, prjItem);
        }
    };
    __decorate([
        autobind_1.autobind
    ], ProjectList.prototype, "dragOverHandler", null);
    __decorate([
        autobind_1.autobind
    ], ProjectList.prototype, "dropHandler", null);
    __decorate([
        autobind_1.autobind
    ], ProjectList.prototype, "dragLeaveHandler", null);
    return ProjectList;
}(base_component_1.default));
exports.ProjectList = ProjectList;


/***/ }),

/***/ "./src/decorators/autobind.ts":
/*!************************************!*\
  !*** ./src/decorators/autobind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.autobind = void 0;
// autobind decorator
function autobind(_, _2, descriptor) {
    var originalMethod = descriptor.value;
    var adjDescriptor = {
        configurable: true,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
exports.autobind = autobind;


/***/ }),

/***/ "./src/models/project.ts":
/*!*******************************!*\
  !*** ./src/models/project.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


//Project models namespace
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Project = exports.ProjectStatus = void 0;
//Project enum
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["finished"] = 1] = "finished";
})(ProjectStatus = exports.ProjectStatus || (exports.ProjectStatus = {}));
var Project = /** @class */ (function () {
    function Project(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
    return Project;
}());
exports.Project = Project;


/***/ }),

/***/ "./src/state/project.ts":
/*!******************************!*\
  !*** ./src/state/project.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.projectState = exports.ProjectState = void 0;
var project_1 = __webpack_require__(/*! ../models/project */ "./src/models/project.ts");
//Project State Management
var State = /** @class */ (function () {
    function State() {
        this.listeners = [];
    }
    State.prototype.addListener = function (listenerFn) {
        this.listeners.push(listenerFn);
    };
    return State;
}());
var ProjectState = /** @class */ (function (_super) {
    __extends(ProjectState, _super);
    function ProjectState() {
        var _this = _super.call(this) || this;
        _this.projects = [];
        return _this;
    }
    ProjectState.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    };
    ProjectState.prototype.addProject = function (title, description, numOfPeople) {
        var newProject = new project_1.Project(Math.random.toString(), title, description, numOfPeople, project_1.ProjectStatus.Active);
        this.projects.push(newProject);
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listenerFn = _a[_i];
            listenerFn(this.projects.slice());
        }
    };
    ProjectState.prototype.moveProject = function (projectId, newStatus) {
        var project = this.projects.find(function (prj) { return prj.id === projectId; });
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
        //this.projects.find(prj => prj)
    };
    ProjectState.prototype.updateListeners = function () {
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listenerFn = _a[_i];
            listenerFn(this.projects.slice());
        }
    };
    return ProjectState;
}(State));
exports.ProjectState = ProjectState;
exports.projectState = ProjectState.getInstance();


/***/ }),

/***/ "./src/util/validation.ts":
/*!********************************!*\
  !*** ./src/util/validation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
function validate(validatableInput) {
    var isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === 'string') {
        isValid =
            isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === 'string') {
        isValid =
            isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}
exports.validate = validate;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var project_input_1 = __webpack_require__(/*! ./components/project-input */ "./src/components/project-input.ts");
var project_list_1 = __webpack_require__(/*! ./components/project-list */ "./src/components/project-list.ts");
new project_input_1.ProjectInput();
new project_list_1.ProjectList('active');
new project_list_1.ProjectList('finished');
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7QUNuQkY7QUFDYjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ3ZGLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQix1Q0FBdUMsbUJBQU8sQ0FBQyw0REFBa0I7QUFDakUsOEJBQThCLG1CQUFPLENBQUMsb0RBQW9CO0FBQzFELGlCQUFpQixtQkFBTyxDQUFDLDREQUF3QjtBQUNqRCxnQkFBZ0IsbUJBQU8sQ0FBQyxnREFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxvQkFBb0I7Ozs7Ozs7Ozs7O0FDckhQO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0Isc0NBQXNDLGtCQUFrQjtBQUN2Riw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQjtBQUNuQix1Q0FBdUMsbUJBQU8sQ0FBQyw0REFBa0I7QUFDakUsaUJBQWlCLG1CQUFPLENBQUMsNERBQXdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsbUJBQW1COzs7Ozs7Ozs7OztBQ3hFTjtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCLHNDQUFzQyxrQkFBa0I7QUFDdkYsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkIsZ0JBQWdCLG1CQUFPLENBQUMsa0RBQW1CO0FBQzNDLHVDQUF1QyxtQkFBTyxDQUFDLDREQUFrQjtBQUNqRSxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBd0I7QUFDakQsZ0JBQWdCLG1CQUFPLENBQUMsZ0RBQWtCO0FBQzFDLHFCQUFxQixtQkFBTyxDQUFDLHdEQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG1CQUFtQjs7Ozs7Ozs7Ozs7QUNuR047QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNmSDtBQUNiO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWUsR0FBRyxxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNENBQTRDLHFCQUFxQixLQUFLO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxlQUFlOzs7Ozs7Ozs7OztBQ3BCRjtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCLHNDQUFzQyxrQkFBa0I7QUFDdkYsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0IsR0FBRyxvQkFBb0I7QUFDM0MsZ0JBQWdCLG1CQUFPLENBQUMsa0RBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGdCQUFnQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDhCQUE4QjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxvQkFBb0I7QUFDcEIsb0JBQW9COzs7Ozs7Ozs7OztBQ3BFUDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7Ozs7Ozs7VUM1QmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCLG1CQUFPLENBQUMscUVBQTRCO0FBQzFELHFCQUFxQixtQkFBTyxDQUFDLG1FQUEyQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7QUFDRDtBQUNBOzs7QUFHQTs7QUFFQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtaW5wdXQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtaXRlbS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC1saXN0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQvLi9zcmMvZGVjb3JhdG9ycy9hdXRvYmluZC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL21vZGVscy9wcm9qZWN0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQvLi9zcmMvc3RhdGUvcHJvamVjdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL3V0aWwvdmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHQvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gQ29tcG9uZW50IEJhc2UgQ2xhc3Ncbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29tcG9uZW50KHRlbXBsYXRlSWQsIGhvc3RFbGVtZW50SWQsIGluc2VydEF0U3RhcnQsIG5ld0VsZW1lbnRJZCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRlbXBsYXRlSWQpO1xuICAgICAgICB0aGlzLmhvc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaG9zdEVsZW1lbnRJZCk7XG4gICAgICAgIHZhciBpbXBvcnRlZE5vZGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGVFbGVtZW50LmNvbnRlbnQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBpbXBvcnRlZE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGlmIChuZXdFbGVtZW50SWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IG5ld0VsZW1lbnRJZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0dGFjaChpbnNlcnRBdFN0YXJ0KTtcbiAgICB9XG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiAoaW5zZXJ0QXRCZWdpbm5pbmcpIHtcbiAgICAgICAgdGhpcy5ob3N0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoaW5zZXJ0QXRCZWdpbm5pbmcgPyAnYWZ0ZXJiZWdpbicgOiAnYmVmb3JlZW5kJywgdGhpcy5lbGVtZW50KTtcbiAgICB9O1xuICAgIHJldHVybiBDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQ29tcG9uZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlByb2plY3RJbnB1dCA9IHZvaWQgMDtcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2UtY29tcG9uZW50XCIpKTtcbnZhciBWYWxpZGF0aW9uID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi91dGlsL3ZhbGlkYXRpb25cIikpO1xudmFyIGF1dG9iaW5kXzEgPSByZXF1aXJlKFwiLi4vZGVjb3JhdG9ycy9hdXRvYmluZFwiKTtcbnZhciBwcm9qZWN0XzEgPSByZXF1aXJlKFwiLi4vc3RhdGUvcHJvamVjdFwiKTtcbi8vIFByb2plY3RJbnB1dCBDbGFzc1xudmFyIFByb2plY3RJbnB1dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUHJvamVjdElucHV0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByb2plY3RJbnB1dCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgJ3Byb2plY3QtaW5wdXQnLCAnYXBwJywgdHJ1ZSwgJ3VzZXItaW5wdXQnKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy50aXRsZUlucHV0RWxlbWVudCA9IF90aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgIF90aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50ID0gX3RoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICAgICAgX3RoaXMucGVvcGxlSW5wdXRFbGVtZW50ID0gX3RoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcGVvcGxlJyk7XG4gICAgICAgIF90aGlzLmNvbmZpZ3VyZSgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFByb2plY3RJbnB1dC5wcm90b3R5cGUuY29uZmlndXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH07XG4gICAgUHJvamVjdElucHV0LnByb3RvdHlwZS5yZW5kZXJDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgUHJvamVjdElucHV0LnByb3RvdHlwZS5nYXRoZXJVc2VySW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbnRlcmVkVGl0bGUgPSB0aGlzLnRpdGxlSW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgICB2YXIgZW50ZXJlZERlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudC52YWx1ZTtcbiAgICAgICAgdmFyIGVudGVyZWRQZW9wbGUgPSB0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZTtcbiAgICAgICAgdmFyIHRpdGxlVmFsaWRhdGFibGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogZW50ZXJlZFRpdGxlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uVmFsaWRhdGFibGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogZW50ZXJlZERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IDUsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDIwXG4gICAgICAgIH07XG4gICAgICAgIHZhciBwZW9wbGVWYWxpZGF0YWJsZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBlbnRlcmVkUGVvcGxlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFWYWxpZGF0aW9uLnZhbGlkYXRlKHRpdGxlVmFsaWRhdGFibGUpIHx8ICFWYWxpZGF0aW9uLnZhbGlkYXRlKGRlc2NyaXB0aW9uVmFsaWRhdGFibGUpIHx8ICFWYWxpZGF0aW9uLnZhbGlkYXRlKHBlb3BsZVZhbGlkYXRhYmxlKSkge1xuICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgaW5wdXQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbZW50ZXJlZFRpdGxlLCBlbnRlcmVkRGVzY3JpcHRpb24sICtlbnRlcmVkUGVvcGxlXTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUHJvamVjdElucHV0LnByb3RvdHlwZS5jbGVhcklucHV0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50aXRsZUlucHV0RWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMucGVvcGxlSW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfTtcbiAgICBQcm9qZWN0SW5wdXQucHJvdG90eXBlLnN1Ym1pdEhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHVzZXJJbnB1dCA9IHRoaXMuZ2F0aGVyVXNlcklucHV0KCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHVzZXJJbnB1dCkpIHtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IHVzZXJJbnB1dFswXSwgZGVzYyA9IHVzZXJJbnB1dFsxXSwgcGVvcGxlID0gdXNlcklucHV0WzJdO1xuICAgICAgICAgICAgcHJvamVjdF8xLnByb2plY3RTdGF0ZS5hZGRQcm9qZWN0KHRpdGxlLCBkZXNjLCBwZW9wbGUpO1xuICAgICAgICAgICAgdGhpcy5jbGVhcklucHV0cygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgYXV0b2JpbmRfMS5hdXRvYmluZFxuICAgIF0sIFByb2plY3RJbnB1dC5wcm90b3R5cGUsIFwic3VibWl0SGFuZGxlclwiLCBudWxsKTtcbiAgICByZXR1cm4gUHJvamVjdElucHV0O1xufShiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuUHJvamVjdElucHV0ID0gUHJvamVjdElucHV0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qcm9qZWN0SXRlbSA9IHZvaWQgMDtcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2UtY29tcG9uZW50XCIpKTtcbnZhciBhdXRvYmluZF8xID0gcmVxdWlyZShcIi4uL2RlY29yYXRvcnMvYXV0b2JpbmRcIik7XG4vL1Byb2plY3RJdGVtIENsYXNzXG52YXIgUHJvamVjdEl0ZW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFByb2plY3RJdGVtLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByb2plY3RJdGVtKGhvc3RJZCwgcHJvamVjdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAnc2luZ2xlLXByb2plY3QnLCBob3N0SWQsIGZhbHNlLCBwcm9qZWN0LmlkKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgX3RoaXMuY29uZmlndXJlKCk7XG4gICAgICAgIF90aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUHJvamVjdEl0ZW0ucHJvdG90eXBlLCBcInBlcnNvbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3QucGVvcGxlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcxIHBlcnNvbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5wcm9qZWN0LnBlb3BsZSwgXCIgcGVyc29uc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFByb2plY3RJdGVtLnByb3RvdHlwZS5kcmFnU3RhcnRIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgdGhpcy5wcm9qZWN0LmlkKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgfTtcbiAgICBQcm9qZWN0SXRlbS5wcm90b3R5cGUuZHJhZ0VuZEhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RyYWdFbmQnKTtcbiAgICB9O1xuICAgIFByb2plY3RJdGVtLnByb3RvdHlwZS5jb25maWd1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydEhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5kcmFnRW5kSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIFByb2plY3RJdGVtLnByb3RvdHlwZS5yZW5kZXJDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDInKS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC50aXRsZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJykudGV4dENvbnRlbnQgPSB0aGlzLnBlcnNvbnMgKyAnIGFzc2lnbmVkJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AnKS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBhdXRvYmluZF8xLmF1dG9iaW5kXG4gICAgXSwgUHJvamVjdEl0ZW0ucHJvdG90eXBlLCBcImRyYWdTdGFydEhhbmRsZXJcIiwgbnVsbCk7XG4gICAgcmV0dXJuIFByb2plY3RJdGVtO1xufShiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuUHJvamVjdEl0ZW0gPSBQcm9qZWN0SXRlbTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUHJvamVjdExpc3QgPSB2b2lkIDA7XG52YXIgcHJvamVjdF8xID0gcmVxdWlyZShcIi4uL21vZGVscy9wcm9qZWN0XCIpO1xudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYmFzZS1jb21wb25lbnRcIikpO1xudmFyIGF1dG9iaW5kXzEgPSByZXF1aXJlKFwiLi4vZGVjb3JhdG9ycy9hdXRvYmluZFwiKTtcbnZhciBwcm9qZWN0XzIgPSByZXF1aXJlKFwiLi4vc3RhdGUvcHJvamVjdFwiKTtcbnZhciBwcm9qZWN0X2l0ZW1fMSA9IHJlcXVpcmUoXCIuL3Byb2plY3QtaXRlbVwiKTtcbi8vUHJvamVjdExpc3RcbnZhciBQcm9qZWN0TGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUHJvamVjdExpc3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUHJvamVjdExpc3QodHlwZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAncHJvamVjdC1saXN0JywgJ2FwcCcsIGZhbHNlLCBcIlwiLmNvbmNhdCh0eXBlLCBcIi1wcm9qZWN0c1wiKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIF90aGlzLmFzc2lnbmVkUHJvamVjdHMgPSBbXTtcbiAgICAgICAgX3RoaXMuY29uZmlndXJlKCk7XG4gICAgICAgIF90aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBQcm9qZWN0TGlzdC5wcm90b3R5cGUuZHJhZ092ZXJIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIgJiYgZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdID09PSAndGV4dC9wbGFpbicpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgICAgICAgICBsaXN0RWwuY2xhc3NMaXN0LmFkZCgnZHJvcHBhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFByb2plY3RMaXN0LnByb3RvdHlwZS5kcm9wSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgcHJqSWQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgICAgICBwcm9qZWN0XzIucHJvamVjdFN0YXRlLm1vdmVQcm9qZWN0KHByaklkLCB0aGlzLnR5cGUgPT09ICdhY3RpdmUnID8gcHJvamVjdF8xLlByb2plY3RTdGF0dXMuQWN0aXZlIDogcHJvamVjdF8xLlByb2plY3RTdGF0dXMuZmluaXNoZWQpO1xuICAgIH07XG4gICAgUHJvamVjdExpc3QucHJvdG90eXBlLmRyYWdMZWF2ZUhhbmRsZXIgPSBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgICAgIGxpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wcGFibGUnKTtcbiAgICB9O1xuICAgIFByb2plY3RMaXN0LnByb3RvdHlwZS5jb25maWd1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuZHJhZ0xlYXZlSGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5kcm9wSGFuZGxlcik7XG4gICAgICAgIHByb2plY3RfMi5wcm9qZWN0U3RhdGUuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gICAgICAgICAgICB2YXIgcmVsZXZhbnRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihmdW5jdGlvbiAocHJqKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnR5cGUgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmouc3RhdHVzID09PSBwcm9qZWN0XzEuUHJvamVjdFN0YXR1cy5BY3RpdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcmouc3RhdHVzID09PSBwcm9qZWN0XzEuUHJvamVjdFN0YXR1cy5maW5pc2hlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXMuYXNzaWduZWRQcm9qZWN0cyA9IHJlbGV2YW50UHJvamVjdHM7XG4gICAgICAgICAgICBfdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gICAgfTtcbiAgICBQcm9qZWN0TGlzdC5wcm90b3R5cGUucmVuZGVyQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxpc3RJZCA9IFwiXCIuY29uY2F0KHRoaXMudHlwZSwgXCItcHJvamVjdHMtbGlzdFwiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuaWQgPSBsaXN0SWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMicpLnRleHRDb250ZW50ID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKCkgKyAnIFBST0pFQ1RTJztcbiAgICB9O1xuICAgIFByb2plY3RMaXN0LnByb3RvdHlwZS5yZW5kZXJQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiXCIuY29uY2F0KHRoaXMudHlwZSwgXCItcHJvamVjdHMtbGlzdFwiKSk7XG4gICAgICAgIGxpc3RFbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuYXNzaWduZWRQcm9qZWN0czsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBwcmpJdGVtID0gX2FbX2ldO1xuICAgICAgICAgICAgbmV3IHByb2plY3RfaXRlbV8xLlByb2plY3RJdGVtKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpLmlkLCBwcmpJdGVtKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGF1dG9iaW5kXzEuYXV0b2JpbmRcbiAgICBdLCBQcm9qZWN0TGlzdC5wcm90b3R5cGUsIFwiZHJhZ092ZXJIYW5kbGVyXCIsIG51bGwpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBhdXRvYmluZF8xLmF1dG9iaW5kXG4gICAgXSwgUHJvamVjdExpc3QucHJvdG90eXBlLCBcImRyb3BIYW5kbGVyXCIsIG51bGwpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBhdXRvYmluZF8xLmF1dG9iaW5kXG4gICAgXSwgUHJvamVjdExpc3QucHJvdG90eXBlLCBcImRyYWdMZWF2ZUhhbmRsZXJcIiwgbnVsbCk7XG4gICAgcmV0dXJuIFByb2plY3RMaXN0O1xufShiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuUHJvamVjdExpc3QgPSBQcm9qZWN0TGlzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hdXRvYmluZCA9IHZvaWQgMDtcbi8vIGF1dG9iaW5kIGRlY29yYXRvclxuZnVuY3Rpb24gYXV0b2JpbmQoXywgXzIsIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIHZhciBhZGpEZXNjcmlwdG9yID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJvdW5kRm4gPSBvcmlnaW5hbE1ldGhvZC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIGJvdW5kRm47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBhZGpEZXNjcmlwdG9yO1xufVxuZXhwb3J0cy5hdXRvYmluZCA9IGF1dG9iaW5kO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vL1Byb2plY3QgbW9kZWxzIG5hbWVzcGFjZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qcm9qZWN0ID0gZXhwb3J0cy5Qcm9qZWN0U3RhdHVzID0gdm9pZCAwO1xuLy9Qcm9qZWN0IGVudW1cbnZhciBQcm9qZWN0U3RhdHVzO1xuKGZ1bmN0aW9uIChQcm9qZWN0U3RhdHVzKSB7XG4gICAgUHJvamVjdFN0YXR1c1tQcm9qZWN0U3RhdHVzW1wiQWN0aXZlXCJdID0gMF0gPSBcIkFjdGl2ZVwiO1xuICAgIFByb2plY3RTdGF0dXNbUHJvamVjdFN0YXR1c1tcImZpbmlzaGVkXCJdID0gMV0gPSBcImZpbmlzaGVkXCI7XG59KShQcm9qZWN0U3RhdHVzID0gZXhwb3J0cy5Qcm9qZWN0U3RhdHVzIHx8IChleHBvcnRzLlByb2plY3RTdGF0dXMgPSB7fSkpO1xudmFyIFByb2plY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJvamVjdChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwZW9wbGUsIHN0YXR1cykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnBlb3BsZSA9IHBlb3BsZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuICAgIHJldHVybiBQcm9qZWN0O1xufSgpKTtcbmV4cG9ydHMuUHJvamVjdCA9IFByb2plY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnByb2plY3RTdGF0ZSA9IGV4cG9ydHMuUHJvamVjdFN0YXRlID0gdm9pZCAwO1xudmFyIHByb2plY3RfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcHJvamVjdFwiKTtcbi8vUHJvamVjdCBTdGF0ZSBNYW5hZ2VtZW50XG52YXIgU3RhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RhdGUoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgfVxuICAgIFN0YXRlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChsaXN0ZW5lckZuKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXJGbik7XG4gICAgfTtcbiAgICByZXR1cm4gU3RhdGU7XG59KCkpO1xudmFyIFByb2plY3RTdGF0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUHJvamVjdFN0YXRlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByb2plY3RTdGF0ZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucHJvamVjdHMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBQcm9qZWN0U3RhdGUuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFByb2plY3RTdGF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9O1xuICAgIFByb2plY3RTdGF0ZS5wcm90b3R5cGUuYWRkUHJvamVjdCA9IGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb24sIG51bU9mUGVvcGxlKSB7XG4gICAgICAgIHZhciBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3RfMS5Qcm9qZWN0KE1hdGgucmFuZG9tLnRvU3RyaW5nKCksIHRpdGxlLCBkZXNjcmlwdGlvbiwgbnVtT2ZQZW9wbGUsIHByb2plY3RfMS5Qcm9qZWN0U3RhdHVzLkFjdGl2ZSk7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMubGlzdGVuZXJzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyRm4gPSBfYVtfaV07XG4gICAgICAgICAgICBsaXN0ZW5lckZuKHRoaXMucHJvamVjdHMuc2xpY2UoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFByb2plY3RTdGF0ZS5wcm90b3R5cGUubW92ZVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdElkLCBuZXdTdGF0dXMpIHtcbiAgICAgICAgdmFyIHByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoZnVuY3Rpb24gKHByaikgeyByZXR1cm4gcHJqLmlkID09PSBwcm9qZWN0SWQ7IH0pO1xuICAgICAgICBpZiAocHJvamVjdCAmJiBwcm9qZWN0LnN0YXR1cyAhPT0gbmV3U3RhdHVzKSB7XG4gICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy90aGlzLnByb2plY3RzLmZpbmQocHJqID0+IHByailcbiAgICB9O1xuICAgIFByb2plY3RTdGF0ZS5wcm90b3R5cGUudXBkYXRlTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5saXN0ZW5lcnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJGbiA9IF9hW19pXTtcbiAgICAgICAgICAgIGxpc3RlbmVyRm4odGhpcy5wcm9qZWN0cy5zbGljZSgpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFByb2plY3RTdGF0ZTtcbn0oU3RhdGUpKTtcbmV4cG9ydHMuUHJvamVjdFN0YXRlID0gUHJvamVjdFN0YXRlO1xuZXhwb3J0cy5wcm9qZWN0U3RhdGUgPSBQcm9qZWN0U3RhdGUuZ2V0SW5zdGFuY2UoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy52YWxpZGF0ZSA9IHZvaWQgMDtcbmZ1bmN0aW9uIHZhbGlkYXRlKHZhbGlkYXRhYmxlSW5wdXQpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgaWYgKHZhbGlkYXRhYmxlSW5wdXQucmVxdWlyZWQpIHtcbiAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZS50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDA7XG4gICAgfVxuICAgIGlmICh2YWxpZGF0YWJsZUlucHV0Lm1pbkxlbmd0aCAhPSBudWxsICYmXG4gICAgICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpc1ZhbGlkID1cbiAgICAgICAgICAgIGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZS5sZW5ndGggPj0gdmFsaWRhdGFibGVJbnB1dC5taW5MZW5ndGg7XG4gICAgfVxuICAgIGlmICh2YWxpZGF0YWJsZUlucHV0Lm1heExlbmd0aCAhPSBudWxsICYmXG4gICAgICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpc1ZhbGlkID1cbiAgICAgICAgICAgIGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZS5sZW5ndGggPD0gdmFsaWRhdGFibGVJbnB1dC5tYXhMZW5ndGg7XG4gICAgfVxuICAgIGlmICh2YWxpZGF0YWJsZUlucHV0Lm1pbiAhPSBudWxsICYmXG4gICAgICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID49IHZhbGlkYXRhYmxlSW5wdXQubWluO1xuICAgIH1cbiAgICBpZiAodmFsaWRhdGFibGVJbnB1dC5tYXggIT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA8PSB2YWxpZGF0YWJsZUlucHV0Lm1heDtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG59XG5leHBvcnRzLnZhbGlkYXRlID0gdmFsaWRhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJvamVjdF9pbnB1dF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9wcm9qZWN0LWlucHV0XCIpO1xudmFyIHByb2plY3RfbGlzdF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9wcm9qZWN0LWxpc3RcIik7XG5uZXcgcHJvamVjdF9pbnB1dF8xLlByb2plY3RJbnB1dCgpO1xubmV3IHByb2plY3RfbGlzdF8xLlByb2plY3RMaXN0KCdhY3RpdmUnKTtcbm5ldyBwcm9qZWN0X2xpc3RfMS5Qcm9qZWN0TGlzdCgnZmluaXNoZWQnKTtcbi8qXG5sZXQgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWlucHV0Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXAuY29udGVudCk7XG5cbmxldCB0ZW1wMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaW5nbGUtcHJvamVjdCcpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wMS5jb250ZW50KTtcblxubGV0IHRlbXAyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbGlzdCcpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wMi5jb250ZW50KTtcblxubGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuXG5sZXQgZGF0YUFycmF5ID0gW107XG5cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuXG5lLnByZXZlbnREZWZhdWx0KCk7XG5cbmxldCBkYXRhID0ge1xudGl0bGU6IFN0cmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIiksXG5kZXNjcmlwdGlvbjogU3RyaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyksXG5wZW9wbGU6IE51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZW9wbGUnKVxufVxuXG5cblxuaWYgKGRhdGEudGl0bGUudmFsdWUgPT09ICcnIHx8IGRhdGEudGl0bGUgPT0gbnVsbCkge1xuYWxlcnQoJ1RpdGxlIHJlcXVpcmVkJyk7XG5yZXR1cm47XG5cbn1cbmlmIChkYXRhLmRlc2NyaXB0aW9uLnZhbHVlID09PSAnJyB8fCBkYXRhLmRlc2NyaXB0aW9uLnZhbHVlID09IG51bGwpIHtcbmFsZXJ0KCdEZXNjcmlwdGlvbiByZXF1aXJlZCcpO1xucmV0dXJuO1xuXG59XG5pZiAoZGF0YS5kZXNjcmlwdGlvbi52YWx1ZSA9PT0gMCB8fCBkYXRhLmRlc2NyaXB0aW9uLnZhbHVlID09IG51bGwpIHtcbmFsZXJ0KCdQZW9wbGVzIG51bWJlciByZXF1aXJlZCcpO1xucmV0dXJuO1xuXG59XG5lbHNlIHtcbmRhdGFBcnJheS5wdXNoKGRhdGEudGl0bGUudmFsdWUpO1xuZGF0YUFycmF5LnB1c2goZGF0YS5kZXNjcmlwdGlvbi52YWx1ZSk7XG5kYXRhQXJyYXkucHVzaChkYXRhLnBlb3BsZS52YWx1ZSk7XG5cbmRhdGFBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnQpO1xudmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xubGkuaW5uZXJIVE1MID0gZWxlbWVudDtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKS5hcHBlbmQobGkpO1xuXG59KTtcbmRhdGFBcnJheSA9IFtdO1xufVxuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5yZXNldCgpO1xuXG59KVxuKi8gXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=