"use strict";
//Project models namespace
exports.__esModule = true;
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
