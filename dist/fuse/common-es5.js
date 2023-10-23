function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/main/apps/file-manager/file-manager.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/main/apps/file-manager/file-manager.service.ts ***!
    \****************************************************************/

  /*! exports provided: FileManagerService */

  /***/
  function srcAppMainAppsFileManagerFileManagerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileManagerService", function () {
      return FileManagerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FileManagerService =
    /*#__PURE__*/
    function () {
      /**
       * Constructor
       *
       * @param {HttpClient} _httpClient
       */
      function FileManagerService(_httpClient) {
        _classCallCheck(this, FileManagerService);

        this._httpClient = _httpClient; // Set the defaults

        this.onFilesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.onFileSelected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
      }
      /**
       * Resolver
       *
       * @param {ActivatedRouteSnapshot} route
       * @param {RouterStateSnapshot} state
       * @returns {Observable<any> | Promise<any> | any}
       */


      _createClass(FileManagerService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            //console.log('ingresa ....');
            Promise.all([_this.getFiles()]).then(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 1),
                  files = _ref2[0];

              resolve();
            }, reject);
          });
        }
        /**
         * Get files
         *
         * @returns {Promise<any>}
         */

      }, {
        key: "getFiles",
        value: function getFiles() {
          var _this2 = this;

          //console.log('ingresa !!!');
          return new Promise(function (resolve, reject) {
            _this2._httpClient.get('api/file-manager').subscribe(function (response) {
              _this2.onFilesChanged.next(response);

              _this2.onFileSelected.next(response[0]);

              resolve(response);
            }, reject);
          });
        }
      }]);

      return FileManagerService;
    }();

    FileManagerService.ɵfac = function FileManagerService_Factory(t) {
      return new (t || FileManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    FileManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FileManagerService,
      factory: FileManagerService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map