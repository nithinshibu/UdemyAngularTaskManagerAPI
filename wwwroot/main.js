import {
  CountriesService
} from "./chunk-TG645TSC.js";
import {
  EmployeeModule
} from "./chunk-JA5NLDU7.js";
import {
  BrowserModule,
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  ElementRef,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
  JwtModule,
  LoginService,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgSelectOption,
  PreloadAllModules,
  RadioControlValueAccessor,
  Renderer2,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SelectControlValueAccessor,
  SharedModule,
  Validators,
  map,
  platformBrowser,
  tap,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XJFYB6OA.js";

// src/app/admin/about/about.component.ts
var AboutComponent = /* @__PURE__ */ (() => {
  const _AboutComponent = class _AboutComponent {
  };
  _AboutComponent.\u0275fac = function AboutComponent_Factory(t) {
    return new (t || _AboutComponent)();
  };
  _AboutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AboutComponent,
    selectors: [["about"]],
    decls: 2,
    vars: 0,
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "about works!");
        \u0275\u0275elementEnd();
      }
    },
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let AboutComponent2 = _AboutComponent;
  return AboutComponent2;
})();

// src/app/models/login-view-model.model.ts
var LoginViewModel = class {
  constructor() {
    this.userName = "";
    this.password = "";
  }
};

// src/app/directives/alert.directive.ts
var AlertDirective = /* @__PURE__ */ (() => {
  const _AlertDirective = class _AlertDirective {
    constructor(elementRef, renderer2) {
      this.elementRef = elementRef;
      this.renderer2 = renderer2;
    }
    ngOnInit() {
      this.divElement = this.renderer2.createElement("div");
      this.renderer2.setAttribute(this.divElement, "role", "alert");
      this.renderer2.setAttribute(this.divElement, "class", "alert alert-danger fade show");
      this.renderer2.setStyle(this.divElement, "transition", "transform 0.5s");
      this.spanElement = this.renderer2.createElement("span");
      this.renderer2.setAttribute(this.spanElement, "class", "message");
      this.spanText = this.renderer2.createText(this.error);
      this.renderer2.appendChild(this.spanElement, this.spanText);
      this.renderer2.appendChild(this.divElement, this.spanElement);
      this.elementRef.nativeElement.appendChild(this.divElement);
      this.title = "Please try again";
    }
    onMouseEnter(event) {
      this.renderer2.setStyle(this.divElement, "transform", "scale(1.1)");
    }
    onMouseLeave(event) {
      this.renderer2.setStyle(this.divElement, "transform", "scale(1)");
    }
  };
  _AlertDirective.\u0275fac = function AlertDirective_Factory(t) {
    return new (t || _AlertDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  _AlertDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AlertDirective,
    selectors: [["", "appAlert", ""]],
    hostVars: 1,
    hostBindings: function AlertDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseenter", function AlertDirective_mouseenter_HostBindingHandler($event) {
          return ctx.onMouseEnter($event);
        })("mouseleave", function AlertDirective_mouseleave_HostBindingHandler($event) {
          return ctx.onMouseLeave($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275hostProperty("title", ctx.title);
      }
    },
    inputs: {
      error: "error"
    }
  });
  let AlertDirective2 = _AlertDirective;
  return AlertDirective2;
})();

// src/app/components/login/login.component.ts
function LoginComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("error", ctx_r0.loginError);
  }
}
var LoginComponent = /* @__PURE__ */ (() => {
  const _LoginComponent = class _LoginComponent {
    constructor(loginService, router) {
      this.loginService = loginService;
      this.router = router;
      this.loginViewModel = new LoginViewModel();
      this.loginError = "";
    }
    ngOnInit() {
    }
    onLoginClick(event) {
      this.loginService.Login(this.loginViewModel).subscribe({
        next: (response) => {
          if (this.loginService.currentUserRole == "Admin") {
            this.router.navigate(["/admin", "dashboard"]);
          } else {
            this.router.navigate(["/employee", "tasks"]);
          }
        },
        error: (err) => {
          console.log(err);
          this.loginError = "Invalid Username or Password";
        }
      });
    }
  };
  _LoginComponent.\u0275fac = function LoginComponent_Factory(t) {
    return new (t || _LoginComponent)(\u0275\u0275directiveInject(LoginService), \u0275\u0275directiveInject(Router));
  };
  _LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _LoginComponent,
    selectors: [["app-login"]],
    decls: 22,
    vars: 3,
    consts: [[1, "row"], [1, "col-lg-6", "col-xl-5", "col-md-9", "mx-auto"], [1, "card", "mt-4"], [1, "card-header", "bg-secondary", "text-white"], ["appAlert", "", 3, "error", 4, "ngIf"], [1, "card-body"], [1, "form-group", "form-row"], ["for", "username", 1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["type", "text", "id", "username", "placeholder", "UserName", "name", "UserName", "autofocus", "autofocus", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "col-md-4", "col-form-label"], ["type", "password", "id", "password", "placeholder", "Password", "name", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer", "text-right"], [1, "btn", "btn-primary", 3, "click"], ["appAlert", "", 3, "error"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
        \u0275\u0275text(6, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, LoginComponent_div_7_Template, 1, 1, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "label", 7);
        \u0275\u0275text(11, "UserName");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "input", 9);
        \u0275\u0275listener("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.loginViewModel.userName = $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 6)(15, "label", 10);
        \u0275\u0275text(16, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 8)(18, "input", 11);
        \u0275\u0275listener("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.loginViewModel.password = $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(19, "div", 12)(20, "button", 13);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_20_listener($event) {
          return ctx.onLoginClick($event);
        });
        \u0275\u0275text(21, " Login ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.loginError);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.loginViewModel.userName);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.loginViewModel.password);
      }
    },
    dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, AlertDirective],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let LoginComponent2 = _LoginComponent;
  return LoginComponent2;
})();

// src/app/services/custom-validators.service.ts
var CustomValidatorsService = /* @__PURE__ */ (() => {
  const _CustomValidatorsService = class _CustomValidatorsService {
    constructor(loginService) {
      this.loginService = loginService;
    }
    minimumAgeValidator(minAge) {
      return (control) => {
        if (!control.value) {
          return null;
        }
        let today = /* @__PURE__ */ new Date();
        let dateOfBirth = new Date(control.value);
        let diffMilliSeconds = Math.abs(today.getTime() - dateOfBirth.getTime());
        let diffYears = diffMilliSeconds / (1e3 * 60 * 60 * 24) / 365.25;
        if (diffYears >= minAge) {
          return null;
        } else {
          return {
            minAge: {
              valid: false
            }
          };
        }
      };
    }
    compareValidator(controlToValidate, controlToCompare) {
      return (formGroup) => {
        if (!formGroup.get(controlToValidate).value) {
          return null;
        }
        if (formGroup.get(controlToValidate).value == formGroup.get(controlToCompare).value) {
          return null;
        } else {
          formGroup.get(controlToValidate).setErrors({
            compareValidator: {
              valid: false
            }
          });
          return {
            compareValidator: {
              valid: false
            }
          };
        }
      };
    }
    DuplicateEmailValidator() {
      return (control) => {
        return this.loginService.getUserByEmail(control.value).pipe(map((existingUser) => {
          if (existingUser != null) {
            control.setErrors({
              uniqueEmail: {
                valid: false
              }
            });
            return {
              uniqueEmail: {
                valid: false
              }
            };
          } else {
            return null;
          }
        }));
      };
    }
  };
  _CustomValidatorsService.\u0275fac = function CustomValidatorsService_Factory(t) {
    return new (t || _CustomValidatorsService)(\u0275\u0275inject(LoginService));
  };
  _CustomValidatorsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CustomValidatorsService,
    factory: _CustomValidatorsService.\u0275fac,
    providedIn: "root"
  });
  let CustomValidatorsService2 = _CustomValidatorsService;
  return CustomValidatorsService2;
})();

// src/app/components/sign-up/sign-up.component.ts
function SignUpComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "First Name is required");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "First Name should contain atleast 2 characters");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Last Name is required");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Last Name should contain atleast 2 characters");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Invalid email");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Email Already exists");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Mobile is required field");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Invalid Mobile Number");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Date Of Birth is required");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Age should be greater than 18");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Confirm Password is required");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "input", 40);
    \u0275\u0275elementStart(2, "label", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const gender_r19 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275property("id", gender_r19)("value", gender_r19);
    \u0275\u0275advance(1);
    \u0275\u0275property("for", gender_r19);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(gender_r19);
  }
}
function SignUpComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Gender is required");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_option_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r20 = ctx.$implicit;
    \u0275\u0275property("value", country_r20.countryID);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", country_r20.countryName, " ");
  }
}
function SignUpComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Country is required");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_div_82_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Skill Name is required");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_div_82_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Skill Name is required");
    \u0275\u0275elementEnd();
  }
}
var _c0 = (a0, a1) => ({
  "is-invalid": a0,
  "is-valid": a1
});
function SignUpComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "label");
    \u0275\u0275text(3, "Skill Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 45);
    \u0275\u0275template(5, SignUpComponent_div_82_span_5_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 46)(7, "label", 47);
    \u0275\u0275text(8, "Skill Level:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 48)(10, "option", 49);
    \u0275\u0275text(11, "Please Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 50);
    \u0275\u0275text(13, "Beginner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 51);
    \u0275\u0275text(15, "Intermediate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 52);
    \u0275\u0275text(17, "Professional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 53);
    \u0275\u0275text(19, "Expert");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, SignUpComponent_div_82_span_20_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 54)(22, "button", 55);
    \u0275\u0275listener("click", function SignUpComponent_div_82_Template_button_click_22_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r26);
      const i_r22 = restoredCtx.index;
      const ctx_r25 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r25.onRemoveClick(i_r22));
    });
    \u0275\u0275text(23, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const skill_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r18 = \u0275\u0275nextContext();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    \u0275\u0275property("formGroupName", i_r22);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c0, ((tmp_1_0 = skill_r21.get("skillName")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = skill_r21.get("skillName")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = skill_r21.get("skillName")) == null ? null : tmp_1_0.touched) || ctx_r18.formSubmitted), ((tmp_1_0 = skill_r21.get("skillName")) == null ? null : tmp_1_0.valid) && (((tmp_1_0 = skill_r21.get("skillName")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = skill_r21.get("skillName")) == null ? null : tmp_1_0.touched) || ctx_r18.formSubmitted)));
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ((tmp_2_0 = skill_r21.get("skillName")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = skill_r21.get("skillName")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = skill_r21.get("skillName")) == null ? null : tmp_2_0.touched) || ctx_r18.formSubmitted) && ((tmp_2_0 = skill_r21.get("skillName")) == null ? null : tmp_2_0.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c0, ((tmp_3_0 = skill_r21.get("skillLevel")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = skill_r21.get("skillLevel")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = skill_r21.get("skillLevel")) == null ? null : tmp_3_0.touched) || ctx_r18.formSubmitted), ((tmp_3_0 = skill_r21.get("skillLevel")) == null ? null : tmp_3_0.valid) && (((tmp_3_0 = skill_r21.get("skillLevel")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = skill_r21.get("skillLevel")) == null ? null : tmp_3_0.touched) || ctx_r18.formSubmitted)));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ((tmp_4_0 = skill_r21.get("skillLevel")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = skill_r21.get("skillLevel")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = skill_r21.get("skillLevel")) == null ? null : tmp_4_0.touched) || ctx_r18.formSubmitted) && ((tmp_4_0 = skill_r21.get("skillLevel")) == null ? null : tmp_4_0.errors["required"]));
  }
}
var SignUpComponent = /* @__PURE__ */ (() => {
  const _SignUpComponent = class _SignUpComponent {
    constructor(countriesService, formBuilder, customValidatorsService, loginService, router) {
      this.countriesService = countriesService;
      this.formBuilder = formBuilder;
      this.customValidatorsService = customValidatorsService;
      this.loginService = loginService;
      this.router = router;
      this.genders = ["Male", "Female"];
      this.countries = [];
      this.formSubmitted = false;
      this.registerError = null;
      this.canLeave = true;
    }
    ngOnInit() {
      this.countriesService.getCountries().subscribe((response) => {
        this.countries = response;
      });
      this.signUpForm = this.formBuilder.group({
        personName: this.formBuilder.group({
          firstName: [null, [Validators.required, Validators.minLength(2)]],
          lastName: [null, [Validators.required, Validators.minLength(2)]]
        }),
        email: ["", [Validators.required, Validators.email], [this.customValidatorsService.DuplicateEmailValidator()], {
          updateOn: "blur"
        }],
        mobile: [null, [Validators.required, Validators.pattern(/^[789]\d{9}$/)]],
        dateOfBirth: [null, [Validators.required, this.customValidatorsService.minimumAgeValidator(18)]],
        password: ["", [Validators.required]],
        confirmPassword: [null, [Validators.required]],
        gender: [null, [Validators.required]],
        countryID: [null, [Validators.required]],
        receiveNewsLetter: [false],
        skills: this.formBuilder.array([])
      }, {
        validators: [this.customValidatorsService.compareValidator("confirmPassword", "password")]
      });
      this.signUpForm.valueChanges.subscribe((value) => {
        this.canLeave = false;
      });
    }
    onSubmitClick() {
      this.formSubmitted = true;
      if (this.signUpForm.valid) {
        var signUpViewModel = this.signUpForm.value;
        this.loginService.Register(signUpViewModel).subscribe({
          next: (response) => {
            this.canLeave = true;
            this.router.navigate(["/employee", "tasks"]);
          },
          error: (err) => {
            console.log(err);
            this.registerError = "Unable to submit";
          }
        });
      }
    }
    onAddSkill() {
      var formGroup = this.formBuilder.group({
        skillName: [null, [Validators.required]],
        skillLevel: [null, [Validators.required]]
      });
      this.signUpForm.get("skills").push(formGroup);
    }
    onRemoveClick(index) {
      this.signUpForm.get("skills").removeAt(index);
    }
    get skillsControls() {
      return this.signUpForm.get("skills").controls;
    }
  };
  _SignUpComponent.\u0275fac = function SignUpComponent_Factory(t) {
    return new (t || _SignUpComponent)(\u0275\u0275directiveInject(CountriesService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CustomValidatorsService), \u0275\u0275directiveInject(LoginService), \u0275\u0275directiveInject(Router));
  };
  _SignUpComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SignUpComponent,
    selectors: [["app-sign-up"]],
    decls: 90,
    vars: 49,
    consts: [[1, "row"], [1, "col-md-8", "col-xl-6", "mx-auto"], [3, "formGroup", "ngSubmit"], [1, "card", "mt-1"], [1, "card-header"], [1, "card-body"], ["formGroupName", "personName", 1, "form-group", "form-row"], ["for", "firstName", 1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["type", "text", "name", "firstName", "id", "firstName", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "lastName", "id", "lastName", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], [1, "form-group", "form-row"], ["for", "email", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "email", "id", "email", "placeholder", "Email", "autocomplete", "off", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "mobile", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "mobile", "id", "mobile", "placeholder", "Mobile", "formControlName", "mobile", 1, "form-control", 3, "ngClass"], ["for", "dateOfBirth", 1, "col-md-4", "col-form-label"], ["type", "date", "name", "dateOfBirth", "id", "dateOfBirth", "placeholder", "Date Of Birth", "formControlName", "dateOfBirth", 1, "form-control", 3, "ngClass"], ["for", "password", 1, "col-md-4", "col-form-label"], ["type", "password", "name", "password", "id", "password", "placeholder", "Password", "autocomplete", "new-password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["for", "confirmPassword", 1, "col-md-4", "col-form-label"], ["type", "password", "name", "confirmPassword", "id", "confirmPassword", "placeholder", "Confirm Password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], ["for", "gender", 1, "col-md-4", "col-form-label"], ["class", "form-check-label form-check-inline", 4, "ngFor", "ngForOf"], ["for", "countryID", 1, "col-md-4", "col-form-label"], ["name", "countryID", "id", "countryID", "formControlName", "countryID", 1, "form-control"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-form-label"], ["type", "checkbox", "name", "receiveNewsLetter", "id", "receiveNewsLetter", "value", "true", "formControlName", "receiveNewsLetter", 1, "form-check-input"], ["for", "receiveNewsLetter", 1, "form-check-label"], ["formArrayName", "skills", 1, "col-md-8"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "card-footer"], [1, "btn", "btn-success", "float-right"], [1, "text-danger"], [1, "form-check-label", "form-check-inline"], ["type", "radio", "name", "gender", "formControlName", "gender", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [3, "value"], [1, "row", 3, "formGroupName"], [1, "col-md-5"], ["type", "text", "name", "skillName", "id", "skillName", "placeholder", "Skill Name", "formControlName", "skillName", 1, "form-control", 3, "ngClass"], [1, "col-md-4"], ["for", "skillLevel"], ["name", "skillLevel", "id", "skillLevel", "formControlName", "skillLevel", 1, "form-control", 3, "ngClass"], ["value", "null", "disabled", "", "hidden", ""], ["value", "Beginner"], ["value", "Intermediate"], ["value", "Professional"], ["value", "Expert"], [1, "col-md-3", 2, "display", "flex", "align-items", "flex-end"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
    template: function SignUpComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "form", 2);
        \u0275\u0275listener("ngSubmit", function SignUpComponent_Template_form_ngSubmit_2_listener() {
          return ctx.onSubmitClick();
        });
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h4");
        \u0275\u0275text(6, "Sign Up");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "label", 7);
        \u0275\u0275text(10, "First Name: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275element(12, "input", 9);
        \u0275\u0275template(13, SignUpComponent_span_13_Template, 2, 0, "span", 10)(14, SignUpComponent_span_14_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 6)(16, "label", 11);
        \u0275\u0275text(17, "Last Name: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 8);
        \u0275\u0275element(19, "input", 12);
        \u0275\u0275template(20, SignUpComponent_span_20_Template, 2, 0, "span", 10)(21, SignUpComponent_span_21_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 13)(23, "label", 14);
        \u0275\u0275text(24, "Email: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 8);
        \u0275\u0275element(26, "input", 15);
        \u0275\u0275template(27, SignUpComponent_span_27_Template, 2, 0, "span", 10)(28, SignUpComponent_span_28_Template, 2, 0, "span", 10)(29, SignUpComponent_span_29_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 13)(31, "label", 16);
        \u0275\u0275text(32, "Mobile: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 8);
        \u0275\u0275element(34, "input", 17);
        \u0275\u0275template(35, SignUpComponent_span_35_Template, 2, 0, "span", 10)(36, SignUpComponent_span_36_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 13)(38, "label", 18);
        \u0275\u0275text(39, "Date Of Birth: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 8);
        \u0275\u0275element(41, "input", 19);
        \u0275\u0275template(42, SignUpComponent_span_42_Template, 2, 0, "span", 10)(43, SignUpComponent_span_43_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 13)(45, "label", 20);
        \u0275\u0275text(46, "Password: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 8);
        \u0275\u0275element(48, "input", 21);
        \u0275\u0275template(49, SignUpComponent_span_49_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 13)(51, "label", 22);
        \u0275\u0275text(52, "Confirm Password: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 8);
        \u0275\u0275element(54, "input", 23);
        \u0275\u0275template(55, SignUpComponent_span_55_Template, 2, 0, "span", 10)(56, SignUpComponent_span_56_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 13)(58, "label", 24);
        \u0275\u0275text(59, "Gender: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 8);
        \u0275\u0275template(61, SignUpComponent_div_61_Template, 4, 4, "div", 25)(62, SignUpComponent_span_62_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 13)(64, "label", 26);
        \u0275\u0275text(65, "Country: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 8)(67, "select", 27)(68, "option", 28);
        \u0275\u0275text(69, "Please select");
        \u0275\u0275elementEnd();
        \u0275\u0275template(70, SignUpComponent_option_70_Template, 2, 2, "option", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275template(71, SignUpComponent_span_71_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 13);
        \u0275\u0275element(73, "label", 30);
        \u0275\u0275elementStart(74, "div", 8);
        \u0275\u0275element(75, "input", 31);
        \u0275\u0275elementStart(76, "label", 32);
        \u0275\u0275text(77, "Receive Newsletter: ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 13)(79, "label", 30);
        \u0275\u0275text(80, "Skills:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 33);
        \u0275\u0275template(82, SignUpComponent_div_82_Template, 24, 11, "div", 34);
        \u0275\u0275elementStart(83, "button", 35);
        \u0275\u0275listener("click", function SignUpComponent_Template_button_click_83_listener() {
          return ctx.onAddSkill();
        });
        \u0275\u0275text(84, " Add Skill ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(85, "div", 36)(86, "button", 37);
        \u0275\u0275text(87, "Create Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 38);
        \u0275\u0275text(89);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_14_0;
        let tmp_15_0;
        let tmp_16_0;
        let tmp_17_0;
        let tmp_18_0;
        let tmp_19_0;
        let tmp_20_0;
        let tmp_21_0;
        let tmp_23_0;
        let tmp_25_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.signUpForm);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c0, ((tmp_1_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_1_0.touched) || ctx.formSubmitted), ((tmp_1_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_1_0.valid) && (((tmp_1_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_1_0.touched) || ctx.formSubmitted)));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_2_0.touched) || ctx.formSubmitted) && ((tmp_2_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_2_0.errors["required"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_3_0.touched) || ctx.formSubmitted) && ((tmp_3_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_3_0.errors["minlength"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(31, _c0, ((tmp_4_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_4_0.touched) || ctx.formSubmitted), ((tmp_4_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_4_0.valid) && (((tmp_4_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_4_0.touched) || ctx.formSubmitted)));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_5_0.touched) || ctx.formSubmitted) && ((tmp_5_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_5_0.errors["required"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_6_0.touched) || ctx.formSubmitted) && ((tmp_6_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_6_0.errors["minlength"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(34, _c0, ((tmp_7_0 = ctx.signUpForm.get("email")) == null ? null : tmp_7_0.invalid) && (((tmp_7_0 = ctx.signUpForm.get("email")) == null ? null : tmp_7_0.dirty) || ((tmp_7_0 = ctx.signUpForm.get("email")) == null ? null : tmp_7_0.touched) || ctx.formSubmitted), ((tmp_7_0 = ctx.signUpForm.get("email")) == null ? null : tmp_7_0.valid) && (((tmp_7_0 = ctx.signUpForm.get("email")) == null ? null : tmp_7_0.dirty) || ((tmp_7_0 = ctx.signUpForm.get("email")) == null ? null : tmp_7_0.touched) || ctx.formSubmitted)));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.signUpForm.get("email")) == null ? null : tmp_8_0.invalid) && (((tmp_8_0 = ctx.signUpForm.get("email")) == null ? null : tmp_8_0.dirty) || ((tmp_8_0 = ctx.signUpForm.get("email")) == null ? null : tmp_8_0.touched) || ctx.formSubmitted) && ((tmp_8_0 = ctx.signUpForm.get("email")) == null ? null : tmp_8_0.errors["required"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.signUpForm.get("email")) == null ? null : tmp_9_0.invalid) && (((tmp_9_0 = ctx.signUpForm.get("email")) == null ? null : tmp_9_0.dirty) || ((tmp_9_0 = ctx.signUpForm.get("email")) == null ? null : tmp_9_0.touched) || ctx.formSubmitted) && ((tmp_9_0 = ctx.signUpForm.get("email")) == null ? null : tmp_9_0.errors["email"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.signUpForm.get("email")) == null ? null : tmp_10_0.invalid) && (((tmp_10_0 = ctx.signUpForm.get("email")) == null ? null : tmp_10_0.dirty) || ((tmp_10_0 = ctx.signUpForm.get("email")) == null ? null : tmp_10_0.touched) || ctx.formSubmitted) && ((tmp_10_0 = ctx.signUpForm.get("email")) == null ? null : tmp_10_0.errors["uniqueEmail"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(37, _c0, ((tmp_11_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_11_0.invalid) && (((tmp_11_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_11_0.dirty) || ((tmp_11_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_11_0.touched) || ctx.formSubmitted), ((tmp_11_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_11_0.valid) && (((tmp_11_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_11_0.dirty) || ((tmp_11_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_11_0.touched) || ctx.formSubmitted)));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_12_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_12_0.invalid) && (((tmp_12_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_12_0.dirty) || ((tmp_12_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_12_0.touched) || ctx.formSubmitted) && ((tmp_12_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_12_0.errors["required"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_13_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_13_0.invalid) && (((tmp_13_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_13_0.dirty) || ((tmp_13_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_13_0.touched) || ctx.formSubmitted) && ((tmp_13_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_13_0.errors["pattern"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(40, _c0, ((tmp_14_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_14_0.invalid) && (((tmp_14_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_14_0.dirty) || ((tmp_14_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_14_0.touched) || ctx.formSubmitted), ((tmp_14_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_14_0.valid) && (((tmp_14_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_14_0.dirty) || ((tmp_14_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_14_0.touched) || ctx.formSubmitted)));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_15_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_15_0.invalid) && (((tmp_15_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_15_0.dirty) || ((tmp_15_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_15_0.touched) || ctx.formSubmitted) && ((tmp_15_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_15_0.errors["required"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_16_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_16_0.invalid) && (((tmp_16_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_16_0.dirty) || ((tmp_16_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_16_0.touched) || ctx.formSubmitted) && ((tmp_16_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_16_0.errors["minAge"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(43, _c0, ((tmp_17_0 = ctx.signUpForm.get("password")) == null ? null : tmp_17_0.invalid) && (((tmp_17_0 = ctx.signUpForm.get("password")) == null ? null : tmp_17_0.dirty) || ((tmp_17_0 = ctx.signUpForm.get("password")) == null ? null : tmp_17_0.touched) || ctx.formSubmitted), ((tmp_17_0 = ctx.signUpForm.get("password")) == null ? null : tmp_17_0.valid) && (((tmp_17_0 = ctx.signUpForm.get("password")) == null ? null : tmp_17_0.dirty) || ((tmp_17_0 = ctx.signUpForm.get("password")) == null ? null : tmp_17_0.touched) || ctx.formSubmitted)));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_18_0 = ctx.signUpForm.get("password")) == null ? null : tmp_18_0.invalid) && (((tmp_18_0 = ctx.signUpForm.get("password")) == null ? null : tmp_18_0.dirty) || ((tmp_18_0 = ctx.signUpForm.get("password")) == null ? null : tmp_18_0.touched) || ctx.formSubmitted) && ((tmp_18_0 = ctx.signUpForm.get("password")) == null ? null : tmp_18_0.errors["required"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(46, _c0, ((tmp_19_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_19_0.invalid) && (((tmp_19_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_19_0.dirty) || ((tmp_19_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_19_0.touched) || ctx.formSubmitted), ((tmp_19_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_19_0.valid) && (((tmp_19_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_19_0.dirty) || ((tmp_19_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_19_0.touched) || ctx.formSubmitted)));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_20_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_20_0.invalid) && (((tmp_20_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_20_0.dirty) || ((tmp_20_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_20_0.touched) || ctx.formSubmitted) && ((tmp_20_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_20_0.errors["required"]));
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_21_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_21_0.invalid) && (((tmp_21_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_21_0.dirty) || ((tmp_21_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_21_0.touched) || ctx.formSubmitted) && ((tmp_21_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_21_0.errors["compareValidator"]));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.genders);
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_23_0 = ctx.signUpForm.get("gender")) == null ? null : tmp_23_0.invalid) && (((tmp_23_0 = ctx.signUpForm.get("gender")) == null ? null : tmp_23_0.dirty) || ((tmp_23_0 = ctx.signUpForm.get("gender")) == null ? null : tmp_23_0.touched) || ctx.formSubmitted) && ((tmp_23_0 = ctx.signUpForm.get("gender")) == null ? null : tmp_23_0.errors["required"]));
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.countries);
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ((tmp_25_0 = ctx.signUpForm.get("countryID")) == null ? null : tmp_25_0.invalid) && (((tmp_25_0 = ctx.signUpForm.get("countryID")) == null ? null : tmp_25_0.dirty) || ((tmp_25_0 = ctx.signUpForm.get("countryID")) == null ? null : tmp_25_0.touched) || ctx.formSubmitted) && ((tmp_25_0 = ctx.signUpForm.get("countryID")) == null ? null : tmp_25_0.errors["required"]));
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.skillsControls);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.registerError);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let SignUpComponent2 = _SignUpComponent;
  return SignUpComponent2;
})();

// src/app/guards/can-deactivate-guard.service.ts
var CanDeactivateGuardService = (component, currentRoute, currentState, nextState) => {
  if (!component.canLeave) {
    return confirm("You have some unsaved details. Are you sure to go back?");
  }
  return true;
};

// src/app/app-routing.module.ts
var routes = [{
  path: "login",
  component: LoginComponent
}, {
  path: "",
  redirectTo: "login",
  pathMatch: "full"
}, {
  path: "signup",
  component: SignUpComponent,
  canDeactivate: [CanDeactivateGuardService]
}, {
  path: "about",
  component: AboutComponent
}, {
  path: "admin",
  loadChildren: () => import("./chunk-7EUW357W.js").then((m) => m.AdminModule)
}, {
  path: "employee",
  loadChildren: () => import("./chunk-UL4BDSWV.js").then((m) => m.EmployeeModule)
}];
var AppRoutingModule = /* @__PURE__ */ (() => {
  const _AppRoutingModule = class _AppRoutingModule {
  };
  _AppRoutingModule.\u0275fac = function AppRoutingModule_Factory(t) {
    return new (t || _AppRoutingModule)();
  };
  _AppRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AppRoutingModule
  });
  _AppRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }), RouterModule]
  });
  let AppRoutingModule2 = _AppRoutingModule;
  return AppRoutingModule2;
})();

// src/app/app.component.ts
var _c02 = () => ["/admin", "dashboard"];
function AppComponent_ng_container_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "a", 8);
    \u0275\u0275text(2, "Dashboard");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(1);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c02));
  }
}
var _c1 = () => ["/admin", "projects"];
function AppComponent_ng_container_7_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "a", 8);
    \u0275\u0275text(2, "Projects");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(1);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c1));
  }
}
var _c2 = () => ["/admin", "masters"];
function AppComponent_ng_container_7_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "a", 8);
    \u0275\u0275text(2, "Masters");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(1);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c2));
  }
}
function AppComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppComponent_ng_container_7_li_1_Template, 3, 2, "li", 16)(2, AppComponent_ng_container_7_li_2_Template, 3, 2, "li", 16)(3, AppComponent_ng_container_7_li_3_Template, 3, 2, "li", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r0.loginService.currentUserName != null);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r0.loginService.currentUserName != null);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r0.loginService.currentUserName != null);
  }
}
var _c3 = () => ["/employee", "tasks"];
function AppComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 7)(2, "a", 8);
    \u0275\u0275text(3, "Tasks");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c3));
  }
}
var _c4 = () => ["/login"];
function AppComponent_ng_container_9_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "a", 8);
    \u0275\u0275text(2, "Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(1);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c4));
  }
}
var _c5 = () => ["/signup"];
function AppComponent_ng_container_9_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "a", 8);
    \u0275\u0275text(2, "Sign Up");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(1);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c5));
  }
}
function AppComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppComponent_ng_container_9_li_1_Template, 3, 2, "li", 16)(2, AppComponent_ng_container_9_li_2_Template, 3, 2, "li", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r2.loginService.currentUserName == null);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r2.loginService.currentUserName == null);
  }
}
function AppComponent_ng_container_13_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "a", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r9.loginService.currentUserName);
  }
}
function AppComponent_ng_container_13_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 7)(1, "a", 18);
    \u0275\u0275listener("click", function AppComponent_ng_container_13_li_2_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r11 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r11.loginService.Logout());
    });
    \u0275\u0275text(2, "Logout");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppComponent_ng_container_13_li_1_Template, 3, 1, "li", 16)(2, AppComponent_ng_container_13_li_2_Template, 3, 0, "li", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r3.loginService.currentUserName != null);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r3.loginService.currentUserName != null);
  }
}
var _c6 = () => ["/about"];
var AppComponent = /* @__PURE__ */ (() => {
  const _AppComponent = class _AppComponent {
    constructor(loginService) {
      this.loginService = loginService;
    }
    ngOnInit() {
      this.loginService.detectIfAlreadyLoggedIn();
    }
  };
  _AppComponent.\u0275fac = function AppComponent_Factory(t) {
    return new (t || _AppComponent)(\u0275\u0275directiveInject(LoginService));
  };
  _AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AppComponent,
    selectors: [["app-root"]],
    decls: 23,
    vars: 6,
    consts: [[1, "navbar", "navbar-expand-sm", "bg-success", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#mynav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "mynav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [4, "ngIf"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "d-flex"], [1, "input-group"], ["id", "search", 1, "input-group-text"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "button", 1, "btn", "btn-warning"], [1, "container-fluid"], ["class", "nav-item", 4, "ngIf"], ["href", "#", 1, "nav-link"], ["href", "#", 1, "nav-link", 3, "click"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "a", 1);
        \u0275\u0275text(2, "Angular Task Manager");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2);
        \u0275\u0275element(4, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "ul", 5);
        \u0275\u0275template(7, AppComponent_ng_container_7_Template, 4, 3, "ng-container", 6)(8, AppComponent_ng_container_8_Template, 4, 2, "ng-container", 6)(9, AppComponent_ng_container_9_Template, 3, 2, "ng-container", 6);
        \u0275\u0275elementStart(10, "li", 7)(11, "a", 8);
        \u0275\u0275text(12, "About");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, AppComponent_ng_container_13_Template, 3, 2, "ng-container", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "form", 9)(15, "div", 10)(16, "span", 11);
        \u0275\u0275element(17, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 14);
        \u0275\u0275text(20, "Search");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 15);
        \u0275\u0275element(22, "router-outlet");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRole == "Admin");
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRole == "Employee");
        \u0275\u0275advance(1);
        \u0275\u0275property("ngIf", ctx.loginService.currentUserName == null);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c6));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loginService.currentUserName != null);
      }
    },
    dependencies: [NgIf, RouterOutlet, RouterLink, \u0275NgNoValidate, NgControlStatusGroup, NgForm],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"]
  });
  let AppComponent2 = _AppComponent;
  return AppComponent2;
})();

// src/app/interceptors/jwt-interceptor.service.ts
var JwtInterceptorService = /* @__PURE__ */ (() => {
  const _JwtInterceptorService = class _JwtInterceptorService {
    constructor() {
    }
    intercept(req, next) {
      var currentuser = {
        token: ""
      };
      var headers = new HttpHeaders();
      const currentUserString = sessionStorage.getItem("currentuser");
      if (currentUserString !== null && currentUserString !== void 0) {
        currentuser = JSON.parse(currentUserString);
      }
      req = req.clone({
        setHeaders: {
          Authorization: "Bearer " + currentuser.token
        }
      });
      return next.handle(req);
    }
  };
  _JwtInterceptorService.\u0275fac = function JwtInterceptorService_Factory(t) {
    return new (t || _JwtInterceptorService)();
  };
  _JwtInterceptorService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _JwtInterceptorService,
    factory: _JwtInterceptorService.\u0275fac,
    providedIn: "root"
  });
  let JwtInterceptorService2 = _JwtInterceptorService;
  return JwtInterceptorService2;
})();

// src/app/interceptors/jwt-un-authorized-interceptor.service.ts
var JwtUnAuthorizedInterceptorService = /* @__PURE__ */ (() => {
  const _JwtUnAuthorizedInterceptorService = class _JwtUnAuthorizedInterceptorService {
    constructor() {
    }
    intercept(req, next) {
      return next.handle(req).pipe(tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
          }
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              console.log(error);
            }
          }
        }
      }));
    }
  };
  _JwtUnAuthorizedInterceptorService.\u0275fac = function JwtUnAuthorizedInterceptorService_Factory(t) {
    return new (t || _JwtUnAuthorizedInterceptorService)();
  };
  _JwtUnAuthorizedInterceptorService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _JwtUnAuthorizedInterceptorService,
    factory: _JwtUnAuthorizedInterceptorService.\u0275fac,
    providedIn: "root"
  });
  let JwtUnAuthorizedInterceptorService2 = _JwtUnAuthorizedInterceptorService;
  return JwtUnAuthorizedInterceptorService2;
})();

// src/app/app.module.ts
var AppModule = /* @__PURE__ */ (() => {
  const _AppModule = class _AppModule {
  };
  _AppModule.\u0275fac = function AppModule_Factory(t) {
    return new (t || _AppModule)();
  };
  _AppModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AppModule,
    bootstrap: [AppComponent]
  });
  _AppModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtUnAuthorizedInterceptorService,
      multi: true
    }],
    imports: [BrowserModule, AppRoutingModule, SharedModule, EmployeeModule, JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem("currentuser") ? JSON.parse(sessionStorage.getItem("currentuser")).token : null;
        }
      }
    })]
  });
  let AppModule2 = _AppModule;
  return AppModule2;
})();

// src/main.ts
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
