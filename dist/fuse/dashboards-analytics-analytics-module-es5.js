function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-analytics-analytics-module"], {
  /***/
  "./node_modules/chart.js/dist/Chart.js":
  /*!*********************************************!*\
    !*** ./node_modules/chart.js/dist/Chart.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesChartJsDistChartJs(module, exports, __webpack_require__) {
    /*!
     * Chart.js v2.9.3
     * https://www.chartjs.org
     * (c) 2019 Chart.js Contributors
     * Released under the MIT License
     */
    (function (global, factory) {
      true ? module.exports = factory(function () {
        try {
          return __webpack_require__(
          /*! moment */
          "./node_modules/moment/moment.js");
        } catch (e) {}
      }()) : undefined;
    })(this, function (moment) {
      'use strict';

      moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

      function createCommonjsModule(fn, module) {
        return module = {
          exports: {}
        }, fn(module, module.exports), module.exports;
      }

      function getCjsExportFromNamespace(n) {
        return n && n['default'] || n;
      }

      var colorName = {
        "aliceblue": [240, 248, 255],
        "antiquewhite": [250, 235, 215],
        "aqua": [0, 255, 255],
        "aquamarine": [127, 255, 212],
        "azure": [240, 255, 255],
        "beige": [245, 245, 220],
        "bisque": [255, 228, 196],
        "black": [0, 0, 0],
        "blanchedalmond": [255, 235, 205],
        "blue": [0, 0, 255],
        "blueviolet": [138, 43, 226],
        "brown": [165, 42, 42],
        "burlywood": [222, 184, 135],
        "cadetblue": [95, 158, 160],
        "chartreuse": [127, 255, 0],
        "chocolate": [210, 105, 30],
        "coral": [255, 127, 80],
        "cornflowerblue": [100, 149, 237],
        "cornsilk": [255, 248, 220],
        "crimson": [220, 20, 60],
        "cyan": [0, 255, 255],
        "darkblue": [0, 0, 139],
        "darkcyan": [0, 139, 139],
        "darkgoldenrod": [184, 134, 11],
        "darkgray": [169, 169, 169],
        "darkgreen": [0, 100, 0],
        "darkgrey": [169, 169, 169],
        "darkkhaki": [189, 183, 107],
        "darkmagenta": [139, 0, 139],
        "darkolivegreen": [85, 107, 47],
        "darkorange": [255, 140, 0],
        "darkorchid": [153, 50, 204],
        "darkred": [139, 0, 0],
        "darksalmon": [233, 150, 122],
        "darkseagreen": [143, 188, 143],
        "darkslateblue": [72, 61, 139],
        "darkslategray": [47, 79, 79],
        "darkslategrey": [47, 79, 79],
        "darkturquoise": [0, 206, 209],
        "darkviolet": [148, 0, 211],
        "deeppink": [255, 20, 147],
        "deepskyblue": [0, 191, 255],
        "dimgray": [105, 105, 105],
        "dimgrey": [105, 105, 105],
        "dodgerblue": [30, 144, 255],
        "firebrick": [178, 34, 34],
        "floralwhite": [255, 250, 240],
        "forestgreen": [34, 139, 34],
        "fuchsia": [255, 0, 255],
        "gainsboro": [220, 220, 220],
        "ghostwhite": [248, 248, 255],
        "gold": [255, 215, 0],
        "goldenrod": [218, 165, 32],
        "gray": [128, 128, 128],
        "green": [0, 128, 0],
        "greenyellow": [173, 255, 47],
        "grey": [128, 128, 128],
        "honeydew": [240, 255, 240],
        "hotpink": [255, 105, 180],
        "indianred": [205, 92, 92],
        "indigo": [75, 0, 130],
        "ivory": [255, 255, 240],
        "khaki": [240, 230, 140],
        "lavender": [230, 230, 250],
        "lavenderblush": [255, 240, 245],
        "lawngreen": [124, 252, 0],
        "lemonchiffon": [255, 250, 205],
        "lightblue": [173, 216, 230],
        "lightcoral": [240, 128, 128],
        "lightcyan": [224, 255, 255],
        "lightgoldenrodyellow": [250, 250, 210],
        "lightgray": [211, 211, 211],
        "lightgreen": [144, 238, 144],
        "lightgrey": [211, 211, 211],
        "lightpink": [255, 182, 193],
        "lightsalmon": [255, 160, 122],
        "lightseagreen": [32, 178, 170],
        "lightskyblue": [135, 206, 250],
        "lightslategray": [119, 136, 153],
        "lightslategrey": [119, 136, 153],
        "lightsteelblue": [176, 196, 222],
        "lightyellow": [255, 255, 224],
        "lime": [0, 255, 0],
        "limegreen": [50, 205, 50],
        "linen": [250, 240, 230],
        "magenta": [255, 0, 255],
        "maroon": [128, 0, 0],
        "mediumaquamarine": [102, 205, 170],
        "mediumblue": [0, 0, 205],
        "mediumorchid": [186, 85, 211],
        "mediumpurple": [147, 112, 219],
        "mediumseagreen": [60, 179, 113],
        "mediumslateblue": [123, 104, 238],
        "mediumspringgreen": [0, 250, 154],
        "mediumturquoise": [72, 209, 204],
        "mediumvioletred": [199, 21, 133],
        "midnightblue": [25, 25, 112],
        "mintcream": [245, 255, 250],
        "mistyrose": [255, 228, 225],
        "moccasin": [255, 228, 181],
        "navajowhite": [255, 222, 173],
        "navy": [0, 0, 128],
        "oldlace": [253, 245, 230],
        "olive": [128, 128, 0],
        "olivedrab": [107, 142, 35],
        "orange": [255, 165, 0],
        "orangered": [255, 69, 0],
        "orchid": [218, 112, 214],
        "palegoldenrod": [238, 232, 170],
        "palegreen": [152, 251, 152],
        "paleturquoise": [175, 238, 238],
        "palevioletred": [219, 112, 147],
        "papayawhip": [255, 239, 213],
        "peachpuff": [255, 218, 185],
        "peru": [205, 133, 63],
        "pink": [255, 192, 203],
        "plum": [221, 160, 221],
        "powderblue": [176, 224, 230],
        "purple": [128, 0, 128],
        "rebeccapurple": [102, 51, 153],
        "red": [255, 0, 0],
        "rosybrown": [188, 143, 143],
        "royalblue": [65, 105, 225],
        "saddlebrown": [139, 69, 19],
        "salmon": [250, 128, 114],
        "sandybrown": [244, 164, 96],
        "seagreen": [46, 139, 87],
        "seashell": [255, 245, 238],
        "sienna": [160, 82, 45],
        "silver": [192, 192, 192],
        "skyblue": [135, 206, 235],
        "slateblue": [106, 90, 205],
        "slategray": [112, 128, 144],
        "slategrey": [112, 128, 144],
        "snow": [255, 250, 250],
        "springgreen": [0, 255, 127],
        "steelblue": [70, 130, 180],
        "tan": [210, 180, 140],
        "teal": [0, 128, 128],
        "thistle": [216, 191, 216],
        "tomato": [255, 99, 71],
        "turquoise": [64, 224, 208],
        "violet": [238, 130, 238],
        "wheat": [245, 222, 179],
        "white": [255, 255, 255],
        "whitesmoke": [245, 245, 245],
        "yellow": [255, 255, 0],
        "yellowgreen": [154, 205, 50]
      };
      var conversions = createCommonjsModule(function (module) {
        /* MIT license */
        // NOTE: conversions should only return primitive values (i.e. arrays, or
        //       values that give correct `typeof` results).
        //       do not use box values types (i.e. Number(), String(), etc.)
        var reverseKeywords = {};

        for (var key in colorName) {
          if (colorName.hasOwnProperty(key)) {
            reverseKeywords[colorName[key]] = key;
          }
        }

        var convert = module.exports = {
          rgb: {
            channels: 3,
            labels: 'rgb'
          },
          hsl: {
            channels: 3,
            labels: 'hsl'
          },
          hsv: {
            channels: 3,
            labels: 'hsv'
          },
          hwb: {
            channels: 3,
            labels: 'hwb'
          },
          cmyk: {
            channels: 4,
            labels: 'cmyk'
          },
          xyz: {
            channels: 3,
            labels: 'xyz'
          },
          lab: {
            channels: 3,
            labels: 'lab'
          },
          lch: {
            channels: 3,
            labels: 'lch'
          },
          hex: {
            channels: 1,
            labels: ['hex']
          },
          keyword: {
            channels: 1,
            labels: ['keyword']
          },
          ansi16: {
            channels: 1,
            labels: ['ansi16']
          },
          ansi256: {
            channels: 1,
            labels: ['ansi256']
          },
          hcg: {
            channels: 3,
            labels: ['h', 'c', 'g']
          },
          apple: {
            channels: 3,
            labels: ['r16', 'g16', 'b16']
          },
          gray: {
            channels: 1,
            labels: ['gray']
          }
        }; // hide .channels and .labels properties

        for (var model in convert) {
          if (convert.hasOwnProperty(model)) {
            if (!('channels' in convert[model])) {
              throw new Error('missing channels property: ' + model);
            }

            if (!('labels' in convert[model])) {
              throw new Error('missing channel labels property: ' + model);
            }

            if (convert[model].labels.length !== convert[model].channels) {
              throw new Error('channel and label counts mismatch: ' + model);
            }

            var channels = convert[model].channels;
            var labels = convert[model].labels;
            delete convert[model].channels;
            delete convert[model].labels;
            Object.defineProperty(convert[model], 'channels', {
              value: channels
            });
            Object.defineProperty(convert[model], 'labels', {
              value: labels
            });
          }
        }

        convert.rgb.hsl = function (rgb) {
          var r = rgb[0] / 255;
          var g = rgb[1] / 255;
          var b = rgb[2] / 255;
          var min = Math.min(r, g, b);
          var max = Math.max(r, g, b);
          var delta = max - min;
          var h;
          var s;
          var l;

          if (max === min) {
            h = 0;
          } else if (r === max) {
            h = (g - b) / delta;
          } else if (g === max) {
            h = 2 + (b - r) / delta;
          } else if (b === max) {
            h = 4 + (r - g) / delta;
          }

          h = Math.min(h * 60, 360);

          if (h < 0) {
            h += 360;
          }

          l = (min + max) / 2;

          if (max === min) {
            s = 0;
          } else if (l <= 0.5) {
            s = delta / (max + min);
          } else {
            s = delta / (2 - max - min);
          }

          return [h, s * 100, l * 100];
        };

        convert.rgb.hsv = function (rgb) {
          var rdif;
          var gdif;
          var bdif;
          var h;
          var s;
          var r = rgb[0] / 255;
          var g = rgb[1] / 255;
          var b = rgb[2] / 255;
          var v = Math.max(r, g, b);
          var diff = v - Math.min(r, g, b);

          var diffc = function diffc(c) {
            return (v - c) / 6 / diff + 1 / 2;
          };

          if (diff === 0) {
            h = s = 0;
          } else {
            s = diff / v;
            rdif = diffc(r);
            gdif = diffc(g);
            bdif = diffc(b);

            if (r === v) {
              h = bdif - gdif;
            } else if (g === v) {
              h = 1 / 3 + rdif - bdif;
            } else if (b === v) {
              h = 2 / 3 + gdif - rdif;
            }

            if (h < 0) {
              h += 1;
            } else if (h > 1) {
              h -= 1;
            }
          }

          return [h * 360, s * 100, v * 100];
        };

        convert.rgb.hwb = function (rgb) {
          var r = rgb[0];
          var g = rgb[1];
          var b = rgb[2];
          var h = convert.rgb.hsl(rgb)[0];
          var w = 1 / 255 * Math.min(r, Math.min(g, b));
          b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
          return [h, w * 100, b * 100];
        };

        convert.rgb.cmyk = function (rgb) {
          var r = rgb[0] / 255;
          var g = rgb[1] / 255;
          var b = rgb[2] / 255;
          var c;
          var m;
          var y;
          var k;
          k = Math.min(1 - r, 1 - g, 1 - b);
          c = (1 - r - k) / (1 - k) || 0;
          m = (1 - g - k) / (1 - k) || 0;
          y = (1 - b - k) / (1 - k) || 0;
          return [c * 100, m * 100, y * 100, k * 100];
        };
        /**
         * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
         * */


        function comparativeDistance(x, y) {
          return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
        }

        convert.rgb.keyword = function (rgb) {
          var reversed = reverseKeywords[rgb];

          if (reversed) {
            return reversed;
          }

          var currentClosestDistance = Infinity;
          var currentClosestKeyword;

          for (var keyword in colorName) {
            if (colorName.hasOwnProperty(keyword)) {
              var value = colorName[keyword]; // Compute comparative distance

              var distance = comparativeDistance(rgb, value); // Check if its less, if so set as closest

              if (distance < currentClosestDistance) {
                currentClosestDistance = distance;
                currentClosestKeyword = keyword;
              }
            }
          }

          return currentClosestKeyword;
        };

        convert.keyword.rgb = function (keyword) {
          return colorName[keyword];
        };

        convert.rgb.xyz = function (rgb) {
          var r = rgb[0] / 255;
          var g = rgb[1] / 255;
          var b = rgb[2] / 255; // assume sRGB

          r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
          g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
          b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
          var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
          var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
          var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
          return [x * 100, y * 100, z * 100];
        };

        convert.rgb.lab = function (rgb) {
          var xyz = convert.rgb.xyz(rgb);
          var x = xyz[0];
          var y = xyz[1];
          var z = xyz[2];
          var l;
          var a;
          var b;
          x /= 95.047;
          y /= 100;
          z /= 108.883;
          x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
          y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
          z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
          l = 116 * y - 16;
          a = 500 * (x - y);
          b = 200 * (y - z);
          return [l, a, b];
        };

        convert.hsl.rgb = function (hsl) {
          var h = hsl[0] / 360;
          var s = hsl[1] / 100;
          var l = hsl[2] / 100;
          var t1;
          var t2;
          var t3;
          var rgb;
          var val;

          if (s === 0) {
            val = l * 255;
            return [val, val, val];
          }

          if (l < 0.5) {
            t2 = l * (1 + s);
          } else {
            t2 = l + s - l * s;
          }

          t1 = 2 * l - t2;
          rgb = [0, 0, 0];

          for (var i = 0; i < 3; i++) {
            t3 = h + 1 / 3 * -(i - 1);

            if (t3 < 0) {
              t3++;
            }

            if (t3 > 1) {
              t3--;
            }

            if (6 * t3 < 1) {
              val = t1 + (t2 - t1) * 6 * t3;
            } else if (2 * t3 < 1) {
              val = t2;
            } else if (3 * t3 < 2) {
              val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
            } else {
              val = t1;
            }

            rgb[i] = val * 255;
          }

          return rgb;
        };

        convert.hsl.hsv = function (hsl) {
          var h = hsl[0];
          var s = hsl[1] / 100;
          var l = hsl[2] / 100;
          var smin = s;
          var lmin = Math.max(l, 0.01);
          var sv;
          var v;
          l *= 2;
          s *= l <= 1 ? l : 2 - l;
          smin *= lmin <= 1 ? lmin : 2 - lmin;
          v = (l + s) / 2;
          sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
          return [h, sv * 100, v * 100];
        };

        convert.hsv.rgb = function (hsv) {
          var h = hsv[0] / 60;
          var s = hsv[1] / 100;
          var v = hsv[2] / 100;
          var hi = Math.floor(h) % 6;
          var f = h - Math.floor(h);
          var p = 255 * v * (1 - s);
          var q = 255 * v * (1 - s * f);
          var t = 255 * v * (1 - s * (1 - f));
          v *= 255;

          switch (hi) {
            case 0:
              return [v, t, p];

            case 1:
              return [q, v, p];

            case 2:
              return [p, v, t];

            case 3:
              return [p, q, v];

            case 4:
              return [t, p, v];

            case 5:
              return [v, p, q];
          }
        };

        convert.hsv.hsl = function (hsv) {
          var h = hsv[0];
          var s = hsv[1] / 100;
          var v = hsv[2] / 100;
          var vmin = Math.max(v, 0.01);
          var lmin;
          var sl;
          var l;
          l = (2 - s) * v;
          lmin = (2 - s) * vmin;
          sl = s * vmin;
          sl /= lmin <= 1 ? lmin : 2 - lmin;
          sl = sl || 0;
          l /= 2;
          return [h, sl * 100, l * 100];
        }; // http://dev.w3.org/csswg/css-color/#hwb-to-rgb


        convert.hwb.rgb = function (hwb) {
          var h = hwb[0] / 360;
          var wh = hwb[1] / 100;
          var bl = hwb[2] / 100;
          var ratio = wh + bl;
          var i;
          var v;
          var f;
          var n; // wh + bl cant be > 1

          if (ratio > 1) {
            wh /= ratio;
            bl /= ratio;
          }

          i = Math.floor(6 * h);
          v = 1 - bl;
          f = 6 * h - i;

          if ((i & 0x01) !== 0) {
            f = 1 - f;
          }

          n = wh + f * (v - wh); // linear interpolation

          var r;
          var g;
          var b;

          switch (i) {
            default:
            case 6:
            case 0:
              r = v;
              g = n;
              b = wh;
              break;

            case 1:
              r = n;
              g = v;
              b = wh;
              break;

            case 2:
              r = wh;
              g = v;
              b = n;
              break;

            case 3:
              r = wh;
              g = n;
              b = v;
              break;

            case 4:
              r = n;
              g = wh;
              b = v;
              break;

            case 5:
              r = v;
              g = wh;
              b = n;
              break;
          }

          return [r * 255, g * 255, b * 255];
        };

        convert.cmyk.rgb = function (cmyk) {
          var c = cmyk[0] / 100;
          var m = cmyk[1] / 100;
          var y = cmyk[2] / 100;
          var k = cmyk[3] / 100;
          var r;
          var g;
          var b;
          r = 1 - Math.min(1, c * (1 - k) + k);
          g = 1 - Math.min(1, m * (1 - k) + k);
          b = 1 - Math.min(1, y * (1 - k) + k);
          return [r * 255, g * 255, b * 255];
        };

        convert.xyz.rgb = function (xyz) {
          var x = xyz[0] / 100;
          var y = xyz[1] / 100;
          var z = xyz[2] / 100;
          var r;
          var g;
          var b;
          r = x * 3.2406 + y * -1.5372 + z * -0.4986;
          g = x * -0.9689 + y * 1.8758 + z * 0.0415;
          b = x * 0.0557 + y * -0.2040 + z * 1.0570; // assume sRGB

          r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;
          g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;
          b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;
          r = Math.min(Math.max(0, r), 1);
          g = Math.min(Math.max(0, g), 1);
          b = Math.min(Math.max(0, b), 1);
          return [r * 255, g * 255, b * 255];
        };

        convert.xyz.lab = function (xyz) {
          var x = xyz[0];
          var y = xyz[1];
          var z = xyz[2];
          var l;
          var a;
          var b;
          x /= 95.047;
          y /= 100;
          z /= 108.883;
          x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
          y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
          z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
          l = 116 * y - 16;
          a = 500 * (x - y);
          b = 200 * (y - z);
          return [l, a, b];
        };

        convert.lab.xyz = function (lab) {
          var l = lab[0];
          var a = lab[1];
          var b = lab[2];
          var x;
          var y;
          var z;
          y = (l + 16) / 116;
          x = a / 500 + y;
          z = y - b / 200;
          var y2 = Math.pow(y, 3);
          var x2 = Math.pow(x, 3);
          var z2 = Math.pow(z, 3);
          y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
          x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
          z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
          x *= 95.047;
          y *= 100;
          z *= 108.883;
          return [x, y, z];
        };

        convert.lab.lch = function (lab) {
          var l = lab[0];
          var a = lab[1];
          var b = lab[2];
          var hr;
          var h;
          var c;
          hr = Math.atan2(b, a);
          h = hr * 360 / 2 / Math.PI;

          if (h < 0) {
            h += 360;
          }

          c = Math.sqrt(a * a + b * b);
          return [l, c, h];
        };

        convert.lch.lab = function (lch) {
          var l = lch[0];
          var c = lch[1];
          var h = lch[2];
          var a;
          var b;
          var hr;
          hr = h / 360 * 2 * Math.PI;
          a = c * Math.cos(hr);
          b = c * Math.sin(hr);
          return [l, a, b];
        };

        convert.rgb.ansi16 = function (args) {
          var r = args[0];
          var g = args[1];
          var b = args[2];
          var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

          value = Math.round(value / 50);

          if (value === 0) {
            return 30;
          }

          var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

          if (value === 2) {
            ansi += 60;
          }

          return ansi;
        };

        convert.hsv.ansi16 = function (args) {
          // optimization here; we already know the value and don't need to get
          // it converted for us.
          return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
        };

        convert.rgb.ansi256 = function (args) {
          var r = args[0];
          var g = args[1];
          var b = args[2]; // we use the extended greyscale palette here, with the exception of
          // black and white. normal palette only has 4 greyscale shades.

          if (r === g && g === b) {
            if (r < 8) {
              return 16;
            }

            if (r > 248) {
              return 231;
            }

            return Math.round((r - 8) / 247 * 24) + 232;
          }

          var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
          return ansi;
        };

        convert.ansi16.rgb = function (args) {
          var color = args % 10; // handle greyscale

          if (color === 0 || color === 7) {
            if (args > 50) {
              color += 3.5;
            }

            color = color / 10.5 * 255;
            return [color, color, color];
          }

          var mult = (~~(args > 50) + 1) * 0.5;
          var r = (color & 1) * mult * 255;
          var g = (color >> 1 & 1) * mult * 255;
          var b = (color >> 2 & 1) * mult * 255;
          return [r, g, b];
        };

        convert.ansi256.rgb = function (args) {
          // handle greyscale
          if (args >= 232) {
            var c = (args - 232) * 10 + 8;
            return [c, c, c];
          }

          args -= 16;
          var rem;
          var r = Math.floor(args / 36) / 5 * 255;
          var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
          var b = rem % 6 / 5 * 255;
          return [r, g, b];
        };

        convert.rgb.hex = function (args) {
          var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
          var string = integer.toString(16).toUpperCase();
          return '000000'.substring(string.length) + string;
        };

        convert.hex.rgb = function (args) {
          var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

          if (!match) {
            return [0, 0, 0];
          }

          var colorString = match[0];

          if (match[0].length === 3) {
            colorString = colorString.split('').map(function (char) {
              return char + char;
            }).join('');
          }

          var integer = parseInt(colorString, 16);
          var r = integer >> 16 & 0xFF;
          var g = integer >> 8 & 0xFF;
          var b = integer & 0xFF;
          return [r, g, b];
        };

        convert.rgb.hcg = function (rgb) {
          var r = rgb[0] / 255;
          var g = rgb[1] / 255;
          var b = rgb[2] / 255;
          var max = Math.max(Math.max(r, g), b);
          var min = Math.min(Math.min(r, g), b);
          var chroma = max - min;
          var grayscale;
          var hue;

          if (chroma < 1) {
            grayscale = min / (1 - chroma);
          } else {
            grayscale = 0;
          }

          if (chroma <= 0) {
            hue = 0;
          } else if (max === r) {
            hue = (g - b) / chroma % 6;
          } else if (max === g) {
            hue = 2 + (b - r) / chroma;
          } else {
            hue = 4 + (r - g) / chroma + 4;
          }

          hue /= 6;
          hue %= 1;
          return [hue * 360, chroma * 100, grayscale * 100];
        };

        convert.hsl.hcg = function (hsl) {
          var s = hsl[1] / 100;
          var l = hsl[2] / 100;
          var c = 1;
          var f = 0;

          if (l < 0.5) {
            c = 2.0 * s * l;
          } else {
            c = 2.0 * s * (1.0 - l);
          }

          if (c < 1.0) {
            f = (l - 0.5 * c) / (1.0 - c);
          }

          return [hsl[0], c * 100, f * 100];
        };

        convert.hsv.hcg = function (hsv) {
          var s = hsv[1] / 100;
          var v = hsv[2] / 100;
          var c = s * v;
          var f = 0;

          if (c < 1.0) {
            f = (v - c) / (1 - c);
          }

          return [hsv[0], c * 100, f * 100];
        };

        convert.hcg.rgb = function (hcg) {
          var h = hcg[0] / 360;
          var c = hcg[1] / 100;
          var g = hcg[2] / 100;

          if (c === 0.0) {
            return [g * 255, g * 255, g * 255];
          }

          var pure = [0, 0, 0];
          var hi = h % 1 * 6;
          var v = hi % 1;
          var w = 1 - v;
          var mg = 0;

          switch (Math.floor(hi)) {
            case 0:
              pure[0] = 1;
              pure[1] = v;
              pure[2] = 0;
              break;

            case 1:
              pure[0] = w;
              pure[1] = 1;
              pure[2] = 0;
              break;

            case 2:
              pure[0] = 0;
              pure[1] = 1;
              pure[2] = v;
              break;

            case 3:
              pure[0] = 0;
              pure[1] = w;
              pure[2] = 1;
              break;

            case 4:
              pure[0] = v;
              pure[1] = 0;
              pure[2] = 1;
              break;

            default:
              pure[0] = 1;
              pure[1] = 0;
              pure[2] = w;
          }

          mg = (1.0 - c) * g;
          return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
        };

        convert.hcg.hsv = function (hcg) {
          var c = hcg[1] / 100;
          var g = hcg[2] / 100;
          var v = c + g * (1.0 - c);
          var f = 0;

          if (v > 0.0) {
            f = c / v;
          }

          return [hcg[0], f * 100, v * 100];
        };

        convert.hcg.hsl = function (hcg) {
          var c = hcg[1] / 100;
          var g = hcg[2] / 100;
          var l = g * (1.0 - c) + 0.5 * c;
          var s = 0;

          if (l > 0.0 && l < 0.5) {
            s = c / (2 * l);
          } else if (l >= 0.5 && l < 1.0) {
            s = c / (2 * (1 - l));
          }

          return [hcg[0], s * 100, l * 100];
        };

        convert.hcg.hwb = function (hcg) {
          var c = hcg[1] / 100;
          var g = hcg[2] / 100;
          var v = c + g * (1.0 - c);
          return [hcg[0], (v - c) * 100, (1 - v) * 100];
        };

        convert.hwb.hcg = function (hwb) {
          var w = hwb[1] / 100;
          var b = hwb[2] / 100;
          var v = 1 - b;
          var c = v - w;
          var g = 0;

          if (c < 1) {
            g = (v - c) / (1 - c);
          }

          return [hwb[0], c * 100, g * 100];
        };

        convert.apple.rgb = function (apple) {
          return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
        };

        convert.rgb.apple = function (rgb) {
          return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
        };

        convert.gray.rgb = function (args) {
          return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
        };

        convert.gray.hsl = convert.gray.hsv = function (args) {
          return [0, 0, args[0]];
        };

        convert.gray.hwb = function (gray) {
          return [0, 100, gray[0]];
        };

        convert.gray.cmyk = function (gray) {
          return [0, 0, 0, gray[0]];
        };

        convert.gray.lab = function (gray) {
          return [gray[0], 0, 0];
        };

        convert.gray.hex = function (gray) {
          var val = Math.round(gray[0] / 100 * 255) & 0xFF;
          var integer = (val << 16) + (val << 8) + val;
          var string = integer.toString(16).toUpperCase();
          return '000000'.substring(string.length) + string;
        };

        convert.rgb.gray = function (rgb) {
          var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
          return [val / 255 * 100];
        };
      });
      var conversions_1 = conversions.rgb;
      var conversions_2 = conversions.hsl;
      var conversions_3 = conversions.hsv;
      var conversions_4 = conversions.hwb;
      var conversions_5 = conversions.cmyk;
      var conversions_6 = conversions.xyz;
      var conversions_7 = conversions.lab;
      var conversions_8 = conversions.lch;
      var conversions_9 = conversions.hex;
      var conversions_10 = conversions.keyword;
      var conversions_11 = conversions.ansi16;
      var conversions_12 = conversions.ansi256;
      var conversions_13 = conversions.hcg;
      var conversions_14 = conversions.apple;
      var conversions_15 = conversions.gray;
      /*
      	this function routes a model to all other models.
      
      	all functions that are routed have a property `.conversion` attached
      	to the returned synthetic function. This property is an array
      	of strings, each with the steps in between the 'from' and 'to'
      	color models (inclusive).
      
      	conversions that are not possible simply are not included.
      */

      function buildGraph() {
        var graph = {}; // https://jsperf.com/object-keys-vs-for-in-with-closure/3

        var models = Object.keys(conversions);

        for (var len = models.length, i = 0; i < len; i++) {
          graph[models[i]] = {
            // http://jsperf.com/1-vs-infinity
            // micro-opt, but this is simple.
            distance: -1,
            parent: null
          };
        }

        return graph;
      } // https://en.wikipedia.org/wiki/Breadth-first_search


      function deriveBFS(fromModel) {
        var graph = buildGraph();
        var queue = [fromModel]; // unshift -> queue -> pop

        graph[fromModel].distance = 0;

        while (queue.length) {
          var current = queue.pop();
          var adjacents = Object.keys(conversions[current]);

          for (var len = adjacents.length, i = 0; i < len; i++) {
            var adjacent = adjacents[i];
            var node = graph[adjacent];

            if (node.distance === -1) {
              node.distance = graph[current].distance + 1;
              node.parent = current;
              queue.unshift(adjacent);
            }
          }
        }

        return graph;
      }

      function link(from, to) {
        return function (args) {
          return to(from(args));
        };
      }

      function wrapConversion(toModel, graph) {
        var path = [graph[toModel].parent, toModel];
        var fn = conversions[graph[toModel].parent][toModel];
        var cur = graph[toModel].parent;

        while (graph[cur].parent) {
          path.unshift(graph[cur].parent);
          fn = link(conversions[graph[cur].parent][cur], fn);
          cur = graph[cur].parent;
        }

        fn.conversion = path;
        return fn;
      }

      var route = function route(fromModel) {
        var graph = deriveBFS(fromModel);
        var conversion = {};
        var models = Object.keys(graph);

        for (var len = models.length, i = 0; i < len; i++) {
          var toModel = models[i];
          var node = graph[toModel];

          if (node.parent === null) {
            // no possible conversion, or this node is the source model.
            continue;
          }

          conversion[toModel] = wrapConversion(toModel, graph);
        }

        return conversion;
      };

      var convert = {};
      var models = Object.keys(conversions);

      function wrapRaw(fn) {
        var wrappedFn = function wrappedFn(args) {
          if (args === undefined || args === null) {
            return args;
          }

          if (arguments.length > 1) {
            args = Array.prototype.slice.call(arguments);
          }

          return fn(args);
        }; // preserve .conversion property if there is one


        if ('conversion' in fn) {
          wrappedFn.conversion = fn.conversion;
        }

        return wrappedFn;
      }

      function wrapRounded(fn) {
        var wrappedFn = function wrappedFn(args) {
          if (args === undefined || args === null) {
            return args;
          }

          if (arguments.length > 1) {
            args = Array.prototype.slice.call(arguments);
          }

          var result = fn(args); // we're assuming the result is an array here.
          // see notice in conversions.js; don't use box types
          // in conversion functions.

          if (typeof result === 'object') {
            for (var len = result.length, i = 0; i < len; i++) {
              result[i] = Math.round(result[i]);
            }
          }

          return result;
        }; // preserve .conversion property if there is one


        if ('conversion' in fn) {
          wrappedFn.conversion = fn.conversion;
        }

        return wrappedFn;
      }

      models.forEach(function (fromModel) {
        convert[fromModel] = {};
        Object.defineProperty(convert[fromModel], 'channels', {
          value: conversions[fromModel].channels
        });
        Object.defineProperty(convert[fromModel], 'labels', {
          value: conversions[fromModel].labels
        });
        var routes = route(fromModel);
        var routeModels = Object.keys(routes);
        routeModels.forEach(function (toModel) {
          var fn = routes[toModel];
          convert[fromModel][toModel] = wrapRounded(fn);
          convert[fromModel][toModel].raw = wrapRaw(fn);
        });
      });
      var colorConvert = convert;
      var colorName$1 = {
        "aliceblue": [240, 248, 255],
        "antiquewhite": [250, 235, 215],
        "aqua": [0, 255, 255],
        "aquamarine": [127, 255, 212],
        "azure": [240, 255, 255],
        "beige": [245, 245, 220],
        "bisque": [255, 228, 196],
        "black": [0, 0, 0],
        "blanchedalmond": [255, 235, 205],
        "blue": [0, 0, 255],
        "blueviolet": [138, 43, 226],
        "brown": [165, 42, 42],
        "burlywood": [222, 184, 135],
        "cadetblue": [95, 158, 160],
        "chartreuse": [127, 255, 0],
        "chocolate": [210, 105, 30],
        "coral": [255, 127, 80],
        "cornflowerblue": [100, 149, 237],
        "cornsilk": [255, 248, 220],
        "crimson": [220, 20, 60],
        "cyan": [0, 255, 255],
        "darkblue": [0, 0, 139],
        "darkcyan": [0, 139, 139],
        "darkgoldenrod": [184, 134, 11],
        "darkgray": [169, 169, 169],
        "darkgreen": [0, 100, 0],
        "darkgrey": [169, 169, 169],
        "darkkhaki": [189, 183, 107],
        "darkmagenta": [139, 0, 139],
        "darkolivegreen": [85, 107, 47],
        "darkorange": [255, 140, 0],
        "darkorchid": [153, 50, 204],
        "darkred": [139, 0, 0],
        "darksalmon": [233, 150, 122],
        "darkseagreen": [143, 188, 143],
        "darkslateblue": [72, 61, 139],
        "darkslategray": [47, 79, 79],
        "darkslategrey": [47, 79, 79],
        "darkturquoise": [0, 206, 209],
        "darkviolet": [148, 0, 211],
        "deeppink": [255, 20, 147],
        "deepskyblue": [0, 191, 255],
        "dimgray": [105, 105, 105],
        "dimgrey": [105, 105, 105],
        "dodgerblue": [30, 144, 255],
        "firebrick": [178, 34, 34],
        "floralwhite": [255, 250, 240],
        "forestgreen": [34, 139, 34],
        "fuchsia": [255, 0, 255],
        "gainsboro": [220, 220, 220],
        "ghostwhite": [248, 248, 255],
        "gold": [255, 215, 0],
        "goldenrod": [218, 165, 32],
        "gray": [128, 128, 128],
        "green": [0, 128, 0],
        "greenyellow": [173, 255, 47],
        "grey": [128, 128, 128],
        "honeydew": [240, 255, 240],
        "hotpink": [255, 105, 180],
        "indianred": [205, 92, 92],
        "indigo": [75, 0, 130],
        "ivory": [255, 255, 240],
        "khaki": [240, 230, 140],
        "lavender": [230, 230, 250],
        "lavenderblush": [255, 240, 245],
        "lawngreen": [124, 252, 0],
        "lemonchiffon": [255, 250, 205],
        "lightblue": [173, 216, 230],
        "lightcoral": [240, 128, 128],
        "lightcyan": [224, 255, 255],
        "lightgoldenrodyellow": [250, 250, 210],
        "lightgray": [211, 211, 211],
        "lightgreen": [144, 238, 144],
        "lightgrey": [211, 211, 211],
        "lightpink": [255, 182, 193],
        "lightsalmon": [255, 160, 122],
        "lightseagreen": [32, 178, 170],
        "lightskyblue": [135, 206, 250],
        "lightslategray": [119, 136, 153],
        "lightslategrey": [119, 136, 153],
        "lightsteelblue": [176, 196, 222],
        "lightyellow": [255, 255, 224],
        "lime": [0, 255, 0],
        "limegreen": [50, 205, 50],
        "linen": [250, 240, 230],
        "magenta": [255, 0, 255],
        "maroon": [128, 0, 0],
        "mediumaquamarine": [102, 205, 170],
        "mediumblue": [0, 0, 205],
        "mediumorchid": [186, 85, 211],
        "mediumpurple": [147, 112, 219],
        "mediumseagreen": [60, 179, 113],
        "mediumslateblue": [123, 104, 238],
        "mediumspringgreen": [0, 250, 154],
        "mediumturquoise": [72, 209, 204],
        "mediumvioletred": [199, 21, 133],
        "midnightblue": [25, 25, 112],
        "mintcream": [245, 255, 250],
        "mistyrose": [255, 228, 225],
        "moccasin": [255, 228, 181],
        "navajowhite": [255, 222, 173],
        "navy": [0, 0, 128],
        "oldlace": [253, 245, 230],
        "olive": [128, 128, 0],
        "olivedrab": [107, 142, 35],
        "orange": [255, 165, 0],
        "orangered": [255, 69, 0],
        "orchid": [218, 112, 214],
        "palegoldenrod": [238, 232, 170],
        "palegreen": [152, 251, 152],
        "paleturquoise": [175, 238, 238],
        "palevioletred": [219, 112, 147],
        "papayawhip": [255, 239, 213],
        "peachpuff": [255, 218, 185],
        "peru": [205, 133, 63],
        "pink": [255, 192, 203],
        "plum": [221, 160, 221],
        "powderblue": [176, 224, 230],
        "purple": [128, 0, 128],
        "rebeccapurple": [102, 51, 153],
        "red": [255, 0, 0],
        "rosybrown": [188, 143, 143],
        "royalblue": [65, 105, 225],
        "saddlebrown": [139, 69, 19],
        "salmon": [250, 128, 114],
        "sandybrown": [244, 164, 96],
        "seagreen": [46, 139, 87],
        "seashell": [255, 245, 238],
        "sienna": [160, 82, 45],
        "silver": [192, 192, 192],
        "skyblue": [135, 206, 235],
        "slateblue": [106, 90, 205],
        "slategray": [112, 128, 144],
        "slategrey": [112, 128, 144],
        "snow": [255, 250, 250],
        "springgreen": [0, 255, 127],
        "steelblue": [70, 130, 180],
        "tan": [210, 180, 140],
        "teal": [0, 128, 128],
        "thistle": [216, 191, 216],
        "tomato": [255, 99, 71],
        "turquoise": [64, 224, 208],
        "violet": [238, 130, 238],
        "wheat": [245, 222, 179],
        "white": [255, 255, 255],
        "whitesmoke": [245, 245, 245],
        "yellow": [255, 255, 0],
        "yellowgreen": [154, 205, 50]
      };
      /* MIT license */

      var colorString = {
        getRgba: getRgba,
        getHsla: getHsla,
        getRgb: getRgb,
        getHsl: getHsl,
        getHwb: getHwb,
        getAlpha: getAlpha,
        hexString: hexString,
        rgbString: rgbString,
        rgbaString: rgbaString,
        percentString: percentString,
        percentaString: percentaString,
        hslString: hslString,
        hslaString: hslaString,
        hwbString: hwbString,
        keyword: keyword
      };

      function getRgba(string) {
        if (!string) {
          return;
        }

        var abbr = /^#([a-fA-F0-9]{3,4})$/i,
            hex = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
            rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
            per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
            keyword = /(\w+)/;
        var rgb = [0, 0, 0],
            a = 1,
            match = string.match(abbr),
            hexAlpha = "";

        if (match) {
          match = match[1];
          hexAlpha = match[3];

          for (var i = 0; i < rgb.length; i++) {
            rgb[i] = parseInt(match[i] + match[i], 16);
          }

          if (hexAlpha) {
            a = Math.round(parseInt(hexAlpha + hexAlpha, 16) / 255 * 100) / 100;
          }
        } else if (match = string.match(hex)) {
          hexAlpha = match[2];
          match = match[1];

          for (var i = 0; i < rgb.length; i++) {
            rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
          }

          if (hexAlpha) {
            a = Math.round(parseInt(hexAlpha, 16) / 255 * 100) / 100;
          }
        } else if (match = string.match(rgba)) {
          for (var i = 0; i < rgb.length; i++) {
            rgb[i] = parseInt(match[i + 1]);
          }

          a = parseFloat(match[4]);
        } else if (match = string.match(per)) {
          for (var i = 0; i < rgb.length; i++) {
            rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
          }

          a = parseFloat(match[4]);
        } else if (match = string.match(keyword)) {
          if (match[1] == "transparent") {
            return [0, 0, 0, 0];
          }

          rgb = colorName$1[match[1]];

          if (!rgb) {
            return;
          }
        }

        for (var i = 0; i < rgb.length; i++) {
          rgb[i] = scale(rgb[i], 0, 255);
        }

        if (!a && a != 0) {
          a = 1;
        } else {
          a = scale(a, 0, 1);
        }

        rgb[3] = a;
        return rgb;
      }

      function getHsla(string) {
        if (!string) {
          return;
        }

        var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
        var match = string.match(hsl);

        if (match) {
          var alpha = parseFloat(match[4]);
          var h = scale(parseInt(match[1]), 0, 360),
              s = scale(parseFloat(match[2]), 0, 100),
              l = scale(parseFloat(match[3]), 0, 100),
              a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
          return [h, s, l, a];
        }
      }

      function getHwb(string) {
        if (!string) {
          return;
        }

        var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
        var match = string.match(hwb);

        if (match) {
          var alpha = parseFloat(match[4]);
          var h = scale(parseInt(match[1]), 0, 360),
              w = scale(parseFloat(match[2]), 0, 100),
              b = scale(parseFloat(match[3]), 0, 100),
              a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
          return [h, w, b, a];
        }
      }

      function getRgb(string) {
        var rgba = getRgba(string);
        return rgba && rgba.slice(0, 3);
      }

      function getHsl(string) {
        var hsla = getHsla(string);
        return hsla && hsla.slice(0, 3);
      }

      function getAlpha(string) {
        var vals = getRgba(string);

        if (vals) {
          return vals[3];
        } else if (vals = getHsla(string)) {
          return vals[3];
        } else if (vals = getHwb(string)) {
          return vals[3];
        }
      } // generators


      function hexString(rgba, a) {
        var a = a !== undefined && rgba.length === 3 ? a : rgba[3];
        return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (a >= 0 && a < 1 ? hexDouble(Math.round(a * 255)) : "");
      }

      function rgbString(rgba, alpha) {
        if (alpha < 1 || rgba[3] && rgba[3] < 1) {
          return rgbaString(rgba, alpha);
        }

        return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
      }

      function rgbaString(rgba, alpha) {
        if (alpha === undefined) {
          alpha = rgba[3] !== undefined ? rgba[3] : 1;
        }

        return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + alpha + ")";
      }

      function percentString(rgba, alpha) {
        if (alpha < 1 || rgba[3] && rgba[3] < 1) {
          return percentaString(rgba, alpha);
        }

        var r = Math.round(rgba[0] / 255 * 100),
            g = Math.round(rgba[1] / 255 * 100),
            b = Math.round(rgba[2] / 255 * 100);
        return "rgb(" + r + "%, " + g + "%, " + b + "%)";
      }

      function percentaString(rgba, alpha) {
        var r = Math.round(rgba[0] / 255 * 100),
            g = Math.round(rgba[1] / 255 * 100),
            b = Math.round(rgba[2] / 255 * 100);
        return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
      }

      function hslString(hsla, alpha) {
        if (alpha < 1 || hsla[3] && hsla[3] < 1) {
          return hslaString(hsla, alpha);
        }

        return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
      }

      function hslaString(hsla, alpha) {
        if (alpha === undefined) {
          alpha = hsla[3] !== undefined ? hsla[3] : 1;
        }

        return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + alpha + ")";
      } // hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
      // (hwb have alpha optional & 1 is default value)


      function hwbString(hwb, alpha) {
        if (alpha === undefined) {
          alpha = hwb[3] !== undefined ? hwb[3] : 1;
        }

        return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%" + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
      }

      function keyword(rgb) {
        return reverseNames[rgb.slice(0, 3)];
      } // helpers


      function scale(num, min, max) {
        return Math.min(Math.max(min, num), max);
      }

      function hexDouble(num) {
        var str = num.toString(16).toUpperCase();
        return str.length < 2 ? "0" + str : str;
      } //create a list of reverse color names


      var reverseNames = {};

      for (var name in colorName$1) {
        reverseNames[colorName$1[name]] = name;
      }
      /* MIT license */


      var Color = function Color(obj) {
        if (obj instanceof Color) {
          return obj;
        }

        if (!(this instanceof Color)) {
          return new Color(obj);
        }

        this.valid = false;
        this.values = {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hsv: [0, 0, 0],
          hwb: [0, 0, 0],
          cmyk: [0, 0, 0, 0],
          alpha: 1
        }; // parse Color() argument

        var vals;

        if (typeof obj === 'string') {
          vals = colorString.getRgba(obj);

          if (vals) {
            this.setValues('rgb', vals);
          } else if (vals = colorString.getHsla(obj)) {
            this.setValues('hsl', vals);
          } else if (vals = colorString.getHwb(obj)) {
            this.setValues('hwb', vals);
          }
        } else if (typeof obj === 'object') {
          vals = obj;

          if (vals.r !== undefined || vals.red !== undefined) {
            this.setValues('rgb', vals);
          } else if (vals.l !== undefined || vals.lightness !== undefined) {
            this.setValues('hsl', vals);
          } else if (vals.v !== undefined || vals.value !== undefined) {
            this.setValues('hsv', vals);
          } else if (vals.w !== undefined || vals.whiteness !== undefined) {
            this.setValues('hwb', vals);
          } else if (vals.c !== undefined || vals.cyan !== undefined) {
            this.setValues('cmyk', vals);
          }
        }
      };

      Color.prototype = {
        isValid: function isValid() {
          return this.valid;
        },
        rgb: function rgb() {
          return this.setSpace('rgb', arguments);
        },
        hsl: function hsl() {
          return this.setSpace('hsl', arguments);
        },
        hsv: function hsv() {
          return this.setSpace('hsv', arguments);
        },
        hwb: function hwb() {
          return this.setSpace('hwb', arguments);
        },
        cmyk: function cmyk() {
          return this.setSpace('cmyk', arguments);
        },
        rgbArray: function rgbArray() {
          return this.values.rgb;
        },
        hslArray: function hslArray() {
          return this.values.hsl;
        },
        hsvArray: function hsvArray() {
          return this.values.hsv;
        },
        hwbArray: function hwbArray() {
          var values = this.values;

          if (values.alpha !== 1) {
            return values.hwb.concat([values.alpha]);
          }

          return values.hwb;
        },
        cmykArray: function cmykArray() {
          return this.values.cmyk;
        },
        rgbaArray: function rgbaArray() {
          var values = this.values;
          return values.rgb.concat([values.alpha]);
        },
        hslaArray: function hslaArray() {
          var values = this.values;
          return values.hsl.concat([values.alpha]);
        },
        alpha: function alpha(val) {
          if (val === undefined) {
            return this.values.alpha;
          }

          this.setValues('alpha', val);
          return this;
        },
        red: function red(val) {
          return this.setChannel('rgb', 0, val);
        },
        green: function green(val) {
          return this.setChannel('rgb', 1, val);
        },
        blue: function blue(val) {
          return this.setChannel('rgb', 2, val);
        },
        hue: function hue(val) {
          if (val) {
            val %= 360;
            val = val < 0 ? 360 + val : val;
          }

          return this.setChannel('hsl', 0, val);
        },
        saturation: function saturation(val) {
          return this.setChannel('hsl', 1, val);
        },
        lightness: function lightness(val) {
          return this.setChannel('hsl', 2, val);
        },
        saturationv: function saturationv(val) {
          return this.setChannel('hsv', 1, val);
        },
        whiteness: function whiteness(val) {
          return this.setChannel('hwb', 1, val);
        },
        blackness: function blackness(val) {
          return this.setChannel('hwb', 2, val);
        },
        value: function value(val) {
          return this.setChannel('hsv', 2, val);
        },
        cyan: function cyan(val) {
          return this.setChannel('cmyk', 0, val);
        },
        magenta: function magenta(val) {
          return this.setChannel('cmyk', 1, val);
        },
        yellow: function yellow(val) {
          return this.setChannel('cmyk', 2, val);
        },
        black: function black(val) {
          return this.setChannel('cmyk', 3, val);
        },
        hexString: function hexString() {
          return colorString.hexString(this.values.rgb);
        },
        rgbString: function rgbString() {
          return colorString.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function rgbaString() {
          return colorString.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function percentString() {
          return colorString.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function hslString() {
          return colorString.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function hslaString() {
          return colorString.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function hwbString() {
          return colorString.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function keyword() {
          return colorString.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function rgbNumber() {
          var rgb = this.values.rgb;
          return rgb[0] << 16 | rgb[1] << 8 | rgb[2];
        },
        luminosity: function luminosity() {
          // http://www.w3.org/TR/WCAG20/#relativeluminancedef
          var rgb = this.values.rgb;
          var lum = [];

          for (var i = 0; i < rgb.length; i++) {
            var chan = rgb[i] / 255;
            lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
          }

          return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
        },
        contrast: function contrast(color2) {
          // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
          var lum1 = this.luminosity();
          var lum2 = color2.luminosity();

          if (lum1 > lum2) {
            return (lum1 + 0.05) / (lum2 + 0.05);
          }

          return (lum2 + 0.05) / (lum1 + 0.05);
        },
        level: function level(color2) {
          var contrastRatio = this.contrast(color2);

          if (contrastRatio >= 7.1) {
            return 'AAA';
          }

          return contrastRatio >= 4.5 ? 'AA' : '';
        },
        dark: function dark() {
          // YIQ equation from http://24ways.org/2010/calculating-color-contrast
          var rgb = this.values.rgb;
          var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
          return yiq < 128;
        },
        light: function light() {
          return !this.dark();
        },
        negate: function negate() {
          var rgb = [];

          for (var i = 0; i < 3; i++) {
            rgb[i] = 255 - this.values.rgb[i];
          }

          this.setValues('rgb', rgb);
          return this;
        },
        lighten: function lighten(ratio) {
          var hsl = this.values.hsl;
          hsl[2] += hsl[2] * ratio;
          this.setValues('hsl', hsl);
          return this;
        },
        darken: function darken(ratio) {
          var hsl = this.values.hsl;
          hsl[2] -= hsl[2] * ratio;
          this.setValues('hsl', hsl);
          return this;
        },
        saturate: function saturate(ratio) {
          var hsl = this.values.hsl;
          hsl[1] += hsl[1] * ratio;
          this.setValues('hsl', hsl);
          return this;
        },
        desaturate: function desaturate(ratio) {
          var hsl = this.values.hsl;
          hsl[1] -= hsl[1] * ratio;
          this.setValues('hsl', hsl);
          return this;
        },
        whiten: function whiten(ratio) {
          var hwb = this.values.hwb;
          hwb[1] += hwb[1] * ratio;
          this.setValues('hwb', hwb);
          return this;
        },
        blacken: function blacken(ratio) {
          var hwb = this.values.hwb;
          hwb[2] += hwb[2] * ratio;
          this.setValues('hwb', hwb);
          return this;
        },
        greyscale: function greyscale() {
          var rgb = this.values.rgb; // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale

          var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
          this.setValues('rgb', [val, val, val]);
          return this;
        },
        clearer: function clearer(ratio) {
          var alpha = this.values.alpha;
          this.setValues('alpha', alpha - alpha * ratio);
          return this;
        },
        opaquer: function opaquer(ratio) {
          var alpha = this.values.alpha;
          this.setValues('alpha', alpha + alpha * ratio);
          return this;
        },
        rotate: function rotate(degrees) {
          var hsl = this.values.hsl;
          var hue = (hsl[0] + degrees) % 360;
          hsl[0] = hue < 0 ? 360 + hue : hue;
          this.setValues('hsl', hsl);
          return this;
        },

        /**
         * Ported from sass implementation in C
         * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
         */
        mix: function mix(mixinColor, weight) {
          var color1 = this;
          var color2 = mixinColor;
          var p = weight === undefined ? 0.5 : weight;
          var w = 2 * p - 1;
          var a = color1.alpha() - color2.alpha();
          var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
          var w2 = 1 - w1;
          return this.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue()).alpha(color1.alpha() * p + color2.alpha() * (1 - p));
        },
        toJSON: function toJSON() {
          return this.rgb();
        },
        clone: function clone() {
          // NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
          // making the final build way to big to embed in Chart.js. So let's do it manually,
          // assuming that values to clone are 1 dimension arrays containing only numbers,
          // except 'alpha' which is a number.
          var result = new Color();
          var source = this.values;
          var target = result.values;
          var value, type;

          for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
              value = source[prop];
              type = {}.toString.call(value);

              if (type === '[object Array]') {
                target[prop] = value.slice(0);
              } else if (type === '[object Number]') {
                target[prop] = value;
              } else {
                console.error('unexpected color value:', value);
              }
            }
          }

          return result;
        }
      };
      Color.prototype.spaces = {
        rgb: ['red', 'green', 'blue'],
        hsl: ['hue', 'saturation', 'lightness'],
        hsv: ['hue', 'saturation', 'value'],
        hwb: ['hue', 'whiteness', 'blackness'],
        cmyk: ['cyan', 'magenta', 'yellow', 'black']
      };
      Color.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
      };

      Color.prototype.getValues = function (space) {
        var values = this.values;
        var vals = {};

        for (var i = 0; i < space.length; i++) {
          vals[space.charAt(i)] = values[space][i];
        }

        if (values.alpha !== 1) {
          vals.a = values.alpha;
        } // {r: 255, g: 255, b: 255, a: 0.4}


        return vals;
      };

      Color.prototype.setValues = function (space, vals) {
        var values = this.values;
        var spaces = this.spaces;
        var maxes = this.maxes;
        var alpha = 1;
        var i;
        this.valid = true;

        if (space === 'alpha') {
          alpha = vals;
        } else if (vals.length) {
          // [10, 10, 10]
          values[space] = vals.slice(0, space.length);
          alpha = vals[space.length];
        } else if (vals[space.charAt(0)] !== undefined) {
          // {r: 10, g: 10, b: 10}
          for (i = 0; i < space.length; i++) {
            values[space][i] = vals[space.charAt(i)];
          }

          alpha = vals.a;
        } else if (vals[spaces[space][0]] !== undefined) {
          // {red: 10, green: 10, blue: 10}
          var chans = spaces[space];

          for (i = 0; i < space.length; i++) {
            values[space][i] = vals[chans[i]];
          }

          alpha = vals.alpha;
        }

        values.alpha = Math.max(0, Math.min(1, alpha === undefined ? values.alpha : alpha));

        if (space === 'alpha') {
          return false;
        }

        var capped; // cap values of the space prior converting all values

        for (i = 0; i < space.length; i++) {
          capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
          values[space][i] = Math.round(capped);
        } // convert to all the other color spaces


        for (var sname in spaces) {
          if (sname !== space) {
            values[sname] = colorConvert[space][sname](values[space]);
          }
        }

        return true;
      };

      Color.prototype.setSpace = function (space, args) {
        var vals = args[0];

        if (vals === undefined) {
          // color.rgb()
          return this.getValues(space);
        } // color.rgb(10, 10, 10)


        if (typeof vals === 'number') {
          vals = Array.prototype.slice.call(args);
        }

        this.setValues(space, vals);
        return this;
      };

      Color.prototype.setChannel = function (space, index, val) {
        var svalues = this.values[space];

        if (val === undefined) {
          // color.red()
          return svalues[index];
        } else if (val === svalues[index]) {
          // color.red(color.red())
          return this;
        } // color.red(100)


        svalues[index] = val;
        this.setValues(space, svalues);
        return this;
      };

      if (typeof window !== 'undefined') {
        window.Color = Color;
      }

      var chartjsColor = Color;
      /**
       * @namespace Chart.helpers
       */

      var helpers = {
        /**
         * An empty function that can be used, for example, for optional callback.
         */
        noop: function noop() {},

        /**
         * Returns a unique id, sequentially generated from a global variable.
         * @returns {number}
         * @function
         */
        uid: function () {
          var id = 0;
          return function () {
            return id++;
          };
        }(),

        /**
         * Returns true if `value` is neither null nor undefined, else returns false.
         * @param {*} value - The value to test.
         * @returns {boolean}
         * @since 2.7.0
         */
        isNullOrUndef: function isNullOrUndef(value) {
          return value === null || typeof value === 'undefined';
        },

        /**
         * Returns true if `value` is an array (including typed arrays), else returns false.
         * @param {*} value - The value to test.
         * @returns {boolean}
         * @function
         */
        isArray: function isArray(value) {
          if (Array.isArray && Array.isArray(value)) {
            return true;
          }

          var type = Object.prototype.toString.call(value);

          if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
            return true;
          }

          return false;
        },

        /**
         * Returns true if `value` is an object (excluding null), else returns false.
         * @param {*} value - The value to test.
         * @returns {boolean}
         * @since 2.7.0
         */
        isObject: function isObject(value) {
          return value !== null && Object.prototype.toString.call(value) === '[object Object]';
        },

        /**
         * Returns true if `value` is a finite number, else returns false
         * @param {*} value  - The value to test.
         * @returns {boolean}
         */
        isFinite: function (_isFinite) {
          function isFinite(_x) {
            return _isFinite.apply(this, arguments);
          }

          isFinite.toString = function () {
            return _isFinite.toString();
          };

          return isFinite;
        }(function (value) {
          return (typeof value === 'number' || value instanceof Number) && isFinite(value);
        }),

        /**
         * Returns `value` if defined, else returns `defaultValue`.
         * @param {*} value - The value to return if defined.
         * @param {*} defaultValue - The value to return if `value` is undefined.
         * @returns {*}
         */
        valueOrDefault: function valueOrDefault(value, defaultValue) {
          return typeof value === 'undefined' ? defaultValue : value;
        },

        /**
         * Returns value at the given `index` in array if defined, else returns `defaultValue`.
         * @param {Array} value - The array to lookup for value at `index`.
         * @param {number} index - The index in `value` to lookup for value.
         * @param {*} defaultValue - The value to return if `value[index]` is undefined.
         * @returns {*}
         */
        valueAtIndexOrDefault: function valueAtIndexOrDefault(value, index, defaultValue) {
          return helpers.valueOrDefault(helpers.isArray(value) ? value[index] : value, defaultValue);
        },

        /**
         * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
         * value returned by `fn`. If `fn` is not a function, this method returns undefined.
         * @param {function} fn - The function to call.
         * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
         * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
         * @returns {*}
         */
        callback: function callback(fn, args, thisArg) {
          if (fn && typeof fn.call === 'function') {
            return fn.apply(thisArg, args);
          }
        },

        /**
         * Note(SB) for performance sake, this method should only be used when loopable type
         * is unknown or in none intensive code (not called often and small loopable). Else
         * it's preferable to use a regular for() loop and save extra function calls.
         * @param {object|Array} loopable - The object or array to be iterated.
         * @param {function} fn - The function to call for each item.
         * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
         * @param {boolean} [reverse] - If true, iterates backward on the loopable.
         */
        each: function each(loopable, fn, thisArg, reverse) {
          var i, len, keys;

          if (helpers.isArray(loopable)) {
            len = loopable.length;

            if (reverse) {
              for (i = len - 1; i >= 0; i--) {
                fn.call(thisArg, loopable[i], i);
              }
            } else {
              for (i = 0; i < len; i++) {
                fn.call(thisArg, loopable[i], i);
              }
            }
          } else if (helpers.isObject(loopable)) {
            keys = Object.keys(loopable);
            len = keys.length;

            for (i = 0; i < len; i++) {
              fn.call(thisArg, loopable[keys[i]], keys[i]);
            }
          }
        },

        /**
         * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
         * @see https://stackoverflow.com/a/14853974
         * @param {Array} a0 - The array to compare
         * @param {Array} a1 - The array to compare
         * @returns {boolean}
         */
        arrayEquals: function arrayEquals(a0, a1) {
          var i, ilen, v0, v1;

          if (!a0 || !a1 || a0.length !== a1.length) {
            return false;
          }

          for (i = 0, ilen = a0.length; i < ilen; ++i) {
            v0 = a0[i];
            v1 = a1[i];

            if (v0 instanceof Array && v1 instanceof Array) {
              if (!helpers.arrayEquals(v0, v1)) {
                return false;
              }
            } else if (v0 !== v1) {
              // NOTE: two different object instances will never be equal: {x:20} != {x:20}
              return false;
            }
          }

          return true;
        },

        /**
         * Returns a deep copy of `source` without keeping references on objects and arrays.
         * @param {*} source - The value to clone.
         * @returns {*}
         */
        clone: function clone(source) {
          if (helpers.isArray(source)) {
            return source.map(helpers.clone);
          }

          if (helpers.isObject(source)) {
            var target = {};
            var keys = Object.keys(source);
            var klen = keys.length;
            var k = 0;

            for (; k < klen; ++k) {
              target[keys[k]] = helpers.clone(source[keys[k]]);
            }

            return target;
          }

          return source;
        },

        /**
         * The default merger when Chart.helpers.merge is called without merger option.
         * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
         * @private
         */
        _merger: function _merger(key, target, source, options) {
          var tval = target[key];
          var sval = source[key];

          if (helpers.isObject(tval) && helpers.isObject(sval)) {
            helpers.merge(tval, sval, options);
          } else {
            target[key] = helpers.clone(sval);
          }
        },

        /**
         * Merges source[key] in target[key] only if target[key] is undefined.
         * @private
         */
        _mergerIf: function _mergerIf(key, target, source) {
          var tval = target[key];
          var sval = source[key];

          if (helpers.isObject(tval) && helpers.isObject(sval)) {
            helpers.mergeIf(tval, sval);
          } else if (!target.hasOwnProperty(key)) {
            target[key] = helpers.clone(sval);
          }
        },

        /**
         * Recursively deep copies `source` properties into `target` with the given `options`.
         * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
         * @param {object} target - The target object in which all sources are merged into.
         * @param {object|object[]} source - Object(s) to merge into `target`.
         * @param {object} [options] - Merging options:
         * @param {function} [options.merger] - The merge method (key, target, source, options)
         * @returns {object} The `target` object.
         */
        merge: function merge(target, source, options) {
          var sources = helpers.isArray(source) ? source : [source];
          var ilen = sources.length;
          var merge, i, keys, klen, k;

          if (!helpers.isObject(target)) {
            return target;
          }

          options = options || {};
          merge = options.merger || helpers._merger;

          for (i = 0; i < ilen; ++i) {
            source = sources[i];

            if (!helpers.isObject(source)) {
              continue;
            }

            keys = Object.keys(source);

            for (k = 0, klen = keys.length; k < klen; ++k) {
              merge(keys[k], target, source, options);
            }
          }

          return target;
        },

        /**
         * Recursively deep copies `source` properties into `target` *only* if not defined in target.
         * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
         * @param {object} target - The target object in which all sources are merged into.
         * @param {object|object[]} source - Object(s) to merge into `target`.
         * @returns {object} The `target` object.
         */
        mergeIf: function mergeIf(target, source) {
          return helpers.merge(target, source, {
            merger: helpers._mergerIf
          });
        },

        /**
         * Applies the contents of two or more objects together into the first object.
         * @param {object} target - The target object in which all objects are merged into.
         * @param {object} arg1 - Object containing additional properties to merge in target.
         * @param {object} argN - Additional objects containing properties to merge in target.
         * @returns {object} The `target` object.
         */
        extend: Object.assign || function (target) {
          return helpers.merge(target, [].slice.call(arguments, 1), {
            merger: function merger(key, dst, src) {
              dst[key] = src[key];
            }
          });
        },

        /**
         * Basic javascript inheritance based on the model created in Backbone.js
         */
        inherits: function inherits(extensions) {
          var me = this;
          var ChartElement = extensions && extensions.hasOwnProperty('constructor') ? extensions.constructor : function () {
            return me.apply(this, arguments);
          };

          var Surrogate = function Surrogate() {
            this.constructor = ChartElement;
          };

          Surrogate.prototype = me.prototype;
          ChartElement.prototype = new Surrogate();
          ChartElement.extend = helpers.inherits;

          if (extensions) {
            helpers.extend(ChartElement.prototype, extensions);
          }

          ChartElement.__super__ = me.prototype;
          return ChartElement;
        },
        _deprecated: function _deprecated(scope, value, previous, current) {
          if (value !== undefined) {
            console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
          }
        }
      };
      var helpers_core = helpers; // DEPRECATIONS

      /**
       * Provided for backward compatibility, use Chart.helpers.callback instead.
       * @function Chart.helpers.callCallback
       * @deprecated since version 2.6.0
       * @todo remove at version 3
       * @private
       */

      helpers.callCallback = helpers.callback;
      /**
       * Provided for backward compatibility, use Array.prototype.indexOf instead.
       * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
       * @function Chart.helpers.indexOf
       * @deprecated since version 2.7.0
       * @todo remove at version 3
       * @private
       */

      helpers.indexOf = function (array, item, fromIndex) {
        return Array.prototype.indexOf.call(array, item, fromIndex);
      };
      /**
       * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
       * @function Chart.helpers.getValueOrDefault
       * @deprecated since version 2.7.0
       * @todo remove at version 3
       * @private
       */


      helpers.getValueOrDefault = helpers.valueOrDefault;
      /**
       * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
       * @function Chart.helpers.getValueAtIndexOrDefault
       * @deprecated since version 2.7.0
       * @todo remove at version 3
       * @private
       */

      helpers.getValueAtIndexOrDefault = helpers.valueAtIndexOrDefault;
      /**
       * Easing functions adapted from Robert Penner's easing equations.
       * @namespace Chart.helpers.easingEffects
       * @see http://www.robertpenner.com/easing/
       */

      var effects = {
        linear: function linear(t) {
          return t;
        },
        easeInQuad: function easeInQuad(t) {
          return t * t;
        },
        easeOutQuad: function easeOutQuad(t) {
          return -t * (t - 2);
        },
        easeInOutQuad: function easeInOutQuad(t) {
          if ((t /= 0.5) < 1) {
            return 0.5 * t * t;
          }

          return -0.5 * (--t * (t - 2) - 1);
        },
        easeInCubic: function easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic: function easeOutCubic(t) {
          return (t = t - 1) * t * t + 1;
        },
        easeInOutCubic: function easeInOutCubic(t) {
          if ((t /= 0.5) < 1) {
            return 0.5 * t * t * t;
          }

          return 0.5 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart: function easeOutQuart(t) {
          return -((t = t - 1) * t * t * t - 1);
        },
        easeInOutQuart: function easeInOutQuart(t) {
          if ((t /= 0.5) < 1) {
            return 0.5 * t * t * t * t;
          }

          return -0.5 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint: function easeOutQuint(t) {
          return (t = t - 1) * t * t * t * t + 1;
        },
        easeInOutQuint: function easeInOutQuint(t) {
          if ((t /= 0.5) < 1) {
            return 0.5 * t * t * t * t * t;
          }

          return 0.5 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function easeInSine(t) {
          return -Math.cos(t * (Math.PI / 2)) + 1;
        },
        easeOutSine: function easeOutSine(t) {
          return Math.sin(t * (Math.PI / 2));
        },
        easeInOutSine: function easeInOutSine(t) {
          return -0.5 * (Math.cos(Math.PI * t) - 1);
        },
        easeInExpo: function easeInExpo(t) {
          return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
        },
        easeOutExpo: function easeOutExpo(t) {
          return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
        },
        easeInOutExpo: function easeInOutExpo(t) {
          if (t === 0) {
            return 0;
          }

          if (t === 1) {
            return 1;
          }

          if ((t /= 0.5) < 1) {
            return 0.5 * Math.pow(2, 10 * (t - 1));
          }

          return 0.5 * (-Math.pow(2, -10 * --t) + 2);
        },
        easeInCirc: function easeInCirc(t) {
          if (t >= 1) {
            return t;
          }

          return -(Math.sqrt(1 - t * t) - 1);
        },
        easeOutCirc: function easeOutCirc(t) {
          return Math.sqrt(1 - (t = t - 1) * t);
        },
        easeInOutCirc: function easeInOutCirc(t) {
          if ((t /= 0.5) < 1) {
            return -0.5 * (Math.sqrt(1 - t * t) - 1);
          }

          return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function easeInElastic(t) {
          var s = 1.70158;
          var p = 0;
          var a = 1;

          if (t === 0) {
            return 0;
          }

          if (t === 1) {
            return 1;
          }

          if (!p) {
            p = 0.3;
          }

          if (a < 1) {
            a = 1;
            s = p / 4;
          } else {
            s = p / (2 * Math.PI) * Math.asin(1 / a);
          }

          return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
        },
        easeOutElastic: function easeOutElastic(t) {
          var s = 1.70158;
          var p = 0;
          var a = 1;

          if (t === 0) {
            return 0;
          }

          if (t === 1) {
            return 1;
          }

          if (!p) {
            p = 0.3;
          }

          if (a < 1) {
            a = 1;
            s = p / 4;
          } else {
            s = p / (2 * Math.PI) * Math.asin(1 / a);
          }

          return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
        },
        easeInOutElastic: function easeInOutElastic(t) {
          var s = 1.70158;
          var p = 0;
          var a = 1;

          if (t === 0) {
            return 0;
          }

          if ((t /= 0.5) === 2) {
            return 1;
          }

          if (!p) {
            p = 0.45;
          }

          if (a < 1) {
            a = 1;
            s = p / 4;
          } else {
            s = p / (2 * Math.PI) * Math.asin(1 / a);
          }

          if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
          }

          return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
        },
        easeInBack: function easeInBack(t) {
          var s = 1.70158;
          return t * t * ((s + 1) * t - s);
        },
        easeOutBack: function easeOutBack(t) {
          var s = 1.70158;
          return (t = t - 1) * t * ((s + 1) * t + s) + 1;
        },
        easeInOutBack: function easeInOutBack(t) {
          var s = 1.70158;

          if ((t /= 0.5) < 1) {
            return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
          }

          return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
        },
        easeInBounce: function easeInBounce(t) {
          return 1 - effects.easeOutBounce(1 - t);
        },
        easeOutBounce: function easeOutBounce(t) {
          if (t < 1 / 2.75) {
            return 7.5625 * t * t;
          }

          if (t < 2 / 2.75) {
            return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
          }

          if (t < 2.5 / 2.75) {
            return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
          }

          return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        },
        easeInOutBounce: function easeInOutBounce(t) {
          if (t < 0.5) {
            return effects.easeInBounce(t * 2) * 0.5;
          }

          return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
        }
      };
      var helpers_easing = {
        effects: effects
      }; // DEPRECATIONS

      /**
       * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
       * @function Chart.helpers.easingEffects
       * @deprecated since version 2.7.0
       * @todo remove at version 3
       * @private
       */

      helpers_core.easingEffects = effects;
      var PI = Math.PI;
      var RAD_PER_DEG = PI / 180;
      var DOUBLE_PI = PI * 2;
      var HALF_PI = PI / 2;
      var QUARTER_PI = PI / 4;
      var TWO_THIRDS_PI = PI * 2 / 3;
      /**
       * @namespace Chart.helpers.canvas
       */

      var exports$1 = {
        /**
         * Clears the entire canvas associated to the given `chart`.
         * @param {Chart} chart - The chart for which to clear the canvas.
         */
        clear: function clear(chart) {
          chart.ctx.clearRect(0, 0, chart.width, chart.height);
        },

        /**
         * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
         * given size (width, height) and the same `radius` for all corners.
         * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
         * @param {number} x - The x axis of the coordinate for the rectangle starting point.
         * @param {number} y - The y axis of the coordinate for the rectangle starting point.
         * @param {number} width - The rectangle's width.
         * @param {number} height - The rectangle's height.
         * @param {number} radius - The rounded amount (in pixels) for the four corners.
         * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
         */
        roundedRect: function roundedRect(ctx, x, y, width, height, radius) {
          if (radius) {
            var r = Math.min(radius, height / 2, width / 2);
            var left = x + r;
            var top = y + r;
            var right = x + width - r;
            var bottom = y + height - r;
            ctx.moveTo(x, top);

            if (left < right && top < bottom) {
              ctx.arc(left, top, r, -PI, -HALF_PI);
              ctx.arc(right, top, r, -HALF_PI, 0);
              ctx.arc(right, bottom, r, 0, HALF_PI);
              ctx.arc(left, bottom, r, HALF_PI, PI);
            } else if (left < right) {
              ctx.moveTo(left, y);
              ctx.arc(right, top, r, -HALF_PI, HALF_PI);
              ctx.arc(left, top, r, HALF_PI, PI + HALF_PI);
            } else if (top < bottom) {
              ctx.arc(left, top, r, -PI, 0);
              ctx.arc(left, bottom, r, 0, PI);
            } else {
              ctx.arc(left, top, r, -PI, PI);
            }

            ctx.closePath();
            ctx.moveTo(x, y);
          } else {
            ctx.rect(x, y, width, height);
          }
        },
        drawPoint: function drawPoint(ctx, style, radius, x, y, rotation) {
          var type, xOffset, yOffset, size, cornerRadius;
          var rad = (rotation || 0) * RAD_PER_DEG;

          if (style && typeof style === 'object') {
            type = style.toString();

            if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
              ctx.save();
              ctx.translate(x, y);
              ctx.rotate(rad);
              ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
              ctx.restore();
              return;
            }
          }

          if (isNaN(radius) || radius <= 0) {
            return;
          }

          ctx.beginPath();

          switch (style) {
            // Default includes circle
            default:
              ctx.arc(x, y, radius, 0, DOUBLE_PI);
              ctx.closePath();
              break;

            case 'triangle':
              ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
              rad += TWO_THIRDS_PI;
              ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
              rad += TWO_THIRDS_PI;
              ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
              ctx.closePath();
              break;

            case 'rectRounded':
              // NOTE: the rounded rect implementation changed to use `arc` instead of
              // `quadraticCurveTo` since it generates better results when rect is
              // almost a circle. 0.516 (instead of 0.5) produces results with visually
              // closer proportion to the previous impl and it is inscribed in the
              // circle with `radius`. For more details, see the following PRs:
              // https://github.com/chartjs/Chart.js/issues/5597
              // https://github.com/chartjs/Chart.js/issues/5858
              cornerRadius = radius * 0.516;
              size = radius - cornerRadius;
              xOffset = Math.cos(rad + QUARTER_PI) * size;
              yOffset = Math.sin(rad + QUARTER_PI) * size;
              ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
              ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
              ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
              ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
              ctx.closePath();
              break;

            case 'rect':
              if (!rotation) {
                size = Math.SQRT1_2 * radius;
                ctx.rect(x - size, y - size, 2 * size, 2 * size);
                break;
              }

              rad += QUARTER_PI;

            /* falls through */

            case 'rectRot':
              xOffset = Math.cos(rad) * radius;
              yOffset = Math.sin(rad) * radius;
              ctx.moveTo(x - xOffset, y - yOffset);
              ctx.lineTo(x + yOffset, y - xOffset);
              ctx.lineTo(x + xOffset, y + yOffset);
              ctx.lineTo(x - yOffset, y + xOffset);
              ctx.closePath();
              break;

            case 'crossRot':
              rad += QUARTER_PI;

            /* falls through */

            case 'cross':
              xOffset = Math.cos(rad) * radius;
              yOffset = Math.sin(rad) * radius;
              ctx.moveTo(x - xOffset, y - yOffset);
              ctx.lineTo(x + xOffset, y + yOffset);
              ctx.moveTo(x + yOffset, y - xOffset);
              ctx.lineTo(x - yOffset, y + xOffset);
              break;

            case 'star':
              xOffset = Math.cos(rad) * radius;
              yOffset = Math.sin(rad) * radius;
              ctx.moveTo(x - xOffset, y - yOffset);
              ctx.lineTo(x + xOffset, y + yOffset);
              ctx.moveTo(x + yOffset, y - xOffset);
              ctx.lineTo(x - yOffset, y + xOffset);
              rad += QUARTER_PI;
              xOffset = Math.cos(rad) * radius;
              yOffset = Math.sin(rad) * radius;
              ctx.moveTo(x - xOffset, y - yOffset);
              ctx.lineTo(x + xOffset, y + yOffset);
              ctx.moveTo(x + yOffset, y - xOffset);
              ctx.lineTo(x - yOffset, y + xOffset);
              break;

            case 'line':
              xOffset = Math.cos(rad) * radius;
              yOffset = Math.sin(rad) * radius;
              ctx.moveTo(x - xOffset, y - yOffset);
              ctx.lineTo(x + xOffset, y + yOffset);
              break;

            case 'dash':
              ctx.moveTo(x, y);
              ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
              break;
          }

          ctx.fill();
          ctx.stroke();
        },

        /**
         * Returns true if the point is inside the rectangle
         * @param {object} point - The point to test
         * @param {object} area - The rectangle
         * @returns {boolean}
         * @private
         */
        _isPointInArea: function _isPointInArea(point, area) {
          var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.

          return point.x > area.left - epsilon && point.x < area.right + epsilon && point.y > area.top - epsilon && point.y < area.bottom + epsilon;
        },
        clipArea: function clipArea(ctx, area) {
          ctx.save();
          ctx.beginPath();
          ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
          ctx.clip();
        },
        unclipArea: function unclipArea(ctx) {
          ctx.restore();
        },
        lineTo: function lineTo(ctx, previous, target, flip) {
          var stepped = target.steppedLine;

          if (stepped) {
            if (stepped === 'middle') {
              var midpoint = (previous.x + target.x) / 2.0;
              ctx.lineTo(midpoint, flip ? target.y : previous.y);
              ctx.lineTo(midpoint, flip ? previous.y : target.y);
            } else if (stepped === 'after' && !flip || stepped !== 'after' && flip) {
              ctx.lineTo(previous.x, target.y);
            } else {
              ctx.lineTo(target.x, previous.y);
            }

            ctx.lineTo(target.x, target.y);
            return;
          }

          if (!target.tension) {
            ctx.lineTo(target.x, target.y);
            return;
          }

          ctx.bezierCurveTo(flip ? previous.controlPointPreviousX : previous.controlPointNextX, flip ? previous.controlPointPreviousY : previous.controlPointNextY, flip ? target.controlPointNextX : target.controlPointPreviousX, flip ? target.controlPointNextY : target.controlPointPreviousY, target.x, target.y);
        }
      };
      var helpers_canvas = exports$1; // DEPRECATIONS

      /**
       * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
       * @namespace Chart.helpers.clear
       * @deprecated since version 2.7.0
       * @todo remove at version 3
       * @private
       */

      helpers_core.clear = exports$1.clear;
      /**
       * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
       * @namespace Chart.helpers.drawRoundedRectangle
       * @deprecated since version 2.7.0
       * @todo remove at version 3
       * @private
       */

      helpers_core.drawRoundedRectangle = function (ctx) {
        ctx.beginPath();
        exports$1.roundedRect.apply(exports$1, arguments);
      };

      var defaults = {
        /**
         * @private
         */
        _set: function _set(scope, values) {
          return helpers_core.merge(this[scope] || (this[scope] = {}), values);
        }
      }; // TODO(v3): remove 'global' from namespace.  all default are global and
      // there's inconsistency around which options are under 'global'

      defaults._set('global', {
        defaultColor: 'rgba(0,0,0,0.1)',
        defaultFontColor: '#666',
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: 'normal',
        defaultLineHeight: 1.2,
        showLines: true
      });

      var core_defaults = defaults;
      var valueOrDefault = helpers_core.valueOrDefault;
      /**
       * Converts the given font object into a CSS font string.
       * @param {object} font - A font object.
       * @return {string} The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
       * @private
       */

      function toFontString(font) {
        if (!font || helpers_core.isNullOrUndef(font.size) || helpers_core.isNullOrUndef(font.family)) {
          return null;
        }

        return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
      }
      /**
       * @alias Chart.helpers.options
       * @namespace
       */


      var helpers_options = {
        /**
         * Converts the given line height `value` in pixels for a specific font `size`.
         * @param {number|string} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
         * @param {number} size - The font size (in pixels) used to resolve relative `value`.
         * @returns {number} The effective line height in pixels (size * 1.2 if value is invalid).
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
         * @since 2.7.0
         */
        toLineHeight: function toLineHeight(value, size) {
          var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);

          if (!matches || matches[1] === 'normal') {
            return size * 1.2;
          }

          value = +matches[2];

          switch (matches[3]) {
            case 'px':
              return value;

            case '%':
              value /= 100;
              break;
          }

          return size * value;
        },

        /**
         * Converts the given value into a padding object with pre-computed width/height.
         * @param {number|object} value - If a number, set the value to all TRBL component,
         *  else, if and object, use defined properties and sets undefined ones to 0.
         * @returns {object} The padding values (top, right, bottom, left, width, height)
         * @since 2.7.0
         */
        toPadding: function toPadding(value) {
          var t, r, b, l;

          if (helpers_core.isObject(value)) {
            t = +value.top || 0;
            r = +value.right || 0;
            b = +value.bottom || 0;
            l = +value.left || 0;
          } else {
            t = r = b = l = +value || 0;
          }

          return {
            top: t,
            right: r,
            bottom: b,
            left: l,
            height: t + b,
            width: l + r
          };
        },

        /**
         * Parses font options and returns the font object.
         * @param {object} options - A object that contains font options to be parsed.
         * @return {object} The font object.
         * @todo Support font.* options and renamed to toFont().
         * @private
         */
        _parseFont: function _parseFont(options) {
          var globalDefaults = core_defaults.global;
          var size = valueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
          var font = {
            family: valueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily),
            lineHeight: helpers_core.options.toLineHeight(valueOrDefault(options.lineHeight, globalDefaults.defaultLineHeight), size),
            size: size,
            style: valueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle),
            weight: null,
            string: ''
          };
          font.string = toFontString(font);
          return font;
        },

        /**
         * Evaluates the given `inputs` sequentially and returns the first defined value.
         * @param {Array} inputs - An array of values, falling back to the last value.
         * @param {object} [context] - If defined and the current value is a function, the value
         * is called with `context` as first argument and the result becomes the new input.
         * @param {number} [index] - If defined and the current value is an array, the value
         * at `index` become the new input.
         * @param {object} [info] - object to return information about resolution in
         * @param {boolean} [info.cacheable] - Will be set to `false` if option is not cacheable.
         * @since 2.7.0
         */
        resolve: function resolve(inputs, context, index, info) {
          var cacheable = true;
          var i, ilen, value;

          for (i = 0, ilen = inputs.length; i < ilen; ++i) {
            value = inputs[i];

            if (value === undefined) {
              continue;
            }

            if (context !== undefined && typeof value === 'function') {
              value = value(context);
              cacheable = false;
            }

            if (index !== undefined && helpers_core.isArray(value)) {
              value = value[index];
              cacheable = false;
            }

            if (value !== undefined) {
              if (info && !cacheable) {
                info.cacheable = false;
              }

              return value;
            }
          }
        }
      };
      /**
       * @alias Chart.helpers.math
       * @namespace
       */

      var exports$2 = {
        /**
         * Returns an array of factors sorted from 1 to sqrt(value)
         * @private
         */
        _factorize: function _factorize(value) {
          var result = [];
          var sqrt = Math.sqrt(value);
          var i;

          for (i = 1; i < sqrt; i++) {
            if (value % i === 0) {
              result.push(i);
              result.push(value / i);
            }
          }

          if (sqrt === (sqrt | 0)) {
            // if value is a square number
            result.push(sqrt);
          }

          result.sort(function (a, b) {
            return a - b;
          }).pop();
          return result;
        },
        log10: Math.log10 || function (x) {
          var exponent = Math.log(x) * Math.LOG10E; // Math.LOG10E = 1 / Math.LN10.
          // Check for whole powers of 10,
          // which due to floating point rounding error should be corrected.

          var powerOf10 = Math.round(exponent);
          var isPowerOf10 = x === Math.pow(10, powerOf10);
          return isPowerOf10 ? powerOf10 : exponent;
        }
      };
      var helpers_math = exports$2; // DEPRECATIONS

      /**
       * Provided for backward compatibility, use Chart.helpers.math.log10 instead.
       * @namespace Chart.helpers.log10
       * @deprecated since version 2.9.0
       * @todo remove at version 3
       * @private
       */

      helpers_core.log10 = exports$2.log10;

      var getRtlAdapter = function getRtlAdapter(rectX, width) {
        return {
          x: function x(_x2) {
            return rectX + rectX + width - _x2;
          },
          setWidth: function setWidth(w) {
            width = w;
          },
          textAlign: function textAlign(align) {
            if (align === 'center') {
              return align;
            }

            return align === 'right' ? 'left' : 'right';
          },
          xPlus: function xPlus(x, value) {
            return x - value;
          },
          leftForLtr: function leftForLtr(x, itemWidth) {
            return x - itemWidth;
          }
        };
      };

      var getLtrAdapter = function getLtrAdapter() {
        return {
          x: function x(_x3) {
            return _x3;
          },
          setWidth: function setWidth(w) {// eslint-disable-line no-unused-vars
          },
          textAlign: function textAlign(align) {
            return align;
          },
          xPlus: function xPlus(x, value) {
            return x + value;
          },
          leftForLtr: function leftForLtr(x, _itemWidth) {
            // eslint-disable-line no-unused-vars
            return x;
          }
        };
      };

      var getAdapter = function getAdapter(rtl, rectX, width) {
        return rtl ? getRtlAdapter(rectX, width) : getLtrAdapter();
      };

      var overrideTextDirection = function overrideTextDirection(ctx, direction) {
        var style, original;

        if (direction === 'ltr' || direction === 'rtl') {
          style = ctx.canvas.style;
          original = [style.getPropertyValue('direction'), style.getPropertyPriority('direction')];
          style.setProperty('direction', direction, 'important');
          ctx.prevTextDirection = original;
        }
      };

      var restoreTextDirection = function restoreTextDirection(ctx) {
        var original = ctx.prevTextDirection;

        if (original !== undefined) {
          delete ctx.prevTextDirection;
          ctx.canvas.style.setProperty('direction', original[0], original[1]);
        }
      };

      var helpers_rtl = {
        getRtlAdapter: getAdapter,
        overrideTextDirection: overrideTextDirection,
        restoreTextDirection: restoreTextDirection
      };
      var helpers$1 = helpers_core;
      var easing = helpers_easing;
      var canvas = helpers_canvas;
      var options = helpers_options;
      var math = helpers_math;
      var rtl = helpers_rtl;
      helpers$1.easing = easing;
      helpers$1.canvas = canvas;
      helpers$1.options = options;
      helpers$1.math = math;
      helpers$1.rtl = rtl;

      function interpolate(start, view, model, ease) {
        var keys = Object.keys(model);
        var i, ilen, key, actual, origin, target, type, c0, c1;

        for (i = 0, ilen = keys.length; i < ilen; ++i) {
          key = keys[i];
          target = model[key]; // if a value is added to the model after pivot() has been called, the view
          // doesn't contain it, so let's initialize the view to the target value.

          if (!view.hasOwnProperty(key)) {
            view[key] = target;
          }

          actual = view[key];

          if (actual === target || key[0] === '_') {
            continue;
          }

          if (!start.hasOwnProperty(key)) {
            start[key] = actual;
          }

          origin = start[key];
          type = typeof target;

          if (type === typeof origin) {
            if (type === 'string') {
              c0 = chartjsColor(origin);

              if (c0.valid) {
                c1 = chartjsColor(target);

                if (c1.valid) {
                  view[key] = c1.mix(c0, ease).rgbString();
                  continue;
                }
              }
            } else if (helpers$1.isFinite(origin) && helpers$1.isFinite(target)) {
              view[key] = origin + (target - origin) * ease;
              continue;
            }
          }

          view[key] = target;
        }
      }

      var Element = function Element(configuration) {
        helpers$1.extend(this, configuration);
        this.initialize.apply(this, arguments);
      };

      helpers$1.extend(Element.prototype, {
        _type: undefined,
        initialize: function initialize() {
          this.hidden = false;
        },
        pivot: function pivot() {
          var me = this;

          if (!me._view) {
            me._view = helpers$1.extend({}, me._model);
          }

          me._start = {};
          return me;
        },
        transition: function transition(ease) {
          var me = this;
          var model = me._model;
          var start = me._start;
          var view = me._view; // No animation -> No Transition

          if (!model || ease === 1) {
            me._view = helpers$1.extend({}, model);
            me._start = null;
            return me;
          }

          if (!view) {
            view = me._view = {};
          }

          if (!start) {
            start = me._start = {};
          }

          interpolate(start, view, model, ease);
          return me;
        },
        tooltipPosition: function tooltipPosition() {
          return {
            x: this._model.x,
            y: this._model.y
          };
        },
        hasValue: function hasValue() {
          return helpers$1.isNumber(this._model.x) && helpers$1.isNumber(this._model.y);
        }
      });
      Element.extend = helpers$1.inherits;
      var core_element = Element;
      var exports$3 = core_element.extend({
        chart: null,
        // the animation associated chart instance
        currentStep: 0,
        // the current animation step
        numSteps: 60,
        // default number of steps
        easing: '',
        // the easing to use for this animation
        render: null,
        // render function used by the animation service
        onAnimationProgress: null,
        // user specified callback to fire on each step of the animation
        onAnimationComplete: null // user specified callback to fire when the animation finishes

      });
      var core_animation = exports$3; // DEPRECATIONS

      /**
       * Provided for backward compatibility, use Chart.Animation instead
       * @prop Chart.Animation#animationObject
       * @deprecated since version 2.6.0
       * @todo remove at version 3
       */

      Object.defineProperty(exports$3.prototype, 'animationObject', {
        get: function get() {
          return this;
        }
      });
      /**
       * Provided for backward compatibility, use Chart.Animation#chart instead
       * @prop Chart.Animation#chartInstance
       * @deprecated since version 2.6.0
       * @todo remove at version 3
       */

      Object.defineProperty(exports$3.prototype, 'chartInstance', {
        get: function get() {
          return this.chart;
        },
        set: function set(value) {
          this.chart = value;
        }
      });

      core_defaults._set('global', {
        animation: {
          duration: 1000,
          easing: 'easeOutQuart',
          onProgress: helpers$1.noop,
          onComplete: helpers$1.noop
        }
      });

      var core_animations = {
        animations: [],
        request: null,

        /**
         * @param {Chart} chart - The chart to animate.
         * @param {Chart.Animation} animation - The animation that we will animate.
         * @param {number} duration - The animation duration in ms.
         * @param {boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
         */
        addAnimation: function addAnimation(chart, animation, duration, lazy) {
          var animations = this.animations;
          var i, ilen;
          animation.chart = chart;
          animation.startTime = Date.now();
          animation.duration = duration;

          if (!lazy) {
            chart.animating = true;
          }

          for (i = 0, ilen = animations.length; i < ilen; ++i) {
            if (animations[i].chart === chart) {
              animations[i] = animation;
              return;
            }
          }

          animations.push(animation); // If there are no animations queued, manually kickstart a digest, for lack of a better word

          if (animations.length === 1) {
            this.requestAnimationFrame();
          }
        },
        cancelAnimation: function cancelAnimation(chart) {
          var index = helpers$1.findIndex(this.animations, function (animation) {
            return animation.chart === chart;
          });

          if (index !== -1) {
            this.animations.splice(index, 1);
            chart.animating = false;
          }
        },
        requestAnimationFrame: function requestAnimationFrame() {
          var me = this;

          if (me.request === null) {
            // Skip animation frame requests until the active one is executed.
            // This can happen when processing mouse events, e.g. 'mousemove'
            // and 'mouseout' events will trigger multiple renders.
            me.request = helpers$1.requestAnimFrame.call(window, function () {
              me.request = null;
              me.startDigest();
            });
          }
        },

        /**
         * @private
         */
        startDigest: function startDigest() {
          var me = this;
          me.advance(); // Do we have more stuff to animate?

          if (me.animations.length > 0) {
            me.requestAnimationFrame();
          }
        },

        /**
         * @private
         */
        advance: function advance() {
          var animations = this.animations;
          var animation, chart, numSteps, nextStep;
          var i = 0; // 1 animation per chart, so we are looping charts here

          while (i < animations.length) {
            animation = animations[i];
            chart = animation.chart;
            numSteps = animation.numSteps; // Make sure that currentStep starts at 1
            // https://github.com/chartjs/Chart.js/issues/6104

            nextStep = Math.floor((Date.now() - animation.startTime) / animation.duration * numSteps) + 1;
            animation.currentStep = Math.min(nextStep, numSteps);
            helpers$1.callback(animation.render, [chart, animation], chart);
            helpers$1.callback(animation.onAnimationProgress, [animation], chart);

            if (animation.currentStep >= numSteps) {
              helpers$1.callback(animation.onAnimationComplete, [animation], chart);
              chart.animating = false;
              animations.splice(i, 1);
            } else {
              ++i;
            }
          }
        }
      };
      var resolve = helpers$1.options.resolve;
      var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
      /**
       * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
       * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
       * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
       */

      function listenArrayEvents(array, listener) {
        if (array._chartjs) {
          array._chartjs.listeners.push(listener);

          return;
        }

        Object.defineProperty(array, '_chartjs', {
          configurable: true,
          enumerable: false,
          value: {
            listeners: [listener]
          }
        });
        arrayEvents.forEach(function (key) {
          var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
          var base = array[key];
          Object.defineProperty(array, key, {
            configurable: true,
            enumerable: false,
            value: function value() {
              var args = Array.prototype.slice.call(arguments);
              var res = base.apply(this, args);
              helpers$1.each(array._chartjs.listeners, function (object) {
                if (typeof object[method] === 'function') {
                  object[method].apply(object, args);
                }
              });
              return res;
            }
          });
        });
      }
      /**
       * Removes the given array event listener and cleanup extra attached properties (such as
       * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
       */


      function unlistenArrayEvents(array, listener) {
        var stub = array._chartjs;

        if (!stub) {
          return;
        }

        var listeners = stub.listeners;
        var index = listeners.indexOf(listener);

        if (index !== -1) {
          listeners.splice(index, 1);
        }

        if (listeners.length > 0) {
          return;
        }

        arrayEvents.forEach(function (key) {
          delete array[key];
        });
        delete array._chartjs;
      } // Base class for all dataset controllers (line, bar, etc)


      var DatasetController = function DatasetController(chart, datasetIndex) {
        this.initialize(chart, datasetIndex);
      };

      helpers$1.extend(DatasetController.prototype, {
        /**
         * Element type used to generate a meta dataset (e.g. Chart.element.Line).
         * @type {Chart.core.element}
         */
        datasetElementType: null,

        /**
         * Element type used to generate a meta data (e.g. Chart.element.Point).
         * @type {Chart.core.element}
         */
        dataElementType: null,

        /**
         * Dataset element option keys to be resolved in _resolveDatasetElementOptions.
         * A derived controller may override this to resolve controller-specific options.
         * The keys defined here are for backward compatibility for legend styles.
         * @private
         */
        _datasetElementOptions: ['backgroundColor', 'borderCapStyle', 'borderColor', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'borderWidth'],

        /**
         * Data element option keys to be resolved in _resolveDataElementOptions.
         * A derived controller may override this to resolve controller-specific options.
         * The keys defined here are for backward compatibility for legend styles.
         * @private
         */
        _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'pointStyle'],
        initialize: function initialize(chart, datasetIndex) {
          var me = this;
          me.chart = chart;
          me.index = datasetIndex;
          me.linkScales();
          me.addElements();
          me._type = me.getMeta().type;
        },
        updateIndex: function updateIndex(datasetIndex) {
          this.index = datasetIndex;
        },
        linkScales: function linkScales() {
          var me = this;
          var meta = me.getMeta();
          var chart = me.chart;
          var scales = chart.scales;
          var dataset = me.getDataset();
          var scalesOpts = chart.options.scales;

          if (meta.xAxisID === null || !(meta.xAxisID in scales) || dataset.xAxisID) {
            meta.xAxisID = dataset.xAxisID || scalesOpts.xAxes[0].id;
          }

          if (meta.yAxisID === null || !(meta.yAxisID in scales) || dataset.yAxisID) {
            meta.yAxisID = dataset.yAxisID || scalesOpts.yAxes[0].id;
          }
        },
        getDataset: function getDataset() {
          return this.chart.data.datasets[this.index];
        },
        getMeta: function getMeta() {
          return this.chart.getDatasetMeta(this.index);
        },
        getScaleForId: function getScaleForId(scaleID) {
          return this.chart.scales[scaleID];
        },

        /**
         * @private
         */
        _getValueScaleId: function _getValueScaleId() {
          return this.getMeta().yAxisID;
        },

        /**
         * @private
         */
        _getIndexScaleId: function _getIndexScaleId() {
          return this.getMeta().xAxisID;
        },

        /**
         * @private
         */
        _getValueScale: function _getValueScale() {
          return this.getScaleForId(this._getValueScaleId());
        },

        /**
         * @private
         */
        _getIndexScale: function _getIndexScale() {
          return this.getScaleForId(this._getIndexScaleId());
        },
        reset: function reset() {
          this._update(true);
        },

        /**
         * @private
         */
        destroy: function destroy() {
          if (this._data) {
            unlistenArrayEvents(this._data, this);
          }
        },
        createMetaDataset: function createMetaDataset() {
          var me = this;
          var type = me.datasetElementType;
          return type && new type({
            _chart: me.chart,
            _datasetIndex: me.index
          });
        },
        createMetaData: function createMetaData(index) {
          var me = this;
          var type = me.dataElementType;
          return type && new type({
            _chart: me.chart,
            _datasetIndex: me.index,
            _index: index
          });
        },
        addElements: function addElements() {
          var me = this;
          var meta = me.getMeta();
          var data = me.getDataset().data || [];
          var metaData = meta.data;
          var i, ilen;

          for (i = 0, ilen = data.length; i < ilen; ++i) {
            metaData[i] = metaData[i] || me.createMetaData(i);
          }

          meta.dataset = meta.dataset || me.createMetaDataset();
        },
        addElementAndReset: function addElementAndReset(index) {
          var element = this.createMetaData(index);
          this.getMeta().data.splice(index, 0, element);
          this.updateElement(element, index, true);
        },
        buildOrUpdateElements: function buildOrUpdateElements() {
          var me = this;
          var dataset = me.getDataset();
          var data = dataset.data || (dataset.data = []); // In order to correctly handle data addition/deletion animation (an thus simulate
          // real-time charts), we need to monitor these data modifications and synchronize
          // the internal meta data accordingly.

          if (me._data !== data) {
            if (me._data) {
              // This case happens when the user replaced the data array instance.
              unlistenArrayEvents(me._data, me);
            }

            if (data && Object.isExtensible(data)) {
              listenArrayEvents(data, me);
            }

            me._data = data;
          } // Re-sync meta data in case the user replaced the data array or if we missed
          // any updates and so make sure that we handle number of datapoints changing.


          me.resyncElements();
        },

        /**
         * Returns the merged user-supplied and default dataset-level options
         * @private
         */
        _configure: function _configure() {
          var me = this;
          me._config = helpers$1.merge({}, [me.chart.options.datasets[me._type], me.getDataset()], {
            merger: function merger(key, target, source) {
              if (key !== '_meta' && key !== 'data') {
                helpers$1._merger(key, target, source);
              }
            }
          });
        },
        _update: function _update(reset) {
          var me = this;

          me._configure();

          me._cachedDataOpts = null;
          me.update(reset);
        },
        update: helpers$1.noop,
        transition: function transition(easingValue) {
          var meta = this.getMeta();
          var elements = meta.data || [];
          var ilen = elements.length;
          var i = 0;

          for (; i < ilen; ++i) {
            elements[i].transition(easingValue);
          }

          if (meta.dataset) {
            meta.dataset.transition(easingValue);
          }
        },
        draw: function draw() {
          var meta = this.getMeta();
          var elements = meta.data || [];
          var ilen = elements.length;
          var i = 0;

          if (meta.dataset) {
            meta.dataset.draw();
          }

          for (; i < ilen; ++i) {
            elements[i].draw();
          }
        },

        /**
         * Returns a set of predefined style properties that should be used to represent the dataset
         * or the data if the index is specified
         * @param {number} index - data index
         * @return {IStyleInterface} style object
         */
        getStyle: function getStyle(index) {
          var me = this;
          var meta = me.getMeta();
          var dataset = meta.dataset;
          var style;

          me._configure();

          if (dataset && index === undefined) {
            style = me._resolveDatasetElementOptions(dataset || {});
          } else {
            index = index || 0;
            style = me._resolveDataElementOptions(meta.data[index] || {}, index);
          }

          if (style.fill === false || style.fill === null) {
            style.backgroundColor = style.borderColor;
          }

          return style;
        },

        /**
         * @private
         */
        _resolveDatasetElementOptions: function _resolveDatasetElementOptions(element, hover) {
          var me = this;
          var chart = me.chart;
          var datasetOpts = me._config;
          var custom = element.custom || {};
          var options = chart.options.elements[me.datasetElementType.prototype._type] || {};
          var elementOptions = me._datasetElementOptions;
          var values = {};
          var i, ilen, key, readKey; // Scriptable options

          var context = {
            chart: chart,
            dataset: me.getDataset(),
            datasetIndex: me.index,
            hover: hover
          };

          for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
            key = elementOptions[i];
            readKey = hover ? 'hover' + key.charAt(0).toUpperCase() + key.slice(1) : key;
            values[key] = resolve([custom[readKey], datasetOpts[readKey], options[readKey]], context);
          }

          return values;
        },

        /**
         * @private
         */
        _resolveDataElementOptions: function _resolveDataElementOptions(element, index) {
          var me = this;
          var custom = element && element.custom;
          var cached = me._cachedDataOpts;

          if (cached && !custom) {
            return cached;
          }

          var chart = me.chart;
          var datasetOpts = me._config;
          var options = chart.options.elements[me.dataElementType.prototype._type] || {};
          var elementOptions = me._dataElementOptions;
          var values = {}; // Scriptable options

          var context = {
            chart: chart,
            dataIndex: index,
            dataset: me.getDataset(),
            datasetIndex: me.index
          }; // `resolve` sets cacheable to `false` if any option is indexed or scripted

          var info = {
            cacheable: !custom
          };
          var keys, i, ilen, key;
          custom = custom || {};

          if (helpers$1.isArray(elementOptions)) {
            for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
              key = elementOptions[i];
              values[key] = resolve([custom[key], datasetOpts[key], options[key]], context, index, info);
            }
          } else {
            keys = Object.keys(elementOptions);

            for (i = 0, ilen = keys.length; i < ilen; ++i) {
              key = keys[i];
              values[key] = resolve([custom[key], datasetOpts[elementOptions[key]], datasetOpts[key], options[key]], context, index, info);
            }
          }

          if (info.cacheable) {
            me._cachedDataOpts = Object.freeze(values);
          }

          return values;
        },
        removeHoverStyle: function removeHoverStyle(element) {
          helpers$1.merge(element._model, element.$previousStyle || {});
          delete element.$previousStyle;
        },
        setHoverStyle: function setHoverStyle(element) {
          var dataset = this.chart.data.datasets[element._datasetIndex];
          var index = element._index;
          var custom = element.custom || {};
          var model = element._model;
          var getHoverColor = helpers$1.getHoverColor;
          element.$previousStyle = {
            backgroundColor: model.backgroundColor,
            borderColor: model.borderColor,
            borderWidth: model.borderWidth
          };
          model.backgroundColor = resolve([custom.hoverBackgroundColor, dataset.hoverBackgroundColor, getHoverColor(model.backgroundColor)], undefined, index);
          model.borderColor = resolve([custom.hoverBorderColor, dataset.hoverBorderColor, getHoverColor(model.borderColor)], undefined, index);
          model.borderWidth = resolve([custom.hoverBorderWidth, dataset.hoverBorderWidth, model.borderWidth], undefined, index);
        },

        /**
         * @private
         */
        _removeDatasetHoverStyle: function _removeDatasetHoverStyle() {
          var element = this.getMeta().dataset;

          if (element) {
            this.removeHoverStyle(element);
          }
        },

        /**
         * @private
         */
        _setDatasetHoverStyle: function _setDatasetHoverStyle() {
          var element = this.getMeta().dataset;
          var prev = {};
          var i, ilen, key, keys, hoverOptions, model;

          if (!element) {
            return;
          }

          model = element._model;
          hoverOptions = this._resolveDatasetElementOptions(element, true);
          keys = Object.keys(hoverOptions);

          for (i = 0, ilen = keys.length; i < ilen; ++i) {
            key = keys[i];
            prev[key] = model[key];
            model[key] = hoverOptions[key];
          }

          element.$previousStyle = prev;
        },

        /**
         * @private
         */
        resyncElements: function resyncElements() {
          var me = this;
          var meta = me.getMeta();
          var data = me.getDataset().data;
          var numMeta = meta.data.length;
          var numData = data.length;

          if (numData < numMeta) {
            meta.data.splice(numData, numMeta - numData);
          } else if (numData > numMeta) {
            me.insertElements(numMeta, numData - numMeta);
          }
        },

        /**
         * @private
         */
        insertElements: function insertElements(start, count) {
          for (var i = 0; i < count; ++i) {
            this.addElementAndReset(start + i);
          }
        },

        /**
         * @private
         */
        onDataPush: function onDataPush() {
          var count = arguments.length;
          this.insertElements(this.getDataset().data.length - count, count);
        },

        /**
         * @private
         */
        onDataPop: function onDataPop() {
          this.getMeta().data.pop();
        },

        /**
         * @private
         */
        onDataShift: function onDataShift() {
          this.getMeta().data.shift();
        },

        /**
         * @private
         */
        onDataSplice: function onDataSplice(start, count) {
          this.getMeta().data.splice(start, count);
          this.insertElements(start, arguments.length - 2);
        },

        /**
         * @private
         */
        onDataUnshift: function onDataUnshift() {
          this.insertElements(0, arguments.length);
        }
      });
      DatasetController.extend = helpers$1.inherits;
      var core_datasetController = DatasetController;
      var TAU = Math.PI * 2;

      core_defaults._set('global', {
        elements: {
          arc: {
            backgroundColor: core_defaults.global.defaultColor,
            borderColor: '#fff',
            borderWidth: 2,
            borderAlign: 'center'
          }
        }
      });

      function clipArc(ctx, arc) {
        var startAngle = arc.startAngle;
        var endAngle = arc.endAngle;
        var pixelMargin = arc.pixelMargin;
        var angleMargin = pixelMargin / arc.outerRadius;
        var x = arc.x;
        var y = arc.y; // Draw an inner border by cliping the arc and drawing a double-width border
        // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders

        ctx.beginPath();
        ctx.arc(x, y, arc.outerRadius, startAngle - angleMargin, endAngle + angleMargin);

        if (arc.innerRadius > pixelMargin) {
          angleMargin = pixelMargin / arc.innerRadius;
          ctx.arc(x, y, arc.innerRadius - pixelMargin, endAngle + angleMargin, startAngle - angleMargin, true);
        } else {
          ctx.arc(x, y, pixelMargin, endAngle + Math.PI / 2, startAngle - Math.PI / 2);
        }

        ctx.closePath();
        ctx.clip();
      }

      function drawFullCircleBorders(ctx, vm, arc, inner) {
        var endAngle = arc.endAngle;
        var i;

        if (inner) {
          arc.endAngle = arc.startAngle + TAU;
          clipArc(ctx, arc);
          arc.endAngle = endAngle;

          if (arc.endAngle === arc.startAngle && arc.fullCircles) {
            arc.endAngle += TAU;
            arc.fullCircles--;
          }
        }

        ctx.beginPath();
        ctx.arc(arc.x, arc.y, arc.innerRadius, arc.startAngle + TAU, arc.startAngle, true);

        for (i = 0; i < arc.fullCircles; ++i) {
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.startAngle + TAU);

        for (i = 0; i < arc.fullCircles; ++i) {
          ctx.stroke();
        }
      }

      function drawBorder(ctx, vm, arc) {
        var inner = vm.borderAlign === 'inner';

        if (inner) {
          ctx.lineWidth = vm.borderWidth * 2;
          ctx.lineJoin = 'round';
        } else {
          ctx.lineWidth = vm.borderWidth;
          ctx.lineJoin = 'bevel';
        }

        if (arc.fullCircles) {
          drawFullCircleBorders(ctx, vm, arc, inner);
        }

        if (inner) {
          clipArc(ctx, arc);
        }

        ctx.beginPath();
        ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.endAngle);
        ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
        ctx.closePath();
        ctx.stroke();
      }

      var element_arc = core_element.extend({
        _type: 'arc',
        inLabelRange: function inLabelRange(mouseX) {
          var vm = this._view;

          if (vm) {
            return Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2);
          }

          return false;
        },
        inRange: function inRange(chartX, chartY) {
          var vm = this._view;

          if (vm) {
            var pointRelativePosition = helpers$1.getAngleFromPoint(vm, {
              x: chartX,
              y: chartY
            });
            var angle = pointRelativePosition.angle;
            var distance = pointRelativePosition.distance; // Sanitise angle range

            var startAngle = vm.startAngle;
            var endAngle = vm.endAngle;

            while (endAngle < startAngle) {
              endAngle += TAU;
            }

            while (angle > endAngle) {
              angle -= TAU;
            }

            while (angle < startAngle) {
              angle += TAU;
            } // Check if within the range of the open/close angle


            var betweenAngles = angle >= startAngle && angle <= endAngle;
            var withinRadius = distance >= vm.innerRadius && distance <= vm.outerRadius;
            return betweenAngles && withinRadius;
          }

          return false;
        },
        getCenterPoint: function getCenterPoint() {
          var vm = this._view;
          var halfAngle = (vm.startAngle + vm.endAngle) / 2;
          var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
          return {
            x: vm.x + Math.cos(halfAngle) * halfRadius,
            y: vm.y + Math.sin(halfAngle) * halfRadius
          };
        },
        getArea: function getArea() {
          var vm = this._view;
          return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
        },
        tooltipPosition: function tooltipPosition() {
          var vm = this._view;
          var centreAngle = vm.startAngle + (vm.endAngle - vm.startAngle) / 2;
          var rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
          return {
            x: vm.x + Math.cos(centreAngle) * rangeFromCentre,
            y: vm.y + Math.sin(centreAngle) * rangeFromCentre
          };
        },
        draw: function draw() {
          var ctx = this._chart.ctx;
          var vm = this._view;
          var pixelMargin = vm.borderAlign === 'inner' ? 0.33 : 0;
          var arc = {
            x: vm.x,
            y: vm.y,
            innerRadius: vm.innerRadius,
            outerRadius: Math.max(vm.outerRadius - pixelMargin, 0),
            pixelMargin: pixelMargin,
            startAngle: vm.startAngle,
            endAngle: vm.endAngle,
            fullCircles: Math.floor(vm.circumference / TAU)
          };
          var i;
          ctx.save();
          ctx.fillStyle = vm.backgroundColor;
          ctx.strokeStyle = vm.borderColor;

          if (arc.fullCircles) {
            arc.endAngle = arc.startAngle + TAU;
            ctx.beginPath();
            ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
            ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
            ctx.closePath();

            for (i = 0; i < arc.fullCircles; ++i) {
              ctx.fill();
            }

            arc.endAngle = arc.startAngle + vm.circumference % TAU;
          }

          ctx.beginPath();
          ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
          ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
          ctx.closePath();
          ctx.fill();

          if (vm.borderWidth) {
            drawBorder(ctx, vm, arc);
          }

          ctx.restore();
        }
      });
      var valueOrDefault$1 = helpers$1.valueOrDefault;
      var defaultColor = core_defaults.global.defaultColor;

      core_defaults._set('global', {
        elements: {
          line: {
            tension: 0.4,
            backgroundColor: defaultColor,
            borderWidth: 3,
            borderColor: defaultColor,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            capBezierPoints: true,
            fill: true // do we fill in the area between the line and its base axis

          }
        }
      });

      var element_line = core_element.extend({
        _type: 'line',
        draw: function draw() {
          var me = this;
          var vm = me._view;
          var ctx = me._chart.ctx;
          var spanGaps = vm.spanGaps;

          var points = me._children.slice(); // clone array


          var globalDefaults = core_defaults.global;
          var globalOptionLineElements = globalDefaults.elements.line;
          var lastDrawnIndex = -1;
          var closePath = me._loop;
          var index, previous, currentVM;

          if (!points.length) {
            return;
          }

          if (me._loop) {
            for (index = 0; index < points.length; ++index) {
              previous = helpers$1.previousItem(points, index); // If the line has an open path, shift the point array

              if (!points[index]._view.skip && previous._view.skip) {
                points = points.slice(index).concat(points.slice(0, index));
                closePath = spanGaps;
                break;
              }
            } // If the line has a close path, add the first point again


            if (closePath) {
              points.push(points[0]);
            }
          }

          ctx.save(); // Stroke Line Options

          ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle; // IE 9 and 10 do not support line dash

          if (ctx.setLineDash) {
            ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
          }

          ctx.lineDashOffset = valueOrDefault$1(vm.borderDashOffset, globalOptionLineElements.borderDashOffset);
          ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
          ctx.lineWidth = valueOrDefault$1(vm.borderWidth, globalOptionLineElements.borderWidth);
          ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor; // Stroke Line

          ctx.beginPath(); // First point moves to it's starting position no matter what

          currentVM = points[0]._view;

          if (!currentVM.skip) {
            ctx.moveTo(currentVM.x, currentVM.y);
            lastDrawnIndex = 0;
          }

          for (index = 1; index < points.length; ++index) {
            currentVM = points[index]._view;
            previous = lastDrawnIndex === -1 ? helpers$1.previousItem(points, index) : points[lastDrawnIndex];

            if (!currentVM.skip) {
              if (lastDrawnIndex !== index - 1 && !spanGaps || lastDrawnIndex === -1) {
                // There was a gap and this is the first point after the gap
                ctx.moveTo(currentVM.x, currentVM.y);
              } else {
                // Line to next point
                helpers$1.canvas.lineTo(ctx, previous._view, currentVM);
              }

              lastDrawnIndex = index;
            }
          }

          if (closePath) {
            ctx.closePath();
          }

          ctx.stroke();
          ctx.restore();
        }
      });
      var valueOrDefault$2 = helpers$1.valueOrDefault;
      var defaultColor$1 = core_defaults.global.defaultColor;

      core_defaults._set('global', {
        elements: {
          point: {
            radius: 3,
            pointStyle: 'circle',
            backgroundColor: defaultColor$1,
            borderColor: defaultColor$1,
            borderWidth: 1,
            // Hover
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1
          }
        }
      });

      function xRange(mouseX) {
        var vm = this._view;
        return vm ? Math.abs(mouseX - vm.x) < vm.radius + vm.hitRadius : false;
      }

      function yRange(mouseY) {
        var vm = this._view;
        return vm ? Math.abs(mouseY - vm.y) < vm.radius + vm.hitRadius : false;
      }

      var element_point = core_element.extend({
        _type: 'point',
        inRange: function inRange(mouseX, mouseY) {
          var vm = this._view;
          return vm ? Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2) < Math.pow(vm.hitRadius + vm.radius, 2) : false;
        },
        inLabelRange: xRange,
        inXRange: xRange,
        inYRange: yRange,
        getCenterPoint: function getCenterPoint() {
          var vm = this._view;
          return {
            x: vm.x,
            y: vm.y
          };
        },
        getArea: function getArea() {
          return Math.PI * Math.pow(this._view.radius, 2);
        },
        tooltipPosition: function tooltipPosition() {
          var vm = this._view;
          return {
            x: vm.x,
            y: vm.y,
            padding: vm.radius + vm.borderWidth
          };
        },
        draw: function draw(chartArea) {
          var vm = this._view;
          var ctx = this._chart.ctx;
          var pointStyle = vm.pointStyle;
          var rotation = vm.rotation;
          var radius = vm.radius;
          var x = vm.x;
          var y = vm.y;
          var globalDefaults = core_defaults.global;
          var defaultColor = globalDefaults.defaultColor; // eslint-disable-line no-shadow

          if (vm.skip) {
            return;
          } // Clipping for Points.


          if (chartArea === undefined || helpers$1.canvas._isPointInArea(vm, chartArea)) {
            ctx.strokeStyle = vm.borderColor || defaultColor;
            ctx.lineWidth = valueOrDefault$2(vm.borderWidth, globalDefaults.elements.point.borderWidth);
            ctx.fillStyle = vm.backgroundColor || defaultColor;
            helpers$1.canvas.drawPoint(ctx, pointStyle, radius, x, y, rotation);
          }
        }
      });
      var defaultColor$2 = core_defaults.global.defaultColor;

      core_defaults._set('global', {
        elements: {
          rectangle: {
            backgroundColor: defaultColor$2,
            borderColor: defaultColor$2,
            borderSkipped: 'bottom',
            borderWidth: 0
          }
        }
      });

      function isVertical(vm) {
        return vm && vm.width !== undefined;
      }
      /**
       * Helper function to get the bounds of the bar regardless of the orientation
       * @param bar {Chart.Element.Rectangle} the bar
       * @return {Bounds} bounds of the bar
       * @private
       */


      function getBarBounds(vm) {
        var x1, x2, y1, y2, half;

        if (isVertical(vm)) {
          half = vm.width / 2;
          x1 = vm.x - half;
          x2 = vm.x + half;
          y1 = Math.min(vm.y, vm.base);
          y2 = Math.max(vm.y, vm.base);
        } else {
          half = vm.height / 2;
          x1 = Math.min(vm.x, vm.base);
          x2 = Math.max(vm.x, vm.base);
          y1 = vm.y - half;
          y2 = vm.y + half;
        }

        return {
          left: x1,
          top: y1,
          right: x2,
          bottom: y2
        };
      }

      function swap(orig, v1, v2) {
        return orig === v1 ? v2 : orig === v2 ? v1 : orig;
      }

      function parseBorderSkipped(vm) {
        var edge = vm.borderSkipped;
        var res = {};

        if (!edge) {
          return res;
        }

        if (vm.horizontal) {
          if (vm.base > vm.x) {
            edge = swap(edge, 'left', 'right');
          }
        } else if (vm.base < vm.y) {
          edge = swap(edge, 'bottom', 'top');
        }

        res[edge] = true;
        return res;
      }

      function parseBorderWidth(vm, maxW, maxH) {
        var value = vm.borderWidth;
        var skip = parseBorderSkipped(vm);
        var t, r, b, l;

        if (helpers$1.isObject(value)) {
          t = +value.top || 0;
          r = +value.right || 0;
          b = +value.bottom || 0;
          l = +value.left || 0;
        } else {
          t = r = b = l = +value || 0;
        }

        return {
          t: skip.top || t < 0 ? 0 : t > maxH ? maxH : t,
          r: skip.right || r < 0 ? 0 : r > maxW ? maxW : r,
          b: skip.bottom || b < 0 ? 0 : b > maxH ? maxH : b,
          l: skip.left || l < 0 ? 0 : l > maxW ? maxW : l
        };
      }

      function boundingRects(vm) {
        var bounds = getBarBounds(vm);
        var width = bounds.right - bounds.left;
        var height = bounds.bottom - bounds.top;
        var border = parseBorderWidth(vm, width / 2, height / 2);
        return {
          outer: {
            x: bounds.left,
            y: bounds.top,
            w: width,
            h: height
          },
          inner: {
            x: bounds.left + border.l,
            y: bounds.top + border.t,
            w: width - border.l - border.r,
            h: height - border.t - border.b
          }
        };
      }

      function _inRange(vm, x, y) {
        var skipX = x === null;
        var skipY = y === null;
        var bounds = !vm || skipX && skipY ? false : getBarBounds(vm);
        return bounds && (skipX || x >= bounds.left && x <= bounds.right) && (skipY || y >= bounds.top && y <= bounds.bottom);
      }

      var element_rectangle = core_element.extend({
        _type: 'rectangle',
        draw: function draw() {
          var ctx = this._chart.ctx;
          var vm = this._view;
          var rects = boundingRects(vm);
          var outer = rects.outer;
          var inner = rects.inner;
          ctx.fillStyle = vm.backgroundColor;
          ctx.fillRect(outer.x, outer.y, outer.w, outer.h);

          if (outer.w === inner.w && outer.h === inner.h) {
            return;
          }

          ctx.save();
          ctx.beginPath();
          ctx.rect(outer.x, outer.y, outer.w, outer.h);
          ctx.clip();
          ctx.fillStyle = vm.borderColor;
          ctx.rect(inner.x, inner.y, inner.w, inner.h);
          ctx.fill('evenodd');
          ctx.restore();
        },
        height: function height() {
          var vm = this._view;
          return vm.base - vm.y;
        },
        inRange: function inRange(mouseX, mouseY) {
          return _inRange(this._view, mouseX, mouseY);
        },
        inLabelRange: function inLabelRange(mouseX, mouseY) {
          var vm = this._view;
          return isVertical(vm) ? _inRange(vm, mouseX, null) : _inRange(vm, null, mouseY);
        },
        inXRange: function inXRange(mouseX) {
          return _inRange(this._view, mouseX, null);
        },
        inYRange: function inYRange(mouseY) {
          return _inRange(this._view, null, mouseY);
        },
        getCenterPoint: function getCenterPoint() {
          var vm = this._view;
          var x, y;

          if (isVertical(vm)) {
            x = vm.x;
            y = (vm.y + vm.base) / 2;
          } else {
            x = (vm.x + vm.base) / 2;
            y = vm.y;
          }

          return {
            x: x,
            y: y
          };
        },
        getArea: function getArea() {
          var vm = this._view;
          return isVertical(vm) ? vm.width * Math.abs(vm.y - vm.base) : vm.height * Math.abs(vm.x - vm.base);
        },
        tooltipPosition: function tooltipPosition() {
          var vm = this._view;
          return {
            x: vm.x,
            y: vm.y
          };
        }
      });
      var elements = {};
      var Arc = element_arc;
      var Line = element_line;
      var Point = element_point;
      var Rectangle = element_rectangle;
      elements.Arc = Arc;
      elements.Line = Line;
      elements.Point = Point;
      elements.Rectangle = Rectangle;
      var deprecated = helpers$1._deprecated;
      var valueOrDefault$3 = helpers$1.valueOrDefault;

      core_defaults._set('bar', {
        hover: {
          mode: 'label'
        },
        scales: {
          xAxes: [{
            type: 'category',
            offset: true,
            gridLines: {
              offsetGridLines: true
            }
          }],
          yAxes: [{
            type: 'linear'
          }]
        }
      });

      core_defaults._set('global', {
        datasets: {
          bar: {
            categoryPercentage: 0.8,
            barPercentage: 0.9
          }
        }
      });
      /**
       * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
       * @private
       */


      function computeMinSampleSize(scale, pixels) {
        var min = scale._length;
        var prev, curr, i, ilen;

        for (i = 1, ilen = pixels.length; i < ilen; ++i) {
          min = Math.min(min, Math.abs(pixels[i] - pixels[i - 1]));
        }

        for (i = 0, ilen = scale.getTicks().length; i < ilen; ++i) {
          curr = scale.getPixelForTick(i);
          min = i > 0 ? Math.min(min, Math.abs(curr - prev)) : min;
          prev = curr;
        }

        return min;
      }
      /**
       * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
       * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This
       * mode currently always generates bars equally sized (until we introduce scriptable options?).
       * @private
       */


      function computeFitCategoryTraits(index, ruler, options) {
        var thickness = options.barThickness;
        var count = ruler.stackCount;
        var curr = ruler.pixels[index];
        var min = helpers$1.isNullOrUndef(thickness) ? computeMinSampleSize(ruler.scale, ruler.pixels) : -1;
        var size, ratio;

        if (helpers$1.isNullOrUndef(thickness)) {
          size = min * options.categoryPercentage;
          ratio = options.barPercentage;
        } else {
          // When bar thickness is enforced, category and bar percentages are ignored.
          // Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
          // and deprecate barPercentage since this value is ignored when thickness is absolute.
          size = thickness * count;
          ratio = 1;
        }

        return {
          chunk: size / count,
          ratio: ratio,
          start: curr - size / 2
        };
      }
      /**
       * Computes an "optimal" category that globally arranges bars side by side (no gap when
       * percentage options are 1), based on the previous and following categories. This mode
       * generates bars with different widths when data are not evenly spaced.
       * @private
       */


      function computeFlexCategoryTraits(index, ruler, options) {
        var pixels = ruler.pixels;
        var curr = pixels[index];
        var prev = index > 0 ? pixels[index - 1] : null;
        var next = index < pixels.length - 1 ? pixels[index + 1] : null;
        var percent = options.categoryPercentage;
        var start, size;

        if (prev === null) {
          // first data: its size is double based on the next point or,
          // if it's also the last data, we use the scale size.
          prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
        }

        if (next === null) {
          // last data: its size is also double based on the previous point.
          next = curr + curr - prev;
        }

        start = curr - (curr - Math.min(prev, next)) / 2 * percent;
        size = Math.abs(next - prev) / 2 * percent;
        return {
          chunk: size / ruler.stackCount,
          ratio: options.barPercentage,
          start: start
        };
      }

      var controller_bar = core_datasetController.extend({
        dataElementType: elements.Rectangle,

        /**
         * @private
         */
        _dataElementOptions: ['backgroundColor', 'borderColor', 'borderSkipped', 'borderWidth', 'barPercentage', 'barThickness', 'categoryPercentage', 'maxBarThickness', 'minBarLength'],
        initialize: function initialize() {
          var me = this;
          var meta, scaleOpts;
          core_datasetController.prototype.initialize.apply(me, arguments);
          meta = me.getMeta();
          meta.stack = me.getDataset().stack;
          meta.bar = true;
          scaleOpts = me._getIndexScale().options;
          deprecated('bar chart', scaleOpts.barPercentage, 'scales.[x/y]Axes.barPercentage', 'dataset.barPercentage');
          deprecated('bar chart', scaleOpts.barThickness, 'scales.[x/y]Axes.barThickness', 'dataset.barThickness');
          deprecated('bar chart', scaleOpts.categoryPercentage, 'scales.[x/y]Axes.categoryPercentage', 'dataset.categoryPercentage');
          deprecated('bar chart', me._getValueScale().options.minBarLength, 'scales.[x/y]Axes.minBarLength', 'dataset.minBarLength');
          deprecated('bar chart', scaleOpts.maxBarThickness, 'scales.[x/y]Axes.maxBarThickness', 'dataset.maxBarThickness');
        },
        update: function update(reset) {
          var me = this;
          var rects = me.getMeta().data;
          var i, ilen;
          me._ruler = me.getRuler();

          for (i = 0, ilen = rects.length; i < ilen; ++i) {
            me.updateElement(rects[i], i, reset);
          }
        },
        updateElement: function updateElement(rectangle, index, reset) {
          var me = this;
          var meta = me.getMeta();
          var dataset = me.getDataset();

          var options = me._resolveDataElementOptions(rectangle, index);

          rectangle._xScale = me.getScaleForId(meta.xAxisID);
          rectangle._yScale = me.getScaleForId(meta.yAxisID);
          rectangle._datasetIndex = me.index;
          rectangle._index = index;
          rectangle._model = {
            backgroundColor: options.backgroundColor,
            borderColor: options.borderColor,
            borderSkipped: options.borderSkipped,
            borderWidth: options.borderWidth,
            datasetLabel: dataset.label,
            label: me.chart.data.labels[index]
          };

          if (helpers$1.isArray(dataset.data[index])) {
            rectangle._model.borderSkipped = null;
          }

          me._updateElementGeometry(rectangle, index, reset, options);

          rectangle.pivot();
        },

        /**
         * @private
         */
        _updateElementGeometry: function _updateElementGeometry(rectangle, index, reset, options) {
          var me = this;
          var model = rectangle._model;

          var vscale = me._getValueScale();

          var base = vscale.getBasePixel();
          var horizontal = vscale.isHorizontal();
          var ruler = me._ruler || me.getRuler();
          var vpixels = me.calculateBarValuePixels(me.index, index, options);
          var ipixels = me.calculateBarIndexPixels(me.index, index, ruler, options);
          model.horizontal = horizontal;
          model.base = reset ? base : vpixels.base;
          model.x = horizontal ? reset ? base : vpixels.head : ipixels.center;
          model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
          model.height = horizontal ? ipixels.size : undefined;
          model.width = horizontal ? undefined : ipixels.size;
        },

        /**
         * Returns the stacks based on groups and bar visibility.
         * @param {number} [last] - The dataset index
         * @returns {string[]} The list of stack IDs
         * @private
         */
        _getStacks: function _getStacks(last) {
          var me = this;

          var scale = me._getIndexScale();

          var metasets = scale._getMatchingVisibleMetas(me._type);

          var stacked = scale.options.stacked;
          var ilen = metasets.length;
          var stacks = [];
          var i, meta;

          for (i = 0; i < ilen; ++i) {
            meta = metasets[i]; // stacked   | meta.stack
            //           | found | not found | undefined
            // false     |   x   |     x     |     x
            // true      |       |     x     |
            // undefined |       |     x     |     x

            if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) {
              stacks.push(meta.stack);
            }

            if (meta.index === last) {
              break;
            }
          }

          return stacks;
        },

        /**
         * Returns the effective number of stacks based on groups and bar visibility.
         * @private
         */
        getStackCount: function getStackCount() {
          return this._getStacks().length;
        },

        /**
         * Returns the stack index for the given dataset based on groups and bar visibility.
         * @param {number} [datasetIndex] - The dataset index
         * @param {string} [name] - The stack name to find
         * @returns {number} The stack index
         * @private
         */
        getStackIndex: function getStackIndex(datasetIndex, name) {
          var stacks = this._getStacks(datasetIndex);

          var index = name !== undefined ? stacks.indexOf(name) : -1; // indexOf returns -1 if element is not present

          return index === -1 ? stacks.length - 1 : index;
        },

        /**
         * @private
         */
        getRuler: function getRuler() {
          var me = this;

          var scale = me._getIndexScale();

          var pixels = [];
          var i, ilen;

          for (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i) {
            pixels.push(scale.getPixelForValue(null, i, me.index));
          }

          return {
            pixels: pixels,
            start: scale._startPixel,
            end: scale._endPixel,
            stackCount: me.getStackCount(),
            scale: scale
          };
        },

        /**
         * Note: pixel values are not clamped to the scale area.
         * @private
         */
        calculateBarValuePixels: function calculateBarValuePixels(datasetIndex, index, options) {
          var me = this;
          var chart = me.chart;

          var scale = me._getValueScale();

          var isHorizontal = scale.isHorizontal();
          var datasets = chart.data.datasets;

          var metasets = scale._getMatchingVisibleMetas(me._type);

          var value = scale._parseValue(datasets[datasetIndex].data[index]);

          var minBarLength = options.minBarLength;
          var stacked = scale.options.stacked;
          var stack = me.getMeta().stack;
          var start = value.start === undefined ? 0 : value.max >= 0 && value.min >= 0 ? value.min : value.max;
          var length = value.start === undefined ? value.end : value.max >= 0 && value.min >= 0 ? value.max - value.min : value.min - value.max;
          var ilen = metasets.length;
          var i, imeta, ivalue, base, head, size, stackLength;

          if (stacked || stacked === undefined && stack !== undefined) {
            for (i = 0; i < ilen; ++i) {
              imeta = metasets[i];

              if (imeta.index === datasetIndex) {
                break;
              }

              if (imeta.stack === stack) {
                stackLength = scale._parseValue(datasets[imeta.index].data[index]);
                ivalue = stackLength.start === undefined ? stackLength.end : stackLength.min >= 0 && stackLength.max >= 0 ? stackLength.max : stackLength.min;

                if (value.min < 0 && ivalue < 0 || value.max >= 0 && ivalue > 0) {
                  start += ivalue;
                }
              }
            }
          }

          base = scale.getPixelForValue(start);
          head = scale.getPixelForValue(start + length);
          size = head - base;

          if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
            size = minBarLength;

            if (length >= 0 && !isHorizontal || length < 0 && isHorizontal) {
              head = base - minBarLength;
            } else {
              head = base + minBarLength;
            }
          }

          return {
            size: size,
            base: base,
            head: head,
            center: head + size / 2
          };
        },

        /**
         * @private
         */
        calculateBarIndexPixels: function calculateBarIndexPixels(datasetIndex, index, ruler, options) {
          var me = this;
          var range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options) : computeFitCategoryTraits(index, ruler, options);
          var stackIndex = me.getStackIndex(datasetIndex, me.getMeta().stack);
          var center = range.start + range.chunk * stackIndex + range.chunk / 2;
          var size = Math.min(valueOrDefault$3(options.maxBarThickness, Infinity), range.chunk * range.ratio);
          return {
            base: center - size / 2,
            head: center + size / 2,
            center: center,
            size: size
          };
        },
        draw: function draw() {
          var me = this;
          var chart = me.chart;

          var scale = me._getValueScale();

          var rects = me.getMeta().data;
          var dataset = me.getDataset();
          var ilen = rects.length;
          var i = 0;
          helpers$1.canvas.clipArea(chart.ctx, chart.chartArea);

          for (; i < ilen; ++i) {
            var val = scale._parseValue(dataset.data[i]);

            if (!isNaN(val.min) && !isNaN(val.max)) {
              rects[i].draw();
            }
          }

          helpers$1.canvas.unclipArea(chart.ctx);
        },

        /**
         * @private
         */
        _resolveDataElementOptions: function _resolveDataElementOptions() {
          var me = this;
          var values = helpers$1.extend({}, core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments));

          var indexOpts = me._getIndexScale().options;

          var valueOpts = me._getValueScale().options;

          values.barPercentage = valueOrDefault$3(indexOpts.barPercentage, values.barPercentage);
          values.barThickness = valueOrDefault$3(indexOpts.barThickness, values.barThickness);
          values.categoryPercentage = valueOrDefault$3(indexOpts.categoryPercentage, values.categoryPercentage);
          values.maxBarThickness = valueOrDefault$3(indexOpts.maxBarThickness, values.maxBarThickness);
          values.minBarLength = valueOrDefault$3(valueOpts.minBarLength, values.minBarLength);
          return values;
        }
      });
      var valueOrDefault$4 = helpers$1.valueOrDefault;
      var resolve$1 = helpers$1.options.resolve;

      core_defaults._set('bubble', {
        hover: {
          mode: 'single'
        },
        scales: {
          xAxes: [{
            type: 'linear',
            // bubble should probably use a linear scale by default
            position: 'bottom',
            id: 'x-axis-0' // need an ID so datasets can reference the scale

          }],
          yAxes: [{
            type: 'linear',
            position: 'left',
            id: 'y-axis-0'
          }]
        },
        tooltips: {
          callbacks: {
            title: function title() {
              // Title doesn't make sense for scatter since we format the data as a point
              return '';
            },
            label: function label(item, data) {
              var datasetLabel = data.datasets[item.datasetIndex].label || '';
              var dataPoint = data.datasets[item.datasetIndex].data[item.index];
              return datasetLabel + ': (' + item.xLabel + ', ' + item.yLabel + ', ' + dataPoint.r + ')';
            }
          }
        }
      });

      var controller_bubble = core_datasetController.extend({
        /**
         * @protected
         */
        dataElementType: elements.Point,

        /**
         * @private
         */
        _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth', 'hoverRadius', 'hitRadius', 'pointStyle', 'rotation'],

        /**
         * @protected
         */
        update: function update(reset) {
          var me = this;
          var meta = me.getMeta();
          var points = meta.data; // Update Points

          helpers$1.each(points, function (point, index) {
            me.updateElement(point, index, reset);
          });
        },

        /**
         * @protected
         */
        updateElement: function updateElement(point, index, reset) {
          var me = this;
          var meta = me.getMeta();
          var custom = point.custom || {};
          var xScale = me.getScaleForId(meta.xAxisID);
          var yScale = me.getScaleForId(meta.yAxisID);

          var options = me._resolveDataElementOptions(point, index);

          var data = me.getDataset().data[index];
          var dsIndex = me.index;
          var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex);
          var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex);
          point._xScale = xScale;
          point._yScale = yScale;
          point._options = options;
          point._datasetIndex = dsIndex;
          point._index = index;
          point._model = {
            backgroundColor: options.backgroundColor,
            borderColor: options.borderColor,
            borderWidth: options.borderWidth,
            hitRadius: options.hitRadius,
            pointStyle: options.pointStyle,
            rotation: options.rotation,
            radius: reset ? 0 : options.radius,
            skip: custom.skip || isNaN(x) || isNaN(y),
            x: x,
            y: y
          };
          point.pivot();
        },

        /**
         * @protected
         */
        setHoverStyle: function setHoverStyle(point) {
          var model = point._model;
          var options = point._options;
          var getHoverColor = helpers$1.getHoverColor;
          point.$previousStyle = {
            backgroundColor: model.backgroundColor,
            borderColor: model.borderColor,
            borderWidth: model.borderWidth,
            radius: model.radius
          };
          model.backgroundColor = valueOrDefault$4(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
          model.borderColor = valueOrDefault$4(options.hoverBorderColor, getHoverColor(options.borderColor));
          model.borderWidth = valueOrDefault$4(options.hoverBorderWidth, options.borderWidth);
          model.radius = options.radius + options.hoverRadius;
        },

        /**
         * @private
         */
        _resolveDataElementOptions: function _resolveDataElementOptions(point, index) {
          var me = this;
          var chart = me.chart;
          var dataset = me.getDataset();
          var custom = point.custom || {};
          var data = dataset.data[index] || {};

          var values = core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments); // Scriptable options


          var context = {
            chart: chart,
            dataIndex: index,
            dataset: dataset,
            datasetIndex: me.index
          }; // In case values were cached (and thus frozen), we need to clone the values

          if (me._cachedDataOpts === values) {
            values = helpers$1.extend({}, values);
          } // Custom radius resolution


          values.radius = resolve$1([custom.radius, data.r, me._config.radius, chart.options.elements.point.radius], context, index);
          return values;
        }
      });
      var valueOrDefault$5 = helpers$1.valueOrDefault;
      var PI$1 = Math.PI;
      var DOUBLE_PI$1 = PI$1 * 2;
      var HALF_PI$1 = PI$1 / 2;

      core_defaults._set('doughnut', {
        animation: {
          // Boolean - Whether we animate the rotation of the Doughnut
          animateRotate: true,
          // Boolean - Whether we animate scaling the Doughnut from the centre
          animateScale: false
        },
        hover: {
          mode: 'single'
        },
        legendCallback: function legendCallback(chart) {
          var list = document.createElement('ul');
          var data = chart.data;
          var datasets = data.datasets;
          var labels = data.labels;
          var i, ilen, listItem, listItemSpan;
          list.setAttribute('class', chart.id + '-legend');

          if (datasets.length) {
            for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
              listItem = list.appendChild(document.createElement('li'));
              listItemSpan = listItem.appendChild(document.createElement('span'));
              listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];

              if (labels[i]) {
                listItem.appendChild(document.createTextNode(labels[i]));
              }
            }
          }

          return list.outerHTML;
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(chart) {
              var data = chart.data;

              if (data.labels.length && data.datasets.length) {
                return data.labels.map(function (label, i) {
                  var meta = chart.getDatasetMeta(0);
                  var style = meta.controller.getStyle(i);
                  return {
                    text: label,
                    fillStyle: style.backgroundColor,
                    strokeStyle: style.borderColor,
                    lineWidth: style.borderWidth,
                    hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                    // Extra data used for toggling the correct item
                    index: i
                  };
                });
              }

              return [];
            }
          },
          onClick: function onClick(e, legendItem) {
            var index = legendItem.index;
            var chart = this.chart;
            var i, ilen, meta;

            for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
              meta = chart.getDatasetMeta(i); // toggle visibility of index if exists

              if (meta.data[index]) {
                meta.data[index].hidden = !meta.data[index].hidden;
              }
            }

            chart.update();
          }
        },
        // The percentage of the chart that we cut out of the middle.
        cutoutPercentage: 50,
        // The rotation of the chart, where the first data arc begins.
        rotation: -HALF_PI$1,
        // The total circumference of the chart.
        circumference: DOUBLE_PI$1,
        // Need to override these to give a nice default
        tooltips: {
          callbacks: {
            title: function title() {
              return '';
            },
            label: function label(tooltipItem, data) {
              var dataLabel = data.labels[tooltipItem.index];
              var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

              if (helpers$1.isArray(dataLabel)) {
                // show value on first line of multiline label
                // need to clone because we are changing the value
                dataLabel = dataLabel.slice();
                dataLabel[0] += value;
              } else {
                dataLabel += value;
              }

              return dataLabel;
            }
          }
        }
      });

      var controller_doughnut = core_datasetController.extend({
        dataElementType: elements.Arc,
        linkScales: helpers$1.noop,

        /**
         * @private
         */
        _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'borderAlign', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth'],
        // Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
        getRingIndex: function getRingIndex(datasetIndex) {
          var ringIndex = 0;

          for (var j = 0; j < datasetIndex; ++j) {
            if (this.chart.isDatasetVisible(j)) {
              ++ringIndex;
            }
          }

          return ringIndex;
        },
        update: function update(reset) {
          var me = this;
          var chart = me.chart;
          var chartArea = chart.chartArea;
          var opts = chart.options;
          var ratioX = 1;
          var ratioY = 1;
          var offsetX = 0;
          var offsetY = 0;
          var meta = me.getMeta();
          var arcs = meta.data;
          var cutout = opts.cutoutPercentage / 100 || 0;
          var circumference = opts.circumference;

          var chartWeight = me._getRingWeight(me.index);

          var maxWidth, maxHeight, i, ilen; // If the chart's circumference isn't a full circle, calculate size as a ratio of the width/height of the arc

          if (circumference < DOUBLE_PI$1) {
            var startAngle = opts.rotation % DOUBLE_PI$1;
            startAngle += startAngle >= PI$1 ? -DOUBLE_PI$1 : startAngle < -PI$1 ? DOUBLE_PI$1 : 0;
            var endAngle = startAngle + circumference;
            var startX = Math.cos(startAngle);
            var startY = Math.sin(startAngle);
            var endX = Math.cos(endAngle);
            var endY = Math.sin(endAngle);
            var contains0 = startAngle <= 0 && endAngle >= 0 || endAngle >= DOUBLE_PI$1;
            var contains90 = startAngle <= HALF_PI$1 && endAngle >= HALF_PI$1 || endAngle >= DOUBLE_PI$1 + HALF_PI$1;
            var contains180 = startAngle === -PI$1 || endAngle >= PI$1;
            var contains270 = startAngle <= -HALF_PI$1 && endAngle >= -HALF_PI$1 || endAngle >= PI$1 + HALF_PI$1;
            var minX = contains180 ? -1 : Math.min(startX, startX * cutout, endX, endX * cutout);
            var minY = contains270 ? -1 : Math.min(startY, startY * cutout, endY, endY * cutout);
            var maxX = contains0 ? 1 : Math.max(startX, startX * cutout, endX, endX * cutout);
            var maxY = contains90 ? 1 : Math.max(startY, startY * cutout, endY, endY * cutout);
            ratioX = (maxX - minX) / 2;
            ratioY = (maxY - minY) / 2;
            offsetX = -(maxX + minX) / 2;
            offsetY = -(maxY + minY) / 2;
          }

          for (i = 0, ilen = arcs.length; i < ilen; ++i) {
            arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
          }

          chart.borderWidth = me.getMaxBorderWidth();
          maxWidth = (chartArea.right - chartArea.left - chart.borderWidth) / ratioX;
          maxHeight = (chartArea.bottom - chartArea.top - chart.borderWidth) / ratioY;
          chart.outerRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
          chart.innerRadius = Math.max(chart.outerRadius * cutout, 0);
          chart.radiusLength = (chart.outerRadius - chart.innerRadius) / (me._getVisibleDatasetWeightTotal() || 1);
          chart.offsetX = offsetX * chart.outerRadius;
          chart.offsetY = offsetY * chart.outerRadius;
          meta.total = me.calculateTotal();
          me.outerRadius = chart.outerRadius - chart.radiusLength * me._getRingWeightOffset(me.index);
          me.innerRadius = Math.max(me.outerRadius - chart.radiusLength * chartWeight, 0);

          for (i = 0, ilen = arcs.length; i < ilen; ++i) {
            me.updateElement(arcs[i], i, reset);
          }
        },
        updateElement: function updateElement(arc, index, reset) {
          var me = this;
          var chart = me.chart;
          var chartArea = chart.chartArea;
          var opts = chart.options;
          var animationOpts = opts.animation;
          var centerX = (chartArea.left + chartArea.right) / 2;
          var centerY = (chartArea.top + chartArea.bottom) / 2;
          var startAngle = opts.rotation; // non reset case handled later

          var endAngle = opts.rotation; // non reset case handled later

          var dataset = me.getDataset();
          var circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / DOUBLE_PI$1);
          var innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius;
          var outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius;
          var options = arc._options || {};
          helpers$1.extend(arc, {
            // Utility
            _datasetIndex: me.index,
            _index: index,
            // Desired view properties
            _model: {
              backgroundColor: options.backgroundColor,
              borderColor: options.borderColor,
              borderWidth: options.borderWidth,
              borderAlign: options.borderAlign,
              x: centerX + chart.offsetX,
              y: centerY + chart.offsetY,
              startAngle: startAngle,
              endAngle: endAngle,
              circumference: circumference,
              outerRadius: outerRadius,
              innerRadius: innerRadius,
              label: helpers$1.valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
            }
          });
          var model = arc._model; // Set correct angles if not resetting

          if (!reset || !animationOpts.animateRotate) {
            if (index === 0) {
              model.startAngle = opts.rotation;
            } else {
              model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
            }

            model.endAngle = model.startAngle + model.circumference;
          }

          arc.pivot();
        },
        calculateTotal: function calculateTotal() {
          var dataset = this.getDataset();
          var meta = this.getMeta();
          var total = 0;
          var value;
          helpers$1.each(meta.data, function (element, index) {
            value = dataset.data[index];

            if (!isNaN(value) && !element.hidden) {
              total += Math.abs(value);
            }
          });
          /* if (total === 0) {
          	total = NaN;
          }*/

          return total;
        },
        calculateCircumference: function calculateCircumference(value) {
          var total = this.getMeta().total;

          if (total > 0 && !isNaN(value)) {
            return DOUBLE_PI$1 * (Math.abs(value) / total);
          }

          return 0;
        },
        // gets the max border or hover width to properly scale pie charts
        getMaxBorderWidth: function getMaxBorderWidth(arcs) {
          var me = this;
          var max = 0;
          var chart = me.chart;
          var i, ilen, meta, arc, controller, options, borderWidth, hoverWidth;

          if (!arcs) {
            // Find the outmost visible dataset
            for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
              if (chart.isDatasetVisible(i)) {
                meta = chart.getDatasetMeta(i);
                arcs = meta.data;

                if (i !== me.index) {
                  controller = meta.controller;
                }

                break;
              }
            }
          }

          if (!arcs) {
            return 0;
          }

          for (i = 0, ilen = arcs.length; i < ilen; ++i) {
            arc = arcs[i];

            if (controller) {
              controller._configure();

              options = controller._resolveDataElementOptions(arc, i);
            } else {
              options = arc._options;
            }

            if (options.borderAlign !== 'inner') {
              borderWidth = options.borderWidth;
              hoverWidth = options.hoverBorderWidth;
              max = borderWidth > max ? borderWidth : max;
              max = hoverWidth > max ? hoverWidth : max;
            }
          }

          return max;
        },

        /**
         * @protected
         */
        setHoverStyle: function setHoverStyle(arc) {
          var model = arc._model;
          var options = arc._options;
          var getHoverColor = helpers$1.getHoverColor;
          arc.$previousStyle = {
            backgroundColor: model.backgroundColor,
            borderColor: model.borderColor,
            borderWidth: model.borderWidth
          };
          model.backgroundColor = valueOrDefault$5(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
          model.borderColor = valueOrDefault$5(options.hoverBorderColor, getHoverColor(options.borderColor));
          model.borderWidth = valueOrDefault$5(options.hoverBorderWidth, options.borderWidth);
        },

        /**
         * Get radius length offset of the dataset in relation to the visible datasets weights. This allows determining the inner and outer radius correctly
         * @private
         */
        _getRingWeightOffset: function _getRingWeightOffset(datasetIndex) {
          var ringWeightOffset = 0;

          for (var i = 0; i < datasetIndex; ++i) {
            if (this.chart.isDatasetVisible(i)) {
              ringWeightOffset += this._getRingWeight(i);
            }
          }

          return ringWeightOffset;
        },

        /**
         * @private
         */
        _getRingWeight: function _getRingWeight(dataSetIndex) {
          return Math.max(valueOrDefault$5(this.chart.data.datasets[dataSetIndex].weight, 1), 0);
        },

        /**
         * Returns the sum of all visibile data set weights.  This value can be 0.
         * @private
         */
        _getVisibleDatasetWeightTotal: function _getVisibleDatasetWeightTotal() {
          return this._getRingWeightOffset(this.chart.data.datasets.length);
        }
      });

      core_defaults._set('horizontalBar', {
        hover: {
          mode: 'index',
          axis: 'y'
        },
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom'
          }],
          yAxes: [{
            type: 'category',
            position: 'left',
            offset: true,
            gridLines: {
              offsetGridLines: true
            }
          }]
        },
        elements: {
          rectangle: {
            borderSkipped: 'left'
          }
        },
        tooltips: {
          mode: 'index',
          axis: 'y'
        }
      });

      core_defaults._set('global', {
        datasets: {
          horizontalBar: {
            categoryPercentage: 0.8,
            barPercentage: 0.9
          }
        }
      });

      var controller_horizontalBar = controller_bar.extend({
        /**
         * @private
         */
        _getValueScaleId: function _getValueScaleId() {
          return this.getMeta().xAxisID;
        },

        /**
         * @private
         */
        _getIndexScaleId: function _getIndexScaleId() {
          return this.getMeta().yAxisID;
        }
      });
      var valueOrDefault$6 = helpers$1.valueOrDefault;
      var resolve$2 = helpers$1.options.resolve;
      var isPointInArea = helpers$1.canvas._isPointInArea;

      core_defaults._set('line', {
        showLines: true,
        spanGaps: false,
        hover: {
          mode: 'label'
        },
        scales: {
          xAxes: [{
            type: 'category',
            id: 'x-axis-0'
          }],
          yAxes: [{
            type: 'linear',
            id: 'y-axis-0'
          }]
        }
      });

      function scaleClip(scale, halfBorderWidth) {
        var tickOpts = scale && scale.options.ticks || {};
        var reverse = tickOpts.reverse;
        var min = tickOpts.min === undefined ? halfBorderWidth : 0;
        var max = tickOpts.max === undefined ? halfBorderWidth : 0;
        return {
          start: reverse ? max : min,
          end: reverse ? min : max
        };
      }

      function defaultClip(xScale, yScale, borderWidth) {
        var halfBorderWidth = borderWidth / 2;
        var x = scaleClip(xScale, halfBorderWidth);
        var y = scaleClip(yScale, halfBorderWidth);
        return {
          top: y.end,
          right: x.end,
          bottom: y.start,
          left: x.start
        };
      }

      function toClip(value) {
        var t, r, b, l;

        if (helpers$1.isObject(value)) {
          t = value.top;
          r = value.right;
          b = value.bottom;
          l = value.left;
        } else {
          t = r = b = l = value;
        }

        return {
          top: t,
          right: r,
          bottom: b,
          left: l
        };
      }

      var controller_line = core_datasetController.extend({
        datasetElementType: elements.Line,
        dataElementType: elements.Point,

        /**
         * @private
         */
        _datasetElementOptions: ['backgroundColor', 'borderCapStyle', 'borderColor', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'borderWidth', 'cubicInterpolationMode', 'fill'],

        /**
         * @private
         */
        _dataElementOptions: {
          backgroundColor: 'pointBackgroundColor',
          borderColor: 'pointBorderColor',
          borderWidth: 'pointBorderWidth',
          hitRadius: 'pointHitRadius',
          hoverBackgroundColor: 'pointHoverBackgroundColor',
          hoverBorderColor: 'pointHoverBorderColor',
          hoverBorderWidth: 'pointHoverBorderWidth',
          hoverRadius: 'pointHoverRadius',
          pointStyle: 'pointStyle',
          radius: 'pointRadius',
          rotation: 'pointRotation'
        },
        update: function update(reset) {
          var me = this;
          var meta = me.getMeta();
          var line = meta.dataset;
          var points = meta.data || [];
          var options = me.chart.options;
          var config = me._config;
          var showLine = me._showLine = valueOrDefault$6(config.showLine, options.showLines);
          var i, ilen;
          me._xScale = me.getScaleForId(meta.xAxisID);
          me._yScale = me.getScaleForId(meta.yAxisID); // Update Line

          if (showLine) {
            // Compatibility: If the properties are defined with only the old name, use those values
            if (config.tension !== undefined && config.lineTension === undefined) {
              config.lineTension = config.tension;
            } // Utility


            line._scale = me._yScale;
            line._datasetIndex = me.index; // Data

            line._children = points; // Model

            line._model = me._resolveDatasetElementOptions(line);
            line.pivot();
          } // Update Points


          for (i = 0, ilen = points.length; i < ilen; ++i) {
            me.updateElement(points[i], i, reset);
          }

          if (showLine && line._model.tension !== 0) {
            me.updateBezierControlPoints();
          } // Now pivot the point for animation


          for (i = 0, ilen = points.length; i < ilen; ++i) {
            points[i].pivot();
          }
        },
        updateElement: function updateElement(point, index, reset) {
          var me = this;
          var meta = me.getMeta();
          var custom = point.custom || {};
          var dataset = me.getDataset();
          var datasetIndex = me.index;
          var value = dataset.data[index];
          var xScale = me._xScale;
          var yScale = me._yScale;
          var lineModel = meta.dataset._model;
          var x, y;

          var options = me._resolveDataElementOptions(point, index);

          x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex);
          y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex); // Utility

          point._xScale = xScale;
          point._yScale = yScale;
          point._options = options;
          point._datasetIndex = datasetIndex;
          point._index = index; // Desired view properties

          point._model = {
            x: x,
            y: y,
            skip: custom.skip || isNaN(x) || isNaN(y),
            // Appearance
            radius: options.radius,
            pointStyle: options.pointStyle,
            rotation: options.rotation,
            backgroundColor: options.backgroundColor,
            borderColor: options.borderColor,
            borderWidth: options.borderWidth,
            tension: valueOrDefault$6(custom.tension, lineModel ? lineModel.tension : 0),
            steppedLine: lineModel ? lineModel.steppedLine : false,
            // Tooltip
            hitRadius: options.hitRadius
          };
        },

        /**
         * @private
         */
        _resolveDatasetElementOptions: function _resolveDatasetElementOptions(element) {
          var me = this;
          var config = me._config;
          var custom = element.custom || {};
          var options = me.chart.options;
          var lineOptions = options.elements.line;

          var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments); // The default behavior of lines is to break at null values, according
          // to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
          // This option gives lines the ability to span gaps


          values.spanGaps = valueOrDefault$6(config.spanGaps, options.spanGaps);
          values.tension = valueOrDefault$6(config.lineTension, lineOptions.tension);
          values.steppedLine = resolve$2([custom.steppedLine, config.steppedLine, lineOptions.stepped]);
          values.clip = toClip(valueOrDefault$6(config.clip, defaultClip(me._xScale, me._yScale, values.borderWidth)));
          return values;
        },
        calculatePointY: function calculatePointY(value, index, datasetIndex) {
          var me = this;
          var chart = me.chart;
          var yScale = me._yScale;
          var sumPos = 0;
          var sumNeg = 0;
          var i, ds, dsMeta, stackedRightValue, rightValue, metasets, ilen;

          if (yScale.options.stacked) {
            rightValue = +yScale.getRightValue(value);
            metasets = chart._getSortedVisibleDatasetMetas();
            ilen = metasets.length;

            for (i = 0; i < ilen; ++i) {
              dsMeta = metasets[i];

              if (dsMeta.index === datasetIndex) {
                break;
              }

              ds = chart.data.datasets[dsMeta.index];

              if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id) {
                stackedRightValue = +yScale.getRightValue(ds.data[index]);

                if (stackedRightValue < 0) {
                  sumNeg += stackedRightValue || 0;
                } else {
                  sumPos += stackedRightValue || 0;
                }
              }
            }

            if (rightValue < 0) {
              return yScale.getPixelForValue(sumNeg + rightValue);
            }

            return yScale.getPixelForValue(sumPos + rightValue);
          }

          return yScale.getPixelForValue(value);
        },
        updateBezierControlPoints: function updateBezierControlPoints() {
          var me = this;
          var chart = me.chart;
          var meta = me.getMeta();
          var lineModel = meta.dataset._model;
          var area = chart.chartArea;
          var points = meta.data || [];
          var i, ilen, model, controlPoints; // Only consider points that are drawn in case the spanGaps option is used

          if (lineModel.spanGaps) {
            points = points.filter(function (pt) {
              return !pt._model.skip;
            });
          }

          function capControlPoint(pt, min, max) {
            return Math.max(Math.min(pt, max), min);
          }

          if (lineModel.cubicInterpolationMode === 'monotone') {
            helpers$1.splineCurveMonotone(points);
          } else {
            for (i = 0, ilen = points.length; i < ilen; ++i) {
              model = points[i]._model;
              controlPoints = helpers$1.splineCurve(helpers$1.previousItem(points, i)._model, model, helpers$1.nextItem(points, i)._model, lineModel.tension);
              model.controlPointPreviousX = controlPoints.previous.x;
              model.controlPointPreviousY = controlPoints.previous.y;
              model.controlPointNextX = controlPoints.next.x;
              model.controlPointNextY = controlPoints.next.y;
            }
          }

          if (chart.options.elements.line.capBezierPoints) {
            for (i = 0, ilen = points.length; i < ilen; ++i) {
              model = points[i]._model;

              if (isPointInArea(model, area)) {
                if (i > 0 && isPointInArea(points[i - 1]._model, area)) {
                  model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
                  model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
                }

                if (i < points.length - 1 && isPointInArea(points[i + 1]._model, area)) {
                  model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
                  model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
                }
              }
            }
          }
        },
        draw: function draw() {
          var me = this;
          var chart = me.chart;
          var meta = me.getMeta();
          var points = meta.data || [];
          var area = chart.chartArea;
          var canvas = chart.canvas;
          var i = 0;
          var ilen = points.length;
          var clip;

          if (me._showLine) {
            clip = meta.dataset._model.clip;
            helpers$1.canvas.clipArea(chart.ctx, {
              left: clip.left === false ? 0 : area.left - clip.left,
              right: clip.right === false ? canvas.width : area.right + clip.right,
              top: clip.top === false ? 0 : area.top - clip.top,
              bottom: clip.bottom === false ? canvas.height : area.bottom + clip.bottom
            });
            meta.dataset.draw();
            helpers$1.canvas.unclipArea(chart.ctx);
          } // Draw the points


          for (; i < ilen; ++i) {
            points[i].draw(area);
          }
        },

        /**
         * @protected
         */
        setHoverStyle: function setHoverStyle(point) {
          var model = point._model;
          var options = point._options;
          var getHoverColor = helpers$1.getHoverColor;
          point.$previousStyle = {
            backgroundColor: model.backgroundColor,
            borderColor: model.borderColor,
            borderWidth: model.borderWidth,
            radius: model.radius
          };
          model.backgroundColor = valueOrDefault$6(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
          model.borderColor = valueOrDefault$6(options.hoverBorderColor, getHoverColor(options.borderColor));
          model.borderWidth = valueOrDefault$6(options.hoverBorderWidth, options.borderWidth);
          model.radius = valueOrDefault$6(options.hoverRadius, options.radius);
        }
      });
      var resolve$3 = helpers$1.options.resolve;

      core_defaults._set('polarArea', {
        scale: {
          type: 'radialLinear',
          angleLines: {
            display: false
          },
          gridLines: {
            circular: true
          },
          pointLabels: {
            display: false
          },
          ticks: {
            beginAtZero: true
          }
        },
        // Boolean - Whether to animate the rotation of the chart
        animation: {
          animateRotate: true,
          animateScale: true
        },
        startAngle: -0.5 * Math.PI,
        legendCallback: function legendCallback(chart) {
          var list = document.createElement('ul');
          var data = chart.data;
          var datasets = data.datasets;
          var labels = data.labels;
          var i, ilen, listItem, listItemSpan;
          list.setAttribute('class', chart.id + '-legend');

          if (datasets.length) {
            for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
              listItem = list.appendChild(document.createElement('li'));
              listItemSpan = listItem.appendChild(document.createElement('span'));
              listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];

              if (labels[i]) {
                listItem.appendChild(document.createTextNode(labels[i]));
              }
            }
          }

          return list.outerHTML;
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(chart) {
              var data = chart.data;

              if (data.labels.length && data.datasets.length) {
                return data.labels.map(function (label, i) {
                  var meta = chart.getDatasetMeta(0);
                  var style = meta.controller.getStyle(i);
                  return {
                    text: label,
                    fillStyle: style.backgroundColor,
                    strokeStyle: style.borderColor,
                    lineWidth: style.borderWidth,
                    hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                    // Extra data used for toggling the correct item
                    index: i
                  };
                });
              }

              return [];
            }
          },
          onClick: function onClick(e, legendItem) {
            var index = legendItem.index;
            var chart = this.chart;
            var i, ilen, meta;

            for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
              meta = chart.getDatasetMeta(i);
              meta.data[index].hidden = !meta.data[index].hidden;
            }

            chart.update();
          }
        },
        // Need to override these to give a nice default
        tooltips: {
          callbacks: {
            title: function title() {
              return '';
            },
            label: function label(item, data) {
              return data.labels[item.index] + ': ' + item.yLabel;
            }
          }
        }
      });

      var controller_polarArea = core_datasetController.extend({
        dataElementType: elements.Arc,
        linkScales: helpers$1.noop,

        /**
         * @private
         */
        _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'borderAlign', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth'],

        /**
         * @private
         */
        _getIndexScaleId: function _getIndexScaleId() {
          return this.chart.scale.id;
        },

        /**
         * @private
         */
        _getValueScaleId: function _getValueScaleId() {
          return this.chart.scale.id;
        },
        update: function update(reset) {
          var me = this;
          var dataset = me.getDataset();
          var meta = me.getMeta();
          var start = me.chart.options.startAngle || 0;
          var starts = me._starts = [];
          var angles = me._angles = [];
          var arcs = meta.data;
          var i, ilen, angle;

          me._updateRadius();

          meta.count = me.countVisibleElements();

          for (i = 0, ilen = dataset.data.length; i < ilen; i++) {
            starts[i] = start;
            angle = me._computeAngle(i);
            angles[i] = angle;
            start += angle;
          }

          for (i = 0, ilen = arcs.length; i < ilen; ++i) {
            arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
            me.updateElement(arcs[i], i, reset);
          }
        },

        /**
         * @private
         */
        _updateRadius: function _updateRadius() {
          var me = this;
          var chart = me.chart;
          var chartArea = chart.chartArea;
          var opts = chart.options;
          var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
          chart.outerRadius = Math.max(minSize / 2, 0);
          chart.innerRadius = Math.max(opts.cutoutPercentage ? chart.outerRadius / 100 * opts.cutoutPercentage : 1, 0);
          chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
          me.outerRadius = chart.outerRadius - chart.radiusLength * me.index;
          me.innerRadius = me.outerRadius - chart.radiusLength;
        },
        updateElement: function updateElement(arc, index, reset) {
          var me = this;
          var chart = me.chart;
          var dataset = me.getDataset();
          var opts = chart.options;
          var animationOpts = opts.animation;
          var scale = chart.scale;
          var labels = chart.data.labels;
          var centerX = scale.xCenter;
          var centerY = scale.yCenter; // var negHalfPI = -0.5 * Math.PI;

          var datasetStartAngle = opts.startAngle;
          var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
          var startAngle = me._starts[index];
          var endAngle = startAngle + (arc.hidden ? 0 : me._angles[index]);
          var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
          var options = arc._options || {};
          helpers$1.extend(arc, {
            // Utility
            _datasetIndex: me.index,
            _index: index,
            _scale: scale,
            // Desired view properties
            _model: {
              backgroundColor: options.backgroundColor,
              borderColor: options.borderColor,
              borderWidth: options.borderWidth,
              borderAlign: options.borderAlign,
              x: centerX,
              y: centerY,
              innerRadius: 0,
              outerRadius: reset ? resetRadius : distance,
              startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
              endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
              label: helpers$1.valueAtIndexOrDefault(labels, index, labels[index])
            }
          });
          arc.pivot();
        },
        countVisibleElements: function countVisibleElements() {
          var dataset = this.getDataset();
          var meta = this.getMeta();
          var count = 0;
          helpers$1.each(meta.data, function (element, index) {
            if (!isNaN(dataset.data[index]) && !element.hidden) {
              count++;
            }
          });
          return count;
        },

        /**
         * @protected
         */
        setHoverStyle: function setHoverStyle(arc) {
          var model = arc._model;
          var options = arc._options;
          var getHoverColor = helpers$1.getHoverColor;
          var valueOrDefault = helpers$1.valueOrDefault;
          arc.$previousStyle = {
            backgroundColor: model.backgroundColor,
            borderColor: model.borderColor,
            borderWidth: model.borderWidth
          };
          model.backgroundColor = valueOrDefault(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
          model.borderColor = valueOrDefault(options.hoverBorderColor, getHoverColor(options.borderColor));
          model.borderWidth = valueOrDefault(options.hoverBorderWidth, options.borderWidth);
        },

        /**
         * @private
         */
        _computeAngle: function _computeAngle(index) {
          var me = this;
          var count = this.getMeta().count;
          var dataset = me.getDataset();
          var meta = me.getMeta();

          if (isNaN(dataset.data[index]) || meta.data[index].hidden) {
            return 0;
          } // Scriptable options


          var context = {
            chart: me.chart,
            dataIndex: index,
            dataset: dataset,
            datasetIndex: me.index
          };
          return resolve$3([me.chart.options.elements.arc.angle, 2 * Math.PI / count], context, index);
        }
      });

      core_defaults._set('pie', helpers$1.clone(core_defaults.doughnut));

      core_defaults._set('pie', {
        cutoutPercentage: 0
      }); // Pie charts are Doughnut chart with different defaults


      var controller_pie = controller_doughnut;
      var valueOrDefault$7 = helpers$1.valueOrDefault;

      core_defaults._set('radar', {
        spanGaps: false,
        scale: {
          type: 'radialLinear'
        },
        elements: {
          line: {
            fill: 'start',
            tension: 0 // no bezier in radar

          }
        }
      });

      var controller_radar = core_datasetController.extend({
        datasetElementType: elements.Line,
        dataElementType: elements.Point,
        linkScales: helpers$1.noop,

        /**
         * @private
         */
        _datasetElementOptions: ['backgroundColor', 'borderWidth', 'borderColor', 'borderCapStyle', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'fill'],

        /**
         * @private
         */
        _dataElementOptions: {
          backgroundColor: 'pointBackgroundColor',
          borderColor: 'pointBorderColor',
          borderWidth: 'pointBorderWidth',
          hitRadius: 'pointHitRadius',
          hoverBackgroundColor: 'pointHoverBackgroundColor',
          hoverBorderColor: 'pointHoverBorderColor',
          hoverBorderWidth: 'pointHoverBorderWidth',
          hoverRadius: 'pointHoverRadius',
          pointStyle: 'pointStyle',
          radius: 'pointRadius',
          rotation: 'pointRotation'
        },

        /**
         * @private
         */
        _getIndexScaleId: function _getIndexScaleId() {
          return this.chart.scale.id;
        },

        /**
         * @private
         */
        _getValueScaleId: function _getValueScaleId() {
          return this.chart.scale.id;
        },
        update: function update(reset) {
          var me = this;
          var meta = me.getMeta();
          var line = meta.dataset;
          var points = meta.data || [];
          var scale = me.chart.scale;
          var config = me._config;
          var i, ilen; // Compatibility: If the properties are defined with only the old name, use those values

          if (config.tension !== undefined && config.lineTension === undefined) {
            config.lineTension = config.tension;
          } // Utility


          line._scale = scale;
          line._datasetIndex = me.index; // Data

          line._children = points;
          line._loop = true; // Model

          line._model = me._resolveDatasetElementOptions(line);
          line.pivot(); // Update Points

          for (i = 0, ilen = points.length; i < ilen; ++i) {
            me.updateElement(points[i], i, reset);
          } // Update bezier control points


          me.updateBezierControlPoints(); // Now pivot the point for animation

          for (i = 0, ilen = points.length; i < ilen; ++i) {
            points[i].pivot();
          }
        },
        updateElement: function updateElement(point, index, reset) {
          var me = this;
          var custom = point.custom || {};
          var dataset = me.getDataset();
          var scale = me.chart.scale;
          var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);

          var options = me._resolveDataElementOptions(point, index);

          var lineModel = me.getMeta().dataset._model;

          var x = reset ? scale.xCenter : pointPosition.x;
          var y = reset ? scale.yCenter : pointPosition.y; // Utility

          point._scale = scale;
          point._options = options;
          point._datasetIndex = me.index;
          point._index = index; // Desired view properties

          point._model = {
            x: x,
            // value not used in dataset scale, but we want a consistent API between scales
            y: y,
            skip: custom.skip || isNaN(x) || isNaN(y),
            // Appearance
            radius: options.radius,
            pointStyle: options.pointStyle,
            rotation: options.rotation,
            backgroundColor: options.backgroundColor,
            borderColor: options.borderColor,
            borderWidth: options.borderWidth,
            tension: valueOrDefault$7(custom.tension, lineModel ? lineModel.tension : 0),
            // Tooltip
            hitRadius: options.hitRadius
          };
        },

        /**
         * @private
         */
        _resolveDatasetElementOptions: function _resolveDatasetElementOptions() {
          var me = this;
          var config = me._config;
          var options = me.chart.options;

          var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments);

          values.spanGaps = valueOrDefault$7(config.spanGaps, options.spanGaps);
          values.tension = valueOrDefault$7(config.lineTension, options.elements.line.tension);
          return values;
        },
        updateBezierControlPoints: function updateBezierControlPoints() {
          var me = this;
          var meta = me.getMeta();
          var area = me.chart.chartArea;
          var points = meta.data || [];
          var i, ilen, model, controlPoints; // Only consider points that are drawn in case the spanGaps option is used

          if (meta.dataset._model.spanGaps) {
            points = points.filter(function (pt) {
              return !pt._model.skip;
            });
          }

          function capControlPoint(pt, min, max) {
            return Math.max(Math.min(pt, max), min);
          }

          for (i = 0, ilen = points.length; i < ilen; ++i) {
            model = points[i]._model;
            controlPoints = helpers$1.splineCurve(helpers$1.previousItem(points, i, true)._model, model, helpers$1.nextItem(points, i, true)._model, model.tension); // Prevent the bezier going outside of the bounds of the graph

            model.controlPointPreviousX = capControlPoint(controlPoints.previous.x, area.left, area.right);
            model.controlPointPreviousY = capControlPoint(controlPoints.previous.y, area.top, area.bottom);
            model.controlPointNextX = capControlPoint(controlPoints.next.x, area.left, area.right);
            model.controlPointNextY = capControlPoint(controlPoints.next.y, area.top, area.bottom);
          }
        },
        setHoverStyle: function setHoverStyle(point) {
          var model = point._model;
          var options = point._options;
          var getHoverColor = helpers$1.getHoverColor;
          point.$previousStyle = {
            backgroundColor: model.backgroundColor,
            borderColor: model.borderColor,
            borderWidth: model.borderWidth,
            radius: model.radius
          };
          model.backgroundColor = valueOrDefault$7(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
          model.borderColor = valueOrDefault$7(options.hoverBorderColor, getHoverColor(options.borderColor));
          model.borderWidth = valueOrDefault$7(options.hoverBorderWidth, options.borderWidth);
          model.radius = valueOrDefault$7(options.hoverRadius, options.radius);
        }
      });

      core_defaults._set('scatter', {
        hover: {
          mode: 'single'
        },
        scales: {
          xAxes: [{
            id: 'x-axis-1',
            // need an ID so datasets can reference the scale
            type: 'linear',
            // scatter should not use a category axis
            position: 'bottom'
          }],
          yAxes: [{
            id: 'y-axis-1',
            type: 'linear',
            position: 'left'
          }]
        },
        tooltips: {
          callbacks: {
            title: function title() {
              return ''; // doesn't make sense for scatter since data are formatted as a point
            },
            label: function label(item) {
              return '(' + item.xLabel + ', ' + item.yLabel + ')';
            }
          }
        }
      });

      core_defaults._set('global', {
        datasets: {
          scatter: {
            showLine: false
          }
        }
      }); // Scatter charts use line controllers


      var controller_scatter = controller_line; // NOTE export a map in which the key represents the controller type, not
      // the class, and so must be CamelCase in order to be correctly retrieved
      // by the controller in core.controller.js (`controllers[meta.type]`).

      var controllers = {
        bar: controller_bar,
        bubble: controller_bubble,
        doughnut: controller_doughnut,
        horizontalBar: controller_horizontalBar,
        line: controller_line,
        polarArea: controller_polarArea,
        pie: controller_pie,
        radar: controller_radar,
        scatter: controller_scatter
      };
      /**
       * Helper function to get relative position for an event
       * @param {Event|IEvent} event - The event to get the position for
       * @param {Chart} chart - The chart
       * @returns {object} the event position
       */

      function getRelativePosition(e, chart) {
        if (e.native) {
          return {
            x: e.x,
            y: e.y
          };
        }

        return helpers$1.getRelativePosition(e, chart);
      }
      /**
       * Helper function to traverse all of the visible elements in the chart
       * @param {Chart} chart - the chart
       * @param {function} handler - the callback to execute for each visible item
       */


      function parseVisibleItems(chart, handler) {
        var metasets = chart._getSortedVisibleDatasetMetas();

        var metadata, i, j, ilen, jlen, element;

        for (i = 0, ilen = metasets.length; i < ilen; ++i) {
          metadata = metasets[i].data;

          for (j = 0, jlen = metadata.length; j < jlen; ++j) {
            element = metadata[j];

            if (!element._view.skip) {
              handler(element);
            }
          }
        }
      }
      /**
       * Helper function to get the items that intersect the event position
       * @param {ChartElement[]} items - elements to filter
       * @param {object} position - the point to be nearest to
       * @return {ChartElement[]} the nearest items
       */


      function getIntersectItems(chart, position) {
        var elements = [];
        parseVisibleItems(chart, function (element) {
          if (element.inRange(position.x, position.y)) {
            elements.push(element);
          }
        });
        return elements;
      }
      /**
       * Helper function to get the items nearest to the event position considering all visible items in teh chart
       * @param {Chart} chart - the chart to look at elements from
       * @param {object} position - the point to be nearest to
       * @param {boolean} intersect - if true, only consider items that intersect the position
       * @param {function} distanceMetric - function to provide the distance between points
       * @return {ChartElement[]} the nearest items
       */


      function getNearestItems(chart, position, intersect, distanceMetric) {
        var minDistance = Number.POSITIVE_INFINITY;
        var nearestItems = [];
        parseVisibleItems(chart, function (element) {
          if (intersect && !element.inRange(position.x, position.y)) {
            return;
          }

          var center = element.getCenterPoint();
          var distance = distanceMetric(position, center);

          if (distance < minDistance) {
            nearestItems = [element];
            minDistance = distance;
          } else if (distance === minDistance) {
            // Can have multiple items at the same distance in which case we sort by size
            nearestItems.push(element);
          }
        });
        return nearestItems;
      }
      /**
       * Get a distance metric function for two points based on the
       * axis mode setting
       * @param {string} axis - the axis mode. x|y|xy
       */


      function getDistanceMetricForAxis(axis) {
        var useX = axis.indexOf('x') !== -1;
        var useY = axis.indexOf('y') !== -1;
        return function (pt1, pt2) {
          var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
          var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
          return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
        };
      }

      function indexMode(chart, e, options) {
        var position = getRelativePosition(e, chart); // Default axis for index mode is 'x' to match old behaviour

        options.axis = options.axis || 'x';
        var distanceMetric = getDistanceMetricForAxis(options.axis);
        var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
        var elements = [];

        if (!items.length) {
          return [];
        }

        chart._getSortedVisibleDatasetMetas().forEach(function (meta) {
          var element = meta.data[items[0]._index]; // don't count items that are skipped (null data)

          if (element && !element._view.skip) {
            elements.push(element);
          }
        });

        return elements;
      }
      /**
       * @interface IInteractionOptions
       */

      /**
       * If true, only consider items that intersect the point
       * @name IInterfaceOptions#boolean
       * @type Boolean
       */

      /**
       * Contains interaction related functions
       * @namespace Chart.Interaction
       */


      var core_interaction = {
        // Helper function for different modes
        modes: {
          single: function single(chart, e) {
            var position = getRelativePosition(e, chart);
            var elements = [];
            parseVisibleItems(chart, function (element) {
              if (element.inRange(position.x, position.y)) {
                elements.push(element);
                return elements;
              }
            });
            return elements.slice(0, 1);
          },

          /**
           * @function Chart.Interaction.modes.label
           * @deprecated since version 2.4.0
           * @todo remove at version 3
           * @private
           */
          label: indexMode,

          /**
           * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
           * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
           * @function Chart.Interaction.modes.index
           * @since v2.4.0
           * @param {Chart} chart - the chart we are returning items from
           * @param {Event} e - the event we are find things at
           * @param {IInteractionOptions} options - options to use during interaction
           * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
           */
          index: indexMode,

          /**
           * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
           * If the options.intersect is false, we find the nearest item and return the items in that dataset
           * @function Chart.Interaction.modes.dataset
           * @param {Chart} chart - the chart we are returning items from
           * @param {Event} e - the event we are find things at
           * @param {IInteractionOptions} options - options to use during interaction
           * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
           */
          dataset: function dataset(chart, e, options) {
            var position = getRelativePosition(e, chart);
            options.axis = options.axis || 'xy';
            var distanceMetric = getDistanceMetricForAxis(options.axis);
            var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);

            if (items.length > 0) {
              items = chart.getDatasetMeta(items[0]._datasetIndex).data;
            }

            return items;
          },

          /**
           * @function Chart.Interaction.modes.x-axis
           * @deprecated since version 2.4.0. Use index mode and intersect == true
           * @todo remove at version 3
           * @private
           */
          'x-axis': function xAxis(chart, e) {
            return indexMode(chart, e, {
              intersect: false
            });
          },

          /**
           * Point mode returns all elements that hit test based on the event position
           * of the event
           * @function Chart.Interaction.modes.intersect
           * @param {Chart} chart - the chart we are returning items from
           * @param {Event} e - the event we are find things at
           * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
           */
          point: function point(chart, e) {
            var position = getRelativePosition(e, chart);
            return getIntersectItems(chart, position);
          },

          /**
           * nearest mode returns the element closest to the point
           * @function Chart.Interaction.modes.intersect
           * @param {Chart} chart - the chart we are returning items from
           * @param {Event} e - the event we are find things at
           * @param {IInteractionOptions} options - options to use
           * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
           */
          nearest: function nearest(chart, e, options) {
            var position = getRelativePosition(e, chart);
            options.axis = options.axis || 'xy';
            var distanceMetric = getDistanceMetricForAxis(options.axis);
            return getNearestItems(chart, position, options.intersect, distanceMetric);
          },

          /**
           * x mode returns the elements that hit-test at the current x coordinate
           * @function Chart.Interaction.modes.x
           * @param {Chart} chart - the chart we are returning items from
           * @param {Event} e - the event we are find things at
           * @param {IInteractionOptions} options - options to use
           * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
           */
          x: function x(chart, e, options) {
            var position = getRelativePosition(e, chart);
            var items = [];
            var intersectsItem = false;
            parseVisibleItems(chart, function (element) {
              if (element.inXRange(position.x)) {
                items.push(element);
              }

              if (element.inRange(position.x, position.y)) {
                intersectsItem = true;
              }
            }); // If we want to trigger on an intersect and we don't have any items
            // that intersect the position, return nothing

            if (options.intersect && !intersectsItem) {
              items = [];
            }

            return items;
          },

          /**
           * y mode returns the elements that hit-test at the current y coordinate
           * @function Chart.Interaction.modes.y
           * @param {Chart} chart - the chart we are returning items from
           * @param {Event} e - the event we are find things at
           * @param {IInteractionOptions} options - options to use
           * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
           */
          y: function y(chart, e, options) {
            var position = getRelativePosition(e, chart);
            var items = [];
            var intersectsItem = false;
            parseVisibleItems(chart, function (element) {
              if (element.inYRange(position.y)) {
                items.push(element);
              }

              if (element.inRange(position.x, position.y)) {
                intersectsItem = true;
              }
            }); // If we want to trigger on an intersect and we don't have any items
            // that intersect the position, return nothing

            if (options.intersect && !intersectsItem) {
              items = [];
            }

            return items;
          }
        }
      };
      var extend = helpers$1.extend;

      function filterByPosition(array, position) {
        return helpers$1.where(array, function (v) {
          return v.pos === position;
        });
      }

      function sortByWeight(array, reverse) {
        return array.sort(function (a, b) {
          var v0 = reverse ? b : a;
          var v1 = reverse ? a : b;
          return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
        });
      }

      function wrapBoxes(boxes) {
        var layoutBoxes = [];
        var i, ilen, box;

        for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
          box = boxes[i];
          layoutBoxes.push({
            index: i,
            box: box,
            pos: box.position,
            horizontal: box.isHorizontal(),
            weight: box.weight
          });
        }

        return layoutBoxes;
      }

      function setLayoutDims(layouts, params) {
        var i, ilen, layout;

        for (i = 0, ilen = layouts.length; i < ilen; ++i) {
          layout = layouts[i]; // store width used instead of chartArea.w in fitBoxes

          layout.width = layout.horizontal ? layout.box.fullWidth && params.availableWidth : params.vBoxMaxWidth; // store height used instead of chartArea.h in fitBoxes

          layout.height = layout.horizontal && params.hBoxMaxHeight;
        }
      }

      function buildLayoutBoxes(boxes) {
        var layoutBoxes = wrapBoxes(boxes);
        var left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
        var right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
        var top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
        var bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
        return {
          leftAndTop: left.concat(top),
          rightAndBottom: right.concat(bottom),
          chartArea: filterByPosition(layoutBoxes, 'chartArea'),
          vertical: left.concat(right),
          horizontal: top.concat(bottom)
        };
      }

      function getCombinedMax(maxPadding, chartArea, a, b) {
        return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
      }

      function updateDims(chartArea, params, layout) {
        var box = layout.box;
        var maxPadding = chartArea.maxPadding;
        var newWidth, newHeight;

        if (layout.size) {
          // this layout was already counted for, lets first reduce old size
          chartArea[layout.pos] -= layout.size;
        }

        layout.size = layout.horizontal ? box.height : box.width;
        chartArea[layout.pos] += layout.size;

        if (box.getPadding) {
          var boxPadding = box.getPadding();
          maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
          maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
          maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
          maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
        }

        newWidth = params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right');
        newHeight = params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom');

        if (newWidth !== chartArea.w || newHeight !== chartArea.h) {
          chartArea.w = newWidth;
          chartArea.h = newHeight; // return true if chart area changed in layout's direction

          return layout.horizontal ? newWidth !== chartArea.w : newHeight !== chartArea.h;
        }
      }

      function handleMaxPadding(chartArea) {
        var maxPadding = chartArea.maxPadding;

        function updatePos(pos) {
          var change = Math.max(maxPadding[pos] - chartArea[pos], 0);
          chartArea[pos] += change;
          return change;
        }

        chartArea.y += updatePos('top');
        chartArea.x += updatePos('left');
        updatePos('right');
        updatePos('bottom');
      }

      function getMargins(horizontal, chartArea) {
        var maxPadding = chartArea.maxPadding;

        function marginForPositions(positions) {
          var margin = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          };
          positions.forEach(function (pos) {
            margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
          });
          return margin;
        }

        return horizontal ? marginForPositions(['left', 'right']) : marginForPositions(['top', 'bottom']);
      }

      function fitBoxes(boxes, chartArea, params) {
        var refitBoxes = [];
        var i, ilen, layout, box, refit, changed;

        for (i = 0, ilen = boxes.length; i < ilen; ++i) {
          layout = boxes[i];
          box = layout.box;
          box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));

          if (updateDims(chartArea, params, layout)) {
            changed = true;

            if (refitBoxes.length) {
              // Dimensions changed and there were non full width boxes before this
              // -> we have to refit those
              refit = true;
            }
          }

          if (!box.fullWidth) {
            // fullWidth boxes don't need to be re-fitted in any case
            refitBoxes.push(layout);
          }
        }

        return refit ? fitBoxes(refitBoxes, chartArea, params) || changed : changed;
      }

      function placeBoxes(boxes, chartArea, params) {
        var userPadding = params.padding;
        var x = chartArea.x;
        var y = chartArea.y;
        var i, ilen, layout, box;

        for (i = 0, ilen = boxes.length; i < ilen; ++i) {
          layout = boxes[i];
          box = layout.box;

          if (layout.horizontal) {
            box.left = box.fullWidth ? userPadding.left : chartArea.left;
            box.right = box.fullWidth ? params.outerWidth - userPadding.right : chartArea.left + chartArea.w;
            box.top = y;
            box.bottom = y + box.height;
            box.width = box.right - box.left;
            y = box.bottom;
          } else {
            box.left = x;
            box.right = x + box.width;
            box.top = chartArea.top;
            box.bottom = chartArea.top + chartArea.h;
            box.height = box.bottom - box.top;
            x = box.right;
          }
        }

        chartArea.x = x;
        chartArea.y = y;
      }

      core_defaults._set('global', {
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      });
      /**
       * @interface ILayoutItem
       * @prop {string} position - The position of the item in the chart layout. Possible values are
       * 'left', 'top', 'right', 'bottom', and 'chartArea'
       * @prop {number} weight - The weight used to sort the item. Higher weights are further away from the chart area
       * @prop {boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
       * @prop {function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
       * @prop {function} update - Takes two parameters: width and height. Returns size of item
       * @prop {function} getPadding -  Returns an object with padding on the edges
       * @prop {number} width - Width of item. Must be valid after update()
       * @prop {number} height - Height of item. Must be valid after update()
       * @prop {number} left - Left edge of the item. Set by layout system and cannot be used in update
       * @prop {number} top - Top edge of the item. Set by layout system and cannot be used in update
       * @prop {number} right - Right edge of the item. Set by layout system and cannot be used in update
       * @prop {number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
       */
      // The layout service is very self explanatory.  It's responsible for the layout within a chart.
      // Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
      // It is this service's responsibility of carrying out that layout.


      var core_layouts = {
        defaults: {},

        /**
         * Register a box to a chart.
         * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
         * @param {Chart} chart - the chart to use
         * @param {ILayoutItem} item - the item to add to be layed out
         */
        addBox: function addBox(chart, item) {
          if (!chart.boxes) {
            chart.boxes = [];
          } // initialize item with default values


          item.fullWidth = item.fullWidth || false;
          item.position = item.position || 'top';
          item.weight = item.weight || 0;

          item._layers = item._layers || function () {
            return [{
              z: 0,
              draw: function draw() {
                item.draw.apply(item, arguments);
              }
            }];
          };

          chart.boxes.push(item);
        },

        /**
         * Remove a layoutItem from a chart
         * @param {Chart} chart - the chart to remove the box from
         * @param {ILayoutItem} layoutItem - the item to remove from the layout
         */
        removeBox: function removeBox(chart, layoutItem) {
          var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;

          if (index !== -1) {
            chart.boxes.splice(index, 1);
          }
        },

        /**
         * Sets (or updates) options on the given `item`.
         * @param {Chart} chart - the chart in which the item lives (or will be added to)
         * @param {ILayoutItem} item - the item to configure with the given options
         * @param {object} options - the new item options.
         */
        configure: function configure(chart, item, options) {
          var props = ['fullWidth', 'position', 'weight'];
          var ilen = props.length;
          var i = 0;
          var prop;

          for (; i < ilen; ++i) {
            prop = props[i];

            if (options.hasOwnProperty(prop)) {
              item[prop] = options[prop];
            }
          }
        },

        /**
         * Fits boxes of the given chart into the given size by having each box measure itself
         * then running a fitting algorithm
         * @param {Chart} chart - the chart
         * @param {number} width - the width to fit into
         * @param {number} height - the height to fit into
         */
        update: function update(chart, width, height) {
          if (!chart) {
            return;
          }

          var layoutOptions = chart.options.layout || {};
          var padding = helpers$1.options.toPadding(layoutOptions.padding);
          var availableWidth = width - padding.width;
          var availableHeight = height - padding.height;
          var boxes = buildLayoutBoxes(chart.boxes);
          var verticalBoxes = boxes.vertical;
          var horizontalBoxes = boxes.horizontal; // Essentially we now have any number of boxes on each of the 4 sides.
          // Our canvas looks like the following.
          // The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
          // B1 is the bottom axis
          // There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
          // These locations are single-box locations only, when trying to register a chartArea location that is already taken,
          // an error will be thrown.
          //
          // |----------------------------------------------------|
          // |                  T1 (Full Width)                   |
          // |----------------------------------------------------|
          // |    |    |                 T2                  |    |
          // |    |----|-------------------------------------|----|
          // |    |    | C1 |                           | C2 |    |
          // |    |    |----|                           |----|    |
          // |    |    |                                     |    |
          // | L1 | L2 |           ChartArea (C0)            | R1 |
          // |    |    |                                     |    |
          // |    |    |----|                           |----|    |
          // |    |    | C3 |                           | C4 |    |
          // |    |----|-------------------------------------|----|
          // |    |    |                 B1                  |    |
          // |----------------------------------------------------|
          // |                  B2 (Full Width)                   |
          // |----------------------------------------------------|
          //

          var params = Object.freeze({
            outerWidth: width,
            outerHeight: height,
            padding: padding,
            availableWidth: availableWidth,
            vBoxMaxWidth: availableWidth / 2 / verticalBoxes.length,
            hBoxMaxHeight: availableHeight / 2
          });
          var chartArea = extend({
            maxPadding: extend({}, padding),
            w: availableWidth,
            h: availableHeight,
            x: padding.left,
            y: padding.top
          }, padding);
          setLayoutDims(verticalBoxes.concat(horizontalBoxes), params); // First fit vertical boxes

          fitBoxes(verticalBoxes, chartArea, params); // Then fit horizontal boxes

          if (fitBoxes(horizontalBoxes, chartArea, params)) {
            // if the area changed, re-fit vertical boxes
            fitBoxes(verticalBoxes, chartArea, params);
          }

          handleMaxPadding(chartArea); // Finally place the boxes to correct coordinates

          placeBoxes(boxes.leftAndTop, chartArea, params); // Move to opposite side of chart

          chartArea.x += chartArea.w;
          chartArea.y += chartArea.h;
          placeBoxes(boxes.rightAndBottom, chartArea, params);
          chart.chartArea = {
            left: chartArea.left,
            top: chartArea.top,
            right: chartArea.left + chartArea.w,
            bottom: chartArea.top + chartArea.h
          }; // Finally update boxes in chartArea (radial scale for example)

          helpers$1.each(boxes.chartArea, function (layout) {
            var box = layout.box;
            extend(box, chart.chartArea);
            box.update(chartArea.w, chartArea.h);
          });
        }
      };
      /**
       * Platform fallback implementation (minimal).
       * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
       */

      var platform_basic = {
        acquireContext: function acquireContext(item) {
          if (item && item.canvas) {
            // Support for any object associated to a canvas (including a context2d)
            item = item.canvas;
          }

          return item && item.getContext('2d') || null;
        }
      };
      var platform_dom = "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n";
      var platform_dom$1 =
      /*#__PURE__*/
      Object.freeze({
        __proto__: null,
        'default': platform_dom
      });
      var stylesheet = getCjsExportFromNamespace(platform_dom$1);
      var EXPANDO_KEY = '$chartjs';
      var CSS_PREFIX = 'chartjs-';
      var CSS_SIZE_MONITOR = CSS_PREFIX + 'size-monitor';
      var CSS_RENDER_MONITOR = CSS_PREFIX + 'render-monitor';
      var CSS_RENDER_ANIMATION = CSS_PREFIX + 'render-animation';
      var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart'];
      /**
       * DOM event types -> Chart.js event types.
       * Note: only events with different types are mapped.
       * @see https://developer.mozilla.org/en-US/docs/Web/Events
       */

      var EVENT_TYPES = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup',
        pointerenter: 'mouseenter',
        pointerdown: 'mousedown',
        pointermove: 'mousemove',
        pointerup: 'mouseup',
        pointerleave: 'mouseout',
        pointerout: 'mouseout'
      };
      /**
       * The "used" size is the final value of a dimension property after all calculations have
       * been performed. This method uses the computed style of `element` but returns undefined
       * if the computed style is not expressed in pixels. That can happen in some cases where
       * `element` has a size relative to its parent and this last one is not yet displayed,
       * for example because of `display: none` on a parent node.
       * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
       * @returns {number} Size in pixels or undefined if unknown.
       */

      function readUsedSize(element, property) {
        var value = helpers$1.getStyle(element, property);
        var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
        return matches ? Number(matches[1]) : undefined;
      }
      /**
       * Initializes the canvas style and render size without modifying the canvas display size,
       * since responsiveness is handled by the controller.resize() method. The config is used
       * to determine the aspect ratio to apply in case no explicit height has been specified.
       */


      function initCanvas(canvas, config) {
        var style = canvas.style; // NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
        // returns null or '' if no explicit value has been set to the canvas attribute.

        var renderHeight = canvas.getAttribute('height');
        var renderWidth = canvas.getAttribute('width'); // Chart.js modifies some canvas values that we want to restore on destroy

        canvas[EXPANDO_KEY] = {
          initial: {
            height: renderHeight,
            width: renderWidth,
            style: {
              display: style.display,
              height: style.height,
              width: style.width
            }
          }
        }; // Force canvas to display as block to avoid extra space caused by inline
        // elements, which would interfere with the responsive resize process.
        // https://github.com/chartjs/Chart.js/issues/2538

        style.display = style.display || 'block';

        if (renderWidth === null || renderWidth === '') {
          var displayWidth = readUsedSize(canvas, 'width');

          if (displayWidth !== undefined) {
            canvas.width = displayWidth;
          }
        }

        if (renderHeight === null || renderHeight === '') {
          if (canvas.style.height === '') {
            // If no explicit render height and style height, let's apply the aspect ratio,
            // which one can be specified by the user but also by charts as default option
            // (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
            canvas.height = canvas.width / (config.options.aspectRatio || 2);
          } else {
            var displayHeight = readUsedSize(canvas, 'height');

            if (displayWidth !== undefined) {
              canvas.height = displayHeight;
            }
          }
        }

        return canvas;
      }
      /**
       * Detects support for options object argument in addEventListener.
       * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
       * @private
       */


      var supportsEventListenerOptions = function () {
        var supports = false;

        try {
          var options = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line getter-return
            get: function get() {
              supports = true;
            }
          });
          window.addEventListener('e', null, options);
        } catch (e) {// continue regardless of error
        }

        return supports;
      }(); // Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
      // https://github.com/chartjs/Chart.js/issues/4287


      var eventListenerOptions = supportsEventListenerOptions ? {
        passive: true
      } : false;

      function addListener(node, type, listener) {
        node.addEventListener(type, listener, eventListenerOptions);
      }

      function removeListener(node, type, listener) {
        node.removeEventListener(type, listener, eventListenerOptions);
      }

      function createEvent(type, chart, x, y, nativeEvent) {
        return {
          type: type,
          chart: chart,
          native: nativeEvent || null,
          x: x !== undefined ? x : null,
          y: y !== undefined ? y : null
        };
      }

      function fromNativeEvent(event, chart) {
        var type = EVENT_TYPES[event.type] || event.type;
        var pos = helpers$1.getRelativePosition(event, chart);
        return createEvent(type, chart, pos.x, pos.y, event);
      }

      function throttled(fn, thisArg) {
        var ticking = false;
        var args = [];
        return function () {
          args = Array.prototype.slice.call(arguments);
          thisArg = thisArg || this;

          if (!ticking) {
            ticking = true;
            helpers$1.requestAnimFrame.call(window, function () {
              ticking = false;
              fn.apply(thisArg, args);
            });
          }
        };
      }

      function createDiv(cls) {
        var el = document.createElement('div');
        el.className = cls || '';
        return el;
      } // Implementation based on https://github.com/marcj/css-element-queries


      function createResizer(handler) {
        var maxSize = 1000000; // NOTE(SB) Don't use innerHTML because it could be considered unsafe.
        // https://github.com/chartjs/Chart.js/issues/5902

        var resizer = createDiv(CSS_SIZE_MONITOR);
        var expand = createDiv(CSS_SIZE_MONITOR + '-expand');
        var shrink = createDiv(CSS_SIZE_MONITOR + '-shrink');
        expand.appendChild(createDiv());
        shrink.appendChild(createDiv());
        resizer.appendChild(expand);
        resizer.appendChild(shrink);

        resizer._reset = function () {
          expand.scrollLeft = maxSize;
          expand.scrollTop = maxSize;
          shrink.scrollLeft = maxSize;
          shrink.scrollTop = maxSize;
        };

        var onScroll = function onScroll() {
          resizer._reset();

          handler();
        };

        addListener(expand, 'scroll', onScroll.bind(expand, 'expand'));
        addListener(shrink, 'scroll', onScroll.bind(shrink, 'shrink'));
        return resizer;
      } // https://davidwalsh.name/detect-node-insertion


      function watchForRender(node, handler) {
        var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});

        var proxy = expando.renderProxy = function (e) {
          if (e.animationName === CSS_RENDER_ANIMATION) {
            handler();
          }
        };

        helpers$1.each(ANIMATION_START_EVENTS, function (type) {
          addListener(node, type, proxy);
        }); // #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
        // is removed then added back immediately (same animation frame?). Accessing the
        // `offsetParent` property will force a reflow and re-evaluate the CSS animation.
        // https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
        // https://github.com/chartjs/Chart.js/issues/4737

        expando.reflow = !!node.offsetParent;
        node.classList.add(CSS_RENDER_MONITOR);
      }

      function unwatchForRender(node) {
        var expando = node[EXPANDO_KEY] || {};
        var proxy = expando.renderProxy;

        if (proxy) {
          helpers$1.each(ANIMATION_START_EVENTS, function (type) {
            removeListener(node, type, proxy);
          });
          delete expando.renderProxy;
        }

        node.classList.remove(CSS_RENDER_MONITOR);
      }

      function addResizeListener(node, listener, chart) {
        var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {}); // Let's keep track of this added resizer and thus avoid DOM query when removing it.

        var resizer = expando.resizer = createResizer(throttled(function () {
          if (expando.resizer) {
            var container = chart.options.maintainAspectRatio && node.parentNode;
            var w = container ? container.clientWidth : 0;
            listener(createEvent('resize', chart));

            if (container && container.clientWidth < w && chart.canvas) {
              // If the container size shrank during chart resize, let's assume
              // scrollbar appeared. So we resize again with the scrollbar visible -
              // effectively making chart smaller and the scrollbar hidden again.
              // Because we are inside `throttled`, and currently `ticking`, scroll
              // events are ignored during this whole 2 resize process.
              // If we assumed wrong and something else happened, we are resizing
              // twice in a frame (potential performance issue)
              listener(createEvent('resize', chart));
            }
          }
        })); // The resizer needs to be attached to the node parent, so we first need to be
        // sure that `node` is attached to the DOM before injecting the resizer element.

        watchForRender(node, function () {
          if (expando.resizer) {
            var container = node.parentNode;

            if (container && container !== resizer.parentNode) {
              container.insertBefore(resizer, container.firstChild);
            } // The container size might have changed, let's reset the resizer state.


            resizer._reset();
          }
        });
      }

      function removeResizeListener(node) {
        var expando = node[EXPANDO_KEY] || {};
        var resizer = expando.resizer;
        delete expando.resizer;
        unwatchForRender(node);

        if (resizer && resizer.parentNode) {
          resizer.parentNode.removeChild(resizer);
        }
      }
      /**
       * Injects CSS styles inline if the styles are not already present.
       * @param {HTMLDocument|ShadowRoot} rootNode - the node to contain the <style>.
       * @param {string} css - the CSS to be injected.
       */


      function injectCSS(rootNode, css) {
        // https://stackoverflow.com/q/3922139
        var expando = rootNode[EXPANDO_KEY] || (rootNode[EXPANDO_KEY] = {});

        if (!expando.containsStyles) {
          expando.containsStyles = true;
          css = '/* Chart.js */\n' + css;
          var style = document.createElement('style');
          style.setAttribute('type', 'text/css');
          style.appendChild(document.createTextNode(css));
          rootNode.appendChild(style);
        }
      }

      var platform_dom$2 = {
        /**
         * When `true`, prevents the automatic injection of the stylesheet required to
         * correctly detect when the chart is added to the DOM and then resized. This
         * switch has been added to allow external stylesheet (`dist/Chart(.min)?.js`)
         * to be manually imported to make this library compatible with any CSP.
         * See https://github.com/chartjs/Chart.js/issues/5208
         */
        disableCSSInjection: false,

        /**
         * This property holds whether this platform is enabled for the current environment.
         * Currently used by platform.js to select the proper implementation.
         * @private
         */
        _enabled: typeof window !== 'undefined' && typeof document !== 'undefined',

        /**
         * Initializes resources that depend on platform options.
         * @param {HTMLCanvasElement} canvas - The Canvas element.
         * @private
         */
        _ensureLoaded: function _ensureLoaded(canvas) {
          if (!this.disableCSSInjection) {
            // If the canvas is in a shadow DOM, then the styles must also be inserted
            // into the same shadow DOM.
            // https://github.com/chartjs/Chart.js/issues/5763
            var root = canvas.getRootNode ? canvas.getRootNode() : document;
            var targetNode = root.host ? root : document.head;
            injectCSS(targetNode, stylesheet);
          }
        },
        acquireContext: function acquireContext(item, config) {
          if (typeof item === 'string') {
            item = document.getElementById(item);
          } else if (item.length) {
            // Support for array based queries (such as jQuery)
            item = item[0];
          }

          if (item && item.canvas) {
            // Support for any object associated to a canvas (including a context2d)
            item = item.canvas;
          } // To prevent canvas fingerprinting, some add-ons undefine the getContext
          // method, for example: https://github.com/kkapsner/CanvasBlocker
          // https://github.com/chartjs/Chart.js/issues/2807


          var context = item && item.getContext && item.getContext('2d'); // `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
          // inside an iframe or when running in a protected environment. We could guess the
          // types from their toString() value but let's keep things flexible and assume it's
          // a sufficient condition if the item has a context2D which has item as `canvas`.
          // https://github.com/chartjs/Chart.js/issues/3887
          // https://github.com/chartjs/Chart.js/issues/4102
          // https://github.com/chartjs/Chart.js/issues/4152

          if (context && context.canvas === item) {
            // Load platform resources on first chart creation, to make it possible to
            // import the library before setting platform options.
            this._ensureLoaded(item);

            initCanvas(item, config);
            return context;
          }

          return null;
        },
        releaseContext: function releaseContext(context) {
          var canvas = context.canvas;

          if (!canvas[EXPANDO_KEY]) {
            return;
          }

          var initial = canvas[EXPANDO_KEY].initial;
          ['height', 'width'].forEach(function (prop) {
            var value = initial[prop];

            if (helpers$1.isNullOrUndef(value)) {
              canvas.removeAttribute(prop);
            } else {
              canvas.setAttribute(prop, value);
            }
          });
          helpers$1.each(initial.style || {}, function (value, key) {
            canvas.style[key] = value;
          }); // The canvas render size might have been changed (and thus the state stack discarded),
          // we can't use save() and restore() to restore the initial state. So make sure that at
          // least the canvas context is reset to the default state by setting the canvas width.
          // https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
          // eslint-disable-next-line no-self-assign

          canvas.width = canvas.width;
          delete canvas[EXPANDO_KEY];
        },
        addEventListener: function addEventListener(chart, type, listener) {
          var canvas = chart.canvas;

          if (type === 'resize') {
            // Note: the resize event is not supported on all browsers.
            addResizeListener(canvas, listener, chart);
            return;
          }

          var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
          var proxies = expando.proxies || (expando.proxies = {});

          var proxy = proxies[chart.id + '_' + type] = function (event) {
            listener(fromNativeEvent(event, chart));
          };

          addListener(canvas, type, proxy);
        },
        removeEventListener: function removeEventListener(chart, type, listener) {
          var canvas = chart.canvas;

          if (type === 'resize') {
            // Note: the resize event is not supported on all browsers.
            removeResizeListener(canvas);
            return;
          }

          var expando = listener[EXPANDO_KEY] || {};
          var proxies = expando.proxies || {};
          var proxy = proxies[chart.id + '_' + type];

          if (!proxy) {
            return;
          }

          removeListener(canvas, type, proxy);
        }
      }; // DEPRECATIONS

      /**
       * Provided for backward compatibility, use EventTarget.addEventListener instead.
       * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
       * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
       * @function Chart.helpers.addEvent
       * @deprecated since version 2.7.0
       * @todo remove at version 3
       * @private
       */

      helpers$1.addEvent = addListener;
      /**
       * Provided for backward compatibility, use EventTarget.removeEventListener instead.
       * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
       * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
       * @function Chart.helpers.removeEvent
       * @deprecated since version 2.7.0
       * @todo remove at version 3
       * @private
       */

      helpers$1.removeEvent = removeListener; // @TODO Make possible to select another platform at build time.

      var implementation = platform_dom$2._enabled ? platform_dom$2 : platform_basic;
      /**
       * @namespace Chart.platform
       * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
       * @since 2.4.0
       */

      var platform = helpers$1.extend({
        /**
         * @since 2.7.0
         */
        initialize: function initialize() {},

        /**
         * Called at chart construction time, returns a context2d instance implementing
         * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
         * @param {*} item - The native item from which to acquire context (platform specific)
         * @param {object} options - The chart options
         * @returns {CanvasRenderingContext2D} context2d instance
         */
        acquireContext: function acquireContext() {},

        /**
         * Called at chart destruction time, releases any resources associated to the context
         * previously returned by the acquireContext() method.
         * @param {CanvasRenderingContext2D} context - The context2d instance
         * @returns {boolean} true if the method succeeded, else false
         */
        releaseContext: function releaseContext() {},

        /**
         * Registers the specified listener on the given chart.
         * @param {Chart} chart - Chart from which to listen for event
         * @param {string} type - The ({@link IEvent}) type to listen for
         * @param {function} listener - Receives a notification (an object that implements
         * the {@link IEvent} interface) when an event of the specified type occurs.
         */
        addEventListener: function addEventListener() {},

        /**
         * Removes the specified listener previously registered with addEventListener.
         * @param {Chart} chart - Chart from which to remove the listener
         * @param {string} type - The ({@link IEvent}) type to remove
         * @param {function} listener - The listener function to remove from the event target.
         */
        removeEventListener: function removeEventListener() {}
      }, implementation);

      core_defaults._set('global', {
        plugins: {}
      });
      /**
       * The plugin service singleton
       * @namespace Chart.plugins
       * @since 2.1.0
       */


      var core_plugins = {
        /**
         * Globally registered plugins.
         * @private
         */
        _plugins: [],

        /**
         * This identifier is used to invalidate the descriptors cache attached to each chart
         * when a global plugin is registered or unregistered. In this case, the cache ID is
         * incremented and descriptors are regenerated during following API calls.
         * @private
         */
        _cacheId: 0,

        /**
         * Registers the given plugin(s) if not already registered.
         * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
         */
        register: function register(plugins) {
          var p = this._plugins;
          [].concat(plugins).forEach(function (plugin) {
            if (p.indexOf(plugin) === -1) {
              p.push(plugin);
            }
          });
          this._cacheId++;
        },

        /**
         * Unregisters the given plugin(s) only if registered.
         * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
         */
        unregister: function unregister(plugins) {
          var p = this._plugins;
          [].concat(plugins).forEach(function (plugin) {
            var idx = p.indexOf(plugin);

            if (idx !== -1) {
              p.splice(idx, 1);
            }
          });
          this._cacheId++;
        },

        /**
         * Remove all registered plugins.
         * @since 2.1.5
         */
        clear: function clear() {
          this._plugins = [];
          this._cacheId++;
        },

        /**
         * Returns the number of registered plugins?
         * @returns {number}
         * @since 2.1.5
         */
        count: function count() {
          return this._plugins.length;
        },

        /**
         * Returns all registered plugin instances.
         * @returns {IPlugin[]} array of plugin objects.
         * @since 2.1.5
         */
        getAll: function getAll() {
          return this._plugins;
        },

        /**
         * Calls enabled plugins for `chart` on the specified hook and with the given args.
         * This method immediately returns as soon as a plugin explicitly returns false. The
         * returned value can be used, for instance, to interrupt the current action.
         * @param {Chart} chart - The chart instance for which plugins should be called.
         * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
         * @param {Array} [args] - Extra arguments to apply to the hook call.
         * @returns {boolean} false if any of the plugins return false, else returns true.
         */
        notify: function notify(chart, hook, args) {
          var descriptors = this.descriptors(chart);
          var ilen = descriptors.length;
          var i, descriptor, plugin, params, method;

          for (i = 0; i < ilen; ++i) {
            descriptor = descriptors[i];
            plugin = descriptor.plugin;
            method = plugin[hook];

            if (typeof method === 'function') {
              params = [chart].concat(args || []);
              params.push(descriptor.options);

              if (method.apply(plugin, params) === false) {
                return false;
              }
            }
          }

          return true;
        },

        /**
         * Returns descriptors of enabled plugins for the given chart.
         * @returns {object[]} [{ plugin, options }]
         * @private
         */
        descriptors: function descriptors(chart) {
          var cache = chart.$plugins || (chart.$plugins = {});

          if (cache.id === this._cacheId) {
            return cache.descriptors;
          }

          var plugins = [];
          var descriptors = [];
          var config = chart && chart.config || {};
          var options = config.options && config.options.plugins || {};

          this._plugins.concat(config.plugins || []).forEach(function (plugin) {
            var idx = plugins.indexOf(plugin);

            if (idx !== -1) {
              return;
            }

            var id = plugin.id;
            var opts = options[id];

            if (opts === false) {
              return;
            }

            if (opts === true) {
              opts = helpers$1.clone(core_defaults.global.plugins[id]);
            }

            plugins.push(plugin);
            descriptors.push({
              plugin: plugin,
              options: opts || {}
            });
          });

          cache.descriptors = descriptors;
          cache.id = this._cacheId;
          return descriptors;
        },

        /**
         * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
         * but in some cases, this reference can be changed by the user when updating options.
         * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
         * @private
         */
        _invalidate: function _invalidate(chart) {
          delete chart.$plugins;
        }
      };
      var core_scaleService = {
        // Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
        // use the new chart options to grab the correct scale
        constructors: {},
        // Use a registration function so that we can move to an ES6 map when we no longer need to support
        // old browsers
        // Scale config defaults
        defaults: {},
        registerScaleType: function registerScaleType(type, scaleConstructor, scaleDefaults) {
          this.constructors[type] = scaleConstructor;
          this.defaults[type] = helpers$1.clone(scaleDefaults);
        },
        getScaleConstructor: function getScaleConstructor(type) {
          return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
        },
        getScaleDefaults: function getScaleDefaults(type) {
          // Return the scale defaults merged with the global settings so that we always use the latest ones
          return this.defaults.hasOwnProperty(type) ? helpers$1.merge({}, [core_defaults.scale, this.defaults[type]]) : {};
        },
        updateScaleDefaults: function updateScaleDefaults(type, additions) {
          var me = this;

          if (me.defaults.hasOwnProperty(type)) {
            me.defaults[type] = helpers$1.extend(me.defaults[type], additions);
          }
        },
        addScalesToLayout: function addScalesToLayout(chart) {
          // Adds each scale to the chart.boxes array to be sized accordingly
          helpers$1.each(chart.scales, function (scale) {
            // Set ILayoutItem parameters for backwards compatibility
            scale.fullWidth = scale.options.fullWidth;
            scale.position = scale.options.position;
            scale.weight = scale.options.weight;
            core_layouts.addBox(chart, scale);
          });
        }
      };
      var valueOrDefault$8 = helpers$1.valueOrDefault;
      var getRtlHelper = helpers$1.rtl.getRtlAdapter;

      core_defaults._set('global', {
        tooltips: {
          enabled: true,
          custom: null,
          mode: 'nearest',
          position: 'average',
          intersect: true,
          backgroundColor: 'rgba(0,0,0,0.8)',
          titleFontStyle: 'bold',
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: '#fff',
          titleAlign: 'left',
          bodySpacing: 2,
          bodyFontColor: '#fff',
          bodyAlign: 'left',
          footerFontStyle: 'bold',
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: '#fff',
          footerAlign: 'left',
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: '#fff',
          displayColors: true,
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: 0,
          callbacks: {
            // Args are: (tooltipItems, data)
            beforeTitle: helpers$1.noop,
            title: function title(tooltipItems, data) {
              var title = '';
              var labels = data.labels;
              var labelCount = labels ? labels.length : 0;

              if (tooltipItems.length > 0) {
                var item = tooltipItems[0];

                if (item.label) {
                  title = item.label;
                } else if (item.xLabel) {
                  title = item.xLabel;
                } else if (labelCount > 0 && item.index < labelCount) {
                  title = labels[item.index];
                }
              }

              return title;
            },
            afterTitle: helpers$1.noop,
            // Args are: (tooltipItems, data)
            beforeBody: helpers$1.noop,
            // Args are: (tooltipItem, data)
            beforeLabel: helpers$1.noop,
            label: function label(tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';

              if (label) {
                label += ': ';
              }

              if (!helpers$1.isNullOrUndef(tooltipItem.value)) {
                label += tooltipItem.value;
              } else {
                label += tooltipItem.yLabel;
              }

              return label;
            },
            labelColor: function labelColor(tooltipItem, chart) {
              var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
              var activeElement = meta.data[tooltipItem.index];
              var view = activeElement._view;
              return {
                borderColor: view.borderColor,
                backgroundColor: view.backgroundColor
              };
            },
            labelTextColor: function labelTextColor() {
              return this._options.bodyFontColor;
            },
            afterLabel: helpers$1.noop,
            // Args are: (tooltipItems, data)
            afterBody: helpers$1.noop,
            // Args are: (tooltipItems, data)
            beforeFooter: helpers$1.noop,
            footer: helpers$1.noop,
            afterFooter: helpers$1.noop
          }
        }
      });

      var positioners = {
        /**
         * Average mode places the tooltip at the average position of the elements shown
         * @function Chart.Tooltip.positioners.average
         * @param elements {ChartElement[]} the elements being displayed in the tooltip
         * @returns {object} tooltip position
         */
        average: function average(elements) {
          if (!elements.length) {
            return false;
          }

          var i, len;
          var x = 0;
          var y = 0;
          var count = 0;

          for (i = 0, len = elements.length; i < len; ++i) {
            var el = elements[i];

            if (el && el.hasValue()) {
              var pos = el.tooltipPosition();
              x += pos.x;
              y += pos.y;
              ++count;
            }
          }

          return {
            x: x / count,
            y: y / count
          };
        },

        /**
         * Gets the tooltip position nearest of the item nearest to the event position
         * @function Chart.Tooltip.positioners.nearest
         * @param elements {Chart.Element[]} the tooltip elements
         * @param eventPosition {object} the position of the event in canvas coordinates
         * @returns {object} the tooltip position
         */
        nearest: function nearest(elements, eventPosition) {
          var x = eventPosition.x;
          var y = eventPosition.y;
          var minDistance = Number.POSITIVE_INFINITY;
          var i, len, nearestElement;

          for (i = 0, len = elements.length; i < len; ++i) {
            var el = elements[i];

            if (el && el.hasValue()) {
              var center = el.getCenterPoint();
              var d = helpers$1.distanceBetweenPoints(eventPosition, center);

              if (d < minDistance) {
                minDistance = d;
                nearestElement = el;
              }
            }
          }

          if (nearestElement) {
            var tp = nearestElement.tooltipPosition();
            x = tp.x;
            y = tp.y;
          }

          return {
            x: x,
            y: y
          };
        }
      }; // Helper to push or concat based on if the 2nd parameter is an array or not

      function pushOrConcat(base, toPush) {
        if (toPush) {
          if (helpers$1.isArray(toPush)) {
            // base = base.concat(toPush);
            Array.prototype.push.apply(base, toPush);
          } else {
            base.push(toPush);
          }
        }

        return base;
      }
      /**
       * Returns array of strings split by newline
       * @param {string} value - The value to split by newline.
       * @returns {string[]} value if newline present - Returned from String split() method
       * @function
       */


      function splitNewlines(str) {
        if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
          return str.split('\n');
        }

        return str;
      }
      /**
       * Private helper to create a tooltip item model
       * @param element - the chart element (point, arc, bar) to create the tooltip item for
       * @return new tooltip item
       */


      function createTooltipItem(element) {
        var xScale = element._xScale;
        var yScale = element._yScale || element._scale; // handle radar || polarArea charts

        var index = element._index;
        var datasetIndex = element._datasetIndex;

        var controller = element._chart.getDatasetMeta(datasetIndex).controller;

        var indexScale = controller._getIndexScale();

        var valueScale = controller._getValueScale();

        return {
          xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
          yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
          label: indexScale ? '' + indexScale.getLabelForIndex(index, datasetIndex) : '',
          value: valueScale ? '' + valueScale.getLabelForIndex(index, datasetIndex) : '',
          index: index,
          datasetIndex: datasetIndex,
          x: element._model.x,
          y: element._model.y
        };
      }
      /**
       * Helper to get the reset model for the tooltip
       * @param tooltipOpts {object} the tooltip options
       */


      function getBaseModel(tooltipOpts) {
        var globalDefaults = core_defaults.global;
        return {
          // Positioning
          xPadding: tooltipOpts.xPadding,
          yPadding: tooltipOpts.yPadding,
          xAlign: tooltipOpts.xAlign,
          yAlign: tooltipOpts.yAlign,
          // Drawing direction and text direction
          rtl: tooltipOpts.rtl,
          textDirection: tooltipOpts.textDirection,
          // Body
          bodyFontColor: tooltipOpts.bodyFontColor,
          _bodyFontFamily: valueOrDefault$8(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
          _bodyFontStyle: valueOrDefault$8(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
          _bodyAlign: tooltipOpts.bodyAlign,
          bodyFontSize: valueOrDefault$8(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
          bodySpacing: tooltipOpts.bodySpacing,
          // Title
          titleFontColor: tooltipOpts.titleFontColor,
          _titleFontFamily: valueOrDefault$8(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
          _titleFontStyle: valueOrDefault$8(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
          titleFontSize: valueOrDefault$8(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
          _titleAlign: tooltipOpts.titleAlign,
          titleSpacing: tooltipOpts.titleSpacing,
          titleMarginBottom: tooltipOpts.titleMarginBottom,
          // Footer
          footerFontColor: tooltipOpts.footerFontColor,
          _footerFontFamily: valueOrDefault$8(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
          _footerFontStyle: valueOrDefault$8(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
          footerFontSize: valueOrDefault$8(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
          _footerAlign: tooltipOpts.footerAlign,
          footerSpacing: tooltipOpts.footerSpacing,
          footerMarginTop: tooltipOpts.footerMarginTop,
          // Appearance
          caretSize: tooltipOpts.caretSize,
          cornerRadius: tooltipOpts.cornerRadius,
          backgroundColor: tooltipOpts.backgroundColor,
          opacity: 0,
          legendColorBackground: tooltipOpts.multiKeyBackground,
          displayColors: tooltipOpts.displayColors,
          borderColor: tooltipOpts.borderColor,
          borderWidth: tooltipOpts.borderWidth
        };
      }
      /**
       * Get the size of the tooltip
       */


      function getTooltipSize(tooltip, model) {
        var ctx = tooltip._chart.ctx;
        var height = model.yPadding * 2; // Tooltip Padding

        var width = 0; // Count of all lines in the body

        var body = model.body;
        var combinedBodyLength = body.reduce(function (count, bodyItem) {
          return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
        }, 0);
        combinedBodyLength += model.beforeBody.length + model.afterBody.length;
        var titleLineCount = model.title.length;
        var footerLineCount = model.footer.length;
        var titleFontSize = model.titleFontSize;
        var bodyFontSize = model.bodyFontSize;
        var footerFontSize = model.footerFontSize;
        height += titleLineCount * titleFontSize; // Title Lines

        height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing

        height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin

        height += combinedBodyLength * bodyFontSize; // Body Lines

        height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing

        height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin

        height += footerLineCount * footerFontSize; // Footer Lines

        height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing
        // Title width

        var widthPadding = 0;

        var maxLineWidth = function maxLineWidth(line) {
          width = Math.max(width, ctx.measureText(line).width + widthPadding);
        };

        ctx.font = helpers$1.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
        helpers$1.each(model.title, maxLineWidth); // Body width

        ctx.font = helpers$1.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
        helpers$1.each(model.beforeBody.concat(model.afterBody), maxLineWidth); // Body lines may include some extra width due to the color box

        widthPadding = model.displayColors ? bodyFontSize + 2 : 0;
        helpers$1.each(body, function (bodyItem) {
          helpers$1.each(bodyItem.before, maxLineWidth);
          helpers$1.each(bodyItem.lines, maxLineWidth);
          helpers$1.each(bodyItem.after, maxLineWidth);
        }); // Reset back to 0

        widthPadding = 0; // Footer width

        ctx.font = helpers$1.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
        helpers$1.each(model.footer, maxLineWidth); // Add padding

        width += 2 * model.xPadding;
        return {
          width: width,
          height: height
        };
      }
      /**
       * Helper to get the alignment of a tooltip given the size
       */


      function determineAlignment(tooltip, size) {
        var model = tooltip._model;
        var chart = tooltip._chart;
        var chartArea = tooltip._chart.chartArea;
        var xAlign = 'center';
        var yAlign = 'center';

        if (model.y < size.height) {
          yAlign = 'top';
        } else if (model.y > chart.height - size.height) {
          yAlign = 'bottom';
        }

        var lf, rf; // functions to determine left, right alignment

        var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart

        var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges

        var midX = (chartArea.left + chartArea.right) / 2;
        var midY = (chartArea.top + chartArea.bottom) / 2;

        if (yAlign === 'center') {
          lf = function lf(x) {
            return x <= midX;
          };

          rf = function rf(x) {
            return x > midX;
          };
        } else {
          lf = function lf(x) {
            return x <= size.width / 2;
          };

          rf = function rf(x) {
            return x >= chart.width - size.width / 2;
          };
        }

        olf = function olf(x) {
          return x + size.width + model.caretSize + model.caretPadding > chart.width;
        };

        orf = function orf(x) {
          return x - size.width - model.caretSize - model.caretPadding < 0;
        };

        yf = function yf(y) {
          return y <= midY ? 'top' : 'bottom';
        };

        if (lf(model.x)) {
          xAlign = 'left'; // Is tooltip too wide and goes over the right side of the chart.?

          if (olf(model.x)) {
            xAlign = 'center';
            yAlign = yf(model.y);
          }
        } else if (rf(model.x)) {
          xAlign = 'right'; // Is tooltip too wide and goes outside left edge of canvas?

          if (orf(model.x)) {
            xAlign = 'center';
            yAlign = yf(model.y);
          }
        }

        var opts = tooltip._options;
        return {
          xAlign: opts.xAlign ? opts.xAlign : xAlign,
          yAlign: opts.yAlign ? opts.yAlign : yAlign
        };
      }
      /**
       * Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
       */


      function getBackgroundPoint(vm, size, alignment, chart) {
        // Background Position
        var x = vm.x;
        var y = vm.y;
        var caretSize = vm.caretSize;
        var caretPadding = vm.caretPadding;
        var cornerRadius = vm.cornerRadius;
        var xAlign = alignment.xAlign;
        var yAlign = alignment.yAlign;
        var paddingAndSize = caretSize + caretPadding;
        var radiusAndPadding = cornerRadius + caretPadding;

        if (xAlign === 'right') {
          x -= size.width;
        } else if (xAlign === 'center') {
          x -= size.width / 2;

          if (x + size.width > chart.width) {
            x = chart.width - size.width;
          }

          if (x < 0) {
            x = 0;
          }
        }

        if (yAlign === 'top') {
          y += paddingAndSize;
        } else if (yAlign === 'bottom') {
          y -= size.height + paddingAndSize;
        } else {
          y -= size.height / 2;
        }

        if (yAlign === 'center') {
          if (xAlign === 'left') {
            x += paddingAndSize;
          } else if (xAlign === 'right') {
            x -= paddingAndSize;
          }
        } else if (xAlign === 'left') {
          x -= radiusAndPadding;
        } else if (xAlign === 'right') {
          x += radiusAndPadding;
        }

        return {
          x: x,
          y: y
        };
      }

      function getAlignedX(vm, align) {
        return align === 'center' ? vm.x + vm.width / 2 : align === 'right' ? vm.x + vm.width - vm.xPadding : vm.x + vm.xPadding;
      }
      /**
       * Helper to build before and after body lines
       */


      function getBeforeAfterBodyLines(callback) {
        return pushOrConcat([], splitNewlines(callback));
      }

      var exports$4 = core_element.extend({
        initialize: function initialize() {
          this._model = getBaseModel(this._options);
          this._lastActive = [];
        },
        // Get the title
        // Args are: (tooltipItem, data)
        getTitle: function getTitle() {
          var me = this;
          var opts = me._options;
          var callbacks = opts.callbacks;
          var beforeTitle = callbacks.beforeTitle.apply(me, arguments);
          var title = callbacks.title.apply(me, arguments);
          var afterTitle = callbacks.afterTitle.apply(me, arguments);
          var lines = [];
          lines = pushOrConcat(lines, splitNewlines(beforeTitle));
          lines = pushOrConcat(lines, splitNewlines(title));
          lines = pushOrConcat(lines, splitNewlines(afterTitle));
          return lines;
        },
        // Args are: (tooltipItem, data)
        getBeforeBody: function getBeforeBody() {
          return getBeforeAfterBodyLines(this._options.callbacks.beforeBody.apply(this, arguments));
        },
        // Args are: (tooltipItem, data)
        getBody: function getBody(tooltipItems, data) {
          var me = this;
          var callbacks = me._options.callbacks;
          var bodyItems = [];
          helpers$1.each(tooltipItems, function (tooltipItem) {
            var bodyItem = {
              before: [],
              lines: [],
              after: []
            };
            pushOrConcat(bodyItem.before, splitNewlines(callbacks.beforeLabel.call(me, tooltipItem, data)));
            pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
            pushOrConcat(bodyItem.after, splitNewlines(callbacks.afterLabel.call(me, tooltipItem, data)));
            bodyItems.push(bodyItem);
          });
          return bodyItems;
        },
        // Args are: (tooltipItem, data)
        getAfterBody: function getAfterBody() {
          return getBeforeAfterBodyLines(this._options.callbacks.afterBody.apply(this, arguments));
        },
        // Get the footer and beforeFooter and afterFooter lines
        // Args are: (tooltipItem, data)
        getFooter: function getFooter() {
          var me = this;
          var callbacks = me._options.callbacks;
          var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
          var footer = callbacks.footer.apply(me, arguments);
          var afterFooter = callbacks.afterFooter.apply(me, arguments);
          var lines = [];
          lines = pushOrConcat(lines, splitNewlines(beforeFooter));
          lines = pushOrConcat(lines, splitNewlines(footer));
          lines = pushOrConcat(lines, splitNewlines(afterFooter));
          return lines;
        },
        update: function update(changed) {
          var me = this;
          var opts = me._options; // Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
          // that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
          // which breaks any animations.

          var existingModel = me._model;
          var model = me._model = getBaseModel(opts);
          var active = me._active;
          var data = me._data; // In the case where active.length === 0 we need to keep these at existing values for good animations

          var alignment = {
            xAlign: existingModel.xAlign,
            yAlign: existingModel.yAlign
          };
          var backgroundPoint = {
            x: existingModel.x,
            y: existingModel.y
          };
          var tooltipSize = {
            width: existingModel.width,
            height: existingModel.height
          };
          var tooltipPosition = {
            x: existingModel.caretX,
            y: existingModel.caretY
          };
          var i, len;

          if (active.length) {
            model.opacity = 1;
            var labelColors = [];
            var labelTextColors = [];
            tooltipPosition = positioners[opts.position].call(me, active, me._eventPosition);
            var tooltipItems = [];

            for (i = 0, len = active.length; i < len; ++i) {
              tooltipItems.push(createTooltipItem(active[i]));
            } // If the user provided a filter function, use it to modify the tooltip items


            if (opts.filter) {
              tooltipItems = tooltipItems.filter(function (a) {
                return opts.filter(a, data);
              });
            } // If the user provided a sorting function, use it to modify the tooltip items


            if (opts.itemSort) {
              tooltipItems = tooltipItems.sort(function (a, b) {
                return opts.itemSort(a, b, data);
              });
            } // Determine colors for boxes


            helpers$1.each(tooltipItems, function (tooltipItem) {
              labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, me._chart));
              labelTextColors.push(opts.callbacks.labelTextColor.call(me, tooltipItem, me._chart));
            }); // Build the Text Lines

            model.title = me.getTitle(tooltipItems, data);
            model.beforeBody = me.getBeforeBody(tooltipItems, data);
            model.body = me.getBody(tooltipItems, data);
            model.afterBody = me.getAfterBody(tooltipItems, data);
            model.footer = me.getFooter(tooltipItems, data); // Initial positioning and colors

            model.x = tooltipPosition.x;
            model.y = tooltipPosition.y;
            model.caretPadding = opts.caretPadding;
            model.labelColors = labelColors;
            model.labelTextColors = labelTextColors; // data points

            model.dataPoints = tooltipItems; // We need to determine alignment of the tooltip

            tooltipSize = getTooltipSize(this, model);
            alignment = determineAlignment(this, tooltipSize); // Final Size and Position

            backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment, me._chart);
          } else {
            model.opacity = 0;
          }

          model.xAlign = alignment.xAlign;
          model.yAlign = alignment.yAlign;
          model.x = backgroundPoint.x;
          model.y = backgroundPoint.y;
          model.width = tooltipSize.width;
          model.height = tooltipSize.height; // Point where the caret on the tooltip points to

          model.caretX = tooltipPosition.x;
          model.caretY = tooltipPosition.y;
          me._model = model;

          if (changed && opts.custom) {
            opts.custom.call(me, model);
          }

          return me;
        },
        drawCaret: function drawCaret(tooltipPoint, size) {
          var ctx = this._chart.ctx;
          var vm = this._view;
          var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);
          ctx.lineTo(caretPosition.x1, caretPosition.y1);
          ctx.lineTo(caretPosition.x2, caretPosition.y2);
          ctx.lineTo(caretPosition.x3, caretPosition.y3);
        },
        getCaretPosition: function getCaretPosition(tooltipPoint, size, vm) {
          var x1, x2, x3, y1, y2, y3;
          var caretSize = vm.caretSize;
          var cornerRadius = vm.cornerRadius;
          var xAlign = vm.xAlign;
          var yAlign = vm.yAlign;
          var ptX = tooltipPoint.x;
          var ptY = tooltipPoint.y;
          var width = size.width;
          var height = size.height;

          if (yAlign === 'center') {
            y2 = ptY + height / 2;

            if (xAlign === 'left') {
              x1 = ptX;
              x2 = x1 - caretSize;
              x3 = x1;
              y1 = y2 + caretSize;
              y3 = y2 - caretSize;
            } else {
              x1 = ptX + width;
              x2 = x1 + caretSize;
              x3 = x1;
              y1 = y2 - caretSize;
              y3 = y2 + caretSize;
            }
          } else {
            if (xAlign === 'left') {
              x2 = ptX + cornerRadius + caretSize;
              x1 = x2 - caretSize;
              x3 = x2 + caretSize;
            } else if (xAlign === 'right') {
              x2 = ptX + width - cornerRadius - caretSize;
              x1 = x2 - caretSize;
              x3 = x2 + caretSize;
            } else {
              x2 = vm.caretX;
              x1 = x2 - caretSize;
              x3 = x2 + caretSize;
            }

            if (yAlign === 'top') {
              y1 = ptY;
              y2 = y1 - caretSize;
              y3 = y1;
            } else {
              y1 = ptY + height;
              y2 = y1 + caretSize;
              y3 = y1; // invert drawing order

              var tmp = x3;
              x3 = x1;
              x1 = tmp;
            }
          }

          return {
            x1: x1,
            x2: x2,
            x3: x3,
            y1: y1,
            y2: y2,
            y3: y3
          };
        },
        drawTitle: function drawTitle(pt, vm, ctx) {
          var title = vm.title;
          var length = title.length;
          var titleFontSize, titleSpacing, i;

          if (length) {
            var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);
            pt.x = getAlignedX(vm, vm._titleAlign);
            ctx.textAlign = rtlHelper.textAlign(vm._titleAlign);
            ctx.textBaseline = 'middle';
            titleFontSize = vm.titleFontSize;
            titleSpacing = vm.titleSpacing;
            ctx.fillStyle = vm.titleFontColor;
            ctx.font = helpers$1.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

            for (i = 0; i < length; ++i) {
              ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFontSize / 2);
              pt.y += titleFontSize + titleSpacing; // Line Height and spacing

              if (i + 1 === length) {
                pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
              }
            }
          }
        },
        drawBody: function drawBody(pt, vm, ctx) {
          var bodyFontSize = vm.bodyFontSize;
          var bodySpacing = vm.bodySpacing;
          var bodyAlign = vm._bodyAlign;
          var body = vm.body;
          var drawColorBoxes = vm.displayColors;
          var xLinePadding = 0;
          var colorX = drawColorBoxes ? getAlignedX(vm, 'left') : 0;
          var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

          var fillLineOfText = function fillLineOfText(line) {
            ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyFontSize / 2);
            pt.y += bodyFontSize + bodySpacing;
          };

          var bodyItem, textColor, labelColors, lines, i, j, ilen, jlen;
          var bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
          ctx.textAlign = bodyAlign;
          ctx.textBaseline = 'middle';
          ctx.font = helpers$1.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
          pt.x = getAlignedX(vm, bodyAlignForCalculation); // Before body lines

          ctx.fillStyle = vm.bodyFontColor;
          helpers$1.each(vm.beforeBody, fillLineOfText);
          xLinePadding = drawColorBoxes && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? bodyFontSize / 2 + 1 : bodyFontSize + 2 : 0; // Draw body lines now

          for (i = 0, ilen = body.length; i < ilen; ++i) {
            bodyItem = body[i];
            textColor = vm.labelTextColors[i];
            labelColors = vm.labelColors[i];
            ctx.fillStyle = textColor;
            helpers$1.each(bodyItem.before, fillLineOfText);
            lines = bodyItem.lines;

            for (j = 0, jlen = lines.length; j < jlen; ++j) {
              // Draw Legend-like boxes if needed
              if (drawColorBoxes) {
                var rtlColorX = rtlHelper.x(colorX); // Fill a white rect so that colours merge nicely if the opacity is < 1

                ctx.fillStyle = vm.legendColorBackground;
                ctx.fillRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize); // Border

                ctx.lineWidth = 1;
                ctx.strokeStyle = labelColors.borderColor;
                ctx.strokeRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize); // Inner square

                ctx.fillStyle = labelColors.backgroundColor;
                ctx.fillRect(rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), bodyFontSize - 2), pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
                ctx.fillStyle = textColor;
              }

              fillLineOfText(lines[j]);
            }

            helpers$1.each(bodyItem.after, fillLineOfText);
          } // Reset back to 0 for after body


          xLinePadding = 0; // After body lines

          helpers$1.each(vm.afterBody, fillLineOfText);
          pt.y -= bodySpacing; // Remove last body spacing
        },
        drawFooter: function drawFooter(pt, vm, ctx) {
          var footer = vm.footer;
          var length = footer.length;
          var footerFontSize, i;

          if (length) {
            var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);
            pt.x = getAlignedX(vm, vm._footerAlign);
            pt.y += vm.footerMarginTop;
            ctx.textAlign = rtlHelper.textAlign(vm._footerAlign);
            ctx.textBaseline = 'middle';
            footerFontSize = vm.footerFontSize;
            ctx.fillStyle = vm.footerFontColor;
            ctx.font = helpers$1.fontString(footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

            for (i = 0; i < length; ++i) {
              ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFontSize / 2);
              pt.y += footerFontSize + vm.footerSpacing;
            }
          }
        },
        drawBackground: function drawBackground(pt, vm, ctx, tooltipSize) {
          ctx.fillStyle = vm.backgroundColor;
          ctx.strokeStyle = vm.borderColor;
          ctx.lineWidth = vm.borderWidth;
          var xAlign = vm.xAlign;
          var yAlign = vm.yAlign;
          var x = pt.x;
          var y = pt.y;
          var width = tooltipSize.width;
          var height = tooltipSize.height;
          var radius = vm.cornerRadius;
          ctx.beginPath();
          ctx.moveTo(x + radius, y);

          if (yAlign === 'top') {
            this.drawCaret(pt, tooltipSize);
          }

          ctx.lineTo(x + width - radius, y);
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius);

          if (yAlign === 'center' && xAlign === 'right') {
            this.drawCaret(pt, tooltipSize);
          }

          ctx.lineTo(x + width, y + height - radius);
          ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

          if (yAlign === 'bottom') {
            this.drawCaret(pt, tooltipSize);
          }

          ctx.lineTo(x + radius, y + height);
          ctx.quadraticCurveTo(x, y + height, x, y + height - radius);

          if (yAlign === 'center' && xAlign === 'left') {
            this.drawCaret(pt, tooltipSize);
          }

          ctx.lineTo(x, y + radius);
          ctx.quadraticCurveTo(x, y, x + radius, y);
          ctx.closePath();
          ctx.fill();

          if (vm.borderWidth > 0) {
            ctx.stroke();
          }
        },
        draw: function draw() {
          var ctx = this._chart.ctx;
          var vm = this._view;

          if (vm.opacity === 0) {
            return;
          }

          var tooltipSize = {
            width: vm.width,
            height: vm.height
          };
          var pt = {
            x: vm.x,
            y: vm.y
          }; // IE11/Edge does not like very small opacities, so snap to 0

          var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity; // Truthy/falsey value for empty tooltip

          var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;

          if (this._options.enabled && hasTooltipContent) {
            ctx.save();
            ctx.globalAlpha = opacity; // Draw Background

            this.drawBackground(pt, vm, ctx, tooltipSize); // Draw Title, Body, and Footer

            pt.y += vm.yPadding;
            helpers$1.rtl.overrideTextDirection(ctx, vm.textDirection); // Titles

            this.drawTitle(pt, vm, ctx); // Body

            this.drawBody(pt, vm, ctx); // Footer

            this.drawFooter(pt, vm, ctx);
            helpers$1.rtl.restoreTextDirection(ctx, vm.textDirection);
            ctx.restore();
          }
        },

        /**
         * Handle an event
         * @private
         * @param {IEvent} event - The event to handle
         * @returns {boolean} true if the tooltip changed
         */
        handleEvent: function handleEvent(e) {
          var me = this;
          var options = me._options;
          var changed = false;
          me._lastActive = me._lastActive || []; // Find Active Elements for tooltips

          if (e.type === 'mouseout') {
            me._active = [];
          } else {
            me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);

            if (options.reverse) {
              me._active.reverse();
            }
          } // Remember Last Actives


          changed = !helpers$1.arrayEquals(me._active, me._lastActive); // Only handle target event on tooltip change

          if (changed) {
            me._lastActive = me._active;

            if (options.enabled || options.custom) {
              me._eventPosition = {
                x: e.x,
                y: e.y
              };
              me.update(true);
              me.pivot();
            }
          }

          return changed;
        }
      });
      /**
       * @namespace Chart.Tooltip.positioners
       */

      var positioners_1 = positioners;
      var core_tooltip = exports$4;
      core_tooltip.positioners = positioners_1;
      var valueOrDefault$9 = helpers$1.valueOrDefault;

      core_defaults._set('global', {
        elements: {},
        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
        hover: {
          onHover: null,
          mode: 'nearest',
          intersect: true,
          animationDuration: 400
        },
        onClick: null,
        maintainAspectRatio: true,
        responsive: true,
        responsiveAnimationDuration: 0
      });
      /**
       * Recursively merge the given config objects representing the `scales` option
       * by incorporating scale defaults in `xAxes` and `yAxes` array items, then
       * returns a deep copy of the result, thus doesn't alter inputs.
       */


      function mergeScaleConfig()
      /* config objects ... */
      {
        return helpers$1.merge({}, [].slice.call(arguments), {
          merger: function merger(key, target, source, options) {
            if (key === 'xAxes' || key === 'yAxes') {
              var slen = source[key].length;
              var i, type, scale;

              if (!target[key]) {
                target[key] = [];
              }

              for (i = 0; i < slen; ++i) {
                scale = source[key][i];
                type = valueOrDefault$9(scale.type, key === 'xAxes' ? 'category' : 'linear');

                if (i >= target[key].length) {
                  target[key].push({});
                }

                if (!target[key][i].type || scale.type && scale.type !== target[key][i].type) {
                  // new/untyped scale or type changed: let's apply the new defaults
                  // then merge source scale to correctly overwrite the defaults.
                  helpers$1.merge(target[key][i], [core_scaleService.getScaleDefaults(type), scale]);
                } else {
                  // scales type are the same
                  helpers$1.merge(target[key][i], scale);
                }
              }
            } else {
              helpers$1._merger(key, target, source, options);
            }
          }
        });
      }
      /**
       * Recursively merge the given config objects as the root options by handling
       * default scale options for the `scales` and `scale` properties, then returns
       * a deep copy of the result, thus doesn't alter inputs.
       */


      function mergeConfig()
      /* config objects ... */
      {
        return helpers$1.merge({}, [].slice.call(arguments), {
          merger: function merger(key, target, source, options) {
            var tval = target[key] || {};
            var sval = source[key];

            if (key === 'scales') {
              // scale config merging is complex. Add our own function here for that
              target[key] = mergeScaleConfig(tval, sval);
            } else if (key === 'scale') {
              // used in polar area & radar charts since there is only one scale
              target[key] = helpers$1.merge(tval, [core_scaleService.getScaleDefaults(sval.type), sval]);
            } else {
              helpers$1._merger(key, target, source, options);
            }
          }
        });
      }

      function initConfig(config) {
        config = config || {}; // Do NOT use mergeConfig for the data object because this method merges arrays
        // and so would change references to labels and datasets, preventing data updates.

        var data = config.data = config.data || {};
        data.datasets = data.datasets || [];
        data.labels = data.labels || [];
        config.options = mergeConfig(core_defaults.global, core_defaults[config.type], config.options || {});
        return config;
      }

      function updateConfig(chart) {
        var newOptions = chart.options;
        helpers$1.each(chart.scales, function (scale) {
          core_layouts.removeBox(chart, scale);
        });
        newOptions = mergeConfig(core_defaults.global, core_defaults[chart.config.type], newOptions);
        chart.options = chart.config.options = newOptions;
        chart.ensureScalesHaveIDs();
        chart.buildOrUpdateScales(); // Tooltip

        chart.tooltip._options = newOptions.tooltips;
        chart.tooltip.initialize();
      }

      function nextAvailableScaleId(axesOpts, prefix, index) {
        var id;

        var hasId = function hasId(obj) {
          return obj.id === id;
        };

        do {
          id = prefix + index++;
        } while (helpers$1.findIndex(axesOpts, hasId) >= 0);

        return id;
      }

      function positionIsHorizontal(position) {
        return position === 'top' || position === 'bottom';
      }

      function compare2Level(l1, l2) {
        return function (a, b) {
          return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
        };
      }

      var Chart = function Chart(item, config) {
        this.construct(item, config);
        return this;
      };

      helpers$1.extend(Chart.prototype,
      /** @lends Chart */
      {
        /**
         * @private
         */
        construct: function construct(item, config) {
          var me = this;
          config = initConfig(config);
          var context = platform.acquireContext(item, config);
          var canvas = context && context.canvas;
          var height = canvas && canvas.height;
          var width = canvas && canvas.width;
          me.id = helpers$1.uid();
          me.ctx = context;
          me.canvas = canvas;
          me.config = config;
          me.width = width;
          me.height = height;
          me.aspectRatio = height ? width / height : null;
          me.options = config.options;
          me._bufferedRender = false;
          me._layers = [];
          /**
           * Provided for backward compatibility, Chart and Chart.Controller have been merged,
           * the "instance" still need to be defined since it might be called from plugins.
           * @prop Chart#chart
           * @deprecated since version 2.6.0
           * @todo remove at version 3
           * @private
           */

          me.chart = me;
          me.controller = me; // chart.chart.controller #inception
          // Add the chart instance to the global namespace

          Chart.instances[me.id] = me; // Define alias to the config data: `chart.data === chart.config.data`

          Object.defineProperty(me, 'data', {
            get: function get() {
              return me.config.data;
            },
            set: function set(value) {
              me.config.data = value;
            }
          });

          if (!context || !canvas) {
            // The given item is not a compatible context2d element, let's return before finalizing
            // the chart initialization but after setting basic chart / controller properties that
            // can help to figure out that the chart is not valid (e.g chart.canvas !== null);
            // https://github.com/chartjs/Chart.js/issues/2807
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
          }

          me.initialize();
          me.update();
        },

        /**
         * @private
         */
        initialize: function initialize() {
          var me = this; // Before init plugin notification

          core_plugins.notify(me, 'beforeInit');
          helpers$1.retinaScale(me, me.options.devicePixelRatio);
          me.bindEvents();

          if (me.options.responsive) {
            // Initial resize before chart draws (must be silent to preserve initial animations).
            me.resize(true);
          }

          me.initToolTip(); // After init plugin notification

          core_plugins.notify(me, 'afterInit');
          return me;
        },
        clear: function clear() {
          helpers$1.canvas.clear(this);
          return this;
        },
        stop: function stop() {
          // Stops any current animation loop occurring
          core_animations.cancelAnimation(this);
          return this;
        },
        resize: function resize(silent) {
          var me = this;
          var options = me.options;
          var canvas = me.canvas;
          var aspectRatio = options.maintainAspectRatio && me.aspectRatio || null; // the canvas render width and height will be casted to integers so make sure that
          // the canvas display style uses the same integer values to avoid blurring effect.
          // Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collapsed

          var newWidth = Math.max(0, Math.floor(helpers$1.getMaximumWidth(canvas)));
          var newHeight = Math.max(0, Math.floor(aspectRatio ? newWidth / aspectRatio : helpers$1.getMaximumHeight(canvas)));

          if (me.width === newWidth && me.height === newHeight) {
            return;
          }

          canvas.width = me.width = newWidth;
          canvas.height = me.height = newHeight;
          canvas.style.width = newWidth + 'px';
          canvas.style.height = newHeight + 'px';
          helpers$1.retinaScale(me, options.devicePixelRatio);

          if (!silent) {
            // Notify any plugins about the resize
            var newSize = {
              width: newWidth,
              height: newHeight
            };
            core_plugins.notify(me, 'resize', [newSize]); // Notify of resize

            if (options.onResize) {
              options.onResize(me, newSize);
            }

            me.stop();
            me.update({
              duration: options.responsiveAnimationDuration
            });
          }
        },
        ensureScalesHaveIDs: function ensureScalesHaveIDs() {
          var options = this.options;
          var scalesOptions = options.scales || {};
          var scaleOptions = options.scale;
          helpers$1.each(scalesOptions.xAxes, function (xAxisOptions, index) {
            if (!xAxisOptions.id) {
              xAxisOptions.id = nextAvailableScaleId(scalesOptions.xAxes, 'x-axis-', index);
            }
          });
          helpers$1.each(scalesOptions.yAxes, function (yAxisOptions, index) {
            if (!yAxisOptions.id) {
              yAxisOptions.id = nextAvailableScaleId(scalesOptions.yAxes, 'y-axis-', index);
            }
          });

          if (scaleOptions) {
            scaleOptions.id = scaleOptions.id || 'scale';
          }
        },

        /**
         * Builds a map of scale ID to scale object for future lookup.
         */
        buildOrUpdateScales: function buildOrUpdateScales() {
          var me = this;
          var options = me.options;
          var scales = me.scales || {};
          var items = [];
          var updated = Object.keys(scales).reduce(function (obj, id) {
            obj[id] = false;
            return obj;
          }, {});

          if (options.scales) {
            items = items.concat((options.scales.xAxes || []).map(function (xAxisOptions) {
              return {
                options: xAxisOptions,
                dtype: 'category',
                dposition: 'bottom'
              };
            }), (options.scales.yAxes || []).map(function (yAxisOptions) {
              return {
                options: yAxisOptions,
                dtype: 'linear',
                dposition: 'left'
              };
            }));
          }

          if (options.scale) {
            items.push({
              options: options.scale,
              dtype: 'radialLinear',
              isDefault: true,
              dposition: 'chartArea'
            });
          }

          helpers$1.each(items, function (item) {
            var scaleOptions = item.options;
            var id = scaleOptions.id;
            var scaleType = valueOrDefault$9(scaleOptions.type, item.dtype);

            if (positionIsHorizontal(scaleOptions.position) !== positionIsHorizontal(item.dposition)) {
              scaleOptions.position = item.dposition;
            }

            updated[id] = true;
            var scale = null;

            if (id in scales && scales[id].type === scaleType) {
              scale = scales[id];
              scale.options = scaleOptions;
              scale.ctx = me.ctx;
              scale.chart = me;
            } else {
              var scaleClass = core_scaleService.getScaleConstructor(scaleType);

              if (!scaleClass) {
                return;
              }

              scale = new scaleClass({
                id: id,
                type: scaleType,
                options: scaleOptions,
                ctx: me.ctx,
                chart: me
              });
              scales[scale.id] = scale;
            }

            scale.mergeTicksOptions(); // TODO(SB): I think we should be able to remove this custom case (options.scale)
            // and consider it as a regular scale part of the "scales"" map only! This would
            // make the logic easier and remove some useless? custom code.

            if (item.isDefault) {
              me.scale = scale;
            }
          }); // clear up discarded scales

          helpers$1.each(updated, function (hasUpdated, id) {
            if (!hasUpdated) {
              delete scales[id];
            }
          });
          me.scales = scales;
          core_scaleService.addScalesToLayout(this);
        },
        buildOrUpdateControllers: function buildOrUpdateControllers() {
          var me = this;
          var newControllers = [];
          var datasets = me.data.datasets;
          var i, ilen;

          for (i = 0, ilen = datasets.length; i < ilen; i++) {
            var dataset = datasets[i];
            var meta = me.getDatasetMeta(i);
            var type = dataset.type || me.config.type;

            if (meta.type && meta.type !== type) {
              me.destroyDatasetMeta(i);
              meta = me.getDatasetMeta(i);
            }

            meta.type = type;
            meta.order = dataset.order || 0;
            meta.index = i;

            if (meta.controller) {
              meta.controller.updateIndex(i);
              meta.controller.linkScales();
            } else {
              var ControllerClass = controllers[meta.type];

              if (ControllerClass === undefined) {
                throw new Error('"' + meta.type + '" is not a chart type.');
              }

              meta.controller = new ControllerClass(me, i);
              newControllers.push(meta.controller);
            }
          }

          return newControllers;
        },

        /**
         * Reset the elements of all datasets
         * @private
         */
        resetElements: function resetElements() {
          var me = this;
          helpers$1.each(me.data.datasets, function (dataset, datasetIndex) {
            me.getDatasetMeta(datasetIndex).controller.reset();
          }, me);
        },

        /**
        * Resets the chart back to it's state before the initial animation
        */
        reset: function reset() {
          this.resetElements();
          this.tooltip.initialize();
        },
        update: function update(config) {
          var me = this;
          var i, ilen;

          if (!config || typeof config !== 'object') {
            // backwards compatibility
            config = {
              duration: config,
              lazy: arguments[1]
            };
          }

          updateConfig(me); // plugins options references might have change, let's invalidate the cache
          // https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167

          core_plugins._invalidate(me);

          if (core_plugins.notify(me, 'beforeUpdate') === false) {
            return;
          } // In case the entire data object changed


          me.tooltip._data = me.data; // Make sure dataset controllers are updated and new controllers are reset

          var newControllers = me.buildOrUpdateControllers(); // Make sure all dataset controllers have correct meta data counts

          for (i = 0, ilen = me.data.datasets.length; i < ilen; i++) {
            me.getDatasetMeta(i).controller.buildOrUpdateElements();
          }

          me.updateLayout(); // Can only reset the new controllers after the scales have been updated

          if (me.options.animation && me.options.animation.duration) {
            helpers$1.each(newControllers, function (controller) {
              controller.reset();
            });
          }

          me.updateDatasets(); // Need to reset tooltip in case it is displayed with elements that are removed
          // after update.

          me.tooltip.initialize(); // Last active contains items that were previously in the tooltip.
          // When we reset the tooltip, we need to clear it

          me.lastActive = []; // Do this before render so that any plugins that need final scale updates can use it

          core_plugins.notify(me, 'afterUpdate');

          me._layers.sort(compare2Level('z', '_idx'));

          if (me._bufferedRender) {
            me._bufferedRequest = {
              duration: config.duration,
              easing: config.easing,
              lazy: config.lazy
            };
          } else {
            me.render(config);
          }
        },

        /**
         * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
         * hook, in which case, plugins will not be called on `afterLayout`.
         * @private
         */
        updateLayout: function updateLayout() {
          var me = this;

          if (core_plugins.notify(me, 'beforeLayout') === false) {
            return;
          }

          core_layouts.update(this, this.width, this.height);
          me._layers = [];
          helpers$1.each(me.boxes, function (box) {
            // _configure is called twice, once in core.scale.update and once here.
            // Here the boxes are fully updated and at their final positions.
            if (box._configure) {
              box._configure();
            }

            me._layers.push.apply(me._layers, box._layers());
          }, me);

          me._layers.forEach(function (item, index) {
            item._idx = index;
          });
          /**
           * Provided for backward compatibility, use `afterLayout` instead.
           * @method IPlugin#afterScaleUpdate
           * @deprecated since version 2.5.0
           * @todo remove at version 3
           * @private
           */


          core_plugins.notify(me, 'afterScaleUpdate');
          core_plugins.notify(me, 'afterLayout');
        },

        /**
         * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
         * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
         * @private
         */
        updateDatasets: function updateDatasets() {
          var me = this;

          if (core_plugins.notify(me, 'beforeDatasetsUpdate') === false) {
            return;
          }

          for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
            me.updateDataset(i);
          }

          core_plugins.notify(me, 'afterDatasetsUpdate');
        },

        /**
         * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
         * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
         * @private
         */
        updateDataset: function updateDataset(index) {
          var me = this;
          var meta = me.getDatasetMeta(index);
          var args = {
            meta: meta,
            index: index
          };

          if (core_plugins.notify(me, 'beforeDatasetUpdate', [args]) === false) {
            return;
          }

          meta.controller._update();

          core_plugins.notify(me, 'afterDatasetUpdate', [args]);
        },
        render: function render(config) {
          var me = this;

          if (!config || typeof config !== 'object') {
            // backwards compatibility
            config = {
              duration: config,
              lazy: arguments[1]
            };
          }

          var animationOptions = me.options.animation;
          var duration = valueOrDefault$9(config.duration, animationOptions && animationOptions.duration);
          var lazy = config.lazy;

          if (core_plugins.notify(me, 'beforeRender') === false) {
            return;
          }

          var onComplete = function onComplete(animation) {
            core_plugins.notify(me, 'afterRender');
            helpers$1.callback(animationOptions && animationOptions.onComplete, [animation], me);
          };

          if (animationOptions && duration) {
            var animation = new core_animation({
              numSteps: duration / 16.66,
              // 60 fps
              easing: config.easing || animationOptions.easing,
              render: function render(chart, animationObject) {
                var easingFunction = helpers$1.easing.effects[animationObject.easing];
                var currentStep = animationObject.currentStep;
                var stepDecimal = currentStep / animationObject.numSteps;
                chart.draw(easingFunction(stepDecimal), stepDecimal, currentStep);
              },
              onAnimationProgress: animationOptions.onProgress,
              onAnimationComplete: onComplete
            });
            core_animations.addAnimation(me, animation, duration, lazy);
          } else {
            me.draw(); // See https://github.com/chartjs/Chart.js/issues/3781

            onComplete(new core_animation({
              numSteps: 0,
              chart: me
            }));
          }

          return me;
        },
        draw: function draw(easingValue) {
          var me = this;
          var i, layers;
          me.clear();

          if (helpers$1.isNullOrUndef(easingValue)) {
            easingValue = 1;
          }

          me.transition(easingValue);

          if (me.width <= 0 || me.height <= 0) {
            return;
          }

          if (core_plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
            return;
          } // Because of plugin hooks (before/afterDatasetsDraw), datasets can't
          // currently be part of layers. Instead, we draw
          // layers <= 0 before(default, backward compat), and the rest after


          layers = me._layers;

          for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
            layers[i].draw(me.chartArea);
          }

          me.drawDatasets(easingValue); // Rest of layers

          for (; i < layers.length; ++i) {
            layers[i].draw(me.chartArea);
          }

          me._drawTooltip(easingValue);

          core_plugins.notify(me, 'afterDraw', [easingValue]);
        },

        /**
         * @private
         */
        transition: function transition(easingValue) {
          var me = this;

          for (var i = 0, ilen = (me.data.datasets || []).length; i < ilen; ++i) {
            if (me.isDatasetVisible(i)) {
              me.getDatasetMeta(i).controller.transition(easingValue);
            }
          }

          me.tooltip.transition(easingValue);
        },

        /**
         * @private
         */
        _getSortedDatasetMetas: function _getSortedDatasetMetas(filterVisible) {
          var me = this;
          var datasets = me.data.datasets || [];
          var result = [];
          var i, ilen;

          for (i = 0, ilen = datasets.length; i < ilen; ++i) {
            if (!filterVisible || me.isDatasetVisible(i)) {
              result.push(me.getDatasetMeta(i));
            }
          }

          result.sort(compare2Level('order', 'index'));
          return result;
        },

        /**
         * @private
         */
        _getSortedVisibleDatasetMetas: function _getSortedVisibleDatasetMetas() {
          return this._getSortedDatasetMetas(true);
        },

        /**
         * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
         * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
         * @private
         */
        drawDatasets: function drawDatasets(easingValue) {
          var me = this;
          var metasets, i;

          if (core_plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
            return;
          }

          metasets = me._getSortedVisibleDatasetMetas();

          for (i = metasets.length - 1; i >= 0; --i) {
            me.drawDataset(metasets[i], easingValue);
          }

          core_plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
        },

        /**
         * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
         * hook, in which case, plugins will not be called on `afterDatasetDraw`.
         * @private
         */
        drawDataset: function drawDataset(meta, easingValue) {
          var me = this;
          var args = {
            meta: meta,
            index: meta.index,
            easingValue: easingValue
          };

          if (core_plugins.notify(me, 'beforeDatasetDraw', [args]) === false) {
            return;
          }

          meta.controller.draw(easingValue);
          core_plugins.notify(me, 'afterDatasetDraw', [args]);
        },

        /**
         * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
         * hook, in which case, plugins will not be called on `afterTooltipDraw`.
         * @private
         */
        _drawTooltip: function _drawTooltip(easingValue) {
          var me = this;
          var tooltip = me.tooltip;
          var args = {
            tooltip: tooltip,
            easingValue: easingValue
          };

          if (core_plugins.notify(me, 'beforeTooltipDraw', [args]) === false) {
            return;
          }

          tooltip.draw();
          core_plugins.notify(me, 'afterTooltipDraw', [args]);
        },

        /**
         * Get the single element that was clicked on
         * @return An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
         */
        getElementAtEvent: function getElementAtEvent(e) {
          return core_interaction.modes.single(this, e);
        },
        getElementsAtEvent: function getElementsAtEvent(e) {
          return core_interaction.modes.label(this, e, {
            intersect: true
          });
        },
        getElementsAtXAxis: function getElementsAtXAxis(e) {
          return core_interaction.modes['x-axis'](this, e, {
            intersect: true
          });
        },
        getElementsAtEventForMode: function getElementsAtEventForMode(e, mode, options) {
          var method = core_interaction.modes[mode];

          if (typeof method === 'function') {
            return method(this, e, options);
          }

          return [];
        },
        getDatasetAtEvent: function getDatasetAtEvent(e) {
          return core_interaction.modes.dataset(this, e, {
            intersect: true
          });
        },
        getDatasetMeta: function getDatasetMeta(datasetIndex) {
          var me = this;
          var dataset = me.data.datasets[datasetIndex];

          if (!dataset._meta) {
            dataset._meta = {};
          }

          var meta = dataset._meta[me.id];

          if (!meta) {
            meta = dataset._meta[me.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              // See isDatasetVisible() comment
              xAxisID: null,
              yAxisID: null,
              order: dataset.order || 0,
              index: datasetIndex
            };
          }

          return meta;
        },
        getVisibleDatasetCount: function getVisibleDatasetCount() {
          var count = 0;

          for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
            if (this.isDatasetVisible(i)) {
              count++;
            }
          }

          return count;
        },
        isDatasetVisible: function isDatasetVisible(datasetIndex) {
          var meta = this.getDatasetMeta(datasetIndex); // meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
          // the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.

          return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
        },
        generateLegend: function generateLegend() {
          return this.options.legendCallback(this);
        },

        /**
         * @private
         */
        destroyDatasetMeta: function destroyDatasetMeta(datasetIndex) {
          var id = this.id;
          var dataset = this.data.datasets[datasetIndex];
          var meta = dataset._meta && dataset._meta[id];

          if (meta) {
            meta.controller.destroy();
            delete dataset._meta[id];
          }
        },
        destroy: function destroy() {
          var me = this;
          var canvas = me.canvas;
          var i, ilen;
          me.stop(); // dataset controllers need to cleanup associated data

          for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
            me.destroyDatasetMeta(i);
          }

          if (canvas) {
            me.unbindEvents();
            helpers$1.canvas.clear(me);
            platform.releaseContext(me.ctx);
            me.canvas = null;
            me.ctx = null;
          }

          core_plugins.notify(me, 'destroy');
          delete Chart.instances[me.id];
        },
        toBase64Image: function toBase64Image() {
          return this.canvas.toDataURL.apply(this.canvas, arguments);
        },
        initToolTip: function initToolTip() {
          var me = this;
          me.tooltip = new core_tooltip({
            _chart: me,
            _chartInstance: me,
            // deprecated, backward compatibility
            _data: me.data,
            _options: me.options.tooltips
          }, me);
        },

        /**
         * @private
         */
        bindEvents: function bindEvents() {
          var me = this;
          var listeners = me._listeners = {};

          var listener = function listener() {
            me.eventHandler.apply(me, arguments);
          };

          helpers$1.each(me.options.events, function (type) {
            platform.addEventListener(me, type, listener);
            listeners[type] = listener;
          }); // Elements used to detect size change should not be injected for non responsive charts.
          // See https://github.com/chartjs/Chart.js/issues/2210

          if (me.options.responsive) {
            listener = function listener() {
              me.resize();
            };

            platform.addEventListener(me, 'resize', listener);
            listeners.resize = listener;
          }
        },

        /**
         * @private
         */
        unbindEvents: function unbindEvents() {
          var me = this;
          var listeners = me._listeners;

          if (!listeners) {
            return;
          }

          delete me._listeners;
          helpers$1.each(listeners, function (listener, type) {
            platform.removeEventListener(me, type, listener);
          });
        },
        updateHoverStyle: function updateHoverStyle(elements, mode, enabled) {
          var prefix = enabled ? 'set' : 'remove';
          var element, i, ilen;

          for (i = 0, ilen = elements.length; i < ilen; ++i) {
            element = elements[i];

            if (element) {
              this.getDatasetMeta(element._datasetIndex).controller[prefix + 'HoverStyle'](element);
            }
          }

          if (mode === 'dataset') {
            this.getDatasetMeta(elements[0]._datasetIndex).controller['_' + prefix + 'DatasetHoverStyle']();
          }
        },

        /**
         * @private
         */
        eventHandler: function eventHandler(e) {
          var me = this;
          var tooltip = me.tooltip;

          if (core_plugins.notify(me, 'beforeEvent', [e]) === false) {
            return;
          } // Buffer any update calls so that renders do not occur


          me._bufferedRender = true;
          me._bufferedRequest = null;
          var changed = me.handleEvent(e); // for smooth tooltip animations issue #4989
          // the tooltip should be the source of change
          // Animation check workaround:
          // tooltip._start will be null when tooltip isn't animating

          if (tooltip) {
            changed = tooltip._start ? tooltip.handleEvent(e) : changed | tooltip.handleEvent(e);
          }

          core_plugins.notify(me, 'afterEvent', [e]);
          var bufferedRequest = me._bufferedRequest;

          if (bufferedRequest) {
            // If we have an update that was triggered, we need to do a normal render
            me.render(bufferedRequest);
          } else if (changed && !me.animating) {
            // If entering, leaving, or changing elements, animate the change via pivot
            me.stop(); // We only need to render at this point. Updating will cause scales to be
            // recomputed generating flicker & using more memory than necessary.

            me.render({
              duration: me.options.hover.animationDuration,
              lazy: true
            });
          }

          me._bufferedRender = false;
          me._bufferedRequest = null;
          return me;
        },

        /**
         * Handle an event
         * @private
         * @param {IEvent} event the event to handle
         * @return {boolean} true if the chart needs to re-render
         */
        handleEvent: function handleEvent(e) {
          var me = this;
          var options = me.options || {};
          var hoverOptions = options.hover;
          var changed = false;
          me.lastActive = me.lastActive || []; // Find Active Elements for hover and tooltips

          if (e.type === 'mouseout') {
            me.active = [];
          } else {
            me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
          } // Invoke onHover hook
          // Need to call with native event here to not break backwards compatibility


          helpers$1.callback(options.onHover || options.hover.onHover, [e.native, me.active], me);

          if (e.type === 'mouseup' || e.type === 'click') {
            if (options.onClick) {
              // Use e.native here for backwards compatibility
              options.onClick.call(me, e.native, me.active);
            }
          } // Remove styling for last active (even if it may still be active)


          if (me.lastActive.length) {
            me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
          } // Built in hover styling


          if (me.active.length && hoverOptions.mode) {
            me.updateHoverStyle(me.active, hoverOptions.mode, true);
          }

          changed = !helpers$1.arrayEquals(me.active, me.lastActive); // Remember Last Actives

          me.lastActive = me.active;
          return changed;
        }
      });
      /**
       * NOTE(SB) We actually don't use this container anymore but we need to keep it
       * for backward compatibility. Though, it can still be useful for plugins that
       * would need to work on multiple charts?!
       */

      Chart.instances = {};
      var core_controller = Chart; // DEPRECATIONS

      /**
       * Provided for backward compatibility, use Chart instead.
       * @class Chart.Controller
       * @deprecated since version 2.6
       * @todo remove at version 3
       * @private
       */

      Chart.Controller = Chart;
      /**
       * Provided for backward compatibility, not available anymore.
       * @namespace Chart
       * @deprecated since version 2.8
       * @todo remove at version 3
       * @private
       */

      Chart.types = {};
      /**
       * Provided for backward compatibility, not available anymore.
       * @namespace Chart.helpers.configMerge
       * @deprecated since version 2.8.0
       * @todo remove at version 3
       * @private
       */

      helpers$1.configMerge = mergeConfig;
      /**
       * Provided for backward compatibility, not available anymore.
       * @namespace Chart.helpers.scaleMerge
       * @deprecated since version 2.8.0
       * @todo remove at version 3
       * @private
       */

      helpers$1.scaleMerge = mergeScaleConfig;

      var core_helpers = function core_helpers() {
        // -- Basic js utility methods
        helpers$1.where = function (collection, filterCallback) {
          if (helpers$1.isArray(collection) && Array.prototype.filter) {
            return collection.filter(filterCallback);
          }

          var filtered = [];
          helpers$1.each(collection, function (item) {
            if (filterCallback(item)) {
              filtered.push(item);
            }
          });
          return filtered;
        };

        helpers$1.findIndex = Array.prototype.findIndex ? function (array, callback, scope) {
          return array.findIndex(callback, scope);
        } : function (array, callback, scope) {
          scope = scope === undefined ? array : scope;

          for (var i = 0, ilen = array.length; i < ilen; ++i) {
            if (callback.call(scope, array[i], i, array)) {
              return i;
            }
          }

          return -1;
        };

        helpers$1.findNextWhere = function (arrayToSearch, filterCallback, startIndex) {
          // Default to start of the array
          if (helpers$1.isNullOrUndef(startIndex)) {
            startIndex = -1;
          }

          for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
            var currentItem = arrayToSearch[i];

            if (filterCallback(currentItem)) {
              return currentItem;
            }
          }
        };

        helpers$1.findPreviousWhere = function (arrayToSearch, filterCallback, startIndex) {
          // Default to end of the array
          if (helpers$1.isNullOrUndef(startIndex)) {
            startIndex = arrayToSearch.length;
          }

          for (var i = startIndex - 1; i >= 0; i--) {
            var currentItem = arrayToSearch[i];

            if (filterCallback(currentItem)) {
              return currentItem;
            }
          }
        }; // -- Math methods


        helpers$1.isNumber = function (n) {
          return !isNaN(parseFloat(n)) && isFinite(n);
        };

        helpers$1.almostEquals = function (x, y, epsilon) {
          return Math.abs(x - y) < epsilon;
        };

        helpers$1.almostWhole = function (x, epsilon) {
          var rounded = Math.round(x);
          return rounded - epsilon <= x && rounded + epsilon >= x;
        };

        helpers$1.max = function (array) {
          return array.reduce(function (max, value) {
            if (!isNaN(value)) {
              return Math.max(max, value);
            }

            return max;
          }, Number.NEGATIVE_INFINITY);
        };

        helpers$1.min = function (array) {
          return array.reduce(function (min, value) {
            if (!isNaN(value)) {
              return Math.min(min, value);
            }

            return min;
          }, Number.POSITIVE_INFINITY);
        };

        helpers$1.sign = Math.sign ? function (x) {
          return Math.sign(x);
        } : function (x) {
          x = +x; // convert to a number

          if (x === 0 || isNaN(x)) {
            return x;
          }

          return x > 0 ? 1 : -1;
        };

        helpers$1.toRadians = function (degrees) {
          return degrees * (Math.PI / 180);
        };

        helpers$1.toDegrees = function (radians) {
          return radians * (180 / Math.PI);
        };
        /**
         * Returns the number of decimal places
         * i.e. the number of digits after the decimal point, of the value of this Number.
         * @param {number} x - A number.
         * @returns {number} The number of decimal places.
         * @private
         */


        helpers$1._decimalPlaces = function (x) {
          if (!helpers$1.isFinite(x)) {
            return;
          }

          var e = 1;
          var p = 0;

          while (Math.round(x * e) / e !== x) {
            e *= 10;
            p++;
          }

          return p;
        }; // Gets the angle from vertical upright to the point about a centre.


        helpers$1.getAngleFromPoint = function (centrePoint, anglePoint) {
          var distanceFromXCenter = anglePoint.x - centrePoint.x;
          var distanceFromYCenter = anglePoint.y - centrePoint.y;
          var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
          var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

          if (angle < -0.5 * Math.PI) {
            angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
          }

          return {
            angle: angle,
            distance: radialDistanceFromCenter
          };
        };

        helpers$1.distanceBetweenPoints = function (pt1, pt2) {
          return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
        };
        /**
         * Provided for backward compatibility, not available anymore
         * @function Chart.helpers.aliasPixel
         * @deprecated since version 2.8.0
         * @todo remove at version 3
         */


        helpers$1.aliasPixel = function (pixelWidth) {
          return pixelWidth % 2 === 0 ? 0 : 0.5;
        };
        /**
         * Returns the aligned pixel value to avoid anti-aliasing blur
         * @param {Chart} chart - The chart instance.
         * @param {number} pixel - A pixel value.
         * @param {number} width - The width of the element.
         * @returns {number} The aligned pixel value.
         * @private
         */


        helpers$1._alignPixel = function (chart, pixel, width) {
          var devicePixelRatio = chart.currentDevicePixelRatio;
          var halfWidth = width / 2;
          return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
        };

        helpers$1.splineCurve = function (firstPoint, middlePoint, afterPoint, t) {
          // Props to Rob Spencer at scaled innovation for his post on splining between points
          // http://scaledinnovation.com/analytics/splines/aboutSplines.html
          // This function must also respect "skipped" points
          var previous = firstPoint.skip ? middlePoint : firstPoint;
          var current = middlePoint;
          var next = afterPoint.skip ? middlePoint : afterPoint;
          var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
          var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));
          var s01 = d01 / (d01 + d12);
          var s12 = d12 / (d01 + d12); // If all points are the same, s01 & s02 will be inf

          s01 = isNaN(s01) ? 0 : s01;
          s12 = isNaN(s12) ? 0 : s12;
          var fa = t * s01; // scaling factor for triangle Ta

          var fb = t * s12;
          return {
            previous: {
              x: current.x - fa * (next.x - previous.x),
              y: current.y - fa * (next.y - previous.y)
            },
            next: {
              x: current.x + fb * (next.x - previous.x),
              y: current.y + fb * (next.y - previous.y)
            }
          };
        };

        helpers$1.EPSILON = Number.EPSILON || 1e-14;

        helpers$1.splineCurveMonotone = function (points) {
          // This function calculates Bézier control points in a similar way than |splineCurve|,
          // but preserves monotonicity of the provided data and ensures no local extremums are added
          // between the dataset discrete points due to the interpolation.
          // See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
          var pointsWithTangents = (points || []).map(function (point) {
            return {
              model: point._model,
              deltaK: 0,
              mK: 0
            };
          }); // Calculate slopes (deltaK) and initialize tangents (mK)

          var pointsLen = pointsWithTangents.length;
          var i, pointBefore, pointCurrent, pointAfter;

          for (i = 0; i < pointsLen; ++i) {
            pointCurrent = pointsWithTangents[i];

            if (pointCurrent.model.skip) {
              continue;
            }

            pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
            pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;

            if (pointAfter && !pointAfter.model.skip) {
              var slopeDeltaX = pointAfter.model.x - pointCurrent.model.x; // In the case of two points that appear at the same x pixel, slopeDeltaX is 0

              pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
            }

            if (!pointBefore || pointBefore.model.skip) {
              pointCurrent.mK = pointCurrent.deltaK;
            } else if (!pointAfter || pointAfter.model.skip) {
              pointCurrent.mK = pointBefore.deltaK;
            } else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
              pointCurrent.mK = 0;
            } else {
              pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
            }
          } // Adjust tangents to ensure monotonic properties


          var alphaK, betaK, tauK, squaredMagnitude;

          for (i = 0; i < pointsLen - 1; ++i) {
            pointCurrent = pointsWithTangents[i];
            pointAfter = pointsWithTangents[i + 1];

            if (pointCurrent.model.skip || pointAfter.model.skip) {
              continue;
            }

            if (helpers$1.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
              pointCurrent.mK = pointAfter.mK = 0;
              continue;
            }

            alphaK = pointCurrent.mK / pointCurrent.deltaK;
            betaK = pointAfter.mK / pointCurrent.deltaK;
            squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);

            if (squaredMagnitude <= 9) {
              continue;
            }

            tauK = 3 / Math.sqrt(squaredMagnitude);
            pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
            pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
          } // Compute control points


          var deltaX;

          for (i = 0; i < pointsLen; ++i) {
            pointCurrent = pointsWithTangents[i];

            if (pointCurrent.model.skip) {
              continue;
            }

            pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
            pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;

            if (pointBefore && !pointBefore.model.skip) {
              deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
              pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
              pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
            }

            if (pointAfter && !pointAfter.model.skip) {
              deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
              pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
              pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
            }
          }
        };

        helpers$1.nextItem = function (collection, index, loop) {
          if (loop) {
            return index >= collection.length - 1 ? collection[0] : collection[index + 1];
          }

          return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
        };

        helpers$1.previousItem = function (collection, index, loop) {
          if (loop) {
            return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
          }

          return index <= 0 ? collection[0] : collection[index - 1];
        }; // Implementation of the nice number algorithm used in determining where axis labels will go


        helpers$1.niceNum = function (range, round) {
          var exponent = Math.floor(helpers$1.log10(range));
          var fraction = range / Math.pow(10, exponent);
          var niceFraction;

          if (round) {
            if (fraction < 1.5) {
              niceFraction = 1;
            } else if (fraction < 3) {
              niceFraction = 2;
            } else if (fraction < 7) {
              niceFraction = 5;
            } else {
              niceFraction = 10;
            }
          } else if (fraction <= 1.0) {
            niceFraction = 1;
          } else if (fraction <= 2) {
            niceFraction = 2;
          } else if (fraction <= 5) {
            niceFraction = 5;
          } else {
            niceFraction = 10;
          }

          return niceFraction * Math.pow(10, exponent);
        }; // Request animation polyfill - https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/


        helpers$1.requestAnimFrame = function () {
          if (typeof window === 'undefined') {
            return function (callback) {
              callback();
            };
          }

          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            return window.setTimeout(callback, 1000 / 60);
          };
        }(); // -- DOM methods


        helpers$1.getRelativePosition = function (evt, chart) {
          var mouseX, mouseY;
          var e = evt.originalEvent || evt;
          var canvas = evt.target || evt.srcElement;
          var boundingRect = canvas.getBoundingClientRect();
          var touches = e.touches;

          if (touches && touches.length > 0) {
            mouseX = touches[0].clientX;
            mouseY = touches[0].clientY;
          } else {
            mouseX = e.clientX;
            mouseY = e.clientY;
          } // Scale mouse coordinates into canvas coordinates
          // by following the pattern laid out by 'jerryj' in the comments of
          // https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/


          var paddingLeft = parseFloat(helpers$1.getStyle(canvas, 'padding-left'));
          var paddingTop = parseFloat(helpers$1.getStyle(canvas, 'padding-top'));
          var paddingRight = parseFloat(helpers$1.getStyle(canvas, 'padding-right'));
          var paddingBottom = parseFloat(helpers$1.getStyle(canvas, 'padding-bottom'));
          var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
          var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom; // We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
          // the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here

          mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / width * canvas.width / chart.currentDevicePixelRatio);
          mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / height * canvas.height / chart.currentDevicePixelRatio);
          return {
            x: mouseX,
            y: mouseY
          };
        }; // Private helper function to convert max-width/max-height values that may be percentages into a number


        function parseMaxStyle(styleValue, node, parentProperty) {
          var valueInPixels;

          if (typeof styleValue === 'string') {
            valueInPixels = parseInt(styleValue, 10);

            if (styleValue.indexOf('%') !== -1) {
              // percentage * size in dimension
              valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
            }
          } else {
            valueInPixels = styleValue;
          }

          return valueInPixels;
        }
        /**
         * Returns if the given value contains an effective constraint.
         * @private
         */


        function isConstrainedValue(value) {
          return value !== undefined && value !== null && value !== 'none';
        }
        /**
         * Returns the max width or height of the given DOM node in a cross-browser compatible fashion
         * @param {HTMLElement} domNode - the node to check the constraint on
         * @param {string} maxStyle - the style that defines the maximum for the direction we are using ('max-width' / 'max-height')
         * @param {string} percentageProperty - property of parent to use when calculating width as a percentage
         * @see {@link https://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser}
         */


        function getConstraintDimension(domNode, maxStyle, percentageProperty) {
          var view = document.defaultView;

          var parentNode = helpers$1._getParentNode(domNode);

          var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
          var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
          var hasCNode = isConstrainedValue(constrainedNode);
          var hasCContainer = isConstrainedValue(constrainedContainer);
          var infinity = Number.POSITIVE_INFINITY;

          if (hasCNode || hasCContainer) {
            return Math.min(hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity, hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
          }

          return 'none';
        } // returns Number or undefined if no constraint


        helpers$1.getConstraintWidth = function (domNode) {
          return getConstraintDimension(domNode, 'max-width', 'clientWidth');
        }; // returns Number or undefined if no constraint


        helpers$1.getConstraintHeight = function (domNode) {
          return getConstraintDimension(domNode, 'max-height', 'clientHeight');
        };
        /**
         * @private
        	 */


        helpers$1._calculatePadding = function (container, padding, parentDimension) {
          padding = helpers$1.getStyle(container, padding);
          return padding.indexOf('%') > -1 ? parentDimension * parseInt(padding, 10) / 100 : parseInt(padding, 10);
        };
        /**
         * @private
         */


        helpers$1._getParentNode = function (domNode) {
          var parent = domNode.parentNode;

          if (parent && parent.toString() === '[object ShadowRoot]') {
            parent = parent.host;
          }

          return parent;
        };

        helpers$1.getMaximumWidth = function (domNode) {
          var container = helpers$1._getParentNode(domNode);

          if (!container) {
            return domNode.clientWidth;
          }

          var clientWidth = container.clientWidth;

          var paddingLeft = helpers$1._calculatePadding(container, 'padding-left', clientWidth);

          var paddingRight = helpers$1._calculatePadding(container, 'padding-right', clientWidth);

          var w = clientWidth - paddingLeft - paddingRight;
          var cw = helpers$1.getConstraintWidth(domNode);
          return isNaN(cw) ? w : Math.min(w, cw);
        };

        helpers$1.getMaximumHeight = function (domNode) {
          var container = helpers$1._getParentNode(domNode);

          if (!container) {
            return domNode.clientHeight;
          }

          var clientHeight = container.clientHeight;

          var paddingTop = helpers$1._calculatePadding(container, 'padding-top', clientHeight);

          var paddingBottom = helpers$1._calculatePadding(container, 'padding-bottom', clientHeight);

          var h = clientHeight - paddingTop - paddingBottom;
          var ch = helpers$1.getConstraintHeight(domNode);
          return isNaN(ch) ? h : Math.min(h, ch);
        };

        helpers$1.getStyle = function (el, property) {
          return el.currentStyle ? el.currentStyle[property] : document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
        };

        helpers$1.retinaScale = function (chart, forceRatio) {
          var pixelRatio = chart.currentDevicePixelRatio = forceRatio || typeof window !== 'undefined' && window.devicePixelRatio || 1;

          if (pixelRatio === 1) {
            return;
          }

          var canvas = chart.canvas;
          var height = chart.height;
          var width = chart.width;
          canvas.height = height * pixelRatio;
          canvas.width = width * pixelRatio;
          chart.ctx.scale(pixelRatio, pixelRatio); // If no style has been set on the canvas, the render size is used as display size,
          // making the chart visually bigger, so let's enforce it to the "correct" values.
          // See https://github.com/chartjs/Chart.js/issues/3575

          if (!canvas.style.height && !canvas.style.width) {
            canvas.style.height = height + 'px';
            canvas.style.width = width + 'px';
          }
        }; // -- Canvas methods


        helpers$1.fontString = function (pixelSize, fontStyle, fontFamily) {
          return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
        };

        helpers$1.longestText = function (ctx, font, arrayOfThings, cache) {
          cache = cache || {};
          var data = cache.data = cache.data || {};
          var gc = cache.garbageCollect = cache.garbageCollect || [];

          if (cache.font !== font) {
            data = cache.data = {};
            gc = cache.garbageCollect = [];
            cache.font = font;
          }

          ctx.font = font;
          var longest = 0;
          var ilen = arrayOfThings.length;
          var i, j, jlen, thing, nestedThing;

          for (i = 0; i < ilen; i++) {
            thing = arrayOfThings[i]; // Undefined strings and arrays should not be measured

            if (thing !== undefined && thing !== null && helpers$1.isArray(thing) !== true) {
              longest = helpers$1.measureText(ctx, data, gc, longest, thing);
            } else if (helpers$1.isArray(thing)) {
              // if it is an array lets measure each element
              // to do maybe simplify this function a bit so we can do this more recursively?
              for (j = 0, jlen = thing.length; j < jlen; j++) {
                nestedThing = thing[j]; // Undefined strings and arrays should not be measured

                if (nestedThing !== undefined && nestedThing !== null && !helpers$1.isArray(nestedThing)) {
                  longest = helpers$1.measureText(ctx, data, gc, longest, nestedThing);
                }
              }
            }
          }

          var gcLen = gc.length / 2;

          if (gcLen > arrayOfThings.length) {
            for (i = 0; i < gcLen; i++) {
              delete data[gc[i]];
            }

            gc.splice(0, gcLen);
          }

          return longest;
        };

        helpers$1.measureText = function (ctx, data, gc, longest, string) {
          var textWidth = data[string];

          if (!textWidth) {
            textWidth = data[string] = ctx.measureText(string).width;
            gc.push(string);
          }

          if (textWidth > longest) {
            longest = textWidth;
          }

          return longest;
        };
        /**
         * @deprecated
         */


        helpers$1.numberOfLabelLines = function (arrayOfThings) {
          var numberOfLines = 1;
          helpers$1.each(arrayOfThings, function (thing) {
            if (helpers$1.isArray(thing)) {
              if (thing.length > numberOfLines) {
                numberOfLines = thing.length;
              }
            }
          });
          return numberOfLines;
        };

        helpers$1.color = !chartjsColor ? function (value) {
          console.error('Color.js not found!');
          return value;
        } : function (value) {
          /* global CanvasGradient */
          if (value instanceof CanvasGradient) {
            value = core_defaults.global.defaultColor;
          }

          return chartjsColor(value);
        };

        helpers$1.getHoverColor = function (colorValue) {
          /* global CanvasPattern */
          return colorValue instanceof CanvasPattern || colorValue instanceof CanvasGradient ? colorValue : helpers$1.color(colorValue).saturate(0.5).darken(0.1).rgbString();
        };
      };

      function abstract() {
        throw new Error('This method is not implemented: either no adapter can ' + 'be found or an incomplete integration was provided.');
      }
      /**
       * Date adapter (current used by the time scale)
       * @namespace Chart._adapters._date
       * @memberof Chart._adapters
       * @private
       */

      /**
       * Currently supported unit string values.
       * @typedef {('millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year')}
       * @memberof Chart._adapters._date
       * @name Unit
       */

      /**
       * @class
       */


      function DateAdapter(options) {
        this.options = options || {};
      }

      helpers$1.extend(DateAdapter.prototype,
      /** @lends DateAdapter */
      {
        /**
         * Returns a map of time formats for the supported formatting units defined
         * in Unit as well as 'datetime' representing a detailed date/time string.
         * @returns {{string: string}}
         */
        formats: abstract,

        /**
         * Parses the given `value` and return the associated timestamp.
         * @param {any} value - the value to parse (usually comes from the data)
         * @param {string} [format] - the expected data format
         * @returns {(number|null)}
         * @function
         */
        parse: abstract,

        /**
         * Returns the formatted date in the specified `format` for a given `timestamp`.
         * @param {number} timestamp - the timestamp to format
         * @param {string} format - the date/time token
         * @return {string}
         * @function
         */
        format: abstract,

        /**
         * Adds the specified `amount` of `unit` to the given `timestamp`.
         * @param {number} timestamp - the input timestamp
         * @param {number} amount - the amount to add
         * @param {Unit} unit - the unit as string
         * @return {number}
         * @function
         */
        add: abstract,

        /**
         * Returns the number of `unit` between the given timestamps.
         * @param {number} max - the input timestamp (reference)
         * @param {number} min - the timestamp to substract
         * @param {Unit} unit - the unit as string
         * @return {number}
         * @function
         */
        diff: abstract,

        /**
         * Returns start of `unit` for the given `timestamp`.
         * @param {number} timestamp - the input timestamp
         * @param {Unit} unit - the unit as string
         * @param {number} [weekday] - the ISO day of the week with 1 being Monday
         * and 7 being Sunday (only needed if param *unit* is `isoWeek`).
         * @function
         */
        startOf: abstract,

        /**
         * Returns end of `unit` for the given `timestamp`.
         * @param {number} timestamp - the input timestamp
         * @param {Unit} unit - the unit as string
         * @function
         */
        endOf: abstract,
        // DEPRECATIONS

        /**
         * Provided for backward compatibility for scale.getValueForPixel(),
         * this method should be overridden only by the moment adapter.
         * @deprecated since version 2.8.0
         * @todo remove at version 3
         * @private
         */
        _create: function _create(value) {
          return value;
        }
      });

      DateAdapter.override = function (members) {
        helpers$1.extend(DateAdapter.prototype, members);
      };

      var _date = DateAdapter;
      var core_adapters = {
        _date: _date
      };
      /**
       * Namespace to hold static tick generation functions
       * @namespace Chart.Ticks
       */

      var core_ticks = {
        /**
         * Namespace to hold formatters for different types of ticks
         * @namespace Chart.Ticks.formatters
         */
        formatters: {
          /**
           * Formatter for value labels
           * @method Chart.Ticks.formatters.values
           * @param value the value to display
           * @return {string|string[]} the label to display
           */
          values: function values(value) {
            return helpers$1.isArray(value) ? value : '' + value;
          },

          /**
           * Formatter for linear numeric ticks
           * @method Chart.Ticks.formatters.linear
           * @param tickValue {number} the value to be formatted
           * @param index {number} the position of the tickValue parameter in the ticks array
           * @param ticks {number[]} the list of ticks being converted
           * @return {string} string representation of the tickValue parameter
           */
          linear: function linear(tickValue, index, ticks) {
            // If we have lots of ticks, don't use the ones
            var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0]; // If we have a number like 2.5 as the delta, figure out how many decimal places we need

            if (Math.abs(delta) > 1) {
              if (tickValue !== Math.floor(tickValue)) {
                // not an integer
                delta = tickValue - Math.floor(tickValue);
              }
            }

            var logDelta = helpers$1.log10(Math.abs(delta));
            var tickString = '';

            if (tickValue !== 0) {
              var maxTick = Math.max(Math.abs(ticks[0]), Math.abs(ticks[ticks.length - 1]));

              if (maxTick < 1e-4) {
                // all ticks are small numbers; use scientific notation
                var logTick = helpers$1.log10(Math.abs(tickValue));
                var numExponential = Math.floor(logTick) - Math.floor(logDelta);
                numExponential = Math.max(Math.min(numExponential, 20), 0);
                tickString = tickValue.toExponential(numExponential);
              } else {
                var numDecimal = -1 * Math.floor(logDelta);
                numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places

                tickString = tickValue.toFixed(numDecimal);
              }
            } else {
              tickString = '0'; // never show decimal places for 0
            }

            return tickString;
          },
          logarithmic: function logarithmic(tickValue, index, ticks) {
            var remain = tickValue / Math.pow(10, Math.floor(helpers$1.log10(tickValue)));

            if (tickValue === 0) {
              return '0';
            } else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
              return tickValue.toExponential();
            }

            return '';
          }
        }
      };
      var isArray = helpers$1.isArray;
      var isNullOrUndef = helpers$1.isNullOrUndef;
      var valueOrDefault$a = helpers$1.valueOrDefault;
      var valueAtIndexOrDefault = helpers$1.valueAtIndexOrDefault;

      core_defaults._set('scale', {
        display: true,
        position: 'left',
        offset: false,
        // grid line settings
        gridLines: {
          display: true,
          color: 'rgba(0,0,0,0.1)',
          lineWidth: 1,
          drawBorder: true,
          drawOnChartArea: true,
          drawTicks: true,
          tickMarkLength: 10,
          zeroLineWidth: 1,
          zeroLineColor: 'rgba(0,0,0,0.25)',
          zeroLineBorderDash: [],
          zeroLineBorderDashOffset: 0.0,
          offsetGridLines: false,
          borderDash: [],
          borderDashOffset: 0.0
        },
        // scale label
        scaleLabel: {
          // display property
          display: false,
          // actual label
          labelString: '',
          // top/bottom padding
          padding: {
            top: 4,
            bottom: 4
          }
        },
        // label settings
        ticks: {
          beginAtZero: false,
          minRotation: 0,
          maxRotation: 50,
          mirror: false,
          padding: 0,
          reverse: false,
          display: true,
          autoSkip: true,
          autoSkipPadding: 0,
          labelOffset: 0,
          // We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
          callback: core_ticks.formatters.values,
          minor: {},
          major: {}
        }
      });
      /** Returns a new array containing numItems from arr */


      function sample(arr, numItems) {
        var result = [];
        var increment = arr.length / numItems;
        var i = 0;
        var len = arr.length;

        for (; i < len; i += increment) {
          result.push(arr[Math.floor(i)]);
        }

        return result;
      }

      function getPixelForGridLine(scale, index, offsetGridLines) {
        var length = scale.getTicks().length;
        var validIndex = Math.min(index, length - 1);
        var lineValue = scale.getPixelForTick(validIndex);
        var start = scale._startPixel;
        var end = scale._endPixel;
        var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.

        var offset;

        if (offsetGridLines) {
          if (length === 1) {
            offset = Math.max(lineValue - start, end - lineValue);
          } else if (index === 0) {
            offset = (scale.getPixelForTick(1) - lineValue) / 2;
          } else {
            offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
          }

          lineValue += validIndex < index ? offset : -offset; // Return undefined if the pixel is out of the range

          if (lineValue < start - epsilon || lineValue > end + epsilon) {
            return;
          }
        }

        return lineValue;
      }

      function garbageCollect(caches, length) {
        helpers$1.each(caches, function (cache) {
          var gc = cache.gc;
          var gcLen = gc.length / 2;
          var i;

          if (gcLen > length) {
            for (i = 0; i < gcLen; ++i) {
              delete cache.data[gc[i]];
            }

            gc.splice(0, gcLen);
          }
        });
      }
      /**
       * Returns {width, height, offset} objects for the first, last, widest, highest tick
       * labels where offset indicates the anchor point offset from the top in pixels.
       */


      function computeLabelSizes(ctx, tickFonts, ticks, caches) {
        var length = ticks.length;
        var widths = [];
        var heights = [];
        var offsets = [];
        var i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel, widest, highest;

        for (i = 0; i < length; ++i) {
          label = ticks[i].label;
          tickFont = ticks[i].major ? tickFonts.major : tickFonts.minor;
          ctx.font = fontString = tickFont.string;
          cache = caches[fontString] = caches[fontString] || {
            data: {},
            gc: []
          };
          lineHeight = tickFont.lineHeight;
          width = height = 0; // Undefined labels and arrays should not be measured

          if (!isNullOrUndef(label) && !isArray(label)) {
            width = helpers$1.measureText(ctx, cache.data, cache.gc, width, label);
            height = lineHeight;
          } else if (isArray(label)) {
            // if it is an array let's measure each element
            for (j = 0, jlen = label.length; j < jlen; ++j) {
              nestedLabel = label[j]; // Undefined labels and arrays should not be measured

              if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
                width = helpers$1.measureText(ctx, cache.data, cache.gc, width, nestedLabel);
                height += lineHeight;
              }
            }
          }

          widths.push(width);
          heights.push(height);
          offsets.push(lineHeight / 2);
        }

        garbageCollect(caches, length);
        widest = widths.indexOf(Math.max.apply(null, widths));
        highest = heights.indexOf(Math.max.apply(null, heights));

        function valueAt(idx) {
          return {
            width: widths[idx] || 0,
            height: heights[idx] || 0,
            offset: offsets[idx] || 0
          };
        }

        return {
          first: valueAt(0),
          last: valueAt(length - 1),
          widest: valueAt(widest),
          highest: valueAt(highest)
        };
      }

      function getTickMarkLength(options) {
        return options.drawTicks ? options.tickMarkLength : 0;
      }

      function getScaleLabelHeight(options) {
        var font, padding;

        if (!options.display) {
          return 0;
        }

        font = helpers$1.options._parseFont(options);
        padding = helpers$1.options.toPadding(options.padding);
        return font.lineHeight + padding.height;
      }

      function parseFontOptions(options, nestedOpts) {
        return helpers$1.extend(helpers$1.options._parseFont({
          fontFamily: valueOrDefault$a(nestedOpts.fontFamily, options.fontFamily),
          fontSize: valueOrDefault$a(nestedOpts.fontSize, options.fontSize),
          fontStyle: valueOrDefault$a(nestedOpts.fontStyle, options.fontStyle),
          lineHeight: valueOrDefault$a(nestedOpts.lineHeight, options.lineHeight)
        }), {
          color: helpers$1.options.resolve([nestedOpts.fontColor, options.fontColor, core_defaults.global.defaultFontColor])
        });
      }

      function parseTickFontOptions(options) {
        var minor = parseFontOptions(options, options.minor);
        var major = options.major.enabled ? parseFontOptions(options, options.major) : minor;
        return {
          minor: minor,
          major: major
        };
      }

      function nonSkipped(ticksToFilter) {
        var filtered = [];
        var item, index, len;

        for (index = 0, len = ticksToFilter.length; index < len; ++index) {
          item = ticksToFilter[index];

          if (typeof item._index !== 'undefined') {
            filtered.push(item);
          }
        }

        return filtered;
      }

      function getEvenSpacing(arr) {
        var len = arr.length;
        var i, diff;

        if (len < 2) {
          return false;
        }

        for (diff = arr[0], i = 1; i < len; ++i) {
          if (arr[i] - arr[i - 1] !== diff) {
            return false;
          }
        }

        return diff;
      }

      function calculateSpacing(majorIndices, ticks, axisLength, ticksLimit) {
        var evenMajorSpacing = getEvenSpacing(majorIndices);
        var spacing = (ticks.length - 1) / ticksLimit;
        var factors, factor, i, ilen; // If the major ticks are evenly spaced apart, place the minor ticks
        // so that they divide the major ticks into even chunks

        if (!evenMajorSpacing) {
          return Math.max(spacing, 1);
        }

        factors = helpers$1.math._factorize(evenMajorSpacing);

        for (i = 0, ilen = factors.length - 1; i < ilen; i++) {
          factor = factors[i];

          if (factor > spacing) {
            return factor;
          }
        }

        return Math.max(spacing, 1);
      }

      function getMajorIndices(ticks) {
        var result = [];
        var i, ilen;

        for (i = 0, ilen = ticks.length; i < ilen; i++) {
          if (ticks[i].major) {
            result.push(i);
          }
        }

        return result;
      }

      function skipMajors(ticks, majorIndices, spacing) {
        var count = 0;
        var next = majorIndices[0];
        var i, tick;
        spacing = Math.ceil(spacing);

        for (i = 0; i < ticks.length; i++) {
          tick = ticks[i];

          if (i === next) {
            tick._index = i;
            count++;
            next = majorIndices[count * spacing];
          } else {
            delete tick.label;
          }
        }
      }

      function skip(ticks, spacing, majorStart, majorEnd) {
        var start = valueOrDefault$a(majorStart, 0);
        var end = Math.min(valueOrDefault$a(majorEnd, ticks.length), ticks.length);
        var count = 0;
        var length, i, tick, next;
        spacing = Math.ceil(spacing);

        if (majorEnd) {
          length = majorEnd - majorStart;
          spacing = length / Math.floor(length / spacing);
        }

        next = start;

        while (next < 0) {
          count++;
          next = Math.round(start + count * spacing);
        }

        for (i = Math.max(start, 0); i < end; i++) {
          tick = ticks[i];

          if (i === next) {
            tick._index = i;
            count++;
            next = Math.round(start + count * spacing);
          } else {
            delete tick.label;
          }
        }
      }

      var Scale = core_element.extend({
        zeroLineIndex: 0,

        /**
         * Get the padding needed for the scale
         * @method getPadding
         * @private
         * @returns {Padding} the necessary padding
         */
        getPadding: function getPadding() {
          var me = this;
          return {
            left: me.paddingLeft || 0,
            top: me.paddingTop || 0,
            right: me.paddingRight || 0,
            bottom: me.paddingBottom || 0
          };
        },

        /**
         * Returns the scale tick objects ({label, major})
         * @since 2.7
         */
        getTicks: function getTicks() {
          return this._ticks;
        },

        /**
        * @private
        */
        _getLabels: function _getLabels() {
          var data = this.chart.data;
          return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
        },
        // These methods are ordered by lifecyle. Utilities then follow.
        // Any function defined here is inherited by all scale types.
        // Any function can be extended by the scale type

        /**
         * Provided for backward compatibility, not available anymore
         * @function Chart.Scale.mergeTicksOptions
         * @deprecated since version 2.8.0
         * @todo remove at version 3
         */
        mergeTicksOptions: function mergeTicksOptions() {// noop
        },
        beforeUpdate: function beforeUpdate() {
          helpers$1.callback(this.options.beforeUpdate, [this]);
        },

        /**
         * @param {number} maxWidth - the max width in pixels
         * @param {number} maxHeight - the max height in pixels
         * @param {object} margins - the space between the edge of the other scales and edge of the chart
         *   This space comes from two sources:
         *     - padding - space that's required to show the labels at the edges of the scale
         *     - thickness of scales or legends in another orientation
         */
        update: function update(maxWidth, maxHeight, margins) {
          var me = this;
          var tickOpts = me.options.ticks;
          var sampleSize = tickOpts.sampleSize;
          var i, ilen, labels, ticks, samplingEnabled; // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)

          me.beforeUpdate(); // Absorb the master measurements

          me.maxWidth = maxWidth;
          me.maxHeight = maxHeight;
          me.margins = helpers$1.extend({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }, margins);
          me._ticks = null;
          me.ticks = null;
          me._labelSizes = null;
          me._maxLabelLines = 0;
          me.longestLabelWidth = 0;
          me.longestTextCache = me.longestTextCache || {};
          me._gridLineItems = null;
          me._labelItems = null; // Dimensions

          me.beforeSetDimensions();
          me.setDimensions();
          me.afterSetDimensions(); // Data min/max

          me.beforeDataLimits();
          me.determineDataLimits();
          me.afterDataLimits(); // Ticks - `this.ticks` is now DEPRECATED!
          // Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
          // and must not be accessed directly from outside this class. `this.ticks` being
          // around for long time and not marked as private, we can't change its structure
          // without unexpected breaking changes. If you need to access the scale ticks,
          // use scale.getTicks() instead.

          me.beforeBuildTicks(); // New implementations should return an array of objects but for BACKWARD COMPAT,
          // we still support no return (`this.ticks` internally set by calling this method).

          ticks = me.buildTicks() || []; // Allow modification of ticks in callback.

          ticks = me.afterBuildTicks(ticks) || ticks; // Ensure ticks contains ticks in new tick format

          if ((!ticks || !ticks.length) && me.ticks) {
            ticks = [];

            for (i = 0, ilen = me.ticks.length; i < ilen; ++i) {
              ticks.push({
                value: me.ticks[i],
                major: false
              });
            }
          }

          me._ticks = ticks; // Compute tick rotation and fit using a sampled subset of labels
          // We generally don't need to compute the size of every single label for determining scale size

          samplingEnabled = sampleSize < ticks.length;
          labels = me._convertTicksToLabels(samplingEnabled ? sample(ticks, sampleSize) : ticks); // _configure is called twice, once here, once from core.controller.updateLayout.
          // Here we haven't been positioned yet, but dimensions are correct.
          // Variables set in _configure are needed for calculateTickRotation, and
          // it's ok that coordinates are not correct there, only dimensions matter.

          me._configure(); // Tick Rotation


          me.beforeCalculateTickRotation();
          me.calculateTickRotation();
          me.afterCalculateTickRotation();
          me.beforeFit();
          me.fit();
          me.afterFit(); // Auto-skip

          me._ticksToDraw = tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto') ? me._autoSkip(ticks) : ticks;

          if (samplingEnabled) {
            // Generate labels using all non-skipped ticks
            labels = me._convertTicksToLabels(me._ticksToDraw);
          }

          me.ticks = labels; // BACKWARD COMPATIBILITY
          // IMPORTANT: after this point, we consider that `this.ticks` will NEVER change!

          me.afterUpdate(); // TODO(v3): remove minSize as a public property and return value from all layout boxes. It is unused
          // make maxWidth and maxHeight private

          return me.minSize;
        },

        /**
         * @private
         */
        _configure: function _configure() {
          var me = this;
          var reversePixels = me.options.ticks.reverse;
          var startPixel, endPixel;

          if (me.isHorizontal()) {
            startPixel = me.left;
            endPixel = me.right;
          } else {
            startPixel = me.top;
            endPixel = me.bottom; // by default vertical scales are from bottom to top, so pixels are reversed

            reversePixels = !reversePixels;
          }

          me._startPixel = startPixel;
          me._endPixel = endPixel;
          me._reversePixels = reversePixels;
          me._length = endPixel - startPixel;
        },
        afterUpdate: function afterUpdate() {
          helpers$1.callback(this.options.afterUpdate, [this]);
        },
        //
        beforeSetDimensions: function beforeSetDimensions() {
          helpers$1.callback(this.options.beforeSetDimensions, [this]);
        },
        setDimensions: function setDimensions() {
          var me = this; // Set the unconstrained dimension before label rotation

          if (me.isHorizontal()) {
            // Reset position before calculating rotation
            me.width = me.maxWidth;
            me.left = 0;
            me.right = me.width;
          } else {
            me.height = me.maxHeight; // Reset position before calculating rotation

            me.top = 0;
            me.bottom = me.height;
          } // Reset padding


          me.paddingLeft = 0;
          me.paddingTop = 0;
          me.paddingRight = 0;
          me.paddingBottom = 0;
        },
        afterSetDimensions: function afterSetDimensions() {
          helpers$1.callback(this.options.afterSetDimensions, [this]);
        },
        // Data limits
        beforeDataLimits: function beforeDataLimits() {
          helpers$1.callback(this.options.beforeDataLimits, [this]);
        },
        determineDataLimits: helpers$1.noop,
        afterDataLimits: function afterDataLimits() {
          helpers$1.callback(this.options.afterDataLimits, [this]);
        },
        //
        beforeBuildTicks: function beforeBuildTicks() {
          helpers$1.callback(this.options.beforeBuildTicks, [this]);
        },
        buildTicks: helpers$1.noop,
        afterBuildTicks: function afterBuildTicks(ticks) {
          var me = this; // ticks is empty for old axis implementations here

          if (isArray(ticks) && ticks.length) {
            return helpers$1.callback(me.options.afterBuildTicks, [me, ticks]);
          } // Support old implementations (that modified `this.ticks` directly in buildTicks)


          me.ticks = helpers$1.callback(me.options.afterBuildTicks, [me, me.ticks]) || me.ticks;
          return ticks;
        },
        beforeTickToLabelConversion: function beforeTickToLabelConversion() {
          helpers$1.callback(this.options.beforeTickToLabelConversion, [this]);
        },
        convertTicksToLabels: function convertTicksToLabels() {
          var me = this; // Convert ticks to strings

          var tickOpts = me.options.ticks;
          me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback, this);
        },
        afterTickToLabelConversion: function afterTickToLabelConversion() {
          helpers$1.callback(this.options.afterTickToLabelConversion, [this]);
        },
        //
        beforeCalculateTickRotation: function beforeCalculateTickRotation() {
          helpers$1.callback(this.options.beforeCalculateTickRotation, [this]);
        },
        calculateTickRotation: function calculateTickRotation() {
          var me = this;
          var options = me.options;
          var tickOpts = options.ticks;
          var numTicks = me.getTicks().length;
          var minRotation = tickOpts.minRotation || 0;
          var maxRotation = tickOpts.maxRotation;
          var labelRotation = minRotation;
          var labelSizes, maxLabelWidth, maxLabelHeight, maxWidth, tickWidth, maxHeight, maxLabelDiagonal;

          if (!me._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !me.isHorizontal()) {
            me.labelRotation = minRotation;
            return;
          }

          labelSizes = me._getLabelSizes();
          maxLabelWidth = labelSizes.widest.width;
          maxLabelHeight = labelSizes.highest.height - labelSizes.highest.offset; // Estimate the width of each grid based on the canvas width, the maximum
          // label width and the number of tick intervals

          maxWidth = Math.min(me.maxWidth, me.chart.width - maxLabelWidth);
          tickWidth = options.offset ? me.maxWidth / numTicks : maxWidth / (numTicks - 1); // Allow 3 pixels x2 padding either side for label readability

          if (maxLabelWidth + 6 > tickWidth) {
            tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
            maxHeight = me.maxHeight - getTickMarkLength(options.gridLines) - tickOpts.padding - getScaleLabelHeight(options.scaleLabel);
            maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
            labelRotation = helpers$1.toDegrees(Math.min(Math.asin(Math.min((labelSizes.highest.height + 6) / tickWidth, 1)), Math.asin(Math.min(maxHeight / maxLabelDiagonal, 1)) - Math.asin(maxLabelHeight / maxLabelDiagonal)));
            labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
          }

          me.labelRotation = labelRotation;
        },
        afterCalculateTickRotation: function afterCalculateTickRotation() {
          helpers$1.callback(this.options.afterCalculateTickRotation, [this]);
        },
        //
        beforeFit: function beforeFit() {
          helpers$1.callback(this.options.beforeFit, [this]);
        },
        fit: function fit() {
          var me = this; // Reset

          var minSize = me.minSize = {
            width: 0,
            height: 0
          };
          var chart = me.chart;
          var opts = me.options;
          var tickOpts = opts.ticks;
          var scaleLabelOpts = opts.scaleLabel;
          var gridLineOpts = opts.gridLines;

          var display = me._isVisible();

          var isBottom = opts.position === 'bottom';
          var isHorizontal = me.isHorizontal(); // Width

          if (isHorizontal) {
            minSize.width = me.maxWidth;
          } else if (display) {
            minSize.width = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
          } // height


          if (!isHorizontal) {
            minSize.height = me.maxHeight; // fill all the height
          } else if (display) {
            minSize.height = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
          } // Don't bother fitting the ticks if we are not showing the labels


          if (tickOpts.display && display) {
            var tickFonts = parseTickFontOptions(tickOpts);

            var labelSizes = me._getLabelSizes();

            var firstLabelSize = labelSizes.first;
            var lastLabelSize = labelSizes.last;
            var widestLabelSize = labelSizes.widest;
            var highestLabelSize = labelSizes.highest;
            var lineSpace = tickFonts.minor.lineHeight * 0.4;
            var tickPadding = tickOpts.padding;

            if (isHorizontal) {
              // A horizontal axis is more constrained by the height.
              var isRotated = me.labelRotation !== 0;
              var angleRadians = helpers$1.toRadians(me.labelRotation);
              var cosRotation = Math.cos(angleRadians);
              var sinRotation = Math.sin(angleRadians);
              var labelHeight = sinRotation * widestLabelSize.width + cosRotation * (highestLabelSize.height - (isRotated ? highestLabelSize.offset : 0)) + (isRotated ? 0 : lineSpace); // padding

              minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);
              var offsetLeft = me.getPixelForTick(0) - me.left;
              var offsetRight = me.right - me.getPixelForTick(me.getTicks().length - 1);
              var paddingLeft, paddingRight; // Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
              // which means that the right padding is dominated by the font height

              if (isRotated) {
                paddingLeft = isBottom ? cosRotation * firstLabelSize.width + sinRotation * firstLabelSize.offset : sinRotation * (firstLabelSize.height - firstLabelSize.offset);
                paddingRight = isBottom ? sinRotation * (lastLabelSize.height - lastLabelSize.offset) : cosRotation * lastLabelSize.width + sinRotation * lastLabelSize.offset;
              } else {
                paddingLeft = firstLabelSize.width / 2;
                paddingRight = lastLabelSize.width / 2;
              } // Adjust padding taking into account changes in offsets
              // and add 3 px to move away from canvas edges


              me.paddingLeft = Math.max((paddingLeft - offsetLeft) * me.width / (me.width - offsetLeft), 0) + 3;
              me.paddingRight = Math.max((paddingRight - offsetRight) * me.width / (me.width - offsetRight), 0) + 3;
            } else {
              // A vertical axis is more constrained by the width. Labels are the
              // dominant factor here, so get that length first and account for padding
              var labelWidth = tickOpts.mirror ? 0 : // use lineSpace for consistency with horizontal axis
              // tickPadding is not implemented for horizontal
              widestLabelSize.width + tickPadding + lineSpace;
              minSize.width = Math.min(me.maxWidth, minSize.width + labelWidth);
              me.paddingTop = firstLabelSize.height / 2;
              me.paddingBottom = lastLabelSize.height / 2;
            }
          }

          me.handleMargins();

          if (isHorizontal) {
            me.width = me._length = chart.width - me.margins.left - me.margins.right;
            me.height = minSize.height;
          } else {
            me.width = minSize.width;
            me.height = me._length = chart.height - me.margins.top - me.margins.bottom;
          }
        },

        /**
         * Handle margins and padding interactions
         * @private
         */
        handleMargins: function handleMargins() {
          var me = this;

          if (me.margins) {
            me.margins.left = Math.max(me.paddingLeft, me.margins.left);
            me.margins.top = Math.max(me.paddingTop, me.margins.top);
            me.margins.right = Math.max(me.paddingRight, me.margins.right);
            me.margins.bottom = Math.max(me.paddingBottom, me.margins.bottom);
          }
        },
        afterFit: function afterFit() {
          helpers$1.callback(this.options.afterFit, [this]);
        },
        // Shared Methods
        isHorizontal: function isHorizontal() {
          var pos = this.options.position;
          return pos === 'top' || pos === 'bottom';
        },
        isFullWidth: function isFullWidth() {
          return this.options.fullWidth;
        },
        // Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
        getRightValue: function getRightValue(rawValue) {
          // Null and undefined values first
          if (isNullOrUndef(rawValue)) {
            return NaN;
          } // isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values


          if ((typeof rawValue === 'number' || rawValue instanceof Number) && !isFinite(rawValue)) {
            return NaN;
          } // If it is in fact an object, dive in one more level


          if (rawValue) {
            if (this.isHorizontal()) {
              if (rawValue.x !== undefined) {
                return this.getRightValue(rawValue.x);
              }
            } else if (rawValue.y !== undefined) {
              return this.getRightValue(rawValue.y);
            }
          } // Value is good, return it


          return rawValue;
        },
        _convertTicksToLabels: function _convertTicksToLabels(ticks) {
          var me = this;
          var labels, i, ilen;
          me.ticks = ticks.map(function (tick) {
            return tick.value;
          });
          me.beforeTickToLabelConversion(); // New implementations should return the formatted tick labels but for BACKWARD
          // COMPAT, we still support no return (`this.ticks` internally changed by calling
          // this method and supposed to contain only string values).

          labels = me.convertTicksToLabels(ticks) || me.ticks;
          me.afterTickToLabelConversion(); // BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)

          for (i = 0, ilen = ticks.length; i < ilen; ++i) {
            ticks[i].label = labels[i];
          }

          return labels;
        },

        /**
         * @private
         */
        _getLabelSizes: function _getLabelSizes() {
          var me = this;
          var labelSizes = me._labelSizes;

          if (!labelSizes) {
            me._labelSizes = labelSizes = computeLabelSizes(me.ctx, parseTickFontOptions(me.options.ticks), me.getTicks(), me.longestTextCache);
            me.longestLabelWidth = labelSizes.widest.width;
          }

          return labelSizes;
        },

        /**
         * @private
         */
        _parseValue: function _parseValue(value) {
          var start, end, min, max;

          if (isArray(value)) {
            start = +this.getRightValue(value[0]);
            end = +this.getRightValue(value[1]);
            min = Math.min(start, end);
            max = Math.max(start, end);
          } else {
            value = +this.getRightValue(value);
            start = undefined;
            end = value;
            min = value;
            max = value;
          }

          return {
            min: min,
            max: max,
            start: start,
            end: end
          };
        },

        /**
        * @private
        */
        _getScaleLabel: function _getScaleLabel(rawValue) {
          var v = this._parseValue(rawValue);

          if (v.start !== undefined) {
            return '[' + v.start + ', ' + v.end + ']';
          }

          return +this.getRightValue(rawValue);
        },

        /**
         * Used to get the value to display in the tooltip for the data at the given index
         * @param index
         * @param datasetIndex
         */
        getLabelForIndex: helpers$1.noop,

        /**
         * Returns the location of the given data point. Value can either be an index or a numerical value
         * The coordinate (0, 0) is at the upper-left corner of the canvas
         * @param value
         * @param index
         * @param datasetIndex
         */
        getPixelForValue: helpers$1.noop,

        /**
         * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
         * The coordinate (0, 0) is at the upper-left corner of the canvas
         * @param pixel
         */
        getValueForPixel: helpers$1.noop,

        /**
         * Returns the location of the tick at the given index
         * The coordinate (0, 0) is at the upper-left corner of the canvas
         */
        getPixelForTick: function getPixelForTick(index) {
          var me = this;
          var offset = me.options.offset;
          var numTicks = me._ticks.length;
          var tickWidth = 1 / Math.max(numTicks - (offset ? 0 : 1), 1);
          return index < 0 || index > numTicks - 1 ? null : me.getPixelForDecimal(index * tickWidth + (offset ? tickWidth / 2 : 0));
        },

        /**
         * Utility for getting the pixel location of a percentage of scale
         * The coordinate (0, 0) is at the upper-left corner of the canvas
         */
        getPixelForDecimal: function getPixelForDecimal(decimal) {
          var me = this;

          if (me._reversePixels) {
            decimal = 1 - decimal;
          }

          return me._startPixel + decimal * me._length;
        },
        getDecimalForPixel: function getDecimalForPixel(pixel) {
          var decimal = (pixel - this._startPixel) / this._length;
          return this._reversePixels ? 1 - decimal : decimal;
        },

        /**
         * Returns the pixel for the minimum chart value
         * The coordinate (0, 0) is at the upper-left corner of the canvas
         */
        getBasePixel: function getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        },
        getBaseValue: function getBaseValue() {
          var me = this;
          var min = me.min;
          var max = me.max;
          return me.beginAtZero ? 0 : min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
        },

        /**
         * Returns a subset of ticks to be plotted to avoid overlapping labels.
         * @private
         */
        _autoSkip: function _autoSkip(ticks) {
          var me = this;
          var tickOpts = me.options.ticks;
          var axisLength = me._length;
          var ticksLimit = tickOpts.maxTicksLimit || axisLength / me._tickSize() + 1;
          var majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
          var numMajorIndices = majorIndices.length;
          var first = majorIndices[0];
          var last = majorIndices[numMajorIndices - 1];
          var i, ilen, spacing, avgMajorSpacing; // If there are too many major ticks to display them all

          if (numMajorIndices > ticksLimit) {
            skipMajors(ticks, majorIndices, numMajorIndices / ticksLimit);
            return nonSkipped(ticks);
          }

          spacing = calculateSpacing(majorIndices, ticks, axisLength, ticksLimit);

          if (numMajorIndices > 0) {
            for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
              skip(ticks, spacing, majorIndices[i], majorIndices[i + 1]);
            }

            avgMajorSpacing = numMajorIndices > 1 ? (last - first) / (numMajorIndices - 1) : null;
            skip(ticks, spacing, helpers$1.isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
            skip(ticks, spacing, last, helpers$1.isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
            return nonSkipped(ticks);
          }

          skip(ticks, spacing);
          return nonSkipped(ticks);
        },

        /**
         * @private
         */
        _tickSize: function _tickSize() {
          var me = this;
          var optionTicks = me.options.ticks; // Calculate space needed by label in axis direction.

          var rot = helpers$1.toRadians(me.labelRotation);
          var cos = Math.abs(Math.cos(rot));
          var sin = Math.abs(Math.sin(rot));

          var labelSizes = me._getLabelSizes();

          var padding = optionTicks.autoSkipPadding || 0;
          var w = labelSizes ? labelSizes.widest.width + padding : 0;
          var h = labelSizes ? labelSizes.highest.height + padding : 0; // Calculate space needed for 1 tick in axis direction.

          return me.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
        },

        /**
         * @private
         */
        _isVisible: function _isVisible() {
          var me = this;
          var chart = me.chart;
          var display = me.options.display;
          var i, ilen, meta;

          if (display !== 'auto') {
            return !!display;
          } // When 'auto', the scale is visible if at least one associated dataset is visible.


          for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
            if (chart.isDatasetVisible(i)) {
              meta = chart.getDatasetMeta(i);

              if (meta.xAxisID === me.id || meta.yAxisID === me.id) {
                return true;
              }
            }
          }

          return false;
        },

        /**
         * @private
         */
        _computeGridLineItems: function _computeGridLineItems(chartArea) {
          var me = this;
          var chart = me.chart;
          var options = me.options;
          var gridLines = options.gridLines;
          var position = options.position;
          var offsetGridLines = gridLines.offsetGridLines;
          var isHorizontal = me.isHorizontal();
          var ticks = me._ticksToDraw;
          var ticksLength = ticks.length + (offsetGridLines ? 1 : 0);
          var tl = getTickMarkLength(gridLines);
          var items = [];
          var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;
          var axisHalfWidth = axisWidth / 2;
          var alignPixel = helpers$1._alignPixel;

          var alignBorderValue = function alignBorderValue(pixel) {
            return alignPixel(chart, pixel, axisWidth);
          };

          var borderValue, i, tick, lineValue, alignedLineValue;
          var tx1, ty1, tx2, ty2, x1, y1, x2, y2, lineWidth, lineColor, borderDash, borderDashOffset;

          if (position === 'top') {
            borderValue = alignBorderValue(me.bottom);
            ty1 = me.bottom - tl;
            ty2 = borderValue - axisHalfWidth;
            y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
            y2 = chartArea.bottom;
          } else if (position === 'bottom') {
            borderValue = alignBorderValue(me.top);
            y1 = chartArea.top;
            y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
            ty1 = borderValue + axisHalfWidth;
            ty2 = me.top + tl;
          } else if (position === 'left') {
            borderValue = alignBorderValue(me.right);
            tx1 = me.right - tl;
            tx2 = borderValue - axisHalfWidth;
            x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
            x2 = chartArea.right;
          } else {
            borderValue = alignBorderValue(me.left);
            x1 = chartArea.left;
            x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
            tx1 = borderValue + axisHalfWidth;
            tx2 = me.left + tl;
          }

          for (i = 0; i < ticksLength; ++i) {
            tick = ticks[i] || {}; // autoskipper skipped this tick (#4635)

            if (isNullOrUndef(tick.label) && i < ticks.length) {
              continue;
            }

            if (i === me.zeroLineIndex && options.offset === offsetGridLines) {
              // Draw the first index specially
              lineWidth = gridLines.zeroLineWidth;
              lineColor = gridLines.zeroLineColor;
              borderDash = gridLines.zeroLineBorderDash || [];
              borderDashOffset = gridLines.zeroLineBorderDashOffset || 0.0;
            } else {
              lineWidth = valueAtIndexOrDefault(gridLines.lineWidth, i, 1);
              lineColor = valueAtIndexOrDefault(gridLines.color, i, 'rgba(0,0,0,0.1)');
              borderDash = gridLines.borderDash || [];
              borderDashOffset = gridLines.borderDashOffset || 0.0;
            }

            lineValue = getPixelForGridLine(me, tick._index || i, offsetGridLines); // Skip if the pixel is out of the range

            if (lineValue === undefined) {
              continue;
            }

            alignedLineValue = alignPixel(chart, lineValue, lineWidth);

            if (isHorizontal) {
              tx1 = tx2 = x1 = x2 = alignedLineValue;
            } else {
              ty1 = ty2 = y1 = y2 = alignedLineValue;
            }

            items.push({
              tx1: tx1,
              ty1: ty1,
              tx2: tx2,
              ty2: ty2,
              x1: x1,
              y1: y1,
              x2: x2,
              y2: y2,
              width: lineWidth,
              color: lineColor,
              borderDash: borderDash,
              borderDashOffset: borderDashOffset
            });
          }

          items.ticksLength = ticksLength;
          items.borderValue = borderValue;
          return items;
        },

        /**
         * @private
         */
        _computeLabelItems: function _computeLabelItems() {
          var me = this;
          var options = me.options;
          var optionTicks = options.ticks;
          var position = options.position;
          var isMirrored = optionTicks.mirror;
          var isHorizontal = me.isHorizontal();
          var ticks = me._ticksToDraw;
          var fonts = parseTickFontOptions(optionTicks);
          var tickPadding = optionTicks.padding;
          var tl = getTickMarkLength(options.gridLines);
          var rotation = -helpers$1.toRadians(me.labelRotation);
          var items = [];
          var i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;

          if (position === 'top') {
            y = me.bottom - tl - tickPadding;
            textAlign = !rotation ? 'center' : 'left';
          } else if (position === 'bottom') {
            y = me.top + tl + tickPadding;
            textAlign = !rotation ? 'center' : 'right';
          } else if (position === 'left') {
            x = me.right - (isMirrored ? 0 : tl) - tickPadding;
            textAlign = isMirrored ? 'left' : 'right';
          } else {
            x = me.left + (isMirrored ? 0 : tl) + tickPadding;
            textAlign = isMirrored ? 'right' : 'left';
          }

          for (i = 0, ilen = ticks.length; i < ilen; ++i) {
            tick = ticks[i];
            label = tick.label; // autoskipper skipped this tick (#4635)

            if (isNullOrUndef(label)) {
              continue;
            }

            pixel = me.getPixelForTick(tick._index || i) + optionTicks.labelOffset;
            font = tick.major ? fonts.major : fonts.minor;
            lineHeight = font.lineHeight;
            lineCount = isArray(label) ? label.length : 1;

            if (isHorizontal) {
              x = pixel;
              textOffset = position === 'top' ? ((!rotation ? 0.5 : 1) - lineCount) * lineHeight : (!rotation ? 0.5 : 0) * lineHeight;
            } else {
              y = pixel;
              textOffset = (1 - lineCount) * lineHeight / 2;
            }

            items.push({
              x: x,
              y: y,
              rotation: rotation,
              label: label,
              font: font,
              textOffset: textOffset,
              textAlign: textAlign
            });
          }

          return items;
        },

        /**
         * @private
         */
        _drawGrid: function _drawGrid(chartArea) {
          var me = this;
          var gridLines = me.options.gridLines;

          if (!gridLines.display) {
            return;
          }

          var ctx = me.ctx;
          var chart = me.chart;
          var alignPixel = helpers$1._alignPixel;
          var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;

          var items = me._gridLineItems || (me._gridLineItems = me._computeGridLineItems(chartArea));

          var width, color, i, ilen, item;

          for (i = 0, ilen = items.length; i < ilen; ++i) {
            item = items[i];
            width = item.width;
            color = item.color;

            if (width && color) {
              ctx.save();
              ctx.lineWidth = width;
              ctx.strokeStyle = color;

              if (ctx.setLineDash) {
                ctx.setLineDash(item.borderDash);
                ctx.lineDashOffset = item.borderDashOffset;
              }

              ctx.beginPath();

              if (gridLines.drawTicks) {
                ctx.moveTo(item.tx1, item.ty1);
                ctx.lineTo(item.tx2, item.ty2);
              }

              if (gridLines.drawOnChartArea) {
                ctx.moveTo(item.x1, item.y1);
                ctx.lineTo(item.x2, item.y2);
              }

              ctx.stroke();
              ctx.restore();
            }
          }

          if (axisWidth) {
            // Draw the line at the edge of the axis
            var firstLineWidth = axisWidth;
            var lastLineWidth = valueAtIndexOrDefault(gridLines.lineWidth, items.ticksLength - 1, 1);
            var borderValue = items.borderValue;
            var x1, x2, y1, y2;

            if (me.isHorizontal()) {
              x1 = alignPixel(chart, me.left, firstLineWidth) - firstLineWidth / 2;
              x2 = alignPixel(chart, me.right, lastLineWidth) + lastLineWidth / 2;
              y1 = y2 = borderValue;
            } else {
              y1 = alignPixel(chart, me.top, firstLineWidth) - firstLineWidth / 2;
              y2 = alignPixel(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
              x1 = x2 = borderValue;
            }

            ctx.lineWidth = axisWidth;
            ctx.strokeStyle = valueAtIndexOrDefault(gridLines.color, 0);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        },

        /**
         * @private
         */
        _drawLabels: function _drawLabels() {
          var me = this;
          var optionTicks = me.options.ticks;

          if (!optionTicks.display) {
            return;
          }

          var ctx = me.ctx;

          var items = me._labelItems || (me._labelItems = me._computeLabelItems());

          var i, j, ilen, jlen, item, tickFont, label, y;

          for (i = 0, ilen = items.length; i < ilen; ++i) {
            item = items[i];
            tickFont = item.font; // Make sure we draw text in the correct color and font

            ctx.save();
            ctx.translate(item.x, item.y);
            ctx.rotate(item.rotation);
            ctx.font = tickFont.string;
            ctx.fillStyle = tickFont.color;
            ctx.textBaseline = 'middle';
            ctx.textAlign = item.textAlign;
            label = item.label;
            y = item.textOffset;

            if (isArray(label)) {
              for (j = 0, jlen = label.length; j < jlen; ++j) {
                // We just make sure the multiline element is a string here..
                ctx.fillText('' + label[j], 0, y);
                y += tickFont.lineHeight;
              }
            } else {
              ctx.fillText(label, 0, y);
            }

            ctx.restore();
          }
        },

        /**
         * @private
         */
        _drawTitle: function _drawTitle() {
          var me = this;
          var ctx = me.ctx;
          var options = me.options;
          var scaleLabel = options.scaleLabel;

          if (!scaleLabel.display) {
            return;
          }

          var scaleLabelFontColor = valueOrDefault$a(scaleLabel.fontColor, core_defaults.global.defaultFontColor);

          var scaleLabelFont = helpers$1.options._parseFont(scaleLabel);

          var scaleLabelPadding = helpers$1.options.toPadding(scaleLabel.padding);
          var halfLineHeight = scaleLabelFont.lineHeight / 2;
          var position = options.position;
          var rotation = 0;
          var scaleLabelX, scaleLabelY;

          if (me.isHorizontal()) {
            scaleLabelX = me.left + me.width / 2; // midpoint of the width

            scaleLabelY = position === 'bottom' ? me.bottom - halfLineHeight - scaleLabelPadding.bottom : me.top + halfLineHeight + scaleLabelPadding.top;
          } else {
            var isLeft = position === 'left';
            scaleLabelX = isLeft ? me.left + halfLineHeight + scaleLabelPadding.top : me.right - halfLineHeight - scaleLabelPadding.top;
            scaleLabelY = me.top + me.height / 2;
            rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
          }

          ctx.save();
          ctx.translate(scaleLabelX, scaleLabelY);
          ctx.rotate(rotation);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = scaleLabelFontColor; // render in correct colour

          ctx.font = scaleLabelFont.string;
          ctx.fillText(scaleLabel.labelString, 0, 0);
          ctx.restore();
        },
        draw: function draw(chartArea) {
          var me = this;

          if (!me._isVisible()) {
            return;
          }

          me._drawGrid(chartArea);

          me._drawTitle();

          me._drawLabels();
        },

        /**
         * @private
         */
        _layers: function _layers() {
          var me = this;
          var opts = me.options;
          var tz = opts.ticks && opts.ticks.z || 0;
          var gz = opts.gridLines && opts.gridLines.z || 0;

          if (!me._isVisible() || tz === gz || me.draw !== me._draw) {
            // backward compatibility: draw has been overridden by custom scale
            return [{
              z: tz,
              draw: function draw() {
                me.draw.apply(me, arguments);
              }
            }];
          }

          return [{
            z: gz,
            draw: function draw() {
              me._drawGrid.apply(me, arguments);

              me._drawTitle.apply(me, arguments);
            }
          }, {
            z: tz,
            draw: function draw() {
              me._drawLabels.apply(me, arguments);
            }
          }];
        },

        /**
         * @private
         */
        _getMatchingVisibleMetas: function _getMatchingVisibleMetas(type) {
          var me = this;
          var isHorizontal = me.isHorizontal();
          return me.chart._getSortedVisibleDatasetMetas().filter(function (meta) {
            return (!type || meta.type === type) && (isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id);
          });
        }
      });
      Scale.prototype._draw = Scale.prototype.draw;
      var core_scale = Scale;
      var isNullOrUndef$1 = helpers$1.isNullOrUndef;
      var defaultConfig = {
        position: 'bottom'
      };
      var scale_category = core_scale.extend({
        determineDataLimits: function determineDataLimits() {
          var me = this;

          var labels = me._getLabels();

          var ticksOpts = me.options.ticks;
          var min = ticksOpts.min;
          var max = ticksOpts.max;
          var minIndex = 0;
          var maxIndex = labels.length - 1;
          var findIndex;

          if (min !== undefined) {
            // user specified min value
            findIndex = labels.indexOf(min);

            if (findIndex >= 0) {
              minIndex = findIndex;
            }
          }

          if (max !== undefined) {
            // user specified max value
            findIndex = labels.indexOf(max);

            if (findIndex >= 0) {
              maxIndex = findIndex;
            }
          }

          me.minIndex = minIndex;
          me.maxIndex = maxIndex;
          me.min = labels[minIndex];
          me.max = labels[maxIndex];
        },
        buildTicks: function buildTicks() {
          var me = this;

          var labels = me._getLabels();

          var minIndex = me.minIndex;
          var maxIndex = me.maxIndex; // If we are viewing some subset of labels, slice the original array

          me.ticks = minIndex === 0 && maxIndex === labels.length - 1 ? labels : labels.slice(minIndex, maxIndex + 1);
        },
        getLabelForIndex: function getLabelForIndex(index, datasetIndex) {
          var me = this;
          var chart = me.chart;

          if (chart.getDatasetMeta(datasetIndex).controller._getValueScaleId() === me.id) {
            return me.getRightValue(chart.data.datasets[datasetIndex].data[index]);
          }

          return me._getLabels()[index];
        },
        _configure: function _configure() {
          var me = this;
          var offset = me.options.offset;
          var ticks = me.ticks;

          core_scale.prototype._configure.call(me);

          if (!me.isHorizontal()) {
            // For backward compatibility, vertical category scale reverse is inverted.
            me._reversePixels = !me._reversePixels;
          }

          if (!ticks) {
            return;
          }

          me._startValue = me.minIndex - (offset ? 0.5 : 0);
          me._valueRange = Math.max(ticks.length - (offset ? 0 : 1), 1);
        },
        // Used to get data value locations.  Value can either be an index or a numerical value
        getPixelForValue: function getPixelForValue(value, index, datasetIndex) {
          var me = this;
          var valueCategory, labels, idx;

          if (!isNullOrUndef$1(index) && !isNullOrUndef$1(datasetIndex)) {
            value = me.chart.data.datasets[datasetIndex].data[index];
          } // If value is a data object, then index is the index in the data array,
          // not the index of the scale. We need to change that.


          if (!isNullOrUndef$1(value)) {
            valueCategory = me.isHorizontal() ? value.x : value.y;
          }

          if (valueCategory !== undefined || value !== undefined && isNaN(index)) {
            labels = me._getLabels();
            value = helpers$1.valueOrDefault(valueCategory, value);
            idx = labels.indexOf(value);
            index = idx !== -1 ? idx : index;

            if (isNaN(index)) {
              index = value;
            }
          }

          return me.getPixelForDecimal((index - me._startValue) / me._valueRange);
        },
        getPixelForTick: function getPixelForTick(index) {
          var ticks = this.ticks;
          return index < 0 || index > ticks.length - 1 ? null : this.getPixelForValue(ticks[index], index + this.minIndex);
        },
        getValueForPixel: function getValueForPixel(pixel) {
          var me = this;
          var value = Math.round(me._startValue + me.getDecimalForPixel(pixel) * me._valueRange);
          return Math.min(Math.max(value, 0), me.ticks.length - 1);
        },
        getBasePixel: function getBasePixel() {
          return this.bottom;
        }
      }); // INTERNAL: static default options, registered in src/index.js

      var _defaults = defaultConfig;
      scale_category._defaults = _defaults;
      var noop = helpers$1.noop;
      var isNullOrUndef$2 = helpers$1.isNullOrUndef;
      /**
       * Generate a set of linear ticks
       * @param generationOptions the options used to generate the ticks
       * @param dataRange the range of the data
       * @returns {number[]} array of tick values
       */

      function generateTicks(generationOptions, dataRange) {
        var ticks = []; // To get a "nice" value for the tick spacing, we will use the appropriately named
        // "nice number" algorithm. See https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
        // for details.

        var MIN_SPACING = 1e-14;
        var stepSize = generationOptions.stepSize;
        var unit = stepSize || 1;
        var maxNumSpaces = generationOptions.maxTicks - 1;
        var min = generationOptions.min;
        var max = generationOptions.max;
        var precision = generationOptions.precision;
        var rmin = dataRange.min;
        var rmax = dataRange.max;
        var spacing = helpers$1.niceNum((rmax - rmin) / maxNumSpaces / unit) * unit;
        var factor, niceMin, niceMax, numSpaces; // Beyond MIN_SPACING floating point numbers being to lose precision
        // such that we can't do the math necessary to generate ticks

        if (spacing < MIN_SPACING && isNullOrUndef$2(min) && isNullOrUndef$2(max)) {
          return [rmin, rmax];
        }

        numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);

        if (numSpaces > maxNumSpaces) {
          // If the calculated num of spaces exceeds maxNumSpaces, recalculate it
          spacing = helpers$1.niceNum(numSpaces * spacing / maxNumSpaces / unit) * unit;
        }

        if (stepSize || isNullOrUndef$2(precision)) {
          // If a precision is not specified, calculate factor based on spacing
          factor = Math.pow(10, helpers$1._decimalPlaces(spacing));
        } else {
          // If the user specified a precision, round to that number of decimal places
          factor = Math.pow(10, precision);
          spacing = Math.ceil(spacing * factor) / factor;
        }

        niceMin = Math.floor(rmin / spacing) * spacing;
        niceMax = Math.ceil(rmax / spacing) * spacing; // If min, max and stepSize is set and they make an evenly spaced scale use it.

        if (stepSize) {
          // If very close to our whole number, use it.
          if (!isNullOrUndef$2(min) && helpers$1.almostWhole(min / spacing, spacing / 1000)) {
            niceMin = min;
          }

          if (!isNullOrUndef$2(max) && helpers$1.almostWhole(max / spacing, spacing / 1000)) {
            niceMax = max;
          }
        }

        numSpaces = (niceMax - niceMin) / spacing; // If very close to our rounded value, use it.

        if (helpers$1.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
          numSpaces = Math.round(numSpaces);
        } else {
          numSpaces = Math.ceil(numSpaces);
        }

        niceMin = Math.round(niceMin * factor) / factor;
        niceMax = Math.round(niceMax * factor) / factor;
        ticks.push(isNullOrUndef$2(min) ? niceMin : min);

        for (var j = 1; j < numSpaces; ++j) {
          ticks.push(Math.round((niceMin + j * spacing) * factor) / factor);
        }

        ticks.push(isNullOrUndef$2(max) ? niceMax : max);
        return ticks;
      }

      var scale_linearbase = core_scale.extend({
        getRightValue: function getRightValue(value) {
          if (typeof value === 'string') {
            return +value;
          }

          return core_scale.prototype.getRightValue.call(this, value);
        },
        handleTickRangeOptions: function handleTickRangeOptions() {
          var me = this;
          var opts = me.options;
          var tickOpts = opts.ticks; // If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
          // do nothing since that would make the chart weird. If the user really wants a weird chart
          // axis, they can manually override it

          if (tickOpts.beginAtZero) {
            var minSign = helpers$1.sign(me.min);
            var maxSign = helpers$1.sign(me.max);

            if (minSign < 0 && maxSign < 0) {
              // move the top up to 0
              me.max = 0;
            } else if (minSign > 0 && maxSign > 0) {
              // move the bottom down to 0
              me.min = 0;
            }
          }

          var setMin = tickOpts.min !== undefined || tickOpts.suggestedMin !== undefined;
          var setMax = tickOpts.max !== undefined || tickOpts.suggestedMax !== undefined;

          if (tickOpts.min !== undefined) {
            me.min = tickOpts.min;
          } else if (tickOpts.suggestedMin !== undefined) {
            if (me.min === null) {
              me.min = tickOpts.suggestedMin;
            } else {
              me.min = Math.min(me.min, tickOpts.suggestedMin);
            }
          }

          if (tickOpts.max !== undefined) {
            me.max = tickOpts.max;
          } else if (tickOpts.suggestedMax !== undefined) {
            if (me.max === null) {
              me.max = tickOpts.suggestedMax;
            } else {
              me.max = Math.max(me.max, tickOpts.suggestedMax);
            }
          }

          if (setMin !== setMax) {
            // We set the min or the max but not both.
            // So ensure that our range is good
            // Inverted or 0 length range can happen when
            // ticks.min is set, and no datasets are visible
            if (me.min >= me.max) {
              if (setMin) {
                me.max = me.min + 1;
              } else {
                me.min = me.max - 1;
              }
            }
          }

          if (me.min === me.max) {
            me.max++;

            if (!tickOpts.beginAtZero) {
              me.min--;
            }
          }
        },
        getTickLimit: function getTickLimit() {
          var me = this;
          var tickOpts = me.options.ticks;
          var stepSize = tickOpts.stepSize;
          var maxTicksLimit = tickOpts.maxTicksLimit;
          var maxTicks;

          if (stepSize) {
            maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
          } else {
            maxTicks = me._computeTickLimit();
            maxTicksLimit = maxTicksLimit || 11;
          }

          if (maxTicksLimit) {
            maxTicks = Math.min(maxTicksLimit, maxTicks);
          }

          return maxTicks;
        },
        _computeTickLimit: function _computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        },
        handleDirectionalChanges: noop,
        buildTicks: function buildTicks() {
          var me = this;
          var opts = me.options;
          var tickOpts = opts.ticks; // Figure out what the max number of ticks we can support it is based on the size of
          // the axis area. For now, we say that the minimum tick spacing in pixels must be 40
          // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
          // the graph. Make sure we always have at least 2 ticks

          var maxTicks = me.getTickLimit();
          maxTicks = Math.max(2, maxTicks);
          var numericGeneratorOptions = {
            maxTicks: maxTicks,
            min: tickOpts.min,
            max: tickOpts.max,
            precision: tickOpts.precision,
            stepSize: helpers$1.valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
          };
          var ticks = me.ticks = generateTicks(numericGeneratorOptions, me);
          me.handleDirectionalChanges(); // At this point, we need to update our max and min given the tick values since we have expanded the
          // range of the scale

          me.max = helpers$1.max(ticks);
          me.min = helpers$1.min(ticks);

          if (tickOpts.reverse) {
            ticks.reverse();
            me.start = me.max;
            me.end = me.min;
          } else {
            me.start = me.min;
            me.end = me.max;
          }
        },
        convertTicksToLabels: function convertTicksToLabels() {
          var me = this;
          me.ticksAsNumbers = me.ticks.slice();
          me.zeroLineIndex = me.ticks.indexOf(0);
          core_scale.prototype.convertTicksToLabels.call(me);
        },
        _configure: function _configure() {
          var me = this;
          var ticks = me.getTicks();
          var start = me.min;
          var end = me.max;
          var offset;

          core_scale.prototype._configure.call(me);

          if (me.options.offset && ticks.length) {
            offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
            start -= offset;
            end += offset;
          }

          me._startValue = start;
          me._endValue = end;
          me._valueRange = end - start;
        }
      });
      var defaultConfig$1 = {
        position: 'left',
        ticks: {
          callback: core_ticks.formatters.linear
        }
      };
      var DEFAULT_MIN = 0;
      var DEFAULT_MAX = 1;

      function getOrCreateStack(stacks, stacked, meta) {
        var key = [meta.type, // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
        stacked === undefined && meta.stack === undefined ? meta.index : '', meta.stack].join('.');

        if (stacks[key] === undefined) {
          stacks[key] = {
            pos: [],
            neg: []
          };
        }

        return stacks[key];
      }

      function stackData(scale, stacks, meta, data) {
        var opts = scale.options;
        var stacked = opts.stacked;
        var stack = getOrCreateStack(stacks, stacked, meta);
        var pos = stack.pos;
        var neg = stack.neg;
        var ilen = data.length;
        var i, value;

        for (i = 0; i < ilen; ++i) {
          value = scale._parseValue(data[i]);

          if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
            continue;
          }

          pos[i] = pos[i] || 0;
          neg[i] = neg[i] || 0;

          if (opts.relativePoints) {
            pos[i] = 100;
          } else if (value.min < 0 || value.max < 0) {
            neg[i] += value.min;
          } else {
            pos[i] += value.max;
          }
        }
      }

      function updateMinMax(scale, meta, data) {
        var ilen = data.length;
        var i, value;

        for (i = 0; i < ilen; ++i) {
          value = scale._parseValue(data[i]);

          if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
            continue;
          }

          scale.min = Math.min(scale.min, value.min);
          scale.max = Math.max(scale.max, value.max);
        }
      }

      var scale_linear = scale_linearbase.extend({
        determineDataLimits: function determineDataLimits() {
          var me = this;
          var opts = me.options;
          var chart = me.chart;
          var datasets = chart.data.datasets;

          var metasets = me._getMatchingVisibleMetas();

          var hasStacks = opts.stacked;
          var stacks = {};
          var ilen = metasets.length;
          var i, meta, data, values;
          me.min = Number.POSITIVE_INFINITY;
          me.max = Number.NEGATIVE_INFINITY;

          if (hasStacks === undefined) {
            for (i = 0; !hasStacks && i < ilen; ++i) {
              meta = metasets[i];
              hasStacks = meta.stack !== undefined;
            }
          }

          for (i = 0; i < ilen; ++i) {
            meta = metasets[i];
            data = datasets[meta.index].data;

            if (hasStacks) {
              stackData(me, stacks, meta, data);
            } else {
              updateMinMax(me, meta, data);
            }
          }

          helpers$1.each(stacks, function (stackValues) {
            values = stackValues.pos.concat(stackValues.neg);
            me.min = Math.min(me.min, helpers$1.min(values));
            me.max = Math.max(me.max, helpers$1.max(values));
          });
          me.min = helpers$1.isFinite(me.min) && !isNaN(me.min) ? me.min : DEFAULT_MIN;
          me.max = helpers$1.isFinite(me.max) && !isNaN(me.max) ? me.max : DEFAULT_MAX; // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero

          me.handleTickRangeOptions();
        },
        // Returns the maximum number of ticks based on the scale dimension
        _computeTickLimit: function _computeTickLimit() {
          var me = this;
          var tickFont;

          if (me.isHorizontal()) {
            return Math.ceil(me.width / 40);
          }

          tickFont = helpers$1.options._parseFont(me.options.ticks);
          return Math.ceil(me.height / tickFont.lineHeight);
        },
        // Called after the ticks are built. We need
        handleDirectionalChanges: function handleDirectionalChanges() {
          if (!this.isHorizontal()) {
            // We are in a vertical orientation. The top value is the highest. So reverse the array
            this.ticks.reverse();
          }
        },
        getLabelForIndex: function getLabelForIndex(index, datasetIndex) {
          return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);
        },
        // Utils
        getPixelForValue: function getPixelForValue(value) {
          var me = this;
          return me.getPixelForDecimal((+me.getRightValue(value) - me._startValue) / me._valueRange);
        },
        getValueForPixel: function getValueForPixel(pixel) {
          return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
        },
        getPixelForTick: function getPixelForTick(index) {
          var ticks = this.ticksAsNumbers;

          if (index < 0 || index > ticks.length - 1) {
            return null;
          }

          return this.getPixelForValue(ticks[index]);
        }
      }); // INTERNAL: static default options, registered in src/index.js

      var _defaults$1 = defaultConfig$1;
      scale_linear._defaults = _defaults$1;
      var valueOrDefault$b = helpers$1.valueOrDefault;
      var log10 = helpers$1.math.log10;
      /**
       * Generate a set of logarithmic ticks
       * @param generationOptions the options used to generate the ticks
       * @param dataRange the range of the data
       * @returns {number[]} array of tick values
       */

      function generateTicks$1(generationOptions, dataRange) {
        var ticks = [];
        var tickVal = valueOrDefault$b(generationOptions.min, Math.pow(10, Math.floor(log10(dataRange.min))));
        var endExp = Math.floor(log10(dataRange.max));
        var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
        var exp, significand;

        if (tickVal === 0) {
          exp = Math.floor(log10(dataRange.minNotZero));
          significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));
          ticks.push(tickVal);
          tickVal = significand * Math.pow(10, exp);
        } else {
          exp = Math.floor(log10(tickVal));
          significand = Math.floor(tickVal / Math.pow(10, exp));
        }

        var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;

        do {
          ticks.push(tickVal);
          ++significand;

          if (significand === 10) {
            significand = 1;
            ++exp;
            precision = exp >= 0 ? 1 : precision;
          }

          tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
        } while (exp < endExp || exp === endExp && significand < endSignificand);

        var lastTick = valueOrDefault$b(generationOptions.max, tickVal);
        ticks.push(lastTick);
        return ticks;
      }

      var defaultConfig$2 = {
        position: 'left',
        // label settings
        ticks: {
          callback: core_ticks.formatters.logarithmic
        }
      }; // TODO(v3): change this to positiveOrDefault

      function nonNegativeOrDefault(value, defaultValue) {
        return helpers$1.isFinite(value) && value >= 0 ? value : defaultValue;
      }

      var scale_logarithmic = core_scale.extend({
        determineDataLimits: function determineDataLimits() {
          var me = this;
          var opts = me.options;
          var chart = me.chart;
          var datasets = chart.data.datasets;
          var isHorizontal = me.isHorizontal();

          function IDMatches(meta) {
            return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
          }

          var datasetIndex, meta, value, data, i, ilen; // Calculate Range

          me.min = Number.POSITIVE_INFINITY;
          me.max = Number.NEGATIVE_INFINITY;
          me.minNotZero = Number.POSITIVE_INFINITY;
          var hasStacks = opts.stacked;

          if (hasStacks === undefined) {
            for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
              meta = chart.getDatasetMeta(datasetIndex);

              if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) && meta.stack !== undefined) {
                hasStacks = true;
                break;
              }
            }
          }

          if (opts.stacked || hasStacks) {
            var valuesPerStack = {};

            for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
              meta = chart.getDatasetMeta(datasetIndex);
              var key = [meta.type, // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
              opts.stacked === undefined && meta.stack === undefined ? datasetIndex : '', meta.stack].join('.');

              if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
                if (valuesPerStack[key] === undefined) {
                  valuesPerStack[key] = [];
                }

                data = datasets[datasetIndex].data;

                for (i = 0, ilen = data.length; i < ilen; i++) {
                  var values = valuesPerStack[key];
                  value = me._parseValue(data[i]); // invalid, hidden and negative values are ignored

                  if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
                    continue;
                  }

                  values[i] = values[i] || 0;
                  values[i] += value.max;
                }
              }
            }

            helpers$1.each(valuesPerStack, function (valuesForType) {
              if (valuesForType.length > 0) {
                var minVal = helpers$1.min(valuesForType);
                var maxVal = helpers$1.max(valuesForType);
                me.min = Math.min(me.min, minVal);
                me.max = Math.max(me.max, maxVal);
              }
            });
          } else {
            for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
              meta = chart.getDatasetMeta(datasetIndex);

              if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
                data = datasets[datasetIndex].data;

                for (i = 0, ilen = data.length; i < ilen; i++) {
                  value = me._parseValue(data[i]); // invalid, hidden and negative values are ignored

                  if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
                    continue;
                  }

                  me.min = Math.min(value.min, me.min);
                  me.max = Math.max(value.max, me.max);

                  if (value.min !== 0) {
                    me.minNotZero = Math.min(value.min, me.minNotZero);
                  }
                }
              }
            }
          }

          me.min = helpers$1.isFinite(me.min) ? me.min : null;
          me.max = helpers$1.isFinite(me.max) ? me.max : null;
          me.minNotZero = helpers$1.isFinite(me.minNotZero) ? me.minNotZero : null; // Common base implementation to handle ticks.min, ticks.max

          this.handleTickRangeOptions();
        },
        handleTickRangeOptions: function handleTickRangeOptions() {
          var me = this;
          var tickOpts = me.options.ticks;
          var DEFAULT_MIN = 1;
          var DEFAULT_MAX = 10;
          me.min = nonNegativeOrDefault(tickOpts.min, me.min);
          me.max = nonNegativeOrDefault(tickOpts.max, me.max);

          if (me.min === me.max) {
            if (me.min !== 0 && me.min !== null) {
              me.min = Math.pow(10, Math.floor(log10(me.min)) - 1);
              me.max = Math.pow(10, Math.floor(log10(me.max)) + 1);
            } else {
              me.min = DEFAULT_MIN;
              me.max = DEFAULT_MAX;
            }
          }

          if (me.min === null) {
            me.min = Math.pow(10, Math.floor(log10(me.max)) - 1);
          }

          if (me.max === null) {
            me.max = me.min !== 0 ? Math.pow(10, Math.floor(log10(me.min)) + 1) : DEFAULT_MAX;
          }

          if (me.minNotZero === null) {
            if (me.min > 0) {
              me.minNotZero = me.min;
            } else if (me.max < 1) {
              me.minNotZero = Math.pow(10, Math.floor(log10(me.max)));
            } else {
              me.minNotZero = DEFAULT_MIN;
            }
          }
        },
        buildTicks: function buildTicks() {
          var me = this;
          var tickOpts = me.options.ticks;
          var reverse = !me.isHorizontal();
          var generationOptions = {
            min: nonNegativeOrDefault(tickOpts.min),
            max: nonNegativeOrDefault(tickOpts.max)
          };
          var ticks = me.ticks = generateTicks$1(generationOptions, me); // At this point, we need to update our max and min given the tick values since we have expanded the
          // range of the scale

          me.max = helpers$1.max(ticks);
          me.min = helpers$1.min(ticks);

          if (tickOpts.reverse) {
            reverse = !reverse;
            me.start = me.max;
            me.end = me.min;
          } else {
            me.start = me.min;
            me.end = me.max;
          }

          if (reverse) {
            ticks.reverse();
          }
        },
        convertTicksToLabels: function convertTicksToLabels() {
          this.tickValues = this.ticks.slice();
          core_scale.prototype.convertTicksToLabels.call(this);
        },
        // Get the correct tooltip label
        getLabelForIndex: function getLabelForIndex(index, datasetIndex) {
          return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);
        },
        getPixelForTick: function getPixelForTick(index) {
          var ticks = this.tickValues;

          if (index < 0 || index > ticks.length - 1) {
            return null;
          }

          return this.getPixelForValue(ticks[index]);
        },

        /**
         * Returns the value of the first tick.
         * @param {number} value - The minimum not zero value.
         * @return {number} The first tick value.
         * @private
         */
        _getFirstTickValue: function _getFirstTickValue(value) {
          var exp = Math.floor(log10(value));
          var significand = Math.floor(value / Math.pow(10, exp));
          return significand * Math.pow(10, exp);
        },
        _configure: function _configure() {
          var me = this;
          var start = me.min;
          var offset = 0;

          core_scale.prototype._configure.call(me);

          if (start === 0) {
            start = me._getFirstTickValue(me.minNotZero);
            offset = valueOrDefault$b(me.options.ticks.fontSize, core_defaults.global.defaultFontSize) / me._length;
          }

          me._startValue = log10(start);
          me._valueOffset = offset;
          me._valueRange = (log10(me.max) - log10(start)) / (1 - offset);
        },
        getPixelForValue: function getPixelForValue(value) {
          var me = this;
          var decimal = 0;
          value = +me.getRightValue(value);

          if (value > me.min && value > 0) {
            decimal = (log10(value) - me._startValue) / me._valueRange + me._valueOffset;
          }

          return me.getPixelForDecimal(decimal);
        },
        getValueForPixel: function getValueForPixel(pixel) {
          var me = this;
          var decimal = me.getDecimalForPixel(pixel);
          return decimal === 0 && me.min === 0 ? 0 : Math.pow(10, me._startValue + (decimal - me._valueOffset) * me._valueRange);
        }
      }); // INTERNAL: static default options, registered in src/index.js

      var _defaults$2 = defaultConfig$2;
      scale_logarithmic._defaults = _defaults$2;
      var valueOrDefault$c = helpers$1.valueOrDefault;
      var valueAtIndexOrDefault$1 = helpers$1.valueAtIndexOrDefault;
      var resolve$4 = helpers$1.options.resolve;
      var defaultConfig$3 = {
        display: true,
        // Boolean - Whether to animate scaling the chart from the centre
        animate: true,
        position: 'chartArea',
        angleLines: {
          display: true,
          color: 'rgba(0,0,0,0.1)',
          lineWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0
        },
        gridLines: {
          circular: false
        },
        // label settings
        ticks: {
          // Boolean - Show a backdrop to the scale label
          showLabelBackdrop: true,
          // String - The colour of the label backdrop
          backdropColor: 'rgba(255,255,255,0.75)',
          // Number - The backdrop padding above & below the label in pixels
          backdropPaddingY: 2,
          // Number - The backdrop padding to the side of the label in pixels
          backdropPaddingX: 2,
          callback: core_ticks.formatters.linear
        },
        pointLabels: {
          // Boolean - if true, show point labels
          display: true,
          // Number - Point label font size in pixels
          fontSize: 10,
          // Function - Used to convert point labels
          callback: function callback(label) {
            return label;
          }
        }
      };

      function getTickBackdropHeight(opts) {
        var tickOpts = opts.ticks;

        if (tickOpts.display && opts.display) {
          return valueOrDefault$c(tickOpts.fontSize, core_defaults.global.defaultFontSize) + tickOpts.backdropPaddingY * 2;
        }

        return 0;
      }

      function measureLabelSize(ctx, lineHeight, label) {
        if (helpers$1.isArray(label)) {
          return {
            w: helpers$1.longestText(ctx, ctx.font, label),
            h: label.length * lineHeight
          };
        }

        return {
          w: ctx.measureText(label).width,
          h: lineHeight
        };
      }

      function determineLimits(angle, pos, size, min, max) {
        if (angle === min || angle === max) {
          return {
            start: pos - size / 2,
            end: pos + size / 2
          };
        } else if (angle < min || angle > max) {
          return {
            start: pos - size,
            end: pos
          };
        }

        return {
          start: pos,
          end: pos + size
        };
      }
      /**
       * Helper function to fit a radial linear scale with point labels
       */


      function fitWithPointLabels(scale) {
        // Right, this is really confusing and there is a lot of maths going on here
        // The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
        //
        // Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
        //
        // Solution:
        //
        // We assume the radius of the polygon is half the size of the canvas at first
        // at each index we check if the text overlaps.
        //
        // Where it does, we store that angle and that index.
        //
        // After finding the largest index and angle we calculate how much we need to remove
        // from the shape radius to move the point inwards by that x.
        //
        // We average the left and right distances to get the maximum shape radius that can fit in the box
        // along with labels.
        //
        // Once we have that, we can find the centre point for the chart, by taking the x text protrusion
        // on each side, removing that from the size, halving it and adding the left x protrusion width.
        //
        // This will mean we have a shape fitted to the canvas, as large as it can be with the labels
        // and position it in the most space efficient manner
        //
        // https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
        var plFont = helpers$1.options._parseFont(scale.options.pointLabels); // Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
        // Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points


        var furthestLimits = {
          l: 0,
          r: scale.width,
          t: 0,
          b: scale.height - scale.paddingTop
        };
        var furthestAngles = {};
        var i, textSize, pointPosition;
        scale.ctx.font = plFont.string;
        scale._pointLabelSizes = [];
        var valueCount = scale.chart.data.labels.length;

        for (i = 0; i < valueCount; i++) {
          pointPosition = scale.getPointPosition(i, scale.drawingArea + 5);
          textSize = measureLabelSize(scale.ctx, plFont.lineHeight, scale.pointLabels[i]);
          scale._pointLabelSizes[i] = textSize; // Add quarter circle to make degree 0 mean top of circle

          var angleRadians = scale.getIndexAngle(i);
          var angle = helpers$1.toDegrees(angleRadians) % 360;
          var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
          var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

          if (hLimits.start < furthestLimits.l) {
            furthestLimits.l = hLimits.start;
            furthestAngles.l = angleRadians;
          }

          if (hLimits.end > furthestLimits.r) {
            furthestLimits.r = hLimits.end;
            furthestAngles.r = angleRadians;
          }

          if (vLimits.start < furthestLimits.t) {
            furthestLimits.t = vLimits.start;
            furthestAngles.t = angleRadians;
          }

          if (vLimits.end > furthestLimits.b) {
            furthestLimits.b = vLimits.end;
            furthestAngles.b = angleRadians;
          }
        }

        scale.setReductions(scale.drawingArea, furthestLimits, furthestAngles);
      }

      function getTextAlignForAngle(angle) {
        if (angle === 0 || angle === 180) {
          return 'center';
        } else if (angle < 180) {
          return 'left';
        }

        return 'right';
      }

      function fillText(ctx, text, position, lineHeight) {
        var y = position.y + lineHeight / 2;
        var i, ilen;

        if (helpers$1.isArray(text)) {
          for (i = 0, ilen = text.length; i < ilen; ++i) {
            ctx.fillText(text[i], position.x, y);
            y += lineHeight;
          }
        } else {
          ctx.fillText(text, position.x, y);
        }
      }

      function adjustPointPositionForLabelHeight(angle, textSize, position) {
        if (angle === 90 || angle === 270) {
          position.y -= textSize.h / 2;
        } else if (angle > 270 || angle < 90) {
          position.y -= textSize.h;
        }
      }

      function drawPointLabels(scale) {
        var ctx = scale.ctx;
        var opts = scale.options;
        var pointLabelOpts = opts.pointLabels;
        var tickBackdropHeight = getTickBackdropHeight(opts);
        var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);

        var plFont = helpers$1.options._parseFont(pointLabelOpts);

        ctx.save();
        ctx.font = plFont.string;
        ctx.textBaseline = 'middle';

        for (var i = scale.chart.data.labels.length - 1; i >= 0; i--) {
          // Extra pixels out for some label spacing
          var extra = i === 0 ? tickBackdropHeight / 2 : 0;
          var pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + 5); // Keep this in loop since we may support array properties here

          var pointLabelFontColor = valueAtIndexOrDefault$1(pointLabelOpts.fontColor, i, core_defaults.global.defaultFontColor);
          ctx.fillStyle = pointLabelFontColor;
          var angleRadians = scale.getIndexAngle(i);
          var angle = helpers$1.toDegrees(angleRadians);
          ctx.textAlign = getTextAlignForAngle(angle);
          adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
          fillText(ctx, scale.pointLabels[i], pointLabelPosition, plFont.lineHeight);
        }

        ctx.restore();
      }

      function drawRadiusLine(scale, gridLineOpts, radius, index) {
        var ctx = scale.ctx;
        var circular = gridLineOpts.circular;
        var valueCount = scale.chart.data.labels.length;
        var lineColor = valueAtIndexOrDefault$1(gridLineOpts.color, index - 1);
        var lineWidth = valueAtIndexOrDefault$1(gridLineOpts.lineWidth, index - 1);
        var pointPosition;

        if (!circular && !valueCount || !lineColor || !lineWidth) {
          return;
        }

        ctx.save();
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;

        if (ctx.setLineDash) {
          ctx.setLineDash(gridLineOpts.borderDash || []);
          ctx.lineDashOffset = gridLineOpts.borderDashOffset || 0.0;
        }

        ctx.beginPath();

        if (circular) {
          // Draw circular arcs between the points
          ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
        } else {
          // Draw straight lines connecting each index
          pointPosition = scale.getPointPosition(0, radius);
          ctx.moveTo(pointPosition.x, pointPosition.y);

          for (var i = 1; i < valueCount; i++) {
            pointPosition = scale.getPointPosition(i, radius);
            ctx.lineTo(pointPosition.x, pointPosition.y);
          }
        }

        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }

      function numberOrZero(param) {
        return helpers$1.isNumber(param) ? param : 0;
      }

      var scale_radialLinear = scale_linearbase.extend({
        setDimensions: function setDimensions() {
          var me = this; // Set the unconstrained dimension before label rotation

          me.width = me.maxWidth;
          me.height = me.maxHeight;
          me.paddingTop = getTickBackdropHeight(me.options) / 2;
          me.xCenter = Math.floor(me.width / 2);
          me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
          me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
        },
        determineDataLimits: function determineDataLimits() {
          var me = this;
          var chart = me.chart;
          var min = Number.POSITIVE_INFINITY;
          var max = Number.NEGATIVE_INFINITY;
          helpers$1.each(chart.data.datasets, function (dataset, datasetIndex) {
            if (chart.isDatasetVisible(datasetIndex)) {
              var meta = chart.getDatasetMeta(datasetIndex);
              helpers$1.each(dataset.data, function (rawValue, index) {
                var value = +me.getRightValue(rawValue);

                if (isNaN(value) || meta.data[index].hidden) {
                  return;
                }

                min = Math.min(value, min);
                max = Math.max(value, max);
              });
            }
          });
          me.min = min === Number.POSITIVE_INFINITY ? 0 : min;
          me.max = max === Number.NEGATIVE_INFINITY ? 0 : max; // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero

          me.handleTickRangeOptions();
        },
        // Returns the maximum number of ticks based on the scale dimension
        _computeTickLimit: function _computeTickLimit() {
          return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
        },
        convertTicksToLabels: function convertTicksToLabels() {
          var me = this;
          scale_linearbase.prototype.convertTicksToLabels.call(me); // Point labels

          me.pointLabels = me.chart.data.labels.map(function () {
            var label = helpers$1.callback(me.options.pointLabels.callback, arguments, me);
            return label || label === 0 ? label : '';
          });
        },
        getLabelForIndex: function getLabelForIndex(index, datasetIndex) {
          return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
        },
        fit: function fit() {
          var me = this;
          var opts = me.options;

          if (opts.display && opts.pointLabels.display) {
            fitWithPointLabels(me);
          } else {
            me.setCenterPoint(0, 0, 0, 0);
          }
        },

        /**
         * Set radius reductions and determine new radius and center point
         * @private
         */
        setReductions: function setReductions(largestPossibleRadius, furthestLimits, furthestAngles) {
          var me = this;
          var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
          var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
          var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
          var radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);
          radiusReductionLeft = numberOrZero(radiusReductionLeft);
          radiusReductionRight = numberOrZero(radiusReductionRight);
          radiusReductionTop = numberOrZero(radiusReductionTop);
          radiusReductionBottom = numberOrZero(radiusReductionBottom);
          me.drawingArea = Math.min(Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2), Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
          me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
        },
        setCenterPoint: function setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
          var me = this;
          var maxRight = me.width - rightMovement - me.drawingArea;
          var maxLeft = leftMovement + me.drawingArea;
          var maxTop = topMovement + me.drawingArea;
          var maxBottom = me.height - me.paddingTop - bottomMovement - me.drawingArea;
          me.xCenter = Math.floor((maxLeft + maxRight) / 2 + me.left);
          me.yCenter = Math.floor((maxTop + maxBottom) / 2 + me.top + me.paddingTop);
        },
        getIndexAngle: function getIndexAngle(index) {
          var chart = this.chart;
          var angleMultiplier = 360 / chart.data.labels.length;
          var options = chart.options || {};
          var startAngle = options.startAngle || 0; // Start from the top instead of right, so remove a quarter of the circle

          var angle = (index * angleMultiplier + startAngle) % 360;
          return (angle < 0 ? angle + 360 : angle) * Math.PI * 2 / 360;
        },
        getDistanceFromCenterForValue: function getDistanceFromCenterForValue(value) {
          var me = this;

          if (helpers$1.isNullOrUndef(value)) {
            return NaN;
          } // Take into account half font size + the yPadding of the top value


          var scalingFactor = me.drawingArea / (me.max - me.min);

          if (me.options.ticks.reverse) {
            return (me.max - value) * scalingFactor;
          }

          return (value - me.min) * scalingFactor;
        },
        getPointPosition: function getPointPosition(index, distanceFromCenter) {
          var me = this;
          var thisAngle = me.getIndexAngle(index) - Math.PI / 2;
          return {
            x: Math.cos(thisAngle) * distanceFromCenter + me.xCenter,
            y: Math.sin(thisAngle) * distanceFromCenter + me.yCenter
          };
        },
        getPointPositionForValue: function getPointPositionForValue(index, value) {
          return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
        },
        getBasePosition: function getBasePosition(index) {
          var me = this;
          var min = me.min;
          var max = me.max;
          return me.getPointPositionForValue(index || 0, me.beginAtZero ? 0 : min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0);
        },

        /**
         * @private
         */
        _drawGrid: function _drawGrid() {
          var me = this;
          var ctx = me.ctx;
          var opts = me.options;
          var gridLineOpts = opts.gridLines;
          var angleLineOpts = opts.angleLines;
          var lineWidth = valueOrDefault$c(angleLineOpts.lineWidth, gridLineOpts.lineWidth);
          var lineColor = valueOrDefault$c(angleLineOpts.color, gridLineOpts.color);
          var i, offset, position;

          if (opts.pointLabels.display) {
            drawPointLabels(me);
          }

          if (gridLineOpts.display) {
            helpers$1.each(me.ticks, function (label, index) {
              if (index !== 0) {
                offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
                drawRadiusLine(me, gridLineOpts, offset, index);
              }
            });
          }

          if (angleLineOpts.display && lineWidth && lineColor) {
            ctx.save();
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = lineColor;

            if (ctx.setLineDash) {
              ctx.setLineDash(resolve$4([angleLineOpts.borderDash, gridLineOpts.borderDash, []]));
              ctx.lineDashOffset = resolve$4([angleLineOpts.borderDashOffset, gridLineOpts.borderDashOffset, 0.0]);
            }

            for (i = me.chart.data.labels.length - 1; i >= 0; i--) {
              offset = me.getDistanceFromCenterForValue(opts.ticks.reverse ? me.min : me.max);
              position = me.getPointPosition(i, offset);
              ctx.beginPath();
              ctx.moveTo(me.xCenter, me.yCenter);
              ctx.lineTo(position.x, position.y);
              ctx.stroke();
            }

            ctx.restore();
          }
        },

        /**
         * @private
         */
        _drawLabels: function _drawLabels() {
          var me = this;
          var ctx = me.ctx;
          var opts = me.options;
          var tickOpts = opts.ticks;

          if (!tickOpts.display) {
            return;
          }

          var startAngle = me.getIndexAngle(0);

          var tickFont = helpers$1.options._parseFont(tickOpts);

          var tickFontColor = valueOrDefault$c(tickOpts.fontColor, core_defaults.global.defaultFontColor);
          var offset, width;
          ctx.save();
          ctx.font = tickFont.string;
          ctx.translate(me.xCenter, me.yCenter);
          ctx.rotate(startAngle);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          helpers$1.each(me.ticks, function (label, index) {
            if (index === 0 && !tickOpts.reverse) {
              return;
            }

            offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);

            if (tickOpts.showLabelBackdrop) {
              width = ctx.measureText(label).width;
              ctx.fillStyle = tickOpts.backdropColor;
              ctx.fillRect(-width / 2 - tickOpts.backdropPaddingX, -offset - tickFont.size / 2 - tickOpts.backdropPaddingY, width + tickOpts.backdropPaddingX * 2, tickFont.size + tickOpts.backdropPaddingY * 2);
            }

            ctx.fillStyle = tickFontColor;
            ctx.fillText(label, 0, -offset);
          });
          ctx.restore();
        },

        /**
         * @private
         */
        _drawTitle: helpers$1.noop
      }); // INTERNAL: static default options, registered in src/index.js

      var _defaults$3 = defaultConfig$3;
      scale_radialLinear._defaults = _defaults$3;
      var deprecated$1 = helpers$1._deprecated;
      var resolve$5 = helpers$1.options.resolve;
      var valueOrDefault$d = helpers$1.valueOrDefault; // Integer constants are from the ES6 spec.

      var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
      var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
      var INTERVALS = {
        millisecond: {
          common: true,
          size: 1,
          steps: 1000
        },
        second: {
          common: true,
          size: 1000,
          steps: 60
        },
        minute: {
          common: true,
          size: 60000,
          steps: 60
        },
        hour: {
          common: true,
          size: 3600000,
          steps: 24
        },
        day: {
          common: true,
          size: 86400000,
          steps: 30
        },
        week: {
          common: false,
          size: 604800000,
          steps: 4
        },
        month: {
          common: true,
          size: 2.628e9,
          steps: 12
        },
        quarter: {
          common: false,
          size: 7.884e9,
          steps: 4
        },
        year: {
          common: true,
          size: 3.154e10
        }
      };
      var UNITS = Object.keys(INTERVALS);

      function sorter(a, b) {
        return a - b;
      }

      function arrayUnique(items) {
        var hash = {};
        var out = [];
        var i, ilen, item;

        for (i = 0, ilen = items.length; i < ilen; ++i) {
          item = items[i];

          if (!hash[item]) {
            hash[item] = true;
            out.push(item);
          }
        }

        return out;
      }

      function getMin(options) {
        return helpers$1.valueOrDefault(options.time.min, options.ticks.min);
      }

      function getMax(options) {
        return helpers$1.valueOrDefault(options.time.max, options.ticks.max);
      }
      /**
       * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
       * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
       * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
       * extremity (left + width or top + height). Note that it would be more optimized to directly
       * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
       * to create the lookup table. The table ALWAYS contains at least two items: min and max.
       *
       * @param {number[]} timestamps - timestamps sorted from lowest to highest.
       * @param {string} distribution - If 'linear', timestamps will be spread linearly along the min
       * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
       * If 'series', timestamps will be positioned at the same distance from each other. In this
       * case, only timestamps that break the time linearity are registered, meaning that in the
       * best case, all timestamps are linear, the table contains only min and max.
       */


      function buildLookupTable(timestamps, min, max, distribution) {
        if (distribution === 'linear' || !timestamps.length) {
          return [{
            time: min,
            pos: 0
          }, {
            time: max,
            pos: 1
          }];
        }

        var table = [];
        var items = [min];
        var i, ilen, prev, curr, next;

        for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
          curr = timestamps[i];

          if (curr > min && curr < max) {
            items.push(curr);
          }
        }

        items.push(max);

        for (i = 0, ilen = items.length; i < ilen; ++i) {
          next = items[i + 1];
          prev = items[i - 1];
          curr = items[i]; // only add points that breaks the scale linearity

          if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {
            table.push({
              time: curr,
              pos: i / (ilen - 1)
            });
          }
        }

        return table;
      } // @see adapted from https://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/


      function lookup(table, key, value) {
        var lo = 0;
        var hi = table.length - 1;
        var mid, i0, i1;

        while (lo >= 0 && lo <= hi) {
          mid = lo + hi >> 1;
          i0 = table[mid - 1] || null;
          i1 = table[mid];

          if (!i0) {
            // given value is outside table (before first item)
            return {
              lo: null,
              hi: i1
            };
          } else if (i1[key] < value) {
            lo = mid + 1;
          } else if (i0[key] > value) {
            hi = mid - 1;
          } else {
            return {
              lo: i0,
              hi: i1
            };
          }
        } // given value is outside table (after last item)


        return {
          lo: i1,
          hi: null
        };
      }
      /**
       * Linearly interpolates the given source `value` using the table items `skey` values and
       * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
       * returns the position for a timestamp equal to 42. If value is out of bounds, values at
       * index [0, 1] or [n - 1, n] are used for the interpolation.
       */


      function interpolate$1(table, skey, sval, tkey) {
        var range = lookup(table, skey, sval); // Note: the lookup table ALWAYS contains at least 2 items (min and max)

        var prev = !range.lo ? table[0] : !range.hi ? table[table.length - 2] : range.lo;
        var next = !range.lo ? table[1] : !range.hi ? table[table.length - 1] : range.hi;
        var span = next[skey] - prev[skey];
        var ratio = span ? (sval - prev[skey]) / span : 0;
        var offset = (next[tkey] - prev[tkey]) * ratio;
        return prev[tkey] + offset;
      }

      function toTimestamp(scale, input) {
        var adapter = scale._adapter;
        var options = scale.options.time;
        var parser = options.parser;
        var format = parser || options.format;
        var value = input;

        if (typeof parser === 'function') {
          value = parser(value);
        } // Only parse if its not a timestamp already


        if (!helpers$1.isFinite(value)) {
          value = typeof format === 'string' ? adapter.parse(value, format) : adapter.parse(value);
        }

        if (value !== null) {
          return +value;
        } // Labels are in an incompatible format and no `parser` has been provided.
        // The user might still use the deprecated `format` option for parsing.


        if (!parser && typeof format === 'function') {
          value = format(input); // `format` could return something else than a timestamp, if so, parse it

          if (!helpers$1.isFinite(value)) {
            value = adapter.parse(value);
          }
        }

        return value;
      }

      function parse(scale, input) {
        if (helpers$1.isNullOrUndef(input)) {
          return null;
        }

        var options = scale.options.time;
        var value = toTimestamp(scale, scale.getRightValue(input));

        if (value === null) {
          return value;
        }

        if (options.round) {
          value = +scale._adapter.startOf(value, options.round);
        }

        return value;
      }
      /**
       * Figures out what unit results in an appropriate number of auto-generated ticks
       */


      function determineUnitForAutoTicks(minUnit, min, max, capacity) {
        var ilen = UNITS.length;
        var i, interval, factor;

        for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
          interval = INTERVALS[UNITS[i]];
          factor = interval.steps ? interval.steps : MAX_INTEGER;

          if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
            return UNITS[i];
          }
        }

        return UNITS[ilen - 1];
      }
      /**
       * Figures out what unit to format a set of ticks with
       */


      function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
        var i, unit;

        for (i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
          unit = UNITS[i];

          if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
            return unit;
          }
        }

        return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
      }

      function determineMajorUnit(unit) {
        for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
          if (INTERVALS[UNITS[i]].common) {
            return UNITS[i];
          }
        }
      }
      /**
       * Generates a maximum of `capacity` timestamps between min and max, rounded to the
       * `minor` unit using the given scale time `options`.
       * Important: this method can return ticks outside the min and max range, it's the
       * responsibility of the calling code to clamp values if needed.
       */


      function generate(scale, min, max, capacity) {
        var adapter = scale._adapter;
        var options = scale.options;
        var timeOpts = options.time;
        var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
        var stepSize = resolve$5([timeOpts.stepSize, timeOpts.unitStepSize, 1]);
        var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
        var first = min;
        var ticks = [];
        var time; // For 'week' unit, handle the first day of week option

        if (weekday) {
          first = +adapter.startOf(first, 'isoWeek', weekday);
        } // Align first ticks on unit


        first = +adapter.startOf(first, weekday ? 'day' : minor); // Prevent browser from freezing in case user options request millions of milliseconds

        if (adapter.diff(max, min, minor) > 100000 * stepSize) {
          throw min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor;
        }

        for (time = first; time < max; time = +adapter.add(time, stepSize, minor)) {
          ticks.push(time);
        }

        if (time === max || options.bounds === 'ticks') {
          ticks.push(time);
        }

        return ticks;
      }
      /**
       * Returns the start and end offsets from edges in the form of {start, end}
       * where each value is a relative width to the scale and ranges between 0 and 1.
       * They add extra margins on the both sides by scaling down the original scale.
       * Offsets are added when the `offset` option is true.
       */


      function computeOffsets(table, ticks, min, max, options) {
        var start = 0;
        var end = 0;
        var first, last;

        if (options.offset && ticks.length) {
          first = interpolate$1(table, 'time', ticks[0], 'pos');

          if (ticks.length === 1) {
            start = 1 - first;
          } else {
            start = (interpolate$1(table, 'time', ticks[1], 'pos') - first) / 2;
          }

          last = interpolate$1(table, 'time', ticks[ticks.length - 1], 'pos');

          if (ticks.length === 1) {
            end = last;
          } else {
            end = (last - interpolate$1(table, 'time', ticks[ticks.length - 2], 'pos')) / 2;
          }
        }

        return {
          start: start,
          end: end,
          factor: 1 / (start + 1 + end)
        };
      }

      function setMajorTicks(scale, ticks, map, majorUnit) {
        var adapter = scale._adapter;
        var first = +adapter.startOf(ticks[0].value, majorUnit);
        var last = ticks[ticks.length - 1].value;
        var major, index;

        for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
          index = map[major];

          if (index >= 0) {
            ticks[index].major = true;
          }
        }

        return ticks;
      }

      function ticksFromTimestamps(scale, values, majorUnit) {
        var ticks = [];
        var map = {};
        var ilen = values.length;
        var i, value;

        for (i = 0; i < ilen; ++i) {
          value = values[i];
          map[value] = i;
          ticks.push({
            value: value,
            major: false
          });
        } // We set the major ticks separately from the above loop because calling startOf for every tick
        // is expensive when there is a large number of ticks


        return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
      }

      var defaultConfig$4 = {
        position: 'bottom',

        /**
         * Data distribution along the scale:
         * - 'linear': data are spread according to their time (distances can vary),
         * - 'series': data are spread at the same distance from each other.
         * @see https://github.com/chartjs/Chart.js/pull/4507
         * @since 2.7.0
         */
        distribution: 'linear',

        /**
         * Scale boundary strategy (bypassed by min/max time options)
         * - `data`: make sure data are fully visible, ticks outside are removed
         * - `ticks`: make sure ticks are fully visible, data outside are truncated
         * @see https://github.com/chartjs/Chart.js/pull/4556
         * @since 2.7.0
         */
        bounds: 'data',
        adapters: {},
        time: {
          parser: false,
          // false == a pattern string from https://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
          unit: false,
          // false == automatic or override with week, month, year, etc.
          round: false,
          // none, or override with week, month, year, etc.
          displayFormat: false,
          // DEPRECATED
          isoWeekday: false,
          // override week start day - see https://momentjs.com/docs/#/get-set/iso-weekday/
          minUnit: 'millisecond',
          displayFormats: {}
        },
        ticks: {
          autoSkip: false,

          /**
           * Ticks generation input values:
           * - 'auto': generates "optimal" ticks based on scale size and time options.
           * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
           * - 'labels': generates ticks from user given `data.labels` values ONLY.
           * @see https://github.com/chartjs/Chart.js/pull/4507
           * @since 2.7.0
           */
          source: 'auto',
          major: {
            enabled: false
          }
        }
      };
      var scale_time = core_scale.extend({
        initialize: function initialize() {
          this.mergeTicksOptions();
          core_scale.prototype.initialize.call(this);
        },
        update: function update() {
          var me = this;
          var options = me.options;
          var time = options.time || (options.time = {});
          var adapter = me._adapter = new core_adapters._date(options.adapters.date); // DEPRECATIONS: output a message only one time per update

          deprecated$1('time scale', time.format, 'time.format', 'time.parser');
          deprecated$1('time scale', time.min, 'time.min', 'ticks.min');
          deprecated$1('time scale', time.max, 'time.max', 'ticks.max'); // Backward compatibility: before introducing adapter, `displayFormats` was
          // supposed to contain *all* unit/string pairs but this can't be resolved
          // when loading the scale (adapters are loaded afterward), so let's populate
          // missing formats on update

          helpers$1.mergeIf(time.displayFormats, adapter.formats());
          return core_scale.prototype.update.apply(me, arguments);
        },

        /**
         * Allows data to be referenced via 't' attribute
         */
        getRightValue: function getRightValue(rawValue) {
          if (rawValue && rawValue.t !== undefined) {
            rawValue = rawValue.t;
          }

          return core_scale.prototype.getRightValue.call(this, rawValue);
        },
        determineDataLimits: function determineDataLimits() {
          var me = this;
          var chart = me.chart;
          var adapter = me._adapter;
          var options = me.options;
          var unit = options.time.unit || 'day';
          var min = MAX_INTEGER;
          var max = MIN_INTEGER;
          var timestamps = [];
          var datasets = [];
          var labels = [];
          var i, j, ilen, jlen, data, timestamp, labelsAdded;

          var dataLabels = me._getLabels();

          for (i = 0, ilen = dataLabels.length; i < ilen; ++i) {
            labels.push(parse(me, dataLabels[i]));
          }

          for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
            if (chart.isDatasetVisible(i)) {
              data = chart.data.datasets[i].data; // Let's consider that all data have the same format.

              if (helpers$1.isObject(data[0])) {
                datasets[i] = [];

                for (j = 0, jlen = data.length; j < jlen; ++j) {
                  timestamp = parse(me, data[j]);
                  timestamps.push(timestamp);
                  datasets[i][j] = timestamp;
                }
              } else {
                datasets[i] = labels.slice(0);

                if (!labelsAdded) {
                  timestamps = timestamps.concat(labels);
                  labelsAdded = true;
                }
              }
            } else {
              datasets[i] = [];
            }
          }

          if (labels.length) {
            min = Math.min(min, labels[0]);
            max = Math.max(max, labels[labels.length - 1]);
          }

          if (timestamps.length) {
            timestamps = ilen > 1 ? arrayUnique(timestamps).sort(sorter) : timestamps.sort(sorter);
            min = Math.min(min, timestamps[0]);
            max = Math.max(max, timestamps[timestamps.length - 1]);
          }

          min = parse(me, getMin(options)) || min;
          max = parse(me, getMax(options)) || max; // In case there is no valid min/max, set limits based on unit time option

          min = min === MAX_INTEGER ? +adapter.startOf(Date.now(), unit) : min;
          max = max === MIN_INTEGER ? +adapter.endOf(Date.now(), unit) + 1 : max; // Make sure that max is strictly higher than min (required by the lookup table)

          me.min = Math.min(min, max);
          me.max = Math.max(min + 1, max); // PRIVATE

          me._table = [];
          me._timestamps = {
            data: timestamps,
            datasets: datasets,
            labels: labels
          };
        },
        buildTicks: function buildTicks() {
          var me = this;
          var min = me.min;
          var max = me.max;
          var options = me.options;
          var tickOpts = options.ticks;
          var timeOpts = options.time;
          var timestamps = me._timestamps;
          var ticks = [];
          var capacity = me.getLabelCapacity(min);
          var source = tickOpts.source;
          var distribution = options.distribution;
          var i, ilen, timestamp;

          if (source === 'data' || source === 'auto' && distribution === 'series') {
            timestamps = timestamps.data;
          } else if (source === 'labels') {
            timestamps = timestamps.labels;
          } else {
            timestamps = generate(me, min, max, capacity);
          }

          if (options.bounds === 'ticks' && timestamps.length) {
            min = timestamps[0];
            max = timestamps[timestamps.length - 1];
          } // Enforce limits with user min/max options


          min = parse(me, getMin(options)) || min;
          max = parse(me, getMax(options)) || max; // Remove ticks outside the min/max range

          for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
            timestamp = timestamps[i];

            if (timestamp >= min && timestamp <= max) {
              ticks.push(timestamp);
            }
          }

          me.min = min;
          me.max = max; // PRIVATE
          // determineUnitForFormatting relies on the number of ticks so we don't use it when
          // autoSkip is enabled because we don't yet know what the final number of ticks will be

          me._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, me.min, me.max, capacity) : determineUnitForFormatting(me, ticks.length, timeOpts.minUnit, me.min, me.max));
          me._majorUnit = !tickOpts.major.enabled || me._unit === 'year' ? undefined : determineMajorUnit(me._unit);
          me._table = buildLookupTable(me._timestamps.data, min, max, distribution);
          me._offsets = computeOffsets(me._table, ticks, min, max, options);

          if (tickOpts.reverse) {
            ticks.reverse();
          }

          return ticksFromTimestamps(me, ticks, me._majorUnit);
        },
        getLabelForIndex: function getLabelForIndex(index, datasetIndex) {
          var me = this;
          var adapter = me._adapter;
          var data = me.chart.data;
          var timeOpts = me.options.time;
          var label = data.labels && index < data.labels.length ? data.labels[index] : '';
          var value = data.datasets[datasetIndex].data[index];

          if (helpers$1.isObject(value)) {
            label = me.getRightValue(value);
          }

          if (timeOpts.tooltipFormat) {
            return adapter.format(toTimestamp(me, label), timeOpts.tooltipFormat);
          }

          if (typeof label === 'string') {
            return label;
          }

          return adapter.format(toTimestamp(me, label), timeOpts.displayFormats.datetime);
        },

        /**
         * Function to format an individual tick mark
         * @private
         */
        tickFormatFunction: function tickFormatFunction(time, index, ticks, format) {
          var me = this;
          var adapter = me._adapter;
          var options = me.options;
          var formats = options.time.displayFormats;
          var minorFormat = formats[me._unit];
          var majorUnit = me._majorUnit;
          var majorFormat = formats[majorUnit];
          var tick = ticks[index];
          var tickOpts = options.ticks;
          var major = majorUnit && majorFormat && tick && tick.major;
          var label = adapter.format(time, format ? format : major ? majorFormat : minorFormat);
          var nestedTickOpts = major ? tickOpts.major : tickOpts.minor;
          var formatter = resolve$5([nestedTickOpts.callback, nestedTickOpts.userCallback, tickOpts.callback, tickOpts.userCallback]);
          return formatter ? formatter(label, index, ticks) : label;
        },
        convertTicksToLabels: function convertTicksToLabels(ticks) {
          var labels = [];
          var i, ilen;

          for (i = 0, ilen = ticks.length; i < ilen; ++i) {
            labels.push(this.tickFormatFunction(ticks[i].value, i, ticks));
          }

          return labels;
        },

        /**
         * @private
         */
        getPixelForOffset: function getPixelForOffset(time) {
          var me = this;
          var offsets = me._offsets;
          var pos = interpolate$1(me._table, 'time', time, 'pos');
          return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
        },
        getPixelForValue: function getPixelForValue(value, index, datasetIndex) {
          var me = this;
          var time = null;

          if (index !== undefined && datasetIndex !== undefined) {
            time = me._timestamps.datasets[datasetIndex][index];
          }

          if (time === null) {
            time = parse(me, value);
          }

          if (time !== null) {
            return me.getPixelForOffset(time);
          }
        },
        getPixelForTick: function getPixelForTick(index) {
          var ticks = this.getTicks();
          return index >= 0 && index < ticks.length ? this.getPixelForOffset(ticks[index].value) : null;
        },
        getValueForPixel: function getValueForPixel(pixel) {
          var me = this;
          var offsets = me._offsets;
          var pos = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
          var time = interpolate$1(me._table, 'pos', pos, 'time'); // DEPRECATION, we should return time directly

          return me._adapter._create(time);
        },

        /**
         * @private
         */
        _getLabelSize: function _getLabelSize(label) {
          var me = this;
          var ticksOpts = me.options.ticks;
          var tickLabelWidth = me.ctx.measureText(label).width;
          var angle = helpers$1.toRadians(me.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
          var cosRotation = Math.cos(angle);
          var sinRotation = Math.sin(angle);
          var tickFontSize = valueOrDefault$d(ticksOpts.fontSize, core_defaults.global.defaultFontSize);
          return {
            w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
            h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
          };
        },

        /**
         * Crude approximation of what the label width might be
         * @private
         */
        getLabelWidth: function getLabelWidth(label) {
          return this._getLabelSize(label).w;
        },

        /**
         * @private
         */
        getLabelCapacity: function getLabelCapacity(exampleTime) {
          var me = this;
          var timeOpts = me.options.time;
          var displayFormats = timeOpts.displayFormats; // pick the longest format (milliseconds) for guestimation

          var format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
          var exampleLabel = me.tickFormatFunction(exampleTime, 0, ticksFromTimestamps(me, [exampleTime], me._majorUnit), format);

          var size = me._getLabelSize(exampleLabel);

          var capacity = Math.floor(me.isHorizontal() ? me.width / size.w : me.height / size.h);

          if (me.options.offset) {
            capacity--;
          }

          return capacity > 0 ? capacity : 1;
        }
      }); // INTERNAL: static default options, registered in src/index.js

      var _defaults$4 = defaultConfig$4;
      scale_time._defaults = _defaults$4;
      var scales = {
        category: scale_category,
        linear: scale_linear,
        logarithmic: scale_logarithmic,
        radialLinear: scale_radialLinear,
        time: scale_time
      };
      var FORMATS = {
        datetime: 'MMM D, YYYY, h:mm:ss a',
        millisecond: 'h:mm:ss.SSS a',
        second: 'h:mm:ss a',
        minute: 'h:mm a',
        hour: 'hA',
        day: 'MMM D',
        week: 'll',
        month: 'MMM YYYY',
        quarter: '[Q]Q - YYYY',
        year: 'YYYY'
      };

      core_adapters._date.override(typeof moment === 'function' ? {
        _id: 'moment',
        // DEBUG ONLY
        formats: function formats() {
          return FORMATS;
        },
        parse: function parse(value, format) {
          if (typeof value === 'string' && typeof format === 'string') {
            value = moment(value, format);
          } else if (!(value instanceof moment)) {
            value = moment(value);
          }

          return value.isValid() ? value.valueOf() : null;
        },
        format: function format(time, _format) {
          return moment(time).format(_format);
        },
        add: function add(time, amount, unit) {
          return moment(time).add(amount, unit).valueOf();
        },
        diff: function diff(max, min, unit) {
          return moment(max).diff(moment(min), unit);
        },
        startOf: function startOf(time, unit, weekday) {
          time = moment(time);

          if (unit === 'isoWeek') {
            return time.isoWeekday(weekday).valueOf();
          }

          return time.startOf(unit).valueOf();
        },
        endOf: function endOf(time, unit) {
          return moment(time).endOf(unit).valueOf();
        },
        // DEPRECATIONS

        /**
         * Provided for backward compatibility with scale.getValueForPixel().
         * @deprecated since version 2.8.0
         * @todo remove at version 3
         * @private
         */
        _create: function _create(time) {
          return moment(time);
        }
      } : {});

      core_defaults._set('global', {
        plugins: {
          filler: {
            propagate: true
          }
        }
      });

      var mappers = {
        dataset: function dataset(source) {
          var index = source.fill;
          var chart = source.chart;
          var meta = chart.getDatasetMeta(index);
          var visible = meta && chart.isDatasetVisible(index);
          var points = visible && meta.dataset._children || [];
          var length = points.length || 0;
          return !length ? null : function (point, i) {
            return i < length && points[i]._view || null;
          };
        },
        boundary: function boundary(source) {
          var boundary = source.boundary;
          var x = boundary ? boundary.x : null;
          var y = boundary ? boundary.y : null;

          if (helpers$1.isArray(boundary)) {
            return function (point, i) {
              return boundary[i];
            };
          }

          return function (point) {
            return {
              x: x === null ? point.x : x,
              y: y === null ? point.y : y
            };
          };
        }
      }; // @todo if (fill[0] === '#')

      function decodeFill(el, index, count) {
        var model = el._model || {};
        var fill = model.fill;
        var target;

        if (fill === undefined) {
          fill = !!model.backgroundColor;
        }

        if (fill === false || fill === null) {
          return false;
        }

        if (fill === true) {
          return 'origin';
        }

        target = parseFloat(fill, 10);

        if (isFinite(target) && Math.floor(target) === target) {
          if (fill[0] === '-' || fill[0] === '+') {
            target = index + target;
          }

          if (target === index || target < 0 || target >= count) {
            return false;
          }

          return target;
        }

        switch (fill) {
          // compatibility
          case 'bottom':
            return 'start';

          case 'top':
            return 'end';

          case 'zero':
            return 'origin';
          // supported boundaries

          case 'origin':
          case 'start':
          case 'end':
            return fill;
          // invalid fill values

          default:
            return false;
        }
      }

      function computeLinearBoundary(source) {
        var model = source.el._model || {};
        var scale = source.el._scale || {};
        var fill = source.fill;
        var target = null;
        var horizontal;

        if (isFinite(fill)) {
          return null;
        } // Backward compatibility: until v3, we still need to support boundary values set on
        // the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
        // controllers might still use it (e.g. the Smith chart).


        if (fill === 'start') {
          target = model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;
        } else if (fill === 'end') {
          target = model.scaleTop === undefined ? scale.top : model.scaleTop;
        } else if (model.scaleZero !== undefined) {
          target = model.scaleZero;
        } else if (scale.getBasePixel) {
          target = scale.getBasePixel();
        }

        if (target !== undefined && target !== null) {
          if (target.x !== undefined && target.y !== undefined) {
            return target;
          }

          if (helpers$1.isFinite(target)) {
            horizontal = scale.isHorizontal();
            return {
              x: horizontal ? target : null,
              y: horizontal ? null : target
            };
          }
        }

        return null;
      }

      function computeCircularBoundary(source) {
        var scale = source.el._scale;
        var options = scale.options;
        var length = scale.chart.data.labels.length;
        var fill = source.fill;
        var target = [];
        var start, end, center, i, point;

        if (!length) {
          return null;
        }

        start = options.ticks.reverse ? scale.max : scale.min;
        end = options.ticks.reverse ? scale.min : scale.max;
        center = scale.getPointPositionForValue(0, start);

        for (i = 0; i < length; ++i) {
          point = fill === 'start' || fill === 'end' ? scale.getPointPositionForValue(i, fill === 'start' ? start : end) : scale.getBasePosition(i);

          if (options.gridLines.circular) {
            point.cx = center.x;
            point.cy = center.y;
            point.angle = scale.getIndexAngle(i) - Math.PI / 2;
          }

          target.push(point);
        }

        return target;
      }

      function computeBoundary(source) {
        var scale = source.el._scale || {};

        if (scale.getPointPositionForValue) {
          return computeCircularBoundary(source);
        }

        return computeLinearBoundary(source);
      }

      function resolveTarget(sources, index, propagate) {
        var source = sources[index];
        var fill = source.fill;
        var visited = [index];
        var target;

        if (!propagate) {
          return fill;
        }

        while (fill !== false && visited.indexOf(fill) === -1) {
          if (!isFinite(fill)) {
            return fill;
          }

          target = sources[fill];

          if (!target) {
            return false;
          }

          if (target.visible) {
            return fill;
          }

          visited.push(fill);
          fill = target.fill;
        }

        return false;
      }

      function createMapper(source) {
        var fill = source.fill;
        var type = 'dataset';

        if (fill === false) {
          return null;
        }

        if (!isFinite(fill)) {
          type = 'boundary';
        }

        return mappers[type](source);
      }

      function isDrawable(point) {
        return point && !point.skip;
      }

      function drawArea(ctx, curve0, curve1, len0, len1) {
        var i, cx, cy, r;

        if (!len0 || !len1) {
          return;
        } // building first area curve (normal)


        ctx.moveTo(curve0[0].x, curve0[0].y);

        for (i = 1; i < len0; ++i) {
          helpers$1.canvas.lineTo(ctx, curve0[i - 1], curve0[i]);
        }

        if (curve1[0].angle !== undefined) {
          cx = curve1[0].cx;
          cy = curve1[0].cy;
          r = Math.sqrt(Math.pow(curve1[0].x - cx, 2) + Math.pow(curve1[0].y - cy, 2));

          for (i = len1 - 1; i > 0; --i) {
            ctx.arc(cx, cy, r, curve1[i].angle, curve1[i - 1].angle, true);
          }

          return;
        } // joining the two area curves


        ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y); // building opposite area curve (reverse)

        for (i = len1 - 1; i > 0; --i) {
          helpers$1.canvas.lineTo(ctx, curve1[i], curve1[i - 1], true);
        }
      }

      function doFill(ctx, points, mapper, view, color, loop) {
        var count = points.length;
        var span = view.spanGaps;
        var curve0 = [];
        var curve1 = [];
        var len0 = 0;
        var len1 = 0;
        var i, ilen, index, p0, p1, d0, d1, loopOffset;
        ctx.beginPath();

        for (i = 0, ilen = count; i < ilen; ++i) {
          index = i % count;
          p0 = points[index]._view;
          p1 = mapper(p0, index, view);
          d0 = isDrawable(p0);
          d1 = isDrawable(p1);

          if (loop && loopOffset === undefined && d0) {
            loopOffset = i + 1;
            ilen = count + loopOffset;
          }

          if (d0 && d1) {
            len0 = curve0.push(p0);
            len1 = curve1.push(p1);
          } else if (len0 && len1) {
            if (!span) {
              drawArea(ctx, curve0, curve1, len0, len1);
              len0 = len1 = 0;
              curve0 = [];
              curve1 = [];
            } else {
              if (d0) {
                curve0.push(p0);
              }

              if (d1) {
                curve1.push(p1);
              }
            }
          }
        }

        drawArea(ctx, curve0, curve1, len0, len1);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
      }

      var plugin_filler = {
        id: 'filler',
        afterDatasetsUpdate: function afterDatasetsUpdate(chart, options) {
          var count = (chart.data.datasets || []).length;
          var propagate = options.propagate;
          var sources = [];
          var meta, i, el, source;

          for (i = 0; i < count; ++i) {
            meta = chart.getDatasetMeta(i);
            el = meta.dataset;
            source = null;

            if (el && el._model && el instanceof elements.Line) {
              source = {
                visible: chart.isDatasetVisible(i),
                fill: decodeFill(el, i, count),
                chart: chart,
                el: el
              };
            }

            meta.$filler = source;
            sources.push(source);
          }

          for (i = 0; i < count; ++i) {
            source = sources[i];

            if (!source) {
              continue;
            }

            source.fill = resolveTarget(sources, i, propagate);
            source.boundary = computeBoundary(source);
            source.mapper = createMapper(source);
          }
        },
        beforeDatasetsDraw: function beforeDatasetsDraw(chart) {
          var metasets = chart._getSortedVisibleDatasetMetas();

          var ctx = chart.ctx;
          var meta, i, el, view, points, mapper, color;

          for (i = metasets.length - 1; i >= 0; --i) {
            meta = metasets[i].$filler;

            if (!meta || !meta.visible) {
              continue;
            }

            el = meta.el;
            view = el._view;
            points = el._children || [];
            mapper = meta.mapper;
            color = view.backgroundColor || core_defaults.global.defaultColor;

            if (mapper && color && points.length) {
              helpers$1.canvas.clipArea(ctx, chart.chartArea);
              doFill(ctx, points, mapper, view, color, el._loop);
              helpers$1.canvas.unclipArea(ctx);
            }
          }
        }
      };
      var getRtlHelper$1 = helpers$1.rtl.getRtlAdapter;
      var noop$1 = helpers$1.noop;
      var valueOrDefault$e = helpers$1.valueOrDefault;

      core_defaults._set('global', {
        legend: {
          display: true,
          position: 'top',
          align: 'center',
          fullWidth: true,
          reverse: false,
          weight: 1000,
          // a callback that will handle
          onClick: function onClick(e, legendItem) {
            var index = legendItem.datasetIndex;
            var ci = this.chart;
            var meta = ci.getDatasetMeta(index); // See controller.isDatasetVisible comment

            meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null; // We hid a dataset ... rerender the chart

            ci.update();
          },
          onHover: null,
          onLeave: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            // Generates labels shown in the legend
            // Valid properties to return:
            // text : text to display
            // fillStyle : fill of coloured box
            // strokeStyle: stroke of coloured box
            // hidden : if this legend item refers to a hidden item
            // lineCap : cap style for line
            // lineDash
            // lineDashOffset :
            // lineJoin :
            // lineWidth :
            generateLabels: function generateLabels(chart) {
              var datasets = chart.data.datasets;
              var options = chart.options.legend || {};
              var usePointStyle = options.labels && options.labels.usePointStyle;
              return chart._getSortedDatasetMetas().map(function (meta) {
                var style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
                return {
                  text: datasets[meta.index].label,
                  fillStyle: style.backgroundColor,
                  hidden: !chart.isDatasetVisible(meta.index),
                  lineCap: style.borderCapStyle,
                  lineDash: style.borderDash,
                  lineDashOffset: style.borderDashOffset,
                  lineJoin: style.borderJoinStyle,
                  lineWidth: style.borderWidth,
                  strokeStyle: style.borderColor,
                  pointStyle: style.pointStyle,
                  rotation: style.rotation,
                  // Below is extra data used for toggling the datasets
                  datasetIndex: meta.index
                };
              }, this);
            }
          }
        },
        legendCallback: function legendCallback(chart) {
          var list = document.createElement('ul');
          var datasets = chart.data.datasets;
          var i, ilen, listItem, listItemSpan;
          list.setAttribute('class', chart.id + '-legend');

          for (i = 0, ilen = datasets.length; i < ilen; i++) {
            listItem = list.appendChild(document.createElement('li'));
            listItemSpan = listItem.appendChild(document.createElement('span'));
            listItemSpan.style.backgroundColor = datasets[i].backgroundColor;

            if (datasets[i].label) {
              listItem.appendChild(document.createTextNode(datasets[i].label));
            }
          }

          return list.outerHTML;
        }
      });
      /**
       * Helper function to get the box width based on the usePointStyle option
       * @param {object} labelopts - the label options on the legend
       * @param {number} fontSize - the label font size
       * @return {number} width of the color box area
       */


      function getBoxWidth(labelOpts, fontSize) {
        return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ? fontSize : labelOpts.boxWidth;
      }
      /**
       * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
       */


      var Legend = core_element.extend({
        initialize: function initialize(config) {
          var me = this;
          helpers$1.extend(me, config); // Contains hit boxes for each dataset (in dataset order)

          me.legendHitBoxes = [];
          /**
          	 * @private
          	 */

          me._hoveredItem = null; // Are we in doughnut mode which has a different data type

          me.doughnutMode = false;
        },
        // These methods are ordered by lifecycle. Utilities then follow.
        // Any function defined here is inherited by all legend types.
        // Any function can be extended by the legend type
        beforeUpdate: noop$1,
        update: function update(maxWidth, maxHeight, margins) {
          var me = this; // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)

          me.beforeUpdate(); // Absorb the master measurements

          me.maxWidth = maxWidth;
          me.maxHeight = maxHeight;
          me.margins = margins; // Dimensions

          me.beforeSetDimensions();
          me.setDimensions();
          me.afterSetDimensions(); // Labels

          me.beforeBuildLabels();
          me.buildLabels();
          me.afterBuildLabels(); // Fit

          me.beforeFit();
          me.fit();
          me.afterFit(); //

          me.afterUpdate();
          return me.minSize;
        },
        afterUpdate: noop$1,
        //
        beforeSetDimensions: noop$1,
        setDimensions: function setDimensions() {
          var me = this; // Set the unconstrained dimension before label rotation

          if (me.isHorizontal()) {
            // Reset position before calculating rotation
            me.width = me.maxWidth;
            me.left = 0;
            me.right = me.width;
          } else {
            me.height = me.maxHeight; // Reset position before calculating rotation

            me.top = 0;
            me.bottom = me.height;
          } // Reset padding


          me.paddingLeft = 0;
          me.paddingTop = 0;
          me.paddingRight = 0;
          me.paddingBottom = 0; // Reset minSize

          me.minSize = {
            width: 0,
            height: 0
          };
        },
        afterSetDimensions: noop$1,
        //
        beforeBuildLabels: noop$1,
        buildLabels: function buildLabels() {
          var me = this;
          var labelOpts = me.options.labels || {};
          var legendItems = helpers$1.callback(labelOpts.generateLabels, [me.chart], me) || [];

          if (labelOpts.filter) {
            legendItems = legendItems.filter(function (item) {
              return labelOpts.filter(item, me.chart.data);
            });
          }

          if (me.options.reverse) {
            legendItems.reverse();
          }

          me.legendItems = legendItems;
        },
        afterBuildLabels: noop$1,
        //
        beforeFit: noop$1,
        fit: function fit() {
          var me = this;
          var opts = me.options;
          var labelOpts = opts.labels;
          var display = opts.display;
          var ctx = me.ctx;

          var labelFont = helpers$1.options._parseFont(labelOpts);

          var fontSize = labelFont.size; // Reset hit boxes

          var hitboxes = me.legendHitBoxes = [];
          var minSize = me.minSize;
          var isHorizontal = me.isHorizontal();

          if (isHorizontal) {
            minSize.width = me.maxWidth; // fill all the width

            minSize.height = display ? 10 : 0;
          } else {
            minSize.width = display ? 10 : 0;
            minSize.height = me.maxHeight; // fill all the height
          } // Increase sizes here


          if (!display) {
            me.width = minSize.width = me.height = minSize.height = 0;
            return;
          }

          ctx.font = labelFont.string;

          if (isHorizontal) {
            // Labels
            // Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
            var lineWidths = me.lineWidths = [0];
            var totalHeight = 0;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            helpers$1.each(me.legendItems, function (legendItem, i) {
              var boxWidth = getBoxWidth(labelOpts, fontSize);
              var width = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;

              if (i === 0 || lineWidths[lineWidths.length - 1] + width + 2 * labelOpts.padding > minSize.width) {
                totalHeight += fontSize + labelOpts.padding;
                lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
              } // Store the hitbox width and height here. Final position will be updated in `draw`


              hitboxes[i] = {
                left: 0,
                top: 0,
                width: width,
                height: fontSize
              };
              lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
            });
            minSize.height += totalHeight;
          } else {
            var vPadding = labelOpts.padding;
            var columnWidths = me.columnWidths = [];
            var columnHeights = me.columnHeights = [];
            var totalWidth = labelOpts.padding;
            var currentColWidth = 0;
            var currentColHeight = 0;
            helpers$1.each(me.legendItems, function (legendItem, i) {
              var boxWidth = getBoxWidth(labelOpts, fontSize);
              var itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width; // If too tall, go to new column

              if (i > 0 && currentColHeight + fontSize + 2 * vPadding > minSize.height) {
                totalWidth += currentColWidth + labelOpts.padding;
                columnWidths.push(currentColWidth); // previous column width

                columnHeights.push(currentColHeight);
                currentColWidth = 0;
                currentColHeight = 0;
              } // Get max width


              currentColWidth = Math.max(currentColWidth, itemWidth);
              currentColHeight += fontSize + vPadding; // Store the hitbox width and height here. Final position will be updated in `draw`

              hitboxes[i] = {
                left: 0,
                top: 0,
                width: itemWidth,
                height: fontSize
              };
            });
            totalWidth += currentColWidth;
            columnWidths.push(currentColWidth);
            columnHeights.push(currentColHeight);
            minSize.width += totalWidth;
          }

          me.width = minSize.width;
          me.height = minSize.height;
        },
        afterFit: noop$1,
        // Shared Methods
        isHorizontal: function isHorizontal() {
          return this.options.position === 'top' || this.options.position === 'bottom';
        },
        // Actually draw the legend on the canvas
        draw: function draw() {
          var me = this;
          var opts = me.options;
          var labelOpts = opts.labels;
          var globalDefaults = core_defaults.global;
          var defaultColor = globalDefaults.defaultColor;
          var lineDefault = globalDefaults.elements.line;
          var legendHeight = me.height;
          var columnHeights = me.columnHeights;
          var legendWidth = me.width;
          var lineWidths = me.lineWidths;

          if (!opts.display) {
            return;
          }

          var rtlHelper = getRtlHelper$1(opts.rtl, me.left, me.minSize.width);
          var ctx = me.ctx;
          var fontColor = valueOrDefault$e(labelOpts.fontColor, globalDefaults.defaultFontColor);

          var labelFont = helpers$1.options._parseFont(labelOpts);

          var fontSize = labelFont.size;
          var cursor; // Canvas setup

          ctx.textAlign = rtlHelper.textAlign('left');
          ctx.textBaseline = 'middle';
          ctx.lineWidth = 0.5;
          ctx.strokeStyle = fontColor; // for strikethrough effect

          ctx.fillStyle = fontColor; // render in correct colour

          ctx.font = labelFont.string;
          var boxWidth = getBoxWidth(labelOpts, fontSize);
          var hitboxes = me.legendHitBoxes; // current position

          var drawLegendBox = function drawLegendBox(x, y, legendItem) {
            if (isNaN(boxWidth) || boxWidth <= 0) {
              return;
            } // Set the ctx for the box


            ctx.save();
            var lineWidth = valueOrDefault$e(legendItem.lineWidth, lineDefault.borderWidth);
            ctx.fillStyle = valueOrDefault$e(legendItem.fillStyle, defaultColor);
            ctx.lineCap = valueOrDefault$e(legendItem.lineCap, lineDefault.borderCapStyle);
            ctx.lineDashOffset = valueOrDefault$e(legendItem.lineDashOffset, lineDefault.borderDashOffset);
            ctx.lineJoin = valueOrDefault$e(legendItem.lineJoin, lineDefault.borderJoinStyle);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = valueOrDefault$e(legendItem.strokeStyle, defaultColor);

            if (ctx.setLineDash) {
              // IE 9 and 10 do not support line dash
              ctx.setLineDash(valueOrDefault$e(legendItem.lineDash, lineDefault.borderDash));
            }

            if (labelOpts && labelOpts.usePointStyle) {
              // Recalculate x and y for drawPoint() because its expecting
              // x and y to be center of figure (instead of top left)
              var radius = boxWidth * Math.SQRT2 / 2;
              var centerX = rtlHelper.xPlus(x, boxWidth / 2);
              var centerY = y + fontSize / 2; // Draw pointStyle as legend symbol

              helpers$1.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY, legendItem.rotation);
            } else {
              // Draw box as legend symbol
              ctx.fillRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);

              if (lineWidth !== 0) {
                ctx.strokeRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
              }
            }

            ctx.restore();
          };

          var fillText = function fillText(x, y, legendItem, textWidth) {
            var halfFontSize = fontSize / 2;
            var xLeft = rtlHelper.xPlus(x, boxWidth + halfFontSize);
            var yMiddle = y + halfFontSize;
            ctx.fillText(legendItem.text, xLeft, yMiddle);

            if (legendItem.hidden) {
              // Strikethrough the text if hidden
              ctx.beginPath();
              ctx.lineWidth = 2;
              ctx.moveTo(xLeft, yMiddle);
              ctx.lineTo(rtlHelper.xPlus(xLeft, textWidth), yMiddle);
              ctx.stroke();
            }
          };

          var alignmentOffset = function alignmentOffset(dimension, blockSize) {
            switch (opts.align) {
              case 'start':
                return labelOpts.padding;

              case 'end':
                return dimension - blockSize;

              default:
                // center
                return (dimension - blockSize + labelOpts.padding) / 2;
            }
          }; // Horizontal


          var isHorizontal = me.isHorizontal();

          if (isHorizontal) {
            cursor = {
              x: me.left + alignmentOffset(legendWidth, lineWidths[0]),
              y: me.top + labelOpts.padding,
              line: 0
            };
          } else {
            cursor = {
              x: me.left + labelOpts.padding,
              y: me.top + alignmentOffset(legendHeight, columnHeights[0]),
              line: 0
            };
          }

          helpers$1.rtl.overrideTextDirection(me.ctx, opts.textDirection);
          var itemHeight = fontSize + labelOpts.padding;
          helpers$1.each(me.legendItems, function (legendItem, i) {
            var textWidth = ctx.measureText(legendItem.text).width;
            var width = boxWidth + fontSize / 2 + textWidth;
            var x = cursor.x;
            var y = cursor.y;
            rtlHelper.setWidth(me.minSize.width); // Use (me.left + me.minSize.width) and (me.top + me.minSize.height)
            // instead of me.right and me.bottom because me.width and me.height
            // may have been changed since me.minSize was calculated

            if (isHorizontal) {
              if (i > 0 && x + width + labelOpts.padding > me.left + me.minSize.width) {
                y = cursor.y += itemHeight;
                cursor.line++;
                x = cursor.x = me.left + alignmentOffset(legendWidth, lineWidths[cursor.line]);
              }
            } else if (i > 0 && y + itemHeight > me.top + me.minSize.height) {
              x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
              cursor.line++;
              y = cursor.y = me.top + alignmentOffset(legendHeight, columnHeights[cursor.line]);
            }

            var realX = rtlHelper.x(x);
            drawLegendBox(realX, y, legendItem);
            hitboxes[i].left = rtlHelper.leftForLtr(realX, hitboxes[i].width);
            hitboxes[i].top = y; // Fill the actual label

            fillText(realX, y, legendItem, textWidth);

            if (isHorizontal) {
              cursor.x += width + labelOpts.padding;
            } else {
              cursor.y += itemHeight;
            }
          });
          helpers$1.rtl.restoreTextDirection(me.ctx, opts.textDirection);
        },

        /**
         * @private
         */
        _getLegendItemAt: function _getLegendItemAt(x, y) {
          var me = this;
          var i, hitBox, lh;

          if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
            // See if we are touching one of the dataset boxes
            lh = me.legendHitBoxes;

            for (i = 0; i < lh.length; ++i) {
              hitBox = lh[i];

              if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
                // Touching an element
                return me.legendItems[i];
              }
            }
          }

          return null;
        },

        /**
         * Handle an event
         * @private
         * @param {IEvent} event - The event to handle
         */
        handleEvent: function handleEvent(e) {
          var me = this;
          var opts = me.options;
          var type = e.type === 'mouseup' ? 'click' : e.type;
          var hoveredItem;

          if (type === 'mousemove') {
            if (!opts.onHover && !opts.onLeave) {
              return;
            }
          } else if (type === 'click') {
            if (!opts.onClick) {
              return;
            }
          } else {
            return;
          } // Chart event already has relative position in it


          hoveredItem = me._getLegendItemAt(e.x, e.y);

          if (type === 'click') {
            if (hoveredItem && opts.onClick) {
              // use e.native for backwards compatibility
              opts.onClick.call(me, e.native, hoveredItem);
            }
          } else {
            if (opts.onLeave && hoveredItem !== me._hoveredItem) {
              if (me._hoveredItem) {
                opts.onLeave.call(me, e.native, me._hoveredItem);
              }

              me._hoveredItem = hoveredItem;
            }

            if (opts.onHover && hoveredItem) {
              // use e.native for backwards compatibility
              opts.onHover.call(me, e.native, hoveredItem);
            }
          }
        }
      });

      function createNewLegendAndAttach(chart, legendOpts) {
        var legend = new Legend({
          ctx: chart.ctx,
          options: legendOpts,
          chart: chart
        });
        core_layouts.configure(chart, legend, legendOpts);
        core_layouts.addBox(chart, legend);
        chart.legend = legend;
      }

      var plugin_legend = {
        id: 'legend',

        /**
         * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
         * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
         * the plugin, which one will be re-exposed in the chart.js file.
         * https://github.com/chartjs/Chart.js/pull/2640
         * @private
         */
        _element: Legend,
        beforeInit: function beforeInit(chart) {
          var legendOpts = chart.options.legend;

          if (legendOpts) {
            createNewLegendAndAttach(chart, legendOpts);
          }
        },
        beforeUpdate: function beforeUpdate(chart) {
          var legendOpts = chart.options.legend;
          var legend = chart.legend;

          if (legendOpts) {
            helpers$1.mergeIf(legendOpts, core_defaults.global.legend);

            if (legend) {
              core_layouts.configure(chart, legend, legendOpts);
              legend.options = legendOpts;
            } else {
              createNewLegendAndAttach(chart, legendOpts);
            }
          } else if (legend) {
            core_layouts.removeBox(chart, legend);
            delete chart.legend;
          }
        },
        afterEvent: function afterEvent(chart, e) {
          var legend = chart.legend;

          if (legend) {
            legend.handleEvent(e);
          }
        }
      };
      var noop$2 = helpers$1.noop;

      core_defaults._set('global', {
        title: {
          display: false,
          fontStyle: 'bold',
          fullWidth: true,
          padding: 10,
          position: 'top',
          text: '',
          weight: 2000 // by default greater than legend (1000) to be above

        }
      });
      /**
       * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
       */


      var Title = core_element.extend({
        initialize: function initialize(config) {
          var me = this;
          helpers$1.extend(me, config); // Contains hit boxes for each dataset (in dataset order)

          me.legendHitBoxes = [];
        },
        // These methods are ordered by lifecycle. Utilities then follow.
        beforeUpdate: noop$2,
        update: function update(maxWidth, maxHeight, margins) {
          var me = this; // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)

          me.beforeUpdate(); // Absorb the master measurements

          me.maxWidth = maxWidth;
          me.maxHeight = maxHeight;
          me.margins = margins; // Dimensions

          me.beforeSetDimensions();
          me.setDimensions();
          me.afterSetDimensions(); // Labels

          me.beforeBuildLabels();
          me.buildLabels();
          me.afterBuildLabels(); // Fit

          me.beforeFit();
          me.fit();
          me.afterFit(); //

          me.afterUpdate();
          return me.minSize;
        },
        afterUpdate: noop$2,
        //
        beforeSetDimensions: noop$2,
        setDimensions: function setDimensions() {
          var me = this; // Set the unconstrained dimension before label rotation

          if (me.isHorizontal()) {
            // Reset position before calculating rotation
            me.width = me.maxWidth;
            me.left = 0;
            me.right = me.width;
          } else {
            me.height = me.maxHeight; // Reset position before calculating rotation

            me.top = 0;
            me.bottom = me.height;
          } // Reset padding


          me.paddingLeft = 0;
          me.paddingTop = 0;
          me.paddingRight = 0;
          me.paddingBottom = 0; // Reset minSize

          me.minSize = {
            width: 0,
            height: 0
          };
        },
        afterSetDimensions: noop$2,
        //
        beforeBuildLabels: noop$2,
        buildLabels: noop$2,
        afterBuildLabels: noop$2,
        //
        beforeFit: noop$2,
        fit: function fit() {
          var me = this;
          var opts = me.options;
          var minSize = me.minSize = {};
          var isHorizontal = me.isHorizontal();
          var lineCount, textSize;

          if (!opts.display) {
            me.width = minSize.width = me.height = minSize.height = 0;
            return;
          }

          lineCount = helpers$1.isArray(opts.text) ? opts.text.length : 1;
          textSize = lineCount * helpers$1.options._parseFont(opts).lineHeight + opts.padding * 2;
          me.width = minSize.width = isHorizontal ? me.maxWidth : textSize;
          me.height = minSize.height = isHorizontal ? textSize : me.maxHeight;
        },
        afterFit: noop$2,
        // Shared Methods
        isHorizontal: function isHorizontal() {
          var pos = this.options.position;
          return pos === 'top' || pos === 'bottom';
        },
        // Actually draw the title block on the canvas
        draw: function draw() {
          var me = this;
          var ctx = me.ctx;
          var opts = me.options;

          if (!opts.display) {
            return;
          }

          var fontOpts = helpers$1.options._parseFont(opts);

          var lineHeight = fontOpts.lineHeight;
          var offset = lineHeight / 2 + opts.padding;
          var rotation = 0;
          var top = me.top;
          var left = me.left;
          var bottom = me.bottom;
          var right = me.right;
          var maxWidth, titleX, titleY;
          ctx.fillStyle = helpers$1.valueOrDefault(opts.fontColor, core_defaults.global.defaultFontColor); // render in correct colour

          ctx.font = fontOpts.string; // Horizontal

          if (me.isHorizontal()) {
            titleX = left + (right - left) / 2; // midpoint of the width

            titleY = top + offset;
            maxWidth = right - left;
          } else {
            titleX = opts.position === 'left' ? left + offset : right - offset;
            titleY = top + (bottom - top) / 2;
            maxWidth = bottom - top;
            rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
          }

          ctx.save();
          ctx.translate(titleX, titleY);
          ctx.rotate(rotation);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          var text = opts.text;

          if (helpers$1.isArray(text)) {
            var y = 0;

            for (var i = 0; i < text.length; ++i) {
              ctx.fillText(text[i], 0, y, maxWidth);
              y += lineHeight;
            }
          } else {
            ctx.fillText(text, 0, 0, maxWidth);
          }

          ctx.restore();
        }
      });

      function createNewTitleBlockAndAttach(chart, titleOpts) {
        var title = new Title({
          ctx: chart.ctx,
          options: titleOpts,
          chart: chart
        });
        core_layouts.configure(chart, title, titleOpts);
        core_layouts.addBox(chart, title);
        chart.titleBlock = title;
      }

      var plugin_title = {
        id: 'title',

        /**
         * Backward compatibility: since 2.1.5, the title is registered as a plugin, making
         * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of
         * the plugin, which one will be re-exposed in the chart.js file.
         * https://github.com/chartjs/Chart.js/pull/2640
         * @private
         */
        _element: Title,
        beforeInit: function beforeInit(chart) {
          var titleOpts = chart.options.title;

          if (titleOpts) {
            createNewTitleBlockAndAttach(chart, titleOpts);
          }
        },
        beforeUpdate: function beforeUpdate(chart) {
          var titleOpts = chart.options.title;
          var titleBlock = chart.titleBlock;

          if (titleOpts) {
            helpers$1.mergeIf(titleOpts, core_defaults.global.title);

            if (titleBlock) {
              core_layouts.configure(chart, titleBlock, titleOpts);
              titleBlock.options = titleOpts;
            } else {
              createNewTitleBlockAndAttach(chart, titleOpts);
            }
          } else if (titleBlock) {
            core_layouts.removeBox(chart, titleBlock);
            delete chart.titleBlock;
          }
        }
      };
      var plugins = {};
      var filler = plugin_filler;
      var legend = plugin_legend;
      var title = plugin_title;
      plugins.filler = filler;
      plugins.legend = legend;
      plugins.title = title;
      /**
       * @namespace Chart
       */

      core_controller.helpers = helpers$1; // @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!

      core_helpers();
      core_controller._adapters = core_adapters;
      core_controller.Animation = core_animation;
      core_controller.animationService = core_animations;
      core_controller.controllers = controllers;
      core_controller.DatasetController = core_datasetController;
      core_controller.defaults = core_defaults;
      core_controller.Element = core_element;
      core_controller.elements = elements;
      core_controller.Interaction = core_interaction;
      core_controller.layouts = core_layouts;
      core_controller.platform = platform;
      core_controller.plugins = core_plugins;
      core_controller.Scale = core_scale;
      core_controller.scaleService = core_scaleService;
      core_controller.Ticks = core_ticks;
      core_controller.Tooltip = core_tooltip; // Register built-in scales

      core_controller.helpers.each(scales, function (scale, type) {
        core_controller.scaleService.registerScaleType(type, scale, scale._defaults);
      }); // Load to register built-in adapters (as side effects)
      // Loading built-in plugins

      for (var k in plugins) {
        if (plugins.hasOwnProperty(k)) {
          core_controller.plugins.register(plugins[k]);
        }
      }

      core_controller.platform.initialize();
      var src = core_controller;

      if (typeof window !== 'undefined') {
        window.Chart = core_controller;
      } // DEPRECATIONS

      /**
       * Provided for backward compatibility, not available anymore
       * @namespace Chart.Chart
       * @deprecated since version 2.8.0
       * @todo remove at version 3
       * @private
       */


      core_controller.Chart = core_controller;
      /**
       * Provided for backward compatibility, not available anymore
       * @namespace Chart.Legend
       * @deprecated since version 2.1.5
       * @todo remove at version 3
       * @private
       */

      core_controller.Legend = plugins.legend._element;
      /**
       * Provided for backward compatibility, not available anymore
       * @namespace Chart.Title
       * @deprecated since version 2.1.5
       * @todo remove at version 3
       * @private
       */

      core_controller.Title = plugins.title._element;
      /**
       * Provided for backward compatibility, use Chart.plugins instead
       * @namespace Chart.pluginService
       * @deprecated since version 2.1.5
       * @todo remove at version 3
       * @private
       */

      core_controller.pluginService = core_controller.plugins;
      /**
       * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
       * effect, instead simply create/register plugins via plain JavaScript objects.
       * @interface Chart.PluginBase
       * @deprecated since version 2.5.0
       * @todo remove at version 3
       * @private
       */

      core_controller.PluginBase = core_controller.Element.extend({});
      /**
       * Provided for backward compatibility, use Chart.helpers.canvas instead.
       * @namespace Chart.canvasHelpers
       * @deprecated since version 2.6.0
       * @todo remove at version 3
       * @private
       */

      core_controller.canvasHelpers = core_controller.helpers.canvas;
      /**
       * Provided for backward compatibility, use Chart.layouts instead.
       * @namespace Chart.layoutService
       * @deprecated since version 2.7.3
       * @todo remove at version 3
       * @private
       */

      core_controller.layoutService = core_controller.layouts;
      /**
       * Provided for backward compatibility, not available anymore.
       * @namespace Chart.LinearScaleBase
       * @deprecated since version 2.8
       * @todo remove at version 3
       * @private
       */

      core_controller.LinearScaleBase = scale_linearbase;
      /**
       * Provided for backward compatibility, instead we should create a new Chart
       * by setting the type in the config (`new Chart(id, {type: '{chart-type}'}`).
       * @deprecated since version 2.8.0
       * @todo remove at version 3
       */

      core_controller.helpers.each(['Bar', 'Bubble', 'Doughnut', 'Line', 'PolarArea', 'Radar', 'Scatter'], function (klass) {
        core_controller[klass] = function (ctx, cfg) {
          return new core_controller(ctx, core_controller.helpers.merge(cfg || {}, {
            type: klass.charAt(0).toLowerCase() + klass.slice(1)
          }));
        };
      });
      return src;
    });
    /***/

  },

  /***/
  "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js ***!
    \*********************************************************************/

  /*! exports provided: BaseChartDirective, ChartsModule, ThemeService, defaultColors, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip */

  /***/
  function node_modulesNg2Charts__ivy_ngcc__Fesm2015Ng2ChartsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseChartDirective", function () {
      return BaseChartDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsModule", function () {
      return ChartsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultColors", function () {
      return defaultColors;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "monkeyPatchChartJsLegend", function () {
      return monkeyPatchChartJsLegend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "monkeyPatchChartJsTooltip", function () {
      return monkeyPatchChartJsTooltip;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var defaultColors = [[255, 99, 132], [54, 162, 235], [255, 206, 86], [231, 233, 237], [75, 192, 192], [151, 187, 205], [220, 220, 220], [247, 70, 74], [70, 191, 189], [253, 180, 92], [148, 159, 177], [77, 83, 96]];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generate colors by chart type
     * @param {?} chartType
     * @param {?} index
     * @param {?} count
     * @return {?}
     */

    function getColors(chartType, index, count) {
      if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
      }

      if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
      }

      if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
      }

      if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
      }

      if (chartType === 'bubble') {
        return formatPieColors(generateColors(count));
      }

      if (chartType === 'scatter') {
        return formatPieColors(generateColors(count));
      }

      throw new Error("getColors - Unsupported chart type ".concat(chartType));
    }
    /**
     * @param {?} colour
     * @param {?} alpha
     * @return {?}
     */


    function rgba(colour, alpha) {
      return 'rgba(' + colour.concat(alpha).join(',') + ')';
    }
    /**
     * @param {?} min
     * @param {?} max
     * @return {?}
     */


    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * @param {?} colors
     * @return {?}
     */


    function formatLineColor(colors) {
      return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
      };
    }
    /**
     * @param {?} colors
     * @return {?}
     */


    function formatBarColor(colors) {
      return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
      };
    }
    /**
     * @param {?} colors
     * @return {?}
     */


    function formatPieColors(colors) {
      return {
        backgroundColor: colors.map(
        /**
        * @param {?} color
        * @return {?}
        */
        function (color) {
          return rgba(color, 0.6);
        }),
        borderColor: colors.map(
        /**
        * @return {?}
        */
        function () {
          return '#fff';
        }),
        pointBackgroundColor: colors.map(
        /**
        * @param {?} color
        * @return {?}
        */
        function (color) {
          return rgba(color, 1);
        }),
        pointBorderColor: colors.map(
        /**
        * @return {?}
        */
        function () {
          return '#fff';
        }),
        pointHoverBackgroundColor: colors.map(
        /**
        * @param {?} color
        * @return {?}
        */
        function (color) {
          return rgba(color, 1);
        }),
        pointHoverBorderColor: colors.map(
        /**
        * @param {?} color
        * @return {?}
        */
        function (color) {
          return rgba(color, 1);
        })
      };
    }
    /**
     * @param {?} colors
     * @return {?}
     */


    function formatPolarAreaColors(colors) {
      return {
        backgroundColor: colors.map(
        /**
        * @param {?} color
        * @return {?}
        */
        function (color) {
          return rgba(color, 0.6);
        }),
        borderColor: colors.map(
        /**
        * @param {?} color
        * @return {?}
        */
        function (color) {
          return rgba(color, 1);
        }),
        hoverBackgroundColor: colors.map(
        /**
        * @param {?} color
        * @return {?}
        */
        function (color) {
          return rgba(color, 0.8);
        }),
        hoverBorderColor: colors.map(
        /**
        * @param {?} color
        * @return {?}
        */
        function (color) {
          return rgba(color, 1);
        })
      };
    }
    /**
     * @return {?}
     */


    function getRandomColor() {
      return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
    }
    /**
     * Generate colors for line|bar charts
     * @param {?} index
     * @return {?}
     */


    function generateColor(index) {
      return defaultColors[index] || getRandomColor();
    }
    /**
     * Generate colors for pie|doughnut charts
     * @param {?} count
     * @return {?}
     */


    function generateColors(count) {
      /** @type {?} */
      var colorsArr = new Array(count);

      for (var i = 0; i < count; i++) {
        colorsArr[i] = defaultColors[i] || getRandomColor();
      }

      return colorsArr;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ThemeService =
    /*#__PURE__*/
    function () {
      function ThemeService() {
        _classCallCheck(this, ThemeService);

        this.pColorschemesOptions = {};
        this.colorschemesOptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
      }
      /**
       * @param {?} options
       * @return {?}
       */


      _createClass(ThemeService, [{
        key: "setColorschemesOptions",
        value: function setColorschemesOptions(options) {
          this.pColorschemesOptions = options;
          this.colorschemesOptions.next(options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getColorschemesOptions",
        value: function getColorschemesOptions() {
          return this.pColorschemesOptions;
        }
      }]);

      return ThemeService;
    }();

    ThemeService.ɵfac = function ThemeService_Factory(t) {
      return new (t || ThemeService)();
    };

    ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    ThemeService.ctorParameters = function () {
      return [];
    };
    /** @nocollapse */


    ThemeService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ThemeService_Factory() {
        return new ThemeService();
      },
      token: ThemeService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
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

    /** @enum {number} */


    var UpdateType = {
      Default: 0,
      Update: 1,
      Refresh: 2
    };
    UpdateType[UpdateType.Default] = 'Default';
    UpdateType[UpdateType.Update] = 'Update';
    UpdateType[UpdateType.Refresh] = 'Refresh';

    var BaseChartDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} themeService
       */
      function BaseChartDirective(element, themeService) {
        _classCallCheck(this, BaseChartDirective);

        this.element = element;
        this.themeService = themeService;
        this.options = {};
        this.chartClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.old = {
          dataExists: false,
          dataLength: 0,
          datasetsExists: false,
          datasetsLength: 0,
          datasetsDataObjects: [],
          datasetsDataLengths: [],
          colorsExists: false,
          colors: [],
          labelsExist: false,
          labels: [],
          legendExists: false,
          legend: {}
        };
        this.subs = [];
      }
      /**
       * Register a plugin.
       * @param {?} plugin
       * @return {?}
       */


      _createClass(BaseChartDirective, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this = this;

          this.ctx = this.element.nativeElement.getContext('2d');
          this.refresh();
          this.subs.push(this.themeService.colorschemesOptions.subscribe(
          /**
          * @param {?} r
          * @return {?}
          */
          function (r) {
            return _this.themeChanged(r);
          }));
        }
        /**
         * @private
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "themeChanged",
        value: function themeChanged(options) {
          this.refresh();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this2 = this;

          if (!this.chart) {
            return;
          }
          /** @type {?} */


          var updateRequired = UpdateType.Default;
          /** @type {?} */

          var wantUpdate =
          /**
          * @param {?} x
          * @return {?}
          */
          function wantUpdate(x) {
            updateRequired = x > updateRequired ? x : updateRequired;
          };

          if (!!this.data !== this.old.dataExists) {
            this.propagateDataToDatasets(this.data);
            this.old.dataExists = !!this.data;
            wantUpdate(UpdateType.Update);
          }

          if (this.data && this.data.length !== this.old.dataLength) {
            this.old.dataLength = this.data && this.data.length || 0;
            wantUpdate(UpdateType.Update);
          }

          if (!!this.datasets !== this.old.datasetsExists) {
            this.old.datasetsExists = !!this.datasets;
            wantUpdate(UpdateType.Update);
          }

          if (this.datasets && this.datasets.length !== this.old.datasetsLength) {
            this.old.datasetsLength = this.datasets && this.datasets.length || 0;
            wantUpdate(UpdateType.Update);
          }

          if (this.datasets && this.datasets.filter(
          /**
          * @param {?} x
          * @param {?} i
          * @return {?}
          */
          function (x, i) {
            return x.data !== _this2.old.datasetsDataObjects[i];
          }).length) {
            this.old.datasetsDataObjects = this.datasets.map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.data;
            });
            wantUpdate(UpdateType.Update);
          }

          if (this.datasets && this.datasets.filter(
          /**
          * @param {?} x
          * @param {?} i
          * @return {?}
          */
          function (x, i) {
            return x.data.length !== _this2.old.datasetsDataLengths[i];
          }).length) {
            this.old.datasetsDataLengths = this.datasets.map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.data.length;
            });
            wantUpdate(UpdateType.Update);
          }

          if (!!this.colors !== this.old.colorsExists) {
            this.old.colorsExists = !!this.colors;
            this.updateColors();
            wantUpdate(UpdateType.Update);
          } // This smells of inefficiency, might need to revisit this


          if (this.colors && this.colors.filter(
          /**
          * @param {?} x
          * @param {?} i
          * @return {?}
          */
          function (x, i) {
            return !_this2.colorsEqual(x, _this2.old.colors[i]);
          }).length) {
            this.old.colors = this.colors.map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return _this2.copyColor(x);
            });
            this.updateColors();
            wantUpdate(UpdateType.Update);
          }

          if (!!this.labels !== this.old.labelsExist) {
            this.old.labelsExist = !!this.labels;
            wantUpdate(UpdateType.Update);
          }

          if (this.labels && this.labels.filter(
          /**
          * @param {?} x
          * @param {?} i
          * @return {?}
          */
          function (x, i) {
            return !_this2.labelsEqual(x, _this2.old.labels[i]);
          }).length) {
            this.old.labels = this.labels.map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return _this2.copyLabel(x);
            });
            wantUpdate(UpdateType.Update);
          }

          if (!!this.options.legend !== this.old.legendExists) {
            this.old.legendExists = !!this.options.legend;
            wantUpdate(UpdateType.Refresh);
          }

          if (this.options.legend && this.options.legend.position !== this.old.legend.position) {
            this.old.legend.position = this.options.legend.position;
            wantUpdate(UpdateType.Refresh);
          }

          switch (
          /** @type {?} */
          updateRequired) {
            case UpdateType.Default:
              break;

            case UpdateType.Update:
              this.update();
              break;

            case UpdateType.Refresh:
              this.refresh();
              break;
          }
        }
        /**
         * @param {?} a
         * @return {?}
         */

      }, {
        key: "copyLabel",
        value: function copyLabel(a) {
          if (Array.isArray(a)) {
            return _toConsumableArray(a);
          }

          return a;
        }
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */

      }, {
        key: "labelsEqual",
        value: function labelsEqual(a, b) {
          return Array.isArray(a) === Array.isArray(b) && (Array.isArray(a) || a === b) && (!Array.isArray(a) || a.length === b.length) && (!Array.isArray(a) || a.filter(
          /**
          * @param {?} x
          * @param {?} i
          * @return {?}
          */
          function (x, i) {
            return x !== b[i];
          }).length === 0);
        }
        /**
         * @param {?} a
         * @return {?}
         */

      }, {
        key: "copyColor",
        value: function copyColor(a) {
          /** @type {?} */
          var rc = {
            backgroundColor: a.backgroundColor,
            borderWidth: a.borderWidth,
            borderColor: a.borderColor,
            borderCapStyle: a.borderCapStyle,
            borderDash: a.borderDash,
            borderDashOffset: a.borderDashOffset,
            borderJoinStyle: a.borderJoinStyle,
            pointBorderColor: a.pointBorderColor,
            pointBackgroundColor: a.pointBackgroundColor,
            pointBorderWidth: a.pointBorderWidth,
            pointRadius: a.pointRadius,
            pointHoverRadius: a.pointHoverRadius,
            pointHitRadius: a.pointHitRadius,
            pointHoverBackgroundColor: a.pointHoverBackgroundColor,
            pointHoverBorderColor: a.pointHoverBorderColor,
            pointHoverBorderWidth: a.pointHoverBorderWidth,
            pointStyle: a.pointStyle,
            hoverBackgroundColor: a.hoverBackgroundColor,
            hoverBorderColor: a.hoverBorderColor,
            hoverBorderWidth: a.hoverBorderWidth
          };
          return rc;
        }
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */

      }, {
        key: "colorsEqual",
        value: function colorsEqual(a, b) {
          if (!a !== !b) {
            return false;
          }

          return !a || a.backgroundColor === b.backgroundColor && a.borderWidth === b.borderWidth && a.borderColor === b.borderColor && a.borderCapStyle === b.borderCapStyle && a.borderDash === b.borderDash && a.borderDashOffset === b.borderDashOffset && a.borderJoinStyle === b.borderJoinStyle && a.pointBorderColor === b.pointBorderColor && a.pointBackgroundColor === b.pointBackgroundColor && a.pointBorderWidth === b.pointBorderWidth && a.pointRadius === b.pointRadius && a.pointHoverRadius === b.pointHoverRadius && a.pointHitRadius === b.pointHitRadius && a.pointHoverBackgroundColor === b.pointHoverBackgroundColor && a.pointHoverBorderColor === b.pointHoverBorderColor && a.pointHoverBorderWidth === b.pointHoverBorderWidth && a.pointStyle === b.pointStyle && a.hoverBackgroundColor === b.hoverBackgroundColor && a.hoverBorderColor === b.hoverBorderColor && a.hoverBorderWidth === b.hoverBorderWidth;
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateColors",
        value: function updateColors() {
          var _this3 = this;

          this.datasets.forEach(
          /**
          * @param {?} elm
          * @param {?} index
          * @return {?}
          */
          function (elm, index) {
            if (_this3.colors && _this3.colors[index]) {
              Object.assign(elm, _this3.colors[index]);
            } else {
              Object.assign(elm, getColors(_this3.chartType, index, elm.data.length), Object.assign({}, elm));
            }
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var updateRequired = UpdateType.Default;
          /** @type {?} */

          var wantUpdate =
          /**
          * @param {?} x
          * @return {?}
          */
          function wantUpdate(x) {
            updateRequired = x > updateRequired ? x : updateRequired;
          }; // Check if the changes are in the data or datasets or labels or legend


          if (changes.hasOwnProperty('data') && changes.data.currentValue) {
            this.propagateDataToDatasets(changes.data.currentValue);
            wantUpdate(UpdateType.Update);
          }

          if (changes.hasOwnProperty('datasets') && changes.datasets.currentValue) {
            this.propagateDatasetsToData(changes.datasets.currentValue);
            wantUpdate(UpdateType.Update);
          }

          if (changes.hasOwnProperty('labels')) {
            if (this.chart) {
              this.chart.data.labels = changes.labels.currentValue;
            }

            wantUpdate(UpdateType.Update);
          }

          if (changes.hasOwnProperty('legend')) {
            if (this.chart) {
              this.chart.config.options.legend.display = changes.legend.currentValue;
              this.chart.generateLegend();
            }

            wantUpdate(UpdateType.Update);
          }

          if (changes.hasOwnProperty('options')) {
            wantUpdate(UpdateType.Refresh);
          }

          switch (
          /** @type {?} */
          updateRequired) {
            case UpdateType.Update:
              this.update();
              break;

            case UpdateType.Refresh:
            case UpdateType.Default:
              this.refresh();
              break;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
          }

          this.subs.forEach(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.unsubscribe();
          });
        }
        /**
         * @param {?=} duration
         * @param {?=} lazy
         * @return {?}
         */

      }, {
        key: "update",
        value: function update(duration, lazy) {
          if (this.chart) {
            return this.chart.update(duration, lazy);
          }
        }
        /**
         * @param {?} index
         * @param {?} hidden
         * @return {?}
         */

      }, {
        key: "hideDataset",
        value: function hideDataset(index, hidden) {
          this.chart.getDatasetMeta(index).hidden = hidden;
          this.chart.update();
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "isDatasetHidden",
        value: function isDatasetHidden(index) {
          return this.chart.getDatasetMeta(index).hidden;
        }
        /**
         * @return {?}
         */

      }, {
        key: "toBase64Image",
        value: function toBase64Image() {
          return this.chart.toBase64Image();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getChartConfiguration",
        value: function getChartConfiguration() {
          var _this4 = this;

          /** @type {?} */
          var datasets = this.getDatasets();
          /** @type {?} */

          var options = Object.assign({}, this.options);

          if (this.legend === false) {
            options.legend = {
              display: false
            };
          } // hook for onHover and onClick events


          options.hover = options.hover || {};

          if (!options.hover.onHover) {
            options.hover.onHover =
            /**
            * @param {?} event
            * @param {?} active
            * @return {?}
            */
            function (event, active) {
              if (active && !active.length) {
                return;
              }

              _this4.chartHover.emit({
                event: event,
                active: active
              });
            };
          }

          if (!options.onClick) {
            options.onClick =
            /**
            * @param {?=} event
            * @param {?=} active
            * @return {?}
            */
            function (event, active) {
              _this4.chartClick.emit({
                event: event,
                active: active
              });
            };
          }
          /** @type {?} */


          var mergedOptions = this.smartMerge(options, this.themeService.getColorschemesOptions());
          /** @type {?} */

          var chartConfig = {
            type: this.chartType,
            data: {
              labels: this.labels || [],
              datasets: datasets
            },
            plugins: this.plugins,
            options: mergedOptions
          };
          return chartConfig;
        }
        /**
         * @param {?} ctx
         * @return {?}
         */

      }, {
        key: "getChartBuilder",
        value: function getChartBuilder(ctx
        /*, data:any[], options:any*/
        ) {
          /** @type {?} */
          var chartConfig = this.getChartConfiguration();
          return new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"](ctx, chartConfig);
        }
        /**
         * @param {?} options
         * @param {?} overrides
         * @param {?=} level
         * @return {?}
         */

      }, {
        key: "smartMerge",
        value: function smartMerge(options, overrides) {
          var _this5 = this;

          var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (level === 0) {
            options = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(options);
          }
          /** @type {?} */


          var keysToUpdate = Object.keys(overrides);
          keysToUpdate.forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            if (Array.isArray(overrides[key])) {
              /** @type {?} */
              var arrayElements = options[key];

              if (arrayElements) {
                arrayElements.forEach(
                /**
                * @param {?} r
                * @return {?}
                */
                function (r) {
                  _this5.smartMerge(r, overrides[key][0], level + 1);
                });
              }
            } else if (typeof overrides[key] === 'object') {
              if (!(key in options)) {
                options[key] = {};
              }

              _this5.smartMerge(options[key], overrides[key], level + 1);
            } else {
              options[key] = overrides[key];
            }
          });

          if (level === 0) {
            return options;
          }
        }
        /**
         * @private
         * @param {?} label
         * @return {?}
         */

      }, {
        key: "isMultiLineLabel",
        value: function isMultiLineLabel(label) {
          return Array.isArray(label);
        }
        /**
         * @private
         * @param {?} label
         * @return {?}
         */

      }, {
        key: "joinLabel",
        value: function joinLabel(label) {
          if (!label) {
            return null;
          }

          if (this.isMultiLineLabel(label)) {
            return label.join(' ');
          } else {
            return label;
          }
        }
        /**
         * @private
         * @param {?} datasets
         * @return {?}
         */

      }, {
        key: "propagateDatasetsToData",
        value: function propagateDatasetsToData(datasets) {
          this.data = this.datasets.map(
          /**
          * @param {?} r
          * @return {?}
          */
          function (r) {
            return r.data;
          });

          if (this.chart) {
            this.chart.data.datasets = datasets;
          }

          this.updateColors();
        }
        /**
         * @private
         * @param {?} newDataValues
         * @return {?}
         */

      }, {
        key: "propagateDataToDatasets",
        value: function propagateDataToDatasets(newDataValues) {
          var _this6 = this;

          if (this.isMultiDataSet(newDataValues)) {
            if (this.datasets && newDataValues.length === this.datasets.length) {
              this.datasets.forEach(
              /**
              * @param {?} dataset
              * @param {?} i
              * @return {?}
              */
              function (dataset, i) {
                dataset.data = newDataValues[i];
              });
            } else {
              this.datasets = newDataValues.map(
              /**
              * @param {?} data
              * @param {?} index
              * @return {?}
              */
              function (data, index) {
                return {
                  data: data,
                  label: _this6.joinLabel(_this6.labels[index]) || "Label ".concat(index)
                };
              });

              if (this.chart) {
                this.chart.data.datasets = this.datasets;
              }
            }
          } else {
            if (!this.datasets) {
              this.datasets = [{
                data: newDataValues
              }];

              if (this.chart) {
                this.chart.data.datasets = this.datasets;
              }
            } else {
              this.datasets[0].data = newDataValues;
              this.datasets.splice(1); // Remove all elements but the first
            }
          }

          this.updateColors();
        }
        /**
         * @private
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "isMultiDataSet",
        value: function isMultiDataSet(data) {
          return Array.isArray(data[0]);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getDatasets",
        value: function getDatasets() {
          if (!this.datasets && !this.data) {
            throw new Error("ng-charts configuration error, data or datasets field are required to render chart ".concat(this.chartType));
          } // If `datasets` is defined, use it over the `data` property.


          if (this.datasets) {
            this.propagateDatasetsToData(this.datasets);
            return this.datasets;
          }

          if (this.data) {
            this.propagateDataToDatasets(this.data);
            return this.datasets;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "refresh",
        value: function refresh() {
          // if (this.options && this.options.responsive) {
          //   setTimeout(() => this.refresh(), 50);
          // }
          // todo: remove this line, it is producing flickering
          if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
          }

          if (this.ctx) {
            this.chart = this.getChartBuilder(this.ctx
            /*, data, this.options*/
            );
          }
        }
      }], [{
        key: "registerPlugin",
        value: function registerPlugin(plugin) {
          chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"].plugins.register(plugin);
        }
        /**
         * @param {?} plugin
         * @return {?}
         */

      }, {
        key: "unregisterPlugin",
        value: function unregisterPlugin(plugin) {
          chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"].plugins.unregister(plugin);
        }
      }]);

      return BaseChartDirective;
    }();

    BaseChartDirective.ɵfac = function BaseChartDirective_Factory(t) {
      return new (t || BaseChartDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ThemeService));
    };

    BaseChartDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: BaseChartDirective,
      selectors: [["canvas", "baseChart", ""]],
      inputs: {
        options: "options",
        data: "data",
        datasets: "datasets",
        labels: "labels",
        chartType: "chartType",
        colors: "colors",
        legend: "legend",
        plugins: "plugins"
      },
      outputs: {
        chartClick: "chartClick",
        chartHover: "chartHover"
      },
      exportAs: ["base-chart"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()]
    });
    /** @nocollapse */

    BaseChartDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: ThemeService
      }];
    };

    BaseChartDirective.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      datasets: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      labels: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      chartType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      colors: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      legend: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      plugins: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      chartClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      chartHover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseChartDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          // tslint:disable-next-line:directive-selector
          selector: 'canvas[baseChart]',
          exportAs: 'base-chart'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ThemeService
        }];
      }, {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chartClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        chartHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        datasets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        labels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chartType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        legend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        plugins: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ChartsModule = function ChartsModule() {
      _classCallCheck(this, ChartsModule);
    };

    ChartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChartsModule
    });
    ChartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChartsModule_Factory(t) {
        return new (t || ChartsModule)();
      },
      imports: [[]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartsModule, {
        declarations: [BaseChartDirective],
        exports: [BaseChartDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [BaseChartDirective],
          imports: [],
          exports: [BaseChartDirective]
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:variable-name
    // tslint:disable:no-var-keyword
    // tslint:disable:prefer-const
    // tslint:disable:only-arrow-functions
    // tslint:disable:one-variable-per-declaration
    // tslint:disable:object-literal-shorthand
    // tslint:disable:space-before-function-paren

    /**
     * @return {?}
     */


    function monkeyPatchChartJsLegend() {
      if (typeof Chart === 'undefined') {
        console.log('Chart not defined (guessing this is a universal build, and I don\'t know why this happens -- Aviad)');
        return;
      }
      /** @type {?} */


      var plugins = Chart.plugins.getAll();
      /** @type {?} */

      var legend = plugins.filter(
      /**
      * @param {?} p
      * @return {?}
      */
      function (p) {
        return p.id === 'legend';
      })[0];
      legend._element.prototype.fit = fit;
      legend._element.prototype.draw = draw;
      /** @type {?} */

      var helpers = Chart.helpers;
      /** @type {?} */

      var defaults = Chart.defaults;
      /** @type {?} */

      var valueOrDefault = helpers.valueOrDefault;
      /**
       * @param {?} labelOpts
       * @param {?} fontSize
       * @return {?}
       */

      function getBoxWidth(labelOpts, fontSize) {
        return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ? fontSize : labelOpts.boxWidth;
      }
      /**
       * @return {?}
       */


      function fit() {
        /** @type {?} */
        var me = this;
        /** @type {?} */

        var opts = me.options;
        /** @type {?} */

        var labelOpts = opts.labels;
        /** @type {?} */

        var display = opts.display;
        /** @type {?} */

        var ctx = me.ctx;
        /** @type {?} */

        var labelFont = helpers.options._parseFont(labelOpts);
        /** @type {?} */


        var fontSize = labelFont.size; // Reset hit boxes

        /** @type {?} */

        var hitboxes = me.legendHitBoxes = [];
        /** @type {?} */

        var minSize = me.minSize;
        /** @type {?} */

        var isHorizontal = me.isHorizontal();

        if (isHorizontal) {
          minSize.width = me.maxWidth; // fill all the width

          minSize.height = display ? 10 : 0;
        } else {
          minSize.width = display ? 10 : 0;
          minSize.height = me.maxHeight; // fill all the height
        }
        /** @type {?} */


        var getMaxLineWidth =
        /**
        * @param {?} textLines
        * @return {?}
        */
        function getMaxLineWidth(textLines) {
          return textLines.map(
          /**
          * @param {?} textLine
          * @return {?}
          */
          function (textLine) {
            return ctx.measureText(textLine).width;
          }).reduce(
          /**
          * @param {?} acc
          * @param {?} v
          * @return {?}
          */
          function (acc, v) {
            return v > acc ? v : acc;
          }, 0);
        }; // Increase sizes here


        if (display) {
          ctx.font = labelFont.string;

          if (isHorizontal) {
            // Labels
            // Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one

            /** @type {?} */
            var lineWidths = me.lineWidths = [0];
            /** @type {?} */

            var lineHeights = me.lineHeights = [];
            /** @type {?} */

            var currentLineHeight = 0;
            /** @type {?} */

            var lineIndex = 0;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            helpers.each(me.legendItems,
            /**
            * @param {?} legendItem
            * @param {?} i
            * @return {?}
            */
            function (legendItem, i) {
              /** @type {?} */
              var width;
              /** @type {?} */

              var height;

              if (helpers.isArray(legendItem.text)) {
                width = getMaxLineWidth(legendItem.text);
                height = fontSize * legendItem.text.length + labelOpts.padding;
              } else {
                width = ctx.measureText(legendItem.text).width;
                height = fontSize + labelOpts.padding;
              }

              width += getBoxWidth(labelOpts, fontSize) + fontSize / 2;

              if (lineWidths[lineWidths.length - 1] + width + 2 * labelOpts.padding > minSize.width) {
                lineHeights.push(currentLineHeight);
                currentLineHeight = 0;
                lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
                lineIndex++;
              }

              legendItem.lineOrColumnIndex = lineIndex;

              if (height > currentLineHeight) {
                currentLineHeight = height;
              } // Store the hitbox width and height here. Final position will be updated in `draw`


              hitboxes[i] = {
                left: 0,
                top: 0,
                width: width,
                height: height
              };
              lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
            });
            lineHeights.push(currentLineHeight);
            minSize.height += lineHeights.reduce(
            /**
            * @param {?} acc
            * @param {?} v
            * @return {?}
            */
            function (acc, v) {
              return acc + v;
            }, 0);
          } else {
            /** @type {?} */
            var vPadding = labelOpts.padding;
            /** @type {?} */

            var columnWidths = me.columnWidths = [];
            /** @type {?} */

            var columnHeights = me.columnHeights = [];
            /** @type {?} */

            var totalWidth = labelOpts.padding;
            /** @type {?} */

            var currentColWidth = 0;
            /** @type {?} */

            var currentColHeight = 0;
            /** @type {?} */

            var columnIndex = 0;
            helpers.each(me.legendItems,
            /**
            * @param {?} legendItem
            * @param {?} i
            * @return {?}
            */
            function (legendItem, i) {
              /** @type {?} */
              var itemWidth;
              /** @type {?} */

              var height;

              if (helpers.isArray(legendItem.text)) {
                itemWidth = getMaxLineWidth(legendItem.text);
                height = fontSize * legendItem.text.length;
              } else {
                itemWidth = ctx.measureText(legendItem.text).width;
                height = fontSize;
              }

              itemWidth += getBoxWidth(labelOpts, fontSize) + fontSize / 2; // If too tall, go to new column

              if (currentColHeight + fontSize + 2 * vPadding > minSize.height) {
                totalWidth += currentColWidth + labelOpts.padding;
                columnWidths.push(currentColWidth); // previous column width

                columnHeights.push(currentColHeight);
                currentColWidth = 0;
                currentColHeight = 0;
                columnIndex++;
              }

              legendItem.lineOrColumnIndex = columnIndex; // Get max width

              currentColWidth = Math.max(currentColWidth, itemWidth);
              currentColHeight += height + vPadding; // Store the hitbox width and height here. Final position will be updated in `draw`

              hitboxes[i] = {
                left: 0,
                top: 0,
                width: itemWidth,
                height: height
              };
            });
            totalWidth += currentColWidth;
            columnWidths.push(currentColWidth);
            columnHeights.push(currentColHeight);
            minSize.width += totalWidth;
          }
        }

        me.width = minSize.width;
        me.height = minSize.height;
      }
      /**
       * @return {?}
       */


      function draw() {
        /** @type {?} */
        var me = this;
        /** @type {?} */

        var opts = me.options;
        /** @type {?} */

        var labelOpts = opts.labels;
        /** @type {?} */

        var globalDefaults = defaults.global;
        /** @type {?} */

        var defaultColor = globalDefaults.defaultColor;
        /** @type {?} */

        var lineDefault = globalDefaults.elements.line;
        /** @type {?} */

        var legendHeight = me.height;
        /** @type {?} */

        var columnHeights = me.columnHeights;
        /** @type {?} */

        var columnWidths = me.columnWidths;
        /** @type {?} */

        var legendWidth = me.width;
        /** @type {?} */

        var lineWidths = me.lineWidths;
        /** @type {?} */

        var lineHeights = me.lineHeights;

        if (opts.display) {
          /** @type {?} */
          var ctx = me.ctx;
          /** @type {?} */

          var fontColor = valueOrDefault(labelOpts.fontColor, globalDefaults.defaultFontColor);
          /** @type {?} */

          var labelFont = helpers.options._parseFont(labelOpts);
          /** @type {?} */


          var fontSize = labelFont.size;
          /** @type {?} */

          var cursor; // Canvas setup

          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.lineWidth = 0.5;
          ctx.strokeStyle = fontColor; // for strikethrough effect

          ctx.fillStyle = fontColor; // render in correct colour

          ctx.font = labelFont.string;
          /** @type {?} */

          var boxWidth = getBoxWidth(labelOpts, fontSize);
          /** @type {?} */

          var hitboxes = me.legendHitBoxes; // current position

          /** @type {?} */

          var drawLegendBox =
          /**
          * @param {?} x
          * @param {?} y
          * @param {?} legendItem
          * @return {?}
          */
          function drawLegendBox(x, y, legendItem) {
            if (isNaN(boxWidth) || boxWidth <= 0) {
              return;
            } // Set the ctx for the box


            ctx.save();
            /** @type {?} */

            var lineWidth = valueOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
            ctx.fillStyle = valueOrDefault(legendItem.fillStyle, defaultColor);
            ctx.lineCap = valueOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
            ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
            ctx.lineJoin = valueOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, defaultColor);

            if (ctx.setLineDash) {
              // IE 9 and 10 do not support line dash
              ctx.setLineDash(valueOrDefault(legendItem.lineDash, lineDefault.borderDash));
            }

            if (opts.labels && opts.labels.usePointStyle) {
              // Recalculate x and y for drawPoint() because its expecting
              // x and y to be center of figure (instead of top left)

              /** @type {?} */
              var radius = boxWidth * Math.SQRT2 / 2;
              /** @type {?} */

              var centerX = x + boxWidth / 2;
              /** @type {?} */

              var centerY = y + fontSize / 2; // Draw pointStyle as legend symbol

              helpers.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
            } else {
              // Draw box as legend symbol
              if (lineWidth !== 0) {
                ctx.strokeRect(x, y, boxWidth, fontSize);
              }

              ctx.fillRect(x, y, boxWidth, fontSize);
            }

            ctx.restore();
          };
          /** @type {?} */


          var drawStrikeThrough =
          /**
          * @param {?} x
          * @param {?} y
          * @param {?} w
          * @return {?}
          */
          function drawStrikeThrough(x, y, w) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(x, y);
            ctx.lineTo(x + w, y);
            ctx.stroke();
          };
          /** @type {?} */


          var drawCrossOver =
          /**
          * @param {?} x
          * @param {?} y
          * @param {?} w
          * @param {?} h
          * @return {?}
          */
          function drawCrossOver(x, y, w, h) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(x, y);
            ctx.lineTo(x + w, y + h);
            ctx.moveTo(x, y + h);
            ctx.lineTo(x + w, y);
            ctx.stroke();
          };
          /** @type {?} */


          var fillText =
          /**
          * @param {?} x
          * @param {?} y
          * @param {?} legendItem
          * @param {?} textWidth
          * @return {?}
          */
          function fillText(x, y, legendItem, textWidth) {
            /** @type {?} */
            var halfFontSize = fontSize / 2;
            /** @type {?} */

            var xLeft = boxWidth + halfFontSize + x;
            /** @type {?} */

            var yMiddle = y + halfFontSize;

            if (helpers.isArray(legendItem.text)) {
              helpers.each(legendItem.text,
              /**
              * @param {?} textLine
              * @param {?} index
              * @return {?}
              */
              function (textLine, index) {
                /** @type {?} */
                var lineOffset = index * fontSize;
                ctx.fillText(textLine, xLeft, yMiddle + lineOffset);
              });
            } else {
              ctx.fillText(legendItem.text, xLeft, yMiddle);
            }

            if (legendItem.hidden) {
              if (helpers.isArray(legendItem.text)) {
                drawCrossOver(xLeft, yMiddle, textWidth, (legendItem.text.length - 1) * (fontSize - 1));
              } else {
                drawStrikeThrough(xLeft, yMiddle, textWidth);
              }
            }
          };
          /** @type {?} */


          var alignmentOffset =
          /**
          * @param {?} dimension
          * @param {?} blockSize
          * @return {?}
          */
          function alignmentOffset(dimension, blockSize) {
            switch (opts.align) {
              case 'start':
                return labelOpts.padding;

              case 'end':
                return dimension - blockSize;

              default:
                // center
                return (dimension - blockSize + labelOpts.padding) / 2;
            }
          }; // Horizontal

          /** @type {?} */


          var isHorizontal = me.isHorizontal();

          if (isHorizontal) {
            cursor = {
              x: me.left + alignmentOffset(legendWidth, lineWidths[0]),
              y: me.top + labelOpts.padding,
              line: 0
            };
          } else {
            cursor = {
              x: me.left + labelOpts.padding,
              y: me.top + alignmentOffset(legendHeight, columnHeights[0]),
              line: 0
            };
          }

          helpers.each(me.legendItems,
          /**
          * @param {?} legendItem
          * @param {?} i
          * @return {?}
          */
          function (legendItem, i) {
            /** @type {?} */
            var textWidth;
            /** @type {?} */

            var height;
            /** @type {?} */

            var boxTopOffset;

            if (legendItem.lineOrColumnIndex > cursor.line) {
              if (isHorizontal) {
                cursor.y += lineHeights[cursor.line];
                cursor.line = legendItem.lineOrColumnIndex;
                cursor.x = me.left + alignmentOffset(legendWidth, lineWidths[cursor.line]);
              } else {
                cursor.x += columnWidths[cursor.line] + labelOpts.padding;
                cursor.line = legendItem.lineOrColumnIndex;
                cursor.y = me.top + alignmentOffset(legendHeight, columnHeights[cursor.line]);
              }
            }

            if (helpers.isArray(legendItem.text)) {
              textWidth = legendItem.text.map(
              /**
              * @param {?} textLine
              * @return {?}
              */
              function (textLine) {
                return ctx.measureText(textLine).width;
              }).reduce(
              /**
              * @param {?} acc
              * @param {?} v
              * @return {?}
              */
              function (acc, v) {
                return v > acc ? v : acc;
              }, 0);
              boxTopOffset = fontSize / 2 * (legendItem.text.length - 1);
              height = fontSize * legendItem.text.length;
            } else {
              textWidth = ctx.measureText(legendItem.text).width;
              boxTopOffset = 0;
              height = fontSize;
            }
            /** @type {?} */


            var width = boxWidth + fontSize / 2 + textWidth;
            /** @type {?} */

            var x = cursor.x;
            /** @type {?} */

            var y = cursor.y;
            /** @type {?} */

            var topOffset = isHorizontal ? Math.trunc((lineHeights[cursor.line] - hitboxes[i].height) / 2) : 0;
            drawLegendBox(x, y + boxTopOffset + topOffset, legendItem);
            hitboxes[i].left = x;
            hitboxes[i].top = y; // Fill the actual label

            fillText(x, y + topOffset, legendItem, textWidth);

            if (isHorizontal) {
              cursor.x += width + labelOpts.padding;
            } else {
              cursor.y += height + labelOpts.padding;
            }
          });
        }
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:variable-name
    // tslint:disable:no-var-keyword
    // tslint:disable:prefer-const
    // tslint:disable:only-arrow-functions
    // tslint:disable:one-variable-per-declaration
    // tslint:disable:object-literal-shorthand
    // tslint:disable:space-before-function-paren

    /**
     * @return {?}
     */


    function monkeyPatchChartJsTooltip() {
      if (typeof Chart === 'undefined') {
        console.log('Chart not defined (guessing this is a universal build, and I don\'t know why this happens -- Aviad)');
        return;
      }

      Chart.Tooltip.prototype.drawBody = drawBody;
      /** @type {?} */

      var helpers = Chart.helpers;
      /**
       * @param {?} vm
       * @param {?} align
       * @return {?}
       */

      function getAlignedX(vm, align) {
        return align === 'center' ? vm.x + vm.width / 2 : align === 'right' ? vm.x + vm.width - vm.xPadding : vm.x + vm.xPadding;
      }
      /**
       * @param {?} pt
       * @param {?} vm
       * @param {?} ctx
       * @return {?}
       */


      function drawBody(pt, vm, ctx) {
        /** @type {?} */
        var bodyFontSize = vm.bodyFontSize;
        /** @type {?} */

        var bodySpacing = vm.bodySpacing;
        /** @type {?} */

        var bodyAlign = vm._bodyAlign;
        /** @type {?} */

        var body = vm.body;
        /** @type {?} */

        var drawColorBoxes = vm.displayColors;
        /** @type {?} */

        var labelColors = vm.labelColors;
        /** @type {?} */

        var xLinePadding = 0;
        /** @type {?} */

        var colorX = drawColorBoxes ? getAlignedX(vm, 'left') : 0;
        /** @type {?} */

        var textColor;
        ctx.textAlign = bodyAlign;
        ctx.textBaseline = 'top';
        ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
        pt.x = getAlignedX(vm, bodyAlign); // Before Body

        /** @type {?} */

        var fillLineOfText =
        /**
        * @param {?} line
        * @return {?}
        */
        function fillLineOfText(line) {
          ctx.fillText(line, pt.x + xLinePadding, pt.y);
          pt.y += bodyFontSize + bodySpacing;
        }; // Before body lines


        ctx.fillStyle = vm.bodyFontColor;
        helpers.each(vm.beforeBody, fillLineOfText);
        xLinePadding = drawColorBoxes && bodyAlign !== 'right' ? bodyAlign === 'center' ? bodyFontSize / 2 + 1 : bodyFontSize + 2 : 0; // Draw body lines now

        helpers.each(body,
        /**
        * @param {?} bodyItem
        * @param {?} i
        * @return {?}
        */
        function (bodyItem, i) {
          textColor = vm.labelTextColors[i];
          ctx.fillStyle = textColor;
          helpers.each(bodyItem.before, fillLineOfText); // Draw Legend-like boxes if needed

          if (drawColorBoxes) {
            // Fill a white rect so that colours merge nicely if the opacity is < 1
            ctx.fillStyle = vm.legendColorBackground;
            ctx.fillRect(colorX, pt.y, bodyFontSize, bodyFontSize); // Border

            ctx.lineWidth = 1;
            ctx.strokeStyle = labelColors[i].borderColor;
            ctx.strokeRect(colorX, pt.y, bodyFontSize, bodyFontSize); // Inner square

            ctx.fillStyle = labelColors[i].backgroundColor;
            ctx.fillRect(colorX + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
            ctx.fillStyle = textColor;
          }

          helpers.each(bodyItem.lines, fillLineOfText);
          helpers.each(bodyItem.after, fillLineOfText);
        }); // Reset back to 0 for after body

        xLinePadding = 0; // After body lines

        helpers.each(vm.afterBody, fillLineOfText);
        pt.y -= bodySpacing; // Remove last body spacing
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng2-charts.js.map

    /***/

  },

  /***/
  "./src/app/main/apps/dashboards/analytics/analytics.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/main/apps/dashboards/analytics/analytics.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AnalyticsDashboardComponent */

  /***/
  function srcAppMainAppsDashboardsAnalyticsAnalyticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsDashboardComponent", function () {
      return AnalyticsDashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fuse/animations */
    "./src/@fuse/animations/index.ts");
    /* harmony import */


    var app_main_apps_dashboards_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/main/apps/dashboards/analytics/analytics.service */
    "./src/app/main/apps/dashboards/analytics/analytics.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function AnalyticsDashboardComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "trending_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AnalyticsDashboardComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "trending_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AnalyticsDashboardComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "trending_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r347.widgets.widget4.visits.ofTarget, "%");
      }
    }

    function AnalyticsDashboardComponent_div_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "trending_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r348.widgets.widget4.visits.ofTarget, "%");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "blue-700": a0
      };
    };

    var AnalyticsDashboardComponent =
    /*#__PURE__*/
    function () {
      /**
       * Constructor
       *
       * @param {AnalyticsDashboardService} _analyticsDashboardService
       */
      function AnalyticsDashboardComponent(_analyticsDashboardService) {
        _classCallCheck(this, AnalyticsDashboardComponent);

        this._analyticsDashboardService = _analyticsDashboardService;
        this.widget1SelectedYear = '2023';
        this.widget5SelectedDay = 'today'; // Register the custom chart.js plugin

        this._registerCustomChartJSPlugin();
      } // -----------------------------------------------------------------------------------------------------
      // @ Lifecycle hooks
      // -----------------------------------------------------------------------------------------------------

      /**
       * On init
       */


      _createClass(AnalyticsDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Get the widgets from the service
          this.widgets = this._analyticsDashboardService.widgets;
          console.log(this.widgets);
        } // -----------------------------------------------------------------------------------------------------
        // @ Private methods
        // -----------------------------------------------------------------------------------------------------

        /**
         * Register a custom plugin
         */

      }, {
        key: "_registerCustomChartJSPlugin",
        value: function _registerCustomChartJSPlugin() {
          window.Chart.plugins.register({
            afterDatasetsDraw: function afterDatasetsDraw(chart, easing) {
              // Only activate the plugin if it's made available
              // in the options
              if (!chart.options.plugins.xLabelsOnTop || chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false) {
                return;
              } // To only draw at the end of animation, check for easing === 1


              var ctx = chart.ctx;
              chart.data.datasets.forEach(function (dataset, i) {
                var meta = chart.getDatasetMeta(i);

                if (!meta.hidden) {
                  meta.data.forEach(function (element, index) {
                    // Draw the text in black, with the specified font
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                    var fontSize = 13;
                    var fontStyle = 'normal';
                    var fontFamily = 'Roboto, Helvetica Neue, Arial';
                    ctx.font = window.Chart.helpers.fontString(fontSize, fontStyle, fontFamily); // Just naively convert to string for now

                    var dataString = dataset.data[index].toString(); // Make sure alignment settings are correct

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    var padding = 15;
                    var startY = 24;
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, startY);
                    ctx.save();
                    ctx.beginPath();
                    ctx.setLineDash([5, 3]);
                    ctx.moveTo(position.x, startY + padding);
                    ctx.lineTo(position.x, position.y - padding);
                    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
                    ctx.stroke();
                    ctx.restore();
                  });
                }
              });
            }
          });
        }
      }]);

      return AnalyticsDashboardComponent;
    }();

    AnalyticsDashboardComponent.ɵfac = function AnalyticsDashboardComponent_Factory(t) {
      return new (t || AnalyticsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_main_apps_dashboards_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsDashboardService"]));
    };

    AnalyticsDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnalyticsDashboardComponent,
      selectors: [["analytics-dashboard"]],
      decls: 55,
      vars: 40,
      consts: [["id", "dashboard-analytics", 1, "page-layout", "blank"], [1, "main-widget"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "position-relative", "p-24", "blue-600"], ["fxLayout", "column", "fxLayoutAlign", "start start"], [1, "h2"], [1, "h5", "secondary-text"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "py-8", "px-12", "border-radius-2", "line-height-1", "mr-8", "cursor-pointer", 3, "ngClass", "click"], [1, "py-8", "px-12", "border-radius-2", "line-height-1", "cursor-pointer", 3, "ngClass", "click"], [1, "position-relative", "h-256", "pb-16", "blue-600"], ["baseChart", "", 3, "datasets", "labels", "colors", "options", "chartType"], [1, "content"], [1, "left", "mr-lg-32"], [1, "pb-24", "font-size-18", "font-weight-300"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxLayout.gt-sm", "row", "fxLayoutAlign.gt-sm", "start start"], ["fxFlex", "100", "fxFlex.gt-sm", "34", 1, "widget"], [1, "fuse-card", "auto-width", "mb-32", 3, "ngClass.gt-sm"], ["fxLayout", "row wrap", "fxLayoutAlign", "start end", 1, "p-16", "pb-0"], [1, "pr-16"], [1, "h3", "secondary-text"], [1, "font-size-54", "font-weight-300", "line-height-1", "mt-8"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "py-4", "font-size-16"], ["fxFlex", "row", "fxLayoutAlign", "start center", "class", "green-fg", 4, "ngIf"], ["fxFlex", "row", "fxLayoutAlign", "start center", "class", "red-fg", 4, "ngIf"], [1, "h-96", "w-100-p"], ["fxFlex", "100", "fxFlex.gt-sm", "33", 1, "widget"], [1, "fuse-card", "auto-width"], [1, "ml-4", "text-nowrap"], ["fxFlex", "row", "fxLayoutAlign", "start center", 1, "green-fg"], [1, "green-fg", "mr-4"], ["fxFlex", "row", "fxLayoutAlign", "start center", 1, "red-fg"], [1, "red-fg", "mr-4"]],
      template: function AnalyticsDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Consultas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cantidad por mes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalyticsDashboardComponent_Template_div_click_9_listener($event) {
            return ctx.widget1SelectedYear = "2018";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 2018 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalyticsDashboardComponent_Template_div_click_11_listener($event) {
            return ctx.widget1SelectedYear = "2019";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 2019 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalyticsDashboardComponent_Template_div_click_13_listener($event) {
            return ctx.widget1SelectedYear = "2020";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalyticsDashboardComponent_Template_div_click_15_listener($event) {
            return ctx.widget1SelectedYear = "2021";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 2021 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalyticsDashboardComponent_Template_div_click_17_listener($event) {
            return ctx.widget1SelectedYear = "2022";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 2022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalyticsDashboardComponent_Template_div_click_19_listener($event) {
            return ctx.widget1SelectedYear = "2023";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 2023 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "canvas", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "N\xFAmero de Consultas Hist\xF3ricas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AnalyticsDashboardComponent_div_36_Template, 3, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AnalyticsDashboardComponent_div_37_Template, 3, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "canvas", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Comparaci\xF3n con el a\xF1o anterior (periodo)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AnalyticsDashboardComponent_div_49_Template, 5, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AnalyticsDashboardComponent_div_50_Template, 5, 1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "en consultas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "canvas", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.widget1SelectedYear === "2018"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.widget1SelectedYear === "2019"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.widget1SelectedYear === "2020"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx.widget1SelectedYear === "2021"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx.widget1SelectedYear === "2022"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ctx.widget1SelectedYear === "2023"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.widgets.widget1.datasets[ctx.widget1SelectedYear])("labels", ctx.widgets.widget1.labels)("colors", ctx.widgets.widget1.colors)("options", ctx.widgets.widget1.options)("chartType", ctx.widgets.widget1.chartType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.gt-sm", "mb-0 mr-32");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.widgets.widget3.impressions.value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widgets.widget3.impressions.ofTarget > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widgets.widget3.impressions.ofTarget < 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.widgets.widget3.datasets)("labels", ctx.widgets.widget3.labels)("colors", ctx.widgets.widget3.colors)("options", ctx.widgets.widget3.options)("chartType", ctx.widgets.widget3.chartType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.widgets.widget4.visits.value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widgets.widget4.visits.ofTarget > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widgets.widget4.visits.ofTarget < 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.widgets.widget4.datasets)("labels", ctx.widgets.widget4.labels)("colors", ctx.widgets.widget4.colors)("options", ctx.widgets.widget4.options)("chartType", ctx.widgets.widget4.chartType);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
      styles: ["/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#dashboard-analytics .main-widget {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n#dashboard-analytics .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 32px;\n  min-width: 0;\n}\n@media screen and (max-width: 1279px) {\n  #dashboard-analytics .content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n#dashboard-analytics .content .left {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  min-width: 0;\n}\n#dashboard-analytics .content .left .widget {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  min-width: 0;\n}\n#dashboard-analytics .content .right {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  width: 320px;\n  min-width: 320px;\n  max-width: 320px;\n}\n@media screen and (max-width: 1279px) {\n  #dashboard-analytics .content .right {\n    -webkit-box-flex: 1;\n            flex: 1 0 100%;\n    margin-top: 32px;\n    width: 100%;\n    min-width: 0;\n    max-width: none;\n  }\n}\n@media screen and (max-width: 1279px) {\n  #dashboard-analytics .content .right .fuse-card {\n    width: 100%;\n    min-width: 0;\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL2Rhc2hib2FyZHMvYW5hbHl0aWNzL0M6XFxQUk9ZRUNUT1MgSU1QRUwgU0FTXFx0b3RhbGp1cmlkaWNhL25vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxfdGhlbWluZy5zY3NzIiwic3JjL2FwcC9tYWluL2FwcHMvZGFzaGJvYXJkcy9hbmFseXRpY3MvQzpcXFBST1lFQ1RPUyBJTVBFTCBTQVNcXHRvdGFsanVyaWRpY2Evc3JjXFxhcHBcXG1haW5cXGFwcHNcXGRhc2hib2FyZHNcXGFuYWx5dGljc1xcYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2FwcHMvZGFzaGJvYXJkcy9hbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2FwcHMvZGFzaGJvYXJkcy9hbmFseXRpY3MvQzpcXFBST1lFQ1RPUyBJTVBFTCBTQVNcXHRvdGFsanVyaWRpY2Evc3JjXFxAZnVzZVxcc2Nzc1xccGFydGlhbHNcXF9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXk0Q0Esa0NBQUE7QUF1aURBLDJDQUFBO0FBd0NBLHFCQUFBO0FDcDlGSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FSO0FER0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0RSO0FDcUJRO0VGeEJKO0lBT1EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDQVY7QUFDRjtBREVRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxjQUFBO0VBQ0EsWUFBQTtBQ0FaO0FERVk7RUFDSSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxZQUFBO0FDQWhCO0FESVE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZaO0FDRFE7RUZGQTtJQVFRLG1CQUFBO1lBQUEsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDRGQ7QUFDRjtBQ1ZRO0VGYUk7SUFHUSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNGbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwcy9kYXNoYm9hcmRzL2FuYWx5dGljcy9hbmFseXRpY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgYWxsIHRoZSB0aGVtaW5nIGZ1bmN0aW9uYWxpdHkuXG4vLyBXZSB3YW50IG92ZXJsYXlzIHRvIGFsd2F5cyBhcHBlYXIgb3ZlciB1c2VyIGNvbnRlbnQsIHNvIHNldCBhIGJhc2VsaW5lXG4vLyB2ZXJ5IGhpZ2ggei1pbmRleCBmb3IgdGhlIG92ZXJsYXkgY29udGFpbmVyLCB3aGljaCBpcyB3aGVyZSB3ZSBjcmVhdGUgdGhlIG5ld1xuLy8gc3RhY2tpbmcgY29udGV4dCBmb3IgYWxsIG92ZXJsYXlzLlxuJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyOiAxMDAwICFkZWZhdWx0O1xuJGNkay16LWluZGV4LW92ZXJsYXk6IDEwMDAgIWRlZmF1bHQ7XG4kY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDogMTAwMCAhZGVmYXVsdDtcblxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIG9mIHRoZSBiYWNrZHJvcHNcbiRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMikgIWRlZmF1bHQ7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gY2RrLW92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyO1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG4gIH1cblxuICAvLyBBIHNpbmdsZSBvdmVybGF5IHBhbmUuXG4gIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCBmb3IgdGhpcyBvbmUgdG8gc3RhcnQgb2ZmIGBhYnNvbHV0ZWAsXG4gICAgLy8gaW4gb3JkZXIgZm9yIHVzIHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCBjb3JyZWN0bHkuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrXG4gICAgICAvLyB0byBtYWtpbmcgaXQgb3BhcXVlIHVzaW5nIGBvcGFjaXR5YC4gTm90ZSB0aGF0IHdlIGNhbid0IHVzZSB0aGUgYGNkay1oaWdoLWNvbnRyYXN0YFxuICAgICAgLy8gbWl4aW4sIGJlY2F1c2Ugd2UgY2FuJ3Qgbm9ybWFsaXplIHRoZSBpbXBvcnQgcGF0aCB0byB0aGUgX2ExMXkuc2NzcyBib3RoIGZvciB0aGVcbiAgICAgIC8vIHNvdXJjZSBhbmQgd2hlbiB0aGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQuIFNlZSAjMTA5MDguXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLCAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cblxuQG1peGluIGNkay1hMTF5IHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbn1cblxuLy8vIEVtaXRzIHRoZSBtaXhpbidzIGNvbnRlbnQgbmVzdGVkIHVuZGVyIGAkc2VsZWN0b3ItY29udGV4dGAgaWYgYCRzZWxlY3Rvci1jb250ZXh0YFxuLy8vIGlzIG5vbi1lbXB0eS5cbi8vLyBAcGFyYW0gc2VsZWN0b3ItY29udGV4dCBUaGUgc2VsZWN0b3IgdW5kZXIgd2hpY2ggdG8gbmVzdCB0aGUgbWl4aW4ncyBjb250ZW50LlxuQG1peGluIF9jZGstb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgQGlmICgkc2VsZWN0b3ItY29udGV4dCA9PSAnJykge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBlbHNlIHtcbiAgICAjeyRzZWxlY3Rvci1jb250ZXh0fSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8vIEFwcGxpZXMgc3R5bGVzIGZvciB1c2VycyBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgYXBwbGllc1xuLy8vIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbi8vLyBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbi8vL1xuLy8vIEBwYXJhbSB0YXJnZXQgV2hpY2gga2luZCBvZiBoaWdoIGNvbnRyYXN0IHNldHRpbmcgdG8gdGFyZ2V0LiBEZWZhdWx0cyB0byBgYWN0aXZlYCwgY2FuIGJlXG4vLy8gICAgYHdoaXRlLW9uLWJsYWNrYCBvciBgYmxhY2stb24td2hpdGVgLlxuLy8vIEBwYXJhbSBlbmNhcHN1bGF0aW9uIFdoZXRoZXIgdG8gZW1pdCBzdHlsZXMgZm9yIHZpZXcgZW5jYXBzdWxhdGlvbi4gVmFsdWVzIGFyZTpcbi8vLyAgICAgKiBgb25gIC0gd29ya3MgZm9yIGBFbXVsYXRlZGAsIGBOYXRpdmVgLCBhbmQgYFNoYWRvd0RvbWBcbi8vLyAgICAgKiBgb2ZmYCAtIHdvcmtzIGZvciBgTm9uZWBcbi8vLyAgICAgKiBgYW55YCAtIHdvcmtzIGZvciBhbGwgZW5jYXBzdWxhdGlvbiBtb2RlcyBieSBlbWl0dGluZyB0aGUgQ1NTIHR3aWNlIChkZWZhdWx0KS5cbkBtaXhpbiBjZGstaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUsICRlbmNhcHN1bGF0aW9uOiAnYW55Jykge1xuICBAaWYgKCR0YXJnZXQgIT0gJ2FjdGl2ZScgYW5kICR0YXJnZXQgIT0gJ2JsYWNrLW9uLXdoaXRlJyBhbmQgJHRhcmdldCAhPSAnd2hpdGUtb24tYmxhY2snKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IHZhbHVlIFwiI3skdGFyZ2V0fVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcImFjdGl2ZVwiLCBcImJsYWNrLW9uLXdoaXRlXCIsIGFuZCBcIndoaXRlLW9uLWJsYWNrXCInO1xuICB9XG5cbiAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ2FueScpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgZW5jYXBzdWxhdGlvbiBcIiN7JGVuY2Fwc3VsYXRpb259XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwib25cIiwgXCJvZmZcIiwgYW5kIFwiYW55XCInO1xuICB9XG5cbiAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRleHQgaGFzIG11bHRpcGxlIHBhcnRzLCBzdWNoIGFzIGAuc2VjdGlvbiwgLnJlZ2lvbmAsIGp1c3QgZG9pbmdcbiAgLy8gYC5jZGstaGlnaC1jb250cmFzdC14eHggI3smfWAgd2lsbCBvbmx5IGFwcGx5IHRoZSBwYXJlbnQgc2VsZWN0b3IgdG8gdGhlIGZpcnN0IHBhcnQgb2YgdGhlXG4gIC8vIGNvbnRleHQuIFdlIGFkZHJlc3MgdGhpcyBieSBuZXN0aW5nIHRoZSBzZWxlY3RvciBjb250ZXh0IHVuZGVyIC5jZGstaGlnaC1jb250cmFzdC5cbiAgQGF0LXJvb3Qge1xuICAgICRzZWxlY3Rvci1jb250ZXh0OiAjeyZ9O1xuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nKSB7XG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtI3skdGFyZ2V0fSB7XG4gICAgICAgIEBpbmNsdWRlIF9jZGstb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicpIHtcbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC0jeyR0YXJnZXR9IDpob3N0IHtcbiAgICAgICAgQGluY2x1ZGUgX2Nkay1vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgZW5hYmxlIG1vbml0b3JpbmcgYXV0b2ZpbGwgc3RhdGUgb2YgdGV4dCBmaWVsZHMuXG5AbWl4aW4gY2RrLXRleHQtZmllbGQge1xuICAvLyBLZXlmcmFtZXMgdGhhdCBhcHBseSBubyBzdHlsZXMsIGJ1dCBhbGxvdyB1cyB0byBtb25pdG9yIHdoZW4gYW4gdGV4dCBmaWVsZCBiZWNvbWVzIGF1dG9maWxsZWRcbiAgLy8gYnkgd2F0Y2hpbmcgZm9yIHRoZSBhbmltYXRpb24gZXZlbnRzIHRoYXQgYXJlIGZpcmVkIHdoZW4gdGhleSBzdGFydC4gTm90ZTogdGhlIC8qISovIGNvbW1lbnQgaXNcbiAgLy8gbmVlZGVkIHRvIHByZXZlbnQgTGliU2FzcyBmcm9tIHN0cmlwcGluZyB0aGUga2V5ZnJhbWVzIG91dC5cbiAgLy8gQmFzZWQgb246IGh0dHBzOi8vbWVkaXVtLmNvbS9AYnJ1bm4vZGV0ZWN0aW5nLWF1dG9maWxsZWQtZmllbGRzLWluLWphdmFzY3JpcHQtYWVkNTk4ZDI1ZGE3XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgey8qISovfVxuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7LyohKi99XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQ7XG4gIH1cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQ7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gYXV0b3NpemluZyB0ZXh0YXJlYXMsIGJlY2F1c2Ugd2hhdGV2ZXIgaGVpZ2h0XG4gIC8vIHRoZSB1c2VyIHJlc2l6ZWQgdG8gd2lsbCBiZSBvdmVyd3JpdHRlbiBvbmNlIHRoZXkgc3RhcnQgdHlwaW5nIGFnYWluLlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4gIC8vIFRoaXMgY2xhc3MgaXMgdGVtcG9yYXJpbHkgYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgd2hlbiBpdCBpcyBiZWluZyBtZWFzdXJlZC4gSXQgaXMgaW1tZWRpYXRlbHlcbiAgLy8gcmVtb3ZlZCB3aGVuIG1lYXN1cmluZyBpcyBjb21wbGV0ZS4gV2UgdXNlIGAhaW1wb3J0YW50YCBydWxlcyBoZXJlIHRvIG1ha2Ugc3VyZSB1c2VyLXNwZWNpZmllZFxuICAvLyBydWxlcyBkbyBub3QgaW50ZXJmZXJlIHdpdGggdGhlIG1lYXN1cmVtZW50LlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgLy8gSGF2aW5nIDJweCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nIHNlZW1zIHRvIGZpeCBhIGJ1ZyB3aGVyZSBDaHJvbWUgZ2V0cyBhbiBpbmNvcnJlY3RcbiAgICAvLyBtZWFzdXJlbWVudC4gV2UganVzdCBoYXZlIHRvIGFjY291bnQgZm9yIGl0IGxhdGVyIGFuZCBzdWJ0cmFjdCBpdCBvZmYgdGhlIGZpbmFsIHJlc3VsdC5cbiAgICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gVXNlZCB0byBnZW5lcmF0ZSBVSURzIGZvciBrZXlmcmFtZXMgdXNlZCB0byBjaGFuZ2UgdGhlIHRleHQgZmllbGQgYXV0b2ZpbGwgc3R5bGVzLlxuJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OiAwO1xuXG4vLyBNaXhpbiB1c2VkIHRvIGFwcGx5IGN1c3RvbSBiYWNrZ3JvdW5kIGFuZCBmb3JlZ3JvdW5kIGNvbG9ycyB0byBhbiBhdXRvZmlsbGVkIHRleHQgZmllbGQuXG4vLyBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc4MTU0OS9cbi8vIHJlbW92aW5nLWlucHV0LWJhY2tncm91bmQtY29sb3VyLWZvci1jaHJvbWUtYXV0b2NvbXBsZXRlI2Fuc3dlci0zNzQzMjI2MFxuQG1peGluIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yKCRiYWNrZ3JvdW5kLCAkZm9yZWdyb3VuZDonJykge1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSB7XG4gICAgdG8ge1xuICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICBAaWYgJGZvcmVncm91bmQgIT0gJycgeyBjb2xvcjogJGZvcmVncm91bmQ7IH1cbiAgICB9XG4gIH1cblxuICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH07XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxuXG4gICYuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9O1xuICB9XG5cbiAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OlxuICAgICAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50ICsgMSAhZ2xvYmFsO1xufVxuXG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgbWF0ZXJpYWwgZGVzaWduIHRyZWF0bWVudHMgdG8gYW55IGVsZW1lbnQuXG4vLyBNZWRpYSBxdWVyaWVzXG4vLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBDaGFuZ2UgJG1hdC14c21hbGwgYW5kICRtYXQtc21hbGwgdXNhZ2VzIHRvIHJlbHkgb24gQnJlYWtwb2ludE9ic2VydmVyLFxuJG1hdC14c21hbGw6ICdtYXgtd2lkdGg6IDU5OXB4JztcbiRtYXQtc21hbGw6ICdtYXgtd2lkdGg6IDk1OXB4JztcblxuLy8gVE9ETzogUmV2aXNpdCBhbGwgei1pbmRpY2VzIGJlZm9yZSBiZXRhXG4vLyB6LWluZGV4IG1hc3RlciBsaXN0XG5cbiR6LWluZGV4LWZhYjogMjAgIWRlZmF1bHQ7XG4kei1pbmRleC1kcmF3ZXI6IDEwMCAhZGVmYXVsdDtcblxuLy8gR2xvYmFsIGNvbnN0YW50c1xuJHBpOiAzLjE0MTU5MjY1O1xuXG4vLyBQYWRkaW5nIGJldHdlZW4gaW5wdXQgdG9nZ2xlcyBhbmQgdGhlaXIgbGFiZWxzXG4kbWF0LXRvZ2dsZS1wYWRkaW5nOiA4cHggIWRlZmF1bHQ7XG4vLyBXaWR0aCBhbmQgaGVpZ2h0IG9mIGlucHV0IHRvZ2dsZXNcbiRtYXQtdG9nZ2xlLXNpemU6IDIwcHggIWRlZmF1bHQ7XG5cbi8vIEVhc2luZyBDdXJ2ZXNcbi8vIFRPRE8oamVsYm91cm4pOiBhbGwgb2YgdGhlc2UgbmVlZCB0byBiZSByZXZpc2l0ZWRcblxuLy8gVGhlIGRlZmF1bHQgYW5pbWF0aW9uIGN1cnZlcyB1c2VkIGJ5IG1hdGVyaWFsIGRlc2lnbi5cbiRtYXQtbGluZWFyLW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMC4xKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LWxpbmVhci1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpICFkZWZhdWx0O1xuXG4kZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb246IGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0OiBhbGwgJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLWR1cmF0aW9uOiAzMDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMikgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbjogYWxsICRzd2lmdC1lYXNlLWluLWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uOiA1MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb246ICRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbiAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dDogYWxsICRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtbGluZWFyLWR1cmF0aW9uOiA4MG1zICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb246IGxpbmVhciAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXI6IGFsbCAkc3dpZnQtbGluZWFyLWR1cmF0aW9uICRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG5cblxuLy8gQSBjb2xsZWN0aW9uIG9mIG1peGlucyBhbmQgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBlbGV2YXRpb24gdG8gYSBtYXRlcmlhbFxuLy8gZWxlbWVudC5cbi8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vZW52aXJvbm1lbnQvZWxldmF0aW9uLmh0bWxcbi8vIEV4YW1wbGVzOlxuLy9cbi8vXG4vLyAubWF0LWZvbyB7XG4vLyAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDIpO1xuLy9cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDgpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gPGRpdiBpZD1cImV4dGVybmFsLWNhcmRcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejJcIj48cD5Tb21lIGNvbnRlbnQ8L3A+PC9kaXY+XG4vL1xuLy8gRm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoZSBkZXNpZ24gYmVoaW5kIGhvdyBlbGV2YXRpb24gaXMgaW1wbGVtZW50ZWQsIHNlZSB0aGUgZGVzaWduIGRvYyBhdFxuLy8gaHR0cHM6Ly9nb28uZ2wvS3EwazlaLlxuXG4vLyBDb2xvcnMgZm9yIHVtYnJhLCBwZW51bWJyYSwgYW5kIGFtYmllbnQgc2hhZG93cy4gQXMgZGVzY3JpYmVkIGluIHRoZSBkZXNpZ24gZG9jLCBlYWNoIGVsZXZhdGlvblxuLy8gbGV2ZWwgaXMgY3JlYXRlZCB1c2luZyBhIHNldCBvZiAzIHNoYWRvdyB2YWx1ZXMsIG9uZSBmb3IgdW1icmEgKHRoZSBzaGFkb3cgcmVwcmVzZW50aW5nIHRoZVxuLy8gc3BhY2UgY29tcGxldGVseSBvYnNjdXJlZCBieSBhbiBvYmplY3QgcmVsYXRpdmUgdG8gaXRzIGxpZ2h0IHNvdXJjZSksIG9uZSBmb3IgcGVudW1icmEgKHRoZVxuLy8gc3BhY2UgcGFydGlhbGx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCksIGFuZCBvbmUgZm9yIGFtYmllbnQgKHRoZSBzcGFjZSB3aGljaCBjb250YWlucyB0aGUgb2JqZWN0XG4vLyBpdHNlbGYpLiBGb3IgYSBmdXJ0aGVyIGV4cGxhbmF0aW9uIG9mIHRoZXNlIHRlcm1zIGFuZCB0aGVpciBtZWFuaW5ncywgc2VlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbWJyYSxfcGVudW1icmFfYW5kX2FudHVtYnJhLlxuXG4vLyBNYXBzIGZvciB0aGUgZGlmZmVyZW50IHNoYWRvdyBzZXRzIGFuZCB0aGVpciB2YWx1ZXMgd2l0aGluIGVhY2ggei1zcGFjZS4gVGhlc2UgdmFsdWVzIHdlcmVcbi8vIGNyZWF0ZWQgYnkgdGFraW5nIGEgZmV3IHJlZmVyZW5jZSBzaGFkb3cgc2V0cyBjcmVhdGVkIGJ5IEdvb2dsZSdzIERlc2lnbmVycyBhbmQgaW50ZXJwb2xhdGluZ1xuLy8gYWxsIG9mIHRoZSB2YWx1ZXMgYmV0d2VlbiB0aGVtLlxuXG5AZnVuY3Rpb24gX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAxcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMnB4IDJweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDRweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggNXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCA2cHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA3cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA4cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA5cHggMTJweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggMTBweCAxNHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCAxMXB4IDE1cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDEycHggMTdweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggMTNweCAxOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCAxNHB4IDIxcHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDE1cHggMjJweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggMTZweCAyNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCAxN3B4IDI2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDE4cHggMjhweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggMTlweCAyOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAyMHB4IDMxcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDIxcHggMzNweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMjJweCAzNXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAyM3B4IDM2cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDI0cHggMzhweCAzcHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggM3B4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDFweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggMXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAxcHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAxcHggMTRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAxcHggMThweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCAycHggMTZweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCAzcHggMTRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCAzcHggMTZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNHB4IDE4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDRweCAyMHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA1cHggMjJweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggNXB4IDI0cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDVweCAyNnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA2cHggMjhweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggNnB4IDMwcHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDZweCAzMnB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA3cHggMzRweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggN3B4IDM2cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDhweCAzOHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCA4cHggNDBweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggOHB4IDQycHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDlweCA0NHB4IDhweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCA5cHggNDZweCA4cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZHVyYXRpb24gdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb246IDI4MG1zICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBlYXNpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1jb2xvcjogYmxhY2sgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IG9wYWNpdHkgc2NhbGluZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1vcGFjaXR5OiAxICFkZWZhdWx0O1xuXG4vLyBQcmVmaXggZm9yIGVsZXZhdGlvbi1yZWxhdGVkIHNlbGVjdG9ycy5cbiRfbWF0LWVsZXZhdGlvbi1wcmVmaXg6ICdtYXQtZWxldmF0aW9uLXonO1xuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyB0byBhbiBlbGVtZW50IHRvIGdpdmUgaXQgdGhlIGVsZXZhdGlvbiBzcGVjaWZpZWQgYnkgJHpWYWx1ZS5cbi8vIFRoZSAkelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNC5cbkBtaXhpbiBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gIEBpZiB0eXBlLW9mKCR6VmFsdWUpICE9IG51bWJlciBvciBub3QgdW5pdGxlc3MoJHpWYWx1ZSkge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGEgdW5pdGxlc3MgbnVtYmVyJztcbiAgfVxuICBAaWYgJHpWYWx1ZSA8IDAgb3IgJHpWYWx1ZSA+IDI0IHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0JztcbiAgfVxuXG4gIGJveC1zaGFkb3c6ICN7bWFwLWdldChfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfTtcbn1cblxuQG1peGluIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBBcHBsaWVzIHRoZSBlbGV2YXRpb24gdG8gYW4gZWxlbWVudCBpbiBhIG1hbm5lciB0aGF0IGFsbG93c1xuLy8gY29uc3VtZXJzIHRvIG92ZXJyaWRlIGl0IHZpYSB0aGUgTWF0ZXJpYWwgZWxldmF0aW9uIGNsYXNzZXMuXG5AbWl4aW4gbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbihcbiAgICAkelZhbHVlLFxuICAgICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsXG4gICAgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3IsICRvcGFjaXR5KTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICBAcmV0dXJuIGJveC1zaGFkb3cgI3skZHVyYXRpb259ICN7JGVhc2luZ307XG59XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIG5lZWRlZCB0byBoYXZlIGFuIGVsZW1lbnQgdHJhbnNpdGlvbiBiZXR3ZWVuIGVsZXZhdGlvbnMuXG4vLyBUaGlzIG1peGluIHNob3VsZCBiZSBhcHBsaWVkIHRvIGVsZW1lbnRzIHdob3NlIGVsZXZhdGlvbiB2YWx1ZXMgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZWlyXG4vLyBjb250ZXh0IChlLmcuIHdoZW4gYWN0aXZlIG9yIGRpc2FibGVkKS5cbi8vXG4vLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBCb3RoIHRoaXMgbWl4aW4gYW5kIHRoZSBhYm92ZSBmdW5jdGlvbiB1c2UgZGVmYXVsdCBwYXJhbWV0ZXJzIHNvIHRoZXkgY2FuXG4vLyBiZSB1c2VkIGluIHRoZSBzYW1lIHdheSBieSBjbGllbnRzLlxuQG1peGluIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbihcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG5cbi8vIENvbG9yIHBhbGV0dGVzIGZyb20gdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL1xuLy9cbi8vIENvbnRyYXN0IGNvbG9ycyBhcmUgaGFyZC1jb2RlZCBiZWNhdXNlIGl0IGlzIHRvbyBkaWZmaWN1bHQgKHByb2JhYmx5IGltcG9zc2libGUpIHRvXG4vLyBjYWxjdWxhdGUgdGhlbS4gVGhlc2UgY29udHJhc3QgY29sb3JzIGFyZSBwdWxsZWQgZnJvbSB0aGUgcHVibGljIE1hdGVyaWFsIERlc2lnbiBzcGVjIHN3YXRjaGVzLlxuLy8gV2hpbGUgdGhlIGNvbnRyYXN0IGNvbG9ycyBpbiB0aGUgc3BlYyBhcmUgbm90IHByZXNjcmlwdGl2ZSwgd2UgdXNlIHRoZW0gZm9yIGNvbnZlbmllbmNlLlxuXG5cbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGRhcmstcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTg3LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkbGlnaHQtcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTg3LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stMTItb3BhY2l0eTogcmdiYShibGFjaywgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtMTItb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay02LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMDYpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTYtb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4wNik7XG5cbiRkYXJrLXByaW1hcnktdGV4dDogcmdiYShibGFjaywgMC44Nyk7XG4kZGFyay1zZWNvbmRhcnktdGV4dDogcmdiYShibGFjaywgMC41NCk7XG4kZGFyay1kaXNhYmxlZC10ZXh0OiByZ2JhKGJsYWNrLCAwLjM4KTtcbiRkYXJrLWRpdmlkZXJzOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRkYXJrLWZvY3VzZWQ6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGxpZ2h0LXByaW1hcnktdGV4dDogd2hpdGU7XG4kbGlnaHQtc2Vjb25kYXJ5LXRleHQ6IHJnYmEod2hpdGUsIDAuNyk7XG4kbGlnaHQtZGlzYWJsZWQtdGV4dDogcmdiYSh3aGl0ZSwgMC41KTtcbiRsaWdodC1kaXZpZGVyczogcmdiYSh3aGl0ZSwgMC4xMik7XG4kbGlnaHQtZm9jdXNlZDogcmdiYSh3aGl0ZSwgMC4xMik7XG5cbiRtYXQtcmVkOiAoXG4gIDUwOiAjZmZlYmVlLFxuICAxMDA6ICNmZmNkZDIsXG4gIDIwMDogI2VmOWE5YSxcbiAgMzAwOiAjZTU3MzczLFxuICA0MDA6ICNlZjUzNTAsXG4gIDUwMDogI2Y0NDMzNixcbiAgNjAwOiAjZTUzOTM1LFxuICA3MDA6ICNkMzJmMmYsXG4gIDgwMDogI2M2MjgyOCxcbiAgOTAwOiAjYjcxYzFjLFxuICBBMTAwOiAjZmY4YTgwLFxuICBBMjAwOiAjZmY1MjUyLFxuICBBNDAwOiAjZmYxNzQ0LFxuICBBNzAwOiAjZDUwMDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcGluazogKFxuICA1MDogI2ZjZTRlYyxcbiAgMTAwOiAjZjhiYmQwLFxuICAyMDA6ICNmNDhmYjEsXG4gIDMwMDogI2YwNjI5MixcbiAgNDAwOiAjZWM0MDdhLFxuICA1MDA6ICNlOTFlNjMsXG4gIDYwMDogI2Q4MWI2MCxcbiAgNzAwOiAjYzIxODViLFxuICA4MDA6ICNhZDE0NTcsXG4gIDkwMDogIzg4MGU0ZixcbiAgQTEwMDogI2ZmODBhYixcbiAgQTIwMDogI2ZmNDA4MSxcbiAgQTQwMDogI2Y1MDA1NyxcbiAgQTcwMDogI2M1MTE2MixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXB1cnBsZTogKFxuICA1MDogI2YzZTVmNSxcbiAgMTAwOiAjZTFiZWU3LFxuICAyMDA6ICNjZTkzZDgsXG4gIDMwMDogI2JhNjhjOCxcbiAgNDAwOiAjYWI0N2JjLFxuICA1MDA6ICM5YzI3YjAsXG4gIDYwMDogIzhlMjRhYSxcbiAgNzAwOiAjN2IxZmEyLFxuICA4MDA6ICM2YTFiOWEsXG4gIDkwMDogIzRhMTQ4YyxcbiAgQTEwMDogI2VhODBmYyxcbiAgQTIwMDogI2UwNDBmYixcbiAgQTQwMDogI2Q1MDBmOSxcbiAgQTcwMDogI2FhMDBmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZGVlcC1wdXJwbGU6IChcbiAgNTA6ICNlZGU3ZjYsXG4gIDEwMDogI2QxYzRlOSxcbiAgMjAwOiAjYjM5ZGRiLFxuICAzMDA6ICM5NTc1Y2QsXG4gIDQwMDogIzdlNTdjMixcbiAgNTAwOiAjNjczYWI3LFxuICA2MDA6ICM1ZTM1YjEsXG4gIDcwMDogIzUxMmRhOCxcbiAgODAwOiAjNDUyN2EwLFxuICA5MDA6ICMzMTFiOTIsXG4gIEExMDA6ICNiMzg4ZmYsXG4gIEEyMDA6ICM3YzRkZmYsXG4gIEE0MDA6ICM2NTFmZmYsXG4gIEE3MDA6ICM2MjAwZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWluZGlnbzogKFxuICA1MDogI2U4ZWFmNixcbiAgMTAwOiAjYzVjYWU5LFxuICAyMDA6ICM5ZmE4ZGEsXG4gIDMwMDogIzc5ODZjYixcbiAgNDAwOiAjNWM2YmMwLFxuICA1MDA6ICMzZjUxYjUsXG4gIDYwMDogIzM5NDlhYixcbiAgNzAwOiAjMzAzZjlmLFxuICA4MDA6ICMyODM1OTMsXG4gIDkwMDogIzFhMjM3ZSxcbiAgQTEwMDogIzhjOWVmZixcbiAgQTIwMDogIzUzNmRmZSxcbiAgQTQwMDogIzNkNWFmZSxcbiAgQTcwMDogIzMwNGZmZSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYmx1ZTogKFxuICA1MDogI2UzZjJmZCxcbiAgMTAwOiAjYmJkZWZiLFxuICAyMDA6ICM5MGNhZjksXG4gIDMwMDogIzY0YjVmNixcbiAgNDAwOiAjNDJhNWY1LFxuICA1MDA6ICMyMTk2ZjMsXG4gIDYwMDogIzFlODhlNSxcbiAgNzAwOiAjMTk3NmQyLFxuICA4MDA6ICMxNTY1YzAsXG4gIDkwMDogIzBkNDdhMSxcbiAgQTEwMDogIzgyYjFmZixcbiAgQTIwMDogIzQ0OGFmZixcbiAgQTQwMDogIzI5NzlmZixcbiAgQTcwMDogIzI5NjJmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpZ2h0LWJsdWU6IChcbiAgNTA6ICNlMWY1ZmUsXG4gIDEwMDogI2IzZTVmYyxcbiAgMjAwOiAjODFkNGZhLFxuICAzMDA6ICM0ZmMzZjcsXG4gIDQwMDogIzI5YjZmNixcbiAgNTAwOiAjMDNhOWY0LFxuICA2MDA6ICMwMzliZTUsXG4gIDcwMDogIzAyODhkMSxcbiAgODAwOiAjMDI3N2JkLFxuICA5MDA6ICMwMTU3OWIsXG4gIEExMDA6ICM4MGQ4ZmYsXG4gIEEyMDA6ICM0MGM0ZmYsXG4gIEE0MDA6ICMwMGIwZmYsXG4gIEE3MDA6ICMwMDkxZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtY3lhbjogKFxuICA1MDogI2UwZjdmYSxcbiAgMTAwOiAjYjJlYmYyLFxuICAyMDA6ICM4MGRlZWEsXG4gIDMwMDogIzRkZDBlMSxcbiAgNDAwOiAjMjZjNmRhLFxuICA1MDA6ICMwMGJjZDQsXG4gIDYwMDogIzAwYWNjMSxcbiAgNzAwOiAjMDA5N2E3LFxuICA4MDA6ICMwMDgzOGYsXG4gIDkwMDogIzAwNjA2NCxcbiAgQTEwMDogIzg0ZmZmZixcbiAgQTIwMDogIzE4ZmZmZixcbiAgQTQwMDogIzAwZTVmZixcbiAgQTcwMDogIzAwYjhkNCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXRlYWw6IChcbiAgNTA6ICNlMGYyZjEsXG4gIDEwMDogI2IyZGZkYixcbiAgMjAwOiAjODBjYmM0LFxuICAzMDA6ICM0ZGI2YWMsXG4gIDQwMDogIzI2YTY5YSxcbiAgNTAwOiAjMDA5Njg4LFxuICA2MDA6ICMwMDg5N2IsXG4gIDcwMDogIzAwNzk2YixcbiAgODAwOiAjMDA2OTVjLFxuICA5MDA6ICMwMDRkNDAsXG4gIEExMDA6ICNhN2ZmZWIsXG4gIEEyMDA6ICM2NGZmZGEsXG4gIEE0MDA6ICMxZGU5YjYsXG4gIEE3MDA6ICMwMGJmYTUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ncmVlbjogKFxuICA1MDogI2U4ZjVlOSxcbiAgMTAwOiAjYzhlNmM5LFxuICAyMDA6ICNhNWQ2YTcsXG4gIDMwMDogIzgxYzc4NCxcbiAgNDAwOiAjNjZiYjZhLFxuICA1MDA6ICM0Y2FmNTAsXG4gIDYwMDogIzQzYTA0NyxcbiAgNzAwOiAjMzg4ZTNjLFxuICA4MDA6ICMyZTdkMzIsXG4gIDkwMDogIzFiNWUyMCxcbiAgQTEwMDogI2I5ZjZjYSxcbiAgQTIwMDogIzY5ZjBhZSxcbiAgQTQwMDogIzAwZTY3NixcbiAgQTcwMDogIzAwYzg1MyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtZ3JlZW46IChcbiAgNTA6ICNmMWY4ZTksXG4gIDEwMDogI2RjZWRjOCxcbiAgMjAwOiAjYzVlMWE1LFxuICAzMDA6ICNhZWQ1ODEsXG4gIDQwMDogIzljY2M2NSxcbiAgNTAwOiAjOGJjMzRhLFxuICA2MDA6ICM3Y2IzNDIsXG4gIDcwMDogIzY4OWYzOCxcbiAgODAwOiAjNTU4YjJmLFxuICA5MDA6ICMzMzY5MWUsXG4gIEExMDA6ICNjY2ZmOTAsXG4gIEEyMDA6ICNiMmZmNTksXG4gIEE0MDA6ICM3NmZmMDMsXG4gIEE3MDA6ICM2NGRkMTcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGltZTogKFxuICA1MDogI2Y5ZmJlNyxcbiAgMTAwOiAjZjBmNGMzLFxuICAyMDA6ICNlNmVlOWMsXG4gIDMwMDogI2RjZTc3NSxcbiAgNDAwOiAjZDRlMTU3LFxuICA1MDA6ICNjZGRjMzksXG4gIDYwMDogI2MwY2EzMyxcbiAgNzAwOiAjYWZiNDJiLFxuICA4MDA6ICM5ZTlkMjQsXG4gIDkwMDogIzgyNzcxNyxcbiAgQTEwMDogI2Y0ZmY4MSxcbiAgQTIwMDogI2VlZmY0MSxcbiAgQTQwMDogI2M2ZmYwMCxcbiAgQTcwMDogI2FlZWEwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQteWVsbG93OiAoXG4gIDUwOiAjZmZmZGU3LFxuICAxMDA6ICNmZmY5YzQsXG4gIDIwMDogI2ZmZjU5ZCxcbiAgMzAwOiAjZmZmMTc2LFxuICA0MDA6ICNmZmVlNTgsXG4gIDUwMDogI2ZmZWIzYixcbiAgNjAwOiAjZmRkODM1LFxuICA3MDA6ICNmYmMwMmQsXG4gIDgwMDogI2Y5YTgyNSxcbiAgOTAwOiAjZjU3ZjE3LFxuICBBMTAwOiAjZmZmZjhkLFxuICBBMjAwOiAjZmZmZjAwLFxuICBBNDAwOiAjZmZlYTAwLFxuICBBNzAwOiAjZmZkNjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWFtYmVyOiAoXG4gIDUwOiAjZmZmOGUxLFxuICAxMDA6ICNmZmVjYjMsXG4gIDIwMDogI2ZmZTA4MixcbiAgMzAwOiAjZmZkNTRmLFxuICA0MDA6ICNmZmNhMjgsXG4gIDUwMDogI2ZmYzEwNyxcbiAgNjAwOiAjZmZiMzAwLFxuICA3MDA6ICNmZmEwMDAsXG4gIDgwMDogI2ZmOGYwMCxcbiAgOTAwOiAjZmY2ZjAwLFxuICBBMTAwOiAjZmZlNTdmLFxuICBBMjAwOiAjZmZkNzQwLFxuICBBNDAwOiAjZmZjNDAwLFxuICBBNzAwOiAjZmZhYjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LW9yYW5nZTogKFxuICA1MDogI2ZmZjNlMCxcbiAgMTAwOiAjZmZlMGIyLFxuICAyMDA6ICNmZmNjODAsXG4gIDMwMDogI2ZmYjc0ZCxcbiAgNDAwOiAjZmZhNzI2LFxuICA1MDA6ICNmZjk4MDAsXG4gIDYwMDogI2ZiOGMwMCxcbiAgNzAwOiAjZjU3YzAwLFxuICA4MDA6ICNlZjZjMDAsXG4gIDkwMDogI2U2NTEwMCxcbiAgQTEwMDogI2ZmZDE4MCxcbiAgQTIwMDogI2ZmYWI0MCxcbiAgQTQwMDogI2ZmOTEwMCxcbiAgQTcwMDogI2ZmNmQwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogYmxhY2ssXG4gIClcbik7XG5cbiRtYXQtZGVlcC1vcmFuZ2U6IChcbiAgNTA6ICNmYmU5ZTcsXG4gIDEwMDogI2ZmY2NiYyxcbiAgMjAwOiAjZmZhYjkxLFxuICAzMDA6ICNmZjhhNjUsXG4gIDQwMDogI2ZmNzA0MyxcbiAgNTAwOiAjZmY1NzIyLFxuICA2MDA6ICNmNDUxMWUsXG4gIDcwMDogI2U2NGExOSxcbiAgODAwOiAjZDg0MzE1LFxuICA5MDA6ICNiZjM2MGMsXG4gIEExMDA6ICNmZjllODAsXG4gIEEyMDA6ICNmZjZlNDAsXG4gIEE0MDA6ICNmZjNkMDAsXG4gIEE3MDA6ICNkZDJjMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWJyb3duOiAoXG4gIDUwOiAjZWZlYmU5LFxuICAxMDA6ICNkN2NjYzgsXG4gIDIwMDogI2JjYWFhNCxcbiAgMzAwOiAjYTE4ODdmLFxuICA0MDA6ICM4ZDZlNjMsXG4gIDUwMDogIzc5NTU0OCxcbiAgNjAwOiAjNmQ0YzQxLFxuICA3MDA6ICM1ZDQwMzcsXG4gIDgwMDogIzRlMzQyZSxcbiAgOTAwOiAjM2UyNzIzLFxuICBBMTAwOiAjZDdjY2M4LFxuICBBMjAwOiAjYmNhYWE0LFxuICBBNDAwOiAjOGQ2ZTYzLFxuICBBNzAwOiAjNWQ0MDM3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZXk6IChcbiAgNTA6ICNmYWZhZmEsXG4gIDEwMDogI2Y1ZjVmNSxcbiAgMjAwOiAjZWVlZWVlLFxuICAzMDA6ICNlMGUwZTAsXG4gIDQwMDogI2JkYmRiZCxcbiAgNTAwOiAjOWU5ZTllLFxuICA2MDA6ICM3NTc1NzUsXG4gIDcwMDogIzYxNjE2MSxcbiAgODAwOiAjNDI0MjQyLFxuICA5MDA6ICMyMTIxMjEsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNlZWVlZWUsXG4gIEE0MDA6ICNiZGJkYmQsXG4gIEE3MDA6ICM2MTYxNjEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRtYXQtZ3JheTogJG1hdC1ncmV5O1xuXG4kbWF0LWJsdWUtZ3JleTogKFxuICA1MDogI2VjZWZmMSxcbiAgMTAwOiAjY2ZkOGRjLFxuICAyMDA6ICNiMGJlYzUsXG4gIDMwMDogIzkwYTRhZSxcbiAgNDAwOiAjNzg5MDljLFxuICA1MDA6ICM2MDdkOGIsXG4gIDYwMDogIzU0NmU3YSxcbiAgNzAwOiAjNDU1YTY0LFxuICA4MDA6ICMzNzQ3NGYsXG4gIDkwMDogIzI2MzIzOCxcbiAgQTEwMDogI2NmZDhkYyxcbiAgQTIwMDogI2IwYmVjNSxcbiAgQTQwMDogIzc4OTA5YyxcbiAgQTcwMDogIzQ1NWE2NCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ibHVlLWdyYXk6ICRtYXQtYmx1ZS1ncmV5O1xuXG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgMTAwKSxcbiAgYmFja2dyb3VuZDogbWFwX2dldCgkbWF0LWdyZXksIDUwKSxcbiAgaG92ZXI6ICAgICAgcmdiYShibGFjaywgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIHdoaXRlLFxuICBkaWFsb2c6ICAgICB3aGl0ZSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKGJsYWNrLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogd2hpdGUsXG4gIGZvY3VzZWQtYnV0dG9uOiAkZGFyay1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA0MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMjAwKSxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB0b29sdGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNzAwKSxcbik7XG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogKFxuICBzdGF0dXMtYmFyOiBibGFjayxcbiAgYXBwLWJhcjogICAgbWFwX2dldCgkbWF0LWdyZXksIDkwMCksXG4gIGJhY2tncm91bmQ6ICMzMDMwMzAsXG4gIGhvdmVyOiAgICAgIHJnYmEod2hpdGUsIDAuMDQpLCAvLyBUT0RPKGthcmEpOiBjaGVjayBzdHlsZSB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWFxuICBjYXJkOiAgICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlhbG9nOiAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbjogcmdiYSh3aGl0ZSwgMC4xMiksXG4gIHJhaXNlZC1idXR0b246IG1hcC1nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBmb2N1c2VkLWJ1dHRvbjogJGxpZ2h0LWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDkwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IGJsYWNrLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCA3MDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogYmxhY2ssXG4gIHRvb2x0aXA6IG1hcF9nZXQoJG1hdC1ncmV5LCA3MDApLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIGJsYWNrLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkZGFyay1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICBpY29uczogICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIHRleHQ6ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYShibGFjaywgMC4yNiksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKGJsYWNrLCAwLjM4KSxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGRpdmlkZXI6ICAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEod2hpdGUsIDAuMyksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkbGlnaHQtc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICB3aGl0ZSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHdoaXRlLFxuICB0ZXh0OiAgICAgICAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1taW46ICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEod2hpdGUsIDAuMyksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKHdoaXRlLCAwLjMpLFxuKTtcblxuXG5cbi8vIEZvciBhIGdpdmVuIGh1ZSBpbiBhIHBhbGV0dGUsIHJldHVybiB0aGUgY29udHJhc3QgY29sb3IgZnJvbSB0aGUgbWFwIG9mIGNvbnRyYXN0IHBhbGV0dGVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkaHVlXG5AZnVuY3Rpb24gbWF0LWNvbnRyYXN0KCRwYWxldHRlLCAkaHVlKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLCBjb250cmFzdCksICRodWUpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBtYXAgb2YgaHVlcyB0byBjb2xvcnMgZm9yIGEgdGhlbWUuIFRoaXMgaXMgdXNlZCB0byBkZWZpbmUgYSB0aGVtZSBwYWxldHRlIGluIHRlcm1zXG4vLyBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIGh1ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRwcmltYXJ5XG4vLyBAcGFyYW0gJGxpZ2h0ZXJcbkBmdW5jdGlvbiBtYXQtcGFsZXR0ZSgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdDogNTAwLCAkbGlnaHRlcjogMTAwLCAkZGFya2VyOiA3MDAsICR0ZXh0OiAkZGVmYXVsdCkge1xuICAkcmVzdWx0OiBtYXBfbWVyZ2UoJGJhc2UtcGFsZXR0ZSwgKFxuICAgIGRlZmF1bHQ6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKSxcbiAgICB0ZXh0OiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICR0ZXh0KSxcblxuICAgIGRlZmF1bHQtY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKVxuICApKTtcblxuICAvLyBGb3IgZWFjaCBodWUgaW4gdGhlIHBhbGV0dGUsIGFkZCBhIFwiLWNvbnRyYXN0XCIgY29sb3IgdG8gdGhlIG1hcC5cbiAgQGVhY2ggJGh1ZSwgJGNvbG9yIGluICRiYXNlLXBhbGV0dGUge1xuICAgICRyZXN1bHQ6IG1hcF9tZXJnZSgkcmVzdWx0LCAoXG4gICAgICAnI3skaHVlfS1jb250cmFzdCc6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkaHVlKVxuICAgICkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG5cbi8vIEdldHMgYSBjb2xvciBmcm9tIGEgdGhlbWUgcGFsZXR0ZSAodGhlIG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBUaGUgaHVlIGNhbiBiZSBvbmUgb2YgdGhlIHN0YW5kYXJkIHZhbHVlcyAoNTAwLCBBNDAwLCBldGMuKSwgb25lIG9mIHRoZSB0aHJlZSBwcmVjb25maWd1cmVkXG4vLyBodWVzIChkZWZhdWx0LCBsaWdodGVyLCBkYXJrZXIpLCBvciBhbnkgb2YgdGhlIGFmb3JlbWVudGlvbmVkIHByZWZpeGVkIHdpdGggXCItY29udHJhc3RcIi5cbi8vXG4vLyBAcGFyYW0gJGNvbG9yLW1hcCBUaGUgdGhlbWUgcGFsZXR0ZSAob3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIEBwYXJhbSAkaHVlIFRoZSBodWUgZnJvbSB0aGUgcGFsZXR0ZSB0byB1c2UuIElmIHRoaXMgaXMgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIGl0IHdpbGxcbi8vICAgICBiZSB0cmVhdGVkIGFzIG9wYWNpdHkuXG4vLyBAcGFyYW0gJG9wYWNpdHkgVGhlIGFscGhhIGNoYW5uZWwgdmFsdWUgZm9yIHRoZSBjb2xvci5cbkBmdW5jdGlvbiBtYXQtY29sb3IoJHBhbGV0dGUsICRodWU6IGRlZmF1bHQsICRvcGFjaXR5OiBudWxsKSB7XG4gIC8vIElmIGh1ZUtleSBpcyBhIG51bWJlciBiZXR3ZWVuIHplcm8gYW5kIG9uZSwgdGhlbiBpdCBhY3R1YWxseSBjb250YWlucyBhblxuICAvLyBvcGFjaXR5IHZhbHVlLCBzbyByZWNhbGwgdGhpcyBmdW5jdGlvbiB3aXRoIHRoZSBkZWZhdWx0IGh1ZSBhbmQgdGhhdCBnaXZlbiBvcGFjaXR5LlxuICBAaWYgdHlwZS1vZigkaHVlKSA9PSBudW1iZXIgYW5kICRodWUgPj0gMCBhbmQgJGh1ZSA8PSAxIHtcbiAgICBAcmV0dXJuIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdCwgJGh1ZSk7XG4gIH1cblxuICAkY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsICRodWUpO1xuXG4gIEBpZiAodHlwZS1vZigkY29sb3IpICE9IGNvbG9yKSB7XG4gICAgLy8gSWYgdGhlICRjb2xvciByZXNvbHZlZCB0byBzb21ldGhpbmcgZGlmZmVyZW50IGZyb20gYSBjb2xvciAoZS5nLiBhIENTUyB2YXJpYWJsZSksXG4gICAgLy8gd2UgY2FuJ3QgYXBwbHkgdGhlIG9wYWNpdHkgYW55d2F5IHNvIHdlIHJldHVybiB0aGUgdmFsdWUgYXMgaXMsIG90aGVyd2lzZSBTYXNzIGNhblxuICAgIC8vIHRocm93IGFuIGVycm9yIG9yIG91dHB1dCBzb21ldGhpbmcgaW52YWxpZC5cbiAgICBAcmV0dXJuICRjb2xvcjtcbiAgfVxuXG4gIEByZXR1cm4gcmdiYSgkY29sb3IsIGlmKCRvcGFjaXR5ID09IG51bGwsIG9wYWNpdHkoJGNvbG9yKSwgJG9wYWNpdHkpKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBsaWdodCB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWxpZ2h0LXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIEByZXR1cm4gKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIGFjY2VudDogJGFjY2VudCxcbiAgICB3YXJuOiAkd2FybixcbiAgICBpcy1kYXJrOiBmYWxzZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kLFxuICApO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGRhcmsgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuQGZ1bmN0aW9uIG1hdC1kYXJrLXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIEByZXR1cm4gKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIGFjY2VudDogJGFjY2VudCxcbiAgICB3YXJuOiAkd2FybixcbiAgICBpcy1kYXJrOiB0cnVlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kLFxuICAgIGJhY2tncm91bmQ6ICRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kLFxuICApO1xufVxuXG5cblxuJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTogMC4xO1xuXG5AbWl4aW4gbWF0LXJpcHBsZSgpIHtcblxuICAvLyBUaGUgaG9zdCBlbGVtZW50IG9mIGFuIG1hdC1yaXBwbGUgZGlyZWN0aXZlIHNob3VsZCBhbHdheXMgaGF2ZSBhIHBvc2l0aW9uIG9mIFwiYWJzb2x1dGVcIiBvclxuICAvLyBcInJlbGF0aXZlXCIgc28gdGhhdCB0aGUgcmlwcGxlcyBpbnNpZGUgYXJlIGNvcnJlY3RseSBwb3NpdGlvbmVkIHJlbGF0aXZlbHkgdG8gdGhlIGNvbnRhaW5lci5cbiAgLm1hdC1yaXBwbGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAvLyBCeSBkZWZhdWx0LCBldmVyeSByaXBwbGUgY29udGFpbmVyIHNob3VsZCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBpbiBmYXZvciBvZiBjcmVhdGluZyBhblxuICAgIC8vIGVhc3kgQVBJIGZvciBkZXZlbG9wZXJzIHVzaW5nIHRoZSBNYXRSaXBwbGUgZGlyZWN0aXZlLlxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG5cbiAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJpcHBsZSBpcyBvcGFxdWUsIGNhdXNpbmcgaXQgdG8gb2JzdHJ1Y3QgdGhlIGNvbnRlbnQuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3QoYWN0aXZlLCBvZmYpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG5AbWl4aW4gbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcF9nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQtYmFzZTogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgLy8gSWYgdGhlIHJpcHBsZSBjb2xvciBpcyByZXNvbHZlcyB0byBhIGNvbG9yICp0eXBlKiwgd2UgY2FuIHVzZSBpdCBkaXJlY3RseSwgb3RoZXJ3aXNlXG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpIHdlIGZhbGwgYmFjayB0byB1c2luZyB0aGUgY29sb3IgYW5kIHNldHRpbmcgYW4gb3BhY2l0eS5cbiAgICBAaWYgKHR5cGUtb2YoJGZvcmVncm91bmQtYmFzZSkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGZvcmVncm91bmQtYmFzZSwgJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWJhc2U7XG4gICAgICBvcGFjaXR5OiAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gVXRpbGl0eSBmb3IgZmV0Y2hpbmcgYSBuZXN0ZWQgdmFsdWUgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCAkbmFtZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkY29uZmlnLCAkbGV2ZWwpLCAkbmFtZSk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgc2l6ZSBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXNpemUpO1xufVxuXG4vLyBHZXRzIHRoZSBsaW5lIGhlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxpbmUtaGVpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCB3ZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXdlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGxldHRlciBzcGFjaW5nIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGV0dGVyLXNwYWNpbmcpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250LWZhbWlseSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcgYW5kIHJlbW92ZXMgdGhlIHF1b3RlcyBhcm91bmQgaXQuXG5AZnVuY3Rpb24gbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbDogbnVsbCkge1xuICAkZm9udC1mYW1pbHk6IG1hcC1nZXQoJGNvbmZpZywgZm9udC1mYW1pbHkpO1xuXG4gIEBpZiAkbGV2ZWwgIT0gbnVsbCB7XG4gICAgJGZvbnQtZmFtaWx5OiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1mYW1pbHkpO1xuICB9XG5cbiAgLy8gR3VhcmQgYWdhaW5zdCB1bnF1b3Rpbmcgbm9uLXN0cmluZyB2YWx1ZXMsIGJlY2F1c2UgaXQncyBkZXByZWNhdGVkLlxuICBAcmV0dXJuIGlmKHR5cGUtb2YoJGZvbnQtZmFtaWx5KSA9PSBzdHJpbmcsIHVucXVvdGUoJGZvbnQtZmFtaWx5KSwgJGZvbnQtZmFtaWx5KTtcbn1cblxuLy8gT3V0cHV0cyB0aGUgc2hvcnRoYW5kIGBmb250YCBDU1MgcHJvcGVydHksIGJhc2VkIG9uIGEgc2V0IG9mIHR5cG9ncmFwaHkgdmFsdWVzLiBGYWxscyBiYWNrIHRvXG4vLyB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGlmIGEgdmFsdWUgdGhhdCBpc24ndCBhbGxvd2VkIGluIHRoZSBzaG9ydGhhbmQgaXMgcGFzc2VkIGluLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpIHtcbiAgLy8gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIHNldCB0byBgaW5oZXJpdGAsIHdlIGNhbid0IHVzZSB0aGUgc2hvcnRoYW5kXG4gIC8vIHNvIHdlIGZhbGwgYmFjayB0byBwYXNzaW5nIGluIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMuXG4gIEBpZiAoJGZvbnQtc2l6ZSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtc2l6ZSA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBudWxsKSB7XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSB1c2UgdGhlIHNob3J0aGFuZCBgZm9udGAsIGJlY2F1c2UgaXQncyB0aGUgbGVhc3QgYW1vdW50IG9mIGJ5dGVzLiBOb3RlXG4gICAgLy8gdGhhdCB3ZSBuZWVkIHRvIHVzZSBpbnRlcnBvbGF0aW9uIGZvciBgZm9udC1zaXplL2xpbmUtaGVpZ2h0YCBpbiBvcmRlciB0byBwcmV2ZW50XG4gICAgLy8gU2FzcyBmcm9tIGRpdmlkaW5nIHRoZSB0d28gdmFsdWVzLlxuICAgIGZvbnQ6ICRmb250LXdlaWdodCAjeyRmb250LXNpemV9LyN7JGxpbmUtaGVpZ2h0fSAkZm9udC1mYW1pbHk7XG4gIH1cbn1cblxuLy8gQ29udmVydHMgYSB0eXBvZ3JhcGh5IGxldmVsIGludG8gQ1NTIHN0eWxlcy5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgJGxldmVsKSB7XG4gICRmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsKTtcblxuICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KTtcbiAgbGV0dGVyLXNwYWNpbmc6IG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpO1xufVxuXG5cbkBtaXhpbiBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LW9wdGlvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksXG4gICAgJjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIEluIG11bHRpcGxlIG1vZGUgdGhlcmUgaXMgYSBjaGVja2JveCB0byBzaG93IHRoYXQgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAmLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRpb24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5AbWl4aW4gbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuICAkY29sb3JlZC1ib3gtc2VsZWN0b3I6ICcubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlJztcblxuICAubWF0LXBzZXVkby1jaGVja2JveCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCksIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gdGhlIGFjY2VudCBjb2xvci4gTm90ZSB0aGF0IHRoZSBwc2V1ZG8gY2hlY2tib3hlcyBhcmUgbWVhbnQgdG8gaW5oZXJpdCB0aGVcbiAgLy8gdGhlbWUgZnJvbSB0aGVpciBwYXJlbnQsIHJhdGhlciB0aGFuIGltcGxlbWVudGluZyB0aGVpciBvd24gdGhlbWluZywgd2hpY2ggaXMgd2h5IHdlXG4gIC8vIGRvbid0IGF0dGFjaCB0byB0aGUgYG1hdC0qYCBjbGFzc2VzLiBBbHNvIG5vdGUgdGhhdCB0aGlzIG5lZWRzIHRvIGJlIGJlbG93IGAubWF0LXByaW1hcnlgXG4gIC8vIGluIG9yZGVyIHRvIGFsbG93IGZvciB0aGUgY29sb3IgdG8gYmUgb3ZlcndyaXR0ZW4gaWYgdGhlIGNoZWNrYm94IGlzIGluc2lkZSBhIHBhcmVudCB0aGF0XG4gIC8vIGhhcyBgbWF0LWFjY2VudGAgYW5kIGlzIHBsYWNlZCBpbnNpZGUgYW5vdGhlciBwYXJlbnQgdGhhdCBoYXMgYG1hdC1wcmltYXJ5YC5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSxcbiAgLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAmLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gUmVwcmVzZW50cyBhIHR5cG9ncmFwaHkgbGV2ZWwgZnJvbSB0aGUgTWF0ZXJpYWwgZGVzaWduIHNwZWMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktbGV2ZWwoXG4gICRmb250LXNpemUsXG4gICRsaW5lLWhlaWdodDogJGZvbnQtc2l6ZSxcbiAgJGZvbnQtd2VpZ2h0OiA0MDAsXG4gICRmb250LWZhbWlseTogbnVsbCxcbiAgJGxldHRlci1zcGFjaW5nOiBudWxsKSB7XG5cbiAgQHJldHVybiAoXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLFxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQsXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodCxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LFxuICAgIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmdcbiAgKTtcbn1cblxuLy8gUmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHlwb2dyYXBoeSBsZXZlbHMuXG4vLyBEZWZhdWx0cyBjb21lIGZyb20gaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL3N0eWxlL3R5cG9ncmFwaHkuaHRtbFxuLy8gTm90ZTogVGhlIHNwZWMgZG9lc24ndCBtZW50aW9uIGxldHRlciBzcGFjaW5nLiBUaGUgdmFsdWVzIGhlcmUgY29tZSBmcm9tXG4vLyBleWViYWxsaW5nIGl0IHVudGlsIGl0IGxvb2tlZCBleGFjdGx5IGxpa2UgdGhlIHNwZWMgZXhhbXBsZXMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICAgJ1JvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcbiAgJGRpc3BsYXktNDogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDExMnB4LCAxMTJweCwgMzAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW0pLFxuICAkZGlzcGxheS0zOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNTZweCwgNTZweCwgNDAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW0pLFxuICAkZGlzcGxheS0yOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNDVweCwgNDhweCwgNDAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtKSxcbiAgJGRpc3BsYXktMTogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDM0cHgsIDQwcHgsIDQwMCksXG4gICRoZWFkbGluZTogICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyNHB4LCAzMnB4LCA0MDApLFxuICAkdGl0bGU6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjBweCwgMzJweCwgNTAwKSxcbiAgJHN1YmhlYWRpbmctMjogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE2cHgsIDI4cHgsIDQwMCksXG4gICRzdWJoZWFkaW5nLTE6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNXB4LCAyNHB4LCA0MDApLFxuICAkYm9keS0yOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjRweCwgNTAwKSxcbiAgJGJvZHktMTogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDIwcHgsIDQwMCksXG4gICRjYXB0aW9uOiAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMnB4LCAyMHB4LCA0MDApLFxuICAkYnV0dG9uOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMTRweCwgNTAwKSxcbiAgLy8gTGluZS1oZWlnaHQgbXVzdCBiZSB1bml0LWxlc3MgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZS5cbiAgJGlucHV0OiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKGluaGVyaXQsIDEuMTI1LCA0MDApXG4pIHtcblxuICAvLyBEZWNsYXJlIGFuIGluaXRpYWwgbWFwIHdpdGggYWxsIG9mIHRoZSBsZXZlbHMuXG4gICRjb25maWc6IChcbiAgICBkaXNwbGF5LTQ6ICAgICAgJGRpc3BsYXktNCxcbiAgICBkaXNwbGF5LTM6ICAgICAgJGRpc3BsYXktMyxcbiAgICBkaXNwbGF5LTI6ICAgICAgJGRpc3BsYXktMixcbiAgICBkaXNwbGF5LTE6ICAgICAgJGRpc3BsYXktMSxcbiAgICBoZWFkbGluZTogICAgICAgJGhlYWRsaW5lLFxuICAgIHRpdGxlOiAgICAgICAgICAkdGl0bGUsXG4gICAgc3ViaGVhZGluZy0yOiAgICRzdWJoZWFkaW5nLTIsXG4gICAgc3ViaGVhZGluZy0xOiAgICRzdWJoZWFkaW5nLTEsXG4gICAgYm9keS0yOiAgICAgICAgICRib2R5LTIsXG4gICAgYm9keS0xOiAgICAgICAgICRib2R5LTEsXG4gICAgY2FwdGlvbjogICAgICAgICRjYXB0aW9uLFxuICAgIGJ1dHRvbjogICAgICAgICAkYnV0dG9uLFxuICAgIGlucHV0OiAgICAgICAgICAkaW5wdXQsXG4gICk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZXZlbHMgYW5kIHNldCB0aGUgYGZvbnQtZmFtaWx5YCBvZiB0aGUgb25lcyB0aGF0IGRvbid0IGhhdmUgb25lIHRvIHRoZSBiYXNlLlxuICAvLyBOb3RlIHRoYXQgU2FzcyBjYW4ndCBtb2RpZnkgbWFwcyBpbiBwbGFjZSwgd2hpY2ggbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG1lcmdlIGFuZCByZS1hc3NpZ24uXG4gIEBlYWNoICRrZXksICRsZXZlbCBpbiAkY29uZmlnIHtcbiAgICBAaWYgbWFwLWdldCgkbGV2ZWwsIGZvbnQtZmFtaWx5KSA9PSBudWxsIHtcbiAgICAgICRuZXctbGV2ZWw6IG1hcC1tZXJnZSgkbGV2ZWwsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG4gICAgICAkY29uZmlnOiBtYXAtbWVyZ2UoJGNvbmZpZywgKCRrZXk6ICRuZXctbGV2ZWwpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGhlIGJhc2UgZm9udCBmYW1pbHkgdG8gdGhlIGNvbmZpZy5cbiAgQHJldHVybiBtYXAtbWVyZ2UoJGNvbmZpZywgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbn1cblxuLy8gQWRkcyB0aGUgYmFzZSB0eXBvZ3JhcGh5IHN0eWxlcywgYmFzZWQgb24gYSBjb25maWcuXG5AbWl4aW4gbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnLCAkc2VsZWN0b3I6ICcubWF0LXR5cG9ncmFwaHknKSB7XG4gIC5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsICN7JHNlbGVjdG9yfSBoMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMiwgLm1hdC10aXRsZSwgI3skc2VsZWN0b3J9IGgyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgzLCAubWF0LXN1YmhlYWRpbmctMiwgI3skc2VsZWN0b3J9IGgzIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oNCwgLm1hdC1zdWJoZWFkaW5nLTEsICN7JHNlbGVjdG9yfSBoNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoZSBzcGVjIGRvZXNuJ3QgaGF2ZSBhbnl0aGluZyB0aGF0IHdvdWxkIGNvcnJlc3BvbmQgdG8gaDUgYW5kIGg2LCBidXQgd2UgYWRkIHRoZXNlIGZvclxuICAvLyBjb25zaXN0ZW5jeS4gVGhlIGZvbnQgc2l6ZXMgY29tZSBmcm9tIHRoZSBDaHJvbWUgdXNlciBhZ2VudCBzdHlsZXMgd2hpY2ggaGF2ZSBoNSBhdCAwLjgzZW1cbiAgLy8gYW5kIGg2IGF0IDAuNjdlbS5cbiAgLm1hdC1oNSwgI3skc2VsZWN0b3J9IGg1IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgICAvLyBjYWxjIGlzIHVzZWQgaGVyZSB0byBzdXBwb3J0IGNzcyB2YXJpYWJsZXNcbiAgICAgIGNhbGMoI3ttYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSl9ICogMC44MyksXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtaDYsICN7JHNlbGVjdG9yfSBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICAgLy8gY2FsYyBpcyB1c2VkIGhlcmUgdG8gc3VwcG9ydCBjc3MgdmFyaWFibGVzXG4gICAgICBjYWxjKCN7bWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpfSAqIDAuNjcpLFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWJvZHksIC5tYXQtYm9keS0xLCAjeyRzZWxlY3Rvcn0ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc21hbGwsIC5tYXQtY2FwdGlvbiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGNhcHRpb24pO1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTQsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktNCk7XG4gICAgbWFyZ2luOiAwIDAgNTZweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0zLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTMpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMiwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0yKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTEsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMSk7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxufVxuXG5cblxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gU2VsZWN0ZWQgb3B0aW9ucyBpbiBhdXRvY29tcGxldGVzIHNob3VsZCBub3QgYmUgZ3JheSwgYnV0IHdlXG4gICAgLy8gb25seSB3YW50IHRvIG92ZXJyaWRlIHRoZSBiYWNrZ3JvdW5kIGZvciBzZWxlY3RlZCBvcHRpb25zIGlmXG4gICAgLy8gdGhleSBhcmUgKm5vdCogaW4gaG92ZXIgb3IgZm9jdXMgc3RhdGUuIFRoaXMgY2hhbmdlIGhhcyB0byBiZVxuICAgIC8vIG1hZGUgaGVyZSBiZWNhdXNlIGJhc2Ugb3B0aW9uIHN0eWxlcyBhcmUgc2hhcmVkIGJldHdlZW4gdGhlXG4gICAgLy8gYXV0b2NvbXBsZXRlIGFuZCB0aGUgc2VsZWN0LlxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAgICY6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cbi8vIFRoaXMgY29udGFpbnMgYWxsIG9mIHRoZSBzdHlsZXMgZm9yIHRoZSBiYWRnZVxuLy8gcmF0aGVyIHRoYW4ganVzdCB0aGUgY29sb3IvdGhlbWUgYmVjYXVzZSBvZlxuLy8gbm8gc3R5bGUgc2hlZXQgc3VwcG9ydCBmb3IgZGlyZWN0aXZlcy5cblxuXG5cblxuXG4kbWF0LWJhZGdlLWZvbnQtc2l6ZTogMTJweDtcbiRtYXQtYmFkZ2UtZm9udC13ZWlnaHQ6IDYwMDtcbiRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplOiAyMnB4ICFkZWZhdWx0O1xuJG1hdC1iYWRnZS1zbWFsbC1zaXplOiAkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSAtIDY7XG4kbWF0LWJhZGdlLWxhcmdlLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplICsgNjtcblxuLy8gTWl4aW4gZm9yIGJ1aWxkaW5nIG9mZnNldCBnaXZlbiBkaWZmZXJlbnQgc2l6ZXNcbkBtaXhpbiBfbWF0LWJhZGdlLXNpemUoJHNpemUpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hYm92ZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHRvcDogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWxvdyB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJvdHRvbTogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2Utb3ZlcmxhcCB7XG4gICAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSkge1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdChhY3RpdmUsIG9mZikge1xuICAgICAgb3V0bGluZTogc29saWQgMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWFjY2VudCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS13YXJuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtaGlkZGVuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWRpc2FibGVkIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgJGFwcC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdiYWNrZ3JvdW5kJyk7XG4gICAgICAkYmFkZ2UtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgICAgLy8gVGhlIGRpc2FibGVkIGNvbG9yIHVzdWFsbHkgaGFzIHNvbWUga2luZCBvZiBvcGFjaXR5LCBidXQgYmVjYXVzZSB0aGUgYmFkZ2UgaXMgb3ZlcmxheWVkXG4gICAgICAvLyBvbiB0b3Agb2Ygc29tZXRoaW5nIGVsc2UsIGl0IHdvbid0IGxvb2sgZ29vZCBpZiBpdCdzIG9wYXF1ZS4gSWYgaXQgaXMgYSBjb2xvciAqdHlwZSosXG4gICAgICAvLyB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmQgdXNpbmdcbiAgICAgIC8vIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZCB3aGVuXG4gICAgICAvLyBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci5cbiAgICAgIEBpZiAodHlwZS1vZigkYmFkZ2UtY29sb3IpID09IGNvbG9yIGFuZCB0eXBlLW9mKCRhcHAtYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgICAgJGJhZGdlLW9wYWNpdHk6IG9wYWNpdHkoJGJhZGdlLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZDogbWl4KCRhcHAtYmFja2dyb3VuZCwgcmdiYSgkYmFkZ2UtY29sb3IsIDEpLCAoMSAtICRiYWRnZS1vcGFjaXR5KSAqIDEwMCUpO1xuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFkZ2UtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLm5nLWFuaW1hdGUtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50LFxuICAubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGUge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICAvLyBUaGUgYWN0aXZlIGNsYXNzIGlzIGFkZGVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIGFkZGVkXG4gIC8vIHNvIGl0IGNhbiBhbmltYXRlIHNjYWxlIHRvIGRlZmF1bHRcbiAgLm1hdC1iYWRnZS1jb250ZW50Lm1hdC1iYWRnZS1hY3RpdmUge1xuICAgIC8vIFNjYWxlIHRvIGBub25lYCBpbnN0ZWFkIG9mIGAxYCB0byBhdm9pZCBibHVycnkgdGV4dCBpbiBzb21lIGJyb3dzZXJzLlxuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLXNtYWxsLXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbWVkaXVtIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbGFyZ2Uge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWxhcmdlLXNpemUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC13ZWlnaHQ6ICRtYXQtYmFkZ2UtZm9udC13ZWlnaHQ7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZTtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIC8vIFNldCB0aGUgZm9udCBzaXplIHRvIDc1JSBvZiB0aGUgb3JpZ2luYWwuXG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDAuNzU7XG4gIH1cblxuICAubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDI7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cbiRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTogMC4xO1xuXG4vLyBBcHBsaWVzIGEgZm9jdXMgc3R5bGUgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gICZbZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi8vIEFwcGxpZXMgdGhlIGJhY2tncm91bmQgY29sb3IgZm9yIGEgcmlwcGxlLiBJZiB0aGUgdmFsdWUgcHJvdmlkZWQgaXMgbm90IGEgU2FzcyBjb2xvcixcbi8vIHdlIGFzc3VtZSB0aGF0IHdlJ3ZlIGJlZW4gZ2l2ZW4gYSBDU1MgdmFyaWFibGUuIFNpbmNlIHdlIGNhbid0IHBlcmZvcm0gYWxwaGEtYmxlbmRpbmdcbi8vIG9uIGEgQ1NTIHZhcmlhYmxlLCB3ZSBpbnN0ZWFkIGFkZCB0aGUgb3BhY2l0eSBkaXJlY3RseSB0byB0aGUgcmlwcGxlIGVsZW1lbnQuXG5AbWl4aW4gX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJHBhbGV0dGUsICRodWUsICRvcGFjaXR5KSB7XG4gICRiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICRodWUsICRvcGFjaXR5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIEBpZiAodHlwZS1vZigkYmFja2dyb3VuZC1jb2xvcikgIT0gY29sb3IpIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgJGh1ZSwgJG9wYWNpdHk6ICRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCRwcmltYXJ5LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJGFjY2VudCwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkd2FybiwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIEFwcGxpZXMgYSBwcm9wZXJ0eSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICRwcm9wZXJ0eSwgJGh1ZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAmLm1hdC1wcmltYXJ5IHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkcHJpbWFyeSwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtYWNjZW50IHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkYWNjZW50LCAkaHVlKTtcbiAgfVxuICAmLm1hdC13YXJuIHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkd2FybiwgJGh1ZSk7XG4gIH1cblxuICAmLm1hdC1wcmltYXJ5LCAmLm1hdC1hY2NlbnQsICYubWF0LXdhcm4sICZbZGlzYWJsZWRdIHtcbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAkcGFsZXR0ZTogaWYoJHByb3BlcnR5ID09ICdjb2xvcicsICRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCk7XG4gICAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgICAvLyBCdXR0b25zIHdpdGhvdXQgYSBiYWNrZ3JvdW5kIGNvbG9yIHNob3VsZCBpbmhlcml0IHRoZSBmb250IGNvbG9yLiBUaGlzIGlzIG5lY2Vzc2FyeSB0b1xuICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBidXR0b24gaXMgcmVhZGFibGUgb24gY3VzdG9tIGJhY2tncm91bmQgY29sb3JzLiBJdCdzIHdyb25nIHRvIGFsd2F5cyBhc3N1bWVcbiAgICAvLyB0aGF0IHRob3NlIGJ1dHRvbnMgYXJlIGFsd2F5cyBwbGFjZWQgaW5zaWRlIG9mIGNvbnRhaW5lcnMgd2l0aCB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kXG4gICAgLy8gY29sb3Igb2YgdGhlIHRoZW1lIChlLmcuIHRoZW1lZCB0b29sYmFycykuXG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdjb2xvcicsIHRleHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXktY29sb3IoJHRoZW1lKTtcblxuICAgIC8vIFNldHVwIHRoZSByaXBwbGUgY29sb3IgdG8gYmUgYmFzZWQgb24gdGhlIHRleHQgY29sb3IuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSByaXBwbGVzXG4gICAgLy8gYXJlIG1hdGNoaW5nIHdpdGggdGhlIGN1cnJlbnQgdGhlbWUgcGFsZXR0ZSBhbmQgYXJlIGluIGNvbnRyYXN0IHRvIHRoZSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgLy8gKGUuZyBpbiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICB9XG5cbiAgLy8gTm90ZTogdGhpcyBuZWVkcyBhIGJpdCBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB3ZSdyZSBub3QgZ3VhcmFudGVlZCB0aGUgaW5jbHVzaW9uXG4gIC8vIG9yZGVyIG9mIHRoZSB0aGVtZSBzdHlsZXMgYW5kIHRoZSBidXR0b24gcmVzZXQgbWF5IGVuZCB1cCByZXNldHRpbmcgdGhpcyBhcyB3ZWxsLlxuICAubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgLy8gRGVmYXVsdCBmb250IGFuZCBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gbm90IHVzaW5nIGFueSBjb2xvciBwYWxldHRlLlxuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgcmFpc2VkLWJ1dHRvbik7XG5cbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdjb2xvcicsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2JhY2tncm91bmQtY29sb3InLCBkZWZhdWx0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJHRoZW1lLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b24sIC5tYXQtZmxhdC1idXR0b24ge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDIsICR0aGVtZSk7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oOCwgJHRoZW1lKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig2LCAkdGhlbWUpO1xuXG4gICAgJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEyLCAkdGhlbWUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uLFxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10b2dnbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRkaXZpZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDIsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbiwgMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1idXR0b24tdG9nZ2xlLXZlcnRpY2FsIHtcbiAgICAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgc2VsZWN0ZWQtYnV0dG9uKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZSk7XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWNhcmQtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1jYXJkIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBOZWVkcyBleHRyYSBzcGVjaWZpY2l0eSB0byBiZSBhYmxlIHRvIG92ZXJyaWRlIHRoZSBlbGV2YXRpb24gc2VsZWN0b3JzLlxuICAgICYubWF0LWNhcmQtZmxhdCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jYXJkIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHRpdGxlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHRpdGxlKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSxcbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cblxuICAvLyBUaGUgY29sb3Igb2YgdGhlIGNoZWNrYm94J3MgY2hlY2ttYXJrIC8gbWl4ZWRtYXJrLlxuICAkY2hlY2tib3gtbWFyay1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG5cbiAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgICBmaWxsOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICAgIC8vICFpbXBvcnRhbnQgaXMgbmVlZGVkIGhlcmUgYmVjYXVzZSBhIHN0cm9rZSBtdXN0IGJlIHNldCBhcyBhblxuICAgIC8vIGF0dHJpYnV0ZSBvbiB0aGUgU1ZHIGluIG9yZGVyIGZvciBsaW5lIGFuaW1hdGlvbiB0byB3b3JrIHByb3Blcmx5LlxuICAgIHN0cm9rZTogJGNoZWNrYm94LW1hcmstY29sb3IgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtbWl4ZWRtYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwgLm1hdC1jaGVja2JveC1jaGVja2VkIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgJi5tYXQtY2hlY2tib3gtY2hlY2tlZCxcbiAgICAmLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWNoZWNrYm94LWNoZWNrZWQpIHtcbiAgICAgIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgICAgICBib3JkZXItY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAvLyBTd2l0Y2ggdGhpcyB0byBhIHNvbGlkIGNvbG9yIHNpbmNlIHdlJ3JlIHVzaW5nIGBvcGFjaXR5YFxuICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gIC5tYXQtY2hlY2tib3ggLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldChtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCksIGJhc2UpO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSxcbiAgLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hlY2tib3gge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAvLyBUT0RPKGthcmEpOiBSZW1vdmUgdGhpcyBzdHlsZSB3aGVuIGZpeGluZyB2ZXJ0aWNhbCBiYXNlbGluZVxuICAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cblxuXG5cbiRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplOiAxOHB4O1xuXG5AbWl4aW4gbWF0LWNoaXBzLWNvbG9yKCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuXG4gIC5tYXQtY2hpcC1yZW1vdmUge1xuICAgIGNvbG9yOiAkZm9yZWdyb3VuZDtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbn1cblxuXG4vLyBBcHBsaWVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhIHJpcHBsZSBlbGVtZW50LlxuLy8gSWYgdGhlIGNvbG9yIHZhbHVlIHByb3ZpZGVkIGlzIG5vdCBhIFNhc3MgY29sb3IsXG4vLyB3ZSBhc3N1bWUgdGhhdCB3ZSd2ZSBiZWVuIGdpdmVuIGEgQ1NTIHZhcmlhYmxlLlxuLy8gU2luY2Ugd2UgY2FuJ3QgcGVyZm9ybSBhbHBoYS1ibGVuZGluZyBvbiBhIENTUyB2YXJpYWJsZSxcbi8vIHdlIGluc3RlYWQgYWRkIHRoZSBvcGFjaXR5IGRpcmVjdGx5IHRvIHRoZSByaXBwbGUgZWxlbWVudC5cbkBtaXhpbiBfbWF0LWNoaXBzLXJpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCAkZGVmYXVsdC1jb250cmFzdCwgJG9wYWNpdHkpIHtcbiAgJGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJGRlZmF1bHQtY29udHJhc3QsICRvcGFjaXR5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIEBpZiAodHlwZS1vZigkYmFja2dyb3VuZC1jb2xvcikgIT0gY29sb3IpIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRwYWxldHRlKSB7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcihtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpLCBtYXQtY29sb3IoJHBhbGV0dGUpKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgIEBpbmNsdWRlIF9tYXQtY2hpcHMtcmlwcGxlLWJhY2tncm91bmQoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QsIDAuMSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCB1bnNlbGVjdGVkLWNoaXApO1xuICAkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gICAgQGluY2x1ZGUgbWF0LWNoaXBzLWNvbG9yKCR1bnNlbGVjdGVkLWZvcmVncm91bmQsICR1bnNlbGVjdGVkLWJhY2tncm91bmQpO1xuXG4gICAgJjpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSB7XG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDMsICR0aGVtZSk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjU0O1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWNoaXAtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNoaXAge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcblxuICAgIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29uLFxuICAgIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYmxlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdGFibGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgdGhlYWQsIC5tYXQtdGFibGUgdGJvZHksIC5tYXQtdGFibGUgdGZvb3QsXG4gIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgW21hdC1oZWFkZXItcm93XSwgW21hdC1yb3ddLCBbbWF0LWZvb3Rlci1yb3ddLFxuICAubWF0LXRhYmxlLXN0aWNreSB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgfVxuXG4gIG1hdC1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRhYmxlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGg6IDFweDtcbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudDogMC42O1xuJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50OiAwLjI7XG4kbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplOiAxM3B4ICFkZWZhdWx0O1xuJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTogMTFweCAhZGVmYXVsdDtcblxuQG1peGluIF9tYXQtZGF0ZXBpY2tlci1jb2xvcigkcGFsZXR0ZSkge1xuICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgICRiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRiYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZS1vdXQoJGJhY2tncm91bmQsICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdG8gYmFja2dyb3VuZCB0byBhIGNvbG9yIChlLmcuIGl0J3MgYSBDU1MgdmFyaWFibGUpLFxuICAgICAgLy8gZmFsbCBiYWNrIHRvIGZhZGluZyB0aGUgY29udGVudCBvdXQgdmlhIGBvcGFjaXR5YC5cbiAgICAgIG9wYWNpdHk6ICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoXG4gICAgICAgICAgICAgICAgbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1jYWxlbmRhci1hcnJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC8vIFRoZSBwcmV2L25leHQgYnV0dG9ucyBuZWVkIGEgYml0IG1vcmUgc3BlY2lmaWNpdHkgdG9cbiAgLy8gYXZvaWQgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgdGhlIC5tYXQtaWNvbi1idXR0b24uXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyLFxuICAuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSxcbiAgLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSB7XG4gICAgJiA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAvLyBOb3RlOiB0aG91Z2ggaXQncyBub3QgdGV4dCwgdGhlIGJvcmRlciBpcyBhIGhpbnQgYWJvdXQgdGhlIGZhY3QgdGhhdCB0aGlzIGlzIHRvZGF5J3MgZGF0ZSxcbiAgICAvLyBzbyB3ZSB1c2UgdGhlIGhpbnQgY29sb3IuXG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgICRjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogZmFkZS1vdXQoJGNvbG9yLCAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgY29sb3IgZGlkbid0IHJlc29sdmUgdG8gYSBjb2xvciB2YWx1ZSwgYnV0IHNvbWV0aGluZyBsaWtlIGEgQ1NTIHZhcmlhYmxlLCB3ZSBjYW4ndFxuICAgICAgLy8gZmFkZSBpdCBvdXQgc28gd2UgZmFsbCBiYWNrIHRvIHJlZHVjaW5nIHRoZSBlbGVtZW50IG9wYWNpdHkuIE5vdGUgdGhhdCB3ZSBkb24ndCB1c2UgdGhlXG4gICAgICAvLyAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQsIGJlY2F1c2UgaGludCB0ZXh0IHVzdWFsbHkgaGFzIHNvbWUgb3BhY2l0eSBhcHBsaWVkXG4gICAgICAvLyB0byBpdCBhbHJlYWR5IGFuZCB3ZSBkb24ndCB3YW50IHRoZW0gdG8gc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIuXG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2gge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSksIHRleHQpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCksIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybiksIHRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FsZW5kYXIge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCxcbiAgLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiAkbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1hY3Rpb24tcm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgICYgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgJjpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICAgICY6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pIHtcbiAgICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRGlzYWJsZSB0aGUgaG92ZXIgb24gdG91Y2ggZGV2aWNlcyBzaW5jZSBpdCBjYW4gYXBwZWFyIGxpa2UgaXQgaXMgc3R1Y2suIFdlIGNhbid0IHVzZVxuICAvLyBgQG1lZGlhIChob3ZlcilgIGFib3ZlLCBiZWNhdXNlIHRoZSBkZXNrdG9wIHN1cHBvcnQgYnJvd3NlciBzdXBwb3J0IGlzbid0IGdyZWF0LlxuICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKVxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbixcbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cbi8vIFRoaXMgbWl4aW4gd2lsbCBlbnN1cmUgdGhhdCBsaW5lcyB0aGF0IG92ZXJmbG93IHRoZSBjb250YWluZXIgd2lsbCBoaWRlIHRoZSBvdmVyZmxvdyBhbmRcbi8vIHRydW5jYXRlIG5lYXRseSB3aXRoIGFuIGVsbGlwc2lzLlxuQG1peGluIG1hdC10cnVuY2F0ZS1saW5lKCkge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLy8gTWl4aW4gdG8gcHJvdmlkZSBhbGwgbWF0LWxpbmUgc3R5bGVzLCBjaGFuZ2luZyBzZWNvbmRhcnkgZm9udCBzaXplIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGxpc3Rcbi8vIGlzIGluIGRlbnNlIG1vZGUuXG5AbWl4aW4gbWF0LWxpbmUtYmFzZSgkc2Vjb25kYXJ5LWZvbnQtc2l6ZSkge1xuICAubWF0LWxpbmUge1xuICAgIEBpbmNsdWRlIG1hdC10cnVuY2F0ZS1saW5lKCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIC8vIGFsbCBsaW5lcyBidXQgdGhlIHRvcCBsaW5lIHNob3VsZCBoYXZlIHNtYWxsZXIgdGV4dFxuICAgICY6bnRoLWNoaWxkKG4rMikge1xuICAgICAgZm9udC1zaXplOiAkc2Vjb25kYXJ5LWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBub3JtYWxpemVzIGRlZmF1bHQgZWxlbWVudCBzdHlsZXMsIGUuZy4gZm9udCB3ZWlnaHQgZm9yIGhlYWRpbmcgdGV4dC5cbkBtaXhpbiBtYXQtbm9ybWFsaXplLXRleHQoKSB7XG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIHByb3ZpZGVzIGJhc2Ugc3R5bGVzIGZvciB0aGUgd3JhcHBlciBhcm91bmQgbWF0LWxpbmUgZWxlbWVudHMgaW4gYSBsaXN0LlxuQG1peGluIG1hdC1saW5lLXdyYXBwZXItYmFzZSgpIHtcbiAgQGluY2x1ZGUgbWF0LW5vcm1hbGl6ZS10ZXh0KCk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLy8gTXVzdCByZW1vdmUgd3JhcHBlciB3aGVuIGxpbmVzIGFyZSBlbXB0eSBvciBpdCB0YWtlcyB1cCBob3Jpem9udGFsXG4gIC8vIHNwYWNlIGFuZCBwdXNoZXMgb3RoZXIgZWxlbWVudHMgdG8gdGhlIHJpZ2h0LlxuICAmOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpIHsgfVxuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ncmlkLXRpbGUtaGVhZGVyLFxuICAubWF0LWdyaWQtdGlsZS1mb290ZXIge1xuICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gSW5jbHVkZSB0aGlzIGVtcHR5IG1peGluIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBvdGhlciBjb21wb25lbnRzLlxuQG1peGluIG1hdC1pY29uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWljb24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuLy8gUmVuZGVycyBhIGdyYWRpZW50IGZvciBzaG93aW5nIHRoZSBkYXNoZWQgbGluZSB3aGVuIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbi8vIFVubGlrZSB1c2luZyBhIGJvcmRlciwgYSBncmFkaWVudCBhbGxvd3MgdXMgdG8gYWRqdXN0IHRoZSBzcGFjaW5nIG9mIHRoZSBkb3R0ZWQgbGluZVxuLy8gdG8gbWF0Y2ggdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuQG1peGluIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IgMCUsICRjb2xvciAzMyUsIHRyYW5zcGFyZW50IDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyBGaWd1cmVzIG91dCB0aGUgY29sb3Igb2YgdGhlIHBsYWNlaG9sZGVyIGZvciBhIGZvcm0gY29udHJvbC5cbi8vIFVzZWQgcHJpbWFyaWx5IHRvIHByZXZlbnQgdGhlIHZhcmlvdXMgZm9ybSBjb250cm9scyBmcm9tXG4vLyBiZWNvbWluZyBvdXQgb2Ygc3luYyBzaW5jZSB0aGVzZSBjb2xvcnMgYXJlbid0IGluIGEgcGFsZXR0ZS5cbkBmdW5jdGlvbiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gIEByZXR1cm4gbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xufVxuXG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbHVlKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1vei11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbXMtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbn1cblxuQG1peGluIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWIge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWJiaW5nIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmFsdWUpIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbn1cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cblxuXG5cbkBtaXhpbiBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCxcbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuXG4gICAgQGluY2x1ZGUgaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpO1xuICAgIH1cblxuICAgIC8vIE9uIGRhcmsgdGhlbWVzIHdlIHNldCB0aGUgbmF0aXZlIGBzZWxlY3RgIGNvbG9yIHRvIHNvbWUgc2hhZGUgb2Ygd2hpdGUsXG4gICAgLy8gaG93ZXZlciB0aGUgY29sb3IgcHJvcGFnYXRlcyB0byBhbGwgb2YgdGhlIGBvcHRpb25gIGVsZW1lbnRzLCB3aGljaCBhcmVcbiAgICAvLyBhbHdheXMgb24gYSB3aGl0ZSBiYWNrZ3JvdW5kIGluc2lkZSB0aGUgZHJvcGRvd24sIGNhdXNpbmcgdGhlbSB0byBibGVuZCBpbi5cbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgYmFja2dyb3VuZCBvZiB0aGUgZHJvcGRvd24sIHdlIG5lZWQgdG8gZXhwbGljaXRseVxuICAgIC8vIHJlc2V0IHRoZSBjb2xvciBvZiB0aGUgb3B0aW9ucyB0byBzb21ldGhpbmcgZGFyay5cbiAgICBAaWYgKG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKSkge1xuICAgICAgb3B0aW9uIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLXByaW1hcnktdGV4dDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uOmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLWRpc2FibGVkLXRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbiAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcblxuICAvLyA8aW5wdXQ+IGVsZW1lbnRzIHNlZW0gdG8gaGF2ZSB0aGVpciBoZWlnaHQgc2V0IHNsaWdodGx5IHRvbyBsYXJnZSBvbiBTYWZhcmkgY2F1c2luZyB0aGUgdGV4dCB0b1xuICAvLyBiZSBtaXNhbGlnbmVkIHcuci50LiB0aGUgcGxhY2Vob2xkZXIuIEFkZGluZyB0aGlzIG1hcmdpbiBjb3JyZWN0cyBpdC5cbiAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIG1hcmdpbi10b3A6IC0kbGluZS1zcGFjaW5nICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbGlzdC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LWl0ZW0tZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlzYWJsZWQtbGlzdC1vcHRpb24pO1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbixcbiAgLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSxcbiAgLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuXG4gIC5tYXQtbGlzdC1pdGVtIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgbGlzdFxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cblxuICAvLyBEZW5zZSBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlW2RlbnNlXSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1tZW51LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbWVudS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ3RleHQnKTtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICYsICY6OmFmdGVyIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLFxuICAubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW06aG92ZXIsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZCB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAgIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgIGZpbGw6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLCAubWF0LXNwaW5uZXIge1xuICAgIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXJhZGlvLWNvbG9yKCRwYWxldHRlKSB7XG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuICAmOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIG5lZWRzIGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHRoZSBjbGFzc2VzIGFib3ZlIGFyZSBjb21iaW5lZFxuICAgIC8vIChlLmcuIGAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50YCkgd2hpY2ggaW5jcmVhc2VzIHRoZWlyIHNwZWNpZmljaXR5IGEgbG90LlxuICAgIC8vIFRPRE86IGNvbnNpZGVyIG1ha2luZyB0aGUgc2VsZWN0b3JzIGludG8gZGVzY2VuZGFudHMgKGAubWF0LXByaW1hcnkgLm1hdC1yYWRpby1idXR0b25gKS5cbiAgICAmLm1hdC1yYWRpby1kaXNhYmxlZCB7XG4gICAgICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLFxuICAgICAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxuICAgICAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gICAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcblxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAmLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAubWF0LXNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yOiAgbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1zaWRlLWJvcmRlcjogc29saWQgMXB4IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1kcmF3ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWRyYXdlci1wdXNoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtZHJhd2VyLXNpZGUpIHtcbiAgICAgIC8vIFRoZSBlbGV2YXRpb24gb2Ygei0xNiBpcyBub3RlZCBpbiB0aGUgZGVzaWduIHNwZWNpZmljYXRpb25zLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1kcmF3ZXIuaHRtbFxuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICAgICRvcGFjaXR5OiAwLjY7XG4gICAgJGJhY2tkcm9wLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQsICRvcGFjaXR5KTtcblxuICAgIEBpZiAodHlwZS1vZigkYmFja2Ryb3AtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAvLyBXZSB1c2UgaW52ZXJ0KCkgaGVyZSB0byBoYXZlIHRoZSBkYXJrZW4gdGhlIGJhY2tncm91bmQgY29sb3IgZXhwZWN0ZWQgdG8gYmUgdXNlZC4gSWYgdGhlXG4gICAgICAvLyBiYWNrZ3JvdW5kIGlzIGxpZ2h0LCB3ZSB1c2UgYSBkYXJrIGJhY2tkcm9wLiBJZiB0aGUgYmFja2dyb3VuZCBpcyBkYXJrLFxuICAgICAgLy8gd2UgdXNlIGEgbGlnaHQgYmFja2Ryb3AuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbnZlcnQoJGJhY2tkcm9wLWNvbG9yKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0aGUgYmFja2Ryb3AgY29sb3IgdG8gYSBjb2xvciB2YWx1ZSwgZmFsbCBiYWNrIHRvIHVzaW5nXG4gICAgICAvLyBgb3BhY2l0eWAgdG8gbWFrZSBpdCBvcGFxdWUgc2luY2UgaXRzIGVuZCB2YWx1ZSBjb3VsZCBiZSBhIHNvbGlkIGNvbG9yLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tkcm9wLWNvbG9yO1xuICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSkge1xuICAmLm1hdC1jaGVja2VkIHtcbiAgICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICAgIC8vIE9wYWNpdHkgaXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSBzcGVjcyBmb3IgdGhlIHNlbGVjdGlvbiBjb250cm9scy5cbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzcGVjc1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUsIDAuNTQpO1xuICAgIH1cblxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcms6IG1hcF9nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLy8gQ29sb3IgaHVlcyBhcmUgYmFzZWQgb24gdGhlIHNwZWNzIHdoaWNoIGJyaWVmbHkgc2hvdyB0aGUgaHVlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIGEgc3dpdGNoLlxuICAvLyBUaGUgMjAxOCBzcGVjcyBubyBsb25nZXIgZGVzY3JpYmUgaG93IGRhcmsgc3dpdGNoZXMgc2hvdWxkIGxvb2sgbGlrZS4gRHVlIHRvIHRoZSBsYWNrIG9mXG4gIC8vIGluZm9ybWF0aW9uIGZvciBkYXJrIHRoZW1lZCBzd2l0Y2hlcywgd2UgcGFydGlhbGx5IGtlZXAgdGhlIG9sZCBiZWhhdmlvciB0aGF0IGlzIGJhc2VkIG9uXG4gIC8vIHRoZSBwcmV2aW91cyBzcGVjaWZpY2F0aW9ucy4gRm9yIHRoZSBjaGVja2VkIGNvbG9yIHdlIGFsd2F5cyB1c2UgdGhlIGBkZWZhdWx0YCBodWUgYmVjYXVzZVxuICAvLyB0aGF0IGZvbGxvd3MgTURDIGFuZCBhbHNvIG1ha2VzIGl0IGVhc2llciBmb3IgcGVvcGxlIHRvIGNyZWF0ZSBhIGN1c3RvbSB0aGVtZSB3aXRob3V0IG5lZWRpbmdcbiAgLy8gdG8gc3BlY2lmeSBlYWNoIGh1ZSBpbmRpdmlkdWFsbHkuXG4gICR0aHVtYi11bmNoZWNrZWQtaHVlOiBpZigkaXMtZGFyaywgNDAwLCA1MCk7XG4gICR0aHVtYi1jaGVja2VkLWh1ZTogZGVmYXVsdDtcblxuICAkYmFyLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRhY2NlbnQsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHByaW1hcnksICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCR3YXJuLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG1hdC1ncmV5LCAkdGh1bWItdW5jaGVja2VkLWh1ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXItdW5jaGVja2VkLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHBhbGV0dGUpIHtcbiAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgLm1hdC1zbGlkZXItdGh1bWIsXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICRtYXQtc2xpZGVyLW9mZi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZi1hY3RpdmUpO1xuICAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW1pbik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk6IDAuNztcbiAgJG1hdC1zbGlkZXItdGljay1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHkpO1xuICAkbWF0LXNsaWRlci10aWNrLXNpemU6IDJweDtcblxuICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gIH1cblxuICAubWF0LXByaW1hcnkge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4ge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHdhcm4pO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgJG9wYWNpdHk6IDAuMjtcbiAgICAkY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBkZWZhdWx0LCAkb3BhY2l0eSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyOmhvdmVyLFxuICAuY2RrLWZvY3VzZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItZGlzYWJsZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4gICAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1taW4tdmFsdWUge1xuICAgIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgICAgJG9wYWNpdHk6IDAuMTI7XG4gICAgICAkY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgJG9wYWNpdHkpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgICAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLXRpY2stY29sb3I7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICAgIC8vIEZpcmVmb3ggZG9lc24ndCBkcmF3IHRoZSBncmFkaWVudCBjb3JyZWN0bHkgd2l0aCAndG8gcmlnaHQnXG4gICAgLy8gKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzE0MzE5KS5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMC4wMDAxZGVnLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmICh0eXBlLW9mKCRtYXQtc2xpZGVyLXRpY2stY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmICh0eXBlLW9mKCRtYXQtc2xpZGVyLXRpY2stY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXN0ZXAtaGVhZGVyIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIE9uIHRvdWNoIGRldmljZXMgdGhlIDpob3ZlciBzdGF0ZSB3aWxsIGxpbmdlciBvbiB0aGUgZWxlbWVudCBhZnRlciBhIHRhcC5cbiAgICAvLyBSZXNldCBpdCB2aWEgYEBtZWRpYWAgYWZ0ZXIgdGhlIGRlY2xhcmF0aW9uLCBiZWNhdXNlIHRoZSBtZWRpYSBxdWVyeSBpc24ndFxuICAgIC8vIHN1cHBvcnRlZCBieSBhbGwgYnJvd3NlcnMgeWV0LlxuICAgIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbCxcbiAgICAubWF0LXN0ZXAtb3B0aW9uYWwge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3Ige1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICB9XG5cbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSxcbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlcixcbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH07XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICR0YWJsZS1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gICAgJHRleHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgLy8gQmVjYXVzZSB0aGUgYXJyb3cgaXMgbWFkZSB1cCBvZiBtdWx0aXBsZSBlbGVtZW50cyB0aGF0IGFyZSBzdGFja2VkIG9uIHRvcCBvZiBlYWNoIG90aGVyLFxuICAgIC8vIHdlIGNhbid0IHVzZSB0aGUgc2VtaS10cmFzcGFyZW50IGNvbG9yIGZyb20gdGhlIHRoZW1lIGRpcmVjdGx5LiBJZiB0aGUgdmFsdWUgaXMgYSBjb2xvclxuICAgIC8vICp0eXBlKiwgd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kXG4gICAgLy8gdXNpbmcgdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kXG4gICAgLy8gd2hlbiBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci4gT3RoZXJ3aXNlLCBpZiBpdCByZXNvbHZlcyB0byBzb21ldGhpbmcgZGlmZmVyZW50XG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpLCB3ZSB1c2UgdGhlIGNvbG9yIGRpcmVjdGx5LlxuICAgIEBpZiAodHlwZS1vZigkdGFibGUtYmFja2dyb3VuZCkgPT0gY29sb3IgYW5kIHR5cGUtb2YoJHRleHQtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAkdGV4dC1vcGFjaXR5OiBvcGFjaXR5KCR0ZXh0LWNvbG9yKTtcbiAgICAgIGNvbG9yOiBtaXgoJHRhYmxlLWJhY2tncm91bmQsIHJnYmEoJHRleHQtY29sb3IsIDEpLCAoMSAtICR0ZXh0LW9wYWNpdHkpICogMTAwJSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIG1hdC10YWJzLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGhlYWRlci1ib3JkZXI6IDFweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtdGFiLW5hdi1iYXIsXG4gIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogJGhlYWRlci1ib3JkZXI7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIge1xuICAgIC5tYXQtdGFiLW5hdi1iYXIsXG4gICAgLm1hdC10YWItaGVhZGVyIHtcbiAgICAgIGJvcmRlci10b3A6ICRoZWFkZXItYm9yZGVyO1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGhlYWRlciBib3JkZXIgd2hlbiB0aGVyZSBpcyBhIGJhY2tncm91bmQgY29sb3JcbiAgLm1hdC10YWItZ3JvdXBbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSAubWF0LXRhYi1oZWFkZXIsXG4gIC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAsIC5tYXQtdGFiLW5hdi1iYXIge1xuICAgICR0aGVtZS1jb2xvcnM6IChcbiAgICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgICAgYWNjZW50OiAkYWNjZW50LFxuICAgICAgd2FybjogJHdhcm5cbiAgICApO1xuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCB0aGUgZm9yZWdyb3VuZCBjb2xvciBvZiB0aGUgdGFic1xuICAgICAgJi5tYXQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYi1sYWJlbC1mb2N1cygkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWluay1iYXIoJGNvbG9yKTtcblxuICAgICAgICAvLyBPdmVycmlkZSBpbmsgYmFyIHdoZW4gYmFja2dyb3VuZCBjb2xvciBpcyB0aGUgc2FtZVxuICAgICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWluay1iYXIoJGNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgdGFicyBhbmQgb3ZlcnJpZGUgZm9jdXMgY29sb3JcbiAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYi1sYWJlbC1mb2N1cygkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYnMtYmFja2dyb3VuZCgkY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1pbmstYmFyKCRjb2xvciwgJGh1ZTogZGVmYXVsdCkge1xuICAubWF0LWluay1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkY29sb3IsICRodWUpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYi1sYWJlbC1mb2N1cygkdGFiLWZvY3VzLWNvbG9yKSB7XG4gIC5tYXQtdGFiLWxhYmVsLFxuICAubWF0LXRhYi1saW5rIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCB7XG4gICAgICAmOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHRhYi1mb2N1cy1jb2xvciwgbGlnaHRlciwgMC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRiYWNrZ3JvdW5kLWNvbG9yKSB7XG4gIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgdGFiIGdyb3VwXG4gIC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IpO1xuICB9XG5cbiAgLy8gU2V0IGxhYmVscyB0byBjb250cmFzdCBhZ2FpbnN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHBhZ2luYXRpb24gY2hldnJvbnMgdG8gY29udHJhc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgfVxuXG4gIC8vIFNldCByaXBwbGVzIGNvbG9yIHRvIGJlIHRoZSBjb250cmFzdCBjb2xvciBvZiB0aGUgbmV3IGJhY2tncm91bmQuIE90aGVyd2lzZSB0aGUgcmlwcGxlXG4gIC8vIGNvbG9yIHdpbGwgYmUgYmFzZWQgb24gdGhlIGFwcCBiYWNrZ3JvdW5kIGNvbG9yLlxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuMTIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWItZ3JvdXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC10b29sYmFyLWNvbG9yKCRwYWxldHRlKSB7XG4gIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xufVxuXG5AbWl4aW4gX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzIHtcbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSxcbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1zZWxlY3QtdmFsdWUsXG4gIC5tYXQtc2VsZWN0LWFycm93LFxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGFwcC1iYXIpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcztcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbGJhcixcbiAgLm1hdC10b29sYmFyIGgxLFxuICAubWF0LXRvb2xiYXIgaDIsXG4gIC5tYXQtdG9vbGJhciBoMyxcbiAgLm1hdC10b29sYmFyIGg0LFxuICAubWF0LXRvb2xiYXIgaDUsXG4gIC5tYXQtdG9vbGJhciBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuXG5cblxuXG4kbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodDogMjJweDtcbiRtYXQtdG9vbHRpcC1mb250LXNpemU6IDEwcHg7XG4kbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZzogKCRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWZvbnQtc2l6ZSkgLyAyO1xuXG4kbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0OiAzMHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplOiAxNHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZzpcbiAgICAoJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZSkgLyAyO1xuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC10b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHRvb2x0aXAsIDAuOSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRvb2x0aXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cblxuICAubWF0LXRvb2x0aXAtaGFuZHNldCB7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG5cbiAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgICAvLyBVc2UgdGhlIHByaW1hcnkgdGV4dCBvbiB0aGUgZGFyayB0aGVtZSwgZXZlbiB0aG91Z2ggdGhlIGxpZ2h0ZXIgb25lIHVzZXNcbiAgICAvLyBhIHNlY29uZGFyeSwgYmVjYXVzZSB0aGUgY29udHJhc3Qgb24gdGhlIGxpZ2h0IHByaW1hcnkgdGV4dCBpcyBwb29yLlxuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJGRhcmstcHJpbWFyeS10ZXh0LCAkbGlnaHQtc2Vjb25kYXJ5LXRleHQpO1xuICAgIGJhY2tncm91bmQ6IGlmKCRpcy1kYXJrLXRoZW1lLCBtYXAtZ2V0KCRtYXQtZ3JleSwgNTApLCAjMzIzMjMyKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgaW5oZXJpdCwgbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IGluaGVyaXQ7XG4gICAgICBzaXplOiBpbmhlcml0O1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBmaWxsIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRmaWxsLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMSwgMC4wNCkpO1xuICAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjA1LCAwLjAyKSk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRvcCBvZiB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLXRvcDogMC4yNWVtO1xuICAvLyBUaGUgcGFkZGluZyBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLWJvdHRvbTogMC43NWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgZmlsbCBhcHBlYXJhbmNlLlxuICAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZy10b3AgMCAkaW5maXgtcGFkZGluZy1ib3R0b20gMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nLXRvcDtcbiAgICAgIG1hcmdpbi10b3A6ICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgbGVnYWN5IGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWhpbnQge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBXZSB1c2UgcGVyc3BlY3RpdmUgdG8gZml4IHRoZSB0ZXh0IGJsdXJyaW5lc3MgYXMgZGVzY3JpYmVkIGhlcmU6XG4gIC8vIGh0dHA6Ly93d3cudXNlcmFnZW50bWFuLmNvbS9ibG9nLzIwMTQvMDUvMDQvZml4aW5nLXR5cG9ncmFwaHktaW5zaWRlLW9mLTItZC1jc3MtdHJhbnNmb3Jtcy9cbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZykgc2NhbGUoJGZvbnQtc2NhbGUpIHBlcnNwZWN0aXZlKDEwMHB4KVxuICB0cmFuc2xhdGVaKDAuMDAxcHggKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcblxuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG4vLyBTYW1lIGFzIG1peGluIGFib3ZlLCBidXQgb21pdHMgdGhlIHRyYW5zbGF0ZVogZm9yIHByaW50aW5nIHB1cnBvc2VzLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCBzZWVtIHRvIG1lYXN1cmUgZnJvbSB0aGUgZWRnZVxuICAvLyBvZiB0aGUgdGV4dCBpdHNlbGYsIG5vdCB0aGUgZWRnZSBvZiB0aGUgbGluZTsgdGhlcmVmb3JlIHdlIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW0gLSAkbGluZS1zcGFjaW5nO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS4gV2UgYWdhaW4gbmVlZCB0byBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZyBzaW5jZSB0aGUgbW9ja3MgbWVhc3VyZSB0byB0aGUgZWRnZSBvZiB0aGVcbiAgLy8gdGV4dCwgbm90IHRoZSAgZWRnZSBvZiB0aGUgbGluZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZSAtICgkbGluZS1zcGFjaW5nICogMik7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRyYW5zbGF0ZVogY2F1c2VzIHRoZSBsYWJlbCB0byBub3QgYXBwZWFyIHdoaWxlIHByaW50aW5nLCBzbyB3ZSBvdmVycmlkZSBpdCB0byBub3RcbiAgLy8gYXBwbHkgdHJhbnNsYXRlWiB3aGlsZSBwcmludGluZ1xuICBAbWVkaWEgcHJpbnQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgb3V0bGluZSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAkb3V0bGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4zLCAwLjEyKSk7XG4gICRvdXRsaW5lLWNvbG9yLWhvdmVyOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICRvdXRsaW5lLWNvbG9yLXByaW1hcnk6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICRvdXRsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAkb3V0bGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4pO1xuICAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4xNSwgMC4wNikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItaG92ZXI7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1wcmltYXJ5O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgcmVwZWF0ZWQgc28gdGhhdCBydWxlIGlzIHNwZWNpZmljIGVub3VnaCB0byBvdmVycmlkZSBmb2N1c2VkIGFjY2VudCBjb2xvciBjYXNlLlxuICAgICYubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSlcbiAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBhYm92ZSBhbmQgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZzogMWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgb3V0bGluZSBhcHBlYXJhbmNlLlxuICAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuMjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMCAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgICBtYXJnaW4tdG9wOiAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBzdGFuZGFyZCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7fVxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IGFwcGx5IHRvIGFsbCBhcHBlYXJhbmNlcyBvZiB0aGUgZm9ybS1maWVsZC5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgLy8gTGFiZWwgY29sb3JzLiBSZXF1aXJlZCBpcyB1c2VkIGZvciB0aGUgYCpgIHN0YXIgc2hvd24gaW4gdGhlIGxhYmVsLlxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNikpO1xuICAkZm9jdXNlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgJHJlcXVpcmVkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG5cbiAgLy8gVW5kZXJsaW5lIGNvbG9ycy5cbiAgJHVuZGVybGluZS1jb2xvci1iYXNlOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICR1bmRlcmxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtaGludCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkZm9jdXNlZC1sYWJlbC1jb2xvcjtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICBjb2xvcjogJHJlcXVpcmVkLWxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1iYXNlO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcblxuICAgICAgJi5tYXQtYWNjZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAvLyBTdHlsaW5nIGZvciB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGZvcm0gZmllbGQuIE5vdGUgdGhhdCB3aGlsZSB0aGUgc2FtZSBjYW4gYmVcbiAgLy8gYWNoaWV2ZWQgd2l0aCB0aGUgbmctKiBjbGFzc2VzLCB3ZSB1c2UgdGhpcyBhcHByb2FjaCBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgc2FtZVxuICAvLyBsb2dpYyBpcyB1c2VkIHRvIHN0eWxlIHRoZSBlcnJvciBzdGF0ZSBhbmQgdG8gc2hvdyB0aGUgZXJyb3IgbWVzc2FnZXMuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcblxuICAgICAgJi5tYXQtYWNjZW50LFxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXJyb3Ige1xuICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lKCR0aGVtZSk7XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZTogMS41O1xuXG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGxhYmVsIGFuZCBzdWJzY3JpcHQgdGV4dC5cbiAgJHN1YnNjcmlwdC1mb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBpbnB1dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCxcbiAgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XG4gICAgLy8gQWxsb3cgaWNvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU7XG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIEFsbG93IGljb24gYnV0dG9ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24tYnV0dG9uIHtcbiAgICAgIGhlaWdodDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuICAgICAgd2lkdGg6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcblxuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIC8vIFRocm93cyBvZmYgdGhlIGJhc2VsaW5lIGlmIHdlIGRvIGl0IGFzIGEgcmVhbCBtYXJnaW4sIHNvIHdlIGRvIGl0IGFzIGEgYm9yZGVyIGluc3RlYWQuXG4gICAgYm9yZGVyLXRvcDogJGluZml4LW1hcmdpbi10b3Agc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuXG4gICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICAgIHRvcDogLSRpbmZpeC1tYXJnaW4tdG9wO1xuICAgIHBhZGRpbmctdG9wOiAkaW5maXgtbWFyZ2luLXRvcDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNpemU7XG4gICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRyZWUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10cmVlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRyZWUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdHJlZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuLy8gSW5jbHVkZXMgYWxsIG9mIHRoZSB0eXBvZ3JhcGhpYyBzdHlsZXMuXG5AbWl4aW4gYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCRjb25maWc6IG51bGwpIHtcbiAgQGlmICRjb25maWcgPT0gbnVsbCB7XG4gICAgJGNvbmZpZzogbWF0LXR5cG9ncmFwaHktY29uZmlnKCk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgYXJlIG5vdCB0aGVtZS1kZXBlbmRlbnQuXG5AbWl4aW4gbWF0LWNvcmUoJHR5cG9ncmFwaHktY29uZmlnOiBudWxsKSB7XG4gIEBpbmNsdWRlIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeS1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlKCk7XG4gIEBpbmNsdWRlIGNkay1hMTF5KCk7XG4gIEBpbmNsdWRlIGNkay1vdmVybGF5KCk7XG4gIEBpbmNsdWRlIGNkay10ZXh0LWZpZWxkKCk7XG59XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgZGVwZW5kIG9uIHRoZSB0aGVtZS5cbkBtaXhpbiBtYXQtY29yZS10aGVtZSgkdGhlbWUpIHtcbiAgQGluY2x1ZGUgbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG5cbiAgLy8gUHJvdmlkZXMgZXh0ZXJuYWwgQ1NTIGNsYXNzZXMgZm9yIGVhY2ggZWxldmF0aW9uIHZhbHVlLiBFYWNoIENTUyBjbGFzcyBpcyBmb3JtYXR0ZWQgYXNcbiAgLy8gYG1hdC1lbGV2YXRpb24teiR6VmFsdWVgIHdoZXJlIGAkelZhbHVlYCBjb3JyZXNwb25kcyB0byB0aGUgei1zcGFjZSB0byB3aGljaCB0aGUgZWxlbWVudCBpc1xuICAvLyBlbGV2YXRlZC5cbiAgQGZvciAkelZhbHVlIGZyb20gMCB0aHJvdWdoIDI0IHtcbiAgICAuI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSN7JHpWYWx1ZX0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAvLyBXcmFwcGVyIGVsZW1lbnQgdGhhdCBwcm92aWRlcyB0aGUgdGhlbWUgYmFja2dyb3VuZCB3aGVuIHRoZSB1c2VyJ3MgY29udGVudCBpc24ndFxuICAvLyBpbnNpZGUgb2YgYSBgbWF0LXNpZGVuYXYtY29udGFpbmVyYC4gTm90ZSB0aGF0IHdlIG5lZWQgdG8gZXhjbHVkZSB0aGUgYW1wZXJzYW5kXG4gIC8vIHNlbGVjdG9yIGluIGNhc2UgdGhlIG1peGluIGlzIGluY2x1ZGVkIGF0IHRoZSB0b3AgbGV2ZWwuXG4gIC5tYXQtYXBwLWJhY2tncm91bmQje2lmKCYsICcsICYubWF0LWFwcC1iYWNrZ3JvdW5kJywgJycpfSB7XG4gICAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC8vIE1hcmtlciB0aGF0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHVzZXIgaGFzIGFkZGVkIGEgdGhlbWUgdG8gdGhlaXIgcGFnZS5cbiAgQGF0LXJvb3Qge1xuICAgIC5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpdmlkZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaXZpZGVyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gQ3JlYXRlIGEgdGhlbWUuXG5AbWl4aW4gYW5ndWxhci1tYXRlcmlhbC10aGVtZSgkdGhlbWUpIHtcbiAgQGluY2x1ZGUgbWF0LWNvcmUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jYXJkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRhYmxlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRpdmlkZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1pY29uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtbWVudS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXJhZGlvLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zb3J0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10YWJzLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lKTtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvQGZ1c2Uvc2Nzcy9mdXNlXCI7XHJcblxyXG4jZGFzaGJvYXJkLWFuYWx5dGljcyB7XHJcblxyXG4gICAgLm1haW4td2lkZ2V0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMzJweDtcclxuICAgICAgICBtaW4td2lkdGg6IDA7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoJ2x0LWxnJykge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xyXG5cclxuICAgICAgICAgICAgLndpZGdldCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMjBweDtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoJ2x0LWxnJykge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMSAwIDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mdXNlLWNhcmQge1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoJ2x0LWxnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuI2Rhc2hib2FyZC1hbmFseXRpY3MgLm1haW4td2lkZ2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNkYXNoYm9hcmQtYW5hbHl0aWNzIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDMycHg7XG4gIG1pbi13aWR0aDogMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAjZGFzaGJvYXJkLWFuYWx5dGljcyAuY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuI2Rhc2hib2FyZC1hbmFseXRpY3MgLmNvbnRlbnQgLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLXdpZHRoOiAwO1xufVxuI2Rhc2hib2FyZC1hbmFseXRpY3MgLmNvbnRlbnQgLmxlZnQgLndpZGdldCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4td2lkdGg6IDA7XG59XG4jZGFzaGJvYXJkLWFuYWx5dGljcyAuY29udGVudCAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDMyMHB4O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBtYXgtd2lkdGg6IDMyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICNkYXNoYm9hcmQtYW5hbHl0aWNzIC5jb250ZW50IC5yaWdodCB7XG4gICAgZmxleDogMSAwIDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgI2Rhc2hib2FyZC1hbmFseXRpY3MgLmNvbnRlbnQgLnJpZ2h0IC5mdXNlLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbn0iLCIvLyBNZWRpYSBzdGVwIGJyZWFrcG9pbnQgbWl4aW4gYmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCBsaWJcclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgICB4czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJyxcclxuICAgIHNtOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KScsXHJcbiAgICBtZDogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJyxcclxuICAgIGxnOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJyxcclxuICAgIHhsOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpJyxcclxuICAgIGx0LXNtOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCknLFxyXG4gICAgbHQtbWQ6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KScsXHJcbiAgICBsdC1sZzogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KScsXHJcbiAgICBsdC14bDogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KScsXHJcbiAgICBndC14czogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpJyxcclxuICAgIGd0LXNtOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCknLFxyXG4gICAgZ3QtbWQ6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCknLFxyXG4gICAgZ3QtbGc6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCknXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vLyBSZS1tYXAgdGhlIGJyZWFrcG9pbnRzIGZvciB0aGUgaGVscGVyIGNsYXNzZXNcclxuJGhlbHBlci1icmVha3BvaW50czogKFxyXG4gICAgeHM6IG51bGwsXHJcbiAgICBzbTogJ2d0LXhzJyxcclxuICAgIG1kOiAnZ3Qtc20nLFxyXG4gICAgbGc6ICdndC1tZCcsXHJcbiAgICB4bDogJ2d0LWxnJ1xyXG4pO1xyXG5cclxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQoJGJyZWFrcG9pbnROYW1lKSB7XHJcblxyXG4gICAgJG1lZGlhUXVlcnk6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludE5hbWUpO1xyXG5cclxuICAgIEBpZiAoJG1lZGlhUXVlcnkgPT0gbnVsbCkge1xyXG4gICAgICAgIEBjb250ZW50XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAbWVkaWEgI3skbWVkaWFRdWVyeX0ge1xyXG4gICAgICAgICAgICBAY29udGVudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"],
      encapsulation: 2,
      data: {
        animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'analytics-dashboard',
          templateUrl: './analytics.component.html',
          styleUrls: ['./analytics.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }]
      }], function () {
        return [{
          type: app_main_apps_dashboards_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsDashboardService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/dashboards/analytics/analytics.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/main/apps/dashboards/analytics/analytics.module.ts ***!
    \********************************************************************/

  /*! exports provided: AnalyticsDashboardModule */

  /***/
  function srcAppMainAppsDashboardsAnalyticsAnalyticsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsDashboardModule", function () {
      return AnalyticsDashboardModule;
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


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @fuse/components/widget/widget.module */
    "./src/@fuse/components/widget/widget.module.ts");
    /* harmony import */


    var app_main_apps_dashboards_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! app/main/apps/dashboards/analytics/analytics.component */
    "./src/app/main/apps/dashboards/analytics/analytics.component.ts");
    /* harmony import */


    var app_main_apps_dashboards_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! app/main/apps/dashboards/analytics/analytics.service */
    "./src/app/main/apps/dashboards/analytics/analytics.service.ts");
    /* harmony import */


    var app_main_pages_authentication_login_2_login_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! app/main/pages/authentication/login-2/login.service */
    "./src/app/main/pages/authentication/login-2/login.service.ts");

    var routes = [{
      path: '**',
      component: app_main_apps_dashboards_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_13__["AnalyticsDashboardComponent"],
      resolve: {
        data: app_main_apps_dashboards_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_14__["AnalyticsDashboardService"]
      }
    }];

    var AnalyticsDashboardModule = function AnalyticsDashboardModule() {
      _classCallCheck(this, AnalyticsDashboardModule);
    };

    AnalyticsDashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AnalyticsDashboardModule
    });
    AnalyticsDashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AnalyticsDashboardModule_Factory(t) {
        return new (t || AnalyticsDashboardModule)();
      },
      providers: [app_main_apps_dashboards_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_14__["AnalyticsDashboardService"], app_main_pages_authentication_login_2_login_service__WEBPACK_IMPORTED_MODULE_15__["LoginService"]],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
      }), ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__["FuseSharedModule"], _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_12__["FuseWidgetModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnalyticsDashboardModule, {
        declarations: [app_main_apps_dashboards_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_13__["AnalyticsDashboardComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__["FuseSharedModule"], _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_12__["FuseWidgetModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsDashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [app_main_apps_dashboards_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_13__["AnalyticsDashboardComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
          }), ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["NgxChartsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__["FuseSharedModule"], _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_12__["FuseWidgetModule"]],
          providers: [app_main_apps_dashboards_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_14__["AnalyticsDashboardService"], app_main_pages_authentication_login_2_login_service__WEBPACK_IMPORTED_MODULE_15__["LoginService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/apps/dashboards/analytics/analytics.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/main/apps/dashboards/analytics/analytics.service.ts ***!
    \*********************************************************************/

  /*! exports provided: AnalyticsDashboardService */

  /***/
  function srcAppMainAppsDashboardsAnalyticsAnalyticsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsDashboardService", function () {
      return AnalyticsDashboardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var app_main_pages_authentication_login_2_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/main/pages/authentication/login-2/login.service */
    "./src/app/main/pages/authentication/login-2/login.service.ts");

    var AnalyticsDashboardService =
    /*#__PURE__*/
    function () {
      /**
       * Constructor
       *
       * @param {HttpClient} _httpClient
       */
      function AnalyticsDashboardService(_httpClient, _loginService) {
        _classCallCheck(this, AnalyticsDashboardService);

        this._httpClient = _httpClient;
        this._loginService = _loginService;
      }
      /**
       * Resolver
       *
       * @param {ActivatedRouteSnapshot} route
       * @param {RouterStateSnapshot} state
       * @returns {Observable<any> | Promise<any> | any}
       */


      _createClass(AnalyticsDashboardService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var _this7 = this;

          return new Promise(function (resolve, reject) {
            Promise.all([_this7.getWidgets()]).then(function () {
              resolve();
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
          var _this8 = this;

          return new Promise(function (resolve, reject) {
            _this8._httpClient.get('api/analytics-dashboard-widgets').subscribe(function (response) {
              _this8.widgets = response;
              resolve(_this8.getHistory(response));
            }, reject);
          });
        }
      }, {
        key: "getHistory",
        value: function getHistory(elements) {
          var _this9 = this;

          var token = this._loginService.getToken();

          var idCustomer = this._loginService.getId();

          var currentYear = new Date().getFullYear();
          var currentMont = new Date().getMonth();
          var query = encodeURI("Select Year, Mes, Consulta_Total from Historico_Consulta where Year in (".concat(currentYear - 2, ",").concat(currentYear - 1, ",").concat(currentYear, ") and R15746111 = ").concat(idCustomer, " order by Year, Mes")); // and Fecha_Resultado > yyyy - mm - dd(1) and Fecha_Resultado < yyyy - mm - dd(2)`);

          var url = "".concat(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url, "rest/api/selectQuery?maxRows=36&query=") + query + "&sessionId=" + token + "&output=json";
          var totalVisits = 0;
          var ant = 0;
          var act = 0;
          var inc = 0;
          return new Promise(function (resolve, reject) {
            _this9._httpClient.get(url) //'api/e-commerce-products')
            .subscribe(function (response) {
              var major = 0;
              var total = 0;
              var wTotal = [];

              if (response[0]) {
                for (var i = 0; i < response.length; i++) {
                  if (response[i]) {
                    var year = response[i][0];
                    var month = response[i][1] - 1;
                    var value = response[i][2];
                    major = value > major ? value : major;
                    elements['widget1']['datasets'][year.toString()][0].data[month] = value;
                    wTotal.push(value);

                    if (response[i][1] - 1 <= currentMont && year > currentYear - 2) {
                      totalVisits += value;
                      ant += year == currentYear - 1 ? value : 0;
                      act += year == currentYear ? value : 0;
                    } //total = total + response[i][2];

                  }
                }
              }

              inc = act - ant;
              var porc = inc / act;
              var totInc = Math.round(porc * 100);
              elements['widget4']['visits']['value'] = totalVisits;
              elements['widget4']['visits']['ofTarget'] = totInc;
              elements['widget4']['datasets'][0]['data'] = [ant, act];
              elements['widget4']['labels'] = [currentYear - 1, currentYear];
              elements['widget4']['options']['scales']['yAxes'][0]['ticks']['max'] = ant > act ? ant : act;
              console.log(elements);
              elements['widget1']['options']['scales']['yAxes'][0]['ticks']['max'] = major;
              elements['widget3']['impressions']['value'] = total;
              elements['widget3']['datasets'][0]['data'] = wTotal;
              resolve(_this9.getTotal(elements));
            }, reject);
          });
        }
      }, {
        key: "getTotal",
        value: function getTotal(elements) {
          var _this10 = this;

          var token = this._loginService.getToken();

          var idCustomer = this._loginService.getId();

          var query = encodeURI("SELECT count(id) FROM Consulta where R15590415 = ".concat(idCustomer)); // and Fecha_Resultado > yyyy - mm - dd(1) and Fecha_Resultado < yyyy - mm - dd(2)`);

          var url = "".concat(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url, "rest/api/selectQuery?maxRows=36&query=") + query + "&sessionId=" + token + "&output=json";
          return new Promise(function (resolve, reject) {
            _this10._httpClient.get(url) //'api/e-commerce-products')
            .subscribe(function (response) {
              if (response[0]) {
                elements['widget3']['impressions']['value'] = response[0][0];
              }

              resolve(elements);
            }, reject);
          });
        }
      }]);

      return AnalyticsDashboardService;
    }();

    AnalyticsDashboardService.ɵfac = function AnalyticsDashboardService_Factory(t) {
      return new (t || AnalyticsDashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_main_pages_authentication_login_2_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]));
    };

    AnalyticsDashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnalyticsDashboardService,
      factory: AnalyticsDashboardService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsDashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: app_main_pages_authentication_login_2_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=dashboards-analytics-analytics-module-es5.js.map