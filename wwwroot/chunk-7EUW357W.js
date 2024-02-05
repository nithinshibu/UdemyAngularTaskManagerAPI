import {
  CountriesService
} from "./chunk-TG645TSC.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CanActivateGuardService,
  CheckboxControlValueAccessor,
  ClientLocation,
  ClientLocationStatusValidatorDirective,
  ComponentLoaderDirective,
  CurrencyPipe,
  DatePipe,
  DefaultValueAccessor,
  EventEmitter,
  FilterPipe,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  HttpClient,
  MaxLengthValidator,
  MinLengthValidator,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgSelectOption,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  PagingPipe,
  PatternValidator,
  PercentPipe,
  Project,
  ProjectsService,
  RadioControlValueAccessor,
  RequiredValidator,
  RouterLink,
  RouterModule,
  SelectControlValueAccessor,
  SharedModule,
  SortPipe,
  TaskPrioritiesService,
  TaskStatus,
  TaskStatusesService,
  TeamSizeValidatorDirective,
  UpperCasePipe,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-XJFYB6OA.js";

// src/app/services/dashboard.service.ts
var DashboardService = /* @__PURE__ */ (() => {
  const _DashboardService = class _DashboardService {
    //constructor() {}
    getTeamMembersSummary() {
      let TeamMembersSummary = [{
        Region: "East",
        TeamMembersCount: 20,
        TemporarilyUnavailableMembers: 4
      }, {
        Region: "West",
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 8
      }, {
        Region: "South",
        TeamMembersCount: 17,
        TemporarilyUnavailableMembers: 1
      }, {
        Region: "North",
        TeamMembersCount: 19,
        TemporarilyUnavailableMembers: 6
      }];
      return TeamMembersSummary;
    }
  };
  _DashboardService.\u0275fac = function DashboardService_Factory(t) {
    return new (t || _DashboardService)();
  };
  _DashboardService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DashboardService,
    factory: _DashboardService.\u0275fac
  });
  let DashboardService2 = _DashboardService;
  return DashboardService2;
})();

// src/app/admin/components/dashboard/dashboard.component.ts
function DashboardComponent_li_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r5 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", client_r5, " ");
  }
}
function DashboardComponent_a_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275listener("click", function DashboardComponent_a_54_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onProjectChange($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r6 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(project_r6);
  }
}
function DashboardComponent_a_60_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(year_r9);
  }
}
function DashboardComponent_a_60_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(year_r9);
  }
}
function DashboardComponent_a_60_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(year_r9);
  }
}
function DashboardComponent_a_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 42)(1, "span", 43);
    \u0275\u0275template(2, DashboardComponent_a_60_span_2_Template, 2, 1, "span", 44)(3, DashboardComponent_a_60_span_3_Template, 2, 1, "span", 45)(4, DashboardComponent_a_60_span_4_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const year_r9 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275property("ngSwitch", year_r9);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngSwitchCase", 2023);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngSwitchCase", 2022);
  }
}
function DashboardComponent_tr_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r16 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(team_r16.Region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r16.TeamMembersCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r16.TemporarilyUnavailableMembers);
  }
}
function DashboardComponent_div_101_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function DashboardComponent_div_101_ng_template_8_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r25 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" #", member_r25.ID, " ", member_r25.Name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r25.Status);
  }
}
function DashboardComponent_div_101_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_div_101_ng_template_8_div_0_Template, 5, 3, "div", 39);
  }
  if (rf & 2) {
    const teamgroup_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngForOf", teamgroup_r17.Members);
  }
}
function DashboardComponent_div_101_ng_template_10_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "i", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r28 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r28.ID);
    \u0275\u0275advance(1);
    \u0275\u0275styleProp("color", member_r28.Status == "Busy" ? "red" : "black");
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", member_r28.Name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", member_r28.Status, "");
  }
}
function DashboardComponent_div_101_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 32)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275template(10, DashboardComponent_div_101_ng_template_10_tr_10_Template, 8, 5, "tr", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const teamgroup_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", teamgroup_r17.Members);
  }
}
function DashboardComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "h2", 52)(3, "button", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 54)(6, "div", 55);
    \u0275\u0275template(7, DashboardComponent_div_101_div_7_Template, 1, 0, "div", 56)(8, DashboardComponent_div_101_ng_template_8_Template, 1, 1, "ng-template", null, 57, \u0275\u0275templateRefExtractor)(10, DashboardComponent_div_101_ng_template_10_Template, 11, 1, "ng-template", null, 58, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const teamgroup_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const _r21 = \u0275\u0275reference(9);
    const _r23 = \u0275\u0275reference(11);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-bs-target", "#cardbody" + i_r18)("aria-expanded", false)("aria-controls", "cardbody" + i_r18);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", teamgroup_r17.Region, " ");
    \u0275\u0275advance(1);
    \u0275\u0275property("id", "cardbody" + i_r18)("ngClass", i_r18 == 0 ? "show" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", i_r18 == 0)("ngIfThen", _r21)("ngIfElse", _r23);
  }
}
var DashboardComponent = /* @__PURE__ */ (() => {
  const _DashboardComponent = class _DashboardComponent {
    constructor(dashboardService) {
      this.dashboardService = dashboardService;
      this.Designation = "";
      this.Username = "";
      this.NoOfTeamMembers = 0;
      this.TotalCostOfAllProjects = 0;
      this.PendingTasks = 0;
      this.UpComingProjects = 0;
      this.ProjectCost = 0;
      this.CurrentExpenditure = 0;
      this.AvailableFunds = 0;
      this.Clients = [];
      this.Projects = [];
      this.Years = [];
      this.TeamMembersSummary = [];
      this.TeamMembers = [];
      this.ToDate = /* @__PURE__ */ new Date();
    }
    ngOnInit() {
      this.Designation = "Team Leader";
      this.Username = "John Smith";
      this.NoOfTeamMembers = 67;
      this.TotalCostOfAllProjects = 240;
      this.PendingTasks = 15;
      this.UpComingProjects = 0.2;
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52536;
      this.ToDate = /* @__PURE__ */ new Date();
      this.Clients = ["ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"];
      this.Projects = ["Project A", "Project B", "Project C", "Project D"];
      for (let i = 2023; i >= 2017; i--) {
        this.Years.push(i);
      }
      this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
      this.TeamMembers = [{
        Region: "East",
        Members: [{
          ID: 1,
          Name: "Ford",
          Status: "Available"
        }, {
          ID: 2,
          Name: "Miller",
          Status: "Available"
        }, {
          ID: 3,
          Name: "Jones",
          Status: "Busy"
        }, {
          ID: 4,
          Name: "James",
          Status: "Busy"
        }]
      }, {
        Region: "West",
        Members: [{
          ID: 5,
          Name: "Anna",
          Status: "Available"
        }, {
          ID: 6,
          Name: "Arun",
          Status: "Available"
        }, {
          ID: 7,
          Name: "Varun",
          Status: "Busy"
        }, {
          ID: 8,
          Name: "Jasmine",
          Status: "Busy"
        }]
      }, {
        Region: "South",
        Members: [{
          ID: 9,
          Name: "Krishna",
          Status: "Available"
        }, {
          ID: 10,
          Name: "Mohan",
          Status: "Available"
        }, {
          ID: 11,
          Name: "Raju",
          Status: "Busy"
        }, {
          ID: 12,
          Name: "Farooq",
          Status: "Busy"
        }]
      }, {
        Region: "North",
        Members: [{
          ID: 13,
          Name: "Jacob",
          Status: "Available"
        }, {
          ID: 14,
          Name: "Smith",
          Status: "Available"
        }, {
          ID: 15,
          Name: "Jones",
          Status: "Busy"
        }, {
          ID: 16,
          Name: "James",
          Status: "Busy"
        }]
      }];
    }
    onProjectChange($event) {
      if ($event.target.innerHTML == "Project A") {
        this.ProjectCost = 2113507;
        this.CurrentExpenditure = 96789;
        this.AvailableFunds = 52436;
      } else if ($event.target.innerHTML == "Project B") {
        this.ProjectCost = 1113507;
        this.CurrentExpenditure = 76789;
        this.AvailableFunds = 92436;
      } else if ($event.target.innerHTML == "Project C") {
        this.ProjectCost = 7113507;
        this.CurrentExpenditure = 86789;
        this.AvailableFunds = 32436;
      } else if ($event.target.innerHTML == "Project D") {
        this.ProjectCost = 3113507;
        this.CurrentExpenditure = 56789;
        this.AvailableFunds = 92436;
      }
    }
  };
  _DashboardComponent.\u0275fac = function DashboardComponent_Factory(t) {
    return new (t || _DashboardComponent)(\u0275\u0275directiveInject(DashboardService));
  };
  _DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 102,
    vars: 27,
    consts: [[1, "breadcrumb", "bg-light"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-lg-3", "pb-3", 2, "background-color", "#e9e6e6"], [1, "col-11", "text-white", "text-center", "mx-2", "rounded", "pt-2", "pb-2", "font-weight-bold", 2, "background-color", "#a39e9e", "font-family", "Arial, Helvetica, sans-serif"], [1, "col-12", "text-center", "mt-2"], ["src", "assets/user.png", "alt", "UserImage", "width", "120px"], [1, "col-12", "text-center", "pt-2", "pb-2", "font-weight-bold", 2, "font-family", "' Tahoma,Segoe UI', Geneva, Verdana, sans-serif"], [1, "col-12", "text-center", "pt-2", "pb-2", 2, "font-family", "Arial, Helvetica, sans-serif"], [1, "col-12", "mb-3"], [1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "bg-secondary", 2, "font-size", "13px"], [1, "col-12", "text-center", "pt-2", "pb-2", 2, "font-family", "Tahoma, 'Segoe UI', Geneva, Verdana, sans-serif"], [1, "col-12"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "col-lg-6"], [1, "col-12", "py-2", 2, "background-color", "#e9e6e6"], [1, "row", "mt-2"], [1, "col-6", "text-start"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#", "class", "dropdown-item", "onclick", "return false", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-6", "text-end"], ["href", "#", "class", "dropdown-item", "onclick", "return false", 4, "ngFor", "ngForOf"], [1, "col-11", "mx-auto", "mt-1", "text-center", "text-white", "pt-2", "pb-2", "mx-auto", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "Arial, Helvetica, sans-serif"], [1, "table", "table-borderless"], [1, "col-11", "mx-auto", "mt-1", "text-center", "text-white", "pt-2", "pb-2", "mx-2", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial,\n            sans-serif"], [1, "table"], [1, "pb-2"], [4, "ngFor", "ngForOf"], [1, "col-lg-3", 2, "background-color", "#e9e6e6"], [1, "col-11", "mx-auto", "mt-1", "text-center", "text-white", "pt-1", "pb-2", "mx-2", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial,\n            sans-serif"], [1, "col-lg-12", "pt-2"], ["id", "accordionExample", 1, "accordion"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "list-group-item"], ["href", "#", "onclick", "return false", 1, "dropdown-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "dropdown-item"], [3, "ngSwitch"], ["style", "color: green", 4, "ngSwitchCase"], ["style", "color: blue", 4, "ngSwitchCase"], ["style", "color: black", 4, "ngSwitchDefault"], [2, "color", "green"], [2, "color", "blue"], [2, "color", "black"], [1, "card"], ["id", "card1", 1, "card-header", "bg-secondary"], [1, "mb-0"], ["type", "button", "data-bs-toggle", "collapse", 1, "btn", "btn-link", "text-white", 2, "text-decoration", "none"], ["data-bs-parent", "#accordionExample", 1, "collapse", 3, "id", "ngClass"], [1, "card-body"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["firstTemplate", ""], ["secondTemplate", ""], [1, "card-header", "bg-primary", "text-white"], [1, "fa", "fa-phone"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav")(1, "ol", 0)(2, "li", 1)(3, "a", 2);
        \u0275\u0275text(4, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 3);
        \u0275\u0275text(6, "Dashboard");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "h5");
        \u0275\u0275text(8, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "div", 4)(12, "div", 6);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "uppercase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7);
        \u0275\u0275element(16, "img", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 9);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 10);
        \u0275\u0275text(20, " TEAM SUMMARY ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 11)(22, "ul", 12)(23, "li", 13);
        \u0275\u0275text(24, " NO. OF TEAM MEMBERS ");
        \u0275\u0275elementStart(25, "span", 14);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "li", 13);
        \u0275\u0275text(28, " TOTAL COST OF ALL PROJECTS ");
        \u0275\u0275elementStart(29, "span", 14);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "li", 13);
        \u0275\u0275text(32, " PENDING TASKS ");
        \u0275\u0275elementStart(33, "span", 14);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "li", 13);
        \u0275\u0275text(36, " UPCOMING PROJECTS ");
        \u0275\u0275elementStart(37, "span", 14);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "percent");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "div", 15);
        \u0275\u0275text(41, " CLIENTS ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 16)(43, "ul", 17);
        \u0275\u0275template(44, DashboardComponent_li_44_Template, 2, 1, "li", 18);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "div", 19)(46, "div", 4)(47, "div", 20)(48, "div", 21)(49, "div", 22)(50, "div", 23)(51, "button", 24);
        \u0275\u0275text(52, " Project A ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 25);
        \u0275\u0275template(54, DashboardComponent_a_54_Template, 2, 1, "a", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 27)(56, "div", 23)(57, "button", 24);
        \u0275\u0275text(58, " 2023 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 25);
        \u0275\u0275template(60, DashboardComponent_a_60_Template, 5, 3, "a", 28);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(61, "div", 29);
        \u0275\u0275text(62, " PROJECT BRIEFING ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 16)(64, "table", 30)(65, "tr")(66, "td");
        \u0275\u0275text(67, "Project Cost");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "td");
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "tr")(72, "td");
        \u0275\u0275text(73, "Current Expenditure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "td");
        \u0275\u0275text(75);
        \u0275\u0275pipe(76, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "tr")(78, "td");
        \u0275\u0275text(79, "Available Funds");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "td");
        \u0275\u0275text(81);
        \u0275\u0275pipe(82, "currency");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(83, "div", 31);
        \u0275\u0275text(84, " TEAM MEMBERS SUMMARY ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div", 16)(86, "table", 32)(87, "tr")(88, "th", 33);
        \u0275\u0275text(89, "Region");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "th", 33);
        \u0275\u0275text(91, "Team Members Count");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "th", 33);
        \u0275\u0275text(93, "Temporarily Unavailable Members");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(94, DashboardComponent_tr_94_Template, 8, 3, "tr", 34);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(95, "div", 35)(96, "div", 4)(97, "div", 36);
        \u0275\u0275text(98, " TEAM MEMBERS ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div", 37)(100, "div", 38);
        \u0275\u0275template(101, DashboardComponent_div_101_Template, 12, 9, "div", 39);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 14, ctx.Designation), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.Username, " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.NoOfTeamMembers);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("$ ", ctx.TotalCostOfAllProjects, "K");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.PendingTasks);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 16, ctx.UpComingProjects));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.Clients);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.Projects);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.Years);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 18, ctx.ProjectCost, "INR"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 21, ctx.CurrentExpenditure, "INR"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 24, ctx.AvailableFunds, "INR"));
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.TeamMembersSummary);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.TeamMembers);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, RouterLink, UpperCasePipe, PercentPipe, CurrencyPipe],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let DashboardComponent2 = _DashboardComponent;
  return DashboardComponent2;
})();

// src/app/admin/components/project-details/project-details.component.ts
var _c0 = () => ["/admin", "projects"];
var ProjectDetailsComponent = /* @__PURE__ */ (() => {
  const _ProjectDetailsComponent = class _ProjectDetailsComponent {
    constructor(activatedRoute, projectsService) {
      this.activatedRoute = activatedRoute;
      this.projectsService = projectsService;
      this.project = new Project();
    }
    ngOnInit() {
      this.routeParamsSubscription = this.activatedRoute.params.subscribe((params) => {
        let pid = params["projectid"];
        this.projectsService.getProjectByProjectID(pid).subscribe({
          next: (proj) => {
            this.project = proj;
          }
        });
      });
    }
    ngOnDestroy() {
      this.routeParamsSubscription.unsubscribe();
    }
  };
  _ProjectDetailsComponent.\u0275fac = function ProjectDetailsComponent_Factory(t) {
    return new (t || _ProjectDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProjectsService));
  };
  _ProjectDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProjectDetailsComponent,
    selectors: [["app-project-details"]],
    decls: 33,
    vars: 8,
    consts: [[1, "row"], [1, "col-md-8", "col-lg-6", "col-xl-5", "mx-auto"], [1, "card", "card-primary"], [1, "card-header"], [1, "card-body"], [1, "table", "table-borderless", "table-sm"], [1, "card-footer"], [1, "btn", "btn-info", 3, "routerLink"]],
    template: function ProjectDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h5");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "table", 5)(10, "tr")(11, "th");
        \u0275\u0275text(12, "Date of Start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "td");
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "tr")(16, "th");
        \u0275\u0275text(17, "Team Size");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "td");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "tr")(21, "th");
        \u0275\u0275text(22, "Client Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "td");
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "tr")(26, "th");
        \u0275\u0275text(27, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "td");
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "div", 6)(31, "a", 7);
        \u0275\u0275text(32, "Back");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("#", ctx.project.projectID, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.project.projectName);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.project.dateOfStart);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.project.teamSize);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.project.clientLocation == null ? null : ctx.project.clientLocation.clientLocationName);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.project.status);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0));
      }
    },
    dependencies: [RouterLink],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let ProjectDetailsComponent2 = _ProjectDetailsComponent;
  return ProjectDetailsComponent2;
})();

// src/app/services/client-location.service.ts
var ClientLocationService = /* @__PURE__ */ (() => {
  const _ClientLocationService = class _ClientLocationService {
    constructor(httpClient) {
      this.httpClient = httpClient;
    }
    getClientLocations() {
      return this.httpClient.get("api/clientlocations", {
        responseType: "json"
      });
    }
    getClientLocationtByClientLocationID(ClientLocationID) {
      return this.httpClient.get("/api/clientlocations/searchbyclientlocationid/" + ClientLocationID, {
        responseType: "json"
      });
    }
    insertClientLocation(newClientLocation) {
      return this.httpClient.post("/api/clientlocations", newClientLocation, {
        responseType: "json"
      });
    }
    updateClientLocation(existingClientLocation) {
      return this.httpClient.put("/api/clientlocations", existingClientLocation, {
        responseType: "json"
      });
    }
    deleteClientLocation(ClientLocationID) {
      return this.httpClient.delete("/api/clientlocations?ClientLocationID=" + ClientLocationID);
    }
  };
  _ClientLocationService.\u0275fac = function ClientLocationService_Factory(t) {
    return new (t || _ClientLocationService)(\u0275\u0275inject(HttpClient));
  };
  _ClientLocationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ClientLocationService,
    factory: _ClientLocationService.\u0275fac,
    providedIn: "root"
  });
  let ClientLocationService2 = _ClientLocationService;
  return ClientLocationService2;
})();

// src/app/admin/components/project/project.component.ts
var _c02 = ["selectionBox"];
var _c1 = (a3) => ["/admin", "projects", "view", a3];
var _c2 = ["*"];
var ProjectComponent = /* @__PURE__ */ (() => {
  const _ProjectComponent = class _ProjectComponent {
    constructor(projectsService) {
      this.projectsService = projectsService;
      this.editClick = new EventEmitter();
      this.deleteClick = new EventEmitter();
      this.hideDetails = false;
    }
    ngOnChanges(changes) {
    }
    ngOnInit() {
      this.MySubscription = this.projectsService.MySubject.subscribe((hide) => {
        this.hideDetails = hide;
      });
    }
    onEditClick(event, i) {
      this.editClick.emit({
        event,
        i
      });
    }
    onDeleteClick(event, i) {
      this.deleteClick.emit({
        event,
        i
      });
    }
    ngOnDestroy() {
      this.MySubscription.unsubscribe();
    }
    isAllCheckedChange(b) {
      if (b) {
        this.selectionBox.check();
      } else {
        this.selectionBox.unCheck();
      }
    }
  };
  _ProjectComponent.\u0275fac = function ProjectComponent_Factory(t) {
    return new (t || _ProjectComponent)(\u0275\u0275directiveInject(ProjectsService));
  };
  _ProjectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProjectComponent,
    selectors: [["app-project"]],
    contentQueries: function ProjectComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.selectionBox = _t.first);
      }
    },
    inputs: {
      project: ["currentProject", "project"],
      i: ["recordIndex", "i"]
    },
    outputs: {
      editClick: "editClick",
      deleteClick: "deleteClick"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c2,
    decls: 39,
    vars: 10,
    consts: [[1, "card", "card-primary"], [1, "card-header"], [1, "row"], [1, "col-11"], [1, "col-1"], [1, "card-body"], [1, "table", "table-borderless", "table-sm", 3, "hidden"], [1, "card-footer"], ["data-bs-toggle", "modal", "data-bs-target", "#editModal", 1, "btn", "btn-info", 3, "click"], ["data-bs-toggle", "modal", "data-bs-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], [1, "mr-2", "btn", "btn-primary", 3, "routerLink"]],
    template: function ProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h5");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275projection(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 5)(11, "table", 6)(12, "tr")(13, "th");
        \u0275\u0275text(14, "Date of Start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "td");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "tr")(18, "th");
        \u0275\u0275text(19, "Team Size");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "td");
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "tr")(23, "th");
        \u0275\u0275text(24, "Client Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "td");
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "tr")(28, "th");
        \u0275\u0275text(29, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "td");
        \u0275\u0275text(31);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "div", 7)(33, "button", 8);
        \u0275\u0275listener("click", function ProjectComponent_Template_button_click_33_listener($event) {
          return ctx.onEditClick($event, ctx.i);
        });
        \u0275\u0275text(34, " Edit ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 9);
        \u0275\u0275listener("click", function ProjectComponent_Template_button_click_35_listener($event) {
          return ctx.onDeleteClick($event, ctx.i);
        });
        \u0275\u0275text(36, " Delete ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "a", 10);
        \u0275\u0275text(38, "Learn More");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("#", ctx.project.projectID, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.project.projectName);
        \u0275\u0275advance(4);
        \u0275\u0275property("hidden", ctx.hideDetails);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.project.dateOfStart);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.project.teamSize);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.project.clientLocation == null ? null : ctx.project.clientLocation.clientLocationName);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.project.status);
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, ctx.project.projectID));
      }
    },
    dependencies: [RouterLink],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let ProjectComponent2 = _ProjectComponent;
  return ProjectComponent2;
})();

// src/app/admin/components/check-box-printer/check-box-printer.component.ts
var CheckBoxPrinterComponent = /* @__PURE__ */ (() => {
  const _CheckBoxPrinterComponent = class _CheckBoxPrinterComponent {
    constructor() {
      this.isChecked = false;
    }
    ngOnInit() {
    }
    check() {
      this.isChecked = true;
    }
    unCheck() {
      this.isChecked = false;
    }
  };
  _CheckBoxPrinterComponent.\u0275fac = function CheckBoxPrinterComponent_Factory(t) {
    return new (t || _CheckBoxPrinterComponent)();
  };
  _CheckBoxPrinterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CheckBoxPrinterComponent,
    selectors: [["app-check-box-printer"]],
    decls: 2,
    vars: 1,
    consts: [["type", "checkbox", "value", "true", "name", "isChecked", "id", "isChecked", 3, "ngModel", "ngModelChange"]],
    template: function CheckBoxPrinterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "input", 0);
        \u0275\u0275listener("ngModelChange", function CheckBoxPrinterComponent_Template_input_ngModelChange_1_listener($event) {
          return ctx.isChecked = $event;
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(1);
        \u0275\u0275property("ngModel", ctx.isChecked);
      }
    },
    dependencies: [CheckboxControlValueAccessor, NgControlStatus, NgModel],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let CheckBoxPrinterComponent2 = _CheckBoxPrinterComponent;
  return CheckBoxPrinterComponent2;
})();

// src/app/admin/components/projects/projects.component.ts
var _c03 = ["newForm"];
var _c12 = ["editForm"];
var _c22 = ["newFormCancel"];
var _c3 = ["editFormCancel"];
var _c4 = ["prj"];
function ProjectsComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 106);
  }
}
function ProjectsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107)(1, "app-project", 108, 109);
    \u0275\u0275listener("editClick", function ProjectsComponent_div_34_Template_app_project_editClick_1_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r44);
      const project_r39 = restoredCtx.$implicit;
      const ctx_r43 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r43.onEditClick($event, project_r39.projectID));
    })("deleteClick", function ProjectsComponent_div_34_Template_app_project_deleteClick_1_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r44);
      const project_r39 = restoredCtx.$implicit;
      const ctx_r45 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r45.onDeleteClick($event, project_r39.projectID));
    });
    \u0275\u0275element(3, "app-check-box-printer", null, 110);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r39 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275property("currentProject", project_r39)("recordIndex", project_r39.projectID);
  }
}
var _c5 = (a0) => ({
  active: a0
});
function ProjectsComponent_li_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 111);
    \u0275\u0275listener("click", function ProjectsComponent_li_40_Template_li_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r48);
      const page_r46 = restoredCtx.$implicit;
      const ctx_r47 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r47.onPageIndexClicked(page_r46.pageIndex));
    });
    \u0275\u0275elementStart(1, "a", 112);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r46 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c5, page_r46.pageIndex == ctx_r2.currentPageIndex));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r46.pageIndex + 1);
  }
}
function ProjectsComponent_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Project Name can't be blank");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Project Name can contain alphabets,digits,dot,hypen and space only");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Project Name should be atleast 3 characters long");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Date of Start is required field");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Team Size should be a number");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Team Size should be divisble by 5");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Please select a status");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_option_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const clientLocation_r49 = ctx.$implicit;
    \u0275\u0275property("value", clientLocation_r49.clientLocationID);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", clientLocation_r49.clientLocationName, " ");
  }
}
function ProjectsComponent_span_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Client Location is required field");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Support Projects are not allowed at Tokyo");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Project Name can't be blank");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Project Name can contain alphabets,digits,dot,hypen and space only");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Project Name should be atleast 3 characters long");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Date of Start is required field");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Team Size should be a number");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Team Size should be divisble by 5");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Please select a status");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_option_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const clientLocation_r50 = ctx.$implicit;
    \u0275\u0275property("value", clientLocation_r50.clientLocationID);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", clientLocation_r50.clientLocationName, " ");
  }
}
function ProjectsComponent_span_190_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Client Location is required field");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_span_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Support Projects are not allowed at Tokyo");
    \u0275\u0275elementEnd();
  }
}
var _c6 = (a0, a1) => ({
  "is-invalid": a0,
  "is-valid": a1
});
var ProjectsComponent = /* @__PURE__ */ (() => {
  const _ProjectsComponent = class _ProjectsComponent {
    constructor(projectsService, clientLocationService) {
      this.projectsService = projectsService;
      this.clientLocationService = clientLocationService;
      this.projects = [];
      this.showLoading = true;
      this.newProject = new Project();
      this.editProject = new Project();
      this.editIndex = null;
      this.deleteProject = new Project();
      this.deleteIndex = null;
      this.pipe = new DatePipe("en-US");
      this.searchBy = "projectName";
      this.searchText = "";
      this.currentPageIndex = 0;
      this.pages = [];
      this.pageSize = 3;
      this.isAllChecked = false;
    }
    ngOnInit() {
      this.projectsService.getAllProjects().subscribe({
        next: (projects) => {
          this.projects = projects;
          this.showLoading = false;
          this.calculateNoOfPages();
        }
      });
      this.clientLocations = this.clientLocationService.getClientLocations();
    }
    isAllCheckedChange(event) {
      let proj = this.projs.toArray();
      for (let i = 0; i < proj.length; i++) {
        proj[i].isAllCheckedChange(this.isAllChecked);
      }
    }
    calculateNoOfPages() {
      let filterPipe = new FilterPipe();
      var resultProjects = filterPipe.transform(this.projects, this.searchBy, this.searchText);
      var noOfPages = Math.ceil(resultProjects.length / this.pageSize);
      this.pages = [];
      for (let i = 0; i < noOfPages; i++) {
        this.pages.push({
          pageIndex: i
        });
      }
      this.currentPageIndex = 0;
    }
    onSaveClick() {
      if (this.newForm.valid) {
        this.newProject.clientLocation.clientLocationID = 0;
        this.newProject.projectID = 0;
        this.newProject.active = true;
        this.projectsService.insertProject(this.newProject).subscribe({
          next: (response) => {
            var p = new Project();
            p.projectID = response.projectID;
            p.projectName = response.projectName;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;
            p.clientLocation = response.clientLocation;
            p.active = response.active;
            p.clientLocationID = response.clientLocationID;
            p.status = response.status;
            this.projects.push(p);
            this.newProject = new Project();
            this.newFormCancel.nativeElement.click();
            this.calculateNoOfPages();
          }
        });
      }
    }
    onEditClick(event, projectID) {
      this.editForm.resetForm();
      var index = this.projects.findIndex((project) => project.projectID === projectID);
      setTimeout(() => {
        this.editProject.projectID = this.projects[index].projectID;
        this.editProject.projectName = this.projects[index].projectName;
        this.editProject.dateOfStart = this.pipe.transform(this.projects[index].dateOfStart, "yyyy-MM-dd")?.toString() ?? "";
        this.editProject.teamSize = this.projects[index].teamSize;
        this.editProject.active = this.projects[index].active;
        this.editProject.clientLocationID = this.projects[index].clientLocationID;
        this.editProject.clientLocation = this.projects[index].clientLocation;
        this.editProject.status = this.projects[index].status;
        this.editIndex = index;
      }, 100);
    }
    onUpdateClick() {
      if (this.editForm.valid) {
        this.projectsService.updateProject(this.editProject).subscribe({
          next: (response) => {
            var p = new Project();
            p.projectID = response.projectID;
            p.projectName = response.projectName;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;
            p.clientLocation = response.clientLocation;
            p.active = response.active;
            p.clientLocationID = response.clientLocationID;
            p.status = response.status;
            this.projects[this.editIndex] = p;
            this.editProject = new Project();
            this.editFormCancel.nativeElement.click();
          }
        });
      }
    }
    onDeleteClick(event, projectID) {
      var index = this.projects.findIndex((project) => project.projectID === projectID);
      this.deleteIndex = index;
      this.deleteProject.projectID = this.projects[index].projectID;
      this.deleteProject.projectName = this.projects[index].projectName;
      this.deleteProject.dateOfStart = this.pipe.transform(this.projects[index].dateOfStart, "yyyy-MM-dd")?.toString() ?? "";
      this.deleteProject.teamSize = this.projects[index].teamSize;
      this.calculateNoOfPages();
    }
    onDeleteConfirmClick() {
      this.projectsService.deleteProject(this.deleteProject.projectID).subscribe({
        next: (response) => {
          this.projects.splice(this.deleteIndex, 1);
          this.deleteProject = new Project();
        }
      });
    }
    onSearchClick() {
    }
    onSearchTextKeyup(event) {
      this.calculateNoOfPages();
    }
    onNewClick(event) {
      this.newForm.resetForm();
    }
    onHideShowDetails(event) {
      this.projectsService.toggleDetails();
    }
    onPageIndexClicked(pageIndex) {
      this.currentPageIndex = pageIndex;
    }
  };
  _ProjectsComponent.\u0275fac = function ProjectsComponent_Factory(t) {
    return new (t || _ProjectsComponent)(\u0275\u0275directiveInject(ProjectsService), \u0275\u0275directiveInject(ClientLocationService));
  };
  _ProjectsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProjectsComponent,
    selectors: [["app-projects"]],
    viewQuery: function ProjectsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
        \u0275\u0275viewQuery(_c12, 5);
        \u0275\u0275viewQuery(_c22, 5);
        \u0275\u0275viewQuery(_c3, 5);
        \u0275\u0275viewQuery(_c4, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.newForm = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editForm = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.newFormCancel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editFormCancel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.projs = _t);
      }
    },
    decls: 226,
    vars: 89,
    consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size: 34px", 4, "ngIf"], [1, "row"], [1, "col-xl-9", "mx-auto"], [1, "form-group", "from-row"], [1, "d-flex", "gap-2"], ["data-bs-toggle", "modal", "data-bs-target", "#newModal", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "value", "true", "name", "isAllChecked", "id", "isAllChecked", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "isAllChecked", 1, "custom-control-label"], [1, "d-flex", "gap-2", "mt-2", "mb-2"], ["for", "drpSearchBy", 1, "col-form-label", "col-2", "text-right"], [1, "col-3"], ["name", "SearchBy", "id", "drpSearchBy", 1, "drpSearchBy", "form-control", 3, "ngModel", "ngModelChange"], ["value", "projectID"], ["value", "projectName"], ["value", "dateOfStart"], ["value", "teamSize"], ["for", "txtSearchText", 1, "col-form-label", "col-1", "text-right"], [1, "col-4"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-12", "mx-auto"], ["class", "col-md-4 mb-1 projectcard", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["novalidate", "novalidate", "appClientLocationStatusValidator", ""], ["newForm", "ngForm"], ["role", "dialog", "id", "newModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content", 2, "width", "700px"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "form-group", "row"], ["for", "txtNewProjectName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewProjectName", "placeholder", "Project Name", "name", "ProjectName", "required", "required", "pattern", "^[A-Za-z][A-Za-z ]*$", "minlength", "3", "maxlength", "30", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectName", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "txtNewDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtNewDateOfStart", "placeholder", "Date Of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["newDateOfStart", "ngModel"], ["for", "txtTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]+$", "appTeamSizeValidator", "5", "maxlength", "7", 1, "form-control", 2, "width", "100px", 3, "ngModel", "ngClass", "ngModelChange"], ["newTeamSize", "ngModel"], ["for", "chkbox", 1, "col-sm-4", "col-form-label"], ["id", "chkbox", 1, "col-sm-8"], [1, "form-check"], ["type", "checkbox", "id", "chkNewActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkNewActive", 1, "form-check-label"], ["for", "rbNewStatusInForce", 1, "col-sm-4"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "rbNewStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusInForce", "ngModel"], ["for", "rbNewStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbNewStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusSupport", "ngModel"], ["for", "rbNewStatusSupport", 1, "form-check-label"], ["for", "drpNewClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpNewClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newClientLocation", "ngModel"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["data-bs-dismiss", "modal", 1, "btn", "btn-warning"], ["newFormCancel", ""], [1, "btn", "btn-success", 3, "click"], ["editForm", "ngForm"], ["role", "dialog", "id", "editModal", 1, "modal"], [1, "modal-header"], ["for", "txtEditProjectID", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["for", "txtEditProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectName", "placeholder", "Project Name", "name", "ProjectName", "required", "required", "pattern", "^[A-Za-z][A-Za-z ]*$", "minlength", "3", "maxlength", "30", 1, "form-control", 2, "width", "350px", 3, "ngModel", "ngClass", "ngModelChange"], ["editProjectName", "ngModel"], ["for", "txtEditDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtEditDateOfStart", "placeholder", "Date Of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["editDateOfStart", "ngModel"], ["for", "txtEditTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]+$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["editTeamSize", "ngModel"], ["type", "checkbox", "id", "chkEditActive", "name", "active", 1, "form-check-input", 3, "value", "checked", "ngModel", "ngModelChange"], ["for", "chkEditActive", 1, "form-check-label"], ["for", "rbEditStatusInForce", 1, "col-sm-4"], ["type", "radio", "id", "rbEditStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusInForce", "ngModel"], ["for", "rbEditStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbEditStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusSupport", "ngModel"], ["for", "rbEditStatusSupport", 1, "form-check-label"], ["for", "drpEditClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpEditClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editClientLocation", "ngModel"], ["editFormCancel", ""], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "modal-content"], [1, "text-warning"], ["for", "txtDeleteProjectID", 1, "col-sm-4", "col-form-label"], [1, "col-sm-10"], ["type", "text", "id", "txtDeleteProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["for", "txtDeleteProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteProjectName", "placeholder", "Project Name", "name", "ProjectName", "disabled", "disabled", 1, "form-control", 2, "width", "350px", 3, "ngModel", "ngModelChange"], ["data-bs-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "34px"], [1, "col-md-4", "mb-1", "projectcard"], [3, "currentProject", "recordIndex", "editClick", "deleteClick"], ["prj", ""], ["selectionBox", ""], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], [1, "text-danger"], [3, "value"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, " Projects ");
        \u0275\u0275template(2, ProjectsComponent_i_2_Template, 1, 0, "i", 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function ProjectsComponent_Template_button_click_7_listener($event) {
          return ctx.onNewClick($event);
        });
        \u0275\u0275text(8, " Create a Project ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 6);
        \u0275\u0275listener("click", function ProjectsComponent_Template_button_click_9_listener($event) {
          return ctx.onHideShowDetails($event);
        });
        \u0275\u0275text(10, " Hide/Show Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "input", 8);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.isAllChecked = $event;
        })("change", function ProjectsComponent_Template_input_change_12_listener($event) {
          return ctx.isAllCheckedChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "label", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "label", 11);
        \u0275\u0275text(16, "Search By");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 12)(18, "select", 13);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_18_listener($event) {
          return ctx.searchBy = $event;
        });
        \u0275\u0275elementStart(19, "option", 14);
        \u0275\u0275text(20, "Project ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "option", 15);
        \u0275\u0275text(22, "Project Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "option", 16);
        \u0275\u0275text(24, "Date Of Start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 17);
        \u0275\u0275text(26, "Team Size");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "label", 18);
        \u0275\u0275text(28, "Search:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 19)(30, "div", 20)(31, "input", 21);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_31_listener($event) {
          return ctx.searchText = $event;
        })("keyup", function ProjectsComponent_Template_input_keyup_31_listener($event) {
          return ctx.onSearchTextKeyup($event);
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(32, "div", 22)(33, "div", 1);
        \u0275\u0275template(34, ProjectsComponent_div_34_Template, 5, 2, "div", 23);
        \u0275\u0275pipe(35, "paging");
        \u0275\u0275pipe(36, "filter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 1)(38, "div", 24)(39, "ul", 25);
        \u0275\u0275template(40, ProjectsComponent_li_40_Template, 3, 4, "li", 26);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(41, "form", 27, 28)(43, "div", 29)(44, "div", 30)(45, "div", 31)(46, "div", 32)(47, "div", 33);
        \u0275\u0275text(48, "New Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 34)(50, "span");
        \u0275\u0275text(51, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "div", 35)(53, "div", 36)(54, "label", 37);
        \u0275\u0275text(55, "Project Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 38)(57, "input", 39, 40);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_57_listener($event) {
          return ctx.newProject.projectName = $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(59, ProjectsComponent_span_59_Template, 2, 0, "span", 41)(60, ProjectsComponent_span_60_Template, 2, 0, "span", 41)(61, ProjectsComponent_span_61_Template, 2, 0, "span", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 36)(63, "label", 42);
        \u0275\u0275text(64, "Date Of Start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 38)(66, "input", 43, 44);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_66_listener($event) {
          return ctx.newProject.dateOfStart = $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(68, ProjectsComponent_span_68_Template, 2, 0, "span", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 36)(70, "label", 45);
        \u0275\u0275text(71, "Team Size");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 38)(73, "input", 46, 47);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_73_listener($event) {
          return ctx.newProject.teamSize = $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(75, ProjectsComponent_span_75_Template, 2, 0, "span", 41)(76, ProjectsComponent_span_76_Template, 2, 0, "span", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 36);
        \u0275\u0275element(78, "label", 48);
        \u0275\u0275elementStart(79, "div", 49)(80, "div", 50)(81, "input", 51);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_81_listener($event) {
          return ctx.newProject.active = $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "label", 52);
        \u0275\u0275text(83, "Active");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(84, "div", 36)(85, "label", 53);
        \u0275\u0275text(86, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 38)(88, "div", 54)(89, "input", 55, 56);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_89_listener($event) {
          return ctx.newProject.status = $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "label", 57);
        \u0275\u0275text(92, "In Force");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 54)(94, "input", 58, 59);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_94_listener($event) {
          return ctx.newProject.status = $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "label", 60);
        \u0275\u0275text(97, "Support");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(98, ProjectsComponent_span_98_Template, 2, 0, "span", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div", 36)(100, "label", 61);
        \u0275\u0275text(101, "Client Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "div", 38)(103, "select", 62, 63);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_103_listener($event) {
          return ctx.newProject.clientLocationID = $event;
        });
        \u0275\u0275elementStart(105, "option", 64);
        \u0275\u0275text(106, "Please Select");
        \u0275\u0275elementEnd();
        \u0275\u0275template(107, ProjectsComponent_option_107_Template, 2, 2, "option", 65);
        \u0275\u0275pipe(108, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(109, ProjectsComponent_span_109_Template, 2, 0, "span", 41)(110, ProjectsComponent_span_110_Template, 2, 0, "span", 41);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(111, "div", 66)(112, "button", 67, 68);
        \u0275\u0275text(114, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "button", 69);
        \u0275\u0275listener("click", function ProjectsComponent_Template_button_click_115_listener() {
          return ctx.onSaveClick();
        });
        \u0275\u0275text(116, "Save");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(117, "form", 27, 70)(119, "div", 71)(120, "div", 30)(121, "div", 31)(122, "div", 72)(123, "div", 33);
        \u0275\u0275text(124, "Edit Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "button", 34)(126, "span");
        \u0275\u0275text(127, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(128, "div", 35)(129, "div", 36)(130, "label", 73);
        \u0275\u0275text(131, "Project ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "div", 38)(133, "input", 74);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_133_listener($event) {
          return ctx.editProject.projectID = $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(134, "div", 36)(135, "label", 75);
        \u0275\u0275text(136, "Project Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "div", 38)(138, "input", 76, 77);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_138_listener($event) {
          return ctx.editProject.projectName = $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(140, ProjectsComponent_span_140_Template, 2, 0, "span", 41)(141, ProjectsComponent_span_141_Template, 2, 0, "span", 41)(142, ProjectsComponent_span_142_Template, 2, 0, "span", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "div", 36)(144, "label", 78);
        \u0275\u0275text(145, "Date Of Start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 38)(147, "input", 79, 80);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_147_listener($event) {
          return ctx.editProject.dateOfStart = $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(149, ProjectsComponent_span_149_Template, 2, 0, "span", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(150, "div", 36)(151, "label", 81);
        \u0275\u0275text(152, "Team Size");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "div", 38)(154, "input", 82, 83);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_154_listener($event) {
          return ctx.editProject.teamSize = $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(156, ProjectsComponent_span_156_Template, 2, 0, "span", 41)(157, ProjectsComponent_span_157_Template, 2, 0, "span", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "div", 36);
        \u0275\u0275element(159, "label", 48);
        \u0275\u0275elementStart(160, "div", 49)(161, "div", 50)(162, "input", 84);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_162_listener($event) {
          return ctx.editProject.active = $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "label", 85);
        \u0275\u0275text(164, "Active");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(165, "div", 36)(166, "label", 86);
        \u0275\u0275text(167, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "div", 38)(169, "div", 54)(170, "input", 87, 88);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_170_listener($event) {
          return ctx.editProject.status = $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "label", 89);
        \u0275\u0275text(173, "In Force");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(174, "div", 54)(175, "input", 90, 91);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_175_listener($event) {
          return ctx.editProject.status = $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "label", 92);
        \u0275\u0275text(178, "Support");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(179, ProjectsComponent_span_179_Template, 2, 0, "span", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(180, "div", 36)(181, "label", 93);
        \u0275\u0275text(182, "Client Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "div", 38)(184, "select", 94, 95);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_184_listener($event) {
          return ctx.editProject.clientLocationID = $event;
        });
        \u0275\u0275elementStart(186, "option", 64);
        \u0275\u0275text(187, "Please Select");
        \u0275\u0275elementEnd();
        \u0275\u0275template(188, ProjectsComponent_option_188_Template, 2, 2, "option", 65);
        \u0275\u0275pipe(189, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(190, ProjectsComponent_span_190_Template, 2, 0, "span", 41)(191, ProjectsComponent_span_191_Template, 2, 0, "span", 41);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(192, "div", 66)(193, "button", 67, 96);
        \u0275\u0275text(195, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(196, "button", 69);
        \u0275\u0275listener("click", function ProjectsComponent_Template_button_click_196_listener() {
          return ctx.onUpdateClick();
        });
        \u0275\u0275text(197, " Update ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(198, "form")(199, "div", 97)(200, "div", 30)(201, "div", 98)(202, "div", 72)(203, "div", 33);
        \u0275\u0275text(204, "Delete Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "button", 34)(206, "span");
        \u0275\u0275text(207, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(208, "div", 35)(209, "div", 99);
        \u0275\u0275text(210, "Are you sure to delete this Project?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "div", 36)(212, "label", 100);
        \u0275\u0275text(213, "Project ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(214, "div", 101)(215, "input", 102);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_215_listener($event) {
          return ctx.deleteProject.projectID = $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(216, "div", 36)(217, "label", 103);
        \u0275\u0275text(218, "Project Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(219, "div", 101)(220, "input", 104);
        \u0275\u0275listener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_220_listener($event) {
          return ctx.deleteProject.projectName = $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(221, "div", 66)(222, "button", 67);
        \u0275\u0275text(223, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "button", 105);
        \u0275\u0275listener("click", function ProjectsComponent_Template_button_click_224_listener() {
          return ctx.onDeleteConfirmClick();
        });
        \u0275\u0275text(225, " Delete ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        const _r3 = \u0275\u0275reference(42);
        const _r4 = \u0275\u0275reference(58);
        const _r8 = \u0275\u0275reference(67);
        const _r10 = \u0275\u0275reference(74);
        const _r13 = \u0275\u0275reference(90);
        const _r16 = \u0275\u0275reference(104);
        const _r21 = \u0275\u0275reference(118);
        const _r22 = \u0275\u0275reference(139);
        const _r26 = \u0275\u0275reference(148);
        const _r28 = \u0275\u0275reference(155);
        const _r31 = \u0275\u0275reference(171);
        const _r34 = \u0275\u0275reference(185);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showLoading);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngModel", ctx.isAllChecked);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.searchBy);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngModel", ctx.searchText);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(35, 53, \u0275\u0275pipeBind3(36, 57, ctx.projects, ctx.searchBy, ctx.searchText), ctx.currentPageIndex, ctx.pageSize));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance(17);
        \u0275\u0275property("ngModel", ctx.newProject.projectName)("ngClass", \u0275\u0275pureFunction2(65, _c6, _r4.invalid && (_r4.dirty || _r4.touched || _r3.submitted), _r4.valid && (_r4.dirty || _r4.touched || _r3.submitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", _r4.invalid && (_r4.dirty || _r4.touched || _r3.submitted) && (_r4.errors == null ? null : _r4.errors["required"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", _r4.invalid && (_r4.dirty || _r4.touched || _r3.submitted) && (_r4.errors == null ? null : _r4.errors["pattern"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", _r4.invalid && (_r4.dirty || _r4.touched || _r3.submitted) && (_r4.errors == null ? null : _r4.errors["minlength"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.newProject.dateOfStart)("ngClass", \u0275\u0275pureFunction2(68, _c6, _r8.invalid && (_r8.dirty || _r8.touched || _r3.submitted), _r8.valid && (_r8.dirty || _r8.touched || _r3.submitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", _r8.invalid && (_r8.dirty || _r8.touched || _r3.submitted) && (_r8.errors == null ? null : _r8.errors["required"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.newProject.teamSize)("ngClass", \u0275\u0275pureFunction2(71, _c6, _r10.invalid && (_r10.dirty || _r10.touched || _r3.submitted), _r10.valid && (_r10.dirty || _r10.touched || _r3.submitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", _r10.invalid && (_r10.dirty || _r10.touched || _r3.submitted) && (_r10.errors == null ? null : _r10.errors["pattern"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", _r10.invalid && (_r10.dirty || _r10.touched || _r3.submitted) && _r10.errors["divisible"]);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.newProject.active);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngModel", ctx.newProject.status);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.newProject.status);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", _r13.invalid && (_r13.dirty || _r13.touched || _r3.submitted) && (_r13.errors == null ? null : _r13.errors["required"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.newProject.clientLocationID)("ngClass", \u0275\u0275pureFunction2(74, _c6, _r16.invalid && (_r16.dirty || _r16.touched || _r3.submitted), _r16.valid && (_r16.dirty || _r16.touched || _r3.submitted)));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(108, 61, ctx.clientLocations));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", _r16.invalid && (_r16.dirty || _r16.touched || _r3.submitted) && (_r16.errors == null ? null : _r16.errors["required"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", _r3.invalid && (_r3.dirty || _r3.touched || _r3.submitted) && (_r3.errors == null ? null : _r3.errors["clientLocationStatus"]));
        \u0275\u0275advance(23);
        \u0275\u0275property("ngModel", ctx.editProject.projectID);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.editProject.projectName)("ngClass", \u0275\u0275pureFunction2(77, _c6, _r22.invalid && (_r22.dirty || _r22.touched || _r21.submitted), _r22.valid && (_r22.dirty || _r22.touched || _r21.submitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", _r22.invalid && (_r22.dirty || _r22.touched || _r21.submitted) && (_r22.errors == null ? null : _r22.errors["required"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", _r22.invalid && (_r22.dirty || _r22.touched || _r21.submitted) && (_r22.errors == null ? null : _r22.errors["pattern"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", _r22.invalid && (_r22.dirty || _r22.touched || _r21.submitted) && (_r22.errors == null ? null : _r22.errors["minlength"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.editProject.dateOfStart)("ngClass", \u0275\u0275pureFunction2(80, _c6, _r26.invalid && (_r26.dirty || _r26.touched || _r21.submitted), _r26.valid && (_r26.dirty || _r26.touched || _r21.submitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", _r26.invalid && (_r26.dirty || _r26.touched || _r21.submitted) && (_r26.errors == null ? null : _r26.errors["required"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.editProject.teamSize)("ngClass", \u0275\u0275pureFunction2(83, _c6, _r28.invalid && (_r28.dirty || _r28.touched || _r21.submitted), _r28.valid && (_r28.dirty || _r28.touched || _r21.submitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", _r28.invalid && (_r28.dirty || _r28.touched || _r21.submitted) && (_r28.errors == null ? null : _r28.errors["pattern"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", _r28.invalid && (_r28.dirty || _r28.touched || _r21.submitted) && _r28.errors["divisible"]);
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.editProject.active)("checked", ctx.editProject.active === true)("ngModel", ctx.editProject.active);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngModel", ctx.editProject.status);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.editProject.status);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", _r31.invalid && (_r31.dirty || _r31.touched || _r21.submitted) && (_r31.errors == null ? null : _r31.errors["required"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.editProject.clientLocationID)("ngClass", \u0275\u0275pureFunction2(86, _c6, _r34.invalid && (_r34.dirty || _r34.touched || _r21.submitted), _r34.valid && (_r34.dirty || _r34.touched || _r21.submitted)));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(189, 63, ctx.clientLocations));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", _r34.invalid && (_r34.dirty || _r34.touched || _r21.submitted) && (_r34.errors == null ? null : _r34.errors["required"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", _r21.invalid && (_r21.dirty || _r21.touched || _r21.submitted) && (_r21.errors == null ? null : _r21.errors["clientLocationStatus"]));
        \u0275\u0275advance(24);
        \u0275\u0275property("ngModel", ctx.deleteProject.projectID);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.deleteProject.projectName);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, NgModel, NgForm, TeamSizeValidatorDirective, ClientLocationStatusValidatorDirective, ProjectComponent, CheckBoxPrinterComponent, AsyncPipe, FilterPipe, PagingPipe],
    styles: ["\n\n.projectcard[_ngcontent-%COMP%] {\n  height: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIucHJvamVjdGNhcmQge1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLENBQUE7QUFDRSxVQUFBOzsiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let ProjectsComponent2 = _ProjectsComponent;
  return ProjectsComponent2;
})();

// src/app/models/country.model.ts
var Country = class {
  constructor() {
    this.countryID = 0;
    this.countryName = "";
  }
};

// src/app/admin/components/countries/countries.component.ts
var _c04 = ["defaultTextBox_New"];
var _c13 = ["defaultTextBox_Edit"];
var _c23 = ["newFormCancel"];
var _c32 = ["editFormCancel"];
function CountriesComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 55);
  }
}
function CountriesComponent_i_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 56);
    \u0275\u0275listener("click", function CountriesComponent_i_27_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r13 = \u0275\u0275nextContext();
      ctx_r13.sortBy = "countryName";
      return \u0275\u0275resetView(ctx_r13.sortOrder = "ASC");
    });
    \u0275\u0275elementEnd();
  }
}
function CountriesComponent_i_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 57);
    \u0275\u0275listener("click", function CountriesComponent_i_28_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.sortOrder = "DESC");
    });
    \u0275\u0275elementEnd();
  }
}
function CountriesComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 58);
    \u0275\u0275listener("click", function CountriesComponent_i_29_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r17 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r17.sortOrder = "ASC");
    });
    \u0275\u0275elementEnd();
  }
}
function CountriesComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 59)(4, "button", 60);
    \u0275\u0275listener("click", function CountriesComponent_tr_32_Template_button_click_4_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r22);
      const country_r19 = restoredCtx.$implicit;
      const ctx_r21 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r21.onEditClick($event, country_r19));
    });
    \u0275\u0275text(5, " Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\xA0 ");
    \u0275\u0275elementStart(7, "button", 61);
    \u0275\u0275listener("click", function CountriesComponent_tr_32_Template_button_click_7_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r22);
      const country_r19 = restoredCtx.$implicit;
      const ctx_r23 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r23.onDeleteClick($event, country_r19));
    });
    \u0275\u0275text(8, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const country_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r19.countryName);
  }
}
var _c42 = (a0) => ({
  active: a0
});
function CountriesComponent_ng_container_41_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63);
    \u0275\u0275listener("click", function CountriesComponent_ng_container_41_li_1_Template_li_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r27);
      const page_r25 = restoredCtx.$implicit;
      const ctx_r26 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r26.onPageIndexClicked(page_r25.pageIndex));
    });
    \u0275\u0275elementStart(1, "a", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r25 = ctx.$implicit;
    const ctx_r24 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c42, page_r25.pageIndex == ctx_r24.currentPageIndex));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r25.pageIndex + 1);
  }
}
function CountriesComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CountriesComponent_ng_container_41_li_1_Template, 3, 4, "li", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("ngForOf", ctx_r5.pages);
  }
}
function CountriesComponent_ng_container_42_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1, " \xA0...\xA0 ");
    \u0275\u0275elementEnd();
  }
}
function CountriesComponent_ng_container_42_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63);
    \u0275\u0275listener("click", function CountriesComponent_ng_container_42_li_8_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r30 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r30.onPageIndexClicked(ctx_r30.currentPageIndex));
    });
    \u0275\u0275elementStart(1, "a", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r29 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", "active");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r29.currentPageIndex + 1);
  }
}
function CountriesComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 63);
    \u0275\u0275listener("click", function CountriesComponent_ng_container_42_Template_li_click_1_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r32 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r32.onPageIndexClicked(0));
    });
    \u0275\u0275elementStart(2, "a", 64);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 63);
    \u0275\u0275listener("click", function CountriesComponent_ng_container_42_Template_li_click_4_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r34 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r34.onPageIndexClicked(1));
    });
    \u0275\u0275elementStart(5, "a", 64);
    \u0275\u0275text(6, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CountriesComponent_ng_container_42_li_7_Template, 2, 0, "li", 25)(8, CountriesComponent_ng_container_42_li_8_Template, 3, 2, "li", 65);
    \u0275\u0275elementStart(9, "li");
    \u0275\u0275text(10, "\xA0...\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li", 63);
    \u0275\u0275listener("click", function CountriesComponent_ng_container_42_Template_li_click_11_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r35 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r35.onPageIndexClicked(ctx_r35.pages.length - 2));
    });
    \u0275\u0275elementStart(12, "a", 64);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li", 63);
    \u0275\u0275listener("click", function CountriesComponent_ng_container_42_Template_li_click_14_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r36 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r36.onPageIndexClicked(ctx_r36.pages.length - 1));
    });
    \u0275\u0275elementStart(15, "a", 64);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c42, ctx_r6.currentPageIndex == 0));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c42, ctx_r6.currentPageIndex == 1));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c42, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.pages.length - 1);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c42, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.pages.length);
  }
}
function CountriesComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Country Name can't be blank");
    \u0275\u0275elementEnd();
  }
}
function CountriesComponent_span_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Country Name can't be blank");
    \u0275\u0275elementEnd();
  }
}
var _c52 = (a0, a1) => ({
  "is-invalid": a0,
  "is-valid": a1
});
var CountriesComponent = /* @__PURE__ */ (() => {
  const _CountriesComponent = class _CountriesComponent {
    constructor(countriesService, formBuilder) {
      this.countriesService = countriesService;
      this.formBuilder = formBuilder;
      this.countries = [];
      this.showingLoading = false;
      this.newformSubmitted = false;
      this.editformSubmitted = false;
      this.deleteCountry = new Country();
      this.searchBy = "countryName";
      this.searchText = "";
      this.currentPageIndex = 0;
      this.pages = [];
      this.pageSize = 7;
      this.sortBy = "countryName";
      this.sortOrder = "ASC";
    }
    ngOnInit() {
      this.countriesService.getCountries().subscribe({
        next: (response) => {
          this.countries = response;
          this.showingLoading = false;
          this.calculateNoOfPages();
        }
      });
      this.newForm = this.formBuilder.group({
        countryID: this.formBuilder.control(null),
        countryName: this.formBuilder.control(null, [Validators.required])
      });
      this.editForm = this.formBuilder.group({
        countryID: this.formBuilder.control(null),
        countryName: this.formBuilder.control(null, [Validators.required])
      });
    }
    calculateNoOfPages() {
      let filterPipe = new FilterPipe();
      var resultProjects = filterPipe.transform(this.countries, this.searchBy, this.searchText);
      var noOfPages = Math.ceil(resultProjects.length / this.pageSize);
      this.pages = [];
      for (let i = 0; i < noOfPages; i++) {
        this.pages.push({
          pageIndex: i
        });
      }
      this.currentPageIndex = 0;
    }
    onPageIndexClicked(pageIndex) {
      if (pageIndex >= 0 && pageIndex < this.pages.length) {
        this.currentPageIndex = pageIndex;
      }
    }
    onNewClick(event) {
      this.newForm.reset({
        countryID: 0
      });
      setTimeout(() => {
        this.defaultTextBox_New.nativeElement.focus();
      }, 100);
    }
    onSaveClick() {
      this.newformSubmitted = true;
      if (this.newForm.valid) {
        this.countriesService.insertCountry(this.newForm.value).subscribe({
          next: (response) => {
            var p = new Country();
            p.countryID = response.countryID;
            p.countryName = response.countryName;
            this.countries.push(p);
            this.newForm.reset();
            this.newFormCancel.nativeElement.click();
            this.calculateNoOfPages();
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    }
    onEditClick(event, country) {
      this.editForm.reset();
      setTimeout(() => {
        this.editForm.patchValue(country);
        this.editIndex = this.countries.indexOf(country);
        this.defaultTextBox_Edit.nativeElement.focus();
      }, 100);
    }
    onUpdateClick() {
      this.editformSubmitted = true;
      if (this.editForm.valid) {
        this.countriesService.updateCountry(this.editForm.value).subscribe({
          next: (response) => {
            this.countries[this.editIndex] = response;
            this.editForm.reset();
            this.editFormCancel.nativeElement.click();
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    }
    onDeleteClick(event, country) {
      this.deleteCountry.countryID = country.countryID;
      this.deleteCountry.countryName = country.countryName;
      this.deleteIndex = this.countries.indexOf(country);
    }
    onDeleteConfirmClick() {
      this.countriesService.deleteCountry(this.deleteCountry.countryID).subscribe({
        next: (response) => {
          this.countries.splice(this.deleteIndex, 1);
          this.deleteCountry = new Country();
          this.calculateNoOfPages();
        },
        error: (err) => {
        }
      });
    }
    onSearchTextChange(event) {
      this.calculateNoOfPages();
    }
  };
  _CountriesComponent.\u0275fac = function CountriesComponent_Factory(t) {
    return new (t || _CountriesComponent)(\u0275\u0275directiveInject(CountriesService), \u0275\u0275directiveInject(FormBuilder));
  };
  _CountriesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CountriesComponent,
    selectors: [["app-countries"]],
    viewQuery: function CountriesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
        \u0275\u0275viewQuery(_c13, 5);
        \u0275\u0275viewQuery(_c23, 5);
        \u0275\u0275viewQuery(_c32, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultTextBox_New = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultTextBox_Edit = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.newFormCancel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editFormCancel = _t.first);
      }
    },
    decls: 117,
    vars: 34,
    consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size: 24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-bs-toggle", "modal", "data-bs-target", "#newCountryModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "countryName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newCountryModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewCountryName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewCountryName", "placeholder", "Country Name", "name", "CountryName", "formControlName", "countryName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-bs-dismiss", "modal", "id", "newCountryFormCancel", "type", "button", 1, "btn", "btn-warning"], ["newFormCancel", ""], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editCountryModal", 1, "modal"], ["for", "txtEditCountryName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditCountryName", "placeholder", "Country Name", "name", "CountryName", "formControlName", "countryName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-bs-dismiss", "modal", "id", "editCountryFormCancel", "type", "button", 1, "btn", "btn-warning"], ["editFormCancel", ""], ["role", "dialog", "id", "deleteCountryModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteCountryName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteCountryName", "placeholder", "Country Name", "name", "CountryName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-bs-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-bs-toggle", "modal", "data-bs-target", "#editCountryModal", 1, "btn", "btn-info", 3, "click"], ["data-bs-toggle", "modal", "data-bs-target", "#deleteCountryModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]],
    template: function CountriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5");
        \u0275\u0275text(1, " Countries ");
        \u0275\u0275template(2, CountriesComponent_i_2_Template, 1, 0, "i", 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function CountriesComponent_Template_button_click_7_listener($event) {
          return ctx.onNewClick($event);
        });
        \u0275\u0275text(8, " Create Country ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "label", 6);
        \u0275\u0275text(10, "Search by:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "select", 8);
        \u0275\u0275listener("ngModelChange", function CountriesComponent_Template_select_ngModelChange_12_listener($event) {
          return ctx.searchBy = $event;
        });
        \u0275\u0275elementStart(13, "option", 9);
        \u0275\u0275text(14, "Country Name");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "label", 10);
        \u0275\u0275text(16, "Search:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 7)(18, "div", 11)(19, "input", 12);
        \u0275\u0275listener("ngModelChange", function CountriesComponent_Template_input_ngModelChange_19_listener($event) {
          return ctx.searchText = $event;
        })("keyup", function CountriesComponent_Template_input_keyup_19_listener($event) {
          return ctx.onSearchTextChange($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(20, "div", 2)(21, "div", 1)(22, "div", 13)(23, "table", 14)(24, "tr", 15)(25, "th");
        \u0275\u0275text(26, " Country Name ");
        \u0275\u0275template(27, CountriesComponent_i_27_Template, 1, 0, "i", 16)(28, CountriesComponent_i_28_Template, 1, 0, "i", 17)(29, CountriesComponent_i_29_Template, 1, 0, "i", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th", 19);
        \u0275\u0275text(31, "Actions");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(32, CountriesComponent_tr_32_Template, 9, 1, "tr", 20);
        \u0275\u0275pipe(33, "paging");
        \u0275\u0275pipe(34, "sort");
        \u0275\u0275pipe(35, "filter");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 21)(37, "ul", 22)(38, "li", 23);
        \u0275\u0275listener("click", function CountriesComponent_Template_li_click_38_listener() {
          return ctx.onPageIndexClicked(ctx.currentPageIndex - 1);
        });
        \u0275\u0275elementStart(39, "a", 24);
        \u0275\u0275text(40, "Prev");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, CountriesComponent_ng_container_41_Template, 2, 1, "ng-container", 25)(42, CountriesComponent_ng_container_42_Template, 17, 16, "ng-container", 25);
        \u0275\u0275elementStart(43, "li", 23);
        \u0275\u0275listener("click", function CountriesComponent_Template_li_click_43_listener() {
          return ctx.onPageIndexClicked(ctx.currentPageIndex + 1);
        });
        \u0275\u0275elementStart(44, "a", 24);
        \u0275\u0275text(45, "Next");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(46, "form", 26)(47, "div", 27)(48, "div", 28)(49, "div", 29)(50, "div", 30)(51, "div", 31);
        \u0275\u0275text(52, "New Country");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "button", 32)(54, "span");
        \u0275\u0275text(55, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 33)(57, "div", 3)(58, "label", 34);
        \u0275\u0275text(59, "Country Name *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 35);
        \u0275\u0275element(61, "input", 36, 37);
        \u0275\u0275template(63, CountriesComponent_span_63_Template, 2, 0, "span", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "div", 39)(65, "button", 40, 41);
        \u0275\u0275text(67, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "button", 42);
        \u0275\u0275listener("click", function CountriesComponent_Template_button_click_68_listener() {
          return ctx.onSaveClick();
        });
        \u0275\u0275text(69, "Save");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(70, "form", 26)(71, "div", 43)(72, "div", 28)(73, "div", 29)(74, "div", 30)(75, "div", 31);
        \u0275\u0275text(76, "Edit Country");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "button", 32)(78, "span");
        \u0275\u0275text(79, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "div", 33)(81, "div", 3)(82, "label", 44);
        \u0275\u0275text(83, "Country Name *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 35);
        \u0275\u0275element(85, "input", 45, 46);
        \u0275\u0275template(87, CountriesComponent_span_87_Template, 2, 0, "span", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "div", 39)(89, "button", 47, 48);
        \u0275\u0275text(91, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "button", 42);
        \u0275\u0275listener("click", function CountriesComponent_Template_button_click_92_listener() {
          return ctx.onUpdateClick();
        });
        \u0275\u0275text(93, " Update ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(94, "form")(95, "div", 49)(96, "div", 28)(97, "div", 29)(98, "div", 30)(99, "div", 31);
        \u0275\u0275text(100, "Delete Country");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "button", 32)(102, "span");
        \u0275\u0275text(103, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(104, "div", 33)(105, "div", 50);
        \u0275\u0275text(106, "Are you sure to delete this Country?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 3)(108, "label", 51);
        \u0275\u0275text(109, "Country Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div", 35)(111, "input", 52);
        \u0275\u0275listener("ngModelChange", function CountriesComponent_Template_input_ngModelChange_111_listener($event) {
          return ctx.deleteCountry.countryName = $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(112, "div", 39)(113, "button", 53);
        \u0275\u0275text(114, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "button", 54);
        \u0275\u0275listener("click", function CountriesComponent_Template_button_click_115_listener() {
          return ctx.onDeleteConfirmClick();
        });
        \u0275\u0275text(116, " Delete ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_10_0;
        let tmp_11_0;
        let tmp_13_0;
        let tmp_14_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showingLoading);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngModel", ctx.searchBy);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.searchText);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.sortBy != "countryName");
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.sortBy == "countryName" && ctx.sortOrder == "ASC");
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.sortBy == "countryName" && ctx.sortOrder == "DESC");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(33, 16, \u0275\u0275pipeBind3(34, 20, \u0275\u0275pipeBind3(35, 24, ctx.countries, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.pages.length <= 10);
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.pages.length > 10);
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.newForm);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c52, ((tmp_10_0 = ctx.newForm.get("countryName")) == null ? null : tmp_10_0.invalid) && (((tmp_10_0 = ctx.newForm.get("countryName")) == null ? null : tmp_10_0.dirty) || ((tmp_10_0 = ctx.newForm.get("countryName")) == null ? null : tmp_10_0.touched) || ctx.newformSubmitted), ((tmp_10_0 = ctx.newForm.get("countryName")) == null ? null : tmp_10_0.valid) && (((tmp_10_0 = ctx.newForm.get("countryName")) == null ? null : tmp_10_0.dirty) || ((tmp_10_0 = ctx.newForm.get("countryName")) == null ? null : tmp_10_0.touched) || ctx.newformSubmitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ((tmp_11_0 = ctx.newForm.get("countryName")) == null ? null : tmp_11_0.invalid) && (((tmp_11_0 = ctx.newForm.get("countryName")) == null ? null : tmp_11_0.dirty) || ((tmp_11_0 = ctx.newForm.get("countryName")) == null ? null : tmp_11_0.touched) || ctx.newformSubmitted) && ((tmp_11_0 = ctx.newForm.get("countryName")) == null ? null : tmp_11_0.errors["required"]));
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.editForm);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(31, _c52, ((tmp_13_0 = ctx.editForm.get("countryName")) == null ? null : tmp_13_0.invalid) && (((tmp_13_0 = ctx.editForm.get("countryName")) == null ? null : tmp_13_0.dirty) || ((tmp_13_0 = ctx.editForm.get("countryName")) == null ? null : tmp_13_0.touched) || ctx.editformSubmitted), ((tmp_13_0 = ctx.editForm.get("countryName")) == null ? null : tmp_13_0.valid) && (((tmp_13_0 = ctx.editForm.get("countryName")) == null ? null : tmp_13_0.dirty) || ((tmp_13_0 = ctx.editForm.get("countryName")) == null ? null : tmp_13_0.touched) || ctx.editformSubmitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ((tmp_14_0 = ctx.editForm.get("countryName")) == null ? null : tmp_14_0.invalid) && (((tmp_14_0 = ctx.editForm.get("countryName")) == null ? null : tmp_14_0.dirty) || ((tmp_14_0 = ctx.editForm.get("countryName")) == null ? null : tmp_14_0.touched) || ctx.editformSubmitted) && ((tmp_14_0 = ctx.editForm.get("countryName")) == null ? null : tmp_14_0.errors["required"]));
        \u0275\u0275advance(24);
        \u0275\u0275property("ngModel", ctx.deleteCountry.countryName);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, FormGroupDirective, FormControlName, FilterPipe, PagingPipe, SortPipe],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let CountriesComponent2 = _CountriesComponent;
  return CountriesComponent2;
})();

// src/app/admin/components/client-locations/client-locations.component.ts
var _c05 = ["defaultTextBox_New"];
var _c14 = ["defaultTextBox_Edit"];
var _c24 = ["newClientLocationFormCancel"];
var _c33 = ["editClientLocationFormCancel"];
function ClientLocationsComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 55);
  }
}
function ClientLocationsComponent_i_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 56);
    \u0275\u0275listener("click", function ClientLocationsComponent_i_27_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r13 = \u0275\u0275nextContext();
      ctx_r13.sortBy = "clientLocationName";
      return \u0275\u0275resetView(ctx_r13.sortOrder = "ASC");
    });
    \u0275\u0275elementEnd();
  }
}
function ClientLocationsComponent_i_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 57);
    \u0275\u0275listener("click", function ClientLocationsComponent_i_28_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.sortOrder = "DESC");
    });
    \u0275\u0275elementEnd();
  }
}
function ClientLocationsComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 58);
    \u0275\u0275listener("click", function ClientLocationsComponent_i_29_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r17 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r17.sortOrder = "ASC");
    });
    \u0275\u0275elementEnd();
  }
}
function ClientLocationsComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 59)(4, "button", 60);
    \u0275\u0275listener("click", function ClientLocationsComponent_tr_32_Template_button_click_4_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r22);
      const clientLocation_r19 = restoredCtx.$implicit;
      const ctx_r21 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r21.onEditClick($event, clientLocation_r19));
    });
    \u0275\u0275text(5, " Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\xA0 ");
    \u0275\u0275elementStart(7, "button", 61);
    \u0275\u0275listener("click", function ClientLocationsComponent_tr_32_Template_button_click_7_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r22);
      const clientLocation_r19 = restoredCtx.$implicit;
      const ctx_r23 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r23.onDeleteClick($event, clientLocation_r19));
    });
    \u0275\u0275text(8, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const clientLocation_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(clientLocation_r19.clientLocationName);
  }
}
var _c43 = (a0) => ({
  active: a0
});
function ClientLocationsComponent_ng_container_41_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63);
    \u0275\u0275listener("click", function ClientLocationsComponent_ng_container_41_li_1_Template_li_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r27);
      const page_r25 = restoredCtx.$implicit;
      const ctx_r26 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r26.onPageIndexClicked(page_r25.pageIndex));
    });
    \u0275\u0275elementStart(1, "a", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r25 = ctx.$implicit;
    const ctx_r24 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c43, page_r25.pageIndex == ctx_r24.currentPageIndex));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r25.pageIndex + 1);
  }
}
function ClientLocationsComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClientLocationsComponent_ng_container_41_li_1_Template, 3, 4, "li", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("ngForOf", ctx_r5.pages);
  }
}
function ClientLocationsComponent_ng_container_42_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1, " \xA0...\xA0 ");
    \u0275\u0275elementEnd();
  }
}
function ClientLocationsComponent_ng_container_42_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63);
    \u0275\u0275listener("click", function ClientLocationsComponent_ng_container_42_li_8_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r30 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r30.onPageIndexClicked(ctx_r30.currentPageIndex));
    });
    \u0275\u0275elementStart(1, "a", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r29 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", "active");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r29.currentPageIndex + 1);
  }
}
function ClientLocationsComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 63);
    \u0275\u0275listener("click", function ClientLocationsComponent_ng_container_42_Template_li_click_1_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r32 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r32.onPageIndexClicked(0));
    });
    \u0275\u0275elementStart(2, "a", 64);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 63);
    \u0275\u0275listener("click", function ClientLocationsComponent_ng_container_42_Template_li_click_4_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r34 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r34.onPageIndexClicked(1));
    });
    \u0275\u0275elementStart(5, "a", 64);
    \u0275\u0275text(6, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ClientLocationsComponent_ng_container_42_li_7_Template, 2, 0, "li", 25)(8, ClientLocationsComponent_ng_container_42_li_8_Template, 3, 2, "li", 65);
    \u0275\u0275elementStart(9, "li");
    \u0275\u0275text(10, "\xA0...\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li", 63);
    \u0275\u0275listener("click", function ClientLocationsComponent_ng_container_42_Template_li_click_11_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r35 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r35.onPageIndexClicked(ctx_r35.pages.length - 2));
    });
    \u0275\u0275elementStart(12, "a", 64);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li", 63);
    \u0275\u0275listener("click", function ClientLocationsComponent_ng_container_42_Template_li_click_14_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r36 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r36.onPageIndexClicked(ctx_r36.pages.length - 1));
    });
    \u0275\u0275elementStart(15, "a", 64);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c43, ctx_r6.currentPageIndex == 0));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c43, ctx_r6.currentPageIndex == 1));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c43, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.pages.length - 1);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c43, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.pages.length);
  }
}
function ClientLocationsComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Client Location Name can't be blank");
    \u0275\u0275elementEnd();
  }
}
function ClientLocationsComponent_span_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Client Location Name can't be blank");
    \u0275\u0275elementEnd();
  }
}
var _c53 = (a0, a1) => ({
  "is-invalid": a0,
  "is-valid": a1
});
var ClientLocationsComponent = /* @__PURE__ */ (() => {
  const _ClientLocationsComponent = class _ClientLocationsComponent {
    constructor(clientLocationsService, formBuilder) {
      this.clientLocationsService = clientLocationsService;
      this.formBuilder = formBuilder;
      this.clientLocations = [];
      this.showLoading = true;
      this.deleteClientLocation = new ClientLocation();
      this.searchBy = "clientLocationName";
      this.searchText = "";
      this.currentPageIndex = 0;
      this.pages = [];
      this.pageSize = 7;
      this.sortBy = "clientLocationName";
      this.sortOrder = "ASC";
      this.newForm = null;
      this.editForm = null;
      this.defaultTextBox_New = null;
      this.defaultTextBox_Edit = null;
    }
    ngOnInit() {
      this.clientLocationsService.getClientLocations().subscribe((response) => {
        this.clientLocations = response;
        this.showLoading = false;
        this.calculateNoOfPages();
      });
      this.newForm = this.formBuilder.group({
        clientLocationID: this.formBuilder.control(null),
        clientLocationName: this.formBuilder.control(null, [Validators.required])
      });
      this.editForm = this.formBuilder.group({
        clientLocationID: this.formBuilder.control(null),
        clientLocationName: this.formBuilder.control(null, [Validators.required])
      });
    }
    calculateNoOfPages() {
      let filterPipe = new FilterPipe();
      var noOfPages = Math.ceil(filterPipe.transform(this.clientLocations, this.searchBy, this.searchText).length / this.pageSize);
      this.pages = [];
      for (let i = 0; i < noOfPages; i++) {
        this.pages.push({
          pageIndex: i
        });
      }
      this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
      if (ind >= 0 && ind < this.pages.length) {
        this.currentPageIndex = ind;
      }
    }
    onNewClick(event) {
      this.newForm.reset({
        clientLocationID: 0
      });
      setTimeout(() => {
        this.defaultTextBox_New.nativeElement.focus();
      }, 100);
    }
    onSaveClick() {
      if (this.newForm.valid) {
        this.clientLocationsService.insertClientLocation(this.newForm.value).subscribe({
          next: (response) => {
            var p = new ClientLocation();
            p.clientLocationID = response.clientLocationID;
            p.clientLocationName = response.clientLocationName;
            this.clientLocations.push(p);
            this.newForm.reset();
            this.newClientLocationFormCancel.nativeElement.click();
            this.calculateNoOfPages();
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    }
    onEditClick(event, clientLocation) {
      this.editForm.reset();
      setTimeout(() => {
        this.editForm.patchValue(clientLocation);
        this.editIndex = this.clientLocations.indexOf(clientLocation);
        this.defaultTextBox_Edit.nativeElement.focus();
      }, 100);
    }
    onUpdateClick() {
      if (this.editForm.valid) {
        this.clientLocationsService.updateClientLocation(this.editForm.value).subscribe({
          next: (response) => {
            this.clientLocations[this.editIndex] = response;
            this.editForm.reset();
            this.editClientLocationFormCancel.nativeElement.click();
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    }
    onDeleteClick(event, clientLocation) {
      this.deleteClientLocation.clientLocationID = clientLocation.clientLocationID;
      this.deleteClientLocation.clientLocationName = clientLocation.clientLocationName;
      this.deleteIndex = this.clientLocations.indexOf(clientLocation);
    }
    onDeleteConfirmClick() {
      this.clientLocationsService.deleteClientLocation(this.deleteClientLocation.clientLocationID).subscribe({
        next: (response) => {
          this.clientLocations.splice(this.deleteIndex, 1);
          this.deleteClientLocation.clientLocationID = null;
          this.deleteClientLocation.clientLocationName = null;
          this.calculateNoOfPages();
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
    onSearchTextChange(event) {
      this.calculateNoOfPages();
    }
  };
  _ClientLocationsComponent.\u0275fac = function ClientLocationsComponent_Factory(t) {
    return new (t || _ClientLocationsComponent)(\u0275\u0275directiveInject(ClientLocationService), \u0275\u0275directiveInject(FormBuilder));
  };
  _ClientLocationsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ClientLocationsComponent,
    selectors: [["app-client-locations"]],
    viewQuery: function ClientLocationsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
        \u0275\u0275viewQuery(_c14, 5);
        \u0275\u0275viewQuery(_c24, 5);
        \u0275\u0275viewQuery(_c33, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultTextBox_New = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultTextBox_Edit = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.newClientLocationFormCancel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editClientLocationFormCancel = _t.first);
      }
    },
    decls: 117,
    vars: 34,
    consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size: 24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-bs-toggle", "modal", "data-bs-target", "#newClientLocationModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "clientLocationName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newClientLocationModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewClientLocationName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "formControlName", "clientLocationName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-bs-dismiss", "modal", "id", "newClientLocationFormCancel", "type", "button", 1, "btn", "btn-warning"], ["newClientLocationFormCancel", ""], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editClientLocationModal", 1, "modal"], ["for", "txtEditClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "formControlName", "clientLocationName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-bs-dismiss", "modal", "id", "editClientLocationFormCancel", "type", "button", 1, "btn", "btn-warning"], ["editClientLocationFormCancel", ""], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-bs-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-bs-toggle", "modal", "data-bs-target", "#editClientLocationModal", 1, "btn", "btn-info", 3, "click"], ["data-bs-toggle", "modal", "data-bs-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]],
    template: function ClientLocationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5");
        \u0275\u0275text(1, " Client Locations ");
        \u0275\u0275template(2, ClientLocationsComponent_i_2_Template, 1, 0, "i", 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function ClientLocationsComponent_Template_button_click_7_listener($event) {
          return ctx.onNewClick($event);
        });
        \u0275\u0275text(8, " Create Client Location ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "label", 6);
        \u0275\u0275text(10, "Search by:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "select", 8);
        \u0275\u0275listener("ngModelChange", function ClientLocationsComponent_Template_select_ngModelChange_12_listener($event) {
          return ctx.searchBy = $event;
        });
        \u0275\u0275elementStart(13, "option", 9);
        \u0275\u0275text(14, "Client Location Name");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "label", 10);
        \u0275\u0275text(16, "Search:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 7)(18, "div", 11)(19, "input", 12);
        \u0275\u0275listener("ngModelChange", function ClientLocationsComponent_Template_input_ngModelChange_19_listener($event) {
          return ctx.searchText = $event;
        })("keyup", function ClientLocationsComponent_Template_input_keyup_19_listener($event) {
          return ctx.onSearchTextChange($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(20, "div", 2)(21, "div", 1)(22, "div", 13)(23, "table", 14)(24, "tr", 15)(25, "th");
        \u0275\u0275text(26, " Client Location Name ");
        \u0275\u0275template(27, ClientLocationsComponent_i_27_Template, 1, 0, "i", 16)(28, ClientLocationsComponent_i_28_Template, 1, 0, "i", 17)(29, ClientLocationsComponent_i_29_Template, 1, 0, "i", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th", 19);
        \u0275\u0275text(31, "Actions");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(32, ClientLocationsComponent_tr_32_Template, 9, 1, "tr", 20);
        \u0275\u0275pipe(33, "paging");
        \u0275\u0275pipe(34, "sort");
        \u0275\u0275pipe(35, "filter");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 21)(37, "ul", 22)(38, "li", 23);
        \u0275\u0275listener("click", function ClientLocationsComponent_Template_li_click_38_listener() {
          return ctx.onPageIndexClicked(ctx.currentPageIndex - 1);
        });
        \u0275\u0275elementStart(39, "a", 24);
        \u0275\u0275text(40, "Prev");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, ClientLocationsComponent_ng_container_41_Template, 2, 1, "ng-container", 25)(42, ClientLocationsComponent_ng_container_42_Template, 17, 16, "ng-container", 25);
        \u0275\u0275elementStart(43, "li", 23);
        \u0275\u0275listener("click", function ClientLocationsComponent_Template_li_click_43_listener() {
          return ctx.onPageIndexClicked(ctx.currentPageIndex + 1);
        });
        \u0275\u0275elementStart(44, "a", 24);
        \u0275\u0275text(45, "Next");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(46, "form", 26)(47, "div", 27)(48, "div", 28)(49, "div", 29)(50, "div", 30)(51, "div", 31);
        \u0275\u0275text(52, "New Client Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "button", 32)(54, "span");
        \u0275\u0275text(55, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 33)(57, "div", 3)(58, "label", 34);
        \u0275\u0275text(59, "Client Location Name *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 35);
        \u0275\u0275element(61, "input", 36, 37);
        \u0275\u0275template(63, ClientLocationsComponent_span_63_Template, 2, 0, "span", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "div", 39)(65, "button", 40, 41);
        \u0275\u0275text(67, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "button", 42);
        \u0275\u0275listener("click", function ClientLocationsComponent_Template_button_click_68_listener() {
          return ctx.onSaveClick();
        });
        \u0275\u0275text(69, "Save");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(70, "form", 26)(71, "div", 43)(72, "div", 28)(73, "div", 29)(74, "div", 30)(75, "div", 31);
        \u0275\u0275text(76, "Edit Client Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "button", 32)(78, "span");
        \u0275\u0275text(79, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "div", 33)(81, "div", 3)(82, "label", 44);
        \u0275\u0275text(83, "Client Location Name *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 35);
        \u0275\u0275element(85, "input", 45, 46);
        \u0275\u0275template(87, ClientLocationsComponent_span_87_Template, 2, 0, "span", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "div", 39)(89, "button", 47, 48);
        \u0275\u0275text(91, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "button", 42);
        \u0275\u0275listener("click", function ClientLocationsComponent_Template_button_click_92_listener() {
          return ctx.onUpdateClick();
        });
        \u0275\u0275text(93, " Update ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(94, "form")(95, "div", 49)(96, "div", 28)(97, "div", 29)(98, "div", 30)(99, "div", 31);
        \u0275\u0275text(100, "Delete Client Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "button", 32)(102, "span");
        \u0275\u0275text(103, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(104, "div", 33)(105, "div", 50);
        \u0275\u0275text(106, " Are you sure to delete this Client Location? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 3)(108, "label", 51);
        \u0275\u0275text(109, "Client Location Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div", 35)(111, "input", 52);
        \u0275\u0275listener("ngModelChange", function ClientLocationsComponent_Template_input_ngModelChange_111_listener($event) {
          return ctx.deleteClientLocation.clientLocationName = $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(112, "div", 39)(113, "button", 53);
        \u0275\u0275text(114, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "button", 54);
        \u0275\u0275listener("click", function ClientLocationsComponent_Template_button_click_115_listener() {
          return ctx.onDeleteConfirmClick();
        });
        \u0275\u0275text(116, " Delete ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showLoading);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngModel", ctx.searchBy);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.searchText);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.sortBy != "clientLocationName");
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.sortBy == "clientLocationName" && ctx.sortOrder == "ASC");
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.sortBy == "clientLocationName" && ctx.sortOrder == "DESC");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(33, 16, \u0275\u0275pipeBind3(34, 20, \u0275\u0275pipeBind3(35, 24, ctx.clientLocations, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.pages.length <= 10);
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.pages.length > 10);
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.newForm);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c53, ctx.newForm.get("clientLocationName").invalid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.submitted), ctx.newForm.get("clientLocationName").valid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.submitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.newForm.get("clientLocationName").invalid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.submitted) && (ctx.newForm.get("clientLocationName").errors == null ? null : ctx.newForm.get("clientLocationName").errors.required));
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.editForm);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(31, _c53, ctx.editForm.get("clientLocationName").invalid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.submitted), ctx.editForm.get("clientLocationName").valid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.submitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.editForm.get("clientLocationName").invalid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.submitted) && (ctx.editForm.get("clientLocationName").errors == null ? null : ctx.editForm.get("clientLocationName").errors.required));
        \u0275\u0275advance(24);
        \u0275\u0275property("ngModel", ctx.deleteClientLocation.clientLocationName);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, FormGroupDirective, FormControlName, FilterPipe, PagingPipe, SortPipe],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let ClientLocationsComponent2 = _ClientLocationsComponent;
  return ClientLocationsComponent2;
})();

// src/app/models/task-priority.model.ts
var TaskPriority = class {
  constructor() {
    this.taskPriorityID = null;
    this.taskPriorityName = null;
  }
};

// src/app/admin/components/task-priorities/task-priorities.component.ts
var _c06 = ["defaultTextBox_New"];
var _c15 = ["defaultTextBox_Edit"];
var _c25 = ["newTaskPriorityFormCancel"];
var _c34 = ["editTaskPriorityFormCancel"];
function TaskPrioritiesComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 55);
  }
}
function TaskPrioritiesComponent_i_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 56);
    \u0275\u0275listener("click", function TaskPrioritiesComponent_i_27_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r13 = \u0275\u0275nextContext();
      ctx_r13.sortBy = "taskPriorityName";
      return \u0275\u0275resetView(ctx_r13.sortOrder = "ASC");
    });
    \u0275\u0275elementEnd();
  }
}
function TaskPrioritiesComponent_i_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 57);
    \u0275\u0275listener("click", function TaskPrioritiesComponent_i_28_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.sortOrder = "DESC");
    });
    \u0275\u0275elementEnd();
  }
}
function TaskPrioritiesComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 58);
    \u0275\u0275listener("click", function TaskPrioritiesComponent_i_29_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r17 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r17.sortOrder = "ASC");
    });
    \u0275\u0275elementEnd();
  }
}
function TaskPrioritiesComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 59)(4, "button", 60);
    \u0275\u0275listener("click", function TaskPrioritiesComponent_tr_32_Template_button_click_4_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r22);
      const taskPriority_r19 = restoredCtx.$implicit;
      const ctx_r21 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r21.onEditClick($event, taskPriority_r19));
    });
    \u0275\u0275text(5, " Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\xA0 ");
    \u0275\u0275elementStart(7, "button", 61);
    \u0275\u0275listener("click", function TaskPrioritiesComponent_tr_32_Template_button_click_7_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r22);
      const taskPriority_r19 = restoredCtx.$implicit;
      const ctx_r23 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r23.onDeleteClick($event, taskPriority_r19));
    });
    \u0275\u0275text(8, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const taskPriority_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(taskPriority_r19.taskPriorityName);
  }
}
var _c44 = (a0) => ({
  active: a0
});
function TaskPrioritiesComponent_ng_container_41_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63);
    \u0275\u0275listener("click", function TaskPrioritiesComponent_ng_container_41_li_1_Template_li_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r27);
      const page_r25 = restoredCtx.$implicit;
      const ctx_r26 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r26.onPageIndexClicked(page_r25.pageIndex));
    });
    \u0275\u0275elementStart(1, "a", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r25 = ctx.$implicit;
    const ctx_r24 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c44, page_r25.pageIndex == ctx_r24.currentPageIndex));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r25.pageIndex + 1);
  }
}
function TaskPrioritiesComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TaskPrioritiesComponent_ng_container_41_li_1_Template, 3, 4, "li", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("ngForOf", ctx_r5.pages);
  }
}
function TaskPrioritiesComponent_ng_container_42_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1, " \xA0...\xA0 ");
    \u0275\u0275elementEnd();
  }
}
function TaskPrioritiesComponent_ng_container_42_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63);
    \u0275\u0275listener("click", function TaskPrioritiesComponent_ng_container_42_li_8_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r30 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r30.onPageIndexClicked(ctx_r30.currentPageIndex));
    });
    \u0275\u0275elementStart(1, "a", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r29 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", "active");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r29.currentPageIndex + 1);
  }
}
function TaskPrioritiesComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 63);
    \u0275\u0275listener("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_1_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r32 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r32.onPageIndexClicked(0));
    });
    \u0275\u0275elementStart(2, "a", 64);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 63);
    \u0275\u0275listener("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_4_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r34 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r34.onPageIndexClicked(1));
    });
    \u0275\u0275elementStart(5, "a", 64);
    \u0275\u0275text(6, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, TaskPrioritiesComponent_ng_container_42_li_7_Template, 2, 0, "li", 25)(8, TaskPrioritiesComponent_ng_container_42_li_8_Template, 3, 2, "li", 65);
    \u0275\u0275elementStart(9, "li");
    \u0275\u0275text(10, "\xA0...\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li", 63);
    \u0275\u0275listener("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_11_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r35 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r35.onPageIndexClicked(ctx_r35.pages.length - 2));
    });
    \u0275\u0275elementStart(12, "a", 64);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li", 63);
    \u0275\u0275listener("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_14_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r36 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r36.onPageIndexClicked(ctx_r36.pages.length - 1));
    });
    \u0275\u0275elementStart(15, "a", 64);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c44, ctx_r6.currentPageIndex == 0));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c44, ctx_r6.currentPageIndex == 1));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c44, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.pages.length - 1);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c44, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.pages.length);
  }
}
function TaskPrioritiesComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Task Priority Name can't be blank");
    \u0275\u0275elementEnd();
  }
}
function TaskPrioritiesComponent_span_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Task Priority Name can't be blank");
    \u0275\u0275elementEnd();
  }
}
var _c54 = (a0, a1) => ({
  "is-invalid": a0,
  "is-valid": a1
});
var TaskPrioritiesComponent = /* @__PURE__ */ (() => {
  const _TaskPrioritiesComponent = class _TaskPrioritiesComponent {
    //Constructor
    constructor(taskPrioritiesService, formBuilder) {
      this.taskPrioritiesService = taskPrioritiesService;
      this.formBuilder = formBuilder;
      this.taskPriorities = [];
      this.showLoading = true;
      this.deleteTaskPriority = new TaskPriority();
      this.editIndex = null;
      this.deleteIndex = null;
      this.searchBy = "taskPriorityName";
      this.searchText = "";
      this.currentPageIndex = 0;
      this.pages = [];
      this.pageSize = 7;
      this.sortBy = "taskPriorityName";
      this.sortOrder = "ASC";
      this.newForm = null;
      this.editForm = null;
      this.defaultTextBox_New = null;
      this.defaultTextBox_Edit = null;
    }
    ngOnInit() {
      this.taskPrioritiesService.getTaskPriorities().subscribe((response) => {
        this.taskPriorities = response;
        this.showLoading = false;
        this.calculateNoOfPages();
      });
      this.newForm = this.formBuilder.group({
        taskPriorityID: this.formBuilder.control(null),
        taskPriorityName: this.formBuilder.control(null, [Validators.required])
      });
      this.editForm = this.formBuilder.group({
        taskPriorityID: this.formBuilder.control(null),
        taskPriorityName: this.formBuilder.control(null, [Validators.required])
      });
    }
    calculateNoOfPages() {
      let filterPipe = new FilterPipe();
      var noOfPages = Math.ceil(filterPipe.transform(this.taskPriorities, this.searchBy, this.searchText).length / this.pageSize);
      this.pages = [];
      for (let i = 0; i < noOfPages; i++) {
        this.pages.push({
          pageIndex: i
        });
      }
      this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
      if (ind >= 0 && ind < this.pages.length) {
        this.currentPageIndex = ind;
      }
    }
    onNewClick(event) {
      this.newForm.reset({
        taskPriorityID: 0
      });
      setTimeout(() => {
        this.defaultTextBox_New.nativeElement.focus();
      }, 100);
    }
    onSaveClick() {
      if (this.newForm.valid) {
        this.taskPrioritiesService.insertTaskPriority(this.newForm.value).subscribe({
          next: (response) => {
            var p = new TaskPriority();
            p.taskPriorityID = response.taskPriorityID;
            p.taskPriorityName = response.taskPriorityName;
            this.taskPriorities.push(p);
            this.newForm.reset();
            this.newTaskPriorityFormCancel.nativeElement.click();
            this.calculateNoOfPages();
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    }
    onEditClick(event, taskPriority) {
      this.editForm.reset();
      setTimeout(() => {
        this.editForm.patchValue(taskPriority);
        this.editIndex = this.taskPriorities.indexOf(taskPriority);
        this.defaultTextBox_Edit.nativeElement.focus();
      }, 100);
    }
    onUpdateClick() {
      if (this.editForm.valid) {
        this.taskPrioritiesService.updateTaskPriority(this.editForm.value).subscribe({
          next: (response) => {
            this.taskPriorities[this.editIndex] = response;
            this.editForm.reset();
            this.editTaskPriorityFormCancel.nativeElement.click();
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    }
    onDeleteClick(event, taskPriority) {
      this.deleteTaskPriority.taskPriorityID = taskPriority.taskPriorityID;
      this.deleteTaskPriority.taskPriorityName = taskPriority.taskPriorityName;
      this.deleteIndex = this.taskPriorities.indexOf(taskPriority);
    }
    onDeleteConfirmClick() {
      this.taskPrioritiesService.deleteTaskPriority(this.deleteTaskPriority.taskPriorityID).subscribe({
        next: (response) => {
          this.taskPriorities.splice(this.deleteIndex, 1);
          this.deleteTaskPriority.taskPriorityID = null;
          this.deleteTaskPriority.taskPriorityName = null;
          this.calculateNoOfPages();
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
    onSearchTextChange(event) {
      this.calculateNoOfPages();
    }
  };
  _TaskPrioritiesComponent.\u0275fac = function TaskPrioritiesComponent_Factory(t) {
    return new (t || _TaskPrioritiesComponent)(\u0275\u0275directiveInject(TaskPrioritiesService), \u0275\u0275directiveInject(FormBuilder));
  };
  _TaskPrioritiesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TaskPrioritiesComponent,
    selectors: [["app-task-priorities"]],
    viewQuery: function TaskPrioritiesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 5);
        \u0275\u0275viewQuery(_c15, 5);
        \u0275\u0275viewQuery(_c25, 5);
        \u0275\u0275viewQuery(_c34, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultTextBox_New = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultTextBox_Edit = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.newTaskPriorityFormCancel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editTaskPriorityFormCancel = _t.first);
      }
    },
    decls: 117,
    vars: 34,
    consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size: 24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-bs-toggle", "modal", "data-bs-target", "#newTaskPriorityModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "taskPriorityName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newTaskPriorityModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewTaskPriorityName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewTaskPriorityName", "placeholder", "Task Priority Name", "name", "TaskPriorityName", "formControlName", "taskPriorityName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-bs-dismiss", "modal", "id", "newTaskPriorityFormCancel", "type", "button", 1, "btn", "btn-warning"], ["newTaskPriorityFormCancel", ""], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editTaskPriorityModal", 1, "modal"], ["for", "txtEditTaskPriorityName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTaskPriorityName", "placeholder", "Task Priority Name", "name", "TaskPriorityName", "formControlName", "taskPriorityName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-bs-dismiss", "modal", "id", "editTaskPriorityFormCancel", "type", "button", 1, "btn", "btn-warning"], ["editTaskPriorityFormCancel", ""], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteTaskPriorityName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteTaskPriorityName", "placeholder", "Task Priority Name", "name", "TaskPriorityName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-bs-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-bs-toggle", "modal", "data-bs-target", "#editTaskPriorityModal", 1, "btn", "btn-info", 3, "click"], ["data-bs-toggle", "modal", "data-bs-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]],
    template: function TaskPrioritiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5");
        \u0275\u0275text(1, " Task Priorities ");
        \u0275\u0275template(2, TaskPrioritiesComponent_i_2_Template, 1, 0, "i", 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function TaskPrioritiesComponent_Template_button_click_7_listener($event) {
          return ctx.onNewClick($event);
        });
        \u0275\u0275text(8, " Create Task Priority ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "label", 6);
        \u0275\u0275text(10, "Search by:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "select", 8);
        \u0275\u0275listener("ngModelChange", function TaskPrioritiesComponent_Template_select_ngModelChange_12_listener($event) {
          return ctx.searchBy = $event;
        });
        \u0275\u0275elementStart(13, "option", 9);
        \u0275\u0275text(14, "Task Priority Name");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "label", 10);
        \u0275\u0275text(16, "Search:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 7)(18, "div", 11)(19, "input", 12);
        \u0275\u0275listener("ngModelChange", function TaskPrioritiesComponent_Template_input_ngModelChange_19_listener($event) {
          return ctx.searchText = $event;
        })("keyup", function TaskPrioritiesComponent_Template_input_keyup_19_listener($event) {
          return ctx.onSearchTextChange($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(20, "div", 2)(21, "div", 1)(22, "div", 13)(23, "table", 14)(24, "tr", 15)(25, "th");
        \u0275\u0275text(26, " Task Priority Name ");
        \u0275\u0275template(27, TaskPrioritiesComponent_i_27_Template, 1, 0, "i", 16)(28, TaskPrioritiesComponent_i_28_Template, 1, 0, "i", 17)(29, TaskPrioritiesComponent_i_29_Template, 1, 0, "i", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th", 19);
        \u0275\u0275text(31, "Actions");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(32, TaskPrioritiesComponent_tr_32_Template, 9, 1, "tr", 20);
        \u0275\u0275pipe(33, "paging");
        \u0275\u0275pipe(34, "sort");
        \u0275\u0275pipe(35, "filter");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 21)(37, "ul", 22)(38, "li", 23);
        \u0275\u0275listener("click", function TaskPrioritiesComponent_Template_li_click_38_listener() {
          return ctx.onPageIndexClicked(ctx.currentPageIndex - 1);
        });
        \u0275\u0275elementStart(39, "a", 24);
        \u0275\u0275text(40, "Prev");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, TaskPrioritiesComponent_ng_container_41_Template, 2, 1, "ng-container", 25)(42, TaskPrioritiesComponent_ng_container_42_Template, 17, 16, "ng-container", 25);
        \u0275\u0275elementStart(43, "li", 23);
        \u0275\u0275listener("click", function TaskPrioritiesComponent_Template_li_click_43_listener() {
          return ctx.onPageIndexClicked(ctx.currentPageIndex + 1);
        });
        \u0275\u0275elementStart(44, "a", 24);
        \u0275\u0275text(45, "Next");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(46, "form", 26)(47, "div", 27)(48, "div", 28)(49, "div", 29)(50, "div", 30)(51, "div", 31);
        \u0275\u0275text(52, "New Task Priority");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "button", 32)(54, "span");
        \u0275\u0275text(55, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 33)(57, "div", 3)(58, "label", 34);
        \u0275\u0275text(59, "Task Priority Name *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 35);
        \u0275\u0275element(61, "input", 36, 37);
        \u0275\u0275template(63, TaskPrioritiesComponent_span_63_Template, 2, 0, "span", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "div", 39)(65, "button", 40, 41);
        \u0275\u0275text(67, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "button", 42);
        \u0275\u0275listener("click", function TaskPrioritiesComponent_Template_button_click_68_listener() {
          return ctx.onSaveClick();
        });
        \u0275\u0275text(69, "Save");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(70, "form", 26)(71, "div", 43)(72, "div", 28)(73, "div", 29)(74, "div", 30)(75, "div", 31);
        \u0275\u0275text(76, "Edit Task Priority");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "button", 32)(78, "span");
        \u0275\u0275text(79, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "div", 33)(81, "div", 3)(82, "label", 44);
        \u0275\u0275text(83, "Task Priority Name *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 35);
        \u0275\u0275element(85, "input", 45, 46);
        \u0275\u0275template(87, TaskPrioritiesComponent_span_87_Template, 2, 0, "span", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "div", 39)(89, "button", 47, 48);
        \u0275\u0275text(91, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "button", 42);
        \u0275\u0275listener("click", function TaskPrioritiesComponent_Template_button_click_92_listener() {
          return ctx.onUpdateClick();
        });
        \u0275\u0275text(93, " Update ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(94, "form")(95, "div", 49)(96, "div", 28)(97, "div", 29)(98, "div", 30)(99, "div", 31);
        \u0275\u0275text(100, "Delete Task Priority");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "button", 32)(102, "span");
        \u0275\u0275text(103, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(104, "div", 33)(105, "div", 50);
        \u0275\u0275text(106, " Are you sure to delete this Task Priority? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 3)(108, "label", 51);
        \u0275\u0275text(109, "Task Priority Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div", 35)(111, "input", 52);
        \u0275\u0275listener("ngModelChange", function TaskPrioritiesComponent_Template_input_ngModelChange_111_listener($event) {
          return ctx.deleteTaskPriority.taskPriorityName = $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(112, "div", 39)(113, "button", 53);
        \u0275\u0275text(114, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "button", 54);
        \u0275\u0275listener("click", function TaskPrioritiesComponent_Template_button_click_115_listener() {
          return ctx.onDeleteConfirmClick();
        });
        \u0275\u0275text(116, " Delete ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showLoading);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngModel", ctx.searchBy);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.searchText);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.sortBy != "taskPriorityName");
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.sortBy == "taskPriorityName" && ctx.sortOrder == "ASC");
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.sortBy == "taskPriorityName" && ctx.sortOrder == "DESC");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(33, 16, \u0275\u0275pipeBind3(34, 20, \u0275\u0275pipeBind3(35, 24, ctx.taskPriorities, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.pages.length <= 10);
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.pages.length > 10);
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.newForm);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c54, ctx.newForm.get("taskPriorityName").invalid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.submitted), ctx.newForm.get("taskPriorityName").valid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.submitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.newForm.get("taskPriorityName").invalid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.submitted) && (ctx.newForm.get("taskPriorityName").errors == null ? null : ctx.newForm.get("taskPriorityName").errors.required));
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.editForm);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(31, _c54, ctx.editForm.get("taskPriorityName").invalid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.submitted), ctx.editForm.get("taskPriorityName").valid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.submitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.editForm.get("taskPriorityName").invalid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.submitted) && (ctx.editForm.get("taskPriorityName").errors == null ? null : ctx.editForm.get("taskPriorityName").errors.required));
        \u0275\u0275advance(24);
        \u0275\u0275property("ngModel", ctx.deleteTaskPriority.taskPriorityName);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, FormGroupDirective, FormControlName, FilterPipe, PagingPipe, SortPipe],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let TaskPrioritiesComponent2 = _TaskPrioritiesComponent;
  return TaskPrioritiesComponent2;
})();

// src/app/admin/components/task-status/task-status.component.ts
var _c07 = ["defaultTextBox_New"];
var _c16 = ["defaultTextBox_Edit"];
var _c26 = ["newTaskStatusFormCancel"];
var _c35 = ["editTaskStatusFormCancel"];
function TaskStatusComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 55);
  }
}
function TaskStatusComponent_i_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 56);
    \u0275\u0275listener("click", function TaskStatusComponent_i_27_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r13 = \u0275\u0275nextContext();
      ctx_r13.sortBy = "taskStatusName";
      return \u0275\u0275resetView(ctx_r13.sortOrder = "ASC");
    });
    \u0275\u0275elementEnd();
  }
}
function TaskStatusComponent_i_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 57);
    \u0275\u0275listener("click", function TaskStatusComponent_i_28_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.sortOrder = "DESC");
    });
    \u0275\u0275elementEnd();
  }
}
function TaskStatusComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 58);
    \u0275\u0275listener("click", function TaskStatusComponent_i_29_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r17 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r17.sortOrder = "ASC");
    });
    \u0275\u0275elementEnd();
  }
}
function TaskStatusComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 59)(4, "button", 60);
    \u0275\u0275listener("click", function TaskStatusComponent_tr_32_Template_button_click_4_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r22);
      const taskStatus_r19 = restoredCtx.$implicit;
      const ctx_r21 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r21.onEditClick($event, taskStatus_r19));
    });
    \u0275\u0275text(5, " Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\xA0 ");
    \u0275\u0275elementStart(7, "button", 61);
    \u0275\u0275listener("click", function TaskStatusComponent_tr_32_Template_button_click_7_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r22);
      const taskStatus_r19 = restoredCtx.$implicit;
      const ctx_r23 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r23.onDeleteClick($event, taskStatus_r19));
    });
    \u0275\u0275text(8, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const taskStatus_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(taskStatus_r19.taskStatusName);
  }
}
var _c45 = (a0) => ({
  active: a0
});
function TaskStatusComponent_ng_container_41_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63);
    \u0275\u0275listener("click", function TaskStatusComponent_ng_container_41_li_1_Template_li_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r27);
      const page_r25 = restoredCtx.$implicit;
      const ctx_r26 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r26.onPageIndexClicked(page_r25.pageIndex));
    });
    \u0275\u0275elementStart(1, "a", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r25 = ctx.$implicit;
    const ctx_r24 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c45, page_r25.pageIndex == ctx_r24.currentPageIndex));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r25.pageIndex + 1);
  }
}
function TaskStatusComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TaskStatusComponent_ng_container_41_li_1_Template, 3, 4, "li", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("ngForOf", ctx_r5.pages);
  }
}
function TaskStatusComponent_ng_container_42_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1, " \xA0...\xA0 ");
    \u0275\u0275elementEnd();
  }
}
function TaskStatusComponent_ng_container_42_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63);
    \u0275\u0275listener("click", function TaskStatusComponent_ng_container_42_li_8_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r30 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r30.onPageIndexClicked(ctx_r30.currentPageIndex));
    });
    \u0275\u0275elementStart(1, "a", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r29 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", "active");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r29.currentPageIndex + 1);
  }
}
function TaskStatusComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 63);
    \u0275\u0275listener("click", function TaskStatusComponent_ng_container_42_Template_li_click_1_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r32 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r32.onPageIndexClicked(0));
    });
    \u0275\u0275elementStart(2, "a", 64);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li", 63);
    \u0275\u0275listener("click", function TaskStatusComponent_ng_container_42_Template_li_click_4_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r34 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r34.onPageIndexClicked(1));
    });
    \u0275\u0275elementStart(5, "a", 64);
    \u0275\u0275text(6, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, TaskStatusComponent_ng_container_42_li_7_Template, 2, 0, "li", 25)(8, TaskStatusComponent_ng_container_42_li_8_Template, 3, 2, "li", 65);
    \u0275\u0275elementStart(9, "li");
    \u0275\u0275text(10, "\xA0...\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li", 63);
    \u0275\u0275listener("click", function TaskStatusComponent_ng_container_42_Template_li_click_11_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r35 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r35.onPageIndexClicked(ctx_r35.pages.length - 2));
    });
    \u0275\u0275elementStart(12, "a", 64);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li", 63);
    \u0275\u0275listener("click", function TaskStatusComponent_ng_container_42_Template_li_click_14_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r36 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r36.onPageIndexClicked(ctx_r36.pages.length - 1));
    });
    \u0275\u0275elementStart(15, "a", 64);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c45, ctx_r6.currentPageIndex == 0));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c45, ctx_r6.currentPageIndex == 1));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c45, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.pages.length - 1);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c45, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.pages.length);
  }
}
function TaskStatusComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Task Status Name can't be blank");
    \u0275\u0275elementEnd();
  }
}
function TaskStatusComponent_span_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Task Status Name can't be blank");
    \u0275\u0275elementEnd();
  }
}
var _c55 = (a0, a1) => ({
  "is-invalid": a0,
  "is-valid": a1
});
var TaskStatusComponent = /* @__PURE__ */ (() => {
  const _TaskStatusComponent = class _TaskStatusComponent {
    //Constructor
    constructor(taskStatusesService, formBuilder) {
      this.taskStatusesService = taskStatusesService;
      this.formBuilder = formBuilder;
      this.taskStatuses = [];
      this.showLoading = true;
      this.deleteTaskStatus = new TaskStatus();
      this.editIndex = 0;
      this.deleteIndex = 0;
      this.searchBy = "taskStatusName";
      this.searchText = "";
      this.currentPageIndex = 0;
      this.pages = [];
      this.pageSize = 7;
      this.sortBy = "taskStatusName";
      this.sortOrder = "ASC";
      this.newFormSubmitted = false;
      this.editFormSubmitted = false;
    }
    ngOnInit() {
      this.taskStatusesService.getTaskStatuses().subscribe((response) => {
        this.taskStatuses = response;
        this.showLoading = false;
        this.calculateNoOfPages();
      });
      this.newForm = this.formBuilder.group({
        taskStatusID: this.formBuilder.control(null),
        taskStatusName: this.formBuilder.control(null, [Validators.required])
      });
      this.editForm = this.formBuilder.group({
        taskStatusID: this.formBuilder.control(null),
        taskStatusName: this.formBuilder.control(null, [Validators.required])
      });
    }
    calculateNoOfPages() {
      let filterPipe = new FilterPipe();
      var noOfPages = Math.ceil(filterPipe.transform(this.taskStatuses, this.searchBy, this.searchText).length / this.pageSize);
      this.pages = [];
      for (let i = 0; i < noOfPages; i++) {
        this.pages.push({
          pageIndex: i
        });
      }
      this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
      if (ind >= 0 && ind < this.pages.length) {
        this.currentPageIndex = ind;
      }
    }
    onNewClick(event) {
      this.newForm.reset({
        taskStatusID: 0
      });
      setTimeout(() => {
        this.defaultTextBox_New.nativeElement.focus();
      }, 100);
    }
    onSaveClick() {
      this.newFormSubmitted = true;
      if (this.newForm.valid) {
        this.taskStatusesService.insertTaskStatus(this.newForm.value).subscribe((response) => {
          var p = new TaskStatus();
          p.taskStatusID = response.taskStatusID;
          p.taskStatusName = response.taskStatusName;
          this.taskStatuses.push(p);
          this.newForm.reset();
          this.newTaskStatusFormCancel.nativeElement.click();
          this.calculateNoOfPages();
        }, (error) => {
          console.log(error);
        });
      }
    }
    onEditClick(event, taskStatus) {
      this.editForm.reset();
      setTimeout(() => {
        this.editForm.patchValue(taskStatus);
        this.editIndex = this.taskStatuses.indexOf(taskStatus);
        this.defaultTextBox_Edit.nativeElement.focus();
      }, 100);
    }
    onUpdateClick() {
      this.editFormSubmitted = true;
      if (this.editForm.valid) {
        this.taskStatusesService.updateTaskStatus(this.editForm.value).subscribe((response) => {
          this.taskStatuses[this.editIndex] = response;
          this.editForm.reset();
          this.editTaskStatusFormCancel.nativeElement.click();
        }, (error) => {
          console.log(error);
        });
      }
    }
    onDeleteClick(event, taskStatus) {
      this.deleteTaskStatus.taskStatusID = taskStatus.taskStatusID;
      this.deleteTaskStatus.taskStatusName = taskStatus.taskStatusName;
      this.deleteIndex = this.taskStatuses.indexOf(taskStatus);
    }
    onDeleteConfirmClick() {
      this.taskStatusesService.deleteTaskStatus(this.deleteTaskStatus.taskStatusID).subscribe({
        next: (response) => {
          this.taskStatuses.splice(this.deleteIndex, 1);
          this.deleteTaskStatus = new TaskStatus();
          this.calculateNoOfPages();
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
    onSearchTextChange(event) {
      this.calculateNoOfPages();
    }
  };
  _TaskStatusComponent.\u0275fac = function TaskStatusComponent_Factory(t) {
    return new (t || _TaskStatusComponent)(\u0275\u0275directiveInject(TaskStatusesService), \u0275\u0275directiveInject(FormBuilder));
  };
  _TaskStatusComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TaskStatusComponent,
    selectors: [["app-task-status"]],
    viewQuery: function TaskStatusComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c07, 5);
        \u0275\u0275viewQuery(_c16, 5);
        \u0275\u0275viewQuery(_c26, 5);
        \u0275\u0275viewQuery(_c35, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultTextBox_New = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultTextBox_Edit = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.newTaskStatusFormCancel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editTaskStatusFormCancel = _t.first);
      }
    },
    decls: 117,
    vars: 34,
    consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size: 24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-bs-toggle", "modal", "data-bs-target", "#newTaskStatusModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "taskStatusName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newTaskStatusModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewTaskStatusName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewTaskStatusName", "placeholder", "Task Status Name", "name", "TaskStatusName", "formControlName", "taskStatusName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-bs-dismiss", "modal", "id", "newTaskStatusFormCancel", "type", "button", 1, "btn", "btn-warning"], ["newTaskStatusFormCancel", ""], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editTaskStatusModal", 1, "modal"], ["for", "txtEditTaskStatusName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTaskStatusName", "placeholder", "Task Status Name", "name", "TaskStatusName", "formControlName", "taskStatusName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-bs-dismiss", "modal", "id", "editTaskStatusFormCancel", "type", "button", 1, "btn", "btn-warning"], ["editTaskStatusFormCancel", ""], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteTaskStatusName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteTaskStatusName", "placeholder", "Task Status Name", "name", "TaskStatusName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-bs-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-bs-toggle", "modal", "data-bs-target", "#editTaskStatusModal", 1, "btn", "btn-info", 3, "click"], ["data-bs-toggle", "modal", "data-bs-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]],
    template: function TaskStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5");
        \u0275\u0275text(1, " Task Statuses ");
        \u0275\u0275template(2, TaskStatusComponent_i_2_Template, 1, 0, "i", 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function TaskStatusComponent_Template_button_click_7_listener($event) {
          return ctx.onNewClick($event);
        });
        \u0275\u0275text(8, " Create Task Status ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "label", 6);
        \u0275\u0275text(10, "Search by:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "select", 8);
        \u0275\u0275listener("ngModelChange", function TaskStatusComponent_Template_select_ngModelChange_12_listener($event) {
          return ctx.searchBy = $event;
        });
        \u0275\u0275elementStart(13, "option", 9);
        \u0275\u0275text(14, "Task Status Name");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "label", 10);
        \u0275\u0275text(16, "Search:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 7)(18, "div", 11)(19, "input", 12);
        \u0275\u0275listener("ngModelChange", function TaskStatusComponent_Template_input_ngModelChange_19_listener($event) {
          return ctx.searchText = $event;
        })("keyup", function TaskStatusComponent_Template_input_keyup_19_listener($event) {
          return ctx.onSearchTextChange($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(20, "div", 2)(21, "div", 1)(22, "div", 13)(23, "table", 14)(24, "tr", 15)(25, "th");
        \u0275\u0275text(26, " Task Status Name ");
        \u0275\u0275template(27, TaskStatusComponent_i_27_Template, 1, 0, "i", 16)(28, TaskStatusComponent_i_28_Template, 1, 0, "i", 17)(29, TaskStatusComponent_i_29_Template, 1, 0, "i", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th", 19);
        \u0275\u0275text(31, "Actions");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(32, TaskStatusComponent_tr_32_Template, 9, 1, "tr", 20);
        \u0275\u0275pipe(33, "paging");
        \u0275\u0275pipe(34, "sort");
        \u0275\u0275pipe(35, "filter");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 21)(37, "ul", 22)(38, "li", 23);
        \u0275\u0275listener("click", function TaskStatusComponent_Template_li_click_38_listener() {
          return ctx.onPageIndexClicked(ctx.currentPageIndex - 1);
        });
        \u0275\u0275elementStart(39, "a", 24);
        \u0275\u0275text(40, "Prev");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, TaskStatusComponent_ng_container_41_Template, 2, 1, "ng-container", 25)(42, TaskStatusComponent_ng_container_42_Template, 17, 16, "ng-container", 25);
        \u0275\u0275elementStart(43, "li", 23);
        \u0275\u0275listener("click", function TaskStatusComponent_Template_li_click_43_listener() {
          return ctx.onPageIndexClicked(ctx.currentPageIndex + 1);
        });
        \u0275\u0275elementStart(44, "a", 24);
        \u0275\u0275text(45, "Next");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(46, "form", 26)(47, "div", 27)(48, "div", 28)(49, "div", 29)(50, "div", 30)(51, "div", 31);
        \u0275\u0275text(52, "New Task Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "button", 32)(54, "span");
        \u0275\u0275text(55, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 33)(57, "div", 3)(58, "label", 34);
        \u0275\u0275text(59, "Task Status Name *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 35);
        \u0275\u0275element(61, "input", 36, 37);
        \u0275\u0275template(63, TaskStatusComponent_span_63_Template, 2, 0, "span", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "div", 39)(65, "button", 40, 41);
        \u0275\u0275text(67, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "button", 42);
        \u0275\u0275listener("click", function TaskStatusComponent_Template_button_click_68_listener() {
          return ctx.onSaveClick();
        });
        \u0275\u0275text(69, "Save");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(70, "form", 26)(71, "div", 43)(72, "div", 28)(73, "div", 29)(74, "div", 30)(75, "div", 31);
        \u0275\u0275text(76, "Edit Task Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "button", 32)(78, "span");
        \u0275\u0275text(79, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "div", 33)(81, "div", 3)(82, "label", 44);
        \u0275\u0275text(83, "Task Status Name *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 35);
        \u0275\u0275element(85, "input", 45, 46);
        \u0275\u0275template(87, TaskStatusComponent_span_87_Template, 2, 0, "span", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "div", 39)(89, "button", 47, 48);
        \u0275\u0275text(91, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "button", 42);
        \u0275\u0275listener("click", function TaskStatusComponent_Template_button_click_92_listener() {
          return ctx.onUpdateClick();
        });
        \u0275\u0275text(93, " Update ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(94, "form")(95, "div", 49)(96, "div", 28)(97, "div", 29)(98, "div", 30)(99, "div", 31);
        \u0275\u0275text(100, "Delete Task Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "button", 32)(102, "span");
        \u0275\u0275text(103, "\xD7");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(104, "div", 33)(105, "div", 50);
        \u0275\u0275text(106, " Are you sure to delete this Task Status? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 3)(108, "label", 51);
        \u0275\u0275text(109, "Task Status Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div", 35)(111, "input", 52);
        \u0275\u0275listener("ngModelChange", function TaskStatusComponent_Template_input_ngModelChange_111_listener($event) {
          return ctx.deleteTaskStatus.taskStatusName = $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(112, "div", 39)(113, "button", 53);
        \u0275\u0275text(114, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "button", 54);
        \u0275\u0275listener("click", function TaskStatusComponent_Template_button_click_115_listener() {
          return ctx.onDeleteConfirmClick();
        });
        \u0275\u0275text(116, " Delete ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_10_0;
        let tmp_11_0;
        let tmp_13_0;
        let tmp_14_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showLoading);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngModel", ctx.searchBy);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.searchText);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.sortBy != "taskStatusName");
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.sortBy == "taskStatusName" && ctx.sortOrder == "ASC");
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.sortBy == "taskStatusName" && ctx.sortOrder == "DESC");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(33, 16, \u0275\u0275pipeBind3(34, 20, \u0275\u0275pipeBind3(35, 24, ctx.taskStatuses, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.pages.length <= 10);
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.pages.length > 10);
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.newForm);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c55, ((tmp_10_0 = ctx.newForm.get("taskStatusName")) == null ? null : tmp_10_0.invalid) && (((tmp_10_0 = ctx.newForm.get("taskStatusName")) == null ? null : tmp_10_0.dirty) || ((tmp_10_0 = ctx.newForm.get("taskStatusName")) == null ? null : tmp_10_0.touched) || ctx.newFormSubmitted), ((tmp_10_0 = ctx.newForm.get("taskStatusName")) == null ? null : tmp_10_0.valid) && (((tmp_10_0 = ctx.newForm.get("taskStatusName")) == null ? null : tmp_10_0.dirty) || ((tmp_10_0 = ctx.newForm.get("taskStatusName")) == null ? null : tmp_10_0.touched) || ctx.newFormSubmitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ((tmp_11_0 = ctx.newForm.get("taskStatusName")) == null ? null : tmp_11_0.invalid) && (((tmp_11_0 = ctx.newForm.get("taskStatusName")) == null ? null : tmp_11_0.dirty) || ((tmp_11_0 = ctx.newForm.get("taskStatusName")) == null ? null : tmp_11_0.touched) || ctx.newFormSubmitted) && ((tmp_11_0 = ctx.newForm.get("taskStatusName")) == null ? null : tmp_11_0.errors["required"]));
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.editForm);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(31, _c55, ((tmp_13_0 = ctx.editForm.get("taskStatusName")) == null ? null : tmp_13_0.invalid) && (((tmp_13_0 = ctx.editForm.get("taskStatusName")) == null ? null : tmp_13_0.dirty) || ((tmp_13_0 = ctx.editForm.get("taskStatusName")) == null ? null : tmp_13_0.touched) || ctx.editFormSubmitted), ((tmp_13_0 = ctx.editForm.get("taskStatusName")) == null ? null : tmp_13_0.valid) && (((tmp_13_0 = ctx.editForm.get("taskStatusName")) == null ? null : tmp_13_0.dirty) || ((tmp_13_0 = ctx.editForm.get("taskStatusName")) == null ? null : tmp_13_0.touched) || ctx.editFormSubmitted)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ((tmp_14_0 = ctx.editForm.get("taskStatusName")) == null ? null : tmp_14_0.invalid) && (((tmp_14_0 = ctx.editForm.get("taskStatusName")) == null ? null : tmp_14_0.dirty) || ((tmp_14_0 = ctx.editForm.get("taskStatusName")) == null ? null : tmp_14_0.touched) || ctx.editFormSubmitted) && ((tmp_14_0 = ctx.editForm.get("taskStatusName")) == null ? null : tmp_14_0.errors["required"]));
        \u0275\u0275advance(24);
        \u0275\u0275property("ngModel", ctx.deleteTaskStatus.taskStatusName);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, FormGroupDirective, FormControlName, FilterPipe, PagingPipe, SortPipe],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let TaskStatusComponent2 = _TaskStatusComponent;
  return TaskStatusComponent2;
})();

// src/app/admin/components/masters/masters.component.ts
var _c08 = (a0) => ({
  active: a0
});
function MastersComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275listener("click", function MastersComponent_a_5_Template_a_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r5);
      const masterMenuItem_r3 = restoredCtx.$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.menuItemClick(masterMenuItem_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const masterMenuItem_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c08, ctx_r0.activeItem == masterMenuItem_r3.itemName));
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(masterMenuItem_r3.displayName);
  }
}
function MastersComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10)(1, "a", 11);
    \u0275\u0275listener("click", function MastersComponent_li_8_Template_a_click_1_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r8);
      const tab_r6 = restoredCtx.$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.activeItem = tab_r6.itemName);
    });
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275listener("click", function MastersComponent_li_8_Template_span_click_3_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r8);
      const tab_r6 = restoredCtx.$implicit;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.onCloseClick(tab_r6));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("href", "#" + tab_r6.itemName, \u0275\u0275sanitizeUrl)("ngClass", \u0275\u0275pureFunction1(3, _c08, ctx_r1.activeItem == tab_r6.itemName));
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1("", tab_r6.displayName, " ");
  }
}
function MastersComponent_div_10_ng_template_2_Template(rf, ctx) {
}
function MastersComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275template(2, MastersComponent_div_10_ng_template_2_Template, 0, 0, "ng-template", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", tab_r10.itemName)("ngClass", \u0275\u0275pureFunction1(2, _c08, ctx_r2.activeItem == tab_r10.itemName));
  }
}
var MastersComponent = /* @__PURE__ */ (() => {
  const _MastersComponent = class _MastersComponent {
    constructor() {
      this.masterMenuItems = [{
        itemName: "Countries",
        displayName: "Countries",
        component: CountriesComponent
      }, {
        itemName: "ClientLocations",
        displayName: "Client Locations",
        component: ClientLocationsComponent
      }, {
        itemName: "TaskPriorities",
        displayName: "Task Priorities",
        component: TaskPrioritiesComponent
      }, {
        itemName: "TaskStatus",
        displayName: "Task Status",
        component: TaskStatusComponent
      }];
      this.tabs = [];
      this.componentLoaders = null;
    }
    ngOnInit() {
    }
    menuItemClick(clickedMasterMenuItem) {
      this.activeItem = clickedMasterMenuItem.itemName;
      let matchingTabs = this.tabs.filter((tab) => {
        return tab.itemName == clickedMasterMenuItem.itemName;
      });
      if (matchingTabs.length == 0) {
        this.tabs.push({
          itemName: clickedMasterMenuItem.itemName,
          displayName: clickedMasterMenuItem.displayName
        });
        setTimeout(() => {
          const componentLoadersArray = this.componentLoaders.toArray();
          const viewContainerRef = componentLoadersArray[this.tabs.length - 1].viewContainerRef;
          viewContainerRef.clear();
          var componentRef = viewContainerRef.createComponent(clickedMasterMenuItem.component);
          this.tabs[this.tabs.length - 1].viewContainerRef = viewContainerRef;
          if (clickedMasterMenuItem.component.name == "_CountriesComponent") {
            var componentInstance = componentRef.instance;
          }
        }, 100);
      }
    }
    onCloseClick(clickedTab) {
      clickedTab.viewContainerRef.remove();
      this.tabs.splice(this.tabs.indexOf(clickedTab), 1);
      if (this.tabs.length > 0) {
        this.activeItem = this.tabs[0].itemName;
      }
    }
  };
  _MastersComponent.\u0275fac = function MastersComponent_Factory(t) {
    return new (t || _MastersComponent)();
  };
  _MastersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MastersComponent,
    selectors: [["app-masters"]],
    viewQuery: function MastersComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(ComponentLoaderDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.componentLoaders = _t);
      }
    },
    decls: 11,
    vars: 3,
    consts: [[1, "row"], [1, "col-md-2"], [1, "list-group"], ["href", "#", "class", "list-group-item list-group-item-action", "onclick", "return false", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-md-8"], ["role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["class", "tab-pane fade-show", "role", "tabpanel", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "onclick", "return false", 1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [1, "nav-item"], ["data-bs-toggle", "tab", "role", "tab", 1, "nav-link", 3, "href", "ngClass", "click"], [1, "fa", "fa-window-close", 3, "click"], ["role", "tabpanel", 1, "tab-pane", "fade-show", 3, "id", "ngClass"], [1, "pl-md-3", "pr-md-3", "mx-auto"], ["appComponentLoader", ""]],
    template: function MastersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h5");
        \u0275\u0275text(1, "Masters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 0)(3, "div", 1)(4, "div", 2);
        \u0275\u0275template(5, MastersComponent_a_5_Template, 2, 4, "a", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "ul", 5);
        \u0275\u0275template(8, MastersComponent_li_8_Template, 4, 5, "li", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275template(10, MastersComponent_div_10_Template, 3, 4, "div", 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.masterMenuItems);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.tabs);
      }
    },
    dependencies: [NgClass, NgForOf, ComponentLoaderDirective],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let MastersComponent2 = _MastersComponent;
  return MastersComponent2;
})();

// src/app/admin/admin-routing/admin-routing.module.ts
var routes = [{
  path: "",
  canActivate: [CanActivateGuardService],
  data: {
    expectedRole: "Admin"
  },
  children: [{
    path: "dashboard",
    component: DashboardComponent
  }, {
    path: "projects",
    component: ProjectsComponent
  }, {
    path: "projects/view/:projectid",
    component: ProjectDetailsComponent
  }, {
    path: "masters",
    component: MastersComponent
  }]
}];
var AdminRoutingModule = /* @__PURE__ */ (() => {
  const _AdminRoutingModule = class _AdminRoutingModule {
  };
  _AdminRoutingModule.\u0275fac = function AdminRoutingModule_Factory(t) {
    return new (t || _AdminRoutingModule)();
  };
  _AdminRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AdminRoutingModule
  });
  _AdminRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [RouterModule.forChild(routes), RouterModule]
  });
  let AdminRoutingModule2 = _AdminRoutingModule;
  return AdminRoutingModule2;
})();

// src/app/admin/admin.module.ts
var AdminModule = /* @__PURE__ */ (() => {
  const _AdminModule = class _AdminModule {
  };
  _AdminModule.\u0275fac = function AdminModule_Factory(t) {
    return new (t || _AdminModule)();
  };
  _AdminModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AdminModule
  });
  _AdminModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DashboardService],
    imports: [SharedModule, AdminRoutingModule]
  });
  let AdminModule2 = _AdminModule;
  return AdminModule2;
})();
export {
  AdminModule
};
//# sourceMappingURL=chunk-7EUW357W.js.map
