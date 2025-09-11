import De from "react";
var oe = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function gr() {
  if (xe) return L;
  xe = 1;
  var q = De, E = Symbol.for("react.element"), I = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, _ = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(h, f, R) {
    var d, y = {}, k = null, x = null;
    R !== void 0 && (k = "" + R), f.key !== void 0 && (k = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (d in f) m.call(f, d) && !S.hasOwnProperty(d) && (y[d] = f[d]);
    if (h && h.defaultProps) for (d in f = h.defaultProps, f) y[d] === void 0 && (y[d] = f[d]);
    return { $$typeof: E, type: h, key: k, ref: x, props: y, _owner: _.current };
  }
  return L.Fragment = I, L.jsx = T, L.jsxs = T, L;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function br() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var q = De, E = Symbol.for("react.element"), I = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), h = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), j = Symbol.iterator, G = "@@iterator";
    function B(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = j && e[j] || e[G];
      return typeof r == "function" ? r : null;
    }
    var F = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = F.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var We = !1, $e = !1, qe = !1, Ie = !1, Be = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === S || Be || e === _ || e === R || e === d || Ie || e === x || We || $e || qe || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === y || e.$$typeof === T || e.$$typeof === h || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case I:
          return "Portal";
        case S:
          return "Profiler";
        case _:
          return "StrictMode";
        case R:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return le(r) + ".Consumer";
          case T:
            var t = e;
            return le(t._context) + ".Provider";
          case f:
            return ze(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case k: {
            var l = e, s = l._payload, i = l._init;
            try {
              return P(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, Y = 0, se, ue, ce, fe, de, ve, pe;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Le() {
      {
        if (Y === 0) {
          se = console.log, ue = console.info, ce = console.warn, fe = console.error, de = console.group, ve = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Y++;
      }
    }
    function Me() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: se
            }),
            info: w({}, e, {
              value: ue
            }),
            warn: w({}, e, {
              value: ce
            }),
            error: w({}, e, {
              value: fe
            }),
            group: w({}, e, {
              value: de
            }),
            groupCollapsed: w({}, e, {
              value: ve
            }),
            groupEnd: w({}, e, {
              value: pe
            })
          });
        }
        Y < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = F.ReactCurrentDispatcher, H;
    function V(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (l) {
            var n = l.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var Z = !1, N;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ve();
    }
    function be(e, r) {
      if (!e || Z)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = X.current, X.current = null, Le();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (g) {
              n = g;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var o = g.stack.split(`
`), p = n.stack.split(`
`), u = o.length - 1, c = p.length - 1; u >= 1 && c >= 0 && o[u] !== p[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (o[u] !== p[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || o[u] !== p[c]) {
                    var b = `
` + o[u].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, b), b;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = s, Me(), Error.prepareStackTrace = l;
      }
      var A = e ? e.displayName || e.name : "", O = A ? V(A) : "";
      return typeof e == "function" && N.set(e, O), O;
    }
    function Ne(e, r, t) {
      return be(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Ue(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case R:
          return V("Suspense");
        case d:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ne(e.render);
          case y:
            return U(e.type, r, t);
          case k: {
            var n = e, l = n._payload, s = n._init;
            try {
              return U(s(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, ye = {}, he = F.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, l) {
      {
        var s = Function.call.bind(z);
        for (var i in e)
          if (s(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              o = u;
            }
            o && !(o instanceof Error) && (J(l), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), J(null)), o instanceof Error && !(o.message in ye) && (ye[o.message] = !0, J(l), v("Failed %s type: %s", t, o.message), J(null));
          }
      }
    }
    var Ke = Array.isArray;
    function Q(e) {
      return Ke(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return ke(e), !1;
      } catch {
        return !0;
      }
    }
    function ke(e) {
      return "" + e;
    }
    function Ce(e) {
      if (Xe(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), ke(e);
    }
    var Ee = F.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, _e;
    function Ze(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && Ee.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          me || (me = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, n, l, s, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function nr(e, r, t, n, l) {
      {
        var s, i = {}, o = null, p = null;
        t !== void 0 && (Ce(t), o = "" + t), Qe(r) && (Ce(r.key), o = "" + r.key), Ze(r) && (p = r.ref, er(r, l));
        for (s in r)
          z.call(r, s) && !He.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            i[s] === void 0 && (i[s] = u[s]);
        }
        if (o || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(i, c), p && tr(i, c);
        }
        return ar(e, o, p, l, n, Ee.current, i);
      }
    }
    var ee = F.ReactCurrentOwner, Re = F.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function Fe() {
      {
        if (ee.current) {
          var e = P(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var Pe = {};
    function ir(e) {
      {
        var r = Fe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + P(e._owner.type) + "."), D(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && Se(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = B(e);
          if (typeof l == "function" && l !== e.entries)
            for (var s = l.call(e), i; !(i = s.next()).done; )
              te(i.value) && Se(i.value, r);
        }
      }
    }
    function lr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var l = P(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var we = {};
    function Oe(e, r, t, n, l, s) {
      {
        var i = Ye(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = or();
          p ? o += p : o += Fe();
          var u;
          e === null ? u = "null" : Q(e) ? u = "array" : e !== void 0 && e.$$typeof === E ? (u = "<" + (P(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, o);
        }
        var c = nr(e, r, t, l, s);
        if (c == null)
          return c;
        if (i) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (Q(b)) {
                for (var A = 0; A < b.length; A++)
                  Te(b[A], e);
                Object.freeze && Object.freeze(b);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(b, e);
        }
        if (z.call(r, "key")) {
          var O = P(e), g = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), ae = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[O + ae]) {
            var vr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, O, vr, O), we[O + ae] = !0;
          }
        }
        return e === m ? sr(c) : lr(c), c;
      }
    }
    function ur(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var fr = cr, dr = ur;
    M.Fragment = m, M.jsx = fr, M.jsxs = dr;
  }()), M;
}
process.env.NODE_ENV === "production" ? oe.exports = gr() : oe.exports = br();
var K = oe.exports;
const a = {
  // IQOS Brand Colors
  Dimensions: {
    space: {
      10: 120
    }
  },
  Colors: {
    iqos: {
      turquoise: "#00D1D2",
      anthracite: "#393E44",
      warmWhite: "#FFFDFB",
      // IQOS Neutral Scale
      dark5: "#EBECEC",
      dark15: "#D7D8D9",
      dark30: "#C3C5C6",
      dark50: "#9C9FA1",
      dark65: "#888B8E",
      dark85: "#606568",
      darker140: "#1C1F21"
    },
    // ZYN Brand Colors
    zyn: {
      white: "#FFFFFF",
      darkBlue: "#001871",
      blue: "#00A9E0",
      // ZYN Neutral Scale (blue-tinted)
      dark5: "#F2F5F7",
      dark15: "#D9E2E7",
      dark30: "#B2C4CF",
      dark50: "#809DAE",
      dark65: "#598096",
      dark85: "#265876",
      darker140: "#012236"
    },
    // VEEV Brand Colors
    veev: {
      deepPurple: "#221551",
      pureWhite: "#FFFFFF",
      deepBlue: "#332072",
      // VEEV Neutral Scale (purple-tinted)
      deepPurpleDarker: "#140A3A",
      deepPurple85: "#43386B",
      deepPurple65: "#6F678E",
      deepPurple50: "#908AA8",
      deepPurple30: "#BDB9CB",
      deepPurple15: "#DEDCE5",
      deepPurple5: "#F4F3F6"
    },
    global: {
      orange700: "#AA5600",
      blue700: "#0070AE",
      red700: "#D42E30",
      green700: "#2F7C34",
      // Neutral Colors
      white: "#FFFFFF",
      black: "#000000"
    }
  }
}, W = {
  // IQOS Font Family
  iqos: {
    regular: "IQOSW10-Regular",
    bold: "IQOSW10-Bold"
  },
  // ZYN Font Family
  zyn: {
    regular: "ZYNSans_W_Rg",
    bold: "ZYNSans_W_XBd"
  }
}, $ = {
  // IQOS uses IQOS font for IQOS and VEEV brands
  iqos: {
    body: W.iqos.regular,
    heading: W.iqos.bold
  },
  // VEEV also uses IQOS font
  veev: {
    body: W.iqos.regular,
    heading: W.iqos.bold
  },
  // ZYN uses ZYN font
  zyn: {
    body: W.zyn.regular,
    heading: W.zyn.bold
  }
}, C = {
  regular: "400",
  bold: "700"
}, ne = {
  Spacer: {
    10: a.Dimensions.space[10]
  }
}, yr = {
  // IQOS Brand Tokens
  iqos: {
    // Primary Colors (referencing base brand colors)
    primary: {
      main: a.Colors.iqos.turquoise,
      light: a.Colors.iqos.warmWhite,
      dark: a.Colors.iqos.anthracite
    },
    // Tints (referencing base brand colors)
    tints: {
      dark5: a.Colors.iqos.dark5,
      dark15: a.Colors.iqos.dark15,
      dark30: a.Colors.iqos.dark30,
      dark50: a.Colors.iqos.dark50,
      dark65: a.Colors.iqos.dark65,
      dark85: a.Colors.iqos.dark85,
      darker140: a.Colors.iqos.darker140
    },
    // Global Colors (referencing base global colTheors)
    global: {
      warning: a.Colors.global.orange700,
      error: a.Colors.global.red700,
      info: a.Colors.global.blue700,
      success: a.Colors.global.green700,
      fullWhite: a.Colors.global.white,
      fullBlack: a.Colors.global.black
    },
    // Typography
    typography: {
      fontFamily: {
        body: $.iqos.body,
        heading: $.iqos.heading
      },
      fontWeight: {
        regular: C.regular,
        bold: C.bold,
        button: C.regular
      }
    },
    buttonRadius: ne.Spacer[10]
  },
  // ZYN Brand Tokens
  zyn: {
    // Primary Colors (referencing base brand colors)
    primary: {
      main: a.Colors.zyn.blue,
      light: a.Colors.zyn.white,
      dark: a.Colors.zyn.darkBlue
    },
    // Tints (referencing base brand colors)
    tints: {
      dark5: a.Colors.zyn.dark5,
      dark15: a.Colors.zyn.dark15,
      dark30: a.Colors.zyn.dark30,
      dark50: a.Colors.zyn.dark50,
      dark65: a.Colors.zyn.dark65,
      dark85: a.Colors.zyn.dark85,
      darker140: a.Colors.zyn.darker140
    },
    // Global Colors (referencing base global colors)
    global: {
      warning: a.Colors.global.orange700,
      error: a.Colors.global.red700,
      info: a.Colors.global.blue700,
      success: a.Colors.global.green700,
      fullWhite: a.Colors.global.white,
      fullBlack: a.Colors.global.black
    },
    // Typography
    typography: {
      fontFamily: {
        body: $.zyn.body,
        heading: $.zyn.heading
      },
      fontWeight: {
        regular: C.regular,
        bold: C.bold,
        button: C.bold
      }
    },
    buttonRadius: ne.Spacer[10]
  },
  // VEEV Brand Tokens
  veev: {
    // Primary Colors (referencing base brand colors)
    primary: {
      main: a.Colors.veev.deepPurple,
      light: a.Colors.veev.pureWhite,
      dark: a.Colors.veev.deepBlue
    },
    // Tints (referencing base brand colors)
    tints: {
      dark5: a.Colors.veev.deepPurple5,
      dark15: a.Colors.veev.deepPurple15,
      dark30: a.Colors.veev.deepPurple30,
      dark50: a.Colors.veev.deepPurple50,
      dark65: a.Colors.veev.deepPurple65,
      dark85: a.Colors.veev.deepPurple85,
      darker140: a.Colors.veev.deepPurpleDarker
    },
    // Global Colors (referencing base global colors)
    global: {
      warning: a.Colors.global.orange700,
      error: a.Colors.global.red700,
      info: a.Colors.global.blue700,
      success: a.Colors.global.green700,
      fullWhite: a.Colors.global.white,
      fullBlack: a.Colors.global.black
    },
    // Typography
    typography: {
      fontFamily: {
        body: $.veev.body,
        heading: $.veev.heading
      },
      fontWeight: {
        regular: C.regular,
        bold: C.bold,
        button: C.regular
      }
    },
    buttonRadius: ne.Spacer[10]
  }
}, kr = ({
  children: q,
  colors: E = ["#ff6b6b", "#4ecdc4", "#45b7d1"],
  direction: I = "to right",
  fontSize: m = "2rem",
  fontFamily: _ = "inherit",
  animate: S = !1,
  animationDuration: T = "3s",
  className: h = "",
  style: f = {},
  brand: R = "iqos"
}) => {
  const d = yr[R], y = _ === "inherit" || !_ ? d.typography.fontFamily.heading : _, k = d.typography.fontWeight.bold, x = E.join(", "), j = Math.random().toString(36).substr(2, 9), G = {
    fontSize: m,
    fontWeight: k,
    fontFamily: y,
    display: "inline-block",
    ...f
  }, B = `gradient-text-${j}`, F = `
    .${B} {
      background: linear-gradient(${I}, ${x});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      ${S ? `
        background-size: 200% 200%;
        animation: gradientShift-${j} ${T} ease infinite;
      ` : ""}
    }
    
    @supports not (-webkit-background-clip: text) {
      .${B} {
        color: ${E[0] || "#000"};
        background: none;
        -webkit-text-fill-color: initial;
      }
    }
    
    ${S ? `
      @keyframes gradientShift-${j} {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    ` : ""}
  `;
  return /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
    /* @__PURE__ */ K.jsx("style", { dangerouslySetInnerHTML: { __html: F } }),
    /* @__PURE__ */ K.jsx("span", { className: `${B} ${h}`.trim(), style: G, children: q })
  ] });
};
export {
  kr as GradientText
};
