var zone_sheet;
(() => {
  var __webpack_modules__ = {
      463: function (e) {
        var t;
        e.exports =
          ((function () {
            var e = {
                765: function (e, t) {
                  var o;
                  (o = function (e) {
                    e.version = "1.0.2";
                    var t = Math;
                    function o(e, t) {
                      for (var o = 0, n = 0; o < e.length; ++o)
                        n = t * n + e[o];
                      return n;
                    }
                    function n(e, t, o, n, r) {
                      if (0 === t) return o;
                      if (1 === t) return n;
                      for (var l = 2 / e, i = n, s = 1; s < t; ++s)
                        (i = n * s * l + r * o), (o = n), (n = i);
                      return i;
                    }
                    function r(e, t, o, r, l) {
                      return function (o, i) {
                        if (r) {
                          if (0 === o) return 1 == r ? -1 / 0 : 1 / 0;
                          if (o < 0) return NaN;
                        }
                        return 0 === i
                          ? e(o)
                          : 1 === i
                          ? t(o)
                          : i < 0
                          ? NaN
                          : n(o, (i |= 0), e(o), t(o), l);
                      };
                    }
                    var l,
                      i,
                      s,
                      a,
                      u,
                      c,
                      f,
                      d,
                      p,
                      b,
                      j,
                      h,
                      g,
                      m = (function () {
                        var e = 0.636619772,
                          r = [
                            57568490574, -13362590354, 651619640.7,
                            -11214424.18, 77392.33017, -184.9052456,
                          ].reverse(),
                          l = [
                            57568490411, 1029532985, 9494680.718, 59272.64853,
                            267.8532712, 1,
                          ].reverse(),
                          i = [
                            1, -0.001098628627, 2734510407e-14, -2073370639e-15,
                            2.093887211e-7,
                          ].reverse(),
                          s = [
                            -0.01562499995, 0.0001430488765, -6911147651e-15,
                            7.621095161e-7, -9.34935152e-8,
                          ].reverse();
                        function a(n) {
                          var a = 0,
                            u = 0,
                            c = 0,
                            f = n * n;
                          if (n < 8) a = (u = o(r, f)) / (c = o(l, f));
                          else {
                            var d = n - 0.785398164;
                            (u = o(i, (f = 64 / f))),
                              (c = o(s, f)),
                              (a =
                                t.sqrt(e / n) *
                                (t.cos(d) * u - (t.sin(d) * c * 8) / n));
                          }
                          return a;
                        }
                        var u = [
                            72362614232, -7895059235, 242396853.1, -2972611.439,
                            15704.4826, -30.16036606,
                          ].reverse(),
                          c = [
                            144725228442, 2300535178, 18583304.74, 99447.43394,
                            376.9991397, 1,
                          ].reverse(),
                          f = [
                            1, 0.00183105, -3516396496e-14, 2457520174e-15,
                            -2.40337019e-7,
                          ].reverse(),
                          d = [
                            0.04687499995, -0.0002002690873, 8449199096e-15,
                            -8.8228987e-7, 1.05787412e-7,
                          ].reverse();
                        function p(n) {
                          var r = 0,
                            l = 0,
                            i = 0,
                            s = n * n,
                            a = t.abs(n) - 2.356194491;
                          return (
                            Math.abs(n) < 8
                              ? (r = (l = n * o(u, s)) / (i = o(c, s)))
                              : ((l = o(f, (s = 64 / s))),
                                (i = o(d, s)),
                                (r =
                                  t.sqrt(e / t.abs(n)) *
                                  (t.cos(a) * l -
                                    (t.sin(a) * i * 8) / t.abs(n))),
                                n < 0 && (r = -r)),
                            r
                          );
                        }
                        return function e(o, r) {
                          if (((r = Math.round(r)), !isFinite(o)))
                            return isNaN(o) ? o : 0;
                          if (r < 0) return (r % 2 ? -1 : 1) * e(o, -r);
                          if (o < 0) return (r % 2 ? -1 : 1) * e(-o, r);
                          if (0 === r) return a(o);
                          if (1 === r) return p(o);
                          if (0 === o) return 0;
                          var l = 0;
                          if (o > r) l = n(o, r, a(o), p(o), -1);
                          else {
                            for (
                              var i = !1,
                                s = 0,
                                u = 0,
                                c = 1,
                                f = 0,
                                d = 2 / o,
                                b =
                                  2 *
                                  t.floor((r + t.floor(t.sqrt(40 * r))) / 2);
                              b > 0;
                              b--
                            )
                              (f = b * d * c - s),
                                (s = c),
                                (c = f),
                                t.abs(c) > 1e10 &&
                                  ((c *= 1e-10),
                                  (s *= 1e-10),
                                  (l *= 1e-10),
                                  (u *= 1e-10)),
                                i && (u += c),
                                (i = !i),
                                b == r && (l = s);
                            l /= u = 2 * u - c;
                          }
                          return l;
                        };
                      })(),
                      v =
                        ((l = 0.636619772),
                        (i = [
                          -2957821389, 7062834065, -512359803.6, 10879881.29,
                          -86327.92757, 228.4622733,
                        ].reverse()),
                        (s = [
                          40076544269, 745249964.8, 7189466.438, 47447.2647,
                          226.1030244, 1,
                        ].reverse()),
                        (a = [
                          1, -0.001098628627, 2734510407e-14, -2073370639e-15,
                          2.093887211e-7,
                        ].reverse()),
                        (u = [
                          -0.01562499995, 0.0001430488765, -6911147651e-15,
                          7.621095161e-7, -9.34945152e-8,
                        ].reverse()),
                        (c = [
                          -4900604943e3, 127527439e4, -51534381390, 734926455.1,
                          -4237922.726, 8511.937935,
                        ].reverse()),
                        (f = [
                          249958057e5, 424441966400, 3733650367, 22459040.02,
                          102042.605, 354.9632885, 1,
                        ].reverse()),
                        (d = [
                          1, 0.00183105, -3516396496e-14, 2457520174e-15,
                          -2.40337019e-7,
                        ].reverse()),
                        (p = [
                          0.04687499995, -0.0002002690873, 8449199096e-15,
                          -8.8228987e-7, 1.05787412e-7,
                        ].reverse()),
                        r(
                          function (e) {
                            var n = 0,
                              r = 0,
                              c = 0,
                              f = e * e,
                              d = e - 0.785398164;
                            return (
                              e < 8
                                ? (n =
                                    (r = o(i, f)) / (c = o(s, f)) +
                                    l * m(e, 0) * t.log(e))
                                : ((r = o(a, (f = 64 / f))),
                                  (c = o(u, f)),
                                  (n =
                                    t.sqrt(l / e) *
                                    (t.sin(d) * r + (t.cos(d) * c * 8) / e))),
                              n
                            );
                          },
                          function (e) {
                            var n = 0,
                              r = 0,
                              i = 0,
                              s = e * e,
                              a = e - 2.356194491;
                            return (
                              e < 8
                                ? (n =
                                    (r = e * o(c, s)) / (i = o(f, s)) +
                                    l * (m(e, 1) * t.log(e) - 1 / e))
                                : ((r = o(d, (s = 64 / s))),
                                  (i = o(p, s)),
                                  (n =
                                    t.sqrt(l / e) *
                                    (t.sin(a) * r + (t.cos(a) * i * 8) / e))),
                              n
                            );
                          },
                          0,
                          1,
                          -1
                        )),
                      y =
                        ((b = [
                          1, 3.5156229, 3.0899424, 1.2067492, 0.2659732,
                          0.0360768, 0.0045813,
                        ].reverse()),
                        (j = [
                          0.39894228, 0.01328592, 0.00225319, -0.00157565,
                          0.00916281, -0.02057706, 0.02635537, -0.01647633,
                          0.00392377,
                        ].reverse()),
                        (h = [
                          0.5, 0.87890594, 0.51498869, 0.15084934, 0.02658733,
                          0.00301532, 32411e-8,
                        ].reverse()),
                        (g = [
                          0.39894228, -0.03988024, -0.00362018, 0.00163801,
                          -0.01031555, 0.02282967, -0.02895312, 0.01787654,
                          -0.00420059,
                        ].reverse()),
                        function e(n, r) {
                          if (0 === (r = Math.round(r)))
                            return (function (e) {
                              return e <= 3.75
                                ? o(b, (e * e) / 14.0625)
                                : (t.exp(t.abs(e)) / t.sqrt(t.abs(e))) *
                                    o(j, 3.75 / t.abs(e));
                            })(n);
                          if (1 === r)
                            return (function (e) {
                              return e < 3.75
                                ? e * o(h, (e * e) / 14.0625)
                                : (((e < 0 ? -1 : 1) * t.exp(t.abs(e))) /
                                    t.sqrt(t.abs(e))) *
                                    o(g, 3.75 / t.abs(e));
                            })(n);
                          if (r < 0) return NaN;
                          if (0 === t.abs(n)) return 0;
                          if (n == 1 / 0) return 1 / 0;
                          var l,
                            i = 0,
                            s = 2 / t.abs(n),
                            a = 0,
                            u = 1,
                            c = 0;
                          for (
                            l = 2 * t.round((r + t.round(t.sqrt(40 * r))) / 2);
                            l > 0;
                            l--
                          )
                            (c = l * s * u + a),
                              (a = u),
                              (u = c),
                              t.abs(u) > 1e10 &&
                                ((u *= 1e-10), (a *= 1e-10), (i *= 1e-10)),
                              l == r && (i = a);
                          return (i *= e(n, 0) / u), n < 0 && r % 2 ? -i : i;
                        }),
                      C = (function () {
                        var e = [
                            -0.57721566, 0.4227842, 0.23069756, 0.0348859,
                            0.00262698, 1075e-7, 74e-7,
                          ].reverse(),
                          n = [
                            1.25331414, -0.07832358, 0.02189568, -0.01062446,
                            0.00587872, -0.0025154, 53208e-8,
                          ].reverse(),
                          l = [
                            1, 0.15443144, -0.67278579, -0.18156897,
                            -0.01919402, -0.00110404, -4686e-8,
                          ].reverse(),
                          i = [
                            1.25331414, 0.23498619, -0.0365562, 0.01504268,
                            -0.00780353, 0.00325614, -68245e-8,
                          ].reverse();
                        return r(
                          function (r) {
                            return r <= 2
                              ? -t.log(r / 2) * y(r, 0) + o(e, (r * r) / 4)
                              : (t.exp(-r) / t.sqrt(r)) * o(n, 2 / r);
                          },
                          function (e) {
                            return e <= 2
                              ? t.log(e / 2) * y(e, 1) +
                                  (1 / e) * o(l, (e * e) / 4)
                              : (t.exp(-e) / t.sqrt(e)) * o(i, 2 / e);
                          },
                          0,
                          2,
                          1
                        );
                      })();
                    (e.besselj = m),
                      (e.bessely = v),
                      (e.besseli = y),
                      (e.besselk = C);
                  }),
                    "undefined" == typeof DO_NOT_EXPORT_BESSEL ? o(t) : o({});
                },
                162: function (e) {
                  var t;
                  e.exports =
                    ((t = (function (e, t) {
                      var o = Array.prototype.concat,
                        n = Array.prototype.slice,
                        r = Object.prototype.toString;
                      function l(t, o) {
                        var n = t > o ? t : o;
                        return e.pow(
                          10,
                          17 - ~~(e.log(n > 0 ? n : -n) * e.LOG10E)
                        );
                      }
                      var i =
                        Array.isArray ||
                        function (e) {
                          return "[object Array]" === r.call(e);
                        };
                      function s(e) {
                        return "[object Function]" === r.call(e);
                      }
                      function a(e) {
                        return "number" == typeof e && e - e == 0;
                      }
                      function u() {
                        return new u._init(arguments);
                      }
                      function c() {
                        return 0;
                      }
                      function f() {
                        return 1;
                      }
                      function d(e, t) {
                        return e === t ? 1 : 0;
                      }
                      (u.fn = u.prototype),
                        (u._init = function (e) {
                          if (i(e[0]))
                            if (i(e[0][0])) {
                              s(e[1]) && (e[0] = u.map(e[0], e[1]));
                              for (var t = 0; t < e[0].length; t++)
                                this[t] = e[0][t];
                              this.length = e[0].length;
                            } else
                              (this[0] = s(e[1]) ? u.map(e[0], e[1]) : e[0]),
                                (this.length = 1);
                          else if (a(e[0]))
                            (this[0] = u.seq.apply(null, e)), (this.length = 1);
                          else {
                            if (e[0] instanceof u) return u(e[0].toArray());
                            (this[0] = []), (this.length = 1);
                          }
                          return this;
                        }),
                        (u._init.prototype = u.prototype),
                        (u._init.constructor = u),
                        (u.utils = {
                          calcRdx: l,
                          isArray: i,
                          isFunction: s,
                          isNumber: a,
                          toVector: function (e) {
                            return o.apply([], e);
                          },
                        }),
                        (u._random_fn = e.random),
                        (u.setRandom = function (e) {
                          if ("function" != typeof e)
                            throw new TypeError("fn is not a function");
                          u._random_fn = e;
                        }),
                        (u.extend = function (e) {
                          var t, o;
                          if (1 === arguments.length) {
                            for (o in e) u[o] = e[o];
                            return this;
                          }
                          for (t = 1; t < arguments.length; t++)
                            for (o in arguments[t]) e[o] = arguments[t][o];
                          return e;
                        }),
                        (u.rows = function (e) {
                          return e.length || 1;
                        }),
                        (u.cols = function (e) {
                          return e[0].length || 1;
                        }),
                        (u.dimensions = function (e) {
                          return { rows: u.rows(e), cols: u.cols(e) };
                        }),
                        (u.row = function (e, t) {
                          return i(t)
                            ? t.map(function (t) {
                                return u.row(e, t);
                              })
                            : e[t];
                        }),
                        (u.rowa = function (e, t) {
                          return u.row(e, t);
                        }),
                        (u.col = function (e, t) {
                          if (i(t)) {
                            var o = u.arange(e.length).map(function () {
                              return new Array(t.length);
                            });
                            return (
                              t.forEach(function (t, n) {
                                u.arange(e.length).forEach(function (r) {
                                  o[r][n] = e[r][t];
                                });
                              }),
                              o
                            );
                          }
                          for (
                            var n = new Array(e.length), r = 0;
                            r < e.length;
                            r++
                          )
                            n[r] = [e[r][t]];
                          return n;
                        }),
                        (u.cola = function (e, t) {
                          return u.col(e, t).map(function (e) {
                            return e[0];
                          });
                        }),
                        (u.diag = function (e) {
                          for (
                            var t = u.rows(e), o = new Array(t), n = 0;
                            n < t;
                            n++
                          )
                            o[n] = [e[n][n]];
                          return o;
                        }),
                        (u.antidiag = function (e) {
                          for (
                            var t = u.rows(e) - 1, o = new Array(t), n = 0;
                            t >= 0;
                            t--, n++
                          )
                            o[n] = [e[n][t]];
                          return o;
                        }),
                        (u.transpose = function (e) {
                          var t,
                            o,
                            n,
                            r,
                            l,
                            s = [];
                          for (
                            i(e[0]) || (e = [e]),
                              o = e.length,
                              n = e[0].length,
                              l = 0;
                            l < n;
                            l++
                          ) {
                            for (t = new Array(o), r = 0; r < o; r++)
                              t[r] = e[r][l];
                            s.push(t);
                          }
                          return 1 === s.length ? s[0] : s;
                        }),
                        (u.map = function (e, t, o) {
                          var n, r, l, s, a;
                          for (
                            i(e[0]) || (e = [e]),
                              r = e.length,
                              l = e[0].length,
                              s = o ? e : new Array(r),
                              n = 0;
                            n < r;
                            n++
                          )
                            for (
                              s[n] || (s[n] = new Array(l)), a = 0;
                              a < l;
                              a++
                            )
                              s[n][a] = t(e[n][a], n, a);
                          return 1 === s.length ? s[0] : s;
                        }),
                        (u.cumreduce = function (e, t, o) {
                          var n, r, l, s, a;
                          for (
                            i(e[0]) || (e = [e]),
                              r = e.length,
                              l = e[0].length,
                              s = o ? e : new Array(r),
                              n = 0;
                            n < r;
                            n++
                          )
                            for (
                              s[n] || (s[n] = new Array(l)),
                                l > 0 && (s[n][0] = e[n][0]),
                                a = 1;
                              a < l;
                              a++
                            )
                              s[n][a] = t(s[n][a - 1], e[n][a]);
                          return 1 === s.length ? s[0] : s;
                        }),
                        (u.alter = function (e, t) {
                          return u.map(e, t, !0);
                        }),
                        (u.create = function (e, t, o) {
                          var n,
                            r,
                            l = new Array(e);
                          for (s(t) && ((o = t), (t = e)), n = 0; n < e; n++)
                            for (l[n] = new Array(t), r = 0; r < t; r++)
                              l[n][r] = o(n, r);
                          return l;
                        }),
                        (u.zeros = function (e, t) {
                          return a(t) || (t = e), u.create(e, t, c);
                        }),
                        (u.ones = function (e, t) {
                          return a(t) || (t = e), u.create(e, t, f);
                        }),
                        (u.rand = function (e, t) {
                          return a(t) || (t = e), u.create(e, t, u._random_fn);
                        }),
                        (u.identity = function (e, t) {
                          return a(t) || (t = e), u.create(e, t, d);
                        }),
                        (u.symmetric = function (e) {
                          var t,
                            o,
                            n = e.length;
                          if (e.length !== e[0].length) return !1;
                          for (t = 0; t < n; t++)
                            for (o = 0; o < n; o++)
                              if (e[o][t] !== e[t][o]) return !1;
                          return !0;
                        }),
                        (u.clear = function (e) {
                          return u.alter(e, c);
                        }),
                        (u.seq = function (e, t, o, n) {
                          s(n) || (n = !1);
                          var r,
                            i = [],
                            a = l(e, t),
                            u = (t * a - e * a) / ((o - 1) * a),
                            c = e;
                          for (
                            r = 0;
                            c <= t && r < o;
                            c = (e * a + u * a * ++r) / a
                          )
                            i.push(n ? n(c, r) : c);
                          return i;
                        }),
                        (u.arange = function (e, o, n) {
                          var r,
                            l = [];
                          if (
                            ((n = n || 1),
                            o === t && ((o = e), (e = 0)),
                            e === o || 0 === n)
                          )
                            return [];
                          if (e < o && n < 0) return [];
                          if (e > o && n > 0) return [];
                          if (n > 0) for (r = e; r < o; r += n) l.push(r);
                          else for (r = e; r > o; r += n) l.push(r);
                          return l;
                        }),
                        (u.slice = (function () {
                          function e(e, o, n, r) {
                            var l,
                              i = [],
                              s = e.length;
                            if (o === t && n === t && r === t) return u.copy(e);
                            if (
                              ((r = r || 1),
                              (o = (o = o || 0) >= 0 ? o : s + o) ===
                                (n = (n = n || e.length) >= 0 ? n : s + n) ||
                                0 === r)
                            )
                              return [];
                            if (o < n && r < 0) return [];
                            if (o > n && r > 0) return [];
                            if (r > 0) for (l = o; l < n; l += r) i.push(e[l]);
                            else for (l = o; l > n; l += r) i.push(e[l]);
                            return i;
                          }
                          return function (t, o) {
                            var n, r;
                            return a((o = o || {}).row)
                              ? a(o.col)
                                ? t[o.row][o.col]
                                : e(
                                    u.rowa(t, o.row),
                                    (n = o.col || {}).start,
                                    n.end,
                                    n.step
                                  )
                              : a(o.col)
                              ? e(
                                  u.cola(t, o.col),
                                  (r = o.row || {}).start,
                                  r.end,
                                  r.step
                                )
                              : ((r = o.row || {}),
                                (n = o.col || {}),
                                e(t, r.start, r.end, r.step).map(function (t) {
                                  return e(t, n.start, n.end, n.step);
                                }));
                          };
                        })()),
                        (u.sliceAssign = function (o, n, r) {
                          var l, i;
                          if (a(n.row)) {
                            if (a(n.col)) return (o[n.row][n.col] = r);
                            (n.col = n.col || {}),
                              (n.col.start = n.col.start || 0),
                              (n.col.end = n.col.end || o[0].length),
                              (n.col.step = n.col.step || 1),
                              (l = u.arange(
                                n.col.start,
                                e.min(o.length, n.col.end),
                                n.col.step
                              ));
                            var s = n.row;
                            return (
                              l.forEach(function (e, t) {
                                o[s][e] = r[t];
                              }),
                              o
                            );
                          }
                          if (a(n.col)) {
                            (n.row = n.row || {}),
                              (n.row.start = n.row.start || 0),
                              (n.row.end = n.row.end || o.length),
                              (n.row.step = n.row.step || 1),
                              (i = u.arange(
                                n.row.start,
                                e.min(o[0].length, n.row.end),
                                n.row.step
                              ));
                            var c = n.col;
                            return (
                              i.forEach(function (e, t) {
                                o[e][c] = r[t];
                              }),
                              o
                            );
                          }
                          return (
                            r[0].length === t && (r = [r]),
                            (n.row.start = n.row.start || 0),
                            (n.row.end = n.row.end || o.length),
                            (n.row.step = n.row.step || 1),
                            (n.col.start = n.col.start || 0),
                            (n.col.end = n.col.end || o[0].length),
                            (n.col.step = n.col.step || 1),
                            (i = u.arange(
                              n.row.start,
                              e.min(o.length, n.row.end),
                              n.row.step
                            )),
                            (l = u.arange(
                              n.col.start,
                              e.min(o[0].length, n.col.end),
                              n.col.step
                            )),
                            i.forEach(function (e, t) {
                              l.forEach(function (n, l) {
                                o[e][n] = r[t][l];
                              });
                            }),
                            o
                          );
                        }),
                        (u.diagonal = function (e) {
                          var t = u.zeros(e.length, e.length);
                          return (
                            e.forEach(function (e, o) {
                              t[o][o] = e;
                            }),
                            t
                          );
                        }),
                        (u.copy = function (e) {
                          return e.map(function (e) {
                            return a(e)
                              ? e
                              : e.map(function (e) {
                                  return e;
                                });
                          });
                        });
                      var p = u.prototype;
                      return (
                        (p.length = 0),
                        (p.push = Array.prototype.push),
                        (p.sort = Array.prototype.sort),
                        (p.splice = Array.prototype.splice),
                        (p.slice = Array.prototype.slice),
                        (p.toArray = function () {
                          return this.length > 1
                            ? n.call(this)
                            : n.call(this)[0];
                        }),
                        (p.map = function (e, t) {
                          return u(u.map(this, e, t));
                        }),
                        (p.cumreduce = function (e, t) {
                          return u(u.cumreduce(this, e, t));
                        }),
                        (p.alter = function (e) {
                          return u.alter(this, e), this;
                        }),
                        (function (e) {
                          for (var t = 0; t < e.length; t++)
                            !(function (e) {
                              p[e] = function (t) {
                                var o,
                                  n = this;
                                return t
                                  ? (setTimeout(function () {
                                      t.call(n, p[e].call(n));
                                    }),
                                    this)
                                  : ((o = u[e](this)), i(o) ? u(o) : o);
                              };
                            })(e[t]);
                        })(
                          "transpose clear symmetric rows cols dimensions diag antidiag".split(
                            " "
                          )
                        ),
                        (function (e) {
                          for (var t = 0; t < e.length; t++)
                            !(function (e) {
                              p[e] = function (t, o) {
                                var n = this;
                                return o
                                  ? (setTimeout(function () {
                                      o.call(n, p[e].call(n, t));
                                    }),
                                    this)
                                  : u(u[e](this, t));
                              };
                            })(e[t]);
                        })("row col".split(" ")),
                        (function (e) {
                          for (var t = 0; t < e.length; t++)
                            !(function (e) {
                              p[e] = function () {
                                return u(u[e].apply(null, arguments));
                              };
                            })(e[t]);
                        })("create zeros ones rand identity".split(" ")),
                        u
                      );
                    })(Math)),
                    (function (e, t) {
                      var o = e.utils.isFunction;
                      function n(e, t) {
                        return e - t;
                      }
                      function r(e, o, n) {
                        return t.max(o, t.min(e, n));
                      }
                      (e.sum = function (e) {
                        for (var t = 0, o = e.length; --o >= 0; ) t += e[o];
                        return t;
                      }),
                        (e.sumsqrd = function (e) {
                          for (var t = 0, o = e.length; --o >= 0; )
                            t += e[o] * e[o];
                          return t;
                        }),
                        (e.sumsqerr = function (t) {
                          for (
                            var o, n = e.mean(t), r = 0, l = t.length;
                            --l >= 0;

                          )
                            r += (o = t[l] - n) * o;
                          return r;
                        }),
                        (e.sumrow = function (e) {
                          for (var t = 0, o = e.length; --o >= 0; ) t += e[o];
                          return t;
                        }),
                        (e.product = function (e) {
                          for (var t = 1, o = e.length; --o >= 0; ) t *= e[o];
                          return t;
                        }),
                        (e.min = function (e) {
                          for (var t = e[0], o = 0; ++o < e.length; )
                            e[o] < t && (t = e[o]);
                          return t;
                        }),
                        (e.max = function (e) {
                          for (var t = e[0], o = 0; ++o < e.length; )
                            e[o] > t && (t = e[o]);
                          return t;
                        }),
                        (e.unique = function (e) {
                          for (var t = {}, o = [], n = 0; n < e.length; n++)
                            t[e[n]] || ((t[e[n]] = !0), o.push(e[n]));
                          return o;
                        }),
                        (e.mean = function (t) {
                          return e.sum(t) / t.length;
                        }),
                        (e.meansqerr = function (t) {
                          return e.sumsqerr(t) / t.length;
                        }),
                        (e.geomean = function (o) {
                          var n = o.map(t.log),
                            r = e.mean(n);
                          return t.exp(r);
                        }),
                        (e.median = function (e) {
                          var t = e.length,
                            o = e.slice().sort(n);
                          return 1 & t
                            ? o[(t / 2) | 0]
                            : (o[t / 2 - 1] + o[t / 2]) / 2;
                        }),
                        (e.cumsum = function (t) {
                          return e.cumreduce(t, function (e, t) {
                            return e + t;
                          });
                        }),
                        (e.cumprod = function (t) {
                          return e.cumreduce(t, function (e, t) {
                            return e * t;
                          });
                        }),
                        (e.diff = function (e) {
                          var t,
                            o = [],
                            n = e.length;
                          for (t = 1; t < n; t++) o.push(e[t] - e[t - 1]);
                          return o;
                        }),
                        (e.rank = function (e) {
                          var t,
                            o = [],
                            r = {};
                          for (t = 0; t < e.length; t++)
                            r[(a = e[t])] ? r[a]++ : ((r[a] = 1), o.push(a));
                          var l = o.sort(n),
                            i = {},
                            s = 1;
                          for (t = 0; t < l.length; t++) {
                            var a,
                              u = r[(a = l[t])],
                              c = (s + (s + u - 1)) / 2;
                            (i[a] = c), (s += u);
                          }
                          return e.map(function (e) {
                            return i[e];
                          });
                        }),
                        (e.mode = function (e) {
                          var t,
                            o = e.length,
                            r = e.slice().sort(n),
                            l = 1,
                            i = 0,
                            s = 0,
                            a = [];
                          for (t = 0; t < o; t++)
                            r[t] === r[t + 1]
                              ? l++
                              : (l > i
                                  ? ((a = [r[t]]), (i = l), (s = 0))
                                  : l === i && (a.push(r[t]), s++),
                                (l = 1));
                          return 0 === s ? a[0] : a;
                        }),
                        (e.range = function (t) {
                          return e.max(t) - e.min(t);
                        }),
                        (e.variance = function (t, o) {
                          return e.sumsqerr(t) / (t.length - (o ? 1 : 0));
                        }),
                        (e.pooledvariance = function (t) {
                          return (
                            t.reduce(function (t, o) {
                              return t + e.sumsqerr(o);
                            }, 0) /
                            (t.reduce(function (e, t) {
                              return e + t.length;
                            }, 0) -
                              t.length)
                          );
                        }),
                        (e.deviation = function (t) {
                          for (
                            var o = e.mean(t),
                              n = t.length,
                              r = new Array(n),
                              l = 0;
                            l < n;
                            l++
                          )
                            r[l] = t[l] - o;
                          return r;
                        }),
                        (e.stdev = function (o, n) {
                          return t.sqrt(e.variance(o, n));
                        }),
                        (e.pooledstdev = function (o) {
                          return t.sqrt(e.pooledvariance(o));
                        }),
                        (e.meandev = function (o) {
                          for (
                            var n = e.mean(o), r = [], l = o.length - 1;
                            l >= 0;
                            l--
                          )
                            r.push(t.abs(o[l] - n));
                          return e.mean(r);
                        }),
                        (e.meddev = function (o) {
                          for (
                            var n = e.median(o), r = [], l = o.length - 1;
                            l >= 0;
                            l--
                          )
                            r.push(t.abs(o[l] - n));
                          return e.median(r);
                        }),
                        (e.coeffvar = function (t) {
                          return e.stdev(t) / e.mean(t);
                        }),
                        (e.quartiles = function (e) {
                          var o = e.length,
                            r = e.slice().sort(n);
                          return [
                            r[t.round(o / 4) - 1],
                            r[t.round(o / 2) - 1],
                            r[t.round((3 * o) / 4) - 1],
                          ];
                        }),
                        (e.quantiles = function (e, o, l, i) {
                          var s,
                            a,
                            u,
                            c,
                            f,
                            d = e.slice().sort(n),
                            p = [o.length],
                            b = e.length;
                          for (
                            void 0 === l && (l = 3 / 8),
                              void 0 === i && (i = 3 / 8),
                              s = 0;
                            s < o.length;
                            s++
                          )
                            (u = b * (a = o[s]) + (l + a * (1 - l - i))),
                              (c = t.floor(r(u, 1, b - 1))),
                              (f = r(u - c, 0, 1)),
                              (p[s] = (1 - f) * d[c - 1] + f * d[c]);
                          return p;
                        }),
                        (e.percentile = function (e, t, o) {
                          var r = e.slice().sort(n),
                            l = t * (r.length + (o ? 1 : -1)) + (o ? 0 : 1),
                            i = parseInt(l),
                            s = l - i;
                          return i + 1 < r.length
                            ? r[i - 1] + s * (r[i] - r[i - 1])
                            : r[i - 1];
                        }),
                        (e.percentileOfScore = function (e, t, o) {
                          var n,
                            r,
                            l = 0,
                            i = e.length,
                            s = !1;
                          for ("strict" === o && (s = !0), r = 0; r < i; r++)
                            (n = e[r]), ((s && n < t) || (!s && n <= t)) && l++;
                          return l / i;
                        }),
                        (e.histogram = function (o, n) {
                          n = n || 4;
                          var r,
                            l = e.min(o),
                            i = (e.max(o) - l) / n,
                            s = o.length,
                            a = [];
                          for (r = 0; r < n; r++) a[r] = 0;
                          for (r = 0; r < s; r++)
                            a[t.min(t.floor((o[r] - l) / i), n - 1)] += 1;
                          return a;
                        }),
                        (e.covariance = function (t, o) {
                          var n,
                            r = e.mean(t),
                            l = e.mean(o),
                            i = t.length,
                            s = new Array(i);
                          for (n = 0; n < i; n++)
                            s[n] = (t[n] - r) * (o[n] - l);
                          return e.sum(s) / (i - 1);
                        }),
                        (e.corrcoeff = function (t, o) {
                          return (
                            e.covariance(t, o) / e.stdev(t, 1) / e.stdev(o, 1)
                          );
                        }),
                        (e.spearmancoeff = function (t, o) {
                          return (
                            (t = e.rank(t)), (o = e.rank(o)), e.corrcoeff(t, o)
                          );
                        }),
                        (e.stanMoment = function (o, n) {
                          for (
                            var r = e.mean(o),
                              l = e.stdev(o),
                              i = o.length,
                              s = 0,
                              a = 0;
                            a < i;
                            a++
                          )
                            s += t.pow((o[a] - r) / l, n);
                          return s / o.length;
                        }),
                        (e.skewness = function (t) {
                          return e.stanMoment(t, 3);
                        }),
                        (e.kurtosis = function (t) {
                          return e.stanMoment(t, 4) - 3;
                        });
                      var l = e.prototype;
                      !(function (t) {
                        for (var n = 0; n < t.length; n++)
                          !(function (t) {
                            l[t] = function (n, r) {
                              var i = [],
                                s = 0,
                                a = this;
                              if ((o(n) && ((r = n), (n = !1)), r))
                                return (
                                  setTimeout(function () {
                                    r.call(a, l[t].call(a, n));
                                  }),
                                  this
                                );
                              if (this.length > 1) {
                                for (
                                  a = !0 === n ? this : this.transpose();
                                  s < a.length;
                                  s++
                                )
                                  i[s] = e[t](a[s]);
                                return i;
                              }
                              return e[t](this[0], n);
                            };
                          })(t[n]);
                      })("cumsum cumprod".split(" ")),
                        (function (t) {
                          for (var n = 0; n < t.length; n++)
                            !(function (t) {
                              l[t] = function (n, r) {
                                var i = [],
                                  s = 0,
                                  a = this;
                                if ((o(n) && ((r = n), (n = !1)), r))
                                  return (
                                    setTimeout(function () {
                                      r.call(a, l[t].call(a, n));
                                    }),
                                    this
                                  );
                                if (this.length > 1) {
                                  for (
                                    "sumrow" !== t &&
                                    (a = !0 === n ? this : this.transpose());
                                    s < a.length;
                                    s++
                                  )
                                    i[s] = e[t](a[s]);
                                  return !0 === n
                                    ? e[t](e.utils.toVector(i))
                                    : i;
                                }
                                return e[t](this[0], n);
                              };
                            })(t[n]);
                        })(
                          "sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(
                            " "
                          )
                        ),
                        (function (t) {
                          for (var n = 0; n < t.length; n++)
                            !(function (t) {
                              l[t] = function () {
                                var n,
                                  r = [],
                                  i = 0,
                                  s = this,
                                  a = Array.prototype.slice.call(arguments);
                                if (o(a[a.length - 1])) {
                                  n = a[a.length - 1];
                                  var u = a.slice(0, a.length - 1);
                                  return (
                                    setTimeout(function () {
                                      n.call(s, l[t].apply(s, u));
                                    }),
                                    this
                                  );
                                }
                                n = void 0;
                                var c = function (o) {
                                  return e[t].apply(s, [o].concat(a));
                                };
                                if (this.length > 1) {
                                  for (s = s.transpose(); i < s.length; i++)
                                    r[i] = c(s[i]);
                                  return r;
                                }
                                return c(this[0]);
                              };
                            })(t[n]);
                        })("quantiles percentileOfScore".split(" "));
                    })(t, Math),
                    (function (e, t) {
                      (e.gammaln = function (e) {
                        var o,
                          n,
                          r,
                          l = 0,
                          i = [
                            76.18009172947146, -86.50532032941678,
                            24.01409824083091, -1.231739572450155,
                            0.001208650973866179, -5395239384953e-18,
                          ],
                          s = 1.000000000190015;
                        for (
                          r = (n = o = e) + 5.5, r -= (o + 0.5) * t.log(r);
                          l < 6;
                          l++
                        )
                          s += i[l] / ++n;
                        return t.log((2.5066282746310007 * s) / o) - r;
                      }),
                        (e.loggam = function (e) {
                          var o,
                            n,
                            r,
                            l,
                            i,
                            s,
                            a,
                            u = [
                              0.08333333333333333, -0.002777777777777778,
                              0.0007936507936507937, -0.0005952380952380952,
                              0.0008417508417508418, -0.001917526917526918,
                              0.00641025641025641, -0.02955065359477124,
                              0.1796443723688307, -1.3924322169059,
                            ];
                          if (((o = e), (a = 0), 1 == e || 2 == e)) return 0;
                          for (
                            e <= 7 && (o = e + (a = t.floor(7 - e))),
                              n = 1 / (o * o),
                              r = 2 * t.PI,
                              i = u[9],
                              s = 8;
                            s >= 0;
                            s--
                          )
                            (i *= n), (i += u[s]);
                          if (
                            ((l =
                              i / o +
                              0.5 * t.log(r) +
                              (o - 0.5) * t.log(o) -
                              o),
                            e <= 7)
                          )
                            for (s = 1; s <= a; s++)
                              (l -= t.log(o - 1)), (o -= 1);
                          return l;
                        }),
                        (e.gammafn = function (e) {
                          var o,
                            n,
                            r,
                            l,
                            i = [
                              -1.716185138865495, 24.76565080557592,
                              -379.80425647094563, 629.3311553128184,
                              866.9662027904133, -31451.272968848367,
                              -36144.413418691176, 66456.14382024054,
                            ],
                            s = [
                              -30.8402300119739, 315.35062697960416,
                              -1015.1563674902192, -3107.771671572311,
                              22538.11842098015, 4755.846277527881,
                              -134659.9598649693, -115132.2596755535,
                            ],
                            a = !1,
                            u = 0,
                            c = 0,
                            f = 0,
                            d = e;
                          if (e > 171.6243769536076) return 1 / 0;
                          if (d <= 0) {
                            if (!(l = (d % 1) + 36e-17)) return 1 / 0;
                            (a = ((1 & d ? -1 : 1) * t.PI) / t.sin(t.PI * l)),
                              (d = 1 - d);
                          }
                          for (
                            r = d,
                              n = d < 1 ? d++ : (d -= u = (0 | d) - 1) - 1,
                              o = 0;
                            o < 8;
                            ++o
                          )
                            (f = (f + i[o]) * n), (c = c * n + s[o]);
                          if (((l = f / c + 1), r < d)) l /= r;
                          else if (r > d) for (o = 0; o < u; ++o) (l *= d), d++;
                          return a && (l = a / l), l;
                        }),
                        (e.gammap = function (t, o) {
                          return e.lowRegGamma(t, o) * e.gammafn(t);
                        }),
                        (e.lowRegGamma = function (o, n) {
                          var r,
                            l = e.gammaln(o),
                            i = o,
                            s = 1 / o,
                            a = s,
                            u = n + 1 - o,
                            c = 1 / 1e-30,
                            f = 1 / u,
                            d = f,
                            p = 1,
                            b = -~(
                              8.5 * t.log(o >= 1 ? o : 1 / o) +
                              0.4 * o +
                              17
                            );
                          if (n < 0 || o <= 0) return NaN;
                          if (n < o + 1) {
                            for (; p <= b; p++) s += a *= n / ++i;
                            return s * t.exp(-n + o * t.log(n) - l);
                          }
                          for (; p <= b; p++)
                            d *=
                              (f =
                                1 / (f = (r = -p * (p - o)) * f + (u += 2))) *
                              (c = u + r / c);
                          return 1 - d * t.exp(-n + o * t.log(n) - l);
                        }),
                        (e.factorialln = function (t) {
                          return t < 0 ? NaN : e.gammaln(t + 1);
                        }),
                        (e.factorial = function (t) {
                          return t < 0 ? NaN : e.gammafn(t + 1);
                        }),
                        (e.combination = function (o, n) {
                          return o > 170 || n > 170
                            ? t.exp(e.combinationln(o, n))
                            : e.factorial(o) /
                                e.factorial(n) /
                                e.factorial(o - n);
                        }),
                        (e.combinationln = function (t, o) {
                          return (
                            e.factorialln(t) -
                            e.factorialln(o) -
                            e.factorialln(t - o)
                          );
                        }),
                        (e.permutation = function (t, o) {
                          return e.factorial(t) / e.factorial(t - o);
                        }),
                        (e.betafn = function (o, n) {
                          if (!(o <= 0 || n <= 0))
                            return o + n > 170
                              ? t.exp(e.betaln(o, n))
                              : (e.gammafn(o) * e.gammafn(n)) /
                                  e.gammafn(o + n);
                        }),
                        (e.betaln = function (t, o) {
                          return e.gammaln(t) + e.gammaln(o) - e.gammaln(t + o);
                        }),
                        (e.betacf = function (e, o, n) {
                          var r,
                            l,
                            i,
                            s,
                            a = 1e-30,
                            u = 1,
                            c = o + n,
                            f = o + 1,
                            d = o - 1,
                            p = 1,
                            b = 1 - (c * e) / f;
                          for (
                            t.abs(b) < a && (b = a), s = b = 1 / b;
                            u <= 100 &&
                            ((b =
                              1 +
                              (l =
                                (u * (n - u) * e) /
                                ((d + (r = 2 * u)) * (o + r))) *
                                b),
                            t.abs(b) < a && (b = a),
                            (p = 1 + l / p),
                            t.abs(p) < a && (p = a),
                            (s *= (b = 1 / b) * p),
                            (b =
                              1 +
                              (l =
                                (-(o + u) * (c + u) * e) /
                                ((o + r) * (f + r))) *
                                b),
                            t.abs(b) < a && (b = a),
                            (p = 1 + l / p),
                            t.abs(p) < a && (p = a),
                            (s *= i = (b = 1 / b) * p),
                            !(t.abs(i - 1) < 3e-7));
                            u++
                          );
                          return s;
                        }),
                        (e.gammapinv = function (o, n) {
                          var r,
                            l,
                            i,
                            s,
                            a,
                            u,
                            c = 0,
                            f = n - 1,
                            d = e.gammaln(n);
                          if (o >= 1) return t.max(100, n + 100 * t.sqrt(n));
                          if (o <= 0) return 0;
                          for (
                            n > 1
                              ? ((a = t.log(f)),
                                (u = t.exp(f * (a - 1) - d)),
                                (s = o < 0.5 ? o : 1 - o),
                                (r =
                                  (2.30753 +
                                    0.27061 * (l = t.sqrt(-2 * t.log(s)))) /
                                    (1 + l * (0.99229 + 0.04481 * l)) -
                                  l),
                                o < 0.5 && (r = -r),
                                (r = t.max(
                                  0.001,
                                  n *
                                    t.pow(
                                      1 - 1 / (9 * n) - r / (3 * t.sqrt(n)),
                                      3
                                    )
                                )))
                              : (r =
                                  o < (l = 1 - n * (0.253 + 0.12 * n))
                                    ? t.pow(o / l, 1 / n)
                                    : 1 - t.log(1 - (o - l) / (1 - l)));
                            c < 12;
                            c++
                          ) {
                            if (r <= 0) return 0;
                            if (
                              ((r -= l =
                                (i =
                                  (e.lowRegGamma(n, r) - o) /
                                  (l =
                                    n > 1
                                      ? u * t.exp(-(r - f) + f * (t.log(r) - a))
                                      : t.exp(-r + f * t.log(r) - d))) /
                                (1 - 0.5 * t.min(1, i * ((n - 1) / r - 1)))) <=
                                0 && (r = 0.5 * (r + l)),
                              t.abs(l) < 1e-8 * r)
                            )
                              break;
                          }
                          return r;
                        }),
                        (e.erf = function (e) {
                          var o,
                            n,
                            r,
                            l,
                            i = [
                              -1.3026537197817094, 0.6419697923564902,
                              0.019476473204185836, -0.00956151478680863,
                              -0.000946595344482036, 0.000366839497852761,
                              42523324806907e-18, -20278578112534e-18,
                              -1624290004647e-18, 130365583558e-17,
                              1.5626441722e-8, -8.5238095915e-8, 6.529054439e-9,
                              5.059343495e-9, -9.91364156e-10, -2.27365122e-10,
                              96467911e-18, 2394038e-18, -6886027e-18,
                              894487e-18, 313092e-18, -112708e-18, 381e-18,
                              7106e-18, -1523e-18, -94e-18, 121e-18, -28e-18,
                            ],
                            s = i.length - 1,
                            a = !1,
                            u = 0,
                            c = 0;
                          for (
                            e < 0 && ((e = -e), (a = !0)),
                              n = 4 * (o = 2 / (2 + e)) - 2;
                            s > 0;
                            s--
                          )
                            (r = u), (u = n * u - c + i[s]), (c = r);
                          return (
                            (l = o * t.exp(-e * e + 0.5 * (i[0] + n * u) - c)),
                            a ? l - 1 : 1 - l
                          );
                        }),
                        (e.erfc = function (t) {
                          return 1 - e.erf(t);
                        }),
                        (e.erfcinv = function (o) {
                          var n,
                            r,
                            l,
                            i,
                            s = 0;
                          if (o >= 2) return -100;
                          if (o <= 0) return 100;
                          for (
                            i = o < 1 ? o : 2 - o,
                              n =
                                -0.70711 *
                                ((2.30753 +
                                  0.27061 * (l = t.sqrt(-2 * t.log(i / 2)))) /
                                  (1 + l * (0.99229 + 0.04481 * l)) -
                                  l);
                            s < 2;
                            s++
                          )
                            n +=
                              (r = e.erfc(n) - i) /
                              (1.1283791670955126 * t.exp(-n * n) - n * r);
                          return o < 1 ? n : -n;
                        }),
                        (e.ibetainv = function (o, n, r) {
                          var l,
                            i,
                            s,
                            a,
                            u,
                            c,
                            f,
                            d,
                            p,
                            b,
                            j = n - 1,
                            h = r - 1,
                            g = 0;
                          if (o <= 0) return 0;
                          if (o >= 1) return 1;
                          for (
                            n >= 1 && r >= 1
                              ? ((s = o < 0.5 ? o : 1 - o),
                                (c =
                                  (2.30753 +
                                    0.27061 * (a = t.sqrt(-2 * t.log(s)))) /
                                    (1 + a * (0.99229 + 0.04481 * a)) -
                                  a),
                                o < 0.5 && (c = -c),
                                (f = (c * c - 3) / 6),
                                (d = 2 / (1 / (2 * n - 1) + 1 / (2 * r - 1))),
                                (p =
                                  (c * t.sqrt(f + d)) / d -
                                  (1 / (2 * r - 1) - 1 / (2 * n - 1)) *
                                    (f + 5 / 6 - 2 / (3 * d))),
                                (c = n / (n + r * t.exp(2 * p))))
                              : ((l = t.log(n / (n + r))),
                                (i = t.log(r / (n + r))),
                                (c =
                                  o <
                                  (a = t.exp(n * l) / n) /
                                    (p = a + (u = t.exp(r * i) / r))
                                    ? t.pow(n * p * o, 1 / n)
                                    : 1 - t.pow(r * p * (1 - o), 1 / r))),
                              b =
                                -e.gammaln(n) - e.gammaln(r) + e.gammaln(n + r);
                            g < 10;
                            g++
                          ) {
                            if (0 === c || 1 === c) return c;
                            if (
                              ((c -= a =
                                (u =
                                  (e.ibeta(c, n, r) - o) /
                                  (a = t.exp(
                                    j * t.log(c) + h * t.log(1 - c) + b
                                  ))) /
                                (1 -
                                  0.5 * t.min(1, u * (j / c - h / (1 - c))))) <=
                                0 && (c = 0.5 * (c + a)),
                              c >= 1 && (c = 0.5 * (c + a + 1)),
                              t.abs(a) < 1e-8 * c && g > 0)
                            )
                              break;
                          }
                          return c;
                        }),
                        (e.ibeta = function (o, n, r) {
                          var l =
                            0 === o || 1 === o
                              ? 0
                              : t.exp(
                                  e.gammaln(n + r) -
                                    e.gammaln(n) -
                                    e.gammaln(r) +
                                    n * t.log(o) +
                                    r * t.log(1 - o)
                                );
                          return (
                            !(o < 0 || o > 1) &&
                            (o < (n + 1) / (n + r + 2)
                              ? (l * e.betacf(o, n, r)) / n
                              : 1 - (l * e.betacf(1 - o, r, n)) / r)
                          );
                        }),
                        (e.randn = function (o, n) {
                          var r, l, i, s, a;
                          if ((n || (n = o), o))
                            return e.create(o, n, function () {
                              return e.randn();
                            });
                          do {
                            (r = e._random_fn()),
                              (l = 1.7156 * (e._random_fn() - 0.5)),
                              (a =
                                (i = r - 0.449871) * i +
                                (s = t.abs(l) + 0.386595) *
                                  (0.196 * s - 0.25472 * i));
                          } while (
                            a > 0.27597 &&
                            (a > 0.27846 || l * l > -4 * t.log(r) * r * r)
                          );
                          return l / r;
                        }),
                        (e.randg = function (o, n, r) {
                          var l,
                            i,
                            s,
                            a,
                            u,
                            c,
                            f = o;
                          if ((r || (r = n), o || (o = 1), n))
                            return (
                              (c = e.zeros(n, r)).alter(function () {
                                return e.randg(o);
                              }),
                              c
                            );
                          o < 1 && (o += 1),
                            (l = o - 1 / 3),
                            (i = 1 / t.sqrt(9 * l));
                          do {
                            do {
                              a = 1 + i * (u = e.randn());
                            } while (a <= 0);
                            (a *= a * a), (s = e._random_fn());
                          } while (
                            s > 1 - 0.331 * t.pow(u, 4) &&
                            t.log(s) > 0.5 * u * u + l * (1 - a + t.log(a))
                          );
                          if (o == f) return l * a;
                          do {
                            s = e._random_fn();
                          } while (0 === s);
                          return t.pow(s, 1 / f) * l * a;
                        }),
                        (function (t) {
                          for (var o = 0; o < t.length; o++)
                            !(function (t) {
                              e.fn[t] = function () {
                                return e(
                                  e.map(this, function (o) {
                                    return e[t](o);
                                  })
                                );
                              };
                            })(t[o]);
                        })("gammaln gammafn factorial factorialln".split(" ")),
                        (function (t) {
                          for (var o = 0; o < t.length; o++)
                            !(function (t) {
                              e.fn[t] = function () {
                                return e(e[t].apply(null, arguments));
                              };
                            })(t[o]);
                        })("randn".split(" "));
                    })(t, Math),
                    (function (e, t) {
                      function o(e, o, n, r) {
                        for (
                          var l, i = 0, s = 1, a = 1, u = 1, c = 0, f = 0;
                          t.abs((a - f) / a) > r;

                        )
                          (f = a),
                            (s =
                              u +
                              (l =
                                (-(o + c) * (o + n + c) * e) /
                                (o + 2 * c) /
                                (o + 2 * c + 1)) *
                                s),
                            (a =
                              (i = a + l * i) +
                              (l =
                                ((c += 1) * (n - c) * e) /
                                (o + 2 * c - 1) /
                                (o + 2 * c)) *
                                a),
                            (i /= u = s + l * u),
                            (s /= u),
                            (a /= u),
                            (u = 1);
                        return a / o;
                      }
                      function n(o, n, r) {
                        var l = [
                            0.9815606342467192, 0.9041172563704749,
                            0.7699026741943047, 0.5873179542866175,
                            0.3678314989981802, 0.1252334085114689,
                          ],
                          i = [
                            0.04717533638651183, 0.10693932599531843,
                            0.16007832854334622, 0.20316742672306592,
                            0.2334925365383548, 0.24914704581340277,
                          ],
                          s = 0.5 * o;
                        if (s >= 8) return 1;
                        var a,
                          u = 2 * e.normal.cdf(s, 0, 1, 1, 0) - 1;
                        u = u >= t.exp(-50 / r) ? t.pow(u, r) : 0;
                        for (
                          var c = s,
                            f = (8 - s) / (a = o > 3 ? 2 : 3),
                            d = c + f,
                            p = 0,
                            b = r - 1,
                            j = 1;
                          j <= a;
                          j++
                        ) {
                          for (
                            var h = 0,
                              g = 0.5 * (d + c),
                              m = 0.5 * (d - c),
                              v = 1;
                            v <= 12;
                            v++
                          ) {
                            var y,
                              C =
                                g +
                                m *
                                  (6 < v
                                    ? l[(y = 12 - v + 1) - 1]
                                    : -l[(y = v) - 1]),
                              x = C * C;
                            if (x > 60) break;
                            var w =
                              2 * e.normal.cdf(C, 0, 1, 1, 0) * 0.5 -
                              2 * e.normal.cdf(C, o, 1, 1, 0) * 0.5;
                            w >= t.exp(-30 / b) &&
                              (h += w =
                                i[y - 1] * t.exp(-0.5 * x) * t.pow(w, b));
                          }
                          (p += h *= (2 * m * r) / t.sqrt(2 * t.PI)),
                            (c = d),
                            (d += f);
                        }
                        return (u += p) <= t.exp(-30 / n)
                          ? 0
                          : (u = t.pow(u, n)) >= 1
                          ? 1
                          : u;
                      }
                      !(function (t) {
                        for (var o = 0; o < t.length; o++)
                          !(function (t) {
                            (e[t] = function e(t, o, n) {
                              return this instanceof e
                                ? ((this._a = t),
                                  (this._b = o),
                                  (this._c = n),
                                  this)
                                : new e(t, o, n);
                            }),
                              (e.fn[t] = function (o, n, r) {
                                var l = e[t](o, n, r);
                                return (l.data = this), l;
                              }),
                              (e[t].prototype.sample = function (o) {
                                var n = this._a,
                                  r = this._b,
                                  l = this._c;
                                return o
                                  ? e.alter(o, function () {
                                      return e[t].sample(n, r, l);
                                    })
                                  : e[t].sample(n, r, l);
                              }),
                              (function (o) {
                                for (var n = 0; n < o.length; n++)
                                  !(function (o) {
                                    e[t].prototype[o] = function (n) {
                                      var r = this._a,
                                        l = this._b,
                                        i = this._c;
                                      return (
                                        n || 0 === n || (n = this.data),
                                        "number" != typeof n
                                          ? e.fn.map.call(n, function (n) {
                                              return e[t][o](n, r, l, i);
                                            })
                                          : e[t][o](n, r, l, i)
                                      );
                                    };
                                  })(o[n]);
                              })("pdf cdf inv".split(" ")),
                              (function (o) {
                                for (var n = 0; n < o.length; n++)
                                  !(function (o) {
                                    e[t].prototype[o] = function () {
                                      return e[t][o](this._a, this._b, this._c);
                                    };
                                  })(o[n]);
                              })("mean median mode variance".split(" "));
                          })(t[o]);
                      })(
                        "beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(
                          " "
                        )
                      ),
                        e.extend(e.beta, {
                          pdf: function (o, n, r) {
                            return o > 1 || o < 0
                              ? 0
                              : 1 == n && 1 == r
                              ? 1
                              : n < 512 && r < 512
                              ? (t.pow(o, n - 1) * t.pow(1 - o, r - 1)) /
                                e.betafn(n, r)
                              : t.exp(
                                  (n - 1) * t.log(o) +
                                    (r - 1) * t.log(1 - o) -
                                    e.betaln(n, r)
                                );
                          },
                          cdf: function (t, o, n) {
                            return t > 1 || t < 0
                              ? 1 * (t > 1)
                              : e.ibeta(t, o, n);
                          },
                          inv: function (t, o, n) {
                            return e.ibetainv(t, o, n);
                          },
                          mean: function (e, t) {
                            return e / (e + t);
                          },
                          median: function (t, o) {
                            return e.ibetainv(0.5, t, o);
                          },
                          mode: function (e, t) {
                            return (e - 1) / (e + t - 2);
                          },
                          sample: function (t, o) {
                            var n = e.randg(t);
                            return n / (n + e.randg(o));
                          },
                          variance: function (e, o) {
                            return (e * o) / (t.pow(e + o, 2) * (e + o + 1));
                          },
                        }),
                        e.extend(e.centralF, {
                          pdf: function (o, n, r) {
                            var l;
                            return o < 0
                              ? 0
                              : n <= 2
                              ? 0 === o && n < 2
                                ? 1 / 0
                                : 0 === o && 2 === n
                                ? 1
                                : (1 / e.betafn(n / 2, r / 2)) *
                                  t.pow(n / r, n / 2) *
                                  t.pow(o, n / 2 - 1) *
                                  t.pow(1 + (n / r) * o, -(n + r) / 2)
                              : ((l = (n * o) / (r + o * n)),
                                ((n * (r / (r + o * n))) / 2) *
                                  e.binomial.pdf(
                                    (n - 2) / 2,
                                    (n + r - 2) / 2,
                                    l
                                  ));
                          },
                          cdf: function (t, o, n) {
                            return t < 0
                              ? 0
                              : e.ibeta((o * t) / (o * t + n), o / 2, n / 2);
                          },
                          inv: function (t, o, n) {
                            return (
                              n / (o * (1 / e.ibetainv(t, o / 2, n / 2) - 1))
                            );
                          },
                          mean: function (e, t) {
                            return t > 2 ? t / (t - 2) : void 0;
                          },
                          mode: function (e, t) {
                            return e > 2
                              ? (t * (e - 2)) / (e * (t + 2))
                              : void 0;
                          },
                          sample: function (t, o) {
                            return (
                              (2 * e.randg(t / 2)) /
                              t /
                              ((2 * e.randg(o / 2)) / o)
                            );
                          },
                          variance: function (e, t) {
                            if (!(t <= 4))
                              return (
                                (2 * t * t * (e + t - 2)) /
                                (e * (t - 2) * (t - 2) * (t - 4))
                              );
                          },
                        }),
                        e.extend(e.cauchy, {
                          pdf: function (e, o, n) {
                            return n < 0
                              ? 0
                              : n / (t.pow(e - o, 2) + t.pow(n, 2)) / t.PI;
                          },
                          cdf: function (e, o, n) {
                            return t.atan((e - o) / n) / t.PI + 0.5;
                          },
                          inv: function (e, o, n) {
                            return o + n * t.tan(t.PI * (e - 0.5));
                          },
                          median: function (e) {
                            return e;
                          },
                          mode: function (e) {
                            return e;
                          },
                          sample: function (o, n) {
                            return (
                              e.randn() * t.sqrt(1 / (2 * e.randg(0.5))) * n + o
                            );
                          },
                        }),
                        e.extend(e.chisquare, {
                          pdf: function (o, n) {
                            return o < 0
                              ? 0
                              : 0 === o && 2 === n
                              ? 0.5
                              : t.exp(
                                  (n / 2 - 1) * t.log(o) -
                                    o / 2 -
                                    (n / 2) * t.log(2) -
                                    e.gammaln(n / 2)
                                );
                          },
                          cdf: function (t, o) {
                            return t < 0 ? 0 : e.lowRegGamma(o / 2, t / 2);
                          },
                          inv: function (t, o) {
                            return 2 * e.gammapinv(t, 0.5 * o);
                          },
                          mean: function (e) {
                            return e;
                          },
                          median: function (e) {
                            return e * t.pow(1 - 2 / (9 * e), 3);
                          },
                          mode: function (e) {
                            return e - 2 > 0 ? e - 2 : 0;
                          },
                          sample: function (t) {
                            return 2 * e.randg(t / 2);
                          },
                          variance: function (e) {
                            return 2 * e;
                          },
                        }),
                        e.extend(e.exponential, {
                          pdf: function (e, o) {
                            return e < 0 ? 0 : o * t.exp(-o * e);
                          },
                          cdf: function (e, o) {
                            return e < 0 ? 0 : 1 - t.exp(-o * e);
                          },
                          inv: function (e, o) {
                            return -t.log(1 - e) / o;
                          },
                          mean: function (e) {
                            return 1 / e;
                          },
                          median: function (e) {
                            return (1 / e) * t.log(2);
                          },
                          mode: function () {
                            return 0;
                          },
                          sample: function (o) {
                            return (-1 / o) * t.log(e._random_fn());
                          },
                          variance: function (e) {
                            return t.pow(e, -2);
                          },
                        }),
                        e.extend(e.gamma, {
                          pdf: function (o, n, r) {
                            return o < 0
                              ? 0
                              : 0 === o && 1 === n
                              ? 1 / r
                              : t.exp(
                                  (n - 1) * t.log(o) -
                                    o / r -
                                    e.gammaln(n) -
                                    n * t.log(r)
                                );
                          },
                          cdf: function (t, o, n) {
                            return t < 0 ? 0 : e.lowRegGamma(o, t / n);
                          },
                          inv: function (t, o, n) {
                            return e.gammapinv(t, o) * n;
                          },
                          mean: function (e, t) {
                            return e * t;
                          },
                          mode: function (e, t) {
                            if (e > 1) return (e - 1) * t;
                          },
                          sample: function (t, o) {
                            return e.randg(t) * o;
                          },
                          variance: function (e, t) {
                            return e * t * t;
                          },
                        }),
                        e.extend(e.invgamma, {
                          pdf: function (o, n, r) {
                            return o <= 0
                              ? 0
                              : t.exp(
                                  -(n + 1) * t.log(o) -
                                    r / o -
                                    e.gammaln(n) +
                                    n * t.log(r)
                                );
                          },
                          cdf: function (t, o, n) {
                            return t <= 0 ? 0 : 1 - e.lowRegGamma(o, n / t);
                          },
                          inv: function (t, o, n) {
                            return n / e.gammapinv(1 - t, o);
                          },
                          mean: function (e, t) {
                            return e > 1 ? t / (e - 1) : void 0;
                          },
                          mode: function (e, t) {
                            return t / (e + 1);
                          },
                          sample: function (t, o) {
                            return o / e.randg(t);
                          },
                          variance: function (e, t) {
                            if (!(e <= 2))
                              return (t * t) / ((e - 1) * (e - 1) * (e - 2));
                          },
                        }),
                        e.extend(e.kumaraswamy, {
                          pdf: function (e, o, n) {
                            return 0 === e && 1 === o
                              ? n
                              : 1 === e && 1 === n
                              ? o
                              : t.exp(
                                  t.log(o) +
                                    t.log(n) +
                                    (o - 1) * t.log(e) +
                                    (n - 1) * t.log(1 - t.pow(e, o))
                                );
                          },
                          cdf: function (e, o, n) {
                            return e < 0
                              ? 0
                              : e > 1
                              ? 1
                              : 1 - t.pow(1 - t.pow(e, o), n);
                          },
                          inv: function (e, o, n) {
                            return t.pow(1 - t.pow(1 - e, 1 / n), 1 / o);
                          },
                          mean: function (t, o) {
                            return (
                              (o * e.gammafn(1 + 1 / t) * e.gammafn(o)) /
                              e.gammafn(1 + 1 / t + o)
                            );
                          },
                          median: function (e, o) {
                            return t.pow(1 - t.pow(2, -1 / o), 1 / e);
                          },
                          mode: function (e, o) {
                            if (e >= 1 && o >= 1 && 1 !== e && 1 !== o)
                              return t.pow((e - 1) / (e * o - 1), 1 / e);
                          },
                          variance: function () {
                            throw new Error("variance not yet implemented");
                          },
                        }),
                        e.extend(e.lognormal, {
                          pdf: function (e, o, n) {
                            return e <= 0
                              ? 0
                              : t.exp(
                                  -t.log(e) -
                                    0.5 * t.log(2 * t.PI) -
                                    t.log(n) -
                                    t.pow(t.log(e) - o, 2) / (2 * n * n)
                                );
                          },
                          cdf: function (o, n, r) {
                            return o < 0
                              ? 0
                              : 0.5 +
                                  0.5 *
                                    e.erf((t.log(o) - n) / t.sqrt(2 * r * r));
                          },
                          inv: function (o, n, r) {
                            return t.exp(
                              -1.4142135623730951 * r * e.erfcinv(2 * o) + n
                            );
                          },
                          mean: function (e, o) {
                            return t.exp(e + (o * o) / 2);
                          },
                          median: function (e) {
                            return t.exp(e);
                          },
                          mode: function (e, o) {
                            return t.exp(e - o * o);
                          },
                          sample: function (o, n) {
                            return t.exp(e.randn() * n + o);
                          },
                          variance: function (e, o) {
                            return (t.exp(o * o) - 1) * t.exp(2 * e + o * o);
                          },
                        }),
                        e.extend(e.noncentralt, {
                          pdf: function (o, n, r) {
                            return t.abs(r) < 1e-14
                              ? e.studentt.pdf(o, n)
                              : t.abs(o) < 1e-14
                              ? t.exp(
                                  e.gammaln((n + 1) / 2) -
                                    (r * r) / 2 -
                                    0.5 * t.log(t.PI * n) -
                                    e.gammaln(n / 2)
                                )
                              : (n / o) *
                                (e.noncentralt.cdf(
                                  o * t.sqrt(1 + 2 / n),
                                  n + 2,
                                  r
                                ) -
                                  e.noncentralt.cdf(o, n, r));
                          },
                          cdf: function (o, n, r) {
                            var l = 1e-14;
                            if (t.abs(r) < l) return e.studentt.cdf(o, n);
                            var i = !1;
                            o < 0 && ((i = !0), (r = -r));
                            for (
                              var s = e.normal.cdf(-r, 0, 1),
                                a = l + 1,
                                u = a,
                                c = (o * o) / (o * o + n),
                                f = 0,
                                d = t.exp((-r * r) / 2),
                                p =
                                  t.exp(
                                    (-r * r) / 2 -
                                      0.5 * t.log(2) -
                                      e.gammaln(1.5)
                                  ) * r;
                              f < 200 || u > l || a > l;

                            )
                              (u = a),
                                f > 0 &&
                                  ((d *= (r * r) / (2 * f)),
                                  (p *= (r * r) / (2 * (f + 0.5)))),
                                (s +=
                                  0.5 *
                                  (a =
                                    d * e.beta.cdf(c, f + 0.5, n / 2) +
                                    p * e.beta.cdf(c, f + 1, n / 2))),
                                f++;
                            return i ? 1 - s : s;
                          },
                        }),
                        e.extend(e.normal, {
                          pdf: function (e, o, n) {
                            return t.exp(
                              -0.5 * t.log(2 * t.PI) -
                                t.log(n) -
                                t.pow(e - o, 2) / (2 * n * n)
                            );
                          },
                          cdf: function (o, n, r) {
                            return (
                              0.5 * (1 + e.erf((o - n) / t.sqrt(2 * r * r)))
                            );
                          },
                          inv: function (t, o, n) {
                            return (
                              -1.4142135623730951 * n * e.erfcinv(2 * t) + o
                            );
                          },
                          mean: function (e) {
                            return e;
                          },
                          median: function (e) {
                            return e;
                          },
                          mode: function (e) {
                            return e;
                          },
                          sample: function (t, o) {
                            return e.randn() * o + t;
                          },
                          variance: function (e, t) {
                            return t * t;
                          },
                        }),
                        e.extend(e.pareto, {
                          pdf: function (e, o, n) {
                            return e < o
                              ? 0
                              : (n * t.pow(o, n)) / t.pow(e, n + 1);
                          },
                          cdf: function (e, o, n) {
                            return e < o ? 0 : 1 - t.pow(o / e, n);
                          },
                          inv: function (e, o, n) {
                            return o / t.pow(1 - e, 1 / n);
                          },
                          mean: function (e, o) {
                            if (!(o <= 1)) return (o * t.pow(e, o)) / (o - 1);
                          },
                          median: function (e, o) {
                            return e * (o * t.SQRT2);
                          },
                          mode: function (e) {
                            return e;
                          },
                          variance: function (e, o) {
                            if (!(o <= 2))
                              return (e * e * o) / (t.pow(o - 1, 2) * (o - 2));
                          },
                        }),
                        e.extend(e.studentt, {
                          pdf: function (o, n) {
                            return (
                              (n = n > 1e100 ? 1e100 : n),
                              (1 / (t.sqrt(n) * e.betafn(0.5, n / 2))) *
                                t.pow(1 + (o * o) / n, -(n + 1) / 2)
                            );
                          },
                          cdf: function (o, n) {
                            var r = n / 2;
                            return e.ibeta(
                              (o + t.sqrt(o * o + n)) / (2 * t.sqrt(o * o + n)),
                              r,
                              r
                            );
                          },
                          inv: function (o, n) {
                            var r = e.ibetainv(
                              2 * t.min(o, 1 - o),
                              0.5 * n,
                              0.5
                            );
                            return (
                              (r = t.sqrt((n * (1 - r)) / r)), o > 0.5 ? r : -r
                            );
                          },
                          mean: function (e) {
                            return e > 1 ? 0 : void 0;
                          },
                          median: function () {
                            return 0;
                          },
                          mode: function () {
                            return 0;
                          },
                          sample: function (o) {
                            return e.randn() * t.sqrt(o / (2 * e.randg(o / 2)));
                          },
                          variance: function (e) {
                            return e > 2 ? e / (e - 2) : e > 1 ? 1 / 0 : void 0;
                          },
                        }),
                        e.extend(e.weibull, {
                          pdf: function (e, o, n) {
                            return e < 0 || o < 0 || n < 0
                              ? 0
                              : (n / o) *
                                  t.pow(e / o, n - 1) *
                                  t.exp(-t.pow(e / o, n));
                          },
                          cdf: function (e, o, n) {
                            return e < 0 ? 0 : 1 - t.exp(-t.pow(e / o, n));
                          },
                          inv: function (e, o, n) {
                            return o * t.pow(-t.log(1 - e), 1 / n);
                          },
                          mean: function (t, o) {
                            return t * e.gammafn(1 + 1 / o);
                          },
                          median: function (e, o) {
                            return e * t.pow(t.log(2), 1 / o);
                          },
                          mode: function (e, o) {
                            return o <= 1 ? 0 : e * t.pow((o - 1) / o, 1 / o);
                          },
                          sample: function (o, n) {
                            return o * t.pow(-t.log(e._random_fn()), 1 / n);
                          },
                          variance: function (o, n) {
                            return (
                              o * o * e.gammafn(1 + 2 / n) -
                              t.pow(e.weibull.mean(o, n), 2)
                            );
                          },
                        }),
                        e.extend(e.uniform, {
                          pdf: function (e, t, o) {
                            return e < t || e > o ? 0 : 1 / (o - t);
                          },
                          cdf: function (e, t, o) {
                            return e < t ? 0 : e < o ? (e - t) / (o - t) : 1;
                          },
                          inv: function (e, t, o) {
                            return t + e * (o - t);
                          },
                          mean: function (e, t) {
                            return 0.5 * (e + t);
                          },
                          median: function (t, o) {
                            return e.mean(t, o);
                          },
                          mode: function () {
                            throw new Error("mode is not yet implemented");
                          },
                          sample: function (t, o) {
                            return (
                              t / 2 +
                              o / 2 +
                              (o / 2 - t / 2) * (2 * e._random_fn() - 1)
                            );
                          },
                          variance: function (e, o) {
                            return t.pow(o - e, 2) / 12;
                          },
                        }),
                        e.extend(e.binomial, {
                          pdf: function (o, n, r) {
                            return 0 === r || 1 === r
                              ? n * r === o
                                ? 1
                                : 0
                              : e.combination(n, o) *
                                  t.pow(r, o) *
                                  t.pow(1 - r, n - o);
                          },
                          cdf: function (n, r, l) {
                            var i,
                              s = 1e-10;
                            if (n < 0) return 0;
                            if (n >= r) return 1;
                            if (l < 0 || l > 1 || r <= 0) return NaN;
                            var a = l,
                              u = (n = t.floor(n)) + 1,
                              c = r - n,
                              f = u + c,
                              d = t.exp(
                                e.gammaln(f) -
                                  e.gammaln(c) -
                                  e.gammaln(u) +
                                  u * t.log(a) +
                                  c * t.log(1 - a)
                              );
                            return (
                              (i =
                                a < (u + 1) / (f + 2)
                                  ? d * o(a, u, c, s)
                                  : 1 - d * o(1 - a, c, u, s)),
                              t.round((1 / s) * (1 - i)) / (1 / s)
                            );
                          },
                        }),
                        e.extend(e.negbin, {
                          pdf: function (o, n, r) {
                            return (
                              o === o >>> 0 &&
                              (o < 0
                                ? 0
                                : e.combination(o + n - 1, n - 1) *
                                  t.pow(1 - r, o) *
                                  t.pow(r, n))
                            );
                          },
                          cdf: function (t, o, n) {
                            var r = 0,
                              l = 0;
                            if (t < 0) return 0;
                            for (; l <= t; l++) r += e.negbin.pdf(l, o, n);
                            return r;
                          },
                        }),
                        e.extend(e.hypgeom, {
                          pdf: function (o, n, r, l) {
                            if ((o != o) | 0) return !1;
                            if (o < 0 || o < r - (n - l)) return 0;
                            if (o > l || o > r) return 0;
                            if (2 * r > n)
                              return 2 * l > n
                                ? e.hypgeom.pdf(n - r - l + o, n, n - r, n - l)
                                : e.hypgeom.pdf(l - o, n, n - r, l);
                            if (2 * l > n)
                              return e.hypgeom.pdf(r - o, n, r, n - l);
                            if (r < l) return e.hypgeom.pdf(o, n, l, r);
                            for (var i = 1, s = 0, a = 0; a < o; a++) {
                              for (; i > 1 && s < l; )
                                (i *= 1 - r / (n - s)), s++;
                              i *=
                                ((l - a) * (r - a)) /
                                ((a + 1) * (n - r - l + a + 1));
                            }
                            for (; s < l; s++) i *= 1 - r / (n - s);
                            return t.min(1, t.max(0, i));
                          },
                          cdf: function (o, n, r, l) {
                            if (o < 0 || o < r - (n - l)) return 0;
                            if (o >= l || o >= r) return 1;
                            if (2 * r > n)
                              return 2 * l > n
                                ? e.hypgeom.cdf(n - r - l + o, n, n - r, n - l)
                                : 1 - e.hypgeom.cdf(l - o - 1, n, n - r, l);
                            if (2 * l > n)
                              return 1 - e.hypgeom.cdf(r - o - 1, n, r, n - l);
                            if (r < l) return e.hypgeom.cdf(o, n, l, r);
                            for (var i = 1, s = 1, a = 0, u = 0; u < o; u++) {
                              for (; i > 1 && a < l; ) {
                                var c = 1 - r / (n - a);
                                (s *= c), (i *= c), a++;
                              }
                              i += s *=
                                ((l - u) * (r - u)) /
                                ((u + 1) * (n - r - l + u + 1));
                            }
                            for (; a < l; a++) i *= 1 - r / (n - a);
                            return t.min(1, t.max(0, i));
                          },
                        }),
                        e.extend(e.poisson, {
                          pdf: function (o, n) {
                            return n < 0 || o % 1 != 0 || o < 0
                              ? 0
                              : (t.pow(n, o) * t.exp(-n)) / e.factorial(o);
                          },
                          cdf: function (t, o) {
                            var n = [],
                              r = 0;
                            if (t < 0) return 0;
                            for (; r <= t; r++) n.push(e.poisson.pdf(r, o));
                            return e.sum(n);
                          },
                          mean: function (e) {
                            return e;
                          },
                          variance: function (e) {
                            return e;
                          },
                          sampleSmall: function (o) {
                            var n = 1,
                              r = 0,
                              l = t.exp(-o);
                            do {
                              r++, (n *= e._random_fn());
                            } while (n > l);
                            return r - 1;
                          },
                          sampleLarge: function (o) {
                            var n,
                              r,
                              l,
                              i,
                              s,
                              a,
                              u,
                              c,
                              f,
                              d,
                              p = o;
                            for (
                              i = t.sqrt(p),
                                s = t.log(p),
                                a = 0.02483 * (u = 0.931 + 2.53 * i) - 0.059,
                                c = 1.1239 + 1.1328 / (u - 3.4),
                                f = 0.9277 - 3.6224 / (u - 2);
                              ;

                            ) {
                              if (
                                ((r = t.random() - 0.5),
                                (l = t.random()),
                                (d = 0.5 - t.abs(r)),
                                (n = t.floor(((2 * a) / d + u) * r + p + 0.43)),
                                d >= 0.07 && l <= f)
                              )
                                return n;
                              if (
                                !(n < 0 || (d < 0.013 && l > d)) &&
                                t.log(l) + t.log(c) - t.log(a / (d * d) + u) <=
                                  n * s - p - e.loggam(n + 1)
                              )
                                return n;
                            }
                          },
                          sample: function (e) {
                            return e < 10
                              ? this.sampleSmall(e)
                              : this.sampleLarge(e);
                          },
                        }),
                        e.extend(e.triangular, {
                          pdf: function (e, t, o, n) {
                            return o <= t || n < t || n > o
                              ? NaN
                              : e < t || e > o
                              ? 0
                              : e < n
                              ? (2 * (e - t)) / ((o - t) * (n - t))
                              : e === n
                              ? 2 / (o - t)
                              : (2 * (o - e)) / ((o - t) * (o - n));
                          },
                          cdf: function (e, o, n, r) {
                            return n <= o || r < o || r > n
                              ? NaN
                              : e <= o
                              ? 0
                              : e >= n
                              ? 1
                              : e <= r
                              ? t.pow(e - o, 2) / ((n - o) * (r - o))
                              : 1 - t.pow(n - e, 2) / ((n - o) * (n - r));
                          },
                          inv: function (e, o, n, r) {
                            return n <= o || r < o || r > n
                              ? NaN
                              : e <= (r - o) / (n - o)
                              ? o + (n - o) * t.sqrt(e * ((r - o) / (n - o)))
                              : o +
                                (n - o) *
                                  (1 -
                                    t.sqrt((1 - e) * (1 - (r - o) / (n - o))));
                          },
                          mean: function (e, t, o) {
                            return (e + t + o) / 3;
                          },
                          median: function (e, o, n) {
                            return n <= (e + o) / 2
                              ? o - t.sqrt((o - e) * (o - n)) / t.sqrt(2)
                              : n > (e + o) / 2
                              ? e + t.sqrt((o - e) * (n - e)) / t.sqrt(2)
                              : void 0;
                          },
                          mode: function (e, t, o) {
                            return o;
                          },
                          sample: function (o, n, r) {
                            var l = e._random_fn();
                            return l < (r - o) / (n - o)
                              ? o + t.sqrt(l * (n - o) * (r - o))
                              : n - t.sqrt((1 - l) * (n - o) * (n - r));
                          },
                          variance: function (e, t, o) {
                            return (
                              (e * e + t * t + o * o - e * t - e * o - t * o) /
                              18
                            );
                          },
                        }),
                        e.extend(e.arcsine, {
                          pdf: function (e, o, n) {
                            return n <= o
                              ? NaN
                              : e <= o || e >= n
                              ? 0
                              : (2 / t.PI) *
                                t.pow(
                                  t.pow(n - o, 2) - t.pow(2 * e - o - n, 2),
                                  -0.5
                                );
                          },
                          cdf: function (e, o, n) {
                            return e < o
                              ? 0
                              : e < n
                              ? (2 / t.PI) * t.asin(t.sqrt((e - o) / (n - o)))
                              : 1;
                          },
                          inv: function (e, o, n) {
                            return o + (0.5 - 0.5 * t.cos(t.PI * e)) * (n - o);
                          },
                          mean: function (e, t) {
                            return t <= e ? NaN : (e + t) / 2;
                          },
                          median: function (e, t) {
                            return t <= e ? NaN : (e + t) / 2;
                          },
                          mode: function () {
                            throw new Error("mode is not yet implemented");
                          },
                          sample: function (o, n) {
                            return (
                              (o + n) / 2 +
                              ((n - o) / 2) *
                                t.sin(2 * t.PI * e.uniform.sample(0, 1))
                            );
                          },
                          variance: function (e, o) {
                            return o <= e ? NaN : t.pow(o - e, 2) / 8;
                          },
                        }),
                        e.extend(e.laplace, {
                          pdf: function (e, o, n) {
                            return n <= 0
                              ? 0
                              : t.exp(-t.abs(e - o) / n) / (2 * n);
                          },
                          cdf: function (e, o, n) {
                            return n <= 0
                              ? 0
                              : e < o
                              ? 0.5 * t.exp((e - o) / n)
                              : 1 - 0.5 * t.exp(-(e - o) / n);
                          },
                          mean: function (e) {
                            return e;
                          },
                          median: function (e) {
                            return e;
                          },
                          mode: function (e) {
                            return e;
                          },
                          variance: function (e, t) {
                            return 2 * t * t;
                          },
                          sample: function (o, n) {
                            var r,
                              l = e._random_fn() - 0.5;
                            return (
                              o -
                              n * ((r = l) / t.abs(r)) * t.log(1 - 2 * t.abs(l))
                            );
                          },
                        }),
                        e.extend(e.tukey, {
                          cdf: function (o, r, l) {
                            var i = r,
                              s = [
                                0.9894009349916499, 0.9445750230732326,
                                0.8656312023878318, 0.755404408355003,
                                0.6178762444026438, 0.45801677765722737,
                                0.2816035507792589, 0.09501250983763744,
                              ],
                              a = [
                                0.027152459411754096, 0.062253523938647894,
                                0.09515851168249279, 0.12462897125553388,
                                0.14959598881657674, 0.16915651939500254,
                                0.18260341504492358, 0.1894506104550685,
                              ];
                            if (o <= 0) return 0;
                            if (l < 2 || i < 2) return NaN;
                            if (!Number.isFinite(o)) return 1;
                            if (l > 25e3) return n(o, 1, i);
                            var u,
                              c = 0.5 * l,
                              f = c * t.log(l) - l * t.log(2) - e.gammaln(c),
                              d = c - 1,
                              p = 0.25 * l;
                            (u =
                              l <= 100
                                ? 1
                                : l <= 800
                                ? 0.5
                                : l <= 5e3
                                ? 0.25
                                : 0.125),
                              (f += t.log(u));
                            for (var b = 0, j = 1; j <= 50; j++) {
                              for (
                                var h = 0, g = (2 * j - 1) * u, m = 1;
                                m <= 16;
                                m++
                              ) {
                                var v, y;
                                8 < m
                                  ? ((v = m - 8 - 1),
                                    (y =
                                      f +
                                      d * t.log(g + s[v] * u) -
                                      (s[v] * u + g) * p))
                                  : ((v = m - 1),
                                    (y =
                                      f +
                                      d * t.log(g - s[v] * u) +
                                      (s[v] * u - g) * p)),
                                  y >= -30 &&
                                    (h +=
                                      n(
                                        8 < m
                                          ? o * t.sqrt(0.5 * (s[v] * u + g))
                                          : o * t.sqrt(0.5 * (-s[v] * u + g)),
                                        1,
                                        i
                                      ) *
                                      a[v] *
                                      t.exp(y));
                              }
                              if (j * u >= 1 && h <= 1e-14) break;
                              b += h;
                            }
                            if (h > 1e-14)
                              throw new Error("tukey.cdf failed to converge");
                            return b > 1 && (b = 1), b;
                          },
                          inv: function (o, n, r) {
                            if (r < 2 || n < 2) return NaN;
                            if (o < 0 || o > 1) return NaN;
                            if (0 === o) return 0;
                            if (1 === o) return 1 / 0;
                            var l,
                              i = (function (e, o, n) {
                                var r = 0.5 - 0.5 * e,
                                  l = t.sqrt(t.log(1 / (r * r))),
                                  i =
                                    l +
                                    ((((-453642210148e-16 * l -
                                      0.204231210125) *
                                      l -
                                      0.342242088547) *
                                      l -
                                      1) *
                                      l +
                                      0.322232421088) /
                                      ((((0.0038560700634 * l + 0.10353775285) *
                                        l +
                                        0.531103462366) *
                                        l +
                                        0.588581570495) *
                                        l +
                                        0.099348462606);
                                n < 120 && (i += (i * i * i + i) / n / 4);
                                var s = 0.8832 - 0.2368 * i;
                                return (
                                  n < 120 &&
                                    (s += -1.214 / n + (1.208 * i) / n),
                                  i * (s * t.log(o - 1) + 1.4142)
                                );
                              })(o, n, r),
                              s = e.tukey.cdf(i, n, r) - o;
                            l = s > 0 ? t.max(0, i - 1) : i + 1;
                            for (
                              var a, u = e.tukey.cdf(l, n, r) - o, c = 1;
                              c < 50;
                              c++
                            )
                              if (
                                ((a = l - (u * (l - i)) / (u - s)),
                                (s = u),
                                (i = l),
                                a < 0 && ((a = 0), (u = -o)),
                                (u = e.tukey.cdf(a, n, r) - o),
                                (l = a),
                                t.abs(l - i) < 1e-4)
                              )
                                return a;
                            throw new Error("tukey.inv failed to converge");
                          },
                        });
                    })(t, Math),
                    (function (e, t) {
                      var o,
                        n,
                        r = Array.prototype.push,
                        l = e.utils.isArray;
                      function i(t) {
                        return l(t) || t instanceof e;
                      }
                      e.extend({
                        add: function (t, o) {
                          return i(o)
                            ? (i(o[0]) || (o = [o]),
                              e.map(t, function (e, t, n) {
                                return e + o[t][n];
                              }))
                            : e.map(t, function (e) {
                                return e + o;
                              });
                        },
                        subtract: function (t, o) {
                          return i(o)
                            ? (i(o[0]) || (o = [o]),
                              e.map(t, function (e, t, n) {
                                return e - o[t][n] || 0;
                              }))
                            : e.map(t, function (e) {
                                return e - o;
                              });
                        },
                        divide: function (t, o) {
                          return i(o)
                            ? (i(o[0]) || (o = [o]), e.multiply(t, e.inv(o)))
                            : e.map(t, function (e) {
                                return e / o;
                              });
                        },
                        multiply: function (t, o) {
                          var n, r, l, s, a, u, c, f;
                          if (void 0 === t.length && void 0 === o.length)
                            return t * o;
                          if (
                            ((a = t.length),
                            (u = t[0].length),
                            (c = e.zeros(a, (l = i(o) ? o[0].length : u))),
                            (f = 0),
                            i(o))
                          ) {
                            for (; f < l; f++)
                              for (n = 0; n < a; n++) {
                                for (s = 0, r = 0; r < u; r++)
                                  s += t[n][r] * o[r][f];
                                c[n][f] = s;
                              }
                            return 1 === a && 1 === f ? c[0][0] : c;
                          }
                          return e.map(t, function (e) {
                            return e * o;
                          });
                        },
                        outer: function (t, o) {
                          return e.multiply(
                            t.map(function (e) {
                              return [e];
                            }),
                            [o]
                          );
                        },
                        dot: function (t, o) {
                          i(t[0]) || (t = [t]), i(o[0]) || (o = [o]);
                          for (
                            var n,
                              r,
                              l =
                                1 === t[0].length && 1 !== t.length
                                  ? e.transpose(t)
                                  : t,
                              s =
                                1 === o[0].length && 1 !== o.length
                                  ? e.transpose(o)
                                  : o,
                              a = [],
                              u = 0,
                              c = l.length,
                              f = l[0].length;
                            u < c;
                            u++
                          ) {
                            for (a[u] = [], n = 0, r = 0; r < f; r++)
                              n += l[u][r] * s[u][r];
                            a[u] = n;
                          }
                          return 1 === a.length ? a[0] : a;
                        },
                        pow: function (o, n) {
                          return e.map(o, function (e) {
                            return t.pow(e, n);
                          });
                        },
                        exp: function (o) {
                          return e.map(o, function (e) {
                            return t.exp(e);
                          });
                        },
                        log: function (o) {
                          return e.map(o, function (e) {
                            return t.log(e);
                          });
                        },
                        abs: function (o) {
                          return e.map(o, function (e) {
                            return t.abs(e);
                          });
                        },
                        norm: function (e, o) {
                          var n = 0,
                            r = 0;
                          for (
                            isNaN(o) && (o = 2), i(e[0]) && (e = e[0]);
                            r < e.length;
                            r++
                          )
                            n += t.pow(t.abs(e[r]), o);
                          return t.pow(n, 1 / o);
                        },
                        angle: function (o, n) {
                          return t.acos(e.dot(o, n) / (e.norm(o) * e.norm(n)));
                        },
                        aug: function (e, t) {
                          var o,
                            n = [];
                          for (o = 0; o < e.length; o++) n.push(e[o].slice());
                          for (o = 0; o < n.length; o++) r.apply(n[o], t[o]);
                          return n;
                        },
                        inv: function (t) {
                          for (
                            var o,
                              n = t.length,
                              r = t[0].length,
                              l = e.identity(n, r),
                              i = e.gauss_jordan(t, l),
                              s = [],
                              a = 0;
                            a < n;
                            a++
                          )
                            for (s[a] = [], o = r; o < i[0].length; o++)
                              s[a][o - r] = i[a][o];
                          return s;
                        },
                        det: function e(t) {
                          if (2 === t.length)
                            return t[0][0] * t[1][1] - t[0][1] * t[1][0];
                          for (var o = 0, n = 0; n < t.length; n++) {
                            for (var r = [], l = 1; l < t.length; l++) {
                              r[l - 1] = [];
                              for (var i = 0; i < t.length; i++)
                                i < n
                                  ? (r[l - 1][i] = t[l][i])
                                  : i > n && (r[l - 1][i - 1] = t[l][i]);
                            }
                            var s = n % 2 ? -1 : 1;
                            o += e(r) * t[0][n] * s;
                          }
                          return o;
                        },
                        gauss_elimination: function (o, n) {
                          var r,
                            l,
                            i,
                            s,
                            a = 0,
                            u = 0,
                            c = o.length,
                            f = o[0].length,
                            d = 1,
                            p = 0,
                            b = [];
                          for (
                            r = (o = e.aug(o, n))[0].length, a = 0;
                            a < c;
                            a++
                          ) {
                            for (l = o[a][a], u = a, s = a + 1; s < f; s++)
                              l < t.abs(o[s][a]) && ((l = o[s][a]), (u = s));
                            if (u != a)
                              for (s = 0; s < r; s++)
                                (i = o[a][s]),
                                  (o[a][s] = o[u][s]),
                                  (o[u][s] = i);
                            for (u = a + 1; u < c; u++)
                              for (d = o[u][a] / o[a][a], s = a; s < r; s++)
                                o[u][s] = o[u][s] - d * o[a][s];
                          }
                          for (a = c - 1; a >= 0; a--) {
                            for (p = 0, u = a + 1; u <= c - 1; u++)
                              p += b[u] * o[a][u];
                            b[a] = (o[a][r - 1] - p) / o[a][a];
                          }
                          return b;
                        },
                        gauss_jordan: function (o, n) {
                          var r,
                            l,
                            i,
                            s = e.aug(o, n),
                            a = s.length,
                            u = s[0].length,
                            c = 0;
                          for (l = 0; l < a; l++) {
                            var f = l;
                            for (i = l + 1; i < a; i++)
                              t.abs(s[i][l]) > t.abs(s[f][l]) && (f = i);
                            var d = s[l];
                            for (s[l] = s[f], s[f] = d, i = l + 1; i < a; i++)
                              for (c = s[i][l] / s[l][l], r = l; r < u; r++)
                                s[i][r] -= s[l][r] * c;
                          }
                          for (l = a - 1; l >= 0; l--) {
                            for (c = s[l][l], i = 0; i < l; i++)
                              for (r = u - 1; r > l - 1; r--)
                                s[i][r] -= (s[l][r] * s[i][l]) / c;
                            for (s[l][l] /= c, r = a; r < u; r++) s[l][r] /= c;
                          }
                          return s;
                        },
                        triaUpSolve: function (t, o) {
                          var n,
                            r = t[0].length,
                            l = e.zeros(1, r)[0],
                            i = !1;
                          return (
                            null != o[0].length &&
                              ((o = o.map(function (e) {
                                return e[0];
                              })),
                              (i = !0)),
                            e.arange(r - 1, -1, -1).forEach(function (i) {
                              (n = e.arange(i + 1, r).map(function (e) {
                                return l[e] * t[i][e];
                              })),
                                (l[i] = (o[i] - e.sum(n)) / t[i][i]);
                            }),
                            i
                              ? l.map(function (e) {
                                  return [e];
                                })
                              : l
                          );
                        },
                        triaLowSolve: function (t, o) {
                          var n,
                            r = t[0].length,
                            l = e.zeros(1, r)[0],
                            i = !1;
                          return (
                            null != o[0].length &&
                              ((o = o.map(function (e) {
                                return e[0];
                              })),
                              (i = !0)),
                            e.arange(r).forEach(function (r) {
                              (n = e.arange(r).map(function (e) {
                                return t[r][e] * l[e];
                              })),
                                (l[r] = (o[r] - e.sum(n)) / t[r][r]);
                            }),
                            i
                              ? l.map(function (e) {
                                  return [e];
                                })
                              : l
                          );
                        },
                        lu: function (t) {
                          var o,
                            n = t.length,
                            r = e.identity(n),
                            l = e.zeros(t.length, t[0].length);
                          return (
                            e.arange(n).forEach(function (e) {
                              l[0][e] = t[0][e];
                            }),
                            e.arange(1, n).forEach(function (i) {
                              e.arange(i).forEach(function (n) {
                                (o = e.arange(n).map(function (e) {
                                  return r[i][e] * l[e][n];
                                })),
                                  (r[i][n] = (t[i][n] - e.sum(o)) / l[n][n]);
                              }),
                                e.arange(i, n).forEach(function (n) {
                                  (o = e.arange(i).map(function (e) {
                                    return r[i][e] * l[e][n];
                                  })),
                                    (l[i][n] = t[o.length][n] - e.sum(o));
                                });
                            }),
                            [r, l]
                          );
                        },
                        cholesky: function (o) {
                          var n,
                            r = o.length,
                            l = e.zeros(o.length, o[0].length);
                          return (
                            e.arange(r).forEach(function (i) {
                              (n = e.arange(i).map(function (e) {
                                return t.pow(l[i][e], 2);
                              })),
                                (l[i][i] = t.sqrt(o[i][i] - e.sum(n))),
                                e.arange(i + 1, r).forEach(function (t) {
                                  (n = e.arange(i).map(function (e) {
                                    return l[i][e] * l[t][e];
                                  })),
                                    (l[t][i] = (o[i][t] - e.sum(n)) / l[i][i]);
                                });
                            }),
                            l
                          );
                        },
                        gauss_jacobi: function (o, n, r, l) {
                          for (
                            var i,
                              s,
                              a,
                              u,
                              c = 0,
                              f = 0,
                              d = o.length,
                              p = [],
                              b = [],
                              j = [];
                            c < d;
                            c++
                          )
                            for (
                              p[c] = [], b[c] = [], j[c] = [], f = 0;
                              f < d;
                              f++
                            )
                              c > f
                                ? ((p[c][f] = o[c][f]), (b[c][f] = j[c][f] = 0))
                                : c < f
                                ? ((b[c][f] = o[c][f]), (p[c][f] = j[c][f] = 0))
                                : ((j[c][f] = o[c][f]),
                                  (p[c][f] = b[c][f] = 0));
                          for (
                            a = e.multiply(
                              e.multiply(e.inv(j), e.add(p, b)),
                              -1
                            ),
                              s = e.multiply(e.inv(j), n),
                              i = r,
                              u = e.add(e.multiply(a, r), s),
                              c = 2;
                            t.abs(e.norm(e.subtract(u, i))) > l;

                          )
                            (i = u), (u = e.add(e.multiply(a, i), s)), c++;
                          return u;
                        },
                        gauss_seidel: function (o, n, r, l) {
                          for (
                            var i,
                              s,
                              a,
                              u,
                              c,
                              f = 0,
                              d = o.length,
                              p = [],
                              b = [],
                              j = [];
                            f < d;
                            f++
                          )
                            for (
                              p[f] = [], b[f] = [], j[f] = [], i = 0;
                              i < d;
                              i++
                            )
                              f > i
                                ? ((p[f][i] = o[f][i]), (b[f][i] = j[f][i] = 0))
                                : f < i
                                ? ((b[f][i] = o[f][i]), (p[f][i] = j[f][i] = 0))
                                : ((j[f][i] = o[f][i]),
                                  (p[f][i] = b[f][i] = 0));
                          for (
                            u = e.multiply(
                              e.multiply(e.inv(e.add(j, p)), b),
                              -1
                            ),
                              a = e.multiply(e.inv(e.add(j, p)), n),
                              s = r,
                              c = e.add(e.multiply(u, r), a),
                              f = 2;
                            t.abs(e.norm(e.subtract(c, s))) > l;

                          )
                            (s = c), (c = e.add(e.multiply(u, s), a)), (f += 1);
                          return c;
                        },
                        SOR: function (o, n, r, l, i) {
                          for (
                            var s,
                              a,
                              u,
                              c,
                              f,
                              d = 0,
                              p = o.length,
                              b = [],
                              j = [],
                              h = [];
                            d < p;
                            d++
                          )
                            for (
                              b[d] = [], j[d] = [], h[d] = [], s = 0;
                              s < p;
                              s++
                            )
                              d > s
                                ? ((b[d][s] = o[d][s]), (j[d][s] = h[d][s] = 0))
                                : d < s
                                ? ((j[d][s] = o[d][s]), (b[d][s] = h[d][s] = 0))
                                : ((h[d][s] = o[d][s]),
                                  (b[d][s] = j[d][s] = 0));
                          for (
                            c = e.multiply(
                              e.inv(e.add(h, e.multiply(b, i))),
                              e.subtract(e.multiply(h, 1 - i), e.multiply(j, i))
                            ),
                              u = e.multiply(
                                e.multiply(
                                  e.inv(e.add(h, e.multiply(b, i))),
                                  n
                                ),
                                i
                              ),
                              a = r,
                              f = e.add(e.multiply(c, r), u),
                              d = 2;
                            t.abs(e.norm(e.subtract(f, a))) > l;

                          )
                            (a = f), (f = e.add(e.multiply(c, a), u)), d++;
                          return f;
                        },
                        householder: function (o) {
                          for (
                            var n,
                              r,
                              l,
                              i,
                              s = o.length,
                              a = o[0].length,
                              u = 0,
                              c = [],
                              f = [];
                            u < s - 1;
                            u++
                          ) {
                            for (n = 0, i = u + 1; i < a; i++)
                              n += o[i][u] * o[i][u];
                            for (
                              n = (o[u + 1][u] > 0 ? -1 : 1) * t.sqrt(n),
                                r = t.sqrt((n * n - o[u + 1][u] * n) / 2),
                                (c = e.zeros(s, 1))[u + 1][0] =
                                  (o[u + 1][u] - n) / (2 * r),
                                l = u + 2;
                              l < s;
                              l++
                            )
                              c[l][0] = o[l][u] / (2 * r);
                            (f = e.subtract(
                              e.identity(s, a),
                              e.multiply(e.multiply(c, e.transpose(c)), 2)
                            )),
                              (o = e.multiply(f, e.multiply(o, f)));
                          }
                          return o;
                        },
                        QR:
                          ((o = e.sum),
                          (n = e.arange),
                          function (r) {
                            var l,
                              i,
                              s,
                              a = r.length,
                              u = r[0].length,
                              c = e.zeros(u, u);
                            for (r = e.copy(r), i = 0; i < u; i++) {
                              for (
                                c[i][i] = t.sqrt(
                                  o(
                                    n(a).map(function (e) {
                                      return r[e][i] * r[e][i];
                                    })
                                  )
                                ),
                                  l = 0;
                                l < a;
                                l++
                              )
                                r[l][i] = r[l][i] / c[i][i];
                              for (s = i + 1; s < u; s++)
                                for (
                                  c[i][s] = o(
                                    n(a).map(function (e) {
                                      return r[e][i] * r[e][s];
                                    })
                                  ),
                                    l = 0;
                                  l < a;
                                  l++
                                )
                                  r[l][s] = r[l][s] - r[l][i] * c[i][s];
                            }
                            return [r, c];
                          }),
                        lstsq: function (t, o) {
                          var n = !1;
                          void 0 === o[0].length &&
                            ((o = o.map(function (e) {
                              return [e];
                            })),
                            (n = !0));
                          var r = e.QR(t),
                            l = r[0],
                            i = r[1],
                            s = t[0].length,
                            a = e.slice(l, { col: { end: s } }),
                            u = (function (t) {
                              var o = (t = e.copy(t)).length,
                                n = e.identity(o);
                              return (
                                e.arange(o - 1, -1, -1).forEach(function (o) {
                                  e.sliceAssign(
                                    n,
                                    { row: o },
                                    e.divide(e.slice(n, { row: o }), t[o][o])
                                  ),
                                    e.sliceAssign(
                                      t,
                                      { row: o },
                                      e.divide(e.slice(t, { row: o }), t[o][o])
                                    ),
                                    e.arange(o).forEach(function (r) {
                                      var l = e.multiply(t[r][o], -1),
                                        i = e.slice(t, { row: r }),
                                        s = e.multiply(
                                          e.slice(t, { row: o }),
                                          l
                                        );
                                      e.sliceAssign(t, { row: r }, e.add(i, s));
                                      var a = e.slice(n, { row: r }),
                                        u = e.multiply(
                                          e.slice(n, { row: o }),
                                          l
                                        );
                                      e.sliceAssign(n, { row: r }, e.add(a, u));
                                    });
                                }),
                                n
                              );
                            })(e.slice(i, { row: { end: s } })),
                            c = e.transpose(a);
                          void 0 === c[0].length && (c = [c]);
                          var f = e.multiply(e.multiply(u, c), o);
                          return (
                            void 0 === f.length && (f = [[f]]),
                            n
                              ? f.map(function (e) {
                                  return e[0];
                                })
                              : f
                          );
                        },
                        jacobi: function (o) {
                          for (
                            var n,
                              r,
                              l,
                              i,
                              s,
                              a,
                              u,
                              c = 1,
                              f = o.length,
                              d = e.identity(f, f),
                              p = [];
                            1 === c;

                          ) {
                            for (s = o[0][1], l = 0, i = 1, n = 0; n < f; n++)
                              for (r = 0; r < f; r++)
                                n != r &&
                                  s < t.abs(o[n][r]) &&
                                  ((s = t.abs(o[n][r])), (l = n), (i = r));
                            for (
                              a =
                                o[l][l] === o[i][i]
                                  ? o[l][i] > 0
                                    ? t.PI / 4
                                    : -t.PI / 4
                                  : t.atan(
                                      (2 * o[l][i]) / (o[l][l] - o[i][i])
                                    ) / 2,
                                (u = e.identity(f, f))[l][l] = t.cos(a),
                                u[l][i] = -t.sin(a),
                                u[i][l] = t.sin(a),
                                u[i][i] = t.cos(a),
                                d = e.multiply(d, u),
                                o = e.multiply(e.multiply(e.inv(u), o), u),
                                c = 0,
                                n = 1;
                              n < f;
                              n++
                            )
                              for (r = 1; r < f; r++)
                                n != r && t.abs(o[n][r]) > 0.001 && (c = 1);
                          }
                          for (n = 0; n < f; n++) p.push(o[n][n]);
                          return [d, p];
                        },
                        rungekutta: function (e, t, o, n, r, l) {
                          var i, s, a;
                          if (2 === l)
                            for (; n <= o; )
                              (r +=
                                ((i = t * e(n, r)) +
                                  (s = t * e(n + t, r + i))) /
                                2),
                                (n += t);
                          if (4 === l)
                            for (; n <= o; )
                              (r +=
                                ((i = t * e(n, r)) +
                                  2 * (s = t * e(n + t / 2, r + i / 2)) +
                                  2 * (a = t * e(n + t / 2, r + s / 2)) +
                                  t * e(n + t, r + a)) /
                                6),
                                (n += t);
                          return r;
                        },
                        romberg: function (e, o, n, r) {
                          for (
                            var l,
                              i,
                              s,
                              a,
                              u,
                              c = 0,
                              f = (n - o) / 2,
                              d = [],
                              p = [],
                              b = [];
                            c < r / 2;

                          ) {
                            for (u = e(o), s = o, a = 0; s <= n; s += f, a++)
                              d[a] = s;
                            for (l = d.length, s = 1; s < l - 1; s++)
                              u += (s % 2 != 0 ? 4 : 2) * e(d[s]);
                            (u = (f / 3) * (u + e(n))),
                              (b[c] = u),
                              (f /= 2),
                              c++;
                          }
                          for (i = b.length, l = 1; 1 !== i; ) {
                            for (s = 0; s < i - 1; s++)
                              p[s] =
                                (t.pow(4, l) * b[s + 1] - b[s]) /
                                (t.pow(4, l) - 1);
                            (i = p.length), (b = p), (p = []), l++;
                          }
                          return b;
                        },
                        richardson: function (e, o, n, r) {
                          function l(e, t) {
                            for (var o, n = 0, r = e.length; n < r; n++)
                              e[n] === t && (o = n);
                            return o;
                          }
                          for (
                            var i,
                              s,
                              a,
                              u,
                              c,
                              f = t.abs(n - e[l(e, n) + 1]),
                              d = 0,
                              p = [],
                              b = [];
                            r >= f;

                          )
                            (i = l(e, n + r)),
                              (s = l(e, n)),
                              (p[d] =
                                (o[i] - 2 * o[s] + o[2 * s - i]) / (r * r)),
                              (r /= 2),
                              d++;
                          for (u = p.length, a = 1; 1 != u; ) {
                            for (c = 0; c < u - 1; c++)
                              b[c] =
                                (t.pow(4, a) * p[c + 1] - p[c]) /
                                (t.pow(4, a) - 1);
                            (u = b.length), (p = b), (b = []), a++;
                          }
                          return p;
                        },
                        simpson: function (e, t, o, n) {
                          for (
                            var r,
                              l = (o - t) / n,
                              i = e(t),
                              s = [],
                              a = t,
                              u = 0,
                              c = 1;
                            a <= o;
                            a += l, u++
                          )
                            s[u] = a;
                          for (r = s.length; c < r - 1; c++)
                            i += (c % 2 != 0 ? 4 : 2) * e(s[c]);
                          return (l / 3) * (i + e(o));
                        },
                        hermite: function (e, t, o, n) {
                          for (
                            var r,
                              l = e.length,
                              i = 0,
                              s = 0,
                              a = [],
                              u = [],
                              c = [],
                              f = [];
                            s < l;
                            s++
                          ) {
                            for (a[s] = 1, r = 0; r < l; r++)
                              s != r && (a[s] *= (n - e[r]) / (e[s] - e[r]));
                            for (u[s] = 0, r = 0; r < l; r++)
                              s != r && (u[s] += 1 / (e[s] - e[r]));
                            (c[s] =
                              (1 - 2 * (n - e[s]) * u[s]) * (a[s] * a[s])),
                              (f[s] = (n - e[s]) * (a[s] * a[s])),
                              (i += c[s] * t[s] + f[s] * o[s]);
                          }
                          return i;
                        },
                        lagrange: function (e, t, o) {
                          for (
                            var n, r, l = 0, i = 0, s = e.length;
                            i < s;
                            i++
                          ) {
                            for (r = t[i], n = 0; n < s; n++)
                              i != n && (r *= (o - e[n]) / (e[i] - e[n]));
                            l += r;
                          }
                          return l;
                        },
                        cubic_spline: function (t, o, n) {
                          for (
                            var r,
                              l,
                              i = t.length,
                              s = 0,
                              a = [],
                              u = [],
                              c = [],
                              f = [],
                              d = [],
                              p = [];
                            s < i - 1;
                            s++
                          )
                            f[s] = t[s + 1] - t[s];
                          for (c[0] = 0, s = 1; s < i - 1; s++)
                            c[s] =
                              (3 / f[s]) * (o[s + 1] - o[s]) -
                              (3 / f[s - 1]) * (o[s] - o[s - 1]);
                          for (s = 1; s < i - 1; s++)
                            (a[s] = []),
                              (u[s] = []),
                              (a[s][s - 1] = f[s - 1]),
                              (a[s][s] = 2 * (f[s - 1] + f[s])),
                              (a[s][s + 1] = f[s]),
                              (u[s][0] = c[s]);
                          for (
                            l = e.multiply(e.inv(a), u), r = 0;
                            r < i - 1;
                            r++
                          )
                            (d[r] =
                              (o[r + 1] - o[r]) / f[r] -
                              (f[r] * (l[r + 1][0] + 2 * l[r][0])) / 3),
                              (p[r] = (l[r + 1][0] - l[r][0]) / (3 * f[r]));
                          for (r = 0; r < i && !(t[r] > n); r++);
                          return (
                            o[(r -= 1)] +
                            (n - t[r]) * d[r] +
                            e.sq(n - t[r]) * l[r] +
                            (n - t[r]) * e.sq(n - t[r]) * p[r]
                          );
                        },
                        gauss_quadrature: function () {
                          throw new Error(
                            "gauss_quadrature not yet implemented"
                          );
                        },
                        PCA: function (t) {
                          var o,
                            n,
                            r,
                            l,
                            i,
                            s = t.length,
                            a = t[0].length,
                            u = 0,
                            c = [],
                            f = [],
                            d = [],
                            p = [],
                            b = [],
                            j = [],
                            h = [];
                          for (u = 0; u < s; u++) c[u] = e.sum(t[u]) / a;
                          for (u = 0; u < a; u++)
                            for (b[u] = [], o = 0; o < s; o++)
                              b[u][o] = t[o][u] - c[o];
                          for (b = e.transpose(b), u = 0; u < s; u++)
                            for (j[u] = [], o = 0; o < s; o++)
                              j[u][o] = e.dot([b[u]], [b[o]]) / (a - 1);
                          for (
                            i = (r = e.jacobi(j))[0],
                              f = r[1],
                              h = e.transpose(i),
                              u = 0;
                            u < f.length;
                            u++
                          )
                            for (o = u; o < f.length; o++)
                              f[u] < f[o] &&
                                ((n = f[u]),
                                (f[u] = f[o]),
                                (f[o] = n),
                                (d = h[u]),
                                (h[u] = h[o]),
                                (h[o] = d));
                          for (l = e.transpose(b), u = 0; u < s; u++)
                            for (p[u] = [], o = 0; o < l.length; o++)
                              p[u][o] = e.dot([h[u]], [l[o]]);
                          return [t, f, h, p];
                        },
                      }),
                        (function (t) {
                          for (var o = 0; o < t.length; o++)
                            !(function (t) {
                              e.fn[t] = function (o, n) {
                                var r = this;
                                return n
                                  ? (setTimeout(function () {
                                      n.call(r, e.fn[t].call(r, o));
                                    }, 15),
                                    this)
                                  : "number" == typeof e[t](this, o)
                                  ? e[t](this, o)
                                  : e(e[t](this, o));
                              };
                            })(t[o]);
                        })(
                          "add divide multiply subtract dot pow exp log abs norm angle".split(
                            " "
                          )
                        );
                    })(t, Math),
                    (function (e, t) {
                      var o = [].slice,
                        n = e.utils.isNumber,
                        r = e.utils.isArray;
                      function l(e, o, n, r) {
                        if (e > 1 || n > 1 || e <= 0 || n <= 0)
                          throw new Error(
                            "Proportions should be greater than 0 and less than 1"
                          );
                        var l = (e * o + n * r) / (o + r);
                        return (e - n) / t.sqrt(l * (1 - l) * (1 / o + 1 / r));
                      }
                      e.extend({
                        zscore: function () {
                          var t = o.call(arguments);
                          return n(t[1])
                            ? (t[0] - t[1]) / t[2]
                            : (t[0] - e.mean(t[1])) / e.stdev(t[1], t[2]);
                        },
                        ztest: function () {
                          var n,
                            l = o.call(arguments);
                          return r(l[1])
                            ? ((n = e.zscore(l[0], l[1], l[3])),
                              1 === l[2]
                                ? e.normal.cdf(-t.abs(n), 0, 1)
                                : 2 * e.normal.cdf(-t.abs(n), 0, 1))
                            : l.length > 2
                            ? ((n = e.zscore(l[0], l[1], l[2])),
                              1 === l[3]
                                ? e.normal.cdf(-t.abs(n), 0, 1)
                                : 2 * e.normal.cdf(-t.abs(n), 0, 1))
                            : ((n = l[0]),
                              1 === l[1]
                                ? e.normal.cdf(-t.abs(n), 0, 1)
                                : 2 * e.normal.cdf(-t.abs(n), 0, 1));
                        },
                      }),
                        e.extend(e.fn, {
                          zscore: function (e, t) {
                            return (e - this.mean()) / this.stdev(t);
                          },
                          ztest: function (o, n, r) {
                            var l = t.abs(this.zscore(o, r));
                            return 1 === n
                              ? e.normal.cdf(-l, 0, 1)
                              : 2 * e.normal.cdf(-l, 0, 1);
                          },
                        }),
                        e.extend({
                          tscore: function () {
                            var n = o.call(arguments);
                            return 4 === n.length
                              ? (n[0] - n[1]) / (n[2] / t.sqrt(n[3]))
                              : (n[0] - e.mean(n[1])) /
                                  (e.stdev(n[1], !0) / t.sqrt(n[1].length));
                          },
                          ttest: function () {
                            var r,
                              l = o.call(arguments);
                            return 5 === l.length
                              ? ((r = t.abs(e.tscore(l[0], l[1], l[2], l[3]))),
                                1 === l[4]
                                  ? e.studentt.cdf(-r, l[3] - 1)
                                  : 2 * e.studentt.cdf(-r, l[3] - 1))
                              : n(l[1])
                              ? ((r = t.abs(l[0])),
                                1 == l[2]
                                  ? e.studentt.cdf(-r, l[1] - 1)
                                  : 2 * e.studentt.cdf(-r, l[1] - 1))
                              : ((r = t.abs(e.tscore(l[0], l[1]))),
                                1 == l[2]
                                  ? e.studentt.cdf(-r, l[1].length - 1)
                                  : 2 * e.studentt.cdf(-r, l[1].length - 1));
                          },
                        }),
                        e.extend(e.fn, {
                          tscore: function (e) {
                            return (
                              (e - this.mean()) /
                              (this.stdev(!0) / t.sqrt(this.cols()))
                            );
                          },
                          ttest: function (o, n) {
                            return 1 === n
                              ? 1 -
                                  e.studentt.cdf(
                                    t.abs(this.tscore(o)),
                                    this.cols() - 1
                                  )
                              : 2 *
                                  e.studentt.cdf(
                                    -t.abs(this.tscore(o)),
                                    this.cols() - 1
                                  );
                          },
                        }),
                        e.extend({
                          anovafscore: function () {
                            var n,
                              r,
                              l,
                              i,
                              s,
                              a,
                              u,
                              c,
                              f = o.call(arguments);
                            if (1 === f.length) {
                              for (
                                s = new Array(f[0].length), u = 0;
                                u < f[0].length;
                                u++
                              )
                                s[u] = f[0][u];
                              f = s;
                            }
                            for (r = new Array(), u = 0; u < f.length; u++)
                              r = r.concat(f[u]);
                            for (l = e.mean(r), n = 0, u = 0; u < f.length; u++)
                              n += f[u].length * t.pow(e.mean(f[u]) - l, 2);
                            for (
                              n /= f.length - 1, a = 0, u = 0;
                              u < f.length;
                              u++
                            )
                              for (
                                i = e.mean(f[u]), c = 0;
                                c < f[u].length;
                                c++
                              )
                                a += t.pow(f[u][c] - i, 2);
                            return n / (a / (r.length - f.length));
                          },
                          anovaftest: function () {
                            var t,
                              r,
                              l,
                              i,
                              s = o.call(arguments);
                            if (n(s[0]))
                              return 1 - e.centralF.cdf(s[0], s[1], s[2]);
                            var a = e.anovafscore(s);
                            for (
                              t = s.length - 1, l = 0, i = 0;
                              i < s.length;
                              i++
                            )
                              l += s[i].length;
                            return (r = l - t - 1), 1 - e.centralF.cdf(a, t, r);
                          },
                          ftest: function (t, o, n) {
                            return 1 - e.centralF.cdf(t, o, n);
                          },
                        }),
                        e.extend(e.fn, {
                          anovafscore: function () {
                            return e.anovafscore(this.toArray());
                          },
                          anovaftes: function () {
                            var t,
                              o = 0;
                            for (t = 0; t < this.length; t++)
                              o += this[t].length;
                            return e.ftest(
                              this.anovafscore(),
                              this.length - 1,
                              o - this.length
                            );
                          },
                        }),
                        e.extend({
                          qscore: function () {
                            var r,
                              l,
                              i,
                              s,
                              a,
                              u = o.call(arguments);
                            return (
                              n(u[0])
                                ? ((r = u[0]),
                                  (l = u[1]),
                                  (i = u[2]),
                                  (s = u[3]),
                                  (a = u[4]))
                                : ((r = e.mean(u[0])),
                                  (l = e.mean(u[1])),
                                  (i = u[0].length),
                                  (s = u[1].length),
                                  (a = u[2])),
                              t.abs(r - l) / (a * t.sqrt((1 / i + 1 / s) / 2))
                            );
                          },
                          qtest: function () {
                            var t,
                              n = o.call(arguments);
                            3 === n.length
                              ? ((t = n[0]), (n = n.slice(1)))
                              : 7 === n.length
                              ? ((t = e.qscore(n[0], n[1], n[2], n[3], n[4])),
                                (n = n.slice(5)))
                              : ((t = e.qscore(n[0], n[1], n[2])),
                                (n = n.slice(3)));
                            var r = n[0],
                              l = n[1];
                            return 1 - e.tukey.cdf(t, l, r - l);
                          },
                          tukeyhsd: function (t) {
                            for (
                              var o = e.pooledstdev(t),
                                n = t.map(function (t) {
                                  return e.mean(t);
                                }),
                                r = t.reduce(function (e, t) {
                                  return e + t.length;
                                }, 0),
                                l = [],
                                i = 0;
                              i < t.length;
                              ++i
                            )
                              for (var s = i + 1; s < t.length; ++s) {
                                var a = e.qtest(
                                  n[i],
                                  n[s],
                                  t[i].length,
                                  t[s].length,
                                  o,
                                  r,
                                  t.length
                                );
                                l.push([[i, s], a]);
                              }
                            return l;
                          },
                        }),
                        e.extend({
                          normalci: function () {
                            var n,
                              r = o.call(arguments),
                              l = new Array(2);
                            return (
                              (n =
                                4 === r.length
                                  ? t.abs(
                                      (e.normal.inv(r[1] / 2, 0, 1) * r[2]) /
                                        t.sqrt(r[3])
                                    )
                                  : t.abs(
                                      (e.normal.inv(r[1] / 2, 0, 1) *
                                        e.stdev(r[2])) /
                                        t.sqrt(r[2].length)
                                    )),
                              (l[0] = r[0] - n),
                              (l[1] = r[0] + n),
                              l
                            );
                          },
                          tci: function () {
                            var n,
                              r = o.call(arguments),
                              l = new Array(2);
                            return (
                              (n =
                                4 === r.length
                                  ? t.abs(
                                      (e.studentt.inv(r[1] / 2, r[3] - 1) *
                                        r[2]) /
                                        t.sqrt(r[3])
                                    )
                                  : t.abs(
                                      (e.studentt.inv(
                                        r[1] / 2,
                                        r[2].length - 1
                                      ) *
                                        e.stdev(r[2], !0)) /
                                        t.sqrt(r[2].length)
                                    )),
                              (l[0] = r[0] - n),
                              (l[1] = r[0] + n),
                              l
                            );
                          },
                          significant: function (e, t) {
                            return e < t;
                          },
                        }),
                        e.extend(e.fn, {
                          normalci: function (t, o) {
                            return e.normalci(t, o, this.toArray());
                          },
                          tci: function (t, o) {
                            return e.tci(t, o, this.toArray());
                          },
                        }),
                        e.extend(e.fn, {
                          oneSidedDifferenceOfProportions: function (
                            t,
                            o,
                            n,
                            r
                          ) {
                            var i = l(t, o, n, r);
                            return e.ztest(i, 1);
                          },
                          twoSidedDifferenceOfProportions: function (
                            t,
                            o,
                            n,
                            r
                          ) {
                            var i = l(t, o, n, r);
                            return e.ztest(i, 2);
                          },
                        });
                    })(t, Math),
                    (t.models = (function () {
                      function e(e, o) {
                        var n = e.length,
                          r = o[0].length - 1,
                          l = n - r - 1,
                          i = t.lstsq(o, e),
                          s = t
                            .multiply(
                              o,
                              i.map(function (e) {
                                return [e];
                              })
                            )
                            .map(function (e) {
                              return e[0];
                            }),
                          a = t.subtract(e, s),
                          u = t.mean(e),
                          c = t.sum(
                            s.map(function (e) {
                              return Math.pow(e - u, 2);
                            })
                          ),
                          f = t.sum(
                            e.map(function (e, t) {
                              return Math.pow(e - s[t], 2);
                            })
                          ),
                          d = c + f;
                        return {
                          exog: o,
                          endog: e,
                          nobs: n,
                          df_model: r,
                          df_resid: l,
                          coef: i,
                          predict: s,
                          resid: a,
                          ybar: u,
                          SST: d,
                          SSE: c,
                          SSR: f,
                          R2: c / d,
                        };
                      }
                      function o(o) {
                        var n,
                          r,
                          l =
                            ((n = o.exog),
                            (r = n[0].length),
                            t.arange(r).map(function (o) {
                              var l = t.arange(r).filter(function (e) {
                                return e !== o;
                              });
                              return e(
                                t.col(n, o).map(function (e) {
                                  return e[0];
                                }),
                                t.col(n, l)
                              );
                            })),
                          i = Math.sqrt(o.SSR / o.df_resid),
                          s = l.map(function (e) {
                            var t = e.SST,
                              o = e.R2;
                            return i / Math.sqrt(t * (1 - o));
                          }),
                          a = o.coef.map(function (e, t) {
                            return (e - 0) / s[t];
                          }),
                          u = a.map(function (e) {
                            var n = t.studentt.cdf(e, o.df_resid);
                            return 2 * (n > 0.5 ? 1 - n : n);
                          }),
                          c = t.studentt.inv(0.975, o.df_resid),
                          f = o.coef.map(function (e, t) {
                            var o = c * s[t];
                            return [e - o, e + o];
                          });
                        return {
                          se: s,
                          t: a,
                          p: u,
                          sigmaHat: i,
                          interval95: f,
                        };
                      }
                      return {
                        ols: function (n, r) {
                          var l = e(n, r),
                            i = o(l),
                            s = (function (e) {
                              var o,
                                n,
                                r,
                                l =
                                  e.R2 / e.df_model / ((1 - e.R2) / e.df_resid);
                              return {
                                F_statistic: l,
                                pvalue:
                                  1 -
                                  ((o = l),
                                  (n = e.df_model),
                                  (r = e.df_resid),
                                  t.beta.cdf(o / (r / n + o), n / 2, r / 2)),
                              };
                            })(l),
                            a = 1 - (1 - l.R2) * ((l.nobs - 1) / l.df_resid);
                          return (l.t = i), (l.f = s), (l.adjust_R2 = a), l;
                        },
                      };
                    })()),
                    t.extend({
                      buildxmatrix: function () {
                        for (
                          var e = new Array(arguments.length), o = 0;
                          o < arguments.length;
                          o++
                        )
                          e[o] = [1].concat(arguments[o]);
                        return t(e);
                      },
                      builddxmatrix: function () {
                        for (
                          var e = new Array(arguments[0].length), o = 0;
                          o < arguments[0].length;
                          o++
                        )
                          e[o] = [1].concat(arguments[0][o]);
                        return t(e);
                      },
                      buildjxmatrix: function (e) {
                        for (
                          var o = new Array(e.length), n = 0;
                          n < e.length;
                          n++
                        )
                          o[n] = e[n];
                        return t.builddxmatrix(o);
                      },
                      buildymatrix: function (e) {
                        return t(e).transpose();
                      },
                      buildjymatrix: function (e) {
                        return e.transpose();
                      },
                      matrixmult: function (e, o) {
                        var n, r, l, i, s;
                        if (e.cols() == o.rows()) {
                          if (o.rows() > 1) {
                            for (i = [], n = 0; n < e.rows(); n++)
                              for (i[n] = [], r = 0; r < o.cols(); r++) {
                                for (s = 0, l = 0; l < e.cols(); l++)
                                  s += e.toArray()[n][l] * o.toArray()[l][r];
                                i[n][r] = s;
                              }
                            return t(i);
                          }
                          for (i = [], n = 0; n < e.rows(); n++)
                            for (i[n] = [], r = 0; r < o.cols(); r++) {
                              for (s = 0, l = 0; l < e.cols(); l++)
                                s += e.toArray()[n][l] * o.toArray()[r];
                              i[n][r] = s;
                            }
                          return t(i);
                        }
                      },
                      regress: function (e, o) {
                        var n = t.xtranspxinv(e),
                          r = e.transpose(),
                          l = t.matrixmult(t(n), r);
                        return t.matrixmult(l, o);
                      },
                      regresst: function (e, o, n) {
                        var r = t.regress(e, o),
                          l = { anova: {} },
                          i = t.jMatYBar(e, r);
                        l.yBar = i;
                        var s = o.mean();
                        (l.anova.residuals = t.residuals(o, i)),
                          (l.anova.ssr = t.ssr(i, s)),
                          (l.anova.msr = l.anova.ssr / (e[0].length - 1)),
                          (l.anova.sse = t.sse(o, i)),
                          (l.anova.mse =
                            l.anova.sse / (o.length - (e[0].length - 1) - 1)),
                          (l.anova.sst = t.sst(o, s)),
                          (l.anova.mst = l.anova.sst / (o.length - 1)),
                          (l.anova.r2 = 1 - l.anova.sse / l.anova.sst),
                          l.anova.r2 < 0 && (l.anova.r2 = 0),
                          (l.anova.fratio = l.anova.msr / l.anova.mse),
                          (l.anova.pvalue = t.anovaftest(
                            l.anova.fratio,
                            e[0].length - 1,
                            o.length - (e[0].length - 1) - 1
                          )),
                          (l.anova.rmse = Math.sqrt(l.anova.mse)),
                          (l.anova.r2adj = 1 - l.anova.mse / l.anova.mst),
                          l.anova.r2adj < 0 && (l.anova.r2adj = 0),
                          (l.stats = new Array(e[0].length));
                        for (
                          var a, u, c, f = t.xtranspxinv(e), d = 0;
                          d < r.length;
                          d++
                        )
                          (a = Math.sqrt(l.anova.mse * Math.abs(f[d][d]))),
                            (u = Math.abs(r[d] / a)),
                            (c = t.ttest(u, o.length - e[0].length - 1, n)),
                            (l.stats[d] = [r[d], a, u, c]);
                        return (l.regress = r), l;
                      },
                      xtranspx: function (e) {
                        return t.matrixmult(e.transpose(), e);
                      },
                      xtranspxinv: function (e) {
                        var o = t.matrixmult(e.transpose(), e);
                        return t.inv(o);
                      },
                      jMatYBar: function (e, o) {
                        var n = t.matrixmult(e, o);
                        return new t(n);
                      },
                      residuals: function (e, o) {
                        return t.matrixsubtract(e, o);
                      },
                      ssr: function (e, t) {
                        for (var o = 0, n = 0; n < e.length; n++)
                          o += Math.pow(e[n] - t, 2);
                        return o;
                      },
                      sse: function (e, t) {
                        for (var o = 0, n = 0; n < e.length; n++)
                          o += Math.pow(e[n] - t[n], 2);
                        return o;
                      },
                      sst: function (e, t) {
                        for (var o = 0, n = 0; n < e.length; n++)
                          o += Math.pow(e[n] - t, 2);
                        return o;
                      },
                      matrixsubtract: function (e, o) {
                        for (
                          var n = new Array(e.length), r = 0;
                          r < e.length;
                          r++
                        ) {
                          n[r] = new Array(e[r].length);
                          for (var l = 0; l < e[r].length; l++)
                            n[r][l] = e[r][l] - o[r][l];
                        }
                        return t(n);
                      },
                    }),
                    (t.jStat = t),
                    t);
                },
                960: function (e, t, o) {
                  const n = o(592);
                  e.exports = (function (e) {
                    function t(e, t) {
                      const o = t.split(".");
                      let n = e;
                      for (const e of o) {
                        if (null == n) return;
                        n = n[e];
                      }
                      return n;
                    }
                    for (let o = 0; o < Object.keys(n).length; o++) {
                      let r,
                        l = Object.keys(n)[o],
                        i = [];
                      if ("object" == typeof n[l]) {
                        (i = Object.keys(n[l])), (r = Object.values(n[l]));
                        for (let e = 0; e < r.length; e++)
                          if ("object" == typeof r[e]) {
                            let t = i[e];
                            n[l][t] &&
                              ((i = [
                                ...i,
                                ...Object.keys(n[l][t]).map((e) => t + "." + e),
                              ]),
                              i.splice(i.indexOf(t), 1));
                          }
                      }
                      if (i.length < 1) e[l] = n[l];
                      else
                        for (let o = 0; o < i.length; o++)
                          "function" == typeof t(n[l], i[o]) &&
                            (e[l] = t(n[l], i[o]));
                    }
                    let o = function (e) {
                        return "number" == typeof e && (e = parseInt(e)), e;
                      },
                      r = null,
                      l = null,
                      i = null;
                    (e.TABLE = function () {
                      return i;
                    }),
                      (e.COLUMN = e.COL =
                        function () {
                          return (
                            i.tracking &&
                              i.tracking.push(
                                u.getColumnNameFromCoords(o(r), o(l))
                              ),
                            o(r) + 1
                          );
                        }),
                      (e.ROW = function () {
                        return (
                          i.tracking &&
                            i.tracking.push(
                              u.getColumnNameFromCoords(o(r), o(l))
                            ),
                          o(l) + 1
                        );
                      }),
                      (e.CELL = function () {
                        return u.getColumnNameFromCoords(r, l);
                      }),
                      (e.VALUE = function (e, t, n) {
                        return i.getValueFromCoords(o(e) - 1, o(t) - 1, n);
                      }),
                      (e.THISROWCELL = function (e) {
                        return i.getValueFromCoords(o(e) - 1, o(l));
                      });
                    const s = function (e, t) {
                        for (let o = 0; o < e.length; o++) {
                          let n = u.getTokensFromRange(e[o]);
                          t = t.replace(e[o], "[" + n.join(",") + "]");
                        }
                        return t;
                      },
                      a = function (e) {
                        return (
                          "string" == typeof e && (e = e.trim()),
                          !isNaN(e) && null !== e && "" !== e
                        );
                      },
                      u = function (e, t, o, n, u) {
                        (i = u), (r = o), (l = n);
                        let c = "",
                          f = {};
                        if (t)
                          if (t.size) {
                            let e,
                              o = null;
                            t.forEach(function (t, o) {
                              (e = o.replace(/!/g, ".")),
                                -1 !== e.indexOf(".") &&
                                  ((e = e.split(".")), (f[e[0]] = !0));
                            }),
                              (e = Object.keys(f));
                            for (let t = 0; t < e.length; t++)
                              c += "var " + e[t] + " = {};";
                            t.forEach(function (n, r) {
                              (e = r.replace(/!/g, ".")),
                                null === n ||
                                  a(n) ||
                                  ((o = n.match(
                                    /(('.*?'!)|(\w*!))?(\$?[A-Z]+\$?[0-9]*):(\$?[A-Z]+\$?[0-9]*)?/g
                                  )),
                                  o && o.length && (n = updateRanges(o, n))),
                                e.indexOf(".") > 0
                                  ? (c += e + " = " + t.get(r) + ";\n")
                                  : (c += "var " + e + " = " + n + ";\n");
                            });
                          } else {
                            let e = Object.keys(t);
                            if (e.length) {
                              let o,
                                n = {};
                              for (let t = 0; t < e.length; t++)
                                if (
                                  ((o = e[t].replace(/\!/g, ".")),
                                  o.indexOf(".") > 0)
                                ) {
                                  let e = e.split(".");
                                  n[e[0]] = {};
                                }
                              o = Object.keys(n);
                              for (let e = 0; e < o.length; e++)
                                c += "var " + o[e] + " = {};";
                              for (let n = 0; n < e.length; n++) {
                                if (
                                  ((o = e[n].replace(/!/g, ".")),
                                  null !== t[e[n]] && !a(t[e[n]]))
                                ) {
                                  let o = t[e[n]].match(
                                    /(('.*?'!)|(\w*!))?(\$?[A-Z]+\$?[0-9]*):(\$?[A-Z]+\$?[0-9]*)?/g
                                  );
                                  o && o.length && (t[e[n]] = s(o, t[e[n]]));
                                }
                                o.indexOf(".") > 0
                                  ? (c += o + " = " + t[e[n]] + ";\n")
                                  : (c += "var " + o + " = " + t[e[n]] + ";\n");
                              }
                            }
                          }
                        let d = (e = (function (e, t) {
                          let o = "",
                            n = 0,
                            r = ["=", "!", ">", "<"];
                          for (let l = 0; l < e.length; l++)
                            '"' === e[l] && (n = 0 === n ? 1 : 0),
                              1 === n
                                ? (o += e[l])
                                : ((o += e[l].toUpperCase()),
                                  !0 === t &&
                                    l > 0 &&
                                    "=" === e[l] &&
                                    -1 === r.indexOf(e[l - 1]) &&
                                    -1 === r.indexOf(e[l + 1]) &&
                                    (o += "="));
                          return (
                            (o = o.replace(/\^/g, "**")),
                            (o = o.replace(/<>/g, "!=")),
                            (o = o.replace(/&/g, "+")),
                            (o = o.replace(/\$/g, "")),
                            o
                          );
                        })(
                          (e = (e = e.replace(/\$/g, "")).replace(/!/g, ".")),
                          !0
                        )).match(
                          /(('.*?'!)|(\w*!))?(\$?[A-Z]+\$?[0-9]*):(\$?[A-Z]+\$?[0-9]*)?/g
                        );
                        d && d.length && (e = s(d, e));
                        let p = new Function(c + "; return " + e)();
                        return null === p && (p = 0), p;
                      };
                    return (
                      (u.getColumnNameFromCoords = function (e, t) {
                        return (
                          (n = ""),
                          (o = parseInt(e)) > 701
                            ? ((n += String.fromCharCode(
                                64 + parseInt(o / 676)
                              )),
                              (n += String.fromCharCode(
                                64 + parseInt((o % 676) / 26)
                              )))
                            : o > 25 &&
                              (n += String.fromCharCode(64 + parseInt(o / 26))),
                          n +
                            String.fromCharCode(65 + (o % 26)) +
                            (parseInt(t) + 1)
                        );
                        var o, n;
                      }),
                      (u.getCoordsFromColumnName = function (e) {
                        var t = /^[a-zA-Z]+/.exec(e);
                        if (t) {
                          for (var o = 0, n = 0; n < t[0].length; n++)
                            o +=
                              parseInt(t[0].charCodeAt(n) - 64) *
                              Math.pow(26, t[0].length - 1 - n);
                          --o < 0 && (o = 0);
                          var r = parseInt(/[0-9]+$/.exec(e)) || null;
                          return r > 0 && r--, [o, r];
                        }
                      }),
                      (u.getRangeFromTokens = function (e) {
                        e = e.filter(function (e) {
                          return "#REF!" != e;
                        });
                        for (var t = "", o = "", n = 0; n < e.length; n++)
                          e[n].indexOf(".") >= 0
                            ? (t = ".")
                            : e[n].indexOf("!") >= 0 && (t = "!"),
                            t &&
                              ((o = e[n].split(t)),
                              (e[n] = o[1]),
                              (o = o[0] + t));
                        return (
                          e.sort(function (e, t) {
                            var o = Helpers.getCoordsFromColumnName(e),
                              n = Helpers.getCoordsFromColumnName(t);
                            return o[1] > n[1]
                              ? 1
                              : o[1] < n[1]
                              ? -1
                              : o[0] > n[0]
                              ? 1
                              : o[0] < n[0]
                              ? -1
                              : 0;
                          }),
                          e.length
                            ? o + (e[0] + ":") + e[e.length - 1]
                            : "#REF!"
                        );
                      }),
                      (u.getTokensFromRange = function (e) {
                        if (e.indexOf(".") > 0) {
                          var t = e.split(".");
                          (e = t[1]), (t = t[0] + ".");
                        } else
                          e.indexOf("!") > 0
                            ? ((t = e.split("!")), (e = t[1]), (t = t[0] + "!"))
                            : (t = "");
                        e = e.split(":");
                        var o = u.getCoordsFromColumnName(e[0]),
                          n = u.getCoordsFromColumnName(e[1]);
                        if (o[0] <= n[0])
                          var r = o[0],
                            l = n[0];
                        else (r = n[0]), (l = o[0]);
                        if (null === o[1] && null == n[1])
                          for (
                            var i = null,
                              s = null,
                              a = Object.keys(vars),
                              c = 0;
                            c < a.length;
                            c++
                          ) {
                            var f = u.getCoordsFromColumnName(a[c]);
                            f[0] === o[0] &&
                              (null === i || f[1] < i) &&
                              (i = f[1]),
                              f[0] === n[0] &&
                                (null === s || f[1] > s) &&
                                (s = f[1]);
                          }
                        else
                          o[1] <= n[1]
                            ? ((i = o[1]), (s = n[1]))
                            : ((i = n[1]), (s = o[1]));
                        for (var d = [], p = i; p <= s; p++) {
                          var b = [];
                          for (c = r; c <= l; c++)
                            b.push(t + u.getColumnNameFromCoords(c, p));
                          d.push(b);
                        }
                        return d;
                      }),
                      (u.setFormula = function (t) {
                        let o = Object.keys(t);
                        for (let n = 0; n < o.length; n++)
                          "function" == typeof t[o[n]] && (e[o[n]] = t[o[n]]);
                      }),
                      (u.basic = !0),
                      u
                    );
                  })("undefined" == typeof window ? o.g : window);
                },
                592: function (e, t, o) {
                  "use strict";
                  var n = o(162),
                    r = o(765);
                  const l = new Error("#NULL!"),
                    i = new Error("#DIV/0!"),
                    s = new Error("#VALUE!"),
                    a = new Error("#REF!"),
                    u = new Error("#NAME?"),
                    c = new Error("#NUM!"),
                    f = new Error("#N/A"),
                    d = new Error("#ERROR!"),
                    p = new Error("#GETTING_DATA");
                  var b = Object.freeze({
                    __proto__: null,
                    data: p,
                    div0: i,
                    error: d,
                    na: f,
                    name: u,
                    nil: l,
                    num: c,
                    ref: a,
                    value: s,
                  });
                  function j(e) {
                    const t = [];
                    return (
                      h(e, (e) => {
                        t.push(e);
                      }),
                      t
                    );
                  }
                  function h(e, t) {
                    let o = -1;
                    const n = e.length;
                    for (; ++o < n && !1 !== t(e[o], o, e); );
                    return e;
                  }
                  function g(e) {
                    let t,
                      o = e.length;
                    for (; o--; )
                      if (((t = e[o]), "number" != typeof t))
                        if (!0 !== t)
                          if (!1 !== t) {
                            if ("string" == typeof t) {
                              const n = T(t);
                              e[o] = n instanceof Error ? 0 : n;
                            }
                          } else e[o] = 0;
                        else e[o] = 1;
                    return e;
                  }
                  function m(e, t) {
                    if (!e) return s;
                    (e.every((e) => Array.isArray(e)) && 0 !== e.length) ||
                      (e = [[...e]]),
                      e.map((t, o) => {
                        t.map((t, n) => {
                          t || (e[o][n] = 0);
                        });
                      });
                    const o = e.reduce(
                        (t, o, n) => (o.length > e[t].length ? n : t),
                        0
                      ),
                      n = e[o].length;
                    return e.map((e) => [
                      ...e,
                      ...Array(n - e.length).fill(t || 0),
                    ]);
                  }
                  function v() {
                    let e;
                    if (1 === arguments.length) {
                      const o = arguments[0];
                      e =
                        null != (t = o) &&
                        "number" == typeof t.length &&
                        "string" != typeof t
                          ? j.apply(null, arguments)
                          : [o];
                    } else e = Array.from(arguments);
                    for (var t; !C(e); ) e = y(e);
                    return e;
                  }
                  function y(e) {
                    return e && e.reduce
                      ? e.reduce((e, t) => {
                          const o = Array.isArray(e),
                            n = Array.isArray(t);
                          return o && n
                            ? e.concat(t)
                            : o
                            ? (e.push(t), e)
                            : n
                            ? [e].concat(t)
                            : [e, t];
                        })
                      : [e];
                  }
                  function C(e) {
                    if (!e) return !1;
                    for (let t = 0; t < e.length; ++t)
                      if (Array.isArray(e[t])) return !1;
                    return !0;
                  }
                  function x(e, t) {
                    return (
                      (t = t || 1),
                      e && "function" == typeof e.slice ? e.slice(t) : e
                    );
                  }
                  function w(e) {
                    return e ? e[0].map((t, o) => e.map((e) => e[o])) : s;
                  }
                  function A(e, t) {
                    let o = null;
                    return (
                      h(e, (e, n) => {
                        if (e[0] === t) return (o = n), !1;
                      }),
                      null == o ? s : o
                    );
                  }
                  function E() {
                    for (let e = 0; e < arguments.length; e++)
                      if (arguments[e] instanceof Error) return arguments[e];
                  }
                  function _() {
                    let e = arguments.length;
                    for (; e--; ) if (arguments[e] instanceof Error) return !0;
                    return !1;
                  }
                  function M(e) {
                    const t = 1e14;
                    return Math.round(e * t) / t;
                  }
                  function I() {
                    return v
                      .apply(null, arguments)
                      .filter((e) => "number" == typeof e);
                  }
                  function N(e) {
                    if ("boolean" == typeof e) return e;
                    if (e instanceof Error) return e;
                    if ("number" == typeof e) return 0 !== e;
                    if ("string" == typeof e) {
                      const t = e.toUpperCase();
                      if ("TRUE" === t) return !0;
                      if ("FALSE" === t) return !1;
                    }
                    return (e instanceof Date && !isNaN(e)) || s;
                  }
                  function S(e) {
                    if (!isNaN(e)) {
                      if (e instanceof Date) return new Date(e);
                      const t = parseFloat(e);
                      return t < 0 || t >= 2958466
                        ? c
                        : (function (e) {
                            e < 60 && (e += 1);
                            const t = Math.floor(e - 25569),
                              o = new Date(86400 * t * 1e3),
                              n = e - Math.floor(e) + 1e-7;
                            let r = Math.floor(86400 * n);
                            const l = r % 60;
                            r -= l;
                            const i = Math.floor(r / 3600),
                              s = Math.floor(r / 60) % 60;
                            let a = o.getUTCDate(),
                              u = o.getUTCMonth();
                            return (
                              e >= 60 && e < 61 && ((a = 29), (u = 1)),
                              new Date(o.getUTCFullYear(), u, a, i, s, l)
                            );
                          })(t);
                    }
                    return "string" != typeof e ||
                      ((e = /(\d{4})-(\d\d?)-(\d\d?)$/.test(e)
                        ? new Date(e + "T00:00:00.000")
                        : new Date(e)),
                      isNaN(e))
                      ? s
                      : e;
                  }
                  function D(e) {
                    let t,
                      o = e.length;
                    for (; o--; ) {
                      if (((t = S(e[o])), t === s)) return t;
                      e[o] = t;
                    }
                    return e;
                  }
                  function T(e) {
                    return e instanceof Error
                      ? e
                      : null == e
                      ? 0
                      : ("boolean" == typeof e && (e = +e),
                        isNaN(e) || "" === e ? s : parseFloat(e));
                  }
                  function F(e) {
                    let t, o;
                    if (!e || 0 === (t = e.length)) return s;
                    for (; t--; ) {
                      if (e[t] instanceof Error) return e[t];
                      if (((o = T(e[t])), o instanceof Error)) return o;
                      e[t] = o;
                    }
                    return e;
                  }
                  function L(e) {
                    return e instanceof Error
                      ? e
                      : null == e
                      ? ""
                      : e.toString();
                  }
                  function R() {
                    let e = arguments.length;
                    for (; e--; )
                      if ("string" == typeof arguments[e]) return !0;
                    return !1;
                  }
                  function O(e) {
                    return null != e;
                  }
                  const k = "=",
                    H = [">", ">=", "<", "<=", "=", "<>"],
                    B = "operator",
                    P = "literal",
                    V = [B, P],
                    U = B,
                    q = P;
                  function z(e, t) {
                    if (-1 === V.indexOf(t))
                      throw new Error("Unsupported token type: " + t);
                    return { value: e, type: t };
                  }
                  function Y(e) {
                    return (function (e) {
                      let t = "";
                      const o = [];
                      for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        0 === n && H.indexOf(r) >= 0
                          ? o.push(z(r, U))
                          : (t += r);
                      }
                      return (
                        t.length > 0 &&
                          o.push(
                            z(
                              (function (e) {
                                return (
                                  "string" != typeof e ||
                                    (/^\d+(\.\d+)?$/.test(e) &&
                                      (e =
                                        -1 === e.indexOf(".")
                                          ? parseInt(e, 10)
                                          : parseFloat(e))),
                                  e
                                );
                              })(t),
                              q
                            )
                          ),
                        o.length > 0 && o[0].type !== U && o.unshift(z(k, U)),
                        o
                      );
                    })(
                      (function (e) {
                        const t = e.length,
                          o = [];
                        let n = 0,
                          r = "",
                          l = "";
                        for (; n < t; ) {
                          const t = e.charAt(n);
                          switch (t) {
                            case ">":
                            case "<":
                            case "=":
                              (l += t), r.length > 0 && (o.push(r), (r = ""));
                              break;
                            default:
                              l.length > 0 && (o.push(l), (l = "")), (r += t);
                          }
                          n++;
                        }
                        return (
                          r.length > 0 && o.push(r),
                          l.length > 0 && o.push(l),
                          o
                        );
                      })(e)
                    );
                  }
                  const W = function (e) {
                      const t = [];
                      let o;
                      for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        switch (r.type) {
                          case U:
                            o = r.value;
                            break;
                          case q:
                            t.push(r.value);
                        }
                      }
                      return (function (e, t) {
                        let o = !1;
                        switch (t) {
                          case ">":
                            o = e[0] > e[1];
                            break;
                          case ">=":
                            o = e[0] >= e[1];
                            break;
                          case "<":
                            o = e[0] < e[1];
                            break;
                          case "<=":
                            o = e[0] <= e[1];
                            break;
                          case "=":
                            o = e[0] == e[1];
                            break;
                          case "<>":
                            o = e[0] != e[1];
                        }
                        return o;
                      })(t, o);
                    },
                    X = {};
                  function G(e) {
                    return (
                      [s, a, i, c, u, l].indexOf(e) >= 0 ||
                      ("number" == typeof e && (isNaN(e) || !isFinite(e)))
                    );
                  }
                  function K(e) {
                    return G(e) || e === f;
                  }
                  function $(e) {
                    return !0 === e || !1 === e;
                  }
                  function Z(e) {
                    return "number" == typeof e && !isNaN(e) && isFinite(e);
                  }
                  function Q(e) {
                    return "string" == typeof e;
                  }
                  function J() {
                    const e = [];
                    for (let t = 0; t < arguments.length; ++t) {
                      let o = !1;
                      const n = arguments[t];
                      for (
                        let t = 0;
                        t < e.length && ((o = e[t] === n), !o);
                        ++t
                      );
                      o || e.push(n);
                    }
                    return e;
                  }
                  function ee(e, t, o, n) {
                    if (!t || !o) return f;
                    n = !(0 === n || !1 === n);
                    let r = f;
                    const l = "number" == typeof e;
                    let i = !1;
                    for (let s = 0; s < t.length; s++) {
                      const u = t[s];
                      if (u[0] === e) {
                        r = o < u.length + 1 ? u[o - 1] : a;
                        break;
                      }
                      !i &&
                        ((l && n && u[0] <= e) ||
                          (n &&
                            "string" == typeof u[0] &&
                            u[0].localeCompare(e) < 0)) &&
                        (r = o < u.length + 1 ? u[o - 1] : a),
                        l && u[0] > e && (i = !0);
                    }
                    return r;
                  }
                  function te() {
                    const e = v(arguments).filter(O);
                    if (0 === e.length) return i;
                    const t = E.apply(void 0, e);
                    if (t) return t;
                    const o = I(e),
                      n = o.length;
                    let r,
                      l = 0,
                      s = 0;
                    for (let e = 0; e < n; e++) (l += o[e]), (s += 1);
                    return (r = l / s), isNaN(r) && (r = c), r;
                  }
                  function oe() {
                    const e = v(arguments).filter(O);
                    if (0 === e.length) return i;
                    const t = E.apply(void 0, e);
                    if (t) return t;
                    const o = e,
                      n = o.length;
                    let r,
                      l = 0,
                      s = 0;
                    for (let e = 0; e < n; e++) {
                      const t = o[e];
                      "number" == typeof t && (l += t),
                        !0 === t && l++,
                        null !== t && s++;
                    }
                    return (r = l / s), isNaN(r) && (r = c), r;
                  }
                  X.TYPE = (e) => {
                    switch (e) {
                      case l:
                        return 1;
                      case i:
                        return 2;
                      case s:
                        return 3;
                      case a:
                        return 4;
                      case u:
                        return 5;
                      case c:
                        return 6;
                      case f:
                        return 7;
                      case p:
                        return 8;
                    }
                    return f;
                  };
                  const ne = {
                      DIST: function (e, t, o, r, l, i) {
                        return arguments.length < 4
                          ? s
                          : ((l = void 0 === l ? 0 : l),
                            (i = void 0 === i ? 1 : i),
                            _(
                              (e = T(e)),
                              (t = T(t)),
                              (o = T(o)),
                              (l = T(l)),
                              (i = T(i))
                            )
                              ? s
                              : ((e = (e - l) / (i - l)),
                                r ? n.beta.cdf(e, t, o) : n.beta.pdf(e, t, o)));
                      },
                      INV: (e, t, o, r, l) => (
                        (r = void 0 === r ? 0 : r),
                        (l = void 0 === l ? 1 : l),
                        _(
                          (e = T(e)),
                          (t = T(t)),
                          (o = T(o)),
                          (r = T(r)),
                          (l = T(l))
                        )
                          ? s
                          : n.beta.inv(e, t, o) * (l - r) + r
                      ),
                    },
                    re = {
                      DIST: (e, t, o, r) =>
                        _((e = T(e)), (t = T(t)), (o = T(o)), (r = T(r)))
                          ? s
                          : r
                          ? n.binomial.cdf(e, t, o)
                          : n.binomial.pdf(e, t, o),
                    };
                  (re.DIST.RANGE = (e, t, o, n) => {
                    if (
                      ((n = void 0 === n ? o : n),
                      _((e = T(e)), (t = T(t)), (o = T(o)), (n = T(n))))
                    )
                      return s;
                    let r = 0;
                    for (let l = o; l <= n; l++)
                      r += Ue(e, l) * Math.pow(t, l) * Math.pow(1 - t, e - l);
                    return r;
                  }),
                    (re.INV = (e, t, o) => {
                      if (_((e = T(e)), (t = T(t)), (o = T(o)))) return s;
                      let r = 0;
                      for (; r <= e; ) {
                        if (n.binomial.cdf(r, e, t) >= o) return r;
                        r++;
                      }
                    });
                  const le = {
                    DIST: (e, t, o) =>
                      _((e = T(e)), (t = T(t)))
                        ? s
                        : o
                        ? n.chisquare.cdf(e, t)
                        : n.chisquare.pdf(e, t),
                  };
                  (le.DIST.RT = (e, t) =>
                    !e | !t
                      ? f
                      : e < 1 || t > Math.pow(10, 10)
                      ? c
                      : "number" != typeof e || "number" != typeof t
                      ? s
                      : 1 - n.chisquare.cdf(e, t)),
                    (le.INV = (e, t) =>
                      _((e = T(e)), (t = T(t))) ? s : n.chisquare.inv(e, t)),
                    (le.INV.RT = (e, t) =>
                      !e | !t
                        ? f
                        : e < 0 || e > 1 || t < 1 || t > Math.pow(10, 10)
                        ? c
                        : "number" != typeof e || "number" != typeof t
                        ? s
                        : n.chisquare.inv(1 - e, t)),
                    (le.TEST = function (e, t) {
                      if (2 !== arguments.length) return f;
                      if (!(e instanceof Array && t instanceof Array)) return s;
                      if (e.length !== t.length) return s;
                      if (e[0] && t[0] && e[0].length !== t[0].length) return s;
                      const o = e.length;
                      let n, r, l;
                      for (r = 0; r < o; r++)
                        e[r] instanceof Array ||
                          ((n = e[r]), (e[r] = []), e[r].push(n)),
                          t[r] instanceof Array ||
                            ((n = t[r]), (t[r] = []), t[r].push(n));
                      const i = e[0].length,
                        a = 1 === i ? o - 1 : (o - 1) * (i - 1);
                      let u = 0;
                      const c = Math.PI;
                      for (r = 0; r < o; r++)
                        for (l = 0; l < i; l++)
                          u += Math.pow(e[r][l] - t[r][l], 2) / t[r][l];
                      return (
                        Math.round(
                          1e6 *
                            (function (e, t) {
                              let o = Math.exp(-0.5 * e);
                              t % 2 == 1 && (o *= Math.sqrt((2 * e) / c));
                              let n = t;
                              for (; n >= 2; ) (o = (o * e) / n), (n -= 2);
                              let r = o,
                                l = t;
                              for (; r > 1e-10 * o; )
                                (l += 2), (r = (r * e) / l), (o += r);
                              return 1 - o;
                            })(u, a)
                        ) / 1e6
                      );
                    });
                  const ie = {};
                  function se() {
                    return I(v(arguments)).length;
                  }
                  function ae() {
                    const e = v(arguments);
                    return e.length - ue(e);
                  }
                  function ue() {
                    const e = v(arguments);
                    let t,
                      o = 0;
                    for (let n = 0; n < e.length; n++)
                      (t = e[n]), (null != t && "" !== t) || o++;
                    return o;
                  }
                  (ie.NORM = (e, t, o) =>
                    _((e = T(e)), (t = T(t)), (o = T(o)))
                      ? s
                      : n.normalci(1, e, t, o)[1] - 1),
                    (ie.T = (e, t, o) =>
                      _((e = T(e)), (t = T(t)), (o = T(o)))
                        ? s
                        : n.tci(1, e, t, o)[1] - 1);
                  const ce = {
                      P: (e, t) => {
                        if (_((e = F(v(e))), (t = F(v(t))))) return s;
                        const o = n.mean(e),
                          r = n.mean(t);
                        let l = 0;
                        const i = e.length;
                        for (let n = 0; n < i; n++)
                          l += (e[n] - o) * (t[n] - r);
                        return l / i;
                      },
                      S: (e, t) =>
                        _((e = F(v(e))), (t = F(v(t))))
                          ? s
                          : n.covariance(e, t),
                    },
                    fe = {
                      DIST: (e, t, o) =>
                        _((e = T(e)), (t = T(t)))
                          ? s
                          : o
                          ? n.exponential.cdf(e, t)
                          : n.exponential.pdf(e, t),
                    },
                    de = {};
                  function pe(e, t, o) {
                    if (_((e = T(e)), (t = F(v(t))), (o = F(v(o))))) return s;
                    const r = n.mean(o),
                      l = n.mean(t),
                      i = o.length;
                    let a = 0,
                      u = 0;
                    for (let e = 0; e < i; e++)
                      (a += (o[e] - r) * (t[e] - l)),
                        (u += Math.pow(o[e] - r, 2));
                    const c = a / u;
                    return l - c * r + c * e;
                  }
                  function be(e) {
                    return (e = T(e)) instanceof Error
                      ? e
                      : 0 === e || (parseInt(e, 10) === e && e < 0)
                      ? c
                      : n.gammafn(e);
                  }
                  function je(e) {
                    return (e = T(e)) instanceof Error ? e : n.gammaln(e);
                  }
                  (de.DIST = (e, t, o, r) =>
                    _((e = T(e)), (t = T(t)), (o = T(o)))
                      ? s
                      : r
                      ? n.centralF.cdf(e, t, o)
                      : n.centralF.pdf(e, t, o)),
                    (de.DIST.RT = function (e, t, o) {
                      return 3 !== arguments.length
                        ? f
                        : e < 0 || t < 1 || o < 1
                        ? c
                        : "number" != typeof e ||
                          "number" != typeof t ||
                          "number" != typeof o
                        ? s
                        : 1 - n.centralF.cdf(e, t, o);
                    }),
                    (de.INV = (e, t, o) =>
                      _((e = T(e)), (t = T(t)), (o = T(o)))
                        ? s
                        : e <= 0 || e > 1
                        ? c
                        : n.centralF.inv(e, t, o)),
                    (de.INV.RT = function (e, t, o) {
                      return 3 !== arguments.length
                        ? f
                        : e < 0 ||
                          e > 1 ||
                          t < 1 ||
                          t > Math.pow(10, 10) ||
                          o < 1 ||
                          o > Math.pow(10, 10)
                        ? c
                        : "number" != typeof e ||
                          "number" != typeof t ||
                          "number" != typeof o
                        ? s
                        : n.centralF.inv(1 - e, t, o);
                    }),
                    (de.TEST = (e, t) => {
                      if (!e || !t) return f;
                      if (!(e instanceof Array && t instanceof Array)) return f;
                      if (e.length < 2 || t.length < 2) return i;
                      const o = (e, t) => {
                          let o = 0;
                          for (let n = 0; n < e.length; n++)
                            o += Math.pow(e[n] - t, 2);
                          return o;
                        },
                        n = $e(e) / e.length,
                        r = $e(t) / t.length;
                      return (
                        o(e, n) / (e.length - 1) / (o(t, r) / (t.length - 1))
                      );
                    }),
                    (be.DIST = function (e, t, o, r) {
                      return 4 !== arguments.length
                        ? f
                        : e < 0 ||
                          t <= 0 ||
                          o <= 0 ||
                          "number" != typeof e ||
                          "number" != typeof t ||
                          "number" != typeof o
                        ? s
                        : r
                        ? n.gamma.cdf(e, t, o, !0)
                        : n.gamma.pdf(e, t, o, !1);
                    }),
                    (be.INV = function (e, t, o) {
                      return 3 !== arguments.length
                        ? f
                        : e < 0 || e > 1 || t <= 0 || o <= 0
                        ? c
                        : "number" != typeof e ||
                          "number" != typeof t ||
                          "number" != typeof o
                        ? s
                        : n.gamma.inv(e, t, o);
                    }),
                    (je.PRECISE = function (e) {
                      return 1 !== arguments.length
                        ? f
                        : e <= 0
                        ? c
                        : "number" != typeof e
                        ? s
                        : n.gammaln(e);
                    });
                  const he = {};
                  function ge(e, t) {
                    return _((e = F(v(e))), (t = T(t)))
                      ? e
                      : t < 0 || e.length < t
                      ? s
                      : e.sort((e, t) => t - e)[t - 1];
                  }
                  function me(e, t) {
                    if (_((e = F(v(e))), (t = F(v(t))))) return s;
                    const o = n.mean(e),
                      r = n.mean(t),
                      l = t.length;
                    let i = 0,
                      a = 0;
                    for (let n = 0; n < l; n++)
                      (i += (t[n] - r) * (e[n] - o)),
                        (a += Math.pow(t[n] - r, 2));
                    const u = i / a;
                    return [u, o - u * r];
                  }
                  he.DIST = (e, t, o, n, r) => {
                    if (_((e = T(e)), (t = T(t)), (o = T(o)), (n = T(n))))
                      return s;
                    function l(e, t, o, n) {
                      return (Ue(o, e) * Ue(n - o, t - e)) / Ue(n, t);
                    }
                    return r
                      ? (function (e, t, o, n) {
                          let r = 0;
                          for (let i = 0; i <= e; i++) r += l(i, t, o, n);
                          return r;
                        })(e, t, o, n)
                      : l(e, t, o, n);
                  };
                  const ve = {};
                  function ye() {
                    const e = v(arguments),
                      t = E.apply(void 0, e);
                    if (t) return t;
                    const o = I(e);
                    return 0 === o.length ? 0 : Math.max.apply(Math, o);
                  }
                  function Ce() {
                    const e = v(arguments),
                      t = E.apply(void 0, e);
                    if (t) return t;
                    const o = g(e);
                    let r = n.median(o);
                    return isNaN(r) && (r = c), r;
                  }
                  function xe() {
                    const e = v(arguments),
                      t = E.apply(void 0, e);
                    if (t) return t;
                    const o = I(e);
                    return 0 === o.length ? 0 : Math.min.apply(Math, o);
                  }
                  (ve.DIST = (e, t, o, r) =>
                    _((e = T(e)), (t = T(t)), (o = T(o)))
                      ? s
                      : r
                      ? n.lognormal.cdf(e, t, o)
                      : n.lognormal.pdf(e, t, o)),
                    (ve.INV = (e, t, o) =>
                      _((e = T(e)), (t = T(t)), (o = T(o)))
                        ? s
                        : n.lognormal.inv(e, t, o));
                  const we = {
                      MULT: function () {
                        const e = F(v(arguments));
                        if (e instanceof Error) return e;
                        const t = e.length,
                          o = {};
                        let n,
                          r = [],
                          l = 0;
                        for (let i = 0; i < t; i++)
                          (n = e[i]),
                            (o[n] = o[n] ? o[n] + 1 : 1),
                            o[n] > l && ((l = o[n]), (r = [])),
                            o[n] === l && (r[r.length] = n);
                        return r;
                      },
                      SNGL: function () {
                        const e = F(v(arguments));
                        return e instanceof Error
                          ? e
                          : we.MULT(e).sort((e, t) => e - t)[0];
                      },
                    },
                    Ae = {
                      DIST: (e, t, o, r) =>
                        _((e = T(e)), (t = T(t)), (o = T(o)))
                          ? s
                          : r
                          ? n.negbin.cdf(e, t, o)
                          : n.negbin.pdf(e, t, o),
                    },
                    Ee = {};
                  function _e(e, t) {
                    if (_((t = F(v(t))), (e = F(v(e))))) return s;
                    const o = n.mean(e),
                      r = n.mean(t),
                      l = e.length;
                    let i = 0,
                      a = 0,
                      u = 0;
                    for (let n = 0; n < l; n++)
                      (i += (e[n] - o) * (t[n] - r)),
                        (a += Math.pow(e[n] - o, 2)),
                        (u += Math.pow(t[n] - r, 2));
                    return i / Math.sqrt(a * u);
                  }
                  (Ee.DIST = (e, t, o, r) =>
                    _((e = T(e)), (t = T(t)), (o = T(o)))
                      ? s
                      : o <= 0
                      ? c
                      : r
                      ? n.normal.cdf(e, t, o)
                      : n.normal.pdf(e, t, o)),
                    (Ee.INV = (e, t, o) =>
                      _((e = T(e)), (t = T(t)), (o = T(o)))
                        ? s
                        : n.normal.inv(e, t, o)),
                    (Ee.S = {}),
                    (Ee.S.DIST = (e, t) =>
                      (e = T(e)) instanceof Error
                        ? s
                        : t
                        ? n.normal.cdf(e, 0, 1)
                        : n.normal.pdf(e, 0, 1)),
                    (Ee.S.INV = (e) =>
                      (e = T(e)) instanceof Error ? s : n.normal.inv(e, 0, 1));
                  const Me = {
                      EXC: (e, t) => {
                        if (_((e = F(v(e))), (t = T(t)))) return s;
                        const o = (e = e.sort((e, t) => e - t)).length;
                        if (t < 1 / (o + 1) || t > 1 - 1 / (o + 1)) return c;
                        const n = t * (o + 1) - 1,
                          r = Math.floor(n);
                        return M(
                          n === r ? e[n] : e[r] + (n - r) * (e[r + 1] - e[r])
                        );
                      },
                      INC: (e, t) => {
                        if (_((e = F(v(e))), (t = T(t)))) return s;
                        const o =
                            t * ((e = e.sort((e, t) => e - t)).length - 1),
                          n = Math.floor(o);
                        return M(
                          o === n ? e[o] : e[n] + (o - n) * (e[n + 1] - e[n])
                        );
                      },
                    },
                    Ie = {
                      EXC: (e, t, o) => {
                        if (
                          ((o = void 0 === o ? 3 : o),
                          _((e = F(v(e))), (t = T(t)), (o = T(o))))
                        )
                          return s;
                        e = e.sort((e, t) => e - t);
                        const n = J.apply(null, e),
                          r = e.length,
                          l = n.length,
                          i = Math.pow(10, o);
                        let a = 0,
                          u = !1,
                          c = 0;
                        for (; !u && c < l; )
                          t === n[c]
                            ? ((a = (e.indexOf(n[c]) + 1) / (r + 1)), (u = !0))
                            : t >= n[c] &&
                              (t < n[c + 1] || c === l - 1) &&
                              ((a =
                                (e.indexOf(n[c]) +
                                  1 +
                                  (t - n[c]) / (n[c + 1] - n[c])) /
                                (r + 1)),
                              (u = !0)),
                            c++;
                        return Math.floor(a * i) / i;
                      },
                      INC: (e, t, o) => {
                        if (
                          ((o = void 0 === o ? 3 : o),
                          _((e = F(v(e))), (t = T(t)), (o = T(o))))
                        )
                          return s;
                        e = e.sort((e, t) => e - t);
                        const n = J.apply(null, e),
                          r = e.length,
                          l = n.length,
                          i = Math.pow(10, o);
                        let a = 0,
                          u = !1,
                          c = 0;
                        for (; !u && c < l; )
                          t === n[c]
                            ? ((a = e.indexOf(n[c]) / (r - 1)), (u = !0))
                            : t >= n[c] &&
                              (t < n[c + 1] || c === l - 1) &&
                              ((a =
                                (e.indexOf(n[c]) +
                                  (t - n[c]) / (n[c + 1] - n[c])) /
                                (r - 1)),
                              (u = !0)),
                            c++;
                        return Math.floor(a * i) / i;
                      },
                    },
                    Ne = {
                      DIST: (e, t, o) =>
                        _((e = T(e)), (t = T(t)))
                          ? s
                          : o
                          ? n.poisson.cdf(e, t)
                          : n.poisson.pdf(e, t),
                    },
                    Se = {
                      EXC: (e, t) => {
                        if (_((e = F(v(e))), (t = T(t)))) return s;
                        switch (t) {
                          case 1:
                            return Me.EXC(e, 0.25);
                          case 2:
                            return Me.EXC(e, 0.5);
                          case 3:
                            return Me.EXC(e, 0.75);
                          default:
                            return c;
                        }
                      },
                      INC: (e, t) => {
                        if (_((e = F(v(e))), (t = T(t)))) return s;
                        switch (t) {
                          case 1:
                            return Me.INC(e, 0.25);
                          case 2:
                            return Me.INC(e, 0.5);
                          case 3:
                            return Me.INC(e, 0.75);
                          default:
                            return c;
                        }
                      },
                    },
                    De = {};
                  function Te() {
                    const e = F(v(arguments));
                    if (e instanceof Error) return e;
                    const t = n.mean(e),
                      o = e.length;
                    let r = 0;
                    for (let n = 0; n < o; n++) r += Math.pow(e[n] - t, 3);
                    return (
                      (o * r) /
                      ((o - 1) * (o - 2) * Math.pow(n.stdev(e, !0), 3))
                    );
                  }
                  function Fe(e, t) {
                    return _((e = F(v(e))), (t = T(t)))
                      ? e
                      : e.sort((e, t) => e - t)[t - 1];
                  }
                  (De.AVG = (e, t, o) => {
                    if (_((e = T(e)), (t = F(v(t))))) return s;
                    const n = (o = o || !1) ? (e, t) => e - t : (e, t) => t - e,
                      r = (t = (t = v(t)).sort(n)).length;
                    let l = 0;
                    for (let o = 0; o < r; o++) t[o] === e && l++;
                    return l > 1
                      ? (2 * t.indexOf(e) + l + 1) / 2
                      : t.indexOf(e) + 1;
                  }),
                    (De.EQ = (e, t, o) => {
                      if (_((e = T(e)), (t = F(v(t))))) return s;
                      const n = (o = o || !1)
                        ? (e, t) => e - t
                        : (e, t) => t - e;
                      return (t = t.sort(n)).indexOf(e) + 1;
                    }),
                    (Te.P = function () {
                      const e = F(v(arguments));
                      if (e instanceof Error) return e;
                      const t = n.mean(e),
                        o = e.length;
                      let r = 0,
                        l = 0;
                      for (let n = 0; n < o; n++)
                        (l += Math.pow(e[n] - t, 3)),
                          (r += Math.pow(e[n] - t, 2));
                      return (l /= o), (r /= o), l / Math.pow(r, 1.5);
                    });
                  const Le = {
                      P: function () {
                        const e = Oe.P.apply(this, arguments);
                        let t = Math.sqrt(e);
                        return isNaN(t) && (t = c), t;
                      },
                      S: function () {
                        const e = Oe.S.apply(this, arguments);
                        return Math.sqrt(e);
                      },
                    },
                    Re = {
                      DIST: (e, t, o) =>
                        1 !== o && 2 !== o
                          ? c
                          : 1 === o
                          ? Re.DIST.RT(e, t)
                          : Re.DIST["2T"](e, t),
                    };
                  (Re.DIST["2T"] = function (e, t) {
                    return 2 !== arguments.length
                      ? f
                      : e < 0 || t < 1
                      ? c
                      : "number" != typeof e || "number" != typeof t
                      ? s
                      : 2 * (1 - n.studentt.cdf(e, t));
                  }),
                    (Re.DIST.RT = function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : e < 0 || t < 1
                        ? c
                        : "number" != typeof e || "number" != typeof t
                        ? s
                        : 1 - n.studentt.cdf(e, t);
                    }),
                    (Re.INV = (e, t) =>
                      _((e = T(e)), (t = T(t))) ? s : n.studentt.inv(e, t)),
                    (Re.INV["2T"] = (e, t) => (
                      (e = T(e)),
                      (t = T(t)),
                      e <= 0 || e > 1 || t < 1
                        ? c
                        : _(e, t)
                        ? s
                        : Math.abs(n.studentt.inv(e / 2, t))
                    )),
                    (Re.TEST = (e, t) => {
                      if (_((e = F(v(e))), (t = F(v(t))))) return s;
                      const o = n.mean(e),
                        r = n.mean(t);
                      let l,
                        i = 0,
                        a = 0;
                      for (l = 0; l < e.length; l++) i += Math.pow(e[l] - o, 2);
                      for (l = 0; l < t.length; l++) a += Math.pow(t[l] - r, 2);
                      (i /= e.length - 1), (a /= t.length - 1);
                      const u =
                        Math.abs(o - r) /
                        Math.sqrt(i / e.length + a / t.length);
                      return Re.DIST["2T"](u, e.length + t.length - 2);
                    });
                  const Oe = {};
                  function ke() {
                    const e = v(arguments),
                      t = e.length;
                    let o = 0,
                      n = 0;
                    const r = oe(e);
                    for (let l = 0; l < t; l++) {
                      const t = e[l];
                      (o +=
                        "number" == typeof t
                          ? Math.pow(t - r, 2)
                          : !0 === t
                          ? Math.pow(1 - r, 2)
                          : Math.pow(0 - r, 2)),
                        null !== t && n++;
                    }
                    return o / (n - 1);
                  }
                  function He() {
                    const e = v(arguments),
                      t = e.length;
                    let o = 0,
                      n = 0;
                    const r = oe(e);
                    let l;
                    for (let l = 0; l < t; l++) {
                      const t = e[l];
                      (o +=
                        "number" == typeof t
                          ? Math.pow(t - r, 2)
                          : !0 === t
                          ? Math.pow(1 - r, 2)
                          : Math.pow(0 - r, 2)),
                        null !== t && n++;
                    }
                    return (l = o / n), isNaN(l) && (l = c), l;
                  }
                  (Oe.P = function () {
                    const e = I(v(arguments)),
                      t = e.length;
                    let o = 0;
                    const n = te(e);
                    let r;
                    for (let r = 0; r < t; r++) o += Math.pow(e[r] - n, 2);
                    return (r = o / t), isNaN(r) && (r = c), r;
                  }),
                    (Oe.S = function () {
                      const e = I(v(arguments)),
                        t = e.length;
                      let o = 0;
                      const n = te(e);
                      for (let r = 0; r < t; r++) o += Math.pow(e[r] - n, 2);
                      return o / (t - 1);
                    });
                  const Be = {
                      DIST: (e, t, o, n) =>
                        _((e = T(e)), (t = T(t)), (o = T(o)))
                          ? s
                          : n
                          ? 1 - Math.exp(-Math.pow(e / o, t))
                          : (Math.pow(e, t - 1) *
                              Math.exp(-Math.pow(e / o, t)) *
                              t) /
                            Math.pow(o, t),
                    },
                    Pe = {};
                  function Ve(e, t, o) {
                    const n = E((e = T(e)), (t = T(t)), (o = T(o)));
                    if (n) return n;
                    if (0 === t) return 0;
                    t = Math.abs(t);
                    const r = -Math.floor(Math.log(t) / Math.log(10));
                    return e >= 0
                      ? Ke(Math.ceil(e / t) * t, r)
                      : 0 === o
                      ? -Ke(Math.floor(Math.abs(e) / t) * t, r)
                      : -Ke(Math.ceil(Math.abs(e) / t) * t, r);
                  }
                  function Ue(e, t) {
                    return (
                      E((e = T(e)), (t = T(t))) ||
                      (e < t ? c : ze(e) / (ze(t) * ze(e - t)))
                    );
                  }
                  (Pe.TEST = (e, t, o) => {
                    if (_((e = F(v(e))), (t = T(t)))) return s;
                    o = o || Le.S(e);
                    const n = e.length;
                    return 1 - Ee.S.DIST((te(e) - t) / (o / Math.sqrt(n)), !0);
                  }),
                    (Ve.MATH = Ve),
                    (Ve.PRECISE = Ve);
                  const qe = [];
                  function ze(e) {
                    if ((e = T(e)) instanceof Error) return e;
                    const t = Math.floor(e);
                    return 0 === t || 1 === t
                      ? 1
                      : (qe[t] > 0 || (qe[t] = ze(t - 1) * t), qe[t]);
                  }
                  function Ye(e, t) {
                    const o = E((e = T(e)), (t = T(t)));
                    if (o) return o;
                    if (0 === t) return 0;
                    if (!((e >= 0 && t > 0) || (e <= 0 && t < 0))) return c;
                    t = Math.abs(t);
                    const n = -Math.floor(Math.log(t) / Math.log(10));
                    return e >= 0
                      ? Ke(Math.floor(e / t) * t, n)
                      : -Ke(Math.ceil(Math.abs(e) / t), n);
                  }
                  (Ye.MATH = (e, t, o) => {
                    if (t instanceof Error) return t;
                    t = void 0 === t ? 0 : t;
                    const n = E((e = T(e)), (t = T(t)), (o = T(o)));
                    if (n) return n;
                    if (0 === t) return 0;
                    t = t ? Math.abs(t) : 1;
                    const r = -Math.floor(Math.log(t) / Math.log(10));
                    return e >= 0
                      ? Ke(Math.floor(e / t) * t, r)
                      : 0 === o || void 0 === o
                      ? -Ke(Math.ceil(Math.abs(e) / t) * t, r)
                      : -Ke(Math.floor(Math.abs(e) / t) * t, r);
                  }),
                    (Ye.PRECISE = Ye.MATH);
                  const We = { CEILING: Ve };
                  function Xe(e, t) {
                    const o = E((e = T(e)), (t = T(t)));
                    if (o) return o;
                    if (0 === e && 0 === t) return c;
                    const n = Math.pow(e, t);
                    return isNaN(n) ? c : n;
                  }
                  function Ge() {
                    const e = v(arguments).filter((e) => null != e);
                    if (0 === e.length) return 0;
                    const t = F(e);
                    if (t instanceof Error) return t;
                    let o = 1;
                    for (let e = 0; e < t.length; e++) o *= t[e];
                    return o;
                  }
                  function Ke(e, t) {
                    return (
                      E((e = T(e)), (t = T(t))) ||
                      Number(Math.round(Number(e + "e" + t)) + "e" + -1 * t)
                    );
                  }
                  function $e() {
                    let e = 0;
                    return (
                      h(j(arguments), (t) => {
                        if (e instanceof Error) return !1;
                        if (t instanceof Error) e = t;
                        else if ("number" == typeof t) e += t;
                        else if ("string" == typeof t) {
                          const o = parseFloat(t);
                          !isNaN(o) && (e += o);
                        } else if (Array.isArray(t)) {
                          const o = $e.apply(null, t);
                          o instanceof Error ? (e = o) : (e += o);
                        }
                      }),
                      e
                    );
                  }
                  var Ze = Object.freeze({
                    __proto__: null,
                    ADD: function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : E((e = T(e)), (t = T(t))) || e + t;
                    },
                    DIVIDE: function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : E((e = T(e)), (t = T(t))) || (0 === t ? i : e / t);
                    },
                    EQ: function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : e instanceof Error
                        ? e
                        : t instanceof Error
                        ? t
                        : (null === e && (e = void 0),
                          null === t && (t = void 0),
                          e === t);
                    },
                    GT: function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : e instanceof Error
                        ? e
                        : t instanceof Error
                        ? t
                        : (R(e, t)
                            ? ((e = L(e)), (t = L(t)))
                            : ((e = T(e)), (t = T(t))),
                          E(e, t) || e > t);
                    },
                    GTE: function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : (R(e, t)
                            ? ((e = L(e)), (t = L(t)))
                            : ((e = T(e)), (t = T(t))),
                          E(e, t) || e >= t);
                    },
                    LT: function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : (R(e, t)
                            ? ((e = L(e)), (t = L(t)))
                            : ((e = T(e)), (t = T(t))),
                          E(e, t) || e < t);
                    },
                    LTE: function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : (R(e, t)
                            ? ((e = L(e)), (t = L(t)))
                            : ((e = T(e)), (t = T(t))),
                          E(e, t) || e <= t);
                    },
                    MINUS: function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : E((e = T(e)), (t = T(t))) || e - t;
                    },
                    MULTIPLY: function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : E((e = T(e)), (t = T(t))) || e * t;
                    },
                    NE: function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : e instanceof Error
                        ? e
                        : t instanceof Error
                        ? t
                        : (null === e && (e = void 0),
                          null === t && (t = void 0),
                          e !== t);
                    },
                    POW: function (e, t) {
                      return 2 !== arguments.length ? f : Xe(e, t);
                    },
                  });
                  const Qe = new Date(Date.UTC(1900, 0, 1)),
                    Je = [
                      void 0,
                      0,
                      1,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      1,
                      2,
                      3,
                      4,
                      5,
                      6,
                      0,
                    ],
                    et = [
                      [],
                      [1, 2, 3, 4, 5, 6, 7],
                      [7, 1, 2, 3, 4, 5, 6],
                      [6, 0, 1, 2, 3, 4, 5],
                      [],
                      [],
                      [],
                      [],
                      [],
                      [],
                      [],
                      [7, 1, 2, 3, 4, 5, 6],
                      [6, 7, 1, 2, 3, 4, 5],
                      [5, 6, 7, 1, 2, 3, 4],
                      [4, 5, 6, 7, 1, 2, 3],
                      [3, 4, 5, 6, 7, 1, 2],
                      [2, 3, 4, 5, 6, 7, 1],
                      [1, 2, 3, 4, 5, 6, 7],
                    ],
                    tt = [
                      [],
                      [6, 0],
                      [0, 1],
                      [1, 2],
                      [2, 3],
                      [3, 4],
                      [4, 5],
                      [5, 6],
                      void 0,
                      void 0,
                      void 0,
                      [0, 0],
                      [1, 1],
                      [2, 2],
                      [3, 3],
                      [4, 4],
                      [5, 5],
                      [6, 6],
                    ];
                  function ot(e, t, o) {
                    (o = o.toUpperCase()), (e = S(e)), (t = S(t));
                    const n = e.getFullYear(),
                      r = e.getMonth(),
                      l = e.getDate(),
                      i = t.getFullYear(),
                      s = t.getMonth(),
                      a = t.getDate();
                    let u;
                    switch (o) {
                      case "Y":
                        u = Math.floor(ft(e, t));
                        break;
                      case "D":
                        u = rt(t, e);
                        break;
                      case "M":
                        (u = s - r + 12 * (i - n)), a < l && u--;
                        break;
                      case "MD":
                        l <= a
                          ? (u = a - l)
                          : (0 === s
                              ? (e.setFullYear(i - 1), e.setMonth(12))
                              : (e.setFullYear(i), e.setMonth(s - 1)),
                            (u = rt(t, e)));
                        break;
                      case "YM":
                        (u = s - r + 12 * (i - n)), a < l && u--, (u %= 12);
                        break;
                      case "YD":
                        s > r || (s === r && a < l)
                          ? e.setFullYear(i)
                          : e.setFullYear(i - 1),
                          (u = rt(t, e));
                    }
                    return u;
                  }
                  function nt(e) {
                    const t = new Date(e);
                    return t.setHours(0, 0, 0, 0), t;
                  }
                  function rt(e, t) {
                    return (
                      (e = S(e)),
                      (t = S(t)),
                      e instanceof Error
                        ? e
                        : t instanceof Error
                        ? t
                        : dt(nt(e)) - dt(nt(t))
                    );
                  }
                  function lt(e, t, o) {
                    if (
                      ((o = N(o || "false")),
                      (e = S(e)),
                      (t = S(t)),
                      e instanceof Error)
                    )
                      return e;
                    if (t instanceof Error) return t;
                    if (o instanceof Error) return o;
                    const n = e.getMonth();
                    let r,
                      l,
                      i = t.getMonth();
                    if (o)
                      (r = 31 === e.getDate() ? 30 : e.getDate()),
                        (l = 31 === t.getDate() ? 30 : t.getDate());
                    else {
                      const o = new Date(e.getFullYear(), n + 1, 0).getDate(),
                        s = new Date(t.getFullYear(), i + 1, 0).getDate();
                      (r = e.getDate() === o ? 30 : e.getDate()),
                        t.getDate() === s
                          ? r < 30
                            ? (i++, (l = 1))
                            : (l = 30)
                          : (l = t.getDate());
                    }
                    return (
                      360 * (t.getFullYear() - e.getFullYear()) +
                      30 * (i - n) +
                      (l - r)
                    );
                  }
                  function it(e) {
                    if ((e = S(e)) instanceof Error) return e;
                    (e = nt(e)).setDate(e.getDate() + 4 - (e.getDay() || 7));
                    const t = new Date(e.getFullYear(), 0, 1);
                    return Math.ceil(((e - t) / 864e5 + 1) / 7);
                  }
                  function st(e, t, o) {
                    return st.INTL(e, t, 1, o);
                  }
                  function at(e, t, o) {
                    return at.INTL(e, t, 1, o);
                  }
                  function ut(e) {
                    return 1 === new Date(e, 1, 29).getMonth();
                  }
                  function ct(e, t) {
                    return Math.ceil((t - e) / 1e3 / 60 / 60 / 24);
                  }
                  function ft(e, t, o) {
                    if ((e = S(e)) instanceof Error) return e;
                    if ((t = S(t)) instanceof Error) return t;
                    o = o || 0;
                    let n = e.getDate();
                    const r = e.getMonth() + 1,
                      l = e.getFullYear();
                    let i = t.getDate();
                    const s = t.getMonth() + 1,
                      a = t.getFullYear();
                    switch (o) {
                      case 0:
                        return (
                          31 === n && 31 === i
                            ? ((n = 30), (i = 30))
                            : 31 === n
                            ? (n = 30)
                            : 30 === n && 31 === i && (i = 30),
                          (i + 30 * s + 360 * a - (n + 30 * r + 360 * l)) / 360
                        );
                      case 1: {
                        const o = (e, t) => {
                          const o = e.getFullYear(),
                            n = new Date(o, 2, 1);
                          if (ut(o) && e < n && t >= n) return !0;
                          const r = t.getFullYear(),
                            l = new Date(r, 2, 1);
                          return ut(r) && t >= l && e < l;
                        };
                        let u = 365;
                        if (
                          l === a ||
                          (l + 1 === a && (r > s || (r === s && n >= i)))
                        )
                          return (
                            ((l === a && ut(l)) ||
                              o(e, t) ||
                              (1 === s && 29 === i)) &&
                              (u = 366),
                            ct(e, t) / u
                          );
                        const c = a - l + 1,
                          f =
                            (new Date(a + 1, 0, 1) - new Date(l, 0, 1)) /
                            1e3 /
                            60 /
                            60 /
                            24 /
                            c;
                        return ct(e, t) / f;
                      }
                      case 2:
                        return ct(e, t) / 360;
                      case 3:
                        return ct(e, t) / 365;
                      case 4:
                        return (
                          (i + 30 * s + 360 * a - (n + 30 * r + 360 * l)) / 360
                        );
                    }
                  }
                  function dt(e) {
                    const t = e > -22038912e5 ? 2 : 1;
                    return Math.ceil((e - Qe) / 864e5) + t;
                  }
                  function pt(e) {
                    return 0 === (e = T(e))
                      ? s
                      : e instanceof Error
                      ? e
                      : String.fromCharCode(e);
                  }
                  function bt(e) {
                    if (_(e)) return e;
                    let t = (e = e || "").charCodeAt(0);
                    return isNaN(t) && (t = s), t;
                  }
                  function jt() {
                    const e = v(arguments),
                      t = E.apply(void 0, e);
                    if (t) return t;
                    let o = 0;
                    for (; (o = e.indexOf(!0)) > -1; ) e[o] = "TRUE";
                    let n = 0;
                    for (; (n = e.indexOf(!1)) > -1; ) e[n] = "FALSE";
                    return e.join("");
                  }
                  (st.INTL = (e, t, o, n) => {
                    if ((e = S(e)) instanceof Error) return e;
                    if ((t = S(t)) instanceof Error) return t;
                    let r = !1;
                    const l = [],
                      i = [1, 2, 3, 4, 5, 6, 0],
                      a = new RegExp("^[0|1]{7}$");
                    if (void 0 === o) o = tt[1];
                    else if ("string" == typeof o && a.test(o)) {
                      (r = !0), (o = o.split(""));
                      for (let e = 0; e < o.length; e++)
                        "1" === o[e] && l.push(i[e]);
                    } else o = tt[o];
                    if (!(o instanceof Array)) return s;
                    void 0 === n ? (n = []) : n instanceof Array || (n = [n]);
                    for (let e = 0; e < n.length; e++) {
                      const t = S(n[e]);
                      if (t instanceof Error) return t;
                      n[e] = t;
                    }
                    const u = Math.round((t - e) / 864e5) + 1;
                    let c = u;
                    const f = e;
                    for (let e = 0; e < u; e++) {
                      const e =
                        new Date().getTimezoneOffset() > 0
                          ? f.getUTCDay()
                          : f.getDay();
                      let t = r ? l.includes(e) : e === o[0] || e === o[1];
                      for (let e = 0; e < n.length; e++) {
                        const o = n[e];
                        if (
                          o.getDate() === f.getDate() &&
                          o.getMonth() === f.getMonth() &&
                          o.getFullYear() === f.getFullYear()
                        ) {
                          t = !0;
                          break;
                        }
                      }
                      t && c--, f.setDate(f.getDate() + 1);
                    }
                    return c;
                  }),
                    (at.INTL = (e, t, o, n) => {
                      if ((e = S(e)) instanceof Error) return e;
                      if ((t = T(t)) instanceof Error) return t;
                      if (t < 0) return c;
                      if (
                        !((o = void 0 === o ? tt[1] : tt[o]) instanceof Array)
                      )
                        return s;
                      void 0 === n ? (n = []) : n instanceof Array || (n = [n]);
                      for (let e = 0; e < n.length; e++) {
                        const t = S(n[e]);
                        if (t instanceof Error) return t;
                        n[e] = t;
                      }
                      let r = 0;
                      for (; r < t; ) {
                        e.setDate(e.getDate() + 1);
                        const t = e.getDay();
                        if (t !== o[0] && t !== o[1]) {
                          for (let t = 0; t < n.length; t++) {
                            const o = n[t];
                            if (
                              o.getDate() === e.getDate() &&
                              o.getMonth() === e.getMonth() &&
                              o.getFullYear() === e.getFullYear()
                            ) {
                              r--;
                              break;
                            }
                          }
                          r++;
                        }
                      }
                      return e;
                    });
                  const ht = jt;
                  function gt(e, t = 2, o = !1) {
                    if (((e = T(e)), isNaN(e))) return s;
                    if (((t = T(t)), isNaN(t))) return s;
                    if (t < 0) {
                      const o = Math.pow(10, -t);
                      e = Math.round(e / o) * o;
                    } else e = e.toFixed(t);
                    if (o) e = e.toString().replace(/,/g, "");
                    else {
                      const t = e.toString().split(".");
                      (t[0] = t[0].replace(/\B(?=(\d{3})+$)/g, ",")),
                        (e = t.join("."));
                    }
                    return e;
                  }
                  function mt(e, t) {
                    return (
                      E(e, t) ||
                      ((e = L(e)),
                      (t = T(t)) instanceof Error
                        ? t
                        : new Array(t + 1).join(e))
                    );
                  }
                  const vt = pt,
                    yt = bt;
                  function Ct(e) {
                    return /^[01]{1,10}$/.test(e);
                  }
                  function xt(e, t, o) {
                    if (_((e = T(e)), (t = T(t)))) return e;
                    if ("i" !== (o = void 0 === o ? "i" : o) && "j" !== o)
                      return s;
                    if (0 === e && 0 === t) return 0;
                    if (0 === e) return 1 === t ? o : t.toString() + o;
                    if (0 === t) return e.toString();
                    {
                      const n = t > 0 ? "+" : "";
                      return (
                        e.toString() + n + (1 === t ? o : t.toString() + o)
                      );
                    }
                  }
                  function wt(e, t) {
                    return (
                      (t = void 0 === t ? 0 : t),
                      _((e = T(e)), (t = T(t))) ? s : n.erf(e)
                    );
                  }
                  function At(e) {
                    return isNaN(e) ? s : n.erfc(e);
                  }
                  function Et(e) {
                    const t = Dt(e),
                      o = _t(e);
                    return _(t, o)
                      ? s
                      : Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2));
                  }
                  function _t(e) {
                    if (void 0 === e || !0 === e || !1 === e) return s;
                    if (0 === e || "0" === e) return 0;
                    if (["i", "j"].indexOf(e) >= 0) return 1;
                    let t = (e = (e += "")
                        .replace("+i", "+1i")
                        .replace("-i", "-1i")
                        .replace("+j", "+1j")
                        .replace("-j", "-1j")).indexOf("+"),
                      o = e.indexOf("-");
                    0 === t && (t = e.indexOf("+", 1)),
                      0 === o && (o = e.indexOf("-", 1));
                    const n = e.substring(e.length - 1, e.length),
                      r = "i" === n || "j" === n;
                    return t >= 0 || o >= 0
                      ? r
                        ? t >= 0
                          ? isNaN(e.substring(0, t)) ||
                            isNaN(e.substring(t + 1, e.length - 1))
                            ? c
                            : Number(e.substring(t + 1, e.length - 1))
                          : isNaN(e.substring(0, o)) ||
                            isNaN(e.substring(o + 1, e.length - 1))
                          ? c
                          : -Number(e.substring(o + 1, e.length - 1))
                        : c
                      : r
                      ? isNaN(e.substring(0, e.length - 1))
                        ? c
                        : e.substring(0, e.length - 1)
                      : isNaN(e)
                      ? c
                      : 0;
                  }
                  function Mt(e) {
                    const t = Dt(e),
                      o = _t(e);
                    return _(t, o)
                      ? s
                      : 0 === t && 0 === o
                      ? i
                      : 0 === t && o > 0
                      ? Math.PI / 2
                      : 0 === t && o < 0
                      ? -Math.PI / 2
                      : 0 === o && t > 0
                      ? 0
                      : 0 === o && t < 0
                      ? -Math.PI
                      : t > 0
                      ? Math.atan(o / t)
                      : t < 0 && o >= 0
                      ? Math.atan(o / t) + Math.PI
                      : Math.atan(o / t) - Math.PI;
                  }
                  function It(e) {
                    const t = Dt(e),
                      o = _t(e);
                    if (_(t, o)) return s;
                    let n = e.substring(e.length - 1);
                    return (
                      (n = "i" === n || "j" === n ? n : "i"),
                      xt(
                        (Math.cos(t) * (Math.exp(o) + Math.exp(-o))) / 2,
                        (-Math.sin(t) * (Math.exp(o) - Math.exp(-o))) / 2,
                        n
                      )
                    );
                  }
                  function Nt(e) {
                    const t = Dt(e),
                      o = _t(e);
                    if (_(t, o)) return s;
                    let n = e.substring(e.length - 1);
                    return (
                      (n = "i" === n || "j" === n ? n : "i"),
                      xt(
                        (Math.cos(o) * (Math.exp(t) + Math.exp(-t))) / 2,
                        (Math.sin(o) * (Math.exp(t) - Math.exp(-t))) / 2,
                        n
                      )
                    );
                  }
                  function St(e, t) {
                    const o = Dt(e),
                      n = _t(e),
                      r = Dt(t),
                      l = _t(t);
                    if (_(o, n, r, l)) return s;
                    const i = e.substring(e.length - 1),
                      a = t.substring(t.length - 1);
                    let u = "i";
                    if (
                      (("j" === i || "j" === a) && (u = "j"),
                      0 === r && 0 === l)
                    )
                      return c;
                    const f = r * r + l * l;
                    return xt((o * r + n * l) / f, (n * r - o * l) / f, u);
                  }
                  function Dt(e) {
                    if (void 0 === e || !0 === e || !1 === e) return s;
                    if (0 === e || "0" === e) return 0;
                    if (
                      [
                        "i",
                        "+i",
                        "1i",
                        "+1i",
                        "-i",
                        "-1i",
                        "j",
                        "+j",
                        "1j",
                        "+1j",
                        "-j",
                        "-1j",
                      ].indexOf(e) >= 0
                    )
                      return 0;
                    let t = (e += "").indexOf("+"),
                      o = e.indexOf("-");
                    0 === t && (t = e.indexOf("+", 1)),
                      0 === o && (o = e.indexOf("-", 1));
                    const n = e.substring(e.length - 1, e.length),
                      r = "i" === n || "j" === n;
                    return t >= 0 || o >= 0
                      ? r
                        ? t >= 0
                          ? isNaN(e.substring(0, t)) ||
                            isNaN(e.substring(t + 1, e.length - 1))
                            ? c
                            : Number(e.substring(0, t))
                          : isNaN(e.substring(0, o)) ||
                            isNaN(e.substring(o + 1, e.length - 1))
                          ? c
                          : Number(e.substring(0, o))
                        : c
                      : r
                      ? isNaN(e.substring(0, e.length - 1))
                        ? c
                        : 0
                      : isNaN(e)
                      ? c
                      : e;
                  }
                  function Tt(e) {
                    const t = Dt(e),
                      o = _t(e);
                    if (_(t, o)) return s;
                    let n = e.substring(e.length - 1);
                    return (
                      (n = "i" === n || "j" === n ? n : "i"),
                      xt(
                        (Math.sin(t) * (Math.exp(o) + Math.exp(-o))) / 2,
                        (Math.cos(t) * (Math.exp(o) - Math.exp(-o))) / 2,
                        n
                      )
                    );
                  }
                  function Ft(e) {
                    const t = Dt(e),
                      o = _t(e);
                    if (_(t, o)) return s;
                    let n = e.substring(e.length - 1);
                    return (
                      (n = "i" === n || "j" === n ? n : "i"),
                      xt(
                        (Math.cos(o) * (Math.exp(t) - Math.exp(-t))) / 2,
                        (Math.sin(o) * (Math.exp(t) + Math.exp(-t))) / 2,
                        n
                      )
                    );
                  }
                  (wt.PRECISE = () => {
                    throw new Error("ERF.PRECISE is not implemented");
                  }),
                    (At.PRECISE = () => {
                      throw new Error("ERFC.PRECISE is not implemented");
                    });
                  const Lt = ne.DIST,
                    Rt = ne.INV,
                    Ot = re.DIST,
                    kt = Ve.MATH,
                    Ht = Ve.PRECISE,
                    Bt = le.DIST,
                    Pt = le.DIST.RT,
                    Vt = le.INV,
                    Ut = le.INV.RT,
                    qt = le.TEST,
                    zt = ce.P,
                    Yt = ce.P,
                    Wt = ce.S,
                    Xt = re.INV,
                    Gt = At.PRECISE,
                    Kt = wt.PRECISE,
                    $t = fe.DIST,
                    Zt = de.DIST,
                    Qt = de.DIST.RT,
                    Jt = de.INV,
                    eo = de.INV.RT,
                    to = Ye.MATH,
                    oo = Ye.PRECISE,
                    no = de.TEST,
                    ro = be.DIST,
                    lo = be.INV,
                    io = je.PRECISE,
                    so = he.DIST,
                    ao = ve.INV,
                    uo = ve.DIST,
                    co = ve.INV,
                    fo = we.MULT,
                    po = we.SNGL,
                    bo = Ae.DIST,
                    jo = st.INTL,
                    ho = Ee.DIST,
                    go = Ee.INV,
                    mo = Ee.S.DIST,
                    vo = Ee.S.INV,
                    yo = Me.EXC,
                    Co = Me.INC,
                    xo = Ie.EXC,
                    wo = Ie.INC,
                    Ao = Ne.DIST,
                    Eo = Se.EXC,
                    _o = Se.INC,
                    Mo = De.AVG,
                    Io = De.EQ,
                    No = Te.P,
                    So = Le.P,
                    Do = Le.S,
                    To = Re.DIST,
                    Fo = Re.DIST.RT,
                    Lo = Re.INV,
                    Ro = Re.TEST,
                    Oo = Oe.P,
                    ko = Oe.S,
                    Ho = Be.DIST,
                    Bo = at.INTL,
                    Po = Pe.TEST;
                  function Vo(e) {
                    const t = [];
                    return (
                      h(e, (e) => {
                        e && t.push(e);
                      }),
                      t
                    );
                  }
                  function Uo(e, t) {
                    const o = {};
                    for (let t = 1; t < e[0].length; ++t) o[t] = !0;
                    let n = t[0].length;
                    for (let e = 1; e < t.length; ++e)
                      t[e].length > n && (n = t[e].length);
                    for (let r = 1; r < e.length; ++r)
                      for (let l = 1; l < e[r].length; ++l) {
                        let i = !1,
                          s = !1;
                        for (let o = 0; o < t.length; ++o) {
                          const a = t[o];
                          if (a.length < n) continue;
                          const u = a[0];
                          if (e[r][0] === u) {
                            s = !0;
                            for (let t = 1; t < a.length; ++t)
                              if (!i)
                                if (void 0 === a[t] || "*" === a[t]) i = !0;
                                else {
                                  const o = Y(a[t] + ""),
                                    n = [z(e[r][l], q)].concat(o);
                                  i = W(n);
                                }
                          }
                        }
                        s && (o[l] = o[l] && i);
                      }
                    const r = [];
                    for (let t = 0; t < e[0].length; ++t) o[t] && r.push(t - 1);
                    return r;
                  }
                  function qo(e) {
                    return e && e.getTime && !isNaN(e.getTime());
                  }
                  function zo(e) {
                    return e instanceof Date ? e : new Date(e);
                  }
                  function Yo(e, t, o, n, r) {
                    if (
                      ((n = n || 0),
                      (r = r || 0),
                      _(
                        (e = T(e)),
                        (t = T(t)),
                        (o = T(o)),
                        (n = T(n)),
                        (r = T(r))
                      ))
                    )
                      return s;
                    let l;
                    if (0 === e) l = n + o * t;
                    else {
                      const i = Math.pow(1 + e, t);
                      l =
                        1 === r
                          ? n * i + (o * (1 + e) * (i - 1)) / e
                          : n * i + (o * (i - 1)) / e;
                    }
                    return -l;
                  }
                  function Wo(e, t, o, n, r, l) {
                    if (
                      ((r = r || 0),
                      (l = l || 0),
                      _(
                        (e = T(e)),
                        (t = T(t)),
                        (o = T(o)),
                        (n = T(n)),
                        (r = T(r)),
                        (l = T(l))
                      ))
                    )
                      return s;
                    const i = Go(e, o, n, r, l);
                    return (
                      (1 === t
                        ? 1 === l
                          ? 0
                          : -n
                        : 1 === l
                        ? Yo(e, t - 2, i, n, 1) - i
                        : Yo(e, t - 1, i, n, 0)) * e
                    );
                  }
                  function Xo() {
                    const e = F(v(arguments));
                    if (e instanceof Error) return e;
                    const t = e[0];
                    let o = 0;
                    for (let n = 1; n < e.length; n++)
                      o += e[n] / Math.pow(1 + t, n);
                    return o;
                  }
                  function Go(e, t, o, n, r) {
                    if (
                      ((n = n || 0),
                      (r = r || 0),
                      _(
                        (e = T(e)),
                        (t = T(t)),
                        (o = T(o)),
                        (n = T(n)),
                        (r = T(r))
                      ))
                    )
                      return s;
                    let l;
                    if (0 === e) l = (o + n) / t;
                    else {
                      const i = Math.pow(1 + e, t);
                      l =
                        1 === r
                          ? ((n * e) / (i - 1) + (o * e) / (1 - 1 / i)) /
                            (1 + e)
                          : (n * e) / (i - 1) + (o * e) / (1 - 1 / i);
                    }
                    return -l;
                  }
                  const Ko = { errors: b, symbols: Ze };
                  (t.ABS = function (e) {
                    return (e = T(e)) instanceof Error ? e : Math.abs(e);
                  }),
                    (t.ACCRINT = function (e, t, o, n, r, l, i) {
                      return (
                        (e = zo(e)),
                        (t = zo(t)),
                        (o = zo(o)),
                        qo(e) && qo(t) && qo(o)
                          ? n <= 0 ||
                            r <= 0 ||
                            -1 === [1, 2, 4].indexOf(l) ||
                            -1 === [0, 1, 2, 3, 4].indexOf(i) ||
                            o <= e
                            ? c
                            : (r = r || 0) * n * ft(e, o, (i = i || 0))
                          : s
                      );
                    }),
                    (t.ACCRINTM = function () {
                      throw new Error("ACCRINTM is not implemented");
                    }),
                    (t.ACOS = function (e) {
                      if ((e = T(e)) instanceof Error) return e;
                      let t = Math.acos(e);
                      return isNaN(t) && (t = c), t;
                    }),
                    (t.ACOSH = function (e) {
                      if ((e = T(e)) instanceof Error) return e;
                      let t = Math.log(e + Math.sqrt(e * e - 1));
                      return isNaN(t) && (t = c), t;
                    }),
                    (t.ACOT = function (e) {
                      return (e = T(e)) instanceof Error ? e : Math.atan(1 / e);
                    }),
                    (t.ACOTH = function (e) {
                      if ((e = T(e)) instanceof Error) return e;
                      let t = 0.5 * Math.log((e + 1) / (e - 1));
                      return isNaN(t) && (t = c), t;
                    }),
                    (t.AGGREGATE = function (e, t, o, n) {
                      if (_((e = T(e)), T(e))) return s;
                      switch (e) {
                        case 1:
                          return te(o);
                        case 2:
                          return se(o);
                        case 3:
                          return ae(o);
                        case 4:
                          return ye(o);
                        case 5:
                          return xe(o);
                        case 6:
                          return Ge(o);
                        case 7:
                          return Le.S(o);
                        case 8:
                          return Le.P(o);
                        case 9:
                          return $e(o);
                        case 10:
                          return Oe.S(o);
                        case 11:
                          return Oe.P(o);
                        case 12:
                          return Ce(o);
                        case 13:
                          return we.SNGL(o);
                        case 14:
                          return ge(o, n);
                        case 15:
                          return Fe(o, n);
                        case 16:
                          return Me.INC(o, n);
                        case 17:
                          return Se.INC(o, n);
                        case 18:
                          return Me.EXC(o, n);
                        case 19:
                          return Se.EXC(o, n);
                      }
                    }),
                    (t.AMORDEGRC = function () {
                      throw new Error("AMORDEGRC is not implemented");
                    }),
                    (t.AMORLINC = function () {
                      throw new Error("AMORLINC is not implemented");
                    }),
                    (t.AND = function () {
                      const e = v(arguments);
                      let t = s;
                      for (let o = 0; o < e.length; o++) {
                        if (e[o] instanceof Error) return e[o];
                        void 0 !== e[o] &&
                          null !== e[o] &&
                          "string" != typeof e[o] &&
                          (t === s && (t = !0), e[o] || (t = !1));
                      }
                      return t;
                    }),
                    (t.ARABIC = function (e) {
                      if (null == e) return 0;
                      if (e instanceof Error) return e;
                      if (
                        !/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(
                          e
                        )
                      )
                        return s;
                      let t = 0;
                      return (
                        e.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, (e) => {
                          t += {
                            M: 1e3,
                            CM: 900,
                            D: 500,
                            CD: 400,
                            C: 100,
                            XC: 90,
                            L: 50,
                            XL: 40,
                            X: 10,
                            IX: 9,
                            V: 5,
                            IV: 4,
                            I: 1,
                          }[e];
                        }),
                        t
                      );
                    }),
                    (t.ASC = function () {
                      throw new Error("ASC is not implemented");
                    }),
                    (t.ASIN = function (e) {
                      if ((e = T(e)) instanceof Error) return e;
                      let t = Math.asin(e);
                      return isNaN(t) && (t = c), t;
                    }),
                    (t.ASINH = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : Math.log(e + Math.sqrt(e * e + 1));
                    }),
                    (t.ATAN = function (e) {
                      return (e = T(e)) instanceof Error ? e : Math.atan(e);
                    }),
                    (t.ATAN2 = function (e, t) {
                      return E((e = T(e)), (t = T(t))) || Math.atan2(e, t);
                    }),
                    (t.ATANH = function (e) {
                      if ((e = T(e)) instanceof Error) return e;
                      let t = Math.log((1 + e) / (1 - e)) / 2;
                      return isNaN(t) && (t = c), t;
                    }),
                    (t.AVEDEV = function () {
                      const e = v(arguments).filter(O);
                      if (0 === e.length) return c;
                      const t = F(e);
                      return t instanceof Error
                        ? t
                        : n.sum(n(t).subtract(n.mean(t)).abs()[0]) / t.length;
                    }),
                    (t.AVERAGE = te),
                    (t.AVERAGEA = oe),
                    (t.AVERAGEIF = function (e, t, o) {
                      if (arguments.length <= 1) return f;
                      if (
                        ((o = F(v((o = o || e)).filter(O))),
                        (e = v(e)),
                        o instanceof Error)
                      )
                        return o;
                      let n = 0,
                        r = 0;
                      const l = void 0 === t || "*" === t,
                        i = l ? null : Y(t + "");
                      for (let t = 0; t < e.length; t++) {
                        const s = e[t];
                        if (l) (r += o[t]), n++;
                        else {
                          const e = [z(s, q)].concat(i);
                          W(e) && ((r += o[t]), n++);
                        }
                      }
                      return r / n;
                    }),
                    (t.AVERAGEIFS = function () {
                      const e = j(arguments),
                        t = (e.length - 1) / 2,
                        o = v(e[0]);
                      let n = 0,
                        r = 0;
                      for (let l = 0; l < o.length; l++) {
                        let i = !1;
                        for (let o = 0; o < t; o++) {
                          const t = e[2 * o + 1][l],
                            n = e[2 * o + 2];
                          let r = !1;
                          if (void 0 === n || "*" === n) r = !0;
                          else {
                            const e = Y(n + ""),
                              o = [z(t, q)].concat(e);
                            r = W(o);
                          }
                          if (!r) {
                            i = !1;
                            break;
                          }
                          i = !0;
                        }
                        i && ((r += o[l]), n++);
                      }
                      const l = r / n;
                      return isNaN(l) ? 0 : l;
                    }),
                    (t.BAHTTEXT = function () {
                      throw new Error("BAHTTEXT is not implemented");
                    }),
                    (t.BASE = function (e, t, o) {
                      const n = E((e = T(e)), (t = T(t)), (o = T(o)));
                      if (n) return n;
                      if (0 === t) return c;
                      const r = e.toString(t);
                      return (
                        new Array(Math.max(o + 1 - r.length, 0)).join("0") + r
                      );
                    }),
                    (t.BESSELI = function (e, t) {
                      return _((e = T(e)), (t = T(t))) ? s : r.besseli(e, t);
                    }),
                    (t.BESSELJ = function (e, t) {
                      return _((e = T(e)), (t = T(t))) ? s : r.besselj(e, t);
                    }),
                    (t.BESSELK = function (e, t) {
                      return _((e = T(e)), (t = T(t))) ? s : r.besselk(e, t);
                    }),
                    (t.BESSELY = function (e, t) {
                      return _((e = T(e)), (t = T(t))) ? s : r.bessely(e, t);
                    }),
                    (t.BETA = ne),
                    (t.BETADIST = Lt),
                    (t.BETAINV = Rt),
                    (t.BIN2DEC = function (e) {
                      if (!Ct(e)) return c;
                      const t = parseInt(e, 2),
                        o = e.toString();
                      return 10 === o.length && "1" === o.substring(0, 1)
                        ? parseInt(o.substring(1), 2) - 512
                        : t;
                    }),
                    (t.BIN2HEX = function (e, t) {
                      if (!Ct(e)) return c;
                      const o = e.toString();
                      if (10 === o.length && "1" === o.substring(0, 1))
                        return (
                          0xfffffffe00 + parseInt(o.substring(1), 2)
                        ).toString(16);
                      const n = parseInt(e, 2).toString(16);
                      return void 0 === t
                        ? n
                        : isNaN(t)
                        ? s
                        : t < 0
                        ? c
                        : (t = Math.floor(t)) >= n.length
                        ? mt("0", t - n.length) + n
                        : c;
                    }),
                    (t.BIN2OCT = function (e, t) {
                      if (!Ct(e)) return c;
                      const o = e.toString();
                      if (10 === o.length && "1" === o.substring(0, 1))
                        return (
                          1073741312 + parseInt(o.substring(1), 2)
                        ).toString(8);
                      const n = parseInt(e, 2).toString(8);
                      return void 0 === t
                        ? n
                        : isNaN(t)
                        ? s
                        : t < 0
                        ? c
                        : (t = Math.floor(t)) >= n.length
                        ? mt("0", t - n.length) + n
                        : c;
                    }),
                    (t.BINOM = re),
                    (t.BINOMDIST = Ot),
                    (t.BITAND = function (e, t) {
                      return _((e = T(e)), (t = T(t)))
                        ? s
                        : e < 0 ||
                          t < 0 ||
                          Math.floor(e) !== e ||
                          Math.floor(t) !== t ||
                          e > 0xffffffffffff ||
                          t > 0xffffffffffff
                        ? c
                        : e & t;
                    }),
                    (t.BITLSHIFT = function (e, t) {
                      return _((e = T(e)), (t = T(t)))
                        ? s
                        : e < 0 ||
                          Math.floor(e) !== e ||
                          e > 0xffffffffffff ||
                          Math.abs(t) > 53
                        ? c
                        : t >= 0
                        ? e << t
                        : e >> -t;
                    }),
                    (t.BITOR = function (e, t) {
                      return _((e = T(e)), (t = T(t)))
                        ? s
                        : e < 0 ||
                          t < 0 ||
                          Math.floor(e) !== e ||
                          Math.floor(t) !== t ||
                          e > 0xffffffffffff ||
                          t > 0xffffffffffff
                        ? c
                        : e | t;
                    }),
                    (t.BITRSHIFT = function (e, t) {
                      return _((e = T(e)), (t = T(t)))
                        ? s
                        : e < 0 ||
                          Math.floor(e) !== e ||
                          e > 0xffffffffffff ||
                          Math.abs(t) > 53
                        ? c
                        : t >= 0
                        ? e >> t
                        : e << -t;
                    }),
                    (t.BITXOR = function (e, t) {
                      return _((e = T(e)), (t = T(t)))
                        ? s
                        : e < 0 ||
                          t < 0 ||
                          Math.floor(e) !== e ||
                          Math.floor(t) !== t ||
                          e > 0xffffffffffff ||
                          t > 0xffffffffffff
                        ? c
                        : e ^ t;
                    }),
                    (t.CEILING = Ve),
                    (t.CEILINGMATH = kt),
                    (t.CEILINGPRECISE = Ht),
                    (t.CELL = function () {
                      throw new Error("CELL is not implemented");
                    }),
                    (t.CHAR = pt),
                    (t.CHIDIST = Bt),
                    (t.CHIDISTRT = Pt),
                    (t.CHIINV = Vt),
                    (t.CHIINVRT = Ut),
                    (t.CHISQ = le),
                    (t.CHITEST = qt),
                    (t.CHOOSE = function () {
                      if (arguments.length < 2) return f;
                      const e = arguments[0];
                      return e < 1 || e > 254 || arguments.length < e + 1
                        ? s
                        : arguments[e];
                    }),
                    (t.CLEAN = function (e) {
                      return _(e) ? e : (e = e || "").replace(/[\0-\x1F]/g, "");
                    }),
                    (t.CODE = bt),
                    (t.COLUMN = function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : t < 0
                        ? c
                        : e instanceof Array && "number" == typeof t
                        ? 0 !== e.length
                          ? n.col(e, t)
                          : void 0
                        : s;
                    }),
                    (t.COLUMNS = function (e) {
                      return 1 !== arguments.length
                        ? f
                        : e instanceof Array
                        ? 0 === e.length
                          ? 0
                          : n.cols(e)
                        : s;
                    }),
                    (t.COMBIN = Ue),
                    (t.COMBINA = function (e, t) {
                      return (
                        E((e = T(e)), (t = T(t))) ||
                        (e < t
                          ? c
                          : 0 === e && 0 === t
                          ? 1
                          : Ue(e + t - 1, e - 1))
                      );
                    }),
                    (t.COMPLEX = xt),
                    (t.CONCAT = ht),
                    (t.CONCATENATE = jt),
                    (t.CONFIDENCE = ie),
                    (t.CONVERT = function (e, t, o) {
                      if ((e = T(e)) instanceof Error) return e;
                      const n = [
                          [
                            "a.u. of action",
                            "?",
                            null,
                            "action",
                            !1,
                            !1,
                            105457168181818e-48,
                          ],
                          [
                            "a.u. of charge",
                            "e",
                            null,
                            "electric_charge",
                            !1,
                            !1,
                            160217653141414e-33,
                          ],
                          [
                            "a.u. of energy",
                            "Eh",
                            null,
                            "energy",
                            !1,
                            !1,
                            435974417757576e-32,
                          ],
                          [
                            "a.u. of length",
                            "a?",
                            null,
                            "length",
                            !1,
                            !1,
                            529177210818182e-25,
                          ],
                          [
                            "a.u. of mass",
                            "m?",
                            null,
                            "mass",
                            !1,
                            !1,
                            910938261616162e-45,
                          ],
                          [
                            "a.u. of time",
                            "?/Eh",
                            null,
                            "time",
                            !1,
                            !1,
                            241888432650516e-31,
                          ],
                          [
                            "admiralty knot",
                            "admkn",
                            null,
                            "speed",
                            !1,
                            !0,
                            0.514773333,
                          ],
                          ["ampere", "A", null, "electric_current", !0, !1, 1],
                          [
                            "ampere per meter",
                            "A/m",
                            null,
                            "magnetic_field_intensity",
                            !0,
                            !1,
                            1,
                          ],
                          ["ångström", "Å", ["ang"], "length", !1, !0, 1e-10],
                          ["are", "ar", null, "area", !1, !0, 100],
                          [
                            "astronomical unit",
                            "ua",
                            null,
                            "length",
                            !1,
                            !1,
                            149597870691667e-25,
                          ],
                          ["bar", "bar", null, "pressure", !1, !1, 1e5],
                          ["barn", "b", null, "area", !1, !1, 1e-28],
                          ["becquerel", "Bq", null, "radioactivity", !0, !1, 1],
                          ["bit", "bit", ["b"], "information", !1, !0, 1],
                          [
                            "btu",
                            "BTU",
                            ["btu"],
                            "energy",
                            !1,
                            !0,
                            1055.05585262,
                          ],
                          ["byte", "byte", null, "information", !1, !0, 8],
                          [
                            "candela",
                            "cd",
                            null,
                            "luminous_intensity",
                            !0,
                            !1,
                            1,
                          ],
                          [
                            "candela per square metre",
                            "cd/m?",
                            null,
                            "luminance",
                            !0,
                            !1,
                            1,
                          ],
                          ["coulomb", "C", null, "electric_charge", !0, !1, 1],
                          [
                            "cubic ångström",
                            "ang3",
                            ["ang^3"],
                            "volume",
                            !1,
                            !0,
                            1e-30,
                          ],
                          [
                            "cubic foot",
                            "ft3",
                            ["ft^3"],
                            "volume",
                            !1,
                            !0,
                            0.028316846592,
                          ],
                          [
                            "cubic inch",
                            "in3",
                            ["in^3"],
                            "volume",
                            !1,
                            !0,
                            16387064e-12,
                          ],
                          [
                            "cubic light-year",
                            "ly3",
                            ["ly^3"],
                            "volume",
                            !1,
                            !0,
                            846786664623715e-61,
                          ],
                          ["cubic metre", "m?", null, "volume", !0, !0, 1],
                          [
                            "cubic mile",
                            "mi3",
                            ["mi^3"],
                            "volume",
                            !1,
                            !0,
                            4168181825.44058,
                          ],
                          [
                            "cubic nautical mile",
                            "Nmi3",
                            ["Nmi^3"],
                            "volume",
                            !1,
                            !0,
                            6352182208,
                          ],
                          [
                            "cubic Pica",
                            "Pica3",
                            ["Picapt3", "Pica^3", "Picapt^3"],
                            "volume",
                            !1,
                            !0,
                            7.58660370370369e-8,
                          ],
                          [
                            "cubic yard",
                            "yd3",
                            ["yd^3"],
                            "volume",
                            !1,
                            !0,
                            0.764554857984,
                          ],
                          [
                            "cup",
                            "cup",
                            null,
                            "volume",
                            !1,
                            !0,
                            0.0002365882365,
                          ],
                          [
                            "dalton",
                            "Da",
                            ["u"],
                            "mass",
                            !1,
                            !1,
                            166053886282828e-41,
                          ],
                          ["day", "d", ["day"], "time", !1, !0, 86400],
                          [
                            "degree",
                            "°",
                            null,
                            "angle",
                            !1,
                            !1,
                            0.0174532925199433,
                          ],
                          [
                            "degrees Rankine",
                            "Rank",
                            null,
                            "temperature",
                            !1,
                            !0,
                            0.555555555555556,
                          ],
                          ["dyne", "dyn", ["dy"], "force", !1, !0, 1e-5],
                          [
                            "electronvolt",
                            "eV",
                            ["ev"],
                            "energy",
                            !1,
                            !0,
                            1.60217656514141,
                          ],
                          ["ell", "ell", null, "length", !1, !0, 1.143],
                          ["erg", "erg", ["e"], "energy", !1, !0, 1e-7],
                          [
                            "farad",
                            "F",
                            null,
                            "electric_capacitance",
                            !0,
                            !1,
                            1,
                          ],
                          [
                            "fluid ounce",
                            "oz",
                            null,
                            "volume",
                            !1,
                            !0,
                            295735295625e-16,
                          ],
                          ["foot", "ft", null, "length", !1, !0, 0.3048],
                          [
                            "foot-pound",
                            "flb",
                            null,
                            "energy",
                            !1,
                            !0,
                            1.3558179483314,
                          ],
                          ["gal", "Gal", null, "acceleration", !1, !1, 0.01],
                          [
                            "gallon",
                            "gal",
                            null,
                            "volume",
                            !1,
                            !0,
                            0.003785411784,
                          ],
                          [
                            "gauss",
                            "G",
                            ["ga"],
                            "magnetic_flux_density",
                            !1,
                            !0,
                            1,
                          ],
                          ["grain", "grain", null, "mass", !1, !0, 647989e-10],
                          ["gram", "g", null, "mass", !1, !0, 0.001],
                          ["gray", "Gy", null, "absorbed_dose", !0, !1, 1],
                          [
                            "gross registered ton",
                            "GRT",
                            ["regton"],
                            "volume",
                            !1,
                            !0,
                            2.8316846592,
                          ],
                          ["hectare", "ha", null, "area", !1, !0, 1e4],
                          ["henry", "H", null, "inductance", !0, !1, 1],
                          ["hertz", "Hz", null, "frequency", !0, !1, 1],
                          [
                            "horsepower",
                            "HP",
                            ["h"],
                            "power",
                            !1,
                            !0,
                            745.69987158227,
                          ],
                          [
                            "horsepower-hour",
                            "HPh",
                            ["hh", "hph"],
                            "energy",
                            !1,
                            !0,
                            2684519.538,
                          ],
                          ["hour", "h", ["hr"], "time", !1, !0, 3600],
                          [
                            "imperial gallon (U.K.)",
                            "uk_gal",
                            null,
                            "volume",
                            !1,
                            !0,
                            0.00454609,
                          ],
                          [
                            "imperial hundredweight",
                            "lcwt",
                            ["uk_cwt", "hweight"],
                            "mass",
                            !1,
                            !0,
                            50.802345,
                          ],
                          [
                            "imperial quart (U.K)",
                            "uk_qt",
                            null,
                            "volume",
                            !1,
                            !0,
                            0.0011365225,
                          ],
                          [
                            "imperial ton",
                            "brton",
                            ["uk_ton", "LTON"],
                            "mass",
                            !1,
                            !0,
                            1016.046909,
                          ],
                          ["inch", "in", null, "length", !1, !0, 0.0254],
                          [
                            "international acre",
                            "uk_acre",
                            null,
                            "area",
                            !1,
                            !0,
                            4046.8564224,
                          ],
                          ["IT calorie", "cal", null, "energy", !1, !0, 4.1868],
                          ["joule", "J", null, "energy", !0, !0, 1],
                          [
                            "katal",
                            "kat",
                            null,
                            "catalytic_activity",
                            !0,
                            !1,
                            1,
                          ],
                          ["kelvin", "K", ["kel"], "temperature", !0, !0, 1],
                          ["kilogram", "kg", null, "mass", !0, !0, 1],
                          [
                            "knot",
                            "kn",
                            null,
                            "speed",
                            !1,
                            !0,
                            0.514444444444444,
                          ],
                          [
                            "light-year",
                            "ly",
                            null,
                            "length",
                            !1,
                            !0,
                            9460730472580800,
                          ],
                          ["litre", "L", ["l", "lt"], "volume", !1, !0, 0.001],
                          ["lumen", "lm", null, "luminous_flux", !0, !1, 1],
                          ["lux", "lx", null, "illuminance", !0, !1, 1],
                          [
                            "maxwell",
                            "Mx",
                            null,
                            "magnetic_flux",
                            !1,
                            !1,
                            1e-18,
                          ],
                          [
                            "measurement ton",
                            "MTON",
                            null,
                            "volume",
                            !1,
                            !0,
                            1.13267386368,
                          ],
                          [
                            "meter per hour",
                            "m/h",
                            ["m/hr"],
                            "speed",
                            !1,
                            !0,
                            0.00027777777777778,
                          ],
                          [
                            "meter per second",
                            "m/s",
                            ["m/sec"],
                            "speed",
                            !0,
                            !0,
                            1,
                          ],
                          [
                            "meter per second squared",
                            "m?s??",
                            null,
                            "acceleration",
                            !0,
                            !1,
                            1,
                          ],
                          [
                            "parsec",
                            "pc",
                            ["parsec"],
                            "length",
                            !1,
                            !0,
                            0x6da012f958ee1c,
                          ],
                          [
                            "meter squared per second",
                            "m?/s",
                            null,
                            "kinematic_viscosity",
                            !0,
                            !1,
                            1,
                          ],
                          ["metre", "m", null, "length", !0, !0, 1],
                          [
                            "miles per hour",
                            "mph",
                            null,
                            "speed",
                            !1,
                            !0,
                            0.44704,
                          ],
                          [
                            "millimetre of mercury",
                            "mmHg",
                            null,
                            "pressure",
                            !1,
                            !1,
                            133.322,
                          ],
                          [
                            "minute",
                            "?",
                            null,
                            "angle",
                            !1,
                            !1,
                            0.000290888208665722,
                          ],
                          ["minute", "min", ["mn"], "time", !1, !0, 60],
                          [
                            "modern teaspoon",
                            "tspm",
                            null,
                            "volume",
                            !1,
                            !0,
                            5e-6,
                          ],
                          [
                            "mole",
                            "mol",
                            null,
                            "amount_of_substance",
                            !0,
                            !1,
                            1,
                          ],
                          ["morgen", "Morgen", null, "area", !1, !0, 2500],
                          [
                            "n.u. of action",
                            "?",
                            null,
                            "action",
                            !1,
                            !1,
                            105457168181818e-48,
                          ],
                          [
                            "n.u. of mass",
                            "m?",
                            null,
                            "mass",
                            !1,
                            !1,
                            910938261616162e-45,
                          ],
                          [
                            "n.u. of speed",
                            "c?",
                            null,
                            "speed",
                            !1,
                            !1,
                            299792458,
                          ],
                          [
                            "n.u. of time",
                            "?/(me?c??)",
                            null,
                            "time",
                            !1,
                            !1,
                            128808866778687e-35,
                          ],
                          [
                            "nautical mile",
                            "M",
                            ["Nmi"],
                            "length",
                            !1,
                            !0,
                            1852,
                          ],
                          ["newton", "N", null, "force", !0, !0, 1],
                          [
                            "œrsted",
                            "Oe ",
                            null,
                            "magnetic_field_intensity",
                            !1,
                            !1,
                            79.5774715459477,
                          ],
                          ["ohm", "Ω", null, "electric_resistance", !0, !1, 1],
                          [
                            "ounce mass",
                            "ozm",
                            null,
                            "mass",
                            !1,
                            !0,
                            0.028349523125,
                          ],
                          ["pascal", "Pa", null, "pressure", !0, !1, 1],
                          [
                            "pascal second",
                            "Pa?s",
                            null,
                            "dynamic_viscosity",
                            !0,
                            !1,
                            1,
                          ],
                          [
                            "pferdestärke",
                            "PS",
                            null,
                            "power",
                            !1,
                            !0,
                            735.49875,
                          ],
                          ["phot", "ph", null, "illuminance", !1, !1, 1e-4],
                          [
                            "pica (1/6 inch)",
                            "pica",
                            null,
                            "length",
                            !1,
                            !0,
                            0.00035277777777778,
                          ],
                          [
                            "pica (1/72 inch)",
                            "Pica",
                            ["Picapt"],
                            "length",
                            !1,
                            !0,
                            0.00423333333333333,
                          ],
                          [
                            "poise",
                            "P",
                            null,
                            "dynamic_viscosity",
                            !1,
                            !1,
                            0.1,
                          ],
                          ["pond", "pond", null, "force", !1, !0, 0.00980665],
                          [
                            "pound force",
                            "lbf",
                            null,
                            "force",
                            !1,
                            !0,
                            4.4482216152605,
                          ],
                          [
                            "pound mass",
                            "lbm",
                            null,
                            "mass",
                            !1,
                            !0,
                            0.45359237,
                          ],
                          [
                            "quart",
                            "qt",
                            null,
                            "volume",
                            !1,
                            !0,
                            0.000946352946,
                          ],
                          ["radian", "rad", null, "angle", !0, !1, 1],
                          [
                            "second",
                            "?",
                            null,
                            "angle",
                            !1,
                            !1,
                            484813681109536e-20,
                          ],
                          ["second", "s", ["sec"], "time", !0, !0, 1],
                          [
                            "short hundredweight",
                            "cwt",
                            ["shweight"],
                            "mass",
                            !1,
                            !0,
                            45.359237,
                          ],
                          [
                            "siemens",
                            "S",
                            null,
                            "electrical_conductance",
                            !0,
                            !1,
                            1,
                          ],
                          ["sievert", "Sv", null, "equivalent_dose", !0, !1, 1],
                          ["slug", "sg", null, "mass", !1, !0, 14.59390294],
                          [
                            "square ångström",
                            "ang2",
                            ["ang^2"],
                            "area",
                            !1,
                            !0,
                            1e-20,
                          ],
                          [
                            "square foot",
                            "ft2",
                            ["ft^2"],
                            "area",
                            !1,
                            !0,
                            0.09290304,
                          ],
                          [
                            "square inch",
                            "in2",
                            ["in^2"],
                            "area",
                            !1,
                            !0,
                            64516e-8,
                          ],
                          [
                            "square light-year",
                            "ly2",
                            ["ly^2"],
                            "area",
                            !1,
                            !0,
                            895054210748189e17,
                          ],
                          ["square meter", "m?", null, "area", !0, !0, 1],
                          [
                            "square mile",
                            "mi2",
                            ["mi^2"],
                            "area",
                            !1,
                            !0,
                            2589988.110336,
                          ],
                          [
                            "square nautical mile",
                            "Nmi2",
                            ["Nmi^2"],
                            "area",
                            !1,
                            !0,
                            3429904,
                          ],
                          [
                            "square Pica",
                            "Pica2",
                            ["Picapt2", "Pica^2", "Picapt^2"],
                            "area",
                            !1,
                            !0,
                            1792111111111e-17,
                          ],
                          [
                            "square yard",
                            "yd2",
                            ["yd^2"],
                            "area",
                            !1,
                            !0,
                            0.83612736,
                          ],
                          [
                            "statute mile",
                            "mi",
                            null,
                            "length",
                            !1,
                            !0,
                            1609.344,
                          ],
                          ["steradian", "sr", null, "solid_angle", !0, !1, 1],
                          ["stilb", "sb", null, "luminance", !1, !1, 1e-4],
                          [
                            "stokes",
                            "St",
                            null,
                            "kinematic_viscosity",
                            !1,
                            !1,
                            1e-4,
                          ],
                          ["stone", "stone", null, "mass", !1, !0, 6.35029318],
                          [
                            "tablespoon",
                            "tbs",
                            null,
                            "volume",
                            !1,
                            !0,
                            147868e-10,
                          ],
                          [
                            "teaspoon",
                            "tsp",
                            null,
                            "volume",
                            !1,
                            !0,
                            492892e-11,
                          ],
                          [
                            "tesla",
                            "T",
                            null,
                            "magnetic_flux_density",
                            !0,
                            !0,
                            1,
                          ],
                          [
                            "thermodynamic calorie",
                            "c",
                            null,
                            "energy",
                            !1,
                            !0,
                            4.184,
                          ],
                          ["ton", "ton", null, "mass", !1, !0, 907.18474],
                          ["tonne", "t", null, "mass", !1, !1, 1e3],
                          [
                            "U.K. pint",
                            "uk_pt",
                            null,
                            "volume",
                            !1,
                            !0,
                            0.00056826125,
                          ],
                          [
                            "U.S. bushel",
                            "bushel",
                            null,
                            "volume",
                            !1,
                            !0,
                            0.03523907,
                          ],
                          [
                            "U.S. oil barrel",
                            "barrel",
                            null,
                            "volume",
                            !1,
                            !0,
                            0.158987295,
                          ],
                          [
                            "U.S. pint",
                            "pt",
                            ["us_pt"],
                            "volume",
                            !1,
                            !0,
                            0.000473176473,
                          ],
                          [
                            "U.S. survey mile",
                            "survey_mi",
                            null,
                            "length",
                            !1,
                            !0,
                            1609.347219,
                          ],
                          [
                            "U.S. survey/statute acre",
                            "us_acre",
                            null,
                            "area",
                            !1,
                            !0,
                            4046.87261,
                          ],
                          ["volt", "V", null, "voltage", !0, !1, 1],
                          ["watt", "W", null, "power", !0, !0, 1],
                          ["watt-hour", "Wh", ["wh"], "energy", !1, !0, 3600],
                          ["weber", "Wb", null, "magnetic_flux", !0, !1, 1],
                          ["yard", "yd", null, "length", !1, !0, 0.9144],
                          ["year", "yr", null, "time", !1, !0, 31557600],
                        ],
                        r = {
                          Yi: ["yobi", 80, 12089258196146292e8, "Yi", "yotta"],
                          Zi: ["zebi", 70, 11805916207174113e5, "Zi", "zetta"],
                          Ei: ["exbi", 60, 0x1000000000000000, "Ei", "exa"],
                          Pi: ["pebi", 50, 0x4000000000000, "Pi", "peta"],
                          Ti: ["tebi", 40, 1099511627776, "Ti", "tera"],
                          Gi: ["gibi", 30, 1073741824, "Gi", "giga"],
                          Mi: ["mebi", 20, 1048576, "Mi", "mega"],
                          ki: ["kibi", 10, 1024, "ki", "kilo"],
                        },
                        l = {
                          Y: ["yotta", 1e24, "Y"],
                          Z: ["zetta", 1e21, "Z"],
                          E: ["exa", 1e18, "E"],
                          P: ["peta", 1e15, "P"],
                          T: ["tera", 1e12, "T"],
                          G: ["giga", 1e9, "G"],
                          M: ["mega", 1e6, "M"],
                          k: ["kilo", 1e3, "k"],
                          h: ["hecto", 100, "h"],
                          e: ["dekao", 10, "e"],
                          d: ["deci", 0.1, "d"],
                          c: ["centi", 0.01, "c"],
                          m: ["milli", 0.001, "m"],
                          u: ["micro", 1e-6, "u"],
                          n: ["nano", 1e-9, "n"],
                          p: ["pico", 1e-12, "p"],
                          f: ["femto", 1e-15, "f"],
                          a: ["atto", 1e-18, "a"],
                          z: ["zepto", 1e-21, "z"],
                          y: ["yocto", 1e-24, "y"],
                        };
                      let i,
                        s = null,
                        a = null,
                        u = t,
                        c = o,
                        d = 1,
                        p = 1;
                      for (let e = 0; e < n.length; e++)
                        (i = null === n[e][2] ? [] : n[e][2]),
                          (n[e][1] === u || i.indexOf(u) >= 0) && (s = n[e]),
                          (n[e][1] === c || i.indexOf(c) >= 0) && (a = n[e]);
                      if (null === s) {
                        const e = r[t.substring(0, 2)];
                        let o = l[t.substring(0, 1)];
                        "da" === t.substring(0, 2) && (o = ["dekao", 10, "da"]),
                          e
                            ? ((d = e[2]), (u = t.substring(2)))
                            : o && ((d = o[1]), (u = t.substring(o[2].length)));
                        for (let e = 0; e < n.length; e++)
                          (i = null === n[e][2] ? [] : n[e][2]),
                            (n[e][1] === u || i.indexOf(u) >= 0) && (s = n[e]);
                      }
                      if (null === a) {
                        const e = r[o.substring(0, 2)];
                        let t = l[o.substring(0, 1)];
                        "da" === o.substring(0, 2) && (t = ["dekao", 10, "da"]),
                          e
                            ? ((p = e[2]), (c = o.substring(2)))
                            : t && ((p = t[1]), (c = o.substring(t[2].length)));
                        for (let e = 0; e < n.length; e++)
                          (i = null === n[e][2] ? [] : n[e][2]),
                            (n[e][1] === c || i.indexOf(c) >= 0) && (a = n[e]);
                      }
                      return null === s || null === a || s[3] !== a[3]
                        ? f
                        : (e * s[6] * d) / (a[6] * p);
                    }),
                    (t.CORREL = function (e, t) {
                      return _((e = F(v(e))), (t = F(v(t))))
                        ? s
                        : n.corrcoeff(e, t);
                    }),
                    (t.COS = function (e) {
                      return (e = T(e)) instanceof Error ? e : Math.cos(e);
                    }),
                    (t.COSH = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : (Math.exp(e) + Math.exp(-e)) / 2;
                    }),
                    (t.COT = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : 0 === e
                        ? i
                        : 1 / Math.tan(e);
                    }),
                    (t.COTH = function (e) {
                      if ((e = T(e)) instanceof Error) return e;
                      if (0 === e) return i;
                      const t = Math.exp(2 * e);
                      return (t + 1) / (t - 1);
                    }),
                    (t.COUNT = se),
                    (t.COUNTA = ae),
                    (t.COUNTBLANK = ue),
                    (t.COUNTIF = function (e, t) {
                      if (((e = v(e)), void 0 === t || "*" === t))
                        return e.length;
                      let o = 0;
                      const n = Y(t + "");
                      for (let t = 0; t < e.length; t++) {
                        const r = [z(e[t], q)].concat(n);
                        W(r) && o++;
                      }
                      return o;
                    }),
                    (t.COUNTIFS = function () {
                      const e = j(arguments),
                        t = new Array(v(e[0]).length);
                      for (let e = 0; e < t.length; e++) t[e] = !0;
                      for (let o = 0; o < e.length; o += 2) {
                        const n = v(e[o]),
                          r = e[o + 1];
                        if (void 0 !== r && "*" !== r) {
                          const e = Y(r + "");
                          for (let o = 0; o < n.length; o++) {
                            const r = [z(n[o], q)].concat(e);
                            t[o] = t[o] && W(r);
                          }
                        }
                      }
                      let o = 0;
                      for (let e = 0; e < t.length; e++) t[e] && o++;
                      return o;
                    }),
                    (t.COUPDAYBS = function () {
                      throw new Error("COUPDAYBS is not implemented");
                    }),
                    (t.COUPDAYS = function () {
                      throw new Error("COUPDAYS is not implemented");
                    }),
                    (t.COUPDAYSNC = function () {
                      throw new Error("COUPDAYSNC is not implemented");
                    }),
                    (t.COUPNCD = function () {
                      throw new Error("COUPNCD is not implemented");
                    }),
                    (t.COUPNUM = function () {
                      throw new Error("COUPNUM is not implemented");
                    }),
                    (t.COUPPCD = function () {
                      throw new Error("COUPPCD is not implemented");
                    }),
                    (t.COVAR = zt),
                    (t.COVARIANCE = ce),
                    (t.COVARIANCEP = Yt),
                    (t.COVARIANCES = Wt),
                    (t.CRITBINOM = Xt),
                    (t.CSC = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : 0 === e
                        ? i
                        : 1 / Math.sin(e);
                    }),
                    (t.CSCH = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : 0 === e
                        ? i
                        : 2 / (Math.exp(e) - Math.exp(-e));
                    }),
                    (t.CUMIPMT = function (e, t, o, n, r, l) {
                      if (_((e = T(e)), (t = T(t)), (o = T(o)))) return s;
                      if (e <= 0 || t <= 0 || o <= 0) return c;
                      if (n < 1 || r < 1 || n > r) return c;
                      if (0 !== l && 1 !== l) return c;
                      const i = Go(e, t, o, 0, l);
                      let a = 0;
                      1 === n && (0 === l && (a = -o), n++);
                      for (let t = n; t <= r; t++)
                        a +=
                          1 === l
                            ? Yo(e, t - 2, i, o, 1) - i
                            : Yo(e, t - 1, i, o, 0);
                      return (a *= e), a;
                    }),
                    (t.CUMPRINC = function (e, t, o, n, r, l) {
                      if (_((e = T(e)), (t = T(t)), (o = T(o)))) return s;
                      if (e <= 0 || t <= 0 || o <= 0) return c;
                      if (n < 1 || r < 1 || n > r) return c;
                      if (0 !== l && 1 !== l) return c;
                      const i = Go(e, t, o, 0, l);
                      let a = 0;
                      1 === n && ((a = 0 === l ? i + o * e : i), n++);
                      for (let t = n; t <= r; t++)
                        a +=
                          l > 0
                            ? i - (Yo(e, t - 2, i, o, 1) - i) * e
                            : i - Yo(e, t - 1, i, o, 0) * e;
                      return a;
                    }),
                    (t.DATE = function (e, t, o) {
                      let n;
                      return (
                        _((e = T(e)), (t = T(t)), (o = T(o)))
                          ? (n = s)
                          : ((n = new Date(e, t - 1, o)),
                            n.getFullYear() < 0 && (n = c)),
                        n
                      );
                    }),
                    (t.DATEDIF = ot),
                    (t.DATEVALUE = function (e) {
                      if ("string" != typeof e) return s;
                      const t = Date.parse(e);
                      return isNaN(t) ? s : new Date(e);
                    }),
                    (t.DAVERAGE = function (e, t, o) {
                      if (isNaN(t) && "string" != typeof t) return s;
                      const n = Uo(e, o);
                      let r = [];
                      if ("string" == typeof t) {
                        const o = A(e, t);
                        r = x(e[o]);
                      } else r = x(e[t]);
                      let l = 0;
                      return (
                        h(n, (e) => {
                          l += r[e];
                        }),
                        0 === n.length ? i : l / n.length
                      );
                    }),
                    (t.DAY = function (e) {
                      const t = S(e);
                      return t instanceof Error ? t : t.getDate();
                    }),
                    (t.DAYS = rt),
                    (t.DAYS360 = lt),
                    (t.DB = function (e, t, o, n, r) {
                      if (
                        ((r = void 0 === r ? 12 : r),
                        _(
                          (e = T(e)),
                          (t = T(t)),
                          (o = T(o)),
                          (n = T(n)),
                          (r = T(r))
                        ))
                      )
                        return s;
                      if (e < 0 || t < 0 || o < 0 || n < 0) return c;
                      if (
                        -1 ===
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].indexOf(r)
                      )
                        return c;
                      if (n > o) return c;
                      if (t >= e) return 0;
                      const l = (1 - Math.pow(t / e, 1 / o)).toFixed(3),
                        i = (e * l * r) / 12;
                      let a = i,
                        u = 0;
                      const f = n === o ? o - 1 : n;
                      for (let t = 2; t <= f; t++) (u = (e - a) * l), (a += u);
                      return 1 === n ? i : n === o ? (e - a) * l : u;
                    }),
                    (t.DBCS = function () {
                      throw new Error("DBCS is not implemented");
                    }),
                    (t.DCOUNT = function (e, t, o) {
                      if (isNaN(t) && "string" != typeof t) return s;
                      const n = Uo(e, o);
                      let r = [];
                      if ("string" == typeof t) {
                        const o = A(e, t);
                        r = x(e[o]);
                      } else r = x(e[t]);
                      const l = [];
                      return (
                        h(n, (e) => {
                          l.push(r[e]);
                        }),
                        se(l)
                      );
                    }),
                    (t.DCOUNTA = function (e, t, o) {
                      if (isNaN(t) && "string" != typeof t) return s;
                      const n = Uo(e, o);
                      let r = [];
                      if ("string" == typeof t) {
                        const o = A(e, t);
                        r = x(e[o]);
                      } else r = x(e[t]);
                      const l = [];
                      return (
                        h(n, (e) => {
                          l.push(r[e]);
                        }),
                        ae(l)
                      );
                    }),
                    (t.DDB = function (e, t, o, n, r) {
                      if (
                        ((r = void 0 === r ? 2 : r),
                        _(
                          (e = T(e)),
                          (t = T(t)),
                          (o = T(o)),
                          (n = T(n)),
                          (r = T(r))
                        ))
                      )
                        return s;
                      if (e < 0 || t < 0 || o < 0 || n < 0 || r <= 0) return c;
                      if (n > o) return c;
                      if (t >= e) return 0;
                      let l = 0,
                        i = 0;
                      for (let s = 1; s <= n; s++)
                        (i = Math.min((r / o) * (e - l), e - t - l)), (l += i);
                      return i;
                    }),
                    (t.DEC2BIN = function (e, t) {
                      if ((e = T(e)) instanceof Error) return e;
                      if (!/^-?[0-9]{1,3}$/.test(e) || e < -512 || e > 511)
                        return c;
                      if (e < 0)
                        return (
                          "1" +
                          mt("0", 9 - (512 + e).toString(2).length) +
                          (512 + e).toString(2)
                        );
                      const o = parseInt(e, 10).toString(2);
                      return void 0 === t
                        ? o
                        : isNaN(t)
                        ? s
                        : t < 0
                        ? c
                        : (t = Math.floor(t)) >= o.length
                        ? mt("0", t - o.length) + o
                        : c;
                    }),
                    (t.DEC2HEX = function (e, t) {
                      if ((e = T(e)) instanceof Error) return e;
                      if (
                        !/^-?[0-9]{1,12}$/.test(e) ||
                        e < -549755813888 ||
                        e > 549755813887
                      )
                        return c;
                      if (e < 0) return (1099511627776 + e).toString(16);
                      const o = parseInt(e, 10).toString(16);
                      return void 0 === t
                        ? o
                        : isNaN(t)
                        ? s
                        : t < 0
                        ? c
                        : (t = Math.floor(t)) >= o.length
                        ? mt("0", t - o.length) + o
                        : c;
                    }),
                    (t.DEC2OCT = function (e, t) {
                      if ((e = T(e)) instanceof Error) return e;
                      if (
                        !/^-?[0-9]{1,9}$/.test(e) ||
                        e < -536870912 ||
                        e > 536870911
                      )
                        return c;
                      if (e < 0) return (1073741824 + e).toString(8);
                      const o = parseInt(e, 10).toString(8);
                      return void 0 === t
                        ? o
                        : isNaN(t)
                        ? s
                        : t < 0
                        ? c
                        : (t = Math.floor(t)) >= o.length
                        ? mt("0", t - o.length) + o
                        : c;
                    }),
                    (t.DECIMAL = function (e, t) {
                      return arguments.length < 1
                        ? s
                        : E((e = T(e)), (t = T(t))) ||
                            (0 === t ? c : parseInt(e, t));
                    }),
                    (t.DEGREES = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : (180 * e) / Math.PI;
                    }),
                    (t.DELTA = function (e, t) {
                      return (
                        (t = void 0 === t ? 0 : t),
                        _((e = T(e)), (t = T(t))) ? s : e === t ? 1 : 0
                      );
                    }),
                    (t.DEVSQ = function () {
                      const e = F(v(arguments));
                      if (e instanceof Error) return e;
                      const t = n.mean(e);
                      let o = 0;
                      for (let n = 0; n < e.length; n++)
                        o += Math.pow(e[n] - t, 2);
                      return o;
                    }),
                    (t.DGET = function (e, t, o) {
                      if (isNaN(t) && "string" != typeof t) return s;
                      const n = Uo(e, o);
                      let r = [];
                      return (
                        (r = x("string" == typeof t ? e[A(e, t)] : e[t])),
                        0 === n.length ? s : n.length > 1 ? c : r[n[0]]
                      );
                    }),
                    (t.DISC = function (e, t, o, n, r) {
                      if (
                        _(
                          (e = S(e)),
                          (t = S(t)),
                          (o = T(o)),
                          (n = T(n)),
                          (r = (r = T(r)) || 0)
                        )
                      )
                        return s;
                      if (o <= 0 || n <= 0) return c;
                      if (e >= t) return s;
                      let l, i;
                      switch (r) {
                        case 0:
                          (l = 360), (i = lt(e, t, !1));
                          break;
                        case 1:
                        case 3:
                          (l = 365), (i = ot(e, t, "D"));
                          break;
                        case 2:
                          (l = 360), (i = ot(e, t, "D"));
                          break;
                        case 4:
                          (l = 360), (i = lt(e, t, !0));
                          break;
                        default:
                          return c;
                      }
                      return (((n - o) / n) * l) / i;
                    }),
                    (t.DMAX = function (e, t, o) {
                      if (isNaN(t) && "string" != typeof t) return s;
                      const n = Uo(e, o);
                      let r = [];
                      if ("string" == typeof t) {
                        const o = A(e, t);
                        r = x(e[o]);
                      } else r = x(e[t]);
                      let l = r[n[0]];
                      return (
                        h(n, (e) => {
                          l < r[e] && (l = r[e]);
                        }),
                        l
                      );
                    }),
                    (t.DMIN = function (e, t, o) {
                      if (isNaN(t) && "string" != typeof t) return s;
                      const n = Uo(e, o);
                      let r = [];
                      if ("string" == typeof t) {
                        const o = A(e, t);
                        r = x(e[o]);
                      } else r = x(e[t]);
                      let l = r[n[0]];
                      return (
                        h(n, (e) => {
                          l > r[e] && (l = r[e]);
                        }),
                        l
                      );
                    }),
                    (t.DOLLAR = function (e, t = 2) {
                      if (((e = T(e)), isNaN(e))) return s;
                      const o = {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: t >= 0 ? t : 0,
                          maximumFractionDigits: t >= 0 ? t : 0,
                        },
                        n = (e = Ke(e, t)).toLocaleString("en-US", o);
                      return e < 0 ? "$(" + n.slice(2) + ")" : n;
                    }),
                    (t.DOLLARDE = function (e, t) {
                      if (_((e = T(e)), (t = T(t)))) return s;
                      if (t < 0) return c;
                      if (t >= 0 && t < 1) return i;
                      t = parseInt(t, 10);
                      let o = parseInt(e, 10);
                      o +=
                        ((e % 1) *
                          Math.pow(10, Math.ceil(Math.log(t) / Math.LN10))) /
                        t;
                      const n = Math.pow(
                        10,
                        Math.ceil(Math.log(t) / Math.LN2) + 1
                      );
                      return (o = Math.round(o * n) / n), o;
                    }),
                    (t.DOLLARFR = function (e, t) {
                      if (_((e = T(e)), (t = T(t)))) return s;
                      if (t < 0) return c;
                      if (t >= 0 && t < 1) return i;
                      t = parseInt(t, 10);
                      let o = parseInt(e, 10);
                      return (
                        (o +=
                          (e % 1) *
                          Math.pow(10, -Math.ceil(Math.log(t) / Math.LN10)) *
                          t),
                        o
                      );
                    }),
                    (t.DPRODUCT = function (e, t, o) {
                      if (isNaN(t) && "string" != typeof t) return s;
                      const n = Uo(e, o);
                      let r = [];
                      if ("string" == typeof t) {
                        const o = A(e, t);
                        r = x(e[o]);
                      } else r = x(e[t]);
                      let l = [];
                      h(n, (e) => {
                        l.push(r[e]);
                      }),
                        (l = Vo(l));
                      let i = 1;
                      return (
                        h(l, (e) => {
                          i *= e;
                        }),
                        i
                      );
                    }),
                    (t.DSTDEV = function (e, t, o) {
                      if (isNaN(t) && "string" != typeof t) return s;
                      const n = Uo(e, o);
                      let r = [];
                      if ("string" == typeof t) {
                        const o = A(e, t);
                        r = x(e[o]);
                      } else r = x(e[t]);
                      let l = [];
                      return (
                        h(n, (e) => {
                          l.push(r[e]);
                        }),
                        (l = Vo(l)),
                        Le.S(l)
                      );
                    }),
                    (t.DSTDEVP = function (e, t, o) {
                      if (isNaN(t) && "string" != typeof t) return s;
                      const n = Uo(e, o);
                      let r = [];
                      if ("string" == typeof t) {
                        const o = A(e, t);
                        r = x(e[o]);
                      } else r = x(e[t]);
                      let l = [];
                      return (
                        h(n, (e) => {
                          l.push(r[e]);
                        }),
                        (l = Vo(l)),
                        Le.P(l)
                      );
                    }),
                    (t.DSUM = function (e, t, o) {
                      if (isNaN(t) && "string" != typeof t) return s;
                      const n = Uo(e, o);
                      let r = [];
                      if ("string" == typeof t) {
                        const o = A(e, t);
                        r = x(e[o]);
                      } else r = x(e[t]);
                      const l = [];
                      return (
                        h(n, (e) => {
                          l.push(r[e]);
                        }),
                        $e(l)
                      );
                    }),
                    (t.DURATION = function () {
                      throw new Error("DURATION is not implemented");
                    }),
                    (t.DVAR = function (e, t, o) {
                      if (isNaN(t) && "string" != typeof t) return s;
                      const n = Uo(e, o);
                      let r = [];
                      if ("string" == typeof t) {
                        const o = A(e, t);
                        r = x(e[o]);
                      } else r = x(e[t]);
                      const l = [];
                      return (
                        h(n, (e) => {
                          l.push(r[e]);
                        }),
                        Oe.S(l)
                      );
                    }),
                    (t.DVARP = function (e, t, o) {
                      if (isNaN(t) && "string" != typeof t) return s;
                      const n = Uo(e, o);
                      let r = [];
                      if ("string" == typeof t) {
                        const o = A(e, t);
                        r = x(e[o]);
                      } else r = x(e[t]);
                      const l = [];
                      return (
                        h(n, (e) => {
                          l.push(r[e]);
                        }),
                        Oe.P(l)
                      );
                    }),
                    (t.EDATE = function (e, t) {
                      return (e = S(e)) instanceof Error
                        ? e
                        : isNaN(t)
                        ? s
                        : ((t = parseInt(t, 10)),
                          e.setMonth(e.getMonth() + t),
                          e);
                    }),
                    (t.EFFECT = function (e, t) {
                      return _((e = T(e)), (t = T(t)))
                        ? s
                        : e <= 0 || t < 1
                        ? c
                        : ((t = parseInt(t, 10)), Math.pow(1 + e / t, t) - 1);
                    }),
                    (t.EOMONTH = function (e, t) {
                      return (e = S(e)) instanceof Error
                        ? e
                        : isNaN(t)
                        ? s
                        : ((t = parseInt(t, 10)),
                          new Date(e.getFullYear(), e.getMonth() + t + 1, 0));
                    }),
                    (t.ERF = wt),
                    (t.ERFC = At),
                    (t.ERFCPRECISE = Gt),
                    (t.ERFPRECISE = Kt),
                    (t.ERROR = X),
                    (t.EVEN = function (e) {
                      return (e = T(e)) instanceof Error ? e : Ve(e, -2, -1);
                    }),
                    (t.EXACT = function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : E(e, t) || (e = L(e)) === L(t);
                    }),
                    (t.EXP = function (e) {
                      return arguments.length < 1
                        ? f
                        : arguments.length > 1
                        ? d
                        : (e = T(e)) instanceof Error
                        ? e
                        : (e = Math.exp(e));
                    }),
                    (t.EXPON = fe),
                    (t.EXPONDIST = $t),
                    (t.F = de),
                    (t.FACT = ze),
                    (t.FACTDOUBLE = function e(t) {
                      if ((t = T(t)) instanceof Error) return t;
                      const o = Math.floor(t);
                      return o <= 0 ? 1 : o * e(o - 2);
                    }),
                    (t.FALSE = function () {
                      return !1;
                    }),
                    (t.FDIST = Zt),
                    (t.FDISTRT = Qt),
                    (t.FIND = function (e, t, o) {
                      if (arguments.length < 2) return f;
                      (e = L(e)), (o = void 0 === o ? 0 : o);
                      const n = (t = L(t)).indexOf(e, o - 1);
                      return -1 === n ? s : n + 1;
                    }),
                    (t.FINV = Jt),
                    (t.FINVRT = eo),
                    (t.FISHER = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : Math.log((1 + e) / (1 - e)) / 2;
                    }),
                    (t.FISHERINV = function (e) {
                      if ((e = T(e)) instanceof Error) return e;
                      const t = Math.exp(2 * e);
                      return (t - 1) / (t + 1);
                    }),
                    (t.FIXED = gt),
                    (t.FLOOR = Ye),
                    (t.FLOORMATH = to),
                    (t.FLOORPRECISE = oo),
                    (t.FORECAST = pe),
                    (t.FREQUENCY = function (e, t) {
                      if (_((e = F(v(e))), (t = F(v(t))))) return s;
                      const o = e.length,
                        n = t.length,
                        r = [];
                      for (let l = 0; l <= n; l++) {
                        r[l] = 0;
                        for (let i = 0; i < o; i++)
                          0 === l
                            ? e[i] <= t[0] && (r[0] += 1)
                            : l < n
                            ? e[i] > t[l - 1] && e[i] <= t[l] && (r[l] += 1)
                            : l === n && e[i] > t[n - 1] && (r[n] += 1);
                      }
                      return r;
                    }),
                    (t.FTEST = no),
                    (t.FV = Yo),
                    (t.FVSCHEDULE = function (e, t) {
                      if (_((e = T(e)), (t = F(v(t))))) return s;
                      const o = t.length;
                      let n = e;
                      for (let e = 0; e < o; e++) n *= 1 + t[e];
                      return n;
                    }),
                    (t.GAMMA = be),
                    (t.GAMMADIST = ro),
                    (t.GAMMAINV = lo),
                    (t.GAMMALN = je),
                    (t.GAMMALNPRECISE = io),
                    (t.GAUSS = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : n.normal.cdf(e, 0, 1) - 0.5;
                    }),
                    (t.GCD = function () {
                      const e = F(v(arguments));
                      if (e instanceof Error) return e;
                      const t = e.length,
                        o = e[0];
                      let n = o < 0 ? -o : o;
                      for (let o = 1; o < t; o++) {
                        const t = e[o];
                        let r = t < 0 ? -t : t;
                        for (; n && r; ) n > r ? (n %= r) : (r %= n);
                        n += r;
                      }
                      return n;
                    }),
                    (t.GEOMEAN = function () {
                      const e = F(v(arguments));
                      return e instanceof Error ? e : n.geomean(e);
                    }),
                    (t.GESTEP = function (e, t) {
                      return _((t = t || 0), (e = T(e))) ? e : e >= t ? 1 : 0;
                    }),
                    (t.GROWTH = function (e, t, o, n) {
                      if ((e = F(e)) instanceof Error) return e;
                      let r;
                      if (void 0 === t)
                        for (t = [], r = 1; r <= e.length; r++) t.push(r);
                      if (void 0 === o)
                        for (o = [], r = 1; r <= e.length; r++) o.push(r);
                      if (_((t = F(t)), (o = F(o)))) return s;
                      void 0 === n && (n = !0);
                      const l = e.length;
                      let i,
                        a,
                        u = 0,
                        c = 0,
                        f = 0,
                        d = 0;
                      for (r = 0; r < l; r++) {
                        const o = t[r],
                          n = Math.log(e[r]);
                        (u += o), (c += n), (f += o * n), (d += o * o);
                      }
                      (u /= l),
                        (c /= l),
                        (f /= l),
                        (d /= l),
                        n
                          ? ((i = (f - u * c) / (d - u * u)), (a = c - i * u))
                          : ((i = f / d), (a = 0));
                      const p = [];
                      for (r = 0; r < o.length; r++)
                        p.push(Math.exp(a + i * o[r]));
                      return p;
                    }),
                    (t.HARMEAN = function () {
                      const e = F(v(arguments));
                      if (e instanceof Error) return e;
                      const t = e.length;
                      let o = 0;
                      for (let n = 0; n < t; n++) o += 1 / e[n];
                      return t / o;
                    }),
                    (t.HEX2BIN = function (e, t) {
                      if (!/^[0-9A-Fa-f]{1,10}$/.test(e)) return c;
                      const o = !(
                          10 !== e.length ||
                          "f" !== e.substring(0, 1).toLowerCase()
                        ),
                        n = o
                          ? parseInt(e, 16) - 1099511627776
                          : parseInt(e, 16);
                      if (n < -512 || n > 511) return c;
                      if (o)
                        return (
                          "1" +
                          mt("0", 9 - (512 + n).toString(2).length) +
                          (512 + n).toString(2)
                        );
                      const r = n.toString(2);
                      return void 0 === t
                        ? r
                        : isNaN(t)
                        ? s
                        : t < 0
                        ? c
                        : (t = Math.floor(t)) >= r.length
                        ? mt("0", t - r.length) + r
                        : c;
                    }),
                    (t.HEX2DEC = function (e) {
                      if (!/^[0-9A-Fa-f]{1,10}$/.test(e)) return c;
                      const t = parseInt(e, 16);
                      return t >= 549755813888 ? t - 1099511627776 : t;
                    }),
                    (t.HEX2OCT = function (e, t) {
                      if (!/^[0-9A-Fa-f]{1,10}$/.test(e)) return c;
                      const o = parseInt(e, 16);
                      if (o > 536870911 && o < 0xffe0000000) return c;
                      if (o >= 0xffe0000000)
                        return (o - 0xffc0000000).toString(8);
                      const n = o.toString(8);
                      return void 0 === t
                        ? n
                        : isNaN(t)
                        ? s
                        : t < 0
                        ? c
                        : (t = Math.floor(t)) >= n.length
                        ? mt("0", t - n.length) + n
                        : c;
                    }),
                    (t.HLOOKUP = function (e, t, o, n) {
                      return ee(e, w(t), o, n);
                    }),
                    (t.HOUR = function (e) {
                      return (e = S(e)) instanceof Error ? e : e.getHours();
                    }),
                    (t.HYPGEOM = he),
                    (t.HYPGEOMDIST = so),
                    (t.IF = function (e, t, o) {
                      return e instanceof Error
                        ? e
                        : (null == (t = !(arguments.length >= 2) || t) &&
                            (t = 0),
                          null == (o = 3 === arguments.length && o) && (o = 0),
                          e ? t : o);
                    }),
                    (t.IFERROR = function (e, t) {
                      return K(e) ? t : e;
                    }),
                    (t.IFNA = function (e, t) {
                      return e === f ? t : e;
                    }),
                    (t.IFS = function () {
                      for (let e = 0; e < arguments.length / 2; e++)
                        if (arguments[2 * e]) return arguments[2 * e + 1];
                      return f;
                    }),
                    (t.IMABS = Et),
                    (t.IMAGINARY = _t),
                    (t.IMARGUMENT = Mt),
                    (t.IMCONJUGATE = function (e) {
                      const t = Dt(e),
                        o = _t(e);
                      if (_(t, o)) return s;
                      let n = e.substring(e.length - 1);
                      return (
                        (n = "i" === n || "j" === n ? n : "i"),
                        0 !== o ? xt(t, -o, n) : e
                      );
                    }),
                    (t.IMCOS = It),
                    (t.IMCOSH = Nt),
                    (t.IMCOT = function (e) {
                      return _(Dt(e), _t(e)) ? s : St(It(e), Tt(e));
                    }),
                    (t.IMCSC = function (e) {
                      return !0 === e || !1 === e
                        ? s
                        : _(Dt(e), _t(e))
                        ? c
                        : St("1", Tt(e));
                    }),
                    (t.IMCSCH = function (e) {
                      return !0 === e || !1 === e
                        ? s
                        : _(Dt(e), _t(e))
                        ? c
                        : St("1", Ft(e));
                    }),
                    (t.IMDIV = St),
                    (t.IMEXP = function (e) {
                      const t = Dt(e),
                        o = _t(e);
                      if (_(t, o)) return s;
                      let n = e.substring(e.length - 1);
                      n = "i" === n || "j" === n ? n : "i";
                      const r = Math.exp(t);
                      return xt(r * Math.cos(o), r * Math.sin(o), n);
                    }),
                    (t.IMLN = function (e) {
                      const t = Dt(e),
                        o = _t(e);
                      if (_(t, o)) return s;
                      let n = e.substring(e.length - 1);
                      return (
                        (n = "i" === n || "j" === n ? n : "i"),
                        xt(
                          Math.log(Math.sqrt(t * t + o * o)),
                          Math.atan(o / t),
                          n
                        )
                      );
                    }),
                    (t.IMLOG10 = function (e) {
                      const t = Dt(e),
                        o = _t(e);
                      if (_(t, o)) return s;
                      let n = e.substring(e.length - 1);
                      return (
                        (n = "i" === n || "j" === n ? n : "i"),
                        xt(
                          Math.log(Math.sqrt(t * t + o * o)) / Math.log(10),
                          Math.atan(o / t) / Math.log(10),
                          n
                        )
                      );
                    }),
                    (t.IMLOG2 = function (e) {
                      const t = Dt(e),
                        o = _t(e);
                      if (_(t, o)) return s;
                      let n = e.substring(e.length - 1);
                      return (
                        (n = "i" === n || "j" === n ? n : "i"),
                        xt(
                          Math.log(Math.sqrt(t * t + o * o)) / Math.log(2),
                          Math.atan(o / t) / Math.log(2),
                          n
                        )
                      );
                    }),
                    (t.IMPOWER = function (e, t) {
                      if (_((t = T(t)), Dt(e), _t(e))) return s;
                      let o = e.substring(e.length - 1);
                      o = "i" === o || "j" === o ? o : "i";
                      const n = Math.pow(Et(e), t),
                        r = Mt(e);
                      return xt(n * Math.cos(t * r), n * Math.sin(t * r), o);
                    }),
                    (t.IMPRODUCT = function () {
                      let e = arguments[0];
                      if (!arguments.length) return s;
                      for (let t = 1; t < arguments.length; t++) {
                        const o = Dt(e),
                          n = _t(e),
                          r = Dt(arguments[t]),
                          l = _t(arguments[t]);
                        if (_(o, n, r, l)) return s;
                        e = xt(o * r - n * l, o * l + n * r);
                      }
                      return e;
                    }),
                    (t.IMREAL = Dt),
                    (t.IMSEC = function (e) {
                      return !0 === e || !1 === e || _(Dt(e), _t(e))
                        ? s
                        : St("1", It(e));
                    }),
                    (t.IMSECH = function (e) {
                      return _(Dt(e), _t(e)) ? s : St("1", Nt(e));
                    }),
                    (t.IMSIN = Tt),
                    (t.IMSINH = Ft),
                    (t.IMSQRT = function (e) {
                      if (_(Dt(e), _t(e))) return s;
                      let t = e.substring(e.length - 1);
                      t = "i" === t || "j" === t ? t : "i";
                      const o = Math.sqrt(Et(e)),
                        n = Mt(e);
                      return xt(o * Math.cos(n / 2), o * Math.sin(n / 2), t);
                    }),
                    (t.IMSUB = function (e, t) {
                      const o = Dt(e),
                        n = _t(e),
                        r = Dt(t),
                        l = _t(t);
                      if (_(o, n, r, l)) return s;
                      const i = e.substring(e.length - 1),
                        a = t.substring(t.length - 1);
                      let u = "i";
                      return (
                        ("j" === i || "j" === a) && (u = "j"),
                        xt(o - r, n - l, u)
                      );
                    }),
                    (t.IMSUM = function () {
                      if (!arguments.length) return s;
                      const e = v(arguments);
                      let t = e[0];
                      for (let o = 1; o < e.length; o++) {
                        const n = Dt(t),
                          r = _t(t),
                          l = Dt(e[o]),
                          i = _t(e[o]);
                        if (_(n, r, l, i)) return s;
                        t = xt(n + l, r + i);
                      }
                      return t;
                    }),
                    (t.IMTAN = function (e) {
                      return !0 === e || !1 === e || _(Dt(e), _t(e))
                        ? s
                        : St(Tt(e), It(e));
                    }),
                    (t.INDEX = function (e, t, o) {
                      const n = E(e, t, o);
                      if (n) return n;
                      if (!Array.isArray(e)) return s;
                      const r = e.length > 0 && !Array.isArray(e[0]);
                      return (
                        r && !o
                          ? ((o = t), (t = 1))
                          : ((o = o || 1), (t = t || 1)),
                        o < 0 || t < 0
                          ? s
                          : r && 1 === t && o <= e.length
                          ? e[o - 1]
                          : t <= e.length && o <= e[t - 1].length
                          ? e[t - 1][o - 1]
                          : a
                      );
                    }),
                    (t.INFO = function () {
                      throw new Error("INFO is not implemented");
                    }),
                    (t.INT = function (e) {
                      return (e = T(e)) instanceof Error ? e : Math.floor(e);
                    }),
                    (t.INTERCEPT = function (e, t) {
                      return _((e = F(e)), (t = F(t)))
                        ? s
                        : e.length !== t.length
                        ? f
                        : pe(0, e, t);
                    }),
                    (t.INTRATE = function () {
                      throw new Error("INTRATE is not implemented");
                    }),
                    (t.IPMT = Wo),
                    (t.IRR = function (e, t) {
                      if (((t = t || 0), _((e = F(v(e))), (t = T(t)))))
                        return s;
                      const o = (e, t, o) => {
                          const n = o + 1;
                          let r = e[0];
                          for (let o = 1; o < e.length; o++)
                            r += e[o] / Math.pow(n, (t[o] - t[0]) / 365);
                          return r;
                        },
                        n = (e, t, o) => {
                          const n = o + 1;
                          let r = 0;
                          for (let o = 1; o < e.length; o++) {
                            const l = (t[o] - t[0]) / 365;
                            r -= (l * e[o]) / Math.pow(n, l + 1);
                          }
                          return r;
                        },
                        r = [];
                      let l = !1,
                        i = !1;
                      for (let t = 0; t < e.length; t++)
                        (r[t] = 0 === t ? 0 : r[t - 1] + 365),
                          e[t] > 0 && (l = !0),
                          e[t] < 0 && (i = !0);
                      if (!l || !i) return c;
                      let a,
                        u,
                        f,
                        d = (t = void 0 === t ? 0.1 : t),
                        p = !0;
                      do {
                        (f = o(e, r, d)),
                          (a = d - f / n(e, r, d)),
                          (u = Math.abs(a - d)),
                          (d = a),
                          (p = u > 1e-10 && Math.abs(f) > 1e-10);
                      } while (p);
                      return d;
                    }),
                    (t.ISBLANK = function (e) {
                      return null === e;
                    }),
                    (t.ISERR = G),
                    (t.ISERROR = K),
                    (t.ISEVEN = function (e) {
                      return !(1 & Math.floor(Math.abs(e)));
                    }),
                    (t.ISFORMULA = function () {
                      throw new Error("ISFORMULA is not implemented");
                    }),
                    (t.ISLOGICAL = $),
                    (t.ISNA = function (e) {
                      return e === f;
                    }),
                    (t.ISNONTEXT = function (e) {
                      return "string" != typeof e;
                    }),
                    (t.ISNUMBER = Z),
                    (t.ISO = We),
                    (t.ISODD = function (e) {
                      return !!(1 & Math.floor(Math.abs(e)));
                    }),
                    (t.ISOWEEKNUM = it),
                    (t.ISPMT = function (e, t, o, n) {
                      return _((e = T(e)), (t = T(t)), (o = T(o)), (n = T(n)))
                        ? s
                        : n * e * (t / o - 1);
                    }),
                    (t.ISREF = function () {
                      throw new Error("ISREF is not implemented");
                    }),
                    (t.ISTEXT = Q),
                    (t.KURT = function () {
                      const e = F(v(arguments));
                      if (e instanceof Error) return e;
                      const t = n.mean(e),
                        o = e.length;
                      let r = 0;
                      for (let n = 0; n < o; n++) r += Math.pow(e[n] - t, 4);
                      return (
                        (r /= Math.pow(n.stdev(e, !0), 4)),
                        ((o * (o + 1)) / ((o - 1) * (o - 2) * (o - 3))) * r -
                          (3 * (o - 1) * (o - 1)) / ((o - 2) * (o - 3))
                      );
                    }),
                    (t.LARGE = ge),
                    (t.LCM = function () {
                      const e = F(v(arguments));
                      if (e instanceof Error) return e;
                      for (var t, o, n, r, l = 1; void 0 !== (n = e.pop()); ) {
                        if (0 === n) return 0;
                        for (; n > 1; ) {
                          if (n % 2) {
                            for (
                              t = 3, o = Math.floor(Math.sqrt(n));
                              t <= o && n % t;
                              t += 2
                            );
                            r = t <= o ? t : n;
                          } else r = 2;
                          for (
                            n /= r, l *= r, t = e.length;
                            t;
                            e[--t] % r == 0 &&
                            1 == (e[t] /= r) &&
                            e.splice(t, 1)
                          );
                        }
                      }
                      return l;
                    }),
                    (t.LEFT = function (e, t) {
                      return (
                        E(e, t) ||
                        ((e = L(e)),
                        (t = T((t = void 0 === t ? 1 : t))) instanceof Error ||
                        "string" != typeof e
                          ? s
                          : e.substring(0, t))
                      );
                    }),
                    (t.LEN = function (e) {
                      return 0 === arguments.length
                        ? d
                        : e instanceof Error
                        ? e
                        : Array.isArray(e)
                        ? s
                        : L(e).length;
                    }),
                    (t.LINEST = me),
                    (t.LN = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : 0 === e
                        ? c
                        : Math.log(e);
                    }),
                    (t.LOG = function (e, t) {
                      return (
                        E((e = T(e)), (t = T(t))) ||
                        (0 === e || 0 === t ? c : Math.log(e) / Math.log(t))
                      );
                    }),
                    (t.LOG10 = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : 0 === e
                        ? c
                        : Math.log(e) / Math.log(10);
                    }),
                    (t.LOGEST = function (e, t) {
                      if (_((e = F(v(e))), (t = F(v(t))))) return s;
                      if (e.length !== t.length) return s;
                      for (let t = 0; t < e.length; t++) e[t] = Math.log(e[t]);
                      const o = me(e, t);
                      return (
                        (o[0] = Math.round(1e6 * Math.exp(o[0])) / 1e6),
                        (o[1] = Math.round(1e6 * Math.exp(o[1])) / 1e6),
                        o
                      );
                    }),
                    (t.LOGINV = ao),
                    (t.LOGNORM = ve),
                    (t.LOGNORMDIST = uo),
                    (t.LOGNORMINV = co),
                    (t.LOOKUP = function (e, t, o) {
                      (t = v(t)), (o = o ? v(o) : t);
                      const n = "number" == typeof e;
                      let r = f;
                      for (let l = 0; l < t.length; l++) {
                        if (t[l] === e) return o[l];
                        if (
                          (n && t[l] <= e) ||
                          ("string" == typeof t[l] && t[l].localeCompare(e) < 0)
                        )
                          r = o[l];
                        else if (n && t[l] > e) return r;
                      }
                      return r;
                    }),
                    (t.LOWER = function (e) {
                      return 1 !== arguments.length
                        ? s
                        : _((e = L(e)))
                        ? e
                        : e.toLowerCase();
                    }),
                    (t.MATCH = function (e, t, o) {
                      if (!e || !t) return f;
                      if (
                        (2 === arguments.length && (o = 1),
                        !((t = v(t)) instanceof Array))
                      )
                        return f;
                      if (-1 !== o && 0 !== o && 1 !== o) return f;
                      let n, r;
                      for (let l = 0; l < t.length; l++)
                        if (1 === o) {
                          if (t[l] === e) return l + 1;
                          t[l] < e &&
                            (r
                              ? t[l] > r && ((n = l + 1), (r = t[l]))
                              : ((n = l + 1), (r = t[l])));
                        } else if (0 === o) {
                          if ("string" == typeof e && "string" == typeof t[l]) {
                            const o = e
                              .toLowerCase()
                              .replace(/\?/g, ".")
                              .replace(/\*/g, ".*")
                              .replace(/~/g, "\\");
                            if (
                              new RegExp("^" + o + "$").test(t[l].toLowerCase())
                            )
                              return l + 1;
                          } else if (t[l] === e) return l + 1;
                        } else if (-1 === o) {
                          if (t[l] === e) return l + 1;
                          t[l] > e &&
                            (r
                              ? t[l] < r && ((n = l + 1), (r = t[l]))
                              : ((n = l + 1), (r = t[l])));
                        }
                      return n || f;
                    }),
                    (t.MAX = ye),
                    (t.MAXA = function () {
                      const e = v(arguments),
                        t = E.apply(void 0, e);
                      if (t) return t;
                      let o = g(e);
                      return (
                        (o = o.map((e) => (null == e ? 0 : e))),
                        0 === o.length ? 0 : Math.max.apply(Math, o)
                      );
                    }),
                    (t.MDURATION = function () {
                      throw new Error("MDURATION is not implemented");
                    }),
                    (t.MEDIAN = Ce),
                    (t.MID = function (e, t, o) {
                      if (null == t) return s;
                      if (_((t = T(t)), (o = T(o))) || "string" != typeof e)
                        return o;
                      const n = t - 1,
                        r = n + o;
                      return e.substring(n, r);
                    }),
                    (t.MIN = xe),
                    (t.MINA = function () {
                      const e = v(arguments),
                        t = E.apply(void 0, e);
                      if (t) return t;
                      let o = g(e);
                      return (
                        (o = o.map((e) => (null == e ? 0 : e))),
                        0 === o.length ? 0 : Math.min.apply(Math, o)
                      );
                    }),
                    (t.MINUTE = function (e) {
                      return (e = S(e)) instanceof Error ? e : e.getMinutes();
                    }),
                    (t.MIRR = function (e, t, o) {
                      if (_((e = F(v(e))), (t = T(t)), (o = T(o)))) return s;
                      const n = e.length,
                        r = [],
                        l = [];
                      for (let t = 0; t < n; t++)
                        e[t] < 0 ? r.push(e[t]) : l.push(e[t]);
                      const i = -Xo(o, l) * Math.pow(1 + o, n - 1),
                        a = Xo(t, r) * (1 + t);
                      return Math.pow(i / a, 1 / (n - 1)) - 1;
                    }),
                    (t.MMULT = function (e, t) {
                      return !Array.isArray(e) ||
                        !Array.isArray(t) ||
                        e.some((e) => !e.length) ||
                        t.some((e) => !e.length) ||
                        y(e).some((e) => "number" != typeof e) ||
                        y(t).some((e) => "number" != typeof e) ||
                        e[0].length !== t.length
                        ? s
                        : Array(e.length)
                            .fill(0)
                            .map(() => Array(t[0].length).fill(0))
                            .map((o, n) =>
                              o.map((o, r) =>
                                e[n].reduce((e, o, n) => e + o * t[n][r], 0)
                              )
                            );
                    }),
                    (t.MOD = function (e, t) {
                      const o = E((e = T(e)), (t = T(t)));
                      if (o) return o;
                      if (0 === t) return i;
                      let n = Math.abs(e % t);
                      return (n = e < 0 ? t - n : n), t > 0 ? n : -n;
                    }),
                    (t.MODE = we),
                    (t.MODEMULT = fo),
                    (t.MODESNGL = po),
                    (t.MONTH = function (e) {
                      return (e = S(e)) instanceof Error ? e : e.getMonth() + 1;
                    }),
                    (t.MROUND = function (e, t) {
                      return (
                        E((e = T(e)), (t = T(t))) ||
                        (e * t == 0 ? 0 : e * t < 0 ? c : Math.round(e / t) * t)
                      );
                    }),
                    (t.MULTINOMIAL = function () {
                      const e = F(v(arguments));
                      if (e instanceof Error) return e;
                      let t = 0,
                        o = 1;
                      for (let n = 0; n < e.length; n++)
                        (t += e[n]), (o *= ze(e[n]));
                      return ze(t) / o;
                    }),
                    (t.MUNIT = function (e) {
                      return arguments.length > 1
                        ? f
                        : !(e = parseInt(e)) || e <= 0
                        ? s
                        : Array(e)
                            .fill(0)
                            .map(() => Array(e).fill(0))
                            .map((e, t) => ((e[t] = 1), e));
                    }),
                    (t.N = function (e) {
                      return Z(e)
                        ? e
                        : e instanceof Date
                        ? e.getTime()
                        : !0 === e
                        ? 1
                        : !1 === e
                        ? 0
                        : K(e)
                        ? e
                        : 0;
                    }),
                    (t.NA = function () {
                      return f;
                    }),
                    (t.NEGBINOM = Ae),
                    (t.NEGBINOMDIST = bo),
                    (t.NETWORKDAYS = st),
                    (t.NETWORKDAYSINTL = jo),
                    (t.NOMINAL = function (e, t) {
                      return _((e = T(e)), (t = T(t)))
                        ? s
                        : e <= 0 || t < 1
                        ? c
                        : ((t = parseInt(t, 10)),
                          (Math.pow(e + 1, 1 / t) - 1) * t);
                    }),
                    (t.NORM = Ee),
                    (t.NORMDIST = ho),
                    (t.NORMINV = go),
                    (t.NORMSDIST = mo),
                    (t.NORMSINV = vo),
                    (t.NOT = function (e) {
                      return "string" == typeof e
                        ? s
                        : e instanceof Error
                        ? e
                        : !e;
                    }),
                    (t.NOW = function () {
                      return new Date();
                    }),
                    (t.NPER = function (e, t, o, n, r) {
                      if (
                        ((r = void 0 === r ? 0 : r),
                        (n = void 0 === n ? 0 : n),
                        _(
                          (e = T(e)),
                          (t = T(t)),
                          (o = T(o)),
                          (n = T(n)),
                          (r = T(r))
                        ))
                      )
                        return s;
                      if (0 === e) return -(o + n) / t;
                      {
                        const l = t * (1 + e * r) - n * e,
                          i = o * e + t * (1 + e * r);
                        return Math.log(l / i) / Math.log(1 + e);
                      }
                    }),
                    (t.NPV = Xo),
                    (t.NUMBERVALUE = function (e, t, o) {
                      return "number" == typeof (e = O(e) ? e : "")
                        ? e
                        : "string" != typeof e
                        ? f
                        : ((t = void 0 === t ? "." : t),
                          (o = void 0 === o ? "," : o),
                          Number(e.replace(t, ".").replace(o, "")));
                    }),
                    (t.OCT2BIN = function (e, t) {
                      if (!/^[0-7]{1,10}$/.test(e)) return c;
                      const o = !(10 !== e.length || "7" !== e.substring(0, 1)),
                        n = o ? parseInt(e, 8) - 1073741824 : parseInt(e, 8);
                      if (n < -512 || n > 511) return c;
                      if (o)
                        return (
                          "1" +
                          mt("0", 9 - (512 + n).toString(2).length) +
                          (512 + n).toString(2)
                        );
                      const r = n.toString(2);
                      return void 0 === t
                        ? r
                        : isNaN(t)
                        ? s
                        : t < 0
                        ? c
                        : (t = Math.floor(t)) >= r.length
                        ? mt("0", t - r.length) + r
                        : c;
                    }),
                    (t.OCT2DEC = function (e) {
                      if (!/^[0-7]{1,10}$/.test(e)) return c;
                      const t = parseInt(e, 8);
                      return t >= 536870912 ? t - 1073741824 : t;
                    }),
                    (t.OCT2HEX = function (e, t) {
                      if (!/^[0-7]{1,10}$/.test(e)) return c;
                      const o = parseInt(e, 8);
                      if (o >= 536870912)
                        return "ff" + (o + 3221225472).toString(16);
                      const n = o.toString(16);
                      return void 0 === t
                        ? n
                        : isNaN(t)
                        ? s
                        : t < 0
                        ? c
                        : (t = Math.floor(t)) >= n.length
                        ? mt("0", t - n.length) + n
                        : c;
                    }),
                    (t.ODD = function (e) {
                      if ((e = T(e)) instanceof Error) return e;
                      let t = Math.ceil(Math.abs(e));
                      return (t = 1 & t ? t : t + 1), e >= 0 ? t : -t;
                    }),
                    (t.ODDFPRICE = function () {
                      throw new Error("ODDFPRICE is not implemented");
                    }),
                    (t.ODDFYIELD = function () {
                      throw new Error("ODDFYIELD is not implemented");
                    }),
                    (t.ODDLPRICE = function () {
                      throw new Error("ODDLPRICE is not implemented");
                    }),
                    (t.ODDLYIELD = function () {
                      throw new Error("ODDLYIELD is not implemented");
                    }),
                    (t.OR = function () {
                      const e = v(arguments);
                      let t = s;
                      for (let o = 0; o < e.length; o++) {
                        if (e[o] instanceof Error) return e[o];
                        void 0 !== e[o] &&
                          null !== e[o] &&
                          "string" != typeof e[o] &&
                          (t === s && (t = !1), e[o] && (t = !0));
                      }
                      return t;
                    }),
                    (t.PDURATION = function (e, t, o) {
                      return _((e = T(e)), (t = T(t)), (o = T(o)))
                        ? s
                        : e <= 0
                        ? c
                        : (Math.log(o) - Math.log(t)) / Math.log(1 + e);
                    }),
                    (t.PEARSON = _e),
                    (t.PERCENTILE = Me),
                    (t.PERCENTILEEXC = yo),
                    (t.PERCENTILEINC = Co),
                    (t.PERCENTRANK = Ie),
                    (t.PERCENTRANKEXC = xo),
                    (t.PERCENTRANKINC = wo),
                    (t.PERMUT = function (e, t) {
                      return _((e = T(e)), (t = T(t))) ? s : ze(e) / ze(e - t);
                    }),
                    (t.PERMUTATIONA = function (e, t) {
                      return _((e = T(e)), (t = T(t))) ? s : Math.pow(e, t);
                    }),
                    (t.PHI = function (e) {
                      return (e = T(e)) instanceof Error
                        ? s
                        : Math.exp(-0.5 * e * e) / 2.5066282746310002;
                    }),
                    (t.PI = function () {
                      return Math.PI;
                    }),
                    (t.PMT = Go),
                    (t.POISSON = Ne),
                    (t.POISSONDIST = Ao),
                    (t.POWER = Xe),
                    (t.PPMT = function (e, t, o, n, r, l) {
                      return (
                        (r = r || 0),
                        (l = l || 0),
                        _(
                          (e = T(e)),
                          (o = T(o)),
                          (n = T(n)),
                          (r = T(r)),
                          (l = T(l))
                        )
                          ? s
                          : Go(e, o, n, r, l) - Wo(e, t, o, n, r, l)
                      );
                    }),
                    (t.PRICE = function () {
                      throw new Error("PRICE is not implemented");
                    }),
                    (t.PRICEDISC = function (e, t, o, n, r) {
                      if (
                        _(
                          (e = S(e)),
                          (t = S(t)),
                          (o = T(o)),
                          (n = T(n)),
                          (r = (r = T(r)) || 0)
                        )
                      )
                        return s;
                      if (o <= 0 || n <= 0) return c;
                      if (e >= t) return s;
                      let l, i;
                      switch (r) {
                        case 0:
                          (l = 360), (i = lt(e, t, !1));
                          break;
                        case 1:
                        case 3:
                          (l = 365), (i = ot(e, t, "D"));
                          break;
                        case 2:
                          (l = 360), (i = ot(e, t, "D"));
                          break;
                        case 4:
                          (l = 360), (i = lt(e, t, !0));
                          break;
                        default:
                          return c;
                      }
                      return n - (o * n * i) / l;
                    }),
                    (t.PRICEMAT = function () {
                      throw new Error("PRICEMAT is not implemented");
                    }),
                    (t.PROB = function (e, t, o, n) {
                      if (void 0 === o) return 0;
                      if (
                        ((n = void 0 === n ? o : n),
                        _((e = F(v(e))), (t = F(v(t))), (o = T(o)), (n = T(n))))
                      )
                        return s;
                      if (o === n)
                        return e.indexOf(o) >= 0 ? t[e.indexOf(o)] : 0;
                      const r = e.sort((e, t) => e - t),
                        l = r.length;
                      let i = 0;
                      for (let s = 0; s < l; s++)
                        r[s] >= o && r[s] <= n && (i += t[e.indexOf(r[s])]);
                      return i;
                    }),
                    (t.PRODUCT = Ge),
                    (t.PRONETIC = function () {
                      throw new Error("PRONETIC is not implemented");
                    }),
                    (t.PROPER = function (e) {
                      return _(e)
                        ? e
                        : isNaN(e) && "number" == typeof e
                        ? s
                        : (e = L(e)).replace(
                            /\w\S*/g,
                            (e) =>
                              e.charAt(0).toUpperCase() +
                              e.substr(1).toLowerCase()
                          );
                    }),
                    (t.PV = function (e, t, o, n, r) {
                      return (
                        (n = n || 0),
                        (r = r || 0),
                        _(
                          (e = T(e)),
                          (t = T(t)),
                          (o = T(o)),
                          (n = T(n)),
                          (r = T(r))
                        )
                          ? s
                          : 0 === e
                          ? -o * t - n
                          : (((1 - Math.pow(1 + e, t)) / e) * o * (1 + e * r) -
                              n) /
                            Math.pow(1 + e, t)
                      );
                    }),
                    (t.QUARTILE = Se),
                    (t.QUARTILEEXC = Eo),
                    (t.QUARTILEINC = _o),
                    (t.QUOTIENT = function (e, t) {
                      return E((e = T(e)), (t = T(t))) || parseInt(e / t, 10);
                    }),
                    (t.RADIANS = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : (e * Math.PI) / 180;
                    }),
                    (t.RAND = function () {
                      return Math.random();
                    }),
                    (t.RANDBETWEEN = function (e, t) {
                      return (
                        E((e = T(e)), (t = T(t))) ||
                        e + Math.ceil((t - e + 1) * Math.random()) - 1
                      );
                    }),
                    (t.RANK = De),
                    (t.RANKAVG = Mo),
                    (t.RANKEQ = Io),
                    (t.RATE = function (e, t, o, n, r, l) {
                      if (
                        ((l = void 0 === l ? 0.01 : l),
                        (n = void 0 === n ? 0 : n),
                        (r = void 0 === r ? 0 : r),
                        _(
                          (e = T(e)),
                          (t = T(t)),
                          (o = T(o)),
                          (n = T(n)),
                          (r = T(r)),
                          (l = T(l))
                        ))
                      )
                        return s;
                      const i = 1e-10;
                      let a = l;
                      r = r ? 1 : 0;
                      for (let l = 0; l < 20; l++) {
                        if (a <= -1) return c;
                        let l, s, u;
                        if (
                          (Math.abs(a) < i
                            ? (l = o * (1 + e * a) + t * (1 + a * r) * e + n)
                            : ((s = Math.pow(1 + a, e)),
                              (l = o * s + t * (1 / a + r) * (s - 1) + n)),
                          Math.abs(l) < i)
                        )
                          return a;
                        if (Math.abs(a) < i) u = o * e + t * r * e;
                        else {
                          s = Math.pow(1 + a, e);
                          const n = e * Math.pow(1 + a, e - 1);
                          u =
                            o * n +
                            t * (1 / a + r) * n +
                            t * (-1 / (a * a)) * (s - 1);
                        }
                        a -= l / u;
                      }
                      return a;
                    }),
                    (t.RECEIVED = function () {
                      throw new Error("RECEIVED is not implemented");
                    }),
                    (t.REPLACE = function (e, t, o, n) {
                      return _((t = T(t)), (o = T(o))) ||
                        "string" != typeof e ||
                        "string" != typeof n
                        ? s
                        : e.substr(0, t - 1) + n + e.substr(t - 1 + o);
                    }),
                    (t.REPT = mt),
                    (t.RIGHT = function (e, t) {
                      return (
                        E(e, t) ||
                        ((e = L(e)),
                        (t = T((t = void 0 === t ? 1 : t))) instanceof Error
                          ? t
                          : e.substring(e.length - t))
                      );
                    }),
                    (t.ROMAN = function (e) {
                      if ((e = T(e)) instanceof Error) return e;
                      const t = String(e).split(""),
                        o = [
                          "",
                          "C",
                          "CC",
                          "CCC",
                          "CD",
                          "D",
                          "DC",
                          "DCC",
                          "DCCC",
                          "CM",
                          "",
                          "X",
                          "XX",
                          "XXX",
                          "XL",
                          "L",
                          "LX",
                          "LXX",
                          "LXXX",
                          "XC",
                          "",
                          "I",
                          "II",
                          "III",
                          "IV",
                          "V",
                          "VI",
                          "VII",
                          "VIII",
                          "IX",
                        ];
                      let n = "",
                        r = 3;
                      for (; r--; ) n = (o[+t.pop() + 10 * r] || "") + n;
                      return new Array(+t.join("") + 1).join("M") + n;
                    }),
                    (t.ROUND = Ke),
                    (t.ROUNDDOWN = function (e, t) {
                      return (
                        E((e = T(e)), (t = T(t))) ||
                        ((e > 0 ? 1 : -1) *
                          Math.floor(Math.abs(e) * Math.pow(10, t))) /
                          Math.pow(10, t)
                      );
                    }),
                    (t.ROUNDUP = function (e, t) {
                      return (
                        E((e = T(e)), (t = T(t))) ||
                        ((e > 0 ? 1 : -1) *
                          Math.ceil(Math.abs(e) * Math.pow(10, t))) /
                          Math.pow(10, t)
                      );
                    }),
                    (t.ROW = function (e, t) {
                      return 2 !== arguments.length
                        ? f
                        : t < 0
                        ? c
                        : e instanceof Array && "number" == typeof t
                        ? 0 !== e.length
                          ? n.row(e, t)
                          : void 0
                        : s;
                    }),
                    (t.ROWS = function (e) {
                      return 1 !== arguments.length
                        ? f
                        : e instanceof Array
                        ? 0 === e.length
                          ? 0
                          : n.rows(e)
                        : s;
                    }),
                    (t.RRI = function (e, t, o) {
                      return _((e = T(e)), (t = T(t)), (o = T(o)))
                        ? s
                        : 0 === e || 0 === t
                        ? c
                        : Math.pow(o / t, 1 / e) - 1;
                    }),
                    (t.RSQ = function (e, t) {
                      return _((e = F(v(e))), (t = F(v(t))))
                        ? s
                        : Math.pow(_e(e, t), 2);
                    }),
                    (t.SEARCH = function (e, t, o) {
                      let n;
                      return "string" != typeof e || "string" != typeof t
                        ? s
                        : ((o = void 0 === o ? 0 : o),
                          (n =
                            t.toLowerCase().indexOf(e.toLowerCase(), o - 1) +
                            1),
                          0 === n ? s : n);
                    }),
                    (t.SEC = function (e) {
                      return (e = T(e)) instanceof Error ? e : 1 / Math.cos(e);
                    }),
                    (t.SECH = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : 2 / (Math.exp(e) + Math.exp(-e));
                    }),
                    (t.SECOND = function (e) {
                      return (e = S(e)) instanceof Error ? e : e.getSeconds();
                    }),
                    (t.SERIESSUM = function (e, t, o, n) {
                      if (_((e = T(e)), (t = T(t)), (o = T(o)), (n = F(n))))
                        return s;
                      let r = n[0] * Math.pow(e, t);
                      for (let l = 1; l < n.length; l++)
                        r += n[l] * Math.pow(e, t + l * o);
                      return r;
                    }),
                    (t.SHEET = function () {
                      throw new Error("SHEET is not implemented");
                    }),
                    (t.SHEETS = function () {
                      throw new Error("SHEETS is not implemented");
                    }),
                    (t.SIGN = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : e < 0
                        ? -1
                        : 0 === e
                        ? 0
                        : 1;
                    }),
                    (t.SIN = function (e) {
                      return (e = T(e)) instanceof Error ? e : Math.sin(e);
                    }),
                    (t.SINH = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : (Math.exp(e) - Math.exp(-e)) / 2;
                    }),
                    (t.SKEW = Te),
                    (t.SKEWP = No),
                    (t.SLN = function (e, t, o) {
                      return _((e = T(e)), (t = T(t)), (o = T(o)))
                        ? s
                        : 0 === o
                        ? c
                        : (e - t) / o;
                    }),
                    (t.SLOPE = function (e, t) {
                      if (_((e = F(v(e))), (t = F(v(t))))) return s;
                      const o = n.mean(t),
                        r = n.mean(e),
                        l = t.length;
                      let i = 0,
                        a = 0;
                      for (let n = 0; n < l; n++)
                        (i += (t[n] - o) * (e[n] - r)),
                          (a += Math.pow(t[n] - o, 2));
                      return i / a;
                    }),
                    (t.SMALL = Fe),
                    (t.SORT = function (e, t = 1, o = 1, n = !1) {
                      if (!e || !Array.isArray(e)) return f;
                      if (0 === e.length) return 0;
                      if (!(t = T(t)) || t < 1) return s;
                      if (1 !== (o = T(o)) && -1 !== o) return s;
                      if ("boolean" != typeof (n = N(n))) return u;
                      const r = (e) =>
                          e.sort(
                            (e, n) => (
                              (e = L(e[t - 1])),
                              (n = L(n[t - 1])),
                              1 === o
                                ? e < n
                                  ? -1 * o
                                  : o
                                : e > n
                                ? o
                                : -1 * o
                            )
                          ),
                        l = m(e),
                        i = n ? w(l) : l;
                      return t >= 1 && t <= i[0].length
                        ? n
                          ? w(r(i))
                          : r(i)
                        : s;
                    }),
                    (t.SQRT = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : e < 0
                        ? c
                        : Math.sqrt(e);
                    }),
                    (t.SQRTPI = function (e) {
                      return (e = T(e)) instanceof Error
                        ? e
                        : Math.sqrt(e * Math.PI);
                    }),
                    (t.STANDARDIZE = function (e, t, o) {
                      return _((e = T(e)), (t = T(t)), (o = T(o)))
                        ? s
                        : (e - t) / o;
                    }),
                    (t.STDEV = Le),
                    (t.STDEVA = function () {
                      const e = ke.apply(this, arguments);
                      return Math.sqrt(e);
                    }),
                    (t.STDEVP = So),
                    (t.STDEVPA = function () {
                      const e = He.apply(this, arguments);
                      let t = Math.sqrt(e);
                      return isNaN(t) && (t = c), t;
                    }),
                    (t.STDEVS = Do),
                    (t.STEYX = function (e, t) {
                      if (_((e = F(v(e))), (t = F(v(t))))) return s;
                      const o = n.mean(t),
                        r = n.mean(e),
                        l = t.length;
                      let i = 0,
                        a = 0,
                        u = 0;
                      for (let n = 0; n < l; n++)
                        (i += Math.pow(e[n] - r, 2)),
                          (a += (t[n] - o) * (e[n] - r)),
                          (u += Math.pow(t[n] - o, 2));
                      return Math.sqrt((i - (a * a) / u) / (l - 2));
                    }),
                    (t.SUBSTITUTE = function (e, t, o, n) {
                      if (arguments.length < 3) return f;
                      if (e && t) {
                        if (void 0 === n) return e.split(t).join(o);
                        {
                          if (
                            ((n = Math.floor(Number(n))),
                            Number.isNaN(n) || n <= 0)
                          )
                            return s;
                          let r = 0,
                            l = 0;
                          for (; r > -1 && e.indexOf(t, r) > -1; )
                            if (
                              ((r = e.indexOf(t, r + 1)),
                              l++,
                              r > -1 && l === n)
                            )
                              return (
                                e.substring(0, r) +
                                o +
                                e.substring(r + t.length)
                              );
                          return e;
                        }
                      }
                      return e;
                    }),
                    (t.SUBTOTAL = function (e, t) {
                      if ((e = T(e)) instanceof Error) return e;
                      switch (e) {
                        case 1:
                        case 101:
                          return te(t);
                        case 2:
                        case 102:
                          return se(t);
                        case 3:
                        case 103:
                          return ae(t);
                        case 4:
                        case 104:
                          return ye(t);
                        case 5:
                        case 105:
                          return xe(t);
                        case 6:
                        case 106:
                          return Ge(t);
                        case 7:
                        case 107:
                          return Le.S(t);
                        case 8:
                        case 108:
                          return Le.P(t);
                        case 9:
                        case 109:
                          return $e(t);
                        case 10:
                        case 110:
                          return Oe.S(t);
                        case 11:
                        case 111:
                          return Oe.P(t);
                      }
                    }),
                    (t.SUM = $e),
                    (t.SUMIF = function (e, t, o) {
                      if (((e = v(e)), (o = o ? v(o) : e), e instanceof Error))
                        return e;
                      if (null == t || t instanceof Error) return 0;
                      let n = 0;
                      const r = "*" === t,
                        l = r ? null : Y(t + "");
                      for (let t = 0; t < e.length; t++) {
                        const i = e[t],
                          s = o[t];
                        if (r) n += i;
                        else {
                          const e = [z(i, q)].concat(l);
                          n += W(e) ? s : 0;
                        }
                      }
                      return n;
                    }),
                    (t.SUMIFS = function () {
                      const e = j(arguments),
                        t = F(v(e.shift()));
                      if (t instanceof Error) return t;
                      const o = e,
                        n = o.length / 2;
                      for (let e = 0; e < n; e++) o[2 * e] = v(o[2 * e]);
                      let r = 0;
                      for (let e = 0; e < t.length; e++) {
                        let l = !1;
                        for (let t = 0; t < n; t++) {
                          const n = o[2 * t][e],
                            r = o[2 * t + 1];
                          let i = !1;
                          if (void 0 === r || "*" === r) i = !0;
                          else {
                            const e = Y(r + ""),
                              t = [z(n, q)].concat(e);
                            i = W(t);
                          }
                          if (!i) {
                            l = !1;
                            break;
                          }
                          l = !0;
                        }
                        l && (r += t[e]);
                      }
                      return r;
                    }),
                    (t.SUMPRODUCT = function () {
                      if (!arguments || 0 === arguments.length) return s;
                      const e = arguments.length + 1;
                      let t,
                        o,
                        n,
                        r,
                        l = 0;
                      for (let i = 0; i < arguments[0].length; i++)
                        if (arguments[0][i] instanceof Array)
                          for (let n = 0; n < arguments[0][i].length; n++) {
                            for (t = 1, o = 1; o < e; o++) {
                              const e = arguments[o - 1][i][n];
                              if (e instanceof Error) return e;
                              if (((r = T(e)), r instanceof Error)) return r;
                              t *= r;
                            }
                            l += t;
                          }
                        else {
                          for (t = 1, o = 1; o < e; o++) {
                            const e = arguments[o - 1][i];
                            if (e instanceof Error) return e;
                            if (((n = T(e)), n instanceof Error)) return n;
                            t *= n;
                          }
                          l += t;
                        }
                      return l;
                    }),
                    (t.SUMSQ = function () {
                      const e = F(v(arguments));
                      if (e instanceof Error) return e;
                      let t = 0;
                      const o = e.length;
                      for (let n = 0; n < o; n++)
                        t += Z(e[n]) ? e[n] * e[n] : 0;
                      return t;
                    }),
                    (t.SUMX2MY2 = function (e, t) {
                      if (_((e = F(v(e))), (t = F(v(t))))) return s;
                      let o = 0;
                      for (let n = 0; n < e.length; n++)
                        o += e[n] * e[n] - t[n] * t[n];
                      return o;
                    }),
                    (t.SUMX2PY2 = function (e, t) {
                      if (_((e = F(v(e))), (t = F(v(t))))) return s;
                      let o = 0;
                      (e = F(v(e))), (t = F(v(t)));
                      for (let n = 0; n < e.length; n++)
                        o += e[n] * e[n] + t[n] * t[n];
                      return o;
                    }),
                    (t.SUMXMY2 = function (e, t) {
                      if (_((e = F(v(e))), (t = F(v(t))))) return s;
                      let o = 0;
                      (e = v(e)), (t = v(t));
                      for (let n = 0; n < e.length; n++)
                        o += Math.pow(e[n] - t[n], 2);
                      return o;
                    }),
                    (t.SWITCH = function () {
                      let e;
                      if (arguments.length > 0) {
                        const t = arguments[0],
                          o = arguments.length - 1,
                          n = Math.floor(o / 2);
                        let r = !1;
                        const l = o % 2 != 0,
                          i =
                            o % 2 == 0 ? null : arguments[arguments.length - 1];
                        if (n)
                          for (let o = 0; o < n; o++)
                            if (t === arguments[2 * o + 1]) {
                              (e = arguments[2 * o + 2]), (r = !0);
                              break;
                            }
                        r || (e = l ? i : f);
                      } else e = s;
                      return e;
                    }),
                    (t.SYD = function (e, t, o, n) {
                      return _((e = T(e)), (t = T(t)), (o = T(o)), (n = T(n)))
                        ? s
                        : 0 === o || n < 1 || n > o
                        ? c
                        : ((e - t) * (o - (n = parseInt(n, 10)) + 1) * 2) /
                          (o * (o + 1));
                    }),
                    (t.T = function (e) {
                      return e instanceof Error || "string" == typeof e
                        ? e
                        : "";
                    }),
                    (t.TAN = function (e) {
                      return (e = T(e)) instanceof Error ? e : Math.tan(e);
                    }),
                    (t.TANH = function (e) {
                      if ((e = T(e)) instanceof Error) return e;
                      const t = Math.exp(2 * e);
                      return (t - 1) / (t + 1);
                    }),
                    (t.TBILLEQ = function (e, t, o) {
                      return _((e = S(e)), (t = S(t)), (o = T(o)))
                        ? s
                        : o <= 0 || e > t || t - e > 31536e6
                        ? c
                        : (365 * o) / (360 - o * lt(e, t, !1));
                    }),
                    (t.TBILLPRICE = function (e, t, o) {
                      return _((e = S(e)), (t = S(t)), (o = T(o)))
                        ? s
                        : o <= 0 || e > t || t - e > 31536e6
                        ? c
                        : 100 * (1 - (o * lt(e, t, !1)) / 360);
                    }),
                    (t.TBILLYIELD = function (e, t, o) {
                      return _((e = S(e)), (t = S(t)), (o = T(o)))
                        ? s
                        : o <= 0 || e > t || t - e > 31536e6
                        ? c
                        : (360 * (100 - o)) / (o * lt(e, t, !1));
                    }),
                    (t.TDIST = To),
                    (t.TDISTRT = Fo),
                    (t.TEXT = function (e, t) {
                      if (
                        void 0 === e ||
                        e instanceof Error ||
                        t instanceof Error
                      )
                        return f;
                      if (null == t) return "";
                      if ("number" == typeof t) return String(t);
                      if ("string" != typeof t) return s;
                      const o = t.startsWith("$") ? "$" : "",
                        n = t.endsWith("%");
                      return (
                        n && (e *= 100),
                        (e = (e = gt(
                          e,
                          (t = t.replace(/%/g, "").replace(/\$/g, ""))
                            .split(".")[1]
                            .match(/0/g).length,
                          !t.includes(",")
                        )).startsWith("-")
                          ? "-" + o + (e = e.replace("-", ""))
                          : o + e),
                        n && (e += "%"),
                        e
                      );
                    }),
                    (t.TEXTJOIN = function (e, t, ...o) {
                      if (
                        ("boolean" != typeof t && (t = N(t)),
                        arguments.length < 3)
                      )
                        return f;
                      e = null != e ? e : "";
                      let n = v(o),
                        r = t ? n.filter((e) => e) : n;
                      if (Array.isArray(e)) {
                        e = v(e);
                        let t = r.map((e) => [e]),
                          o = 0;
                        for (let n = 0; n < t.length - 1; n++)
                          t[n].push(e[o]), o++, o === e.length && (o = 0);
                        return (r = v(t)), r.join("");
                      }
                      return r.join(e);
                    }),
                    (t.TIME = function (e, t, o) {
                      return _((e = T(e)), (t = T(t)), (o = T(o)))
                        ? s
                        : e < 0 || t < 0 || o < 0
                        ? c
                        : (3600 * e + 60 * t + o) / 86400;
                    }),
                    (t.TIMEVALUE = function (e) {
                      return (e = S(e)) instanceof Error
                        ? e
                        : (3600 * e.getHours() +
                            60 * e.getMinutes() +
                            e.getSeconds()) /
                            86400;
                    }),
                    (t.TINV = Lo),
                    (t.TODAY = function () {
                      return nt(new Date());
                    }),
                    (t.TRANSPOSE = function (e) {
                      return e ? w(m(e)) : f;
                    }),
                    (t.TREND = function (e, t, o) {
                      if (_((e = F(v(e))), (t = F(v(t))), (o = F(v(o)))))
                        return s;
                      const n = me(e, t),
                        r = n[0],
                        l = n[1],
                        i = [];
                      return (
                        o.forEach((e) => {
                          i.push(r * e + l);
                        }),
                        i
                      );
                    }),
                    (t.TRIM = function (e) {
                      return (e = L(e)) instanceof Error
                        ? e
                        : e.replace(/\s+/g, " ").trim();
                    }),
                    (t.TRIMMEAN = function (e, t) {
                      if (_((e = F(v(e))), (t = T(t)))) return s;
                      const o = Ye(e.length * t, 2) / 2;
                      return n.mean(
                        ((l = (l = o) || 1),
                        (r = x(
                          e.sort((e, t) => e - t),
                          o
                        )) && "function" == typeof r.slice
                          ? r.slice(0, r.length - l)
                          : r)
                      );
                      var r, l;
                    }),
                    (t.TRUE = function () {
                      return !0;
                    }),
                    (t.TRUNC = function (e, t) {
                      return (
                        E((e = T(e)), (t = T(t))) ||
                        ((e > 0 ? 1 : -1) *
                          Math.floor(Math.abs(e) * Math.pow(10, t))) /
                          Math.pow(10, t)
                      );
                    }),
                    (t.TTEST = Ro),
                    (t.TYPE = function (e) {
                      return Z(e)
                        ? 1
                        : Q(e)
                        ? 2
                        : $(e)
                        ? 4
                        : K(e)
                        ? 16
                        : Array.isArray(e)
                        ? 64
                        : void 0;
                    }),
                    (t.UNICHAR = vt),
                    (t.UNICODE = yt),
                    (t.UNIQUE = J),
                    (t.UPPER = function (e) {
                      return (e = L(e)) instanceof Error ? e : e.toUpperCase();
                    }),
                    (t.VALUE = function (e) {
                      const t = E(e);
                      if (t) return t;
                      if ("number" == typeof e) return e;
                      if ((O(e) || (e = ""), "string" != typeof e)) return s;
                      const o = /(%)$/.test(e) || /^(%)/.test(e);
                      if (
                        "" ===
                        (e = (e = (e = e.replace(/^[^0-9-]{0,3}/, "")).replace(
                          /[^0-9]{0,3}$/,
                          ""
                        )).replace(/[ ,]/g, ""))
                      )
                        return 0;
                      let n = Number(e);
                      return isNaN(n) ? s : ((n = n || 0), o && (n *= 0.01), n);
                    }),
                    (t.VAR = Oe),
                    (t.VARA = ke),
                    (t.VARP = Oo),
                    (t.VARPA = He),
                    (t.VARS = ko),
                    (t.VDB = function () {
                      throw new Error("VDB is not implemented");
                    }),
                    (t.VLOOKUP = ee),
                    (t.WEEKDAY = function (e, t) {
                      if ((e = S(e)) instanceof Error) return e;
                      void 0 === t && (t = 1);
                      const o = e.getDay();
                      return et[t][o];
                    }),
                    (t.WEEKNUM = function (e, t) {
                      if ((e = S(e)) instanceof Error) return e;
                      if ((void 0 === t && (t = 1), 21 === t)) return it(e);
                      const o = Je[t];
                      let n = new Date(e.getFullYear(), 0, 1);
                      const r = n.getDay() < o ? 1 : 0;
                      return (
                        (n -= 24 * Math.abs(n.getDay() - o) * 60 * 60 * 1e3),
                        Math.floor((e - n) / 864e5 / 7 + 1) + r
                      );
                    }),
                    (t.WEIBULL = Be),
                    (t.WEIBULLDIST = Ho),
                    (t.WORKDAY = at),
                    (t.WORKDAYINTL = Bo),
                    (t.XIRR = function (e, t, o) {
                      if (_((e = F(v(e))), (t = D(v(t))), (o = T(o)))) return s;
                      const n = (e, t, o) => {
                          const n = o + 1;
                          let r = e[0];
                          for (let o = 1; o < e.length; o++)
                            r += e[o] / Math.pow(n, rt(t[o], t[0]) / 365);
                          return r;
                        },
                        r = (e, t, o) => {
                          const n = o + 1;
                          let r = 0;
                          for (let o = 1; o < e.length; o++) {
                            const l = rt(t[o], t[0]) / 365;
                            r -= (l * e[o]) / Math.pow(n, l + 1);
                          }
                          return r;
                        };
                      let l = !1,
                        i = !1;
                      for (let t = 0; t < e.length; t++)
                        e[t] > 0 && (l = !0), e[t] < 0 && (i = !0);
                      if (!l || !i) return c;
                      let a,
                        u,
                        f,
                        d = (o = o || 0.1),
                        p = !0;
                      do {
                        (f = n(e, t, d)),
                          (a = d - f / r(e, t, d)),
                          (u = Math.abs(a - d)),
                          (d = a),
                          (p = u > 1e-10 && Math.abs(f) > 1e-10);
                      } while (p);
                      return d;
                    }),
                    (t.XNPV = function (e, t, o) {
                      if (_((e = T(e)), (t = F(v(t))), (o = D(v(o))))) return s;
                      let n = 0;
                      for (let r = 0; r < t.length; r++)
                        n += t[r] / Math.pow(1 + e, rt(o[r], o[0]) / 365);
                      return n;
                    }),
                    (t.XOR = function () {
                      const e = v(arguments);
                      let t = s;
                      for (let o = 0; o < e.length; o++) {
                        if (e[o] instanceof Error) return e[o];
                        void 0 !== e[o] &&
                          null !== e[o] &&
                          "string" != typeof e[o] &&
                          (t === s && (t = 0), e[o] && t++);
                      }
                      return t === s ? t : !!(1 & Math.floor(Math.abs(t)));
                    }),
                    (t.YEAR = function (e) {
                      return (e = S(e)) instanceof Error ? e : e.getFullYear();
                    }),
                    (t.YEARFRAC = ft),
                    (t.YIELD = function () {
                      throw new Error("YIELD is not implemented");
                    }),
                    (t.YIELDDISC = function () {
                      throw new Error("YIELDDISC is not implemented");
                    }),
                    (t.YIELDMAT = function () {
                      throw new Error("YIELDMAT is not implemented");
                    }),
                    (t.Z = Pe),
                    (t.ZTEST = Po),
                    (t.utils = Ko);
                },
              },
              o = {};
            function n(t) {
              var r = o[t];
              if (void 0 !== r) return r.exports;
              var l = (o[t] = { exports: {} });
              return e[t].call(l.exports, l, l.exports, n), l.exports;
            }
            n.g = (function () {
              if ("object" == typeof globalThis) return globalThis;
              try {
                return this || new Function("return this")();
              } catch (e) {
                if ("object" == typeof window) return window;
              }
            })();
            var r = n(960);
            t = r;
          })(),
          t);
      },
      502: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(e) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            _typeof(e)
          );
        }
        if (!formula) var formula = __webpack_require__(463);
        function zone_sheet() {
          "use strict";
          var Version =
              ((info = {
                title: "zone_sheet",
                version: "0.1",
                type: "CE",
                host: "https://bossanova.uk/zone_sheet",
                license: "MIT",
                print: function () {
                  return [
                    this.title + " " + this.type + " " + this.version,
                    this.host,
                    this.license,
                  ].join("\r\n");
                },
              }),
              function () {
                return info;
              }),
            info,
            isFormula = function (e) {
              var t = ("" + e)[0];
              return "=" == t || "#" == t;
            },
            getMask = function (e) {
              if (e.format || e.mask || e.locale) {
                var t = {};
                return (
                  e.mask
                    ? (t.mask = e.mask)
                    : e.format
                    ? (t.mask = e.format)
                    : ((t.locale = e.locale), (t.options = e.options)),
                  e.decimal &&
                    (t.options || (t.options = {}),
                    (t.options = { decimal: e.decimal })),
                  t
                );
              }
              return null;
            },
            _jexcel = function jexcel(el, options) {
              var obj = { options: {} };
              if (!(el instanceof Element || el instanceof HTMLDocument))
                return (
                  console.error("Zone_sheet: el is not a valid DOM element"), !1
                );
              if ("TABLE" == el.tagName) {
                if (!(options = _jexcel.createFromTable(el, options)))
                  return (
                    console.error("Zone_sheet: el is not a valid DOM element"),
                    !1
                  );
                var div = document.createElement("div");
                el.parentNode.insertBefore(div, el), el.remove(), (el = div);
              }
              var defaults = {
                url: null,
                method: "GET",
                requestVariables: null,
                data: null,
                sorting: null,
                copyCompatibility: !1,
                root: null,
                rows: [],
                columns: [],
                colHeaders: [],
                colWidths: [],
                colAlignments: [],
                nestedHeaders: null,
                defaultColWidth: 50,
                defaultColAlign: "center",
                defaultRowHeight: null,
                minSpareRows: 0,
                minSpareCols: 0,
                minDimensions: [0, 0],
                allowExport: !0,
                includeHeadersOnDownload: !1,
                includeHeadersOnCopy: !1,
                columnSorting: !0,
                columnDrag: !1,
                columnResize: !0,
                rowResize: !1,
                rowDrag: !0,
                editable: !0,
                allowInsertRow: !0,
                allowManualInsertRow: !0,
                allowInsertColumn: !0,
                allowManualInsertColumn: !0,
                allowDeleteRow: !0,
                allowDeletingAllRows: !1,
                allowDeleteColumn: !0,
                allowRenameColumn: !0,
                allowComments: !1,
                wordWrap: !1,
                imageOptions: null,
                csv: null,
                csvFileName: "zone_sheet",
                csvHeaders: !0,
                csvDelimiter: ",",
                parseTableFirstRowAsHeader: !1,
                parseTableAutoCellType: !1,
                selectionCopy: !0,
                mergeCells: {},
                toolbar: null,
                search: !1,
                pagination: !1,
                paginationOptions: null,
                fullscreen: !1,
                lazyLoading: !1,
                loadingSpin: !1,
                tableOverflow: !1,
                tableHeight: "300px",
                tableWidth: null,
                textOverflow: !1,
                meta: null,
                style: null,
                classes: null,
                parseFormulas: !0,
                autoIncrement: !0,
                autoCasting: !0,
                secureFormulas: !0,
                stripHTML: !0,
                stripHTMLOnCopy: !1,
                filters: !1,
                footers: null,
                onundo: null,
                onredo: null,
                onload: null,
                onchange: null,
                oncomments: null,
                onbeforechange: null,
                onafterchanges: null,
                onbeforeinsertrow: null,
                oninsertrow: null,
                onbeforeinsertcolumn: null,
                oninsertcolumn: null,
                onbeforedeleterow: null,
                ondeleterow: null,
                onbeforedeletecolumn: null,
                ondeletecolumn: null,
                onmoverow: null,
                onmovecolumn: null,
                onresizerow: null,
                onresizecolumn: null,
                onsort: null,
                onselection: null,
                oncopy: null,
                onpaste: null,
                onbeforepaste: null,
                onmerge: null,
                onfocus: null,
                onblur: null,
                onchangeheader: null,
                oncreateeditor: null,
                oneditionstart: null,
                oneditionend: null,
                onchangestyle: null,
                onchangemeta: null,
                onchangepage: null,
                onbeforesave: null,
                onsave: null,
                onevent: null,
                persistance: !1,
                updateTable: null,
                detachForUpdates: !1,
                freezeColumns: null,
                text: {
                  noRecordsFound: "No records found",
                  showingPage: "Showing page {0} of {1} entries",
                  show: "Show ",
                  search: "Search",
                  entries: " entries",
                  columnName: "Column name",
                  insertANewColumnBefore: "Insert a new column before",
                  insertANewColumnAfter: "Insert a new column after",
                  deleteSelectedColumns: "Delete selected columns",
                  renameThisColumn: "Rename this column",
                  orderAscending: "Order ascending",
                  orderDescending: "Order descending",
                  insertANewRowBefore: "Insert a new row before",
                  insertANewRowAfter: "Insert a new row after",
                  deleteSelectedRows: "Delete selected rows",
                  editComments: "Edit comments",
                  addComments: "Add comments",
                  comments: "Comments",
                  clearComments: "Clear comments",
                  copy: "Copy...",
                  paste: "Paste...",
                  saveAs: "Save as...",
                  about: "About",
                  areYouSureToDeleteTheSelectedRows:
                    "Are you sure to delete the selected rows?",
                  areYouSureToDeleteTheSelectedColumns:
                    "Are you sure to delete the selected columns?",
                  thisActionWillDestroyAnyExistingMergedCellsAreYouSure:
                    "This action will destroy any existing merged cells. Are you sure?",
                  thisActionWillClearYourSearchResultsAreYouSure:
                    "This action will clear your search results. Are you sure?",
                  thereIsAConflictWithAnotherMergedCell:
                    "There is a conflict with another merged cell",
                  invalidMergeProperties: "Invalid merged properties",
                  cellAlreadyMerged: "Cell already merged",
                  noCellsSelected: "No cells selected",
                },
                about: !0,
              };
              for (var property in defaults)
                if (options && options.hasOwnProperty(property))
                  if ("text" === property)
                    for (var textKey in ((obj.options[property] =
                      defaults[property]),
                    options[property]))
                      options[property].hasOwnProperty(textKey) &&
                        (obj.options[property][textKey] =
                          options[property][textKey]);
                  else obj.options[property] = options[property];
                else obj.options[property] = defaults[property];
              (obj.el = el),
                (obj.corner = null),
                (obj.contextMenu = null),
                (obj.textarea = null),
                (obj.ads = null),
                (obj.content = null),
                (obj.table = null),
                (obj.thead = null),
                (obj.tbody = null),
                (obj.rows = []),
                (obj.results = null),
                (obj.searchInput = null),
                (obj.toolbar = null),
                (obj.pagination = null),
                (obj.pageNumber = null),
                (obj.headerContainer = null),
                (obj.colgroupContainer = null),
                (obj.headers = []),
                (obj.records = []),
                (obj.history = []),
                (obj.formula = []),
                (obj.colgroup = []),
                (obj.selection = []),
                (obj.highlighted = []),
                (obj.selectedCell = null),
                (obj.selectedContainer = null),
                (obj.style = []),
                (obj.data = null),
                (obj.filter = null),
                (obj.filters = []),
                (obj.cursor = null),
                (obj.historyIndex = -1),
                (obj.ignoreEvents = !1),
                (obj.ignoreHistory = !1),
                (obj.edition = null),
                (obj.hashString = null),
                (obj.resizing = null),
                (obj.dragging = null),
                1 == obj.options.lazyLoading &&
                  0 == obj.options.tableOverflow &&
                  0 == obj.options.fullscreen &&
                  (console.error(
                    "Zone_sheet: The lazyloading only works when tableOverflow = yes or fullscreen = yes"
                  ),
                  (obj.options.lazyLoading = !1)),
                (obj.fullscreen = function (e) {
                  null == e && (e = !obj.options.fullscreen),
                    obj.options.fullscreen != e &&
                      ((obj.options.fullscreen = e),
                      1 == e
                        ? el.classList.add("fullscreen")
                        : el.classList.remove("fullscreen"));
                }),
                (obj.dispatch = function (e) {
                  if (!obj.ignoreEvents) {
                    if ("function" == typeof obj.options.onevent)
                      var t = obj.options.onevent.apply(this, arguments);
                    if ("function" == typeof obj.options[e])
                      t = obj.options[e].apply(
                        this,
                        Array.prototype.slice.call(arguments, 1)
                      );
                  }
                  if ("onafterchanges" == e && obj.options.persistance) {
                    var o =
                        1 == obj.options.persistance
                          ? obj.options.url
                          : obj.options.persistance,
                      n = obj.prepareJson(arguments[2]);
                    obj.save(o, n);
                  }
                  return t;
                }),
                (obj.prepareTable = function () {
                  var e = obj.options.columns.length;
                  if (obj.options.data && void 0 !== obj.options.data[0]) {
                    var t = Object.keys(obj.options.data[0]);
                    t.length > e && (e = t.length);
                  }
                  obj.options.minDimensions[0] > e &&
                    (e = obj.options.minDimensions[0]);
                  for (var o = [], n = 0; n < e; n++)
                    obj.options.colHeaders[n] ||
                      (obj.options.colHeaders[n] = ""),
                      obj.options.colWidths[n] ||
                        (obj.options.colWidths[n] =
                          obj.options.defaultColWidth),
                      obj.options.colAlignments[n] ||
                        (obj.options.colAlignments[n] =
                          obj.options.defaultColAlign),
                      obj.options.columns[n]
                        ? obj.options.columns[n].type ||
                          (obj.options.columns[n].type = "text")
                        : (obj.options.columns[n] = { type: "text" }),
                      obj.options.columns[n].name ||
                        (obj.options.columns[n].name = t && t[n] ? t[n] : n),
                      obj.options.columns[n].source ||
                        (obj.options.columns[n].source = []),
                      obj.options.columns[n].options ||
                        (obj.options.columns[n].options = []),
                      obj.options.columns[n].editor ||
                        (obj.options.columns[n].editor = null),
                      obj.options.columns[n].allowEmpty ||
                        (obj.options.columns[n].allowEmpty = !1),
                      obj.options.columns[n].title ||
                        (obj.options.columns[n].title = obj.options.colHeaders[
                          n
                        ]
                          ? obj.options.colHeaders[n]
                          : ""),
                      obj.options.columns[n].width ||
                        (obj.options.columns[n].width = obj.options.colWidths[n]
                          ? obj.options.colWidths[n]
                          : obj.options.defaultColWidth),
                      obj.options.columns[n].align ||
                        (obj.options.columns[n].align = obj.options
                          .colAlignments[n]
                          ? obj.options.colAlignments[n]
                          : "center"),
                      "autocomplete" == obj.options.columns[n].type ||
                      "dropdown" == obj.options.columns[n].type
                        ? obj.options.columns[n].url &&
                          o.push({
                            url: obj.options.columns[n].url,
                            index: n,
                            method: "GET",
                            dataType: "json",
                            success: function (e) {
                              for (var t = 0; t < e.length; t++)
                                obj.options.columns[this.index].source.push(
                                  e[t]
                                );
                            },
                          })
                        : "calendar" == obj.options.columns[n].type &&
                          (obj.options.columns[n].options.format ||
                            (obj.options.columns[n].options.format =
                              "DD/MM/YYYY"));
                  o.length
                    ? jSuites.ajax(o, function () {
                        obj.createTable();
                      })
                    : obj.createTable();
                }),
                (obj.createTable = function () {
                  (obj.table = document.createElement("table")),
                    (obj.thead = document.createElement("thead")),
                    (obj.tbody = document.createElement("tbody")),
                    (obj.headers = []),
                    (obj.colgroup = []),
                    (obj.content = document.createElement("div")),
                    obj.content.classList.add("jexcel_content"),
                    (obj.content.onscroll = function (e) {
                      obj.scrollControls(e);
                    }),
                    (obj.content.onwheel = function (e) {
                      obj.wheelControls(e);
                    }),
                    (obj.toolbar = document.createElement("div")),
                    obj.toolbar.classList.add("jexcel_toolbar");
                  var e = document.createElement("div"),
                    t = document.createTextNode(obj.options.text.search + ": ");
                  (obj.searchInput = document.createElement("input")),
                    obj.searchInput.classList.add("jexcel_search"),
                    e.appendChild(t),
                    e.appendChild(obj.searchInput),
                    (obj.searchInput.onfocus = function () {
                      obj.resetSelection();
                    });
                  var o = document.createElement("div");
                  if (
                    obj.options.pagination > 0 &&
                    obj.options.paginationOptions &&
                    obj.options.paginationOptions.length > 0
                  ) {
                    (obj.paginationDropdown = document.createElement("select")),
                      obj.paginationDropdown.classList.add(
                        "jexcel_pagination_dropdown"
                      ),
                      (obj.paginationDropdown.onchange = function () {
                        (obj.options.pagination = parseInt(this.value)),
                          obj.page(0);
                      });
                    for (
                      var n = 0;
                      n < obj.options.paginationOptions.length;
                      n++
                    ) {
                      var r = document.createElement("option");
                      (r.value = obj.options.paginationOptions[n]),
                        (r.innerHTML = obj.options.paginationOptions[n]),
                        obj.paginationDropdown.appendChild(r);
                    }
                    (obj.paginationDropdown.value = obj.options.pagination),
                      o.appendChild(
                        document.createTextNode(obj.options.text.show)
                      ),
                      o.appendChild(obj.paginationDropdown),
                      o.appendChild(
                        document.createTextNode(obj.options.text.entries)
                      );
                  }
                  var l,
                    i = document.createElement("div");
                  if (
                    (i.classList.add("jexcel_filter"),
                    i.appendChild(o),
                    i.appendChild(e),
                    (obj.colgroupContainer =
                      document.createElement("colgroup")),
                    (l = document.createElement("col")).setAttribute(
                      "width",
                      "50"
                    ),
                    obj.colgroupContainer.appendChild(l),
                    obj.options.nestedHeaders &&
                      obj.options.nestedHeaders.length > 0)
                  )
                    if (
                      obj.options.nestedHeaders[0] &&
                      obj.options.nestedHeaders[0][0]
                    )
                      for (var s = 0; s < obj.options.nestedHeaders.length; s++)
                        obj.thead.appendChild(
                          obj.createNestedHeader(obj.options.nestedHeaders[s])
                        );
                    else
                      obj.thead.appendChild(
                        obj.createNestedHeader(obj.options.nestedHeaders)
                      );
                  (obj.headerContainer = document.createElement("tr")),
                    (l = document.createElement("td")).classList.add(
                      "jexcel_selectall"
                    ),
                    obj.headerContainer.appendChild(l);
                  for (n = 0; n < obj.options.columns.length; n++)
                    obj.createCellHeader(n),
                      obj.headerContainer.appendChild(obj.headers[n]),
                      obj.colgroupContainer.appendChild(obj.colgroup[n]);
                  if (
                    (obj.thead.appendChild(obj.headerContainer),
                    1 == obj.options.filters)
                  ) {
                    obj.filter = document.createElement("tr");
                    var a = document.createElement("td");
                    obj.filter.appendChild(a);
                    for (n = 0; n < obj.options.columns.length; n++) {
                      ((a = document.createElement("td")).innerHTML = "&nbsp;"),
                        a.setAttribute("data-x", n),
                        (a.className = "jexcel_column_filter"),
                        "hidden" == obj.options.columns[n].type &&
                          (a.style.display = "none"),
                        obj.filter.appendChild(a);
                    }
                    obj.thead.appendChild(obj.filter);
                  }
                  (obj.table = document.createElement("table")),
                    obj.table.classList.add("jexcel"),
                    obj.table.setAttribute("cellpadding", "0"),
                    obj.table.setAttribute("cellspacing", "0"),
                    obj.table.setAttribute("unselectable", "yes"),
                    obj.table.appendChild(obj.colgroupContainer),
                    obj.table.appendChild(obj.thead),
                    obj.table.appendChild(obj.tbody),
                    obj.options.textOverflow ||
                      obj.table.classList.add("jexcel_overflow"),
                    (obj.corner = document.createElement("div")),
                    (obj.corner.className = "jexcel_corner"),
                    obj.corner.setAttribute("unselectable", "on"),
                    obj.corner.setAttribute("onselectstart", "return false"),
                    0 == obj.options.selectionCopy &&
                      (obj.corner.style.display = "none"),
                    (obj.textarea = document.createElement("textarea")),
                    (obj.textarea.className = "jexcel_textarea"),
                    (obj.textarea.id = "jexcel_textarea"),
                    (obj.textarea.tabIndex = "-1"),
                    (obj.contextMenu = document.createElement("div")),
                    (obj.contextMenu.className = "jexcel_contextmenu"),
                    jSuites.contextmenu(obj.contextMenu, {
                      onclick: function () {
                        obj.contextMenu.contextmenu.close(!1);
                      },
                    }),
                    document.createElement("div").classList.add("jexcel_table"),
                    (obj.pagination = document.createElement("div")),
                    obj.pagination.classList.add("jexcel_pagination");
                  var u = document.createElement("div"),
                    c = document.createElement("div");
                  if (
                    (obj.pagination.appendChild(u),
                    obj.pagination.appendChild(c),
                    obj.options.pagination ||
                      (obj.pagination.style.display = "none"),
                    1 == obj.options.search && el.appendChild(i),
                    obj.content.appendChild(obj.table),
                    obj.content.appendChild(obj.corner),
                    obj.content.appendChild(obj.textarea),
                    el.appendChild(obj.toolbar),
                    el.appendChild(obj.content),
                    el.appendChild(obj.pagination),
                    el.appendChild(obj.contextMenu),
                    el.appendChild(obj.ads),
                    el.classList.add("jexcel_container"),
                    obj.options.toolbar &&
                      obj.options.toolbar.length &&
                      obj.createToolbar(),
                    1 == obj.options.fullscreen
                      ? el.classList.add("fullscreen")
                      : 1 == obj.options.tableOverflow &&
                        (obj.options.tableHeight &&
                          ((obj.content.style["overflow-y"] = "auto"),
                          (obj.content.style["box-shadow"] =
                            "rgb(221 221 221) 2px 2px 5px 0.1px"),
                          (obj.content.style.maxHeight =
                            obj.options.tableHeight)),
                        obj.options.tableWidth &&
                          ((obj.content.style["overflow-x"] = "auto"),
                          (obj.content.style.width = obj.options.tableWidth))),
                    1 != obj.options.tableOverflow &&
                      obj.options.toolbar &&
                      el.classList.add("with-toolbar"),
                    1 == obj.options.columnDrag &&
                      obj.thead.classList.add("draggable"),
                    1 == obj.options.columnResize &&
                      obj.thead.classList.add("resizable"),
                    1 == obj.options.rowDrag &&
                      obj.tbody.classList.add("draggable"),
                    1 == obj.options.rowResize &&
                      obj.tbody.classList.add("resizable"),
                    obj.setData(),
                    obj.options.style &&
                      obj.setStyle(obj.options.style, null, null, 1, 1),
                    obj.options.classes)
                  ) {
                    var f = Object.keys(obj.options.classes);
                    for (n = 0; n < f.length; n++) {
                      var d = _jexcel.getIdFromColumnName(f[n], !0);
                      obj.records[d[1]][d[0]].classList.add(
                        obj.options.classes[f[n]]
                      );
                    }
                  }
                }),
                (obj.refresh = function () {
                  obj.options.url
                    ? (1 == obj.options.loadingSpin && jSuites.loading.show(),
                      jSuites.ajax({
                        url: obj.options.url,
                        method: obj.options.method,
                        data: obj.options.requestVariables,
                        dataType: "json",
                        success: function (e) {
                          (obj.options.data = e.data ? e.data : e),
                            obj.setData(),
                            1 == obj.options.loadingSpin &&
                              jSuites.loading.hide();
                        },
                      }))
                    : obj.setData();
                }),
                (obj.setData = function (e) {
                  if (
                    (e &&
                      ("string" == typeof e && (e = JSON.parse(e)),
                      (obj.options.data = e)),
                    obj.options.data || (obj.options.data = []),
                    obj.options.data &&
                      obj.options.data[0] &&
                      !Array.isArray(obj.options.data[0]))
                  ) {
                    e = [];
                    for (var t = 0; t < obj.options.data.length; t++) {
                      for (
                        var o = [], n = 0;
                        n < obj.options.columns.length;
                        n++
                      )
                        o[n] = obj.options.data[t][obj.options.columns[n].name];
                      e.push(o);
                    }
                    obj.options.data = e;
                  }
                  (t = 0), (n = 0);
                  var r = obj.options.columns.length,
                    l = obj.options.data.length,
                    i = obj.options.minDimensions[0],
                    s = obj.options.minDimensions[1],
                    a = i > r ? i : r,
                    u = s > l ? s : l;
                  for (t = 0; t < u; t++)
                    for (n = 0; n < a; n++)
                      null == obj.options.data[t] && (obj.options.data[t] = []),
                        null == obj.options.data[t][n] &&
                          (obj.options.data[t][n] = "");
                  if (
                    ((obj.rows = []),
                    (obj.results = null),
                    (obj.records = []),
                    (obj.history = []),
                    (obj.historyIndex = -1),
                    (obj.tbody.innerHTML = ""),
                    1 == obj.options.lazyLoading)
                  ) {
                    var c = 0,
                      f =
                        obj.options.data.length < 100
                          ? obj.options.data.length
                          : 100;
                    obj.options.pagination &&
                      ((obj.options.pagination = !1),
                      console.error(
                        "Zone_sheet: Pagination will be disable due the lazyLoading"
                      ));
                  } else if (obj.options.pagination) {
                    obj.pageNumber || (obj.pageNumber = 0);
                    obj.options.pagination;
                    (c = obj.options.pagination * obj.pageNumber),
                      (f =
                        obj.options.pagination * obj.pageNumber +
                        obj.options.pagination),
                      obj.options.data.length < f &&
                        (f = obj.options.data.length);
                  } else (c = 0), (f = obj.options.data.length);
                  for (t = 0; t < obj.options.data.length; t++) {
                    var d = obj.createRow(t, obj.options.data[t]);
                    t >= c && t < f && obj.tbody.appendChild(d);
                  }
                  if (
                    (1 == obj.options.lazyLoading ||
                      (obj.options.pagination && obj.updatePagination()),
                    obj.options.mergeCells)
                  ) {
                    var p = Object.keys(obj.options.mergeCells);
                    for (n = 0; n < p.length; n++) {
                      var b = obj.options.mergeCells[p[n]];
                      obj.setMerge(p[n], b[0], b[1], 1);
                    }
                  }
                  obj.updateTable(), obj.dispatch("onload", el, obj);
                }),
                (obj.getData = function (e, t) {
                  for (
                    var o = [],
                      n = 0,
                      r = 0,
                      l = 1 == t || 0 == obj.options.copyCompatibility,
                      i = obj.options.columns.length,
                      s = obj.options.data.length,
                      a = 0;
                    a < s;
                    a++
                  ) {
                    n = 0;
                    for (var u = 0; u < i; u++)
                      (e &&
                        !obj.records[a][u].classList.contains("highlight")) ||
                        (o[r] || (o[r] = []),
                        (o[r][n] = l
                          ? obj.options.data[a][u]
                          : obj.records[a][u].innerHTML),
                        n++);
                    n > 0 && r++;
                  }
                  return o;
                }),
                (obj.getJsonRow = function (e) {
                  for (
                    var t = obj.options.data[e],
                      o = obj.options.columns.length,
                      n = {},
                      r = 0;
                    r < o;
                    r++
                  )
                    obj.options.columns[r].name ||
                      (obj.options.columns[r].name = r),
                      (n[obj.options.columns[r].name] = t[r]);
                  return n;
                }),
                (obj.getJson = function (e) {
                  for (
                    var t = [],
                      o = obj.options.columns.length,
                      n = obj.options.data.length,
                      r = 0;
                    r < n;
                    r++
                  ) {
                    for (var l = null, i = 0; i < o; i++)
                      (e &&
                        !obj.records[r][i].classList.contains("highlight")) ||
                        (null == l && (l = {}),
                        obj.options.columns[i].name ||
                          (obj.options.columns[i].name = i),
                        (l[obj.options.columns[i].name] =
                          obj.options.data[r][i]));
                    null != l && t.push(l);
                  }
                  return t;
                }),
                (obj.prepareJson = function (e) {
                  for (var t = [], o = 0; o < e.length; o++) {
                    var n = e[o].x,
                      r = e[o].y,
                      l = obj.options.columns[n].name
                        ? obj.options.columns[n].name
                        : n;
                    t[r] || (t[r] = { row: r, data: {} }),
                      (t[r].data[l] = e[o].newValue);
                  }
                  return t.filter(function (e) {
                    return null != e;
                  });
                }),
                (obj.save = function (e, t) {
                  var o = obj.dispatch("onbeforesave", el, obj, t);
                  if (o) t = o;
                  else if (!1 === o) return !1;
                  jSuites.ajax({
                    url: e,
                    method: "POST",
                    dataType: "json",
                    data: { data: JSON.stringify(t) },
                    success: function (e) {
                      obj.dispatch("onsave", el, obj, t);
                    },
                  });
                }),
                (obj.getRowData = function (e) {
                  return obj.options.data[e];
                }),
                (obj.setRowData = function (e, t) {
                  for (var o = 0; o < obj.headers.length; o++) {
                    var n = _jexcel.getColumnNameFromId([o, e]);
                    null != t[o] && obj.setValue(n, t[o]);
                  }
                }),
                (obj.getColumnData = function (e) {
                  for (var t = [], o = 0; o < obj.options.data.length; o++)
                    t.push(obj.options.data[o][e]);
                  return t;
                }),
                (obj.setColumnData = function (e, t) {
                  for (var o = 0; o < obj.rows.length; o++) {
                    var n = _jexcel.getColumnNameFromId([e, o]);
                    null != t[o] && obj.setValue(n, t[o]);
                  }
                }),
                (obj.createRow = function (e, t) {
                  if ((obj.records[e] || (obj.records[e] = []), !t))
                    t = obj.options.data[e];
                  (obj.rows[e] = document.createElement("tr")),
                    obj.rows[e].setAttribute("data-y", e);
                  var o = null;
                  obj.options.defaultRowHeight &&
                    (obj.rows[e].style.height =
                      obj.options.defaultRowHeight + "px"),
                    obj.options.rows[e] &&
                      (obj.options.rows[e].height &&
                        (obj.rows[e].style.height = obj.options.rows[e].height),
                      obj.options.rows[e].title &&
                        (o = obj.options.rows[e].title)),
                    o || (o = parseInt(e + 1));
                  var n = document.createElement("td");
                  (n.innerHTML = o),
                    n.setAttribute("data-y", e),
                    (n.className = "jexcel_row"),
                    obj.rows[e].appendChild(n);
                  for (var r = 0; r < obj.options.columns.length; r++)
                    (obj.records[e][r] = obj.createCell(r, e, t[r])),
                      obj.rows[e].appendChild(obj.records[e][r]);
                  return obj.rows[e];
                }),
                (obj.parseValue = function (e, t, o, n) {
                  "=" == ("" + o).substr(0, 1) &&
                    1 == obj.options.parseFormulas &&
                    (o = obj.executeFormula(o, e, t));
                  var r = obj.options.columns[e];
                  if (r && !isFormula(o)) {
                    var l = null;
                    if ((l = getMask(r))) {
                      o && o == Number(o) && (o = Number(o));
                      var i = jSuites.mask.render(o, l, !0);
                      if (n && l.mask) {
                        var s = l.mask.split(";");
                        if (s[1])
                          s[1].match(new RegExp("\\[Red\\]", "gi")) &&
                            (o < 0
                              ? n.classList.add("red")
                              : n.classList.remove("red")),
                            s[1].match(new RegExp("\\(", "gi")) &&
                              o < 0 &&
                              (i = "(" + i + ")");
                      }
                      i && (o = i);
                    }
                  }
                  return o;
                });
              var validDate = function (e) {
                return (
                  ("-" == (e = "" + e).substr(4, 1) && "-" == e.substr(7, 1)) ||
                  (4 == (e = e.split("-"))[0].length &&
                    e[0] == Number(e[0]) &&
                    2 == e[1].length &&
                    e[1] == Number(e[1]))
                );
              };
              (obj.createCell = function (e, t, o) {
                var n = document.createElement("td");
                if (
                  (n.setAttribute("data-x", e),
                  n.setAttribute("data-y", t),
                  "=" == ("" + o).substr(0, 1) &&
                    1 == obj.options.secureFormulas)
                ) {
                  var r = secureFormula(o);
                  r != o && (o = r);
                }
                if (obj.options.columns[e].editor)
                  !1 === obj.options.stripHTML ||
                  !1 === obj.options.columns[e].stripHTML
                    ? (n.innerHTML = o)
                    : (n.textContent = o),
                    "function" ==
                      typeof obj.options.columns[e].editor.createCell &&
                      (n = obj.options.columns[e].editor.createCell(n));
                else if ("hidden" == obj.options.columns[e].type)
                  (n.style.display = "none"), (n.textContent = o);
                else if (
                  "checkbox" == obj.options.columns[e].type ||
                  "radio" == obj.options.columns[e].type
                ) {
                  var l = document.createElement("input");
                  (l.type = obj.options.columns[e].type),
                    (l.name = "c" + e),
                    (l.checked = 1 == o || 1 == o || "true" == o),
                    (l.onclick = function () {
                      obj.setValue(n, this.checked);
                    }),
                    (1 != obj.options.columns[e].readOnly &&
                      0 != obj.options.editable) ||
                      l.setAttribute("disabled", "disabled"),
                    n.appendChild(l),
                    (obj.options.data[t][e] = l.checked);
                } else if ("calendar" == obj.options.columns[e].type) {
                  var i = null;
                  if (!validDate(o)) {
                    var s = jSuites.calendar.extractDateFromString(
                      o,
                      obj.options.columns[e].options.format
                    );
                    s && (i = s);
                  }
                  n.textContent = jSuites.calendar.getDateString(
                    i || o,
                    obj.options.columns[e].options.format
                  );
                } else if (
                  "dropdown" == obj.options.columns[e].type ||
                  "autocomplete" == obj.options.columns[e].type
                )
                  n.classList.add("jexcel_dropdown"),
                    (n.textContent = obj.getDropDownValue(e, o));
                else if ("color" == obj.options.columns[e].type)
                  if ("square" == obj.options.columns[e].render) {
                    var a = document.createElement("div");
                    (a.className = "color"),
                      (a.style.backgroundColor = o),
                      n.appendChild(a);
                  } else (n.style.color = o), (n.textContent = o);
                else if ("image" == obj.options.columns[e].type) {
                  if (o && "data:image" == o.substr(0, 10)) {
                    var u = document.createElement("img");
                    (u.src = o), n.appendChild(u);
                  }
                } else
                  "html" == obj.options.columns[e].type ||
                  !1 === obj.options.stripHTML ||
                  !1 === obj.options.columns[e].stripHTML
                    ? (n.innerHTML = stripScript(obj.parseValue(e, t, o, n)))
                    : (n.textContent = obj.parseValue(e, t, o, n));
                1 == obj.options.columns[e].readOnly &&
                  (n.className = "readonly");
                var c = obj.options.columns[e].align
                  ? obj.options.columns[e].align
                  : "center";
                return (
                  (n.style.textAlign = c),
                  0 != obj.options.columns[e].wordWrap &&
                    (1 == obj.options.wordWrap ||
                      1 == obj.options.columns[e].wordWrap ||
                      n.innerHTML.length > 200) &&
                    (n.style.whiteSpace = "pre-wrap"),
                  e > 0 &&
                    1 == this.options.textOverflow &&
                    (o || n.innerHTML
                      ? (obj.records[t][e - 1].style.overflow = "hidden")
                      : e == obj.options.columns.length - 1 &&
                        (n.style.overflow = "hidden")),
                  n
                );
              }),
                (obj.createCellHeader = function (e) {
                  var t = obj.options.columns[e].width
                      ? obj.options.columns[e].width
                      : obj.options.defaultColWidth,
                    o = obj.options.columns[e].align
                      ? obj.options.columns[e].align
                      : obj.options.defaultColAlign;
                  (obj.headers[e] = document.createElement("td")),
                    obj.options.stripHTML
                      ? (obj.headers[e].textContent = obj.options.columns[e]
                          .title
                          ? obj.options.columns[e].title
                          : _jexcel.getColumnName(e))
                      : (obj.headers[e].innerHTML = obj.options.columns[e].title
                          ? obj.options.columns[e].title
                          : _jexcel.getColumnName(e)),
                    obj.headers[e].setAttribute("data-x", e),
                    (obj.headers[e].style.textAlign = o),
                    obj.options.columns[e].title &&
                      obj.headers[e].setAttribute(
                        "title",
                        obj.headers[e].innerText
                      ),
                    obj.options.columns[e].id &&
                      obj.headers[e].setAttribute(
                        "id",
                        obj.options.columns[e].id
                      ),
                    (obj.colgroup[e] = document.createElement("col")),
                    obj.colgroup[e].setAttribute("width", t),
                    "hidden" == obj.options.columns[e].type &&
                      ((obj.headers[e].style.display = "none"),
                      (obj.colgroup[e].style.display = "none"));
                }),
                (obj.updateNestedHeader = function (e, t, o) {
                  obj.options.nestedHeaders[t][e].title &&
                    ((obj.options.nestedHeaders[t][e].title = o),
                    (obj.options.nestedHeaders[t].element.children[
                      e + 1
                    ].textContent = o));
                }),
                (obj.createNestedHeader = function (e) {
                  var t = document.createElement("tr");
                  t.classList.add("jexcel_nested");
                  var o = document.createElement("td");
                  t.appendChild(o), (e.element = t);
                  for (var n = 0, r = 0; r < e.length; r++) {
                    e[r].colspan || (e[r].colspan = 1),
                      e[r].align || (e[r].align = "center"),
                      e[r].title || (e[r].title = ""),
                      e[r].id || (e[r].id = "");
                    for (var l = e[r].colspan, i = [], s = 0; s < l; s++)
                      obj.options.columns[n] &&
                        "hidden" == obj.options.columns[n].type &&
                        l++,
                        i.push(n),
                        n++;
                    (o = document.createElement("td")).setAttribute(
                      "data-column",
                      i.join(",")
                    ),
                      o.setAttribute("colspan", e[r].colspan),
                      o.setAttribute("align", e[r].align),
                      o.setAttribute("id", e[r].id),
                      (o.textContent = e[r].title),
                      t.appendChild(o);
                  }
                  return t;
                }),
                (obj.createToolbar = function (e) {
                  if (e) obj.options.toolbar = e;
                  else e = obj.options.toolbar;
                  for (var t = 0; t < e.length; t++) {
                    if ("i" == e[t].type)
                      (l = document.createElement("i")).classList.add(
                        "jexcel_toolbar_item"
                      ),
                        l.classList.add("material-icons"),
                        l.setAttribute("data-k", e[t].k),
                        l.setAttribute("data-v", e[t].v),
                        l.setAttribute("id", e[t].id),
                        e[t].tooltip && l.setAttribute("title", e[t].tooltip),
                        e[t].onclick && _typeof(e[t].onclick)
                          ? (l.onclick = (function (t) {
                              var o = t;
                              return function () {
                                e[o].onclick(el, obj, this);
                              };
                            })(t))
                          : (l.onclick = function () {
                              var e = this.getAttribute("data-k"),
                                t = this.getAttribute("data-v");
                              obj.setStyle(obj.highlighted, e, t);
                            }),
                        (l.textContent = e[t].content),
                        obj.toolbar.appendChild(l);
                    else if ("select" == e[t].type) {
                      var o = !1;
                      (l = document.createElement("select")).classList.add(
                        "jexcel_toolbar_item"
                      ),
                        l.setAttribute("data-k", e[t].k),
                        e[t].tooltip && l.setAttribute("title", e[t].tooltip),
                        e[t].onchange && _typeof(e[t].onchange)
                          ? ((l.onchange = e[t].onchange), (o = !0))
                          : (l.onchange = function () {
                              var e = this.getAttribute("data-k");
                              obj.setStyle(obj.highlighted, e, this.value);
                            });
                      for (var n = 0; n < e[t].v.length; n++) {
                        var r = document.createElement("option");
                        (r.value = e[t].v[n]),
                          (r.textContent = e[t].v[n]),
                          e[t].selectedValue &&
                            r.value === e[t].selectedValue &&
                            (r.selected = !0),
                          l.appendChild(r);
                      }
                      o && l.dispatchEvent(new Event("change")),
                        obj.toolbar.appendChild(l);
                    } else if ("color" == e[t].type) {
                      var l;
                      (l = document.createElement("i")).classList.add(
                        "jexcel_toolbar_item"
                      ),
                        l.classList.add("material-icons"),
                        l.setAttribute("data-k", e[t].k),
                        l.setAttribute("data-v", ""),
                        e[t].tooltip && l.setAttribute("title", e[t].tooltip),
                        obj.toolbar.appendChild(l),
                        (l.textContent = e[t].content),
                        jSuites.color(l, {
                          onchange: function (e, t) {
                            var o = e.getAttribute("data-k");
                            obj.setStyle(obj.highlighted, o, t);
                          },
                        });
                    }
                  }
                }),
                (obj.setMerge = function (e, t, o, n) {
                  var r = !1;
                  if (!e) {
                    if (!obj.highlighted.length)
                      return alert(obj.options.text.noCellsSelected), null;
                    var l = parseInt(obj.highlighted[0].getAttribute("data-x")),
                      i = parseInt(obj.highlighted[0].getAttribute("data-y")),
                      s = parseInt(
                        obj.highlighted[
                          obj.highlighted.length - 1
                        ].getAttribute("data-x")
                      ),
                      a = parseInt(
                        obj.highlighted[
                          obj.highlighted.length - 1
                        ].getAttribute("data-y")
                      );
                    (e = _jexcel.getColumnNameFromId([l, i])),
                      (t = s - l + 1),
                      (o = a - i + 1);
                  }
                  var u = _jexcel.getIdFromColumnName(e, !0);
                  if (obj.options.mergeCells[e])
                    obj.records[u[1]][u[0]].getAttribute("data-merged") &&
                      (r = obj.options.text.cellAlreadyMerged);
                  else if ((!t || t < 2) && (!o || o < 2))
                    r = obj.options.text.invalidMergeProperties;
                  else
                    for (var c = u[1]; c < u[1] + o; c++)
                      for (var f = u[0]; f < u[0] + t; f++) {
                        _jexcel.getColumnNameFromId([f, c]);
                        obj.records[c][f].getAttribute("data-merged") &&
                          (r =
                            obj.options.text
                              .thereIsAConflictWithAnotherMergedCell);
                      }
                  if (r) alert(r);
                  else {
                    t > 1
                      ? obj.records[u[1]][u[0]].setAttribute("colspan", t)
                      : (t = 1),
                      o > 1
                        ? obj.records[u[1]][u[0]].setAttribute("rowspan", o)
                        : (o = 1),
                      (obj.options.mergeCells[e] = [t, o, []]),
                      obj.records[u[1]][u[0]].setAttribute(
                        "data-merged",
                        "true"
                      ),
                      (obj.records[u[1]][u[0]].style.overflow = "hidden");
                    for (var d = [], p = u[1]; p < u[1] + o; p++)
                      for (var b = u[0]; b < u[0] + t; b++)
                        (u[0] == b && u[1] == p) ||
                          (d.push(obj.options.data[p][b]),
                          obj.updateCell(b, p, "", !0),
                          obj.options.mergeCells[e][2].push(obj.records[p][b]),
                          (obj.records[p][b].style.display = "none"),
                          (obj.records[p][b] = obj.records[u[1]][u[0]]));
                    obj.updateSelection(obj.records[u[1]][u[0]]),
                      n ||
                        (obj.setHistory({
                          action: "setMerge",
                          column: e,
                          colspan: t,
                          rowspan: o,
                          data: d,
                        }),
                        obj.dispatch("onmerge", el, e, t, o));
                  }
                }),
                (obj.getMerge = function (e) {
                  var t = {};
                  if (e)
                    t = obj.options.mergeCells[e]
                      ? [
                          obj.options.mergeCells[e][0],
                          obj.options.mergeCells[e][1],
                        ]
                      : null;
                  else if (obj.options.mergeCells) {
                    obj.options.mergeCells;
                    for (
                      var o = Object.keys(obj.options.mergeCells), n = 0;
                      n < o.length;
                      n++
                    )
                      t[o[n]] = [
                        obj.options.mergeCells[o[n]][0],
                        obj.options.mergeCells[o[n]][1],
                      ];
                  }
                  return t;
                }),
                (obj.removeMerge = function (e, t, o) {
                  if (obj.options.mergeCells[e]) {
                    var n = _jexcel.getIdFromColumnName(e, !0);
                    obj.records[n[1]][n[0]].removeAttribute("colspan"),
                      obj.records[n[1]][n[0]].removeAttribute("rowspan"),
                      obj.records[n[1]][n[0]].removeAttribute("data-merged");
                    for (
                      var r = obj.options.mergeCells[e], l = 0, i = 0;
                      i < r[1];
                      i++
                    )
                      for (var s = 0; s < r[0]; s++)
                        (i > 0 || s > 0) &&
                          ((obj.records[n[1] + i][n[0] + s] = r[2][l]),
                          (obj.records[n[1] + i][n[0] + s].style.display = ""),
                          t && t[l] && obj.updateCell(n[0] + s, n[1] + i, t[l]),
                          l++);
                    obj.updateSelection(
                      obj.records[n[1]][n[0]],
                      obj.records[n[1] + i - 1][n[0] + s - 1]
                    ),
                      o || delete obj.options.mergeCells[e];
                  }
                }),
                (obj.destroyMerged = function (e) {
                  if (obj.options.mergeCells) {
                    obj.options.mergeCells;
                    for (
                      var t = Object.keys(obj.options.mergeCells), o = 0;
                      o < t.length;
                      o++
                    )
                      obj.removeMerge(t[o], null, e);
                  }
                }),
                (obj.isColMerged = function (e, t) {
                  var o = [];
                  if (obj.options.mergeCells)
                    for (
                      var n = Object.keys(obj.options.mergeCells), r = 0;
                      r < n.length;
                      r++
                    ) {
                      var l = _jexcel.getIdFromColumnName(n[r], !0),
                        i = obj.options.mergeCells[n[r]][0],
                        s = l[0],
                        a = l[0] + (i > 1 ? i - 1 : 0);
                      null == t
                        ? s <= e && a >= e && o.push(n[r])
                        : t
                        ? s < e && a >= e && o.push(n[r])
                        : s <= e && a > e && o.push(n[r]);
                    }
                  return o;
                }),
                (obj.isRowMerged = function (e, t) {
                  var o = [];
                  if (obj.options.mergeCells)
                    for (
                      var n = Object.keys(obj.options.mergeCells), r = 0;
                      r < n.length;
                      r++
                    ) {
                      var l = _jexcel.getIdFromColumnName(n[r], !0),
                        i = obj.options.mergeCells[n[r]][1],
                        s = l[1],
                        a = l[1] + (i > 1 ? i - 1 : 0);
                      null == t
                        ? s <= e && a >= e && o.push(n[r])
                        : t
                        ? s < e && a >= e && o.push(n[r])
                        : s <= e && a > e && o.push(n[r]);
                    }
                  return o;
                }),
                (obj.openFilter = function (e) {
                  if (obj.options.filters) {
                    (e = parseInt(e)), obj.resetSelection();
                    var t = [];
                    if ("checkbox" == obj.options.columns[e].type)
                      t.push({ id: "true", name: "True" }),
                        t.push({ id: "false", name: "False" });
                    else {
                      for (
                        var o = [], n = !1, r = 0;
                        r < obj.options.data.length;
                        r++
                      ) {
                        var l = obj.options.data[r][e],
                          i = obj.records[r][e].innerHTML;
                        if (l && i) o[l] = i;
                        else n = !0;
                      }
                      var s = Object.keys(o);
                      for (t = [], r = 0; r < s.length; r++)
                        t.push({ id: s[r], name: o[s[r]] });
                      n && t.push({ value: "", id: "", name: "(Blanks)" });
                    }
                    var a = document.createElement("div");
                    (obj.filter.children[e + 1].innerHTML = ""),
                      obj.filter.children[e + 1].appendChild(a),
                      (obj.filter.children[e + 1].style.paddingLeft = "0px"),
                      (obj.filter.children[e + 1].style.paddingRight = "0px"),
                      (obj.filter.children[e + 1].style.overflow = "initial");
                    var u = {
                      data: t,
                      multiple: !0,
                      autocomplete: !0,
                      opened: !0,
                      value: void 0 !== obj.filters[e] ? obj.filters[e] : null,
                      width: "100%",
                      position:
                        1 == obj.options.tableOverflow ||
                        1 == obj.options.fullscreen,
                      onclose: function (t) {
                        obj.resetFilters(),
                          (obj.filters[e] = t.dropdown.getValue(!0)),
                          (obj.filter.children[e + 1].innerHTML =
                            t.dropdown.getText()),
                          (obj.filter.children[e + 1].style.paddingLeft = ""),
                          (obj.filter.children[e + 1].style.paddingRight = ""),
                          (obj.filter.children[e + 1].style.overflow = ""),
                          obj.closeFilter(e),
                          obj.refreshSelection();
                      },
                    };
                    jSuites.dropdown(a, u);
                  } else console.log("Zone_sheet: filters not enabled.");
                }),
                (obj.resetFilters = function () {
                  if (obj.options.filters)
                    for (var e = 0; e < obj.filter.children.length; e++)
                      (obj.filter.children[e].innerHTML = "&nbsp;"),
                        (obj.filters[e] = null);
                  (obj.results = null), obj.updateResult();
                }),
                (obj.closeFilter = function (e) {
                  if (!e)
                    for (var t = 0; t < obj.filter.children.length; t++)
                      obj.filters[t] && (e = t);
                  var o = function (e, t, o) {
                      for (var n = 0; n < e.length; n++) {
                        var r = "" + obj.options.data[o][t],
                          l = "" + obj.records[o][t].innerHTML;
                        if (e[n] == r || e[n] == l) return !0;
                      }
                      return !1;
                    },
                    n = obj.filters[e];
                  obj.results = [];
                  for (var r = 0; r < obj.options.data.length; r++)
                    o(n, e, r) && obj.results.push(r);
                  obj.results.length || (obj.results = null),
                    obj.updateResult();
                }),
                (obj.openEditor = function (e, t, o) {
                  var n = e.getAttribute("data-y"),
                    r = e.getAttribute("data-x");
                  obj.dispatch("oneditionstart", el, e, r, n),
                    r > 0 && (obj.records[n][r - 1].style.overflow = "hidden");
                  var l = function (t) {
                    var o = e.getBoundingClientRect(),
                      l = document.createElement(t);
                    return (
                      (l.style.width = o.width + "px"),
                      (l.style.height = o.height - 2 + "px"),
                      (l.style.minHeight = o.height - 2 + "px"),
                      e.classList.add("editor"),
                      (e.innerHTML = ""),
                      e.appendChild(l),
                      obj.dispatch("oncreateeditor", el, e, r, n, l),
                      l
                    );
                  };
                  if (1 == e.classList.contains("readonly"));
                  else if (
                    ((obj.edition = [
                      obj.records[n][r],
                      obj.records[n][r].innerHTML,
                      r,
                      n,
                    ]),
                    obj.options.columns[r].editor)
                  )
                    obj.options.columns[r].editor.openEditor(e, el, t, o);
                  else if ("hidden" == obj.options.columns[r].type);
                  else if (
                    "checkbox" == obj.options.columns[r].type ||
                    "radio" == obj.options.columns[r].type
                  ) {
                    var i = !e.children[0].checked;
                    obj.setValue(e, i), (obj.edition = null);
                  } else if (
                    "dropdown" == obj.options.columns[r].type ||
                    "autocomplete" == obj.options.columns[r].type
                  ) {
                    i = obj.options.data[n][r];
                    if (
                      (obj.options.columns[r].multiple &&
                        !Array.isArray(i) &&
                        (i = i.split(";")),
                      "function" == typeof obj.options.columns[r].filter)
                    )
                      var s = obj.options.columns[r].filter(
                        el,
                        e,
                        r,
                        n,
                        obj.options.columns[r].source
                      );
                    else s = obj.options.columns[r].source;
                    for (var a = [], u = 0; u < s.length; u++) a.push(s[u]);
                    var c = l("div"),
                      f = {
                        data: a,
                        multiple: !!obj.options.columns[r].multiple,
                        autocomplete: !(
                          !obj.options.columns[r].autocomplete &&
                          "autocomplete" != obj.options.columns[r].type
                        ),
                        opened: !0,
                        value: i,
                        width: "100%",
                        height: c.style.minHeight,
                        position:
                          1 == obj.options.tableOverflow ||
                          1 == obj.options.fullscreen,
                        onclose: function () {
                          obj.closeEditor(e, !0);
                        },
                      };
                    obj.options.columns[r].options &&
                      obj.options.columns[r].options.type &&
                      (f.type = obj.options.columns[r].options.type),
                      jSuites.dropdown(c, f);
                  } else if (
                    "calendar" == obj.options.columns[r].type ||
                    "color" == obj.options.columns[r].type
                  ) {
                    i = obj.options.data[n][r];
                    ((c = l("input")).value = i),
                      (1 != obj.options.tableOverflow &&
                        1 != obj.options.fullscreen) ||
                        (obj.options.columns[r].options.position = !0),
                      (obj.options.columns[r].options.value =
                        obj.options.data[n][r]),
                      (obj.options.columns[r].options.opened = !0),
                      (obj.options.columns[r].options.onclose = function (
                        t,
                        o
                      ) {
                        obj.closeEditor(e, !0);
                      }),
                      "color" == obj.options.columns[r].type
                        ? jSuites.color(c, obj.options.columns[r].options)
                        : jSuites.calendar(c, obj.options.columns[r].options),
                      c.focus();
                  } else if ("html" == obj.options.columns[r].type) {
                    i = obj.options.data[n][r];
                    ((c = l("div")).style.position = "relative"),
                      (b = document.createElement("div")).classList.add(
                        "jexcel_richtext"
                      ),
                      c.appendChild(b),
                      jSuites.editor(b, { focus: !0, value: i });
                    var d = e.getBoundingClientRect(),
                      p = b.getBoundingClientRect();
                    window.innerHeight < d.bottom + p.height
                      ? (b.style.top = d.top - (p.height + 2) + "px")
                      : (b.style.top = d.top + "px");
                  } else if ("image" == obj.options.columns[r].type) {
                    var b,
                      j = e.children[0];
                    ((c = l("div")).style.position = "relative"),
                      (b = document.createElement("div")).classList.add(
                        "jclose"
                      ),
                      j && j.src && b.appendChild(j),
                      c.appendChild(b),
                      jSuites.image(b, obj.options.imageOptions);
                    (d = e.getBoundingClientRect()),
                      (p = b.getBoundingClientRect());
                    window.innerHeight < d.bottom + p.height
                      ? (b.style.top = d.top - (p.height + 2) + "px")
                      : (b.style.top = d.top + "px");
                  } else {
                    i = 1 == t ? "" : obj.options.data[n][r];
                    if (
                      0 == obj.options.columns[r].wordWrap ||
                      (1 != obj.options.wordWrap &&
                        1 != obj.options.columns[r].wordWrap)
                    )
                      c = l("input");
                    else var c = l("textarea");
                    c.focus(), (c.value = i);
                    f = obj.options.columns[r];
                    var h = null;
                    if (!isFormula(i) && (h = getMask(f))) {
                      if (!f.disabledMaskOnEdition)
                        if (f.mask) {
                          var g = f.mask.split(";");
                          c.setAttribute("data-mask", g[0]);
                        } else
                          f.locale && c.setAttribute("data-locale", f.locale);
                      (h.input = c),
                        (c.mask = h),
                        jSuites.mask.render(i, h, !1);
                    }
                    (c.onblur = function () {
                      obj.closeEditor(e, !0);
                    }),
                      (c.scrollLeft = c.scrollWidth);
                  }
                }),
                (obj.closeEditor = function (e, t) {
                  var o = parseInt(e.getAttribute("data-x")),
                    n = parseInt(e.getAttribute("data-y"));
                  if (1 == t) {
                    if (obj.options.columns[o].editor)
                      var r = obj.options.columns[o].editor.closeEditor(e, t);
                    else if (
                      "checkbox" == obj.options.columns[o].type ||
                      "radio" == obj.options.columns[o].type ||
                      "hidden" == obj.options.columns[o].type
                    );
                    else if (
                      "dropdown" == obj.options.columns[o].type ||
                      "autocomplete" == obj.options.columns[o].type
                    )
                      r = e.children[0].dropdown.close(!0);
                    else if ("calendar" == obj.options.columns[o].type)
                      r = e.children[0].calendar.close(!0);
                    else if ("color" == obj.options.columns[o].type)
                      r = e.children[0].color.close(!0);
                    else if ("html" == obj.options.columns[o].type)
                      r = e.children[0].children[0].editor.getData();
                    else if ("image" == obj.options.columns[o].type) {
                      var l = e.children[0].children[0].children[0];
                      r = l && "IMG" == l.tagName ? l.src : "";
                    } else if ("numeric" == obj.options.columns[o].type) {
                      "=" != ("" + (r = e.children[0].value)).substr(0, 1) &&
                        "" == r &&
                        (r = obj.options.columns[o].allowEmpty ? "" : 0),
                        (e.children[0].onblur = null);
                    } else {
                      r = e.children[0].value;
                      e.children[0].onblur = null;
                      var i,
                        s = obj.options.columns[o];
                      if (
                        (i = getMask(s)) &&
                        "" !== r &&
                        !isFormula(r) &&
                        "number" != typeof r
                      ) {
                        var a = jSuites.mask.extract(r, i, !0);
                        a && "" !== a.value && (r = a.value);
                      }
                    }
                    obj.options.data[n][o] == r
                      ? (e.innerHTML = obj.edition[1])
                      : obj.setValue(e, r);
                  } else
                    obj.options.columns[o].editor
                      ? obj.options.columns[o].editor.closeEditor(e, t)
                      : "dropdown" == obj.options.columns[o].type ||
                        "autocomplete" == obj.options.columns[o].type
                      ? e.children[0].dropdown.close(!0)
                      : "calendar" == obj.options.columns[o].type
                      ? e.children[0].calendar.close(!0)
                      : "color" == obj.options.columns[o].type
                      ? e.children[0].color.close(!0)
                      : (e.children[0].onblur = null),
                      (e.innerHTML =
                        obj.edition && obj.edition[1] ? obj.edition[1] : "");
                  obj.dispatch("oneditionend", el, e, o, n, r, t),
                    e.classList.remove("editor"),
                    (obj.edition = null);
                }),
                (obj.getCell = function (e) {
                  var t = (e = _jexcel.getIdFromColumnName(e, !0))[0],
                    o = e[1];
                  return obj.records[o][t];
                }),
                (obj.getColumnOptions = function (e, t) {
                  var o = obj.options.columns[e];
                  return o || (o = { type: "text" }), o;
                }),
                (obj.getCellFromCoords = function (e, t) {
                  return obj.records[t][e];
                }),
                (obj.getLabel = function (e) {
                  var t = (e = _jexcel.getIdFromColumnName(e, !0))[0],
                    o = e[1];
                  return obj.records[o][t].innerHTML;
                }),
                (obj.getLabelFromCoords = function (e, t) {
                  return obj.records[t][e].innerHTML;
                }),
                (obj.getValue = function (e, t) {
                  if ("object" == _typeof(e))
                    var o = e.getAttribute("data-x"),
                      n = e.getAttribute("data-y");
                  else
                    (o = (e = _jexcel.getIdFromColumnName(e, !0))[0]),
                      (n = e[1]);
                  var r = null;
                  return (
                    null != o &&
                      null != n &&
                      (obj.records[n] &&
                      obj.records[n][o] &&
                      (t || 1 == obj.options.copyCompatibility)
                        ? (r = obj.records[n][o].innerHTML)
                        : obj.options.data[n] &&
                          "undefined" != obj.options.data[n][o] &&
                          (r = obj.options.data[n][o])),
                    r
                  );
                }),
                (obj.getValueFromCoords = function (e, t, o) {
                  var n = null;
                  return (
                    null != e &&
                      null != t &&
                      ((obj.records[t] && obj.records[t][e] && o) ||
                      1 == obj.options.copyCompatibility
                        ? (n = obj.records[t][e].innerHTML)
                        : obj.options.data[t] &&
                          "undefined" != obj.options.data[t][e] &&
                          (n = obj.options.data[t][e])),
                    n
                  );
                }),
                (obj.setValue = function (e, t, o) {
                  var n = [];
                  if ("string" == typeof e) {
                    var r = (a = _jexcel.getIdFromColumnName(e, !0))[0],
                      l = a[1];
                    n.push(obj.updateCell(r, l, t, o)),
                      obj.updateFormulaChain(r, l, n);
                  } else {
                    (r = null), (l = null);
                    if (e && e.getAttribute)
                      (r = e.getAttribute("data-x")),
                        (l = e.getAttribute("data-y"));
                    if (null != r && null != l)
                      n.push(obj.updateCell(r, l, t, o)),
                        obj.updateFormulaChain(r, l, n);
                    else {
                      var i = Object.keys(e);
                      if (i.length > 0)
                        for (var s = 0; s < i.length; s++) {
                          if ("string" == typeof e[s]) {
                            var a;
                            (r = (a = _jexcel.getIdFromColumnName(
                              e[s],
                              !0
                            ))[0]),
                              (l = a[1]);
                          } else if (null != e[s].x && null != e[s].y) {
                            (r = e[s].x), (l = e[s].y);
                            null != e[s].newValue
                              ? (t = e[s].newValue)
                              : null != e[s].value && (t = e[s].value);
                          } else
                            (r = e[s].getAttribute("data-x")),
                              (l = e[s].getAttribute("data-y"));
                          null != r &&
                            null != l &&
                            (n.push(obj.updateCell(r, l, t, o)),
                            obj.updateFormulaChain(r, l, n));
                        }
                    }
                  }
                  obj.setHistory({
                    action: "setValue",
                    records: n,
                    selection: obj.selectedCell,
                  }),
                    obj.updateTable(),
                    obj.onafterchanges(el, n);
                }),
                (obj.setValueFromCoords = function (e, t, o, n) {
                  var r = [];
                  r.push(obj.updateCell(e, t, o, n)),
                    obj.updateFormulaChain(e, t, r),
                    obj.setHistory({
                      action: "setValue",
                      records: r,
                      selection: obj.selectedCell,
                    }),
                    obj.updateTable(),
                    obj.onafterchanges(el, r);
                }),
                (obj.setCheckRadioValue = function () {
                  for (
                    var e = [], t = Object.keys(obj.highlighted), o = 0;
                    o < t.length;
                    o++
                  ) {
                    var n = obj.highlighted[o].getAttribute("data-x"),
                      r = obj.highlighted[o].getAttribute("data-y");
                    ("checkbox" != obj.options.columns[n].type &&
                      "radio" != obj.options.columns[n].type) ||
                      e.push(obj.updateCell(n, r, !obj.options.data[r][n]));
                  }
                  e.length &&
                    (obj.setHistory({
                      action: "setValue",
                      records: e,
                      selection: obj.selectedCell,
                    }),
                    obj.onafterchanges(el, e));
                });
              var stripScript = function (e) {
                var t = new Option();
                t.innerHTML = e;
                var o = null;
                for (e = t.getElementsByTagName("script"); (o = e[0]); )
                  o.parentNode.removeChild(o);
                return t.innerHTML;
              };
              (obj.updateCell = function (e, t, o, n) {
                if (
                  1 != obj.records[t][e].classList.contains("readonly") ||
                  n
                ) {
                  var r;
                  if (
                    "=" == ("" + o).substr(0, 1) &&
                    1 == obj.options.secureFormulas
                  )
                    (r = secureFormula(o)) != o && (o = r);
                  null !=
                    (r = obj.dispatch(
                      "onbeforechange",
                      el,
                      obj.records[t][e],
                      e,
                      t,
                      o
                    )) && (o = r),
                    obj.options.columns[e].editor &&
                      "function" ==
                        typeof obj.options.columns[e].editor.updateCell &&
                      (o = obj.options.columns[e].editor.updateCell(
                        obj.records[t][e],
                        o,
                        n
                      ));
                  f = {
                    x: e,
                    y: t,
                    col: e,
                    row: t,
                    newValue: o,
                    oldValue: obj.options.data[t][e],
                  };
                  var l = obj.options.columns[e].editor;
                  if (l)
                    (obj.options.data[t][e] = o),
                      "function" == typeof l.setValue &&
                        l.setValue(obj.records[t][e], o);
                  else if (
                    "checkbox" == obj.options.columns[e].type ||
                    "radio" == obj.options.columns[e].type
                  ) {
                    if ("radio" == obj.options.columns[e].type)
                      for (var i = 0; i < obj.options.data.length; i++)
                        obj.options.data[i][e] = !1;
                    (obj.records[t][e].children[0].checked =
                      1 == o || 1 == o || "true" == o || "TRUE" == o),
                      (obj.options.data[t][e] =
                        obj.records[t][e].children[0].checked);
                  } else if (
                    "dropdown" == obj.options.columns[e].type ||
                    "autocomplete" == obj.options.columns[e].type
                  )
                    (obj.options.data[t][e] = o),
                      (obj.records[t][e].textContent = obj.getDropDownValue(
                        e,
                        o
                      ));
                  else if ("calendar" == obj.options.columns[e].type) {
                    var s = null;
                    if (!validDate(o)) {
                      var a = jSuites.calendar.extractDateFromString(
                        o,
                        obj.options.columns[e].options.format
                      );
                      a && (s = a);
                    }
                    (obj.options.data[t][e] = o),
                      (obj.records[t][e].textContent =
                        jSuites.calendar.getDateString(
                          s || o,
                          obj.options.columns[e].options.format
                        ));
                  } else if ("color" == obj.options.columns[e].type)
                    if (
                      ((obj.options.data[t][e] = o),
                      "square" == obj.options.columns[e].render)
                    ) {
                      var u = document.createElement("div");
                      (u.className = "color"),
                        (u.style.backgroundColor = o),
                        (obj.records[t][e].textContent = ""),
                        obj.records[t][e].appendChild(u);
                    } else
                      (obj.records[t][e].style.color = o),
                        (obj.records[t][e].textContent = o);
                  else if ("image" == obj.options.columns[e].type) {
                    if (
                      ((o = "" + o),
                      (obj.options.data[t][e] = o),
                      (obj.records[t][e].innerHTML = ""),
                      o && "data:image" == o.substr(0, 10))
                    ) {
                      var c = document.createElement("img");
                      (c.src = o), obj.records[t][e].appendChild(c);
                    }
                  } else
                    (obj.options.data[t][e] = o),
                      "html" == obj.options.columns[e].type
                        ? (obj.records[t][e].innerHTML = stripScript(
                            obj.parseValue(e, t, o)
                          ))
                        : !1 === obj.options.stripHTML ||
                          !1 === obj.options.columns[e].stripHTML
                        ? (obj.records[t][e].innerHTML = stripScript(
                            obj.parseValue(e, t, o, obj.records[t][e])
                          ))
                        : (obj.records[t][e].textContent = obj.parseValue(
                            e,
                            t,
                            o,
                            obj.records[t][e]
                          )),
                      0 != obj.options.columns[e].wordWrap &&
                      (1 == obj.options.wordWrap ||
                        1 == obj.options.columns[e].wordWrap ||
                        obj.records[t][e].innerHTML.length > 200)
                        ? (obj.records[t][e].style.whiteSpace = "pre-wrap")
                        : (obj.records[t][e].style.whiteSpace = "");
                  e > 0 &&
                    (obj.records[t][e - 1].style.overflow = o ? "hidden" : ""),
                    obj.dispatch(
                      "onchange",
                      el,
                      obj.records[t] && obj.records[t][e]
                        ? obj.records[t][e]
                        : null,
                      e,
                      t,
                      o,
                      f.oldValue
                    );
                } else var f = { x: e, y: t, col: e, row: t };
                return f;
              }),
                (obj.copyData = function (e, t) {
                  var o = obj.getData(!0, !0),
                    n = obj.selectedContainer,
                    r = parseInt(e.getAttribute("data-x")),
                    l = parseInt(e.getAttribute("data-y")),
                    i = parseInt(t.getAttribute("data-x")),
                    s = parseInt(t.getAttribute("data-y")),
                    a = [],
                    u = !1;
                  if (n[0] == r) {
                    if (l < n[1]) var c = l - n[1];
                    else c = 1;
                    var f = 0;
                  } else {
                    if (r < n[0]) f = r - n[0];
                    else f = 1;
                    c = 0;
                  }
                  for (var d = 0, p = 0, b = l; b <= s; b++)
                    if (!obj.rows[b] || "none" != obj.rows[b].style.display) {
                      if ((null == o[p] && (p = 0), (d = 0), n[0] != r))
                        if (r < n[0]) f = r - n[0];
                        else f = 1;
                      for (var j = r; j <= i; j++) {
                        if (
                          obj.records[b][j] &&
                          !obj.records[b][j].classList.contains("readonly") &&
                          "none" != obj.records[b][j].style.display &&
                          0 == u
                        ) {
                          if (
                            !obj.selection.length &&
                            "" != obj.options.data[b][j]
                          ) {
                            u = !0;
                            continue;
                          }
                          (null == o[p] || null == o[p][d]) && (d = 0);
                          var h = o[p][d];
                          if (h && !o[1] && 1 == obj.options.autoIncrement)
                            if (
                              "text" == obj.options.columns[j].type ||
                              "number" == obj.options.columns[j].type
                            )
                              if ("=" == ("" + h).substr(0, 1)) {
                                var g = h.match(/([A-Z]+[0-9]+)/g);
                                if (g) {
                                  for (var m = [], v = 0; v < g.length; v++) {
                                    var y = _jexcel.getIdFromColumnName(
                                      g[v],
                                      1
                                    );
                                    (y[0] += f),
                                      (y[1] += c),
                                      y[1] < 0 && (y[1] = 0);
                                    var C = _jexcel.getColumnNameFromId([
                                      y[0],
                                      y[1],
                                    ]);
                                    C != g[v] && (m[g[v]] = C);
                                  }
                                  m && (h = obj.updateFormula(h, m));
                                }
                              } else h == Number(h) && (h = Number(h) + c);
                            else if (
                              "calendar" == obj.options.columns[j].type
                            ) {
                              var x = new Date(h);
                              x.setDate(x.getDate() + c),
                                (h =
                                  x.getFullYear() +
                                  "-" +
                                  _jexcel.doubleDigitFormat(
                                    parseInt(x.getMonth() + 1)
                                  ) +
                                  "-" +
                                  _jexcel.doubleDigitFormat(x.getDate()) +
                                  " 00:00:00");
                            }
                          a.push(obj.updateCell(j, b, h)),
                            obj.updateFormulaChain(j, b, a);
                        }
                        d++, n[0] != r && f++;
                      }
                      p++, c++;
                    }
                  obj.setHistory({
                    action: "setValue",
                    records: a,
                    selection: obj.selectedCell,
                  }),
                    obj.updateTable(),
                    obj.onafterchanges(el, a);
                }),
                (obj.refreshSelection = function () {
                  obj.selectedCell &&
                    obj.updateSelectionFromCoords(
                      obj.selectedCell[0],
                      obj.selectedCell[1],
                      obj.selectedCell[2],
                      obj.selectedCell[3]
                    );
                }),
                (obj.conditionalSelectionUpdate = function (e, t, o) {
                  if (1 == e) {
                    if (
                      obj.selectedCell &&
                      ((t >= obj.selectedCell[1] && t <= obj.selectedCell[3]) ||
                        (o >= obj.selectedCell[1] && o <= obj.selectedCell[3]))
                    )
                      return void obj.resetSelection();
                  } else if (
                    obj.selectedCell &&
                    ((t >= obj.selectedCell[0] && t <= obj.selectedCell[2]) ||
                      (o >= obj.selectedCell[0] && o <= obj.selectedCell[2]))
                  )
                    return void obj.resetSelection();
                }),
                (obj.resetSelection = function (e) {
                  if (obj.highlighted.length) {
                    u = 1;
                    for (var t = 0; t < obj.highlighted.length; t++) {
                      obj.highlighted[t].classList.remove("highlight"),
                        obj.highlighted[t].classList.remove("highlight-left"),
                        obj.highlighted[t].classList.remove("highlight-right"),
                        obj.highlighted[t].classList.remove("highlight-top"),
                        obj.highlighted[t].classList.remove("highlight-bottom"),
                        obj.highlighted[t].classList.remove(
                          "highlight-selected"
                        );
                      var o = parseInt(
                          obj.highlighted[t].getAttribute("data-x")
                        ),
                        n = parseInt(obj.highlighted[t].getAttribute("data-y"));
                      if (obj.highlighted[t].getAttribute("data-merged"))
                        var r = parseInt(
                            obj.highlighted[t].getAttribute("colspan")
                          ),
                          l = parseInt(
                            obj.highlighted[t].getAttribute("rowspan")
                          ),
                          i = r > 0 ? o + (r - 1) : o,
                          s = l > 0 ? n + (l - 1) : n;
                      else (i = o), (s = n);
                      for (var a = o; a <= i; a++)
                        obj.headers[a] &&
                          obj.headers[a].classList.remove("selected");
                      for (a = n; a <= s; a++)
                        obj.rows[a] && obj.rows[a].classList.remove("selected");
                    }
                  } else var u = 0;
                  return (
                    (obj.highlighted = []),
                    (obj.selectedCell = null),
                    (obj.corner.style.top = "-2000px"),
                    (obj.corner.style.left = "-2000px"),
                    1 == e && 1 == u && obj.dispatch("onblur", el),
                    u
                  );
                }),
                (obj.updateSelection = function (e, t, o) {
                  var n = e.getAttribute("data-x"),
                    r = e.getAttribute("data-y");
                  if (t)
                    var l = t.getAttribute("data-x"),
                      i = t.getAttribute("data-y");
                  else (l = n), (i = r);
                  obj.updateSelectionFromCoords(n, r, l, i, o);
                }),
                (obj.updateSelectionFromCoords = function (e, t, o, n, r) {
                  var l = obj.resetSelection();
                  if (
                    (null == t && ((t = 0), (n = obj.rows.length - 1)),
                    null == o && (o = e),
                    null == n && (n = t),
                    e >= obj.headers.length && (e = obj.headers.length - 1),
                    t >= obj.rows.length && (t = obj.rows.length - 1),
                    o >= obj.headers.length && (o = obj.headers.length - 1),
                    n >= obj.rows.length && (n = obj.rows.length - 1),
                    (obj.selectedCell = [e, t, o, n]),
                    null != e)
                  ) {
                    if (
                      (obj.records[t][e] &&
                        obj.records[t][e].classList.add("highlight-selected"),
                      parseInt(e) < parseInt(o))
                    )
                      var i = parseInt(e),
                        s = parseInt(o);
                    else (i = parseInt(o)), (s = parseInt(e));
                    if (parseInt(t) < parseInt(n))
                      var a = parseInt(t),
                        u = parseInt(n);
                    else (a = parseInt(n)), (u = parseInt(t));
                    for (var c = i; c <= s; c++)
                      for (var f = a; f <= u; f++)
                        if (
                          obj.records[f][c] &&
                          obj.records[f][c].getAttribute("data-merged")
                        ) {
                          var d = parseInt(
                              obj.records[f][c].getAttribute("data-x")
                            ),
                            p = parseInt(
                              obj.records[f][c].getAttribute("data-y")
                            ),
                            b = parseInt(
                              obj.records[f][c].getAttribute("colspan")
                            ),
                            j = parseInt(
                              obj.records[f][c].getAttribute("rowspan")
                            );
                          b > 1 &&
                            (d < i && (i = d), d + b > s && (s = d + b - 1)),
                            j &&
                              (p < a && (a = p), p + j > u && (u = p + j - 1));
                        }
                    var h = null,
                      g = null,
                      m = null,
                      v = null;
                    for (f = a; f <= u; f++)
                      "none" != obj.rows[f].style.display &&
                        (null == m && (m = f), (v = f));
                    for (c = i; c <= s; c++) {
                      for (f = a; f <= u; f++)
                        "none" != obj.rows[f].style.display &&
                          "none" != obj.records[f][c].style.display &&
                          (obj.records[f][c].classList.add("highlight"),
                          obj.highlighted.push(obj.records[f][c]));
                      "hidden" != obj.options.columns[c].type &&
                        (null == h && (h = c), (g = c));
                    }
                    h || (h = 0), g || (g = 0);
                    for (c = h; c <= g; c++)
                      "hidden" != obj.options.columns[c].type &&
                        obj.colgroup[c].style &&
                        "none" != obj.colgroup[c].style.display &&
                        (obj.records[m] &&
                          obj.records[m][c] &&
                          obj.records[m][c].classList.add("highlight-top"),
                        obj.records[v] &&
                          obj.records[v][c] &&
                          obj.records[v][c].classList.add("highlight-bottom"),
                        obj.headers[c].classList.add("selected"));
                    for (f = m; f <= v; f++)
                      obj.rows[f] &&
                        "none" != obj.rows[f].style.display &&
                        (obj.records[f][h].classList.add("highlight-left"),
                        obj.records[f][g].classList.add("highlight-right"),
                        obj.rows[f].classList.add("selected"));
                    obj.selectedContainer = [h, m, g, v];
                  }
                  0 == l &&
                    (obj.dispatch("onfocus", el), obj.removeCopyingSelection()),
                    obj.dispatch("onselection", el, h, m, g, v, r),
                    obj.updateCornerPosition();
                }),
                (obj.removeCopySelection = function () {
                  for (var e = 0; e < obj.selection.length; e++)
                    obj.selection[e].classList.remove("selection"),
                      obj.selection[e].classList.remove("selection-left"),
                      obj.selection[e].classList.remove("selection-right"),
                      obj.selection[e].classList.remove("selection-top"),
                      obj.selection[e].classList.remove("selection-bottom");
                  obj.selection = [];
                }),
                (obj.updateCopySelection = function (e, t) {
                  obj.removeCopySelection();
                  var o = obj.selectedContainer[0],
                    n = obj.selectedContainer[1],
                    r = obj.selectedContainer[2],
                    l = obj.selectedContainer[3];
                  if (null != e && null != t) {
                    if (e - r > 0)
                      var i = parseInt(r) + 1,
                        s = parseInt(e);
                    else (i = parseInt(e)), (s = parseInt(o) - 1);
                    if (t - l > 0)
                      var a = parseInt(l) + 1,
                        u = parseInt(t);
                    else (a = parseInt(t)), (u = parseInt(n) - 1);
                    if (s - i <= u - a) (i = parseInt(o)), (s = parseInt(r));
                    else (a = parseInt(n)), (u = parseInt(l));
                    for (var c = a; c <= u; c++)
                      for (var f = i; f <= s; f++)
                        obj.records[c][f] &&
                          "none" != obj.rows[c].style.display &&
                          "none" != obj.records[c][f].style.display &&
                          (obj.records[c][f].classList.add("selection"),
                          obj.records[a][f].classList.add("selection-top"),
                          obj.records[u][f].classList.add("selection-bottom"),
                          obj.records[c][i].classList.add("selection-left"),
                          obj.records[c][s].classList.add("selection-right"),
                          obj.selection.push(obj.records[c][f]));
                  }
                }),
                (obj.updateCornerPosition = function () {
                  if (obj.highlighted.length) {
                    var e = obj.highlighted[obj.highlighted.length - 1],
                      t = e.getAttribute("data-x"),
                      o = obj.content.getBoundingClientRect(),
                      n = o.left,
                      r = o.top,
                      l = e.getBoundingClientRect(),
                      i = l.left,
                      s = l.top,
                      a = l.width,
                      u = l.height,
                      c = i - n + obj.content.scrollLeft + a - 4,
                      f = s - r + obj.content.scrollTop + u - 4;
                    if (
                      ((obj.corner.style.top = f + "px"),
                      (obj.corner.style.left = c + "px"),
                      obj.options.freezeColumns)
                    ) {
                      var d = obj.getFreezeWidth();
                      t > obj.options.freezeColumns - 1 && i - n + a < d
                        ? (obj.corner.style.display = "none")
                        : 1 == obj.options.selectionCopy &&
                          (obj.corner.style.display = "");
                    } else
                      1 == obj.options.selectionCopy &&
                        (obj.corner.style.display = "");
                  } else
                    (obj.corner.style.top = "-2000px"),
                      (obj.corner.style.left = "-2000px");
                }),
                (obj.updateScroll = function (e) {
                  var t = obj.content.getBoundingClientRect(),
                    o = t.left,
                    n = t.top,
                    r = t.width,
                    l = t.height,
                    i =
                      obj.records[obj.selectedCell[3]][
                        obj.selectedCell[2]
                      ].getBoundingClientRect(),
                    s = i.left,
                    a = i.top,
                    u = i.width,
                    c = i.height;
                  if (0 == e || 1 == e)
                    var f = s - o + obj.content.scrollLeft,
                      d = a - n + obj.content.scrollTop - 2;
                  else
                    (f = s - o + obj.content.scrollLeft + u),
                      (d = a - n + obj.content.scrollTop + c);
                  (d > obj.content.scrollTop + 30 &&
                    d < obj.content.scrollTop + l) ||
                    (d < obj.content.scrollTop + 30
                      ? (obj.content.scrollTop = d - c)
                      : (obj.content.scrollTop = d - (l - 2)));
                  var p = obj.getFreezeWidth();
                  (f > obj.content.scrollLeft + p &&
                    f < obj.content.scrollLeft + r) ||
                    (f < obj.content.scrollLeft + 30
                      ? ((obj.content.scrollLeft = f),
                        obj.content.scrollLeft < 50 &&
                          (obj.content.scrollLeft = 0))
                      : f < obj.content.scrollLeft + p
                      ? (obj.content.scrollLeft = f - p - 1)
                      : (obj.content.scrollLeft = f - (r - 20)));
                }),
                (obj.getWidth = function (e) {
                  if (void 0 === e)
                    for (var t = [], o = 0; o < obj.headers.length; o++)
                      t.push(obj.options.columns[o].width);
                  else
                    "object" == _typeof(e) && (e = e.getAttribute("data-x")),
                      (t = obj.colgroup[e].getAttribute("width"));
                  return t;
                }),
                (obj.setWidth = function (e, t, o) {
                  if (t) {
                    if (Array.isArray(e)) {
                      if (!o) o = [];
                      for (var n = 0; n < e.length; n++) {
                        o[n] ||
                          (o[n] = obj.colgroup[e[n]].getAttribute("width"));
                        var r = Array.isArray(t) && t[n] ? t[n] : t;
                        obj.colgroup[e[n]].setAttribute("width", r),
                          (obj.options.columns[e[n]].width = r);
                      }
                    } else
                      o || (o = obj.colgroup[e].getAttribute("width")),
                        obj.colgroup[e].setAttribute("width", t),
                        (obj.options.columns[e].width = t);
                    obj.setHistory({
                      action: "setWidth",
                      column: e,
                      oldValue: o,
                      newValue: t,
                    }),
                      obj.dispatch("onresizecolumn", el, e, t, o),
                      obj.updateCornerPosition();
                  }
                }),
                (obj.setHeight = function (e, t, o) {
                  if (t > 0) {
                    if (
                      ("object" == _typeof(e) && (e = e.getAttribute("data-y")),
                      !o)
                    )
                      if (!(o = obj.rows[e].getAttribute("height")))
                        o = obj.rows[e].getBoundingClientRect().height;
                    (t = parseInt(t)),
                      (obj.rows[e].style.height = t + "px"),
                      obj.options.rows[e] || (obj.options.rows[e] = {}),
                      (obj.options.rows[e].height = t),
                      obj.setHistory({
                        action: "setHeight",
                        row: e,
                        oldValue: o,
                        newValue: t,
                      }),
                      obj.dispatch("onresizerow", el, e, t, o),
                      obj.updateCornerPosition();
                  }
                }),
                (obj.getHeight = function (e) {
                  if (void 0 === e)
                    for (var t = [], o = 0; o < obj.rows.length; o++) {
                      var n = obj.rows[o].style.height;
                      n && (t[o] = n);
                    }
                  else {
                    "object" == _typeof(e) && (e = $(e).getAttribute("data-y"));
                    t = obj.rows[e].style.height;
                  }
                  return t;
                }),
                (obj.setFooter = function (e) {
                  if ((e && (obj.options.footers = e), obj.options.footers)) {
                    obj.tfoot ||
                      ((obj.tfoot = document.createElement("tfoot")),
                      obj.table.appendChild(obj.tfoot));
                    for (var t = 0; t < obj.options.footers.length; t++) {
                      if (obj.tfoot.children[t]) var o = obj.tfoot.children[t];
                      else {
                        o = document.createElement("tr");
                        var n = document.createElement("td");
                        o.appendChild(n), obj.tfoot.appendChild(o);
                      }
                      for (var r = 0; r < obj.headers.length; r++) {
                        if (
                          (obj.options.footers[t][r] ||
                            (obj.options.footers[t][r] = ""),
                          obj.tfoot.children[t].children[r + 1])
                        )
                          n = obj.tfoot.children[t].children[r + 1];
                        else {
                          n = document.createElement("td");
                          o.appendChild(n);
                          var l = obj.options.columns[r].align
                            ? obj.options.columns[r].align
                            : "center";
                          n.style.textAlign = l;
                        }
                        (n.textContent = obj.parseValue(
                          +obj.records.length + r,
                          t,
                          obj.options.footers[t][r]
                        )),
                          (n.style.display = obj.colgroup[r].style.display);
                      }
                    }
                  }
                }),
                (obj.getHeader = function (e) {
                  return obj.headers[e].textContent;
                }),
                (obj.setHeader = function (e, t) {
                  if (obj.headers[e]) {
                    var o = obj.headers[e].textContent;
                    t || (t = prompt(obj.options.text.columnName, o)),
                      t &&
                        ((obj.headers[e].textContent = t),
                        obj.headers[e].setAttribute("title", t),
                        (obj.options.columns[e].title = t)),
                      obj.setHistory({
                        action: "setHeader",
                        column: e,
                        oldValue: o,
                        newValue: t,
                      }),
                      obj.dispatch("onchangeheader", el, e, o, t);
                  }
                }),
                (obj.getHeaders = function (e) {
                  for (var t = [], o = 0; o < obj.headers.length; o++)
                    t.push(obj.getHeader(o));
                  return e ? t : t.join(obj.options.csvDelimiter);
                }),
                (obj.getMeta = function (e, t) {
                  return e
                    ? t
                      ? obj.options.meta[e] && obj.options.meta[e][t]
                        ? obj.options.meta[e][t]
                        : null
                      : obj.options.meta[e]
                      ? obj.options.meta[e]
                      : null
                    : obj.options.meta;
                }),
                (obj.setMeta = function (e, t, o) {
                  if ((obj.options.meta || (obj.options.meta = {}), t && o))
                    obj.options.meta[e] || (obj.options.meta[e] = {}),
                      (obj.options.meta[e][t] = o);
                  else
                    for (var n = Object.keys(e), r = 0; r < n.length; r++) {
                      obj.options.meta[n[r]] || (obj.options.meta[n[r]] = {});
                      for (
                        var l = Object.keys(e[n[r]]), i = 0;
                        i < l.length;
                        i++
                      )
                        obj.options.meta[n[r]][l[i]] = e[n[r]][l[i]];
                    }
                  obj.dispatch("onchangemeta", el, e, t, o);
                }),
                (obj.updateMeta = function (e) {
                  if (obj.options.meta) {
                    for (
                      var t = {}, o = Object.keys(obj.options.meta), n = 0;
                      n < o.length;
                      n++
                    )
                      e[o[n]]
                        ? (t[e[o[n]]] = obj.options.meta[o[n]])
                        : (t[o[n]] = obj.options.meta[o[n]]);
                    obj.options.meta = t;
                  }
                }),
                (obj.getStyle = function (e, t) {
                  if (e)
                    return (
                      (e = _jexcel.getIdFromColumnName(e, !0)),
                      t
                        ? obj.records[e[1]][e[0]].style[t]
                        : obj.records[e[1]][e[0]].getAttribute("style")
                    );
                  for (
                    var o = {},
                      n = obj.options.data[0].length,
                      r = obj.options.data.length,
                      l = 0;
                    l < r;
                    l++
                  )
                    for (var i = 0; i < n; i++) {
                      var s = t
                        ? obj.records[l][i].style[t]
                        : obj.records[l][i].getAttribute("style");
                      if (s) o[_jexcel.getColumnNameFromId([i, l])] = s;
                    }
                  return o;
                }),
                (obj.resetStyle = function (e, t) {
                  for (var o = Object.keys(e), n = 0; n < o.length; n++) {
                    var r = _jexcel.getIdFromColumnName(o[n], !0);
                    obj.records[r[1]] &&
                      obj.records[r[1]][r[0]] &&
                      obj.records[r[1]][r[0]].setAttribute("style", "");
                  }
                  obj.setStyle(e, null, null, null, t);
                }),
                (obj.setStyle = function (e, t, o, n, r) {
                  var l = {},
                    i = {},
                    s = function (e, t, o) {
                      var r = _jexcel.getIdFromColumnName(e, !0);
                      if (
                        obj.records[r[1]] &&
                        obj.records[r[1]][r[0]] &&
                        (0 ==
                          obj.records[r[1]][r[0]].classList.contains(
                            "readonly"
                          ) ||
                          n)
                      ) {
                        var s = obj.records[r[1]][r[0]].style[t];
                        s != o || n
                          ? (obj.records[r[1]][r[0]].style[t] = o)
                          : ((o = ""), (obj.records[r[1]][r[0]].style[t] = "")),
                          i[e] || (i[e] = []),
                          l[e] || (l[e] = []),
                          i[e].push([t + ":" + s]),
                          l[e].push([t + ":" + o]);
                      }
                    };
                  if (t && o)
                    if ("string" == typeof e) s(e, t, o);
                    else
                      for (var a = [], u = 0; u < e.length; u++) {
                        var c = e[u].getAttribute("data-x"),
                          f = e[u].getAttribute("data-y"),
                          d = _jexcel.getColumnNameFromId([c, f]);
                        a[d] || (s(d, t, o), (a[d] = !0));
                      }
                  else {
                    var p = Object.keys(e);
                    for (u = 0; u < p.length; u++) {
                      var b = e[p[u]];
                      "string" == typeof b && (b = b.split(";"));
                      for (var j = 0; j < b.length; j++)
                        "string" == typeof b[j] && (b[j] = b[j].split(":")),
                          b[j][0].trim() && s(p[u], b[j][0].trim(), b[j][1]);
                    }
                  }
                  for (p = Object.keys(i), u = 0; u < p.length; u++)
                    i[p[u]] = i[p[u]].join(";");
                  for (p = Object.keys(l), u = 0; u < p.length; u++)
                    l[p[u]] = l[p[u]].join(";");
                  r ||
                    obj.setHistory({
                      action: "setStyle",
                      oldValue: i,
                      newValue: l,
                    }),
                    obj.dispatch("onchangestyle", el, e, t, o);
                }),
                (obj.getComments = function (e, t) {
                  if (e) {
                    if ("string" == typeof e)
                      e = _jexcel.getIdFromColumnName(e, !0);
                    return t
                      ? [
                          obj.records[e[1]][e[0]].getAttribute("title"),
                          obj.records[e[1]][e[0]].getAttribute("author"),
                        ]
                      : obj.records[e[1]][e[0]].getAttribute("title") || "";
                  }
                  for (var o = {}, n = 0; n < obj.options.data.length; n++)
                    for (var r = 0; r < obj.options.columns.length; r++) {
                      var l = obj.records[n][r].getAttribute("title");
                      if (l) o[(e = _jexcel.getColumnNameFromId([r, n]))] = l;
                    }
                  return o;
                }),
                (obj.setComments = function (e, t, o) {
                  if ("string" == typeof e)
                    var n = _jexcel.getIdFromColumnName(e, !0);
                  else n = e;
                  var r = obj.records[n[1]][n[0]].getAttribute("title"),
                    l = [
                      r,
                      (o = obj.records[n[1]][n[0]].getAttribute("data-author")),
                    ];
                  obj.records[n[1]][n[0]].setAttribute("title", t || ""),
                    obj.records[n[1]][n[0]].setAttribute(
                      "data-author",
                      o || ""
                    ),
                    t
                      ? obj.records[n[1]][n[0]].classList.add("jexcel_comments")
                      : obj.records[n[1]][n[0]].classList.remove(
                          "jexcel_comments"
                        ),
                    obj.setHistory({
                      action: "setComments",
                      column: e,
                      newValue: [t, o],
                      oldValue: l,
                    }),
                    obj.dispatch("oncomments", el, t, r, n, n[0], n[1]);
                }),
                (obj.getConfig = function () {
                  var e = obj.options;
                  return (
                    (e.style = obj.getStyle()),
                    (e.mergeCells = obj.getMerge()),
                    (e.comments = obj.getComments()),
                    e
                  );
                }),
                (obj.orderBy = function (e, t) {
                  if (e >= 0) {
                    if (Object.keys(obj.options.mergeCells).length > 0) {
                      if (
                        !confirm(
                          obj.options.text
                            .thisActionWillDestroyAnyExistingMergedCellsAreYouSure
                        )
                      )
                        return !1;
                      obj.destroyMerged();
                    }
                    t =
                      null == t
                        ? obj.headers[e].classList.contains("arrow-down")
                          ? 1
                          : 0
                        : t
                        ? 1
                        : 0;
                    var o = [];
                    if (
                      "number" == obj.options.columns[e].type ||
                      "numeric" == obj.options.columns[e].type ||
                      "percentage" == obj.options.columns[e].type ||
                      "autonumber" == obj.options.columns[e].type ||
                      "color" == obj.options.columns[e].type
                    )
                      for (var n = 0; n < obj.options.data.length; n++)
                        o[n] = [n, Number(obj.options.data[n][e])];
                    else if (
                      "calendar" == obj.options.columns[e].type ||
                      "checkbox" == obj.options.columns[e].type ||
                      "radio" == obj.options.columns[e].type
                    )
                      for (n = 0; n < obj.options.data.length; n++)
                        o[n] = [n, obj.options.data[n][e]];
                    else
                      for (n = 0; n < obj.options.data.length; n++)
                        o[n] = [n, obj.records[n][e].textContent.toLowerCase()];
                    "function" != typeof obj.options.sorting &&
                      (obj.options.sorting = function (e) {
                        return function (t, o) {
                          var n = t[1],
                            r = o[1];
                          return e
                            ? "" === n && "" !== r
                              ? 1
                              : ("" !== n && "" === r) || n > r
                              ? -1
                              : n < r
                              ? 1
                              : 0
                            : "" === n && "" !== r
                            ? 1
                            : "" !== n && "" === r
                            ? -1
                            : n > r
                            ? 1
                            : n < r
                            ? -1
                            : 0;
                        };
                      }),
                      (o = o.sort(obj.options.sorting(t)));
                    var r = [];
                    for (n = 0; n < o.length; n++) r[n] = o[n][0];
                    return (
                      obj.setHistory({
                        action: "orderBy",
                        rows: r,
                        column: e,
                        order: t,
                      }),
                      obj.updateOrderArrow(e, t),
                      obj.updateOrder(r),
                      obj.dispatch("onsort", el, e, t),
                      !0
                    );
                  }
                }),
                (obj.updateOrderArrow = function (e, t) {
                  for (var o = 0; o < obj.headers.length; o++)
                    obj.headers[o].classList.remove("arrow-up"),
                      obj.headers[o].classList.remove("arrow-down");
                  t
                    ? obj.headers[e].classList.add("arrow-up")
                    : obj.headers[e].classList.add("arrow-down");
                }),
                (obj.updateOrder = function (e) {
                  for (var t = [], o = 0; o < e.length; o++)
                    t[o] = obj.options.data[e[o]];
                  obj.options.data = t;
                  for (t = [], o = 0; o < e.length; o++)
                    t[o] = obj.records[e[o]];
                  obj.records = t;
                  for (t = [], o = 0; o < e.length; o++) t[o] = obj.rows[e[o]];
                  if (
                    ((obj.rows = t),
                    obj.updateTableReferences(),
                    obj.results && obj.results.length)
                  )
                    obj.searchInput.value
                      ? obj.search(obj.searchInput.value)
                      : obj.closeFilter();
                  else if (
                    ((obj.results = null),
                    (obj.pageNumber = 0),
                    obj.options.pagination > 0)
                  )
                    obj.page(0);
                  else if (1 == obj.options.lazyLoading) obj.loadPage(0);
                  else
                    for (o = 0; o < obj.rows.length; o++)
                      obj.tbody.appendChild(obj.rows[o]);
                }),
                (obj.moveRow = function (e, t, o) {
                  if (Object.keys(obj.options.mergeCells).length > 0) {
                    if (e > t) var n = 1;
                    else n = 0;
                    if (
                      obj.isRowMerged(e).length ||
                      obj.isRowMerged(t, n).length
                    ) {
                      if (
                        !confirm(
                          obj.options.text
                            .thisActionWillDestroyAnyExistingMergedCellsAreYouSure
                        )
                      )
                        return !1;
                      obj.destroyMerged();
                    }
                  }
                  if (1 == obj.options.search) {
                    if (obj.results && obj.results.length != obj.rows.length) {
                      if (
                        !confirm(
                          obj.options.text
                            .thisActionWillClearYourSearchResultsAreYouSure
                        )
                      )
                        return !1;
                      obj.resetSearch();
                    }
                    obj.results = null;
                  }
                  o ||
                    (Array.prototype.indexOf.call(
                      obj.tbody.children,
                      obj.rows[t]
                    ) >= 0
                      ? e > t
                        ? obj.tbody.insertBefore(obj.rows[e], obj.rows[t])
                        : obj.tbody.insertBefore(
                            obj.rows[e],
                            obj.rows[t].nextSibling
                          )
                      : obj.tbody.removeChild(obj.rows[e])),
                    obj.rows.splice(t, 0, obj.rows.splice(e, 1)[0]),
                    obj.records.splice(t, 0, obj.records.splice(e, 1)[0]),
                    obj.options.data.splice(
                      t,
                      0,
                      obj.options.data.splice(e, 1)[0]
                    ),
                    obj.options.pagination > 0 &&
                      obj.tbody.children.length != obj.options.pagination &&
                      obj.page(obj.pageNumber),
                    obj.setHistory({
                      action: "moveRow",
                      oldValue: e,
                      newValue: t,
                    }),
                    obj.updateTableReferences(),
                    obj.dispatch("onmoverow", el, e, t);
                }),
                (obj.insertRow = function (e, t, o) {
                  if (1 == obj.options.allowInsertRow) {
                    var n = [];
                    if (e > 0) var r = e;
                    else {
                      r = 1;
                      e && (n = e);
                    }
                    o = !!o;
                    var l = obj.options.data.length - 1;
                    if (
                      ((null == t || t >= parseInt(l) || t < 0) && (t = l),
                      !1 === obj.dispatch("onbeforeinsertrow", el, t, r, o))
                    )
                      return !1;
                    if (
                      Object.keys(obj.options.mergeCells).length > 0 &&
                      obj.isRowMerged(t, o).length
                    ) {
                      if (
                        !confirm(
                          obj.options.text
                            .thisActionWillDestroyAnyExistingMergedCellsAreYouSure
                        )
                      )
                        return !1;
                      obj.destroyMerged();
                    }
                    if (1 == obj.options.search) {
                      if (
                        obj.results &&
                        obj.results.length != obj.rows.length
                      ) {
                        if (
                          !confirm(
                            obj.options.text
                              .thisActionWillClearYourSearchResultsAreYouSure
                          )
                        )
                          return !1;
                        obj.resetSearch();
                      }
                      obj.results = null;
                    }
                    for (
                      var i = o ? t : t + 1,
                        s = obj.records.splice(i),
                        a = obj.options.data.splice(i),
                        u = obj.rows.splice(i),
                        c = [],
                        f = [],
                        d = [],
                        p = i;
                      p < r + i;
                      p++
                    ) {
                      obj.options.data[p] = [];
                      for (var b = 0; b < obj.options.columns.length; b++)
                        obj.options.data[p][b] = n[b] ? n[b] : "";
                      var j = obj.createRow(p, obj.options.data[p]);
                      u[0]
                        ? Array.prototype.indexOf.call(
                            obj.tbody.children,
                            u[0]
                          ) >= 0 && obj.tbody.insertBefore(j, u[0])
                        : Array.prototype.indexOf.call(
                            obj.tbody.children,
                            obj.rows[t]
                          ) >= 0 && obj.tbody.appendChild(j),
                        c.push(obj.records[p]),
                        f.push(obj.options.data[p]),
                        d.push(j);
                    }
                    Array.prototype.push.apply(obj.records, s),
                      Array.prototype.push.apply(obj.options.data, a),
                      Array.prototype.push.apply(obj.rows, u),
                      obj.options.pagination > 0 && obj.page(obj.pageNumber),
                      obj.setHistory({
                        action: "insertRow",
                        rowNumber: t,
                        numOfRows: r,
                        insertBefore: o,
                        rowRecords: c,
                        rowData: f,
                        rowNode: d,
                      }),
                      obj.updateTableReferences(),
                      obj.dispatch("oninsertrow", el, t, r, c, o);
                  }
                }),
                (obj.deleteRow = function (e, t) {
                  if (1 == obj.options.allowDeleteRow)
                    if (
                      1 == obj.options.allowDeletingAllRows ||
                      obj.options.data.length > 1
                    ) {
                      if (null == e) {
                        var o = obj.getSelectedRows();
                        o[0]
                          ? ((e = parseInt(o[0].getAttribute("data-y"))),
                            (t = o.length))
                          : ((e = obj.options.data.length - 1), (t = 1));
                      }
                      var n = obj.options.data.length - 1;
                      if (
                        ((null == e || e > n || e < 0) && (e = n),
                        t || (t = 1),
                        e + t >= obj.options.data.length &&
                          (t = obj.options.data.length - e),
                        !1 === obj.dispatch("onbeforedeleterow", el, e, t))
                      )
                        return !1;
                      if (parseInt(e) > -1) {
                        var r = !1;
                        if (Object.keys(obj.options.mergeCells).length > 0)
                          for (var l = e; l < e + t; l++)
                            obj.isRowMerged(l, !1).length && (r = !0);
                        if (r) {
                          if (
                            !confirm(
                              obj.options.text
                                .thisActionWillDestroyAnyExistingMergedCellsAreYouSure
                            )
                          )
                            return !1;
                          obj.destroyMerged();
                        }
                        if (1 == obj.options.search) {
                          if (
                            obj.results &&
                            obj.results.length != obj.rows.length
                          ) {
                            if (
                              !confirm(
                                obj.options.text
                                  .thisActionWillClearYourSearchResultsAreYouSure
                              )
                            )
                              return !1;
                            obj.resetSearch();
                          }
                          obj.results = null;
                        }
                        0 == obj.options.allowDeletingAllRows &&
                          n + 1 === t &&
                          (t--,
                          console.error(
                            "Zone_sheet: It is not possible to delete the last row"
                          ));
                        for (l = e; l < e + t; l++)
                          Array.prototype.indexOf.call(
                            obj.tbody.children,
                            obj.rows[l]
                          ) >= 0 &&
                            ((obj.rows[l].className = ""),
                            obj.rows[l].parentNode.removeChild(obj.rows[l]));
                        var i = obj.records.splice(e, t),
                          s = obj.options.data.splice(e, t),
                          a = obj.rows.splice(e, t);
                        obj.options.pagination > 0 &&
                          obj.tbody.children.length != obj.options.pagination &&
                          obj.page(obj.pageNumber),
                          obj.conditionalSelectionUpdate(1, e, e + t - 1),
                          obj.setHistory({
                            action: "deleteRow",
                            rowNumber: e,
                            numOfRows: t,
                            insertBefore: 1,
                            rowRecords: i,
                            rowData: s,
                            rowNode: a,
                          }),
                          obj.updateTableReferences(),
                          obj.dispatch("ondeleterow", el, e, t, i);
                      }
                    } else
                      console.error(
                        "Zone_sheet: It is not possible to delete the last row"
                      );
                }),
                (obj.moveColumn = function (e, t) {
                  if (Object.keys(obj.options.mergeCells).length > 0) {
                    if (e > t) var o = 1;
                    else o = 0;
                    if (
                      obj.isColMerged(e).length ||
                      obj.isColMerged(t, o).length
                    ) {
                      if (
                        !confirm(
                          obj.options.text
                            .thisActionWillDestroyAnyExistingMergedCellsAreYouSure
                        )
                      )
                        return !1;
                      obj.destroyMerged();
                    }
                  }
                  if ((e = parseInt(e)) > (t = parseInt(t))) {
                    obj.headerContainer.insertBefore(
                      obj.headers[e],
                      obj.headers[t]
                    ),
                      obj.colgroupContainer.insertBefore(
                        obj.colgroup[e],
                        obj.colgroup[t]
                      );
                    for (var n = 0; n < obj.rows.length; n++)
                      obj.rows[n].insertBefore(
                        obj.records[n][e],
                        obj.records[n][t]
                      );
                  } else {
                    obj.headerContainer.insertBefore(
                      obj.headers[e],
                      obj.headers[t].nextSibling
                    ),
                      obj.colgroupContainer.insertBefore(
                        obj.colgroup[e],
                        obj.colgroup[t].nextSibling
                      );
                    for (n = 0; n < obj.rows.length; n++)
                      obj.rows[n].insertBefore(
                        obj.records[n][e],
                        obj.records[n][t].nextSibling
                      );
                  }
                  obj.options.columns.splice(
                    t,
                    0,
                    obj.options.columns.splice(e, 1)[0]
                  ),
                    obj.headers.splice(t, 0, obj.headers.splice(e, 1)[0]),
                    obj.colgroup.splice(t, 0, obj.colgroup.splice(e, 1)[0]);
                  for (n = 0; n < obj.rows.length; n++)
                    obj.options.data[n].splice(
                      t,
                      0,
                      obj.options.data[n].splice(e, 1)[0]
                    ),
                      obj.records[n].splice(
                        t,
                        0,
                        obj.records[n].splice(e, 1)[0]
                      );
                  if (obj.options.footers)
                    for (n = 0; n < obj.options.footers.length; n++)
                      obj.options.footers[n].splice(
                        t,
                        0,
                        obj.options.footers[n].splice(e, 1)[0]
                      );
                  obj.setHistory({
                    action: "moveColumn",
                    oldValue: e,
                    newValue: t,
                  }),
                    obj.updateTableReferences(),
                    obj.dispatch("onmovecolumn", el, e, t);
                }),
                (obj.insertColumn = function (e, t, o, n) {
                  if (1 == obj.options.allowInsertColumn) {
                    var r = [];
                    if (e > 0) var l = e;
                    else {
                      l = 1;
                      e && (r = e);
                    }
                    o = !!o;
                    var i = obj.options.columns.length - 1;
                    if (
                      ((null == t || t >= parseInt(i) || t < 0) && (t = i),
                      !1 === obj.dispatch("onbeforeinsertcolumn", el, t, l, o))
                    )
                      return !1;
                    if (
                      Object.keys(obj.options.mergeCells).length > 0 &&
                      obj.isColMerged(t, o).length
                    ) {
                      if (
                        !confirm(
                          obj.options.text
                            .thisActionWillDestroyAnyExistingMergedCellsAreYouSure
                        )
                      )
                        return !1;
                      obj.destroyMerged();
                    }
                    n || (n = []);
                    for (var s = 0; s < l; s++)
                      n[s] ||
                        (n[s] = {
                          type: "text",
                          source: [],
                          options: [],
                          width: obj.options.defaultColWidth,
                          align: obj.options.defaultColAlign,
                        });
                    var a = o ? t : t + 1;
                    obj.options.columns = _jexcel.injectArray(
                      obj.options.columns,
                      a,
                      n
                    );
                    for (
                      var u = obj.headers.splice(a),
                        c = obj.colgroup.splice(a),
                        f = [],
                        d = [],
                        p = [],
                        b = [],
                        j = [],
                        h = a;
                      h < l + a;
                      h++
                    )
                      obj.createCellHeader(h),
                        obj.headerContainer.insertBefore(
                          obj.headers[h],
                          obj.headerContainer.children[h + 1]
                        ),
                        obj.colgroupContainer.insertBefore(
                          obj.colgroup[h],
                          obj.colgroupContainer.children[h + 1]
                        ),
                        f.push(obj.headers[h]),
                        d.push(obj.colgroup[h]);
                    if (obj.options.footers)
                      for (var g = 0; g < obj.options.footers.length; g++) {
                        j[g] = [];
                        for (s = 0; s < l; s++) j[g].push("");
                        obj.options.footers[g].splice(a, 0, j[g]);
                      }
                    for (var m = 0; m < obj.options.data.length; m++) {
                      var v = obj.options.data[m].splice(a),
                        y = obj.records[m].splice(a);
                      (b[m] = []), (p[m] = []);
                      for (h = a; h < l + a; h++) {
                        var C = r[m] ? r[m] : "";
                        obj.options.data[m][h] = C;
                        var x = obj.createCell(h, m, obj.options.data[m][h]);
                        (obj.records[m][h] = x),
                          obj.rows[m] &&
                            obj.rows[m].insertBefore(
                              x,
                              obj.rows[m].children[h + 1]
                            ),
                          b[m].push(C),
                          p[m].push(x);
                      }
                      Array.prototype.push.apply(obj.options.data[m], v),
                        Array.prototype.push.apply(obj.records[m], y);
                    }
                    if (
                      (Array.prototype.push.apply(obj.headers, u),
                      Array.prototype.push.apply(obj.colgroup, c),
                      obj.options.nestedHeaders &&
                        obj.options.nestedHeaders.length > 0)
                    )
                      if (
                        obj.options.nestedHeaders[0] &&
                        obj.options.nestedHeaders[0][0]
                      )
                        for (g = 0; g < obj.options.nestedHeaders.length; g++) {
                          var w =
                            parseInt(
                              obj.options.nestedHeaders[g][
                                obj.options.nestedHeaders[g].length - 1
                              ].colspan
                            ) + l;
                          (obj.options.nestedHeaders[g][
                            obj.options.nestedHeaders[g].length - 1
                          ].colspan = w),
                            obj.thead.children[g].children[
                              obj.thead.children[g].children.length - 1
                            ].setAttribute("colspan", w);
                          var A =
                            obj.thead.children[g].children[
                              obj.thead.children[g].children.length - 1
                            ].getAttribute("data-column");
                          A = A.split(",");
                          for (h = a; h < l + a; h++) A.push(h);
                          obj.thead.children[g].children[
                            obj.thead.children[g].children.length - 1
                          ].setAttribute("data-column", A);
                        }
                      else {
                        w = parseInt(obj.options.nestedHeaders[0].colspan) + l;
                        (obj.options.nestedHeaders[0].colspan = w),
                          obj.thead.children[0].children[
                            obj.thead.children[0].children.length - 1
                          ].setAttribute("colspan", w);
                      }
                    obj.setHistory({
                      action: "insertColumn",
                      columnNumber: t,
                      numOfColumns: l,
                      insertBefore: o,
                      columns: n,
                      headers: f,
                      colgroup: d,
                      records: p,
                      footers: j,
                      data: b,
                    }),
                      obj.updateTableReferences(),
                      obj.dispatch("oninsertcolumn", el, t, l, p, o);
                  }
                }),
                (obj.deleteColumn = function (e, t) {
                  if (1 == obj.options.allowDeleteColumn)
                    if (obj.headers.length > 1) {
                      if (null == e) {
                        var o = obj.getSelectedColumns(!0);
                        o.length
                          ? ((e = parseInt(o[0])), (t = parseInt(o.length)))
                          : ((e = obj.headers.length - 1), (t = 1));
                      }
                      var n = obj.options.data[0].length - 1;
                      if (
                        ((null == e || e > n || e < 0) && (e = n),
                        t || (t = 1),
                        t > obj.options.data[0].length - e &&
                          (t = obj.options.data[0].length - e),
                        !1 === obj.dispatch("onbeforedeletecolumn", el, e, t))
                      )
                        return !1;
                      if (parseInt(e) > -1) {
                        var r = !1;
                        if (Object.keys(obj.options.mergeCells).length > 0)
                          for (var l = e; l < e + t; l++)
                            obj.isColMerged(l, !1).length && (r = !0);
                        if (r) {
                          if (
                            !confirm(
                              obj.options.text
                                .thisActionWillDestroyAnyExistingMergedCellsAreYouSure
                            )
                          )
                            return !1;
                          obj.destroyMerged();
                        }
                        var i = obj.options.columns.splice(e, t);
                        for (l = e; l < e + t; l++)
                          (obj.colgroup[l].className = ""),
                            (obj.headers[l].className = ""),
                            obj.colgroup[l].parentNode.removeChild(
                              obj.colgroup[l]
                            ),
                            obj.headers[l].parentNode.removeChild(
                              obj.headers[l]
                            );
                        for (
                          var s = obj.headers.splice(e, t),
                            a = obj.colgroup.splice(e, t),
                            u = [],
                            c = [],
                            f = [],
                            d = 0;
                          d < obj.options.data.length;
                          d++
                        )
                          for (l = e; l < e + t; l++)
                            (obj.records[d][l].className = ""),
                              obj.records[d][l].parentNode.removeChild(
                                obj.records[d][l]
                              );
                        for (d = 0; d < obj.options.data.length; d++)
                          (c[d] = obj.options.data[d].splice(e, t)),
                            (u[d] = obj.records[d].splice(e, t));
                        if (obj.options.footers)
                          for (d = 0; d < obj.options.footers.length; d++)
                            f[d] = obj.options.footers[d].splice(e, t);
                        if (
                          (obj.conditionalSelectionUpdate(0, e, e + t - 1),
                          obj.options.nestedHeaders &&
                            obj.options.nestedHeaders.length > 0)
                        )
                          if (
                            obj.options.nestedHeaders[0] &&
                            obj.options.nestedHeaders[0][0]
                          )
                            for (
                              var p = 0;
                              p < obj.options.nestedHeaders.length;
                              p++
                            ) {
                              var b =
                                parseInt(
                                  obj.options.nestedHeaders[p][
                                    obj.options.nestedHeaders[p].length - 1
                                  ].colspan
                                ) - t;
                              (obj.options.nestedHeaders[p][
                                obj.options.nestedHeaders[p].length - 1
                              ].colspan = b),
                                obj.thead.children[p].children[
                                  obj.thead.children[p].children.length - 1
                                ].setAttribute("colspan", b);
                            }
                          else {
                            b =
                              parseInt(obj.options.nestedHeaders[0].colspan) -
                              t;
                            (obj.options.nestedHeaders[0].colspan = b),
                              obj.thead.children[0].children[
                                obj.thead.children[0].children.length - 1
                              ].setAttribute("colspan", b);
                          }
                        obj.setHistory({
                          action: "deleteColumn",
                          columnNumber: e,
                          numOfColumns: t,
                          insertBefore: 1,
                          columns: i,
                          headers: s,
                          colgroup: a,
                          records: u,
                          footers: f,
                          data: c,
                        }),
                          obj.updateTableReferences(),
                          obj.dispatch("ondeletecolumn", el, e, t, u);
                      }
                    } else
                      console.error(
                        "Zone_sheet: It is not possible to delete the last column"
                      );
                }),
                (obj.getSelectedRows = function (e) {
                  for (var t = [], o = 0; o < obj.rows.length; o++)
                    obj.rows[o].classList.contains("selected") &&
                      (e ? t.push(o) : t.push(obj.rows[o]));
                  return t;
                }),
                (obj.getSelectedColumns = function () {
                  for (var e = [], t = 0; t < obj.headers.length; t++)
                    obj.headers[t].classList.contains("selected") && e.push(t);
                  return e;
                }),
                (obj.getHighlighted = function () {
                  return obj.highlighted;
                }),
                (obj.updateTableReferences = function () {
                  for (var e = 0; e < obj.headers.length; e++) {
                    (l = obj.headers[e].getAttribute("data-x")) != e &&
                      (obj.headers[e].setAttribute("data-x", e),
                      obj.headers[e].getAttribute("title") ||
                        (obj.headers[e].innerHTML = _jexcel.getColumnName(e)));
                  }
                  for (var t = 0; t < obj.rows.length; t++) {
                    if (obj.rows[t])
                      (i = obj.rows[t].getAttribute("data-y")) != t &&
                        (obj.rows[t].setAttribute("data-y", t),
                        obj.rows[t].children[0].setAttribute("data-y", t),
                        (obj.rows[t].children[0].innerHTML = t + 1));
                  }
                  var o = [],
                    n = [],
                    r = function (e, t, n, r) {
                      if (
                        (e != n && obj.records[r][n].setAttribute("data-x", n),
                        t != r && obj.records[r][n].setAttribute("data-y", r),
                        e != n || t != r)
                      ) {
                        var l = _jexcel.getColumnNameFromId([e, t]),
                          i = _jexcel.getColumnNameFromId([n, r]);
                        o[l] = i;
                      }
                    };
                  for (t = 0; t < obj.records.length; t++)
                    for (e = 0; e < obj.records[0].length; e++)
                      if (obj.records[t][e]) {
                        var l = obj.records[t][e].getAttribute("data-x"),
                          i = obj.records[t][e].getAttribute("data-y");
                        if (obj.records[t][e].getAttribute("data-merged")) {
                          var s = _jexcel.getColumnNameFromId([l, i]),
                            a = _jexcel.getColumnNameFromId([e, t]);
                          if (null == n[s])
                            if (s == a) n[s] = !1;
                            else {
                              var u = parseInt(e - l),
                                c = parseInt(t - i);
                              n[s] = [a, u, c];
                            }
                        } else r(l, i, e, t);
                      }
                  var f = Object.keys(n);
                  if (f.length)
                    for (e = 0; e < f.length; e++)
                      if (n[f[e]]) {
                        var d = _jexcel.getIdFromColumnName(f[e], !0);
                        r(
                          (l = d[0]),
                          (i = d[1]),
                          l + n[f[e]][1],
                          i + n[f[e]][2]
                        );
                        for (
                          s = f[e], a = n[f[e]][0], t = 0;
                          t < obj.options.mergeCells[s][2].length;
                          t++
                        ) {
                          (l = parseInt(
                            obj.options.mergeCells[s][2][t].getAttribute(
                              "data-x"
                            )
                          )),
                            (i = parseInt(
                              obj.options.mergeCells[s][2][t].getAttribute(
                                "data-y"
                              )
                            ));
                          obj.options.mergeCells[s][2][t].setAttribute(
                            "data-x",
                            l + n[f[e]][1]
                          ),
                            obj.options.mergeCells[s][2][t].setAttribute(
                              "data-y",
                              i + n[f[e]][2]
                            );
                        }
                        (obj.options.mergeCells[a] = obj.options.mergeCells[s]),
                          delete obj.options.mergeCells[s];
                      }
                  obj.updateFormulas(o),
                    obj.updateMeta(o),
                    obj.refreshSelection(),
                    obj.updateTable();
                }),
                (obj.updateTable = function () {
                  if (obj.options.minSpareRows > 0) {
                    for (var e = 0, t = obj.rows.length - 1; t >= 0; t--) {
                      for (var o = !1, n = 0; n < obj.headers.length; n++)
                        obj.options.data[t][n] && (o = !0);
                      if (o) break;
                      e++;
                    }
                    obj.options.minSpareRows - e > 0 &&
                      obj.insertRow(obj.options.minSpareRows - e);
                  }
                  if (obj.options.minSpareCols > 0) {
                    var r = 0;
                    for (n = obj.headers.length - 1; n >= 0; n--) {
                      for (o = !1, t = 0; t < obj.rows.length; t++)
                        obj.options.data[t][n] && (o = !0);
                      if (o) break;
                      r++;
                    }
                    obj.options.minSpareCols - r > 0 &&
                      obj.insertColumn(obj.options.minSpareCols - r);
                  }
                  if ("function" == typeof obj.options.updateTable) {
                    obj.options.detachForUpdates && el.removeChild(obj.content);
                    for (t = 0; t < obj.rows.length; t++)
                      for (n = 0; n < obj.headers.length; n++)
                        obj.options.updateTable(
                          el,
                          obj.records[t][n],
                          n,
                          t,
                          obj.options.data[t][n],
                          obj.records[t][n].textContent,
                          _jexcel.getColumnNameFromId([n, t])
                        );
                    obj.options.detachForUpdates &&
                      el.insertBefore(obj.content, obj.pagination);
                  }
                  obj.options.footers && obj.setFooter(),
                    setTimeout(function () {
                      obj.updateCornerPosition();
                    }, 0);
                }),
                (obj.isReadOnly = function (e) {
                  if ((e = obj.getCell(e)))
                    return !!e.classList.contains("readonly");
                }),
                (obj.setReadOnly = function (e, t) {
                  (e = obj.getCell(e)) &&
                    (t
                      ? e.classList.add("readonly")
                      : e.classList.remove("readonly"));
                }),
                (obj.showRow = function (e) {
                  obj.rows[e].style.display = "";
                }),
                (obj.hideRow = function (e) {
                  obj.rows[e].style.display = "none";
                }),
                (obj.showColumn = function (e) {
                  (obj.headers[e].style.display = ""),
                    (obj.colgroup[e].style.display = ""),
                    obj.filter &&
                      obj.filter.children.length > e + 1 &&
                      (obj.filter.children[e + 1].style.display = "");
                  for (var t = 0; t < obj.options.data.length; t++)
                    obj.records[t][e].style.display = "";
                  obj.options.footers && obj.setFooter(), obj.resetSelection();
                }),
                (obj.hideColumn = function (e) {
                  (obj.headers[e].style.display = "none"),
                    (obj.colgroup[e].style.display = "none"),
                    obj.filter &&
                      obj.filter.children.length > e + 1 &&
                      (obj.filter.children[e + 1].style.display = "none");
                  for (var t = 0; t < obj.options.data.length; t++)
                    obj.records[t][e].style.display = "none";
                  obj.options.footers && obj.setFooter(), obj.resetSelection();
                }),
                (obj.showIndex = function () {
                  obj.table.classList.remove("jexcel_hidden_index");
                }),
                (obj.hideIndex = function () {
                  obj.table.classList.add("jexcel_hidden_index");
                });
              var chainLoopProtection = [];
              (obj.updateFormulaChain = function (e, t, o) {
                var n = _jexcel.getColumnNameFromId([e, t]);
                if (obj.formula[n] && obj.formula[n].length > 0)
                  if (chainLoopProtection[n])
                    (obj.records[t][e].innerHTML = "#ERROR"),
                      (obj.formula[n] = "");
                  else {
                    chainLoopProtection[n] = !0;
                    for (var r = 0; r < obj.formula[n].length; r++) {
                      var l = _jexcel.getIdFromColumnName(
                          obj.formula[n][r],
                          !0
                        ),
                        i = "" + obj.options.data[l[1]][l[0]];
                      "=" == i.substr(0, 1)
                        ? o.push(obj.updateCell(l[0], l[1], i, !0))
                        : (Object.keys(obj.formula)[r] = null),
                        obj.updateFormulaChain(l[0], l[1], o);
                    }
                  }
                chainLoopProtection = [];
              }),
                (obj.updateFormulas = function (e) {
                  for (var t = 0; t < obj.options.data.length; t++)
                    for (var o = 0; o < obj.options.data[0].length; o++) {
                      if (
                        "=" == (s = "" + obj.options.data[t][o]).substr(0, 1)
                      ) {
                        var n = obj.updateFormula(s, e);
                        n != s && (obj.options.data[t][o] = n);
                      }
                    }
                  var r = [],
                    l = Object.keys(obj.formula);
                  for (t = 0; t < l.length; t++) {
                    var i = l[t],
                      s = obj.formula[i];
                    e[i] && (i = e[i]), (r[i] = []);
                    for (o = 0; o < s.length; o++) {
                      var a = s[o];
                      e[a] && (a = e[a]), r[i].push(a);
                    }
                  }
                  obj.formula = r;
                }),
                (obj.updateFormula = function (e, t) {
                  for (
                    var o = /[A-Z]/,
                      n = /[0-9]/,
                      r = "",
                      l = null,
                      i = null,
                      s = "",
                      a = 0;
                    a < e.length;
                    a++
                  )
                    o.exec(e[a])
                      ? ((l = 1), (i = 0), (s += e[a]))
                      : n.exec(e[a])
                      ? ((i = l ? 1 : 0), (s += e[a]))
                      : (l && i && (s = t[s] ? t[s] : s),
                        (r += s),
                        (r += e[a]),
                        (l = 0),
                        (i = 0),
                        (s = ""));
                  return s && (l && i && (s = t[s] ? t[s] : s), (r += s)), r;
                });
              var secureFormula = function (e) {
                for (var t = "", o = 0, n = 0; n < e.length; n++)
                  '"' == e[n] && (o = 0 == o ? 1 : 0),
                    (t += 1 == o ? e[n] : e[n].toUpperCase());
                return t;
              };
              (obj.executeFormula = function (expression, x, y) {
                var formulaResults = [],
                  formulaLoopProtection = [],
                  _execute = function execute(expression, x, y) {
                    var parentId = _jexcel.getColumnNameFromId([x, y]);
                    if (formulaLoopProtection[parentId])
                      return console.error("Reference loop detected"), "#ERROR";
                    formulaLoopProtection[parentId] = !0;
                    var tokensUpdate = function (e) {
                      for (var t = 0; t < e.length; t++) {
                        var o = [],
                          n = e[t].split(":"),
                          r = _jexcel.getIdFromColumnName(n[0], !0),
                          l = _jexcel.getIdFromColumnName(n[1], !0);
                        if (r[0] <= l[0])
                          var i = r[0],
                            s = l[0];
                        else (i = l[0]), (s = r[0]);
                        if (r[1] <= l[1])
                          var a = r[1],
                            u = l[1];
                        else (a = l[1]), (u = r[1]);
                        for (var c = a; c <= u; c++)
                          for (var f = i; f <= s; f++)
                            o.push(_jexcel.getColumnNameFromId([f, c]));
                        expression = expression.replace(e[t], o.join(","));
                      }
                    };
                    expression = expression.replace(
                      /\$?([A-Z]+)\$?([0-9]+)/g,
                      "$1$2"
                    );
                    var tokens = expression.match(
                      /([A-Z]+[0-9]+)\:([A-Z]+[0-9]+)/g
                    );
                    tokens && tokens.length && tokensUpdate(tokens);
                    var tokens = expression.match(/([A-Z]+[0-9]+)/g);
                    if (tokens && tokens.indexOf(parentId) > -1)
                      return console.error("Self Reference detected"), "#ERROR";
                    var formulaExpressions = {};
                    if (tokens)
                      for (var i = 0; i < tokens.length; i++)
                        if (
                          (obj.formula[tokens[i]] ||
                            (obj.formula[tokens[i]] = []),
                          obj.formula[tokens[i]].indexOf(parentId) < 0 &&
                            obj.formula[tokens[i]].push(parentId),
                          eval("typeof(" + tokens[i] + ') == "undefined"'))
                        ) {
                          var position = _jexcel.getIdFromColumnName(
                            tokens[i],
                            1
                          );
                          if (
                            void 0 !== obj.options.data[position[1]] &&
                            void 0 !==
                              obj.options.data[position[1]][position[0]]
                          )
                            var value =
                              obj.options.data[position[1]][position[0]];
                          else var value = "";
                          if (
                            ("=" == ("" + value).substr(0, 1) &&
                              (void 0 !== formulaResults[tokens[i]]
                                ? (value = formulaResults[tokens[i]])
                                : ((value = _execute(
                                    value,
                                    position[0],
                                    position[1]
                                  )),
                                  (formulaResults[tokens[i]] = value))),
                            "" == ("" + value).trim())
                          )
                            formulaExpressions[tokens[i]] = null;
                          else if (
                            value == Number(value) &&
                            1 == obj.options.autoCasting
                          )
                            formulaExpressions[tokens[i]] = Number(value);
                          else {
                            var number = obj.parseNumber(value, position[0]);
                            1 == obj.options.autoCasting && number
                              ? (formulaExpressions[tokens[i]] = number)
                              : (formulaExpressions[tokens[i]] =
                                  '"' + value + '"');
                          }
                        }
                    try {
                      var res = _jexcel.formula(
                        expression.substr(1),
                        formulaExpressions,
                        x,
                        y,
                        obj
                      );
                    } catch (e) {
                      var res = "#ERROR";
                      console.log(e);
                    }
                    return res;
                  };
                return _execute(expression, x, y);
              }),
                (obj.parseNumber = function (e, t) {
                  var o =
                      t && obj.options.columns[t].decimal
                        ? obj.options.columns[t].decimal
                        : ".",
                    n = "" + e;
                  if (
                    (((n = n.split(o))[0] = n[0].match(/[+-]?[0-9]/g)),
                    n[0] && (n[0] = n[0].join("")),
                    n[1] && (n[1] = n[1].match(/[0-9]*/g).join("")),
                    n[0] && Number.isInteger(Number(n[0])))
                  )
                    if (n[1]) e = Number(n[0] + "." + n[1]);
                    else var e = Number(n[0] + ".00");
                  else e = null;
                  return e;
                }),
                (obj.row = function (e) {}),
                (obj.col = function (e) {}),
                (obj.up = function (e, t) {
                  if (
                    (e
                      ? obj.selectedCell[3] > 0 && obj.up.visible(1, t ? 0 : 1)
                      : (obj.selectedCell[1] > 0 &&
                          obj.up.visible(0, t ? 0 : 1),
                        (obj.selectedCell[2] = obj.selectedCell[0]),
                        (obj.selectedCell[3] = obj.selectedCell[1])),
                    obj.updateSelectionFromCoords(
                      obj.selectedCell[0],
                      obj.selectedCell[1],
                      obj.selectedCell[2],
                      obj.selectedCell[3]
                    ),
                    1 == obj.options.lazyLoading)
                  )
                    if (0 == obj.selectedCell[1] || 0 == obj.selectedCell[3])
                      obj.loadPage(0),
                        obj.updateSelectionFromCoords(
                          obj.selectedCell[0],
                          obj.selectedCell[1],
                          obj.selectedCell[2],
                          obj.selectedCell[3]
                        );
                    else if (obj.loadValidation())
                      obj.updateSelectionFromCoords(
                        obj.selectedCell[0],
                        obj.selectedCell[1],
                        obj.selectedCell[2],
                        obj.selectedCell[3]
                      );
                    else {
                      var o = parseInt(
                        obj.tbody.firstChild.getAttribute("data-y")
                      );
                      obj.selectedCell[1] - o < 30 &&
                        (obj.loadUp(),
                        obj.updateSelectionFromCoords(
                          obj.selectedCell[0],
                          obj.selectedCell[1],
                          obj.selectedCell[2],
                          obj.selectedCell[3]
                        ));
                    }
                  else if (obj.options.pagination > 0) {
                    var n = obj.whichPage(obj.selectedCell[3]);
                    n != obj.pageNumber && obj.page(n);
                  }
                  obj.updateScroll(1);
                }),
                (obj.up.visible = function (e, t) {
                  if (0 == e)
                    var o = parseInt(obj.selectedCell[0]),
                      n = parseInt(obj.selectedCell[1]);
                  else
                    (o = parseInt(obj.selectedCell[2])),
                      (n = parseInt(obj.selectedCell[3]));
                  if (0 == t) {
                    for (var r = 0; r < n; r++)
                      if (
                        "none" != obj.records[r][o].style.display &&
                        "none" != obj.rows[r].style.display
                      ) {
                        n = r;
                        break;
                      }
                  } else n = obj.up.get(o, n);
                  0 == e
                    ? ((obj.selectedCell[0] = o), (obj.selectedCell[1] = n))
                    : ((obj.selectedCell[2] = o), (obj.selectedCell[3] = n));
                }),
                (obj.up.get = function (e, t) {
                  e = parseInt(e);
                  for (var o = (t = parseInt(t)) - 1; o >= 0; o--)
                    if (
                      "none" != obj.records[o][e].style.display &&
                      "none" != obj.rows[o].style.display
                    ) {
                      if (
                        obj.records[o][e].getAttribute("data-merged") &&
                        obj.records[o][e] == obj.records[t][e]
                      )
                        continue;
                      t = o;
                      break;
                    }
                  return t;
                }),
                (obj.down = function (e, t) {
                  if (
                    (e
                      ? obj.selectedCell[3] < obj.records.length - 1 &&
                        obj.down.visible(1, t ? 0 : 1)
                      : (obj.selectedCell[1] < obj.records.length - 1 &&
                          obj.down.visible(0, t ? 0 : 1),
                        (obj.selectedCell[2] = obj.selectedCell[0]),
                        (obj.selectedCell[3] = obj.selectedCell[1])),
                    obj.updateSelectionFromCoords(
                      obj.selectedCell[0],
                      obj.selectedCell[1],
                      obj.selectedCell[2],
                      obj.selectedCell[3]
                    ),
                    1 == obj.options.lazyLoading)
                  )
                    obj.selectedCell[1] == obj.records.length - 1 ||
                    obj.selectedCell[3] == obj.records.length - 1
                      ? (obj.loadPage(-1),
                        obj.updateSelectionFromCoords(
                          obj.selectedCell[0],
                          obj.selectedCell[1],
                          obj.selectedCell[2],
                          obj.selectedCell[3]
                        ))
                      : obj.loadValidation()
                      ? obj.updateSelectionFromCoords(
                          obj.selectedCell[0],
                          obj.selectedCell[1],
                          obj.selectedCell[2],
                          obj.selectedCell[3]
                        )
                      : parseInt(obj.tbody.lastChild.getAttribute("data-y")) -
                          obj.selectedCell[3] <
                          30 &&
                        (obj.loadDown(),
                        obj.updateSelectionFromCoords(
                          obj.selectedCell[0],
                          obj.selectedCell[1],
                          obj.selectedCell[2],
                          obj.selectedCell[3]
                        ));
                  else if (obj.options.pagination > 0) {
                    var o = obj.whichPage(obj.selectedCell[3]);
                    o != obj.pageNumber && obj.page(o);
                  }
                  obj.updateScroll(3);
                }),
                (obj.down.visible = function (e, t) {
                  if (0 == e)
                    var o = parseInt(obj.selectedCell[0]),
                      n = parseInt(obj.selectedCell[1]);
                  else
                    (o = parseInt(obj.selectedCell[2])),
                      (n = parseInt(obj.selectedCell[3]));
                  if (0 == t) {
                    for (var r = obj.rows.length - 1; r > n; r--)
                      if (
                        "none" != obj.records[r][o].style.display &&
                        "none" != obj.rows[r].style.display
                      ) {
                        n = r;
                        break;
                      }
                  } else n = obj.down.get(o, n);
                  0 == e
                    ? ((obj.selectedCell[0] = o), (obj.selectedCell[1] = n))
                    : ((obj.selectedCell[2] = o), (obj.selectedCell[3] = n));
                }),
                (obj.down.get = function (e, t) {
                  e = parseInt(e);
                  for (var o = (t = parseInt(t)) + 1; o < obj.rows.length; o++)
                    if (
                      "none" != obj.records[o][e].style.display &&
                      "none" != obj.rows[o].style.display
                    ) {
                      if (
                        obj.records[o][e].getAttribute("data-merged") &&
                        obj.records[o][e] == obj.records[t][e]
                      )
                        continue;
                      t = o;
                      break;
                    }
                  return t;
                }),
                (obj.right = function (e, t) {
                  e
                    ? obj.selectedCell[2] < obj.headers.length - 1 &&
                      obj.right.visible(1, t ? 0 : 1)
                    : (obj.selectedCell[0] < obj.headers.length - 1 &&
                        obj.right.visible(0, t ? 0 : 1),
                      (obj.selectedCell[2] = obj.selectedCell[0]),
                      (obj.selectedCell[3] = obj.selectedCell[1])),
                    obj.updateSelectionFromCoords(
                      obj.selectedCell[0],
                      obj.selectedCell[1],
                      obj.selectedCell[2],
                      obj.selectedCell[3]
                    ),
                    obj.updateScroll(2);
                }),
                (obj.right.visible = function (e, t) {
                  if (0 == e)
                    var o = parseInt(obj.selectedCell[0]),
                      n = parseInt(obj.selectedCell[1]);
                  else
                    (o = parseInt(obj.selectedCell[2])),
                      (n = parseInt(obj.selectedCell[3]));
                  if (0 == t) {
                    for (var r = obj.headers.length - 1; r > o; r--)
                      if ("none" != obj.records[n][r].style.display) {
                        o = r;
                        break;
                      }
                  } else o = obj.right.get(o, n);
                  0 == e
                    ? ((obj.selectedCell[0] = o), (obj.selectedCell[1] = n))
                    : ((obj.selectedCell[2] = o), (obj.selectedCell[3] = n));
                }),
                (obj.right.get = function (e, t) {
                  (e = parseInt(e)), (t = parseInt(t));
                  for (var o = e + 1; o < obj.headers.length; o++)
                    if ("none" != obj.records[t][o].style.display) {
                      if (
                        obj.records[t][o].getAttribute("data-merged") &&
                        obj.records[t][o] == obj.records[t][e]
                      )
                        continue;
                      e = o;
                      break;
                    }
                  return e;
                }),
                (obj.left = function (e, t) {
                  e
                    ? obj.selectedCell[2] > 0 && obj.left.visible(1, t ? 0 : 1)
                    : (obj.selectedCell[0] > 0 &&
                        obj.left.visible(0, t ? 0 : 1),
                      (obj.selectedCell[2] = obj.selectedCell[0]),
                      (obj.selectedCell[3] = obj.selectedCell[1])),
                    obj.updateSelectionFromCoords(
                      obj.selectedCell[0],
                      obj.selectedCell[1],
                      obj.selectedCell[2],
                      obj.selectedCell[3]
                    ),
                    obj.updateScroll(0);
                }),
                (obj.left.visible = function (e, t) {
                  if (0 == e)
                    var o = parseInt(obj.selectedCell[0]),
                      n = parseInt(obj.selectedCell[1]);
                  else
                    (o = parseInt(obj.selectedCell[2])),
                      (n = parseInt(obj.selectedCell[3]));
                  if (0 == t) {
                    for (var r = 0; r < o; r++)
                      if ("none" != obj.records[n][r].style.display) {
                        o = r;
                        break;
                      }
                  } else o = obj.left.get(o, n);
                  0 == e
                    ? ((obj.selectedCell[0] = o), (obj.selectedCell[1] = n))
                    : ((obj.selectedCell[2] = o), (obj.selectedCell[3] = n));
                }),
                (obj.left.get = function (e, t) {
                  (e = parseInt(e)), (t = parseInt(t));
                  for (var o = e - 1; o >= 0; o--)
                    if ("none" != obj.records[t][o].style.display) {
                      if (
                        obj.records[t][o].getAttribute("data-merged") &&
                        obj.records[t][o] == obj.records[t][e]
                      )
                        continue;
                      e = o;
                      break;
                    }
                  return e;
                }),
                (obj.first = function (e, t) {
                  if (
                    (e
                      ? t
                        ? (obj.selectedCell[3] = 0)
                        : obj.left.visible(1, 0)
                      : (t ? (obj.selectedCell[1] = 0) : obj.left.visible(0, 0),
                        (obj.selectedCell[2] = obj.selectedCell[0]),
                        (obj.selectedCell[3] = obj.selectedCell[1])),
                    1 != obj.options.lazyLoading ||
                      (0 != obj.selectedCell[1] && 0 != obj.selectedCell[3]))
                  ) {
                    if (obj.options.pagination > 0) {
                      var o = obj.whichPage(obj.selectedCell[3]);
                      o != obj.pageNumber && obj.page(o);
                    }
                  } else obj.loadPage(0);
                  obj.updateSelectionFromCoords(
                    obj.selectedCell[0],
                    obj.selectedCell[1],
                    obj.selectedCell[2],
                    obj.selectedCell[3]
                  ),
                    obj.updateScroll(1);
                }),
                (obj.last = function (e, t) {
                  if (
                    (e
                      ? t
                        ? (obj.selectedCell[3] = obj.records.length - 1)
                        : obj.right.visible(1, 0)
                      : (t
                          ? (obj.selectedCell[1] = obj.records.length - 1)
                          : obj.right.visible(0, 0),
                        (obj.selectedCell[2] = obj.selectedCell[0]),
                        (obj.selectedCell[3] = obj.selectedCell[1])),
                    1 != obj.options.lazyLoading ||
                      (obj.selectedCell[1] != obj.records.length - 1 &&
                        obj.selectedCell[3] != obj.records.length - 1))
                  ) {
                    if (obj.options.pagination > 0) {
                      var o = obj.whichPage(obj.selectedCell[3]);
                      o != obj.pageNumber && obj.page(o);
                    }
                  } else obj.loadPage(-1);
                  obj.updateSelectionFromCoords(
                    obj.selectedCell[0],
                    obj.selectedCell[1],
                    obj.selectedCell[2],
                    obj.selectedCell[3]
                  ),
                    obj.updateScroll(3);
                }),
                (obj.selectAll = function () {
                  obj.selectedCell || (obj.selectedCell = []),
                    (obj.selectedCell[0] = 0),
                    (obj.selectedCell[1] = 0),
                    (obj.selectedCell[2] = obj.headers.length - 1),
                    (obj.selectedCell[3] = obj.records.length - 1),
                    obj.updateSelectionFromCoords(
                      obj.selectedCell[0],
                      obj.selectedCell[1],
                      obj.selectedCell[2],
                      obj.selectedCell[3]
                    );
                }),
                (obj.loadPage = function (e) {
                  if (
                    (1 != obj.options.search && 1 != obj.options.filters) ||
                    !obj.results
                  )
                    t = obj.rows;
                  else var t = obj.results;
                  var o = 100;
                  (null != e && -1 != e) || (e = Math.ceil(t.length / o) - 1);
                  var n = e * o,
                    r = e * o + o;
                  r > t.length && (r = t.length), (n = r - 100) < 0 && (n = 0);
                  for (var l = n; l < r; l++)
                    (1 != obj.options.search && 1 != obj.options.filters) ||
                    !obj.results
                      ? obj.tbody.appendChild(obj.rows[l])
                      : obj.tbody.appendChild(obj.rows[t[l]]),
                      obj.tbody.children.length > o &&
                        obj.tbody.removeChild(obj.tbody.firstChild);
                }),
                (obj.loadUp = function () {
                  if (
                    (1 != obj.options.search && 1 != obj.options.filters) ||
                    !obj.results
                  )
                    e = obj.rows;
                  else var e = obj.results;
                  var t = 0;
                  if (e.length > 100) {
                    var o = parseInt(
                      obj.tbody.firstChild.getAttribute("data-y")
                    );
                    if (
                      ((1 != obj.options.search && 1 != obj.options.filters) ||
                        !obj.results ||
                        (o = e.indexOf(o)),
                      o > 0)
                    )
                      for (var n = 0; n < 30; n++)
                        (o -= 1) > -1 &&
                          ((1 != obj.options.search &&
                            1 != obj.options.filters) ||
                          !obj.results
                            ? obj.tbody.insertBefore(
                                obj.rows[o],
                                obj.tbody.firstChild
                              )
                            : obj.tbody.insertBefore(
                                obj.rows[e[o]],
                                obj.tbody.firstChild
                              ),
                          obj.tbody.children.length > 100 &&
                            (obj.tbody.removeChild(obj.tbody.lastChild),
                            (t = 1)));
                  }
                  return t;
                }),
                (obj.loadDown = function () {
                  if (
                    (1 != obj.options.search && 1 != obj.options.filters) ||
                    !obj.results
                  )
                    e = obj.rows;
                  else var e = obj.results;
                  var t = 0;
                  if (e.length > 100) {
                    var o = parseInt(
                      obj.tbody.lastChild.getAttribute("data-y")
                    );
                    if (
                      ((1 != obj.options.search && 1 != obj.options.filters) ||
                        !obj.results ||
                        (o = e.indexOf(o)),
                      o < obj.rows.length - 1)
                    )
                      for (var n = 0; n <= 30; n++)
                        o < e.length &&
                          ((1 != obj.options.search &&
                            1 != obj.options.filters) ||
                          !obj.results
                            ? obj.tbody.appendChild(obj.rows[o])
                            : obj.tbody.appendChild(obj.rows[e[o]]),
                          obj.tbody.children.length > 100 &&
                            (obj.tbody.removeChild(obj.tbody.firstChild),
                            (t = 1))),
                          (o += 1);
                  }
                  return t;
                }),
                (obj.loadValidation = function () {
                  if (obj.selectedCell) {
                    var e =
                        parseInt(obj.tbody.firstChild.getAttribute("data-y")) /
                        100,
                      t = parseInt(obj.selectedCell[3] / 100),
                      o = parseInt(obj.rows.length / 100);
                    if (
                      e != t &&
                      t <= o &&
                      !Array.prototype.indexOf.call(
                        obj.tbody.children,
                        obj.rows[obj.selectedCell[3]]
                      )
                    )
                      return obj.loadPage(t), !0;
                  }
                  return !1;
                }),
                (obj.resetSearch = function () {
                  (obj.searchInput.value = ""),
                    obj.search(""),
                    (obj.results = null);
                }),
                (obj.search = function (e) {
                  if (
                    (obj.options.filters && obj.resetFilters(),
                    obj.resetSelection(),
                    (obj.pageNumber = 0),
                    (obj.results = []),
                    e)
                  ) {
                    var t = function (e) {
                        -1 == obj.results.indexOf(e) && obj.results.push(e);
                      },
                      o = e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
                    (o = new RegExp(o, "i")),
                      obj.options.data.forEach(function (e, n) {
                        if (
                          (function (e, t, o) {
                            for (var n = 0; n < e.length; n++)
                              if (
                                ("" + e[n]).toLowerCase().search(t) >= 0 ||
                                ("" + obj.records[o][n].innerHTML)
                                  .toLowerCase()
                                  .search(t) >= 0
                              )
                                return !0;
                            return !1;
                          })(e, o, n)
                        ) {
                          var r = obj.isRowMerged(n);
                          if (r.length)
                            for (var l = 0; l < r.length; l++)
                              for (
                                var i = _jexcel.getIdFromColumnName(r[l], !0),
                                  s = 0;
                                s < obj.options.mergeCells[r[l]][1];
                                s++
                              )
                                t(i[1] + s);
                          else t(n);
                        }
                      });
                  } else obj.results = null;
                  return obj.updateResult();
                }),
                (obj.updateResult = function () {
                  var e = 0,
                    t = 0;
                  for (
                    e =
                      1 == obj.options.lazyLoading
                        ? 100
                        : obj.options.pagination > 0
                        ? obj.options.pagination
                        : obj.results
                        ? obj.results.length
                        : obj.rows.length;
                    obj.tbody.firstChild;

                  )
                    obj.tbody.removeChild(obj.tbody.firstChild);
                  for (var o = 0; o < obj.rows.length; o++)
                    !obj.results || obj.results.indexOf(o) > -1
                      ? (t < e && (obj.tbody.appendChild(obj.rows[o]), t++),
                        (obj.rows[o].style.display = ""))
                      : (obj.rows[o].style.display = "none");
                  return (
                    obj.options.pagination > 0 && obj.updatePagination(),
                    obj.updateCornerPosition(),
                    e
                  );
                }),
                (obj.whichPage = function (e) {
                  return (
                    (1 != obj.options.search && 1 != obj.options.filters) ||
                      !obj.results ||
                      (e = obj.results.indexOf(e)),
                    Math.ceil(
                      (parseInt(e) + 1) / parseInt(obj.options.pagination)
                    ) - 1
                  );
                }),
                (obj.page = function (e) {
                  var t = obj.pageNumber;
                  if (
                    (1 != obj.options.search && 1 != obj.options.filters) ||
                    !obj.results
                  )
                    o = obj.rows;
                  else var o = obj.results;
                  var n = parseInt(obj.options.pagination);
                  (null != e && -1 != e) || (e = Math.ceil(o.length / n) - 1),
                    (obj.pageNumber = e);
                  var r = e * n,
                    l = e * n + n;
                  for (
                    l > o.length && (l = o.length), r < 0 && (r = 0);
                    obj.tbody.firstChild;

                  )
                    obj.tbody.removeChild(obj.tbody.firstChild);
                  for (var i = r; i < l; i++)
                    (1 != obj.options.search && 1 != obj.options.filters) ||
                    !obj.results
                      ? obj.tbody.appendChild(obj.rows[i])
                      : obj.tbody.appendChild(obj.rows[o[i]]);
                  obj.options.pagination > 0 && obj.updatePagination(),
                    obj.updateCornerPosition(),
                    obj.dispatch("onchangepage", el, e, t);
                }),
                (obj.updatePagination = function () {
                  if (
                    ((obj.pagination.children[0].innerHTML = ""),
                    (obj.pagination.children[1].innerHTML = ""),
                    obj.options.pagination)
                  ) {
                    if (
                      (1 != obj.options.search && 1 != obj.options.filters) ||
                      !obj.results
                    )
                      e = obj.rows.length;
                    else var e = obj.results.length;
                    if (e) {
                      var t = Math.ceil(e / obj.options.pagination);
                      if (obj.pageNumber < 6)
                        var o = 1,
                          n = t < 10 ? t : 10;
                      else if (t - obj.pageNumber < 5) {
                        n = t;
                        (o = t - 9) < 1 && (o = 1);
                      } else (o = obj.pageNumber - 4), (n = obj.pageNumber + 5);
                      if (o > 1)
                        ((l = document.createElement("div")).className =
                          "jexcel_page"),
                          (l.innerHTML = "<"),
                          (l.title = 1),
                          obj.pagination.children[1].appendChild(l);
                      for (var r = o; r <= n; r++) {
                        var l;
                        ((l = document.createElement("div")).className =
                          "jexcel_page"),
                          (l.innerHTML = r),
                          obj.pagination.children[1].appendChild(l),
                          obj.pageNumber == r - 1 &&
                            l.classList.add("jexcel_page_selected");
                      }
                      if (n < t)
                        ((l = document.createElement("div")).className =
                          "jexcel_page"),
                          (l.innerHTML = ">"),
                          (l.title = t),
                          obj.pagination.children[1].appendChild(l);
                      obj.pagination.children[0].innerHTML = (function (e) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        return e.replace(/{(\d+)}/g, function (e, o) {
                          return void 0 !== t[o] ? t[o] : e;
                        });
                      })(obj.options.text.showingPage, obj.pageNumber + 1, t);
                    } else
                      obj.pagination.children[0].innerHTML =
                        obj.options.text.noRecordsFound;
                  }
                }),
                (obj.download = function (e) {
                  if (0 == obj.options.allowExport)
                    console.error("Export not allowed");
                  else {
                    var t = "";
                    t += obj.copy(!1, obj.options.csvDelimiter, !0, e, !0);
                    var o = new Blob(["\ufeff" + t], {
                      type: "text/csv;charset=utf-8;",
                    });
                    if (window.navigator && window.navigator.msSaveOrOpenBlob)
                      window.navigator.msSaveOrOpenBlob(
                        o,
                        obj.options.csvFileName + ".csv"
                      );
                    else {
                      var n = document.createElement("a"),
                        r = URL.createObjectURL(o);
                      (n.href = r),
                        n.setAttribute(
                          "download",
                          obj.options.csvFileName + ".csv"
                        ),
                        document.body.appendChild(n),
                        n.click(),
                        n.parentNode.removeChild(n);
                    }
                  }
                }),
                (obj.setHistory = function (e) {
                  if (1 != obj.ignoreHistory) {
                    var t = ++obj.historyIndex;
                    (obj.history = obj.history = obj.history.slice(0, t + 1)),
                      (obj.history[t] = e);
                  }
                }),
                (obj.copy = function (e, t, o, n, r) {
                  t || (t = "\t");
                  for (
                    var l = new RegExp(t, "ig"),
                      i = [],
                      s = [],
                      a = [],
                      u = [],
                      c = [],
                      f = obj.options.data[0].length,
                      d = obj.options.data.length,
                      p = "",
                      b = !1,
                      j = "",
                      h = "",
                      g = 0,
                      m = 0,
                      v = 0,
                      y = 0,
                      C = !0,
                      x = 0;
                    x < d;
                    x++
                  )
                    for (var w = 0; w < f; w++)
                      (e &&
                        !obj.records[x][w].classList.contains("highlight")) ||
                        (v <= w && (v = w), y <= x && (y = x));
                  if (
                    (f === v + 1 && d === y + 1 && (C = !1),
                    (r && 1 == obj.options.includeHeadersOnDownload) ||
                      (!r && 1 == obj.options.includeHeadersOnCopy && !C) ||
                      n)
                  ) {
                    if (
                      obj.options.nestedHeaders &&
                      obj.options.nestedHeaders.length > 0
                    ) {
                      p =
                        obj.options.nestedHeaders[0] &&
                        obj.options.nestedHeaders[0][0]
                          ? obj.options.nestedHeaders
                          : [obj.options.nestedHeaders];
                      for (x = 0; x < p.length; x++) {
                        var A = [];
                        for (w = 0; w < p[x].length; w++) {
                          var E = parseInt(p[x][w].colspan);
                          A.push(p[x][w].title);
                          for (var _ = 0; _ < E - 1; _++) A.push("");
                        }
                        h += A.join(t) + "\r\n";
                      }
                    }
                    b = !0;
                  }
                  obj.style = [];
                  for (x = 0; x < d; x++) {
                    (s = []), (a = []);
                    for (w = 0; w < f; w++)
                      if (
                        !e ||
                        obj.records[x][w].classList.contains("highlight")
                      ) {
                        1 == b && i.push(obj.headers[w].textContent);
                        var M = obj.options.data[x][w];
                        if (
                          (M.match &&
                            (M.match(l) ||
                              M.match(/,/g) ||
                              M.match(/\n/) ||
                              M.match(/\"/)) &&
                            (M =
                              '"' +
                              (M = M.replace(new RegExp('"', "g"), '""')) +
                              '"'),
                          s.push(M),
                          "checkbox" == obj.options.columns[w].type ||
                            "radio" == obj.options.columns[w].type)
                        )
                          var I = M;
                        else {
                          if (1 == obj.options.stripHTMLOnCopy)
                            I = obj.records[x][w].textContent;
                          else I = obj.records[x][w].innerHTML;
                          I.match &&
                            (I.match(l) ||
                              I.match(/,/g) ||
                              I.match(/\n/) ||
                              I.match(/\"/)) &&
                            (I =
                              '"' +
                              (I = I.replace(new RegExp('"', "g"), '""')) +
                              '"');
                        }
                        a.push(I),
                          (p = (p =
                            obj.records[x][w].getAttribute("style")).replace(
                            "display: none;",
                            ""
                          )),
                          obj.style.push(p || "");
                      }
                    s.length &&
                      (b && ((g = s.length), u.push(i.join(t))),
                      u.push(s.join(t))),
                      a.length &&
                        (m++,
                        b && (c.push(i.join(t)), (b = !1)),
                        c.push(a.join(t)));
                  }
                  f == g && d == m && (j = h);
                  var N = j + u.join("\r\n"),
                    S = j + c.join("\r\n");
                  if (
                    (o ||
                      (1 == obj.options.copyCompatibility
                        ? (obj.textarea.value = S)
                        : (obj.textarea.value = N),
                      obj.textarea.select(),
                      document.execCommand("copy")),
                    1 == obj.options.copyCompatibility
                      ? (obj.data = S)
                      : (obj.data = N),
                    (obj.hashString = obj.hash(obj.data)),
                    !o)
                  ) {
                    if ((obj.removeCopyingSelection(), obj.highlighted))
                      for (w = 0; w < obj.highlighted.length; w++)
                        obj.highlighted[w].classList.add("copying"),
                          obj.highlighted[w].classList.contains(
                            "highlight-left"
                          ) && obj.highlighted[w].classList.add("copying-left"),
                          obj.highlighted[w].classList.contains(
                            "highlight-right"
                          ) &&
                            obj.highlighted[w].classList.add("copying-right"),
                          obj.highlighted[w].classList.contains(
                            "highlight-top"
                          ) && obj.highlighted[w].classList.add("copying-top"),
                          obj.highlighted[w].classList.contains(
                            "highlight-bottom"
                          ) &&
                            obj.highlighted[w].classList.add("copying-bottom");
                    obj.dispatch(
                      "oncopy",
                      el,
                      1 == obj.options.copyCompatibility ? c : u,
                      obj.hashString
                    );
                  }
                  return obj.data;
                }),
                (obj.paste = function (e, t, o) {
                  var n = parseInt(e),
                    r = parseInt(t),
                    l = parseInt(obj.selectedCell[2]),
                    i = parseInt(obj.selectedCell[3]),
                    s = l - n + 1,
                    a = i - r + 1;
                  l < n && ((e = l.toString()), (s = n - l + 1)),
                    i < r && ((t = i.toString()), (a = r - i + 1));
                  var u = obj.dispatch("onbeforepaste", el, o, e, t);
                  if (!1 === u) return !1;
                  if (u) o = u;
                  var c = obj.hash(o),
                    f = c == obj.hashString ? obj.style : null;
                  if (1 == obj.options.copyCompatibility && c == obj.hashString)
                    o = obj.data;
                  o = obj.parseCSV(o, "\t");
                  if ((s > 1) & Number.isInteger(s / o[0].length)) {
                    (f = null), (p = s / o[0].length);
                    var d = o.map(function (e, t) {
                      var o = Array.apply(null, { length: p * e.length }).map(
                        function (t, o) {
                          return e[o % e.length];
                        }
                      );
                      return o;
                    });
                    o = d;
                  }
                  if ((a > 1) & Number.isInteger(a / o.length)) {
                    f = null;
                    var p = a / o.length;
                    d = Array.apply(null, { length: p * o.length }).map(
                      function (e, t) {
                        return o[t % o.length];
                      }
                    );
                    o = d;
                  }
                  if (null != e && null != t && o) {
                    for (
                      var b = 0,
                        j = 0,
                        h = [],
                        g = {},
                        m = {},
                        v = 0,
                        y = parseInt(e),
                        C = parseInt(t),
                        x = null;
                      (x = o[j]);

                    ) {
                      for (b = 0, y = parseInt(e); null != x[b]; ) {
                        var w = obj.updateCell(y, C, x[b]);
                        if (
                          (h.push(w),
                          obj.updateFormulaChain(y, C, h),
                          f && f[v])
                        ) {
                          var A = _jexcel.getColumnNameFromId([y, C]);
                          (g[A] = f[v]),
                            (m[A] = obj.getStyle(A)),
                            obj.records[C][y].setAttribute("style", f[v]),
                            v++;
                        }
                        if (null != x[++b]) {
                          if (y >= obj.headers.length - 1) {
                            if (1 != obj.options.allowInsertColumn) break;
                            obj.insertColumn();
                          }
                          y = obj.right.get(y, C);
                        }
                      }
                      if ((j++, o[j])) {
                        if (C >= obj.rows.length - 1) {
                          if (1 != obj.options.allowInsertRow) break;
                          obj.insertRow();
                        }
                        C = obj.down.get(e, C);
                      }
                    }
                    obj.updateSelectionFromCoords(e, t, y, C),
                      obj.setHistory({
                        action: "setValue",
                        records: h,
                        selection: obj.selectedCell,
                        newStyle: g,
                        oldStyle: m,
                      }),
                      obj.updateTable(),
                      obj.dispatch("onpaste", el, o),
                      obj.onafterchanges(el, h);
                  }
                  obj.removeCopyingSelection();
                }),
                (obj.removeCopyingSelection = function () {
                  for (
                    var e = document.querySelectorAll(".jexcel .copying"),
                      t = 0;
                    t < e.length;
                    t++
                  )
                    e[t].classList.remove("copying"),
                      e[t].classList.remove("copying-left"),
                      e[t].classList.remove("copying-right"),
                      e[t].classList.remove("copying-top"),
                      e[t].classList.remove("copying-bottom");
                }),
                (obj.historyProcessRow = function (e, t) {
                  var o = t.insertBefore ? +t.rowNumber : t.rowNumber + 1;
                  if (
                    (1 == obj.options.search &&
                      obj.results &&
                      obj.results.length != obj.rows.length &&
                      obj.resetSearch(),
                    1 == e)
                  ) {
                    for (var n = t.numOfRows, r = o; r < n + o; r++)
                      obj.rows[r].parentNode.removeChild(obj.rows[r]);
                    obj.records.splice(o, n),
                      obj.options.data.splice(o, n),
                      obj.rows.splice(o, n),
                      obj.conditionalSelectionUpdate(1, o, n + o - 1);
                  } else {
                    (obj.records = _jexcel.injectArray(
                      obj.records,
                      o,
                      t.rowRecords
                    )),
                      (obj.options.data = _jexcel.injectArray(
                        obj.options.data,
                        o,
                        t.rowData
                      )),
                      (obj.rows = _jexcel.injectArray(obj.rows, o, t.rowNode));
                    var l = 0;
                    for (r = o; r < t.numOfRows + o; r++)
                      obj.tbody.insertBefore(
                        t.rowNode[l],
                        obj.tbody.children[r]
                      ),
                        l++;
                  }
                  obj.options.pagination > 0 && obj.page(obj.pageNumber),
                    obj.updateTableReferences();
                }),
                (obj.historyProcessColumn = function (e, t) {
                  var o = t.insertBefore ? t.columnNumber : t.columnNumber + 1;
                  if (1 == e) {
                    var n = t.numOfColumns;
                    obj.options.columns.splice(o, n);
                    for (var r = o; r < n + o; r++)
                      obj.headers[r].parentNode.removeChild(obj.headers[r]),
                        obj.colgroup[r].parentNode.removeChild(obj.colgroup[r]);
                    obj.headers.splice(o, n), obj.colgroup.splice(o, n);
                    for (var l = 0; l < t.data.length; l++) {
                      for (r = o; r < n + o; r++)
                        obj.records[l][r].parentNode.removeChild(
                          obj.records[l][r]
                        );
                      obj.records[l].splice(o, n),
                        obj.options.data[l].splice(o, n);
                    }
                    if (obj.options.footers)
                      for (l = 0; l < obj.options.footers.length; l++)
                        obj.options.footers[l].splice(o, n);
                  } else {
                    (obj.options.columns = _jexcel.injectArray(
                      obj.options.columns,
                      o,
                      t.columns
                    )),
                      (obj.headers = _jexcel.injectArray(
                        obj.headers,
                        o,
                        t.headers
                      )),
                      (obj.colgroup = _jexcel.injectArray(
                        obj.colgroup,
                        o,
                        t.colgroup
                      ));
                    var i = 0;
                    for (r = o; r < t.numOfColumns + o; r++)
                      obj.headerContainer.insertBefore(
                        t.headers[i],
                        obj.headerContainer.children[r + 1]
                      ),
                        obj.colgroupContainer.insertBefore(
                          t.colgroup[i],
                          obj.colgroupContainer.children[r + 1]
                        ),
                        i++;
                    for (l = 0; l < t.data.length; l++) {
                      (obj.options.data[l] = _jexcel.injectArray(
                        obj.options.data[l],
                        o,
                        t.data[l]
                      )),
                        (obj.records[l] = _jexcel.injectArray(
                          obj.records[l],
                          o,
                          t.records[l]
                        ));
                      for (i = 0, r = o; r < t.numOfColumns + o; r++)
                        obj.rows[l].insertBefore(
                          t.records[l][i],
                          obj.rows[l].children[r + 1]
                        ),
                          i++;
                    }
                    if (obj.options.footers)
                      for (l = 0; l < obj.options.footers.length; l++)
                        obj.options.footers[l] = _jexcel.injectArray(
                          obj.options.footers[l],
                          o,
                          t.footers[l]
                        );
                  }
                  if (
                    obj.options.nestedHeaders &&
                    obj.options.nestedHeaders.length > 0
                  )
                    if (
                      obj.options.nestedHeaders[0] &&
                      obj.options.nestedHeaders[0][0]
                    )
                      for (l = 0; l < obj.options.nestedHeaders.length; l++) {
                        if (1 == e)
                          var s =
                            parseInt(
                              obj.options.nestedHeaders[l][
                                obj.options.nestedHeaders[l].length - 1
                              ].colspan
                            ) - t.numOfColumns;
                        else
                          s =
                            parseInt(
                              obj.options.nestedHeaders[l][
                                obj.options.nestedHeaders[l].length - 1
                              ].colspan
                            ) + t.numOfColumns;
                        (obj.options.nestedHeaders[l][
                          obj.options.nestedHeaders[l].length - 1
                        ].colspan = s),
                          obj.thead.children[l].children[
                            obj.thead.children[l].children.length - 1
                          ].setAttribute("colspan", s);
                      }
                    else {
                      if (1 == e)
                        s =
                          parseInt(obj.options.nestedHeaders[0].colspan) -
                          t.numOfColumns;
                      else
                        s =
                          parseInt(obj.options.nestedHeaders[0].colspan) +
                          t.numOfColumns;
                      (obj.options.nestedHeaders[0].colspan = s),
                        obj.thead.children[0].children[
                          obj.thead.children[0].children.length - 1
                        ].setAttribute("colspan", s);
                    }
                  obj.updateTableReferences();
                }),
                (obj.undo = function () {
                  var e = !!obj.ignoreEvents,
                    t = !!obj.ignoreHistory;
                  (obj.ignoreEvents = !0), (obj.ignoreHistory = !0);
                  var o = [];
                  if (obj.historyIndex >= 0) {
                    var n = obj.history[obj.historyIndex--];
                    if ("insertRow" == n.action) obj.historyProcessRow(1, n);
                    else if ("deleteRow" == n.action)
                      obj.historyProcessRow(0, n);
                    else if ("insertColumn" == n.action)
                      obj.historyProcessColumn(1, n);
                    else if ("deleteColumn" == n.action)
                      obj.historyProcessColumn(0, n);
                    else if ("moveRow" == n.action)
                      obj.moveRow(n.newValue, n.oldValue);
                    else if ("moveColumn" == n.action)
                      obj.moveColumn(n.newValue, n.oldValue);
                    else if ("setMerge" == n.action)
                      obj.removeMerge(n.column, n.data);
                    else if ("setStyle" == n.action)
                      obj.setStyle(n.oldValue, null, null, 1);
                    else if ("setWidth" == n.action)
                      obj.setWidth(n.column, n.oldValue);
                    else if ("setHeight" == n.action)
                      obj.setHeight(n.row, n.oldValue);
                    else if ("setHeader" == n.action)
                      obj.setHeader(n.column, n.oldValue);
                    else if ("setComments" == n.action)
                      obj.setComments(n.column, n.oldValue[0], n.oldValue[1]);
                    else if ("orderBy" == n.action) {
                      for (var r = [], l = 0; l < n.rows.length; l++)
                        r[n.rows[l]] = l;
                      obj.updateOrderArrow(n.column, n.order ? 0 : 1),
                        obj.updateOrder(r);
                    } else if ("setValue" == n.action) {
                      for (var i = 0; i < n.records.length; i++)
                        o.push({
                          x: n.records[i].x,
                          y: n.records[i].y,
                          newValue: n.records[i].oldValue,
                        }),
                          n.oldStyle && obj.resetStyle(n.oldStyle);
                      obj.setValue(o),
                        n.selection &&
                          obj.updateSelectionFromCoords(
                            n.selection[0],
                            n.selection[1],
                            n.selection[2],
                            n.selection[3]
                          );
                    }
                  }
                  (obj.ignoreEvents = e),
                    (obj.ignoreHistory = t),
                    obj.dispatch("onundo", el, n);
                }),
                (obj.redo = function () {
                  var e = !!obj.ignoreEvents,
                    t = !!obj.ignoreHistory;
                  (obj.ignoreEvents = !0), (obj.ignoreHistory = !0);
                  if (obj.historyIndex < obj.history.length - 1) {
                    var o = obj.history[++obj.historyIndex];
                    if ("insertRow" == o.action) obj.historyProcessRow(0, o);
                    else if ("deleteRow" == o.action)
                      obj.historyProcessRow(1, o);
                    else if ("insertColumn" == o.action)
                      obj.historyProcessColumn(0, o);
                    else if ("deleteColumn" == o.action)
                      obj.historyProcessColumn(1, o);
                    else if ("moveRow" == o.action)
                      obj.moveRow(o.oldValue, o.newValue);
                    else if ("moveColumn" == o.action)
                      obj.moveColumn(o.oldValue, o.newValue);
                    else if ("setMerge" == o.action)
                      obj.setMerge(o.column, o.colspan, o.rowspan, 1);
                    else if ("setStyle" == o.action)
                      obj.setStyle(o.newValue, null, null, 1);
                    else if ("setWidth" == o.action)
                      obj.setWidth(o.column, o.newValue);
                    else if ("setHeight" == o.action)
                      obj.setHeight(o.row, o.newValue);
                    else if ("setHeader" == o.action)
                      obj.setHeader(o.column, o.newValue);
                    else if ("setComments" == o.action)
                      obj.setComments(o.column, o.newValue[0], o.newValue[1]);
                    else if ("orderBy" == o.action)
                      obj.updateOrderArrow(o.column, o.order),
                        obj.updateOrder(o.rows);
                    else if ("setValue" == o.action) {
                      obj.setValue(o.records);
                      for (var n = 0; n < o.records.length; n++)
                        o.oldStyle && obj.resetStyle(o.newStyle);
                      o.selection &&
                        obj.updateSelectionFromCoords(
                          o.selection[0],
                          o.selection[1],
                          o.selection[2],
                          o.selection[3]
                        );
                    }
                  }
                  (obj.ignoreEvents = e),
                    (obj.ignoreHistory = t),
                    obj.dispatch("onredo", el, o);
                }),
                (obj.getDropDownValue = function (e, t) {
                  var o = [];
                  if (obj.options.columns[e] && obj.options.columns[e].source) {
                    for (
                      var n = [], r = obj.options.columns[e].source, l = 0;
                      l < r.length;
                      l++
                    )
                      "object" == _typeof(r[l])
                        ? (n[r[l].id] = r[l].name)
                        : (n[r[l]] = r[l]);
                    var i = Array.isArray(t) ? t : ("" + t).split(";");
                    for (l = 0; l < i.length; l++)
                      "object" === _typeof(i[l])
                        ? o.push(n[i[l].id])
                        : n[i[l]] && o.push(n[i[l]]);
                  } else console.error("Invalid column");
                  return o.length > 0 ? o.join("; ") : "";
                }),
                (obj.parseCSV = function (e, t) {
                  9 ==
                    (e = e.replace(/\r?\n$|\r$|\n$/g, "")).charCodeAt(
                      e.length - 1
                    ) && (e += "\0"),
                    (t = t || ",");
                  for (
                    var o = [], n = !1, r = 0, l = 0, i = 0;
                    i < e.length;
                    i++
                  ) {
                    var s = e[i],
                      a = e[i + 1];
                    (o[r] = o[r] || []),
                      (o[r][l] = o[r][l] || ""),
                      '"' == s && n && '"' == a
                        ? ((o[r][l] += s), ++i)
                        : '"' != s
                        ? s != t || n
                          ? "\r" != s || "\n" != a || n
                            ? ("\n" != s || n) && ("\r" != s || n)
                              ? (o[r][l] += s)
                              : (++r, (l = 0))
                            : (++r, (l = 0), ++i)
                          : ++l
                        : (n = !n);
                  }
                  return o;
                }),
                (obj.hash = function (e) {
                  var t,
                    o = 0;
                  if (0 === e.length) return o;
                  for (t = 0; t < e.length; t++)
                    (o = (o << 5) - o + e.charCodeAt(t)), (o |= 0);
                  return o;
                }),
                (obj.onafterchanges = function (e, t) {
                  obj.dispatch("onafterchanges", e, t);
                }),
                (obj.destroy = function () {
                  _jexcel.destroy(el);
                }),
                (obj.init = function () {
                  (_jexcel.current = obj),
                    "function" == typeof _jexcel.build &&
                      (obj.options.root
                        ? _jexcel.build(obj.options.root)
                        : (_jexcel.build(document), (_jexcel.build = null))),
                    el.setAttribute("tabindex", 1),
                    el.addEventListener("focus", function (e) {
                      _jexcel.current &&
                        !obj.selectedCell &&
                        (obj.updateSelectionFromCoords(0, 0, 0, 0), obj.left());
                    }),
                    obj.options.csv
                      ? (1 == obj.options.loadingSpin && jSuites.loading.show(),
                        jSuites.ajax({
                          url: obj.options.csv,
                          method: obj.options.method,
                          data: obj.options.requestVariables,
                          dataType: "text",
                          success: function (e) {
                            var t = obj.parseCSV(e, obj.options.csvDelimiter);
                            if (1 == obj.options.csvHeaders && t.length > 0)
                              for (var o = t.shift(), n = 0; n < o.length; n++)
                                obj.options.columns[n] ||
                                  (obj.options.columns[n] = {
                                    type: "text",
                                    align: obj.options.defaultColAlign,
                                    width: obj.options.defaultColWidth,
                                  }),
                                  void 0 === obj.options.columns[n].title &&
                                    (obj.options.columns[n].title = o[n]);
                            (obj.options.data = t),
                              obj.prepareTable(),
                              1 == obj.options.loadingSpin &&
                                jSuites.loading.hide();
                          },
                        }))
                      : obj.options.url
                      ? (1 == obj.options.loadingSpin && jSuites.loading.show(),
                        jSuites.ajax({
                          url: obj.options.url,
                          method: obj.options.method,
                          data: obj.options.requestVariables,
                          dataType: "json",
                          success: function (e) {
                            (obj.options.data = e.data ? e.data : e),
                              obj.prepareTable(),
                              1 == obj.options.loadingSpin &&
                                jSuites.loading.hide();
                          },
                        }))
                      : obj.prepareTable();
                }),
                options && null != options.contextMenu
                  ? (obj.options.contextMenu = options.contextMenu)
                  : (obj.options.contextMenu = function (e, t, o, n) {
                      var r = [];
                      if (null == o)
                        1 == obj.options.allowInsertColumn &&
                          r.push({
                            title: obj.options.text.insertANewColumnBefore,
                            onclick: function () {
                              obj.insertColumn(1, parseInt(t), 1);
                            },
                          }),
                          1 == obj.options.allowInsertColumn &&
                            r.push({
                              title: obj.options.text.insertANewColumnAfter,
                              onclick: function () {
                                obj.insertColumn(1, parseInt(t), 0);
                              },
                            }),
                          1 == obj.options.allowDeleteColumn &&
                            r.push({
                              title: obj.options.text.deleteSelectedColumns,
                              onclick: function () {
                                obj.deleteColumn(
                                  obj.getSelectedColumns().length
                                    ? void 0
                                    : parseInt(t)
                                );
                              },
                            }),
                          1 == obj.options.allowRenameColumn &&
                            r.push({
                              title: obj.options.text.renameThisColumn,
                              onclick: function () {
                                obj.setHeader(t);
                              },
                            }),
                          1 == obj.options.columnSorting &&
                            (r.push({ type: "line" }),
                            r.push({
                              title: obj.options.text.orderAscending,
                              onclick: function () {
                                obj.orderBy(t, 0);
                              },
                            }),
                            r.push({
                              title: obj.options.text.orderDescending,
                              onclick: function () {
                                obj.orderBy(t, 1);
                              },
                            }));
                      else if (
                        (1 == obj.options.allowInsertRow &&
                          (r.push({
                            title: obj.options.text.insertANewRowBefore,
                            onclick: function () {
                              obj.insertRow(1, parseInt(o), 1);
                            },
                          }),
                          r.push({
                            title: obj.options.text.insertANewRowAfter,
                            onclick: function () {
                              obj.insertRow(1, parseInt(o));
                            },
                          })),
                        1 == obj.options.allowDeleteRow &&
                          r.push({
                            title: obj.options.text.deleteSelectedRows,
                            onclick: function () {
                              obj.deleteRow(
                                obj.getSelectedRows().length
                                  ? void 0
                                  : parseInt(o)
                              );
                            },
                          }),
                        t && 1 == obj.options.allowComments)
                      ) {
                        r.push({ type: "line" });
                        var l = obj.records[o][t].getAttribute("title") || "";
                        r.push({
                          title: l
                            ? obj.options.text.editComments
                            : obj.options.text.addComments,
                          onclick: function () {
                            var e = prompt(obj.options.text.comments, l);
                            e && obj.setComments([t, o], e);
                          },
                        }),
                          l &&
                            r.push({
                              title: obj.options.text.clearComments,
                              onclick: function () {
                                obj.setComments([t, o], "");
                              },
                            });
                      }
                      return (
                        r.push({ type: "line" }),
                        r.push({
                          title: obj.options.text.copy,
                          shortcut: "Ctrl + C",
                          onclick: function () {
                            obj.copy(!0);
                          },
                        }),
                        navigator &&
                          navigator.clipboard &&
                          r.push({
                            title: obj.options.text.paste,
                            shortcut: "Ctrl + V",
                            onclick: function () {
                              obj.selectedCell &&
                                navigator.clipboard
                                  .readText()
                                  .then(function (e) {
                                    e &&
                                      _jexcel.current.paste(
                                        obj.selectedCell[0],
                                        obj.selectedCell[1],
                                        e
                                      );
                                  });
                            },
                          }),
                        obj.options.allowExport &&
                          r.push({
                            title: obj.options.text.saveAs,
                            shortcut: "Ctrl + S",
                            onclick: function () {
                              obj.download();
                            },
                          }),
                        obj.options.about &&
                          r.push({
                            title: obj.options.text.about,
                            onclick: function () {
                              !0 === obj.options.about
                                ? alert(Version().print())
                                : alert(obj.options.about);
                            },
                          }),
                        r
                      );
                    }),
                (obj.scrollControls = function (e) {
                  obj.wheelControls(),
                    obj.options.freezeColumns > 0 &&
                      obj.content.scrollLeft != scrollLeft &&
                      obj.updateFreezePosition(),
                    (1 != obj.options.lazyLoading &&
                      1 != obj.options.tableOverflow) ||
                      (obj.edition &&
                        "jdropdown" != e.target.className.substr(0, 9) &&
                        obj.closeEditor(obj.edition[0], !0));
                }),
                (obj.wheelControls = function (e) {
                  1 == obj.options.lazyLoading &&
                    null == _jexcel.timeControlLoading &&
                    (_jexcel.timeControlLoading = setTimeout(function () {
                      obj.content.scrollTop + obj.content.clientHeight >=
                      obj.content.scrollHeight - 10
                        ? obj.loadDown() &&
                          (obj.content.scrollTop + obj.content.clientHeight >
                            obj.content.scrollHeight - 10 &&
                            (obj.content.scrollTop =
                              obj.content.scrollTop - obj.content.clientHeight),
                          obj.updateCornerPosition())
                        : obj.content.scrollTop <= obj.content.clientHeight &&
                          obj.loadUp() &&
                          (obj.content.scrollTop < 10 &&
                            (obj.content.scrollTop =
                              obj.content.scrollTop + obj.content.clientHeight),
                          obj.updateCornerPosition()),
                        (_jexcel.timeControlLoading = null);
                    }, 100));
                }),
                (obj.getFreezeWidth = function () {
                  var e = 0;
                  if (obj.options.freezeColumns > 0)
                    for (var t = 0; t < obj.options.freezeColumns; t++)
                      e += parseInt(obj.options.columns[t].width);
                  return e;
                });
              var scrollLeft = 0;
              return (
                (obj.updateFreezePosition = function () {
                  var e = 0;
                  if ((scrollLeft = obj.content.scrollLeft) > 50)
                    for (var t = 0; t < obj.options.freezeColumns; t++) {
                      t > 0 &&
                        "hidden" !== obj.options.columns[t - 1].type &&
                        (e += parseInt(obj.options.columns[t - 1].width)),
                        obj.headers[t].classList.add("jexcel_freezed"),
                        (obj.headers[t].style.left = e + "px");
                      for (var o = 0; o < obj.rows.length; o++)
                        if (obj.rows[o] && obj.records[o][t]) {
                          var n =
                            scrollLeft +
                            (t > 0 ? obj.records[o][t - 1].style.width : 0) -
                            51 +
                            "px";
                          obj.records[o][t].classList.add("jexcel_freezed"),
                            (obj.records[o][t].style.left = n);
                        }
                    }
                  else
                    for (t = 0; t < obj.options.freezeColumns; t++) {
                      obj.headers[t].classList.remove("jexcel_freezed"),
                        (obj.headers[t].style.left = "");
                      for (o = 0; o < obj.rows.length; o++)
                        obj.records[o][t] &&
                          (obj.records[o][t].classList.remove("jexcel_freezed"),
                          (obj.records[o][t].style.left = ""));
                    }
                  obj.updateCornerPosition();
                }),
                el.addEventListener("DOMMouseScroll", obj.wheelControls),
                el.addEventListener("mousewheel", obj.wheelControls),
                (el.jexcel = obj),
                (el.zone_sheet = obj),
                obj.init(),
                obj
              );
            };
          (_jexcel.setDictionary = function (e) {
            jSuites.setDictionary(e);
          }),
            (_jexcel.setExtensions = function (e) {
              for (var t = Object.keys(e), o = 0; o < t.length; o++)
                "function" == typeof e[t[o]] &&
                  ((_jexcel[t[o]] = e[t[o]]),
                  _jexcel.license &&
                    "function" == typeof e[t[o]].license &&
                    e[t[o]].license(_jexcel.license));
            }),
            void 0 !== formula && (_jexcel.formula = formula),
            (_jexcel.version = Version),
            (_jexcel.current = null),
            (_jexcel.timeControl = null),
            (_jexcel.timeControlLoading = null);
          var destroyEvents = function (e) {
              e.removeEventListener("mouseup", _jexcel.mouseUpControls),
                e.removeEventListener("mousedown", _jexcel.mouseDownControls),
                e.removeEventListener("mousemove", _jexcel.mouseMoveControls),
                e.removeEventListener("mouseover", _jexcel.mouseOverControls),
                e.removeEventListener("dblclick", _jexcel.doubleClickControls),
                e.removeEventListener("paste", _jexcel.pasteControls),
                e.removeEventListener(
                  "contextmenu",
                  _jexcel.contextMenuControls
                ),
                e.removeEventListener("touchstart", _jexcel.touchStartControls),
                e.removeEventListener("touchend", _jexcel.touchEndControls),
                e.removeEventListener("touchcancel", _jexcel.touchEndControls),
                document.removeEventListener(
                  "keydown",
                  _jexcel.keyDownControls
                );
            },
            component;
          return (
            (_jexcel.destroy = function (e, t) {
              if (e.jexcel) {
                var o = e.jexcel.options.root
                  ? e.jexcel.options.root
                  : document;
                e.removeEventListener(
                  "DOMMouseScroll",
                  e.jexcel.scrollControls
                ),
                  e.removeEventListener("mousewheel", e.jexcel.scrollControls),
                  (e.jexcel = null),
                  (e.innerHTML = ""),
                  t && (destroyEvents(o), (_jexcel = null));
              }
            }),
            (_jexcel.build = function (e) {
              destroyEvents(e),
                e.addEventListener("mouseup", _jexcel.mouseUpControls),
                e.addEventListener("mousedown", _jexcel.mouseDownControls),
                e.addEventListener("mousemove", _jexcel.mouseMoveControls),
                e.addEventListener("mouseover", _jexcel.mouseOverControls),
                e.addEventListener("dblclick", _jexcel.doubleClickControls),
                e.addEventListener("paste", _jexcel.pasteControls),
                e.addEventListener("contextmenu", _jexcel.contextMenuControls),
                e.addEventListener("touchstart", _jexcel.touchStartControls),
                e.addEventListener("touchend", _jexcel.touchEndControls),
                e.addEventListener("touchcancel", _jexcel.touchEndControls),
                e.addEventListener("touchmove", _jexcel.touchEndControls),
                document.addEventListener("keydown", _jexcel.keyDownControls);
            }),
            (_jexcel.keyDownControls = function (e) {
              if (_jexcel.current) {
                if (_jexcel.current.edition)
                  if (27 == e.which)
                    _jexcel.current.edition &&
                      _jexcel.current.closeEditor(
                        _jexcel.current.edition[0],
                        !1
                      ),
                      e.preventDefault();
                  else if (13 == e.which)
                    if (
                      "calendar" ==
                      _jexcel.current.options.columns[
                        _jexcel.current.edition[2]
                      ].type
                    )
                      _jexcel.current.closeEditor(
                        _jexcel.current.edition[0],
                        !0
                      );
                    else if (
                      "dropdown" ==
                        _jexcel.current.options.columns[
                          _jexcel.current.edition[2]
                        ].type ||
                      "autocomplete" ==
                        _jexcel.current.options.columns[
                          _jexcel.current.edition[2]
                        ].type
                    );
                    else if (
                      (1 == _jexcel.current.options.wordWrap ||
                        1 ==
                          _jexcel.current.options.columns[
                            _jexcel.current.edition[2]
                          ].wordWrap ||
                        _jexcel.current.options.data[
                          _jexcel.current.edition[3]
                        ][_jexcel.current.edition[2]].length > 200) &&
                      e.altKey
                    ) {
                      var t = _jexcel.current.edition[0].children[0],
                        o = _jexcel.current.edition[0].children[0].value,
                        n = t.selectionStart;
                      (o = o.slice(0, n) + "\n" + o.slice(n)),
                        (t.value = o),
                        t.focus(),
                        (t.selectionStart = n + 1),
                        (t.selectionEnd = n + 1);
                    } else _jexcel.current.edition[0].children[0].blur();
                  else
                    9 == e.which &&
                      (["calendar", "html"].includes(
                        _jexcel.current.options.columns[
                          _jexcel.current.edition[2]
                        ].type
                      )
                        ? _jexcel.current.closeEditor(
                            _jexcel.current.edition[0],
                            !0
                          )
                        : _jexcel.current.edition[0].children[0].blur());
                if (!_jexcel.current.edition && _jexcel.current.selectedCell)
                  if (37 == e.which)
                    _jexcel.current.left(e.shiftKey, e.ctrlKey),
                      e.preventDefault();
                  else if (39 == e.which)
                    _jexcel.current.right(e.shiftKey, e.ctrlKey),
                      e.preventDefault();
                  else if (38 == e.which)
                    _jexcel.current.up(e.shiftKey, e.ctrlKey),
                      e.preventDefault();
                  else if (40 == e.which)
                    _jexcel.current.down(e.shiftKey, e.ctrlKey),
                      e.preventDefault();
                  else if (36 == e.which)
                    _jexcel.current.first(e.shiftKey, e.ctrlKey),
                      e.preventDefault();
                  else if (35 == e.which)
                    _jexcel.current.last(e.shiftKey, e.ctrlKey),
                      e.preventDefault();
                  else if (46 == e.which || 8 == e.which)
                    1 == _jexcel.current.options.editable &&
                      (_jexcel.current.selectedRow
                        ? 1 == _jexcel.current.options.allowDeleteRow &&
                          confirm(
                            _jexcel.current.options.text
                              .areYouSureToDeleteTheSelectedRows
                          ) &&
                          _jexcel.current.deleteRow()
                        : _jexcel.current.selectedHeader
                        ? 1 == _jexcel.current.options.allowDeleteColumn &&
                          confirm(
                            _jexcel.current.options.text
                              .areYouSureToDeleteTheSelectedColumns
                          ) &&
                          _jexcel.current.deleteColumn()
                        : _jexcel.current.setValue(
                            _jexcel.current.highlighted,
                            ""
                          ));
                  else if (13 == e.which)
                    e.shiftKey
                      ? _jexcel.current.up()
                      : (1 == _jexcel.current.options.allowInsertRow &&
                          1 == _jexcel.current.options.allowManualInsertRow &&
                          _jexcel.current.selectedCell[1] ==
                            _jexcel.current.options.data.length - 1 &&
                          _jexcel.current.insertRow(),
                        _jexcel.current.down()),
                      e.preventDefault();
                  else if (9 == e.which)
                    e.shiftKey
                      ? _jexcel.current.left()
                      : (1 == _jexcel.current.options.allowInsertColumn &&
                          1 ==
                            _jexcel.current.options.allowManualInsertColumn &&
                          _jexcel.current.selectedCell[0] ==
                            _jexcel.current.options.data[0].length - 1 &&
                          _jexcel.current.insertColumn(),
                        _jexcel.current.right()),
                      e.preventDefault();
                  else if ((!e.ctrlKey && !e.metaKey) || e.shiftKey) {
                    if (
                      _jexcel.current.selectedCell &&
                      1 == _jexcel.current.options.editable
                    ) {
                      var r = _jexcel.current.selectedCell[1],
                        l = _jexcel.current.selectedCell[0];
                      "readonly" != _jexcel.current.options.columns[l].type &&
                        (32 == e.keyCode
                          ? (e.preventDefault(),
                            "checkbox" ==
                              _jexcel.current.options.columns[l].type ||
                            "radio" == _jexcel.current.options.columns[l].type
                              ? _jexcel.current.setCheckRadioValue()
                              : _jexcel.current.openEditor(
                                  _jexcel.current.records[r][l],
                                  !0
                                ))
                          : 113 == e.keyCode
                          ? _jexcel.current.openEditor(
                              _jexcel.current.records[r][l],
                              !1
                            )
                          : (8 == e.keyCode ||
                              (e.keyCode >= 48 && e.keyCode <= 57) ||
                              (e.keyCode >= 96 && e.keyCode <= 111) ||
                              (e.keyCode >= 187 && e.keyCode <= 190) ||
                              ((String.fromCharCode(e.keyCode) == e.key ||
                                String.fromCharCode(e.keyCode).toLowerCase() ==
                                  e.key.toLowerCase()) &&
                                _jexcel.validLetter(
                                  String.fromCharCode(e.keyCode)
                                ))) &&
                            (_jexcel.current.openEditor(
                              _jexcel.current.records[r][l],
                              !0
                            ),
                            "calendar" ==
                              _jexcel.current.options.columns[l].type &&
                              e.preventDefault()));
                    }
                  } else
                    65 == e.which
                      ? (_jexcel.current.selectAll(), e.preventDefault())
                      : 83 == e.which
                      ? (_jexcel.current.download(), e.preventDefault())
                      : 89 == e.which
                      ? (_jexcel.current.redo(), e.preventDefault())
                      : 90 == e.which
                      ? (_jexcel.current.undo(), e.preventDefault())
                      : 67 == e.which
                      ? (_jexcel.current.copy(!0), e.preventDefault())
                      : 88 == e.which
                      ? (1 == _jexcel.current.options.editable
                          ? _jexcel.cutControls()
                          : _jexcel.copyControls(),
                        e.preventDefault())
                      : 86 == e.which && _jexcel.pasteControls();
                else
                  e.target.classList.contains("jexcel_search") &&
                    (_jexcel.timeControl && clearTimeout(_jexcel.timeControl),
                    (_jexcel.timeControl = setTimeout(function () {
                      _jexcel.current.search(e.target.value);
                    }, 200)));
              }
            }),
            (_jexcel.isMouseAction = !1),
            (_jexcel.mouseDownControls = function (e) {
              if ((e = e || window.event).buttons) var t = e.buttons;
              else if (e.button) t = e.button;
              else t = e.which;
              var o = _jexcel.getElement(e.target);
              if (
                (o[0]
                  ? _jexcel.current != o[0].jexcel &&
                    (_jexcel.current &&
                      (_jexcel.current.edition &&
                        _jexcel.current.closeEditor(
                          _jexcel.current.edition[0],
                          !0
                        ),
                      _jexcel.current.resetSelection()),
                    (_jexcel.current = o[0].jexcel))
                  : _jexcel.current &&
                    (_jexcel.current.edition &&
                      _jexcel.current.closeEditor(
                        _jexcel.current.edition[0],
                        !0
                      ),
                    _jexcel.current.resetSelection(!0),
                    (_jexcel.current = null)),
                _jexcel.current && 1 == t)
              ) {
                if (e.target.classList.contains("jexcel_selectall"))
                  _jexcel.current && _jexcel.current.selectAll();
                else if (e.target.classList.contains("jexcel_corner"))
                  1 == _jexcel.current.options.editable &&
                    (_jexcel.current.selectedCorner = !0);
                else {
                  if (1 == o[1]) {
                    if ((p = e.target.getAttribute("data-x"))) {
                      var n = e.target.getBoundingClientRect();
                      if (
                        1 == _jexcel.current.options.columnResize &&
                        n.width - e.offsetX < 6
                      ) {
                        (_jexcel.current.resizing = {
                          mousePosition: e.pageX,
                          column: p,
                          width: n.width,
                        }),
                          _jexcel.current.headers[p].classList.add("resizing");
                        for (var r = 0; r < _jexcel.current.records.length; r++)
                          _jexcel.current.records[r][p] &&
                            _jexcel.current.records[r][p].classList.add(
                              "resizing"
                            );
                      } else if (
                        1 == _jexcel.current.options.columnDrag &&
                        n.height - e.offsetY < 6
                      )
                        if (_jexcel.current.isColMerged(p).length)
                          console.error(
                            "Zone_sheet: This column is part of a merged cell."
                          );
                        else {
                          _jexcel.current.resetSelection(),
                            (_jexcel.current.dragging = {
                              element: e.target,
                              column: p,
                              destination: p,
                            }),
                            _jexcel.current.headers[p].classList.add(
                              "dragging"
                            );
                          for (r = 0; r < _jexcel.current.records.length; r++)
                            _jexcel.current.records[r][p] &&
                              _jexcel.current.records[r][p].classList.add(
                                "dragging"
                              );
                        }
                      else {
                        if (
                          _jexcel.current.selectedHeader &&
                          (e.shiftKey || e.ctrlKey)
                        )
                          var l = _jexcel.current.selectedHeader,
                            i = p;
                        else {
                          _jexcel.current.selectedHeader == p &&
                            1 == _jexcel.current.options.allowRenameColumn &&
                            (_jexcel.timeControl = setTimeout(function () {
                              _jexcel.current.setHeader(p);
                            }, 800)),
                            (_jexcel.current.selectedHeader = p);
                          (l = p), (i = p);
                        }
                        _jexcel.current.updateSelectionFromCoords(
                          l,
                          0,
                          i,
                          _jexcel.current.options.data.length - 1
                        );
                      }
                    } else if (
                      e.target.parentNode.classList.contains("jexcel_nested")
                    ) {
                      if (e.target.getAttribute("data-column"))
                        var s = e.target.getAttribute("data-column").split(","),
                          a = parseInt(s[0]),
                          u = parseInt(s[s.length - 1]);
                      else
                        (a = 0),
                          (u = _jexcel.current.options.columns.length - 1);
                      _jexcel.current.updateSelectionFromCoords(
                        a,
                        0,
                        u,
                        _jexcel.current.options.data.length - 1
                      );
                    }
                  } else _jexcel.current.selectedHeader = !1;
                  if (2 == o[1]) {
                    var c = e.target.getAttribute("data-y");
                    if (e.target.classList.contains("jexcel_row")) {
                      n = e.target.getBoundingClientRect();
                      if (
                        1 == _jexcel.current.options.rowResize &&
                        n.height - e.offsetY < 6
                      )
                        (_jexcel.current.resizing = {
                          element: e.target.parentNode,
                          mousePosition: e.pageY,
                          row: c,
                          height: n.height,
                        }),
                          e.target.parentNode.classList.add("resizing");
                      else if (
                        1 == _jexcel.current.options.rowDrag &&
                        n.width - e.offsetX < 6
                      )
                        _jexcel.current.isRowMerged(c).length
                          ? console.error(
                              "Zone_sheet: This row is part of a merged cell"
                            )
                          : 1 == _jexcel.current.options.search &&
                            _jexcel.current.results
                          ? console.error(
                              "Zone_sheet: Please clear your search before perform this action"
                            )
                          : (_jexcel.current.resetSelection(),
                            (_jexcel.current.dragging = {
                              element: e.target.parentNode,
                              row: c,
                              destination: c,
                            }),
                            e.target.parentNode.classList.add("dragging"));
                      else {
                        if (
                          _jexcel.current.selectedRow &&
                          (e.shiftKey || e.ctrlKey)
                        )
                          (l = _jexcel.current.selectedRow), (i = c);
                        else {
                          _jexcel.current.selectedRow = c;
                          (l = c), (i = c);
                        }
                        _jexcel.current.updateSelectionFromCoords(
                          0,
                          l,
                          _jexcel.current.options.data[0].length - 1,
                          i
                        );
                      }
                    } else if (
                      e.target.classList.contains("jclose") &&
                      e.target.clientWidth - e.offsetX < 50 &&
                      e.offsetY < 50
                    )
                      _jexcel.current.closeEditor(
                        _jexcel.current.edition[0],
                        !0
                      );
                    else {
                      var f = function (e) {
                          var t = e.getAttribute("data-x"),
                            o = e.getAttribute("data-y");
                          return t && o
                            ? [t, o]
                            : e.parentNode
                            ? f(e.parentNode)
                            : void 0;
                        },
                        d = f(e.target);
                      if (d) {
                        var p = d[0];
                        c = d[1];
                        _jexcel.current.edition &&
                          ((_jexcel.current.edition[2] == p &&
                            _jexcel.current.edition[3] == c) ||
                            _jexcel.current.closeEditor(
                              _jexcel.current.edition[0],
                              !0
                            )),
                          _jexcel.current.edition ||
                            (e.shiftKey
                              ? _jexcel.current.updateSelectionFromCoords(
                                  _jexcel.current.selectedCell[0],
                                  _jexcel.current.selectedCell[1],
                                  p,
                                  c
                                )
                              : _jexcel.current.updateSelectionFromCoords(
                                  p,
                                  c
                                )),
                          (_jexcel.current.selectedHeader = null),
                          (_jexcel.current.selectedRow = null);
                      }
                    }
                  } else _jexcel.current.selectedRow = !1;
                  e.target.classList.contains("jexcel_page") &&
                    ("<" == e.target.textContent
                      ? _jexcel.current.page(0)
                      : ">" == e.target.textContent
                      ? _jexcel.current.page(e.target.getAttribute("title") - 1)
                      : _jexcel.current.page(e.target.textContent - 1));
                }
                _jexcel.current.edition
                  ? (_jexcel.isMouseAction = !1)
                  : (_jexcel.isMouseAction = !0);
              } else _jexcel.isMouseAction = !1;
            }),
            (_jexcel.mouseUpControls = function (e) {
              if (_jexcel.current)
                if (_jexcel.current.resizing) {
                  if (_jexcel.current.resizing.column) {
                    var t =
                        _jexcel.current.colgroup[
                          _jexcel.current.resizing.column
                        ].getAttribute("width"),
                      o = _jexcel.current.getSelectedColumns();
                    if (o.length > 1) {
                      for (var n = [], r = 0; r < o.length; r++)
                        n.push(
                          parseInt(
                            _jexcel.current.colgroup[o[r]].getAttribute("width")
                          )
                        );
                      (n[o.indexOf(parseInt(_jexcel.current.resizing.column))] =
                        _jexcel.current.resizing.width),
                        _jexcel.current.setWidth(o, t, n);
                    } else
                      _jexcel.current.setWidth(
                        _jexcel.current.resizing.column,
                        t,
                        _jexcel.current.resizing.width
                      );
                    _jexcel.current.headers[
                      _jexcel.current.resizing.column
                    ].classList.remove("resizing");
                    for (var l = 0; l < _jexcel.current.records.length; l++)
                      _jexcel.current.records[l][
                        _jexcel.current.resizing.column
                      ] &&
                        _jexcel.current.records[l][
                          _jexcel.current.resizing.column
                        ].classList.remove("resizing");
                  } else {
                    _jexcel.current.rows[
                      _jexcel.current.resizing.row
                    ].children[0].classList.remove("resizing");
                    var i =
                      _jexcel.current.rows[
                        _jexcel.current.resizing.row
                      ].getAttribute("height");
                    _jexcel.current.setHeight(
                      _jexcel.current.resizing.row,
                      i,
                      _jexcel.current.resizing.height
                    ),
                      _jexcel.current.resizing.element.classList.remove(
                        "resizing"
                      );
                  }
                  _jexcel.current.resizing = null;
                } else if (_jexcel.current.dragging) {
                  if (_jexcel.current.dragging) {
                    if (_jexcel.current.dragging.column) {
                      var s = e.target.getAttribute("data-x");
                      _jexcel.current.headers[
                        _jexcel.current.dragging.column
                      ].classList.remove("dragging");
                      for (l = 0; l < _jexcel.current.rows.length; l++)
                        _jexcel.current.records[l][
                          _jexcel.current.dragging.column
                        ] &&
                          _jexcel.current.records[l][
                            _jexcel.current.dragging.column
                          ].classList.remove("dragging");
                      for (r = 0; r < _jexcel.current.headers.length; r++)
                        _jexcel.current.headers[r].classList.remove(
                          "dragging-left"
                        ),
                          _jexcel.current.headers[r].classList.remove(
                            "dragging-right"
                          );
                      s &&
                        _jexcel.current.dragging.column !=
                          _jexcel.current.dragging.destination &&
                        _jexcel.current.moveColumn(
                          _jexcel.current.dragging.column,
                          _jexcel.current.dragging.destination
                        );
                    } else {
                      if (_jexcel.current.dragging.element.nextSibling) {
                        var a = parseInt(
                          _jexcel.current.dragging.element.nextSibling.getAttribute(
                            "data-y"
                          )
                        );
                        _jexcel.current.dragging.row < a && (a -= 1);
                      } else
                        a = parseInt(
                          _jexcel.current.dragging.element.previousSibling.getAttribute(
                            "data-y"
                          )
                        );
                      _jexcel.current.dragging.row !=
                        _jexcel.current.dragging.destination &&
                        _jexcel.current.moveRow(
                          _jexcel.current.dragging.row,
                          a,
                          !0
                        ),
                        _jexcel.current.dragging.element.classList.remove(
                          "dragging"
                        );
                    }
                    _jexcel.current.dragging = null;
                  }
                } else
                  _jexcel.current.selectedCorner &&
                    ((_jexcel.current.selectedCorner = !1),
                    _jexcel.current.selection.length > 0 &&
                      (_jexcel.current.copyData(
                        _jexcel.current.selection[0],
                        _jexcel.current.selection[
                          _jexcel.current.selection.length - 1
                        ]
                      ),
                      _jexcel.current.removeCopySelection()));
              _jexcel.timeControl &&
                (clearTimeout(_jexcel.timeControl),
                (_jexcel.timeControl = null)),
                (_jexcel.isMouseAction = !1);
            }),
            (_jexcel.mouseMoveControls = function (e) {
              if ((e = e || window.event).buttons) var t = e.buttons;
              else if (e.button) t = e.button;
              else t = e.which;
              if ((t || (_jexcel.isMouseAction = !1), _jexcel.current))
                if (1 == _jexcel.isMouseAction) {
                  if (_jexcel.current.resizing)
                    if (_jexcel.current.resizing.column) {
                      var o = e.pageX - _jexcel.current.resizing.mousePosition;
                      if (_jexcel.current.resizing.width + o > 0) {
                        var n = _jexcel.current.resizing.width + o;
                        _jexcel.current.colgroup[
                          _jexcel.current.resizing.column
                        ].setAttribute("width", n),
                          _jexcel.current.updateCornerPosition();
                      }
                    } else {
                      var r = e.pageY - _jexcel.current.resizing.mousePosition;
                      if (_jexcel.current.resizing.height + r > 0) {
                        var l = _jexcel.current.resizing.height + r;
                        _jexcel.current.rows[
                          _jexcel.current.resizing.row
                        ].setAttribute("height", l),
                          _jexcel.current.updateCornerPosition();
                      }
                    }
                  else if (_jexcel.current.dragging)
                    if (_jexcel.current.dragging.column) {
                      var i = e.target.getAttribute("data-x");
                      if (i)
                        if (_jexcel.current.isColMerged(i).length)
                          console.error(
                            "Zone_sheet: This column is part of a merged cell."
                          );
                        else {
                          for (
                            var s = 0;
                            s < _jexcel.current.headers.length;
                            s++
                          )
                            _jexcel.current.headers[s].classList.remove(
                              "dragging-left"
                            ),
                              _jexcel.current.headers[s].classList.remove(
                                "dragging-right"
                              );
                          _jexcel.current.dragging.column == i
                            ? (_jexcel.current.dragging.destination =
                                parseInt(i))
                            : e.target.clientWidth / 2 > e.offsetX
                            ? (_jexcel.current.dragging.column < i
                                ? (_jexcel.current.dragging.destination =
                                    parseInt(i) - 1)
                                : (_jexcel.current.dragging.destination =
                                    parseInt(i)),
                              _jexcel.current.headers[i].classList.add(
                                "dragging-left"
                              ))
                            : (_jexcel.current.dragging.column < i
                                ? (_jexcel.current.dragging.destination =
                                    parseInt(i))
                                : (_jexcel.current.dragging.destination =
                                    parseInt(i) + 1),
                              _jexcel.current.headers[i].classList.add(
                                "dragging-right"
                              ));
                        }
                    } else {
                      var a = e.target.getAttribute("data-y");
                      if (a)
                        if (_jexcel.current.isRowMerged(a).length)
                          console.error(
                            "Zone_sheet: This row is part of a merged cell."
                          );
                        else {
                          var u =
                            e.target.clientHeight / 2 > e.offsetY
                              ? e.target.parentNode.nextSibling
                              : e.target.parentNode;
                          _jexcel.current.dragging.element != u &&
                            (e.target.parentNode.parentNode.insertBefore(
                              _jexcel.current.dragging.element,
                              u
                            ),
                            (_jexcel.current.dragging.destination =
                              Array.prototype.indexOf.call(
                                _jexcel.current.dragging.element.parentNode
                                  .children,
                                _jexcel.current.dragging.element
                              )));
                        }
                    }
                } else {
                  var c = e.target.getAttribute("data-x"),
                    f = e.target.getAttribute("data-y"),
                    d = e.target.getBoundingClientRect();
                  _jexcel.current.cursor &&
                    ((_jexcel.current.cursor.style.cursor = ""),
                    (_jexcel.current.cursor = null)),
                    e.target.parentNode.parentNode &&
                      e.target.parentNode.parentNode.className &&
                      (e.target.parentNode.parentNode.classList.contains(
                        "resizable"
                      ) &&
                        (e.target &&
                        c &&
                        !f &&
                        d.width - (e.clientX - d.left) < 6
                          ? ((_jexcel.current.cursor = e.target),
                            (_jexcel.current.cursor.style.cursor =
                              "col-resize"))
                          : e.target &&
                            !c &&
                            f &&
                            d.height - (e.clientY - d.top) < 6 &&
                            ((_jexcel.current.cursor = e.target),
                            (_jexcel.current.cursor.style.cursor =
                              "row-resize"))),
                      e.target.parentNode.parentNode.classList.contains(
                        "draggable"
                      ) &&
                        ((e.target &&
                          !c &&
                          f &&
                          d.width - (e.clientX - d.left) < 6) ||
                          (e.target &&
                            c &&
                            !f &&
                            d.height - (e.clientY - d.top) < 6)) &&
                        ((_jexcel.current.cursor = e.target),
                        (_jexcel.current.cursor.style.cursor = "move")));
                }
            }),
            (_jexcel.mouseOverControls = function (e) {
              if ((e = e || window.event).buttons) var t = e.buttons;
              else if (e.button) t = e.button;
              else t = e.which;
              if (
                (t || (_jexcel.isMouseAction = !1),
                _jexcel.current && 1 == _jexcel.isMouseAction)
              ) {
                var o = _jexcel.getElement(e.target);
                if (o[0]) {
                  if (_jexcel.current != o[0].jexcel && _jexcel.current)
                    return !1;
                  var n = e.target.getAttribute("data-x"),
                    r = e.target.getAttribute("data-y");
                  if (_jexcel.current.resizing || _jexcel.current.dragging);
                  else {
                    if (1 == o[1] && _jexcel.current.selectedHeader) {
                      n = e.target.getAttribute("data-x");
                      var l = _jexcel.current.selectedHeader,
                        i = n;
                      _jexcel.current.updateSelectionFromCoords(
                        l,
                        0,
                        i,
                        _jexcel.current.options.data.length - 1
                      );
                    }
                    if (2 == o[1])
                      if (e.target.classList.contains("jexcel_row")) {
                        if (_jexcel.current.selectedRow) {
                          (l = _jexcel.current.selectedRow), (i = r);
                          _jexcel.current.updateSelectionFromCoords(
                            0,
                            l,
                            _jexcel.current.options.data[0].length - 1,
                            i
                          );
                        }
                      } else
                        _jexcel.current.edition ||
                          (n &&
                            r &&
                            (_jexcel.current.selectedCorner
                              ? _jexcel.current.updateCopySelection(n, r)
                              : _jexcel.current.selectedCell &&
                                _jexcel.current.updateSelectionFromCoords(
                                  _jexcel.current.selectedCell[0],
                                  _jexcel.current.selectedCell[1],
                                  n,
                                  r
                                )));
                  }
                }
              }
              _jexcel.timeControl &&
                (clearTimeout(_jexcel.timeControl),
                (_jexcel.timeControl = null));
            }),
            (_jexcel.doubleClickControls = function (e) {
              if (_jexcel.current)
                if (e.target.classList.contains("jexcel_corner")) {
                  if (_jexcel.current.highlighted.length > 0) {
                    var t =
                        _jexcel.current.highlighted[0].getAttribute("data-x"),
                      o =
                        parseInt(
                          _jexcel.current.highlighted[
                            _jexcel.current.highlighted.length - 1
                          ].getAttribute("data-y")
                        ) + 1,
                      n =
                        _jexcel.current.highlighted[
                          _jexcel.current.highlighted.length - 1
                        ].getAttribute("data-x"),
                      r = _jexcel.current.records.length - 1;
                    _jexcel.current.copyData(
                      _jexcel.current.records[o][t],
                      _jexcel.current.records[r][n]
                    );
                  }
                } else if (
                  e.target.classList.contains("jexcel_column_filter")
                ) {
                  var l = e.target.getAttribute("data-x");
                  _jexcel.current.openFilter(l);
                } else {
                  var i = _jexcel.getElement(e.target);
                  if (1 == i[1] && 1 == _jexcel.current.options.columnSorting)
                    (l = e.target.getAttribute("data-x")) &&
                      _jexcel.current.orderBy(l);
                  if (
                    2 == i[1] &&
                    1 == _jexcel.current.options.editable &&
                    !_jexcel.current.edition
                  ) {
                    var s = function (e) {
                        if (e.parentNode) {
                          var t = e.getAttribute("data-x"),
                            o = e.getAttribute("data-y");
                          return t && o ? e : s(e.parentNode);
                        }
                      },
                      a = s(e.target);
                    a &&
                      a.classList.contains("highlight") &&
                      _jexcel.current.openEditor(a);
                  }
                }
            }),
            (_jexcel.copyControls = function (e) {
              _jexcel.current &&
                _jexcel.copyControls.enabled &&
                (_jexcel.current.edition || _jexcel.current.copy(!0));
            }),
            (_jexcel.cutControls = function (e) {
              _jexcel.current &&
                (_jexcel.current.edition ||
                  (_jexcel.current.copy(!0),
                  1 == _jexcel.current.options.editable &&
                    _jexcel.current.setValue(_jexcel.current.highlighted, "")));
            }),
            (_jexcel.pasteControls = function (e) {
              _jexcel.current &&
                _jexcel.current.selectedCell &&
                (_jexcel.current.edition ||
                  (1 == _jexcel.current.options.editable &&
                    (e && e.clipboardData
                      ? (_jexcel.current.paste(
                          _jexcel.current.selectedCell[0],
                          _jexcel.current.selectedCell[1],
                          e.clipboardData.getData("text")
                        ),
                        e.preventDefault())
                      : window.clipboardData &&
                        _jexcel.current.paste(
                          _jexcel.current.selectedCell[0],
                          _jexcel.current.selectedCell[1],
                          window.clipboardData.getData("text")
                        ))));
            }),
            (_jexcel.contextMenuControls = function (e) {
              if ("buttons" in (e = e || window.event)) e.buttons;
              else e.which || e.button;
              if (_jexcel.current)
                if (_jexcel.current.edition) e.preventDefault();
                else if (
                  _jexcel.current.options.contextMenu &&
                  (_jexcel.current.contextMenu.contextmenu.close(),
                  _jexcel.current)
                ) {
                  var t = e.target.getAttribute("data-x"),
                    o = e.target.getAttribute("data-y");
                  if (t || o) {
                    (t < parseInt(_jexcel.current.selectedCell[0]) ||
                      t > parseInt(_jexcel.current.selectedCell[2]) ||
                      o < parseInt(_jexcel.current.selectedCell[1]) ||
                      o > parseInt(_jexcel.current.selectedCell[3])) &&
                      _jexcel.current.updateSelectionFromCoords(t, o, t, o);
                    var n = _jexcel.current.options.contextMenu(
                      _jexcel.current,
                      t,
                      o,
                      e
                    );
                    _jexcel.current.contextMenu.contextmenu.open(e, n),
                      e.preventDefault();
                  }
                }
            }),
            (_jexcel.touchStartControls = function (e) {
              var t = _jexcel.getElement(e.target);
              if (
                (t[0]
                  ? _jexcel.current != t[0].jexcel &&
                    (_jexcel.current && _jexcel.current.resetSelection(),
                    (_jexcel.current = t[0].jexcel))
                  : _jexcel.current &&
                    (_jexcel.current.resetSelection(),
                    (_jexcel.current = null)),
                _jexcel.current && !_jexcel.current.edition)
              ) {
                var o = e.target.getAttribute("data-x"),
                  n = e.target.getAttribute("data-y");
                o &&
                  n &&
                  (_jexcel.current.updateSelectionFromCoords(o, n),
                  (_jexcel.timeControl = setTimeout(function () {
                    "color" == _jexcel.current.options.columns[o].type
                      ? (_jexcel.tmpElement = null)
                      : (_jexcel.tmpElement = e.target),
                      _jexcel.current.openEditor(e.target, !1, e);
                  }, 500)));
              }
            }),
            (_jexcel.touchEndControls = function (e) {
              _jexcel.timeControl &&
                (clearTimeout(_jexcel.timeControl),
                (_jexcel.timeControl = null),
                _jexcel.tmpElement &&
                  "INPUT" == _jexcel.tmpElement.children[0].tagName &&
                  _jexcel.tmpElement.children[0].focus(),
                (_jexcel.tmpElement = null));
            }),
            (_jexcel.tabs = function (e, t) {
              var o = [];
              if (e.classList.contains("jexcel_tabs"))
                (r = e.children[0]), (l = e.children[1]);
              else {
                (e.innerHTML = ""),
                  e.classList.add("jexcel_tabs"),
                  (e.jexcel = []);
                var n = document.createElement("div"),
                  r = e.appendChild(n),
                  l = ((n = document.createElement("div")), e.appendChild(n));
              }
              for (var i = [], s = [], a = 0; a < t.length; a++) {
                (i[a] = document.createElement("div")),
                  i[a].classList.add("jexcel_tab");
                var u = _jexcel(i[a], t[a]);
                l.appendChild(i[a]),
                  (o[a] = e.jexcel.push(u)),
                  (s[a] = document.createElement("div")),
                  s[a].classList.add("jexcel_tab_link"),
                  s[a].setAttribute("data-spreadsheet", e.jexcel.length - 1),
                  (s[a].innerHTML = t[a].sheetName),
                  (s[a].onclick = function () {
                    for (var e = 0; e < r.children.length; e++)
                      r.children[e].classList.remove("selected"),
                        (l.children[e].style.display = "none");
                    var t = this.getAttribute("data-spreadsheet");
                    (l.children[t].style.display = "block"),
                      r.children[t].classList.add("selected");
                  }),
                  r.appendChild(s[a]);
              }
              for (var c = 0; c < r.children.length; c++)
                r.children[c].classList.remove("selected"),
                  (l.children[c].style.display = "none");
              return (
                r.children[r.children.length - 1].classList.add("selected"),
                (l.children[r.children.length - 1].style.display = "block"),
                o
              );
            }),
            (_jexcel.createTabs = _jexcel.tabs),
            (_jexcel.fromSpreadsheet = function (e, t) {
              var o,
                n = function (e) {
                  var t = [];
                  return (
                    e.SheetNames.forEach(function (o) {
                      var n = { rows: [], columns: [], data: [], style: {} };
                      if (
                        ((n.sheetName = o),
                        (d = e.Sheets[o]["!cols"]) && d.length)
                      )
                        for (var r = 0; r < d.length; r++)
                          (n.columns[r] = {}),
                            d[r] &&
                              d[r].wpx &&
                              (n.columns[r].width = d[r].wpx + "px");
                      if ((d = e.Sheets[o]["!rows"]) && d.length)
                        for (r = 0; r < d.length; r++)
                          d[r] &&
                            d[r].hpx &&
                            ((n.rows[r] = {}),
                            (n.rows[r].height = d[r].hpx + "px"));
                      if ((d = e.Sheets[o]["!merges"]) && d.length > 0) {
                        n.mergeCells = [];
                        for (r = 0; r < d.length; r++) {
                          var l = d[r].s.c,
                            i = d[r].s.r,
                            s = d[r].e.c,
                            a = d[r].e.r,
                            u = _jexcel.getColumnNameFromId([l, i]);
                          n.mergeCells[u] = [s - l + 1, a - i + 1];
                        }
                      }
                      var c = 0,
                        f = 0,
                        d = Object.keys(e.Sheets[o]);
                      for (r = 0; r < d.length; r++)
                        if ("!" != d[r].substr(0, 1)) {
                          var p = e.Sheets[o][d[r]],
                            b = _jexcel.getIdFromColumnName(d[r], !0);
                          n.data[b[1]] || (n.data[b[1]] = []),
                            (n.data[b[1]][b[0]] = p.f ? "=" + p.f : p.w),
                            c < b[0] && (c = b[0]),
                            f < b[1] && (f = b[1]),
                            p.style &&
                              Object.keys(p.style).length > 0 &&
                              (n.style[d[r]] = p.style),
                            p.s &&
                              p.s.fgColor &&
                              (n.style[d[r]] && (n.style[d[r]] += ";"),
                              (n.style[d[r]] +=
                                "background-color:#" + p.s.fgColor.rgb));
                        }
                      for (var j = n.columns, h = 0; h <= f; h++)
                        for (r = 0; r <= c; r++)
                          n.data[h] || (n.data[h] = []),
                            n.data[h][r] || (j < r && (n.data[h][r] = ""));
                      t.push(n);
                    }),
                    t
                  );
                };
              (o = new XMLHttpRequest()).open("GET", e, !0),
                "undefined" != typeof Uint8Array
                  ? ((o.responseType = "arraybuffer"),
                    (o.onload = function (e) {
                      var r = o.response,
                        l = new Uint8Array(r),
                        i = XLSX.read(l, {
                          type: "array",
                          cellFormula: !0,
                          cellStyles: !0,
                        });
                      t(n(i));
                    }))
                  : (o.setRequestHeader("Accept-Charset", "x-user-defined"),
                    (o.onreadystatechange = function () {
                      if (4 == o.readyState && 200 == o.status) {
                        var e = convertResponseBodyToText(o.responseBody),
                          r = XLSX.read(e, {
                            type: "binary",
                            cellFormula: !0,
                            cellStyles: !0,
                          });
                        t(n(r));
                      }
                    })),
                o.send();
            }),
            (_jexcel.validLetter = function (e) {
              return e.match(
                /([\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC-\u0400-\u04FF']+)/g
              )
                ? 1
                : 0;
            }),
            (_jexcel.injectArray = function (e, t, o) {
              return e.slice(0, t).concat(o).concat(e.slice(t));
            }),
            (_jexcel.getColumnName = function (e) {
              return _jexcel.helpers.getColumnName(e);
            }),
            (_jexcel.getIdFromColumnName = function (e, t) {
              var o = /^[a-zA-Z]+/.exec(e);
              if (o) {
                for (var n = 0, r = 0; r < o[0].length; r++)
                  n +=
                    parseInt(o[0].charCodeAt(r) - 64) *
                    Math.pow(26, o[0].length - 1 - r);
                --n < 0 && (n = 0);
                var l = parseInt(/[0-9]+$/.exec(e));
                l > 0 && l--, (e = 1 == t ? [n, l] : n + "-" + l);
              }
              return e;
            }),
            (_jexcel.getColumnNameFromId = function (e) {
              return (
                Array.isArray(e) || (e = e.split("-")),
                _jexcel.getColumnName(parseInt(e[0])) + (parseInt(e[1]) + 1)
              );
            }),
            (_jexcel.getElement = function (e) {
              var t = 0,
                o = 0;
              return (
                (function e(n) {
                  n.className &&
                    n.classList.contains("jexcel_container") &&
                    (o = n),
                    "THEAD" == n.tagName
                      ? (t = 1)
                      : "TBODY" == n.tagName && (t = 2),
                    n.parentNode && (o || e(n.parentNode));
                })(e),
                [o, t]
              );
            }),
            (_jexcel.doubleDigitFormat = function (e) {
              return 1 == (e = "" + e).length && (e = "0" + e), e;
            }),
            (_jexcel.createFromTable = function (e, t) {
              if ("TABLE" == e.tagName) {
                t || (t = {}), (t.columns = []), (t.data = []);
                var o = e.querySelectorAll("colgroup > col");
                if (o.length)
                  for (var n = 0; n < o.length; n++) {
                    if (!(r = o[n].style.width))
                      var r = o[n].getAttribute("width");
                    r &&
                      (t.columns[n] || (t.columns[n] = {}),
                      (t.columns[n].width = r));
                  }
                var l = function (e) {
                    var o = e.getBoundingClientRect(),
                      r = o.width > 50 ? o.width : 50;
                    t.columns[n] || (t.columns[n] = {}),
                      e.getAttribute("data-celltype")
                        ? (t.columns[n].type = e.getAttribute("data-celltype"))
                        : (t.columns[n].type = "text"),
                      (t.columns[n].width = r + "px"),
                      (t.columns[n].title = e.innerHTML),
                      (t.columns[n].align = e.style.textAlign || "center"),
                      (o = e.getAttribute("name")) && (t.columns[n].name = o),
                      (o = e.getAttribute("id")) && (t.columns[n].id = o),
                      (o = e.getAttribute("data-mask")) &&
                        (t.columns[n].mask = o);
                  },
                  i = [],
                  s = e.querySelectorAll(":scope > thead > tr");
                if (s.length) {
                  for (var a = 0; a < s.length - 1; a++) {
                    var u = [];
                    for (n = 0; n < s[a].children.length; n++) {
                      var c = {
                        title: s[a].children[n].textContent,
                        colspan: s[a].children[n].getAttribute("colspan") || 1,
                      };
                      u.push(c);
                    }
                    i.push(u);
                  }
                  s = s[s.length - 1].children;
                  for (n = 0; n < s.length; n++) l(s[n]);
                }
                var f = 0,
                  d = {},
                  p = {},
                  b = {},
                  j = {},
                  h = e.querySelectorAll(":scope > tr, :scope > tbody > tr");
                for (a = 0; a < h.length; a++)
                  if (
                    ((t.data[f] = []),
                    1 != t.parseTableFirstRowAsHeader || s.length || 0 != a)
                  ) {
                    for (n = 0; n < h[a].children.length; n++) {
                      if ((g = h[a].children[n].getAttribute("data-formula")))
                        "=" != g.substr(0, 1) && (g = "=" + g);
                      else var g = h[a].children[n].innerHTML;
                      t.data[f].push(g);
                      var m = _jexcel.getColumnNameFromId([n, a]),
                        v = h[a].children[n].getAttribute("class");
                      v && (j[m] = v);
                      var y =
                          parseInt(h[a].children[n].getAttribute("colspan")) ||
                          0,
                        C =
                          parseInt(h[a].children[n].getAttribute("rowspan")) ||
                          0;
                      (y || C) && (d[m] = [y || 1, C || 1]),
                        h[a].children[n].style &&
                          "none" == h[a].children[n].style.display &&
                          (h[a].children[n].style.display = "");
                      var x = h[a].children[n].getAttribute("style");
                      x && (b[m] = x),
                        h[a].children[n].classList.contains("styleBold") &&
                          (b[m]
                            ? (b[m] += "; font-weight:bold;")
                            : (b[m] = "font-weight:bold;"));
                    }
                    h[a].style &&
                      h[a].style.height &&
                      (p[a] = { height: h[a].style.height }),
                      f++;
                  } else
                    for (var n = 0; n < h[a].children.length; n++)
                      l(h[a].children[n]);
                if (
                  (Object.keys(i).length > 0 && (t.nestedHeaders = i),
                  Object.keys(b).length > 0 && (t.style = b),
                  Object.keys(d).length > 0 && (t.mergeCells = d),
                  Object.keys(p).length > 0 && (t.rows = p),
                  Object.keys(j).length > 0 && (t.classes = j),
                  (h = e.querySelectorAll("tfoot tr")).length)
                ) {
                  var w = [];
                  for (a = 0; a < h.length; a++) {
                    var A = [];
                    for (n = 0; n < h[a].children.length; n++)
                      A.push(h[a].children[n].textContent);
                    w.push(A);
                  }
                  Object.keys(w).length > 0 && (t.footers = w);
                }
                if (1 == t.parseTableAutoCellType) {
                  var E = [];
                  for (n = 0; n < t.columns.length; n++) {
                    var _ = !0,
                      M = !0;
                    E[n] = [];
                    for (a = 0; a < t.data.length; a++) {
                      g = t.data[a][n];
                      E[n][g] || (E[n][g] = 0),
                        E[n][g]++,
                        g.length > 25 && (_ = !1),
                        (10 == g.length &&
                          "-" == g.substr(4, 1) &&
                          "-" == g.substr(7, 1)) ||
                          (M = !1);
                    }
                    var I = Object.keys(E[n]).length;
                    M
                      ? (t.columns[n].type = "calendar")
                      : 1 == _ &&
                        I > 1 &&
                        I <= parseInt(0.1 * t.data.length) &&
                        ((t.columns[n].type = "dropdown"),
                        (t.columns[n].source = Object.keys(E[n])));
                  }
                }
                return t;
              }
              console.log("Element is not a table");
            }),
            (_jexcel.helpers =
              ((component = {
                getCaretIndex: function (e) {
                  if (this.config.root) var t = this.config.root;
                  else t = window;
                  var o = 0,
                    n = t.getSelection();
                  if (n && 0 !== n.rangeCount) {
                    var r = n.getRangeAt(0),
                      l = r.cloneRange();
                    l.selectNodeContents(e),
                      l.setEnd(r.endContainer, r.endOffset),
                      (o = l.toString().length);
                  }
                  return o;
                },
                invert: function (e) {
                  for (var t = [], o = Object.keys(e), n = 0; n < o.length; n++)
                    t[e[o[n]]] = o[n];
                  return t;
                },
                getColumnName: function (e) {
                  for (var t, o = e + 1, n = ""; o > 0; )
                    (t = (o - 1) % 26),
                      (n = String.fromCharCode(65 + t).toString() + n),
                      (o = parseInt((o - t) / 26));
                  return n;
                },
                getColumnNameFromCoords: function (e, t) {
                  return (
                    component.getColumnName(parseInt(e)) + (parseInt(t) + 1)
                  );
                },
                getCoordsFromColumnName: function (e) {
                  var t = /^[a-zA-Z]+/.exec(e);
                  if (t) {
                    for (var o = 0, n = 0; n < t[0].length; n++)
                      o +=
                        parseInt(t[0].charCodeAt(n) - 64) *
                        Math.pow(26, t[0].length - 1 - n);
                    --o < 0 && (o = 0);
                    var r = parseInt(/[0-9]+$/.exec(e)) || null;
                    return r > 0 && r--, [o, r];
                  }
                },
                createFromTable: function () {},
                injectArray: function (e, t, o) {
                  return e.slice(0, t).concat(o).concat(e.slice(t));
                },
                parseCSV: function (e, t) {
                  t = t || ",";
                  for (
                    var o = 0,
                      n = 0,
                      r = [[]],
                      l = 0,
                      i = null,
                      s = !1,
                      a = !1,
                      u = 0;
                    u < e.length;
                    u++
                  )
                    if (
                      (r[n] || (r[n] = []),
                      r[n][o] || (r[n][o] = ""),
                      "\r" != e[u])
                    )
                      if (
                        ("\n" != e[u] && e[u] != t) ||
                        (0 != s && 1 != a && i)
                      ) {
                        if (('"' == e[u] && (s = !s), null === i)) {
                          if (1 == (i = s)) continue;
                        } else if (!0 === i && !a && '"' == e[u]) {
                          '"' == e[u + 1]
                            ? ((s = !0), (r[n][o] += e[u]), u++)
                            : (a = !0);
                          continue;
                        }
                        r[n][o] += e[u];
                      } else {
                        if (
                          ((i = null), (s = !1), (a = !1), '"' == r[n][o][0])
                        ) {
                          var c = r[n][o].trim();
                          '"' == c[c.length - 1] &&
                            (r[n][o] = c.substr(1, c.length - 2));
                        }
                        "\n" == e[u] ? ((o = 0), n++) : ++o > l && (l = o);
                      }
                  for (var f = 0; f < r.length; f++)
                    for (u = 0; u <= l; u++)
                      void 0 === r[f][u] && (r[f][u] = "");
                  return r;
                },
              }),
              component)),
            "undefined" != typeof jQuery &&
              (function (e) {
                e.fn.zone_sheet = e.fn.jexcel = function (t) {
                  var o = e(this).get(0);
                  return o.jexcel
                    ? Array.isArray(o.jexcel)
                      ? o.jexcel[t][arguments[1]].apply(
                          this,
                          Array.prototype.slice.call(arguments, 2)
                        )
                      : o.jexcel[t].apply(
                          this,
                          Array.prototype.slice.call(arguments, 1)
                        )
                    : _jexcel(e(this).get(0), arguments[0]);
                };
              })(jQuery),
            _jexcel
          );
        }
        module.exports = zone_sheet;
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var o = (__webpack_module_cache__[e] = { exports: {} });
    return (
      __webpack_modules__[e].call(o.exports, o, o.exports, __webpack_require__),
      o.exports
    );
  }
  var __webpack_exports__ = __webpack_require__(502);
  zone_sheet = __webpack_exports__;
})();
