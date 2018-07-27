(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "SITE DEV TEST CHAN\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active\"><a routerLink=\"users\">Utilisateurs</a></li>\r\n        <li routerLinkActive=\"active\"><a routerLink=\"tasks\">Taches</a></li>\r\n        <li routerLinkActive=\"active\"><a routerLink=\"editTask\">Nouvelle tâche</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./single-user/single-user.component */ "./src/app/single-user/single-user.component.ts");
/* harmony import */ var _single_task_single_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./single-task/single-task.component */ "./src/app/single-task/single-task.component.ts");
/* harmony import */ var _users_view_users_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users-view/users-view.component */ "./src/app/users-view/users-view.component.ts");
/* harmony import */ var _tasks_view_tasks_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tasks-view/tasks-view.component */ "./src/app/tasks-view/tasks-view.component.ts");
/* harmony import */ var _four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./four-oh-four/four-oh-four.component */ "./src/app/four-oh-four/four-oh-four.component.ts");
/* harmony import */ var _edit_task_component_edit_task_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-task-component/edit-task-component.component */ "./src/app/edit-task-component/edit-task-component.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/task.service */ "./src/app/services/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: 'users/:id', component: _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_8__["SingleUserComponent"] },
    { path: 'tasks/:id', component: _single_task_single_task_component__WEBPACK_IMPORTED_MODULE_9__["SingleTaskComponent"] },
    { path: 'users', component: _users_view_users_view_component__WEBPACK_IMPORTED_MODULE_10__["UsersViewComponent"] },
    { path: 'tasks', component: _tasks_view_tasks_view_component__WEBPACK_IMPORTED_MODULE_11__["TasksViewComponent"] },
    { path: 'editTask', component: _edit_task_component_edit_task_component_component__WEBPACK_IMPORTED_MODULE_13__["EditTaskComponentComponent"] },
    { path: '', component: _users_view_users_view_component__WEBPACK_IMPORTED_MODULE_10__["UsersViewComponent"] },
    { path: 'not-found', component: _four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_12__["FourOhFourComponent"] },
    { path: '**', redirectTo: 'not-found' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"],
                _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_8__["SingleUserComponent"],
                _single_task_single_task_component__WEBPACK_IMPORTED_MODULE_9__["SingleTaskComponent"],
                _users_view_users_view_component__WEBPACK_IMPORTED_MODULE_10__["UsersViewComponent"],
                _tasks_view_tasks_view_component__WEBPACK_IMPORTED_MODULE_11__["TasksViewComponent"],
                _four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_12__["FourOhFourComponent"],
                _edit_task_component_edit_task_component_component__WEBPACK_IMPORTED_MODULE_13__["EditTaskComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
                _services_task_service__WEBPACK_IMPORTED_MODULE_15__["TaskService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-task-component/edit-task-component.component.html":
/*!************************************************************************!*\
  !*** ./src/app/edit-task-component/edit-task-component.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-8 col-sm-offset-2\">\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"title\">\n            Titre\n          </label>\n          <input type=\"text\" id=\"title\" class=\"form-control\" name=\"title\" ngModel required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"userId\">\n            UserId\n          </label>\n          <input type=\"number\" id=\"userId\" class=\"form-control\" name=\"userId\" ngModel required>\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"f.invalid\">Enregistrer</button>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/edit-task-component/edit-task-component.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/edit-task-component/edit-task-component.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-task-component/edit-task-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/edit-task-component/edit-task-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditTaskComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponentComponent", function() { return EditTaskComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditTaskComponentComponent = /** @class */ (function () {
    function EditTaskComponentComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    EditTaskComponentComponent.prototype.ngOnInit = function () {
    };
    EditTaskComponentComponent.prototype.onSubmit = function (form) {
        var title = form.value['title'];
        var userId = form.value['userId'];
        this.taskService.addTask(title, userId);
        this.router.navigate(['/tasks']);
    };
    EditTaskComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-task-component',
            template: __webpack_require__(/*! ./edit-task-component.component.html */ "./src/app/edit-task-component/edit-task-component.component.html"),
            styles: [__webpack_require__(/*! ./edit-task-component.component.scss */ "./src/app/edit-task-component/edit-task-component.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditTaskComponentComponent);
    return EditTaskComponentComponent;
}());



/***/ }),

/***/ "./src/app/four-oh-four/four-oh-four.component.html":
/*!**********************************************************!*\
  !*** ./src/app/four-oh-four/four-oh-four.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Erreur 404</h2>\r\n<p>La page que vous cherchez n'existe pas !</p>\r\n"

/***/ }),

/***/ "./src/app/four-oh-four/four-oh-four.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/four-oh-four/four-oh-four.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/four-oh-four/four-oh-four.component.ts":
/*!********************************************************!*\
  !*** ./src/app/four-oh-four/four-oh-four.component.ts ***!
  \********************************************************/
/*! exports provided: FourOhFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourOhFourComponent", function() { return FourOhFourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FourOhFourComponent = /** @class */ (function () {
    function FourOhFourComponent() {
    }
    FourOhFourComponent.prototype.ngOnInit = function () {
    };
    FourOhFourComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-four-oh-four',
            template: __webpack_require__(/*! ./four-oh-four.component.html */ "./src/app/four-oh-four/four-oh-four.component.html"),
            styles: [__webpack_require__(/*! ./four-oh-four.component.scss */ "./src/app/four-oh-four/four-oh-four.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FourOhFourComponent);
    return FourOhFourComponent;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = "http://192.168.1.33:3000/";
var TaskService = /** @class */ (function () {
    function TaskService(httpClient) {
        this.httpClient = httpClient;
        this.tasksSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.taskSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.tasks = [];
        this.task = [];
    }
    TaskService.prototype.getTasks = function () {
        return this.tasks;
    };
    TaskService.prototype.getTaskById = function (id) {
        var _this = this;
        this.httpClient
            .get(apiUrl + 'tasks/' + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Access-Control-Allow-Origin', '*') })
            .subscribe(function (response) {
            _this.task.push(response["User"]);
            _this.task.push(response["UserId"]);
            _this.task.push(response["completed"]);
            _this.task.push(response["id"]);
            _this.task.push(response["title"]);
            _this.emitTaskSubject();
        }, function (error) {
            console.log('Erreur ! : ' + error);
        });
    };
    TaskService.prototype.deleteTask = function (id) {
        var _this = this;
        this.httpClient
            .delete(apiUrl + 'tasks/' + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Access-Control-Allow-Origin', '*') })
            .subscribe(function (response) {
            console.log(response);
            _this.getTasksFromServer();
        }, function (error) {
            console.log('Erreur ! : ' + error);
        });
    };
    TaskService.prototype.modifyTask = function (id, title, userId, completed) {
        var _this = this;
        var taskObject = {
            title: title,
            completed: completed,
            UserId: userId
        };
        this.httpClient
            .post(apiUrl + 'tasks/' + id, taskObject, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Access-Control-Allow-Origin', '*') })
            .subscribe(function (response) {
            console.log(response);
            _this.getTasksFromServer();
        }, function (error) {
            console.log('Erreur ! : ' + error);
        });
    };
    TaskService.prototype.emitTasksSubject = function () {
        this.tasksSubject.next(this.tasks.slice());
    };
    TaskService.prototype.emitTaskSubject = function () {
        this.taskSubject.next(this.task.slice());
    };
    TaskService.prototype.addTask = function (title, userId) {
        var _this = this;
        var taskObject = {
            title: title,
            completed: false,
            UserId: userId
        };
        this.httpClient
            .put(apiUrl + userId + '/tasks', taskObject, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Access-Control-Allow-Origin', '*') })
            .subscribe(function (response) {
            console.log(response);
            _this.tasks = response;
            _this.emitTasksSubject();
        }, function (error) {
            console.log('Erreur ! : ' + error);
        });
    };
    TaskService.prototype.getTasksFromServer = function () {
        var _this = this;
        this.httpClient
            .get(apiUrl + 'tasks', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Access-Control-Allow-Origin', '*') })
            .subscribe(function (response) {
            console.log(response);
            _this.tasks = response;
            _this.emitTasksSubject();
        }, function (error) {
            console.log('Erreur ! : ' + error);
        });
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = "http://192.168.1.33:3000/";
var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.usersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.users = [
            {
                id: 1,
                name: 'MOREAU Jérémy'
            },
            {
                id: 2,
                name: 'MOREAU Myriam'
            },
            {
                id: 3,
                name: 'MOREAU Frederic'
            },
            {
                id: 4,
                name: 'MOREAU Nelly'
            }
        ];
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService.prototype.getUserById = function (id) {
        var user = this.users.find(function (s) {
            return s.id === id;
        });
        if (user === undefined)
            return false;
        return user;
    };
    UserService.prototype.emitUsersSubject = function () {
        this.usersSubject.next(this.users.slice());
    };
    UserService.prototype.addUser = function (name) {
        var userObject = {
            id: 0,
            name: ''
        };
        userObject.name = name;
        userObject.id = this.users[(this.users.length - 1)].id + 1;
        this.users.push(userObject);
        this.emitUsersSubject();
    };
    UserService.prototype.getUsersFromServer = function () {
        var _this = this;
        this.httpClient
            .get(apiUrl, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Access-Control-Allow-Origin', '*') })
            .subscribe(function (response) {
            console.log(response);
            _this.users = response;
            _this.emitUsersSubject();
        }, function (error) {
            console.log('Erreur ! : ' + error);
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/single-task/single-task.component.html":
/*!********************************************************!*\
  !*** ./src/app/single-task/single-task.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\"{{ title }}\" wich is {{ completed }} for {{ userId }}</h2>\n<a routerLink=\"/tasks\">Retour à la liste</a>"

/***/ }),

/***/ "./src/app/single-task/single-task.component.scss":
/*!********************************************************!*\
  !*** ./src/app/single-task/single-task.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/single-task/single-task.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-task/single-task.component.ts ***!
  \******************************************************/
/*! exports provided: SingleTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTaskComponent", function() { return SingleTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleTaskComponent = /** @class */ (function () {
    function SingleTaskComponent(taskService, route) {
        this.taskService = taskService;
        this.route = route;
        this.title = 'Titre';
        this.completed = false;
        this.userId = 0;
    }
    SingleTaskComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.getTask(id);
    };
    SingleTaskComponent.prototype.getTask = function (id) {
        var _this = this;
        this.taskService.getTaskById(+id);
        this.taskSubscription = this.taskService.taskSubject.subscribe(function (task) {
            console.log(task);
            _this.title = task[4];
            _this.completed = task[2];
            _this.userId = task[1];
        });
        this.taskService.emitTaskSubject();
    };
    SingleTaskComponent.prototype.ngOnDestroy = function () {
        this.taskSubscription.unsubscribe();
    };
    SingleTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-task',
            template: __webpack_require__(/*! ./single-task.component.html */ "./src/app/single-task/single-task.component.html"),
            styles: [__webpack_require__(/*! ./single-task.component.scss */ "./src/app/single-task/single-task.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SingleTaskComponent);
    return SingleTaskComponent;
}());



/***/ }),

/***/ "./src/app/single-user/single-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/single-user/single-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ name }}</h2>\r\n<a routerLink=\"/users\">Retour à la liste</a>"

/***/ }),

/***/ "./src/app/single-user/single-user.component.scss":
/*!********************************************************!*\
  !*** ./src/app/single-user/single-user.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/single-user/single-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-user/single-user.component.ts ***!
  \******************************************************/
/*! exports provided: SingleUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleUserComponent", function() { return SingleUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleUserComponent = /** @class */ (function () {
    function SingleUserComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.name = 'NOM Prénom';
    }
    SingleUserComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        var user = this.userService.getUserById(+id);
        if (typeof user !== "boolean") {
            this.name = user.name;
        }
    };
    SingleUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-user',
            template: __webpack_require__(/*! ./single-user.component.html */ "./src/app/single-user/single-user.component.html"),
            styles: [__webpack_require__(/*! ./single-user.component.scss */ "./src/app/single-user/single-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SingleUserComponent);
    return SingleUserComponent;
}());



/***/ }),

/***/ "./src/app/tasks-view/tasks-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/tasks-view/tasks-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n    <h2>Taches</h2>\n    <ul class=\"list-group\">\n      <app-tasks  *ngFor=\"let task of tasks\"\n                      [title]=\"task.title\" [completed]=\"task.completed\" [UserId]=\"task.UserId\" [id]=\"task.id\"></app-tasks>\n      \n    </ul>\n  </div>"

/***/ }),

/***/ "./src/app/tasks-view/tasks-view.component.scss":
/*!******************************************************!*\
  !*** ./src/app/tasks-view/tasks-view.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tasks-view/tasks-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tasks-view/tasks-view.component.ts ***!
  \****************************************************/
/*! exports provided: TasksViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksViewComponent", function() { return TasksViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksViewComponent = /** @class */ (function () {
    function TasksViewComponent(tasksService) {
        this.tasksService = tasksService;
    }
    TasksViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tasksService.getTasksFromServer();
        this.tasksSubscription = this.tasksService.tasksSubject.subscribe(function (tasks) {
            _this.tasks = tasks;
        });
        this.tasksService.emitTasksSubject();
    };
    TasksViewComponent.prototype.ngOnDestroy = function () {
        this.tasksSubscription.unsubscribe();
    };
    TasksViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks-view',
            template: __webpack_require__(/*! ./tasks-view.component.html */ "./src/app/tasks-view/tasks-view.component.html"),
            styles: [__webpack_require__(/*! ./tasks-view.component.scss */ "./src/app/tasks-view/tasks-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
    ], TasksViewComponent);
    return TasksViewComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"list-group-item\">\n    <div style=\"width:20px;height:20px;background-color:red;\" \n      *ngIf=\"completed === false\"></div>\n    <div style=\"width:20px;height:20px;background-color:green;\" \n      *ngIf=\"completed === true\"></div>\n    <h4>Titre</h4>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" >\n    <h4>Completer?</h4>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"completed\" >\n    <h4>UserId</h4>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"UserId\" >\n    <br/>\n    <button class=\"btn btn-success\" (click)=\"onClickModify()\">Modifier</button>\n    <button class=\"btn btn-danger\" (click)=\"onClickDelete()\">Supprimer</button>\n  </li>\n  <br/>"

/***/ }),

/***/ "./src/app/tasks/tasks.component.scss":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksComponent = /** @class */ (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent.prototype.onClickModify = function () {
        console.log(this.id);
        this.taskService.modifyTask(this.id, this.title, this.UserId, this.completed);
    };
    TasksComponent.prototype.onClickDelete = function () {
        console.log(this.id);
        this.taskService.deleteTask(this.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TasksComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TasksComponent.prototype, "completed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TasksComponent.prototype, "UserId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TasksComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TasksComponent.prototype, "id", void 0);
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.scss */ "./src/app/tasks/tasks.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/users-view/users-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/users-view/users-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\r\n    <h2>Utilisateurs</h2>\r\n    <ul class=\"list-group\">\r\n      <app-users  *ngFor=\"let user of users\"\r\n                      [lastName]=\"user.lastname\" [userName]=\"user.username\" [age]=\"user.age\"></app-users>\r\n      \r\n    </ul>\r\n  </div>"

/***/ }),

/***/ "./src/app/users-view/users-view.component.scss":
/*!******************************************************!*\
  !*** ./src/app/users-view/users-view.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users-view/users-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users-view/users-view.component.ts ***!
  \****************************************************/
/*! exports provided: UsersViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersViewComponent", function() { return UsersViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersViewComponent = /** @class */ (function () {
    function UsersViewComponent(userService) {
        this.userService = userService;
    }
    UsersViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsersFromServer();
        this.usersSubscription = this.userService.usersSubject.subscribe(function (users) {
            _this.users = users;
        });
        this.userService.emitUsersSubject();
    };
    UsersViewComponent.prototype.ngOnDestroy = function () {
        this.usersSubscription.unsubscribe();
    };
    UsersViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-view',
            template: __webpack_require__(/*! ./users-view.component.html */ "./src/app/users-view/users-view.component.html"),
            styles: [__webpack_require__(/*! ./users-view.component.scss */ "./src/app/users-view/users-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UsersViewComponent);
    return UsersViewComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"list-group-item\">\r\n    <h4>Nom</h4>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastName\">\r\n    <h4>Prénom</h4>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userName\">\r\n    <h4>Age</h4>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"age\">\r\n  \r\n  </li>\r\n  <br/>"

/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UsersComponent.prototype, "userName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UsersComponent.prototype, "lastName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UsersComponent.prototype, "age", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UsersComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UsersComponent.prototype, "id", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/mimir02/AppliNodeDevOps/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map