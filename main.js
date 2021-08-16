(self["webpackChunkheritage_poc"] = self["webpackChunkheritage_poc"] || []).push([["main"],{

/***/ 4221:
/*!*******************************************************************************!*\
  !*** ./apps/coretainium-optics/$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 4221;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 73893:
/*!**********************************************************!*\
  !*** ./apps/coretainium-optics/src/app/app.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _core_components_panel_panel_resize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/panel/panel-resize.service */ 39416);
/* harmony import */ var _features_engine_camera_engine_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/engine/camera-engine.widget */ 97376);
/* harmony import */ var _features_engine_store_engine_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/engine/store/engine.store */ 91187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/splitter */ 68563);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 33013);
/* harmony import */ var _core_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/panel/panel.component */ 94304);
/* harmony import */ var _features_engine_engine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/engine/engine.component */ 65141);
/* harmony import */ var _components_lens_preset_table_lens_preset_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/lens-preset-table/lens-preset-table.component */ 78909);
/* harmony import */ var _components_sensorsize_panel_sensorsize_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sensorsize-panel/sensorsize-panel.component */ 21284);
/* harmony import */ var _components_focallength_panel_focallength_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/focallength-panel/focallength-panel.component */ 2145);
/* harmony import */ var _components_cameradistance_panel_cameradistance_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cameradistance-panel/cameradistance-panel.component */ 59721);














function AppComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "poc-panel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "poc-engine", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("displayCameraView", ctx_r2.displayCameraOverview);
} }
function AppComponent_ng_template_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "poc-panel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "poc-lens-preset-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collapsed", false);
} }
const _c0 = function () { return [75, 25]; };
function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p-splitter", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onResizeEnd", function AppComponent_ng_template_1_Template_p_splitter_onResizeEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r4.resizeEnd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppComponent_ng_template_1_ng_template_1_Template, 2, 2, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AppComponent_ng_template_1_ng_template_2_Template, 2, 1, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("panelSizes", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c0));
} }
function AppComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "poc-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "poc-sensorsize-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "poc-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "poc-focallength-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "poc-panel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "poc-cameradistance-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collapsed", false);
} }
const _c1 = function () { return [50, 10]; };
class AppComponent {
    constructor(panelResizeService, store$) {
        this.panelResizeService = panelResizeService;
        this.store$ = store$;
        this.title = 'coretainium-optics';
        this.displayCameraOverview = false;
        this.panelResizeService.onResize$.subscribe(() => {
            console.log('resize');
        });
        this.cameraHeightWidget = {
            min: 200,
            max: 1300,
            step: 1,
            value$: this.store$.viewDistance$,
            label: 'Camera Height',
            readonly: false,
            setValue: (newPosition) => this.store$.setViewDistance((0,_features_engine_camera_engine_widget__WEBPACK_IMPORTED_MODULE_1__.round)(newPosition, 1)),
            type: 'range'
        };
    }
    resizeEnd(ev) {
        console.log(ev);
        this.panelResizeService.onResize.next();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.panelResizeService.onResize.next();
        }, 150);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_components_panel_panel_resize_service__WEBPACK_IMPORTED_MODULE_0__.PanelResizeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_features_engine_store_engine_store__WEBPACK_IMPORTED_MODULE_2__.EngineStateStore)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["poc-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([_core_components_panel_panel_resize_service__WEBPACK_IMPORTED_MODULE_0__.PanelResizeService])], decls: 3, vars: 4, consts: [["stateKey", "sidebar", "stateStorage", "local", 3, "panelSizes", "minSizes", "onResizeEnd"], ["pTemplate", ""], ["stateKey", "bottombar", "stateStorage", "local", "layout", "vertical", 3, "panelSizes", "onResizeEnd"], ["label", "Coretainium", 3, "collapsed"], [3, "displayCameraView"], ["label", "Presets", 3, "collapsed"], [1, "sidebar"], ["label", "Sensor Size", 3, "collapsed"], ["label", "Focal Length", 3, "collapsed"], ["label", "Camera View", 3, "collapsed"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p-splitter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onResizeEnd", function AppComponent_Template_p_splitter_onResizeEnd_0_listener($event) { return ctx.resizeEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 3, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 7, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("panelSizes", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](2, _c0))("minSizes", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [primeng_splitter__WEBPACK_IMPORTED_MODULE_10__.Splitter, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, _core_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__.PanelComponent, _features_engine_engine_component__WEBPACK_IMPORTED_MODULE_4__.EngineComponent, _components_lens_preset_table_lens_preset_table_component__WEBPACK_IMPORTED_MODULE_5__.LensPresetTableComponent, _components_sensorsize_panel_sensorsize_panel_component__WEBPACK_IMPORTED_MODULE_6__.SensorsizePanelComponent, _components_focallength_panel_focallength_panel_component__WEBPACK_IMPORTED_MODULE_7__.FocallengthPanelComponent, _components_cameradistance_panel_cameradistance_panel_component__WEBPACK_IMPORTED_MODULE_8__.CameradistancePanelComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n[_nghost-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLnNpZGViYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 90155:
/*!*******************************************************!*\
  !*** ./apps/coretainium-optics/src/app/app.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 91211);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 27094);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 73893);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58497);
/* harmony import */ var _features_engine_engine_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/engine/engine.module */ 43603);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 50168);
/* harmony import */ var _features_engine_store_engine_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/engine/store/engine.store */ 91187);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/splitter */ 68563);
/* harmony import */ var _components_panel_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/panel.module */ 47834);
/* harmony import */ var _services_camera_preset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/camera-preset.service */ 72601);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 33013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 74788);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_features_engine_store_engine_store__WEBPACK_IMPORTED_MODULE_3__.EngineStateStore, _services_camera_preset_service__WEBPACK_IMPORTED_MODULE_5__.PresetsStore, primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _features_engine_engine_module__WEBPACK_IMPORTED_MODULE_1__.EngineModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
            primeng_splitter__WEBPACK_IMPORTED_MODULE_14__.SplitterModule,
            _components_panel_module__WEBPACK_IMPORTED_MODULE_4__.PanelModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _features_engine_engine_module__WEBPACK_IMPORTED_MODULE_1__.EngineModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
        primeng_splitter__WEBPACK_IMPORTED_MODULE_14__.SplitterModule,
        _components_panel_module__WEBPACK_IMPORTED_MODULE_4__.PanelModule] }); })();


/***/ }),

/***/ 59721:
/*!***********************************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/components/cameradistance-panel/cameradistance-panel.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameradistancePanelComponent": () => (/* binding */ CameradistancePanelComponent)
/* harmony export */ });
/* harmony import */ var _features_engine_store_engine_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/engine/store/engine.store */ 91187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputnumber */ 70705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _core_pipes_unit_suffix_unit_suffix_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/pipes/unit-suffix/unit-suffix.pipe */ 11858);







class CameradistancePanelComponent {
    constructor(store$) {
        this.store$ = store$;
    }
}
CameradistancePanelComponent.ɵfac = function CameradistancePanelComponent_Factory(t) { return new (t || CameradistancePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_features_engine_store_engine_store__WEBPACK_IMPORTED_MODULE_0__.EngineStateStore)); };
CameradistancePanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CameradistancePanelComponent, selectors: [["poc-cameradistance-panel"]], decls: 26, vars: 19, consts: [[1, "panel-field"], [1, "panel-field-label"], ["for", "cameraDistance"], [1, "panel-field-value"], ["name", "focalLength", "buttonLayout", "horizontal", "inputId", "horizontal", "spinnerMode", "horizontal", "decrementButtonClass", "p-button-text", "incrementButtonClass", "p-button-text", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", "mode", "decimal", 3, "ngModel", "useGrouping", "showButtons", "step", "suffix", "minFractionDigits", "maxFractionDigits", "onInput"], ["cameraDistance", ""], [1, "readonly-value"]], template: function CameradistancePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p-inputNumber", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onInput", function CameradistancePanelComponent_Template_p_inputNumber_onInput_5_listener($event) { return ctx.store$.setViewDistance($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "unitSuffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "unitSuffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 9, ctx.store$.viewDistance$))("useGrouping", false)("showButtons", true)("step", 1)("suffix", " mm")("minFractionDigits", 0)("maxFractionDigits", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 13, ctx.store$.viewWidth$)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 17, ctx.store$.viewHeight$)), " ");
    } }, directives: [primeng_inputnumber__WEBPACK_IMPORTED_MODULE_3__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _core_pipes_unit_suffix_unit_suffix_pipe__WEBPACK_IMPORTED_MODULE_1__.UnitSuffixPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 0.5rem;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 0.25rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%]   .panel-field-label[_ngcontent-%COMP%] {\n  width: 33%;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%]   .panel-field-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%]   .panel-field-value[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%]   .readonly-value[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYWRpc3RhbmNlLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUNNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ1I7QUFHSTtFQUNFLE9BQUE7QUFETjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUZOIiwiZmlsZSI6ImNhbWVyYWRpc3RhbmNlLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogLjVyZW07XG5cbiAgLnBhbmVsLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IC4yNXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnBhbmVsLWZpZWxkLWxhYmVsIHtcbiAgICAgIHdpZHRoOiAzMyU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgbGFiZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGFuZWwtZmllbGQtdmFsdWUge1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAucmVhZG9ubHktdmFsdWUge1xuICAgICAgcGFkZGluZzogLjI1cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 2145:
/*!*****************************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/components/focallength-panel/focallength-panel.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocallengthPanelComponent": () => (/* binding */ FocallengthPanelComponent)
/* harmony export */ });
/* harmony import */ var _features_engine_store_engine_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/engine/store/engine.store */ 91187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/inputnumber */ 70705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 12057);






class FocallengthPanelComponent {
    constructor(store$) {
        this.store$ = store$;
    }
}
FocallengthPanelComponent.ɵfac = function FocallengthPanelComponent_Factory(t) { return new (t || FocallengthPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_features_engine_store_engine_store__WEBPACK_IMPORTED_MODULE_0__.EngineStateStore)); };
FocallengthPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FocallengthPanelComponent, selectors: [["poc-focallength-panel"]], decls: 8, vars: 9, consts: [[1, "panel-field"], [1, "panel-field-label"], ["for", "focalLength"], [1, "panel-field-value"], ["name", "focalLength", "buttonLayout", "horizontal", "inputId", "horizontal", "spinnerMode", "horizontal", "decrementButtonClass", "p-button-text", "incrementButtonClass", "p-button-text", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", "mode", "decimal", 3, "ngModel", "useGrouping", "showButtons", "step", "suffix", "minFractionDigits", "maxFractionDigits", "onInput"], ["focalLength", ""]], template: function FocallengthPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Focal Length");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-inputNumber", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onInput", function FocallengthPanelComponent_Template_p_inputNumber_onInput_5_listener($event) { return ctx.store$.setFocalLength($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, ctx.store$.focalLength$))("useGrouping", false)("showButtons", true)("step", 0.01)("suffix", " mm")("minFractionDigits", 2)("maxFractionDigits", 2);
    } }, directives: [primeng_inputnumber__WEBPACK_IMPORTED_MODULE_2__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 0.5rem;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 0.25rem;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%]   .panel-field-label[_ngcontent-%COMP%] {\n  width: 33%;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%]   .panel-field-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%]   .panel-field-value[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvY2FsbGVuZ3RoLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ047QUFDTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNSO0FBR0k7RUFDRSxPQUFBO0FBRE4iLCJmaWxlIjoiZm9jYWxsZW5ndGgtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAuNXJlbTtcblxuICAucGFuZWwtZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogLjI1cmVtO1xuXG4gICAgLnBhbmVsLWZpZWxkLWxhYmVsIHtcbiAgICAgIHdpZHRoOiAzMyU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgbGFiZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGFuZWwtZmllbGQtdmFsdWUge1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 78909:
/*!*****************************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/components/lens-preset-table/lens-preset-table.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LensPresetTableComponent": () => (/* binding */ LensPresetTableComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var _features_engine_store_engine_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/engine/store/engine.store */ 91187);
/* harmony import */ var _services_camera_preset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/camera-preset.service */ 72601);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ 61319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 33013);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 99287);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 23490);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/confirmpopup */ 28446);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 12057);














const _c0 = ["main"];
function LensPresetTableComponent_ng_template_9_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r6.header, " ");
} }
function LensPresetTableComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LensPresetTableComponent_ng_template_9_th_1_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", columns_r4);
} }
function LensPresetTableComponent_ng_template_10_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r10 = ctx.$implicit;
    const rowData_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", rowData_r7[col_r10.field], " ");
} }
function LensPresetTableComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LensPresetTableComponent_ng_template_10_td_1_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LensPresetTableComponent_ng_template_10_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const rowData_r7 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.recallPreset(rowData_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LensPresetTableComponent_ng_template_10_Template_button_click_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const rowData_r7 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.removePreset($event, rowData_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r8 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", columns_r8);
} }
const _c1 = function () { return []; };
class LensPresetTableComponent {
    constructor(presetService, engineState, confirmationService) {
        this.presetService = presetService;
        this.engineState = engineState;
        this.confirmationService = confirmationService;
        this.presets$ = this.presetService.presets$;
        this.cols = [
            { field: 'sensorWidth', header: 'Sensor width' },
            { field: 'sensorHeight', header: 'Sensor Height' },
            { field: 'focalLength', header: 'Focal Length' },
            { field: 'viewDistance', header: 'View Distance' },
            { field: 'viewWidth', header: 'View Width' },
            { field: 'viewHeight', header: 'View Height' }
        ];
    }
    addPreset() {
        this.engineState.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(x => {
            const { focalLength, sensorWidth, sensorHeight, viewWidth, viewHeight, viewDistance } = x;
            this.presetService.addPreset({
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.default)(),
                focalLength, sensorWidth, sensorHeight, viewWidth, viewHeight, viewDistance
            });
        });
    }
    removePreset(event, preset) {
        var _a;
        this.confirmationService.confirm({
            target: (_a = event.target) !== null && _a !== void 0 ? _a : undefined,
            message: 'Do you want to remove this preset?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.presetService.removePreset(preset);
            },
            reject: () => {
                //reject action
            }
        });
    }
    recallPreset(preset) {
        const { focalLength, viewDistance, sensorHeight, sensorWidth } = preset;
        this.engineState.setSensorSize({ sensorWidth, sensorHeight });
        this.engineState.setFocalLength(focalLength);
        this.engineState.setViewDistance(viewDistance);
    }
}
LensPresetTableComponent.ɵfac = function LensPresetTableComponent_Factory(t) { return new (t || LensPresetTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_camera_preset_service__WEBPACK_IMPORTED_MODULE_1__.CameraPresetService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_features_engine_store_engine_store__WEBPACK_IMPORTED_MODULE_0__.EngineStateStore), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService)); };
LensPresetTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LensPresetTableComponent, selectors: [["poc-lens-preset-table"]], viewQuery: function LensPresetTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mainRef = _t.first);
    } }, decls: 12, vars: 10, consts: [["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-plus", "pTooltip", "Adds the current values as a preset", "tooltipPosition", "bottom", "label", "Add As Preset", 1, "p-button-text", 3, "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-file-o", "pTooltip", "Download saved presets as a CSV file.", "tooltipPosition", "bottom", "label", "Export CSV", 1, "p-button-text", "p-button-success", 3, "disabled", "click"], ["main", ""], ["styleClass", "p-datatable-sm", 3, "value", "columns", "scrollable", "scrollHeight"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], [4, "ngFor", "ngForOf"], [2, "width", "60px"], [2, "width", "60px", "text-align", "center"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-replay", "pTooltip", "Recall Preset", "tooltipPosition", "bottom", 1, "p-button-text", 3, "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-trash", "pTooltip", "Remove Preset", "tooltipPosition", "bottom", 1, "p-button-text", "p-button-danger", 3, "click"]], template: function LensPresetTableComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LensPresetTableComponent_Template_button_click_1_listener() { return ctx.addPreset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LensPresetTableComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); return _r1.exportCSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "main", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p-table", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, LensPresetTableComponent_ng_template_9_Template, 4, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LensPresetTableComponent_ng_template_10_Template, 6, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "p-confirmPopup");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        let tmp_0_0;
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, ctx.presets$)) == null ? null : tmp_0_0.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, ctx.presets$)) !== null && tmp_1_0 !== undefined ? tmp_1_0 : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1))("columns", ctx.cols)("scrollable", true)("scrollHeight", _r0.clientHeight + "px");
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_9__.ConfirmPopup, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   p-table[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlbnMtcHJlc2V0LXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUVFO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFBTiIsImZpbGUiOiJsZW5zLXByZXNldC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGhlYWRlciB7XG4gICAgcGFkZGluZyA6LjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIG1haW4ge1xuICAgIGZsZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgcC10YWJsZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 47834:
/*!********************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/components/panel.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelModule": () => (/* binding */ PanelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 91211);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 50103);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputnumber */ 70705);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/slider */ 87564);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 23490);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ 99287);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/scrollpanel */ 86025);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/confirmpopup */ 28446);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/core.module */ 50168);
/* harmony import */ var _sensorsize_panel_sensorsize_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sensorsize-panel/sensorsize-panel.component */ 21284);
/* harmony import */ var _focallength_panel_focallength_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focallength-panel/focallength-panel.component */ 2145);
/* harmony import */ var _cameradistance_panel_cameradistance_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cameradistance-panel/cameradistance-panel.component */ 59721);
/* harmony import */ var _lens_preset_table_lens_preset_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lens-preset-table/lens-preset-table.component */ 78909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 74788);

















class PanelModule {
}
PanelModule.ɵfac = function PanelModule_Factory(t) { return new (t || PanelModule)(); };
PanelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PanelModule });
PanelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            primeng_slider__WEBPACK_IMPORTED_MODULE_8__.SliderModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.DropdownModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumberModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_12__.TableModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule,
            primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_14__.ScrollPanelModule,
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.TooltipModule,
            primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_16__.ConfirmPopupModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PanelModule, { declarations: [_sensorsize_panel_sensorsize_panel_component__WEBPACK_IMPORTED_MODULE_1__.SensorsizePanelComponent,
        _focallength_panel_focallength_panel_component__WEBPACK_IMPORTED_MODULE_2__.FocallengthPanelComponent,
        _cameradistance_panel_cameradistance_panel_component__WEBPACK_IMPORTED_MODULE_3__.CameradistancePanelComponent,
        _lens_preset_table_lens_preset_table_component__WEBPACK_IMPORTED_MODULE_4__.LensPresetTableComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        primeng_slider__WEBPACK_IMPORTED_MODULE_8__.SliderModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.DropdownModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumberModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_12__.TableModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_14__.ScrollPanelModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.TooltipModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_16__.ConfirmPopupModule], exports: [_sensorsize_panel_sensorsize_panel_component__WEBPACK_IMPORTED_MODULE_1__.SensorsizePanelComponent,
        _focallength_panel_focallength_panel_component__WEBPACK_IMPORTED_MODULE_2__.FocallengthPanelComponent,
        _cameradistance_panel_cameradistance_panel_component__WEBPACK_IMPORTED_MODULE_3__.CameradistancePanelComponent,
        _lens_preset_table_lens_preset_table_component__WEBPACK_IMPORTED_MODULE_4__.LensPresetTableComponent] }); })();


/***/ }),

/***/ 21284:
/*!***************************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/components/sensorsize-panel/sensorsize-panel.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SensorsizePanelComponent": () => (/* binding */ SensorsizePanelComponent)
/* harmony export */ });
/* harmony import */ var _features_engine_store_engine_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/engine/store/engine.store */ 91187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputnumber */ 70705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _core_pipes_unit_suffix_unit_suffix_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/pipes/unit-suffix/unit-suffix.pipe */ 11858);







class SensorsizePanelComponent {
    constructor(store$) {
        this.store$ = store$;
    }
}
SensorsizePanelComponent.ɵfac = function SensorsizePanelComponent_Factory(t) { return new (t || SensorsizePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_features_engine_store_engine_store__WEBPACK_IMPORTED_MODULE_0__.EngineStateStore)); };
SensorsizePanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SensorsizePanelComponent, selectors: [["poc-sensorsize-panel"]], decls: 34, vars: 31, consts: [[1, "panel-field"], [1, "panel-field-label"], ["for", "sensorWidth"], [1, "panel-field-value"], ["name", "sensorWidth", "buttonLayout", "horizontal", "inputId", "horizontal", "spinnerMode", "horizontal", "decrementButtonClass", "p-button-text", "incrementButtonClass", "p-button-text", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", "mode", "decimal", 3, "ngModel", "useGrouping", "showButtons", "step", "suffix", "minFractionDigits", "maxFractionDigits", "onInput"], ["sensorWidth", ""], ["for", "sensorHeight"], ["name", "sensorHeight", "buttonLayout", "horizontal", "inputId", "horizontal", "spinnerMode", "horizontal", "decrementButtonClass", "p-button-text", "incrementButtonClass", "p-button-text", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", "mode", "decimal", 3, "ngModel", "useGrouping", "showButtons", "step", "suffix", "minFractionDigits", "maxFractionDigits", "onInput"], ["sensorHeight", ""], ["for", "cameraDistance"], [1, "readonly-value"]], template: function SensorsizePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p-inputNumber", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onInput", function SensorsizePanelComponent_Template_p_inputNumber_onInput_5_listener($event) { return ctx.store$.setSensorWidth($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p-inputNumber", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onInput", function SensorsizePanelComponent_Template_p_inputNumber_onInput_13_listener($event) { return ctx.store$.setSensorHeight($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Diagonal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "unitSuffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "unitSuffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 16, ctx.store$.sensorWidth$))("useGrouping", false)("showButtons", true)("step", 0.01)("suffix", " mm")("minFractionDigits", 2)("maxFractionDigits", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 18, ctx.store$.sensorHeight$))("useGrouping", false)("showButtons", true)("step", 0.01)("suffix", " mm")("minFractionDigits", 2)("maxFractionDigits", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](23, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 23, ctx.store$.sensorDiagonal$), 2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](32, 25, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 29, ctx.store$.sensorArea$), 2, " mm\u00B2"), " ");
    } }, directives: [primeng_inputnumber__WEBPACK_IMPORTED_MODULE_3__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _core_pipes_unit_suffix_unit_suffix_pipe__WEBPACK_IMPORTED_MODULE_1__.UnitSuffixPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 0.5rem;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 0.25rem;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%]   .panel-field-label[_ngcontent-%COMP%] {\n  width: 33%;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%]   .panel-field-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%]   .panel-field-value[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .panel-field[_ngcontent-%COMP%]   .readonly-value[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbnNvcnNpemUtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUNNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ1I7QUFHSTtFQUNFLE9BQUE7QUFETjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUZOIiwiZmlsZSI6InNlbnNvcnNpemUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAuNXJlbTtcblxuICAucGFuZWwtZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogLjI1cmVtO1xuXG4gICAgLnBhbmVsLWZpZWxkLWxhYmVsIHtcbiAgICAgIHdpZHRoOiAzMyU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgbGFiZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGFuZWwtZmllbGQtdmFsdWUge1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAucmVhZG9ubHktdmFsdWUge1xuICAgICAgcGFkZGluZzogLjI1cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 39416:
/*!***************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/components/panel/panel-resize.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelResizeService": () => (/* binding */ PanelResizeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 88229);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 66682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 22759);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 33637);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 93137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 74788);



class PanelResizeService {
    constructor() {
        this.onResize = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();
        this.onResize$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(window, 'resize'), this.onResize.asObservable()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.throttleTime)(50, rxjs__WEBPACK_IMPORTED_MODULE_4__.asyncScheduler, { leading: true, trailing: true }));
    }
}
PanelResizeService.ɵfac = function PanelResizeService_Factory(t) { return new (t || PanelResizeService)(); };
PanelResizeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PanelResizeService, factory: PanelResizeService.ɵfac });


/***/ }),

/***/ 94304:
/*!**********************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/components/panel/panel.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelComponent": () => (/* binding */ PanelComponent)
/* harmony export */ });
/* harmony import */ var _panel_resize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-resize.service */ 39416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 12057);




const _c0 = ["*"];
class PanelComponent {
    constructor(panelResizeService) {
        this.panelResizeService = panelResizeService;
        this.collapsed = true;
        this.collapsedIconClass = ['pi', 'pi-chevron-right'];
        this.openedIconClass = ['pi', 'pi-chevron-down'];
    }
    get iconClasses() {
        return this.collapsed ? this.collapsedIconClass : this.openedIconClass;
    }
    _headerClicked(ev) {
        this.collapsed = !this.collapsed;
        this.panelResizeService.onResize.next();
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_panel_resize_service__WEBPACK_IMPORTED_MODULE_0__.PanelResizeService)); };
PanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["poc-panel"]], hostVars: 2, hostBindings: function PanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapsed", ctx.collapsed);
    } }, inputs: { label: "label", collapsed: "collapsed" }, ngContentSelectors: _c0, decls: 6, vars: 2, consts: [[3, "click"], [3, "ngClass"], [1, "label"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PanelComponent_Template_header_click_0_listener() { return ctx.collapsed = !ctx.collapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.iconClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.label);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  border-top: 1px solid var(--surface-900);\n  width: 100%;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  background-color: var(--surface-50);\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  flex: 1;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-200);\n  color: var(--text-color);\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.collapsed[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  display: none;\n}\n.collapsed[_nghost-%COMP%]    > header[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.collapsed[_nghost-%COMP%]    > header[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--yellow-600);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQ0o7QUFDSTtFQUNFLG1CQUFBO0VBQ0EsT0FBQTtBQUNOO0FBRUk7RUFDRSxpQkFBQTtBQUFOO0FBR0k7RUFDRSxhQUFBO0FBRE47QUFJSTtFQUNFLG9DQUFBO0VBQ0Esd0JBQUE7QUFGTjtBQU1FO0VBQ0UsT0FBQTtFQUNBLFdBQUE7QUFKSjtBQUtJO0VBQU0sV0FBQTtBQUZWO0FBTUk7RUFDRSxhQUFBO0FBSk47QUFPSTtFQUNFLGtDQUFBO0FBTE47QUFPTTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtBQUxSIiwiZmlsZSI6InBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS05MDApO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtNTApO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAubGFiZWwge1xuICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogLjVyZW07XG4gICAgfVxuXG4gICAgLnZhbHVlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLTIwMCk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgbWFpbiB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICA+ICogeyB3aWR0aDogMTAwJTt9XG4gIH1cblxuICAmLmNvbGxhcHNlZCB7XG4gICAgbWFpbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgID4gaGVhZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XG5cbiAgICAgIC52YWx1ZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogdmFyKC0teWVsbG93LTYwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 14555:
/*!**************************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/components/pinned-button/pinned-button.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PinnedButtonComponent": () => (/* binding */ PinnedButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);


class PinnedButtonComponent {
    constructor() {
        this.checked = false;
        this.toggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    clicked() {
        this.checked = !this.checked;
        this.toggled.emit(this.checked);
    }
}
PinnedButtonComponent.ɵfac = function PinnedButtonComponent_Factory(t) { return new (t || PinnedButtonComponent)(); };
PinnedButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PinnedButtonComponent, selectors: [["poc-pinned-button"]], hostVars: 2, hostBindings: function PinnedButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PinnedButtonComponent_click_HostBindingHandler() { return ctx.clicked(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checked", ctx.checked);
    } }, inputs: { checked: "checked" }, outputs: { toggled: "toggled" }, decls: 2, vars: 0, consts: [["aria-hidden", "true", "focusable", "false", "data-prefix", "fal", "data-icon", "thumbtack", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 384 512", 1, "svg-inline--fa", "fa-thumbtack", "fa-w-12"], ["fill", "currentColor", "d", "M300.8 203.9L290.7 128H328c13.2 0 24-10.8 24-24V24c0-13.2-10.8-24-24-24H56C42.8 0 32 10.8 32 24v80c0 13.2 10.8 24 24 24h37.3l-10.1 75.9C34.9 231.5 0 278.4 0 335.2c0 8.8 7.2 16 16 16h160V472c0 .7.1 1.3.2 1.9l8 32c2 8 13.5 8.1 15.5 0l8-32c.2-.6.2-1.3.2-1.9V351.2h160c8.8 0 16-7.2 16-16 .1-56.8-34.8-103.7-83.1-131.3zM33.3 319.2c6.8-42.9 39.6-76.4 79.5-94.5L128 96H64V32h256v64h-64l15.3 128.8c40 18.2 72.7 51.8 79.5 94.5H33.3z"]], template: function PinnedButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3rem;\n  height: 3rem;\n  cursor: pointer;\n  padding: 0.75rem;\n  border-radius: 0.2rem;\n  color: var(--text-color-secondary);\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.checked[_nghost-%COMP%] {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbm5lZC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFDRSwyQkFBQTtBQUFKIiwiZmlsZSI6InBpbm5lZC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XG5cbiAgc3ZnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmLmNoZWNrZWQge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 50168:
/*!*************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/core.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _pipes_aperture_abbreviation_aperture_abbreviation_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/aperture-abbreviation/aperture-abbreviation.pipe */ 79812);
/* harmony import */ var _pipes_unit_suffix_unit_suffix_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/unit-suffix/unit-suffix.pipe */ 11858);
/* harmony import */ var _pipes_empty_string_empty_string_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/empty-string/empty-string.pipe */ 2402);
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/panel/panel.component */ 94304);
/* harmony import */ var _components_pinned_button_pinned_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pinned-button/pinned-button.component */ 14555);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 91211);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ 50103);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputnumber */ 70705);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/slider */ 87564);
/* harmony import */ var _widgets_choice_widget_choice_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/choice-widget/choice-widget.component */ 84887);
/* harmony import */ var _widgets_collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/collapsable-widget/collapsable-widget.component */ 84390);
/* harmony import */ var _widgets_label_widget_label_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/label-widget/label-widget.component */ 93984);
/* harmony import */ var _widgets_number_widget_number_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widgets/number-widget/number-widget.component */ 54555);
/* harmony import */ var _widgets_range_widget_range_widget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets/range-widget/range-widget.component */ 58917);
/* harmony import */ var _widgets_section_widget_section_widget_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widgets/section-widget/section-widget.component */ 95936);
/* harmony import */ var _pipes_rad_to_deg_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/rad-to-deg.pipe */ 49972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 74788);



















const widgetComponents = [_widgets_range_widget_range_widget_component__WEBPACK_IMPORTED_MODULE_9__.RangeWidgetComponent,
    _widgets_number_widget_number_widget_component__WEBPACK_IMPORTED_MODULE_8__.NumberWidgetComponent,
    _widgets_choice_widget_choice_widget_component__WEBPACK_IMPORTED_MODULE_5__.ChoiceWidgetComponent,
    _widgets_label_widget_label_widget_component__WEBPACK_IMPORTED_MODULE_7__.LabelWidgetComponent,
    _widgets_section_widget_section_widget_component__WEBPACK_IMPORTED_MODULE_10__.SectionWidgetComponent,
    _widgets_collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_6__.CollapsableWidgetComponent];
class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            primeng_slider__WEBPACK_IMPORTED_MODULE_15__.SliderModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.DropdownModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__.InputNumberModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__.PanelComponent,
        _components_pinned_button_pinned_button_component__WEBPACK_IMPORTED_MODULE_4__.PinnedButtonComponent,
        _pipes_aperture_abbreviation_aperture_abbreviation_pipe__WEBPACK_IMPORTED_MODULE_0__.ApertureAbbreviationPipe,
        _pipes_unit_suffix_unit_suffix_pipe__WEBPACK_IMPORTED_MODULE_1__.UnitSuffixPipe,
        _pipes_empty_string_empty_string_pipe__WEBPACK_IMPORTED_MODULE_2__.EmptyStringPipe,
        _pipes_rad_to_deg_pipe__WEBPACK_IMPORTED_MODULE_11__.RadToDegPipe, _widgets_range_widget_range_widget_component__WEBPACK_IMPORTED_MODULE_9__.RangeWidgetComponent,
        _widgets_number_widget_number_widget_component__WEBPACK_IMPORTED_MODULE_8__.NumberWidgetComponent,
        _widgets_choice_widget_choice_widget_component__WEBPACK_IMPORTED_MODULE_5__.ChoiceWidgetComponent,
        _widgets_label_widget_label_widget_component__WEBPACK_IMPORTED_MODULE_7__.LabelWidgetComponent,
        _widgets_section_widget_section_widget_component__WEBPACK_IMPORTED_MODULE_10__.SectionWidgetComponent,
        _widgets_collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_6__.CollapsableWidgetComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        primeng_slider__WEBPACK_IMPORTED_MODULE_15__.SliderModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.DropdownModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__.InputNumberModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule], exports: [_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__.PanelComponent,
        _components_pinned_button_pinned_button_component__WEBPACK_IMPORTED_MODULE_4__.PinnedButtonComponent,
        _pipes_aperture_abbreviation_aperture_abbreviation_pipe__WEBPACK_IMPORTED_MODULE_0__.ApertureAbbreviationPipe,
        _pipes_unit_suffix_unit_suffix_pipe__WEBPACK_IMPORTED_MODULE_1__.UnitSuffixPipe,
        _pipes_empty_string_empty_string_pipe__WEBPACK_IMPORTED_MODULE_2__.EmptyStringPipe,
        _pipes_rad_to_deg_pipe__WEBPACK_IMPORTED_MODULE_11__.RadToDegPipe, _widgets_range_widget_range_widget_component__WEBPACK_IMPORTED_MODULE_9__.RangeWidgetComponent,
        _widgets_number_widget_number_widget_component__WEBPACK_IMPORTED_MODULE_8__.NumberWidgetComponent,
        _widgets_choice_widget_choice_widget_component__WEBPACK_IMPORTED_MODULE_5__.ChoiceWidgetComponent,
        _widgets_label_widget_label_widget_component__WEBPACK_IMPORTED_MODULE_7__.LabelWidgetComponent,
        _widgets_section_widget_section_widget_component__WEBPACK_IMPORTED_MODULE_10__.SectionWidgetComponent,
        _widgets_collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_6__.CollapsableWidgetComponent] }); })();


/***/ }),

/***/ 79812:
/*!********************************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/pipes/aperture-abbreviation/aperture-abbreviation.pipe.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApertureAbbreviationPipe": () => (/* binding */ ApertureAbbreviationPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

class ApertureAbbreviationPipe {
    transform(value) {
        switch (value) {
            case 'Aperture Priority':
                return 'A';
            case 'Shutter Priority':
                return 'S';
            case 'Program Auto':
                return 'P';
            case 'Auto':
                return 'AUTO';
            case 'Movie (Manual)':
                return 'Movie';
            case 'Manual':
                return 'M';
            default:
                return 'X';
        }
        ;
    }
}
ApertureAbbreviationPipe.ɵfac = function ApertureAbbreviationPipe_Factory(t) { return new (t || ApertureAbbreviationPipe)(); };
ApertureAbbreviationPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "apertureAbbreviation", type: ApertureAbbreviationPipe, pure: true });


/***/ }),

/***/ 2402:
/*!**************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/pipes/empty-string/empty-string.pipe.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyStringPipe": () => (/* binding */ EmptyStringPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

class EmptyStringPipe {
    transform(value, args) {
        if (!value) {
            return '---';
        }
        return value;
    }
}
EmptyStringPipe.ɵfac = function EmptyStringPipe_Factory(t) { return new (t || EmptyStringPipe)(); };
EmptyStringPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "emptyString", type: EmptyStringPipe, pure: true });


/***/ }),

/***/ 49972:
/*!***********************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/pipes/rad-to-deg.pipe.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadToDegPipe": () => (/* binding */ RadToDegPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

class RadToDegPipe {
    transform(value, decimalPlaces = 0, suffix = '°') {
        if (isNaN(value))
            return '--';
        const degrees = radToDeg(value).toFixed(decimalPlaces);
        return `${degrees}${suffix}`;
    }
}
RadToDegPipe.ɵfac = function RadToDegPipe_Factory(t) { return new (t || RadToDegPipe)(); };
RadToDegPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "radToDeg", type: RadToDegPipe, pure: true });
function radToDeg(rad) {
    return rad * 180 / Math.PI;
}
function degToRad(deg) {
    return deg * Math.PI / 180;
}


/***/ }),

/***/ 11858:
/*!************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/pipes/unit-suffix/unit-suffix.pipe.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitSuffixPipe": () => (/* binding */ UnitSuffixPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

class UnitSuffixPipe {
    transform(value, decimalPlaces = 0, suffix = ' mm') {
        if (value === null || value === undefined || isNaN(value) || value === null)
            return '--' + 'suffix';
        return value.toFixed(decimalPlaces) + suffix;
    }
}
UnitSuffixPipe.ɵfac = function UnitSuffixPipe_Factory(t) { return new (t || UnitSuffixPipe)(); };
UnitSuffixPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "unitSuffix", type: UnitSuffixPipe, pure: true });


/***/ }),

/***/ 84887:
/*!***********************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/widgets/choice-widget/choice-widget.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoiceWidgetComponent": () => (/* binding */ ChoiceWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collapsable-widget/collapsable-widget.component */ 84390);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dropdown */ 50103);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 12057);






class ChoiceWidgetComponent {
    constructor() {
        this.choiceSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    _onChange(ev) {
        this.choiceSelected.emit(ev.value);
    }
}
ChoiceWidgetComponent.ɵfac = function ChoiceWidgetComponent_Factory(t) { return new (t || ChoiceWidgetComponent)(); };
ChoiceWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChoiceWidgetComponent, selectors: [["poc-choice-widget"]], inputs: { widgetModel: "widgetModel" }, outputs: { choiceSelected: "choiceSelected" }, decls: 4, vars: 5, consts: [[3, "label"], [1, "holder"], ["appendTo", "body", "optionLabel", "label", 3, "options", "ngModel", "onChange"]], template: function ChoiceWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "poc-collapsable-widget", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-dropdown", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function ChoiceWidgetComponent_Template_p_dropdown_onChange_2_listener($event) { return ctx._onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.widgetModel.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.widgetModel.choices)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx.widgetModel.value$));
    } }, directives: [_collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_0__.CollapsableWidgetComponent, primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   section.holder[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n[_nghost-%COMP%]   section.holder[_ngcontent-%COMP%]   p-dropdown[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZS13aWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7QUFDSjtBQUFJO0VBQ0UsY0FBQTtBQUVOIiwiZmlsZSI6ImNob2ljZS13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIHNlY3Rpb24uaG9sZGVyIHtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBwLWRyb3Bkb3duIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 84390:
/*!*********************************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/widgets/collapsable-widget/collapsable-widget.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapsableWidgetComponent": () => (/* binding */ CollapsableWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 12057);


function CollapsableWidgetComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.value);
} }
const _c0 = ["*"];
class CollapsableWidgetComponent {
    constructor() {
        this.label = '';
        this.collapsed = true;
        this.collapsedIconClass = ['pi', 'pi-chevron-right'];
        this.openedIconClass = ['pi', 'pi-chevron-down'];
    }
    get iconClasses() {
        return this.collapsed ? this.collapsedIconClass : this.openedIconClass;
    }
}
CollapsableWidgetComponent.ɵfac = function CollapsableWidgetComponent_Factory(t) { return new (t || CollapsableWidgetComponent)(); };
CollapsableWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollapsableWidgetComponent, selectors: [["poc-collapsable-widget"]], hostVars: 2, hostBindings: function CollapsableWidgetComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapsed", ctx.collapsed);
    } }, inputs: { label: "label", value: "value", collapsed: "collapsed" }, ngContentSelectors: _c0, decls: 7, vars: 3, consts: [[3, "click"], [3, "ngClass"], [1, "label"], ["class", "value", 4, "ngIf"], [1, "value"]], template: function CollapsableWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollapsableWidgetComponent_Template_header_click_0_listener() { return ctx.collapsed = !ctx.collapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CollapsableWidgetComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.iconClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: block;\n  border-top: 1px solid var(--surface-900);\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  background-color: var(--surface-50);\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  flex: 1;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]:hover    > header[_ngcontent-%COMP%] {\n  background-color: var(--surface-200);\n  color: var(--text-color);\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.collapsed[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  display: none;\n}\n.collapsed[_nghost-%COMP%]    > header[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.collapsed[_nghost-%COMP%]    > header[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--yellow-600);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxhcHNhYmxlLXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSx3Q0FBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNFLG1CQUFBO0VBQ0EsT0FBQTtBQUNOO0FBRUk7RUFDRSxpQkFBQTtBQUFOO0FBR0k7RUFDRSxhQUFBO0FBRE47QUFNSTtFQUNFLG9DQUFBO0VBQ0Esd0JBQUE7QUFKTjtBQVFFO0VBQ0UsV0FBQTtBQU5KO0FBT0k7RUFBTSxXQUFBO0FBSlY7QUFRSTtFQUNFLGFBQUE7QUFOTjtBQVNJO0VBQ0Usa0NBQUE7QUFQTjtBQVNNO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0FBUFIiLCJmaWxlIjoiY29sbGFwc2FibGUtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtOTAwKTtcblxuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtNTApO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAubGFiZWwge1xuICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogLjVyZW07XG4gICAgfVxuXG4gICAgLnZhbHVlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgPiBoZWFkZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS0yMDApO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIG1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgID4gKiB7IHdpZHRoOiAxMDAlO31cbiAgfVxuXG4gICYuY29sbGFwc2VkIHtcbiAgICBtYWluIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgPiBoZWFkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcblxuICAgICAgLnZhbHVlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiB2YXIoLS15ZWxsb3ctNjAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 93984:
/*!*********************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/widgets/label-widget/label-widget.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelWidgetComponent": () => (/* binding */ LabelWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collapsable-widget/collapsable-widget.component */ 84390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 12057);




class LabelWidgetComponent {
}
LabelWidgetComponent.ɵfac = function LabelWidgetComponent_Factory(t) { return new (t || LabelWidgetComponent)(); };
LabelWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LabelWidgetComponent, selectors: [["poc-label-widget"]], inputs: { widgetModel: "widgetModel", value$: "value$" }, decls: 6, vars: 7, consts: [[3, "label", "value"], [1, "holder"]], template: function LabelWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "poc-collapsable-widget", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.widgetModel.label)("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx.widgetModel.value$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, ctx.value$));
    } }, directives: [_collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_0__.CollapsableWidgetComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n[_nghost-%COMP%]   section.holder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  width: 100%;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYmVsLXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0FBQ0o7QUFFRTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQURKIiwiZmlsZSI6ImxhYmVsLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICB9XG5cbiAgc2VjdGlvbi5ob2xkZXIge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 54555:
/*!***********************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/widgets/number-widget/number-widget.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberWidgetComponent": () => (/* binding */ NumberWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collapsable-widget/collapsable-widget.component */ 84390);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/inputnumber */ 70705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 12057);







class NumberWidgetComponent {
    constructor() {
        this.numberInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    _numberInput(ev) {
        this.numberInput.emit(ev.value);
    }
    _onFocus(ev) {
        ev.target.select();
    }
}
NumberWidgetComponent.ɵfac = function NumberWidgetComponent_Factory(t) { return new (t || NumberWidgetComponent)(); };
NumberWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NumberWidgetComponent, selectors: [["poc-number-widget"]], inputs: { widgetModel: "widgetModel", value$: "value$" }, outputs: { numberInput: "numberInput" }, decls: 6, vars: 13, consts: [[3, "label", "value"], [1, "holder"], ["buttonLayout", "horizontal", "inputId", "horizontal", "spinnerMode", "horizontal", "styleClass", "rangeInput", "decrementButtonClass", "p-button-text", "incrementButtonClass", "p-button-text", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", "mode", "decimal", 3, "ngModel", "useGrouping", "showButtons", "disabled", "min", "max", "step", "onInput", "onFocus"], ["newCounter", ""]], template: function NumberWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "poc-collapsable-widget", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p-inputNumber", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onInput", function NumberWidgetComponent_Template_p_inputNumber_onInput_3_listener($event) { return ctx._numberInput($event); })("onFocus", function NumberWidgetComponent_Template_p_inputNumber_onFocus_3_listener($event) { return ctx._onFocus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_8_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.widgetModel.label)("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 9, ctx.value$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 11, ctx.value$))("useGrouping", false)("showButtons", true)("disabled", ctx.widgetModel.readonly)("min", ctx.widgetModel.min)("max", ctx.widgetModel.max)("step", (tmp_8_0 = ctx.widgetModel == null ? null : ctx.widgetModel.step) !== null && tmp_8_0 !== undefined ? tmp_8_0 : 1);
    } }, directives: [_collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_0__.CollapsableWidgetComponent, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_2__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n[_nghost-%COMP%]   section.holder[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWJlci13aWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoibnVtYmVyLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICB9XG5cbiAgc2VjdGlvbi5ob2xkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 58917:
/*!*********************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/widgets/range-widget/range-widget.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RangeWidgetComponent": () => (/* binding */ RangeWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collapsable-widget/collapsable-widget.component */ 84390);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/inputnumber */ 70705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/slider */ 87564);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 12057);








class RangeWidgetComponent {
    constructor() {
        this.rangeInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    _rangeInput(ev) {
        this.rangeInput.emit(ev.value);
    }
    _onFocus(ev) {
        ev.target.select();
    }
}
RangeWidgetComponent.ɵfac = function RangeWidgetComponent_Factory(t) { return new (t || RangeWidgetComponent)(); };
RangeWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RangeWidgetComponent, selectors: [["poc-range-widget"]], inputs: { widgetModel: "widgetModel", value$: "value$" }, outputs: { rangeInput: "rangeInput" }, decls: 8, vars: 20, consts: [[3, "label", "value"], [1, "holder"], ["buttonLayout", "horizontal", "inputId", "horizontal", "spinnerMode", "horizontal", "styleClass", "-lg rangeInput", "decrementButtonClass", "p-button-text", "incrementButtonClass", "p-button-text", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", "mode", "decimal", 3, "ngModel", "useGrouping", "showButtons", "disabled", "min", "max", "step", "onInput", "onFocus"], ["newCounter", ""], [3, "ngModel", "disabled", "min", "max", "step", "onChange"]], template: function RangeWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "poc-collapsable-widget", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p-inputNumber", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onInput", function RangeWidgetComponent_Template_p_inputNumber_onInput_3_listener($event) { return ctx._rangeInput($event); })("onFocus", function RangeWidgetComponent_Template_p_inputNumber_onFocus_3_listener($event) { return ctx._onFocus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p-slider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function RangeWidgetComponent_Template_p_slider_onChange_6_listener($event) { return ctx._rangeInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_8_0;
        let tmp_13_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.widgetModel.label)("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 14, ctx.value$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 16, ctx.value$))("useGrouping", false)("showButtons", true)("disabled", ctx.widgetModel.readonly)("min", ctx.widgetModel.min)("max", ctx.widgetModel.max)("step", (tmp_8_0 = ctx.widgetModel == null ? null : ctx.widgetModel.step) !== null && tmp_8_0 !== undefined ? tmp_8_0 : 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 18, ctx.value$))("disabled", ctx.widgetModel.readonly)("min", ctx.widgetModel.min)("max", ctx.widgetModel.max)("step", (tmp_13_0 = ctx.widgetModel.step) !== null && tmp_13_0 !== undefined ? tmp_13_0 : 1);
    } }, directives: [_collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_0__.CollapsableWidgetComponent, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_2__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, primeng_slider__WEBPACK_IMPORTED_MODULE_4__.Slider], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   section.holder[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.holder[_ngcontent-%COMP%]   p-slider[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 0.5rem;\n  padding: 0 1rem;\n  flex-direction: column;\n  align-content: stretch;\n  justify-content: center;\n  height: 1rem;\n  width: 100%;\n}\n[_nghost-%COMP%]   section.holder[_ngcontent-%COMP%]   p-inputNumber[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmdlLXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFOO0FBR0k7RUFDRSxjQUFBO0FBRE4iLCJmaWxlIjoicmFuZ2Utd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICBzZWN0aW9uLmhvbGRlciB7XG4gICAgcGFkZGluZzogLjVyZW07XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHAtc2xpZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBwLWlucHV0TnVtYmVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 95936:
/*!*************************************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/core/widgets/section-widget/section-widget.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionWidgetComponent": () => (/* binding */ SectionWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collapsable-widget/collapsable-widget.component */ 84390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _range_widget_range_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../range-widget/range-widget.component */ 58917);
/* harmony import */ var _number_widget_number_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../number-widget/number-widget.component */ 54555);
/* harmony import */ var _label_widget_label_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../label-widget/label-widget.component */ 93984);
/* harmony import */ var _choice_widget_choice_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../choice-widget/choice-widget.component */ 84887);







function SectionWidgetComponent_ng_container_2_poc_range_widget_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "poc-range-widget", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("rangeInput", function SectionWidgetComponent_ng_container_2_poc_range_widget_1_Template_poc_range_widget_rangeInput_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const childWidget_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return childWidget_r1.setValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childWidget_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("widgetModel", childWidget_r1)("value$", childWidget_r1.value$);
} }
function SectionWidgetComponent_ng_container_2_poc_number_widget_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "poc-number-widget", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("numberInput", function SectionWidgetComponent_ng_container_2_poc_number_widget_2_Template_poc_number_widget_numberInput_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const childWidget_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return childWidget_r1.setValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childWidget_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("widgetModel", childWidget_r1)("value$", childWidget_r1.value$);
} }
function SectionWidgetComponent_ng_container_2_poc_label_widget_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "poc-label-widget", 10);
} if (rf & 2) {
    const childWidget_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("widgetModel", childWidget_r1)("value$", childWidget_r1.value$);
} }
function SectionWidgetComponent_ng_container_2_poc_choice_widget_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "poc-choice-widget", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("choiceSelected", function SectionWidgetComponent_ng_container_2_poc_choice_widget_4_Template_poc_choice_widget_choiceSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const childWidget_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return childWidget_r1.setValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childWidget_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("widgetModel", childWidget_r1);
} }
function SectionWidgetComponent_ng_container_2_poc_section_widget_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "poc-section-widget", 12);
} if (rf & 2) {
    const childWidget_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("widgetModel", childWidget_r1);
} }
function SectionWidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SectionWidgetComponent_ng_container_2_poc_range_widget_1_Template, 1, 2, "poc-range-widget", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SectionWidgetComponent_ng_container_2_poc_number_widget_2_Template, 1, 2, "poc-number-widget", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SectionWidgetComponent_ng_container_2_poc_label_widget_3_Template, 1, 2, "poc-label-widget", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SectionWidgetComponent_ng_container_2_poc_choice_widget_4_Template, 1, 1, "poc-choice-widget", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SectionWidgetComponent_ng_container_2_poc_section_widget_5_Template, 1, 1, "poc-section-widget", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const childWidget_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", childWidget_r1.type === "range");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", childWidget_r1.type === "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", childWidget_r1.type === "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", childWidget_r1.type === "choice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", childWidget_r1.type === "section");
} }
class SectionWidgetComponent {
    constructor() {
        this.collapsed = true;
    }
}
SectionWidgetComponent.ɵfac = function SectionWidgetComponent_Factory(t) { return new (t || SectionWidgetComponent)(); };
SectionWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SectionWidgetComponent, selectors: [["poc-section-widget"]], inputs: { widgetModel: "widgetModel", collapsed: "collapsed" }, decls: 3, vars: 3, consts: [[3, "label", "collapsed"], [1, "holder"], [4, "ngFor", "ngForOf"], [3, "widgetModel", "value$", "rangeInput", 4, "ngIf"], [3, "widgetModel", "value$", "numberInput", 4, "ngIf"], [3, "widgetModel", "value$", 4, "ngIf"], [3, "widgetModel", "choiceSelected", 4, "ngIf"], [3, "widgetModel", 4, "ngIf"], [3, "widgetModel", "value$", "rangeInput"], [3, "widgetModel", "value$", "numberInput"], [3, "widgetModel", "value$"], [3, "widgetModel", "choiceSelected"], [3, "widgetModel"]], template: function SectionWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "poc-collapsable-widget", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SectionWidgetComponent_ng_container_2_Template, 6, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", ctx.widgetModel.label)("collapsed", ctx.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.widgetModel.children);
    } }, directives: [_collapsable_widget_collapsable_widget_component__WEBPACK_IMPORTED_MODULE_0__.CollapsableWidgetComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _range_widget_range_widget_component__WEBPACK_IMPORTED_MODULE_1__.RangeWidgetComponent, _number_widget_number_widget_component__WEBPACK_IMPORTED_MODULE_2__.NumberWidgetComponent, _label_widget_label_widget_component__WEBPACK_IMPORTED_MODULE_3__.LabelWidgetComponent, _choice_widget_choice_widget_component__WEBPACK_IMPORTED_MODULE_4__.ChoiceWidgetComponent, SectionWidgetComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n[_nghost-%COMP%]   section.holder[_ngcontent-%COMP%] {\n  width: 100%;\n  border-left: 3px solid var(--green-400);\n}\n[_nghost-%COMP%]   section.holder[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24td2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsdUNBQUE7QUFDSjtBQUFJO0VBQ0UsV0FBQTtBQUVOIiwiZmlsZSI6InNlY3Rpb24td2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcblxuICBzZWN0aW9uLmhvbGRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1ncmVlbi00MDApO1xuICAgID4gKiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 33605:
/*!**********************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/features/engine/camera-engine.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraEngineService": () => (/* binding */ CameraEngineService)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 97758);

class CameraEngineService {
    constructor(store$) {
        this.store$ = store$;
        this.store$.select(x => x).subscribe(newState => {
            //if (newState.aovHeight === 0) return;
            const angleOfView = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.radToDeg(newState.aovHeight);
            const aspectRatio = newState.sensorWidth / newState.sensorHeight;
            if (!this.viewCamera) {
                this.viewCamera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(angleOfView, aspectRatio, .1, 10000);
                this._viewCamera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(angleOfView, aspectRatio, 25, newState.viewDistance);
                this.viewCamera.fov = newState.focalLength;
                this._viewCamera.fov = newState.focalLength;
                this.viewCamera.position.set(0, 0, 0);
                this._viewCamera.position.set(0, 0, 0);
                this.viewCamera.rotateX(three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad(-90));
                this._viewCamera.rotateX(three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad(-90));
                this.viewCameraHelper = new three__WEBPACK_IMPORTED_MODULE_0__.CameraHelper(this._viewCamera);
                this.viewCameraHelper.material = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({
                    color: 'lime',
                    linewidth: 300
                });
                this.viewCameraHelper.frustumCulled = false;
                this.lensCamera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(angleOfView, aspectRatio, newState.focalLength / 2, newState.focalLength);
                this.lensCamera.fov = newState.focalLength;
                this.lensCamera.position.set(0, 0, 0);
                this.lensCamera.rotateX(three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad(90));
                this.lensCameraHelper = new three__WEBPACK_IMPORTED_MODULE_0__.CameraHelper(this.lensCamera);
            }
            this.viewCamera.fov = angleOfView;
            this._viewCamera.fov = angleOfView;
            this.viewCamera.aspect = aspectRatio;
            this._viewCamera.aspect = aspectRatio;
            this._viewCamera.far = newState.viewDistance;
            this.lensCamera.fov = angleOfView;
            this.lensCamera.aspect = aspectRatio;
            this.lensCamera.near = newState.focalLength / 2;
            this.lensCamera.far = newState.focalLength;
            this.updateCameras();
        });
    }
    setCameraPosition(newPosition) {
        this._viewCamera.position.setY(newPosition);
        this.viewCamera.position.setY(newPosition);
        this.lensCamera.position.setY(newPosition);
        this.updateCameras();
    }
    updateCameras() {
        this.lensCamera.updateProjectionMatrix();
        this.lensCamera.updateMatrixWorld(true);
        this.lensCameraHelper.update();
        this.viewCamera.updateProjectionMatrix();
        this.viewCamera.updateMatrixWorld(true);
        this._viewCamera.updateProjectionMatrix();
        this._viewCamera.updateMatrixWorld(true);
        this.viewCameraHelper.update();
    }
}


/***/ }),

/***/ 97376:
/*!*********************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/features/engine/camera-engine.widget.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCameraEngineWidget": () => (/* binding */ createCameraEngineWidget),
/* harmony export */   "round": () => (/* binding */ round)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);


const createCameraEngineWidget = (store$) => {
    const cameraHeightWidget = {
        min: 200,
        max: 1300,
        step: 1,
        value$: store$.viewDistance$,
        label: 'Camera Height',
        readonly: false,
        setValue: (newPosition) => store$.setViewDistance(round(newPosition, 1)),
        type: 'range'
    };
    const focalLengthWidget = {
        min: 0,
        max: 100,
        step: .1,
        value$: store$.focalLength$,
        label: 'Focal Length',
        readonly: false,
        setValue: (focalLength) => store$.setFocalLength(focalLength),
        type: 'range'
    };
    const mainSection = {
        type: 'section',
        label: 'Camera Optical Settings',
        children: [
            cameraHeightWidget,
            focalLengthWidget,
            createSensorSizeSection(store$),
            createViewableAreaSection(store$)
        ]
    };
    return mainSection;
};
const createSensorSizeSection = (store$) => {
    const sensorWidthWidget = {
        min: 0,
        max: 1000,
        step: .01,
        value$: store$.sensorWidth$,
        label: 'Sensor Width',
        readonly: false,
        setValue: (sensorX) => store$.setSensorWidth(sensorX),
        type: 'number'
    };
    const sensorHeightWidget = {
        min: 0,
        max: 1000,
        step: .01,
        value$: store$.sensorHeight$,
        label: 'Sensor Height',
        readonly: false,
        setValue: (sensorY) => store$.setSensorHeight(sensorY),
        type: 'number'
    };
    const sensorPresetWidget = {
        type: 'choice',
        label: 'Sensor Presets',
        value$: (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(),
        readonly: false,
        choices: [{
                label: '1/2.7" - 5.33mm * 4mm',
                sensorX: 5.33,
                sensorY: 4
            }, {
                label: '1/3" - 4.8mm * 3.6mm',
                sensorX: 4.8,
                sensorY: 3.6
            }, {
                label: 'Sony a7R III 35mm',
                sensorX: 35.9,
                sensorY: 24
            }],
        setValue: ({ sensorX, sensorY }) => {
            store$.setSensorWidth(sensorX);
            store$.setSensorHeight(sensorY);
        }
    };
    const mainSection = {
        type: 'section',
        label: 'Sensor Settings',
        children: [
            sensorWidthWidget,
            sensorHeightWidget,
            sensorPresetWidget
        ]
    };
    return mainSection;
};
const createViewableAreaSection = (store$) => {
    const viewWidth = {
        value$: store$.viewWidth$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(value => { return `${round(value, 10)}mm`; })),
        readonly: true,
        setValue: (newVal) => newVal,
        label: 'View Width',
        type: 'label'
    };
    const viewHeight = {
        value$: store$.viewHeight$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(value => { return `${round(value, 10)}mm`; })),
        readonly: true,
        setValue: (newVal) => newVal,
        label: 'View Height',
        type: 'label'
    };
    const mainSection = {
        type: 'section',
        label: 'View Area',
        children: [
            viewWidth,
            viewHeight
        ]
    };
    return mainSection;
};
function round(value, decimals) {
    return Math.round(value * decimals) / decimals;
}


/***/ }),

/***/ 65141:
/*!*****************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/features/engine/engine.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineComponent": () => (/* binding */ EngineComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 20945);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 33637);
/* harmony import */ var _engine_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.service */ 38341);
/* harmony import */ var _camera_engine_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera-engine.widget */ 97376);
/* harmony import */ var _store_engine_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/engine.store */ 91187);
/* harmony import */ var _store_controller_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/controller.store */ 24288);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 57057);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 65792);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 70409);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 93137);
/* harmony import */ var _core_components_panel_panel_resize_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/panel/panel-resize.service */ 39416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _core_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/panel/panel.component */ 94304);














const _c0 = ["cameraView"];
const _c1 = ["overView"];
class EngineComponent {
    constructor(engServ, store$, controllerStore$, panelResizeService) {
        this.engServ = engServ;
        this.store$ = store$;
        this.controllerStore$ = controllerStore$;
        this.panelResizeService = panelResizeService;
        this.displayCameraView = true;
        this.cameraEngineWidget = (0,_camera_engine_widget__WEBPACK_IMPORTED_MODULE_1__.createCameraEngineWidget)(this.store$);
        this.cameraEngineState$ = this.store$.select(x => x);
        this.controllerStore$.up$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(x => x)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store$.viewDistance$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([pressed, currentDistance]) => {
            this.store$.setViewDistance(currentDistance + 1);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.interval)(50, rxjs__WEBPACK_IMPORTED_MODULE_10__.asyncScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.delay)(500, rxjs__WEBPACK_IMPORTED_MODULE_10__.asyncScheduler)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.controllerStore$.up$, this.store$.viewDistance$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(([i, isDown, currentDistance]) => {
                const dif = Math.min(Math.ceil(i / 10), 10);
                this.store$.setViewDistance(currentDistance + dif);
            })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeWhile)(([i, isPressed, curr]) => isPressed));
        })).subscribe();
        this.controllerStore$.down$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(x => x)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store$.viewDistance$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([pressed, currentDistance]) => {
            this.store$.setViewDistance(currentDistance - 1);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.interval)(50, rxjs__WEBPACK_IMPORTED_MODULE_10__.asyncScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.delay)(500, rxjs__WEBPACK_IMPORTED_MODULE_10__.asyncScheduler)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.controllerStore$.down$, this.store$.viewDistance$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(([i, isDown, currentDistance]) => {
                const dif = Math.min(Math.ceil(i / 10), 10);
                this.store$.setViewDistance(currentDistance - dif);
            })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeWhile)(([i, isPressed, curr]) => isPressed));
        })).subscribe();
        // this.controllerStore$.leftJoyY$.pipe(filter(x => Math.abs(x) > .01)).pipe(throttleTime(100, asyncScheduler, {trailing: true})).pipe(withLatestFrom(this.store$.viewDistance$)).subscribe(([leftJoyY, currentDistance]) => {
        //   this.store$.setViewDistance(currentDistance - Math.ceil(leftJoyY * 10));
        // });
        this.controllerStore$.rightJoyY$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(x => Math.abs(x) > .07)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.throttleTime)(50, rxjs__WEBPACK_IMPORTED_MODULE_10__.asyncScheduler, { trailing: true, leading: true })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store$.viewDistance$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([value, currentDistance]) => {
            this.store$.setViewDistance(currentDistance - Math.ceil(value * 20));
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.interval)(50, rxjs__WEBPACK_IMPORTED_MODULE_10__.asyncScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.controllerStore$.rightJoyY$, this.store$.viewDistance$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(([i, joyY, currentDistance]) => {
                this.store$.setViewDistance(currentDistance - Math.ceil(joyY * 20));
            })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeWhile)(([i, joyY, curr]) => Math.abs(joyY) > .07));
        })).subscribe();
        this.panelResizeService.onResize$.subscribe(() => {
            const { clientWidth, clientHeight } = this.overView.nativeElement;
            this.engServ.setSize(clientWidth, clientHeight);
        });
        window.addEventListener("gamepadconnected", (event) => {
            console.log("A gamepad connected:");
            console.log(event.gamepad);
            event.gamepad.vibrationActuator.playEffect("dual-rumble", {
                startDelay: 0,
                duration: 100,
                weakMagnitude: .4,
                strongMagnitude: .8
            });
            this.pollGamepad();
        });
        window.addEventListener("gamepaddisconnected", (event) => {
            console.log("A gamepad disconnected:");
            console.log(event.gamepad);
        });
    }
    pollGamepad() {
        const gamepads = navigator.getGamepads();
        if (gamepads.length > 0) {
            const gamepad = gamepads[0];
            if (gamepad)
                this.controllerStore$.setControllerState(gamepad);
            requestAnimationFrame(() => {
                //this.ngZone.runOutsideAngular(() => {
                this.pollGamepad();
                //});
            });
        }
    }
    ngAfterViewInit() {
        this.engServ.createScene(this.overView, this.cameraView);
        this.engServ.animate();
        setTimeout(() => {
            this.store$.setSensorSize({ sensorWidth: 5.33, sensorHeight: 4 });
            this.store$.setFocalLength(6);
            this.store$.setViewDistance(200);
        }, 1000);
    }
}
EngineComponent.ɵfac = function EngineComponent_Factory(t) { return new (t || EngineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_engine_service__WEBPACK_IMPORTED_MODULE_0__.EngineService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_store_engine_store__WEBPACK_IMPORTED_MODULE_2__.EngineStateStore), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_store_controller_store__WEBPACK_IMPORTED_MODULE_3__.ControllerStateStore), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_components_panel_panel_resize_service__WEBPACK_IMPORTED_MODULE_4__.PanelResizeService)); };
EngineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: EngineComponent, selectors: [["poc-engine"]], viewQuery: function EngineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.cameraView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.overView = _t.first);
    } }, hostVars: 2, hostBindings: function EngineComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("display-camera-view", ctx.displayCameraView);
    } }, inputs: { displayCameraView: "displayCameraView" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵProvidersFeature"]([_store_controller_store__WEBPACK_IMPORTED_MODULE_3__.ControllerStateStore])], decls: 5, vars: 1, consts: [[1, "over-view"], ["overView", ""], ["label", "Camera View", 3, "collapsed"], [1, "camera-view"], ["cameraView", ""]], template: function EngineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "poc-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("collapsed", !ctx.displayCameraView);
    } }, directives: [_core_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_5__.PanelComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 1000;\n  background-color: #333;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 300px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .core-camera-element[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: blue;\n}\n.over-view[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\npoc-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  box-sizing: border-box;\n  width: auto;\n  border-radius: 5px;\n  border: 1px solid var(--surface-50);\n  overflow: hidden;\n}\npoc-panel[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0UsV0FBQTtBQUFOO0FBS0k7RUFDRSxnQkFBQTtBQUhOO0FBU0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFORjtBQVNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQU5GO0FBUUU7RUFDRSxrQkFBQTtBQU5KIiwiZmlsZSI6ImVuZ2luZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuY29udHJvbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgei1pbmRleDogMTAwMDtcbiAgICAvL3BhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmNvcmUtY2FtZXJhLWVsZW1lbnQge1xuICAgID4gZGl2IHtcbiAgICAgIGJhY2tncm91bmQ6IGJsdWU7XG4gICAgfVxuICB9XG59XG5cblxuLm92ZXItdmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5wb2MtcGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgbGVmdDogMXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS01MCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgY2FudmFzIHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 43603:
/*!**************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/features/engine/engine.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineModule": () => (/* binding */ EngineModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _engine_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.component */ 65141);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 91211);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/core.module */ 50168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);





class EngineModule {
}
EngineModule.ɵfac = function EngineModule_Factory(t) { return new (t || EngineModule)(); };
EngineModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EngineModule });
EngineModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EngineModule, { declarations: [_engine_component__WEBPACK_IMPORTED_MODULE_0__.EngineComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule], exports: [_engine_component__WEBPACK_IMPORTED_MODULE_0__.EngineComponent] }); })();


/***/ }),

/***/ 38341:
/*!***************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/features/engine/engine.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineService": () => (/* binding */ EngineService)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ 97758);
/* harmony import */ var three_orbitcontrols_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-orbitcontrols-ts */ 60009);
/* harmony import */ var three_orbitcontrols_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three_orbitcontrols_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _camera_engine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera-engine.service */ 33605);
/* harmony import */ var _store_engine_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/engine.store */ 91187);
/* harmony import */ var _renderer_CSS3DRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer/CSS3DRenderer */ 14130);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ 78717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 74788);










// let frustumSize = 400;
class EngineService {
    constructor(ngZone, store$) {
        this.ngZone = ngZone;
        this.store$ = store$;
        this.animationSpeed = 0.00005;
        this.lastTick = 0;
        this.height = 0;
        this.clock = new three__WEBPACK_IMPORTED_MODULE_5__.Clock();
        this.PARENT_WIDTH = 320;
        this.PARENT_HEIGHT = 240;
        this.aspect = this.PARENT_WIDTH / this.PARENT_HEIGHT;
        this.cameraEngineService = new _camera_engine_service__WEBPACK_IMPORTED_MODULE_1__.CameraEngineService(store$);
    }
    ngOnDestroy() {
        if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
        }
    }
    createScene(holder, cameraViewHolder) {
        // The first step is to get the reference of the canvas element from our HTML document
        this.aspect = this.PARENT_WIDTH / this.PARENT_HEIGHT;
        this.scene = new three__WEBPACK_IMPORTED_MODULE_5__.Scene();
        //this.scene.add(this.cameraEngineService.group);
        this.scene.add(this.cameraEngineService.viewCamera);
        //this.scene.add(this.cameraEngineService._viewCamera);
        this.scene.add(this.cameraEngineService.viewCameraHelper);
        this.scene.add(this.cameraEngineService.lensCamera);
        this.scene.add(this.cameraEngineService.lensCameraHelper);
        this.camera = new three__WEBPACK_IMPORTED_MODULE_5__.PerspectiveCamera(50, 1, 1, 30000);
        this.camera.position.x = 400;
        this.camera.position.y = 600;
        this.camera.position.z = 400;
        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_5__.HemisphereLight(0xC7E8FF, 0xFFE3B3, 0.4));
        const axesHelper = new three__WEBPACK_IMPORTED_MODULE_5__.AxesHelper(100);
        axesHelper.position.set(0, 0, 0);
        this.scene.add(axesHelper);
        this.tableMesh = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(new three__WEBPACK_IMPORTED_MODULE_5__.BoxGeometry(420, 1, 293, 10, 2, 10), new three__WEBPACK_IMPORTED_MODULE_5__.MeshBasicMaterial({ color: 0x999999, wireframe: false }));
        this.tableMesh.position.setY(-1);
        this.tableMesh.frustumCulled = false;
        this.tableMesh.renderOrder = 9;
        this.scene.add(this.tableMesh);
        const loader = new three__WEBPACK_IMPORTED_MODULE_5__.TextureLoader();
        const tex = loader.load('assets/Hutt_Valley_History_Early_History_002.tif.jpg');
        this.photoMesh = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(new three__WEBPACK_IMPORTED_MODULE_5__.PlaneGeometry(150 * 1.380444856348471, 150, 16, 9), new three__WEBPACK_IMPORTED_MODULE_5__.MeshBasicMaterial({ map: tex, wireframe: false }));
        //this.photoMesh.position.setY(+.05);
        this.photoMesh.rotateX(-Math.PI / 2);
        this.photoMesh.renderOrder = 10;
        this.photoMesh.frustumCulled = false;
        this.scene.add(this.photoMesh);
        // const mtlLoader = new MTLLoader();
        // mtlLoader.load('/assets/camera.mtl', (mtl) => {
        //   mtl.preload();
        //   const objLoader = new OBJLoader();
        //   objLoader.setMaterials(mtl);
        //   objLoader.load('/assets/camera.obj', (root) => {
        //     root.scale.set(60, 60, 60);
        //     root.rotateX(Math.PI / 2);
        //     root.rotateZ(Math.PI);
        //     root.position.setZ(-1)
        //     this.scene.add(root);
        //     // compute the box that contains all the stuff
        //     // from root and below
        //     const box = new THREE.Box3().setFromObject(root);
        //     this.cameraModel = root;
        //   });
        // });
        // const skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
        // const skybox = new THREE.Mesh(skyboxGeo, new THREE.MeshBasicMaterial({color: 0x111111, wireframe: false, side: THREE.BackSide}));
        // this.scene.add(skybox);
        const holderWidth = holder.nativeElement.clientWidth;
        const holderHeight = holder.nativeElement.clientHeight;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(holderWidth, holderHeight);
        this.renderer.setClearColor('black', 0);
        this.camera.aspect = holderWidth / holderHeight;
        this.camera.updateProjectionMatrix();
        this.cameraViewrenderer = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({ antialias: true });
        this.cameraViewrenderer.setPixelRatio(window.devicePixelRatio);
        this.store$.sensorSize$.subscribe(({ sensorWidth, sensorHeight }) => {
            this.cameraViewrenderer.setSize(300 * (sensorWidth / sensorHeight), 300);
        });
        holder.nativeElement.appendChild(this.renderer.domElement);
        cameraViewHolder.nativeElement.appendChild(this.cameraViewrenderer.domElement);
        this.controls = new three_orbitcontrols_ts__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableKeys = true;
        this.controls.enableZoom = true;
        this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        this.controls.dampingFactor = 0.5;
        // this.controls = new FirstPersonControls(this.camera, this.renderer.domElement);
        // this.controls.lookSpeed = 0.04;
        // //this.controls.activeLook = false;
        // this.controls.movementSpeed = 75;
        // this.controls.noFly = false;
        this.cssRenderer = new _renderer_CSS3DRenderer__WEBPACK_IMPORTED_MODULE_3__.CSS3DRenderer();
        this.cssRenderer.setSize(holderWidth, holderHeight);
        this.cssRenderer.domElement.style.position = 'absolute';
        this.cssRenderer.domElement.style.top = '0px';
        this.cssRenderer.domElement.style.left = '0px';
        this.cssRenderer.domElement.classList.add('css3d');
        this.cssRenderer.domElement.style.pointerEvents = 'none';
        holder.nativeElement.appendChild(this.cssRenderer.domElement);
        this.scene2 = new three__WEBPACK_IMPORTED_MODULE_5__.Scene();
        const element = document.createElement('div');
        element.style.width = '100%';
        element.style.height = '100%';
        element.style.position = 'relative';
        this.widthDimension = document.createElement('div');
        this.heightDimension = document.createElement('div');
        this.widthDimensionLabel = document.createElement('div');
        this.heightDimensionLabel = document.createElement('div');
        this.widthDimension.append(this.widthDimensionLabel);
        this.heightDimension.append(this.heightDimensionLabel);
        this.widthDimension.classList.add('dimension', 'dimension-width');
        this.heightDimension.classList.add('dimension', 'dimension-height');
        element.append(this.widthDimension);
        element.append(this.heightDimension);
        const svg = d3__WEBPACK_IMPORTED_MODULE_4__.select(element).append('svg');
        this.widthAxisScale = (0,d3__WEBPACK_IMPORTED_MODULE_4__.scaleLinear)()
            .domain([0, 0]) // This is what is written on the Axis: from 0 to 100
            .range([0, 0]); // This is where the axis is placed: from 100px to 800px
        this.heightAxisScale = (0,d3__WEBPACK_IMPORTED_MODULE_4__.scaleLinear)()
            .domain([0, 0]) // This is what is written on the Axis: from 0 to 100
            .range([0, 0]); // This is where the axis is placed: from 100px to 800px
        this.widthAxisGroup = svg
            .append("g")
            .attr('class', 'axis-group axis-width')
            .call((0,d3__WEBPACK_IMPORTED_MODULE_4__.axisBottom)(this.widthAxisScale));
        this.heightAxisGroup = svg
            .append("g")
            .attr('class', 'axis-group axis-height')
            .call((0,d3__WEBPACK_IMPORTED_MODULE_4__.axisLeft)(this.heightAxisScale));
        this.css3dObject = new _renderer_CSS3DRenderer__WEBPACK_IMPORTED_MODULE_3__.CSS3DObject(element);
        this.css3dObject.position.set(0, 0, 0);
        this.css3dObject.rotateX(-Math.PI / 2);
        this.scene2.add(this.css3dObject);
        // this.controls = new DragControls(this.camera, this.renderer.domElement);
        this.camera.lookAt(this.cameraEngineService.viewCamera.position);
        this.controls.update();
        this.renderer.autoClear = false;
        this.cameraViewrenderer.autoClear = false;
        this.store$.viewDistance$.subscribe(newHeight => {
            this.cameraEngineService.setCameraPosition(newHeight);
        });
        this.store$.viewSize$.subscribe(({ viewWidth, viewHeight }) => {
            this.css3dObject.element.style.width = `${viewWidth}px`;
            this.css3dObject.element.style.height = `${viewHeight}px`;
            function makeTicks(halfValue, tickSize) {
                const ticks = [-halfValue];
                const offset = halfValue % tickSize;
                for (let i = -halfValue + offset; i < halfValue; i += tickSize) {
                    if (i < halfValue) {
                        ticks.push(i);
                    }
                }
                ticks.push(halfValue);
                return ticks;
            }
            const halfWidth = viewWidth / 2;
            this.widthAxisScale.range([-halfWidth, halfWidth]).domain([-halfWidth, halfWidth]).ticks();
            this.widthAxisGroup.call((0,d3__WEBPACK_IMPORTED_MODULE_4__.axisBottom)(this.widthAxisScale).tickValues(makeTicks(halfWidth, 10)).tickSizeInner(3));
            const halfHeight = viewHeight / 2;
            this.heightAxisScale.range([-halfHeight, halfHeight]).domain([-halfHeight, halfHeight]).ticks();
            this.heightAxisGroup.call((0,d3__WEBPACK_IMPORTED_MODULE_4__.axisLeft)(this.heightAxisScale).tickValues(makeTicks(halfHeight, 10)).tickSizeInner(3));
            this.widthDimensionLabel.innerText = `${viewWidth.toFixed(1)}mm`;
            this.heightDimensionLabel.innerText = `${viewHeight.toFixed(1)}mm`;
        });
    }
    animate() {
        this.frameId = requestAnimationFrame(() => {
            this.ngZone.runOutsideAngular(() => {
                this.render();
            });
        });
    }
    setCameraHeight(newHeight) {
        this.cameraEngineService.setCameraPosition(newHeight);
    }
    render() {
        try {
            this.renderer.clear();
            this.cameraViewrenderer.render(this.scene, this.cameraEngineService.viewCamera);
            this.renderer.render(this.scene, this.camera);
            this.cssRenderer.render(this.scene2, this.camera);
            this.controls.update();
            this.animate();
        }
        catch (e) {
            console.error(e);
        }
    }
    setSize(width, height) {
        this.PARENT_HEIGHT = height;
        this.PARENT_WIDTH = width;
        this.aspect = this.PARENT_WIDTH / this.PARENT_HEIGHT;
        this.renderer.setSize(this.PARENT_WIDTH, this.PARENT_HEIGHT);
        this.cssRenderer.setSize(this.PARENT_WIDTH, this.PARENT_HEIGHT);
        this.camera.aspect = this.aspect;
        this.camera.updateProjectionMatrix();
        ;
    }
}
EngineService.ɵfac = function EngineService_Factory(t) { return new (t || EngineService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_store_engine_store__WEBPACK_IMPORTED_MODULE_2__.EngineStateStore)); };
EngineService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: EngineService, factory: EngineService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 14130:
/*!***********************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/features/engine/renderer/CSS3DRenderer.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSS3DObject": () => (/* binding */ CSS3DObject),
/* harmony export */   "CSS3DRenderer": () => (/* binding */ CSS3DRenderer),
/* harmony export */   "CSS3DSprite": () => (/* binding */ CSS3DSprite)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 97758);

class CSS3DObject extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
    constructor(element) {
        super();
        this.element = element;
        this.isCSS3DObject = true;
        this.element = element || document.createElement('div');
        this.element.style.position = 'absolute';
        this.element.style.pointerEvents = 'none';
        this.element.style.userSelect = 'none';
        this.element.classList.add('core-css-plane');
        this.element.setAttribute('draggable', 'false');
        this.addEventListener('removed', () => {
            this.traverse((o) => {
                const object = o;
                if (object.element instanceof Element && object.element.parentNode !== null) {
                    object.element.parentNode.removeChild(object.element);
                }
            });
        });
    }
    copy(source, recursive) {
        super.copy(source, recursive);
        this.element = source.element.cloneNode(true);
        return this;
    }
}
class CSS3DSprite extends CSS3DObject {
    constructor(element) {
        super(element);
        this.isCSS3DSprite = true;
        this.rotation.set(0, 0, 0);
    }
    copy(source, recursive) {
        super.copy(source, recursive);
        this.rotation.set(source.x, source.y, source.z);
        return this;
    }
}
class CSS3DRenderer {
    constructor() {
        this._matrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
        this._matrix2 = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
        this._width = 0;
        this._height = 0;
        this._widthHalf = 0;
        this._heightHalf = 0;
        this.cache = {
            camera: {
                fov: 0,
                style: ''
            },
            objects: new WeakMap()
        };
        const domElement = document.createElement('div');
        domElement.style.overflow = 'hidden';
        domElement.style.pointerEvents = 'none';
        domElement.classList.add('core-dom-element');
        this.domElement = domElement;
        const cameraElement = document.createElement('div');
        cameraElement.style.transformStyle = 'preserve-3d';
        cameraElement.style.pointerEvents = 'none';
        cameraElement.classList.add('core-camera-element');
        this.cameraElement = cameraElement;
        domElement.appendChild(cameraElement);
    }
    getSize() {
        return {
            width: this._width,
            height: this._height
        };
    }
    ;
    setSize(width, height) {
        this._width = width;
        this._height = height;
        this._widthHalf = this._width / 2;
        this._heightHalf = this._height / 2;
        this.domElement.style.width = width + 'px';
        this.domElement.style.height = height + 'px';
        this.cameraElement.style.width = width + 'px';
        this.cameraElement.style.height = height + 'px';
    }
    ;
    render(scene, camera) {
        const isPerspectiveCamera = camera instanceof three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera;
        const isOrthographicCamera = camera instanceof three__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera;
        const fov = camera.projectionMatrix.elements[5] * this._heightHalf;
        if (this.cache.camera.fov !== fov) {
            this.domElement.style.perspective = isPerspectiveCamera ? fov + 'px' : '';
            this.cache.camera.fov = fov;
        }
        if (scene.autoUpdate === true)
            scene.updateMatrixWorld();
        if (camera.parent === null)
            camera.updateMatrixWorld();
        let tx, ty;
        let cameraCSSMatrix = '';
        if (camera instanceof three__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera) {
            tx = -(camera.right + camera.left) / 2;
            ty = (camera.top + camera.bottom) / 2;
            cameraCSSMatrix = 'scale(' + fov + ')' + 'translate(' + epsilon(tx) + 'px,' + epsilon(ty) + 'px)' + getCameraCSSMatrix(camera.matrixWorldInverse);
        }
        else {
            cameraCSSMatrix = 'translateZ(' + fov + 'px)' + getCameraCSSMatrix(camera.matrixWorldInverse);
        }
        const style = cameraCSSMatrix + 'translate(' + this._widthHalf + 'px,' + this._heightHalf + 'px)';
        if (this.cache.camera.style !== style) {
            this.cameraElement.style.transform = style;
            this.cache.camera.style = style;
        }
        this.renderObject(scene, scene, camera, cameraCSSMatrix);
    }
    ;
    renderObject(object, scene, camera, cameraCSSMatrix) {
        if (object instanceof CSS3DObject || object instanceof CSS3DSprite) {
            const renderer = this;
            //object.onBeforeRender(renderer, scene, camera, new BufferGeometry(), new Material(), new Group());
            let style;
            if (object instanceof CSS3DSprite) {
                // http://swiftcoder.wordpress.com/2008/11/25/constructing-a-billboard-matrix/
                this._matrix.copy(camera.matrixWorldInverse);
                this._matrix.transpose();
                if (object.rotation.z !== 0)
                    this._matrix.multiply(this._matrix2.makeRotationZ(object.rotation.z));
                this._matrix.copyPosition(object.matrixWorld);
                this._matrix.scale(object.scale);
                this._matrix.elements[3] = 0;
                this._matrix.elements[7] = 0;
                this._matrix.elements[11] = 0;
                this._matrix.elements[15] = 1;
                style = getObjectCSSMatrix(this._matrix);
            }
            else {
                style = getObjectCSSMatrix(object.matrixWorld);
            }
            const element = object.element;
            const cachedObject = this.cache.objects.get(object);
            if (cachedObject === undefined || cachedObject.style !== style) {
                element.style.transform = style;
                const objectData = {
                    style: style
                };
                this.cache.objects.set(object, objectData);
            }
            element.style.display = object.visible ? '' : 'none';
            if (element.parentNode !== this.cameraElement) {
                this.cameraElement.appendChild(element);
            }
            //	object.onAfterRender( _this, scene, camera );
        }
        for (let i = 0, l = object.children.length; i < l; i++) {
            this.renderObject(object.children[i], scene, camera, cameraCSSMatrix);
        }
    }
}
function epsilon(value) {
    return Math.abs(value) < 1e-10 ? 0 : value;
}
function getCameraCSSMatrix(matrix) {
    const elements = matrix.elements;
    return 'matrix3d(' + epsilon(elements[0]) + ',' + epsilon(-elements[1]) + ',' + epsilon(elements[2]) + ',' + epsilon(elements[3]) + ',' + epsilon(elements[4]) + ',' + epsilon(-elements[5]) + ',' + epsilon(elements[6]) + ',' + epsilon(elements[7]) + ',' + epsilon(elements[8]) + ',' + epsilon(-elements[9]) + ',' + epsilon(elements[10]) + ',' + epsilon(elements[11]) + ',' + epsilon(elements[12]) + ',' + epsilon(-elements[13]) + ',' + epsilon(elements[14]) + ',' + epsilon(elements[15]) + ')';
}
function getObjectCSSMatrix(matrix) {
    const elements = matrix.elements;
    const matrix3d = 'matrix3d(' + epsilon(elements[0]) + ',' + epsilon(elements[1]) + ',' + epsilon(elements[2]) + ',' + epsilon(elements[3]) + ',' + epsilon(-elements[4]) + ',' + epsilon(-elements[5]) + ',' + epsilon(-elements[6]) + ',' + epsilon(-elements[7]) + ',' + epsilon(elements[8]) + ',' + epsilon(elements[9]) + ',' + epsilon(elements[10]) + ',' + epsilon(elements[11]) + ',' + epsilon(elements[12]) + ',' + epsilon(elements[13]) + ',' + epsilon(elements[14]) + ',' + epsilon(elements[15]) + ')';
    return 'translate(-50%,-50%)' + matrix3d;
}



/***/ }),

/***/ 24288:
/*!***********************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/features/engine/store/controller.store.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControllerStateStore": () => (/* binding */ ControllerStateStore)
/* harmony export */ });
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/component-store */ 30004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);



class ControllerStateStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_0__.ComponentStore {
    constructor() {
        super({
            button1: false,
            down: false,
            left: false,
            leftJoyX: 0,
            leftJoyY: 0,
            right: false,
            rightJoyX: 0,
            rightJoyY: 0,
            up: false
        });
        this.up$ = this.select(state => state.up);
        this.down$ = this.select(state => state.down);
        this.left$ = this.select(state => state.left);
        this.right$ = this.select(state => state.right);
        this.button1$ = this.select(state => state.button1);
        this.leftJoyX$ = this.select(state => state.leftJoyX);
        this.leftJoyY$ = this.select(state => state.leftJoyY);
        this.rightJoyX$ = this.select(state => state.rightJoyX);
        this.rightJoyY$ = this.select(state => state.rightJoyY);
        this.setControllerState = this.updater((state, gamepad) => setControllerState(state, gamepad));
    }
}
ControllerStateStore.ɵfac = function ControllerStateStore_Factory(t) { return new (t || ControllerStateStore)(); };
ControllerStateStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ControllerStateStore, factory: ControllerStateStore.ɵfac });
function setControllerState(oldState, gamepad) {
    return {
        button1: gamepad.buttons[0].pressed,
        down: gamepad.buttons[13].pressed,
        left: gamepad.buttons[14].pressed,
        leftJoyX: gamepad.axes[0],
        leftJoyY: gamepad.axes[1],
        right: gamepad.buttons[5].pressed,
        rightJoyX: gamepad.axes[2],
        rightJoyY: gamepad.axes[3],
        up: gamepad.buttons[12].pressed
    };
}


/***/ }),

/***/ 91187:
/*!*******************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/features/engine/store/engine.store.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineStateStore": () => (/* binding */ EngineStateStore)
/* harmony export */ });
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/component-store */ 30004);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 74788);




class EngineStateStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_0__.ComponentStore {
    constructor() {
        super({
            focalLength: 1,
            sensorHeight: 1,
            sensorWidth: 1,
            sensorDiagonal: 1,
            viewHeight: 1,
            viewWidth: 1,
            viewDistance: 1,
            aovDiag: 1,
            aovHeight: 1,
            aovWidth: 1
        });
        this.sensorWidth$ = this.select(state => state.sensorWidth);
        this.sensorHeight$ = this.select(state => state.sensorHeight);
        this.sensorDiagonal$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.sensorWidth$, this.sensorHeight$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([sensorWidth, sensorHeight]) => {
            const diag = Math.sqrt((sensorHeight * sensorHeight) + (sensorWidth * sensorWidth));
            return Math.round(diag * 10) / 10;
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinct)());
        this.sensorArea$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.sensorWidth$, this.sensorHeight$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([sensorWidth, sensorHeight]) => {
            const area = sensorHeight * sensorWidth;
            return Math.round(area * 10) / 10;
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinct)());
        this.focalLength$ = this.select(state => state.focalLength);
        this.sensorSize$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.sensorWidth$, this.sensorHeight$])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([sensorWidth, sensorHeight]) => ({ sensorWidth, sensorHeight })));
        this.viewWidth$ = this.select(state => state.viewWidth);
        this.viewHeight$ = this.select(state => state.viewHeight);
        this.viewDistance$ = this.select(state => state.viewDistance);
        this.viewSize$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.viewWidth$, this.viewHeight$])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([viewWidth, viewHeight]) => ({ viewWidth, viewHeight })));
        this.aovWidth$ = this.select(state => state.aovWidth);
        this.aovHeight$ = this.select(state => state.aovHeight);
        this.aovDiag$ = this.select(state => state.aovDiag);
        this.setSensorWidth = this.updater((state, sensorWidth) => updateSensorSize(state, sensorWidth, state.sensorHeight));
        this.setSensorHeight = this.updater((state, sensorHeight) => updateSensorSize(state, state.sensorWidth, sensorHeight));
        this.setSensorSize = this.updater((state, size) => updateSensorSize(state, size.sensorWidth, size.sensorHeight));
        this.setFocalLength = this.updater((state, focalLength) => updateFocalLength(state, focalLength));
        this.setViewDistance = this.updater((state, viewDistance) => setViewDistance(state, viewDistance));
    }
}
EngineStateStore.ɵfac = function EngineStateStore_Factory(t) { return new (t || EngineStateStore)(); };
EngineStateStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: EngineStateStore, factory: EngineStateStore.ɵfac });
function radToDeg(rad) {
    return rad * 180 / Math.PI;
}
function degToRad(deg) {
    return deg * Math.PI / 180;
}
function updateSensorSize(oldState, sensorWidth, sensorHeight) {
    const { aovHeight, aovWidth } = updateAngleOfView(sensorWidth, sensorHeight, oldState.focalLength);
    const { viewWidth, viewHeight } = updateViewSizeForDistance(oldState.viewDistance, aovWidth, aovHeight);
    return Object.assign(Object.assign({}, oldState), { sensorWidth,
        sensorHeight,
        aovWidth,
        aovHeight,
        viewWidth,
        viewHeight });
}
function updateFocalLength(oldState, focalLength) {
    if (isNaN(focalLength) || focalLength === null || focalLength === 0) {
        return oldState;
    }
    const { aovHeight, aovWidth } = updateAngleOfView(oldState.sensorWidth, oldState.sensorHeight, focalLength);
    const { viewHeight, viewWidth } = updateViewSizeForDistance(oldState.viewDistance, aovWidth, aovHeight);
    return Object.assign(Object.assign({}, oldState), { focalLength,
        aovWidth,
        aovHeight,
        viewWidth,
        viewHeight });
}
function setViewDistance(oldState, viewDistance) {
    viewDistance = Math.round(viewDistance * 10) / 10;
    const { viewHeight, viewWidth } = updateViewSizeForDistance(viewDistance, oldState.aovWidth, oldState.aovHeight);
    return Object.assign(Object.assign({}, oldState), { viewDistance,
        viewWidth,
        viewHeight });
}
function updateAngleOfView(sensorWidth, sensorHeight, focalLength) {
    return {
        aovHeight: calculateAngleOfView(sensorHeight, focalLength),
        aovWidth: calculateAngleOfView(sensorWidth, focalLength)
    };
}
function calculateAngleOfView(sensorDimension, focalLength) {
    return 2 * Math.atan(sensorDimension / (2 * focalLength));
}
function updateViewSizeForDistance(viewDistance, aovWidth, aovHeight) {
    return {
        viewWidth: calculateViewSizeForDistance(viewDistance, aovWidth),
        viewHeight: calculateViewSizeForDistance(viewDistance, aovHeight)
    };
}
function calculateViewSizeForDistance(distance, FOV) {
    const viewSize = 2 * distance * Math.tan(FOV / 2);
    return Math.round(viewSize * 10) / 10;
}


/***/ }),

/***/ 72601:
/*!***************************************************************************!*\
  !*** ./apps/coretainium-optics/src/app/services/camera-preset.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraPresetService": () => (/* binding */ CameraPresetService),
/* harmony export */   "PresetsStore": () => (/* binding */ PresetsStore)
/* harmony export */ });
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/component-store */ 30004);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);




class CameraPresetService {
    constructor(presetsStore) {
        this.presetsStore = presetsStore;
        this.presets$ = this.presetsStore.presets$;
        this._localStoreKey = 'focal-presets';
        const presetString = localStorage.getItem(this._localStoreKey);
        try {
            const presets = JSON.parse(presetString !== null && presetString !== void 0 ? presetString : '[]');
            this.presetsStore.initPresets(presets);
        }
        catch (e) {
            console.log('Unable to parse presets');
        }
    }
    addPreset(newPreset) {
        this.presetsStore.addPreset(newPreset);
        this.presets$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1)).subscribe(presets => {
            localStorage.setItem(this._localStoreKey, JSON.stringify(presets));
        });
    }
    removePreset(preset) {
        this.presetsStore.removePreset(preset);
        this.presets$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1)).subscribe(presets => {
            localStorage.setItem(this._localStoreKey, JSON.stringify(presets));
        });
    }
}
CameraPresetService.ɵfac = function CameraPresetService_Factory(t) { return new (t || CameraPresetService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](PresetsStore)); };
CameraPresetService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CameraPresetService, factory: CameraPresetService.ɵfac, providedIn: 'root' });
class PresetsStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__.ComponentStore {
    constructor() {
        super({
            presets: []
        });
        this.presets$ = this.select(state => state.presets);
        this.initPresets = this.updater((state, presets) => {
            return Object.assign(Object.assign({}, state), { presets });
        });
        this.addPreset = this.updater((state, newPreset) => {
            const presets = [...state.presets, newPreset];
            return Object.assign(Object.assign({}, state), { presets });
        });
        this.removePreset = this.updater((state, preset) => {
            const presets = state.presets.filter(x => x.id !== preset.id);
            return Object.assign(Object.assign({}, state), { presets });
        });
    }
}
PresetsStore.ɵfac = function PresetsStore_Factory(t) { return new (t || PresetsStore)(); };
PresetsStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PresetsStore, factory: PresetsStore.ɵfac });


/***/ }),

/***/ 57335:
/*!*****************************************************************!*\
  !*** ./apps/coretainium-optics/src/environments/environment.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 84149:
/*!*********************************************!*\
  !*** ./apps/coretainium-optics/src/main.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 91211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 90155);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 57335);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84149)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map