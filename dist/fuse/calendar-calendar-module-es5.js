function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"], {
  /***/
  "./node_modules/@angular/common/locales/es.js":
  /*!****************************************************!*\
    !*** ./node_modules/@angular/common/locales/es.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularCommonLocalesEsJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */


    (function (factory) {
      if (true && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
      } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      }
    })(function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      }); // THIS CODE IS GENERATED - DO NOT MODIFY
      // See angular/tools/gulp-tasks/cldr/extract.js

      var u = undefined;

      function plural(n) {
        if (n === 1) return 1;
        return 5;
      }

      exports.default = ['es', [['a. m.', 'p. m.'], u, u], u, [['D', 'L', 'M', 'X', 'J', 'V', 'S'], ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'], ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'], ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA']], u, [['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.', 'dic.'], ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']], u, [['a. C.', 'd. C.'], u, ['antes de Cristo', 'después de Cristo']], 1, [6, 0], ['d/M/yy', 'd MMM y', 'd \'de\' MMMM \'de\' y', 'EEEE, d \'de\' MMMM \'de\' y'], ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss (zzzz)'], ['{1} {0}', u, '{1}, {0}', u], [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], 'EUR', '€', 'euro', {
        'AUD': [u, '$'],
        'BRL': [u, 'R$'],
        'CNY': [u, '¥'],
        'EGP': [],
        'ESP': ['₧'],
        'GBP': [u, '£'],
        'HKD': [u, '$'],
        'ILS': [u, '₪'],
        'INR': [u, '₹'],
        'JPY': [u, '¥'],
        'KRW': [u, '₩'],
        'MXN': [u, '$'],
        'NZD': [u, '$'],
        'RON': [u, 'L'],
        'THB': ['฿'],
        'TWD': [u, 'NT$'],
        'USD': ['US$', '$'],
        'XAF': [],
        'XCD': [u, '$'],
        'XOF': []
      }, plural];
    }); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsSUFBSTtRQUNKLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1lBQzdGLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO1lBQzFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQzNDO1FBQ0QsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RDtnQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTTtnQkFDdkYsTUFBTTthQUNQO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZO2dCQUN0RixTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVc7YUFDcEM7U0FDRjtRQUNELENBQUM7UUFDRCxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNOLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSx3QkFBd0IsRUFBRSw4QkFBOEIsQ0FBQztRQUMvRSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDO1FBQ2xELENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7UUFDN0MsS0FBSztRQUNMLEdBQUc7UUFDSCxNQUFNO1FBQ047WUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDbkIsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChuID09PSAxKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2VzJyxcbiAgW1snYS7CoG0uJywgJ3AuwqBtLiddLCB1LCB1XSxcbiAgdSxcbiAgW1xuICAgIFsnRCcsICdMJywgJ00nLCAnWCcsICdKJywgJ1YnLCAnUyddLCBbJ2RvbS4nLCAnbHVuLicsICdtYXIuJywgJ21pw6kuJywgJ2p1ZS4nLCAndmllLicsICdzw6FiLiddLFxuICAgIFsnZG9taW5nbycsICdsdW5lcycsICdtYXJ0ZXMnLCAnbWnDqXJjb2xlcycsICdqdWV2ZXMnLCAndmllcm5lcycsICdzw6FiYWRvJ10sXG4gICAgWydETycsICdMVScsICdNQScsICdNSScsICdKVScsICdWSScsICdTQSddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ0UnLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gICAgW1xuICAgICAgJ2VuZS4nLCAnZmViLicsICdtYXIuJywgJ2Fici4nLCAnbWF5LicsICdqdW4uJywgJ2p1bC4nLCAnYWdvLicsICdzZXB0LicsICdvY3QuJywgJ25vdi4nLFxuICAgICAgJ2RpYy4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnZW5lcm8nLCAnZmVicmVybycsICdtYXJ6bycsICdhYnJpbCcsICdtYXlvJywgJ2p1bmlvJywgJ2p1bGlvJywgJ2Fnb3N0bycsICdzZXB0aWVtYnJlJyxcbiAgICAgICdvY3R1YnJlJywgJ25vdmllbWJyZScsICdkaWNpZW1icmUnXG4gICAgXVxuICBdLFxuICB1LFxuICBbWydhLiBDLicsICdkLiBDLiddLCB1LCBbJ2FudGVzIGRlIENyaXN0bycsICdkZXNwdcOpcyBkZSBDcmlzdG8nXV0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkL00veXknLCAnZCBNTU0geScsICdkIFxcJ2RlXFwnIE1NTU0gXFwnZGVcXCcgeScsICdFRUVFLCBkIFxcJ2RlXFwnIE1NTU0gXFwnZGVcXCcgeSddLFxuICBbJ0g6bW0nLCAnSDptbTpzcycsICdIOm1tOnNzIHonLCAnSDptbTpzcyAoenp6eiknXSxcbiAgWyd7MX0gezB9JywgdSwgJ3sxfSwgezB9JywgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwwqAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSxcbiAgJ0VVUicsXG4gICfigqwnLFxuICAnZXVybycsXG4gIHtcbiAgICAnQVVEJzogW3UsICckJ10sXG4gICAgJ0JSTCc6IFt1LCAnUiQnXSxcbiAgICAnQ05ZJzogW3UsICfCpSddLFxuICAgICdFR1AnOiBbXSxcbiAgICAnRVNQJzogWyfigqcnXSxcbiAgICAnR0JQJzogW3UsICfCoyddLFxuICAgICdIS0QnOiBbdSwgJyQnXSxcbiAgICAnSUxTJzogW3UsICfigqonXSxcbiAgICAnSU5SJzogW3UsICfigrknXSxcbiAgICAnSlBZJzogW3UsICfCpSddLFxuICAgICdLUlcnOiBbdSwgJ+KCqSddLFxuICAgICdNWE4nOiBbdSwgJyQnXSxcbiAgICAnTlpEJzogW3UsICckJ10sXG4gICAgJ1JPTic6IFt1LCAnTCddLFxuICAgICdUSEInOiBbJ+C4vyddLFxuICAgICdUV0QnOiBbdSwgJ05UJCddLFxuICAgICdVU0QnOiBbJ1VTJCcsICckJ10sXG4gICAgJ1hBRic6IFtdLFxuICAgICdYQ0QnOiBbdSwgJyQnXSxcbiAgICAnWE9GJzogW11cbiAgfSxcbiAgcGx1cmFsXG5dO1xuIl19

    /***/

  },

  /***/
  "./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js ***!
    \********************************************************************************************************/

  /*! exports provided: SwalComponent, SwalDirective, SwalPortalDirective, SwalPortalTargets, SweetAlert2LoaderService, SweetAlert2Module, ɵa, ɵb, ɵc, ɵd, ɵe */

  /***/
  function node_modulesSweetalert2NgxSweetalert2__ivy_ngcc__Fesm2015Sweetalert2NgxSweetalert2Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwalComponent", function () {
      return SwalComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwalDirective", function () {
      return SwalDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwalPortalDirective", function () {
      return SwalPortalDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwalPortalTargets", function () {
      return SwalPortalTargets;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SweetAlert2LoaderService", function () {
      return SweetAlert2LoaderService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SweetAlert2Module", function () {
      return SweetAlert2Module;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return provideDefaultSwal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return swalProviderToken;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return fireOnInitToken;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return dismissOnDestroyToken;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return SwalPortalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@sweetalert2/ngx-sweetalert2/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SwalPortalComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    var swalProviderToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@sweetalert2/ngx-sweetalert2#swalProvider');
    var fireOnInitToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@sweetalert2/ngx-sweetalert2#fireOnInit');
    var dismissOnDestroyToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@sweetalert2/ngx-sweetalert2#dismissOnDestroy');

    var SweetAlert2LoaderService =
    /*#__PURE__*/
    function () {
      // Using any because Angular metadata generator does not understand a pure TS type here
      function SweetAlert2LoaderService(swalProvider) {
        _classCallCheck(this, SweetAlert2LoaderService);

        this.swalProvider = swalProvider;
      }

      _createClass(SweetAlert2LoaderService, [{
        key: "preloadSweetAlertLibrary",
        value: function preloadSweetAlertLibrary() {
          if (this.swalPromiseCache) return;
          var libPromise = isLoader(this.swalProvider) ? this.swalProvider() : Promise.resolve(this.swalProvider);
          this.swalPromiseCache = libPromise.then(function (value) {
            return isDefaultExport(value) ? value : value.default;
          });

          function isLoader(value) {
            return typeof value === 'function' && value.version === undefined;
          }

          function isDefaultExport(value) {
            return typeof value === 'function';
          }
        }
      }, {
        key: "swal",
        get: function get() {
          if (!this.swalPromiseCache) {
            this.preloadSweetAlertLibrary();
          }

          return this.swalPromiseCache;
        }
      }]);

      return SweetAlert2LoaderService;
    }();

    SweetAlert2LoaderService.ɵfac = function SweetAlert2LoaderService_Factory(t) {
      return new (t || SweetAlert2LoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](swalProviderToken));
    };

    SweetAlert2LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SweetAlert2LoaderService,
      factory: SweetAlert2LoaderService.ɵfac
    });

    SweetAlert2LoaderService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [swalProviderToken]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SweetAlert2LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [swalProviderToken]
          }]
        }];
      }, null);
    })();
    /**
     * <swal> component. See the README.md for usage.
     *
     * It contains a bunch of @Inputs that have a perfect 1:1 mapping with SweetAlert2 options.
     * Their types are directly coming from SweetAlert2 types defintitions, meaning that ngx-sweetalert2 is tightly coupled
     * to SweetAlert2, but also is type-safe even if both libraries do not evolve in sync.
     *
     * (?) If you want to use an object that declares the SweetAlert2 options all at once rather than many @Inputs,
     *     take a look at [swalOptions], that lets you pass a full {@link SweetAlertOptions} object.
     *
     * (?) If you are reading the TypeScript source of this component, you may think that it's a lot of code.
     *     Be sure that a lot of this code is types and Angular boilerplate. Compiled and minified code is much smaller.
     *     If you are really concerned about performance and/or don't care about the API and its convenient integration
     *     with Angular (notably change detection and transclusion), you may totally use SweetAlert2 natively as well ;)
     *
     * /!\ Some SweetAlert options aren't @Inputs but @Outputs: `willOpen`, `didOpen`, `didRender`, `willClose`, `didClose`
     *     and `didDestroy`.
     *     However, `preConfirm`, `preDeny` and `inputValidator` are still @Inputs because they are not event handlers,
     *     there can't be multiple listeners on them, and we need the values they can/must return.
     */


    var SwalComponent =
    /*#__PURE__*/
    function () {
      function SwalComponent(sweetAlert2Loader, moduleLevelFireOnInit, moduleLevelDismissOnDestroy) {
        _classCallCheck(this, SwalComponent);

        this.sweetAlert2Loader = sweetAlert2Loader;
        this.moduleLevelFireOnInit = moduleLevelFireOnInit;
        this.moduleLevelDismissOnDestroy = moduleLevelDismissOnDestroy;
        /**
         * Modal lifecycle hook. Synchronously runs before the modal is shown on screen.
         */

        this.willOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Synchronously runs before the modal is shown on screen.
         */

        this.didOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Synchronously runs after the popup DOM has been updated (ie. just before the modal is
         * repainted on the screen).
         * Typically, this will happen after `Swal.fire()` or `Swal.update()`.
         * If you want to perform changes in the popup's DOM, that survive `Swal.update()`, prefer {@link didRender} over
         * {@link willOpen}.
         */

        this.didRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Synchronously runs when the popup closes by user interaction (and not due to another popup
         * being fired).
         */

        this.willClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Asynchronously runs after the popup has been disposed by user interaction (and not due to
         * another popup being fired).
         */

        this.didClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Synchronously runs after popup has been destroyed either by user interaction or by another
         * popup.
         * If you have cleanup operations that you need to reliably execute each time a modal is closed, prefer
         * {@link didDestroy} over {@link didClose}.
         */

        this.didDestroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Confirm".
         * The event value ($event) can be either:
         *  - by default, just `true`,
         *  - when using {@link input}, the input value,
         *  - when using {@link preConfirm}, the return value of this function.
         *
         * Example:
         *     <swal (confirm)="handleConfirm($event)"></swal>
         *
         *     public handleConfirm(email: string): void {
         *         // ... save user email
         *     }
         */

        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Deny".
         * This event bears no value.
         * Use `(deny)` (along with {@link showDenyButton}) when you want a modal with three buttons (confirm, deny and
         * cancel), and/or when you want to handle clear refusal in a separate way than simple dismissal.
         *
         * Example:
         *     <swal (deny)="handleDeny()"></swal>
         *
         *     public handleDeny(): void {
         *     }
         */

        this.deny = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Cancel", or dismisses the modal by any other allowed way.
         * The event value ($event) is a string that explains how the modal was dismissed. It is `undefined` when
         * the modal was programmatically closed (through {@link close} for example).
         *
         * Example:
         *     <swal (dismiss)="handleDismiss($event)"></swal>
         *
         *     public handleDismiss(reason: DismissReason | undefined): void {
         *         // reason can be 'cancel', 'overlay', 'close', 'timer' or undefined.
         *         // ... do something
         *     }
         */

        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This Set retains the properties that have been changed from @Inputs, so we can know precisely
         * what options we have to send to {@link Swal.fire}.
         */

        this.touchedProps = new Set();
        /**
         * A function of signature `(propName: string): void` that adds a given property name to the list of
         * touched properties, ie. {@link touchedProps}.
         */

        this.markTouched = this.touchedProps.add.bind(this.touchedProps);
        /**
         * Is the SweetAlert2 modal represented by this component currently opened?
         */

        this.isCurrentlyShown = false;
      }
      /**
       * An object of SweetAlert2 native options, useful if:
       *  - you don't want to use the @Inputs for practical/philosophical reasons ;
       *  - there are missing @Inputs because ngx-sweetalert2 isn't up-to-date with SweetAlert2's latest changes.
       *
       * /!\ Please note that setting this property does NOT erase what has been set before unless you specify the
       *     previous properties you want to erase again.
       *     Ie. setting { title: 'Title' } and then { text: 'Text' } will give { title: 'Title', text: 'Text' }.
       *
       * /!\ Be aware that the options defined in this object will override the @Inputs of the same name.
       */


      _createClass(SwalComponent, [{
        key: "ngOnInit",

        /**
         * Angular lifecycle hook.
         * Asks the SweetAlert2 loader service to preload the SweetAlert2 library, so it begins to be loaded only if there
         * is a <swal> component somewhere, and is probably fully loaded when the modal has to be displayed,
         * causing no delay.
         */
        value: function ngOnInit() {
          //=> Preload SweetAlert2 library in case this component is activated.
          this.sweetAlert2Loader.preloadSweetAlertLibrary();
        }
        /**
         * Angular lifecycle hook.
         * Fires the modal, if the component or module is configured to do so.
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var fireOnInit = this.swalFireOnInit === undefined ? this.moduleLevelFireOnInit : this.swalFireOnInit;
          fireOnInit && this.fire();
        }
        /**
         * Angular lifecycle hook.
         * Updates the SweetAlert options, and if the modal is opened, asks SweetAlert to render it again.
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          //=> For each changed @Input that matches a SweetAlert2 option, mark as touched so we can
          //   send it with the next fire() or update() calls.
          Object.keys(changes) //=> If the filtering logic becomes more complex here, we can use Swal.isValidParameter
          .filter(function (key) {
            return !key.startsWith('swal');
          }).forEach(this.markTouched); //=> Eventually trigger re-render if the modal is open.

          void this.update();
        }
        /**
         * Angular lifecycle hook.
         * Closes the SweetAlert when the component is destroyed.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          //=> Release the modal if the component is destroyed and if that behaviour is not disabled.
          var dismissOnDestroy = this.swalDismissOnDestroy === undefined ? this.moduleLevelDismissOnDestroy : this.swalDismissOnDestroy;
          dismissOnDestroy && this.close();
        }
        /**
         * Shows the SweetAlert.
         *
         * Returns the SweetAlert2 promise for convenience and use in code behind templates.
         * Otherwise, (confirm)="myHandler($event)" and (dismiss)="myHandler($event)" can be used in templates.
         */

      }, {
        key: "fire",
        value: function fire() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var swal, userOptions, options, result, composeHook;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    composeHook = function _ref(userHook, libHook) {
                      return function () {
                        return libHook.apply(void 0, arguments), userHook === null || userHook === void 0 ? void 0 : userHook.apply(void 0, arguments);
                      };
                    };

                    _context.next = 3;
                    return this.sweetAlert2Loader.swal;

                  case 3:
                    swal = _context.sent;
                    userOptions = this.swalOptions; //=> Build the SweetAlert2 options

                    options = Object.assign(Object.assign({}, userOptions), {
                      //=> Handle modal lifecycle events
                      willOpen: composeHook(userOptions.willOpen, function (modalElement) {
                        _this.willOpen.emit({
                          modalElement: modalElement
                        });
                      }),
                      didOpen: composeHook(userOptions.didOpen, function (modalElement) {
                        _this.isCurrentlyShown = true;

                        _this.didOpen.emit({
                          modalElement: modalElement
                        });
                      }),
                      didRender: composeHook(userOptions.didRender, function (modalElement) {
                        _this.didRender.emit({
                          modalElement: modalElement
                        });
                      }),
                      willClose: composeHook(userOptions.willClose, function (modalElement) {
                        _this.isCurrentlyShown = false;

                        _this.willClose.emit({
                          modalElement: modalElement
                        });
                      }),
                      didClose: composeHook(userOptions.didClose, function () {
                        _this.didClose.emit();
                      }),
                      didDestroy: composeHook(userOptions.didDestroy, function () {
                        _this.didDestroy.emit();
                      })
                    }); //=> Show the Swal! And wait for confirmation or dimissal.

                    _context.next = 8;
                    return swal.fire(options);

                  case 8:
                    result = _context.sent;
                    _context.t0 = true;
                    _context.next = _context.t0 === result.isConfirmed ? 12 : _context.t0 === result.isDenied ? 14 : _context.t0 === result.isDismissed ? 16 : 18;
                    break;

                  case 12:
                    this.confirm.emit(result.value);
                    return _context.abrupt("break", 18);

                  case 14:
                    this.deny.emit();
                    return _context.abrupt("break", 18);

                  case 16:
                    this.dismiss.emit(result.dismiss);
                    return _context.abrupt("break", 18);

                  case 18:
                    return _context.abrupt("return", result);

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /**
         * Closes the modal, if opened.
         *
         * @param result The value that the modal will resolve with, triggering either (confirm), (deny) or (dismiss).
         *               If the argument is not passed, it is (dismiss) that will emit an `undefined` reason.
         *               {@see Swal.close}.
         */

      }, {
        key: "close",
        value: function close(result) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var swal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.isCurrentlyShown) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    _context2.next = 4;
                    return this.sweetAlert2Loader.swal;

                  case 4:
                    swal = _context2.sent;
                    swal.close(result);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
        /**
         * Updates SweetAlert2 options while the modal is opened, causing the modal to re-render.
         * If the modal is not opened, the component options will simply be updated and that's it.
         *
         * /!\ Please note that not all SweetAlert2 options are updatable while the modal is opened.
         *
         * @param options
         */

      }, {
        key: "update",
        value: function update(options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var swal, allOptions, updatableOptions;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (options) {
                      this.swalOptions = options;
                    }

                    if (this.isCurrentlyShown) {
                      _context3.next = 3;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 3:
                    _context3.next = 5;
                    return this.sweetAlert2Loader.swal;

                  case 5:
                    swal = _context3.sent;
                    allOptions = this.swalOptions;
                    updatableOptions = Object.keys(allOptions).filter(swal.isUpdatableParameter).reduce(function (obj, key) {
                      return Object.assign(Object.assign({}, obj), _defineProperty({}, key, allOptions[key]));
                    }, {});
                    swal.update(updatableOptions);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "swalOptions",
        set: function set(options) {
          //=> Update properties
          Object.assign(this, options); //=> Mark changed properties as touched

          var touchedKeys = Object.keys(options);
          touchedKeys.forEach(this.markTouched);
        }
        /**
         * Computes the options object that will get passed to SweetAlert2.
         * Only the properties that have been set at least once on this component will be returned.
         * Mostly for internal usage.
         */
        ,
        get: function get() {
          var _this2 = this;

          //=> We will compute the options object based on the option keys that are known to have changed.
          //   That avoids passing a gigantic object to SweetAlert2, making debugging easier and potentially
          //   avoiding side effects.
          return _toConsumableArray(this.touchedProps).reduce(function (obj, key) {
            return Object.assign(Object.assign({}, obj), _defineProperty({}, key, _this2[key]));
          }, {});
        }
      }, {
        key: "swalVisible",
        set: function set(visible) {
          visible ? this.fire() : this.close();
        },
        get: function get() {
          return this.isCurrentlyShown;
        }
      }]);

      return SwalComponent;
    }();

    SwalComponent.ɵfac = function SwalComponent_Factory(t) {
      return new (t || SwalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SweetAlert2LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](fireOnInitToken), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](dismissOnDestroyToken));
    };

    SwalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SwalComponent,
      selectors: [["swal"]],
      inputs: {
        swalOptions: "swalOptions",
        swalVisible: "swalVisible",
        title: "title",
        titleText: "titleText",
        text: "text",
        html: "html",
        footer: "footer",
        icon: "icon",
        iconColor: "iconColor",
        iconHtml: "iconHtml",
        backdrop: "backdrop",
        toast: "toast",
        target: "target",
        input: "input",
        width: "width",
        padding: "padding",
        background: "background",
        position: "position",
        grow: "grow",
        showClass: "showClass",
        hideClass: "hideClass",
        customClass: "customClass",
        timer: "timer",
        timerProgressBar: "timerProgressBar",
        animation: "animation",
        heightAuto: "heightAuto",
        allowOutsideClick: "allowOutsideClick",
        allowEscapeKey: "allowEscapeKey",
        allowEnterKey: "allowEnterKey",
        stopKeydownPropagation: "stopKeydownPropagation",
        keydownListenerCapture: "keydownListenerCapture",
        showConfirmButton: "showConfirmButton",
        showDenyButton: "showDenyButton",
        showCancelButton: "showCancelButton",
        confirmButtonText: "confirmButtonText",
        denyButtonText: "denyButtonText",
        cancelButtonText: "cancelButtonText",
        confirmButtonColor: "confirmButtonColor",
        denyButtonColor: "denyButtonColor",
        cancelButtonColor: "cancelButtonColor",
        confirmButtonAriaLabel: "confirmButtonAriaLabel",
        denyButtonAriaLabel: "denyButtonAriaLabel",
        cancelButtonAriaLabel: "cancelButtonAriaLabel",
        buttonsStyling: "buttonsStyling",
        reverseButtons: "reverseButtons",
        focusConfirm: "focusConfirm",
        focusDeny: "focusDeny",
        focusCancel: "focusCancel",
        showCloseButton: "showCloseButton",
        closeButtonHtml: "closeButtonHtml",
        closeButtonAriaLabel: "closeButtonAriaLabel",
        loaderHtml: "loaderHtml",
        showLoaderOnConfirm: "showLoaderOnConfirm",
        preConfirm: "preConfirm",
        preDeny: "preDeny",
        imageUrl: "imageUrl",
        imageWidth: "imageWidth",
        imageHeight: "imageHeight",
        imageAlt: "imageAlt",
        inputLabel: "inputLabel",
        inputPlaceholder: "inputPlaceholder",
        inputValue: "inputValue",
        inputOptions: "inputOptions",
        inputAutoTrim: "inputAutoTrim",
        inputAttributes: "inputAttributes",
        inputValidator: "inputValidator",
        returnInputValueOnDeny: "returnInputValueOnDeny",
        validationMessage: "validationMessage",
        progressSteps: "progressSteps",
        currentProgressStep: "currentProgressStep",
        progressStepsDistance: "progressStepsDistance",
        scrollbarPadding: "scrollbarPadding",
        swalFireOnInit: "swalFireOnInit",
        swalDismissOnDestroy: "swalDismissOnDestroy"
      },
      outputs: {
        willOpen: "willOpen",
        didOpen: "didOpen",
        didRender: "didRender",
        willClose: "willClose",
        didClose: "didClose",
        didDestroy: "didDestroy",
        confirm: "confirm",
        deny: "deny",
        dismiss: "dismiss"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
      decls: 0,
      vars: 0,
      template: function SwalComponent_Template(rf, ctx) {},
      encapsulation: 2,
      changeDetection: 0
    });

    SwalComponent.ctorParameters = function () {
      return [{
        type: SweetAlert2LoaderService
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [fireOnInitToken]
        }]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [dismissOnDestroyToken]
        }]
      }];
    };

    SwalComponent.propDecorators = {
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      titleText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      html: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      footer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      iconColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      iconHtml: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      backdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      toast: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      target: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      input: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      padding: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      background: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      grow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      hideClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      customClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      timer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      timerProgressBar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      animation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      heightAuto: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      allowOutsideClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      allowEscapeKey: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      allowEnterKey: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      stopKeydownPropagation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      keydownListenerCapture: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showConfirmButton: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showDenyButton: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showCancelButton: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      confirmButtonText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      denyButtonText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cancelButtonText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      confirmButtonColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      denyButtonColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cancelButtonColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      confirmButtonAriaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      denyButtonAriaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cancelButtonAriaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      buttonsStyling: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      reverseButtons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      focusConfirm: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      focusDeny: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      focusCancel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showCloseButton: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      closeButtonHtml: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      closeButtonAriaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      loaderHtml: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showLoaderOnConfirm: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      preConfirm: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      preDeny: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      imageUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      imageWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      imageHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      imageAlt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      inputLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      inputPlaceholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      inputValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      inputOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      inputAutoTrim: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      inputAttributes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      inputValidator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      returnInputValueOnDeny: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      validationMessage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      progressSteps: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      currentProgressStep: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      progressStepsDistance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      scrollbarPadding: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      swalOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      swalFireOnInit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      swalDismissOnDestroy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      swalVisible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      willOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      didOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      didRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      willClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      didClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      didDestroy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      confirm: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      deny: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dismiss: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          // tslint:disable-next-line:component-selector
          selector: 'swal',
          template: '',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: SweetAlert2LoaderService
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [fireOnInitToken]
          }]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [dismissOnDestroyToken]
          }]
        }];
      }, {
        willOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        didOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        didRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        willClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        didClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        didDestroy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        confirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        deny: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dismiss: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        swalOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        swalVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        titleText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        html: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        footer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        iconColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        iconHtml: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        backdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        toast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        target: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        padding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        background: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        grow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hideClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        timer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        timerProgressBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        heightAuto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        allowOutsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        allowEscapeKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        allowEnterKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        stopKeydownPropagation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        keydownListenerCapture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showConfirmButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showDenyButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showCancelButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        confirmButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        denyButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cancelButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        confirmButtonColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        denyButtonColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cancelButtonColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        confirmButtonAriaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        denyButtonAriaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cancelButtonAriaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        buttonsStyling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        reverseButtons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        focusConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        focusDeny: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        focusCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showCloseButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        closeButtonHtml: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        closeButtonAriaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        loaderHtml: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showLoaderOnConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preDeny: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imageUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imageWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imageHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imageAlt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputPlaceholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputAutoTrim: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputAttributes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputValidator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        returnInputValueOnDeny: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        validationMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        progressSteps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        currentProgressStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        progressStepsDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollbarPadding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        swalFireOnInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        swalDismissOnDestroy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * [swal] directive. It takes a value that defines the SweetAlert and can be of three types:
     *
     * 1) A simple array of two or three strings defining [title, text, icon] - the icon being optional, ex:
     *
     *    <button [swal]="['Title', 'Text']">Click me</button>
     *
     * 2) A native SweetAlert2 options object, ex:
     *
     *    <button [swal]="{ title: 'Title', text: 'Text' }">Click me</button>
     *
     * 3) A reference to an existing SwalComponent instance for more advanced uses, ex:
     *
     *    <button [swal]="mySwal">Click me</button>
     *    <swal #mySwal title="Title" text="Text"></swal>
     */


    var SwalDirective =
    /*#__PURE__*/
    function () {
      function SwalDirective(viewContainerRef, resolver) {
        _classCallCheck(this, SwalDirective);

        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        /**
         * Emits when the user clicks "Confirm".
         * The event value ($event) can be either:
         *  - by default, just `true`,
         *  - when using {@link input}, the input value,
         *  - when using {@link preConfirm}, the return value of this function.
         *
         * Example:
         *     <swal (confirm)="handleConfirm($event)"></swal>
         *
         *     public handleConfirm(email: string): void {
         *         // ... save user email
         *     }
         */

        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Deny".
         * This event bears no value.
         * Use `(deny)` (along with {@link showDenyButton}) when you want a modal with three buttons (confirm, deny and
         * cancel), and/or when you want to handle clear refusal in a separate way than simple dismissal.
         *
         * Example:
         *     <swal (deny)="handleDeny()"></swal>
         *
         *     public handleDeny(): void {
         *     }
         */

        this.deny = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Cancel", or dismisses the modal by any other allowed way.
         * The event value ($event) is a string that explains how the modal was dismissed. It is `undefined` when
         * the modal was programmatically closed (through {@link dismiss} for example).
         *
         * Example:
         *     <swal (dismiss)="handleDismiss($event)"></swal>
         *
         *     public handleDismiss(reason: DismissReason | undefined): void {
         *         // reason can be 'cancel', 'overlay', 'close', 'timer' or undefined.
         *         // ... do something
         *     }
         */

        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * SweetAlert2 options or a SwalComponent instance.
       * See the class doc block for more informations.
       */


      _createClass(SwalDirective, [{
        key: "ngOnInit",

        /**
         * OnInit lifecycle handler.
         * Creates a SwalComponent instance if the user didn't provided one and binds on that component (confirm),
         * (deny) and (dismiss) outputs to reemit on the directive.
         */
        value: function ngOnInit() {
          if (!this.swalInstance) {
            var factory = this.resolver.resolveComponentFactory(SwalComponent);
            this.swalRef = this.viewContainerRef.createComponent(factory);
            this.swalInstance = this.swalRef.instance;
          }
        }
        /**
         * OnDestroy lifecycle handler.
         * Destroys the dynamically-created SwalComponent.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.swalRef) {
            this.swalRef.destroy();
          }
        }
        /**
         * Click handler.
         * The directive listens for onclick events on its host element.
         * When this happens, it shows the <swal> attached to this directive.
         */

      }, {
        key: "onClick",
        value: function onClick(event) {
          var _this3 = this;

          event.preventDefault();
          event.stopImmediatePropagation();
          event.stopPropagation();
          if (!this.swalInstance) return;

          if (this.swalOptions) {
            this.swalInstance.swalOptions = this.swalOptions;
          }

          var swalClosed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.swalInstance.confirm.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(swalClosed)).subscribe(function (v) {
            return _this3.confirm.emit(v);
          });
          this.swalInstance.deny.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(swalClosed)).subscribe(function (v) {
            return _this3.deny.emit(v);
          });
          this.swalInstance.dismiss.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(swalClosed)).subscribe(function (v) {
            return _this3.dismiss.emit(v);
          });
          this.swalInstance.fire().then(function () {
            return swalClosed.next();
          });
        }
      }, {
        key: "swal",
        set: function set(options) {
          if (options instanceof SwalComponent) {
            this.swalInstance = options;
          } else if (isArrayOptions(options)) {
            this.swalOptions = {};

            var _options = _slicedToArray(options, 3);

            this.swalOptions.title = _options[0];
            this.swalOptions.text = _options[1];
            this.swalOptions.icon = _options[2];
          } else {
            this.swalOptions = options;
          }

          function isArrayOptions(value) {
            return Array.isArray(options);
          }
        }
      }]);

      return SwalDirective;
    }();

    SwalDirective.ɵfac = function SwalDirective_Factory(t) {
      return new (t || SwalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]));
    };

    SwalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: SwalDirective,
      selectors: [["", "swal", ""]],
      hostBindings: function SwalDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SwalDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      inputs: {
        swal: "swal"
      },
      outputs: {
        confirm: "confirm",
        deny: "deny",
        dismiss: "dismiss"
      }
    });

    SwalDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }];
    };

    SwalDirective.propDecorators = {
      swal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      confirm: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      deny: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dismiss: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['click', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[swal]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }];
      }, {
        confirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        deny: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dismiss: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        swal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /**
     * Represents an object of targets for <swal> portals (use with *swalPortal directive).
     * We must use thunks to access the Swal.* functions listed below, because they get created after the first modal is
     * shown, so this object lets us reference those functions safely and in a statically-typed manner.
     */


    var SwalPortalTargets = function SwalPortalTargets() {
      _classCallCheck(this, SwalPortalTargets);

      /**
       * Targets the modal close button block contents.
       */
      this.closeButton = {
        element: function element(swal) {
          return swal.getCloseButton();
        },
        options: {
          showCloseButton: true
        }
      };
      /**
       * Targets the modal title block contents.
       */

      this.title = {
        element: function element(swal) {
          return swal.getTitle();
        },
        // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
        options: {
          title: ' '
        }
      };
      /**
       * Targets the modal text block contents (that is another block inside the first content block, so you can still
       * use other modal features like Swal inputs, that are situated inside that parent content block).
       */

      this.content = {
        element: function element(swal) {
          return swal.getHtmlContainer();
        },
        // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
        options: {
          text: ' '
        }
      };
      /**
       * Targets the actions block contents, where are the confirm and cancel buttons in a normal time.
       * /!\ WARNING: using this target destroys some of the native SweetAlert2 modal's DOM, therefore, if you use this
       *     target, do not update the modal via <swal> @Inputs while the modal is open, or you'll get an error.
       *     We could workaround that inconvenient inside this integration, but that'd be detrimental to memory and
       *     performance of everyone, for a relatively rare use case.
       */

      this.actions = {
        element: function element(swal) {
          return swal.getActions();
        },
        // The button will never exist, but SweetAlert2 shows the actions block only if there is at least one button.
        options: {
          showConfirmButton: true
        }
      };
      /**
       * Targets the confirm button contents, replacing the text inside it (not the button itself)
       */

      this.confirmButton = {
        element: function element(swal) {
          return swal.getConfirmButton();
        },
        options: {
          showConfirmButton: true
        }
      };
      /**
       * Targets the deny button contents, replacing the text inside it (not the button itself)
       */

      this.denyButton = {
        element: function element(swal) {
          return swal.getDenyButton();
        },
        options: {
          showDenyButton: true
        }
      };
      /**
       * Targets the cancel button contents, replacing the text inside it (not the button itself)
       */

      this.cancelButton = {
        element: function element(swal) {
          return swal.getCancelButton();
        },
        options: {
          showCancelButton: true
        }
      };
      /**
       * Targets the modal footer contents.
       */

      this.footer = {
        element: function element(swal) {
          return swal.getFooter();
        },
        // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
        options: {
          footer: ' '
        }
      };
    };

    SwalPortalTargets.ɵfac = function SwalPortalTargets_Factory(t) {
      return new (t || SwalPortalTargets)();
    };

    SwalPortalTargets.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function SwalPortalTargets_Factory() {
        return new SwalPortalTargets();
      },
      token: SwalPortalTargets,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalTargets, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @internal
     * Holds a consumer's Angular template and displays it on a Sweet Alert.
     * See SwalPortalDirective for info about the covered feature.
     */


    var SwalPortalComponent = function SwalPortalComponent() {
      _classCallCheck(this, SwalPortalComponent);

      this.template = null;
    };

    SwalPortalComponent.ɵfac = function SwalPortalComponent_Factory(t) {
      return new (t || SwalPortalComponent)();
    };

    SwalPortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SwalPortalComponent,
      selectors: [["swal-portal"]],
      inputs: {
        template: "template"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngTemplateOutlet"]],
      template: function SwalPortalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SwalPortalComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.template);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
      encapsulation: 2,
      changeDetection: 0
    });
    SwalPortalComponent.propDecorators = {
      template: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'swal-portal',
          template: '<ng-container *ngTemplateOutlet="template"></ng-container>',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * A structural directive that lets you use Angular templates inside of SweetAlerts.
     * There are different targetable zones provided by {@link SwalPortalTargets}: title, content, confirmButton, etc, but
     * you can also make your own target by implementing {@link SwalPortalTarget} and giving it to this directive.
     * The default target is the alert text content zone.
     *
     * Usage in your component's TypeScript (if you use another target than {@link SwalPortalTargets.content}):
     *
     *     @Component({ ... })
     *     export class MyComponent {
     *         public constructor(public readonly swalTargets: SwalPortalTargets) {
     *         }
     *     }
     *
     * Usage in the template:
     *
     *     <swal title="Fill the form" (confirm)="confirmHandler()">
     *         <!-- This form will be displayed as the alert main content
     *              Targets the alert's main content zone by default -->
     *         <form *swalPortal [formControl]="myForm">
     *             ...
     *         </form>
     *
     *         <!-- This targets the confirm button's inner content
     *              Notice the usage of ng-container to avoid creating an useless DOM element inside the button -->
     *         <ng-container *swalPortal="swalTargets.confirmButton">
     *              Send ({{ secondsLeft }} seconds left)
     *         </ng-container>
     *     <swal>
     */


    var SwalPortalDirective =
    /*#__PURE__*/
    function () {
      function SwalPortalDirective(resolver, injector, app, templateRef, sweetAlert2Loader, swalTargets, swalComponent) {
        _classCallCheck(this, SwalPortalDirective);

        this.resolver = resolver;
        this.injector = injector;
        this.app = app;
        this.templateRef = templateRef;
        this.sweetAlert2Loader = sweetAlert2Loader;
        this.swalTargets = swalTargets;
        this.swalComponent = swalComponent;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }
      /**
       * Subscribes to the the SweetAlert appearance/disappearance events to create/destroy the SwalPortalComponent
       * that will receive the consumer's template.
       */


      _createClass(SwalPortalDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Can't be set in a default property value, if the customer lets *swalPortal empty, the value we get is undef.
          this.target = this.target || this.swalTargets.content; //=> Apply the options provided by the target definition

          void this.swalComponent.update(this.target.options); //=> Subscribe to a few hooks frm the parent SwalComponent.

          this.swalComponent.didRender.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(this.didRenderHook.bind(this));
          this.swalComponent.willOpen.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(this.willOpenHook.bind(this));
          this.swalComponent.didDestroy.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(this.didDestroyHook.bind(this));
        }
        /**
         * Signal any {@link destroyed} consumer that this is over, so they can unsubscribe from the
         * parent SwalComponent events.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed.next();
        }
        /**
         * This didRender hook runs 1..n times (per modal instance), just before the modal is shown (and also before the
         * {@link willOpenHook}), or after Swal.update() is called.
         * This is a good place to render, or re-render, our portal contents.
         */

      }, {
        key: "didRenderHook",
        value: function didRenderHook() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var swal, targetEl;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    //=> Ensure the portal component is created
                    if (!this.portalComponentRef) {
                      this.portalComponentRef = this.createPortalComponent();
                    } //=> SweetAlert2 created the modal or just erased all of our content, so we need to install/reinstall it.
                    // Swal.update() is synchronous, this observable too, and mountComponentOnTarget too (the promise inside
                    // this function is already resolved at this point), so the whole process of re-rendering and re-mounting
                    // the portal component is fully synchronous, causing no blinks in the modal contents.


                    _context4.next = 3;
                    return this.sweetAlert2Loader.swal;

                  case 3:
                    swal = _context4.sent;
                    //=> Find target element
                    targetEl = this.target.element(swal);

                    if (targetEl) {
                      _context4.next = 7;
                      break;
                    }

                    return _context4.abrupt("return");

                  case 7:
                    //=> Replace target's contents with our component
                    // https://jsperf.com/innerhtml-vs-removechild/15
                    while (targetEl.firstChild) {
                      targetEl.removeChild(targetEl.firstChild);
                    }

                    targetEl.appendChild(this.portalComponentRef.location.nativeElement);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
        /**
         * This willOpen hook runs once (per modal instance), just before the modal is shown on the screen.
         * This is a good place to declare our detached view to the Angular app.
         */

      }, {
        key: "willOpenHook",
        value: function willOpenHook() {
          if (!this.portalComponentRef) return; //=> Make the Angular app aware of that detached view so rendering and change detection can happen

          this.app.attachView(this.portalComponentRef.hostView);
        }
        /**
         * This didDestroy hook runs once (per modal instance), just after the modal closing animation terminated.
         * This is a good place to detach and destroy our content, that is not visible anymore.
         */

      }, {
        key: "didDestroyHook",
        value: function didDestroyHook() {
          if (!this.portalComponentRef) return; //=> Detach the portal component from the app and destroy it

          this.app.detachView(this.portalComponentRef.hostView);
          this.portalComponentRef.destroy();
          this.portalComponentRef = void 0;
        }
        /**
         * Creates the {@link SwalPortalComponent} and gives it the customer's template ref.
         */

      }, {
        key: "createPortalComponent",
        value: function createPortalComponent() {
          //=> Create the SwalPortalComponent that will hold our content
          var factory = this.resolver.resolveComponentFactory(SwalPortalComponent); // Yes, we do not use the third argument that would directly use the target as the component's view
          // (unfortunately, because that would give a cleaner DOM and would avoid dirty and direct DOM manipulations)
          // That's because we want to keep our component safe from SweetAlert2's operations on the DOM, and to be
          // able to restore it at any moment, ie. after the modal has been re-rendered.

          var componentRef = factory.create(this.injector, []); //=> Apply the consumer's template on the component

          componentRef.instance.template = this.templateRef;
          return componentRef;
        }
      }]);

      return SwalPortalDirective;
    }();

    SwalPortalDirective.ɵfac = function SwalPortalDirective_Factory(t) {
      return new (t || SwalPortalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SweetAlert2LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SwalPortalTargets), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SwalComponent, 1));
    };

    SwalPortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: SwalPortalDirective,
      selectors: [["", "swalPortal", ""]],
      inputs: {
        target: ["swalPortal", "target"]
      }
    });

    SwalPortalDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: SweetAlert2LoaderService
      }, {
        type: SwalPortalTargets
      }, {
        type: SwalComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    SwalPortalDirective.propDecorators = {
      target: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['swalPortal']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[swalPortal]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: SweetAlert2LoaderService
        }, {
          type: SwalPortalTargets
        }, {
          type: SwalComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        target: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['swalPortal']
        }]
      });
    })();

    function provideDefaultSwal() {
      return Promise.resolve().then(__webpack_require__.t.bind(null,
      /*! sweetalert2 */
      "./node_modules/sweetalert2/dist/sweetalert2.all.js", 7));
    }

    var SweetAlert2Module =
    /*#__PURE__*/
    function () {
      function SweetAlert2Module() {
        _classCallCheck(this, SweetAlert2Module);
      }

      _createClass(SweetAlert2Module, null, [{
        key: "forRoot",
        value: function forRoot() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: SweetAlert2Module,
            providers: [SweetAlert2LoaderService, {
              provide: swalProviderToken,
              useValue: options.provideSwal || provideDefaultSwal
            }, {
              provide: fireOnInitToken,
              useValue: options.fireOnInit || false
            }, {
              provide: dismissOnDestroyToken,
              useValue: options.dismissOnDestroy || true
            }]
          };
        }
      }, {
        key: "forChild",
        value: function forChild() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: SweetAlert2Module,
            providers: [].concat(_toConsumableArray(options.provideSwal ? [SweetAlert2LoaderService, {
              provide: swalProviderToken,
              useValue: options.provideSwal
            }] : []), _toConsumableArray(options.fireOnInit !== undefined ? [{
              provide: fireOnInitToken,
              useValue: options.fireOnInit
            }] : []), _toConsumableArray(options.dismissOnDestroy !== undefined ? [{
              provide: dismissOnDestroyToken,
              useValue: options.dismissOnDestroy
            }] : []))
          };
        }
      }]);

      return SweetAlert2Module;
    }();

    SweetAlert2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SweetAlert2Module
    });
    SweetAlert2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SweetAlert2Module_Factory(t) {
        return new (t || SweetAlert2Module)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SweetAlert2Module, {
        declarations: function declarations() {
          return [SwalDirective, SwalComponent, SwalPortalDirective, SwalPortalComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
        },
        exports: function exports() {
          return [SwalComponent, SwalPortalDirective, SwalDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SweetAlert2Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [SwalDirective, SwalComponent, SwalPortalDirective, SwalPortalComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
          exports: [SwalComponent, SwalPortalDirective, SwalDirective],
          entryComponents: [SwalComponent, SwalPortalComponent]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=sweetalert2-ngx-sweetalert2.js.map

    /***/

  },

  /***/
  "./node_modules/@sweetalert2/ngx-sweetalert2/node_modules/tslib/tslib.es6.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/@sweetalert2/ngx-sweetalert2/node_modules/tslib/tslib.es6.js ***!
    \***********************************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, default */

  /***/
  function node_modulesSweetalert2NgxSweetalert2Node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__esDecorate", function () {
      return __esDecorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__runInitializers", function () {
      return __runInitializers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__propKey", function () {
      return __propKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__setFunctionName", function () {
      return __setFunctionName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArray", function () {
      return __spreadArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldIn", function () {
      return __classPrivateFieldIn;
    });
    /******************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
      }

      var kind = contextIn.kind,
          key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});

      var _,
          done = false;

      for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};

        for (var p in contextIn) {
          context[p] = p === "access" ? {} : contextIn[p];
        }

        for (var p in contextIn.access) {
          context.access[p] = contextIn.access[p];
        }

        context.addInitializer = function (f) {
          if (done) throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f || null));
        };

        var result = (0, decorators[i])(kind === "accessor" ? {
          get: descriptor.get,
          set: descriptor.set
        } : descriptor[key], context);

        if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
        }
      }

      if (target) Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
    }

    ;

    function __runInitializers(thisArg, initializers, value) {
      var useValue = arguments.length > 2;

      for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }

      return useValue ? value : void 0;
    }

    ;

    function __propKey(x) {
      return typeof x === "symbol" ? x : "".concat(x);
    }

    ;

    function __setFunctionName(f, name, prefix) {
      if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
      return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
      });
    }

    ;

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (g && (g = 0, op[0] && (_ = 0)), _) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    var __createBinding = Object.create ? function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);

      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        };
      }

      Object.defineProperty(o, k2, desc);
    } : function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    };

    function __exportStar(m, o) {
      for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }
    /** @deprecated */


    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }
    /** @deprecated */


    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    }

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: false
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    var __setModuleDefault = Object.create ? function (o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function (o, v) {
      o["default"] = v;
    };

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }

    function __classPrivateFieldSet(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    }

    function __classPrivateFieldIn(state, receiver) {
      if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    /* harmony default export */


    __webpack_exports__["default"] = {
      __extends: __extends,
      __assign: _assign,
      __rest: __rest,
      __decorate: __decorate,
      __param: __param,
      __metadata: __metadata,
      __awaiter: __awaiter,
      __generator: __generator,
      __createBinding: __createBinding,
      __exportStar: __exportStar,
      __values: __values,
      __read: __read,
      __spread: __spread,
      __spreadArrays: __spreadArrays,
      __spreadArray: __spreadArray,
      __await: __await,
      __asyncGenerator: __asyncGenerator,
      __asyncDelegator: __asyncDelegator,
      __asyncValues: __asyncValues,
      __makeTemplateObject: __makeTemplateObject,
      __importStar: __importStar,
      __importDefault: __importDefault,
      __classPrivateFieldGet: __classPrivateFieldGet,
      __classPrivateFieldSet: __classPrivateFieldSet,
      __classPrivateFieldIn: __classPrivateFieldIn
    };
    /***/
  },

  /***/
  "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js ***!
    \*********************************************************************************/

  /*! exports provided: DAYS_OF_WEEK, CalendarA11y, CalendarAngularDateFormatter, CalendarCommonModule, CalendarDateFormatter, CalendarDayModule, CalendarDayViewComponent, CalendarEventTimesChangedEventType, CalendarEventTitleFormatter, CalendarModule, CalendarMomentDateFormatter, CalendarMonthModule, CalendarMonthViewComponent, CalendarNativeDateFormatter, CalendarUtils, CalendarView, CalendarWeekModule, CalendarWeekViewComponent, DateAdapter, MOMENT, collapseAnimation, getWeekViewPeriod, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */

  /***/
  function node_modulesAngularCalendar__ivy_ngcc__Fesm2015AngularCalendarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarA11y", function () {
      return CalendarA11y;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function () {
      return CalendarAngularDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function () {
      return CalendarCommonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function () {
      return CalendarDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function () {
      return CalendarDayModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function () {
      return CalendarDayViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function () {
      return CalendarEventTimesChangedEventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function () {
      return CalendarEventTitleFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
      return CalendarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function () {
      return CalendarMomentDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function () {
      return CalendarMonthModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function () {
      return CalendarMonthViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function () {
      return CalendarNativeDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarUtils", function () {
      return CalendarUtils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarView", function () {
      return CalendarView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function () {
      return CalendarWeekModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function () {
      return CalendarWeekViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return DateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MOMENT", function () {
      return MOMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "collapseAnimation", function () {
      return collapseAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function () {
      return getWeekViewPeriod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return CalendarOpenDayEventsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CalendarEventActionsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return CalendarEventTitleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return CalendarTooltipWindowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return CalendarTooltipDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return CalendarPreviousViewDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return CalendarNextViewDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return CalendarTodayDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return CalendarDatePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return CalendarEventTitlePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return CalendarA11yPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return ClickDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return KeydownEnterDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return CalendarMonthCellComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return CalendarMonthViewHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return CalendarWeekViewHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return CalendarWeekViewEventComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return CalendarWeekViewHourSegmentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return CalendarWeekViewCurrentTimeMarkerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! positioning */
    "./node_modules/positioning/dist/entry.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var calendar_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! calendar-utils */
    "./node_modules/calendar-utils/calendar-utils.js");
    /* harmony import */


    var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-draggable-droppable */
    "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js");
    /* harmony import */


    var angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-resizable-element */
    "./node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function () {
      return calendar_utils__WEBPACK_IMPORTED_MODULE_6__["DAYS_OF_WEEK"];
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var _c0 = function _c0(a0) {
      return {
        action: a0
      };
    };

    function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r658 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r658);

          var action_r655 = ctx.$implicit;

          var event_r651 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).event;

          return action_r655.onClick({
            event: event_r651,
            sourceEvent: $event
          });
        })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlKeydownEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r658);

          var action_r655 = ctx.$implicit;

          var event_r651 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).event;

          return action_r655.onClick({
            event: event_r651,
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var action_r655 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", action_r655.cssClass)("innerHtml", action_r655.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, action_r655), "actionButtonLabel"));
      }
    }

    function CalendarEventActionsComponent_ng_template_0_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template, 2, 8, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r661 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var event_r651 = ctx_r661.event;
        var trackByActionId_r652 = ctx_r661.trackByActionId;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", event_r651.actions)("ngForTrackBy", trackByActionId_r652);
      }
    }

    function CalendarEventActionsComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarEventActionsComponent_ng_template_0_span_0_Template, 2, 2, "span", 2);
      }

      if (rf & 2) {
        var event_r651 = ctx.event;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", event_r651.actions);
      }
    }

    function CalendarEventActionsComponent_ng_template_2_Template(rf, ctx) {}

    var _c1 = function _c1(a0, a1) {
      return {
        event: a0,
        trackByActionId: a1
      };
    };

    var _c2 = function _c2() {
      return {};
    };

    function CalendarEventTitleComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarEventTitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "calendarA11y");
      }

      if (rf & 2) {
        var event_r665 = ctx.event;
        var view_r666 = ctx.view;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 2, event_r665.title, view_r666, event_r665), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2), "hideEventTitle"));
      }
    }

    function CalendarEventTitleComponent_ng_template_2_Template(rf, ctx) {}

    var _c3 = function _c3(a0, a1) {
      return {
        event: a0,
        view: a1
      };
    };

    function CalendarTooltipWindowComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contents_r670 = ctx.contents;
        var placement_r671 = ctx.placement;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "cal-tooltip-" + placement_r671);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", contents_r670, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function CalendarTooltipWindowComponent_ng_template_2_Template(rf, ctx) {}

    var _c4 = function _c4(a0, a1, a2) {
      return {
        contents: a0,
        placement: a1,
        event: a2
      };
    };

    var _c5 = function _c5(a0) {
      return {
        backgroundColor: a0
      };
    };

    function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r678 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-month-cell", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r678);

          var day_r676 = ctx.$implicit;

          var ctx_r677 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r677.dayClicked.emit({
            day: day_r676,
            sourceEvent: $event
          });
        })("mwlKeydownEnter", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r678);

          var day_r676 = ctx.$implicit;

          var ctx_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r679.dayClicked.emit({
            day: day_r676,
            sourceEvent: $event
          });
        })("highlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r678);

          var ctx_r680 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r680.toggleDayHighlight($event.event, true);
        })("unhighlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r678);

          var ctx_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r681.toggleDayHighlight($event.event, false);
        })("drop", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_drop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r678);

          var day_r676 = ctx.$implicit;

          var ctx_r682 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r682.eventDropped(day_r676, $event.dropData.event, $event.dropData.draggedFrom);
        })("eventClicked", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r678);

          var ctx_r683 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r683.eventClicked.emit({
            event: $event.event,
            sourceEvent: $event.sourceEvent
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r676 = ctx.$implicit;

        var ctx_r675 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", day_r676 == null ? null : day_r676.cssClass)("day", day_r676)("openDay", ctx_r675.openDay)("locale", ctx_r675.locale)("tooltipPlacement", ctx_r675.tooltipPlacement)("tooltipAppendToBody", ctx_r675.tooltipAppendToBody)("tooltipTemplate", ctx_r675.tooltipTemplate)("tooltipDelay", ctx_r675.tooltipDelay)("customTemplate", ctx_r675.cellTemplate)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c5, day_r676.backgroundColor))("clickListenerDisabled", ctx_r675.dayClicked.observers.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c2), "monthCellTabIndex"));
      }
    }

    function CalendarMonthViewComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r685 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template, 2, 18, "mwl-calendar-month-cell", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mwl-calendar-open-day-events", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_eventClicked_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r685);

          var ctx_r684 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r684.eventClicked.emit({
            event: $event.event,
            sourceEvent: $event.sourceEvent
          });
        })("drop", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_drop_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r685);

          var ctx_r686 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r686.eventDropped(ctx_r686.openDay, $event.dropData.event, $event.dropData.draggedFrom);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowIndex_r674 = ctx.$implicit;

        var ctx_r673 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 9, ctx_r673.view.days, rowIndex_r674, rowIndex_r674 + ctx_r673.view.totalDaysVisibleInWeek))("ngForTrackBy", ctx_r673.trackByDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r673.locale)("isOpen", ctx_r673.openRowIndex === rowIndex_r674)("events", ctx_r673.openDay == null ? null : ctx_r673.openDay.events)("date", ctx_r673.openDay == null ? null : ctx_r673.openDay.date)("customTemplate", ctx_r673.openDayEventsTemplate)("eventTitleTemplate", ctx_r673.eventTitleTemplate)("eventActionsTemplate", ctx_r673.eventActionsTemplate);
      }
    }

    function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r696 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r696);

          var day_r694 = ctx.$implicit;

          var ctx_r695 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r695.columnHeaderClicked.emit({
            isoDayNumber: day_r694.day,
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r694 = ctx.$implicit;

        var locale_r691 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().locale;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-past", day_r694.isPast)("cal-today", day_r694.isToday)("cal-future", day_r694.isFuture)("cal-weekend", day_r694.isWeekend);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", day_r694.cssClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 10, day_r694.date, "monthViewColumnHeader", locale_r691), " ");
      }
    }

    function CalendarMonthViewHeaderComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template, 3, 14, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var days_r690 = ctx.days;
        var trackByWeekDayHeaderDate_r692 = ctx.trackByWeekDayHeaderDate;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", days_r690)("ngForTrackBy", trackByWeekDayHeaderDate_r692);
      }
    }

    function CalendarMonthViewHeaderComponent_ng_template_2_Template(rf, ctx) {}

    var _c6 = function _c6(a0, a1, a2) {
      return {
        days: a0,
        locale: a1,
        trackByWeekDayHeaderDate: a2
      };
    };

    function CalendarMonthCellComponent_ng_template_0_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r701 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().day;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](day_r701.badgeTotal);
      }
    }

    var _c7 = function _c7(a0, a1) {
      return {
        event: a0,
        draggedFrom: a1
      };
    };

    var _c8 = function _c8(a0, a1) {
      return {
        x: a0,
        y: a1
      };
    };

    function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r720 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseenter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r720);

          var event_r717 = ctx.$implicit;

          var highlightDay_r705 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).highlightDay;

          return highlightDay_r705.emit({
            event: event_r717
          });
        })("mouseleave", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseleave_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r720);

          var event_r717 = ctx.$implicit;

          var unhighlightDay_r706 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).unhighlightDay;

          return unhighlightDay_r706.emit({
            event: event_r717
          });
        })("mwlClick", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r720);

          var event_r717 = ctx.$implicit;

          var eventClicked_r707 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).eventClicked;

          return eventClicked_r707.emit({
            event: event_r717,
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarEventTitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var event_r717 = ctx.$implicit;

        var ctx_r725 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var tooltipPlacement_r704 = ctx_r725.tooltipPlacement;
        var tooltipTemplate_r708 = ctx_r725.tooltipTemplate;
        var tooltipAppendToBody_r709 = ctx_r725.tooltipAppendToBody;
        var tooltipDelay_r710 = ctx_r725.tooltipDelay;
        var day_r701 = ctx_r725.day;
        var validateDrag_r712 = ctx_r725.validateDrag;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", event_r717.draggable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c5, event_r717.color == null ? null : event_r717.color.primary))("ngClass", event_r717 == null ? null : event_r717.cssClass)("mwlCalendarTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 14, event_r717.title, "monthTooltip", event_r717))("tooltipPlacement", tooltipPlacement_r704)("tooltipEvent", event_r717)("tooltipTemplate", tooltipTemplate_r708)("tooltipAppendToBody", tooltipAppendToBody_r709)("tooltipDelay", tooltipDelay_r710)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](23, _c7, event_r717, day_r701))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](26, _c8, event_r717.draggable, event_r717.draggable))("validateDrag", validateDrag_r712);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c2), "hideMonthCellEvents"));
      }
    }

    function CalendarMonthCellComponent_ng_template_0_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template, 3, 30, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r726 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var day_r701 = ctx_r726.day;
        var trackByEventId_r711 = ctx_r726.trackByEventId;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", day_r701.events)("ngForTrackBy", trackByEventId_r711);
      }
    }

    var _c9 = function _c9(a0, a1) {
      return {
        day: a0,
        locale: a1
      };
    };

    function CalendarMonthCellComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarMonthCellComponent_ng_template_0_span_3_Template, 2, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CalendarMonthCellComponent_ng_template_0_div_7_Template, 2, 2, "div", 6);
      }

      if (rf & 2) {
        var day_r701 = ctx.day;
        var locale_r703 = ctx.locale;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c9, day_r701, locale_r703), "monthCell"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", day_r701.badgeTotal > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](6, 7, day_r701.date, "monthViewDayNumber", locale_r703));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", day_r701.events.length > 0);
      }
    }

    function CalendarMonthCellComponent_ng_template_2_Template(rf, ctx) {}

    var _c10 = function _c10(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      return {
        day: a0,
        openDay: a1,
        locale: a2,
        tooltipPlacement: a3,
        highlightDay: a4,
        unhighlightDay: a5,
        eventClicked: a6,
        tooltipTemplate: a7,
        tooltipAppendToBody: a8,
        tooltipDelay: a9,
        trackByEventId: a10,
        validateDrag: a11
      };
    };

    var _c11 = function _c11(a0) {
      return {
        event: a0
      };
    };

    var _c12 = function _c12(a0, a1) {
      return {
        event: a0,
        locale: a1
      };
    };

    function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r739 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mwl-calendar-event-title", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlClick_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r739);

          var event_r737 = ctx.$implicit;

          var eventClicked_r731 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).eventClicked;

          return eventClicked_r731.emit({
            event: event_r737,
            sourceEvent: $event
          });
        })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlKeydownEnter_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r739);

          var event_r737 = ctx.$implicit;

          var eventClicked_r731 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).eventClicked;

          return eventClicked_r731.emit({
            event: event_r737,
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mwl-calendar-event-actions", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var event_r737 = ctx.$implicit;

        var validateDrag_r734 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).validateDrag;

        var ctx_r736 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", event_r737.draggable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", event_r737 == null ? null : event_r737.cssClass)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c11, event_r737))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](17, _c8, event_r737.draggable, event_r737.draggable))("validateDrag", validateDrag_r734);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c5, event_r737.color == null ? null : event_r737.color.primary));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", event_r737)("customTemplate", ctx_r736.eventTitleTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](22, _c12, event_r737, ctx_r736.locale), "eventDescription"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", event_r737)("customTemplate", ctx_r736.eventActionsTemplate);
      }
    }

    var _c13 = function _c13(a0, a1) {
      return {
        date: a0,
        locale: a1
      };
    };

    function CalendarOpenDayEventsComponent_ng_template_0_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template, 7, 25, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r744 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var events_r730 = ctx_r744.events;
        var trackByEventId_r733 = ctx_r744.trackByEventId;

        var ctx_r735 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@collapse", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c13, ctx_r735.date, ctx_r735.locale), "openDayEventsAlert"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c13, ctx_r735.date, ctx_r735.locale), "openDayEventsLandmark"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", events_r730)("ngForTrackBy", trackByEventId_r733);
      }
    }

    function CalendarOpenDayEventsComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarOpenDayEventsComponent_ng_template_0_div_0_Template, 6, 17, "div", 2);
      }

      if (rf & 2) {
        var isOpen_r732 = ctx.isOpen;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isOpen_r732);
      }
    }

    function CalendarOpenDayEventsComponent_ng_template_2_Template(rf, ctx) {}

    var _c14 = function _c14(a0, a1, a2, a3, a4) {
      return {
        events: a0,
        eventClicked: a1,
        isOpen: a2,
        trackByEventId: a3,
        validateDrag: a4
      };
    };

    function CalendarWeekViewComponent_div_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r754 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function CalendarWeekViewComponent_div_2_div_4_Template_div_drop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r754);

          var day_r752 = ctx.$implicit;

          var ctx_r753 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r753.eventDropped($event, day_r752.date, true);
        })("dragEnter", function CalendarWeekViewComponent_div_2_div_4_Template_div_dragEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r754);

          var day_r752 = ctx.$implicit;

          var ctx_r755 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r755.dateDragEnter(day_r752.date);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c15 = function _c15() {
      return {
        left: true
      };
    };

    function CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c15));
      }
    }

    var _c16 = function _c16() {
      return {
        right: true
      };
    };

    function CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 23);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c16));
      }
    }

    var _c17 = function _c17(a0, a1) {
      return {
        left: a0,
        right: a1
      };
    };

    var _c18 = function _c18(a0, a1) {
      return {
        event: a0,
        calendarId: a1
      };
    };

    var _c19 = function _c19(a0) {
      return {
        x: a0
      };
    };

    function CalendarWeekViewComponent_div_2_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r764 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeStart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r764);

          var allDayEvent_r759 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r757 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r763 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r763.allDayEventResizeStarted(_r757, allDayEvent_r759, $event);
        })("resizing", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizing_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r764);

          var allDayEvent_r759 = ctx.$implicit;

          var ctx_r765 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r765.allDayEventResizing(allDayEvent_r759, $event, ctx_r765.dayColumnWidth);
        })("resizeEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r764);

          var allDayEvent_r759 = ctx.$implicit;

          var ctx_r766 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r766.allDayEventResizeEnded(allDayEvent_r759);
        })("dragStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragStart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r764);

          var _r760 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r757 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r767 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r767.dragStarted(_r757, _r760);
        })("dragging", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragging_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r764);

          var ctx_r768 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r768.allDayEventDragMove();
        })("dragEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r764);

          var allDayEvent_r759 = ctx.$implicit;

          var ctx_r769 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r769.dragEnded(allDayEvent_r759, $event, ctx_r769.dayColumnWidth);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template, 1, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mwl-calendar-week-view-event", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r764);

          var allDayEvent_r759 = ctx.$implicit;

          var ctx_r770 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r770.eventClicked.emit({
            event: allDayEvent_r759.event,
            sourceEvent: $event.sourceEvent
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template, 1, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var allDayEvent_r759 = ctx.$implicit;

        var ctx_r758 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100 / ctx_r758.days.length * allDayEvent_r759.span, "%")("margin-left", 100 / ctx_r758.days.length * allDayEvent_r759.offset, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", allDayEvent_r759.event.draggable && ctx_r758.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r759.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r759.endsAfterWeek);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", allDayEvent_r759.event == null ? null : allDayEvent_r759.event.cssClass)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](29, _c17, ctx_r758.dayColumnWidth, ctx_r758.dayColumnWidth))("validateResize", ctx_r758.validateResize)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](32, _c18, allDayEvent_r759.event, ctx_r758.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](35, _c8, allDayEvent_r759.event.draggable && ctx_r758.allDayEventResizes.size === 0, !ctx_r758.snapDraggedEvents && allDayEvent_r759.event.draggable && ctx_r758.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r758.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](38, _c19, ctx_r758.dayColumnWidth) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c2))("validateDrag", ctx_r758.validateDrag);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (allDayEvent_r759.event == null ? null : allDayEvent_r759.event.resizable == null ? null : allDayEvent_r759.event.resizable.beforeStart) && !allDayEvent_r759.startsBeforeWeek);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r758.locale)("weekEvent", allDayEvent_r759)("tooltipPlacement", ctx_r758.tooltipPlacement)("tooltipTemplate", ctx_r758.tooltipTemplate)("tooltipAppendToBody", ctx_r758.tooltipAppendToBody)("tooltipDelay", ctx_r758.tooltipDelay)("customTemplate", ctx_r758.eventTemplate)("eventTitleTemplate", ctx_r758.eventTitleTemplate)("eventActionsTemplate", ctx_r758.eventActionsTemplate)("daysInWeek", ctx_r758.daysInWeek);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (allDayEvent_r759.event == null ? null : allDayEvent_r759.event.resizable == null ? null : allDayEvent_r759.event.resizable.afterEnd) && !allDayEvent_r759.endsAfterWeek);
      }
    }

    function CalendarWeekViewComponent_div_2_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_div_5_div_2_Template, 5, 41, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var eventRow_r756 = ctx.$implicit;

        var ctx_r751 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", eventRow_r756.row)("ngForTrackBy", ctx_r751.trackByWeekAllDayEvent);
      }
    }

    function CalendarWeekViewComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r772 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_div_2_Template_div_dragEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r772);

          var ctx_r771 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r771.dragEnter("allDay");
        })("dragLeave", function CalendarWeekViewComponent_div_2_Template_div_dragLeave_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r772);

          var ctx_r773 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r773.dragLeave("allDay");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_2_div_4_Template, 1, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CalendarWeekViewComponent_div_2_div_5_Template, 3, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r745 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r745.allDayEventsLabelTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r745.days)("ngForTrackBy", ctx_r745.trackByWeekDayHeaderDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r745.view.allDayEventRows)("ngForTrackBy", ctx_r745.trackById);
      }
    }

    function CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mwl-calendar-week-view-hour-segment", 28);
      }

      if (rf & 2) {
        var segment_r778 = ctx.$implicit;

        var ctx_r777 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r777.hourSegmentHeight, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("segment", segment_r778)("segmentHeight", ctx_r777.hourSegmentHeight)("locale", ctx_r777.locale)("customTemplate", ctx_r777.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r777.daysInWeek);
      }
    }

    function CalendarWeekViewComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template, 1, 8, "mwl-calendar-week-view-hour-segment", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hour_r775 = ctx.$implicit;
        var odd_r776 = ctx.odd;

        var ctx_r774 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-odd", odd_r776);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", hour_r775.segments)("ngForTrackBy", ctx_r774.trackByHourSegment);
      }
    }

    function CalendarWeekViewComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_4_div_1_Template, 2, 4, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r746 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r746.view.hourColumns[0].hours)("ngForTrackBy", ctx_r746.trackByHour);
      }
    }

    var _c20 = function _c20() {
      return {
        left: true,
        top: true
      };
    };

    function CalendarWeekViewComponent_div_7_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c20));
      }
    }

    var _c21 = function _c21() {
      return {
        right: true,
        bottom: true
      };
    };

    function CalendarWeekViewComponent_div_7_div_3_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 23);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c21));
      }
    }

    var _c22 = function _c22(a0, a1, a2, a3) {
      return {
        left: a0,
        right: a1,
        top: a2,
        bottom: a3
      };
    };

    function CalendarWeekViewComponent_div_7_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r787 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeStart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r787);

          var timeEvent_r782 = ctx.$implicit;

          var ctx_r786 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r747 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

          return ctx_r786.timeEventResizeStarted(_r747, timeEvent_r782, $event);
        })("resizing", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizing_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r787);

          var timeEvent_r782 = ctx.$implicit;

          var ctx_r788 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r788.timeEventResizing(timeEvent_r782, $event);
        })("resizeEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r787);

          var timeEvent_r782 = ctx.$implicit;

          var ctx_r789 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r789.timeEventResizeEnded(timeEvent_r782);
        })("dragStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragStart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r787);

          var timeEvent_r782 = ctx.$implicit;

          var _r783 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r790 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r747 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

          return ctx_r790.dragStarted(_r747, _r783, timeEvent_r782);
        })("dragging", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragging_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r787);

          var timeEvent_r782 = ctx.$implicit;

          var ctx_r791 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r791.dragMove(timeEvent_r782, $event);
        })("dragEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r787);

          var timeEvent_r782 = ctx.$implicit;

          var ctx_r792 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r792.dragEnded(timeEvent_r782, $event, ctx_r792.dayColumnWidth, true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_7_div_3_div_2_Template, 1, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mwl-calendar-week-view-event", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_7_div_3_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r787);

          var timeEvent_r782 = ctx.$implicit;

          var ctx_r793 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r793.eventClicked.emit({
            event: timeEvent_r782.event,
            sourceEvent: $event.sourceEvent
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_7_div_3_div_4_Template, 1, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var timeEvent_r782 = ctx.$implicit;

        var column_r779 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r780 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", timeEvent_r782.top, "px")("height", timeEvent_r782.height, "px")("left", timeEvent_r782.left, "%")("width", timeEvent_r782.width, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", timeEvent_r782.event.draggable && ctx_r780.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r782.startsBeforeDay)("cal-ends-within-day", !timeEvent_r782.endsAfterDay);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", timeEvent_r782.event.cssClass)("hidden", timeEvent_r782.height === 0 && timeEvent_r782.width === 0)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](38, _c22, ctx_r780.dayColumnWidth, ctx_r780.dayColumnWidth, ctx_r780.eventSnapSize || ctx_r780.hourSegmentHeight, ctx_r780.eventSnapSize || ctx_r780.hourSegmentHeight))("validateResize", ctx_r780.validateResize)("allowNegativeResizes", true)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](43, _c18, timeEvent_r782.event, ctx_r780.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](46, _c8, timeEvent_r782.event.draggable && ctx_r780.timeEventResizes.size === 0, timeEvent_r782.event.draggable && ctx_r780.timeEventResizes.size === 0))("dragSnapGrid", ctx_r780.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](49, _c8, ctx_r780.dayColumnWidth, ctx_r780.eventSnapSize || ctx_r780.hourSegmentHeight) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](52, _c2))("ghostDragEnabled", !ctx_r780.snapDraggedEvents)("validateDrag", ctx_r780.validateDrag);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (timeEvent_r782.event == null ? null : timeEvent_r782.event.resizable == null ? null : timeEvent_r782.event.resizable.beforeStart) && !timeEvent_r782.startsBeforeDay);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r780.locale)("weekEvent", timeEvent_r782)("tooltipPlacement", ctx_r780.tooltipPlacement)("tooltipTemplate", ctx_r780.tooltipTemplate)("tooltipAppendToBody", ctx_r780.tooltipAppendToBody)("tooltipDisabled", ctx_r780.dragActive || ctx_r780.timeEventResizes.size > 0)("tooltipDelay", ctx_r780.tooltipDelay)("customTemplate", ctx_r780.eventTemplate)("eventTitleTemplate", ctx_r780.eventTitleTemplate)("eventActionsTemplate", ctx_r780.eventActionsTemplate)("column", column_r779)("daysInWeek", ctx_r780.daysInWeek);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (timeEvent_r782.event == null ? null : timeEvent_r782.event.resizable == null ? null : timeEvent_r782.event.resizable.afterEnd) && !timeEvent_r782.endsAfterDay);
      }
    }

    function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r800 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r800);

          var segment_r798 = ctx.$implicit;

          var ctx_r799 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r799.hourSegmentClicked.emit({
            date: segment_r798.date,
            sourceEvent: $event
          });
        })("drop", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r800);

          var segment_r798 = ctx.$implicit;

          var ctx_r801 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r801.eventDropped($event, segment_r798.date, false);
        })("dragEnter", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r800);

          var segment_r798 = ctx.$implicit;

          var ctx_r802 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r802.dateDragEnter(segment_r798.date);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var segment_r798 = ctx.$implicit;

        var ctx_r797 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r797.hourSegmentHeight, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("segment", segment_r798)("segmentHeight", ctx_r797.hourSegmentHeight)("locale", ctx_r797.locale)("customTemplate", ctx_r797.hourSegmentTemplate)("daysInWeek", ctx_r797.daysInWeek)("clickListenerDisabled", ctx_r797.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r797.dragActive || !ctx_r797.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r797.daysInWeek === 1);
      }
    }

    function CalendarWeekViewComponent_div_7_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template, 1, 10, "mwl-calendar-week-view-hour-segment", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hour_r795 = ctx.$implicit;
        var odd_r796 = ctx.odd;

        var ctx_r781 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-odd", odd_r796);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", hour_r795.segments)("ngForTrackBy", ctx_r781.trackByHourSegment);
      }
    }

    function CalendarWeekViewComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mwl-calendar-week-view-current-time-marker", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_7_div_3_Template, 5, 53, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_7_div_4_Template, 2, 4, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r779 = ctx.$implicit;

        var ctx_r748 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDate", column_r779.date)("dayStartHour", ctx_r748.dayStartHour)("dayStartMinute", ctx_r748.dayStartMinute)("dayEndHour", ctx_r748.dayEndHour)("dayEndMinute", ctx_r748.dayEndMinute)("hourSegments", ctx_r748.hourSegments)("hourSegmentHeight", ctx_r748.hourSegmentHeight)("customTemplate", ctx_r748.currentTimeMarkerTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r779.events)("ngForTrackBy", ctx_r748.trackByWeekTimeEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r779.hours)("ngForTrackBy", ctx_r748.trackByHour);
      }
    }

    function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r815 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r815);

          var day_r813 = ctx.$implicit;

          var dayHeaderClicked_r808 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().dayHeaderClicked;

          return dayHeaderClicked_r808.emit({
            day: day_r813,
            sourceEvent: $event
          });
        })("drop", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_drop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r815);

          var day_r813 = ctx.$implicit;

          var eventDropped_r809 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().eventDropped;

          return eventDropped_r809.emit({
            event: $event.dropData.event,
            newStart: day_r813.date
          });
        })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_dragEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r815);

          var day_r813 = ctx.$implicit;

          var dragEnter_r811 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().dragEnter;

          return dragEnter_r811.emit({
            date: day_r813.date
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r813 = ctx.$implicit;

        var locale_r807 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().locale;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-past", day_r813.isPast)("cal-today", day_r813.isToday)("cal-future", day_r813.isFuture)("cal-weekend", day_r813.isWeekend);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", day_r813.cssClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 11, day_r813.date, "weekViewColumnHeader", locale_r807));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 15, day_r813.date, "weekViewColumnSubHeader", locale_r807));
      }
    }

    function CalendarWeekViewHeaderComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template, 8, 19, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var days_r806 = ctx.days;
        var trackByWeekDayHeaderDate_r810 = ctx.trackByWeekDayHeaderDate;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", days_r806)("ngForTrackBy", trackByWeekDayHeaderDate_r810);
      }
    }

    function CalendarWeekViewHeaderComponent_ng_template_2_Template(rf, ctx) {}

    var _c23 = function _c23(a0, a1, a2, a3, a4, a5) {
      return {
        days: a0,
        locale: a1,
        dayHeaderClicked: a2,
        eventDropped: a3,
        dragEnter: a4,
        trackByWeekDayHeaderDate: a5
      };
    };

    var _c24 = function _c24(a0, a1) {
      return {
        backgroundColor: a0,
        borderColor: a1
      };
    };

    function CalendarWeekViewEventComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r835 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r835);

          var eventClicked_r827 = ctx.eventClicked;
          return eventClicked_r827.emit({
            sourceEvent: $event
          });
        })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlKeydownEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r835);

          var eventClicked_r827 = ctx.eventClicked;
          return eventClicked_r827.emit({
            sourceEvent: $event
          });
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarEventTitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mwl-calendar-event-actions", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mwl-calendar-event-title", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var weekEvent_r825 = ctx.weekEvent;
        var tooltipPlacement_r826 = ctx.tooltipPlacement;
        var tooltipTemplate_r828 = ctx.tooltipTemplate;
        var tooltipAppendToBody_r829 = ctx.tooltipAppendToBody;
        var tooltipDisabled_r830 = ctx.tooltipDisabled;
        var tooltipDelay_r831 = ctx.tooltipDelay;
        var daysInWeek_r833 = ctx.daysInWeek;

        var ctx_r823 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](20, _c24, weekEvent_r825.event.color == null ? null : weekEvent_r825.event.color.secondary, weekEvent_r825.event.color == null ? null : weekEvent_r825.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r830 ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 13, weekEvent_r825.event.title, daysInWeek_r833 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r825.event) : "")("tooltipPlacement", tooltipPlacement_r826)("tooltipEvent", weekEvent_r825.event)("tooltipTemplate", tooltipTemplate_r828)("tooltipAppendToBody", tooltipAppendToBody_r829)("tooltipDelay", tooltipDelay_r831);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](23, _c12, weekEvent_r825.event, ctx_r823.locale), "eventDescription"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", weekEvent_r825.event)("customTemplate", ctx_r823.eventActionsTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", weekEvent_r825.event)("customTemplate", ctx_r823.eventTitleTemplate)("view", daysInWeek_r833 === 1 ? "day" : "week");
      }
    }

    function CalendarWeekViewEventComponent_ng_template_2_Template(rf, ctx) {}

    var _c25 = function _c25(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
      return {
        weekEvent: a0,
        tooltipPlacement: a1,
        eventClicked: a2,
        tooltipTemplate: a3,
        tooltipAppendToBody: a4,
        tooltipDisabled: a5,
        tooltipDelay: a6,
        column: a7,
        daysInWeek: a8
      };
    };

    function CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r846 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var segment_r840 = ctx_r846.segment;
        var daysInWeek_r844 = ctx_r846.daysInWeek;
        var locale_r841 = ctx_r846.locale;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, segment_r840.displayDate, daysInWeek_r844 === 1 ? "dayViewHour" : "weekViewHour", locale_r841), " ");
      }
    }

    function CalendarWeekViewHourSegmentComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "calendarA11y");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template, 3, 5, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var segment_r840 = ctx.segment;
        var segmentHeight_r842 = ctx.segmentHeight;
        var isTimeLabel_r843 = ctx.isTimeLabel;
        var daysInWeek_r844 = ctx.daysInWeek;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", segmentHeight_r842, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-start", segment_r840.isStart)("cal-after-hour-start", !segment_r840.isStart);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", segment_r840.cssClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c2), daysInWeek_r844 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isTimeLabel_r843);
      }
    }

    function CalendarWeekViewHourSegmentComponent_ng_template_2_Template(rf, ctx) {}

    var _c26 = function _c26(a0, a1, a2, a3, a4) {
      return {
        segment: a0,
        locale: a1,
        segmentHeight: a2,
        isTimeLabel: a3,
        daysInWeek: a4
      };
    };

    function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 3);
      }

      if (rf & 2) {
        var topPx_r856 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().topPx;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", topPx_r856, "px");
      }
    }

    function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template, 1, 2, "div", 2);
      }

      if (rf & 2) {
        var isVisible_r855 = ctx.isVisible;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isVisible_r855);
      }
    }

    function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template(rf, ctx) {}

    var _c27 = function _c27(a0, a1, a2, a3, a4, a5, a6) {
      return {
        columnDate: a0,
        dayStartHour: a1,
        dayStartMinute: a2,
        dayEndHour: a3,
        dayEndMinute: a4,
        isVisible: a5,
        topPx: a6
      };
    };

    var CalendarEventActionsComponent = function CalendarEventActionsComponent() {
      _classCallCheck(this, CalendarEventActionsComponent);

      this.trackByActionId = function (index, action) {
        return action.id ? action.id : action;
      };
    };

    CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(t) {
      return new (t || CalendarEventActionsComponent)();
    };

    CalendarEventActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarEventActionsComponent,
      selectors: [["mwl-calendar-event-actions"]],
      inputs: {
        event: "event",
        customTemplate: "customTemplate"
      },
      decls: 3,
      vars: 5,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter"]],
      template: function CalendarEventActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarEventActionsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarEventActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r648 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r648)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.trackByActionId));
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], ClickDirective, KeydownEnterDirective];
      },
      pipes: function pipes() {
        return [CalendarA11yPipe];
      },
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarEventActionsComponent.prototype, "event", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarEventActionsComponent.prototype, "customTemplate", void 0);

    var CalendarEventTitleComponent = function CalendarEventTitleComponent() {
      _classCallCheck(this, CalendarEventTitleComponent);
    };

    CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(t) {
      return new (t || CalendarEventTitleComponent)();
    };

    CalendarEventTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarEventTitleComponent,
      selectors: [["mwl-calendar-event-title"]],
      inputs: {
        event: "event",
        customTemplate: "customTemplate",
        view: "view"
      },
      decls: 3,
      vars: 5,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]],
      template: function CalendarEventTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarEventTitleComponent_ng_template_0_Template, 3, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarEventTitleComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r662 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r662)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c3, ctx.event, ctx.view));
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]];
      },
      pipes: function pipes() {
        return [CalendarEventTitlePipe, CalendarA11yPipe];
      },
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarEventTitleComponent.prototype, "event", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarEventTitleComponent.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarEventTitleComponent.prototype, "view", void 0);

    var CalendarTooltipWindowComponent = function CalendarTooltipWindowComponent() {
      _classCallCheck(this, CalendarTooltipWindowComponent);
    };

    CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(t) {
      return new (t || CalendarTooltipWindowComponent)();
    };

    CalendarTooltipWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarTooltipWindowComponent,
      selectors: [["mwl-calendar-tooltip-window"]],
      inputs: {
        contents: "contents",
        placement: "placement",
        event: "event",
        customTemplate: "customTemplate"
      },
      decls: 3,
      vars: 6,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]],
      template: function CalendarTooltipWindowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarTooltipWindowComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarTooltipWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r667 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r667)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c4, ctx.contents, ctx.placement, ctx.event));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarTooltipWindowComponent.prototype, "contents", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarTooltipWindowComponent.prototype, "placement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarTooltipWindowComponent.prototype, "event", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarTooltipWindowComponent.prototype, "customTemplate", void 0);

    var CalendarTooltipDirective =
    /*#__PURE__*/
    function () {
      function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
      ) {
        _classCallCheck(this, CalendarTooltipDirective);

        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this.placement = 'auto'; // tslint:disable-line no-input-rename

        this.delay = null; // tslint:disable-line no-input-rename

        this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
      }

      _createClass(CalendarTooltipDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.tooltipRef && (changes.contents || changes.customTemplate || changes.event)) {
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            this.tooltipRef.changeDetectorRef.markForCheck();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.hide();
        }
      }, {
        key: "onMouseOver",
        value: function onMouseOver() {
          var _this4 = this;

          var delay$ = this.delay === null ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('now') : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.delay);
          delay$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.cancelTooltipDelay$)).subscribe(function () {
            _this4.show();
          });
        }
      }, {
        key: "onMouseOut",
        value: function onMouseOut() {
          this.hide();
        }
      }, {
        key: "show",
        value: function show() {
          var _this5 = this;

          if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;

            if (this.appendToBody) {
              this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }

            requestAnimationFrame(function () {
              _this5.positionTooltip();
            });
          }
        }
      }, {
        key: "hide",
        value: function hide() {
          if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
          }

          this.cancelTooltipDelay$.next();
        }
      }, {
        key: "positionTooltip",
        value: function positionTooltip() {
          var previousPositions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = Object(positioning__WEBPACK_IMPORTED_MODULE_3__["positionElements"])(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody); // keep re-positioning the tooltip until the arrow position doesn't make a difference

            if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
              this.positionTooltip([].concat(_toConsumableArray(previousPositions), [this.tooltipRef.instance.placement]));
            }
          }
        }
      }]);

      return CalendarTooltipDirective;
    }();

    CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(t) {
      return new (t || CalendarTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
    };

    CalendarTooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CalendarTooltipDirective,
      selectors: [["", "mwlCalendarTooltip", ""]],
      hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler($event) {
            return ctx.onMouseOver();
          })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler($event) {
            return ctx.onMouseOut();
          });
        }
      },
      inputs: {
        placement: ["tooltipPlacement", "placement"],
        delay: ["tooltipDelay", "delay"],
        contents: ["mwlCalendarTooltip", "contents"],
        customTemplate: ["tooltipTemplate", "customTemplate"],
        event: ["tooltipEvent", "event"],
        appendToBody: ["tooltipAppendToBody", "appendToBody"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });

    CalendarTooltipDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mwlCalendarTooltip'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarTooltipDirective.prototype, "contents", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipPlacement'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarTooltipDirective.prototype, "placement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipTemplate'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarTooltipDirective.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipEvent'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarTooltipDirective.prototype, "event", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipAppendToBody'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarTooltipDirective.prototype, "appendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipDelay'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarTooltipDirective.prototype, "delay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarTooltipDirective.prototype, "onMouseOver", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarTooltipDirective.prototype, "onMouseOut", null);
    CalendarTooltipDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], Object])], CalendarTooltipDirective);

    var DateAdapter = function DateAdapter() {
      _classCallCheck(this, DateAdapter);
    };

    var CalendarView;

    (function (CalendarView) {
      CalendarView["Month"] = "month";
      CalendarView["Week"] = "week";
      CalendarView["Day"] = "day";
    })(CalendarView || (CalendarView = {}));

    var validateEvents = function validateEvents(events) {
      var warn = function warn() {
        var _console;

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return (_console = console).warn.apply(_console, ['angular-calendar'].concat(args));
      };

      return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["validateEvents"])(events, warn);
    };

    function isInside(outer, inner) {
      return Math.floor(outer.left) <= Math.ceil(inner.left) && Math.floor(inner.left) <= Math.ceil(outer.right) && Math.floor(outer.left) <= Math.ceil(inner.right) && Math.floor(inner.right) <= Math.ceil(outer.right) && Math.floor(outer.top) <= Math.ceil(inner.top) && Math.floor(inner.top) <= Math.ceil(outer.bottom) && Math.floor(outer.top) <= Math.ceil(inner.bottom) && Math.floor(inner.bottom) <= Math.ceil(outer.bottom);
    }

    function roundToNearest(amount, precision) {
      return Math.round(amount / precision) * precision;
    }

    var trackByEventId = function trackByEventId(index, event) {
      return event.id ? event.id : event;
    };

    var trackByWeekDayHeaderDate = function trackByWeekDayHeaderDate(index, day) {
      return day.date.toISOString();
    };

    var trackByHourSegment = function trackByHourSegment(index, segment) {
      return segment.date.toISOString();
    };

    var trackByHour = function trackByHour(index, hour) {
      return hour.segments[0].date.toISOString();
    };

    var trackByWeekAllDayEvent = function trackByWeekAllDayEvent(index, weekEvent) {
      return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
    };

    var trackByWeekTimeEvent = function trackByWeekTimeEvent(index, weekEvent) {
      return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
    };

    var MINUTES_IN_HOUR = 60;

    function getPixelAmountInMinutes(hourSegments, hourSegmentHeight) {
      return MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
    }

    function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
      var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
      var pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight);
      return draggedInPixelsSnapSize * pixelAmountInMinutes;
    }

    function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
      return getPixelAmountInMinutes(hourSegments, hourSegmentHeight) * hourSegmentHeight;
    }

    function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
      if (event.end) {
        return event.end;
      } else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
      }
    }

    function addDaysWithExclusions(dateAdapter, date, days, excluded) {
      var daysCounter = 0;
      var daysToAdd = 0;
      var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
      var result = date;

      while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        var day = dateAdapter.getDay(result);

        if (excluded.indexOf(day) === -1) {
          daysToAdd++;
        }

        daysCounter++;
      }

      return result;
    }

    function isDraggedWithinPeriod(newStart, newEnd, period) {
      var end = newEnd || newStart;
      return period.start <= newStart && newStart <= period.end || period.start <= end && end <= period.end;
    }

    function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
      return dropEvent.dropData && dropEvent.dropData.event && (dropEvent.dropData.calendarId !== calendarId || dropEvent.dropData.event.allDay && !allDay || !dropEvent.dropData.event.allDay && allDay);
    }

    function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn) {
      var excluded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var daysInWeek = arguments.length > 4 ? arguments[4] : undefined;
      var viewStart = daysInWeek ? dateAdapter.startOfDay(viewDate) : dateAdapter.startOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      });
      var endOfWeek = dateAdapter.endOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      });

      while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 && viewStart < endOfWeek) {
        viewStart = dateAdapter.addDays(viewStart, 1);
      }

      if (daysInWeek) {
        var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return {
          viewStart: viewStart,
          viewEnd: viewEnd
        };
      } else {
        var _viewEnd = endOfWeek;

        while (excluded.indexOf(dateAdapter.getDay(_viewEnd)) > -1 && _viewEnd > viewStart) {
          _viewEnd = dateAdapter.subDays(_viewEnd, 1);
        }

        return {
          viewStart: viewStart,
          viewEnd: _viewEnd
        };
      }
    }

    function isWithinThreshold(_ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      var DRAG_THRESHOLD = 1;
      return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
    }
    /**
     * Change the view date to the previous view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarPreviousView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Previous
     * </button>
     * ```
     */


    var CalendarPreviousViewDirective =
    /*#__PURE__*/
    function () {
      function CalendarPreviousViewDirective(dateAdapter) {
        _classCallCheck(this, CalendarPreviousViewDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */

        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @hidden
       */


      _createClass(CalendarPreviousViewDirective, [{
        key: "onClick",
        value: function onClick() {
          var subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths
          }[this.view];

          if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
          } else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
          } else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
          }
        }
      }]);

      return CalendarPreviousViewDirective;
    }();

    CalendarPreviousViewDirective.ɵfac = function CalendarPreviousViewDirective_Factory(t) {
      return new (t || CalendarPreviousViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateAdapter));
    };

    CalendarPreviousViewDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CalendarPreviousViewDirective,
      selectors: [["", "mwlCalendarPreviousView", ""]],
      hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarPreviousViewDirective_click_HostBindingHandler($event) {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        excludeDays: "excludeDays",
        view: "view",
        viewDate: "viewDate",
        daysInWeek: "daysInWeek"
      },
      outputs: {
        viewDateChange: "viewDateChange"
      }
    });

    CalendarPreviousViewDirective.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarPreviousViewDirective.prototype, "view", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarPreviousViewDirective.prototype, "viewDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarPreviousViewDirective.prototype, "excludeDays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarPreviousViewDirective.prototype, "daysInWeek", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarPreviousViewDirective.prototype, "onClick", null);
    CalendarPreviousViewDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarPreviousViewDirective);
    /**
     * Change the view date to the next view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarNextView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Next
     * </button>
     * ```
     */

    var CalendarNextViewDirective =
    /*#__PURE__*/
    function () {
      function CalendarNextViewDirective(dateAdapter) {
        _classCallCheck(this, CalendarNextViewDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going forward by 1 day
         */

        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @hidden
       */


      _createClass(CalendarNextViewDirective, [{
        key: "onClick",
        value: function onClick() {
          var addFn = {
            day: this.dateAdapter.addDays,
            week: this.dateAdapter.addWeeks,
            month: this.dateAdapter.addMonths
          }[this.view];

          if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
          } else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
          } else {
            this.viewDateChange.emit(addFn(this.viewDate, 1));
          }
        }
      }]);

      return CalendarNextViewDirective;
    }();

    CalendarNextViewDirective.ɵfac = function CalendarNextViewDirective_Factory(t) {
      return new (t || CalendarNextViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateAdapter));
    };

    CalendarNextViewDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CalendarNextViewDirective,
      selectors: [["", "mwlCalendarNextView", ""]],
      hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarNextViewDirective_click_HostBindingHandler($event) {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        excludeDays: "excludeDays",
        view: "view",
        viewDate: "viewDate",
        daysInWeek: "daysInWeek"
      },
      outputs: {
        viewDateChange: "viewDateChange"
      }
    });

    CalendarNextViewDirective.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarNextViewDirective.prototype, "view", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarNextViewDirective.prototype, "viewDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarNextViewDirective.prototype, "excludeDays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarNextViewDirective.prototype, "daysInWeek", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarNextViewDirective.prototype, "viewDateChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarNextViewDirective.prototype, "onClick", null);
    CalendarNextViewDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarNextViewDirective);
    /**
     * Change the view date to the current day. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarToday
     *  [(viewDate)]="viewDate">
     *  Today
     * </button>
     * ```
     */

    var CalendarTodayDirective =
    /*#__PURE__*/
    function () {
      function CalendarTodayDirective(dateAdapter) {
        _classCallCheck(this, CalendarTodayDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @hidden
       */


      _createClass(CalendarTodayDirective, [{
        key: "onClick",
        value: function onClick() {
          this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
        }
      }]);

      return CalendarTodayDirective;
    }();

    CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) {
      return new (t || CalendarTodayDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateAdapter));
    };

    CalendarTodayDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CalendarTodayDirective,
      selectors: [["", "mwlCalendarToday", ""]],
      hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarTodayDirective_click_HostBindingHandler($event) {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        viewDate: "viewDate"
      },
      outputs: {
        viewDateChange: "viewDateChange"
      }
    });

    CalendarTodayDirective.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarTodayDirective.prototype, "viewDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarTodayDirective.prototype, "viewDateChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarTodayDirective.prototype, "onClick", null);
    CalendarTodayDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarTodayDirective);
    /**
     * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
     */

    var CalendarAngularDateFormatter =
    /*#__PURE__*/
    function () {
      function CalendarAngularDateFormatter(dateAdapter) {
        _classCallCheck(this, CalendarAngularDateFormatter);

        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       */


      _createClass(CalendarAngularDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref3) {
          var date = _ref3.date,
              locale = _ref3.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE', locale);
        }
        /**
         * The month view cell day number
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref4) {
          var date = _ref4.date,
              locale = _ref4.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'd', locale);
        }
        /**
         * The month view title
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref5) {
          var date = _ref5.date,
              locale = _ref5.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'LLLL y', locale);
        }
        /**
         * The week view header week day labels
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref6) {
          var date = _ref6.date,
              locale = _ref6.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE', locale);
        }
        /**
         * The week view sub header day and month labels
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref7) {
          var date = _ref7.date,
              locale = _ref7.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'MMM d', locale);
        }
        /**
         * The week view title
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref8) {
          var date = _ref8.date,
              locale = _ref8.locale,
              weekStartsOn = _ref8.weekStartsOn,
              excludeDays = _ref8.excludeDays,
              daysInWeek = _ref8.daysInWeek;

          var _getWeekViewPeriod = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _getWeekViewPeriod.viewStart,
              viewEnd = _getWeekViewPeriod.viewEnd;

          var format = function format(dateToFormat, showYear) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref9) {
          var date = _ref9.date,
              locale = _ref9.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'h a', locale);
        }
        /**
         * The time formatting down the left hand side of the day view
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref10) {
          var date = _ref10.date,
              locale = _ref10.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'h a', locale);
        }
        /**
         * The day view title
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref11) {
          var date = _ref11.date,
              locale = _ref11.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE, MMMM d, y', locale);
        }
      }]);

      return CalendarAngularDateFormatter;
    }();

    CalendarAngularDateFormatter.ɵfac = function CalendarAngularDateFormatter_Factory(t) {
      return new (t || CalendarAngularDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DateAdapter));
    };

    CalendarAngularDateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarAngularDateFormatter,
      factory: CalendarAngularDateFormatter.ɵfac
    });

    CalendarAngularDateFormatter.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    CalendarAngularDateFormatter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarAngularDateFormatter);
    /**
     * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
     *
     * If you wish, you may override any of the defaults via angulars DI. For example:
     *
     * ```typescript
     * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
     * import { formatDate } from '@angular/common';
     * import { Injectable } from '@angular/core';
     *
     * @Injectable()
     * class CustomDateFormatter extends CalendarDateFormatter {
     *
     *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
     *     return formatDate(date, 'EEE', locale); // use short week days
     *   }
     *
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *   provide: CalendarDateFormatter,
     *   useClass: CustomDateFormatter
     * }]
     * ```
     */

    var CalendarDateFormatter =
    /*#__PURE__*/
    function (_CalendarAngularDateF) {
      _inherits(CalendarDateFormatter, _CalendarAngularDateF);

      function CalendarDateFormatter() {
        _classCallCheck(this, CalendarDateFormatter);

        return _possibleConstructorReturn(this, _getPrototypeOf(CalendarDateFormatter).apply(this, arguments));
      }

      return CalendarDateFormatter;
    }(CalendarAngularDateFormatter);

    CalendarDateFormatter.ɵfac = function CalendarDateFormatter_Factory(t) {
      return ɵCalendarDateFormatter_BaseFactory(t || CalendarDateFormatter);
    };

    CalendarDateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarDateFormatter,
      factory: CalendarDateFormatter.ɵfac
    });
    /**
     * This pipe is primarily for rendering the current view title. Example usage:
     * ```typescript
     * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
     * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
     * ```
     */

    var CalendarDatePipe =
    /*#__PURE__*/
    function () {
      function CalendarDatePipe(dateFormatter, locale) {
        _classCallCheck(this, CalendarDatePipe);

        this.dateFormatter = dateFormatter;
        this.locale = locale;
      }

      _createClass(CalendarDatePipe, [{
        key: "transform",
        value: function transform(date, method) {
          var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
          var weekStartsOn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var excludeDays = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          var daysInWeek = arguments.length > 5 ? arguments[5] : undefined;

          if (typeof this.dateFormatter[method] === 'undefined') {
            var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(function (iMethod) {
              return iMethod !== 'constructor';
            });
            throw new Error("".concat(method, " is not a valid date formatter. Can only be one of ").concat(allowedMethods.join(', ')));
          }

          return this.dateFormatter[method]({
            date: date,
            locale: locale,
            weekStartsOn: weekStartsOn,
            excludeDays: excludeDays,
            daysInWeek: daysInWeek
          });
        }
      }]);

      return CalendarDatePipe;
    }();

    CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) {
      return new (t || CalendarDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CalendarDateFormatter), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]));
    };

    CalendarDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "calendarDate",
      type: CalendarDatePipe,
      pure: true
    });

    CalendarDatePipe.ctorParameters = function () {
      return [{
        type: CalendarDateFormatter
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }];
    };

    CalendarDatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CalendarDateFormatter, String])], CalendarDatePipe);
    /**
     * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
     *
     * ```typescript
     * import { Injectable } from '@angular/core';
     * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
     *
     * @Injectable()
     * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
     *
     *   month(event: CalendarEvent): string {
     *     return `Custom prefix: ${event.title}`;
     *   }
     *
     * }
     *
     * // in your component
     * providers: [{
     *  provide: CalendarEventTitleFormatter,
     *  useClass: CustomEventTitleFormatter
     * }]
     * ```
     */

    var CalendarEventTitleFormatter =
    /*#__PURE__*/
    function () {
      function CalendarEventTitleFormatter() {
        _classCallCheck(this, CalendarEventTitleFormatter);
      }

      _createClass(CalendarEventTitleFormatter, [{
        key: "month",

        /**
         * The month view event title.
         */
        value: function month(event, title) {
          return event.title;
        }
        /**
         * The month view event tooltip. Return a falsey value from this to disable the tooltip.
         */

      }, {
        key: "monthTooltip",
        value: function monthTooltip(event, title) {
          return event.title;
        }
        /**
         * The week view event title.
         */

      }, {
        key: "week",
        value: function week(event, title) {
          return event.title;
        }
        /**
         * The week view event tooltip. Return a falsey value from this to disable the tooltip.
         */

      }, {
        key: "weekTooltip",
        value: function weekTooltip(event, title) {
          return event.title;
        }
        /**
         * The day view event title.
         */

      }, {
        key: "day",
        value: function day(event, title) {
          return event.title;
        }
        /**
         * The day view event tooltip. Return a falsey value from this to disable the tooltip.
         */

      }, {
        key: "dayTooltip",
        value: function dayTooltip(event, title) {
          return event.title;
        }
      }]);

      return CalendarEventTitleFormatter;
    }();

    var CalendarEventTitlePipe =
    /*#__PURE__*/
    function () {
      function CalendarEventTitlePipe(calendarEventTitle) {
        _classCallCheck(this, CalendarEventTitlePipe);

        this.calendarEventTitle = calendarEventTitle;
      }

      _createClass(CalendarEventTitlePipe, [{
        key: "transform",
        value: function transform(title, titleType, event) {
          return this.calendarEventTitle[titleType](event, title);
        }
      }]);

      return CalendarEventTitlePipe;
    }();

    CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) {
      return new (t || CalendarEventTitlePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CalendarEventTitleFormatter));
    };

    CalendarEventTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "calendarEventTitle",
      type: CalendarEventTitlePipe,
      pure: true
    });

    CalendarEventTitlePipe.ctorParameters = function () {
      return [{
        type: CalendarEventTitleFormatter
      }];
    };

    CalendarEventTitlePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CalendarEventTitleFormatter])], CalendarEventTitlePipe);

    var ClickDirective =
    /*#__PURE__*/
    function () {
      function ClickDirective(renderer, elm, document) {
        _classCallCheck(this, ClickDirective);

        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.clickListenerDisabled = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line

        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(ClickDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          if (!this.clickListenerDisabled) {
            this.listen().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (event) {
              event.stopPropagation();

              _this6.click.emit(event);
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
        }
      }, {
        key: "listen",
        value: function listen() {
          var _this7 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            return _this7.renderer.listen(_this7.elm.nativeElement, 'click', function (event) {
              observer.next(event);
            });
          });
        }
      }]);

      return ClickDirective;
    }();

    ClickDirective.ɵfac = function ClickDirective_Factory(t) {
      return new (t || ClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
    };

    ClickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: ClickDirective,
      selectors: [["", "mwlClick", ""]],
      inputs: {
        clickListenerDisabled: "clickListenerDisabled"
      },
      outputs: {
        click: "mwlClick"
      }
    });

    ClickDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ClickDirective.prototype, "clickListenerDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('mwlClick'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ClickDirective.prototype, "click", void 0);
    ClickDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])], ClickDirective);

    var KeydownEnterDirective =
    /*#__PURE__*/
    function () {
      function KeydownEnterDirective() {
        _classCallCheck(this, KeydownEnterDirective);

        this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
      }

      _createClass(KeydownEnterDirective, [{
        key: "onKeyPress",
        value: function onKeyPress(event) {
          if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.keydown.emit(event);
          }
        }
      }]);

      return KeydownEnterDirective;
    }();

    KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) {
      return new (t || KeydownEnterDirective)();
    };

    KeydownEnterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: KeydownEnterDirective,
      selectors: [["", "mwlKeydownEnter", ""]],
      hostBindings: function KeydownEnterDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function KeydownEnterDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeyPress($event);
          });
        }
      },
      outputs: {
        keydown: "mwlKeydownEnter"
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('mwlKeydownEnter'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], KeydownEnterDirective.prototype, "keydown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], KeydownEnterDirective.prototype, "onKeyPress", null);

    var CalendarUtils =
    /*#__PURE__*/
    function () {
      function CalendarUtils(dateAdapter) {
        _classCallCheck(this, CalendarUtils);

        this.dateAdapter = dateAdapter;
      }

      _createClass(CalendarUtils, [{
        key: "getMonthView",
        value: function getMonthView(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getMonthView"])(this.dateAdapter, args);
        }
      }, {
        key: "getWeekViewHeader",
        value: function getWeekViewHeader(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getWeekViewHeader"])(this.dateAdapter, args);
        }
      }, {
        key: "getWeekView",
        value: function getWeekView(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getWeekView"])(this.dateAdapter, args);
        }
      }]);

      return CalendarUtils;
    }();

    CalendarUtils.ɵfac = function CalendarUtils_Factory(t) {
      return new (t || CalendarUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DateAdapter));
    };

    CalendarUtils.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarUtils,
      factory: CalendarUtils.ɵfac
    });

    CalendarUtils.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    CalendarUtils = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarUtils);
    /**
     * This class is responsible for adding accessibility to the calendar.
     * You may override any of its methods via angulars DI to suit your requirements.
     * For example:
     *
     * ```typescript
     * import { A11yParams, CalendarA11y } from 'angular-calendar';
     * import { formatDate, I18nPluralPipe } from '@angular/common';
     * import { Injectable } from '@angular/core';
     *
     * // adding your own a11y params
     * export interface CustomA11yParams extends A11yParams {
     *   isDrSuess?: boolean;
     * }
     *
     * @Injectable()
     * export class CustomCalendarA11y extends CalendarA11y {
     *   constructor(protected i18nPlural: I18nPluralPipe) {
     *     super(i18nPlural);
     *   }
     *
     *   // overriding a function
     *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
     *     if (isDrSuess) {
     *       return `
     *         ${formatDate(date, 'EEEE MMMM d', locale)}
     *          Today you are you! That is truer than true! There is no one alive
     *          who is you-er than you!
     *       `;
     *     }
     *   }
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *  provide: CalendarA11y,
     *  useClass: CustomCalendarA11y
     * }]
     * ```
     */

    var CalendarA11y =
    /*#__PURE__*/
    function () {
      function CalendarA11y(i18nPlural) {
        _classCallCheck(this, CalendarA11y);

        this.i18nPlural = i18nPlural;
      }
      /**
       * Aria label for the badges/date of a cell
       * @example: `Saturday October 19 1 event click to expand`
       */


      _createClass(CalendarA11y, [{
        key: "monthCell",
        value: function monthCell(_ref12) {
          var day = _ref12.day,
              locale = _ref12.locale;

          if (day.badgeTotal > 0) {
            return "\n        ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(day.date, 'EEEE MMMM d', locale), ",\n        ").concat(this.i18nPlural.transform(day.badgeTotal, {
              '=0': 'No events',
              '=1': 'One event',
              other: '# events'
            }), ",\n         click to expand\n      ");
          } else {
            return "".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(day.date, 'EEEE MMMM d', locale));
          }
        }
        /**
         * Aria label for the open day events start landmark
         * @example: `Saturday October 19 expanded view`
         */

      }, {
        key: "openDayEventsLandmark",
        value: function openDayEventsLandmark(_ref13) {
          var date = _ref13.date,
              locale = _ref13.locale;
          return "\n      Beginning of expanded view for ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE MMMM dd', locale), "\n    ");
        }
        /**
         * Aria label for alert that a day in the month view was expanded
         * @example: `Saturday October 19 expanded`
         */

      }, {
        key: "openDayEventsAlert",
        value: function openDayEventsAlert(_ref14) {
          var date = _ref14.date,
              locale = _ref14.locale;
          return "".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE MMMM dd', locale), " expanded");
        }
        /**
         * Descriptive aria label for an event
         * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
         */

      }, {
        key: "eventDescription",
        value: function eventDescription(_ref15) {
          var event = _ref15.event,
              locale = _ref15.locale;

          if (event.allDay === true) {
            return this.allDayEventDescription({
              event: event,
              locale: locale
            });
          }

          var aria = "\n      ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.start, 'EEEE MMMM dd', locale), ",\n      ").concat(event.title, ", from ").concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.start, 'hh:mm a', locale), "\n    ");

          if (event.end) {
            return aria + " to ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.end, 'hh:mm a', locale));
          }

          return aria;
        }
        /**
         * Descriptive aria label for an all day event
         * @example:
         * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
         */

      }, {
        key: "allDayEventDescription",
        value: function allDayEventDescription(_ref16) {
          var event = _ref16.event,
              locale = _ref16.locale;
          var aria = "\n      ".concat(event.title, ", event spans multiple days:\n      start time ").concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.start, 'MMMM dd hh:mm a', locale), "\n    ");

          if (event.end) {
            return aria + ", stop time ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.end, 'MMMM d hh:mm a', locale));
          }

          return aria + ", no stop time";
        }
        /**
         * Aria label for the calendar event actions icons
         * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
         */

      }, {
        key: "actionButtonLabel",
        value: function actionButtonLabel(_ref17) {
          var action = _ref17.action;
          return action.a11yLabel;
        }
        /**
         * @returns {number} Tab index to be given to month cells
         */

      }, {
        key: "monthCellTabIndex",
        value: function monthCellTabIndex() {
          return 0;
        }
        /**
         * @returns true if the events inside the month cell should be aria-hidden
         */

      }, {
        key: "hideMonthCellEvents",
        value: function hideMonthCellEvents() {
          return true;
        }
        /**
         * @returns true if event titles should be aria-hidden (global)
         */

      }, {
        key: "hideEventTitle",
        value: function hideEventTitle() {
          return true;
        }
        /**
         * @returns true if hour segments in the week view should be aria-hidden
         */

      }, {
        key: "hideWeekHourSegment",
        value: function hideWeekHourSegment() {
          return true;
        }
        /**
         * @returns true if hour segments in the day view should be aria-hidden
         */

      }, {
        key: "hideDayHourSegment",
        value: function hideDayHourSegment() {
          return true;
        }
      }]);

      return CalendarA11y;
    }();

    CalendarA11y.ɵfac = function CalendarA11y_Factory(t) {
      return new (t || CalendarA11y)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]));
    };

    CalendarA11y.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarA11y,
      factory: CalendarA11y.ɵfac
    });

    CalendarA11y.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]
      }];
    };

    CalendarA11y = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]])], CalendarA11y);
    /**
     * This pipe is primarily for rendering aria labels. Example usage:
     * ```typescript
     * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
     * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
     * ```
     */

    var CalendarA11yPipe =
    /*#__PURE__*/
    function () {
      function CalendarA11yPipe(calendarA11y, locale) {
        _classCallCheck(this, CalendarA11yPipe);

        this.calendarA11y = calendarA11y;
        this.locale = locale;
      }

      _createClass(CalendarA11yPipe, [{
        key: "transform",
        value: function transform(a11yParams, method) {
          a11yParams.locale = a11yParams.locale || this.locale;

          if (typeof this.calendarA11y[method] === 'undefined') {
            var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter(function (iMethod) {
              return iMethod !== 'constructor';
            });
            throw new Error("".concat(method, " is not a valid a11y method. Can only be one of ").concat(allowedMethods.join(', ')));
          }

          return this.calendarA11y[method](a11yParams);
        }
      }]);

      return CalendarA11yPipe;
    }();

    CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(t) {
      return new (t || CalendarA11yPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CalendarA11y), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]));
    };

    CalendarA11yPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "calendarA11y",
      type: CalendarA11yPipe,
      pure: true
    });

    CalendarA11yPipe.ctorParameters = function () {
      return [{
        type: CalendarA11y
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }];
    };

    CalendarA11yPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CalendarA11y, String])], CalendarA11yPipe);
    var MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('Moment');
    /**
     * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
     *
     * ```typescript
     * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
     * import moment from 'moment';
     *
     * // in your component
     * provide: [{
     *   provide: MOMENT, useValue: moment
     * }, {
     *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
     * }]
     *
     * ```
     */

    var CalendarMomentDateFormatter =
    /*#__PURE__*/
    function () {
      /**
       * @hidden
       */
      function CalendarMomentDateFormatter(moment, dateAdapter) {
        _classCallCheck(this, CalendarMomentDateFormatter);

        this.moment = moment;
        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       */


      _createClass(CalendarMomentDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref18) {
          var date = _ref18.date,
              locale = _ref18.locale;
          return this.moment(date).locale(locale).format('dddd');
        }
        /**
         * The month view cell day number
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref19) {
          var date = _ref19.date,
              locale = _ref19.locale;
          return this.moment(date).locale(locale).format('D');
        }
        /**
         * The month view title
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref20) {
          var date = _ref20.date,
              locale = _ref20.locale;
          return this.moment(date).locale(locale).format('MMMM YYYY');
        }
        /**
         * The week view header week day labels
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref21) {
          var date = _ref21.date,
              locale = _ref21.locale;
          return this.moment(date).locale(locale).format('dddd');
        }
        /**
         * The week view sub header day and month labels
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref22) {
          var date = _ref22.date,
              locale = _ref22.locale;
          return this.moment(date).locale(locale).format('MMM D');
        }
        /**
         * The week view title
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref23) {
          var _this8 = this;

          var date = _ref23.date,
              locale = _ref23.locale,
              weekStartsOn = _ref23.weekStartsOn,
              excludeDays = _ref23.excludeDays,
              daysInWeek = _ref23.daysInWeek;

          var _getWeekViewPeriod2 = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _getWeekViewPeriod2.viewStart,
              viewEnd = _getWeekViewPeriod2.viewEnd;

          var format = function format(dateToFormat, showYear) {
            return _this8.moment(dateToFormat).locale(locale).format('MMM D' + (showYear ? ', YYYY' : ''));
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref24) {
          var date = _ref24.date,
              locale = _ref24.locale;
          return this.moment(date).locale(locale).format('ha');
        }
        /**
         * The time formatting down the left hand side of the day view
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref25) {
          var date = _ref25.date,
              locale = _ref25.locale;
          return this.moment(date).locale(locale).format('ha');
        }
        /**
         * The day view title
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref26) {
          var date = _ref26.date,
              locale = _ref26.locale;
          return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
        }
      }]);

      return CalendarMomentDateFormatter;
    }();

    CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(t) {
      return new (t || CalendarMomentDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MOMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DateAdapter));
    };

    CalendarMomentDateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarMomentDateFormatter,
      factory: CalendarMomentDateFormatter.ɵfac
    });

    CalendarMomentDateFormatter.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MOMENT]
        }]
      }, {
        type: DateAdapter
      }];
    };

    CalendarMomentDateFormatter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(MOMENT)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, DateAdapter])], CalendarMomentDateFormatter);
    /**
     * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
     *
     * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
     */

    var CalendarNativeDateFormatter =
    /*#__PURE__*/
    function () {
      function CalendarNativeDateFormatter(dateAdapter) {
        _classCallCheck(this, CalendarNativeDateFormatter);

        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       */


      _createClass(CalendarNativeDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref27) {
          var date = _ref27.date,
              locale = _ref27.locale;
          return new Intl.DateTimeFormat(locale, {
            weekday: 'long'
          }).format(date);
        }
        /**
         * The month view cell day number
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref28) {
          var date = _ref28.date,
              locale = _ref28.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric'
          }).format(date);
        }
        /**
         * The month view title
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref29) {
          var date = _ref29.date,
              locale = _ref29.locale;
          return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
          }).format(date);
        }
        /**
         * The week view header week day labels
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref30) {
          var date = _ref30.date,
              locale = _ref30.locale;
          return new Intl.DateTimeFormat(locale, {
            weekday: 'long'
          }).format(date);
        }
        /**
         * The week view sub header day and month labels
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref31) {
          var date = _ref31.date,
              locale = _ref31.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
          }).format(date);
        }
        /**
         * The week view title
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref32) {
          var date = _ref32.date,
              locale = _ref32.locale,
              weekStartsOn = _ref32.weekStartsOn,
              excludeDays = _ref32.excludeDays,
              daysInWeek = _ref32.daysInWeek;

          var _getWeekViewPeriod3 = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _getWeekViewPeriod3.viewStart,
              viewEnd = _getWeekViewPeriod3.viewEnd;

          var format = function format(dateToFormat, showYear) {
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric',
              month: 'short',
              year: showYear ? 'numeric' : undefined
            }).format(dateToFormat);
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref33) {
          var date = _ref33.date,
              locale = _ref33.locale;
          return new Intl.DateTimeFormat(locale, {
            hour: 'numeric'
          }).format(date);
        }
        /**
         * The time formatting down the left hand side of the day view
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref34) {
          var date = _ref34.date,
              locale = _ref34.locale;
          return new Intl.DateTimeFormat(locale, {
            hour: 'numeric'
          }).format(date);
        }
        /**
         * The day view title
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref35) {
          var date = _ref35.date,
              locale = _ref35.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
          }).format(date);
        }
      }]);

      return CalendarNativeDateFormatter;
    }();

    CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(t) {
      return new (t || CalendarNativeDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DateAdapter));
    };

    CalendarNativeDateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalendarNativeDateFormatter,
      factory: CalendarNativeDateFormatter.ɵfac
    });

    CalendarNativeDateFormatter.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    CalendarNativeDateFormatter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarNativeDateFormatter);
    var CalendarEventTimesChangedEventType;

    (function (CalendarEventTimesChangedEventType) {
      CalendarEventTimesChangedEventType["Drag"] = "drag";
      CalendarEventTimesChangedEventType["Drop"] = "drop";
      CalendarEventTimesChangedEventType["Resize"] = "resize";
    })(CalendarEventTimesChangedEventType || (CalendarEventTimesChangedEventType = {}));

    var CalendarCommonModule_1;
    /**
     * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
     *
     * ```typescript
     * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
     *
     * @NgModule({
     *   imports: [
     *     CalendarCommonModule.forRoot(),
     *     CalendarMonthModule
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */

    var CalendarCommonModule = CalendarCommonModule_1 =
    /*#__PURE__*/
    function () {
      function CalendarCommonModule() {
        _classCallCheck(this, CalendarCommonModule);
      }

      _createClass(CalendarCommonModule, null, [{
        key: "forRoot",
        value: function forRoot(dateAdapter) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return {
            ngModule: CalendarCommonModule_1,
            providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
          };
        }
      }]);

      return CalendarCommonModule;
    }();

    CalendarCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CalendarCommonModule
    });
    CalendarCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CalendarCommonModule_Factory(t) {
        return new (t || CalendarCommonModule)();
      },
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });
    /**
     * Shows all events on a given month. Example usage:
     *
     * ```typescript
     * <mwl-calendar-month-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-month-view>
     * ```
     */

    var CalendarMonthViewComponent =
    /*#__PURE__*/
    function () {
      /**
       * @hidden
       */
      function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
        var _this9 = this;

        _classCallCheck(this, CalendarMonthViewComponent);

        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */

        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */

        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */

        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */

        this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when a header week day is clicked. Returns ISO day number.
         */

        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @hidden
         */

        this.trackByRowOffset = function (index, offset) {
          return _this9.view.days.slice(offset, _this9.view.totalDaysVisibleInWeek).map(function (day) {
            return day.date.toISOString();
          }).join('-');
        };
        /**
         * @hidden
         */


        this.trackByDate = function (index, day) {
          return day.date.toISOString();
        };

        this.locale = locale;
      }
      /**
       * @hidden
       */


      _createClass(CalendarMonthViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
              _this10.refreshAll();

              _this10.cdr.markForCheck();
            });
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
          var refreshBody = changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays;

          if (refreshHeader) {
            this.refreshHeader();
          }

          if (changes.events) {
            validateEvents(this.events);
          }

          if (refreshBody) {
            this.refreshBody();
          }

          if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
          }

          if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays || changes.activeDay) {
            this.checkActiveDayIsOpen();
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "toggleDayHighlight",
        value: function toggleDayHighlight(event, isHighlighted) {
          this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
              day.backgroundColor = event.color && event.color.secondary || '#D1E8FF';
            } else {
              delete day.backgroundColor;
            }
          });
        }
        /**
         * @hidden
         */

      }, {
        key: "eventDropped",
        value: function eventDropped(droppedOn, event, draggedFrom) {
          if (droppedOn !== draggedFrom) {
            var year = this.dateAdapter.getYear(droppedOn.date);
            var month = this.dateAdapter.getMonth(droppedOn.date);
            var date = this.dateAdapter.getDate(droppedOn.date);
            var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
            var newEnd;

            if (event.end) {
              var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
              newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
            }

            this.eventTimesChanged.emit({
              event: event,
              newStart: newStart,
              newEnd: newEnd,
              day: droppedOn,
              type: CalendarEventTimesChangedEventType.Drop
            });
          }
        }
      }, {
        key: "refreshHeader",
        value: function refreshHeader() {
          this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          });
        }
      }, {
        key: "refreshBody",
        value: function refreshBody() {
          this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          });
        }
      }, {
        key: "checkActiveDayIsOpen",
        value: function checkActiveDayIsOpen() {
          var _this11 = this;

          if (this.activeDayIsOpen === true) {
            var activeDay = this.activeDay || this.viewDate;
            this.openDay = this.view.days.find(function (day) {
              return _this11.dateAdapter.isSameDay(day.date, activeDay);
            });
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
          } else {
            this.openRowIndex = null;
            this.openDay = null;
          }
        }
      }, {
        key: "refreshAll",
        value: function refreshAll() {
          this.refreshHeader();
          this.refreshBody();
          this.emitBeforeViewRender();
          this.checkActiveDayIsOpen();
        }
      }, {
        key: "emitBeforeViewRender",
        value: function emitBeforeViewRender() {
          if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
              header: this.columnHeaders,
              body: this.view.days,
              period: this.view.period
            });
          }
        }
      }]);

      return CalendarMonthViewComponent;
    }();

    CalendarMonthViewComponent.ɵfac = function CalendarMonthViewComponent_Factory(t) {
      return new (t || CalendarMonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateAdapter));
    };

    CalendarMonthViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarMonthViewComponent,
      selectors: [["mwl-calendar-month-view"]],
      inputs: {
        events: "events",
        excludeDays: "excludeDays",
        activeDayIsOpen: "activeDayIsOpen",
        tooltipPlacement: "tooltipPlacement",
        tooltipAppendToBody: "tooltipAppendToBody",
        tooltipDelay: "tooltipDelay",
        locale: "locale",
        viewDate: "viewDate",
        activeDay: "activeDay",
        refresh: "refresh",
        tooltipTemplate: "tooltipTemplate",
        weekStartsOn: "weekStartsOn",
        headerTemplate: "headerTemplate",
        cellTemplate: "cellTemplate",
        openDayEventsTemplate: "openDayEventsTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        weekendDays: "weekendDays"
      },
      outputs: {
        beforeViewRender: "beforeViewRender",
        dayClicked: "dayClicked",
        eventClicked: "eventClicked",
        columnHeaderClicked: "columnHeaderClicked",
        eventTimesChanged: "eventTimesChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
      decls: 4,
      vars: 5,
      consts: [["role", "grid", 1, "cal-month-view"], [3, "days", "locale", "customTemplate", "columnHeaderClicked"], [1, "cal-days"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-cell-row"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "eventClicked", "drop"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked"]],
      template: function CalendarMonthViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mwl-calendar-month-view-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_1_listener($event) {
            return ctx.columnHeaderClicked.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarMonthViewComponent_div_3_Template, 5, 13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.view.rowOffsets)("ngForTrackBy", ctx.trackByRowOffset);
        }
      },
      directives: function directives() {
        return [CalendarMonthViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], CalendarOpenDayEventsComponent, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["ɵa"], CalendarMonthCellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], ClickDirective, KeydownEnterDirective];
      },
      pipes: function pipes() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], CalendarA11yPipe];
      },
      encapsulation: 2
    });

    CalendarMonthViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: CalendarUtils
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }, {
        type: DateAdapter
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarMonthViewComponent.prototype, "viewDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarMonthViewComponent.prototype, "events", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarMonthViewComponent.prototype, "excludeDays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarMonthViewComponent.prototype, "activeDay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"])], CalendarMonthViewComponent.prototype, "refresh", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarMonthViewComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "tooltipTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarMonthViewComponent.prototype, "tooltipAppendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarMonthViewComponent.prototype, "tooltipDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "headerTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "cellTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "openDayEventsTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "eventTitleTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "eventActionsTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarMonthViewComponent.prototype, "weekendDays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "dayClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "eventClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "columnHeaderClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);
    CalendarMonthViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], CalendarUtils, String, DateAdapter])], CalendarMonthViewComponent);

    var CalendarMonthViewHeaderComponent = function CalendarMonthViewHeaderComponent() {
      _classCallCheck(this, CalendarMonthViewHeaderComponent);

      this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    };

    CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) {
      return new (t || CalendarMonthViewHeaderComponent)();
    };

    CalendarMonthViewHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarMonthViewHeaderComponent,
      selectors: [["mwl-calendar-month-view-header"]],
      inputs: {
        days: "days",
        locale: "locale",
        customTemplate: "customTemplate"
      },
      outputs: {
        columnHeaderClicked: "columnHeaderClicked"
      },
      decls: 3,
      vars: 6,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]],
      template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarMonthViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarMonthViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r687 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r687)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c6, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      pipes: [CalendarDatePipe],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarMonthViewHeaderComponent.prototype, "days", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarMonthViewHeaderComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewHeaderComponent.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewHeaderComponent.prototype, "columnHeaderClicked", void 0);

    var CalendarMonthCellComponent = function CalendarMonthCellComponent() {
      _classCallCheck(this, CalendarMonthCellComponent);

      this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.trackByEventId = trackByEventId;
      this.validateDrag = isWithinThreshold;
    };

    CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(t) {
      return new (t || CalendarMonthCellComponent)();
    };

    CalendarMonthCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarMonthCellComponent,
      selectors: [["mwl-calendar-month-cell"]],
      hostAttrs: [1, "cal-cell", "cal-day-cell"],
      hostVars: 18,
      hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
        }
      },
      inputs: {
        day: "day",
        openDay: "openDay",
        locale: "locale",
        tooltipPlacement: "tooltipPlacement",
        tooltipAppendToBody: "tooltipAppendToBody",
        customTemplate: "customTemplate",
        tooltipTemplate: "tooltipTemplate",
        tooltipDelay: "tooltipDelay"
      },
      outputs: {
        highlightDay: "highlightDay",
        unhighlightDay: "unhighlightDay",
        eventClicked: "eventClicked"
      },
      decls: 3,
      vars: 15,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "mouseenter", "mouseleave", "mwlClick"]],
      template: function CalendarMonthCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarMonthCellComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarMonthCellComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r698 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r698)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunctionV"](2, _c10, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], CalendarTooltipDirective, ClickDirective],
      pipes: [CalendarA11yPipe, CalendarDatePipe, CalendarEventTitlePipe],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthCellComponent.prototype, "day", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthCellComponent.prototype, "openDay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarMonthCellComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarMonthCellComponent.prototype, "tooltipAppendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthCellComponent.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthCellComponent.prototype, "tooltipTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarMonthCellComponent.prototype, "tooltipDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarMonthCellComponent.prototype, "highlightDay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthCellComponent.prototype, "eventClicked", void 0);
    var collapseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('collapse', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
      height: 0,
      overflow: 'hidden',
      'padding-top': 0,
      'padding-bottom': 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
      height: '*',
      overflow: 'hidden',
      'padding-top': '*',
      'padding-bottom': '*'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('150ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('150ms ease-in'))]);

    var CalendarOpenDayEventsComponent = function CalendarOpenDayEventsComponent() {
      _classCallCheck(this, CalendarOpenDayEventsComponent);

      this.isOpen = false;
      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.trackByEventId = trackByEventId;
      this.validateDrag = isWithinThreshold;
    };

    CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(t) {
      return new (t || CalendarOpenDayEventsComponent)();
    };

    CalendarOpenDayEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarOpenDayEventsComponent,
      selectors: [["mwl-calendar-open-day-events"]],
      inputs: {
        isOpen: "isOpen",
        locale: "locale",
        events: "events",
        customTemplate: "customTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        date: "date"
      },
      outputs: {
        eventClicked: "eventClicked"
      },
      decls: 3,
      vars: 8,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "event", "customTemplate", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"]],
      template: function CalendarOpenDayEventsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarOpenDayEventsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarOpenDayEventsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r727 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r727)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c14, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], CalendarEventTitleComponent, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent],
      pipes: [CalendarA11yPipe],
      encapsulation: 2,
      data: {
        animation: [collapseAnimation]
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarOpenDayEventsComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarOpenDayEventsComponent.prototype, "events", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarOpenDayEventsComponent.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarOpenDayEventsComponent.prototype, "eventTitleTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarOpenDayEventsComponent.prototype, "eventActionsTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarOpenDayEventsComponent.prototype, "date", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);

    var CalendarMonthModule = function CalendarMonthModule() {
      _classCallCheck(this, CalendarMonthModule);
    };

    CalendarMonthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CalendarMonthModule
    });
    CalendarMonthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CalendarMonthModule_Factory(t) {
        return new (t || CalendarMonthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"]]
    });

    var CalendarDragHelper =
    /*#__PURE__*/
    function () {
      function CalendarDragHelper(dragContainerElement, draggableElement) {
        _classCallCheck(this, CalendarDragHelper);

        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
      }

      _createClass(CalendarDragHelper, [{
        key: "validateDrag",
        value: function validateDrag(_ref36) {
          var x = _ref36.x,
              y = _ref36.y,
              snapDraggedEvents = _ref36.snapDraggedEvents,
              dragAlreadyMoved = _ref36.dragAlreadyMoved,
              transform = _ref36.transform;

          if (snapDraggedEvents) {
            var newRect = Object.assign({}, this.startPosition, {
              left: this.startPosition.left + transform.x,
              right: this.startPosition.right + transform.x,
              top: this.startPosition.top + transform.y,
              bottom: this.startPosition.bottom + transform.y
            });
            return (isWithinThreshold({
              x: x,
              y: y
            }) || dragAlreadyMoved) && isInside(this.dragContainerElement.getBoundingClientRect(), newRect);
          } else {
            return isWithinThreshold({
              x: x,
              y: y
            }) || dragAlreadyMoved;
          }
        }
      }]);

      return CalendarDragHelper;
    }();

    var CalendarResizeHelper =
    /*#__PURE__*/
    function () {
      function CalendarResizeHelper(resizeContainerElement, minWidth) {
        _classCallCheck(this, CalendarResizeHelper);

        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
      }

      _createClass(CalendarResizeHelper, [{
        key: "validateResize",
        value: function validateResize(_ref37) {
          var rectangle = _ref37.rectangle;

          if (this.minWidth && Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
            return false;
          }

          return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
        }
      }]);

      return CalendarResizeHelper;
    }();
    /**
     * Shows all events on a given week. Example usage:
     *
     * ```typescript
     * <mwl-calendar-week-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-week-view>
     * ```
     */


    var CalendarWeekViewComponent =
    /*#__PURE__*/
    function () {
      /**
       * @hidden
       */
      function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
        _classCallCheck(this, CalendarWeekViewComponent);

        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */

        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */

        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */

        this.precision = 'days';
        /**
         * Whether to snap events to a grid when dragging
         */

        this.snapDraggedEvents = true;
        /**
         * The number of segments in an hour. Must be <= 6
         */

        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */

        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */

        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */

        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */

        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */

        this.dayEndMinute = 59;
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */

        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */

        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @hidden
         */

        this.allDayEventResizes = new Map();
        /**
         * @hidden
         */

        this.timeEventResizes = new Map();
        /**
         * @hidden
         */

        this.eventDragEnterByType = {
          allDay: 0,
          time: 0
        };
        /**
         * @hidden
         */

        this.dragActive = false;
        /**
         * @hidden
         */

        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */

        this.calendarId = Symbol('angular calendar week view id');
        /**
         * @hidden
         */

        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        /**
         * @hidden
         */

        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */

        this.trackByHour = trackByHour;
        /**
         * @hidden
         */

        this.trackByWeekAllDayEvent = trackByWeekAllDayEvent;
        /**
         * @hidden
         */

        this.trackByWeekTimeEvent = trackByWeekTimeEvent;
        /**
         * @hidden
         */

        this.trackByHourColumn = function (index, column) {
          return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
        };
        /**
         * @hidden
         */


        this.trackById = function (index, row) {
          return row.id;
        };

        this.locale = locale;
      }
      /**
       * @hidden
       */


      _createClass(CalendarWeekViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
              _this12.refreshAll();

              _this12.cdr.markForCheck();
            });
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays || changes.daysInWeek || changes.weekStartsOn;
          var refreshBody = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments || changes.weekStartsOn || changes.weekendDays || changes.excludeDays || changes.hourSegmentHeight || changes.events || changes.daysInWeek;

          if (refreshHeader) {
            this.refreshHeader();
          }

          if (changes.events) {
            validateEvents(this.events);
          }

          if (refreshBody) {
            this.refreshBody();
          }

          if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
          }
        }
      }, {
        key: "resizeStarted",
        value: function resizeStarted(eventsContainer, minWidth) {
          this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
          var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);

          this.validateResize = function (_ref38) {
            var rectangle = _ref38.rectangle;
            return resizeHelper.validateResize({
              rectangle: rectangle
            });
          };

          this.cdr.markForCheck();
        }
        /**
         * @hidden
         */

      }, {
        key: "timeEventResizeStarted",
        value: function timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
          this.timeEventResizes.set(timeEvent.event, resizeEvent);
          this.resizeStarted(eventsContainer);
        }
        /**
         * @hidden
         */

      }, {
        key: "timeEventResizing",
        value: function timeEventResizing(timeEvent, resizeEvent) {
          var _this13 = this;

          this.timeEventResizes.set(timeEvent.event, resizeEvent);
          var adjustedEvents = new Map();

          var tempEvents = _toConsumableArray(this.events);

          this.timeEventResizes.forEach(function (lastResizeEvent, event) {
            var newEventDates = _this13.getTimeEventResizedDates(event, lastResizeEvent);

            var adjustedEvent = Object.assign({}, event, newEventDates);
            adjustedEvents.set(adjustedEvent, event);
            var eventIndex = tempEvents.indexOf(event);
            tempEvents[eventIndex] = adjustedEvent;
          });
          this.restoreOriginalEvents(tempEvents, adjustedEvents);
        }
        /**
         * @hidden
         */

      }, {
        key: "timeEventResizeEnded",
        value: function timeEventResizeEnded(timeEvent) {
          this.view = this.getWeekView(this.events);
          var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);

          if (lastResizeEvent) {
            this.timeEventResizes.delete(timeEvent.event);
            var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
            this.eventTimesChanged.emit({
              newStart: newEventDates.start,
              newEnd: newEventDates.end,
              event: timeEvent.event,
              type: CalendarEventTimesChangedEventType.Resize
            });
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "allDayEventResizeStarted",
        value: function allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
          this.allDayEventResizes.set(allDayEvent, {
            originalOffset: allDayEvent.offset,
            originalSpan: allDayEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
          });
          this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
        }
        /**
         * @hidden
         */

      }, {
        key: "allDayEventResizing",
        value: function allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
          var currentResize = this.allDayEventResizes.get(allDayEvent);

          if (typeof resizeEvent.edges.left !== 'undefined') {
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            allDayEvent.offset = currentResize.originalOffset + diff;
            allDayEvent.span = currentResize.originalSpan - diff;
          } else if (typeof resizeEvent.edges.right !== 'undefined') {
            var _diff = Math.round(+resizeEvent.edges.right / dayWidth);

            allDayEvent.span = currentResize.originalSpan + _diff;
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "allDayEventResizeEnded",
        value: function allDayEventResizeEnded(allDayEvent) {
          var currentResize = this.allDayEventResizes.get(allDayEvent);

          if (currentResize) {
            var allDayEventResizingBeforeStart = currentResize.edge === 'left';
            var daysDiff;

            if (allDayEventResizingBeforeStart) {
              daysDiff = allDayEvent.offset - currentResize.originalOffset;
            } else {
              daysDiff = allDayEvent.span - currentResize.originalSpan;
            }

            allDayEvent.offset = currentResize.originalOffset;
            allDayEvent.span = currentResize.originalSpan;
            var newStart = allDayEvent.event.start;
            var newEnd = allDayEvent.event.end || allDayEvent.event.start;

            if (allDayEventResizingBeforeStart) {
              newStart = addDaysWithExclusions(this.dateAdapter, newStart, daysDiff, this.excludeDays);
            } else {
              newEnd = addDaysWithExclusions(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
            }

            this.eventTimesChanged.emit({
              newStart: newStart,
              newEnd: newEnd,
              event: allDayEvent.event,
              type: CalendarEventTimesChangedEventType.Resize
            });
            this.allDayEventResizes.delete(allDayEvent);
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "getDayColumnWidth",
        value: function getDayColumnWidth(eventRowContainer) {
          return Math.floor(eventRowContainer.offsetWidth / this.days.length);
        }
        /**
         * @hidden
         */

      }, {
        key: "dateDragEnter",
        value: function dateDragEnter(date) {
          this.lastDragEnterDate = date;
        }
        /**
         * @hidden
         */

      }, {
        key: "eventDropped",
        value: function eventDropped(dropEvent, date, allDay) {
          if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) && this.lastDragEnterDate.getTime() === date.getTime()) {
            this.eventTimesChanged.emit({
              type: CalendarEventTimesChangedEventType.Drop,
              event: dropEvent.dropData.event,
              newStart: date,
              allDay: allDay
            });
          }
        }
        /**
         * @hidden
         */

      }, {
        key: "dragEnter",
        value: function dragEnter(type) {
          this.eventDragEnterByType[type]++;
        }
        /**
         * @hidden
         */

      }, {
        key: "dragLeave",
        value: function dragLeave(type) {
          this.eventDragEnterByType[type]--;
        }
        /**
         * @hidden
         */

      }, {
        key: "dragStarted",
        value: function dragStarted(eventsContainer, event, dayEvent) {
          var _this14 = this;

          this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
          var dragHelper = new CalendarDragHelper(eventsContainer, event);

          this.validateDrag = function (_ref39) {
            var x = _ref39.x,
                y = _ref39.y,
                transform = _ref39.transform;
            return _this14.allDayEventResizes.size === 0 && _this14.timeEventResizes.size === 0 && dragHelper.validateDrag({
              x: x,
              y: y,
              snapDraggedEvents: _this14.snapDraggedEvents,
              dragAlreadyMoved: _this14.dragAlreadyMoved,
              transform: transform
            });
          };

          this.dragActive = true;
          this.dragAlreadyMoved = false;
          this.eventDragEnterByType = {
            allDay: 0,
            time: 0
          };

          if (!this.snapDraggedEvents && dayEvent) {
            this.view.hourColumns.forEach(function (column) {
              var linkedEvent = column.events.find(function (columnEvent) {
                return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
              }); // hide any linked events while dragging

              if (linkedEvent) {
                linkedEvent.width = 0;
                linkedEvent.height = 0;
              }
            });
          }

          this.cdr.markForCheck();
        }
        /**
         * @hidden
         */

      }, {
        key: "dragMove",
        value: function dragMove(dayEvent, dragEvent) {
          if (this.snapDraggedEvents) {
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            var originalEvent = dayEvent.event;
            var adjustedEvent = Object.assign({}, originalEvent, newEventTimes);
            var tempEvents = this.events.map(function (event) {
              if (event === originalEvent) {
                return adjustedEvent;
              }

              return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]));
          }

          this.dragAlreadyMoved = true;
        }
        /**
         * @hidden
         */

      }, {
        key: "allDayEventDragMove",
        value: function allDayEventDragMove() {
          this.dragAlreadyMoved = true;
        }
        /**
         * @hidden
         */

      }, {
        key: "dragEnded",
        value: function dragEnded(weekEvent, dragEndEvent, dayWidth) {
          var useY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          this.view = this.getWeekView(this.events);
          this.dragActive = false;

          var _this$getDragMovedEve = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY),
              start = _this$getDragMovedEve.start,
              end = _this$getDragMovedEve.end;

          if (this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0 && isDraggedWithinPeriod(start, end, this.view.period)) {
            this.eventTimesChanged.emit({
              newStart: start,
              newEnd: end,
              event: weekEvent.event,
              type: CalendarEventTimesChangedEventType.Drag,
              allDay: !useY
            });
          }
        }
      }, {
        key: "refreshHeader",
        value: function refreshHeader() {
          this.days = this.utils.getWeekViewHeader(Object.assign({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        }
      }, {
        key: "refreshBody",
        value: function refreshBody() {
          this.view = this.getWeekView(this.events);
        }
      }, {
        key: "refreshAll",
        value: function refreshAll() {
          this.refreshHeader();
          this.refreshBody();
          this.emitBeforeViewRender();
        }
      }, {
        key: "emitBeforeViewRender",
        value: function emitBeforeViewRender() {
          if (this.days && this.view) {
            this.beforeViewRender.emit(Object.assign({
              header: this.days
            }, this.view));
          }
        }
      }, {
        key: "getWeekView",
        value: function getWeekView(events) {
          return this.utils.getWeekView(Object.assign({
            events: events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            precision: this.precision,
            absolutePositionedEvents: true,
            hourSegments: this.hourSegments,
            dayStart: {
              hour: this.dayStartHour,
              minute: this.dayStartMinute
            },
            dayEnd: {
              hour: this.dayEndHour,
              minute: this.dayEndMinute
            },
            segmentHeight: this.hourSegmentHeight,
            weekendDays: this.weekendDays
          }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        }
      }, {
        key: "getDragMovedEventTimes",
        value: function getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
          var daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
          var minutesMoved = useY ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize) : 0;
          var start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
          var end;

          if (weekEvent.event.end) {
            end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
          }

          return {
            start: start,
            end: end
          };
        }
      }, {
        key: "restoreOriginalEvents",
        value: function restoreOriginalEvents(tempEvents, adjustedEvents) {
          var previousView = this.view;
          this.view = this.getWeekView(tempEvents);
          var adjustedEventsArray = tempEvents.filter(function (event) {
            return adjustedEvents.has(event);
          });
          this.view.hourColumns.forEach(function (column, columnIndex) {
            previousView.hourColumns[columnIndex].hours.forEach(function (hour, hourIndex) {
              hour.segments.forEach(function (segment, segmentIndex) {
                column.hours[hourIndex].segments[segmentIndex].cssClass = segment.cssClass;
              });
            });
            adjustedEventsArray.forEach(function (adjustedEvent) {
              var originalEvent = adjustedEvents.get(adjustedEvent);
              var existingColumnEvent = column.events.find(function (columnEvent) {
                return columnEvent.event === adjustedEvent;
              });

              if (existingColumnEvent) {
                // restore the original event so trackBy kicks in and the dom isn't changed
                existingColumnEvent.event = originalEvent;
              } else {
                // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                column.events.push({
                  event: originalEvent,
                  left: 0,
                  top: 0,
                  height: 0,
                  width: 0,
                  startsBeforeDay: false,
                  endsAfterDay: false
                });
              }
            });
          });
          adjustedEvents.clear();
        }
      }, {
        key: "getTimeEventResizedDates",
        value: function getTimeEventResizedDates(calendarEvent, resizeEvent) {
          var minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
          var newEventDates = {
            start: calendarEvent.start,
            end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight)
          };
          var end = calendarEvent.end,
              eventWithoutEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(calendarEvent, ["end"]);
          var smallestResizes = {
            start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
            end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
          };

          if (typeof resizeEvent.edges.left !== 'undefined') {
            var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
            var newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);

            if (newStart < smallestResizes.start) {
              newEventDates.start = newStart;
            } else {
              newEventDates.start = smallestResizes.start;
            }
          } else if (typeof resizeEvent.edges.right !== 'undefined') {
            var _daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);

            var newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, _daysDiff, this.excludeDays);

            if (newEnd > smallestResizes.end) {
              newEventDates.end = newEnd;
            } else {
              newEventDates.end = smallestResizes.end;
            }
          }

          if (typeof resizeEvent.edges.top !== 'undefined') {
            var minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);

            var _newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);

            if (_newStart < smallestResizes.start) {
              newEventDates.start = _newStart;
            } else {
              newEventDates.start = smallestResizes.start;
            }
          } else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            var _minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);

            var _newEnd = this.dateAdapter.addMinutes(newEventDates.end, _minutesMoved);

            if (_newEnd > smallestResizes.end) {
              newEventDates.end = _newEnd;
            } else {
              newEventDates.end = smallestResizes.end;
            }
          }

          return newEventDates;
        }
      }]);

      return CalendarWeekViewComponent;
    }();

    CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(t) {
      return new (t || CalendarWeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateAdapter));
    };

    CalendarWeekViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarWeekViewComponent,
      selectors: [["mwl-calendar-week-view"]],
      inputs: {
        events: "events",
        excludeDays: "excludeDays",
        tooltipPlacement: "tooltipPlacement",
        tooltipAppendToBody: "tooltipAppendToBody",
        tooltipDelay: "tooltipDelay",
        precision: "precision",
        snapDraggedEvents: "snapDraggedEvents",
        hourSegments: "hourSegments",
        hourSegmentHeight: "hourSegmentHeight",
        dayStartHour: "dayStartHour",
        dayStartMinute: "dayStartMinute",
        dayEndHour: "dayEndHour",
        dayEndMinute: "dayEndMinute",
        locale: "locale",
        viewDate: "viewDate",
        refresh: "refresh",
        tooltipTemplate: "tooltipTemplate",
        weekStartsOn: "weekStartsOn",
        headerTemplate: "headerTemplate",
        eventTemplate: "eventTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        weekendDays: "weekendDays",
        hourSegmentTemplate: "hourSegmentTemplate",
        eventSnapSize: "eventSnapSize",
        allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
        daysInWeek: "daysInWeek",
        currentTimeMarkerTemplate: "currentTimeMarkerTemplate"
      },
      outputs: {
        dayHeaderClicked: "dayHeaderClicked",
        eventClicked: "eventClicked",
        eventTimesChanged: "eventTimesChanged",
        beforeViewRender: "beforeViewRender",
        hourSegmentClicked: "hourSegmentClicked"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
      decls: 8,
      vars: 9,
      consts: [["role", "grid", 1, "cal-week-view"], [3, "days", "locale", "customTemplate", "dayHeaderClicked", "eventDropped", "dragEnter"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["dayColumns", ""], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], ["allDayEventsContainer", ""], [1, "cal-time-label-column", 3, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["eventRowContainer", ""], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], ["event", ""], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek", "eventClicked"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], [1, "cal-time-label-column"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "ghostDragEnabled", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "hidden", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "ghostDragEnabled", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek", "eventClicked"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter"]],
      template: function CalendarWeekViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mwl-calendar-week-view-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_1_listener($event) {
            return ctx.dayHeaderClicked.emit($event);
          })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_1_listener($event) {
            return ctx.eventDropped({
              dropData: $event
            }, $event.newStart, true);
          })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_1_listener($event) {
            return ctx.dateDragEnter($event.date);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_Template, 6, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_3_listener($event) {
            return ctx.dragEnter("time");
          })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_3_listener($event) {
            return ctx.dragLeave("time");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_4_Template, 2, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CalendarWeekViewComponent_div_7_Template, 5, 12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view.allDayEventRows.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view.hourColumns.length > 0 && ctx.daysInWeek !== 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-resize-active", ctx.timeEventResizes.size > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.view.hourColumns)("ngForTrackBy", ctx.trackByHourColumn);
        }
      },
      directives: function directives() {
        return [CalendarWeekViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableDirective"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], CalendarWeekViewEventComponent, angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizeHandleDirective"], CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent, ClickDirective];
      },
      encapsulation: 2
    });

    CalendarWeekViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: CalendarUtils
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }, {
        type: DateAdapter
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarWeekViewComponent.prototype, "viewDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarWeekViewComponent.prototype, "events", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarWeekViewComponent.prototype, "excludeDays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"])], CalendarWeekViewComponent.prototype, "refresh", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "tooltipTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewComponent.prototype, "tooltipAppendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "tooltipDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "headerTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "eventTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "eventTitleTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "eventActionsTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewComponent.prototype, "precision", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarWeekViewComponent.prototype, "weekendDays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewComponent.prototype, "snapDraggedEvents", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "hourSegments", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "hourSegmentHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "dayStartHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "dayStartMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "dayEndHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "dayEndMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "hourSegmentTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "eventSnapSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "daysInWeek", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "dayHeaderClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "eventClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "beforeViewRender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "hourSegmentClicked", void 0);
    CalendarWeekViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], CalendarUtils, String, DateAdapter])], CalendarWeekViewComponent);

    var CalendarWeekViewHeaderComponent = function CalendarWeekViewHeaderComponent() {
      _classCallCheck(this, CalendarWeekViewHeaderComponent);

      this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    };

    CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(t) {
      return new (t || CalendarWeekViewHeaderComponent)();
    };

    CalendarWeekViewHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarWeekViewHeaderComponent,
      selectors: [["mwl-calendar-week-view-header"]],
      inputs: {
        days: "days",
        locale: "locale",
        customTemplate: "customTemplate"
      },
      outputs: {
        dayHeaderClicked: "dayHeaderClicked",
        eventDropped: "eventDropped",
        dragEnter: "dragEnter"
      },
      decls: 3,
      vars: 9,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "ngClass", "mwlClick", "drop", "dragEnter"]],
      template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarWeekViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r803 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r803)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction6"](2, _c23, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], ClickDirective],
      pipes: [CalendarDatePipe],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarWeekViewHeaderComponent.prototype, "days", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewHeaderComponent.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "dayHeaderClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "eventDropped", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "dragEnter", void 0);

    var CalendarWeekViewEventComponent = function CalendarWeekViewEventComponent() {
      _classCallCheck(this, CalendarWeekViewEventComponent);

      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    CalendarWeekViewEventComponent.ɵfac = function CalendarWeekViewEventComponent_Factory(t) {
      return new (t || CalendarWeekViewEventComponent)();
    };

    CalendarWeekViewEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarWeekViewEventComponent,
      selectors: [["mwl-calendar-week-view-event"]],
      inputs: {
        locale: "locale",
        weekEvent: "weekEvent",
        tooltipPlacement: "tooltipPlacement",
        tooltipAppendToBody: "tooltipAppendToBody",
        tooltipDisabled: "tooltipDisabled",
        tooltipDelay: "tooltipDelay",
        customTemplate: "customTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        tooltipTemplate: "tooltipTemplate",
        column: "column",
        daysInWeek: "daysInWeek"
      },
      outputs: {
        eventClicked: "eventClicked"
      },
      decls: 3,
      vars: 12,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]],
      template: function CalendarWeekViewEventComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarWeekViewEventComponent_ng_template_0_Template, 6, 26, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewEventComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r822 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r822)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunctionV"](2, _c25, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], CalendarTooltipDirective, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent, CalendarEventTitleComponent],
      pipes: [CalendarEventTitlePipe, CalendarA11yPipe],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewEventComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewEventComponent.prototype, "weekEvent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewEventComponent.prototype, "tooltipPlacement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewEventComponent.prototype, "tooltipAppendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewEventComponent.prototype, "tooltipDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewEventComponent.prototype, "tooltipDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewEventComponent.prototype, "customTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewEventComponent.prototype, "eventTitleTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewEventComponent.prototype, "eventActionsTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewEventComponent.prototype, "tooltipTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewEventComponent.prototype, "column", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewEventComponent.prototype, "daysInWeek", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewEventComponent.prototype, "eventClicked", void 0);

    var CalendarWeekViewHourSegmentComponent = function CalendarWeekViewHourSegmentComponent() {
      _classCallCheck(this, CalendarWeekViewHourSegmentComponent);
    };

    CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(t) {
      return new (t || CalendarWeekViewHourSegmentComponent)();
    };

    CalendarWeekViewHourSegmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarWeekViewHourSegmentComponent,
      selectors: [["mwl-calendar-week-view-hour-segment"]],
      inputs: {
        segment: "segment",
        segmentHeight: "segmentHeight",
        locale: "locale",
        isTimeLabel: "isTimeLabel",
        daysInWeek: "daysInWeek",
        customTemplate: "customTemplate"
      },
      decls: 3,
      vars: 8,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]],
      template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarWeekViewHourSegmentComponent_ng_template_0_Template, 3, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewHourSegmentComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r837 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r837)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c26, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [CalendarA11yPipe, CalendarDatePipe],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewHourSegmentComponent.prototype, "segment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewHourSegmentComponent.prototype, "segmentHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewHourSegmentComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewHourSegmentComponent.prototype, "isTimeLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewHourSegmentComponent.prototype, "daysInWeek", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewHourSegmentComponent.prototype, "customTemplate", void 0);

    var CalendarWeekViewCurrentTimeMarkerComponent =
    /*#__PURE__*/
    function () {
      function CalendarWeekViewCurrentTimeMarkerComponent(dateAdapter) {
        var _this15 = this;

        _classCallCheck(this, CalendarWeekViewCurrentTimeMarkerComponent);

        this.dateAdapter = dateAdapter;
        this.columnDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.columnDate);
        this.marker$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(60 * 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMapTo"])(this.columnDate$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (columnDate) {
          var startOfDay = _this15.dateAdapter.setMinutes(_this15.dateAdapter.setHours(columnDate, _this15.dayStartHour), _this15.dayStartMinute);

          var endOfDay = _this15.dateAdapter.setMinutes(_this15.dateAdapter.setHours(columnDate, _this15.dayEndHour), _this15.dayEndMinute);

          var hourHeightModifier = _this15.hourSegments * _this15.hourSegmentHeight / 60;
          var now = new Date();
          return {
            isVisible: _this15.dateAdapter.isSameDay(columnDate, now) && now >= startOfDay && now <= endOfDay,
            top: _this15.dateAdapter.differenceInMinutes(now, startOfDay) * hourHeightModifier
          };
        }));
      }

      _createClass(CalendarWeekViewCurrentTimeMarkerComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.columnDate) {
            this.columnDate$.next(changes.columnDate.currentValue);
          }
        }
      }]);

      return CalendarWeekViewCurrentTimeMarkerComponent;
    }();

    CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(t) {
      return new (t || CalendarWeekViewCurrentTimeMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DateAdapter));
    };

    CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarWeekViewCurrentTimeMarkerComponent,
      selectors: [["mwl-calendar-week-view-current-time-marker"]],
      inputs: {
        columnDate: "columnDate",
        dayStartHour: "dayStartHour",
        dayStartMinute: "dayStartMinute",
        dayEndHour: "dayEndHour",
        dayEndMinute: "dayEndMinute",
        hourSegments: "hourSegments",
        hourSegmentHeight: "hourSegmentHeight",
        customTemplate: "customTemplate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
      decls: 5,
      vars: 14,
      consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]],
      template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template, 0, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        }

        if (rf & 2) {
          var _r847 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var tmp_1_0 = null;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction7"](6, _c27, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.marker$)) == null ? null : tmp_1_0.isVisible, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx.marker$)) == null ? null : tmp_1_0.top);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r847)("ngTemplateOutletContext", currVal_1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      encapsulation: 2
    });

    CalendarWeekViewCurrentTimeMarkerComponent.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "columnDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegments", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegmentHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "customTemplate", void 0);
    CalendarWeekViewCurrentTimeMarkerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarWeekViewCurrentTimeMarkerComponent);

    var CalendarWeekModule = function CalendarWeekModule() {
      _classCallCheck(this, CalendarWeekModule);
    };

    CalendarWeekModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CalendarWeekModule
    });
    CalendarWeekModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CalendarWeekModule_Factory(t) {
        return new (t || CalendarWeekModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"]]
    });
    /**
     * Shows all events on a given day. Example usage:
     *
     * ```typescript
     * <mwl-calendar-day-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-day-view>
     * ```
     */

    var CalendarDayViewComponent =
    /**
     * Shows all events on a given day. Example usage:
     *
     * ```typescript
     * <mwl-calendar-day-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-day-view>
     * ```
     */
    function CalendarDayViewComponent() {
      _classCallCheck(this, CalendarDayViewComponent);

      /**
       * An array of events to display on view
       * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
       */
      this.events = [];
      /**
       * The number of segments in an hour. Must be <= 6
       */

      this.hourSegments = 2;
      /**
       * The height in pixels of each hour segment
       */

      this.hourSegmentHeight = 30;
      /**
       * The day start hours in 24 hour time. Must be 0-23
       */

      this.dayStartHour = 0;
      /**
       * The day start minutes. Must be 0-59
       */

      this.dayStartMinute = 0;
      /**
       * The day end hours in 24 hour time. Must be 0-23
       */

      this.dayEndHour = 23;
      /**
       * The day end minutes. Must be 0-59
       */

      this.dayEndMinute = 59;
      /**
       * The placement of the event tooltip
       */

      this.tooltipPlacement = 'auto';
      /**
       * Whether to append tooltips to the body or next to the trigger element
       */

      this.tooltipAppendToBody = true;
      /**
       * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
       * will be displayed immediately.
       */

      this.tooltipDelay = null;
      /**
       * Whether to snap events to a grid when dragging
       */

      this.snapDraggedEvents = true;
      /**
       * Called when an event title is clicked
       */

      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      /**
       * Called when an hour segment is clicked
       */

      this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      /**
       * Called when an event is resized or dragged and dropped
       */

      this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      /**
       * An output that will be called before the view is rendered for the current day.
       * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
       */

      this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) {
      return new (t || CalendarDayViewComponent)();
    };

    CalendarDayViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarDayViewComponent,
      selectors: [["mwl-calendar-day-view"]],
      inputs: {
        events: "events",
        hourSegments: "hourSegments",
        hourSegmentHeight: "hourSegmentHeight",
        dayStartHour: "dayStartHour",
        dayStartMinute: "dayStartMinute",
        dayEndHour: "dayEndHour",
        dayEndMinute: "dayEndMinute",
        tooltipPlacement: "tooltipPlacement",
        tooltipAppendToBody: "tooltipAppendToBody",
        tooltipDelay: "tooltipDelay",
        snapDraggedEvents: "snapDraggedEvents",
        viewDate: "viewDate",
        refresh: "refresh",
        locale: "locale",
        eventSnapSize: "eventSnapSize",
        tooltipTemplate: "tooltipTemplate",
        hourSegmentTemplate: "hourSegmentTemplate",
        eventTemplate: "eventTemplate",
        eventTitleTemplate: "eventTitleTemplate",
        eventActionsTemplate: "eventActionsTemplate",
        allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
        currentTimeMarkerTemplate: "currentTimeMarkerTemplate"
      },
      outputs: {
        eventClicked: "eventClicked",
        hourSegmentClicked: "hourSegmentClicked",
        eventTimesChanged: "eventTimesChanged",
        beforeViewRender: "beforeViewRender"
      },
      decls: 1,
      vars: 23,
      consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourSegmentHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]],
      template: function CalendarDayViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
            return ctx.eventClicked.emit($event);
          })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_0_listener($event) {
            return ctx.hourSegmentClicked.emit($event);
          })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
            return ctx.eventTimesChanged.emit($event);
          })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_0_listener($event) {
            return ctx.beforeViewRender.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourSegmentHeight", ctx.hourSegmentHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate);
        }
      },
      directives: [CalendarWeekViewComponent],
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarDayViewComponent.prototype, "viewDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarDayViewComponent.prototype, "events", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "hourSegments", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "hourSegmentHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "dayStartHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "dayEndHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"])], CalendarDayViewComponent.prototype, "refresh", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarDayViewComponent.prototype, "locale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "tooltipDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "eventTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "eventActionsTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarDayViewComponent.prototype, "snapDraggedEvents", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "eventClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "beforeViewRender", void 0);

    var CalendarDayModule = function CalendarDayModule() {
      _classCallCheck(this, CalendarDayModule);
    };

    CalendarDayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CalendarDayModule
    });
    CalendarDayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CalendarDayModule_Factory(t) {
        return new (t || CalendarDayModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], CalendarCommonModule, CalendarWeekModule]]
    });
    var CalendarModule_1;
    /**
     * The main module of this library. Example usage:
     *
     * ```typescript
     * import { CalenderModule } from 'angular-calendar';
     *
     * @NgModule({
     *   imports: [
     *     CalenderModule.forRoot()
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */

    var CalendarModule = CalendarModule_1 =
    /*#__PURE__*/
    function () {
      function CalendarModule() {
        _classCallCheck(this, CalendarModule);
      }

      _createClass(CalendarModule, null, [{
        key: "forRoot",
        value: function forRoot(dateAdapter) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return {
            ngModule: CalendarModule_1,
            providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
          };
        }
      }]);

      return CalendarModule;
    }();

    CalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CalendarModule
    });
    CalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CalendarModule_Factory(t) {
        return new (t || CalendarModule)();
      },
      imports: [[CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule], CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarEventActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-event-actions',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event, sourceEvent: $event })\"\n          (mwlKeydownEnter)=\"\n            action.onClick({ event: event, sourceEvent: $event })\n          \"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n          tabindex=\"0\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            { action: action } | calendarA11y: 'actionButtonLabel'\n          \"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], function () {
        return [];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarEventTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-event-title',
          template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n        [attr.aria-hidden]=\"{} | calendarA11y: 'hideEventTitle'\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], null, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarTooltipWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-tooltip-window',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], null, {
        contents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarTooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlCalendarTooltip]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      }, {
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['tooltipPlacement']
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['tooltipDelay']
        }],
        onMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseenter']
        }],
        onMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mouseleave']
        }],
        contents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mwlCalendarTooltip']
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['tooltipTemplate']
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['tooltipEvent']
        }],
        appendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['tooltipAppendToBody']
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarPreviousViewDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlCalendarPreviousView]'
        }]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, {
        excludeDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        viewDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click']
        }],
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarNextViewDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlCalendarNextView]'
        }]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, {
        excludeDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        viewDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click']
        }],
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarTodayDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlCalendarToday]'
        }]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, {
        viewDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click']
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarAngularDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, null);
    })();

    var ɵCalendarDateFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CalendarDateFormatter);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'calendarDate'
        }]
      }], function () {
        return [{
          type: CalendarDateFormatter
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarEventTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'calendarEventTitle'
        }]
      }], function () {
        return [{
          type: CalendarEventTitleFormatter
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClickDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlClick]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      }, {
        clickListenerDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        click: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['mwlClick']
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeydownEnterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlKeydownEnter]'
        }]
      }], function () {
        return [];
      }, {
        keydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['mwlKeydownEnter']
        }],
        onKeyPress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarUtils, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarA11y, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarA11yPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'calendarA11y'
        }]
      }], function () {
        return [{
          type: CalendarA11y
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarMomentDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MOMENT]
          }]
        }, {
          type: DateAdapter
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarNativeDateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarCommonModule, {
        declarations: function declarations() {
          return [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]],
          entryComponents: [CalendarTooltipWindowComponent]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarMonthViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-month-view',
          template: "\n    <div class=\"cal-month-view\" role=\"grid\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day, sourceEvent: $event })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (mwlKeydownEnter)=\"\n                dayClicked.emit({ day: day, sourceEvent: $event })\n              \"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: $event.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n              [attr.tabindex]=\"{} | calendarA11y: 'monthCellTabIndex'\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [locale]=\"locale\"\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [date]=\"openDay?.date\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"\n              eventClicked.emit({\n                event: $event.event,\n                sourceEvent: $event.sourceEvent\n              })\n            \"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: CalendarUtils
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }, {
          type: DateAdapter
        }];
      }, {
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        excludeDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        activeDayIsOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        beforeViewRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dayClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        columnHeaderClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventTimesChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        activeDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        refresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        weekStartsOn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cellTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        openDayEventsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        weekendDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarMonthViewHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-month-view-header',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\" role=\"row\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"\n            columnHeaderClicked.emit({\n              isoDayNumber: day.day,\n              sourceEvent: $event\n            })\n          \"\n          [ngClass]=\"day.cssClass\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], function () {
        return [];
      }, {
        columnHeaderClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        days: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarMonthCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-month-cell',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-cell-top\"\n        [attr.aria-label]=\"\n          { day: day, locale: locale } | calendarA11y: 'monthCell'\n        \"\n      >\n        <span aria-hidden=\"true\">\n          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n            day.badgeTotal\n          }}</span>\n          <span class=\"cal-day-number\">{{\n            day.date | calendarDate: 'monthViewDayNumber':locale\n          }}</span>\n        </span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          (mwlClick)=\"eventClicked.emit({ event: event, sourceEvent: $event })\"\n          [attr.aria-hidden]=\"{} | calendarA11y: 'hideMonthCellEvents'\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
          host: {
            class: 'cal-cell cal-day-cell',
            '[class.cal-past]': 'day.isPast',
            '[class.cal-today]': 'day.isToday',
            '[class.cal-future]': 'day.isFuture',
            '[class.cal-weekend]': 'day.isWeekend',
            '[class.cal-in-month]': 'day.inMonth',
            '[class.cal-out-month]': '!day.inMonth',
            '[class.cal-has-events]': 'day.events.length > 0',
            '[class.cal-open]': 'day === openDay',
            '[class.cal-event-highlight]': '!!day.backgroundColor'
          }
        }]
      }], function () {
        return [];
      }, {
        highlightDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        unhighlightDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        day: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        openDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarOpenDayEventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-open-day-events',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-open-day-events\"\n        [@collapse]\n        *ngIf=\"isOpen\"\n        role=\"application\"\n      >\n        <span\n          tabindex=\"-1\"\n          role=\"alert\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'\n          \"\n        ></span>\n        <span\n          tabindex=\"0\"\n          role=\"landmark\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale }\n              | calendarA11y: 'openDayEventsLandmark'\n          \"\n        ></span>\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            (mwlKeydownEnter)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            tabindex=\"0\"\n            [attr.aria-label]=\"\n              { event: event, locale: locale }\n                | calendarA11y: 'eventDescription'\n            \"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
          animations: [collapseAnimation]
        }]
      }], function () {
        return [];
      }, {
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarMonthModule, {
        declarations: function declarations() {
          return [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule];
        },
        exports: function exports() {
          return [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarMonthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule],
          declarations: [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent],
          exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarWeekViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view',
          template: "\n    <div class=\"cal-week-view\" role=\"grid\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n            (dragEnter)=\"dateDragEnter(day.date)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByWeekAllDayEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [locale]=\"locale\"\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              [daysInWeek]=\"daysInWeek\"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: allDayEvent.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div\n          class=\"cal-time-label-column\"\n          *ngIf=\"view.hourColumns.length > 0 && daysInWeek !== 1\"\n        >\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <mwl-calendar-week-view-current-time-marker\n              [columnDate]=\"column.date\"\n              [dayStartHour]=\"dayStartHour\"\n              [dayStartMinute]=\"dayStartMinute\"\n              [dayEndHour]=\"dayEndHour\"\n              [dayEndMinute]=\"dayEndMinute\"\n              [hourSegments]=\"hourSegments\"\n              [hourSegmentHeight]=\"hourSegmentHeight\"\n              [customTemplate]=\"currentTimeMarkerTemplate\"\n            ></mwl-calendar-week-view-current-time-marker>\n            <div class=\"cal-events-container\">\n              <div\n                *ngFor=\"\n                  let timeEvent of column.events;\n                  trackBy: trackByWeekTimeEvent\n                \"\n                #event\n                class=\"cal-event-container\"\n                [class.cal-draggable]=\"\n                  timeEvent.event.draggable && timeEventResizes.size === 0\n                \"\n                [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n                [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n                [ngClass]=\"timeEvent.event.cssClass\"\n                [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                [style.top.px]=\"timeEvent.top\"\n                [style.height.px]=\"timeEvent.height\"\n                [style.left.%]=\"timeEvent.left\"\n                [style.width.%]=\"timeEvent.width\"\n                mwlResizable\n                [resizeSnapGrid]=\"{\n                  left: dayColumnWidth,\n                  right: dayColumnWidth,\n                  top: eventSnapSize || hourSegmentHeight,\n                  bottom: eventSnapSize || hourSegmentHeight\n                }\"\n                [validateResize]=\"validateResize\"\n                [allowNegativeResizes]=\"true\"\n                (resizeStart)=\"\n                  timeEventResizeStarted(dayColumns, timeEvent, $event)\n                \"\n                (resizing)=\"timeEventResizing(timeEvent, $event)\"\n                (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n                mwlDraggable\n                dragActiveClass=\"cal-drag-active\"\n                [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n                [dragAxis]=\"{\n                  x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                  y: timeEvent.event.draggable && timeEventResizes.size === 0\n                }\"\n                [dragSnapGrid]=\"\n                  snapDraggedEvents\n                    ? {\n                        x: dayColumnWidth,\n                        y: eventSnapSize || hourSegmentHeight\n                      }\n                    : {}\n                \"\n                [ghostDragEnabled]=\"!snapDraggedEvents\"\n                [validateDrag]=\"validateDrag\"\n                (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n                (dragging)=\"dragMove(timeEvent, $event)\"\n                (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n              >\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-before-start\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.beforeStart &&\n                    !timeEvent.startsBeforeDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    left: true,\n                    top: true\n                  }\"\n                ></div>\n                <mwl-calendar-week-view-event\n                  [locale]=\"locale\"\n                  [weekEvent]=\"timeEvent\"\n                  [tooltipPlacement]=\"tooltipPlacement\"\n                  [tooltipTemplate]=\"tooltipTemplate\"\n                  [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                  [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                  [tooltipDelay]=\"tooltipDelay\"\n                  [customTemplate]=\"eventTemplate\"\n                  [eventTitleTemplate]=\"eventTitleTemplate\"\n                  [eventActionsTemplate]=\"eventActionsTemplate\"\n                  [column]=\"column\"\n                  [daysInWeek]=\"daysInWeek\"\n                  (eventClicked)=\"\n                    eventClicked.emit({\n                      event: timeEvent.event,\n                      sourceEvent: $event.sourceEvent\n                    })\n                  \"\n                >\n                </mwl-calendar-week-view-event>\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-after-end\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.afterEnd &&\n                    !timeEvent.endsAfterDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    right: true,\n                    bottom: true\n                  }\"\n                ></div>\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n                (mwlClick)=\"\n                  hourSegmentClicked.emit({\n                    date: segment.date,\n                    sourceEvent: $event\n                  })\n                \"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n                (dragEnter)=\"dateDragEnter(segment.date)\"\n                [isTimeLabel]=\"daysInWeek === 1\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: CalendarUtils
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }, {
          type: DateAdapter
        }];
      }, {
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        excludeDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        precision: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        snapDraggedEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegmentHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayStartHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayStartMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayEndHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayEndMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayHeaderClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventTimesChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        beforeViewRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        hourSegmentClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        refresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        weekStartsOn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        weekendDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegmentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventSnapSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        allDayEventsLabelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        currentTimeMarkerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarWeekViewHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view-header',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], function () {
        return [];
      }, {
        dayHeaderClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventDropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        days: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarWeekViewEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view-event',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle\n                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')\n                : weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit({ sourceEvent: $event })\"\n        (mwlKeydownEnter)=\"eventClicked.emit({ sourceEvent: $event })\"\n        tabindex=\"0\"\n        role=\"application\"\n        [attr.aria-label]=\"\n          { event: weekEvent.event, locale: locale }\n            | calendarA11y: 'eventDescription'\n        \"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          [view]=\"daysInWeek === 1 ? 'day' : 'week'\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], function () {
        return [];
      }, {
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        weekEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        column: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarWeekViewHourSegmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view-hour-segment',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        [attr.aria-hidden]=\"\n          {}\n            | calendarA11y\n              : (daysInWeek === 1\n                  ? 'hideDayHourSegment'\n                  : 'hideWeekHourSegment')\n        \"\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{\n            segment.displayDate\n              | calendarDate\n                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')\n                : locale\n          }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], null, {
        segment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        segmentHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isTimeLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        daysInWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarWeekViewCurrentTimeMarkerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-week-view-current-time-marker',
          template: "\n    <ng-template\n      #defaultTemplate\n      let-columnDate=\"columnDate\"\n      let-dayStartHour=\"dayStartHour\"\n      let-dayStartMinute=\"dayStartMinute\"\n      let-dayEndHour=\"dayEndHour\"\n      let-dayEndMinute=\"dayEndMinute\"\n      let-isVisible=\"isVisible\"\n      let-topPx=\"topPx\"\n    >\n      <div\n        class=\"cal-current-time-marker\"\n        *ngIf=\"isVisible\"\n        [style.top.px]=\"topPx\"\n      ></div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        columnDate: columnDate,\n        dayStartHour: dayStartHour,\n        dayStartMinute: dayStartMinute,\n        dayEndHour: dayEndHour,\n        dayEndMinute: dayEndMinute,\n        isVisible: (marker$ | async)?.isVisible,\n        topPx: (marker$ | async)?.top\n      }\"\n    >\n    </ng-template>\n  "
        }]
      }], function () {
        return [{
          type: DateAdapter
        }];
      }, {
        columnDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayStartHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayStartMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayEndHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayEndMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegmentHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarWeekModule, {
        declarations: function declarations() {
          return [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule];
        },
        exports: function exports() {
          return [angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarWeekModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule],
          declarations: [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent],
          exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarDayViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mwl-calendar-day-view',
          template: "\n    <mwl-calendar-week-view\n      class=\"cal-day-view\"\n      [daysInWeek]=\"1\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [hourSegments]=\"hourSegments\"\n      [hourSegmentHeight]=\"hourSegmentHeight\"\n      [dayStartHour]=\"dayStartHour\"\n      [dayStartMinute]=\"dayStartMinute\"\n      [dayEndHour]=\"dayEndHour\"\n      [dayEndMinute]=\"dayEndMinute\"\n      [refresh]=\"refresh\"\n      [locale]=\"locale\"\n      [eventSnapSize]=\"eventSnapSize\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      [tooltipTemplate]=\"tooltipTemplate\"\n      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n      [tooltipDelay]=\"tooltipDelay\"\n      [hourSegmentTemplate]=\"hourSegmentTemplate\"\n      [eventTemplate]=\"eventTemplate\"\n      [eventTitleTemplate]=\"eventTitleTemplate\"\n      [eventActionsTemplate]=\"eventActionsTemplate\"\n      [snapDraggedEvents]=\"snapDraggedEvents\"\n      [allDayEventsLabelTemplate]=\"allDayEventsLabelTemplate\"\n      [currentTimeMarkerTemplate]=\"currentTimeMarkerTemplate\"\n      (eventClicked)=\"eventClicked.emit($event)\"\n      (hourSegmentClicked)=\"hourSegmentClicked.emit($event)\"\n      (eventTimesChanged)=\"eventTimesChanged.emit($event)\"\n      (beforeViewRender)=\"beforeViewRender.emit($event)\"\n    ></mwl-calendar-week-view>\n  "
        }]
      }], function () {
        return [];
      }, {
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegmentHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayStartHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayStartMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayEndHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dayEndMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipPlacement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipAppendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        snapDraggedEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        hourSegmentClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventTimesChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        beforeViewRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        viewDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        refresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventSnapSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hourSegmentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventTitleTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        eventActionsTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        allDayEventsLabelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        currentTimeMarkerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarDayModule, {
        declarations: function declarations() {
          return [CalendarDayViewComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], CalendarCommonModule, CalendarWeekModule];
        },
        exports: function exports() {
          return [CalendarDayViewComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarDayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], CalendarCommonModule, CalendarWeekModule],
          declarations: [CalendarDayViewComponent],
          exports: [CalendarDayViewComponent]
        }]
      }], null, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarModule, {
        imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
        exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
          exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of angular-calendar
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=angular-calendar.js.map

    /***/

  },

  /***/
  "./node_modules/angular-calendar/date-adapters/date-fns/index.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/angular-calendar/date-adapters/date-fns/index.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularCalendarDateAdaptersDateFnsIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var date_fns_1 = __webpack_require__(
    /*! calendar-utils/date-adapters/date-fns */
    "./node_modules/calendar-utils/date-adapters/date-fns/index.js");

    var date_fns_2 = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    function adapterFactory() {
      return tslib_1.__assign({}, date_fns_1.adapterFactory(), {
        addWeeks: date_fns_2.addWeeks,
        addMonths: date_fns_2.addMonths,
        subDays: date_fns_2.subDays,
        subWeeks: date_fns_2.subWeeks,
        subMonths: date_fns_2.subMonths,
        getISOWeek: date_fns_2.getISOWeek,
        setDate: date_fns_2.setDate,
        setMonth: date_fns_2.setMonth,
        setYear: date_fns_2.setYear,
        getDate: date_fns_2.getDate,
        getYear: date_fns_2.getYear
      });
    }

    exports.adapterFactory = adapterFactory; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js ***!
    \*******************************************************************************************************/

  /*! exports provided: DragAndDropModule, ɵc, ɵd, ɵb, ɵa */

  /***/
  function node_modulesAngularDraggableDroppable__ivy_ngcc__Fesm2015AngularDraggableDroppableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragAndDropModule", function () {
      return DragAndDropModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return DraggableHelper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return DraggableScrollContainerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DraggableDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DroppableDirective;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dom-autoscroller */
    "./node_modules/dom-autoscroller/dist/bundle.js");
    /* harmony import */


    var dom_autoscroller__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DraggableHelper = function DraggableHelper() {
      _classCallCheck(this, DraggableHelper);

      this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    };

    DraggableHelper.ɵfac = function DraggableHelper_Factory(t) {
      return new (t || DraggableHelper)();
    };

    DraggableHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: DraggableHelper,
      factory: DraggableHelper.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    DraggableHelper.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({
      factory: function DraggableHelper_Factory() {
        return new DraggableHelper();
      },
      token: DraggableHelper,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DraggableHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
     * ```html
     * <div style="overflow: scroll" mwlDraggableScrollContainer>
     * <div mwlDraggable>Drag me!</div>
     * </div>
     * ```
     */


    var DraggableScrollContainerDirective =
    /*#__PURE__*/
    function () {
      /**
       * @hidden
       * @param {?} elementRef
       * @param {?} renderer
       * @param {?} zone
       */
      function DraggableScrollContainerDirective(elementRef, renderer, zone) {
        _classCallCheck(this, DraggableScrollContainerDirective);

        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        /**
         * Trigger the DragStart after a long touch in scrollable container when true
         */

        this.activeLongPressDrag = false;
        /**
         * Configuration of a long touch
         * Duration in ms of a long touch before activating DragStart
         * Delta of the
         */

        this.longPressConfig = {
          duration: 300,
          delta: 30
        };
        this.cancelledScroll = false;
      }
      /**
       * @return {?}
       */


      _createClass(DraggableScrollContainerDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this16.renderer.listen(_this16.elementRef.nativeElement, 'touchmove',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              if (_this16.cancelledScroll && event.cancelable) {
                event.preventDefault();
              }
            });
          });
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "disableScroll",
        value: function disableScroll() {
          this.cancelledScroll = true;
          this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'hidden');
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "enableScroll",
        value: function enableScroll() {
          this.cancelledScroll = false;
          this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'auto');
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "hasScrollbar",
        value: function hasScrollbar() {
          /** @type {?} */
          var containerHasHorizontalScroll = this.elementRef.nativeElement.scrollWidth - this.elementRef.nativeElement.clientWidth > 0;
          /** @type {?} */

          var containerHasVerticalScroll = this.elementRef.nativeElement.scrollHeight - this.elementRef.nativeElement.clientHeight > 0;
          return containerHasHorizontalScroll || containerHasVerticalScroll;
        }
      }]);

      return DraggableScrollContainerDirective;
    }();

    DraggableScrollContainerDirective.ɵfac = function DraggableScrollContainerDirective_Factory(t) {
      return new (t || DraggableScrollContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
    };

    DraggableScrollContainerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: DraggableScrollContainerDirective,
      selectors: [["", "mwlDraggableScrollContainer", ""]],
      inputs: {
        activeLongPressDrag: "activeLongPressDrag",
        longPressConfig: "longPressConfig"
      }
    });
    /** @nocollapse */

    DraggableScrollContainerDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }];
    };

    DraggableScrollContainerDirective.propDecorators = {
      activeLongPressDrag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      longPressConfig: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DraggableScrollContainerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlDraggableScrollContainer]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      }, {
        activeLongPressDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        longPressConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DraggableDirective =
    /*#__PURE__*/
    function () {
      /**
       * @hidden
       * @param {?} element
       * @param {?} renderer
       * @param {?} draggableHelper
       * @param {?} zone
       * @param {?} vcr
       * @param {?} scrollContainer
       * @param {?} document
       */
      function DraggableDirective(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
        _classCallCheck(this, DraggableDirective);

        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.vcr = vcr;
        this.scrollContainer = scrollContainer;
        this.document = document;
        /**
         * The axis along which the element is draggable
         */

        this.dragAxis = {
          x: true,
          y: true
        };
        /**
         * Snap all drags to an x / y grid
         */

        this.dragSnapGrid = {};
        /**
         * Show a ghost element that shows the drag when dragging
         */

        this.ghostDragEnabled = true;
        /**
         * Show the original element when ghostDragEnabled is true
         */

        this.showOriginalElementWhileDragging = false;
        /**
         * The cursor to use when hovering over a draggable element
         */

        this.dragCursor = '';
        /**
         * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
         */

        this.dragPointerDown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when the element has started to be dragged.
         * Only called after at least one mouse or touch move event.
         * If you call $event.cancelDrag$.emit() it will cancel the current drag
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called after the ghost element has been created
         */

        this.ghostElementCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when the element is being dragged
         */

        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called after the element is dragged
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @hidden
         */

        this.pointerDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */

        this.pointerMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */

        this.pointerUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.eventListenerSubscriptions = {};
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.timeLongPress = {
          timerBegin: 0,
          timerEnd: 0
        };
      }
      /**
       * @return {?}
       */


      _createClass(DraggableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.checkEventListeners();
          /** @type {?} */

          var pointerDragged$ = this.pointerDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this17.canDrag();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(
          /**
          * @param {?} pointerDownEvent
          * @return {?}
          */
          function (pointerDownEvent) {
            // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
            // stop mouse events propagating up the chain
            if (pointerDownEvent.event.stopPropagation && !_this17.scrollContainer) {
              pointerDownEvent.event.stopPropagation();
            }
            /** @type {?} */


            var startScrollPosition = _this17.getScrollPosition();
            /** @type {?} */


            var scrollContainerScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](
            /**
            * @param {?} observer
            * @return {?}
            */
            function (observer) {
              /** @type {?} */
              var scrollContainer = _this17.scrollContainer ? _this17.scrollContainer.elementRef.nativeElement : 'window';
              return _this17.renderer.listen(scrollContainer, 'scroll',
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return observer.next(e);
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(startScrollPosition), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @return {?}
            */
            function () {
              return _this17.getScrollPosition();
            }));
            /** @type {?} */

            var currentDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            /** @type {?} */

            var cancelDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();

            _this17.zone.run(
            /**
            * @return {?}
            */
            function () {
              _this17.dragPointerDown.next({
                x: 0,
                y: 0
              });
            });
            /** @type {?} */


            var dragComplete$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(_this17.pointerUp$, _this17.pointerDown$, cancelDrag$, _this17.destroy$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            /** @type {?} */

            var pointerMove = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([_this17.pointerMove$, scrollContainerScroll$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref40) {
              var _ref41 = _slicedToArray(_ref40, 2),
                  pointerMoveEvent = _ref41[0],
                  scroll = _ref41[1];

              return {
                currentDrag$: currentDrag$,
                transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                clientX: pointerMoveEvent.clientX,
                clientY: pointerMoveEvent.clientY,
                scrollLeft: scroll.left,
                scrollTop: scroll.top
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} moveData
            * @return {?}
            */
            function (moveData) {
              if (_this17.dragSnapGrid.x) {
                moveData.transformX = Math.round(moveData.transformX / _this17.dragSnapGrid.x) * _this17.dragSnapGrid.x;
              }

              if (_this17.dragSnapGrid.y) {
                moveData.transformY = Math.round(moveData.transformY / _this17.dragSnapGrid.y) * _this17.dragSnapGrid.y;
              }

              return moveData;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} moveData
            * @return {?}
            */
            function (moveData) {
              if (!_this17.dragAxis.x) {
                moveData.transformX = 0;
              }

              if (!_this17.dragAxis.y) {
                moveData.transformY = 0;
              }

              return moveData;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} moveData
            * @return {?}
            */
            function (moveData) {
              /** @type {?} */
              var scrollX = moveData.scrollLeft - startScrollPosition.left;
              /** @type {?} */

              var scrollY = moveData.scrollTop - startScrollPosition.top;
              return Object.assign({}, moveData, {
                x: moveData.transformX + scrollX,
                y: moveData.transformY + scrollY
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref42) {
              var x = _ref42.x,
                  y = _ref42.y,
                  transformX = _ref42.transformX,
                  transformY = _ref42.transformY;
              return !_this17.validateDrag || _this17.validateDrag({
                x: x,
                y: y,
                transform: {
                  x: transformX,
                  y: transformY
                }
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(dragComplete$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            /** @type {?} */

            var dragStarted$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            /** @type {?} */

            var dragEnded$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeLast"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            dragStarted$.subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref43) {
              var clientX = _ref43.clientX,
                  clientY = _ref43.clientY,
                  x = _ref43.x,
                  y = _ref43.y;

              _this17.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this17.dragStart.next({
                  cancelDrag$: cancelDrag$
                });
              });

              _this17.scroller = dom_autoscroller__WEBPACK_IMPORTED_MODULE_2___default()([_this17.scrollContainer ? _this17.scrollContainer.elementRef.nativeElement : _this17.document.defaultView], {
                margin: 20,

                /**
                 * @return {?}
                 */
                autoScroll: function autoScroll() {
                  return true;
                }
              });

              _this17.renderer.addClass(_this17.element.nativeElement, _this17.dragActiveClass);

              if (_this17.ghostDragEnabled) {
                /** @type {?} */
                var rect = _this17.element.nativeElement.getBoundingClientRect();
                /** @type {?} */


                var clone =
                /** @type {?} */
                _this17.element.nativeElement.cloneNode(true);

                if (!_this17.showOriginalElementWhileDragging) {
                  _this17.renderer.setStyle(_this17.element.nativeElement, 'visibility', 'hidden');
                }

                if (_this17.ghostElementAppendTo) {
                  _this17.ghostElementAppendTo.appendChild(clone);
                } else {
                  /** @type {?} */
                  _this17.element.nativeElement.parentNode.insertBefore(clone, _this17.element.nativeElement.nextSibling);
                }

                _this17.ghostElement = clone;
                document.body.style.cursor = _this17.dragCursor;

                _this17.setElementStyles(clone, {
                  position: 'fixed',
                  top: "".concat(rect.top, "px"),
                  left: "".concat(rect.left, "px"),
                  width: "".concat(rect.width, "px"),
                  height: "".concat(rect.height, "px"),
                  cursor: _this17.dragCursor,
                  margin: '0',
                  willChange: 'transform',
                  pointerEvents: 'none'
                });

                if (_this17.ghostElementTemplate) {
                  /** @type {?} */
                  var viewRef = _this17.vcr.createEmbeddedView(_this17.ghostElementTemplate);

                  clone.innerHTML = '';
                  viewRef.rootNodes.filter(
                  /**
                  * @param {?} node
                  * @return {?}
                  */
                  function (node) {
                    return node instanceof Node;
                  }).forEach(
                  /**
                  * @param {?} node
                  * @return {?}
                  */
                  function (node) {
                    clone.appendChild(node);
                  });
                  dragEnded$.subscribe(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this17.vcr.remove(_this17.vcr.indexOf(viewRef));
                  });
                }

                _this17.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this17.ghostElementCreated.emit({
                    clientX: clientX - x,
                    clientY: clientY - y,
                    element: clone
                  });
                });

                dragEnded$.subscribe(
                /**
                * @return {?}
                */
                function () {
                  /** @type {?} */
                  clone.parentElement.removeChild(clone);
                  _this17.ghostElement = null;

                  _this17.renderer.setStyle(_this17.element.nativeElement, 'visibility', '');
                });
              }

              _this17.draggableHelper.currentDrag.next(currentDrag$);
            });
            dragEnded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(
            /**
            * @param {?} dragEndData
            * @return {?}
            */
            function (dragEndData) {
              /** @type {?} */
              var dragEndData$ = cancelDrag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["count"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} calledCount
              * @return {?}
              */
              function (calledCount) {
                return Object.assign({}, dragEndData, {
                  dragCancelled: calledCount > 0
                });
              }));
              cancelDrag$.complete();
              return dragEndData$;
            })).subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref44) {
              var x = _ref44.x,
                  y = _ref44.y,
                  dragCancelled = _ref44.dragCancelled;

              _this17.scroller.destroy();

              _this17.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this17.dragEnd.next({
                  x: x,
                  y: y,
                  dragCancelled: dragCancelled
                });
              });

              _this17.renderer.removeClass(_this17.element.nativeElement, _this17.dragActiveClass);

              currentDrag$.complete();
            });
            /** @type {?} */

            var selectionStart$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](
            /**
            * @param {?} observer
            * @return {?}
            */
            function (observer) {
              return _this17.renderer.listen('document', 'selectstart',
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return observer.next(e);
              });
            }); // hack to prevent text getting selected in safari while dragging

            selectionStart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(dragComplete$, dragEnded$))).subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              event.preventDefault();
            });
            return pointerMove;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
          Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return [, value];
          })), pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref45) {
            var _ref46 = _slicedToArray(_ref45, 2),
                previous = _ref46[0],
                next = _ref46[1];

            if (!previous) {
              return true;
            }

            return previous.x !== next.x || previous.y !== next.y;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref47) {
            var _ref48 = _slicedToArray(_ref47, 2),
                previous = _ref48[0],
                next = _ref48[1];

            return next;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_0__["animationFrameScheduler"])).subscribe(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref49) {
            var x = _ref49.x,
                y = _ref49.y,
                currentDrag$ = _ref49.currentDrag$,
                clientX = _ref49.clientX,
                clientY = _ref49.clientY,
                transformX = _ref49.transformX,
                transformY = _ref49.transformY;

            _this17.zone.run(
            /**
            * @return {?}
            */
            function () {
              _this17.dragging.next({
                x: x,
                y: y
              });
            });

            if (_this17.ghostElement) {
              /** @type {?} */
              var transform = "translate3d(".concat(transformX, "px, ").concat(transformY, "px, 0px)");

              _this17.setElementStyles(_this17.ghostElement, {
                transform: transform,
                '-webkit-transform': transform,
                '-ms-transform': transform,
                '-moz-transform': transform,
                '-o-transform': transform
              });
            }

            currentDrag$.next({
              clientX: clientX,
              clientY: clientY,
              dropData: _this17.dropData
            });
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.dragAxis) {
            this.checkEventListeners();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeEventListeners();
          this.pointerDown$.complete();
          this.pointerMove$.complete();
          this.pointerUp$.complete();
          this.destroy$.next();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "checkEventListeners",
        value: function checkEventListeners() {
          var _this18 = this;

          /** @type {?} */
          var canDrag = this.canDrag();
          /** @type {?} */

          var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;

          if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this18.eventListenerSubscriptions.mousedown = _this18.renderer.listen(_this18.element.nativeElement, 'mousedown',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this18.onMouseDown(event);
              });
              _this18.eventListenerSubscriptions.mouseup = _this18.renderer.listen('document', 'mouseup',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this18.onMouseUp(event);
              });
              _this18.eventListenerSubscriptions.touchstart = _this18.renderer.listen(_this18.element.nativeElement, 'touchstart',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this18.onTouchStart(event);
              });
              _this18.eventListenerSubscriptions.touchend = _this18.renderer.listen('document', 'touchend',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this18.onTouchEnd(event);
              });
              _this18.eventListenerSubscriptions.touchcancel = _this18.renderer.listen('document', 'touchcancel',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this18.onTouchEnd(event);
              });
              _this18.eventListenerSubscriptions.mouseenter = _this18.renderer.listen(_this18.element.nativeElement, 'mouseenter',
              /**
              * @return {?}
              */
              function () {
                _this18.onMouseEnter();
              });
              _this18.eventListenerSubscriptions.mouseleave = _this18.renderer.listen(_this18.element.nativeElement, 'mouseleave',
              /**
              * @return {?}
              */
              function () {
                _this18.onMouseLeave();
              });
            });
          } else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          var _this19 = this;

          if (!this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove',
            /**
            * @param {?} mouseMoveEvent
            * @return {?}
            */
            function (mouseMoveEvent) {
              _this19.pointerMove$.next({
                event: mouseMoveEvent,
                clientX: mouseMoveEvent.clientX,
                clientY: mouseMoveEvent.clientY
              });
            });
          }

          this.pointerDown$.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
          });
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onMouseUp",
        value: function onMouseUp(event) {
          if (this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove();
            delete this.eventListenerSubscriptions.mousemove;
          }

          this.pointerUp$.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
          });
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTouchStart",
        value: function onTouchStart(event) {
          var _this20 = this;

          if (!this.scrollContainer) {
            try {
              event.preventDefault();
            } catch (e) {}
          }
          /** @type {?} */


          var hasContainerScrollbar;
          /** @type {?} */

          var startScrollPosition;
          /** @type {?} */

          var isDragActivated;

          if (this.scrollContainer && this.scrollContainer.activeLongPressDrag) {
            this.timeLongPress.timerBegin = Date.now();
            isDragActivated = false;
            hasContainerScrollbar = this.scrollContainer.hasScrollbar();
            startScrollPosition = this.getScrollPosition();
          }

          if (!this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove = this.renderer.listen('document', 'touchmove',
            /**
            * @param {?} touchMoveEvent
            * @return {?}
            */
            function (touchMoveEvent) {
              if (_this20.scrollContainer && _this20.scrollContainer.activeLongPressDrag && !isDragActivated && hasContainerScrollbar) {
                isDragActivated = _this20.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
              }

              if (!_this20.scrollContainer || !_this20.scrollContainer.activeLongPressDrag || !hasContainerScrollbar || isDragActivated) {
                _this20.pointerMove$.next({
                  event: touchMoveEvent,
                  clientX: touchMoveEvent.targetTouches[0].clientX,
                  clientY: touchMoveEvent.targetTouches[0].clientY
                });
              }
            });
          }

          this.pointerDown$.next({
            event: event,
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY
          });
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTouchEnd",
        value: function onTouchEnd(event) {
          if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;

            if (this.scrollContainer && this.scrollContainer.activeLongPressDrag) {
              this.scrollContainer.enableScroll();
            }
          }

          this.pointerUp$.next({
            event: event,
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this.setCursor(this.dragCursor);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.setCursor('');
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "canDrag",
        value: function canDrag() {
          return this.dragAxis.x || this.dragAxis.y;
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setCursor",
        value: function setCursor(value) {
          if (!this.eventListenerSubscriptions.mousemove) {
            this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "unsubscribeEventListeners",
        value: function unsubscribeEventListeners() {
          var _this21 = this;

          Object.keys(this.eventListenerSubscriptions).forEach(
          /**
          * @param {?} type
          * @return {?}
          */
          function (type) {
            /** @type {?} */
            _this21.eventListenerSubscriptions[type]();

            delete
            /** @type {?} */
            _this21.eventListenerSubscriptions[type];
          });
        }
        /**
         * @private
         * @param {?} element
         * @param {?} styles
         * @return {?}
         */

      }, {
        key: "setElementStyles",
        value: function setElementStyles(element, styles) {
          var _this22 = this;

          Object.keys(styles).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            _this22.renderer.setStyle(element, key, styles[key]);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getScrollPosition",
        value: function getScrollPosition() {
          if (this.scrollContainer) {
            return {
              top: this.scrollContainer.elementRef.nativeElement.scrollTop,
              left: this.scrollContainer.elementRef.nativeElement.scrollLeft
            };
          } else {
            return {
              top: window.pageYOffset || document.documentElement.scrollTop,
              left: window.pageXOffset || document.documentElement.scrollLeft
            };
          }
        }
        /**
         * @private
         * @param {?} event
         * @param {?} touchMoveEvent
         * @param {?} startScrollPosition
         * @return {?}
         */

      }, {
        key: "shouldBeginDrag",
        value: function shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
          /** @type {?} */
          var moveScrollPosition = this.getScrollPosition();
          /** @type {?} */

          var deltaScroll = {
            top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
            left: Math.abs(moveScrollPosition.left - startScrollPosition.left)
          };
          /** @type {?} */

          var deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
          /** @type {?} */

          var deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
          /** @type {?} */

          var deltaTotal = deltaX + deltaY;

          if (deltaTotal > this.scrollContainer.longPressConfig.delta || deltaScroll.top > 0 || deltaScroll.left > 0) {
            this.timeLongPress.timerBegin = Date.now();
          }

          this.timeLongPress.timerEnd = Date.now();
          /** @type {?} */

          var duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;

          if (duration >= this.scrollContainer.longPressConfig.duration) {
            this.scrollContainer.disableScroll();
            return true;
          }

          return false;
        }
      }]);

      return DraggableDirective;
    }();

    DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
      return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DraggableScrollContainerDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: DraggableDirective,
      selectors: [["", "mwlDraggable", ""]],
      inputs: {
        dragAxis: "dragAxis",
        dragSnapGrid: "dragSnapGrid",
        ghostDragEnabled: "ghostDragEnabled",
        showOriginalElementWhileDragging: "showOriginalElementWhileDragging",
        dragCursor: "dragCursor",
        dropData: "dropData",
        validateDrag: "validateDrag",
        dragActiveClass: "dragActiveClass",
        ghostElementAppendTo: "ghostElementAppendTo",
        ghostElementTemplate: "ghostElementTemplate"
      },
      outputs: {
        dragPointerDown: "dragPointerDown",
        dragStart: "dragStart",
        ghostElementCreated: "ghostElementCreated",
        dragging: "dragging",
        dragEnd: "dragEnd"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]()]
    });
    /** @nocollapse */

    DraggableDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: DraggableHelper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: DraggableScrollContainerDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    DraggableDirective.propDecorators = {
      dropData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragSnapGrid: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostDragEnabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      showOriginalElementWhileDragging: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      validateDrag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragCursor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragActiveClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostElementAppendTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostElementTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragPointerDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      ghostElementCreated: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragging: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DraggableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlDraggable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: DraggableHelper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: DraggableScrollContainerDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        dragAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragSnapGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ghostDragEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showOriginalElementWhileDragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragPointerDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        ghostElementCreated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dropData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        validateDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragActiveClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ghostElementAppendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ghostElementTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} clientX
     * @param {?} clientY
     * @param {?} rect
     * @return {?}
     */


    function isCoordinateWithinRectangle(clientX, clientY, rect) {
      return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
    }

    var DroppableDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} draggableHelper
       * @param {?} zone
       * @param {?} renderer
       * @param {?} scrollContainer
       */
      function DroppableDirective(element, draggableHelper, zone, renderer, scrollContainer) {
        _classCallCheck(this, DroppableDirective);

        this.element = element;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.renderer = renderer;
        this.scrollContainer = scrollContainer;
        /**
         * Called when a draggable element starts overlapping the element
         */

        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when a draggable element stops overlapping the element
         */

        this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when a draggable element is moved over the element
         */

        this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when a draggable element is dropped on this element
         */

        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // tslint:disable-line no-output-named-after-standard-event
      }
      /**
       * @return {?}
       */


      _createClass(DroppableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(
          /**
          * @param {?} drag$
          * @return {?}
          */
          function (drag$) {
            _this23.renderer.addClass(_this23.element.nativeElement, _this23.dragActiveClass);
            /** @type {?} */


            var droppableElement = {
              updateCache: true
            };
            /** @type {?} */

            var deregisterScrollListener = _this23.renderer.listen(_this23.scrollContainer ? _this23.scrollContainer.elementRef.nativeElement : 'window', 'scroll',
            /**
            * @return {?}
            */
            function () {
              droppableElement.updateCache = true;
            });
            /** @type {?} */


            var currentDragDropData;
            /** @type {?} */

            var overlaps$ = drag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref50) {
              var clientX = _ref50.clientX,
                  clientY = _ref50.clientY,
                  dropData = _ref50.dropData;
              currentDragDropData = dropData;

              if (droppableElement.updateCache) {
                droppableElement.rect = _this23.element.nativeElement.getBoundingClientRect();

                if (_this23.scrollContainer) {
                  droppableElement.scrollContainerRect = _this23.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                }

                droppableElement.updateCache = false;
              }
              /** @type {?} */


              var isWithinElement = isCoordinateWithinRectangle(clientX, clientY,
              /** @type {?} */
              droppableElement.rect);

              if (droppableElement.scrollContainerRect) {
                return isWithinElement && isCoordinateWithinRectangle(clientX, clientY,
                /** @type {?} */
                droppableElement.scrollContainerRect);
              } else {
                return isWithinElement;
              }
            }));
            /** @type {?} */

            var overlapsChanged$ = overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            /** @type {?} */

            var dragOverActive;
            overlapsChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} overlapsNow
            * @return {?}
            */
            function (overlapsNow) {
              return overlapsNow;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              dragOverActive = true;

              _this23.renderer.addClass(_this23.element.nativeElement, _this23.dragOverClass);

              _this23.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this23.dragEnter.next({
                  dropData: currentDragDropData
                });
              });
            });
            overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} overlapsNow
            * @return {?}
            */
            function (overlapsNow) {
              return overlapsNow;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this23.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this23.dragOver.next({
                  dropData: currentDragDropData
                });
              });
            });
            overlapsChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref51) {
              var _ref52 = _slicedToArray(_ref51, 2),
                  didOverlap = _ref52[0],
                  overlapsNow = _ref52[1];

              return didOverlap && !overlapsNow;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              dragOverActive = false;

              _this23.renderer.removeClass(_this23.element.nativeElement, _this23.dragOverClass);

              _this23.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this23.dragLeave.next({
                  dropData: currentDragDropData
                });
              });
            });
            drag$.subscribe({
              complete:
              /**
              * @return {?}
              */
              function complete() {
                deregisterScrollListener();

                _this23.renderer.removeClass(_this23.element.nativeElement, _this23.dragActiveClass);

                if (dragOverActive) {
                  _this23.renderer.removeClass(_this23.element.nativeElement, _this23.dragOverClass);

                  _this23.zone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this23.drop.next({
                      dropData: currentDragDropData
                    });
                  });
                }
              }
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.currentDragSubscription) {
            this.currentDragSubscription.unsubscribe();
          }
        }
      }]);

      return DroppableDirective;
    }();

    DroppableDirective.ɵfac = function DroppableDirective_Factory(t) {
      return new (t || DroppableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DraggableScrollContainerDirective, 8));
    };

    DroppableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: DroppableDirective,
      selectors: [["", "mwlDroppable", ""]],
      inputs: {
        dragOverClass: "dragOverClass",
        dragActiveClass: "dragActiveClass"
      },
      outputs: {
        dragEnter: "dragEnter",
        dragLeave: "dragLeave",
        dragOver: "dragOver",
        drop: "drop"
      }
    });
    /** @nocollapse */

    DroppableDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: DraggableHelper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: DraggableScrollContainerDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    DroppableDirective.propDecorators = {
      dragOverClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragActiveClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      drop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DroppableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlDroppable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: DraggableHelper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: DraggableScrollContainerDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        dragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        drop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragOverClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragActiveClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DragAndDropModule = function DragAndDropModule() {
      _classCallCheck(this, DragAndDropModule);
    };

    DragAndDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: DragAndDropModule
    });
    DragAndDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function DragAndDropModule_Factory(t) {
        return new (t || DragAndDropModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DragAndDropModule, {
        declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
        exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DragAndDropModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
          exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-draggable-droppable.js.map

    /***/

  },

  /***/
  "./node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js ***!
    \***************************************************************************************************/

  /*! exports provided: ResizableDirective, ResizeHandleDirective, ResizableModule */

  /***/
  function node_modulesAngularResizableElement__ivy_ngcc__Fesm2015AngularResizableElementJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizableDirective", function () {
      return ResizableDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizeHandleDirective", function () {
      return ResizeHandleDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizableModule", function () {
      return ResizableModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value1
     * @param {?} value2
     * @param {?=} precision
     * @return {?}
     */


    function isNumberCloseTo(value1, value2) {
      var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

      /** @type {?} */
      var diff = Math.abs(value1 - value2);
      return diff < precision;
    }
    /**
     * @param {?} startingRect
     * @param {?} edges
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */


    function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
      /** @type {?} */
      var newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
      };

      if (edges.top) {
        newBoundingRect.top += clientY;
      }

      if (edges.bottom) {
        newBoundingRect.bottom += clientY;
      }

      if (edges.left) {
        newBoundingRect.left += clientX;
      }

      if (edges.right) {
        newBoundingRect.right += clientX;
      }

      newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
      newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
      return newBoundingRect;
    }
    /**
     * @param {?} element
     * @param {?} ghostElementPositioning
     * @return {?}
     */


    function getElementRect(element, ghostElementPositioning) {
      /** @type {?} */
      var translateX = 0;
      /** @type {?} */

      var translateY = 0;
      /** @type {?} */

      var style = element.nativeElement.style;
      /** @type {?} */

      var transformProperties = ['transform', '-ms-transform', '-moz-transform', '-o-transform'];
      /** @type {?} */

      var transform = transformProperties.map(function (property) {
        return style[property];
      }).find(function (value) {
        return !!value;
      });

      if (transform && transform.includes('translate')) {
        translateX = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$1');
        translateY = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$2');
      }

      if (ghostElementPositioning === 'absolute') {
        return {
          height: element.nativeElement.offsetHeight,
          width: element.nativeElement.offsetWidth,
          top: element.nativeElement.offsetTop - translateY,
          bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop - translateY,
          left: element.nativeElement.offsetLeft - translateX,
          right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft - translateX
        };
      } else {
        /** @type {?} */
        var boundingRect = element.nativeElement.getBoundingClientRect();
        return {
          height: boundingRect.height,
          width: boundingRect.width,
          top: boundingRect.top - translateY,
          bottom: boundingRect.bottom - translateY,
          left: boundingRect.left - translateX,
          right: boundingRect.right - translateX,
          scrollTop: element.nativeElement.scrollTop,
          scrollLeft: element.nativeElement.scrollLeft
        };
      }
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function isWithinBoundingY(_ref53) {
      var clientY = _ref53.clientY,
          rect = _ref53.rect;
      return clientY >= rect.top && clientY <= rect.bottom;
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function isWithinBoundingX(_ref54) {
      var clientX = _ref54.clientX,
          rect = _ref54.rect;
      return clientX >= rect.left && clientX <= rect.right;
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function getResizeEdges(_ref55) {
      var clientX = _ref55.clientX,
          clientY = _ref55.clientY,
          elm = _ref55.elm,
          allowedEdges = _ref55.allowedEdges,
          cursorPrecision = _ref55.cursorPrecision;

      /** @type {?} */
      var elmPosition = elm.nativeElement.getBoundingClientRect();
      /** @type {?} */

      var edges = {};

      if (allowedEdges.left && isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) && isWithinBoundingY({
        clientY: clientY,
        rect: elmPosition
      })) {
        edges.left = true;
      }

      if (allowedEdges.right && isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) && isWithinBoundingY({
        clientY: clientY,
        rect: elmPosition
      })) {
        edges.right = true;
      }

      if (allowedEdges.top && isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) && isWithinBoundingX({
        clientX: clientX,
        rect: elmPosition
      })) {
        edges.top = true;
      }

      if (allowedEdges.bottom && isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) && isWithinBoundingX({
        clientX: clientX,
        rect: elmPosition
      })) {
        edges.bottom = true;
      }

      return edges;
    }
    /** @type {?} */


    var DEFAULT_RESIZE_CURSORS = Object.freeze({
      topLeft: 'nw-resize',
      topRight: 'ne-resize',
      bottomLeft: 'sw-resize',
      bottomRight: 'se-resize',
      leftOrRight: 'col-resize',
      topOrBottom: 'row-resize'
    });
    /**
     * @param {?} edges
     * @param {?} cursors
     * @return {?}
     */

    function getResizeCursor(edges, cursors) {
      if (edges.left && edges.top) {
        return cursors.topLeft;
      } else if (edges.right && edges.top) {
        return cursors.topRight;
      } else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
      } else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
      } else if (edges.left || edges.right) {
        return cursors.leftOrRight;
      } else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
      } else {
        return '';
      }
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function getEdgesDiff(_ref56) {
      var edges = _ref56.edges,
          initialRectangle = _ref56.initialRectangle,
          newRectangle = _ref56.newRectangle;

      /** @type {?} */
      var edgesDiff = {};
      Object.keys(edges).forEach(function (edge) {
        edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
      });
      return edgesDiff;
    }
    /** @type {?} */


    var RESIZE_ACTIVE_CLASS = 'resize-active';
    /** @type {?} */

    var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
    /** @type {?} */

    var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
    /** @type {?} */

    var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
    /** @type {?} */

    var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
    /** @type {?} */

    var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
    /** @type {?} */

    var MOUSE_MOVE_THROTTLE_MS = 50;
    /**
     * Place this on an element to make it resizable. For example:
     *
     * ```html
     * <div
     *   mwlResizable
     *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
     *   [enableGhostResize]="true">
     * </div>
     * ```
     */

    var ResizableDirective =
    /*#__PURE__*/
    function () {
      /**
       * @hidden
       * @param {?} platformId
       * @param {?} renderer
       * @param {?} elm
       * @param {?} zone
       */
      function ResizableDirective(platformId, renderer, elm, zone) {
        _classCallCheck(this, ResizableDirective);

        this.platformId = platformId;
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
         */

        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */

        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */

        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */

        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
         */

        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */

        this.ghostElementPositioning = 'fixed';
        /**
         * Allow elements to be resized to negative dimensions
         */

        this.allowNegativeResizes = false;
        /**
         * The mouse move throttle in milliseconds, default: 50 ms
         */

        this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */

        this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */

        this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */

        this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @hidden
         */

        this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * @hidden
         */

        this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * @hidden
         */

        this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.resizeEdges$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(ResizableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          /** @type {?} */
          var mousedown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerDown, this.mousedown);
          /** @type {?} */

          var mousemove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerMove, this.mousemove).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_ref57) {
            var event = _ref57.event;

            if (currentResize) {
              event.preventDefault();
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
          /** @type {?} */

          var mouseup$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerUp, this.mouseup);
          /** @type {?} */

          var currentResize;
          /** @type {?} */

          var removeGhostElement = function removeGhostElement() {
            if (currentResize && currentResize.clonedNode) {
              _this24.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);

              _this24.renderer.setStyle(_this24.elm.nativeElement, 'visibility', 'inherit');
            }
          };
          /** @type {?} */


          var getResizeCursors = function getResizeCursors() {
            return Object.assign({}, DEFAULT_RESIZE_CURSORS, _this24.resizeCursors);
          };

          this.resizeEdges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.resizeEdges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this24.resizeEdges && Object.keys(_this24.resizeEdges).some(function (edge) {
              return !!_this24.resizeEdges[edge];
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (legacyResizeEdgesEnabled) {
            return legacyResizeEdgesEnabled ? mousemove$ : rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(this.mouseMoveThrottleMS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (_ref58) {
            var clientX = _ref58.clientX,
                clientY = _ref58.clientY;

            /** @type {?} */
            var resizeEdges = getResizeEdges({
              clientX: clientX,
              clientY: clientY,
              elm: _this24.elm,
              allowedEdges: _this24.resizeEdges,
              cursorPrecision: _this24.resizeCursorPrecision
            });
            /** @type {?} */

            var resizeCursors = getResizeCursors();

            if (!currentResize) {
              /** @type {?} */
              var cursor = getResizeCursor(resizeEdges, resizeCursors);

              _this24.renderer.setStyle(_this24.elm.nativeElement, 'cursor', cursor);
            }

            _this24.setElementClass(_this24.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);

            _this24.setElementClass(_this24.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);

            _this24.setElementClass(_this24.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);

            _this24.setElementClass(_this24.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
          });
          /** @type {?} */

          var mousedrag = mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (startCoords) {
            /**
             * @param {?} moveCoords
             * @return {?}
             */
            function getDiff(moveCoords) {
              return {
                clientX: moveCoords.clientX - startCoords.clientX,
                clientY: moveCoords.clientY - startCoords.clientY
              };
            }
            /** @type {?} */


            var getSnapGrid = function getSnapGrid() {
              /** @type {?} */
              var snapGrid = {
                x: 1,
                y: 1
              };

              if (currentResize) {
                if (_this24.resizeSnapGrid.left && currentResize.edges.left) {
                  snapGrid.x = +_this24.resizeSnapGrid.left;
                } else if (_this24.resizeSnapGrid.right && currentResize.edges.right) {
                  snapGrid.x = +_this24.resizeSnapGrid.right;
                }

                if (_this24.resizeSnapGrid.top && currentResize.edges.top) {
                  snapGrid.y = +_this24.resizeSnapGrid.top;
                } else if (_this24.resizeSnapGrid.bottom && currentResize.edges.bottom) {
                  snapGrid.y = +_this24.resizeSnapGrid.bottom;
                }
              }

              return snapGrid;
            };
            /**
             * @param {?} coords
             * @param {?} snapGrid
             * @return {?}
             */


            function getGrid(coords, snapGrid) {
              return {
                x: Math.ceil(coords.clientX / snapGrid.x),
                y: Math.ceil(coords.clientY / snapGrid.y)
              };
            }

            return (
              /** @type {?} */
              Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (coords) {
                return [, coords];
              })), mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref59) {
                var _ref60 = _slicedToArray(_ref59, 2),
                    previousCoords = _ref60[0],
                    newCoords = _ref60[1];

                return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_ref61) {
                var _ref62 = _slicedToArray(_ref61, 2),
                    previousCoords = _ref62[0],
                    newCoords = _ref62[1];

                if (!previousCoords) {
                  return true;
                }
                /** @type {?} */


                var snapGrid = getSnapGrid();
                /** @type {?} */

                var previousGrid = getGrid(previousCoords, snapGrid);
                /** @type {?} */

                var newGrid = getGrid(newCoords, snapGrid);
                return previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y;
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref63) {
                var _ref64 = _slicedToArray(_ref63, 2),
                    newCoords = _ref64[1];

                /** @type {?} */
                var snapGrid = getSnapGrid();
                return {
                  clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                  clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(mouseup$, mousedown$)))
            );
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function () {
            return !!currentResize;
          }));
          mousedrag.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref65) {
            var clientX = _ref65.clientX,
                clientY = _ref65.clientY;
            return getNewBoundingRectangle(
            /** @type {?} */
            currentResize.startingRect,
            /** @type {?} */
            currentResize.edges, clientX, clientY);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newBoundingRect) {
            return _this24.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newBoundingRect) {
            return _this24.validateResize ? _this24.validateResize({
              rectangle: newBoundingRect,
              edges: getEdgesDiff({
                edges:
                /** @type {?} */
                currentResize.edges,
                initialRectangle:
                /** @type {?} */
                currentResize.startingRect,
                newRectangle: newBoundingRect
              })
            }) : true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (newBoundingRect) {
            if (currentResize && currentResize.clonedNode) {
              _this24.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(newBoundingRect.height, "px"));

              _this24.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(newBoundingRect.width, "px"));

              _this24.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(newBoundingRect.top, "px"));

              _this24.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(newBoundingRect.left, "px"));
            }

            _this24.zone.run(function () {
              _this24.resizing.emit({
                edges: getEdgesDiff({
                  edges:
                  /** @type {?} */
                  currentResize.edges,
                  initialRectangle:
                  /** @type {?} */
                  currentResize.startingRect,
                  newRectangle: newBoundingRect
                }),
                rectangle: newBoundingRect
              });
            });

            /** @type {?} */
            currentResize.currentRect = newBoundingRect;
          });
          mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref66) {
            var clientX = _ref66.clientX,
                clientY = _ref66.clientY,
                edges = _ref66.edges;
            return edges || getResizeEdges({
              clientX: clientX,
              clientY: clientY,
              elm: _this24.elm,
              allowedEdges: _this24.resizeEdges,
              cursorPrecision: _this24.resizeCursorPrecision
            });
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (edges) {
            return Object.keys(edges).length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (edges) {
            if (currentResize) {
              removeGhostElement();
            }
            /** @type {?} */


            var startingRect = getElementRect(_this24.elm, _this24.ghostElementPositioning);
            currentResize = {
              edges: edges,
              startingRect: startingRect,
              currentRect: startingRect
            };
            /** @type {?} */

            var resizeCursors = getResizeCursors();
            /** @type {?} */

            var cursor = getResizeCursor(currentResize.edges, resizeCursors);

            _this24.renderer.setStyle(document.body, 'cursor', cursor);

            _this24.setElementClass(_this24.elm, RESIZE_ACTIVE_CLASS, true);

            if (_this24.enableGhostResize) {
              currentResize.clonedNode = _this24.elm.nativeElement.cloneNode(true);

              _this24.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);

              _this24.renderer.setStyle(_this24.elm.nativeElement, 'visibility', 'hidden');

              _this24.renderer.setStyle(currentResize.clonedNode, 'position', _this24.ghostElementPositioning);

              _this24.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(currentResize.startingRect.left, "px"));

              _this24.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(currentResize.startingRect.top, "px"));

              _this24.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(currentResize.startingRect.height, "px"));

              _this24.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(currentResize.startingRect.width, "px"));

              _this24.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));

              _this24.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);

              /** @type {?} */
              currentResize.clonedNode.scrollTop =
              /** @type {?} */
              currentResize.startingRect.scrollTop;

              /** @type {?} */
              currentResize.clonedNode.scrollLeft =
              /** @type {?} */
              currentResize.startingRect.scrollLeft;
            }

            _this24.zone.run(function () {
              _this24.resizeStart.emit({
                edges: getEdgesDiff({
                  edges: edges,
                  initialRectangle: startingRect,
                  newRectangle: startingRect
                }),
                rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
              });
            });
          });
          mouseup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function () {
            if (currentResize) {
              _this24.renderer.removeClass(_this24.elm.nativeElement, RESIZE_ACTIVE_CLASS);

              _this24.renderer.setStyle(document.body, 'cursor', '');

              _this24.renderer.setStyle(_this24.elm.nativeElement, 'cursor', '');

              _this24.zone.run(function () {
                _this24.resizeEnd.emit({
                  edges: getEdgesDiff({
                    edges:
                    /** @type {?} */
                    currentResize.edges,
                    initialRectangle:
                    /** @type {?} */
                    currentResize.startingRect,
                    newRectangle:
                    /** @type {?} */
                    currentResize.currentRect
                  }),
                  rectangle:
                  /** @type {?} */
                  currentResize.currentRect
                });
              });

              removeGhostElement();
              currentResize = null;
            }
          });
        }
        /**
         * @hidden
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.resizeEdges) {
            this.resizeEdges$.next(this.resizeEdges);
          }
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // browser check for angular universal, because it doesn't know what document is
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.renderer.setStyle(document.body, 'cursor', '');
          }

          this.mousedown.complete();
          this.mouseup.complete();
          this.mousemove.complete();
          this.resizeEdges$.complete();
          this.destroy$.next();
        }
        /**
         * @private
         * @param {?} elm
         * @param {?} name
         * @param {?} add
         * @return {?}
         */

      }, {
        key: "setElementClass",
        value: function setElementClass(elm, name, add) {
          if (add) {
            this.renderer.addClass(elm.nativeElement, name);
          } else {
            this.renderer.removeClass(elm.nativeElement, name);
          }
        }
      }]);

      return ResizableDirective;
    }();

    ResizableDirective.ɵfac = function ResizableDirective_Factory(t) {
      return new (t || ResizableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
    };

    ResizableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: ResizableDirective,
      selectors: [["", "mwlResizable", ""]],
      inputs: {
        resizeEdges: "resizeEdges",
        enableGhostResize: "enableGhostResize",
        resizeSnapGrid: "resizeSnapGrid",
        resizeCursors: "resizeCursors",
        resizeCursorPrecision: "resizeCursorPrecision",
        ghostElementPositioning: "ghostElementPositioning",
        allowNegativeResizes: "allowNegativeResizes",
        mouseMoveThrottleMS: "mouseMoveThrottleMS",
        validateResize: "validateResize"
      },
      outputs: {
        resizeStart: "resizeStart",
        resizing: "resizing",
        resizeEnd: "resizeEnd"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]()]
    });
    /** @nocollapse */

    ResizableDirective.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }];
    };

    ResizableDirective.propDecorators = {
      validateResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeEdges: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      enableGhostResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeSnapGrid: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeCursors: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeCursorPrecision: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostElementPositioning: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      allowNegativeResizes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      mouseMoveThrottleMS: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      resizing: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      resizeEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ResizableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlResizable]'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      }, {
        resizeEdges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        enableGhostResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeSnapGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeCursors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeCursorPrecision: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ghostElementPositioning: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        allowNegativeResizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        mouseMoveThrottleMS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        resizing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        resizeEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        validateResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    var PointerEventListeners =
    /*#__PURE__*/
    function () {
      _createClass(PointerEventListeners, null, [{
        key: "getInstance",
        // tslint:disable-line

        /**
         * @param {?} renderer
         * @param {?} zone
         * @return {?}
         */
        value: function getInstance(renderer, zone) {
          if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
          }

          return PointerEventListeners.instance;
        }
        /**
         * @param {?} renderer
         * @param {?} zone
         */

      }]);

      function PointerEventListeners(renderer, zone) {
        _classCallCheck(this, PointerEventListeners);

        this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          /** @type {?} */
          var unsubscribeMouseDown;
          /** @type {?} */

          var unsubscribeTouchStart;
          zone.runOutsideAngular(function () {
            unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event: event
              });
            });
            unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
              observer.next({
                clientX: event.touches[0].clientX,
                clientY: event.touches[0].clientY,
                event: event
              });
            });
          });
          return function () {
            unsubscribeMouseDown();
            unsubscribeTouchStart();
          };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          /** @type {?} */
          var unsubscribeMouseMove;
          /** @type {?} */

          var unsubscribeTouchMove;
          zone.runOutsideAngular(function () {
            unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event: event
              });
            });
            unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
              observer.next({
                clientX: event.targetTouches[0].clientX,
                clientY: event.targetTouches[0].clientY,
                event: event
              });
            });
          });
          return function () {
            unsubscribeMouseMove();
            unsubscribeTouchMove();
          };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          /** @type {?} */
          var unsubscribeMouseUp;
          /** @type {?} */

          var unsubscribeTouchEnd;
          /** @type {?} */

          var unsubscribeTouchCancel;
          zone.runOutsideAngular(function () {
            unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event: event
              });
            });
            unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
              observer.next({
                clientX: event.changedTouches[0].clientX,
                clientY: event.changedTouches[0].clientY,
                event: event
              });
            });
            unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
              observer.next({
                clientX: event.changedTouches[0].clientX,
                clientY: event.changedTouches[0].clientY,
                event: event
              });
            });
          });
          return function () {
            unsubscribeMouseUp();
            unsubscribeTouchEnd();
            unsubscribeTouchCancel();
          };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
      }

      return PointerEventListeners;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
     *
     * For example
     *
     * ```html
     * <div mwlResizable>
     *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
     * </div>
     * ```
     */


    var ResizeHandleDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} renderer
       * @param {?} element
       * @param {?} zone
       * @param {?} resizable
       */
      function ResizeHandleDirective(renderer, element, zone, resizable) {
        _classCallCheck(this, ResizeHandleDirective);

        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        this.resizable = resizable;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */

        this.resizeEdges = {};
        this.eventListeners = {};
      }
      /**
       * @return {?}
       */


      _createClass(ResizeHandleDirective, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeEventListeners();
        }
        /**
         * @hidden
         * @param {?} event
         * @param {?} clientX
         * @param {?} clientY
         * @return {?}
         */

      }, {
        key: "onMousedown",
        value: function onMousedown(event, clientX, clientY) {
          var _this25 = this;

          event.preventDefault();
          this.zone.runOutsideAngular(function () {
            if (!_this25.eventListeners.touchmove) {
              _this25.eventListeners.touchmove = _this25.renderer.listen(_this25.element.nativeElement, 'touchmove', function (touchMoveEvent) {
                _this25.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
              });
            }

            if (!_this25.eventListeners.mousemove) {
              _this25.eventListeners.mousemove = _this25.renderer.listen(_this25.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
                _this25.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
              });
            }

            _this25.resizable.mousedown.next({
              clientX: clientX,
              clientY: clientY,
              edges: _this25.resizeEdges
            });
          });
        }
        /**
         * @hidden
         * @param {?} clientX
         * @param {?} clientY
         * @return {?}
         */

      }, {
        key: "onMouseup",
        value: function onMouseup(clientX, clientY) {
          var _this26 = this;

          this.zone.runOutsideAngular(function () {
            _this26.unsubscribeEventListeners();

            _this26.resizable.mouseup.next({
              clientX: clientX,
              clientY: clientY,
              edges: _this26.resizeEdges
            });
          });
        }
        /**
         * @private
         * @param {?} event
         * @param {?} clientX
         * @param {?} clientY
         * @return {?}
         */

      }, {
        key: "onMousemove",
        value: function onMousemove(event, clientX, clientY) {
          this.resizable.mousemove.next({
            clientX: clientX,
            clientY: clientY,
            edges: this.resizeEdges,
            event: event
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "unsubscribeEventListeners",
        value: function unsubscribeEventListeners() {
          var _this27 = this;

          Object.keys(this.eventListeners).forEach(function (type) {
            /** @type {?} */
            _this27.eventListeners[type]();

            delete _this27.eventListeners[type];
          });
        }
      }]);

      return ResizeHandleDirective;
    }();

    ResizeHandleDirective.ɵfac = function ResizeHandleDirective_Factory(t) {
      return new (t || ResizeHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ResizableDirective));
    };

    ResizeHandleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: ResizeHandleDirective,
      selectors: [["", "mwlResizeHandle", ""]],
      hostBindings: function ResizeHandleDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("touchstart", function ResizeHandleDirective_touchstart_HostBindingHandler($event) {
            return ctx.onMousedown($event, $event.touches[0].clientX, $event.touches[0].clientY);
          })("mousedown", function ResizeHandleDirective_mousedown_HostBindingHandler($event) {
            return ctx.onMousedown($event, $event.clientX, $event.clientY);
          })("touchend", function ResizeHandleDirective_touchend_HostBindingHandler($event) {
            return ctx.onMouseup($event.changedTouches[0].clientX, $event.changedTouches[0].clientY);
          })("touchcancel", function ResizeHandleDirective_touchcancel_HostBindingHandler($event) {
            return ctx.onMouseup($event.changedTouches[0].clientX, $event.changedTouches[0].clientY);
          })("mouseup", function ResizeHandleDirective_mouseup_HostBindingHandler($event) {
            return ctx.onMouseup($event.clientX, $event.clientY);
          });
        }
      },
      inputs: {
        resizeEdges: "resizeEdges"
      }
    });
    /** @nocollapse */

    ResizeHandleDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: ResizableDirective
      }];
    };

    ResizeHandleDirective.propDecorators = {
      resizeEdges: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      onMousedown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['touchstart', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['mousedown', ['$event', '$event.clientX', '$event.clientY']]
      }],
      onMouseup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['touchend', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['touchcancel', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['mouseup', ['$event.clientX', '$event.clientY']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ResizeHandleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlResizeHandle]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: ResizableDirective
        }];
      }, {
        resizeEdges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['touchstart', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mousedown', ['$event', '$event.clientX', '$event.clientY']]
        }],
        onMouseup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['touchend', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['touchcancel', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mouseup', ['$event.clientX', '$event.clientY']]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ResizableModule = function ResizableModule() {
      _classCallCheck(this, ResizableModule);
    };

    ResizableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: ResizableModule
    });
    ResizableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function ResizableModule_Factory(t) {
        return new (t || ResizableModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ResizableModule, {
        declarations: [ResizableDirective, ResizeHandleDirective],
        exports: [ResizableDirective, ResizeHandleDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ResizableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [ResizableDirective, ResizeHandleDirective],
          exports: [ResizableDirective, ResizeHandleDirective]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-resizable-element.js.map

    /***/

  },

  /***/
  "./node_modules/animation-frame-polyfill/lib/animation-frame-polyfill.cjs.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/animation-frame-polyfill/lib/animation-frame-polyfill.cjs.js ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAnimationFramePolyfillLibAnimationFramePolyfillCjsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var prefix = ['webkit', 'moz', 'ms', 'o'];

    var requestAnimationFrame = exports.requestAnimationFrame = function () {
      for (var i = 0, limit = prefix.length; i < limit && !window.requestAnimationFrame; ++i) {
        window.requestAnimationFrame = window[prefix[i] + 'RequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame) {
        (function () {
          var lastTime = 0;

          window.requestAnimationFrame = function (callback) {
            var now = new Date().getTime();
            var ttc = Math.max(0, 16 - now - lastTime);
            var timer = window.setTimeout(function () {
              return callback(now + ttc);
            }, ttc);
            lastTime = now + ttc;
            return timer;
          };
        })();
      }

      return window.requestAnimationFrame.bind(window);
    }();

    var cancelAnimationFrame = exports.cancelAnimationFrame = function () {
      for (var i = 0, limit = prefix.length; i < limit && !window.cancelAnimationFrame; ++i) {
        window.cancelAnimationFrame = window[prefix[i] + 'CancelAnimationFrame'] || window[prefix[i] + 'CancelRequestAnimationFrame'];
      }

      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (timer) {
          window.clearTimeout(timer);
        };
      }

      return window.cancelAnimationFrame.bind(window);
    }();
    /***/

  },

  /***/
  "./node_modules/array-from/index.js":
  /*!******************************************!*\
    !*** ./node_modules/array-from/index.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesArrayFromIndexJs(module, exports, __webpack_require__) {
    module.exports = typeof Array.from === 'function' ? Array.from : __webpack_require__(
    /*! ./polyfill */
    "./node_modules/array-from/polyfill.js");
    /***/
  },

  /***/
  "./node_modules/array-from/polyfill.js":
  /*!*********************************************!*\
    !*** ./node_modules/array-from/polyfill.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesArrayFromPolyfillJs(module, exports) {
    // Production steps of ECMA-262, Edition 6, 22.1.2.1
    // Reference: http://www.ecma-international.org/ecma-262/6.0/#sec-array.from
    module.exports = function () {
      var isCallable = function isCallable(fn) {
        return typeof fn === 'function';
      };

      var toInteger = function toInteger(value) {
        var number = Number(value);

        if (isNaN(number)) {
          return 0;
        }

        if (number === 0 || !isFinite(number)) {
          return number;
        }

        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };

      var maxSafeInteger = Math.pow(2, 53) - 1;

      var toLength = function toLength(value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      };

      var iteratorProp = function iteratorProp(value) {
        if (value != null) {
          if (['string', 'number', 'boolean', 'symbol'].indexOf(typeof value) > -1) {
            return Symbol.iterator;
          } else if (typeof Symbol !== 'undefined' && 'iterator' in Symbol && Symbol.iterator in value) {
            return Symbol.iterator;
          } // Support "@@iterator" placeholder, Gecko 27 to Gecko 35
          else if ('@@iterator' in value) {
              return '@@iterator';
            }
        }
      };

      var getMethod = function getMethod(O, P) {
        // Assert: IsPropertyKey(P) is true.
        if (O != null && P != null) {
          // Let func be GetV(O, P).
          var func = O[P]; // ReturnIfAbrupt(func).
          // If func is either undefined or null, return undefined.

          if (func == null) {
            return void 0;
          } // If IsCallable(func) is false, throw a TypeError exception.


          if (!isCallable(func)) {
            throw new TypeError(func + ' is not a function');
          }

          return func;
        }
      };

      var iteratorStep = function iteratorStep(iterator) {
        // Let result be IteratorNext(iterator).
        // ReturnIfAbrupt(result).
        var result = iterator.next(); // Let done be IteratorComplete(result).
        // ReturnIfAbrupt(done).

        var done = Boolean(result.done); // If done is true, return false.

        if (done) {
          return false;
        } // Return result.


        return result;
      }; // The length property of the from method is 1.


      return function from(items
      /*, mapFn, thisArg */
      ) {
        'use strict'; // 1. Let C be the this value.

        var C = this; // 2. If mapfn is undefined, let mapping be false.

        var mapFn = arguments.length > 1 ? arguments[1] : void 0;
        var T;

        if (typeof mapFn !== 'undefined') {
          // 3. else
          //   a. If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          } //   b. If thisArg was supplied, let T be thisArg; else let T
          //      be undefined.


          if (arguments.length > 2) {
            T = arguments[2];
          } //   c. Let mapping be true (implied by mapFn)

        }

        var A, k; // 4. Let usingIterator be GetMethod(items, @@iterator).
        // 5. ReturnIfAbrupt(usingIterator).

        var usingIterator = getMethod(items, iteratorProp(items)); // 6. If usingIterator is not undefined, then

        if (usingIterator !== void 0) {
          // a. If IsConstructor(C) is true, then
          //   i. Let A be the result of calling the [[Construct]]
          //      internal method of C with an empty argument list.
          // b. Else,
          //   i. Let A be the result of the abstract operation ArrayCreate
          //      with argument 0.
          // c. ReturnIfAbrupt(A).
          A = isCallable(C) ? Object(new C()) : []; // d. Let iterator be GetIterator(items, usingIterator).

          var iterator = usingIterator.call(items); // e. ReturnIfAbrupt(iterator).

          if (iterator == null) {
            throw new TypeError('Array.from requires an array-like or iterable object');
          } // f. Let k be 0.


          k = 0; // g. Repeat

          var next, nextValue;

          while (true) {
            // i. Let Pk be ToString(k).
            // ii. Let next be IteratorStep(iterator).
            // iii. ReturnIfAbrupt(next).
            next = iteratorStep(iterator); // iv. If next is false, then

            if (!next) {
              // 1. Let setStatus be Set(A, "length", k, true).
              // 2. ReturnIfAbrupt(setStatus).
              A.length = k; // 3. Return A.

              return A;
            } // v. Let nextValue be IteratorValue(next).
            // vi. ReturnIfAbrupt(nextValue)


            nextValue = next.value; // vii. If mapping is true, then
            //   1. Let mappedValue be Call(mapfn, T, «nextValue, k»).
            //   2. If mappedValue is an abrupt completion, return
            //      IteratorClose(iterator, mappedValue).
            //   3. Let mappedValue be mappedValue.[[value]].
            // viii. Else, let mappedValue be nextValue.
            // ix.  Let defineStatus be the result of
            //      CreateDataPropertyOrThrow(A, Pk, mappedValue).
            // x. [TODO] If defineStatus is an abrupt completion, return
            //    IteratorClose(iterator, defineStatus).

            if (mapFn) {
              A[k] = mapFn.call(T, nextValue, k);
            } else {
              A[k] = nextValue;
            } // xi. Increase k by 1.


            k++;
          } // 7. Assert: items is not an Iterable so assume it is
          //    an array-like object.

        } else {
          // 8. Let arrayLike be ToObject(items).
          var arrayLike = Object(items); // 9. ReturnIfAbrupt(items).

          if (items == null) {
            throw new TypeError('Array.from requires an array-like object - not null or undefined');
          } // 10. Let len be ToLength(Get(arrayLike, "length")).
          // 11. ReturnIfAbrupt(len).


          var len = toLength(arrayLike.length); // 12. If IsConstructor(C) is true, then
          //     a. Let A be Construct(C, «len»).
          // 13. Else
          //     a. Let A be ArrayCreate(len).
          // 14. ReturnIfAbrupt(A).

          A = isCallable(C) ? Object(new C(len)) : new Array(len); // 15. Let k be 0.

          k = 0; // 16. Repeat, while k < len… (also steps a - h)

          var kValue;

          while (k < len) {
            kValue = arrayLike[k];

            if (mapFn) {
              A[k] = mapFn.call(T, kValue, k);
            } else {
              A[k] = kValue;
            }

            k++;
          } // 17. Let setStatus be Set(A, "length", len, true).
          // 18. ReturnIfAbrupt(setStatus).


          A.length = len; // 19. Return A.
        }

        return A;
      };
    }();
    /***/

  },

  /***/
  "./node_modules/calendar-utils/calendar-utils.js":
  /*!*******************************************************!*\
    !*** ./node_modules/calendar-utils/calendar-utils.js ***!
    \*******************************************************/

  /*! exports provided: DAYS_OF_WEEK, SECONDS_IN_DAY, getEventsInPeriod, getWeekViewHeader, getDifferenceInDaysWithExclusions, getWeekView, getMonthView, EventValidationErrorMessage, validateEvents */

  /***/
  function node_modulesCalendarUtilsCalendarUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function () {
      return DAYS_OF_WEEK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SECONDS_IN_DAY", function () {
      return SECONDS_IN_DAY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getEventsInPeriod", function () {
      return getEventsInPeriod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewHeader", function () {
      return getWeekViewHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDifferenceInDaysWithExclusions", function () {
      return getDifferenceInDaysWithExclusions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekView", function () {
      return getWeekView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMonthView", function () {
      return getMonthView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventValidationErrorMessage", function () {
      return EventValidationErrorMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateEvents", function () {
      return validateEvents;
    });

    var __assign = undefined && undefined.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    var DAYS_OF_WEEK;

    (function (DAYS_OF_WEEK) {
      DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
    })(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));

    var DEFAULT_WEEKEND_DAYS = [DAYS_OF_WEEK.SUNDAY, DAYS_OF_WEEK.SATURDAY];
    var DAYS_IN_WEEK = 7;
    var HOURS_IN_DAY = 24;
    var MINUTES_IN_HOUR = 60;
    var SECONDS_IN_DAY = 60 * 60 * 24;

    function getExcludedSeconds(dateAdapter, _a) {
      var startDate = _a.startDate,
          seconds = _a.seconds,
          excluded = _a.excluded,
          precision = _a.precision;

      if (excluded.length < 1) {
        return 0;
      }

      var addSeconds = dateAdapter.addSeconds,
          getDay = dateAdapter.getDay,
          addDays = dateAdapter.addDays;
      var endDate = addSeconds(startDate, seconds - 1);
      var dayStart = getDay(startDate);
      var dayEnd = getDay(endDate);
      var result = 0; // Calculated in seconds

      var current = startDate;

      var _loop_1 = function _loop_1() {
        var day = getDay(current);

        if (excluded.some(function (excludedDay) {
          return excludedDay === day;
        })) {
          result += calculateExcludedSeconds(dateAdapter, {
            dayStart: dayStart,
            dayEnd: dayEnd,
            day: day,
            precision: precision,
            startDate: startDate,
            endDate: endDate
          });
        }

        current = addDays(current, 1);
      };

      while (current < endDate) {
        _loop_1();
      }

      return result;
    }

    function calculateExcludedSeconds(dateAdapter, _a) {
      var precision = _a.precision,
          day = _a.day,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          startDate = _a.startDate,
          endDate = _a.endDate;
      var differenceInSeconds = dateAdapter.differenceInSeconds,
          endOfDay = dateAdapter.endOfDay,
          startOfDay = dateAdapter.startOfDay;

      if (precision === 'minutes') {
        if (day === dayStart) {
          return differenceInSeconds(endOfDay(startDate), startDate) + 1;
        } else if (day === dayEnd) {
          return differenceInSeconds(endDate, startOfDay(endDate)) + 1;
        }
      }

      return SECONDS_IN_DAY;
    }

    function getWeekViewEventSpan(dateAdapter, _a) {
      var event = _a.event,
          offset = _a.offset,
          startOfWeekDate = _a.startOfWeekDate,
          excluded = _a.excluded,
          precision = _a.precision,
          totalDaysInView = _a.totalDaysInView;
      var max = dateAdapter.max,
          differenceInSeconds = dateAdapter.differenceInSeconds,
          addDays = dateAdapter.addDays,
          endOfDay = dateAdapter.endOfDay,
          differenceInDays = dateAdapter.differenceInDays;
      var span = SECONDS_IN_DAY;
      var begin = max([event.start, startOfWeekDate]);

      if (event.end) {
        switch (precision) {
          case 'minutes':
            span = differenceInSeconds(event.end, begin);
            break;

          default:
            span = differenceInDays(addDays(endOfDay(event.end), 1), begin) * SECONDS_IN_DAY;
            break;
        }
      }

      var offsetSeconds = offset * SECONDS_IN_DAY;
      var totalLength = offsetSeconds + span; // the best way to detect if an event is outside the week-view
      // is to check if the total span beginning (from startOfWeekDay or event start) exceeds the total days in the view

      var secondsInView = totalDaysInView * SECONDS_IN_DAY;

      if (totalLength > secondsInView) {
        span = secondsInView - offsetSeconds;
      }

      span -= getExcludedSeconds(dateAdapter, {
        startDate: begin,
        seconds: span,
        excluded: excluded,
        precision: precision
      });
      return span / SECONDS_IN_DAY;
    }

    function getWeekViewEventOffset(dateAdapter, _a) {
      var event = _a.event,
          startOfWeekDate = _a.startOfWeek,
          excluded = _a.excluded,
          precision = _a.precision;
      var differenceInDays = dateAdapter.differenceInDays,
          startOfDay = dateAdapter.startOfDay,
          differenceInSeconds = dateAdapter.differenceInSeconds;

      if (event.start < startOfWeekDate) {
        return 0;
      }

      var offset = 0;

      switch (precision) {
        case 'days':
          offset = differenceInDays(startOfDay(event.start), startOfWeekDate) * SECONDS_IN_DAY;
          break;

        case 'minutes':
          offset = differenceInSeconds(event.start, startOfWeekDate);
          break;
      }

      offset -= getExcludedSeconds(dateAdapter, {
        startDate: startOfWeekDate,
        seconds: offset,
        excluded: excluded,
        precision: precision
      });
      return Math.abs(offset / SECONDS_IN_DAY);
    }

    function isEventIsPeriod(dateAdapter, _a) {
      var event = _a.event,
          periodStart = _a.periodStart,
          periodEnd = _a.periodEnd;
      var isSameSecond = dateAdapter.isSameSecond;
      var eventStart = event.start;
      var eventEnd = event.end || event.start;

      if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
      }

      if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
      }

      if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
      }

      if (isSameSecond(eventStart, periodStart) || isSameSecond(eventStart, periodEnd)) {
        return true;
      }

      if (isSameSecond(eventEnd, periodStart) || isSameSecond(eventEnd, periodEnd)) {
        return true;
      }

      return false;
    }

    function getEventsInPeriod(dateAdapter, _a) {
      var events = _a.events,
          periodStart = _a.periodStart,
          periodEnd = _a.periodEnd;
      return events.filter(function (event) {
        return isEventIsPeriod(dateAdapter, {
          event: event,
          periodStart: periodStart,
          periodEnd: periodEnd
        });
      });
    }

    function getWeekDay(dateAdapter, _a) {
      var date = _a.date,
          _b = _a.weekendDays,
          weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
      var startOfDay = dateAdapter.startOfDay,
          isSameDay = dateAdapter.isSameDay,
          getDay = dateAdapter.getDay;
      var today = startOfDay(new Date());
      var day = getDay(date);
      return {
        date: date,
        day: day,
        isPast: date < today,
        isToday: isSameDay(date, today),
        isFuture: date > today,
        isWeekend: weekendDays.indexOf(day) > -1
      };
    }

    function getWeekViewHeader(dateAdapter, _a) {
      var viewDate = _a.viewDate,
          weekStartsOn = _a.weekStartsOn,
          _b = _a.excluded,
          excluded = _b === void 0 ? [] : _b,
          weekendDays = _a.weekendDays,
          _c = _a.viewStart,
          viewStart = _c === void 0 ? dateAdapter.startOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      }) : _c,
          _d = _a.viewEnd,
          viewEnd = _d === void 0 ? dateAdapter.addDays(viewStart, DAYS_IN_WEEK) : _d;
      var addDays = dateAdapter.addDays,
          getDay = dateAdapter.getDay;
      var days = [];
      var date = viewStart;

      while (date < viewEnd) {
        if (!excluded.some(function (e) {
          return getDay(date) === e;
        })) {
          days.push(getWeekDay(dateAdapter, {
            date: date,
            weekendDays: weekendDays
          }));
        }

        date = addDays(date, 1);
      }

      return days;
    }

    function getDifferenceInDaysWithExclusions(dateAdapter, _a) {
      var date1 = _a.date1,
          date2 = _a.date2,
          excluded = _a.excluded;
      var date = date1;
      var diff = 0;

      while (date < date2) {
        if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
          diff++;
        }

        date = dateAdapter.addDays(date, 1);
      }

      return diff;
    }

    function getAllDayWeekEvents(dateAdapter, _a) {
      var events = _a.events,
          excluded = _a.excluded,
          precision = _a.precision,
          absolutePositionedEvents = _a.absolutePositionedEvents,
          viewStart = _a.viewStart,
          viewEnd = _a.viewEnd,
          eventsInPeriod = _a.eventsInPeriod;
      var differenceInSeconds = dateAdapter.differenceInSeconds,
          differenceInDays = dateAdapter.differenceInDays;
      var maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
        date1: viewStart,
        date2: viewEnd,
        excluded: excluded
      });
      var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
      var eventsMapped = eventsInPeriod.filter(function (event) {
        return event.allDay;
      }).map(function (event) {
        var offset = getWeekViewEventOffset(dateAdapter, {
          event: event,
          startOfWeek: viewStart,
          excluded: excluded,
          precision: precision
        });
        var span = getWeekViewEventSpan(dateAdapter, {
          event: event,
          offset: offset,
          startOfWeekDate: viewStart,
          excluded: excluded,
          precision: precision,
          totalDaysInView: totalDaysInView
        });
        return {
          event: event,
          offset: offset,
          span: span
        };
      }).filter(function (e) {
        return e.offset < maxRange;
      }).filter(function (e) {
        return e.span > 0;
      }).map(function (entry) {
        return {
          event: entry.event,
          offset: entry.offset,
          span: entry.span,
          startsBeforeWeek: entry.event.start < viewStart,
          endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd
        };
      }).sort(function (itemA, itemB) {
        var startSecondsDiff = differenceInSeconds(itemA.event.start, itemB.event.start);

        if (startSecondsDiff === 0) {
          return differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }

        return startSecondsDiff;
      });
      var allDayEventRows = [];
      var allocatedEvents = [];
      eventsMapped.forEach(function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
          allocatedEvents.push(event);
          var rowSpan_1 = event.span + event.offset;
          var otherRowEvents = eventsMapped.slice(index + 1).filter(function (nextEvent) {
            if (nextEvent.offset >= rowSpan_1 && rowSpan_1 + nextEvent.span <= totalDaysInView && allocatedEvents.indexOf(nextEvent) === -1) {
              var nextEventOffset = nextEvent.offset - rowSpan_1;

              if (!absolutePositionedEvents) {
                nextEvent.offset = nextEventOffset;
              }

              rowSpan_1 += nextEvent.span + nextEventOffset;
              allocatedEvents.push(nextEvent);
              return true;
            }
          });
          var weekEvents = [event].concat(otherRowEvents);
          var id = weekEvents.filter(function (weekEvent) {
            return weekEvent.event.id;
          }).map(function (weekEvent) {
            return weekEvent.event.id;
          }).join('-');
          allDayEventRows.push(__assign({
            row: weekEvents
          }, id ? {
            id: id
          } : {}));
        }
      });
      return allDayEventRows;
    }

    function getWeekViewHourGrid(dateAdapter, _a) {
      var events = _a.events,
          viewDate = _a.viewDate,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          weekStartsOn = _a.weekStartsOn,
          excluded = _a.excluded,
          weekendDays = _a.weekendDays,
          segmentHeight = _a.segmentHeight,
          viewStart = _a.viewStart,
          viewEnd = _a.viewEnd;
      var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
        viewDate: viewDate,
        hourSegments: hourSegments,
        dayStart: dayStart,
        dayEnd: dayEnd
      });
      var weekDays = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
      });
      var setHours = dateAdapter.setHours,
          setMinutes = dateAdapter.setMinutes,
          getHours = dateAdapter.getHours,
          getMinutes = dateAdapter.getMinutes;
      return weekDays.map(function (day) {
        var dayView = getDayView(dateAdapter, {
          events: events,
          viewDate: day.date,
          hourSegments: hourSegments,
          dayStart: dayStart,
          dayEnd: dayEnd,
          segmentHeight: segmentHeight,
          eventWidth: 1
        });
        var hours = dayViewHourGrid.map(function (hour) {
          var segments = hour.segments.map(function (segment) {
            var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
            return __assign({}, segment, {
              date: date
            });
          });
          return __assign({}, hour, {
            segments: segments
          });
        });

        function getColumnCount(allEvents, prevOverlappingEvents) {
          var columnCount = Math.max.apply(Math, prevOverlappingEvents.map(function (iEvent) {
            return iEvent.left + 1;
          }));
          var nextOverlappingEvents = allEvents.filter(function (iEvent) {
            return iEvent.left >= columnCount;
          }).filter(function (iEvent) {
            return getOverLappingWeekViewEvents(prevOverlappingEvents, iEvent.top, iEvent.top + iEvent.height).length > 0;
          });

          if (nextOverlappingEvents.length > 0) {
            return getColumnCount(allEvents, nextOverlappingEvents);
          } else {
            return columnCount;
          }
        }

        var mappedEvents = dayView.events.map(function (event) {
          var columnCount = getColumnCount(dayView.events, getOverLappingWeekViewEvents(dayView.events, event.top, event.top + event.height));
          var width = 100 / columnCount;
          return __assign({}, event, {
            left: event.left * width,
            width: width
          });
        });
        return {
          hours: hours,
          date: day.date,
          events: mappedEvents.map(function (event) {
            var overLappingEvents = getOverLappingWeekViewEvents(mappedEvents.filter(function (otherEvent) {
              return otherEvent.left > event.left;
            }), event.top, event.top + event.height);

            if (overLappingEvents.length > 0) {
              return __assign({}, event, {
                width: Math.min.apply(Math, overLappingEvents.map(function (otherEvent) {
                  return otherEvent.left;
                })) - event.left
              });
            }

            return event;
          })
        };
      });
    }

    function getWeekView(dateAdapter, _a) {
      var _b = _a.events,
          events = _b === void 0 ? [] : _b,
          viewDate = _a.viewDate,
          weekStartsOn = _a.weekStartsOn,
          _c = _a.excluded,
          excluded = _c === void 0 ? [] : _c,
          _d = _a.precision,
          precision = _d === void 0 ? 'days' : _d,
          _e = _a.absolutePositionedEvents,
          absolutePositionedEvents = _e === void 0 ? false : _e,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          weekendDays = _a.weekendDays,
          segmentHeight = _a.segmentHeight,
          _f = _a.viewStart,
          viewStart = _f === void 0 ? dateAdapter.startOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      }) : _f,
          _g = _a.viewEnd,
          viewEnd = _g === void 0 ? dateAdapter.endOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      }) : _g;

      if (!events) {
        events = [];
      }

      var startOfDay = dateAdapter.startOfDay,
          endOfDay = dateAdapter.endOfDay;
      viewStart = startOfDay(viewStart);
      viewEnd = endOfDay(viewEnd);
      var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: viewStart,
        periodEnd: viewEnd
      });
      var header = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
      });
      return {
        allDayEventRows: getAllDayWeekEvents(dateAdapter, {
          events: events,
          excluded: excluded,
          precision: precision,
          absolutePositionedEvents: absolutePositionedEvents,
          viewStart: viewStart,
          viewEnd: viewEnd,
          eventsInPeriod: eventsInPeriod
        }),
        period: {
          events: eventsInPeriod,
          start: header[0].date,
          end: endOfDay(header[header.length - 1].date)
        },
        hourColumns: getWeekViewHourGrid(dateAdapter, {
          events: events,
          viewDate: viewDate,
          hourSegments: hourSegments,
          dayStart: dayStart,
          dayEnd: dayEnd,
          weekStartsOn: weekStartsOn,
          excluded: excluded,
          weekendDays: weekendDays,
          segmentHeight: segmentHeight,
          viewStart: viewStart,
          viewEnd: viewEnd
        })
      };
    }

    function getMonthView(dateAdapter, _a) {
      var _b = _a.events,
          events = _b === void 0 ? [] : _b,
          viewDate = _a.viewDate,
          weekStartsOn = _a.weekStartsOn,
          _c = _a.excluded,
          excluded = _c === void 0 ? [] : _c,
          _d = _a.viewStart,
          viewStart = _d === void 0 ? dateAdapter.startOfMonth(viewDate) : _d,
          _e = _a.viewEnd,
          viewEnd = _e === void 0 ? dateAdapter.endOfMonth(viewDate) : _e,
          weekendDays = _a.weekendDays;

      if (!events) {
        events = [];
      }

      var startOfWeek = dateAdapter.startOfWeek,
          endOfWeek = dateAdapter.endOfWeek,
          differenceInDays = dateAdapter.differenceInDays,
          startOfDay = dateAdapter.startOfDay,
          addHours = dateAdapter.addHours,
          endOfDay = dateAdapter.endOfDay,
          isSameMonth = dateAdapter.isSameMonth,
          getDay = dateAdapter.getDay,
          getMonth = dateAdapter.getMonth;
      var start = startOfWeek(viewStart, {
        weekStartsOn: weekStartsOn
      });
      var end = endOfWeek(viewEnd, {
        weekStartsOn: weekStartsOn
      });
      var eventsInMonth = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: start,
        periodEnd: end
      });
      var initialViewDays = [];
      var previousDate;

      var _loop_2 = function _loop_2(i) {
        // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
        var date;

        if (previousDate) {
          date = startOfDay(addHours(previousDate, HOURS_IN_DAY));

          if (previousDate.getTime() === date.getTime()) {
            // DST change, so need to add 25 hours

            /* istanbul ignore next */
            date = startOfDay(addHours(previousDate, HOURS_IN_DAY + 1));
          }

          previousDate = date;
        } else {
          date = previousDate = start;
        }

        if (!excluded.some(function (e) {
          return getDay(date) === e;
        })) {
          var day = getWeekDay(dateAdapter, {
            date: date,
            weekendDays: weekendDays
          });
          var eventsInPeriod = getEventsInPeriod(dateAdapter, {
            events: eventsInMonth,
            periodStart: startOfDay(date),
            periodEnd: endOfDay(date)
          });
          day.inMonth = isSameMonth(date, viewDate);
          day.events = eventsInPeriod;
          day.badgeTotal = eventsInPeriod.length;
          initialViewDays.push(day);
        }
      };

      for (var i = 0; i < differenceInDays(end, start) + 1; i++) {
        _loop_2(i);
      }

      var days = [];
      var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;

      if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
        for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
          var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
          var isRowInMonth = row.some(function (day) {
            return getMonth(day.date) === getMonth(viewDate);
          });

          if (isRowInMonth) {
            days = days.concat(row);
          }
        }
      } else {
        days = initialViewDays;
      }

      var rows = Math.floor(days.length / totalDaysVisibleInWeek);
      var rowOffsets = [];

      for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
      }

      return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days,
        period: {
          start: days[0].date,
          end: endOfDay(days[days.length - 1].date),
          events: eventsInMonth
        }
      };
    }

    function getOverLappingWeekViewEvents(events, top, bottom) {
      return events.filter(function (previousEvent) {
        var previousEventTop = previousEvent.top;
        var previousEventBottom = previousEvent.top + previousEvent.height;

        if (top < previousEventBottom && previousEventBottom < bottom) {
          return true;
        } else if (top < previousEventTop && previousEventTop < bottom) {
          return true;
        } else if (previousEventTop <= top && bottom <= previousEventBottom) {
          return true;
        }

        return false;
      });
    }

    function getDayView(dateAdapter, _a) {
      var events = _a.events,
          viewDate = _a.viewDate,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          eventWidth = _a.eventWidth,
          segmentHeight = _a.segmentHeight;
      var setMinutes = dateAdapter.setMinutes,
          setHours = dateAdapter.setHours,
          startOfDay = dateAdapter.startOfDay,
          startOfMinute = dateAdapter.startOfMinute,
          endOfDay = dateAdapter.endOfDay,
          differenceInMinutes = dateAdapter.differenceInMinutes;
      var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
      var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
      var previousDayEvents = [];
      var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) {
          return !event.allDay;
        }),
        periodStart: startOfView,
        periodEnd: endOfView
      });
      var dayViewEvents = eventsInPeriod.sort(function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
      }).map(function (event) {
        var eventStart = event.start;
        var eventEnd = event.end || eventStart;
        var startsBeforeDay = eventStart < startOfView;
        var endsAfterDay = eventEnd > endOfView;
        var hourHeightModifier = hourSegments * segmentHeight / MINUTES_IN_HOUR;
        var top = 0;

        if (eventStart > startOfView) {
          // adjust the difference in minutes if the user's offset is different between the start of the day and the event (e.g. when going to or from DST)
          var eventOffset = eventStart.getTimezoneOffset();
          var startOffset = startOfView.getTimezoneOffset();
          var diff = startOffset - eventOffset;
          top += differenceInMinutes(eventStart, startOfView) + diff;
        }

        top *= hourHeightModifier;
        var startDate = startsBeforeDay ? startOfView : eventStart;
        var endDate = endsAfterDay ? endOfView : eventEnd;
        var height = differenceInMinutes(endDate, startDate);

        if (!event.end) {
          height = segmentHeight;
        } else {
          height *= hourHeightModifier;
        }

        var bottom = top + height;
        var overlappingPreviousEvents = getOverLappingWeekViewEvents(previousDayEvents, top, bottom);
        var left = 0;

        while (overlappingPreviousEvents.some(function (previousEvent) {
          return previousEvent.left === left;
        })) {
          left += eventWidth;
        }

        var dayEvent = {
          event: event,
          height: height,
          width: eventWidth,
          top: top,
          left: left,
          startsBeforeDay: startsBeforeDay,
          endsAfterDay: endsAfterDay
        };
        previousDayEvents.push(dayEvent);
        return dayEvent;
      });
      var width = Math.max.apply(Math, dayViewEvents.map(function (event) {
        return event.left + event.width;
      }));
      var allDayEvents = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) {
          return event.allDay;
        }),
        periodStart: startOfDay(startOfView),
        periodEnd: endOfDay(endOfView)
      });
      return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents,
        period: {
          events: eventsInPeriod,
          start: startOfView,
          end: endOfView
        }
      };
    }

    function sanitiseHours(hours) {
      return Math.max(Math.min(23, hours), 0);
    }

    function sanitiseMinutes(minutes) {
      return Math.max(Math.min(59, minutes), 0);
    }

    function getDayViewHourGrid(dateAdapter, _a) {
      var viewDate = _a.viewDate,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd;
      var setMinutes = dateAdapter.setMinutes,
          setHours = dateAdapter.setHours,
          startOfDay = dateAdapter.startOfDay,
          startOfMinute = dateAdapter.startOfMinute,
          endOfDay = dateAdapter.endOfDay,
          addMinutes = dateAdapter.addMinutes,
          addHours = dateAdapter.addHours,
          addDays = dateAdapter.addDays;
      var hours = [];
      var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
      var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
      var segmentDuration = MINUTES_IN_HOUR / hourSegments;
      var startOfViewDay = startOfDay(viewDate);
      var endOfViewDay = endOfDay(viewDate);

      var dateAdjustment = function dateAdjustment(d) {
        return d;
      }; // this means that we change from or to DST on this day and that's going to cause problems so we bump the date


      if (startOfViewDay.getTimezoneOffset() !== endOfViewDay.getTimezoneOffset()) {
        startOfViewDay = addDays(startOfViewDay, 1);
        startOfView = addDays(startOfView, 1);
        endOfView = addDays(endOfView, 1);

        dateAdjustment = function dateAdjustment(d) {
          return addDays(d, -1);
        };
      }

      for (var i = 0; i < HOURS_IN_DAY; i++) {
        var segments = [];

        for (var j = 0; j < hourSegments; j++) {
          var date = addMinutes(addHours(startOfViewDay, i), j * segmentDuration);

          if (date >= startOfView && date < endOfView) {
            segments.push({
              date: dateAdjustment(date),
              displayDate: date,
              isStart: j === 0
            });
          }
        }

        if (segments.length > 0) {
          hours.push({
            segments: segments
          });
        }
      }

      return hours;
    }

    var EventValidationErrorMessage;

    (function (EventValidationErrorMessage) {
      EventValidationErrorMessage["NotArray"] = "Events must be an array";
      EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
      EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
      EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
      EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
    })(EventValidationErrorMessage || (EventValidationErrorMessage = {}));

    function validateEvents(events, log) {
      var isValid = true;

      function isError(msg, event) {
        log(msg, event);
        isValid = false;
      }

      if (!Array.isArray(events)) {
        log(EventValidationErrorMessage.NotArray, events);
        return false;
      }

      events.forEach(function (event) {
        if (!event.start) {
          isError(EventValidationErrorMessage.StartPropertyMissing, event);
        } else if (!(event.start instanceof Date)) {
          isError(EventValidationErrorMessage.StartPropertyNotDate, event);
        }

        if (event.end) {
          if (!(event.end instanceof Date)) {
            isError(EventValidationErrorMessage.EndPropertyNotDate, event);
          }

          if (event.start > event.end) {
            isError(EventValidationErrorMessage.EndsBeforeStart, event);
          }
        }
      });
      return isValid;
    } //# sourceMappingURL=calendar-utils.js.map

    /***/

  },

  /***/
  "./node_modules/calendar-utils/date-adapters/date-fns/index.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/calendar-utils/date-adapters/date-fns/index.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCalendarUtilsDateAdaptersDateFnsIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var date_fns_1 = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    function adapterFactory() {
      return {
        addDays: date_fns_1.addDays,
        addHours: date_fns_1.addHours,
        addMinutes: date_fns_1.addMinutes,
        addSeconds: date_fns_1.addSeconds,
        differenceInDays: date_fns_1.differenceInDays,
        differenceInMinutes: date_fns_1.differenceInMinutes,
        differenceInSeconds: date_fns_1.differenceInSeconds,
        endOfDay: date_fns_1.endOfDay,
        endOfMonth: date_fns_1.endOfMonth,
        endOfWeek: date_fns_1.endOfWeek,
        getDay: date_fns_1.getDay,
        getMonth: date_fns_1.getMonth,
        isSameDay: date_fns_1.isSameDay,
        isSameMonth: date_fns_1.isSameMonth,
        isSameSecond: date_fns_1.isSameSecond,
        max: date_fns_1.max,
        setHours: date_fns_1.setHours,
        setMinutes: date_fns_1.setMinutes,
        startOfDay: date_fns_1.startOfDay,
        startOfMinute: date_fns_1.startOfMinute,
        startOfMonth: date_fns_1.startOfMonth,
        startOfWeek: date_fns_1.startOfWeek,
        getHours: date_fns_1.getHours,
        getMinutes: date_fns_1.getMinutes
      };
    }

    exports.adapterFactory = adapterFactory; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/create-point-cb/dist/bundle.js":
  /*!*****************************************************!*\
    !*** ./node_modules/create-point-cb/dist/bundle.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCreatePointCbDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    var typeFunc = __webpack_require__(
    /*! type-func */
    "./node_modules/type-func/dist/bundle.js");

    function createPointCB(object, options) {
      // A persistent object (as opposed to returned object) is used to save memory
      // This is good to prevent layout thrashing, or for games, and such
      // NOTE
      // This uses IE fixes which should be OK to remove some day. :)
      // Some speed will be gained by removal of these.
      // pointCB should be saved in a variable on return
      // This allows the usage of element.removeEventListener
      options = options || {};
      var allowUpdate = typeFunc.boolean(options.allowUpdate, true);
      /*if(typeof options.allowUpdate === 'function'){
          allowUpdate = options.allowUpdate;
      }else{
          allowUpdate = function(){return true;};
      }*/

      return function pointCB(event) {
        event = event || window.event; // IE-ism

        object.target = event.target || event.srcElement || event.originalTarget;
        object.element = this;
        object.type = event.type;

        if (!allowUpdate(event)) {
          return;
        } // Support touch
        // http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644


        if (event.targetTouches) {
          object.x = event.targetTouches[0].clientX;
          object.y = event.targetTouches[0].clientY;
          object.pageX = event.targetTouches[0].pageX;
          object.pageY = event.targetTouches[0].pageY;
          object.screenX = event.targetTouches[0].screenX;
          object.screenY = event.targetTouches[0].screenY;
        } else {
          // If pageX/Y aren't available and clientX/Y are,
          // calculate pageX/Y - logic taken from jQuery.
          // (This is to support old IE)
          // NOTE Hopefully this can be removed soon.
          if (event.pageX === null && event.clientX !== null) {
            var eventDoc = event.target && event.target.ownerDocument || document;
            var doc = eventDoc.documentElement;
            var body = eventDoc.body;
            object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
            object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
          } else {
            object.pageX = event.pageX;
            object.pageY = event.pageY;
          } // pageX, and pageY change with page scroll
          // so we're not going to use those for x, and y.
          // NOTE Most browsers also alias clientX/Y with x/y
          // so that's something to consider down the road.


          object.x = event.clientX;
          object.y = event.clientY;
          object.screenX = event.screenX;
          object.screenY = event.screenY;
        }

        object.clientX = object.x;
        object.clientY = object.y;
      }; //NOTE Remember accessibility, Aria roles, and labels.
    }
    /*
    git remote add origin https://github.com/hollowdoor/create_point_cb.git
    git push -u origin master
    */


    module.exports = createPointCB; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/dom-autoscroller/dist/bundle.js":
  /*!******************************************************!*\
    !*** ./node_modules/dom-autoscroller/dist/bundle.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomAutoscrollerDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var typeFunc = __webpack_require__(
    /*! type-func */
    "./node_modules/type-func/dist/bundle.js");

    var animationFramePolyfill = __webpack_require__(
    /*! animation-frame-polyfill */
    "./node_modules/animation-frame-polyfill/lib/animation-frame-polyfill.cjs.js");

    var domSet = __webpack_require__(
    /*! dom-set */
    "./node_modules/dom-set/dist/bundle.js");

    var domPlane = __webpack_require__(
    /*! dom-plane */
    "./node_modules/dom-plane/dist/bundle.js");

    var mousemoveDispatcher = _interopDefault(__webpack_require__(
    /*! dom-mousemove-dispatcher */
    "./node_modules/dom-mousemove-dispatcher/dist/bundle.js"));

    function AutoScroller(elements, options) {
      if (options === void 0) options = {};
      var self = this;
      var maxSpeed = 4,
          scrolling = false;
      this.margin = options.margin || -1; //this.scrolling = false;

      this.scrollWhenOutside = options.scrollWhenOutside || false;
      var point = {},
          pointCB = domPlane.createPointCB(point),
          dispatcher = mousemoveDispatcher(),
          down = false;
      window.addEventListener('mousemove', pointCB, false);
      window.addEventListener('touchmove', pointCB, false);

      if (!isNaN(options.maxSpeed)) {
        maxSpeed = options.maxSpeed;
      }

      this.autoScroll = typeFunc.boolean(options.autoScroll);
      this.syncMove = typeFunc.boolean(options.syncMove, false);

      this.destroy = function (forceCleanAnimation) {
        window.removeEventListener('mousemove', pointCB, false);
        window.removeEventListener('touchmove', pointCB, false);
        window.removeEventListener('mousedown', onDown, false);
        window.removeEventListener('touchstart', onDown, false);
        window.removeEventListener('mouseup', onUp, false);
        window.removeEventListener('touchend', onUp, false);
        window.removeEventListener('pointerup', onUp, false);
        window.removeEventListener('mouseleave', onMouseOut, false);
        window.removeEventListener('mousemove', onMove, false);
        window.removeEventListener('touchmove', onMove, false);
        window.removeEventListener('scroll', setScroll, true);
        elements = [];

        if (forceCleanAnimation) {
          cleanAnimation();
        }
      };

      this.add = function () {
        var element = [],
            len = arguments.length;

        while (len--) {
          element[len] = arguments[len];
        }

        domSet.addElements.apply(void 0, [elements].concat(element));
        return this;
      };

      this.remove = function () {
        var element = [],
            len = arguments.length;

        while (len--) {
          element[len] = arguments[len];
        }

        return domSet.removeElements.apply(void 0, [elements].concat(element));
      };

      var hasWindow = null,
          windowAnimationFrame;

      if (Object.prototype.toString.call(elements) !== '[object Array]') {
        elements = [elements];
      }

      (function (temp) {
        elements = [];
        temp.forEach(function (element) {
          if (element === window) {
            hasWindow = window;
          } else {
            self.add(element);
          }
        });
      })(elements);

      Object.defineProperties(this, {
        down: {
          get: function get() {
            return down;
          }
        },
        maxSpeed: {
          get: function get() {
            return maxSpeed;
          }
        },
        point: {
          get: function get() {
            return point;
          }
        },
        scrolling: {
          get: function get() {
            return scrolling;
          }
        }
      });
      var n = 0,
          current = null,
          animationFrame;
      window.addEventListener('mousedown', onDown, false);
      window.addEventListener('touchstart', onDown, false);
      window.addEventListener('mouseup', onUp, false);
      window.addEventListener('touchend', onUp, false);
      /*
      IE does not trigger mouseup event when scrolling.
      It is a known issue that Microsoft won't fix.
      https://connect.microsoft.com/IE/feedback/details/783058/scrollbar-trigger-mousedown-but-not-mouseup
      IE supports pointer events instead
      */

      window.addEventListener('pointerup', onUp, false);
      window.addEventListener('mousemove', onMove, false);
      window.addEventListener('touchmove', onMove, false);
      window.addEventListener('mouseleave', onMouseOut, false);
      window.addEventListener('scroll', setScroll, true);

      function setScroll(e) {
        for (var i = 0; i < elements.length; i++) {
          if (elements[i] === e.target) {
            scrolling = true;
            break;
          }
        }

        if (scrolling) {
          animationFramePolyfill.requestAnimationFrame(function () {
            return scrolling = false;
          });
        }
      }

      function onDown() {
        down = true;
      }

      function onUp() {
        down = false;
        cleanAnimation();
      }

      function cleanAnimation() {
        animationFramePolyfill.cancelAnimationFrame(animationFrame);
        animationFramePolyfill.cancelAnimationFrame(windowAnimationFrame);
      }

      function onMouseOut() {
        down = false;
      }

      function getTarget(target) {
        if (!target) {
          return null;
        }

        if (current === target) {
          return target;
        }

        if (domSet.hasElement(elements, target)) {
          return target;
        }

        while (target = target.parentNode) {
          if (domSet.hasElement(elements, target)) {
            return target;
          }
        }

        return null;
      }

      function getElementUnderPoint() {
        var underPoint = null;

        for (var i = 0; i < elements.length; i++) {
          if (inside(point, elements[i])) {
            underPoint = elements[i];
          }
        }

        return underPoint;
      }

      function onMove(event) {
        if (!self.autoScroll()) {
          return;
        }

        if (event['dispatched']) {
          return;
        }

        var target = event.target,
            body = document.body;

        if (current && !inside(point, current)) {
          if (!self.scrollWhenOutside) {
            current = null;
          }
        }

        if (target && target.parentNode === body) {
          //The special condition to improve speed.
          target = getElementUnderPoint();
        } else {
          target = getTarget(target);

          if (!target) {
            target = getElementUnderPoint();
          }
        }

        if (target && target !== current) {
          current = target;
        }

        if (hasWindow) {
          animationFramePolyfill.cancelAnimationFrame(windowAnimationFrame);
          windowAnimationFrame = animationFramePolyfill.requestAnimationFrame(scrollWindow);
        }

        if (!current) {
          return;
        }

        animationFramePolyfill.cancelAnimationFrame(animationFrame);
        animationFrame = animationFramePolyfill.requestAnimationFrame(scrollTick);
      }

      function scrollWindow() {
        autoScroll(hasWindow);
        animationFramePolyfill.cancelAnimationFrame(windowAnimationFrame);
        windowAnimationFrame = animationFramePolyfill.requestAnimationFrame(scrollWindow);
      }

      function scrollTick() {
        if (!current) {
          return;
        }

        autoScroll(current);
        animationFramePolyfill.cancelAnimationFrame(animationFrame);
        animationFrame = animationFramePolyfill.requestAnimationFrame(scrollTick);
      }

      function autoScroll(el) {
        var rect = domPlane.getClientRect(el),
            scrollx,
            scrolly;

        if (point.x < rect.left + self.margin) {
          scrollx = Math.floor(Math.max(-1, (point.x - rect.left) / self.margin - 1) * self.maxSpeed);
        } else if (point.x > rect.right - self.margin) {
          scrollx = Math.ceil(Math.min(1, (point.x - rect.right) / self.margin + 1) * self.maxSpeed);
        } else {
          scrollx = 0;
        }

        if (point.y < rect.top + self.margin) {
          scrolly = Math.floor(Math.max(-1, (point.y - rect.top) / self.margin - 1) * self.maxSpeed);
        } else if (point.y > rect.bottom - self.margin) {
          scrolly = Math.ceil(Math.min(1, (point.y - rect.bottom) / self.margin + 1) * self.maxSpeed);
        } else {
          scrolly = 0;
        }

        if (self.syncMove()) {
          /*
          Notes about mousemove event dispatch.
          screen(X/Y) should need to be updated.
          Some other properties might need to be set.
          Keep the syncMove option default false until all inconsistencies are taken care of.
          */
          dispatcher.dispatch(el, {
            pageX: point.pageX + scrollx,
            pageY: point.pageY + scrolly,
            clientX: point.x + scrollx,
            clientY: point.y + scrolly
          });
        }

        setTimeout(function () {
          if (scrolly) {
            scrollY(el, scrolly);
          }

          if (scrollx) {
            scrollX(el, scrollx);
          }
        });
      }

      function scrollY(el, amount) {
        if (el === window) {
          window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
        } else {
          el.scrollTop += amount;
        }
      }

      function scrollX(el, amount) {
        if (el === window) {
          window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
        } else {
          el.scrollLeft += amount;
        }
      }
    }

    function AutoScrollerFactory(element, options) {
      return new AutoScroller(element, options);
    }

    function inside(point, el, rect) {
      if (!rect) {
        return domPlane.pointInside(point, el);
      } else {
        return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
      }
    }
    /*
    git remote add origin https://github.com/hollowdoor/dom_autoscroller.git
    git push -u origin master
    */


    module.exports = AutoScrollerFactory; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/dom-mousemove-dispatcher/dist/bundle.js":
  /*!**************************************************************!*\
    !*** ./node_modules/dom-mousemove-dispatcher/dist/bundle.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomMousemoveDispatcherDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    var objectCreate = void 0;

    if (typeof Object.create != 'function') {
      objectCreate = function (undefined) {
        var Temp = function Temp() {};

        return function (prototype, propertiesObject) {
          if (prototype !== Object(prototype) && prototype !== null) {
            throw TypeError('Argument must be an object, or null');
          }

          Temp.prototype = prototype || {};
          var result = new Temp();
          Temp.prototype = null;

          if (propertiesObject !== undefined) {
            Object.defineProperties(result, propertiesObject);
          } // to imitate the case of Object.create(null)


          if (prototype === null) {
            result.__proto__ = null;
          }

          return result;
        };
      }();
    } else {
      objectCreate = Object.create;
    }

    var objectCreate$1 = objectCreate;
    var mouseEventProps = ['altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 'region', 'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'which', 'x', 'y'];

    function createDispatcher(element) {
      var defaultSettings = {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        button: 0,
        buttons: 1,
        relatedTarget: null,
        region: null
      };

      if (element !== undefined) {
        element.addEventListener('mousemove', onMove);
      }

      function onMove(e) {
        for (var i = 0; i < mouseEventProps.length; i++) {
          defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
        }
      }

      var dispatch = function () {
        if (MouseEvent) {
          return function m1(element, initMove, data) {
            var evt = new MouseEvent('mousemove', createMoveInit(defaultSettings, initMove)); //evt.dispatched = 'mousemove';

            setSpecial(evt, data);
            return element.dispatchEvent(evt);
          };
        } else if (typeof document.createEvent === 'function') {
          return function m2(element, initMove, data) {
            var settings = createMoveInit(defaultSettings, initMove);
            var evt = document.createEvent('MouseEvents');
            evt.initMouseEvent("mousemove", true, //can bubble
            true, //cancelable
            window, //view
            0, //detail
            settings.screenX, //0, //screenX
            settings.screenY, //0, //screenY
            settings.clientX, //80, //clientX
            settings.clientY, //20, //clientY
            settings.ctrlKey, //false, //ctrlKey
            settings.altKey, //false, //altKey
            settings.shiftKey, //false, //shiftKey
            settings.metaKey, //false, //metaKey
            settings.button, //0, //button
            settings.relatedTarget //null //relatedTarget
            ); //evt.dispatched = 'mousemove';

            setSpecial(evt, data);
            return element.dispatchEvent(evt);
          };
        } else if (typeof document.createEventObject === 'function') {
          return function m3(element, initMove, data) {
            var evt = document.createEventObject();
            var settings = createMoveInit(defaultSettings, initMove);

            for (var name in settings) {
              evt[name] = settings[name];
            } //evt.dispatched = 'mousemove';


            setSpecial(evt, data);
            return element.dispatchEvent(evt);
          };
        }
      }();

      function destroy() {
        if (element) element.removeEventListener('mousemove', onMove, false);
        defaultSettings = null;
      }

      return {
        destroy: destroy,
        dispatch: dispatch
      };
    }

    function createMoveInit(defaultSettings, initMove) {
      initMove = initMove || {};
      var settings = objectCreate$1(defaultSettings);

      for (var i = 0; i < mouseEventProps.length; i++) {
        if (initMove[mouseEventProps[i]] !== undefined) settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
      }

      return settings;
    }

    function setSpecial(e, data) {
      console.log('data ', data);
      e.data = data || {};
      e.dispatched = 'mousemove';
    }
    /*
    http://marcgrabanski.com/simulating-mouse-click-events-in-javascript/
    */


    module.exports = createDispatcher; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/dom-plane/dist/bundle.js":
  /*!***********************************************!*\
    !*** ./node_modules/dom-plane/dist/bundle.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomPlaneDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var createPointCb = _interopDefault(__webpack_require__(
    /*! create-point-cb */
    "./node_modules/create-point-cb/dist/bundle.js"));

    function createWindowRect() {
      var props = {
        top: {
          value: 0,
          enumerable: true
        },
        left: {
          value: 0,
          enumerable: true
        },
        right: {
          value: window.innerWidth,
          enumerable: true
        },
        bottom: {
          value: window.innerHeight,
          enumerable: true
        },
        width: {
          value: window.innerWidth,
          enumerable: true
        },
        height: {
          value: window.innerHeight,
          enumerable: true
        },
        x: {
          value: 0,
          enumerable: true
        },
        y: {
          value: 0,
          enumerable: true
        }
      };

      if (Object.create) {
        return Object.create({}, props);
      } else {
        var rect = {};
        Object.defineProperties(rect, props);
        return rect;
      }
    }

    function getClientRect(el) {
      if (el === window) {
        return createWindowRect();
      } else {
        try {
          var rect = el.getBoundingClientRect();

          if (rect.x === undefined) {
            rect.x = rect.left;
            rect.y = rect.top;
          }

          return rect;
        } catch (e) {
          throw new TypeError("Can't call getBoundingClientRect on " + el);
        }
      }
    }

    function pointInside(point, el) {
      var rect = getClientRect(el);
      return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
    }

    exports.createPointCB = createPointCb;
    exports.getClientRect = getClientRect;
    exports.pointInside = pointInside; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/dom-set/dist/bundle.js":
  /*!*********************************************!*\
    !*** ./node_modules/dom-set/dist/bundle.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomSetDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var arrayFrom = _interopDefault(__webpack_require__(
    /*! array-from */
    "./node_modules/array-from/index.js"));

    var isArray = _interopDefault(__webpack_require__(
    /*! is-array */
    "./node_modules/is-array/index.js"));

    var isElement = _interopDefault(__webpack_require__(
    /*! iselement */
    "./node_modules/iselement/module/index.js"));

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    /**
     * Returns `true` if provided input is Element.
     * @name isElement
     * @param {*} [input]
     * @returns {boolean}
     */


    var isElement$1 = function isElement$1(input) {
      return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
    };

    function select(selector) {
      if (typeof selector === 'string') {
        try {
          return document.querySelector(selector);
        } catch (e) {
          throw e;
        }
      } else if (isElement(selector)) {
        return selector;
      }
    }

    function selectAll(selector) {
      if (typeof selector === 'string') {
        return Array.prototype.slice.apply(document.querySelectorAll(selector));
      } else if (isArray(selector)) {
        return selector.map(select);
      } else if ('length' in selector) {
        return arrayFrom(selector).map(select);
      }
    }

    function indexOfElement(elements, element) {
      element = resolveElement(element, true);

      if (!isElement$1(element)) {
        return -1;
      }

      for (var i = 0; i < elements.length; i++) {
        if (elements[i] === element) {
          return i;
        }
      }

      return -1;
    }

    function hasElement(elements, element) {
      return -1 !== indexOfElement(elements, element);
    }

    function domListOf(arr) {
      if (!arr) {
        return [];
      }

      try {
        if (typeof arr === 'string') {
          return arrayFrom(document.querySelectorAll(arr));
        } else if (isArray(arr)) {
          return arr.map(resolveElement);
        } else {
          if (typeof arr.length === 'undefined') {
            return [resolveElement(arr)];
          }

          return arrayFrom(arr, resolveElement);
        }
      } catch (e) {
        throw new Error(e);
      }
    }

    function concatElementLists() {
      var lists = [],
          len = arguments.length;

      while (len--) {
        lists[len] = arguments[len];
      }

      return lists.reduce(function (last, list) {
        return list.length ? last : last.concat(domListOf(list));
      }, []);
    }

    function pushElements(elements, toAdd) {
      for (var i = 0; i < toAdd.length; i++) {
        if (!hasElement(elements, toAdd[i])) {
          elements.push(toAdd[i]);
        }
      }

      return toAdd;
    }

    function addElements(elements) {
      var toAdd = [],
          len = arguments.length - 1;

      while (len-- > 0) {
        toAdd[len] = arguments[len + 1];
      }

      toAdd = toAdd.map(resolveElement);
      return pushElements(elements, toAdd);
    }

    function removeElements(elements) {
      var toRemove = [],
          len = arguments.length - 1;

      while (len-- > 0) {
        toRemove[len] = arguments[len + 1];
      }

      return toRemove.map(resolveElement).reduce(function (last, e) {
        var index = indexOfElement(elements, e);

        if (index !== -1) {
          return last.concat(elements.splice(index, 1));
        }

        return last;
      }, []);
    }

    function resolveElement(element, noThrow) {
      if (typeof element === 'string') {
        try {
          return document.querySelector(element);
        } catch (e) {
          throw e;
        }
      }

      if (!isElement$1(element) && !noThrow) {
        throw new TypeError(element + " is not a DOM element.");
      }

      return element;
    }

    exports.indexOfElement = indexOfElement;
    exports.hasElement = hasElement;
    exports.domListOf = domListOf;
    exports.concatElementLists = concatElementLists;
    exports.addElements = addElements;
    exports.removeElements = removeElements;
    exports.resolveElement = resolveElement;
    exports.select = select;
    exports.selectAll = selectAll; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/is-array/index.js":
  /*!****************************************!*\
    !*** ./node_modules/is-array/index.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesIsArrayIndexJs(module, exports) {
    /**
     * isArray
     */
    var isArray = Array.isArray;
    /**
     * toString
     */

    var str = Object.prototype.toString;
    /**
     * Whether or not the given `val`
     * is an array.
     *
     * example:
     *
     *        isArray([]);
     *        // > true
     *        isArray(arguments);
     *        // > false
     *        isArray('');
     *        // > false
     *
     * @param {mixed} val
     * @return {bool}
     */

    module.exports = isArray || function (val) {
      return !!val && '[object Array]' == str.call(val);
    };
    /***/

  },

  /***/
  "./node_modules/iselement/module/index.js":
  /*!************************************************!*\
    !*** ./node_modules/iselement/module/index.js ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesIselementModuleIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    /**
     * Returns `true` if provided input is Element.
     * @name isElement
     * @param {*} [input]
     * @returns {boolean}
     */

    /* harmony default export */


    __webpack_exports__["default"] = function (input) {
      return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
    };
    /***/

  },

  /***/
  "./node_modules/positioning/dist/entry.js":
  /*!************************************************!*\
    !*** ./node_modules/positioning/dist/entry.js ***!
    \************************************************/

  /*! exports provided: positionElements */

  /***/
  function node_modulesPositioningDistEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./positioning */
    "./node_modules/positioning/dist/positioning.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "positionElements", function () {
      return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionElements"];
    }); //# sourceMappingURL=entry.js.map

    /***/

  },

  /***/
  "./node_modules/positioning/dist/positioning.js":
  /*!******************************************************!*\
    !*** ./node_modules/positioning/dist/positioning.js ***!
    \******************************************************/

  /*! exports provided: Positioning, positionElements */

  /***/
  function node_modulesPositioningDistPositioningJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Positioning", function () {
      return Positioning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "positionElements", function () {
      return positionElements;
    }); // previous version:
    // https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js


    var Positioning =
    /** @class */
    function () {
      function Positioning() {}

      Positioning.prototype.getAllStyles = function (element) {
        return window.getComputedStyle(element);
      };

      Positioning.prototype.getStyle = function (element, prop) {
        return this.getAllStyles(element)[prop];
      };

      Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
      };

      Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;

        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
          offsetParentEl = offsetParentEl.offsetParent;
        }

        return offsetParentEl || document.documentElement;
      };

      Positioning.prototype.position = function (element, round) {
        if (round === void 0) {
          round = true;
        }

        var elPosition;
        var parentOffset = {
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        };

        if (this.getStyle(element, 'position') === 'fixed') {
          elPosition = element.getBoundingClientRect();
          elPosition = {
            top: elPosition.top,
            bottom: elPosition.bottom,
            left: elPosition.left,
            right: elPosition.right,
            height: elPosition.height,
            width: elPosition.width
          };
        } else {
          var offsetParentEl = this.offsetParent(element);
          elPosition = this.offset(element, false);

          if (offsetParentEl !== document.documentElement) {
            parentOffset = this.offset(offsetParentEl, false);
          }

          parentOffset.top += offsetParentEl.clientTop;
          parentOffset.left += offsetParentEl.clientLeft;
        }

        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;

        if (round) {
          elPosition.top = Math.round(elPosition.top);
          elPosition.bottom = Math.round(elPosition.bottom);
          elPosition.left = Math.round(elPosition.left);
          elPosition.right = Math.round(elPosition.right);
        }

        return elPosition;
      };

      Positioning.prototype.offset = function (element, round) {
        if (round === void 0) {
          round = true;
        }

        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
          top: window.pageYOffset - document.documentElement.clientTop,
          left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
          height: elBcr.height || element.offsetHeight,
          width: elBcr.width || element.offsetWidth,
          top: elBcr.top + viewportOffset.top,
          bottom: elBcr.bottom + viewportOffset.top,
          left: elBcr.left + viewportOffset.left,
          right: elBcr.right + viewportOffset.left
        };

        if (round) {
          elOffset.height = Math.round(elOffset.height);
          elOffset.width = Math.round(elOffset.width);
          elOffset.top = Math.round(elOffset.top);
          elOffset.bottom = Math.round(elOffset.bottom);
          elOffset.left = Math.round(elOffset.left);
          elOffset.right = Math.round(elOffset.right);
        }

        return elOffset;
      };
      /*
        Return false if the element to position is outside the viewport
      */


      Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var _a = placement.split('-'),
            _b = _a[0],
            placementPrimary = _b === void 0 ? 'top' : _b,
            _c = _a[1],
            placementSecondary = _c === void 0 ? 'center' : _c;

        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var marginTop = parseFloat(targetElStyles.marginTop);
        var marginBottom = parseFloat(targetElStyles.marginBottom);
        var marginLeft = parseFloat(targetElStyles.marginLeft);
        var marginRight = parseFloat(targetElStyles.marginRight);
        var topPosition = 0;
        var leftPosition = 0;

        switch (placementPrimary) {
          case 'top':
            topPosition = hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom);
            break;

          case 'bottom':
            topPosition = hostElPosition.top + hostElPosition.height;
            break;

          case 'left':
            leftPosition = hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight);
            break;

          case 'right':
            leftPosition = hostElPosition.left + hostElPosition.width;
            break;
        }

        switch (placementSecondary) {
          case 'top':
            topPosition = hostElPosition.top;
            break;

          case 'bottom':
            topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
            break;

          case 'left':
            leftPosition = hostElPosition.left;
            break;

          case 'right':
            leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
            break;

          case 'center':
            if (placementPrimary === 'top' || placementPrimary === 'bottom') {
              leftPosition = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
            } else {
              topPosition = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
            }

            break;
        } /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
        // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;


        targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)"; // Check if the targetElement is inside the viewport

        var targetElBCR = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        var windowHeight = window.innerHeight || html.clientHeight;
        var windowWidth = window.innerWidth || html.clientWidth;
        return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth && targetElBCR.bottom <= windowHeight;
      };

      return Positioning;
    }();

    var placementSeparator = /\s+/;
    var positionService = new Positioning();
    /*
     * Accept the placement array and applies the appropriate placement dependent on the viewport.
     * Returns the applied placement.
     * In case of auto placement, placements are selected in order
     *   'top', 'bottom', 'left', 'right',
     *   'top-left', 'top-right',
     *   'bottom-left', 'bottom-right',
     *   'left-top', 'left-bottom',
     *   'right-top', 'right-bottom'.
     * */

    function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
      var placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
      var allowedPlacements = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom', 'right-top', 'right-bottom'];
      var classList = targetElement.classList;

      var addClassesToTarget = function addClassesToTarget(targetPlacement) {
        var _a = targetPlacement.split('-'),
            primary = _a[0],
            secondary = _a[1];

        var classes = [];

        if (baseClass) {
          classes.push(baseClass + "-" + primary);

          if (secondary) {
            classes.push(baseClass + "-" + primary + "-" + secondary);
          }

          classes.forEach(function (classname) {
            classList.add(classname);
          });
        }

        return classes;
      }; // Remove old placement classes to avoid issues


      if (baseClass) {
        allowedPlacements.forEach(function (placementToRemove) {
          classList.remove(baseClass + "-" + placementToRemove);
        });
      } // replace auto placement with other placements


      var hasAuto = placementVals.findIndex(function (val) {
        return val === 'auto';
      });

      if (hasAuto >= 0) {
        allowedPlacements.forEach(function (obj) {
          if (placementVals.find(function (val) {
            return val.search('^' + obj) !== -1;
          }) == null) {
            placementVals.splice(hasAuto++, 1, obj);
          }
        });
      } // coordinates where to position
      // Required for transform:


      var style = targetElement.style;
      style.position = 'absolute';
      style.top = '0';
      style.left = '0';
      style['will-change'] = 'transform';
      var testPlacement;
      var isInViewport = false;

      for (var _i = 0, placementVals_1 = placementVals; _i < placementVals_1.length; _i++) {
        testPlacement = placementVals_1[_i];
        var addedClasses = addClassesToTarget(testPlacement);

        if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
          isInViewport = true;
          break;
        } // Remove the baseClasses for further calculation


        if (baseClass) {
          addedClasses.forEach(function (classname) {
            classList.remove(classname);
          });
        }
      }

      if (!isInViewport) {
        // If nothing match, the first placement is the default one
        testPlacement = placementVals[0];
        addClassesToTarget(testPlacement);
        positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
      }

      return testPlacement;
    } //# sourceMappingURL=positioning.js.map

    /***/

  },

  /***/
  "./node_modules/sweetalert2/dist/sweetalert2.all.js":
  /*!**********************************************************!*\
    !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSweetalert2DistSweetalert2AllJs(module, exports, __webpack_require__) {
    /*!
    * sweetalert2 v11.7.10
    * Released under the MIT License.
    */
    (function (global, factory) {
      true ? module.exports = factory() : undefined;
    })(this, function () {
      'use strict';

      var RESTORE_FOCUS_TIMEOUT = 100;
      /** @type {GlobalState} */

      var globalState = {};

      var focusPreviousActiveElement = function focusPreviousActiveElement() {
        if (globalState.previousActiveElement instanceof HTMLElement) {
          globalState.previousActiveElement.focus();
          globalState.previousActiveElement = null;
        } else if (document.body) {
          document.body.focus();
        }
      };
      /**
       * Restore previous active (focused) element
       *
       * @param {boolean} returnFocus
       * @returns {Promise<void>}
       */


      var restoreActiveElement = function restoreActiveElement(returnFocus) {
        return new Promise(function (resolve) {
          if (!returnFocus) {
            return resolve();
          }

          var x = window.scrollX;
          var y = window.scrollY;
          globalState.restoreFocusTimeout = setTimeout(function () {
            focusPreviousActiveElement();
            resolve();
          }, RESTORE_FOCUS_TIMEOUT); // issues/900

          window.scrollTo(x, y);
        });
      };
      /**
       * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
       * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
       * This is the approach that Babel will probably take to implement private methods/fields
       *   https://github.com/tc39/proposal-private-methods
       *   https://github.com/babel/babel/pull/7555
       * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
       *   then we can use that language feature.
       */


      var privateProps = {
        promise: new WeakMap(),
        innerParams: new WeakMap(),
        domCache: new WeakMap()
      };
      var swalPrefix = 'swal2-';
      /**
       * @typedef
       * { | 'container'
       *   | 'shown'
       *   | 'height-auto'
       *   | 'iosfix'
       *   | 'popup'
       *   | 'modal'
       *   | 'no-backdrop'
       *   | 'no-transition'
       *   | 'toast'
       *   | 'toast-shown'
       *   | 'show'
       *   | 'hide'
       *   | 'close'
       *   | 'title'
       *   | 'html-container'
       *   | 'actions'
       *   | 'confirm'
       *   | 'deny'
       *   | 'cancel'
       *   | 'default-outline'
       *   | 'footer'
       *   | 'icon'
       *   | 'icon-content'
       *   | 'image'
       *   | 'input'
       *   | 'file'
       *   | 'range'
       *   | 'select'
       *   | 'radio'
       *   | 'checkbox'
       *   | 'label'
       *   | 'textarea'
       *   | 'inputerror'
       *   | 'input-label'
       *   | 'validation-message'
       *   | 'progress-steps'
       *   | 'active-progress-step'
       *   | 'progress-step'
       *   | 'progress-step-line'
       *   | 'loader'
       *   | 'loading'
       *   | 'styled'
       *   | 'top'
       *   | 'top-start'
       *   | 'top-end'
       *   | 'top-left'
       *   | 'top-right'
       *   | 'center'
       *   | 'center-start'
       *   | 'center-end'
       *   | 'center-left'
       *   | 'center-right'
       *   | 'bottom'
       *   | 'bottom-start'
       *   | 'bottom-end'
       *   | 'bottom-left'
       *   | 'bottom-right'
       *   | 'grow-row'
       *   | 'grow-column'
       *   | 'grow-fullscreen'
       *   | 'rtl'
       *   | 'timer-progress-bar'
       *   | 'timer-progress-bar-container'
       *   | 'scrollbar-measure'
       *   | 'icon-success'
       *   | 'icon-warning'
       *   | 'icon-info'
       *   | 'icon-question'
       *   | 'icon-error'
       * } SwalClass
       * @typedef {Record<SwalClass, string>} SwalClasses
       */

      /**
       * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
       * @typedef {Record<SwalIcon, string>} SwalIcons
       */

      /** @type {SwalClass[]} */

      var classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error'];
      var swalClasses = classNames.reduce(function (acc, className) {
        acc[className] = swalPrefix + className;
        return acc;
      },
      /** @type {SwalClasses} */
      {});
      /** @type {SwalIcon[]} */

      var icons = ['success', 'warning', 'info', 'question', 'error'];
      var iconTypes = icons.reduce(function (acc, icon) {
        acc[icon] = swalPrefix + icon;
        return acc;
      },
      /** @type {SwalIcons} */
      {});
      var consolePrefix = 'SweetAlert2:';
      /**
       * Capitalize the first letter of a string
       *
       * @param {string} str
       * @returns {string}
       */

      var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      /**
       * Standardize console warnings
       *
       * @param {string | string[]} message
       */


      var warn = function warn(message) {
        console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
      };
      /**
       * Standardize console errors
       *
       * @param {string} message
       */


      var error = function error(message) {
        console.error("".concat(consolePrefix, " ").concat(message));
      };
      /**
       * Private global state for `warnOnce`
       *
       * @type {string[]}
       * @private
       */


      var previousWarnOnceMessages = [];
      /**
       * Show a console warning, but only if it hasn't already been shown
       *
       * @param {string} message
       */

      var warnOnce = function warnOnce(message) {
        if (!previousWarnOnceMessages.includes(message)) {
          previousWarnOnceMessages.push(message);
          warn(message);
        }
      };
      /**
       * Show a one-time console warning about deprecated params/methods
       *
       * @param {string} deprecatedParam
       * @param {string} useInstead
       */


      var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
        warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
      };
      /**
       * If `arg` is a function, call it (with no arguments or context) and return the result.
       * Otherwise, just pass the value through
       *
       * @param {Function | any} arg
       * @returns {any}
       */


      var callIfFunction = function callIfFunction(arg) {
        return typeof arg === 'function' ? arg() : arg;
      };
      /**
       * @param {any} arg
       * @returns {boolean}
       */


      var hasToPromiseFn = function hasToPromiseFn(arg) {
        return arg && typeof arg.toPromise === 'function';
      };
      /**
       * @param {any} arg
       * @returns {Promise<any>}
       */


      var asPromise = function asPromise(arg) {
        return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
      };
      /**
       * @param {any} arg
       * @returns {boolean}
       */


      var isPromise = function isPromise(arg) {
        return arg && Promise.resolve(arg) === arg;
      };
      /**
       * Gets the popup container which contains the backdrop and the popup itself.
       *
       * @returns {HTMLElement | null}
       */


      var getContainer = function getContainer() {
        return document.body.querySelector(".".concat(swalClasses.container));
      };
      /**
       * @param {string} selectorString
       * @returns {HTMLElement | null}
       */


      var elementBySelector = function elementBySelector(selectorString) {
        var container = getContainer();
        return container ? container.querySelector(selectorString) : null;
      };
      /**
       * @param {string} className
       * @returns {HTMLElement | null}
       */


      var elementByClass = function elementByClass(className) {
        return elementBySelector(".".concat(className));
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getPopup = function getPopup() {
        return elementByClass(swalClasses.popup);
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getIcon = function getIcon() {
        return elementByClass(swalClasses.icon);
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getIconContent = function getIconContent() {
        return elementByClass(swalClasses['icon-content']);
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getTitle = function getTitle() {
        return elementByClass(swalClasses.title);
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getHtmlContainer = function getHtmlContainer() {
        return elementByClass(swalClasses['html-container']);
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getImage = function getImage() {
        return elementByClass(swalClasses.image);
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getProgressSteps = function getProgressSteps() {
        return elementByClass(swalClasses['progress-steps']);
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getValidationMessage = function getValidationMessage() {
        return elementByClass(swalClasses['validation-message']);
      };
      /**
       * @returns {HTMLButtonElement | null}
       */


      var getConfirmButton = function getConfirmButton() {
        return (
          /** @type {HTMLButtonElement} */
          elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm))
        );
      };
      /**
       * @returns {HTMLButtonElement | null}
       */


      var getCancelButton = function getCancelButton() {
        return (
          /** @type {HTMLButtonElement} */
          elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel))
        );
      };
      /**
       * @returns {HTMLButtonElement | null}
       */


      var getDenyButton = function getDenyButton() {
        return (
          /** @type {HTMLButtonElement} */
          elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny))
        );
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getInputLabel = function getInputLabel() {
        return elementByClass(swalClasses['input-label']);
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getLoader = function getLoader() {
        return elementBySelector(".".concat(swalClasses.loader));
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getActions = function getActions() {
        return elementByClass(swalClasses.actions);
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getFooter = function getFooter() {
        return elementByClass(swalClasses.footer);
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getTimerProgressBar = function getTimerProgressBar() {
        return elementByClass(swalClasses['timer-progress-bar']);
      };
      /**
       * @returns {HTMLElement | null}
       */


      var getCloseButton = function getCloseButton() {
        return elementByClass(swalClasses.close);
      }; // https://github.com/jkup/focusable/blob/master/index.js


      var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
      /**
       * @returns {HTMLElement[]}
       */

      var getFocusableElements = function getFocusableElements() {
        /** @type {NodeListOf<HTMLElement>} */
        var focusableElementsWithTabindex = getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
        var focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex) // sort according to tabindex
        .sort(function (a, b) {
          var tabindexA = parseInt(a.getAttribute('tabindex'));
          var tabindexB = parseInt(b.getAttribute('tabindex'));

          if (tabindexA > tabindexB) {
            return 1;
          } else if (tabindexA < tabindexB) {
            return -1;
          }

          return 0;
        });
        /** @type {NodeListOf<HTMLElement>} */

        var otherFocusableElements = getPopup().querySelectorAll(focusable);
        var otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(function (el) {
          return el.getAttribute('tabindex') !== '-1';
        });
        return _toConsumableArray(new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))).filter(function (el) {
          return isVisible$1(el);
        });
      };
      /**
       * @returns {boolean}
       */


      var isModal = function isModal() {
        return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
      };
      /**
       * @returns {boolean}
       */


      var isToast = function isToast() {
        return getPopup() && hasClass(getPopup(), swalClasses.toast);
      };
      /**
       * @returns {boolean}
       */


      var isLoading = function isLoading() {
        return getPopup().hasAttribute('data-loading');
      };
      /**
       * Securely set innerHTML of an element
       * https://github.com/sweetalert2/sweetalert2/issues/1926
       *
       * @param {HTMLElement} elem
       * @param {string} html
       */


      var setInnerHtml = function setInnerHtml(elem, html) {
        elem.textContent = '';

        if (html) {
          var parser = new DOMParser();
          var parsed = parser.parseFromString(html, "text/html");
          Array.from(parsed.querySelector('head').childNodes).forEach(function (child) {
            elem.appendChild(child);
          });
          Array.from(parsed.querySelector('body').childNodes).forEach(function (child) {
            if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
              elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
            } else {
              elem.appendChild(child);
            }
          });
        }
      };
      /**
       * @param {HTMLElement} elem
       * @param {string} className
       * @returns {boolean}
       */


      var hasClass = function hasClass(elem, className) {
        if (!className) {
          return false;
        }

        var classList = className.split(/\s+/);

        for (var i = 0; i < classList.length; i++) {
          if (!elem.classList.contains(classList[i])) {
            return false;
          }
        }

        return true;
      };
      /**
       * @param {HTMLElement} elem
       * @param {SweetAlertOptions} params
       */


      var removeCustomClasses = function removeCustomClasses(elem, params) {
        Array.from(elem.classList).forEach(function (className) {
          if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
            elem.classList.remove(className);
          }
        });
      };
      /**
       * @param {HTMLElement} elem
       * @param {SweetAlertOptions} params
       * @param {string} className
       */


      var applyCustomClass = function applyCustomClass(elem, params, className) {
        removeCustomClasses(elem, params);

        if (params.customClass && params.customClass[className]) {
          if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
            warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
            return;
          }

          addClass(elem, params.customClass[className]);
        }
      };
      /**
       * @param {HTMLElement} popup
       * @param {import('./renderers/renderInput').InputClass} inputClass
       * @returns {HTMLInputElement | null}
       */


      var getInput$1 = function getInput$1(popup, inputClass) {
        if (!inputClass) {
          return null;
        }

        switch (inputClass) {
          case 'select':
          case 'textarea':
          case 'file':
            return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));

          case 'checkbox':
            return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));

          case 'radio':
            return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));

          case 'range':
            return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));

          default:
            return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
        }
      };
      /**
       * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
       */


      var focusInput = function focusInput(input) {
        input.focus(); // place cursor at end of text in text input

        if (input.type !== 'file') {
          // http://stackoverflow.com/a/2345915
          var val = input.value;
          input.value = '';
          input.value = val;
        }
      };
      /**
       * @param {HTMLElement | HTMLElement[] | null} target
       * @param {string | string[] | readonly string[]} classList
       * @param {boolean} condition
       */


      var toggleClass = function toggleClass(target, classList, condition) {
        if (!target || !classList) {
          return;
        }

        if (typeof classList === 'string') {
          classList = classList.split(/\s+/).filter(Boolean);
        }

        classList.forEach(function (className) {
          if (Array.isArray(target)) {
            target.forEach(function (elem) {
              condition ? elem.classList.add(className) : elem.classList.remove(className);
            });
          } else {
            condition ? target.classList.add(className) : target.classList.remove(className);
          }
        });
      };
      /**
       * @param {HTMLElement | HTMLElement[] | null} target
       * @param {string | string[] | readonly string[]} classList
       */


      var addClass = function addClass(target, classList) {
        toggleClass(target, classList, true);
      };
      /**
       * @param {HTMLElement | HTMLElement[] | null} target
       * @param {string | string[] | readonly string[]} classList
       */


      var removeClass = function removeClass(target, classList) {
        toggleClass(target, classList, false);
      };
      /**
       * Get direct child of an element by class name
       *
       * @param {HTMLElement} elem
       * @param {string} className
       * @returns {HTMLElement | undefined}
       */


      var getDirectChildByClass = function getDirectChildByClass(elem, className) {
        var children = Array.from(elem.children);

        for (var i = 0; i < children.length; i++) {
          var child = children[i];

          if (child instanceof HTMLElement && hasClass(child, className)) {
            return child;
          }
        }
      };
      /**
       * @param {HTMLElement} elem
       * @param {string} property
       * @param {*} value
       */


      var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
        if (value === "".concat(parseInt(value))) {
          value = parseInt(value);
        }

        if (value || parseInt(value) === 0) {
          elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
        } else {
          elem.style.removeProperty(property);
        }
      };
      /**
       * @param {HTMLElement | null} elem
       * @param {string} display
       */


      var show = function show(elem) {
        var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
        elem && (elem.style.display = display);
      };
      /**
       * @param {HTMLElement | null} elem
       */


      var hide = function hide(elem) {
        elem && (elem.style.display = 'none');
      };
      /**
       * @param {HTMLElement} parent
       * @param {string} selector
       * @param {string} property
       * @param {string} value
       */


      var setStyle = function setStyle(parent, selector, property, value) {
        /** @type {HTMLElement} */
        var el = parent.querySelector(selector);

        if (el) {
          el.style[property] = value;
        }
      };
      /**
       * @param {HTMLElement} elem
       * @param {any} condition
       * @param {string} display
       */


      var toggle = function toggle(elem, condition) {
        var display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
        condition ? show(elem, display) : hide(elem);
      };
      /**
       * borrowed from jquery $(elem).is(':visible') implementation
       *
       * @param {HTMLElement} elem
       * @returns {boolean}
       */


      var isVisible$1 = function isVisible$1(elem) {
        return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
      };
      /**
       * @returns {boolean}
       */


      var allButtonsAreHidden = function allButtonsAreHidden() {
        return !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
      };
      /**
       * @param {HTMLElement} elem
       * @returns {boolean}
       */


      var isScrollable = function isScrollable(elem) {
        return !!(elem.scrollHeight > elem.clientHeight);
      };
      /**
       * borrowed from https://stackoverflow.com/a/46352119
       *
       * @param {HTMLElement} elem
       * @returns {boolean}
       */


      var hasCssAnimation = function hasCssAnimation(elem) {
        var style = window.getComputedStyle(elem);
        var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
        var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
        return animDuration > 0 || transDuration > 0;
      };
      /**
       * @param {number} timer
       * @param {boolean} reset
       */


      var animateTimerProgressBar = function animateTimerProgressBar(timer) {
        var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var timerProgressBar = getTimerProgressBar();

        if (isVisible$1(timerProgressBar)) {
          if (reset) {
            timerProgressBar.style.transition = 'none';
            timerProgressBar.style.width = '100%';
          }

          setTimeout(function () {
            timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
            timerProgressBar.style.width = '0%';
          }, 10);
        }
      };

      var stopTimerProgressBar = function stopTimerProgressBar() {
        var timerProgressBar = getTimerProgressBar();
        var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        timerProgressBar.style.removeProperty('transition');
        timerProgressBar.style.width = '100%';
        var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        var timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
        timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
      };
      /**
       * Detect Node env
       *
       * @returns {boolean}
       */


      var isNodeEnv = function isNodeEnv() {
        return typeof window === 'undefined' || typeof document === 'undefined';
      };

      var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
      /**
       * @returns {boolean}
       */

      var resetOldContainer = function resetOldContainer() {
        var oldContainer = getContainer();

        if (!oldContainer) {
          return false;
        }

        oldContainer.remove();
        removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
        return true;
      };

      var resetValidationMessage$1 = function resetValidationMessage$1() {
        globalState.currentInstance.resetValidationMessage();
      };

      var addInputChangeListeners = function addInputChangeListeners() {
        var popup = getPopup();
        var input = getDirectChildByClass(popup, swalClasses.input);
        var file = getDirectChildByClass(popup, swalClasses.file);
        /** @type {HTMLInputElement} */

        var range = popup.querySelector(".".concat(swalClasses.range, " input"));
        /** @type {HTMLOutputElement} */

        var rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
        var select = getDirectChildByClass(popup, swalClasses.select);
        /** @type {HTMLInputElement} */

        var checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
        var textarea = getDirectChildByClass(popup, swalClasses.textarea);
        input.oninput = resetValidationMessage$1;
        file.onchange = resetValidationMessage$1;
        select.onchange = resetValidationMessage$1;
        checkbox.onchange = resetValidationMessage$1;
        textarea.oninput = resetValidationMessage$1;

        range.oninput = function () {
          resetValidationMessage$1();
          rangeOutput.value = range.value;
        };

        range.onchange = function () {
          resetValidationMessage$1();
          rangeOutput.value = range.value;
        };
      };
      /**
       * @param {string | HTMLElement} target
       * @returns {HTMLElement}
       */


      var getTarget = function getTarget(target) {
        return typeof target === 'string' ? document.querySelector(target) : target;
      };
      /**
       * @param {SweetAlertOptions} params
       */


      var setupAccessibility = function setupAccessibility(params) {
        var popup = getPopup();
        popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
        popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

        if (!params.toast) {
          popup.setAttribute('aria-modal', 'true');
        }
      };
      /**
       * @param {HTMLElement} targetElement
       */


      var setupRTL = function setupRTL(targetElement) {
        if (window.getComputedStyle(targetElement).direction === 'rtl') {
          addClass(getContainer(), swalClasses.rtl);
        }
      };
      /**
       * Add modal + backdrop + no-war message for Russians to DOM
       *
       * @param {SweetAlertOptions} params
       */


      var init = function init(params) {
        // Clean up the old popup container if it exists
        var oldContainerExisted = resetOldContainer();
        /* istanbul ignore if */

        if (isNodeEnv()) {
          error('SweetAlert2 requires document to initialize');
          return;
        }

        var container = document.createElement('div');
        container.className = swalClasses.container;

        if (oldContainerExisted) {
          addClass(container, swalClasses['no-transition']);
        }

        setInnerHtml(container, sweetHTML);
        var targetElement = getTarget(params.target);
        targetElement.appendChild(container);
        setupAccessibility(params);
        setupRTL(targetElement);
        addInputChangeListeners();
      };
      /**
       * @param {HTMLElement | object | string} param
       * @param {HTMLElement} target
       */


      var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
        // DOM element
        if (param instanceof HTMLElement) {
          target.appendChild(param);
        } // Object
        else if (typeof param === 'object') {
            handleObject(param, target);
          } // Plain string
          else if (param) {
              setInnerHtml(target, param);
            }
      };
      /**
       * @param {object} param
       * @param {HTMLElement} target
       */


      var handleObject = function handleObject(param, target) {
        // JQuery element(s)
        if (param.jquery) {
          handleJqueryElem(target, param);
        } // For other objects use their string representation
        else {
            setInnerHtml(target, param.toString());
          }
      };
      /**
       * @param {HTMLElement} target
       * @param {HTMLElement} elem
       */


      var handleJqueryElem = function handleJqueryElem(target, elem) {
        target.textContent = '';

        if (0 in elem) {
          for (var i = 0; i in elem; i++) {
            target.appendChild(elem[i].cloneNode(true));
          }
        } else {
          target.appendChild(elem.cloneNode(true));
        }
      };
      /**
       * @returns {'webkitAnimationEnd' | 'animationend' | false}
       */


      var animationEndEvent = function () {
        // Prevent run in Node env

        /* istanbul ignore if */
        if (isNodeEnv()) {
          return false;
        }

        var testEl = document.createElement('div');
        var transEndEventNames = {
          WebkitAnimation: 'webkitAnimationEnd',
          // Chrome, Safari and Opera
          animation: 'animationend' // Standard syntax

        };

        for (var i in transEndEventNames) {
          if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
            return transEndEventNames[i];
          }
        }

        return false;
      }();
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var renderActions = function renderActions(instance, params) {
        var actions = getActions();
        var loader = getLoader(); // Actions (buttons) wrapper

        if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
          hide(actions);
        } else {
          show(actions);
        } // Custom class


        applyCustomClass(actions, params, 'actions'); // Render all the buttons

        renderButtons(actions, loader, params); // Loader

        setInnerHtml(loader, params.loaderHtml);
        applyCustomClass(loader, params, 'loader');
      };
      /**
       * @param {HTMLElement} actions
       * @param {HTMLElement} loader
       * @param {SweetAlertOptions} params
       */


      function renderButtons(actions, loader, params) {
        var confirmButton = getConfirmButton();
        var denyButton = getDenyButton();
        var cancelButton = getCancelButton(); // Render buttons

        renderButton(confirmButton, 'confirm', params);
        renderButton(denyButton, 'deny', params);
        renderButton(cancelButton, 'cancel', params);
        handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

        if (params.reverseButtons) {
          if (params.toast) {
            actions.insertBefore(cancelButton, confirmButton);
            actions.insertBefore(denyButton, confirmButton);
          } else {
            actions.insertBefore(cancelButton, loader);
            actions.insertBefore(denyButton, loader);
            actions.insertBefore(confirmButton, loader);
          }
        }
      }
      /**
       * @param {HTMLElement} confirmButton
       * @param {HTMLElement} denyButton
       * @param {HTMLElement} cancelButton
       * @param {SweetAlertOptions} params
       */


      function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
        if (!params.buttonsStyling) {
          removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
          return;
        }

        addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

        if (params.confirmButtonColor) {
          confirmButton.style.backgroundColor = params.confirmButtonColor;
          addClass(confirmButton, swalClasses['default-outline']);
        }

        if (params.denyButtonColor) {
          denyButton.style.backgroundColor = params.denyButtonColor;
          addClass(denyButton, swalClasses['default-outline']);
        }

        if (params.cancelButtonColor) {
          cancelButton.style.backgroundColor = params.cancelButtonColor;
          addClass(cancelButton, swalClasses['default-outline']);
        }
      }
      /**
       * @param {HTMLElement} button
       * @param {'confirm' | 'deny' | 'cancel'} buttonType
       * @param {SweetAlertOptions} params
       */


      function renderButton(button, buttonType, params) {
        toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
        setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

        button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
        // Add buttons custom classes

        button.className = swalClasses[buttonType];
        applyCustomClass(button, params, "".concat(buttonType, "Button"));
        addClass(button, params["".concat(buttonType, "ButtonClass")]);
      }
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var renderCloseButton = function renderCloseButton(instance, params) {
        var closeButton = getCloseButton();
        setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

        applyCustomClass(closeButton, params, 'closeButton');
        toggle(closeButton, params.showCloseButton);
        closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
      };
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var renderContainer = function renderContainer(instance, params) {
        var container = getContainer();

        if (!container) {
          return;
        }

        handleBackdropParam(container, params.backdrop);
        handlePositionParam(container, params.position);
        handleGrowParam(container, params.grow); // Custom class

        applyCustomClass(container, params, 'container');
      };
      /**
       * @param {HTMLElement} container
       * @param {SweetAlertOptions['backdrop']} backdrop
       */


      function handleBackdropParam(container, backdrop) {
        if (typeof backdrop === 'string') {
          container.style.background = backdrop;
        } else if (!backdrop) {
          addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
        }
      }
      /**
       * @param {HTMLElement} container
       * @param {SweetAlertOptions['position']} position
       */


      function handlePositionParam(container, position) {
        if (position in swalClasses) {
          addClass(container, swalClasses[position]);
        } else {
          warn('The "position" parameter is not valid, defaulting to "center"');
          addClass(container, swalClasses.center);
        }
      }
      /**
       * @param {HTMLElement} container
       * @param {SweetAlertOptions['grow']} grow
       */


      function handleGrowParam(container, grow) {
        if (grow && typeof grow === 'string') {
          var growClass = "grow-".concat(grow);

          if (growClass in swalClasses) {
            addClass(container, swalClasses[growClass]);
          }
        }
      } /// <reference path="../../../../sweetalert2.d.ts"/>

      /** @type {InputClass[]} */


      var inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */

      var renderInput = function renderInput(instance, params) {
        var popup = getPopup();
        var innerParams = privateProps.innerParams.get(instance);
        var rerender = !innerParams || params.input !== innerParams.input;
        inputClasses.forEach(function (inputClass) {
          var inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]); // set attributes

          setAttributes(inputClass, params.inputAttributes); // set class

          inputContainer.className = swalClasses[inputClass];

          if (rerender) {
            hide(inputContainer);
          }
        });

        if (params.input) {
          if (rerender) {
            showInput(params);
          } // set custom class


          setCustomClass(params);
        }
      };
      /**
       * @param {SweetAlertOptions} params
       */


      var showInput = function showInput(params) {
        if (!renderInputType[params.input]) {
          error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
          return;
        }

        var inputContainer = getInputContainer(params.input);
        var input = renderInputType[params.input](inputContainer, params);
        show(inputContainer); // input autofocus

        if (params.inputAutoFocus) {
          setTimeout(function () {
            focusInput(input);
          });
        }
      };
      /**
       * @param {HTMLInputElement} input
       */


      var removeAttributes = function removeAttributes(input) {
        for (var i = 0; i < input.attributes.length; i++) {
          var attrName = input.attributes[i].name;

          if (!['type', 'value', 'style'].includes(attrName)) {
            input.removeAttribute(attrName);
          }
        }
      };
      /**
       * @param {InputClass} inputClass
       * @param {SweetAlertOptions['inputAttributes']} inputAttributes
       */


      var setAttributes = function setAttributes(inputClass, inputAttributes) {
        var input = getInput$1(getPopup(), inputClass);

        if (!input) {
          return;
        }

        removeAttributes(input);

        for (var attr in inputAttributes) {
          input.setAttribute(attr, inputAttributes[attr]);
        }
      };
      /**
       * @param {SweetAlertOptions} params
       */


      var setCustomClass = function setCustomClass(params) {
        var inputContainer = getInputContainer(params.input);

        if (typeof params.customClass === 'object') {
          addClass(inputContainer, params.customClass.input);
        }
      };
      /**
       * @param {HTMLInputElement | HTMLTextAreaElement} input
       * @param {SweetAlertOptions} params
       */


      var setInputPlaceholder = function setInputPlaceholder(input, params) {
        if (!input.placeholder || params.inputPlaceholder) {
          input.placeholder = params.inputPlaceholder;
        }
      };
      /**
       * @param {Input} input
       * @param {Input} prependTo
       * @param {SweetAlertOptions} params
       */


      var setInputLabel = function setInputLabel(input, prependTo, params) {
        if (params.inputLabel) {
          input.id = swalClasses.input;
          var label = document.createElement('label');
          var labelClass = swalClasses['input-label'];
          label.setAttribute('for', input.id);
          label.className = labelClass;

          if (typeof params.customClass === 'object') {
            addClass(label, params.customClass.inputLabel);
          }

          label.innerText = params.inputLabel;
          prependTo.insertAdjacentElement('beforebegin', label);
        }
      };
      /**
       * @param {SweetAlertOptions['input']} inputType
       * @returns {HTMLElement}
       */


      var getInputContainer = function getInputContainer(inputType) {
        return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
      };
      /**
       * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
       * @param {SweetAlertOptions['inputValue']} inputValue
       */


      var checkAndSetInputValue = function checkAndSetInputValue(input, inputValue) {
        if (['string', 'number'].includes(typeof inputValue)) {
          input.value = "".concat(inputValue);
        } else if (!isPromise(inputValue)) {
          warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof inputValue, "\""));
        }
      };
      /** @type {Record<string, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */


      var renderInputType = {};
      /**
       * @param {HTMLInputElement} input
       * @param {SweetAlertOptions} params
       * @returns {HTMLInputElement}
       */

      renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
        checkAndSetInputValue(input, params.inputValue);
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        input.type = params.input;
        return input;
      };
      /**
       * @param {HTMLInputElement} input
       * @param {SweetAlertOptions} params
       * @returns {HTMLInputElement}
       */


      renderInputType.file = function (input, params) {
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        return input;
      };
      /**
       * @param {HTMLInputElement} range
       * @param {SweetAlertOptions} params
       * @returns {HTMLInputElement}
       */


      renderInputType.range = function (range, params) {
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        checkAndSetInputValue(rangeInput, params.inputValue);
        rangeInput.type = params.input;
        checkAndSetInputValue(rangeOutput, params.inputValue);
        setInputLabel(rangeInput, range, params);
        return range;
      };
      /**
       * @param {HTMLSelectElement} select
       * @param {SweetAlertOptions} params
       * @returns {HTMLSelectElement}
       */


      renderInputType.select = function (select, params) {
        select.textContent = '';

        if (params.inputPlaceholder) {
          var placeholder = document.createElement('option');
          setInnerHtml(placeholder, params.inputPlaceholder);
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }

        setInputLabel(select, select, params);
        return select;
      };
      /**
       * @param {HTMLInputElement} radio
       * @returns {HTMLInputElement}
       */


      renderInputType.radio = function (radio) {
        radio.textContent = '';
        return radio;
      };
      /**
       * @param {HTMLLabelElement} checkboxContainer
       * @param {SweetAlertOptions} params
       * @returns {HTMLInputElement}
       */


      renderInputType.checkbox = function (checkboxContainer, params) {
        var checkbox = getInput$1(getPopup(), 'checkbox');
        checkbox.value = '1';
        checkbox.id = swalClasses.checkbox;
        checkbox.checked = Boolean(params.inputValue);
        var label = checkboxContainer.querySelector('span');
        setInnerHtml(label, params.inputPlaceholder);
        return checkbox;
      };
      /**
       * @param {HTMLTextAreaElement} textarea
       * @param {SweetAlertOptions} params
       * @returns {HTMLTextAreaElement}
       */


      renderInputType.textarea = function (textarea, params) {
        checkAndSetInputValue(textarea, params.inputValue);
        setInputPlaceholder(textarea, params);
        setInputLabel(textarea, textarea, params);
        /**
         * @param {HTMLElement} el
         * @returns {number}
         */

        var getMargin = function getMargin(el) {
          return parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
        }; // https://github.com/sweetalert2/sweetalert2/issues/2291


        setTimeout(function () {
          // https://github.com/sweetalert2/sweetalert2/issues/1699
          if ('MutationObserver' in window) {
            var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

            var textareaResizeHandler = function textareaResizeHandler() {
              var textareaWidth = textarea.offsetWidth + getMargin(textarea);

              if (textareaWidth > initialPopupWidth) {
                getPopup().style.width = "".concat(textareaWidth, "px");
              } else {
                getPopup().style.width = null;
              }
            };

            new MutationObserver(textareaResizeHandler).observe(textarea, {
              attributes: true,
              attributeFilter: ['style']
            });
          }
        });
        return textarea;
      };
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var renderContent = function renderContent(instance, params) {
        var htmlContainer = getHtmlContainer();
        applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

        if (params.html) {
          parseHtmlToContainer(params.html, htmlContainer);
          show(htmlContainer, 'block');
        } // Content as plain text
        else if (params.text) {
            htmlContainer.textContent = params.text;
            show(htmlContainer, 'block');
          } // No content
          else {
              hide(htmlContainer);
            }

        renderInput(instance, params);
      };
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var renderFooter = function renderFooter(instance, params) {
        var footer = getFooter();

        if (!footer) {
          return;
        }

        toggle(footer, params.footer);

        if (params.footer) {
          parseHtmlToContainer(params.footer, footer);
        } // Custom class


        applyCustomClass(footer, params, 'footer');
      };
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var renderIcon = function renderIcon(instance, params) {
        var innerParams = privateProps.innerParams.get(instance);
        var icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

        if (innerParams && params.icon === innerParams.icon) {
          // Custom or default content
          setContent(icon, params);
          applyStyles(icon, params);
          return;
        }

        if (!params.icon && !params.iconHtml) {
          hide(icon);
          return;
        }

        if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
          error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
          hide(icon);
          return;
        }

        show(icon); // Custom or default content

        setContent(icon, params);
        applyStyles(icon, params); // Animate icon

        addClass(icon, params.showClass.icon);
      };
      /**
       * @param {HTMLElement} icon
       * @param {SweetAlertOptions} params
       */


      var applyStyles = function applyStyles(icon, params) {
        for (var iconType in iconTypes) {
          if (params.icon !== iconType) {
            removeClass(icon, iconTypes[iconType]);
          }
        }

        addClass(icon, iconTypes[params.icon]); // Icon color

        setColor(icon, params); // Success icon background color

        adjustSuccessIconBackgroundColor(); // Custom class

        applyCustomClass(icon, params, 'icon');
      }; // Adjust success icon background color to match the popup background color


      var adjustSuccessIconBackgroundColor = function adjustSuccessIconBackgroundColor() {
        var popup = getPopup();
        var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
        /** @type {NodeListOf<HTMLElement>} */

        var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

        for (var i = 0; i < successIconParts.length; i++) {
          successIconParts[i].style.backgroundColor = popupBackgroundColor;
        }
      };

      var successIconHtml = "\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n";
      var errorIconHtml = "\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n";
      /**
       * @param {HTMLElement} icon
       * @param {SweetAlertOptions} params
       */

      var setContent = function setContent(icon, params) {
        var oldContent = icon.innerHTML;
        var newContent;

        if (params.iconHtml) {
          newContent = iconContent(params.iconHtml);
        } else if (params.icon === 'success') {
          newContent = successIconHtml;
          oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
        } else if (params.icon === 'error') {
          newContent = errorIconHtml;
        } else {
          var defaultIconHtml = {
            question: '?',
            warning: '!',
            info: 'i'
          };
          newContent = iconContent(defaultIconHtml[params.icon]);
        }

        if (oldContent.trim() !== newContent.trim()) {
          setInnerHtml(icon, newContent);
        }
      };
      /**
       * @param {HTMLElement} icon
       * @param {SweetAlertOptions} params
       */


      var setColor = function setColor(icon, params) {
        if (!params.iconColor) {
          return;
        }

        icon.style.color = params.iconColor;
        icon.style.borderColor = params.iconColor;

        for (var _i2 = 0, _arr2 = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i2 < _arr2.length; _i2++) {
          var sel = _arr2[_i2];
          setStyle(icon, sel, 'backgroundColor', params.iconColor);
        }

        setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
      };
      /**
       * @param {string} content
       * @returns {string}
       */


      var iconContent = function iconContent(content) {
        return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
      };
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var renderImage = function renderImage(instance, params) {
        var image = getImage();

        if (!image) {
          return;
        }

        if (!params.imageUrl) {
          hide(image);
          return;
        }

        show(image, ''); // Src, alt

        image.setAttribute('src', params.imageUrl);
        image.setAttribute('alt', params.imageAlt || ''); // Width, height

        applyNumericalStyle(image, 'width', params.imageWidth);
        applyNumericalStyle(image, 'height', params.imageHeight); // Class

        image.className = swalClasses.image;
        applyCustomClass(image, params, 'image');
      };
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var renderPopup = function renderPopup(instance, params) {
        var container = getContainer();
        var popup = getPopup();

        if (!container || !popup) {
          return;
        } // Width
        // https://github.com/sweetalert2/sweetalert2/issues/2170


        if (params.toast) {
          applyNumericalStyle(container, 'width', params.width);
          popup.style.width = '100%';
          var loader = getLoader();
          loader && popup.insertBefore(loader, getIcon());
        } else {
          applyNumericalStyle(popup, 'width', params.width);
        } // Padding


        applyNumericalStyle(popup, 'padding', params.padding); // Color

        if (params.color) {
          popup.style.color = params.color;
        } // Background


        if (params.background) {
          popup.style.background = params.background;
        }

        hide(getValidationMessage()); // Classes

        addClasses$1(popup, params);
      };
      /**
       * @param {HTMLElement} popup
       * @param {SweetAlertOptions} params
       */


      var addClasses$1 = function addClasses$1(popup, params) {
        var showClass = params.showClass || {}; // Default Class + showClass when updating Swal.update({})

        popup.className = "".concat(swalClasses.popup, " ").concat(isVisible$1(popup) ? showClass.popup : '');

        if (params.toast) {
          addClass([document.documentElement, document.body], swalClasses['toast-shown']);
          addClass(popup, swalClasses.toast);
        } else {
          addClass(popup, swalClasses.modal);
        } // Custom class


        applyCustomClass(popup, params, 'popup');

        if (typeof params.customClass === 'string') {
          addClass(popup, params.customClass);
        } // Icon class (#1842)


        if (params.icon) {
          addClass(popup, swalClasses["icon-".concat(params.icon)]);
        }
      };
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var renderProgressSteps = function renderProgressSteps(instance, params) {
        var progressStepsContainer = getProgressSteps();

        if (!progressStepsContainer) {
          return;
        }

        var progressSteps = params.progressSteps,
            currentProgressStep = params.currentProgressStep;

        if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
          hide(progressStepsContainer);
          return;
        }

        show(progressStepsContainer);
        progressStepsContainer.textContent = '';

        if (currentProgressStep >= progressSteps.length) {
          warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
        }

        progressSteps.forEach(function (step, index) {
          var stepEl = createStepElement(step);
          progressStepsContainer.appendChild(stepEl);

          if (index === currentProgressStep) {
            addClass(stepEl, swalClasses['active-progress-step']);
          }

          if (index !== progressSteps.length - 1) {
            var lineEl = createLineElement(params);
            progressStepsContainer.appendChild(lineEl);
          }
        });
      };
      /**
       * @param {string} step
       * @returns {HTMLLIElement}
       */


      var createStepElement = function createStepElement(step) {
        var stepEl = document.createElement('li');
        addClass(stepEl, swalClasses['progress-step']);
        setInnerHtml(stepEl, step);
        return stepEl;
      };
      /**
       * @param {SweetAlertOptions} params
       * @returns {HTMLLIElement}
       */


      var createLineElement = function createLineElement(params) {
        var lineEl = document.createElement('li');
        addClass(lineEl, swalClasses['progress-step-line']);

        if (params.progressStepsDistance) {
          applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
        }

        return lineEl;
      };
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var renderTitle = function renderTitle(instance, params) {
        var title = getTitle();

        if (!title) {
          return;
        }

        toggle(title, params.title || params.titleText, 'block');

        if (params.title) {
          parseHtmlToContainer(params.title, title);
        }

        if (params.titleText) {
          title.innerText = params.titleText;
        } // Custom class


        applyCustomClass(title, params, 'title');
      };
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var render = function render(instance, params) {
        renderPopup(instance, params);
        renderContainer(instance, params);
        renderProgressSteps(instance, params);
        renderIcon(instance, params);
        renderImage(instance, params);
        renderTitle(instance, params);
        renderCloseButton(instance, params);
        renderContent(instance, params);
        renderActions(instance, params);
        renderFooter(instance, params);

        if (typeof params.didRender === 'function') {
          params.didRender(getPopup());
        }
      };
      /*
       * Global function to determine if SweetAlert2 popup is shown
       */


      var isVisible = function isVisible() {
        return isVisible$1(getPopup());
      };
      /*
       * Global function to click 'Confirm' button
       */


      var clickConfirm = function clickConfirm() {
        return getConfirmButton() && getConfirmButton().click();
      };
      /*
       * Global function to click 'Deny' button
       */


      var clickDeny = function clickDeny() {
        return getDenyButton() && getDenyButton().click();
      };
      /*
       * Global function to click 'Cancel' button
       */


      var clickCancel = function clickCancel() {
        return getCancelButton() && getCancelButton().click();
      };
      /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */

      /** @type {Record<DismissReason, DismissReason>} */


      var DismissReason = Object.freeze({
        cancel: 'cancel',
        backdrop: 'backdrop',
        close: 'close',
        esc: 'esc',
        timer: 'timer'
      });
      /**
       * @param {GlobalState} globalState
       */

      var removeKeydownHandler = function removeKeydownHandler(globalState) {
        if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
          globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
            capture: globalState.keydownListenerCapture
          });
          globalState.keydownHandlerAdded = false;
        }
      };
      /**
       * @param {SweetAlert} instance
       * @param {GlobalState} globalState
       * @param {SweetAlertOptions} innerParams
       * @param {*} dismissWith
       */


      var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
        removeKeydownHandler(globalState);

        if (!innerParams.toast) {
          globalState.keydownHandler = function (e) {
            return keydownHandler(instance, e, dismissWith);
          };

          globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
          globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
          globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
            capture: globalState.keydownListenerCapture
          });
          globalState.keydownHandlerAdded = true;
        }
      };
      /**
       * @param {number} index
       * @param {number} increment
       */


      var setFocus = function setFocus(index, increment) {
        var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

        if (focusableElements.length) {
          index = index + increment; // rollover to first item

          if (index === focusableElements.length) {
            index = 0; // go to last item
          } else if (index === -1) {
            index = focusableElements.length - 1;
          }

          focusableElements[index].focus();
          return;
        } // no visible focusable elements, focus the popup


        getPopup().focus();
      };

      var arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
      var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];
      /**
       * @param {SweetAlert} instance
       * @param {KeyboardEvent} event
       * @param {Function} dismissWith
       */

      var keydownHandler = function keydownHandler(instance, event, dismissWith) {
        var innerParams = privateProps.innerParams.get(instance);

        if (!innerParams) {
          return; // This instance has already been destroyed
        } // Ignore keydown during IME composition
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
        // https://github.com/sweetalert2/sweetalert2/issues/720
        // https://github.com/sweetalert2/sweetalert2/issues/2406


        if (event.isComposing || event.keyCode === 229) {
          return;
        }

        if (innerParams.stopKeydownPropagation) {
          event.stopPropagation();
        } // ENTER


        if (event.key === 'Enter') {
          handleEnter(instance, event, innerParams);
        } // TAB
        else if (event.key === 'Tab') {
            handleTab(event);
          } // ARROWS - switch focus between buttons
          else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).includes(event.key)) {
              handleArrows(event.key);
            } // ESC
            else if (event.key === 'Escape') {
                handleEsc(event, innerParams, dismissWith);
              }
      };
      /**
       * @param {SweetAlert} instance
       * @param {KeyboardEvent} event
       * @param {SweetAlertOptions} innerParams
       */


      var handleEnter = function handleEnter(instance, event, innerParams) {
        // https://github.com/sweetalert2/sweetalert2/issues/2386
        if (!callIfFunction(innerParams.allowEnterKey)) {
          return;
        }

        if (event.target && instance.getInput() && event.target instanceof HTMLElement && event.target.outerHTML === instance.getInput().outerHTML) {
          if (['textarea', 'file'].includes(innerParams.input)) {
            return; // do not submit
          }

          clickConfirm();
          event.preventDefault();
        }
      };
      /**
       * @param {KeyboardEvent} event
       */


      var handleTab = function handleTab(event) {
        var targetElement = event.target;
        var focusableElements = getFocusableElements();
        var btnIndex = -1;

        for (var i = 0; i < focusableElements.length; i++) {
          if (targetElement === focusableElements[i]) {
            btnIndex = i;
            break;
          }
        } // Cycle to the next button


        if (!event.shiftKey) {
          setFocus(btnIndex, 1);
        } // Cycle to the prev button
        else {
            setFocus(btnIndex, -1);
          }

        event.stopPropagation();
        event.preventDefault();
      };
      /**
       * @param {string} key
       */


      var handleArrows = function handleArrows(key) {
        var confirmButton = getConfirmButton();
        var denyButton = getDenyButton();
        var cancelButton = getCancelButton();
        /** @type HTMLElement[] */

        var buttons = [confirmButton, denyButton, cancelButton];

        if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
          return;
        }

        var sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
        var buttonToFocus = document.activeElement;

        for (var i = 0; i < getActions().children.length; i++) {
          buttonToFocus = buttonToFocus[sibling];

          if (!buttonToFocus) {
            return;
          }

          if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
            break;
          }
        }

        if (buttonToFocus instanceof HTMLButtonElement) {
          buttonToFocus.focus();
        }
      };
      /**
       * @param {KeyboardEvent} event
       * @param {SweetAlertOptions} innerParams
       * @param {Function} dismissWith
       */


      var handleEsc = function handleEsc(event, innerParams, dismissWith) {
        if (callIfFunction(innerParams.allowEscapeKey)) {
          event.preventDefault();
          dismissWith(DismissReason.esc);
        }
      };
      /**
       * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
       * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
       * This is the approach that Babel will probably take to implement private methods/fields
       *   https://github.com/tc39/proposal-private-methods
       *   https://github.com/babel/babel/pull/7555
       * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
       *   then we can use that language feature.
       */


      var privateMethods = {
        swalPromiseResolve: new WeakMap(),
        swalPromiseReject: new WeakMap()
      }; // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
      // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
      // elements not within the active modal dialog will not be surfaced if a user opens a screen
      // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

      var setAriaHidden = function setAriaHidden() {
        var bodyChildren = Array.from(document.body.children);
        bodyChildren.forEach(function (el) {
          if (el === getContainer() || el.contains(getContainer())) {
            return;
          }

          if (el.hasAttribute('aria-hidden')) {
            el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
          }

          el.setAttribute('aria-hidden', 'true');
        });
      };

      var unsetAriaHidden = function unsetAriaHidden() {
        var bodyChildren = Array.from(document.body.children);
        bodyChildren.forEach(function (el) {
          if (el.hasAttribute('data-previous-aria-hidden')) {
            el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
            el.removeAttribute('data-previous-aria-hidden');
          } else {
            el.removeAttribute('aria-hidden');
          }
        });
      };
      /* istanbul ignore file */
      // Fix iOS scrolling http://stackoverflow.com/q/39626302


      var iOSfix = function iOSfix() {
        var iOS = // @ts-ignore
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

        if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
          var offset = document.body.scrollTop;
          document.body.style.top = "".concat(offset * -1, "px");
          addClass(document.body, swalClasses.iosfix);
          lockBodyScroll();
          addBottomPaddingForTallPopups();
        }
      };
      /**
       * https://github.com/sweetalert2/sweetalert2/issues/1948
       */


      var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
        var ua = navigator.userAgent;
        var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
        var webkit = !!ua.match(/WebKit/i);
        var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

        if (iOSSafari) {
          var bottomPanelHeight = 44;

          if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
            getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
          }
        }
      };
      /**
       * https://github.com/sweetalert2/sweetalert2/issues/1246
       */


      var lockBodyScroll = function lockBodyScroll() {
        var container = getContainer();
        var preventTouchMove;
        /**
         * @param {TouchEvent} event
         */

        container.ontouchstart = function (event) {
          preventTouchMove = shouldPreventTouchMove(event);
        };
        /**
         * @param {TouchEvent} event
         */


        container.ontouchmove = function (event) {
          if (preventTouchMove) {
            event.preventDefault();
            event.stopPropagation();
          }
        };
      };
      /**
       * @param {TouchEvent} event
       * @returns {boolean}
       */


      var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
        var target = event.target;
        var container = getContainer();

        if (isStylus(event) || isZoom(event)) {
          return false;
        }

        if (target === container) {
          return true;
        }

        if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' && // #1603
        target.tagName !== 'TEXTAREA' && // #2266
        !(isScrollable(getHtmlContainer()) && // #1944
        getHtmlContainer().contains(target))) {
          return true;
        }

        return false;
      };
      /**
       * https://github.com/sweetalert2/sweetalert2/issues/1786
       *
       * @param {*} event
       * @returns {boolean}
       */


      var isStylus = function isStylus(event) {
        return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
      };
      /**
       * https://github.com/sweetalert2/sweetalert2/issues/1891
       *
       * @param {TouchEvent} event
       * @returns {boolean}
       */


      var isZoom = function isZoom(event) {
        return event.touches && event.touches.length > 1;
      };

      var undoIOSfix = function undoIOSfix() {
        if (hasClass(document.body, swalClasses.iosfix)) {
          var offset = parseInt(document.body.style.top, 10);
          removeClass(document.body, swalClasses.iosfix);
          document.body.style.top = '';
          document.body.scrollTop = offset * -1;
        }
      };
      /**
       * Measure scrollbar width for padding body during modal show/hide
       * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
       *
       * @returns {number}
       */


      var measureScrollbar = function measureScrollbar() {
        var scrollDiv = document.createElement('div');
        scrollDiv.className = swalClasses['scrollbar-measure'];
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      };
      /**
       * Remember state in cases where opening and handling a modal will fiddle with it.
       * @type {number | null}
       */


      var previousBodyPadding = null;

      var fixScrollbar = function fixScrollbar() {
        // for queues, do not do this more than once
        if (previousBodyPadding !== null) {
          return;
        } // if the body has overflow


        if (document.body.scrollHeight > window.innerHeight) {
          // add padding so the content doesn't shift after removal of scrollbar
          previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
          document.body.style.paddingRight = "".concat(previousBodyPadding + measureScrollbar(), "px");
        }
      };

      var undoScrollbar = function undoScrollbar() {
        if (previousBodyPadding !== null) {
          document.body.style.paddingRight = "".concat(previousBodyPadding, "px");
          previousBodyPadding = null;
        }
      };
      /**
       * @param {SweetAlert} instance
       * @param {HTMLElement} container
       * @param {boolean} returnFocus
       * @param {Function} didClose
       */


      function removePopupAndResetState(instance, container, returnFocus, didClose) {
        if (isToast()) {
          triggerDidCloseAndDispose(instance, didClose);
        } else {
          restoreActiveElement(returnFocus).then(function () {
            return triggerDidCloseAndDispose(instance, didClose);
          });
          removeKeydownHandler(globalState);
        }

        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
        // for some reason removing the container in Safari will scroll the document to bottom

        if (isSafari) {
          container.setAttribute('style', 'display:none !important');
          container.removeAttribute('class');
          container.innerHTML = '';
        } else {
          container.remove();
        }

        if (isModal()) {
          undoScrollbar();
          undoIOSfix();
          unsetAriaHidden();
        }

        removeBodyClasses();
      }
      /**
       * Remove SweetAlert2 classes from body
       */


      function removeBodyClasses() {
        removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
      }
      /**
       * Instance method to close sweetAlert
       *
       * @param {any} resolveValue
       */


      function close(resolveValue) {
        resolveValue = prepareResolveValue(resolveValue);
        var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
        var didClose = triggerClosePopup(this);

        if (this.isAwaitingPromise) {
          // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
          if (!resolveValue.isDismissed) {
            handleAwaitingPromise(this);
            swalPromiseResolve(resolveValue);
          }
        } else if (didClose) {
          // Resolve Swal promise
          swalPromiseResolve(resolveValue);
        }
      }

      var triggerClosePopup = function triggerClosePopup(instance) {
        var popup = getPopup();

        if (!popup) {
          return false;
        }

        var innerParams = privateProps.innerParams.get(instance);

        if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
          return false;
        }

        removeClass(popup, innerParams.showClass.popup);
        addClass(popup, innerParams.hideClass.popup);
        var backdrop = getContainer();
        removeClass(backdrop, innerParams.showClass.backdrop);
        addClass(backdrop, innerParams.hideClass.backdrop);
        handlePopupAnimation(instance, popup, innerParams);
        return true;
      };
      /**
       * @param {any} error
       */


      function rejectPromise(error) {
        var rejectPromise = privateMethods.swalPromiseReject.get(this);
        handleAwaitingPromise(this);

        if (rejectPromise) {
          // Reject Swal promise
          rejectPromise(error);
        }
      }
      /**
       * @param {SweetAlert} instance
       */


      var handleAwaitingPromise = function handleAwaitingPromise(instance) {
        if (instance.isAwaitingPromise) {
          delete instance.isAwaitingPromise; // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335

          if (!privateProps.innerParams.get(instance)) {
            instance._destroy();
          }
        }
      };
      /**
       * @param {any} resolveValue
       * @returns {SweetAlertResult}
       */


      var prepareResolveValue = function prepareResolveValue(resolveValue) {
        // When user calls Swal.close()
        if (typeof resolveValue === 'undefined') {
          return {
            isConfirmed: false,
            isDenied: false,
            isDismissed: true
          };
        }

        return Object.assign({
          isConfirmed: false,
          isDenied: false,
          isDismissed: false
        }, resolveValue);
      };
      /**
       * @param {SweetAlert} instance
       * @param {HTMLElement} popup
       * @param {SweetAlertOptions} innerParams
       */


      var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
        var container = getContainer(); // If animation is supported, animate

        var animationIsSupported = animationEndEvent && hasCssAnimation(popup);

        if (typeof innerParams.willClose === 'function') {
          innerParams.willClose(popup);
        }

        if (animationIsSupported) {
          animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
        } else {
          // Otherwise, remove immediately
          removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
        }
      };
      /**
       * @param {SweetAlert} instance
       * @param {HTMLElement} popup
       * @param {HTMLElement} container
       * @param {boolean} returnFocus
       * @param {Function} didClose
       */


      var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
        globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
        popup.addEventListener(animationEndEvent, function (e) {
          if (e.target === popup) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
          }
        });
      };
      /**
       * @param {SweetAlert} instance
       * @param {Function} didClose
       */


      var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
        setTimeout(function () {
          if (typeof didClose === 'function') {
            didClose.bind(instance.params)();
          } // instance might have been destroyed already


          if (instance._destroy) {
            instance._destroy();
          }
        });
      };
      /**
       * Shows loader (spinner), this is useful with AJAX requests.
       * By default the loader be shown instead of the "Confirm" button.
       *
       * @param {HTMLButtonElement} [buttonToReplace]
       */


      var showLoading = function showLoading(buttonToReplace) {
        var popup = getPopup();

        if (!popup) {
          new Swal(); // eslint-disable-line no-new
        }

        popup = getPopup();
        var loader = getLoader();

        if (isToast()) {
          hide(getIcon());
        } else {
          replaceButton(popup, buttonToReplace);
        }

        show(loader);
        popup.setAttribute('data-loading', 'true');
        popup.setAttribute('aria-busy', 'true');
        popup.focus();
      };
      /**
       * @param {HTMLElement} popup
       * @param {HTMLButtonElement} [buttonToReplace]
       */


      var replaceButton = function replaceButton(popup, buttonToReplace) {
        var actions = getActions();
        var loader = getLoader();

        if (!buttonToReplace && isVisible$1(getConfirmButton())) {
          buttonToReplace = getConfirmButton();
        }

        show(actions);

        if (buttonToReplace) {
          hide(buttonToReplace);
          loader.setAttribute('data-button-to-replace', buttonToReplace.className);
        }

        loader.parentNode.insertBefore(loader, buttonToReplace);
        addClass([popup, actions], swalClasses.loading);
      };
      /**
       * @typedef { string | number | boolean } InputValue
       */

      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
        if (params.input === 'select' || params.input === 'radio') {
          handleInputOptions(instance, params);
        } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
          showLoading(getConfirmButton());
          handleInputValue(instance, params);
        }
      };
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} innerParams
       * @returns {string | number | File | FileList | null}
       */


      var getInputValue = function getInputValue(instance, innerParams) {
        var input = instance.getInput();

        if (!input) {
          return null;
        }

        switch (innerParams.input) {
          case 'checkbox':
            return getCheckboxValue(input);

          case 'radio':
            return getRadioValue(input);

          case 'file':
            return getFileValue(input);

          default:
            return innerParams.inputAutoTrim ? input.value.trim() : input.value;
        }
      };
      /**
       * @param {HTMLInputElement} input
       * @returns {number}
       */


      var getCheckboxValue = function getCheckboxValue(input) {
        return input.checked ? 1 : 0;
      };
      /**
       * @param {HTMLInputElement} input
       * @returns {string | null}
       */


      var getRadioValue = function getRadioValue(input) {
        return input.checked ? input.value : null;
      };
      /**
       * @param {HTMLInputElement} input
       * @returns {FileList | File | null}
       */


      var getFileValue = function getFileValue(input) {
        return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
      };
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var handleInputOptions = function handleInputOptions(instance, params) {
        var popup = getPopup();
        /**
         * @param {Record<string, any>} inputOptions
         */

        var processInputOptions = function processInputOptions(inputOptions) {
          populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
        };

        if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
          showLoading(getConfirmButton());
          asPromise(params.inputOptions).then(function (inputOptions) {
            instance.hideLoading();
            processInputOptions(inputOptions);
          });
        } else if (typeof params.inputOptions === 'object') {
          processInputOptions(params.inputOptions);
        } else {
          error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
        }
      };
      /**
       * @param {SweetAlert} instance
       * @param {SweetAlertOptions} params
       */


      var handleInputValue = function handleInputValue(instance, params) {
        var input = instance.getInput();
        hide(input);
        asPromise(params.inputValue).then(function (inputValue) {
          input.value = params.input === 'number' ? "".concat(parseFloat(inputValue) || 0) : "".concat(inputValue);
          show(input);
          input.focus();
          instance.hideLoading();
        }).catch(function (err) {
          error("Error in inputValue promise: ".concat(err));
          input.value = '';
          show(input);
          input.focus();
          instance.hideLoading();
        });
      };

      var populateInputOptions = {
        /**
         * @param {HTMLElement} popup
         * @param {Record<string, any>} inputOptions
         * @param {SweetAlertOptions} params
         */
        select: function select(popup, inputOptions, params) {
          var select = getDirectChildByClass(popup, swalClasses.select);
          /**
           * @param {HTMLElement} parent
           * @param {string} optionLabel
           * @param {string} optionValue
           */

          var renderOption = function renderOption(parent, optionLabel, optionValue) {
            var option = document.createElement('option');
            option.value = optionValue;
            setInnerHtml(option, optionLabel);
            option.selected = isSelected(optionValue, params.inputValue);
            parent.appendChild(option);
          };

          inputOptions.forEach(function (inputOption) {
            var optionValue = inputOption[0];
            var optionLabel = inputOption[1]; // <optgroup> spec:
            // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
            // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
            // check whether this is a <optgroup>

            if (Array.isArray(optionLabel)) {
              // if it is an array, then it is an <optgroup>
              var optgroup = document.createElement('optgroup');
              optgroup.label = optionValue;
              optgroup.disabled = false; // not configurable for now

              select.appendChild(optgroup);
              optionLabel.forEach(function (o) {
                return renderOption(optgroup, o[1], o[0]);
              });
            } else {
              // case of <option>
              renderOption(select, optionLabel, optionValue);
            }
          });
          select.focus();
        },

        /**
         * @param {HTMLElement} popup
         * @param {Record<string, any>} inputOptions
         * @param {SweetAlertOptions} params
         */
        radio: function radio(popup, inputOptions, params) {
          var radio = getDirectChildByClass(popup, swalClasses.radio);
          inputOptions.forEach(function (inputOption) {
            var radioValue = inputOption[0];
            var radioLabel = inputOption[1];
            var radioInput = document.createElement('input');
            var radioLabelElement = document.createElement('label');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;

            if (isSelected(radioValue, params.inputValue)) {
              radioInput.checked = true;
            }

            var label = document.createElement('span');
            setInnerHtml(label, radioLabel);
            label.className = swalClasses.label;
            radioLabelElement.appendChild(radioInput);
            radioLabelElement.appendChild(label);
            radio.appendChild(radioLabelElement);
          });
          var radios = radio.querySelectorAll('input');

          if (radios.length) {
            radios[0].focus();
          }
        }
      };
      /**
       * Converts `inputOptions` into an array of `[value, label]`s
       *
       * @param {Record<string, any>} inputOptions
       * @returns {Array<Array<string>>}
       */

      var formatInputOptions = function formatInputOptions(inputOptions) {
        var result = [];

        if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
          inputOptions.forEach(function (value, key) {
            var valueFormatted = value;

            if (typeof valueFormatted === 'object') {
              // case of <optgroup>
              valueFormatted = formatInputOptions(valueFormatted);
            }

            result.push([key, valueFormatted]);
          });
        } else {
          Object.keys(inputOptions).forEach(function (key) {
            var valueFormatted = inputOptions[key];

            if (typeof valueFormatted === 'object') {
              // case of <optgroup>
              valueFormatted = formatInputOptions(valueFormatted);
            }

            result.push([key, valueFormatted]);
          });
        }

        return result;
      };
      /**
       * @param {string} optionValue
       * @param {InputValue | Promise<InputValue> | { toPromise: () => InputValue }} inputValue
       * @returns {boolean}
       */


      var isSelected = function isSelected(optionValue, inputValue) {
        return inputValue && inputValue.toString() === optionValue.toString();
      };
      /**
       * @param {SweetAlert} instance
       */


      var handleConfirmButtonClick = function handleConfirmButtonClick(instance) {
        var innerParams = privateProps.innerParams.get(instance);
        instance.disableButtons();

        if (innerParams.input) {
          handleConfirmOrDenyWithInput(instance, 'confirm');
        } else {
          confirm(instance, true);
        }
      };
      /**
       * @param {SweetAlert} instance
       */


      var handleDenyButtonClick = function handleDenyButtonClick(instance) {
        var innerParams = privateProps.innerParams.get(instance);
        instance.disableButtons();

        if (innerParams.returnInputValueOnDeny) {
          handleConfirmOrDenyWithInput(instance, 'deny');
        } else {
          deny(instance, false);
        }
      };
      /**
       * @param {SweetAlert} instance
       * @param {Function} dismissWith
       */


      var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
        instance.disableButtons();
        dismissWith(DismissReason.cancel);
      };
      /**
       * @param {SweetAlert} instance
       * @param {'confirm' | 'deny'} type
       */


      var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, type) {
        var innerParams = privateProps.innerParams.get(instance);

        if (!innerParams.input) {
          error("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(capitalizeFirstLetter(type)));
          return;
        }

        var inputValue = getInputValue(instance, innerParams);

        if (innerParams.inputValidator) {
          handleInputValidator(instance, inputValue, type);
        } else if (!instance.getInput().checkValidity()) {
          instance.enableButtons();
          instance.showValidationMessage(innerParams.validationMessage);
        } else if (type === 'deny') {
          deny(instance, inputValue);
        } else {
          confirm(instance, inputValue);
        }
      };
      /**
       * @param {SweetAlert} instance
       * @param {string | number | File | FileList | null} inputValue
       * @param {'confirm' | 'deny'} type
       */


      var handleInputValidator = function handleInputValidator(instance, inputValue, type) {
        var innerParams = privateProps.innerParams.get(instance);
        instance.disableInput();
        var validationPromise = Promise.resolve().then(function () {
          return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
        });
        validationPromise.then(function (validationMessage) {
          instance.enableButtons();
          instance.enableInput();

          if (validationMessage) {
            instance.showValidationMessage(validationMessage);
          } else if (type === 'deny') {
            deny(instance, inputValue);
          } else {
            confirm(instance, inputValue);
          }
        });
      };
      /**
       * @param {SweetAlert} instance
       * @param {any} value
       */


      var deny = function deny(instance, value) {
        var innerParams = privateProps.innerParams.get(instance || undefined);

        if (innerParams.showLoaderOnDeny) {
          showLoading(getDenyButton());
        }

        if (innerParams.preDeny) {
          instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received

          var preDenyPromise = Promise.resolve().then(function () {
            return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
          });
          preDenyPromise.then(function (preDenyValue) {
            if (preDenyValue === false) {
              instance.hideLoading();
              handleAwaitingPromise(instance);
            } else {
              instance.close({
                isDenied: true,
                value: typeof preDenyValue === 'undefined' ? value : preDenyValue
              });
            }
          }).catch(function (error) {
            return rejectWith(instance || undefined, error);
          });
        } else {
          instance.close({
            isDenied: true,
            value: value
          });
        }
      };
      /**
       * @param {SweetAlert} instance
       * @param {any} value
       */


      var succeedWith = function succeedWith(instance, value) {
        instance.close({
          isConfirmed: true,
          value: value
        });
      };
      /**
       *
       * @param {SweetAlert} instance
       * @param {string} error
       */


      var rejectWith = function rejectWith(instance, error) {
        instance.rejectPromise(error);
      };
      /**
       *
       * @param {SweetAlert} instance
       * @param {any} value
       */


      var confirm = function confirm(instance, value) {
        var innerParams = privateProps.innerParams.get(instance || undefined);

        if (innerParams.showLoaderOnConfirm) {
          showLoading();
        }

        if (innerParams.preConfirm) {
          instance.resetValidationMessage();
          instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received

          var preConfirmPromise = Promise.resolve().then(function () {
            return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
          });
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
              instance.hideLoading();
              handleAwaitingPromise(instance);
            } else {
              succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
            }
          }).catch(function (error) {
            return rejectWith(instance || undefined, error);
          });
        } else {
          succeedWith(instance, value);
        }
      };
      /**
       * Hides loader and shows back the button which was hidden by .showLoading()
       */


      function hideLoading() {
        // do nothing if popup is closed
        var innerParams = privateProps.innerParams.get(this);

        if (!innerParams) {
          return;
        }

        var domCache = privateProps.domCache.get(this);
        hide(domCache.loader);

        if (isToast()) {
          if (innerParams.icon) {
            show(getIcon());
          }
        } else {
          showRelatedButton(domCache);
        }

        removeClass([domCache.popup, domCache.actions], swalClasses.loading);
        domCache.popup.removeAttribute('aria-busy');
        domCache.popup.removeAttribute('data-loading');
        domCache.confirmButton.disabled = false;
        domCache.denyButton.disabled = false;
        domCache.cancelButton.disabled = false;
      }

      var showRelatedButton = function showRelatedButton(domCache) {
        var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

        if (buttonToReplace.length) {
          show(buttonToReplace[0], 'inline-block');
        } else if (allButtonsAreHidden()) {
          hide(domCache.actions);
        }
      };
      /**
       * Gets the input DOM node, this method works with input parameter.
       *
       * @returns {HTMLInputElement | null}
       */


      function getInput() {
        var innerParams = privateProps.innerParams.get(this);
        var domCache = privateProps.domCache.get(this);

        if (!domCache) {
          return null;
        }

        return getInput$1(domCache.popup, innerParams.input);
      }
      /**
       * @param {SweetAlert} instance
       * @param {string[]} buttons
       * @param {boolean} disabled
       */


      function setButtonsDisabled(instance, buttons, disabled) {
        var domCache = privateProps.domCache.get(instance);
        buttons.forEach(function (button) {
          domCache[button].disabled = disabled;
        });
      }
      /**
       * @param {HTMLInputElement} input
       * @param {boolean} disabled
       */


      function setInputDisabled(input, disabled) {
        if (!input) {
          return;
        }

        if (input.type === 'radio') {
          var radiosContainer = input.parentNode.parentNode;
          var radios = radiosContainer.querySelectorAll('input');

          for (var i = 0; i < radios.length; i++) {
            radios[i].disabled = disabled;
          }
        } else {
          input.disabled = disabled;
        }
      }
      /**
       * Enable all the buttons
       */


      function enableButtons() {
        setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
      }
      /**
       * Disable all the buttons
       */


      function disableButtons() {
        setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
      }
      /**
       * Enable the input field
       */


      function enableInput() {
        setInputDisabled(this.getInput(), false);
      }
      /**
       * Disable the input field
       */


      function disableInput() {
        setInputDisabled(this.getInput(), true);
      }
      /**
       * Show block with validation message
       *
       * @param {string} error
       */


      function showValidationMessage(error) {
        var domCache = privateProps.domCache.get(this);
        var params = privateProps.innerParams.get(this);
        setInnerHtml(domCache.validationMessage, error);
        domCache.validationMessage.className = swalClasses['validation-message'];

        if (params.customClass && params.customClass.validationMessage) {
          addClass(domCache.validationMessage, params.customClass.validationMessage);
        }

        show(domCache.validationMessage);
        var input = this.getInput();

        if (input) {
          input.setAttribute('aria-invalid', true);
          input.setAttribute('aria-describedby', swalClasses['validation-message']);
          focusInput(input);
          addClass(input, swalClasses.inputerror);
        }
      }
      /**
       * Hide block with validation message
       */


      function resetValidationMessage() {
        var domCache = privateProps.domCache.get(this);

        if (domCache.validationMessage) {
          hide(domCache.validationMessage);
        }

        var input = this.getInput();

        if (input) {
          input.removeAttribute('aria-invalid');
          input.removeAttribute('aria-describedby');
          removeClass(input, swalClasses.inputerror);
        }
      }

      var defaultParams = {
        title: '',
        titleText: '',
        text: '',
        html: '',
        footer: '',
        icon: undefined,
        iconColor: undefined,
        iconHtml: undefined,
        template: undefined,
        toast: false,
        showClass: {
          popup: 'swal2-show',
          backdrop: 'swal2-backdrop-show',
          icon: 'swal2-icon-show'
        },
        hideClass: {
          popup: 'swal2-hide',
          backdrop: 'swal2-backdrop-hide',
          icon: 'swal2-icon-hide'
        },
        customClass: {},
        target: 'body',
        color: undefined,
        backdrop: true,
        heightAuto: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        keydownListenerCapture: false,
        showConfirmButton: true,
        showDenyButton: false,
        showCancelButton: false,
        preConfirm: undefined,
        preDeny: undefined,
        confirmButtonText: 'OK',
        confirmButtonAriaLabel: '',
        confirmButtonColor: undefined,
        denyButtonText: 'No',
        denyButtonAriaLabel: '',
        denyButtonColor: undefined,
        cancelButtonText: 'Cancel',
        cancelButtonAriaLabel: '',
        cancelButtonColor: undefined,
        buttonsStyling: true,
        reverseButtons: false,
        focusConfirm: true,
        focusDeny: false,
        focusCancel: false,
        returnFocus: true,
        showCloseButton: false,
        closeButtonHtml: '&times;',
        closeButtonAriaLabel: 'Close this dialog',
        loaderHtml: '',
        showLoaderOnConfirm: false,
        showLoaderOnDeny: false,
        imageUrl: undefined,
        imageWidth: undefined,
        imageHeight: undefined,
        imageAlt: '',
        timer: undefined,
        timerProgressBar: false,
        width: undefined,
        padding: undefined,
        background: undefined,
        input: undefined,
        inputPlaceholder: '',
        inputLabel: '',
        inputValue: '',
        inputOptions: {},
        inputAutoFocus: true,
        inputAutoTrim: true,
        inputAttributes: {},
        inputValidator: undefined,
        returnInputValueOnDeny: false,
        validationMessage: undefined,
        grow: false,
        position: 'center',
        progressSteps: [],
        currentProgressStep: undefined,
        progressStepsDistance: undefined,
        willOpen: undefined,
        didOpen: undefined,
        didRender: undefined,
        willClose: undefined,
        didClose: undefined,
        didDestroy: undefined,
        scrollbarPadding: true
      };
      var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
      /** @type {Record<string, string>} */

      var deprecatedParams = {};
      var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
      /**
       * Is valid parameter
       *
       * @param {string} paramName
       * @returns {boolean}
       */

      var isValidParameter = function isValidParameter(paramName) {
        return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
      };
      /**
       * Is valid parameter for Swal.update() method
       *
       * @param {string} paramName
       * @returns {boolean}
       */


      var isUpdatableParameter = function isUpdatableParameter(paramName) {
        return updatableParams.indexOf(paramName) !== -1;
      };
      /**
       * Is deprecated parameter
       *
       * @param {string} paramName
       * @returns {string | undefined}
       */


      var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
        return deprecatedParams[paramName];
      };
      /**
       * @param {string} param
       */


      var checkIfParamIsValid = function checkIfParamIsValid(param) {
        if (!isValidParameter(param)) {
          warn("Unknown parameter \"".concat(param, "\""));
        }
      };
      /**
       * @param {string} param
       */


      var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
        if (toastIncompatibleParams.includes(param)) {
          warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
        }
      };
      /**
       * @param {string} param
       */


      var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
        var isDeprecated = isDeprecatedParameter(param);

        if (isDeprecated) {
          warnAboutDeprecation(param, isDeprecated);
        }
      };
      /**
       * Show relevant warnings for given params
       *
       * @param {SweetAlertOptions} params
       */


      var showWarningsForParams = function showWarningsForParams(params) {
        if (params.backdrop === false && params.allowOutsideClick) {
          warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        }

        for (var param in params) {
          checkIfParamIsValid(param);

          if (params.toast) {
            checkIfToastParamIsValid(param);
          }

          checkIfParamIsDeprecated(param);
        }
      };
      /**
       * Updates popup parameters.
       *
       * @param {SweetAlertOptions} params
       */


      function update(params) {
        var popup = getPopup();
        var innerParams = privateProps.innerParams.get(this);

        if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
          warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
          return;
        }

        var validUpdatableParams = filterValidParams(params);
        var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
        render(this, updatedParams);
        privateProps.innerParams.set(this, updatedParams);
        Object.defineProperties(this, {
          params: {
            value: Object.assign({}, this.params, params),
            writable: false,
            enumerable: true
          }
        });
      }
      /**
       * @param {SweetAlertOptions} params
       * @returns {SweetAlertOptions}
       */


      var filterValidParams = function filterValidParams(params) {
        var validUpdatableParams = {};
        Object.keys(params).forEach(function (param) {
          if (isUpdatableParameter(param)) {
            validUpdatableParams[param] = params[param];
          } else {
            warn("Invalid parameter to update: ".concat(param));
          }
        });
        return validUpdatableParams;
      };
      /**
       * Dispose the current SweetAlert2 instance
       */


      function _destroy() {
        var domCache = privateProps.domCache.get(this);
        var innerParams = privateProps.innerParams.get(this);

        if (!innerParams) {
          disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335

          return; // This instance has already been destroyed
        } // Check if there is another Swal closing


        if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
          globalState.swalCloseEventFinishedCallback();
          delete globalState.swalCloseEventFinishedCallback;
        }

        if (typeof innerParams.didDestroy === 'function') {
          innerParams.didDestroy();
        }

        disposeSwal(this);
      }
      /**
       * @param {SweetAlert} instance
       */


      var disposeSwal = function disposeSwal(instance) {
        disposeWeakMaps(instance); // Unset this.params so GC will dispose it (#1569)

        delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

        delete globalState.keydownHandler;
        delete globalState.keydownTarget; // Unset currentInstance

        delete globalState.currentInstance;
      };
      /**
       * @param {SweetAlert} instance
       */


      var disposeWeakMaps = function disposeWeakMaps(instance) {
        // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
        if (instance.isAwaitingPromise) {
          unsetWeakMaps(privateProps, instance);
          instance.isAwaitingPromise = true;
        } else {
          unsetWeakMaps(privateMethods, instance);
          unsetWeakMaps(privateProps, instance);
          delete instance.isAwaitingPromise; // Unset instance methods

          delete instance.disableButtons;
          delete instance.enableButtons;
          delete instance.getInput;
          delete instance.disableInput;
          delete instance.enableInput;
          delete instance.hideLoading;
          delete instance.disableLoading;
          delete instance.showValidationMessage;
          delete instance.resetValidationMessage;
          delete instance.close;
          delete instance.closePopup;
          delete instance.closeModal;
          delete instance.closeToast;
          delete instance.rejectPromise;
          delete instance.update;
          delete instance._destroy;
        }
      };
      /**
       * @param {object} obj
       * @param {SweetAlert} instance
       */


      var unsetWeakMaps = function unsetWeakMaps(obj, instance) {
        for (var i in obj) {
          obj[i].delete(instance);
        }
      };

      var instanceMethods =
      /*#__PURE__*/
      Object.freeze({
        __proto__: null,
        _destroy: _destroy,
        close: close,
        closeModal: close,
        closePopup: close,
        closeToast: close,
        disableButtons: disableButtons,
        disableInput: disableInput,
        disableLoading: hideLoading,
        enableButtons: enableButtons,
        enableInput: enableInput,
        getInput: getInput,
        handleAwaitingPromise: handleAwaitingPromise,
        hideLoading: hideLoading,
        rejectPromise: rejectPromise,
        resetValidationMessage: resetValidationMessage,
        showValidationMessage: showValidationMessage,
        update: update
      });

      var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
        var innerParams = privateProps.innerParams.get(instance);

        if (innerParams.toast) {
          handleToastClick(instance, domCache, dismissWith);
        } else {
          // Ignore click events that had mousedown on the popup but mouseup on the container
          // This can happen when the user drags a slider
          handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

          handleContainerMousedown(domCache);
          handleModalClick(instance, domCache, dismissWith);
        }
      };

      var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
        // Closing toast by internal click
        domCache.popup.onclick = function () {
          var innerParams = privateProps.innerParams.get(instance);

          if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
            return;
          }

          dismissWith(DismissReason.close);
        };
      };
      /**
       * @param {*} innerParams
       * @returns {boolean}
       */


      var isAnyButtonShown = function isAnyButtonShown(innerParams) {
        return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
      };

      var ignoreOutsideClick = false;

      var handleModalMousedown = function handleModalMousedown(domCache) {
        domCache.popup.onmousedown = function () {
          domCache.container.onmouseup = function (e) {
            domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
            // have any other direct children aside of the popup

            if (e.target === domCache.container) {
              ignoreOutsideClick = true;
            }
          };
        };
      };

      var handleContainerMousedown = function handleContainerMousedown(domCache) {
        domCache.container.onmousedown = function () {
          domCache.popup.onmouseup = function (e) {
            domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

            if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
              ignoreOutsideClick = true;
            }
          };
        };
      };

      var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
        domCache.container.onclick = function (e) {
          var innerParams = privateProps.innerParams.get(instance);

          if (ignoreOutsideClick) {
            ignoreOutsideClick = false;
            return;
          }

          if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
            dismissWith(DismissReason.backdrop);
          }
        };
      };

      var isJqueryElement = function isJqueryElement(elem) {
        return typeof elem === 'object' && elem.jquery;
      };

      var isElement = function isElement(elem) {
        return elem instanceof Element || isJqueryElement(elem);
      };

      var argsToParams = function argsToParams(args) {
        var params = {};

        if (typeof args[0] === 'object' && !isElement(args[0])) {
          Object.assign(params, args[0]);
        } else {
          ['title', 'html', 'icon'].forEach(function (name, index) {
            var arg = args[index];

            if (typeof arg === 'string' || isElement(arg)) {
              params[name] = arg;
            } else if (arg !== undefined) {
              error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
            }
          });
        }

        return params;
      };
      /**
       * Main method to create a new SweetAlert2 popup
       *
       * @param  {...SweetAlertOptions} args
       * @returns {Promise<SweetAlertResult>}
       */


      function fire() {
        var Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _construct(Swal, args);
      }
      /**
       * Returns an extended version of `Swal` containing `params` as defaults.
       * Useful for reusing Swal configuration.
       *
       * For example:
       *
       * Before:
       * const textPromptOptions = { input: 'text', showCancelButton: true }
       * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
       * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
       *
       * After:
       * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
       * const {value: firstName} = await TextPrompt('What is your first name?')
       * const {value: lastName} = await TextPrompt('What is your last name?')
       *
       * @param {SweetAlertOptions} mixinParams
       * @returns {SweetAlert}
       */


      function mixin(mixinParams) {
        var MixinSwal =
        /*#__PURE__*/
        function (_this28) {
          _inherits(MixinSwal, _this28);

          function MixinSwal() {
            _classCallCheck(this, MixinSwal);

            return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
          }

          _createClass(MixinSwal, [{
            key: "_main",
            value: function _main(params, priorityMixinParams) {
              return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, Object.assign({}, mixinParams, priorityMixinParams));
            }
          }]);

          return MixinSwal;
        }(this); // @ts-ignore


        return MixinSwal;
      }
      /**
       * If `timer` parameter is set, returns number of milliseconds of timer remained.
       * Otherwise, returns undefined.
       *
       * @returns {number | undefined}
       */


      var getTimerLeft = function getTimerLeft() {
        return globalState.timeout && globalState.timeout.getTimerLeft();
      };
      /**
       * Stop timer. Returns number of milliseconds of timer remained.
       * If `timer` parameter isn't set, returns undefined.
       *
       * @returns {number | undefined}
       */


      var stopTimer = function stopTimer() {
        if (globalState.timeout) {
          stopTimerProgressBar();
          return globalState.timeout.stop();
        }
      };
      /**
       * Resume timer. Returns number of milliseconds of timer remained.
       * If `timer` parameter isn't set, returns undefined.
       *
       * @returns {number | undefined}
       */


      var resumeTimer = function resumeTimer() {
        if (globalState.timeout) {
          var remaining = globalState.timeout.start();
          animateTimerProgressBar(remaining);
          return remaining;
        }
      };
      /**
       * Resume timer. Returns number of milliseconds of timer remained.
       * If `timer` parameter isn't set, returns undefined.
       *
       * @returns {number | undefined}
       */


      var toggleTimer = function toggleTimer() {
        var timer = globalState.timeout;
        return timer && (timer.running ? stopTimer() : resumeTimer());
      };
      /**
       * Increase timer. Returns number of milliseconds of an updated timer.
       * If `timer` parameter isn't set, returns undefined.
       *
       * @param {number} n
       * @returns {number | undefined}
       */


      var increaseTimer = function increaseTimer(n) {
        if (globalState.timeout) {
          var remaining = globalState.timeout.increase(n);
          animateTimerProgressBar(remaining, true);
          return remaining;
        }
      };
      /**
       * Check if timer is running. Returns true if timer is running
       * or false if timer is paused or stopped.
       * If `timer` parameter isn't set, returns undefined
       *
       * @returns {boolean}
       */


      var isTimerRunning = function isTimerRunning() {
        return globalState.timeout && globalState.timeout.isRunning();
      };

      var bodyClickListenerAdded = false;
      var clickHandlers = {};
      /**
       * @param {string} attr
       */

      function bindClickHandler() {
        var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
        clickHandlers[attr] = this;

        if (!bodyClickListenerAdded) {
          document.body.addEventListener('click', bodyClickListener);
          bodyClickListenerAdded = true;
        }
      }

      var bodyClickListener = function bodyClickListener(event) {
        for (var el = event.target; el && el !== document; el = el.parentNode) {
          for (var attr in clickHandlers) {
            var template = el.getAttribute(attr);

            if (template) {
              clickHandlers[attr].fire({
                template: template
              });
              return;
            }
          }
        }
      };

      var staticMethods =
      /*#__PURE__*/
      Object.freeze({
        __proto__: null,
        argsToParams: argsToParams,
        bindClickHandler: bindClickHandler,
        clickCancel: clickCancel,
        clickConfirm: clickConfirm,
        clickDeny: clickDeny,
        enableLoading: showLoading,
        fire: fire,
        getActions: getActions,
        getCancelButton: getCancelButton,
        getCloseButton: getCloseButton,
        getConfirmButton: getConfirmButton,
        getContainer: getContainer,
        getDenyButton: getDenyButton,
        getFocusableElements: getFocusableElements,
        getFooter: getFooter,
        getHtmlContainer: getHtmlContainer,
        getIcon: getIcon,
        getIconContent: getIconContent,
        getImage: getImage,
        getInputLabel: getInputLabel,
        getLoader: getLoader,
        getPopup: getPopup,
        getProgressSteps: getProgressSteps,
        getTimerLeft: getTimerLeft,
        getTimerProgressBar: getTimerProgressBar,
        getTitle: getTitle,
        getValidationMessage: getValidationMessage,
        increaseTimer: increaseTimer,
        isDeprecatedParameter: isDeprecatedParameter,
        isLoading: isLoading,
        isTimerRunning: isTimerRunning,
        isUpdatableParameter: isUpdatableParameter,
        isValidParameter: isValidParameter,
        isVisible: isVisible,
        mixin: mixin,
        resumeTimer: resumeTimer,
        showLoading: showLoading,
        stopTimer: stopTimer,
        toggleTimer: toggleTimer
      });

      var Timer =
      /*#__PURE__*/
      function () {
        /**
         * @param {Function} callback
         * @param {number} delay
         */
        function Timer(callback, delay) {
          _classCallCheck(this, Timer);

          this.callback = callback;
          this.remaining = delay;
          this.running = false;
          this.start();
        }
        /**
         * @returns {number}
         */


        _createClass(Timer, [{
          key: "start",
          value: function start() {
            if (!this.running) {
              this.running = true;
              this.started = new Date();
              this.id = setTimeout(this.callback, this.remaining);
            }

            return this.remaining;
          }
          /**
           * @returns {number}
           */

        }, {
          key: "stop",
          value: function stop() {
            if (this.started && this.running) {
              this.running = false;
              clearTimeout(this.id);
              this.remaining -= new Date().getTime() - this.started.getTime();
            }

            return this.remaining;
          }
          /**
           * @param {number} n
           * @returns {number}
           */

        }, {
          key: "increase",
          value: function increase(n) {
            var running = this.running;

            if (running) {
              this.stop();
            }

            this.remaining += n;

            if (running) {
              this.start();
            }

            return this.remaining;
          }
          /**
           * @returns {number}
           */

        }, {
          key: "getTimerLeft",
          value: function getTimerLeft() {
            if (this.running) {
              this.stop();
              this.start();
            }

            return this.remaining;
          }
          /**
           * @returns {boolean}
           */

        }, {
          key: "isRunning",
          value: function isRunning() {
            return this.running;
          }
        }]);

        return Timer;
      }();

      var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
      /**
       * @param {SweetAlertOptions} params
       * @returns {SweetAlertOptions}
       */

      var getTemplateParams = function getTemplateParams(params) {
        /** @type {HTMLTemplateElement} */
        var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

        if (!template) {
          return {};
        }
        /** @type {DocumentFragment} */


        var templateContent = template.content;
        showWarningsForElements(templateContent);
        var result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
        return result;
      };
      /**
       * @param {DocumentFragment} templateContent
       * @returns {SweetAlertOptions}
       */


      var getSwalParams = function getSwalParams(templateContent) {
        var result = {};
        /** @type {HTMLElement[]} */

        var swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
        swalParams.forEach(function (param) {
          showWarningsForAttributes(param, ['name', 'value']);
          var paramName = param.getAttribute('name');
          var value = param.getAttribute('value');

          if (typeof defaultParams[paramName] === 'boolean') {
            result[paramName] = value !== 'false';
          } else if (typeof defaultParams[paramName] === 'object') {
            result[paramName] = JSON.parse(value);
          } else {
            result[paramName] = value;
          }
        });
        return result;
      };
      /**
       * @param {DocumentFragment} templateContent
       * @returns {SweetAlertOptions}
       */


      var getSwalFunctionParams = function getSwalFunctionParams(templateContent) {
        var result = {};
        /** @type {HTMLElement[]} */

        var swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
        swalFunctions.forEach(function (param) {
          var paramName = param.getAttribute('name');
          var value = param.getAttribute('value');
          result[paramName] = new Function("return ".concat(value))();
        });
        return result;
      };
      /**
       * @param {DocumentFragment} templateContent
       * @returns {SweetAlertOptions}
       */


      var getSwalButtons = function getSwalButtons(templateContent) {
        var result = {};
        /** @type {HTMLElement[]} */

        var swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
        swalButtons.forEach(function (button) {
          showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
          var type = button.getAttribute('type');
          result["".concat(type, "ButtonText")] = button.innerHTML;
          result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

          if (button.hasAttribute('color')) {
            result["".concat(type, "ButtonColor")] = button.getAttribute('color');
          }

          if (button.hasAttribute('aria-label')) {
            result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
          }
        });
        return result;
      };
      /**
       * @param {DocumentFragment} templateContent
       * @returns {SweetAlertOptions}
       */


      var getSwalImage = function getSwalImage(templateContent) {
        var result = {};
        /** @type {HTMLElement} */

        var image = templateContent.querySelector('swal-image');

        if (image) {
          showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

          if (image.hasAttribute('src')) {
            result.imageUrl = image.getAttribute('src');
          }

          if (image.hasAttribute('width')) {
            result.imageWidth = image.getAttribute('width');
          }

          if (image.hasAttribute('height')) {
            result.imageHeight = image.getAttribute('height');
          }

          if (image.hasAttribute('alt')) {
            result.imageAlt = image.getAttribute('alt');
          }
        }

        return result;
      };
      /**
       * @param {DocumentFragment} templateContent
       * @returns {SweetAlertOptions}
       */


      var getSwalIcon = function getSwalIcon(templateContent) {
        var result = {};
        /** @type {HTMLElement} */

        var icon = templateContent.querySelector('swal-icon');

        if (icon) {
          showWarningsForAttributes(icon, ['type', 'color']);

          if (icon.hasAttribute('type')) {
            /** @type {SweetAlertIcon} */
            // @ts-ignore
            result.icon = icon.getAttribute('type');
          }

          if (icon.hasAttribute('color')) {
            result.iconColor = icon.getAttribute('color');
          }

          result.iconHtml = icon.innerHTML;
        }

        return result;
      };
      /**
       * @param {DocumentFragment} templateContent
       * @returns {SweetAlertOptions}
       */


      var getSwalInput = function getSwalInput(templateContent) {
        var result = {};
        /** @type {HTMLElement} */

        var input = templateContent.querySelector('swal-input');

        if (input) {
          showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
          /** @type {SweetAlertInput} */
          // @ts-ignore

          result.input = input.getAttribute('type') || 'text';

          if (input.hasAttribute('label')) {
            result.inputLabel = input.getAttribute('label');
          }

          if (input.hasAttribute('placeholder')) {
            result.inputPlaceholder = input.getAttribute('placeholder');
          }

          if (input.hasAttribute('value')) {
            result.inputValue = input.getAttribute('value');
          }
        }
        /** @type {HTMLElement[]} */


        var inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));

        if (inputOptions.length) {
          result.inputOptions = {};
          inputOptions.forEach(function (option) {
            showWarningsForAttributes(option, ['value']);
            var optionValue = option.getAttribute('value');
            var optionName = option.innerHTML;
            result.inputOptions[optionValue] = optionName;
          });
        }

        return result;
      };
      /**
       * @param {DocumentFragment} templateContent
       * @param {string[]} paramNames
       * @returns {SweetAlertOptions}
       */


      var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
        var result = {};

        for (var i in paramNames) {
          var paramName = paramNames[i];
          /** @type {HTMLElement} */

          var tag = templateContent.querySelector(paramName);

          if (tag) {
            showWarningsForAttributes(tag, []);
            result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
          }
        }

        return result;
      };
      /**
       * @param {DocumentFragment} templateContent
       */


      var showWarningsForElements = function showWarningsForElements(templateContent) {
        var allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
        Array.from(templateContent.children).forEach(function (el) {
          var tagName = el.tagName.toLowerCase();

          if (!allowedElements.includes(tagName)) {
            warn("Unrecognized element <".concat(tagName, ">"));
          }
        });
      };
      /**
       * @param {HTMLElement} el
       * @param {string[]} allowedAttributes
       */


      var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
        Array.from(el.attributes).forEach(function (attribute) {
          if (allowedAttributes.indexOf(attribute.name) === -1) {
            warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
          }
        });
      };

      var SHOW_CLASS_TIMEOUT = 10;
      /**
       * Open popup, add necessary classes and styles, fix scrollbar
       *
       * @param {SweetAlertOptions} params
       */

      var openPopup = function openPopup(params) {
        var container = getContainer();
        var popup = getPopup();

        if (typeof params.willOpen === 'function') {
          params.willOpen(popup);
        }

        var bodyStyles = window.getComputedStyle(document.body);
        var initialBodyOverflow = bodyStyles.overflowY;
        addClasses(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

        setTimeout(function () {
          setScrollingVisibility(container, popup);
        }, SHOW_CLASS_TIMEOUT);

        if (isModal()) {
          fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
          setAriaHidden();
        }

        if (!isToast() && !globalState.previousActiveElement) {
          globalState.previousActiveElement = document.activeElement;
        }

        if (typeof params.didOpen === 'function') {
          setTimeout(function () {
            return params.didOpen(popup);
          });
        }

        removeClass(container, swalClasses['no-transition']);
      };
      /**
       * @param {AnimationEvent} event
       */


      var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
        var popup = getPopup();

        if (event.target !== popup) {
          return;
        }

        var container = getContainer();
        popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
        container.style.overflowY = 'auto';
      };
      /**
       * @param {HTMLElement} container
       * @param {HTMLElement} popup
       */


      var setScrollingVisibility = function setScrollingVisibility(container, popup) {
        if (animationEndEvent && hasCssAnimation(popup)) {
          container.style.overflowY = 'hidden';
          popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
        } else {
          container.style.overflowY = 'auto';
        }
      };
      /**
       * @param {HTMLElement} container
       * @param {boolean} scrollbarPadding
       * @param {string} initialBodyOverflow
       */


      var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
        iOSfix();

        if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
          fixScrollbar();
        } // sweetalert2/issues/1247


        setTimeout(function () {
          container.scrollTop = 0;
        });
      };
      /**
       * @param {HTMLElement} container
       * @param {HTMLElement} popup
       * @param {SweetAlertOptions} params
       */


      var addClasses = function addClasses(container, popup, params) {
        addClass(container, params.showClass.backdrop); // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059

        popup.style.setProperty('opacity', '0', 'important');
        show(popup, 'grid');
        setTimeout(function () {
          // Animate popup right after showing it
          addClass(popup, params.showClass.popup); // and remove the opacity workaround

          popup.style.removeProperty('opacity');
        }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

        addClass([document.documentElement, document.body], swalClasses.shown);

        if (params.heightAuto && params.backdrop && !params.toast) {
          addClass([document.documentElement, document.body], swalClasses['height-auto']);
        }
      };

      var defaultInputValidators = {
        /**
         * @param {string} string
         * @param {string} validationMessage
         * @returns {Promise<void | string>}
         */
        email: function email(string, validationMessage) {
          return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
        },

        /**
         * @param {string} string
         * @param {string} validationMessage
         * @returns {Promise<void | string>}
         */
        url: function url(string, validationMessage) {
          // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
        }
      };
      /**
       * @param {SweetAlertOptions} params
       */

      function setDefaultInputValidators(params) {
        // Use default `inputValidator` for supported input types if not provided
        if (!params.inputValidator) {
          Object.keys(defaultInputValidators).forEach(function (key) {
            if (params.input === key) {
              params.inputValidator = defaultInputValidators[key];
            }
          });
        }
      }
      /**
       * @param {SweetAlertOptions} params
       */


      function validateCustomTargetElement(params) {
        // Determine if the custom target element is valid
        if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
          warn('Target parameter is not valid, defaulting to "body"');
          params.target = 'body';
        }
      }
      /**
       * Set type, text and actions on popup
       *
       * @param {SweetAlertOptions} params
       */


      function setParameters(params) {
        setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

        if (params.showLoaderOnConfirm && !params.preConfirm) {
          warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
        }

        validateCustomTargetElement(params); // Replace newlines with <br> in title

        if (typeof params.title === 'string') {
          params.title = params.title.split('\n').join('<br />');
        }

        init(params);
      }
      /** @type {SweetAlert} */


      var currentInstance;

      var SweetAlert =
      /*#__PURE__*/
      function () {
        /**
         * @param {...any} args
         * @this {SweetAlert}
         */
        function SweetAlert() {
          _classCallCheck(this, SweetAlert);

          // Prevent run in Node env
          if (typeof window === 'undefined') {
            return;
          }

          currentInstance = this; // @ts-ignore

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var outerParams = Object.freeze(this.constructor.argsToParams(args));
          /** @type {Readonly<SweetAlertOptions>} */

          this.params = outerParams;
          /** @type {boolean} */

          this.isAwaitingPromise = false;

          var promise = currentInstance._main(currentInstance.params);

          privateProps.promise.set(this, promise);
        }

        _createClass(SweetAlert, [{
          key: "_main",
          value: function _main(userParams) {
            var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            showWarningsForParams(Object.assign({}, mixinParams, userParams));

            if (globalState.currentInstance) {
              globalState.currentInstance._destroy();

              if (isModal()) {
                unsetAriaHidden();
              }
            }

            globalState.currentInstance = currentInstance;
            var innerParams = prepareParams(userParams, mixinParams);
            setParameters(innerParams);
            Object.freeze(innerParams); // clear the previous timer

            if (globalState.timeout) {
              globalState.timeout.stop();
              delete globalState.timeout;
            } // clear the restore focus timeout


            clearTimeout(globalState.restoreFocusTimeout);
            var domCache = populateDomCache(currentInstance);
            render(currentInstance, innerParams);
            privateProps.innerParams.set(currentInstance, innerParams);
            return swalPromise(currentInstance, domCache, innerParams);
          } // `catch` cannot be the name of a module export, so we define our thenable methods here instead

        }, {
          key: "then",
          value: function then(onFulfilled) {
            var promise = privateProps.promise.get(this);
            return promise.then(onFulfilled);
          }
        }, {
          key: "finally",
          value: function _finally(onFinally) {
            var promise = privateProps.promise.get(this);
            return promise.finally(onFinally);
          }
        }]);

        return SweetAlert;
      }();
      /**
       * @param {SweetAlert} instance
       * @param {DomCache} domCache
       * @param {SweetAlertOptions} innerParams
       * @returns {Promise}
       */


      var swalPromise = function swalPromise(instance, domCache, innerParams) {
        return new Promise(function (resolve, reject) {
          // functions to handle all closings/dismissals

          /**
           * @param {DismissReason} dismiss
           */
          var dismissWith = function dismissWith(dismiss) {
            instance.close({
              isDismissed: true,
              dismiss: dismiss
            });
          };

          privateMethods.swalPromiseResolve.set(instance, resolve);
          privateMethods.swalPromiseReject.set(instance, reject);

          domCache.confirmButton.onclick = function () {
            handleConfirmButtonClick(instance);
          };

          domCache.denyButton.onclick = function () {
            handleDenyButtonClick(instance);
          };

          domCache.cancelButton.onclick = function () {
            handleCancelButtonClick(instance, dismissWith);
          };

          domCache.closeButton.onclick = function () {
            dismissWith(DismissReason.close);
          };

          handlePopupClick(instance, domCache, dismissWith);
          addKeydownHandler(instance, globalState, innerParams, dismissWith);
          handleInputOptionsAndValue(instance, innerParams);
          openPopup(innerParams);
          setupTimer(globalState, innerParams, dismissWith);
          initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

          setTimeout(function () {
            domCache.container.scrollTop = 0;
          });
        });
      };
      /**
       * @param {SweetAlertOptions} userParams
       * @param {SweetAlertOptions} mixinParams
       * @returns {SweetAlertOptions}
       */


      var prepareParams = function prepareParams(userParams, mixinParams) {
        var templateParams = getTemplateParams(userParams);
        var params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

        params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
        params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
        return params;
      };
      /**
       * @param {SweetAlert} instance
       * @returns {DomCache}
       */


      var populateDomCache = function populateDomCache(instance) {
        var domCache = {
          popup: getPopup(),
          container: getContainer(),
          actions: getActions(),
          confirmButton: getConfirmButton(),
          denyButton: getDenyButton(),
          cancelButton: getCancelButton(),
          loader: getLoader(),
          closeButton: getCloseButton(),
          validationMessage: getValidationMessage(),
          progressSteps: getProgressSteps()
        };
        privateProps.domCache.set(instance, domCache);
        return domCache;
      };
      /**
       * @param {GlobalState} globalState
       * @param {SweetAlertOptions} innerParams
       * @param {Function} dismissWith
       */


      var setupTimer = function setupTimer(globalState, innerParams, dismissWith) {
        var timerProgressBar = getTimerProgressBar();
        hide(timerProgressBar);

        if (innerParams.timer) {
          globalState.timeout = new Timer(function () {
            dismissWith('timer');
            delete globalState.timeout;
          }, innerParams.timer);

          if (innerParams.timerProgressBar) {
            show(timerProgressBar);
            applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
            setTimeout(function () {
              if (globalState.timeout && globalState.timeout.running) {
                // timer can be already stopped or unset at this point
                animateTimerProgressBar(innerParams.timer);
              }
            });
          }
        }
      };
      /**
       * @param {DomCache} domCache
       * @param {SweetAlertOptions} innerParams
       */


      var initFocus = function initFocus(domCache, innerParams) {
        if (innerParams.toast) {
          return;
        }

        if (!callIfFunction(innerParams.allowEnterKey)) {
          blurActiveElement();
          return;
        }

        if (!focusButton(domCache, innerParams)) {
          setFocus(-1, 1);
        }
      };
      /**
       * @param {DomCache} domCache
       * @param {SweetAlertOptions} innerParams
       * @returns {boolean}
       */


      var focusButton = function focusButton(domCache, innerParams) {
        if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
          domCache.denyButton.focus();
          return true;
        }

        if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
          domCache.cancelButton.focus();
          return true;
        }

        if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
          domCache.confirmButton.focus();
          return true;
        }

        return false;
      };

      var blurActiveElement = function blurActiveElement() {
        if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
      }; // Dear russian users visiting russian sites. Let's have fun.


      if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
        var now = new Date();
        var initiationDate = localStorage.getItem('swal-initiation');

        if (!initiationDate) {
          localStorage.setItem('swal-initiation', "".concat(now));
        } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
          setTimeout(function () {
            document.body.style.pointerEvents = 'none';
            var ukrainianAnthem = document.createElement('audio');
            ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
            ukrainianAnthem.loop = true;
            document.body.appendChild(ukrainianAnthem);
            setTimeout(function () {
              ukrainianAnthem.play().catch(function () {// ignore
              });
            }, 2500);
          }, 500);
        }
      } // Assign instance methods from src/instanceMethods/*.js to prototype


      SweetAlert.prototype.disableButtons = disableButtons;
      SweetAlert.prototype.enableButtons = enableButtons;
      SweetAlert.prototype.getInput = getInput;
      SweetAlert.prototype.disableInput = disableInput;
      SweetAlert.prototype.enableInput = enableInput;
      SweetAlert.prototype.hideLoading = hideLoading;
      SweetAlert.prototype.disableLoading = hideLoading;
      SweetAlert.prototype.showValidationMessage = showValidationMessage;
      SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
      SweetAlert.prototype.close = close;
      SweetAlert.prototype.closePopup = close;
      SweetAlert.prototype.closeModal = close;
      SweetAlert.prototype.closeToast = close;
      SweetAlert.prototype.rejectPromise = rejectPromise;
      SweetAlert.prototype.update = update;
      SweetAlert.prototype._destroy = _destroy; // Assign static methods from src/staticMethods/*.js to constructor

      Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

      Object.keys(instanceMethods).forEach(function (key) {
        /**
         * @param {...any} args
         * @returns {any | undefined}
         */
        SweetAlert[key] = function () {
          if (currentInstance && currentInstance[key]) {
            var _currentInstance;

            return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
          }

          return null;
        };
      });
      SweetAlert.DismissReason = DismissReason;
      SweetAlert.version = '11.7.10';
      var Swal = SweetAlert; // @ts-ignore

      Swal.default = Swal;
      return Swal;
    });

    if (typeof this !== 'undefined' && this.Sweetalert2) {
      this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
    }

    "undefined" != typeof document && function (e, t) {
      var n = e.createElement("style");
      if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
        n.innerHTML = t;
      } catch (e) {
        n.innerText = t;
      }
    }(document, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-container) div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-container) div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-container) div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-container) div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-container) div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-container) div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-container) div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-container) div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-container) div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-container) div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-container) div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-container) div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-container) div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-container) div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-container) div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-container) div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-container) div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-container) div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-container) div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-container) div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-container) div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-container) div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-container) div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-container) div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-container) div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-container) div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-container) div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-container) div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-container) div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}");
    /***/
  },

  /***/
  "./node_modules/type-func/dist/bundle.js":
  /*!***********************************************!*\
    !*** ./node_modules/type-func/dist/bundle.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesTypeFuncDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function getDef(f, d) {
      if (typeof f === 'undefined') {
        return typeof d === 'undefined' ? f : d;
      }

      return f;
    }

    function boolean(func, def) {
      func = getDef(func, def);

      if (typeof func === 'function') {
        return function f() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return !!func.apply(this, args);
        };
      }

      return !!func ? function () {
        return true;
      } : function () {
        return false;
      };
    }

    function integer(func, def) {
      func = getDef(func, def);

      if (typeof func === 'function') {
        return function f() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          var n = parseInt(func.apply(this, args), 10);
          return n != n ? 0 : n;
        };
      }

      func = parseInt(func, 10);
      return func != func ? function () {
        return 0;
      } : function () {
        return func;
      };
    }

    function string(func, def) {
      func = getDef(func, def);

      if (typeof func === 'function') {
        return function f() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return '' + func.apply(this, args);
        };
      }

      func = '' + func;
      return function () {
        return func;
      };
    }

    exports.boolean = boolean;
    exports.integer = integer;
    exports.string = string; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./src/app/main/apps/calendar/calendar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/main/apps/calendar/calendar.component.ts ***!
    \**********************************************************/

  /*! exports provided: CalendarComponent */

  /***/
  function srcAppMainAppsCalendarCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
      return CalendarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fuse/components/confirm-dialog/confirm-dialog.component */
    "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _fuse_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fuse/animations */
    "./src/@fuse/animations/index.ts");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var app_main_apps_calendar_event_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/main/apps/calendar/event.model */
    "./src/app/main/apps/calendar/event.model.ts");
    /* harmony import */


    var app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! app/main/apps/calendar/event-form/event-form.component */
    "./src/app/main/apps/calendar/event-form/event-form.component.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/locales/es */
    "./node_modules/@angular/common/locales/es.js");
    /* harmony import */


    var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @fuse/services/config.service */
    "./src/@fuse/services/config.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! app/main/apps/calendar/calendar.service */
    "./src/app/main/apps/calendar/calendar.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");

    var _c0 = ["UploadFileInput"];

    function CalendarComponent_mat_step_12_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Identificaci\xF3n del usuario");
      }
    }

    function CalendarComponent_mat_step_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r613 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-step", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Por favor, diligencie los campos requeridos en cada uno de los pasos, una vez registre los datos recibir\xE1 en el correo electr\xF3nico confirmaci\xF3n de su cita. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarComponent_mat_step_12_ng_template_4_Template, 1, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "N\xFAmero de documento");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "N\xFAmero de documento es requerido, num\xE9rico, sin puntos ni caracteres especiales");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_mat_step_12_Template_button_click_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r613);

          var ctx_r612 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r612.findByCC();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Siguiente ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r601 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx_r601.horizontalStepperStep1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r601.horizontalStepperStep1);
      }
    }

    function CalendarComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Datos del Ciudadano");
      }
    }

    function CalendarComponent_mat_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var doc_r614 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", doc_r614.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", doc_r614.name, " ");
      }
    }

    function CalendarComponent_mat_option_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ciudad_r615 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ciudad_r615.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ciudad_r615.name, " ");
      }
    }

    function CalendarComponent_ng_template_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Definici\xF3n de Canal Atenci\xF3n y Ciudad");
      }
    }

    function CalendarComponent_mat_option_78_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var values_r616 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r616.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r616.name, " ");
      }
    }

    function CalendarComponent_mat_option_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r617 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r617.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r617.name, " ");
      }
    }

    function CalendarComponent_mat_option_96_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ciudad_r618 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ciudad_r618.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ciudad_r618.name, " ");
      }
    }

    function CalendarComponent_mat_step_108_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Definici\xF3n de una cita en el calendario");
      }
    }

    function CalendarComponent_mat_step_108_mwl_calendar_month_view_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r624 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-month-view", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dayClicked", function CalendarComponent_mat_step_108_mwl_calendar_month_view_39_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r624);

          var ctx_r623 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r623.dayClicked($event.day);
        })("eventClicked", function CalendarComponent_mat_step_108_mwl_calendar_month_view_39_Template_mwl_calendar_month_view_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r624);

          var ctx_r625 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r625.editEvent("edit", $event.event);
        })("eventTimesChanged", function CalendarComponent_mat_step_108_mwl_calendar_month_view_39_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r624);

          var ctx_r626 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r626.eventTimesChanged($event);
        })("beforeViewRender", function CalendarComponent_mat_step_108_mwl_calendar_month_view_39_Template_mwl_calendar_month_view_beforeViewRender_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r624);

          var ctx_r627 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r627.beforeMonthViewRender($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r620 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("viewDate", ctx_r620.viewDate)("events", ctx_r620.events)("refresh", ctx_r620.refresh)("activeDayIsOpen", ctx_r620.activeDayIsOpen)("excludeDays", ctx_r620.calendarOptions.weekendDays);
      }
    }

    function CalendarComponent_mat_step_108_mwl_calendar_week_view_40_Template(rf, ctx) {
      if (rf & 1) {
        var _r629 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarComponent_mat_step_108_mwl_calendar_week_view_40_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r629);

          var ctx_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r628.editEvent("edit", $event.event);
        })("dayClicked", function CalendarComponent_mat_step_108_mwl_calendar_week_view_40_Template_mwl_calendar_week_view_dayClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r629);

          var ctx_r630 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r630.dayClicked($event.day);
        })("eventTimesChanged", function CalendarComponent_mat_step_108_mwl_calendar_week_view_40_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r629);

          var ctx_r631 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r631.eventTimesChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r621 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("viewDate", ctx_r621.viewDate)("events", ctx_r621.events)("dayStartHour", 6)("dayEndHour", 18)("refresh", ctx_r621.refresh)("excludeDays", ctx_r621.calendarOptions.weekendDays);
      }
    }

    function CalendarComponent_mat_step_108_mwl_calendar_day_view_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r633 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-day-view", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarComponent_mat_step_108_mwl_calendar_day_view_41_Template_mwl_calendar_day_view_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r633);

          var ctx_r632 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r632.editEvent("edit", $event.event);
        })("eventTimesChanged", function CalendarComponent_mat_step_108_mwl_calendar_day_view_41_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r633);

          var ctx_r634 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r634.eventTimesChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r622 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("viewDate", ctx_r622.viewDate)("events", ctx_r622.events)("refresh", ctx_r622.refresh);
      }
    }

    var _c1 = function _c1() {
      return {
        delay: "50ms",
        scale: "0.2"
      };
    };

    var _c2 = function _c2(a1) {
      return {
        value: "*",
        params: a1
      };
    };

    var _c3 = function _c3() {
      return {
        delay: "100ms",
        x: "-25px"
      };
    };

    var _c4 = function _c4() {
      return {
        delay: "150ms"
      };
    };

    function CalendarComponent_mat_step_108_Template(rf, ctx) {
      if (rf & 1) {
        var _r636 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-step", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " today ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Calendario ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "search");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("viewDateChange", function CalendarComponent_mat_step_108_Template_button_viewDateChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r636);

          var ctx_r635 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r635.viewDate = $event;
        })("viewDateChange", function CalendarComponent_mat_step_108_Template_button_viewDateChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r636);

          var ctx_r637 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r637.selectedDay = {
            date: $event
          };
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "today");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_mat_step_108_Template_button_click_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r636);

          var ctx_r638 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r638.view = "day";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "view_day");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_mat_step_108_Template_button_click_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r636);

          var ctx_r639 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r639.view = "week";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "view_week");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_mat_step_108_Template_button_click_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r636);

          var ctx_r640 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r640.view = "month";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "view_module");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("viewDateChange", function CalendarComponent_mat_step_108_Template_button_viewDateChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r636);

          var ctx_r641 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r641.viewDate = $event;
        })("viewDateChange", function CalendarComponent_mat_step_108_Template_button_viewDateChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r636);

          var ctx_r642 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r642.selectedDay = {
            date: $event
          };
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "chevron_left");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "calendarDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("viewDateChange", function CalendarComponent_mat_step_108_Template_button_viewDateChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r636);

          var ctx_r643 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r643.viewDate = $event;
        })("viewDateChange", function CalendarComponent_mat_step_108_Template_button_viewDateChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r636);

          var ctx_r644 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r644.selectedDay = {
            date: $event
          };
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "chevron_right");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "form", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CalendarComponent_mat_step_108_ng_template_37_Template, 1, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, CalendarComponent_mat_step_108_mwl_calendar_month_view_39_Template, 1, 5, "mwl-calendar-month-view", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, CalendarComponent_mat_step_108_mwl_calendar_week_view_40_Template, 1, 6, "mwl-calendar-week-view", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, CalendarComponent_mat_step_108_mwl_calendar_day_view_41_Template, 1, 3, "mwl-calendar-day-view", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Anterior ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_mat_step_108_Template_button_click_46_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r636);

          var ctx_r645 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r645.finishVerticalStepper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Siguiente ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r609 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx_r609.verticalStepperStep4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 17, ctx_r609.viewDate, "MMM"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c1)));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c3)));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("viewDate", ctx_r609.viewDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c4)));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("view", ctx_r609.view)("viewDate", ctx_r609.viewDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](32, 20, ctx_r609.viewDate, ctx_r609.view + "ViewTitle", "es"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("view", ctx_r609.view)("viewDate", ctx_r609.viewDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r609.verticalStepperStep4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r609.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "month");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "week");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "day");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r609.btnCalendar);
      }
    }

    function CalendarComponent_ng_template_110_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Confirmaci\xF3n");
      }
    }

    var _c5 = function _c5() {
      return {
        scale: "0.5"
      };
    };

    var CalendarComponent =
    /*#__PURE__*/
    function () {
      function CalendarComponent(_formBuilder, _fuseConfigService, _matDialog, _calendarService, router, _snackBar) {
        var _this29 = this;

        _classCallCheck(this, CalendarComponent);

        this._formBuilder = _formBuilder;
        this._fuseConfigService = _fuseConfigService;
        this._matDialog = _matDialog;
        this._calendarService = _calendarService;
        this.router = router;
        this._snackBar = _snackBar;
        this.btnCalendar = true;
        this.particularDiv = true;
        this.selected = 0;
        this.myfilename = "";
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.letters = [];
        this.consultorio = 0;
        this.disabledCiudad = false;
        this.espacio = false;
        this.paso1Completado = false;
        this.paso2Completado = false;
        this.msgOthersCities = "";
        this.isWeb = true;
        this.modalidad = "Presencial";
        this.calendarOptions = {
          weekendDays: [6, 0]
        };
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_12___default.a);
        moment__WEBPACK_IMPORTED_MODULE_10__["locale"]("es"); // Set the private defaults

        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._fuseConfigService.config = {
          layout: {
            navbar: {
              hidden: true
            },
            toolbar: {
              hidden: true
            },
            footer: {
              hidden: true
            },
            sidepanel: {
              hidden: true
            }
          }
        }; // Set the defaults

        this.view = "week";
        this.viewDate = new Date(); //this.activeDayIsOpen = true;
        //this.selectedDay = {date: startOfDay(new Date())};

        this.actions = [{
          label: '<i class="material-icons s-16">check_box</i>',
          onClick: function onClick(_ref67) {
            var event = _ref67.event;

            _this29.editEvent("edit", event);
          }
        }];
        /**
         * Get events from service/server
         */

        this.setEvents();
      } // -----------------------------------------------------------------------------------------------------
      // @ Lifecycle hooks
      // -----------------------------------------------------------------------------------------------------

      /**
       * On init
       */


      _createClass(CalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.form = this._formBuilder.group({
            company: [{
              value: "Google",
              disabled: true
            }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postalCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]],
            country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }); // Horizontal Stepper form steps

          this.horizontalStepperStep3 = this._formBuilder.group({
            canal: [""],
            ciudad: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            disciplina: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            observaciones: [""]
          }); // this.horizontalStepperStep3.get('canal').valueChanges.subscribe((value) => {
          //   if (value !== 46051562) {
          //     this.horizontalStepperStep3.get('ciudad').setValidators([Validators.required, Validators.required]);
          //   } else {
          //     this.horizontalStepperStep3.get('ciudad').clearValidators();
          //   }
          //   this.horizontalStepperStep3.get('ciudad').updateValueAndValidity();
          // });

          this.horizontalStepperStep1 = this._formBuilder.group({
            documentNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/)]
          }); // Vertical Stepper form stepper

          this.verticalStepperStep1 = this._formBuilder.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.verticalStepperStep4 = this._formBuilder.group({
            address: [""]
          });
          this.verticalStepperStep2 = this._formBuilder.group({
            id: [""],
            documentType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ciudad: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            document: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+$")]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+$")]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
          });
          /**
           * Watch re-render-refresh for updating db
           */

          this.refresh.subscribe(function (updateDB) {
            if (updateDB) {
              _this30._calendarService.updateEvents(_this30.events);
            }
          });

          this._calendarService.onEventsUpdated.subscribe(function (events) {
            _this30.setEvents();

            _this30.refresh.next();
          });

          var ccPaciente = this.router.snapshot.paramMap.get("id");
          console.log("id:", ccPaciente);

          if (ccPaciente != "new") {
            this.horizontalStepperStep1.controls["documentNumber"].setValue(ccPaciente);
            this.findByCC();
            this.isWeb = false;
          }
        }
      }, {
        key: "fileChangeEventSave",
        value: function fileChangeEventSave(fileInput) {
          var _this31 = this;

          Array.from(fileInput.target.files).forEach(function (file) {
            console.log(file);

            _this31.horizontalStepperStep3.controls["soporte"].setValue(file.name);
          });
          var reader = new FileReader();

          if (fileInput.target.files && fileInput.target.files.length > 0) {
            var file = fileInput.target.files[0];
            reader.readAsDataURL(file);

            reader.onload = function () {
              _this31.fileContent = {
                id: _this31.citaId,
                fieldName: "Adjunto_Cliente",
                fileName: file.name,
                contentType: file.type,
                value: reader.result.toString().split(",")[1]
              };

              _this31._calendarService.loadSecure(_this31.fileContent);

              alert("Se cargo el soporte de forma correcta");
            };
          }
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(fileInput) {
          var _this32 = this;

          if (fileInput.target.files && fileInput.target.files[0]) {
            Array.from(fileInput.target.files).forEach(function (file) {
              console.log(file);

              _this32.horizontalStepperStep3.controls["soporte"].setValue(file.name);
            });
            var reader = new FileReader();

            if (fileInput.target.files && fileInput.target.files.length > 0) {
              var file = fileInput.target.files[0];
              reader.readAsDataURL(file);

              reader.onload = function () {
                _this32.fileContent = {
                  id: "",
                  fieldName: "Adjunto_Cliente",
                  fileName: file.name,
                  contentType: file.type,
                  value: reader.result.toString().split(",")[1]
                };
              };
            } // Reset File Input to Selct Same file again


            this.uploadFileInput.nativeElement.value = "";
          } else {
            this.horizontalStepperStep3.controls["soporte"].setValue("Seleccione un archivo");
          }
        }
      }, {
        key: "loadClientes",
        value: function loadClientes() {
          var _this33 = this;

          this._calendarService.getClientes().subscribe(function (data) {
            if (data) {
              _this33.clientesService = data;
              _this33.clientes = data;
            }
          }, function (err) {
            console.log("Error rec" + JSON.stringify(err));
          });
        }
      }, {
        key: "loadSubempresa",
        value: function loadSubempresa(id) {
          var _this34 = this;

          //this.loadCiudades(id);
          this._calendarService.getSubempresa(id).subscribe(function (data) {
            if (data) {
              _this34.subempresas = data;
            }
          }, function (err) {
            console.log("Error rec" + JSON.stringify(err));
          });
        } // loadPerfiles(): void {
        //   this._calendarService.getPerfiles().subscribe(
        //     (data) => {
        //       if (data) {
        //         this.perfiles = data;
        //       }
        //     },
        //     (err) => {
        //       console.log("Error rec" + JSON.stringify(err));
        //     }
        //   );
        // }

      }, {
        key: "loadIps",
        value: function loadIps() {
          var _this35 = this;

          this._calendarService.getIps().subscribe(function (data) {
            if (data) {
              var iids = [];

              for (var i = 0; i < data.length; i++) {
                iids.push(data[i].id);
              }

              _this35.ips = data; //this.loadCiudades(iids.toString());
            }
          }, function (err) {
            console.log("Error rec" + JSON.stringify(err));
          });
        }
      }, {
        key: "loadCiudades",
        value: function loadCiudades() {
          var _this36 = this;

          this._calendarService.getCiudades().subscribe(function (data) {
            if (data) {
              _this36.ciudades = data;
            }
          }, function (err) {
            console.log("Error rec" + JSON.stringify(err));
          });
        }
      }, {
        key: "loadExmamenes",
        value: function loadExmamenes() {
          var _this37 = this;

          this._calendarService.getTipoExamen().subscribe(function (data) {
            if (data) {
              _this37.examenes = data;
            }
          }, function (err) {
            console.log("Error rec" + JSON.stringify(err));
          });
        }
      }, {
        key: "getTypeOfRelationship",
        value: function getTypeOfRelationship() {
          var _this38 = this;

          this._calendarService.getTypeOfRelationship().subscribe(function (data) {
            console.log(data);

            if (data) {
              _this38.typeOfRelationship = data;
            }
          }, function (err) {
            console.log("Error rec" + JSON.stringify(err));
          });
        }
      }, {
        key: "getCitysClient",
        value: function getCitysClient() {
          var _this39 = this;

          this._calendarService.getCitysClient().subscribe(function (data) {
            console.log(data);

            if (data) {
              _this39.citysClient = data;
            }
          }, function (err) {
            console.log("Error rec" + JSON.stringify(err));
          });
        }
      }, {
        key: "getAttentionChannel",
        value: function getAttentionChannel() {
          var _this40 = this;

          this._calendarService.getAttentionChannel().subscribe(function (data) {
            if (data) {
              _this40.AttentionChannel = data;
            }
          }, function (err) {
            console.log("Error rec" + JSON.stringify(err));
          });
        }
      }, {
        key: "getPruebasRealizar",
        value: function getPruebasRealizar() {
          var _this41 = this;

          this._calendarService.getPruebasRealizar().subscribe(function (data) {
            if (data) {
              _this41.pruebasRealizarTot = data;
            }
          }, function (err) {
            console.log("Error rec" + JSON.stringify(err));
          });
        }
      }, {
        key: "getUserByDoc",
        value: function getUserByDoc(id) {
          var _this42 = this;

          this._calendarService.getUserByDoc(id).subscribe(function (data) {
            if (data) {
              _this42.user = data;
            }
          }, function (err) {
            console.log("Error rec" + JSON.stringify(err));
          });
        }
      }, {
        key: "changeCita",
        value: function changeCita(id) {
          switch (id) {
            case 11460826:
              this.pruebasRealizar = [{
                id: 11648146,
                name: "Examen médico"
              }];
              break;

            case 11486734:
              this.pruebasRealizar = this.pruebasRealizarTot;
              this.pruebasRealizarSelec = [11499760, 11499764, 11648146, 11499770, 11499776, 11499782, 11499786, 11499797];
              break;

            case 11486850:
              this.pruebasRealizar = this.pruebasRealizarTot;
              this.pruebasRealizarSelec = [11499760, 11499762, 11570722, 11648146, 11499766, 11499769, 11499770, 11499773, 11499776, 11499797];
              break;

            default:
              this.pruebasRealizar = this.pruebasRealizarTot;
              break;
          }
        }
      }, {
        key: "changeCanal",
        value: function changeCanal(event) {
          console.log('canal de atencion', event);
          console.log('canal de atencion', event.value);
          this.disabledCiudad = event.value === 46051562 ? true : false;
        }
      }, {
        key: "onKey",
        value: function onKey(name) {
          this.clientes = this.clientesService.filter(function (cliente) {
            return cliente.name.toLowerCase().includes(name.toLowerCase());
          });
          this.horizontalStepperStep3.get("empresa").setValue(this.clientes[0].id);
          this.selected = this.clientes[0].id; //this.loadPerfiles(this.selected);
        }
      }, {
        key: "requestPaciente",
        value: function requestPaciente(fecha) {
          this.fecha = fecha;
          this.fechaFacke = moment__WEBPACK_IMPORTED_MODULE_10__(fecha).locale("es").format("DD/MM/YYYY hh:mm:ss");
          /*this._calendarService.getPacienteByCC(cc).subscribe((data) => {
                  if (data) {
                      const docName = this.docType.filter(x => x.id == data[0].tipoDoc);
                      this.verticalStepperStep2.controls['id'].setValue(data[0].id);
                      this.verticalStepperStep2.controls['documentType'].setValue(docName[0].name);
                      this.verticalStepperStep2.controls['document'].setValue(cc);
                      this.verticalStepperStep2.controls['name'].setValue(data[0].nombre);
                      this.verticalStepperStep2.controls['lastName'].setValue(data[0].apellido);
                      this.verticalStepperStep2.controls['position'].setValue(data[0].cargo);
                      this.verticalStepperStep2.controls['phone'].setValue(data[0].celular);
                      this.verticalStepperStep2.controls['email'].setValue(data[0].email);
                  }
              }, (err) => {
                  this.verticalStepperStep2.controls['id'].setValue('');
                  this.verticalStepperStep2.controls['documentType'].setValue('');
                  this.verticalStepperStep2.controls['document'].setValue(cc);
                  this.verticalStepperStep2.controls['name'].setValue('');
                  this.verticalStepperStep2.controls['lastName'].setValue('');
                  this.verticalStepperStep2.controls['position'].setValue('');
                  this.verticalStepperStep2.controls['phone'].setValue('');
                  this.verticalStepperStep2.controls['email'].setValue('');
                  console.log("Error rec" + JSON.stringify(err));
              }); */
        }
      }, {
        key: "findByCC",
        value: function findByCC() {
          var _this43 = this;

          this._calendarService.getToken().subscribe(function (data) {
            _this43._calendarService.getDocumentType().subscribe(function (data) {
              if (data) {
                _this43.docType = data;

                _this43.searchByCC();

                _this43.getTypeOfRelationship();

                _this43.getCitysClient();

                _this43.getAttentionChannel();

                _this43.loadCiudades(); //this.loadPerfiles();
                //this.loadClientes();
                //this.loadExmamenes();

              }
            }, function (err) {
              console.log("Error rec" + JSON.stringify(err));
            });
          });
        }
      }, {
        key: "searchByCC",
        value: function searchByCC() {
          var _this44 = this;

          var cc = this.horizontalStepperStep1.controls["documentNumber"].value;

          this._calendarService.getPacienteByCC(cc).subscribe(function (data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this44, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee5() {
              var docName;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log('data que llega', data);

                      if (!data) {
                        _context5.next = 6;
                        break;
                      }

                      if (!(data[0].ProcesoActivo == 0)) {
                        _context5.next = 5;
                        break;
                      }

                      _context5.next = 5;
                      return sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
                        title: "No es posible el agendamiento por que el cliente ".concat(data[0].nombre, " ").concat(data[0].apellido, " no tiene un proceso abierto..."),
                        icon: "info"
                      });

                    case 5:
                      if (data[0].ProcesoActivo == 1) {
                        this.stepper.next();
                        docName = this.docType.filter(function (x) {
                          return x.id == data[0].tipoDoc;
                        });
                        this.verticalStepperStep2.controls["id"].setValue(data[0].id);
                        this.verticalStepperStep2.controls["documentType"].setValue(docName[0].name);
                        this.verticalStepperStep2.controls["document"].setValue(Number(cc));
                        this.verticalStepperStep2.controls["name"].setValue(data[0].nombre);
                        this.verticalStepperStep2.controls["lastName"].setValue(data[0].apellido);
                        this.verticalStepperStep2.controls["phone"].setValue(Number(data[0].celular));
                        this.verticalStepperStep2.controls["email"].setValue(data[0].email);
                        this.verticalStepperStep2.controls["ciudad"].setValue(data[0].ciudad);
                      }

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }, function (err) {
            _this44.stepper.next();

            _this44.verticalStepperStep2.controls["id"].setValue("");

            _this44.verticalStepperStep2.controls["documentType"].setValue("");

            _this44.verticalStepperStep2.controls["document"].setValue(cc);

            _this44.verticalStepperStep2.controls["name"].setValue("");

            _this44.verticalStepperStep2.controls["lastName"].setValue("");

            _this44.verticalStepperStep2.controls["position"].setValue("");

            _this44.verticalStepperStep2.controls["phone"].setValue("");

            _this44.verticalStepperStep2.controls["email"].setValue("");

            console.log("Error rec" + JSON.stringify(err));
          });
        }
        /**
         * Finish the horizontal stepper
         */

      }, {
        key: "finishHorizontalStepper",
        value: function finishHorizontalStepper() {
          alert("You have finished the horizontal stepper!");
        }
      }, {
        key: "prepareData",
        value: function prepareData() {
          this.getDisponibilidad(); // const emp = this.horizontalStepperStep3.controls["empresa"].value
          //   .toString()
          //   .trim();
          // this.empresa = emp;
          // console.log("empresa ...", emp);
          // const nameEmp = this.clientes.filter((x) => x.id == emp);
          // this.empresaName = nameEmp[0].name;

          this.ciudad = this.horizontalStepperStep3.controls["ciudad"].value; //this.tipoExamen = this.horizontalStepperStep3.controls['tipoExamen'].value;

          this.docu = this.verticalStepperStep2.controls["documentType"].value;
          this.docNumber = this.verticalStepperStep2.controls["document"].value;
          this.id = this.verticalStepperStep2.controls["id"].value;
          this.nombre = this.verticalStepperStep2.controls["name"].value.trim();
          this.apellido = this.verticalStepperStep2.controls["lastName"].value;
          this.cargo = this.verticalStepperStep2.controls["position"].value;
          this.tel = this.verticalStepperStep2.controls["phone"].value;
          this.email = this.verticalStepperStep2.controls["email"].value; //this.emailCc = this.horizontalStepperStep3.controls['emailCc'].value;
          //this.subempresa = this.horizontalStepperStep3.controls["subempresa"].value;
          //this.cita = this.horizontalStepperStep3.controls['tipoExamen'].value;

          this.observaciones = this.horizontalStepperStep3.controls["observaciones"].value; //this.perfil = this.horizontalStepperStep3.controls["perfil"].value;

          this.disastep = true;
          var tmpCiud = this.ciudad; // if (this.ciudad != "24276760" || this.espacio) {
          //   this.disastep = false;
          //   this.fecha = new Date();
          //   this.finishVerticalStepper();
          //   if (!this.espacio) {
          //     let msg = this.ciudades.filter((x) => x.id == tmpCiud);
          //     this.msgOthersCities = msg[0].other;
          //   }
          // }
        }
      }, {
        key: "redirectAsso",
        value: function redirectAsso() {
          window.location.href = "https://www.jep.gov.co/Paginas/Inicio.aspx";
        } // particularChange(event){
        //     this.particularDiv = !event;
        //     if(event) {
        //         this.horizontalStepperStep3.controls['empresa'].setValue('24319022');
        //         this.loadPerfiles('24319022');
        //     }
        //     console.log("asasas", event);
        // }

        /**
         * Finish the vertical stepper
         */

      }, {
        key: "finishVerticalStepper",
        value: function finishVerticalStepper() {
          var _this45 = this;

          if (this.id > 0) {
            this._calendarService.updatePaciente(this.empresa, this.ciudad, this.docu, this.docNumber, this.nombre, this.apellido, this.tel, this.cargo, this.tipoExamen, this.id, this.email).subscribe(function (data) {
              if (data) {
                _this45.crearCita(_this45.id);
              }
            }, function (err) {
              console.log("Error rec" + JSON.stringify(err));
            });
          } else {
            this._calendarService.createPaciente(this.empresa, this.ciudad, this.docu, this.docNumber, this.nombre, this.apellido, this.tel, this.cargo, this.tipoExamen, this.email).subscribe(function (data) {
              if (data) {
                //console.log(data);
                _this45.crearCita(data.id); //alert('Se registró la cita con éxito!');
                //this.router.navigateByUrl('/pages/login');

              }
            }, function (err) {
              var _a, _b;

              console.log("Error rec", (_a = err) === null || _a === void 0 ? void 0 : _a.status, (_b = err) === null || _b === void 0 ? void 0 : _b.message);
            });
          }
        }
      }, {
        key: "crearCita",
        value: function crearCita(id) {
          var _this46 = this;

          var Json = {
            canal: this.horizontalStepperStep3.controls["canal"].value,
            //tipoConsulta: this.horizontalStepperStep3.controls["perfil"].value,
            tipoRelacion: this.verticalStepperStep2.controls["position"].value
          };

          this._calendarService.createCita(id, this.fecha, this.ciudad, this.observaciones, Json).subscribe(function (data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this46, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (data) {
                        this.citaId = data.id;

                        if (this.fileContent) {
                          this.fileContent.id = this.citaId;

                          this._calendarService.loadSecure(this.fileContent);
                        }

                        if (this.consultorio != 0) {
                          this.updateDisponibilidad(this.consultorio, data.id);
                        }
                      }

                      _context6.next = 3;
                      return sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
                        title: "Su cita ha sido agendada correctamente",
                        icon: "success"
                      });

                    case 3:
                      console.log("data rec" + data);

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this46, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee7() {
              var _a, _b;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      // this._snackBar.open(err.error.message, "X", {
                      //   duration: 10000,
                      // });
                      console.log("Error rec" + JSON.stringify(err));
                      _context7.next = 3;
                      return sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
                        title: "".concat((_b = (_a = err) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message),
                        icon: "error"
                      });

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          });
        }
      }, {
        key: "updateDisponibilidad",
        value: function updateDisponibilidad(id, cita) {
          this._calendarService.updateDisponibilidad(id, cita).subscribe(function (data) {
            if (data) {
              console.log("se registro con exito");
            }
          }, function (err) {
            console.log("Error rec" + JSON.stringify(err));
          });
        } // -----------------------------------------------------------------------------------------------------
        // @ Public methods
        // -----------------------------------------------------------------------------------------------------

        /**
         * Set events
         */

      }, {
        key: "setEvents",
        value: function setEvents() {
          var _this47 = this;

          this.events = this._calendarService.events.map(function (item) {
            item.actions = _this47.actions;
            return new app_main_apps_calendar_event_model__WEBPACK_IMPORTED_MODULE_8__["CalendarEventModel"](item);
          });
        }
        /**
         * On destroy
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Unsubscribe from all subscriptions
          this._unsubscribeAll.next();

          this._unsubscribeAll.complete();
        }
        /**
         * Before View Renderer
         *
         * @param {any} header
         * @param {any} body
         */

      }, {
        key: "beforeMonthViewRender",
        value: function beforeMonthViewRender(_ref68) {
          var _this48 = this;

          var header = _ref68.header,
              body = _ref68.body;

          /**
           * Get the selected day
           */
          var _selectedDay = body.find(function (_day) {
            return _day.date.getTime() === _this48.selectedDay.date.getTime();
          });

          if (_selectedDay) {
            /**
             * Set selected day style
             * @type {string}
             */
            _selectedDay.cssClass = "cal-selected";
          }
        }
        /**
         * Day clicked
         *
         * @param {MonthViewDay} day
         */

      }, {
        key: "dayClicked",
        value: function dayClicked(day) {
          var date = day.date;
          var events = day.events;

          if (Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameMonth"])(date, this.viewDate)) {
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
              this.activeDayIsOpen = false;
            } else {
              this.activeDayIsOpen = true;
              this.viewDate = date;
            }
          }

          this.selectedDay = day;
          this.refresh.next();
        }
        /**
         * Event times changed
         * Event dropped or resized
         *
         * @param {CalendarEvent} event
         * @param {Date} newStart
         * @param {Date} newEnd
         */

      }, {
        key: "eventTimesChanged",
        value: function eventTimesChanged(_ref69) {
          var event = _ref69.event,
              newStart = _ref69.newStart,
              newEnd = _ref69.newEnd;
          event.start = newStart;
          event.end = newEnd;
          this.refresh.next(true);
        }
        /**
         * Delete Event
         *
         * @param event
         */

      }, {
        key: "deleteEvent",
        value: function deleteEvent(event) {
          var _this49 = this;

          this.confirmDialogRef = this._matDialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FuseConfirmDialogComponent"], {
            disableClose: false
          });
          this.confirmDialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?";
          this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              var eventIndex = _this49.events.indexOf(event);

              _this49.events.splice(eventIndex, 1);

              _this49.refresh.next(true);
            }

            _this49.confirmDialogRef = null;
          });
        }
        /**
         * Edit Event
         *
         * @param {string} action
         * @param {CalendarEvent} event
         */

      }, {
        key: "editEvent",
        value: function editEvent(action, event) {
          var _this50 = this;

          var eventIndex = this.events.indexOf(event);
          this.dialogRef = this._matDialog.open(app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__["CalendarEventFormDialogComponent"], {
            panelClass: "event-form-dialog",
            data: {
              event: event,
              action: action
            }
          });
          this.dialogRef.afterClosed().subscribe(function (response) {
            if (!response) {
              return;
            }

            var actionType = response[0];
            var formData = response[1];

            switch (actionType) {
              /**
               * Save
               */
              case "save":
                _this50.events[eventIndex] = Object.assign(_this50.events[eventIndex], formData.getRawValue());
                var tmp = formData.getRawValue();
                event.color.primary = "00FF00 ";
                event.color.secondary = "00FF00 ";
                var fecha = new Date(_this50.events[eventIndex].start);
                var tim = tmp.time.toString().split(":");
                _this50.consultorio = _this50.events[eventIndex].meta.location.toString();
                var a = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), tim[0], tim[1]); //this.requestPaciente(this.events[eventIndex].title, a);

                _this50.requestPaciente(a);

                _this50.refresh.next(true);

                alert("Se seleccionó la cita de forma exitosa");
                _this50.btnCalendar = false;
                break;

              /**
               * Delete
               */

              case "delete":
                _this50.deleteEvent(event);

                break;
            }
          });
        }
        /**
         * Add Event
         */

      }, {
        key: "addEvent",
        value: function addEvent() {
          var _this51 = this;

          this.events = [];
          this.dialogRef = this._matDialog.open(app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__["CalendarEventFormDialogComponent"], {
            panelClass: "event-form-dialog",
            data: {
              action: "new",
              date: this.selectedDay.date
            }
          });
          this.dialogRef.afterClosed().subscribe(function (response) {
            if (!response) {
              return;
            }

            var newEvent = response.getRawValue();
            var tim = newEvent.time.toString().split(":");
            var fecha = new Date(newEvent.start);
            var a = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), tim[0], tim[1]);
            var event = {
              start: a,
              end: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addHours"])(a, 1),
              title: newEvent.title,
              allDay: false,
              color: {
                primary: "#1E90FF",
                secondary: "#D1E8FF"
              },
              resizable: {
                beforeStart: true,
                afterEnd: true
              },
              draggable: false,
              meta: {
                location: "Los Angeles",
                notes: "Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri."
              }
            };
            newEvent.actions = _this51.actions; //event.actions = this.actions;

            _this51.events.push(event);

            _this51.refresh.next(true); //this.requestPaciente(newEvent.title, a);


            _this51.requestPaciente(a);

            alert("Se seleccionó la cita de forma exitosa");
          });
        } // loadSchema(id): void {
        //   let letter = this.perfiles.filter((x) => x.id == id);
        //   if (letter.length > 0) {
        //     letter = letter[0].other;
        //     this._calendarService.getEsquema(letter).subscribe(
        //       (data) => {
        //         if (data) {
        //           this.modalidad =
        //             data[0].name == "G" ? "Telemedicina" : "Presencial";
        //           if (data[0].other2 == 0) {
        //             this.espacio = true;
        //             this.msgOthersCities = data[0].other3;
        //           } else {
        //             const laboratorioId = data[0].name == "L" ? true : false;
        //             this.letters = data[0].other;
        //             console.log("-------------------------------", data);
        //             this.getHoursByLetter(this.letters, laboratorioId);
        //           }
        //         }
        //       },
        //       (err) => {
        //         console.log("Error rec" + JSON.stringify(err));
        //       }
        //     );
        //   }
        // }

      }, {
        key: "getHoursByLetter",
        value: function getHoursByLetter(letter, laboratorio) {
          var _this52 = this;

          if (letter) {
            this._calendarService.getFranjas(letter).subscribe(function (data) {
              if (data) {
                _this52.hours = data; //this.getDisponibilidad(data, laboratorio);
              }
            }, function (err) {
              console.log("Error rec" + JSON.stringify(err));
            });
          } else {
            this.events = [];
          }
        }
      }, {
        key: "formatTimeWithMeridian",
        value: function formatTimeWithMeridian(time) {
          var hours = time.getHours();
          var minutes = time.getMinutes();
          var meridian = hours >= 12 ? "PM" : "AM";
          var formattedHours = hours % 12 || 12;
          var formattedMinutes = minutes.toString().padStart(2, "0");
          return "".concat(formattedHours, ":").concat(formattedMinutes, " ").concat(meridian);
        }
      }, {
        key: "getDisponibilidad",
        value: function getDisponibilidad() {
          var _this53 = this;

          var Json = {
            canal: this.horizontalStepperStep3.controls["canal"].value,
            ciudad: this.horizontalStepperStep3.controls["ciudad"].value,
            tipo: this.verticalStepperStep3.controls["disciplina"].value
          };

          this._calendarService.getDisponibilidad(Json, "").subscribe(function (data) {
            if (data) {
              _this53.disponibilidad = data;
              var dates = [];

              for (var index = 0; index < data.length; index++) {
                var fecha = new Date(data[index].other);
                var a = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), fecha.getHours(), fecha.getMinutes());
                var fechaFinal = new Date(data[index].other3);
                var b = new Date(fechaFinal.getFullYear(), fechaFinal.getMonth(), fechaFinal.getDate(), fechaFinal.getHours(), fechaFinal.getMinutes());

                var horaInicial = _this53.formatTimeWithMeridian(fecha);

                var horaFinal = _this53.formatTimeWithMeridian(fechaFinal);

                if (!dates.includes(a.getTime())) {
                  dates.push(a.getTime());
                  var event = {
                    start: a,
                    end: b,
                    title: "".concat(horaInicial, " - ").concat(horaFinal),
                    allDay: false,
                    color: {
                      primary: "#1E90FF",
                      secondary: "#D1E8FF"
                    },
                    resizable: {
                      beforeStart: true,
                      afterEnd: true
                    },
                    draggable: false,
                    meta: {
                      location: data[index].id,
                      notes: "Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri."
                    }
                  };

                  _this53.events.push(new app_main_apps_calendar_event_model__WEBPACK_IMPORTED_MODULE_8__["CalendarEventModel"](event));

                  _this53.refresh.next(true);
                }
              }
            }
          }, function (err) {
            console.log("Error rec" + JSON.stringify(err));
          });
        }
      }]);

      return CalendarComponent;
    }();

    CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
      return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_14__["FuseConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_16__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBar"]));
    };

    CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarComponent,
      selectors: [["calendar"]],
      viewQuery: function CalendarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepper"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.uploadFileInput = _t.first);
        }
      },
      decls: 161,
      vars: 29,
      consts: [["id", "calendar", 1, "page-layout", "simple", "fullwidth"], [1, "content"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "logo"], ["href", "/"], ["src", "assets/images/logos/LogoTJA.png"], ["fxLayout", "column"], [1, "h1"], [1, "vertical-stepper-wrapper", 2, "margin-top", "10px"], [1, "mat-elevation-z4", 3, "linear"], ["stepper", ""], [3, "stepControl", 4, "ngIf"], [3, "stepControl"], ["fxLayout", "column", 3, "formGroup"], ["matStepLabel", ""], ["fxFlex", "1 0 auto", "fxLayout", "column"], ["appearance", "outline", "fxFlex", "100"], ["formControlName", "documentType", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 1, "secondary-text"], ["matInput", "", "type", "number", "ng-pattern", "/^[0-9]+$/", "formControlName", "document", "required", ""], ["matInput", "", "formControlName", "name", "required", ""], ["matInput", "", "formControlName", "lastName", "required", ""], ["matInput", "", "type", "number", "ng-pattern", "/^[0-9]+$/", "formControlName", "phone", "required", ""], ["ng-pattern", "/^[0-9]+$/", "matInput", "", "formControlName", "email", "required", ""], ["formControlName", "ciudad", "required", ""], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["mat-raised-button", "", "matStepperPrevious", "", "type", "button", "color", "accent", 1, "mr-8"], ["mat-raised-button", "", "matStepperNext", "", "type", "button", "color", "accent"], ["formControlName", "canal", "required", "", 3, "selectionChange"], ["formControlName", "disciplina", "required", ""], ["formControlName", "ciudad", "required", "", 3, "disabled"], ["matInput", "", "formControlName", "observaciones"], ["mat-raised-button", "", "matStepperNext", "", "type", "button", "color", "accent", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "h2", "m-16"], ["fxLayout", "column", 1, "profile-box", "info-box", "general"], [1, "info-line"], [1, "title"], [1, "info"], [1, "info", "location"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "info", "location"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"], [1, "pt-16", "pb-32"], ["ng-pattern", "/^[0-9]+$/", "type", "number", "matInput", "", "formControlName", "documentNumber", "required", ""], [3, "value"], [1, "header", "p-16", "p-sm-24", 3, "ngClass"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header-content"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayout.xs", "column", 1, "header-top"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "logo", "mb-16", "mb-sm-0"], [1, "logo-icon"], [1, "logo-text"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "toolbar"], ["mat-icon-button", "", "aria-label", "Search", "matTooltip", "Search"], ["mat-icon-button", "", "mwlCalendarToday", "", "aria-label", "Today", "matTooltip", "Today", 3, "viewDate", "viewDateChange"], ["mat-icon-button", "", "aria-label", "Day", "matTooltip", "Day", 3, "click"], ["mat-icon-button", "", "aria-label", "Week", "matTooltip", "Week", 3, "click"], ["mat-icon-button", "", "aria-label", "Month", "matTooltip", "Month", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "header-bottom"], ["mat-icon-button", "", "mwlCalendarPreviousView", "", "aria-label", "Previous", 1, "arrow", 3, "view", "viewDate", "viewDateChange"], ["mat-icon-button", "", "mwlCalendarNextView", "", "aria-label", "Next", 1, "arrow", 3, "view", "viewDate", "viewDateChange"], [3, "ngSwitch"], ["locale", "Es", 3, "viewDate", "events", "refresh", "activeDayIsOpen", "excludeDays", "dayClicked", "eventClicked", "eventTimesChanged", "beforeViewRender", 4, "ngSwitchCase"], ["locale", "Es", 3, "viewDate", "events", "dayStartHour", "dayEndHour", "refresh", "excludeDays", "eventClicked", "dayClicked", "eventTimesChanged", 4, "ngSwitchCase"], ["locale", "Es", 3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], ["mat-raised-button", "", "matStepperNext", "", "type", "button", "color", "accent", 3, "disabled", "click"], ["locale", "Es", 3, "viewDate", "events", "refresh", "activeDayIsOpen", "excludeDays", "dayClicked", "eventClicked", "eventTimesChanged", "beforeViewRender"], ["locale", "Es", 3, "viewDate", "events", "dayStartHour", "dayEndHour", "refresh", "excludeDays", "eventClicked", "dayClicked", "eventTimesChanged"], ["locale", "Es", 3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged"]],
      template: function CalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Formulario de agendamiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-vertical-stepper", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CalendarComponent_mat_step_12_Template, 15, 2, "mat-step", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-step", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CalendarComponent_ng_template_15_Template, 1, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Tipo de documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CalendarComponent_mat_option_21_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "outlined_flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "El tipo de documento es requerido");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "N\xFAmero de documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "N\xFAmero de documento es requerido!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Nombre es requerido!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Apellido");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Apellido es requerido!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Celular");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Celular es requerido!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Email es requerido!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Ciudad");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, CalendarComponent_mat_option_60_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "outlined_flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "la ciudad es requerida!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Anterior ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Siguiente ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-step", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, CalendarComponent_ng_template_72_Template, 1, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Canal de Atenci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function CalendarComponent_Template_mat_select_selectionChange_77_listener($event) {
            return ctx.changeCanal($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, CalendarComponent_mat_option_78_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "outlined_flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "El canal de atenci\xF3n es requerido!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "\xBFQue tipo de caso tiene?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-select", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, CalendarComponent_mat_option_87_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "outlined_flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "El tipo de caso es requerido!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Ciudad");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mat-select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, CalendarComponent_mat_option_96_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "outlined_flag");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "La ciudad es requerida!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Observaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "textarea", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_106_listener($event) {
            return ctx.prepareData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " Siguiente ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, CalendarComponent_mat_step_108_Template, 48, 33, "mat-step", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, CalendarComponent_ng_template_110_Template, 1, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Resumen de su cita ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Tipo de documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "N\xFAmero de documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Apellido");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Celular");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Fecha de la cita");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Observaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_159_listener($event) {
            return ctx.redirectAsso();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, " Finalizar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c5)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c3)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isWeb);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.verticalStepperStep2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.verticalStepperStep2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.docType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.citysClient);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.horizontalStepperStep3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.horizontalStepperStep3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.AttentionChannel);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.typeOfRelationship);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabledCiudad);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ciudades);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.disastep);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.msgOthersCities);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.docu);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.docNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.apellido);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tel);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fechaFacke);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.observaciones);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatVerticalStepper"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepLabel"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatError"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperNext"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["DefaultClassDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltip"], angular_calendar__WEBPACK_IMPORTED_MODULE_28__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_28__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_28__["ɵg"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchCase"], angular_calendar__WEBPACK_IMPORTED_MODULE_28__["CalendarMonthViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_28__["CalendarWeekViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_28__["CalendarDayViewComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], angular_calendar__WEBPACK_IMPORTED_MODULE_28__["ɵi"]],
      encapsulation: 2,
      data: {
        animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_6__["fuseAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "calendar",
          templateUrl: "./calendar.component.html",
          styleUrls: ["./calendar.component.scss"],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_6__["fuseAnimations"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_14__["FuseConfigService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]
        }, {
          type: app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_16__["CalendarService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBar"]
        }];
      }, {
        stepper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepper"]]
        }],
        uploadFileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["UploadFileInput"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/calendar/calendar.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/main/apps/calendar/calendar.module.ts ***!
    \*******************************************************/

  /*! exports provided: CalendarModule */

  /***/
  function srcAppMainAppsCalendarCalendarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
      return CalendarModule;
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


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/__ivy_ngcc__/dist/ngx-color-picker.es5.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var app_main_pages_authentication_login_2_login_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! app/main/pages/authentication/login-2/login.service */
    "./src/app/main/pages/authentication/login-2/login.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @sweetalert2/ngx-sweetalert2 */
    "./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var _fuse_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @fuse/components */
    "./src/@fuse/components/index.ts");
    /* harmony import */


    var app_main_apps_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! app/main/apps/calendar/calendar.component */
    "./src/app/main/apps/calendar/calendar.component.ts");
    /* harmony import */


    var app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! app/main/apps/calendar/calendar.service */
    "./src/app/main/apps/calendar/calendar.service.ts");
    /* harmony import */


    var app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! app/main/apps/calendar/event-form/event-form.component */
    "./src/app/main/apps/calendar/event-form/event-form.component.ts");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var routes = [{
      path: '**',
      component: app_main_apps_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_21__["CalendarComponent"],
      children: [],
      resolve: {
        chat: app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_22__["CalendarService"]
      }
    }];

    var CalendarModule = function CalendarModule() {
      _classCallCheck(this, CalendarModule);
    };

    CalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CalendarModule
    });
    CalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CalendarModule_Factory(t) {
        return new (t || CalendarModule)();
      },
      providers: [app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_22__["CalendarService"], app_main_pages_authentication_login_2_login_service__WEBPACK_IMPORTED_MODULE_14__["LoginService"]],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__["SweetAlert2Module"], angular_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__["adapterFactory"]
      }), ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__["ColorPickerModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_19__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_20__["FuseConfirmDialogModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarModule, {
        declarations: [app_main_apps_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_21__["CalendarComponent"], app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_23__["CalendarEventFormDialogComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__["SweetAlert2Module"], angular_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__["ColorPickerModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_19__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_20__["FuseConfirmDialogModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [app_main_apps_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_21__["CalendarComponent"], app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_23__["CalendarEventFormDialogComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__["SweetAlert2Module"], angular_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__["adapterFactory"]
          }), ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__["ColorPickerModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_19__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_20__["FuseConfirmDialogModule"]],
          providers: [app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_22__["CalendarService"], app_main_pages_authentication_login_2_login_service__WEBPACK_IMPORTED_MODULE_14__["LoginService"]],
          entryComponents: [app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_23__["CalendarEventFormDialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=calendar-calendar-module-es5.js.map