function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-project-project-module"], {
  /***/
  "./src/app/main/apps/dashboards/project/project.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/main/apps/dashboards/project/project.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProjectDashboardComponent, FilesDataSource */

  /***/
  function srcAppMainAppsDashboardsProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectDashboardComponent", function () {
      return ProjectDashboardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesDataSource", function () {
      return FilesDataSource;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! d3-shape */
    "./node_modules/d3-shape/src/index.js");
    /* harmony import */


    var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fuse/animations */
    "./src/@fuse/animations/index.ts");
    /* harmony import */


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");
    /* harmony import */


    var app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/main/apps/dashboards/project/project.service */
    "./src/app/main/apps/dashboards/project/project.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
    "./src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _fuse_directives_fuse_if_on_dom_fuse_if_on_dom_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @fuse/directives/fuse-if-on-dom/fuse-if-on-dom.directive */
    "./src/@fuse/directives/fuse-if-on-dom/fuse-if-on-dom.directive.ts");
    /* harmony import */


    var _fuse_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../../@fuse/components/sidebar/sidebar.component */
    "./src/@fuse/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _fuse_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../../@fuse/components/widget/widget.component */
    "./src/@fuse/components/widget/widget.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _fuse_components_widget_widget_toggle_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../../../@fuse/components/widget/widget-toggle.directive */
    "./src/@fuse/components/widget/widget-toggle.directive.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _fuse_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../../../../../@fuse/pipes/keys.pipe */
    "./src/@fuse/pipes/keys.pipe.ts");

    function ProjectDashboardComponent_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r359 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDashboardComponent_button_17_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r359);

          var project_r357 = ctx.$implicit;

          var ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r358.selectedProject = project_r357;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r357 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r357.name);
      }
    }

    function ProjectDashboardComponent_div_21_mat_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var range_r368 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", range_r368.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", range_r368.value, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "accent": a0
      };
    };

    function ProjectDashboardComponent_div_21_button_105_Template(rf, ctx) {
      if (rf & 1) {
        var _r371 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDashboardComponent_div_21_button_105_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r371);

          var range_r369 = ctx.$implicit;

          var ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r370.widget5.currentRange = range_r369.key;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var range_r369 = ctx.$implicit;

        var ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r361.widget5.currentRange == range_r369.key));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", range_r369.value, " ");
      }
    }

    function ProjectDashboardComponent_div_21_ngx_charts_bar_vertical_stacked_109_Template(rf, ctx) {
      if (rf & 1) {
        var _r373 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-charts-bar-vertical-stacked", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function ProjectDashboardComponent_div_21_ngx_charts_bar_vertical_stacked_109_Template_ngx_charts_bar_vertical_stacked_select_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r373);

          var ctx_r372 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r372.widget5.onSelect($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r362 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx_r362.widget5.scheme)("results", ctx_r362.widgets.widget5.mainChart[ctx_r362.widget5.currentRange])("gradient", ctx_r362.widget5.gradient)("xAxis", ctx_r362.widget5.xAxis)("yAxis", ctx_r362.widget5.yAxis)("legend", ctx_r362.widget5.legend)("showXAxisLabel", ctx_r362.widget5.showXAxisLabel)("showYAxisLabel", ctx_r362.widget5.showYAxisLabel)("xAxisLabel", ctx_r362.widget5.xAxisLabel)("yAxisLabel", ctx_r362.widget5.yAxisLabel);
      }
    }

    function ProjectDashboardComponent_div_21_div_111_ngx_charts_area_chart_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-area-chart", 97);
      }

      if (rf & 2) {
        var widget_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("results", widget_r374.value.chart[ctx_r375.widget5.currentRange])("scheme", ctx_r375.widget5.supporting.scheme)("gradient", ctx_r375.widget5.supporting.gradient)("xAxis", ctx_r375.widget5.supporting.xAxis)("yAxis", ctx_r375.widget5.supporting.yAxis)("legend", ctx_r375.widget5.supporting.legend)("showXAxisLabel", ctx_r375.widget5.supporting.showXAxisLabel)("showYAxisLabel", ctx_r375.widget5.supporting.showYAxisLabel)("xAxisLabel", ctx_r375.widget5.supporting.xAxisLabel)("yAxisLabel", ctx_r375.widget5.supporting.yAxisLabel)("curve", ctx_r375.widget5.supporting.curve);
      }
    }

    function ProjectDashboardComponent_div_21_div_111_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectDashboardComponent_div_21_div_111_ngx_charts_area_chart_7_Template, 1, 11, "ngx-charts-area-chart", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var widget_r374 = ctx.$implicit;

        var ctx_r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](widget_r374.value.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", widget_r374.value.count[ctx_r363.widget5.currentRange], " ");
      }
    }

    function ProjectDashboardComponent_div_21_mat_option_120_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var range_r377 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", range_r377.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", range_r377.value, " ");
      }
    }

    function ProjectDashboardComponent_div_21_ngx_charts_pie_chart_123_Template(rf, ctx) {
      if (rf & 1) {
        var _r379 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-charts-pie-chart", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function ProjectDashboardComponent_div_21_ngx_charts_pie_chart_123_Template_ngx_charts_pie_chart_select_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r379);

          var ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r378.widget6.onSelect($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx_r365.widget6.scheme)("results", ctx_r365.widgets.widget6.mainChart[ctx_r365.widget6.currentRange])("legend", ctx_r365.widget6.showLegend)("explodeSlices", ctx_r365.widget6.explodeSlices)("labels", ctx_r365.widget6.labels)("doughnut", ctx_r365.widget6.doughnut)("gradient", ctx_r365.widget6.gradient);
      }
    }

    function ProjectDashboardComponent_div_21_mat_option_142_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var range_r380 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", range_r380.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", range_r380.value, " ");
      }
    }

    function ProjectDashboardComponent_div_21_div_144_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var event_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", event_r381.location, "");
      }
    }

    function ProjectDashboardComponent_div_21_div_144_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectDashboardComponent_div_21_div_144_span_7_Template, 2, 1, "span", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var event_r381 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r381.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r381.time);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r381.location);
      }
    }

    var _c1 = function _c1() {
      return {
        value: "50"
      };
    };

    var _c2 = function _c2() {
      return {
        y: "100%"
      };
    };

    var _c3 = function _c3(a1) {
      return {
        value: "*",
        params: a1
      };
    };

    function ProjectDashboardComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r385 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fuse-widget", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectDashboardComponent_div_21_Template_mat_select_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r385);

          var ctx_r384 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r384.widgets.widget1.currentRange = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDashboardComponent_div_21_mat_option_6_Template, 2, 2, "mat-option", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "keys");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "fuse-widget", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "fuse-widget", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "fuse-widget", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-icon", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "fuse-widget", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, ProjectDashboardComponent_div_21_button_105_Template, 2, 4, "button", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](106, "keys");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, ProjectDashboardComponent_div_21_ngx_charts_bar_vertical_stacked_109_Template, 1, 10, "ngx-charts-bar-vertical-stacked", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ProjectDashboardComponent_div_21_div_111_Template, 8, 2, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](112, "keys");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "fuse-widget", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-select", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectDashboardComponent_div_21_Template_mat_select_ngModelChange_119_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r385);

          var ctx_r386 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r386.widget6.currentRange = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, ProjectDashboardComponent_div_21_mat_option_120_Template, 2, 2, "mat-option", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](121, "keys");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, ProjectDashboardComponent_div_21_ngx_charts_pie_chart_123_Template, 1, 7, "ngx-charts-pie-chart", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "fuse-widget", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-select", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectDashboardComponent_div_21_Template_mat_select_ngModelChange_141_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r385);

          var ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r387.widget7.currentRange = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, ProjectDashboardComponent_div_21_mat_option_142_Template, 2, 2, "mat-option", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](143, "keys");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, ProjectDashboardComponent_div_21_div_144_Template, 11, 3, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](59, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c2)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r351.widgets.widget1.currentRange);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 47, ctx_r351.widgets.widget1.ranges));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget1.data.count[ctx_r351.widgets.widget1.currentRange], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r351.widgets.widget1.data.label, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget1.data.extra.label, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget1.data.extra.count[ctx_r351.widgets.widget1.currentRange], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget1.detail, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](61, _c2)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r351.widgets.widget2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget2.data.count, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r351.widgets.widget2.data.label, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget2.data.extra.label, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r351.widgets.widget2.data.extra.count);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget2.detail, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](64, _c2)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r351.widgets.widget3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget3.data.count, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r351.widgets.widget3.data.label, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget3.data.extra.label, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r351.widgets.widget3.data.extra.count);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget3.detail, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](68, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](67, _c2)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r351.widgets.widget4.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget4.data.count, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r351.widgets.widget4.data.label, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget4.data.extra.label, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r351.widgets.widget4.data.extra.count);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget4.detail, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](71, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](70, _c2)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r351.widgets.widget5.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](106, 49, ctx_r351.widgets.widget5.ranges));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](112, 51, ctx_r351.widgets.widget5.supporting));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](74, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](73, _c2)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r351.widgets.widget6.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r351.widget6.currentRange);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](121, 53, ctx_r351.widgets.widget6.ranges));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget6.footerLeft.count[ctx_r351.widget6.currentRange], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r351.widgets.widget6.footerLeft.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.widgets.widget6.footerRight.count[ctx_r351.widget6.currentRange], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r351.widgets.widget6.footerRight.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](77, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](76, _c2)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r351.widgets.widget7.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r351.widget7.currentRange);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](143, 55, ctx_r351.widgets.widget7.ranges));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r351.widgets.widget7.schedule[ctx_r351.widget7.currentRange]);
      }
    }

    function ProjectDashboardComponent_div_23_ngx_charts_pie_chart_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-charts-pie-chart", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function ProjectDashboardComponent_div_23_ngx_charts_pie_chart_7_Template_ngx_charts_pie_chart_select_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r396);

          var ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r395.widget8.onSelect($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx_r388.widget8.scheme)("results", ctx_r388.widgets.widget8.mainChart)("legend", ctx_r388.widget8.legend)("explodeSlices", ctx_r388.widget8.explodeSlices)("labels", ctx_r388.widget8.labels)("doughnut", ctx_r388.widget8.doughnut)("gradient", ctx_r388.widget8.gradient);
      }
    }

    function ProjectDashboardComponent_div_23_mat_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var range_r397 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", range_r397.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", range_r397.value, " ");
      }
    }

    function ProjectDashboardComponent_div_23_ngx_charts_area_chart_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-area-chart", 97);
      }

      if (rf & 2) {
        var ctx_r390 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("results", ctx_r390.widgets.widget9.weeklySpent.chart[ctx_r390.widget9.currentRange])("scheme", ctx_r390.widget9.scheme)("gradient", ctx_r390.widget9.gradient)("xAxis", ctx_r390.widget9.xAxis)("yAxis", ctx_r390.widget9.yAxis)("legend", ctx_r390.widget9.legend)("showXAxisLabel", ctx_r390.widget9.showXAxisLabel)("showYAxisLabel", ctx_r390.widget9.showYAxisLabel)("xAxisLabel", ctx_r390.widget9.xAxisLabel)("yAxisLabel", ctx_r390.widget9.yAxisLabel)("curve", ctx_r390.widget9.curve);
      }
    }

    function ProjectDashboardComponent_div_23_ngx_charts_area_chart_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-area-chart", 97);
      }

      if (rf & 2) {
        var ctx_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("results", ctx_r391.widgets.widget9.totalSpent.chart[ctx_r391.widget9.currentRange])("scheme", ctx_r391.widget9.scheme)("gradient", ctx_r391.widget9.gradient)("xAxis", ctx_r391.widget9.xAxis)("yAxis", ctx_r391.widget9.yAxis)("legend", ctx_r391.widget9.legend)("showXAxisLabel", ctx_r391.widget9.showXAxisLabel)("showYAxisLabel", ctx_r391.widget9.showYAxisLabel)("xAxisLabel", ctx_r391.widget9.xAxisLabel)("yAxisLabel", ctx_r391.widget9.yAxisLabel)("curve", ctx_r391.widget9.curve);
      }
    }

    function ProjectDashboardComponent_div_23_ngx_charts_area_chart_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-area-chart", 97);
      }

      if (rf & 2) {
        var ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("results", ctx_r392.widgets.widget9.remaining.chart[ctx_r392.widget9.currentRange])("scheme", ctx_r392.widget9.scheme)("gradient", ctx_r392.widget9.gradient)("xAxis", ctx_r392.widget9.xAxis)("yAxis", ctx_r392.widget9.yAxis)("legend", ctx_r392.widget9.legend)("showXAxisLabel", ctx_r392.widget9.showXAxisLabel)("showYAxisLabel", ctx_r392.widget9.showYAxisLabel)("xAxisLabel", ctx_r392.widget9.xAxisLabel)("yAxisLabel", ctx_r392.widget9.yAxisLabel)("curve", ctx_r392.widget9.curve);
      }
    }

    function ProjectDashboardComponent_div_23_th_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r398 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r398.title, " ");
      }
    }

    function ProjectDashboardComponent_div_23_tr_68_td_1_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cell_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cell_r401.icon, " ");
      }
    }

    function ProjectDashboardComponent_div_23_tr_68_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectDashboardComponent_div_23_tr_68_td_1_mat_icon_3_Template, 2, 1, "mat-icon", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cell_r401 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", cell_r401.classes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cell_r401.value, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r401.icon);
      }
    }

    function ProjectDashboardComponent_div_23_tr_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDashboardComponent_div_23_tr_68_td_1_Template, 4, 3, "td", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r399 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r399);
      }
    }

    function ProjectDashboardComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fuse-widget", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectDashboardComponent_div_23_ngx_charts_pie_chart_7_Template, 1, 7, "ngx-charts-pie-chart", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fuse-widget", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectDashboardComponent_div_23_Template_mat_select_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r405);

          var ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r404.widget9.currentRange = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectDashboardComponent_div_23_mat_option_15_Template, 2, 2, "mat-option", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "keys");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProjectDashboardComponent_div_23_ngx_charts_area_chart_27_Template, 1, 11, "ngx-charts-area-chart", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProjectDashboardComponent_div_23_ngx_charts_area_chart_38_Template, 1, 11, "ngx-charts-area-chart", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ProjectDashboardComponent_div_23_ngx_charts_area_chart_49_Template, 1, 11, "ngx-charts-area-chart", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "fuse-widget", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "table", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ProjectDashboardComponent_div_23_th_66_Template, 2, 1, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ProjectDashboardComponent_div_23_tr_68_Template, 2, 1, "tr", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r352.widgets.widget8.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c2)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r352.widgets.widget9.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r352.widget9.currentRange);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 19, ctx_r352.widgets.widget9.ranges));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r352.widgets.widget9.weeklySpent.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r352.widgets.widget9.weeklySpent.count[ctx_r352.widget9.currentRange]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r352.widgets.widget9.totalSpent.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r352.widgets.widget9.totalSpent.count[ctx_r352.widget9.currentRange]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r352.widgets.widget9.remaining.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r352.widgets.widget9.remaining.count[ctx_r352.widget9.currentRange]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r352.widgets.widget9.totalBudget.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r352.widgets.widget9.totalBudget.count);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c2)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r352.widgets.widget10.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r352.widgets.widget10.table.columns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r352.widgets.widget10.table.rows);
      }
    }

    function ProjectDashboardComponent_div_25_mat_header_cell_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-cell", 140);
      }
    }

    function ProjectDashboardComponent_div_25_mat_cell_12_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 142);
      }

      if (rf & 2) {
        var contact_r421 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", contact_r421.name)("src", contact_r421.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProjectDashboardComponent_div_25_mat_cell_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDashboardComponent_div_25_mat_cell_12_img_1_Template, 1, 2, "img", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contact_r421 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contact_r421.avatar);
      }
    }

    function ProjectDashboardComponent_div_25_mat_header_cell_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectDashboardComponent_div_25_mat_cell_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 143);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contact_r424 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", contact_r424.name, " ", contact_r424.lastName, "");
      }
    }

    function ProjectDashboardComponent_div_25_mat_header_cell_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Position ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectDashboardComponent_div_25_mat_cell_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contact_r425 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contact_r425.position, " ");
      }
    }

    function ProjectDashboardComponent_div_25_mat_header_cell_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Office ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectDashboardComponent_div_25_mat_cell_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contact_r426 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contact_r426.office, " ");
      }
    }

    function ProjectDashboardComponent_div_25_mat_header_cell_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectDashboardComponent_div_25_mat_cell_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contact_r427 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contact_r427.email, " ");
      }
    }

    function ProjectDashboardComponent_div_25_mat_header_cell_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectDashboardComponent_div_25_mat_cell_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contact_r428 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contact_r428.phone, " ");
      }
    }

    function ProjectDashboardComponent_div_25_mat_header_row_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
      }
    }

    function ProjectDashboardComponent_div_25_mat_row_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
      }
    }

    function ProjectDashboardComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fuse-widget", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-table", 122, 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectDashboardComponent_div_25_mat_header_cell_11_Template, 1, 0, "mat-header-cell", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectDashboardComponent_div_25_mat_cell_12_Template, 2, 1, "mat-cell", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectDashboardComponent_div_25_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectDashboardComponent_div_25_mat_cell_15_Template, 3, 2, "mat-cell", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProjectDashboardComponent_div_25_mat_header_cell_17_Template, 2, 0, "mat-header-cell", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectDashboardComponent_div_25_mat_cell_18_Template, 3, 1, "mat-cell", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProjectDashboardComponent_div_25_mat_header_cell_20_Template, 2, 0, "mat-header-cell", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectDashboardComponent_div_25_mat_cell_21_Template, 3, 1, "mat-cell", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProjectDashboardComponent_div_25_mat_header_cell_23_Template, 2, 0, "mat-header-cell", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProjectDashboardComponent_div_25_mat_cell_24_Template, 3, 1, "mat-cell", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProjectDashboardComponent_div_25_mat_header_cell_26_Template, 2, 0, "mat-header-cell", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProjectDashboardComponent_div_25_mat_cell_27_Template, 3, 1, "mat-cell", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProjectDashboardComponent_div_25_mat_header_row_28_Template, 1, 0, "mat-header-row", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProjectDashboardComponent_div_25_mat_row_29_Template, 1, 0, "mat-row", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r353.widgets.widget11.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r353.widgets.widget11.table.rows.length, " members ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r353.widget11.dataSource);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r353.widgets.widget11.table.columns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r353.widgets.widget11.table.columns);
      }
    }

    function ProjectDashboardComponent_div_95_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xB0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r430 = ctx.$implicit;

        var ctx_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r430.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fontIcon", day_r430.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r430.temp[ctx_r356.widgets.weatherWidget.tempUnit]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r356.widgets.weatherWidget.tempUnit, " ");
      }
    }

    var _c4 = function _c4() {
      return {
        x: "50px"
      };
    };

    var ProjectDashboardComponent =
    /*#__PURE__*/
    function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       * @param {ProjectDashboardService} _projectDashboardService
       */
      function ProjectDashboardComponent(_fuseSidebarService, _projectDashboardService) {
        var _this = this;

        _classCallCheck(this, ProjectDashboardComponent);

        this._fuseSidebarService = _fuseSidebarService;
        this._projectDashboardService = _projectDashboardService;
        this.widget5 = {};
        this.widget6 = {};
        this.widget7 = {};
        this.widget8 = {};
        this.widget9 = {};
        this.widget11 = {};
        this.dateNow = Date.now();
        /**
         * Widget 5
         */

        this.widget5 = {
          currentRange: 'TW',
          xAxis: true,
          yAxis: true,
          gradient: false,
          legend: false,
          showXAxisLabel: false,
          xAxisLabel: 'Days',
          showYAxisLabel: false,
          yAxisLabel: 'Isues',
          scheme: {
            domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
          },
          onSelect: function onSelect(ev) {
            console.log(ev);
          },
          supporting: {
            currentRange: '',
            xAxis: false,
            yAxis: false,
            gradient: false,
            legend: false,
            showXAxisLabel: false,
            xAxisLabel: 'Days',
            showYAxisLabel: false,
            yAxisLabel: 'Isues',
            scheme: {
              domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            curve: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveBasis"]
          }
        };
        /**
         * Widget 6
         */

        this.widget6 = {
          currentRange: 'TW',
          legend: false,
          explodeSlices: false,
          labels: true,
          doughnut: true,
          gradient: false,
          scheme: {
            domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63']
          },
          onSelect: function onSelect(ev) {
            console.log(ev);
          }
        };
        /**
         * Widget 7
         */

        this.widget7 = {
          currentRange: 'T'
        };
        /**
         * Widget 8
         */

        this.widget8 = {
          legend: false,
          explodeSlices: false,
          labels: true,
          doughnut: false,
          gradient: false,
          scheme: {
            domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffc107']
          },
          onSelect: function onSelect(ev) {
            console.log(ev);
          }
        };
        /**
         * Widget 9
         */

        this.widget9 = {
          currentRange: 'TW',
          xAxis: false,
          yAxis: false,
          gradient: false,
          legend: false,
          showXAxisLabel: false,
          xAxisLabel: 'Days',
          showYAxisLabel: false,
          yAxisLabel: 'Isues',
          scheme: {
            domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
          },
          curve: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveBasis"]
        };
        setInterval(function () {
          _this.dateNow = Date.now();
        }, 1000);
      } // -----------------------------------------------------------------------------------------------------
      // @ Lifecycle hooks
      // -----------------------------------------------------------------------------------------------------

      /**
       * On init
       */


      _createClass(ProjectDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.projects = this._projectDashboardService.projects;
          this.selectedProject = this.projects[0];
          this.widgets = this._projectDashboardService.widgets;
          /**
           * Widget 11
           */

          this.widget11.onContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this.widget11.onContactsChanged.next(this.widgets.widget11.table.rows);
          this.widget11.dataSource = new FilesDataSource(this.widget11);
        } // -----------------------------------------------------------------------------------------------------
        // @ Public methods
        // -----------------------------------------------------------------------------------------------------

        /**
         * Toggle the sidebar
         *
         * @param name
         */

      }, {
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return ProjectDashboardComponent;
    }();

    ProjectDashboardComponent.ɵfac = function ProjectDashboardComponent_Factory(t) {
      return new (t || ProjectDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["FuseSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectDashboardService"]));
    };

    ProjectDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectDashboardComponent,
      selectors: [["project-dashboard"]],
      decls: 96,
      vars: 43,
      consts: [["id", "dashboard-project", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "p-24", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["mat-icon-button", "", "fxHide.gt-md", "", 1, "sidebar-toggle", "mr-8", 3, "click"], ["fxLayout", "row"], [1, "selected-project"], ["mat-icon-button", "", "aria-label", "Select project", 1, "project-selector", 3, "matMenuTriggerFor"], ["projectsMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "content"], ["dynamicHeight", ""], ["label", "Home"], ["class", "widget-group p-12", "fxLayout", "row wrap", "fxFlex", "100", 4, "fuseIfOnDom"], ["label", "Budget Summary"], ["class", "widget-group", "fxLayout", "row wrap", "fxFlex", "100", 4, "fuseIfOnDom"], ["label", "Team Members"], ["name", "project-dashboard-right-sidebar-1", "position", "right", "lockedOpen", "gt-md", 1, "sidebar"], ["fxLayout", "column", "fxFlex", "100", 1, "widget-group"], [1, "pb-0"], [1, "fuse-widget-front"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "pl-16", "pr-8", "py-16"], [1, "h3"], ["mat-icon-button", "", "aria-label", "more", 3, "matMenuTriggerFor"], ["moreMenu", "matMenu"], ["mat-menu-item", "", "aria-label", "Flip widget"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "p-16", "pb-24"], [1, "h1", "secondary-text"], [1, "font-size-72", "line-height-88", "secondary-text", "font-weight-400"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "h4"], [1, "secondary-text", "mr-8"], [1, "secondary-text"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "p-16", "pb-32"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fontSet", "meteocons", 1, "icon", "s-40", "secondary-text", "mr-16", 3, "fontIcon"], [1, "mat-display-2", "m-0", "font-weight-300", "secondary-text"], [1, "font-size-48", "font-weight-300", "hint-text", "text-super", "ml-8"], [1, "mat-display-2", "mb-0", "font-weight-300", "hint-text", "ng-binding"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-16", "by"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fontSet", "meteocons", "fontIcon", "icon-windy", 1, "s-16", "secondary-text", "mr-8"], [1, "secondary-text", "ml-5"], ["fontSet", "meteocons", "fontIcon", "icon-compass", 1, "s-16", "secondary-text", "mr-8"], ["fontSet", "meteocons", "fontIcon", "icon-rainy", 1, "s-16", "secondary-text", "mr-8"], [1, "py-16"], ["class", "py-16 px-24", "fxLayout", "row", "fxLayoutAlign", "space-between center", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], ["fxLayout", "row wrap", "fxFlex", "100", 1, "widget-group", "p-12"], ["fxLayout", "column", "fxFlex", "100", "fxFlex.gt-xs", "50", "fxFlex.gt-md", "25", 1, "widget"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "pl-16", "pr-8", "py-16", "h-52"], ["aria-label", "Change range", 1, "simplified", "font-size-16", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "fuseWidgetToggle", "", "aria-label", "more"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "pt-8", "pb-32"], [1, "light-blue-fg", "font-size-72", "line-height-72"], [1, "h3", "secondary-text", "font-weight-500"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "p-16", "border-top"], [1, "h4", "secondary-text", "text-truncate"], [1, "h4", "ml-8"], [1, "fuse-widget-back", "p-16", "pt-32"], ["mat-icon-button", "", "fuseWidgetToggle", "", "aria-label", "Flip widget", 1, "fuse-widget-flip-button"], [1, "s-16"], ["mat-icon-button", "", "fuseWidgetToggle", "", "aria-label", "more", 1, "fuse-widget-flip-button"], [1, "red-fg", "font-size-72", "line-height-72"], [1, "orange-fg", "font-size-72", "line-height-72"], [1, "blue-grey-fg", "font-size-72", "line-height-72"], ["fxLayout", "row", "fxFlex", "100", 1, "widget", "widget5"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "px-16", "border-bottom"], ["fxFlex", "", 1, "py-16", "h3"], ["fxFlex", "0 1 auto", "fxLayout", "row", 1, "py-16"], ["mat-button", "", "class", "px-16", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start"], ["fxLayout", "row", "fxFlex", "100", "fxFlex.gt-sm", "50", 1, "h-420", "my-16"], [3, "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "select", 4, "fuseIfOnDom"], ["fxFlex", "100", "fxLayout", "row wrap", "fxFlex.gt-sm", "50", 1, "my-16"], ["fxLayout", "column", "fxFlex", "100", "fxFlex.gt-sm", "50", "fxLayoutAlign", "center", "class", "mb-24", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxFlex", "100", "fxFlex.gt-sm", "50", 1, "widget"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "px-16", "py-8", "border-bottom"], ["aria-label", "Change range", 1, "simplified", 3, "ngModel", "ngModelChange"], [1, "h-400"], [3, "scheme", "results", "legend", "explodeSlices", "labels", "doughnut", "gradient", "select", 4, "fuseIfOnDom"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", 1, "py-8", "mh-16", "border-top"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "100", "fxFlex.gt-sm", "50", 1, "py-8", "border-right"], [1, "mat-display-1", "mb-0"], [1, "h4"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "100", "fxFlex.gt-sm", "50", 1, "py-8"], ["class", "p-16", "fxLayout", "row", "fxLayoutAlign", "space-between center", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-button", "", 1, "px-16", 3, "ngClass", "click"], [3, "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "select"], ["fxLayout", "column", "fxFlex", "100", "fxFlex.gt-sm", "50", "fxLayoutAlign", "center", 1, "mb-24"], [1, "px-24"], [1, "h4", "secondary-text"], [1, "mat-display-1", "m-0"], [1, "h-64"], [3, "results", "scheme", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "curve", 4, "fuseIfOnDom"], [3, "results", "scheme", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "curve"], [3, "scheme", "results", "legend", "explodeSlices", "labels", "doughnut", "gradient", "select"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-16"], [4, "ngIf"], ["mat-icon-button", "", "aria-label", "More information"], ["fxLayout", "row wrap", "fxFlex", "100", 1, "widget-group"], [1, "h3", "px-16", "py-24"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "px-16", "py-12", "border-bottom"], ["aria-label", "Change range", 3, "ngModel", "ngModelChange"], ["fxLayout", "column", "fxLayoutAlign", "center", "fxLayout.gt-xs", "row", "fxLayoutAlign.gt-xs", "space-between end", 1, "px-16", "py-24"], ["fxFlex", "0 1 auto"], [1, "pt-8", "mat-display-1", "m-0", "font-weight-300", "text-nowrap"], ["fxFlex", "", 1, "h-52"], [1, "px-16", "py-24", "border-top"], [1, "pt-8", "mat-display-1", "m-0", "font-weight-300"], ["fxLayout", "row", "fxFlex", "100", 1, "widget"], ["ms-responsive-table", "", 1, "simple-table-container"], [1, "table-title"], [1, "simple"], [4, "ngFor", "ngForOf"], [1, "p-4", 3, "ngClass"], ["class", "s-16", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-24", "mb-8", "border-bottom"], [1, "h2"], [1, "text-boxed", "accent", "m-0"], [3, "dataSource"], ["table", ""], ["matColumnDef", "avatar"], ["fxFlex", "96px", 4, "matHeaderCellDef"], ["fxFlex", "96px", 4, "matCellDef"], ["matColumnDef", "name"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "position"], ["fxHide", "", "fxShow.gt-sm", "", 4, "matHeaderCellDef"], ["fxHide", "", "fxShow.gt-sm", "", 4, "matCellDef"], ["matColumnDef", "office"], ["fxHide", "", "fxShow.gt-md", "", 4, "matHeaderCellDef"], ["fxHide", "", "fxShow.gt-md", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "phone"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["fxFlex", "96px"], ["class", "avatar", 3, "alt", "src", 4, "ngIf"], [1, "avatar", 3, "alt", "src"], [1, "text-truncate", "font-weight-600"], ["fxHide", "", "fxShow.gt-sm", ""], [1, "position", "text-truncate"], ["fxHide", "", "fxShow.gt-md", ""], [1, "office", "text-truncate"], [1, "email", "text-truncate"], [1, "phone", "text-truncate"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "py-16", "px-24"], ["fontSet", "meteocons", 1, "secondary-text", "mr-16", 3, "fontIcon"], [1, "h2", "font-weight-300", "secondary-text", "text-super"], [1, "h2", "font-weight-300", "secondary-text"]],
      template: function ProjectDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome back, Charlie! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDashboardComponent_Template_button_click_6_listener($event) {
            return ctx.toggleSidebar("project-dashboard-right-sidebar-1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "more_horiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-menu", null, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProjectDashboardComponent_button_17_Template, 3, 1, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-tab-group", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-tab", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectDashboardComponent_div_21_Template, 145, 79, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProjectDashboardComponent_div_23_Template, 69, 31, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-tab", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProjectDashboardComponent_div_25_Template, 30, 11, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "fuse-sidebar", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "fuse-widget", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-menu", null, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "fuse-widget");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "place");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-menu", null, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\xB0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "mat-icon", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "mat-icon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, ProjectDashboardComponent_div_95_Template, 11, 4, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var _r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c4)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedProject.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r349);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateStagger", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c2)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 21, ctx.dateNow, "EEEE, HH:mm:ss"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r354);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](47, 24, ctx.dateNow, "MMMM"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](50, 27, ctx.dateNow, "d"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 30, ctx.dateNow, "y"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c2)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.widgets.weatherWidget.locations[ctx.widgets.weatherWidget.currentLocation].name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r354);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fontIcon", ctx.widgets.weatherWidget.locations[ctx.widgets.weatherWidget.currentLocation].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.widgets.weatherWidget.locations[ctx.widgets.weatherWidget.currentLocation].temp[ctx.widgets.weatherWidget.tempUnit], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.widgets.weatherWidget.locations[ctx.widgets.weatherWidget.currentLocation].windSpeed[ctx.widgets.weatherWidget.speedUnit], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widgets.weatherWidget.speedUnit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.widgets.weatherWidget.locations[ctx.widgets.weatherWidget.currentLocation].windDirection, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.widgets.weatherWidget.locations[ctx.widgets.weatherWidget.currentLocation].rainProbability, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.widgets.weatherWidget.locations[ctx.widgets.weatherWidget.currentLocation].next3Days);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_8__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultShowHideDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTab"], _fuse_directives_fuse_if_on_dom_fuse_if_on_dom_directive__WEBPACK_IMPORTED_MODULE_15__["FuseIfOnDomDirective"], _fuse_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["FuseSidebarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _fuse_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_17__["FuseWidgetComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgModel"], _fuse_components_widget_widget_toggle_directive__WEBPACK_IMPORTED_MODULE_21__["FuseWidgetToggleDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_23__["BarVerticalStackedComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_23__["AreaChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_23__["PieChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDivider"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], _fuse_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_26__["KeysPipe"]],
      styles: ["#dashboard-project > .sidebar {\n  width: 280px;\n  min-width: 280px;\n  max-width: 280px;\n}\n#dashboard-project > .center > .header {\n  height: 160px;\n  min-height: 160px;\n  max-height: 160px;\n}\n#dashboard-project > .center > .header .selected-project {\n  background: rgba(0, 0, 0, 0.12);\n  color: #FFFFFF;\n  padding: 8px 16px;\n  height: 40px;\n  line-height: 24px;\n  font-size: 16px;\n  border-radius: 8px 0 0 0;\n}\n#dashboard-project > .center > .header .project-selector {\n  margin-left: 1px;\n  background: rgba(0, 0, 0, 0.12);\n  border-radius: 0 8px 0 0;\n}\n#dashboard-project > .center > .header .project-selector mat-icon {\n  color: #FFFFFF;\n}\n#dashboard-project > .center > .content {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n#dashboard-project > .center > .content mat-tab-group {\n  height: 100%;\n}\n#dashboard-project > .center > .content mat-tab-group .mat-tab-body-wrapper {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n#dashboard-project > .center > .content .mat-tab-label-container {\n  padding: 0 24px;\n}\n#dashboard-project .widget.widget5 .gridline-path.gridline-path-horizontal {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL2Rhc2hib2FyZHMvcHJvamVjdC9DOlxcVXNlcnNcXFNhbnRpYWdvXFxEb2N1bWVudHNcXFBST1lFQ1RPUyBJTVBFTFxcdG90YWxqdXJpZGljYS9zcmNcXGFwcFxcbWFpblxcYXBwc1xcZGFzaGJvYXJkc1xccHJvamVjdFxccHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hcHBzL2Rhc2hib2FyZHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBRE1RO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNKWjtBRE1ZO0VBQ0ksK0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUNKaEI7QURPWTtFQUNJLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtBQ0xoQjtBRE9nQjtFQUNJLGNBQUE7QUNMcEI7QURVUTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtBQ1JaO0FEVVk7RUFDSSxZQUFBO0FDUmhCO0FEVWdCO0VBQ0ksbUJBQUE7VUFBQSxZQUFBO0FDUnBCO0FEWVk7RUFDSSxlQUFBO0FDVmhCO0FEbUJZO0VBQ0ksYUFBQTtBQ2pCaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FwcHMvZGFzaGJvYXJkcy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGFzaGJvYXJkLXByb2plY3Qge1xyXG5cclxuICAgID4gLnNpZGViYXIge1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMjgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgPiAuY2VudGVyIHtcclxuXHJcbiAgICAgICAgPiAuaGVhZGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xyXG5cclxuICAgICAgICAgICAgLnNlbGVjdGVkLXByb2plY3Qge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb2plY3Qtc2VsZWN0b3Ige1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDhweCAwIDA7XHJcblxyXG4gICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+IC5jb250ZW50IHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICAgICAgIG1hdC10YWItZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5tYXQtdGFiLWJvZHktd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LXRhYi1sYWJlbC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53aWRnZXQge1xyXG5cclxuICAgICAgICAmLndpZGdldDUge1xyXG5cclxuICAgICAgICAgICAgLmdyaWRsaW5lLXBhdGguZ3JpZGxpbmUtcGF0aC1ob3Jpem9udGFsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIjZGFzaGJvYXJkLXByb2plY3QgPiAuc2lkZWJhciB7XG4gIHdpZHRoOiAyODBweDtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWF4LXdpZHRoOiAyODBweDtcbn1cbiNkYXNoYm9hcmQtcHJvamVjdCA+IC5jZW50ZXIgPiAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgbWluLWhlaWdodDogMTYwcHg7XG4gIG1heC1oZWlnaHQ6IDE2MHB4O1xufVxuI2Rhc2hib2FyZC1wcm9qZWN0ID4gLmNlbnRlciA+IC5oZWFkZXIgLnNlbGVjdGVkLXByb2plY3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCAwO1xufVxuI2Rhc2hib2FyZC1wcm9qZWN0ID4gLmNlbnRlciA+IC5oZWFkZXIgLnByb2plY3Qtc2VsZWN0b3Ige1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiAwIDhweCAwIDA7XG59XG4jZGFzaGJvYXJkLXByb2plY3QgPiAuY2VudGVyID4gLmhlYWRlciAucHJvamVjdC1zZWxlY3RvciBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuI2Rhc2hib2FyZC1wcm9qZWN0ID4gLmNlbnRlciA+IC5jb250ZW50IHtcbiAgZmxleDogMTtcbn1cbiNkYXNoYm9hcmQtcHJvamVjdCA+IC5jZW50ZXIgPiAuY29udGVudCBtYXQtdGFiLWdyb3VwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI2Rhc2hib2FyZC1wcm9qZWN0ID4gLmNlbnRlciA+IC5jb250ZW50IG1hdC10YWItZ3JvdXAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcbiAgZmxleC1ncm93OiAxO1xufVxuI2Rhc2hib2FyZC1wcm9qZWN0ID4gLmNlbnRlciA+IC5jb250ZW50IC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMjRweDtcbn1cbiNkYXNoYm9hcmQtcHJvamVjdCAud2lkZ2V0LndpZGdldDUgLmdyaWRsaW5lLXBhdGguZ3JpZGxpbmUtcGF0aC1ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"],
      encapsulation: 2,
      data: {
        animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'project-dashboard',
          templateUrl: './project.component.html',
          styleUrls: ['./project.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }]
      }], function () {
        return [{
          type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["FuseSidebarService"]
        }, {
          type: app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectDashboardService"]
        }];
      }, null);
    })();

    var FilesDataSource =
    /*#__PURE__*/
    function (_angular_cdk_collecti) {
      _inherits(FilesDataSource, _angular_cdk_collecti);

      /**
       * Constructor
       *
       * @param _widget11
       */
      function FilesDataSource(_widget11) {
        var _this2;

        _classCallCheck(this, FilesDataSource);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(FilesDataSource).call(this));
        _this2._widget11 = _widget11;
        return _this2;
      }
      /**
       * Connect function called by the table to retrieve one stream containing the data to render.
       *
       * @returns {Observable<any[]>}
       */


      _createClass(FilesDataSource, [{
        key: "connect",
        value: function connect() {
          return this._widget11.onContactsChanged;
        }
        /**
         * Disconnect
         */

      }, {
        key: "disconnect",
        value: function disconnect() {}
      }]);

      return FilesDataSource;
    }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]);
    /***/

  },

  /***/
  "./src/app/main/apps/dashboards/project/project.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/main/apps/dashboards/project/project.module.ts ***!
    \****************************************************************/

  /*! exports provided: ProjectDashboardModule */

  /***/
  function srcAppMainAppsDashboardsProjectProjectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectDashboardModule", function () {
      return ProjectDashboardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var _fuse_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @fuse/components */
    "./src/@fuse/components/index.ts");
    /* harmony import */


    var _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @fuse/components/widget/widget.module */
    "./src/@fuse/components/widget/widget.module.ts");
    /* harmony import */


    var app_main_apps_dashboards_project_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! app/main/apps/dashboards/project/project.component */
    "./src/app/main/apps/dashboards/project/project.component.ts");
    /* harmony import */


    var app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! app/main/apps/dashboards/project/project.service */
    "./src/app/main/apps/dashboards/project/project.service.ts");

    var routes = [{
      path: '**',
      component: app_main_apps_dashboards_project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectDashboardComponent"],
      resolve: {
        data: app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_15__["ProjectDashboardService"]
      }
    }];

    var ProjectDashboardModule = function ProjectDashboardModule() {
      _classCallCheck(this, ProjectDashboardModule);
    };

    ProjectDashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProjectDashboardModule
    });
    ProjectDashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProjectDashboardModule_Factory(t) {
        return new (t || ProjectDashboardModule)();
      },
      providers: [app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_15__["ProjectDashboardService"]],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_12__["FuseSidebarModule"], _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_13__["FuseWidgetModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectDashboardModule, {
        declarations: [app_main_apps_dashboards_project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectDashboardComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_12__["FuseSidebarModule"], _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_13__["FuseWidgetModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [app_main_apps_dashboards_project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectDashboardComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_12__["FuseSidebarModule"], _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_13__["FuseWidgetModule"]],
          providers: [app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_15__["ProjectDashboardService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/dashboards/project/project.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/main/apps/dashboards/project/project.service.ts ***!
    \*****************************************************************/

  /*! exports provided: ProjectDashboardService */

  /***/
  function srcAppMainAppsDashboardsProjectProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectDashboardService", function () {
      return ProjectDashboardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProjectDashboardService =
    /*#__PURE__*/
    function () {
      /**
       * Constructor
       *
       * @param {HttpClient} _httpClient
       */
      function ProjectDashboardService(_httpClient) {
        _classCallCheck(this, ProjectDashboardService);

        this._httpClient = _httpClient;
      }
      /**
       * Resolver
       *
       * @param {ActivatedRouteSnapshot} route
       * @param {RouterStateSnapshot} state
       * @returns {Observable<any> | Promise<any> | any}
       */


      _createClass(ProjectDashboardService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            Promise.all([_this3.getProjects(), _this3.getWidgets()]).then(function () {
              resolve();
            }, reject);
          });
        }
        /**
         * Get projects
         *
         * @returns {Promise<any>}
         */

      }, {
        key: "getProjects",
        value: function getProjects() {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            _this4._httpClient.get('api/project-dashboard-projects').subscribe(function (response) {
              _this4.projects = response;
              resolve(response);
            }, reject);
          });
        }
        /**
         * Get widgets
         *
         * @returns {Promise<any>}
         */

      }, {
        key: "getWidgets",
        value: function getWidgets() {
          var _this5 = this;

          return new Promise(function (resolve, reject) {
            _this5._httpClient.get('api/project-dashboard-widgets').subscribe(function (response) {
              _this5.widgets = response;
              resolve(response);
            }, reject);
          });
        }
      }]);

      return ProjectDashboardService;
    }();

    ProjectDashboardService.ɵfac = function ProjectDashboardService_Factory(t) {
      return new (t || ProjectDashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProjectDashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProjectDashboardService,
      factory: ProjectDashboardService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=dashboards-project-project-module-es5.js.map