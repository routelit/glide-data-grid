var t0 = Object.defineProperty;
var n0 = (e, t, n) => t in e ? t0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var be = (e, t, n) => n0(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as fu } from "react/jsx-runtime";
import * as p from "react";
import St, { useRef as Fr, useState as r0, useLayoutEffect as i0, useEffect as o0, useMemo as Jo, useCallback as du } from "react";
import { componentStore as dg } from "routelit-client";
function hg(e = "This should not happen") {
  throw new Error(e);
}
function rn(e, t = "Assertion failed") {
  if (!e)
    return hg(t);
}
function ki(e, t) {
  return hg(t ?? "Hell froze over");
}
function a0(e, t) {
  try {
    return e();
  } catch {
    return t;
  }
}
const hu = Object.prototype.hasOwnProperty;
function Br(e, t) {
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
        for (; r-- && Br(e[r], t[r]); )
          ;
      return r === -1;
    }
    if (!n || typeof e == "object") {
      r = 0;
      for (n in e)
        if (hu.call(e, n) && ++r && !hu.call(t, n) || !(n in t) || !Br(e[n], t[n]))
          return !1;
      return Object.keys(t).length === r;
    }
  }
  return e !== e && t !== t;
}
var Ji = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function er(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ea, gu;
function s0() {
  if (gu) return ea;
  gu = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(r, i) {
    return r != null && t.call(r, i);
  }
  return ea = n, ea;
}
var ta, pu;
function Pn() {
  if (pu) return ta;
  pu = 1;
  var e = Array.isArray;
  return ta = e, ta;
}
var na, mu;
function gg() {
  if (mu) return na;
  mu = 1;
  var e = typeof Ji == "object" && Ji && Ji.Object === Object && Ji;
  return na = e, na;
}
var ra, vu;
function An() {
  if (vu) return ra;
  vu = 1;
  var e = gg(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return ra = n, ra;
}
var ia, yu;
function Ri() {
  if (yu) return ia;
  yu = 1;
  var e = An(), t = e.Symbol;
  return ia = t, ia;
}
var oa, bu;
function l0() {
  if (bu) return oa;
  bu = 1;
  var e = Ri(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, i = e ? e.toStringTag : void 0;
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
  return oa = o, oa;
}
var aa, wu;
function c0() {
  if (wu) return aa;
  wu = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return aa = n, aa;
}
var sa, Su;
function _i() {
  if (Su) return sa;
  Su = 1;
  var e = Ri(), t = l0(), n = c0(), r = "[object Null]", i = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function s(a) {
    return a == null ? a === void 0 ? i : r : o && o in Object(a) ? t(a) : n(a);
  }
  return sa = s, sa;
}
var la, Cu;
function Ti() {
  if (Cu) return la;
  Cu = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return la = e, la;
}
var ca, ku;
function So() {
  if (ku) return ca;
  ku = 1;
  var e = _i(), t = Ti(), n = "[object Symbol]";
  function r(i) {
    return typeof i == "symbol" || t(i) && e(i) == n;
  }
  return ca = r, ca;
}
var ua, xu;
function yc() {
  if (xu) return ua;
  xu = 1;
  var e = Pn(), t = So(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function i(o, s) {
    if (e(o))
      return !1;
    var a = typeof o;
    return a == "number" || a == "symbol" || a == "boolean" || o == null || t(o) ? !0 : r.test(o) || !n.test(o) || s != null && o in Object(s);
  }
  return ua = i, ua;
}
var fa, Ru;
function hr() {
  if (Ru) return fa;
  Ru = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return fa = e, fa;
}
var da, _u;
function pg() {
  if (_u) return da;
  _u = 1;
  var e = _i(), t = hr(), n = "[object AsyncFunction]", r = "[object Function]", i = "[object GeneratorFunction]", o = "[object Proxy]";
  function s(a) {
    if (!t(a))
      return !1;
    var l = e(a);
    return l == r || l == i || l == n || l == o;
  }
  return da = s, da;
}
var ha, Tu;
function u0() {
  if (Tu) return ha;
  Tu = 1;
  var e = An(), t = e["__core-js_shared__"];
  return ha = t, ha;
}
var ga, Eu;
function f0() {
  if (Eu) return ga;
  Eu = 1;
  var e = u0(), t = function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }();
  function n(r) {
    return !!t && t in r;
  }
  return ga = n, ga;
}
var pa, Mu;
function mg() {
  if (Mu) return pa;
  Mu = 1;
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
  return pa = n, pa;
}
var ma, Iu;
function d0() {
  if (Iu) return ma;
  Iu = 1;
  var e = pg(), t = f0(), n = hr(), r = mg(), i = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, s = Function.prototype, a = Object.prototype, l = s.toString, c = a.hasOwnProperty, u = RegExp(
    "^" + l.call(c).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function h(f) {
    if (!n(f) || t(f))
      return !1;
    var g = e(f) ? u : o;
    return g.test(r(f));
  }
  return ma = h, ma;
}
var va, Pu;
function h0() {
  if (Pu) return va;
  Pu = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return va = e, va;
}
var ya, Au;
function gr() {
  if (Au) return ya;
  Au = 1;
  var e = d0(), t = h0();
  function n(r, i) {
    var o = t(r, i);
    return e(o) ? o : void 0;
  }
  return ya = n, ya;
}
var ba, Ou;
function Co() {
  if (Ou) return ba;
  Ou = 1;
  var e = gr(), t = e(Object, "create");
  return ba = t, ba;
}
var wa, Du;
function g0() {
  if (Du) return wa;
  Du = 1;
  var e = Co();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return wa = t, wa;
}
var Sa, Lu;
function p0() {
  if (Lu) return Sa;
  Lu = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return Sa = e, Sa;
}
var Ca, Fu;
function m0() {
  if (Fu) return Ca;
  Fu = 1;
  var e = Co(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function i(o) {
    var s = this.__data__;
    if (e) {
      var a = s[o];
      return a === t ? void 0 : a;
    }
    return r.call(s, o) ? s[o] : void 0;
  }
  return Ca = i, Ca;
}
var ka, qu;
function v0() {
  if (qu) return ka;
  qu = 1;
  var e = Co(), t = Object.prototype, n = t.hasOwnProperty;
  function r(i) {
    var o = this.__data__;
    return e ? o[i] !== void 0 : n.call(o, i);
  }
  return ka = r, ka;
}
var xa, Hu;
function y0() {
  if (Hu) return xa;
  Hu = 1;
  var e = Co(), t = "__lodash_hash_undefined__";
  function n(r, i) {
    var o = this.__data__;
    return this.size += this.has(r) ? 0 : 1, o[r] = e && i === void 0 ? t : i, this;
  }
  return xa = n, xa;
}
var Ra, zu;
function b0() {
  if (zu) return Ra;
  zu = 1;
  var e = g0(), t = p0(), n = m0(), r = v0(), i = y0();
  function o(s) {
    var a = -1, l = s == null ? 0 : s.length;
    for (this.clear(); ++a < l; ) {
      var c = s[a];
      this.set(c[0], c[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = i, Ra = o, Ra;
}
var _a, $u;
function w0() {
  if ($u) return _a;
  $u = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return _a = e, _a;
}
var Ta, Nu;
function bc() {
  if (Nu) return Ta;
  Nu = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Ta = e, Ta;
}
var Ea, Bu;
function ko() {
  if (Bu) return Ea;
  Bu = 1;
  var e = bc();
  function t(n, r) {
    for (var i = n.length; i--; )
      if (e(n[i][0], r))
        return i;
    return -1;
  }
  return Ea = t, Ea;
}
var Ma, Wu;
function S0() {
  if (Wu) return Ma;
  Wu = 1;
  var e = ko(), t = Array.prototype, n = t.splice;
  function r(i) {
    var o = this.__data__, s = e(o, i);
    if (s < 0)
      return !1;
    var a = o.length - 1;
    return s == a ? o.pop() : n.call(o, s, 1), --this.size, !0;
  }
  return Ma = r, Ma;
}
var Ia, ju;
function C0() {
  if (ju) return Ia;
  ju = 1;
  var e = ko();
  function t(n) {
    var r = this.__data__, i = e(r, n);
    return i < 0 ? void 0 : r[i][1];
  }
  return Ia = t, Ia;
}
var Pa, Uu;
function k0() {
  if (Uu) return Pa;
  Uu = 1;
  var e = ko();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return Pa = t, Pa;
}
var Aa, Xu;
function x0() {
  if (Xu) return Aa;
  Xu = 1;
  var e = ko();
  function t(n, r) {
    var i = this.__data__, o = e(i, n);
    return o < 0 ? (++this.size, i.push([n, r])) : i[o][1] = r, this;
  }
  return Aa = t, Aa;
}
var Oa, Yu;
function xo() {
  if (Yu) return Oa;
  Yu = 1;
  var e = w0(), t = S0(), n = C0(), r = k0(), i = x0();
  function o(s) {
    var a = -1, l = s == null ? 0 : s.length;
    for (this.clear(); ++a < l; ) {
      var c = s[a];
      this.set(c[0], c[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = i, Oa = o, Oa;
}
var Da, Ku;
function wc() {
  if (Ku) return Da;
  Ku = 1;
  var e = gr(), t = An(), n = e(t, "Map");
  return Da = n, Da;
}
var La, Gu;
function R0() {
  if (Gu) return La;
  Gu = 1;
  var e = b0(), t = xo(), n = wc();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return La = r, La;
}
var Fa, Vu;
function _0() {
  if (Vu) return Fa;
  Vu = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return Fa = e, Fa;
}
var qa, Zu;
function Ro() {
  if (Zu) return qa;
  Zu = 1;
  var e = _0();
  function t(n, r) {
    var i = n.__data__;
    return e(r) ? i[typeof r == "string" ? "string" : "hash"] : i.map;
  }
  return qa = t, qa;
}
var Ha, Qu;
function T0() {
  if (Qu) return Ha;
  Qu = 1;
  var e = Ro();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return Ha = t, Ha;
}
var za, Ju;
function E0() {
  if (Ju) return za;
  Ju = 1;
  var e = Ro();
  function t(n) {
    return e(this, n).get(n);
  }
  return za = t, za;
}
var $a, ef;
function M0() {
  if (ef) return $a;
  ef = 1;
  var e = Ro();
  function t(n) {
    return e(this, n).has(n);
  }
  return $a = t, $a;
}
var Na, tf;
function I0() {
  if (tf) return Na;
  tf = 1;
  var e = Ro();
  function t(n, r) {
    var i = e(this, n), o = i.size;
    return i.set(n, r), this.size += i.size == o ? 0 : 1, this;
  }
  return Na = t, Na;
}
var Ba, nf;
function Sc() {
  if (nf) return Ba;
  nf = 1;
  var e = R0(), t = T0(), n = E0(), r = M0(), i = I0();
  function o(s) {
    var a = -1, l = s == null ? 0 : s.length;
    for (this.clear(); ++a < l; ) {
      var c = s[a];
      this.set(c[0], c[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = i, Ba = o, Ba;
}
var Wa, rf;
function P0() {
  if (rf) return Wa;
  rf = 1;
  var e = Sc(), t = "Expected a function";
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
  return n.Cache = e, Wa = n, Wa;
}
var ja, of;
function A0() {
  if (of) return ja;
  of = 1;
  var e = P0(), t = 500;
  function n(r) {
    var i = e(r, function(s) {
      return o.size === t && o.clear(), s;
    }), o = i.cache;
    return i;
  }
  return ja = n, ja;
}
var Ua, af;
function O0() {
  if (af) return Ua;
  af = 1;
  var e = A0(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(i) {
    var o = [];
    return i.charCodeAt(0) === 46 && o.push(""), i.replace(t, function(s, a, l, c) {
      o.push(l ? c.replace(n, "$1") : a || s);
    }), o;
  });
  return Ua = r, Ua;
}
var Xa, sf;
function D0() {
  if (sf) return Xa;
  sf = 1;
  function e(t, n) {
    for (var r = -1, i = t == null ? 0 : t.length, o = Array(i); ++r < i; )
      o[r] = n(t[r], r, t);
    return o;
  }
  return Xa = e, Xa;
}
var Ya, lf;
function L0() {
  if (lf) return Ya;
  lf = 1;
  var e = Ri(), t = D0(), n = Pn(), r = So(), i = e ? e.prototype : void 0, o = i ? i.toString : void 0;
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
  return Ya = s, Ya;
}
var Ka, cf;
function F0() {
  if (cf) return Ka;
  cf = 1;
  var e = L0();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return Ka = t, Ka;
}
var Ga, uf;
function vg() {
  if (uf) return Ga;
  uf = 1;
  var e = Pn(), t = yc(), n = O0(), r = F0();
  function i(o, s) {
    return e(o) ? o : t(o, s) ? [o] : n(r(o));
  }
  return Ga = i, Ga;
}
var Va, ff;
function q0() {
  if (ff) return Va;
  ff = 1;
  var e = _i(), t = Ti(), n = "[object Arguments]";
  function r(i) {
    return t(i) && e(i) == n;
  }
  return Va = r, Va;
}
var Za, df;
function Cc() {
  if (df) return Za;
  df = 1;
  var e = q0(), t = Ti(), n = Object.prototype, r = n.hasOwnProperty, i = n.propertyIsEnumerable, o = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(s) {
    return t(s) && r.call(s, "callee") && !i.call(s, "callee");
  };
  return Za = o, Za;
}
var Qa, hf;
function kc() {
  if (hf) return Qa;
  hf = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(r, i) {
    var o = typeof r;
    return i = i ?? e, !!i && (o == "number" || o != "symbol" && t.test(r)) && r > -1 && r % 1 == 0 && r < i;
  }
  return Qa = n, Qa;
}
var Ja, gf;
function xc() {
  if (gf) return Ja;
  gf = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return Ja = t, Ja;
}
var es, pf;
function _o() {
  if (pf) return es;
  pf = 1;
  var e = So();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return es = t, es;
}
var ts, mf;
function yg() {
  if (mf) return ts;
  mf = 1;
  var e = vg(), t = Cc(), n = Pn(), r = kc(), i = xc(), o = _o();
  function s(a, l, c) {
    l = e(l, a);
    for (var u = -1, h = l.length, f = !1; ++u < h; ) {
      var g = o(l[u]);
      if (!(f = a != null && c(a, g)))
        break;
      a = a[g];
    }
    return f || ++u != h ? f : (h = a == null ? 0 : a.length, !!h && i(h) && r(g, h) && (n(a) || t(a)));
  }
  return ts = s, ts;
}
var ns, vf;
function H0() {
  if (vf) return ns;
  vf = 1;
  var e = s0(), t = yg();
  function n(r, i) {
    return r != null && t(r, i, e);
  }
  return ns = n, ns;
}
var z0 = H0();
const $0 = /* @__PURE__ */ er(z0), fo = null, Rc = void 0;
var he;
(function(e) {
  e.Uri = "uri", e.Text = "text", e.Image = "image", e.RowID = "row-id", e.Number = "number", e.Bubble = "bubble", e.Boolean = "boolean", e.Loading = "loading", e.Markdown = "markdown", e.Drilldown = "drilldown", e.Protected = "protected", e.Custom = "custom";
})(he || (he = {}));
var yf;
(function(e) {
  e.HeaderRowID = "headerRowID", e.HeaderCode = "headerCode", e.HeaderNumber = "headerNumber", e.HeaderString = "headerString", e.HeaderBoolean = "headerBoolean", e.HeaderAudioUri = "headerAudioUri", e.HeaderVideoUri = "headerVideoUri", e.HeaderEmoji = "headerEmoji", e.HeaderImage = "headerImage", e.HeaderUri = "headerUri", e.HeaderPhone = "headerPhone", e.HeaderMarkdown = "headerMarkdown", e.HeaderDate = "headerDate", e.HeaderTime = "headerTime", e.HeaderEmail = "headerEmail", e.HeaderReference = "headerReference", e.HeaderIfThenElse = "headerIfThenElse", e.HeaderSingleValue = "headerSingleValue", e.HeaderLookup = "headerLookup", e.HeaderTextTemplate = "headerTextTemplate", e.HeaderMath = "headerMath", e.HeaderRollup = "headerRollup", e.HeaderJoinStrings = "headerJoinStrings", e.HeaderSplitString = "headerSplitString", e.HeaderGeoDistance = "headerGeoDistance", e.HeaderArray = "headerArray", e.RowOwnerOverlay = "rowOwnerOverlay", e.ProtectedColumnOverlay = "protectedColumnOverlay";
})(yf || (yf = {}));
var ho;
(function(e) {
  e.Triangle = "triangle", e.Dots = "dots";
})(ho || (ho = {}));
function eo(e) {
  return "width" in e && typeof e.width == "number";
}
async function bf(e) {
  return typeof e == "object" ? e : await e();
}
function qr(e) {
  return !(e.kind === he.Loading || e.kind === he.Bubble || e.kind === he.RowID || e.kind === he.Protected || e.kind === he.Drilldown);
}
function zr(e) {
  return e.kind === dn.Marker || e.kind === dn.NewRow;
}
function gi(e) {
  if (!qr(e) || e.kind === he.Image)
    return !1;
  if (e.kind === he.Text || e.kind === he.Number || e.kind === he.Markdown || e.kind === he.Uri || e.kind === he.Custom || e.kind === he.Boolean)
    return e.readonly !== !0;
  ki(e, "A cell was passed with an invalid kind");
}
function N0(e) {
  return $0(e, "editor");
}
function sc(e) {
  return !(e.readonly ?? !1);
}
var dn;
(function(e) {
  e.NewRow = "new-row", e.Marker = "marker";
})(dn || (dn = {}));
function B0(e) {
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
let wf;
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
    const n = typeof t == "number" ? [t, t + 1] : t, r = B0([...this.items, n]);
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
be(zn, "empty", () => wf ?? (wf = new zn([]))), be(zn, "fromSingleSelection", (t) => zn.empty().add(t));
let at = zn;
function W0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var j0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, rs = /* @__PURE__ */ W0(
  function(e) {
    return j0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), U0 = function() {
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
}, Sf = U0, vi = {}, X0 = (e) => e.toUpperCase() === e, Y0 = (e) => (t) => e.indexOf(t) === -1, bg = (e, t) => {
  const n = {};
  return Object.keys(e).filter(Y0(t)).forEach((r) => {
    n[r] = e[r];
  }), n;
};
function K0(e, t, n) {
  const r = bg(t, n);
  if (!e) {
    const i = typeof rs == "function" ? { default: rs } : rs;
    Object.keys(r).forEach((o) => {
      i.default(o) || delete r[o];
    });
  }
  return r;
}
var G0 = (e, t) => {
  if (vi.NODE_ENV !== "production") {
    if (typeof e == "string" || typeof e == "number" && isFinite(e))
      return;
    const n = typeof e == "object" ? JSON.stringify(e) : String(e);
    console.warn(
      `An interpolation evaluated to '${n}' in the component '${t}', which is probably a mistake. You should explicitly cast or transform the value to a string.`
    );
  }
}, V0 = 0;
function Cf(e) {
  var t;
  let n = "";
  return vi.NODE_ENV === "test" && (n += `mocked-styled-${V0++}`, (t = e == null ? void 0 : e.__linaria) != null && t.className && (n += ` ${e.__linaria.className}`)), (r) => {
    if (vi.NODE_ENV !== "production" && vi.NODE_ENV !== "test" && Array.isArray(r))
      throw new Error(
        'Using the "styled" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly. See https://github.com/callstack/linaria#setup'
      );
    const i = (s, a) => {
      const { as: l = e, class: c = n } = s, u = r.propsAsIs === void 0 ? !(typeof l == "string" && l.indexOf("-") === -1 && !X0(l[0])) : r.propsAsIs, h = K0(u, s, [
        "as",
        "class"
      ]);
      h.ref = a, h.className = r.atomic ? Sf(r.class, h.className || c) : Sf(h.className || c, r.class);
      const { vars: f } = r;
      if (f) {
        const g = {};
        for (const k in f) {
          const I = f[k], y = I[0], S = I[1] || "", P = typeof y == "function" ? y(s) : y;
          G0(P, r.name), g[`--${k}`] = `${P}${S}`;
        }
        const d = h.style || {}, v = Object.keys(d);
        v.length > 0 && v.forEach((k) => {
          g[k] = d[k];
        }), h.style = g;
      }
      return e.__linaria && e !== l ? (h.as = l, St.createElement(e, h)) : St.createElement(l, h);
    }, o = St.forwardRef ? St.forwardRef(i) : (s) => {
      const a = bg(s, ["innerRef"]);
      return i(a, s.innerRef);
    };
    return o.displayName = r.name, o.__linaria = {
      className: r.class || n,
      extends: e
    }, o;
  };
}
var an = vi.NODE_ENV !== "production" ? new Proxy(Cf, {
  get(e, t) {
    return e(t);
  }
}) : Cf;
const Z0 = /* @__PURE__ */ an("div")({
  name: "ImageOverlayEditorStyle",
  class: "gdg-i2iowwq",
  propsAsIs: !1
});
var is = {}, ni = {}, to = {}, no = {}, ro = { exports: {} }, io = { exports: {} }, it = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kf;
function Q0() {
  if (kf) return it;
  kf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function S(b) {
    if (typeof b == "object" && b !== null) {
      var M = b.$$typeof;
      switch (M) {
        case t:
          switch (b = b.type, b) {
            case l:
            case c:
            case r:
            case o:
            case i:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case a:
                case u:
                case d:
                case g:
                case s:
                  return b;
                default:
                  return M;
              }
          }
        case n:
          return M;
      }
    }
  }
  function P(b) {
    return S(b) === c;
  }
  return it.AsyncMode = l, it.ConcurrentMode = c, it.ContextConsumer = a, it.ContextProvider = s, it.Element = t, it.ForwardRef = u, it.Fragment = r, it.Lazy = d, it.Memo = g, it.Portal = n, it.Profiler = o, it.StrictMode = i, it.Suspense = h, it.isAsyncMode = function(b) {
    return P(b) || S(b) === l;
  }, it.isConcurrentMode = P, it.isContextConsumer = function(b) {
    return S(b) === a;
  }, it.isContextProvider = function(b) {
    return S(b) === s;
  }, it.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, it.isForwardRef = function(b) {
    return S(b) === u;
  }, it.isFragment = function(b) {
    return S(b) === r;
  }, it.isLazy = function(b) {
    return S(b) === d;
  }, it.isMemo = function(b) {
    return S(b) === g;
  }, it.isPortal = function(b) {
    return S(b) === n;
  }, it.isProfiler = function(b) {
    return S(b) === o;
  }, it.isStrictMode = function(b) {
    return S(b) === i;
  }, it.isSuspense = function(b) {
    return S(b) === h;
  }, it.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === c || b === o || b === i || b === h || b === f || typeof b == "object" && b !== null && (b.$$typeof === d || b.$$typeof === g || b.$$typeof === s || b.$$typeof === a || b.$$typeof === u || b.$$typeof === k || b.$$typeof === I || b.$$typeof === y || b.$$typeof === v);
  }, it.typeOf = S, it;
}
var ot = {}, xf;
function J0() {
  if (xf) return ot;
  xf = 1;
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
    var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, c = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, g = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, k = t ? Symbol.for("react.block") : 60121, I = t ? Symbol.for("react.fundamental") : 60117, y = t ? Symbol.for("react.responder") : 60118, S = t ? Symbol.for("react.scope") : 60119;
    function P(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === i || V === u || V === s || V === o || V === f || V === g || typeof V == "object" && V !== null && (V.$$typeof === v || V.$$typeof === d || V.$$typeof === a || V.$$typeof === l || V.$$typeof === h || V.$$typeof === I || V.$$typeof === y || V.$$typeof === S || V.$$typeof === k);
    }
    function b(V) {
      if (typeof V == "object" && V !== null) {
        var Ee = V.$$typeof;
        switch (Ee) {
          case n:
            var Ae = V.type;
            switch (Ae) {
              case c:
              case u:
              case i:
              case s:
              case o:
              case f:
                return Ae;
              default:
                var ft = Ae && Ae.$$typeof;
                switch (ft) {
                  case l:
                  case h:
                  case v:
                  case d:
                  case a:
                    return ft;
                  default:
                    return Ee;
                }
            }
          case r:
            return Ee;
        }
      }
    }
    var M = c, O = u, E = l, _ = a, F = n, R = h, w = i, x = v, T = d, C = r, N = s, H = o, Y = f, se = !1;
    function te(V) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), A(V) || b(V) === c;
    }
    function A(V) {
      return b(V) === u;
    }
    function $(V) {
      return b(V) === l;
    }
    function Q(V) {
      return b(V) === a;
    }
    function ie(V) {
      return typeof V == "object" && V !== null && V.$$typeof === n;
    }
    function z(V) {
      return b(V) === h;
    }
    function le(V) {
      return b(V) === i;
    }
    function oe(V) {
      return b(V) === v;
    }
    function re(V) {
      return b(V) === d;
    }
    function pe(V) {
      return b(V) === r;
    }
    function we(V) {
      return b(V) === s;
    }
    function Ce(V) {
      return b(V) === o;
    }
    function Be(V) {
      return b(V) === f;
    }
    ot.AsyncMode = M, ot.ConcurrentMode = O, ot.ContextConsumer = E, ot.ContextProvider = _, ot.Element = F, ot.ForwardRef = R, ot.Fragment = w, ot.Lazy = x, ot.Memo = T, ot.Portal = C, ot.Profiler = N, ot.StrictMode = H, ot.Suspense = Y, ot.isAsyncMode = te, ot.isConcurrentMode = A, ot.isContextConsumer = $, ot.isContextProvider = Q, ot.isElement = ie, ot.isForwardRef = z, ot.isFragment = le, ot.isLazy = oe, ot.isMemo = re, ot.isPortal = pe, ot.isProfiler = we, ot.isStrictMode = Ce, ot.isSuspense = Be, ot.isValidElementType = P, ot.typeOf = b;
  }(), ot;
}
var Rf;
function wg() {
  if (Rf) return io.exports;
  Rf = 1;
  var e = {};
  return e.NODE_ENV === "production" ? io.exports = Q0() : io.exports = J0(), io.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var os, _f;
function em() {
  if (_f) return os;
  _f = 1;
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
  return os = i() ? Object.assign : function(o, s) {
    for (var a, l = r(o), c, u = 1; u < arguments.length; u++) {
      a = Object(arguments[u]);
      for (var h in a)
        t.call(a, h) && (l[h] = a[h]);
      if (e) {
        c = e(a);
        for (var f = 0; f < c.length; f++)
          n.call(a, c[f]) && (l[c[f]] = a[c[f]]);
      }
    }
    return l;
  }, os;
}
var as, Tf;
function _c() {
  if (Tf) return as;
  Tf = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return as = e, as;
}
var ss, Ef;
function Sg() {
  return Ef || (Ef = 1, ss = Function.call.bind(Object.prototype.hasOwnProperty)), ss;
}
var ls, Mf;
function tm() {
  if (Mf) return ls;
  Mf = 1;
  var e = {}, t = function() {
  };
  if (e.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ _c(), r = {}, i = /* @__PURE__ */ Sg();
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
          var f;
          try {
            if (typeof s[h] != "function") {
              var g = Error(
                (c || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            f = s[h](a, h, c, l, null, n);
          } catch (v) {
            f = v;
          }
          if (f && !(f instanceof Error) && t(
            (c || "React class") + ": type specification of " + l + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var d = u ? u() : "";
            t(
              "Failed " + l + " type: " + f.message + (d ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    e.NODE_ENV !== "production" && (r = {});
  }, ls = o, ls;
}
var cs, If;
function nm() {
  if (If) return cs;
  If = 1;
  var e = {}, t = wg(), n = em(), r = /* @__PURE__ */ _c(), i = /* @__PURE__ */ Sg(), o = /* @__PURE__ */ tm(), s = function() {
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
  return cs = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function f(A) {
      var $ = A && (u && A[u] || A[h]);
      if (typeof $ == "function")
        return $;
    }
    var g = "<<anonymous>>", d = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: S(),
      arrayOf: P,
      element: b(),
      elementType: M(),
      instanceOf: O,
      node: R(),
      objectOf: _,
      oneOf: E,
      oneOfType: F,
      shape: x,
      exact: T
    };
    function v(A, $) {
      return A === $ ? A !== 0 || 1 / A === 1 / $ : A !== A && $ !== $;
    }
    function k(A, $) {
      this.message = A, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    k.prototype = Error.prototype;
    function I(A) {
      if (e.NODE_ENV !== "production")
        var $ = {}, Q = 0;
      function ie(le, oe, re, pe, we, Ce, Be) {
        if (pe = pe || g, Ce = Ce || re, Be !== r) {
          if (c) {
            var V = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw V.name = "Invariant Violation", V;
          } else if (e.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = pe + ":" + re;
            !$[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            Q < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Ce + "` prop on `" + pe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[Ee] = !0, Q++);
          }
        }
        return oe[re] == null ? le ? oe[re] === null ? new k("The " + we + " `" + Ce + "` is marked as required " + ("in `" + pe + "`, but its value is `null`.")) : new k("The " + we + " `" + Ce + "` is marked as required in " + ("`" + pe + "`, but its value is `undefined`.")) : null : A(oe, re, pe, we, Ce);
      }
      var z = ie.bind(null, !1);
      return z.isRequired = ie.bind(null, !0), z;
    }
    function y(A) {
      function $(Q, ie, z, le, oe, re) {
        var pe = Q[ie], we = H(pe);
        if (we !== A) {
          var Ce = Y(pe);
          return new k(
            "Invalid " + le + " `" + oe + "` of type " + ("`" + Ce + "` supplied to `" + z + "`, expected ") + ("`" + A + "`."),
            { expectedType: A }
          );
        }
        return null;
      }
      return I($);
    }
    function S() {
      return I(a);
    }
    function P(A) {
      function $(Q, ie, z, le, oe) {
        if (typeof A != "function")
          return new k("Property `" + oe + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var re = Q[ie];
        if (!Array.isArray(re)) {
          var pe = H(re);
          return new k("Invalid " + le + " `" + oe + "` of type " + ("`" + pe + "` supplied to `" + z + "`, expected an array."));
        }
        for (var we = 0; we < re.length; we++) {
          var Ce = A(re, we, z, le, oe + "[" + we + "]", r);
          if (Ce instanceof Error)
            return Ce;
        }
        return null;
      }
      return I($);
    }
    function b() {
      function A($, Q, ie, z, le) {
        var oe = $[Q];
        if (!l(oe)) {
          var re = H(oe);
          return new k("Invalid " + z + " `" + le + "` of type " + ("`" + re + "` supplied to `" + ie + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(A);
    }
    function M() {
      function A($, Q, ie, z, le) {
        var oe = $[Q];
        if (!t.isValidElementType(oe)) {
          var re = H(oe);
          return new k("Invalid " + z + " `" + le + "` of type " + ("`" + re + "` supplied to `" + ie + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(A);
    }
    function O(A) {
      function $(Q, ie, z, le, oe) {
        if (!(Q[ie] instanceof A)) {
          var re = A.name || g, pe = te(Q[ie]);
          return new k("Invalid " + le + " `" + oe + "` of type " + ("`" + pe + "` supplied to `" + z + "`, expected ") + ("instance of `" + re + "`."));
        }
        return null;
      }
      return I($);
    }
    function E(A) {
      if (!Array.isArray(A))
        return e.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function $(Q, ie, z, le, oe) {
        for (var re = Q[ie], pe = 0; pe < A.length; pe++)
          if (v(re, A[pe]))
            return null;
        var we = JSON.stringify(A, function(Be, V) {
          var Ee = Y(V);
          return Ee === "symbol" ? String(V) : V;
        });
        return new k("Invalid " + le + " `" + oe + "` of value `" + String(re) + "` " + ("supplied to `" + z + "`, expected one of " + we + "."));
      }
      return I($);
    }
    function _(A) {
      function $(Q, ie, z, le, oe) {
        if (typeof A != "function")
          return new k("Property `" + oe + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var re = Q[ie], pe = H(re);
        if (pe !== "object")
          return new k("Invalid " + le + " `" + oe + "` of type " + ("`" + pe + "` supplied to `" + z + "`, expected an object."));
        for (var we in re)
          if (i(re, we)) {
            var Ce = A(re, we, z, le, oe + "." + we, r);
            if (Ce instanceof Error)
              return Ce;
          }
        return null;
      }
      return I($);
    }
    function F(A) {
      if (!Array.isArray(A))
        return e.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var $ = 0; $ < A.length; $++) {
        var Q = A[$];
        if (typeof Q != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(Q) + " at index " + $ + "."
          ), a;
      }
      function ie(z, le, oe, re, pe) {
        for (var we = [], Ce = 0; Ce < A.length; Ce++) {
          var Be = A[Ce], V = Be(z, le, oe, re, pe, r);
          if (V == null)
            return null;
          V.data && i(V.data, "expectedType") && we.push(V.data.expectedType);
        }
        var Ee = we.length > 0 ? ", expected one of type [" + we.join(", ") + "]" : "";
        return new k("Invalid " + re + " `" + pe + "` supplied to " + ("`" + oe + "`" + Ee + "."));
      }
      return I(ie);
    }
    function R() {
      function A($, Q, ie, z, le) {
        return C($[Q]) ? null : new k("Invalid " + z + " `" + le + "` supplied to " + ("`" + ie + "`, expected a ReactNode."));
      }
      return I(A);
    }
    function w(A, $, Q, ie, z) {
      return new k(
        (A || "React class") + ": " + $ + " type `" + Q + "." + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function x(A) {
      function $(Q, ie, z, le, oe) {
        var re = Q[ie], pe = H(re);
        if (pe !== "object")
          return new k("Invalid " + le + " `" + oe + "` of type `" + pe + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var we in A) {
          var Ce = A[we];
          if (typeof Ce != "function")
            return w(z, le, oe, we, Y(Ce));
          var Be = Ce(re, we, z, le, oe + "." + we, r);
          if (Be)
            return Be;
        }
        return null;
      }
      return I($);
    }
    function T(A) {
      function $(Q, ie, z, le, oe) {
        var re = Q[ie], pe = H(re);
        if (pe !== "object")
          return new k("Invalid " + le + " `" + oe + "` of type `" + pe + "` " + ("supplied to `" + z + "`, expected `object`."));
        var we = n({}, Q[ie], A);
        for (var Ce in we) {
          var Be = A[Ce];
          if (i(A, Ce) && typeof Be != "function")
            return w(z, le, oe, Ce, Y(Be));
          if (!Be)
            return new k(
              "Invalid " + le + " `" + oe + "` key `" + Ce + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(Q[ie], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(A), null, "  ")
            );
          var V = Be(re, Ce, z, le, oe + "." + Ce, r);
          if (V)
            return V;
        }
        return null;
      }
      return I($);
    }
    function C(A) {
      switch (typeof A) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !A;
        case "object":
          if (Array.isArray(A))
            return A.every(C);
          if (A === null || l(A))
            return !0;
          var $ = f(A);
          if ($) {
            var Q = $.call(A), ie;
            if ($ !== A.entries) {
              for (; !(ie = Q.next()).done; )
                if (!C(ie.value))
                  return !1;
            } else
              for (; !(ie = Q.next()).done; ) {
                var z = ie.value;
                if (z && !C(z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function N(A, $) {
      return A === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function H(A) {
      var $ = typeof A;
      return Array.isArray(A) ? "array" : A instanceof RegExp ? "object" : N($, A) ? "symbol" : $;
    }
    function Y(A) {
      if (typeof A > "u" || A === null)
        return "" + A;
      var $ = H(A);
      if ($ === "object") {
        if (A instanceof Date)
          return "date";
        if (A instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function se(A) {
      var $ = Y(A);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function te(A) {
      return !A.constructor || !A.constructor.name ? g : A.constructor.name;
    }
    return d.checkPropTypes = o, d.resetWarningCache = o.resetWarningCache, d.PropTypes = d, d;
  }, cs;
}
var us, Pf;
function rm() {
  if (Pf) return us;
  Pf = 1;
  var e = /* @__PURE__ */ _c();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, us = function() {
    function r(s, a, l, c, u, h) {
      if (h !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
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
  }, us;
}
var Af;
function im() {
  if (Af) return ro.exports;
  Af = 1;
  var e = {};
  if (e.NODE_ENV !== "production") {
    var t = wg(), n = !0;
    ro.exports = /* @__PURE__ */ nm()(t.isElement, n);
  } else
    ro.exports = /* @__PURE__ */ rm()();
  return ro.exports;
}
var Of;
function om() {
  return Of || (Of = 1, function(e) {
    (function(t, n) {
      n(e, St, /* @__PURE__ */ im());
    })(no, function(t, n, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.setHasSupportToCaptureOption = d;
      var i = s(n), o = s(r);
      function s(y) {
        return y && y.__esModule ? y : {
          default: y
        };
      }
      var a = Object.assign || function(y) {
        for (var S = 1; S < arguments.length; S++) {
          var P = arguments[S];
          for (var b in P)
            Object.prototype.hasOwnProperty.call(P, b) && (y[b] = P[b]);
        }
        return y;
      };
      function l(y, S) {
        var P = {};
        for (var b in y)
          S.indexOf(b) >= 0 || Object.prototype.hasOwnProperty.call(y, b) && (P[b] = y[b]);
        return P;
      }
      function c(y, S) {
        if (!(y instanceof S))
          throw new TypeError("Cannot call a class as a function");
      }
      var u = /* @__PURE__ */ function() {
        function y(S, P) {
          for (var b = 0; b < P.length; b++) {
            var M = P[b];
            M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(S, M.key, M);
          }
        }
        return function(S, P, b) {
          return P && y(S.prototype, P), b && y(S, b), S;
        };
      }();
      function h(y, S) {
        if (!y)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return S && (typeof S == "object" || typeof S == "function") ? S : y;
      }
      function f(y, S) {
        if (typeof S != "function" && S !== null)
          throw new TypeError("Super expression must either be null or a function, not " + typeof S);
        y.prototype = Object.create(S && S.prototype, {
          constructor: {
            value: y,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), S && (Object.setPrototypeOf ? Object.setPrototypeOf(y, S) : y.__proto__ = S);
      }
      var g = !1;
      function d(y) {
        g = y;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function() {
          d(!0);
        } }));
      } catch {
      }
      function v() {
        var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: !0 };
        return g ? y : y.capture;
      }
      function k(y) {
        if ("touches" in y) {
          var S = y.touches[0], P = S.pageX, b = S.pageY;
          return { x: P, y: b };
        }
        var M = y.screenX, O = y.screenY;
        return { x: M, y: O };
      }
      var I = function(y) {
        f(S, y);
        function S() {
          var P;
          c(this, S);
          for (var b = arguments.length, M = Array(b), O = 0; O < b; O++)
            M[O] = arguments[O];
          var E = h(this, (P = S.__proto__ || Object.getPrototypeOf(S)).call.apply(P, [this].concat(M)));
          return E._handleSwipeStart = E._handleSwipeStart.bind(E), E._handleSwipeMove = E._handleSwipeMove.bind(E), E._handleSwipeEnd = E._handleSwipeEnd.bind(E), E._onMouseDown = E._onMouseDown.bind(E), E._onMouseMove = E._onMouseMove.bind(E), E._onMouseUp = E._onMouseUp.bind(E), E._setSwiperRef = E._setSwiperRef.bind(E), E;
        }
        return u(S, [{
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
          value: function(b) {
            this.props.allowMouseEvents && (this.mouseDown = !0, document.addEventListener("mouseup", this._onMouseUp), document.addEventListener("mousemove", this._onMouseMove), this._handleSwipeStart(b));
          }
        }, {
          key: "_onMouseMove",
          value: function(b) {
            this.mouseDown && this._handleSwipeMove(b);
          }
        }, {
          key: "_onMouseUp",
          value: function(b) {
            this.mouseDown = !1, document.removeEventListener("mouseup", this._onMouseUp), document.removeEventListener("mousemove", this._onMouseMove), this._handleSwipeEnd(b);
          }
        }, {
          key: "_handleSwipeStart",
          value: function(b) {
            var M = k(b), O = M.x, E = M.y;
            this.moveStart = { x: O, y: E }, this.props.onSwipeStart(b);
          }
        }, {
          key: "_handleSwipeMove",
          value: function(b) {
            if (this.moveStart) {
              var M = k(b), O = M.x, E = M.y, _ = O - this.moveStart.x, F = E - this.moveStart.y;
              this.moving = !0;
              var R = this.props.onSwipeMove({
                x: _,
                y: F
              }, b);
              R && b.cancelable && b.preventDefault(), this.movePosition = { deltaX: _, deltaY: F };
            }
          }
        }, {
          key: "_handleSwipeEnd",
          value: function(b) {
            this.props.onSwipeEnd(b);
            var M = this.props.tolerance;
            this.moving && this.movePosition && (this.movePosition.deltaX < -M ? this.props.onSwipeLeft(1, b) : this.movePosition.deltaX > M && this.props.onSwipeRight(1, b), this.movePosition.deltaY < -M ? this.props.onSwipeUp(1, b) : this.movePosition.deltaY > M && this.props.onSwipeDown(1, b)), this.moveStart = null, this.moving = !1, this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function(b) {
            this.swiper = b, this.props.innerRef(b);
          }
        }, {
          key: "render",
          value: function() {
            var b = this.props;
            b.tagName;
            var M = b.className, O = b.style, E = b.children;
            b.allowMouseEvents, b.onSwipeUp, b.onSwipeDown, b.onSwipeLeft, b.onSwipeRight, b.onSwipeStart, b.onSwipeMove, b.onSwipeEnd, b.innerRef, b.tolerance;
            var _ = l(b, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return i.default.createElement(
              this.props.tagName,
              a({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className: M,
                style: O
              }, _),
              E
            );
          }
        }]), S;
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
  }(no)), no;
}
var Df;
function Cg() {
  return Df || (Df = 1, function(e) {
    (function(t, n) {
      n(e, om());
    })(to, function(t, n) {
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
  }(to)), to;
}
var ri = {}, fs = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Lf;
function am() {
  return Lf || (Lf = 1, function(e) {
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
  }(fs)), fs.exports;
}
var Ff;
function kg() {
  if (Ff) return ri;
  Ff = 1, Object.defineProperty(ri, "__esModule", {
    value: !0
  }), ri.default = void 0;
  var e = t(am());
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
  return ri.default = r, ri;
}
var ii = {}, oi = {}, qf;
function sm() {
  if (qf) return oi;
  qf = 1, Object.defineProperty(oi, "__esModule", {
    value: !0
  }), oi.outerWidth = void 0;
  var e = function(n) {
    var r = n.offsetWidth, i = getComputedStyle(n);
    return r += parseInt(i.marginLeft) + parseInt(i.marginRight), r;
  };
  return oi.outerWidth = e, oi;
}
var ai = {}, Hf;
function Tc() {
  if (Hf) return ai;
  Hf = 1, Object.defineProperty(ai, "__esModule", {
    value: !0
  }), ai.default = void 0;
  var e = function(n, r, i) {
    var o = n === 0 ? n : n + r, s = i === "horizontal" ? [o, 0, 0] : [0, o, 0], a = "translate3d", l = "(" + s.join(",") + ")";
    return a + l;
  };
  return ai.default = e, ai;
}
var si = {}, zf;
function xg() {
  if (zf) return si;
  zf = 1, Object.defineProperty(si, "__esModule", {
    value: !0
  }), si.default = void 0;
  var e = function() {
    return window;
  };
  return si.default = e, si;
}
var $f;
function Rg() {
  if ($f) return ii;
  $f = 1, Object.defineProperty(ii, "__esModule", {
    value: !0
  }), ii.default = void 0;
  var e = l(St), t = s(kg()), n = sm(), r = s(Tc()), i = s(Cg()), o = s(xg());
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
    var _ = a();
    if (_ && _.has(E))
      return _.get(E);
    var F = {}, R = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in E)
      if (Object.prototype.hasOwnProperty.call(E, w)) {
        var x = R ? Object.getOwnPropertyDescriptor(E, w) : null;
        x && (x.get || x.set) ? Object.defineProperty(F, w, x) : F[w] = E[w];
      }
    return F.default = E, _ && _.set(E, F), F;
  }
  function c(E) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? c = function(F) {
      return typeof F;
    } : c = function(F) {
      return F && typeof Symbol == "function" && F.constructor === Symbol && F !== Symbol.prototype ? "symbol" : typeof F;
    }, c(E);
  }
  function u() {
    return u = Object.assign || function(E) {
      for (var _ = 1; _ < arguments.length; _++) {
        var F = arguments[_];
        for (var R in F)
          Object.prototype.hasOwnProperty.call(F, R) && (E[R] = F[R]);
      }
      return E;
    }, u.apply(this, arguments);
  }
  function h(E, _) {
    if (!(E instanceof _))
      throw new TypeError("Cannot call a class as a function");
  }
  function f(E, _) {
    for (var F = 0; F < _.length; F++) {
      var R = _[F];
      R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(E, R.key, R);
    }
  }
  function g(E, _, F) {
    return _ && f(E.prototype, _), E;
  }
  function d(E, _) {
    if (typeof _ != "function" && _ !== null)
      throw new TypeError("Super expression must either be null or a function");
    E.prototype = Object.create(_ && _.prototype, { constructor: { value: E, writable: !0, configurable: !0 } }), _ && v(E, _);
  }
  function v(E, _) {
    return v = Object.setPrototypeOf || function(R, w) {
      return R.__proto__ = w, R;
    }, v(E, _);
  }
  function k(E) {
    var _ = S();
    return function() {
      var R = P(E), w;
      if (_) {
        var x = P(this).constructor;
        w = Reflect.construct(R, arguments, x);
      } else
        w = R.apply(this, arguments);
      return I(this, w);
    };
  }
  function I(E, _) {
    return _ && (c(_) === "object" || typeof _ == "function") ? _ : y(E);
  }
  function y(E) {
    if (E === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return E;
  }
  function S() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function P(E) {
    return P = Object.setPrototypeOf ? Object.getPrototypeOf : function(F) {
      return F.__proto__ || Object.getPrototypeOf(F);
    }, P(E);
  }
  function b(E, _, F) {
    return _ in E ? Object.defineProperty(E, _, { value: F, enumerable: !0, configurable: !0, writable: !0 }) : E[_] = F, E;
  }
  var M = function(_) {
    return _.hasOwnProperty("key");
  }, O = /* @__PURE__ */ function(E) {
    d(F, E);
    var _ = k(F);
    function F(R) {
      var w;
      return h(this, F), w = _.call(this, R), b(y(w), "itemsWrapperRef", void 0), b(y(w), "itemsListRef", void 0), b(y(w), "thumbsRef", void 0), b(y(w), "setItemsWrapperRef", function(x) {
        w.itemsWrapperRef = x;
      }), b(y(w), "setItemsListRef", function(x) {
        w.itemsListRef = x;
      }), b(y(w), "setThumbsRef", function(x, T) {
        w.thumbsRef || (w.thumbsRef = []), w.thumbsRef[T] = x;
      }), b(y(w), "updateSizes", function() {
        if (!(!w.props.children || !w.itemsWrapperRef || !w.thumbsRef)) {
          var x = e.Children.count(w.props.children), T = w.itemsWrapperRef.clientWidth, C = w.props.thumbWidth ? w.props.thumbWidth : (0, n.outerWidth)(w.thumbsRef[0]), N = Math.floor(T / C), H = N < x, Y = H ? x - N : 0;
          w.setState(function(se, te) {
            return {
              itemSize: C,
              visibleItems: N,
              firstItem: H ? w.getFirstItem(te.selectedItem) : 0,
              lastPosition: Y,
              showArrows: H
            };
          });
        }
      }), b(y(w), "handleClickItem", function(x, T, C) {
        if (!M(C) || C.key === "Enter") {
          var N = w.props.onSelectItem;
          typeof N == "function" && N(x, T);
        }
      }), b(y(w), "onSwipeStart", function() {
        w.setState({
          swiping: !0
        });
      }), b(y(w), "onSwipeEnd", function() {
        w.setState({
          swiping: !1
        });
      }), b(y(w), "onSwipeMove", function(x) {
        var T = x.x;
        if (!w.state.itemSize || !w.itemsWrapperRef || !w.state.visibleItems)
          return !1;
        var C = 0, N = e.Children.count(w.props.children), H = -(w.state.firstItem * 100) / w.state.visibleItems, Y = Math.max(N - w.state.visibleItems, 0), se = -Y * 100 / w.state.visibleItems;
        H === C && T > 0 && (T = 0), H === se && T < 0 && (T = 0);
        var te = w.itemsWrapperRef.clientWidth, A = H + 100 / (te / T);
        return w.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function($) {
          w.itemsListRef.style[$] = (0, r.default)(A, "%", w.props.axis);
        }), !0;
      }), b(y(w), "slideRight", function(x) {
        w.moveTo(w.state.firstItem - (typeof x == "number" ? x : 1));
      }), b(y(w), "slideLeft", function(x) {
        w.moveTo(w.state.firstItem + (typeof x == "number" ? x : 1));
      }), b(y(w), "moveTo", function(x) {
        x = x < 0 ? 0 : x, x = x >= w.state.lastPosition ? w.state.lastPosition : x, w.setState({
          firstItem: x
        });
      }), w.state = {
        selectedItem: R.selectedItem,
        swiping: !1,
        showArrows: !1,
        firstItem: 0,
        visibleItems: 0,
        lastPosition: 0
      }, w;
    }
    return g(F, [{
      key: "componentDidMount",
      value: function() {
        this.setupThumbs();
      }
    }, {
      key: "componentDidUpdate",
      value: function(w) {
        this.props.selectedItem !== this.state.selectedItem && this.setState({
          selectedItem: this.props.selectedItem,
          firstItem: this.getFirstItem(this.props.selectedItem)
        }), this.props.children !== w.children && this.updateSizes();
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
      value: function(w) {
        var x = w;
        return w >= this.state.lastPosition && (x = this.state.lastPosition), w < this.state.firstItem + this.state.visibleItems && (x = this.state.firstItem), w < this.state.firstItem && (x = w), x;
      }
    }, {
      key: "renderItems",
      value: function() {
        var w = this;
        return this.props.children.map(function(x, T) {
          var C = t.default.ITEM(!1, T === w.state.selectedItem), N = {
            key: T,
            ref: function(Y) {
              return w.setThumbsRef(Y, T);
            },
            className: C,
            onClick: w.handleClickItem.bind(w, T, w.props.children[T]),
            onKeyDown: w.handleClickItem.bind(w, T, w.props.children[T]),
            "aria-label": "".concat(w.props.labels.item, " ").concat(T + 1),
            style: {
              width: w.props.thumbWidth
            }
          };
          return /* @__PURE__ */ e.default.createElement("li", u({}, N, {
            role: "button",
            tabIndex: 0
          }), x);
        });
      }
    }, {
      key: "render",
      value: function() {
        var w = this;
        if (!this.props.children)
          return null;
        var x = e.Children.count(this.props.children) > 1, T = this.state.showArrows && this.state.firstItem > 0, C = this.state.showArrows && this.state.firstItem < this.state.lastPosition, N = {}, H = -this.state.firstItem * (this.state.itemSize || 0), Y = (0, r.default)(H, "px", this.props.axis), se = this.props.transitionTime + "ms";
        return N = {
          WebkitTransform: Y,
          MozTransform: Y,
          MsTransform: Y,
          OTransform: Y,
          transform: Y,
          msTransform: Y,
          WebkitTransitionDuration: se,
          MozTransitionDuration: se,
          MsTransitionDuration: se,
          OTransitionDuration: se,
          transitionDuration: se,
          msTransitionDuration: se
        }, /* @__PURE__ */ e.default.createElement("div", {
          className: t.default.CAROUSEL(!1)
        }, /* @__PURE__ */ e.default.createElement("div", {
          className: t.default.WRAPPER(!1),
          ref: this.setItemsWrapperRef
        }, /* @__PURE__ */ e.default.createElement("button", {
          type: "button",
          className: t.default.ARROW_PREV(!T),
          onClick: function() {
            return w.slideRight();
          },
          "aria-label": this.props.labels.leftArrow
        }), x ? /* @__PURE__ */ e.default.createElement(i.default, {
          tagName: "ul",
          className: t.default.SLIDER(!1, this.state.swiping),
          onSwipeLeft: this.slideLeft,
          onSwipeRight: this.slideRight,
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: N,
          innerRef: this.setItemsListRef,
          allowMouseEvents: this.props.emulateTouch
        }, this.renderItems()) : /* @__PURE__ */ e.default.createElement("ul", {
          className: t.default.SLIDER(!1, this.state.swiping),
          ref: function(A) {
            return w.setItemsListRef(A);
          },
          style: N
        }, this.renderItems()), /* @__PURE__ */ e.default.createElement("button", {
          type: "button",
          className: t.default.ARROW_NEXT(!C),
          onClick: function() {
            return w.slideLeft();
          },
          "aria-label": this.props.labels.rightArrow
        })));
      }
    }]), F;
  }(e.Component);
  return ii.default = O, b(O, "displayName", "Thumbs"), b(O, "defaultProps", {
    axis: "horizontal",
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    selectedItem: 0,
    thumbWidth: 80,
    transitionTime: 350
  }), ii;
}
var li = {}, Nf;
function lm() {
  if (Nf) return li;
  Nf = 1, Object.defineProperty(li, "__esModule", {
    value: !0
  }), li.default = void 0;
  var e = function() {
    return document;
  };
  return li.default = e, li;
}
var tn = {}, Bf;
function _g() {
  if (Bf) return tn;
  Bf = 1, Object.defineProperty(tn, "__esModule", {
    value: !0
  }), tn.setPosition = tn.getPosition = tn.isKeyboardEvent = tn.defaultStatusFormatter = tn.noop = void 0;
  var e = St, t = n(Tc());
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
      var f = -c * u.centerSlidePercentage, g = h - 1;
      return c && (c !== g || u.infiniteLoop) ? f += (100 - u.centerSlidePercentage) / 2 : c === g && (f += 100 - u.centerSlidePercentage), f;
    }
    return -c * 100;
  };
  tn.getPosition = s;
  var a = function(c, u) {
    var h = {};
    return ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(f) {
      h[f] = (0, t.default)(c, "%", u);
    }), h;
  };
  return tn.setPosition = a, tn;
}
var Sn = {}, Wf;
function cm() {
  if (Wf) return Sn;
  Wf = 1, Object.defineProperty(Sn, "__esModule", {
    value: !0
  }), Sn.fadeAnimationHandler = Sn.slideStopSwipingHandler = Sn.slideSwipeAnimationHandler = Sn.slideAnimationHandler = void 0;
  var e = St, t = r(Tc()), n = _g();
  function r(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function i(h, f) {
    var g = Object.keys(h);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(h);
      f && (d = d.filter(function(v) {
        return Object.getOwnPropertyDescriptor(h, v).enumerable;
      })), g.push.apply(g, d);
    }
    return g;
  }
  function o(h) {
    for (var f = 1; f < arguments.length; f++) {
      var g = arguments[f] != null ? arguments[f] : {};
      f % 2 ? i(Object(g), !0).forEach(function(d) {
        s(h, d, g[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(g)) : i(Object(g)).forEach(function(d) {
        Object.defineProperty(h, d, Object.getOwnPropertyDescriptor(g, d));
      });
    }
    return h;
  }
  function s(h, f, g) {
    return f in h ? Object.defineProperty(h, f, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : h[f] = g, h;
  }
  var a = function(f, g) {
    var d = {}, v = g.selectedItem, k = v, I = e.Children.count(f.children) - 1, y = f.infiniteLoop && (v < 0 || v > I);
    if (y)
      return k < 0 ? f.centerMode && f.centerSlidePercentage && f.axis === "horizontal" ? d.itemListStyle = (0, n.setPosition)(-(I + 2) * f.centerSlidePercentage - (100 - f.centerSlidePercentage) / 2, f.axis) : d.itemListStyle = (0, n.setPosition)(-(I + 2) * 100, f.axis) : k > I && (d.itemListStyle = (0, n.setPosition)(0, f.axis)), d;
    var S = (0, n.getPosition)(v, f), P = (0, t.default)(S, "%", f.axis), b = f.transitionTime + "ms";
    return d.itemListStyle = {
      WebkitTransform: P,
      msTransform: P,
      OTransform: P,
      transform: P
    }, g.swiping || (d.itemListStyle = o(o({}, d.itemListStyle), {}, {
      WebkitTransitionDuration: b,
      MozTransitionDuration: b,
      OTransitionDuration: b,
      transitionDuration: b,
      msTransitionDuration: b
    })), d;
  };
  Sn.slideAnimationHandler = a;
  var l = function(f, g, d, v) {
    var k = {}, I = g.axis === "horizontal", y = e.Children.count(g.children), S = 0, P = (0, n.getPosition)(d.selectedItem, g), b = g.infiniteLoop ? (0, n.getPosition)(y - 1, g) - 100 : (0, n.getPosition)(y - 1, g), M = I ? f.x : f.y, O = M;
    P === S && M > 0 && (O = 0), P === b && M < 0 && (O = 0);
    var E = P + 100 / (d.itemSize / O), _ = Math.abs(M) > g.swipeScrollTolerance;
    return g.infiniteLoop && _ && (d.selectedItem === 0 && E > -100 ? E -= y * 100 : d.selectedItem === y - 1 && E < -y * 100 && (E += y * 100)), (!g.preventMovementUntilSwipeScrollTolerance || _ || d.swipeMovementStarted) && (d.swipeMovementStarted || v({
      swipeMovementStarted: !0
    }), k.itemListStyle = (0, n.setPosition)(E, g.axis)), _ && !d.cancelClick && v({
      cancelClick: !0
    }), k;
  };
  Sn.slideSwipeAnimationHandler = l;
  var c = function(f, g) {
    var d = (0, n.getPosition)(g.selectedItem, f), v = (0, n.setPosition)(d, f.axis);
    return {
      itemListStyle: v
    };
  };
  Sn.slideStopSwipingHandler = c;
  var u = function(f, g) {
    var d = f.transitionTime + "ms", v = "ease-in-out", k = {
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
    return g.swiping || (k = o(o({}, k), {}, {
      WebkitTransitionDuration: d,
      MozTransitionDuration: d,
      OTransitionDuration: d,
      transitionDuration: d,
      msTransitionDuration: d
    })), {
      slideStyle: k,
      selectedStyle: o(o({}, k), {}, {
        opacity: 1,
        position: "relative"
      }),
      prevStyle: o({}, k)
    };
  };
  return Sn.fadeAnimationHandler = u, Sn;
}
var jf;
function um() {
  if (jf) return ni;
  jf = 1, Object.defineProperty(ni, "__esModule", {
    value: !0
  }), ni.default = void 0;
  var e = u(St), t = l(Cg()), n = l(kg()), r = l(Rg()), i = l(lm()), o = l(xg()), s = _g(), a = cm();
  function l(R) {
    return R && R.__esModule ? R : { default: R };
  }
  function c() {
    if (typeof WeakMap != "function") return null;
    var R = /* @__PURE__ */ new WeakMap();
    return c = function() {
      return R;
    }, R;
  }
  function u(R) {
    if (R && R.__esModule)
      return R;
    if (R === null || h(R) !== "object" && typeof R != "function")
      return { default: R };
    var w = c();
    if (w && w.has(R))
      return w.get(R);
    var x = {}, T = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var C in R)
      if (Object.prototype.hasOwnProperty.call(R, C)) {
        var N = T ? Object.getOwnPropertyDescriptor(R, C) : null;
        N && (N.get || N.set) ? Object.defineProperty(x, C, N) : x[C] = R[C];
      }
    return x.default = R, w && w.set(R, x), x;
  }
  function h(R) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? h = function(x) {
      return typeof x;
    } : h = function(x) {
      return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
    }, h(R);
  }
  function f() {
    return f = Object.assign || function(R) {
      for (var w = 1; w < arguments.length; w++) {
        var x = arguments[w];
        for (var T in x)
          Object.prototype.hasOwnProperty.call(x, T) && (R[T] = x[T]);
      }
      return R;
    }, f.apply(this, arguments);
  }
  function g(R, w) {
    var x = Object.keys(R);
    if (Object.getOwnPropertySymbols) {
      var T = Object.getOwnPropertySymbols(R);
      w && (T = T.filter(function(C) {
        return Object.getOwnPropertyDescriptor(R, C).enumerable;
      })), x.push.apply(x, T);
    }
    return x;
  }
  function d(R) {
    for (var w = 1; w < arguments.length; w++) {
      var x = arguments[w] != null ? arguments[w] : {};
      w % 2 ? g(Object(x), !0).forEach(function(T) {
        _(R, T, x[T]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(x)) : g(Object(x)).forEach(function(T) {
        Object.defineProperty(R, T, Object.getOwnPropertyDescriptor(x, T));
      });
    }
    return R;
  }
  function v(R, w) {
    if (!(R instanceof w))
      throw new TypeError("Cannot call a class as a function");
  }
  function k(R, w) {
    for (var x = 0; x < w.length; x++) {
      var T = w[x];
      T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(R, T.key, T);
    }
  }
  function I(R, w, x) {
    return w && k(R.prototype, w), R;
  }
  function y(R, w) {
    if (typeof w != "function" && w !== null)
      throw new TypeError("Super expression must either be null or a function");
    R.prototype = Object.create(w && w.prototype, { constructor: { value: R, writable: !0, configurable: !0 } }), w && S(R, w);
  }
  function S(R, w) {
    return S = Object.setPrototypeOf || function(T, C) {
      return T.__proto__ = C, T;
    }, S(R, w);
  }
  function P(R) {
    var w = O();
    return function() {
      var T = E(R), C;
      if (w) {
        var N = E(this).constructor;
        C = Reflect.construct(T, arguments, N);
      } else
        C = T.apply(this, arguments);
      return b(this, C);
    };
  }
  function b(R, w) {
    return w && (h(w) === "object" || typeof w == "function") ? w : M(R);
  }
  function M(R) {
    if (R === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return R;
  }
  function O() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function E(R) {
    return E = Object.setPrototypeOf ? Object.getPrototypeOf : function(x) {
      return x.__proto__ || Object.getPrototypeOf(x);
    }, E(R);
  }
  function _(R, w, x) {
    return w in R ? Object.defineProperty(R, w, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : R[w] = x, R;
  }
  var F = /* @__PURE__ */ function(R) {
    y(x, R);
    var w = P(x);
    function x(T) {
      var C;
      v(this, x), C = w.call(this, T), _(M(C), "thumbsRef", void 0), _(M(C), "carouselWrapperRef", void 0), _(M(C), "listRef", void 0), _(M(C), "itemsRef", void 0), _(M(C), "timer", void 0), _(M(C), "animationHandler", void 0), _(M(C), "setThumbsRef", function(H) {
        C.thumbsRef = H;
      }), _(M(C), "setCarouselWrapperRef", function(H) {
        C.carouselWrapperRef = H;
      }), _(M(C), "setListRef", function(H) {
        C.listRef = H;
      }), _(M(C), "setItemsRef", function(H, Y) {
        C.itemsRef || (C.itemsRef = []), C.itemsRef[Y] = H;
      }), _(M(C), "autoPlay", function() {
        e.Children.count(C.props.children) <= 1 || (C.clearAutoPlay(), C.props.autoPlay && (C.timer = setTimeout(function() {
          C.increment();
        }, C.props.interval)));
      }), _(M(C), "clearAutoPlay", function() {
        C.timer && clearTimeout(C.timer);
      }), _(M(C), "resetAutoPlay", function() {
        C.clearAutoPlay(), C.autoPlay();
      }), _(M(C), "stopOnHover", function() {
        C.setState({
          isMouseEntered: !0
        }, C.clearAutoPlay);
      }), _(M(C), "startOnLeave", function() {
        C.setState({
          isMouseEntered: !1
        }, C.autoPlay);
      }), _(M(C), "isFocusWithinTheCarousel", function() {
        return C.carouselWrapperRef ? !!((0, i.default)().activeElement === C.carouselWrapperRef || C.carouselWrapperRef.contains((0, i.default)().activeElement)) : !1;
      }), _(M(C), "navigateWithKeyboard", function(H) {
        if (C.isFocusWithinTheCarousel()) {
          var Y = C.props.axis, se = Y === "horizontal", te = {
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37
          }, A = se ? te.ArrowRight : te.ArrowDown, $ = se ? te.ArrowLeft : te.ArrowUp;
          A === H.keyCode ? C.increment() : $ === H.keyCode && C.decrement();
        }
      }), _(M(C), "updateSizes", function() {
        if (!(!C.state.initialized || !C.itemsRef || C.itemsRef.length === 0)) {
          var H = C.props.axis === "horizontal", Y = C.itemsRef[0];
          if (Y) {
            var se = H ? Y.clientWidth : Y.clientHeight;
            C.setState({
              itemSize: se
            }), C.thumbsRef && C.thumbsRef.updateSizes();
          }
        }
      }), _(M(C), "setMountState", function() {
        C.setState({
          hasMount: !0
        }), C.updateSizes();
      }), _(M(C), "handleClickItem", function(H, Y) {
        if (e.Children.count(C.props.children) !== 0) {
          if (C.state.cancelClick) {
            C.setState({
              cancelClick: !1
            });
            return;
          }
          C.props.onClickItem(H, Y), H !== C.state.selectedItem && C.setState({
            selectedItem: H
          });
        }
      }), _(M(C), "handleOnChange", function(H, Y) {
        e.Children.count(C.props.children) <= 1 || C.props.onChange(H, Y);
      }), _(M(C), "handleClickThumb", function(H, Y) {
        C.props.onClickThumb(H, Y), C.moveTo(H);
      }), _(M(C), "onSwipeStart", function(H) {
        C.setState({
          swiping: !0
        }), C.props.onSwipeStart(H);
      }), _(M(C), "onSwipeEnd", function(H) {
        C.setState({
          swiping: !1,
          cancelClick: !1,
          swipeMovementStarted: !1
        }), C.props.onSwipeEnd(H), C.clearAutoPlay(), C.state.autoPlay && C.autoPlay();
      }), _(M(C), "onSwipeMove", function(H, Y) {
        C.props.onSwipeMove(Y);
        var se = C.props.swipeAnimationHandler(H, C.props, C.state, C.setState.bind(M(C)));
        return C.setState(d({}, se)), !!Object.keys(se).length;
      }), _(M(C), "decrement", function() {
        var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        C.moveTo(C.state.selectedItem - (typeof H == "number" ? H : 1));
      }), _(M(C), "increment", function() {
        var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        C.moveTo(C.state.selectedItem + (typeof H == "number" ? H : 1));
      }), _(M(C), "moveTo", function(H) {
        if (typeof H == "number") {
          var Y = e.Children.count(C.props.children) - 1;
          H < 0 && (H = C.props.infiniteLoop ? Y : 0), H > Y && (H = C.props.infiniteLoop ? 0 : Y), C.selectItem({
            // if it's not a slider, we don't need to set position here
            selectedItem: H
          }), C.state.autoPlay && C.state.isMouseEntered === !1 && C.resetAutoPlay();
        }
      }), _(M(C), "onClickNext", function() {
        C.increment(1);
      }), _(M(C), "onClickPrev", function() {
        C.decrement(1);
      }), _(M(C), "onSwipeForward", function() {
        C.increment(1), C.props.emulateTouch && C.setState({
          cancelClick: !0
        });
      }), _(M(C), "onSwipeBackwards", function() {
        C.decrement(1), C.props.emulateTouch && C.setState({
          cancelClick: !0
        });
      }), _(M(C), "changeItem", function(H) {
        return function(Y) {
          (!(0, s.isKeyboardEvent)(Y) || Y.key === "Enter") && C.moveTo(H);
        };
      }), _(M(C), "selectItem", function(H) {
        C.setState(d({
          previousItem: C.state.selectedItem
        }, H), function() {
          C.setState(C.animationHandler(C.props, C.state));
        }), C.handleOnChange(H.selectedItem, e.Children.toArray(C.props.children)[H.selectedItem]);
      }), _(M(C), "getInitialImage", function() {
        var H = C.props.selectedItem, Y = C.itemsRef && C.itemsRef[H], se = Y && Y.getElementsByTagName("img") || [];
        return se[0];
      }), _(M(C), "getVariableItemHeight", function(H) {
        var Y = C.itemsRef && C.itemsRef[H];
        if (C.state.hasMount && Y && Y.children.length) {
          var se = Y.children[0].getElementsByTagName("img") || [];
          if (se.length > 0) {
            var te = se[0];
            if (!te.complete) {
              var A = function ie() {
                C.forceUpdate(), te.removeEventListener("load", ie);
              };
              te.addEventListener("load", A);
            }
          }
          var $ = se[0] || Y.children[0], Q = $.clientHeight;
          return Q > 0 ? Q : null;
        }
        return null;
      });
      var N = {
        initialized: !1,
        previousItem: T.selectedItem,
        selectedItem: T.selectedItem,
        hasMount: !1,
        isMouseEntered: !1,
        autoPlay: T.autoPlay,
        swiping: !1,
        swipeMovementStarted: !1,
        cancelClick: !1,
        itemSize: 1,
        itemListStyle: {},
        slideStyle: {},
        selectedStyle: {},
        prevStyle: {}
      };
      return C.animationHandler = typeof T.animationHandler == "function" && T.animationHandler || T.animationHandler === "fade" && a.fadeAnimationHandler || a.slideAnimationHandler, C.state = d(d({}, N), C.animationHandler(T, N)), C;
    }
    return I(x, [{
      key: "componentDidMount",
      value: function() {
        this.props.children && this.setupCarousel();
      }
    }, {
      key: "componentDidUpdate",
      value: function(C, N) {
        !C.children && this.props.children && !this.state.initialized && this.setupCarousel(), !C.autoFocus && this.props.autoFocus && this.forceFocus(), N.swiping && !this.state.swiping && this.setState(d({}, this.props.stopSwipingHandler(this.props, this.state))), (C.selectedItem !== this.props.selectedItem || C.centerMode !== this.props.centerMode) && (this.updateSizes(), this.moveTo(this.props.selectedItem)), C.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({
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
        var C = this;
        this.bindEvents(), this.state.autoPlay && e.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({
          initialized: !0
        }, function() {
          var N = C.getInitialImage();
          N && !N.complete ? N.addEventListener("load", C.setMountState) : C.setMountState();
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
        var C = this.carouselWrapperRef;
        this.props.stopOnHover && C && (C.addEventListener("mouseenter", this.stopOnHover), C.addEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "destroyAutoPlay",
      value: function() {
        this.clearAutoPlay();
        var C = this.carouselWrapperRef;
        this.props.stopOnHover && C && (C.removeEventListener("mouseenter", this.stopOnHover), C.removeEventListener("mouseleave", this.startOnLeave));
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
        var C = this.getInitialImage();
        C && C.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, i.default)().removeEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "forceFocus",
      value: function() {
        var C;
        (C = this.carouselWrapperRef) === null || C === void 0 || C.focus();
      }
    }, {
      key: "renderItems",
      value: function(C) {
        var N = this;
        return this.props.children ? e.Children.map(this.props.children, function(H, Y) {
          var se = Y === N.state.selectedItem, te = Y === N.state.previousItem, A = se && N.state.selectedStyle || te && N.state.prevStyle || N.state.slideStyle || {};
          N.props.centerMode && N.props.axis === "horizontal" && (A = d(d({}, A), {}, {
            minWidth: N.props.centerSlidePercentage + "%"
          })), N.state.swiping && N.state.swipeMovementStarted && (A = d(d({}, A), {}, {
            pointerEvents: "none"
          }));
          var $ = {
            ref: function(ie) {
              return N.setItemsRef(ie, Y);
            },
            key: "itemKey" + Y + (C ? "clone" : ""),
            className: n.default.ITEM(!0, Y === N.state.selectedItem, Y === N.state.previousItem),
            onClick: N.handleClickItem.bind(N, Y, H),
            style: A
          };
          return /* @__PURE__ */ e.default.createElement("li", $, N.props.renderItem(H, {
            isSelected: Y === N.state.selectedItem,
            isPrevious: Y === N.state.previousItem
          }));
        }) : [];
      }
    }, {
      key: "renderControls",
      value: function() {
        var C = this, N = this.props, H = N.showIndicators, Y = N.labels, se = N.renderIndicator, te = N.children;
        return H ? /* @__PURE__ */ e.default.createElement("ul", {
          className: "control-dots"
        }, e.Children.map(te, function(A, $) {
          return se && se(C.changeItem($), $ === C.state.selectedItem, $, Y.item);
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
        var C = this;
        if (!this.props.children || e.Children.count(this.props.children) === 0)
          return null;
        var N = this.props.swipeable && e.Children.count(this.props.children) > 1, H = this.props.axis === "horizontal", Y = this.props.showArrows && e.Children.count(this.props.children) > 1, se = Y && (this.state.selectedItem > 0 || this.props.infiniteLoop) || !1, te = Y && (this.state.selectedItem < e.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || !1, A = this.renderItems(!0), $ = A.shift(), Q = A.pop(), ie = {
          className: n.default.SLIDER(!0, this.state.swiping),
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: this.state.itemListStyle,
          tolerance: this.props.swipeScrollTolerance
        }, z = {};
        if (H) {
          if (ie.onSwipeLeft = this.onSwipeForward, ie.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
            var le = this.getVariableItemHeight(this.state.selectedItem);
            z.height = le || "auto";
          }
        } else
          ie.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward, ie.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards, ie.style = d(d({}, ie.style), {}, {
            height: this.state.itemSize
          }), z.height = this.state.itemSize;
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
        }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, se, this.props.labels.leftArrow), /* @__PURE__ */ e.default.createElement("div", {
          className: n.default.WRAPPER(!0, this.props.axis),
          style: z
        }, N ? /* @__PURE__ */ e.default.createElement(t.default, f({
          tagName: "ul",
          innerRef: this.setListRef
        }, ie, {
          allowMouseEvents: this.props.emulateTouch
        }), this.props.infiniteLoop && Q, this.renderItems(), this.props.infiniteLoop && $) : /* @__PURE__ */ e.default.createElement("ul", {
          className: n.default.SLIDER(!0, this.state.swiping),
          ref: function(re) {
            return C.setListRef(re);
          },
          style: this.state.itemListStyle || {}
        }, this.props.infiniteLoop && Q, this.renderItems(), this.props.infiniteLoop && $)), this.props.renderArrowNext(this.onClickNext, te, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
      }
    }]), x;
  }(e.default.Component);
  return ni.default = F, _(F, "displayName", "Carousel"), _(F, "defaultProps", {
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
    renderArrowPrev: function(w, x, T) {
      return /* @__PURE__ */ e.default.createElement("button", {
        type: "button",
        "aria-label": T,
        className: n.default.ARROW_PREV(!x),
        onClick: w
      });
    },
    renderArrowNext: function(w, x, T) {
      return /* @__PURE__ */ e.default.createElement("button", {
        type: "button",
        "aria-label": T,
        className: n.default.ARROW_NEXT(!x),
        onClick: w
      });
    },
    renderIndicator: function(w, x, T, C) {
      return /* @__PURE__ */ e.default.createElement("li", {
        className: n.default.DOT(x),
        onClick: w,
        onKeyDown: w,
        value: T,
        key: T,
        role: "button",
        tabIndex: 0,
        "aria-label": "".concat(C, " ").concat(T + 1)
      });
    },
    renderItem: function(w) {
      return w;
    },
    renderThumbs: function(w) {
      var x = e.Children.map(w, function(T) {
        var C = T;
        if (T.type !== "img" && (C = e.Children.toArray(T.props.children).find(function(N) {
          return N.type === "img";
        })), !!C)
          return C;
      });
      return x.filter(function(T) {
        return T;
      }).length === 0 ? (console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"), []) : x;
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
  }), ni;
}
var Uf = {}, Xf;
function fm() {
  return Xf || (Xf = 1), Uf;
}
var Yf;
function dm() {
  return Yf || (Yf = 1, function(e) {
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
    var t = i(um()), n = fm(), r = i(Rg());
    function i(o) {
      return o && o.__esModule ? o : { default: o };
    }
  }(is)), is;
}
var hm = dm(), ds, Kf;
function gm() {
  if (Kf) return ds;
  Kf = 1;
  var e = An(), t = function() {
    return e.Date.now();
  };
  return ds = t, ds;
}
var hs, Gf;
function pm() {
  if (Gf) return hs;
  Gf = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return hs = t, hs;
}
var gs, Vf;
function mm() {
  if (Vf) return gs;
  Vf = 1;
  var e = pm(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return gs = n, gs;
}
var ps, Zf;
function Ec() {
  if (Zf) return ps;
  Zf = 1;
  var e = mm(), t = hr(), n = So(), r = NaN, i = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, s = /^0o[0-7]+$/i, a = parseInt;
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
  return ps = l, ps;
}
var ms, Qf;
function Tg() {
  if (Qf) return ms;
  Qf = 1;
  var e = hr(), t = gm(), n = Ec(), r = "Expected a function", i = Math.max, o = Math.min;
  function s(a, l, c) {
    var u, h, f, g, d, v, k = 0, I = !1, y = !1, S = !0;
    if (typeof a != "function")
      throw new TypeError(r);
    l = n(l) || 0, e(c) && (I = !!c.leading, y = "maxWait" in c, f = y ? i(n(c.maxWait) || 0, l) : f, S = "trailing" in c ? !!c.trailing : S);
    function P(x) {
      var T = u, C = h;
      return u = h = void 0, k = x, g = a.apply(C, T), g;
    }
    function b(x) {
      return k = x, d = setTimeout(E, l), I ? P(x) : g;
    }
    function M(x) {
      var T = x - v, C = x - k, N = l - T;
      return y ? o(N, f - C) : N;
    }
    function O(x) {
      var T = x - v, C = x - k;
      return v === void 0 || T >= l || T < 0 || y && C >= f;
    }
    function E() {
      var x = t();
      if (O(x))
        return _(x);
      d = setTimeout(E, M(x));
    }
    function _(x) {
      return d = void 0, S && u ? P(x) : (u = h = void 0, g);
    }
    function F() {
      d !== void 0 && clearTimeout(d), k = 0, u = v = h = d = void 0;
    }
    function R() {
      return d === void 0 ? g : _(t());
    }
    function w() {
      var x = t(), T = O(x);
      if (u = arguments, h = this, v = x, T) {
        if (d === void 0)
          return b(v);
        if (y)
          return clearTimeout(d), d = setTimeout(E, l), P(v);
      }
      return d === void 0 && (d = setTimeout(E, l)), g;
    }
    return w.cancel = F, w.flush = R, w;
  }
  return ms = s, ms;
}
var vm = Tg();
const Eg = /* @__PURE__ */ er(vm);
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
function Dr(e, t) {
  return e === void 0 ? void 0 : t;
}
const ym = Math.PI;
function Jf(e) {
  return e * ym / 180;
}
const Mg = (e, t, n) => ({
  x1: e - n / 2,
  y1: t - n / 2,
  x2: e + n / 2,
  y2: t + n / 2
}), Ig = (e, t, n, r, i) => {
  switch (e) {
    case "left":
      return Math.floor(t) + r + i / 2;
    case "center":
      return Math.floor(t + n / 2);
    case "right":
      return Math.floor(t + n) - r - i / 2;
  }
}, Pg = (e, t, n) => Math.min(e, t - n * 2), Ag = (e, t, n) => n.x1 <= e && e <= n.x2 && n.y1 <= t && t <= n.y2, Mc = (e) => {
  const t = e.fgColor ?? "currentColor";
  return p.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    p.createElement("path", { d: "M12.7073 7.05029C7.87391 11.8837 10.4544 9.30322 6.03024 13.7273C5.77392 13.9836 5.58981 14.3071 5.50189 14.6587L4.52521 18.5655C4.38789 19.1148 4.88543 19.6123 5.43472 19.475L9.34146 18.4983C9.69313 18.4104 10.0143 18.2286 10.2706 17.9722L16.9499 11.2929", stroke: t, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none", vectorEffect: "non-scaling-stroke" }),
    p.createElement("path", { d: "M20.4854 4.92901L19.0712 3.5148C18.2901 2.73375 17.0238 2.73375 16.2428 3.5148L14.475 5.28257C15.5326 7.71912 16.4736 8.6278 18.7176 9.52521L20.4854 7.75744C21.2665 6.97639 21.2665 5.71006 20.4854 4.92901Z", stroke: t, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none", vectorEffect: "non-scaling-stroke" })
  );
}, bm = (e) => {
  const t = e.fgColor ?? "currentColor";
  return p.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    p.createElement("path", { d: "M19 6L10.3802 17L5.34071 11.8758", vectorEffect: "non-scaling-stroke", stroke: t, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  );
};
function wm(e, t, n) {
  const [r, i] = p.useState(e), o = p.useRef(!0);
  p.useEffect(() => () => {
    o.current = !1;
  }, []);
  const s = p.useRef(Eg((a) => {
    o.current && i(a);
  }, n));
  return p.useLayoutEffect(() => {
    o.current && s.current(() => e());
  }, t), r;
}
const Sm = "֑-߿יִ-﷽ﹰ-ﻼ", Cm = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", km = new RegExp("^[^" + Cm + "]*[" + Sm + "]");
function Ic(e) {
  return km.test(e) ? "rtl" : "not-rtl";
}
let oo;
function lc() {
  if (typeof document > "u")
    return 0;
  if (oo !== void 0)
    return oo;
  const e = document.createElement("p");
  e.style.width = "100%", e.style.height = "200px";
  const t = document.createElement("div");
  t.id = "testScrollbar", t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.append(e), document.body.append(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let r = e.offsetWidth;
  return n === r && (r = t.clientWidth), t.remove(), oo = n - r, oo;
}
const cr = Symbol();
function xm(e) {
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
function Og(e) {
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
function Rm(e) {
  const t = p.useRef(e);
  return Br(e, t.current) || (t.current = e), t.current;
}
const _m = (e) => {
  const { urls: t, canWrite: n, onEditClick: r, renderImage: i } = e, o = t.filter((a) => a !== "");
  if (o.length === 0)
    return null;
  const s = o.length > 1;
  return p.createElement(
    Z0,
    { "data-testid": "GDG-default-image-overlay-editor" },
    p.createElement(hm.Carousel, { showArrows: s, showThumbs: !1, swipeable: s, emulateTouch: s, infiniteLoop: s }, o.map((a) => {
      const l = (i == null ? void 0 : i(a)) ?? p.createElement("img", { draggable: !1, src: a });
      return p.createElement("div", { className: "gdg-centering-container", key: a }, l);
    })),
    n && r && p.createElement(
      "button",
      { className: "gdg-edit-icon", onClick: r },
      p.createElement(Mc, null)
    )
  );
};
function Pc() {
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
var pr = Pc();
function Dg(e) {
  pr = e;
}
var yi = { exec: () => null };
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
}, Tm = /^(?:[ \t]*(?:\n|$))+/, Em = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Mm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ei = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Im = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ac = /(?:[*+-]|\d{1,9}[.)])/, Lg = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Fg = st(Lg).replace(/bull/g, Ac).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Pm = st(Lg).replace(/bull/g, Ac).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Oc = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Am = /^[^\n]+/, Dc = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Om = st(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Dc).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Dm = st(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ac).getRegex(), To = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Lc = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Lm = st(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", Lc).replace("tag", To).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), qg = st(Oc).replace("hr", Ei).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", To).getRegex(), Fm = st(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", qg).getRegex(), Fc = {
  blockquote: Fm,
  code: Em,
  def: Om,
  fences: Mm,
  heading: Im,
  hr: Ei,
  html: Lm,
  lheading: Fg,
  list: Dm,
  newline: Tm,
  paragraph: qg,
  table: yi,
  text: Am
}, ed = st(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", Ei).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", To).getRegex(), qm = {
  ...Fc,
  lheading: Pm,
  table: ed,
  paragraph: st(Oc).replace("hr", Ei).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ed).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", To).getRegex()
}, Hm = {
  ...Fc,
  html: st(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", Lc).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: yi,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: st(Oc).replace("hr", Ei).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Fg).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, zm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, $m = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Hg = /^( {2,}|\\)\n(?!\s*$)/, Nm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Eo = /[\p{P}\p{S}]/u, qc = /[\s\p{P}\p{S}]/u, zg = /[^\s\p{P}\p{S}]/u, Bm = st(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, qc).getRegex(), $g = /(?!~)[\p{P}\p{S}]/u, Wm = /(?!~)[\s\p{P}\p{S}]/u, jm = /(?:[^\s\p{P}\p{S}]|~)/u, Um = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Ng = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Xm = st(Ng, "u").replace(/punct/g, Eo).getRegex(), Ym = st(Ng, "u").replace(/punct/g, $g).getRegex(), Bg = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Km = st(Bg, "gu").replace(/notPunctSpace/g, zg).replace(/punctSpace/g, qc).replace(/punct/g, Eo).getRegex(), Gm = st(Bg, "gu").replace(/notPunctSpace/g, jm).replace(/punctSpace/g, Wm).replace(/punct/g, $g).getRegex(), Vm = st(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, zg).replace(/punctSpace/g, qc).replace(/punct/g, Eo).getRegex(), Zm = st(/\\(punct)/, "gu").replace(/punct/g, Eo).getRegex(), Qm = st(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Jm = st(Lc).replace("(?:-->|$)", "-->").getRegex(), e1 = st(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", Jm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), go = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, t1 = st(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", go).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Wg = st(/^!?\[(label)\]\[(ref)\]/).replace("label", go).replace("ref", Dc).getRegex(), jg = st(/^!?\[(ref)\](?:\[\])?/).replace("ref", Dc).getRegex(), n1 = st("reflink|nolink(?!\\()", "g").replace("reflink", Wg).replace("nolink", jg).getRegex(), Hc = {
  _backpedal: yi,
  // only used for GFM url
  anyPunctuation: Zm,
  autolink: Qm,
  blockSkip: Um,
  br: Hg,
  code: $m,
  del: yi,
  emStrongLDelim: Xm,
  emStrongRDelimAst: Km,
  emStrongRDelimUnd: Vm,
  escape: zm,
  link: t1,
  nolink: jg,
  punctuation: Bm,
  reflink: Wg,
  reflinkSearch: n1,
  tag: e1,
  text: Nm,
  url: yi
}, r1 = {
  ...Hc,
  link: st(/^!?\[(label)\]\((.*?)\)/).replace("label", go).getRegex(),
  reflink: st(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", go).getRegex()
}, cc = {
  ...Hc,
  emStrongRDelimAst: Gm,
  emStrongLDelim: Ym,
  url: st(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, i1 = {
  ...cc,
  br: st(Hg).replace("{2,}", "*").getRegex(),
  text: st(cc.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, ao = {
  normal: Fc,
  gfm: qm,
  pedantic: Hm
}, ci = {
  normal: Hc,
  gfm: cc,
  breaks: i1,
  pedantic: r1
}, o1 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, td = (e) => o1[e];
function Mn(e, t) {
  if (t) {
    if (Xt.escapeTest.test(e))
      return e.replace(Xt.escapeReplace, td);
  } else if (Xt.escapeTestNoEncode.test(e))
    return e.replace(Xt.escapeReplaceNoEncode, td);
  return e;
}
function nd(e) {
  try {
    e = encodeURI(e).replace(Xt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function rd(e, t) {
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
function ui(e, t, n) {
  const r = e.length;
  if (r === 0)
    return "";
  let i = 0;
  for (; i < r && e.charAt(r - i - 1) === t; )
    i++;
  return e.slice(0, r - i);
}
function a1(e, t) {
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
function id(e, t, n, r, i) {
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
function s1(e, t, n) {
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
var po = class {
  // set by the lexer
  constructor(e) {
    be(this, "options");
    be(this, "rules");
    // set by the lexer
    be(this, "lexer");
    this.options = e || pr;
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
        text: this.options.pedantic ? n : ui(n, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0], r = s1(n, t[3] || "", this.rules);
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
        const r = ui(n, "#");
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
        raw: ui(t[0], `
`)
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = ui(t[0], `
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
        const f = o.at(-1);
        if ((f == null ? void 0 : f.type) === "code")
          break;
        if ((f == null ? void 0 : f.type) === "blockquote") {
          const g = f, d = g.raw + `
` + n.join(`
`), v = this.blockquote(d);
          o[o.length - 1] = v, r = r.substring(0, r.length - g.raw.length) + v.raw, i = i.substring(0, i.length - g.text.length) + v.text;
          break;
        } else if ((f == null ? void 0 : f.type) === "list") {
          const g = f, d = g.raw + `
` + n.join(`
`), v = this.list(d);
          o[o.length - 1] = v, r = r.substring(0, r.length - f.raw.length) + v.raw, i = i.substring(0, i.length - g.raw.length) + v.raw, n = d.substring(o.at(-1).raw.length).split(`
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
`, 1)[0].replace(this.rules.other.listReplaceTabs, (I) => " ".repeat(3 * I.length)), f = e.split(`
`, 1)[0], g = !h.trim(), d = 0;
        if (this.options.pedantic ? (d = 2, u = h.trimStart()) : g ? d = t[1].length + 1 : (d = t[2].search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, u = h.slice(d), d += t[1].length), g && this.rules.other.blankLine.test(f) && (c += f + `
`, e = e.substring(f.length + 1), l = !0), !l) {
          const I = this.rules.other.nextBulletRegex(d), y = this.rules.other.hrRegex(d), S = this.rules.other.fencesBeginRegex(d), P = this.rules.other.headingBeginRegex(d), b = this.rules.other.htmlBeginRegex(d);
          for (; e; ) {
            const M = e.split(`
`, 1)[0];
            let O;
            if (f = M, this.options.pedantic ? (f = f.replace(this.rules.other.listReplaceNesting, "  "), O = f) : O = f.replace(this.rules.other.tabCharGlobal, "    "), S.test(f) || P.test(f) || b.test(f) || I.test(f) || y.test(f))
              break;
            if (O.search(this.rules.other.nonSpaceChar) >= d || !f.trim())
              u += `
` + O.slice(d);
            else {
              if (g || h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || S.test(h) || P.test(h) || y.test(h))
                break;
              u += `
` + f;
            }
            !g && !f.trim() && (g = !0), c += M + `
`, e = e.substring(M.length + 1), h = O.slice(d);
          }
        }
        i.loose || (s ? i.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (s = !0));
        let v = null, k;
        this.options.gfm && (v = this.rules.other.listIsTask.exec(u), v && (k = v[0] !== "[ ] ", u = u.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
          type: "list_item",
          raw: c,
          task: !!v,
          checked: k,
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
    const n = rd(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = (s = t[3]) != null && s.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
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
        o.rows.push(rd(a, o.header.length).map((l, c) => ({
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
        const o = ui(n.slice(0, -1), "\\");
        if ((n.length - o.length) % 2 === 0)
          return;
      } else {
        const o = a1(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), id(t, {
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
      return id(n, i, n[0], this.lexer, this.rules);
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
        const h = [...r[0]][0].length, f = e.slice(0, o + r.index + h + a);
        if (Math.min(o, a) % 2) {
          const d = f.slice(1, -1);
          return {
            type: "em",
            raw: f,
            text: d,
            tokens: this.lexer.inlineTokens(d)
          };
        }
        const g = f.slice(2, -2);
        return {
          type: "strong",
          raw: f,
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
}, Nn = class uc {
  constructor(t) {
    be(this, "tokens");
    be(this, "options");
    be(this, "state");
    be(this, "tokenizer");
    be(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || pr, this.options.tokenizer = this.options.tokenizer || new po(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      other: Xt,
      block: ao.normal,
      inline: ci.normal
    };
    this.options.pedantic ? (n.block = ao.pedantic, n.inline = ci.pedantic) : this.options.gfm && (n.block = ao.gfm, this.options.breaks ? n.inline = ci.breaks : n.inline = ci.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: ao,
      inline: ci
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, n) {
    return new uc(n).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, n) {
    return new uc(n).inlineTokens(t);
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
        this.options.extensions.startBlock.forEach((f) => {
          h = f.call({ lexer: this }, u), typeof h == "number" && h >= 0 && (c = Math.min(c, h));
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
      if ((l = (a = this.options.extensions) == null ? void 0 : a.inline) != null && l.some((f) => (u = f.call({ lexer: this }, t, n)) ? (t = t.substring(u.raw.length), n.push(u), !0) : !1))
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
        const f = n.at(-1);
        u.type === "text" && (f == null ? void 0 : f.type) === "text" ? (f.raw += u.raw, f.text += u.text) : n.push(u);
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
        let f = 1 / 0;
        const g = t.slice(1);
        let d;
        this.options.extensions.startInline.forEach((v) => {
          d = v.call({ lexer: this }, g), typeof d == "number" && d >= 0 && (f = Math.min(f, d));
        }), f < 1 / 0 && f >= 0 && (h = t.substring(0, f + 1));
      }
      if (u = this.tokenizer.inlineText(h)) {
        t = t.substring(u.raw.length), u.raw.slice(-1) !== "_" && (s = u.raw.slice(-1)), o = !0;
        const f = n.at(-1);
        (f == null ? void 0 : f.type) === "text" ? (f.raw += u.raw, f.text += u.text) : n.push(u);
        continue;
      }
      if (t) {
        const f = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(f);
          break;
        } else
          throw new Error(f);
      }
    }
    return n;
  }
}, mo = class {
  // set by the parser
  constructor(e) {
    be(this, "options");
    be(this, "parser");
    this.options = e || pr;
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
    const r = this.parser.parseInline(n), i = nd(e);
    if (i === null)
      return r;
    e = i;
    let o = '<a href="' + e + '"';
    return t && (o += ' title="' + Mn(t) + '"'), o += ">" + r + "</a>", o;
  }
  image({ href: e, title: t, text: n, tokens: r }) {
    r && (n = this.parser.parseInline(r, this.parser.textRenderer));
    const i = nd(e);
    if (i === null)
      return Mn(n);
    e = i;
    let o = `<img src="${e}" alt="${n}"`;
    return t && (o += ` title="${Mn(t)}"`), o += ">", o;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : Mn(e.text);
  }
}, zc = class {
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
}, Bn = class fc {
  constructor(t) {
    be(this, "options");
    be(this, "renderer");
    be(this, "textRenderer");
    this.options = t || pr, this.options.renderer = this.options.renderer || new mo(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new zc();
  }
  /**
   * Static Parse Method
   */
  static parse(t, n) {
    return new fc(n).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, n) {
    return new fc(n).parseInline(t);
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
}, ac, co = (ac = class {
  constructor(e) {
    be(this, "options");
    be(this, "block");
    this.options = e || pr;
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
}, be(ac, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
])), ac), l1 = class {
  constructor(...e) {
    be(this, "defaults", Pc());
    be(this, "options", this.setOptions);
    be(this, "parse", this.parseMarkdown(!0));
    be(this, "parseInline", this.parseMarkdown(!1));
    be(this, "Parser", Bn);
    be(this, "Renderer", mo);
    be(this, "TextRenderer", zc);
    be(this, "Lexer", Nn);
    be(this, "Tokenizer", po);
    be(this, "Hooks", co);
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
        const i = this.defaults.renderer || new mo(this.defaults);
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
        const i = this.defaults.tokenizer || new po(this.defaults);
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
        const i = this.defaults.hooks || new co();
        for (const o in n.hooks) {
          if (!(o in i))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const s = o, a = n.hooks[s], l = i[s];
          co.passThroughHooks.has(o) ? i[s] = (c) => {
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
}, fr = new l1();
function lt(e, t) {
  return fr.parse(e, t);
}
lt.options = lt.setOptions = function(e) {
  return fr.setOptions(e), lt.defaults = fr.defaults, Dg(lt.defaults), lt;
};
lt.getDefaults = Pc;
lt.defaults = pr;
lt.use = function(...e) {
  return fr.use(...e), lt.defaults = fr.defaults, Dg(lt.defaults), lt;
};
lt.walkTokens = function(e, t) {
  return fr.walkTokens(e, t);
};
lt.parseInline = fr.parseInline;
lt.Parser = Bn;
lt.parser = Bn.parse;
lt.Renderer = mo;
lt.TextRenderer = zc;
lt.Lexer = Nn;
lt.lexer = Nn.lex;
lt.Tokenizer = po;
lt.Hooks = co;
lt.parse = lt;
lt.options;
lt.setOptions;
lt.use;
lt.walkTokens;
lt.parseInline;
Bn.parse;
Nn.lex;
const c1 = /* @__PURE__ */ an("div")({
  name: "MarkdownContainer",
  class: "gdg-mnuv029",
  propsAsIs: !1
});
class u1 extends St.PureComponent {
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
    return this.renderMarkdownIntoDiv(), St.createElement(c1, { ref: this.containerRefHook });
  }
}
const f1 = /* @__PURE__ */ an("textarea")({
  name: "InputBox",
  class: "gdg-izpuzkl",
  propsAsIs: !1
}), d1 = /* @__PURE__ */ an("div")({
  name: "ShadowBox",
  class: "gdg-s69h75o",
  propsAsIs: !1
}), h1 = /* @__PURE__ */ an("div")({
  name: "GrowingEntryStyle",
  class: "gdg-g1y0xocz",
  propsAsIs: !1
});
let od = 0;
const Mo = (e) => {
  const { placeholder: t, value: n, onKeyDown: r, highlight: i, altNewline: o, validatedSelection: s, ...a } = e, { onChange: l, className: c } = a, u = p.useRef(null), h = n ?? "";
  rn(l !== void 0, "GrowingEntry must be a controlled input area");
  const [f] = p.useState(() => "input-box-" + (od = (od + 1) % 1e7));
  p.useEffect(() => {
    const d = u.current;
    if (d === null || d.disabled)
      return;
    const v = h.toString().length;
    d.focus(), d.setSelectionRange(i ? 0 : v, v);
  }, []), p.useLayoutEffect(() => {
    var d;
    if (s !== void 0) {
      const v = typeof s == "number" ? [s, null] : s;
      (d = u.current) == null || d.setSelectionRange(v[0], v[1]);
    }
  }, [s]);
  const g = p.useCallback((d) => {
    d.key === "Enter" && d.shiftKey && o === !0 || r == null || r(d);
  }, [o, r]);
  return p.createElement(
    h1,
    { className: "gdg-growing-entry" },
    p.createElement(d1, { className: c }, h + `
`),
    p.createElement(f1, { ...a, className: (c ?? "") + " gdg-input", id: f, ref: u, onKeyDown: g, value: h, placeholder: t, dir: "auto" })
  );
};
var g1 = {};
const vs = {};
let Vn = null;
function p1() {
  const e = document.createElement("div");
  return e.style.opacity = "0", e.style.pointerEvents = "none", e.style.position = "fixed", document.body.append(e), e;
}
function dc(e) {
  const t = e.toLowerCase().trim();
  if (vs[t] !== void 0)
    return vs[t];
  Vn = Vn || p1(), Vn.style.color = "#000", Vn.style.color = t;
  const n = getComputedStyle(Vn).color;
  Vn.style.color = "#fff", Vn.style.color = t;
  const r = getComputedStyle(Vn).color;
  if (r !== n)
    return [0, 0, 0, 1];
  let i = r.replace(/[^\d.,]/g, "").split(",").map(Number.parseFloat);
  return i.length < 4 && i.push(1), i = i.map((o) => {
    const s = Number.isNaN(o);
    return g1.NODE_ENV !== "production" && s && console.warn("Could not parse color", e), s ? 0 : o;
  }), vs[t] = i, i;
}
function dr(e, t) {
  const [n, r, i] = dc(e);
  return `rgba(${n}, ${r}, ${i}, ${t})`;
}
const ad = /* @__PURE__ */ new Map();
function sd(e, t) {
  const n = `${e}-${t}`, r = ad.get(n);
  if (r !== void 0)
    return r;
  const i = on(e, t);
  return ad.set(n, i), i;
}
function on(e, t) {
  if (t === void 0)
    return e;
  const [n, r, i, o] = dc(e);
  if (o === 1)
    return e;
  const [s, a, l, c] = dc(t), u = o + c * (1 - o), h = (o * n + c * s * (1 - o)) / u, f = (o * r + c * a * (1 - o)) / u, g = (o * i + c * l * (1 - o)) / u;
  return `rgba(${h}, ${f}, ${g}, ${u})`;
}
var Hr = /* @__PURE__ */ new Map(), $r = /* @__PURE__ */ new Map(), hc = /* @__PURE__ */ new Map();
function m1() {
  Hr.clear(), hc.clear(), $r.clear();
}
function v1(e, t, n, r, i) {
  var o, s, a;
  let l = 0, c = {};
  for (let h of e) l += (o = n.get(h)) != null ? o : i, c[h] = ((s = c[h]) != null ? s : 0) + 1;
  let u = t - l;
  for (let h of Object.keys(c)) {
    let f = c[h], g = (a = n.get(h)) != null ? a : i, d = g * f / l, v = u * d * r / f, k = g + v;
    n.set(h, k);
  }
}
function y1(e, t) {
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
function bi(e, t, n, r) {
  var i, o;
  let s = $r.get(n);
  if (r && s !== void 0 && s.count > 2e4) {
    let c = hc.get(n);
    if (c === void 0 && (c = y1(e, s.size), hc.set(n, c)), s.count > 5e5) {
      let h = 0;
      for (let f of t) h += (i = c.get(f)) != null ? i : s.size;
      return h * 1.01;
    }
    let u = e.measureText(t);
    return v1(t, u.width, c, Math.max(0.05, 1 - s.count / 2e5), s.size), $r.set(n, { count: s.count + t.length, size: s.size }), u.width;
  }
  let a = e.measureText(t), l = a.width / t.length;
  if (((o = s == null ? void 0 : s.count) != null ? o : 0) > 2e4) return a.width;
  if (s === void 0) $r.set(n, { count: t.length, size: l });
  else {
    let c = l - s.size, u = t.length / (s.count + t.length), h = s.size + c * u;
    $r.set(n, { count: s.count + t.length, size: h });
  }
  return a.width;
}
function b1(e, t, n, r, i, o, s, a) {
  if (t.length <= 1) return t.length;
  if (i < n) return -1;
  let l = Math.floor(n / i * o), c = bi(e, t.slice(0, Math.max(0, l)), r, s);
  if (c !== n) if (c < n) {
    for (; c < n; ) l++, c = bi(e, t.slice(0, Math.max(0, l)), r, s);
    l--;
  } else for (; c > n; ) {
    let u = t.lastIndexOf(" ", l - 1);
    u > 0 ? l = u : l--, c = bi(e, t.slice(0, Math.max(0, l)), r, s);
  }
  if (t[l] !== " ") {
    let u = 0;
    u = t.lastIndexOf(" ", l), u > 0 && (l = u);
  }
  return l;
}
function w1(e, t, n, r, i, o) {
  let s = `${t}_${n}_${r}px`, a = Hr.get(s);
  if (a !== void 0) return a;
  if (r <= 0) return [];
  let l = [], c = t.split(`
`), u = $r.get(n), h = u === void 0 ? t.length : r / u.size * 1.5, f = i && u !== void 0 && u.count > 2e4;
  for (let g of c) {
    let d = bi(e, g.slice(0, Math.max(0, h)), n, f), v = Math.min(g.length, h);
    if (d <= r) l.push(g);
    else {
      for (; d > r; ) {
        let k = b1(e, g, r, n, d, v, f), I = g.slice(0, Math.max(0, k));
        g = g.slice(I.length), l.push(I), d = bi(e, g.slice(0, Math.max(0, h)), n, f), v = Math.min(g.length, h);
      }
      d > 0 && l.push(g);
    }
  }
  return l = l.map((g, d) => d === 0 ? g.trimEnd() : g.trim()), Hr.set(s, l), Hr.size > 500 && Hr.delete(Hr.keys().next().value), l;
}
function S1(e, t) {
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
function C1(e, t) {
  const [n, r] = t;
  if (e.columns.hasIndex(n) || e.rows.hasIndex(r))
    return !0;
  if (e.current !== void 0) {
    if (wi(e.current.cell, t))
      return !0;
    const i = [e.current.range, ...e.current.rangeStack];
    for (const o of i)
      if (n >= o.x && n < o.x + o.width && r >= o.y && r < o.y + o.height)
        return !0;
  }
  return !1;
}
function xi(e, t) {
  return (e ?? "") === (t ?? "");
}
function k1(e, t, n) {
  return n.current === void 0 || e[1] !== n.current.cell[1] ? !1 : t.span === void 0 ? n.current.cell[0] === e[0] : n.current.cell[0] >= t.span[0] && n.current.cell[0] <= t.span[1];
}
function Ug(e, t) {
  const [n, r] = e;
  return n >= t.x && n < t.x + t.width && r >= t.y && r < t.y + t.height;
}
function wi(e, t) {
  return (e == null ? void 0 : e[0]) === (t == null ? void 0 : t[0]) && (e == null ? void 0 : e[1]) === (t == null ? void 0 : t[1]);
}
function Xg(e) {
  return [e.x + e.width - 1, e.y + e.height - 1];
}
function ld(e, t, n) {
  const r = n.x, i = n.x + n.width - 1, o = n.y, s = n.y + n.height - 1, [a, l] = e;
  if (l < o || l > s)
    return !1;
  if (t.span === void 0)
    return a >= r && a <= i;
  const [c, u] = t.span;
  return c >= r && c <= i || u >= r && c <= i || c < r && u > i;
}
function x1(e, t, n, r) {
  let i = 0;
  if (n.current === void 0)
    return i;
  const o = n.current.range;
  (r || o.height * o.width > 1) && ld(e, t, o) && i++;
  for (const s of n.current.rangeStack)
    ld(e, t, s) && i++;
  return i;
}
function Yg(e, t) {
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
function Wr(e, t) {
  let n = 0;
  const r = Yg(e, t);
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (o.sticky)
      n += o.width;
    else
      break;
  }
  return n;
}
function mr(e, t, n) {
  if (typeof n == "number")
    return t * n;
  {
    let r = 0;
    for (let i = e - t; i < e; i++)
      r += n(i);
    return r;
  }
}
function gc(e, t, n, r, i) {
  const o = Yg(e, r), s = [];
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
function R1(e, t, n) {
  let r = 0;
  for (const i of t) {
    const o = i.sticky ? r : r + (n ?? 0);
    if (e <= o + i.width)
      return i.sourceIndex;
    r += i.width;
  }
  return -1;
}
function _1(e, t, n, r, i, o, s, a, l, c) {
  const u = r + i;
  if (n && e <= i)
    return -2;
  if (e <= u)
    return -1;
  let h = t;
  for (let d = 0; d < c; d++) {
    const v = o - 1 - d, k = typeof s == "number" ? s : s(v);
    if (h -= k, e >= h)
      return v;
  }
  const f = o - c, g = e - (l ?? 0);
  if (typeof s == "number") {
    const d = Math.floor((g - u) / s) + a;
    return d >= f ? void 0 : d;
  } else {
    let d = u;
    for (let v = a; v < f; v++) {
      const k = s(v);
      if (g <= d + k)
        return v;
      d += k;
    }
    return;
  }
}
let uo = 0, Si = {};
const T1 = typeof window > "u";
async function E1() {
  var e;
  T1 || ((e = document == null ? void 0 : document.fonts) == null ? void 0 : e.ready) === void 0 || (await document.fonts.ready, uo = 0, Si = {}, m1());
}
E1();
function Kg(e, t, n, r) {
  return `${e}_${r ?? (t == null ? void 0 : t.font)}_${n}`;
}
function Mi(e, t, n, r = "middle") {
  const i = Kg(e, t, r, n);
  let o = Si[i];
  return o === void 0 && (o = t.measureText(e), Si[i] = o, uo++), uo > 1e4 && (Si = {}, uo = 0), o;
}
function M1(e, t) {
  const n = Kg(e, void 0, "middle", t);
  return Si[n];
}
function tr(e, t) {
  return typeof t != "string" && (t = t.baseFontFull), I1(e, t);
}
function cd(e, t) {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  e.save(), e.textBaseline = t;
  const r = e.measureText(n);
  return e.restore(), r;
}
const ud = [];
function I1(e, t) {
  for (const o of ud)
    if (o.key === t)
      return o.val;
  const n = cd(e, "alphabetic"), i = -(cd(e, "middle").actualBoundingBoxDescent - n.actualBoundingBoxDescent) + n.actualBoundingBoxAscent / 2;
  return ud.push({
    key: t,
    val: i
  }), i;
}
function P1(e, t, n, r, i, o) {
  const { ctx: s, rect: a, theme: l } = e;
  let c = Number.MAX_SAFE_INTEGER;
  const u = 500;
  if (t !== void 0 && (c = n - t, c < u)) {
    const h = 1 - c / u;
    s.globalAlpha = h, s.fillStyle = l.bgSearchResult, s.fillRect(a.x + 1, a.y + 1, a.width - (i ? 2 : 1), a.height - (o ? 2 : 1)), s.globalAlpha = 1, r !== void 0 && (r.fillStyle = l.bgSearchResult);
  }
  return c < u;
}
function Ii(e, t, n) {
  const { ctx: r, theme: i } = e, o = t ?? {}, s = n ?? i.textDark;
  return s !== o.fillStyle && (r.fillStyle = s, o.fillStyle = s), o;
}
function Gg(e, t, n, r, i, o, s, a, l) {
  l === "right" ? e.fillText(t, n + i - (a.cellHorizontalPadding + 0.5), r + o / 2 + s) : l === "center" ? e.fillText(t, n + i / 2, r + o / 2 + s) : e.fillText(t, n + a.cellHorizontalPadding + 0.5, r + o / 2 + s);
}
function Vg(e, t) {
  const n = Mi("ABCi09jgqpy", e, t);
  return n.actualBoundingBoxAscent + n.actualBoundingBoxDescent;
}
function A1(e, t) {
  e.includes(`
`) && (e = e.split(/\r?\n/, 1)[0]);
  const n = t / 4;
  return e.length > n && (e = e.slice(0, n)), e;
}
function O1(e, t, n, r, i, o, s, a, l, c) {
  const u = a.baseFontFull, h = w1(e, t, u, i - a.cellHorizontalPadding * 2, c ?? !1), f = Vg(e, u), g = a.lineHeight * f, d = f + g * (h.length - 1), v = d + a.cellVerticalPadding > o;
  v && (e.save(), e.rect(n, r, i, o), e.clip());
  const k = r + o / 2 - d / 2;
  let I = Math.max(r + a.cellVerticalPadding, k);
  for (const y of h)
    if (Gg(e, y, n, I, i, f, s, a, l), I += g, I > r + o)
      break;
  v && e.restore();
}
function $n(e, t, n, r, i) {
  const { ctx: o, rect: s, theme: a } = e, { x: l, y: c, width: u, height: h } = s;
  r = r ?? !1, r || (t = A1(t, u));
  const f = tr(o, a), g = Ic(t) === "rtl";
  if (n === void 0 && g && (n = "right"), g && (o.direction = "rtl"), t.length > 0) {
    let d = !1;
    n === "right" ? (o.textAlign = "right", d = !0) : n !== void 0 && n !== "left" && (o.textAlign = n, d = !0), r ? O1(o, t, l, c, u, h, f, a, n, i) : Gg(o, t, l, c, u, h, f, a, n), d && (o.textAlign = "start"), g && (o.direction = "inherit");
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
function D1(e, t, n) {
  e.arc(t, n - 1.25 * 3.5, 1.25, 0, 2 * Math.PI, !1), e.arc(t, n, 1.25, 0, 2 * Math.PI, !1), e.arc(t, n + 1.25 * 3.5, 1.25, 0, 2 * Math.PI, !1);
}
function L1(e, t, n) {
  const r = function(a, l) {
    const c = l.x - a.x, u = l.y - a.y, h = Math.sqrt(c * c + u * u), f = c / h, g = u / h;
    return {
      x: c,
      y: l.y - a.y,
      len: h,
      nx: f,
      ny: g,
      ang: Math.atan2(g, f)
    };
  };
  let i;
  const o = t.length;
  let s = t[o - 1];
  for (let a = 0; a < o; a++) {
    let l = t[a % o];
    const c = t[(a + 1) % o], u = r(l, s), h = r(l, c), f = u.nx * h.ny - u.ny * h.nx, g = u.nx * h.nx - u.ny * -h.ny;
    let d = Math.asin(f < -1 ? -1 : f > 1 ? 1 : f), v = 1, k = !1;
    g < 0 ? d < 0 ? d = Math.PI + d : (d = Math.PI - d, v = -1, k = !0) : d > 0 && (v = -1, k = !0), i = l.radius !== void 0 ? l.radius : n;
    const I = d / 2;
    let y = Math.abs(Math.cos(I) * i / Math.sin(I)), S;
    y > Math.min(u.len / 2, h.len / 2) ? (y = Math.min(u.len / 2, h.len / 2), S = Math.abs(y * Math.sin(I) / Math.cos(I))) : S = i;
    let P = l.x + h.nx * y, b = l.y + h.ny * y;
    P += -h.ny * S * v, b += h.nx * S * v, e.arc(P, b, S, u.ang + Math.PI / 2 * v, h.ang - Math.PI / 2 * v, k), s = l, l = c;
  }
  e.closePath();
}
function pc(e, t, n, r, i, o, s, a, l, c, u, h, f, g, d) {
  const v = {
    x: 0,
    y: o + c,
    width: 0,
    height: 0
  };
  if (e >= g.length || t >= u || t < -2 || e < 0)
    return v;
  const k = o - i;
  if (e >= h) {
    const I = s > e ? -1 : 1, y = Wr(g);
    v.x += y + l;
    for (let S = s; S !== e; S += I)
      v.x += g[I === 1 ? S : S - 1].width * I;
  } else
    for (let I = 0; I < e; I++)
      v.x += g[I].width;
  if (v.width = g[e].width + 1, t === -1)
    v.y = i, v.height = k;
  else if (t === -2) {
    v.y = 0, v.height = i;
    let I = e;
    const y = g[e].group, S = g[e].sticky;
    for (; I > 0 && xi(g[I - 1].group, y) && g[I - 1].sticky === S; ) {
      const b = g[I - 1];
      v.x -= b.width, v.width += b.width, I--;
    }
    let P = e;
    for (; P + 1 < g.length && xi(g[P + 1].group, y) && g[P + 1].sticky === S; ) {
      const b = g[P + 1];
      v.width += b.width, P++;
    }
    if (!S) {
      const b = Wr(g), M = v.x - b;
      M < 0 && (v.x -= M, v.width += M), v.x + v.width > n && (v.width = n - v.x);
    }
  } else if (t >= u - f) {
    let I = u - t;
    for (v.y = r; I > 0; ) {
      const y = t + I - 1;
      v.height = typeof d == "number" ? d : d(y), v.y -= v.height, I--;
    }
    v.height += 1;
  } else {
    const I = a > t ? -1 : 1;
    if (typeof d == "number") {
      const y = t - a;
      v.y += y * d;
    } else
      for (let y = a; y !== t; y += I)
        v.y += d(y) * I;
    v.height = (typeof d == "number" ? d : d(t)) + 1;
  }
  return v;
}
const $c = 1 << 21;
function kn(e, t) {
  return (t + 2) * $c + e;
}
function Zg(e) {
  return e % $c;
}
function Nc(e) {
  return Math.floor(e / $c) - 2;
}
function Bc(e) {
  const t = Zg(e), n = Nc(e);
  return [t, n];
}
class Qg {
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
      const n = Zg(t), r = Nc(t), i = this.visibleWindow, o = n >= i.x && n <= i.x + i.width || n < this.freezeCols, s = r >= i.y && r <= i.y + i.height || this.freezeRows.includes(r);
      return o && s;
    });
  }
  setWindow(t, n, r) {
    this.visibleWindow.x === t.x && this.visibleWindow.y === t.y && this.visibleWindow.width === t.width && this.visibleWindow.height === t.height && this.freezeCols === n && Br(this.freezeRows, r) || (this.visibleWindow = t, this.freezeCols = n, this.freezeRows = r, this.clearOutOfWindow());
  }
}
class F1 extends Qg {
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
class Ci {
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
      if (Nc(t) < 0)
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
      yield Bc(t);
  }
}
function q1(e) {
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
const Jg = {
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
function ep() {
  return Jg;
}
const H1 = St.createContext(Jg);
function Jn(e, ...t) {
  const n = { ...e };
  for (const r of t)
    if (r !== void 0)
      for (const i in r)
        r.hasOwnProperty(i) && (i === "bgCell" ? n[i] = on(r[i], n[i]) : n[i] = r[i]);
  return (n.headerFontFull === void 0 || e.fontFamily !== n.fontFamily || e.headerFontStyle !== n.headerFontStyle) && (n.headerFontFull = `${n.headerFontStyle} ${n.fontFamily}`), (n.baseFontFull === void 0 || e.fontFamily !== n.fontFamily || e.baseFontStyle !== n.baseFontStyle) && (n.baseFontFull = `${n.baseFontStyle} ${n.fontFamily}`), (n.markerFontFull === void 0 || e.fontFamily !== n.fontFamily || e.markerFontStyle !== n.markerFontStyle) && (n.markerFontFull = `${n.markerFontStyle} ${n.fontFamily}`), n;
}
const mc = 150;
function z1(e, t, n, r) {
  var o;
  const i = r(t);
  return ((o = i == null ? void 0 : i.measure) == null ? void 0 : o.call(i, e, t, n)) ?? mc;
}
function tp(e, t, n, r, i, o, s, a, l) {
  let c = 0;
  const u = i === void 0 ? [] : i.map((f) => {
    const g = z1(e, f[r], t, l);
    return c = Math.max(c, g), g;
  });
  if (u.length > 5 && a) {
    c = 0;
    let f = 0;
    for (const d of u)
      f += d;
    const g = f / u.length;
    for (let d = 0; d < u.length; d++)
      u[d] >= g * 2 ? u[d] = 0 : c = Math.max(c, u[d]);
  }
  c = Math.max(c, e.measureText(n.title).width + 16 + (n.icon === void 0 ? 0 : 28));
  const h = Math.max(Math.ceil(o), Math.min(Math.floor(s), Math.ceil(c)));
  return {
    ...n,
    width: h
  };
}
function $1(e, t, n, r, i, o, s, a, l) {
  const c = p.useRef(t), u = p.useRef(n), h = p.useRef(s);
  c.current = t, u.current = n, h.current = s;
  const [f, g] = p.useMemo(() => {
    if (typeof window > "u")
      return [null, null];
    const y = document.createElement("canvas");
    return y.style.display = "none", y.style.opacity = "0", y.style.position = "fixed", [y, y.getContext("2d", { alpha: !1 })];
  }, []);
  p.useLayoutEffect(() => (f && document.documentElement.append(f), () => {
    f == null || f.remove();
  }), [f]);
  const d = p.useRef({}), v = p.useRef(), [k, I] = p.useState();
  return p.useLayoutEffect(() => {
    const y = u.current;
    if (y === void 0 || e.every(eo))
      return;
    let S = Math.max(1, 10 - Math.floor(e.length / 1e4)), P = 0;
    S < c.current && S > 1 && (S--, P = 1);
    const b = {
      x: 0,
      y: 0,
      width: e.length,
      height: Math.min(c.current, S)
    }, M = {
      x: 0,
      y: c.current - 1,
      width: e.length,
      height: 1
    };
    (async () => {
      const E = y(b, l.signal), _ = P > 0 ? y(M, l.signal) : void 0;
      let F;
      typeof E == "object" ? F = E : F = await bf(E), _ !== void 0 && (typeof _ == "object" ? F = [...F, ..._] : F = [...F, ...await bf(_)]), v.current = e, I(F);
    })();
  }, [l.signal, e]), p.useMemo(() => {
    let S = e.every(eo) ? e : g === null ? e.map((O) => eo(O) ? O : {
      ...O,
      width: mc
    }) : (g.font = h.current.baseFontFull, e.map((O, E) => {
      if (eo(O))
        return O;
      if (d.current[O.id] !== void 0)
        return {
          ...O,
          width: d.current[O.id]
        };
      if (k === void 0 || v.current !== e || O.id === void 0)
        return {
          ...O,
          width: mc
        };
      const _ = tp(g, s, O, E, k, i, o, !0, a);
      return d.current[O.id] = _.width, _;
    })), P = 0, b = 0;
    const M = [];
    for (const [O, E] of S.entries())
      P += E.width, E.grow !== void 0 && E.grow > 0 && (b += E.grow, M.push(O));
    if (P < r && M.length > 0) {
      const O = [...S], E = r - P;
      let _ = E;
      for (let F = 0; F < M.length; F++) {
        const R = M[F], w = (S[R].grow ?? 0) / b, x = F === M.length - 1 ? _ : Math.min(_, Math.floor(E * w));
        O[R] = {
          ...S[R],
          growOffset: x,
          width: S[R].width + x
        }, _ -= x;
      }
      S = O;
    }
    return {
      sizedColumns: S,
      nonGrowWidth: P
    };
  }, [r, e, g, k, s, i, o, a]);
}
var ys, fd;
function N1() {
  if (fd) return ys;
  fd = 1;
  function e(t, n, r) {
    return t === t && (r !== void 0 && (t = t <= r ? t : r), n !== void 0 && (t = t >= n ? t : n)), t;
  }
  return ys = e, ys;
}
var bs, dd;
function B1() {
  if (dd) return bs;
  dd = 1;
  var e = N1(), t = Ec();
  function n(r, i, o) {
    return o === void 0 && (o = i, i = void 0), o !== void 0 && (o = t(o), o = o === o ? o : 0), i !== void 0 && (i = t(i), i = i === i ? i : 0), e(t(r), i, o);
  }
  return bs = n, bs;
}
var W1 = B1();
const Cn = /* @__PURE__ */ er(W1);
var ws, hd;
function j1() {
  if (hd) return ws;
  hd = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return ws = t, ws;
}
var Ss, gd;
function U1() {
  if (gd) return Ss;
  gd = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Ss = e, Ss;
}
var Cs, pd;
function np() {
  if (pd) return Cs;
  pd = 1;
  var e = Sc(), t = j1(), n = U1();
  function r(i) {
    var o = -1, s = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++o < s; )
      this.add(i[o]);
  }
  return r.prototype.add = r.prototype.push = t, r.prototype.has = n, Cs = r, Cs;
}
var ks, md;
function X1() {
  if (md) return ks;
  md = 1;
  function e(t, n, r, i) {
    for (var o = t.length, s = r + (i ? 1 : -1); i ? s-- : ++s < o; )
      if (n(t[s], s, t))
        return s;
    return -1;
  }
  return ks = e, ks;
}
var xs, vd;
function Y1() {
  if (vd) return xs;
  vd = 1;
  function e(t) {
    return t !== t;
  }
  return xs = e, xs;
}
var Rs, yd;
function K1() {
  if (yd) return Rs;
  yd = 1;
  function e(t, n, r) {
    for (var i = r - 1, o = t.length; ++i < o; )
      if (t[i] === n)
        return i;
    return -1;
  }
  return Rs = e, Rs;
}
var _s, bd;
function G1() {
  if (bd) return _s;
  bd = 1;
  var e = X1(), t = Y1(), n = K1();
  function r(i, o, s) {
    return o === o ? n(i, o, s) : e(i, t, s);
  }
  return _s = r, _s;
}
var Ts, wd;
function V1() {
  if (wd) return Ts;
  wd = 1;
  var e = G1();
  function t(n, r) {
    var i = n == null ? 0 : n.length;
    return !!i && e(n, r, 0) > -1;
  }
  return Ts = t, Ts;
}
var Es, Sd;
function Z1() {
  if (Sd) return Es;
  Sd = 1;
  function e(t, n, r) {
    for (var i = -1, o = t == null ? 0 : t.length; ++i < o; )
      if (r(n, t[i]))
        return !0;
    return !1;
  }
  return Es = e, Es;
}
var Ms, Cd;
function rp() {
  if (Cd) return Ms;
  Cd = 1;
  function e(t, n) {
    return t.has(n);
  }
  return Ms = e, Ms;
}
var Is, kd;
function ip() {
  if (kd) return Is;
  kd = 1;
  var e = gr(), t = An(), n = e(t, "Set");
  return Is = n, Is;
}
var Ps, xd;
function Q1() {
  if (xd) return Ps;
  xd = 1;
  function e() {
  }
  return Ps = e, Ps;
}
var As, Rd;
function Wc() {
  if (Rd) return As;
  Rd = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(i) {
      r[++n] = i;
    }), r;
  }
  return As = e, As;
}
var Os, _d;
function J1() {
  if (_d) return Os;
  _d = 1;
  var e = ip(), t = Q1(), n = Wc(), r = 1 / 0, i = e && 1 / n(new e([, -0]))[1] == r ? function(o) {
    return new e(o);
  } : t;
  return Os = i, Os;
}
var Ds, Td;
function ev() {
  if (Td) return Ds;
  Td = 1;
  var e = np(), t = V1(), n = Z1(), r = rp(), i = J1(), o = Wc(), s = 200;
  function a(l, c, u) {
    var h = -1, f = t, g = l.length, d = !0, v = [], k = v;
    if (u)
      d = !1, f = n;
    else if (g >= s) {
      var I = c ? null : i(l);
      if (I)
        return o(I);
      d = !1, f = r, k = new e();
    } else
      k = c ? [] : v;
    e:
      for (; ++h < g; ) {
        var y = l[h], S = c ? c(y) : y;
        if (y = u || y !== 0 ? y : 0, d && S === S) {
          for (var P = k.length; P--; )
            if (k[P] === S)
              continue e;
          c && k.push(S), v.push(y);
        } else f(k, S, u) || (k !== v && k.push(S), v.push(y));
      }
    return v;
  }
  return Ds = a, Ds;
}
var Ls, Ed;
function tv() {
  if (Ed) return Ls;
  Ed = 1;
  var e = ev();
  function t(n) {
    return n && n.length ? e(n) : [];
  }
  return Ls = t, Ls;
}
var nv = tv();
const rv = /* @__PURE__ */ er(nv);
var Fs, Md;
function op() {
  if (Md) return Fs;
  Md = 1;
  function e(t, n) {
    for (var r = -1, i = n.length, o = t.length; ++r < i; )
      t[o + r] = n[r];
    return t;
  }
  return Fs = e, Fs;
}
var qs, Id;
function iv() {
  if (Id) return qs;
  Id = 1;
  var e = Ri(), t = Cc(), n = Pn(), r = e ? e.isConcatSpreadable : void 0;
  function i(o) {
    return n(o) || t(o) || !!(r && o && o[r]);
  }
  return qs = i, qs;
}
var Hs, Pd;
function ov() {
  if (Pd) return Hs;
  Pd = 1;
  var e = op(), t = iv();
  function n(r, i, o, s, a) {
    var l = -1, c = r.length;
    for (o || (o = t), a || (a = []); ++l < c; ) {
      var u = r[l];
      i > 0 && o(u) ? i > 1 ? n(u, i - 1, o, s, a) : e(a, u) : s || (a[a.length] = u);
    }
    return a;
  }
  return Hs = n, Hs;
}
var zs, Ad;
function av() {
  if (Ad) return zs;
  Ad = 1;
  var e = ov();
  function t(n) {
    var r = n == null ? 0 : n.length;
    return r ? e(n, 1) : [];
  }
  return zs = t, zs;
}
var sv = av();
const Od = /* @__PURE__ */ er(sv);
var $s, Dd;
function lv() {
  if (Dd) return $s;
  Dd = 1;
  var e = Math.ceil, t = Math.max;
  function n(r, i, o, s) {
    for (var a = -1, l = t(e((i - r) / (o || 1)), 0), c = Array(l); l--; )
      c[s ? l : ++a] = r, r += o;
    return c;
  }
  return $s = n, $s;
}
var Ns, Ld;
function jc() {
  if (Ld) return Ns;
  Ld = 1;
  var e = pg(), t = xc();
  function n(r) {
    return r != null && t(r.length) && !e(r);
  }
  return Ns = n, Ns;
}
var Bs, Fd;
function cv() {
  if (Fd) return Bs;
  Fd = 1;
  var e = bc(), t = jc(), n = kc(), r = hr();
  function i(o, s, a) {
    if (!r(a))
      return !1;
    var l = typeof s;
    return (l == "number" ? t(a) && n(s, a.length) : l == "string" && s in a) ? e(a[s], o) : !1;
  }
  return Bs = i, Bs;
}
var Ws, qd;
function uv() {
  if (qd) return Ws;
  qd = 1;
  var e = Ec(), t = 1 / 0, n = 17976931348623157e292;
  function r(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var o = i < 0 ? -1 : 1;
      return o * n;
    }
    return i === i ? i : 0;
  }
  return Ws = r, Ws;
}
var js, Hd;
function fv() {
  if (Hd) return js;
  Hd = 1;
  var e = lv(), t = cv(), n = uv();
  function r(i) {
    return function(o, s, a) {
      return a && typeof a != "number" && t(o, s, a) && (s = a = void 0), o = n(o), s === void 0 ? (s = o, o = 0) : s = n(s), a = a === void 0 ? o < s ? 1 : -1 : n(a), e(o, s, a, i);
    };
  }
  return js = r, js;
}
var Us, zd;
function dv() {
  if (zd) return Us;
  zd = 1;
  var e = fv(), t = e();
  return Us = t, Us;
}
var hv = dv();
const ur = /* @__PURE__ */ er(hv), ht = '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">', gv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}<rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/><path d="M15.75 4h-1.5a.25.25 0 0 0-.177.074L9.308 8.838a3.75 3.75 0 1 0 1.854 1.854l1.155-1.157.967.322a.5.5 0 0 0 .65-.55l-.18-1.208.363-.363.727.331a.5.5 0 0 0 .69-.59l-.254-.904.647-.647A.25.25 0 0 0 16 5.75v-1.5a.25.25 0 0 0-.25-.25zM7.5 13.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" fill="${t}"/></svg>`;
}, pv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}<rect x="2" y="2" width="16" height="16" rx="4" fill="${n}"/><path d="m12.223 13.314 3.052-2.826a.65.65 0 0 0 0-.984l-3.052-2.822c-.27-.25-.634-.242-.865.022-.232.263-.206.636.056.882l2.601 2.41-2.601 2.41c-.262.245-.288.619-.056.882.231.263.595.277.865.026Zm-4.444.005c.266.25.634.241.866-.027.231-.263.206-.636-.06-.882L5.983 10l2.602-2.405c.266-.25.291-.62.06-.887-.232-.263-.596-.272-.866-.022L4.723 9.51a.653.653 0 0 0 0 .983l3.056 2.827Z" fill="${t}"/></svg>`;
}, mv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${n}"/>
    <path d="M6.52 12.78H5.51V8.74l-1.33.47v-.87l2.29-.83h.05v5.27zm5.2 0H8.15v-.69l1.7-1.83a6.38 6.38 0 0 0 .34-.4c.09-.11.16-.22.22-.32s.1-.19.12-.27a.9.9 0 0 0 0-.56.63.63 0 0 0-.15-.23.58.58 0 0 0-.22-.15.75.75 0 0 0-.29-.05c-.27 0-.48.08-.62.23a.95.95 0 0 0-.2.65H8.03c0-.24.04-.46.13-.67a1.67 1.67 0 0 1 .97-.91c.23-.1.49-.14.77-.14.26 0 .5.04.7.11.21.08.38.18.52.32.14.13.25.3.32.48a1.74 1.74 0 0 1 .03 1.13 2.05 2.05 0 0 1-.24.47 4.16 4.16 0 0 1-.35.47l-.47.5-1 1.05h2.32v.8zm1.8-3.08h.55c.28 0 .48-.06.61-.2a.76.76 0 0 0 .2-.55.8.8 0 0 0-.05-.28.56.56 0 0 0-.13-.22.6.6 0 0 0-.23-.15.93.93 0 0 0-.32-.05.92.92 0 0 0-.29.05.72.72 0 0 0-.23.12.57.57 0 0 0-.21.46H12.4a1.3 1.3 0 0 1 .5-1.04c.15-.13.33-.23.54-.3a2.48 2.48 0 0 1 1.4 0c.2.06.4.15.55.28.15.13.27.28.36.47.08.19.13.4.13.65a1.15 1.15 0 0 1-.2.65 1.36 1.36 0 0 1-.58.49c.15.05.28.12.38.2a1.14 1.14 0 0 1 .43.62c.03.13.05.26.05.4 0 .25-.05.47-.14.66a1.42 1.42 0 0 1-.4.49c-.16.13-.35.23-.58.3a2.51 2.51 0 0 1-.73.1c-.22 0-.44-.03-.65-.09a1.8 1.8 0 0 1-.57-.28 1.43 1.43 0 0 1-.4-.47 1.41 1.41 0 0 1-.15-.66h1a.66.66 0 0 0 .22.5.87.87 0 0 0 .58.2c.25 0 .45-.07.6-.2a.71.71 0 0 0 .21-.56.97.97 0 0 0-.06-.36.61.61 0 0 0-.18-.25.74.74 0 0 0-.28-.15 1.33 1.33 0 0 0-.37-.04h-.55V9.7z" fill="${t}"/>
  </svg>`;
}, vv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path d="M8.182 12.4h3.636l.655 1.6H14l-3.454-8H9.455L6 14h1.527l.655-1.6zM10 7.44l1.36 3.651H8.64L10 7.441z" fill="${t}"/>
</svg>`;
}, yv = (e) => {
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
}, ap = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
<path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.29 4.947a3.368 3.368 0 014.723.04 3.375 3.375 0 01.041 4.729l-.009.009-1.596 1.597a3.367 3.367 0 01-5.081-.364.71.71 0 011.136-.85 1.95 1.95 0 002.942.21l1.591-1.593a1.954 1.954 0 00-.027-2.733 1.95 1.95 0 00-2.732-.027l-.91.907a.709.709 0 11-1.001-1.007l.915-.911.007-.007z" fill="${t}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.55 8.678a3.368 3.368 0 015.082.364.71.71 0 01-1.136.85 1.95 1.95 0 00-2.942-.21l-1.591 1.593a1.954 1.954 0 00.027 2.733 1.95 1.95 0 002.73.028l.906-.906a.709.709 0 111.003 1.004l-.91.91-.008.01a3.368 3.368 0 01-4.724-.042 3.375 3.375 0 01-.041-4.728l.009-.009L6.55 8.678z" fill="${t}"/>
</svg>
  `;
}, bv = (e) => {
  const t = e.bgColor;
  return `${ht}
    <path stroke="${t}" stroke-width="2" d="M12 3v14"/>
    <path stroke="${t}" stroke-width="2" stroke-linecap="round" d="M10 4h4m-4 12h4"/>
    <path d="M11 14h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4v2h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4v2ZM9.5 8H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.5v2H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h4.5v2Z" fill="${t}"/>
  </svg>
`;
}, wv = ap, Sv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.138a.5.5 0 00.748.434l5.492-3.138a.5.5 0 000-.868L7.748 6.427A.5.5 0 007 6.862v6.276z" fill="${t}"/>
</svg>`;
}, Cv = (e) => {
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
}, kv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="M12.499 10.801a.5.5 0 01.835 0l2.698 4.098a.5.5 0 01-.418.775H10.22a.5.5 0 01-.417-.775l2.697-4.098z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07 8.934a.5.5 0 01.824 0l4.08 5.958a.5.5 0 01-.412.782h-8.16a.5.5 0 01-.413-.782l4.08-5.958zM13.75 8.333a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z" fill="${t}"/>
</svg>`;
}, xv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <path fill="${t}" d="M3 3h14v14H3z"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2zm-7.24 9.78h1.23c.15 0 .27.06.36.18l.98 1.28a.43.43 0 0 1-.05.58l-1.2 1.21a.45.45 0 0 1-.6.04A6.72 6.72 0 0 1 7.33 10c0-.61.1-1.2.25-1.78a6.68 6.68 0 0 1 2.12-3.3.44.44 0 0 1 .6.04l1.2 1.2c.16.17.18.42.05.59l-.98 1.29a.43.43 0 0 1-.36.17H8.98A5.38 5.38 0 0 0 8.67 10c0 .62.11 1.23.3 1.79z" fill="${n}"/>
  </svg>`;
}, Rv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${n}"/>
    <path d="m13.49 13.15-2.32-3.27h1.4V7h1.86v2.88h1.4l-2.34 3.27zM11 13H9v-3l-1.5 1.92L6 10v3H4V7h2l1.5 2L9 7h2v6z" fill="${t}"/>
  </svg>`;
}, _v = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path d="M14.8 4.182h-.6V3H13v1.182H7V3H5.8v1.182h-.6c-.66 0-1.2.532-1.2 1.182v9.454C4 15.468 4.54 16 5.2 16h9.6c.66 0 1.2-.532 1.2-1.182V5.364c0-.65-.54-1.182-1.2-1.182zm0 10.636H5.2V7.136h9.6v7.682z" fill="${t}"/>
</svg>`;
}, Tv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${n}"/>
    <path d="M10 4a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm0 10.8A4.8 4.8 0 0 1 5.2 10a4.8 4.8 0 1 1 4.8 4.8z" fill="${t}"/>
    <path d="M10 7H9v3.93L12.5 13l.5-.8-3-1.76V7z" fill="${t}"/>
  </svg>`;
}, Ev = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.643a1.357 1.357 0 100 2.714 1.357 1.357 0 000-2.714zM7.357 10a2.643 2.643 0 115.286 0 2.643 2.643 0 01-5.286 0z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.589 4.898A5.643 5.643 0 0115.643 10v.5a2.143 2.143 0 01-4.286 0V8a.643.643 0 011.286 0v2.5a.857.857 0 001.714 0V10a4.357 4.357 0 10-1.708 3.46.643.643 0 01.782 1.02 5.643 5.643 0 11-5.842-9.582z" fill="${t}"/>
</svg>`;
}, Mv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <rect x="2" y="8" width="10" height="8" rx="2" fill="${n}"/>
    <rect x="8" y="4" width="10" height="8" rx="2" fill="${n}"/>
    <path d="M10.68 7.73V6l2.97 3.02-2.97 3.02v-1.77c-2.13 0-3.62.7-4.68 2.2.43-2.15 1.7-4.31 4.68-4.74z" fill="${t}"/>
  </svg>`;
}, Iv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path fill="${t}" d="M4 3h12v14H4z"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2A1.6 1.6 0 002 3.6v12.8A1.6 1.6 0 003.6 18h12.8a1.6 1.6 0 001.6-1.6V3.6A1.6 1.6 0 0016.4 2H3.6zm11.3 10.8a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7h-1.4a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.6-.693.117.117 0 00.1-.115V10.35a.117.117 0 00-.117-.116h-2.8a.117.117 0 00-.117.116v2.333c0 .064.053.117.117.117h.117a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7H9.3a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.117a.117.117 0 00.117-.117V10.35a.117.117 0 00-.117-.117h-2.8a.117.117 0 00-.117.117v2.342c0 .058.042.106.1.115a.7.7 0 01.6.693v1.4a.7.7 0 01-.7.7H5.1a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.35a.116.116 0 00.116-.117v-2.45c0-.515.418-.933.934-.933h2.917a.117.117 0 00.117-.117V6.85a.117.117 0 00-.117-.116h-2.45a.7.7 0 01-.7-.7V5.1a.7.7 0 01.7-.7h6.067a.7.7 0 01.7.7v.934a.7.7 0 01-.7.7h-2.45a.117.117 0 00-.118.116v2.333c0 .064.053.117.117.117H13.5c.516 0 .934.418.934.934v2.45c0 .063.052.116.116.116h.35z" fill="${n}"/>
</svg>`;
}, Pv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
    <path d="M9.98 13.33c.45 0 .74-.3.73-.75l-.01-.1-.16-1.67 1.45 1.05a.81.81 0 0 0 .5.18c.37 0 .72-.32.72-.76 0-.3-.17-.54-.49-.68l-1.63-.77 1.63-.77c.32-.14.49-.37.49-.67 0-.45-.34-.76-.71-.76a.81.81 0 0 0-.5.18l-1.47 1.03.16-1.74.01-.08c.01-.46-.27-.76-.72-.76-.46 0-.76.32-.75.76l.01.08.16 1.74-1.47-1.03a.77.77 0 0 0-.5-.18.74.74 0 0 0-.72.76c0 .3.17.53.49.67l1.63.77-1.62.77c-.32.14-.5.37-.5.68 0 .44.35.75.72.75a.78.78 0 0 0 .5-.17L9.4 10.8l-.16 1.68v.09c-.02.44.28.75.74.75z" fill="${t}"/>
  </svg>`;
}, Av = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
    <path d="M8 5.83H5.83a.83.83 0 0 0 0 1.67h1.69A4.55 4.55 0 0 1 8 5.83zm-.33 3.34H5.83a.83.83 0 0 0 0 1.66h2.72a4.57 4.57 0 0 1-.88-1.66zM5.83 12.5a.83.83 0 0 0 0 1.67h7.5a.83.83 0 1 0 0-1.67h-7.5zm8.8-2.9a3.02 3.02 0 0 0 .46-1.6c0-1.66-1.32-3-2.94-3C10.52 5 9.2 6.34 9.2 8s1.31 3 2.93 3c.58 0 1.11-.17 1.56-.47l2.04 2.08.93-.94-2.04-2.08zm-2.48.07c-.9 0-1.63-.75-1.63-1.67s.73-1.67 1.63-1.67c.9 0 1.63.75 1.63 1.67s-.73 1.67-1.63 1.67z" fill="${t}"/>
  </svg>`;
}, Ov = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path d="M7.676 4.726V3l2.976 3.021-2.976 3.022v-1.77c-2.125 0-3.613.69-4.676 2.201.425-2.158 1.7-4.316 4.676-4.748zM10.182 14.4h3.636l.655 1.6H16l-3.454-8h-1.091L8 16h1.527l.655-1.6zM12 9.44l1.36 3.65h-2.72L12 9.44z" fill="${t}"/>
</svg>`;
}, Dv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.167 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666H4.167z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.083 4.167a.833.833 0 10-1.666 0v4.166a.833.833 0 101.666 0V4.167zM11.667 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666h-4.166zM5.367 11.688a.833.833 0 00-1.179 1.179l2.947 2.946a.833.833 0 001.178-1.178l-2.946-2.947z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.313 12.867a.833.833 0 10-1.178-1.179l-2.947 2.947a.833.833 0 101.179 1.178l2.946-2.946z" fill="${t}"/>
  <path d="M10.833 12.5c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833zM10.833 15c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833z" fill="${t}"/>
</svg>`;
}, Lv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${n}"/>
    <path d="M10 8.84a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32zm3.02 3.61a3.92 3.92 0 0 0 .78-3.28.49.49 0 1 0-.95.2c.19.87-.02 1.78-.58 2.47a2.92 2.92 0 1 1-4.13-4.08 2.94 2.94 0 0 1 2.43-.62.49.49 0 1 0 .17-.96 3.89 3.89 0 1 0 2.28 6.27zM10 4.17a5.84 5.84 0 0 0-5.44 7.93.49.49 0 1 0 .9-.35 4.86 4.86 0 1 1 2.5 2.67.49.49 0 1 0-.4.88c.76.35 1.6.54 2.44.53a5.83 5.83 0 0 0 0-11.66zm3.02 3.5a.7.7 0 1 0-1.4 0 .7.7 0 0 0 1.4 0zm-6.97 5.35a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z" fill="${t}"/>
  </svg>`;
}, Fv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path d="M12.4 13.565c1.865-.545 3.645-2.083 3.645-4.396 0-1.514-.787-2.604-2.071-2.604C12.69 6.565 12 7.63 12 8.939c1.114.072 1.865.726 1.865 1.683 0 .933-.8 1.647-1.84 2.023l.375.92zM4 5h6v2H4zM4 9h5v2H4zM4 13h4v2H4z" fill="${t}"/>
</svg>`;
}, qv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
    <path d="M12.4 13.56c1.86-.54 3.65-2.08 3.65-4.4 0-1.5-.8-2.6-2.08-2.6S12 7.64 12 8.95c1.11.07 1.86.73 1.86 1.68 0 .94-.8 1.65-1.83 2.03l.37.91zM4 5h6v2H4zm0 4h5v2H4zm0 4h4v2H4z" fill="${t}"/>
  </svg>`;
}, Hv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path d="M10 7a1 1 0 100-2v2zm0 6a1 1 0 100 2v-2zm0-8H7v2h3V5zm-3 6h5V9H7v2zm5 2h-2v2h2v-2zm1-1a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zM4 8a3 3 0 003 3V9a1 1 0 01-1-1H4zm3-3a3 3 0 00-3 3h2a1 1 0 011-1V5z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.856 12.014a.5.5 0 00-.712.702L5.409 14l-1.265 1.284a.5.5 0 00.712.702l1.255-1.274 1.255 1.274a.5.5 0 00.712-.702L6.813 14l1.265-1.284a.5.5 0 00-.712-.702L6.11 13.288l-1.255-1.274zM12.856 4.014a.5.5 0 00-.712.702L13.409 6l-1.265 1.284a.5.5 0 10.712.702l1.255-1.274 1.255 1.274a.5.5 0 10.712-.702L14.813 6l1.265-1.284a.5.5 0 00-.712-.702L14.11 5.288l-1.255-1.274z" fill="${t}"/>
</svg>`;
}, zv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 7.25a.75.75 0 000-1.5h-6.5a.75.75 0 100 1.5h6.5zM15 10a.75.75 0 01-.75.75h-6.5a.75.75 0 010-1.5h6.5A.75.75 0 0115 10zm-.75 4.25a.75.75 0 000-1.5h-6.5a.75.75 0 000 1.5h6.5zm-8.987-7a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 2.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 4.25a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="${t}"/>
</svg>`;
}, $v = (e) => {
  const t = e.fgColor;
  return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 15v1h14v-2.5c0-.87-.44-1.55-.98-2.04a6.19 6.19 0 0 0-1.9-1.14 12.1 12.1 0 0 0-2.48-.67A4 4 0 1 0 5 6a4 4 0 0 0 2.36 3.65c-.82.13-1.7.36-2.48.67-.69.28-1.37.65-1.9 1.13A2.8 2.8 0 0 0 2 13.5V15z" fill="${e.bgColor}" stroke="${t}" stroke-width="2"/>
  </svg>`;
}, Nv = (e) => {
  const t = e.fgColor;
  return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.43 6.04v-.18a3.86 3.86 0 0 0-7.72 0v.18A2.15 2.15 0 0 0 3 8.14v5.72C3 15.04 3.96 16 5.14 16H12c1.18 0 2.14-.96 2.14-2.14V8.14c0-1.03-.73-1.9-1.71-2.1zM7.86 6v-.14a.71.71 0 1 1 1.43 0V6H7.86z" fill="${e.bgColor}" stroke="${t}" stroke-width="2"/>
  </svg>
`;
}, Bv = {
  headerRowID: gv,
  headerNumber: mv,
  headerCode: pv,
  headerString: vv,
  headerBoolean: yv,
  headerAudioUri: wv,
  headerVideoUri: Sv,
  headerEmoji: Cv,
  headerImage: kv,
  headerUri: ap,
  headerPhone: xv,
  headerMarkdown: Rv,
  headerDate: _v,
  headerTime: Tv,
  headerEmail: Ev,
  headerReference: Mv,
  headerIfThenElse: Iv,
  headerSingleValue: Pv,
  headerLookup: Av,
  headerTextTemplate: Ov,
  headerMath: Dv,
  headerRollup: Lv,
  headerJoinStrings: Fv,
  headerSplitString: qv,
  headerGeoDistance: Hv,
  headerArray: zv,
  rowOwnerOverlay: $v,
  protectedColumnOverlay: Nv,
  renameIcon: bv
};
function Wv(e, t) {
  return e === "normal" ? [t.bgIconHeader, t.fgIconHeader] : e === "selected" ? ["white", t.accentColor] : [t.accentColor, t.bgHeader];
}
class jv {
  constructor(t, n) {
    be(this, "onSettled");
    be(this, "spriteMap", /* @__PURE__ */ new Map());
    be(this, "headerIcons");
    be(this, "inFlight", 0);
    this.onSettled = n, this.headerIcons = t ?? {};
  }
  drawSprite(t, n, r, i, o, s, a, l = 1) {
    const [c, u] = Wv(n, a), h = s * Math.ceil(window.devicePixelRatio), f = `${c}_${u}_${h}_${t}`;
    let g = this.spriteMap.get(f);
    if (g === void 0) {
      const d = this.headerIcons[t];
      if (d === void 0)
        return;
      g = document.createElement("canvas");
      const v = g.getContext("2d");
      if (v === null)
        return;
      const k = new Image();
      k.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(d({ fgColor: u, bgColor: c }))}`, this.spriteMap.set(f, g);
      const I = k.decode();
      if (I === void 0)
        return;
      this.inFlight++, I.then(() => {
        v.drawImage(k, 0, 0, h, h);
      }).finally(() => {
        this.inFlight--, this.inFlight === 0 && this.onSettled();
      });
    } else
      l < 1 && (r.globalAlpha = l), r.drawImage(g, 0, 0, h, h, i, o, s, s), l < 1 && (r.globalAlpha = 1);
  }
}
function sp(e) {
  if (e.length === 0)
    return;
  let t;
  for (const n of e)
    t = Math.min(t ?? n.y, n.y);
}
function Io(e, t, n, r, i, o, s, a, l) {
  a = a ?? t;
  let c = t, u = e;
  const h = r - o;
  let f = !1;
  for (; c < n && u < h; ) {
    const g = i(u);
    if (c + g > a && l(c, u, g, !1, s && u === r - 1) === !0) {
      f = !0;
      break;
    }
    c += g, u++;
  }
  if (!f) {
    c = n;
    for (let g = 0; g < o; g++) {
      u = r - 1 - g;
      const d = i(u);
      c -= d, l(c, u, d, !0, s && u === r - 1);
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
function lp(e, t, n, r, i) {
  let o = 0, s = 0;
  for (let a = 0; a < e.length; a++) {
    const l = e[a];
    let c = a + 1, u = l.width;
    for (l.sticky && (s += u); c < e.length && xi(e[c].group, l.group) && e[c].sticky === e[a].sticky; ) {
      const v = e[c];
      u += v.width, c++, a++, v.sticky && (s += v.width);
    }
    const h = l.sticky ? 0 : n, f = o + h, g = l.sticky ? 0 : Math.max(0, s - f), d = Math.min(u - g, t - (f + g));
    i([l.sourceIndex, e[c - 1].sourceIndex], l.group ?? "", f + g, 0, d, r), o += u;
  }
}
function cp(e, t, n, r, i, o, s) {
  var f;
  const [a, l] = e;
  let c, u;
  const h = ((f = s.find((g) => !g.sticky)) == null ? void 0 : f.sourceIndex) ?? 0;
  if (l > h) {
    const g = Math.max(a, h);
    let d = t, v = r;
    for (let k = o.sourceIndex - 1; k >= g; k--)
      d -= s[k].width, v += s[k].width;
    for (let k = o.sourceIndex + 1; k <= l; k++)
      v += s[k].width;
    u = {
      x: d,
      y: n,
      width: v,
      height: i
    };
  }
  if (h > a) {
    const g = Math.min(l, h - 1);
    let d = t, v = r;
    for (let k = o.sourceIndex - 1; k >= a; k--)
      d -= s[k].width, v += s[k].width;
    for (let k = o.sourceIndex + 1; k <= g; k++)
      v += s[k].width;
    c = {
      x: d,
      y: n,
      width: v,
      height: i
    };
  }
  return [c, u];
}
function Uv(e, t, n, r) {
  if (r === "any")
    return up(e, { x: t, y: n, width: 1, height: 1 });
  if (r === "vertical" && (t = e.x), r === "horizontal" && (n = e.y), Ug([t, n], e))
    return;
  const i = t - e.x, o = e.x + e.width - t, s = n - e.y + 1, a = e.y + e.height - n, l = Math.min(r === "vertical" ? Number.MAX_SAFE_INTEGER : i, r === "vertical" ? Number.MAX_SAFE_INTEGER : o, r === "horizontal" ? Number.MAX_SAFE_INTEGER : s, r === "horizontal" ? Number.MAX_SAFE_INTEGER : a);
  return l === a ? { x: e.x, y: e.y + e.height, width: e.width, height: n - e.y - e.height + 1 } : l === s ? { x: e.x, y: n, width: e.width, height: e.y - n } : l === o ? { x: e.x + e.width, y: e.y, width: t - e.x - e.width + 1, height: e.height } : { x: t, y: e.y, width: e.x - t, height: e.height };
}
function vo(e, t, n, r, i, o, s, a) {
  return e <= i + s && i <= e + n && t <= o + a && o <= t + r;
}
function Po(e, t, n) {
  return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height;
}
function up(e, t) {
  const n = Math.min(e.x, t.x), r = Math.min(e.y, t.y), i = Math.max(e.x + e.width, t.x + t.width) - n, o = Math.max(e.y + e.height, t.y + t.height) - r;
  return { x: n, y: r, width: i, height: o };
}
function Xv(e, t) {
  return e.x <= t.x && e.y <= t.y && e.x + e.width >= t.x + t.width && e.y + e.height >= t.y + t.height;
}
function Yv(e, t, n, r) {
  if (e.x > t || e.y > n || e.x < 0 && e.y < 0 && e.x + e.width > t && e.y + e.height > n)
    return;
  if (e.x >= 0 && e.y >= 0 && e.x + e.width <= t && e.y + e.height <= n)
    return e;
  const i = -4, o = -4, s = t + 4, a = n + 4, l = i - e.x, c = e.x + e.width - s, u = o - e.y, h = e.y + e.height - a, f = l > 0 ? e.x + Math.floor(l / r) * r : e.x, g = c > 0 ? e.x + e.width - Math.floor(c / r) * r : e.x + e.width, d = u > 0 ? e.y + Math.floor(u / r) * r : e.y, v = h > 0 ? e.y + e.height - Math.floor(h / r) * r : e.y + e.height;
  return { x: f, y: d, width: g - f, height: v - d };
}
function Kv(e, t, n, r, i) {
  const [o, s, a, l] = t, [c, u, h, f] = i, { x: g, y: d, width: v, height: k } = e, I = [];
  if (v <= 0 || k <= 0)
    return I;
  const y = g + v, S = d + k, P = g < o, b = d < s, M = g + v > a, O = d + k > l, E = g >= o && g < a || y > o && y <= a || g < o && y > a, _ = d >= s && d < l || S > s && S <= l || d < s && S > l;
  if (E && _) {
    const R = Math.max(g, o), w = Math.max(d, s), x = Math.min(y, a), T = Math.min(S, l);
    I.push({
      rect: { x: R, y: w, width: x - R, height: T - w },
      clip: {
        x: c,
        y: u,
        width: h - c + 1,
        height: f - u + 1
      }
    });
  }
  if (P && b) {
    const R = g, w = d, x = Math.min(y, o), T = Math.min(S, s);
    I.push({
      rect: {
        x: R,
        y: w,
        width: x - R,
        height: T - w
      },
      clip: {
        x: 0,
        y: 0,
        width: c + 1,
        height: u + 1
      }
    });
  }
  if (b && E) {
    const R = Math.max(g, o), w = d, x = Math.min(y, a), T = Math.min(S, s);
    I.push({
      rect: {
        x: R,
        y: w,
        width: x - R,
        height: T - w
      },
      clip: {
        x: c,
        y: 0,
        width: h - c + 1,
        height: u + 1
      }
    });
  }
  if (b && M) {
    const R = Math.max(g, a), w = d, x = y, T = Math.min(S, s);
    I.push({
      rect: {
        x: R,
        y: w,
        width: x - R,
        height: T - w
      },
      clip: {
        x: h,
        y: 0,
        width: n - h + 1,
        height: u + 1
      }
    });
  }
  if (P && _) {
    const R = g, w = Math.max(d, s), x = Math.min(y, o), T = Math.min(S, l);
    I.push({
      rect: {
        x: R,
        y: w,
        width: x - R,
        height: T - w
      },
      clip: {
        x: 0,
        y: u,
        width: c + 1,
        height: f - u + 1
      }
    });
  }
  if (M && _) {
    const R = Math.max(g, a), w = Math.max(d, s), x = y, T = Math.min(S, l);
    I.push({
      rect: {
        x: R,
        y: w,
        width: x - R,
        height: T - w
      },
      clip: {
        x: h,
        y: u,
        width: n - h + 1,
        height: f - u + 1
      }
    });
  }
  if (P && O) {
    const R = g, w = Math.max(d, l), x = Math.min(y, o), T = S;
    I.push({
      rect: {
        x: R,
        y: w,
        width: x - R,
        height: T - w
      },
      clip: {
        x: 0,
        y: f,
        width: c + 1,
        height: r - f + 1
      }
    });
  }
  if (O && E) {
    const R = Math.max(g, o), w = Math.max(d, l), x = Math.min(y, a), T = S;
    I.push({
      rect: {
        x: R,
        y: w,
        width: x - R,
        height: T - w
      },
      clip: {
        x: c,
        y: f,
        width: h - c + 1,
        height: r - f + 1
      }
    });
  }
  if (M && O) {
    const R = Math.max(g, a), w = Math.max(d, l), x = y, T = S;
    I.push({
      rect: {
        x: R,
        y: w,
        width: x - R,
        height: T - w
      },
      clip: {
        x: h,
        y: f,
        width: n - h + 1,
        height: r - f + 1
      }
    });
  }
  return I;
}
const Gv = {
  kind: he.Loading,
  allowOverlay: !1
};
function $d(e, t, n, r, i, o, s, a, l, c, u, h, f, g, d, v, k, I, y, S, P, b, M, O, E, _, F, R, w, x, T, C, N, H, Y) {
  let se = (S == null ? void 0 : S.size) ?? Number.MAX_SAFE_INTEGER;
  const te = performance.now();
  let A = x.baseFontFull;
  e.font = A;
  const $ = { ctx: e }, Q = [0, 0], ie = k > 0 ? mr(l, k, c) : 0;
  let z, le;
  const oe = sp(y);
  return nr(t, a, o, s, i, (re, pe, we, Ce, Be) => {
    const V = Math.max(0, Ce - pe), Ee = pe + V, Ae = i + 1, ft = re.width - V, Se = r - i - 1;
    if (y.length > 0) {
      let Ke = !1;
      for (let Ge = 0; Ge < y.length; Ge++) {
        const ce = y[Ge];
        if (vo(Ee, Ae, ft, Se, ce.x, ce.y, ce.width, ce.height)) {
          Ke = !0;
          break;
        }
      }
      if (!Ke)
        return;
    }
    const ve = () => {
      e.save(), e.beginPath(), e.rect(Ee, Ae, ft, Se), e.clip();
    }, Oe = P.columns.hasIndex(re.sourceIndex), Le = h(re.group ?? "").overrideTheme, qe = re.themeOverride === void 0 && Le === void 0 ? x : Jn(x, Le, re.themeOverride), Me = qe.baseFontFull;
    Me !== A && (A = Me, e.font = Me), ve();
    let nt;
    return Io(Be, we, r, l, c, k, I, oe, (Ke, Ge, ce, He, We) => {
      var kt, Dt, hn;
      if (Ge < 0 || (Q[0] = re.sourceIndex, Q[1] = Ge, S !== void 0 && !S.has(Q)))
        return;
      if (y.length > 0) {
        let Ye = !1;
        for (let vt = 0; vt < y.length; vt++) {
          const ct = y[vt];
          if (vo(pe, Ke, re.width, ce, ct.x, ct.y, ct.width, ct.height)) {
            Ye = !0;
            break;
          }
        }
        if (!Ye)
          return;
      }
      const De = P.rows.hasIndex(Ge), Mt = g.hasIndex(Ge), Ve = Ge < l ? u(Q) : Gv;
      let je = pe, Ze = re.width, Ct = !1, It = !1;
      if (Ve.span !== void 0) {
        const [Ye, vt] = Ve.span, ct = `${Ge},${Ye},${vt},${re.sticky}`;
        if (le === void 0 && (le = /* @__PURE__ */ new Set()), le.has(ct)) {
          se--;
          return;
        } else {
          const ut = cp(Ve.span, pe, Ke, re.width, ce, re, n), qt = re.sticky ? ut[0] : ut[1];
          if (!re.sticky && ut[0] !== void 0 && (It = !0), qt !== void 0) {
            je = qt.x, Ze = qt.width, le.add(ct), e.restore(), nt = void 0, e.save(), e.beginPath();
            const pt = Math.max(0, Ce - qt.x);
            e.rect(qt.x + pt, Ke, qt.width - pt, ce), z === void 0 && (z = []), z.push({
              x: qt.x + pt,
              y: Ke,
              width: qt.width - pt,
              height: ce
            }), e.clip(), Ct = !0;
          }
        }
      }
      const sn = f == null ? void 0 : f(Ge), Gt = We && ((kt = re.trailingRowOptions) == null ? void 0 : kt.themeOverride) !== void 0 ? (Dt = re.trailingRowOptions) == null ? void 0 : Dt.themeOverride : void 0, mt = Ve.themeOverride === void 0 && sn === void 0 && Gt === void 0 ? qe : Jn(qe, sn, Gt, Ve.themeOverride);
      e.beginPath();
      const Bt = k1(Q, Ve, P);
      let Wt = x1(Q, Ve, P, v);
      const On = Ve.span !== void 0 && P.columns.some(
        (Ye) => Ve.span !== void 0 && Ye >= Ve.span[0] && Ye <= Ve.span[1]
        //alloc
      );
      Bt && !d && v ? Wt = 0 : Bt && v && (Wt = Math.max(Wt, 1)), On && Wt++, Bt || (De && Wt++, Oe && !We && Wt++);
      const Dn = Ve.kind === he.Protected ? mt.bgCellMedium : mt.bgCell;
      let gt;
      if ((He || Dn !== x.bgCell) && (gt = on(Dn, gt)), Wt > 0 || Mt) {
        Mt && (gt = on(mt.bgHeader, gt));
        for (let Ye = 0; Ye < Wt; Ye++)
          gt = on(mt.accentLight, gt);
      } else if (b !== void 0) {
        for (const Ye of b)
          if (Ye[0] === re.sourceIndex && Ye[1] === Ge) {
            gt = on(mt.bgSearchResult, gt);
            break;
          }
      }
      if (M !== void 0)
        for (let Ye = 0; Ye < M.length; Ye++) {
          const vt = M[Ye], ct = vt.range;
          vt.style !== "solid-outline" && ct.x <= re.sourceIndex && re.sourceIndex < ct.x + ct.width && ct.y <= Ge && Ge < ct.y + ct.height && (gt = on(vt.color, gt));
        }
      let Ue = !1;
      if (S !== void 0) {
        const Ye = Ke + 1, ct = (He ? Ye + ce - 1 : Math.min(Ye + ce - 1, r - ie)) - Ye;
        (ct !== ce - 1 || je + 1 <= Ce) && (Ue = !0, e.save(), e.beginPath(), e.rect(je + 1, Ye, Ze - 1, ct), e.clip()), gt = gt === void 0 ? mt.bgCell : on(gt, mt.bgCell);
      }
      const Qe = re.sourceIndex === n.length - 1, Lt = Ge === l - 1;
      gt !== void 0 && (e.fillStyle = gt, nt !== void 0 && (nt.fillStyle = gt), S !== void 0 ? e.fillRect(je + 1, Ke + 1, Ze - (Qe ? 2 : 1), ce - (Lt ? 2 : 1)) : e.fillRect(je, Ke, Ze, ce)), Ve.style === "faded" && (e.globalAlpha = 0.6);
      let Ft;
      for (let Ye = 0; Ye < _.length; Ye++) {
        const vt = _[Ye];
        if (vt.item[0] === re.sourceIndex && vt.item[1] === Ge) {
          Ft = vt;
          break;
        }
      }
      if (Ze > Y && !It) {
        const Ye = mt.baseFontFull;
        Ye !== A && (e.font = Ye, A = Ye), nt = fp(e, Ve, re.sourceIndex, Ge, Qe, Lt, je, Ke, Ze, ce, Wt > 0, mt, gt ?? mt.bgCell, O, E, (Ft == null ? void 0 : Ft.hoverAmount) ?? 0, F, w, te, R, nt, T, C, N, H);
      }
      return Ue && e.restore(), Ve.style === "faded" && (e.globalAlpha = 1), se--, Ct && (e.restore(), (hn = nt == null ? void 0 : nt.deprep) == null || hn.call(nt, $), nt = void 0, ve(), A = Me, e.font = Me), se <= 0;
    }), e.restore(), se <= 0;
  }), z;
}
const fi = [0, 0], di = { x: 0, y: 0, width: 0, height: 0 }, Xs = [void 0, () => {
}];
let vc = !1;
function Vv() {
  vc = !0;
}
function fp(e, t, n, r, i, o, s, a, l, c, u, h, f, g, d, v, k, I, y, S, P, b, M, O, E) {
  var C, N;
  let _, F;
  k !== void 0 && k[0][0] === n && k[0][1] === r && (_ = k[1][0], F = k[1][1]);
  let R;
  fi[0] = n, fi[1] = r, di.x = s, di.y = a, di.width = l, di.height = c, Xs[0] = M.getValue(fi), Xs[1] = (H) => M.setValue(fi, H), vc = !1;
  const w = {
    //alloc
    ctx: e,
    theme: h,
    col: n,
    row: r,
    cell: t,
    rect: di,
    highlighted: u,
    cellFillColor: f,
    hoverAmount: v,
    frameTime: y,
    hoverX: _,
    drawState: Xs,
    hoverY: F,
    imageLoader: g,
    spriteManager: d,
    hyperWrapping: I,
    overrideCursor: _ !== void 0 ? E : void 0,
    requestAnimationFrame: Vv
  }, x = P1(w, t.lastUpdated, y, P, i, o), T = O(t);
  if (T !== void 0) {
    (P == null ? void 0 : P.renderer) !== T && ((C = P == null ? void 0 : P.deprep) == null || C.call(P, w), P = void 0);
    const H = (N = T.drawPrep) == null ? void 0 : N.call(T, w, P);
    S !== void 0 && !zr(w.cell) ? S(w, () => T.draw(w, t)) : T.draw(w, t), R = H === void 0 ? void 0 : {
      deprep: H == null ? void 0 : H.deprep,
      fillStyle: H == null ? void 0 : H.fillStyle,
      font: H == null ? void 0 : H.font,
      renderer: T
    };
  }
  return (x || vc) && (b == null || b(fi)), R;
}
function Uc(e, t, n, r, i, o, s, a, l = -20, c = -20, u = 32, h = "center", f = "square") {
  const g = Math.floor(i + s / 2), d = f === "circle" ? 1e4 : t.roundingRadius ?? 4;
  let v = Pg(u, s, t.cellVerticalPadding), k = v / 2;
  const I = Ig(h, r, o, t.cellHorizontalPadding, v), y = Mg(I, g, v), S = Ag(r + l, i + c, y);
  switch (n) {
    case !0: {
      e.beginPath(), In(e, I - v / 2, g - v / 2, v, v, d), f === "circle" && (k *= 0.8, v *= 0.8), e.fillStyle = a ? t.accentColor : t.textMedium, e.fill(), e.beginPath(), e.moveTo(I - k + v / 4.23, g - k + v / 1.97), e.lineTo(I - k + v / 2.42, g - k + v / 1.44), e.lineTo(I - k + v / 1.29, g - k + v / 3.25), e.strokeStyle = t.bgCell, e.lineJoin = "round", e.lineCap = "round", e.lineWidth = 1.9, e.stroke();
      break;
    }
    case fo:
    case !1: {
      e.beginPath(), In(e, I - v / 2 + 0.5, g - v / 2 + 0.5, v - 1, v - 1, d), e.lineWidth = 1, e.strokeStyle = S ? t.textDark : t.textMedium, e.stroke();
      break;
    }
    case Rc: {
      e.beginPath(), In(e, I - v / 2, g - v / 2, v, v, d), e.fillStyle = S ? t.textMedium : t.textLight, e.fill(), f === "circle" && (k *= 0.8, v *= 0.8), e.beginPath(), e.moveTo(I - v / 3, g), e.lineTo(I + v / 3, g), e.strokeStyle = t.bgCell, e.lineCap = "round", e.lineWidth = 1.9, e.stroke();
      break;
    }
    default:
      ki();
  }
}
function Zv(e, t, n, r, i, o, s, a, l, c, u, h, f, g, d, v, k, I, y) {
  const S = s + a;
  if (S <= 0)
    return;
  e.fillStyle = h.bgHeader, e.fillRect(0, 0, i, S);
  const [P, b] = (r == null ? void 0 : r[0]) ?? [], M = h.headerFontFull;
  e.font = M, nr(t, 0, o, 0, S, (O, E, _, F) => {
    var $;
    if (k !== void 0 && !k.has([O.sourceIndex, -1]))
      return;
    const R = Math.max(0, F - E);
    e.save(), e.beginPath(), e.rect(E + R, a, O.width - R, s), e.clip();
    const w = v(O.group ?? "").overrideTheme, x = O.themeOverride === void 0 && w === void 0 ? h : Jn(h, w, O.themeOverride);
    x.bgHeader !== h.bgHeader && (e.fillStyle = x.bgHeader, e.fill()), x !== h && (e.font = x.baseFontFull);
    const T = u.columns.hasIndex(O.sourceIndex), C = l !== void 0 || c, N = !C && b === -1 && P === O.sourceIndex, H = C ? 0 : (($ = g.find((Q) => Q.item[0] === O.sourceIndex && Q.item[1] === -1)) == null ? void 0 : $.hoverAmount) ?? 0, Y = (u == null ? void 0 : u.current) !== void 0 && u.current.cell[0] === O.sourceIndex, se = T ? x.accentColor : Y ? x.bgHeaderHasFocus : x.bgHeader, te = n ? a : 0, A = O.sourceIndex === 0 ? 0 : 1;
    T ? (e.fillStyle = se, e.fillRect(E + A, te, O.width - A, s)) : (Y || H > 0) && (e.beginPath(), e.rect(E + A, te, O.width - A, s), Y && (e.fillStyle = x.bgHeaderHasFocus, e.fill()), H > 0 && (e.globalAlpha = H, e.fillStyle = x.bgHeaderHovered, e.fill(), e.globalAlpha = 1)), gp(e, E, te, O.width, s, O, T, x, N, Y, H, f, I, y), e.restore();
  }), n && Qv(e, t, i, o, a, r, h, f, g, d, v, k);
}
function Qv(e, t, n, r, i, o, s, a, l, c, u, h) {
  const [g, d] = (o == null ? void 0 : o[0]) ?? [];
  let v = 0;
  lp(t, n, r, i, (k, I, y, S, P, b) => {
    if (h !== void 0 && !h.hasItemInRectangle({
      x: k[0],
      y: -2,
      width: k[1] - k[0] + 1,
      height: 1
    }))
      return;
    e.save(), e.beginPath(), e.rect(y, S, P, b), e.clip();
    const M = u(I), O = (M == null ? void 0 : M.overrideTheme) === void 0 ? s : Jn(s, M.overrideTheme), E = d === -2 && g !== void 0 && g >= k[0] && g <= k[1], _ = E ? O.bgHeaderHovered : O.bgHeader;
    if (_ !== s.bgHeader && (e.fillStyle = _, e.fill()), e.fillStyle = O.textGroupHeader ?? O.textHeader, M !== void 0) {
      let F = y;
      if (M.icon !== void 0 && (a.drawSprite(M.icon, "normal", e, F + 8, (i - 20) / 2, 20, O), F += 26), e.fillText(M.name, F + 8, i / 2 + tr(e, s.headerFontFull)), M.actions !== void 0 && E) {
        const R = hp({ x: y, y: S, width: P, height: b }, M.actions);
        e.beginPath();
        const w = R[0].x - 10, x = y + P - w;
        e.rect(w, 0, x, i);
        const T = e.createLinearGradient(w, 0, w + x, 0), C = dr(_, 0);
        T.addColorStop(0, C), T.addColorStop(10 / x, _), T.addColorStop(1, _), e.fillStyle = T, e.fill(), e.globalAlpha = 0.6;
        const [N, H] = (o == null ? void 0 : o[1]) ?? [-1, -1];
        for (let Y = 0; Y < M.actions.length; Y++) {
          const se = M.actions[Y], te = R[Y], A = Po(te, N + y, H);
          A && (e.globalAlpha = 1), a.drawSprite(se.icon, "normal", e, te.x + te.width / 2 - 10, te.y + te.height / 2 - 10, 20, O), A && (e.globalAlpha = 0.6);
        }
        e.globalAlpha = 1;
      }
    }
    y !== 0 && c(k[0]) && (e.beginPath(), e.moveTo(y + 0.5, 0), e.lineTo(y + 0.5, i), e.strokeStyle = s.borderColor, e.lineWidth = 1, e.stroke()), e.restore(), v = y + P;
  }), e.beginPath(), e.moveTo(v + 0.5, 0), e.lineTo(v + 0.5, i), e.moveTo(0, i + 0.5), e.lineTo(n, i + 0.5), e.strokeStyle = s.borderColor, e.lineWidth = 1, e.stroke();
}
const Lr = 30;
function dp(e, t, n, r, i) {
  return i ? { x: e, y: t, width: Lr, height: Math.min(Lr, r) } : {
    x: e + n - Lr,
    y: Math.max(t, t + r / 2 - Lr / 2),
    width: Lr,
    height: Math.min(Lr, r)
  };
}
function hp(e, t) {
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
function Nd(e, t, n, r, i, o, s, a, l, c, u, h, f, g) {
  if (o.rowMarker !== void 0) {
    const S = o.rowMarkerChecked;
    S !== !0 && (e.globalAlpha = c), Uc(e, a, S, t, n, r, i, !1, void 0, void 0, 18, "center", o.rowMarker), S !== !0 && (e.globalAlpha = 1);
    return;
  }
  const d = a.cellHorizontalPadding, v = s ? a.textHeaderSelected : a.textHeader, k = o.hasMenu === !0 && (l || h && s), I = f ? -1 : 1;
  let y = f ? t + r - d : t + d;
  if (o.icon !== void 0) {
    let S = s ? "selected" : "normal";
    o.style === "highlight" && (S = s ? "selected" : "special");
    const P = a.headerIconSize;
    u.drawSprite(o.icon, S, e, f ? y - P : y, n + (i - P) / 2, P, a), o.overlayIcon !== void 0 && u.drawSprite(o.overlayIcon, s ? "selected" : "special", e, f ? y - P + 9 : y + 9, n + ((i - 18) / 2 + 6), 18, a), y += Math.ceil(P * 1.3) * I;
  }
  if (k && o.hasMenu === !0 && r > 35) {
    const P = f ? 35 : r - 35, b = f ? 35 * 0.7 : r - 35 * 0.7, M = P / r, O = b / r, E = e.createLinearGradient(t, 0, t + r, 0), _ = dr(v, 0);
    E.addColorStop(f ? 1 : 0, v), E.addColorStop(M, v), E.addColorStop(O, _), E.addColorStop(f ? 0 : 1, _), e.fillStyle = E;
  } else
    e.fillStyle = v;
  if (f && (e.textAlign = "right"), e.fillText(o.title, y, n + i / 2 + tr(e, a.headerFontFull)), f && (e.textAlign = "left"), k && o.hasMenu === !0)
    if (o.menuIcon === void 0 || o.menuIcon === ho.Triangle) {
      e.beginPath();
      const S = g.x + g.width / 2 - 5.5, P = g.y + g.height / 2 - 3;
      L1(e, [
        {
          x: S,
          y: P
        },
        {
          x: S + 11,
          y: P
        },
        {
          x: S + 5.5,
          y: P + 6
        }
      ], 1), e.fillStyle = v, e.fill();
    } else if (o.menuIcon === ho.Dots) {
      e.beginPath();
      const S = g.x + g.width / 2, P = g.y + g.height / 2;
      D1(e, S, P), e.fillStyle = v, e.fill();
    } else {
      const S = g.x + (g.width - a.headerIconSize) / 2, P = g.y + (g.height - a.headerIconSize) / 2;
      u.drawSprite(o.menuIcon, "normal", e, S, P, a.headerIconSize, a);
    }
}
function gp(e, t, n, r, i, o, s, a, l, c, u, h, f, g) {
  const d = Ic(o.title) === "rtl", v = dp(t, n, r, i, d);
  f !== void 0 ? f({
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
  }, () => Nd(e, t, n, r, i, o, s, a, l, u, h, g, d, v)) : Nd(e, t, n, r, i, o, s, a, l, u, h, g, d, v);
}
var Ys, Bd;
function Jv() {
  if (Bd) return Ys;
  Bd = 1;
  var e = gr(), t = function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  }();
  return Ys = t, Ys;
}
var Ks, Wd;
function ey() {
  if (Wd) return Ks;
  Wd = 1;
  var e = Jv();
  function t(n, r, i) {
    r == "__proto__" && e ? e(n, r, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : n[r] = i;
  }
  return Ks = t, Ks;
}
var Gs, jd;
function ty() {
  if (jd) return Gs;
  jd = 1;
  function e(t, n, r, i) {
    for (var o = -1, s = t == null ? 0 : t.length; ++o < s; ) {
      var a = t[o];
      n(i, a, r(a), t);
    }
    return i;
  }
  return Gs = e, Gs;
}
var Vs, Ud;
function ny() {
  if (Ud) return Vs;
  Ud = 1;
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
  return Vs = e, Vs;
}
var Zs, Xd;
function ry() {
  if (Xd) return Zs;
  Xd = 1;
  var e = ny(), t = e();
  return Zs = t, Zs;
}
var Qs, Yd;
function iy() {
  if (Yd) return Qs;
  Yd = 1;
  function e(t, n) {
    for (var r = -1, i = Array(t); ++r < t; )
      i[r] = n(r);
    return i;
  }
  return Qs = e, Qs;
}
var pi = { exports: {} }, Js, Kd;
function oy() {
  if (Kd) return Js;
  Kd = 1;
  function e() {
    return !1;
  }
  return Js = e, Js;
}
pi.exports;
var Gd;
function pp() {
  return Gd || (Gd = 1, function(e, t) {
    var n = An(), r = oy(), i = t && !t.nodeType && t, o = i && !0 && e && !e.nodeType && e, s = o && o.exports === i, a = s ? n.Buffer : void 0, l = a ? a.isBuffer : void 0, c = l || r;
    e.exports = c;
  }(pi, pi.exports)), pi.exports;
}
var el, Vd;
function ay() {
  if (Vd) return el;
  Vd = 1;
  var e = _i(), t = xc(), n = Ti(), r = "[object Arguments]", i = "[object Array]", o = "[object Boolean]", s = "[object Date]", a = "[object Error]", l = "[object Function]", c = "[object Map]", u = "[object Number]", h = "[object Object]", f = "[object RegExp]", g = "[object Set]", d = "[object String]", v = "[object WeakMap]", k = "[object ArrayBuffer]", I = "[object DataView]", y = "[object Float32Array]", S = "[object Float64Array]", P = "[object Int8Array]", b = "[object Int16Array]", M = "[object Int32Array]", O = "[object Uint8Array]", E = "[object Uint8ClampedArray]", _ = "[object Uint16Array]", F = "[object Uint32Array]", R = {};
  R[y] = R[S] = R[P] = R[b] = R[M] = R[O] = R[E] = R[_] = R[F] = !0, R[r] = R[i] = R[k] = R[o] = R[I] = R[s] = R[a] = R[l] = R[c] = R[u] = R[h] = R[f] = R[g] = R[d] = R[v] = !1;
  function w(x) {
    return n(x) && t(x.length) && !!R[e(x)];
  }
  return el = w, el;
}
var tl, Zd;
function sy() {
  if (Zd) return tl;
  Zd = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return tl = e, tl;
}
var mi = { exports: {} };
mi.exports;
var Qd;
function ly() {
  return Qd || (Qd = 1, function(e, t) {
    var n = gg(), r = t && !t.nodeType && t, i = r && !0 && e && !e.nodeType && e, o = i && i.exports === r, s = o && n.process, a = function() {
      try {
        var l = i && i.require && i.require("util").types;
        return l || s && s.binding && s.binding("util");
      } catch {
      }
    }();
    e.exports = a;
  }(mi, mi.exports)), mi.exports;
}
var nl, Jd;
function mp() {
  if (Jd) return nl;
  Jd = 1;
  var e = ay(), t = sy(), n = ly(), r = n && n.isTypedArray, i = r ? t(r) : e;
  return nl = i, nl;
}
var rl, eh;
function cy() {
  if (eh) return rl;
  eh = 1;
  var e = iy(), t = Cc(), n = Pn(), r = pp(), i = kc(), o = mp(), s = Object.prototype, a = s.hasOwnProperty;
  function l(c, u) {
    var h = n(c), f = !h && t(c), g = !h && !f && r(c), d = !h && !f && !g && o(c), v = h || f || g || d, k = v ? e(c.length, String) : [], I = k.length;
    for (var y in c)
      (u || a.call(c, y)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
      (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      d && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
      i(y, I))) && k.push(y);
    return k;
  }
  return rl = l, rl;
}
var il, th;
function uy() {
  if (th) return il;
  th = 1;
  var e = Object.prototype;
  function t(n) {
    var r = n && n.constructor, i = typeof r == "function" && r.prototype || e;
    return n === i;
  }
  return il = t, il;
}
var ol, nh;
function fy() {
  if (nh) return ol;
  nh = 1;
  function e(t, n) {
    return function(r) {
      return t(n(r));
    };
  }
  return ol = e, ol;
}
var al, rh;
function dy() {
  if (rh) return al;
  rh = 1;
  var e = fy(), t = e(Object.keys, Object);
  return al = t, al;
}
var sl, ih;
function hy() {
  if (ih) return sl;
  ih = 1;
  var e = uy(), t = dy(), n = Object.prototype, r = n.hasOwnProperty;
  function i(o) {
    if (!e(o))
      return t(o);
    var s = [];
    for (var a in Object(o))
      r.call(o, a) && a != "constructor" && s.push(a);
    return s;
  }
  return sl = i, sl;
}
var ll, oh;
function Xc() {
  if (oh) return ll;
  oh = 1;
  var e = cy(), t = hy(), n = jc();
  function r(i) {
    return n(i) ? e(i) : t(i);
  }
  return ll = r, ll;
}
var cl, ah;
function gy() {
  if (ah) return cl;
  ah = 1;
  var e = ry(), t = Xc();
  function n(r, i) {
    return r && e(r, i, t);
  }
  return cl = n, cl;
}
var ul, sh;
function py() {
  if (sh) return ul;
  sh = 1;
  var e = jc();
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
  return ul = t, ul;
}
var fl, lh;
function my() {
  if (lh) return fl;
  lh = 1;
  var e = gy(), t = py(), n = t(e);
  return fl = n, fl;
}
var dl, ch;
function vy() {
  if (ch) return dl;
  ch = 1;
  var e = my();
  function t(n, r, i, o) {
    return e(n, function(s, a, l) {
      r(o, s, i(s), l);
    }), o;
  }
  return dl = t, dl;
}
var hl, uh;
function yy() {
  if (uh) return hl;
  uh = 1;
  var e = xo();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return hl = t, hl;
}
var gl, fh;
function by() {
  if (fh) return gl;
  fh = 1;
  function e(t) {
    var n = this.__data__, r = n.delete(t);
    return this.size = n.size, r;
  }
  return gl = e, gl;
}
var pl, dh;
function wy() {
  if (dh) return pl;
  dh = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return pl = e, pl;
}
var ml, hh;
function Sy() {
  if (hh) return ml;
  hh = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ml = e, ml;
}
var vl, gh;
function Cy() {
  if (gh) return vl;
  gh = 1;
  var e = xo(), t = wc(), n = Sc(), r = 200;
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
  return vl = i, vl;
}
var yl, ph;
function vp() {
  if (ph) return yl;
  ph = 1;
  var e = xo(), t = yy(), n = by(), r = wy(), i = Sy(), o = Cy();
  function s(a) {
    var l = this.__data__ = new e(a);
    this.size = l.size;
  }
  return s.prototype.clear = t, s.prototype.delete = n, s.prototype.get = r, s.prototype.has = i, s.prototype.set = o, yl = s, yl;
}
var bl, mh;
function ky() {
  if (mh) return bl;
  mh = 1;
  function e(t, n) {
    for (var r = -1, i = t == null ? 0 : t.length; ++r < i; )
      if (n(t[r], r, t))
        return !0;
    return !1;
  }
  return bl = e, bl;
}
var wl, vh;
function yp() {
  if (vh) return wl;
  vh = 1;
  var e = np(), t = ky(), n = rp(), r = 1, i = 2;
  function o(s, a, l, c, u, h) {
    var f = l & r, g = s.length, d = a.length;
    if (g != d && !(f && d > g))
      return !1;
    var v = h.get(s), k = h.get(a);
    if (v && k)
      return v == a && k == s;
    var I = -1, y = !0, S = l & i ? new e() : void 0;
    for (h.set(s, a), h.set(a, s); ++I < g; ) {
      var P = s[I], b = a[I];
      if (c)
        var M = f ? c(b, P, I, a, s, h) : c(P, b, I, s, a, h);
      if (M !== void 0) {
        if (M)
          continue;
        y = !1;
        break;
      }
      if (S) {
        if (!t(a, function(O, E) {
          if (!n(S, E) && (P === O || u(P, O, l, c, h)))
            return S.push(E);
        })) {
          y = !1;
          break;
        }
      } else if (!(P === b || u(P, b, l, c, h))) {
        y = !1;
        break;
      }
    }
    return h.delete(s), h.delete(a), y;
  }
  return wl = o, wl;
}
var Sl, yh;
function xy() {
  if (yh) return Sl;
  yh = 1;
  var e = An(), t = e.Uint8Array;
  return Sl = t, Sl;
}
var Cl, bh;
function Ry() {
  if (bh) return Cl;
  bh = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(i, o) {
      r[++n] = [o, i];
    }), r;
  }
  return Cl = e, Cl;
}
var kl, wh;
function _y() {
  if (wh) return kl;
  wh = 1;
  var e = Ri(), t = xy(), n = bc(), r = yp(), i = Ry(), o = Wc(), s = 1, a = 2, l = "[object Boolean]", c = "[object Date]", u = "[object Error]", h = "[object Map]", f = "[object Number]", g = "[object RegExp]", d = "[object Set]", v = "[object String]", k = "[object Symbol]", I = "[object ArrayBuffer]", y = "[object DataView]", S = e ? e.prototype : void 0, P = S ? S.valueOf : void 0;
  function b(M, O, E, _, F, R, w) {
    switch (E) {
      case y:
        if (M.byteLength != O.byteLength || M.byteOffset != O.byteOffset)
          return !1;
        M = M.buffer, O = O.buffer;
      case I:
        return !(M.byteLength != O.byteLength || !R(new t(M), new t(O)));
      case l:
      case c:
      case f:
        return n(+M, +O);
      case u:
        return M.name == O.name && M.message == O.message;
      case g:
      case v:
        return M == O + "";
      case h:
        var x = i;
      case d:
        var T = _ & s;
        if (x || (x = o), M.size != O.size && !T)
          return !1;
        var C = w.get(M);
        if (C)
          return C == O;
        _ |= a, w.set(M, O);
        var N = r(x(M), x(O), _, F, R, w);
        return w.delete(M), N;
      case k:
        if (P)
          return P.call(M) == P.call(O);
    }
    return !1;
  }
  return kl = b, kl;
}
var xl, Sh;
function Ty() {
  if (Sh) return xl;
  Sh = 1;
  var e = op(), t = Pn();
  function n(r, i, o) {
    var s = i(r);
    return t(r) ? s : e(s, o(r));
  }
  return xl = n, xl;
}
var Rl, Ch;
function Ey() {
  if (Ch) return Rl;
  Ch = 1;
  function e(t, n) {
    for (var r = -1, i = t == null ? 0 : t.length, o = 0, s = []; ++r < i; ) {
      var a = t[r];
      n(a, r, t) && (s[o++] = a);
    }
    return s;
  }
  return Rl = e, Rl;
}
var _l, kh;
function My() {
  if (kh) return _l;
  kh = 1;
  function e() {
    return [];
  }
  return _l = e, _l;
}
var Tl, xh;
function Iy() {
  if (xh) return Tl;
  xh = 1;
  var e = Ey(), t = My(), n = Object.prototype, r = n.propertyIsEnumerable, i = Object.getOwnPropertySymbols, o = i ? function(s) {
    return s == null ? [] : (s = Object(s), e(i(s), function(a) {
      return r.call(s, a);
    }));
  } : t;
  return Tl = o, Tl;
}
var El, Rh;
function Py() {
  if (Rh) return El;
  Rh = 1;
  var e = Ty(), t = Iy(), n = Xc();
  function r(i) {
    return e(i, n, t);
  }
  return El = r, El;
}
var Ml, _h;
function Ay() {
  if (_h) return Ml;
  _h = 1;
  var e = Py(), t = 1, n = Object.prototype, r = n.hasOwnProperty;
  function i(o, s, a, l, c, u) {
    var h = a & t, f = e(o), g = f.length, d = e(s), v = d.length;
    if (g != v && !h)
      return !1;
    for (var k = g; k--; ) {
      var I = f[k];
      if (!(h ? I in s : r.call(s, I)))
        return !1;
    }
    var y = u.get(o), S = u.get(s);
    if (y && S)
      return y == s && S == o;
    var P = !0;
    u.set(o, s), u.set(s, o);
    for (var b = h; ++k < g; ) {
      I = f[k];
      var M = o[I], O = s[I];
      if (l)
        var E = h ? l(O, M, I, s, o, u) : l(M, O, I, o, s, u);
      if (!(E === void 0 ? M === O || c(M, O, a, l, u) : E)) {
        P = !1;
        break;
      }
      b || (b = I == "constructor");
    }
    if (P && !b) {
      var _ = o.constructor, F = s.constructor;
      _ != F && "constructor" in o && "constructor" in s && !(typeof _ == "function" && _ instanceof _ && typeof F == "function" && F instanceof F) && (P = !1);
    }
    return u.delete(o), u.delete(s), P;
  }
  return Ml = i, Ml;
}
var Il, Th;
function Oy() {
  if (Th) return Il;
  Th = 1;
  var e = gr(), t = An(), n = e(t, "DataView");
  return Il = n, Il;
}
var Pl, Eh;
function Dy() {
  if (Eh) return Pl;
  Eh = 1;
  var e = gr(), t = An(), n = e(t, "Promise");
  return Pl = n, Pl;
}
var Al, Mh;
function Ly() {
  if (Mh) return Al;
  Mh = 1;
  var e = gr(), t = An(), n = e(t, "WeakMap");
  return Al = n, Al;
}
var Ol, Ih;
function Fy() {
  if (Ih) return Ol;
  Ih = 1;
  var e = Oy(), t = wc(), n = Dy(), r = ip(), i = Ly(), o = _i(), s = mg(), a = "[object Map]", l = "[object Object]", c = "[object Promise]", u = "[object Set]", h = "[object WeakMap]", f = "[object DataView]", g = s(e), d = s(t), v = s(n), k = s(r), I = s(i), y = o;
  return (e && y(new e(new ArrayBuffer(1))) != f || t && y(new t()) != a || n && y(n.resolve()) != c || r && y(new r()) != u || i && y(new i()) != h) && (y = function(S) {
    var P = o(S), b = P == l ? S.constructor : void 0, M = b ? s(b) : "";
    if (M)
      switch (M) {
        case g:
          return f;
        case d:
          return a;
        case v:
          return c;
        case k:
          return u;
        case I:
          return h;
      }
    return P;
  }), Ol = y, Ol;
}
var Dl, Ph;
function qy() {
  if (Ph) return Dl;
  Ph = 1;
  var e = vp(), t = yp(), n = _y(), r = Ay(), i = Fy(), o = Pn(), s = pp(), a = mp(), l = 1, c = "[object Arguments]", u = "[object Array]", h = "[object Object]", f = Object.prototype, g = f.hasOwnProperty;
  function d(v, k, I, y, S, P) {
    var b = o(v), M = o(k), O = b ? u : i(v), E = M ? u : i(k);
    O = O == c ? h : O, E = E == c ? h : E;
    var _ = O == h, F = E == h, R = O == E;
    if (R && s(v)) {
      if (!s(k))
        return !1;
      b = !0, _ = !1;
    }
    if (R && !_)
      return P || (P = new e()), b || a(v) ? t(v, k, I, y, S, P) : n(v, k, O, I, y, S, P);
    if (!(I & l)) {
      var w = _ && g.call(v, "__wrapped__"), x = F && g.call(k, "__wrapped__");
      if (w || x) {
        var T = w ? v.value() : v, C = x ? k.value() : k;
        return P || (P = new e()), S(T, C, I, y, P);
      }
    }
    return R ? (P || (P = new e()), r(v, k, I, y, S, P)) : !1;
  }
  return Dl = d, Dl;
}
var Ll, Ah;
function bp() {
  if (Ah) return Ll;
  Ah = 1;
  var e = qy(), t = Ti();
  function n(r, i, o, s, a) {
    return r === i ? !0 : r == null || i == null || !t(r) && !t(i) ? r !== r && i !== i : e(r, i, o, s, n, a);
  }
  return Ll = n, Ll;
}
var Fl, Oh;
function Hy() {
  if (Oh) return Fl;
  Oh = 1;
  var e = vp(), t = bp(), n = 1, r = 2;
  function i(o, s, a, l) {
    var c = a.length, u = c, h = !l;
    if (o == null)
      return !u;
    for (o = Object(o); c--; ) {
      var f = a[c];
      if (h && f[2] ? f[1] !== o[f[0]] : !(f[0] in o))
        return !1;
    }
    for (; ++c < u; ) {
      f = a[c];
      var g = f[0], d = o[g], v = f[1];
      if (h && f[2]) {
        if (d === void 0 && !(g in o))
          return !1;
      } else {
        var k = new e();
        if (l)
          var I = l(d, v, g, o, s, k);
        if (!(I === void 0 ? t(v, d, n | r, l, k) : I))
          return !1;
      }
    }
    return !0;
  }
  return Fl = i, Fl;
}
var ql, Dh;
function wp() {
  if (Dh) return ql;
  Dh = 1;
  var e = hr();
  function t(n) {
    return n === n && !e(n);
  }
  return ql = t, ql;
}
var Hl, Lh;
function zy() {
  if (Lh) return Hl;
  Lh = 1;
  var e = wp(), t = Xc();
  function n(r) {
    for (var i = t(r), o = i.length; o--; ) {
      var s = i[o], a = r[s];
      i[o] = [s, a, e(a)];
    }
    return i;
  }
  return Hl = n, Hl;
}
var zl, Fh;
function Sp() {
  if (Fh) return zl;
  Fh = 1;
  function e(t, n) {
    return function(r) {
      return r == null ? !1 : r[t] === n && (n !== void 0 || t in Object(r));
    };
  }
  return zl = e, zl;
}
var $l, qh;
function $y() {
  if (qh) return $l;
  qh = 1;
  var e = Hy(), t = zy(), n = Sp();
  function r(i) {
    var o = t(i);
    return o.length == 1 && o[0][2] ? n(o[0][0], o[0][1]) : function(s) {
      return s === i || e(s, i, o);
    };
  }
  return $l = r, $l;
}
var Nl, Hh;
function Cp() {
  if (Hh) return Nl;
  Hh = 1;
  var e = vg(), t = _o();
  function n(r, i) {
    i = e(i, r);
    for (var o = 0, s = i.length; r != null && o < s; )
      r = r[t(i[o++])];
    return o && o == s ? r : void 0;
  }
  return Nl = n, Nl;
}
var Bl, zh;
function Ny() {
  if (zh) return Bl;
  zh = 1;
  var e = Cp();
  function t(n, r, i) {
    var o = n == null ? void 0 : e(n, r);
    return o === void 0 ? i : o;
  }
  return Bl = t, Bl;
}
var Wl, $h;
function By() {
  if ($h) return Wl;
  $h = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return Wl = e, Wl;
}
var jl, Nh;
function Wy() {
  if (Nh) return jl;
  Nh = 1;
  var e = By(), t = yg();
  function n(r, i) {
    return r != null && t(r, i, e);
  }
  return jl = n, jl;
}
var Ul, Bh;
function jy() {
  if (Bh) return Ul;
  Bh = 1;
  var e = bp(), t = Ny(), n = Wy(), r = yc(), i = wp(), o = Sp(), s = _o(), a = 1, l = 2;
  function c(u, h) {
    return r(u) && i(h) ? o(s(u), h) : function(f) {
      var g = t(f, u);
      return g === void 0 && g === h ? n(f, u) : e(h, g, a | l);
    };
  }
  return Ul = c, Ul;
}
var Xl, Wh;
function Uy() {
  if (Wh) return Xl;
  Wh = 1;
  function e(t) {
    return t;
  }
  return Xl = e, Xl;
}
var Yl, jh;
function Xy() {
  if (jh) return Yl;
  jh = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return Yl = e, Yl;
}
var Kl, Uh;
function Yy() {
  if (Uh) return Kl;
  Uh = 1;
  var e = Cp();
  function t(n) {
    return function(r) {
      return e(r, n);
    };
  }
  return Kl = t, Kl;
}
var Gl, Xh;
function Ky() {
  if (Xh) return Gl;
  Xh = 1;
  var e = Xy(), t = Yy(), n = yc(), r = _o();
  function i(o) {
    return n(o) ? e(r(o)) : t(o);
  }
  return Gl = i, Gl;
}
var Vl, Yh;
function Gy() {
  if (Yh) return Vl;
  Yh = 1;
  var e = $y(), t = jy(), n = Uy(), r = Pn(), i = Ky();
  function o(s) {
    return typeof s == "function" ? s : s == null ? n : typeof s == "object" ? r(s) ? t(s[0], s[1]) : e(s) : i(s);
  }
  return Vl = o, Vl;
}
var Zl, Kh;
function Vy() {
  if (Kh) return Zl;
  Kh = 1;
  var e = ty(), t = vy(), n = Gy(), r = Pn();
  function i(o, s) {
    return function(a, l) {
      var c = r(a) ? e : t, u = s ? s() : {};
      return c(a, o, n(l, 2), u);
    };
  }
  return Zl = i, Zl;
}
var Ql, Gh;
function Zy() {
  if (Gh) return Ql;
  Gh = 1;
  var e = ey(), t = Vy(), n = Object.prototype, r = n.hasOwnProperty, i = t(function(o, s, a) {
    r.call(o, a) ? o[a].push(s) : e(o, a, [s]);
  });
  return Ql = i, Ql;
}
var Qy = Zy();
const Jy = /* @__PURE__ */ er(Qy);
function eb(e, t, n, r, i, o, s, a, l, c, u, h, f, g, d, v, k, I, y) {
  if (I !== void 0 || t[t.length - 1] !== n[t.length - 1])
    return;
  const S = sp(k);
  nr(t, l, s, a, o, (P, b, M, O, E) => {
    if (P !== t[t.length - 1])
      return;
    b += P.width;
    const _ = Math.max(b, O);
    _ > r || (e.save(), e.beginPath(), e.rect(_, o + 1, 1e4, i - o - 1), e.clip(), Io(E, M, i, c, u, d, v, S, (F, R, w, x) => {
      if (!x && k.length > 0 && !k.some((Y) => vo(b, F, 1e4, w, Y.x, Y.y, Y.width, Y.height)))
        return;
      const T = f.hasIndex(R), C = g.hasIndex(R);
      e.beginPath();
      const N = h == null ? void 0 : h(R), H = N === void 0 ? y : Jn(y, N);
      H.bgCell !== y.bgCell && (e.fillStyle = H.bgCell, e.fillRect(b, F, 1e4, w)), C && (e.fillStyle = H.bgHeader, e.fillRect(b, F, 1e4, w)), T && (e.fillStyle = H.accentLight, e.fillRect(b, F, 1e4, w));
    }), e.restore());
  });
}
function tb(e, t, n, r, i, o, s, a, l) {
  let c = !1;
  for (const d of t)
    if (!d.sticky) {
      c = s(d.sourceIndex);
      break;
    }
  const u = l.horizontalBorderColor ?? l.borderColor, h = l.borderColor, f = c ? Wr(t) : 0;
  let g;
  if (f !== 0 && (g = sd(h, l.bgCell), e.beginPath(), e.moveTo(f + 0.5, 0), e.lineTo(f + 0.5, r), e.strokeStyle = g, e.stroke()), i > 0) {
    const d = h === u && g !== void 0 ? g : sd(u, l.bgCell), v = mr(o, i, a);
    e.beginPath(), e.moveTo(0, r - v + 0.5), e.lineTo(n, r - v + 0.5), e.strokeStyle = d, e.stroke();
  }
}
const kp = (e, t, n) => {
  let r = 0, i = t, o = 0, s = n;
  if (e !== void 0 && e.length > 0) {
    r = Number.MAX_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER, i = Number.MIN_SAFE_INTEGER, s = Number.MIN_SAFE_INTEGER;
    for (const a of e)
      r = Math.min(r, a.x - 1), i = Math.max(i, a.x + a.width + 1), o = Math.min(o, a.y - 1), s = Math.max(s, a.y + a.height + 1);
  }
  return { minX: r, maxX: i, minY: o, maxY: s };
};
function nb(e, t, n, r, i, o, s, a, l, c, u, h, f, g, d) {
  var w;
  const v = d.bgCell, { minX: k, maxX: I, minY: y, maxY: S } = kp(a, o, s), P = [], b = s - mr(g, f, c);
  let M = l, O = n, E = 0;
  for (; M + i < b; ) {
    const x = M + i, T = c(O);
    if (x >= y && x <= S - 1) {
      const C = u == null ? void 0 : u(O), N = C == null ? void 0 : C.bgCell;
      N !== void 0 && N !== v && O >= g - f && P.push({
        x: k,
        y: x,
        w: I - k,
        h: T,
        color: N
      });
    }
    M += T, O < g - f && (E = M), O++;
  }
  let _ = 0;
  const F = Math.min(b, S) - E;
  if (F > 0)
    for (let x = 0; x < t.length; x++) {
      const T = t[x];
      if (T.width === 0)
        continue;
      const C = T.sticky ? _ : _ + r, N = (w = T.themeOverride) == null ? void 0 : w.bgCell;
      N !== void 0 && N !== v && C >= k && C <= I && h(x + 1) && P.push({
        x: C,
        y: E,
        w: T.width,
        h: F,
        color: N
      }), _ += T.width;
    }
  if (P.length === 0)
    return;
  let R;
  e.beginPath();
  for (let x = P.length - 1; x >= 0; x--) {
    const T = P[x];
    R === void 0 ? R = T.color : T.color !== R && (e.fillStyle = R, e.fill(), e.beginPath(), R = T.color), e.rect(T.x, T.y, T.w, T.h);
  }
  R !== void 0 && (e.fillStyle = R, e.fill()), e.beginPath();
}
function Vh(e, t, n, r, i, o, s, a, l, c, u, h, f, g, d, v, k, I = !1) {
  if (l !== void 0) {
    e.beginPath(), e.save(), e.rect(0, 0, o, s);
    for (const w of l)
      e.rect(w.x + 1, w.y + 1, w.width - 1, w.height - 1);
    e.clip("evenodd");
  }
  const y = k.horizontalBorderColor ?? k.borderColor, S = k.borderColor, { minX: P, maxX: b, minY: M, maxY: O } = kp(a, o, s), E = [];
  e.beginPath();
  let _ = 0.5;
  for (let w = 0; w < t.length; w++) {
    const x = t[w];
    if (x.width === 0)
      continue;
    _ += x.width;
    const T = x.sticky ? _ : _ + r;
    T >= P && T <= b && g(w + 1) && E.push({
      x1: T,
      y1: Math.max(c, M),
      x2: T,
      y2: Math.min(s, O),
      color: S
    });
  }
  let F = s + 0.5;
  for (let w = v - d; w < v; w++) {
    const x = h(w);
    F -= x, E.push({ x1: P, y1: F, x2: b, y2: F, color: y });
  }
  if (I !== !0) {
    let w = u + 0.5, x = n;
    const T = F;
    for (; w + i < T; ) {
      const C = w + i;
      if (C >= M && C <= O - 1) {
        const N = f == null ? void 0 : f(x);
        E.push({
          x1: P,
          y1: C,
          x2: b,
          y2: C,
          color: (N == null ? void 0 : N.horizontalBorderColor) ?? (N == null ? void 0 : N.borderColor) ?? y
        });
      }
      w += h(x), x++;
    }
  }
  const R = Jy(E, (w) => w.color);
  for (const w of Object.keys(R)) {
    e.strokeStyle = w;
    for (const x of R[w])
      e.moveTo(x.x1, x.y1), e.lineTo(x.x2, x.y2);
    e.stroke(), e.beginPath();
  }
  l !== void 0 && e.restore();
}
function rb(e, t, n, r, i, o, s, a, l, c, u, h, f, g, d, v, k, I, y) {
  const S = [];
  e.imageSmoothingEnabled = !1;
  const P = Math.min(i.cellYOffset, s), b = Math.max(i.cellYOffset, s);
  let M = 0;
  if (typeof I == "number")
    M += (b - P) * I;
  else
    for (let T = P; T < b; T++)
      M += I(T);
  s > i.cellYOffset && (M = -M), M += l - i.translateY;
  const O = Math.min(i.cellXOffset, o), E = Math.max(i.cellXOffset, o);
  let _ = 0;
  for (let T = O; T < E; T++)
    _ += v[T].width;
  o > i.cellXOffset && (_ = -_), _ += a - i.translateX;
  const F = Wr(k);
  if (_ !== 0 && M !== 0)
    return {
      regions: []
    };
  const R = c > 0 ? mr(f, c, I) : 0, w = u - F - Math.abs(_), x = h - g - R - Math.abs(M) - 1;
  if (w > 150 && x > 150) {
    const T = {
      sx: 0,
      sy: 0,
      sw: u * d,
      sh: h * d,
      dx: 0,
      dy: 0,
      dw: u * d,
      dh: h * d
    };
    if (M > 0 ? (T.sy = (g + 1) * d, T.sh = x * d, T.dy = (M + g + 1) * d, T.dh = x * d, S.push({
      x: 0,
      y: g,
      width: u,
      height: M + 1
    })) : M < 0 && (T.sy = (-M + g + 1) * d, T.sh = x * d, T.dy = (g + 1) * d, T.dh = x * d, S.push({
      x: 0,
      y: h + M - R,
      width: u,
      height: -M + R
    })), _ > 0 ? (T.sx = F * d, T.sw = w * d, T.dx = (_ + F) * d, T.dw = w * d, S.push({
      x: F - 1,
      y: 0,
      width: _ + 2,
      height: h
    })) : _ < 0 && (T.sx = (F - _) * d, T.sw = w * d, T.dx = F * d, T.dw = w * d, S.push({
      x: u + _,
      y: 0,
      width: -_,
      height: h
    })), e.setTransform(1, 0, 0, 1, 0, 0), y) {
      if (F > 0 && _ !== 0 && M === 0 && (r === void 0 || (n == null ? void 0 : n[1]) !== !1)) {
        const C = F * d, N = h * d;
        e.drawImage(t, 0, 0, C, N, 0, 0, C, N);
      }
      if (R > 0 && _ === 0 && M !== 0 && (r === void 0 || (n == null ? void 0 : n[0]) !== !1)) {
        const C = (h - R) * d, N = u * d, H = R * d;
        e.drawImage(t, 0, C, N, H, 0, C, N, H);
      }
    }
    e.drawImage(t, T.sx, T.sy, T.sw, T.sh, T.dx, T.dy, T.dw, T.dh), e.scale(d, d);
  }
  return e.imageSmoothingEnabled = !0, {
    regions: S
  };
}
function ib(e, t, n, r, i, o, s, a, l, c) {
  const u = [];
  return t !== e.cellXOffset || n !== e.cellYOffset || r !== e.translateX || i !== e.translateY || nr(l, n, r, i, a, (h, f, g, d) => {
    if (h.sourceIndex === c) {
      const v = Math.max(f, d) + 1;
      return u.push({
        x: v,
        y: 0,
        width: o - v,
        height: s
      }), !0;
    }
  }), u;
}
function ob(e, t) {
  if (t === void 0 || e.width !== t.width || e.height !== t.height || e.theme !== t.theme || e.headerHeight !== t.headerHeight || e.rowHeight !== t.rowHeight || e.rows !== t.rows || e.freezeColumns !== t.freezeColumns || e.getRowThemeOverride !== t.getRowThemeOverride || e.isFocused !== t.isFocused || e.isResizing !== t.isResizing || e.verticalBorder !== t.verticalBorder || e.getCellContent !== t.getCellContent || e.highlightRegions !== t.highlightRegions || e.selection !== t.selection || e.dragAndDropState !== t.dragAndDropState || e.prelightCells !== t.prelightCells || e.touchMode !== t.touchMode || e.maxScaleFactor !== t.maxScaleFactor)
    return !1;
  if (e.mappedColumns !== t.mappedColumns) {
    if (e.mappedColumns.length > 100 || e.mappedColumns.length !== t.mappedColumns.length)
      return !1;
    let n;
    for (let r = 0; r < e.mappedColumns.length; r++) {
      const i = e.mappedColumns[r], o = t.mappedColumns[r];
      if (Br(i, o))
        continue;
      if (n !== void 0 || i.width === o.width)
        return !1;
      const { width: s, ...a } = i, { width: l, ...c } = o;
      if (!Br(a, c))
        return !1;
      n = r;
    }
    return n === void 0 ? !0 : n;
  }
  return !0;
}
function Zh(e, t, n, r, i, o, s, a, l, c, u, h, f, g, d, v) {
  const k = d == null ? void 0 : d.filter((O) => O.style !== "no-outline");
  if (k === void 0 || k.length === 0)
    return;
  const I = Wr(a), y = mr(g, f, h), S = [l, 0, a.length, g - f], P = [I, 0, t, n - y], b = k.map((O) => {
    const E = O.range, _ = O.style ?? "dashed";
    return Kv(E, S, t, n, P).map((F) => {
      const R = F.rect, w = pc(R.x, R.y, t, n, u, c + u, r, i, o, s, g, l, f, a, h), x = R.width === 1 && R.height === 1 ? w : pc(R.x + R.width - 1, R.y + R.height - 1, t, n, u, c + u, r, i, o, s, g, l, f, a, h);
      return R.x + R.width >= a.length && (x.width -= 1), R.y + R.height >= g && (x.height -= 1), {
        color: O.color,
        style: _,
        clip: F.clip,
        rect: Yv({
          x: w.x,
          y: w.y,
          width: x.x + x.width - w.x,
          height: x.y + x.height - w.y
        }, t, n, 8)
      };
    });
  }), M = () => {
    e.lineWidth = 1;
    let O = !1;
    for (const E of b)
      for (const _ of E)
        if ((_ == null ? void 0 : _.rect) !== void 0 && vo(0, 0, t, n, _.rect.x, _.rect.y, _.rect.width, _.rect.height)) {
          const F = O, R = !Xv(_.clip, _.rect);
          R && (e.save(), e.rect(_.clip.x, _.clip.y, _.clip.width, _.clip.height), e.clip()), _.style === "dashed" && !O ? (e.setLineDash([5, 3]), O = !0) : (_.style === "solid" || _.style === "solid-outline") && O && (e.setLineDash([]), O = !1), e.strokeStyle = _.style === "solid-outline" ? on(on(_.color, v.borderColor), v.bgCell) : dr(_.color, 1), e.strokeRect(_.rect.x + 0.5, _.rect.y + 0.5, _.rect.width - 1, _.rect.height - 1), R && (e.restore(), O = F);
        }
    O && e.setLineDash([]);
  };
  return M(), M;
}
function Qh(e, t, n, r, i) {
  e.beginPath(), e.moveTo(t, n), e.lineTo(t, r), e.lineWidth = 2, e.strokeStyle = i, e.stroke(), e.globalAlpha = 1;
}
function Jl(e, t, n, r, i, o, s, a, l, c, u, h, f, g, d, v, k) {
  if (u.current === void 0)
    return;
  const I = u.current.range, y = u.current.cell, S = [I.x + I.width - 1, I.y + I.height - 1];
  if (y[1] >= k && S[1] >= k || !s.some((T) => T.sourceIndex === y[0] || T.sourceIndex === S[0]))
    return;
  const [b, M] = u.current.cell, O = f(u.current.cell), E = O.span ?? [b, b], _ = M >= k - g, F = g > 0 && !_ ? mr(k, g, h) - 1 : 0, R = S[1];
  let w;
  if (nr(s, r, i, o, c, (T, C, N, H, Y) => {
    if (T.sticky && b > T.sourceIndex)
      return;
    const se = T.sourceIndex < E[0], te = T.sourceIndex > E[1], A = T.sourceIndex === S[0];
    if (!(!A && (se || te)))
      return Io(Y, N, n, k, h, g, d, void 0, ($, Q, ie) => {
        if (Q !== M && Q !== R)
          return;
        let z = C, le = T.width;
        if (O.span !== void 0) {
          const re = cp(O.span, C, $, T.width, ie, T, a), pe = T.sticky ? re[0] : re[1];
          pe !== void 0 && (z = pe.x, le = pe.width);
        }
        return Q === R && A && v && (w = () => {
          var re;
          H > z && !T.sticky && (e.beginPath(), e.rect(H, 0, t - H, n), e.clip()), e.beginPath(), e.rect(z + le - 4, $ + ie - 4, 4, 4), e.fillStyle = ((re = T.themeOverride) == null ? void 0 : re.accentColor) ?? l.accentColor, e.fill();
        }), w !== void 0;
      }), w !== void 0;
  }), w === void 0)
    return;
  const x = () => {
    e.save(), e.beginPath(), e.rect(0, c, t, n - c - F), e.clip(), w == null || w(), e.restore();
  };
  return x(), x;
}
function ab(e, t, n, r, i, o, s, a, l) {
  l === void 0 || l.size === 0 || (e.beginPath(), lp(t, n, o, r, (c, u, h, f, g, d) => {
    l.hasItemInRectangle({
      x: c[0],
      y: -2,
      width: c[1] - c[0] + 1,
      height: 1
    }) && e.rect(h, f, g, d);
  }), nr(t, a, o, s, i, (c, u, h, f) => {
    const g = Math.max(0, f - u), d = u + g + 1, v = c.width - g - 1;
    l.has([c.sourceIndex, -1]) && e.rect(d, r, v, i - r);
  }), e.clip());
}
function sb(e, t, n, r, i, o, s, a, l, c) {
  let u = 0;
  return nr(e, o, r, i, n, (h, f, g, d, v) => (Io(v, g, t, s, a, l, c, void 0, (k, I, y, S) => {
    S || (u = Math.max(I, u));
  }), !0)), u;
}
function Jh(e, t) {
  var Ue;
  const { canvasCtx: n, headerCanvasCtx: r, width: i, height: o, cellXOffset: s, cellYOffset: a, translateX: l, translateY: c, mappedColumns: u, enableGroups: h, freezeColumns: f, dragAndDropState: g, theme: d, drawFocus: v, headerHeight: k, groupHeaderHeight: I, disabledRows: y, rowHeight: S, verticalBorder: P, overrideCursor: b, isResizing: M, selection: O, fillHandle: E, freezeTrailingRows: _, rows: F, getCellContent: R, getGroupDetails: w, getRowThemeOverride: x, isFocused: T, drawHeaderCallback: C, prelightCells: N, drawCellCallback: H, highlightRegions: Y, resizeCol: se, imageLoader: te, lastBlitData: A, hoverValues: $, hyperWrapping: Q, hoverInfo: ie, spriteManager: z, maxScaleFactor: le, hasAppendRow: oe, touchMode: re, enqueue: pe, renderStateProvider: we, getCellRenderer: Ce, renderStrategy: Be, bufferACtx: V, bufferBCtx: Ee, damage: Ae, minimumCellWidth: ft } = e;
  if (i === 0 || o === 0)
    return;
  const Se = Be === "double-buffer", ve = Math.min(le, Math.ceil(window.devicePixelRatio ?? 1)), Oe = Be !== "direct" && ob(e, t), Le = n.canvas;
  (Le.width !== i * ve || Le.height !== o * ve) && (Le.width = i * ve, Le.height = o * ve, Le.style.width = i + "px", Le.style.height = o + "px");
  const qe = r.canvas, Me = h ? I + k : k, nt = Me + 1;
  (qe.width !== i * ve || qe.height !== nt * ve) && (qe.width = i * ve, qe.height = nt * ve, qe.style.width = i + "px", qe.style.height = nt + "px");
  const Ke = V.canvas, Ge = Ee.canvas;
  Se && (Ke.width !== i * ve || Ke.height !== o * ve) && (Ke.width = i * ve, Ke.height = o * ve, A.current !== void 0 && (A.current.aBufferScroll = void 0)), Se && (Ge.width !== i * ve || Ge.height !== o * ve) && (Ge.width = i * ve, Ge.height = o * ve, A.current !== void 0 && (A.current.bBufferScroll = void 0));
  const ce = A.current;
  if (Oe === !0 && s === (ce == null ? void 0 : ce.cellXOffset) && a === (ce == null ? void 0 : ce.cellYOffset) && l === (ce == null ? void 0 : ce.translateX) && c === (ce == null ? void 0 : ce.translateY))
    return;
  let He = null;
  Se && (He = n);
  const We = r;
  let De;
  Se ? Ae !== void 0 ? De = (ce == null ? void 0 : ce.lastBuffer) === "b" ? Ee : V : De = (ce == null ? void 0 : ce.lastBuffer) === "b" ? V : Ee : De = n;
  const Mt = De.canvas, Ve = Se ? Mt === Ke ? Ge : Ke : Le, je = typeof S == "number" ? () => S : S;
  We.save(), De.save(), We.beginPath(), De.beginPath(), We.textBaseline = "middle", De.textBaseline = "middle", ve !== 1 && (We.scale(ve, ve), De.scale(ve, ve));
  const Ze = gc(u, s, i, g, l);
  let Ct = [];
  const It = v && ((Ue = O.current) == null ? void 0 : Ue.cell[1]) === a && c === 0;
  let sn = !1;
  if (Y !== void 0) {
    for (const Qe of Y)
      if (Qe.style !== "no-outline" && Qe.range.y === a && c === 0) {
        sn = !0;
        break;
      }
  }
  const Gt = () => {
    Zv(We, Ze, h, ie, i, l, k, I, g, M, O, d, z, $, P, w, Ae, C, re), Vh(We, Ze, a, l, c, i, o, void 0, void 0, I, Me, je, x, P, _, F, d, !0), We.beginPath(), We.moveTo(0, nt - 0.5), We.lineTo(i, nt - 0.5), We.strokeStyle = on(d.headerBottomBorderColor ?? d.horizontalBorderColor ?? d.borderColor, d.bgHeader), We.stroke(), sn && Zh(We, i, o, s, a, l, c, u, f, k, I, S, _, F, Y, d), It && Jl(We, i, o, a, l, c, Ze, u, d, Me, O, je, R, _, oe, E, F);
  };
  if (Ae !== void 0) {
    const Qe = Ze[Ze.length - 1].sourceIndex + 1, Lt = Ae.hasItemInRegion([
      {
        x: s,
        y: -2,
        width: Qe,
        height: 2
      },
      {
        x: s,
        y: a,
        width: Qe,
        height: 300
      },
      {
        x: 0,
        y: a,
        width: f,
        height: 300
      },
      {
        x: 0,
        y: -2,
        width: f,
        height: 2
      },
      {
        x: s,
        y: F - _,
        width: Qe,
        height: _,
        when: _ > 0
      }
    ]), Ft = (kt) => {
      $d(kt, Ze, u, o, Me, l, c, a, F, je, R, w, x, y, T, v, _, oe, Ct, Ae, O, N, Y, te, z, $, ie, H, Q, d, pe, we, Ce, b, ft);
      const Dt = O.current;
      E && v && Dt !== void 0 && Ae.has(Xg(Dt.range)) && Jl(kt, i, o, a, l, c, Ze, u, d, Me, O, je, R, _, oe, E, F);
    };
    Lt && (Ft(De), He !== null && (He.save(), He.scale(ve, ve), He.textBaseline = "middle", Ft(He), He.restore()), Ae.hasHeader() && (ab(We, Ze, i, I, Me, l, c, a, Ae), Gt())), De.restore(), We.restore();
    return;
  }
  if ((Oe !== !0 || s !== (ce == null ? void 0 : ce.cellXOffset) || l !== (ce == null ? void 0 : ce.translateX) || It !== (ce == null ? void 0 : ce.mustDrawFocusOnHeader) || sn !== (ce == null ? void 0 : ce.mustDrawHighlightRingsOnHeader)) && Gt(), Oe === !0) {
    rn(Ve !== void 0 && ce !== void 0);
    const { regions: Qe } = rb(De, Ve, Ve === Ke ? ce.aBufferScroll : ce.bBufferScroll, Ve === Ke ? ce.bBufferScroll : ce.aBufferScroll, ce, s, a, l, c, _, i, o, F, Me, ve, u, Ze, S, Se);
    Ct = Qe;
  } else Oe !== !1 && (rn(ce !== void 0), Ct = ib(ce, s, a, l, c, i, o, Me, Ze, Oe));
  tb(De, Ze, i, o, _, F, P, je, d);
  const mt = Zh(De, i, o, s, a, l, c, u, f, k, I, S, _, F, Y, d), Bt = v ? Jl(De, i, o, a, l, c, Ze, u, d, Me, O, je, R, _, oe, E, F) : void 0;
  if (De.fillStyle = d.bgCell, Ct.length > 0) {
    De.beginPath();
    for (const Qe of Ct)
      De.rect(Qe.x, Qe.y, Qe.width, Qe.height);
    De.clip(), De.fill(), De.beginPath();
  } else
    De.fillRect(0, 0, i, o);
  const Wt = $d(De, Ze, u, o, Me, l, c, a, F, je, R, w, x, y, T, v, _, oe, Ct, Ae, O, N, Y, te, z, $, ie, H, Q, d, pe, we, Ce, b, ft);
  eb(De, Ze, u, i, o, Me, l, c, a, F, je, x, O.rows, y, _, oe, Ct, Ae, d), nb(De, Ze, a, l, c, i, o, Ct, Me, je, x, P, _, F, d), Vh(De, Ze, a, l, c, i, o, Ct, Wt, I, Me, je, x, P, _, F, d), mt == null || mt(), Bt == null || Bt(), M && nr(Ze, 0, l, 0, Me, (Qe, Lt) => Qe.sourceIndex === se ? (Qh(We, Lt + Qe.width, 0, Me + 1, on(d.resizeIndicatorColor ?? d.accentLight, d.bgHeader)), Qh(De, Lt + Qe.width, Me, o, on(d.resizeIndicatorColor ?? d.accentLight, d.bgCell)), !0) : !1), He !== null && (He.fillStyle = d.bgCell, He.fillRect(0, 0, i, o), He.drawImage(De.canvas, 0, 0));
  const On = sb(Ze, o, Me, l, c, a, F, je, _, oe);
  te == null || te.setWindow({
    x: s,
    y: a,
    width: Ze.length,
    height: On - a
  }, f, Array.from({ length: _ }, (Qe, Lt) => F - 1 - Lt));
  const Dn = ce !== void 0 && (s !== ce.cellXOffset || l !== ce.translateX), gt = ce !== void 0 && (a !== ce.cellYOffset || c !== ce.translateY);
  A.current = {
    cellXOffset: s,
    cellYOffset: a,
    translateX: l,
    translateY: c,
    mustDrawFocusOnHeader: It,
    mustDrawHighlightRingsOnHeader: sn,
    lastBuffer: Se ? Mt === Ke ? "a" : "b" : void 0,
    aBufferScroll: Mt === Ke ? [Dn, gt] : ce == null ? void 0 : ce.aBufferScroll,
    bBufferScroll: Mt === Ge ? [Dn, gt] : ce == null ? void 0 : ce.bBufferScroll
  }, De.restore(), We.restore();
}
const lb = 80;
function cb(e) {
  const t = e - 1;
  return t * t * t + 1;
}
class ub {
  constructor(t) {
    be(this, "callback");
    be(this, "currentHoveredItem");
    be(this, "leavingItems", []);
    be(this, "lastAnimationTime");
    be(this, "addToLeavingItems", (t) => {
      this.leavingItems.some((r) => wi(r.item, t.item)) || this.leavingItems.push(t);
    });
    /**
     * @returns the hover amount of the item, if it was leaving (0 if not).
     */
    be(this, "removeFromLeavingItems", (t) => {
      const n = this.leavingItems.find((r) => wi(r.item, t));
      return this.leavingItems = this.leavingItems.filter((r) => r !== n), (n == null ? void 0 : n.hoverAmount) ?? 0;
    });
    be(this, "cleanUpLeavingElements", () => {
      this.leavingItems = this.leavingItems.filter((t) => t.hoverAmount > 0);
    });
    be(this, "shouldStep", () => {
      const t = this.leavingItems.length > 0, n = this.currentHoveredItem !== void 0 && this.currentHoveredItem.hoverAmount < 1;
      return t || n;
    });
    be(this, "getAnimatingItems", () => this.currentHoveredItem !== void 0 ? [...this.leavingItems, this.currentHoveredItem] : this.leavingItems.map((t) => ({ ...t, hoverAmount: cb(t.hoverAmount) })));
    be(this, "step", (t) => {
      if (this.lastAnimationTime === void 0)
        this.lastAnimationTime = t;
      else {
        const r = (t - this.lastAnimationTime) / lb;
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
      if (!wi((n = this.currentHoveredItem) == null ? void 0 : n.item, t)) {
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
class fb {
  constructor(t) {
    be(this, "fn");
    be(this, "val");
    this.fn = t;
  }
  get value() {
    return this.val ?? (this.val = this.fn());
  }
}
function Yc(e) {
  return new fb(e);
}
const db = Yc(() => window.navigator.userAgent.includes("Firefox")), yo = Yc(() => window.navigator.userAgent.includes("Mac OS") && window.navigator.userAgent.includes("Safari") && !window.navigator.userAgent.includes("Chrome")), bo = Yc(() => window.navigator.platform.toLowerCase().startsWith("mac"));
function hb(e) {
  const t = p.useRef([]), n = p.useRef(0), r = p.useRef(e);
  r.current = e;
  const i = p.useCallback(() => {
    const o = () => window.requestAnimationFrame(s), s = () => {
      const a = t.current.map(Bc);
      t.current = [], r.current(new Ci(a)), t.current.length > 0 ? n.current++ : n.current = 0;
    };
    window.requestAnimationFrame(n.current > 600 ? o : s);
  }, []);
  return p.useCallback((o) => {
    t.current.length === 0 && i();
    const s = kn(o[0], o[1]);
    t.current.includes(s) || t.current.push(s);
  }, [i]);
}
const Qn = "header", nn = "group-header", wo = "out-of-bounds";
var Nr;
(function(e) {
  e[e.Start = -2] = "Start", e[e.StartPadding = -1] = "StartPadding", e[e.Center = 0] = "Center", e[e.EndPadding = 1] = "EndPadding", e[e.End = 2] = "End";
})(Nr || (Nr = {}));
function xp(e, t) {
  return e === t ? !0 : (e == null ? void 0 : e.kind) === "out-of-bounds" ? (e == null ? void 0 : e.kind) === (t == null ? void 0 : t.kind) && (e == null ? void 0 : e.location[0]) === (t == null ? void 0 : t.location[0]) && (e == null ? void 0 : e.location[1]) === (t == null ? void 0 : t.location[1]) && (e == null ? void 0 : e.region[0]) === (t == null ? void 0 : t.region[0]) && (e == null ? void 0 : e.region[1]) === (t == null ? void 0 : t.region[1]) : (e == null ? void 0 : e.kind) === (t == null ? void 0 : t.kind) && (e == null ? void 0 : e.location[0]) === (t == null ? void 0 : t.location[0]) && (e == null ? void 0 : e.location[1]) === (t == null ? void 0 : t.location[1]);
}
const eg = 6, gb = (e, t) => {
  if (e.kind === he.Custom)
    return e.copyData;
  const n = t == null ? void 0 : t(e);
  return (n == null ? void 0 : n.getAccessibilityString(e)) ?? "";
}, pb = (e, t) => {
  const { width: n, height: r, accessibilityHeight: i, columns: o, cellXOffset: s, cellYOffset: a, headerHeight: l, fillHandle: c = !1, groupHeaderHeight: u, rowHeight: h, rows: f, getCellContent: g, getRowThemeOverride: d, onHeaderMenuClick: v, enableGroups: k, isFilling: I, onCanvasFocused: y, onCanvasBlur: S, isFocused: P, selection: b, freezeColumns: M, onContextMenu: O, freezeTrailingRows: E, fixedShadowX: _ = !0, fixedShadowY: F = !0, drawFocusRing: R, onMouseDown: w, onMouseUp: x, onMouseMoveRaw: T, onMouseMove: C, onItemHovered: N, dragAndDropState: H, firstColAccessible: Y, onKeyDown: se, onKeyUp: te, highlightRegions: A, canvasRef: $, onDragStart: Q, onDragEnd: ie, eventTargetRef: z, isResizing: le, resizeColumn: oe, isDragging: re, isDraggable: pe = !1, allowResize: we, disabledRows: Ce, hasAppendRow: Be, getGroupDetails: V, theme: Ee, prelightCells: Ae, headerIcons: ft, verticalBorder: Se, drawCell: ve, drawHeader: Oe, onCellFocused: Le, onDragOverCell: qe, onDrop: Me, onDragLeave: nt, imageWindowLoader: Ke, smoothScrollX: Ge = !1, smoothScrollY: ce = !1, experimental: He, getCellRenderer: We } = e, De = e.translateX ?? 0, Mt = e.translateY ?? 0, Ve = Math.max(M, Math.min(o.length - 1, s)), je = p.useRef(null), Ze = Ke, Ct = p.useRef(), [It, sn] = p.useState(!1), Gt = p.useRef([]), mt = p.useRef(), [Bt, Wt] = p.useState(), [On, Dn] = p.useState(), gt = p.useRef(null), [Ue, Qe] = p.useState(), [Lt, Ft] = p.useState(!1), kt = p.useRef(Lt);
  kt.current = Lt;
  const Dt = p.useMemo(() => new jv(ft, () => {
    xn.current = void 0, rr.current();
  }), [ft]), hn = k ? u + l : l, Ye = p.useRef(-1), vt = ((He == null ? void 0 : He.enableFirefoxRescaling) ?? !1) && db.value, ct = ((He == null ? void 0 : He.enableSafariRescaling) ?? !1) && yo.value;
  p.useLayoutEffect(() => {
    window.devicePixelRatio === 1 || !vt && !ct || (Ye.current !== -1 && sn(!0), window.clearTimeout(Ye.current), Ye.current = window.setTimeout(() => {
      sn(!1), Ye.current = -1;
    }, 200));
  }, [a, Ve, De, Mt, vt, ct]);
  const ut = S1(o, M), qt = _ ? Wr(ut, H) : 0, pt = p.useCallback((q, J, ue) => {
    const ae = q.getBoundingClientRect();
    if (J >= ut.length || ue >= f)
      return;
    const ne = ae.width / n, me = pc(J, ue, n, r, u, hn, Ve, a, De, Mt, f, M, E, ut, h);
    return ne !== 1 && (me.x *= ne, me.y *= ne, me.width *= ne, me.height *= ne), me.x += ae.x, me.y += ae.y, me;
  }, [
    n,
    r,
    u,
    hn,
    Ve,
    a,
    De,
    Mt,
    f,
    M,
    E,
    ut,
    h
  ]), Ot = p.useCallback((q, J, ue, ae) => {
    const ne = q.getBoundingClientRect(), me = ne.width / n, Ie = (J - ne.left) / me, Pe = (ue - ne.top) / me, ge = 5, tt = gc(ut, Ve, n, void 0, De);
    let ke = 0, rt = 0;
    ae instanceof MouseEvent && (ke = ae.button, rt = ae.buttons);
    const Fe = R1(Ie, tt, De), Xe = _1(Pe, r, k, l, u, f, h, a, Mt, E), Rt = (ae == null ? void 0 : ae.shiftKey) === !0, ze = (ae == null ? void 0 : ae.ctrlKey) === !0, xt = (ae == null ? void 0 : ae.metaKey) === !0, cn = ae !== void 0 && !(ae instanceof MouseEvent) || (ae == null ? void 0 : ae.pointerType) === "touch", wt = [
      Ie < 0 ? -1 : n < Ie ? 1 : 0,
      Pe < hn ? -1 : r < Pe ? 1 : 0
    ];
    let Qt;
    if (Fe === -1 || Pe < 0 || Ie < 0 || Xe === void 0 || Ie > n || Pe > r) {
      const et = Ie > n ? 1 : Ie < 0 ? -1 : 0, _t = Pe > r ? 1 : Pe < 0 ? -1 : 0;
      let Jt = et * 2, Rn = _t * 2;
      et === 0 && (Jt = Fe === -1 ? Nr.EndPadding : Nr.Center), _t === 0 && (Rn = Xe === void 0 ? Nr.EndPadding : Nr.Center);
      let vn = !1;
      if (Fe === -1 && Xe === -1) {
        const or = pt(q, ut.length - 1, -1);
        rn(or !== void 0), vn = J < or.x + or.width + ge;
      }
      const Tr = Ie > n && Ie < n + lc() || Pe > r && Pe < r + lc();
      Qt = {
        kind: wo,
        location: [Fe !== -1 ? Fe : Ie < 0 ? 0 : ut.length - 1, Xe ?? f - 1],
        region: [Jt, Rn],
        shiftKey: Rt,
        ctrlKey: ze,
        metaKey: xt,
        isEdge: vn,
        isTouch: cn,
        button: ke,
        buttons: rt,
        scrollEdge: wt,
        isMaybeScrollbar: Tr
      };
    } else if (Xe <= -1) {
      let et = pt(q, Fe, Xe);
      rn(et !== void 0);
      let _t = et !== void 0 && et.x + et.width - J <= ge;
      const Jt = Fe - 1;
      J - et.x <= ge && Jt >= 0 ? (_t = !0, et = pt(q, Jt, Xe), rn(et !== void 0), Qt = {
        kind: k && Xe === -2 ? nn : Qn,
        location: [Jt, Xe],
        bounds: et,
        group: ut[Jt].group ?? "",
        isEdge: _t,
        shiftKey: Rt,
        ctrlKey: ze,
        metaKey: xt,
        isTouch: cn,
        localEventX: J - et.x,
        localEventY: ue - et.y,
        button: ke,
        buttons: rt,
        scrollEdge: wt
      }) : Qt = {
        kind: k && Xe === -2 ? nn : Qn,
        group: ut[Fe].group ?? "",
        location: [Fe, Xe],
        bounds: et,
        isEdge: _t,
        shiftKey: Rt,
        ctrlKey: ze,
        metaKey: xt,
        isTouch: cn,
        localEventX: J - et.x,
        localEventY: ue - et.y,
        button: ke,
        buttons: rt,
        scrollEdge: wt
      };
    } else {
      const et = pt(q, Fe, Xe);
      rn(et !== void 0);
      const _t = et !== void 0 && et.x + et.width - J < ge;
      let Jt = !1;
      if (c && b.current !== void 0) {
        const Rn = Xg(b.current.range), vn = pt(q, Rn[0], Rn[1]);
        if (vn !== void 0) {
          const Tr = vn.x + vn.width - 2, or = vn.y + vn.height - 2;
          Jt = Math.abs(Tr - J) < eg && Math.abs(or - ue) < eg;
        }
      }
      Qt = {
        kind: "cell",
        location: [Fe, Xe],
        bounds: et,
        isEdge: _t,
        shiftKey: Rt,
        ctrlKey: ze,
        isFillHandle: Jt,
        metaKey: xt,
        isTouch: cn,
        localEventX: J - et.x,
        localEventY: ue - et.y,
        button: ke,
        buttons: rt,
        scrollEdge: wt
      };
    }
    return Qt;
  }, [
    n,
    ut,
    Ve,
    De,
    r,
    k,
    l,
    u,
    f,
    h,
    a,
    Mt,
    E,
    pt,
    c,
    b,
    hn
  ]), [yt] = Bt ?? [], Pi = p.useRef(() => {
  }), Wn = p.useRef(Bt);
  Wn.current = Bt;
  const [Ln, Fn] = p.useMemo(() => {
    const q = document.createElement("canvas"), J = document.createElement("canvas");
    return q.style.display = "none", q.style.opacity = "0", q.style.position = "fixed", J.style.display = "none", J.style.opacity = "0", J.style.position = "fixed", [q.getContext("2d", { alpha: !1 }), J.getContext("2d", { alpha: !1 })];
  }, []);
  p.useLayoutEffect(() => {
    if (!(Ln === null || Fn === null))
      return document.documentElement.append(Ln.canvas), document.documentElement.append(Fn.canvas), () => {
        Ln.canvas.remove(), Fn.canvas.remove();
      };
  }, [Ln, Fn]);
  const vr = p.useMemo(() => new F1(), []), Ai = vt && It ? 1 : ct && It ? 2 : 5, Oi = (He == null ? void 0 : He.disableMinimumCellWidth) === !0 ? 1 : 10, xn = p.useRef(), yr = p.useRef(null), br = p.useRef(null), wr = p.useCallback(() => {
    var Ie;
    const q = je.current, J = gt.current;
    if (q === null || J === null || (yr.current === null && (yr.current = q.getContext("2d", { alpha: !1 }), q.width = 0, q.height = 0), br.current === null && (br.current = J.getContext("2d", { alpha: !1 }), J.width = 0, J.height = 0), yr.current === null || br.current === null || Ln === null || Fn === null))
      return;
    let ue = !1;
    const ae = (Pe) => {
      ue = !0, Qe(Pe);
    }, ne = xn.current, me = {
      headerCanvasCtx: br.current,
      canvasCtx: yr.current,
      bufferACtx: Ln,
      bufferBCtx: Fn,
      width: n,
      height: r,
      cellXOffset: Ve,
      cellYOffset: a,
      translateX: Math.round(De),
      translateY: Math.round(Mt),
      mappedColumns: ut,
      enableGroups: k,
      freezeColumns: M,
      dragAndDropState: H,
      theme: Ee,
      headerHeight: l,
      groupHeaderHeight: u,
      disabledRows: Ce ?? at.empty(),
      rowHeight: h,
      verticalBorder: Se,
      isResizing: le,
      resizeCol: oe,
      isFocused: P,
      selection: b,
      fillHandle: c,
      drawCellCallback: ve,
      hasAppendRow: Be,
      overrideCursor: ae,
      maxScaleFactor: Ai,
      freezeTrailingRows: E,
      rows: f,
      drawFocus: R,
      getCellContent: g,
      getGroupDetails: V ?? ((Pe) => ({ name: Pe })),
      getRowThemeOverride: d,
      drawHeaderCallback: Oe,
      prelightCells: Ae,
      highlightRegions: A,
      imageLoader: Ze,
      lastBlitData: mt,
      damage: Ct.current,
      hoverValues: Gt.current,
      hoverInfo: Wn.current,
      spriteManager: Dt,
      scrolling: It,
      hyperWrapping: (He == null ? void 0 : He.hyperWrapping) ?? !1,
      touchMode: Lt,
      enqueue: Pi.current,
      renderStateProvider: vr,
      renderStrategy: (He == null ? void 0 : He.renderStrategy) ?? (yo.value ? "double-buffer" : "single-buffer"),
      getCellRenderer: We,
      minimumCellWidth: Oi
    };
    me.damage === void 0 ? (xn.current = me, Jh(me, ne)) : Jh(me, void 0), !ue && (me.damage === void 0 || me.damage.has((Ie = Wn == null ? void 0 : Wn.current) == null ? void 0 : Ie[0])) && Qe(void 0);
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
    k,
    M,
    H,
    Ee,
    l,
    u,
    Ce,
    h,
    Se,
    le,
    Be,
    oe,
    P,
    b,
    c,
    E,
    f,
    R,
    Ai,
    g,
    V,
    d,
    ve,
    Oe,
    Ae,
    A,
    Ze,
    Dt,
    It,
    He == null ? void 0 : He.hyperWrapping,
    He == null ? void 0 : He.renderStrategy,
    Lt,
    vr,
    We,
    Oi
  ]), rr = p.useRef(wr);
  p.useLayoutEffect(() => {
    wr(), rr.current = wr;
  }, [wr]), p.useLayoutEffect(() => {
    (async () => {
      var J;
      ((J = document == null ? void 0 : document.fonts) == null ? void 0 : J.ready) !== void 0 && (await document.fonts.ready, xn.current = void 0, rr.current());
    })();
  }, []);
  const jn = p.useCallback((q) => {
    Ct.current = q, rr.current(), Ct.current = void 0;
  }, []), Di = hb(jn);
  Pi.current = Di;
  const Li = p.useCallback((q) => {
    jn(new Ci(q.map((J) => J.cell)));
  }, [jn]);
  Ze.setCallback(jn);
  const [Ao, Oo] = p.useState(!1), [Sr, qn] = yt ?? [], Do = Sr !== void 0 && qn === -1, Lo = Sr !== void 0 && qn === -2;
  let Fi = !1, Cr = !1, Pt = Ue;
  if (Pt === void 0 && Sr !== void 0 && qn !== void 0 && qn > -1 && qn < f) {
    const q = g([Sr, qn], !0);
    Fi = q.kind === dn.NewRow || q.kind === dn.Marker && q.markerKind !== "number", Cr = q.kind === he.Boolean && sc(q), Pt = q.cursor;
  }
  const qi = re ? "grabbing" : (On ?? !1) || le ? "col-resize" : Ao || I ? "crosshair" : Pt !== void 0 ? Pt : Do || Fi || Cr || Lo ? "pointer" : "default", kr = p.useMemo(() => ({
    // width,
    // height,
    contain: "strict",
    display: "block",
    cursor: qi
  }), [qi]), jr = p.useRef("default"), Un = z == null ? void 0 : z.current;
  Un != null && jr.current !== kr.cursor && (Un.style.cursor = jr.current = kr.cursor);
  const Vt = p.useCallback((q, J, ue, ae) => {
    if (V === void 0)
      return;
    const ne = V(q);
    if (ne.actions !== void 0) {
      const me = hp(J, ne.actions);
      for (const [Ie, Pe] of me.entries())
        if (Po(Pe, ue + J.x, ae + Pe.y))
          return ne.actions[Ie];
    }
  }, [V]), gn = p.useCallback((q, J, ue, ae) => {
    const ne = o[J];
    if (!re && !le && ne.hasMenu === !0 && !(On ?? !1)) {
      const me = pt(q, J, -1);
      rn(me !== void 0);
      const Ie = dp(me.x, me.y, me.width, me.height, Ic(ne.title) === "rtl");
      if (ue > Ie.x && ue < Ie.x + Ie.width && ae > Ie.y && ae < Ie.y + Ie.height)
        return me;
    }
  }, [o, pt, On, re, le]), Ur = p.useRef(0), Xn = p.useRef(), Xr = p.useRef(!1), jt = p.useCallback((q) => {
    const J = je.current, ue = z == null ? void 0 : z.current;
    if (J === null || q.target !== J && q.target !== ue)
      return;
    Xr.current = !0;
    let ae, ne;
    if (q instanceof MouseEvent ? (ae = q.clientX, ne = q.clientY) : (ae = q.touches[0].clientX, ne = q.touches[0].clientY), q.target === ue && ue !== null) {
      const Ie = ue.getBoundingClientRect();
      if (ae > Ie.right || ne > Ie.bottom)
        return;
    }
    const me = Ot(J, ae, ne, q);
    Xn.current = me.location, me.isTouch && (Ur.current = Date.now()), kt.current !== me.isTouch && Ft(me.isTouch), !(me.kind === Qn && gn(J, me.location[0], ae, ne) !== void 0) && (me.kind === nn && Vt(me.group, me.bounds, me.localEventX, me.localEventY) !== void 0 || (w == null || w(me), !me.isTouch && pe !== !0 && pe !== me.kind && me.button < 3 && me.button !== 1 && q.preventDefault()));
  }, [z, pe, Ot, Vt, gn, w]);
  Ht("touchstart", jt, window, !1), Ht("mousedown", jt, window, !1);
  const xr = p.useRef(0), Yr = p.useCallback((q) => {
    var rt, Fe;
    const J = xr.current;
    xr.current = Date.now();
    const ue = je.current;
    if (Xr.current = !1, x === void 0 || ue === null)
      return;
    const ae = z == null ? void 0 : z.current, ne = q.target !== ue && q.target !== ae;
    let me, Ie, Pe = !0;
    if (q instanceof MouseEvent) {
      if (me = q.clientX, Ie = q.clientY, Pe = q.button < 3, q.pointerType === "touch")
        return;
    } else
      me = q.changedTouches[0].clientX, Ie = q.changedTouches[0].clientY;
    let ge = Ot(ue, me, Ie, q);
    ge.isTouch && Ur.current !== 0 && Date.now() - Ur.current > 500 && (ge = {
      ...ge,
      isLongTouch: !0
    }), J !== 0 && Date.now() - J < (ge.isTouch ? 1e3 : 500) && (ge = {
      ...ge,
      isDoubleClick: !0
    }), kt.current !== ge.isTouch && Ft(ge.isTouch), !ne && q.cancelable && Pe && q.preventDefault();
    const [tt] = ge.location, ke = gn(ue, tt, me, Ie);
    if (ge.kind === Qn && ke !== void 0) {
      (ge.button !== 0 || ((rt = Xn.current) == null ? void 0 : rt[0]) !== tt || ((Fe = Xn.current) == null ? void 0 : Fe[1]) !== -1) && x(ge, !0);
      return;
    } else if (ge.kind === nn) {
      const Xe = Vt(ge.group, ge.bounds, ge.localEventX, ge.localEventY);
      if (Xe !== void 0) {
        ge.button === 0 && Xe.onClick(ge);
        return;
      }
    }
    x(ge, ne);
  }, [x, z, Ot, gn, Vt]);
  Ht("mouseup", Yr, window, !1), Ht("touchend", Yr, window, !1);
  const Hi = p.useCallback((q) => {
    var ke, rt;
    const J = je.current;
    if (J === null)
      return;
    const ue = z == null ? void 0 : z.current, ae = q.target !== J && q.target !== ue;
    let ne, me, Ie = !0;
    q instanceof MouseEvent ? (ne = q.clientX, me = q.clientY, Ie = q.button < 3) : (ne = q.changedTouches[0].clientX, me = q.changedTouches[0].clientY);
    const Pe = Ot(J, ne, me, q);
    kt.current !== Pe.isTouch && Ft(Pe.isTouch), !ae && q.cancelable && Ie && q.preventDefault();
    const [ge] = Pe.location, tt = gn(J, ge, ne, me);
    if (Pe.kind === Qn && tt !== void 0)
      Pe.button === 0 && ((ke = Xn.current) == null ? void 0 : ke[0]) === ge && ((rt = Xn.current) == null ? void 0 : rt[1]) === -1 && (v == null || v(ge, tt));
    else if (Pe.kind === nn) {
      const Fe = Vt(Pe.group, Pe.bounds, Pe.localEventX, Pe.localEventY);
      Fe !== void 0 && Pe.button === 0 && Fe.onClick(Pe);
    }
  }, [z, Ot, gn, v, Vt]);
  Ht("click", Hi, window, !1);
  const Fo = p.useCallback((q) => {
    const J = je.current, ue = z == null ? void 0 : z.current;
    if (J === null || q.target !== J && q.target !== ue || O === void 0)
      return;
    const ae = Ot(J, q.clientX, q.clientY, q);
    O(ae, () => {
      q.cancelable && q.preventDefault();
    });
  }, [z, Ot, O]);
  Ht("contextmenu", Fo, (z == null ? void 0 : z.current) ?? null, !1);
  const zi = p.useCallback((q) => {
    Ct.current = new Ci(q.map((J) => J.item)), Gt.current = q, rr.current(), Ct.current = void 0;
  }, []), pn = p.useMemo(() => new ub(zi), [zi]), Hn = p.useRef(pn);
  Hn.current = pn, p.useLayoutEffect(() => {
    const q = Hn.current;
    if (yt === void 0 || yt[1] < 0) {
      q.setHovered(yt);
      return;
    }
    const J = g(yt, !0), ue = We(J), ae = ue === void 0 && J.kind === he.Custom || (ue == null ? void 0 : ue.needsHover) !== void 0 && (typeof ue.needsHover == "boolean" ? ue.needsHover : ue.needsHover(J));
    q.setHovered(ae ? yt : void 0);
  }, [g, We, yt]);
  const Zt = p.useRef(), j = p.useCallback((q) => {
    var Pe;
    const J = je.current;
    if (J === null)
      return;
    const ue = z == null ? void 0 : z.current, ae = q.target !== J && q.target !== ue, ne = Ot(J, q.clientX, q.clientY, q);
    if (ne.kind !== "out-of-bounds" && ae && !Xr.current && !ne.isTouch)
      return;
    const me = (ge, tt) => {
      Wt((ke) => ke === ge || (ke == null ? void 0 : ke[0][0]) === (ge == null ? void 0 : ge[0][0]) && (ke == null ? void 0 : ke[0][1]) === (ge == null ? void 0 : ge[0][1]) && ((ke == null ? void 0 : ke[1][0]) === (ge == null ? void 0 : ge[1][0]) && (ke == null ? void 0 : ke[1][1]) === (ge == null ? void 0 : ge[1][1]) || !tt) ? ke : ge);
    };
    if (!xp(ne, Zt.current))
      Qe(void 0), N == null || N(ne), me(ne.kind === wo ? void 0 : [ne.location, [ne.localEventX, ne.localEventY]], !0), Zt.current = ne;
    else if (ne.kind === "cell" || ne.kind === Qn || ne.kind === nn) {
      let ge = !1, tt = !0;
      if (ne.kind === "cell") {
        const rt = g(ne.location);
        tt = ((Pe = We(rt)) == null ? void 0 : Pe.needsHoverPosition) ?? rt.kind === he.Custom, ge = tt;
      } else ne.kind === nn && (ge = !0);
      const ke = [ne.location, [ne.localEventX, ne.localEventY]];
      me(ke, tt), Wn.current = ke, ge && jn(new Ci([ne.location]));
    }
    const Ie = ne.location[0] >= (Y ? 0 : 1);
    Dn(ne.kind === Qn && ne.isEdge && Ie && we === !0), Oo(ne.kind === "cell" && ne.isFillHandle), T == null || T(q), C(ne);
  }, [
    z,
    Ot,
    Y,
    we,
    T,
    C,
    N,
    g,
    We,
    jn
  ]);
  Ht("mousemove", j, window, !0);
  const bt = p.useCallback((q) => {
    const J = je.current;
    if (J === null)
      return;
    let ue, ae;
    b.current !== void 0 && (ue = pt(J, b.current.cell[0], b.current.cell[1]), ae = b.current.cell), se == null || se({
      bounds: ue,
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
      location: ae
    });
  }, [se, b, pt]), ir = p.useCallback((q) => {
    const J = je.current;
    if (J === null)
      return;
    let ue, ae;
    b.current !== void 0 && (ue = pt(J, b.current.cell[0], b.current.cell[1]), ae = b.current.cell), te == null || te({
      bounds: ue,
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
      location: ae
    });
  }, [te, b, pt]), qo = p.useCallback((q) => {
    je.current = q, $ !== void 0 && ($.current = q);
  }, [$]), $i = p.useCallback((q) => {
    const J = je.current;
    if (J === null || pe === !1 || le) {
      q.preventDefault();
      return;
    }
    let ue, ae;
    const ne = Ot(J, q.clientX, q.clientY);
    if (pe !== !0 && ne.kind !== pe) {
      q.preventDefault();
      return;
    }
    const me = (rt, Fe) => {
      ue = rt, ae = Fe;
    };
    let Ie, Pe, ge;
    const tt = (rt, Fe, Xe) => {
      Ie = rt, Pe = Fe, ge = Xe;
    };
    let ke = !1;
    if (Q == null || Q({
      ...ne,
      setData: me,
      setDragImage: tt,
      preventDefault: () => ke = !0,
      defaultPrevented: () => ke
    }), !ke && ue !== void 0 && ae !== void 0 && q.dataTransfer !== null)
      if (q.dataTransfer.setData(ue, ae), q.dataTransfer.effectAllowed = "copyLink", Ie !== void 0 && Pe !== void 0 && ge !== void 0)
        q.dataTransfer.setDragImage(Ie, Pe, ge);
      else {
        const [rt, Fe] = ne.location;
        if (Fe !== void 0) {
          const Xe = document.createElement("canvas"), Rt = pt(J, rt, Fe);
          rn(Rt !== void 0);
          const ze = Math.ceil(window.devicePixelRatio ?? 1);
          Xe.width = Rt.width * ze, Xe.height = Rt.height * ze;
          const xt = Xe.getContext("2d");
          xt !== null && (xt.scale(ze, ze), xt.textBaseline = "middle", Fe === -1 ? (xt.font = Ee.headerFontFull, xt.fillStyle = Ee.bgHeader, xt.fillRect(0, 0, Xe.width, Xe.height), gp(xt, 0, 0, Rt.width, Rt.height, ut[rt], !1, Ee, !1, !1, 0, Dt, Oe, !1)) : (xt.font = Ee.baseFontFull, xt.fillStyle = Ee.bgCell, xt.fillRect(0, 0, Xe.width, Xe.height), fp(xt, g([rt, Fe]), 0, Fe, !1, !1, 0, 0, Rt.width, Rt.height, !1, Ee, Ee.bgCell, Ze, Dt, 1, void 0, !1, 0, void 0, void 0, void 0, vr, We, () => {
          }))), Xe.style.left = "-100%", Xe.style.position = "absolute", Xe.style.width = `${Rt.width}px`, Xe.style.height = `${Rt.height}px`, document.body.append(Xe), q.dataTransfer.setDragImage(Xe, Rt.width / 2, Rt.height / 2), window.setTimeout(() => {
            Xe.remove();
          }, 0);
        }
      }
    else
      q.preventDefault();
  }, [
    pe,
    le,
    Ot,
    Q,
    pt,
    Ee,
    ut,
    Dt,
    Oe,
    g,
    Ze,
    vr,
    We
  ]);
  Ht("dragstart", $i, (z == null ? void 0 : z.current) ?? null, !1, !1);
  const Kr = p.useRef(), Ho = p.useCallback((q) => {
    const J = je.current;
    if (Me !== void 0 && q.preventDefault(), J === null || qe === void 0)
      return;
    const ue = Ot(J, q.clientX, q.clientY), [ae, ne] = ue.location, me = ae - (Y ? 0 : 1), [Ie, Pe] = Kr.current ?? [];
    (Ie !== me || Pe !== ne) && (Kr.current = [me, ne], qe([me, ne], q.dataTransfer));
  }, [Y, Ot, qe, Me]);
  Ht("dragover", Ho, (z == null ? void 0 : z.current) ?? null, !1, !1);
  const Kc = p.useCallback(() => {
    Kr.current = void 0, ie == null || ie();
  }, [ie]);
  Ht("dragend", Kc, (z == null ? void 0 : z.current) ?? null, !1, !1);
  const X = p.useCallback((q) => {
    const J = je.current;
    if (J === null || Me === void 0)
      return;
    q.preventDefault();
    const ue = Ot(J, q.clientX, q.clientY), [ae, ne] = ue.location, me = ae - (Y ? 0 : 1);
    Me([me, ne], q.dataTransfer);
  }, [Y, Ot, Me]);
  Ht("drop", X, (z == null ? void 0 : z.current) ?? null, !1, !1);
  const zt = p.useCallback(() => {
    nt == null || nt();
  }, [nt]);
  Ht("dragleave", zt, (z == null ? void 0 : z.current) ?? null, !1, !1);
  const At = p.useRef(b);
  At.current = b;
  const Rr = p.useRef(null), Gr = p.useCallback((q) => {
    var J;
    je.current === null || !je.current.contains(document.activeElement) || (q === null && At.current.current !== void 0 ? (J = $ == null ? void 0 : $.current) == null || J.focus({
      preventScroll: !0
    }) : q !== null && q.focus({
      preventScroll: !0
    }), Rr.current = q);
  }, [$]);
  p.useImperativeHandle(t, () => ({
    focus: () => {
      var J;
      const q = Rr.current;
      q === null || !document.contains(q) ? (J = $ == null ? void 0 : $.current) == null || J.focus({
        preventScroll: !0
      }) : q.focus({
        preventScroll: !0
      });
    },
    getBounds: (q, J) => {
      if (!($ === void 0 || $.current === null))
        return pt($.current, q ?? 0, J ?? -1);
    },
    damage: Li
  }), [$, Li, pt]);
  const Yn = p.useRef(), Yt = wm(() => {
    var Pe, ge, tt;
    if (n < 50 || (He == null ? void 0 : He.disableAccessibilityTree) === !0)
      return null;
    let q = gc(ut, Ve, n, H, De);
    const J = Y ? 0 : -1;
    !Y && ((Pe = q[0]) == null ? void 0 : Pe.sourceIndex) === 0 && (q = q.slice(1));
    const [ue, ae] = ((ge = b.current) == null ? void 0 : ge.cell) ?? [], ne = (tt = b.current) == null ? void 0 : tt.range, me = q.map((ke) => ke.sourceIndex), Ie = ur(a, Math.min(f, a + i));
    return ue !== void 0 && ae !== void 0 && !(me.includes(ue) && Ie.includes(ae)) && Gr(null), p.createElement(
      "table",
      { key: "access-tree", role: "grid", "aria-rowcount": f + 1, "aria-multiselectable": "true", "aria-colcount": ut.length + J },
      p.createElement(
        "thead",
        { role: "rowgroup" },
        p.createElement("tr", { role: "row", "aria-rowindex": 1 }, q.map((ke) => p.createElement("th", { role: "columnheader", "aria-selected": b.columns.hasIndex(ke.sourceIndex), "aria-colindex": ke.sourceIndex + 1 + J, tabIndex: -1, onFocus: (rt) => {
          if (rt.target !== Rr.current)
            return Le == null ? void 0 : Le([ke.sourceIndex, -1]);
        }, key: ke.sourceIndex }, ke.title)))
      ),
      p.createElement("tbody", { role: "rowgroup" }, Ie.map((ke) => p.createElement("tr", { role: "row", "aria-selected": b.rows.hasIndex(ke), key: ke, "aria-rowindex": ke + 2 }, q.map((rt) => {
        const Fe = rt.sourceIndex, Xe = kn(Fe, ke), Rt = ue === Fe && ae === ke, ze = ne !== void 0 && Fe >= ne.x && Fe < ne.x + ne.width && ke >= ne.y && ke < ne.y + ne.height, xt = `glide-cell-${Fe}-${ke}`, cn = [Fe, ke], wt = g(cn, !0);
        return p.createElement("td", { key: Xe, role: "gridcell", "aria-colindex": Fe + 1 + J, "aria-selected": ze, "aria-readonly": zr(wt) || !gi(wt), id: xt, "data-testid": xt, onClick: () => {
          const Qt = $ == null ? void 0 : $.current;
          if (Qt != null)
            return se == null ? void 0 : se({
              bounds: pt(Qt, Fe, ke),
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
        }, onFocusCapture: (Qt) => {
          var et, _t;
          if (!(Qt.target === Rr.current || ((et = Yn.current) == null ? void 0 : et[0]) === Fe && ((_t = Yn.current) == null ? void 0 : _t[1]) === ke))
            return Yn.current = cn, Le == null ? void 0 : Le(cn);
        }, ref: Rt ? Gr : void 0, tabIndex: -1 }, gb(wt, We));
      }))))
    );
  }, [
    n,
    ut,
    Ve,
    H,
    De,
    f,
    a,
    i,
    b,
    Gr,
    g,
    $,
    se,
    pt,
    Le
  ], 200), mn = M === 0 || !_ ? 0 : Ve > M ? 1 : Cn(-De / 100, 0, 1), zo = -a * 32 + Mt, _r = F ? Cn(-zo / 100, 0, 1) : 0, $o = p.useMemo(() => {
    if (!mn && !_r)
      return null;
    const q = {
      position: "absolute",
      top: 0,
      left: qt,
      width: n - qt,
      height: r,
      opacity: mn,
      pointerEvents: "none",
      transition: Ge ? void 0 : "opacity 0.2s",
      boxShadow: "inset 13px 0 10px -13px rgba(0, 0, 0, 0.2)"
    }, J = {
      position: "absolute",
      top: hn,
      left: 0,
      width: n,
      height: r,
      opacity: _r,
      pointerEvents: "none",
      transition: ce ? void 0 : "opacity 0.2s",
      boxShadow: "inset 0 13px 10px -13px rgba(0, 0, 0, 0.2)"
    };
    return p.createElement(
      p.Fragment,
      null,
      mn > 0 && p.createElement("div", { id: "shadow-x", style: q }),
      _r > 0 && p.createElement("div", { id: "shadow-y", style: J })
    );
  }, [mn, _r, qt, n, Ge, hn, r, ce]), No = p.useMemo(() => ({
    position: "absolute",
    top: 0,
    left: 0
  }), []);
  return p.createElement(
    p.Fragment,
    null,
    p.createElement("canvas", { "data-testid": "data-grid-canvas", tabIndex: 0, onKeyDown: bt, onKeyUp: ir, onFocus: y, onBlur: S, ref: qo, style: kr }, Yt),
    p.createElement("canvas", { ref: gt, style: No }),
    $o
  );
}, mb = p.memo(p.forwardRef(pb));
function hi(e, t, n, r) {
  return Cn(Math.round(t - (e.growOffset ?? 0)), Math.ceil(n), Math.floor(r));
}
const vb = (e) => {
  const [t, n] = p.useState(), [r, i] = p.useState(), [o, s] = p.useState(), [a, l] = p.useState(), [c, u] = p.useState(!1), [h, f] = p.useState(), [g, d] = p.useState(), [v, k] = p.useState(), [I, y] = p.useState(!1), [S, P] = p.useState(), { onHeaderMenuClick: b, getCellContent: M, onColumnMoved: O, onColumnResize: E, onColumnResizeStart: _, onColumnResizeEnd: F, gridRef: R, maxColumnWidth: w, minColumnWidth: x, onRowMoved: T, lockColumns: C, onColumnProposeMove: N, onMouseDown: H, onMouseUp: Y, onItemHovered: se, onDragStart: te, canvasRef: A } = e, $ = (E ?? F ?? _) !== void 0, { columns: Q, selection: ie } = e, z = ie.columns, le = p.useCallback((Se) => {
    const [ve, Oe] = Se.location;
    o !== void 0 && a !== ve && ve >= C ? (u(!0), l(ve)) : g !== void 0 && Oe !== void 0 ? (y(!0), k(Math.max(0, Oe))) : r === void 0 && !c && !I && (se == null || se(Se));
  }, [o, g, a, se, C, r, c, I]), oe = O !== void 0, re = p.useCallback((Se) => {
    var ve;
    if (Se.button === 0) {
      const [Oe, Le] = Se.location;
      if (Se.kind === "out-of-bounds" && Se.isEdge && $) {
        const qe = (ve = R == null ? void 0 : R.current) == null ? void 0 : ve.getBounds(Q.length - 1, -1);
        qe !== void 0 && (n(qe.x), i(Q.length - 1));
      } else if (Se.kind === "header" && Oe >= C) {
        const qe = A == null ? void 0 : A.current;
        if (Se.isEdge && $ && qe) {
          n(Se.bounds.x), i(Oe);
          const nt = qe.getBoundingClientRect().width / qe.offsetWidth, Ke = Se.bounds.width / nt;
          _ == null || _(Q[Oe], Ke, Oe, Ke + (Q[Oe].growOffset ?? 0));
        } else Se.kind === "header" && oe && (f(Se.bounds.x), s(Oe));
      } else Se.kind === "cell" && C > 0 && Oe === 0 && Le !== void 0 && T !== void 0 && (P(Se.bounds.y), d(Le));
    }
    H == null || H(Se);
  }, [H, $, C, T, R, Q, oe, _, A]), pe = p.useCallback((Se, ve) => {
    c || I || b == null || b(Se, ve);
  }, [c, I, b]), we = p.useRef(-1), Ce = p.useCallback(() => {
    we.current = -1, d(void 0), k(void 0), P(void 0), y(!1), s(void 0), l(void 0), f(void 0), u(!1), i(void 0), n(void 0);
  }, []), Be = p.useCallback((Se, ve) => {
    if (Se.button === 0) {
      if (r !== void 0) {
        if ((z == null ? void 0 : z.hasIndex(r)) === !0)
          for (const Le of z) {
            if (Le === r)
              continue;
            const qe = Q[Le], Me = hi(qe, we.current, x, w);
            E == null || E(qe, Me, Le, Me + (qe.growOffset ?? 0));
          }
        const Oe = hi(Q[r], we.current, x, w);
        if (F == null || F(Q[r], Oe, r, Oe + (Q[r].growOffset ?? 0)), z.hasIndex(r))
          for (const Le of z) {
            if (Le === r)
              continue;
            const qe = Q[Le], Me = hi(qe, we.current, x, w);
            F == null || F(qe, Me, Le, Me + (qe.growOffset ?? 0));
          }
      }
      Ce(), o !== void 0 && a !== void 0 && (O == null || O(o, a)), g !== void 0 && v !== void 0 && (T == null || T(g, v));
    }
    Y == null || Y(Se, ve);
  }, [
    Y,
    r,
    o,
    a,
    g,
    v,
    z,
    F,
    Q,
    x,
    w,
    E,
    O,
    T,
    Ce
  ]), V = p.useMemo(() => {
    if (!(o === void 0 || a === void 0) && o !== a && (N == null ? void 0 : N(o, a)) !== !1)
      return {
        src: o,
        dest: a
      };
  }, [o, a, N]), Ee = p.useCallback((Se) => {
    const ve = A == null ? void 0 : A.current;
    if (o !== void 0 && h !== void 0)
      Math.abs(Se.clientX - h) > 20 && u(!0);
    else if (g !== void 0 && S !== void 0)
      Math.abs(Se.clientY - S) > 20 && y(!0);
    else if (r !== void 0 && t !== void 0 && ve) {
      const Le = ve.getBoundingClientRect().width / ve.offsetWidth, qe = (Se.clientX - t) / Le, Me = Q[r], nt = hi(Me, qe, x, w);
      if (E == null || E(Me, nt, r, nt + (Me.growOffset ?? 0)), we.current = qe, (z == null ? void 0 : z.first()) === r)
        for (const Ke of z) {
          if (Ke === r)
            continue;
          const Ge = Q[Ke], ce = hi(Ge, we.current, x, w);
          E == null || E(Ge, ce, Ke, ce + (Ge.growOffset ?? 0));
        }
    }
  }, [
    o,
    h,
    g,
    S,
    r,
    t,
    Q,
    x,
    w,
    E,
    z,
    A
  ]), Ae = p.useCallback((Se, ve) => {
    if (g === void 0 || v === void 0)
      return M(Se, ve);
    let [Oe, Le] = Se;
    return Le === v ? Le = g : (Le > v && (Le -= 1), Le >= g && (Le += 1)), M([Oe, Le], ve);
  }, [g, v, M]), ft = p.useCallback((Se) => {
    te == null || te(Se), Se.defaultPrevented() || Ce();
  }, [Ce, te]);
  return p.createElement(mb, { accessibilityHeight: e.accessibilityHeight, canvasRef: e.canvasRef, cellXOffset: e.cellXOffset, cellYOffset: e.cellYOffset, columns: e.columns, disabledRows: e.disabledRows, drawFocusRing: e.drawFocusRing, drawHeader: e.drawHeader, drawCell: e.drawCell, enableGroups: e.enableGroups, eventTargetRef: e.eventTargetRef, experimental: e.experimental, fillHandle: e.fillHandle, firstColAccessible: e.firstColAccessible, fixedShadowX: e.fixedShadowX, fixedShadowY: e.fixedShadowY, freezeColumns: e.freezeColumns, getCellRenderer: e.getCellRenderer, getGroupDetails: e.getGroupDetails, getRowThemeOverride: e.getRowThemeOverride, groupHeaderHeight: e.groupHeaderHeight, headerHeight: e.headerHeight, headerIcons: e.headerIcons, height: e.height, highlightRegions: e.highlightRegions, imageWindowLoader: e.imageWindowLoader, resizeColumn: r, isDraggable: e.isDraggable, isFilling: e.isFilling, isFocused: e.isFocused, onCanvasBlur: e.onCanvasBlur, onCanvasFocused: e.onCanvasFocused, onCellFocused: e.onCellFocused, onContextMenu: e.onContextMenu, onDragEnd: e.onDragEnd, onDragLeave: e.onDragLeave, onDragOverCell: e.onDragOverCell, onDrop: e.onDrop, onKeyDown: e.onKeyDown, onKeyUp: e.onKeyUp, onMouseMove: e.onMouseMove, prelightCells: e.prelightCells, rowHeight: e.rowHeight, rows: e.rows, selection: e.selection, smoothScrollX: e.smoothScrollX, smoothScrollY: e.smoothScrollY, theme: e.theme, freezeTrailingRows: e.freezeTrailingRows, hasAppendRow: e.hasAppendRow, translateX: e.translateX, translateY: e.translateY, verticalBorder: e.verticalBorder, width: e.width, getCellContent: Ae, isResizing: r !== void 0, onHeaderMenuClick: pe, isDragging: c, onItemHovered: le, onDragStart: ft, onMouseDown: re, allowResize: $, onMouseUp: Be, dragAndDropState: V, onMouseMoveRaw: Ee, ref: R });
};
function yb(e) {
  const t = Fr(null), [n, r] = r0({
    width: e == null ? void 0 : e[0],
    height: e == null ? void 0 : e[1]
  });
  return i0(() => {
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
const bb = (e, t, n) => {
  const r = Fr(null), i = Fr(null), o = Fr(null), s = Fr(0), a = Fr(t);
  a.current = t;
  const l = n.current;
  o0(() => {
    const c = () => {
      var f, g;
      if (i.current === !1 && l !== null) {
        const d = [l.scrollLeft, l.scrollTop];
        if (((f = o.current) == null ? void 0 : f[0]) === d[0] && ((g = o.current) == null ? void 0 : g[1]) === d[1])
          if (s.current > 10) {
            o.current = null, i.current = null;
            return;
          } else
            s.current++;
        else
          s.current = 0, a.current(d[0], d[1]), o.current = d;
        r.current = window.setTimeout(c, 8.333333333333334);
      }
    }, u = () => {
      i.current = !0, o.current = null, r.current !== null && (window.clearTimeout(r.current), r.current = null);
    }, h = (f) => {
      f.touches.length === 0 && (i.current = !1, s.current = 0, r.current = window.setTimeout(c, 8.333333333333334));
    };
    if (e && l !== null) {
      const f = l;
      return f.addEventListener("touchstart", u), f.addEventListener("touchend", h), () => {
        f.removeEventListener("touchstart", u), f.removeEventListener("touchend", h), r.current !== null && window.clearTimeout(r.current);
      };
    }
  }, [e, l]);
}, wb = () => (e) => e.isSafari ? "scroll" : "auto", Sb = /* @__PURE__ */ an("div")({
  name: "ScrollRegionStyle",
  class: "gdg-s1dgczr6",
  propsAsIs: !1,
  vars: {
    "s1dgczr6-0": [wb()]
  }
});
function Cb(e) {
  const [t, n] = p.useState(!1), r = typeof window > "u" ? null : window, i = p.useRef(0);
  return Ht("touchstart", p.useCallback(() => {
    window.clearTimeout(i.current), n(!0);
  }, []), r, !0, !1), Ht("touchend", p.useCallback((o) => {
    o.touches.length === 0 && (i.current = window.setTimeout(() => n(!1), e));
  }, [e]), r, !0, !1), t;
}
const kb = (e) => {
  var Q, ie;
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
    rightElementProps: f,
    kineticScrollPerfHack: g = !1,
    scrollRef: d,
    initialSize: v
  } = e, k = [], I = (f == null ? void 0 : f.sticky) ?? !1, y = (f == null ? void 0 : f.fill) ?? !1, S = p.useRef(0), P = p.useRef(0), b = p.useRef(null), M = typeof window > "u" ? 1 : window.devicePixelRatio, O = p.useRef({
    scrollLeft: 0,
    scrollTop: 0,
    lockDirection: void 0
  }), E = p.useRef(null), _ = Cb(200), [F, R] = p.useState(!0), w = p.useRef(0);
  p.useLayoutEffect(() => {
    if (!F || _ || O.current.lockDirection === void 0) return;
    const z = b.current;
    if (z === null) return;
    const [le, oe] = O.current.lockDirection;
    le !== void 0 ? z.scrollLeft = le : oe !== void 0 && (z.scrollTop = oe), O.current.lockDirection = void 0;
  }, [_, F]);
  const x = p.useCallback((z, le) => {
    var ve;
    const oe = b.current;
    if (oe === null) return;
    le = le ?? oe.scrollTop, z = z ?? oe.scrollLeft;
    const re = O.current.scrollTop, pe = O.current.scrollLeft, we = z - pe, Ce = le - re;
    _ && we !== 0 && Ce !== 0 && (Math.abs(we) > 3 || Math.abs(Ce) > 3) && l && O.current.lockDirection === void 0 && (O.current.lockDirection = Math.abs(we) < Math.abs(Ce) ? [pe, void 0] : [void 0, re]);
    const Be = O.current.lockDirection;
    z = (Be == null ? void 0 : Be[0]) ?? z, le = (Be == null ? void 0 : Be[1]) ?? le, O.current.scrollLeft = z, O.current.scrollTop = le;
    const V = oe.clientWidth, Ee = oe.clientHeight, Ae = le, ft = P.current - Ae, Se = oe.scrollHeight - Ee;
    if (P.current = Ae, Se > 0 && (Math.abs(ft) > 2e3 || Ae === 0 || Ae === Se) && r > oe.scrollHeight + 5) {
      const Oe = Ae / Se, Le = (r - Ee) * Oe;
      S.current = Le - Ae;
    }
    Be !== void 0 && (window.clearTimeout(w.current), R(!1), w.current = window.setTimeout(() => R(!0), 200)), o({
      x: z,
      y: Ae + S.current,
      width: V - u,
      height: Ee - c,
      paddingRight: ((ve = E.current) == null ? void 0 : ve.clientWidth) ?? 0
    });
  }, [c, u, r, o, l, _]);
  bb(g && yo.value, x, b);
  const T = p.useRef(x);
  T.current = x;
  const C = p.useRef(), N = p.useRef(!1);
  p.useLayoutEffect(() => {
    N.current ? x() : N.current = !0;
  }, [x, c, u]);
  const H = p.useCallback((z) => {
    b.current = z, d !== void 0 && (d.current = z);
  }, [d]);
  let Y = 0, se = 0;
  for (k.push(p.createElement("div", {
    key: Y++,
    style: {
      width: i,
      height: 0
    }
  })); se < r; ) {
    const z = Math.min(5e6, r - se);
    k.push(p.createElement("div", {
      key: Y++,
      style: {
        width: 0,
        height: z
      }
    })), se += z;
  }
  const {
    ref: te,
    width: A,
    height: $
  } = yb(v);
  return typeof window < "u" && (((Q = C.current) == null ? void 0 : Q.height) !== $ || ((ie = C.current) == null ? void 0 : ie.width) !== A) && (window.setTimeout(() => T.current(), 0), C.current = {
    width: A,
    height: $
  }), (A ?? 0) === 0 || ($ ?? 0) === 0 ? p.createElement("div", {
    ref: te
  }) : p.createElement("div", {
    ref: te
  }, p.createElement(Sb, {
    isSafari: yo.value
  }, p.createElement("div", {
    className: "dvn-underlay"
  }, t), p.createElement("div", {
    ref: H,
    style: C.current,
    draggable: s,
    onDragStart: (z) => {
      s || (z.stopPropagation(), z.preventDefault());
    },
    className: "dvn-scroller " + (a ?? ""),
    onScroll: () => x()
  }, p.createElement("div", {
    className: "dvn-scroll-inner" + (h === void 0 ? " dvn-hidden" : "")
  }, p.createElement("div", {
    className: "dvn-stack"
  }, k), h !== void 0 && p.createElement(p.Fragment, null, !y && p.createElement("div", {
    className: "dvn-spacer"
  }), p.createElement("div", {
    ref: E,
    style: {
      height: $,
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
}, xb = (e) => {
  const { columns: t, rows: n, rowHeight: r, headerHeight: i, groupHeaderHeight: o, enableGroups: s, freezeColumns: a, experimental: l, nonGrowWidth: c, clientSize: u, className: h, onVisibleRegionChanged: f, scrollRef: g, preventDiagonalScrolling: d, rightElement: v, rightElementProps: k, overscrollX: I, overscrollY: y, initialSize: S, smoothScrollX: P = !1, smoothScrollY: b = !1, isDraggable: M } = e, { paddingRight: O, paddingBottom: E } = l ?? {}, [_, F] = u, R = p.useRef(), w = p.useRef(), x = p.useRef(), T = p.useRef(), C = c + Math.max(0, I ?? 0);
  let N = s ? i + o : i;
  if (typeof r == "number")
    N += n * r;
  else
    for (let te = 0; te < n; te++)
      N += r(te);
  y !== void 0 && (N += y);
  const H = p.useRef(), Y = p.useCallback(() => {
    var Ce, Be;
    if (H.current === void 0)
      return;
    const te = { ...H.current };
    let A = 0, $ = te.x < 0 ? -te.x : 0, Q = 0, ie = 0;
    te.x = te.x < 0 ? 0 : te.x;
    let z = 0;
    for (let V = 0; V < a; V++)
      z += t[V].width;
    for (const V of t) {
      const Ee = A - z;
      if (te.x >= Ee + V.width)
        A += V.width, ie++, Q++;
      else if (te.x > Ee)
        A += V.width, P ? $ += Ee - te.x : ie++, Q++;
      else if (te.x + te.width > Ee)
        A += V.width, Q++;
      else
        break;
    }
    let le = 0, oe = 0, re = 0;
    if (typeof r == "number")
      b ? (oe = Math.floor(te.y / r), le = oe * r - te.y) : oe = Math.ceil(te.y / r), re = Math.ceil(te.height / r) + oe, le < 0 && re++;
    else {
      let V = 0;
      for (let Ee = 0; Ee < n; Ee++) {
        const Ae = r(Ee), ft = V + (b ? 0 : Ae / 2);
        if (te.y >= V + Ae)
          V += Ae, oe++, re++;
        else if (te.y > ft)
          V += Ae, b ? le += ft - te.y : oe++, re++;
        else if (te.y + te.height > Ae / 2 + V)
          V += Ae, re++;
        else
          break;
      }
    }
    const pe = {
      x: ie,
      y: oe,
      width: Q - ie,
      height: re - oe
    }, we = R.current;
    (we === void 0 || we.y !== pe.y || we.x !== pe.x || we.height !== pe.height || we.width !== pe.width || w.current !== $ || x.current !== le || te.width !== ((Ce = T.current) == null ? void 0 : Ce[0]) || te.height !== ((Be = T.current) == null ? void 0 : Be[1])) && (f == null || f({
      x: ie,
      y: oe,
      width: Q - ie,
      height: re - oe
    }, te.width, te.height, te.paddingRight ?? 0, $, le), R.current = pe, w.current = $, x.current = le, T.current = [te.width, te.height]);
  }, [t, r, n, f, a, P, b]), se = p.useCallback((te) => {
    H.current = te, Y();
  }, [Y]);
  return p.useEffect(() => {
    Y();
  }, [Y]), p.createElement(
    kb,
    { scrollRef: g, className: h, kineticScrollPerfHack: l == null ? void 0 : l.kineticScrollPerfHack, preventDiagonalScrolling: d, draggable: M === !0 || typeof M == "string", scrollWidth: C + (O ?? 0), scrollHeight: N + (E ?? 0), clientHeight: F, rightElement: v, paddingBottom: E, paddingRight: O, rightElementProps: k, update: se, initialSize: S },
    p.createElement(vb, { eventTargetRef: g, width: _, height: F, accessibilityHeight: e.accessibilityHeight, canvasRef: e.canvasRef, cellXOffset: e.cellXOffset, cellYOffset: e.cellYOffset, columns: e.columns, disabledRows: e.disabledRows, enableGroups: e.enableGroups, fillHandle: e.fillHandle, firstColAccessible: e.firstColAccessible, fixedShadowX: e.fixedShadowX, fixedShadowY: e.fixedShadowY, freezeColumns: e.freezeColumns, getCellContent: e.getCellContent, getCellRenderer: e.getCellRenderer, getGroupDetails: e.getGroupDetails, getRowThemeOverride: e.getRowThemeOverride, groupHeaderHeight: e.groupHeaderHeight, headerHeight: e.headerHeight, highlightRegions: e.highlightRegions, imageWindowLoader: e.imageWindowLoader, isFilling: e.isFilling, isFocused: e.isFocused, lockColumns: e.lockColumns, maxColumnWidth: e.maxColumnWidth, minColumnWidth: e.minColumnWidth, onHeaderMenuClick: e.onHeaderMenuClick, onMouseMove: e.onMouseMove, prelightCells: e.prelightCells, rowHeight: e.rowHeight, rows: e.rows, selection: e.selection, theme: e.theme, freezeTrailingRows: e.freezeTrailingRows, hasAppendRow: e.hasAppendRow, translateX: e.translateX, translateY: e.translateY, onColumnProposeMove: e.onColumnProposeMove, verticalBorder: e.verticalBorder, drawFocusRing: e.drawFocusRing, drawHeader: e.drawHeader, drawCell: e.drawCell, experimental: e.experimental, gridRef: e.gridRef, headerIcons: e.headerIcons, isDraggable: e.isDraggable, onCanvasBlur: e.onCanvasBlur, onCanvasFocused: e.onCanvasFocused, onCellFocused: e.onCellFocused, onColumnMoved: e.onColumnMoved, onColumnResize: e.onColumnResize, onColumnResizeEnd: e.onColumnResizeEnd, onColumnResizeStart: e.onColumnResizeStart, onContextMenu: e.onContextMenu, onDragEnd: e.onDragEnd, onDragLeave: e.onDragLeave, onDragOverCell: e.onDragOverCell, onDragStart: e.onDragStart, onDrop: e.onDrop, onItemHovered: e.onItemHovered, onKeyDown: e.onKeyDown, onKeyUp: e.onKeyUp, onMouseDown: e.onMouseDown, onMouseUp: e.onMouseUp, onRowMoved: e.onRowMoved, smoothScrollX: e.smoothScrollX, smoothScrollY: e.smoothScrollY })
  );
}, Rb = /* @__PURE__ */ an("div")({
  name: "SearchWrapper",
  class: "gdg-seveqep",
  propsAsIs: !1
}), _b = p.createElement(
  "svg",
  { className: "button-icon", viewBox: "0 0 512 512" },
  p.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "48", d: "M112 244l144-144 144 144M256 120v292" })
), Tb = p.createElement(
  "svg",
  { className: "button-icon", viewBox: "0 0 512 512" },
  p.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "48", d: "M112 268l144 144 144-144M256 392V100" })
), Eb = p.createElement(
  "svg",
  { className: "button-icon", viewBox: "0 0 512 512" },
  p.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M368 368L144 144M368 144L144 368" })
), Mb = 10, Ib = (e) => {
  const { canvasRef: t, cellYOffset: n, rows: r, columns: i, searchInputRef: o, searchValue: s, searchResults: a, onSearchValueChange: l, getCellsForSelection: c, onSearchResultsChanged: u, showSearch: h = !1, onSearchClose: f } = e, [g] = p.useState(() => "search-box-" + Math.round(Math.random() * 1e3)), [d, v] = p.useState(""), k = s ?? d, I = p.useCallback((A) => {
    v(A), l == null || l(A);
  }, [l]), [y, S] = p.useState(), P = p.useRef(y);
  P.current = y, p.useEffect(() => {
    a !== void 0 && (a.length > 0 ? S((A) => ({
      rowsSearched: r,
      results: a.length,
      selectedIndex: (A == null ? void 0 : A.selectedIndex) ?? -1
    })) : S(void 0));
  }, [r, a]);
  const b = p.useRef();
  b.current === void 0 && (b.current = new AbortController());
  const M = p.useRef(), [O, E] = p.useState([]), _ = a ?? O, F = p.useCallback(() => {
    M.current !== void 0 && (window.cancelAnimationFrame(M.current), M.current = void 0, b.current.abort());
  }, []), R = p.useRef(n);
  R.current = n;
  const w = p.useCallback((A) => {
    const $ = new RegExp(A.replace(/([$()*+.?[\\\]^{|}-])/g, "\\$1"), "i");
    let Q = R.current, ie = Math.min(10, r), z = 0;
    S(void 0), E([]);
    const le = [], oe = async () => {
      var Se;
      if (c === void 0)
        return;
      const re = performance.now(), pe = r - z;
      let we = c({
        x: 0,
        y: Q,
        width: i.length,
        height: Math.min(ie, pe, r - Q)
      }, b.current.signal);
      typeof we == "function" && (we = await we());
      let Ce = !1;
      for (const [ve, Oe] of we.entries())
        for (const [Le, qe] of Oe.entries()) {
          let Me;
          switch (qe.kind) {
            case he.Text:
            case he.Number:
              Me = qe.displayData;
              break;
            case he.Uri:
            case he.Markdown:
              Me = qe.data;
              break;
            case he.Boolean:
              Me = typeof qe.data == "boolean" ? qe.data.toString() : void 0;
              break;
            case he.Image:
            case he.Bubble:
              Me = qe.data.join("🐳");
              break;
            case he.Custom:
              Me = qe.copyData;
              break;
          }
          Me !== void 0 && $.test(Me) && (le.push([Le, ve + Q]), Ce = !0);
        }
      const Be = performance.now();
      Ce && E([...le]), z += we.length, rn(z <= r);
      const V = ((Se = P.current) == null ? void 0 : Se.selectedIndex) ?? -1;
      S({
        results: le.length,
        rowsSearched: z,
        selectedIndex: V
      }), u == null || u(le, V), Q + ie >= r ? Q = 0 : Q += ie;
      const Ee = Be - re, Ae = Math.max(Ee, 1), ft = Mb / Ae;
      ie = Math.ceil(ie * ft), z < r && le.length < 1e3 && (M.current = window.requestAnimationFrame(oe));
    };
    F(), M.current = window.requestAnimationFrame(oe);
  }, [F, i.length, c, u, r]), x = p.useCallback(() => {
    var A;
    f == null || f(), S(void 0), E([]), u == null || u([], -1), F(), (A = t == null ? void 0 : t.current) == null || A.focus();
  }, [F, t, f, u]), T = p.useCallback((A) => {
    I(A.target.value), a === void 0 && (A.target.value === "" ? (S(void 0), E([]), F()) : w(A.target.value));
  }, [w, F, I, a]);
  p.useEffect(() => {
    h && o.current !== null && (I(""), o.current.focus({ preventScroll: !0 }));
  }, [h, o, I]);
  const C = p.useCallback((A) => {
    var Q;
    if ((Q = A == null ? void 0 : A.stopPropagation) == null || Q.call(A), y === void 0)
      return;
    const $ = (y.selectedIndex + 1) % y.results;
    S({
      ...y,
      selectedIndex: $
    }), u == null || u(_, $);
  }, [y, u, _]), N = p.useCallback((A) => {
    var Q;
    if ((Q = A == null ? void 0 : A.stopPropagation) == null || Q.call(A), y === void 0)
      return;
    let $ = (y.selectedIndex - 1) % y.results;
    $ < 0 && ($ += y.results), S({
      ...y,
      selectedIndex: $
    }), u == null || u(_, $);
  }, [u, _, y]), H = p.useCallback((A) => {
    (A.ctrlKey || A.metaKey) && A.nativeEvent.code === "KeyF" || A.key === "Escape" ? (x(), A.stopPropagation(), A.preventDefault()) : A.key === "Enter" && (A.shiftKey ? N() : C());
  }, [x, C, N]);
  p.useEffect(() => () => {
    F();
  }, [F]);
  const [Y, se] = p.useState(!1);
  p.useEffect(() => {
    if (h)
      se(!0);
    else {
      const A = setTimeout(() => se(!1), 150);
      return () => clearTimeout(A);
    }
  }, [h]);
  const te = p.useMemo(() => {
    if (!h && !Y)
      return null;
    let A;
    y !== void 0 && (A = y.results >= 1e3 ? "over 1000" : `${y.results} result${y.results !== 1 ? "s" : ""}`, y.selectedIndex >= 0 && (A = `${y.selectedIndex + 1} of ${A}`));
    const $ = (z) => {
      z.stopPropagation();
    }, ie = {
      width: `${Math.floor(((y == null ? void 0 : y.rowsSearched) ?? 0) / r * 100)}%`
    };
    return p.createElement(
      Rb,
      { className: h ? "" : "out", onMouseDown: $, onMouseMove: $, onMouseUp: $, onClick: $ },
      p.createElement(
        "div",
        { className: "gdg-search-bar-inner" },
        p.createElement("input", { id: g, "aria-hidden": !h, "data-testid": "search-input", ref: o, onChange: T, value: k, tabIndex: h ? void 0 : -1, onKeyDownCapture: H }),
        p.createElement("button", { "aria-label": "Previous Result", "aria-hidden": !h, tabIndex: h ? void 0 : -1, onClick: N, disabled: ((y == null ? void 0 : y.results) ?? 0) === 0 }, _b),
        p.createElement("button", { "aria-label": "Next Result", "aria-hidden": !h, tabIndex: h ? void 0 : -1, onClick: C, disabled: ((y == null ? void 0 : y.results) ?? 0) === 0 }, Tb),
        f !== void 0 && p.createElement("button", { "aria-label": "Close Search", "aria-hidden": !h, "data-testid": "search-close-button", tabIndex: h ? void 0 : -1, onClick: x }, Eb)
      ),
      y !== void 0 ? p.createElement(
        p.Fragment,
        null,
        p.createElement(
          "div",
          { className: "gdg-search-status" },
          p.createElement("div", { "data-testid": "search-result-area" }, A)
        ),
        p.createElement("div", { className: "gdg-search-progress", style: ie })
      ) : p.createElement(
        "div",
        { className: "gdg-search-status" },
        p.createElement("label", { htmlFor: g }, "Type to search")
      )
    );
  }, [
    h,
    Y,
    y,
    r,
    g,
    o,
    T,
    k,
    H,
    N,
    C,
    f,
    x
  ]);
  return p.createElement(
    p.Fragment,
    null,
    p.createElement(xb, { prelightCells: _, accessibilityHeight: e.accessibilityHeight, canvasRef: e.canvasRef, cellXOffset: e.cellXOffset, cellYOffset: e.cellYOffset, className: e.className, clientSize: e.clientSize, columns: e.columns, disabledRows: e.disabledRows, enableGroups: e.enableGroups, fillHandle: e.fillHandle, firstColAccessible: e.firstColAccessible, nonGrowWidth: e.nonGrowWidth, fixedShadowX: e.fixedShadowX, fixedShadowY: e.fixedShadowY, freezeColumns: e.freezeColumns, getCellContent: e.getCellContent, getCellRenderer: e.getCellRenderer, getGroupDetails: e.getGroupDetails, getRowThemeOverride: e.getRowThemeOverride, groupHeaderHeight: e.groupHeaderHeight, headerHeight: e.headerHeight, highlightRegions: e.highlightRegions, imageWindowLoader: e.imageWindowLoader, initialSize: e.initialSize, isFilling: e.isFilling, isFocused: e.isFocused, lockColumns: e.lockColumns, maxColumnWidth: e.maxColumnWidth, minColumnWidth: e.minColumnWidth, onHeaderMenuClick: e.onHeaderMenuClick, onMouseMove: e.onMouseMove, onVisibleRegionChanged: e.onVisibleRegionChanged, overscrollX: e.overscrollX, overscrollY: e.overscrollY, preventDiagonalScrolling: e.preventDiagonalScrolling, rightElement: e.rightElement, rightElementProps: e.rightElementProps, rowHeight: e.rowHeight, rows: e.rows, scrollRef: e.scrollRef, selection: e.selection, theme: e.theme, freezeTrailingRows: e.freezeTrailingRows, hasAppendRow: e.hasAppendRow, translateX: e.translateX, translateY: e.translateY, verticalBorder: e.verticalBorder, onColumnProposeMove: e.onColumnProposeMove, drawFocusRing: e.drawFocusRing, drawCell: e.drawCell, drawHeader: e.drawHeader, experimental: e.experimental, gridRef: e.gridRef, headerIcons: e.headerIcons, isDraggable: e.isDraggable, onCanvasBlur: e.onCanvasBlur, onCanvasFocused: e.onCanvasFocused, onCellFocused: e.onCellFocused, onColumnMoved: e.onColumnMoved, onColumnResize: e.onColumnResize, onColumnResizeEnd: e.onColumnResizeEnd, onColumnResizeStart: e.onColumnResizeStart, onContextMenu: e.onContextMenu, onDragEnd: e.onDragEnd, onDragLeave: e.onDragLeave, onDragOverCell: e.onDragOverCell, onDragStart: e.onDragStart, onDrop: e.onDrop, onItemHovered: e.onItemHovered, onKeyDown: e.onKeyDown, onKeyUp: e.onKeyUp, onMouseDown: e.onMouseDown, onMouseUp: e.onMouseUp, onRowMoved: e.onRowMoved, smoothScrollX: e.smoothScrollX, smoothScrollY: e.smoothScrollY }),
    te
  );
};
class Pb extends p.PureComponent {
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
const Ab = () => (e) => Math.max(16, e.targetHeight - 10), Ob = /* @__PURE__ */ an("input")({
  name: "RenameInput",
  class: "gdg-r17m35ur",
  propsAsIs: !1,
  vars: {
    "r17m35ur-0": [Ab(), "px"]
  }
}), Db = (e) => {
  const {
    bounds: t,
    group: n,
    onClose: r,
    canvasBounds: i,
    onFinish: o
  } = e, [s, a] = St.useState(n);
  return St.createElement(Pb, {
    style: {
      position: "absolute",
      left: t.x - i.left + 1,
      top: t.y - i.top,
      width: t.width - 2,
      height: t.height
    },
    className: "gdg-c1tqibwd",
    onClickOutside: r
  }, St.createElement(Ob, {
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
function Lb(e, t) {
  return e === void 0 ? !1 : e.length > 1 && e.startsWith("_") ? Number.parseInt(e.slice(1)) === t.keyCode : e.length === 1 && e >= "a" && e <= "z" ? e.toUpperCase().codePointAt(0) === t.keyCode : e === t.key;
}
function $e(e, t, n) {
  const r = Rp(e, t);
  return r && (n.didMatch = !0), r;
}
function Rp(e, t) {
  if (e.length === 0)
    return !1;
  if (e.includes("|")) {
    const l = e.split("|");
    for (const c of l)
      if (Rp(c, t))
        return !0;
    return !1;
  }
  let n = !1, r = !1, i = !1, o = !1;
  const s = e.split("+"), a = s.pop();
  if (!Lb(a, t))
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
        bo.value ? o = !0 : n = !0;
        break;
    }
  return t.altKey === i && t.ctrlKey === n && t.shiftKey === r && t.metaKey === o;
}
function Fb(e, t, n, r, i, o) {
  const s = St.useCallback((c, u, h, f) => {
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
    const g = n === "mixed" && (h || f === "drag"), d = r === "mixed" && g, v = i === "mixed" && g;
    let k = {
      current: c === void 0 ? void 0 : {
        ...c,
        rangeStack: f === "drag" ? ((y = e.current) == null ? void 0 : y.rangeStack) ?? [] : []
      },
      columns: d ? e.columns : at.empty(),
      rows: v ? e.rows : at.empty()
    };
    h && (o === "multi-rect" || o === "multi-cell") && k.current !== void 0 && e.current !== void 0 && (k = {
      ...k,
      current: {
        ...k.current,
        rangeStack: [...e.current.rangeStack, e.current.range]
      }
    }), t(k, u);
  }, [r, e, n, o, i, t]), a = St.useCallback((c, u, h) => {
    c = c ?? e.rows, u !== void 0 && (c = c.add(u));
    let f;
    if (i === "exclusive" && c.length > 0)
      f = {
        current: void 0,
        columns: at.empty(),
        rows: c
      };
    else {
      const g = h && n === "mixed", d = h && r === "mixed";
      f = {
        current: g ? e.current : void 0,
        columns: d ? e.columns : at.empty(),
        rows: c
      };
    }
    t(f, !1);
  }, [r, e, n, i, t]), l = St.useCallback((c, u, h) => {
    c = c ?? e.columns, u !== void 0 && (c = c.add(u));
    let f;
    if (r === "exclusive" && c.length > 0)
      f = {
        current: void 0,
        rows: at.empty(),
        columns: c
      };
    else {
      const g = h && n === "mixed", d = h && i === "mixed";
      f = {
        current: g ? e.current : void 0,
        rows: d ? e.rows : at.empty(),
        columns: c
      };
    }
    t(f, !1);
  }, [r, e, n, i, t]);
  return [s, a, l];
}
function qb(e, t, n, r, i) {
  const o = p.useCallback((c) => {
    if (e === !0) {
      const u = [];
      for (let h = c.y; h < c.y + c.height; h++) {
        const f = [];
        for (let g = c.x; g < c.x + c.width; g++)
          g < 0 || h >= i ? f.push({
            kind: he.Loading,
            allowOverlay: !1
          }) : f.push(t([g, h]));
        u.push(f);
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
        (await h()).map((f) => [
          { kind: he.Loading, allowOverlay: !1 },
          ...f
        ])
      ) : h.map((f) => [{ kind: he.Loading, allowOverlay: !1 }, ...f]);
    }
    return s(u, r.signal);
  }, [r.signal, s, n]);
  return [e !== void 0 ? a : void 0, s];
}
function Hb(e) {
  if (e.copyData !== void 0)
    return {
      formatted: e.copyData,
      rawValue: e.copyData,
      format: "string"
    };
  switch (e.kind) {
    case he.Boolean:
      return {
        formatted: e.data === !0 ? "TRUE" : e.data === !1 ? "FALSE" : e.data === Rc ? "INDETERMINATE" : "",
        rawValue: e.data,
        format: "boolean"
      };
    case he.Custom:
      return {
        formatted: e.copyData,
        rawValue: e.copyData,
        format: "string"
      };
    case he.Image:
    case he.Bubble:
      return {
        formatted: e.data,
        rawValue: e.data,
        format: "string-array"
      };
    case he.Drilldown:
      return {
        formatted: e.data.map((t) => t.text),
        rawValue: e.data.map((t) => t.text),
        format: "string-array"
      };
    case he.Text:
      return {
        formatted: e.displayData ?? e.data,
        rawValue: e.data,
        format: "string"
      };
    case he.Uri:
      return {
        formatted: e.displayData ?? e.data,
        rawValue: e.data,
        format: "url"
      };
    case he.Markdown:
    case he.RowID:
      return {
        formatted: e.data,
        rawValue: e.data,
        format: "string"
      };
    case he.Number:
      return {
        formatted: e.displayData,
        rawValue: e.data,
        format: "number"
      };
    case he.Loading:
      return {
        formatted: "#LOADING",
        rawValue: "",
        format: "string"
      };
    case he.Protected:
      return {
        formatted: "************",
        rawValue: "",
        format: "string"
      };
    default:
      ki();
  }
}
function zb(e, t) {
  return e.map((r, i) => {
    const o = t[i];
    return r.map((s) => s.span !== void 0 && s.span[0] !== o ? {
      formatted: "",
      rawValue: "",
      format: "string"
    } : Hb(s));
  });
}
function tg(e, t) {
  return (t ? /[\t\n",]/ : /[\t\n"]/).test(e) && (e = `"${e.replace(/"/g, '""')}"`), e;
}
function $b(e) {
  var n;
  const t = [];
  for (const r of e) {
    const i = [];
    for (const o of r)
      o.format === "url" ? i.push(((n = o.rawValue) == null ? void 0 : n.toString()) ?? "") : o.format === "string-array" ? i.push(o.formatted.map((s) => tg(s, !0)).join(",")) : i.push(tg(o.formatted, !1));
    t.push(i.join("	"));
  }
  return t.join(`
`);
}
function ec(e) {
  return e.replace(/\t/g, "    ").replace(/ {2,}/g, (t) => "<span> </span>".repeat(t.length));
}
function ng(e) {
  return '"' + e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '"';
}
function Nb(e) {
  return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
function Bb(e) {
  var n;
  const t = [];
  t.push('<style type="text/css"><!--br {mso-data-placement:same-cell;}--></style>', "<table><tbody>");
  for (const r of e) {
    t.push("<tr>");
    for (const i of r) {
      const o = `gdg-format="${i.format}"`;
      i.format === "url" ? t.push(`<td ${o}><a href="${i.rawValue}">${ec(i.formatted)}</a></td>`) : i.format === "string-array" ? t.push(`<td ${o}><ol>${i.formatted.map((s, a) => `<li gdg-raw-value=${ng(i.rawValue[a])}>` + ec(s) + "</li>").join("")}</ol></td>`) : t.push(`<td gdg-raw-value=${ng(((n = i.rawValue) == null ? void 0 : n.toString()) ?? "")} ${o}>${ec(i.formatted)}</td>`);
    }
    t.push("</tr>");
  }
  return t.push("</tbody></table>"), t.join("");
}
function Wb(e, t) {
  const n = zb(e, t), r = $b(n), i = Bb(n);
  return {
    textPlain: r,
    textHtml: i
  };
}
function rg(e) {
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
      const l = a.cloneNode(!0), u = l.children.length === 1 && l.children[0].nodeName === "P" ? l.children[0] : null, h = (u == null ? void 0 : u.children.length) === 1 && u.children[0].nodeName === "FONT", f = l.querySelectorAll("br");
      for (const v of f)
        v.replaceWith(`
`);
      const g = l.getAttribute("gdg-raw-value"), d = l.getAttribute("gdg-format") ?? "string";
      if (l.querySelector("a") !== null)
        o == null || o.push({
          // raw value is the href
          rawValue: ((s = l.querySelector("a")) == null ? void 0 : s.getAttribute("href")) ?? "",
          formatted: l.textContent ?? "",
          format: d
        });
      else if (l.querySelector("ol") !== null) {
        const v = l.querySelectorAll("li");
        o == null || o.push({
          rawValue: [...v].map((k) => k.getAttribute("gdg-raw-value") ?? ""),
          formatted: [...v].map((k) => k.textContent ?? ""),
          format: "string-array"
        });
      } else if (g !== null)
        o == null || o.push({
          rawValue: Nb(g),
          formatted: l.textContent ?? "",
          format: d
        });
      else {
        let v = l.textContent ?? "";
        h && (v = v.replace(/\n(?!\n)/g, "")), o == null || o.push({
          rawValue: v ?? "",
          formatted: v ?? "",
          format: d
        });
      }
    }
  }
  return o !== void 0 && i.push(o), i;
}
function jb(e, t, n, r, i) {
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
      const f = t({
        x: l.x,
        y: l.y,
        width: 1,
        height: l.height
      }, i.signal);
      if (typeof f == "function")
        return o;
      c.push(...f);
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
      const f = t({
        x: l.x,
        y: l.y,
        width: l.width,
        height: l.height
      }, i.signal);
      if (typeof f == "function")
        return o;
      c.push(...f);
    }
    let u = l.x - n, h = l.x + l.width - 1 - n;
    for (const f of c)
      for (const g of f)
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
function ig(e) {
  return e.startsWith('"') && e.endsWith('"') && (e = e.slice(1, -1).replace(/""/g, '"')), e;
}
function Ub(e) {
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
`) && (r.push(ig(e.slice(i, s))), i = s + 1, a === `
` && (n.push(r), r = [])), o = t.None);
        break;
    }
    s++;
  }
  return i < e.length && r.push(ig(e.slice(i, e.length))), n.push(r), n.map((a) => a.map((l) => ({ rawValue: l, formatted: l, format: "string" })));
}
function og(e, t, n) {
  var a;
  const r = Wb(e, t), i = (l) => {
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
function _p(e) {
  return e !== !0;
}
function ag(e) {
  return typeof e == "string" ? e : `${e}px`;
}
const Xb = () => (e) => e.innerWidth, Yb = () => (e) => e.innerHeight, Kb = /* @__PURE__ */ an("div")({
  name: "Wrapper",
  class: "gdg-wmyidgi",
  propsAsIs: !1,
  vars: {
    "wmyidgi-0": [Xb()],
    "wmyidgi-1": [Yb()]
  }
}), Gb = (e) => {
  const {
    inWidth: t,
    inHeight: n,
    children: r,
    ...i
  } = e;
  return p.createElement(Kb, {
    innerHeight: ag(n),
    innerWidth: ag(t),
    ...i
  }, r);
}, Vb = 2, Zb = 1300;
function Qb(e, t, n) {
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
          r.current = Math.min(1, r.current + h / Zb);
          const f = r.current ** 1.618 * h * Vb;
          (u = t.current) == null || u.scrollBy(i * f, o * f), a = c, n == null || n();
        }
        window.requestAnimationFrame(l);
      }
    };
    return window.requestAnimationFrame(l), () => {
      s = !0;
    };
  }, [t, i, o, n]);
}
function Jb({ rowHeight: e, headerHeight: t, groupHeaderHeight: n, theme: r, overscrollX: i, overscrollY: o, scaleToRem: s, remSize: a }) {
  const [l, c, u, h, f, g] = St.useMemo(() => {
    if (!s || a === 16)
      return [e, t, n, r, i, o];
    const d = a / 16, v = e, k = ep();
    return [
      typeof v == "number" ? v * d : (I) => Math.ceil(v(I) * d),
      Math.ceil(t * d),
      Math.ceil(n * d),
      {
        ...r,
        headerIconSize: ((r == null ? void 0 : r.headerIconSize) ?? k.headerIconSize) * d,
        cellHorizontalPadding: ((r == null ? void 0 : r.cellHorizontalPadding) ?? k.cellHorizontalPadding) * d,
        cellVerticalPadding: ((r == null ? void 0 : r.cellVerticalPadding) ?? k.cellVerticalPadding) * d
      },
      Math.ceil((i ?? 0) * d),
      Math.ceil((o ?? 0) * d)
    ];
  }, [n, t, i, o, a, e, s, r]);
  return { rowHeight: l, headerHeight: c, groupHeaderHeight: u, theme: h, overscrollX: f, overscrollY: g };
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
function sg(e) {
  const t = bo.value;
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
function ew(e) {
  const t = Rm(e);
  return St.useMemo(() => {
    if (t === void 0)
      return sg(Zn);
    const n = {
      ...t,
      goToNextPage: (t == null ? void 0 : t.goToNextPage) ?? (t == null ? void 0 : t.pageDown) ?? Zn.goToNextPage,
      goToPreviousPage: (t == null ? void 0 : t.goToPreviousPage) ?? (t == null ? void 0 : t.pageUp) ?? Zn.goToPreviousPage,
      goToFirstCell: (t == null ? void 0 : t.goToFirstCell) ?? (t == null ? void 0 : t.first) ?? Zn.goToFirstCell,
      goToLastCell: (t == null ? void 0 : t.goToLastCell) ?? (t == null ? void 0 : t.last) ?? Zn.goToLastCell,
      selectToFirstCell: (t == null ? void 0 : t.selectToFirstCell) ?? (t == null ? void 0 : t.first) ?? Zn.selectToFirstCell,
      selectToLastCell: (t == null ? void 0 : t.selectToLastCell) ?? (t == null ? void 0 : t.last) ?? Zn.selectToLastCell
    };
    return sg({
      ...Zn,
      ...n
    });
  }, [t]);
}
var tw = {};
const nw = p.lazy(async () => await import("/routelit/routelit_glide_data_grid/data-grid-overlay-editor-DavoaGi8.js"));
let rw = 0;
function iw(e) {
  return rv(Od(Od(e).filter((t) => t.span !== void 0).map((t) => {
    var n, r;
    return ur((((n = t.span) == null ? void 0 : n[0]) ?? 0) + 1, (((r = t.span) == null ? void 0 : r[1]) ?? 0) + 1);
  })));
}
function so(e, t) {
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
const tc = {
  kind: he.Loading,
  allowOverlay: !1
}, lo = {
  columns: at.empty(),
  rows: at.empty(),
  current: void 0
}, ow = (e, t) => {
  var lu, cu, uu;
  const [n, r] = p.useState(lo), [i, o] = p.useState(), s = p.useRef(null), a = p.useRef(null), [l, c] = p.useState(), u = p.useRef(null), h = p.useRef(), f = typeof window > "u" ? null : window, { imageEditorOverride: g, getRowThemeOverride: d, markdownDivCreateNode: v, width: k, height: I, columns: y, rows: S, getCellContent: P, onCellClicked: b, onCellActivated: M, onFillPattern: O, onFinishedEditing: E, coercePasteValue: _, drawHeader: F, drawCell: R, editorBloom: w, onHeaderClicked: x, onColumnProposeMove: T, spanRangeBehavior: C = "default", onGroupHeaderClicked: N, onCellContextMenu: H, className: Y, onHeaderContextMenu: se, getCellsForSelection: te, onGroupHeaderContextMenu: A, onGroupHeaderRenamed: $, onCellEdited: Q, onCellsEdited: ie, onSearchResultsChanged: z, searchResults: le, onSearchValueChange: oe, searchValue: re, onKeyDown: pe, onKeyUp: we, keybindings: Ce, editOnType: Be = !0, onRowAppended: V, onColumnMoved: Ee, validateCell: Ae, highlightRegions: ft, rangeSelect: Se = "rect", columnSelect: ve = "multi", rowSelect: Oe = "multi", rangeSelectionBlending: Le = "exclusive", columnSelectionBlending: qe = "exclusive", rowSelectionBlending: Me = "exclusive", onDelete: nt, onDragStart: Ke, onMouseMove: Ge, onPaste: ce, copyHeaders: He = !1, freezeColumns: We = 0, cellActivationBehavior: De = "second-click", rowSelectionMode: Mt = "auto", onHeaderMenuClick: Ve, getGroupDetails: je, onSearchClose: Ze, onItemHovered: Ct, onSelectionCleared: It, showSearch: sn, onVisibleRegionChanged: Gt, gridSelection: mt, onGridSelectionChange: Bt, minColumnWidth: Wt = 50, maxColumnWidth: On = 500, maxColumnAutoWidth: Dn, provideEditor: gt, trailingRowOptions: Ue, freezeTrailingRows: Qe = 0, allowedFillDirections: Lt = "orthogonal", scrollOffsetX: Ft, scrollOffsetY: kt, verticalBorder: Dt, onDragOverCell: hn, onDrop: Ye, onColumnResize: vt, onColumnResizeEnd: ct, onColumnResizeStart: ut, customRenderers: qt, fillHandle: pt, drawFocusRing: Ot = !0, experimental: yt, fixedShadowX: Pi, fixedShadowY: Wn, headerIcons: Ln, imageWindowLoader: Fn, initialSize: vr, isDraggable: Ai, onDragLeave: Oi, onRowMoved: xn, overscrollX: yr, overscrollY: br, preventDiagonalScrolling: wr, rightElement: rr, rightElementProps: jn, trapFocus: Di = !1, smoothScrollX: Li, smoothScrollY: Ao, scaleToRem: Oo = !1, rowHeight: Sr = 34, headerHeight: qn = 36, groupHeaderHeight: Do = qn, theme: Lo, isOutsideClick: Fi, renderers: Cr } = e, Pt = typeof e.rowMarkers == "string" ? void 0 : e.rowMarkers, ln = (Pt == null ? void 0 : Pt.kind) ?? e.rowMarkers ?? "none", qi = (Pt == null ? void 0 : Pt.width) ?? e.rowMarkerWidth, kr = (Pt == null ? void 0 : Pt.startIndex) ?? e.rowMarkerStartIndex ?? 1, jr = (Pt == null ? void 0 : Pt.theme) ?? e.rowMarkerTheme, Un = (Pt == null ? void 0 : Pt.checkboxStyle) ?? "square", Vt = Math.max(Wt, 20), gn = Math.max(On, Vt), Ur = Math.max(Dn ?? gn, Vt), Xn = p.useMemo(() => typeof window > "u" ? { fontSize: "16px" } : window.getComputedStyle(document.documentElement), []), Xr = p.useMemo(() => Number.parseFloat(Xn.fontSize), [Xn]), { rowHeight: jt, headerHeight: xr, groupHeaderHeight: Yr, theme: Hi, overscrollX: Fo, overscrollY: zi } = Jb({
    groupHeaderHeight: Do,
    headerHeight: qn,
    overscrollX: yr,
    overscrollY: br,
    remSize: Xr,
    rowHeight: Sr,
    scaleToRem: Oo,
    theme: Lo
  }), pn = ew(Ce), Hn = qi ?? (S > 1e4 ? 48 : S > 1e3 ? 44 : S > 100 ? 36 : 32), Zt = ln !== "none", j = Zt ? 1 : 0, bt = V !== void 0, ir = (Ue == null ? void 0 : Ue.sticky) === !0, [qo, $i] = p.useState(!1), Kr = sn ?? qo, Ho = p.useCallback(() => {
    Ze !== void 0 ? Ze() : $i(!1);
  }, [Ze]), X = p.useMemo(() => mt === void 0 ? void 0 : so(mt, j), [mt, j]) ?? n, zt = p.useRef();
  zt.current === void 0 && (zt.current = new AbortController()), p.useEffect(() => () => zt == null ? void 0 : zt.current.abort(), []);
  const [At, Rr] = qb(te, P, j, zt.current, S), Gr = p.useCallback((m, L, D) => {
    if (Ae === void 0)
      return !0;
    const B = [m[0] - j, m[1]];
    return Ae == null ? void 0 : Ae(B, L, D);
  }, [j, Ae]), Yn = p.useRef(mt), Yt = p.useCallback((m, L) => {
    L && (m = jb(m, At, j, C, zt.current)), Bt !== void 0 ? (Yn.current = so(m, -j), Bt(Yn.current)) : r(m);
  }, [Bt, At, j, C]), mn = Dr(vt, p.useCallback((m, L, D, B) => {
    vt == null || vt(y[D - j], L, D - j, B);
  }, [vt, j, y])), zo = Dr(ct, p.useCallback((m, L, D, B) => {
    ct == null || ct(y[D - j], L, D - j, B);
  }, [ct, j, y])), _r = Dr(ut, p.useCallback((m, L, D, B) => {
    ut == null || ut(y[D - j], L, D - j, B);
  }, [ut, j, y])), $o = Dr(F, p.useCallback((m, L) => (F == null ? void 0 : F({ ...m, columnIndex: m.columnIndex - j }, L)) ?? !1, [F, j])), No = Dr(R, p.useCallback((m, L) => (R == null ? void 0 : R({ ...m, col: m.col - j }, L)) ?? !1, [R, j])), q = p.useCallback((m) => {
    if (nt !== void 0) {
      const L = nt(so(m, -j));
      return typeof L == "boolean" ? L : so(L, j);
    }
    return !0;
  }, [nt, j]), [J, ue, ae] = Fb(X, Yt, Le, qe, Me, Se), ne = p.useMemo(() => Jn(ep(), Hi), [Hi]), [me, Ie] = p.useState([0, 0, 0]), Pe = p.useMemo(() => {
    if (Cr === void 0)
      return {};
    const m = {};
    for (const L of Cr)
      m[L.kind] = L;
    return m;
  }, [Cr]), ge = p.useCallback((m) => m.kind !== he.Custom ? Pe[m.kind] : qt == null ? void 0 : qt.find((L) => L.isMatch(m)), [qt, Pe]);
  let { sizedColumns: tt, nonGrowWidth: ke } = $1(y, S, Rr, me[0] - (j === 0 ? 0 : Hn) - me[2], Vt, Ur, ne, ge, zt.current);
  ln !== "none" && (ke += Hn);
  const rt = p.useMemo(() => tt.some((m) => m.group !== void 0), [tt]), Fe = rt ? xr + Yr : xr, Xe = X.rows.length, Rt = ln === "none" ? void 0 : Xe === 0 ? !1 : Xe === S ? !0 : void 0, ze = p.useMemo(() => ln === "none" ? tt : [
    {
      title: "",
      width: Hn,
      icon: void 0,
      hasMenu: !1,
      style: "normal",
      themeOverride: jr,
      rowMarker: Un,
      rowMarkerChecked: Rt
    },
    ...tt
  ], [ln, tt, Hn, jr, Un, Rt]), [xt, cn] = p.useMemo(() => [
    kt !== void 0 && typeof jt == "number" ? Math.floor(kt / jt) : 0,
    kt !== void 0 && typeof jt == "number" ? -(kt % jt) : 0
  ], [kt, jt]), wt = p.useRef({
    height: 1,
    width: 1,
    x: 0,
    y: 0
  }), Qt = p.useMemo(() => ({
    x: wt.current.x,
    y: xt,
    width: wt.current.width ?? 1,
    height: wt.current.height ?? 1,
    // tx: 'TODO',
    ty: cn
  }), [cn, xt]), et = p.useRef(!1), [_t, Jt, Rn] = xm(Qt);
  wt.current = _t;
  const vn = (_t.height ?? 1) > 1;
  p.useLayoutEffect(() => {
    if (kt !== void 0 && u.current !== null && vn) {
      if (u.current.scrollTop === kt)
        return;
      u.current.scrollTop = kt, u.current.scrollTop !== kt && Rn(), et.current = !0;
    }
  }, [kt, vn, Rn]);
  const Tr = (_t.width ?? 1) > 1;
  p.useLayoutEffect(() => {
    if (Ft !== void 0 && u.current !== null && Tr) {
      if (u.current.scrollLeft === Ft)
        return;
      u.current.scrollLeft = Ft, u.current.scrollLeft !== Ft && Rn(), et.current = !0;
    }
  }, [Ft, Tr, Rn]);
  const or = _t.x + j, Ni = _t.y, Kt = p.useRef(null), Ut = p.useCallback((m) => {
    var L;
    m === !0 ? (L = Kt.current) == null || L.focus() : window.requestAnimationFrame(() => {
      var D;
      (D = Kt.current) == null || D.focus();
    });
  }, []), $t = bt ? S + 1 : S, un = p.useCallback((m) => {
    const L = j === 0 ? m : m.map((B) => ({
      ...B,
      location: [B.location[0] - j, B.location[1]]
    })), D = ie == null ? void 0 : ie(L);
    if (D !== !0)
      for (const B of L)
        Q == null || Q(B.location, B.value);
    return D;
  }, [Q, ie, j]), [ar, Bo] = p.useState(), Bi = X.current !== void 0 && X.current.range.width * X.current.range.height > 1 ? X.current.range : void 0, Er = Ot ? (lu = X.current) == null ? void 0 : lu.cell : void 0, Wi = Er == null ? void 0 : Er[0], ji = Er == null ? void 0 : Er[1], Tp = p.useMemo(() => {
    if ((ft === void 0 || ft.length === 0) && (Bi ?? Wi ?? ji ?? ar) === void 0)
      return;
    const m = [];
    if (ft !== void 0)
      for (const L of ft) {
        const D = ze.length - L.range.x - j;
        D > 0 && m.push({
          color: L.color,
          range: {
            ...L.range,
            x: L.range.x + j,
            width: Math.min(D, L.range.width)
          },
          style: L.style
        });
      }
    return ar !== void 0 && m.push({
      color: dr(ne.accentColor, 0),
      range: ar,
      style: "dashed"
    }), Bi !== void 0 && m.push({
      color: dr(ne.accentColor, 0.5),
      range: Bi,
      style: "solid-outline"
    }), Wi !== void 0 && ji !== void 0 && m.push({
      color: ne.accentColor,
      range: {
        x: Wi,
        y: ji,
        width: 1,
        height: 1
      },
      style: "solid-outline"
    }), m.length > 0 ? m : void 0;
  }, [
    ar,
    Bi,
    Wi,
    ji,
    ft,
    ze.length,
    ne.accentColor,
    j
  ]), Gc = p.useRef(ze);
  Gc.current = ze;
  const en = p.useCallback(([m, L], D = !1) => {
    var G, U, K, ee, Z, de, ye;
    const B = bt && L === $t - 1;
    if (m === 0 && Zt)
      return B ? tc : {
        kind: dn.Marker,
        allowOverlay: !1,
        checkboxStyle: Un,
        checked: (X == null ? void 0 : X.rows.hasIndex(L)) === !0,
        markerKind: ln === "clickable-number" ? "number" : ln,
        row: kr + L,
        drawHandle: xn !== void 0,
        cursor: ln === "clickable-number" ? "pointer" : void 0
      };
    if (B) {
      const Re = m === j ? (Ue == null ? void 0 : Ue.hint) ?? "" : "", _e = Gc.current[m];
      if (((G = _e == null ? void 0 : _e.trailingRowOptions) == null ? void 0 : G.disabled) === !0)
        return tc;
      {
        const Je = ((U = _e == null ? void 0 : _e.trailingRowOptions) == null ? void 0 : U.hint) ?? Re, Te = ((K = _e == null ? void 0 : _e.trailingRowOptions) == null ? void 0 : K.addIcon) ?? (Ue == null ? void 0 : Ue.addIcon);
        return {
          kind: dn.NewRow,
          hint: Je,
          allowOverlay: !1,
          icon: Te
        };
      }
    } else {
      const fe = m - j;
      if (D || (yt == null ? void 0 : yt.strict) === !0) {
        const _e = wt.current, Je = _e.x > fe || fe > _e.x + _e.width || _e.y > L || L > _e.y + _e.height || L >= jo.current, Te = fe === ((Z = (ee = _e.extras) == null ? void 0 : ee.selected) == null ? void 0 : Z[0]) && L === ((de = _e.extras) == null ? void 0 : de.selected[1]);
        let xe = !1;
        if (((ye = _e.extras) == null ? void 0 : ye.freezeRegions) !== void 0) {
          for (const dt of _e.extras.freezeRegions)
            if (Po(dt, fe, L)) {
              xe = !0;
              break;
            }
        }
        if (Je && !Te && !xe)
          return tc;
      }
      let Re = P([fe, L]);
      return j !== 0 && Re.span !== void 0 && (Re = {
        ...Re,
        span: [Re.span[0] + j, Re.span[1] + j]
      }), Re;
    }
  }, [
    bt,
    $t,
    Zt,
    Un,
    X == null ? void 0 : X.rows,
    ln,
    kr,
    xn,
    j,
    Ue == null ? void 0 : Ue.hint,
    Ue == null ? void 0 : Ue.addIcon,
    yt == null ? void 0 : yt.strict,
    P
  ]), Wo = p.useCallback((m) => {
    let L = (je == null ? void 0 : je(m)) ?? { name: m };
    return $ !== void 0 && m !== "" && (L = {
      // FIXME: Mutate
      icon: L.icon,
      name: L.name,
      overrideTheme: L.overrideTheme,
      actions: [
        ...L.actions ?? [],
        {
          title: "Rename",
          icon: "renameIcon",
          onClick: (D) => Xo({
            group: L.name,
            bounds: D.bounds
          })
        }
      ]
    }), L;
  }, [je, $]), Ui = p.useCallback((m) => {
    var K;
    const [L, D] = m.cell, B = ze[L], W = (B == null ? void 0 : B.group) !== void 0 ? (K = Wo(B.group)) == null ? void 0 : K.overrideTheme : void 0, G = B == null ? void 0 : B.themeOverride, U = d == null ? void 0 : d(D);
    o({
      ...m,
      theme: Jn(ne, W, G, U, m.content.themeOverride)
    });
  }, [d, ze, Wo, ne]), Mr = p.useCallback((m, L, D) => {
    var U;
    if (X.current === void 0)
      return;
    const [B, W] = X.current.cell, G = en([B, W]);
    if (G.kind !== he.Boolean && G.allowOverlay) {
      let K = G;
      if (D !== void 0)
        switch (K.kind) {
          case he.Number: {
            const ee = a0(() => D === "-" ? -0 : Number.parseFloat(D), 0);
            K = {
              ...K,
              data: Number.isNaN(ee) ? 0 : ee
            };
            break;
          }
          case he.Text:
          case he.Markdown:
          case he.Uri:
            K = {
              ...K,
              data: D
            };
            break;
        }
      Ui({
        target: m,
        content: K,
        initialValue: D,
        cell: [B, W],
        highlight: D === void 0,
        forceEditMode: D !== void 0
      });
    } else G.kind === he.Boolean && L && G.readonly !== !0 && (un([
      {
        location: X.current.cell,
        value: {
          ...G,
          data: _p(G.data)
        }
      }
    ]), (U = Kt.current) == null || U.damage([{ cell: X.current.cell }]));
  }, [en, X, un, Ui]), Vc = p.useCallback((m, L) => {
    var W;
    const D = (W = Kt.current) == null ? void 0 : W.getBounds(m, L);
    if (D === void 0 || u.current === null)
      return;
    const B = en([m, L]);
    B.allowOverlay && Ui({
      target: D,
      content: B,
      initialValue: void 0,
      highlight: !0,
      cell: [m, L],
      forceEditMode: !0
    });
  }, [en, Ui]), Tt = p.useCallback((m, L, D = "both", B = 0, W = 0, G = void 0) => {
    if (u.current !== null) {
      const U = Kt.current, K = a.current, ee = typeof m != "number" ? m.unit === "cell" ? m.amount : void 0 : m, Z = typeof L != "number" ? L.unit === "cell" ? L.amount : void 0 : L, de = typeof m != "number" && m.unit === "px" ? m.amount : void 0, ye = typeof L != "number" && L.unit === "px" ? L.amount : void 0;
      if (U !== null && K !== null) {
        let fe = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }, Re = 0, _e = 0;
        if ((ee !== void 0 || Z !== void 0) && (fe = U.getBounds((ee ?? 0) + j, Z ?? 0) ?? fe, fe.width === 0 || fe.height === 0))
          return;
        const Je = K.getBoundingClientRect(), Te = Je.width / K.offsetWidth;
        if (de !== void 0 && (fe = {
          ...fe,
          x: de - Je.left - u.current.scrollLeft,
          width: 1
        }), ye !== void 0 && (fe = {
          ...fe,
          y: ye + Je.top - u.current.scrollTop,
          height: 1
        }), fe !== void 0) {
          const xe = {
            x: fe.x - B,
            y: fe.y - W,
            width: fe.width + 2 * B,
            height: fe.height + 2 * W
          };
          let dt = 0;
          for (let Qo = 0; Qo < We; Qo++)
            dt += tt[Qo].width;
          let Nt = 0;
          const Et = Qe + (ir ? 1 : 0);
          Et > 0 && (Nt = mr($t, Et, jt));
          let bn = dt * Te + Je.left + j * Hn * Te, Tn = Je.right, wn = Je.top + Fe * Te, En = Je.bottom - Nt * Te;
          const Zi = fe.width + B * 2;
          switch (G == null ? void 0 : G.hAlign) {
            case "start":
              Tn = bn + Zi;
              break;
            case "end":
              bn = Tn - Zi;
              break;
            case "center":
              bn = Math.floor((bn + Tn) / 2) - Zi / 2, Tn = bn + Zi;
              break;
          }
          const Qi = fe.height + W * 2;
          switch (G == null ? void 0 : G.vAlign) {
            case "start":
              En = wn + Qi;
              break;
            case "end":
              wn = En - Qi;
              break;
            case "center":
              wn = Math.floor((wn + En) / 2) - Qi / 2, En = wn + Qi;
              break;
          }
          bn > xe.x ? Re = xe.x - bn : Tn < xe.x + xe.width && (Re = xe.x + xe.width - Tn), wn > xe.y ? _e = xe.y - wn : En < xe.y + xe.height && (_e = xe.y + xe.height - En), D === "vertical" || typeof m == "number" && m < We ? Re = 0 : (D === "horizontal" || typeof L == "number" && L >= $t - Et) && (_e = 0), (Re !== 0 || _e !== 0) && (Te !== 1 && (Re /= Te, _e /= Te), u.current.scrollTo(Re + u.current.scrollLeft, _e + u.current.scrollTop));
        }
      }
    }
  }, [
    j,
    Qe,
    Hn,
    Fe,
    We,
    tt,
    $t,
    ir,
    jt
  ]), Zc = p.useRef(Vc), Qc = p.useRef(P), jo = p.useRef(S);
  Zc.current = Vc, Qc.current = P, jo.current = S;
  const Ir = p.useCallback(async (m, L = !0) => {
    var ee;
    const D = ze[m];
    if (((ee = D == null ? void 0 : D.trailingRowOptions) == null ? void 0 : ee.disabled) === !0)
      return;
    const B = V == null ? void 0 : V();
    let W, G = !0;
    B !== void 0 && (W = await B, W === "top" && (G = !1), typeof W == "number" && (G = !1));
    let U = 0;
    const K = () => {
      if (jo.current <= S) {
        U < 500 && window.setTimeout(K, U), U = 50 + U * 2;
        return;
      }
      const Z = typeof W == "number" ? W : G ? S : 0;
      Vi.current(m - j, Z), J({
        cell: [m, Z],
        range: {
          x: m,
          y: Z,
          width: 1,
          height: 1
        }
      }, !1, !1, "edit");
      const de = Qc.current([m - j, Z]);
      de.allowOverlay && gi(de) && de.readonly !== !0 && L && window.setTimeout(() => {
        Zc.current(m, Z);
      }, 0);
    };
    K();
  }, [ze, V, j, S, J]), Xi = p.useCallback((m) => {
    var D, B;
    const L = ((B = (D = tt[m]) == null ? void 0 : D.trailingRowOptions) == null ? void 0 : B.targetColumn) ?? (Ue == null ? void 0 : Ue.targetColumn);
    if (typeof L == "number")
      return L + (Zt ? 1 : 0);
    if (typeof L == "object") {
      const W = y.indexOf(L);
      if (W >= 0)
        return W + (Zt ? 1 : 0);
    }
  }, [tt, y, Zt, Ue == null ? void 0 : Ue.targetColumn]), Kn = p.useRef(), Pr = p.useRef(), Vr = p.useCallback((m, L) => {
    var W;
    const [D, B] = L;
    return Jn(ne, (W = ze[D]) == null ? void 0 : W.themeOverride, d == null ? void 0 : d(B), m.themeOverride);
  }, [d, ze, ne]), Zr = p.useCallback((m) => {
    var de, ye, fe;
    const L = bo.value ? m.metaKey : m.ctrlKey, D = L && Oe === "multi", B = L && ve === "multi", [W, G] = m.location, U = X.columns, K = X.rows, [ee, Z] = ((de = X.current) == null ? void 0 : de.cell) ?? [];
    if (m.kind === "cell") {
      if (Pr.current = void 0, sr.current = [W, G], W === 0 && Zt) {
        if (bt === !0 && G === S || ln === "number" || Oe === "none")
          return;
        const Re = en(m.location);
        if (Re.kind !== dn.Marker)
          return;
        if (xn !== void 0) {
          const Te = ge(Re);
          rn((Te == null ? void 0 : Te.kind) === dn.Marker);
          const xe = (ye = Te == null ? void 0 : Te.onClick) == null ? void 0 : ye.call(Te, {
            ...m,
            cell: Re,
            posX: m.localEventX,
            posY: m.localEventY,
            bounds: m.bounds,
            theme: Vr(Re, m.location),
            preventDefault: () => {
            }
          });
          if (xe === void 0 || xe.checked === Re.checked)
            return;
        }
        o(void 0), Ut();
        const _e = K.hasIndex(G), Je = Kn.current;
        if (Oe === "multi" && (m.shiftKey || m.isLongTouch === !0) && Je !== void 0 && K.hasIndex(Je)) {
          const Te = [Math.min(Je, G), Math.max(Je, G) + 1];
          D || Mt === "multi" ? ue(void 0, Te, !0) : ue(at.fromSingleSelection(Te), void 0, D);
        } else D || m.isTouch || Mt === "multi" ? _e ? ue(K.remove(G), void 0, !0) : (ue(void 0, G, !0), Kn.current = G) : _e && K.length === 1 ? ue(at.empty(), void 0, L) : (ue(at.fromSingleSelection(G), void 0, L), Kn.current = G);
      } else if (W >= j && bt && G === S) {
        const Re = Xi(W);
        Ir(Re ?? W);
      } else if (ee !== W || Z !== G) {
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
            theme: Vr(Re, m.location)
          }), xe)
            return;
        }
        const Je = ir && G === S, Te = ir && X !== void 0 && ((fe = X.current) == null ? void 0 : fe.cell[1]) === S;
        if ((m.shiftKey || m.isLongTouch === !0) && ee !== void 0 && Z !== void 0 && X.current !== void 0 && !Te) {
          if (Je)
            return;
          const xe = Math.min(W, ee), dt = Math.max(W, ee), Nt = Math.min(G, Z), Et = Math.max(G, Z);
          J({
            ...X.current,
            range: {
              x: xe,
              y: Nt,
              width: dt - xe + 1,
              height: Et - Nt + 1
            }
          }, !0, L, "click"), Kn.current = void 0, Ut();
        } else
          J({
            cell: [W, G],
            range: { x: W, y: G, width: 1, height: 1 }
          }, !0, L, "click"), Kn.current = void 0, o(void 0), Ut();
      }
    } else if (m.kind === "header")
      if (sr.current = [W, G], o(void 0), Zt && W === 0)
        Kn.current = void 0, Pr.current = void 0, Oe === "multi" && (K.length !== S ? ue(at.fromSingleSelection([0, S]), void 0, L) : ue(at.empty(), void 0, L), Ut());
      else {
        const Re = Pr.current;
        if (ve === "multi" && (m.shiftKey || m.isLongTouch === !0) && Re !== void 0 && U.hasIndex(Re)) {
          const _e = [Math.min(Re, W), Math.max(Re, W) + 1];
          B ? ae(void 0, _e, L) : ae(at.fromSingleSelection(_e), void 0, L);
        } else B ? (U.hasIndex(W) ? ae(U.remove(W), void 0, L) : ae(void 0, W, L), Pr.current = W) : ve !== "none" && (ae(at.fromSingleSelection(W), void 0, L), Pr.current = W);
        Kn.current = void 0, Ut();
      }
    else m.kind === nn ? sr.current = [W, G] : m.kind === wo && !m.isMaybeScrollbar && (Yt(lo, !1), o(void 0), Ut(), It == null || It(), Kn.current = void 0, Pr.current = void 0);
  }, [
    Ir,
    ve,
    Ut,
    ge,
    Xi,
    en,
    X,
    Zt,
    ir,
    It,
    xn,
    j,
    ln,
    Oe,
    Mt,
    S,
    J,
    Yt,
    ae,
    ue,
    bt,
    Vr
  ]), Qr = p.useRef(!1), sr = p.useRef(), Jc = p.useRef(_t), fn = p.useRef(), Ep = p.useCallback((m) => {
    if (Ar.current = !1, Jc.current = wt.current, m.button !== 0 && m.button !== 1) {
      fn.current = void 0;
      return;
    }
    const L = performance.now();
    fn.current = {
      button: m.button,
      time: L,
      location: m.location
    }, (m == null ? void 0 : m.kind) === "header" && (Qr.current = !0);
    const D = m.kind === "cell" && m.isFillHandle;
    !D && m.kind !== "cell" && m.isEdge || (c({
      previousSelection: X,
      fillHandle: D
    }), sr.current = void 0, !m.isTouch && m.button === 0 && !D ? Zr(m) : !m.isTouch && m.button === 1 && (sr.current = m.location));
  }, [X, Zr]), [Uo, Xo] = p.useState(), eu = p.useCallback((m) => {
    if (m.kind !== nn || ve !== "multi")
      return;
    const L = bo.value ? m.metaKey : m.ctrlKey, [D] = m.location, B = X.columns;
    if (D < j)
      return;
    const W = ze[D];
    let G = D, U = D;
    for (let K = D - 1; K >= j && xi(W.group, ze[K].group); K--)
      G--;
    for (let K = D + 1; K < ze.length && xi(W.group, ze[K].group); K++)
      U++;
    if (Ut(), L)
      if (B.hasAll([G, U + 1])) {
        let K = B;
        for (let ee = G; ee <= U; ee++)
          K = K.remove(ee);
        ae(K, void 0, L);
      } else
        ae(void 0, [G, U + 1], L);
    else
      ae(at.fromSingleSelection([G, U + 1]), void 0, L);
  }, [ve, Ut, X.columns, ze, j, ae]), Ar = p.useRef(!1), Yi = p.useCallback(async (m) => {
    if (At !== void 0 && mn !== void 0) {
      const L = wt.current.y, D = wt.current.height;
      let B = At({
        x: m,
        y: L,
        width: 1,
        height: Math.min(D, S - L)
      }, zt.current.signal);
      typeof B != "object" && (B = await B());
      const W = tt[m - j], U = document.createElement("canvas").getContext("2d", { alpha: !1 });
      if (U !== null) {
        U.font = ne.baseFontFull;
        const K = tp(U, ne, W, 0, B, Vt, gn, !1, ge);
        mn == null || mn(W, K.width, m, K.width);
      }
    }
  }, [
    tt,
    At,
    gn,
    ne,
    Vt,
    mn,
    j,
    S,
    ge
  ]), [Mp, Yo] = p.useState(), Or = p.useCallback(async (m, L) => {
    var K, ee;
    const D = (K = m.current) == null ? void 0 : K.range;
    if (D === void 0 || At === void 0 || L.current === void 0)
      return;
    const B = L.current.range;
    if (O !== void 0) {
      let Z = !1;
      if (O({
        fillDestination: { ...B, x: B.x - j },
        patternSource: { ...D, x: D.x - j },
        preventDefault: () => Z = !0
      }), Z)
        return;
    }
    let W = At(D, zt.current.signal);
    typeof W != "object" && (W = await W());
    const G = W, U = [];
    for (let Z = 0; Z < B.width; Z++)
      for (let de = 0; de < B.height; de++) {
        const ye = [B.x + Z, B.y + de];
        if (Ug(ye, D))
          continue;
        const fe = G[de % D.height][Z % D.width];
        zr(fe) || !gi(fe) || U.push({
          location: ye,
          value: { ...fe }
        });
      }
    un(U), (ee = Kt.current) == null || ee.damage(U.map((Z) => ({
      cell: Z.location
    })));
  }, [At, un, O, j]), tu = p.useCallback(() => {
    if (X.current === void 0 || X.current.range.width <= 1)
      return;
    const m = {
      ...X,
      current: {
        ...X.current,
        range: {
          ...X.current.range,
          width: 1
        }
      }
    };
    Or(m, X);
  }, [Or, X]), nu = p.useCallback(() => {
    if (X.current === void 0 || X.current.range.height <= 1)
      return;
    const m = {
      ...X,
      current: {
        ...X.current,
        range: {
          ...X.current.range,
          height: 1
        }
      }
    };
    Or(m, X);
  }, [Or, X]), Ip = p.useCallback((m, L) => {
    var de, ye;
    const D = l;
    if (c(void 0), Bo(void 0), Yo(void 0), Qr.current = !1, L)
      return;
    if ((D == null ? void 0 : D.fillHandle) === !0 && X.current !== void 0 && ((de = D.previousSelection) == null ? void 0 : de.current) !== void 0) {
      if (ar === void 0)
        return;
      const fe = {
        ...X,
        current: {
          ...X.current,
          range: up(D.previousSelection.current.range, ar)
        }
      };
      Or(D.previousSelection, fe), Yt(fe, !0);
      return;
    }
    const [B, W] = m.location, [G, U] = sr.current ?? [], K = () => {
      Ar.current = !0;
    }, ee = (fe) => {
      var _e, Je, Te;
      const Re = fe.isTouch || G === B && U === W;
      if (Re && (b == null || b([B - j, W], {
        ...fe,
        preventDefault: K
      })), fe.button === 1)
        return !Ar.current;
      if (!Ar.current) {
        const xe = en(m.location), dt = ge(xe);
        if (dt !== void 0 && dt.onClick !== void 0 && Re) {
          const Et = dt.onClick({
            ...fe,
            cell: xe,
            posX: fe.localEventX,
            posY: fe.localEventY,
            bounds: fe.bounds,
            theme: Vr(xe, m.location),
            preventDefault: K
          });
          Et !== void 0 && !zr(Et) && qr(Et) && (un([{ location: fe.location, value: Et }]), (_e = Kt.current) == null || _e.damage([
            {
              cell: fe.location
            }
          ]));
        }
        if (Ar.current || X.current === void 0)
          return !1;
        let Nt = !1;
        switch (xe.activationBehaviorOverride ?? De) {
          case "double-click":
          case "second-click": {
            if (((Te = (Je = D == null ? void 0 : D.previousSelection) == null ? void 0 : Je.current) == null ? void 0 : Te.cell) === void 0)
              break;
            const [Et, bn] = X.current.cell, [Tn, wn] = D.previousSelection.current.cell;
            Nt = B === Et && B === Tn && W === bn && W === wn && (fe.isDoubleClick === !0 || De === "second-click");
            break;
          }
          case "single-click": {
            Nt = !0;
            break;
          }
        }
        if (Nt)
          return M == null || M([B - j, W]), Mr(fe.bounds, !1), !0;
      }
      return !1;
    }, Z = m.location[0] - j;
    if (m.isTouch) {
      const fe = wt.current, Re = Jc.current;
      if (fe.x !== Re.x || fe.y !== Re.y)
        return;
      if (m.isLongTouch === !0) {
        if (m.kind === "cell" && wi((ye = X.current) == null ? void 0 : ye.cell, m.location)) {
          H == null || H([Z, m.location[1]], {
            ...m,
            preventDefault: K
          });
          return;
        } else if (m.kind === "header" && X.columns.hasIndex(B)) {
          se == null || se(Z, { ...m, preventDefault: K });
          return;
        } else if (m.kind === nn) {
          if (Z < 0)
            return;
          A == null || A(Z, { ...m, preventDefault: K });
          return;
        }
      }
      m.kind === "cell" ? ee(m) || Zr(m) : m.kind === nn ? N == null || N(Z, { ...m, preventDefault: K }) : (m.kind === Qn && (x == null || x(Z, {
        ...m,
        preventDefault: K
      })), Zr(m));
      return;
    }
    if (m.kind === "header") {
      if (Z < 0)
        return;
      m.isEdge ? m.isDoubleClick === !0 && Yi(B) : m.button === 0 && B === G && W === U && (x == null || x(Z, { ...m, preventDefault: K }));
    }
    if (m.kind === nn) {
      if (Z < 0)
        return;
      m.button === 0 && B === G && W === U && (N == null || N(Z, { ...m, preventDefault: K }), Ar.current || eu(m));
    }
    m.kind === "cell" && (m.button === 0 || m.button === 1) && ee(m), sr.current = void 0;
  }, [
    l,
    X,
    j,
    ar,
    Or,
    Yt,
    b,
    en,
    ge,
    De,
    Vr,
    un,
    M,
    Mr,
    H,
    se,
    A,
    Zr,
    N,
    x,
    Yi,
    eu
  ]), Pp = p.useCallback((m) => {
    const L = {
      ...m,
      location: [m.location[0] - j, m.location[1]]
    };
    Ge == null || Ge(L), l !== void 0 && m.buttons === 0 && (c(void 0), Bo(void 0), Yo(void 0), Qr.current = !1), Yo((D) => {
      var B;
      return Qr.current ? [m.scrollEdge[0], 0] : m.scrollEdge[0] === (D == null ? void 0 : D[0]) && m.scrollEdge[1] === D[1] ? D : l === void 0 || (((B = fn.current) == null ? void 0 : B.location[0]) ?? 0) < j ? void 0 : m.scrollEdge;
    });
  }, [l, Ge, j]), Ap = p.useCallback((m, L) => {
    Ve == null || Ve(m - j, L);
  }, [Ve, j]), _n = (cu = X == null ? void 0 : X.current) == null ? void 0 : cu.cell, Op = p.useCallback((m, L, D, B, W, G) => {
    et.current = !1;
    let U = _n;
    U !== void 0 && (U = [U[0] - j, U[1]]);
    const K = We === 0 ? void 0 : {
      x: 0,
      y: m.y,
      width: We,
      height: m.height
    }, ee = [];
    K !== void 0 && ee.push(K), Qe > 0 && (ee.push({
      x: m.x - j,
      y: S - Qe,
      width: m.width,
      height: Qe
    }), We > 0 && ee.push({
      x: 0,
      y: S - Qe,
      width: We,
      height: Qe
    }));
    const Z = {
      x: m.x - j,
      y: m.y,
      width: m.width,
      height: bt && m.y + m.height >= S ? m.height - 1 : m.height,
      tx: W,
      ty: G,
      extras: {
        selected: U,
        freezeRegion: K,
        freezeRegions: ee
      }
    };
    wt.current = Z, Jt(Z), Ie([L, D, B]), Gt == null || Gt(Z, Z.tx, Z.ty, Z.extras);
  }, [
    _n,
    j,
    bt,
    S,
    We,
    Qe,
    Jt,
    Gt
  ]), Dp = Dr(Ee, p.useCallback((m, L) => {
    Ee == null || Ee(m - j, L - j), ve !== "none" && ae(at.fromSingleSelection(L), void 0, !0);
  }, [ve, Ee, j, ae])), Ko = p.useRef(!1), Lp = p.useCallback((m) => {
    if (m.location[0] === 0 && j > 0) {
      m.preventDefault();
      return;
    }
    Ke == null || Ke({
      ...m,
      location: [m.location[0] - j, m.location[1]]
    }), m.defaultPrevented() || (Ko.current = !0), c(void 0);
  }, [Ke, j]), Fp = p.useCallback(() => {
    Ko.current = !1;
  }, []), Go = p.useRef(), Vo = p.useCallback((m) => {
    var L, D, B;
    if (!xp(m, Go.current) && (Go.current = m, !(((L = fn == null ? void 0 : fn.current) == null ? void 0 : L.button) !== void 0 && fn.current.button >= 1))) {
      if (m.buttons !== 0 && l !== void 0 && ((D = fn.current) == null ? void 0 : D.location[0]) === 0 && m.location[0] === 0 && j === 1 && Oe === "multi" && l.previousSelection && !l.previousSelection.rows.hasIndex(fn.current.location[1]) && X.rows.hasIndex(fn.current.location[1])) {
        const W = Math.min(fn.current.location[1], m.location[1]), G = Math.max(fn.current.location[1], m.location[1]) + 1;
        ue(at.fromSingleSelection([W, G]), void 0, !1);
      }
      if (m.buttons !== 0 && l !== void 0 && X.current !== void 0 && !Ko.current && !Qr.current && (Se === "rect" || Se === "multi-rect")) {
        const [W, G] = X.current.cell;
        let [U, K] = m.location;
        if (K < 0 && (K = wt.current.y), l.fillHandle === !0 && ((B = l.previousSelection) == null ? void 0 : B.current) !== void 0) {
          const ee = l.previousSelection.current.range;
          K = Math.min(K, bt ? S - 1 : S);
          const Z = Uv(ee, U, K, Lt);
          Bo(Z);
        } else {
          if (bt && G === S)
            return;
          if (bt && K === S)
            if (m.kind === wo)
              K--;
            else
              return;
          U = Math.max(U, j);
          const de = U - W, ye = K - G, fe = {
            x: de >= 0 ? W : U,
            y: ye >= 0 ? G : K,
            width: Math.abs(de) + 1,
            height: Math.abs(ye) + 1
          };
          J({
            ...X.current,
            range: fe
          }, !0, !1, "drag");
        }
      }
      Ct == null || Ct({ ...m, location: [m.location[0] - j, m.location[1]] });
    }
  }, [
    Lt,
    l,
    j,
    Oe,
    X,
    Se,
    Ct,
    ue,
    bt,
    S,
    J
  ]), qp = p.useCallback(() => {
    var U, K;
    const m = Go.current;
    if (m === void 0)
      return;
    const [L, D] = m.scrollEdge;
    let [B, W] = m.location;
    const G = wt.current;
    L === -1 ? B = ((K = (U = G.extras) == null ? void 0 : U.freezeRegion) == null ? void 0 : K.x) ?? G.x : L === 1 && (B = G.x + G.width), D === -1 ? W = Math.max(0, G.y) : D === 1 && (W = Math.min(S - 1, G.y + G.height)), B = Cn(B, 0, ze.length - 1), W = Cn(W, 0, S - 1), Vo({
      ...m,
      location: [B, W]
    });
  }, [ze.length, Vo, S]);
  Qb(Mp, u, qp);
  const yn = p.useCallback((m) => {
    if (X.current === void 0)
      return;
    const [L, D] = m, [B, W] = X.current.cell, G = X.current.range;
    let U = G.x, K = G.x + G.width, ee = G.y, Z = G.y + G.height;
    if (D !== 0)
      switch (D) {
        case 2: {
          Z = S, ee = W, Tt(0, Z, "vertical");
          break;
        }
        case -2: {
          ee = 0, Z = W + 1, Tt(0, ee, "vertical");
          break;
        }
        case 1: {
          ee < W ? (ee++, Tt(0, ee, "vertical")) : (Z = Math.min(S, Z + 1), Tt(0, Z, "vertical"));
          break;
        }
        case -1: {
          Z > W + 1 ? (Z--, Tt(0, Z, "vertical")) : (ee = Math.max(0, ee - 1), Tt(0, ee, "vertical"));
          break;
        }
        default:
          ki();
      }
    if (L !== 0)
      if (L === 2)
        K = ze.length, U = B, Tt(K - 1 - j, 0, "horizontal");
      else if (L === -2)
        U = j, K = B + 1, Tt(U - j, 0, "horizontal");
      else {
        let de = [];
        if (At !== void 0) {
          const ye = At({
            x: U,
            y: ee,
            width: K - U - j,
            height: Z - ee
          }, zt.current.signal);
          typeof ye == "object" && (de = iw(ye));
        }
        if (L === 1) {
          let ye = !1;
          if (U < B) {
            if (de.length > 0) {
              const fe = ur(U + 1, B + 1).find((Re) => !de.includes(Re - j));
              fe !== void 0 && (U = fe, ye = !0);
            } else
              U++, ye = !0;
            ye && Tt(U, 0, "horizontal");
          }
          ye || (K = Math.min(ze.length, K + 1), Tt(K - 1 - j, 0, "horizontal"));
        } else if (L === -1) {
          let ye = !1;
          if (K > B + 1) {
            if (de.length > 0) {
              const fe = ur(K - 1, B, -1).find((Re) => !de.includes(Re - j));
              fe !== void 0 && (K = fe, ye = !0);
            } else
              K--, ye = !0;
            ye && Tt(K - j, 0, "horizontal");
          }
          ye || (U = Math.max(j, U - 1), Tt(U - j, 0, "horizontal"));
        } else
          ki();
      }
    J({
      cell: X.current.cell,
      range: {
        x: U,
        y: ee,
        width: K - U,
        height: Z - ee
      }
    }, !0, !1, "keyboard-select");
  }, [At, X, ze.length, j, S, Tt, J]), Gn = p.useCallback((m, L, D, B) => {
    const W = $t - (D ? 0 : 1);
    if (m = Cn(m, j, tt.length - 1 + j), L = Cn(L, 0, W), m === (_n == null ? void 0 : _n[0]) && L === (_n == null ? void 0 : _n[1]))
      return !1;
    if (B && X.current !== void 0) {
      const G = [...X.current.rangeStack];
      (X.current.range.width > 1 || X.current.range.height > 1) && G.push(X.current.range), Yt({
        ...X,
        current: {
          cell: [m, L],
          range: { x: m, y: L, width: 1, height: 1 },
          rangeStack: G
        }
      }, !0);
    } else
      J({
        cell: [m, L],
        range: { x: m, y: L, width: 1, height: 1 }
      }, !0, !1, "keyboard-nav");
    return h.current !== void 0 && h.current[0] === m && h.current[1] === L && (h.current = void 0), Tt(m - j, L), !0;
  }, [
    $t,
    j,
    tt.length,
    _n,
    X,
    Tt,
    Yt,
    J
  ]), Hp = p.useCallback((m, L) => {
    (i == null ? void 0 : i.cell) !== void 0 && m !== void 0 && qr(m) && (un([{ location: i.cell, value: m }]), window.requestAnimationFrame(() => {
      var W;
      (W = Kt.current) == null || W.damage([
        {
          cell: i.cell
        }
      ]);
    })), Ut(!0), o(void 0);
    const [D, B] = L;
    if (X.current !== void 0 && (D !== 0 || B !== 0)) {
      const W = X.current.cell[1] === $t - 1 && m !== void 0;
      Gn(Cn(X.current.cell[0] + D, 0, ze.length - 1), Cn(X.current.cell[1] + B, 0, $t - 1), W, !1);
    }
    E == null || E(m, L);
  }, [
    i == null ? void 0 : i.cell,
    Ut,
    X,
    E,
    un,
    $t,
    Gn,
    ze.length
  ]), zp = p.useMemo(() => `gdg-overlay-${rw++}`, []), lr = p.useCallback((m) => {
    var D, B, W, G;
    Ut();
    const L = [];
    for (let U = m.x; U < m.x + m.width; U++)
      for (let K = m.y; K < m.y + m.height; K++) {
        const ee = P([U - j, K]);
        if (!ee.allowOverlay && ee.kind !== he.Boolean)
          continue;
        let Z;
        if (ee.kind === he.Custom) {
          const de = ge(ee), ye = (D = de == null ? void 0 : de.provideEditor) == null ? void 0 : D.call(de, ee);
          (de == null ? void 0 : de.onDelete) !== void 0 ? Z = de.onDelete(ee) : N0(ye) && (Z = (B = ye == null ? void 0 : ye.deletedValue) == null ? void 0 : B.call(ye, ee));
        } else if (qr(ee) && ee.allowOverlay || ee.kind === he.Boolean) {
          const de = ge(ee);
          Z = (W = de == null ? void 0 : de.onDelete) == null ? void 0 : W.call(de, ee);
        }
        Z !== void 0 && !zr(Z) && qr(Z) && L.push({ location: [U, K], value: Z });
      }
    un(L), (G = Kt.current) == null || G.damage(L.map((U) => ({ cell: U.location })));
  }, [Ut, P, ge, un, j]), Jr = i !== void 0, ru = p.useCallback((m) => {
    var Re, _e;
    const L = () => {
      m.stopPropagation(), m.preventDefault();
    }, D = {
      didMatch: !1
    }, { bounds: B } = m, W = X.columns, G = X.rows, U = pn;
    if (!Jr && $e(U.clear, m, D))
      Yt(lo, !1), It == null || It();
    else if (!Jr && $e(U.selectAll, m, D))
      Yt({
        columns: at.empty(),
        rows: at.empty(),
        current: {
          cell: ((Re = X.current) == null ? void 0 : Re.cell) ?? [j, 0],
          range: {
            x: j,
            y: 0,
            width: y.length,
            height: S
          },
          rangeStack: []
        }
      }, !1);
    else if ($e(U.search, m, D))
      (_e = s == null ? void 0 : s.current) == null || _e.focus({ preventScroll: !0 }), $i(!0);
    else if ($e(U.delete, m, D)) {
      const Je = (q == null ? void 0 : q(X)) ?? !0;
      if (Je !== !1) {
        const Te = Je === !0 ? X : Je;
        if (Te.current !== void 0) {
          lr(Te.current.range);
          for (const xe of Te.current.rangeStack)
            lr(xe);
        }
        for (const xe of Te.rows)
          lr({
            x: j,
            y: xe,
            width: y.length,
            height: 1
          });
        for (const xe of Te.columns)
          lr({
            x: xe,
            y: 0,
            width: 1,
            height: S
          });
      }
    }
    if (D.didMatch)
      return L(), !0;
    if (X.current === void 0)
      return !1;
    let [K, ee] = X.current.cell, Z = !1, de = !1;
    $e(U.scrollToSelectedCell, m, D) ? Vi.current(K - j, ee) : ve !== "none" && $e(U.selectColumn, m, D) ? W.hasIndex(K) ? ae(W.remove(K), void 0, !0) : ve === "single" ? ae(at.fromSingleSelection(K), void 0, !0) : ae(void 0, K, !0) : Oe !== "none" && $e(U.selectRow, m, D) ? G.hasIndex(ee) ? ue(G.remove(ee), void 0, !0) : Oe === "single" ? ue(at.fromSingleSelection(ee), void 0, !0) : ue(void 0, ee, !0) : !Jr && B !== void 0 && $e(U.activateCell, m, D) ? ee === S && bt ? window.setTimeout(() => {
      const Je = Xi(K);
      Ir(Je ?? K);
    }, 0) : (M == null || M([K - j, ee]), Mr(B, !0)) : X.current.range.height > 1 && $e(U.downFill, m, D) ? nu() : X.current.range.width > 1 && $e(U.rightFill, m, D) ? tu() : $e(U.goToNextPage, m, D) ? ee += Math.max(1, wt.current.height - 4) : $e(U.goToPreviousPage, m, D) ? ee -= Math.max(1, wt.current.height - 4) : $e(U.goToFirstCell, m, D) ? (o(void 0), ee = 0, K = 0) : $e(U.goToLastCell, m, D) ? (o(void 0), ee = Number.MAX_SAFE_INTEGER, K = Number.MAX_SAFE_INTEGER) : $e(U.selectToFirstCell, m, D) ? (o(void 0), yn([-2, -2])) : $e(U.selectToLastCell, m, D) ? (o(void 0), yn([2, 2])) : Jr ? ($e(U.closeOverlay, m, D) && o(void 0), $e(U.acceptOverlayDown, m, D) && (o(void 0), ee++), $e(U.acceptOverlayUp, m, D) && (o(void 0), ee--), $e(U.acceptOverlayLeft, m, D) && (o(void 0), K--), $e(U.acceptOverlayRight, m, D) && (o(void 0), K++)) : ($e(U.goDownCell, m, D) ? ee += 1 : $e(U.goUpCell, m, D) ? ee -= 1 : $e(U.goRightCell, m, D) ? K += 1 : $e(U.goLeftCell, m, D) ? K -= 1 : $e(U.goDownCellRetainSelection, m, D) ? (ee += 1, Z = !0) : $e(U.goUpCellRetainSelection, m, D) ? (ee -= 1, Z = !0) : $e(U.goRightCellRetainSelection, m, D) ? (K += 1, Z = !0) : $e(U.goLeftCellRetainSelection, m, D) ? (K -= 1, Z = !0) : $e(U.goToLastRow, m, D) ? ee = S - 1 : $e(U.goToFirstRow, m, D) ? ee = Number.MIN_SAFE_INTEGER : $e(U.goToLastColumn, m, D) ? K = Number.MAX_SAFE_INTEGER : $e(U.goToFirstColumn, m, D) ? K = Number.MIN_SAFE_INTEGER : (Se === "rect" || Se === "multi-rect") && ($e(U.selectGrowDown, m, D) ? yn([0, 1]) : $e(U.selectGrowUp, m, D) ? yn([0, -1]) : $e(U.selectGrowRight, m, D) ? yn([1, 0]) : $e(U.selectGrowLeft, m, D) ? yn([-1, 0]) : $e(U.selectToLastRow, m, D) ? yn([0, 2]) : $e(U.selectToFirstRow, m, D) ? yn([0, -2]) : $e(U.selectToLastColumn, m, D) ? yn([2, 0]) : $e(U.selectToFirstColumn, m, D) && yn([-2, 0])), de = D.didMatch);
    const ye = Gn(K, ee, !1, Z), fe = D.didMatch;
    return fe && (ye || !de || Di) && L(), fe;
  }, [
    Jr,
    X,
    pn,
    ve,
    Oe,
    Se,
    j,
    S,
    Gn,
    Yt,
    It,
    y.length,
    q,
    Di,
    lr,
    ae,
    ue,
    bt,
    Xi,
    Ir,
    M,
    Mr,
    nu,
    tu,
    yn
  ]), ei = p.useCallback((m) => {
    let L = !1;
    if (pe !== void 0 && pe({
      ...m,
      cancel: () => {
        L = !0;
      }
    }), L || ru(m) || X.current === void 0)
      return;
    const [D, B] = X.current.cell, W = wt.current;
    if (Be && !m.metaKey && !m.ctrlKey && X.current !== void 0 && m.key.length === 1 && /[ -~]/g.test(m.key) && m.bounds !== void 0 && gi(P([D - j, Math.max(0, Math.min(B, S - 1))]))) {
      if ((!bt || B !== S) && (W.y > B || B > W.y + W.height || W.x > D || D > W.x + W.width))
        return;
      Mr(m.bounds, !0, m.key), m.stopPropagation(), m.preventDefault();
    }
  }, [
    Be,
    pe,
    ru,
    X,
    P,
    j,
    S,
    bt,
    Mr
  ]), $p = p.useCallback((m, L) => {
    const D = m.location[0] - j;
    if (m.kind === "header" && (se == null || se(D, { ...m, preventDefault: L })), m.kind === nn) {
      if (D < 0)
        return;
      A == null || A(D, { ...m, preventDefault: L });
    }
    if (m.kind === "cell") {
      const [B, W] = m.location;
      H == null || H([D, W], {
        ...m,
        preventDefault: L
      }), C1(X, m.location) || Gn(B, W, !1, !1);
    }
  }, [
    X,
    H,
    A,
    se,
    j,
    Gn
  ]), Zo = p.useCallback(async (m) => {
    var U, K, ee;
    if (!pn.paste)
      return;
    function L(Z, de, ye, fe) {
      var _e, Je;
      const Re = typeof ye == "object" ? (ye == null ? void 0 : ye.join(`
`)) ?? "" : (ye == null ? void 0 : ye.toString()) ?? "";
      if (!zr(Z) && gi(Z) && Z.readonly !== !0) {
        const Te = _ == null ? void 0 : _(Re, Z);
        if (Te !== void 0 && qr(Te))
          return tw.NODE_ENV !== "production" && Te.kind !== Z.kind && console.warn("Coercion should not change cell kind."), {
            location: de,
            value: Te
          };
        const xe = ge(Z);
        if (xe === void 0)
          return;
        if (xe.kind === he.Custom) {
          rn(Z.kind === he.Custom);
          const dt = (_e = xe.onPaste) == null ? void 0 : _e.call(xe, Re, Z.data);
          return dt === void 0 ? void 0 : {
            location: de,
            value: {
              ...Z,
              data: dt
            }
          };
        } else {
          const dt = (Je = xe.onPaste) == null ? void 0 : Je.call(xe, Re, Z, {
            formatted: fe,
            formattedString: typeof fe == "string" ? fe : fe == null ? void 0 : fe.join(`
`),
            rawValue: ye
          });
          return dt === void 0 ? void 0 : (rn(dt.kind === Z.kind), {
            location: de,
            value: dt
          });
        }
      }
    }
    const D = X.columns, B = X.rows, W = ((U = u.current) == null ? void 0 : U.contains(document.activeElement)) === !0 || ((K = a.current) == null ? void 0 : K.contains(document.activeElement)) === !0;
    let G;
    if (X.current !== void 0 ? G = [X.current.range.x, X.current.range.y] : D.length === 1 ? G = [D.first() ?? 0, 0] : B.length === 1 && (G = [j, B.first() ?? 0]), W && G !== void 0) {
      let Z, de;
      const ye = "text/plain", fe = "text/html";
      if (navigator.clipboard.read !== void 0) {
        const Te = await navigator.clipboard.read();
        for (const xe of Te) {
          if (xe.types.includes(fe)) {
            const Nt = await (await xe.getType(fe)).text(), Et = rg(Nt);
            if (Et !== void 0) {
              Z = Et;
              break;
            }
          }
          xe.types.includes(ye) && (de = await (await xe.getType(ye)).text());
        }
      } else if (navigator.clipboard.readText !== void 0)
        de = await navigator.clipboard.readText();
      else if (m !== void 0 && (m == null ? void 0 : m.clipboardData) !== null) {
        if (m.clipboardData.types.includes(fe)) {
          const Te = m.clipboardData.getData(fe);
          Z = rg(Te);
        }
        Z === void 0 && m.clipboardData.types.includes(ye) && (de = m.clipboardData.getData(ye));
      } else
        return;
      const [Re, _e] = G, Je = [];
      do {
        if (ce === void 0) {
          const Te = en(G), xe = de ?? (Z == null ? void 0 : Z.map((Nt) => Nt.map((Et) => Et.rawValue).join("	")).join("	")) ?? "", dt = L(Te, G, xe, void 0);
          dt !== void 0 && Je.push(dt);
          break;
        }
        if (Z === void 0) {
          if (de === void 0)
            return;
          Z = Ub(de);
        }
        if (ce === !1 || typeof ce == "function" && (ce == null ? void 0 : ce([G[0] - j, G[1]], Z.map((Te) => Te.map((xe) => {
          var dt;
          return ((dt = xe.rawValue) == null ? void 0 : dt.toString()) ?? "";
        })))) !== !0)
          return;
        for (const [Te, xe] of Z.entries()) {
          if (Te + _e >= S)
            break;
          for (const [dt, Nt] of xe.entries()) {
            const Et = [dt + Re, Te + _e], [bn, Tn] = Et;
            if (bn >= ze.length || Tn >= $t)
              continue;
            const wn = en(Et), En = L(wn, Et, Nt.rawValue, Nt.formatted);
            En !== void 0 && Je.push(En);
          }
        }
      } while (!1);
      un(Je), (ee = Kt.current) == null || ee.damage(Je.map((Te) => ({
        cell: Te.location
      })));
    }
  }, [
    _,
    ge,
    en,
    X,
    pn.paste,
    ze.length,
    un,
    $t,
    ce,
    j,
    S
  ]);
  Ht("paste", Zo, f, !1, !0);
  const ti = p.useCallback(async (m, L) => {
    var U, K;
    if (!pn.copy)
      return;
    const D = L === !0 || ((U = u.current) == null ? void 0 : U.contains(document.activeElement)) === !0 || ((K = a.current) == null ? void 0 : K.contains(document.activeElement)) === !0, B = X.columns, W = X.rows, G = (ee, Z) => {
      if (!He)
        og(ee, Z, m);
      else {
        const de = Z.map((ye) => ({
          kind: he.Text,
          data: y[ye].title,
          displayData: y[ye].title,
          allowOverlay: !1
        }));
        og([de, ...ee], Z, m);
      }
    };
    if (D && At !== void 0) {
      if (X.current !== void 0) {
        let ee = At(X.current.range, zt.current.signal);
        typeof ee != "object" && (ee = await ee()), G(ee, ur(X.current.range.x - j, X.current.range.x + X.current.range.width - j));
      } else if (W !== void 0 && W.length > 0) {
        const Z = [...W].map((de) => {
          const ye = At({
            x: j,
            y: de,
            width: y.length,
            height: 1
          }, zt.current.signal);
          return typeof ye == "object" ? ye[0] : ye().then((fe) => fe[0]);
        });
        if (Z.some((de) => de instanceof Promise)) {
          const de = await Promise.all(Z);
          G(de, ur(y.length));
        } else
          G(Z, ur(y.length));
      } else if (B.length > 0) {
        const ee = [], Z = [];
        for (const de of B) {
          let ye = At({
            x: de,
            y: 0,
            width: 1,
            height: S
          }, zt.current.signal);
          typeof ye != "object" && (ye = await ye()), ee.push(ye), Z.push(de - j);
        }
        if (ee.length === 1)
          G(ee[0], Z);
        else {
          const de = ee.reduce((ye, fe) => ye.map((Re, _e) => [...Re, ...fe[_e]]));
          G(de, Z);
        }
      }
    }
  }, [y, At, X, pn.copy, j, S, He]);
  Ht("copy", ti, f, !1, !1);
  const Np = p.useCallback(async (m) => {
    var D, B;
    if (!(!pn.cut || !(((D = u.current) == null ? void 0 : D.contains(document.activeElement)) === !0 || ((B = a.current) == null ? void 0 : B.contains(document.activeElement)) === !0)) && (await ti(m), X.current !== void 0)) {
      let W = {
        current: {
          cell: X.current.cell,
          range: X.current.range,
          rangeStack: []
        },
        rows: at.empty(),
        columns: at.empty()
      };
      const G = q == null ? void 0 : q(W);
      if (G === !1 || (W = G === !0 ? W : G, W.current === void 0))
        return;
      lr(W.current.range);
    }
  }, [lr, X, pn.cut, ti, q]);
  Ht("cut", Np, f, !1, !1);
  const Bp = p.useCallback((m, L) => {
    if (z !== void 0) {
      j !== 0 && (m = m.map((W) => [W[0] - j, W[1]])), z(m, L);
      return;
    }
    if (m.length === 0 || L === -1)
      return;
    const [D, B] = m[L];
    h.current !== void 0 && h.current[0] === D && h.current[1] === B || (h.current = [D, B], Gn(D, B, !1, !1));
  }, [z, j, Gn]), [Ki, Gi] = ((uu = mt == null ? void 0 : mt.current) == null ? void 0 : uu.cell) ?? [], Vi = p.useRef(Tt);
  Vi.current = Tt, p.useLayoutEffect(() => {
    var m, L, D, B;
    !et.current && Ki !== void 0 && Gi !== void 0 && (Ki !== ((L = (m = Yn.current) == null ? void 0 : m.current) == null ? void 0 : L.cell[0]) || Gi !== ((B = (D = Yn.current) == null ? void 0 : D.current) == null ? void 0 : B.cell[1])) && Vi.current(Ki, Gi), et.current = !1;
  }, [Ki, Gi]);
  const iu = X.current !== void 0 && (X.current.cell[0] >= ze.length || X.current.cell[1] >= $t);
  p.useLayoutEffect(() => {
    iu && Yt(lo, !1);
  }, [iu, Yt]);
  const Wp = p.useMemo(() => bt === !0 && (Ue == null ? void 0 : Ue.tint) === !0 ? at.fromSingleSelection($t - 1) : at.empty(), [$t, bt, Ue == null ? void 0 : Ue.tint]), jp = p.useCallback((m) => typeof Dt == "boolean" ? Dt : (Dt == null ? void 0 : Dt(m - j)) ?? !0, [j, Dt]), Up = p.useMemo(() => {
    if (Uo === void 0 || a.current === null)
      return null;
    const { bounds: m, group: L } = Uo, D = a.current.getBoundingClientRect();
    return p.createElement(Db, { bounds: m, group: L, canvasBounds: D, onClose: () => Xo(void 0), onFinish: (B) => {
      Xo(void 0), $ == null || $(L, B);
    } });
  }, [$, Uo]), Xp = Math.min(ze.length, We + (Zt ? 1 : 0));
  p.useImperativeHandle(t, () => ({
    appendRow: (m, L) => Ir(m + j, L),
    updateCells: (m) => {
      var L;
      return j !== 0 && (m = m.map((D) => ({ cell: [D.cell[0] + j, D.cell[1]] }))), (L = Kt.current) == null ? void 0 : L.damage(m);
    },
    getBounds: (m, L) => {
      var D;
      if (!((a == null ? void 0 : a.current) === null || (u == null ? void 0 : u.current) === null)) {
        if (m === void 0 && L === void 0) {
          const B = a.current.getBoundingClientRect(), W = B.width / u.current.clientWidth;
          return {
            x: B.x - u.current.scrollLeft * W,
            y: B.y - u.current.scrollTop * W,
            width: u.current.scrollWidth * W,
            height: u.current.scrollHeight * W
          };
        }
        return (D = Kt.current) == null ? void 0 : D.getBounds((m ?? 0) + j, L);
      }
    },
    focus: () => {
      var m;
      return (m = Kt.current) == null ? void 0 : m.focus();
    },
    emit: async (m) => {
      switch (m) {
        case "delete":
          ei({
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
          ei({
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
          ei({
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
          await ti(void 0, !0);
          break;
        case "paste":
          await Zo();
          break;
      }
    },
    scrollTo: Tt,
    remeasureColumns: (m) => {
      for (const L of m)
        Yi(L + j);
    }
  }), [Ir, Yi, ti, ei, Zo, j, Tt]);
  const [ou, au] = _n ?? [], Yp = p.useCallback((m) => {
    const [L, D] = m;
    if (D === -1) {
      ve !== "none" && (ae(at.fromSingleSelection(L), void 0, !1), Ut());
      return;
    }
    ou === L && au === D || (J({
      cell: m,
      range: { x: L, y: D, width: 1, height: 1 }
    }, !0, !1, "keyboard-nav"), Tt(L, D));
  }, [ve, Ut, Tt, ou, au, J, ae]), [Kp, Gp] = p.useState(!1), su = p.useRef(Eg((m) => {
    Gp(m);
  }, 5)), Vp = p.useCallback(() => {
    su.current(!0), X.current === void 0 && X.columns.length === 0 && X.rows.length === 0 && l === void 0 && J({
      cell: [j, Ni],
      range: {
        x: j,
        y: Ni,
        width: 1,
        height: 1
      }
    }, !0, !1, "keyboard-select");
  }, [Ni, X, l, j, J]), Zp = p.useCallback(() => {
    su.current(!1);
  }, []), [Qp, Jp] = p.useMemo(() => {
    let m;
    const L = (yt == null ? void 0 : yt.scrollbarWidthOverride) ?? lc(), D = S + (bt ? 1 : 0);
    if (typeof jt == "number")
      m = Fe + D * jt;
    else {
      let W = 0;
      const G = Math.min(D, 10);
      for (let U = 0; U < G; U++)
        W += jt(U);
      W = Math.floor(W / G), m = Fe + D * W;
    }
    m += L;
    const B = ze.reduce((W, G) => G.width + W, 0) + L;
    return [`${Math.min(1e5, B)}px`, `${Math.min(1e5, m)}px`];
  }, [ze, yt == null ? void 0 : yt.scrollbarWidthOverride, jt, S, bt, Fe]), e0 = p.useMemo(() => q1(ne), [ne]);
  return p.createElement(
    H1.Provider,
    { value: ne },
    p.createElement(
      Gb,
      { style: e0, className: Y, inWidth: k ?? Qp, inHeight: I ?? Jp },
      p.createElement(Ib, { fillHandle: pt, drawFocusRing: Ot, experimental: yt, fixedShadowX: Pi, fixedShadowY: Wn, getRowThemeOverride: d, headerIcons: Ln, imageWindowLoader: Fn, initialSize: vr, isDraggable: Ai, onDragLeave: Oi, onRowMoved: xn, overscrollX: Fo, overscrollY: zi, preventDiagonalScrolling: wr, rightElement: rr, rightElementProps: jn, smoothScrollX: Li, smoothScrollY: Ao, className: Y, enableGroups: rt, onCanvasFocused: Vp, onCanvasBlur: Zp, canvasRef: a, onContextMenu: $p, theme: ne, cellXOffset: or, cellYOffset: Ni, accessibilityHeight: _t.height, onDragEnd: Fp, columns: ze, nonGrowWidth: ke, drawHeader: $o, onColumnProposeMove: T, drawCell: No, disabledRows: Wp, freezeColumns: Xp, lockColumns: j, firstColAccessible: j === 0, getCellContent: en, minColumnWidth: Vt, maxColumnWidth: gn, searchInputRef: s, showSearch: Kr, onSearchClose: Ho, highlightRegions: Tp, getCellsForSelection: At, getGroupDetails: Wo, headerHeight: xr, isFocused: Kp, groupHeaderHeight: rt ? Yr : 0, freezeTrailingRows: Qe + (bt && (Ue == null ? void 0 : Ue.sticky) === !0 ? 1 : 0), hasAppendRow: bt, onColumnResize: mn, onColumnResizeEnd: zo, onColumnResizeStart: _r, onCellFocused: Yp, onColumnMoved: Dp, onDragStart: Lp, onHeaderMenuClick: Ap, onItemHovered: Vo, isFilling: (l == null ? void 0 : l.fillHandle) === !0, onMouseMove: Pp, onKeyDown: ei, onKeyUp: we, onMouseDown: Ep, onMouseUp: Ip, onDragOverCell: hn, onDrop: Ye, onSearchResultsChanged: Bp, onVisibleRegionChanged: Op, clientSize: me, rowHeight: jt, searchResults: le, searchValue: re, onSearchValueChange: oe, rows: $t, scrollRef: u, selection: X, translateX: _t.tx, translateY: _t.ty, verticalBorder: jp, gridRef: Kt, getCellRenderer: ge }),
      Up,
      i !== void 0 && p.createElement(
        p.Suspense,
        { fallback: null },
        p.createElement(nw, { ...i, validateCell: Gr, bloom: w, id: zp, getCellRenderer: ge, className: (yt == null ? void 0 : yt.isSubGrid) === !0 ? "click-outside-ignore" : void 0, provideEditor: gt, imageEditorOverride: g, onFinishEditing: Hp, markdownDivCreateNode: v, isOutsideClick: Fi })
      )
    )
  );
}, aw = p.forwardRef(ow), lg = 20, sw = {
  getAccessibilityString: (e) => {
    var t;
    return ((t = e.data) == null ? void 0 : t.toString()) ?? "false";
  },
  kind: he.Boolean,
  needsHover: !0,
  useLabel: !1,
  needsHoverPosition: !0,
  measure: () => 50,
  draw: (e) => lw(e, e.cell.data, sc(e.cell), e.cell.maxSize ?? lg),
  onDelete: (e) => ({
    ...e,
    data: !1
  }),
  onClick: (e) => {
    const { cell: t, posX: n, posY: r, bounds: i, theme: o } = e, { width: s, height: a, x: l, y: c } = i, u = t.maxSize ?? lg, h = Math.floor(i.y + a / 2), f = Pg(u, a, o.cellVerticalPadding), g = Ig(t.contentAlign ?? "center", l, s, o.cellHorizontalPadding, f), d = Mg(g, h, f), v = Ag(l + n, c + r, d);
    if (sc(t) && v)
      return {
        ...t,
        data: _p(t.data)
      };
  },
  onPaste: (e, t) => {
    let n = fo;
    return e.toLowerCase() === "true" ? n = !0 : e.toLowerCase() === "false" ? n = !1 : e.toLowerCase() === "indeterminate" && (n = Rc), n === t.data ? void 0 : {
      ...t,
      data: n
    };
  }
};
function lw(e, t, n, r) {
  if (!n && t === fo)
    return;
  const { ctx: i, hoverAmount: o, theme: s, rect: a, highlighted: l, hoverX: c, hoverY: u, cell: { contentAlign: h } } = e, { x: f, y: g, width: d, height: v } = a, k = 0.35;
  let I = n ? 1 - k + k * o : 0.4;
  t === fo && (I *= o), I !== 0 && (i.globalAlpha = I, Uc(i, s, t, f, g, d, v, l, c, u, r, h), i.globalAlpha = 1);
}
const cw = /* @__PURE__ */ an("div")({
  name: "BubblesOverlayEditorStyle",
  class: "gdg-b1ygi5by",
  propsAsIs: !1
}), uw = (e) => {
  const { bubbles: t } = e;
  return p.createElement(
    cw,
    null,
    t.map((n, r) => p.createElement("div", { key: r, className: "boe-bubble" }, n)),
    p.createElement("textarea", { className: "gdg-input", autoFocus: !0 })
  );
}, fw = {
  getAccessibilityString: (e) => Og(e.data),
  kind: he.Bubble,
  needsHover: !1,
  useLabel: !1,
  needsHoverPosition: !1,
  measure: (e, t, n) => t.data.reduce((r, i) => e.measureText(i).width + r + 20, 0) + 2 * n.cellHorizontalPadding - 4,
  draw: (e) => hw(e, e.cell.data),
  provideEditor: () => (e) => {
    const { value: t } = e;
    return p.createElement(uw, { bubbles: t.data });
  },
  onPaste: () => {
  }
}, dw = 4;
function hw(e, t) {
  const { rect: n, theme: r, ctx: i, highlighted: o } = e, { x: s, y: a, width: l, height: c } = n, u = 20, h = 8, f = dw;
  let g = s + r.cellHorizontalPadding;
  const d = [];
  for (const v of t) {
    if (g > s + l)
      break;
    const k = Mi(v, i, r.baseFontFull).width;
    d.push({
      x: g,
      width: k
    }), g += k + h * 2 + f;
  }
  i.beginPath();
  for (const v of d)
    In(i, v.x, a + (c - u) / 2, v.width + h * 2, u, r.roundingRadius ?? u / 2);
  i.fillStyle = o ? r.bgBubbleSelected : r.bgBubble, i.fill();
  for (const [v, k] of d.entries())
    i.beginPath(), i.fillStyle = r.textBubble, i.fillText(t[v], k.x + h, a + c / 2 + tr(i, r));
}
const gw = /* @__PURE__ */ an("div")({
  name: "DrilldownOverlayEditorStyle",
  class: "gdg-d4zsq0x",
  propsAsIs: !1
}), pw = (e) => {
  const {
    drilldowns: t
  } = e;
  return p.createElement(gw, null, t.map((n, r) => p.createElement("div", {
    key: r,
    className: "doe-bubble"
  }, n.img !== void 0 && p.createElement("img", {
    src: n.img
  }), p.createElement("div", null, n.text))));
}, mw = {
  getAccessibilityString: (e) => Og(e.data.map((t) => t.text)),
  kind: he.Drilldown,
  needsHover: !1,
  useLabel: !1,
  needsHoverPosition: !1,
  measure: (e, t, n) => t.data.reduce((r, i) => e.measureText(i.text).width + r + 20 + (i.img !== void 0 ? 18 : 0), 0) + 2 * n.cellHorizontalPadding - 4,
  draw: (e) => bw(e, e.cell.data),
  provideEditor: () => (e) => {
    const { value: t } = e;
    return p.createElement(pw, { drilldowns: t.data });
  },
  onPaste: () => {
  }
}, vw = 4, nc = {};
function yw(e, t, n, r) {
  const i = Math.ceil(window.devicePixelRatio), o = 5, s = n - o * 2, a = 4, l = n * i, c = r + o, u = r * 3, h = (u + o * 2) * i, f = `${e},${t},${i},${n}`;
  if (nc[f] !== void 0)
    return {
      el: nc[f],
      height: l,
      width: h,
      middleWidth: a * i,
      sideWidth: c * i,
      padding: o * i,
      dpr: i
    };
  const g = document.createElement("canvas"), d = g.getContext("2d");
  return d === null ? null : (g.width = h, g.height = l, d.scale(i, i), nc[f] = g, d.beginPath(), In(d, o, o, u, s, r), d.shadowColor = "rgba(24, 25, 34, 0.4)", d.shadowBlur = 1, d.fillStyle = e, d.fill(), d.shadowColor = "rgba(24, 25, 34, 0.3)", d.shadowOffsetY = 1, d.shadowBlur = 5, d.fillStyle = e, d.fill(), d.shadowOffsetY = 0, d.shadowBlur = 0, d.shadowBlur = 0, d.beginPath(), In(d, o + 0.5, o + 0.5, u, s, r), d.strokeStyle = t, d.lineWidth = 1, d.stroke(), {
    el: g,
    height: l,
    width: h,
    sideWidth: c * i,
    middleWidth: r * i,
    padding: o * i,
    dpr: i
  });
}
function bw(e, t) {
  const { rect: n, theme: r, ctx: i, imageLoader: o, col: s, row: a } = e, { x: l, width: c } = n, u = r.baseFontFull, h = Vg(i, u), f = Math.min(n.height, Math.max(16, Math.ceil(h * r.lineHeight) * 2)), g = Math.floor(n.y + (n.height - f) / 2), d = f - 10, v = 8, k = vw;
  let I = l + r.cellHorizontalPadding;
  const y = r.roundingRadius ?? 6, S = yw(r.bgCell, r.drilldownBorder, f, y), P = [];
  for (const b of t) {
    if (I > l + c)
      break;
    const O = Mi(b.text, i, u).width;
    let E = 0;
    b.img !== void 0 && o.loadOrGetImage(b.img, s, a) !== void 0 && (E = d - 8 + 4);
    const _ = O + E + v * 2;
    P.push({
      x: I,
      width: _
    }), I += _ + k;
  }
  if (S !== null) {
    const { el: b, height: M, middleWidth: O, sideWidth: E, width: _, dpr: F, padding: R } = S, w = E / F, x = R / F;
    for (const T of P) {
      const C = Math.floor(T.x), N = Math.floor(T.width), H = N - (w - x) * 2;
      i.imageSmoothingEnabled = !1, i.drawImage(b, 0, 0, E, M, C - x, g, w, f), H > 0 && i.drawImage(b, E, 0, O, M, C + (w - x), g, H, f), i.drawImage(b, _ - E, 0, E, M, C + N - (w - x), g, w, f), i.imageSmoothingEnabled = !0;
    }
  }
  i.beginPath();
  for (const [b, M] of P.entries()) {
    const O = t[b];
    let E = M.x + v;
    if (O.img !== void 0) {
      const _ = o.loadOrGetImage(O.img, s, a);
      if (_ !== void 0) {
        const F = d - 8;
        let R = 0, w = 0, x = _.width, T = _.height;
        x > T ? (R += (x - T) / 2, x = T) : T > x && (w += (T - x) / 2, T = x), i.beginPath(), In(i, E, g + f / 2 - F / 2, F, F, r.roundingRadius ?? 3), i.save(), i.clip(), i.drawImage(_, R, w, x, T, E, g + f / 2 - F / 2, F, F), i.restore(), E += F + 4;
      }
    }
    i.beginPath(), i.fillStyle = r.textBubble, i.fillText(O.text, E, g + f / 2 + tr(i, r));
  }
}
const ww = {
  getAccessibilityString: (e) => e.data.join(", "),
  kind: he.Image,
  needsHover: !1,
  useLabel: !1,
  needsHoverPosition: !1,
  draw: (e) => Sw(e, e.cell.displayData ?? e.cell.data, e.cell.rounding ?? e.theme.roundingRadius ?? 4, e.cell.contentAlign),
  measure: (e, t) => t.data.length * 50,
  onDelete: (e) => ({
    ...e,
    data: []
  }),
  provideEditor: () => (e) => {
    const { value: t, onFinishedEditing: n, imageEditorOverride: r } = e, i = r ?? _m;
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
}, rc = 4;
function Sw(e, t, n, r) {
  const { rect: i, col: o, row: s, theme: a, ctx: l, imageLoader: c } = e, { x: u, y: h, height: f, width: g } = i, d = f - a.cellVerticalPadding * 2, v = [];
  let k = 0;
  for (let y = 0; y < t.length; y++) {
    const S = t[y];
    if (S.length === 0)
      continue;
    const P = c.loadOrGetImage(S, o, s);
    if (P !== void 0) {
      v[y] = P;
      const b = P.width * (d / P.height);
      k += b + rc;
    }
  }
  if (k === 0)
    return;
  k -= rc;
  let I = u + a.cellHorizontalPadding;
  r === "right" ? I = Math.floor(u + g - a.cellHorizontalPadding - k) : r === "center" && (I = Math.floor(u + g / 2 - k / 2));
  for (const y of v) {
    if (y === void 0)
      continue;
    const S = y.width * (d / y.height);
    n > 0 && (l.beginPath(), In(l, I, h + a.cellVerticalPadding, S, d, n), l.save(), l.clip()), l.drawImage(y, I, h + a.cellVerticalPadding, S, d), n > 0 && l.restore(), I += S + rc;
  }
}
function Cw(e, t) {
  let n = e * 49632 + t * 325176;
  return n ^= n << 13, n ^= n >> 17, n ^= n << 5, n / 4294967295 * 2;
}
const kw = {
  getAccessibilityString: () => "",
  kind: he.Loading,
  needsHover: !1,
  useLabel: !1,
  needsHoverPosition: !1,
  measure: () => 120,
  draw: (e) => {
    const { cell: t, col: n, row: r, ctx: i, rect: o, theme: s } = e;
    if (t.skeletonWidth === void 0 || t.skeletonWidth === 0)
      return;
    let a = t.skeletonWidth;
    t.skeletonWidthVariability !== void 0 && t.skeletonWidthVariability > 0 && (a += Math.round(Cw(n, r) * t.skeletonWidthVariability));
    const l = s.cellHorizontalPadding, c = t.skeletonHeight ?? Math.min(18, o.height - 2 * s.cellVerticalPadding);
    In(i, o.x + l, o.y + (o.height - c) / 2, a, c, s.roundingRadius ?? 3), i.fillStyle = dr(s.textDark, 0.1), i.fill();
  },
  onPaste: () => {
  }
}, xw = () => (e) => e.targetWidth, cg = /* @__PURE__ */ an("div")({
  name: "MarkdownOverlayEditorStyle",
  class: "gdg-m1pnx84e",
  propsAsIs: !1,
  vars: {
    "m1pnx84e-0": [xw(), "px"]
  }
}), Rw = (e) => {
  const { value: t, onChange: n, forceEditMode: r, createNode: i, targetRect: o, onFinish: s, validatedSelection: a } = e, l = t.data, c = t.readonly === !0, [u, h] = p.useState(l === "" || r), f = p.useCallback(() => {
    h((d) => !d);
  }, []), g = l ? "gdg-ml-6" : "";
  return u ? p.createElement(
    cg,
    { targetWidth: o.width - 20 },
    p.createElement(Mo, { autoFocus: !0, highlight: !1, validatedSelection: a, value: l, onKeyDown: (d) => {
      d.key === "Enter" && d.stopPropagation();
    }, onChange: n }),
    p.createElement(
      "div",
      { className: `gdg-edit-icon gdg-checkmark-hover ${g}`, onClick: () => s(t) },
      p.createElement(bm, null)
    )
  ) : p.createElement(
    cg,
    { targetWidth: o.width },
    p.createElement(u1, { contents: l, createNode: i }),
    !c && p.createElement(
      p.Fragment,
      null,
      p.createElement("div", { className: "spacer" }),
      p.createElement(
        "div",
        { className: `gdg-edit-icon gdg-edit-hover ${g}`, onClick: f },
        p.createElement(Mc, null)
      )
    ),
    p.createElement("textarea", { className: "gdg-md-edit-textarea gdg-input", autoFocus: !0 })
  );
}, _w = {
  getAccessibilityString: (e) => {
    var t;
    return ((t = e.data) == null ? void 0 : t.toString()) ?? "";
  },
  kind: he.Markdown,
  needsHover: !1,
  needsHoverPosition: !1,
  drawPrep: Ii,
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
    return p.createElement(Rw, { onFinish: i, targetRect: r, value: n, validatedSelection: a, onChange: (l) => t({
      ...n,
      data: l.target.value
    }), forceEditMode: s, createNode: o });
  },
  onPaste: (e, t) => e === t.data ? void 0 : { ...t, data: e }
}, Tw = {
  getAccessibilityString: (e) => e.row.toString(),
  kind: dn.Marker,
  needsHover: !0,
  needsHoverPosition: !1,
  drawPrep: Ew,
  measure: () => 44,
  draw: (e) => Iw(e, e.cell.row, e.cell.checked, e.cell.markerKind, e.cell.drawHandle, e.cell.checkboxStyle),
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
function Ew(e, t) {
  const { ctx: n, theme: r } = e, i = r.markerFontFull, o = t ?? {};
  return (o == null ? void 0 : o.font) !== i && (n.font = i, o.font = i), o.deprep = Mw, n.textAlign = "center", o;
}
function Mw(e) {
  const { ctx: t } = e;
  t.textAlign = "start";
}
function Iw(e, t, n, r, i, o) {
  const { ctx: s, rect: a, hoverAmount: l, theme: c } = e, { x: u, y: h, width: f, height: g } = a, d = n ? 1 : r === "checkbox-visible" ? 0.6 + 0.4 * l : l;
  if (r !== "number" && d > 0) {
    s.globalAlpha = d;
    const v = 7 * (n ? l : 1);
    if (Uc(s, c, n, i ? u + v : u, h, i ? f - v : f, g, !0, void 0, void 0, 18, "center", o), i) {
      s.globalAlpha = l, s.beginPath();
      for (const k of [3, 6])
        for (const I of [-5, -1, 3])
          s.rect(u + k, h + g / 2 + I, 2, 2);
      s.fillStyle = c.textLight, s.fill(), s.beginPath();
    }
    s.globalAlpha = 1;
  }
  if (r === "number" || r === "both" && !n) {
    const v = t.toString(), k = c.markerFontFull, I = u + f / 2;
    r === "both" && l !== 0 && (s.globalAlpha = 1 - l), s.fillStyle = c.textLight, s.font = k, s.fillText(v, I, h + g / 2 + tr(s, k)), l !== 0 && (s.globalAlpha = 1);
  }
}
const Pw = {
  getAccessibilityString: () => "",
  kind: dn.NewRow,
  needsHover: !0,
  needsHoverPosition: !1,
  measure: () => 200,
  draw: (e) => Aw(e, e.cell.hint, e.cell.icon),
  onPaste: () => {
  }
};
function Aw(e, t, n) {
  const { ctx: r, rect: i, hoverAmount: o, theme: s, spriteManager: a } = e, { x: l, y: c, width: u, height: h } = i;
  r.beginPath(), r.globalAlpha = o, r.rect(l + 1, c + 1, u, h - 2), r.fillStyle = s.bgHeaderHovered, r.fill(), r.globalAlpha = 1, r.beginPath();
  const f = t !== "";
  let g = 0;
  if (n !== void 0) {
    const v = h - 8, k = l + 8 / 2, I = c + 8 / 2;
    a.drawSprite(n, "normal", r, k, I, v, s, f ? 1 : o), g = v;
  } else {
    g = 24;
    const d = 12, v = f ? d : o * d, k = f ? 0 : (1 - o) * d * 0.5, I = s.cellHorizontalPadding + 4;
    v > 0 && (r.moveTo(l + I + k, c + h / 2), r.lineTo(l + I + k + v, c + h / 2), r.moveTo(l + I + k + v * 0.5, c + h / 2 - v * 0.5), r.lineTo(l + I + k + v * 0.5, c + h / 2 + v * 0.5), r.lineWidth = 2, r.strokeStyle = s.bgIconHeader, r.lineCap = "round", r.stroke());
  }
  r.fillStyle = s.textMedium, r.fillText(t, g + l + s.cellHorizontalPadding + 0.5, c + h / 2 + tr(r, s)), r.beginPath();
}
const Ow = p.lazy(async () => await import("/routelit/routelit_glide_data_grid/number-overlay-editor-CQjWzn2v.js")), Dw = {
  getAccessibilityString: (e) => {
    var t;
    return ((t = e.data) == null ? void 0 : t.toString()) ?? "";
  },
  kind: he.Number,
  needsHover: !1,
  needsHoverPosition: !1,
  useLabel: !0,
  drawPrep: Ii,
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
      p.createElement(Ow, { highlight: t, disabled: r.readonly === !0, value: r.data, fixedDecimals: r.fixedDecimals, allowNegative: r.allowNegative, thousandSeparator: r.thousandSeparator, decimalSeparator: r.decimalSeparator, validatedSelection: i, onChange: (o) => n({
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
}, Lw = {
  getAccessibilityString: () => "",
  measure: () => 108,
  kind: he.Protected,
  needsHover: !1,
  needsHoverPosition: !1,
  draw: Fw,
  onPaste: () => {
  }
};
function Fw(e) {
  const { ctx: t, theme: n, rect: r } = e, { x: i, y: o, height: s } = r;
  t.beginPath();
  const a = 2.5;
  let l = i + n.cellHorizontalPadding + a;
  const c = o + s / 2, u = Math.cos(Jf(30)) * a, h = Math.sin(Jf(30)) * a;
  for (let f = 0; f < 12; f++)
    t.moveTo(l, c - a), t.lineTo(l, c + a), t.moveTo(l + u, c - h), t.lineTo(l - u, c + h), t.moveTo(l - u, c - h), t.lineTo(l + u, c + h), l += 8;
  t.lineWidth = 1.1, t.lineCap = "square", t.strokeStyle = n.textLight, t.stroke();
}
const qw = {
  getAccessibilityString: (e) => {
    var t;
    return ((t = e.data) == null ? void 0 : t.toString()) ?? "";
  },
  kind: he.RowID,
  needsHover: !1,
  needsHoverPosition: !1,
  drawPrep: (e, t) => Ii(e, t, e.theme.textLight),
  draw: (e) => $n(e, e.cell.data, e.cell.contentAlign),
  measure: (e, t, n) => e.measureText(t.data).width + n.cellHorizontalPadding * 2,
  // eslint-disable-next-line react/display-name
  provideEditor: () => (e) => {
    const { isHighlighted: t, onChange: n, value: r, validatedSelection: i } = e;
    return St.createElement(Mo, { highlight: t, autoFocus: r.readonly !== !0, disabled: r.readonly !== !1, value: r.data, validatedSelection: i, onChange: (o) => n({
      ...r,
      data: o.target.value
    }) });
  },
  onPaste: () => {
  }
}, Hw = {
  getAccessibilityString: (e) => {
    var t;
    return ((t = e.data) == null ? void 0 : t.toString()) ?? "";
  },
  kind: he.Text,
  needsHover: (e) => e.hoverEffect === !0,
  needsHoverPosition: !1,
  drawPrep: Ii,
  useLabel: !0,
  draw: (e) => {
    const { cell: t, hoverAmount: n, hyperWrapping: r, ctx: i, rect: o, theme: s, overrideCursor: a } = e, { displayData: l, contentAlign: c, hoverEffect: u, allowWrapping: h } = t;
    if (u === !0 && n > 0) {
      i.textBaseline = "alphabetic";
      const f = s.cellHorizontalPadding, g = s.cellVerticalPadding, d = Mi(l, i, s.baseFontFull, "alphabetic"), v = o.height - g, k = Math.min(v, d.actualBoundingBoxAscent * 2.5);
      i.beginPath(), In(i, o.x + f / 2, o.y + (o.height - k) / 2 + 1, d.width + f * 3, k - 1, s.roundingRadius ?? 4), i.globalAlpha = n, i.fillStyle = dr(s.textDark, 0.1), i.fill(), i.globalAlpha = 1, i.fillStyle = s.textDark, i.textBaseline = "middle", a == null || a("text");
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
      return p.createElement(Mo, { style: e.allowWrapping === !0 ? { padding: "3px 8.5px" } : void 0, highlight: n, autoFocus: i.readonly !== !0, disabled: i.readonly === !0, altNewline: !0, value: i.data, validatedSelection: o, onChange: (s) => r({
        ...i,
        data: s.target.value
      }) });
    }
  }),
  onPaste: (e, t, n) => e === t.data ? void 0 : { ...t, data: e, displayData: n.formattedString ?? t.displayData }
}, zw = /* @__PURE__ */ an("div")({
  name: "UriOverlayEditorStyle",
  class: "gdg-u1rrojo",
  propsAsIs: !1
}), $w = (e) => {
  const { uri: t, onChange: n, forceEditMode: r, readonly: i, validatedSelection: o, preview: s } = e, [a, l] = p.useState(!i && (t === "" || r)), c = p.useCallback(() => {
    l(!0);
  }, []);
  return a ? p.createElement(Mo, { validatedSelection: o, highlight: !0, autoFocus: !0, value: t, onChange: n }) : p.createElement(
    zw,
    null,
    p.createElement("a", { className: "gdg-link-area", href: t, target: "_blank", rel: "noopener noreferrer" }, s),
    !i && p.createElement(
      "div",
      { className: "gdg-edit-icon", onClick: c },
      p.createElement(Mc, null)
    ),
    p.createElement("textarea", { className: "gdg-input", autoFocus: !0 })
  );
};
function ug(e, t, n, r) {
  let i = n.cellHorizontalPadding;
  const o = t.height / 2 - e.actualBoundingBoxAscent / 2, s = e.width, a = e.actualBoundingBoxAscent;
  return r === "right" ? i = t.width - s - n.cellHorizontalPadding : r === "center" && (i = t.width / 2 - s / 2), { x: i, y: o, width: s, height: a };
}
const Nw = {
  getAccessibilityString: (e) => {
    var t;
    return ((t = e.data) == null ? void 0 : t.toString()) ?? "";
  },
  kind: he.Uri,
  needsHover: (e) => e.hoverEffect === !0,
  needsHoverPosition: !0,
  useLabel: !0,
  drawPrep: Ii,
  draw: (e) => {
    const { cell: t, theme: n, overrideCursor: r, hoverX: i, hoverY: o, rect: s, ctx: a } = e, l = t.displayData ?? t.data, c = t.hoverEffect === !0;
    if (r !== void 0 && c && i !== void 0 && o !== void 0) {
      const u = Mi(l, a, n.baseFontFull), h = ug(u, s, n, t.contentAlign), { x: f, y: g, width: d, height: v } = h;
      if (i >= f - 4 && i <= f - 4 + d + 8 && o >= g - 4 && o <= g - 4 + v + 8) {
        const k = tr(a, n.baseFontFull);
        r("pointer");
        const I = 5, y = g - k;
        a.beginPath(), a.moveTo(s.x + f, Math.floor(s.y + y + v + I) + 0.5), a.lineTo(s.x + f + d, Math.floor(s.y + y + v + I) + 0.5), a.strokeStyle = n.linkColor, a.stroke(), a.save(), a.fillStyle = e.cellFillColor, $n({ ...e, rect: { ...s, x: s.x - 1 } }, l, t.contentAlign), $n({ ...e, rect: { ...s, x: s.x - 2 } }, l, t.contentAlign), $n({ ...e, rect: { ...s, x: s.x + 1 } }, l, t.contentAlign), $n({ ...e, rect: { ...s, x: s.x + 2 } }, l, t.contentAlign), a.restore();
      }
    }
    a.fillStyle = c ? n.linkColor : n.textDark, $n(e, l, t.contentAlign);
  },
  onClick: (e) => {
    const { cell: t, bounds: n, posX: r, posY: i, theme: o } = e, s = t.displayData ?? t.data;
    if (t.hoverEffect !== !0 || t.onClickUri === void 0)
      return;
    const a = M1(s, o.baseFontFull);
    if (a === void 0)
      return;
    const l = ug(a, n, o, t.contentAlign);
    Po({
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
    return p.createElement($w, { forceEditMode: r.readonly !== !0 && (i || e.hoverEffect === !0 && e.onClickUri !== void 0), uri: r.data, preview: r.displayData ?? r.data, validatedSelection: o, readonly: r.readonly === !0, onChange: (s) => n({
      ...r,
      data: s.target.value
    }) });
  },
  onPaste: (e, t, n) => e === t.data ? void 0 : { ...t, data: e, displayData: n.formattedString ?? t.displayData }
}, Bw = [
  Tw,
  Pw,
  sw,
  fw,
  mw,
  ww,
  kw,
  _w,
  Dw,
  Lw,
  qw,
  Hw,
  Nw
];
var ic, fg;
function Ww() {
  if (fg) return ic;
  fg = 1;
  var e = Tg(), t = hr(), n = "Expected a function";
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
  return ic = r, ic;
}
var jw = Ww();
const Uw = /* @__PURE__ */ er(jw), oc = [];
class Xw extends Qg {
  constructor() {
    super(...arguments);
    be(this, "imageLoaded", () => {
    });
    be(this, "loadedLocations", []);
    be(this, "cache", {});
    // eslint-disable-next-line unicorn/consistent-function-scoping
    be(this, "sendLoaded", Uw(() => {
      this.imageLoaded(new Ci(this.loadedLocations)), this.loadedLocations = [];
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
    const a = oc.pop() ?? new Image();
    let l = !1;
    const c = {
      img: void 0,
      cells: [kn(r, i)],
      url: n,
      cancel: () => {
        l || (l = !0, oc.length < 12 ? oc.unshift(a) : s || (a.src = ""));
      }
    }, u = new Promise((h) => a.addEventListener("load", () => h(null)));
    requestAnimationFrame(async () => {
      try {
        a.src = n, await u, await a.decode();
        const h = this.cache[o];
        if (h !== void 0 && !l) {
          h.img = a;
          for (const f of h.cells)
            this.loadedLocations.push(Bc(f));
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
const Yw = (e, t) => {
  const n = p.useMemo(() => ({ ...Bv, ...e.headerIcons }), [e.headerIcons]), r = p.useMemo(() => e.imageWindowLoader ?? new Xw(), [e.imageWindowLoader]);
  return p.createElement(aw, { ...e, renderers: Bw, headerIcons: n, ref: t, imageWindowLoader: r });
}, Kw = p.forwardRef(Yw);
function Gw(e, t) {
  if (e == null || t === "NoneType")
    return {
      kind: he.Text,
      allowOverlay: !1,
      readonly: !0,
      displayData: "",
      data: ""
    };
  switch (t) {
    case "int":
    case "float":
      return {
        kind: he.Number,
        allowOverlay: !1,
        readonly: !0,
        data: Number(e),
        displayData: String(e)
      };
    case "bool":
      return {
        kind: he.Boolean,
        allowOverlay: !1,
        readonly: !0,
        data: !!e
      };
    case "str":
    default:
      return {
        kind: he.Text,
        allowOverlay: !1,
        readonly: !0,
        displayData: String(e),
        data: String(e)
      };
  }
}
const Vw = ({
  data: e,
  columns: t,
  columnTypes: n,
  height: r = "auto",
  width: i = "stretch",
  hideIndex: o = !1,
  rowHeight: s,
  // selectionMode, // For future use
  columnConfig: a,
  // placeholder, // For future use
  onSelect: l,
  routelit: c
}) => {
  const u = Jo(() => t.map((v) => ({
    title: (a == null ? void 0 : a[v]) || v,
    id: v,
    width: 150
    // Default width
  })), [t, a]), h = du(
    (v) => {
      const [k, I] = v, y = e[I], S = t[k], P = y[S], b = n[S];
      return Gw(P, b);
    },
    [e, t, n]
  ), f = du(
    (v) => {
      if (l === "ignore") return;
      const k = {
        rows: v.rows.toArray(),
        columns: v.columns.toArray()
      };
      c.sendEvent("select", k);
    },
    [l, c]
  ), g = Jo(() => r === "auto" ? 400 : r === "stretch" ? "100%" : r, [r]), d = Jo(() => i === "stretch" ? "100%" : i, [i]);
  return /* @__PURE__ */ fu("div", { style: { height: g, width: d }, children: /* @__PURE__ */ fu(
    Kw,
    {
      width: "100%",
      height: "100%",
      columns: u,
      rows: e.length,
      getCellContent: h,
      onGridSelectionChange: f,
      rowHeight: s,
      rowMarkers: o ? "none" : "number",
      getCellsForSelection: !0
    }
  ) });
}, tS = () => null;
dg.register("grid_data_grid", Vw);
dg.forceUpdate();
export {
  Pb as C,
  tS as H,
  H1 as T,
  zr as a,
  N0 as b,
  qr as i,
  q1 as m,
  an as s
};
//# sourceMappingURL=index-1vNVG7YW.js.map
