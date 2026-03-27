var u0 = Object.defineProperty;
var d0 = (e, t, n) => t in e ? u0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var be = (e, t, n) => d0(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as go } from "react/jsx-runtime";
import * as p from "react";
import St, { useRef as qr, useState as po, useLayoutEffect as f0, useEffect as mo, useMemo as dr, useCallback as yi, memo as h0 } from "react";
import { useDispatcherWith as yg, componentStore as xc } from "routelit-client";
function bg(e = "This should not happen") {
  throw new Error(e);
}
function rn(e, t = "Assertion failed") {
  if (!e)
    return bg(t);
}
function Ri(e, t) {
  return bg(t ?? "Hell froze over");
}
function g0(e, t) {
  try {
    return e();
  } catch {
    return t;
  }
}
const yu = Object.prototype.hasOwnProperty;
function Wr(e, t) {
  let n, r;
  if (e === t)
    return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date)
      return e.getTime() === t.getTime();
    if (n === RegExp)
      return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length)
        for (; r-- && Wr(e[r], t[r]); )
          ;
      return r === -1;
    }
    if (!n || typeof e == "object") {
      r = 0;
      for (n in e)
        if (yu.call(e, n) && ++r && !yu.call(t, n) || !(n in t) || !Wr(e[n], t[n]))
          return !1;
      return Object.keys(t).length === r;
    }
  }
  return e !== e && t !== t;
}
var to = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function er(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oa, bu;
function p0() {
  if (bu) return oa;
  bu = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(r, i) {
    return r != null && t.call(r, i);
  }
  return oa = n, oa;
}
var aa, wu;
function An() {
  if (wu) return aa;
  wu = 1;
  var e = Array.isArray;
  return aa = e, aa;
}
var sa, Su;
function wg() {
  if (Su) return sa;
  Su = 1;
  var e = typeof to == "object" && to && to.Object === Object && to;
  return sa = e, sa;
}
var la, Cu;
function Pn() {
  if (Cu) return la;
  Cu = 1;
  var e = wg(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return la = n, la;
}
var ca, ku;
function Ti() {
  if (ku) return ca;
  ku = 1;
  var e = Pn(), t = e.Symbol;
  return ca = t, ca;
}
var ua, xu;
function m0() {
  if (xu) return ua;
  xu = 1;
  var e = Ti(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, i = e ? e.toStringTag : void 0;
  function o(s) {
    var a = n.call(s, i), l = s[i];
    try {
      s[i] = void 0;
      var c = !0;
    } catch {
    }
    var u = r.call(s);
    return c && (a ? s[i] = l : delete s[i]), u;
  }
  return ua = o, ua;
}
var da, Ru;
function v0() {
  if (Ru) return da;
  Ru = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return da = n, da;
}
var fa, _u;
function Ei() {
  if (_u) return fa;
  _u = 1;
  var e = Ti(), t = m0(), n = v0(), r = "[object Null]", i = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function s(a) {
    return a == null ? a === void 0 ? i : r : o && o in Object(a) ? t(a) : n(a);
  }
  return fa = s, fa;
}
var ha, Tu;
function Mi() {
  if (Tu) return ha;
  Tu = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return ha = e, ha;
}
var ga, Eu;
function To() {
  if (Eu) return ga;
  Eu = 1;
  var e = Ei(), t = Mi(), n = "[object Symbol]";
  function r(i) {
    return typeof i == "symbol" || t(i) && e(i) == n;
  }
  return ga = r, ga;
}
var pa, Mu;
function Rc() {
  if (Mu) return pa;
  Mu = 1;
  var e = An(), t = To(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function i(o, s) {
    if (e(o))
      return !1;
    var a = typeof o;
    return a == "number" || a == "symbol" || a == "boolean" || o == null || t(o) ? !0 : r.test(o) || !n.test(o) || s != null && o in Object(s);
  }
  return pa = i, pa;
}
var ma, Iu;
function gr() {
  if (Iu) return ma;
  Iu = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return ma = e, ma;
}
var va, Au;
function Sg() {
  if (Au) return va;
  Au = 1;
  var e = Ei(), t = gr(), n = "[object AsyncFunction]", r = "[object Function]", i = "[object GeneratorFunction]", o = "[object Proxy]";
  function s(a) {
    if (!t(a))
      return !1;
    var l = e(a);
    return l == r || l == i || l == n || l == o;
  }
  return va = s, va;
}
var ya, Pu;
function y0() {
  if (Pu) return ya;
  Pu = 1;
  var e = Pn(), t = e["__core-js_shared__"];
  return ya = t, ya;
}
var ba, Ou;
function b0() {
  if (Ou) return ba;
  Ou = 1;
  var e = y0(), t = function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }();
  function n(r) {
    return !!t && t in r;
  }
  return ba = n, ba;
}
var wa, Du;
function Cg() {
  if (Du) return wa;
  Du = 1;
  var e = Function.prototype, t = e.toString;
  function n(r) {
    if (r != null) {
      try {
        return t.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return wa = n, wa;
}
var Sa, Lu;
function w0() {
  if (Lu) return Sa;
  Lu = 1;
  var e = Sg(), t = b0(), n = gr(), r = Cg(), i = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, s = Function.prototype, a = Object.prototype, l = s.toString, c = a.hasOwnProperty, u = RegExp(
    "^" + l.call(c).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function h(d) {
    if (!n(d) || t(d))
      return !1;
    var g = e(d) ? u : o;
    return g.test(r(d));
  }
  return Sa = h, Sa;
}
var Ca, Fu;
function S0() {
  if (Fu) return Ca;
  Fu = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return Ca = e, Ca;
}
var ka, qu;
function pr() {
  if (qu) return ka;
  qu = 1;
  var e = w0(), t = S0();
  function n(r, i) {
    var o = t(r, i);
    return e(o) ? o : void 0;
  }
  return ka = n, ka;
}
var xa, Hu;
function Eo() {
  if (Hu) return xa;
  Hu = 1;
  var e = pr(), t = e(Object, "create");
  return xa = t, xa;
}
var Ra, zu;
function C0() {
  if (zu) return Ra;
  zu = 1;
  var e = Eo();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ra = t, Ra;
}
var _a, $u;
function k0() {
  if ($u) return _a;
  $u = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return _a = e, _a;
}
var Ta, Nu;
function x0() {
  if (Nu) return Ta;
  Nu = 1;
  var e = Eo(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function i(o) {
    var s = this.__data__;
    if (e) {
      var a = s[o];
      return a === t ? void 0 : a;
    }
    return r.call(s, o) ? s[o] : void 0;
  }
  return Ta = i, Ta;
}
var Ea, Bu;
function R0() {
  if (Bu) return Ea;
  Bu = 1;
  var e = Eo(), t = Object.prototype, n = t.hasOwnProperty;
  function r(i) {
    var o = this.__data__;
    return e ? o[i] !== void 0 : n.call(o, i);
  }
  return Ea = r, Ea;
}
var Ma, Wu;
function _0() {
  if (Wu) return Ma;
  Wu = 1;
  var e = Eo(), t = "__lodash_hash_undefined__";
  function n(r, i) {
    var o = this.__data__;
    return this.size += this.has(r) ? 0 : 1, o[r] = e && i === void 0 ? t : i, this;
  }
  return Ma = n, Ma;
}
var Ia, ju;
function T0() {
  if (ju) return Ia;
  ju = 1;
  var e = C0(), t = k0(), n = x0(), r = R0(), i = _0();
  function o(s) {
    var a = -1, l = s == null ? 0 : s.length;
    for (this.clear(); ++a < l; ) {
      var c = s[a];
      this.set(c[0], c[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = i, Ia = o, Ia;
}
var Aa, Uu;
function E0() {
  if (Uu) return Aa;
  Uu = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Aa = e, Aa;
}
var Pa, Xu;
function _c() {
  if (Xu) return Pa;
  Xu = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Pa = e, Pa;
}
var Oa, Yu;
function Mo() {
  if (Yu) return Oa;
  Yu = 1;
  var e = _c();
  function t(n, r) {
    for (var i = n.length; i--; )
      if (e(n[i][0], r))
        return i;
    return -1;
  }
  return Oa = t, Oa;
}
var Da, Gu;
function M0() {
  if (Gu) return Da;
  Gu = 1;
  var e = Mo(), t = Array.prototype, n = t.splice;
  function r(i) {
    var o = this.__data__, s = e(o, i);
    if (s < 0)
      return !1;
    var a = o.length - 1;
    return s == a ? o.pop() : n.call(o, s, 1), --this.size, !0;
  }
  return Da = r, Da;
}
var La, Ku;
function I0() {
  if (Ku) return La;
  Ku = 1;
  var e = Mo();
  function t(n) {
    var r = this.__data__, i = e(r, n);
    return i < 0 ? void 0 : r[i][1];
  }
  return La = t, La;
}
var Fa, Vu;
function A0() {
  if (Vu) return Fa;
  Vu = 1;
  var e = Mo();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return Fa = t, Fa;
}
var qa, Zu;
function P0() {
  if (Zu) return qa;
  Zu = 1;
  var e = Mo();
  function t(n, r) {
    var i = this.__data__, o = e(i, n);
    return o < 0 ? (++this.size, i.push([n, r])) : i[o][1] = r, this;
  }
  return qa = t, qa;
}
var Ha, Ju;
function Io() {
  if (Ju) return Ha;
  Ju = 1;
  var e = E0(), t = M0(), n = I0(), r = A0(), i = P0();
  function o(s) {
    var a = -1, l = s == null ? 0 : s.length;
    for (this.clear(); ++a < l; ) {
      var c = s[a];
      this.set(c[0], c[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = i, Ha = o, Ha;
}
var za, Qu;
function Tc() {
  if (Qu) return za;
  Qu = 1;
  var e = pr(), t = Pn(), n = e(t, "Map");
  return za = n, za;
}
var $a, ed;
function O0() {
  if (ed) return $a;
  ed = 1;
  var e = T0(), t = Io(), n = Tc();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return $a = r, $a;
}
var Na, td;
function D0() {
  if (td) return Na;
  td = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return Na = e, Na;
}
var Ba, nd;
function Ao() {
  if (nd) return Ba;
  nd = 1;
  var e = D0();
  function t(n, r) {
    var i = n.__data__;
    return e(r) ? i[typeof r == "string" ? "string" : "hash"] : i.map;
  }
  return Ba = t, Ba;
}
var Wa, rd;
function L0() {
  if (rd) return Wa;
  rd = 1;
  var e = Ao();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return Wa = t, Wa;
}
var ja, id;
function F0() {
  if (id) return ja;
  id = 1;
  var e = Ao();
  function t(n) {
    return e(this, n).get(n);
  }
  return ja = t, ja;
}
var Ua, od;
function q0() {
  if (od) return Ua;
  od = 1;
  var e = Ao();
  function t(n) {
    return e(this, n).has(n);
  }
  return Ua = t, Ua;
}
var Xa, ad;
function H0() {
  if (ad) return Xa;
  ad = 1;
  var e = Ao();
  function t(n, r) {
    var i = e(this, n), o = i.size;
    return i.set(n, r), this.size += i.size == o ? 0 : 1, this;
  }
  return Xa = t, Xa;
}
var Ya, sd;
function Ec() {
  if (sd) return Ya;
  sd = 1;
  var e = O0(), t = L0(), n = F0(), r = q0(), i = H0();
  function o(s) {
    var a = -1, l = s == null ? 0 : s.length;
    for (this.clear(); ++a < l; ) {
      var c = s[a];
      this.set(c[0], c[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = i, Ya = o, Ya;
}
var Ga, ld;
function z0() {
  if (ld) return Ga;
  ld = 1;
  var e = Ec(), t = "Expected a function";
  function n(r, i) {
    if (typeof r != "function" || i != null && typeof i != "function")
      throw new TypeError(t);
    var o = function() {
      var s = arguments, a = i ? i.apply(this, s) : s[0], l = o.cache;
      if (l.has(a))
        return l.get(a);
      var c = r.apply(this, s);
      return o.cache = l.set(a, c) || l, c;
    };
    return o.cache = new (n.Cache || e)(), o;
  }
  return n.Cache = e, Ga = n, Ga;
}
var Ka, cd;
function $0() {
  if (cd) return Ka;
  cd = 1;
  var e = z0(), t = 500;
  function n(r) {
    var i = e(r, function(s) {
      return o.size === t && o.clear(), s;
    }), o = i.cache;
    return i;
  }
  return Ka = n, Ka;
}
var Va, ud;
function N0() {
  if (ud) return Va;
  ud = 1;
  var e = $0(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(i) {
    var o = [];
    return i.charCodeAt(0) === 46 && o.push(""), i.replace(t, function(s, a, l, c) {
      o.push(l ? c.replace(n, "$1") : a || s);
    }), o;
  });
  return Va = r, Va;
}
var Za, dd;
function B0() {
  if (dd) return Za;
  dd = 1;
  function e(t, n) {
    for (var r = -1, i = t == null ? 0 : t.length, o = Array(i); ++r < i; )
      o[r] = n(t[r], r, t);
    return o;
  }
  return Za = e, Za;
}
var Ja, fd;
function W0() {
  if (fd) return Ja;
  fd = 1;
  var e = Ti(), t = B0(), n = An(), r = To(), i = e ? e.prototype : void 0, o = i ? i.toString : void 0;
  function s(a) {
    if (typeof a == "string")
      return a;
    if (n(a))
      return t(a, s) + "";
    if (r(a))
      return o ? o.call(a) : "";
    var l = a + "";
    return l == "0" && 1 / a == -1 / 0 ? "-0" : l;
  }
  return Ja = s, Ja;
}
var Qa, hd;
function j0() {
  if (hd) return Qa;
  hd = 1;
  var e = W0();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return Qa = t, Qa;
}
var es, gd;
function kg() {
  if (gd) return es;
  gd = 1;
  var e = An(), t = Rc(), n = N0(), r = j0();
  function i(o, s) {
    return e(o) ? o : t(o, s) ? [o] : n(r(o));
  }
  return es = i, es;
}
var ts, pd;
function U0() {
  if (pd) return ts;
  pd = 1;
  var e = Ei(), t = Mi(), n = "[object Arguments]";
  function r(i) {
    return t(i) && e(i) == n;
  }
  return ts = r, ts;
}
var ns, md;
function Mc() {
  if (md) return ns;
  md = 1;
  var e = U0(), t = Mi(), n = Object.prototype, r = n.hasOwnProperty, i = n.propertyIsEnumerable, o = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(s) {
    return t(s) && r.call(s, "callee") && !i.call(s, "callee");
  };
  return ns = o, ns;
}
var rs, vd;
function Ic() {
  if (vd) return rs;
  vd = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(r, i) {
    var o = typeof r;
    return i = i ?? e, !!i && (o == "number" || o != "symbol" && t.test(r)) && r > -1 && r % 1 == 0 && r < i;
  }
  return rs = n, rs;
}
var is, yd;
function Ac() {
  if (yd) return is;
  yd = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return is = t, is;
}
var os, bd;
function Po() {
  if (bd) return os;
  bd = 1;
  var e = To();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return os = t, os;
}
var as, wd;
function xg() {
  if (wd) return as;
  wd = 1;
  var e = kg(), t = Mc(), n = An(), r = Ic(), i = Ac(), o = Po();
  function s(a, l, c) {
    l = e(l, a);
    for (var u = -1, h = l.length, d = !1; ++u < h; ) {
      var g = o(l[u]);
      if (!(d = a != null && c(a, g)))
        break;
      a = a[g];
    }
    return d || ++u != h ? d : (h = a == null ? 0 : a.length, !!h && i(h) && r(g, h) && (n(a) || t(a)));
  }
  return as = s, as;
}
var ss, Sd;
function X0() {
  if (Sd) return ss;
  Sd = 1;
  var e = p0(), t = xg();
  function n(r, i) {
    return r != null && t(r, i, e);
  }
  return ss = n, ss;
}
var Y0 = X0();
const G0 = /* @__PURE__ */ er(Y0), vo = null, Pc = void 0;
var ae;
(function(e) {
  e.Uri = "uri", e.Text = "text", e.Image = "image", e.RowID = "row-id", e.Number = "number", e.Bubble = "bubble", e.Boolean = "boolean", e.Loading = "loading", e.Markdown = "markdown", e.Drilldown = "drilldown", e.Protected = "protected", e.Custom = "custom";
})(ae || (ae = {}));
var Cd;
(function(e) {
  e.HeaderRowID = "headerRowID", e.HeaderCode = "headerCode", e.HeaderNumber = "headerNumber", e.HeaderString = "headerString", e.HeaderBoolean = "headerBoolean", e.HeaderAudioUri = "headerAudioUri", e.HeaderVideoUri = "headerVideoUri", e.HeaderEmoji = "headerEmoji", e.HeaderImage = "headerImage", e.HeaderUri = "headerUri", e.HeaderPhone = "headerPhone", e.HeaderMarkdown = "headerMarkdown", e.HeaderDate = "headerDate", e.HeaderTime = "headerTime", e.HeaderEmail = "headerEmail", e.HeaderReference = "headerReference", e.HeaderIfThenElse = "headerIfThenElse", e.HeaderSingleValue = "headerSingleValue", e.HeaderLookup = "headerLookup", e.HeaderTextTemplate = "headerTextTemplate", e.HeaderMath = "headerMath", e.HeaderRollup = "headerRollup", e.HeaderJoinStrings = "headerJoinStrings", e.HeaderSplitString = "headerSplitString", e.HeaderGeoDistance = "headerGeoDistance", e.HeaderArray = "headerArray", e.RowOwnerOverlay = "rowOwnerOverlay", e.ProtectedColumnOverlay = "protectedColumnOverlay";
})(Cd || (Cd = {}));
var yo;
(function(e) {
  e.Triangle = "triangle", e.Dots = "dots";
})(yo || (yo = {}));
function no(e) {
  return "width" in e && typeof e.width == "number";
}
async function kd(e) {
  return typeof e == "object" ? e : await e();
}
function Hr(e) {
  return !(e.kind === ae.Loading || e.kind === ae.Bubble || e.kind === ae.RowID || e.kind === ae.Protected || e.kind === ae.Drilldown);
}
function $r(e) {
  return e.kind === fn.Marker || e.kind === fn.NewRow;
}
function pi(e) {
  if (!Hr(e) || e.kind === ae.Image)
    return !1;
  if (e.kind === ae.Text || e.kind === ae.Number || e.kind === ae.Markdown || e.kind === ae.Uri || e.kind === ae.Custom || e.kind === ae.Boolean)
    return e.readonly !== !0;
  Ri(e, "A cell was passed with an invalid kind");
}
function K0(e) {
  return G0(e, "editor");
}
function fc(e) {
  return !(e.readonly ?? !1);
}
var fn;
(function(e) {
  e.NewRow = "new-row", e.Marker = "marker";
})(fn || (fn = {}));
function V0(e) {
  if (e.length === 0)
    return [];
  const t = [...e], n = [];
  t.sort(function(r, i) {
    return r[0] - i[0];
  }), n.push([...t[0]]);
  for (const r of t.slice(1)) {
    const i = n[n.length - 1];
    i[1] < r[0] ? n.push([...r]) : i[1] < r[1] && (i[1] = r[1]);
  }
  return n;
}
let xd;
const zn = class zn {
  constructor(t) {
    be(this, "items");
    this.items = t;
  }
  offset(t) {
    if (t === 0)
      return this;
    const n = this.items.map((r) => [r[0] + t, r[1] + t]);
    return new zn(n);
  }
  add(t) {
    const n = typeof t == "number" ? [t, t + 1] : t, r = V0([...this.items, n]);
    return new zn(r);
  }
  remove(t) {
    const n = [...this.items], r = typeof t == "number" ? t : t[0], i = typeof t == "number" ? t + 1 : t[1];
    for (const [o, s] of n.entries()) {
      const [a, l] = s;
      if (a <= i && r <= l) {
        const c = [];
        a < r && c.push([a, r]), i < l && c.push([i, l]), n.splice(o, 1, ...c);
      }
    }
    return new zn(n);
  }
  first() {
    if (this.items.length !== 0)
      return this.items[0][0];
  }
  last() {
    if (this.items.length !== 0)
      return this.items.slice(-1)[0][1] - 1;
  }
  hasIndex(t) {
    for (let n = 0; n < this.items.length; n++) {
      const [r, i] = this.items[n];
      if (t >= r && t < i)
        return !0;
    }
    return !1;
  }
  hasAll(t) {
    for (let n = t[0]; n < t[1]; n++)
      if (!this.hasIndex(n))
        return !1;
    return !0;
  }
  some(t) {
    for (const n of this)
      if (t(n))
        return !0;
    return !1;
  }
  equals(t) {
    if (t === this)
      return !0;
    if (t.items.length !== this.items.length)
      return !1;
    for (let n = 0; n < this.items.length; n++) {
      const r = t.items[n], i = this.items[n];
      if (r[0] !== i[0] || r[1] !== i[1])
        return !1;
    }
    return !0;
  }
  // Really old JS wont have access to the iterator and babel will stop people using it
  // when trying to support browsers so old we don't support them anyway. What goes on
  // between an engineer and their bundler in the privacy of their CI server is none of
  // my business anyway.
  toArray() {
    const t = [];
    for (const [n, r] of this.items)
      for (let i = n; i < r; i++)
        t.push(i);
    return t;
  }
  get length() {
    let t = 0;
    for (const [n, r] of this.items)
      t += r - n;
    return t;
  }
  *[Symbol.iterator]() {
    for (const [t, n] of this.items)
      for (let r = t; r < n; r++)
        yield r;
  }
};
be(zn, "empty", () => xd ?? (xd = new zn([]))), be(zn, "fromSingleSelection", (t) => zn.empty().add(t));
let rt = zn;
function Z0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var J0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ls = /* @__PURE__ */ Z0(
  function(e) {
    return J0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Q0 = function() {
  const t = Array.prototype.slice.call(arguments).filter(Boolean), n = {}, r = [];
  t.forEach((o) => {
    (o ? o.split(" ") : []).forEach((a) => {
      if (a.startsWith("atm_")) {
        const [, l] = a.split("_");
        n[l] = a;
      } else
        r.push(a);
    });
  });
  const i = [];
  for (const o in n)
    Object.prototype.hasOwnProperty.call(n, o) && i.push(n[o]);
  return i.push(...r), i.join(" ");
}, Rd = Q0, bi = {}, em = (e) => e.toUpperCase() === e, tm = (e) => (t) => e.indexOf(t) === -1, Rg = (e, t) => {
  const n = {};
  return Object.keys(e).filter(tm(t)).forEach((r) => {
    n[r] = e[r];
  }), n;
};
function nm(e, t, n) {
  const r = Rg(t, n);
  if (!e) {
    const i = typeof ls == "function" ? { default: ls } : ls;
    Object.keys(r).forEach((o) => {
      i.default(o) || delete r[o];
    });
  }
  return r;
}
var rm = (e, t) => {
  if (bi.NODE_ENV !== "production") {
    if (typeof e == "string" || typeof e == "number" && isFinite(e))
      return;
    const n = typeof e == "object" ? JSON.stringify(e) : String(e);
    console.warn(
      `An interpolation evaluated to '${n}' in the component '${t}', which is probably a mistake. You should explicitly cast or transform the value to a string.`
    );
  }
}, im = 0;
function _d(e) {
  var t;
  let n = "";
  return bi.NODE_ENV === "test" && (n += `mocked-styled-${im++}`, (t = e == null ? void 0 : e.__linaria) != null && t.className && (n += ` ${e.__linaria.className}`)), (r) => {
    if (bi.NODE_ENV !== "production" && bi.NODE_ENV !== "test" && Array.isArray(r))
      throw new Error(
        'Using the "styled" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly. See https://github.com/callstack/linaria#setup'
      );
    const i = (s, a) => {
      const { as: l = e, class: c = n } = s, u = r.propsAsIs === void 0 ? !(typeof l == "string" && l.indexOf("-") === -1 && !em(l[0])) : r.propsAsIs, h = nm(u, s, [
        "as",
        "class"
      ]);
      h.ref = a, h.className = r.atomic ? Rd(r.class, h.className || c) : Rd(h.className || c, r.class);
      const { vars: d } = r;
      if (d) {
        const g = {};
        for (const R in d) {
          const I = d[R], y = I[0], C = I[1] || "", A = typeof y == "function" ? y(s) : y;
          rm(A, r.name), g[`--${R}`] = `${A}${C}`;
        }
        const f = h.style || {}, v = Object.keys(f);
        v.length > 0 && v.forEach((R) => {
          g[R] = f[R];
        }), h.style = g;
      }
      return e.__linaria && e !== l ? (h.as = l, St.createElement(e, h)) : St.createElement(l, h);
    }, o = St.forwardRef ? St.forwardRef(i) : (s) => {
      const a = Rg(s, ["innerRef"]);
      return i(a, s.innerRef);
    };
    return o.displayName = r.name, o.__linaria = {
      className: r.class || n,
      extends: e
    }, o;
  };
}
var an = bi.NODE_ENV !== "production" ? new Proxy(_d, {
  get(e, t) {
    return e(t);
  }
}) : _d;
const om = /* @__PURE__ */ an("div")({
  name: "ImageOverlayEditorStyle",
  class: "gdg-i2iowwq",
  propsAsIs: !1
});
var cs = {}, ri = {}, ro = {}, io = {}, oo = { exports: {} }, ao = { exports: {} }, ot = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Td;
function am() {
  if (Td) return ot;
  Td = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, f = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function C(S) {
    if (typeof S == "object" && S !== null) {
      var M = S.$$typeof;
      switch (M) {
        case t:
          switch (S = S.type, S) {
            case l:
            case c:
            case r:
            case o:
            case i:
            case h:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case a:
                case u:
                case f:
                case g:
                case s:
                  return S;
                default:
                  return M;
              }
          }
        case n:
          return M;
      }
    }
  }
  function A(S) {
    return C(S) === c;
  }
  return ot.AsyncMode = l, ot.ConcurrentMode = c, ot.ContextConsumer = a, ot.ContextProvider = s, ot.Element = t, ot.ForwardRef = u, ot.Fragment = r, ot.Lazy = f, ot.Memo = g, ot.Portal = n, ot.Profiler = o, ot.StrictMode = i, ot.Suspense = h, ot.isAsyncMode = function(S) {
    return A(S) || C(S) === l;
  }, ot.isConcurrentMode = A, ot.isContextConsumer = function(S) {
    return C(S) === a;
  }, ot.isContextProvider = function(S) {
    return C(S) === s;
  }, ot.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, ot.isForwardRef = function(S) {
    return C(S) === u;
  }, ot.isFragment = function(S) {
    return C(S) === r;
  }, ot.isLazy = function(S) {
    return C(S) === f;
  }, ot.isMemo = function(S) {
    return C(S) === g;
  }, ot.isPortal = function(S) {
    return C(S) === n;
  }, ot.isProfiler = function(S) {
    return C(S) === o;
  }, ot.isStrictMode = function(S) {
    return C(S) === i;
  }, ot.isSuspense = function(S) {
    return C(S) === h;
  }, ot.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === c || S === o || S === i || S === h || S === d || typeof S == "object" && S !== null && (S.$$typeof === f || S.$$typeof === g || S.$$typeof === s || S.$$typeof === a || S.$$typeof === u || S.$$typeof === R || S.$$typeof === I || S.$$typeof === y || S.$$typeof === v);
  }, ot.typeOf = C, ot;
}
var at = {}, Ed;
function sm() {
  if (Ed) return at;
  Ed = 1;
  var e = {};
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return e.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, c = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, g = t ? Symbol.for("react.suspense_list") : 60120, f = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, R = t ? Symbol.for("react.block") : 60121, I = t ? Symbol.for("react.fundamental") : 60117, y = t ? Symbol.for("react.responder") : 60118, C = t ? Symbol.for("react.scope") : 60119;
    function A(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === i || V === u || V === s || V === o || V === d || V === g || typeof V == "object" && V !== null && (V.$$typeof === v || V.$$typeof === f || V.$$typeof === a || V.$$typeof === l || V.$$typeof === h || V.$$typeof === I || V.$$typeof === y || V.$$typeof === C || V.$$typeof === R);
    }
    function S(V) {
      if (typeof V == "object" && V !== null) {
        var Ee = V.$$typeof;
        switch (Ee) {
          case n:
            var Pe = V.type;
            switch (Pe) {
              case c:
              case u:
              case i:
              case s:
              case o:
              case d:
                return Pe;
              default:
                var dt = Pe && Pe.$$typeof;
                switch (dt) {
                  case l:
                  case h:
                  case v:
                  case f:
                  case a:
                    return dt;
                  default:
                    return Ee;
                }
            }
          case r:
            return Ee;
        }
      }
    }
    var M = c, P = u, E = l, T = a, L = n, x = h, b = i, k = v, _ = f, w = r, z = s, H = o, j = d, re = !1;
    function te(V) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(V) || S(V) === c;
    }
    function O(V) {
      return S(V) === u;
    }
    function N(V) {
      return S(V) === l;
    }
    function J(V) {
      return S(V) === a;
    }
    function oe(V) {
      return typeof V == "object" && V !== null && V.$$typeof === n;
    }
    function $(V) {
      return S(V) === h;
    }
    function ce(V) {
      return S(V) === i;
    }
    function se(V) {
      return S(V) === v;
    }
    function ie(V) {
      return S(V) === f;
    }
    function pe(V) {
      return S(V) === r;
    }
    function we(V) {
      return S(V) === s;
    }
    function Ce(V) {
      return S(V) === o;
    }
    function Be(V) {
      return S(V) === d;
    }
    at.AsyncMode = M, at.ConcurrentMode = P, at.ContextConsumer = E, at.ContextProvider = T, at.Element = L, at.ForwardRef = x, at.Fragment = b, at.Lazy = k, at.Memo = _, at.Portal = w, at.Profiler = z, at.StrictMode = H, at.Suspense = j, at.isAsyncMode = te, at.isConcurrentMode = O, at.isContextConsumer = N, at.isContextProvider = J, at.isElement = oe, at.isForwardRef = $, at.isFragment = ce, at.isLazy = se, at.isMemo = ie, at.isPortal = pe, at.isProfiler = we, at.isStrictMode = Ce, at.isSuspense = Be, at.isValidElementType = A, at.typeOf = S;
  }(), at;
}
var Md;
function _g() {
  if (Md) return ao.exports;
  Md = 1;
  var e = {};
  return e.NODE_ENV === "production" ? ao.exports = am() : ao.exports = sm(), ao.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var us, Id;
function lm() {
  if (Id) return us;
  Id = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var l = Object.getOwnPropertyNames(s).map(function(u) {
        return s[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return us = i() ? Object.assign : function(o, s) {
    for (var a, l = r(o), c, u = 1; u < arguments.length; u++) {
      a = Object(arguments[u]);
      for (var h in a)
        t.call(a, h) && (l[h] = a[h]);
      if (e) {
        c = e(a);
        for (var d = 0; d < c.length; d++)
          n.call(a, c[d]) && (l[c[d]] = a[c[d]]);
      }
    }
    return l;
  }, us;
}
var ds, Ad;
function Oc() {
  if (Ad) return ds;
  Ad = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ds = e, ds;
}
var fs, Pd;
function Tg() {
  return Pd || (Pd = 1, fs = Function.call.bind(Object.prototype.hasOwnProperty)), fs;
}
var hs, Od;
function cm() {
  if (Od) return hs;
  Od = 1;
  var e = {}, t = function() {
  };
  if (e.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ Oc(), r = {}, i = /* @__PURE__ */ Tg();
    t = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(s, a, l, c, u) {
    if (e.NODE_ENV !== "production") {
      for (var h in s)
        if (i(s, h)) {
          var d;
          try {
            if (typeof s[h] != "function") {
              var g = Error(
                (c || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            d = s[h](a, h, c, l, null, n);
          } catch (v) {
            d = v;
          }
          if (d && !(d instanceof Error) && t(
            (c || "React class") + ": type specification of " + l + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var f = u ? u() : "";
            t(
              "Failed " + l + " type: " + d.message + (f ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    e.NODE_ENV !== "production" && (r = {});
  }, hs = o, hs;
}
var gs, Dd;
function um() {
  if (Dd) return gs;
  Dd = 1;
  var e = {}, t = _g(), n = lm(), r = /* @__PURE__ */ Oc(), i = /* @__PURE__ */ Tg(), o = /* @__PURE__ */ cm(), s = function() {
  };
  e.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return gs = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function d(O) {
      var N = O && (u && O[u] || O[h]);
      if (typeof N == "function")
        return N;
    }
    var g = "<<anonymous>>", f = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: C(),
      arrayOf: A,
      element: S(),
      elementType: M(),
      instanceOf: P,
      node: x(),
      objectOf: T,
      oneOf: E,
      oneOfType: L,
      shape: k,
      exact: _
    };
    function v(O, N) {
      return O === N ? O !== 0 || 1 / O === 1 / N : O !== O && N !== N;
    }
    function R(O, N) {
      this.message = O, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    R.prototype = Error.prototype;
    function I(O) {
      if (e.NODE_ENV !== "production")
        var N = {}, J = 0;
      function oe(ce, se, ie, pe, we, Ce, Be) {
        if (pe = pe || g, Ce = Ce || ie, Be !== r) {
          if (c) {
            var V = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw V.name = "Invariant Violation", V;
          } else if (e.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = pe + ":" + ie;
            !N[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            J < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Ce + "` prop on `" + pe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[Ee] = !0, J++);
          }
        }
        return se[ie] == null ? ce ? se[ie] === null ? new R("The " + we + " `" + Ce + "` is marked as required " + ("in `" + pe + "`, but its value is `null`.")) : new R("The " + we + " `" + Ce + "` is marked as required in " + ("`" + pe + "`, but its value is `undefined`.")) : null : O(se, ie, pe, we, Ce);
      }
      var $ = oe.bind(null, !1);
      return $.isRequired = oe.bind(null, !0), $;
    }
    function y(O) {
      function N(J, oe, $, ce, se, ie) {
        var pe = J[oe], we = H(pe);
        if (we !== O) {
          var Ce = j(pe);
          return new R(
            "Invalid " + ce + " `" + se + "` of type " + ("`" + Ce + "` supplied to `" + $ + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return I(N);
    }
    function C() {
      return I(a);
    }
    function A(O) {
      function N(J, oe, $, ce, se) {
        if (typeof O != "function")
          return new R("Property `" + se + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var ie = J[oe];
        if (!Array.isArray(ie)) {
          var pe = H(ie);
          return new R("Invalid " + ce + " `" + se + "` of type " + ("`" + pe + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var we = 0; we < ie.length; we++) {
          var Ce = O(ie, we, $, ce, se + "[" + we + "]", r);
          if (Ce instanceof Error)
            return Ce;
        }
        return null;
      }
      return I(N);
    }
    function S() {
      function O(N, J, oe, $, ce) {
        var se = N[J];
        if (!l(se)) {
          var ie = H(se);
          return new R("Invalid " + $ + " `" + ce + "` of type " + ("`" + ie + "` supplied to `" + oe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(O);
    }
    function M() {
      function O(N, J, oe, $, ce) {
        var se = N[J];
        if (!t.isValidElementType(se)) {
          var ie = H(se);
          return new R("Invalid " + $ + " `" + ce + "` of type " + ("`" + ie + "` supplied to `" + oe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(O);
    }
    function P(O) {
      function N(J, oe, $, ce, se) {
        if (!(J[oe] instanceof O)) {
          var ie = O.name || g, pe = te(J[oe]);
          return new R("Invalid " + ce + " `" + se + "` of type " + ("`" + pe + "` supplied to `" + $ + "`, expected ") + ("instance of `" + ie + "`."));
        }
        return null;
      }
      return I(N);
    }
    function E(O) {
      if (!Array.isArray(O))
        return e.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function N(J, oe, $, ce, se) {
        for (var ie = J[oe], pe = 0; pe < O.length; pe++)
          if (v(ie, O[pe]))
            return null;
        var we = JSON.stringify(O, function(Be, V) {
          var Ee = j(V);
          return Ee === "symbol" ? String(V) : V;
        });
        return new R("Invalid " + ce + " `" + se + "` of value `" + String(ie) + "` " + ("supplied to `" + $ + "`, expected one of " + we + "."));
      }
      return I(N);
    }
    function T(O) {
      function N(J, oe, $, ce, se) {
        if (typeof O != "function")
          return new R("Property `" + se + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var ie = J[oe], pe = H(ie);
        if (pe !== "object")
          return new R("Invalid " + ce + " `" + se + "` of type " + ("`" + pe + "` supplied to `" + $ + "`, expected an object."));
        for (var we in ie)
          if (i(ie, we)) {
            var Ce = O(ie, we, $, ce, se + "." + we, r);
            if (Ce instanceof Error)
              return Ce;
          }
        return null;
      }
      return I(N);
    }
    function L(O) {
      if (!Array.isArray(O))
        return e.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var N = 0; N < O.length; N++) {
        var J = O[N];
        if (typeof J != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + re(J) + " at index " + N + "."
          ), a;
      }
      function oe($, ce, se, ie, pe) {
        for (var we = [], Ce = 0; Ce < O.length; Ce++) {
          var Be = O[Ce], V = Be($, ce, se, ie, pe, r);
          if (V == null)
            return null;
          V.data && i(V.data, "expectedType") && we.push(V.data.expectedType);
        }
        var Ee = we.length > 0 ? ", expected one of type [" + we.join(", ") + "]" : "";
        return new R("Invalid " + ie + " `" + pe + "` supplied to " + ("`" + se + "`" + Ee + "."));
      }
      return I(oe);
    }
    function x() {
      function O(N, J, oe, $, ce) {
        return w(N[J]) ? null : new R("Invalid " + $ + " `" + ce + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
      }
      return I(O);
    }
    function b(O, N, J, oe, $) {
      return new R(
        (O || "React class") + ": " + N + " type `" + J + "." + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`."
      );
    }
    function k(O) {
      function N(J, oe, $, ce, se) {
        var ie = J[oe], pe = H(ie);
        if (pe !== "object")
          return new R("Invalid " + ce + " `" + se + "` of type `" + pe + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var we in O) {
          var Ce = O[we];
          if (typeof Ce != "function")
            return b($, ce, se, we, j(Ce));
          var Be = Ce(ie, we, $, ce, se + "." + we, r);
          if (Be)
            return Be;
        }
        return null;
      }
      return I(N);
    }
    function _(O) {
      function N(J, oe, $, ce, se) {
        var ie = J[oe], pe = H(ie);
        if (pe !== "object")
          return new R("Invalid " + ce + " `" + se + "` of type `" + pe + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var we = n({}, J[oe], O);
        for (var Ce in we) {
          var Be = O[Ce];
          if (i(O, Ce) && typeof Be != "function")
            return b($, ce, se, Ce, j(Be));
          if (!Be)
            return new R(
              "Invalid " + ce + " `" + se + "` key `" + Ce + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(J[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var V = Be(ie, Ce, $, ce, se + "." + Ce, r);
          if (V)
            return V;
        }
        return null;
      }
      return I(N);
    }
    function w(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(w);
          if (O === null || l(O))
            return !0;
          var N = d(O);
          if (N) {
            var J = N.call(O), oe;
            if (N !== O.entries) {
              for (; !(oe = J.next()).done; )
                if (!w(oe.value))
                  return !1;
            } else
              for (; !(oe = J.next()).done; ) {
                var $ = oe.value;
                if ($ && !w($[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function z(O, N) {
      return O === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function H(O) {
      var N = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : z(N, O) ? "symbol" : N;
    }
    function j(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var N = H(O);
      if (N === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function re(O) {
      var N = j(O);
      switch (N) {
        case "array":
        case "object":
          return "an " + N;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + N;
        default:
          return N;
      }
    }
    function te(O) {
      return !O.constructor || !O.constructor.name ? g : O.constructor.name;
    }
    return f.checkPropTypes = o, f.resetWarningCache = o.resetWarningCache, f.PropTypes = f, f;
  }, gs;
}
var ps, Ld;
function dm() {
  if (Ld) return ps;
  Ld = 1;
  var e = /* @__PURE__ */ Oc();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ps = function() {
    function r(s, a, l, c, u, h) {
      if (h !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, ps;
}
var Fd;
function fm() {
  if (Fd) return oo.exports;
  Fd = 1;
  var e = {};
  if (e.NODE_ENV !== "production") {
    var t = _g(), n = !0;
    oo.exports = /* @__PURE__ */ um()(t.isElement, n);
  } else
    oo.exports = /* @__PURE__ */ dm()();
  return oo.exports;
}
var qd;
function hm() {
  return qd || (qd = 1, function(e) {
    (function(t, n) {
      n(e, St, /* @__PURE__ */ fm());
    })(io, function(t, n, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.setHasSupportToCaptureOption = f;
      var i = s(n), o = s(r);
      function s(y) {
        return y && y.__esModule ? y : {
          default: y
        };
      }
      var a = Object.assign || function(y) {
        for (var C = 1; C < arguments.length; C++) {
          var A = arguments[C];
          for (var S in A)
            Object.prototype.hasOwnProperty.call(A, S) && (y[S] = A[S]);
        }
        return y;
      };
      function l(y, C) {
        var A = {};
        for (var S in y)
          C.indexOf(S) >= 0 || Object.prototype.hasOwnProperty.call(y, S) && (A[S] = y[S]);
        return A;
      }
      function c(y, C) {
        if (!(y instanceof C))
          throw new TypeError("Cannot call a class as a function");
      }
      var u = /* @__PURE__ */ function() {
        function y(C, A) {
          for (var S = 0; S < A.length; S++) {
            var M = A[S];
            M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(C, M.key, M);
          }
        }
        return function(C, A, S) {
          return A && y(C.prototype, A), S && y(C, S), C;
        };
      }();
      function h(y, C) {
        if (!y)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return C && (typeof C == "object" || typeof C == "function") ? C : y;
      }
      function d(y, C) {
        if (typeof C != "function" && C !== null)
          throw new TypeError("Super expression must either be null or a function, not " + typeof C);
        y.prototype = Object.create(C && C.prototype, {
          constructor: {
            value: y,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), C && (Object.setPrototypeOf ? Object.setPrototypeOf(y, C) : y.__proto__ = C);
      }
      var g = !1;
      function f(y) {
        g = y;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function() {
          f(!0);
        } }));
      } catch {
      }
      function v() {
        var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: !0 };
        return g ? y : y.capture;
      }
      function R(y) {
        if ("touches" in y) {
          var C = y.touches[0], A = C.pageX, S = C.pageY;
          return { x: A, y: S };
        }
        var M = y.screenX, P = y.screenY;
        return { x: M, y: P };
      }
      var I = function(y) {
        d(C, y);
        function C() {
          var A;
          c(this, C);
          for (var S = arguments.length, M = Array(S), P = 0; P < S; P++)
            M[P] = arguments[P];
          var E = h(this, (A = C.__proto__ || Object.getPrototypeOf(C)).call.apply(A, [this].concat(M)));
          return E._handleSwipeStart = E._handleSwipeStart.bind(E), E._handleSwipeMove = E._handleSwipeMove.bind(E), E._handleSwipeEnd = E._handleSwipeEnd.bind(E), E._onMouseDown = E._onMouseDown.bind(E), E._onMouseMove = E._onMouseMove.bind(E), E._onMouseUp = E._onMouseUp.bind(E), E._setSwiperRef = E._setSwiperRef.bind(E), E;
        }
        return u(C, [{
          key: "componentDidMount",
          value: function() {
            this.swiper && this.swiper.addEventListener("touchmove", this._handleSwipeMove, v({
              capture: !0,
              passive: !1
            }));
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.swiper && this.swiper.removeEventListener("touchmove", this._handleSwipeMove, v({
              capture: !0,
              passive: !1
            }));
          }
        }, {
          key: "_onMouseDown",
          value: function(S) {
            this.props.allowMouseEvents && (this.mouseDown = !0, document.addEventListener("mouseup", this._onMouseUp), document.addEventListener("mousemove", this._onMouseMove), this._handleSwipeStart(S));
          }
        }, {
          key: "_onMouseMove",
          value: function(S) {
            this.mouseDown && this._handleSwipeMove(S);
          }
        }, {
          key: "_onMouseUp",
          value: function(S) {
            this.mouseDown = !1, document.removeEventListener("mouseup", this._onMouseUp), document.removeEventListener("mousemove", this._onMouseMove), this._handleSwipeEnd(S);
          }
        }, {
          key: "_handleSwipeStart",
          value: function(S) {
            var M = R(S), P = M.x, E = M.y;
            this.moveStart = { x: P, y: E }, this.props.onSwipeStart(S);
          }
        }, {
          key: "_handleSwipeMove",
          value: function(S) {
            if (this.moveStart) {
              var M = R(S), P = M.x, E = M.y, T = P - this.moveStart.x, L = E - this.moveStart.y;
              this.moving = !0;
              var x = this.props.onSwipeMove({
                x: T,
                y: L
              }, S);
              x && S.cancelable && S.preventDefault(), this.movePosition = { deltaX: T, deltaY: L };
            }
          }
        }, {
          key: "_handleSwipeEnd",
          value: function(S) {
            this.props.onSwipeEnd(S);
            var M = this.props.tolerance;
            this.moving && this.movePosition && (this.movePosition.deltaX < -M ? this.props.onSwipeLeft(1, S) : this.movePosition.deltaX > M && this.props.onSwipeRight(1, S), this.movePosition.deltaY < -M ? this.props.onSwipeUp(1, S) : this.movePosition.deltaY > M && this.props.onSwipeDown(1, S)), this.moveStart = null, this.moving = !1, this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function(S) {
            this.swiper = S, this.props.innerRef(S);
          }
        }, {
          key: "render",
          value: function() {
            var S = this.props;
            S.tagName;
            var M = S.className, P = S.style, E = S.children;
            S.allowMouseEvents, S.onSwipeUp, S.onSwipeDown, S.onSwipeLeft, S.onSwipeRight, S.onSwipeStart, S.onSwipeMove, S.onSwipeEnd, S.innerRef, S.tolerance;
            var T = l(S, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return i.default.createElement(
              this.props.tagName,
              a({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className: M,
                style: P
              }, T),
              E
            );
          }
        }]), C;
      }(n.Component);
      I.displayName = "ReactSwipe", I.propTypes = {
        tagName: o.default.string,
        className: o.default.string,
        style: o.default.object,
        children: o.default.node,
        allowMouseEvents: o.default.bool,
        onSwipeUp: o.default.func,
        onSwipeDown: o.default.func,
        onSwipeLeft: o.default.func,
        onSwipeRight: o.default.func,
        onSwipeStart: o.default.func,
        onSwipeMove: o.default.func,
        onSwipeEnd: o.default.func,
        innerRef: o.default.func,
        tolerance: o.default.number.isRequired
      }, I.defaultProps = {
        tagName: "div",
        allowMouseEvents: !1,
        onSwipeUp: function() {
        },
        onSwipeDown: function() {
        },
        onSwipeLeft: function() {
        },
        onSwipeRight: function() {
        },
        onSwipeStart: function() {
        },
        onSwipeMove: function() {
        },
        onSwipeEnd: function() {
        },
        innerRef: function() {
        },
        tolerance: 0
      }, t.default = I;
    });
  }(io)), io;
}
var Hd;
function Eg() {
  return Hd || (Hd = 1, function(e) {
    (function(t, n) {
      n(e, hm());
    })(ro, function(t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = i(n);
      function i(o) {
        return o && o.__esModule ? o : {
          default: o
        };
      }
      t.default = r.default;
    });
  }(ro)), ro;
}
var ii = {}, ms = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var zd;
function gm() {
  return zd || (zd = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var o = "", s = 0; s < arguments.length; s++) {
          var a = arguments[s];
          a && (o = i(o, r(a)));
        }
        return o;
      }
      function r(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return n.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var s = "";
        for (var a in o)
          t.call(o, a) && o[a] && (s = i(s, a));
        return s;
      }
      function i(o, s) {
        return s ? o ? o + " " + s : o + s : o;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(ms)), ms.exports;
}
var $d;
function Mg() {
  if ($d) return ii;
  $d = 1, Object.defineProperty(ii, "__esModule", {
    value: !0
  }), ii.default = void 0;
  var e = t(gm());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function n(i, o, s) {
    return o in i ? Object.defineProperty(i, o, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : i[o] = s, i;
  }
  var r = {
    ROOT: function(o) {
      return (0, e.default)(n({
        "carousel-root": !0
      }, o || "", !!o));
    },
    CAROUSEL: function(o) {
      return (0, e.default)({
        carousel: !0,
        "carousel-slider": o
      });
    },
    WRAPPER: function(o, s) {
      return (0, e.default)({
        "thumbs-wrapper": !o,
        "slider-wrapper": o,
        "axis-horizontal": s === "horizontal",
        "axis-vertical": s !== "horizontal"
      });
    },
    SLIDER: function(o, s) {
      return (0, e.default)({
        thumbs: !o,
        slider: o,
        animated: !s
      });
    },
    ITEM: function(o, s, a) {
      return (0, e.default)({
        thumb: !o,
        slide: o,
        selected: s,
        previous: a
      });
    },
    ARROW_PREV: function(o) {
      return (0, e.default)({
        "control-arrow control-prev": !0,
        "control-disabled": o
      });
    },
    ARROW_NEXT: function(o) {
      return (0, e.default)({
        "control-arrow control-next": !0,
        "control-disabled": o
      });
    },
    DOT: function(o) {
      return (0, e.default)({
        dot: !0,
        selected: o
      });
    }
  };
  return ii.default = r, ii;
}
var oi = {}, ai = {}, Nd;
function pm() {
  if (Nd) return ai;
  Nd = 1, Object.defineProperty(ai, "__esModule", {
    value: !0
  }), ai.outerWidth = void 0;
  var e = function(n) {
    var r = n.offsetWidth, i = getComputedStyle(n);
    return r += parseInt(i.marginLeft) + parseInt(i.marginRight), r;
  };
  return ai.outerWidth = e, ai;
}
var si = {}, Bd;
function Dc() {
  if (Bd) return si;
  Bd = 1, Object.defineProperty(si, "__esModule", {
    value: !0
  }), si.default = void 0;
  var e = function(n, r, i) {
    var o = n === 0 ? n : n + r, s = i === "horizontal" ? [o, 0, 0] : [0, o, 0], a = "translate3d", l = "(" + s.join(",") + ")";
    return a + l;
  };
  return si.default = e, si;
}
var li = {}, Wd;
function Ig() {
  if (Wd) return li;
  Wd = 1, Object.defineProperty(li, "__esModule", {
    value: !0
  }), li.default = void 0;
  var e = function() {
    return window;
  };
  return li.default = e, li;
}
var jd;
function Ag() {
  if (jd) return oi;
  jd = 1, Object.defineProperty(oi, "__esModule", {
    value: !0
  }), oi.default = void 0;
  var e = l(St), t = s(Mg()), n = pm(), r = s(Dc()), i = s(Eg()), o = s(Ig());
  function s(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function a() {
    if (typeof WeakMap != "function") return null;
    var E = /* @__PURE__ */ new WeakMap();
    return a = function() {
      return E;
    }, E;
  }
  function l(E) {
    if (E && E.__esModule)
      return E;
    if (E === null || c(E) !== "object" && typeof E != "function")
      return { default: E };
    var T = a();
    if (T && T.has(E))
      return T.get(E);
    var L = {}, x = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var b in E)
      if (Object.prototype.hasOwnProperty.call(E, b)) {
        var k = x ? Object.getOwnPropertyDescriptor(E, b) : null;
        k && (k.get || k.set) ? Object.defineProperty(L, b, k) : L[b] = E[b];
      }
    return L.default = E, T && T.set(E, L), L;
  }
  function c(E) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? c = function(L) {
      return typeof L;
    } : c = function(L) {
      return L && typeof Symbol == "function" && L.constructor === Symbol && L !== Symbol.prototype ? "symbol" : typeof L;
    }, c(E);
  }
  function u() {
    return u = Object.assign || function(E) {
      for (var T = 1; T < arguments.length; T++) {
        var L = arguments[T];
        for (var x in L)
          Object.prototype.hasOwnProperty.call(L, x) && (E[x] = L[x]);
      }
      return E;
    }, u.apply(this, arguments);
  }
  function h(E, T) {
    if (!(E instanceof T))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(E, T) {
    for (var L = 0; L < T.length; L++) {
      var x = T[L];
      x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(E, x.key, x);
    }
  }
  function g(E, T, L) {
    return T && d(E.prototype, T), E;
  }
  function f(E, T) {
    if (typeof T != "function" && T !== null)
      throw new TypeError("Super expression must either be null or a function");
    E.prototype = Object.create(T && T.prototype, { constructor: { value: E, writable: !0, configurable: !0 } }), T && v(E, T);
  }
  function v(E, T) {
    return v = Object.setPrototypeOf || function(x, b) {
      return x.__proto__ = b, x;
    }, v(E, T);
  }
  function R(E) {
    var T = C();
    return function() {
      var x = A(E), b;
      if (T) {
        var k = A(this).constructor;
        b = Reflect.construct(x, arguments, k);
      } else
        b = x.apply(this, arguments);
      return I(this, b);
    };
  }
  function I(E, T) {
    return T && (c(T) === "object" || typeof T == "function") ? T : y(E);
  }
  function y(E) {
    if (E === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return E;
  }
  function C() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function A(E) {
    return A = Object.setPrototypeOf ? Object.getPrototypeOf : function(L) {
      return L.__proto__ || Object.getPrototypeOf(L);
    }, A(E);
  }
  function S(E, T, L) {
    return T in E ? Object.defineProperty(E, T, { value: L, enumerable: !0, configurable: !0, writable: !0 }) : E[T] = L, E;
  }
  var M = function(T) {
    return T.hasOwnProperty("key");
  }, P = /* @__PURE__ */ function(E) {
    f(L, E);
    var T = R(L);
    function L(x) {
      var b;
      return h(this, L), b = T.call(this, x), S(y(b), "itemsWrapperRef", void 0), S(y(b), "itemsListRef", void 0), S(y(b), "thumbsRef", void 0), S(y(b), "setItemsWrapperRef", function(k) {
        b.itemsWrapperRef = k;
      }), S(y(b), "setItemsListRef", function(k) {
        b.itemsListRef = k;
      }), S(y(b), "setThumbsRef", function(k, _) {
        b.thumbsRef || (b.thumbsRef = []), b.thumbsRef[_] = k;
      }), S(y(b), "updateSizes", function() {
        if (!(!b.props.children || !b.itemsWrapperRef || !b.thumbsRef)) {
          var k = e.Children.count(b.props.children), _ = b.itemsWrapperRef.clientWidth, w = b.props.thumbWidth ? b.props.thumbWidth : (0, n.outerWidth)(b.thumbsRef[0]), z = Math.floor(_ / w), H = z < k, j = H ? k - z : 0;
          b.setState(function(re, te) {
            return {
              itemSize: w,
              visibleItems: z,
              firstItem: H ? b.getFirstItem(te.selectedItem) : 0,
              lastPosition: j,
              showArrows: H
            };
          });
        }
      }), S(y(b), "handleClickItem", function(k, _, w) {
        if (!M(w) || w.key === "Enter") {
          var z = b.props.onSelectItem;
          typeof z == "function" && z(k, _);
        }
      }), S(y(b), "onSwipeStart", function() {
        b.setState({
          swiping: !0
        });
      }), S(y(b), "onSwipeEnd", function() {
        b.setState({
          swiping: !1
        });
      }), S(y(b), "onSwipeMove", function(k) {
        var _ = k.x;
        if (!b.state.itemSize || !b.itemsWrapperRef || !b.state.visibleItems)
          return !1;
        var w = 0, z = e.Children.count(b.props.children), H = -(b.state.firstItem * 100) / b.state.visibleItems, j = Math.max(z - b.state.visibleItems, 0), re = -j * 100 / b.state.visibleItems;
        H === w && _ > 0 && (_ = 0), H === re && _ < 0 && (_ = 0);
        var te = b.itemsWrapperRef.clientWidth, O = H + 100 / (te / _);
        return b.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(N) {
          b.itemsListRef.style[N] = (0, r.default)(O, "%", b.props.axis);
        }), !0;
      }), S(y(b), "slideRight", function(k) {
        b.moveTo(b.state.firstItem - (typeof k == "number" ? k : 1));
      }), S(y(b), "slideLeft", function(k) {
        b.moveTo(b.state.firstItem + (typeof k == "number" ? k : 1));
      }), S(y(b), "moveTo", function(k) {
        k = k < 0 ? 0 : k, k = k >= b.state.lastPosition ? b.state.lastPosition : k, b.setState({
          firstItem: k
        });
      }), b.state = {
        selectedItem: x.selectedItem,
        swiping: !1,
        showArrows: !1,
        firstItem: 0,
        visibleItems: 0,
        lastPosition: 0
      }, b;
    }
    return g(L, [{
      key: "componentDidMount",
      value: function() {
        this.setupThumbs();
      }
    }, {
      key: "componentDidUpdate",
      value: function(b) {
        this.props.selectedItem !== this.state.selectedItem && this.setState({
          selectedItem: this.props.selectedItem,
          firstItem: this.getFirstItem(this.props.selectedItem)
        }), this.props.children !== b.children && this.updateSizes();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.destroyThumbs();
      }
    }, {
      key: "setupThumbs",
      value: function() {
        (0, o.default)().addEventListener("resize", this.updateSizes), (0, o.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.updateSizes();
      }
    }, {
      key: "destroyThumbs",
      value: function() {
        (0, o.default)().removeEventListener("resize", this.updateSizes), (0, o.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
      }
    }, {
      key: "getFirstItem",
      value: function(b) {
        var k = b;
        return b >= this.state.lastPosition && (k = this.state.lastPosition), b < this.state.firstItem + this.state.visibleItems && (k = this.state.firstItem), b < this.state.firstItem && (k = b), k;
      }
    }, {
      key: "renderItems",
      value: function() {
        var b = this;
        return this.props.children.map(function(k, _) {
          var w = t.default.ITEM(!1, _ === b.state.selectedItem), z = {
            key: _,
            ref: function(j) {
              return b.setThumbsRef(j, _);
            },
            className: w,
            onClick: b.handleClickItem.bind(b, _, b.props.children[_]),
            onKeyDown: b.handleClickItem.bind(b, _, b.props.children[_]),
            "aria-label": "".concat(b.props.labels.item, " ").concat(_ + 1),
            style: {
              width: b.props.thumbWidth
            }
          };
          return /* @__PURE__ */ e.default.createElement("li", u({}, z, {
            role: "button",
            tabIndex: 0
          }), k);
        });
      }
    }, {
      key: "render",
      value: function() {
        var b = this;
        if (!this.props.children)
          return null;
        var k = e.Children.count(this.props.children) > 1, _ = this.state.showArrows && this.state.firstItem > 0, w = this.state.showArrows && this.state.firstItem < this.state.lastPosition, z = {}, H = -this.state.firstItem * (this.state.itemSize || 0), j = (0, r.default)(H, "px", this.props.axis), re = this.props.transitionTime + "ms";
        return z = {
          WebkitTransform: j,
          MozTransform: j,
          MsTransform: j,
          OTransform: j,
          transform: j,
          msTransform: j,
          WebkitTransitionDuration: re,
          MozTransitionDuration: re,
          MsTransitionDuration: re,
          OTransitionDuration: re,
          transitionDuration: re,
          msTransitionDuration: re
        }, /* @__PURE__ */ e.default.createElement("div", {
          className: t.default.CAROUSEL(!1)
        }, /* @__PURE__ */ e.default.createElement("div", {
          className: t.default.WRAPPER(!1),
          ref: this.setItemsWrapperRef
        }, /* @__PURE__ */ e.default.createElement("button", {
          type: "button",
          className: t.default.ARROW_PREV(!_),
          onClick: function() {
            return b.slideRight();
          },
          "aria-label": this.props.labels.leftArrow
        }), k ? /* @__PURE__ */ e.default.createElement(i.default, {
          tagName: "ul",
          className: t.default.SLIDER(!1, this.state.swiping),
          onSwipeLeft: this.slideLeft,
          onSwipeRight: this.slideRight,
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: z,
          innerRef: this.setItemsListRef,
          allowMouseEvents: this.props.emulateTouch
        }, this.renderItems()) : /* @__PURE__ */ e.default.createElement("ul", {
          className: t.default.SLIDER(!1, this.state.swiping),
          ref: function(O) {
            return b.setItemsListRef(O);
          },
          style: z
        }, this.renderItems()), /* @__PURE__ */ e.default.createElement("button", {
          type: "button",
          className: t.default.ARROW_NEXT(!w),
          onClick: function() {
            return b.slideLeft();
          },
          "aria-label": this.props.labels.rightArrow
        })));
      }
    }]), L;
  }(e.Component);
  return oi.default = P, S(P, "displayName", "Thumbs"), S(P, "defaultProps", {
    axis: "horizontal",
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    selectedItem: 0,
    thumbWidth: 80,
    transitionTime: 350
  }), oi;
}
var ci = {}, Ud;
function mm() {
  if (Ud) return ci;
  Ud = 1, Object.defineProperty(ci, "__esModule", {
    value: !0
  }), ci.default = void 0;
  var e = function() {
    return document;
  };
  return ci.default = e, ci;
}
var tn = {}, Xd;
function Pg() {
  if (Xd) return tn;
  Xd = 1, Object.defineProperty(tn, "__esModule", {
    value: !0
  }), tn.setPosition = tn.getPosition = tn.isKeyboardEvent = tn.defaultStatusFormatter = tn.noop = void 0;
  var e = St, t = n(Dc());
  function n(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var r = function() {
  };
  tn.noop = r;
  var i = function(c, u) {
    return "".concat(c, " of ").concat(u);
  };
  tn.defaultStatusFormatter = i;
  var o = function(c) {
    return c ? c.hasOwnProperty("key") : !1;
  };
  tn.isKeyboardEvent = o;
  var s = function(c, u) {
    if (u.infiniteLoop && ++c, c === 0)
      return 0;
    var h = e.Children.count(u.children);
    if (u.centerMode && u.axis === "horizontal") {
      var d = -c * u.centerSlidePercentage, g = h - 1;
      return c && (c !== g || u.infiniteLoop) ? d += (100 - u.centerSlidePercentage) / 2 : c === g && (d += 100 - u.centerSlidePercentage), d;
    }
    return -c * 100;
  };
  tn.getPosition = s;
  var a = function(c, u) {
    var h = {};
    return ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(d) {
      h[d] = (0, t.default)(c, "%", u);
    }), h;
  };
  return tn.setPosition = a, tn;
}
var Sn = {}, Yd;
function vm() {
  if (Yd) return Sn;
  Yd = 1, Object.defineProperty(Sn, "__esModule", {
    value: !0
  }), Sn.fadeAnimationHandler = Sn.slideStopSwipingHandler = Sn.slideSwipeAnimationHandler = Sn.slideAnimationHandler = void 0;
  var e = St, t = r(Dc()), n = Pg();
  function r(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function i(h, d) {
    var g = Object.keys(h);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(h);
      d && (f = f.filter(function(v) {
        return Object.getOwnPropertyDescriptor(h, v).enumerable;
      })), g.push.apply(g, f);
    }
    return g;
  }
  function o(h) {
    for (var d = 1; d < arguments.length; d++) {
      var g = arguments[d] != null ? arguments[d] : {};
      d % 2 ? i(Object(g), !0).forEach(function(f) {
        s(h, f, g[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(g)) : i(Object(g)).forEach(function(f) {
        Object.defineProperty(h, f, Object.getOwnPropertyDescriptor(g, f));
      });
    }
    return h;
  }
  function s(h, d, g) {
    return d in h ? Object.defineProperty(h, d, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : h[d] = g, h;
  }
  var a = function(d, g) {
    var f = {}, v = g.selectedItem, R = v, I = e.Children.count(d.children) - 1, y = d.infiniteLoop && (v < 0 || v > I);
    if (y)
      return R < 0 ? d.centerMode && d.centerSlidePercentage && d.axis === "horizontal" ? f.itemListStyle = (0, n.setPosition)(-(I + 2) * d.centerSlidePercentage - (100 - d.centerSlidePercentage) / 2, d.axis) : f.itemListStyle = (0, n.setPosition)(-(I + 2) * 100, d.axis) : R > I && (f.itemListStyle = (0, n.setPosition)(0, d.axis)), f;
    var C = (0, n.getPosition)(v, d), A = (0, t.default)(C, "%", d.axis), S = d.transitionTime + "ms";
    return f.itemListStyle = {
      WebkitTransform: A,
      msTransform: A,
      OTransform: A,
      transform: A
    }, g.swiping || (f.itemListStyle = o(o({}, f.itemListStyle), {}, {
      WebkitTransitionDuration: S,
      MozTransitionDuration: S,
      OTransitionDuration: S,
      transitionDuration: S,
      msTransitionDuration: S
    })), f;
  };
  Sn.slideAnimationHandler = a;
  var l = function(d, g, f, v) {
    var R = {}, I = g.axis === "horizontal", y = e.Children.count(g.children), C = 0, A = (0, n.getPosition)(f.selectedItem, g), S = g.infiniteLoop ? (0, n.getPosition)(y - 1, g) - 100 : (0, n.getPosition)(y - 1, g), M = I ? d.x : d.y, P = M;
    A === C && M > 0 && (P = 0), A === S && M < 0 && (P = 0);
    var E = A + 100 / (f.itemSize / P), T = Math.abs(M) > g.swipeScrollTolerance;
    return g.infiniteLoop && T && (f.selectedItem === 0 && E > -100 ? E -= y * 100 : f.selectedItem === y - 1 && E < -y * 100 && (E += y * 100)), (!g.preventMovementUntilSwipeScrollTolerance || T || f.swipeMovementStarted) && (f.swipeMovementStarted || v({
      swipeMovementStarted: !0
    }), R.itemListStyle = (0, n.setPosition)(E, g.axis)), T && !f.cancelClick && v({
      cancelClick: !0
    }), R;
  };
  Sn.slideSwipeAnimationHandler = l;
  var c = function(d, g) {
    var f = (0, n.getPosition)(g.selectedItem, d), v = (0, n.setPosition)(f, d.axis);
    return {
      itemListStyle: v
    };
  };
  Sn.slideStopSwipingHandler = c;
  var u = function(d, g) {
    var f = d.transitionTime + "ms", v = "ease-in-out", R = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction: v,
      msTransitionTimingFunction: v,
      MozTransitionTimingFunction: v,
      WebkitTransitionTimingFunction: v,
      OTransitionTimingFunction: v
    };
    return g.swiping || (R = o(o({}, R), {}, {
      WebkitTransitionDuration: f,
      MozTransitionDuration: f,
      OTransitionDuration: f,
      transitionDuration: f,
      msTransitionDuration: f
    })), {
      slideStyle: R,
      selectedStyle: o(o({}, R), {}, {
        opacity: 1,
        position: "relative"
      }),
      prevStyle: o({}, R)
    };
  };
  return Sn.fadeAnimationHandler = u, Sn;
}
var Gd;
function ym() {
  if (Gd) return ri;
  Gd = 1, Object.defineProperty(ri, "__esModule", {
    value: !0
  }), ri.default = void 0;
  var e = u(St), t = l(Eg()), n = l(Mg()), r = l(Ag()), i = l(mm()), o = l(Ig()), s = Pg(), a = vm();
  function l(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function c() {
    if (typeof WeakMap != "function") return null;
    var x = /* @__PURE__ */ new WeakMap();
    return c = function() {
      return x;
    }, x;
  }
  function u(x) {
    if (x && x.__esModule)
      return x;
    if (x === null || h(x) !== "object" && typeof x != "function")
      return { default: x };
    var b = c();
    if (b && b.has(x))
      return b.get(x);
    var k = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in x)
      if (Object.prototype.hasOwnProperty.call(x, w)) {
        var z = _ ? Object.getOwnPropertyDescriptor(x, w) : null;
        z && (z.get || z.set) ? Object.defineProperty(k, w, z) : k[w] = x[w];
      }
    return k.default = x, b && b.set(x, k), k;
  }
  function h(x) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? h = function(k) {
      return typeof k;
    } : h = function(k) {
      return k && typeof Symbol == "function" && k.constructor === Symbol && k !== Symbol.prototype ? "symbol" : typeof k;
    }, h(x);
  }
  function d() {
    return d = Object.assign || function(x) {
      for (var b = 1; b < arguments.length; b++) {
        var k = arguments[b];
        for (var _ in k)
          Object.prototype.hasOwnProperty.call(k, _) && (x[_] = k[_]);
      }
      return x;
    }, d.apply(this, arguments);
  }
  function g(x, b) {
    var k = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var _ = Object.getOwnPropertySymbols(x);
      b && (_ = _.filter(function(w) {
        return Object.getOwnPropertyDescriptor(x, w).enumerable;
      })), k.push.apply(k, _);
    }
    return k;
  }
  function f(x) {
    for (var b = 1; b < arguments.length; b++) {
      var k = arguments[b] != null ? arguments[b] : {};
      b % 2 ? g(Object(k), !0).forEach(function(_) {
        T(x, _, k[_]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(k)) : g(Object(k)).forEach(function(_) {
        Object.defineProperty(x, _, Object.getOwnPropertyDescriptor(k, _));
      });
    }
    return x;
  }
  function v(x, b) {
    if (!(x instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function R(x, b) {
    for (var k = 0; k < b.length; k++) {
      var _ = b[k];
      _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(x, _.key, _);
    }
  }
  function I(x, b, k) {
    return b && R(x.prototype, b), x;
  }
  function y(x, b) {
    if (typeof b != "function" && b !== null)
      throw new TypeError("Super expression must either be null or a function");
    x.prototype = Object.create(b && b.prototype, { constructor: { value: x, writable: !0, configurable: !0 } }), b && C(x, b);
  }
  function C(x, b) {
    return C = Object.setPrototypeOf || function(_, w) {
      return _.__proto__ = w, _;
    }, C(x, b);
  }
  function A(x) {
    var b = P();
    return function() {
      var _ = E(x), w;
      if (b) {
        var z = E(this).constructor;
        w = Reflect.construct(_, arguments, z);
      } else
        w = _.apply(this, arguments);
      return S(this, w);
    };
  }
  function S(x, b) {
    return b && (h(b) === "object" || typeof b == "function") ? b : M(x);
  }
  function M(x) {
    if (x === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return x;
  }
  function P() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function E(x) {
    return E = Object.setPrototypeOf ? Object.getPrototypeOf : function(k) {
      return k.__proto__ || Object.getPrototypeOf(k);
    }, E(x);
  }
  function T(x, b, k) {
    return b in x ? Object.defineProperty(x, b, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : x[b] = k, x;
  }
  var L = /* @__PURE__ */ function(x) {
    y(k, x);
    var b = A(k);
    function k(_) {
      var w;
      v(this, k), w = b.call(this, _), T(M(w), "thumbsRef", void 0), T(M(w), "carouselWrapperRef", void 0), T(M(w), "listRef", void 0), T(M(w), "itemsRef", void 0), T(M(w), "timer", void 0), T(M(w), "animationHandler", void 0), T(M(w), "setThumbsRef", function(H) {
        w.thumbsRef = H;
      }), T(M(w), "setCarouselWrapperRef", function(H) {
        w.carouselWrapperRef = H;
      }), T(M(w), "setListRef", function(H) {
        w.listRef = H;
      }), T(M(w), "setItemsRef", function(H, j) {
        w.itemsRef || (w.itemsRef = []), w.itemsRef[j] = H;
      }), T(M(w), "autoPlay", function() {
        e.Children.count(w.props.children) <= 1 || (w.clearAutoPlay(), w.props.autoPlay && (w.timer = setTimeout(function() {
          w.increment();
        }, w.props.interval)));
      }), T(M(w), "clearAutoPlay", function() {
        w.timer && clearTimeout(w.timer);
      }), T(M(w), "resetAutoPlay", function() {
        w.clearAutoPlay(), w.autoPlay();
      }), T(M(w), "stopOnHover", function() {
        w.setState({
          isMouseEntered: !0
        }, w.clearAutoPlay);
      }), T(M(w), "startOnLeave", function() {
        w.setState({
          isMouseEntered: !1
        }, w.autoPlay);
      }), T(M(w), "isFocusWithinTheCarousel", function() {
        return w.carouselWrapperRef ? !!((0, i.default)().activeElement === w.carouselWrapperRef || w.carouselWrapperRef.contains((0, i.default)().activeElement)) : !1;
      }), T(M(w), "navigateWithKeyboard", function(H) {
        if (w.isFocusWithinTheCarousel()) {
          var j = w.props.axis, re = j === "horizontal", te = {
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37
          }, O = re ? te.ArrowRight : te.ArrowDown, N = re ? te.ArrowLeft : te.ArrowUp;
          O === H.keyCode ? w.increment() : N === H.keyCode && w.decrement();
        }
      }), T(M(w), "updateSizes", function() {
        if (!(!w.state.initialized || !w.itemsRef || w.itemsRef.length === 0)) {
          var H = w.props.axis === "horizontal", j = w.itemsRef[0];
          if (j) {
            var re = H ? j.clientWidth : j.clientHeight;
            w.setState({
              itemSize: re
            }), w.thumbsRef && w.thumbsRef.updateSizes();
          }
        }
      }), T(M(w), "setMountState", function() {
        w.setState({
          hasMount: !0
        }), w.updateSizes();
      }), T(M(w), "handleClickItem", function(H, j) {
        if (e.Children.count(w.props.children) !== 0) {
          if (w.state.cancelClick) {
            w.setState({
              cancelClick: !1
            });
            return;
          }
          w.props.onClickItem(H, j), H !== w.state.selectedItem && w.setState({
            selectedItem: H
          });
        }
      }), T(M(w), "handleOnChange", function(H, j) {
        e.Children.count(w.props.children) <= 1 || w.props.onChange(H, j);
      }), T(M(w), "handleClickThumb", function(H, j) {
        w.props.onClickThumb(H, j), w.moveTo(H);
      }), T(M(w), "onSwipeStart", function(H) {
        w.setState({
          swiping: !0
        }), w.props.onSwipeStart(H);
      }), T(M(w), "onSwipeEnd", function(H) {
        w.setState({
          swiping: !1,
          cancelClick: !1,
          swipeMovementStarted: !1
        }), w.props.onSwipeEnd(H), w.clearAutoPlay(), w.state.autoPlay && w.autoPlay();
      }), T(M(w), "onSwipeMove", function(H, j) {
        w.props.onSwipeMove(j);
        var re = w.props.swipeAnimationHandler(H, w.props, w.state, w.setState.bind(M(w)));
        return w.setState(f({}, re)), !!Object.keys(re).length;
      }), T(M(w), "decrement", function() {
        var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        w.moveTo(w.state.selectedItem - (typeof H == "number" ? H : 1));
      }), T(M(w), "increment", function() {
        var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        w.moveTo(w.state.selectedItem + (typeof H == "number" ? H : 1));
      }), T(M(w), "moveTo", function(H) {
        if (typeof H == "number") {
          var j = e.Children.count(w.props.children) - 1;
          H < 0 && (H = w.props.infiniteLoop ? j : 0), H > j && (H = w.props.infiniteLoop ? 0 : j), w.selectItem({
            // if it's not a slider, we don't need to set position here
            selectedItem: H
          }), w.state.autoPlay && w.state.isMouseEntered === !1 && w.resetAutoPlay();
        }
      }), T(M(w), "onClickNext", function() {
        w.increment(1);
      }), T(M(w), "onClickPrev", function() {
        w.decrement(1);
      }), T(M(w), "onSwipeForward", function() {
        w.increment(1), w.props.emulateTouch && w.setState({
          cancelClick: !0
        });
      }), T(M(w), "onSwipeBackwards", function() {
        w.decrement(1), w.props.emulateTouch && w.setState({
          cancelClick: !0
        });
      }), T(M(w), "changeItem", function(H) {
        return function(j) {
          (!(0, s.isKeyboardEvent)(j) || j.key === "Enter") && w.moveTo(H);
        };
      }), T(M(w), "selectItem", function(H) {
        w.setState(f({
          previousItem: w.state.selectedItem
        }, H), function() {
          w.setState(w.animationHandler(w.props, w.state));
        }), w.handleOnChange(H.selectedItem, e.Children.toArray(w.props.children)[H.selectedItem]);
      }), T(M(w), "getInitialImage", function() {
        var H = w.props.selectedItem, j = w.itemsRef && w.itemsRef[H], re = j && j.getElementsByTagName("img") || [];
        return re[0];
      }), T(M(w), "getVariableItemHeight", function(H) {
        var j = w.itemsRef && w.itemsRef[H];
        if (w.state.hasMount && j && j.children.length) {
          var re = j.children[0].getElementsByTagName("img") || [];
          if (re.length > 0) {
            var te = re[0];
            if (!te.complete) {
              var O = function oe() {
                w.forceUpdate(), te.removeEventListener("load", oe);
              };
              te.addEventListener("load", O);
            }
          }
          var N = re[0] || j.children[0], J = N.clientHeight;
          return J > 0 ? J : null;
        }
        return null;
      });
      var z = {
        initialized: !1,
        previousItem: _.selectedItem,
        selectedItem: _.selectedItem,
        hasMount: !1,
        isMouseEntered: !1,
        autoPlay: _.autoPlay,
        swiping: !1,
        swipeMovementStarted: !1,
        cancelClick: !1,
        itemSize: 1,
        itemListStyle: {},
        slideStyle: {},
        selectedStyle: {},
        prevStyle: {}
      };
      return w.animationHandler = typeof _.animationHandler == "function" && _.animationHandler || _.animationHandler === "fade" && a.fadeAnimationHandler || a.slideAnimationHandler, w.state = f(f({}, z), w.animationHandler(_, z)), w;
    }
    return I(k, [{
      key: "componentDidMount",
      value: function() {
        this.props.children && this.setupCarousel();
      }
    }, {
      key: "componentDidUpdate",
      value: function(w, z) {
        !w.children && this.props.children && !this.state.initialized && this.setupCarousel(), !w.autoFocus && this.props.autoFocus && this.forceFocus(), z.swiping && !this.state.swiping && this.setState(f({}, this.props.stopSwipingHandler(this.props, this.state))), (w.selectedItem !== this.props.selectedItem || w.centerMode !== this.props.centerMode) && (this.updateSizes(), this.moveTo(this.props.selectedItem)), w.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({
          autoPlay: this.props.autoPlay
        }));
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.destroyCarousel();
      }
    }, {
      key: "setupCarousel",
      value: function() {
        var w = this;
        this.bindEvents(), this.state.autoPlay && e.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({
          initialized: !0
        }, function() {
          var z = w.getInitialImage();
          z && !z.complete ? z.addEventListener("load", w.setMountState) : w.setMountState();
        });
      }
    }, {
      key: "destroyCarousel",
      value: function() {
        this.state.initialized && (this.unbindEvents(), this.destroyAutoPlay());
      }
    }, {
      key: "setupAutoPlay",
      value: function() {
        this.autoPlay();
        var w = this.carouselWrapperRef;
        this.props.stopOnHover && w && (w.addEventListener("mouseenter", this.stopOnHover), w.addEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "destroyAutoPlay",
      value: function() {
        this.clearAutoPlay();
        var w = this.carouselWrapperRef;
        this.props.stopOnHover && w && (w.removeEventListener("mouseenter", this.stopOnHover), w.removeEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "bindEvents",
      value: function() {
        (0, o.default)().addEventListener("resize", this.updateSizes), (0, o.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.props.useKeyboardArrows && (0, i.default)().addEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "unbindEvents",
      value: function() {
        (0, o.default)().removeEventListener("resize", this.updateSizes), (0, o.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
        var w = this.getInitialImage();
        w && w.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, i.default)().removeEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "forceFocus",
      value: function() {
        var w;
        (w = this.carouselWrapperRef) === null || w === void 0 || w.focus();
      }
    }, {
      key: "renderItems",
      value: function(w) {
        var z = this;
        return this.props.children ? e.Children.map(this.props.children, function(H, j) {
          var re = j === z.state.selectedItem, te = j === z.state.previousItem, O = re && z.state.selectedStyle || te && z.state.prevStyle || z.state.slideStyle || {};
          z.props.centerMode && z.props.axis === "horizontal" && (O = f(f({}, O), {}, {
            minWidth: z.props.centerSlidePercentage + "%"
          })), z.state.swiping && z.state.swipeMovementStarted && (O = f(f({}, O), {}, {
            pointerEvents: "none"
          }));
          var N = {
            ref: function(oe) {
              return z.setItemsRef(oe, j);
            },
            key: "itemKey" + j + (w ? "clone" : ""),
            className: n.default.ITEM(!0, j === z.state.selectedItem, j === z.state.previousItem),
            onClick: z.handleClickItem.bind(z, j, H),
            style: O
          };
          return /* @__PURE__ */ e.default.createElement("li", N, z.props.renderItem(H, {
            isSelected: j === z.state.selectedItem,
            isPrevious: j === z.state.previousItem
          }));
        }) : [];
      }
    }, {
      key: "renderControls",
      value: function() {
        var w = this, z = this.props, H = z.showIndicators, j = z.labels, re = z.renderIndicator, te = z.children;
        return H ? /* @__PURE__ */ e.default.createElement("ul", {
          className: "control-dots"
        }, e.Children.map(te, function(O, N) {
          return re && re(w.changeItem(N), N === w.state.selectedItem, N, j.item);
        })) : null;
      }
    }, {
      key: "renderStatus",
      value: function() {
        return this.props.showStatus ? /* @__PURE__ */ e.default.createElement("p", {
          className: "carousel-status"
        }, this.props.statusFormatter(this.state.selectedItem + 1, e.Children.count(this.props.children))) : null;
      }
    }, {
      key: "renderThumbs",
      value: function() {
        return !this.props.showThumbs || !this.props.children || e.Children.count(this.props.children) === 0 ? null : /* @__PURE__ */ e.default.createElement(r.default, {
          ref: this.setThumbsRef,
          onSelectItem: this.handleClickThumb,
          selectedItem: this.state.selectedItem,
          transitionTime: this.props.transitionTime,
          thumbWidth: this.props.thumbWidth,
          labels: this.props.labels,
          emulateTouch: this.props.emulateTouch
        }, this.props.renderThumbs(this.props.children));
      }
    }, {
      key: "render",
      value: function() {
        var w = this;
        if (!this.props.children || e.Children.count(this.props.children) === 0)
          return null;
        var z = this.props.swipeable && e.Children.count(this.props.children) > 1, H = this.props.axis === "horizontal", j = this.props.showArrows && e.Children.count(this.props.children) > 1, re = j && (this.state.selectedItem > 0 || this.props.infiniteLoop) || !1, te = j && (this.state.selectedItem < e.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || !1, O = this.renderItems(!0), N = O.shift(), J = O.pop(), oe = {
          className: n.default.SLIDER(!0, this.state.swiping),
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: this.state.itemListStyle,
          tolerance: this.props.swipeScrollTolerance
        }, $ = {};
        if (H) {
          if (oe.onSwipeLeft = this.onSwipeForward, oe.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
            var ce = this.getVariableItemHeight(this.state.selectedItem);
            $.height = ce || "auto";
          }
        } else
          oe.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward, oe.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards, oe.style = f(f({}, oe.style), {}, {
            height: this.state.itemSize
          }), $.height = this.state.itemSize;
        return /* @__PURE__ */ e.default.createElement("div", {
          "aria-label": this.props.ariaLabel,
          className: n.default.ROOT(this.props.className),
          ref: this.setCarouselWrapperRef,
          tabIndex: this.props.useKeyboardArrows ? 0 : void 0
        }, /* @__PURE__ */ e.default.createElement("div", {
          className: n.default.CAROUSEL(!0),
          style: {
            width: this.props.width
          }
        }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, re, this.props.labels.leftArrow), /* @__PURE__ */ e.default.createElement("div", {
          className: n.default.WRAPPER(!0, this.props.axis),
          style: $
        }, z ? /* @__PURE__ */ e.default.createElement(t.default, d({
          tagName: "ul",
          innerRef: this.setListRef
        }, oe, {
          allowMouseEvents: this.props.emulateTouch
        }), this.props.infiniteLoop && J, this.renderItems(), this.props.infiniteLoop && N) : /* @__PURE__ */ e.default.createElement("ul", {
          className: n.default.SLIDER(!0, this.state.swiping),
          ref: function(ie) {
            return w.setListRef(ie);
          },
          style: this.state.itemListStyle || {}
        }, this.props.infiniteLoop && J, this.renderItems(), this.props.infiniteLoop && N)), this.props.renderArrowNext(this.onClickNext, te, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
      }
    }]), k;
  }(e.default.Component);
  return ri.default = L, T(L, "displayName", "Carousel"), T(L, "defaultProps", {
    ariaLabel: void 0,
    axis: "horizontal",
    centerSlidePercentage: 80,
    interval: 3e3,
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    onClickItem: s.noop,
    onClickThumb: s.noop,
    onChange: s.noop,
    onSwipeStart: function() {
    },
    onSwipeEnd: function() {
    },
    onSwipeMove: function() {
      return !1;
    },
    preventMovementUntilSwipeScrollTolerance: !1,
    renderArrowPrev: function(b, k, _) {
      return /* @__PURE__ */ e.default.createElement("button", {
        type: "button",
        "aria-label": _,
        className: n.default.ARROW_PREV(!k),
        onClick: b
      });
    },
    renderArrowNext: function(b, k, _) {
      return /* @__PURE__ */ e.default.createElement("button", {
        type: "button",
        "aria-label": _,
        className: n.default.ARROW_NEXT(!k),
        onClick: b
      });
    },
    renderIndicator: function(b, k, _, w) {
      return /* @__PURE__ */ e.default.createElement("li", {
        className: n.default.DOT(k),
        onClick: b,
        onKeyDown: b,
        value: _,
        key: _,
        role: "button",
        tabIndex: 0,
        "aria-label": "".concat(w, " ").concat(_ + 1)
      });
    },
    renderItem: function(b) {
      return b;
    },
    renderThumbs: function(b) {
      var k = e.Children.map(b, function(_) {
        var w = _;
        if (_.type !== "img" && (w = e.Children.toArray(_.props.children).find(function(z) {
          return z.type === "img";
        })), !!w)
          return w;
      });
      return k.filter(function(_) {
        return _;
      }).length === 0 ? (console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"), []) : k;
    },
    statusFormatter: s.defaultStatusFormatter,
    selectedItem: 0,
    showArrows: !0,
    showIndicators: !0,
    showStatus: !0,
    showThumbs: !0,
    stopOnHover: !0,
    swipeScrollTolerance: 5,
    swipeable: !0,
    transitionTime: 350,
    verticalSwipe: "standard",
    width: "100%",
    animationHandler: "slide",
    swipeAnimationHandler: a.slideSwipeAnimationHandler,
    stopSwipingHandler: a.slideStopSwipingHandler
  }), ri;
}
var Kd = {}, Vd;
function bm() {
  return Vd || (Vd = 1), Kd;
}
var Zd;
function wm() {
  return Zd || (Zd = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "Carousel", {
      enumerable: !0,
      get: function() {
        return t.default;
      }
    }), Object.defineProperty(e, "CarouselProps", {
      enumerable: !0,
      get: function() {
        return n.CarouselProps;
      }
    }), Object.defineProperty(e, "Thumbs", {
      enumerable: !0,
      get: function() {
        return r.default;
      }
    });
    var t = i(ym()), n = bm(), r = i(Ag());
    function i(o) {
      return o && o.__esModule ? o : { default: o };
    }
  }(cs)), cs;
}
var Sm = wm(), vs, Jd;
function Cm() {
  if (Jd) return vs;
  Jd = 1;
  var e = Pn(), t = function() {
    return e.Date.now();
  };
  return vs = t, vs;
}
var ys, Qd;
function km() {
  if (Qd) return ys;
  Qd = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return ys = t, ys;
}
var bs, ef;
function xm() {
  if (ef) return bs;
  ef = 1;
  var e = km(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return bs = n, bs;
}
var ws, tf;
function Lc() {
  if (tf) return ws;
  tf = 1;
  var e = xm(), t = gr(), n = To(), r = NaN, i = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, s = /^0o[0-7]+$/i, a = parseInt;
  function l(c) {
    if (typeof c == "number")
      return c;
    if (n(c))
      return r;
    if (t(c)) {
      var u = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(u) ? u + "" : u;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var h = o.test(c);
    return h || s.test(c) ? a(c.slice(2), h ? 2 : 8) : i.test(c) ? r : +c;
  }
  return ws = l, ws;
}
var Ss, nf;
function Og() {
  if (nf) return Ss;
  nf = 1;
  var e = gr(), t = Cm(), n = Lc(), r = "Expected a function", i = Math.max, o = Math.min;
  function s(a, l, c) {
    var u, h, d, g, f, v, R = 0, I = !1, y = !1, C = !0;
    if (typeof a != "function")
      throw new TypeError(r);
    l = n(l) || 0, e(c) && (I = !!c.leading, y = "maxWait" in c, d = y ? i(n(c.maxWait) || 0, l) : d, C = "trailing" in c ? !!c.trailing : C);
    function A(k) {
      var _ = u, w = h;
      return u = h = void 0, R = k, g = a.apply(w, _), g;
    }
    function S(k) {
      return R = k, f = setTimeout(E, l), I ? A(k) : g;
    }
    function M(k) {
      var _ = k - v, w = k - R, z = l - _;
      return y ? o(z, d - w) : z;
    }
    function P(k) {
      var _ = k - v, w = k - R;
      return v === void 0 || _ >= l || _ < 0 || y && w >= d;
    }
    function E() {
      var k = t();
      if (P(k))
        return T(k);
      f = setTimeout(E, M(k));
    }
    function T(k) {
      return f = void 0, C && u ? A(k) : (u = h = void 0, g);
    }
    function L() {
      f !== void 0 && clearTimeout(f), R = 0, u = v = h = f = void 0;
    }
    function x() {
      return f === void 0 ? g : T(t());
    }
    function b() {
      var k = t(), _ = P(k);
      if (u = arguments, h = this, v = k, _) {
        if (f === void 0)
          return S(v);
        if (y)
          return clearTimeout(f), f = setTimeout(E, l), A(v);
      }
      return f === void 0 && (f = setTimeout(E, l)), g;
    }
    return b.cancel = L, b.flush = x, b;
  }
  return Ss = s, Ss;
}
var Rm = Og();
const Dg = /* @__PURE__ */ er(Rm);
function Ht(e, t, n, r, i = !1) {
  const o = p.useRef();
  o.current = t, p.useEffect(
    () => {
      if (n === null || n.addEventListener === void 0)
        return;
      const s = n, a = (l) => {
        var c;
        (c = o.current) == null || c.call(s, l);
      };
      return s.addEventListener(e, a, { passive: r, capture: i }), () => {
        s.removeEventListener(e, a, { capture: i });
      };
    },
    [e, n, r, i]
    // Re-run if eventName or element changes
  );
}
function Lr(e, t) {
  return e === void 0 ? void 0 : t;
}
const _m = Math.PI;
function rf(e) {
  return e * _m / 180;
}
const Lg = (e, t, n) => ({
  x1: e - n / 2,
  y1: t - n / 2,
  x2: e + n / 2,
  y2: t + n / 2
}), Fg = (e, t, n, r, i) => {
  switch (e) {
    case "left":
      return Math.floor(t) + r + i / 2;
    case "center":
      return Math.floor(t + n / 2);
    case "right":
      return Math.floor(t + n) - r - i / 2;
  }
}, qg = (e, t, n) => Math.min(e, t - n * 2), Hg = (e, t, n) => n.x1 <= e && e <= n.x2 && n.y1 <= t && t <= n.y2, Fc = (e) => {
  const t = e.fgColor ?? "currentColor";
  return p.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    p.createElement("path", { d: "M12.7073 7.05029C7.87391 11.8837 10.4544 9.30322 6.03024 13.7273C5.77392 13.9836 5.58981 14.3071 5.50189 14.6587L4.52521 18.5655C4.38789 19.1148 4.88543 19.6123 5.43472 19.475L9.34146 18.4983C9.69313 18.4104 10.0143 18.2286 10.2706 17.9722L16.9499 11.2929", stroke: t, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none", vectorEffect: "non-scaling-stroke" }),
    p.createElement("path", { d: "M20.4854 4.92901L19.0712 3.5148C18.2901 2.73375 17.0238 2.73375 16.2428 3.5148L14.475 5.28257C15.5326 7.71912 16.4736 8.6278 18.7176 9.52521L20.4854 7.75744C21.2665 6.97639 21.2665 5.71006 20.4854 4.92901Z", stroke: t, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none", vectorEffect: "non-scaling-stroke" })
  );
}, Tm = (e) => {
  const t = e.fgColor ?? "currentColor";
  return p.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    p.createElement("path", { d: "M19 6L10.3802 17L5.34071 11.8758", vectorEffect: "non-scaling-stroke", stroke: t, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  );
};
function Em(e, t, n) {
  const [r, i] = p.useState(e), o = p.useRef(!0);
  p.useEffect(() => () => {
    o.current = !1;
  }, []);
  const s = p.useRef(Dg((a) => {
    o.current && i(a);
  }, n));
  return p.useLayoutEffect(() => {
    o.current && s.current(() => e());
  }, t), r;
}
const Mm = "֑-߿יִ-﷽ﹰ-ﻼ", Im = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", Am = new RegExp("^[^" + Im + "]*[" + Mm + "]");
function qc(e) {
  return Am.test(e) ? "rtl" : "not-rtl";
}
let so;
function hc() {
  if (typeof document > "u")
    return 0;
  if (so !== void 0)
    return so;
  const e = document.createElement("p");
  e.style.width = "100%", e.style.height = "200px";
  const t = document.createElement("div");
  t.id = "testScrollbar", t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.append(e), document.body.append(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let r = e.offsetWidth;
  return n === r && (r = t.clientWidth), t.remove(), so = n - r, so;
}
const cr = Symbol();
function Pm(e) {
  const t = p.useRef([cr, e]);
  t.current[1] !== e && (t.current[0] = e), t.current[1] = e;
  const [n, r] = p.useState(e), [, i] = p.useState(), o = p.useCallback((a) => {
    const l = t.current[0];
    l !== cr && (a = typeof a == "function" ? a(l) : a, a === l) || (l !== cr && i({}), r((c) => typeof a == "function" ? a(l === cr ? c : l) : a), t.current[0] = cr);
  }, []), s = p.useCallback(() => {
    t.current[0] = cr, i({});
  }, []);
  return [t.current[0] === cr ? n : t.current[0], o, s];
}
function zg(e) {
  if (e.length === 0)
    return "";
  let t = 0, n = 0;
  for (const r of e) {
    if (n += r.length, n > 1e4)
      break;
    t++;
  }
  return e.slice(0, t).join(", ");
}
function Om(e) {
  const t = p.useRef(e);
  return Wr(e, t.current) || (t.current = e), t.current;
}
const Dm = (e) => {
  const { urls: t, canWrite: n, onEditClick: r, renderImage: i } = e, o = t.filter((a) => a !== "");
  if (o.length === 0)
    return null;
  const s = o.length > 1;
  return p.createElement(
    om,
    { "data-testid": "GDG-default-image-overlay-editor" },
    p.createElement(Sm.Carousel, { showArrows: s, showThumbs: !1, swipeable: s, emulateTouch: s, infiniteLoop: s }, o.map((a) => {
      const l = (i == null ? void 0 : i(a)) ?? p.createElement("img", { draggable: !1, src: a });
      return p.createElement("div", { className: "gdg-centering-container", key: a }, l);
    })),
    n && r && p.createElement(
      "button",
      { className: "gdg-edit-icon", onClick: r },
      p.createElement(Fc, null)
    )
  );
};
function Hc() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
var mr = Hc();
function $g(e) {
  mr = e;
}
var wi = { exec: () => null };
function st(e, t = "") {
  let n = typeof e == "string" ? e : e.source;
  const r = {
    replace: (i, o) => {
      let s = typeof o == "string" ? o : o.source;
      return s = s.replace(Xt.caret, "$1"), n = n.replace(i, s), r;
    },
    getRegex: () => new RegExp(n, t)
  };
  return r;
}
var Xt = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
  htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
}, Lm = /^(?:[ \t]*(?:\n|$))+/, Fm = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, qm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ii = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Hm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, zc = /(?:[*+-]|\d{1,9}[.)])/, Ng = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Bg = st(Ng).replace(/bull/g, zc).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), zm = st(Ng).replace(/bull/g, zc).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), $c = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, $m = /^[^\n]+/, Nc = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Nm = st(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Nc).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Bm = st(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, zc).getRegex(), Oo = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Bc = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Wm = st(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", Bc).replace("tag", Oo).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Wg = st($c).replace("hr", Ii).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Oo).getRegex(), jm = st(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Wg).getRegex(), Wc = {
  blockquote: jm,
  code: Fm,
  def: Nm,
  fences: qm,
  heading: Hm,
  hr: Ii,
  html: Wm,
  lheading: Bg,
  list: Bm,
  newline: Lm,
  paragraph: Wg,
  table: wi,
  text: $m
}, of = st(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", Ii).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Oo).getRegex(), Um = {
  ...Wc,
  lheading: zm,
  table: of,
  paragraph: st($c).replace("hr", Ii).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", of).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Oo).getRegex()
}, Xm = {
  ...Wc,
  html: st(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", Bc).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: wi,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: st($c).replace("hr", Ii).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Bg).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Ym = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Gm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, jg = /^( {2,}|\\)\n(?!\s*$)/, Km = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Do = /[\p{P}\p{S}]/u, jc = /[\s\p{P}\p{S}]/u, Ug = /[^\s\p{P}\p{S}]/u, Vm = st(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, jc).getRegex(), Xg = /(?!~)[\p{P}\p{S}]/u, Zm = /(?!~)[\s\p{P}\p{S}]/u, Jm = /(?:[^\s\p{P}\p{S}]|~)/u, Qm = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Yg = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, e1 = st(Yg, "u").replace(/punct/g, Do).getRegex(), t1 = st(Yg, "u").replace(/punct/g, Xg).getRegex(), Gg = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", n1 = st(Gg, "gu").replace(/notPunctSpace/g, Ug).replace(/punctSpace/g, jc).replace(/punct/g, Do).getRegex(), r1 = st(Gg, "gu").replace(/notPunctSpace/g, Jm).replace(/punctSpace/g, Zm).replace(/punct/g, Xg).getRegex(), i1 = st(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, Ug).replace(/punctSpace/g, jc).replace(/punct/g, Do).getRegex(), o1 = st(/\\(punct)/, "gu").replace(/punct/g, Do).getRegex(), a1 = st(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), s1 = st(Bc).replace("(?:-->|$)", "-->").getRegex(), l1 = st(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", s1).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), bo = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, c1 = st(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", bo).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Kg = st(/^!?\[(label)\]\[(ref)\]/).replace("label", bo).replace("ref", Nc).getRegex(), Vg = st(/^!?\[(ref)\](?:\[\])?/).replace("ref", Nc).getRegex(), u1 = st("reflink|nolink(?!\\()", "g").replace("reflink", Kg).replace("nolink", Vg).getRegex(), Uc = {
  _backpedal: wi,
  // only used for GFM url
  anyPunctuation: o1,
  autolink: a1,
  blockSkip: Qm,
  br: jg,
  code: Gm,
  del: wi,
  emStrongLDelim: e1,
  emStrongRDelimAst: n1,
  emStrongRDelimUnd: i1,
  escape: Ym,
  link: c1,
  nolink: Vg,
  punctuation: Vm,
  reflink: Kg,
  reflinkSearch: u1,
  tag: l1,
  text: Km,
  url: wi
}, d1 = {
  ...Uc,
  link: st(/^!?\[(label)\]\((.*?)\)/).replace("label", bo).getRegex(),
  reflink: st(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", bo).getRegex()
}, gc = {
  ...Uc,
  emStrongRDelimAst: r1,
  emStrongLDelim: t1,
  url: st(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, f1 = {
  ...gc,
  br: st(jg).replace("{2,}", "*").getRegex(),
  text: st(gc.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, lo = {
  normal: Wc,
  gfm: Um,
  pedantic: Xm
}, ui = {
  normal: Uc,
  gfm: gc,
  breaks: f1,
  pedantic: d1
}, h1 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, af = (e) => h1[e];
function Mn(e, t) {
  if (t) {
    if (Xt.escapeTest.test(e))
      return e.replace(Xt.escapeReplace, af);
  } else if (Xt.escapeTestNoEncode.test(e))
    return e.replace(Xt.escapeReplaceNoEncode, af);
  return e;
}
function sf(e) {
  try {
    e = encodeURI(e).replace(Xt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function lf(e, t) {
  var o;
  const n = e.replace(Xt.findPipe, (s, a, l) => {
    let c = !1, u = a;
    for (; --u >= 0 && l[u] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }), r = n.split(Xt.splitPipe);
  let i = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !((o = r.at(-1)) != null && o.trim()) && r.pop(), t)
    if (r.length > t)
      r.splice(t);
    else
      for (; r.length < t; ) r.push("");
  for (; i < r.length; i++)
    r[i] = r[i].trim().replace(Xt.slashPipe, "|");
  return r;
}
function di(e, t, n) {
  const r = e.length;
  if (r === 0)
    return "";
  let i = 0;
  for (; i < r && e.charAt(r - i - 1) === t; )
    i++;
  return e.slice(0, r - i);
}
function g1(e, t) {
  if (e.indexOf(t[1]) === -1)
    return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++)
    if (e[r] === "\\")
      r++;
    else if (e[r] === t[0])
      n++;
    else if (e[r] === t[1] && (n--, n < 0))
      return r;
  return n > 0 ? -2 : -1;
}
function cf(e, t, n, r, i) {
  const o = t.href, s = t.title || null, a = e[1].replace(i.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  const l = {
    type: e[0].charAt(0) === "!" ? "image" : "link",
    raw: n,
    href: o,
    title: s,
    text: a,
    tokens: r.inlineTokens(a)
  };
  return r.state.inLink = !1, l;
}
function p1(e, t, n) {
  const r = e.match(n.other.indentCodeCompensation);
  if (r === null)
    return t;
  const i = r[1];
  return t.split(`
`).map((o) => {
    const s = o.match(n.other.beginningSpace);
    if (s === null)
      return o;
    const [a] = s;
    return a.length >= i.length ? o.slice(i.length) : o;
  }).join(`
`);
}
var wo = class {
  // set by the lexer
  constructor(e) {
    be(this, "options");
    be(this, "rules");
    // set by the lexer
    be(this, "lexer");
    this.options = e || mr;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? n : di(n, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0], r = p1(n, t[3] || "", this.rules);
      return {
        type: "code",
        raw: n,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: r
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        const r = di(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: di(t[0], `
`)
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = di(t[0], `
`).split(`
`), r = "", i = "";
      const o = [];
      for (; n.length > 0; ) {
        let s = !1;
        const a = [];
        let l;
        for (l = 0; l < n.length; l++)
          if (this.rules.other.blockquoteStart.test(n[l]))
            a.push(n[l]), s = !0;
          else if (!s)
            a.push(n[l]);
          else
            break;
        n = n.slice(l);
        const c = a.join(`
`), u = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${c}` : c, i = i ? `${i}
${u}` : u;
        const h = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(u, o, !0), this.lexer.state.top = h, n.length === 0)
          break;
        const d = o.at(-1);
        if ((d == null ? void 0 : d.type) === "code")
          break;
        if ((d == null ? void 0 : d.type) === "blockquote") {
          const g = d, f = g.raw + `
` + n.join(`
`), v = this.blockquote(f);
          o[o.length - 1] = v, r = r.substring(0, r.length - g.raw.length) + v.raw, i = i.substring(0, i.length - g.text.length) + v.text;
          break;
        } else if ((d == null ? void 0 : d.type) === "list") {
          const g = d, f = g.raw + `
` + n.join(`
`), v = this.list(f);
          o[o.length - 1] = v, r = r.substring(0, r.length - d.raw.length) + v.raw, i = i.substring(0, i.length - g.raw.length) + v.raw, n = f.substring(o.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: r,
        tokens: o,
        text: i
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim();
      const r = n.length > 1, i = {
        type: "list",
        raw: "",
        ordered: r,
        start: r ? +n.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
      const o = this.rules.other.listItemRegex(n);
      let s = !1;
      for (; e; ) {
        let l = !1, c = "", u = "";
        if (!(t = o.exec(e)) || this.rules.block.hr.test(e))
          break;
        c = t[0], e = e.substring(c.length);
        let h = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (I) => " ".repeat(3 * I.length)), d = e.split(`
`, 1)[0], g = !h.trim(), f = 0;
        if (this.options.pedantic ? (f = 2, u = h.trimStart()) : g ? f = t[1].length + 1 : (f = t[2].search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, u = h.slice(f), f += t[1].length), g && this.rules.other.blankLine.test(d) && (c += d + `
`, e = e.substring(d.length + 1), l = !0), !l) {
          const I = this.rules.other.nextBulletRegex(f), y = this.rules.other.hrRegex(f), C = this.rules.other.fencesBeginRegex(f), A = this.rules.other.headingBeginRegex(f), S = this.rules.other.htmlBeginRegex(f);
          for (; e; ) {
            const M = e.split(`
`, 1)[0];
            let P;
            if (d = M, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), P = d) : P = d.replace(this.rules.other.tabCharGlobal, "    "), C.test(d) || A.test(d) || S.test(d) || I.test(d) || y.test(d))
              break;
            if (P.search(this.rules.other.nonSpaceChar) >= f || !d.trim())
              u += `
` + P.slice(f);
            else {
              if (g || h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || C.test(h) || A.test(h) || y.test(h))
                break;
              u += `
` + d;
            }
            !g && !d.trim() && (g = !0), c += M + `
`, e = e.substring(M.length + 1), h = P.slice(f);
          }
        }
        i.loose || (s ? i.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (s = !0));
        let v = null, R;
        this.options.gfm && (v = this.rules.other.listIsTask.exec(u), v && (R = v[0] !== "[ ] ", u = u.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
          type: "list_item",
          raw: c,
          task: !!v,
          checked: R,
          loose: !1,
          text: u,
          tokens: []
        }), i.raw += c;
      }
      const a = i.items.at(-1);
      if (a)
        a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else
        return;
      i.raw = i.raw.trimEnd();
      for (let l = 0; l < i.items.length; l++)
        if (this.lexer.state.top = !1, i.items[l].tokens = this.lexer.blockTokens(i.items[l].text, []), !i.loose) {
          const c = i.items[l].tokens.filter((h) => h.type === "space"), u = c.length > 0 && c.some((h) => this.rules.other.anyLine.test(h.raw));
          i.loose = u;
        }
      if (i.loose)
        for (let l = 0; l < i.items.length; l++)
          i.items[l].loose = !0;
      return i;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: n,
        raw: t[0],
        href: r,
        title: i
      };
    }
  }
  table(e) {
    var s;
    const t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2]))
      return;
    const n = lf(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = (s = t[3]) != null && s.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (n.length === r.length) {
      for (const a of r)
        this.rules.other.tableAlignRight.test(a) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? o.align.push("left") : o.align.push(null);
      for (let a = 0; a < n.length; a++)
        o.header.push({
          text: n[a],
          tokens: this.lexer.inline(n[a]),
          header: !0,
          align: o.align[a]
        });
      for (const a of i)
        o.rows.push(lf(a, o.header.length).map((l, c) => ({
          text: l,
          tokens: this.lexer.inline(l),
          header: !1,
          align: o.align[c]
        })));
      return o;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: t[1]
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const n = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n))
          return;
        const o = di(n.slice(0, -1), "\\");
        if ((n.length - o.length) % 2 === 0)
          return;
      } else {
        const o = g1(t[2], "()");
        if (o === -2)
          return;
        if (o > -1) {
          const a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + o;
          t[2] = t[2].substring(0, o), t[0] = t[0].substring(0, a).trim(), t[3] = "";
        }
      }
      let r = t[2], i = "";
      if (this.options.pedantic) {
        const o = this.rules.other.pedanticHrefTitle.exec(r);
        o && (r = o[1], i = o[3]);
      } else
        i = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), cf(t, {
        href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      const r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[r.toLowerCase()];
      if (!i) {
        const o = n[0].charAt(0);
        return {
          type: "text",
          raw: o,
          text: o
        };
      }
      return cf(n, i, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r[1] || r[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      const o = [...r[0]].length - 1;
      let s, a, l = o, c = 0;
      const u = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, t = t.slice(-1 * e.length + o); (r = u.exec(t)) != null; ) {
        if (s = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !s) continue;
        if (a = [...s].length, r[3] || r[4]) {
          l += a;
          continue;
        } else if ((r[5] || r[6]) && o % 3 && !((o + a) % 3)) {
          c += a;
          continue;
        }
        if (l -= a, l > 0) continue;
        a = Math.min(a, a + l + c);
        const h = [...r[0]][0].length, d = e.slice(0, o + r.index + h + a);
        if (Math.min(o, a) % 2) {
          const f = d.slice(1, -1);
          return {
            type: "em",
            raw: d,
            text: f,
            tokens: this.lexer.inlineTokens(f)
          };
        }
        const g = d.slice(2, -2);
        return {
          type: "strong",
          raw: d,
          text: g,
          tokens: this.lexer.inlineTokens(g)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " ");
      const r = this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return r && i && (n = n.substring(1, n.length - 1)), {
        type: "codespan",
        raw: t[0],
        text: n
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, r;
      return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), {
        type: "link",
        raw: t[0],
        text: n,
        href: r,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  url(e) {
    var n;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let r, i;
      if (t[2] === "@")
        r = t[0], i = "mailto:" + r;
      else {
        let o;
        do
          o = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (o !== t[0]);
        r = t[0], t[1] === "www." ? i = "http://" + t[0] : i = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: r,
        href: i,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      const n = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        escaped: n
      };
    }
  }
}, Nn = class pc {
  constructor(t) {
    be(this, "tokens");
    be(this, "options");
    be(this, "state");
    be(this, "tokenizer");
    be(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || mr, this.options.tokenizer = this.options.tokenizer || new wo(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      other: Xt,
      block: lo.normal,
      inline: ui.normal
    };
    this.options.pedantic ? (n.block = lo.pedantic, n.inline = ui.pedantic) : this.options.gfm && (n.block = lo.gfm, this.options.breaks ? n.inline = ui.breaks : n.inline = ui.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: lo,
      inline: ui
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, n) {
    return new pc(n).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, n) {
    return new pc(n).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(Xt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    var i, o, s;
    for (this.options.pedantic && (t = t.replace(Xt.tabCharGlobal, "    ").replace(Xt.spaceLine, "")); t; ) {
      let a;
      if ((o = (i = this.options.extensions) == null ? void 0 : i.block) != null && o.some((c) => (a = c.call({ lexer: this }, t, n)) ? (t = t.substring(a.raw.length), n.push(a), !0) : !1))
        continue;
      if (a = this.tokenizer.space(t)) {
        t = t.substring(a.raw.length);
        const c = n.at(-1);
        a.raw.length === 1 && c !== void 0 ? c.raw += `
` : n.push(a);
        continue;
      }
      if (a = this.tokenizer.code(t)) {
        t = t.substring(a.raw.length);
        const c = n.at(-1);
        (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + a.raw, c.text += `
` + a.text, this.inlineQueue.at(-1).src = c.text) : n.push(a);
        continue;
      }
      if (a = this.tokenizer.fences(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.heading(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.hr(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.blockquote(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.list(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.html(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.def(t)) {
        t = t.substring(a.raw.length);
        const c = n.at(-1);
        (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + a.raw, c.text += `
` + a.raw, this.inlineQueue.at(-1).src = c.text) : this.tokens.links[a.tag] || (this.tokens.links[a.tag] = {
          href: a.href,
          title: a.title
        });
        continue;
      }
      if (a = this.tokenizer.table(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.lheading(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      let l = t;
      if ((s = this.options.extensions) != null && s.startBlock) {
        let c = 1 / 0;
        const u = t.slice(1);
        let h;
        this.options.extensions.startBlock.forEach((d) => {
          h = d.call({ lexer: this }, u), typeof h == "number" && h >= 0 && (c = Math.min(c, h));
        }), c < 1 / 0 && c >= 0 && (l = t.substring(0, c + 1));
      }
      if (this.state.top && (a = this.tokenizer.paragraph(l))) {
        const c = n.at(-1);
        r && (c == null ? void 0 : c.type) === "paragraph" ? (c.raw += `
` + a.raw, c.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text) : n.push(a), r = l.length !== t.length, t = t.substring(a.raw.length);
        continue;
      }
      if (a = this.tokenizer.text(t)) {
        t = t.substring(a.raw.length);
        const c = n.at(-1);
        (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + a.raw, c.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text) : n.push(a);
        continue;
      }
      if (t) {
        const c = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        } else
          throw new Error(c);
      }
    }
    return this.state.top = !0, n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(t, n = []) {
    var a, l, c;
    let r = t, i = null;
    if (this.tokens.links) {
      const u = Object.keys(this.tokens.links);
      if (u.length > 0)
        for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
          u.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; )
      r = r.slice(0, i.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r = r.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let o = !1, s = "";
    for (; t; ) {
      o || (s = ""), o = !1;
      let u;
      if ((l = (a = this.options.extensions) == null ? void 0 : a.inline) != null && l.some((d) => (u = d.call({ lexer: this }, t, n)) ? (t = t.substring(u.raw.length), n.push(u), !0) : !1))
        continue;
      if (u = this.tokenizer.escape(t)) {
        t = t.substring(u.raw.length), n.push(u);
        continue;
      }
      if (u = this.tokenizer.tag(t)) {
        t = t.substring(u.raw.length), n.push(u);
        continue;
      }
      if (u = this.tokenizer.link(t)) {
        t = t.substring(u.raw.length), n.push(u);
        continue;
      }
      if (u = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(u.raw.length);
        const d = n.at(-1);
        u.type === "text" && (d == null ? void 0 : d.type) === "text" ? (d.raw += u.raw, d.text += u.text) : n.push(u);
        continue;
      }
      if (u = this.tokenizer.emStrong(t, r, s)) {
        t = t.substring(u.raw.length), n.push(u);
        continue;
      }
      if (u = this.tokenizer.codespan(t)) {
        t = t.substring(u.raw.length), n.push(u);
        continue;
      }
      if (u = this.tokenizer.br(t)) {
        t = t.substring(u.raw.length), n.push(u);
        continue;
      }
      if (u = this.tokenizer.del(t)) {
        t = t.substring(u.raw.length), n.push(u);
        continue;
      }
      if (u = this.tokenizer.autolink(t)) {
        t = t.substring(u.raw.length), n.push(u);
        continue;
      }
      if (!this.state.inLink && (u = this.tokenizer.url(t))) {
        t = t.substring(u.raw.length), n.push(u);
        continue;
      }
      let h = t;
      if ((c = this.options.extensions) != null && c.startInline) {
        let d = 1 / 0;
        const g = t.slice(1);
        let f;
        this.options.extensions.startInline.forEach((v) => {
          f = v.call({ lexer: this }, g), typeof f == "number" && f >= 0 && (d = Math.min(d, f));
        }), d < 1 / 0 && d >= 0 && (h = t.substring(0, d + 1));
      }
      if (u = this.tokenizer.inlineText(h)) {
        t = t.substring(u.raw.length), u.raw.slice(-1) !== "_" && (s = u.raw.slice(-1)), o = !0;
        const d = n.at(-1);
        (d == null ? void 0 : d.type) === "text" ? (d.raw += u.raw, d.text += u.text) : n.push(u);
        continue;
      }
      if (t) {
        const d = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(d);
          break;
        } else
          throw new Error(d);
      }
    }
    return n;
  }
}, So = class {
  // set by the parser
  constructor(e) {
    be(this, "options");
    be(this, "parser");
    this.options = e || mr;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    var o;
    const r = (o = (t || "").match(Xt.notSpaceStart)) == null ? void 0 : o[0], i = e.replace(Xt.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + Mn(r) + '">' + (n ? i : Mn(i, !0)) + `</code></pre>
` : "<pre><code>" + (n ? i : Mn(i, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    const t = e.ordered, n = e.start;
    let r = "";
    for (let s = 0; s < e.items.length; s++) {
      const a = e.items[s];
      r += this.listitem(a);
    }
    const i = t ? "ol" : "ul", o = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + o + `>
` + r + "</" + i + `>
`;
  }
  listitem(e) {
    var n;
    let t = "";
    if (e.task) {
      const r = this.checkbox({ checked: !!e.checked });
      e.loose ? ((n = e.tokens[0]) == null ? void 0 : n.type) === "paragraph" ? (e.tokens[0].text = r + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = r + " " + Mn(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
        type: "text",
        raw: r + " ",
        text: r + " ",
        escaped: !0
      }) : t += r + " ";
    }
    return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let i = 0; i < e.header.length; i++)
      n += this.tablecell(e.header[i]);
    t += this.tablerow({ text: n });
    let r = "";
    for (let i = 0; i < e.rows.length; i++) {
      const o = e.rows[i];
      n = "";
      for (let s = 0; s < o.length; s++)
        n += this.tablecell(o[s]);
      r += this.tablerow({ text: n });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    const t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${Mn(e, !0)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    const r = this.parser.parseInline(n), i = sf(e);
    if (i === null)
      return r;
    e = i;
    let o = '<a href="' + e + '"';
    return t && (o += ' title="' + Mn(t) + '"'), o += ">" + r + "</a>", o;
  }
  image({ href: e, title: t, text: n, tokens: r }) {
    r && (n = this.parser.parseInline(r, this.parser.textRenderer));
    const i = sf(e);
    if (i === null)
      return Mn(n);
    e = i;
    let o = `<img src="${e}" alt="${n}"`;
    return t && (o += ` title="${Mn(t)}"`), o += ">", o;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : Mn(e.text);
  }
}, Xc = class {
  // no need for block level renderers
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
}, Bn = class mc {
  constructor(t) {
    be(this, "options");
    be(this, "renderer");
    be(this, "textRenderer");
    this.options = t || mr, this.options.renderer = this.options.renderer || new So(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Xc();
  }
  /**
   * Static Parse Method
   */
  static parse(t, n) {
    return new mc(n).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, n) {
    return new mc(n).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, n = !0) {
    var i, o;
    let r = "";
    for (let s = 0; s < t.length; s++) {
      const a = t[s];
      if ((o = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && o[a.type]) {
        const c = a, u = this.options.extensions.renderers[c.type].call({ parser: this }, c);
        if (u !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(c.type)) {
          r += u || "";
          continue;
        }
      }
      const l = a;
      switch (l.type) {
        case "space": {
          r += this.renderer.space(l);
          continue;
        }
        case "hr": {
          r += this.renderer.hr(l);
          continue;
        }
        case "heading": {
          r += this.renderer.heading(l);
          continue;
        }
        case "code": {
          r += this.renderer.code(l);
          continue;
        }
        case "table": {
          r += this.renderer.table(l);
          continue;
        }
        case "blockquote": {
          r += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          r += this.renderer.list(l);
          continue;
        }
        case "html": {
          r += this.renderer.html(l);
          continue;
        }
        case "paragraph": {
          r += this.renderer.paragraph(l);
          continue;
        }
        case "text": {
          let c = l, u = this.renderer.text(c);
          for (; s + 1 < t.length && t[s + 1].type === "text"; )
            c = t[++s], u += `
` + this.renderer.text(c);
          n ? r += this.renderer.paragraph({
            type: "paragraph",
            raw: u,
            text: u,
            tokens: [{ type: "text", raw: u, text: u, escaped: !0 }]
          }) : r += u;
          continue;
        }
        default: {
          const c = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent)
            return console.error(c), "";
          throw new Error(c);
        }
      }
    }
    return r;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, n = this.renderer) {
    var i, o;
    let r = "";
    for (let s = 0; s < t.length; s++) {
      const a = t[s];
      if ((o = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && o[a.type]) {
        const c = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (c !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          r += c || "";
          continue;
        }
      }
      const l = a;
      switch (l.type) {
        case "escape": {
          r += n.text(l);
          break;
        }
        case "html": {
          r += n.html(l);
          break;
        }
        case "link": {
          r += n.link(l);
          break;
        }
        case "image": {
          r += n.image(l);
          break;
        }
        case "strong": {
          r += n.strong(l);
          break;
        }
        case "em": {
          r += n.em(l);
          break;
        }
        case "codespan": {
          r += n.codespan(l);
          break;
        }
        case "br": {
          r += n.br(l);
          break;
        }
        case "del": {
          r += n.del(l);
          break;
        }
        case "text": {
          r += n.text(l);
          break;
        }
        default: {
          const c = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent)
            return console.error(c), "";
          throw new Error(c);
        }
      }
    }
    return r;
  }
}, dc, fo = (dc = class {
  constructor(e) {
    be(this, "options");
    be(this, "block");
    this.options = e || mr;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? Nn.lex : Nn.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? Bn.parse : Bn.parseInline;
  }
}, be(dc, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
])), dc), m1 = class {
  constructor(...e) {
    be(this, "defaults", Hc());
    be(this, "options", this.setOptions);
    be(this, "parse", this.parseMarkdown(!0));
    be(this, "parseInline", this.parseMarkdown(!1));
    be(this, "Parser", Bn);
    be(this, "Renderer", So);
    be(this, "TextRenderer", Xc);
    be(this, "Lexer", Nn);
    be(this, "Tokenizer", wo);
    be(this, "Hooks", fo);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var r, i;
    let n = [];
    for (const o of e)
      switch (n = n.concat(t.call(this, o)), o.type) {
        case "table": {
          const s = o;
          for (const a of s.header)
            n = n.concat(this.walkTokens(a.tokens, t));
          for (const a of s.rows)
            for (const l of a)
              n = n.concat(this.walkTokens(l.tokens, t));
          break;
        }
        case "list": {
          const s = o;
          n = n.concat(this.walkTokens(s.items, t));
          break;
        }
        default: {
          const s = o;
          (i = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && i[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((a) => {
            const l = s[a].flat(1 / 0);
            n = n.concat(this.walkTokens(l, t));
          }) : s.tokens && (n = n.concat(this.walkTokens(s.tokens, t)));
        }
      }
    return n;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      const r = { ...n };
      if (r.async = this.defaults.async || r.async || !1, n.extensions && (n.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          const o = t.renderers[i.name];
          o ? t.renderers[i.name] = function(...s) {
            let a = i.renderer.apply(this, s);
            return a === !1 && (a = o.apply(this, s)), a;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const o = t[i.level];
          o ? o.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), r.extensions = t), n.renderer) {
        const i = this.defaults.renderer || new So(this.defaults);
        for (const o in n.renderer) {
          if (!(o in i))
            throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o))
            continue;
          const s = o, a = n.renderer[s], l = i[s];
          i[s] = (...c) => {
            let u = a.apply(i, c);
            return u === !1 && (u = l.apply(i, c)), u || "";
          };
        }
        r.renderer = i;
      }
      if (n.tokenizer) {
        const i = this.defaults.tokenizer || new wo(this.defaults);
        for (const o in n.tokenizer) {
          if (!(o in i))
            throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o))
            continue;
          const s = o, a = n.tokenizer[s], l = i[s];
          i[s] = (...c) => {
            let u = a.apply(i, c);
            return u === !1 && (u = l.apply(i, c)), u;
          };
        }
        r.tokenizer = i;
      }
      if (n.hooks) {
        const i = this.defaults.hooks || new fo();
        for (const o in n.hooks) {
          if (!(o in i))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const s = o, a = n.hooks[s], l = i[s];
          fo.passThroughHooks.has(o) ? i[s] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(i, c)).then((h) => l.call(i, h));
            const u = a.call(i, c);
            return l.call(i, u);
          } : i[s] = (...c) => {
            let u = a.apply(i, c);
            return u === !1 && (u = l.apply(i, c)), u;
          };
        }
        r.hooks = i;
      }
      if (n.walkTokens) {
        const i = this.defaults.walkTokens, o = n.walkTokens;
        r.walkTokens = function(s) {
          let a = [];
          return a.push(o.call(this, s)), i && (a = a.concat(i.call(this, s))), a;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return Nn.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return Bn.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, r) => {
      const i = { ...r }, o = { ...this.defaults, ...i }, s = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && i.async === !1)
        return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null)
        return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string")
        return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      o.hooks && (o.hooks.options = o, o.hooks.block = e);
      const a = o.hooks ? o.hooks.provideLexer() : e ? Nn.lex : Nn.lexInline, l = o.hooks ? o.hooks.provideParser() : e ? Bn.parse : Bn.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(n) : n).then((c) => a(c, o)).then((c) => o.hooks ? o.hooks.processAllTokens(c) : c).then((c) => o.walkTokens ? Promise.all(this.walkTokens(c, o.walkTokens)).then(() => c) : c).then((c) => l(c, o)).then((c) => o.hooks ? o.hooks.postprocess(c) : c).catch(s);
      try {
        o.hooks && (n = o.hooks.preprocess(n));
        let c = a(n, o);
        o.hooks && (c = o.hooks.processAllTokens(c)), o.walkTokens && this.walkTokens(c, o.walkTokens);
        let u = l(c, o);
        return o.hooks && (u = o.hooks.postprocess(u)), u;
      } catch (c) {
        return s(c);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const r = "<p>An error occurred:</p><pre>" + Mn(n.message + "", !0) + "</pre>";
        return t ? Promise.resolve(r) : r;
      }
      if (t)
        return Promise.reject(n);
      throw n;
    };
  }
}, fr = new m1();
function lt(e, t) {
  return fr.parse(e, t);
}
lt.options = lt.setOptions = function(e) {
  return fr.setOptions(e), lt.defaults = fr.defaults, $g(lt.defaults), lt;
};
lt.getDefaults = Hc;
lt.defaults = mr;
lt.use = function(...e) {
  return fr.use(...e), lt.defaults = fr.defaults, $g(lt.defaults), lt;
};
lt.walkTokens = function(e, t) {
  return fr.walkTokens(e, t);
};
lt.parseInline = fr.parseInline;
lt.Parser = Bn;
lt.parser = Bn.parse;
lt.Renderer = So;
lt.TextRenderer = Xc;
lt.Lexer = Nn;
lt.lexer = Nn.lex;
lt.Tokenizer = wo;
lt.Hooks = fo;
lt.parse = lt;
lt.options;
lt.setOptions;
lt.use;
lt.walkTokens;
lt.parseInline;
Bn.parse;
Nn.lex;
const v1 = /* @__PURE__ */ an("div")({
  name: "MarkdownContainer",
  class: "gdg-mnuv029",
  propsAsIs: !1
});
class y1 extends St.PureComponent {
  constructor() {
    super(...arguments);
    be(this, "targetElement", null);
    be(this, "containerRefHook", (n) => {
      this.targetElement = n, this.renderMarkdownIntoDiv();
    });
  }
  renderMarkdownIntoDiv() {
    const { targetElement: n, props: r } = this;
    if (n === null)
      return;
    const { contents: i, createNode: o } = r, s = lt(i), a = document.createRange();
    a.selectNodeContents(n), a.deleteContents();
    let l = o == null ? void 0 : o(s);
    if (l === void 0) {
      const u = document.createElement("template");
      u.innerHTML = s, l = u.content;
    }
    n.append(l);
    const c = n.getElementsByTagName("a");
    for (const u of c)
      u.target = "_blank", u.rel = "noreferrer noopener";
  }
  render() {
    return this.renderMarkdownIntoDiv(), St.createElement(v1, { ref: this.containerRefHook });
  }
}
const b1 = /* @__PURE__ */ an("textarea")({
  name: "InputBox",
  class: "gdg-izpuzkl",
  propsAsIs: !1
}), w1 = /* @__PURE__ */ an("div")({
  name: "ShadowBox",
  class: "gdg-s69h75o",
  propsAsIs: !1
}), S1 = /* @__PURE__ */ an("div")({
  name: "GrowingEntryStyle",
  class: "gdg-g1y0xocz",
  propsAsIs: !1
});
let uf = 0;
const Lo = (e) => {
  const { placeholder: t, value: n, onKeyDown: r, highlight: i, altNewline: o, validatedSelection: s, ...a } = e, { onChange: l, className: c } = a, u = p.useRef(null), h = n ?? "";
  rn(l !== void 0, "GrowingEntry must be a controlled input area");
  const [d] = p.useState(() => "input-box-" + (uf = (uf + 1) % 1e7));
  p.useEffect(() => {
    const f = u.current;
    if (f === null || f.disabled)
      return;
    const v = h.toString().length;
    f.focus(), f.setSelectionRange(i ? 0 : v, v);
  }, []), p.useLayoutEffect(() => {
    var f;
    if (s !== void 0) {
      const v = typeof s == "number" ? [s, null] : s;
      (f = u.current) == null || f.setSelectionRange(v[0], v[1]);
    }
  }, [s]);
  const g = p.useCallback((f) => {
    f.key === "Enter" && f.shiftKey && o === !0 || r == null || r(f);
  }, [o, r]);
  return p.createElement(
    S1,
    { className: "gdg-growing-entry" },
    p.createElement(w1, { className: c }, h + `
`),
    p.createElement(b1, { ...a, className: (c ?? "") + " gdg-input", id: d, ref: u, onKeyDown: g, value: h, placeholder: t, dir: "auto" })
  );
};
var C1 = {};
const Cs = {};
let Vn = null;
function k1() {
  const e = document.createElement("div");
  return e.style.opacity = "0", e.style.pointerEvents = "none", e.style.position = "fixed", document.body.append(e), e;
}
function vc(e) {
  const t = e.toLowerCase().trim();
  if (Cs[t] !== void 0)
    return Cs[t];
  Vn = Vn || k1(), Vn.style.color = "#000", Vn.style.color = t;
  const n = getComputedStyle(Vn).color;
  Vn.style.color = "#fff", Vn.style.color = t;
  const r = getComputedStyle(Vn).color;
  if (r !== n)
    return [0, 0, 0, 1];
  let i = r.replace(/[^\d.,]/g, "").split(",").map(Number.parseFloat);
  return i.length < 4 && i.push(1), i = i.map((o) => {
    const s = Number.isNaN(o);
    return C1.NODE_ENV !== "production" && s && console.warn("Could not parse color", e), s ? 0 : o;
  }), Cs[t] = i, i;
}
function hr(e, t) {
  const [n, r, i] = vc(e);
  return `rgba(${n}, ${r}, ${i}, ${t})`;
}
const df = /* @__PURE__ */ new Map();
function ff(e, t) {
  const n = `${e}-${t}`, r = df.get(n);
  if (r !== void 0)
    return r;
  const i = on(e, t);
  return df.set(n, i), i;
}
function on(e, t) {
  if (t === void 0)
    return e;
  const [n, r, i, o] = vc(e);
  if (o === 1)
    return e;
  const [s, a, l, c] = vc(t), u = o + c * (1 - o), h = (o * n + c * s * (1 - o)) / u, d = (o * r + c * a * (1 - o)) / u, g = (o * i + c * l * (1 - o)) / u;
  return `rgba(${h}, ${d}, ${g}, ${u})`;
}
var zr = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), yc = /* @__PURE__ */ new Map();
function x1() {
  zr.clear(), yc.clear(), Nr.clear();
}
function R1(e, t, n, r, i) {
  var o, s, a;
  let l = 0, c = {};
  for (let h of e) l += (o = n.get(h)) != null ? o : i, c[h] = ((s = c[h]) != null ? s : 0) + 1;
  let u = t - l;
  for (let h of Object.keys(c)) {
    let d = c[h], g = (a = n.get(h)) != null ? a : i, f = g * d / l, v = u * f * r / d, R = g + v;
    n.set(h, R);
  }
}
function _1(e, t) {
  var n;
  let r = /* @__PURE__ */ new Map(), i = 0;
  for (let c of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.-+=?") {
    let u = e.measureText(c).width;
    r.set(c, u), i += u;
  }
  let o = i / r.size, s = 3, a = (t / o + s) / (s + 1), l = r.keys();
  for (let c of l) r.set(c, ((n = r.get(c)) != null ? n : o) * a);
  return r;
}
function Si(e, t, n, r) {
  var i, o;
  let s = Nr.get(n);
  if (r && s !== void 0 && s.count > 2e4) {
    let c = yc.get(n);
    if (c === void 0 && (c = _1(e, s.size), yc.set(n, c)), s.count > 5e5) {
      let h = 0;
      for (let d of t) h += (i = c.get(d)) != null ? i : s.size;
      return h * 1.01;
    }
    let u = e.measureText(t);
    return R1(t, u.width, c, Math.max(0.05, 1 - s.count / 2e5), s.size), Nr.set(n, { count: s.count + t.length, size: s.size }), u.width;
  }
  let a = e.measureText(t), l = a.width / t.length;
  if (((o = s == null ? void 0 : s.count) != null ? o : 0) > 2e4) return a.width;
  if (s === void 0) Nr.set(n, { count: t.length, size: l });
  else {
    let c = l - s.size, u = t.length / (s.count + t.length), h = s.size + c * u;
    Nr.set(n, { count: s.count + t.length, size: h });
  }
  return a.width;
}
function T1(e, t, n, r, i, o, s, a) {
  if (t.length <= 1) return t.length;
  if (i < n) return -1;
  let l = Math.floor(n / i * o), c = Si(e, t.slice(0, Math.max(0, l)), r, s);
  if (c !== n) if (c < n) {
    for (; c < n; ) l++, c = Si(e, t.slice(0, Math.max(0, l)), r, s);
    l--;
  } else for (; c > n; ) {
    let u = t.lastIndexOf(" ", l - 1);
    u > 0 ? l = u : l--, c = Si(e, t.slice(0, Math.max(0, l)), r, s);
  }
  if (t[l] !== " ") {
    let u = 0;
    u = t.lastIndexOf(" ", l), u > 0 && (l = u);
  }
  return l;
}
function E1(e, t, n, r, i, o) {
  let s = `${t}_${n}_${r}px`, a = zr.get(s);
  if (a !== void 0) return a;
  if (r <= 0) return [];
  let l = [], c = t.split(`
`), u = Nr.get(n), h = u === void 0 ? t.length : r / u.size * 1.5, d = i && u !== void 0 && u.count > 2e4;
  for (let g of c) {
    let f = Si(e, g.slice(0, Math.max(0, h)), n, d), v = Math.min(g.length, h);
    if (f <= r) l.push(g);
    else {
      for (; f > r; ) {
        let R = T1(e, g, r, n, f, v, d), I = g.slice(0, Math.max(0, R));
        g = g.slice(I.length), l.push(I), f = Si(e, g.slice(0, Math.max(0, h)), n, d), v = Math.min(g.length, h);
      }
      f > 0 && l.push(g);
    }
  }
  return l = l.map((g, f) => f === 0 ? g.trimEnd() : g.trim()), zr.set(s, l), zr.size > 500 && zr.delete(zr.keys().next().value), l;
}
function M1(e, t) {
  return St.useMemo(() => e.map((n, r) => ({
    group: n.group,
    grow: n.grow,
    hasMenu: n.hasMenu,
    icon: n.icon,
    id: n.id,
    menuIcon: n.menuIcon,
    overlayIcon: n.overlayIcon,
    sourceIndex: r,
    sticky: r < t,
    style: n.style,
    themeOverride: n.themeOverride,
    title: n.title,
    trailingRowOptions: n.trailingRowOptions,
    width: n.width,
    growOffset: n.growOffset,
    rowMarker: n.rowMarker,
    rowMarkerChecked: n.rowMarkerChecked
  })), [e, t]);
}
function I1(e, t) {
  const [n, r] = t;
  if (e.columns.hasIndex(n) || e.rows.hasIndex(r))
    return !0;
  if (e.current !== void 0) {
    if (Ci(e.current.cell, t))
      return !0;
    const i = [e.current.range, ...e.current.rangeStack];
    for (const o of i)
      if (n >= o.x && n < o.x + o.width && r >= o.y && r < o.y + o.height)
        return !0;
  }
  return !1;
}
function _i(e, t) {
  return (e ?? "") === (t ?? "");
}
function A1(e, t, n) {
  return n.current === void 0 || e[1] !== n.current.cell[1] ? !1 : t.span === void 0 ? n.current.cell[0] === e[0] : n.current.cell[0] >= t.span[0] && n.current.cell[0] <= t.span[1];
}
function Zg(e, t) {
  const [n, r] = e;
  return n >= t.x && n < t.x + t.width && r >= t.y && r < t.y + t.height;
}
function Ci(e, t) {
  return (e == null ? void 0 : e[0]) === (t == null ? void 0 : t[0]) && (e == null ? void 0 : e[1]) === (t == null ? void 0 : t[1]);
}
function Jg(e) {
  return [e.x + e.width - 1, e.y + e.height - 1];
}
function hf(e, t, n) {
  const r = n.x, i = n.x + n.width - 1, o = n.y, s = n.y + n.height - 1, [a, l] = e;
  if (l < o || l > s)
    return !1;
  if (t.span === void 0)
    return a >= r && a <= i;
  const [c, u] = t.span;
  return c >= r && c <= i || u >= r && c <= i || c < r && u > i;
}
function P1(e, t, n, r) {
  let i = 0;
  if (n.current === void 0)
    return i;
  const o = n.current.range;
  (r || o.height * o.width > 1) && hf(e, t, o) && i++;
  for (const s of n.current.rangeStack)
    hf(e, t, s) && i++;
  return i;
}
function Qg(e, t) {
  let n = e;
  if (t !== void 0) {
    let r = [...e];
    const i = n[t.src];
    t.src > t.dest ? (r.splice(t.src, 1), r.splice(t.dest, 0, i)) : (r.splice(t.dest + 1, 0, i), r.splice(t.src, 1)), r = r.map((o, s) => ({
      ...o,
      sticky: e[s].sticky
    })), n = r;
  }
  return n;
}
function jr(e, t) {
  let n = 0;
  const r = Qg(e, t);
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (o.sticky)
      n += o.width;
    else
      break;
  }
  return n;
}
function vr(e, t, n) {
  if (typeof n == "number")
    return t * n;
  {
    let r = 0;
    for (let i = e - t; i < e; i++)
      r += n(i);
    return r;
  }
}
function bc(e, t, n, r, i) {
  const o = Qg(e, r), s = [];
  for (const c of o)
    if (c.sticky)
      s.push(c);
    else
      break;
  if (s.length > 0)
    for (const c of s)
      n -= c.width;
  let a = t, l = i ?? 0;
  for (; l <= n && a < o.length; )
    l += o[a].width, a++;
  for (let c = t; c < a; c++) {
    const u = o[c];
    u.sticky || s.push(u);
  }
  return s;
}
function O1(e, t, n) {
  let r = 0;
  for (const i of t) {
    const o = i.sticky ? r : r + (n ?? 0);
    if (e <= o + i.width)
      return i.sourceIndex;
    r += i.width;
  }
  return -1;
}
function D1(e, t, n, r, i, o, s, a, l, c) {
  const u = r + i;
  if (n && e <= i)
    return -2;
  if (e <= u)
    return -1;
  let h = t;
  for (let f = 0; f < c; f++) {
    const v = o - 1 - f, R = typeof s == "number" ? s : s(v);
    if (h -= R, e >= h)
      return v;
  }
  const d = o - c, g = e - (l ?? 0);
  if (typeof s == "number") {
    const f = Math.floor((g - u) / s) + a;
    return f >= d ? void 0 : f;
  } else {
    let f = u;
    for (let v = a; v < d; v++) {
      const R = s(v);
      if (g <= f + R)
        return v;
      f += R;
    }
    return;
  }
}
let ho = 0, ki = {};
const L1 = typeof window > "u";
async function F1() {
  var e;
  L1 || ((e = document == null ? void 0 : document.fonts) == null ? void 0 : e.ready) === void 0 || (await document.fonts.ready, ho = 0, ki = {}, x1());
}
F1();
function ep(e, t, n, r) {
  return `${e}_${r ?? (t == null ? void 0 : t.font)}_${n}`;
}
function Ai(e, t, n, r = "middle") {
  const i = ep(e, t, r, n);
  let o = ki[i];
  return o === void 0 && (o = t.measureText(e), ki[i] = o, ho++), ho > 1e4 && (ki = {}, ho = 0), o;
}
function q1(e, t) {
  const n = ep(e, void 0, "middle", t);
  return ki[n];
}
function tr(e, t) {
  return typeof t != "string" && (t = t.baseFontFull), H1(e, t);
}
function gf(e, t) {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  e.save(), e.textBaseline = t;
  const r = e.measureText(n);
  return e.restore(), r;
}
const pf = [];
function H1(e, t) {
  for (const o of pf)
    if (o.key === t)
      return o.val;
  const n = gf(e, "alphabetic"), i = -(gf(e, "middle").actualBoundingBoxDescent - n.actualBoundingBoxDescent) + n.actualBoundingBoxAscent / 2;
  return pf.push({
    key: t,
    val: i
  }), i;
}
function z1(e, t, n, r, i, o) {
  const { ctx: s, rect: a, theme: l } = e;
  let c = Number.MAX_SAFE_INTEGER;
  const u = 500;
  if (t !== void 0 && (c = n - t, c < u)) {
    const h = 1 - c / u;
    s.globalAlpha = h, s.fillStyle = l.bgSearchResult, s.fillRect(a.x + 1, a.y + 1, a.width - (i ? 2 : 1), a.height - (o ? 2 : 1)), s.globalAlpha = 1, r !== void 0 && (r.fillStyle = l.bgSearchResult);
  }
  return c < u;
}
function Pi(e, t, n) {
  const { ctx: r, theme: i } = e, o = t ?? {}, s = n ?? i.textDark;
  return s !== o.fillStyle && (r.fillStyle = s, o.fillStyle = s), o;
}
function tp(e, t, n, r, i, o, s, a, l) {
  l === "right" ? e.fillText(t, n + i - (a.cellHorizontalPadding + 0.5), r + o / 2 + s) : l === "center" ? e.fillText(t, n + i / 2, r + o / 2 + s) : e.fillText(t, n + a.cellHorizontalPadding + 0.5, r + o / 2 + s);
}
function np(e, t) {
  const n = Ai("ABCi09jgqpy", e, t);
  return n.actualBoundingBoxAscent + n.actualBoundingBoxDescent;
}
function $1(e, t) {
  e.includes(`
`) && (e = e.split(/\r?\n/, 1)[0]);
  const n = t / 4;
  return e.length > n && (e = e.slice(0, n)), e;
}
function N1(e, t, n, r, i, o, s, a, l, c) {
  const u = a.baseFontFull, h = E1(e, t, u, i - a.cellHorizontalPadding * 2, c ?? !1), d = np(e, u), g = a.lineHeight * d, f = d + g * (h.length - 1), v = f + a.cellVerticalPadding > o;
  v && (e.save(), e.rect(n, r, i, o), e.clip());
  const R = r + o / 2 - f / 2;
  let I = Math.max(r + a.cellVerticalPadding, R);
  for (const y of h)
    if (tp(e, y, n, I, i, d, s, a, l), I += g, I > r + o)
      break;
  v && e.restore();
}
function $n(e, t, n, r, i) {
  const { ctx: o, rect: s, theme: a } = e, { x: l, y: c, width: u, height: h } = s;
  r = r ?? !1, r || (t = $1(t, u));
  const d = tr(o, a), g = qc(t) === "rtl";
  if (n === void 0 && g && (n = "right"), g && (o.direction = "rtl"), t.length > 0) {
    let f = !1;
    n === "right" ? (o.textAlign = "right", f = !0) : n !== void 0 && n !== "left" && (o.textAlign = n, f = !0), r ? N1(o, t, l, c, u, h, d, a, n, i) : tp(o, t, l, c, u, h, d, a, n), f && (o.textAlign = "start"), g && (o.direction = "inherit");
  }
}
function In(e, t, n, r, i, o) {
  typeof o == "number" && (o = { tl: o, tr: o, br: o, bl: o }), o = {
    tl: Math.max(0, Math.min(o.tl, i / 2, r / 2)),
    tr: Math.max(0, Math.min(o.tr, i / 2, r / 2)),
    bl: Math.max(0, Math.min(o.bl, i / 2, r / 2)),
    br: Math.max(0, Math.min(o.br, i / 2, r / 2))
  }, e.moveTo(t + o.tl, n), e.arcTo(t + r, n, t + r, n + o.tr, o.tr), e.arcTo(t + r, n + i, t + r - o.br, n + i, o.br), e.arcTo(t, n + i, t, n + i - o.bl, o.bl), e.arcTo(t, n, t + o.tl, n, o.tl);
}
function B1(e, t, n) {
  e.arc(t, n - 1.25 * 3.5, 1.25, 0, 2 * Math.PI, !1), e.arc(t, n, 1.25, 0, 2 * Math.PI, !1), e.arc(t, n + 1.25 * 3.5, 1.25, 0, 2 * Math.PI, !1);
}
function W1(e, t, n) {
  const r = function(a, l) {
    const c = l.x - a.x, u = l.y - a.y, h = Math.sqrt(c * c + u * u), d = c / h, g = u / h;
    return {
      x: c,
      y: l.y - a.y,
      len: h,
      nx: d,
      ny: g,
      ang: Math.atan2(g, d)
    };
  };
  let i;
  const o = t.length;
  let s = t[o - 1];
  for (let a = 0; a < o; a++) {
    let l = t[a % o];
    const c = t[(a + 1) % o], u = r(l, s), h = r(l, c), d = u.nx * h.ny - u.ny * h.nx, g = u.nx * h.nx - u.ny * -h.ny;
    let f = Math.asin(d < -1 ? -1 : d > 1 ? 1 : d), v = 1, R = !1;
    g < 0 ? f < 0 ? f = Math.PI + f : (f = Math.PI - f, v = -1, R = !0) : f > 0 && (v = -1, R = !0), i = l.radius !== void 0 ? l.radius : n;
    const I = f / 2;
    let y = Math.abs(Math.cos(I) * i / Math.sin(I)), C;
    y > Math.min(u.len / 2, h.len / 2) ? (y = Math.min(u.len / 2, h.len / 2), C = Math.abs(y * Math.sin(I) / Math.cos(I))) : C = i;
    let A = l.x + h.nx * y, S = l.y + h.ny * y;
    A += -h.ny * C * v, S += h.nx * C * v, e.arc(A, S, C, u.ang + Math.PI / 2 * v, h.ang - Math.PI / 2 * v, R), s = l, l = c;
  }
  e.closePath();
}
function wc(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f) {
  const v = {
    x: 0,
    y: o + c,
    width: 0,
    height: 0
  };
  if (e >= g.length || t >= u || t < -2 || e < 0)
    return v;
  const R = o - i;
  if (e >= h) {
    const I = s > e ? -1 : 1, y = jr(g);
    v.x += y + l;
    for (let C = s; C !== e; C += I)
      v.x += g[I === 1 ? C : C - 1].width * I;
  } else
    for (let I = 0; I < e; I++)
      v.x += g[I].width;
  if (v.width = g[e].width + 1, t === -1)
    v.y = i, v.height = R;
  else if (t === -2) {
    v.y = 0, v.height = i;
    let I = e;
    const y = g[e].group, C = g[e].sticky;
    for (; I > 0 && _i(g[I - 1].group, y) && g[I - 1].sticky === C; ) {
      const S = g[I - 1];
      v.x -= S.width, v.width += S.width, I--;
    }
    let A = e;
    for (; A + 1 < g.length && _i(g[A + 1].group, y) && g[A + 1].sticky === C; ) {
      const S = g[A + 1];
      v.width += S.width, A++;
    }
    if (!C) {
      const S = jr(g), M = v.x - S;
      M < 0 && (v.x -= M, v.width += M), v.x + v.width > n && (v.width = n - v.x);
    }
  } else if (t >= u - d) {
    let I = u - t;
    for (v.y = r; I > 0; ) {
      const y = t + I - 1;
      v.height = typeof f == "number" ? f : f(y), v.y -= v.height, I--;
    }
    v.height += 1;
  } else {
    const I = a > t ? -1 : 1;
    if (typeof f == "number") {
      const y = t - a;
      v.y += y * f;
    } else
      for (let y = a; y !== t; y += I)
        v.y += f(y) * I;
    v.height = (typeof f == "number" ? f : f(t)) + 1;
  }
  return v;
}
const Yc = 1 << 21;
function kn(e, t) {
  return (t + 2) * Yc + e;
}
function rp(e) {
  return e % Yc;
}
function Gc(e) {
  return Math.floor(e / Yc) - 2;
}
function Kc(e) {
  const t = rp(e), n = Gc(e);
  return [t, n];
}
class ip {
  constructor() {
    be(this, "visibleWindow", {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    });
    be(this, "freezeCols", 0);
    be(this, "freezeRows", []);
    be(this, "isInWindow", (t) => {
      const n = rp(t), r = Gc(t), i = this.visibleWindow, o = n >= i.x && n <= i.x + i.width || n < this.freezeCols, s = r >= i.y && r <= i.y + i.height || this.freezeRows.includes(r);
      return o && s;
    });
  }
  setWindow(t, n, r) {
    this.visibleWindow.x === t.x && this.visibleWindow.y === t.y && this.visibleWindow.width === t.width && this.visibleWindow.height === t.height && this.freezeCols === n && Wr(this.freezeRows, r) || (this.visibleWindow = t, this.freezeCols = n, this.freezeRows = r, this.clearOutOfWindow());
  }
}
class j1 extends ip {
  constructor() {
    super(...arguments);
    be(this, "cache", /* @__PURE__ */ new Map());
    be(this, "setValue", (n, r) => {
      this.cache.set(kn(n[0], n[1]), r);
    });
    be(this, "getValue", (n) => this.cache.get(kn(n[0], n[1])));
    be(this, "clearOutOfWindow", () => {
      for (const [n] of this.cache.entries())
        this.isInWindow(n) || this.cache.delete(n);
    });
  }
}
class xi {
  constructor(t = []) {
    be(this, "cells");
    this.cells = new Set(t.map((n) => kn(n[0], n[1])));
  }
  add(t) {
    this.cells.add(kn(t[0], t[1]));
  }
  has(t) {
    return t === void 0 ? !1 : this.cells.has(kn(t[0], t[1]));
  }
  remove(t) {
    this.cells.delete(kn(t[0], t[1]));
  }
  clear() {
    this.cells.clear();
  }
  get size() {
    return this.cells.size;
  }
  hasHeader() {
    for (const t of this.cells)
      if (Gc(t) < 0)
        return !0;
    return !1;
  }
  hasItemInRectangle(t) {
    for (let n = t.y; n < t.y + t.height; n++)
      for (let r = t.x; r < t.x + t.width; r++)
        if (this.cells.has(kn(r, n)))
          return !0;
    return !1;
  }
  hasItemInRegion(t) {
    for (const n of t)
      if (this.hasItemInRectangle(n))
        return !0;
    return !1;
  }
  *values() {
    for (const t of this.cells)
      yield Kc(t);
  }
}
function U1(e) {
  return {
    "--gdg-accent-color": e.accentColor,
    "--gdg-accent-fg": e.accentFg,
    "--gdg-accent-light": e.accentLight,
    "--gdg-text-dark": e.textDark,
    "--gdg-text-medium": e.textMedium,
    "--gdg-text-light": e.textLight,
    "--gdg-text-bubble": e.textBubble,
    "--gdg-bg-icon-header": e.bgIconHeader,
    "--gdg-fg-icon-header": e.fgIconHeader,
    "--gdg-text-header": e.textHeader,
    "--gdg-text-group-header": e.textGroupHeader ?? e.textHeader,
    "--gdg-text-header-selected": e.textHeaderSelected,
    "--gdg-bg-cell": e.bgCell,
    "--gdg-bg-cell-medium": e.bgCellMedium,
    "--gdg-bg-header": e.bgHeader,
    "--gdg-bg-header-has-focus": e.bgHeaderHasFocus,
    "--gdg-bg-header-hovered": e.bgHeaderHovered,
    "--gdg-bg-bubble": e.bgBubble,
    "--gdg-bg-bubble-selected": e.bgBubbleSelected,
    "--gdg-bg-search-result": e.bgSearchResult,
    "--gdg-border-color": e.borderColor,
    "--gdg-horizontal-border-color": e.horizontalBorderColor ?? e.borderColor,
    "--gdg-drilldown-border": e.drilldownBorder,
    "--gdg-link-color": e.linkColor,
    "--gdg-cell-horizontal-padding": `${e.cellHorizontalPadding}px`,
    "--gdg-cell-vertical-padding": `${e.cellVerticalPadding}px`,
    "--gdg-header-font-style": e.headerFontStyle,
    "--gdg-base-font-style": e.baseFontStyle,
    "--gdg-marker-font-style": e.markerFontStyle,
    "--gdg-font-family": e.fontFamily,
    "--gdg-editor-font-size": e.editorFontSize,
    ...e.resizeIndicatorColor === void 0 ? {} : { "--gdg-resize-indicator-color": e.resizeIndicatorColor },
    ...e.headerBottomBorderColor === void 0 ? {} : { "--gdg-header-bottom-border-color": e.headerBottomBorderColor },
    ...e.roundingRadius === void 0 ? {} : { "--gdg-rounding-radius": `${e.roundingRadius}px` }
  };
}
const op = {
  accentColor: "#4F5DFF",
  accentFg: "#FFFFFF",
  accentLight: "rgba(62, 116, 253, 0.1)",
  textDark: "#313139",
  textMedium: "#737383",
  textLight: "#B2B2C0",
  textBubble: "#313139",
  bgIconHeader: "#737383",
  fgIconHeader: "#FFFFFF",
  textHeader: "#313139",
  textGroupHeader: "#313139BB",
  textHeaderSelected: "#FFFFFF",
  bgCell: "#FFFFFF",
  bgCellMedium: "#FAFAFB",
  bgHeader: "#F7F7F8",
  bgHeaderHasFocus: "#E9E9EB",
  bgHeaderHovered: "#EFEFF1",
  bgBubble: "#EDEDF3",
  bgBubbleSelected: "#FFFFFF",
  bgSearchResult: "#fff9e3",
  borderColor: "rgba(115, 116, 131, 0.16)",
  drilldownBorder: "rgba(0, 0, 0, 0)",
  linkColor: "#353fb5",
  cellHorizontalPadding: 8,
  cellVerticalPadding: 3,
  headerIconSize: 18,
  headerFontStyle: "600 13px",
  baseFontStyle: "13px",
  markerFontStyle: "9px",
  fontFamily: "Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif",
  editorFontSize: "13px",
  lineHeight: 1.4
  //unitless scaler depends on your font
};
function ap() {
  return op;
}
const X1 = St.createContext(op);
function Qn(e, ...t) {
  const n = { ...e };
  for (const r of t)
    if (r !== void 0)
      for (const i in r)
        r.hasOwnProperty(i) && (i === "bgCell" ? n[i] = on(r[i], n[i]) : n[i] = r[i]);
  return (n.headerFontFull === void 0 || e.fontFamily !== n.fontFamily || e.headerFontStyle !== n.headerFontStyle) && (n.headerFontFull = `${n.headerFontStyle} ${n.fontFamily}`), (n.baseFontFull === void 0 || e.fontFamily !== n.fontFamily || e.baseFontStyle !== n.baseFontStyle) && (n.baseFontFull = `${n.baseFontStyle} ${n.fontFamily}`), (n.markerFontFull === void 0 || e.fontFamily !== n.fontFamily || e.markerFontStyle !== n.markerFontStyle) && (n.markerFontFull = `${n.markerFontStyle} ${n.fontFamily}`), n;
}
const Sc = 150;
function Y1(e, t, n, r) {
  var o;
  const i = r(t);
  return ((o = i == null ? void 0 : i.measure) == null ? void 0 : o.call(i, e, t, n)) ?? Sc;
}
function sp(e, t, n, r, i, o, s, a, l) {
  let c = 0;
  const u = i === void 0 ? [] : i.map((d) => {
    const g = Y1(e, d[r], t, l);
    return c = Math.max(c, g), g;
  });
  if (u.length > 5 && a) {
    c = 0;
    let d = 0;
    for (const f of u)
      d += f;
    const g = d / u.length;
    for (let f = 0; f < u.length; f++)
      u[f] >= g * 2 ? u[f] = 0 : c = Math.max(c, u[f]);
  }
  c = Math.max(c, e.measureText(n.title).width + 16 + (n.icon === void 0 ? 0 : 28));
  const h = Math.max(Math.ceil(o), Math.min(Math.floor(s), Math.ceil(c)));
  return {
    ...n,
    width: h
  };
}
function G1(e, t, n, r, i, o, s, a, l) {
  const c = p.useRef(t), u = p.useRef(n), h = p.useRef(s);
  c.current = t, u.current = n, h.current = s;
  const [d, g] = p.useMemo(() => {
    if (typeof window > "u")
      return [null, null];
    const y = document.createElement("canvas");
    return y.style.display = "none", y.style.opacity = "0", y.style.position = "fixed", [y, y.getContext("2d", { alpha: !1 })];
  }, []);
  p.useLayoutEffect(() => (d && document.documentElement.append(d), () => {
    d == null || d.remove();
  }), [d]);
  const f = p.useRef({}), v = p.useRef(), [R, I] = p.useState();
  return p.useLayoutEffect(() => {
    const y = u.current;
    if (y === void 0 || e.every(no))
      return;
    let C = Math.max(1, 10 - Math.floor(e.length / 1e4)), A = 0;
    C < c.current && C > 1 && (C--, A = 1);
    const S = {
      x: 0,
      y: 0,
      width: e.length,
      height: Math.min(c.current, C)
    }, M = {
      x: 0,
      y: c.current - 1,
      width: e.length,
      height: 1
    };
    (async () => {
      const E = y(S, l.signal), T = A > 0 ? y(M, l.signal) : void 0;
      let L;
      typeof E == "object" ? L = E : L = await kd(E), T !== void 0 && (typeof T == "object" ? L = [...L, ...T] : L = [...L, ...await kd(T)]), v.current = e, I(L);
    })();
  }, [l.signal, e]), p.useMemo(() => {
    let C = e.every(no) ? e : g === null ? e.map((P) => no(P) ? P : {
      ...P,
      width: Sc
    }) : (g.font = h.current.baseFontFull, e.map((P, E) => {
      if (no(P))
        return P;
      if (f.current[P.id] !== void 0)
        return {
          ...P,
          width: f.current[P.id]
        };
      if (R === void 0 || v.current !== e || P.id === void 0)
        return {
          ...P,
          width: Sc
        };
      const T = sp(g, s, P, E, R, i, o, !0, a);
      return f.current[P.id] = T.width, T;
    })), A = 0, S = 0;
    const M = [];
    for (const [P, E] of C.entries())
      A += E.width, E.grow !== void 0 && E.grow > 0 && (S += E.grow, M.push(P));
    if (A < r && M.length > 0) {
      const P = [...C], E = r - A;
      let T = E;
      for (let L = 0; L < M.length; L++) {
        const x = M[L], b = (C[x].grow ?? 0) / S, k = L === M.length - 1 ? T : Math.min(T, Math.floor(E * b));
        P[x] = {
          ...C[x],
          growOffset: k,
          width: C[x].width + k
        }, T -= k;
      }
      C = P;
    }
    return {
      sizedColumns: C,
      nonGrowWidth: A
    };
  }, [r, e, g, R, s, i, o, a]);
}
var ks, mf;
function K1() {
  if (mf) return ks;
  mf = 1;
  function e(t, n, r) {
    return t === t && (r !== void 0 && (t = t <= r ? t : r), n !== void 0 && (t = t >= n ? t : n)), t;
  }
  return ks = e, ks;
}
var xs, vf;
function V1() {
  if (vf) return xs;
  vf = 1;
  var e = K1(), t = Lc();
  function n(r, i, o) {
    return o === void 0 && (o = i, i = void 0), o !== void 0 && (o = t(o), o = o === o ? o : 0), i !== void 0 && (i = t(i), i = i === i ? i : 0), e(t(r), i, o);
  }
  return xs = n, xs;
}
var Z1 = V1();
const Cn = /* @__PURE__ */ er(Z1);
var Rs, yf;
function J1() {
  if (yf) return Rs;
  yf = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return Rs = t, Rs;
}
var _s, bf;
function Q1() {
  if (bf) return _s;
  bf = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return _s = e, _s;
}
var Ts, wf;
function lp() {
  if (wf) return Ts;
  wf = 1;
  var e = Ec(), t = J1(), n = Q1();
  function r(i) {
    var o = -1, s = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++o < s; )
      this.add(i[o]);
  }
  return r.prototype.add = r.prototype.push = t, r.prototype.has = n, Ts = r, Ts;
}
var Es, Sf;
function ev() {
  if (Sf) return Es;
  Sf = 1;
  function e(t, n, r, i) {
    for (var o = t.length, s = r + (i ? 1 : -1); i ? s-- : ++s < o; )
      if (n(t[s], s, t))
        return s;
    return -1;
  }
  return Es = e, Es;
}
var Ms, Cf;
function tv() {
  if (Cf) return Ms;
  Cf = 1;
  function e(t) {
    return t !== t;
  }
  return Ms = e, Ms;
}
var Is, kf;
function nv() {
  if (kf) return Is;
  kf = 1;
  function e(t, n, r) {
    for (var i = r - 1, o = t.length; ++i < o; )
      if (t[i] === n)
        return i;
    return -1;
  }
  return Is = e, Is;
}
var As, xf;
function rv() {
  if (xf) return As;
  xf = 1;
  var e = ev(), t = tv(), n = nv();
  function r(i, o, s) {
    return o === o ? n(i, o, s) : e(i, t, s);
  }
  return As = r, As;
}
var Ps, Rf;
function iv() {
  if (Rf) return Ps;
  Rf = 1;
  var e = rv();
  function t(n, r) {
    var i = n == null ? 0 : n.length;
    return !!i && e(n, r, 0) > -1;
  }
  return Ps = t, Ps;
}
var Os, _f;
function ov() {
  if (_f) return Os;
  _f = 1;
  function e(t, n, r) {
    for (var i = -1, o = t == null ? 0 : t.length; ++i < o; )
      if (r(n, t[i]))
        return !0;
    return !1;
  }
  return Os = e, Os;
}
var Ds, Tf;
function cp() {
  if (Tf) return Ds;
  Tf = 1;
  function e(t, n) {
    return t.has(n);
  }
  return Ds = e, Ds;
}
var Ls, Ef;
function up() {
  if (Ef) return Ls;
  Ef = 1;
  var e = pr(), t = Pn(), n = e(t, "Set");
  return Ls = n, Ls;
}
var Fs, Mf;
function av() {
  if (Mf) return Fs;
  Mf = 1;
  function e() {
  }
  return Fs = e, Fs;
}
var qs, If;
function Vc() {
  if (If) return qs;
  If = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(i) {
      r[++n] = i;
    }), r;
  }
  return qs = e, qs;
}
var Hs, Af;
function sv() {
  if (Af) return Hs;
  Af = 1;
  var e = up(), t = av(), n = Vc(), r = 1 / 0, i = e && 1 / n(new e([, -0]))[1] == r ? function(o) {
    return new e(o);
  } : t;
  return Hs = i, Hs;
}
var zs, Pf;
function lv() {
  if (Pf) return zs;
  Pf = 1;
  var e = lp(), t = iv(), n = ov(), r = cp(), i = sv(), o = Vc(), s = 200;
  function a(l, c, u) {
    var h = -1, d = t, g = l.length, f = !0, v = [], R = v;
    if (u)
      f = !1, d = n;
    else if (g >= s) {
      var I = c ? null : i(l);
      if (I)
        return o(I);
      f = !1, d = r, R = new e();
    } else
      R = c ? [] : v;
    e:
      for (; ++h < g; ) {
        var y = l[h], C = c ? c(y) : y;
        if (y = u || y !== 0 ? y : 0, f && C === C) {
          for (var A = R.length; A--; )
            if (R[A] === C)
              continue e;
          c && R.push(C), v.push(y);
        } else d(R, C, u) || (R !== v && R.push(C), v.push(y));
      }
    return v;
  }
  return zs = a, zs;
}
var $s, Of;
function cv() {
  if (Of) return $s;
  Of = 1;
  var e = lv();
  function t(n) {
    return n && n.length ? e(n) : [];
  }
  return $s = t, $s;
}
var uv = cv();
const dv = /* @__PURE__ */ er(uv);
var Ns, Df;
function dp() {
  if (Df) return Ns;
  Df = 1;
  function e(t, n) {
    for (var r = -1, i = n.length, o = t.length; ++r < i; )
      t[o + r] = n[r];
    return t;
  }
  return Ns = e, Ns;
}
var Bs, Lf;
function fv() {
  if (Lf) return Bs;
  Lf = 1;
  var e = Ti(), t = Mc(), n = An(), r = e ? e.isConcatSpreadable : void 0;
  function i(o) {
    return n(o) || t(o) || !!(r && o && o[r]);
  }
  return Bs = i, Bs;
}
var Ws, Ff;
function hv() {
  if (Ff) return Ws;
  Ff = 1;
  var e = dp(), t = fv();
  function n(r, i, o, s, a) {
    var l = -1, c = r.length;
    for (o || (o = t), a || (a = []); ++l < c; ) {
      var u = r[l];
      i > 0 && o(u) ? i > 1 ? n(u, i - 1, o, s, a) : e(a, u) : s || (a[a.length] = u);
    }
    return a;
  }
  return Ws = n, Ws;
}
var js, qf;
function gv() {
  if (qf) return js;
  qf = 1;
  var e = hv();
  function t(n) {
    var r = n == null ? 0 : n.length;
    return r ? e(n, 1) : [];
  }
  return js = t, js;
}
var pv = gv();
const Hf = /* @__PURE__ */ er(pv);
var Us, zf;
function mv() {
  if (zf) return Us;
  zf = 1;
  var e = Math.ceil, t = Math.max;
  function n(r, i, o, s) {
    for (var a = -1, l = t(e((i - r) / (o || 1)), 0), c = Array(l); l--; )
      c[s ? l : ++a] = r, r += o;
    return c;
  }
  return Us = n, Us;
}
var Xs, $f;
function Zc() {
  if ($f) return Xs;
  $f = 1;
  var e = Sg(), t = Ac();
  function n(r) {
    return r != null && t(r.length) && !e(r);
  }
  return Xs = n, Xs;
}
var Ys, Nf;
function vv() {
  if (Nf) return Ys;
  Nf = 1;
  var e = _c(), t = Zc(), n = Ic(), r = gr();
  function i(o, s, a) {
    if (!r(a))
      return !1;
    var l = typeof s;
    return (l == "number" ? t(a) && n(s, a.length) : l == "string" && s in a) ? e(a[s], o) : !1;
  }
  return Ys = i, Ys;
}
var Gs, Bf;
function yv() {
  if (Bf) return Gs;
  Bf = 1;
  var e = Lc(), t = 1 / 0, n = 17976931348623157e292;
  function r(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var o = i < 0 ? -1 : 1;
      return o * n;
    }
    return i === i ? i : 0;
  }
  return Gs = r, Gs;
}
var Ks, Wf;
function bv() {
  if (Wf) return Ks;
  Wf = 1;
  var e = mv(), t = vv(), n = yv();
  function r(i) {
    return function(o, s, a) {
      return a && typeof a != "number" && t(o, s, a) && (s = a = void 0), o = n(o), s === void 0 ? (s = o, o = 0) : s = n(s), a = a === void 0 ? o < s ? 1 : -1 : n(a), e(o, s, a, i);
    };
  }
  return Ks = r, Ks;
}
var Vs, jf;
function wv() {
  if (jf) return Vs;
  jf = 1;
  var e = bv(), t = e();
  return Vs = t, Vs;
}
var Sv = wv();
const ur = /* @__PURE__ */ er(Sv), ht = '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">', Cv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}<rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/><path d="M15.75 4h-1.5a.25.25 0 0 0-.177.074L9.308 8.838a3.75 3.75 0 1 0 1.854 1.854l1.155-1.157.967.322a.5.5 0 0 0 .65-.55l-.18-1.208.363-.363.727.331a.5.5 0 0 0 .69-.59l-.254-.904.647-.647A.25.25 0 0 0 16 5.75v-1.5a.25.25 0 0 0-.25-.25zM7.5 13.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" fill="${t}"/></svg>`;
}, kv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}<rect x="2" y="2" width="16" height="16" rx="4" fill="${n}"/><path d="m12.223 13.314 3.052-2.826a.65.65 0 0 0 0-.984l-3.052-2.822c-.27-.25-.634-.242-.865.022-.232.263-.206.636.056.882l2.601 2.41-2.601 2.41c-.262.245-.288.619-.056.882.231.263.595.277.865.026Zm-4.444.005c.266.25.634.241.866-.027.231-.263.206-.636-.06-.882L5.983 10l2.602-2.405c.266-.25.291-.62.06-.887-.232-.263-.596-.272-.866-.022L4.723 9.51a.653.653 0 0 0 0 .983l3.056 2.827Z" fill="${t}"/></svg>`;
}, xv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${n}"/>
    <path d="M6.52 12.78H5.51V8.74l-1.33.47v-.87l2.29-.83h.05v5.27zm5.2 0H8.15v-.69l1.7-1.83a6.38 6.38 0 0 0 .34-.4c.09-.11.16-.22.22-.32s.1-.19.12-.27a.9.9 0 0 0 0-.56.63.63 0 0 0-.15-.23.58.58 0 0 0-.22-.15.75.75 0 0 0-.29-.05c-.27 0-.48.08-.62.23a.95.95 0 0 0-.2.65H8.03c0-.24.04-.46.13-.67a1.67 1.67 0 0 1 .97-.91c.23-.1.49-.14.77-.14.26 0 .5.04.7.11.21.08.38.18.52.32.14.13.25.3.32.48a1.74 1.74 0 0 1 .03 1.13 2.05 2.05 0 0 1-.24.47 4.16 4.16 0 0 1-.35.47l-.47.5-1 1.05h2.32v.8zm1.8-3.08h.55c.28 0 .48-.06.61-.2a.76.76 0 0 0 .2-.55.8.8 0 0 0-.05-.28.56.56 0 0 0-.13-.22.6.6 0 0 0-.23-.15.93.93 0 0 0-.32-.05.92.92 0 0 0-.29.05.72.72 0 0 0-.23.12.57.57 0 0 0-.21.46H12.4a1.3 1.3 0 0 1 .5-1.04c.15-.13.33-.23.54-.3a2.48 2.48 0 0 1 1.4 0c.2.06.4.15.55.28.15.13.27.28.36.47.08.19.13.4.13.65a1.15 1.15 0 0 1-.2.65 1.36 1.36 0 0 1-.58.49c.15.05.28.12.38.2a1.14 1.14 0 0 1 .43.62c.03.13.05.26.05.4 0 .25-.05.47-.14.66a1.42 1.42 0 0 1-.4.49c-.16.13-.35.23-.58.3a2.51 2.51 0 0 1-.73.1c-.22 0-.44-.03-.65-.09a1.8 1.8 0 0 1-.57-.28 1.43 1.43 0 0 1-.4-.47 1.41 1.41 0 0 1-.15-.66h1a.66.66 0 0 0 .22.5.87.87 0 0 0 .58.2c.25 0 .45-.07.6-.2a.71.71 0 0 0 .21-.56.97.97 0 0 0-.06-.36.61.61 0 0 0-.18-.25.74.74 0 0 0-.28-.15 1.33 1.33 0 0 0-.37-.04h-.55V9.7z" fill="${t}"/>
  </svg>`;
}, Rv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path d="M8.182 12.4h3.636l.655 1.6H14l-3.454-8H9.455L6 14h1.527l.655-1.6zM10 7.44l1.36 3.651H8.64L10 7.441z" fill="${t}"/>
</svg>`;
}, _v = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
    <path
        d="M16.2222 2H3.77778C2.8 2 2 2.8 2 3.77778V16.2222C2 17.2 2.8 18 3.77778 18H16.2222C17.2 18 17.9911 17.2 17.9911 16.2222L18 3.77778C18 2.8 17.2 2 16.2222 2Z"
        fill="${n}"
    />
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.66667 6.66669C5.73368 6.66669 4.16667 8.15907 4.16667 10C4.16667 11.841 5.73368 13.3334 7.66667 13.3334H12.3333C14.2663 13.3334 15.8333 11.841 15.8333 10C15.8333 8.15907 14.2663 6.66669 12.3333 6.66669H7.66667ZM12.5 12.5C13.8807 12.5 15 11.3807 15 10C15 8.61931 13.8807 7.50002 12.5 7.50002C11.1193 7.50002 10 8.61931 10 10C10 11.3807 11.1193 12.5 12.5 12.5Z"
        fill="${t}"
    />
</svg>`;
}, fp = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
<path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.29 4.947a3.368 3.368 0 014.723.04 3.375 3.375 0 01.041 4.729l-.009.009-1.596 1.597a3.367 3.367 0 01-5.081-.364.71.71 0 011.136-.85 1.95 1.95 0 002.942.21l1.591-1.593a1.954 1.954 0 00-.027-2.733 1.95 1.95 0 00-2.732-.027l-.91.907a.709.709 0 11-1.001-1.007l.915-.911.007-.007z" fill="${t}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.55 8.678a3.368 3.368 0 015.082.364.71.71 0 01-1.136.85 1.95 1.95 0 00-2.942-.21l-1.591 1.593a1.954 1.954 0 00.027 2.733 1.95 1.95 0 002.73.028l.906-.906a.709.709 0 111.003 1.004l-.91.91-.008.01a3.368 3.368 0 01-4.724-.042 3.375 3.375 0 01-.041-4.728l.009-.009L6.55 8.678z" fill="${t}"/>
</svg>
  `;
}, Tv = (e) => {
  const t = e.bgColor;
  return `${ht}
    <path stroke="${t}" stroke-width="2" d="M12 3v14"/>
    <path stroke="${t}" stroke-width="2" stroke-linecap="round" d="M10 4h4m-4 12h4"/>
    <path d="M11 14h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4v2h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4v2ZM9.5 8H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.5v2H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h4.5v2Z" fill="${t}"/>
  </svg>
`;
}, Ev = fp, Mv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.138a.5.5 0 00.748.434l5.492-3.138a.5.5 0 000-.868L7.748 6.427A.5.5 0 007 6.862v6.276z" fill="${t}"/>
</svg>`;
}, Iv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <path d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 9.17A4.17 4.17 0 0 1 5.83 10 4.17 4.17 0 0 1 10 5.83 4.17 4.17 0 0 1 14.17 10 4.17 4.17 0 0 1 10 14.17z" fill="${t}"/>
    <path d="M8.33 8.21a.83.83 0 1 0-.03 1.67.83.83 0 0 0 .03-1.67zm3.34 0a.83.83 0 1 0-.04 1.67.83.83 0 0 0 .04-1.67z" fill="${t}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.53 13.9a2.82 2.82 0 0 1-5.06 0l.77-.38a1.97 1.97 0 0 0 3.52 0l.77.39z" fill="${t}"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${n}"/>
    <path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 11a5 5 0 1 1 .01-10.01A5 5 0 0 1 10 15z" fill="${t}"/>
    <path d="M8 7.86a1 1 0 1 0-.04 2 1 1 0 0 0 .04-2zm4 0a1 1 0 1 0-.04 2 1 1 0 0 0 .04-2z" fill="${t}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.53 11.9a2.82 2.82 0 0 1-5.06 0l.77-.38a1.97 1.97 0 0 0 3.52 0l.77.39z" fill="${t}"/>
  </svg>`;
}, Av = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="M12.499 10.801a.5.5 0 01.835 0l2.698 4.098a.5.5 0 01-.418.775H10.22a.5.5 0 01-.417-.775l2.697-4.098z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07 8.934a.5.5 0 01.824 0l4.08 5.958a.5.5 0 01-.412.782h-8.16a.5.5 0 01-.413-.782l4.08-5.958zM13.75 8.333a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z" fill="${t}"/>
</svg>`;
}, Pv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <path fill="${t}" d="M3 3h14v14H3z"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2zm-7.24 9.78h1.23c.15 0 .27.06.36.18l.98 1.28a.43.43 0 0 1-.05.58l-1.2 1.21a.45.45 0 0 1-.6.04A6.72 6.72 0 0 1 7.33 10c0-.61.1-1.2.25-1.78a6.68 6.68 0 0 1 2.12-3.3.44.44 0 0 1 .6.04l1.2 1.2c.16.17.18.42.05.59l-.98 1.29a.43.43 0 0 1-.36.17H8.98A5.38 5.38 0 0 0 8.67 10c0 .62.11 1.23.3 1.79z" fill="${n}"/>
  </svg>`;
}, Ov = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${n}"/>
    <path d="m13.49 13.15-2.32-3.27h1.4V7h1.86v2.88h1.4l-2.34 3.27zM11 13H9v-3l-1.5 1.92L6 10v3H4V7h2l1.5 2L9 7h2v6z" fill="${t}"/>
  </svg>`;
}, Dv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path d="M14.8 4.182h-.6V3H13v1.182H7V3H5.8v1.182h-.6c-.66 0-1.2.532-1.2 1.182v9.454C4 15.468 4.54 16 5.2 16h9.6c.66 0 1.2-.532 1.2-1.182V5.364c0-.65-.54-1.182-1.2-1.182zm0 10.636H5.2V7.136h9.6v7.682z" fill="${t}"/>
</svg>`;
}, Lv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${n}"/>
    <path d="M10 4a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm0 10.8A4.8 4.8 0 0 1 5.2 10a4.8 4.8 0 1 1 4.8 4.8z" fill="${t}"/>
    <path d="M10 7H9v3.93L12.5 13l.5-.8-3-1.76V7z" fill="${t}"/>
  </svg>`;
}, Fv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.643a1.357 1.357 0 100 2.714 1.357 1.357 0 000-2.714zM7.357 10a2.643 2.643 0 115.286 0 2.643 2.643 0 01-5.286 0z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.589 4.898A5.643 5.643 0 0115.643 10v.5a2.143 2.143 0 01-4.286 0V8a.643.643 0 011.286 0v2.5a.857.857 0 001.714 0V10a4.357 4.357 0 10-1.708 3.46.643.643 0 01.782 1.02 5.643 5.643 0 11-5.842-9.582z" fill="${t}"/>
</svg>`;
}, qv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <rect x="2" y="8" width="10" height="8" rx="2" fill="${n}"/>
    <rect x="8" y="4" width="10" height="8" rx="2" fill="${n}"/>
    <path d="M10.68 7.73V6l2.97 3.02-2.97 3.02v-1.77c-2.13 0-3.62.7-4.68 2.2.43-2.15 1.7-4.31 4.68-4.74z" fill="${t}"/>
  </svg>`;
}, Hv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path fill="${t}" d="M4 3h12v14H4z"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2A1.6 1.6 0 002 3.6v12.8A1.6 1.6 0 003.6 18h12.8a1.6 1.6 0 001.6-1.6V3.6A1.6 1.6 0 0016.4 2H3.6zm11.3 10.8a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7h-1.4a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.6-.693.117.117 0 00.1-.115V10.35a.117.117 0 00-.117-.116h-2.8a.117.117 0 00-.117.116v2.333c0 .064.053.117.117.117h.117a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7H9.3a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.117a.117.117 0 00.117-.117V10.35a.117.117 0 00-.117-.117h-2.8a.117.117 0 00-.117.117v2.342c0 .058.042.106.1.115a.7.7 0 01.6.693v1.4a.7.7 0 01-.7.7H5.1a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.35a.116.116 0 00.116-.117v-2.45c0-.515.418-.933.934-.933h2.917a.117.117 0 00.117-.117V6.85a.117.117 0 00-.117-.116h-2.45a.7.7 0 01-.7-.7V5.1a.7.7 0 01.7-.7h6.067a.7.7 0 01.7.7v.934a.7.7 0 01-.7.7h-2.45a.117.117 0 00-.118.116v2.333c0 .064.053.117.117.117H13.5c.516 0 .934.418.934.934v2.45c0 .063.052.116.116.116h.35z" fill="${n}"/>
</svg>`;
}, zv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
    <path d="M9.98 13.33c.45 0 .74-.3.73-.75l-.01-.1-.16-1.67 1.45 1.05a.81.81 0 0 0 .5.18c.37 0 .72-.32.72-.76 0-.3-.17-.54-.49-.68l-1.63-.77 1.63-.77c.32-.14.49-.37.49-.67 0-.45-.34-.76-.71-.76a.81.81 0 0 0-.5.18l-1.47 1.03.16-1.74.01-.08c.01-.46-.27-.76-.72-.76-.46 0-.76.32-.75.76l.01.08.16 1.74-1.47-1.03a.77.77 0 0 0-.5-.18.74.74 0 0 0-.72.76c0 .3.17.53.49.67l1.63.77-1.62.77c-.32.14-.5.37-.5.68 0 .44.35.75.72.75a.78.78 0 0 0 .5-.17L9.4 10.8l-.16 1.68v.09c-.02.44.28.75.74.75z" fill="${t}"/>
  </svg>`;
}, $v = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
    <path d="M8 5.83H5.83a.83.83 0 0 0 0 1.67h1.69A4.55 4.55 0 0 1 8 5.83zm-.33 3.34H5.83a.83.83 0 0 0 0 1.66h2.72a4.57 4.57 0 0 1-.88-1.66zM5.83 12.5a.83.83 0 0 0 0 1.67h7.5a.83.83 0 1 0 0-1.67h-7.5zm8.8-2.9a3.02 3.02 0 0 0 .46-1.6c0-1.66-1.32-3-2.94-3C10.52 5 9.2 6.34 9.2 8s1.31 3 2.93 3c.58 0 1.11-.17 1.56-.47l2.04 2.08.93-.94-2.04-2.08zm-2.48.07c-.9 0-1.63-.75-1.63-1.67s.73-1.67 1.63-1.67c.9 0 1.63.75 1.63 1.67s-.73 1.67-1.63 1.67z" fill="${t}"/>
  </svg>`;
}, Nv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path d="M7.676 4.726V3l2.976 3.021-2.976 3.022v-1.77c-2.125 0-3.613.69-4.676 2.201.425-2.158 1.7-4.316 4.676-4.748zM10.182 14.4h3.636l.655 1.6H16l-3.454-8h-1.091L8 16h1.527l.655-1.6zM12 9.44l1.36 3.65h-2.72L12 9.44z" fill="${t}"/>
</svg>`;
}, Bv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.167 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666H4.167z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.083 4.167a.833.833 0 10-1.666 0v4.166a.833.833 0 101.666 0V4.167zM11.667 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666h-4.166zM5.367 11.688a.833.833 0 00-1.179 1.179l2.947 2.946a.833.833 0 001.178-1.178l-2.946-2.947z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.313 12.867a.833.833 0 10-1.178-1.179l-2.947 2.947a.833.833 0 101.179 1.178l2.946-2.946z" fill="${t}"/>
  <path d="M10.833 12.5c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833zM10.833 15c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833z" fill="${t}"/>
</svg>`;
}, Wv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${n}"/>
    <path d="M10 8.84a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32zm3.02 3.61a3.92 3.92 0 0 0 .78-3.28.49.49 0 1 0-.95.2c.19.87-.02 1.78-.58 2.47a2.92 2.92 0 1 1-4.13-4.08 2.94 2.94 0 0 1 2.43-.62.49.49 0 1 0 .17-.96 3.89 3.89 0 1 0 2.28 6.27zM10 4.17a5.84 5.84 0 0 0-5.44 7.93.49.49 0 1 0 .9-.35 4.86 4.86 0 1 1 2.5 2.67.49.49 0 1 0-.4.88c.76.35 1.6.54 2.44.53a5.83 5.83 0 0 0 0-11.66zm3.02 3.5a.7.7 0 1 0-1.4 0 .7.7 0 0 0 1.4 0zm-6.97 5.35a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z" fill="${t}"/>
  </svg>`;
}, jv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path d="M12.4 13.565c1.865-.545 3.645-2.083 3.645-4.396 0-1.514-.787-2.604-2.071-2.604C12.69 6.565 12 7.63 12 8.939c1.114.072 1.865.726 1.865 1.683 0 .933-.8 1.647-1.84 2.023l.375.92zM4 5h6v2H4zM4 9h5v2H4zM4 13h4v2H4z" fill="${t}"/>
</svg>`;
}, Uv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
    <path d="M12.4 13.56c1.86-.54 3.65-2.08 3.65-4.4 0-1.5-.8-2.6-2.08-2.6S12 7.64 12 8.95c1.11.07 1.86.73 1.86 1.68 0 .94-.8 1.65-1.83 2.03l.37.91zM4 5h6v2H4zm0 4h5v2H4zm0 4h4v2H4z" fill="${t}"/>
  </svg>`;
}, Xv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path d="M10 7a1 1 0 100-2v2zm0 6a1 1 0 100 2v-2zm0-8H7v2h3V5zm-3 6h5V9H7v2zm5 2h-2v2h2v-2zm1-1a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zM4 8a3 3 0 003 3V9a1 1 0 01-1-1H4zm3-3a3 3 0 00-3 3h2a1 1 0 011-1V5z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.856 12.014a.5.5 0 00-.712.702L5.409 14l-1.265 1.284a.5.5 0 00.712.702l1.255-1.274 1.255 1.274a.5.5 0 00.712-.702L6.813 14l1.265-1.284a.5.5 0 00-.712-.702L6.11 13.288l-1.255-1.274zM12.856 4.014a.5.5 0 00-.712.702L13.409 6l-1.265 1.284a.5.5 0 10.712.702l1.255-1.274 1.255 1.274a.5.5 0 10.712-.702L14.813 6l1.265-1.284a.5.5 0 00-.712-.702L14.11 5.288l-1.255-1.274z" fill="${t}"/>
</svg>`;
}, Yv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 7.25a.75.75 0 000-1.5h-6.5a.75.75 0 100 1.5h6.5zM15 10a.75.75 0 01-.75.75h-6.5a.75.75 0 010-1.5h6.5A.75.75 0 0115 10zm-.75 4.25a.75.75 0 000-1.5h-6.5a.75.75 0 000 1.5h6.5zm-8.987-7a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 2.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 4.25a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="${t}"/>
</svg>`;
}, Gv = (e) => {
  const t = e.fgColor;
  return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 15v1h14v-2.5c0-.87-.44-1.55-.98-2.04a6.19 6.19 0 0 0-1.9-1.14 12.1 12.1 0 0 0-2.48-.67A4 4 0 1 0 5 6a4 4 0 0 0 2.36 3.65c-.82.13-1.7.36-2.48.67-.69.28-1.37.65-1.9 1.13A2.8 2.8 0 0 0 2 13.5V15z" fill="${e.bgColor}" stroke="${t}" stroke-width="2"/>
  </svg>`;
}, Kv = (e) => {
  const t = e.fgColor;
  return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.43 6.04v-.18a3.86 3.86 0 0 0-7.72 0v.18A2.15 2.15 0 0 0 3 8.14v5.72C3 15.04 3.96 16 5.14 16H12c1.18 0 2.14-.96 2.14-2.14V8.14c0-1.03-.73-1.9-1.71-2.1zM7.86 6v-.14a.71.71 0 1 1 1.43 0V6H7.86z" fill="${e.bgColor}" stroke="${t}" stroke-width="2"/>
  </svg>
`;
}, Vv = {
  headerRowID: Cv,
  headerNumber: xv,
  headerCode: kv,
  headerString: Rv,
  headerBoolean: _v,
  headerAudioUri: Ev,
  headerVideoUri: Mv,
  headerEmoji: Iv,
  headerImage: Av,
  headerUri: fp,
  headerPhone: Pv,
  headerMarkdown: Ov,
  headerDate: Dv,
  headerTime: Lv,
  headerEmail: Fv,
  headerReference: qv,
  headerIfThenElse: Hv,
  headerSingleValue: zv,
  headerLookup: $v,
  headerTextTemplate: Nv,
  headerMath: Bv,
  headerRollup: Wv,
  headerJoinStrings: jv,
  headerSplitString: Uv,
  headerGeoDistance: Xv,
  headerArray: Yv,
  rowOwnerOverlay: Gv,
  protectedColumnOverlay: Kv,
  renameIcon: Tv
};
function Zv(e, t) {
  return e === "normal" ? [t.bgIconHeader, t.fgIconHeader] : e === "selected" ? ["white", t.accentColor] : [t.accentColor, t.bgHeader];
}
class Jv {
  constructor(t, n) {
    be(this, "onSettled");
    be(this, "spriteMap", /* @__PURE__ */ new Map());
    be(this, "headerIcons");
    be(this, "inFlight", 0);
    this.onSettled = n, this.headerIcons = t ?? {};
  }
  drawSprite(t, n, r, i, o, s, a, l = 1) {
    const [c, u] = Zv(n, a), h = s * Math.ceil(window.devicePixelRatio), d = `${c}_${u}_${h}_${t}`;
    let g = this.spriteMap.get(d);
    if (g === void 0) {
      const f = this.headerIcons[t];
      if (f === void 0)
        return;
      g = document.createElement("canvas");
      const v = g.getContext("2d");
      if (v === null)
        return;
      const R = new Image();
      R.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(f({ fgColor: u, bgColor: c }))}`, this.spriteMap.set(d, g);
      const I = R.decode();
      if (I === void 0)
        return;
      this.inFlight++, I.then(() => {
        v.drawImage(R, 0, 0, h, h);
      }).finally(() => {
        this.inFlight--, this.inFlight === 0 && this.onSettled();
      });
    } else
      l < 1 && (r.globalAlpha = l), r.drawImage(g, 0, 0, h, h, i, o, s, s), l < 1 && (r.globalAlpha = 1);
  }
}
function hp(e) {
  if (e.length === 0)
    return;
  let t;
  for (const n of e)
    t = Math.min(t ?? n.y, n.y);
}
function Fo(e, t, n, r, i, o, s, a, l) {
  a = a ?? t;
  let c = t, u = e;
  const h = r - o;
  let d = !1;
  for (; c < n && u < h; ) {
    const g = i(u);
    if (c + g > a && l(c, u, g, !1, s && u === r - 1) === !0) {
      d = !0;
      break;
    }
    c += g, u++;
  }
  if (!d) {
    c = n;
    for (let g = 0; g < o; g++) {
      u = r - 1 - g;
      const f = i(u);
      c -= f, l(c, u, f, !0, s && u === r - 1);
    }
  }
}
function nr(e, t, n, r, i, o) {
  let s = 0, a = 0;
  const l = i + r;
  for (const c of e) {
    const u = c.sticky ? a : s + n;
    if (o(c, u, l, c.sticky ? 0 : a, t) === !0)
      break;
    s += c.width, a += c.sticky ? c.width : 0;
  }
}
function gp(e, t, n, r, i) {
  let o = 0, s = 0;
  for (let a = 0; a < e.length; a++) {
    const l = e[a];
    let c = a + 1, u = l.width;
    for (l.sticky && (s += u); c < e.length && _i(e[c].group, l.group) && e[c].sticky === e[a].sticky; ) {
      const v = e[c];
      u += v.width, c++, a++, v.sticky && (s += v.width);
    }
    const h = l.sticky ? 0 : n, d = o + h, g = l.sticky ? 0 : Math.max(0, s - d), f = Math.min(u - g, t - (d + g));
    i([l.sourceIndex, e[c - 1].sourceIndex], l.group ?? "", d + g, 0, f, r), o += u;
  }
}
function pp(e, t, n, r, i, o, s) {
  var d;
  const [a, l] = e;
  let c, u;
  const h = ((d = s.find((g) => !g.sticky)) == null ? void 0 : d.sourceIndex) ?? 0;
  if (l > h) {
    const g = Math.max(a, h);
    let f = t, v = r;
    for (let R = o.sourceIndex - 1; R >= g; R--)
      f -= s[R].width, v += s[R].width;
    for (let R = o.sourceIndex + 1; R <= l; R++)
      v += s[R].width;
    u = {
      x: f,
      y: n,
      width: v,
      height: i
    };
  }
  if (h > a) {
    const g = Math.min(l, h - 1);
    let f = t, v = r;
    for (let R = o.sourceIndex - 1; R >= a; R--)
      f -= s[R].width, v += s[R].width;
    for (let R = o.sourceIndex + 1; R <= g; R++)
      v += s[R].width;
    c = {
      x: f,
      y: n,
      width: v,
      height: i
    };
  }
  return [c, u];
}
function Qv(e, t, n, r) {
  if (r === "any")
    return mp(e, { x: t, y: n, width: 1, height: 1 });
  if (r === "vertical" && (t = e.x), r === "horizontal" && (n = e.y), Zg([t, n], e))
    return;
  const i = t - e.x, o = e.x + e.width - t, s = n - e.y + 1, a = e.y + e.height - n, l = Math.min(r === "vertical" ? Number.MAX_SAFE_INTEGER : i, r === "vertical" ? Number.MAX_SAFE_INTEGER : o, r === "horizontal" ? Number.MAX_SAFE_INTEGER : s, r === "horizontal" ? Number.MAX_SAFE_INTEGER : a);
  return l === a ? { x: e.x, y: e.y + e.height, width: e.width, height: n - e.y - e.height + 1 } : l === s ? { x: e.x, y: n, width: e.width, height: e.y - n } : l === o ? { x: e.x + e.width, y: e.y, width: t - e.x - e.width + 1, height: e.height } : { x: t, y: e.y, width: e.x - t, height: e.height };
}
function Co(e, t, n, r, i, o, s, a) {
  return e <= i + s && i <= e + n && t <= o + a && o <= t + r;
}
function qo(e, t, n) {
  return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height;
}
function mp(e, t) {
  const n = Math.min(e.x, t.x), r = Math.min(e.y, t.y), i = Math.max(e.x + e.width, t.x + t.width) - n, o = Math.max(e.y + e.height, t.y + t.height) - r;
  return { x: n, y: r, width: i, height: o };
}
function ey(e, t) {
  return e.x <= t.x && e.y <= t.y && e.x + e.width >= t.x + t.width && e.y + e.height >= t.y + t.height;
}
function ty(e, t, n, r) {
  if (e.x > t || e.y > n || e.x < 0 && e.y < 0 && e.x + e.width > t && e.y + e.height > n)
    return;
  if (e.x >= 0 && e.y >= 0 && e.x + e.width <= t && e.y + e.height <= n)
    return e;
  const i = -4, o = -4, s = t + 4, a = n + 4, l = i - e.x, c = e.x + e.width - s, u = o - e.y, h = e.y + e.height - a, d = l > 0 ? e.x + Math.floor(l / r) * r : e.x, g = c > 0 ? e.x + e.width - Math.floor(c / r) * r : e.x + e.width, f = u > 0 ? e.y + Math.floor(u / r) * r : e.y, v = h > 0 ? e.y + e.height - Math.floor(h / r) * r : e.y + e.height;
  return { x: d, y: f, width: g - d, height: v - f };
}
function ny(e, t, n, r, i) {
  const [o, s, a, l] = t, [c, u, h, d] = i, { x: g, y: f, width: v, height: R } = e, I = [];
  if (v <= 0 || R <= 0)
    return I;
  const y = g + v, C = f + R, A = g < o, S = f < s, M = g + v > a, P = f + R > l, E = g >= o && g < a || y > o && y <= a || g < o && y > a, T = f >= s && f < l || C > s && C <= l || f < s && C > l;
  if (E && T) {
    const x = Math.max(g, o), b = Math.max(f, s), k = Math.min(y, a), _ = Math.min(C, l);
    I.push({
      rect: { x, y: b, width: k - x, height: _ - b },
      clip: {
        x: c,
        y: u,
        width: h - c + 1,
        height: d - u + 1
      }
    });
  }
  if (A && S) {
    const x = g, b = f, k = Math.min(y, o), _ = Math.min(C, s);
    I.push({
      rect: {
        x,
        y: b,
        width: k - x,
        height: _ - b
      },
      clip: {
        x: 0,
        y: 0,
        width: c + 1,
        height: u + 1
      }
    });
  }
  if (S && E) {
    const x = Math.max(g, o), b = f, k = Math.min(y, a), _ = Math.min(C, s);
    I.push({
      rect: {
        x,
        y: b,
        width: k - x,
        height: _ - b
      },
      clip: {
        x: c,
        y: 0,
        width: h - c + 1,
        height: u + 1
      }
    });
  }
  if (S && M) {
    const x = Math.max(g, a), b = f, k = y, _ = Math.min(C, s);
    I.push({
      rect: {
        x,
        y: b,
        width: k - x,
        height: _ - b
      },
      clip: {
        x: h,
        y: 0,
        width: n - h + 1,
        height: u + 1
      }
    });
  }
  if (A && T) {
    const x = g, b = Math.max(f, s), k = Math.min(y, o), _ = Math.min(C, l);
    I.push({
      rect: {
        x,
        y: b,
        width: k - x,
        height: _ - b
      },
      clip: {
        x: 0,
        y: u,
        width: c + 1,
        height: d - u + 1
      }
    });
  }
  if (M && T) {
    const x = Math.max(g, a), b = Math.max(f, s), k = y, _ = Math.min(C, l);
    I.push({
      rect: {
        x,
        y: b,
        width: k - x,
        height: _ - b
      },
      clip: {
        x: h,
        y: u,
        width: n - h + 1,
        height: d - u + 1
      }
    });
  }
  if (A && P) {
    const x = g, b = Math.max(f, l), k = Math.min(y, o), _ = C;
    I.push({
      rect: {
        x,
        y: b,
        width: k - x,
        height: _ - b
      },
      clip: {
        x: 0,
        y: d,
        width: c + 1,
        height: r - d + 1
      }
    });
  }
  if (P && E) {
    const x = Math.max(g, o), b = Math.max(f, l), k = Math.min(y, a), _ = C;
    I.push({
      rect: {
        x,
        y: b,
        width: k - x,
        height: _ - b
      },
      clip: {
        x: c,
        y: d,
        width: h - c + 1,
        height: r - d + 1
      }
    });
  }
  if (M && P) {
    const x = Math.max(g, a), b = Math.max(f, l), k = y, _ = C;
    I.push({
      rect: {
        x,
        y: b,
        width: k - x,
        height: _ - b
      },
      clip: {
        x: h,
        y: d,
        width: n - h + 1,
        height: r - d + 1
      }
    });
  }
  return I;
}
const ry = {
  kind: ae.Loading,
  allowOverlay: !1
};
function Uf(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, R, I, y, C, A, S, M, P, E, T, L, x, b, k, _, w, z, H, j) {
  let re = (C == null ? void 0 : C.size) ?? Number.MAX_SAFE_INTEGER;
  const te = performance.now();
  let O = k.baseFontFull;
  e.font = O;
  const N = { ctx: e }, J = [0, 0], oe = R > 0 ? vr(l, R, c) : 0;
  let $, ce;
  const se = hp(y);
  return nr(t, a, o, s, i, (ie, pe, we, Ce, Be) => {
    const V = Math.max(0, Ce - pe), Ee = pe + V, Pe = i + 1, dt = ie.width - V, Se = r - i - 1;
    if (y.length > 0) {
      let Ge = !1;
      for (let Ke = 0; Ke < y.length; Ke++) {
        const ue = y[Ke];
        if (Co(Ee, Pe, dt, Se, ue.x, ue.y, ue.width, ue.height)) {
          Ge = !0;
          break;
        }
      }
      if (!Ge)
        return;
    }
    const ve = () => {
      e.save(), e.beginPath(), e.rect(Ee, Pe, dt, Se), e.clip();
    }, Oe = A.columns.hasIndex(ie.sourceIndex), Le = h(ie.group ?? "").overrideTheme, qe = ie.themeOverride === void 0 && Le === void 0 ? k : Qn(k, Le, ie.themeOverride), Me = qe.baseFontFull;
    Me !== O && (O = Me, e.font = Me), ve();
    let nt;
    return Fo(Be, we, r, l, c, R, I, se, (Ge, Ke, ue, He, We) => {
      var kt, Dt, hn;
      if (Ke < 0 || (J[0] = ie.sourceIndex, J[1] = Ke, C !== void 0 && !C.has(J)))
        return;
      if (y.length > 0) {
        let Ye = !1;
        for (let vt = 0; vt < y.length; vt++) {
          const ct = y[vt];
          if (Co(pe, Ge, ie.width, ue, ct.x, ct.y, ct.width, ct.height)) {
            Ye = !0;
            break;
          }
        }
        if (!Ye)
          return;
      }
      const De = A.rows.hasIndex(Ke), Mt = g.hasIndex(Ke), Ve = Ke < l ? u(J) : ry;
      let je = pe, Ze = ie.width, Ct = !1, It = !1;
      if (Ve.span !== void 0) {
        const [Ye, vt] = Ve.span, ct = `${Ke},${Ye},${vt},${ie.sticky}`;
        if (ce === void 0 && (ce = /* @__PURE__ */ new Set()), ce.has(ct)) {
          re--;
          return;
        } else {
          const ut = pp(Ve.span, pe, Ge, ie.width, ue, ie, n), qt = ie.sticky ? ut[0] : ut[1];
          if (!ie.sticky && ut[0] !== void 0 && (It = !0), qt !== void 0) {
            je = qt.x, Ze = qt.width, ce.add(ct), e.restore(), nt = void 0, e.save(), e.beginPath();
            const pt = Math.max(0, Ce - qt.x);
            e.rect(qt.x + pt, Ge, qt.width - pt, ue), $ === void 0 && ($ = []), $.push({
              x: qt.x + pt,
              y: Ge,
              width: qt.width - pt,
              height: ue
            }), e.clip(), Ct = !0;
          }
        }
      }
      const sn = d == null ? void 0 : d(Ke), Kt = We && ((kt = ie.trailingRowOptions) == null ? void 0 : kt.themeOverride) !== void 0 ? (Dt = ie.trailingRowOptions) == null ? void 0 : Dt.themeOverride : void 0, mt = Ve.themeOverride === void 0 && sn === void 0 && Kt === void 0 ? qe : Qn(qe, sn, Kt, Ve.themeOverride);
      e.beginPath();
      const Bt = A1(J, Ve, A);
      let Wt = P1(J, Ve, A, v);
      const On = Ve.span !== void 0 && A.columns.some(
        (Ye) => Ve.span !== void 0 && Ye >= Ve.span[0] && Ye <= Ve.span[1]
        //alloc
      );
      Bt && !f && v ? Wt = 0 : Bt && v && (Wt = Math.max(Wt, 1)), On && Wt++, Bt || (De && Wt++, Oe && !We && Wt++);
      const Dn = Ve.kind === ae.Protected ? mt.bgCellMedium : mt.bgCell;
      let gt;
      if ((He || Dn !== k.bgCell) && (gt = on(Dn, gt)), Wt > 0 || Mt) {
        Mt && (gt = on(mt.bgHeader, gt));
        for (let Ye = 0; Ye < Wt; Ye++)
          gt = on(mt.accentLight, gt);
      } else if (S !== void 0) {
        for (const Ye of S)
          if (Ye[0] === ie.sourceIndex && Ye[1] === Ke) {
            gt = on(mt.bgSearchResult, gt);
            break;
          }
      }
      if (M !== void 0)
        for (let Ye = 0; Ye < M.length; Ye++) {
          const vt = M[Ye], ct = vt.range;
          vt.style !== "solid-outline" && ct.x <= ie.sourceIndex && ie.sourceIndex < ct.x + ct.width && ct.y <= Ke && Ke < ct.y + ct.height && (gt = on(vt.color, gt));
        }
      let Ue = !1;
      if (C !== void 0) {
        const Ye = Ge + 1, ct = (He ? Ye + ue - 1 : Math.min(Ye + ue - 1, r - oe)) - Ye;
        (ct !== ue - 1 || je + 1 <= Ce) && (Ue = !0, e.save(), e.beginPath(), e.rect(je + 1, Ye, Ze - 1, ct), e.clip()), gt = gt === void 0 ? mt.bgCell : on(gt, mt.bgCell);
      }
      const Je = ie.sourceIndex === n.length - 1, Lt = Ke === l - 1;
      gt !== void 0 && (e.fillStyle = gt, nt !== void 0 && (nt.fillStyle = gt), C !== void 0 ? e.fillRect(je + 1, Ge + 1, Ze - (Je ? 2 : 1), ue - (Lt ? 2 : 1)) : e.fillRect(je, Ge, Ze, ue)), Ve.style === "faded" && (e.globalAlpha = 0.6);
      let Ft;
      for (let Ye = 0; Ye < T.length; Ye++) {
        const vt = T[Ye];
        if (vt.item[0] === ie.sourceIndex && vt.item[1] === Ke) {
          Ft = vt;
          break;
        }
      }
      if (Ze > j && !It) {
        const Ye = mt.baseFontFull;
        Ye !== O && (e.font = Ye, O = Ye), nt = vp(e, Ve, ie.sourceIndex, Ke, Je, Lt, je, Ge, Ze, ue, Wt > 0, mt, gt ?? mt.bgCell, P, E, (Ft == null ? void 0 : Ft.hoverAmount) ?? 0, L, b, te, x, nt, _, w, z, H);
      }
      return Ue && e.restore(), Ve.style === "faded" && (e.globalAlpha = 1), re--, Ct && (e.restore(), (hn = nt == null ? void 0 : nt.deprep) == null || hn.call(nt, N), nt = void 0, ve(), O = Me, e.font = Me), re <= 0;
    }), e.restore(), re <= 0;
  }), $;
}
const fi = [0, 0], hi = { x: 0, y: 0, width: 0, height: 0 }, Zs = [void 0, () => {
}];
let Cc = !1;
function iy() {
  Cc = !0;
}
function vp(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, R, I, y, C, A, S, M, P, E) {
  var w, z;
  let T, L;
  R !== void 0 && R[0][0] === n && R[0][1] === r && (T = R[1][0], L = R[1][1]);
  let x;
  fi[0] = n, fi[1] = r, hi.x = s, hi.y = a, hi.width = l, hi.height = c, Zs[0] = M.getValue(fi), Zs[1] = (H) => M.setValue(fi, H), Cc = !1;
  const b = {
    //alloc
    ctx: e,
    theme: h,
    col: n,
    row: r,
    cell: t,
    rect: hi,
    highlighted: u,
    cellFillColor: d,
    hoverAmount: v,
    frameTime: y,
    hoverX: T,
    drawState: Zs,
    hoverY: L,
    imageLoader: g,
    spriteManager: f,
    hyperWrapping: I,
    overrideCursor: T !== void 0 ? E : void 0,
    requestAnimationFrame: iy
  }, k = z1(b, t.lastUpdated, y, A, i, o), _ = P(t);
  if (_ !== void 0) {
    (A == null ? void 0 : A.renderer) !== _ && ((w = A == null ? void 0 : A.deprep) == null || w.call(A, b), A = void 0);
    const H = (z = _.drawPrep) == null ? void 0 : z.call(_, b, A);
    C !== void 0 && !$r(b.cell) ? C(b, () => _.draw(b, t)) : _.draw(b, t), x = H === void 0 ? void 0 : {
      deprep: H == null ? void 0 : H.deprep,
      fillStyle: H == null ? void 0 : H.fillStyle,
      font: H == null ? void 0 : H.font,
      renderer: _
    };
  }
  return (k || Cc) && (S == null || S(fi)), x;
}
function Jc(e, t, n, r, i, o, s, a, l = -20, c = -20, u = 32, h = "center", d = "square") {
  const g = Math.floor(i + s / 2), f = d === "circle" ? 1e4 : t.roundingRadius ?? 4;
  let v = qg(u, s, t.cellVerticalPadding), R = v / 2;
  const I = Fg(h, r, o, t.cellHorizontalPadding, v), y = Lg(I, g, v), C = Hg(r + l, i + c, y);
  switch (n) {
    case !0: {
      e.beginPath(), In(e, I - v / 2, g - v / 2, v, v, f), d === "circle" && (R *= 0.8, v *= 0.8), e.fillStyle = a ? t.accentColor : t.textMedium, e.fill(), e.beginPath(), e.moveTo(I - R + v / 4.23, g - R + v / 1.97), e.lineTo(I - R + v / 2.42, g - R + v / 1.44), e.lineTo(I - R + v / 1.29, g - R + v / 3.25), e.strokeStyle = t.bgCell, e.lineJoin = "round", e.lineCap = "round", e.lineWidth = 1.9, e.stroke();
      break;
    }
    case vo:
    case !1: {
      e.beginPath(), In(e, I - v / 2 + 0.5, g - v / 2 + 0.5, v - 1, v - 1, f), e.lineWidth = 1, e.strokeStyle = C ? t.textDark : t.textMedium, e.stroke();
      break;
    }
    case Pc: {
      e.beginPath(), In(e, I - v / 2, g - v / 2, v, v, f), e.fillStyle = C ? t.textMedium : t.textLight, e.fill(), d === "circle" && (R *= 0.8, v *= 0.8), e.beginPath(), e.moveTo(I - v / 3, g), e.lineTo(I + v / 3, g), e.strokeStyle = t.bgCell, e.lineCap = "round", e.lineWidth = 1.9, e.stroke();
      break;
    }
    default:
      Ri();
  }
}
function oy(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, R, I, y) {
  const C = s + a;
  if (C <= 0)
    return;
  e.fillStyle = h.bgHeader, e.fillRect(0, 0, i, C);
  const [A, S] = (r == null ? void 0 : r[0]) ?? [], M = h.headerFontFull;
  e.font = M, nr(t, 0, o, 0, C, (P, E, T, L) => {
    var N;
    if (R !== void 0 && !R.has([P.sourceIndex, -1]))
      return;
    const x = Math.max(0, L - E);
    e.save(), e.beginPath(), e.rect(E + x, a, P.width - x, s), e.clip();
    const b = v(P.group ?? "").overrideTheme, k = P.themeOverride === void 0 && b === void 0 ? h : Qn(h, b, P.themeOverride);
    k.bgHeader !== h.bgHeader && (e.fillStyle = k.bgHeader, e.fill()), k !== h && (e.font = k.baseFontFull);
    const _ = u.columns.hasIndex(P.sourceIndex), w = l !== void 0 || c, z = !w && S === -1 && A === P.sourceIndex, H = w ? 0 : ((N = g.find((J) => J.item[0] === P.sourceIndex && J.item[1] === -1)) == null ? void 0 : N.hoverAmount) ?? 0, j = (u == null ? void 0 : u.current) !== void 0 && u.current.cell[0] === P.sourceIndex, re = _ ? k.accentColor : j ? k.bgHeaderHasFocus : k.bgHeader, te = n ? a : 0, O = P.sourceIndex === 0 ? 0 : 1;
    _ ? (e.fillStyle = re, e.fillRect(E + O, te, P.width - O, s)) : (j || H > 0) && (e.beginPath(), e.rect(E + O, te, P.width - O, s), j && (e.fillStyle = k.bgHeaderHasFocus, e.fill()), H > 0 && (e.globalAlpha = H, e.fillStyle = k.bgHeaderHovered, e.fill(), e.globalAlpha = 1)), wp(e, E, te, P.width, s, P, _, k, z, j, H, d, I, y), e.restore();
  }), n && ay(e, t, i, o, a, r, h, d, g, f, v, R);
}
function ay(e, t, n, r, i, o, s, a, l, c, u, h) {
  const [g, f] = (o == null ? void 0 : o[0]) ?? [];
  let v = 0;
  gp(t, n, r, i, (R, I, y, C, A, S) => {
    if (h !== void 0 && !h.hasItemInRectangle({
      x: R[0],
      y: -2,
      width: R[1] - R[0] + 1,
      height: 1
    }))
      return;
    e.save(), e.beginPath(), e.rect(y, C, A, S), e.clip();
    const M = u(I), P = (M == null ? void 0 : M.overrideTheme) === void 0 ? s : Qn(s, M.overrideTheme), E = f === -2 && g !== void 0 && g >= R[0] && g <= R[1], T = E ? P.bgHeaderHovered : P.bgHeader;
    if (T !== s.bgHeader && (e.fillStyle = T, e.fill()), e.fillStyle = P.textGroupHeader ?? P.textHeader, M !== void 0) {
      let L = y;
      if (M.icon !== void 0 && (a.drawSprite(M.icon, "normal", e, L + 8, (i - 20) / 2, 20, P), L += 26), e.fillText(M.name, L + 8, i / 2 + tr(e, s.headerFontFull)), M.actions !== void 0 && E) {
        const x = bp({ x: y, y: C, width: A, height: S }, M.actions);
        e.beginPath();
        const b = x[0].x - 10, k = y + A - b;
        e.rect(b, 0, k, i);
        const _ = e.createLinearGradient(b, 0, b + k, 0), w = hr(T, 0);
        _.addColorStop(0, w), _.addColorStop(10 / k, T), _.addColorStop(1, T), e.fillStyle = _, e.fill(), e.globalAlpha = 0.6;
        const [z, H] = (o == null ? void 0 : o[1]) ?? [-1, -1];
        for (let j = 0; j < M.actions.length; j++) {
          const re = M.actions[j], te = x[j], O = qo(te, z + y, H);
          O && (e.globalAlpha = 1), a.drawSprite(re.icon, "normal", e, te.x + te.width / 2 - 10, te.y + te.height / 2 - 10, 20, P), O && (e.globalAlpha = 0.6);
        }
        e.globalAlpha = 1;
      }
    }
    y !== 0 && c(R[0]) && (e.beginPath(), e.moveTo(y + 0.5, 0), e.lineTo(y + 0.5, i), e.strokeStyle = s.borderColor, e.lineWidth = 1, e.stroke()), e.restore(), v = y + A;
  }), e.beginPath(), e.moveTo(v + 0.5, 0), e.lineTo(v + 0.5, i), e.moveTo(0, i + 0.5), e.lineTo(n, i + 0.5), e.strokeStyle = s.borderColor, e.lineWidth = 1, e.stroke();
}
const Fr = 30;
function yp(e, t, n, r, i) {
  return i ? { x: e, y: t, width: Fr, height: Math.min(Fr, r) } : {
    x: e + n - Fr,
    y: Math.max(t, t + r / 2 - Fr / 2),
    width: Fr,
    height: Math.min(Fr, r)
  };
}
function bp(e, t) {
  const n = [];
  let r = e.x + e.width - 26 * t.length;
  const i = e.y + e.height / 2 - 13, o = 26, s = 26;
  for (let a = 0; a < t.length; a++)
    n.push({
      x: r,
      y: i,
      width: s,
      height: o
    }), r += 26;
  return n;
}
function Xf(e, t, n, r, i, o, s, a, l, c, u, h, d, g) {
  if (o.rowMarker !== void 0) {
    const C = o.rowMarkerChecked;
    C !== !0 && (e.globalAlpha = c), Jc(e, a, C, t, n, r, i, !1, void 0, void 0, 18, "center", o.rowMarker), C !== !0 && (e.globalAlpha = 1);
    return;
  }
  const f = a.cellHorizontalPadding, v = s ? a.textHeaderSelected : a.textHeader, R = o.hasMenu === !0 && (l || h && s), I = d ? -1 : 1;
  let y = d ? t + r - f : t + f;
  if (o.icon !== void 0) {
    let C = s ? "selected" : "normal";
    o.style === "highlight" && (C = s ? "selected" : "special");
    const A = a.headerIconSize;
    u.drawSprite(o.icon, C, e, d ? y - A : y, n + (i - A) / 2, A, a), o.overlayIcon !== void 0 && u.drawSprite(o.overlayIcon, s ? "selected" : "special", e, d ? y - A + 9 : y + 9, n + ((i - 18) / 2 + 6), 18, a), y += Math.ceil(A * 1.3) * I;
  }
  if (R && o.hasMenu === !0 && r > 35) {
    const A = d ? 35 : r - 35, S = d ? 35 * 0.7 : r - 35 * 0.7, M = A / r, P = S / r, E = e.createLinearGradient(t, 0, t + r, 0), T = hr(v, 0);
    E.addColorStop(d ? 1 : 0, v), E.addColorStop(M, v), E.addColorStop(P, T), E.addColorStop(d ? 0 : 1, T), e.fillStyle = E;
  } else
    e.fillStyle = v;
  if (d && (e.textAlign = "right"), e.fillText(o.title, y, n + i / 2 + tr(e, a.headerFontFull)), d && (e.textAlign = "left"), R && o.hasMenu === !0)
    if (o.menuIcon === void 0 || o.menuIcon === yo.Triangle) {
      e.beginPath();
      const C = g.x + g.width / 2 - 5.5, A = g.y + g.height / 2 - 3;
      W1(e, [
        {
          x: C,
          y: A
        },
        {
          x: C + 11,
          y: A
        },
        {
          x: C + 5.5,
          y: A + 6
        }
      ], 1), e.fillStyle = v, e.fill();
    } else if (o.menuIcon === yo.Dots) {
      e.beginPath();
      const C = g.x + g.width / 2, A = g.y + g.height / 2;
      B1(e, C, A), e.fillStyle = v, e.fill();
    } else {
      const C = g.x + (g.width - a.headerIconSize) / 2, A = g.y + (g.height - a.headerIconSize) / 2;
      u.drawSprite(o.menuIcon, "normal", e, C, A, a.headerIconSize, a);
    }
}
function wp(e, t, n, r, i, o, s, a, l, c, u, h, d, g) {
  const f = qc(o.title) === "rtl", v = yp(t, n, r, i, f);
  d !== void 0 ? d({
    ctx: e,
    theme: a,
    rect: { x: t, y: n, width: r, height: i },
    column: o,
    columnIndex: o.sourceIndex,
    isSelected: s,
    hoverAmount: u,
    isHovered: l,
    hasSelectedCell: c,
    spriteManager: h,
    menuBounds: v
  }, () => Xf(e, t, n, r, i, o, s, a, l, u, h, g, f, v)) : Xf(e, t, n, r, i, o, s, a, l, u, h, g, f, v);
}
var Js, Yf;
function sy() {
  if (Yf) return Js;
  Yf = 1;
  var e = pr(), t = function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  }();
  return Js = t, Js;
}
var Qs, Gf;
function ly() {
  if (Gf) return Qs;
  Gf = 1;
  var e = sy();
  function t(n, r, i) {
    r == "__proto__" && e ? e(n, r, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : n[r] = i;
  }
  return Qs = t, Qs;
}
var el, Kf;
function cy() {
  if (Kf) return el;
  Kf = 1;
  function e(t, n, r, i) {
    for (var o = -1, s = t == null ? 0 : t.length; ++o < s; ) {
      var a = t[o];
      n(i, a, r(a), t);
    }
    return i;
  }
  return el = e, el;
}
var tl, Vf;
function uy() {
  if (Vf) return tl;
  Vf = 1;
  function e(t) {
    return function(n, r, i) {
      for (var o = -1, s = Object(n), a = i(n), l = a.length; l--; ) {
        var c = a[t ? l : ++o];
        if (r(s[c], c, s) === !1)
          break;
      }
      return n;
    };
  }
  return tl = e, tl;
}
var nl, Zf;
function dy() {
  if (Zf) return nl;
  Zf = 1;
  var e = uy(), t = e();
  return nl = t, nl;
}
var rl, Jf;
function fy() {
  if (Jf) return rl;
  Jf = 1;
  function e(t, n) {
    for (var r = -1, i = Array(t); ++r < t; )
      i[r] = n(r);
    return i;
  }
  return rl = e, rl;
}
var mi = { exports: {} }, il, Qf;
function hy() {
  if (Qf) return il;
  Qf = 1;
  function e() {
    return !1;
  }
  return il = e, il;
}
mi.exports;
var eh;
function Sp() {
  return eh || (eh = 1, function(e, t) {
    var n = Pn(), r = hy(), i = t && !t.nodeType && t, o = i && !0 && e && !e.nodeType && e, s = o && o.exports === i, a = s ? n.Buffer : void 0, l = a ? a.isBuffer : void 0, c = l || r;
    e.exports = c;
  }(mi, mi.exports)), mi.exports;
}
var ol, th;
function gy() {
  if (th) return ol;
  th = 1;
  var e = Ei(), t = Ac(), n = Mi(), r = "[object Arguments]", i = "[object Array]", o = "[object Boolean]", s = "[object Date]", a = "[object Error]", l = "[object Function]", c = "[object Map]", u = "[object Number]", h = "[object Object]", d = "[object RegExp]", g = "[object Set]", f = "[object String]", v = "[object WeakMap]", R = "[object ArrayBuffer]", I = "[object DataView]", y = "[object Float32Array]", C = "[object Float64Array]", A = "[object Int8Array]", S = "[object Int16Array]", M = "[object Int32Array]", P = "[object Uint8Array]", E = "[object Uint8ClampedArray]", T = "[object Uint16Array]", L = "[object Uint32Array]", x = {};
  x[y] = x[C] = x[A] = x[S] = x[M] = x[P] = x[E] = x[T] = x[L] = !0, x[r] = x[i] = x[R] = x[o] = x[I] = x[s] = x[a] = x[l] = x[c] = x[u] = x[h] = x[d] = x[g] = x[f] = x[v] = !1;
  function b(k) {
    return n(k) && t(k.length) && !!x[e(k)];
  }
  return ol = b, ol;
}
var al, nh;
function py() {
  if (nh) return al;
  nh = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return al = e, al;
}
var vi = { exports: {} };
vi.exports;
var rh;
function my() {
  return rh || (rh = 1, function(e, t) {
    var n = wg(), r = t && !t.nodeType && t, i = r && !0 && e && !e.nodeType && e, o = i && i.exports === r, s = o && n.process, a = function() {
      try {
        var l = i && i.require && i.require("util").types;
        return l || s && s.binding && s.binding("util");
      } catch {
      }
    }();
    e.exports = a;
  }(vi, vi.exports)), vi.exports;
}
var sl, ih;
function Cp() {
  if (ih) return sl;
  ih = 1;
  var e = gy(), t = py(), n = my(), r = n && n.isTypedArray, i = r ? t(r) : e;
  return sl = i, sl;
}
var ll, oh;
function vy() {
  if (oh) return ll;
  oh = 1;
  var e = fy(), t = Mc(), n = An(), r = Sp(), i = Ic(), o = Cp(), s = Object.prototype, a = s.hasOwnProperty;
  function l(c, u) {
    var h = n(c), d = !h && t(c), g = !h && !d && r(c), f = !h && !d && !g && o(c), v = h || d || g || f, R = v ? e(c.length, String) : [], I = R.length;
    for (var y in c)
      (u || a.call(c, y)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
      (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      f && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
      i(y, I))) && R.push(y);
    return R;
  }
  return ll = l, ll;
}
var cl, ah;
function yy() {
  if (ah) return cl;
  ah = 1;
  var e = Object.prototype;
  function t(n) {
    var r = n && n.constructor, i = typeof r == "function" && r.prototype || e;
    return n === i;
  }
  return cl = t, cl;
}
var ul, sh;
function by() {
  if (sh) return ul;
  sh = 1;
  function e(t, n) {
    return function(r) {
      return t(n(r));
    };
  }
  return ul = e, ul;
}
var dl, lh;
function wy() {
  if (lh) return dl;
  lh = 1;
  var e = by(), t = e(Object.keys, Object);
  return dl = t, dl;
}
var fl, ch;
function Sy() {
  if (ch) return fl;
  ch = 1;
  var e = yy(), t = wy(), n = Object.prototype, r = n.hasOwnProperty;
  function i(o) {
    if (!e(o))
      return t(o);
    var s = [];
    for (var a in Object(o))
      r.call(o, a) && a != "constructor" && s.push(a);
    return s;
  }
  return fl = i, fl;
}
var hl, uh;
function Qc() {
  if (uh) return hl;
  uh = 1;
  var e = vy(), t = Sy(), n = Zc();
  function r(i) {
    return n(i) ? e(i) : t(i);
  }
  return hl = r, hl;
}
var gl, dh;
function Cy() {
  if (dh) return gl;
  dh = 1;
  var e = dy(), t = Qc();
  function n(r, i) {
    return r && e(r, i, t);
  }
  return gl = n, gl;
}
var pl, fh;
function ky() {
  if (fh) return pl;
  fh = 1;
  var e = Zc();
  function t(n, r) {
    return function(i, o) {
      if (i == null)
        return i;
      if (!e(i))
        return n(i, o);
      for (var s = i.length, a = r ? s : -1, l = Object(i); (r ? a-- : ++a < s) && o(l[a], a, l) !== !1; )
        ;
      return i;
    };
  }
  return pl = t, pl;
}
var ml, hh;
function xy() {
  if (hh) return ml;
  hh = 1;
  var e = Cy(), t = ky(), n = t(e);
  return ml = n, ml;
}
var vl, gh;
function Ry() {
  if (gh) return vl;
  gh = 1;
  var e = xy();
  function t(n, r, i, o) {
    return e(n, function(s, a, l) {
      r(o, s, i(s), l);
    }), o;
  }
  return vl = t, vl;
}
var yl, ph;
function _y() {
  if (ph) return yl;
  ph = 1;
  var e = Io();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return yl = t, yl;
}
var bl, mh;
function Ty() {
  if (mh) return bl;
  mh = 1;
  function e(t) {
    var n = this.__data__, r = n.delete(t);
    return this.size = n.size, r;
  }
  return bl = e, bl;
}
var wl, vh;
function Ey() {
  if (vh) return wl;
  vh = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return wl = e, wl;
}
var Sl, yh;
function My() {
  if (yh) return Sl;
  yh = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Sl = e, Sl;
}
var Cl, bh;
function Iy() {
  if (bh) return Cl;
  bh = 1;
  var e = Io(), t = Tc(), n = Ec(), r = 200;
  function i(o, s) {
    var a = this.__data__;
    if (a instanceof e) {
      var l = a.__data__;
      if (!t || l.length < r - 1)
        return l.push([o, s]), this.size = ++a.size, this;
      a = this.__data__ = new n(l);
    }
    return a.set(o, s), this.size = a.size, this;
  }
  return Cl = i, Cl;
}
var kl, wh;
function kp() {
  if (wh) return kl;
  wh = 1;
  var e = Io(), t = _y(), n = Ty(), r = Ey(), i = My(), o = Iy();
  function s(a) {
    var l = this.__data__ = new e(a);
    this.size = l.size;
  }
  return s.prototype.clear = t, s.prototype.delete = n, s.prototype.get = r, s.prototype.has = i, s.prototype.set = o, kl = s, kl;
}
var xl, Sh;
function Ay() {
  if (Sh) return xl;
  Sh = 1;
  function e(t, n) {
    for (var r = -1, i = t == null ? 0 : t.length; ++r < i; )
      if (n(t[r], r, t))
        return !0;
    return !1;
  }
  return xl = e, xl;
}
var Rl, Ch;
function xp() {
  if (Ch) return Rl;
  Ch = 1;
  var e = lp(), t = Ay(), n = cp(), r = 1, i = 2;
  function o(s, a, l, c, u, h) {
    var d = l & r, g = s.length, f = a.length;
    if (g != f && !(d && f > g))
      return !1;
    var v = h.get(s), R = h.get(a);
    if (v && R)
      return v == a && R == s;
    var I = -1, y = !0, C = l & i ? new e() : void 0;
    for (h.set(s, a), h.set(a, s); ++I < g; ) {
      var A = s[I], S = a[I];
      if (c)
        var M = d ? c(S, A, I, a, s, h) : c(A, S, I, s, a, h);
      if (M !== void 0) {
        if (M)
          continue;
        y = !1;
        break;
      }
      if (C) {
        if (!t(a, function(P, E) {
          if (!n(C, E) && (A === P || u(A, P, l, c, h)))
            return C.push(E);
        })) {
          y = !1;
          break;
        }
      } else if (!(A === S || u(A, S, l, c, h))) {
        y = !1;
        break;
      }
    }
    return h.delete(s), h.delete(a), y;
  }
  return Rl = o, Rl;
}
var _l, kh;
function Py() {
  if (kh) return _l;
  kh = 1;
  var e = Pn(), t = e.Uint8Array;
  return _l = t, _l;
}
var Tl, xh;
function Oy() {
  if (xh) return Tl;
  xh = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(i, o) {
      r[++n] = [o, i];
    }), r;
  }
  return Tl = e, Tl;
}
var El, Rh;
function Dy() {
  if (Rh) return El;
  Rh = 1;
  var e = Ti(), t = Py(), n = _c(), r = xp(), i = Oy(), o = Vc(), s = 1, a = 2, l = "[object Boolean]", c = "[object Date]", u = "[object Error]", h = "[object Map]", d = "[object Number]", g = "[object RegExp]", f = "[object Set]", v = "[object String]", R = "[object Symbol]", I = "[object ArrayBuffer]", y = "[object DataView]", C = e ? e.prototype : void 0, A = C ? C.valueOf : void 0;
  function S(M, P, E, T, L, x, b) {
    switch (E) {
      case y:
        if (M.byteLength != P.byteLength || M.byteOffset != P.byteOffset)
          return !1;
        M = M.buffer, P = P.buffer;
      case I:
        return !(M.byteLength != P.byteLength || !x(new t(M), new t(P)));
      case l:
      case c:
      case d:
        return n(+M, +P);
      case u:
        return M.name == P.name && M.message == P.message;
      case g:
      case v:
        return M == P + "";
      case h:
        var k = i;
      case f:
        var _ = T & s;
        if (k || (k = o), M.size != P.size && !_)
          return !1;
        var w = b.get(M);
        if (w)
          return w == P;
        T |= a, b.set(M, P);
        var z = r(k(M), k(P), T, L, x, b);
        return b.delete(M), z;
      case R:
        if (A)
          return A.call(M) == A.call(P);
    }
    return !1;
  }
  return El = S, El;
}
var Ml, _h;
function Ly() {
  if (_h) return Ml;
  _h = 1;
  var e = dp(), t = An();
  function n(r, i, o) {
    var s = i(r);
    return t(r) ? s : e(s, o(r));
  }
  return Ml = n, Ml;
}
var Il, Th;
function Fy() {
  if (Th) return Il;
  Th = 1;
  function e(t, n) {
    for (var r = -1, i = t == null ? 0 : t.length, o = 0, s = []; ++r < i; ) {
      var a = t[r];
      n(a, r, t) && (s[o++] = a);
    }
    return s;
  }
  return Il = e, Il;
}
var Al, Eh;
function qy() {
  if (Eh) return Al;
  Eh = 1;
  function e() {
    return [];
  }
  return Al = e, Al;
}
var Pl, Mh;
function Hy() {
  if (Mh) return Pl;
  Mh = 1;
  var e = Fy(), t = qy(), n = Object.prototype, r = n.propertyIsEnumerable, i = Object.getOwnPropertySymbols, o = i ? function(s) {
    return s == null ? [] : (s = Object(s), e(i(s), function(a) {
      return r.call(s, a);
    }));
  } : t;
  return Pl = o, Pl;
}
var Ol, Ih;
function zy() {
  if (Ih) return Ol;
  Ih = 1;
  var e = Ly(), t = Hy(), n = Qc();
  function r(i) {
    return e(i, n, t);
  }
  return Ol = r, Ol;
}
var Dl, Ah;
function $y() {
  if (Ah) return Dl;
  Ah = 1;
  var e = zy(), t = 1, n = Object.prototype, r = n.hasOwnProperty;
  function i(o, s, a, l, c, u) {
    var h = a & t, d = e(o), g = d.length, f = e(s), v = f.length;
    if (g != v && !h)
      return !1;
    for (var R = g; R--; ) {
      var I = d[R];
      if (!(h ? I in s : r.call(s, I)))
        return !1;
    }
    var y = u.get(o), C = u.get(s);
    if (y && C)
      return y == s && C == o;
    var A = !0;
    u.set(o, s), u.set(s, o);
    for (var S = h; ++R < g; ) {
      I = d[R];
      var M = o[I], P = s[I];
      if (l)
        var E = h ? l(P, M, I, s, o, u) : l(M, P, I, o, s, u);
      if (!(E === void 0 ? M === P || c(M, P, a, l, u) : E)) {
        A = !1;
        break;
      }
      S || (S = I == "constructor");
    }
    if (A && !S) {
      var T = o.constructor, L = s.constructor;
      T != L && "constructor" in o && "constructor" in s && !(typeof T == "function" && T instanceof T && typeof L == "function" && L instanceof L) && (A = !1);
    }
    return u.delete(o), u.delete(s), A;
  }
  return Dl = i, Dl;
}
var Ll, Ph;
function Ny() {
  if (Ph) return Ll;
  Ph = 1;
  var e = pr(), t = Pn(), n = e(t, "DataView");
  return Ll = n, Ll;
}
var Fl, Oh;
function By() {
  if (Oh) return Fl;
  Oh = 1;
  var e = pr(), t = Pn(), n = e(t, "Promise");
  return Fl = n, Fl;
}
var ql, Dh;
function Wy() {
  if (Dh) return ql;
  Dh = 1;
  var e = pr(), t = Pn(), n = e(t, "WeakMap");
  return ql = n, ql;
}
var Hl, Lh;
function jy() {
  if (Lh) return Hl;
  Lh = 1;
  var e = Ny(), t = Tc(), n = By(), r = up(), i = Wy(), o = Ei(), s = Cg(), a = "[object Map]", l = "[object Object]", c = "[object Promise]", u = "[object Set]", h = "[object WeakMap]", d = "[object DataView]", g = s(e), f = s(t), v = s(n), R = s(r), I = s(i), y = o;
  return (e && y(new e(new ArrayBuffer(1))) != d || t && y(new t()) != a || n && y(n.resolve()) != c || r && y(new r()) != u || i && y(new i()) != h) && (y = function(C) {
    var A = o(C), S = A == l ? C.constructor : void 0, M = S ? s(S) : "";
    if (M)
      switch (M) {
        case g:
          return d;
        case f:
          return a;
        case v:
          return c;
        case R:
          return u;
        case I:
          return h;
      }
    return A;
  }), Hl = y, Hl;
}
var zl, Fh;
function Uy() {
  if (Fh) return zl;
  Fh = 1;
  var e = kp(), t = xp(), n = Dy(), r = $y(), i = jy(), o = An(), s = Sp(), a = Cp(), l = 1, c = "[object Arguments]", u = "[object Array]", h = "[object Object]", d = Object.prototype, g = d.hasOwnProperty;
  function f(v, R, I, y, C, A) {
    var S = o(v), M = o(R), P = S ? u : i(v), E = M ? u : i(R);
    P = P == c ? h : P, E = E == c ? h : E;
    var T = P == h, L = E == h, x = P == E;
    if (x && s(v)) {
      if (!s(R))
        return !1;
      S = !0, T = !1;
    }
    if (x && !T)
      return A || (A = new e()), S || a(v) ? t(v, R, I, y, C, A) : n(v, R, P, I, y, C, A);
    if (!(I & l)) {
      var b = T && g.call(v, "__wrapped__"), k = L && g.call(R, "__wrapped__");
      if (b || k) {
        var _ = b ? v.value() : v, w = k ? R.value() : R;
        return A || (A = new e()), C(_, w, I, y, A);
      }
    }
    return x ? (A || (A = new e()), r(v, R, I, y, C, A)) : !1;
  }
  return zl = f, zl;
}
var $l, qh;
function Rp() {
  if (qh) return $l;
  qh = 1;
  var e = Uy(), t = Mi();
  function n(r, i, o, s, a) {
    return r === i ? !0 : r == null || i == null || !t(r) && !t(i) ? r !== r && i !== i : e(r, i, o, s, n, a);
  }
  return $l = n, $l;
}
var Nl, Hh;
function Xy() {
  if (Hh) return Nl;
  Hh = 1;
  var e = kp(), t = Rp(), n = 1, r = 2;
  function i(o, s, a, l) {
    var c = a.length, u = c, h = !l;
    if (o == null)
      return !u;
    for (o = Object(o); c--; ) {
      var d = a[c];
      if (h && d[2] ? d[1] !== o[d[0]] : !(d[0] in o))
        return !1;
    }
    for (; ++c < u; ) {
      d = a[c];
      var g = d[0], f = o[g], v = d[1];
      if (h && d[2]) {
        if (f === void 0 && !(g in o))
          return !1;
      } else {
        var R = new e();
        if (l)
          var I = l(f, v, g, o, s, R);
        if (!(I === void 0 ? t(v, f, n | r, l, R) : I))
          return !1;
      }
    }
    return !0;
  }
  return Nl = i, Nl;
}
var Bl, zh;
function _p() {
  if (zh) return Bl;
  zh = 1;
  var e = gr();
  function t(n) {
    return n === n && !e(n);
  }
  return Bl = t, Bl;
}
var Wl, $h;
function Yy() {
  if ($h) return Wl;
  $h = 1;
  var e = _p(), t = Qc();
  function n(r) {
    for (var i = t(r), o = i.length; o--; ) {
      var s = i[o], a = r[s];
      i[o] = [s, a, e(a)];
    }
    return i;
  }
  return Wl = n, Wl;
}
var jl, Nh;
function Tp() {
  if (Nh) return jl;
  Nh = 1;
  function e(t, n) {
    return function(r) {
      return r == null ? !1 : r[t] === n && (n !== void 0 || t in Object(r));
    };
  }
  return jl = e, jl;
}
var Ul, Bh;
function Gy() {
  if (Bh) return Ul;
  Bh = 1;
  var e = Xy(), t = Yy(), n = Tp();
  function r(i) {
    var o = t(i);
    return o.length == 1 && o[0][2] ? n(o[0][0], o[0][1]) : function(s) {
      return s === i || e(s, i, o);
    };
  }
  return Ul = r, Ul;
}
var Xl, Wh;
function Ep() {
  if (Wh) return Xl;
  Wh = 1;
  var e = kg(), t = Po();
  function n(r, i) {
    i = e(i, r);
    for (var o = 0, s = i.length; r != null && o < s; )
      r = r[t(i[o++])];
    return o && o == s ? r : void 0;
  }
  return Xl = n, Xl;
}
var Yl, jh;
function Ky() {
  if (jh) return Yl;
  jh = 1;
  var e = Ep();
  function t(n, r, i) {
    var o = n == null ? void 0 : e(n, r);
    return o === void 0 ? i : o;
  }
  return Yl = t, Yl;
}
var Gl, Uh;
function Vy() {
  if (Uh) return Gl;
  Uh = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return Gl = e, Gl;
}
var Kl, Xh;
function Zy() {
  if (Xh) return Kl;
  Xh = 1;
  var e = Vy(), t = xg();
  function n(r, i) {
    return r != null && t(r, i, e);
  }
  return Kl = n, Kl;
}
var Vl, Yh;
function Jy() {
  if (Yh) return Vl;
  Yh = 1;
  var e = Rp(), t = Ky(), n = Zy(), r = Rc(), i = _p(), o = Tp(), s = Po(), a = 1, l = 2;
  function c(u, h) {
    return r(u) && i(h) ? o(s(u), h) : function(d) {
      var g = t(d, u);
      return g === void 0 && g === h ? n(d, u) : e(h, g, a | l);
    };
  }
  return Vl = c, Vl;
}
var Zl, Gh;
function Qy() {
  if (Gh) return Zl;
  Gh = 1;
  function e(t) {
    return t;
  }
  return Zl = e, Zl;
}
var Jl, Kh;
function eb() {
  if (Kh) return Jl;
  Kh = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return Jl = e, Jl;
}
var Ql, Vh;
function tb() {
  if (Vh) return Ql;
  Vh = 1;
  var e = Ep();
  function t(n) {
    return function(r) {
      return e(r, n);
    };
  }
  return Ql = t, Ql;
}
var ec, Zh;
function nb() {
  if (Zh) return ec;
  Zh = 1;
  var e = eb(), t = tb(), n = Rc(), r = Po();
  function i(o) {
    return n(o) ? e(r(o)) : t(o);
  }
  return ec = i, ec;
}
var tc, Jh;
function rb() {
  if (Jh) return tc;
  Jh = 1;
  var e = Gy(), t = Jy(), n = Qy(), r = An(), i = nb();
  function o(s) {
    return typeof s == "function" ? s : s == null ? n : typeof s == "object" ? r(s) ? t(s[0], s[1]) : e(s) : i(s);
  }
  return tc = o, tc;
}
var nc, Qh;
function ib() {
  if (Qh) return nc;
  Qh = 1;
  var e = cy(), t = Ry(), n = rb(), r = An();
  function i(o, s) {
    return function(a, l) {
      var c = r(a) ? e : t, u = s ? s() : {};
      return c(a, o, n(l, 2), u);
    };
  }
  return nc = i, nc;
}
var rc, eg;
function ob() {
  if (eg) return rc;
  eg = 1;
  var e = ly(), t = ib(), n = Object.prototype, r = n.hasOwnProperty, i = t(function(o, s, a) {
    r.call(o, a) ? o[a].push(s) : e(o, a, [s]);
  });
  return rc = i, rc;
}
var ab = ob();
const sb = /* @__PURE__ */ er(ab);
function lb(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, R, I, y) {
  if (I !== void 0 || t[t.length - 1] !== n[t.length - 1])
    return;
  const C = hp(R);
  nr(t, l, s, a, o, (A, S, M, P, E) => {
    if (A !== t[t.length - 1])
      return;
    S += A.width;
    const T = Math.max(S, P);
    T > r || (e.save(), e.beginPath(), e.rect(T, o + 1, 1e4, i - o - 1), e.clip(), Fo(E, M, i, c, u, f, v, C, (L, x, b, k) => {
      if (!k && R.length > 0 && !R.some((j) => Co(S, L, 1e4, b, j.x, j.y, j.width, j.height)))
        return;
      const _ = d.hasIndex(x), w = g.hasIndex(x);
      e.beginPath();
      const z = h == null ? void 0 : h(x), H = z === void 0 ? y : Qn(y, z);
      H.bgCell !== y.bgCell && (e.fillStyle = H.bgCell, e.fillRect(S, L, 1e4, b)), w && (e.fillStyle = H.bgHeader, e.fillRect(S, L, 1e4, b)), _ && (e.fillStyle = H.accentLight, e.fillRect(S, L, 1e4, b));
    }), e.restore());
  });
}
function cb(e, t, n, r, i, o, s, a, l) {
  let c = !1;
  for (const f of t)
    if (!f.sticky) {
      c = s(f.sourceIndex);
      break;
    }
  const u = l.horizontalBorderColor ?? l.borderColor, h = l.borderColor, d = c ? jr(t) : 0;
  let g;
  if (d !== 0 && (g = ff(h, l.bgCell), e.beginPath(), e.moveTo(d + 0.5, 0), e.lineTo(d + 0.5, r), e.strokeStyle = g, e.stroke()), i > 0) {
    const f = h === u && g !== void 0 ? g : ff(u, l.bgCell), v = vr(o, i, a);
    e.beginPath(), e.moveTo(0, r - v + 0.5), e.lineTo(n, r - v + 0.5), e.strokeStyle = f, e.stroke();
  }
}
const Mp = (e, t, n) => {
  let r = 0, i = t, o = 0, s = n;
  if (e !== void 0 && e.length > 0) {
    r = Number.MAX_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER, i = Number.MIN_SAFE_INTEGER, s = Number.MIN_SAFE_INTEGER;
    for (const a of e)
      r = Math.min(r, a.x - 1), i = Math.max(i, a.x + a.width + 1), o = Math.min(o, a.y - 1), s = Math.max(s, a.y + a.height + 1);
  }
  return { minX: r, maxX: i, minY: o, maxY: s };
};
function ub(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f) {
  var b;
  const v = f.bgCell, { minX: R, maxX: I, minY: y, maxY: C } = Mp(a, o, s), A = [], S = s - vr(g, d, c);
  let M = l, P = n, E = 0;
  for (; M + i < S; ) {
    const k = M + i, _ = c(P);
    if (k >= y && k <= C - 1) {
      const w = u == null ? void 0 : u(P), z = w == null ? void 0 : w.bgCell;
      z !== void 0 && z !== v && P >= g - d && A.push({
        x: R,
        y: k,
        w: I - R,
        h: _,
        color: z
      });
    }
    M += _, P < g - d && (E = M), P++;
  }
  let T = 0;
  const L = Math.min(S, C) - E;
  if (L > 0)
    for (let k = 0; k < t.length; k++) {
      const _ = t[k];
      if (_.width === 0)
        continue;
      const w = _.sticky ? T : T + r, z = (b = _.themeOverride) == null ? void 0 : b.bgCell;
      z !== void 0 && z !== v && w >= R && w <= I && h(k + 1) && A.push({
        x: w,
        y: E,
        w: _.width,
        h: L,
        color: z
      }), T += _.width;
    }
  if (A.length === 0)
    return;
  let x;
  e.beginPath();
  for (let k = A.length - 1; k >= 0; k--) {
    const _ = A[k];
    x === void 0 ? x = _.color : _.color !== x && (e.fillStyle = x, e.fill(), e.beginPath(), x = _.color), e.rect(_.x, _.y, _.w, _.h);
  }
  x !== void 0 && (e.fillStyle = x, e.fill()), e.beginPath();
}
function tg(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, R, I = !1) {
  if (l !== void 0) {
    e.beginPath(), e.save(), e.rect(0, 0, o, s);
    for (const b of l)
      e.rect(b.x + 1, b.y + 1, b.width - 1, b.height - 1);
    e.clip("evenodd");
  }
  const y = R.horizontalBorderColor ?? R.borderColor, C = R.borderColor, { minX: A, maxX: S, minY: M, maxY: P } = Mp(a, o, s), E = [];
  e.beginPath();
  let T = 0.5;
  for (let b = 0; b < t.length; b++) {
    const k = t[b];
    if (k.width === 0)
      continue;
    T += k.width;
    const _ = k.sticky ? T : T + r;
    _ >= A && _ <= S && g(b + 1) && E.push({
      x1: _,
      y1: Math.max(c, M),
      x2: _,
      y2: Math.min(s, P),
      color: C
    });
  }
  let L = s + 0.5;
  for (let b = v - f; b < v; b++) {
    const k = h(b);
    L -= k, E.push({ x1: A, y1: L, x2: S, y2: L, color: y });
  }
  if (I !== !0) {
    let b = u + 0.5, k = n;
    const _ = L;
    for (; b + i < _; ) {
      const w = b + i;
      if (w >= M && w <= P - 1) {
        const z = d == null ? void 0 : d(k);
        E.push({
          x1: A,
          y1: w,
          x2: S,
          y2: w,
          color: (z == null ? void 0 : z.horizontalBorderColor) ?? (z == null ? void 0 : z.borderColor) ?? y
        });
      }
      b += h(k), k++;
    }
  }
  const x = sb(E, (b) => b.color);
  for (const b of Object.keys(x)) {
    e.strokeStyle = b;
    for (const k of x[b])
      e.moveTo(k.x1, k.y1), e.lineTo(k.x2, k.y2);
    e.stroke(), e.beginPath();
  }
  l !== void 0 && e.restore();
}
function db(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, R, I, y) {
  const C = [];
  e.imageSmoothingEnabled = !1;
  const A = Math.min(i.cellYOffset, s), S = Math.max(i.cellYOffset, s);
  let M = 0;
  if (typeof I == "number")
    M += (S - A) * I;
  else
    for (let _ = A; _ < S; _++)
      M += I(_);
  s > i.cellYOffset && (M = -M), M += l - i.translateY;
  const P = Math.min(i.cellXOffset, o), E = Math.max(i.cellXOffset, o);
  let T = 0;
  for (let _ = P; _ < E; _++)
    T += v[_].width;
  o > i.cellXOffset && (T = -T), T += a - i.translateX;
  const L = jr(R);
  if (T !== 0 && M !== 0)
    return {
      regions: []
    };
  const x = c > 0 ? vr(d, c, I) : 0, b = u - L - Math.abs(T), k = h - g - x - Math.abs(M) - 1;
  if (b > 150 && k > 150) {
    const _ = {
      sx: 0,
      sy: 0,
      sw: u * f,
      sh: h * f,
      dx: 0,
      dy: 0,
      dw: u * f,
      dh: h * f
    };
    if (M > 0 ? (_.sy = (g + 1) * f, _.sh = k * f, _.dy = (M + g + 1) * f, _.dh = k * f, C.push({
      x: 0,
      y: g,
      width: u,
      height: M + 1
    })) : M < 0 && (_.sy = (-M + g + 1) * f, _.sh = k * f, _.dy = (g + 1) * f, _.dh = k * f, C.push({
      x: 0,
      y: h + M - x,
      width: u,
      height: -M + x
    })), T > 0 ? (_.sx = L * f, _.sw = b * f, _.dx = (T + L) * f, _.dw = b * f, C.push({
      x: L - 1,
      y: 0,
      width: T + 2,
      height: h
    })) : T < 0 && (_.sx = (L - T) * f, _.sw = b * f, _.dx = L * f, _.dw = b * f, C.push({
      x: u + T,
      y: 0,
      width: -T,
      height: h
    })), e.setTransform(1, 0, 0, 1, 0, 0), y) {
      if (L > 0 && T !== 0 && M === 0 && (r === void 0 || (n == null ? void 0 : n[1]) !== !1)) {
        const w = L * f, z = h * f;
        e.drawImage(t, 0, 0, w, z, 0, 0, w, z);
      }
      if (x > 0 && T === 0 && M !== 0 && (r === void 0 || (n == null ? void 0 : n[0]) !== !1)) {
        const w = (h - x) * f, z = u * f, H = x * f;
        e.drawImage(t, 0, w, z, H, 0, w, z, H);
      }
    }
    e.drawImage(t, _.sx, _.sy, _.sw, _.sh, _.dx, _.dy, _.dw, _.dh), e.scale(f, f);
  }
  return e.imageSmoothingEnabled = !0, {
    regions: C
  };
}
function fb(e, t, n, r, i, o, s, a, l, c) {
  const u = [];
  return t !== e.cellXOffset || n !== e.cellYOffset || r !== e.translateX || i !== e.translateY || nr(l, n, r, i, a, (h, d, g, f) => {
    if (h.sourceIndex === c) {
      const v = Math.max(d, f) + 1;
      return u.push({
        x: v,
        y: 0,
        width: o - v,
        height: s
      }), !0;
    }
  }), u;
}
function hb(e, t) {
  if (t === void 0 || e.width !== t.width || e.height !== t.height || e.theme !== t.theme || e.headerHeight !== t.headerHeight || e.rowHeight !== t.rowHeight || e.rows !== t.rows || e.freezeColumns !== t.freezeColumns || e.getRowThemeOverride !== t.getRowThemeOverride || e.isFocused !== t.isFocused || e.isResizing !== t.isResizing || e.verticalBorder !== t.verticalBorder || e.getCellContent !== t.getCellContent || e.highlightRegions !== t.highlightRegions || e.selection !== t.selection || e.dragAndDropState !== t.dragAndDropState || e.prelightCells !== t.prelightCells || e.touchMode !== t.touchMode || e.maxScaleFactor !== t.maxScaleFactor)
    return !1;
  if (e.mappedColumns !== t.mappedColumns) {
    if (e.mappedColumns.length > 100 || e.mappedColumns.length !== t.mappedColumns.length)
      return !1;
    let n;
    for (let r = 0; r < e.mappedColumns.length; r++) {
      const i = e.mappedColumns[r], o = t.mappedColumns[r];
      if (Wr(i, o))
        continue;
      if (n !== void 0 || i.width === o.width)
        return !1;
      const { width: s, ...a } = i, { width: l, ...c } = o;
      if (!Wr(a, c))
        return !1;
      n = r;
    }
    return n === void 0 ? !0 : n;
  }
  return !0;
}
function ng(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v) {
  const R = f == null ? void 0 : f.filter((P) => P.style !== "no-outline");
  if (R === void 0 || R.length === 0)
    return;
  const I = jr(a), y = vr(g, d, h), C = [l, 0, a.length, g - d], A = [I, 0, t, n - y], S = R.map((P) => {
    const E = P.range, T = P.style ?? "dashed";
    return ny(E, C, t, n, A).map((L) => {
      const x = L.rect, b = wc(x.x, x.y, t, n, u, c + u, r, i, o, s, g, l, d, a, h), k = x.width === 1 && x.height === 1 ? b : wc(x.x + x.width - 1, x.y + x.height - 1, t, n, u, c + u, r, i, o, s, g, l, d, a, h);
      return x.x + x.width >= a.length && (k.width -= 1), x.y + x.height >= g && (k.height -= 1), {
        color: P.color,
        style: T,
        clip: L.clip,
        rect: ty({
          x: b.x,
          y: b.y,
          width: k.x + k.width - b.x,
          height: k.y + k.height - b.y
        }, t, n, 8)
      };
    });
  }), M = () => {
    e.lineWidth = 1;
    let P = !1;
    for (const E of S)
      for (const T of E)
        if ((T == null ? void 0 : T.rect) !== void 0 && Co(0, 0, t, n, T.rect.x, T.rect.y, T.rect.width, T.rect.height)) {
          const L = P, x = !ey(T.clip, T.rect);
          x && (e.save(), e.rect(T.clip.x, T.clip.y, T.clip.width, T.clip.height), e.clip()), T.style === "dashed" && !P ? (e.setLineDash([5, 3]), P = !0) : (T.style === "solid" || T.style === "solid-outline") && P && (e.setLineDash([]), P = !1), e.strokeStyle = T.style === "solid-outline" ? on(on(T.color, v.borderColor), v.bgCell) : hr(T.color, 1), e.strokeRect(T.rect.x + 0.5, T.rect.y + 0.5, T.rect.width - 1, T.rect.height - 1), x && (e.restore(), P = L);
        }
    P && e.setLineDash([]);
  };
  return M(), M;
}
function rg(e, t, n, r, i) {
  e.beginPath(), e.moveTo(t, n), e.lineTo(t, r), e.lineWidth = 2, e.strokeStyle = i, e.stroke(), e.globalAlpha = 1;
}
function ic(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, R) {
  if (u.current === void 0)
    return;
  const I = u.current.range, y = u.current.cell, C = [I.x + I.width - 1, I.y + I.height - 1];
  if (y[1] >= R && C[1] >= R || !s.some((_) => _.sourceIndex === y[0] || _.sourceIndex === C[0]))
    return;
  const [S, M] = u.current.cell, P = d(u.current.cell), E = P.span ?? [S, S], T = M >= R - g, L = g > 0 && !T ? vr(R, g, h) - 1 : 0, x = C[1];
  let b;
  if (nr(s, r, i, o, c, (_, w, z, H, j) => {
    if (_.sticky && S > _.sourceIndex)
      return;
    const re = _.sourceIndex < E[0], te = _.sourceIndex > E[1], O = _.sourceIndex === C[0];
    if (!(!O && (re || te)))
      return Fo(j, z, n, R, h, g, f, void 0, (N, J, oe) => {
        if (J !== M && J !== x)
          return;
        let $ = w, ce = _.width;
        if (P.span !== void 0) {
          const ie = pp(P.span, w, N, _.width, oe, _, a), pe = _.sticky ? ie[0] : ie[1];
          pe !== void 0 && ($ = pe.x, ce = pe.width);
        }
        return J === x && O && v && (b = () => {
          var ie;
          H > $ && !_.sticky && (e.beginPath(), e.rect(H, 0, t - H, n), e.clip()), e.beginPath(), e.rect($ + ce - 4, N + oe - 4, 4, 4), e.fillStyle = ((ie = _.themeOverride) == null ? void 0 : ie.accentColor) ?? l.accentColor, e.fill();
        }), b !== void 0;
      }), b !== void 0;
  }), b === void 0)
    return;
  const k = () => {
    e.save(), e.beginPath(), e.rect(0, c, t, n - c - L), e.clip(), b == null || b(), e.restore();
  };
  return k(), k;
}
function gb(e, t, n, r, i, o, s, a, l) {
  l === void 0 || l.size === 0 || (e.beginPath(), gp(t, n, o, r, (c, u, h, d, g, f) => {
    l.hasItemInRectangle({
      x: c[0],
      y: -2,
      width: c[1] - c[0] + 1,
      height: 1
    }) && e.rect(h, d, g, f);
  }), nr(t, a, o, s, i, (c, u, h, d) => {
    const g = Math.max(0, d - u), f = u + g + 1, v = c.width - g - 1;
    l.has([c.sourceIndex, -1]) && e.rect(f, r, v, i - r);
  }), e.clip());
}
function pb(e, t, n, r, i, o, s, a, l, c) {
  let u = 0;
  return nr(e, o, r, i, n, (h, d, g, f, v) => (Fo(v, g, t, s, a, l, c, void 0, (R, I, y, C) => {
    C || (u = Math.max(I, u));
  }), !0)), u;
}
function ig(e, t) {
  var Ue;
  const { canvasCtx: n, headerCanvasCtx: r, width: i, height: o, cellXOffset: s, cellYOffset: a, translateX: l, translateY: c, mappedColumns: u, enableGroups: h, freezeColumns: d, dragAndDropState: g, theme: f, drawFocus: v, headerHeight: R, groupHeaderHeight: I, disabledRows: y, rowHeight: C, verticalBorder: A, overrideCursor: S, isResizing: M, selection: P, fillHandle: E, freezeTrailingRows: T, rows: L, getCellContent: x, getGroupDetails: b, getRowThemeOverride: k, isFocused: _, drawHeaderCallback: w, prelightCells: z, drawCellCallback: H, highlightRegions: j, resizeCol: re, imageLoader: te, lastBlitData: O, hoverValues: N, hyperWrapping: J, hoverInfo: oe, spriteManager: $, maxScaleFactor: ce, hasAppendRow: se, touchMode: ie, enqueue: pe, renderStateProvider: we, getCellRenderer: Ce, renderStrategy: Be, bufferACtx: V, bufferBCtx: Ee, damage: Pe, minimumCellWidth: dt } = e;
  if (i === 0 || o === 0)
    return;
  const Se = Be === "double-buffer", ve = Math.min(ce, Math.ceil(window.devicePixelRatio ?? 1)), Oe = Be !== "direct" && hb(e, t), Le = n.canvas;
  (Le.width !== i * ve || Le.height !== o * ve) && (Le.width = i * ve, Le.height = o * ve, Le.style.width = i + "px", Le.style.height = o + "px");
  const qe = r.canvas, Me = h ? I + R : R, nt = Me + 1;
  (qe.width !== i * ve || qe.height !== nt * ve) && (qe.width = i * ve, qe.height = nt * ve, qe.style.width = i + "px", qe.style.height = nt + "px");
  const Ge = V.canvas, Ke = Ee.canvas;
  Se && (Ge.width !== i * ve || Ge.height !== o * ve) && (Ge.width = i * ve, Ge.height = o * ve, O.current !== void 0 && (O.current.aBufferScroll = void 0)), Se && (Ke.width !== i * ve || Ke.height !== o * ve) && (Ke.width = i * ve, Ke.height = o * ve, O.current !== void 0 && (O.current.bBufferScroll = void 0));
  const ue = O.current;
  if (Oe === !0 && s === (ue == null ? void 0 : ue.cellXOffset) && a === (ue == null ? void 0 : ue.cellYOffset) && l === (ue == null ? void 0 : ue.translateX) && c === (ue == null ? void 0 : ue.translateY))
    return;
  let He = null;
  Se && (He = n);
  const We = r;
  let De;
  Se ? Pe !== void 0 ? De = (ue == null ? void 0 : ue.lastBuffer) === "b" ? Ee : V : De = (ue == null ? void 0 : ue.lastBuffer) === "b" ? V : Ee : De = n;
  const Mt = De.canvas, Ve = Se ? Mt === Ge ? Ke : Ge : Le, je = typeof C == "number" ? () => C : C;
  We.save(), De.save(), We.beginPath(), De.beginPath(), We.textBaseline = "middle", De.textBaseline = "middle", ve !== 1 && (We.scale(ve, ve), De.scale(ve, ve));
  const Ze = bc(u, s, i, g, l);
  let Ct = [];
  const It = v && ((Ue = P.current) == null ? void 0 : Ue.cell[1]) === a && c === 0;
  let sn = !1;
  if (j !== void 0) {
    for (const Je of j)
      if (Je.style !== "no-outline" && Je.range.y === a && c === 0) {
        sn = !0;
        break;
      }
  }
  const Kt = () => {
    oy(We, Ze, h, oe, i, l, R, I, g, M, P, f, $, N, A, b, Pe, w, ie), tg(We, Ze, a, l, c, i, o, void 0, void 0, I, Me, je, k, A, T, L, f, !0), We.beginPath(), We.moveTo(0, nt - 0.5), We.lineTo(i, nt - 0.5), We.strokeStyle = on(f.headerBottomBorderColor ?? f.horizontalBorderColor ?? f.borderColor, f.bgHeader), We.stroke(), sn && ng(We, i, o, s, a, l, c, u, d, R, I, C, T, L, j, f), It && ic(We, i, o, a, l, c, Ze, u, f, Me, P, je, x, T, se, E, L);
  };
  if (Pe !== void 0) {
    const Je = Ze[Ze.length - 1].sourceIndex + 1, Lt = Pe.hasItemInRegion([
      {
        x: s,
        y: -2,
        width: Je,
        height: 2
      },
      {
        x: s,
        y: a,
        width: Je,
        height: 300
      },
      {
        x: 0,
        y: a,
        width: d,
        height: 300
      },
      {
        x: 0,
        y: -2,
        width: d,
        height: 2
      },
      {
        x: s,
        y: L - T,
        width: Je,
        height: T,
        when: T > 0
      }
    ]), Ft = (kt) => {
      Uf(kt, Ze, u, o, Me, l, c, a, L, je, x, b, k, y, _, v, T, se, Ct, Pe, P, z, j, te, $, N, oe, H, J, f, pe, we, Ce, S, dt);
      const Dt = P.current;
      E && v && Dt !== void 0 && Pe.has(Jg(Dt.range)) && ic(kt, i, o, a, l, c, Ze, u, f, Me, P, je, x, T, se, E, L);
    };
    Lt && (Ft(De), He !== null && (He.save(), He.scale(ve, ve), He.textBaseline = "middle", Ft(He), He.restore()), Pe.hasHeader() && (gb(We, Ze, i, I, Me, l, c, a, Pe), Kt())), De.restore(), We.restore();
    return;
  }
  if ((Oe !== !0 || s !== (ue == null ? void 0 : ue.cellXOffset) || l !== (ue == null ? void 0 : ue.translateX) || It !== (ue == null ? void 0 : ue.mustDrawFocusOnHeader) || sn !== (ue == null ? void 0 : ue.mustDrawHighlightRingsOnHeader)) && Kt(), Oe === !0) {
    rn(Ve !== void 0 && ue !== void 0);
    const { regions: Je } = db(De, Ve, Ve === Ge ? ue.aBufferScroll : ue.bBufferScroll, Ve === Ge ? ue.bBufferScroll : ue.aBufferScroll, ue, s, a, l, c, T, i, o, L, Me, ve, u, Ze, C, Se);
    Ct = Je;
  } else Oe !== !1 && (rn(ue !== void 0), Ct = fb(ue, s, a, l, c, i, o, Me, Ze, Oe));
  cb(De, Ze, i, o, T, L, A, je, f);
  const mt = ng(De, i, o, s, a, l, c, u, d, R, I, C, T, L, j, f), Bt = v ? ic(De, i, o, a, l, c, Ze, u, f, Me, P, je, x, T, se, E, L) : void 0;
  if (De.fillStyle = f.bgCell, Ct.length > 0) {
    De.beginPath();
    for (const Je of Ct)
      De.rect(Je.x, Je.y, Je.width, Je.height);
    De.clip(), De.fill(), De.beginPath();
  } else
    De.fillRect(0, 0, i, o);
  const Wt = Uf(De, Ze, u, o, Me, l, c, a, L, je, x, b, k, y, _, v, T, se, Ct, Pe, P, z, j, te, $, N, oe, H, J, f, pe, we, Ce, S, dt);
  lb(De, Ze, u, i, o, Me, l, c, a, L, je, k, P.rows, y, T, se, Ct, Pe, f), ub(De, Ze, a, l, c, i, o, Ct, Me, je, k, A, T, L, f), tg(De, Ze, a, l, c, i, o, Ct, Wt, I, Me, je, k, A, T, L, f), mt == null || mt(), Bt == null || Bt(), M && nr(Ze, 0, l, 0, Me, (Je, Lt) => Je.sourceIndex === re ? (rg(We, Lt + Je.width, 0, Me + 1, on(f.resizeIndicatorColor ?? f.accentLight, f.bgHeader)), rg(De, Lt + Je.width, Me, o, on(f.resizeIndicatorColor ?? f.accentLight, f.bgCell)), !0) : !1), He !== null && (He.fillStyle = f.bgCell, He.fillRect(0, 0, i, o), He.drawImage(De.canvas, 0, 0));
  const On = pb(Ze, o, Me, l, c, a, L, je, T, se);
  te == null || te.setWindow({
    x: s,
    y: a,
    width: Ze.length,
    height: On - a
  }, d, Array.from({ length: T }, (Je, Lt) => L - 1 - Lt));
  const Dn = ue !== void 0 && (s !== ue.cellXOffset || l !== ue.translateX), gt = ue !== void 0 && (a !== ue.cellYOffset || c !== ue.translateY);
  O.current = {
    cellXOffset: s,
    cellYOffset: a,
    translateX: l,
    translateY: c,
    mustDrawFocusOnHeader: It,
    mustDrawHighlightRingsOnHeader: sn,
    lastBuffer: Se ? Mt === Ge ? "a" : "b" : void 0,
    aBufferScroll: Mt === Ge ? [Dn, gt] : ue == null ? void 0 : ue.aBufferScroll,
    bBufferScroll: Mt === Ke ? [Dn, gt] : ue == null ? void 0 : ue.bBufferScroll
  }, De.restore(), We.restore();
}
const mb = 80;
function vb(e) {
  const t = e - 1;
  return t * t * t + 1;
}
class yb {
  constructor(t) {
    be(this, "callback");
    be(this, "currentHoveredItem");
    be(this, "leavingItems", []);
    be(this, "lastAnimationTime");
    be(this, "addToLeavingItems", (t) => {
      this.leavingItems.some((r) => Ci(r.item, t.item)) || this.leavingItems.push(t);
    });
    /**
     * @returns the hover amount of the item, if it was leaving (0 if not).
     */
    be(this, "removeFromLeavingItems", (t) => {
      const n = this.leavingItems.find((r) => Ci(r.item, t));
      return this.leavingItems = this.leavingItems.filter((r) => r !== n), (n == null ? void 0 : n.hoverAmount) ?? 0;
    });
    be(this, "cleanUpLeavingElements", () => {
      this.leavingItems = this.leavingItems.filter((t) => t.hoverAmount > 0);
    });
    be(this, "shouldStep", () => {
      const t = this.leavingItems.length > 0, n = this.currentHoveredItem !== void 0 && this.currentHoveredItem.hoverAmount < 1;
      return t || n;
    });
    be(this, "getAnimatingItems", () => this.currentHoveredItem !== void 0 ? [...this.leavingItems, this.currentHoveredItem] : this.leavingItems.map((t) => ({ ...t, hoverAmount: vb(t.hoverAmount) })));
    be(this, "step", (t) => {
      if (this.lastAnimationTime === void 0)
        this.lastAnimationTime = t;
      else {
        const r = (t - this.lastAnimationTime) / mb;
        for (const o of this.leavingItems)
          o.hoverAmount = Cn(o.hoverAmount - r, 0, 1);
        this.currentHoveredItem !== void 0 && (this.currentHoveredItem.hoverAmount = Cn(this.currentHoveredItem.hoverAmount + r, 0, 1));
        const i = this.getAnimatingItems();
        this.callback(i), this.cleanUpLeavingElements();
      }
      this.shouldStep() ? (this.lastAnimationTime = t, window.requestAnimationFrame(this.step)) : this.lastAnimationTime = void 0;
    });
    be(this, "setHovered", (t) => {
      var n;
      if (!Ci((n = this.currentHoveredItem) == null ? void 0 : n.item, t)) {
        if (this.currentHoveredItem !== void 0 && this.addToLeavingItems(this.currentHoveredItem), t !== void 0) {
          const r = this.removeFromLeavingItems(t);
          this.currentHoveredItem = {
            item: t,
            hoverAmount: r
          };
        } else
          this.currentHoveredItem = void 0;
        this.lastAnimationTime === void 0 && window.requestAnimationFrame(this.step);
      }
    });
    this.callback = t;
  }
}
class bb {
  constructor(t) {
    be(this, "fn");
    be(this, "val");
    this.fn = t;
  }
  get value() {
    return this.val ?? (this.val = this.fn());
  }
}
function eu(e) {
  return new bb(e);
}
const wb = eu(() => window.navigator.userAgent.includes("Firefox")), ko = eu(() => window.navigator.userAgent.includes("Mac OS") && window.navigator.userAgent.includes("Safari") && !window.navigator.userAgent.includes("Chrome")), xo = eu(() => window.navigator.platform.toLowerCase().startsWith("mac"));
function Sb(e) {
  const t = p.useRef([]), n = p.useRef(0), r = p.useRef(e);
  r.current = e;
  const i = p.useCallback(() => {
    const o = () => window.requestAnimationFrame(s), s = () => {
      const a = t.current.map(Kc);
      t.current = [], r.current(new xi(a)), t.current.length > 0 ? n.current++ : n.current = 0;
    };
    window.requestAnimationFrame(n.current > 600 ? o : s);
  }, []);
  return p.useCallback((o) => {
    t.current.length === 0 && i();
    const s = kn(o[0], o[1]);
    t.current.includes(s) || t.current.push(s);
  }, [i]);
}
const Jn = "header", nn = "group-header", Ro = "out-of-bounds";
var Br;
(function(e) {
  e[e.Start = -2] = "Start", e[e.StartPadding = -1] = "StartPadding", e[e.Center = 0] = "Center", e[e.EndPadding = 1] = "EndPadding", e[e.End = 2] = "End";
})(Br || (Br = {}));
function Ip(e, t) {
  return e === t ? !0 : (e == null ? void 0 : e.kind) === "out-of-bounds" ? (e == null ? void 0 : e.kind) === (t == null ? void 0 : t.kind) && (e == null ? void 0 : e.location[0]) === (t == null ? void 0 : t.location[0]) && (e == null ? void 0 : e.location[1]) === (t == null ? void 0 : t.location[1]) && (e == null ? void 0 : e.region[0]) === (t == null ? void 0 : t.region[0]) && (e == null ? void 0 : e.region[1]) === (t == null ? void 0 : t.region[1]) : (e == null ? void 0 : e.kind) === (t == null ? void 0 : t.kind) && (e == null ? void 0 : e.location[0]) === (t == null ? void 0 : t.location[0]) && (e == null ? void 0 : e.location[1]) === (t == null ? void 0 : t.location[1]);
}
const og = 6, Cb = (e, t) => {
  if (e.kind === ae.Custom)
    return e.copyData;
  const n = t == null ? void 0 : t(e);
  return (n == null ? void 0 : n.getAccessibilityString(e)) ?? "";
}, kb = (e, t) => {
  const { width: n, height: r, accessibilityHeight: i, columns: o, cellXOffset: s, cellYOffset: a, headerHeight: l, fillHandle: c = !1, groupHeaderHeight: u, rowHeight: h, rows: d, getCellContent: g, getRowThemeOverride: f, onHeaderMenuClick: v, enableGroups: R, isFilling: I, onCanvasFocused: y, onCanvasBlur: C, isFocused: A, selection: S, freezeColumns: M, onContextMenu: P, freezeTrailingRows: E, fixedShadowX: T = !0, fixedShadowY: L = !0, drawFocusRing: x, onMouseDown: b, onMouseUp: k, onMouseMoveRaw: _, onMouseMove: w, onItemHovered: z, dragAndDropState: H, firstColAccessible: j, onKeyDown: re, onKeyUp: te, highlightRegions: O, canvasRef: N, onDragStart: J, onDragEnd: oe, eventTargetRef: $, isResizing: ce, resizeColumn: se, isDragging: ie, isDraggable: pe = !1, allowResize: we, disabledRows: Ce, hasAppendRow: Be, getGroupDetails: V, theme: Ee, prelightCells: Pe, headerIcons: dt, verticalBorder: Se, drawCell: ve, drawHeader: Oe, onCellFocused: Le, onDragOverCell: qe, onDrop: Me, onDragLeave: nt, imageWindowLoader: Ge, smoothScrollX: Ke = !1, smoothScrollY: ue = !1, experimental: He, getCellRenderer: We } = e, De = e.translateX ?? 0, Mt = e.translateY ?? 0, Ve = Math.max(M, Math.min(o.length - 1, s)), je = p.useRef(null), Ze = Ge, Ct = p.useRef(), [It, sn] = p.useState(!1), Kt = p.useRef([]), mt = p.useRef(), [Bt, Wt] = p.useState(), [On, Dn] = p.useState(), gt = p.useRef(null), [Ue, Je] = p.useState(), [Lt, Ft] = p.useState(!1), kt = p.useRef(Lt);
  kt.current = Lt;
  const Dt = p.useMemo(() => new Jv(dt, () => {
    xn.current = void 0, rr.current();
  }), [dt]), hn = R ? u + l : l, Ye = p.useRef(-1), vt = ((He == null ? void 0 : He.enableFirefoxRescaling) ?? !1) && wb.value, ct = ((He == null ? void 0 : He.enableSafariRescaling) ?? !1) && ko.value;
  p.useLayoutEffect(() => {
    window.devicePixelRatio === 1 || !vt && !ct || (Ye.current !== -1 && sn(!0), window.clearTimeout(Ye.current), Ye.current = window.setTimeout(() => {
      sn(!1), Ye.current = -1;
    }, 200));
  }, [a, Ve, De, Mt, vt, ct]);
  const ut = M1(o, M), qt = T ? jr(ut, H) : 0, pt = p.useCallback((q, Q, de) => {
    const le = q.getBoundingClientRect();
    if (Q >= ut.length || de >= d)
      return;
    const ne = le.width / n, me = wc(Q, de, n, r, u, hn, Ve, a, De, Mt, d, M, E, ut, h);
    return ne !== 1 && (me.x *= ne, me.y *= ne, me.width *= ne, me.height *= ne), me.x += le.x, me.y += le.y, me;
  }, [
    n,
    r,
    u,
    hn,
    Ve,
    a,
    De,
    Mt,
    d,
    M,
    E,
    ut,
    h
  ]), Ot = p.useCallback((q, Q, de, le) => {
    const ne = q.getBoundingClientRect(), me = ne.width / n, Ie = (Q - ne.left) / me, Ae = (de - ne.top) / me, ge = 5, tt = bc(ut, Ve, n, void 0, De);
    let ke = 0, it = 0;
    le instanceof MouseEvent && (ke = le.button, it = le.buttons);
    const Fe = O1(Ie, tt, De), Xe = D1(Ae, r, R, l, u, d, h, a, Mt, E), Rt = (le == null ? void 0 : le.shiftKey) === !0, ze = (le == null ? void 0 : le.ctrlKey) === !0, xt = (le == null ? void 0 : le.metaKey) === !0, cn = le !== void 0 && !(le instanceof MouseEvent) || (le == null ? void 0 : le.pointerType) === "touch", wt = [
      Ie < 0 ? -1 : n < Ie ? 1 : 0,
      Ae < hn ? -1 : r < Ae ? 1 : 0
    ];
    let Jt;
    if (Fe === -1 || Ae < 0 || Ie < 0 || Xe === void 0 || Ie > n || Ae > r) {
      const et = Ie > n ? 1 : Ie < 0 ? -1 : 0, _t = Ae > r ? 1 : Ae < 0 ? -1 : 0;
      let Qt = et * 2, Rn = _t * 2;
      et === 0 && (Qt = Fe === -1 ? Br.EndPadding : Br.Center), _t === 0 && (Rn = Xe === void 0 ? Br.EndPadding : Br.Center);
      let vn = !1;
      if (Fe === -1 && Xe === -1) {
        const or = pt(q, ut.length - 1, -1);
        rn(or !== void 0), vn = Q < or.x + or.width + ge;
      }
      const Er = Ie > n && Ie < n + hc() || Ae > r && Ae < r + hc();
      Jt = {
        kind: Ro,
        location: [Fe !== -1 ? Fe : Ie < 0 ? 0 : ut.length - 1, Xe ?? d - 1],
        region: [Qt, Rn],
        shiftKey: Rt,
        ctrlKey: ze,
        metaKey: xt,
        isEdge: vn,
        isTouch: cn,
        button: ke,
        buttons: it,
        scrollEdge: wt,
        isMaybeScrollbar: Er
      };
    } else if (Xe <= -1) {
      let et = pt(q, Fe, Xe);
      rn(et !== void 0);
      let _t = et !== void 0 && et.x + et.width - Q <= ge;
      const Qt = Fe - 1;
      Q - et.x <= ge && Qt >= 0 ? (_t = !0, et = pt(q, Qt, Xe), rn(et !== void 0), Jt = {
        kind: R && Xe === -2 ? nn : Jn,
        location: [Qt, Xe],
        bounds: et,
        group: ut[Qt].group ?? "",
        isEdge: _t,
        shiftKey: Rt,
        ctrlKey: ze,
        metaKey: xt,
        isTouch: cn,
        localEventX: Q - et.x,
        localEventY: de - et.y,
        button: ke,
        buttons: it,
        scrollEdge: wt
      }) : Jt = {
        kind: R && Xe === -2 ? nn : Jn,
        group: ut[Fe].group ?? "",
        location: [Fe, Xe],
        bounds: et,
        isEdge: _t,
        shiftKey: Rt,
        ctrlKey: ze,
        metaKey: xt,
        isTouch: cn,
        localEventX: Q - et.x,
        localEventY: de - et.y,
        button: ke,
        buttons: it,
        scrollEdge: wt
      };
    } else {
      const et = pt(q, Fe, Xe);
      rn(et !== void 0);
      const _t = et !== void 0 && et.x + et.width - Q < ge;
      let Qt = !1;
      if (c && S.current !== void 0) {
        const Rn = Jg(S.current.range), vn = pt(q, Rn[0], Rn[1]);
        if (vn !== void 0) {
          const Er = vn.x + vn.width - 2, or = vn.y + vn.height - 2;
          Qt = Math.abs(Er - Q) < og && Math.abs(or - de) < og;
        }
      }
      Jt = {
        kind: "cell",
        location: [Fe, Xe],
        bounds: et,
        isEdge: _t,
        shiftKey: Rt,
        ctrlKey: ze,
        isFillHandle: Qt,
        metaKey: xt,
        isTouch: cn,
        localEventX: Q - et.x,
        localEventY: de - et.y,
        button: ke,
        buttons: it,
        scrollEdge: wt
      };
    }
    return Jt;
  }, [
    n,
    ut,
    Ve,
    De,
    r,
    R,
    l,
    u,
    d,
    h,
    a,
    Mt,
    E,
    pt,
    c,
    S,
    hn
  ]), [yt] = Bt ?? [], Oi = p.useRef(() => {
  }), Wn = p.useRef(Bt);
  Wn.current = Bt;
  const [Ln, Fn] = p.useMemo(() => {
    const q = document.createElement("canvas"), Q = document.createElement("canvas");
    return q.style.display = "none", q.style.opacity = "0", q.style.position = "fixed", Q.style.display = "none", Q.style.opacity = "0", Q.style.position = "fixed", [q.getContext("2d", { alpha: !1 }), Q.getContext("2d", { alpha: !1 })];
  }, []);
  p.useLayoutEffect(() => {
    if (!(Ln === null || Fn === null))
      return document.documentElement.append(Ln.canvas), document.documentElement.append(Fn.canvas), () => {
        Ln.canvas.remove(), Fn.canvas.remove();
      };
  }, [Ln, Fn]);
  const yr = p.useMemo(() => new j1(), []), Di = vt && It ? 1 : ct && It ? 2 : 5, Li = (He == null ? void 0 : He.disableMinimumCellWidth) === !0 ? 1 : 10, xn = p.useRef(), br = p.useRef(null), wr = p.useRef(null), Sr = p.useCallback(() => {
    var Ie;
    const q = je.current, Q = gt.current;
    if (q === null || Q === null || (br.current === null && (br.current = q.getContext("2d", { alpha: !1 }), q.width = 0, q.height = 0), wr.current === null && (wr.current = Q.getContext("2d", { alpha: !1 }), Q.width = 0, Q.height = 0), br.current === null || wr.current === null || Ln === null || Fn === null))
      return;
    let de = !1;
    const le = (Ae) => {
      de = !0, Je(Ae);
    }, ne = xn.current, me = {
      headerCanvasCtx: wr.current,
      canvasCtx: br.current,
      bufferACtx: Ln,
      bufferBCtx: Fn,
      width: n,
      height: r,
      cellXOffset: Ve,
      cellYOffset: a,
      translateX: Math.round(De),
      translateY: Math.round(Mt),
      mappedColumns: ut,
      enableGroups: R,
      freezeColumns: M,
      dragAndDropState: H,
      theme: Ee,
      headerHeight: l,
      groupHeaderHeight: u,
      disabledRows: Ce ?? rt.empty(),
      rowHeight: h,
      verticalBorder: Se,
      isResizing: ce,
      resizeCol: se,
      isFocused: A,
      selection: S,
      fillHandle: c,
      drawCellCallback: ve,
      hasAppendRow: Be,
      overrideCursor: le,
      maxScaleFactor: Di,
      freezeTrailingRows: E,
      rows: d,
      drawFocus: x,
      getCellContent: g,
      getGroupDetails: V ?? ((Ae) => ({ name: Ae })),
      getRowThemeOverride: f,
      drawHeaderCallback: Oe,
      prelightCells: Pe,
      highlightRegions: O,
      imageLoader: Ze,
      lastBlitData: mt,
      damage: Ct.current,
      hoverValues: Kt.current,
      hoverInfo: Wn.current,
      spriteManager: Dt,
      scrolling: It,
      hyperWrapping: (He == null ? void 0 : He.hyperWrapping) ?? !1,
      touchMode: Lt,
      enqueue: Oi.current,
      renderStateProvider: yr,
      renderStrategy: (He == null ? void 0 : He.renderStrategy) ?? (ko.value ? "double-buffer" : "single-buffer"),
      getCellRenderer: We,
      minimumCellWidth: Li
    };
    me.damage === void 0 ? (xn.current = me, ig(me, ne)) : ig(me, void 0), !de && (me.damage === void 0 || me.damage.has((Ie = Wn == null ? void 0 : Wn.current) == null ? void 0 : Ie[0])) && Je(void 0);
  }, [
    Ln,
    Fn,
    n,
    r,
    Ve,
    a,
    De,
    Mt,
    ut,
    R,
    M,
    H,
    Ee,
    l,
    u,
    Ce,
    h,
    Se,
    ce,
    Be,
    se,
    A,
    S,
    c,
    E,
    d,
    x,
    Di,
    g,
    V,
    f,
    ve,
    Oe,
    Pe,
    O,
    Ze,
    Dt,
    It,
    He == null ? void 0 : He.hyperWrapping,
    He == null ? void 0 : He.renderStrategy,
    Lt,
    yr,
    We,
    Li
  ]), rr = p.useRef(Sr);
  p.useLayoutEffect(() => {
    Sr(), rr.current = Sr;
  }, [Sr]), p.useLayoutEffect(() => {
    (async () => {
      var Q;
      ((Q = document == null ? void 0 : document.fonts) == null ? void 0 : Q.ready) !== void 0 && (await document.fonts.ready, xn.current = void 0, rr.current());
    })();
  }, []);
  const jn = p.useCallback((q) => {
    Ct.current = q, rr.current(), Ct.current = void 0;
  }, []), Fi = Sb(jn);
  Oi.current = Fi;
  const qi = p.useCallback((q) => {
    jn(new xi(q.map((Q) => Q.cell)));
  }, [jn]);
  Ze.setCallback(jn);
  const [Ho, zo] = p.useState(!1), [Cr, qn] = yt ?? [], $o = Cr !== void 0 && qn === -1, No = Cr !== void 0 && qn === -2;
  let Hi = !1, kr = !1, At = Ue;
  if (At === void 0 && Cr !== void 0 && qn !== void 0 && qn > -1 && qn < d) {
    const q = g([Cr, qn], !0);
    Hi = q.kind === fn.NewRow || q.kind === fn.Marker && q.markerKind !== "number", kr = q.kind === ae.Boolean && fc(q), At = q.cursor;
  }
  const zi = ie ? "grabbing" : (On ?? !1) || ce ? "col-resize" : Ho || I ? "crosshair" : At !== void 0 ? At : $o || Hi || kr || No ? "pointer" : "default", xr = p.useMemo(() => ({
    // width,
    // height,
    contain: "strict",
    display: "block",
    cursor: zi
  }), [zi]), Ur = p.useRef("default"), Un = $ == null ? void 0 : $.current;
  Un != null && Ur.current !== xr.cursor && (Un.style.cursor = Ur.current = xr.cursor);
  const Vt = p.useCallback((q, Q, de, le) => {
    if (V === void 0)
      return;
    const ne = V(q);
    if (ne.actions !== void 0) {
      const me = bp(Q, ne.actions);
      for (const [Ie, Ae] of me.entries())
        if (qo(Ae, de + Q.x, le + Ae.y))
          return ne.actions[Ie];
    }
  }, [V]), gn = p.useCallback((q, Q, de, le) => {
    const ne = o[Q];
    if (!ie && !ce && ne.hasMenu === !0 && !(On ?? !1)) {
      const me = pt(q, Q, -1);
      rn(me !== void 0);
      const Ie = yp(me.x, me.y, me.width, me.height, qc(ne.title) === "rtl");
      if (de > Ie.x && de < Ie.x + Ie.width && le > Ie.y && le < Ie.y + Ie.height)
        return me;
    }
  }, [o, pt, On, ie, ce]), Xr = p.useRef(0), Xn = p.useRef(), Yr = p.useRef(!1), jt = p.useCallback((q) => {
    const Q = je.current, de = $ == null ? void 0 : $.current;
    if (Q === null || q.target !== Q && q.target !== de)
      return;
    Yr.current = !0;
    let le, ne;
    if (q instanceof MouseEvent ? (le = q.clientX, ne = q.clientY) : (le = q.touches[0].clientX, ne = q.touches[0].clientY), q.target === de && de !== null) {
      const Ie = de.getBoundingClientRect();
      if (le > Ie.right || ne > Ie.bottom)
        return;
    }
    const me = Ot(Q, le, ne, q);
    Xn.current = me.location, me.isTouch && (Xr.current = Date.now()), kt.current !== me.isTouch && Ft(me.isTouch), !(me.kind === Jn && gn(Q, me.location[0], le, ne) !== void 0) && (me.kind === nn && Vt(me.group, me.bounds, me.localEventX, me.localEventY) !== void 0 || (b == null || b(me), !me.isTouch && pe !== !0 && pe !== me.kind && me.button < 3 && me.button !== 1 && q.preventDefault()));
  }, [$, pe, Ot, Vt, gn, b]);
  Ht("touchstart", jt, window, !1), Ht("mousedown", jt, window, !1);
  const Rr = p.useRef(0), Gr = p.useCallback((q) => {
    var it, Fe;
    const Q = Rr.current;
    Rr.current = Date.now();
    const de = je.current;
    if (Yr.current = !1, k === void 0 || de === null)
      return;
    const le = $ == null ? void 0 : $.current, ne = q.target !== de && q.target !== le;
    let me, Ie, Ae = !0;
    if (q instanceof MouseEvent) {
      if (me = q.clientX, Ie = q.clientY, Ae = q.button < 3, q.pointerType === "touch")
        return;
    } else
      me = q.changedTouches[0].clientX, Ie = q.changedTouches[0].clientY;
    let ge = Ot(de, me, Ie, q);
    ge.isTouch && Xr.current !== 0 && Date.now() - Xr.current > 500 && (ge = {
      ...ge,
      isLongTouch: !0
    }), Q !== 0 && Date.now() - Q < (ge.isTouch ? 1e3 : 500) && (ge = {
      ...ge,
      isDoubleClick: !0
    }), kt.current !== ge.isTouch && Ft(ge.isTouch), !ne && q.cancelable && Ae && q.preventDefault();
    const [tt] = ge.location, ke = gn(de, tt, me, Ie);
    if (ge.kind === Jn && ke !== void 0) {
      (ge.button !== 0 || ((it = Xn.current) == null ? void 0 : it[0]) !== tt || ((Fe = Xn.current) == null ? void 0 : Fe[1]) !== -1) && k(ge, !0);
      return;
    } else if (ge.kind === nn) {
      const Xe = Vt(ge.group, ge.bounds, ge.localEventX, ge.localEventY);
      if (Xe !== void 0) {
        ge.button === 0 && Xe.onClick(ge);
        return;
      }
    }
    k(ge, ne);
  }, [k, $, Ot, gn, Vt]);
  Ht("mouseup", Gr, window, !1), Ht("touchend", Gr, window, !1);
  const $i = p.useCallback((q) => {
    var ke, it;
    const Q = je.current;
    if (Q === null)
      return;
    const de = $ == null ? void 0 : $.current, le = q.target !== Q && q.target !== de;
    let ne, me, Ie = !0;
    q instanceof MouseEvent ? (ne = q.clientX, me = q.clientY, Ie = q.button < 3) : (ne = q.changedTouches[0].clientX, me = q.changedTouches[0].clientY);
    const Ae = Ot(Q, ne, me, q);
    kt.current !== Ae.isTouch && Ft(Ae.isTouch), !le && q.cancelable && Ie && q.preventDefault();
    const [ge] = Ae.location, tt = gn(Q, ge, ne, me);
    if (Ae.kind === Jn && tt !== void 0)
      Ae.button === 0 && ((ke = Xn.current) == null ? void 0 : ke[0]) === ge && ((it = Xn.current) == null ? void 0 : it[1]) === -1 && (v == null || v(ge, tt));
    else if (Ae.kind === nn) {
      const Fe = Vt(Ae.group, Ae.bounds, Ae.localEventX, Ae.localEventY);
      Fe !== void 0 && Ae.button === 0 && Fe.onClick(Ae);
    }
  }, [$, Ot, gn, v, Vt]);
  Ht("click", $i, window, !1);
  const Bo = p.useCallback((q) => {
    const Q = je.current, de = $ == null ? void 0 : $.current;
    if (Q === null || q.target !== Q && q.target !== de || P === void 0)
      return;
    const le = Ot(Q, q.clientX, q.clientY, q);
    P(le, () => {
      q.cancelable && q.preventDefault();
    });
  }, [$, Ot, P]);
  Ht("contextmenu", Bo, ($ == null ? void 0 : $.current) ?? null, !1);
  const Ni = p.useCallback((q) => {
    Ct.current = new xi(q.map((Q) => Q.item)), Kt.current = q, rr.current(), Ct.current = void 0;
  }, []), pn = p.useMemo(() => new yb(Ni), [Ni]), Hn = p.useRef(pn);
  Hn.current = pn, p.useLayoutEffect(() => {
    const q = Hn.current;
    if (yt === void 0 || yt[1] < 0) {
      q.setHovered(yt);
      return;
    }
    const Q = g(yt, !0), de = We(Q), le = de === void 0 && Q.kind === ae.Custom || (de == null ? void 0 : de.needsHover) !== void 0 && (typeof de.needsHover == "boolean" ? de.needsHover : de.needsHover(Q));
    q.setHovered(le ? yt : void 0);
  }, [g, We, yt]);
  const Zt = p.useRef(), U = p.useCallback((q) => {
    var Ae;
    const Q = je.current;
    if (Q === null)
      return;
    const de = $ == null ? void 0 : $.current, le = q.target !== Q && q.target !== de, ne = Ot(Q, q.clientX, q.clientY, q);
    if (ne.kind !== "out-of-bounds" && le && !Yr.current && !ne.isTouch)
      return;
    const me = (ge, tt) => {
      Wt((ke) => ke === ge || (ke == null ? void 0 : ke[0][0]) === (ge == null ? void 0 : ge[0][0]) && (ke == null ? void 0 : ke[0][1]) === (ge == null ? void 0 : ge[0][1]) && ((ke == null ? void 0 : ke[1][0]) === (ge == null ? void 0 : ge[1][0]) && (ke == null ? void 0 : ke[1][1]) === (ge == null ? void 0 : ge[1][1]) || !tt) ? ke : ge);
    };
    if (!Ip(ne, Zt.current))
      Je(void 0), z == null || z(ne), me(ne.kind === Ro ? void 0 : [ne.location, [ne.localEventX, ne.localEventY]], !0), Zt.current = ne;
    else if (ne.kind === "cell" || ne.kind === Jn || ne.kind === nn) {
      let ge = !1, tt = !0;
      if (ne.kind === "cell") {
        const it = g(ne.location);
        tt = ((Ae = We(it)) == null ? void 0 : Ae.needsHoverPosition) ?? it.kind === ae.Custom, ge = tt;
      } else ne.kind === nn && (ge = !0);
      const ke = [ne.location, [ne.localEventX, ne.localEventY]];
      me(ke, tt), Wn.current = ke, ge && jn(new xi([ne.location]));
    }
    const Ie = ne.location[0] >= (j ? 0 : 1);
    Dn(ne.kind === Jn && ne.isEdge && Ie && we === !0), zo(ne.kind === "cell" && ne.isFillHandle), _ == null || _(q), w(ne);
  }, [
    $,
    Ot,
    j,
    we,
    _,
    w,
    z,
    g,
    We,
    jn
  ]);
  Ht("mousemove", U, window, !0);
  const bt = p.useCallback((q) => {
    const Q = je.current;
    if (Q === null)
      return;
    let de, le;
    S.current !== void 0 && (de = pt(Q, S.current.cell[0], S.current.cell[1]), le = S.current.cell), re == null || re({
      bounds: de,
      stopPropagation: () => q.stopPropagation(),
      preventDefault: () => q.preventDefault(),
      cancel: () => {
      },
      ctrlKey: q.ctrlKey,
      metaKey: q.metaKey,
      shiftKey: q.shiftKey,
      altKey: q.altKey,
      key: q.key,
      keyCode: q.keyCode,
      rawEvent: q,
      location: le
    });
  }, [re, S, pt]), ir = p.useCallback((q) => {
    const Q = je.current;
    if (Q === null)
      return;
    let de, le;
    S.current !== void 0 && (de = pt(Q, S.current.cell[0], S.current.cell[1]), le = S.current.cell), te == null || te({
      bounds: de,
      stopPropagation: () => q.stopPropagation(),
      preventDefault: () => q.preventDefault(),
      cancel: () => {
      },
      ctrlKey: q.ctrlKey,
      metaKey: q.metaKey,
      shiftKey: q.shiftKey,
      altKey: q.altKey,
      key: q.key,
      keyCode: q.keyCode,
      rawEvent: q,
      location: le
    });
  }, [te, S, pt]), Wo = p.useCallback((q) => {
    je.current = q, N !== void 0 && (N.current = q);
  }, [N]), Bi = p.useCallback((q) => {
    const Q = je.current;
    if (Q === null || pe === !1 || ce) {
      q.preventDefault();
      return;
    }
    let de, le;
    const ne = Ot(Q, q.clientX, q.clientY);
    if (pe !== !0 && ne.kind !== pe) {
      q.preventDefault();
      return;
    }
    const me = (it, Fe) => {
      de = it, le = Fe;
    };
    let Ie, Ae, ge;
    const tt = (it, Fe, Xe) => {
      Ie = it, Ae = Fe, ge = Xe;
    };
    let ke = !1;
    if (J == null || J({
      ...ne,
      setData: me,
      setDragImage: tt,
      preventDefault: () => ke = !0,
      defaultPrevented: () => ke
    }), !ke && de !== void 0 && le !== void 0 && q.dataTransfer !== null)
      if (q.dataTransfer.setData(de, le), q.dataTransfer.effectAllowed = "copyLink", Ie !== void 0 && Ae !== void 0 && ge !== void 0)
        q.dataTransfer.setDragImage(Ie, Ae, ge);
      else {
        const [it, Fe] = ne.location;
        if (Fe !== void 0) {
          const Xe = document.createElement("canvas"), Rt = pt(Q, it, Fe);
          rn(Rt !== void 0);
          const ze = Math.ceil(window.devicePixelRatio ?? 1);
          Xe.width = Rt.width * ze, Xe.height = Rt.height * ze;
          const xt = Xe.getContext("2d");
          xt !== null && (xt.scale(ze, ze), xt.textBaseline = "middle", Fe === -1 ? (xt.font = Ee.headerFontFull, xt.fillStyle = Ee.bgHeader, xt.fillRect(0, 0, Xe.width, Xe.height), wp(xt, 0, 0, Rt.width, Rt.height, ut[it], !1, Ee, !1, !1, 0, Dt, Oe, !1)) : (xt.font = Ee.baseFontFull, xt.fillStyle = Ee.bgCell, xt.fillRect(0, 0, Xe.width, Xe.height), vp(xt, g([it, Fe]), 0, Fe, !1, !1, 0, 0, Rt.width, Rt.height, !1, Ee, Ee.bgCell, Ze, Dt, 1, void 0, !1, 0, void 0, void 0, void 0, yr, We, () => {
          }))), Xe.style.left = "-100%", Xe.style.position = "absolute", Xe.style.width = `${Rt.width}px`, Xe.style.height = `${Rt.height}px`, document.body.append(Xe), q.dataTransfer.setDragImage(Xe, Rt.width / 2, Rt.height / 2), window.setTimeout(() => {
            Xe.remove();
          }, 0);
        }
      }
    else
      q.preventDefault();
  }, [
    pe,
    ce,
    Ot,
    J,
    pt,
    Ee,
    ut,
    Dt,
    Oe,
    g,
    Ze,
    yr,
    We
  ]);
  Ht("dragstart", Bi, ($ == null ? void 0 : $.current) ?? null, !1, !1);
  const Kr = p.useRef(), jo = p.useCallback((q) => {
    const Q = je.current;
    if (Me !== void 0 && q.preventDefault(), Q === null || qe === void 0)
      return;
    const de = Ot(Q, q.clientX, q.clientY), [le, ne] = de.location, me = le - (j ? 0 : 1), [Ie, Ae] = Kr.current ?? [];
    (Ie !== me || Ae !== ne) && (Kr.current = [me, ne], qe([me, ne], q.dataTransfer));
  }, [j, Ot, qe, Me]);
  Ht("dragover", jo, ($ == null ? void 0 : $.current) ?? null, !1, !1);
  const tu = p.useCallback(() => {
    Kr.current = void 0, oe == null || oe();
  }, [oe]);
  Ht("dragend", tu, ($ == null ? void 0 : $.current) ?? null, !1, !1);
  const Y = p.useCallback((q) => {
    const Q = je.current;
    if (Q === null || Me === void 0)
      return;
    q.preventDefault();
    const de = Ot(Q, q.clientX, q.clientY), [le, ne] = de.location, me = le - (j ? 0 : 1);
    Me([me, ne], q.dataTransfer);
  }, [j, Ot, Me]);
  Ht("drop", Y, ($ == null ? void 0 : $.current) ?? null, !1, !1);
  const zt = p.useCallback(() => {
    nt == null || nt();
  }, [nt]);
  Ht("dragleave", zt, ($ == null ? void 0 : $.current) ?? null, !1, !1);
  const Pt = p.useRef(S);
  Pt.current = S;
  const _r = p.useRef(null), Vr = p.useCallback((q) => {
    var Q;
    je.current === null || !je.current.contains(document.activeElement) || (q === null && Pt.current.current !== void 0 ? (Q = N == null ? void 0 : N.current) == null || Q.focus({
      preventScroll: !0
    }) : q !== null && q.focus({
      preventScroll: !0
    }), _r.current = q);
  }, [N]);
  p.useImperativeHandle(t, () => ({
    focus: () => {
      var Q;
      const q = _r.current;
      q === null || !document.contains(q) ? (Q = N == null ? void 0 : N.current) == null || Q.focus({
        preventScroll: !0
      }) : q.focus({
        preventScroll: !0
      });
    },
    getBounds: (q, Q) => {
      if (!(N === void 0 || N.current === null))
        return pt(N.current, q ?? 0, Q ?? -1);
    },
    damage: qi
  }), [N, qi, pt]);
  const Yn = p.useRef(), Yt = Em(() => {
    var Ae, ge, tt;
    if (n < 50 || (He == null ? void 0 : He.disableAccessibilityTree) === !0)
      return null;
    let q = bc(ut, Ve, n, H, De);
    const Q = j ? 0 : -1;
    !j && ((Ae = q[0]) == null ? void 0 : Ae.sourceIndex) === 0 && (q = q.slice(1));
    const [de, le] = ((ge = S.current) == null ? void 0 : ge.cell) ?? [], ne = (tt = S.current) == null ? void 0 : tt.range, me = q.map((ke) => ke.sourceIndex), Ie = ur(a, Math.min(d, a + i));
    return de !== void 0 && le !== void 0 && !(me.includes(de) && Ie.includes(le)) && Vr(null), p.createElement(
      "table",
      { key: "access-tree", role: "grid", "aria-rowcount": d + 1, "aria-multiselectable": "true", "aria-colcount": ut.length + Q },
      p.createElement(
        "thead",
        { role: "rowgroup" },
        p.createElement("tr", { role: "row", "aria-rowindex": 1 }, q.map((ke) => p.createElement("th", { role: "columnheader", "aria-selected": S.columns.hasIndex(ke.sourceIndex), "aria-colindex": ke.sourceIndex + 1 + Q, tabIndex: -1, onFocus: (it) => {
          if (it.target !== _r.current)
            return Le == null ? void 0 : Le([ke.sourceIndex, -1]);
        }, key: ke.sourceIndex }, ke.title)))
      ),
      p.createElement("tbody", { role: "rowgroup" }, Ie.map((ke) => p.createElement("tr", { role: "row", "aria-selected": S.rows.hasIndex(ke), key: ke, "aria-rowindex": ke + 2 }, q.map((it) => {
        const Fe = it.sourceIndex, Xe = kn(Fe, ke), Rt = de === Fe && le === ke, ze = ne !== void 0 && Fe >= ne.x && Fe < ne.x + ne.width && ke >= ne.y && ke < ne.y + ne.height, xt = `glide-cell-${Fe}-${ke}`, cn = [Fe, ke], wt = g(cn, !0);
        return p.createElement("td", { key: Xe, role: "gridcell", "aria-colindex": Fe + 1 + Q, "aria-selected": ze, "aria-readonly": $r(wt) || !pi(wt), id: xt, "data-testid": xt, onClick: () => {
          const Jt = N == null ? void 0 : N.current;
          if (Jt != null)
            return re == null ? void 0 : re({
              bounds: pt(Jt, Fe, ke),
              cancel: () => {
              },
              preventDefault: () => {
              },
              stopPropagation: () => {
              },
              ctrlKey: !1,
              key: "Enter",
              keyCode: 13,
              metaKey: !1,
              shiftKey: !1,
              altKey: !1,
              rawEvent: void 0,
              location: cn
            });
        }, onFocusCapture: (Jt) => {
          var et, _t;
          if (!(Jt.target === _r.current || ((et = Yn.current) == null ? void 0 : et[0]) === Fe && ((_t = Yn.current) == null ? void 0 : _t[1]) === ke))
            return Yn.current = cn, Le == null ? void 0 : Le(cn);
        }, ref: Rt ? Vr : void 0, tabIndex: -1 }, Cb(wt, We));
      }))))
    );
  }, [
    n,
    ut,
    Ve,
    H,
    De,
    d,
    a,
    i,
    S,
    Vr,
    g,
    N,
    re,
    pt,
    Le
  ], 200), mn = M === 0 || !T ? 0 : Ve > M ? 1 : Cn(-De / 100, 0, 1), Uo = -a * 32 + Mt, Tr = L ? Cn(-Uo / 100, 0, 1) : 0, Xo = p.useMemo(() => {
    if (!mn && !Tr)
      return null;
    const q = {
      position: "absolute",
      top: 0,
      left: qt,
      width: n - qt,
      height: r,
      opacity: mn,
      pointerEvents: "none",
      transition: Ke ? void 0 : "opacity 0.2s",
      boxShadow: "inset 13px 0 10px -13px rgba(0, 0, 0, 0.2)"
    }, Q = {
      position: "absolute",
      top: hn,
      left: 0,
      width: n,
      height: r,
      opacity: Tr,
      pointerEvents: "none",
      transition: ue ? void 0 : "opacity 0.2s",
      boxShadow: "inset 0 13px 10px -13px rgba(0, 0, 0, 0.2)"
    };
    return p.createElement(
      p.Fragment,
      null,
      mn > 0 && p.createElement("div", { id: "shadow-x", style: q }),
      Tr > 0 && p.createElement("div", { id: "shadow-y", style: Q })
    );
  }, [mn, Tr, qt, n, Ke, hn, r, ue]), Yo = p.useMemo(() => ({
    position: "absolute",
    top: 0,
    left: 0
  }), []);
  return p.createElement(
    p.Fragment,
    null,
    p.createElement("canvas", { "data-testid": "data-grid-canvas", tabIndex: 0, onKeyDown: bt, onKeyUp: ir, onFocus: y, onBlur: C, ref: Wo, style: xr }, Yt),
    p.createElement("canvas", { ref: gt, style: Yo }),
    Xo
  );
}, xb = p.memo(p.forwardRef(kb));
function gi(e, t, n, r) {
  return Cn(Math.round(t - (e.growOffset ?? 0)), Math.ceil(n), Math.floor(r));
}
const Rb = (e) => {
  const [t, n] = p.useState(), [r, i] = p.useState(), [o, s] = p.useState(), [a, l] = p.useState(), [c, u] = p.useState(!1), [h, d] = p.useState(), [g, f] = p.useState(), [v, R] = p.useState(), [I, y] = p.useState(!1), [C, A] = p.useState(), { onHeaderMenuClick: S, getCellContent: M, onColumnMoved: P, onColumnResize: E, onColumnResizeStart: T, onColumnResizeEnd: L, gridRef: x, maxColumnWidth: b, minColumnWidth: k, onRowMoved: _, lockColumns: w, onColumnProposeMove: z, onMouseDown: H, onMouseUp: j, onItemHovered: re, onDragStart: te, canvasRef: O } = e, N = (E ?? L ?? T) !== void 0, { columns: J, selection: oe } = e, $ = oe.columns, ce = p.useCallback((Se) => {
    const [ve, Oe] = Se.location;
    o !== void 0 && a !== ve && ve >= w ? (u(!0), l(ve)) : g !== void 0 && Oe !== void 0 ? (y(!0), R(Math.max(0, Oe))) : r === void 0 && !c && !I && (re == null || re(Se));
  }, [o, g, a, re, w, r, c, I]), se = P !== void 0, ie = p.useCallback((Se) => {
    var ve;
    if (Se.button === 0) {
      const [Oe, Le] = Se.location;
      if (Se.kind === "out-of-bounds" && Se.isEdge && N) {
        const qe = (ve = x == null ? void 0 : x.current) == null ? void 0 : ve.getBounds(J.length - 1, -1);
        qe !== void 0 && (n(qe.x), i(J.length - 1));
      } else if (Se.kind === "header" && Oe >= w) {
        const qe = O == null ? void 0 : O.current;
        if (Se.isEdge && N && qe) {
          n(Se.bounds.x), i(Oe);
          const nt = qe.getBoundingClientRect().width / qe.offsetWidth, Ge = Se.bounds.width / nt;
          T == null || T(J[Oe], Ge, Oe, Ge + (J[Oe].growOffset ?? 0));
        } else Se.kind === "header" && se && (d(Se.bounds.x), s(Oe));
      } else Se.kind === "cell" && w > 0 && Oe === 0 && Le !== void 0 && _ !== void 0 && (A(Se.bounds.y), f(Le));
    }
    H == null || H(Se);
  }, [H, N, w, _, x, J, se, T, O]), pe = p.useCallback((Se, ve) => {
    c || I || S == null || S(Se, ve);
  }, [c, I, S]), we = p.useRef(-1), Ce = p.useCallback(() => {
    we.current = -1, f(void 0), R(void 0), A(void 0), y(!1), s(void 0), l(void 0), d(void 0), u(!1), i(void 0), n(void 0);
  }, []), Be = p.useCallback((Se, ve) => {
    if (Se.button === 0) {
      if (r !== void 0) {
        if (($ == null ? void 0 : $.hasIndex(r)) === !0)
          for (const Le of $) {
            if (Le === r)
              continue;
            const qe = J[Le], Me = gi(qe, we.current, k, b);
            E == null || E(qe, Me, Le, Me + (qe.growOffset ?? 0));
          }
        const Oe = gi(J[r], we.current, k, b);
        if (L == null || L(J[r], Oe, r, Oe + (J[r].growOffset ?? 0)), $.hasIndex(r))
          for (const Le of $) {
            if (Le === r)
              continue;
            const qe = J[Le], Me = gi(qe, we.current, k, b);
            L == null || L(qe, Me, Le, Me + (qe.growOffset ?? 0));
          }
      }
      Ce(), o !== void 0 && a !== void 0 && (P == null || P(o, a)), g !== void 0 && v !== void 0 && (_ == null || _(g, v));
    }
    j == null || j(Se, ve);
  }, [
    j,
    r,
    o,
    a,
    g,
    v,
    $,
    L,
    J,
    k,
    b,
    E,
    P,
    _,
    Ce
  ]), V = p.useMemo(() => {
    if (!(o === void 0 || a === void 0) && o !== a && (z == null ? void 0 : z(o, a)) !== !1)
      return {
        src: o,
        dest: a
      };
  }, [o, a, z]), Ee = p.useCallback((Se) => {
    const ve = O == null ? void 0 : O.current;
    if (o !== void 0 && h !== void 0)
      Math.abs(Se.clientX - h) > 20 && u(!0);
    else if (g !== void 0 && C !== void 0)
      Math.abs(Se.clientY - C) > 20 && y(!0);
    else if (r !== void 0 && t !== void 0 && ve) {
      const Le = ve.getBoundingClientRect().width / ve.offsetWidth, qe = (Se.clientX - t) / Le, Me = J[r], nt = gi(Me, qe, k, b);
      if (E == null || E(Me, nt, r, nt + (Me.growOffset ?? 0)), we.current = qe, ($ == null ? void 0 : $.first()) === r)
        for (const Ge of $) {
          if (Ge === r)
            continue;
          const Ke = J[Ge], ue = gi(Ke, we.current, k, b);
          E == null || E(Ke, ue, Ge, ue + (Ke.growOffset ?? 0));
        }
    }
  }, [
    o,
    h,
    g,
    C,
    r,
    t,
    J,
    k,
    b,
    E,
    $,
    O
  ]), Pe = p.useCallback((Se, ve) => {
    if (g === void 0 || v === void 0)
      return M(Se, ve);
    let [Oe, Le] = Se;
    return Le === v ? Le = g : (Le > v && (Le -= 1), Le >= g && (Le += 1)), M([Oe, Le], ve);
  }, [g, v, M]), dt = p.useCallback((Se) => {
    te == null || te(Se), Se.defaultPrevented() || Ce();
  }, [Ce, te]);
  return p.createElement(xb, { accessibilityHeight: e.accessibilityHeight, canvasRef: e.canvasRef, cellXOffset: e.cellXOffset, cellYOffset: e.cellYOffset, columns: e.columns, disabledRows: e.disabledRows, drawFocusRing: e.drawFocusRing, drawHeader: e.drawHeader, drawCell: e.drawCell, enableGroups: e.enableGroups, eventTargetRef: e.eventTargetRef, experimental: e.experimental, fillHandle: e.fillHandle, firstColAccessible: e.firstColAccessible, fixedShadowX: e.fixedShadowX, fixedShadowY: e.fixedShadowY, freezeColumns: e.freezeColumns, getCellRenderer: e.getCellRenderer, getGroupDetails: e.getGroupDetails, getRowThemeOverride: e.getRowThemeOverride, groupHeaderHeight: e.groupHeaderHeight, headerHeight: e.headerHeight, headerIcons: e.headerIcons, height: e.height, highlightRegions: e.highlightRegions, imageWindowLoader: e.imageWindowLoader, resizeColumn: r, isDraggable: e.isDraggable, isFilling: e.isFilling, isFocused: e.isFocused, onCanvasBlur: e.onCanvasBlur, onCanvasFocused: e.onCanvasFocused, onCellFocused: e.onCellFocused, onContextMenu: e.onContextMenu, onDragEnd: e.onDragEnd, onDragLeave: e.onDragLeave, onDragOverCell: e.onDragOverCell, onDrop: e.onDrop, onKeyDown: e.onKeyDown, onKeyUp: e.onKeyUp, onMouseMove: e.onMouseMove, prelightCells: e.prelightCells, rowHeight: e.rowHeight, rows: e.rows, selection: e.selection, smoothScrollX: e.smoothScrollX, smoothScrollY: e.smoothScrollY, theme: e.theme, freezeTrailingRows: e.freezeTrailingRows, hasAppendRow: e.hasAppendRow, translateX: e.translateX, translateY: e.translateY, verticalBorder: e.verticalBorder, width: e.width, getCellContent: Pe, isResizing: r !== void 0, onHeaderMenuClick: pe, isDragging: c, onItemHovered: ce, onDragStart: dt, onMouseDown: ie, allowResize: N, onMouseUp: Be, dragAndDropState: V, onMouseMoveRaw: Ee, ref: x });
};
function _b(e) {
  const t = qr(null), [n, r] = po({
    width: e == null ? void 0 : e[0],
    height: e == null ? void 0 : e[1]
  });
  return f0(() => {
    const i = (s) => {
      for (const a of s) {
        const { width: l, height: c } = a && a.contentRect || {};
        r((u) => u.width === l && u.height === c ? u : { width: l, height: c });
      }
    }, o = new window.ResizeObserver(i);
    return t.current && o.observe(t.current, void 0), () => {
      o.disconnect();
    };
  }, [t.current]), { ref: t, ...n };
}
const Tb = (e, t, n) => {
  const r = qr(null), i = qr(null), o = qr(null), s = qr(0), a = qr(t);
  a.current = t;
  const l = n.current;
  mo(() => {
    const c = () => {
      var d, g;
      if (i.current === !1 && l !== null) {
        const f = [l.scrollLeft, l.scrollTop];
        if (((d = o.current) == null ? void 0 : d[0]) === f[0] && ((g = o.current) == null ? void 0 : g[1]) === f[1])
          if (s.current > 10) {
            o.current = null, i.current = null;
            return;
          } else
            s.current++;
        else
          s.current = 0, a.current(f[0], f[1]), o.current = f;
        r.current = window.setTimeout(c, 8.333333333333334);
      }
    }, u = () => {
      i.current = !0, o.current = null, r.current !== null && (window.clearTimeout(r.current), r.current = null);
    }, h = (d) => {
      d.touches.length === 0 && (i.current = !1, s.current = 0, r.current = window.setTimeout(c, 8.333333333333334));
    };
    if (e && l !== null) {
      const d = l;
      return d.addEventListener("touchstart", u), d.addEventListener("touchend", h), () => {
        d.removeEventListener("touchstart", u), d.removeEventListener("touchend", h), r.current !== null && window.clearTimeout(r.current);
      };
    }
  }, [e, l]);
}, Eb = () => (e) => e.isSafari ? "scroll" : "auto", Mb = /* @__PURE__ */ an("div")({
  name: "ScrollRegionStyle",
  class: "gdg-s1dgczr6",
  propsAsIs: !1,
  vars: {
    "s1dgczr6-0": [Eb()]
  }
});
function Ib(e) {
  const [t, n] = p.useState(!1), r = typeof window > "u" ? null : window, i = p.useRef(0);
  return Ht("touchstart", p.useCallback(() => {
    window.clearTimeout(i.current), n(!0);
  }, []), r, !0, !1), Ht("touchend", p.useCallback((o) => {
    o.touches.length === 0 && (i.current = window.setTimeout(() => n(!1), e));
  }, [e]), r, !0, !1), t;
}
const Ab = (e) => {
  var J, oe;
  const {
    children: t,
    clientHeight: n,
    scrollHeight: r,
    scrollWidth: i,
    update: o,
    draggable: s,
    className: a,
    preventDiagonalScrolling: l = !1,
    paddingBottom: c = 0,
    paddingRight: u = 0,
    rightElement: h,
    rightElementProps: d,
    kineticScrollPerfHack: g = !1,
    scrollRef: f,
    initialSize: v
  } = e, R = [], I = (d == null ? void 0 : d.sticky) ?? !1, y = (d == null ? void 0 : d.fill) ?? !1, C = p.useRef(0), A = p.useRef(0), S = p.useRef(null), M = typeof window > "u" ? 1 : window.devicePixelRatio, P = p.useRef({
    scrollLeft: 0,
    scrollTop: 0,
    lockDirection: void 0
  }), E = p.useRef(null), T = Ib(200), [L, x] = p.useState(!0), b = p.useRef(0);
  p.useLayoutEffect(() => {
    if (!L || T || P.current.lockDirection === void 0) return;
    const $ = S.current;
    if ($ === null) return;
    const [ce, se] = P.current.lockDirection;
    ce !== void 0 ? $.scrollLeft = ce : se !== void 0 && ($.scrollTop = se), P.current.lockDirection = void 0;
  }, [T, L]);
  const k = p.useCallback(($, ce) => {
    var ve;
    const se = S.current;
    if (se === null) return;
    ce = ce ?? se.scrollTop, $ = $ ?? se.scrollLeft;
    const ie = P.current.scrollTop, pe = P.current.scrollLeft, we = $ - pe, Ce = ce - ie;
    T && we !== 0 && Ce !== 0 && (Math.abs(we) > 3 || Math.abs(Ce) > 3) && l && P.current.lockDirection === void 0 && (P.current.lockDirection = Math.abs(we) < Math.abs(Ce) ? [pe, void 0] : [void 0, ie]);
    const Be = P.current.lockDirection;
    $ = (Be == null ? void 0 : Be[0]) ?? $, ce = (Be == null ? void 0 : Be[1]) ?? ce, P.current.scrollLeft = $, P.current.scrollTop = ce;
    const V = se.clientWidth, Ee = se.clientHeight, Pe = ce, dt = A.current - Pe, Se = se.scrollHeight - Ee;
    if (A.current = Pe, Se > 0 && (Math.abs(dt) > 2e3 || Pe === 0 || Pe === Se) && r > se.scrollHeight + 5) {
      const Oe = Pe / Se, Le = (r - Ee) * Oe;
      C.current = Le - Pe;
    }
    Be !== void 0 && (window.clearTimeout(b.current), x(!1), b.current = window.setTimeout(() => x(!0), 200)), o({
      x: $,
      y: Pe + C.current,
      width: V - u,
      height: Ee - c,
      paddingRight: ((ve = E.current) == null ? void 0 : ve.clientWidth) ?? 0
    });
  }, [c, u, r, o, l, T]);
  Tb(g && ko.value, k, S);
  const _ = p.useRef(k);
  _.current = k;
  const w = p.useRef(), z = p.useRef(!1);
  p.useLayoutEffect(() => {
    z.current ? k() : z.current = !0;
  }, [k, c, u]);
  const H = p.useCallback(($) => {
    S.current = $, f !== void 0 && (f.current = $);
  }, [f]);
  let j = 0, re = 0;
  for (R.push(p.createElement("div", {
    key: j++,
    style: {
      width: i,
      height: 0
    }
  })); re < r; ) {
    const $ = Math.min(5e6, r - re);
    R.push(p.createElement("div", {
      key: j++,
      style: {
        width: 0,
        height: $
      }
    })), re += $;
  }
  const {
    ref: te,
    width: O,
    height: N
  } = _b(v);
  return typeof window < "u" && (((J = w.current) == null ? void 0 : J.height) !== N || ((oe = w.current) == null ? void 0 : oe.width) !== O) && (window.setTimeout(() => _.current(), 0), w.current = {
    width: O,
    height: N
  }), (O ?? 0) === 0 || (N ?? 0) === 0 ? p.createElement("div", {
    ref: te
  }) : p.createElement("div", {
    ref: te
  }, p.createElement(Mb, {
    isSafari: ko.value
  }, p.createElement("div", {
    className: "dvn-underlay"
  }, t), p.createElement("div", {
    ref: H,
    style: w.current,
    draggable: s,
    onDragStart: ($) => {
      s || ($.stopPropagation(), $.preventDefault());
    },
    className: "dvn-scroller " + (a ?? ""),
    onScroll: () => k()
  }, p.createElement("div", {
    className: "dvn-scroll-inner" + (h === void 0 ? " dvn-hidden" : "")
  }, p.createElement("div", {
    className: "dvn-stack"
  }, R), h !== void 0 && p.createElement(p.Fragment, null, !y && p.createElement("div", {
    className: "dvn-spacer"
  }), p.createElement("div", {
    ref: E,
    style: {
      height: N,
      maxHeight: n - Math.ceil(M % 1),
      position: "sticky",
      top: 0,
      paddingLeft: 1,
      marginBottom: -40,
      marginRight: u,
      flexGrow: y ? 1 : void 0,
      right: I ? u ?? 0 : void 0,
      pointerEvents: "auto"
    }
  }, h))))));
}, Pb = (e) => {
  const { columns: t, rows: n, rowHeight: r, headerHeight: i, groupHeaderHeight: o, enableGroups: s, freezeColumns: a, experimental: l, nonGrowWidth: c, clientSize: u, className: h, onVisibleRegionChanged: d, scrollRef: g, preventDiagonalScrolling: f, rightElement: v, rightElementProps: R, overscrollX: I, overscrollY: y, initialSize: C, smoothScrollX: A = !1, smoothScrollY: S = !1, isDraggable: M } = e, { paddingRight: P, paddingBottom: E } = l ?? {}, [T, L] = u, x = p.useRef(), b = p.useRef(), k = p.useRef(), _ = p.useRef(), w = c + Math.max(0, I ?? 0);
  let z = s ? i + o : i;
  if (typeof r == "number")
    z += n * r;
  else
    for (let te = 0; te < n; te++)
      z += r(te);
  y !== void 0 && (z += y);
  const H = p.useRef(), j = p.useCallback(() => {
    var Ce, Be;
    if (H.current === void 0)
      return;
    const te = { ...H.current };
    let O = 0, N = te.x < 0 ? -te.x : 0, J = 0, oe = 0;
    te.x = te.x < 0 ? 0 : te.x;
    let $ = 0;
    for (let V = 0; V < a; V++)
      $ += t[V].width;
    for (const V of t) {
      const Ee = O - $;
      if (te.x >= Ee + V.width)
        O += V.width, oe++, J++;
      else if (te.x > Ee)
        O += V.width, A ? N += Ee - te.x : oe++, J++;
      else if (te.x + te.width > Ee)
        O += V.width, J++;
      else
        break;
    }
    let ce = 0, se = 0, ie = 0;
    if (typeof r == "number")
      S ? (se = Math.floor(te.y / r), ce = se * r - te.y) : se = Math.ceil(te.y / r), ie = Math.ceil(te.height / r) + se, ce < 0 && ie++;
    else {
      let V = 0;
      for (let Ee = 0; Ee < n; Ee++) {
        const Pe = r(Ee), dt = V + (S ? 0 : Pe / 2);
        if (te.y >= V + Pe)
          V += Pe, se++, ie++;
        else if (te.y > dt)
          V += Pe, S ? ce += dt - te.y : se++, ie++;
        else if (te.y + te.height > Pe / 2 + V)
          V += Pe, ie++;
        else
          break;
      }
    }
    const pe = {
      x: oe,
      y: se,
      width: J - oe,
      height: ie - se
    }, we = x.current;
    (we === void 0 || we.y !== pe.y || we.x !== pe.x || we.height !== pe.height || we.width !== pe.width || b.current !== N || k.current !== ce || te.width !== ((Ce = _.current) == null ? void 0 : Ce[0]) || te.height !== ((Be = _.current) == null ? void 0 : Be[1])) && (d == null || d({
      x: oe,
      y: se,
      width: J - oe,
      height: ie - se
    }, te.width, te.height, te.paddingRight ?? 0, N, ce), x.current = pe, b.current = N, k.current = ce, _.current = [te.width, te.height]);
  }, [t, r, n, d, a, A, S]), re = p.useCallback((te) => {
    H.current = te, j();
  }, [j]);
  return p.useEffect(() => {
    j();
  }, [j]), p.createElement(
    Ab,
    { scrollRef: g, className: h, kineticScrollPerfHack: l == null ? void 0 : l.kineticScrollPerfHack, preventDiagonalScrolling: f, draggable: M === !0 || typeof M == "string", scrollWidth: w + (P ?? 0), scrollHeight: z + (E ?? 0), clientHeight: L, rightElement: v, paddingBottom: E, paddingRight: P, rightElementProps: R, update: re, initialSize: C },
    p.createElement(Rb, { eventTargetRef: g, width: T, height: L, accessibilityHeight: e.accessibilityHeight, canvasRef: e.canvasRef, cellXOffset: e.cellXOffset, cellYOffset: e.cellYOffset, columns: e.columns, disabledRows: e.disabledRows, enableGroups: e.enableGroups, fillHandle: e.fillHandle, firstColAccessible: e.firstColAccessible, fixedShadowX: e.fixedShadowX, fixedShadowY: e.fixedShadowY, freezeColumns: e.freezeColumns, getCellContent: e.getCellContent, getCellRenderer: e.getCellRenderer, getGroupDetails: e.getGroupDetails, getRowThemeOverride: e.getRowThemeOverride, groupHeaderHeight: e.groupHeaderHeight, headerHeight: e.headerHeight, highlightRegions: e.highlightRegions, imageWindowLoader: e.imageWindowLoader, isFilling: e.isFilling, isFocused: e.isFocused, lockColumns: e.lockColumns, maxColumnWidth: e.maxColumnWidth, minColumnWidth: e.minColumnWidth, onHeaderMenuClick: e.onHeaderMenuClick, onMouseMove: e.onMouseMove, prelightCells: e.prelightCells, rowHeight: e.rowHeight, rows: e.rows, selection: e.selection, theme: e.theme, freezeTrailingRows: e.freezeTrailingRows, hasAppendRow: e.hasAppendRow, translateX: e.translateX, translateY: e.translateY, onColumnProposeMove: e.onColumnProposeMove, verticalBorder: e.verticalBorder, drawFocusRing: e.drawFocusRing, drawHeader: e.drawHeader, drawCell: e.drawCell, experimental: e.experimental, gridRef: e.gridRef, headerIcons: e.headerIcons, isDraggable: e.isDraggable, onCanvasBlur: e.onCanvasBlur, onCanvasFocused: e.onCanvasFocused, onCellFocused: e.onCellFocused, onColumnMoved: e.onColumnMoved, onColumnResize: e.onColumnResize, onColumnResizeEnd: e.onColumnResizeEnd, onColumnResizeStart: e.onColumnResizeStart, onContextMenu: e.onContextMenu, onDragEnd: e.onDragEnd, onDragLeave: e.onDragLeave, onDragOverCell: e.onDragOverCell, onDragStart: e.onDragStart, onDrop: e.onDrop, onItemHovered: e.onItemHovered, onKeyDown: e.onKeyDown, onKeyUp: e.onKeyUp, onMouseDown: e.onMouseDown, onMouseUp: e.onMouseUp, onRowMoved: e.onRowMoved, smoothScrollX: e.smoothScrollX, smoothScrollY: e.smoothScrollY })
  );
}, Ob = /* @__PURE__ */ an("div")({
  name: "SearchWrapper",
  class: "gdg-seveqep",
  propsAsIs: !1
}), Db = p.createElement(
  "svg",
  { className: "button-icon", viewBox: "0 0 512 512" },
  p.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "48", d: "M112 244l144-144 144 144M256 120v292" })
), Lb = p.createElement(
  "svg",
  { className: "button-icon", viewBox: "0 0 512 512" },
  p.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "48", d: "M112 268l144 144 144-144M256 392V100" })
), Fb = p.createElement(
  "svg",
  { className: "button-icon", viewBox: "0 0 512 512" },
  p.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M368 368L144 144M368 144L144 368" })
), qb = 10, Hb = (e) => {
  const { canvasRef: t, cellYOffset: n, rows: r, columns: i, searchInputRef: o, searchValue: s, searchResults: a, onSearchValueChange: l, getCellsForSelection: c, onSearchResultsChanged: u, showSearch: h = !1, onSearchClose: d } = e, [g] = p.useState(() => "search-box-" + Math.round(Math.random() * 1e3)), [f, v] = p.useState(""), R = s ?? f, I = p.useCallback((O) => {
    v(O), l == null || l(O);
  }, [l]), [y, C] = p.useState(), A = p.useRef(y);
  A.current = y, p.useEffect(() => {
    a !== void 0 && (a.length > 0 ? C((O) => ({
      rowsSearched: r,
      results: a.length,
      selectedIndex: (O == null ? void 0 : O.selectedIndex) ?? -1
    })) : C(void 0));
  }, [r, a]);
  const S = p.useRef();
  S.current === void 0 && (S.current = new AbortController());
  const M = p.useRef(), [P, E] = p.useState([]), T = a ?? P, L = p.useCallback(() => {
    M.current !== void 0 && (window.cancelAnimationFrame(M.current), M.current = void 0, S.current.abort());
  }, []), x = p.useRef(n);
  x.current = n;
  const b = p.useCallback((O) => {
    const N = new RegExp(O.replace(/([$()*+.?[\\\]^{|}-])/g, "\\$1"), "i");
    let J = x.current, oe = Math.min(10, r), $ = 0;
    C(void 0), E([]);
    const ce = [], se = async () => {
      var Se;
      if (c === void 0)
        return;
      const ie = performance.now(), pe = r - $;
      let we = c({
        x: 0,
        y: J,
        width: i.length,
        height: Math.min(oe, pe, r - J)
      }, S.current.signal);
      typeof we == "function" && (we = await we());
      let Ce = !1;
      for (const [ve, Oe] of we.entries())
        for (const [Le, qe] of Oe.entries()) {
          let Me;
          switch (qe.kind) {
            case ae.Text:
            case ae.Number:
              Me = qe.displayData;
              break;
            case ae.Uri:
            case ae.Markdown:
              Me = qe.data;
              break;
            case ae.Boolean:
              Me = typeof qe.data == "boolean" ? qe.data.toString() : void 0;
              break;
            case ae.Image:
            case ae.Bubble:
              Me = qe.data.join("🐳");
              break;
            case ae.Custom:
              Me = qe.copyData;
              break;
          }
          Me !== void 0 && N.test(Me) && (ce.push([Le, ve + J]), Ce = !0);
        }
      const Be = performance.now();
      Ce && E([...ce]), $ += we.length, rn($ <= r);
      const V = ((Se = A.current) == null ? void 0 : Se.selectedIndex) ?? -1;
      C({
        results: ce.length,
        rowsSearched: $,
        selectedIndex: V
      }), u == null || u(ce, V), J + oe >= r ? J = 0 : J += oe;
      const Ee = Be - ie, Pe = Math.max(Ee, 1), dt = qb / Pe;
      oe = Math.ceil(oe * dt), $ < r && ce.length < 1e3 && (M.current = window.requestAnimationFrame(se));
    };
    L(), M.current = window.requestAnimationFrame(se);
  }, [L, i.length, c, u, r]), k = p.useCallback(() => {
    var O;
    d == null || d(), C(void 0), E([]), u == null || u([], -1), L(), (O = t == null ? void 0 : t.current) == null || O.focus();
  }, [L, t, d, u]), _ = p.useCallback((O) => {
    I(O.target.value), a === void 0 && (O.target.value === "" ? (C(void 0), E([]), L()) : b(O.target.value));
  }, [b, L, I, a]);
  p.useEffect(() => {
    h && o.current !== null && (I(""), o.current.focus({ preventScroll: !0 }));
  }, [h, o, I]);
  const w = p.useCallback((O) => {
    var J;
    if ((J = O == null ? void 0 : O.stopPropagation) == null || J.call(O), y === void 0)
      return;
    const N = (y.selectedIndex + 1) % y.results;
    C({
      ...y,
      selectedIndex: N
    }), u == null || u(T, N);
  }, [y, u, T]), z = p.useCallback((O) => {
    var J;
    if ((J = O == null ? void 0 : O.stopPropagation) == null || J.call(O), y === void 0)
      return;
    let N = (y.selectedIndex - 1) % y.results;
    N < 0 && (N += y.results), C({
      ...y,
      selectedIndex: N
    }), u == null || u(T, N);
  }, [u, T, y]), H = p.useCallback((O) => {
    (O.ctrlKey || O.metaKey) && O.nativeEvent.code === "KeyF" || O.key === "Escape" ? (k(), O.stopPropagation(), O.preventDefault()) : O.key === "Enter" && (O.shiftKey ? z() : w());
  }, [k, w, z]);
  p.useEffect(() => () => {
    L();
  }, [L]);
  const [j, re] = p.useState(!1);
  p.useEffect(() => {
    if (h)
      re(!0);
    else {
      const O = setTimeout(() => re(!1), 150);
      return () => clearTimeout(O);
    }
  }, [h]);
  const te = p.useMemo(() => {
    if (!h && !j)
      return null;
    let O;
    y !== void 0 && (O = y.results >= 1e3 ? "over 1000" : `${y.results} result${y.results !== 1 ? "s" : ""}`, y.selectedIndex >= 0 && (O = `${y.selectedIndex + 1} of ${O}`));
    const N = ($) => {
      $.stopPropagation();
    }, oe = {
      width: `${Math.floor(((y == null ? void 0 : y.rowsSearched) ?? 0) / r * 100)}%`
    };
    return p.createElement(
      Ob,
      { className: h ? "" : "out", onMouseDown: N, onMouseMove: N, onMouseUp: N, onClick: N },
      p.createElement(
        "div",
        { className: "gdg-search-bar-inner" },
        p.createElement("input", { id: g, "aria-hidden": !h, "data-testid": "search-input", ref: o, onChange: _, value: R, tabIndex: h ? void 0 : -1, onKeyDownCapture: H }),
        p.createElement("button", { "aria-label": "Previous Result", "aria-hidden": !h, tabIndex: h ? void 0 : -1, onClick: z, disabled: ((y == null ? void 0 : y.results) ?? 0) === 0 }, Db),
        p.createElement("button", { "aria-label": "Next Result", "aria-hidden": !h, tabIndex: h ? void 0 : -1, onClick: w, disabled: ((y == null ? void 0 : y.results) ?? 0) === 0 }, Lb),
        d !== void 0 && p.createElement("button", { "aria-label": "Close Search", "aria-hidden": !h, "data-testid": "search-close-button", tabIndex: h ? void 0 : -1, onClick: k }, Fb)
      ),
      y !== void 0 ? p.createElement(
        p.Fragment,
        null,
        p.createElement(
          "div",
          { className: "gdg-search-status" },
          p.createElement("div", { "data-testid": "search-result-area" }, O)
        ),
        p.createElement("div", { className: "gdg-search-progress", style: oe })
      ) : p.createElement(
        "div",
        { className: "gdg-search-status" },
        p.createElement("label", { htmlFor: g }, "Type to search")
      )
    );
  }, [
    h,
    j,
    y,
    r,
    g,
    o,
    _,
    R,
    H,
    z,
    w,
    d,
    k
  ]);
  return p.createElement(
    p.Fragment,
    null,
    p.createElement(Pb, { prelightCells: T, accessibilityHeight: e.accessibilityHeight, canvasRef: e.canvasRef, cellXOffset: e.cellXOffset, cellYOffset: e.cellYOffset, className: e.className, clientSize: e.clientSize, columns: e.columns, disabledRows: e.disabledRows, enableGroups: e.enableGroups, fillHandle: e.fillHandle, firstColAccessible: e.firstColAccessible, nonGrowWidth: e.nonGrowWidth, fixedShadowX: e.fixedShadowX, fixedShadowY: e.fixedShadowY, freezeColumns: e.freezeColumns, getCellContent: e.getCellContent, getCellRenderer: e.getCellRenderer, getGroupDetails: e.getGroupDetails, getRowThemeOverride: e.getRowThemeOverride, groupHeaderHeight: e.groupHeaderHeight, headerHeight: e.headerHeight, highlightRegions: e.highlightRegions, imageWindowLoader: e.imageWindowLoader, initialSize: e.initialSize, isFilling: e.isFilling, isFocused: e.isFocused, lockColumns: e.lockColumns, maxColumnWidth: e.maxColumnWidth, minColumnWidth: e.minColumnWidth, onHeaderMenuClick: e.onHeaderMenuClick, onMouseMove: e.onMouseMove, onVisibleRegionChanged: e.onVisibleRegionChanged, overscrollX: e.overscrollX, overscrollY: e.overscrollY, preventDiagonalScrolling: e.preventDiagonalScrolling, rightElement: e.rightElement, rightElementProps: e.rightElementProps, rowHeight: e.rowHeight, rows: e.rows, scrollRef: e.scrollRef, selection: e.selection, theme: e.theme, freezeTrailingRows: e.freezeTrailingRows, hasAppendRow: e.hasAppendRow, translateX: e.translateX, translateY: e.translateY, verticalBorder: e.verticalBorder, onColumnProposeMove: e.onColumnProposeMove, drawFocusRing: e.drawFocusRing, drawCell: e.drawCell, drawHeader: e.drawHeader, experimental: e.experimental, gridRef: e.gridRef, headerIcons: e.headerIcons, isDraggable: e.isDraggable, onCanvasBlur: e.onCanvasBlur, onCanvasFocused: e.onCanvasFocused, onCellFocused: e.onCellFocused, onColumnMoved: e.onColumnMoved, onColumnResize: e.onColumnResize, onColumnResizeEnd: e.onColumnResizeEnd, onColumnResizeStart: e.onColumnResizeStart, onContextMenu: e.onContextMenu, onDragEnd: e.onDragEnd, onDragLeave: e.onDragLeave, onDragOverCell: e.onDragOverCell, onDragStart: e.onDragStart, onDrop: e.onDrop, onItemHovered: e.onItemHovered, onKeyDown: e.onKeyDown, onKeyUp: e.onKeyUp, onMouseDown: e.onMouseDown, onMouseUp: e.onMouseUp, onRowMoved: e.onRowMoved, smoothScrollX: e.smoothScrollX, smoothScrollY: e.smoothScrollY }),
    te
  );
};
class zb extends p.PureComponent {
  constructor() {
    super(...arguments);
    be(this, "wrapperRef", p.createRef());
    be(this, "clickOutside", (n) => {
      if (!(this.props.isOutsideClick && !this.props.isOutsideClick(n)) && this.wrapperRef.current !== null && !this.wrapperRef.current.contains(n.target)) {
        let r = n.target;
        for (; r !== null; ) {
          if (r.classList.contains("click-outside-ignore"))
            return;
          r = r.parentElement;
        }
        this.props.onClickOutside();
      }
    });
  }
  componentDidMount() {
    document.addEventListener("touchend", this.clickOutside, !0), document.addEventListener("mousedown", this.clickOutside, !0), document.addEventListener("contextmenu", this.clickOutside, !0);
  }
  componentWillUnmount() {
    document.removeEventListener("touchend", this.clickOutside, !0), document.removeEventListener("mousedown", this.clickOutside, !0), document.removeEventListener("contextmenu", this.clickOutside, !0);
  }
  render() {
    const { onClickOutside: n, isOutsideClick: r, ...i } = this.props;
    return p.createElement("div", { ...i, ref: this.wrapperRef }, this.props.children);
  }
}
const $b = () => (e) => Math.max(16, e.targetHeight - 10), Nb = /* @__PURE__ */ an("input")({
  name: "RenameInput",
  class: "gdg-r17m35ur",
  propsAsIs: !1,
  vars: {
    "r17m35ur-0": [$b(), "px"]
  }
}), Bb = (e) => {
  const {
    bounds: t,
    group: n,
    onClose: r,
    canvasBounds: i,
    onFinish: o
  } = e, [s, a] = St.useState(n);
  return St.createElement(zb, {
    style: {
      position: "absolute",
      left: t.x - i.left + 1,
      top: t.y - i.top,
      width: t.width - 2,
      height: t.height
    },
    className: "gdg-c1tqibwd",
    onClickOutside: r
  }, St.createElement(Nb, {
    targetHeight: t.height,
    "data-testid": "group-rename-input",
    value: s,
    onBlur: r,
    onFocus: (l) => l.target.setSelectionRange(0, s.length),
    onChange: (l) => a(l.target.value),
    onKeyDown: (l) => {
      l.key === "Enter" ? o(s) : l.key === "Escape" && r();
    },
    autoFocus: !0
  }));
};
function Wb(e, t) {
  return e === void 0 ? !1 : e.length > 1 && e.startsWith("_") ? Number.parseInt(e.slice(1)) === t.keyCode : e.length === 1 && e >= "a" && e <= "z" ? e.toUpperCase().codePointAt(0) === t.keyCode : e === t.key;
}
function $e(e, t, n) {
  const r = Ap(e, t);
  return r && (n.didMatch = !0), r;
}
function Ap(e, t) {
  if (e.length === 0)
    return !1;
  if (e.includes("|")) {
    const l = e.split("|");
    for (const c of l)
      if (Ap(c, t))
        return !0;
    return !1;
  }
  let n = !1, r = !1, i = !1, o = !1;
  const s = e.split("+"), a = s.pop();
  if (!Wb(a, t))
    return !1;
  if (s[0] === "any")
    return !0;
  for (const l of s)
    switch (l) {
      case "ctrl":
        n = !0;
        break;
      case "shift":
        r = !0;
        break;
      case "alt":
        i = !0;
        break;
      case "meta":
        o = !0;
        break;
      case "primary":
        xo.value ? o = !0 : n = !0;
        break;
    }
  return t.altKey === i && t.ctrlKey === n && t.shiftKey === r && t.metaKey === o;
}
function jb(e, t, n, r, i, o) {
  const s = St.useCallback((c, u, h, d) => {
    var y;
    (o === "cell" || o === "multi-cell") && c !== void 0 && (c = {
      ...c,
      range: {
        x: c.cell[0],
        y: c.cell[1],
        width: 1,
        height: 1
      }
    });
    const g = n === "mixed" && (h || d === "drag"), f = r === "mixed" && g, v = i === "mixed" && g;
    let R = {
      current: c === void 0 ? void 0 : {
        ...c,
        rangeStack: d === "drag" ? ((y = e.current) == null ? void 0 : y.rangeStack) ?? [] : []
      },
      columns: f ? e.columns : rt.empty(),
      rows: v ? e.rows : rt.empty()
    };
    h && (o === "multi-rect" || o === "multi-cell") && R.current !== void 0 && e.current !== void 0 && (R = {
      ...R,
      current: {
        ...R.current,
        rangeStack: [...e.current.rangeStack, e.current.range]
      }
    }), t(R, u);
  }, [r, e, n, o, i, t]), a = St.useCallback((c, u, h) => {
    c = c ?? e.rows, u !== void 0 && (c = c.add(u));
    let d;
    if (i === "exclusive" && c.length > 0)
      d = {
        current: void 0,
        columns: rt.empty(),
        rows: c
      };
    else {
      const g = h && n === "mixed", f = h && r === "mixed";
      d = {
        current: g ? e.current : void 0,
        columns: f ? e.columns : rt.empty(),
        rows: c
      };
    }
    t(d, !1);
  }, [r, e, n, i, t]), l = St.useCallback((c, u, h) => {
    c = c ?? e.columns, u !== void 0 && (c = c.add(u));
    let d;
    if (r === "exclusive" && c.length > 0)
      d = {
        current: void 0,
        rows: rt.empty(),
        columns: c
      };
    else {
      const g = h && n === "mixed", f = h && i === "mixed";
      d = {
        current: g ? e.current : void 0,
        rows: f ? e.rows : rt.empty(),
        columns: c
      };
    }
    t(d, !1);
  }, [r, e, n, i, t]);
  return [s, a, l];
}
function Ub(e, t, n, r, i) {
  const o = p.useCallback((c) => {
    if (e === !0) {
      const u = [];
      for (let h = c.y; h < c.y + c.height; h++) {
        const d = [];
        for (let g = c.x; g < c.x + c.width; g++)
          g < 0 || h >= i ? d.push({
            kind: ae.Loading,
            allowOverlay: !1
          }) : d.push(t([g, h]));
        u.push(d);
      }
      return u;
    }
    return (e == null ? void 0 : e(c, r.signal)) ?? [];
  }, [r.signal, t, e, i]), s = e !== void 0 ? o : void 0, a = p.useCallback((c) => {
    if (s === void 0)
      return [];
    const u = {
      ...c,
      x: c.x - n
    };
    if (u.x < 0) {
      u.x = 0, u.width--;
      const h = s(u, r.signal);
      return typeof h == "function" ? async () => (
        // eslint-disable-next-line unicorn/no-await-expression-member
        (await h()).map((d) => [
          { kind: ae.Loading, allowOverlay: !1 },
          ...d
        ])
      ) : h.map((d) => [{ kind: ae.Loading, allowOverlay: !1 }, ...d]);
    }
    return s(u, r.signal);
  }, [r.signal, s, n]);
  return [e !== void 0 ? a : void 0, s];
}
function Xb(e) {
  if (e.copyData !== void 0)
    return {
      formatted: e.copyData,
      rawValue: e.copyData,
      format: "string"
    };
  switch (e.kind) {
    case ae.Boolean:
      return {
        formatted: e.data === !0 ? "TRUE" : e.data === !1 ? "FALSE" : e.data === Pc ? "INDETERMINATE" : "",
        rawValue: e.data,
        format: "boolean"
      };
    case ae.Custom:
      return {
        formatted: e.copyData,
        rawValue: e.copyData,
        format: "string"
      };
    case ae.Image:
    case ae.Bubble:
      return {
        formatted: e.data,
        rawValue: e.data,
        format: "string-array"
      };
    case ae.Drilldown:
      return {
        formatted: e.data.map((t) => t.text),
        rawValue: e.data.map((t) => t.text),
        format: "string-array"
      };
    case ae.Text:
      return {
        formatted: e.displayData ?? e.data,
        rawValue: e.data,
        format: "string"
      };
    case ae.Uri:
      return {
        formatted: e.displayData ?? e.data,
        rawValue: e.data,
        format: "url"
      };
    case ae.Markdown:
    case ae.RowID:
      return {
        formatted: e.data,
        rawValue: e.data,
        format: "string"
      };
    case ae.Number:
      return {
        formatted: e.displayData,
        rawValue: e.data,
        format: "number"
      };
    case ae.Loading:
      return {
        formatted: "#LOADING",
        rawValue: "",
        format: "string"
      };
    case ae.Protected:
      return {
        formatted: "************",
        rawValue: "",
        format: "string"
      };
    default:
      Ri();
  }
}
function Yb(e, t) {
  return e.map((r, i) => {
    const o = t[i];
    return r.map((s) => s.span !== void 0 && s.span[0] !== o ? {
      formatted: "",
      rawValue: "",
      format: "string"
    } : Xb(s));
  });
}
function ag(e, t) {
  return (t ? /[\t\n",]/ : /[\t\n"]/).test(e) && (e = `"${e.replace(/"/g, '""')}"`), e;
}
function Gb(e) {
  var n;
  const t = [];
  for (const r of e) {
    const i = [];
    for (const o of r)
      o.format === "url" ? i.push(((n = o.rawValue) == null ? void 0 : n.toString()) ?? "") : o.format === "string-array" ? i.push(o.formatted.map((s) => ag(s, !0)).join(",")) : i.push(ag(o.formatted, !1));
    t.push(i.join("	"));
  }
  return t.join(`
`);
}
function oc(e) {
  return e.replace(/\t/g, "    ").replace(/ {2,}/g, (t) => "<span> </span>".repeat(t.length));
}
function sg(e) {
  return '"' + e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '"';
}
function Kb(e) {
  return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
function Vb(e) {
  var n;
  const t = [];
  t.push('<style type="text/css"><!--br {mso-data-placement:same-cell;}--></style>', "<table><tbody>");
  for (const r of e) {
    t.push("<tr>");
    for (const i of r) {
      const o = `gdg-format="${i.format}"`;
      i.format === "url" ? t.push(`<td ${o}><a href="${i.rawValue}">${oc(i.formatted)}</a></td>`) : i.format === "string-array" ? t.push(`<td ${o}><ol>${i.formatted.map((s, a) => `<li gdg-raw-value=${sg(i.rawValue[a])}>` + oc(s) + "</li>").join("")}</ol></td>`) : t.push(`<td gdg-raw-value=${sg(((n = i.rawValue) == null ? void 0 : n.toString()) ?? "")} ${o}>${oc(i.formatted)}</td>`);
    }
    t.push("</tr>");
  }
  return t.push("</tbody></table>"), t.join("");
}
function Zb(e, t) {
  const n = Yb(e, t), r = Gb(n), i = Vb(n);
  return {
    textPlain: r,
    textHtml: i
  };
}
function lg(e) {
  var s;
  const t = document.createElement("html");
  t.innerHTML = e.replace(/&nbsp;/g, " ");
  const n = t.querySelector("table");
  if (n === null)
    return;
  const r = [n], i = [];
  let o;
  for (; r.length > 0; ) {
    const a = r.pop();
    if (a === void 0)
      break;
    if (a instanceof HTMLTableElement || a.nodeName === "TBODY")
      r.push(...[...a.children].reverse());
    else if (a instanceof HTMLTableRowElement)
      o !== void 0 && i.push(o), o = [], r.push(...[...a.children].reverse());
    else if (a instanceof HTMLTableCellElement) {
      const l = a.cloneNode(!0), u = l.children.length === 1 && l.children[0].nodeName === "P" ? l.children[0] : null, h = (u == null ? void 0 : u.children.length) === 1 && u.children[0].nodeName === "FONT", d = l.querySelectorAll("br");
      for (const v of d)
        v.replaceWith(`
`);
      const g = l.getAttribute("gdg-raw-value"), f = l.getAttribute("gdg-format") ?? "string";
      if (l.querySelector("a") !== null)
        o == null || o.push({
          // raw value is the href
          rawValue: ((s = l.querySelector("a")) == null ? void 0 : s.getAttribute("href")) ?? "",
          formatted: l.textContent ?? "",
          format: f
        });
      else if (l.querySelector("ol") !== null) {
        const v = l.querySelectorAll("li");
        o == null || o.push({
          rawValue: [...v].map((R) => R.getAttribute("gdg-raw-value") ?? ""),
          formatted: [...v].map((R) => R.textContent ?? ""),
          format: "string-array"
        });
      } else if (g !== null)
        o == null || o.push({
          rawValue: Kb(g),
          formatted: l.textContent ?? "",
          format: f
        });
      else {
        let v = l.textContent ?? "";
        h && (v = v.replace(/\n(?!\n)/g, "")), o == null || o.push({
          rawValue: v ?? "",
          formatted: v ?? "",
          format: f
        });
      }
    }
  }
  return o !== void 0 && i.push(o), i;
}
function Jb(e, t, n, r, i) {
  var a;
  const o = e;
  if (r === "allowPartial" || e.current === void 0 || t === void 0)
    return e;
  let s = !1;
  do {
    if ((e == null ? void 0 : e.current) === void 0)
      break;
    const l = (a = e.current) == null ? void 0 : a.range, c = [];
    if (l.width > 2) {
      const d = t({
        x: l.x,
        y: l.y,
        width: 1,
        height: l.height
      }, i.signal);
      if (typeof d == "function")
        return o;
      c.push(...d);
      const g = t({
        x: l.x + l.width - 1,
        y: l.y,
        width: 1,
        height: l.height
      }, i.signal);
      if (typeof g == "function")
        return o;
      c.push(...g);
    } else {
      const d = t({
        x: l.x,
        y: l.y,
        width: l.width,
        height: l.height
      }, i.signal);
      if (typeof d == "function")
        return o;
      c.push(...d);
    }
    let u = l.x - n, h = l.x + l.width - 1 - n;
    for (const d of c)
      for (const g of d)
        g.span !== void 0 && (u = Math.min(g.span[0], u), h = Math.max(g.span[1], h));
    u === l.x - n && h === l.x + l.width - 1 - n ? s = !0 : e = {
      current: {
        cell: e.current.cell ?? [0, 0],
        range: {
          x: u + n,
          y: l.y,
          width: h - u + 1,
          height: l.height
        },
        rangeStack: e.current.rangeStack
      },
      columns: e.columns,
      rows: e.rows
    };
  } while (!s);
  return e;
}
function cg(e) {
  return e.startsWith('"') && e.endsWith('"') && (e = e.slice(1, -1).replace(/""/g, '"')), e;
}
function Qb(e) {
  let t;
  (function(a) {
    a[a.None = 0] = "None", a[a.inString = 1] = "inString", a[a.inStringPostQuote = 2] = "inStringPostQuote";
  })(t || (t = {}));
  const n = [];
  let r = [], i = 0, o = t.None;
  e = e.replace(/\r\n/g, `
`);
  let s = 0;
  for (const a of e) {
    switch (o) {
      case t.None:
        a === "	" || a === `
` ? (r.push(e.slice(i, s)), i = s + 1, a === `
` && (n.push(r), r = [])) : a === '"' && (o = t.inString);
        break;
      case t.inString:
        a === '"' && (o = t.inStringPostQuote);
        break;
      case t.inStringPostQuote:
        a === '"' ? o = t.inString : ((a === "	" || a === `
`) && (r.push(cg(e.slice(i, s))), i = s + 1, a === `
` && (n.push(r), r = [])), o = t.None);
        break;
    }
    s++;
  }
  return i < e.length && r.push(cg(e.slice(i, e.length))), n.push(r), n.map((a) => a.map((l) => ({ rawValue: l, formatted: l, format: "string" })));
}
function ug(e, t, n) {
  var a;
  const r = Zb(e, t), i = (l) => {
    var c;
    (c = window.navigator.clipboard) == null || c.writeText(l);
  }, o = (l, c) => {
    var u;
    return ((u = window.navigator.clipboard) == null ? void 0 : u.write) === void 0 ? !1 : (window.navigator.clipboard.write([
      new ClipboardItem({
        // eslint-disable-next-line sonarjs/no-duplicate-string
        "text/plain": new Blob([l], { type: "text/plain" }),
        "text/html": new Blob([c], {
          type: "text/html"
        })
      })
    ]), !0);
  }, s = (l, c) => {
    var u, h;
    try {
      if (n === void 0 || n.clipboardData === null)
        throw new Error("No clipboard data");
      (u = n == null ? void 0 : n.clipboardData) == null || u.setData("text/plain", l), (h = n == null ? void 0 : n.clipboardData) == null || h.setData("text/html", c);
    } catch {
      o(l, c) || i(l);
    }
  };
  ((a = window.navigator.clipboard) == null ? void 0 : a.write) !== void 0 || (n == null ? void 0 : n.clipboardData) !== void 0 ? s(r.textPlain, r.textHtml) : i(r.textPlain), n == null || n.preventDefault();
}
function Pp(e) {
  return e !== !0;
}
function dg(e) {
  return typeof e == "string" ? e : `${e}px`;
}
const ew = () => (e) => e.innerWidth, tw = () => (e) => e.innerHeight, nw = /* @__PURE__ */ an("div")({
  name: "Wrapper",
  class: "gdg-wmyidgi",
  propsAsIs: !1,
  vars: {
    "wmyidgi-0": [ew()],
    "wmyidgi-1": [tw()]
  }
}), rw = (e) => {
  const {
    inWidth: t,
    inHeight: n,
    children: r,
    ...i
  } = e;
  return p.createElement(nw, {
    innerHeight: dg(n),
    innerWidth: dg(t),
    ...i
  }, r);
}, iw = 2, ow = 1300;
function aw(e, t, n) {
  const r = St.useRef(0), [i, o] = e ?? [0, 0];
  St.useEffect(() => {
    if (i === 0 && o === 0) {
      r.current = 0;
      return;
    }
    let s = !1, a = 0;
    const l = (c) => {
      var u;
      if (!s) {
        if (a === 0)
          a = c;
        else {
          const h = c - a;
          r.current = Math.min(1, r.current + h / ow);
          const d = r.current ** 1.618 * h * iw;
          (u = t.current) == null || u.scrollBy(i * d, o * d), a = c, n == null || n();
        }
        window.requestAnimationFrame(l);
      }
    };
    return window.requestAnimationFrame(l), () => {
      s = !0;
    };
  }, [t, i, o, n]);
}
function sw({ rowHeight: e, headerHeight: t, groupHeaderHeight: n, theme: r, overscrollX: i, overscrollY: o, scaleToRem: s, remSize: a }) {
  const [l, c, u, h, d, g] = St.useMemo(() => {
    if (!s || a === 16)
      return [e, t, n, r, i, o];
    const f = a / 16, v = e, R = ap();
    return [
      typeof v == "number" ? v * f : (I) => Math.ceil(v(I) * f),
      Math.ceil(t * f),
      Math.ceil(n * f),
      {
        ...r,
        headerIconSize: ((r == null ? void 0 : r.headerIconSize) ?? R.headerIconSize) * f,
        cellHorizontalPadding: ((r == null ? void 0 : r.cellHorizontalPadding) ?? R.cellHorizontalPadding) * f,
        cellVerticalPadding: ((r == null ? void 0 : r.cellVerticalPadding) ?? R.cellVerticalPadding) * f
      },
      Math.ceil((i ?? 0) * f),
      Math.ceil((o ?? 0) * f)
    ];
  }, [n, t, i, o, a, e, s, r]);
  return { rowHeight: l, headerHeight: c, groupHeaderHeight: u, theme: h, overscrollX: d, overscrollY: g };
}
const Zn = {
  downFill: !1,
  rightFill: !1,
  clear: !0,
  closeOverlay: !0,
  acceptOverlayDown: !0,
  acceptOverlayUp: !0,
  acceptOverlayLeft: !0,
  acceptOverlayRight: !0,
  copy: !0,
  paste: !0,
  cut: !0,
  search: !1,
  delete: !0,
  activateCell: !0,
  scrollToSelectedCell: !0,
  goToFirstCell: !0,
  goToFirstColumn: !0,
  goToFirstRow: !0,
  goToLastCell: !0,
  goToLastColumn: !0,
  goToLastRow: !0,
  goToNextPage: !0,
  goToPreviousPage: !0,
  selectToFirstCell: !0,
  selectToFirstColumn: !0,
  selectToFirstRow: !0,
  selectToLastCell: !0,
  selectToLastColumn: !0,
  selectToLastRow: !0,
  selectAll: !0,
  selectRow: !0,
  selectColumn: !0,
  goUpCell: !0,
  goRightCell: !0,
  goDownCell: !0,
  goLeftCell: !0,
  goUpCellRetainSelection: !0,
  goRightCellRetainSelection: !0,
  goDownCellRetainSelection: !0,
  goLeftCellRetainSelection: !0,
  selectGrowUp: !0,
  selectGrowRight: !0,
  selectGrowDown: !0,
  selectGrowLeft: !0
};
function Ne(e, t) {
  return e === !0 ? t : e === !1 ? "" : e;
}
function fg(e) {
  const t = xo.value;
  return {
    activateCell: Ne(e.activateCell, " |Enter|shift+Enter"),
    clear: Ne(e.clear, "any+Escape"),
    closeOverlay: Ne(e.closeOverlay, "any+Escape"),
    acceptOverlayDown: Ne(e.acceptOverlayDown, "Enter"),
    acceptOverlayUp: Ne(e.acceptOverlayUp, "shift+Enter"),
    acceptOverlayLeft: Ne(e.acceptOverlayLeft, "shift+Tab"),
    acceptOverlayRight: Ne(e.acceptOverlayRight, "Tab"),
    copy: e.copy,
    cut: e.cut,
    delete: Ne(e.delete, t ? "Backspace|Delete" : "Delete"),
    downFill: Ne(e.downFill, "primary+_68"),
    scrollToSelectedCell: Ne(e.scrollToSelectedCell, "primary+Enter"),
    goDownCell: Ne(e.goDownCell, "ArrowDown"),
    goDownCellRetainSelection: Ne(e.goDownCellRetainSelection, "alt+ArrowDown"),
    goLeftCell: Ne(e.goLeftCell, "ArrowLeft|shift+Tab"),
    goLeftCellRetainSelection: Ne(e.goLeftCellRetainSelection, "alt+ArrowLeft"),
    goRightCell: Ne(e.goRightCell, "ArrowRight|Tab"),
    goRightCellRetainSelection: Ne(e.goRightCellRetainSelection, "alt+ArrowRight"),
    goUpCell: Ne(e.goUpCell, "ArrowUp"),
    goUpCellRetainSelection: Ne(e.goUpCellRetainSelection, "alt+ArrowUp"),
    goToFirstCell: Ne(e.goToFirstCell, "primary+Home"),
    goToFirstColumn: Ne(e.goToFirstColumn, "Home|primary+ArrowLeft"),
    goToFirstRow: Ne(e.goToFirstRow, "primary+ArrowUp"),
    goToLastCell: Ne(e.goToLastCell, "primary+End"),
    goToLastColumn: Ne(e.goToLastColumn, "End|primary+ArrowRight"),
    goToLastRow: Ne(e.goToLastRow, "primary+ArrowDown"),
    goToNextPage: Ne(e.goToNextPage, "PageDown"),
    goToPreviousPage: Ne(e.goToPreviousPage, "PageUp"),
    paste: e.paste,
    rightFill: Ne(e.rightFill, "primary+_82"),
    search: Ne(e.search, "primary+f"),
    selectAll: Ne(e.selectAll, "primary+a"),
    selectColumn: Ne(e.selectColumn, "ctrl+ "),
    selectGrowDown: Ne(e.selectGrowDown, "shift+ArrowDown"),
    selectGrowLeft: Ne(e.selectGrowLeft, "shift+ArrowLeft"),
    selectGrowRight: Ne(e.selectGrowRight, "shift+ArrowRight"),
    selectGrowUp: Ne(e.selectGrowUp, "shift+ArrowUp"),
    selectRow: Ne(e.selectRow, "shift+ "),
    selectToFirstCell: Ne(e.selectToFirstCell, "primary+shift+Home"),
    selectToFirstColumn: Ne(e.selectToFirstColumn, "primary+shift+ArrowLeft"),
    selectToFirstRow: Ne(e.selectToFirstRow, "primary+shift+ArrowUp"),
    selectToLastCell: Ne(e.selectToLastCell, "primary+shift+End"),
    selectToLastColumn: Ne(e.selectToLastColumn, "primary+shift+ArrowRight"),
    selectToLastRow: Ne(e.selectToLastRow, "primary+shift+ArrowDown")
  };
}
function lw(e) {
  const t = Om(e);
  return St.useMemo(() => {
    if (t === void 0)
      return fg(Zn);
    const n = {
      ...t,
      goToNextPage: (t == null ? void 0 : t.goToNextPage) ?? (t == null ? void 0 : t.pageDown) ?? Zn.goToNextPage,
      goToPreviousPage: (t == null ? void 0 : t.goToPreviousPage) ?? (t == null ? void 0 : t.pageUp) ?? Zn.goToPreviousPage,
      goToFirstCell: (t == null ? void 0 : t.goToFirstCell) ?? (t == null ? void 0 : t.first) ?? Zn.goToFirstCell,
      goToLastCell: (t == null ? void 0 : t.goToLastCell) ?? (t == null ? void 0 : t.last) ?? Zn.goToLastCell,
      selectToFirstCell: (t == null ? void 0 : t.selectToFirstCell) ?? (t == null ? void 0 : t.first) ?? Zn.selectToFirstCell,
      selectToLastCell: (t == null ? void 0 : t.selectToLastCell) ?? (t == null ? void 0 : t.last) ?? Zn.selectToLastCell
    };
    return fg({
      ...Zn,
      ...n
    });
  }, [t]);
}
var cw = {};
const uw = p.lazy(async () => await import("/routelit/routelit_glide_data_grid/data-grid-overlay-editor-YysOFjkP.js"));
let dw = 0;
function fw(e) {
  return dv(Hf(Hf(e).filter((t) => t.span !== void 0).map((t) => {
    var n, r;
    return ur((((n = t.span) == null ? void 0 : n[0]) ?? 0) + 1, (((r = t.span) == null ? void 0 : r[1]) ?? 0) + 1);
  })));
}
function co(e, t) {
  return e === void 0 || t === 0 || e.columns.length === 0 && e.current === void 0 ? e : {
    current: e.current === void 0 ? void 0 : {
      cell: [e.current.cell[0] + t, e.current.cell[1]],
      range: {
        ...e.current.range,
        x: e.current.range.x + t
      },
      rangeStack: e.current.rangeStack.map((n) => ({
        ...n,
        x: n.x + t
      }))
    },
    rows: e.rows,
    columns: e.columns.offset(t)
  };
}
const ac = {
  kind: ae.Loading,
  allowOverlay: !1
}, uo = {
  columns: rt.empty(),
  rows: rt.empty(),
  current: void 0
}, hw = (e, t) => {
  var pu, mu, vu;
  const [n, r] = p.useState(uo), [i, o] = p.useState(), s = p.useRef(null), a = p.useRef(null), [l, c] = p.useState(), u = p.useRef(null), h = p.useRef(), d = typeof window > "u" ? null : window, { imageEditorOverride: g, getRowThemeOverride: f, markdownDivCreateNode: v, width: R, height: I, columns: y, rows: C, getCellContent: A, onCellClicked: S, onCellActivated: M, onFillPattern: P, onFinishedEditing: E, coercePasteValue: T, drawHeader: L, drawCell: x, editorBloom: b, onHeaderClicked: k, onColumnProposeMove: _, spanRangeBehavior: w = "default", onGroupHeaderClicked: z, onCellContextMenu: H, className: j, onHeaderContextMenu: re, getCellsForSelection: te, onGroupHeaderContextMenu: O, onGroupHeaderRenamed: N, onCellEdited: J, onCellsEdited: oe, onSearchResultsChanged: $, searchResults: ce, onSearchValueChange: se, searchValue: ie, onKeyDown: pe, onKeyUp: we, keybindings: Ce, editOnType: Be = !0, onRowAppended: V, onColumnMoved: Ee, validateCell: Pe, highlightRegions: dt, rangeSelect: Se = "rect", columnSelect: ve = "multi", rowSelect: Oe = "multi", rangeSelectionBlending: Le = "exclusive", columnSelectionBlending: qe = "exclusive", rowSelectionBlending: Me = "exclusive", onDelete: nt, onDragStart: Ge, onMouseMove: Ke, onPaste: ue, copyHeaders: He = !1, freezeColumns: We = 0, cellActivationBehavior: De = "second-click", rowSelectionMode: Mt = "auto", onHeaderMenuClick: Ve, getGroupDetails: je, onSearchClose: Ze, onItemHovered: Ct, onSelectionCleared: It, showSearch: sn, onVisibleRegionChanged: Kt, gridSelection: mt, onGridSelectionChange: Bt, minColumnWidth: Wt = 50, maxColumnWidth: On = 500, maxColumnAutoWidth: Dn, provideEditor: gt, trailingRowOptions: Ue, freezeTrailingRows: Je = 0, allowedFillDirections: Lt = "orthogonal", scrollOffsetX: Ft, scrollOffsetY: kt, verticalBorder: Dt, onDragOverCell: hn, onDrop: Ye, onColumnResize: vt, onColumnResizeEnd: ct, onColumnResizeStart: ut, customRenderers: qt, fillHandle: pt, drawFocusRing: Ot = !0, experimental: yt, fixedShadowX: Oi, fixedShadowY: Wn, headerIcons: Ln, imageWindowLoader: Fn, initialSize: yr, isDraggable: Di, onDragLeave: Li, onRowMoved: xn, overscrollX: br, overscrollY: wr, preventDiagonalScrolling: Sr, rightElement: rr, rightElementProps: jn, trapFocus: Fi = !1, smoothScrollX: qi, smoothScrollY: Ho, scaleToRem: zo = !1, rowHeight: Cr = 34, headerHeight: qn = 36, groupHeaderHeight: $o = qn, theme: No, isOutsideClick: Hi, renderers: kr } = e, At = typeof e.rowMarkers == "string" ? void 0 : e.rowMarkers, ln = (At == null ? void 0 : At.kind) ?? e.rowMarkers ?? "none", zi = (At == null ? void 0 : At.width) ?? e.rowMarkerWidth, xr = (At == null ? void 0 : At.startIndex) ?? e.rowMarkerStartIndex ?? 1, Ur = (At == null ? void 0 : At.theme) ?? e.rowMarkerTheme, Un = (At == null ? void 0 : At.checkboxStyle) ?? "square", Vt = Math.max(Wt, 20), gn = Math.max(On, Vt), Xr = Math.max(Dn ?? gn, Vt), Xn = p.useMemo(() => typeof window > "u" ? { fontSize: "16px" } : window.getComputedStyle(document.documentElement), []), Yr = p.useMemo(() => Number.parseFloat(Xn.fontSize), [Xn]), { rowHeight: jt, headerHeight: Rr, groupHeaderHeight: Gr, theme: $i, overscrollX: Bo, overscrollY: Ni } = sw({
    groupHeaderHeight: $o,
    headerHeight: qn,
    overscrollX: br,
    overscrollY: wr,
    remSize: Yr,
    rowHeight: Cr,
    scaleToRem: zo,
    theme: No
  }), pn = lw(Ce), Hn = zi ?? (C > 1e4 ? 48 : C > 1e3 ? 44 : C > 100 ? 36 : 32), Zt = ln !== "none", U = Zt ? 1 : 0, bt = V !== void 0, ir = (Ue == null ? void 0 : Ue.sticky) === !0, [Wo, Bi] = p.useState(!1), Kr = sn ?? Wo, jo = p.useCallback(() => {
    Ze !== void 0 ? Ze() : Bi(!1);
  }, [Ze]), Y = p.useMemo(() => mt === void 0 ? void 0 : co(mt, U), [mt, U]) ?? n, zt = p.useRef();
  zt.current === void 0 && (zt.current = new AbortController()), p.useEffect(() => () => zt == null ? void 0 : zt.current.abort(), []);
  const [Pt, _r] = Ub(te, A, U, zt.current, C), Vr = p.useCallback((m, F, D) => {
    if (Pe === void 0)
      return !0;
    const B = [m[0] - U, m[1]];
    return Pe == null ? void 0 : Pe(B, F, D);
  }, [U, Pe]), Yn = p.useRef(mt), Yt = p.useCallback((m, F) => {
    F && (m = Jb(m, Pt, U, w, zt.current)), Bt !== void 0 ? (Yn.current = co(m, -U), Bt(Yn.current)) : r(m);
  }, [Bt, Pt, U, w]), mn = Lr(vt, p.useCallback((m, F, D, B) => {
    vt == null || vt(y[D - U], F, D - U, B);
  }, [vt, U, y])), Uo = Lr(ct, p.useCallback((m, F, D, B) => {
    ct == null || ct(y[D - U], F, D - U, B);
  }, [ct, U, y])), Tr = Lr(ut, p.useCallback((m, F, D, B) => {
    ut == null || ut(y[D - U], F, D - U, B);
  }, [ut, U, y])), Xo = Lr(L, p.useCallback((m, F) => (L == null ? void 0 : L({ ...m, columnIndex: m.columnIndex - U }, F)) ?? !1, [L, U])), Yo = Lr(x, p.useCallback((m, F) => (x == null ? void 0 : x({ ...m, col: m.col - U }, F)) ?? !1, [x, U])), q = p.useCallback((m) => {
    if (nt !== void 0) {
      const F = nt(co(m, -U));
      return typeof F == "boolean" ? F : co(F, U);
    }
    return !0;
  }, [nt, U]), [Q, de, le] = jb(Y, Yt, Le, qe, Me, Se), ne = p.useMemo(() => Qn(ap(), $i), [$i]), [me, Ie] = p.useState([0, 0, 0]), Ae = p.useMemo(() => {
    if (kr === void 0)
      return {};
    const m = {};
    for (const F of kr)
      m[F.kind] = F;
    return m;
  }, [kr]), ge = p.useCallback((m) => m.kind !== ae.Custom ? Ae[m.kind] : qt == null ? void 0 : qt.find((F) => F.isMatch(m)), [qt, Ae]);
  let { sizedColumns: tt, nonGrowWidth: ke } = G1(y, C, _r, me[0] - (U === 0 ? 0 : Hn) - me[2], Vt, Xr, ne, ge, zt.current);
  ln !== "none" && (ke += Hn);
  const it = p.useMemo(() => tt.some((m) => m.group !== void 0), [tt]), Fe = it ? Rr + Gr : Rr, Xe = Y.rows.length, Rt = ln === "none" ? void 0 : Xe === 0 ? !1 : Xe === C ? !0 : void 0, ze = p.useMemo(() => ln === "none" ? tt : [
    {
      title: "",
      width: Hn,
      icon: void 0,
      hasMenu: !1,
      style: "normal",
      themeOverride: Ur,
      rowMarker: Un,
      rowMarkerChecked: Rt
    },
    ...tt
  ], [ln, tt, Hn, Ur, Un, Rt]), [xt, cn] = p.useMemo(() => [
    kt !== void 0 && typeof jt == "number" ? Math.floor(kt / jt) : 0,
    kt !== void 0 && typeof jt == "number" ? -(kt % jt) : 0
  ], [kt, jt]), wt = p.useRef({
    height: 1,
    width: 1,
    x: 0,
    y: 0
  }), Jt = p.useMemo(() => ({
    x: wt.current.x,
    y: xt,
    width: wt.current.width ?? 1,
    height: wt.current.height ?? 1,
    // tx: 'TODO',
    ty: cn
  }), [cn, xt]), et = p.useRef(!1), [_t, Qt, Rn] = Pm(Jt);
  wt.current = _t;
  const vn = (_t.height ?? 1) > 1;
  p.useLayoutEffect(() => {
    if (kt !== void 0 && u.current !== null && vn) {
      if (u.current.scrollTop === kt)
        return;
      u.current.scrollTop = kt, u.current.scrollTop !== kt && Rn(), et.current = !0;
    }
  }, [kt, vn, Rn]);
  const Er = (_t.width ?? 1) > 1;
  p.useLayoutEffect(() => {
    if (Ft !== void 0 && u.current !== null && Er) {
      if (u.current.scrollLeft === Ft)
        return;
      u.current.scrollLeft = Ft, u.current.scrollLeft !== Ft && Rn(), et.current = !0;
    }
  }, [Ft, Er, Rn]);
  const or = _t.x + U, Wi = _t.y, Gt = p.useRef(null), Ut = p.useCallback((m) => {
    var F;
    m === !0 ? (F = Gt.current) == null || F.focus() : window.requestAnimationFrame(() => {
      var D;
      (D = Gt.current) == null || D.focus();
    });
  }, []), $t = bt ? C + 1 : C, un = p.useCallback((m) => {
    const F = U === 0 ? m : m.map((B) => ({
      ...B,
      location: [B.location[0] - U, B.location[1]]
    })), D = oe == null ? void 0 : oe(F);
    if (D !== !0)
      for (const B of F)
        J == null || J(B.location, B.value);
    return D;
  }, [J, oe, U]), [ar, Go] = p.useState(), ji = Y.current !== void 0 && Y.current.range.width * Y.current.range.height > 1 ? Y.current.range : void 0, Mr = Ot ? (pu = Y.current) == null ? void 0 : pu.cell : void 0, Ui = Mr == null ? void 0 : Mr[0], Xi = Mr == null ? void 0 : Mr[1], Fp = p.useMemo(() => {
    if ((dt === void 0 || dt.length === 0) && (ji ?? Ui ?? Xi ?? ar) === void 0)
      return;
    const m = [];
    if (dt !== void 0)
      for (const F of dt) {
        const D = ze.length - F.range.x - U;
        D > 0 && m.push({
          color: F.color,
          range: {
            ...F.range,
            x: F.range.x + U,
            width: Math.min(D, F.range.width)
          },
          style: F.style
        });
      }
    return ar !== void 0 && m.push({
      color: hr(ne.accentColor, 0),
      range: ar,
      style: "dashed"
    }), ji !== void 0 && m.push({
      color: hr(ne.accentColor, 0.5),
      range: ji,
      style: "solid-outline"
    }), Ui !== void 0 && Xi !== void 0 && m.push({
      color: ne.accentColor,
      range: {
        x: Ui,
        y: Xi,
        width: 1,
        height: 1
      },
      style: "solid-outline"
    }), m.length > 0 ? m : void 0;
  }, [
    ar,
    ji,
    Ui,
    Xi,
    dt,
    ze.length,
    ne.accentColor,
    U
  ]), nu = p.useRef(ze);
  nu.current = ze;
  const en = p.useCallback(([m, F], D = !1) => {
    var K, X, G, ee, Z, he, ye;
    const B = bt && F === $t - 1;
    if (m === 0 && Zt)
      return B ? ac : {
        kind: fn.Marker,
        allowOverlay: !1,
        checkboxStyle: Un,
        checked: (Y == null ? void 0 : Y.rows.hasIndex(F)) === !0,
        markerKind: ln === "clickable-number" ? "number" : ln,
        row: xr + F,
        drawHandle: xn !== void 0,
        cursor: ln === "clickable-number" ? "pointer" : void 0
      };
    if (B) {
      const Re = m === U ? (Ue == null ? void 0 : Ue.hint) ?? "" : "", _e = nu.current[m];
      if (((K = _e == null ? void 0 : _e.trailingRowOptions) == null ? void 0 : K.disabled) === !0)
        return ac;
      {
        const Qe = ((X = _e == null ? void 0 : _e.trailingRowOptions) == null ? void 0 : X.hint) ?? Re, Te = ((G = _e == null ? void 0 : _e.trailingRowOptions) == null ? void 0 : G.addIcon) ?? (Ue == null ? void 0 : Ue.addIcon);
        return {
          kind: fn.NewRow,
          hint: Qe,
          allowOverlay: !1,
          icon: Te
        };
      }
    } else {
      const fe = m - U;
      if (D || (yt == null ? void 0 : yt.strict) === !0) {
        const _e = wt.current, Qe = _e.x > fe || fe > _e.x + _e.width || _e.y > F || F > _e.y + _e.height || F >= Vo.current, Te = fe === ((Z = (ee = _e.extras) == null ? void 0 : ee.selected) == null ? void 0 : Z[0]) && F === ((he = _e.extras) == null ? void 0 : he.selected[1]);
        let xe = !1;
        if (((ye = _e.extras) == null ? void 0 : ye.freezeRegions) !== void 0) {
          for (const ft of _e.extras.freezeRegions)
            if (qo(ft, fe, F)) {
              xe = !0;
              break;
            }
        }
        if (Qe && !Te && !xe)
          return ac;
      }
      let Re = A([fe, F]);
      return U !== 0 && Re.span !== void 0 && (Re = {
        ...Re,
        span: [Re.span[0] + U, Re.span[1] + U]
      }), Re;
    }
  }, [
    bt,
    $t,
    Zt,
    Un,
    Y == null ? void 0 : Y.rows,
    ln,
    xr,
    xn,
    U,
    Ue == null ? void 0 : Ue.hint,
    Ue == null ? void 0 : Ue.addIcon,
    yt == null ? void 0 : yt.strict,
    A
  ]), Ko = p.useCallback((m) => {
    let F = (je == null ? void 0 : je(m)) ?? { name: m };
    return N !== void 0 && m !== "" && (F = {
      // FIXME: Mutate
      icon: F.icon,
      name: F.name,
      overrideTheme: F.overrideTheme,
      actions: [
        ...F.actions ?? [],
        {
          title: "Rename",
          icon: "renameIcon",
          onClick: (D) => Jo({
            group: F.name,
            bounds: D.bounds
          })
        }
      ]
    }), F;
  }, [je, N]), Yi = p.useCallback((m) => {
    var G;
    const [F, D] = m.cell, B = ze[F], W = (B == null ? void 0 : B.group) !== void 0 ? (G = Ko(B.group)) == null ? void 0 : G.overrideTheme : void 0, K = B == null ? void 0 : B.themeOverride, X = f == null ? void 0 : f(D);
    o({
      ...m,
      theme: Qn(ne, W, K, X, m.content.themeOverride)
    });
  }, [f, ze, Ko, ne]), Ir = p.useCallback((m, F, D) => {
    var X;
    if (Y.current === void 0)
      return;
    const [B, W] = Y.current.cell, K = en([B, W]);
    if (K.kind !== ae.Boolean && K.allowOverlay) {
      let G = K;
      if (D !== void 0)
        switch (G.kind) {
          case ae.Number: {
            const ee = g0(() => D === "-" ? -0 : Number.parseFloat(D), 0);
            G = {
              ...G,
              data: Number.isNaN(ee) ? 0 : ee
            };
            break;
          }
          case ae.Text:
          case ae.Markdown:
          case ae.Uri:
            G = {
              ...G,
              data: D
            };
            break;
        }
      Yi({
        target: m,
        content: G,
        initialValue: D,
        cell: [B, W],
        highlight: D === void 0,
        forceEditMode: D !== void 0
      });
    } else K.kind === ae.Boolean && F && K.readonly !== !0 && (un([
      {
        location: Y.current.cell,
        value: {
          ...K,
          data: Pp(K.data)
        }
      }
    ]), (X = Gt.current) == null || X.damage([{ cell: Y.current.cell }]));
  }, [en, Y, un, Yi]), ru = p.useCallback((m, F) => {
    var W;
    const D = (W = Gt.current) == null ? void 0 : W.getBounds(m, F);
    if (D === void 0 || u.current === null)
      return;
    const B = en([m, F]);
    B.allowOverlay && Yi({
      target: D,
      content: B,
      initialValue: void 0,
      highlight: !0,
      cell: [m, F],
      forceEditMode: !0
    });
  }, [en, Yi]), Tt = p.useCallback((m, F, D = "both", B = 0, W = 0, K = void 0) => {
    if (u.current !== null) {
      const X = Gt.current, G = a.current, ee = typeof m != "number" ? m.unit === "cell" ? m.amount : void 0 : m, Z = typeof F != "number" ? F.unit === "cell" ? F.amount : void 0 : F, he = typeof m != "number" && m.unit === "px" ? m.amount : void 0, ye = typeof F != "number" && F.unit === "px" ? F.amount : void 0;
      if (X !== null && G !== null) {
        let fe = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }, Re = 0, _e = 0;
        if ((ee !== void 0 || Z !== void 0) && (fe = X.getBounds((ee ?? 0) + U, Z ?? 0) ?? fe, fe.width === 0 || fe.height === 0))
          return;
        const Qe = G.getBoundingClientRect(), Te = Qe.width / G.offsetWidth;
        if (he !== void 0 && (fe = {
          ...fe,
          x: he - Qe.left - u.current.scrollLeft,
          width: 1
        }), ye !== void 0 && (fe = {
          ...fe,
          y: ye + Qe.top - u.current.scrollTop,
          height: 1
        }), fe !== void 0) {
          const xe = {
            x: fe.x - B,
            y: fe.y - W,
            width: fe.width + 2 * B,
            height: fe.height + 2 * W
          };
          let ft = 0;
          for (let ia = 0; ia < We; ia++)
            ft += tt[ia].width;
          let Nt = 0;
          const Et = Je + (ir ? 1 : 0);
          Et > 0 && (Nt = vr($t, Et, jt));
          let bn = ft * Te + Qe.left + U * Hn * Te, Tn = Qe.right, wn = Qe.top + Fe * Te, En = Qe.bottom - Nt * Te;
          const Qi = fe.width + B * 2;
          switch (K == null ? void 0 : K.hAlign) {
            case "start":
              Tn = bn + Qi;
              break;
            case "end":
              bn = Tn - Qi;
              break;
            case "center":
              bn = Math.floor((bn + Tn) / 2) - Qi / 2, Tn = bn + Qi;
              break;
          }
          const eo = fe.height + W * 2;
          switch (K == null ? void 0 : K.vAlign) {
            case "start":
              En = wn + eo;
              break;
            case "end":
              wn = En - eo;
              break;
            case "center":
              wn = Math.floor((wn + En) / 2) - eo / 2, En = wn + eo;
              break;
          }
          bn > xe.x ? Re = xe.x - bn : Tn < xe.x + xe.width && (Re = xe.x + xe.width - Tn), wn > xe.y ? _e = xe.y - wn : En < xe.y + xe.height && (_e = xe.y + xe.height - En), D === "vertical" || typeof m == "number" && m < We ? Re = 0 : (D === "horizontal" || typeof F == "number" && F >= $t - Et) && (_e = 0), (Re !== 0 || _e !== 0) && (Te !== 1 && (Re /= Te, _e /= Te), u.current.scrollTo(Re + u.current.scrollLeft, _e + u.current.scrollTop));
        }
      }
    }
  }, [
    U,
    Je,
    Hn,
    Fe,
    We,
    tt,
    $t,
    ir,
    jt
  ]), iu = p.useRef(ru), ou = p.useRef(A), Vo = p.useRef(C);
  iu.current = ru, ou.current = A, Vo.current = C;
  const Ar = p.useCallback(async (m, F = !0) => {
    var ee;
    const D = ze[m];
    if (((ee = D == null ? void 0 : D.trailingRowOptions) == null ? void 0 : ee.disabled) === !0)
      return;
    const B = V == null ? void 0 : V();
    let W, K = !0;
    B !== void 0 && (W = await B, W === "top" && (K = !1), typeof W == "number" && (K = !1));
    let X = 0;
    const G = () => {
      if (Vo.current <= C) {
        X < 500 && window.setTimeout(G, X), X = 50 + X * 2;
        return;
      }
      const Z = typeof W == "number" ? W : K ? C : 0;
      Ji.current(m - U, Z), Q({
        cell: [m, Z],
        range: {
          x: m,
          y: Z,
          width: 1,
          height: 1
        }
      }, !1, !1, "edit");
      const he = ou.current([m - U, Z]);
      he.allowOverlay && pi(he) && he.readonly !== !0 && F && window.setTimeout(() => {
        iu.current(m, Z);
      }, 0);
    };
    G();
  }, [ze, V, U, C, Q]), Gi = p.useCallback((m) => {
    var D, B;
    const F = ((B = (D = tt[m]) == null ? void 0 : D.trailingRowOptions) == null ? void 0 : B.targetColumn) ?? (Ue == null ? void 0 : Ue.targetColumn);
    if (typeof F == "number")
      return F + (Zt ? 1 : 0);
    if (typeof F == "object") {
      const W = y.indexOf(F);
      if (W >= 0)
        return W + (Zt ? 1 : 0);
    }
  }, [tt, y, Zt, Ue == null ? void 0 : Ue.targetColumn]), Gn = p.useRef(), Pr = p.useRef(), Zr = p.useCallback((m, F) => {
    var W;
    const [D, B] = F;
    return Qn(ne, (W = ze[D]) == null ? void 0 : W.themeOverride, f == null ? void 0 : f(B), m.themeOverride);
  }, [f, ze, ne]), Jr = p.useCallback((m) => {
    var he, ye, fe;
    const F = xo.value ? m.metaKey : m.ctrlKey, D = F && Oe === "multi", B = F && ve === "multi", [W, K] = m.location, X = Y.columns, G = Y.rows, [ee, Z] = ((he = Y.current) == null ? void 0 : he.cell) ?? [];
    if (m.kind === "cell") {
      if (Pr.current = void 0, sr.current = [W, K], W === 0 && Zt) {
        if (bt === !0 && K === C || ln === "number" || Oe === "none")
          return;
        const Re = en(m.location);
        if (Re.kind !== fn.Marker)
          return;
        if (xn !== void 0) {
          const Te = ge(Re);
          rn((Te == null ? void 0 : Te.kind) === fn.Marker);
          const xe = (ye = Te == null ? void 0 : Te.onClick) == null ? void 0 : ye.call(Te, {
            ...m,
            cell: Re,
            posX: m.localEventX,
            posY: m.localEventY,
            bounds: m.bounds,
            theme: Zr(Re, m.location),
            preventDefault: () => {
            }
          });
          if (xe === void 0 || xe.checked === Re.checked)
            return;
        }
        o(void 0), Ut();
        const _e = G.hasIndex(K), Qe = Gn.current;
        if (Oe === "multi" && (m.shiftKey || m.isLongTouch === !0) && Qe !== void 0 && G.hasIndex(Qe)) {
          const Te = [Math.min(Qe, K), Math.max(Qe, K) + 1];
          D || Mt === "multi" ? de(void 0, Te, !0) : de(rt.fromSingleSelection(Te), void 0, D);
        } else D || m.isTouch || Mt === "multi" ? _e ? de(G.remove(K), void 0, !0) : (de(void 0, K, !0), Gn.current = K) : _e && G.length === 1 ? de(rt.empty(), void 0, F) : (de(rt.fromSingleSelection(K), void 0, F), Gn.current = K);
      } else if (W >= U && bt && K === C) {
        const Re = Gi(W);
        Ar(Re ?? W);
      } else if (ee !== W || Z !== K) {
        const Re = en(m.location), _e = ge(Re);
        if ((_e == null ? void 0 : _e.onSelect) !== void 0) {
          let xe = !1;
          if (_e.onSelect({
            ...m,
            cell: Re,
            posX: m.localEventX,
            posY: m.localEventY,
            bounds: m.bounds,
            preventDefault: () => xe = !0,
            theme: Zr(Re, m.location)
          }), xe)
            return;
        }
        const Qe = ir && K === C, Te = ir && Y !== void 0 && ((fe = Y.current) == null ? void 0 : fe.cell[1]) === C;
        if ((m.shiftKey || m.isLongTouch === !0) && ee !== void 0 && Z !== void 0 && Y.current !== void 0 && !Te) {
          if (Qe)
            return;
          const xe = Math.min(W, ee), ft = Math.max(W, ee), Nt = Math.min(K, Z), Et = Math.max(K, Z);
          Q({
            ...Y.current,
            range: {
              x: xe,
              y: Nt,
              width: ft - xe + 1,
              height: Et - Nt + 1
            }
          }, !0, F, "click"), Gn.current = void 0, Ut();
        } else
          Q({
            cell: [W, K],
            range: { x: W, y: K, width: 1, height: 1 }
          }, !0, F, "click"), Gn.current = void 0, o(void 0), Ut();
      }
    } else if (m.kind === "header")
      if (sr.current = [W, K], o(void 0), Zt && W === 0)
        Gn.current = void 0, Pr.current = void 0, Oe === "multi" && (G.length !== C ? de(rt.fromSingleSelection([0, C]), void 0, F) : de(rt.empty(), void 0, F), Ut());
      else {
        const Re = Pr.current;
        if (ve === "multi" && (m.shiftKey || m.isLongTouch === !0) && Re !== void 0 && X.hasIndex(Re)) {
          const _e = [Math.min(Re, W), Math.max(Re, W) + 1];
          B ? le(void 0, _e, F) : le(rt.fromSingleSelection(_e), void 0, F);
        } else B ? (X.hasIndex(W) ? le(X.remove(W), void 0, F) : le(void 0, W, F), Pr.current = W) : ve !== "none" && (le(rt.fromSingleSelection(W), void 0, F), Pr.current = W);
        Gn.current = void 0, Ut();
      }
    else m.kind === nn ? sr.current = [W, K] : m.kind === Ro && !m.isMaybeScrollbar && (Yt(uo, !1), o(void 0), Ut(), It == null || It(), Gn.current = void 0, Pr.current = void 0);
  }, [
    Ar,
    ve,
    Ut,
    ge,
    Gi,
    en,
    Y,
    Zt,
    ir,
    It,
    xn,
    U,
    ln,
    Oe,
    Mt,
    C,
    Q,
    Yt,
    le,
    de,
    bt,
    Zr
  ]), Qr = p.useRef(!1), sr = p.useRef(), au = p.useRef(_t), dn = p.useRef(), qp = p.useCallback((m) => {
    if (Or.current = !1, au.current = wt.current, m.button !== 0 && m.button !== 1) {
      dn.current = void 0;
      return;
    }
    const F = performance.now();
    dn.current = {
      button: m.button,
      time: F,
      location: m.location
    }, (m == null ? void 0 : m.kind) === "header" && (Qr.current = !0);
    const D = m.kind === "cell" && m.isFillHandle;
    !D && m.kind !== "cell" && m.isEdge || (c({
      previousSelection: Y,
      fillHandle: D
    }), sr.current = void 0, !m.isTouch && m.button === 0 && !D ? Jr(m) : !m.isTouch && m.button === 1 && (sr.current = m.location));
  }, [Y, Jr]), [Zo, Jo] = p.useState(), su = p.useCallback((m) => {
    if (m.kind !== nn || ve !== "multi")
      return;
    const F = xo.value ? m.metaKey : m.ctrlKey, [D] = m.location, B = Y.columns;
    if (D < U)
      return;
    const W = ze[D];
    let K = D, X = D;
    for (let G = D - 1; G >= U && _i(W.group, ze[G].group); G--)
      K--;
    for (let G = D + 1; G < ze.length && _i(W.group, ze[G].group); G++)
      X++;
    if (Ut(), F)
      if (B.hasAll([K, X + 1])) {
        let G = B;
        for (let ee = K; ee <= X; ee++)
          G = G.remove(ee);
        le(G, void 0, F);
      } else
        le(void 0, [K, X + 1], F);
    else
      le(rt.fromSingleSelection([K, X + 1]), void 0, F);
  }, [ve, Ut, Y.columns, ze, U, le]), Or = p.useRef(!1), Ki = p.useCallback(async (m) => {
    if (Pt !== void 0 && mn !== void 0) {
      const F = wt.current.y, D = wt.current.height;
      let B = Pt({
        x: m,
        y: F,
        width: 1,
        height: Math.min(D, C - F)
      }, zt.current.signal);
      typeof B != "object" && (B = await B());
      const W = tt[m - U], X = document.createElement("canvas").getContext("2d", { alpha: !1 });
      if (X !== null) {
        X.font = ne.baseFontFull;
        const G = sp(X, ne, W, 0, B, Vt, gn, !1, ge);
        mn == null || mn(W, G.width, m, G.width);
      }
    }
  }, [
    tt,
    Pt,
    gn,
    ne,
    Vt,
    mn,
    U,
    C,
    ge
  ]), [Hp, Qo] = p.useState(), Dr = p.useCallback(async (m, F) => {
    var G, ee;
    const D = (G = m.current) == null ? void 0 : G.range;
    if (D === void 0 || Pt === void 0 || F.current === void 0)
      return;
    const B = F.current.range;
    if (P !== void 0) {
      let Z = !1;
      if (P({
        fillDestination: { ...B, x: B.x - U },
        patternSource: { ...D, x: D.x - U },
        preventDefault: () => Z = !0
      }), Z)
        return;
    }
    let W = Pt(D, zt.current.signal);
    typeof W != "object" && (W = await W());
    const K = W, X = [];
    for (let Z = 0; Z < B.width; Z++)
      for (let he = 0; he < B.height; he++) {
        const ye = [B.x + Z, B.y + he];
        if (Zg(ye, D))
          continue;
        const fe = K[he % D.height][Z % D.width];
        $r(fe) || !pi(fe) || X.push({
          location: ye,
          value: { ...fe }
        });
      }
    un(X), (ee = Gt.current) == null || ee.damage(X.map((Z) => ({
      cell: Z.location
    })));
  }, [Pt, un, P, U]), lu = p.useCallback(() => {
    if (Y.current === void 0 || Y.current.range.width <= 1)
      return;
    const m = {
      ...Y,
      current: {
        ...Y.current,
        range: {
          ...Y.current.range,
          width: 1
        }
      }
    };
    Dr(m, Y);
  }, [Dr, Y]), cu = p.useCallback(() => {
    if (Y.current === void 0 || Y.current.range.height <= 1)
      return;
    const m = {
      ...Y,
      current: {
        ...Y.current,
        range: {
          ...Y.current.range,
          height: 1
        }
      }
    };
    Dr(m, Y);
  }, [Dr, Y]), zp = p.useCallback((m, F) => {
    var he, ye;
    const D = l;
    if (c(void 0), Go(void 0), Qo(void 0), Qr.current = !1, F)
      return;
    if ((D == null ? void 0 : D.fillHandle) === !0 && Y.current !== void 0 && ((he = D.previousSelection) == null ? void 0 : he.current) !== void 0) {
      if (ar === void 0)
        return;
      const fe = {
        ...Y,
        current: {
          ...Y.current,
          range: mp(D.previousSelection.current.range, ar)
        }
      };
      Dr(D.previousSelection, fe), Yt(fe, !0);
      return;
    }
    const [B, W] = m.location, [K, X] = sr.current ?? [], G = () => {
      Or.current = !0;
    }, ee = (fe) => {
      var _e, Qe, Te;
      const Re = fe.isTouch || K === B && X === W;
      if (Re && (S == null || S([B - U, W], {
        ...fe,
        preventDefault: G
      })), fe.button === 1)
        return !Or.current;
      if (!Or.current) {
        const xe = en(m.location), ft = ge(xe);
        if (ft !== void 0 && ft.onClick !== void 0 && Re) {
          const Et = ft.onClick({
            ...fe,
            cell: xe,
            posX: fe.localEventX,
            posY: fe.localEventY,
            bounds: fe.bounds,
            theme: Zr(xe, m.location),
            preventDefault: G
          });
          Et !== void 0 && !$r(Et) && Hr(Et) && (un([{ location: fe.location, value: Et }]), (_e = Gt.current) == null || _e.damage([
            {
              cell: fe.location
            }
          ]));
        }
        if (Or.current || Y.current === void 0)
          return !1;
        let Nt = !1;
        switch (xe.activationBehaviorOverride ?? De) {
          case "double-click":
          case "second-click": {
            if (((Te = (Qe = D == null ? void 0 : D.previousSelection) == null ? void 0 : Qe.current) == null ? void 0 : Te.cell) === void 0)
              break;
            const [Et, bn] = Y.current.cell, [Tn, wn] = D.previousSelection.current.cell;
            Nt = B === Et && B === Tn && W === bn && W === wn && (fe.isDoubleClick === !0 || De === "second-click");
            break;
          }
          case "single-click": {
            Nt = !0;
            break;
          }
        }
        if (Nt)
          return M == null || M([B - U, W]), Ir(fe.bounds, !1), !0;
      }
      return !1;
    }, Z = m.location[0] - U;
    if (m.isTouch) {
      const fe = wt.current, Re = au.current;
      if (fe.x !== Re.x || fe.y !== Re.y)
        return;
      if (m.isLongTouch === !0) {
        if (m.kind === "cell" && Ci((ye = Y.current) == null ? void 0 : ye.cell, m.location)) {
          H == null || H([Z, m.location[1]], {
            ...m,
            preventDefault: G
          });
          return;
        } else if (m.kind === "header" && Y.columns.hasIndex(B)) {
          re == null || re(Z, { ...m, preventDefault: G });
          return;
        } else if (m.kind === nn) {
          if (Z < 0)
            return;
          O == null || O(Z, { ...m, preventDefault: G });
          return;
        }
      }
      m.kind === "cell" ? ee(m) || Jr(m) : m.kind === nn ? z == null || z(Z, { ...m, preventDefault: G }) : (m.kind === Jn && (k == null || k(Z, {
        ...m,
        preventDefault: G
      })), Jr(m));
      return;
    }
    if (m.kind === "header") {
      if (Z < 0)
        return;
      m.isEdge ? m.isDoubleClick === !0 && Ki(B) : m.button === 0 && B === K && W === X && (k == null || k(Z, { ...m, preventDefault: G }));
    }
    if (m.kind === nn) {
      if (Z < 0)
        return;
      m.button === 0 && B === K && W === X && (z == null || z(Z, { ...m, preventDefault: G }), Or.current || su(m));
    }
    m.kind === "cell" && (m.button === 0 || m.button === 1) && ee(m), sr.current = void 0;
  }, [
    l,
    Y,
    U,
    ar,
    Dr,
    Yt,
    S,
    en,
    ge,
    De,
    Zr,
    un,
    M,
    Ir,
    H,
    re,
    O,
    Jr,
    z,
    k,
    Ki,
    su
  ]), $p = p.useCallback((m) => {
    const F = {
      ...m,
      location: [m.location[0] - U, m.location[1]]
    };
    Ke == null || Ke(F), l !== void 0 && m.buttons === 0 && (c(void 0), Go(void 0), Qo(void 0), Qr.current = !1), Qo((D) => {
      var B;
      return Qr.current ? [m.scrollEdge[0], 0] : m.scrollEdge[0] === (D == null ? void 0 : D[0]) && m.scrollEdge[1] === D[1] ? D : l === void 0 || (((B = dn.current) == null ? void 0 : B.location[0]) ?? 0) < U ? void 0 : m.scrollEdge;
    });
  }, [l, Ke, U]), Np = p.useCallback((m, F) => {
    Ve == null || Ve(m - U, F);
  }, [Ve, U]), _n = (mu = Y == null ? void 0 : Y.current) == null ? void 0 : mu.cell, Bp = p.useCallback((m, F, D, B, W, K) => {
    et.current = !1;
    let X = _n;
    X !== void 0 && (X = [X[0] - U, X[1]]);
    const G = We === 0 ? void 0 : {
      x: 0,
      y: m.y,
      width: We,
      height: m.height
    }, ee = [];
    G !== void 0 && ee.push(G), Je > 0 && (ee.push({
      x: m.x - U,
      y: C - Je,
      width: m.width,
      height: Je
    }), We > 0 && ee.push({
      x: 0,
      y: C - Je,
      width: We,
      height: Je
    }));
    const Z = {
      x: m.x - U,
      y: m.y,
      width: m.width,
      height: bt && m.y + m.height >= C ? m.height - 1 : m.height,
      tx: W,
      ty: K,
      extras: {
        selected: X,
        freezeRegion: G,
        freezeRegions: ee
      }
    };
    wt.current = Z, Qt(Z), Ie([F, D, B]), Kt == null || Kt(Z, Z.tx, Z.ty, Z.extras);
  }, [
    _n,
    U,
    bt,
    C,
    We,
    Je,
    Qt,
    Kt
  ]), Wp = Lr(Ee, p.useCallback((m, F) => {
    Ee == null || Ee(m - U, F - U), ve !== "none" && le(rt.fromSingleSelection(F), void 0, !0);
  }, [ve, Ee, U, le])), ea = p.useRef(!1), jp = p.useCallback((m) => {
    if (m.location[0] === 0 && U > 0) {
      m.preventDefault();
      return;
    }
    Ge == null || Ge({
      ...m,
      location: [m.location[0] - U, m.location[1]]
    }), m.defaultPrevented() || (ea.current = !0), c(void 0);
  }, [Ge, U]), Up = p.useCallback(() => {
    ea.current = !1;
  }, []), ta = p.useRef(), na = p.useCallback((m) => {
    var F, D, B;
    if (!Ip(m, ta.current) && (ta.current = m, !(((F = dn == null ? void 0 : dn.current) == null ? void 0 : F.button) !== void 0 && dn.current.button >= 1))) {
      if (m.buttons !== 0 && l !== void 0 && ((D = dn.current) == null ? void 0 : D.location[0]) === 0 && m.location[0] === 0 && U === 1 && Oe === "multi" && l.previousSelection && !l.previousSelection.rows.hasIndex(dn.current.location[1]) && Y.rows.hasIndex(dn.current.location[1])) {
        const W = Math.min(dn.current.location[1], m.location[1]), K = Math.max(dn.current.location[1], m.location[1]) + 1;
        de(rt.fromSingleSelection([W, K]), void 0, !1);
      }
      if (m.buttons !== 0 && l !== void 0 && Y.current !== void 0 && !ea.current && !Qr.current && (Se === "rect" || Se === "multi-rect")) {
        const [W, K] = Y.current.cell;
        let [X, G] = m.location;
        if (G < 0 && (G = wt.current.y), l.fillHandle === !0 && ((B = l.previousSelection) == null ? void 0 : B.current) !== void 0) {
          const ee = l.previousSelection.current.range;
          G = Math.min(G, bt ? C - 1 : C);
          const Z = Qv(ee, X, G, Lt);
          Go(Z);
        } else {
          if (bt && K === C)
            return;
          if (bt && G === C)
            if (m.kind === Ro)
              G--;
            else
              return;
          X = Math.max(X, U);
          const he = X - W, ye = G - K, fe = {
            x: he >= 0 ? W : X,
            y: ye >= 0 ? K : G,
            width: Math.abs(he) + 1,
            height: Math.abs(ye) + 1
          };
          Q({
            ...Y.current,
            range: fe
          }, !0, !1, "drag");
        }
      }
      Ct == null || Ct({ ...m, location: [m.location[0] - U, m.location[1]] });
    }
  }, [
    Lt,
    l,
    U,
    Oe,
    Y,
    Se,
    Ct,
    de,
    bt,
    C,
    Q
  ]), Xp = p.useCallback(() => {
    var X, G;
    const m = ta.current;
    if (m === void 0)
      return;
    const [F, D] = m.scrollEdge;
    let [B, W] = m.location;
    const K = wt.current;
    F === -1 ? B = ((G = (X = K.extras) == null ? void 0 : X.freezeRegion) == null ? void 0 : G.x) ?? K.x : F === 1 && (B = K.x + K.width), D === -1 ? W = Math.max(0, K.y) : D === 1 && (W = Math.min(C - 1, K.y + K.height)), B = Cn(B, 0, ze.length - 1), W = Cn(W, 0, C - 1), na({
      ...m,
      location: [B, W]
    });
  }, [ze.length, na, C]);
  aw(Hp, u, Xp);
  const yn = p.useCallback((m) => {
    if (Y.current === void 0)
      return;
    const [F, D] = m, [B, W] = Y.current.cell, K = Y.current.range;
    let X = K.x, G = K.x + K.width, ee = K.y, Z = K.y + K.height;
    if (D !== 0)
      switch (D) {
        case 2: {
          Z = C, ee = W, Tt(0, Z, "vertical");
          break;
        }
        case -2: {
          ee = 0, Z = W + 1, Tt(0, ee, "vertical");
          break;
        }
        case 1: {
          ee < W ? (ee++, Tt(0, ee, "vertical")) : (Z = Math.min(C, Z + 1), Tt(0, Z, "vertical"));
          break;
        }
        case -1: {
          Z > W + 1 ? (Z--, Tt(0, Z, "vertical")) : (ee = Math.max(0, ee - 1), Tt(0, ee, "vertical"));
          break;
        }
        default:
          Ri();
      }
    if (F !== 0)
      if (F === 2)
        G = ze.length, X = B, Tt(G - 1 - U, 0, "horizontal");
      else if (F === -2)
        X = U, G = B + 1, Tt(X - U, 0, "horizontal");
      else {
        let he = [];
        if (Pt !== void 0) {
          const ye = Pt({
            x: X,
            y: ee,
            width: G - X - U,
            height: Z - ee
          }, zt.current.signal);
          typeof ye == "object" && (he = fw(ye));
        }
        if (F === 1) {
          let ye = !1;
          if (X < B) {
            if (he.length > 0) {
              const fe = ur(X + 1, B + 1).find((Re) => !he.includes(Re - U));
              fe !== void 0 && (X = fe, ye = !0);
            } else
              X++, ye = !0;
            ye && Tt(X, 0, "horizontal");
          }
          ye || (G = Math.min(ze.length, G + 1), Tt(G - 1 - U, 0, "horizontal"));
        } else if (F === -1) {
          let ye = !1;
          if (G > B + 1) {
            if (he.length > 0) {
              const fe = ur(G - 1, B, -1).find((Re) => !he.includes(Re - U));
              fe !== void 0 && (G = fe, ye = !0);
            } else
              G--, ye = !0;
            ye && Tt(G - U, 0, "horizontal");
          }
          ye || (X = Math.max(U, X - 1), Tt(X - U, 0, "horizontal"));
        } else
          Ri();
      }
    Q({
      cell: Y.current.cell,
      range: {
        x: X,
        y: ee,
        width: G - X,
        height: Z - ee
      }
    }, !0, !1, "keyboard-select");
  }, [Pt, Y, ze.length, U, C, Tt, Q]), Kn = p.useCallback((m, F, D, B) => {
    const W = $t - (D ? 0 : 1);
    if (m = Cn(m, U, tt.length - 1 + U), F = Cn(F, 0, W), m === (_n == null ? void 0 : _n[0]) && F === (_n == null ? void 0 : _n[1]))
      return !1;
    if (B && Y.current !== void 0) {
      const K = [...Y.current.rangeStack];
      (Y.current.range.width > 1 || Y.current.range.height > 1) && K.push(Y.current.range), Yt({
        ...Y,
        current: {
          cell: [m, F],
          range: { x: m, y: F, width: 1, height: 1 },
          rangeStack: K
        }
      }, !0);
    } else
      Q({
        cell: [m, F],
        range: { x: m, y: F, width: 1, height: 1 }
      }, !0, !1, "keyboard-nav");
    return h.current !== void 0 && h.current[0] === m && h.current[1] === F && (h.current = void 0), Tt(m - U, F), !0;
  }, [
    $t,
    U,
    tt.length,
    _n,
    Y,
    Tt,
    Yt,
    Q
  ]), Yp = p.useCallback((m, F) => {
    (i == null ? void 0 : i.cell) !== void 0 && m !== void 0 && Hr(m) && (un([{ location: i.cell, value: m }]), window.requestAnimationFrame(() => {
      var W;
      (W = Gt.current) == null || W.damage([
        {
          cell: i.cell
        }
      ]);
    })), Ut(!0), o(void 0);
    const [D, B] = F;
    if (Y.current !== void 0 && (D !== 0 || B !== 0)) {
      const W = Y.current.cell[1] === $t - 1 && m !== void 0;
      Kn(Cn(Y.current.cell[0] + D, 0, ze.length - 1), Cn(Y.current.cell[1] + B, 0, $t - 1), W, !1);
    }
    E == null || E(m, F);
  }, [
    i == null ? void 0 : i.cell,
    Ut,
    Y,
    E,
    un,
    $t,
    Kn,
    ze.length
  ]), Gp = p.useMemo(() => `gdg-overlay-${dw++}`, []), lr = p.useCallback((m) => {
    var D, B, W, K;
    Ut();
    const F = [];
    for (let X = m.x; X < m.x + m.width; X++)
      for (let G = m.y; G < m.y + m.height; G++) {
        const ee = A([X - U, G]);
        if (!ee.allowOverlay && ee.kind !== ae.Boolean)
          continue;
        let Z;
        if (ee.kind === ae.Custom) {
          const he = ge(ee), ye = (D = he == null ? void 0 : he.provideEditor) == null ? void 0 : D.call(he, ee);
          (he == null ? void 0 : he.onDelete) !== void 0 ? Z = he.onDelete(ee) : K0(ye) && (Z = (B = ye == null ? void 0 : ye.deletedValue) == null ? void 0 : B.call(ye, ee));
        } else if (Hr(ee) && ee.allowOverlay || ee.kind === ae.Boolean) {
          const he = ge(ee);
          Z = (W = he == null ? void 0 : he.onDelete) == null ? void 0 : W.call(he, ee);
        }
        Z !== void 0 && !$r(Z) && Hr(Z) && F.push({ location: [X, G], value: Z });
      }
    un(F), (K = Gt.current) == null || K.damage(F.map((X) => ({ cell: X.location })));
  }, [Ut, A, ge, un, U]), ei = i !== void 0, uu = p.useCallback((m) => {
    var Re, _e;
    const F = () => {
      m.stopPropagation(), m.preventDefault();
    }, D = {
      didMatch: !1
    }, { bounds: B } = m, W = Y.columns, K = Y.rows, X = pn;
    if (!ei && $e(X.clear, m, D))
      Yt(uo, !1), It == null || It();
    else if (!ei && $e(X.selectAll, m, D))
      Yt({
        columns: rt.empty(),
        rows: rt.empty(),
        current: {
          cell: ((Re = Y.current) == null ? void 0 : Re.cell) ?? [U, 0],
          range: {
            x: U,
            y: 0,
            width: y.length,
            height: C
          },
          rangeStack: []
        }
      }, !1);
    else if ($e(X.search, m, D))
      (_e = s == null ? void 0 : s.current) == null || _e.focus({ preventScroll: !0 }), Bi(!0);
    else if ($e(X.delete, m, D)) {
      const Qe = (q == null ? void 0 : q(Y)) ?? !0;
      if (Qe !== !1) {
        const Te = Qe === !0 ? Y : Qe;
        if (Te.current !== void 0) {
          lr(Te.current.range);
          for (const xe of Te.current.rangeStack)
            lr(xe);
        }
        for (const xe of Te.rows)
          lr({
            x: U,
            y: xe,
            width: y.length,
            height: 1
          });
        for (const xe of Te.columns)
          lr({
            x: xe,
            y: 0,
            width: 1,
            height: C
          });
      }
    }
    if (D.didMatch)
      return F(), !0;
    if (Y.current === void 0)
      return !1;
    let [G, ee] = Y.current.cell, Z = !1, he = !1;
    $e(X.scrollToSelectedCell, m, D) ? Ji.current(G - U, ee) : ve !== "none" && $e(X.selectColumn, m, D) ? W.hasIndex(G) ? le(W.remove(G), void 0, !0) : ve === "single" ? le(rt.fromSingleSelection(G), void 0, !0) : le(void 0, G, !0) : Oe !== "none" && $e(X.selectRow, m, D) ? K.hasIndex(ee) ? de(K.remove(ee), void 0, !0) : Oe === "single" ? de(rt.fromSingleSelection(ee), void 0, !0) : de(void 0, ee, !0) : !ei && B !== void 0 && $e(X.activateCell, m, D) ? ee === C && bt ? window.setTimeout(() => {
      const Qe = Gi(G);
      Ar(Qe ?? G);
    }, 0) : (M == null || M([G - U, ee]), Ir(B, !0)) : Y.current.range.height > 1 && $e(X.downFill, m, D) ? cu() : Y.current.range.width > 1 && $e(X.rightFill, m, D) ? lu() : $e(X.goToNextPage, m, D) ? ee += Math.max(1, wt.current.height - 4) : $e(X.goToPreviousPage, m, D) ? ee -= Math.max(1, wt.current.height - 4) : $e(X.goToFirstCell, m, D) ? (o(void 0), ee = 0, G = 0) : $e(X.goToLastCell, m, D) ? (o(void 0), ee = Number.MAX_SAFE_INTEGER, G = Number.MAX_SAFE_INTEGER) : $e(X.selectToFirstCell, m, D) ? (o(void 0), yn([-2, -2])) : $e(X.selectToLastCell, m, D) ? (o(void 0), yn([2, 2])) : ei ? ($e(X.closeOverlay, m, D) && o(void 0), $e(X.acceptOverlayDown, m, D) && (o(void 0), ee++), $e(X.acceptOverlayUp, m, D) && (o(void 0), ee--), $e(X.acceptOverlayLeft, m, D) && (o(void 0), G--), $e(X.acceptOverlayRight, m, D) && (o(void 0), G++)) : ($e(X.goDownCell, m, D) ? ee += 1 : $e(X.goUpCell, m, D) ? ee -= 1 : $e(X.goRightCell, m, D) ? G += 1 : $e(X.goLeftCell, m, D) ? G -= 1 : $e(X.goDownCellRetainSelection, m, D) ? (ee += 1, Z = !0) : $e(X.goUpCellRetainSelection, m, D) ? (ee -= 1, Z = !0) : $e(X.goRightCellRetainSelection, m, D) ? (G += 1, Z = !0) : $e(X.goLeftCellRetainSelection, m, D) ? (G -= 1, Z = !0) : $e(X.goToLastRow, m, D) ? ee = C - 1 : $e(X.goToFirstRow, m, D) ? ee = Number.MIN_SAFE_INTEGER : $e(X.goToLastColumn, m, D) ? G = Number.MAX_SAFE_INTEGER : $e(X.goToFirstColumn, m, D) ? G = Number.MIN_SAFE_INTEGER : (Se === "rect" || Se === "multi-rect") && ($e(X.selectGrowDown, m, D) ? yn([0, 1]) : $e(X.selectGrowUp, m, D) ? yn([0, -1]) : $e(X.selectGrowRight, m, D) ? yn([1, 0]) : $e(X.selectGrowLeft, m, D) ? yn([-1, 0]) : $e(X.selectToLastRow, m, D) ? yn([0, 2]) : $e(X.selectToFirstRow, m, D) ? yn([0, -2]) : $e(X.selectToLastColumn, m, D) ? yn([2, 0]) : $e(X.selectToFirstColumn, m, D) && yn([-2, 0])), he = D.didMatch);
    const ye = Kn(G, ee, !1, Z), fe = D.didMatch;
    return fe && (ye || !he || Fi) && F(), fe;
  }, [
    ei,
    Y,
    pn,
    ve,
    Oe,
    Se,
    U,
    C,
    Kn,
    Yt,
    It,
    y.length,
    q,
    Fi,
    lr,
    le,
    de,
    bt,
    Gi,
    Ar,
    M,
    Ir,
    cu,
    lu,
    yn
  ]), ti = p.useCallback((m) => {
    let F = !1;
    if (pe !== void 0 && pe({
      ...m,
      cancel: () => {
        F = !0;
      }
    }), F || uu(m) || Y.current === void 0)
      return;
    const [D, B] = Y.current.cell, W = wt.current;
    if (Be && !m.metaKey && !m.ctrlKey && Y.current !== void 0 && m.key.length === 1 && /[ -~]/g.test(m.key) && m.bounds !== void 0 && pi(A([D - U, Math.max(0, Math.min(B, C - 1))]))) {
      if ((!bt || B !== C) && (W.y > B || B > W.y + W.height || W.x > D || D > W.x + W.width))
        return;
      Ir(m.bounds, !0, m.key), m.stopPropagation(), m.preventDefault();
    }
  }, [
    Be,
    pe,
    uu,
    Y,
    A,
    U,
    C,
    bt,
    Ir
  ]), Kp = p.useCallback((m, F) => {
    const D = m.location[0] - U;
    if (m.kind === "header" && (re == null || re(D, { ...m, preventDefault: F })), m.kind === nn) {
      if (D < 0)
        return;
      O == null || O(D, { ...m, preventDefault: F });
    }
    if (m.kind === "cell") {
      const [B, W] = m.location;
      H == null || H([D, W], {
        ...m,
        preventDefault: F
      }), I1(Y, m.location) || Kn(B, W, !1, !1);
    }
  }, [
    Y,
    H,
    O,
    re,
    U,
    Kn
  ]), ra = p.useCallback(async (m) => {
    var X, G, ee;
    if (!pn.paste)
      return;
    function F(Z, he, ye, fe) {
      var _e, Qe;
      const Re = typeof ye == "object" ? (ye == null ? void 0 : ye.join(`
`)) ?? "" : (ye == null ? void 0 : ye.toString()) ?? "";
      if (!$r(Z) && pi(Z) && Z.readonly !== !0) {
        const Te = T == null ? void 0 : T(Re, Z);
        if (Te !== void 0 && Hr(Te))
          return cw.NODE_ENV !== "production" && Te.kind !== Z.kind && console.warn("Coercion should not change cell kind."), {
            location: he,
            value: Te
          };
        const xe = ge(Z);
        if (xe === void 0)
          return;
        if (xe.kind === ae.Custom) {
          rn(Z.kind === ae.Custom);
          const ft = (_e = xe.onPaste) == null ? void 0 : _e.call(xe, Re, Z.data);
          return ft === void 0 ? void 0 : {
            location: he,
            value: {
              ...Z,
              data: ft
            }
          };
        } else {
          const ft = (Qe = xe.onPaste) == null ? void 0 : Qe.call(xe, Re, Z, {
            formatted: fe,
            formattedString: typeof fe == "string" ? fe : fe == null ? void 0 : fe.join(`
`),
            rawValue: ye
          });
          return ft === void 0 ? void 0 : (rn(ft.kind === Z.kind), {
            location: he,
            value: ft
          });
        }
      }
    }
    const D = Y.columns, B = Y.rows, W = ((X = u.current) == null ? void 0 : X.contains(document.activeElement)) === !0 || ((G = a.current) == null ? void 0 : G.contains(document.activeElement)) === !0;
    let K;
    if (Y.current !== void 0 ? K = [Y.current.range.x, Y.current.range.y] : D.length === 1 ? K = [D.first() ?? 0, 0] : B.length === 1 && (K = [U, B.first() ?? 0]), W && K !== void 0) {
      let Z, he;
      const ye = "text/plain", fe = "text/html";
      if (navigator.clipboard.read !== void 0) {
        const Te = await navigator.clipboard.read();
        for (const xe of Te) {
          if (xe.types.includes(fe)) {
            const Nt = await (await xe.getType(fe)).text(), Et = lg(Nt);
            if (Et !== void 0) {
              Z = Et;
              break;
            }
          }
          xe.types.includes(ye) && (he = await (await xe.getType(ye)).text());
        }
      } else if (navigator.clipboard.readText !== void 0)
        he = await navigator.clipboard.readText();
      else if (m !== void 0 && (m == null ? void 0 : m.clipboardData) !== null) {
        if (m.clipboardData.types.includes(fe)) {
          const Te = m.clipboardData.getData(fe);
          Z = lg(Te);
        }
        Z === void 0 && m.clipboardData.types.includes(ye) && (he = m.clipboardData.getData(ye));
      } else
        return;
      const [Re, _e] = K, Qe = [];
      do {
        if (ue === void 0) {
          const Te = en(K), xe = he ?? (Z == null ? void 0 : Z.map((Nt) => Nt.map((Et) => Et.rawValue).join("	")).join("	")) ?? "", ft = F(Te, K, xe, void 0);
          ft !== void 0 && Qe.push(ft);
          break;
        }
        if (Z === void 0) {
          if (he === void 0)
            return;
          Z = Qb(he);
        }
        if (ue === !1 || typeof ue == "function" && (ue == null ? void 0 : ue([K[0] - U, K[1]], Z.map((Te) => Te.map((xe) => {
          var ft;
          return ((ft = xe.rawValue) == null ? void 0 : ft.toString()) ?? "";
        })))) !== !0)
          return;
        for (const [Te, xe] of Z.entries()) {
          if (Te + _e >= C)
            break;
          for (const [ft, Nt] of xe.entries()) {
            const Et = [ft + Re, Te + _e], [bn, Tn] = Et;
            if (bn >= ze.length || Tn >= $t)
              continue;
            const wn = en(Et), En = F(wn, Et, Nt.rawValue, Nt.formatted);
            En !== void 0 && Qe.push(En);
          }
        }
      } while (!1);
      un(Qe), (ee = Gt.current) == null || ee.damage(Qe.map((Te) => ({
        cell: Te.location
      })));
    }
  }, [
    T,
    ge,
    en,
    Y,
    pn.paste,
    ze.length,
    un,
    $t,
    ue,
    U,
    C
  ]);
  Ht("paste", ra, d, !1, !0);
  const ni = p.useCallback(async (m, F) => {
    var X, G;
    if (!pn.copy)
      return;
    const D = F === !0 || ((X = u.current) == null ? void 0 : X.contains(document.activeElement)) === !0 || ((G = a.current) == null ? void 0 : G.contains(document.activeElement)) === !0, B = Y.columns, W = Y.rows, K = (ee, Z) => {
      if (!He)
        ug(ee, Z, m);
      else {
        const he = Z.map((ye) => ({
          kind: ae.Text,
          data: y[ye].title,
          displayData: y[ye].title,
          allowOverlay: !1
        }));
        ug([he, ...ee], Z, m);
      }
    };
    if (D && Pt !== void 0) {
      if (Y.current !== void 0) {
        let ee = Pt(Y.current.range, zt.current.signal);
        typeof ee != "object" && (ee = await ee()), K(ee, ur(Y.current.range.x - U, Y.current.range.x + Y.current.range.width - U));
      } else if (W !== void 0 && W.length > 0) {
        const Z = [...W].map((he) => {
          const ye = Pt({
            x: U,
            y: he,
            width: y.length,
            height: 1
          }, zt.current.signal);
          return typeof ye == "object" ? ye[0] : ye().then((fe) => fe[0]);
        });
        if (Z.some((he) => he instanceof Promise)) {
          const he = await Promise.all(Z);
          K(he, ur(y.length));
        } else
          K(Z, ur(y.length));
      } else if (B.length > 0) {
        const ee = [], Z = [];
        for (const he of B) {
          let ye = Pt({
            x: he,
            y: 0,
            width: 1,
            height: C
          }, zt.current.signal);
          typeof ye != "object" && (ye = await ye()), ee.push(ye), Z.push(he - U);
        }
        if (ee.length === 1)
          K(ee[0], Z);
        else {
          const he = ee.reduce((ye, fe) => ye.map((Re, _e) => [...Re, ...fe[_e]]));
          K(he, Z);
        }
      }
    }
  }, [y, Pt, Y, pn.copy, U, C, He]);
  Ht("copy", ni, d, !1, !1);
  const Vp = p.useCallback(async (m) => {
    var D, B;
    if (!(!pn.cut || !(((D = u.current) == null ? void 0 : D.contains(document.activeElement)) === !0 || ((B = a.current) == null ? void 0 : B.contains(document.activeElement)) === !0)) && (await ni(m), Y.current !== void 0)) {
      let W = {
        current: {
          cell: Y.current.cell,
          range: Y.current.range,
          rangeStack: []
        },
        rows: rt.empty(),
        columns: rt.empty()
      };
      const K = q == null ? void 0 : q(W);
      if (K === !1 || (W = K === !0 ? W : K, W.current === void 0))
        return;
      lr(W.current.range);
    }
  }, [lr, Y, pn.cut, ni, q]);
  Ht("cut", Vp, d, !1, !1);
  const Zp = p.useCallback((m, F) => {
    if ($ !== void 0) {
      U !== 0 && (m = m.map((W) => [W[0] - U, W[1]])), $(m, F);
      return;
    }
    if (m.length === 0 || F === -1)
      return;
    const [D, B] = m[F];
    h.current !== void 0 && h.current[0] === D && h.current[1] === B || (h.current = [D, B], Kn(D, B, !1, !1));
  }, [$, U, Kn]), [Vi, Zi] = ((vu = mt == null ? void 0 : mt.current) == null ? void 0 : vu.cell) ?? [], Ji = p.useRef(Tt);
  Ji.current = Tt, p.useLayoutEffect(() => {
    var m, F, D, B;
    !et.current && Vi !== void 0 && Zi !== void 0 && (Vi !== ((F = (m = Yn.current) == null ? void 0 : m.current) == null ? void 0 : F.cell[0]) || Zi !== ((B = (D = Yn.current) == null ? void 0 : D.current) == null ? void 0 : B.cell[1])) && Ji.current(Vi, Zi), et.current = !1;
  }, [Vi, Zi]);
  const du = Y.current !== void 0 && (Y.current.cell[0] >= ze.length || Y.current.cell[1] >= $t);
  p.useLayoutEffect(() => {
    du && Yt(uo, !1);
  }, [du, Yt]);
  const Jp = p.useMemo(() => bt === !0 && (Ue == null ? void 0 : Ue.tint) === !0 ? rt.fromSingleSelection($t - 1) : rt.empty(), [$t, bt, Ue == null ? void 0 : Ue.tint]), Qp = p.useCallback((m) => typeof Dt == "boolean" ? Dt : (Dt == null ? void 0 : Dt(m - U)) ?? !0, [U, Dt]), e0 = p.useMemo(() => {
    if (Zo === void 0 || a.current === null)
      return null;
    const { bounds: m, group: F } = Zo, D = a.current.getBoundingClientRect();
    return p.createElement(Bb, { bounds: m, group: F, canvasBounds: D, onClose: () => Jo(void 0), onFinish: (B) => {
      Jo(void 0), N == null || N(F, B);
    } });
  }, [N, Zo]), t0 = Math.min(ze.length, We + (Zt ? 1 : 0));
  p.useImperativeHandle(t, () => ({
    appendRow: (m, F) => Ar(m + U, F),
    updateCells: (m) => {
      var F;
      return U !== 0 && (m = m.map((D) => ({ cell: [D.cell[0] + U, D.cell[1]] }))), (F = Gt.current) == null ? void 0 : F.damage(m);
    },
    getBounds: (m, F) => {
      var D;
      if (!((a == null ? void 0 : a.current) === null || (u == null ? void 0 : u.current) === null)) {
        if (m === void 0 && F === void 0) {
          const B = a.current.getBoundingClientRect(), W = B.width / u.current.clientWidth;
          return {
            x: B.x - u.current.scrollLeft * W,
            y: B.y - u.current.scrollTop * W,
            width: u.current.scrollWidth * W,
            height: u.current.scrollHeight * W
          };
        }
        return (D = Gt.current) == null ? void 0 : D.getBounds((m ?? 0) + U, F);
      }
    },
    focus: () => {
      var m;
      return (m = Gt.current) == null ? void 0 : m.focus();
    },
    emit: async (m) => {
      switch (m) {
        case "delete":
          ti({
            bounds: void 0,
            cancel: () => {
            },
            stopPropagation: () => {
            },
            preventDefault: () => {
            },
            ctrlKey: !1,
            key: "Delete",
            keyCode: 46,
            metaKey: !1,
            shiftKey: !1,
            altKey: !1,
            rawEvent: void 0,
            location: void 0
          });
          break;
        case "fill-right":
          ti({
            bounds: void 0,
            cancel: () => {
            },
            stopPropagation: () => {
            },
            preventDefault: () => {
            },
            ctrlKey: !0,
            key: "r",
            keyCode: 82,
            metaKey: !1,
            shiftKey: !1,
            altKey: !1,
            rawEvent: void 0,
            location: void 0
          });
          break;
        case "fill-down":
          ti({
            bounds: void 0,
            cancel: () => {
            },
            stopPropagation: () => {
            },
            preventDefault: () => {
            },
            ctrlKey: !0,
            key: "d",
            keyCode: 68,
            metaKey: !1,
            shiftKey: !1,
            altKey: !1,
            rawEvent: void 0,
            location: void 0
          });
          break;
        case "copy":
          await ni(void 0, !0);
          break;
        case "paste":
          await ra();
          break;
      }
    },
    scrollTo: Tt,
    remeasureColumns: (m) => {
      for (const F of m)
        Ki(F + U);
    }
  }), [Ar, Ki, ni, ti, ra, U, Tt]);
  const [fu, hu] = _n ?? [], n0 = p.useCallback((m) => {
    const [F, D] = m;
    if (D === -1) {
      ve !== "none" && (le(rt.fromSingleSelection(F), void 0, !1), Ut());
      return;
    }
    fu === F && hu === D || (Q({
      cell: m,
      range: { x: F, y: D, width: 1, height: 1 }
    }, !0, !1, "keyboard-nav"), Tt(F, D));
  }, [ve, Ut, Tt, fu, hu, Q, le]), [r0, i0] = p.useState(!1), gu = p.useRef(Dg((m) => {
    i0(m);
  }, 5)), o0 = p.useCallback(() => {
    gu.current(!0), Y.current === void 0 && Y.columns.length === 0 && Y.rows.length === 0 && l === void 0 && Q({
      cell: [U, Wi],
      range: {
        x: U,
        y: Wi,
        width: 1,
        height: 1
      }
    }, !0, !1, "keyboard-select");
  }, [Wi, Y, l, U, Q]), a0 = p.useCallback(() => {
    gu.current(!1);
  }, []), [s0, l0] = p.useMemo(() => {
    let m;
    const F = (yt == null ? void 0 : yt.scrollbarWidthOverride) ?? hc(), D = C + (bt ? 1 : 0);
    if (typeof jt == "number")
      m = Fe + D * jt;
    else {
      let W = 0;
      const K = Math.min(D, 10);
      for (let X = 0; X < K; X++)
        W += jt(X);
      W = Math.floor(W / K), m = Fe + D * W;
    }
    m += F;
    const B = ze.reduce((W, K) => K.width + W, 0) + F;
    return [`${Math.min(1e5, B)}px`, `${Math.min(1e5, m)}px`];
  }, [ze, yt == null ? void 0 : yt.scrollbarWidthOverride, jt, C, bt, Fe]), c0 = p.useMemo(() => U1(ne), [ne]);
  return p.createElement(
    X1.Provider,
    { value: ne },
    p.createElement(
      rw,
      { style: c0, className: j, inWidth: R ?? s0, inHeight: I ?? l0 },
      p.createElement(Hb, { fillHandle: pt, drawFocusRing: Ot, experimental: yt, fixedShadowX: Oi, fixedShadowY: Wn, getRowThemeOverride: f, headerIcons: Ln, imageWindowLoader: Fn, initialSize: yr, isDraggable: Di, onDragLeave: Li, onRowMoved: xn, overscrollX: Bo, overscrollY: Ni, preventDiagonalScrolling: Sr, rightElement: rr, rightElementProps: jn, smoothScrollX: qi, smoothScrollY: Ho, className: j, enableGroups: it, onCanvasFocused: o0, onCanvasBlur: a0, canvasRef: a, onContextMenu: Kp, theme: ne, cellXOffset: or, cellYOffset: Wi, accessibilityHeight: _t.height, onDragEnd: Up, columns: ze, nonGrowWidth: ke, drawHeader: Xo, onColumnProposeMove: _, drawCell: Yo, disabledRows: Jp, freezeColumns: t0, lockColumns: U, firstColAccessible: U === 0, getCellContent: en, minColumnWidth: Vt, maxColumnWidth: gn, searchInputRef: s, showSearch: Kr, onSearchClose: jo, highlightRegions: Fp, getCellsForSelection: Pt, getGroupDetails: Ko, headerHeight: Rr, isFocused: r0, groupHeaderHeight: it ? Gr : 0, freezeTrailingRows: Je + (bt && (Ue == null ? void 0 : Ue.sticky) === !0 ? 1 : 0), hasAppendRow: bt, onColumnResize: mn, onColumnResizeEnd: Uo, onColumnResizeStart: Tr, onCellFocused: n0, onColumnMoved: Wp, onDragStart: jp, onHeaderMenuClick: Np, onItemHovered: na, isFilling: (l == null ? void 0 : l.fillHandle) === !0, onMouseMove: $p, onKeyDown: ti, onKeyUp: we, onMouseDown: qp, onMouseUp: zp, onDragOverCell: hn, onDrop: Ye, onSearchResultsChanged: Zp, onVisibleRegionChanged: Bp, clientSize: me, rowHeight: jt, searchResults: ce, searchValue: ie, onSearchValueChange: se, rows: $t, scrollRef: u, selection: Y, translateX: _t.tx, translateY: _t.ty, verticalBorder: Qp, gridRef: Gt, getCellRenderer: ge }),
      e0,
      i !== void 0 && p.createElement(
        p.Suspense,
        { fallback: null },
        p.createElement(uw, { ...i, validateCell: Vr, bloom: b, id: Gp, getCellRenderer: ge, className: (yt == null ? void 0 : yt.isSubGrid) === !0 ? "click-outside-ignore" : void 0, provideEditor: gt, imageEditorOverride: g, onFinishEditing: Yp, markdownDivCreateNode: v, isOutsideClick: Hi })
      )
    )
  );
}, gw = p.forwardRef(hw), hg = 20, pw = {
  getAccessibilityString: (e) => {
    var t;
    return ((t = e.data) == null ? void 0 : t.toString()) ?? "false";
  },
  kind: ae.Boolean,
  needsHover: !0,
  useLabel: !1,
  needsHoverPosition: !0,
  measure: () => 50,
  draw: (e) => mw(e, e.cell.data, fc(e.cell), e.cell.maxSize ?? hg),
  onDelete: (e) => ({
    ...e,
    data: !1
  }),
  onClick: (e) => {
    const { cell: t, posX: n, posY: r, bounds: i, theme: o } = e, { width: s, height: a, x: l, y: c } = i, u = t.maxSize ?? hg, h = Math.floor(i.y + a / 2), d = qg(u, a, o.cellVerticalPadding), g = Fg(t.contentAlign ?? "center", l, s, o.cellHorizontalPadding, d), f = Lg(g, h, d), v = Hg(l + n, c + r, f);
    if (fc(t) && v)
      return {
        ...t,
        data: Pp(t.data)
      };
  },
  onPaste: (e, t) => {
    let n = vo;
    return e.toLowerCase() === "true" ? n = !0 : e.toLowerCase() === "false" ? n = !1 : e.toLowerCase() === "indeterminate" && (n = Pc), n === t.data ? void 0 : {
      ...t,
      data: n
    };
  }
};
function mw(e, t, n, r) {
  if (!n && t === vo)
    return;
  const { ctx: i, hoverAmount: o, theme: s, rect: a, highlighted: l, hoverX: c, hoverY: u, cell: { contentAlign: h } } = e, { x: d, y: g, width: f, height: v } = a, R = 0.35;
  let I = n ? 1 - R + R * o : 0.4;
  t === vo && (I *= o), I !== 0 && (i.globalAlpha = I, Jc(i, s, t, d, g, f, v, l, c, u, r, h), i.globalAlpha = 1);
}
const vw = /* @__PURE__ */ an("div")({
  name: "BubblesOverlayEditorStyle",
  class: "gdg-b1ygi5by",
  propsAsIs: !1
}), yw = (e) => {
  const { bubbles: t } = e;
  return p.createElement(
    vw,
    null,
    t.map((n, r) => p.createElement("div", { key: r, className: "boe-bubble" }, n)),
    p.createElement("textarea", { className: "gdg-input", autoFocus: !0 })
  );
}, bw = {
  getAccessibilityString: (e) => zg(e.data),
  kind: ae.Bubble,
  needsHover: !1,
  useLabel: !1,
  needsHoverPosition: !1,
  measure: (e, t, n) => t.data.reduce((r, i) => e.measureText(i).width + r + 20, 0) + 2 * n.cellHorizontalPadding - 4,
  draw: (e) => Sw(e, e.cell.data),
  provideEditor: () => (e) => {
    const { value: t } = e;
    return p.createElement(yw, { bubbles: t.data });
  },
  onPaste: () => {
  }
}, ww = 4;
function Sw(e, t) {
  const { rect: n, theme: r, ctx: i, highlighted: o } = e, { x: s, y: a, width: l, height: c } = n, u = 20, h = 8, d = ww;
  let g = s + r.cellHorizontalPadding;
  const f = [];
  for (const v of t) {
    if (g > s + l)
      break;
    const R = Ai(v, i, r.baseFontFull).width;
    f.push({
      x: g,
      width: R
    }), g += R + h * 2 + d;
  }
  i.beginPath();
  for (const v of f)
    In(i, v.x, a + (c - u) / 2, v.width + h * 2, u, r.roundingRadius ?? u / 2);
  i.fillStyle = o ? r.bgBubbleSelected : r.bgBubble, i.fill();
  for (const [v, R] of f.entries())
    i.beginPath(), i.fillStyle = r.textBubble, i.fillText(t[v], R.x + h, a + c / 2 + tr(i, r));
}
const Cw = /* @__PURE__ */ an("div")({
  name: "DrilldownOverlayEditorStyle",
  class: "gdg-d4zsq0x",
  propsAsIs: !1
}), kw = (e) => {
  const {
    drilldowns: t
  } = e;
  return p.createElement(Cw, null, t.map((n, r) => p.createElement("div", {
    key: r,
    className: "doe-bubble"
  }, n.img !== void 0 && p.createElement("img", {
    src: n.img
  }), p.createElement("div", null, n.text))));
}, xw = {
  getAccessibilityString: (e) => zg(e.data.map((t) => t.text)),
  kind: ae.Drilldown,
  needsHover: !1,
  useLabel: !1,
  needsHoverPosition: !1,
  measure: (e, t, n) => t.data.reduce((r, i) => e.measureText(i.text).width + r + 20 + (i.img !== void 0 ? 18 : 0), 0) + 2 * n.cellHorizontalPadding - 4,
  draw: (e) => Tw(e, e.cell.data),
  provideEditor: () => (e) => {
    const { value: t } = e;
    return p.createElement(kw, { drilldowns: t.data });
  },
  onPaste: () => {
  }
}, Rw = 4, sc = {};
function _w(e, t, n, r) {
  const i = Math.ceil(window.devicePixelRatio), o = 5, s = n - o * 2, a = 4, l = n * i, c = r + o, u = r * 3, h = (u + o * 2) * i, d = `${e},${t},${i},${n}`;
  if (sc[d] !== void 0)
    return {
      el: sc[d],
      height: l,
      width: h,
      middleWidth: a * i,
      sideWidth: c * i,
      padding: o * i,
      dpr: i
    };
  const g = document.createElement("canvas"), f = g.getContext("2d");
  return f === null ? null : (g.width = h, g.height = l, f.scale(i, i), sc[d] = g, f.beginPath(), In(f, o, o, u, s, r), f.shadowColor = "rgba(24, 25, 34, 0.4)", f.shadowBlur = 1, f.fillStyle = e, f.fill(), f.shadowColor = "rgba(24, 25, 34, 0.3)", f.shadowOffsetY = 1, f.shadowBlur = 5, f.fillStyle = e, f.fill(), f.shadowOffsetY = 0, f.shadowBlur = 0, f.shadowBlur = 0, f.beginPath(), In(f, o + 0.5, o + 0.5, u, s, r), f.strokeStyle = t, f.lineWidth = 1, f.stroke(), {
    el: g,
    height: l,
    width: h,
    sideWidth: c * i,
    middleWidth: r * i,
    padding: o * i,
    dpr: i
  });
}
function Tw(e, t) {
  const { rect: n, theme: r, ctx: i, imageLoader: o, col: s, row: a } = e, { x: l, width: c } = n, u = r.baseFontFull, h = np(i, u), d = Math.min(n.height, Math.max(16, Math.ceil(h * r.lineHeight) * 2)), g = Math.floor(n.y + (n.height - d) / 2), f = d - 10, v = 8, R = Rw;
  let I = l + r.cellHorizontalPadding;
  const y = r.roundingRadius ?? 6, C = _w(r.bgCell, r.drilldownBorder, d, y), A = [];
  for (const S of t) {
    if (I > l + c)
      break;
    const P = Ai(S.text, i, u).width;
    let E = 0;
    S.img !== void 0 && o.loadOrGetImage(S.img, s, a) !== void 0 && (E = f - 8 + 4);
    const T = P + E + v * 2;
    A.push({
      x: I,
      width: T
    }), I += T + R;
  }
  if (C !== null) {
    const { el: S, height: M, middleWidth: P, sideWidth: E, width: T, dpr: L, padding: x } = C, b = E / L, k = x / L;
    for (const _ of A) {
      const w = Math.floor(_.x), z = Math.floor(_.width), H = z - (b - k) * 2;
      i.imageSmoothingEnabled = !1, i.drawImage(S, 0, 0, E, M, w - k, g, b, d), H > 0 && i.drawImage(S, E, 0, P, M, w + (b - k), g, H, d), i.drawImage(S, T - E, 0, E, M, w + z - (b - k), g, b, d), i.imageSmoothingEnabled = !0;
    }
  }
  i.beginPath();
  for (const [S, M] of A.entries()) {
    const P = t[S];
    let E = M.x + v;
    if (P.img !== void 0) {
      const T = o.loadOrGetImage(P.img, s, a);
      if (T !== void 0) {
        const L = f - 8;
        let x = 0, b = 0, k = T.width, _ = T.height;
        k > _ ? (x += (k - _) / 2, k = _) : _ > k && (b += (_ - k) / 2, _ = k), i.beginPath(), In(i, E, g + d / 2 - L / 2, L, L, r.roundingRadius ?? 3), i.save(), i.clip(), i.drawImage(T, x, b, k, _, E, g + d / 2 - L / 2, L, L), i.restore(), E += L + 4;
      }
    }
    i.beginPath(), i.fillStyle = r.textBubble, i.fillText(P.text, E, g + d / 2 + tr(i, r));
  }
}
const Ew = {
  getAccessibilityString: (e) => e.data.join(", "),
  kind: ae.Image,
  needsHover: !1,
  useLabel: !1,
  needsHoverPosition: !1,
  draw: (e) => Mw(e, e.cell.displayData ?? e.cell.data, e.cell.rounding ?? e.theme.roundingRadius ?? 4, e.cell.contentAlign),
  measure: (e, t) => t.data.length * 50,
  onDelete: (e) => ({
    ...e,
    data: []
  }),
  provideEditor: () => (e) => {
    const { value: t, onFinishedEditing: n, imageEditorOverride: r } = e, i = r ?? Dm;
    return p.createElement(i, { urls: t.data, canWrite: t.readonly !== !1, onCancel: n, onChange: (o) => {
      n({
        ...t,
        data: [o]
      });
    } });
  },
  onPaste: (e, t) => {
    e = e.trim();
    const r = e.split(",").map((i) => {
      try {
        return new URL(i), i;
      } catch {
        return;
      }
    }).filter((i) => i !== void 0);
    if (!(r.length === t.data.length && r.every((i, o) => i === t.data[o])))
      return {
        ...t,
        data: r
      };
  }
}, lc = 4;
function Mw(e, t, n, r) {
  const { rect: i, col: o, row: s, theme: a, ctx: l, imageLoader: c } = e, { x: u, y: h, height: d, width: g } = i, f = d - a.cellVerticalPadding * 2, v = [];
  let R = 0;
  for (let y = 0; y < t.length; y++) {
    const C = t[y];
    if (C.length === 0)
      continue;
    const A = c.loadOrGetImage(C, o, s);
    if (A !== void 0) {
      v[y] = A;
      const S = A.width * (f / A.height);
      R += S + lc;
    }
  }
  if (R === 0)
    return;
  R -= lc;
  let I = u + a.cellHorizontalPadding;
  r === "right" ? I = Math.floor(u + g - a.cellHorizontalPadding - R) : r === "center" && (I = Math.floor(u + g / 2 - R / 2));
  for (const y of v) {
    if (y === void 0)
      continue;
    const C = y.width * (f / y.height);
    n > 0 && (l.beginPath(), In(l, I, h + a.cellVerticalPadding, C, f, n), l.save(), l.clip()), l.drawImage(y, I, h + a.cellVerticalPadding, C, f), n > 0 && l.restore(), I += C + lc;
  }
}
function Iw(e, t) {
  let n = e * 49632 + t * 325176;
  return n ^= n << 13, n ^= n >> 17, n ^= n << 5, n / 4294967295 * 2;
}
const Aw = {
  getAccessibilityString: () => "",
  kind: ae.Loading,
  needsHover: !1,
  useLabel: !1,
  needsHoverPosition: !1,
  measure: () => 120,
  draw: (e) => {
    const { cell: t, col: n, row: r, ctx: i, rect: o, theme: s } = e;
    if (t.skeletonWidth === void 0 || t.skeletonWidth === 0)
      return;
    let a = t.skeletonWidth;
    t.skeletonWidthVariability !== void 0 && t.skeletonWidthVariability > 0 && (a += Math.round(Iw(n, r) * t.skeletonWidthVariability));
    const l = s.cellHorizontalPadding, c = t.skeletonHeight ?? Math.min(18, o.height - 2 * s.cellVerticalPadding);
    In(i, o.x + l, o.y + (o.height - c) / 2, a, c, s.roundingRadius ?? 3), i.fillStyle = hr(s.textDark, 0.1), i.fill();
  },
  onPaste: () => {
  }
}, Pw = () => (e) => e.targetWidth, gg = /* @__PURE__ */ an("div")({
  name: "MarkdownOverlayEditorStyle",
  class: "gdg-m1pnx84e",
  propsAsIs: !1,
  vars: {
    "m1pnx84e-0": [Pw(), "px"]
  }
}), Ow = (e) => {
  const { value: t, onChange: n, forceEditMode: r, createNode: i, targetRect: o, onFinish: s, validatedSelection: a } = e, l = t.data, c = t.readonly === !0, [u, h] = p.useState(l === "" || r), d = p.useCallback(() => {
    h((f) => !f);
  }, []), g = l ? "gdg-ml-6" : "";
  return u ? p.createElement(
    gg,
    { targetWidth: o.width - 20 },
    p.createElement(Lo, { autoFocus: !0, highlight: !1, validatedSelection: a, value: l, onKeyDown: (f) => {
      f.key === "Enter" && f.stopPropagation();
    }, onChange: n }),
    p.createElement(
      "div",
      { className: `gdg-edit-icon gdg-checkmark-hover ${g}`, onClick: () => s(t) },
      p.createElement(Tm, null)
    )
  ) : p.createElement(
    gg,
    { targetWidth: o.width },
    p.createElement(y1, { contents: l, createNode: i }),
    !c && p.createElement(
      p.Fragment,
      null,
      p.createElement("div", { className: "spacer" }),
      p.createElement(
        "div",
        { className: `gdg-edit-icon gdg-edit-hover ${g}`, onClick: d },
        p.createElement(Fc, null)
      )
    ),
    p.createElement("textarea", { className: "gdg-md-edit-textarea gdg-input", autoFocus: !0 })
  );
}, Dw = {
  getAccessibilityString: (e) => {
    var t;
    return ((t = e.data) == null ? void 0 : t.toString()) ?? "";
  },
  kind: ae.Markdown,
  needsHover: !1,
  needsHoverPosition: !1,
  drawPrep: Pi,
  measure: (e, t, n) => {
    const r = t.data.split(`
`)[0];
    return e.measureText(r).width + 2 * n.cellHorizontalPadding;
  },
  draw: (e) => $n(e, e.cell.data, e.cell.contentAlign),
  onDelete: (e) => ({
    ...e,
    data: ""
  }),
  provideEditor: () => (e) => {
    const { onChange: t, value: n, target: r, onFinishedEditing: i, markdownDivCreateNode: o, forceEditMode: s, validatedSelection: a } = e;
    return p.createElement(Ow, { onFinish: i, targetRect: r, value: n, validatedSelection: a, onChange: (l) => t({
      ...n,
      data: l.target.value
    }), forceEditMode: s, createNode: o });
  },
  onPaste: (e, t) => e === t.data ? void 0 : { ...t, data: e }
}, Lw = {
  getAccessibilityString: (e) => e.row.toString(),
  kind: fn.Marker,
  needsHover: !0,
  needsHoverPosition: !1,
  drawPrep: Fw,
  measure: () => 44,
  draw: (e) => Hw(e, e.cell.row, e.cell.checked, e.cell.markerKind, e.cell.drawHandle, e.cell.checkboxStyle),
  onClick: (e) => {
    const { bounds: t, cell: n, posX: r, posY: i } = e, { width: o, height: s } = t, a = n.drawHandle ? 7 + (o - 7) / 2 : o / 2, l = s / 2;
    if (Math.abs(r - a) <= 10 && Math.abs(i - l) <= 10)
      return {
        ...n,
        checked: !n.checked
      };
  },
  onPaste: () => {
  }
};
function Fw(e, t) {
  const { ctx: n, theme: r } = e, i = r.markerFontFull, o = t ?? {};
  return (o == null ? void 0 : o.font) !== i && (n.font = i, o.font = i), o.deprep = qw, n.textAlign = "center", o;
}
function qw(e) {
  const { ctx: t } = e;
  t.textAlign = "start";
}
function Hw(e, t, n, r, i, o) {
  const { ctx: s, rect: a, hoverAmount: l, theme: c } = e, { x: u, y: h, width: d, height: g } = a, f = n ? 1 : r === "checkbox-visible" ? 0.6 + 0.4 * l : l;
  if (r !== "number" && f > 0) {
    s.globalAlpha = f;
    const v = 7 * (n ? l : 1);
    if (Jc(s, c, n, i ? u + v : u, h, i ? d - v : d, g, !0, void 0, void 0, 18, "center", o), i) {
      s.globalAlpha = l, s.beginPath();
      for (const R of [3, 6])
        for (const I of [-5, -1, 3])
          s.rect(u + R, h + g / 2 + I, 2, 2);
      s.fillStyle = c.textLight, s.fill(), s.beginPath();
    }
    s.globalAlpha = 1;
  }
  if (r === "number" || r === "both" && !n) {
    const v = t.toString(), R = c.markerFontFull, I = u + d / 2;
    r === "both" && l !== 0 && (s.globalAlpha = 1 - l), s.fillStyle = c.textLight, s.font = R, s.fillText(v, I, h + g / 2 + tr(s, R)), l !== 0 && (s.globalAlpha = 1);
  }
}
const zw = {
  getAccessibilityString: () => "",
  kind: fn.NewRow,
  needsHover: !0,
  needsHoverPosition: !1,
  measure: () => 200,
  draw: (e) => $w(e, e.cell.hint, e.cell.icon),
  onPaste: () => {
  }
};
function $w(e, t, n) {
  const { ctx: r, rect: i, hoverAmount: o, theme: s, spriteManager: a } = e, { x: l, y: c, width: u, height: h } = i;
  r.beginPath(), r.globalAlpha = o, r.rect(l + 1, c + 1, u, h - 2), r.fillStyle = s.bgHeaderHovered, r.fill(), r.globalAlpha = 1, r.beginPath();
  const d = t !== "";
  let g = 0;
  if (n !== void 0) {
    const v = h - 8, R = l + 8 / 2, I = c + 8 / 2;
    a.drawSprite(n, "normal", r, R, I, v, s, d ? 1 : o), g = v;
  } else {
    g = 24;
    const f = 12, v = d ? f : o * f, R = d ? 0 : (1 - o) * f * 0.5, I = s.cellHorizontalPadding + 4;
    v > 0 && (r.moveTo(l + I + R, c + h / 2), r.lineTo(l + I + R + v, c + h / 2), r.moveTo(l + I + R + v * 0.5, c + h / 2 - v * 0.5), r.lineTo(l + I + R + v * 0.5, c + h / 2 + v * 0.5), r.lineWidth = 2, r.strokeStyle = s.bgIconHeader, r.lineCap = "round", r.stroke());
  }
  r.fillStyle = s.textMedium, r.fillText(t, g + l + s.cellHorizontalPadding + 0.5, c + h / 2 + tr(r, s)), r.beginPath();
}
const Nw = p.lazy(async () => await import("/routelit/routelit_glide_data_grid/number-overlay-editor-CVtAH09O.js")), Bw = {
  getAccessibilityString: (e) => {
    var t;
    return ((t = e.data) == null ? void 0 : t.toString()) ?? "";
  },
  kind: ae.Number,
  needsHover: !1,
  needsHoverPosition: !1,
  useLabel: !0,
  drawPrep: Pi,
  draw: (e) => $n(e, e.cell.displayData, e.cell.contentAlign),
  measure: (e, t, n) => e.measureText(t.displayData).width + n.cellHorizontalPadding * 2,
  onDelete: (e) => ({
    ...e,
    data: void 0
  }),
  provideEditor: () => (e) => {
    const { isHighlighted: t, onChange: n, value: r, validatedSelection: i } = e;
    return p.createElement(
      p.Suspense,
      { fallback: null },
      p.createElement(Nw, { highlight: t, disabled: r.readonly === !0, value: r.data, fixedDecimals: r.fixedDecimals, allowNegative: r.allowNegative, thousandSeparator: r.thousandSeparator, decimalSeparator: r.decimalSeparator, validatedSelection: i, onChange: (o) => n({
        ...r,
        data: Number.isNaN(o.floatValue ?? 0) ? 0 : o.floatValue
      }) })
    );
  },
  onPaste: (e, t, n) => {
    const r = typeof n.rawValue == "number" ? n.rawValue : Number.parseFloat(typeof n.rawValue == "string" ? n.rawValue : e);
    if (!(Number.isNaN(r) || t.data === r))
      return { ...t, data: r, displayData: n.formattedString ?? t.displayData };
  }
}, Ww = {
  getAccessibilityString: () => "",
  measure: () => 108,
  kind: ae.Protected,
  needsHover: !1,
  needsHoverPosition: !1,
  draw: jw,
  onPaste: () => {
  }
};
function jw(e) {
  const { ctx: t, theme: n, rect: r } = e, { x: i, y: o, height: s } = r;
  t.beginPath();
  const a = 2.5;
  let l = i + n.cellHorizontalPadding + a;
  const c = o + s / 2, u = Math.cos(rf(30)) * a, h = Math.sin(rf(30)) * a;
  for (let d = 0; d < 12; d++)
    t.moveTo(l, c - a), t.lineTo(l, c + a), t.moveTo(l + u, c - h), t.lineTo(l - u, c + h), t.moveTo(l - u, c - h), t.lineTo(l + u, c + h), l += 8;
  t.lineWidth = 1.1, t.lineCap = "square", t.strokeStyle = n.textLight, t.stroke();
}
const Uw = {
  getAccessibilityString: (e) => {
    var t;
    return ((t = e.data) == null ? void 0 : t.toString()) ?? "";
  },
  kind: ae.RowID,
  needsHover: !1,
  needsHoverPosition: !1,
  drawPrep: (e, t) => Pi(e, t, e.theme.textLight),
  draw: (e) => $n(e, e.cell.data, e.cell.contentAlign),
  measure: (e, t, n) => e.measureText(t.data).width + n.cellHorizontalPadding * 2,
  // eslint-disable-next-line react/display-name
  provideEditor: () => (e) => {
    const { isHighlighted: t, onChange: n, value: r, validatedSelection: i } = e;
    return St.createElement(Lo, { highlight: t, autoFocus: r.readonly !== !0, disabled: r.readonly !== !1, value: r.data, validatedSelection: i, onChange: (o) => n({
      ...r,
      data: o.target.value
    }) });
  },
  onPaste: () => {
  }
}, Xw = {
  getAccessibilityString: (e) => {
    var t;
    return ((t = e.data) == null ? void 0 : t.toString()) ?? "";
  },
  kind: ae.Text,
  needsHover: (e) => e.hoverEffect === !0,
  needsHoverPosition: !1,
  drawPrep: Pi,
  useLabel: !0,
  draw: (e) => {
    const { cell: t, hoverAmount: n, hyperWrapping: r, ctx: i, rect: o, theme: s, overrideCursor: a } = e, { displayData: l, contentAlign: c, hoverEffect: u, allowWrapping: h } = t;
    if (u === !0 && n > 0) {
      i.textBaseline = "alphabetic";
      const d = s.cellHorizontalPadding, g = s.cellVerticalPadding, f = Ai(l, i, s.baseFontFull, "alphabetic"), v = o.height - g, R = Math.min(v, f.actualBoundingBoxAscent * 2.5);
      i.beginPath(), In(i, o.x + d / 2, o.y + (o.height - R) / 2 + 1, f.width + d * 3, R - 1, s.roundingRadius ?? 4), i.globalAlpha = n, i.fillStyle = hr(s.textDark, 0.1), i.fill(), i.globalAlpha = 1, i.fillStyle = s.textDark, i.textBaseline = "middle", a == null || a("text");
    }
    $n(e, l, c, h, r);
  },
  measure: (e, t, n) => {
    const r = t.displayData.split(`
`, t.allowWrapping === !0 ? void 0 : 1);
    let i = 0;
    for (const o of r)
      i = Math.max(i, e.measureText(o).width);
    return i + 2 * n.cellHorizontalPadding;
  },
  onDelete: (e) => ({
    ...e,
    data: ""
  }),
  provideEditor: (e) => ({
    disablePadding: e.allowWrapping === !0,
    editor: (t) => {
      const { isHighlighted: n, onChange: r, value: i, validatedSelection: o } = t;
      return p.createElement(Lo, { style: e.allowWrapping === !0 ? { padding: "3px 8.5px" } : void 0, highlight: n, autoFocus: i.readonly !== !0, disabled: i.readonly === !0, altNewline: !0, value: i.data, validatedSelection: o, onChange: (s) => r({
        ...i,
        data: s.target.value
      }) });
    }
  }),
  onPaste: (e, t, n) => e === t.data ? void 0 : { ...t, data: e, displayData: n.formattedString ?? t.displayData }
}, Yw = /* @__PURE__ */ an("div")({
  name: "UriOverlayEditorStyle",
  class: "gdg-u1rrojo",
  propsAsIs: !1
}), Gw = (e) => {
  const { uri: t, onChange: n, forceEditMode: r, readonly: i, validatedSelection: o, preview: s } = e, [a, l] = p.useState(!i && (t === "" || r)), c = p.useCallback(() => {
    l(!0);
  }, []);
  return a ? p.createElement(Lo, { validatedSelection: o, highlight: !0, autoFocus: !0, value: t, onChange: n }) : p.createElement(
    Yw,
    null,
    p.createElement("a", { className: "gdg-link-area", href: t, target: "_blank", rel: "noopener noreferrer" }, s),
    !i && p.createElement(
      "div",
      { className: "gdg-edit-icon", onClick: c },
      p.createElement(Fc, null)
    ),
    p.createElement("textarea", { className: "gdg-input", autoFocus: !0 })
  );
};
function pg(e, t, n, r) {
  let i = n.cellHorizontalPadding;
  const o = t.height / 2 - e.actualBoundingBoxAscent / 2, s = e.width, a = e.actualBoundingBoxAscent;
  return r === "right" ? i = t.width - s - n.cellHorizontalPadding : r === "center" && (i = t.width / 2 - s / 2), { x: i, y: o, width: s, height: a };
}
const Kw = {
  getAccessibilityString: (e) => {
    var t;
    return ((t = e.data) == null ? void 0 : t.toString()) ?? "";
  },
  kind: ae.Uri,
  needsHover: (e) => e.hoverEffect === !0,
  needsHoverPosition: !0,
  useLabel: !0,
  drawPrep: Pi,
  draw: (e) => {
    const { cell: t, theme: n, overrideCursor: r, hoverX: i, hoverY: o, rect: s, ctx: a } = e, l = t.displayData ?? t.data, c = t.hoverEffect === !0;
    if (r !== void 0 && c && i !== void 0 && o !== void 0) {
      const u = Ai(l, a, n.baseFontFull), h = pg(u, s, n, t.contentAlign), { x: d, y: g, width: f, height: v } = h;
      if (i >= d - 4 && i <= d - 4 + f + 8 && o >= g - 4 && o <= g - 4 + v + 8) {
        const R = tr(a, n.baseFontFull);
        r("pointer");
        const I = 5, y = g - R;
        a.beginPath(), a.moveTo(s.x + d, Math.floor(s.y + y + v + I) + 0.5), a.lineTo(s.x + d + f, Math.floor(s.y + y + v + I) + 0.5), a.strokeStyle = n.linkColor, a.stroke(), a.save(), a.fillStyle = e.cellFillColor, $n({ ...e, rect: { ...s, x: s.x - 1 } }, l, t.contentAlign), $n({ ...e, rect: { ...s, x: s.x - 2 } }, l, t.contentAlign), $n({ ...e, rect: { ...s, x: s.x + 1 } }, l, t.contentAlign), $n({ ...e, rect: { ...s, x: s.x + 2 } }, l, t.contentAlign), a.restore();
      }
    }
    a.fillStyle = c ? n.linkColor : n.textDark, $n(e, l, t.contentAlign);
  },
  onClick: (e) => {
    const { cell: t, bounds: n, posX: r, posY: i, theme: o } = e, s = t.displayData ?? t.data;
    if (t.hoverEffect !== !0 || t.onClickUri === void 0)
      return;
    const a = q1(s, o.baseFontFull);
    if (a === void 0)
      return;
    const l = pg(a, n, o, t.contentAlign);
    qo({
      x: l.x - 4,
      y: l.y - 4,
      width: l.width + 8,
      height: l.height + 8
    }, r, i) && t.onClickUri(e);
  },
  measure: (e, t, n) => e.measureText(t.displayData ?? t.data).width + n.cellHorizontalPadding * 2,
  onDelete: (e) => ({
    ...e,
    data: ""
  }),
  provideEditor: (e) => (t) => {
    const { onChange: n, value: r, forceEditMode: i, validatedSelection: o } = t;
    return p.createElement(Gw, { forceEditMode: r.readonly !== !0 && (i || e.hoverEffect === !0 && e.onClickUri !== void 0), uri: r.data, preview: r.displayData ?? r.data, validatedSelection: o, readonly: r.readonly === !0, onChange: (s) => n({
      ...r,
      data: s.target.value
    }) });
  },
  onPaste: (e, t, n) => e === t.data ? void 0 : { ...t, data: e, displayData: n.formattedString ?? t.displayData }
}, Vw = [
  Lw,
  zw,
  pw,
  bw,
  xw,
  Ew,
  Aw,
  Dw,
  Bw,
  Ww,
  Uw,
  Xw,
  Kw
];
var cc, mg;
function Zw() {
  if (mg) return cc;
  mg = 1;
  var e = Og(), t = gr(), n = "Expected a function";
  function r(i, o, s) {
    var a = !0, l = !0;
    if (typeof i != "function")
      throw new TypeError(n);
    return t(s) && (a = "leading" in s ? !!s.leading : a, l = "trailing" in s ? !!s.trailing : l), e(i, o, {
      leading: a,
      maxWait: o,
      trailing: l
    });
  }
  return cc = r, cc;
}
var Jw = Zw();
const Qw = /* @__PURE__ */ er(Jw), uc = [];
class eS extends ip {
  constructor() {
    super(...arguments);
    be(this, "imageLoaded", () => {
    });
    be(this, "loadedLocations", []);
    be(this, "cache", {});
    // eslint-disable-next-line unicorn/consistent-function-scoping
    be(this, "sendLoaded", Qw(() => {
      this.imageLoaded(new xi(this.loadedLocations)), this.loadedLocations = [];
    }, 20));
    be(this, "clearOutOfWindow", () => {
      const n = Object.keys(this.cache);
      for (const r of n) {
        const i = this.cache[r];
        let o = !1;
        for (let s = 0; s < i.cells.length; s++) {
          const a = i.cells[s];
          if (this.isInWindow(a)) {
            o = !0;
            break;
          }
        }
        o ? i.cells = i.cells.filter(this.isInWindow) : (i.cancel(), delete this.cache[r]);
      }
    });
  }
  setCallback(n) {
    this.imageLoaded = n;
  }
  loadImage(n, r, i, o) {
    let s = !1;
    const a = uc.pop() ?? new Image();
    let l = !1;
    const c = {
      img: void 0,
      cells: [kn(r, i)],
      url: n,
      cancel: () => {
        l || (l = !0, uc.length < 12 ? uc.unshift(a) : s || (a.src = ""));
      }
    }, u = new Promise((h) => a.addEventListener("load", () => h(null)));
    requestAnimationFrame(async () => {
      try {
        a.src = n, await u, await a.decode();
        const h = this.cache[o];
        if (h !== void 0 && !l) {
          h.img = a;
          for (const d of h.cells)
            this.loadedLocations.push(Kc(d));
          s = !0, this.sendLoaded();
        }
      } catch {
        c.cancel();
      }
    }), this.cache[o] = c;
  }
  loadOrGetImage(n, r, i) {
    const o = n, s = this.cache[o];
    if (s !== void 0) {
      const a = kn(r, i);
      return s.cells.includes(a) || s.cells.push(a), s.img;
    } else
      this.loadImage(n, r, i, o);
  }
}
const tS = (e, t) => {
  const n = p.useMemo(() => ({ ...Vv, ...e.headerIcons }), [e.headerIcons]), r = p.useMemo(() => e.imageWindowLoader ?? new eS(), [e.imageWindowLoader]);
  return p.createElement(gw, { ...e, renderers: Vw, headerIcons: n, ref: t, imageWindowLoader: r });
}, Op = p.forwardRef(tS);
function Dp(e, t, n) {
  const r = {};
  if (n && (n.theme_override && (r.themeOverride = n.theme_override), n.style && (r.style = n.style), n.content_align && (r.contentAlign = n.content_align), n.cursor && (r.cursor = n.cursor)), e == null || t === "NoneType")
    return {
      ...r,
      kind: ae.Text,
      allowOverlay: !1,
      readonly: !0,
      displayData: "",
      data: ""
    };
  if (n != null && n.type)
    switch (n.type) {
      case "NumberColumn":
        return {
          ...r,
          kind: ae.Number,
          allowOverlay: !0,
          data: Number(e),
          displayData: String(e)
        };
      case "CheckboxColumn":
        return {
          ...r,
          kind: ae.Boolean,
          allowOverlay: !1,
          data: !!e
        };
      case "ImageColumn":
        return {
          ...r,
          kind: ae.Image,
          allowOverlay: !0,
          displayData: Array.isArray(e) ? e : [String(e)],
          data: Array.isArray(e) ? e : [String(e)]
        };
      case "JsonColumn":
        return {
          ...r,
          kind: ae.Text,
          allowOverlay: !0,
          displayData: typeof e == "string" ? e : Array.isArray(e) ? JSON.stringify(e) : String(e),
          data: typeof e == "string" ? e : JSON.stringify(e)
        };
      case "DateColumn":
      case "DatetimeColumn":
        return {
          ...r,
          kind: ae.Text,
          allowOverlay: !0,
          displayData: String(e),
          data: String(e)
        };
      case "SelectboxColumn":
        return {
          ...r,
          kind: ae.Drilldown,
          allowOverlay: !0,
          data: Array.isArray(e) ? e == null ? void 0 : e.map((o) => ({
            text: String(o)
          })) : [{ text: String(e) }]
        };
      case "MultiselectColumn":
        const i = Array.isArray(e) ? e.map(String) : [String(e)];
        return {
          ...r,
          kind: ae.Bubble,
          allowOverlay: !0,
          data: i
        };
      case "SparklineColumn":
        return {
          ...r,
          kind: ae.Text,
          allowOverlay: !1,
          readonly: !0,
          displayData: Array.isArray(e) ? e.join(", ") : String(e),
          data: Array.isArray(e) ? e.join(", ") : String(e)
        };
      case "LinkColumn":
        return {
          ...r,
          kind: ae.Uri,
          allowOverlay: !0,
          data: String(e),
          displayData: n.display_text || String(e)
        };
      case "ProtectedColumn":
        return {
          ...r,
          kind: ae.Protected,
          allowOverlay: !1,
          data: String(e)
        };
      case "IDColumn":
        return {
          ...r,
          kind: ae.RowID,
          allowOverlay: !1,
          readonly: !0,
          // ID columns are typically read-only
          data: String(e)
        };
      case "MarkdownColumn":
        return {
          ...r,
          kind: ae.Markdown,
          allowOverlay: !0,
          data: String(e)
        };
    }
  switch (t) {
    case "int":
    case "float":
      return {
        ...r,
        kind: ae.Number,
        allowOverlay: !0,
        readonly: !1,
        data: Number(e),
        displayData: String(e)
      };
    case "bool":
      return {
        ...r,
        kind: ae.Boolean,
        allowOverlay: !1,
        readonly: !1,
        data: !!e
      };
    case "str":
    default:
      return {
        ...r,
        kind: ae.Text,
        allowOverlay: !0,
        readonly: !1,
        displayData: String(e),
        data: String(e)
      };
  }
}
const vg = {
  small: 80,
  medium: 150,
  large: 300
}, nS = (e, t, n) => {
  let r = e;
  return n && (r = n.filter((i) => e.includes(i))), r.map((i) => {
    const o = t == null ? void 0 : t[i];
    let s = i;
    typeof o == "object" && o !== null && "label" in o ? s = String(o.label) : typeof o == "string" && (s = o);
    let a = 150;
    if (typeof o == "object" && o !== null && "width" in o) {
      const l = o.width;
      typeof l == "number" ? a = l : typeof l == "string" && l in vg && (a = vg[l]);
    }
    return {
      title: s,
      id: i,
      width: a
    };
  });
}, Lp = (e, t, n) => dr(() => nS(e, t, n), [e, t, n]), kc = (e) => {
  let t = rt.empty();
  if (e)
    for (const n of e)
      t = t.add(n);
  return t;
}, _o = (e) => ({
  rows: kc(e == null ? void 0 : e.rows),
  columns: kc(e == null ? void 0 : e.columns),
  current: e == null ? void 0 : e.current
}), rS = ({
  data: e,
  columns: t,
  columnTypes: n,
  height: r = "auto",
  width: i = "stretch",
  hideIndex: o = !1,
  rowHeight: s,
  selectionMode: a,
  columnConfig: l,
  placeholder: c,
  onSelect: u = "ignore",
  columnOrder: h,
  search: d,
  theme: g,
  selection: f,
  id: v
}) => {
  const R = yg(v, "select"), [I, y] = po(
    () => _o(f)
  );
  mo(() => {
    f && y(_o(f));
  }, [f]);
  const C = dr(() => {
    if (!d || d.trim() === "") return e;
    const L = d.toLowerCase();
    return e.filter(
      (x) => t.some(
        (b) => String(x[b] ?? "").toLowerCase().includes(L)
      )
    );
  }, [e, t, d]), A = Lp(t, l, h), S = yi(
    (L) => {
      const [x, b] = L, k = C[b], _ = A[x].id, w = k[_], z = w ?? c ?? "", H = n[_], j = l == null ? void 0 : l[_];
      return {
        ...Dp(z, H, j),
        readonly: !0
      };
    },
    [C, A, n, l, c]
  ), M = yi(
    (L) => {
      var _;
      let x = L;
      if ((a === "single-row" || a === "multi-row" || Array.isArray(a) && a.includes("row")) && ((_ = L.current) == null ? void 0 : _.cell) !== void 0) {
        const [w, z] = L.current.cell;
        a === "single-row" ? x = {
          ...L,
          rows: kc([z])
        } : x = {
          ...L,
          rows: L.rows.add(z)
        };
      }
      if (y(x), u === "ignore") return;
      const k = {
        rows: x.rows.toArray(),
        columns: x.columns.toArray(),
        current: x.current
      };
      R(k);
    },
    [u, R, a]
  ), P = dr(() => {
    if (a === "multi-row") return "multi";
    if (a === "single-row") return "auto";
    if (Array.isArray(a) && a.includes("row")) return "multi";
  }, [a]), E = dr(() => r === "auto" ? 400 : r === "stretch" ? "100%" : r, [r]), T = dr(() => i === "stretch" ? "100%" : i, [i]);
  return /* @__PURE__ */ go("div", { style: { height: E, width: T }, children: /* @__PURE__ */ go(
    Op,
    {
      width: "100%",
      height: "100%",
      columns: A,
      rows: C.length,
      getCellContent: S,
      gridSelection: I,
      onGridSelectionChange: M,
      rowSelectionMode: P,
      rowHeight: s,
      rowMarkers: o ? "none" : "both",
      getCellsForSelection: !0,
      theme: g
    }
  ) });
}, iS = h0(
  ({
    data: e,
    columns: t,
    columnTypes: n,
    height: r = "auto",
    width: i = "stretch",
    hideIndex: o = !1,
    rowHeight: s,
    numRows: a = "fixed",
    disabled: l = !1,
    columnConfig: c,
    onChange: u,
    columnOrder: h,
    selection: d,
    id: g
  }) => {
    const f = yg(g, "change"), [v, R] = po(
      () => _o(d)
    );
    mo(() => {
      d && (y(e), R(_o(d)));
    }, [d, e]);
    const [I, y] = po(e);
    mo(() => {
      y(e);
    }, [e]);
    const C = Lp(t, c, h), A = yi(
      (T) => {
        const [L, x] = T, b = I[x], k = C[L].id, _ = b ? b[k] : void 0, w = n[k], z = c == null ? void 0 : c[k], H = Dp(_, w, z);
        let j = !1;
        const re = c == null ? void 0 : c[k];
        return re && re.disabled === !0 || l === !0 ? j = !0 : Array.isArray(l) && (j = l.includes(k) || l.includes(L)), {
          ...H,
          readonly: j || H.readonly || !1
        };
      },
      [I, C, n, l, c]
    ), S = yi(
      (T, L) => {
        const [x, b] = T, k = C[x].id, _ = c == null ? void 0 : c[k];
        let w = L.data;
        typeof w == "object" && w !== null && ("value" in w ? w = w.value : "values" in w ? w = w.values : "tags" in w && (w = w.tags));
        const z = n[k];
        if (z === "int") {
          const re = typeof w == "string" ? parseInt(w) : Number(w);
          if (isNaN(re)) return;
          w = re;
        } else if (z === "float") {
          const re = typeof w == "string" ? parseFloat(w) : Number(w);
          if (isNaN(re)) return;
          w = re;
        }
        if (_ && (_.min_value !== void 0 && w < _.min_value || _.max_value !== void 0 && w > _.max_value || _.max_chars !== void 0 && String(w).length > _.max_chars))
          return;
        const H = [...I], j = { ...H[b] };
        j[k] = w, H[b] = j, y(H), u !== "ignore" && f({ data: H });
      },
      [
        I,
        C,
        n,
        c,
        u,
        f,
        g
      ]
    ), M = yi(() => {
      const T = {};
      t.forEach((x) => {
        const b = n[x];
        b === "int" || b === "float" ? T[x] = 0 : b === "bool" ? T[x] = !1 : T[x] = "";
      });
      const L = [...I, T];
      y(L), u !== "ignore" && f({ data: L });
    }, [I, t, n, u, f, g]), P = dr(() => r === "auto" ? 400 : r === "stretch" ? "100%" : r, [r]), E = dr(() => i === "stretch" ? "100%" : i, [i]);
    return /* @__PURE__ */ go("div", { style: { height: P, width: E }, children: /* @__PURE__ */ go(
      Op,
      {
        width: "100%",
        height: "100%",
        columns: C,
        rows: I.length,
        getCellContent: A,
        onCellEdited: S,
        onRowAppended: a === "dynamic" || a === "add" ? M : void 0,
        gridSelection: v,
        onGridSelectionChange: R,
        rowHeight: s,
        rowMarkers: o ? "none" : "number",
        getCellsForSelection: !0,
        trailingRowOptions: {
          hint: "Add row"
        }
      }
    ) });
  }
), uS = () => null, oS = () => {
  if (!document.getElementById("portal")) {
    const e = document.createElement("div");
    e.id = "portal", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.zIndex = "9999", document.body.appendChild(e);
  }
};
oS();
xc.register("grid_data_grid", rS);
xc.register("grid_data_editor", iS);
xc.forceUpdate();
export {
  zb as C,
  uS as H,
  X1 as T,
  $r as a,
  K0 as b,
  Hr as i,
  U1 as m,
  an as s
};
//# sourceMappingURL=index-BbwQ_hlI.js.map
