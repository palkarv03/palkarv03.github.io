(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-item-form/add-item-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/add-item-form/add-item-form.component.ts ***!
  \**********************************************************/
/*! exports provided: AddItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemFormComponent", function() { return AddItemFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_shared_models_budget_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/models/budget-item.model */ "./src/shared/models/budget-item.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AddItemFormComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemFormComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-primary": a0, "is-success": a1 }; };
class AddItemFormComponent {
    constructor() {
        // tslint:disable-next-line: new-parens
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.item) {
            // this means that an existing item object was passed into this component
            // therefore this is not a new item
            this.isNewItem = false;
        }
        else {
            this.isNewItem = true;
            this.item = new src_shared_models_budget_item_model__WEBPACK_IMPORTED_MODULE_1__["BudgetItem"]('', null);
        }
    }
    onSubmit(form) {
        this.formSubmit.emit(form.value);
        form.reset();
    }
}
AddItemFormComponent.ɵfac = function AddItemFormComponent_Factory(t) { return new (t || AddItemFormComponent)(); };
AddItemFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddItemFormComponent, selectors: [["app-add-item-form"]], inputs: { item: "item" }, outputs: { formSubmit: "formSubmit" }, decls: 14, vars: 9, consts: [[3, "ngSubmit"], ["itemForm", "ngForm"], [1, "field", "is-horizontal"], [1, "field-body"], [1, "field", "is-narrow"], [1, "control"], ["type", "number", "name", "amount", "placeholder", "Amount", "required", "", 1, "input", 2, "width", "100px", 3, "ngModel"], [1, "field"], ["type", "text", "name", "description", "placeholder", "Description", "required", "", 1, "input", 3, "ngModel"], ["type", "submit", 1, "button", 3, "ngClass", "disabled"], [4, "ngIf"]], template: function AddItemFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddItemFormComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddItemFormComponent_p_12_Template, 2, 0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddItemFormComponent_p_13_Template, 2, 0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.isNewItem, !ctx.isNewItem))("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNewItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNewItem);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1pdGVtLWZvcm0vYWRkLWl0ZW0tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddItemFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-item-form',
                templateUrl: './add-item-form.component.html',
                styleUrls: ['./add-item-form.component.scss'],
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");





const routes = [{ path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"] }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'budget-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-item-form/add-item-form.component */ "./src/app/add-item-form/add-item-form.component.ts");
/* harmony import */ var _budget_item_list_budget_item_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./budget-item-list/budget-item-list.component */ "./src/app/budget-item-list/budget-item-list.component.ts");
/* harmony import */ var _budget_item_list_budget_item_card_budget_item_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./budget-item-list/budget-item-card/budget-item-card.component */ "./src/app/budget-item-list/budget-item-card/budget-item-card.component.ts");
/* harmony import */ var _edit_item_modal_edit_item_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-item-modal/edit-item-modal.component */ "./src/app/edit-item-modal/edit-item-modal.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"],
        _add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_8__["AddItemFormComponent"],
        _budget_item_list_budget_item_list_component__WEBPACK_IMPORTED_MODULE_9__["BudgetItemListComponent"],
        _budget_item_list_budget_item_card_budget_item_card_component__WEBPACK_IMPORTED_MODULE_10__["BudgetItemCardComponent"],
        _edit_item_modal_edit_item_modal_component__WEBPACK_IMPORTED_MODULE_11__["EditItemModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"],
                    _add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_8__["AddItemFormComponent"],
                    _budget_item_list_budget_item_list_component__WEBPACK_IMPORTED_MODULE_9__["BudgetItemListComponent"],
                    _budget_item_list_budget_item_card_budget_item_card_component__WEBPACK_IMPORTED_MODULE_10__["BudgetItemCardComponent"],
                    _edit_item_modal_edit_item_modal_component__WEBPACK_IMPORTED_MODULE_11__["EditItemModalComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ],
                providers: [],
                entryComponents: [_edit_item_modal_edit_item_modal_component__WEBPACK_IMPORTED_MODULE_11__["EditItemModalComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/budget-item-list/budget-item-card/budget-item-card.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/budget-item-list/budget-item-card/budget-item-card.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BudgetItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetItemCardComponent", function() { return BudgetItemCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1) { return { income: a0, expense: a1 }; };
class BudgetItemCardComponent {
    constructor() {
        this.xButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onXButtonClick() {
        // we want to emit an event
        this.xButtonClick.emit();
    }
    onCardClick() {
        this.cardClick.emit();
    }
}
BudgetItemCardComponent.ɵfac = function BudgetItemCardComponent_Factory(t) { return new (t || BudgetItemCardComponent)(); };
BudgetItemCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetItemCardComponent, selectors: [["app-budget-item-card"]], inputs: { item: "item" }, outputs: { xButtonClick: "xButtonClick", cardClick: "cardClick" }, decls: 9, vars: 6, consts: [[1, "root"], [1, "budget-item", 3, "ngClass", "click"], [1, "description"], [1, "amount"], [1, "x-icon-button", 3, "click"]], template: function BudgetItemCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BudgetItemCardComponent_Template_div_click_1_listener() { return ctx.onCardClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BudgetItemCardComponent_Template_div_click_8_listener() { return ctx.onXButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.item.amount >= 0, ctx.item.amount < 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.amount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700 | Lato:300,900\");\n.root[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  position: relative;\n}\n.root[_ngcontent-%COMP%]:hover   .x-icon-button[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.root[_ngcontent-%COMP%]   .x-icon-button[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 34px;\n  width: 34px;\n  border-radius: 50%;\n  background: #161c29;\n  background-image: url('delete_icon.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  right: -17px;\n  top: -17px;\n  transition: opacity 0.2s ease-out, transform 0.2s ease-out;\n  transform: scale(0);\n  opacity: 0;\n  cursor: pointer;\n}\n.root[_ngcontent-%COMP%]   .x-icon-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.budget-item[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  background-color: #f5f5f5;\n  padding: 10px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out;\n}\n.budget-item[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n.budget-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  font-size: 18px;\n  margin-left: 5px;\n  align-items: center;\n}\n.budget-item[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 3px;\n}\n.income[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #00cc86;\n}\n.income[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  background-color: #bafacd;\n}\n.expense[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #dc3900;\n}\n.expense[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  background-color: #ffe5e3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLXN0eWxlcy5zY3NzIiwic3JjL2FwcC9idWRnZXQtaXRlbS1saXN0L2J1ZGdldC1pdGVtLWNhcmQvYnVkZ2V0LWl0ZW0tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLUSxvRkFBQTtBQ0hSO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFGO0FBR0k7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFETjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJEVEc7RUNVSCx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLDBEQUFBO0VBRUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUxKO0FBT0k7RUFDRSxxQkFBQTtBQUxOO0FBVUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRGhDVztFQ2lDWCxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsMENBQUE7QUFSRjtBQVVFO0VBQ0UseUJBQUE7QUFSSjtBQVdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFHQSxtQkFBQTtBQVhKO0FBY0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFaSjtBQWlCRTtFQUNFLGNEMURJO0FDNENSO0FBaUJFO0VBQ0UseUJEN0RVO0FDOENkO0FBb0JFO0VBQ0UsY0RqRUU7QUNnRE47QUFvQkU7RUFDRSx5QkRwRVE7QUNrRFoiLCJmaWxlIjoic3JjL2FwcC9idWRnZXQtaXRlbS1saXN0L2J1ZGdldC1pdGVtLWNhcmQvYnVkZ2V0LWl0ZW0tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGRlZmluaW5nIHRoZSBnbG9iYWwgc3R5bGVzIGFuZCBjaGFuZ2luZyB2YXJpYWJsZXNcclxuXHJcbkBjaGFyc2V0IFwidXRmLThcIjtcclxuXHJcbi8vIEltcG9ydCBhIEdvb2dsZSBGb250XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwIHwgTGF0bzozMDAsOTAwXCIpO1xyXG5cclxuLy8gU2V0IHlvdXIgYnJhbmQgY29sb3JzXHJcbiRwdXJwbGU6IHJnYigxNTksIDEwNCwgMjM1KTtcclxuJGxpZ2h0LWdyZXk6ICNmNWY1ZjU7XHJcbiRkYXJrOiByZ2IoMjIsIDI4LCA0MSk7XHJcblxyXG4kZ3JlZW46ICMwMGNjODY7XHJcbiRsaWdodC1ncmVlbjogI2JhZmFjZDtcclxuXHJcbiRyZWQ6ICNkYzM5MDA7XHJcbiRsaWdodC1yZWQ6ICNmZmU1ZTM7XHJcblxyXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkcHVycGxlO1xyXG5cclxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleTtcclxuJGlucHV0LXNoYWRvdzogbm9uZTtcclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL21haW4tc3R5bGVzLnNjc3NcIjtcclxuXHJcbi5yb290IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAueC1pY29uLWJ1dHRvbiB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAueC1pY29uLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB3aWR0aDogMzRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICRkYXJrO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2RlbGV0ZV9pY29uLnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICByaWdodDogLTE3cHg7XHJcbiAgICB0b3A6IC0xN3B4O1xyXG5cclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XHJcblxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idWRnZXQtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGxpZ2h0LWdyZXksIDIlKTtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHJcbiAgICAvLyBWZXJ0aWNhbGx5IGNlbnRlciB0aGUgY2hpbGRyZW4gZWxlbWVudHNcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYW1vdW50IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbmNvbWUge1xyXG4gIHAge1xyXG4gICAgY29sb3I6ICRncmVlbjtcclxuICB9XHJcblxyXG4gIC5hbW91bnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZWVuO1xyXG4gIH1cclxufVxyXG5cclxuLmV4cGVuc2Uge1xyXG4gIHAge1xyXG4gICAgY29sb3I6ICRyZWQ7XHJcbiAgfVxyXG5cclxuICAuYW1vdW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1yZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BudgetItemCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-budget-item-card',
                templateUrl: './budget-item-card.component.html',
                styleUrls: ['./budget-item-card.component.scss'],
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], xButtonClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cardClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/budget-item-list/budget-item-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/budget-item-list/budget-item-list.component.ts ***!
  \****************************************************************/
/*! exports provided: BudgetItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetItemListComponent", function() { return BudgetItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _edit_item_modal_edit_item_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-item-modal/edit-item-modal.component */ "./src/app/edit-item-modal/edit-item-modal.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _budget_item_card_budget_item_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./budget-item-card/budget-item-card.component */ "./src/app/budget-item-list/budget-item-card/budget-item-card.component.ts");






function BudgetItemListComponent_div_6_app_budget_item_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-budget-item-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("xButtonClick", function BudgetItemListComponent_div_6_app_budget_item_card_1_Template_app_budget_item_card_xButtonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onDeleteButtonClicked(item_r2); })("cardClick", function BudgetItemListComponent_div_6_app_budget_item_card_1_Template_app_budget_item_card_cardClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onCardClicked(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r2);
} }
function BudgetItemListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_6_app_budget_item_card_1_Template, 1, 1, "app-budget-item-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.amount >= 0);
} }
function BudgetItemListComponent_div_11_app_budget_item_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-budget-item-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("xButtonClick", function BudgetItemListComponent_div_11_app_budget_item_card_1_Template_app_budget_item_card_xButtonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onDeleteButtonClicked(item_r10); })("cardClick", function BudgetItemListComponent_div_11_app_budget_item_card_1_Template_app_budget_item_card_cardClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onCardClicked(item_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r10);
} }
function BudgetItemListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_11_app_budget_item_card_1_Template, 1, 1, "app-budget-item-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.amount < 0);
} }
class BudgetItemListComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onDeleteButtonClicked(item) {
        this.delete.emit(item);
    }
    onCardClicked(item) {
        // show the edit modal
        const dialogRef = this.dialog.open(_edit_item_modal_edit_item_modal_component__WEBPACK_IMPORTED_MODULE_1__["EditItemModalComponent"], {
            width: '580px',
            data: item,
        });
        dialogRef.afterClosed().subscribe((result) => {
            // Check if result has a value
            if (result) {
                this.update.emit({
                    old: item,
                    new: result,
                });
            }
        });
    }
}
BudgetItemListComponent.ɵfac = function BudgetItemListComponent_Factory(t) { return new (t || BudgetItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
BudgetItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetItemListComponent, selectors: [["app-budget-item-list"]], inputs: { budgetItems: "budgetItems" }, outputs: { delete: "delete", update: "update" }, decls: 12, vars: 2, consts: [[1, "budget-items-section"], [1, "budget-items-container"], [1, "income-column"], [1, "budget-items"], [4, "ngFor", "ngForOf"], [1, "expenses-column"], ["style", "display: block; margin-bottom: 20px;", 3, "item", "xButtonClick", "cardClick", 4, "ngIf"], [2, "display", "block", "margin-bottom", "20px", 3, "item", "xButtonClick", "cardClick"]], template: function BudgetItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BudgetItemListComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BudgetItemListComponent_div_11_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.budgetItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.budgetItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _budget_item_card_budget_item_card_component__WEBPACK_IMPORTED_MODULE_4__["BudgetItemCardComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700 | Lato:300,900\");\n.budget-items-section[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 50px;\n  justify-content: center;\n  align-items: center;\n  margin-left: 90px;\n  margin-top: 0px;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 680px;\n  height: 100%;\n  width: 100%;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%], .budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%]   .budget-items[_ngcontent-%COMP%], .budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%]   .budget-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%] {\n  margin-right: 35px;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #00cc86;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #dc3900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLXN0eWxlcy5zY3NzIiwic3JjL2FwcC9idWRnZXQtaXRlbS1saXN0L2J1ZGdldC1pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS1Esb0ZBQUE7QUNIUjtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBR0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUZKO0FBSUk7O0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFGTjtBQUlNOztFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRFI7QUFJTTs7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtBQUZSO0FBTUk7RUFDRSxrQkFBQTtBQUpOO0FBS007RUFDRSxjRDlCQTtBQzJCUjtBQVFNO0VBQ0UsY0RqQ0Y7QUMyQk4iLCJmaWxlIjoic3JjL2FwcC9idWRnZXQtaXRlbS1saXN0L2J1ZGdldC1pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZWZpbmluZyB0aGUgZ2xvYmFsIHN0eWxlcyBhbmQgY2hhbmdpbmcgdmFyaWFibGVzXHJcblxyXG5AY2hhcnNldCBcInV0Zi04XCI7XHJcblxyXG4vLyBJbXBvcnQgYSBHb29nbGUgRm9udFxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMCB8IExhdG86MzAwLDkwMFwiKTtcclxuXHJcbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xyXG4kcHVycGxlOiByZ2IoMTU5LCAxMDQsIDIzNSk7XHJcbiRsaWdodC1ncmV5OiAjZjVmNWY1O1xyXG4kZGFyazogcmdiKDIyLCAyOCwgNDEpO1xyXG5cclxuJGdyZWVuOiAjMDBjYzg2O1xyXG4kbGlnaHQtZ3JlZW46ICNiYWZhY2Q7XHJcblxyXG4kcmVkOiAjZGMzOTAwO1xyXG4kbGlnaHQtcmVkOiAjZmZlNWUzO1xyXG5cclxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiRwcmltYXJ5OiAkcHVycGxlO1xyXG4kbGluazogJHB1cnBsZTtcclxuXHJcbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9tYWluLXN0eWxlcy5zY3NzXCI7XHJcblxyXG4uYnVkZ2V0LWl0ZW1zLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogNTBweDtcclxuXHJcbiAgLy8gICBIb3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkgY2VudGVyIGZsZXggY2hpbGRyZW5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuXHJcbiAgLmJ1ZGdldC1pdGVtcy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1heC13aWR0aDogNjgwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuaW5jb21lLWNvbHVtbixcclxuICAgIC5leHBlbnNlcy1jb2x1bW4ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4LWJhc2lzOiAwOyAvLyBmb3IgdGhlIGNvbHVtbnMgdG8gYmUgdGhlIHNhbWUgc2l6ZSwgcmVnYXJkbGVzcyB0aGUgY29udGVudFxyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ1ZGdldC1pdGVtcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluY29tZS1jb2x1bW4ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBjb2xvcjogJGdyZWVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmV4cGVuc2VzLWNvbHVtbiB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BudgetItemListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-budget-item-list',
                templateUrl: './budget-item-list.component.html',
                styleUrls: ['./budget-item-list.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { budgetItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/edit-item-modal/edit-item-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/edit-item-modal/edit-item-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: EditItemModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemModalComponent", function() { return EditItemModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_shared_models_budget_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/models/budget-item.model */ "./src/shared/models/budget-item.model.ts");
/* harmony import */ var _add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-item-form/add-item-form.component */ "./src/app/add-item-form/add-item-form.component.ts");






class EditItemModalComponent {
    constructor(dialogRef, item) {
        this.dialogRef = dialogRef;
        this.item = item;
    }
    ngOnInit() { }
    onSubmitted(updatedItem) {
        this.dialogRef.close(updatedItem);
    }
}
EditItemModalComponent.ɵfac = function EditItemModalComponent_Factory(t) { return new (t || EditItemModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
EditItemModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditItemModalComponent, selectors: [["app-edit-item-modal"]], decls: 3, vars: 1, consts: [[1, "title"], [3, "item", "formSubmit"]], template: function EditItemModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-add-item-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmit", function EditItemModalComponent_Template_app_add_item_form_formSubmit_2_listener($event) { return ctx.onSubmitted($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item);
    } }, directives: [_add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_3__["AddItemFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtaXRlbS1tb2RhbC9lZGl0LWl0ZW0tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditItemModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-item-modal',
                templateUrl: './edit-item-modal.component.html',
                styleUrls: ['./edit-item-modal.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: src_shared_models_budget_item_model__WEBPACK_IMPORTED_MODULE_2__["BudgetItem"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-item-form/add-item-form.component */ "./src/app/add-item-form/add-item-form.component.ts");
/* harmony import */ var _budget_item_list_budget_item_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../budget-item-list/budget-item-list.component */ "./src/app/budget-item-list/budget-item-list.component.ts");





const _c0 = function (a0, a1) { return { red: a0, green: a1 }; };
class MainPageComponent {
    constructor() {
        this.budgetItems = new Array();
        this.totalBudget = 0;
    }
    ngOnInit() { }
    addItem(newItem) {
        this.budgetItems.push(newItem);
        this.totalBudget += newItem.amount;
    }
    deleteItem(item) {
        let index = this.budgetItems.indexOf(item);
        this.budgetItems.splice(index, 1);
        this.totalBudget -= item.amount;
    }
    updateItem(updateEvent) {
        // Result is the updated budget item
        // Replace the item with the updated item in the form
        this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] =
            updateEvent.new;
        // update the total budget
        this.totalBudget -= updateEvent.old.amount;
        this.totalBudget += updateEvent.new.amount;
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 11, vars: 6, consts: [[1, "top-bar"], [1, "total-budget-section"], [3, "ngClass"], [1, "add-item-section"], [1, "add-item-container"], [2, "padding", "20px", 3, "formSubmit"], [2, "margin-top", "0"], [3, "budgetItems", "delete", "update"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Budget Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-add-item-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmit", function MainPageComponent_Template_app_add_item_form_formSubmit_8_listener($event) { return ctx.addItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-budget-item-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function MainPageComponent_Template_app_budget_item_list_delete_10_listener($event) { return ctx.deleteItem($event); })("update", function MainPageComponent_Template_app_budget_item_list_update_10_listener($event) { return ctx.updateItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.totalBudget < 0, ctx.totalBudget > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalBudget, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("budgetItems", ctx.budgetItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_2__["AddItemFormComponent"], _budget_item_list_budget_item_list_component__WEBPACK_IMPORTED_MODULE_3__["BudgetItemListComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700 | Lato:300,900\");\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 60px;\n  background: linear-gradient(75deg, #d664f7, #adcbe7);\n  justify-content: center;\n  align-items: center;\n}\n.top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  letter-spacing: 1px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #161c29;\n}\n.total-budget-section[_ngcontent-%COMP%] {\n  display: flex;\n  height: 150px;\n  background: #161c29;\n  justify-content: center;\n  align-items: center;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 58px;\n  font-weight: 300;\n  color: white;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2.green[_ngcontent-%COMP%] {\n  color: #0affab;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2.red[_ngcontent-%COMP%] {\n  color: #ff551a;\n}\n.add-item-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-container[_ngcontent-%COMP%] {\n  width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLXN0eWxlcy5zY3NzIiwic3JjL2FwcC9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtRLG9GQUFBO0FDSFI7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvREFBQTtFQUdBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUlFO0VBRUUsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNEUkc7QUNLUDtBQU9BO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkRmSztFQ2tCTCx1QkFBQTtFQUNBLG1CQUFBO0FBTkY7QUFRRTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFQSjtBQVNJO0VBQ0UsY0FBQTtBQVBOO0FBVUk7RUFDRSxjQUFBO0FBUk47QUFhQTtFQUNFLGFBQUE7RUFHQSx1QkFBQTtFQUNBLG1CQUFBO0FBWkY7QUFjRTtFQUNFLFlBQUE7QUFaSiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZWZpbmluZyB0aGUgZ2xvYmFsIHN0eWxlcyBhbmQgY2hhbmdpbmcgdmFyaWFibGVzXHJcblxyXG5AY2hhcnNldCBcInV0Zi04XCI7XHJcblxyXG4vLyBJbXBvcnQgYSBHb29nbGUgRm9udFxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMCB8IExhdG86MzAwLDkwMFwiKTtcclxuXHJcbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xyXG4kcHVycGxlOiByZ2IoMTU5LCAxMDQsIDIzNSk7XHJcbiRsaWdodC1ncmV5OiAjZjVmNWY1O1xyXG4kZGFyazogcmdiKDIyLCAyOCwgNDEpO1xyXG5cclxuJGdyZWVuOiAjMDBjYzg2O1xyXG4kbGlnaHQtZ3JlZW46ICNiYWZhY2Q7XHJcblxyXG4kcmVkOiAjZGMzOTAwO1xyXG4kbGlnaHQtcmVkOiAjZmZlNWUzO1xyXG5cclxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiRwcmltYXJ5OiAkcHVycGxlO1xyXG4kbGluazogJHB1cnBsZTtcclxuXHJcbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9tYWluLXN0eWxlcy5zY3NzXCI7XHJcblxyXG4udG9wLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc1ZGVnLCByZ2IoMjE0LCAxMDAsIDI0NyksIHJnYigxNzMsIDIwMywgMjMxKSk7XHJcblxyXG4gIC8vICAgSG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5IGNlbnRlciB0aGUgdGV4dFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGgxIHtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAkZGFyaztcclxuICB9XHJcbn1cclxuXHJcbi50b3RhbC1idWRnZXQtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICRkYXJrO1xyXG5cclxuICAvLyAgIEhvcml6b250YWxseSBhbmQgdmVydGljYWxseSBjZW50ZXIgdGhlIHRleHRcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBoMiB7XHJcbiAgICAvLyBmb250LWZhbWlseTogXCJMYXRvXCI7XHJcbiAgICBmb250LXNpemU6IDU4cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICYuZ3JlZW4ge1xyXG4gICAgICBjb2xvcjogbGlnaHRlbigkZ3JlZW4sIDEyJSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWQge1xyXG4gICAgICBjb2xvcjogbGlnaHRlbigkcmVkLCAxMiUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFkZC1pdGVtLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC8vICAgSG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5IGNlbnRlciB0aGUgdGV4dFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5hZGQtaXRlbS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss'],
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/shared/models/budget-item.model.ts":
/*!************************************************!*\
  !*** ./src/shared/models/budget-item.model.ts ***!
  \************************************************/
/*! exports provided: BudgetItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetItem", function() { return BudgetItem; });
class BudgetItem {
    constructor(description, amount) {
        this.description = description;
        this.amount = amount;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Practice\budget-app\budget-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map