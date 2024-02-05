import {
  ActivatedRoute,
  AsyncPipe,
  CanActivateGuardService,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  HttpClient,
  LoginService,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgSelectOption,
  Project,
  ProjectsService,
  Router,
  RouterLink,
  RouterModule,
  SelectControlValueAccessor,
  SharedModule,
  TaskPrioritiesService,
  TaskStatus,
  TaskStatusesService,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-XJFYB6OA.js";

// src/app/services/tasks.service.ts
var TasksService = /* @__PURE__ */ (() => {
  const _TasksService = class _TasksService {
    constructor(httpClient) {
      this.httpClient = httpClient;
    }
    getTasks() {
      return this.httpClient.get("/api/tasks", {
        responseType: "json"
      });
    }
    getTaskByTaskID(TaskID) {
      return this.httpClient.get("/api/tasks/searchbytaskid/" + TaskID, {
        responseType: "json"
      });
    }
    updateTaskStatus(taskStatusDetail) {
      var user = sessionStorage.getItem("currentuser") ? JSON.parse(sessionStorage.getItem("currentuser")) : null;
      taskStatusDetail.userID = user.id;
      return this.httpClient.put("/api/updatetaskstatus", taskStatusDetail, {
        responseType: "json"
      });
    }
    insertTask(newTask) {
      var user = sessionStorage.getItem("currentuser") ? JSON.parse(sessionStorage.getItem("currentuser")) : null;
      newTask.createdBy = user.id;
      return this.httpClient.post("/api/createtask", newTask, {
        responseType: "json"
      });
    }
  };
  _TasksService.\u0275fac = function TasksService_Factory(t) {
    return new (t || _TasksService)(\u0275\u0275inject(HttpClient));
  };
  _TasksService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TasksService,
    factory: _TasksService.\u0275fac,
    providedIn: "root"
  });
  let TasksService2 = _TasksService;
  return TasksService2;
})();

// src/app/employee/components/create-task/create-task.component.ts
function CreateTaskComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Task Name can't be blank");
    \u0275\u0275elementEnd();
  }
}
function CreateTaskComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r7 = ctx.$implicit;
    \u0275\u0275property("value", project_r7.projectID);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", project_r7.projectName, " ");
  }
}
function CreateTaskComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Please select project, to which the task belongs to.");
    \u0275\u0275elementEnd();
  }
}
function CreateTaskComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r8 = ctx.$implicit;
    \u0275\u0275property("value", employee_r8.id);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", employee_r8.userName, " ");
  }
}
function CreateTaskComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Select the employee, to whom the task id assigned.");
    \u0275\u0275elementEnd();
  }
}
function CreateTaskComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const taskPriority_r9 = ctx.$implicit;
    \u0275\u0275property("value", taskPriority_r9.taskPriorityID);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", taskPriority_r9.taskPriorityName, " ");
  }
}
function CreateTaskComponent_span_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Select the employee, to whom the task id assigned.");
    \u0275\u0275elementEnd();
  }
}
var _c0 = () => ["/employee", "tasks"];
var CreateTaskComponent = /* @__PURE__ */ (() => {
  const _CreateTaskComponent = class _CreateTaskComponent {
    constructor(tasksService, router, projectsService, taskPrioritiesService, loginService) {
      this.tasksService = tasksService;
      this.router = router;
      this.projectsService = projectsService;
      this.taskPrioritiesService = taskPrioritiesService;
      this.loginService = loginService;
      this.newTaskFormSubmitted = false;
    }
    ngOnInit() {
      this.newTaskForm = new FormGroup({
        taskID: new FormControl(0),
        taskName: new FormControl(null, [Validators.required]),
        description: new FormControl(null, []),
        projectID: new FormControl(null, [Validators.required]),
        assignedTo: new FormControl(null, [Validators.required]),
        taskPriorityID: new FormControl(2, [Validators.required])
      });
      this.projects = this.projectsService.getAllProjects();
      this.employees = this.loginService.getAllEmployes();
      this.taskPriorities = this.taskPrioritiesService.getTaskPriorities();
    }
    onCreateTaskClick(event) {
      this.newTaskFormSubmitted = true;
      if (this.newTaskForm.valid) {
        this.tasksService.insertTask(this.newTaskForm.value).subscribe({
          next: () => {
            this.router.navigate(["/employee", "tasks"]);
          },
          error: (err) => {
            console.log(err);
          }
        });
      } else {
        console.log(this.newTaskForm.errors);
      }
    }
  };
  _CreateTaskComponent.\u0275fac = function CreateTaskComponent_Factory(t) {
    return new (t || _CreateTaskComponent)(\u0275\u0275directiveInject(TasksService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ProjectsService), \u0275\u0275directiveInject(TaskPrioritiesService), \u0275\u0275directiveInject(LoginService));
  };
  _CreateTaskComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CreateTaskComponent,
    selectors: [["app-create-task"]],
    decls: 58,
    vars: 16,
    consts: [["novalidate", "novalidate", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "taskName", 1, "text-infor", 2, "font-size", "18px"], ["type", "text", "id", "taskName", "placeholder", "Task Name", "autofocus", "autofocus", "formControlName", "taskName", 1, "form-control", 2, "font-size", "20px"], ["class", "text-danger", 4, "ngIf"], ["for", "description", 1, "text-info"], ["id", "description", "placeholder", "Description", "formControlName", "description", 1, "form-control"], [1, "col-lg-6"], [1, "form-group", "form-row"], ["for", "projectID", 1, "text-info", "col-md-3", "col-form-label"], [1, "col-md-9"], ["id", "projectID", "formControlName", "projectID", 1, "form-control"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "assignedTo", 1, "text-info", "col-md-3", "col-form-label"], ["id", "assignedTo", "formControlName", "assignedTo", 1, "form-control"], ["for", "taskPriorityID", 1, "text-info", "col-md-3", "col-form-label"], ["id", "taskPriorityID", "formControlName", "taskPriorityID", 1, "form-control"], ["for", "taskStatus", 1, "text-info", "col-md-3", "col-form-label"], ["type", "text", "id", "taskStatus", "placeholder", "Task Status", "value", "Holding", "readonly", "readonly", 1, "form-control-plaintext"], [1, "col-lg-12", "border-top", "text-center"], [1, "btn", "btn-success", "btn-lg", "mt-2", 3, "click"], [1, "btn", "btn-info", "btn-sm", "mt-1", 3, "routerLink"], [1, "text-danger"], [3, "value"]],
    template: function CreateTaskComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Create Task");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form", 0)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "label", 4);
        \u0275\u0275text(7, "Task Name:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "input", 5);
        \u0275\u0275template(9, CreateTaskComponent_span_9_Template, 2, 0, "span", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 2)(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Description:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "textarea", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "label", 11);
        \u0275\u0275text(18, "Project:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 12)(20, "select", 13)(21, "option", 14);
        \u0275\u0275text(22, "Please Select");
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, CreateTaskComponent_option_23_Template, 2, 2, "option", 15);
        \u0275\u0275pipe(24, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, CreateTaskComponent_span_25_Template, 2, 0, "span", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 10)(27, "label", 16);
        \u0275\u0275text(28, "Assigned To:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 12)(30, "select", 17)(31, "option", 14);
        \u0275\u0275text(32, "Please Select");
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, CreateTaskComponent_option_33_Template, 2, 2, "option", 15);
        \u0275\u0275pipe(34, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, CreateTaskComponent_span_35_Template, 2, 0, "span", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 9)(37, "div", 10)(38, "label", 18);
        \u0275\u0275text(39, "Priority:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 12)(41, "select", 19)(42, "option", 14);
        \u0275\u0275text(43, "Please Select");
        \u0275\u0275elementEnd();
        \u0275\u0275template(44, CreateTaskComponent_option_44_Template, 2, 2, "option", 15);
        \u0275\u0275pipe(45, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(46, CreateTaskComponent_span_46_Template, 2, 0, "span", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 10)(48, "label", 20);
        \u0275\u0275text(49, "Status:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 12);
        \u0275\u0275element(51, "input", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "div", 22)(53, "div")(54, "button", 23);
        \u0275\u0275listener("click", function CreateTaskComponent_Template_button_click_54_listener($event) {
          return ctx.onCreateTaskClick($event);
        });
        \u0275\u0275text(55, " Create Task ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "a", 24);
        \u0275\u0275text(57, "Back to Tasks");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_3_0;
        let tmp_5_0;
        let tmp_7_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.newTaskForm);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.newTaskForm.get("taskName")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.newTaskForm.get("taskName")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.newTaskForm.get("taskName")) == null ? null : tmp_1_0.touched) || ctx.newTaskFormSubmitted) && ((tmp_1_0 = ctx.newTaskForm.get("taskName")) == null ? null : tmp_1_0.errors["required"]));
        \u0275\u0275advance(14);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(24, 9, ctx.projects));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_3_0.touched) || ctx.newTaskFormSubmitted) && ((tmp_3_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_3_0.errors["required"]));
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(34, 11, ctx.employees));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_5_0.touched) || ctx.newTaskFormSubmitted) && ((tmp_5_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_5_0.errors["required"]));
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(45, 13, ctx.taskPriorities));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_7_0.invalid) && (((tmp_7_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_7_0.dirty) || ((tmp_7_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_7_0.touched) || ctx.newTaskForm.get("taskPriorityID")) && ((tmp_7_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_7_0.errors["required"]));
        \u0275\u0275advance(10);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c0));
      }
    },
    dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, AsyncPipe],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let CreateTaskComponent2 = _CreateTaskComponent;
  return CreateTaskComponent2;
})();

// src/app/employee/components/edit-task/edit-task.component.ts
var EditTaskComponent = /* @__PURE__ */ (() => {
  const _EditTaskComponent = class _EditTaskComponent {
  };
  _EditTaskComponent.\u0275fac = function EditTaskComponent_Factory(t) {
    return new (t || _EditTaskComponent)();
  };
  _EditTaskComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _EditTaskComponent,
    selectors: [["app-edit-task"]],
    decls: 2,
    vars: 0,
    template: function EditTaskComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "edit-task works!");
        \u0275\u0275elementEnd();
      }
    },
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let EditTaskComponent2 = _EditTaskComponent;
  return EditTaskComponent2;
})();

// src/app/employee/components/tasks/tasks.component.ts
function TasksComponent_div_5_div_9_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "i", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "i", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const taskStatusDetail_r7 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", taskStatusDetail_r7 == null ? null : taskStatusDetail_r7.statusUpdationDateTimeString, " ");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngClass", ctx_r5.getTaskGroupTextCssClass(taskStatusDetail_r7 == null ? null : taskStatusDetail_r7.taskStatus == null ? null : taskStatusDetail_r7.taskStatus.taskStatusName));
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", taskStatusDetail_r7 == null ? null : taskStatusDetail_r7.taskStatus == null ? null : taskStatusDetail_r7.taskStatus.taskStatusName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", taskStatusDetail_r7 == null ? null : taskStatusDetail_r7.user == null ? null : taskStatusDetail_r7.user.userName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", taskStatusDetail_r7 == null ? null : taskStatusDetail_r7.description, " ");
  }
}
var _c02 = (a2) => ["/employee", "edittask", a2];
function TasksComponent_div_5_div_9_a_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2, " Edit ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c02, task_r3.taskID));
  }
}
var _c1 = (a2) => ["/employee", "updatetaskstatus", a2];
function TasksComponent_div_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "table", 13)(10, "tr")(11, "td");
    \u0275\u0275text(12, "Created:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275element(14, "i", 14);
    \u0275\u0275text(15);
    \u0275\u0275element(16, "i", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tr")(19, "td");
    \u0275\u0275text(20, "Assigned to:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275element(22, "i", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "tr")(25, "td");
    \u0275\u0275text(26, "Project:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275element(28, "i", 17);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "table", 18)(31, "thead", 19)(32, "th");
    \u0275\u0275text(33, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "tbody");
    \u0275\u0275template(41, TasksComponent_div_5_div_9_tr_41_Template, 11, 5, "tr", 20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 21)(43, "div", 22)(44, "a", 23);
    \u0275\u0275element(45, "i", 24);
    \u0275\u0275text(46, " Change Status ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, TasksComponent_div_5_div_9_a_47_Template, 3, 3, "a", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" #", i_r4 + 1, " \xA0\xA0 ", task_r3.taskName, " ");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngClass", ctx_r2.getTaskPriorityBadgeCssClass(task_r3 == null ? null : task_r3.taskPriority == null ? null : task_r3.taskPriority.taskPriorityName));
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", task_r3.taskPriority == null ? null : task_r3.taskPriority.taskPriorityName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r3.description);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", task_r3.createdByUser == null ? null : task_r3.createdByUser.userName, " \xA0\xA0\xA0 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", task_r3.createdOnString, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", task_r3.assignedToUser == null ? null : task_r3.assignedToUser.userName, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", task_r3 == null ? null : task_r3.project == null ? null : task_r3.project.projectName, " - ", task_r3 == null ? null : task_r3.project == null ? null : task_r3.project.clientLocation == null ? null : task_r3.project.clientLocation.clientLocationName, " ");
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", task_r3.taskStatusDetails);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c1, task_r3.taskID));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (task_r3.createdByUser == null ? null : task_r3.createdByUser.userName) == ctx_r2.loginService.currentUserName);
  }
}
function TasksComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275template(9, TasksComponent_div_5_div_9_Template, 48, 15, "div", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const taskGroup_r1 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getTaskGroupBgCssClass(taskGroup_r1.taskStatusName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", taskGroup_r1.taskStatusName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", taskGroup_r1.tasks.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", taskGroup_r1.tasks);
  }
}
var _c2 = () => ["/employee", "createtask"];
var TasksComponent = /* @__PURE__ */ (() => {
  const _TasksComponent = class _TasksComponent {
    constructor(tasksService, loginService) {
      this.tasksService = tasksService;
      this.loginService = loginService;
      this.taskGroups = [];
    }
    ngOnInit() {
      this.tasksService.getTasks().subscribe((response) => {
        this.taskGroups = response;
      });
    }
    getTaskGroupBgCssClass(taskStatusName) {
      var className = "";
      switch (taskStatusName) {
        case "Holding":
          className = "bg-secondary text-white";
          break;
        case "Prioritized":
          className = "bg-primary text-white";
          break;
        case "Started":
          className = "bg-info text-white";
          break;
        case "Finished":
          className = "bg-success text-white";
          break;
        case "Reverted":
          className = "bg-danger text-white";
          break;
      }
      return className;
    }
    /* Get background color based on task priority */
    getTaskPriorityBadgeCssClass(taskPriorityName) {
      var className = "";
      switch (taskPriorityName) {
        case "Urgent":
          className = "badge-danger";
          break;
        case "Normal":
          className = "badge-primary";
          break;
        case "Below Normal":
          className = "badge-info";
          break;
        case "Low":
          className = "badge-secondary";
          break;
      }
      return className;
    }
    /* Get text color based on task status */
    getTaskGroupTextCssClass(taskStatusName) {
      var className = "";
      switch (taskStatusName) {
        case "Holding":
          className = "text-secondary";
          break;
        case "Prioritized":
          className = "text-primary";
          break;
        case "Started":
          className = "text-info";
          break;
        case "Finished":
          className = "text-success";
          break;
        case "Reverted":
          className = "text-danger";
          break;
      }
      return className;
    }
  };
  _TasksComponent.\u0275fac = function TasksComponent_Factory(t) {
    return new (t || _TasksComponent)(\u0275\u0275directiveInject(TasksService), \u0275\u0275directiveInject(LoginService));
  };
  _TasksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TasksComponent,
    selectors: [["app-tasks"]],
    decls: 6,
    vars: 3,
    consts: [[1, "btn", "btn-primary", 3, "routerLink"], [1, "row", "mt-1", "mb-2"], ["class", "col-lg-6 mb-1", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "mb-1"], [1, "card", "card-primary"], [1, "card-header", 3, "ngClass"], [1, "card-title"], [1, "badge", "badge-warning", "float-right"], [1, "card-body"], ["class", "card mb-1", 4, "ngFor", "ngForOf"], [1, "card", "mb-1"], [1, "card-header"], [1, "badge", "float-right", "mr-1", "text-primary", 2, "font-size", "15px", 3, "ngClass"], [1, "table", "table-sm", "table-borderless"], [1, "fa", "fa-user"], [1, "fa", "fa-calendar"], [1, "fa", "fa-user-o"], [1, "fa", "fa-briefcase"], [1, "table", "table-sm", "table-bordered"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "routerLink"], [1, "fa", "fa-pencil"], ["class", "btn btn-sm btn-outline-secondary", 3, "routerLink", 4, "ngIf"], [1, "text-primary", 3, "ngClass"], [1, "fa", "fa-pencil-square-o"]],
    template: function TasksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "a", 0);
        \u0275\u0275text(3, "Create Task");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 1);
        \u0275\u0275template(5, TasksComponent_div_5_Template, 10, 4, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c2));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.taskGroups);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, RouterLink],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let TasksComponent2 = _TasksComponent;
  return TasksComponent2;
})();

// src/app/models/task.model.ts
var Task = class {
  constructor() {
    this.project = new Project();
    this.taskID = null;
    this.taskName = null;
    this.description = null;
    this.createdOn = null;
    this.projectID = null;
    this.createdBy = null;
    this.assignedTo = null;
    this.taskPriorityID = null;
    this.lastUpdatedOn = null;
    this.currentStatus = null;
    this.project = new Project();
    this.createdByUser = null;
    this.assignedToUser = null;
    this.taskStatusDetails = null;
    this.taskStatusDetails = null;
    this.currentTaskStatusID = null;
  }
};

// src/app/models/task-status-detail.model.ts
var TaskStatusDetail = class {
  constructor() {
    this.taskstatus = new TaskStatus();
    this.taskStatusDetailID = null;
    this.taskID = null;
    this.taskStatusID = null;
    this.description = null;
    this.userID = null;
    this.taskstatus = new TaskStatus();
    this.user = null;
    this.statsUpdationDateTimeString = null;
  }
};

// src/app/employee/components/update-task-status/update-task-status.component.ts
function UpdateTaskStatusComponent_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const taskStatus_r2 = ctx.$implicit;
    \u0275\u0275property("value", taskStatus_r2.taskStatusID);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", taskStatus_r2.taskStatusName, " ");
  }
}
function UpdateTaskStatusComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, " Please select current task status ");
    \u0275\u0275elementEnd();
  }
}
var _c03 = () => ["/employee", "tasks"];
var UpdateTaskStatusComponent = /* @__PURE__ */ (() => {
  const _UpdateTaskStatusComponent = class _UpdateTaskStatusComponent {
    constructor(tasksService, router, taskStatuesService, activatedRoute) {
      this.tasksService = tasksService;
      this.router = router;
      this.taskStatuesService = taskStatuesService;
      this.activatedRoute = activatedRoute;
      this.taskID = 0;
      this.currentTask = new Task();
      this.currentTaskStatusDetail = new TaskStatusDetail();
      this.editTaskStatusFormSubmitted = false;
    }
    ngOnInit() {
      this.activatedRoute.params.subscribe((params) => {
        this.taskID = params["taskid"];
      });
      this.editTaskStatusForm = new FormGroup({
        thisStatusDetailID: new FormControl(0),
        taskID: new FormControl(null),
        taskStatusID: new FormControl(null, [Validators.required]),
        description: new FormControl(null)
      });
      this.taskStatuses = this.taskStatuesService.getTaskStatuses();
      this.tasksService.getTaskByTaskID(this.taskID).subscribe((task) => {
        this.currentTask = task;
        this.currentTaskStatusDetail.taskID = this.taskID;
        this.currentTaskStatusDetail.description = null;
        this.currentTaskStatusDetail.taskStatusID = task.currentTaskStatusID;
        this.currentTaskStatusDetail.taskStatusDetailID = 0;
        console.log(this.currentTaskStatusDetail);
        this.editTaskStatusForm.patchValue(this.currentTaskStatusDetail);
      });
    }
    onUpdateTaskStatusClick(event) {
      this.editTaskStatusFormSubmitted = true;
      if (this.editTaskStatusForm.valid) {
        this.tasksService.updateTaskStatus(this.editTaskStatusForm.value).subscribe({
          next: (response) => {
            this.router.navigate(["/employee", "tasks"]);
          },
          error: (err) => {
            console.log(err);
          }
        });
      } else {
        console.log(this.editTaskStatusForm.errors);
      }
    }
  };
  _UpdateTaskStatusComponent.\u0275fac = function UpdateTaskStatusComponent_Factory(t) {
    return new (t || _UpdateTaskStatusComponent)(\u0275\u0275directiveInject(TasksService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TaskStatusesService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  _UpdateTaskStatusComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _UpdateTaskStatusComponent,
    selectors: [["app-update-task-status"]],
    decls: 42,
    vars: 10,
    consts: [["novalidate", "novalidate", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "table", "table-sm", "table-borderless"], [2, "width", "65px"], [1, "fa", "fa-user"], [1, "fa", "fa-calendar"], [1, "text-right"], [1, "fa", "fa-calendar-check-o"], [1, "col-lg-12"], [1, "form-group"], ["for", "description", 1, "text-info"], ["id", "description", "placeholder", "Description", "formControlName", "description", 1, "form-control"], [1, "col-lg-6"], [1, "form-group", "form-row"], ["for", "taskStatusID", 1, "text-info", "col-md-3", "col-form-label"], [1, "col-md-9"], ["id", "taskStatusID", "formControlName", "taskStatusID", 1, "form-control"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [1, "col-lg-12", "border-top", "text-center"], [1, "btn", "btn-success", "btn-lg", "mt-2", 3, "click"], [1, "btn", "btn-info", "btn-sm", "mt-1", 3, "routerLink"], [3, "value"], [1, "text-danger"]],
    template: function UpdateTaskStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Update Task Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "form", 0)(3, "div", 1)(4, "div", 2)(5, "table", 3)(6, "tr")(7, "td", 4);
        \u0275\u0275text(8, "Created:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "td");
        \u0275\u0275element(10, "i", 5);
        \u0275\u0275text(11);
        \u0275\u0275element(12, "i", 6);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "td", 7);
        \u0275\u0275text(15, "Last Updated on:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "td");
        \u0275\u0275element(17, "i", 8);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(19, "div", 9)(20, "div", 10)(21, "label", 11);
        \u0275\u0275text(22, "Description:");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "textarea", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 13)(25, "div", 14)(26, "label", 15);
        \u0275\u0275text(27, "Status:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 16)(29, "select", 17)(30, "option", 18);
        \u0275\u0275text(31, "Please Select");
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, UpdateTaskStatusComponent_option_32_Template, 2, 2, "option", 19);
        \u0275\u0275pipe(33, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, UpdateTaskStatusComponent_span_34_Template, 2, 0, "span", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 21)(36, "div")(37, "button", 22);
        \u0275\u0275listener("click", function UpdateTaskStatusComponent_Template_button_click_37_listener($event) {
          return ctx.onUpdateTaskStatusClick($event);
        });
        \u0275\u0275text(38, " Update Task Status ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div")(40, "a", 23);
        \u0275\u0275text(41, "Back to Tasks");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_5_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.editTaskStatusForm);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", ctx.currentTask.createdByUser == null ? null : ctx.currentTask.createdByUser.userName, " \xA0\xA0\xA0 ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.currentTask.createdOnString, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.currentTask.lastUpdatedOnString, " ");
        \u0275\u0275advance(14);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(33, 7, ctx.taskStatuses));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_5_0.touched) || ctx.editTaskStatusFormSubmitted) && ((tmp_5_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_5_0.errors["required"]));
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c03));
      }
    },
    dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, AsyncPipe],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let UpdateTaskStatusComponent2 = _UpdateTaskStatusComponent;
  return UpdateTaskStatusComponent2;
})();

// src/app/employee/employee-routing/employee-routing.module.ts
var routes = [{
  path: "",
  canActivate: [CanActivateGuardService],
  data: {
    expectedRole: "Employee"
  },
  children: [{
    path: "tasks",
    component: TasksComponent
  }, {
    path: "createtask",
    component: CreateTaskComponent
  }, {
    path: "edittask/:taskid",
    component: EditTaskComponent
  }, {
    path: "updatetaskstatus/:taskid",
    component: UpdateTaskStatusComponent
  }]
}];
var EmployeeRoutingModule = /* @__PURE__ */ (() => {
  const _EmployeeRoutingModule = class _EmployeeRoutingModule {
  };
  _EmployeeRoutingModule.\u0275fac = function EmployeeRoutingModule_Factory(t) {
    return new (t || _EmployeeRoutingModule)();
  };
  _EmployeeRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _EmployeeRoutingModule
  });
  _EmployeeRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [RouterModule.forChild(routes), RouterModule]
  });
  let EmployeeRoutingModule2 = _EmployeeRoutingModule;
  return EmployeeRoutingModule2;
})();

// src/app/employee/employee.module.ts
var EmployeeModule = /* @__PURE__ */ (() => {
  const _EmployeeModule = class _EmployeeModule {
  };
  _EmployeeModule.\u0275fac = function EmployeeModule_Factory(t) {
    return new (t || _EmployeeModule)();
  };
  _EmployeeModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _EmployeeModule
  });
  _EmployeeModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [SharedModule, EmployeeRoutingModule]
  });
  let EmployeeModule2 = _EmployeeModule;
  return EmployeeModule2;
})();

export {
  EmployeeModule
};
//# sourceMappingURL=chunk-JA5NLDU7.js.map
