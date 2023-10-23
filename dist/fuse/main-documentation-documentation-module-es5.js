function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-documentation-documentation-module"], {
  /***/
  "./src/app/main/documentation/changelog/changelog.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/main/documentation/changelog/changelog.component.ts ***!
    \*********************************************************************/

  /*! exports provided: DocsChangelogComponent */

  /***/
  function srcAppMainDocumentationChangelogChangelogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsChangelogComponent", function () {
      return DocsChangelogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var DocsChangelogComponent = function DocsChangelogComponent() {
      _classCallCheck(this, DocsChangelogComponent);
    };

    DocsChangelogComponent.ɵfac = function DocsChangelogComponent_Factory(t) {
      return new (t || DocsChangelogComponent)();
    };

    DocsChangelogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocsChangelogComponent,
      selectors: [["docs-changelog"]],
      decls: 1251,
      vars: 0,
      consts: [["id", "changelog", 1, "page-layout", "simple", "fullwidth", "docs"], ["fxLayout", "column", "fxLayoutAlign", "center start", 1, "header", "accent", "p-24"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "secondary-text", "s-18"], [1, "secondary-text", "s-16"], [1, "secondary-text"], [1, "h2", "mt-16"], [1, "content", "p-24"], [1, "changelog"], [1, "entry"], [1, "title"], [1, "version"], [1, "date"], [1, "groups"], [1, "new"], [1, "fixed"], [1, "improved"], [1, "breaking-changes"]],
      template: function DocsChangelogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "chevron_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Changelog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "v9.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "2020.02.05");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Updated Angular to 9.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Updated Angular Material to 9.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Updated various other packages to latest versions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "v8.1.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2019.07.20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Updated Angular to 8.1.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Updated Angular Material to 8.1.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Updated various other packages to latest versions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "(Fuse Navigation) Multiple collapsable menu items within the same group don't expand/collapse correctly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "(Calendar App) Better dark mode support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "v8.1.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "2019.07.04");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Disabled Angular compiler checks until we fix the warnings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "v8.1.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "2019.07.04");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Updated Angular to 8.1.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Updated Angular Material to 8.0.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Use proper version on web-animations-js package");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Updated various other packages to latest versions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Updated various AngularCLI related files");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Updated various project related files");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "v8.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "2019.05.30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Updated Angular to 8.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Updated Angular Material to 8.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Updated various other packages to latest versions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Updated various AngularCLI related files");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Updated various project related files");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "(Mail Ngrx) Responsive styles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " (Animations) Added *ngIf support to the FadeInOut animation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "v7.1.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "2019.01.09");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Updated Angular to 7.2.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Updated Angular Material to 7.2.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Updated ngrx to 7.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Updated typescript to 3.2.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Updated various other packages to latest versions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Updated various AngularCLI related files");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "(Calendar) Small style fix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "(ngx-datatable) Sort arrow icons are not showing correctly and they are not aligned");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "(Flex Layout) ObservableMedia is depreciated - replaced with MediaObserver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "v7.0.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "(2018-11-16)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Updated Angular to 7.0.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Updated Angular Material to 7.0.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Updated various other packages to latest versions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "(Docs) Color picker input is wrong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "(FuseNavigation) Trigger observables on item add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "v7.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "(2018-10-19)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Breaking Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Removed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "media-breakpoint-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "media-breakpoint-down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "media-breakpoint-only");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "media-breakpoint-between");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " scss mixins. Use Material design breakpoints with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "media-breakpoint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " mixin. Breakpoint definitions can be found in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "@fuse/scss/partials/_breakpoints.scss");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " Example: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "media-breakpoint('sm')");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " // Only small ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "media-breakpoint('lt-sm')");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " // Less than small ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "media-breakpoint('gt-sm')");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " // Greater than small ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Updating the navigation directly from the object no longer works since ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "FuseNavigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " now uses ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "OnPush");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " change detection strategy for performance reasons. Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "updateNavigationItem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " method from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "FuseNavigationService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " to update the navigation items. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Updated Angular to 7.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Updated Angular Material to 7.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Updated Typescript to 3.1.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Updated various other libraries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Modernization: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Material Outline icons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "'Muli' as the primary font face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Outline form fields");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Modern navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "(Calendar) _matDialogRef is not defined");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "(Scrumboard) _matDialogRef is not defined");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "(Contacts) birthday field ignored while saving");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " (FuseNavigation) Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "ChangeDetection.OnPush");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " to increase the performance. Now you can load hundreds of thousands navigation item and it won't mind. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "v6.3.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "(2018-08-30)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Updated Angular to 6.1.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "(Toolbar) Cannot use the custom toolbar background color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "v6.3.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "(2018-08-28)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Breaking Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, " (Color Helpers) Removed 'mat-' prefix and '-bg' suffix from the color helpers that sets both background and foreground colors (i.e. mat-primary-bg -> primary , mat-red-bg -> red). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Updated Angular to 6.1.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Updated Angular Material to 6.4.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Updated various other packages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Dark color theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Easier way of working multiple Angular Material color themes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Various performance optimizations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "(ECommerce) Order page custom scrollbar is not working");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "(Quick Panel) Custom scrollbar is not working");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "(Theme Options) Side panel settings are not resetting when layout changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, " (Progress Bar) Progress bar doesn't hide when NavigationCancel or NavigationError events happen ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "(Layouts) \"transform: translateZ(0)\" causes \"position: fixed\" to break");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "(Layouts) Some layouts are not working correctly on IE11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "(Contacts) _matDialogRef is not defined");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, " (FuseConfig) Resetting the config on lazily loaded routes causes the layout items to show/hide before the actual content loads ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "v6.2.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "(2018-07-14)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Breaking Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, " (FuseLoadingBarService) Removed in favor of the new FuseProgressBar component ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Updated Angular to 6.0.9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Updated various other packages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, " (FuseProgressBar) New component and its service for globally controlling a progress bar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "(Navbar) Moved navbar styles to the variants for better granular control");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "(Global) Scrolling is not smooth on iOS devices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "(Horizontal Layout) Navbar covers the entire screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "(Boxed Layout) Boxed layout has alignment issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "v6.2.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "(2018-07-13)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "(Navbar) Doesn't scroll on Firefox, IE & Edge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "(Navbar) IE11 style fixes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "(Chat Panel) IE11 style fixes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "(Chat Panel) Style and logic tweaks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "v6.2.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "(2018-07-12)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "Added the missing 'is-mobile' check back to the AppComponent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "Scrollbar styles are being modified in some mobile devices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "(Chat Panel) Mobile scrolling and layout issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, " (Navbar) Added classes to the Fuse Sidebar components that contains the navbar to prevent style leak ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "(Toolbar) Removed unnecessary chat panel toggle method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "(Skeleton) Removed chat panel from skeleton as it's more like an app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "v6.2.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "(2018-07-12)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, " (Layout) Added SidePanel position to the layout for controlling Chat Panel and possible other panels ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "(Chat Panel) Mobile width issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Removed chat panel from auth pages using layout options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "v6.2.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "(2018-07-11)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "Updated Angular to 6.0.7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "Updated Angular Material to 6.3.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "Updated various other packages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "Updated Angular material examples");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "New Chat Panel sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "(Navbar) New style variants for the Navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "(FuseSidebar) Added 'foldedChanged' & 'openedChanged' outputs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "(FuseNavigation) Ability to add custom classes to the navigation items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "(FuseLoadingBarService) New service for showing/hiding the loading bar easily");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "Replaced cdkTable with matTable since Table is now a proper component in Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "(E-Commerce) Added sticky headers to the tables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "v6.1.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "(2018-06-17)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, " (Fuse Sidebar) Folded status doesn't work correctly when there are multiple instances ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "v6.1.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "(2018-06-16)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "Breaking Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "New layout system and layouts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "Replaced all mat-sidenav components with fuse-sidebar on apps and pages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "Navigation item type 'collapse' renamed to 'collapsable'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, "Navigation service for easier modifications and for easier swapping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "fusePerfectScrollbar now accepts a boolean to control the scrollbar's status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "fusePerfectScrollbarOptions for Perfect Scrollbar options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "Added an extra Angular Material color theme to the styles.scss file as an example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "Updated Angular and Angular Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, "Updated various other packages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, "Improved the codebase and added a lot code comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "Improved the documentation and moved them into the Demo app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "Changed the fuse-sidebar \"align\" input to \"position\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "Improved the page layouts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "Navbar toggle button and fold button alignment on right navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, "Set the selected language in toolbar from the translation service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, "Horizontal nav titles are collapsing on IE11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "Angular Material card images not showing correctly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, "Other small fixes and improvements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, "v6.0.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "(2018-05-10)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, "Updated ngRx to 6.0.0-beta.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, "Updated various other libraries to Angular 6 compatible versions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "Updated demo code to make it compatible with RxJS 6.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, "Fixed: Scrumboard \"Add a list\" button is draggable and causing an error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "v6.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "(2018-05-06)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "Updated Angular to 6.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, "Updated Angular Material to 6.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, "Updated Angular CLI to 6.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, "Updated various other packages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, "Fixed: Material icon button colors are being overwritten by Fuse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, "Fixed: Contacts app edit dialog issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, "Fixed: Navigation sidebar doesn't scroll on mobile devices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, "Fixed: Horizontal navigation doesn't have 'hidden' and 'custom function' features like the vertical navigation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "Fixed: Search bar close icon alignment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, "Fixed: Profile page header background image doesn't cover the header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "v5.2.10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "(2018-03-10)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](644, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, "Fixed: Sidebar folded bugs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, "v5.2.9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "(2018-03-10)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, "Fixed: Sidebar folded doesn't work correctly if activated programmatically");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](662, "Fixed: Skeleton AoT building issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](666, "v5.2.8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668, "(2018-03-08)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "Breaking changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](676, "core");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, " folder moved into the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, "@fuse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, " allowing project owners to have their own core folder inside the app directory. Also allows for better separation in between your app and core Fuse features. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, " Removed Angular Material module that includes all Material components at once and added imports for all modules separately. From now on, you must include the Material components that you have used in your components manually in that component's module file. This was a required changed as it does increase the development performance as well as decrease the building and the AoT building times. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](684, " Changed how navigation model works. Now it's just a simple const that being exported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, "navigation.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](687, " file. It allows for easier swapping and editing of the navigation. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, " New sidebar component. Allows us to move main navigation sidebar logic out of your way. Check out the Demo app to see the full usage. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](695, "Updated Angular to 5.2.8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](697, "Updated Angular Material to 5.2.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, "Updated Angular CLI to 1.7.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](701, "Matched the Fuse version number with the Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](703, "No more Fuse2, the package name update to Fuse since the version number matched to Angular's. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](706, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709, "Fixed various issues with Fuse Angular Material Color Picker component.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, "Fixed various other small layout and logic bugs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, "v1.3.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](717, "(2018-02-06)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "Updated Angular to 5.2.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "Updated Angular Material to 5.1.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](728, "Updated Angular CLI to 1.6.7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, "New Analytics dashboard design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "Added Chart.js examples through the new dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, "v1.3.5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, "(2018-01-24)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, "Updated ngRx to 5.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](747, "Updated Angular CLI to 1.6.5 to fix the wrong devkit version issue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](751, "v1.3.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](753, "(2018-01-18)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](760, "Updated Angular to 5.2.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "Updated Angular Material to 5.1.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](764, "Updated various other packages to latest versions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](770, "Quick Panel is too wide for smaller screens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, "Academy App course step doesn't scroll on mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](776, "v1.3.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "(2018-01-11)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](785, "Updated Angular to 5.2.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, "Updated Angular Material to 5.0.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](789, "Updated various other packages to latest versions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](795, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](796, "v1.3.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](798, "(2018-01-09)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "Updated Angular to 5.1.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](807, "Updated Angular Material to 5.0.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](809, "Updated various other packages to latest versions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](811, "Added new card designs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "Added new fuse-highlight component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, "Added lazy load to various other demo modules to make the demo project faster");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](817, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](818, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](820, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](821, "BREAKING CHANGE: Cards are moved to custom classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](823, "BREAKING CHANGE: Removed fuse-hljs (Use fuse-highlight instead)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, "Various other small fixed and enhancements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "v1.3.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, "(2018-01-02)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, "Updated Angular to 5.1.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](840, "Updated Angular Material to 5.0.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](842, "Updated various other packages to latest versions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](844, "New Academy app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](850, "Mail compose dialog responsive issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](852, "Fixed for various other bugs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, "v1.3.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](858, "(2017-12-15)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](862, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](865, "Updated Angular to 5.1.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](867, "Updated Angular Material to 5.0.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](869, "Updated various other packages to latest versions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](871, "New NgRx Sample app (Mail-NgRx app)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](873, "Form stepper examples");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](875, "Added support for translations in navigation items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "Moved the navigation.model.ts into its own folder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](879, "Added badge support for collapsable navigation items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](881, "Initialize the navigation from app.component rather then navigation.service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](883, "Trigger expand/collapse of the navigation on ngOnInit to update the active item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](885, "Replaced Calendar images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](887, "Added custom validator for password matching in Auth forms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](889, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](890, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](892, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](893, "Custom scrollbars are showing in print");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](894, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](895, "Various small issues in Auth pages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](897, "ngx-color-picker various style issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, "Make sure the nav item has children before trying to get them");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](900, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](901, "Renamed the KnowledgeBase demo module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](904, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](905, "v1.2.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](906, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](907, "(2017-11-28)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](908, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](909, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](911, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](914, "Sidenav helper causes issues in mobile media steps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](916, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](917, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](918, "v1.2.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](920, "(2017-11-27)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](922, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](924, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](925, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](927, "Updated Angular to 5.0.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](928, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](929, "Updated Angular Material to 5.0.0-rc.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](931, "Updated Flex Layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](933, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](934, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](936, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, "Contacts app various issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](939, "Duplicate content in Profile page tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](940, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](941, "Folded status of the Navbar shouldn't brake the layout if Horizontal Navbar is active ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](942, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](945, "v1.2.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](946, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](947, "(2017-11-13)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](948, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](949, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](950, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](951, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](952, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](954, "Updated Angular to 5.0.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](955, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](956, "Updated Angular Material to 5.0.0-rc0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](957, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](958, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](959, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](960, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](962, "Compatibility fixed for Angular Material 5.0.0-rc0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](964, "Scrumboard label selector not working properly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](966, "Todo detail style refinements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](968, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](970, "v1.2.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](972, "(2017-11-06)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](973, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](974, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](976, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](978, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](979, "BREAKING CHANGE: Updated Angular to 5.0.0 (clean installation recommended)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](980, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](981, "Updated Angular Flex Layout to 2.0.0-beta.10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](982, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](983, "E-Commerce App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](985, "File based translation service and its implementation example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](986, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](987, "Added Material Design cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](988, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](989, "New 'Knowledge Base' page design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](990, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, "Added Tabbed versions of the Carded Sidenav layouts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](992, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](993, "Added an ability to control the folded status of the vertical navigation via FuseConfig ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](994, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](995, " Added 'exactMatch' property to the Navigation Model for more control over the active item highlighting ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](996, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](997, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](998, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](999, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1000, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1001, "Angular 5 Compatibility fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1002, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1003, "Various iOS10 scrolling issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1004, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1005, "FAQ page header shrinks on small heights");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1006, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1007, "Stagger animation doesn't have 'optional' parameter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1008, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1009, "Toolbar navigation toggle button doesn't actually toggle the navigation bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1010, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1011, "Nav items cannot be put on the root in Horizontal menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1012, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1013, "Vertical navbar puts out wrong classes when its toggled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1014, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1015, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1016, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1017, "v1.1.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1018, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1019, "(2017-10-16)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1020, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1021, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1022, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1023, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1025, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1026, "BREAKING CHANGE: Updated Angular Material to 2.0.0-beta.12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1027, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1028, "Updated Angular to 4.4.5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1029, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1030, "New Reset and Forgot password page styles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1032, "Added 'agm-map', Google Maps component library.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1033, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1034, "New pricing page design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1036, "New mail confirmation page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1037, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1038, "New FAQ page design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1039, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1040, "Added new methods for accessing and updating specific nav items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1041, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1042, "Added the ability to add custom functions to the nav items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1043, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1044, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1045, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1046, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1047, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1048, "Print styles and page breaks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1049, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1050, "Inconsistent font sizes across elements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1051, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1052, "Toolbar search bar button collapses on close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1053, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1054, "iOS scrolling issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1055, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1056, "All 'mat-select' elements wrapped with 'mat-form-field' and fixed related issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1057, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1058, "Auth page v2 styles iOS height issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1059, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1060, "Chat view is not scrollable on mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1061, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1062, "Terms & Conditions checkbox styling issues on Auth forms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1063, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1064, "Some page layout header heights not correct on small devices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1065, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1066, "Lock page layout issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1068, "Calendar & Scrumboard datepicker issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1069, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1070, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1071, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1072, "v1.1.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1073, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1074, "(2017-09-28)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1075, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1076, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1077, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1078, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1079, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1080, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1081, "Updated Angular Material to 2.0.0-beta.11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1082, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1083, "Nested grouping in navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1084, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1085, "Added Angular Material elements showcase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1086, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1087, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1088, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1089, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1090, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1091, "Replaced Http module with HttpClient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1092, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1093, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1094, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1095, "v1.1.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1096, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1097, "(2017-09-22)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1098, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1099, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1100, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1101, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1102, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1104, "Updated Angular to 4.4.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1105, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1106, "Added HMR config for starting the ng serve with HMR support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1107, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1108, "Added a way to swap navigation models on the fly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1109, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1110, "Enhanced animations for all apps and some pages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1111, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1112, "Custom perfect scrollbar directive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1114, "Navigation bar backdrop for closing the navigation easily on mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1115, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1116, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1117, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1118, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1120, "BREAKING CHANGE: Completely re-structured the navigation model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1121, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1122, "Locked dev dependency versions to prevent majority of the npm update errors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1123, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1124, "Updated perfect scrollbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1125, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1126, "Calendar, Mail, ToDo and Chat app visual and structural Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1127, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1128, "Disabled the perfect-scrollbar on mobile completely");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1129, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1130, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1131, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1132, "v1.0.5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1133, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1134, "(2017-09-12)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1135, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1136, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1137, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1138, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1140, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1141, "Horizontal Navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1142, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1143, "Boxed Layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1144, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1145, "New fade-in-out animation to Animations service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1146, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1147, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1148, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1149, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1150, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1151, "Scrumboard & Chat style Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1152, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1153, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1154, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1155, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1156, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1157, "Removed unused md2 library from skeleton");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1158, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1159, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1160, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1161, "v1.0.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1162, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1163, "(2017-08-31)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1164, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1165, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1167, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1168, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1169, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1170, "Scrumboard App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1171, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1172, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1173, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1174, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1175, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1176, "Responsive Improved, many more will come");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1177, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1178, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1179, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1180, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1181, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1182, "Dashboard sidenav not correctly working on some mobile devices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1183, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1184, "Couple MS Edge issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1185, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1186, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1187, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1188, "v1.0.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1189, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1190, "(2017-08-30)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1191, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1192, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1193, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1194, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1195, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1196, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1197, "Reverted to Angular 4.3.5 since animations are not correctly working on 4.3.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1198, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1199, "Firefox and Edge scroll issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1200, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1201, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1202, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1203, "v1.0.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1204, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1205, "(2017-08-30)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1206, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1207, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1208, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1209, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1210, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1211, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1212, "Angular Material v2.0.0-beta.10 Compatibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1213, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1214, "Upgraded to Angular 4.3.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1215, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1216, "Shortcuts component now stores the shortcuts in cookies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1217, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1218, "Added print styles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1219, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1220, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1221, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1222, "v1.0.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1223, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1224, "(2017-08-24)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1225, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1226, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1227, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1228, "Improved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1229, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1230, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1231, "New router animations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1232, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1233, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1234, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1235, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1236, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1237, "Fixed AoT compiler issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1238, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1239, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1240, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1241, "v1.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1242, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1243, "(2017-08-23)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1244, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1245, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1246, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1247, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1248, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1249, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1250, "Initial Release");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NoYW5nZWxvZy9DOlxcVXNlcnNcXGthbm92XFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcVHJhYmFqb1xcaW1wZWxcXHRvdGFsanVyaWRpY2Evbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXF90aGVtaW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeTRDQSxrQ0FBQTtBQXVpREEsMkNBQUE7QUF3Q0EscUJBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2RvY3VtZW50YXRpb24vY2hhbmdlbG9nL2NoYW5nZWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBhbGwgdGhlIHRoZW1pbmcgZnVuY3Rpb25hbGl0eS5cbi8vIFdlIHdhbnQgb3ZlcmxheXMgdG8gYWx3YXlzIGFwcGVhciBvdmVyIHVzZXIgY29udGVudCwgc28gc2V0IGEgYmFzZWxpbmVcbi8vIHZlcnkgaGlnaCB6LWluZGV4IGZvciB0aGUgb3ZlcmxheSBjb250YWluZXIsIHdoaWNoIGlzIHdoZXJlIHdlIGNyZWF0ZSB0aGUgbmV3XG4vLyBzdGFja2luZyBjb250ZXh0IGZvciBhbGwgb3ZlcmxheXMuXG4kY2RrLXotaW5kZXgtb3ZlcmxheS1jb250YWluZXI6IDEwMDAgIWRlZmF1bHQ7XG4kY2RrLXotaW5kZXgtb3ZlcmxheTogMTAwMCAhZGVmYXVsdDtcbiRjZGstei1pbmRleC1vdmVybGF5LWJhY2tkcm9wOiAxMDAwICFkZWZhdWx0O1xuXG4vLyBCYWNrZ3JvdW5kIGNvbG9yIGZvciBhbGwgb2YgdGhlIGJhY2tkcm9wc1xuJGNkay1vdmVybGF5LWRhcmstYmFja2Ryb3AtYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyKSAhZGVmYXVsdDtcblxuLy8gRGVmYXVsdCBiYWNrZHJvcCBhbmltYXRpb24gaXMgYmFzZWQgb24gdGhlIE1hdGVyaWFsIERlc2lnbiBzd2lmdC1lYXNlLW91dC5cbiRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG5cbkBtaXhpbiBjZGstb3ZlcmxheSgpIHtcbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciwgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICAvLyBEaXNhYmxlIGV2ZW50cyBmcm9tIGJlaW5nIGNhcHR1cmVkIG9uIHRoZSBvdmVybGF5IGNvbnRhaW5lci5cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIC8vIFRoZSBjb250YWluZXIgc2hvdWxkIGJlIHRoZSBzaXplIG9mIHRoZSB2aWV3cG9ydC5cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAvLyBUaGUgb3ZlcmxheS1jb250YWluZXIgaXMgYW4gaW52aXNpYmxlIGVsZW1lbnQgd2hpY2ggY29udGFpbnMgYWxsIGluZGl2aWR1YWwgb3ZlcmxheXMuXG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1jb250YWluZXI7XG5cbiAgICAmOmVtcHR5IHtcbiAgICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQgd2hlbiBpdCBkb2Vzbid0IGhhdmUgYW55IGNoaWxkIG5vZGVzLiBUaGlzIGRvZXNuJ3RcbiAgICAgIC8vIGluY2x1ZGUgb3ZlcmxheXMgdGhhdCBoYXZlIGJlZW4gZGV0YWNoZWQsIHJhdGhlciB0aGFuIGRpc3Bvc2VkLlxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBXZSB1c2UgYW4gZXh0cmEgd3JhcHBlciBlbGVtZW50IGluIG9yZGVyIHRvIHVzZSBtYWtlIHRoZSBvdmVybGF5IGl0c2VsZiBhIGZsZXggaXRlbS5cbiAgLy8gVGhpcyBtYWtlcyBjZW50ZXJpbmcgdGhlIG92ZXJsYXkgZWFzeSB3aXRob3V0IHJ1bm5pbmcgaW50byB0aGUgc3VicGl4ZWwgcmVuZGVyaW5nXG4gIC8vIHByb2JsZW1zIHRpZWQgdG8gdXNpbmcgYHRyYW5zZm9ybWAgYW5kIHdpdGhvdXQgaW50ZXJmZXJpbmcgd2l0aCB0aGUgb3RoZXIgcG9zaXRpb25cbiAgLy8gc3RyYXRlZ2llcy5cbiAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcbiAgfVxuXG4gIC8vIEEgc2luZ2xlIG92ZXJsYXkgcGFuZS5cbiAgLmNkay1vdmVybGF5LXBhbmUge1xuICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IGZvciB0aGlzIG9uZSB0byBzdGFydCBvZmYgYGFic29sdXRlYCxcbiAgICAvLyBpbiBvcmRlciBmb3IgdXMgdG8gYmUgYWJsZSB0byBtZWFzdXJlIGl0IGNvcnJlY3RseS5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIEZvciBjb25uZWN0ZWQtcG9zaXRpb24gb3ZlcmxheXMsIHdlIHNldCBgZGlzcGxheTogZmxleGAgaW5cbiAgICAvLyBvcmRlciB0byBmb3JjZSBgbWF4LXdpZHRoYCBhbmQgYG1heC1oZWlnaHRgIHRvIHRha2UgZWZmZWN0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktYmFja2Ryb3Age1xuICAgIC8vIFRPRE8oamVsYm91cm4pOiByZXVzZSBzaWRlbmF2IGZ1bGxzY3JlZW4gbWl4aW4uXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcblxuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5LWJhY2tkcm9wO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uICRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByZ2JhIGJhY2tncm91bmQgd2lsbCBiZWNvbWUgc29saWQgc28gd2UgbmVlZCB0byBmYWxsIGJhY2tcbiAgICAgIC8vIHRvIG1ha2luZyBpdCBvcGFxdWUgdXNpbmcgYG9wYWNpdHlgLiBOb3RlIHRoYXQgd2UgY2FuJ3QgdXNlIHRoZSBgY2RrLWhpZ2gtY29udHJhc3RgXG4gICAgICAvLyBtaXhpbiwgYmVjYXVzZSB3ZSBjYW4ndCBub3JtYWxpemUgdGhlIGltcG9ydCBwYXRoIHRvIHRoZSBfYTExeS5zY3NzIGJvdGggZm9yIHRoZVxuICAgICAgLy8gc291cmNlIGFuZCB3aGVuIHRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZC4gU2VlICMxMDkwOC5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogJGNkay1vdmVybGF5LWRhcmstYmFja2Ryb3AtYmFja2dyb3VuZDtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCB7XG4gICAgLy8gTm90ZTogYXMgb2YgRmlyZWZveCA1NywgaGF2aW5nIHRoZSBiYWNrZHJvcCBiZSBgYmFja2dyb3VuZDogbm9uZWAgd2lsbCBwcmV2ZW50IGl0IGZyb21cbiAgICAvLyBjYXB0dXJpbmcgdGhlIHVzZXIncyBtb3VzZSBzY3JvbGwgZXZlbnRzLiBTaW5jZSB3ZSBhbHNvIGNhbid0IHVzZSBzb21ldGhpbmcgbGlrZVxuICAgIC8vIGByZ2JhKDAsIDAsIDAsIDApYCwgd2Ugd29yayBhcm91bmQgdGhlIGluY29uc2lzdGVuY3kgYnkgbm90IHNldHRpbmcgdGhlIGJhY2tncm91bmQgYXRcbiAgICAvLyBhbGwgYW5kIHVzaW5nIGBvcGFjaXR5YCB0byBtYWtlIHRoZSBlbGVtZW50IHRyYW5zcGFyZW50LlxuICAgICYsICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIE92ZXJsYXkgcGFyZW50IGVsZW1lbnQgdXNlZCB3aXRoIHRoZSBjb25uZWN0ZWQgcG9zaXRpb24gc3RyYXRlZ3kuIFVzZWQgdG8gY29uc3RyYWluIHRoZVxuICAvLyBvdmVybGF5IGVsZW1lbnQncyBzaXplIHRvIGZpdCB3aXRoaW4gdGhlIHZpZXdwb3J0LlxuICAuY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuXG4gICAgLy8gV2UgdXNlIGBkaXNwbGF5OiBmbGV4YCBvbiB0aGlzIGVsZW1lbnQgZXhjbHVzaXZlbHkgZm9yIGNlbnRlcmluZyBjb25uZWN0ZWQgb3ZlcmxheXMuXG4gICAgLy8gV2hlbiAqbm90KiBjZW50ZXJpbmcsIGEgdG9wL2xlZnQvYm90dG9tL3JpZ2h0IHdpbGwgYmUgc2V0IHdoaWNoIG92ZXJyaWRlcyB0aGUgbm9ybWFsXG4gICAgLy8gZmxleCBsYXlvdXQuXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8vIFdlIHVzZSB0aGUgYGNvbHVtbmAgZGlyZWN0aW9uIGhlcmUgdG8gYXZvaWQgc29tZSBmbGV4Ym94IGlzc3VlcyBpbiBFZGdlXG4gICAgLy8gd2hlbiB1c2luZyB0aGUgXCJncm93IGFmdGVyIG9wZW5cIiBvcHRpb25zLlxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAvLyBBZGQgc29tZSBkaW1lbnNpb25zIHNvIHRoZSBlbGVtZW50IGhhcyBhbiBgaW5uZXJUZXh0YCB3aGljaCBzb21lIHBlb3BsZSBkZXBlbmQgb24gaW4gdGVzdHMuXG4gICAgbWluLXdpZHRoOiAxcHg7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICB9XG5cbiAgLy8gVXNlZCB3aGVuIGRpc2FibGluZyBnbG9iYWwgc2Nyb2xsaW5nLlxuICAuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgLy8gTmVjZXNzYXJ5IGZvciB0aGUgY29udGVudCBub3QgdG8gbG9zZSBpdHMgd2lkdGguIE5vdGUgdGhhdCB3ZSdyZSB1c2luZyAxMDAlLCBpbnN0ZWFkIG9mXG4gICAgLy8gMTAwdncsIGJlY2F1c2UgMTAwdncgaW5jbHVkZXMgdGhlIHdpZHRoIHBsdXMgdGhlIHNjcm9sbGJhciwgd2hlcmVhcyAxMDAlIGlzIHRoZSB3aWR0aFxuICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgaGFkIGJlZm9yZSB3ZSBtYWRlIGl0IGBmaXhlZGAuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAvLyBOb3RlOiB0aGlzIHdpbGwgYWx3YXlzIGFkZCBhIHNjcm9sbGJhciB0byB3aGF0ZXZlciBlbGVtZW50IGl0IGlzIG9uLCB3aGljaCBjYW5cbiAgICAvLyBwb3RlbnRpYWxseSByZXN1bHQgaW4gZG91YmxlIHNjcm9sbGJhcnMuIEl0IHNob3VsZG4ndCBiZSBhbiBpc3N1ZSwgYmVjYXVzZSB3ZSB3b24ndFxuICAgIC8vIGJsb2NrIHNjcm9sbGluZyBvbiBhIHBhZ2UgdGhhdCBkb2Vzbid0IGhhdmUgYSBzY3JvbGxiYXIgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuXG5AbWl4aW4gY2RrLWExMXkge1xuICAuY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcblxuICAgIC8vIEF2b2lkIGJyb3dzZXJzIHJlbmRlcmluZyB0aGUgZm9jdXMgcmluZyBpbiBzb21lIGNhc2VzLlxuICAgIG91dGxpbmU6IDA7XG5cbiAgICAvLyBBdm9pZCBzb21lIGNhc2VzIHdoZXJlIHRoZSBicm93c2VyIHdpbGwgc3RpbGwgcmVuZGVyIHRoZSBuYXRpdmUgY29udHJvbHMgKHNlZSAjOTA0OSkuXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxufVxuXG4vLy8gRW1pdHMgdGhlIG1peGluJ3MgY29udGVudCBuZXN0ZWQgdW5kZXIgYCRzZWxlY3Rvci1jb250ZXh0YCBpZiBgJHNlbGVjdG9yLWNvbnRleHRgXG4vLy8gaXMgbm9uLWVtcHR5LlxuLy8vIEBwYXJhbSBzZWxlY3Rvci1jb250ZXh0IFRoZSBzZWxlY3RvciB1bmRlciB3aGljaCB0byBuZXN0IHRoZSBtaXhpbidzIGNvbnRlbnQuXG5AbWl4aW4gX2Nkay1vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICBAaWYgKCRzZWxlY3Rvci1jb250ZXh0ID09ICcnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGVsc2Uge1xuICAgICN7JHNlbGVjdG9yLWNvbnRleHR9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLy8gQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4vLy8gdG8gTWljcm9zb2Z0IGJyb3dzZXJzLiBDaHJvbWUgY2FuIGJlIGluY2x1ZGVkIGJ5IGNoZWNraW5nIGZvciB0aGUgYGh0bWxbaGNdYFxuLy8vIGF0dHJpYnV0ZSwgaG93ZXZlciBDaHJvbWUgaGFuZGxlcyBoaWdoIGNvbnRyYXN0IGRpZmZlcmVudGx5LlxuLy8vXG4vLy8gQHBhcmFtIHRhcmdldCBXaGljaCBraW5kIG9mIGhpZ2ggY29udHJhc3Qgc2V0dGluZyB0byB0YXJnZXQuIERlZmF1bHRzIHRvIGBhY3RpdmVgLCBjYW4gYmVcbi8vLyAgICBgd2hpdGUtb24tYmxhY2tgIG9yIGBibGFjay1vbi13aGl0ZWAuXG4vLy8gQHBhcmFtIGVuY2Fwc3VsYXRpb24gV2hldGhlciB0byBlbWl0IHN0eWxlcyBmb3IgdmlldyBlbmNhcHN1bGF0aW9uLiBWYWx1ZXMgYXJlOlxuLy8vICAgICAqIGBvbmAgLSB3b3JrcyBmb3IgYEVtdWxhdGVkYCwgYE5hdGl2ZWAsIGFuZCBgU2hhZG93RG9tYFxuLy8vICAgICAqIGBvZmZgIC0gd29ya3MgZm9yIGBOb25lYFxuLy8vICAgICAqIGBhbnlgIC0gd29ya3MgZm9yIGFsbCBlbmNhcHN1bGF0aW9uIG1vZGVzIGJ5IGVtaXR0aW5nIHRoZSBDU1MgdHdpY2UgKGRlZmF1bHQpLlxuQG1peGluIGNkay1oaWdoLWNvbnRyYXN0KCR0YXJnZXQ6IGFjdGl2ZSwgJGVuY2Fwc3VsYXRpb246ICdhbnknKSB7XG4gIEBpZiAoJHRhcmdldCAhPSAnYWN0aXZlJyBhbmQgJHRhcmdldCAhPSAnYmxhY2stb24td2hpdGUnIGFuZCAkdGFyZ2V0ICE9ICd3aGl0ZS1vbi1ibGFjaycpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgdmFsdWUgXCIjeyR0YXJnZXR9XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwiYWN0aXZlXCIsIFwiYmxhY2stb24td2hpdGVcIiwgYW5kIFwid2hpdGUtb24tYmxhY2tcIic7XG4gIH1cblxuICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvbicgYW5kICRlbmNhcHN1bGF0aW9uICE9ICdvZmYnIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnYW55Jykge1xuICAgIEBlcnJvciAnVW5rbm93biBjZGstaGlnaC1jb250cmFzdCBlbmNhcHN1bGF0aW9uIFwiI3skZW5jYXBzdWxhdGlvbn1cIiBwcm92aWRlZC4gJyArXG4gICAgICAgICAgICdBbGxvd2VkIHZhbHVlcyBhcmUgXCJvblwiLCBcIm9mZlwiLCBhbmQgXCJhbnlcIic7XG4gIH1cblxuICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGV4dCBoYXMgbXVsdGlwbGUgcGFydHMsIHN1Y2ggYXMgYC5zZWN0aW9uLCAucmVnaW9uYCwganVzdCBkb2luZ1xuICAvLyBgLmNkay1oaWdoLWNvbnRyYXN0LXh4eCAjeyZ9YCB3aWxsIG9ubHkgYXBwbHkgdGhlIHBhcmVudCBzZWxlY3RvciB0byB0aGUgZmlyc3QgcGFydCBvZiB0aGVcbiAgLy8gY29udGV4dC4gV2UgYWRkcmVzcyB0aGlzIGJ5IG5lc3RpbmcgdGhlIHNlbGVjdG9yIGNvbnRleHQgdW5kZXIgLmNkay1oaWdoLWNvbnRyYXN0LlxuICBAYXQtcm9vdCB7XG4gICAgJHNlbGVjdG9yLWNvbnRleHQ6ICN7Jn07XG5cbiAgICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvbicpIHtcbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC0jeyR0YXJnZXR9IHtcbiAgICAgICAgQGluY2x1ZGUgX2Nkay1vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJykge1xuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0gOmhvc3Qge1xuICAgICAgICBAaW5jbHVkZSBfY2RrLW9wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBlbmFibGUgbW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSBvZiB0ZXh0IGZpZWxkcy5cbkBtaXhpbiBjZGstdGV4dC1maWVsZCB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydDtcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZDtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcmVzaXplIGhhbmRsZSBvbiBhdXRvc2l6aW5nIHRleHRhcmVhcywgYmVjYXVzZSB3aGF0ZXZlciBoZWlnaHRcbiAgLy8gdGhlIHVzZXIgcmVzaXplZCB0byB3aWxsIGJlIG92ZXJ3cml0dGVuIG9uY2UgdGhleSBzdGFydCB0eXBpbmcgYWdhaW4uXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG5cbiAgLy8gVGhpcyBjbGFzcyBpcyB0ZW1wb3JhcmlseSBhcHBsaWVkIHRvIHRoZSB0ZXh0YXJlYSB3aGVuIGl0IGlzIGJlaW5nIG1lYXN1cmVkLiBJdCBpcyBpbW1lZGlhdGVseVxuICAvLyByZW1vdmVkIHdoZW4gbWVhc3VyaW5nIGlzIGNvbXBsZXRlLiBXZSB1c2UgYCFpbXBvcnRhbnRgIHJ1bGVzIGhlcmUgdG8gbWFrZSBzdXJlIHVzZXItc3BlY2lmaWVkXG4gIC8vIHJ1bGVzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWVhc3VyZW1lbnQuXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAvLyBIYXZpbmcgMnB4IHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgc2VlbXMgdG8gZml4IGEgYnVnIHdoZXJlIENocm9tZSBnZXRzIGFuIGluY29ycmVjdFxuICAgIC8vIG1lYXN1cmVtZW50LiBXZSBqdXN0IGhhdmUgdG8gYWNjb3VudCBmb3IgaXQgbGF0ZXIgYW5kIHN1YnRyYWN0IGl0IG9mZiB0aGUgZmluYWwgcmVzdWx0LlxuICAgIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBVc2VkIHRvIGdlbmVyYXRlIFVJRHMgZm9yIGtleWZyYW1lcyB1c2VkIHRvIGNoYW5nZSB0aGUgdGV4dCBmaWVsZCBhdXRvZmlsbCBzdHlsZXMuXG4kY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6IDA7XG5cbi8vIE1peGluIHVzZWQgdG8gYXBwbHkgY3VzdG9tIGJhY2tncm91bmQgYW5kIGZvcmVncm91bmQgY29sb3JzIHRvIGFuIGF1dG9maWxsZWQgdGV4dCBmaWVsZC5cbi8vIEJhc2VkIG9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzgxNTQ5L1xuLy8gcmVtb3ZpbmctaW5wdXQtYmFja2dyb3VuZC1jb2xvdXItZm9yLWNocm9tZS1hdXRvY29tcGxldGUjYW5zd2VyLTM3NDMyMjYwXG5AbWl4aW4gY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3IoJGJhY2tncm91bmQsICRmb3JlZ3JvdW5kOicnKSB7XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IHtcbiAgICB0byB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgICAgIEBpZiAkZm9yZWdyb3VuZCAhPSAnJyB7IGNvbG9yOiAkZm9yZWdyb3VuZDsgfVxuICAgIH1cbiAgfVxuXG4gICY6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICB9XG5cbiAgJi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH07XG4gIH1cblxuICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6XG4gICAgICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQgKyAxICFnbG9iYWw7XG59XG5cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBtYXRlcmlhbCBkZXNpZ24gdHJlYXRtZW50cyB0byBhbnkgZWxlbWVudC5cbi8vIE1lZGlhIHF1ZXJpZXNcbi8vIFRPRE8oam9zZXBocGVycm90dCk6IENoYW5nZSAkbWF0LXhzbWFsbCBhbmQgJG1hdC1zbWFsbCB1c2FnZXMgdG8gcmVseSBvbiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4kbWF0LXhzbWFsbDogJ21heC13aWR0aDogNTk5cHgnO1xuJG1hdC1zbWFsbDogJ21heC13aWR0aDogOTU5cHgnO1xuXG4vLyBUT0RPOiBSZXZpc2l0IGFsbCB6LWluZGljZXMgYmVmb3JlIGJldGFcbi8vIHotaW5kZXggbWFzdGVyIGxpc3RcblxuJHotaW5kZXgtZmFiOiAyMCAhZGVmYXVsdDtcbiR6LWluZGV4LWRyYXdlcjogMTAwICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgY29uc3RhbnRzXG4kcGk6IDMuMTQxNTkyNjU7XG5cbi8vIFBhZGRpbmcgYmV0d2VlbiBpbnB1dCB0b2dnbGVzIGFuZCB0aGVpciBsYWJlbHNcbiRtYXQtdG9nZ2xlLXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbi8vIFdpZHRoIGFuZCBoZWlnaHQgb2YgaW5wdXQgdG9nZ2xlc1xuJG1hdC10b2dnbGUtc2l6ZTogMjBweCAhZGVmYXVsdDtcblxuLy8gRWFzaW5nIEN1cnZlc1xuLy8gVE9ETyhqZWxib3Vybik6IGFsbCBvZiB0aGVzZSBuZWVkIHRvIGJlIHJldmlzaXRlZFxuXG4vLyBUaGUgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzIHVzZWQgYnkgbWF0ZXJpYWwgZGVzaWduLlxuJG1hdC1saW5lYXItb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAwLjEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtbGluZWFyLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb246IDMwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluOiBhbGwgJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb246IDUwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbjogJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0OiBhbGwgJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1saW5lYXItZHVyYXRpb246IDgwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbjogbGluZWFyICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhcjogYWxsICRzd2lmdC1saW5lYXItZHVyYXRpb24gJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBBIGNvbGxlY3Rpb24gb2YgbWl4aW5zIGFuZCBDU1MgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IGVsZXZhdGlvbiB0byBhIG1hdGVyaWFsXG4vLyBlbGVtZW50LlxuLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9lbnZpcm9ubWVudC9lbGV2YXRpb24uaHRtbFxuLy8gRXhhbXBsZXM6XG4vL1xuLy9cbi8vIC5tYXQtZm9vIHtcbi8vICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oMik7XG4vL1xuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oOCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyA8ZGl2IGlkPVwiZXh0ZXJuYWwtY2FyZFwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16MlwiPjxwPlNvbWUgY29udGVudDwvcD48L2Rpdj5cbi8vXG4vLyBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRlc2lnbiBiZWhpbmQgaG93IGVsZXZhdGlvbiBpcyBpbXBsZW1lbnRlZCwgc2VlIHRoZSBkZXNpZ24gZG9jIGF0XG4vLyBodHRwczovL2dvby5nbC9LcTBrOVouXG5cbi8vIENvbG9ycyBmb3IgdW1icmEsIHBlbnVtYnJhLCBhbmQgYW1iaWVudCBzaGFkb3dzLiBBcyBkZXNjcmliZWQgaW4gdGhlIGRlc2lnbiBkb2MsIGVhY2ggZWxldmF0aW9uXG4vLyBsZXZlbCBpcyBjcmVhdGVkIHVzaW5nIGEgc2V0IG9mIDMgc2hhZG93IHZhbHVlcywgb25lIGZvciB1bWJyYSAodGhlIHNoYWRvdyByZXByZXNlbnRpbmcgdGhlXG4vLyBzcGFjZSBjb21wbGV0ZWx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCByZWxhdGl2ZSB0byBpdHMgbGlnaHQgc291cmNlKSwgb25lIGZvciBwZW51bWJyYSAodGhlXG4vLyBzcGFjZSBwYXJ0aWFsbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0KSwgYW5kIG9uZSBmb3IgYW1iaWVudCAodGhlIHNwYWNlIHdoaWNoIGNvbnRhaW5zIHRoZSBvYmplY3Rcbi8vIGl0c2VsZikuIEZvciBhIGZ1cnRoZXIgZXhwbGFuYXRpb24gb2YgdGhlc2UgdGVybXMgYW5kIHRoZWlyIG1lYW5pbmdzLCBzZWVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VtYnJhLF9wZW51bWJyYV9hbmRfYW50dW1icmEuXG5cbi8vIE1hcHMgZm9yIHRoZSBkaWZmZXJlbnQgc2hhZG93IHNldHMgYW5kIHRoZWlyIHZhbHVlcyB3aXRoaW4gZWFjaCB6LXNwYWNlLiBUaGVzZSB2YWx1ZXMgd2VyZVxuLy8gY3JlYXRlZCBieSB0YWtpbmcgYSBmZXcgcmVmZXJlbmNlIHNoYWRvdyBzZXRzIGNyZWF0ZWQgYnkgR29vZ2xlJ3MgRGVzaWduZXJzIGFuZCBpbnRlcnBvbGF0aW5nXG4vLyBhbGwgb2YgdGhlIHZhbHVlcyBiZXR3ZWVuIHRoZW0uXG5cbkBmdW5jdGlvbiBfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAzcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMXB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAxcHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDFweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDFweCAxNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDFweCAxOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDJweCAxNnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDNweCAxNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDNweCAxNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA0cHggMThweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNHB4IDIwcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDVweCAyMnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA1cHggMjRweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggNXB4IDI2cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDZweCAyOHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA2cHggMzBweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggNnB4IDMycHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDdweCAzNHB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA3cHggMzZweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggOHB4IDM4cHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDhweCA0MHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCA4cHggNDJweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggOXB4IDQ0cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDlweCA0NnB4IDhweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG4vLyBUaGUgZGVmYXVsdCBkdXJhdGlvbiB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLWNvbG9yOiBibGFjayAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgb3BhY2l0eSBzY2FsaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJF9tYXQtZWxldmF0aW9uLXByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgQGlmIHR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCB1bml0bGVzcygkelZhbHVlKSB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYSB1bml0bGVzcyBudW1iZXInO1xuICB9XG4gIEBpZiAkelZhbHVlIDwgMCBvciAkelZhbHVlID4gMjQge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQnO1xuICB9XG5cbiAgYm94LXNoYWRvdzogI3ttYXAtZ2V0KF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9O1xufVxuXG5AbWl4aW4gX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKFxuICAgICR6VmFsdWUsXG4gICAgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvcixcbiAgICAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cblxuLy8gQ29sb3IgcGFsZXR0ZXMgZnJvbSB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG4vLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvXG4vL1xuLy8gQ29udHJhc3QgY29sb3JzIGFyZSBoYXJkLWNvZGVkIGJlY2F1c2UgaXQgaXMgdG9vIGRpZmZpY3VsdCAocHJvYmFibHkgaW1wb3NzaWJsZSkgdG9cbi8vIGNhbGN1bGF0ZSB0aGVtLiBUaGVzZSBjb250cmFzdCBjb2xvcnMgYXJlIHB1bGxlZCBmcm9tIHRoZSBwdWJsaWMgTWF0ZXJpYWwgRGVzaWduIHNwZWMgc3dhdGNoZXMuXG4vLyBXaGlsZSB0aGUgY29udHJhc3QgY29sb3JzIGluIHRoZSBzcGVjIGFyZSBub3QgcHJlc2NyaXB0aXZlLCB3ZSB1c2UgdGhlbSBmb3IgY29udmVuaWVuY2UuXG5cblxuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkZGFyay1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stODctb3BhY2l0eTogcmdiYShibGFjaywgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRsaWdodC1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtODctb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay0xMi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS0xMi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTYtb3BhY2l0eTogcmdiYShibGFjaywgMC4wNik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtNi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjA2KTtcblxuJGRhcmstcHJpbWFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjg3KTtcbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjU0KTtcbiRkYXJrLWRpc2FibGVkLXRleHQ6IHJnYmEoYmxhY2ssIDAuMzgpO1xuJGRhcmstZGl2aWRlcnM6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGRhcmstZm9jdXNlZDogcmdiYShibGFjaywgMC4xMik7XG4kbGlnaHQtcHJpbWFyeS10ZXh0OiB3aGl0ZTtcbiRsaWdodC1zZWNvbmRhcnktdGV4dDogcmdiYSh3aGl0ZSwgMC43KTtcbiRsaWdodC1kaXNhYmxlZC10ZXh0OiByZ2JhKHdoaXRlLCAwLjUpO1xuJGxpZ2h0LWRpdmlkZXJzOiByZ2JhKHdoaXRlLCAwLjEyKTtcbiRsaWdodC1mb2N1c2VkOiByZ2JhKHdoaXRlLCAwLjEyKTtcblxuJG1hdC1yZWQ6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZjQ0MzM2LFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1waW5rOiAoXG4gIDUwOiAjZmNlNGVjLFxuICAxMDA6ICNmOGJiZDAsXG4gIDIwMDogI2Y0OGZiMSxcbiAgMzAwOiAjZjA2MjkyLFxuICA0MDA6ICNlYzQwN2EsXG4gIDUwMDogI2U5MWU2MyxcbiAgNjAwOiAjZDgxYjYwLFxuICA3MDA6ICNjMjE4NWIsXG4gIDgwMDogI2FkMTQ1NyxcbiAgOTAwOiAjODgwZTRmLFxuICBBMTAwOiAjZmY4MGFiLFxuICBBMjAwOiAjZmY0MDgxLFxuICBBNDAwOiAjZjUwMDU3LFxuICBBNzAwOiAjYzUxMTYyLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcHVycGxlOiAoXG4gIDUwOiAjZjNlNWY1LFxuICAxMDA6ICNlMWJlZTcsXG4gIDIwMDogI2NlOTNkOCxcbiAgMzAwOiAjYmE2OGM4LFxuICA0MDA6ICNhYjQ3YmMsXG4gIDUwMDogIzljMjdiMCxcbiAgNjAwOiAjOGUyNGFhLFxuICA3MDA6ICM3YjFmYTIsXG4gIDgwMDogIzZhMWI5YSxcbiAgOTAwOiAjNGExNDhjLFxuICBBMTAwOiAjZWE4MGZjLFxuICBBMjAwOiAjZTA0MGZiLFxuICBBNDAwOiAjZDUwMGY5LFxuICBBNzAwOiAjYWEwMGZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLXB1cnBsZTogKFxuICA1MDogI2VkZTdmNixcbiAgMTAwOiAjZDFjNGU5LFxuICAyMDA6ICNiMzlkZGIsXG4gIDMwMDogIzk1NzVjZCxcbiAgNDAwOiAjN2U1N2MyLFxuICA1MDA6ICM2NzNhYjcsXG4gIDYwMDogIzVlMzViMSxcbiAgNzAwOiAjNTEyZGE4LFxuICA4MDA6ICM0NTI3YTAsXG4gIDkwMDogIzMxMWI5MixcbiAgQTEwMDogI2IzODhmZixcbiAgQTIwMDogIzdjNGRmZixcbiAgQTQwMDogIzY1MWZmZixcbiAgQTcwMDogIzYyMDBlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtaW5kaWdvOiAoXG4gIDUwOiAjZThlYWY2LFxuICAxMDA6ICNjNWNhZTksXG4gIDIwMDogIzlmYThkYSxcbiAgMzAwOiAjNzk4NmNiLFxuICA0MDA6ICM1YzZiYzAsXG4gIDUwMDogIzNmNTFiNSxcbiAgNjAwOiAjMzk0OWFiLFxuICA3MDA6ICMzMDNmOWYsXG4gIDgwMDogIzI4MzU5MyxcbiAgOTAwOiAjMWEyMzdlLFxuICBBMTAwOiAjOGM5ZWZmLFxuICBBMjAwOiAjNTM2ZGZlLFxuICBBNDAwOiAjM2Q1YWZlLFxuICBBNzAwOiAjMzA0ZmZlLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ibHVlOiAoXG4gIDUwOiAjZTNmMmZkLFxuICAxMDA6ICNiYmRlZmIsXG4gIDIwMDogIzkwY2FmOSxcbiAgMzAwOiAjNjRiNWY2LFxuICA0MDA6ICM0MmE1ZjUsXG4gIDUwMDogIzIxOTZmMyxcbiAgNjAwOiAjMWU4OGU1LFxuICA3MDA6ICMxOTc2ZDIsXG4gIDgwMDogIzE1NjVjMCxcbiAgOTAwOiAjMGQ0N2ExLFxuICBBMTAwOiAjODJiMWZmLFxuICBBMjAwOiAjNDQ4YWZmLFxuICBBNDAwOiAjMjk3OWZmLFxuICBBNzAwOiAjMjk2MmZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtYmx1ZTogKFxuICA1MDogI2UxZjVmZSxcbiAgMTAwOiAjYjNlNWZjLFxuICAyMDA6ICM4MWQ0ZmEsXG4gIDMwMDogIzRmYzNmNyxcbiAgNDAwOiAjMjliNmY2LFxuICA1MDA6ICMwM2E5ZjQsXG4gIDYwMDogIzAzOWJlNSxcbiAgNzAwOiAjMDI4OGQxLFxuICA4MDA6ICMwMjc3YmQsXG4gIDkwMDogIzAxNTc5YixcbiAgQTEwMDogIzgwZDhmZixcbiAgQTIwMDogIzQwYzRmZixcbiAgQTQwMDogIzAwYjBmZixcbiAgQTcwMDogIzAwOTFlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1jeWFuOiAoXG4gIDUwOiAjZTBmN2ZhLFxuICAxMDA6ICNiMmViZjIsXG4gIDIwMDogIzgwZGVlYSxcbiAgMzAwOiAjNGRkMGUxLFxuICA0MDA6ICMyNmM2ZGEsXG4gIDUwMDogIzAwYmNkNCxcbiAgNjAwOiAjMDBhY2MxLFxuICA3MDA6ICMwMDk3YTcsXG4gIDgwMDogIzAwODM4ZixcbiAgOTAwOiAjMDA2MDY0LFxuICBBMTAwOiAjODRmZmZmLFxuICBBMjAwOiAjMThmZmZmLFxuICBBNDAwOiAjMDBlNWZmLFxuICBBNzAwOiAjMDBiOGQ0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtdGVhbDogKFxuICA1MDogI2UwZjJmMSxcbiAgMTAwOiAjYjJkZmRiLFxuICAyMDA6ICM4MGNiYzQsXG4gIDMwMDogIzRkYjZhYyxcbiAgNDAwOiAjMjZhNjlhLFxuICA1MDA6ICMwMDk2ODgsXG4gIDYwMDogIzAwODk3YixcbiAgNzAwOiAjMDA3OTZiLFxuICA4MDA6ICMwMDY5NWMsXG4gIDkwMDogIzAwNGQ0MCxcbiAgQTEwMDogI2E3ZmZlYixcbiAgQTIwMDogIzY0ZmZkYSxcbiAgQTQwMDogIzFkZTliNixcbiAgQTcwMDogIzAwYmZhNSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZWVuOiAoXG4gIDUwOiAjZThmNWU5LFxuICAxMDA6ICNjOGU2YzksXG4gIDIwMDogI2E1ZDZhNyxcbiAgMzAwOiAjODFjNzg0LFxuICA0MDA6ICM2NmJiNmEsXG4gIDUwMDogIzRjYWY1MCxcbiAgNjAwOiAjNDNhMDQ3LFxuICA3MDA6ICMzODhlM2MsXG4gIDgwMDogIzJlN2QzMixcbiAgOTAwOiAjMWI1ZTIwLFxuICBBMTAwOiAjYjlmNmNhLFxuICBBMjAwOiAjNjlmMGFlLFxuICBBNDAwOiAjMDBlNjc2LFxuICBBNzAwOiAjMDBjODUzLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ncmVlbjogKFxuICA1MDogI2YxZjhlOSxcbiAgMTAwOiAjZGNlZGM4LFxuICAyMDA6ICNjNWUxYTUsXG4gIDMwMDogI2FlZDU4MSxcbiAgNDAwOiAjOWNjYzY1LFxuICA1MDA6ICM4YmMzNGEsXG4gIDYwMDogIzdjYjM0MixcbiAgNzAwOiAjNjg5ZjM4LFxuICA4MDA6ICM1NThiMmYsXG4gIDkwMDogIzMzNjkxZSxcbiAgQTEwMDogI2NjZmY5MCxcbiAgQTIwMDogI2IyZmY1OSxcbiAgQTQwMDogIzc2ZmYwMyxcbiAgQTcwMDogIzY0ZGQxNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saW1lOiAoXG4gIDUwOiAjZjlmYmU3LFxuICAxMDA6ICNmMGY0YzMsXG4gIDIwMDogI2U2ZWU5YyxcbiAgMzAwOiAjZGNlNzc1LFxuICA0MDA6ICNkNGUxNTcsXG4gIDUwMDogI2NkZGMzOSxcbiAgNjAwOiAjYzBjYTMzLFxuICA3MDA6ICNhZmI0MmIsXG4gIDgwMDogIzllOWQyNCxcbiAgOTAwOiAjODI3NzE3LFxuICBBMTAwOiAjZjRmZjgxLFxuICBBMjAwOiAjZWVmZjQxLFxuICBBNDAwOiAjYzZmZjAwLFxuICBBNzAwOiAjYWVlYTAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC15ZWxsb3c6IChcbiAgNTA6ICNmZmZkZTcsXG4gIDEwMDogI2ZmZjljNCxcbiAgMjAwOiAjZmZmNTlkLFxuICAzMDA6ICNmZmYxNzYsXG4gIDQwMDogI2ZmZWU1OCxcbiAgNTAwOiAjZmZlYjNiLFxuICA2MDA6ICNmZGQ4MzUsXG4gIDcwMDogI2ZiYzAyZCxcbiAgODAwOiAjZjlhODI1LFxuICA5MDA6ICNmNTdmMTcsXG4gIEExMDA6ICNmZmZmOGQsXG4gIEEyMDA6ICNmZmZmMDAsXG4gIEE0MDA6ICNmZmVhMDAsXG4gIEE3MDA6ICNmZmQ2MDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYW1iZXI6IChcbiAgNTA6ICNmZmY4ZTEsXG4gIDEwMDogI2ZmZWNiMyxcbiAgMjAwOiAjZmZlMDgyLFxuICAzMDA6ICNmZmQ1NGYsXG4gIDQwMDogI2ZmY2EyOCxcbiAgNTAwOiAjZmZjMTA3LFxuICA2MDA6ICNmZmIzMDAsXG4gIDcwMDogI2ZmYTAwMCxcbiAgODAwOiAjZmY4ZjAwLFxuICA5MDA6ICNmZjZmMDAsXG4gIEExMDA6ICNmZmU1N2YsXG4gIEEyMDA6ICNmZmQ3NDAsXG4gIEE0MDA6ICNmZmM0MDAsXG4gIEE3MDA6ICNmZmFiMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtb3JhbmdlOiAoXG4gIDUwOiAjZmZmM2UwLFxuICAxMDA6ICNmZmUwYjIsXG4gIDIwMDogI2ZmY2M4MCxcbiAgMzAwOiAjZmZiNzRkLFxuICA0MDA6ICNmZmE3MjYsXG4gIDUwMDogI2ZmOTgwMCxcbiAgNjAwOiAjZmI4YzAwLFxuICA3MDA6ICNmNTdjMDAsXG4gIDgwMDogI2VmNmMwMCxcbiAgOTAwOiAjZTY1MTAwLFxuICBBMTAwOiAjZmZkMTgwLFxuICBBMjAwOiAjZmZhYjQwLFxuICBBNDAwOiAjZmY5MTAwLFxuICBBNzAwOiAjZmY2ZDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiBibGFjayxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLW9yYW5nZTogKFxuICA1MDogI2ZiZTllNyxcbiAgMTAwOiAjZmZjY2JjLFxuICAyMDA6ICNmZmFiOTEsXG4gIDMwMDogI2ZmOGE2NSxcbiAgNDAwOiAjZmY3MDQzLFxuICA1MDA6ICNmZjU3MjIsXG4gIDYwMDogI2Y0NTExZSxcbiAgNzAwOiAjZTY0YTE5LFxuICA4MDA6ICNkODQzMTUsXG4gIDkwMDogI2JmMzYwYyxcbiAgQTEwMDogI2ZmOWU4MCxcbiAgQTIwMDogI2ZmNmU0MCxcbiAgQTQwMDogI2ZmM2QwMCxcbiAgQTcwMDogI2RkMmMwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYnJvd246IChcbiAgNTA6ICNlZmViZTksXG4gIDEwMDogI2Q3Y2NjOCxcbiAgMjAwOiAjYmNhYWE0LFxuICAzMDA6ICNhMTg4N2YsXG4gIDQwMDogIzhkNmU2MyxcbiAgNTAwOiAjNzk1NTQ4LFxuICA2MDA6ICM2ZDRjNDEsXG4gIDcwMDogIzVkNDAzNyxcbiAgODAwOiAjNGUzNDJlLFxuICA5MDA6ICMzZTI3MjMsXG4gIEExMDA6ICNkN2NjYzgsXG4gIEEyMDA6ICNiY2FhYTQsXG4gIEE0MDA6ICM4ZDZlNjMsXG4gIEE3MDA6ICM1ZDQwMzcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JleTogKFxuICA1MDogI2ZhZmFmYSxcbiAgMTAwOiAjZjVmNWY1LFxuICAyMDA6ICNlZWVlZWUsXG4gIDMwMDogI2UwZTBlMCxcbiAgNDAwOiAjYmRiZGJkLFxuICA1MDA6ICM5ZTllOWUsXG4gIDYwMDogIzc1NzU3NSxcbiAgNzAwOiAjNjE2MTYxLFxuICA4MDA6ICM0MjQyNDIsXG4gIDkwMDogIzIxMjEyMSxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2VlZWVlZSxcbiAgQTQwMDogI2JkYmRiZCxcbiAgQTcwMDogIzYxNjE2MSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ncmF5OiAkbWF0LWdyZXk7XG5cbiRtYXQtYmx1ZS1ncmV5OiAoXG4gIDUwOiAjZWNlZmYxLFxuICAxMDA6ICNjZmQ4ZGMsXG4gIDIwMDogI2IwYmVjNSxcbiAgMzAwOiAjOTBhNGFlLFxuICA0MDA6ICM3ODkwOWMsXG4gIDUwMDogIzYwN2Q4YixcbiAgNjAwOiAjNTQ2ZTdhLFxuICA3MDA6ICM0NTVhNjQsXG4gIDgwMDogIzM3NDc0ZixcbiAgOTAwOiAjMjYzMjM4LFxuICBBMTAwOiAjY2ZkOGRjLFxuICBBMjAwOiAjYjBiZWM1LFxuICBBNDAwOiAjNzg5MDljLFxuICBBNzAwOiAjNDU1YTY0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWJsdWUtZ3JheTogJG1hdC1ibHVlLWdyZXk7XG5cblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCAxMDApLFxuICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNTApLFxuICBob3ZlcjogICAgICByZ2JhKGJsYWNrLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgd2hpdGUsXG4gIGRpYWxvZzogICAgIHdoaXRlLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEoYmxhY2ssIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiB3aGl0ZSxcbiAgZm9jdXNlZC1idXR0b246ICRkYXJrLWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDQwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4gIHRvb2x0aXA6IG1hcF9nZXQoJG1hdC1ncmV5LCA3MDApLFxuKTtcblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IGJsYWNrLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgYmFja2dyb3VuZDogIzMwMzAzMCxcbiAgaG92ZXI6ICAgICAgcmdiYSh3aGl0ZSwgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaWFsb2c6ICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKHdoaXRlLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDgwMCksXG4gIGZvY3VzZWQtYnV0dG9uOiAkbGlnaHQtZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogYmxhY2ssXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwX2dldCgkbWF0LWdyZXksIDcwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBibGFjayxcbiAgdG9vbHRpcDogbWFwX2dldCgkbWF0LWdyZXksIDcwMCksXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgYmxhY2ssXG4gIGRpdmlkZXI6ICAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRkYXJrLXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIGljb25zOiAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgdGV4dDogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItbWluOiAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEoYmxhY2ssIDAuMzgpLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgZGl2aWRlcjogICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRsaWdodC1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHdoaXRlLFxuICBpY29uczogICAgICAgICAgICAgd2hpdGUsXG4gIHRleHQ6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHdoaXRlLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEod2hpdGUsIDAuMyksXG4pO1xuXG5cblxuLy8gRm9yIGEgZ2l2ZW4gaHVlIGluIGEgcGFsZXR0ZSwgcmV0dXJuIHRoZSBjb250cmFzdCBjb2xvciBmcm9tIHRoZSBtYXAgb2YgY29udHJhc3QgcGFsZXR0ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRodWVcbkBmdW5jdGlvbiBtYXQtY29udHJhc3QoJHBhbGV0dGUsICRodWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJHBhbGV0dGUsIGNvbnRyYXN0KSwgJGh1ZSk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIG1hcCBvZiBodWVzIHRvIGNvbG9ycyBmb3IgYSB0aGVtZS4gVGhpcyBpcyB1c2VkIHRvIGRlZmluZSBhIHRoZW1lIHBhbGV0dGUgaW4gdGVybXNcbi8vIG9mIHRoZSBNYXRlcmlhbCBEZXNpZ24gaHVlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJHByaW1hcnlcbi8vIEBwYXJhbSAkbGlnaHRlclxuQGZ1bmN0aW9uIG1hdC1wYWxldHRlKCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0OiA1MDAsICRsaWdodGVyOiAxMDAsICRkYXJrZXI6IDcwMCwgJHRleHQ6ICRkZWZhdWx0KSB7XG4gICRyZXN1bHQ6IG1hcF9tZXJnZSgkYmFzZS1wYWxldHRlLCAoXG4gICAgZGVmYXVsdDogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpLFxuICAgIHRleHQ6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJHRleHQpLFxuXG4gICAgZGVmYXVsdC1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpXG4gICkpO1xuXG4gIC8vIEZvciBlYWNoIGh1ZSBpbiB0aGUgcGFsZXR0ZSwgYWRkIGEgXCItY29udHJhc3RcIiBjb2xvciB0byB0aGUgbWFwLlxuICBAZWFjaCAkaHVlLCAkY29sb3IgaW4gJGJhc2UtcGFsZXR0ZSB7XG4gICAgJHJlc3VsdDogbWFwX21lcmdlKCRyZXN1bHQsIChcbiAgICAgICcjeyRodWV9LWNvbnRyYXN0JzogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRodWUpXG4gICAgKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cblxuLy8gR2V0cyBhIGNvbG9yIGZyb20gYSB0aGVtZSBwYWxldHRlICh0aGUgb3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIFRoZSBodWUgY2FuIGJlIG9uZSBvZiB0aGUgc3RhbmRhcmQgdmFsdWVzICg1MDAsIEE0MDAsIGV0Yy4pLCBvbmUgb2YgdGhlIHRocmVlIHByZWNvbmZpZ3VyZWRcbi8vIGh1ZXMgKGRlZmF1bHQsIGxpZ2h0ZXIsIGRhcmtlciksIG9yIGFueSBvZiB0aGUgYWZvcmVtZW50aW9uZWQgcHJlZml4ZWQgd2l0aCBcIi1jb250cmFzdFwiLlxuLy9cbi8vIEBwYXJhbSAkY29sb3ItbWFwIFRoZSB0aGVtZSBwYWxldHRlIChvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gQHBhcmFtICRodWUgVGhlIGh1ZSBmcm9tIHRoZSBwYWxldHRlIHRvIHVzZS4gSWYgdGhpcyBpcyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgaXQgd2lsbFxuLy8gICAgIGJlIHRyZWF0ZWQgYXMgb3BhY2l0eS5cbi8vIEBwYXJhbSAkb3BhY2l0eSBUaGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSBmb3IgdGhlIGNvbG9yLlxuQGZ1bmN0aW9uIG1hdC1jb2xvcigkcGFsZXR0ZSwgJGh1ZTogZGVmYXVsdCwgJG9wYWNpdHk6IG51bGwpIHtcbiAgLy8gSWYgaHVlS2V5IGlzIGEgbnVtYmVyIGJldHdlZW4gemVybyBhbmQgb25lLCB0aGVuIGl0IGFjdHVhbGx5IGNvbnRhaW5zIGFuXG4gIC8vIG9wYWNpdHkgdmFsdWUsIHNvIHJlY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIGRlZmF1bHQgaHVlIGFuZCB0aGF0IGdpdmVuIG9wYWNpdHkuXG4gIEBpZiB0eXBlLW9mKCRodWUpID09IG51bWJlciBhbmQgJGh1ZSA+PSAwIGFuZCAkaHVlIDw9IDEge1xuICAgIEByZXR1cm4gbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LCAkaHVlKTtcbiAgfVxuXG4gICRjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgJGh1ZSk7XG5cbiAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAvLyBJZiB0aGUgJGNvbG9yIHJlc29sdmVkIHRvIHNvbWV0aGluZyBkaWZmZXJlbnQgZnJvbSBhIGNvbG9yIChlLmcuIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAvLyB3ZSBjYW4ndCBhcHBseSB0aGUgb3BhY2l0eSBhbnl3YXkgc28gd2UgcmV0dXJuIHRoZSB2YWx1ZSBhcyBpcywgb3RoZXJ3aXNlIFNhc3MgY2FuXG4gICAgLy8gdGhyb3cgYW4gZXJyb3Igb3Igb3V0cHV0IHNvbWV0aGluZyBpbnZhbGlkLlxuICAgIEByZXR1cm4gJGNvbG9yO1xuICB9XG5cbiAgQHJldHVybiByZ2JhKCRjb2xvciwgaWYoJG9wYWNpdHkgPT0gbnVsbCwgb3BhY2l0eSgkY29sb3IpLCAkb3BhY2l0eSkpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGxpZ2h0IHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtbGlnaHQtdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IGZhbHNlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgZGFyayB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWRhcmstdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IHRydWUsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuXG4kbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5OiAwLjE7XG5cbkBtaXhpbiBtYXQtcmlwcGxlKCkge1xuXG4gIC8vIFRoZSBob3N0IGVsZW1lbnQgb2YgYW4gbWF0LXJpcHBsZSBkaXJlY3RpdmUgc2hvdWxkIGFsd2F5cyBoYXZlIGEgcG9zaXRpb24gb2YgXCJhYnNvbHV0ZVwiIG9yXG4gIC8vIFwicmVsYXRpdmVcIiBzbyB0aGF0IHRoZSByaXBwbGVzIGluc2lkZSBhcmUgY29ycmVjdGx5IHBvc2l0aW9uZWQgcmVsYXRpdmVseSB0byB0aGUgY29udGFpbmVyLlxuICAubWF0LXJpcHBsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIGV2ZXJ5IHJpcHBsZSBjb250YWluZXIgc2hvdWxkIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlIGluIGZhdm9yIG9mIGNyZWF0aW5nIGFuXG4gICAgLy8gZWFzeSBBUEkgZm9yIGRldmVsb3BlcnMgdXNpbmcgdGhlIE1hdFJpcHBsZSBkaXJlY3RpdmUuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcblxuICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmlwcGxlIGlzIG9wYXF1ZSwgY2F1c2luZyBpdCB0byBvYnN0cnVjdCB0aGUgY29udGVudC5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdChhY3RpdmUsIG9mZikge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLyogVGhlbWUgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbkBtaXhpbiBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwX2dldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZm9yZWdyb3VuZC1iYXNlOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAvLyBJZiB0aGUgcmlwcGxlIGNvbG9yIGlzIHJlc29sdmVzIHRvIGEgY29sb3IgKnR5cGUqLCB3ZSBjYW4gdXNlIGl0IGRpcmVjdGx5LCBvdGhlcndpc2VcbiAgICAvLyAoZS5nLiBpdCByZXNvbHZlcyB0byBhIENTUyB2YXJpYWJsZSkgd2UgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBjb2xvciBhbmQgc2V0dGluZyBhbiBvcGFjaXR5LlxuICAgIEBpZiAodHlwZS1vZigkZm9yZWdyb3VuZC1iYXNlKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZm9yZWdyb3VuZC1iYXNlLCAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtYmFzZTtcbiAgICAgIG9wYWNpdHk6ICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBVdGlsaXR5IGZvciBmZXRjaGluZyBhIG5lc3RlZCB2YWx1ZSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsICRuYW1lKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb25maWcsICRsZXZlbCksICRuYW1lKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCBzaXplIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtc2l6ZSk7XG59XG5cbi8vIEdldHMgdGhlIGxpbmUgaGVpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGluZS1oZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHdlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtd2VpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgbGV0dGVyIHNwYWNpbmcgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsZXR0ZXItc3BhY2luZyk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQtZmFtaWx5IGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZyBhbmQgcmVtb3ZlcyB0aGUgcXVvdGVzIGFyb3VuZCBpdC5cbkBmdW5jdGlvbiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsOiBudWxsKSB7XG4gICRmb250LWZhbWlseTogbWFwLWdldCgkY29uZmlnLCBmb250LWZhbWlseSk7XG5cbiAgQGlmICRsZXZlbCAhPSBudWxsIHtcbiAgICAkZm9udC1mYW1pbHk6IF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LWZhbWlseSk7XG4gIH1cblxuICAvLyBHdWFyZCBhZ2FpbnN0IHVucXVvdGluZyBub24tc3RyaW5nIHZhbHVlcywgYmVjYXVzZSBpdCdzIGRlcHJlY2F0ZWQuXG4gIEByZXR1cm4gaWYodHlwZS1vZigkZm9udC1mYW1pbHkpID09IHN0cmluZywgdW5xdW90ZSgkZm9udC1mYW1pbHkpLCAkZm9udC1mYW1pbHkpO1xufVxuXG4vLyBPdXRwdXRzIHRoZSBzaG9ydGhhbmQgYGZvbnRgIENTUyBwcm9wZXJ0eSwgYmFzZWQgb24gYSBzZXQgb2YgdHlwb2dyYXBoeSB2YWx1ZXMuIEZhbGxzIGJhY2sgdG9cbi8vIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMgaWYgYSB2YWx1ZSB0aGF0IGlzbid0IGFsbG93ZWQgaW4gdGhlIHNob3J0aGFuZCBpcyBwYXNzZWQgaW4uXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSkge1xuICAvLyBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgc2V0IHRvIGBpbmhlcml0YCwgd2UgY2FuJ3QgdXNlIHRoZSBzaG9ydGhhbmRcbiAgLy8gc28gd2UgZmFsbCBiYWNrIHRvIHBhc3NpbmcgaW4gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcy5cbiAgQGlmICgkZm9udC1zaXplID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1zaXplID09IG51bGwgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IG51bGwpIHtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgc2hvcnRoYW5kIGBmb250YCwgYmVjYXVzZSBpdCdzIHRoZSBsZWFzdCBhbW91bnQgb2YgYnl0ZXMuIE5vdGVcbiAgICAvLyB0aGF0IHdlIG5lZWQgdG8gdXNlIGludGVycG9sYXRpb24gZm9yIGBmb250LXNpemUvbGluZS1oZWlnaHRgIGluIG9yZGVyIHRvIHByZXZlbnRcbiAgICAvLyBTYXNzIGZyb20gZGl2aWRpbmcgdGhlIHR3byB2YWx1ZXMuXG4gICAgZm9udDogJGZvbnQtd2VpZ2h0ICN7JGZvbnQtc2l6ZX0vI3skbGluZS1oZWlnaHR9ICRmb250LWZhbWlseTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0cyBhIHR5cG9ncmFwaHkgbGV2ZWwgaW50byBDU1Mgc3R5bGVzLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgJGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWwpO1xuXG4gIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpO1xuICBsZXR0ZXItc3BhY2luZzogbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCk7XG59XG5cblxuQG1peGluIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtb3B0aW9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICY6aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSxcbiAgICAmOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gSW4gbXVsdGlwbGUgbW9kZSB0aGVyZSBpcyBhIGNoZWNrYm94IHRvIHNob3cgdGhhdCB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICYubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1vcHRpb24tZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW9wdGlvbiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cbkBtaXhpbiBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG4gICRjb2xvcmVkLWJveC1zZWxlY3RvcjogJy5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUnO1xuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKSwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuICB9XG5cbiAgLy8gRGVmYXVsdCB0byB0aGUgYWNjZW50IGNvbG9yLiBOb3RlIHRoYXQgdGhlIHBzZXVkbyBjaGVja2JveGVzIGFyZSBtZWFudCB0byBpbmhlcml0IHRoZVxuICAvLyB0aGVtZSBmcm9tIHRoZWlyIHBhcmVudCwgcmF0aGVyIHRoYW4gaW1wbGVtZW50aW5nIHRoZWlyIG93biB0aGVtaW5nLCB3aGljaCBpcyB3aHkgd2VcbiAgLy8gZG9uJ3QgYXR0YWNoIHRvIHRoZSBgbWF0LSpgIGNsYXNzZXMuIEFsc28gbm90ZSB0aGF0IHRoaXMgbmVlZHMgdG8gYmUgYmVsb3cgYC5tYXQtcHJpbWFyeWBcbiAgLy8gaW4gb3JkZXIgdG8gYWxsb3cgZm9yIHRoZSBjb2xvciB0byBiZSBvdmVyd3JpdHRlbiBpZiB0aGUgY2hlY2tib3ggaXMgaW5zaWRlIGEgcGFyZW50IHRoYXRcbiAgLy8gaGFzIGBtYXQtYWNjZW50YCBhbmQgaXMgcGxhY2VkIGluc2lkZSBhbm90aGVyIHBhcmVudCB0aGF0IGhhcyBgbWF0LXByaW1hcnlgLlxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICYubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBSZXByZXNlbnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBmcm9tIHRoZSBNYXRlcmlhbCBkZXNpZ24gc3BlYy5cbkBmdW5jdGlvbiBtYXQtdHlwb2dyYXBoeS1sZXZlbChcbiAgJGZvbnQtc2l6ZSxcbiAgJGxpbmUtaGVpZ2h0OiAkZm9udC1zaXplLFxuICAkZm9udC13ZWlnaHQ6IDQwMCxcbiAgJGZvbnQtZmFtaWx5OiBudWxsLFxuICAkbGV0dGVyLXNwYWNpbmc6IG51bGwpIHtcblxuICBAcmV0dXJuIChcbiAgICBmb250LXNpemU6ICRmb250LXNpemUsXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodCxcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHksXG4gICAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXItc3BhY2luZ1xuICApO1xufVxuXG4vLyBSZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0eXBvZ3JhcGh5IGxldmVscy5cbi8vIERlZmF1bHRzIGNvbWUgZnJvbSBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvc3R5bGUvdHlwb2dyYXBoeS5odG1sXG4vLyBOb3RlOiBUaGUgc3BlYyBkb2Vzbid0IG1lbnRpb24gbGV0dGVyIHNwYWNpbmcuIFRoZSB2YWx1ZXMgaGVyZSBjb21lIGZyb21cbi8vIGV5ZWJhbGxpbmcgaXQgdW50aWwgaXQgbG9va2VkIGV4YWN0bHkgbGlrZSB0aGUgc3BlYyBleGFtcGxlcy5cbkBmdW5jdGlvbiBtYXQtdHlwb2dyYXBoeS1jb25maWcoXG4gICRmb250LWZhbWlseTogICAnUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxuICAkZGlzcGxheS00OiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTEycHgsIDExMnB4LCAzMDAsICRsZXR0ZXItc3BhY2luZzogLTAuMDVlbSksXG4gICRkaXNwbGF5LTM6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg1NnB4LCA1NnB4LCA0MDAsICRsZXR0ZXItc3BhY2luZzogLTAuMDJlbSksXG4gICRkaXNwbGF5LTI6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg0NXB4LCA0OHB4LCA0MDAsICRsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW0pLFxuICAkZGlzcGxheS0xOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMzRweCwgNDBweCwgNDAwKSxcbiAgJGhlYWRsaW5lOiAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDI0cHgsIDMycHgsIDQwMCksXG4gICR0aXRsZTogICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyMHB4LCAzMnB4LCA1MDApLFxuICAkc3ViaGVhZGluZy0yOiAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTZweCwgMjhweCwgNDAwKSxcbiAgJHN1YmhlYWRpbmctMTogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE1cHgsIDI0cHgsIDQwMCksXG4gICRib2R5LTI6ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAyNHB4LCA1MDApLFxuICAkYm9keS0xOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjBweCwgNDAwKSxcbiAgJGNhcHRpb246ICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDEycHgsIDIwcHgsIDQwMCksXG4gICRidXR0b246ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAxNHB4LCA1MDApLFxuICAvLyBMaW5lLWhlaWdodCBtdXN0IGJlIHVuaXQtbGVzcyBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplLlxuICAkaW5wdXQ6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoaW5oZXJpdCwgMS4xMjUsIDQwMClcbikge1xuXG4gIC8vIERlY2xhcmUgYW4gaW5pdGlhbCBtYXAgd2l0aCBhbGwgb2YgdGhlIGxldmVscy5cbiAgJGNvbmZpZzogKFxuICAgIGRpc3BsYXktNDogICAgICAkZGlzcGxheS00LFxuICAgIGRpc3BsYXktMzogICAgICAkZGlzcGxheS0zLFxuICAgIGRpc3BsYXktMjogICAgICAkZGlzcGxheS0yLFxuICAgIGRpc3BsYXktMTogICAgICAkZGlzcGxheS0xLFxuICAgIGhlYWRsaW5lOiAgICAgICAkaGVhZGxpbmUsXG4gICAgdGl0bGU6ICAgICAgICAgICR0aXRsZSxcbiAgICBzdWJoZWFkaW5nLTI6ICAgJHN1YmhlYWRpbmctMixcbiAgICBzdWJoZWFkaW5nLTE6ICAgJHN1YmhlYWRpbmctMSxcbiAgICBib2R5LTI6ICAgICAgICAgJGJvZHktMixcbiAgICBib2R5LTE6ICAgICAgICAgJGJvZHktMSxcbiAgICBjYXB0aW9uOiAgICAgICAgJGNhcHRpb24sXG4gICAgYnV0dG9uOiAgICAgICAgICRidXR0b24sXG4gICAgaW5wdXQ6ICAgICAgICAgICRpbnB1dCxcbiAgKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGxldmVscyBhbmQgc2V0IHRoZSBgZm9udC1mYW1pbHlgIG9mIHRoZSBvbmVzIHRoYXQgZG9uJ3QgaGF2ZSBvbmUgdG8gdGhlIGJhc2UuXG4gIC8vIE5vdGUgdGhhdCBTYXNzIGNhbid0IG1vZGlmeSBtYXBzIGluIHBsYWNlLCB3aGljaCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gbWVyZ2UgYW5kIHJlLWFzc2lnbi5cbiAgQGVhY2ggJGtleSwgJGxldmVsIGluICRjb25maWcge1xuICAgIEBpZiBtYXAtZ2V0KCRsZXZlbCwgZm9udC1mYW1pbHkpID09IG51bGwge1xuICAgICAgJG5ldy1sZXZlbDogbWFwLW1lcmdlKCRsZXZlbCwgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbiAgICAgICRjb25maWc6IG1hcC1tZXJnZSgkY29uZmlnLCAoJGtleTogJG5ldy1sZXZlbCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgYmFzZSBmb250IGZhbWlseSB0byB0aGUgY29uZmlnLlxuICBAcmV0dXJuIG1hcC1tZXJnZSgkY29uZmlnLCAoZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSkpO1xufVxuXG4vLyBBZGRzIHRoZSBiYXNlIHR5cG9ncmFwaHkgc3R5bGVzLCBiYXNlZCBvbiBhIGNvbmZpZy5cbkBtaXhpbiBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcsICRzZWxlY3RvcjogJy5tYXQtdHlwb2dyYXBoeScpIHtcbiAgLm1hdC1oMSwgLm1hdC1oZWFkbGluZSwgI3skc2VsZWN0b3J9IGgxIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgyLCAubWF0LXRpdGxlLCAjeyRzZWxlY3Rvcn0gaDIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDMsIC5tYXQtc3ViaGVhZGluZy0yLCAjeyRzZWxlY3Rvcn0gaDMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWg0LCAubWF0LXN1YmhlYWRpbmctMSwgI3skc2VsZWN0b3J9IGg0IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLy8gTm90ZTogdGhlIHNwZWMgZG9lc24ndCBoYXZlIGFueXRoaW5nIHRoYXQgd291bGQgY29ycmVzcG9uZCB0byBoNSBhbmQgaDYsIGJ1dCB3ZSBhZGQgdGhlc2UgZm9yXG4gIC8vIGNvbnNpc3RlbmN5LiBUaGUgZm9udCBzaXplcyBjb21lIGZyb20gdGhlIENocm9tZSB1c2VyIGFnZW50IHN0eWxlcyB3aGljaCBoYXZlIGg1IGF0IDAuODNlbVxuICAvLyBhbmQgaDYgYXQgMC42N2VtLlxuICAubWF0LWg1LCAjeyRzZWxlY3Rvcn0gaDUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgIC8vIGNhbGMgaXMgdXNlZCBoZXJlIHRvIHN1cHBvcnQgY3NzIHZhcmlhYmxlc1xuICAgICAgY2FsYygje21hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKX0gKiAwLjgzKSxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1oNiwgI3skc2VsZWN0b3J9IGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgICAvLyBjYWxjIGlzIHVzZWQgaGVyZSB0byBzdXBwb3J0IGNzcyB2YXJpYWJsZXNcbiAgICAgIGNhbGMoI3ttYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSl9ICogMC42NyksXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtYm9keS1zdHJvbmcsIC5tYXQtYm9keS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtYm9keSwgLm1hdC1ib2R5LTEsICN7JHNlbGVjdG9yfSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbWFsbCwgLm1hdC1jYXB0aW9uIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgY2FwdGlvbik7XG4gIH1cblxuICAubWF0LWRpc3BsYXktNCwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS00IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS00KTtcbiAgICBtYXJnaW46IDAgMCA1NnB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTMsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMyB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMyk7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0yLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTIpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMSwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0xIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0xKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG59XG5cblxuXG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBTZWxlY3RlZCBvcHRpb25zIGluIGF1dG9jb21wbGV0ZXMgc2hvdWxkIG5vdCBiZSBncmF5LCBidXQgd2VcbiAgICAvLyBvbmx5IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIG9wdGlvbnMgaWZcbiAgICAvLyB0aGV5IGFyZSAqbm90KiBpbiBob3ZlciBvciBmb2N1cyBzdGF0ZS4gVGhpcyBjaGFuZ2UgaGFzIHRvIGJlXG4gICAgLy8gbWFkZSBoZXJlIGJlY2F1c2UgYmFzZSBvcHRpb24gc3R5bGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0aGVcbiAgICAvLyBhdXRvY29tcGxldGUgYW5kIHRoZSBzZWxlY3QuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgICAgJjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuLy8gVGhpcyBjb250YWlucyBhbGwgb2YgdGhlIHN0eWxlcyBmb3IgdGhlIGJhZGdlXG4vLyByYXRoZXIgdGhhbiBqdXN0IHRoZSBjb2xvci90aGVtZSBiZWNhdXNlIG9mXG4vLyBubyBzdHlsZSBzaGVldCBzdXBwb3J0IGZvciBkaXJlY3RpdmVzLlxuXG5cblxuXG5cbiRtYXQtYmFkZ2UtZm9udC1zaXplOiAxMnB4O1xuJG1hdC1iYWRnZS1mb250LXdlaWdodDogNjAwO1xuJG1hdC1iYWRnZS1kZWZhdWx0LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kbWF0LWJhZGdlLXNtYWxsLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplIC0gNjtcbiRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgKyA2O1xuXG4vLyBNaXhpbiBmb3IgYnVpbGRpbmcgb2Zmc2V0IGdpdmVuIGRpZmZlcmVudCBzaXplc1xuQG1peGluIF9tYXQtYmFkZ2Utc2l6ZSgkc2l6ZSkge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICYubWF0LWJhZGdlLWFib3ZlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgdG9wOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlbG93IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYm90dG9tOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1vdmVybGFwIHtcbiAgICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKSB7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgICBvdXRsaW5lOiBzb2xpZCAxcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtYWNjZW50IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLXdhcm4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1oaWRkZW4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtZGlzYWJsZWQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAkYXBwLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2JhY2tncm91bmQnKTtcbiAgICAgICRiYWRnZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgICAvLyBUaGUgZGlzYWJsZWQgY29sb3IgdXN1YWxseSBoYXMgc29tZSBraW5kIG9mIG9wYWNpdHksIGJ1dCBiZWNhdXNlIHRoZSBiYWRnZSBpcyBvdmVybGF5ZWRcbiAgICAgIC8vIG9uIHRvcCBvZiBzb21ldGhpbmcgZWxzZSwgaXQgd29uJ3QgbG9vayBnb29kIGlmIGl0J3Mgb3BhcXVlLiBJZiBpdCBpcyBhIGNvbG9yICp0eXBlKixcbiAgICAgIC8vIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZCB1c2luZ1xuICAgICAgLy8gdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kIHdoZW5cbiAgICAgIC8vIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLlxuICAgICAgQGlmICh0eXBlLW9mKCRiYWRnZS1jb2xvcikgPT0gY29sb3IgYW5kIHR5cGUtb2YoJGFwcC1iYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgICAkYmFkZ2Utb3BhY2l0eTogb3BhY2l0eSgkYmFkZ2UtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBtaXgoJGFwcC1iYWNrZ3JvdW5kLCByZ2JhKCRiYWRnZS1jb2xvciwgMSksICgxIC0gJGJhZGdlLW9wYWNpdHkpICogMTAwJSk7XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWRnZS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAubmctYW5pbWF0ZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQsXG4gIC5tYXQtYmFkZ2UtY29udGVudC5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIC8vIFRoZSBhY3RpdmUgY2xhc3MgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgYWRkZWRcbiAgLy8gc28gaXQgY2FuIGFuaW1hdGUgc2NhbGUgdG8gZGVmYXVsdFxuICAubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gICAgLy8gU2NhbGUgdG8gYG5vbmVgIGluc3RlYWQgb2YgYDFgIHRvIGF2b2lkIGJsdXJyeSB0ZXh0IGluIHNvbWUgYnJvd3NlcnMuXG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2Utc21hbGwtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1tZWRpdW0ge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1sYXJnZSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXdlaWdodDogJG1hdC1iYWRnZS1mb250LXdlaWdodDtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplO1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgLy8gU2V0IHRoZSBmb250IHNpemUgdG8gNzUlIG9mIHRoZSBvcmlnaW5hbC5cbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMC43NTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMjtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5OiAwLjE7XG5cbi8vIEFwcGxpZXMgYSBmb2N1cyBzdHlsZSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG5cbiAgJltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuLy8gQXBwbGllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBmb3IgYSByaXBwbGUuIElmIHRoZSB2YWx1ZSBwcm92aWRlZCBpcyBub3QgYSBTYXNzIGNvbG9yLFxuLy8gd2UgYXNzdW1lIHRoYXQgd2UndmUgYmVlbiBnaXZlbiBhIENTUyB2YXJpYWJsZS4gU2luY2Ugd2UgY2FuJ3QgcGVyZm9ybSBhbHBoYS1ibGVuZGluZ1xuLy8gb24gYSBDU1MgdmFyaWFibGUsIHdlIGluc3RlYWQgYWRkIHRoZSBvcGFjaXR5IGRpcmVjdGx5IHRvIHRoZSByaXBwbGUgZWxlbWVudC5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkcGFsZXR0ZSwgJGh1ZSwgJG9wYWNpdHkpIHtcbiAgJGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJGh1ZSwgJG9wYWNpdHkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgQGlmICh0eXBlLW9mKCRiYWNrZ3JvdW5kLWNvbG9yKSAhPSBjb2xvcikge1xuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJHRoZW1lLCAkaHVlLCAkb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5KSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJHByaW1hcnksICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkYWNjZW50LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCR3YXJuLCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBhIHByb3BlcnR5IHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJHByb3BlcnR5LCAkaHVlKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICYubWF0LXByaW1hcnkge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlKTtcbiAgfVxuICAmLm1hdC1hY2NlbnQge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUpO1xuICB9XG4gICYubWF0LXdhcm4ge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCR3YXJuLCAkaHVlKTtcbiAgfVxuXG4gICYubWF0LXByaW1hcnksICYubWF0LWFjY2VudCwgJi5tYXQtd2FybiwgJltkaXNhYmxlZF0ge1xuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICRwYWxldHRlOiBpZigkcHJvcGVydHkgPT0gJ2NvbG9yJywgJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKTtcbiAgICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwYWxldHRlLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgIC8vIEJ1dHRvbnMgd2l0aG91dCBhIGJhY2tncm91bmQgY29sb3Igc2hvdWxkIGluaGVyaXQgdGhlIGZvbnQgY29sb3IuIFRoaXMgaXMgbmVjZXNzYXJ5IHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgdGhlIGJ1dHRvbiBpcyByZWFkYWJsZSBvbiBjdXN0b20gYmFja2dyb3VuZCBjb2xvcnMuIEl0J3Mgd3JvbmcgdG8gYWx3YXlzIGFzc3VtZVxuICAgIC8vIHRoYXQgdGhvc2UgYnV0dG9ucyBhcmUgYWx3YXlzIHBsYWNlZCBpbnNpZGUgb2YgY29udGFpbmVycyB3aXRoIHRoZSBkZWZhdWx0IGJhY2tncm91bmRcbiAgICAvLyBjb2xvciBvZiB0aGUgdGhlbWUgKGUuZy4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgdGV4dCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpO1xuXG4gICAgLy8gU2V0dXAgdGhlIHJpcHBsZSBjb2xvciB0byBiZSBiYXNlZCBvbiB0aGUgdGV4dCBjb2xvci4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHJpcHBsZXNcbiAgICAvLyBhcmUgbWF0Y2hpbmcgd2l0aCB0aGUgY3VycmVudCB0aGVtZSBwYWxldHRlIGFuZCBhcmUgaW4gY29udHJhc3QgdG8gdGhlIGJhY2tncm91bmQgY29sb3JcbiAgICAvLyAoZS5nIGluIHRoZW1lZCB0b29sYmFycykuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gIH1cblxuICAvLyBOb3RlOiB0aGlzIG5lZWRzIGEgYml0IGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHdlJ3JlIG5vdCBndWFyYW50ZWVkIHRoZSBpbmNsdXNpb25cbiAgLy8gb3JkZXIgb2YgdGhlIHRoZW1lIHN0eWxlcyBhbmQgdGhlIGJ1dHRvbiByZXNldCBtYXkgZW5kIHVwIHJlc2V0dGluZyB0aGlzIGFzIHdlbGwuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICAvLyBEZWZhdWx0IGZvbnQgYW5kIGJhY2tncm91bmQgY29sb3Igd2hlbiBub3QgdXNpbmcgYW55IGNvbG9yIHBhbGV0dGUuXG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCByYWlzZWQtYnV0dG9uKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnYmFja2dyb3VuZC1jb2xvcicsIGRlZmF1bHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiwgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig4LCAkdGhlbWUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMTIsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGRpdmlkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uLCAxKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1idXR0b24pO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24tdG9nZ2xlKTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2FyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWNhcmQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIE5lZWRzIGV4dHJhIHNwZWNpZmljaXR5IHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhlIGVsZXZhdGlvbiBzZWxlY3RvcnMuXG4gICAgJi5tYXQtY2FyZC1mbGF0IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgdGl0bGUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgdGl0bGUpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlLFxuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuXG4gIC8vIFRoZSBjb2xvciBvZiB0aGUgY2hlY2tib3gncyBjaGVja21hcmsgLyBtaXhlZG1hcmsuXG4gICRjaGVja2JveC1tYXJrLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuXG4gIC8vIE5PVEUodHJhdmlza2F1Zm1hbik6IFdoaWxlIHRoZSBzcGVjIGNhbGxzIGZvciB0cmFuc2x1Y2VudCBibGFja3Mvd2hpdGVzIGZvciBkaXNhYmxlZCBjb2xvcnMsXG4gIC8vIHRoaXMgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggZWxlbWVudHMgbGF5ZXJlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuIFRvIGdldCBhcm91bmQgdGhpcyB3ZVxuICAvLyBibGVuZCB0aGUgY29sb3JzIHRvZ2V0aGVyIGJhc2VkIG9uIHRoZSBiYXNlIGNvbG9yIGFuZCB0aGUgdGhlbWUgYmFja2dyb3VuZC5cbiAgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyazogIzY4Njg2ODtcbiAgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQ6ICNiMGIwYjA7XG4gICRkaXNhYmxlZC1jb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcmssICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0KTtcblxuICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmsge1xuICAgIGZpbGw6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gICAgLy8gIWltcG9ydGFudCBpcyBuZWVkZWQgaGVyZSBiZWNhdXNlIGEgc3Ryb2tlIG11c3QgYmUgc2V0IGFzIGFuXG4gICAgLy8gYXR0cmlidXRlIG9uIHRoZSBTVkcgaW4gb3JkZXIgZm9yIGxpbmUgYW5pbWF0aW9uIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgc3Ryb2tlOiAkY2hlY2tib3gtbWFyay1jb2xvciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1taXhlZG1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLCAubWF0LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAmLm1hdC1jaGVja2JveC1jaGVja2VkLFxuICAgICYubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkge1xuICAgICAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgLm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKSwgYmFzZSk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLFxuICAubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGVja2JveCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC8vIFRPRE8oa2FyYSk6IFJlbW92ZSB0aGlzIHN0eWxlIHdoZW4gZml4aW5nIHZlcnRpY2FsIGJhc2VsaW5lXG4gIC5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5cblxuXG5cblxuJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU6IDE4cHg7XG5cbkBtaXhpbiBtYXQtY2hpcHMtY29sb3IoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGZvcmVncm91bmQ7XG5cbiAgLm1hdC1jaGlwLXJlbW92ZSB7XG4gICAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxufVxuXG5cbi8vIEFwcGxpZXMgdGhlIGJhY2tncm91bmQgY29sb3IgZm9yIGEgcmlwcGxlIGVsZW1lbnQuXG4vLyBJZiB0aGUgY29sb3IgdmFsdWUgcHJvdmlkZWQgaXMgbm90IGEgU2FzcyBjb2xvcixcbi8vIHdlIGFzc3VtZSB0aGF0IHdlJ3ZlIGJlZW4gZ2l2ZW4gYSBDU1MgdmFyaWFibGUuXG4vLyBTaW5jZSB3ZSBjYW4ndCBwZXJmb3JtIGFscGhhLWJsZW5kaW5nIG9uIGEgQ1NTIHZhcmlhYmxlLFxuLy8gd2UgaW5zdGVhZCBhZGQgdGhlIG9wYWNpdHkgZGlyZWN0bHkgdG8gdGhlIHJpcHBsZSBlbGVtZW50LlxuQG1peGluIF9tYXQtY2hpcHMtcmlwcGxlLWJhY2tncm91bmQoJHBhbGV0dGUsICRkZWZhdWx0LWNvbnRyYXN0LCAkb3BhY2l0eSkge1xuICAkYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkZGVmYXVsdC1jb250cmFzdCwgJG9wYWNpdHkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgQGlmICh0eXBlLW9mKCRiYWNrZ3JvdW5kLWNvbG9yKSAhPSBjb2xvcikge1xuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHBhbGV0dGUpIHtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLWNvbG9yKG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCksIG1hdC1jb2xvcigkcGFsZXR0ZSkpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgQGluY2x1ZGUgX21hdC1jaGlwcy1yaXBwbGUtYmFja2dyb3VuZCgkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCwgMC4xKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHVuc2VsZWN0ZWQtY2hpcCk7XG4gICR1bnNlbGVjdGVkLWZvcmVncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IoJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZCwgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZCk7XG5cbiAgICAmOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIHtcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMywgJHRoZW1lKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtY2hpcC1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hpcCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuXG4gICAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sXG4gICAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10YWJsZSB0aGVhZCwgLm1hdC10YWJsZSB0Ym9keSwgLm1hdC10YWJsZSB0Zm9vdCxcbiAgbWF0LWhlYWRlci1yb3csIG1hdC1yb3csIG1hdC1mb290ZXItcm93LFxuICBbbWF0LWhlYWRlci1yb3ddLCBbbWF0LXJvd10sIFttYXQtZm9vdGVyLXJvd10sXG4gIC5tYXQtdGFibGUtc3RpY2t5IHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB9XG5cbiAgbWF0LXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93LFxuICB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aDogMXB4O1xuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50OiAwLjY7XG4kbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ6IDAuMjtcbiRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU6IDEzcHggIWRlZmF1bHQ7XG4kbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplOiAxMXB4ICFkZWZhdWx0O1xuXG5AbWl4aW4gX21hdC1kYXRlcGlja2VyLWNvbG9yKCRwYWxldHRlKSB7XG4gIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgJGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmFja2dyb3VuZCwgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0byBiYWNrZ3JvdW5kIHRvIGEgY29sb3IgKGUuZy4gaXQncyBhIENTUyB2YXJpYWJsZSksXG4gICAgICAvLyBmYWxsIGJhY2sgdG8gZmFkaW5nIHRoZSBjb250ZW50IG91dCB2aWEgYG9wYWNpdHlgLlxuICAgICAgb3BhY2l0eTogJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGhcbiAgICAgICAgICAgICAgICBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLy8gVGhlIHByZXYvbmV4dCBidXR0b25zIG5lZWQgYSBiaXQgbW9yZSBzcGVjaWZpY2l0eSB0b1xuICAvLyBhdm9pZCBiZWluZyBvdmVyd3JpdHRlbiBieSB0aGUgLm1hdC1pY29uLWJ1dHRvbi5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSxcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbixcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIsXG4gIC5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlLFxuICAuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlIHtcbiAgICAmID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIC8vIE5vdGU6IHRob3VnaCBpdCdzIG5vdCB0ZXh0LCB0aGUgYm9yZGVyIGlzIGEgaGludCBhYm91dCB0aGUgZmFjdCB0aGF0IHRoaXMgaXMgdG9kYXkncyBkYXRlLFxuICAgIC8vIHNvIHdlIHVzZSB0aGUgaGludCBjb2xvci5cbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgJGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgYm9yZGVyLWNvbG9yOiBmYWRlLW91dCgkY29sb3IsICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBjb2xvciBkaWRuJ3QgcmVzb2x2ZSB0byBhIGNvbG9yIHZhbHVlLCBidXQgc29tZXRoaW5nIGxpa2UgYSBDU1MgdmFyaWFibGUsIHdlIGNhbid0XG4gICAgICAvLyBmYWRlIGl0IG91dCBzbyB3ZSBmYWxsIGJhY2sgdG8gcmVkdWNpbmcgdGhlIGVsZW1lbnQgb3BhY2l0eS4gTm90ZSB0aGF0IHdlIGRvbid0IHVzZSB0aGVcbiAgICAgIC8vICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCwgYmVjYXVzZSBoaW50IHRleHQgdXN1YWxseSBoYXMgc29tZSBvcGFjaXR5IGFwcGxpZWRcbiAgICAgIC8vIHRvIGl0IGFscmVhZHkgYW5kIHdlIGRvbid0IHdhbnQgdGhlbSB0byBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlci5cbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSwgdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jYWxlbmRhciB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keSB7XG4gICAgZm9udC1zaXplOiAkbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLFxuICAubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6ICRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDI0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWFjdGlvbi1yb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgJiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgJjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEaXNhYmxlIHRoZSBob3ZlciBvbiB0b3VjaCBkZXZpY2VzIHNpbmNlIGl0IGNhbiBhcHBlYXIgbGlrZSBpdCBpcyBzdHVjay4gV2UgY2FuJ3QgdXNlXG4gIC8vIGBAbWVkaWEgKGhvdmVyKWAgYWJvdmUsIGJlY2F1c2UgdGhlIGRlc2t0b3Agc3VwcG9ydCBicm93c2VyIHN1cHBvcnQgaXNuJ3QgZ3JlYXQuXG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gVGhpcyBtaXhpbiB3aWxsIGVuc3VyZSB0aGF0IGxpbmVzIHRoYXQgb3ZlcmZsb3cgdGhlIGNvbnRhaW5lciB3aWxsIGhpZGUgdGhlIG92ZXJmbG93IGFuZFxuLy8gdHJ1bmNhdGUgbmVhdGx5IHdpdGggYW4gZWxsaXBzaXMuXG5AbWl4aW4gbWF0LXRydW5jYXRlLWxpbmUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vLyBNaXhpbiB0byBwcm92aWRlIGFsbCBtYXQtbGluZSBzdHlsZXMsIGNoYW5naW5nIHNlY29uZGFyeSBmb250IHNpemUgYmFzZWQgb24gd2hldGhlciB0aGUgbGlzdFxuLy8gaXMgaW4gZGVuc2UgbW9kZS5cbkBtaXhpbiBtYXQtbGluZS1iYXNlKCRzZWNvbmRhcnktZm9udC1zaXplKSB7XG4gIC5tYXQtbGluZSB7XG4gICAgQGluY2x1ZGUgbWF0LXRydW5jYXRlLWxpbmUoKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgLy8gYWxsIGxpbmVzIGJ1dCB0aGUgdG9wIGxpbmUgc2hvdWxkIGhhdmUgc21hbGxlciB0ZXh0XG4gICAgJjpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6ICRzZWNvbmRhcnktZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIG5vcm1hbGl6ZXMgZGVmYXVsdCBlbGVtZW50IHN0eWxlcywgZS5nLiBmb250IHdlaWdodCBmb3IgaGVhZGluZyB0ZXh0LlxuQG1peGluIG1hdC1ub3JtYWxpemUtdGV4dCgpIHtcbiAgJiA+ICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gcHJvdmlkZXMgYmFzZSBzdHlsZXMgZm9yIHRoZSB3cmFwcGVyIGFyb3VuZCBtYXQtbGluZSBlbGVtZW50cyBpbiBhIGxpc3QuXG5AbWl4aW4gbWF0LWxpbmUtd3JhcHBlci1iYXNlKCkge1xuICBAaW5jbHVkZSBtYXQtbm9ybWFsaXplLXRleHQoKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAvLyBNdXN0IHJlbW92ZSB3cmFwcGVyIHdoZW4gbGluZXMgYXJlIGVtcHR5IG9yIGl0IHRha2VzIHVwIGhvcml6b250YWxcbiAgLy8gc3BhY2UgYW5kIHB1c2hlcyBvdGhlciBlbGVtZW50cyB0byB0aGUgcmlnaHQuXG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSkgeyB9XG5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWdyaWQtdGlsZS1oZWFkZXIsXG4gIC5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWljb24tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG4vLyBSZW5kZXJzIGEgZ3JhZGllbnQgZm9yIHNob3dpbmcgdGhlIGRhc2hlZCBsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuLy8gVW5saWtlIHVzaW5nIGEgYm9yZGVyLCBhIGdyYWRpZW50IGFsbG93cyB1cyB0byBhZGp1c3QgdGhlIHNwYWNpbmcgb2YgdGhlIGRvdHRlZCBsaW5lXG4vLyB0byBtYXRjaCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG5AbWl4aW4gbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvciAwJSwgJGNvbG9yIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIEZpZ3VyZXMgb3V0IHRoZSBjb2xvciBvZiB0aGUgcGxhY2Vob2xkZXIgZm9yIGEgZm9ybSBjb250cm9sLlxuLy8gVXNlZCBwcmltYXJpbHkgdG8gcHJldmVudCB0aGUgdmFyaW91cyBmb3JtIGNvbnRyb2xzIGZyb21cbi8vIGJlY29taW5nIG91dCBvZiBzeW5jIHNpbmNlIHRoZXNlIGNvbG9ycyBhcmVuJ3QgaW4gYSBwYWxldHRlLlxuQGZ1bmN0aW9uIF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgQHJldHVybiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG59XG5cblxuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbkBtaXhpbiB1c2VyLXNlbGVjdCgkdmFsdWUpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tcy11c2VyLXNlbGVjdDogJHZhbHVlO1xuICB1c2VyLXNlbGVjdDogJHZhbHVlO1xufVxuXG5AbWl4aW4gaW5wdXQtcGxhY2Vob2xkZXIge1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYiB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYmJpbmcge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2YWx1ZSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xufVxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuXG5cblxuQG1peGluIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG5cbiAgICBAaW5jbHVkZSBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gICAgfVxuXG4gICAgLy8gT24gZGFyayB0aGVtZXMgd2Ugc2V0IHRoZSBuYXRpdmUgYHNlbGVjdGAgY29sb3IgdG8gc29tZSBzaGFkZSBvZiB3aGl0ZSxcbiAgICAvLyBob3dldmVyIHRoZSBjb2xvciBwcm9wYWdhdGVzIHRvIGFsbCBvZiB0aGUgYG9wdGlvbmAgZWxlbWVudHMsIHdoaWNoIGFyZVxuICAgIC8vIGFsd2F5cyBvbiBhIHdoaXRlIGJhY2tncm91bmQgaW5zaWRlIHRoZSBkcm9wZG93biwgY2F1c2luZyB0aGVtIHRvIGJsZW5kIGluLlxuICAgIC8vIFNpbmNlIHdlIGNhbid0IGNoYW5nZSBiYWNrZ3JvdW5kIG9mIHRoZSBkcm9wZG93biwgd2UgbmVlZCB0byBleHBsaWNpdGx5XG4gICAgLy8gcmVzZXQgdGhlIGNvbG9yIG9mIHRoZSBvcHRpb25zIHRvIHNvbWV0aGluZyBkYXJrLlxuICAgIEBpZiAobWFwLWdldCgkdGhlbWUsIGlzLWRhcmspKSB7XG4gICAgICBvcHRpb24ge1xuICAgICAgICBjb2xvcjogJGRhcmstcHJpbWFyeS10ZXh0O1xuICAgICAgfVxuXG4gICAgICBvcHRpb246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQtdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LFxuICAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuXG4gIC8vIDxpbnB1dD4gZWxlbWVudHMgc2VlbSB0byBoYXZlIHRoZWlyIGhlaWdodCBzZXQgc2xpZ2h0bHkgdG9vIGxhcmdlIG9uIFNhZmFyaSBjYXVzaW5nIHRoZSB0ZXh0IHRvXG4gIC8vIGJlIG1pc2FsaWduZWQgdy5yLnQuIHRoZSBwbGFjZWhvbGRlci4gQWRkaW5nIHRoaXMgbWFyZ2luIGNvcnJlY3RzIGl0LlxuICBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgbWFyZ2luLXRvcDogLSRsaW5lLXNwYWNpbmcgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1saXN0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWxpc3QtaXRlbS1kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1saXN0LW9wdGlvbik7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uLFxuICAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtLFxuICAubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtIHtcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG5cbiAgLm1hdC1saXN0LWl0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLy8gRGVmYXVsdCBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlbnNlIGxpc3RcbiAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LW1lbnUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1tZW51LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAndGV4dCcpO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJiwgJjo6YWZ0ZXIge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4gIC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbTpob3ZlcixcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gICAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgZmlsbDogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4ge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLXNwaW5uZXIsIC5tYXQtc3Bpbm5lciB7XG4gICAgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIF9tYXQtcmFkaW8tY29sb3IoJHBhbGV0dGUpIHtcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4gIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLFxuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4gICY6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC8vIFRoaXMgbmVlZHMgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2UgdGhlIGNsYXNzZXMgYWJvdmUgYXJlIGNvbWJpbmVkXG4gICAgLy8gKGUuZy4gYC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnRgKSB3aGljaCBpbmNyZWFzZXMgdGhlaXIgc3BlY2lmaWNpdHkgYSBsb3QuXG4gICAgLy8gVE9ETzogY29uc2lkZXIgbWFraW5nIHRoZSBzZWxlY3RvcnMgaW50byBkZXNjZW5kYW50cyAoYC5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWJ1dHRvbmApLlxuICAgICYubWF0LXJhZGlvLWRpc2FibGVkIHtcbiAgICAgICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsXG4gICAgICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4gICAgICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgICYubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC5tYXQtc2VsZWN0IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I6ICBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLXNpZGUtYm9yZGVyOiBzb2xpZCAxcHggbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtZHJhd2VyLXB1c2gge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICAgICAgLy8gVGhlIGVsZXZhdGlvbiBvZiB6LTE2IGlzIG5vdGVkIGluIHRoZSBkZXNpZ24gc3BlY2lmaWNhdGlvbnMuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWRyYXdlci5odG1sXG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxNiwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gICAgJG9wYWNpdHk6IDAuNjtcbiAgICAkYmFja2Ryb3AtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCwgJG9wYWNpdHkpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRiYWNrZHJvcC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgIC8vIFdlIHVzZSBpbnZlcnQoKSBoZXJlIHRvIGhhdmUgdGhlIGRhcmtlbiB0aGUgYmFja2dyb3VuZCBjb2xvciBleHBlY3RlZCB0byBiZSB1c2VkLiBJZiB0aGVcbiAgICAgIC8vIGJhY2tncm91bmQgaXMgbGlnaHQsIHdlIHVzZSBhIGRhcmsgYmFja2Ryb3AuIElmIHRoZSBiYWNrZ3JvdW5kIGlzIGRhcmssXG4gICAgICAvLyB3ZSB1c2UgYSBsaWdodCBiYWNrZHJvcC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGludmVydCgkYmFja2Ryb3AtY29sb3IpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRoZSBiYWNrZHJvcCBjb2xvciB0byBhIGNvbG9yIHZhbHVlLCBmYWxsIGJhY2sgdG8gdXNpbmdcbiAgICAgIC8vIGBvcGFjaXR5YCB0byBtYWtlIGl0IG9wYXF1ZSBzaW5jZSBpdHMgZW5kIHZhbHVlIGNvdWxkIGJlIGEgc29saWQgY29sb3IuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2Ryb3AtY29sb3I7XG4gICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKSB7XG4gICYubWF0LWNoZWNrZWQge1xuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgICAgLy8gT3BhY2l0eSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHNwZWNzIGZvciB0aGUgc2VsZWN0aW9uIGNvbnRyb2xzLlxuICAgICAgLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sI3NwZWNzXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSwgMC41NCk7XG4gICAgfVxuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyazogbWFwX2dldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAvLyBDb2xvciBodWVzIGFyZSBiYXNlZCBvbiB0aGUgc3BlY3Mgd2hpY2ggYnJpZWZseSBzaG93IHRoZSBodWVzIHRoYXQgYXJlIGFwcGxpZWQgdG8gYSBzd2l0Y2guXG4gIC8vIFRoZSAyMDE4IHNwZWNzIG5vIGxvbmdlciBkZXNjcmliZSBob3cgZGFyayBzd2l0Y2hlcyBzaG91bGQgbG9vayBsaWtlLiBEdWUgdG8gdGhlIGxhY2sgb2ZcbiAgLy8gaW5mb3JtYXRpb24gZm9yIGRhcmsgdGhlbWVkIHN3aXRjaGVzLCB3ZSBwYXJ0aWFsbHkga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb25cbiAgLy8gdGhlIHByZXZpb3VzIHNwZWNpZmljYXRpb25zLiBGb3IgdGhlIGNoZWNrZWQgY29sb3Igd2UgYWx3YXlzIHVzZSB0aGUgYGRlZmF1bHRgIGh1ZSBiZWNhdXNlXG4gIC8vIHRoYXQgZm9sbG93cyBNREMgYW5kIGFsc28gbWFrZXMgaXQgZWFzaWVyIGZvciBwZW9wbGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRoZW1lIHdpdGhvdXQgbmVlZGluZ1xuICAvLyB0byBzcGVjaWZ5IGVhY2ggaHVlIGluZGl2aWR1YWxseS5cbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBkZWZhdWx0O1xuXG4gICRiYXItdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgJHJpcHBsZS11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJGFjY2VudCwgJHRodW1iLWNoZWNrZWQtaHVlKTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcHJpbWFyeSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHdhcm4sICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkbWF0LWdyZXksICR0aHVtYi11bmNoZWNrZWQtaHVlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhci11bmNoZWNrZWQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcGFsZXR0ZSkge1xuICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAubWF0LXNsaWRlci10aHVtYixcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJG1hdC1zbGlkZXItb2ZmLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmLWFjdGl2ZSk7XG4gICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItbWluKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTogMC43O1xuICAkbWF0LXNsaWRlci10aWNrLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eSk7XG4gICRtYXQtc2xpZGVyLXRpY2stc2l6ZTogMnB4O1xuXG4gIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LWFjY2VudCB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkYWNjZW50KTtcbiAgfVxuXG4gIC5tYXQtd2FybiB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkd2Fybik7XG4gIH1cblxuICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAkb3BhY2l0eTogMC4yO1xuICAgICRjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQsICRvcGFjaXR5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXI6aG92ZXIsXG4gIC5jZGstZm9jdXNlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1kaXNhYmxlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbiAgICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLW1pbi12YWx1ZSB7XG4gICAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgICAkb3BhY2l0eTogMC4xMjtcbiAgICAgICRjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAkb3BhY2l0eSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItdGljay1jb2xvcjtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAodHlwZS1vZigkbWF0LXNsaWRlci10aWNrLWNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG1hdC1zbGlkZXItdGljay1vcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGRyYXcgdGhlIGdyYWRpZW50IGNvcnJlY3RseSB3aXRoICd0byByaWdodCdcbiAgICAvLyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzMTQzMTkpLlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc3RlcC1oZWFkZXIge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gT24gdG91Y2ggZGV2aWNlcyB0aGUgOmhvdmVyIHN0YXRlIHdpbGwgbGluZ2VyIG9uIHRoZSBlbGVtZW50IGFmdGVyIGEgdGFwLlxuICAgIC8vIFJlc2V0IGl0IHZpYSBgQG1lZGlhYCBhZnRlciB0aGUgZGVjbGFyYXRpb24sIGJlY2F1c2UgdGhlIG1lZGlhIHF1ZXJ5IGlzbid0XG4gICAgLy8gc3VwcG9ydGVkIGJ5IGFsbCBicm93c2VycyB5ZXQuXG4gICAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLFxuICAgIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbiB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gIH1cblxuICAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLFxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLFxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9O1xuICB9XG5cbiAgLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvciB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWQge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gICAgJHRhYmxlLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgICAkdGV4dC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAvLyBCZWNhdXNlIHRoZSBhcnJvdyBpcyBtYWRlIHVwIG9mIG11bHRpcGxlIGVsZW1lbnRzIHRoYXQgYXJlIHN0YWNrZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIsXG4gICAgLy8gd2UgY2FuJ3QgdXNlIHRoZSBzZW1pLXRyYXNwYXJlbnQgY29sb3IgZnJvbSB0aGUgdGhlbWUgZGlyZWN0bHkuIElmIHRoZSB2YWx1ZSBpcyBhIGNvbG9yXG4gICAgLy8gKnR5cGUqLCB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmRcbiAgICAvLyB1c2luZyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmRcbiAgICAvLyB3aGVuIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLiBPdGhlcndpc2UsIGlmIGl0IHJlc29sdmVzIHRvIHNvbWV0aGluZyBkaWZmZXJlbnRcbiAgICAvLyAoZS5nLiBpdCByZXNvbHZlcyB0byBhIENTUyB2YXJpYWJsZSksIHdlIHVzZSB0aGUgY29sb3IgZGlyZWN0bHkuXG4gICAgQGlmICh0eXBlLW9mKCR0YWJsZS1iYWNrZ3JvdW5kKSA9PSBjb2xvciBhbmQgdHlwZS1vZigkdGV4dC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgICR0ZXh0LW9wYWNpdHk6IG9wYWNpdHkoJHRleHQtY29sb3IpO1xuICAgICAgY29sb3I6IG1peCgkdGFibGUtYmFja2dyb3VuZCwgcmdiYSgkdGV4dC1jb2xvciwgMSksICgxIC0gJHRleHQtb3BhY2l0eSkgKiAxMDAlKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYnMtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaGVhZGVyLWJvcmRlcjogMXB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC10YWItbmF2LWJhcixcbiAgLm1hdC10YWItaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAkaGVhZGVyLWJvcmRlcjtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciB7XG4gICAgLm1hdC10YWItbmF2LWJhcixcbiAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgYm9yZGVyLXRvcDogJGhlYWRlci1ib3JkZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAvLyBSZW1vdmUgaGVhZGVyIGJvcmRlciB3aGVuIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBjb2xvclxuICAubWF0LXRhYi1ncm91cFtjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIC5tYXQtdGFiLWhlYWRlcixcbiAgLm1hdC10YWItbmF2LWJhcltjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cCwgLm1hdC10YWItbmF2LWJhciB7XG4gICAgJHRoZW1lLWNvbG9yczogKFxuICAgICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgICB3YXJuOiAkd2FyblxuICAgICk7XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IHRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzXG4gICAgICAmLm1hdC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGluayBiYXIgd2hlbiBiYWNrZ3JvdW5kIGNvbG9yIGlzIHRoZSBzYW1lXG4gICAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzIGFuZCBvdmVycmlkZSBmb2N1cyBjb2xvclxuICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWluay1iYXIoJGNvbG9yLCAkaHVlOiBkZWZhdWx0KSB7XG4gIC5tYXQtaW5rLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRjb2xvciwgJGh1ZSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCR0YWItZm9jdXMtY29sb3IpIHtcbiAgLm1hdC10YWItbGFiZWwsXG4gIC5tYXQtdGFiLWxpbmsge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgICAgICY6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkdGFiLWZvY3VzLWNvbG9yLCBsaWdodGVyLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWJzLWJhY2tncm91bmQoJGJhY2tncm91bmQtY29sb3IpIHtcbiAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSB0YWIgZ3JvdXBcbiAgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1saW5rcywgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICAvLyBTZXQgbGFiZWxzIHRvIGNvbnRyYXN0IGFnYWluc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgcGFnaW5hdGlvbiBjaGV2cm9ucyB0byBjb250cmFzdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICB9XG5cbiAgLy8gU2V0IHJpcHBsZXMgY29sb3IgdG8gYmUgdGhlIGNvbnRyYXN0IGNvbG9yIG9mIHRoZSBuZXcgYmFja2dyb3VuZC4gT3RoZXJ3aXNlIHRoZSByaXBwbGVcbiAgLy8gY29sb3Igd2lsbCBiZSBiYXNlZCBvbiB0aGUgYXBwIGJhY2tncm91bmQgY29sb3IuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC4xMik7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRhYi1ncm91cCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItY29sb3IoJHBhbGV0dGUpIHtcbiAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG59XG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXMge1xuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLFxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LXNlbGVjdC12YWx1ZSxcbiAgLm1hdC1zZWxlY3QtYXJyb3csXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYXBwLWJhcik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sYmFyLFxuICAubWF0LXRvb2xiYXIgaDEsXG4gIC5tYXQtdG9vbGJhciBoMixcbiAgLm1hdC10b29sYmFyIGgzLFxuICAubWF0LXRvb2xiYXIgaDQsXG4gIC5tYXQtdG9vbGJhciBoNSxcbiAgLm1hdC10b29sYmFyIGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5cblxuXG5cbiRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0OiAyMnB4O1xuJG1hdC10b29sdGlwLWZvbnQtc2l6ZTogMTBweDtcbiRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nOiAoJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtZm9udC1zaXplKSAvIDI7XG5cbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQ6IDMwcHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU6IDE0cHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nOlxuICAgICgkbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplKSAvIDI7XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgdG9vbHRpcCwgMC45KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtdG9vbHRpcC1oYW5kc2V0IHtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcblxuICAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICAgIC8vIFVzZSB0aGUgcHJpbWFyeSB0ZXh0IG9uIHRoZSBkYXJrIHRoZW1lLCBldmVuIHRob3VnaCB0aGUgbGlnaHRlciBvbmUgdXNlc1xuICAgIC8vIGEgc2Vjb25kYXJ5LCBiZWNhdXNlIHRoZSBjb250cmFzdCBvbiB0aGUgbGlnaHQgcHJpbWFyeSB0ZXh0IGlzIHBvb3IuXG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkZGFyay1wcmltYXJ5LXRleHQsICRsaWdodC1zZWNvbmRhcnktdGV4dCk7XG4gICAgYmFja2dyb3VuZDogaWYoJGlzLWRhcmstdGhlbWUsIG1hcC1nZXQoJG1hdC1ncmV5LCA1MCksICMzMjMyMzIpO1xuXG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCBpbmhlcml0LCBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogaW5oZXJpdDtcbiAgICAgIHNpemU6IGluaGVyaXQ7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGZpbGwgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGZpbGwtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4xLCAwLjA0KSk7XG4gICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMDUsIDAuMDIpKTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdG9wIG9mIHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIC8vIFRoZSBwYWRkaW5nIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctYm90dG9tOiAwLjc1ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBmaWxsIGFwcGVhcmFuY2UuXG4gICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC41ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nLXRvcCAwICRpbmZpeC1wYWRkaW5nLWJvdHRvbSAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmctdG9wO1xuICAgICAgbWFyZ2luLXRvcDogJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBsZWdhY3kgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtaGludCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFdlIHVzZSBwZXJzcGVjdGl2ZSB0byBmaXggdGhlIHRleHQgYmx1cnJpbmVzcyBhcyBkZXNjcmliZWQgaGVyZTpcbiAgLy8gaHR0cDovL3d3dy51c2VyYWdlbnRtYW4uY29tL2Jsb2cvMjAxNC8wNS8wNC9maXhpbmctdHlwb2dyYXBoeS1pbnNpZGUtb2YtMi1kLWNzcy10cmFuc2Zvcm1zL1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nKSBzY2FsZSgkZm9udC1zY2FsZSkgcGVyc3BlY3RpdmUoMTAwcHgpXG4gIHRyYW5zbGF0ZVooMC4wMDFweCArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuXG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbi8vIFNhbWUgYXMgbWl4aW4gYWJvdmUsIGJ1dCBvbWl0cyB0aGUgdHJhbnNsYXRlWiBmb3IgcHJpbnRpbmcgcHVycG9zZXMuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludCgkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHNlZW0gdG8gbWVhc3VyZSBmcm9tIHRoZSBlZGdlXG4gIC8vIG9mIHRoZSB0ZXh0IGl0c2VsZiwgbm90IHRoZSBlZGdlIG9mIHRoZSBsaW5lOyB0aGVyZWZvcmUgd2Ugc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbSAtICRsaW5lLXNwYWNpbmc7XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLiBXZSBhZ2FpbiBuZWVkIHRvIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nIHNpbmNlIHRoZSBtb2NrcyBtZWFzdXJlIHRvIHRoZSBlZGdlIG9mIHRoZVxuICAvLyB0ZXh0LCBub3QgdGhlICBlZGdlIG9mIHRoZSBsaW5lLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlIC0gKCRsaW5lLXNwYWNpbmcgKiAyKTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHJhbnNsYXRlWiBjYXVzZXMgdGhlIGxhYmVsIHRvIG5vdCBhcHBlYXIgd2hpbGUgcHJpbnRpbmcsIHNvIHdlIG92ZXJyaWRlIGl0IHRvIG5vdFxuICAvLyBhcHBseSB0cmFuc2xhdGVaIHdoaWxlIHByaW50aW5nXG4gIEBtZWRpYSBwcmludCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICRvdXRsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjMsIDAuMTIpKTtcbiAgJG91dGxpbmUtY29sb3ItaG92ZXI6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJG91dGxpbmUtY29sb3ItcHJpbWFyeTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgJG91dGxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICRvdXRsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjE1LCAwLjA2KSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1ob3ZlcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGFzcyByZXBlYXRlZCBzbyB0aGF0IHJ1bGUgaXMgc3BlY2lmaWMgZW5vdWdoIHRvIG92ZXJyaWRlIGZvY3VzZWQgYWNjZW50IGNvbG9yIGNhc2UuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlKVxuICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nOiAxZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2UuXG4gICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC4yNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICAgIG1hcmdpbi10b3A6ICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIHN0YW5kYXJkIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpIHt9XG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgYXBwbHkgdG8gYWxsIGFwcGVhcmFuY2VzIG9mIHRoZSBmb3JtLWZpZWxkLlxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAvLyBMYWJlbCBjb2xvcnMuIFJlcXVpcmVkIGlzIHVzZWQgZm9yIHRoZSBgKmAgc3RhciBzaG93biBpbiB0aGUgbGFiZWwuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC42KSk7XG4gICRmb2N1c2VkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICAkcmVxdWlyZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcblxuICAvLyBVbmRlcmxpbmUgY29sb3JzLlxuICAkdW5kZXJsaW5lLWNvbG9yLWJhc2U6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJHVuZGVybGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1oaW50IHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRmb2N1c2VkLWxhYmVsLWNvbG9yO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgIGNvbG9yOiAkcmVxdWlyZWQtbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWJhc2U7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuXG4gICAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN0eWxpbmcgZm9yIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgZm9ybSBmaWVsZC4gTm90ZSB0aGF0IHdoaWxlIHRoZSBzYW1lIGNhbiBiZVxuICAvLyBhY2hpZXZlZCB3aXRoIHRoZSBuZy0qIGNsYXNzZXMsIHdlIHVzZSB0aGlzIGFwcHJvYWNoIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBzYW1lXG4gIC8vIGxvZ2ljIGlzIHVzZWQgdG8gc3R5bGUgdGhlIGVycm9yIHN0YXRlIGFuZCB0byBzaG93IHRoZSBlcnJvciBtZXNzYWdlcy5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuXG4gICAgICAmLm1hdC1hY2NlbnQsXG4gICAgICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1lcnJvciB7XG4gICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKTtcbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlOiAxLjU7XG5cbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZS5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgbGFiZWwgYW5kIHN1YnNjcmlwdCB0ZXh0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGlucHV0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcHJlZml4LFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAvLyBBbGxvdyBpY29ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgaWNvbiBidXR0b25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG4gICAgICB3aWR0aDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgLy8gVGhyb3dzIG9mZiB0aGUgYmFzZWxpbmUgaWYgd2UgZG8gaXQgYXMgYSByZWFsIG1hcmdpbiwgc28gd2UgZG8gaXQgYXMgYSBib3JkZXIgaW5zdGVhZC5cbiAgICBib3JkZXItdG9wOiAkaW5maXgtbWFyZ2luLXRvcCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG5cbiAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgdG9wOiAtJGluZml4LW1hcmdpbi10b3A7XG4gICAgcGFkZGluZy10b3A6ICRpbmZpeC1tYXJnaW4tdG9wO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2l6ZTtcbiAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdHJlZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRyZWUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10cmVlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlcyBhbGwgb2YgdGhlIHR5cG9ncmFwaGljIHN0eWxlcy5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJGNvbmZpZzogbnVsbCkge1xuICBAaWYgJGNvbmZpZyA9PSBudWxsIHtcbiAgICAkY29uZmlnOiBtYXQtdHlwb2dyYXBoeS1jb25maWcoKTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBhcmUgbm90IHRoZW1lLWRlcGVuZGVudC5cbkBtaXhpbiBtYXQtY29yZSgkdHlwb2dyYXBoeS1jb25maWc6IG51bGwpIHtcbiAgQGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5LWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUoKTtcbiAgQGluY2x1ZGUgY2RrLWExMXkoKTtcbiAgQGluY2x1ZGUgY2RrLW92ZXJsYXkoKTtcbiAgQGluY2x1ZGUgY2RrLXRleHQtZmllbGQoKTtcbn1cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBkZXBlbmQgb24gdGhlIHRoZW1lLlxuQG1peGluIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcblxuICAvLyBQcm92aWRlcyBleHRlcm5hbCBDU1MgY2xhc3NlcyBmb3IgZWFjaCBlbGV2YXRpb24gdmFsdWUuIEVhY2ggQ1NTIGNsYXNzIGlzIGZvcm1hdHRlZCBhc1xuICAvLyBgbWF0LWVsZXZhdGlvbi16JHpWYWx1ZWAgd2hlcmUgYCR6VmFsdWVgIGNvcnJlc3BvbmRzIHRvIHRoZSB6LXNwYWNlIHRvIHdoaWNoIHRoZSBlbGVtZW50IGlzXG4gIC8vIGVsZXZhdGVkLlxuICBAZm9yICR6VmFsdWUgZnJvbSAwIHRocm91Z2ggMjQge1xuICAgIC4jeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9I3skelZhbHVlfSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdyYXBwZXIgZWxlbWVudCB0aGF0IHByb3ZpZGVzIHRoZSB0aGVtZSBiYWNrZ3JvdW5kIHdoZW4gdGhlIHVzZXIncyBjb250ZW50IGlzbid0XG4gIC8vIGluc2lkZSBvZiBhIGBtYXQtc2lkZW5hdi1jb250YWluZXJgLiBOb3RlIHRoYXQgd2UgbmVlZCB0byBleGNsdWRlIHRoZSBhbXBlcnNhbmRcbiAgLy8gc2VsZWN0b3IgaW4gY2FzZSB0aGUgbWl4aW4gaXMgaW5jbHVkZWQgYXQgdGhlIHRvcCBsZXZlbC5cbiAgLm1hdC1hcHAtYmFja2dyb3VuZCN7aWYoJiwgJywgJi5tYXQtYXBwLWJhY2tncm91bmQnLCAnJyl9IHtcbiAgICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAgICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLy8gTWFya2VyIHRoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgdXNlciBoYXMgYWRkZWQgYSB0aGVtZSB0byB0aGVpciBwYWdlLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpdmlkZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWRpdmlkZXItdmVydGljYWwge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBDcmVhdGUgYSB0aGVtZS5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtY29yZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUpO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocsChangelogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'docs-changelog',
          templateUrl: './changelog.component.html',
          styleUrls: ['./changelog.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/documentation/documentation.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/main/documentation/documentation.module.ts ***!
    \************************************************************/

  /*! exports provided: DocumentationModule */

  /***/
  function srcAppMainDocumentationDocumentationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentationModule", function () {
      return DocumentationModule;
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


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var app_main_documentation_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/main/documentation/changelog/changelog.component */
    "./src/app/main/documentation/changelog/changelog.component.ts");

    var routes = [{
      path: 'changelog',
      component: app_main_documentation_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_4__["DocsChangelogComponent"]
    }, {
      path: 'getting-started',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | getting-started-getting-started-module */
        "getting-started-getting-started-module").then(__webpack_require__.bind(null,
        /*! ./getting-started/getting-started.module */
        "./src/app/main/documentation/getting-started/getting-started.module.ts")).then(function (m) {
          return m.GettingStartedModule;
        });
      }
    }, {
      path: 'working-with-fuse',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | working-with-fuse-working-with-fuse-module */
        "working-with-fuse-working-with-fuse-module").then(__webpack_require__.bind(null,
        /*! ./working-with-fuse/working-with-fuse.module */
        "./src/app/main/documentation/working-with-fuse/working-with-fuse.module.ts")).then(function (m) {
          return m.WorkingWithFuseModule;
        });
      }
    }, {
      path: 'components',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | components-components-module */
        "components-components-module").then(__webpack_require__.bind(null,
        /*! ./components/components.module */
        "./src/app/main/documentation/components/components.module.ts")).then(function (m) {
          return m.ComponentsModule;
        });
      }
    }, {
      path: 'components-third-party',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | components-third-party-components-third-party-module */
        "components-third-party-components-third-party-module").then(__webpack_require__.bind(null,
        /*! ./components-third-party/components-third-party.module */
        "./src/app/main/documentation/components-third-party/components-third-party.module.ts")).then(function (m) {
          return m.ComponentsThirdPartyModule;
        });
      }
    }, {
      path: 'directives',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | directives-directives-module */
        "directives-directives-module").then(__webpack_require__.bind(null,
        /*! ./directives/directives.module */
        "./src/app/main/documentation/directives/directives.module.ts")).then(function (m) {
          return m.DirectivesModule;
        });
      }
    }, {
      path: 'services',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | services-services-module */
        "services-services-module").then(__webpack_require__.bind(null,
        /*! ./services/services.module */
        "./src/app/main/documentation/services/services.module.ts")).then(function (m) {
          return m.ServicesModule;
        });
      }
    }];

    var DocumentationModule = function DocumentationModule() {
      _classCallCheck(this, DocumentationModule);
    };

    DocumentationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DocumentationModule
    });
    DocumentationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DocumentationModule_Factory(t) {
        return new (t || DocumentationModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DocumentationModule, {
        declarations: [app_main_documentation_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_4__["DocsChangelogComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [app_main_documentation_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_4__["DocsChangelogComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=main-documentation-documentation-module-es5.js.map