var h0 = Object.defineProperty;
var g0 = (e, t, n) => t in e ? h0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var be = (e, t, n) => g0(e, typeof t != "symbol" ? t + "" : t, n);
import { useDispatcherWith as yg, componentStore as Sc } from "routelit-client";
import { jsx as go } from "react/jsx-runtime";
import * as p from "react";
import St, { useRef as qr, useState as Cc, useLayoutEffect as p0, useEffect as kc, useMemo as dr, useCallback as yi, memo as m0 } from "react";
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
function v0(e, t) {
  try {
    return e();
  } catch {
    return t;
  }
}
const vu = Object.prototype.hasOwnProperty;
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
        if (vu.call(e, n) && ++r && !vu.call(t, n) || !(n in t) || !Wr(e[n], t[n]))
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
var na, yu;
function y0() {
  if (yu) return na;
  yu = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(r, i) {
    return r != null && t.call(r, i);
  }
  return na = n, na;
}
var ra, bu;
function An() {
  if (bu) return ra;
  bu = 1;
  var e = Array.isArray;
  return ra = e, ra;
}
var ia, wu;
function wg() {
  if (wu) return ia;
  wu = 1;
  var e = typeof to == "object" && to && to.Object === Object && to;
  return ia = e, ia;
}
var oa, Su;
function Pn() {
  if (Su) return oa;
  Su = 1;
  var e = wg(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return oa = n, oa;
}
var aa, Cu;
function Ti() {
  if (Cu) return aa;
  Cu = 1;
  var e = Pn(), t = e.Symbol;
  return aa = t, aa;
}
var sa, ku;
function b0() {
  if (ku) return sa;
  ku = 1;
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
  return sa = o, sa;
}
var la, xu;
function w0() {
  if (xu) return la;
  xu = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return la = n, la;
}
var ca, Ru;
function Ei() {
  if (Ru) return ca;
  Ru = 1;
  var e = Ti(), t = b0(), n = w0(), r = "[object Null]", i = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function s(a) {
    return a == null ? a === void 0 ? i : r : o && o in Object(a) ? t(a) : n(a);
  }
  return ca = s, ca;
}
var ua, _u;
function Mi() {
  if (_u) return ua;
  _u = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return ua = e, ua;
}
var da, Tu;
function xo() {
  if (Tu) return da;
  Tu = 1;
  var e = Ei(), t = Mi(), n = "[object Symbol]";
  function r(i) {
    return typeof i == "symbol" || t(i) && e(i) == n;
  }
  return da = r, da;
}
var fa, Eu;
function xc() {
  if (Eu) return fa;
  Eu = 1;
  var e = An(), t = xo(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function i(o, s) {
    if (e(o))
      return !1;
    var a = typeof o;
    return a == "number" || a == "symbol" || a == "boolean" || o == null || t(o) ? !0 : r.test(o) || !n.test(o) || s != null && o in Object(s);
  }
  return fa = i, fa;
}
var ha, Mu;
function gr() {
  if (Mu) return ha;
  Mu = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return ha = e, ha;
}
var ga, Iu;
function Sg() {
  if (Iu) return ga;
  Iu = 1;
  var e = Ei(), t = gr(), n = "[object AsyncFunction]", r = "[object Function]", i = "[object GeneratorFunction]", o = "[object Proxy]";
  function s(a) {
    if (!t(a))
      return !1;
    var l = e(a);
    return l == r || l == i || l == n || l == o;
  }
  return ga = s, ga;
}
var pa, Au;
function S0() {
  if (Au) return pa;
  Au = 1;
  var e = Pn(), t = e["__core-js_shared__"];
  return pa = t, pa;
}
var ma, Pu;
function C0() {
  if (Pu) return ma;
  Pu = 1;
  var e = S0(), t = function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }();
  function n(r) {
    return !!t && t in r;
  }
  return ma = n, ma;
}
var va, Ou;
function Cg() {
  if (Ou) return va;
  Ou = 1;
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
  return va = n, va;
}
var ya, Du;
function k0() {
  if (Du) return ya;
  Du = 1;
  var e = Sg(), t = C0(), n = gr(), r = Cg(), i = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, s = Function.prototype, a = Object.prototype, l = s.toString, c = a.hasOwnProperty, u = RegExp(
    "^" + l.call(c).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function h(d) {
    if (!n(d) || t(d))
      return !1;
    var g = e(d) ? u : o;
    return g.test(r(d));
  }
  return ya = h, ya;
}
var ba, Lu;
function x0() {
  if (Lu) return ba;
  Lu = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return ba = e, ba;
}
var wa, Fu;
function pr() {
  if (Fu) return wa;
  Fu = 1;
  var e = k0(), t = x0();
  function n(r, i) {
    var o = t(r, i);
    return e(o) ? o : void 0;
  }
  return wa = n, wa;
}
var Sa, qu;
function Ro() {
  if (qu) return Sa;
  qu = 1;
  var e = pr(), t = e(Object, "create");
  return Sa = t, Sa;
}
var Ca, Hu;
function R0() {
  if (Hu) return Ca;
  Hu = 1;
  var e = Ro();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ca = t, Ca;
}
var ka, zu;
function _0() {
  if (zu) return ka;
  zu = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return ka = e, ka;
}
var xa, $u;
function T0() {
  if ($u) return xa;
  $u = 1;
  var e = Ro(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function i(o) {
    var s = this.__data__;
    if (e) {
      var a = s[o];
      return a === t ? void 0 : a;
    }
    return r.call(s, o) ? s[o] : void 0;
  }
  return xa = i, xa;
}
var Ra, Nu;
function E0() {
  if (Nu) return Ra;
  Nu = 1;
  var e = Ro(), t = Object.prototype, n = t.hasOwnProperty;
  function r(i) {
    var o = this.__data__;
    return e ? o[i] !== void 0 : n.call(o, i);
  }
  return Ra = r, Ra;
}
var _a, Bu;
function M0() {
  if (Bu) return _a;
  Bu = 1;
  var e = Ro(), t = "__lodash_hash_undefined__";
  function n(r, i) {
    var o = this.__data__;
    return this.size += this.has(r) ? 0 : 1, o[r] = e && i === void 0 ? t : i, this;
  }
  return _a = n, _a;
}
var Ta, Wu;
function I0() {
  if (Wu) return Ta;
  Wu = 1;
  var e = R0(), t = _0(), n = T0(), r = E0(), i = M0();
  function o(s) {
    var a = -1, l = s == null ? 0 : s.length;
    for (this.clear(); ++a < l; ) {
      var c = s[a];
      this.set(c[0], c[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = i, Ta = o, Ta;
}
var Ea, ju;
function A0() {
  if (ju) return Ea;
  ju = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ea = e, Ea;
}
var Ma, Uu;
function Rc() {
  if (Uu) return Ma;
  Uu = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Ma = e, Ma;
}
var Ia, Xu;
function _o() {
  if (Xu) return Ia;
  Xu = 1;
  var e = Rc();
  function t(n, r) {
    for (var i = n.length; i--; )
      if (e(n[i][0], r))
        return i;
    return -1;
  }
  return Ia = t, Ia;
}
var Aa, Gu;
function P0() {
  if (Gu) return Aa;
  Gu = 1;
  var e = _o(), t = Array.prototype, n = t.splice;
  function r(i) {
    var o = this.__data__, s = e(o, i);
    if (s < 0)
      return !1;
    var a = o.length - 1;
    return s == a ? o.pop() : n.call(o, s, 1), --this.size, !0;
  }
  return Aa = r, Aa;
}
var Pa, Yu;
function O0() {
  if (Yu) return Pa;
  Yu = 1;
  var e = _o();
  function t(n) {
    var r = this.__data__, i = e(r, n);
    return i < 0 ? void 0 : r[i][1];
  }
  return Pa = t, Pa;
}
var Oa, Ku;
function D0() {
  if (Ku) return Oa;
  Ku = 1;
  var e = _o();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return Oa = t, Oa;
}
var Da, Vu;
function L0() {
  if (Vu) return Da;
  Vu = 1;
  var e = _o();
  function t(n, r) {
    var i = this.__data__, o = e(i, n);
    return o < 0 ? (++this.size, i.push([n, r])) : i[o][1] = r, this;
  }
  return Da = t, Da;
}
var La, Zu;
function To() {
  if (Zu) return La;
  Zu = 1;
  var e = A0(), t = P0(), n = O0(), r = D0(), i = L0();
  function o(s) {
    var a = -1, l = s == null ? 0 : s.length;
    for (this.clear(); ++a < l; ) {
      var c = s[a];
      this.set(c[0], c[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = i, La = o, La;
}
var Fa, Ju;
function _c() {
  if (Ju) return Fa;
  Ju = 1;
  var e = pr(), t = Pn(), n = e(t, "Map");
  return Fa = n, Fa;
}
var qa, Qu;
function F0() {
  if (Qu) return qa;
  Qu = 1;
  var e = I0(), t = To(), n = _c();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return qa = r, qa;
}
var Ha, ed;
function q0() {
  if (ed) return Ha;
  ed = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return Ha = e, Ha;
}
var za, td;
function Eo() {
  if (td) return za;
  td = 1;
  var e = q0();
  function t(n, r) {
    var i = n.__data__;
    return e(r) ? i[typeof r == "string" ? "string" : "hash"] : i.map;
  }
  return za = t, za;
}
var $a, nd;
function H0() {
  if (nd) return $a;
  nd = 1;
  var e = Eo();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return $a = t, $a;
}
var Na, rd;
function z0() {
  if (rd) return Na;
  rd = 1;
  var e = Eo();
  function t(n) {
    return e(this, n).get(n);
  }
  return Na = t, Na;
}
var Ba, id;
function $0() {
  if (id) return Ba;
  id = 1;
  var e = Eo();
  function t(n) {
    return e(this, n).has(n);
  }
  return Ba = t, Ba;
}
var Wa, od;
function N0() {
  if (od) return Wa;
  od = 1;
  var e = Eo();
  function t(n, r) {
    var i = e(this, n), o = i.size;
    return i.set(n, r), this.size += i.size == o ? 0 : 1, this;
  }
  return Wa = t, Wa;
}
var ja, ad;
function Tc() {
  if (ad) return ja;
  ad = 1;
  var e = F0(), t = H0(), n = z0(), r = $0(), i = N0();
  function o(s) {
    var a = -1, l = s == null ? 0 : s.length;
    for (this.clear(); ++a < l; ) {
      var c = s[a];
      this.set(c[0], c[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = i, ja = o, ja;
}
var Ua, sd;
function B0() {
  if (sd) return Ua;
  sd = 1;
  var e = Tc(), t = "Expected a function";
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
  return n.Cache = e, Ua = n, Ua;
}
var Xa, ld;
function W0() {
  if (ld) return Xa;
  ld = 1;
  var e = B0(), t = 500;
  function n(r) {
    var i = e(r, function(s) {
      return o.size === t && o.clear(), s;
    }), o = i.cache;
    return i;
  }
  return Xa = n, Xa;
}
var Ga, cd;
function j0() {
  if (cd) return Ga;
  cd = 1;
  var e = W0(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(i) {
    var o = [];
    return i.charCodeAt(0) === 46 && o.push(""), i.replace(t, function(s, a, l, c) {
      o.push(l ? c.replace(n, "$1") : a || s);
    }), o;
  });
  return Ga = r, Ga;
}
var Ya, ud;
function U0() {
  if (ud) return Ya;
  ud = 1;
  function e(t, n) {
    for (var r = -1, i = t == null ? 0 : t.length, o = Array(i); ++r < i; )
      o[r] = n(t[r], r, t);
    return o;
  }
  return Ya = e, Ya;
}
var Ka, dd;
function X0() {
  if (dd) return Ka;
  dd = 1;
  var e = Ti(), t = U0(), n = An(), r = xo(), i = e ? e.prototype : void 0, o = i ? i.toString : void 0;
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
  return Ka = s, Ka;
}
var Va, fd;
function G0() {
  if (fd) return Va;
  fd = 1;
  var e = X0();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return Va = t, Va;
}
var Za, hd;
function kg() {
  if (hd) return Za;
  hd = 1;
  var e = An(), t = xc(), n = j0(), r = G0();
  function i(o, s) {
    return e(o) ? o : t(o, s) ? [o] : n(r(o));
  }
  return Za = i, Za;
}
var Ja, gd;
function Y0() {
  if (gd) return Ja;
  gd = 1;
  var e = Ei(), t = Mi(), n = "[object Arguments]";
  function r(i) {
    return t(i) && e(i) == n;
  }
  return Ja = r, Ja;
}
var Qa, pd;
function Ec() {
  if (pd) return Qa;
  pd = 1;
  var e = Y0(), t = Mi(), n = Object.prototype, r = n.hasOwnProperty, i = n.propertyIsEnumerable, o = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(s) {
    return t(s) && r.call(s, "callee") && !i.call(s, "callee");
  };
  return Qa = o, Qa;
}
var es, md;
function Mc() {
  if (md) return es;
  md = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(r, i) {
    var o = typeof r;
    return i = i ?? e, !!i && (o == "number" || o != "symbol" && t.test(r)) && r > -1 && r % 1 == 0 && r < i;
  }
  return es = n, es;
}
var ts, vd;
function Ic() {
  if (vd) return ts;
  vd = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return ts = t, ts;
}
var ns, yd;
function Mo() {
  if (yd) return ns;
  yd = 1;
  var e = xo();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return ns = t, ns;
}
var rs, bd;
function xg() {
  if (bd) return rs;
  bd = 1;
  var e = kg(), t = Ec(), n = An(), r = Mc(), i = Ic(), o = Mo();
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
  return rs = s, rs;
}
var is, wd;
function K0() {
  if (wd) return is;
  wd = 1;
  var e = y0(), t = xg();
  function n(r, i) {
    return r != null && t(r, i, e);
  }
  return is = n, is;
}
var V0 = K0();
const Z0 = /* @__PURE__ */ er(V0), po = null, Ac = void 0;
var ae;
(function(e) {
  e.Uri = "uri", e.Text = "text", e.Image = "image", e.RowID = "row-id", e.Number = "number", e.Bubble = "bubble", e.Boolean = "boolean", e.Loading = "loading", e.Markdown = "markdown", e.Drilldown = "drilldown", e.Protected = "protected", e.Custom = "custom";
})(ae || (ae = {}));
var Sd;
(function(e) {
  e.HeaderRowID = "headerRowID", e.HeaderCode = "headerCode", e.HeaderNumber = "headerNumber", e.HeaderString = "headerString", e.HeaderBoolean = "headerBoolean", e.HeaderAudioUri = "headerAudioUri", e.HeaderVideoUri = "headerVideoUri", e.HeaderEmoji = "headerEmoji", e.HeaderImage = "headerImage", e.HeaderUri = "headerUri", e.HeaderPhone = "headerPhone", e.HeaderMarkdown = "headerMarkdown", e.HeaderDate = "headerDate", e.HeaderTime = "headerTime", e.HeaderEmail = "headerEmail", e.HeaderReference = "headerReference", e.HeaderIfThenElse = "headerIfThenElse", e.HeaderSingleValue = "headerSingleValue", e.HeaderLookup = "headerLookup", e.HeaderTextTemplate = "headerTextTemplate", e.HeaderMath = "headerMath", e.HeaderRollup = "headerRollup", e.HeaderJoinStrings = "headerJoinStrings", e.HeaderSplitString = "headerSplitString", e.HeaderGeoDistance = "headerGeoDistance", e.HeaderArray = "headerArray", e.RowOwnerOverlay = "rowOwnerOverlay", e.ProtectedColumnOverlay = "protectedColumnOverlay";
})(Sd || (Sd = {}));
var mo;
(function(e) {
  e.Triangle = "triangle", e.Dots = "dots";
})(mo || (mo = {}));
function no(e) {
  return "width" in e && typeof e.width == "number";
}
async function Cd(e) {
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
function J0(e) {
  return Z0(e, "editor");
}
function cc(e) {
  return !(e.readonly ?? !1);
}
var fn;
(function(e) {
  e.NewRow = "new-row", e.Marker = "marker";
})(fn || (fn = {}));
function Q0(e) {
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
let kd;
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
    const n = typeof t == "number" ? [t, t + 1] : t, r = Q0([...this.items, n]);
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
be(zn, "empty", () => kd ?? (kd = new zn([]))), be(zn, "fromSingleSelection", (t) => zn.empty().add(t));
let rt = zn;
function em(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var tm = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, os = /* @__PURE__ */ em(
  function(e) {
    return tm.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), nm = function() {
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
}, xd = nm, bi = {}, rm = (e) => e.toUpperCase() === e, im = (e) => (t) => e.indexOf(t) === -1, Rg = (e, t) => {
  const n = {};
  return Object.keys(e).filter(im(t)).forEach((r) => {
    n[r] = e[r];
  }), n;
};
function om(e, t, n) {
  const r = Rg(t, n);
  if (!e) {
    const i = typeof os == "function" ? { default: os } : os;
    Object.keys(r).forEach((o) => {
      i.default(o) || delete r[o];
    });
  }
  return r;
}
var am = (e, t) => {
  if (bi.NODE_ENV !== "production") {
    if (typeof e == "string" || typeof e == "number" && isFinite(e))
      return;
    const n = typeof e == "object" ? JSON.stringify(e) : String(e);
    console.warn(
      `An interpolation evaluated to '${n}' in the component '${t}', which is probably a mistake. You should explicitly cast or transform the value to a string.`
    );
  }
}, sm = 0;
function Rd(e) {
  var t;
  let n = "";
  return bi.NODE_ENV === "test" && (n += `mocked-styled-${sm++}`, (t = e == null ? void 0 : e.__linaria) != null && t.className && (n += ` ${e.__linaria.className}`)), (r) => {
    if (bi.NODE_ENV !== "production" && bi.NODE_ENV !== "test" && Array.isArray(r))
      throw new Error(
        'Using the "styled" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly. See https://github.com/callstack/linaria#setup'
      );
    const i = (s, a) => {
      const { as: l = e, class: c = n } = s, u = r.propsAsIs === void 0 ? !(typeof l == "string" && l.indexOf("-") === -1 && !rm(l[0])) : r.propsAsIs, h = om(u, s, [
        "as",
        "class"
      ]);
      h.ref = a, h.className = r.atomic ? xd(r.class, h.className || c) : xd(h.className || c, r.class);
      const { vars: d } = r;
      if (d) {
        const g = {};
        for (const x in d) {
          const A = d[x], y = A[0], C = A[1] || "", P = typeof y == "function" ? y(s) : y;
          am(P, r.name), g[`--${x}`] = `${P}${C}`;
        }
        const f = h.style || {}, v = Object.keys(f);
        v.length > 0 && v.forEach((x) => {
          g[x] = f[x];
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
var an = bi.NODE_ENV !== "production" ? new Proxy(Rd, {
  get(e, t) {
    return e(t);
  }
}) : Rd;
const lm = /* @__PURE__ */ an("div")({
  name: "ImageOverlayEditorStyle",
  class: "gdg-i2iowwq",
  propsAsIs: !1
});
var as = {}, ri = {}, ro = {}, io = {}, oo = { exports: {} }, ao = { exports: {} }, ot = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _d;
function cm() {
  if (_d) return ot;
  _d = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, f = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function C(b) {
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
                case f:
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
    return C(b) === c;
  }
  return ot.AsyncMode = l, ot.ConcurrentMode = c, ot.ContextConsumer = a, ot.ContextProvider = s, ot.Element = t, ot.ForwardRef = u, ot.Fragment = r, ot.Lazy = f, ot.Memo = g, ot.Portal = n, ot.Profiler = o, ot.StrictMode = i, ot.Suspense = h, ot.isAsyncMode = function(b) {
    return P(b) || C(b) === l;
  }, ot.isConcurrentMode = P, ot.isContextConsumer = function(b) {
    return C(b) === a;
  }, ot.isContextProvider = function(b) {
    return C(b) === s;
  }, ot.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, ot.isForwardRef = function(b) {
    return C(b) === u;
  }, ot.isFragment = function(b) {
    return C(b) === r;
  }, ot.isLazy = function(b) {
    return C(b) === f;
  }, ot.isMemo = function(b) {
    return C(b) === g;
  }, ot.isPortal = function(b) {
    return C(b) === n;
  }, ot.isProfiler = function(b) {
    return C(b) === o;
  }, ot.isStrictMode = function(b) {
    return C(b) === i;
  }, ot.isSuspense = function(b) {
    return C(b) === h;
  }, ot.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === c || b === o || b === i || b === h || b === d || typeof b == "object" && b !== null && (b.$$typeof === f || b.$$typeof === g || b.$$typeof === s || b.$$typeof === a || b.$$typeof === u || b.$$typeof === x || b.$$typeof === A || b.$$typeof === y || b.$$typeof === v);
  }, ot.typeOf = C, ot;
}
var at = {}, Td;
function um() {
  if (Td) return at;
  Td = 1;
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
    var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, c = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, g = t ? Symbol.for("react.suspense_list") : 60120, f = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, x = t ? Symbol.for("react.block") : 60121, A = t ? Symbol.for("react.fundamental") : 60117, y = t ? Symbol.for("react.responder") : 60118, C = t ? Symbol.for("react.scope") : 60119;
    function P(J) {
      return typeof J == "string" || typeof J == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      J === i || J === u || J === s || J === o || J === d || J === g || typeof J == "object" && J !== null && (J.$$typeof === v || J.$$typeof === f || J.$$typeof === a || J.$$typeof === l || J.$$typeof === h || J.$$typeof === A || J.$$typeof === y || J.$$typeof === C || J.$$typeof === x);
    }
    function b(J) {
      if (typeof J == "object" && J !== null) {
        var Ee = J.$$typeof;
        switch (Ee) {
          case n:
            var Pe = J.type;
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
    var M = c, O = u, E = l, _ = a, F = n, R = h, w = i, k = v, T = f, S = r, z = s, H = o, B = d, ne = !1;
    function Z(J) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(J) || b(J) === c;
    }
    function I(J) {
      return b(J) === u;
    }
    function N(J) {
      return b(J) === l;
    }
    function Y(J) {
      return b(J) === a;
    }
    function re(J) {
      return typeof J == "object" && J !== null && J.$$typeof === n;
    }
    function $(J) {
      return b(J) === h;
    }
    function ce(J) {
      return b(J) === i;
    }
    function se(J) {
      return b(J) === v;
    }
    function oe(J) {
      return b(J) === f;
    }
    function pe(J) {
      return b(J) === r;
    }
    function we(J) {
      return b(J) === s;
    }
    function Ce(J) {
      return b(J) === o;
    }
    function Be(J) {
      return b(J) === d;
    }
    at.AsyncMode = M, at.ConcurrentMode = O, at.ContextConsumer = E, at.ContextProvider = _, at.Element = F, at.ForwardRef = R, at.Fragment = w, at.Lazy = k, at.Memo = T, at.Portal = S, at.Profiler = z, at.StrictMode = H, at.Suspense = B, at.isAsyncMode = Z, at.isConcurrentMode = I, at.isContextConsumer = N, at.isContextProvider = Y, at.isElement = re, at.isForwardRef = $, at.isFragment = ce, at.isLazy = se, at.isMemo = oe, at.isPortal = pe, at.isProfiler = we, at.isStrictMode = Ce, at.isSuspense = Be, at.isValidElementType = P, at.typeOf = b;
  }(), at;
}
var Ed;
function _g() {
  if (Ed) return ao.exports;
  Ed = 1;
  var e = {};
  return e.NODE_ENV === "production" ? ao.exports = cm() : ao.exports = um(), ao.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ss, Md;
function dm() {
  if (Md) return ss;
  Md = 1;
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
  return ss = i() ? Object.assign : function(o, s) {
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
  }, ss;
}
var ls, Id;
function Pc() {
  if (Id) return ls;
  Id = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ls = e, ls;
}
var cs, Ad;
function Tg() {
  return Ad || (Ad = 1, cs = Function.call.bind(Object.prototype.hasOwnProperty)), cs;
}
var us, Pd;
function fm() {
  if (Pd) return us;
  Pd = 1;
  var e = {}, t = function() {
  };
  if (e.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ Pc(), r = {}, i = /* @__PURE__ */ Tg();
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
  }, us = o, us;
}
var ds, Od;
function hm() {
  if (Od) return ds;
  Od = 1;
  var e = {}, t = _g(), n = dm(), r = /* @__PURE__ */ Pc(), i = /* @__PURE__ */ Tg(), o = /* @__PURE__ */ fm(), s = function() {
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
  return ds = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function d(I) {
      var N = I && (u && I[u] || I[h]);
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
      arrayOf: P,
      element: b(),
      elementType: M(),
      instanceOf: O,
      node: R(),
      objectOf: _,
      oneOf: E,
      oneOfType: F,
      shape: k,
      exact: T
    };
    function v(I, N) {
      return I === N ? I !== 0 || 1 / I === 1 / N : I !== I && N !== N;
    }
    function x(I, N) {
      this.message = I, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function A(I) {
      if (e.NODE_ENV !== "production")
        var N = {}, Y = 0;
      function re(ce, se, oe, pe, we, Ce, Be) {
        if (pe = pe || g, Ce = Ce || oe, Be !== r) {
          if (c) {
            var J = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw J.name = "Invariant Violation", J;
          } else if (e.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = pe + ":" + oe;
            !N[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Ce + "` prop on `" + pe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[Ee] = !0, Y++);
          }
        }
        return se[oe] == null ? ce ? se[oe] === null ? new x("The " + we + " `" + Ce + "` is marked as required " + ("in `" + pe + "`, but its value is `null`.")) : new x("The " + we + " `" + Ce + "` is marked as required in " + ("`" + pe + "`, but its value is `undefined`.")) : null : I(se, oe, pe, we, Ce);
      }
      var $ = re.bind(null, !1);
      return $.isRequired = re.bind(null, !0), $;
    }
    function y(I) {
      function N(Y, re, $, ce, se, oe) {
        var pe = Y[re], we = H(pe);
        if (we !== I) {
          var Ce = B(pe);
          return new x(
            "Invalid " + ce + " `" + se + "` of type " + ("`" + Ce + "` supplied to `" + $ + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return A(N);
    }
    function C() {
      return A(a);
    }
    function P(I) {
      function N(Y, re, $, ce, se) {
        if (typeof I != "function")
          return new x("Property `" + se + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var oe = Y[re];
        if (!Array.isArray(oe)) {
          var pe = H(oe);
          return new x("Invalid " + ce + " `" + se + "` of type " + ("`" + pe + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var we = 0; we < oe.length; we++) {
          var Ce = I(oe, we, $, ce, se + "[" + we + "]", r);
          if (Ce instanceof Error)
            return Ce;
        }
        return null;
      }
      return A(N);
    }
    function b() {
      function I(N, Y, re, $, ce) {
        var se = N[Y];
        if (!l(se)) {
          var oe = H(se);
          return new x("Invalid " + $ + " `" + ce + "` of type " + ("`" + oe + "` supplied to `" + re + "`, expected a single ReactElement."));
        }
        return null;
      }
      return A(I);
    }
    function M() {
      function I(N, Y, re, $, ce) {
        var se = N[Y];
        if (!t.isValidElementType(se)) {
          var oe = H(se);
          return new x("Invalid " + $ + " `" + ce + "` of type " + ("`" + oe + "` supplied to `" + re + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return A(I);
    }
    function O(I) {
      function N(Y, re, $, ce, se) {
        if (!(Y[re] instanceof I)) {
          var oe = I.name || g, pe = Z(Y[re]);
          return new x("Invalid " + ce + " `" + se + "` of type " + ("`" + pe + "` supplied to `" + $ + "`, expected ") + ("instance of `" + oe + "`."));
        }
        return null;
      }
      return A(N);
    }
    function E(I) {
      if (!Array.isArray(I))
        return e.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function N(Y, re, $, ce, se) {
        for (var oe = Y[re], pe = 0; pe < I.length; pe++)
          if (v(oe, I[pe]))
            return null;
        var we = JSON.stringify(I, function(Be, J) {
          var Ee = B(J);
          return Ee === "symbol" ? String(J) : J;
        });
        return new x("Invalid " + ce + " `" + se + "` of value `" + String(oe) + "` " + ("supplied to `" + $ + "`, expected one of " + we + "."));
      }
      return A(N);
    }
    function _(I) {
      function N(Y, re, $, ce, se) {
        if (typeof I != "function")
          return new x("Property `" + se + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var oe = Y[re], pe = H(oe);
        if (pe !== "object")
          return new x("Invalid " + ce + " `" + se + "` of type " + ("`" + pe + "` supplied to `" + $ + "`, expected an object."));
        for (var we in oe)
          if (i(oe, we)) {
            var Ce = I(oe, we, $, ce, se + "." + we, r);
            if (Ce instanceof Error)
              return Ce;
          }
        return null;
      }
      return A(N);
    }
    function F(I) {
      if (!Array.isArray(I))
        return e.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var N = 0; N < I.length; N++) {
        var Y = I[N];
        if (typeof Y != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(Y) + " at index " + N + "."
          ), a;
      }
      function re($, ce, se, oe, pe) {
        for (var we = [], Ce = 0; Ce < I.length; Ce++) {
          var Be = I[Ce], J = Be($, ce, se, oe, pe, r);
          if (J == null)
            return null;
          J.data && i(J.data, "expectedType") && we.push(J.data.expectedType);
        }
        var Ee = we.length > 0 ? ", expected one of type [" + we.join(", ") + "]" : "";
        return new x("Invalid " + oe + " `" + pe + "` supplied to " + ("`" + se + "`" + Ee + "."));
      }
      return A(re);
    }
    function R() {
      function I(N, Y, re, $, ce) {
        return S(N[Y]) ? null : new x("Invalid " + $ + " `" + ce + "` supplied to " + ("`" + re + "`, expected a ReactNode."));
      }
      return A(I);
    }
    function w(I, N, Y, re, $) {
      return new x(
        (I || "React class") + ": " + N + " type `" + Y + "." + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`."
      );
    }
    function k(I) {
      function N(Y, re, $, ce, se) {
        var oe = Y[re], pe = H(oe);
        if (pe !== "object")
          return new x("Invalid " + ce + " `" + se + "` of type `" + pe + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var we in I) {
          var Ce = I[we];
          if (typeof Ce != "function")
            return w($, ce, se, we, B(Ce));
          var Be = Ce(oe, we, $, ce, se + "." + we, r);
          if (Be)
            return Be;
        }
        return null;
      }
      return A(N);
    }
    function T(I) {
      function N(Y, re, $, ce, se) {
        var oe = Y[re], pe = H(oe);
        if (pe !== "object")
          return new x("Invalid " + ce + " `" + se + "` of type `" + pe + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var we = n({}, Y[re], I);
        for (var Ce in we) {
          var Be = I[Ce];
          if (i(I, Ce) && typeof Be != "function")
            return w($, ce, se, Ce, B(Be));
          if (!Be)
            return new x(
              "Invalid " + ce + " `" + se + "` key `" + Ce + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(Y[re], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var J = Be(oe, Ce, $, ce, se + "." + Ce, r);
          if (J)
            return J;
        }
        return null;
      }
      return A(N);
    }
    function S(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(S);
          if (I === null || l(I))
            return !0;
          var N = d(I);
          if (N) {
            var Y = N.call(I), re;
            if (N !== I.entries) {
              for (; !(re = Y.next()).done; )
                if (!S(re.value))
                  return !1;
            } else
              for (; !(re = Y.next()).done; ) {
                var $ = re.value;
                if ($ && !S($[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function z(I, N) {
      return I === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function H(I) {
      var N = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : z(N, I) ? "symbol" : N;
    }
    function B(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var N = H(I);
      if (N === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function ne(I) {
      var N = B(I);
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
    function Z(I) {
      return !I.constructor || !I.constructor.name ? g : I.constructor.name;
    }
    return f.checkPropTypes = o, f.resetWarningCache = o.resetWarningCache, f.PropTypes = f, f;
  }, ds;
}
var fs, Dd;
function gm() {
  if (Dd) return fs;
  Dd = 1;
  var e = /* @__PURE__ */ Pc();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, fs = function() {
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
  }, fs;
}
var Ld;
function pm() {
  if (Ld) return oo.exports;
  Ld = 1;
  var e = {};
  if (e.NODE_ENV !== "production") {
    var t = _g(), n = !0;
    oo.exports = /* @__PURE__ */ hm()(t.isElement, n);
  } else
    oo.exports = /* @__PURE__ */ gm()();
  return oo.exports;
}
var Fd;
function mm() {
  return Fd || (Fd = 1, function(e) {
    (function(t, n) {
      n(e, St, /* @__PURE__ */ pm());
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
          var P = arguments[C];
          for (var b in P)
            Object.prototype.hasOwnProperty.call(P, b) && (y[b] = P[b]);
        }
        return y;
      };
      function l(y, C) {
        var P = {};
        for (var b in y)
          C.indexOf(b) >= 0 || Object.prototype.hasOwnProperty.call(y, b) && (P[b] = y[b]);
        return P;
      }
      function c(y, C) {
        if (!(y instanceof C))
          throw new TypeError("Cannot call a class as a function");
      }
      var u = /* @__PURE__ */ function() {
        function y(C, P) {
          for (var b = 0; b < P.length; b++) {
            var M = P[b];
            M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(C, M.key, M);
          }
        }
        return function(C, P, b) {
          return P && y(C.prototype, P), b && y(C, b), C;
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
      function x(y) {
        if ("touches" in y) {
          var C = y.touches[0], P = C.pageX, b = C.pageY;
          return { x: P, y: b };
        }
        var M = y.screenX, O = y.screenY;
        return { x: M, y: O };
      }
      var A = function(y) {
        d(C, y);
        function C() {
          var P;
          c(this, C);
          for (var b = arguments.length, M = Array(b), O = 0; O < b; O++)
            M[O] = arguments[O];
          var E = h(this, (P = C.__proto__ || Object.getPrototypeOf(C)).call.apply(P, [this].concat(M)));
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
            var M = x(b), O = M.x, E = M.y;
            this.moveStart = { x: O, y: E }, this.props.onSwipeStart(b);
          }
        }, {
          key: "_handleSwipeMove",
          value: function(b) {
            if (this.moveStart) {
              var M = x(b), O = M.x, E = M.y, _ = O - this.moveStart.x, F = E - this.moveStart.y;
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
        }]), C;
      }(n.Component);
      A.displayName = "ReactSwipe", A.propTypes = {
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
      }, A.defaultProps = {
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
      }, t.default = A;
    });
  }(io)), io;
}
var qd;
function Eg() {
  return qd || (qd = 1, function(e) {
    (function(t, n) {
      n(e, mm());
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
var ii = {}, hs = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Hd;
function vm() {
  return Hd || (Hd = 1, function(e) {
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
  }(hs)), hs.exports;
}
var zd;
function Mg() {
  if (zd) return ii;
  zd = 1, Object.defineProperty(ii, "__esModule", {
    value: !0
  }), ii.default = void 0;
  var e = t(vm());
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
var oi = {}, ai = {}, $d;
function ym() {
  if ($d) return ai;
  $d = 1, Object.defineProperty(ai, "__esModule", {
    value: !0
  }), ai.outerWidth = void 0;
  var e = function(n) {
    var r = n.offsetWidth, i = getComputedStyle(n);
    return r += parseInt(i.marginLeft) + parseInt(i.marginRight), r;
  };
  return ai.outerWidth = e, ai;
}
var si = {}, Nd;
function Oc() {
  if (Nd) return si;
  Nd = 1, Object.defineProperty(si, "__esModule", {
    value: !0
  }), si.default = void 0;
  var e = function(n, r, i) {
    var o = n === 0 ? n : n + r, s = i === "horizontal" ? [o, 0, 0] : [0, o, 0], a = "translate3d", l = "(" + s.join(",") + ")";
    return a + l;
  };
  return si.default = e, si;
}
var li = {}, Bd;
function Ig() {
  if (Bd) return li;
  Bd = 1, Object.defineProperty(li, "__esModule", {
    value: !0
  }), li.default = void 0;
  var e = function() {
    return window;
  };
  return li.default = e, li;
}
var Wd;
function Ag() {
  if (Wd) return oi;
  Wd = 1, Object.defineProperty(oi, "__esModule", {
    value: !0
  }), oi.default = void 0;
  var e = l(St), t = s(Mg()), n = ym(), r = s(Oc()), i = s(Eg()), o = s(Ig());
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
        var k = R ? Object.getOwnPropertyDescriptor(E, w) : null;
        k && (k.get || k.set) ? Object.defineProperty(F, w, k) : F[w] = E[w];
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
  function d(E, _) {
    for (var F = 0; F < _.length; F++) {
      var R = _[F];
      R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(E, R.key, R);
    }
  }
  function g(E, _, F) {
    return _ && d(E.prototype, _), E;
  }
  function f(E, _) {
    if (typeof _ != "function" && _ !== null)
      throw new TypeError("Super expression must either be null or a function");
    E.prototype = Object.create(_ && _.prototype, { constructor: { value: E, writable: !0, configurable: !0 } }), _ && v(E, _);
  }
  function v(E, _) {
    return v = Object.setPrototypeOf || function(R, w) {
      return R.__proto__ = w, R;
    }, v(E, _);
  }
  function x(E) {
    var _ = C();
    return function() {
      var R = P(E), w;
      if (_) {
        var k = P(this).constructor;
        w = Reflect.construct(R, arguments, k);
      } else
        w = R.apply(this, arguments);
      return A(this, w);
    };
  }
  function A(E, _) {
    return _ && (c(_) === "object" || typeof _ == "function") ? _ : y(E);
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
    f(F, E);
    var _ = x(F);
    function F(R) {
      var w;
      return h(this, F), w = _.call(this, R), b(y(w), "itemsWrapperRef", void 0), b(y(w), "itemsListRef", void 0), b(y(w), "thumbsRef", void 0), b(y(w), "setItemsWrapperRef", function(k) {
        w.itemsWrapperRef = k;
      }), b(y(w), "setItemsListRef", function(k) {
        w.itemsListRef = k;
      }), b(y(w), "setThumbsRef", function(k, T) {
        w.thumbsRef || (w.thumbsRef = []), w.thumbsRef[T] = k;
      }), b(y(w), "updateSizes", function() {
        if (!(!w.props.children || !w.itemsWrapperRef || !w.thumbsRef)) {
          var k = e.Children.count(w.props.children), T = w.itemsWrapperRef.clientWidth, S = w.props.thumbWidth ? w.props.thumbWidth : (0, n.outerWidth)(w.thumbsRef[0]), z = Math.floor(T / S), H = z < k, B = H ? k - z : 0;
          w.setState(function(ne, Z) {
            return {
              itemSize: S,
              visibleItems: z,
              firstItem: H ? w.getFirstItem(Z.selectedItem) : 0,
              lastPosition: B,
              showArrows: H
            };
          });
        }
      }), b(y(w), "handleClickItem", function(k, T, S) {
        if (!M(S) || S.key === "Enter") {
          var z = w.props.onSelectItem;
          typeof z == "function" && z(k, T);
        }
      }), b(y(w), "onSwipeStart", function() {
        w.setState({
          swiping: !0
        });
      }), b(y(w), "onSwipeEnd", function() {
        w.setState({
          swiping: !1
        });
      }), b(y(w), "onSwipeMove", function(k) {
        var T = k.x;
        if (!w.state.itemSize || !w.itemsWrapperRef || !w.state.visibleItems)
          return !1;
        var S = 0, z = e.Children.count(w.props.children), H = -(w.state.firstItem * 100) / w.state.visibleItems, B = Math.max(z - w.state.visibleItems, 0), ne = -B * 100 / w.state.visibleItems;
        H === S && T > 0 && (T = 0), H === ne && T < 0 && (T = 0);
        var Z = w.itemsWrapperRef.clientWidth, I = H + 100 / (Z / T);
        return w.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(N) {
          w.itemsListRef.style[N] = (0, r.default)(I, "%", w.props.axis);
        }), !0;
      }), b(y(w), "slideRight", function(k) {
        w.moveTo(w.state.firstItem - (typeof k == "number" ? k : 1));
      }), b(y(w), "slideLeft", function(k) {
        w.moveTo(w.state.firstItem + (typeof k == "number" ? k : 1));
      }), b(y(w), "moveTo", function(k) {
        k = k < 0 ? 0 : k, k = k >= w.state.lastPosition ? w.state.lastPosition : k, w.setState({
          firstItem: k
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
        var k = w;
        return w >= this.state.lastPosition && (k = this.state.lastPosition), w < this.state.firstItem + this.state.visibleItems && (k = this.state.firstItem), w < this.state.firstItem && (k = w), k;
      }
    }, {
      key: "renderItems",
      value: function() {
        var w = this;
        return this.props.children.map(function(k, T) {
          var S = t.default.ITEM(!1, T === w.state.selectedItem), z = {
            key: T,
            ref: function(B) {
              return w.setThumbsRef(B, T);
            },
            className: S,
            onClick: w.handleClickItem.bind(w, T, w.props.children[T]),
            onKeyDown: w.handleClickItem.bind(w, T, w.props.children[T]),
            "aria-label": "".concat(w.props.labels.item, " ").concat(T + 1),
            style: {
              width: w.props.thumbWidth
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
        var w = this;
        if (!this.props.children)
          return null;
        var k = e.Children.count(this.props.children) > 1, T = this.state.showArrows && this.state.firstItem > 0, S = this.state.showArrows && this.state.firstItem < this.state.lastPosition, z = {}, H = -this.state.firstItem * (this.state.itemSize || 0), B = (0, r.default)(H, "px", this.props.axis), ne = this.props.transitionTime + "ms";
        return z = {
          WebkitTransform: B,
          MozTransform: B,
          MsTransform: B,
          OTransform: B,
          transform: B,
          msTransform: B,
          WebkitTransitionDuration: ne,
          MozTransitionDuration: ne,
          MsTransitionDuration: ne,
          OTransitionDuration: ne,
          transitionDuration: ne,
          msTransitionDuration: ne
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
          ref: function(I) {
            return w.setItemsListRef(I);
          },
          style: z
        }, this.renderItems()), /* @__PURE__ */ e.default.createElement("button", {
          type: "button",
          className: t.default.ARROW_NEXT(!S),
          onClick: function() {
            return w.slideLeft();
          },
          "aria-label": this.props.labels.rightArrow
        })));
      }
    }]), F;
  }(e.Component);
  return oi.default = O, b(O, "displayName", "Thumbs"), b(O, "defaultProps", {
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
var ci = {}, jd;
function bm() {
  if (jd) return ci;
  jd = 1, Object.defineProperty(ci, "__esModule", {
    value: !0
  }), ci.default = void 0;
  var e = function() {
    return document;
  };
  return ci.default = e, ci;
}
var tn = {}, Ud;
function Pg() {
  if (Ud) return tn;
  Ud = 1, Object.defineProperty(tn, "__esModule", {
    value: !0
  }), tn.setPosition = tn.getPosition = tn.isKeyboardEvent = tn.defaultStatusFormatter = tn.noop = void 0;
  var e = St, t = n(Oc());
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
var Sn = {}, Xd;
function wm() {
  if (Xd) return Sn;
  Xd = 1, Object.defineProperty(Sn, "__esModule", {
    value: !0
  }), Sn.fadeAnimationHandler = Sn.slideStopSwipingHandler = Sn.slideSwipeAnimationHandler = Sn.slideAnimationHandler = void 0;
  var e = St, t = r(Oc()), n = Pg();
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
    var f = {}, v = g.selectedItem, x = v, A = e.Children.count(d.children) - 1, y = d.infiniteLoop && (v < 0 || v > A);
    if (y)
      return x < 0 ? d.centerMode && d.centerSlidePercentage && d.axis === "horizontal" ? f.itemListStyle = (0, n.setPosition)(-(A + 2) * d.centerSlidePercentage - (100 - d.centerSlidePercentage) / 2, d.axis) : f.itemListStyle = (0, n.setPosition)(-(A + 2) * 100, d.axis) : x > A && (f.itemListStyle = (0, n.setPosition)(0, d.axis)), f;
    var C = (0, n.getPosition)(v, d), P = (0, t.default)(C, "%", d.axis), b = d.transitionTime + "ms";
    return f.itemListStyle = {
      WebkitTransform: P,
      msTransform: P,
      OTransform: P,
      transform: P
    }, g.swiping || (f.itemListStyle = o(o({}, f.itemListStyle), {}, {
      WebkitTransitionDuration: b,
      MozTransitionDuration: b,
      OTransitionDuration: b,
      transitionDuration: b,
      msTransitionDuration: b
    })), f;
  };
  Sn.slideAnimationHandler = a;
  var l = function(d, g, f, v) {
    var x = {}, A = g.axis === "horizontal", y = e.Children.count(g.children), C = 0, P = (0, n.getPosition)(f.selectedItem, g), b = g.infiniteLoop ? (0, n.getPosition)(y - 1, g) - 100 : (0, n.getPosition)(y - 1, g), M = A ? d.x : d.y, O = M;
    P === C && M > 0 && (O = 0), P === b && M < 0 && (O = 0);
    var E = P + 100 / (f.itemSize / O), _ = Math.abs(M) > g.swipeScrollTolerance;
    return g.infiniteLoop && _ && (f.selectedItem === 0 && E > -100 ? E -= y * 100 : f.selectedItem === y - 1 && E < -y * 100 && (E += y * 100)), (!g.preventMovementUntilSwipeScrollTolerance || _ || f.swipeMovementStarted) && (f.swipeMovementStarted || v({
      swipeMovementStarted: !0
    }), x.itemListStyle = (0, n.setPosition)(E, g.axis)), _ && !f.cancelClick && v({
      cancelClick: !0
    }), x;
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
    var f = d.transitionTime + "ms", v = "ease-in-out", x = {
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
    return g.swiping || (x = o(o({}, x), {}, {
      WebkitTransitionDuration: f,
      MozTransitionDuration: f,
      OTransitionDuration: f,
      transitionDuration: f,
      msTransitionDuration: f
    })), {
      slideStyle: x,
      selectedStyle: o(o({}, x), {}, {
        opacity: 1,
        position: "relative"
      }),
      prevStyle: o({}, x)
    };
  };
  return Sn.fadeAnimationHandler = u, Sn;
}
var Gd;
function Sm() {
  if (Gd) return ri;
  Gd = 1, Object.defineProperty(ri, "__esModule", {
    value: !0
  }), ri.default = void 0;
  var e = u(St), t = l(Eg()), n = l(Mg()), r = l(Ag()), i = l(bm()), o = l(Ig()), s = Pg(), a = wm();
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
    var k = {}, T = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var S in R)
      if (Object.prototype.hasOwnProperty.call(R, S)) {
        var z = T ? Object.getOwnPropertyDescriptor(R, S) : null;
        z && (z.get || z.set) ? Object.defineProperty(k, S, z) : k[S] = R[S];
      }
    return k.default = R, w && w.set(R, k), k;
  }
  function h(R) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? h = function(k) {
      return typeof k;
    } : h = function(k) {
      return k && typeof Symbol == "function" && k.constructor === Symbol && k !== Symbol.prototype ? "symbol" : typeof k;
    }, h(R);
  }
  function d() {
    return d = Object.assign || function(R) {
      for (var w = 1; w < arguments.length; w++) {
        var k = arguments[w];
        for (var T in k)
          Object.prototype.hasOwnProperty.call(k, T) && (R[T] = k[T]);
      }
      return R;
    }, d.apply(this, arguments);
  }
  function g(R, w) {
    var k = Object.keys(R);
    if (Object.getOwnPropertySymbols) {
      var T = Object.getOwnPropertySymbols(R);
      w && (T = T.filter(function(S) {
        return Object.getOwnPropertyDescriptor(R, S).enumerable;
      })), k.push.apply(k, T);
    }
    return k;
  }
  function f(R) {
    for (var w = 1; w < arguments.length; w++) {
      var k = arguments[w] != null ? arguments[w] : {};
      w % 2 ? g(Object(k), !0).forEach(function(T) {
        _(R, T, k[T]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(k)) : g(Object(k)).forEach(function(T) {
        Object.defineProperty(R, T, Object.getOwnPropertyDescriptor(k, T));
      });
    }
    return R;
  }
  function v(R, w) {
    if (!(R instanceof w))
      throw new TypeError("Cannot call a class as a function");
  }
  function x(R, w) {
    for (var k = 0; k < w.length; k++) {
      var T = w[k];
      T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(R, T.key, T);
    }
  }
  function A(R, w, k) {
    return w && x(R.prototype, w), R;
  }
  function y(R, w) {
    if (typeof w != "function" && w !== null)
      throw new TypeError("Super expression must either be null or a function");
    R.prototype = Object.create(w && w.prototype, { constructor: { value: R, writable: !0, configurable: !0 } }), w && C(R, w);
  }
  function C(R, w) {
    return C = Object.setPrototypeOf || function(T, S) {
      return T.__proto__ = S, T;
    }, C(R, w);
  }
  function P(R) {
    var w = O();
    return function() {
      var T = E(R), S;
      if (w) {
        var z = E(this).constructor;
        S = Reflect.construct(T, arguments, z);
      } else
        S = T.apply(this, arguments);
      return b(this, S);
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
    return E = Object.setPrototypeOf ? Object.getPrototypeOf : function(k) {
      return k.__proto__ || Object.getPrototypeOf(k);
    }, E(R);
  }
  function _(R, w, k) {
    return w in R ? Object.defineProperty(R, w, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : R[w] = k, R;
  }
  var F = /* @__PURE__ */ function(R) {
    y(k, R);
    var w = P(k);
    function k(T) {
      var S;
      v(this, k), S = w.call(this, T), _(M(S), "thumbsRef", void 0), _(M(S), "carouselWrapperRef", void 0), _(M(S), "listRef", void 0), _(M(S), "itemsRef", void 0), _(M(S), "timer", void 0), _(M(S), "animationHandler", void 0), _(M(S), "setThumbsRef", function(H) {
        S.thumbsRef = H;
      }), _(M(S), "setCarouselWrapperRef", function(H) {
        S.carouselWrapperRef = H;
      }), _(M(S), "setListRef", function(H) {
        S.listRef = H;
      }), _(M(S), "setItemsRef", function(H, B) {
        S.itemsRef || (S.itemsRef = []), S.itemsRef[B] = H;
      }), _(M(S), "autoPlay", function() {
        e.Children.count(S.props.children) <= 1 || (S.clearAutoPlay(), S.props.autoPlay && (S.timer = setTimeout(function() {
          S.increment();
        }, S.props.interval)));
      }), _(M(S), "clearAutoPlay", function() {
        S.timer && clearTimeout(S.timer);
      }), _(M(S), "resetAutoPlay", function() {
        S.clearAutoPlay(), S.autoPlay();
      }), _(M(S), "stopOnHover", function() {
        S.setState({
          isMouseEntered: !0
        }, S.clearAutoPlay);
      }), _(M(S), "startOnLeave", function() {
        S.setState({
          isMouseEntered: !1
        }, S.autoPlay);
      }), _(M(S), "isFocusWithinTheCarousel", function() {
        return S.carouselWrapperRef ? !!((0, i.default)().activeElement === S.carouselWrapperRef || S.carouselWrapperRef.contains((0, i.default)().activeElement)) : !1;
      }), _(M(S), "navigateWithKeyboard", function(H) {
        if (S.isFocusWithinTheCarousel()) {
          var B = S.props.axis, ne = B === "horizontal", Z = {
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37
          }, I = ne ? Z.ArrowRight : Z.ArrowDown, N = ne ? Z.ArrowLeft : Z.ArrowUp;
          I === H.keyCode ? S.increment() : N === H.keyCode && S.decrement();
        }
      }), _(M(S), "updateSizes", function() {
        if (!(!S.state.initialized || !S.itemsRef || S.itemsRef.length === 0)) {
          var H = S.props.axis === "horizontal", B = S.itemsRef[0];
          if (B) {
            var ne = H ? B.clientWidth : B.clientHeight;
            S.setState({
              itemSize: ne
            }), S.thumbsRef && S.thumbsRef.updateSizes();
          }
        }
      }), _(M(S), "setMountState", function() {
        S.setState({
          hasMount: !0
        }), S.updateSizes();
      }), _(M(S), "handleClickItem", function(H, B) {
        if (e.Children.count(S.props.children) !== 0) {
          if (S.state.cancelClick) {
            S.setState({
              cancelClick: !1
            });
            return;
          }
          S.props.onClickItem(H, B), H !== S.state.selectedItem && S.setState({
            selectedItem: H
          });
        }
      }), _(M(S), "handleOnChange", function(H, B) {
        e.Children.count(S.props.children) <= 1 || S.props.onChange(H, B);
      }), _(M(S), "handleClickThumb", function(H, B) {
        S.props.onClickThumb(H, B), S.moveTo(H);
      }), _(M(S), "onSwipeStart", function(H) {
        S.setState({
          swiping: !0
        }), S.props.onSwipeStart(H);
      }), _(M(S), "onSwipeEnd", function(H) {
        S.setState({
          swiping: !1,
          cancelClick: !1,
          swipeMovementStarted: !1
        }), S.props.onSwipeEnd(H), S.clearAutoPlay(), S.state.autoPlay && S.autoPlay();
      }), _(M(S), "onSwipeMove", function(H, B) {
        S.props.onSwipeMove(B);
        var ne = S.props.swipeAnimationHandler(H, S.props, S.state, S.setState.bind(M(S)));
        return S.setState(f({}, ne)), !!Object.keys(ne).length;
      }), _(M(S), "decrement", function() {
        var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        S.moveTo(S.state.selectedItem - (typeof H == "number" ? H : 1));
      }), _(M(S), "increment", function() {
        var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        S.moveTo(S.state.selectedItem + (typeof H == "number" ? H : 1));
      }), _(M(S), "moveTo", function(H) {
        if (typeof H == "number") {
          var B = e.Children.count(S.props.children) - 1;
          H < 0 && (H = S.props.infiniteLoop ? B : 0), H > B && (H = S.props.infiniteLoop ? 0 : B), S.selectItem({
            // if it's not a slider, we don't need to set position here
            selectedItem: H
          }), S.state.autoPlay && S.state.isMouseEntered === !1 && S.resetAutoPlay();
        }
      }), _(M(S), "onClickNext", function() {
        S.increment(1);
      }), _(M(S), "onClickPrev", function() {
        S.decrement(1);
      }), _(M(S), "onSwipeForward", function() {
        S.increment(1), S.props.emulateTouch && S.setState({
          cancelClick: !0
        });
      }), _(M(S), "onSwipeBackwards", function() {
        S.decrement(1), S.props.emulateTouch && S.setState({
          cancelClick: !0
        });
      }), _(M(S), "changeItem", function(H) {
        return function(B) {
          (!(0, s.isKeyboardEvent)(B) || B.key === "Enter") && S.moveTo(H);
        };
      }), _(M(S), "selectItem", function(H) {
        S.setState(f({
          previousItem: S.state.selectedItem
        }, H), function() {
          S.setState(S.animationHandler(S.props, S.state));
        }), S.handleOnChange(H.selectedItem, e.Children.toArray(S.props.children)[H.selectedItem]);
      }), _(M(S), "getInitialImage", function() {
        var H = S.props.selectedItem, B = S.itemsRef && S.itemsRef[H], ne = B && B.getElementsByTagName("img") || [];
        return ne[0];
      }), _(M(S), "getVariableItemHeight", function(H) {
        var B = S.itemsRef && S.itemsRef[H];
        if (S.state.hasMount && B && B.children.length) {
          var ne = B.children[0].getElementsByTagName("img") || [];
          if (ne.length > 0) {
            var Z = ne[0];
            if (!Z.complete) {
              var I = function re() {
                S.forceUpdate(), Z.removeEventListener("load", re);
              };
              Z.addEventListener("load", I);
            }
          }
          var N = ne[0] || B.children[0], Y = N.clientHeight;
          return Y > 0 ? Y : null;
        }
        return null;
      });
      var z = {
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
      return S.animationHandler = typeof T.animationHandler == "function" && T.animationHandler || T.animationHandler === "fade" && a.fadeAnimationHandler || a.slideAnimationHandler, S.state = f(f({}, z), S.animationHandler(T, z)), S;
    }
    return A(k, [{
      key: "componentDidMount",
      value: function() {
        this.props.children && this.setupCarousel();
      }
    }, {
      key: "componentDidUpdate",
      value: function(S, z) {
        !S.children && this.props.children && !this.state.initialized && this.setupCarousel(), !S.autoFocus && this.props.autoFocus && this.forceFocus(), z.swiping && !this.state.swiping && this.setState(f({}, this.props.stopSwipingHandler(this.props, this.state))), (S.selectedItem !== this.props.selectedItem || S.centerMode !== this.props.centerMode) && (this.updateSizes(), this.moveTo(this.props.selectedItem)), S.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({
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
        var S = this;
        this.bindEvents(), this.state.autoPlay && e.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({
          initialized: !0
        }, function() {
          var z = S.getInitialImage();
          z && !z.complete ? z.addEventListener("load", S.setMountState) : S.setMountState();
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
        var S = this.carouselWrapperRef;
        this.props.stopOnHover && S && (S.addEventListener("mouseenter", this.stopOnHover), S.addEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "destroyAutoPlay",
      value: function() {
        this.clearAutoPlay();
        var S = this.carouselWrapperRef;
        this.props.stopOnHover && S && (S.removeEventListener("mouseenter", this.stopOnHover), S.removeEventListener("mouseleave", this.startOnLeave));
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
        var S = this.getInitialImage();
        S && S.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, i.default)().removeEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "forceFocus",
      value: function() {
        var S;
        (S = this.carouselWrapperRef) === null || S === void 0 || S.focus();
      }
    }, {
      key: "renderItems",
      value: function(S) {
        var z = this;
        return this.props.children ? e.Children.map(this.props.children, function(H, B) {
          var ne = B === z.state.selectedItem, Z = B === z.state.previousItem, I = ne && z.state.selectedStyle || Z && z.state.prevStyle || z.state.slideStyle || {};
          z.props.centerMode && z.props.axis === "horizontal" && (I = f(f({}, I), {}, {
            minWidth: z.props.centerSlidePercentage + "%"
          })), z.state.swiping && z.state.swipeMovementStarted && (I = f(f({}, I), {}, {
            pointerEvents: "none"
          }));
          var N = {
            ref: function(re) {
              return z.setItemsRef(re, B);
            },
            key: "itemKey" + B + (S ? "clone" : ""),
            className: n.default.ITEM(!0, B === z.state.selectedItem, B === z.state.previousItem),
            onClick: z.handleClickItem.bind(z, B, H),
            style: I
          };
          return /* @__PURE__ */ e.default.createElement("li", N, z.props.renderItem(H, {
            isSelected: B === z.state.selectedItem,
            isPrevious: B === z.state.previousItem
          }));
        }) : [];
      }
    }, {
      key: "renderControls",
      value: function() {
        var S = this, z = this.props, H = z.showIndicators, B = z.labels, ne = z.renderIndicator, Z = z.children;
        return H ? /* @__PURE__ */ e.default.createElement("ul", {
          className: "control-dots"
        }, e.Children.map(Z, function(I, N) {
          return ne && ne(S.changeItem(N), N === S.state.selectedItem, N, B.item);
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
        var S = this;
        if (!this.props.children || e.Children.count(this.props.children) === 0)
          return null;
        var z = this.props.swipeable && e.Children.count(this.props.children) > 1, H = this.props.axis === "horizontal", B = this.props.showArrows && e.Children.count(this.props.children) > 1, ne = B && (this.state.selectedItem > 0 || this.props.infiniteLoop) || !1, Z = B && (this.state.selectedItem < e.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || !1, I = this.renderItems(!0), N = I.shift(), Y = I.pop(), re = {
          className: n.default.SLIDER(!0, this.state.swiping),
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: this.state.itemListStyle,
          tolerance: this.props.swipeScrollTolerance
        }, $ = {};
        if (H) {
          if (re.onSwipeLeft = this.onSwipeForward, re.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
            var ce = this.getVariableItemHeight(this.state.selectedItem);
            $.height = ce || "auto";
          }
        } else
          re.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward, re.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards, re.style = f(f({}, re.style), {}, {
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
        }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, ne, this.props.labels.leftArrow), /* @__PURE__ */ e.default.createElement("div", {
          className: n.default.WRAPPER(!0, this.props.axis),
          style: $
        }, z ? /* @__PURE__ */ e.default.createElement(t.default, d({
          tagName: "ul",
          innerRef: this.setListRef
        }, re, {
          allowMouseEvents: this.props.emulateTouch
        }), this.props.infiniteLoop && Y, this.renderItems(), this.props.infiniteLoop && N) : /* @__PURE__ */ e.default.createElement("ul", {
          className: n.default.SLIDER(!0, this.state.swiping),
          ref: function(oe) {
            return S.setListRef(oe);
          },
          style: this.state.itemListStyle || {}
        }, this.props.infiniteLoop && Y, this.renderItems(), this.props.infiniteLoop && N)), this.props.renderArrowNext(this.onClickNext, Z, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
      }
    }]), k;
  }(e.default.Component);
  return ri.default = F, _(F, "displayName", "Carousel"), _(F, "defaultProps", {
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
    renderArrowPrev: function(w, k, T) {
      return /* @__PURE__ */ e.default.createElement("button", {
        type: "button",
        "aria-label": T,
        className: n.default.ARROW_PREV(!k),
        onClick: w
      });
    },
    renderArrowNext: function(w, k, T) {
      return /* @__PURE__ */ e.default.createElement("button", {
        type: "button",
        "aria-label": T,
        className: n.default.ARROW_NEXT(!k),
        onClick: w
      });
    },
    renderIndicator: function(w, k, T, S) {
      return /* @__PURE__ */ e.default.createElement("li", {
        className: n.default.DOT(k),
        onClick: w,
        onKeyDown: w,
        value: T,
        key: T,
        role: "button",
        tabIndex: 0,
        "aria-label": "".concat(S, " ").concat(T + 1)
      });
    },
    renderItem: function(w) {
      return w;
    },
    renderThumbs: function(w) {
      var k = e.Children.map(w, function(T) {
        var S = T;
        if (T.type !== "img" && (S = e.Children.toArray(T.props.children).find(function(z) {
          return z.type === "img";
        })), !!S)
          return S;
      });
      return k.filter(function(T) {
        return T;
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
var Yd = {}, Kd;
function Cm() {
  return Kd || (Kd = 1), Yd;
}
var Vd;
function km() {
  return Vd || (Vd = 1, function(e) {
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
    var t = i(Sm()), n = Cm(), r = i(Ag());
    function i(o) {
      return o && o.__esModule ? o : { default: o };
    }
  }(as)), as;
}
var xm = km(), gs, Zd;
function Rm() {
  if (Zd) return gs;
  Zd = 1;
  var e = Pn(), t = function() {
    return e.Date.now();
  };
  return gs = t, gs;
}
var ps, Jd;
function _m() {
  if (Jd) return ps;
  Jd = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return ps = t, ps;
}
var ms, Qd;
function Tm() {
  if (Qd) return ms;
  Qd = 1;
  var e = _m(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return ms = n, ms;
}
var vs, ef;
function Dc() {
  if (ef) return vs;
  ef = 1;
  var e = Tm(), t = gr(), n = xo(), r = NaN, i = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, s = /^0o[0-7]+$/i, a = parseInt;
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
  return vs = l, vs;
}
var ys, tf;
function Og() {
  if (tf) return ys;
  tf = 1;
  var e = gr(), t = Rm(), n = Dc(), r = "Expected a function", i = Math.max, o = Math.min;
  function s(a, l, c) {
    var u, h, d, g, f, v, x = 0, A = !1, y = !1, C = !0;
    if (typeof a != "function")
      throw new TypeError(r);
    l = n(l) || 0, e(c) && (A = !!c.leading, y = "maxWait" in c, d = y ? i(n(c.maxWait) || 0, l) : d, C = "trailing" in c ? !!c.trailing : C);
    function P(k) {
      var T = u, S = h;
      return u = h = void 0, x = k, g = a.apply(S, T), g;
    }
    function b(k) {
      return x = k, f = setTimeout(E, l), A ? P(k) : g;
    }
    function M(k) {
      var T = k - v, S = k - x, z = l - T;
      return y ? o(z, d - S) : z;
    }
    function O(k) {
      var T = k - v, S = k - x;
      return v === void 0 || T >= l || T < 0 || y && S >= d;
    }
    function E() {
      var k = t();
      if (O(k))
        return _(k);
      f = setTimeout(E, M(k));
    }
    function _(k) {
      return f = void 0, C && u ? P(k) : (u = h = void 0, g);
    }
    function F() {
      f !== void 0 && clearTimeout(f), x = 0, u = v = h = f = void 0;
    }
    function R() {
      return f === void 0 ? g : _(t());
    }
    function w() {
      var k = t(), T = O(k);
      if (u = arguments, h = this, v = k, T) {
        if (f === void 0)
          return b(v);
        if (y)
          return clearTimeout(f), f = setTimeout(E, l), P(v);
      }
      return f === void 0 && (f = setTimeout(E, l)), g;
    }
    return w.cancel = F, w.flush = R, w;
  }
  return ys = s, ys;
}
var Em = Og();
const Dg = /* @__PURE__ */ er(Em);
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
const Mm = Math.PI;
function nf(e) {
  return e * Mm / 180;
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
}, qg = (e, t, n) => Math.min(e, t - n * 2), Hg = (e, t, n) => n.x1 <= e && e <= n.x2 && n.y1 <= t && t <= n.y2, Lc = (e) => {
  const t = e.fgColor ?? "currentColor";
  return p.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    p.createElement("path", { d: "M12.7073 7.05029C7.87391 11.8837 10.4544 9.30322 6.03024 13.7273C5.77392 13.9836 5.58981 14.3071 5.50189 14.6587L4.52521 18.5655C4.38789 19.1148 4.88543 19.6123 5.43472 19.475L9.34146 18.4983C9.69313 18.4104 10.0143 18.2286 10.2706 17.9722L16.9499 11.2929", stroke: t, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none", vectorEffect: "non-scaling-stroke" }),
    p.createElement("path", { d: "M20.4854 4.92901L19.0712 3.5148C18.2901 2.73375 17.0238 2.73375 16.2428 3.5148L14.475 5.28257C15.5326 7.71912 16.4736 8.6278 18.7176 9.52521L20.4854 7.75744C21.2665 6.97639 21.2665 5.71006 20.4854 4.92901Z", stroke: t, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none", vectorEffect: "non-scaling-stroke" })
  );
}, Im = (e) => {
  const t = e.fgColor ?? "currentColor";
  return p.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    p.createElement("path", { d: "M19 6L10.3802 17L5.34071 11.8758", vectorEffect: "non-scaling-stroke", stroke: t, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  );
};
function Am(e, t, n) {
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
const Pm = "֑-߿יִ-﷽ﹰ-ﻼ", Om = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", Dm = new RegExp("^[^" + Om + "]*[" + Pm + "]");
function Fc(e) {
  return Dm.test(e) ? "rtl" : "not-rtl";
}
let so;
function uc() {
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
function Lm(e) {
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
function Fm(e) {
  const t = p.useRef(e);
  return Wr(e, t.current) || (t.current = e), t.current;
}
const qm = (e) => {
  const { urls: t, canWrite: n, onEditClick: r, renderImage: i } = e, o = t.filter((a) => a !== "");
  if (o.length === 0)
    return null;
  const s = o.length > 1;
  return p.createElement(
    lm,
    { "data-testid": "GDG-default-image-overlay-editor" },
    p.createElement(xm.Carousel, { showArrows: s, showThumbs: !1, swipeable: s, emulateTouch: s, infiniteLoop: s }, o.map((a) => {
      const l = (i == null ? void 0 : i(a)) ?? p.createElement("img", { draggable: !1, src: a });
      return p.createElement("div", { className: "gdg-centering-container", key: a }, l);
    })),
    n && r && p.createElement(
      "button",
      { className: "gdg-edit-icon", onClick: r },
      p.createElement(Lc, null)
    )
  );
};
function qc() {
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
var mr = qc();
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
}, Hm = /^(?:[ \t]*(?:\n|$))+/, zm = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, $m = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ii = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Nm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Hc = /(?:[*+-]|\d{1,9}[.)])/, Ng = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Bg = st(Ng).replace(/bull/g, Hc).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Bm = st(Ng).replace(/bull/g, Hc).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), zc = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Wm = /^[^\n]+/, $c = /(?!\s*\])(?:\\.|[^\[\]\\])+/, jm = st(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", $c).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Um = st(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Hc).getRegex(), Io = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Nc = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Xm = st(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", Nc).replace("tag", Io).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Wg = st(zc).replace("hr", Ii).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Io).getRegex(), Gm = st(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Wg).getRegex(), Bc = {
  blockquote: Gm,
  code: zm,
  def: jm,
  fences: $m,
  heading: Nm,
  hr: Ii,
  html: Xm,
  lheading: Bg,
  list: Um,
  newline: Hm,
  paragraph: Wg,
  table: wi,
  text: Wm
}, rf = st(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", Ii).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Io).getRegex(), Ym = {
  ...Bc,
  lheading: Bm,
  table: rf,
  paragraph: st(zc).replace("hr", Ii).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", rf).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Io).getRegex()
}, Km = {
  ...Bc,
  html: st(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", Nc).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: wi,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: st(zc).replace("hr", Ii).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Bg).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Vm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Zm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, jg = /^( {2,}|\\)\n(?!\s*$)/, Jm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ao = /[\p{P}\p{S}]/u, Wc = /[\s\p{P}\p{S}]/u, Ug = /[^\s\p{P}\p{S}]/u, Qm = st(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Wc).getRegex(), Xg = /(?!~)[\p{P}\p{S}]/u, e1 = /(?!~)[\s\p{P}\p{S}]/u, t1 = /(?:[^\s\p{P}\p{S}]|~)/u, n1 = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Gg = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, r1 = st(Gg, "u").replace(/punct/g, Ao).getRegex(), i1 = st(Gg, "u").replace(/punct/g, Xg).getRegex(), Yg = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", o1 = st(Yg, "gu").replace(/notPunctSpace/g, Ug).replace(/punctSpace/g, Wc).replace(/punct/g, Ao).getRegex(), a1 = st(Yg, "gu").replace(/notPunctSpace/g, t1).replace(/punctSpace/g, e1).replace(/punct/g, Xg).getRegex(), s1 = st(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, Ug).replace(/punctSpace/g, Wc).replace(/punct/g, Ao).getRegex(), l1 = st(/\\(punct)/, "gu").replace(/punct/g, Ao).getRegex(), c1 = st(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), u1 = st(Nc).replace("(?:-->|$)", "-->").getRegex(), d1 = st(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", u1).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), vo = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, f1 = st(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", vo).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Kg = st(/^!?\[(label)\]\[(ref)\]/).replace("label", vo).replace("ref", $c).getRegex(), Vg = st(/^!?\[(ref)\](?:\[\])?/).replace("ref", $c).getRegex(), h1 = st("reflink|nolink(?!\\()", "g").replace("reflink", Kg).replace("nolink", Vg).getRegex(), jc = {
  _backpedal: wi,
  // only used for GFM url
  anyPunctuation: l1,
  autolink: c1,
  blockSkip: n1,
  br: jg,
  code: Zm,
  del: wi,
  emStrongLDelim: r1,
  emStrongRDelimAst: o1,
  emStrongRDelimUnd: s1,
  escape: Vm,
  link: f1,
  nolink: Vg,
  punctuation: Qm,
  reflink: Kg,
  reflinkSearch: h1,
  tag: d1,
  text: Jm,
  url: wi
}, g1 = {
  ...jc,
  link: st(/^!?\[(label)\]\((.*?)\)/).replace("label", vo).getRegex(),
  reflink: st(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", vo).getRegex()
}, dc = {
  ...jc,
  emStrongRDelimAst: a1,
  emStrongLDelim: i1,
  url: st(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, p1 = {
  ...dc,
  br: st(jg).replace("{2,}", "*").getRegex(),
  text: st(dc.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, lo = {
  normal: Bc,
  gfm: Ym,
  pedantic: Km
}, ui = {
  normal: jc,
  gfm: dc,
  breaks: p1,
  pedantic: g1
}, m1 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, of = (e) => m1[e];
function Mn(e, t) {
  if (t) {
    if (Xt.escapeTest.test(e))
      return e.replace(Xt.escapeReplace, of);
  } else if (Xt.escapeTestNoEncode.test(e))
    return e.replace(Xt.escapeReplaceNoEncode, of);
  return e;
}
function af(e) {
  try {
    e = encodeURI(e).replace(Xt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function sf(e, t) {
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
function v1(e, t) {
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
function lf(e, t, n, r, i) {
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
function y1(e, t, n) {
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
var yo = class {
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
      const n = t[0], r = y1(n, t[3] || "", this.rules);
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
`, 1)[0].replace(this.rules.other.listReplaceTabs, (A) => " ".repeat(3 * A.length)), d = e.split(`
`, 1)[0], g = !h.trim(), f = 0;
        if (this.options.pedantic ? (f = 2, u = h.trimStart()) : g ? f = t[1].length + 1 : (f = t[2].search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, u = h.slice(f), f += t[1].length), g && this.rules.other.blankLine.test(d) && (c += d + `
`, e = e.substring(d.length + 1), l = !0), !l) {
          const A = this.rules.other.nextBulletRegex(f), y = this.rules.other.hrRegex(f), C = this.rules.other.fencesBeginRegex(f), P = this.rules.other.headingBeginRegex(f), b = this.rules.other.htmlBeginRegex(f);
          for (; e; ) {
            const M = e.split(`
`, 1)[0];
            let O;
            if (d = M, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), O = d) : O = d.replace(this.rules.other.tabCharGlobal, "    "), C.test(d) || P.test(d) || b.test(d) || A.test(d) || y.test(d))
              break;
            if (O.search(this.rules.other.nonSpaceChar) >= f || !d.trim())
              u += `
` + O.slice(f);
            else {
              if (g || h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || C.test(h) || P.test(h) || y.test(h))
                break;
              u += `
` + d;
            }
            !g && !d.trim() && (g = !0), c += M + `
`, e = e.substring(M.length + 1), h = O.slice(f);
          }
        }
        i.loose || (s ? i.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (s = !0));
        let v = null, x;
        this.options.gfm && (v = this.rules.other.listIsTask.exec(u), v && (x = v[0] !== "[ ] ", u = u.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
          type: "list_item",
          raw: c,
          task: !!v,
          checked: x,
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
    const n = sf(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = (s = t[3]) != null && s.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
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
        o.rows.push(sf(a, o.header.length).map((l, c) => ({
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
        const o = v1(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), lf(t, {
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
      return lf(n, i, n[0], this.lexer, this.rules);
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
}, Nn = class fc {
  constructor(t) {
    be(this, "tokens");
    be(this, "options");
    be(this, "state");
    be(this, "tokenizer");
    be(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || mr, this.options.tokenizer = this.options.tokenizer || new yo(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
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
    return new fc(n).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, n) {
    return new fc(n).inlineTokens(t);
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
}, bo = class {
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
    const r = this.parser.parseInline(n), i = af(e);
    if (i === null)
      return r;
    e = i;
    let o = '<a href="' + e + '"';
    return t && (o += ' title="' + Mn(t) + '"'), o += ">" + r + "</a>", o;
  }
  image({ href: e, title: t, text: n, tokens: r }) {
    r && (n = this.parser.parseInline(r, this.parser.textRenderer));
    const i = af(e);
    if (i === null)
      return Mn(n);
    e = i;
    let o = `<img src="${e}" alt="${n}"`;
    return t && (o += ` title="${Mn(t)}"`), o += ">", o;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : Mn(e.text);
  }
}, Uc = class {
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
}, Bn = class hc {
  constructor(t) {
    be(this, "options");
    be(this, "renderer");
    be(this, "textRenderer");
    this.options = t || mr, this.options.renderer = this.options.renderer || new bo(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Uc();
  }
  /**
   * Static Parse Method
   */
  static parse(t, n) {
    return new hc(n).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, n) {
    return new hc(n).parseInline(t);
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
}, lc, fo = (lc = class {
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
}, be(lc, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
])), lc), b1 = class {
  constructor(...e) {
    be(this, "defaults", qc());
    be(this, "options", this.setOptions);
    be(this, "parse", this.parseMarkdown(!0));
    be(this, "parseInline", this.parseMarkdown(!1));
    be(this, "Parser", Bn);
    be(this, "Renderer", bo);
    be(this, "TextRenderer", Uc);
    be(this, "Lexer", Nn);
    be(this, "Tokenizer", yo);
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
        const i = this.defaults.renderer || new bo(this.defaults);
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
        const i = this.defaults.tokenizer || new yo(this.defaults);
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
}, fr = new b1();
function lt(e, t) {
  return fr.parse(e, t);
}
lt.options = lt.setOptions = function(e) {
  return fr.setOptions(e), lt.defaults = fr.defaults, $g(lt.defaults), lt;
};
lt.getDefaults = qc;
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
lt.Renderer = bo;
lt.TextRenderer = Uc;
lt.Lexer = Nn;
lt.lexer = Nn.lex;
lt.Tokenizer = yo;
lt.Hooks = fo;
lt.parse = lt;
lt.options;
lt.setOptions;
lt.use;
lt.walkTokens;
lt.parseInline;
Bn.parse;
Nn.lex;
const w1 = /* @__PURE__ */ an("div")({
  name: "MarkdownContainer",
  class: "gdg-mnuv029",
  propsAsIs: !1
});
class S1 extends St.PureComponent {
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
    return this.renderMarkdownIntoDiv(), St.createElement(w1, { ref: this.containerRefHook });
  }
}
const C1 = /* @__PURE__ */ an("textarea")({
  name: "InputBox",
  class: "gdg-izpuzkl",
  propsAsIs: !1
}), k1 = /* @__PURE__ */ an("div")({
  name: "ShadowBox",
  class: "gdg-s69h75o",
  propsAsIs: !1
}), x1 = /* @__PURE__ */ an("div")({
  name: "GrowingEntryStyle",
  class: "gdg-g1y0xocz",
  propsAsIs: !1
});
let cf = 0;
const Po = (e) => {
  const { placeholder: t, value: n, onKeyDown: r, highlight: i, altNewline: o, validatedSelection: s, ...a } = e, { onChange: l, className: c } = a, u = p.useRef(null), h = n ?? "";
  rn(l !== void 0, "GrowingEntry must be a controlled input area");
  const [d] = p.useState(() => "input-box-" + (cf = (cf + 1) % 1e7));
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
    x1,
    { className: "gdg-growing-entry" },
    p.createElement(k1, { className: c }, h + `
`),
    p.createElement(C1, { ...a, className: (c ?? "") + " gdg-input", id: d, ref: u, onKeyDown: g, value: h, placeholder: t, dir: "auto" })
  );
};
var R1 = {};
const bs = {};
let Vn = null;
function _1() {
  const e = document.createElement("div");
  return e.style.opacity = "0", e.style.pointerEvents = "none", e.style.position = "fixed", document.body.append(e), e;
}
function gc(e) {
  const t = e.toLowerCase().trim();
  if (bs[t] !== void 0)
    return bs[t];
  Vn = Vn || _1(), Vn.style.color = "#000", Vn.style.color = t;
  const n = getComputedStyle(Vn).color;
  Vn.style.color = "#fff", Vn.style.color = t;
  const r = getComputedStyle(Vn).color;
  if (r !== n)
    return [0, 0, 0, 1];
  let i = r.replace(/[^\d.,]/g, "").split(",").map(Number.parseFloat);
  return i.length < 4 && i.push(1), i = i.map((o) => {
    const s = Number.isNaN(o);
    return R1.NODE_ENV !== "production" && s && console.warn("Could not parse color", e), s ? 0 : o;
  }), bs[t] = i, i;
}
function hr(e, t) {
  const [n, r, i] = gc(e);
  return `rgba(${n}, ${r}, ${i}, ${t})`;
}
const uf = /* @__PURE__ */ new Map();
function df(e, t) {
  const n = `${e}-${t}`, r = uf.get(n);
  if (r !== void 0)
    return r;
  const i = on(e, t);
  return uf.set(n, i), i;
}
function on(e, t) {
  if (t === void 0)
    return e;
  const [n, r, i, o] = gc(e);
  if (o === 1)
    return e;
  const [s, a, l, c] = gc(t), u = o + c * (1 - o), h = (o * n + c * s * (1 - o)) / u, d = (o * r + c * a * (1 - o)) / u, g = (o * i + c * l * (1 - o)) / u;
  return `rgba(${h}, ${d}, ${g}, ${u})`;
}
var zr = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), pc = /* @__PURE__ */ new Map();
function T1() {
  zr.clear(), pc.clear(), Nr.clear();
}
function E1(e, t, n, r, i) {
  var o, s, a;
  let l = 0, c = {};
  for (let h of e) l += (o = n.get(h)) != null ? o : i, c[h] = ((s = c[h]) != null ? s : 0) + 1;
  let u = t - l;
  for (let h of Object.keys(c)) {
    let d = c[h], g = (a = n.get(h)) != null ? a : i, f = g * d / l, v = u * f * r / d, x = g + v;
    n.set(h, x);
  }
}
function M1(e, t) {
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
    let c = pc.get(n);
    if (c === void 0 && (c = M1(e, s.size), pc.set(n, c)), s.count > 5e5) {
      let h = 0;
      for (let d of t) h += (i = c.get(d)) != null ? i : s.size;
      return h * 1.01;
    }
    let u = e.measureText(t);
    return E1(t, u.width, c, Math.max(0.05, 1 - s.count / 2e5), s.size), Nr.set(n, { count: s.count + t.length, size: s.size }), u.width;
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
function I1(e, t, n, r, i, o, s, a) {
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
function A1(e, t, n, r, i, o) {
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
        let x = I1(e, g, r, n, f, v, d), A = g.slice(0, Math.max(0, x));
        g = g.slice(A.length), l.push(A), f = Si(e, g.slice(0, Math.max(0, h)), n, d), v = Math.min(g.length, h);
      }
      f > 0 && l.push(g);
    }
  }
  return l = l.map((g, f) => f === 0 ? g.trimEnd() : g.trim()), zr.set(s, l), zr.size > 500 && zr.delete(zr.keys().next().value), l;
}
function P1(e, t) {
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
function O1(e, t) {
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
function D1(e, t, n) {
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
function ff(e, t, n) {
  const r = n.x, i = n.x + n.width - 1, o = n.y, s = n.y + n.height - 1, [a, l] = e;
  if (l < o || l > s)
    return !1;
  if (t.span === void 0)
    return a >= r && a <= i;
  const [c, u] = t.span;
  return c >= r && c <= i || u >= r && c <= i || c < r && u > i;
}
function L1(e, t, n, r) {
  let i = 0;
  if (n.current === void 0)
    return i;
  const o = n.current.range;
  (r || o.height * o.width > 1) && ff(e, t, o) && i++;
  for (const s of n.current.rangeStack)
    ff(e, t, s) && i++;
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
function mc(e, t, n, r, i) {
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
function F1(e, t, n) {
  let r = 0;
  for (const i of t) {
    const o = i.sticky ? r : r + (n ?? 0);
    if (e <= o + i.width)
      return i.sourceIndex;
    r += i.width;
  }
  return -1;
}
function q1(e, t, n, r, i, o, s, a, l, c) {
  const u = r + i;
  if (n && e <= i)
    return -2;
  if (e <= u)
    return -1;
  let h = t;
  for (let f = 0; f < c; f++) {
    const v = o - 1 - f, x = typeof s == "number" ? s : s(v);
    if (h -= x, e >= h)
      return v;
  }
  const d = o - c, g = e - (l ?? 0);
  if (typeof s == "number") {
    const f = Math.floor((g - u) / s) + a;
    return f >= d ? void 0 : f;
  } else {
    let f = u;
    for (let v = a; v < d; v++) {
      const x = s(v);
      if (g <= f + x)
        return v;
      f += x;
    }
    return;
  }
}
let ho = 0, ki = {};
const H1 = typeof window > "u";
async function z1() {
  var e;
  H1 || ((e = document == null ? void 0 : document.fonts) == null ? void 0 : e.ready) === void 0 || (await document.fonts.ready, ho = 0, ki = {}, T1());
}
z1();
function ep(e, t, n, r) {
  return `${e}_${r ?? (t == null ? void 0 : t.font)}_${n}`;
}
function Ai(e, t, n, r = "middle") {
  const i = ep(e, t, r, n);
  let o = ki[i];
  return o === void 0 && (o = t.measureText(e), ki[i] = o, ho++), ho > 1e4 && (ki = {}, ho = 0), o;
}
function $1(e, t) {
  const n = ep(e, void 0, "middle", t);
  return ki[n];
}
function tr(e, t) {
  return typeof t != "string" && (t = t.baseFontFull), N1(e, t);
}
function hf(e, t) {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  e.save(), e.textBaseline = t;
  const r = e.measureText(n);
  return e.restore(), r;
}
const gf = [];
function N1(e, t) {
  for (const o of gf)
    if (o.key === t)
      return o.val;
  const n = hf(e, "alphabetic"), i = -(hf(e, "middle").actualBoundingBoxDescent - n.actualBoundingBoxDescent) + n.actualBoundingBoxAscent / 2;
  return gf.push({
    key: t,
    val: i
  }), i;
}
function B1(e, t, n, r, i, o) {
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
function W1(e, t) {
  e.includes(`
`) && (e = e.split(/\r?\n/, 1)[0]);
  const n = t / 4;
  return e.length > n && (e = e.slice(0, n)), e;
}
function j1(e, t, n, r, i, o, s, a, l, c) {
  const u = a.baseFontFull, h = A1(e, t, u, i - a.cellHorizontalPadding * 2, c ?? !1), d = np(e, u), g = a.lineHeight * d, f = d + g * (h.length - 1), v = f + a.cellVerticalPadding > o;
  v && (e.save(), e.rect(n, r, i, o), e.clip());
  const x = r + o / 2 - f / 2;
  let A = Math.max(r + a.cellVerticalPadding, x);
  for (const y of h)
    if (tp(e, y, n, A, i, d, s, a, l), A += g, A > r + o)
      break;
  v && e.restore();
}
function $n(e, t, n, r, i) {
  const { ctx: o, rect: s, theme: a } = e, { x: l, y: c, width: u, height: h } = s;
  r = r ?? !1, r || (t = W1(t, u));
  const d = tr(o, a), g = Fc(t) === "rtl";
  if (n === void 0 && g && (n = "right"), g && (o.direction = "rtl"), t.length > 0) {
    let f = !1;
    n === "right" ? (o.textAlign = "right", f = !0) : n !== void 0 && n !== "left" && (o.textAlign = n, f = !0), r ? j1(o, t, l, c, u, h, d, a, n, i) : tp(o, t, l, c, u, h, d, a, n), f && (o.textAlign = "start"), g && (o.direction = "inherit");
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
function U1(e, t, n) {
  e.arc(t, n - 1.25 * 3.5, 1.25, 0, 2 * Math.PI, !1), e.arc(t, n, 1.25, 0, 2 * Math.PI, !1), e.arc(t, n + 1.25 * 3.5, 1.25, 0, 2 * Math.PI, !1);
}
function X1(e, t, n) {
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
    let f = Math.asin(d < -1 ? -1 : d > 1 ? 1 : d), v = 1, x = !1;
    g < 0 ? f < 0 ? f = Math.PI + f : (f = Math.PI - f, v = -1, x = !0) : f > 0 && (v = -1, x = !0), i = l.radius !== void 0 ? l.radius : n;
    const A = f / 2;
    let y = Math.abs(Math.cos(A) * i / Math.sin(A)), C;
    y > Math.min(u.len / 2, h.len / 2) ? (y = Math.min(u.len / 2, h.len / 2), C = Math.abs(y * Math.sin(A) / Math.cos(A))) : C = i;
    let P = l.x + h.nx * y, b = l.y + h.ny * y;
    P += -h.ny * C * v, b += h.nx * C * v, e.arc(P, b, C, u.ang + Math.PI / 2 * v, h.ang - Math.PI / 2 * v, x), s = l, l = c;
  }
  e.closePath();
}
function vc(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f) {
  const v = {
    x: 0,
    y: o + c,
    width: 0,
    height: 0
  };
  if (e >= g.length || t >= u || t < -2 || e < 0)
    return v;
  const x = o - i;
  if (e >= h) {
    const A = s > e ? -1 : 1, y = jr(g);
    v.x += y + l;
    for (let C = s; C !== e; C += A)
      v.x += g[A === 1 ? C : C - 1].width * A;
  } else
    for (let A = 0; A < e; A++)
      v.x += g[A].width;
  if (v.width = g[e].width + 1, t === -1)
    v.y = i, v.height = x;
  else if (t === -2) {
    v.y = 0, v.height = i;
    let A = e;
    const y = g[e].group, C = g[e].sticky;
    for (; A > 0 && _i(g[A - 1].group, y) && g[A - 1].sticky === C; ) {
      const b = g[A - 1];
      v.x -= b.width, v.width += b.width, A--;
    }
    let P = e;
    for (; P + 1 < g.length && _i(g[P + 1].group, y) && g[P + 1].sticky === C; ) {
      const b = g[P + 1];
      v.width += b.width, P++;
    }
    if (!C) {
      const b = jr(g), M = v.x - b;
      M < 0 && (v.x -= M, v.width += M), v.x + v.width > n && (v.width = n - v.x);
    }
  } else if (t >= u - d) {
    let A = u - t;
    for (v.y = r; A > 0; ) {
      const y = t + A - 1;
      v.height = typeof f == "number" ? f : f(y), v.y -= v.height, A--;
    }
    v.height += 1;
  } else {
    const A = a > t ? -1 : 1;
    if (typeof f == "number") {
      const y = t - a;
      v.y += y * f;
    } else
      for (let y = a; y !== t; y += A)
        v.y += f(y) * A;
    v.height = (typeof f == "number" ? f : f(t)) + 1;
  }
  return v;
}
const Xc = 1 << 21;
function kn(e, t) {
  return (t + 2) * Xc + e;
}
function rp(e) {
  return e % Xc;
}
function Gc(e) {
  return Math.floor(e / Xc) - 2;
}
function Yc(e) {
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
class G1 extends ip {
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
      yield Yc(t);
  }
}
function Y1(e) {
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
const K1 = St.createContext(op);
function Qn(e, ...t) {
  const n = { ...e };
  for (const r of t)
    if (r !== void 0)
      for (const i in r)
        r.hasOwnProperty(i) && (i === "bgCell" ? n[i] = on(r[i], n[i]) : n[i] = r[i]);
  return (n.headerFontFull === void 0 || e.fontFamily !== n.fontFamily || e.headerFontStyle !== n.headerFontStyle) && (n.headerFontFull = `${n.headerFontStyle} ${n.fontFamily}`), (n.baseFontFull === void 0 || e.fontFamily !== n.fontFamily || e.baseFontStyle !== n.baseFontStyle) && (n.baseFontFull = `${n.baseFontStyle} ${n.fontFamily}`), (n.markerFontFull === void 0 || e.fontFamily !== n.fontFamily || e.markerFontStyle !== n.markerFontStyle) && (n.markerFontFull = `${n.markerFontStyle} ${n.fontFamily}`), n;
}
const yc = 150;
function V1(e, t, n, r) {
  var o;
  const i = r(t);
  return ((o = i == null ? void 0 : i.measure) == null ? void 0 : o.call(i, e, t, n)) ?? yc;
}
function sp(e, t, n, r, i, o, s, a, l) {
  let c = 0;
  const u = i === void 0 ? [] : i.map((d) => {
    const g = V1(e, d[r], t, l);
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
function Z1(e, t, n, r, i, o, s, a, l) {
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
  const f = p.useRef({}), v = p.useRef(), [x, A] = p.useState();
  return p.useLayoutEffect(() => {
    const y = u.current;
    if (y === void 0 || e.every(no))
      return;
    let C = Math.max(1, 10 - Math.floor(e.length / 1e4)), P = 0;
    C < c.current && C > 1 && (C--, P = 1);
    const b = {
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
      const E = y(b, l.signal), _ = P > 0 ? y(M, l.signal) : void 0;
      let F;
      typeof E == "object" ? F = E : F = await Cd(E), _ !== void 0 && (typeof _ == "object" ? F = [...F, ..._] : F = [...F, ...await Cd(_)]), v.current = e, A(F);
    })();
  }, [l.signal, e]), p.useMemo(() => {
    let C = e.every(no) ? e : g === null ? e.map((O) => no(O) ? O : {
      ...O,
      width: yc
    }) : (g.font = h.current.baseFontFull, e.map((O, E) => {
      if (no(O))
        return O;
      if (f.current[O.id] !== void 0)
        return {
          ...O,
          width: f.current[O.id]
        };
      if (x === void 0 || v.current !== e || O.id === void 0)
        return {
          ...O,
          width: yc
        };
      const _ = sp(g, s, O, E, x, i, o, !0, a);
      return f.current[O.id] = _.width, _;
    })), P = 0, b = 0;
    const M = [];
    for (const [O, E] of C.entries())
      P += E.width, E.grow !== void 0 && E.grow > 0 && (b += E.grow, M.push(O));
    if (P < r && M.length > 0) {
      const O = [...C], E = r - P;
      let _ = E;
      for (let F = 0; F < M.length; F++) {
        const R = M[F], w = (C[R].grow ?? 0) / b, k = F === M.length - 1 ? _ : Math.min(_, Math.floor(E * w));
        O[R] = {
          ...C[R],
          growOffset: k,
          width: C[R].width + k
        }, _ -= k;
      }
      C = O;
    }
    return {
      sizedColumns: C,
      nonGrowWidth: P
    };
  }, [r, e, g, x, s, i, o, a]);
}
var ws, pf;
function J1() {
  if (pf) return ws;
  pf = 1;
  function e(t, n, r) {
    return t === t && (r !== void 0 && (t = t <= r ? t : r), n !== void 0 && (t = t >= n ? t : n)), t;
  }
  return ws = e, ws;
}
var Ss, mf;
function Q1() {
  if (mf) return Ss;
  mf = 1;
  var e = J1(), t = Dc();
  function n(r, i, o) {
    return o === void 0 && (o = i, i = void 0), o !== void 0 && (o = t(o), o = o === o ? o : 0), i !== void 0 && (i = t(i), i = i === i ? i : 0), e(t(r), i, o);
  }
  return Ss = n, Ss;
}
var ev = Q1();
const Cn = /* @__PURE__ */ er(ev);
var Cs, vf;
function tv() {
  if (vf) return Cs;
  vf = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return Cs = t, Cs;
}
var ks, yf;
function nv() {
  if (yf) return ks;
  yf = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ks = e, ks;
}
var xs, bf;
function lp() {
  if (bf) return xs;
  bf = 1;
  var e = Tc(), t = tv(), n = nv();
  function r(i) {
    var o = -1, s = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++o < s; )
      this.add(i[o]);
  }
  return r.prototype.add = r.prototype.push = t, r.prototype.has = n, xs = r, xs;
}
var Rs, wf;
function rv() {
  if (wf) return Rs;
  wf = 1;
  function e(t, n, r, i) {
    for (var o = t.length, s = r + (i ? 1 : -1); i ? s-- : ++s < o; )
      if (n(t[s], s, t))
        return s;
    return -1;
  }
  return Rs = e, Rs;
}
var _s, Sf;
function iv() {
  if (Sf) return _s;
  Sf = 1;
  function e(t) {
    return t !== t;
  }
  return _s = e, _s;
}
var Ts, Cf;
function ov() {
  if (Cf) return Ts;
  Cf = 1;
  function e(t, n, r) {
    for (var i = r - 1, o = t.length; ++i < o; )
      if (t[i] === n)
        return i;
    return -1;
  }
  return Ts = e, Ts;
}
var Es, kf;
function av() {
  if (kf) return Es;
  kf = 1;
  var e = rv(), t = iv(), n = ov();
  function r(i, o, s) {
    return o === o ? n(i, o, s) : e(i, t, s);
  }
  return Es = r, Es;
}
var Ms, xf;
function sv() {
  if (xf) return Ms;
  xf = 1;
  var e = av();
  function t(n, r) {
    var i = n == null ? 0 : n.length;
    return !!i && e(n, r, 0) > -1;
  }
  return Ms = t, Ms;
}
var Is, Rf;
function lv() {
  if (Rf) return Is;
  Rf = 1;
  function e(t, n, r) {
    for (var i = -1, o = t == null ? 0 : t.length; ++i < o; )
      if (r(n, t[i]))
        return !0;
    return !1;
  }
  return Is = e, Is;
}
var As, _f;
function cp() {
  if (_f) return As;
  _f = 1;
  function e(t, n) {
    return t.has(n);
  }
  return As = e, As;
}
var Ps, Tf;
function up() {
  if (Tf) return Ps;
  Tf = 1;
  var e = pr(), t = Pn(), n = e(t, "Set");
  return Ps = n, Ps;
}
var Os, Ef;
function cv() {
  if (Ef) return Os;
  Ef = 1;
  function e() {
  }
  return Os = e, Os;
}
var Ds, Mf;
function Kc() {
  if (Mf) return Ds;
  Mf = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(i) {
      r[++n] = i;
    }), r;
  }
  return Ds = e, Ds;
}
var Ls, If;
function uv() {
  if (If) return Ls;
  If = 1;
  var e = up(), t = cv(), n = Kc(), r = 1 / 0, i = e && 1 / n(new e([, -0]))[1] == r ? function(o) {
    return new e(o);
  } : t;
  return Ls = i, Ls;
}
var Fs, Af;
function dv() {
  if (Af) return Fs;
  Af = 1;
  var e = lp(), t = sv(), n = lv(), r = cp(), i = uv(), o = Kc(), s = 200;
  function a(l, c, u) {
    var h = -1, d = t, g = l.length, f = !0, v = [], x = v;
    if (u)
      f = !1, d = n;
    else if (g >= s) {
      var A = c ? null : i(l);
      if (A)
        return o(A);
      f = !1, d = r, x = new e();
    } else
      x = c ? [] : v;
    e:
      for (; ++h < g; ) {
        var y = l[h], C = c ? c(y) : y;
        if (y = u || y !== 0 ? y : 0, f && C === C) {
          for (var P = x.length; P--; )
            if (x[P] === C)
              continue e;
          c && x.push(C), v.push(y);
        } else d(x, C, u) || (x !== v && x.push(C), v.push(y));
      }
    return v;
  }
  return Fs = a, Fs;
}
var qs, Pf;
function fv() {
  if (Pf) return qs;
  Pf = 1;
  var e = dv();
  function t(n) {
    return n && n.length ? e(n) : [];
  }
  return qs = t, qs;
}
var hv = fv();
const gv = /* @__PURE__ */ er(hv);
var Hs, Of;
function dp() {
  if (Of) return Hs;
  Of = 1;
  function e(t, n) {
    for (var r = -1, i = n.length, o = t.length; ++r < i; )
      t[o + r] = n[r];
    return t;
  }
  return Hs = e, Hs;
}
var zs, Df;
function pv() {
  if (Df) return zs;
  Df = 1;
  var e = Ti(), t = Ec(), n = An(), r = e ? e.isConcatSpreadable : void 0;
  function i(o) {
    return n(o) || t(o) || !!(r && o && o[r]);
  }
  return zs = i, zs;
}
var $s, Lf;
function mv() {
  if (Lf) return $s;
  Lf = 1;
  var e = dp(), t = pv();
  function n(r, i, o, s, a) {
    var l = -1, c = r.length;
    for (o || (o = t), a || (a = []); ++l < c; ) {
      var u = r[l];
      i > 0 && o(u) ? i > 1 ? n(u, i - 1, o, s, a) : e(a, u) : s || (a[a.length] = u);
    }
    return a;
  }
  return $s = n, $s;
}
var Ns, Ff;
function vv() {
  if (Ff) return Ns;
  Ff = 1;
  var e = mv();
  function t(n) {
    var r = n == null ? 0 : n.length;
    return r ? e(n, 1) : [];
  }
  return Ns = t, Ns;
}
var yv = vv();
const qf = /* @__PURE__ */ er(yv);
var Bs, Hf;
function bv() {
  if (Hf) return Bs;
  Hf = 1;
  var e = Math.ceil, t = Math.max;
  function n(r, i, o, s) {
    for (var a = -1, l = t(e((i - r) / (o || 1)), 0), c = Array(l); l--; )
      c[s ? l : ++a] = r, r += o;
    return c;
  }
  return Bs = n, Bs;
}
var Ws, zf;
function Vc() {
  if (zf) return Ws;
  zf = 1;
  var e = Sg(), t = Ic();
  function n(r) {
    return r != null && t(r.length) && !e(r);
  }
  return Ws = n, Ws;
}
var js, $f;
function wv() {
  if ($f) return js;
  $f = 1;
  var e = Rc(), t = Vc(), n = Mc(), r = gr();
  function i(o, s, a) {
    if (!r(a))
      return !1;
    var l = typeof s;
    return (l == "number" ? t(a) && n(s, a.length) : l == "string" && s in a) ? e(a[s], o) : !1;
  }
  return js = i, js;
}
var Us, Nf;
function Sv() {
  if (Nf) return Us;
  Nf = 1;
  var e = Dc(), t = 1 / 0, n = 17976931348623157e292;
  function r(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var o = i < 0 ? -1 : 1;
      return o * n;
    }
    return i === i ? i : 0;
  }
  return Us = r, Us;
}
var Xs, Bf;
function Cv() {
  if (Bf) return Xs;
  Bf = 1;
  var e = bv(), t = wv(), n = Sv();
  function r(i) {
    return function(o, s, a) {
      return a && typeof a != "number" && t(o, s, a) && (s = a = void 0), o = n(o), s === void 0 ? (s = o, o = 0) : s = n(s), a = a === void 0 ? o < s ? 1 : -1 : n(a), e(o, s, a, i);
    };
  }
  return Xs = r, Xs;
}
var Gs, Wf;
function kv() {
  if (Wf) return Gs;
  Wf = 1;
  var e = Cv(), t = e();
  return Gs = t, Gs;
}
var xv = kv();
const ur = /* @__PURE__ */ er(xv), ht = '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">', Rv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}<rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/><path d="M15.75 4h-1.5a.25.25 0 0 0-.177.074L9.308 8.838a3.75 3.75 0 1 0 1.854 1.854l1.155-1.157.967.322a.5.5 0 0 0 .65-.55l-.18-1.208.363-.363.727.331a.5.5 0 0 0 .69-.59l-.254-.904.647-.647A.25.25 0 0 0 16 5.75v-1.5a.25.25 0 0 0-.25-.25zM7.5 13.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" fill="${t}"/></svg>`;
}, _v = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}<rect x="2" y="2" width="16" height="16" rx="4" fill="${n}"/><path d="m12.223 13.314 3.052-2.826a.65.65 0 0 0 0-.984l-3.052-2.822c-.27-.25-.634-.242-.865.022-.232.263-.206.636.056.882l2.601 2.41-2.601 2.41c-.262.245-.288.619-.056.882.231.263.595.277.865.026Zm-4.444.005c.266.25.634.241.866-.027.231-.263.206-.636-.06-.882L5.983 10l2.602-2.405c.266-.25.291-.62.06-.887-.232-.263-.596-.272-.866-.022L4.723 9.51a.653.653 0 0 0 0 .983l3.056 2.827Z" fill="${t}"/></svg>`;
}, Tv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${n}"/>
    <path d="M6.52 12.78H5.51V8.74l-1.33.47v-.87l2.29-.83h.05v5.27zm5.2 0H8.15v-.69l1.7-1.83a6.38 6.38 0 0 0 .34-.4c.09-.11.16-.22.22-.32s.1-.19.12-.27a.9.9 0 0 0 0-.56.63.63 0 0 0-.15-.23.58.58 0 0 0-.22-.15.75.75 0 0 0-.29-.05c-.27 0-.48.08-.62.23a.95.95 0 0 0-.2.65H8.03c0-.24.04-.46.13-.67a1.67 1.67 0 0 1 .97-.91c.23-.1.49-.14.77-.14.26 0 .5.04.7.11.21.08.38.18.52.32.14.13.25.3.32.48a1.74 1.74 0 0 1 .03 1.13 2.05 2.05 0 0 1-.24.47 4.16 4.16 0 0 1-.35.47l-.47.5-1 1.05h2.32v.8zm1.8-3.08h.55c.28 0 .48-.06.61-.2a.76.76 0 0 0 .2-.55.8.8 0 0 0-.05-.28.56.56 0 0 0-.13-.22.6.6 0 0 0-.23-.15.93.93 0 0 0-.32-.05.92.92 0 0 0-.29.05.72.72 0 0 0-.23.12.57.57 0 0 0-.21.46H12.4a1.3 1.3 0 0 1 .5-1.04c.15-.13.33-.23.54-.3a2.48 2.48 0 0 1 1.4 0c.2.06.4.15.55.28.15.13.27.28.36.47.08.19.13.4.13.65a1.15 1.15 0 0 1-.2.65 1.36 1.36 0 0 1-.58.49c.15.05.28.12.38.2a1.14 1.14 0 0 1 .43.62c.03.13.05.26.05.4 0 .25-.05.47-.14.66a1.42 1.42 0 0 1-.4.49c-.16.13-.35.23-.58.3a2.51 2.51 0 0 1-.73.1c-.22 0-.44-.03-.65-.09a1.8 1.8 0 0 1-.57-.28 1.43 1.43 0 0 1-.4-.47 1.41 1.41 0 0 1-.15-.66h1a.66.66 0 0 0 .22.5.87.87 0 0 0 .58.2c.25 0 .45-.07.6-.2a.71.71 0 0 0 .21-.56.97.97 0 0 0-.06-.36.61.61 0 0 0-.18-.25.74.74 0 0 0-.28-.15 1.33 1.33 0 0 0-.37-.04h-.55V9.7z" fill="${t}"/>
  </svg>`;
}, Ev = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path d="M8.182 12.4h3.636l.655 1.6H14l-3.454-8H9.455L6 14h1.527l.655-1.6zM10 7.44l1.36 3.651H8.64L10 7.441z" fill="${t}"/>
</svg>`;
}, Mv = (e) => {
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
}, Iv = (e) => {
  const t = e.bgColor;
  return `${ht}
    <path stroke="${t}" stroke-width="2" d="M12 3v14"/>
    <path stroke="${t}" stroke-width="2" stroke-linecap="round" d="M10 4h4m-4 12h4"/>
    <path d="M11 14h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4v2h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4v2ZM9.5 8H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.5v2H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h4.5v2Z" fill="${t}"/>
  </svg>
`;
}, Av = fp, Pv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.138a.5.5 0 00.748.434l5.492-3.138a.5.5 0 000-.868L7.748 6.427A.5.5 0 007 6.862v6.276z" fill="${t}"/>
</svg>`;
}, Ov = (e) => {
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
}, Dv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="M12.499 10.801a.5.5 0 01.835 0l2.698 4.098a.5.5 0 01-.418.775H10.22a.5.5 0 01-.417-.775l2.697-4.098z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07 8.934a.5.5 0 01.824 0l4.08 5.958a.5.5 0 01-.412.782h-8.16a.5.5 0 01-.413-.782l4.08-5.958zM13.75 8.333a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z" fill="${t}"/>
</svg>`;
}, Lv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <path fill="${t}" d="M3 3h14v14H3z"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2zm-7.24 9.78h1.23c.15 0 .27.06.36.18l.98 1.28a.43.43 0 0 1-.05.58l-1.2 1.21a.45.45 0 0 1-.6.04A6.72 6.72 0 0 1 7.33 10c0-.61.1-1.2.25-1.78a6.68 6.68 0 0 1 2.12-3.3.44.44 0 0 1 .6.04l1.2 1.2c.16.17.18.42.05.59l-.98 1.29a.43.43 0 0 1-.36.17H8.98A5.38 5.38 0 0 0 8.67 10c0 .62.11 1.23.3 1.79z" fill="${n}"/>
  </svg>`;
}, Fv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${n}"/>
    <path d="m13.49 13.15-2.32-3.27h1.4V7h1.86v2.88h1.4l-2.34 3.27zM11 13H9v-3l-1.5 1.92L6 10v3H4V7h2l1.5 2L9 7h2v6z" fill="${t}"/>
  </svg>`;
}, qv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path d="M14.8 4.182h-.6V3H13v1.182H7V3H5.8v1.182h-.6c-.66 0-1.2.532-1.2 1.182v9.454C4 15.468 4.54 16 5.2 16h9.6c.66 0 1.2-.532 1.2-1.182V5.364c0-.65-.54-1.182-1.2-1.182zm0 10.636H5.2V7.136h9.6v7.682z" fill="${t}"/>
</svg>`;
}, Hv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${n}"/>
    <path d="M10 4a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm0 10.8A4.8 4.8 0 0 1 5.2 10a4.8 4.8 0 1 1 4.8 4.8z" fill="${t}"/>
    <path d="M10 7H9v3.93L12.5 13l.5-.8-3-1.76V7z" fill="${t}"/>
  </svg>`;
}, zv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.643a1.357 1.357 0 100 2.714 1.357 1.357 0 000-2.714zM7.357 10a2.643 2.643 0 115.286 0 2.643 2.643 0 01-5.286 0z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.589 4.898A5.643 5.643 0 0115.643 10v.5a2.143 2.143 0 01-4.286 0V8a.643.643 0 011.286 0v2.5a.857.857 0 001.714 0V10a4.357 4.357 0 10-1.708 3.46.643.643 0 01.782 1.02 5.643 5.643 0 11-5.842-9.582z" fill="${t}"/>
</svg>`;
}, $v = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <rect x="2" y="8" width="10" height="8" rx="2" fill="${n}"/>
    <rect x="8" y="4" width="10" height="8" rx="2" fill="${n}"/>
    <path d="M10.68 7.73V6l2.97 3.02-2.97 3.02v-1.77c-2.13 0-3.62.7-4.68 2.2.43-2.15 1.7-4.31 4.68-4.74z" fill="${t}"/>
  </svg>`;
}, Nv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path fill="${t}" d="M4 3h12v14H4z"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2A1.6 1.6 0 002 3.6v12.8A1.6 1.6 0 003.6 18h12.8a1.6 1.6 0 001.6-1.6V3.6A1.6 1.6 0 0016.4 2H3.6zm11.3 10.8a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7h-1.4a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.6-.693.117.117 0 00.1-.115V10.35a.117.117 0 00-.117-.116h-2.8a.117.117 0 00-.117.116v2.333c0 .064.053.117.117.117h.117a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7H9.3a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.117a.117.117 0 00.117-.117V10.35a.117.117 0 00-.117-.117h-2.8a.117.117 0 00-.117.117v2.342c0 .058.042.106.1.115a.7.7 0 01.6.693v1.4a.7.7 0 01-.7.7H5.1a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.35a.116.116 0 00.116-.117v-2.45c0-.515.418-.933.934-.933h2.917a.117.117 0 00.117-.117V6.85a.117.117 0 00-.117-.116h-2.45a.7.7 0 01-.7-.7V5.1a.7.7 0 01.7-.7h6.067a.7.7 0 01.7.7v.934a.7.7 0 01-.7.7h-2.45a.117.117 0 00-.118.116v2.333c0 .064.053.117.117.117H13.5c.516 0 .934.418.934.934v2.45c0 .063.052.116.116.116h.35z" fill="${n}"/>
</svg>`;
}, Bv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
    <path d="M9.98 13.33c.45 0 .74-.3.73-.75l-.01-.1-.16-1.67 1.45 1.05a.81.81 0 0 0 .5.18c.37 0 .72-.32.72-.76 0-.3-.17-.54-.49-.68l-1.63-.77 1.63-.77c.32-.14.49-.37.49-.67 0-.45-.34-.76-.71-.76a.81.81 0 0 0-.5.18l-1.47 1.03.16-1.74.01-.08c.01-.46-.27-.76-.72-.76-.46 0-.76.32-.75.76l.01.08.16 1.74-1.47-1.03a.77.77 0 0 0-.5-.18.74.74 0 0 0-.72.76c0 .3.17.53.49.67l1.63.77-1.62.77c-.32.14-.5.37-.5.68 0 .44.35.75.72.75a.78.78 0 0 0 .5-.17L9.4 10.8l-.16 1.68v.09c-.02.44.28.75.74.75z" fill="${t}"/>
  </svg>`;
}, Wv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
    <path d="M8 5.83H5.83a.83.83 0 0 0 0 1.67h1.69A4.55 4.55 0 0 1 8 5.83zm-.33 3.34H5.83a.83.83 0 0 0 0 1.66h2.72a4.57 4.57 0 0 1-.88-1.66zM5.83 12.5a.83.83 0 0 0 0 1.67h7.5a.83.83 0 1 0 0-1.67h-7.5zm8.8-2.9a3.02 3.02 0 0 0 .46-1.6c0-1.66-1.32-3-2.94-3C10.52 5 9.2 6.34 9.2 8s1.31 3 2.93 3c.58 0 1.11-.17 1.56-.47l2.04 2.08.93-.94-2.04-2.08zm-2.48.07c-.9 0-1.63-.75-1.63-1.67s.73-1.67 1.63-1.67c.9 0 1.63.75 1.63 1.67s-.73 1.67-1.63 1.67z" fill="${t}"/>
  </svg>`;
}, jv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path d="M7.676 4.726V3l2.976 3.021-2.976 3.022v-1.77c-2.125 0-3.613.69-4.676 2.201.425-2.158 1.7-4.316 4.676-4.748zM10.182 14.4h3.636l.655 1.6H16l-3.454-8h-1.091L8 16h1.527l.655-1.6zM12 9.44l1.36 3.65h-2.72L12 9.44z" fill="${t}"/>
</svg>`;
}, Uv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.167 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666H4.167z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.083 4.167a.833.833 0 10-1.666 0v4.166a.833.833 0 101.666 0V4.167zM11.667 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666h-4.166zM5.367 11.688a.833.833 0 00-1.179 1.179l2.947 2.946a.833.833 0 001.178-1.178l-2.946-2.947z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.313 12.867a.833.833 0 10-1.178-1.179l-2.947 2.947a.833.833 0 101.179 1.178l2.946-2.946z" fill="${t}"/>
  <path d="M10.833 12.5c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833zM10.833 15c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833z" fill="${t}"/>
</svg>`;
}, Xv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${n}"/>
    <path d="M10 8.84a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32zm3.02 3.61a3.92 3.92 0 0 0 .78-3.28.49.49 0 1 0-.95.2c.19.87-.02 1.78-.58 2.47a2.92 2.92 0 1 1-4.13-4.08 2.94 2.94 0 0 1 2.43-.62.49.49 0 1 0 .17-.96 3.89 3.89 0 1 0 2.28 6.27zM10 4.17a5.84 5.84 0 0 0-5.44 7.93.49.49 0 1 0 .9-.35 4.86 4.86 0 1 1 2.5 2.67.49.49 0 1 0-.4.88c.76.35 1.6.54 2.44.53a5.83 5.83 0 0 0 0-11.66zm3.02 3.5a.7.7 0 1 0-1.4 0 .7.7 0 0 0 1.4 0zm-6.97 5.35a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z" fill="${t}"/>
  </svg>`;
}, Gv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path d="M12.4 13.565c1.865-.545 3.645-2.083 3.645-4.396 0-1.514-.787-2.604-2.071-2.604C12.69 6.565 12 7.63 12 8.939c1.114.072 1.865.726 1.865 1.683 0 .933-.8 1.647-1.84 2.023l.375.92zM4 5h6v2H4zM4 9h5v2H4zM4 13h4v2H4z" fill="${t}"/>
</svg>`;
}, Yv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `
    ${ht}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
    <path d="M12.4 13.56c1.86-.54 3.65-2.08 3.65-4.4 0-1.5-.8-2.6-2.08-2.6S12 7.64 12 8.95c1.11.07 1.86.73 1.86 1.68 0 .94-.8 1.65-1.83 2.03l.37.91zM4 5h6v2H4zm0 4h5v2H4zm0 4h4v2H4z" fill="${t}"/>
  </svg>`;
}, Kv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${n}"/>
  <path d="M10 7a1 1 0 100-2v2zm0 6a1 1 0 100 2v-2zm0-8H7v2h3V5zm-3 6h5V9H7v2zm5 2h-2v2h2v-2zm1-1a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zM4 8a3 3 0 003 3V9a1 1 0 01-1-1H4zm3-3a3 3 0 00-3 3h2a1 1 0 011-1V5z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.856 12.014a.5.5 0 00-.712.702L5.409 14l-1.265 1.284a.5.5 0 00.712.702l1.255-1.274 1.255 1.274a.5.5 0 00.712-.702L6.813 14l1.265-1.284a.5.5 0 00-.712-.702L6.11 13.288l-1.255-1.274zM12.856 4.014a.5.5 0 00-.712.702L13.409 6l-1.265 1.284a.5.5 0 10.712.702l1.255-1.274 1.255 1.274a.5.5 0 10.712-.702L14.813 6l1.265-1.284a.5.5 0 00-.712-.702L14.11 5.288l-1.255-1.274z" fill="${t}"/>
</svg>`;
}, Vv = (e) => {
  const t = e.fgColor, n = e.bgColor;
  return `${ht}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${n}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 7.25a.75.75 0 000-1.5h-6.5a.75.75 0 100 1.5h6.5zM15 10a.75.75 0 01-.75.75h-6.5a.75.75 0 010-1.5h6.5A.75.75 0 0115 10zm-.75 4.25a.75.75 0 000-1.5h-6.5a.75.75 0 000 1.5h6.5zm-8.987-7a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 2.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 4.25a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="${t}"/>
</svg>`;
}, Zv = (e) => {
  const t = e.fgColor;
  return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 15v1h14v-2.5c0-.87-.44-1.55-.98-2.04a6.19 6.19 0 0 0-1.9-1.14 12.1 12.1 0 0 0-2.48-.67A4 4 0 1 0 5 6a4 4 0 0 0 2.36 3.65c-.82.13-1.7.36-2.48.67-.69.28-1.37.65-1.9 1.13A2.8 2.8 0 0 0 2 13.5V15z" fill="${e.bgColor}" stroke="${t}" stroke-width="2"/>
  </svg>`;
}, Jv = (e) => {
  const t = e.fgColor;
  return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.43 6.04v-.18a3.86 3.86 0 0 0-7.72 0v.18A2.15 2.15 0 0 0 3 8.14v5.72C3 15.04 3.96 16 5.14 16H12c1.18 0 2.14-.96 2.14-2.14V8.14c0-1.03-.73-1.9-1.71-2.1zM7.86 6v-.14a.71.71 0 1 1 1.43 0V6H7.86z" fill="${e.bgColor}" stroke="${t}" stroke-width="2"/>
  </svg>
`;
}, Qv = {
  headerRowID: Rv,
  headerNumber: Tv,
  headerCode: _v,
  headerString: Ev,
  headerBoolean: Mv,
  headerAudioUri: Av,
  headerVideoUri: Pv,
  headerEmoji: Ov,
  headerImage: Dv,
  headerUri: fp,
  headerPhone: Lv,
  headerMarkdown: Fv,
  headerDate: qv,
  headerTime: Hv,
  headerEmail: zv,
  headerReference: $v,
  headerIfThenElse: Nv,
  headerSingleValue: Bv,
  headerLookup: Wv,
  headerTextTemplate: jv,
  headerMath: Uv,
  headerRollup: Xv,
  headerJoinStrings: Gv,
  headerSplitString: Yv,
  headerGeoDistance: Kv,
  headerArray: Vv,
  rowOwnerOverlay: Zv,
  protectedColumnOverlay: Jv,
  renameIcon: Iv
};
function ey(e, t) {
  return e === "normal" ? [t.bgIconHeader, t.fgIconHeader] : e === "selected" ? ["white", t.accentColor] : [t.accentColor, t.bgHeader];
}
class ty {
  constructor(t, n) {
    be(this, "onSettled");
    be(this, "spriteMap", /* @__PURE__ */ new Map());
    be(this, "headerIcons");
    be(this, "inFlight", 0);
    this.onSettled = n, this.headerIcons = t ?? {};
  }
  drawSprite(t, n, r, i, o, s, a, l = 1) {
    const [c, u] = ey(n, a), h = s * Math.ceil(window.devicePixelRatio), d = `${c}_${u}_${h}_${t}`;
    let g = this.spriteMap.get(d);
    if (g === void 0) {
      const f = this.headerIcons[t];
      if (f === void 0)
        return;
      g = document.createElement("canvas");
      const v = g.getContext("2d");
      if (v === null)
        return;
      const x = new Image();
      x.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(f({ fgColor: u, bgColor: c }))}`, this.spriteMap.set(d, g);
      const A = x.decode();
      if (A === void 0)
        return;
      this.inFlight++, A.then(() => {
        v.drawImage(x, 0, 0, h, h);
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
function Oo(e, t, n, r, i, o, s, a, l) {
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
    for (let x = o.sourceIndex - 1; x >= g; x--)
      f -= s[x].width, v += s[x].width;
    for (let x = o.sourceIndex + 1; x <= l; x++)
      v += s[x].width;
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
    for (let x = o.sourceIndex - 1; x >= a; x--)
      f -= s[x].width, v += s[x].width;
    for (let x = o.sourceIndex + 1; x <= g; x++)
      v += s[x].width;
    c = {
      x: f,
      y: n,
      width: v,
      height: i
    };
  }
  return [c, u];
}
function ny(e, t, n, r) {
  if (r === "any")
    return mp(e, { x: t, y: n, width: 1, height: 1 });
  if (r === "vertical" && (t = e.x), r === "horizontal" && (n = e.y), Zg([t, n], e))
    return;
  const i = t - e.x, o = e.x + e.width - t, s = n - e.y + 1, a = e.y + e.height - n, l = Math.min(r === "vertical" ? Number.MAX_SAFE_INTEGER : i, r === "vertical" ? Number.MAX_SAFE_INTEGER : o, r === "horizontal" ? Number.MAX_SAFE_INTEGER : s, r === "horizontal" ? Number.MAX_SAFE_INTEGER : a);
  return l === a ? { x: e.x, y: e.y + e.height, width: e.width, height: n - e.y - e.height + 1 } : l === s ? { x: e.x, y: n, width: e.width, height: e.y - n } : l === o ? { x: e.x + e.width, y: e.y, width: t - e.x - e.width + 1, height: e.height } : { x: t, y: e.y, width: e.x - t, height: e.height };
}
function wo(e, t, n, r, i, o, s, a) {
  return e <= i + s && i <= e + n && t <= o + a && o <= t + r;
}
function Do(e, t, n) {
  return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height;
}
function mp(e, t) {
  const n = Math.min(e.x, t.x), r = Math.min(e.y, t.y), i = Math.max(e.x + e.width, t.x + t.width) - n, o = Math.max(e.y + e.height, t.y + t.height) - r;
  return { x: n, y: r, width: i, height: o };
}
function ry(e, t) {
  return e.x <= t.x && e.y <= t.y && e.x + e.width >= t.x + t.width && e.y + e.height >= t.y + t.height;
}
function iy(e, t, n, r) {
  if (e.x > t || e.y > n || e.x < 0 && e.y < 0 && e.x + e.width > t && e.y + e.height > n)
    return;
  if (e.x >= 0 && e.y >= 0 && e.x + e.width <= t && e.y + e.height <= n)
    return e;
  const i = -4, o = -4, s = t + 4, a = n + 4, l = i - e.x, c = e.x + e.width - s, u = o - e.y, h = e.y + e.height - a, d = l > 0 ? e.x + Math.floor(l / r) * r : e.x, g = c > 0 ? e.x + e.width - Math.floor(c / r) * r : e.x + e.width, f = u > 0 ? e.y + Math.floor(u / r) * r : e.y, v = h > 0 ? e.y + e.height - Math.floor(h / r) * r : e.y + e.height;
  return { x: d, y: f, width: g - d, height: v - f };
}
function oy(e, t, n, r, i) {
  const [o, s, a, l] = t, [c, u, h, d] = i, { x: g, y: f, width: v, height: x } = e, A = [];
  if (v <= 0 || x <= 0)
    return A;
  const y = g + v, C = f + x, P = g < o, b = f < s, M = g + v > a, O = f + x > l, E = g >= o && g < a || y > o && y <= a || g < o && y > a, _ = f >= s && f < l || C > s && C <= l || f < s && C > l;
  if (E && _) {
    const R = Math.max(g, o), w = Math.max(f, s), k = Math.min(y, a), T = Math.min(C, l);
    A.push({
      rect: { x: R, y: w, width: k - R, height: T - w },
      clip: {
        x: c,
        y: u,
        width: h - c + 1,
        height: d - u + 1
      }
    });
  }
  if (P && b) {
    const R = g, w = f, k = Math.min(y, o), T = Math.min(C, s);
    A.push({
      rect: {
        x: R,
        y: w,
        width: k - R,
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
    const R = Math.max(g, o), w = f, k = Math.min(y, a), T = Math.min(C, s);
    A.push({
      rect: {
        x: R,
        y: w,
        width: k - R,
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
    const R = Math.max(g, a), w = f, k = y, T = Math.min(C, s);
    A.push({
      rect: {
        x: R,
        y: w,
        width: k - R,
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
    const R = g, w = Math.max(f, s), k = Math.min(y, o), T = Math.min(C, l);
    A.push({
      rect: {
        x: R,
        y: w,
        width: k - R,
        height: T - w
      },
      clip: {
        x: 0,
        y: u,
        width: c + 1,
        height: d - u + 1
      }
    });
  }
  if (M && _) {
    const R = Math.max(g, a), w = Math.max(f, s), k = y, T = Math.min(C, l);
    A.push({
      rect: {
        x: R,
        y: w,
        width: k - R,
        height: T - w
      },
      clip: {
        x: h,
        y: u,
        width: n - h + 1,
        height: d - u + 1
      }
    });
  }
  if (P && O) {
    const R = g, w = Math.max(f, l), k = Math.min(y, o), T = C;
    A.push({
      rect: {
        x: R,
        y: w,
        width: k - R,
        height: T - w
      },
      clip: {
        x: 0,
        y: d,
        width: c + 1,
        height: r - d + 1
      }
    });
  }
  if (O && E) {
    const R = Math.max(g, o), w = Math.max(f, l), k = Math.min(y, a), T = C;
    A.push({
      rect: {
        x: R,
        y: w,
        width: k - R,
        height: T - w
      },
      clip: {
        x: c,
        y: d,
        width: h - c + 1,
        height: r - d + 1
      }
    });
  }
  if (M && O) {
    const R = Math.max(g, a), w = Math.max(f, l), k = y, T = C;
    A.push({
      rect: {
        x: R,
        y: w,
        width: k - R,
        height: T - w
      },
      clip: {
        x: h,
        y: d,
        width: n - h + 1,
        height: r - d + 1
      }
    });
  }
  return A;
}
const ay = {
  kind: ae.Loading,
  allowOverlay: !1
};
function jf(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, x, A, y, C, P, b, M, O, E, _, F, R, w, k, T, S, z, H, B) {
  let ne = (C == null ? void 0 : C.size) ?? Number.MAX_SAFE_INTEGER;
  const Z = performance.now();
  let I = k.baseFontFull;
  e.font = I;
  const N = { ctx: e }, Y = [0, 0], re = x > 0 ? vr(l, x, c) : 0;
  let $, ce;
  const se = hp(y);
  return nr(t, a, o, s, i, (oe, pe, we, Ce, Be) => {
    const J = Math.max(0, Ce - pe), Ee = pe + J, Pe = i + 1, dt = oe.width - J, Se = r - i - 1;
    if (y.length > 0) {
      let Ye = !1;
      for (let Ke = 0; Ke < y.length; Ke++) {
        const ue = y[Ke];
        if (wo(Ee, Pe, dt, Se, ue.x, ue.y, ue.width, ue.height)) {
          Ye = !0;
          break;
        }
      }
      if (!Ye)
        return;
    }
    const ve = () => {
      e.save(), e.beginPath(), e.rect(Ee, Pe, dt, Se), e.clip();
    }, Oe = P.columns.hasIndex(oe.sourceIndex), Le = h(oe.group ?? "").overrideTheme, qe = oe.themeOverride === void 0 && Le === void 0 ? k : Qn(k, Le, oe.themeOverride), Me = qe.baseFontFull;
    Me !== I && (I = Me, e.font = Me), ve();
    let nt;
    return Oo(Be, we, r, l, c, x, A, se, (Ye, Ke, ue, He, We) => {
      var kt, Dt, hn;
      if (Ke < 0 || (Y[0] = oe.sourceIndex, Y[1] = Ke, C !== void 0 && !C.has(Y)))
        return;
      if (y.length > 0) {
        let Ge = !1;
        for (let vt = 0; vt < y.length; vt++) {
          const ct = y[vt];
          if (wo(pe, Ye, oe.width, ue, ct.x, ct.y, ct.width, ct.height)) {
            Ge = !0;
            break;
          }
        }
        if (!Ge)
          return;
      }
      const De = P.rows.hasIndex(Ke), Mt = g.hasIndex(Ke), Ve = Ke < l ? u(Y) : ay;
      let je = pe, Ze = oe.width, Ct = !1, It = !1;
      if (Ve.span !== void 0) {
        const [Ge, vt] = Ve.span, ct = `${Ke},${Ge},${vt},${oe.sticky}`;
        if (ce === void 0 && (ce = /* @__PURE__ */ new Set()), ce.has(ct)) {
          ne--;
          return;
        } else {
          const ut = pp(Ve.span, pe, Ye, oe.width, ue, oe, n), qt = oe.sticky ? ut[0] : ut[1];
          if (!oe.sticky && ut[0] !== void 0 && (It = !0), qt !== void 0) {
            je = qt.x, Ze = qt.width, ce.add(ct), e.restore(), nt = void 0, e.save(), e.beginPath();
            const pt = Math.max(0, Ce - qt.x);
            e.rect(qt.x + pt, Ye, qt.width - pt, ue), $ === void 0 && ($ = []), $.push({
              x: qt.x + pt,
              y: Ye,
              width: qt.width - pt,
              height: ue
            }), e.clip(), Ct = !0;
          }
        }
      }
      const sn = d == null ? void 0 : d(Ke), Kt = We && ((kt = oe.trailingRowOptions) == null ? void 0 : kt.themeOverride) !== void 0 ? (Dt = oe.trailingRowOptions) == null ? void 0 : Dt.themeOverride : void 0, mt = Ve.themeOverride === void 0 && sn === void 0 && Kt === void 0 ? qe : Qn(qe, sn, Kt, Ve.themeOverride);
      e.beginPath();
      const Bt = D1(Y, Ve, P);
      let Wt = L1(Y, Ve, P, v);
      const On = Ve.span !== void 0 && P.columns.some(
        (Ge) => Ve.span !== void 0 && Ge >= Ve.span[0] && Ge <= Ve.span[1]
        //alloc
      );
      Bt && !f && v ? Wt = 0 : Bt && v && (Wt = Math.max(Wt, 1)), On && Wt++, Bt || (De && Wt++, Oe && !We && Wt++);
      const Dn = Ve.kind === ae.Protected ? mt.bgCellMedium : mt.bgCell;
      let gt;
      if ((He || Dn !== k.bgCell) && (gt = on(Dn, gt)), Wt > 0 || Mt) {
        Mt && (gt = on(mt.bgHeader, gt));
        for (let Ge = 0; Ge < Wt; Ge++)
          gt = on(mt.accentLight, gt);
      } else if (b !== void 0) {
        for (const Ge of b)
          if (Ge[0] === oe.sourceIndex && Ge[1] === Ke) {
            gt = on(mt.bgSearchResult, gt);
            break;
          }
      }
      if (M !== void 0)
        for (let Ge = 0; Ge < M.length; Ge++) {
          const vt = M[Ge], ct = vt.range;
          vt.style !== "solid-outline" && ct.x <= oe.sourceIndex && oe.sourceIndex < ct.x + ct.width && ct.y <= Ke && Ke < ct.y + ct.height && (gt = on(vt.color, gt));
        }
      let Ue = !1;
      if (C !== void 0) {
        const Ge = Ye + 1, ct = (He ? Ge + ue - 1 : Math.min(Ge + ue - 1, r - re)) - Ge;
        (ct !== ue - 1 || je + 1 <= Ce) && (Ue = !0, e.save(), e.beginPath(), e.rect(je + 1, Ge, Ze - 1, ct), e.clip()), gt = gt === void 0 ? mt.bgCell : on(gt, mt.bgCell);
      }
      const Je = oe.sourceIndex === n.length - 1, Lt = Ke === l - 1;
      gt !== void 0 && (e.fillStyle = gt, nt !== void 0 && (nt.fillStyle = gt), C !== void 0 ? e.fillRect(je + 1, Ye + 1, Ze - (Je ? 2 : 1), ue - (Lt ? 2 : 1)) : e.fillRect(je, Ye, Ze, ue)), Ve.style === "faded" && (e.globalAlpha = 0.6);
      let Ft;
      for (let Ge = 0; Ge < _.length; Ge++) {
        const vt = _[Ge];
        if (vt.item[0] === oe.sourceIndex && vt.item[1] === Ke) {
          Ft = vt;
          break;
        }
      }
      if (Ze > B && !It) {
        const Ge = mt.baseFontFull;
        Ge !== I && (e.font = Ge, I = Ge), nt = vp(e, Ve, oe.sourceIndex, Ke, Je, Lt, je, Ye, Ze, ue, Wt > 0, mt, gt ?? mt.bgCell, O, E, (Ft == null ? void 0 : Ft.hoverAmount) ?? 0, F, w, Z, R, nt, T, S, z, H);
      }
      return Ue && e.restore(), Ve.style === "faded" && (e.globalAlpha = 1), ne--, Ct && (e.restore(), (hn = nt == null ? void 0 : nt.deprep) == null || hn.call(nt, N), nt = void 0, ve(), I = Me, e.font = Me), ne <= 0;
    }), e.restore(), ne <= 0;
  }), $;
}
const fi = [0, 0], hi = { x: 0, y: 0, width: 0, height: 0 }, Ys = [void 0, () => {
}];
let bc = !1;
function sy() {
  bc = !0;
}
function vp(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, x, A, y, C, P, b, M, O, E) {
  var S, z;
  let _, F;
  x !== void 0 && x[0][0] === n && x[0][1] === r && (_ = x[1][0], F = x[1][1]);
  let R;
  fi[0] = n, fi[1] = r, hi.x = s, hi.y = a, hi.width = l, hi.height = c, Ys[0] = M.getValue(fi), Ys[1] = (H) => M.setValue(fi, H), bc = !1;
  const w = {
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
    hoverX: _,
    drawState: Ys,
    hoverY: F,
    imageLoader: g,
    spriteManager: f,
    hyperWrapping: A,
    overrideCursor: _ !== void 0 ? E : void 0,
    requestAnimationFrame: sy
  }, k = B1(w, t.lastUpdated, y, P, i, o), T = O(t);
  if (T !== void 0) {
    (P == null ? void 0 : P.renderer) !== T && ((S = P == null ? void 0 : P.deprep) == null || S.call(P, w), P = void 0);
    const H = (z = T.drawPrep) == null ? void 0 : z.call(T, w, P);
    C !== void 0 && !$r(w.cell) ? C(w, () => T.draw(w, t)) : T.draw(w, t), R = H === void 0 ? void 0 : {
      deprep: H == null ? void 0 : H.deprep,
      fillStyle: H == null ? void 0 : H.fillStyle,
      font: H == null ? void 0 : H.font,
      renderer: T
    };
  }
  return (k || bc) && (b == null || b(fi)), R;
}
function Zc(e, t, n, r, i, o, s, a, l = -20, c = -20, u = 32, h = "center", d = "square") {
  const g = Math.floor(i + s / 2), f = d === "circle" ? 1e4 : t.roundingRadius ?? 4;
  let v = qg(u, s, t.cellVerticalPadding), x = v / 2;
  const A = Fg(h, r, o, t.cellHorizontalPadding, v), y = Lg(A, g, v), C = Hg(r + l, i + c, y);
  switch (n) {
    case !0: {
      e.beginPath(), In(e, A - v / 2, g - v / 2, v, v, f), d === "circle" && (x *= 0.8, v *= 0.8), e.fillStyle = a ? t.accentColor : t.textMedium, e.fill(), e.beginPath(), e.moveTo(A - x + v / 4.23, g - x + v / 1.97), e.lineTo(A - x + v / 2.42, g - x + v / 1.44), e.lineTo(A - x + v / 1.29, g - x + v / 3.25), e.strokeStyle = t.bgCell, e.lineJoin = "round", e.lineCap = "round", e.lineWidth = 1.9, e.stroke();
      break;
    }
    case po:
    case !1: {
      e.beginPath(), In(e, A - v / 2 + 0.5, g - v / 2 + 0.5, v - 1, v - 1, f), e.lineWidth = 1, e.strokeStyle = C ? t.textDark : t.textMedium, e.stroke();
      break;
    }
    case Ac: {
      e.beginPath(), In(e, A - v / 2, g - v / 2, v, v, f), e.fillStyle = C ? t.textMedium : t.textLight, e.fill(), d === "circle" && (x *= 0.8, v *= 0.8), e.beginPath(), e.moveTo(A - v / 3, g), e.lineTo(A + v / 3, g), e.strokeStyle = t.bgCell, e.lineCap = "round", e.lineWidth = 1.9, e.stroke();
      break;
    }
    default:
      Ri();
  }
}
function ly(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, x, A, y) {
  const C = s + a;
  if (C <= 0)
    return;
  e.fillStyle = h.bgHeader, e.fillRect(0, 0, i, C);
  const [P, b] = (r == null ? void 0 : r[0]) ?? [], M = h.headerFontFull;
  e.font = M, nr(t, 0, o, 0, C, (O, E, _, F) => {
    var N;
    if (x !== void 0 && !x.has([O.sourceIndex, -1]))
      return;
    const R = Math.max(0, F - E);
    e.save(), e.beginPath(), e.rect(E + R, a, O.width - R, s), e.clip();
    const w = v(O.group ?? "").overrideTheme, k = O.themeOverride === void 0 && w === void 0 ? h : Qn(h, w, O.themeOverride);
    k.bgHeader !== h.bgHeader && (e.fillStyle = k.bgHeader, e.fill()), k !== h && (e.font = k.baseFontFull);
    const T = u.columns.hasIndex(O.sourceIndex), S = l !== void 0 || c, z = !S && b === -1 && P === O.sourceIndex, H = S ? 0 : ((N = g.find((Y) => Y.item[0] === O.sourceIndex && Y.item[1] === -1)) == null ? void 0 : N.hoverAmount) ?? 0, B = (u == null ? void 0 : u.current) !== void 0 && u.current.cell[0] === O.sourceIndex, ne = T ? k.accentColor : B ? k.bgHeaderHasFocus : k.bgHeader, Z = n ? a : 0, I = O.sourceIndex === 0 ? 0 : 1;
    T ? (e.fillStyle = ne, e.fillRect(E + I, Z, O.width - I, s)) : (B || H > 0) && (e.beginPath(), e.rect(E + I, Z, O.width - I, s), B && (e.fillStyle = k.bgHeaderHasFocus, e.fill()), H > 0 && (e.globalAlpha = H, e.fillStyle = k.bgHeaderHovered, e.fill(), e.globalAlpha = 1)), wp(e, E, Z, O.width, s, O, T, k, z, B, H, d, A, y), e.restore();
  }), n && cy(e, t, i, o, a, r, h, d, g, f, v, x);
}
function cy(e, t, n, r, i, o, s, a, l, c, u, h) {
  const [g, f] = (o == null ? void 0 : o[0]) ?? [];
  let v = 0;
  gp(t, n, r, i, (x, A, y, C, P, b) => {
    if (h !== void 0 && !h.hasItemInRectangle({
      x: x[0],
      y: -2,
      width: x[1] - x[0] + 1,
      height: 1
    }))
      return;
    e.save(), e.beginPath(), e.rect(y, C, P, b), e.clip();
    const M = u(A), O = (M == null ? void 0 : M.overrideTheme) === void 0 ? s : Qn(s, M.overrideTheme), E = f === -2 && g !== void 0 && g >= x[0] && g <= x[1], _ = E ? O.bgHeaderHovered : O.bgHeader;
    if (_ !== s.bgHeader && (e.fillStyle = _, e.fill()), e.fillStyle = O.textGroupHeader ?? O.textHeader, M !== void 0) {
      let F = y;
      if (M.icon !== void 0 && (a.drawSprite(M.icon, "normal", e, F + 8, (i - 20) / 2, 20, O), F += 26), e.fillText(M.name, F + 8, i / 2 + tr(e, s.headerFontFull)), M.actions !== void 0 && E) {
        const R = bp({ x: y, y: C, width: P, height: b }, M.actions);
        e.beginPath();
        const w = R[0].x - 10, k = y + P - w;
        e.rect(w, 0, k, i);
        const T = e.createLinearGradient(w, 0, w + k, 0), S = hr(_, 0);
        T.addColorStop(0, S), T.addColorStop(10 / k, _), T.addColorStop(1, _), e.fillStyle = T, e.fill(), e.globalAlpha = 0.6;
        const [z, H] = (o == null ? void 0 : o[1]) ?? [-1, -1];
        for (let B = 0; B < M.actions.length; B++) {
          const ne = M.actions[B], Z = R[B], I = Do(Z, z + y, H);
          I && (e.globalAlpha = 1), a.drawSprite(ne.icon, "normal", e, Z.x + Z.width / 2 - 10, Z.y + Z.height / 2 - 10, 20, O), I && (e.globalAlpha = 0.6);
        }
        e.globalAlpha = 1;
      }
    }
    y !== 0 && c(x[0]) && (e.beginPath(), e.moveTo(y + 0.5, 0), e.lineTo(y + 0.5, i), e.strokeStyle = s.borderColor, e.lineWidth = 1, e.stroke()), e.restore(), v = y + P;
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
function Uf(e, t, n, r, i, o, s, a, l, c, u, h, d, g) {
  if (o.rowMarker !== void 0) {
    const C = o.rowMarkerChecked;
    C !== !0 && (e.globalAlpha = c), Zc(e, a, C, t, n, r, i, !1, void 0, void 0, 18, "center", o.rowMarker), C !== !0 && (e.globalAlpha = 1);
    return;
  }
  const f = a.cellHorizontalPadding, v = s ? a.textHeaderSelected : a.textHeader, x = o.hasMenu === !0 && (l || h && s), A = d ? -1 : 1;
  let y = d ? t + r - f : t + f;
  if (o.icon !== void 0) {
    let C = s ? "selected" : "normal";
    o.style === "highlight" && (C = s ? "selected" : "special");
    const P = a.headerIconSize;
    u.drawSprite(o.icon, C, e, d ? y - P : y, n + (i - P) / 2, P, a), o.overlayIcon !== void 0 && u.drawSprite(o.overlayIcon, s ? "selected" : "special", e, d ? y - P + 9 : y + 9, n + ((i - 18) / 2 + 6), 18, a), y += Math.ceil(P * 1.3) * A;
  }
  if (x && o.hasMenu === !0 && r > 35) {
    const P = d ? 35 : r - 35, b = d ? 35 * 0.7 : r - 35 * 0.7, M = P / r, O = b / r, E = e.createLinearGradient(t, 0, t + r, 0), _ = hr(v, 0);
    E.addColorStop(d ? 1 : 0, v), E.addColorStop(M, v), E.addColorStop(O, _), E.addColorStop(d ? 0 : 1, _), e.fillStyle = E;
  } else
    e.fillStyle = v;
  if (d && (e.textAlign = "right"), e.fillText(o.title, y, n + i / 2 + tr(e, a.headerFontFull)), d && (e.textAlign = "left"), x && o.hasMenu === !0)
    if (o.menuIcon === void 0 || o.menuIcon === mo.Triangle) {
      e.beginPath();
      const C = g.x + g.width / 2 - 5.5, P = g.y + g.height / 2 - 3;
      X1(e, [
        {
          x: C,
          y: P
        },
        {
          x: C + 11,
          y: P
        },
        {
          x: C + 5.5,
          y: P + 6
        }
      ], 1), e.fillStyle = v, e.fill();
    } else if (o.menuIcon === mo.Dots) {
      e.beginPath();
      const C = g.x + g.width / 2, P = g.y + g.height / 2;
      U1(e, C, P), e.fillStyle = v, e.fill();
    } else {
      const C = g.x + (g.width - a.headerIconSize) / 2, P = g.y + (g.height - a.headerIconSize) / 2;
      u.drawSprite(o.menuIcon, "normal", e, C, P, a.headerIconSize, a);
    }
}
function wp(e, t, n, r, i, o, s, a, l, c, u, h, d, g) {
  const f = Fc(o.title) === "rtl", v = yp(t, n, r, i, f);
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
  }, () => Uf(e, t, n, r, i, o, s, a, l, u, h, g, f, v)) : Uf(e, t, n, r, i, o, s, a, l, u, h, g, f, v);
}
var Ks, Xf;
function uy() {
  if (Xf) return Ks;
  Xf = 1;
  var e = pr(), t = function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  }();
  return Ks = t, Ks;
}
var Vs, Gf;
function dy() {
  if (Gf) return Vs;
  Gf = 1;
  var e = uy();
  function t(n, r, i) {
    r == "__proto__" && e ? e(n, r, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : n[r] = i;
  }
  return Vs = t, Vs;
}
var Zs, Yf;
function fy() {
  if (Yf) return Zs;
  Yf = 1;
  function e(t, n, r, i) {
    for (var o = -1, s = t == null ? 0 : t.length; ++o < s; ) {
      var a = t[o];
      n(i, a, r(a), t);
    }
    return i;
  }
  return Zs = e, Zs;
}
var Js, Kf;
function hy() {
  if (Kf) return Js;
  Kf = 1;
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
  return Js = e, Js;
}
var Qs, Vf;
function gy() {
  if (Vf) return Qs;
  Vf = 1;
  var e = hy(), t = e();
  return Qs = t, Qs;
}
var el, Zf;
function py() {
  if (Zf) return el;
  Zf = 1;
  function e(t, n) {
    for (var r = -1, i = Array(t); ++r < t; )
      i[r] = n(r);
    return i;
  }
  return el = e, el;
}
var mi = { exports: {} }, tl, Jf;
function my() {
  if (Jf) return tl;
  Jf = 1;
  function e() {
    return !1;
  }
  return tl = e, tl;
}
mi.exports;
var Qf;
function Sp() {
  return Qf || (Qf = 1, function(e, t) {
    var n = Pn(), r = my(), i = t && !t.nodeType && t, o = i && !0 && e && !e.nodeType && e, s = o && o.exports === i, a = s ? n.Buffer : void 0, l = a ? a.isBuffer : void 0, c = l || r;
    e.exports = c;
  }(mi, mi.exports)), mi.exports;
}
var nl, eh;
function vy() {
  if (eh) return nl;
  eh = 1;
  var e = Ei(), t = Ic(), n = Mi(), r = "[object Arguments]", i = "[object Array]", o = "[object Boolean]", s = "[object Date]", a = "[object Error]", l = "[object Function]", c = "[object Map]", u = "[object Number]", h = "[object Object]", d = "[object RegExp]", g = "[object Set]", f = "[object String]", v = "[object WeakMap]", x = "[object ArrayBuffer]", A = "[object DataView]", y = "[object Float32Array]", C = "[object Float64Array]", P = "[object Int8Array]", b = "[object Int16Array]", M = "[object Int32Array]", O = "[object Uint8Array]", E = "[object Uint8ClampedArray]", _ = "[object Uint16Array]", F = "[object Uint32Array]", R = {};
  R[y] = R[C] = R[P] = R[b] = R[M] = R[O] = R[E] = R[_] = R[F] = !0, R[r] = R[i] = R[x] = R[o] = R[A] = R[s] = R[a] = R[l] = R[c] = R[u] = R[h] = R[d] = R[g] = R[f] = R[v] = !1;
  function w(k) {
    return n(k) && t(k.length) && !!R[e(k)];
  }
  return nl = w, nl;
}
var rl, th;
function yy() {
  if (th) return rl;
  th = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return rl = e, rl;
}
var vi = { exports: {} };
vi.exports;
var nh;
function by() {
  return nh || (nh = 1, function(e, t) {
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
var il, rh;
function Cp() {
  if (rh) return il;
  rh = 1;
  var e = vy(), t = yy(), n = by(), r = n && n.isTypedArray, i = r ? t(r) : e;
  return il = i, il;
}
var ol, ih;
function wy() {
  if (ih) return ol;
  ih = 1;
  var e = py(), t = Ec(), n = An(), r = Sp(), i = Mc(), o = Cp(), s = Object.prototype, a = s.hasOwnProperty;
  function l(c, u) {
    var h = n(c), d = !h && t(c), g = !h && !d && r(c), f = !h && !d && !g && o(c), v = h || d || g || f, x = v ? e(c.length, String) : [], A = x.length;
    for (var y in c)
      (u || a.call(c, y)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
      (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      f && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
      i(y, A))) && x.push(y);
    return x;
  }
  return ol = l, ol;
}
var al, oh;
function Sy() {
  if (oh) return al;
  oh = 1;
  var e = Object.prototype;
  function t(n) {
    var r = n && n.constructor, i = typeof r == "function" && r.prototype || e;
    return n === i;
  }
  return al = t, al;
}
var sl, ah;
function Cy() {
  if (ah) return sl;
  ah = 1;
  function e(t, n) {
    return function(r) {
      return t(n(r));
    };
  }
  return sl = e, sl;
}
var ll, sh;
function ky() {
  if (sh) return ll;
  sh = 1;
  var e = Cy(), t = e(Object.keys, Object);
  return ll = t, ll;
}
var cl, lh;
function xy() {
  if (lh) return cl;
  lh = 1;
  var e = Sy(), t = ky(), n = Object.prototype, r = n.hasOwnProperty;
  function i(o) {
    if (!e(o))
      return t(o);
    var s = [];
    for (var a in Object(o))
      r.call(o, a) && a != "constructor" && s.push(a);
    return s;
  }
  return cl = i, cl;
}
var ul, ch;
function Jc() {
  if (ch) return ul;
  ch = 1;
  var e = wy(), t = xy(), n = Vc();
  function r(i) {
    return n(i) ? e(i) : t(i);
  }
  return ul = r, ul;
}
var dl, uh;
function Ry() {
  if (uh) return dl;
  uh = 1;
  var e = gy(), t = Jc();
  function n(r, i) {
    return r && e(r, i, t);
  }
  return dl = n, dl;
}
var fl, dh;
function _y() {
  if (dh) return fl;
  dh = 1;
  var e = Vc();
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
  return fl = t, fl;
}
var hl, fh;
function Ty() {
  if (fh) return hl;
  fh = 1;
  var e = Ry(), t = _y(), n = t(e);
  return hl = n, hl;
}
var gl, hh;
function Ey() {
  if (hh) return gl;
  hh = 1;
  var e = Ty();
  function t(n, r, i, o) {
    return e(n, function(s, a, l) {
      r(o, s, i(s), l);
    }), o;
  }
  return gl = t, gl;
}
var pl, gh;
function My() {
  if (gh) return pl;
  gh = 1;
  var e = To();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return pl = t, pl;
}
var ml, ph;
function Iy() {
  if (ph) return ml;
  ph = 1;
  function e(t) {
    var n = this.__data__, r = n.delete(t);
    return this.size = n.size, r;
  }
  return ml = e, ml;
}
var vl, mh;
function Ay() {
  if (mh) return vl;
  mh = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return vl = e, vl;
}
var yl, vh;
function Py() {
  if (vh) return yl;
  vh = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return yl = e, yl;
}
var bl, yh;
function Oy() {
  if (yh) return bl;
  yh = 1;
  var e = To(), t = _c(), n = Tc(), r = 200;
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
  return bl = i, bl;
}
var wl, bh;
function kp() {
  if (bh) return wl;
  bh = 1;
  var e = To(), t = My(), n = Iy(), r = Ay(), i = Py(), o = Oy();
  function s(a) {
    var l = this.__data__ = new e(a);
    this.size = l.size;
  }
  return s.prototype.clear = t, s.prototype.delete = n, s.prototype.get = r, s.prototype.has = i, s.prototype.set = o, wl = s, wl;
}
var Sl, wh;
function Dy() {
  if (wh) return Sl;
  wh = 1;
  function e(t, n) {
    for (var r = -1, i = t == null ? 0 : t.length; ++r < i; )
      if (n(t[r], r, t))
        return !0;
    return !1;
  }
  return Sl = e, Sl;
}
var Cl, Sh;
function xp() {
  if (Sh) return Cl;
  Sh = 1;
  var e = lp(), t = Dy(), n = cp(), r = 1, i = 2;
  function o(s, a, l, c, u, h) {
    var d = l & r, g = s.length, f = a.length;
    if (g != f && !(d && f > g))
      return !1;
    var v = h.get(s), x = h.get(a);
    if (v && x)
      return v == a && x == s;
    var A = -1, y = !0, C = l & i ? new e() : void 0;
    for (h.set(s, a), h.set(a, s); ++A < g; ) {
      var P = s[A], b = a[A];
      if (c)
        var M = d ? c(b, P, A, a, s, h) : c(P, b, A, s, a, h);
      if (M !== void 0) {
        if (M)
          continue;
        y = !1;
        break;
      }
      if (C) {
        if (!t(a, function(O, E) {
          if (!n(C, E) && (P === O || u(P, O, l, c, h)))
            return C.push(E);
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
  return Cl = o, Cl;
}
var kl, Ch;
function Ly() {
  if (Ch) return kl;
  Ch = 1;
  var e = Pn(), t = e.Uint8Array;
  return kl = t, kl;
}
var xl, kh;
function Fy() {
  if (kh) return xl;
  kh = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(i, o) {
      r[++n] = [o, i];
    }), r;
  }
  return xl = e, xl;
}
var Rl, xh;
function qy() {
  if (xh) return Rl;
  xh = 1;
  var e = Ti(), t = Ly(), n = Rc(), r = xp(), i = Fy(), o = Kc(), s = 1, a = 2, l = "[object Boolean]", c = "[object Date]", u = "[object Error]", h = "[object Map]", d = "[object Number]", g = "[object RegExp]", f = "[object Set]", v = "[object String]", x = "[object Symbol]", A = "[object ArrayBuffer]", y = "[object DataView]", C = e ? e.prototype : void 0, P = C ? C.valueOf : void 0;
  function b(M, O, E, _, F, R, w) {
    switch (E) {
      case y:
        if (M.byteLength != O.byteLength || M.byteOffset != O.byteOffset)
          return !1;
        M = M.buffer, O = O.buffer;
      case A:
        return !(M.byteLength != O.byteLength || !R(new t(M), new t(O)));
      case l:
      case c:
      case d:
        return n(+M, +O);
      case u:
        return M.name == O.name && M.message == O.message;
      case g:
      case v:
        return M == O + "";
      case h:
        var k = i;
      case f:
        var T = _ & s;
        if (k || (k = o), M.size != O.size && !T)
          return !1;
        var S = w.get(M);
        if (S)
          return S == O;
        _ |= a, w.set(M, O);
        var z = r(k(M), k(O), _, F, R, w);
        return w.delete(M), z;
      case x:
        if (P)
          return P.call(M) == P.call(O);
    }
    return !1;
  }
  return Rl = b, Rl;
}
var _l, Rh;
function Hy() {
  if (Rh) return _l;
  Rh = 1;
  var e = dp(), t = An();
  function n(r, i, o) {
    var s = i(r);
    return t(r) ? s : e(s, o(r));
  }
  return _l = n, _l;
}
var Tl, _h;
function zy() {
  if (_h) return Tl;
  _h = 1;
  function e(t, n) {
    for (var r = -1, i = t == null ? 0 : t.length, o = 0, s = []; ++r < i; ) {
      var a = t[r];
      n(a, r, t) && (s[o++] = a);
    }
    return s;
  }
  return Tl = e, Tl;
}
var El, Th;
function $y() {
  if (Th) return El;
  Th = 1;
  function e() {
    return [];
  }
  return El = e, El;
}
var Ml, Eh;
function Ny() {
  if (Eh) return Ml;
  Eh = 1;
  var e = zy(), t = $y(), n = Object.prototype, r = n.propertyIsEnumerable, i = Object.getOwnPropertySymbols, o = i ? function(s) {
    return s == null ? [] : (s = Object(s), e(i(s), function(a) {
      return r.call(s, a);
    }));
  } : t;
  return Ml = o, Ml;
}
var Il, Mh;
function By() {
  if (Mh) return Il;
  Mh = 1;
  var e = Hy(), t = Ny(), n = Jc();
  function r(i) {
    return e(i, n, t);
  }
  return Il = r, Il;
}
var Al, Ih;
function Wy() {
  if (Ih) return Al;
  Ih = 1;
  var e = By(), t = 1, n = Object.prototype, r = n.hasOwnProperty;
  function i(o, s, a, l, c, u) {
    var h = a & t, d = e(o), g = d.length, f = e(s), v = f.length;
    if (g != v && !h)
      return !1;
    for (var x = g; x--; ) {
      var A = d[x];
      if (!(h ? A in s : r.call(s, A)))
        return !1;
    }
    var y = u.get(o), C = u.get(s);
    if (y && C)
      return y == s && C == o;
    var P = !0;
    u.set(o, s), u.set(s, o);
    for (var b = h; ++x < g; ) {
      A = d[x];
      var M = o[A], O = s[A];
      if (l)
        var E = h ? l(O, M, A, s, o, u) : l(M, O, A, o, s, u);
      if (!(E === void 0 ? M === O || c(M, O, a, l, u) : E)) {
        P = !1;
        break;
      }
      b || (b = A == "constructor");
    }
    if (P && !b) {
      var _ = o.constructor, F = s.constructor;
      _ != F && "constructor" in o && "constructor" in s && !(typeof _ == "function" && _ instanceof _ && typeof F == "function" && F instanceof F) && (P = !1);
    }
    return u.delete(o), u.delete(s), P;
  }
  return Al = i, Al;
}
var Pl, Ah;
function jy() {
  if (Ah) return Pl;
  Ah = 1;
  var e = pr(), t = Pn(), n = e(t, "DataView");
  return Pl = n, Pl;
}
var Ol, Ph;
function Uy() {
  if (Ph) return Ol;
  Ph = 1;
  var e = pr(), t = Pn(), n = e(t, "Promise");
  return Ol = n, Ol;
}
var Dl, Oh;
function Xy() {
  if (Oh) return Dl;
  Oh = 1;
  var e = pr(), t = Pn(), n = e(t, "WeakMap");
  return Dl = n, Dl;
}
var Ll, Dh;
function Gy() {
  if (Dh) return Ll;
  Dh = 1;
  var e = jy(), t = _c(), n = Uy(), r = up(), i = Xy(), o = Ei(), s = Cg(), a = "[object Map]", l = "[object Object]", c = "[object Promise]", u = "[object Set]", h = "[object WeakMap]", d = "[object DataView]", g = s(e), f = s(t), v = s(n), x = s(r), A = s(i), y = o;
  return (e && y(new e(new ArrayBuffer(1))) != d || t && y(new t()) != a || n && y(n.resolve()) != c || r && y(new r()) != u || i && y(new i()) != h) && (y = function(C) {
    var P = o(C), b = P == l ? C.constructor : void 0, M = b ? s(b) : "";
    if (M)
      switch (M) {
        case g:
          return d;
        case f:
          return a;
        case v:
          return c;
        case x:
          return u;
        case A:
          return h;
      }
    return P;
  }), Ll = y, Ll;
}
var Fl, Lh;
function Yy() {
  if (Lh) return Fl;
  Lh = 1;
  var e = kp(), t = xp(), n = qy(), r = Wy(), i = Gy(), o = An(), s = Sp(), a = Cp(), l = 1, c = "[object Arguments]", u = "[object Array]", h = "[object Object]", d = Object.prototype, g = d.hasOwnProperty;
  function f(v, x, A, y, C, P) {
    var b = o(v), M = o(x), O = b ? u : i(v), E = M ? u : i(x);
    O = O == c ? h : O, E = E == c ? h : E;
    var _ = O == h, F = E == h, R = O == E;
    if (R && s(v)) {
      if (!s(x))
        return !1;
      b = !0, _ = !1;
    }
    if (R && !_)
      return P || (P = new e()), b || a(v) ? t(v, x, A, y, C, P) : n(v, x, O, A, y, C, P);
    if (!(A & l)) {
      var w = _ && g.call(v, "__wrapped__"), k = F && g.call(x, "__wrapped__");
      if (w || k) {
        var T = w ? v.value() : v, S = k ? x.value() : x;
        return P || (P = new e()), C(T, S, A, y, P);
      }
    }
    return R ? (P || (P = new e()), r(v, x, A, y, C, P)) : !1;
  }
  return Fl = f, Fl;
}
var ql, Fh;
function Rp() {
  if (Fh) return ql;
  Fh = 1;
  var e = Yy(), t = Mi();
  function n(r, i, o, s, a) {
    return r === i ? !0 : r == null || i == null || !t(r) && !t(i) ? r !== r && i !== i : e(r, i, o, s, n, a);
  }
  return ql = n, ql;
}
var Hl, qh;
function Ky() {
  if (qh) return Hl;
  qh = 1;
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
        var x = new e();
        if (l)
          var A = l(f, v, g, o, s, x);
        if (!(A === void 0 ? t(v, f, n | r, l, x) : A))
          return !1;
      }
    }
    return !0;
  }
  return Hl = i, Hl;
}
var zl, Hh;
function _p() {
  if (Hh) return zl;
  Hh = 1;
  var e = gr();
  function t(n) {
    return n === n && !e(n);
  }
  return zl = t, zl;
}
var $l, zh;
function Vy() {
  if (zh) return $l;
  zh = 1;
  var e = _p(), t = Jc();
  function n(r) {
    for (var i = t(r), o = i.length; o--; ) {
      var s = i[o], a = r[s];
      i[o] = [s, a, e(a)];
    }
    return i;
  }
  return $l = n, $l;
}
var Nl, $h;
function Tp() {
  if ($h) return Nl;
  $h = 1;
  function e(t, n) {
    return function(r) {
      return r == null ? !1 : r[t] === n && (n !== void 0 || t in Object(r));
    };
  }
  return Nl = e, Nl;
}
var Bl, Nh;
function Zy() {
  if (Nh) return Bl;
  Nh = 1;
  var e = Ky(), t = Vy(), n = Tp();
  function r(i) {
    var o = t(i);
    return o.length == 1 && o[0][2] ? n(o[0][0], o[0][1]) : function(s) {
      return s === i || e(s, i, o);
    };
  }
  return Bl = r, Bl;
}
var Wl, Bh;
function Ep() {
  if (Bh) return Wl;
  Bh = 1;
  var e = kg(), t = Mo();
  function n(r, i) {
    i = e(i, r);
    for (var o = 0, s = i.length; r != null && o < s; )
      r = r[t(i[o++])];
    return o && o == s ? r : void 0;
  }
  return Wl = n, Wl;
}
var jl, Wh;
function Jy() {
  if (Wh) return jl;
  Wh = 1;
  var e = Ep();
  function t(n, r, i) {
    var o = n == null ? void 0 : e(n, r);
    return o === void 0 ? i : o;
  }
  return jl = t, jl;
}
var Ul, jh;
function Qy() {
  if (jh) return Ul;
  jh = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return Ul = e, Ul;
}
var Xl, Uh;
function eb() {
  if (Uh) return Xl;
  Uh = 1;
  var e = Qy(), t = xg();
  function n(r, i) {
    return r != null && t(r, i, e);
  }
  return Xl = n, Xl;
}
var Gl, Xh;
function tb() {
  if (Xh) return Gl;
  Xh = 1;
  var e = Rp(), t = Jy(), n = eb(), r = xc(), i = _p(), o = Tp(), s = Mo(), a = 1, l = 2;
  function c(u, h) {
    return r(u) && i(h) ? o(s(u), h) : function(d) {
      var g = t(d, u);
      return g === void 0 && g === h ? n(d, u) : e(h, g, a | l);
    };
  }
  return Gl = c, Gl;
}
var Yl, Gh;
function nb() {
  if (Gh) return Yl;
  Gh = 1;
  function e(t) {
    return t;
  }
  return Yl = e, Yl;
}
var Kl, Yh;
function rb() {
  if (Yh) return Kl;
  Yh = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return Kl = e, Kl;
}
var Vl, Kh;
function ib() {
  if (Kh) return Vl;
  Kh = 1;
  var e = Ep();
  function t(n) {
    return function(r) {
      return e(r, n);
    };
  }
  return Vl = t, Vl;
}
var Zl, Vh;
function ob() {
  if (Vh) return Zl;
  Vh = 1;
  var e = rb(), t = ib(), n = xc(), r = Mo();
  function i(o) {
    return n(o) ? e(r(o)) : t(o);
  }
  return Zl = i, Zl;
}
var Jl, Zh;
function ab() {
  if (Zh) return Jl;
  Zh = 1;
  var e = Zy(), t = tb(), n = nb(), r = An(), i = ob();
  function o(s) {
    return typeof s == "function" ? s : s == null ? n : typeof s == "object" ? r(s) ? t(s[0], s[1]) : e(s) : i(s);
  }
  return Jl = o, Jl;
}
var Ql, Jh;
function sb() {
  if (Jh) return Ql;
  Jh = 1;
  var e = fy(), t = Ey(), n = ab(), r = An();
  function i(o, s) {
    return function(a, l) {
      var c = r(a) ? e : t, u = s ? s() : {};
      return c(a, o, n(l, 2), u);
    };
  }
  return Ql = i, Ql;
}
var ec, Qh;
function lb() {
  if (Qh) return ec;
  Qh = 1;
  var e = dy(), t = sb(), n = Object.prototype, r = n.hasOwnProperty, i = t(function(o, s, a) {
    r.call(o, a) ? o[a].push(s) : e(o, a, [s]);
  });
  return ec = i, ec;
}
var cb = lb();
const ub = /* @__PURE__ */ er(cb);
function db(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, x, A, y) {
  if (A !== void 0 || t[t.length - 1] !== n[t.length - 1])
    return;
  const C = hp(x);
  nr(t, l, s, a, o, (P, b, M, O, E) => {
    if (P !== t[t.length - 1])
      return;
    b += P.width;
    const _ = Math.max(b, O);
    _ > r || (e.save(), e.beginPath(), e.rect(_, o + 1, 1e4, i - o - 1), e.clip(), Oo(E, M, i, c, u, f, v, C, (F, R, w, k) => {
      if (!k && x.length > 0 && !x.some((B) => wo(b, F, 1e4, w, B.x, B.y, B.width, B.height)))
        return;
      const T = d.hasIndex(R), S = g.hasIndex(R);
      e.beginPath();
      const z = h == null ? void 0 : h(R), H = z === void 0 ? y : Qn(y, z);
      H.bgCell !== y.bgCell && (e.fillStyle = H.bgCell, e.fillRect(b, F, 1e4, w)), S && (e.fillStyle = H.bgHeader, e.fillRect(b, F, 1e4, w)), T && (e.fillStyle = H.accentLight, e.fillRect(b, F, 1e4, w));
    }), e.restore());
  });
}
function fb(e, t, n, r, i, o, s, a, l) {
  let c = !1;
  for (const f of t)
    if (!f.sticky) {
      c = s(f.sourceIndex);
      break;
    }
  const u = l.horizontalBorderColor ?? l.borderColor, h = l.borderColor, d = c ? jr(t) : 0;
  let g;
  if (d !== 0 && (g = df(h, l.bgCell), e.beginPath(), e.moveTo(d + 0.5, 0), e.lineTo(d + 0.5, r), e.strokeStyle = g, e.stroke()), i > 0) {
    const f = h === u && g !== void 0 ? g : df(u, l.bgCell), v = vr(o, i, a);
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
function hb(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f) {
  var w;
  const v = f.bgCell, { minX: x, maxX: A, minY: y, maxY: C } = Mp(a, o, s), P = [], b = s - vr(g, d, c);
  let M = l, O = n, E = 0;
  for (; M + i < b; ) {
    const k = M + i, T = c(O);
    if (k >= y && k <= C - 1) {
      const S = u == null ? void 0 : u(O), z = S == null ? void 0 : S.bgCell;
      z !== void 0 && z !== v && O >= g - d && P.push({
        x,
        y: k,
        w: A - x,
        h: T,
        color: z
      });
    }
    M += T, O < g - d && (E = M), O++;
  }
  let _ = 0;
  const F = Math.min(b, C) - E;
  if (F > 0)
    for (let k = 0; k < t.length; k++) {
      const T = t[k];
      if (T.width === 0)
        continue;
      const S = T.sticky ? _ : _ + r, z = (w = T.themeOverride) == null ? void 0 : w.bgCell;
      z !== void 0 && z !== v && S >= x && S <= A && h(k + 1) && P.push({
        x: S,
        y: E,
        w: T.width,
        h: F,
        color: z
      }), _ += T.width;
    }
  if (P.length === 0)
    return;
  let R;
  e.beginPath();
  for (let k = P.length - 1; k >= 0; k--) {
    const T = P[k];
    R === void 0 ? R = T.color : T.color !== R && (e.fillStyle = R, e.fill(), e.beginPath(), R = T.color), e.rect(T.x, T.y, T.w, T.h);
  }
  R !== void 0 && (e.fillStyle = R, e.fill()), e.beginPath();
}
function eg(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, x, A = !1) {
  if (l !== void 0) {
    e.beginPath(), e.save(), e.rect(0, 0, o, s);
    for (const w of l)
      e.rect(w.x + 1, w.y + 1, w.width - 1, w.height - 1);
    e.clip("evenodd");
  }
  const y = x.horizontalBorderColor ?? x.borderColor, C = x.borderColor, { minX: P, maxX: b, minY: M, maxY: O } = Mp(a, o, s), E = [];
  e.beginPath();
  let _ = 0.5;
  for (let w = 0; w < t.length; w++) {
    const k = t[w];
    if (k.width === 0)
      continue;
    _ += k.width;
    const T = k.sticky ? _ : _ + r;
    T >= P && T <= b && g(w + 1) && E.push({
      x1: T,
      y1: Math.max(c, M),
      x2: T,
      y2: Math.min(s, O),
      color: C
    });
  }
  let F = s + 0.5;
  for (let w = v - f; w < v; w++) {
    const k = h(w);
    F -= k, E.push({ x1: P, y1: F, x2: b, y2: F, color: y });
  }
  if (A !== !0) {
    let w = u + 0.5, k = n;
    const T = F;
    for (; w + i < T; ) {
      const S = w + i;
      if (S >= M && S <= O - 1) {
        const z = d == null ? void 0 : d(k);
        E.push({
          x1: P,
          y1: S,
          x2: b,
          y2: S,
          color: (z == null ? void 0 : z.horizontalBorderColor) ?? (z == null ? void 0 : z.borderColor) ?? y
        });
      }
      w += h(k), k++;
    }
  }
  const R = ub(E, (w) => w.color);
  for (const w of Object.keys(R)) {
    e.strokeStyle = w;
    for (const k of R[w])
      e.moveTo(k.x1, k.y1), e.lineTo(k.x2, k.y2);
    e.stroke(), e.beginPath();
  }
  l !== void 0 && e.restore();
}
function gb(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, x, A, y) {
  const C = [];
  e.imageSmoothingEnabled = !1;
  const P = Math.min(i.cellYOffset, s), b = Math.max(i.cellYOffset, s);
  let M = 0;
  if (typeof A == "number")
    M += (b - P) * A;
  else
    for (let T = P; T < b; T++)
      M += A(T);
  s > i.cellYOffset && (M = -M), M += l - i.translateY;
  const O = Math.min(i.cellXOffset, o), E = Math.max(i.cellXOffset, o);
  let _ = 0;
  for (let T = O; T < E; T++)
    _ += v[T].width;
  o > i.cellXOffset && (_ = -_), _ += a - i.translateX;
  const F = jr(x);
  if (_ !== 0 && M !== 0)
    return {
      regions: []
    };
  const R = c > 0 ? vr(d, c, A) : 0, w = u - F - Math.abs(_), k = h - g - R - Math.abs(M) - 1;
  if (w > 150 && k > 150) {
    const T = {
      sx: 0,
      sy: 0,
      sw: u * f,
      sh: h * f,
      dx: 0,
      dy: 0,
      dw: u * f,
      dh: h * f
    };
    if (M > 0 ? (T.sy = (g + 1) * f, T.sh = k * f, T.dy = (M + g + 1) * f, T.dh = k * f, C.push({
      x: 0,
      y: g,
      width: u,
      height: M + 1
    })) : M < 0 && (T.sy = (-M + g + 1) * f, T.sh = k * f, T.dy = (g + 1) * f, T.dh = k * f, C.push({
      x: 0,
      y: h + M - R,
      width: u,
      height: -M + R
    })), _ > 0 ? (T.sx = F * f, T.sw = w * f, T.dx = (_ + F) * f, T.dw = w * f, C.push({
      x: F - 1,
      y: 0,
      width: _ + 2,
      height: h
    })) : _ < 0 && (T.sx = (F - _) * f, T.sw = w * f, T.dx = F * f, T.dw = w * f, C.push({
      x: u + _,
      y: 0,
      width: -_,
      height: h
    })), e.setTransform(1, 0, 0, 1, 0, 0), y) {
      if (F > 0 && _ !== 0 && M === 0 && (r === void 0 || (n == null ? void 0 : n[1]) !== !1)) {
        const S = F * f, z = h * f;
        e.drawImage(t, 0, 0, S, z, 0, 0, S, z);
      }
      if (R > 0 && _ === 0 && M !== 0 && (r === void 0 || (n == null ? void 0 : n[0]) !== !1)) {
        const S = (h - R) * f, z = u * f, H = R * f;
        e.drawImage(t, 0, S, z, H, 0, S, z, H);
      }
    }
    e.drawImage(t, T.sx, T.sy, T.sw, T.sh, T.dx, T.dy, T.dw, T.dh), e.scale(f, f);
  }
  return e.imageSmoothingEnabled = !0, {
    regions: C
  };
}
function pb(e, t, n, r, i, o, s, a, l, c) {
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
function mb(e, t) {
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
function tg(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v) {
  const x = f == null ? void 0 : f.filter((O) => O.style !== "no-outline");
  if (x === void 0 || x.length === 0)
    return;
  const A = jr(a), y = vr(g, d, h), C = [l, 0, a.length, g - d], P = [A, 0, t, n - y], b = x.map((O) => {
    const E = O.range, _ = O.style ?? "dashed";
    return oy(E, C, t, n, P).map((F) => {
      const R = F.rect, w = vc(R.x, R.y, t, n, u, c + u, r, i, o, s, g, l, d, a, h), k = R.width === 1 && R.height === 1 ? w : vc(R.x + R.width - 1, R.y + R.height - 1, t, n, u, c + u, r, i, o, s, g, l, d, a, h);
      return R.x + R.width >= a.length && (k.width -= 1), R.y + R.height >= g && (k.height -= 1), {
        color: O.color,
        style: _,
        clip: F.clip,
        rect: iy({
          x: w.x,
          y: w.y,
          width: k.x + k.width - w.x,
          height: k.y + k.height - w.y
        }, t, n, 8)
      };
    });
  }), M = () => {
    e.lineWidth = 1;
    let O = !1;
    for (const E of b)
      for (const _ of E)
        if ((_ == null ? void 0 : _.rect) !== void 0 && wo(0, 0, t, n, _.rect.x, _.rect.y, _.rect.width, _.rect.height)) {
          const F = O, R = !ry(_.clip, _.rect);
          R && (e.save(), e.rect(_.clip.x, _.clip.y, _.clip.width, _.clip.height), e.clip()), _.style === "dashed" && !O ? (e.setLineDash([5, 3]), O = !0) : (_.style === "solid" || _.style === "solid-outline") && O && (e.setLineDash([]), O = !1), e.strokeStyle = _.style === "solid-outline" ? on(on(_.color, v.borderColor), v.bgCell) : hr(_.color, 1), e.strokeRect(_.rect.x + 0.5, _.rect.y + 0.5, _.rect.width - 1, _.rect.height - 1), R && (e.restore(), O = F);
        }
    O && e.setLineDash([]);
  };
  return M(), M;
}
function ng(e, t, n, r, i) {
  e.beginPath(), e.moveTo(t, n), e.lineTo(t, r), e.lineWidth = 2, e.strokeStyle = i, e.stroke(), e.globalAlpha = 1;
}
function tc(e, t, n, r, i, o, s, a, l, c, u, h, d, g, f, v, x) {
  if (u.current === void 0)
    return;
  const A = u.current.range, y = u.current.cell, C = [A.x + A.width - 1, A.y + A.height - 1];
  if (y[1] >= x && C[1] >= x || !s.some((T) => T.sourceIndex === y[0] || T.sourceIndex === C[0]))
    return;
  const [b, M] = u.current.cell, O = d(u.current.cell), E = O.span ?? [b, b], _ = M >= x - g, F = g > 0 && !_ ? vr(x, g, h) - 1 : 0, R = C[1];
  let w;
  if (nr(s, r, i, o, c, (T, S, z, H, B) => {
    if (T.sticky && b > T.sourceIndex)
      return;
    const ne = T.sourceIndex < E[0], Z = T.sourceIndex > E[1], I = T.sourceIndex === C[0];
    if (!(!I && (ne || Z)))
      return Oo(B, z, n, x, h, g, f, void 0, (N, Y, re) => {
        if (Y !== M && Y !== R)
          return;
        let $ = S, ce = T.width;
        if (O.span !== void 0) {
          const oe = pp(O.span, S, N, T.width, re, T, a), pe = T.sticky ? oe[0] : oe[1];
          pe !== void 0 && ($ = pe.x, ce = pe.width);
        }
        return Y === R && I && v && (w = () => {
          var oe;
          H > $ && !T.sticky && (e.beginPath(), e.rect(H, 0, t - H, n), e.clip()), e.beginPath(), e.rect($ + ce - 4, N + re - 4, 4, 4), e.fillStyle = ((oe = T.themeOverride) == null ? void 0 : oe.accentColor) ?? l.accentColor, e.fill();
        }), w !== void 0;
      }), w !== void 0;
  }), w === void 0)
    return;
  const k = () => {
    e.save(), e.beginPath(), e.rect(0, c, t, n - c - F), e.clip(), w == null || w(), e.restore();
  };
  return k(), k;
}
function vb(e, t, n, r, i, o, s, a, l) {
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
function yb(e, t, n, r, i, o, s, a, l, c) {
  let u = 0;
  return nr(e, o, r, i, n, (h, d, g, f, v) => (Oo(v, g, t, s, a, l, c, void 0, (x, A, y, C) => {
    C || (u = Math.max(A, u));
  }), !0)), u;
}
function rg(e, t) {
  var Ue;
  const { canvasCtx: n, headerCanvasCtx: r, width: i, height: o, cellXOffset: s, cellYOffset: a, translateX: l, translateY: c, mappedColumns: u, enableGroups: h, freezeColumns: d, dragAndDropState: g, theme: f, drawFocus: v, headerHeight: x, groupHeaderHeight: A, disabledRows: y, rowHeight: C, verticalBorder: P, overrideCursor: b, isResizing: M, selection: O, fillHandle: E, freezeTrailingRows: _, rows: F, getCellContent: R, getGroupDetails: w, getRowThemeOverride: k, isFocused: T, drawHeaderCallback: S, prelightCells: z, drawCellCallback: H, highlightRegions: B, resizeCol: ne, imageLoader: Z, lastBlitData: I, hoverValues: N, hyperWrapping: Y, hoverInfo: re, spriteManager: $, maxScaleFactor: ce, hasAppendRow: se, touchMode: oe, enqueue: pe, renderStateProvider: we, getCellRenderer: Ce, renderStrategy: Be, bufferACtx: J, bufferBCtx: Ee, damage: Pe, minimumCellWidth: dt } = e;
  if (i === 0 || o === 0)
    return;
  const Se = Be === "double-buffer", ve = Math.min(ce, Math.ceil(window.devicePixelRatio ?? 1)), Oe = Be !== "direct" && mb(e, t), Le = n.canvas;
  (Le.width !== i * ve || Le.height !== o * ve) && (Le.width = i * ve, Le.height = o * ve, Le.style.width = i + "px", Le.style.height = o + "px");
  const qe = r.canvas, Me = h ? A + x : x, nt = Me + 1;
  (qe.width !== i * ve || qe.height !== nt * ve) && (qe.width = i * ve, qe.height = nt * ve, qe.style.width = i + "px", qe.style.height = nt + "px");
  const Ye = J.canvas, Ke = Ee.canvas;
  Se && (Ye.width !== i * ve || Ye.height !== o * ve) && (Ye.width = i * ve, Ye.height = o * ve, I.current !== void 0 && (I.current.aBufferScroll = void 0)), Se && (Ke.width !== i * ve || Ke.height !== o * ve) && (Ke.width = i * ve, Ke.height = o * ve, I.current !== void 0 && (I.current.bBufferScroll = void 0));
  const ue = I.current;
  if (Oe === !0 && s === (ue == null ? void 0 : ue.cellXOffset) && a === (ue == null ? void 0 : ue.cellYOffset) && l === (ue == null ? void 0 : ue.translateX) && c === (ue == null ? void 0 : ue.translateY))
    return;
  let He = null;
  Se && (He = n);
  const We = r;
  let De;
  Se ? Pe !== void 0 ? De = (ue == null ? void 0 : ue.lastBuffer) === "b" ? Ee : J : De = (ue == null ? void 0 : ue.lastBuffer) === "b" ? J : Ee : De = n;
  const Mt = De.canvas, Ve = Se ? Mt === Ye ? Ke : Ye : Le, je = typeof C == "number" ? () => C : C;
  We.save(), De.save(), We.beginPath(), De.beginPath(), We.textBaseline = "middle", De.textBaseline = "middle", ve !== 1 && (We.scale(ve, ve), De.scale(ve, ve));
  const Ze = mc(u, s, i, g, l);
  let Ct = [];
  const It = v && ((Ue = O.current) == null ? void 0 : Ue.cell[1]) === a && c === 0;
  let sn = !1;
  if (B !== void 0) {
    for (const Je of B)
      if (Je.style !== "no-outline" && Je.range.y === a && c === 0) {
        sn = !0;
        break;
      }
  }
  const Kt = () => {
    ly(We, Ze, h, re, i, l, x, A, g, M, O, f, $, N, P, w, Pe, S, oe), eg(We, Ze, a, l, c, i, o, void 0, void 0, A, Me, je, k, P, _, F, f, !0), We.beginPath(), We.moveTo(0, nt - 0.5), We.lineTo(i, nt - 0.5), We.strokeStyle = on(f.headerBottomBorderColor ?? f.horizontalBorderColor ?? f.borderColor, f.bgHeader), We.stroke(), sn && tg(We, i, o, s, a, l, c, u, d, x, A, C, _, F, B, f), It && tc(We, i, o, a, l, c, Ze, u, f, Me, O, je, R, _, se, E, F);
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
        y: F - _,
        width: Je,
        height: _,
        when: _ > 0
      }
    ]), Ft = (kt) => {
      jf(kt, Ze, u, o, Me, l, c, a, F, je, R, w, k, y, T, v, _, se, Ct, Pe, O, z, B, Z, $, N, re, H, Y, f, pe, we, Ce, b, dt);
      const Dt = O.current;
      E && v && Dt !== void 0 && Pe.has(Jg(Dt.range)) && tc(kt, i, o, a, l, c, Ze, u, f, Me, O, je, R, _, se, E, F);
    };
    Lt && (Ft(De), He !== null && (He.save(), He.scale(ve, ve), He.textBaseline = "middle", Ft(He), He.restore()), Pe.hasHeader() && (vb(We, Ze, i, A, Me, l, c, a, Pe), Kt())), De.restore(), We.restore();
    return;
  }
  if ((Oe !== !0 || s !== (ue == null ? void 0 : ue.cellXOffset) || l !== (ue == null ? void 0 : ue.translateX) || It !== (ue == null ? void 0 : ue.mustDrawFocusOnHeader) || sn !== (ue == null ? void 0 : ue.mustDrawHighlightRingsOnHeader)) && Kt(), Oe === !0) {
    rn(Ve !== void 0 && ue !== void 0);
    const { regions: Je } = gb(De, Ve, Ve === Ye ? ue.aBufferScroll : ue.bBufferScroll, Ve === Ye ? ue.bBufferScroll : ue.aBufferScroll, ue, s, a, l, c, _, i, o, F, Me, ve, u, Ze, C, Se);
    Ct = Je;
  } else Oe !== !1 && (rn(ue !== void 0), Ct = pb(ue, s, a, l, c, i, o, Me, Ze, Oe));
  fb(De, Ze, i, o, _, F, P, je, f);
  const mt = tg(De, i, o, s, a, l, c, u, d, x, A, C, _, F, B, f), Bt = v ? tc(De, i, o, a, l, c, Ze, u, f, Me, O, je, R, _, se, E, F) : void 0;
  if (De.fillStyle = f.bgCell, Ct.length > 0) {
    De.beginPath();
    for (const Je of Ct)
      De.rect(Je.x, Je.y, Je.width, Je.height);
    De.clip(), De.fill(), De.beginPath();
  } else
    De.fillRect(0, 0, i, o);
  const Wt = jf(De, Ze, u, o, Me, l, c, a, F, je, R, w, k, y, T, v, _, se, Ct, Pe, O, z, B, Z, $, N, re, H, Y, f, pe, we, Ce, b, dt);
  db(De, Ze, u, i, o, Me, l, c, a, F, je, k, O.rows, y, _, se, Ct, Pe, f), hb(De, Ze, a, l, c, i, o, Ct, Me, je, k, P, _, F, f), eg(De, Ze, a, l, c, i, o, Ct, Wt, A, Me, je, k, P, _, F, f), mt == null || mt(), Bt == null || Bt(), M && nr(Ze, 0, l, 0, Me, (Je, Lt) => Je.sourceIndex === ne ? (ng(We, Lt + Je.width, 0, Me + 1, on(f.resizeIndicatorColor ?? f.accentLight, f.bgHeader)), ng(De, Lt + Je.width, Me, o, on(f.resizeIndicatorColor ?? f.accentLight, f.bgCell)), !0) : !1), He !== null && (He.fillStyle = f.bgCell, He.fillRect(0, 0, i, o), He.drawImage(De.canvas, 0, 0));
  const On = yb(Ze, o, Me, l, c, a, F, je, _, se);
  Z == null || Z.setWindow({
    x: s,
    y: a,
    width: Ze.length,
    height: On - a
  }, d, Array.from({ length: _ }, (Je, Lt) => F - 1 - Lt));
  const Dn = ue !== void 0 && (s !== ue.cellXOffset || l !== ue.translateX), gt = ue !== void 0 && (a !== ue.cellYOffset || c !== ue.translateY);
  I.current = {
    cellXOffset: s,
    cellYOffset: a,
    translateX: l,
    translateY: c,
    mustDrawFocusOnHeader: It,
    mustDrawHighlightRingsOnHeader: sn,
    lastBuffer: Se ? Mt === Ye ? "a" : "b" : void 0,
    aBufferScroll: Mt === Ye ? [Dn, gt] : ue == null ? void 0 : ue.aBufferScroll,
    bBufferScroll: Mt === Ke ? [Dn, gt] : ue == null ? void 0 : ue.bBufferScroll
  }, De.restore(), We.restore();
}
const bb = 80;
function wb(e) {
  const t = e - 1;
  return t * t * t + 1;
}
class Sb {
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
    be(this, "getAnimatingItems", () => this.currentHoveredItem !== void 0 ? [...this.leavingItems, this.currentHoveredItem] : this.leavingItems.map((t) => ({ ...t, hoverAmount: wb(t.hoverAmount) })));
    be(this, "step", (t) => {
      if (this.lastAnimationTime === void 0)
        this.lastAnimationTime = t;
      else {
        const r = (t - this.lastAnimationTime) / bb;
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
class Cb {
  constructor(t) {
    be(this, "fn");
    be(this, "val");
    this.fn = t;
  }
  get value() {
    return this.val ?? (this.val = this.fn());
  }
}
function Qc(e) {
  return new Cb(e);
}
const kb = Qc(() => window.navigator.userAgent.includes("Firefox")), So = Qc(() => window.navigator.userAgent.includes("Mac OS") && window.navigator.userAgent.includes("Safari") && !window.navigator.userAgent.includes("Chrome")), Co = Qc(() => window.navigator.platform.toLowerCase().startsWith("mac"));
function xb(e) {
  const t = p.useRef([]), n = p.useRef(0), r = p.useRef(e);
  r.current = e;
  const i = p.useCallback(() => {
    const o = () => window.requestAnimationFrame(s), s = () => {
      const a = t.current.map(Yc);
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
const Jn = "header", nn = "group-header", ko = "out-of-bounds";
var Br;
(function(e) {
  e[e.Start = -2] = "Start", e[e.StartPadding = -1] = "StartPadding", e[e.Center = 0] = "Center", e[e.EndPadding = 1] = "EndPadding", e[e.End = 2] = "End";
})(Br || (Br = {}));
function Ip(e, t) {
  return e === t ? !0 : (e == null ? void 0 : e.kind) === "out-of-bounds" ? (e == null ? void 0 : e.kind) === (t == null ? void 0 : t.kind) && (e == null ? void 0 : e.location[0]) === (t == null ? void 0 : t.location[0]) && (e == null ? void 0 : e.location[1]) === (t == null ? void 0 : t.location[1]) && (e == null ? void 0 : e.region[0]) === (t == null ? void 0 : t.region[0]) && (e == null ? void 0 : e.region[1]) === (t == null ? void 0 : t.region[1]) : (e == null ? void 0 : e.kind) === (t == null ? void 0 : t.kind) && (e == null ? void 0 : e.location[0]) === (t == null ? void 0 : t.location[0]) && (e == null ? void 0 : e.location[1]) === (t == null ? void 0 : t.location[1]);
}
const ig = 6, Rb = (e, t) => {
  if (e.kind === ae.Custom)
    return e.copyData;
  const n = t == null ? void 0 : t(e);
  return (n == null ? void 0 : n.getAccessibilityString(e)) ?? "";
}, _b = (e, t) => {
  const { width: n, height: r, accessibilityHeight: i, columns: o, cellXOffset: s, cellYOffset: a, headerHeight: l, fillHandle: c = !1, groupHeaderHeight: u, rowHeight: h, rows: d, getCellContent: g, getRowThemeOverride: f, onHeaderMenuClick: v, enableGroups: x, isFilling: A, onCanvasFocused: y, onCanvasBlur: C, isFocused: P, selection: b, freezeColumns: M, onContextMenu: O, freezeTrailingRows: E, fixedShadowX: _ = !0, fixedShadowY: F = !0, drawFocusRing: R, onMouseDown: w, onMouseUp: k, onMouseMoveRaw: T, onMouseMove: S, onItemHovered: z, dragAndDropState: H, firstColAccessible: B, onKeyDown: ne, onKeyUp: Z, highlightRegions: I, canvasRef: N, onDragStart: Y, onDragEnd: re, eventTargetRef: $, isResizing: ce, resizeColumn: se, isDragging: oe, isDraggable: pe = !1, allowResize: we, disabledRows: Ce, hasAppendRow: Be, getGroupDetails: J, theme: Ee, prelightCells: Pe, headerIcons: dt, verticalBorder: Se, drawCell: ve, drawHeader: Oe, onCellFocused: Le, onDragOverCell: qe, onDrop: Me, onDragLeave: nt, imageWindowLoader: Ye, smoothScrollX: Ke = !1, smoothScrollY: ue = !1, experimental: He, getCellRenderer: We } = e, De = e.translateX ?? 0, Mt = e.translateY ?? 0, Ve = Math.max(M, Math.min(o.length - 1, s)), je = p.useRef(null), Ze = Ye, Ct = p.useRef(), [It, sn] = p.useState(!1), Kt = p.useRef([]), mt = p.useRef(), [Bt, Wt] = p.useState(), [On, Dn] = p.useState(), gt = p.useRef(null), [Ue, Je] = p.useState(), [Lt, Ft] = p.useState(!1), kt = p.useRef(Lt);
  kt.current = Lt;
  const Dt = p.useMemo(() => new ty(dt, () => {
    xn.current = void 0, rr.current();
  }), [dt]), hn = x ? u + l : l, Ge = p.useRef(-1), vt = ((He == null ? void 0 : He.enableFirefoxRescaling) ?? !1) && kb.value, ct = ((He == null ? void 0 : He.enableSafariRescaling) ?? !1) && So.value;
  p.useLayoutEffect(() => {
    window.devicePixelRatio === 1 || !vt && !ct || (Ge.current !== -1 && sn(!0), window.clearTimeout(Ge.current), Ge.current = window.setTimeout(() => {
      sn(!1), Ge.current = -1;
    }, 200));
  }, [a, Ve, De, Mt, vt, ct]);
  const ut = P1(o, M), qt = _ ? jr(ut, H) : 0, pt = p.useCallback((q, ee, de) => {
    const le = q.getBoundingClientRect();
    if (ee >= ut.length || de >= d)
      return;
    const ie = le.width / n, me = vc(ee, de, n, r, u, hn, Ve, a, De, Mt, d, M, E, ut, h);
    return ie !== 1 && (me.x *= ie, me.y *= ie, me.width *= ie, me.height *= ie), me.x += le.x, me.y += le.y, me;
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
  ]), Ot = p.useCallback((q, ee, de, le) => {
    const ie = q.getBoundingClientRect(), me = ie.width / n, Ie = (ee - ie.left) / me, Ae = (de - ie.top) / me, ge = 5, tt = mc(ut, Ve, n, void 0, De);
    let ke = 0, it = 0;
    le instanceof MouseEvent && (ke = le.button, it = le.buttons);
    const Fe = F1(Ie, tt, De), Xe = q1(Ae, r, x, l, u, d, h, a, Mt, E), Rt = (le == null ? void 0 : le.shiftKey) === !0, ze = (le == null ? void 0 : le.ctrlKey) === !0, xt = (le == null ? void 0 : le.metaKey) === !0, cn = le !== void 0 && !(le instanceof MouseEvent) || (le == null ? void 0 : le.pointerType) === "touch", wt = [
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
        rn(or !== void 0), vn = ee < or.x + or.width + ge;
      }
      const Er = Ie > n && Ie < n + uc() || Ae > r && Ae < r + uc();
      Jt = {
        kind: ko,
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
      let _t = et !== void 0 && et.x + et.width - ee <= ge;
      const Qt = Fe - 1;
      ee - et.x <= ge && Qt >= 0 ? (_t = !0, et = pt(q, Qt, Xe), rn(et !== void 0), Jt = {
        kind: x && Xe === -2 ? nn : Jn,
        location: [Qt, Xe],
        bounds: et,
        group: ut[Qt].group ?? "",
        isEdge: _t,
        shiftKey: Rt,
        ctrlKey: ze,
        metaKey: xt,
        isTouch: cn,
        localEventX: ee - et.x,
        localEventY: de - et.y,
        button: ke,
        buttons: it,
        scrollEdge: wt
      }) : Jt = {
        kind: x && Xe === -2 ? nn : Jn,
        group: ut[Fe].group ?? "",
        location: [Fe, Xe],
        bounds: et,
        isEdge: _t,
        shiftKey: Rt,
        ctrlKey: ze,
        metaKey: xt,
        isTouch: cn,
        localEventX: ee - et.x,
        localEventY: de - et.y,
        button: ke,
        buttons: it,
        scrollEdge: wt
      };
    } else {
      const et = pt(q, Fe, Xe);
      rn(et !== void 0);
      const _t = et !== void 0 && et.x + et.width - ee < ge;
      let Qt = !1;
      if (c && b.current !== void 0) {
        const Rn = Jg(b.current.range), vn = pt(q, Rn[0], Rn[1]);
        if (vn !== void 0) {
          const Er = vn.x + vn.width - 2, or = vn.y + vn.height - 2;
          Qt = Math.abs(Er - ee) < ig && Math.abs(or - de) < ig;
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
        localEventX: ee - et.x,
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
    x,
    l,
    u,
    d,
    h,
    a,
    Mt,
    E,
    pt,
    c,
    b,
    hn
  ]), [yt] = Bt ?? [], Oi = p.useRef(() => {
  }), Wn = p.useRef(Bt);
  Wn.current = Bt;
  const [Ln, Fn] = p.useMemo(() => {
    const q = document.createElement("canvas"), ee = document.createElement("canvas");
    return q.style.display = "none", q.style.opacity = "0", q.style.position = "fixed", ee.style.display = "none", ee.style.opacity = "0", ee.style.position = "fixed", [q.getContext("2d", { alpha: !1 }), ee.getContext("2d", { alpha: !1 })];
  }, []);
  p.useLayoutEffect(() => {
    if (!(Ln === null || Fn === null))
      return document.documentElement.append(Ln.canvas), document.documentElement.append(Fn.canvas), () => {
        Ln.canvas.remove(), Fn.canvas.remove();
      };
  }, [Ln, Fn]);
  const yr = p.useMemo(() => new G1(), []), Di = vt && It ? 1 : ct && It ? 2 : 5, Li = (He == null ? void 0 : He.disableMinimumCellWidth) === !0 ? 1 : 10, xn = p.useRef(), br = p.useRef(null), wr = p.useRef(null), Sr = p.useCallback(() => {
    var Ie;
    const q = je.current, ee = gt.current;
    if (q === null || ee === null || (br.current === null && (br.current = q.getContext("2d", { alpha: !1 }), q.width = 0, q.height = 0), wr.current === null && (wr.current = ee.getContext("2d", { alpha: !1 }), ee.width = 0, ee.height = 0), br.current === null || wr.current === null || Ln === null || Fn === null))
      return;
    let de = !1;
    const le = (Ae) => {
      de = !0, Je(Ae);
    }, ie = xn.current, me = {
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
      enableGroups: x,
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
      isFocused: P,
      selection: b,
      fillHandle: c,
      drawCellCallback: ve,
      hasAppendRow: Be,
      overrideCursor: le,
      maxScaleFactor: Di,
      freezeTrailingRows: E,
      rows: d,
      drawFocus: R,
      getCellContent: g,
      getGroupDetails: J ?? ((Ae) => ({ name: Ae })),
      getRowThemeOverride: f,
      drawHeaderCallback: Oe,
      prelightCells: Pe,
      highlightRegions: I,
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
      renderStrategy: (He == null ? void 0 : He.renderStrategy) ?? (So.value ? "double-buffer" : "single-buffer"),
      getCellRenderer: We,
      minimumCellWidth: Li
    };
    me.damage === void 0 ? (xn.current = me, rg(me, ie)) : rg(me, void 0), !de && (me.damage === void 0 || me.damage.has((Ie = Wn == null ? void 0 : Wn.current) == null ? void 0 : Ie[0])) && Je(void 0);
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
    x,
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
    P,
    b,
    c,
    E,
    d,
    R,
    Di,
    g,
    J,
    f,
    ve,
    Oe,
    Pe,
    I,
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
      var ee;
      ((ee = document == null ? void 0 : document.fonts) == null ? void 0 : ee.ready) !== void 0 && (await document.fonts.ready, xn.current = void 0, rr.current());
    })();
  }, []);
  const jn = p.useCallback((q) => {
    Ct.current = q, rr.current(), Ct.current = void 0;
  }, []), Fi = xb(jn);
  Oi.current = Fi;
  const qi = p.useCallback((q) => {
    jn(new xi(q.map((ee) => ee.cell)));
  }, [jn]);
  Ze.setCallback(jn);
  const [Lo, Fo] = p.useState(!1), [Cr, qn] = yt ?? [], qo = Cr !== void 0 && qn === -1, Ho = Cr !== void 0 && qn === -2;
  let Hi = !1, kr = !1, At = Ue;
  if (At === void 0 && Cr !== void 0 && qn !== void 0 && qn > -1 && qn < d) {
    const q = g([Cr, qn], !0);
    Hi = q.kind === fn.NewRow || q.kind === fn.Marker && q.markerKind !== "number", kr = q.kind === ae.Boolean && cc(q), At = q.cursor;
  }
  const zi = oe ? "grabbing" : (On ?? !1) || ce ? "col-resize" : Lo || A ? "crosshair" : At !== void 0 ? At : qo || Hi || kr || Ho ? "pointer" : "default", xr = p.useMemo(() => ({
    // width,
    // height,
    contain: "strict",
    display: "block",
    cursor: zi
  }), [zi]), Ur = p.useRef("default"), Un = $ == null ? void 0 : $.current;
  Un != null && Ur.current !== xr.cursor && (Un.style.cursor = Ur.current = xr.cursor);
  const Vt = p.useCallback((q, ee, de, le) => {
    if (J === void 0)
      return;
    const ie = J(q);
    if (ie.actions !== void 0) {
      const me = bp(ee, ie.actions);
      for (const [Ie, Ae] of me.entries())
        if (Do(Ae, de + ee.x, le + Ae.y))
          return ie.actions[Ie];
    }
  }, [J]), gn = p.useCallback((q, ee, de, le) => {
    const ie = o[ee];
    if (!oe && !ce && ie.hasMenu === !0 && !(On ?? !1)) {
      const me = pt(q, ee, -1);
      rn(me !== void 0);
      const Ie = yp(me.x, me.y, me.width, me.height, Fc(ie.title) === "rtl");
      if (de > Ie.x && de < Ie.x + Ie.width && le > Ie.y && le < Ie.y + Ie.height)
        return me;
    }
  }, [o, pt, On, oe, ce]), Xr = p.useRef(0), Xn = p.useRef(), Gr = p.useRef(!1), jt = p.useCallback((q) => {
    const ee = je.current, de = $ == null ? void 0 : $.current;
    if (ee === null || q.target !== ee && q.target !== de)
      return;
    Gr.current = !0;
    let le, ie;
    if (q instanceof MouseEvent ? (le = q.clientX, ie = q.clientY) : (le = q.touches[0].clientX, ie = q.touches[0].clientY), q.target === de && de !== null) {
      const Ie = de.getBoundingClientRect();
      if (le > Ie.right || ie > Ie.bottom)
        return;
    }
    const me = Ot(ee, le, ie, q);
    Xn.current = me.location, me.isTouch && (Xr.current = Date.now()), kt.current !== me.isTouch && Ft(me.isTouch), !(me.kind === Jn && gn(ee, me.location[0], le, ie) !== void 0) && (me.kind === nn && Vt(me.group, me.bounds, me.localEventX, me.localEventY) !== void 0 || (w == null || w(me), !me.isTouch && pe !== !0 && pe !== me.kind && me.button < 3 && me.button !== 1 && q.preventDefault()));
  }, [$, pe, Ot, Vt, gn, w]);
  Ht("touchstart", jt, window, !1), Ht("mousedown", jt, window, !1);
  const Rr = p.useRef(0), Yr = p.useCallback((q) => {
    var it, Fe;
    const ee = Rr.current;
    Rr.current = Date.now();
    const de = je.current;
    if (Gr.current = !1, k === void 0 || de === null)
      return;
    const le = $ == null ? void 0 : $.current, ie = q.target !== de && q.target !== le;
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
    }), ee !== 0 && Date.now() - ee < (ge.isTouch ? 1e3 : 500) && (ge = {
      ...ge,
      isDoubleClick: !0
    }), kt.current !== ge.isTouch && Ft(ge.isTouch), !ie && q.cancelable && Ae && q.preventDefault();
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
    k(ge, ie);
  }, [k, $, Ot, gn, Vt]);
  Ht("mouseup", Yr, window, !1), Ht("touchend", Yr, window, !1);
  const $i = p.useCallback((q) => {
    var ke, it;
    const ee = je.current;
    if (ee === null)
      return;
    const de = $ == null ? void 0 : $.current, le = q.target !== ee && q.target !== de;
    let ie, me, Ie = !0;
    q instanceof MouseEvent ? (ie = q.clientX, me = q.clientY, Ie = q.button < 3) : (ie = q.changedTouches[0].clientX, me = q.changedTouches[0].clientY);
    const Ae = Ot(ee, ie, me, q);
    kt.current !== Ae.isTouch && Ft(Ae.isTouch), !le && q.cancelable && Ie && q.preventDefault();
    const [ge] = Ae.location, tt = gn(ee, ge, ie, me);
    if (Ae.kind === Jn && tt !== void 0)
      Ae.button === 0 && ((ke = Xn.current) == null ? void 0 : ke[0]) === ge && ((it = Xn.current) == null ? void 0 : it[1]) === -1 && (v == null || v(ge, tt));
    else if (Ae.kind === nn) {
      const Fe = Vt(Ae.group, Ae.bounds, Ae.localEventX, Ae.localEventY);
      Fe !== void 0 && Ae.button === 0 && Fe.onClick(Ae);
    }
  }, [$, Ot, gn, v, Vt]);
  Ht("click", $i, window, !1);
  const zo = p.useCallback((q) => {
    const ee = je.current, de = $ == null ? void 0 : $.current;
    if (ee === null || q.target !== ee && q.target !== de || O === void 0)
      return;
    const le = Ot(ee, q.clientX, q.clientY, q);
    O(le, () => {
      q.cancelable && q.preventDefault();
    });
  }, [$, Ot, O]);
  Ht("contextmenu", zo, ($ == null ? void 0 : $.current) ?? null, !1);
  const Ni = p.useCallback((q) => {
    Ct.current = new xi(q.map((ee) => ee.item)), Kt.current = q, rr.current(), Ct.current = void 0;
  }, []), pn = p.useMemo(() => new Sb(Ni), [Ni]), Hn = p.useRef(pn);
  Hn.current = pn, p.useLayoutEffect(() => {
    const q = Hn.current;
    if (yt === void 0 || yt[1] < 0) {
      q.setHovered(yt);
      return;
    }
    const ee = g(yt, !0), de = We(ee), le = de === void 0 && ee.kind === ae.Custom || (de == null ? void 0 : de.needsHover) !== void 0 && (typeof de.needsHover == "boolean" ? de.needsHover : de.needsHover(ee));
    q.setHovered(le ? yt : void 0);
  }, [g, We, yt]);
  const Zt = p.useRef(), U = p.useCallback((q) => {
    var Ae;
    const ee = je.current;
    if (ee === null)
      return;
    const de = $ == null ? void 0 : $.current, le = q.target !== ee && q.target !== de, ie = Ot(ee, q.clientX, q.clientY, q);
    if (ie.kind !== "out-of-bounds" && le && !Gr.current && !ie.isTouch)
      return;
    const me = (ge, tt) => {
      Wt((ke) => ke === ge || (ke == null ? void 0 : ke[0][0]) === (ge == null ? void 0 : ge[0][0]) && (ke == null ? void 0 : ke[0][1]) === (ge == null ? void 0 : ge[0][1]) && ((ke == null ? void 0 : ke[1][0]) === (ge == null ? void 0 : ge[1][0]) && (ke == null ? void 0 : ke[1][1]) === (ge == null ? void 0 : ge[1][1]) || !tt) ? ke : ge);
    };
    if (!Ip(ie, Zt.current))
      Je(void 0), z == null || z(ie), me(ie.kind === ko ? void 0 : [ie.location, [ie.localEventX, ie.localEventY]], !0), Zt.current = ie;
    else if (ie.kind === "cell" || ie.kind === Jn || ie.kind === nn) {
      let ge = !1, tt = !0;
      if (ie.kind === "cell") {
        const it = g(ie.location);
        tt = ((Ae = We(it)) == null ? void 0 : Ae.needsHoverPosition) ?? it.kind === ae.Custom, ge = tt;
      } else ie.kind === nn && (ge = !0);
      const ke = [ie.location, [ie.localEventX, ie.localEventY]];
      me(ke, tt), Wn.current = ke, ge && jn(new xi([ie.location]));
    }
    const Ie = ie.location[0] >= (B ? 0 : 1);
    Dn(ie.kind === Jn && ie.isEdge && Ie && we === !0), Fo(ie.kind === "cell" && ie.isFillHandle), T == null || T(q), S(ie);
  }, [
    $,
    Ot,
    B,
    we,
    T,
    S,
    z,
    g,
    We,
    jn
  ]);
  Ht("mousemove", U, window, !0);
  const bt = p.useCallback((q) => {
    const ee = je.current;
    if (ee === null)
      return;
    let de, le;
    b.current !== void 0 && (de = pt(ee, b.current.cell[0], b.current.cell[1]), le = b.current.cell), ne == null || ne({
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
  }, [ne, b, pt]), ir = p.useCallback((q) => {
    const ee = je.current;
    if (ee === null)
      return;
    let de, le;
    b.current !== void 0 && (de = pt(ee, b.current.cell[0], b.current.cell[1]), le = b.current.cell), Z == null || Z({
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
  }, [Z, b, pt]), $o = p.useCallback((q) => {
    je.current = q, N !== void 0 && (N.current = q);
  }, [N]), Bi = p.useCallback((q) => {
    const ee = je.current;
    if (ee === null || pe === !1 || ce) {
      q.preventDefault();
      return;
    }
    let de, le;
    const ie = Ot(ee, q.clientX, q.clientY);
    if (pe !== !0 && ie.kind !== pe) {
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
    if (Y == null || Y({
      ...ie,
      setData: me,
      setDragImage: tt,
      preventDefault: () => ke = !0,
      defaultPrevented: () => ke
    }), !ke && de !== void 0 && le !== void 0 && q.dataTransfer !== null)
      if (q.dataTransfer.setData(de, le), q.dataTransfer.effectAllowed = "copyLink", Ie !== void 0 && Ae !== void 0 && ge !== void 0)
        q.dataTransfer.setDragImage(Ie, Ae, ge);
      else {
        const [it, Fe] = ie.location;
        if (Fe !== void 0) {
          const Xe = document.createElement("canvas"), Rt = pt(ee, it, Fe);
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
    Y,
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
  const Kr = p.useRef(), No = p.useCallback((q) => {
    const ee = je.current;
    if (Me !== void 0 && q.preventDefault(), ee === null || qe === void 0)
      return;
    const de = Ot(ee, q.clientX, q.clientY), [le, ie] = de.location, me = le - (B ? 0 : 1), [Ie, Ae] = Kr.current ?? [];
    (Ie !== me || Ae !== ie) && (Kr.current = [me, ie], qe([me, ie], q.dataTransfer));
  }, [B, Ot, qe, Me]);
  Ht("dragover", No, ($ == null ? void 0 : $.current) ?? null, !1, !1);
  const eu = p.useCallback(() => {
    Kr.current = void 0, re == null || re();
  }, [re]);
  Ht("dragend", eu, ($ == null ? void 0 : $.current) ?? null, !1, !1);
  const G = p.useCallback((q) => {
    const ee = je.current;
    if (ee === null || Me === void 0)
      return;
    q.preventDefault();
    const de = Ot(ee, q.clientX, q.clientY), [le, ie] = de.location, me = le - (B ? 0 : 1);
    Me([me, ie], q.dataTransfer);
  }, [B, Ot, Me]);
  Ht("drop", G, ($ == null ? void 0 : $.current) ?? null, !1, !1);
  const zt = p.useCallback(() => {
    nt == null || nt();
  }, [nt]);
  Ht("dragleave", zt, ($ == null ? void 0 : $.current) ?? null, !1, !1);
  const Pt = p.useRef(b);
  Pt.current = b;
  const _r = p.useRef(null), Vr = p.useCallback((q) => {
    var ee;
    je.current === null || !je.current.contains(document.activeElement) || (q === null && Pt.current.current !== void 0 ? (ee = N == null ? void 0 : N.current) == null || ee.focus({
      preventScroll: !0
    }) : q !== null && q.focus({
      preventScroll: !0
    }), _r.current = q);
  }, [N]);
  p.useImperativeHandle(t, () => ({
    focus: () => {
      var ee;
      const q = _r.current;
      q === null || !document.contains(q) ? (ee = N == null ? void 0 : N.current) == null || ee.focus({
        preventScroll: !0
      }) : q.focus({
        preventScroll: !0
      });
    },
    getBounds: (q, ee) => {
      if (!(N === void 0 || N.current === null))
        return pt(N.current, q ?? 0, ee ?? -1);
    },
    damage: qi
  }), [N, qi, pt]);
  const Gn = p.useRef(), Gt = Am(() => {
    var Ae, ge, tt;
    if (n < 50 || (He == null ? void 0 : He.disableAccessibilityTree) === !0)
      return null;
    let q = mc(ut, Ve, n, H, De);
    const ee = B ? 0 : -1;
    !B && ((Ae = q[0]) == null ? void 0 : Ae.sourceIndex) === 0 && (q = q.slice(1));
    const [de, le] = ((ge = b.current) == null ? void 0 : ge.cell) ?? [], ie = (tt = b.current) == null ? void 0 : tt.range, me = q.map((ke) => ke.sourceIndex), Ie = ur(a, Math.min(d, a + i));
    return de !== void 0 && le !== void 0 && !(me.includes(de) && Ie.includes(le)) && Vr(null), p.createElement(
      "table",
      { key: "access-tree", role: "grid", "aria-rowcount": d + 1, "aria-multiselectable": "true", "aria-colcount": ut.length + ee },
      p.createElement(
        "thead",
        { role: "rowgroup" },
        p.createElement("tr", { role: "row", "aria-rowindex": 1 }, q.map((ke) => p.createElement("th", { role: "columnheader", "aria-selected": b.columns.hasIndex(ke.sourceIndex), "aria-colindex": ke.sourceIndex + 1 + ee, tabIndex: -1, onFocus: (it) => {
          if (it.target !== _r.current)
            return Le == null ? void 0 : Le([ke.sourceIndex, -1]);
        }, key: ke.sourceIndex }, ke.title)))
      ),
      p.createElement("tbody", { role: "rowgroup" }, Ie.map((ke) => p.createElement("tr", { role: "row", "aria-selected": b.rows.hasIndex(ke), key: ke, "aria-rowindex": ke + 2 }, q.map((it) => {
        const Fe = it.sourceIndex, Xe = kn(Fe, ke), Rt = de === Fe && le === ke, ze = ie !== void 0 && Fe >= ie.x && Fe < ie.x + ie.width && ke >= ie.y && ke < ie.y + ie.height, xt = `glide-cell-${Fe}-${ke}`, cn = [Fe, ke], wt = g(cn, !0);
        return p.createElement("td", { key: Xe, role: "gridcell", "aria-colindex": Fe + 1 + ee, "aria-selected": ze, "aria-readonly": $r(wt) || !pi(wt), id: xt, "data-testid": xt, onClick: () => {
          const Jt = N == null ? void 0 : N.current;
          if (Jt != null)
            return ne == null ? void 0 : ne({
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
          if (!(Jt.target === _r.current || ((et = Gn.current) == null ? void 0 : et[0]) === Fe && ((_t = Gn.current) == null ? void 0 : _t[1]) === ke))
            return Gn.current = cn, Le == null ? void 0 : Le(cn);
        }, ref: Rt ? Vr : void 0, tabIndex: -1 }, Rb(wt, We));
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
    b,
    Vr,
    g,
    N,
    ne,
    pt,
    Le
  ], 200), mn = M === 0 || !_ ? 0 : Ve > M ? 1 : Cn(-De / 100, 0, 1), Bo = -a * 32 + Mt, Tr = F ? Cn(-Bo / 100, 0, 1) : 0, Wo = p.useMemo(() => {
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
    }, ee = {
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
      Tr > 0 && p.createElement("div", { id: "shadow-y", style: ee })
    );
  }, [mn, Tr, qt, n, Ke, hn, r, ue]), jo = p.useMemo(() => ({
    position: "absolute",
    top: 0,
    left: 0
  }), []);
  return p.createElement(
    p.Fragment,
    null,
    p.createElement("canvas", { "data-testid": "data-grid-canvas", tabIndex: 0, onKeyDown: bt, onKeyUp: ir, onFocus: y, onBlur: C, ref: $o, style: xr }, Gt),
    p.createElement("canvas", { ref: gt, style: jo }),
    Wo
  );
}, Tb = p.memo(p.forwardRef(_b));
function gi(e, t, n, r) {
  return Cn(Math.round(t - (e.growOffset ?? 0)), Math.ceil(n), Math.floor(r));
}
const Eb = (e) => {
  const [t, n] = p.useState(), [r, i] = p.useState(), [o, s] = p.useState(), [a, l] = p.useState(), [c, u] = p.useState(!1), [h, d] = p.useState(), [g, f] = p.useState(), [v, x] = p.useState(), [A, y] = p.useState(!1), [C, P] = p.useState(), { onHeaderMenuClick: b, getCellContent: M, onColumnMoved: O, onColumnResize: E, onColumnResizeStart: _, onColumnResizeEnd: F, gridRef: R, maxColumnWidth: w, minColumnWidth: k, onRowMoved: T, lockColumns: S, onColumnProposeMove: z, onMouseDown: H, onMouseUp: B, onItemHovered: ne, onDragStart: Z, canvasRef: I } = e, N = (E ?? F ?? _) !== void 0, { columns: Y, selection: re } = e, $ = re.columns, ce = p.useCallback((Se) => {
    const [ve, Oe] = Se.location;
    o !== void 0 && a !== ve && ve >= S ? (u(!0), l(ve)) : g !== void 0 && Oe !== void 0 ? (y(!0), x(Math.max(0, Oe))) : r === void 0 && !c && !A && (ne == null || ne(Se));
  }, [o, g, a, ne, S, r, c, A]), se = O !== void 0, oe = p.useCallback((Se) => {
    var ve;
    if (Se.button === 0) {
      const [Oe, Le] = Se.location;
      if (Se.kind === "out-of-bounds" && Se.isEdge && N) {
        const qe = (ve = R == null ? void 0 : R.current) == null ? void 0 : ve.getBounds(Y.length - 1, -1);
        qe !== void 0 && (n(qe.x), i(Y.length - 1));
      } else if (Se.kind === "header" && Oe >= S) {
        const qe = I == null ? void 0 : I.current;
        if (Se.isEdge && N && qe) {
          n(Se.bounds.x), i(Oe);
          const nt = qe.getBoundingClientRect().width / qe.offsetWidth, Ye = Se.bounds.width / nt;
          _ == null || _(Y[Oe], Ye, Oe, Ye + (Y[Oe].growOffset ?? 0));
        } else Se.kind === "header" && se && (d(Se.bounds.x), s(Oe));
      } else Se.kind === "cell" && S > 0 && Oe === 0 && Le !== void 0 && T !== void 0 && (P(Se.bounds.y), f(Le));
    }
    H == null || H(Se);
  }, [H, N, S, T, R, Y, se, _, I]), pe = p.useCallback((Se, ve) => {
    c || A || b == null || b(Se, ve);
  }, [c, A, b]), we = p.useRef(-1), Ce = p.useCallback(() => {
    we.current = -1, f(void 0), x(void 0), P(void 0), y(!1), s(void 0), l(void 0), d(void 0), u(!1), i(void 0), n(void 0);
  }, []), Be = p.useCallback((Se, ve) => {
    if (Se.button === 0) {
      if (r !== void 0) {
        if (($ == null ? void 0 : $.hasIndex(r)) === !0)
          for (const Le of $) {
            if (Le === r)
              continue;
            const qe = Y[Le], Me = gi(qe, we.current, k, w);
            E == null || E(qe, Me, Le, Me + (qe.growOffset ?? 0));
          }
        const Oe = gi(Y[r], we.current, k, w);
        if (F == null || F(Y[r], Oe, r, Oe + (Y[r].growOffset ?? 0)), $.hasIndex(r))
          for (const Le of $) {
            if (Le === r)
              continue;
            const qe = Y[Le], Me = gi(qe, we.current, k, w);
            F == null || F(qe, Me, Le, Me + (qe.growOffset ?? 0));
          }
      }
      Ce(), o !== void 0 && a !== void 0 && (O == null || O(o, a)), g !== void 0 && v !== void 0 && (T == null || T(g, v));
    }
    B == null || B(Se, ve);
  }, [
    B,
    r,
    o,
    a,
    g,
    v,
    $,
    F,
    Y,
    k,
    w,
    E,
    O,
    T,
    Ce
  ]), J = p.useMemo(() => {
    if (!(o === void 0 || a === void 0) && o !== a && (z == null ? void 0 : z(o, a)) !== !1)
      return {
        src: o,
        dest: a
      };
  }, [o, a, z]), Ee = p.useCallback((Se) => {
    const ve = I == null ? void 0 : I.current;
    if (o !== void 0 && h !== void 0)
      Math.abs(Se.clientX - h) > 20 && u(!0);
    else if (g !== void 0 && C !== void 0)
      Math.abs(Se.clientY - C) > 20 && y(!0);
    else if (r !== void 0 && t !== void 0 && ve) {
      const Le = ve.getBoundingClientRect().width / ve.offsetWidth, qe = (Se.clientX - t) / Le, Me = Y[r], nt = gi(Me, qe, k, w);
      if (E == null || E(Me, nt, r, nt + (Me.growOffset ?? 0)), we.current = qe, ($ == null ? void 0 : $.first()) === r)
        for (const Ye of $) {
          if (Ye === r)
            continue;
          const Ke = Y[Ye], ue = gi(Ke, we.current, k, w);
          E == null || E(Ke, ue, Ye, ue + (Ke.growOffset ?? 0));
        }
    }
  }, [
    o,
    h,
    g,
    C,
    r,
    t,
    Y,
    k,
    w,
    E,
    $,
    I
  ]), Pe = p.useCallback((Se, ve) => {
    if (g === void 0 || v === void 0)
      return M(Se, ve);
    let [Oe, Le] = Se;
    return Le === v ? Le = g : (Le > v && (Le -= 1), Le >= g && (Le += 1)), M([Oe, Le], ve);
  }, [g, v, M]), dt = p.useCallback((Se) => {
    Z == null || Z(Se), Se.defaultPrevented() || Ce();
  }, [Ce, Z]);
  return p.createElement(Tb, { accessibilityHeight: e.accessibilityHeight, canvasRef: e.canvasRef, cellXOffset: e.cellXOffset, cellYOffset: e.cellYOffset, columns: e.columns, disabledRows: e.disabledRows, drawFocusRing: e.drawFocusRing, drawHeader: e.drawHeader, drawCell: e.drawCell, enableGroups: e.enableGroups, eventTargetRef: e.eventTargetRef, experimental: e.experimental, fillHandle: e.fillHandle, firstColAccessible: e.firstColAccessible, fixedShadowX: e.fixedShadowX, fixedShadowY: e.fixedShadowY, freezeColumns: e.freezeColumns, getCellRenderer: e.getCellRenderer, getGroupDetails: e.getGroupDetails, getRowThemeOverride: e.getRowThemeOverride, groupHeaderHeight: e.groupHeaderHeight, headerHeight: e.headerHeight, headerIcons: e.headerIcons, height: e.height, highlightRegions: e.highlightRegions, imageWindowLoader: e.imageWindowLoader, resizeColumn: r, isDraggable: e.isDraggable, isFilling: e.isFilling, isFocused: e.isFocused, onCanvasBlur: e.onCanvasBlur, onCanvasFocused: e.onCanvasFocused, onCellFocused: e.onCellFocused, onContextMenu: e.onContextMenu, onDragEnd: e.onDragEnd, onDragLeave: e.onDragLeave, onDragOverCell: e.onDragOverCell, onDrop: e.onDrop, onKeyDown: e.onKeyDown, onKeyUp: e.onKeyUp, onMouseMove: e.onMouseMove, prelightCells: e.prelightCells, rowHeight: e.rowHeight, rows: e.rows, selection: e.selection, smoothScrollX: e.smoothScrollX, smoothScrollY: e.smoothScrollY, theme: e.theme, freezeTrailingRows: e.freezeTrailingRows, hasAppendRow: e.hasAppendRow, translateX: e.translateX, translateY: e.translateY, verticalBorder: e.verticalBorder, width: e.width, getCellContent: Pe, isResizing: r !== void 0, onHeaderMenuClick: pe, isDragging: c, onItemHovered: ce, onDragStart: dt, onMouseDown: oe, allowResize: N, onMouseUp: Be, dragAndDropState: J, onMouseMoveRaw: Ee, ref: R });
};
function Mb(e) {
  const t = qr(null), [n, r] = Cc({
    width: e == null ? void 0 : e[0],
    height: e == null ? void 0 : e[1]
  });
  return p0(() => {
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
const Ib = (e, t, n) => {
  const r = qr(null), i = qr(null), o = qr(null), s = qr(0), a = qr(t);
  a.current = t;
  const l = n.current;
  kc(() => {
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
}, Ab = () => (e) => e.isSafari ? "scroll" : "auto", Pb = /* @__PURE__ */ an("div")({
  name: "ScrollRegionStyle",
  class: "gdg-s1dgczr6",
  propsAsIs: !1,
  vars: {
    "s1dgczr6-0": [Ab()]
  }
});
function Ob(e) {
  const [t, n] = p.useState(!1), r = typeof window > "u" ? null : window, i = p.useRef(0);
  return Ht("touchstart", p.useCallback(() => {
    window.clearTimeout(i.current), n(!0);
  }, []), r, !0, !1), Ht("touchend", p.useCallback((o) => {
    o.touches.length === 0 && (i.current = window.setTimeout(() => n(!1), e));
  }, [e]), r, !0, !1), t;
}
const Db = (e) => {
  var Y, re;
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
  } = e, x = [], A = (d == null ? void 0 : d.sticky) ?? !1, y = (d == null ? void 0 : d.fill) ?? !1, C = p.useRef(0), P = p.useRef(0), b = p.useRef(null), M = typeof window > "u" ? 1 : window.devicePixelRatio, O = p.useRef({
    scrollLeft: 0,
    scrollTop: 0,
    lockDirection: void 0
  }), E = p.useRef(null), _ = Ob(200), [F, R] = p.useState(!0), w = p.useRef(0);
  p.useLayoutEffect(() => {
    if (!F || _ || O.current.lockDirection === void 0) return;
    const $ = b.current;
    if ($ === null) return;
    const [ce, se] = O.current.lockDirection;
    ce !== void 0 ? $.scrollLeft = ce : se !== void 0 && ($.scrollTop = se), O.current.lockDirection = void 0;
  }, [_, F]);
  const k = p.useCallback(($, ce) => {
    var ve;
    const se = b.current;
    if (se === null) return;
    ce = ce ?? se.scrollTop, $ = $ ?? se.scrollLeft;
    const oe = O.current.scrollTop, pe = O.current.scrollLeft, we = $ - pe, Ce = ce - oe;
    _ && we !== 0 && Ce !== 0 && (Math.abs(we) > 3 || Math.abs(Ce) > 3) && l && O.current.lockDirection === void 0 && (O.current.lockDirection = Math.abs(we) < Math.abs(Ce) ? [pe, void 0] : [void 0, oe]);
    const Be = O.current.lockDirection;
    $ = (Be == null ? void 0 : Be[0]) ?? $, ce = (Be == null ? void 0 : Be[1]) ?? ce, O.current.scrollLeft = $, O.current.scrollTop = ce;
    const J = se.clientWidth, Ee = se.clientHeight, Pe = ce, dt = P.current - Pe, Se = se.scrollHeight - Ee;
    if (P.current = Pe, Se > 0 && (Math.abs(dt) > 2e3 || Pe === 0 || Pe === Se) && r > se.scrollHeight + 5) {
      const Oe = Pe / Se, Le = (r - Ee) * Oe;
      C.current = Le - Pe;
    }
    Be !== void 0 && (window.clearTimeout(w.current), R(!1), w.current = window.setTimeout(() => R(!0), 200)), o({
      x: $,
      y: Pe + C.current,
      width: J - u,
      height: Ee - c,
      paddingRight: ((ve = E.current) == null ? void 0 : ve.clientWidth) ?? 0
    });
  }, [c, u, r, o, l, _]);
  Ib(g && So.value, k, b);
  const T = p.useRef(k);
  T.current = k;
  const S = p.useRef(), z = p.useRef(!1);
  p.useLayoutEffect(() => {
    z.current ? k() : z.current = !0;
  }, [k, c, u]);
  const H = p.useCallback(($) => {
    b.current = $, f !== void 0 && (f.current = $);
  }, [f]);
  let B = 0, ne = 0;
  for (x.push(p.createElement("div", {
    key: B++,
    style: {
      width: i,
      height: 0
    }
  })); ne < r; ) {
    const $ = Math.min(5e6, r - ne);
    x.push(p.createElement("div", {
      key: B++,
      style: {
        width: 0,
        height: $
      }
    })), ne += $;
  }
  const {
    ref: Z,
    width: I,
    height: N
  } = Mb(v);
  return typeof window < "u" && (((Y = S.current) == null ? void 0 : Y.height) !== N || ((re = S.current) == null ? void 0 : re.width) !== I) && (window.setTimeout(() => T.current(), 0), S.current = {
    width: I,
    height: N
  }), (I ?? 0) === 0 || (N ?? 0) === 0 ? p.createElement("div", {
    ref: Z
  }) : p.createElement("div", {
    ref: Z
  }, p.createElement(Pb, {
    isSafari: So.value
  }, p.createElement("div", {
    className: "dvn-underlay"
  }, t), p.createElement("div", {
    ref: H,
    style: S.current,
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
  }, x), h !== void 0 && p.createElement(p.Fragment, null, !y && p.createElement("div", {
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
      right: A ? u ?? 0 : void 0,
      pointerEvents: "auto"
    }
  }, h))))));
}, Lb = (e) => {
  const { columns: t, rows: n, rowHeight: r, headerHeight: i, groupHeaderHeight: o, enableGroups: s, freezeColumns: a, experimental: l, nonGrowWidth: c, clientSize: u, className: h, onVisibleRegionChanged: d, scrollRef: g, preventDiagonalScrolling: f, rightElement: v, rightElementProps: x, overscrollX: A, overscrollY: y, initialSize: C, smoothScrollX: P = !1, smoothScrollY: b = !1, isDraggable: M } = e, { paddingRight: O, paddingBottom: E } = l ?? {}, [_, F] = u, R = p.useRef(), w = p.useRef(), k = p.useRef(), T = p.useRef(), S = c + Math.max(0, A ?? 0);
  let z = s ? i + o : i;
  if (typeof r == "number")
    z += n * r;
  else
    for (let Z = 0; Z < n; Z++)
      z += r(Z);
  y !== void 0 && (z += y);
  const H = p.useRef(), B = p.useCallback(() => {
    var Ce, Be;
    if (H.current === void 0)
      return;
    const Z = { ...H.current };
    let I = 0, N = Z.x < 0 ? -Z.x : 0, Y = 0, re = 0;
    Z.x = Z.x < 0 ? 0 : Z.x;
    let $ = 0;
    for (let J = 0; J < a; J++)
      $ += t[J].width;
    for (const J of t) {
      const Ee = I - $;
      if (Z.x >= Ee + J.width)
        I += J.width, re++, Y++;
      else if (Z.x > Ee)
        I += J.width, P ? N += Ee - Z.x : re++, Y++;
      else if (Z.x + Z.width > Ee)
        I += J.width, Y++;
      else
        break;
    }
    let ce = 0, se = 0, oe = 0;
    if (typeof r == "number")
      b ? (se = Math.floor(Z.y / r), ce = se * r - Z.y) : se = Math.ceil(Z.y / r), oe = Math.ceil(Z.height / r) + se, ce < 0 && oe++;
    else {
      let J = 0;
      for (let Ee = 0; Ee < n; Ee++) {
        const Pe = r(Ee), dt = J + (b ? 0 : Pe / 2);
        if (Z.y >= J + Pe)
          J += Pe, se++, oe++;
        else if (Z.y > dt)
          J += Pe, b ? ce += dt - Z.y : se++, oe++;
        else if (Z.y + Z.height > Pe / 2 + J)
          J += Pe, oe++;
        else
          break;
      }
    }
    const pe = {
      x: re,
      y: se,
      width: Y - re,
      height: oe - se
    }, we = R.current;
    (we === void 0 || we.y !== pe.y || we.x !== pe.x || we.height !== pe.height || we.width !== pe.width || w.current !== N || k.current !== ce || Z.width !== ((Ce = T.current) == null ? void 0 : Ce[0]) || Z.height !== ((Be = T.current) == null ? void 0 : Be[1])) && (d == null || d({
      x: re,
      y: se,
      width: Y - re,
      height: oe - se
    }, Z.width, Z.height, Z.paddingRight ?? 0, N, ce), R.current = pe, w.current = N, k.current = ce, T.current = [Z.width, Z.height]);
  }, [t, r, n, d, a, P, b]), ne = p.useCallback((Z) => {
    H.current = Z, B();
  }, [B]);
  return p.useEffect(() => {
    B();
  }, [B]), p.createElement(
    Db,
    { scrollRef: g, className: h, kineticScrollPerfHack: l == null ? void 0 : l.kineticScrollPerfHack, preventDiagonalScrolling: f, draggable: M === !0 || typeof M == "string", scrollWidth: S + (O ?? 0), scrollHeight: z + (E ?? 0), clientHeight: F, rightElement: v, paddingBottom: E, paddingRight: O, rightElementProps: x, update: ne, initialSize: C },
    p.createElement(Eb, { eventTargetRef: g, width: _, height: F, accessibilityHeight: e.accessibilityHeight, canvasRef: e.canvasRef, cellXOffset: e.cellXOffset, cellYOffset: e.cellYOffset, columns: e.columns, disabledRows: e.disabledRows, enableGroups: e.enableGroups, fillHandle: e.fillHandle, firstColAccessible: e.firstColAccessible, fixedShadowX: e.fixedShadowX, fixedShadowY: e.fixedShadowY, freezeColumns: e.freezeColumns, getCellContent: e.getCellContent, getCellRenderer: e.getCellRenderer, getGroupDetails: e.getGroupDetails, getRowThemeOverride: e.getRowThemeOverride, groupHeaderHeight: e.groupHeaderHeight, headerHeight: e.headerHeight, highlightRegions: e.highlightRegions, imageWindowLoader: e.imageWindowLoader, isFilling: e.isFilling, isFocused: e.isFocused, lockColumns: e.lockColumns, maxColumnWidth: e.maxColumnWidth, minColumnWidth: e.minColumnWidth, onHeaderMenuClick: e.onHeaderMenuClick, onMouseMove: e.onMouseMove, prelightCells: e.prelightCells, rowHeight: e.rowHeight, rows: e.rows, selection: e.selection, theme: e.theme, freezeTrailingRows: e.freezeTrailingRows, hasAppendRow: e.hasAppendRow, translateX: e.translateX, translateY: e.translateY, onColumnProposeMove: e.onColumnProposeMove, verticalBorder: e.verticalBorder, drawFocusRing: e.drawFocusRing, drawHeader: e.drawHeader, drawCell: e.drawCell, experimental: e.experimental, gridRef: e.gridRef, headerIcons: e.headerIcons, isDraggable: e.isDraggable, onCanvasBlur: e.onCanvasBlur, onCanvasFocused: e.onCanvasFocused, onCellFocused: e.onCellFocused, onColumnMoved: e.onColumnMoved, onColumnResize: e.onColumnResize, onColumnResizeEnd: e.onColumnResizeEnd, onColumnResizeStart: e.onColumnResizeStart, onContextMenu: e.onContextMenu, onDragEnd: e.onDragEnd, onDragLeave: e.onDragLeave, onDragOverCell: e.onDragOverCell, onDragStart: e.onDragStart, onDrop: e.onDrop, onItemHovered: e.onItemHovered, onKeyDown: e.onKeyDown, onKeyUp: e.onKeyUp, onMouseDown: e.onMouseDown, onMouseUp: e.onMouseUp, onRowMoved: e.onRowMoved, smoothScrollX: e.smoothScrollX, smoothScrollY: e.smoothScrollY })
  );
}, Fb = /* @__PURE__ */ an("div")({
  name: "SearchWrapper",
  class: "gdg-seveqep",
  propsAsIs: !1
}), qb = p.createElement(
  "svg",
  { className: "button-icon", viewBox: "0 0 512 512" },
  p.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "48", d: "M112 244l144-144 144 144M256 120v292" })
), Hb = p.createElement(
  "svg",
  { className: "button-icon", viewBox: "0 0 512 512" },
  p.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "48", d: "M112 268l144 144 144-144M256 392V100" })
), zb = p.createElement(
  "svg",
  { className: "button-icon", viewBox: "0 0 512 512" },
  p.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M368 368L144 144M368 144L144 368" })
), $b = 10, Nb = (e) => {
  const { canvasRef: t, cellYOffset: n, rows: r, columns: i, searchInputRef: o, searchValue: s, searchResults: a, onSearchValueChange: l, getCellsForSelection: c, onSearchResultsChanged: u, showSearch: h = !1, onSearchClose: d } = e, [g] = p.useState(() => "search-box-" + Math.round(Math.random() * 1e3)), [f, v] = p.useState(""), x = s ?? f, A = p.useCallback((I) => {
    v(I), l == null || l(I);
  }, [l]), [y, C] = p.useState(), P = p.useRef(y);
  P.current = y, p.useEffect(() => {
    a !== void 0 && (a.length > 0 ? C((I) => ({
      rowsSearched: r,
      results: a.length,
      selectedIndex: (I == null ? void 0 : I.selectedIndex) ?? -1
    })) : C(void 0));
  }, [r, a]);
  const b = p.useRef();
  b.current === void 0 && (b.current = new AbortController());
  const M = p.useRef(), [O, E] = p.useState([]), _ = a ?? O, F = p.useCallback(() => {
    M.current !== void 0 && (window.cancelAnimationFrame(M.current), M.current = void 0, b.current.abort());
  }, []), R = p.useRef(n);
  R.current = n;
  const w = p.useCallback((I) => {
    const N = new RegExp(I.replace(/([$()*+.?[\\\]^{|}-])/g, "\\$1"), "i");
    let Y = R.current, re = Math.min(10, r), $ = 0;
    C(void 0), E([]);
    const ce = [], se = async () => {
      var Se;
      if (c === void 0)
        return;
      const oe = performance.now(), pe = r - $;
      let we = c({
        x: 0,
        y: Y,
        width: i.length,
        height: Math.min(re, pe, r - Y)
      }, b.current.signal);
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
          Me !== void 0 && N.test(Me) && (ce.push([Le, ve + Y]), Ce = !0);
        }
      const Be = performance.now();
      Ce && E([...ce]), $ += we.length, rn($ <= r);
      const J = ((Se = P.current) == null ? void 0 : Se.selectedIndex) ?? -1;
      C({
        results: ce.length,
        rowsSearched: $,
        selectedIndex: J
      }), u == null || u(ce, J), Y + re >= r ? Y = 0 : Y += re;
      const Ee = Be - oe, Pe = Math.max(Ee, 1), dt = $b / Pe;
      re = Math.ceil(re * dt), $ < r && ce.length < 1e3 && (M.current = window.requestAnimationFrame(se));
    };
    F(), M.current = window.requestAnimationFrame(se);
  }, [F, i.length, c, u, r]), k = p.useCallback(() => {
    var I;
    d == null || d(), C(void 0), E([]), u == null || u([], -1), F(), (I = t == null ? void 0 : t.current) == null || I.focus();
  }, [F, t, d, u]), T = p.useCallback((I) => {
    A(I.target.value), a === void 0 && (I.target.value === "" ? (C(void 0), E([]), F()) : w(I.target.value));
  }, [w, F, A, a]);
  p.useEffect(() => {
    h && o.current !== null && (A(""), o.current.focus({ preventScroll: !0 }));
  }, [h, o, A]);
  const S = p.useCallback((I) => {
    var Y;
    if ((Y = I == null ? void 0 : I.stopPropagation) == null || Y.call(I), y === void 0)
      return;
    const N = (y.selectedIndex + 1) % y.results;
    C({
      ...y,
      selectedIndex: N
    }), u == null || u(_, N);
  }, [y, u, _]), z = p.useCallback((I) => {
    var Y;
    if ((Y = I == null ? void 0 : I.stopPropagation) == null || Y.call(I), y === void 0)
      return;
    let N = (y.selectedIndex - 1) % y.results;
    N < 0 && (N += y.results), C({
      ...y,
      selectedIndex: N
    }), u == null || u(_, N);
  }, [u, _, y]), H = p.useCallback((I) => {
    (I.ctrlKey || I.metaKey) && I.nativeEvent.code === "KeyF" || I.key === "Escape" ? (k(), I.stopPropagation(), I.preventDefault()) : I.key === "Enter" && (I.shiftKey ? z() : S());
  }, [k, S, z]);
  p.useEffect(() => () => {
    F();
  }, [F]);
  const [B, ne] = p.useState(!1);
  p.useEffect(() => {
    if (h)
      ne(!0);
    else {
      const I = setTimeout(() => ne(!1), 150);
      return () => clearTimeout(I);
    }
  }, [h]);
  const Z = p.useMemo(() => {
    if (!h && !B)
      return null;
    let I;
    y !== void 0 && (I = y.results >= 1e3 ? "over 1000" : `${y.results} result${y.results !== 1 ? "s" : ""}`, y.selectedIndex >= 0 && (I = `${y.selectedIndex + 1} of ${I}`));
    const N = ($) => {
      $.stopPropagation();
    }, re = {
      width: `${Math.floor(((y == null ? void 0 : y.rowsSearched) ?? 0) / r * 100)}%`
    };
    return p.createElement(
      Fb,
      { className: h ? "" : "out", onMouseDown: N, onMouseMove: N, onMouseUp: N, onClick: N },
      p.createElement(
        "div",
        { className: "gdg-search-bar-inner" },
        p.createElement("input", { id: g, "aria-hidden": !h, "data-testid": "search-input", ref: o, onChange: T, value: x, tabIndex: h ? void 0 : -1, onKeyDownCapture: H }),
        p.createElement("button", { "aria-label": "Previous Result", "aria-hidden": !h, tabIndex: h ? void 0 : -1, onClick: z, disabled: ((y == null ? void 0 : y.results) ?? 0) === 0 }, qb),
        p.createElement("button", { "aria-label": "Next Result", "aria-hidden": !h, tabIndex: h ? void 0 : -1, onClick: S, disabled: ((y == null ? void 0 : y.results) ?? 0) === 0 }, Hb),
        d !== void 0 && p.createElement("button", { "aria-label": "Close Search", "aria-hidden": !h, "data-testid": "search-close-button", tabIndex: h ? void 0 : -1, onClick: k }, zb)
      ),
      y !== void 0 ? p.createElement(
        p.Fragment,
        null,
        p.createElement(
          "div",
          { className: "gdg-search-status" },
          p.createElement("div", { "data-testid": "search-result-area" }, I)
        ),
        p.createElement("div", { className: "gdg-search-progress", style: re })
      ) : p.createElement(
        "div",
        { className: "gdg-search-status" },
        p.createElement("label", { htmlFor: g }, "Type to search")
      )
    );
  }, [
    h,
    B,
    y,
    r,
    g,
    o,
    T,
    x,
    H,
    z,
    S,
    d,
    k
  ]);
  return p.createElement(
    p.Fragment,
    null,
    p.createElement(Lb, { prelightCells: _, accessibilityHeight: e.accessibilityHeight, canvasRef: e.canvasRef, cellXOffset: e.cellXOffset, cellYOffset: e.cellYOffset, className: e.className, clientSize: e.clientSize, columns: e.columns, disabledRows: e.disabledRows, enableGroups: e.enableGroups, fillHandle: e.fillHandle, firstColAccessible: e.firstColAccessible, nonGrowWidth: e.nonGrowWidth, fixedShadowX: e.fixedShadowX, fixedShadowY: e.fixedShadowY, freezeColumns: e.freezeColumns, getCellContent: e.getCellContent, getCellRenderer: e.getCellRenderer, getGroupDetails: e.getGroupDetails, getRowThemeOverride: e.getRowThemeOverride, groupHeaderHeight: e.groupHeaderHeight, headerHeight: e.headerHeight, highlightRegions: e.highlightRegions, imageWindowLoader: e.imageWindowLoader, initialSize: e.initialSize, isFilling: e.isFilling, isFocused: e.isFocused, lockColumns: e.lockColumns, maxColumnWidth: e.maxColumnWidth, minColumnWidth: e.minColumnWidth, onHeaderMenuClick: e.onHeaderMenuClick, onMouseMove: e.onMouseMove, onVisibleRegionChanged: e.onVisibleRegionChanged, overscrollX: e.overscrollX, overscrollY: e.overscrollY, preventDiagonalScrolling: e.preventDiagonalScrolling, rightElement: e.rightElement, rightElementProps: e.rightElementProps, rowHeight: e.rowHeight, rows: e.rows, scrollRef: e.scrollRef, selection: e.selection, theme: e.theme, freezeTrailingRows: e.freezeTrailingRows, hasAppendRow: e.hasAppendRow, translateX: e.translateX, translateY: e.translateY, verticalBorder: e.verticalBorder, onColumnProposeMove: e.onColumnProposeMove, drawFocusRing: e.drawFocusRing, drawCell: e.drawCell, drawHeader: e.drawHeader, experimental: e.experimental, gridRef: e.gridRef, headerIcons: e.headerIcons, isDraggable: e.isDraggable, onCanvasBlur: e.onCanvasBlur, onCanvasFocused: e.onCanvasFocused, onCellFocused: e.onCellFocused, onColumnMoved: e.onColumnMoved, onColumnResize: e.onColumnResize, onColumnResizeEnd: e.onColumnResizeEnd, onColumnResizeStart: e.onColumnResizeStart, onContextMenu: e.onContextMenu, onDragEnd: e.onDragEnd, onDragLeave: e.onDragLeave, onDragOverCell: e.onDragOverCell, onDragStart: e.onDragStart, onDrop: e.onDrop, onItemHovered: e.onItemHovered, onKeyDown: e.onKeyDown, onKeyUp: e.onKeyUp, onMouseDown: e.onMouseDown, onMouseUp: e.onMouseUp, onRowMoved: e.onRowMoved, smoothScrollX: e.smoothScrollX, smoothScrollY: e.smoothScrollY }),
    Z
  );
};
class Bb extends p.PureComponent {
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
const Wb = () => (e) => Math.max(16, e.targetHeight - 10), jb = /* @__PURE__ */ an("input")({
  name: "RenameInput",
  class: "gdg-r17m35ur",
  propsAsIs: !1,
  vars: {
    "r17m35ur-0": [Wb(), "px"]
  }
}), Ub = (e) => {
  const {
    bounds: t,
    group: n,
    onClose: r,
    canvasBounds: i,
    onFinish: o
  } = e, [s, a] = St.useState(n);
  return St.createElement(Bb, {
    style: {
      position: "absolute",
      left: t.x - i.left + 1,
      top: t.y - i.top,
      width: t.width - 2,
      height: t.height
    },
    className: "gdg-c1tqibwd",
    onClickOutside: r
  }, St.createElement(jb, {
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
function Xb(e, t) {
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
  if (!Xb(a, t))
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
        Co.value ? o = !0 : n = !0;
        break;
    }
  return t.altKey === i && t.ctrlKey === n && t.shiftKey === r && t.metaKey === o;
}
function Gb(e, t, n, r, i, o) {
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
    let x = {
      current: c === void 0 ? void 0 : {
        ...c,
        rangeStack: d === "drag" ? ((y = e.current) == null ? void 0 : y.rangeStack) ?? [] : []
      },
      columns: f ? e.columns : rt.empty(),
      rows: v ? e.rows : rt.empty()
    };
    h && (o === "multi-rect" || o === "multi-cell") && x.current !== void 0 && e.current !== void 0 && (x = {
      ...x,
      current: {
        ...x.current,
        rangeStack: [...e.current.rangeStack, e.current.range]
      }
    }), t(x, u);
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
function Yb(e, t, n, r, i) {
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
function Kb(e) {
  if (e.copyData !== void 0)
    return {
      formatted: e.copyData,
      rawValue: e.copyData,
      format: "string"
    };
  switch (e.kind) {
    case ae.Boolean:
      return {
        formatted: e.data === !0 ? "TRUE" : e.data === !1 ? "FALSE" : e.data === Ac ? "INDETERMINATE" : "",
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
function Vb(e, t) {
  return e.map((r, i) => {
    const o = t[i];
    return r.map((s) => s.span !== void 0 && s.span[0] !== o ? {
      formatted: "",
      rawValue: "",
      format: "string"
    } : Kb(s));
  });
}
function og(e, t) {
  return (t ? /[\t\n",]/ : /[\t\n"]/).test(e) && (e = `"${e.replace(/"/g, '""')}"`), e;
}
function Zb(e) {
  var n;
  const t = [];
  for (const r of e) {
    const i = [];
    for (const o of r)
      o.format === "url" ? i.push(((n = o.rawValue) == null ? void 0 : n.toString()) ?? "") : o.format === "string-array" ? i.push(o.formatted.map((s) => og(s, !0)).join(",")) : i.push(og(o.formatted, !1));
    t.push(i.join("	"));
  }
  return t.join(`
`);
}
function nc(e) {
  return e.replace(/\t/g, "    ").replace(/ {2,}/g, (t) => "<span> </span>".repeat(t.length));
}
function ag(e) {
  return '"' + e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '"';
}
function Jb(e) {
  return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
function Qb(e) {
  var n;
  const t = [];
  t.push('<style type="text/css"><!--br {mso-data-placement:same-cell;}--></style>', "<table><tbody>");
  for (const r of e) {
    t.push("<tr>");
    for (const i of r) {
      const o = `gdg-format="${i.format}"`;
      i.format === "url" ? t.push(`<td ${o}><a href="${i.rawValue}">${nc(i.formatted)}</a></td>`) : i.format === "string-array" ? t.push(`<td ${o}><ol>${i.formatted.map((s, a) => `<li gdg-raw-value=${ag(i.rawValue[a])}>` + nc(s) + "</li>").join("")}</ol></td>`) : t.push(`<td gdg-raw-value=${ag(((n = i.rawValue) == null ? void 0 : n.toString()) ?? "")} ${o}>${nc(i.formatted)}</td>`);
    }
    t.push("</tr>");
  }
  return t.push("</tbody></table>"), t.join("");
}
function ew(e, t) {
  const n = Vb(e, t), r = Zb(n), i = Qb(n);
  return {
    textPlain: r,
    textHtml: i
  };
}
function sg(e) {
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
          rawValue: [...v].map((x) => x.getAttribute("gdg-raw-value") ?? ""),
          formatted: [...v].map((x) => x.textContent ?? ""),
          format: "string-array"
        });
      } else if (g !== null)
        o == null || o.push({
          rawValue: Jb(g),
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
function tw(e, t, n, r, i) {
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
function lg(e) {
  return e.startsWith('"') && e.endsWith('"') && (e = e.slice(1, -1).replace(/""/g, '"')), e;
}
function nw(e) {
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
`) && (r.push(lg(e.slice(i, s))), i = s + 1, a === `
` && (n.push(r), r = [])), o = t.None);
        break;
    }
    s++;
  }
  return i < e.length && r.push(lg(e.slice(i, e.length))), n.push(r), n.map((a) => a.map((l) => ({ rawValue: l, formatted: l, format: "string" })));
}
function cg(e, t, n) {
  var a;
  const r = ew(e, t), i = (l) => {
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
function ug(e) {
  return typeof e == "string" ? e : `${e}px`;
}
const rw = () => (e) => e.innerWidth, iw = () => (e) => e.innerHeight, ow = /* @__PURE__ */ an("div")({
  name: "Wrapper",
  class: "gdg-wmyidgi",
  propsAsIs: !1,
  vars: {
    "wmyidgi-0": [rw()],
    "wmyidgi-1": [iw()]
  }
}), aw = (e) => {
  const {
    inWidth: t,
    inHeight: n,
    children: r,
    ...i
  } = e;
  return p.createElement(ow, {
    innerHeight: ug(n),
    innerWidth: ug(t),
    ...i
  }, r);
}, sw = 2, lw = 1300;
function cw(e, t, n) {
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
          r.current = Math.min(1, r.current + h / lw);
          const d = r.current ** 1.618 * h * sw;
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
function uw({ rowHeight: e, headerHeight: t, groupHeaderHeight: n, theme: r, overscrollX: i, overscrollY: o, scaleToRem: s, remSize: a }) {
  const [l, c, u, h, d, g] = St.useMemo(() => {
    if (!s || a === 16)
      return [e, t, n, r, i, o];
    const f = a / 16, v = e, x = ap();
    return [
      typeof v == "number" ? v * f : (A) => Math.ceil(v(A) * f),
      Math.ceil(t * f),
      Math.ceil(n * f),
      {
        ...r,
        headerIconSize: ((r == null ? void 0 : r.headerIconSize) ?? x.headerIconSize) * f,
        cellHorizontalPadding: ((r == null ? void 0 : r.cellHorizontalPadding) ?? x.cellHorizontalPadding) * f,
        cellVerticalPadding: ((r == null ? void 0 : r.cellVerticalPadding) ?? x.cellVerticalPadding) * f
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
function dg(e) {
  const t = Co.value;
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
function dw(e) {
  const t = Fm(e);
  return St.useMemo(() => {
    if (t === void 0)
      return dg(Zn);
    const n = {
      ...t,
      goToNextPage: (t == null ? void 0 : t.goToNextPage) ?? (t == null ? void 0 : t.pageDown) ?? Zn.goToNextPage,
      goToPreviousPage: (t == null ? void 0 : t.goToPreviousPage) ?? (t == null ? void 0 : t.pageUp) ?? Zn.goToPreviousPage,
      goToFirstCell: (t == null ? void 0 : t.goToFirstCell) ?? (t == null ? void 0 : t.first) ?? Zn.goToFirstCell,
      goToLastCell: (t == null ? void 0 : t.goToLastCell) ?? (t == null ? void 0 : t.last) ?? Zn.goToLastCell,
      selectToFirstCell: (t == null ? void 0 : t.selectToFirstCell) ?? (t == null ? void 0 : t.first) ?? Zn.selectToFirstCell,
      selectToLastCell: (t == null ? void 0 : t.selectToLastCell) ?? (t == null ? void 0 : t.last) ?? Zn.selectToLastCell
    };
    return dg({
      ...Zn,
      ...n
    });
  }, [t]);
}
var fw = {};
const hw = p.lazy(async () => await import("/routelit/routelit_glide_data_grid/data-grid-overlay-editor-DNTNgzJC.js"));
let gw = 0;
function pw(e) {
  return gv(qf(qf(e).filter((t) => t.span !== void 0).map((t) => {
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
const rc = {
  kind: ae.Loading,
  allowOverlay: !1
}, uo = {
  columns: rt.empty(),
  rows: rt.empty(),
  current: void 0
}, mw = (e, t) => {
  var gu, pu, mu;
  const [n, r] = p.useState(uo), [i, o] = p.useState(), s = p.useRef(null), a = p.useRef(null), [l, c] = p.useState(), u = p.useRef(null), h = p.useRef(), d = typeof window > "u" ? null : window, { imageEditorOverride: g, getRowThemeOverride: f, markdownDivCreateNode: v, width: x, height: A, columns: y, rows: C, getCellContent: P, onCellClicked: b, onCellActivated: M, onFillPattern: O, onFinishedEditing: E, coercePasteValue: _, drawHeader: F, drawCell: R, editorBloom: w, onHeaderClicked: k, onColumnProposeMove: T, spanRangeBehavior: S = "default", onGroupHeaderClicked: z, onCellContextMenu: H, className: B, onHeaderContextMenu: ne, getCellsForSelection: Z, onGroupHeaderContextMenu: I, onGroupHeaderRenamed: N, onCellEdited: Y, onCellsEdited: re, onSearchResultsChanged: $, searchResults: ce, onSearchValueChange: se, searchValue: oe, onKeyDown: pe, onKeyUp: we, keybindings: Ce, editOnType: Be = !0, onRowAppended: J, onColumnMoved: Ee, validateCell: Pe, highlightRegions: dt, rangeSelect: Se = "rect", columnSelect: ve = "multi", rowSelect: Oe = "multi", rangeSelectionBlending: Le = "exclusive", columnSelectionBlending: qe = "exclusive", rowSelectionBlending: Me = "exclusive", onDelete: nt, onDragStart: Ye, onMouseMove: Ke, onPaste: ue, copyHeaders: He = !1, freezeColumns: We = 0, cellActivationBehavior: De = "second-click", rowSelectionMode: Mt = "auto", onHeaderMenuClick: Ve, getGroupDetails: je, onSearchClose: Ze, onItemHovered: Ct, onSelectionCleared: It, showSearch: sn, onVisibleRegionChanged: Kt, gridSelection: mt, onGridSelectionChange: Bt, minColumnWidth: Wt = 50, maxColumnWidth: On = 500, maxColumnAutoWidth: Dn, provideEditor: gt, trailingRowOptions: Ue, freezeTrailingRows: Je = 0, allowedFillDirections: Lt = "orthogonal", scrollOffsetX: Ft, scrollOffsetY: kt, verticalBorder: Dt, onDragOverCell: hn, onDrop: Ge, onColumnResize: vt, onColumnResizeEnd: ct, onColumnResizeStart: ut, customRenderers: qt, fillHandle: pt, drawFocusRing: Ot = !0, experimental: yt, fixedShadowX: Oi, fixedShadowY: Wn, headerIcons: Ln, imageWindowLoader: Fn, initialSize: yr, isDraggable: Di, onDragLeave: Li, onRowMoved: xn, overscrollX: br, overscrollY: wr, preventDiagonalScrolling: Sr, rightElement: rr, rightElementProps: jn, trapFocus: Fi = !1, smoothScrollX: qi, smoothScrollY: Lo, scaleToRem: Fo = !1, rowHeight: Cr = 34, headerHeight: qn = 36, groupHeaderHeight: qo = qn, theme: Ho, isOutsideClick: Hi, renderers: kr } = e, At = typeof e.rowMarkers == "string" ? void 0 : e.rowMarkers, ln = (At == null ? void 0 : At.kind) ?? e.rowMarkers ?? "none", zi = (At == null ? void 0 : At.width) ?? e.rowMarkerWidth, xr = (At == null ? void 0 : At.startIndex) ?? e.rowMarkerStartIndex ?? 1, Ur = (At == null ? void 0 : At.theme) ?? e.rowMarkerTheme, Un = (At == null ? void 0 : At.checkboxStyle) ?? "square", Vt = Math.max(Wt, 20), gn = Math.max(On, Vt), Xr = Math.max(Dn ?? gn, Vt), Xn = p.useMemo(() => typeof window > "u" ? { fontSize: "16px" } : window.getComputedStyle(document.documentElement), []), Gr = p.useMemo(() => Number.parseFloat(Xn.fontSize), [Xn]), { rowHeight: jt, headerHeight: Rr, groupHeaderHeight: Yr, theme: $i, overscrollX: zo, overscrollY: Ni } = uw({
    groupHeaderHeight: qo,
    headerHeight: qn,
    overscrollX: br,
    overscrollY: wr,
    remSize: Gr,
    rowHeight: Cr,
    scaleToRem: Fo,
    theme: Ho
  }), pn = dw(Ce), Hn = zi ?? (C > 1e4 ? 48 : C > 1e3 ? 44 : C > 100 ? 36 : 32), Zt = ln !== "none", U = Zt ? 1 : 0, bt = J !== void 0, ir = (Ue == null ? void 0 : Ue.sticky) === !0, [$o, Bi] = p.useState(!1), Kr = sn ?? $o, No = p.useCallback(() => {
    Ze !== void 0 ? Ze() : Bi(!1);
  }, [Ze]), G = p.useMemo(() => mt === void 0 ? void 0 : co(mt, U), [mt, U]) ?? n, zt = p.useRef();
  zt.current === void 0 && (zt.current = new AbortController()), p.useEffect(() => () => zt == null ? void 0 : zt.current.abort(), []);
  const [Pt, _r] = Yb(Z, P, U, zt.current, C), Vr = p.useCallback((m, L, D) => {
    if (Pe === void 0)
      return !0;
    const W = [m[0] - U, m[1]];
    return Pe == null ? void 0 : Pe(W, L, D);
  }, [U, Pe]), Gn = p.useRef(mt), Gt = p.useCallback((m, L) => {
    L && (m = tw(m, Pt, U, S, zt.current)), Bt !== void 0 ? (Gn.current = co(m, -U), Bt(Gn.current)) : r(m);
  }, [Bt, Pt, U, S]), mn = Lr(vt, p.useCallback((m, L, D, W) => {
    vt == null || vt(y[D - U], L, D - U, W);
  }, [vt, U, y])), Bo = Lr(ct, p.useCallback((m, L, D, W) => {
    ct == null || ct(y[D - U], L, D - U, W);
  }, [ct, U, y])), Tr = Lr(ut, p.useCallback((m, L, D, W) => {
    ut == null || ut(y[D - U], L, D - U, W);
  }, [ut, U, y])), Wo = Lr(F, p.useCallback((m, L) => (F == null ? void 0 : F({ ...m, columnIndex: m.columnIndex - U }, L)) ?? !1, [F, U])), jo = Lr(R, p.useCallback((m, L) => (R == null ? void 0 : R({ ...m, col: m.col - U }, L)) ?? !1, [R, U])), q = p.useCallback((m) => {
    if (nt !== void 0) {
      const L = nt(co(m, -U));
      return typeof L == "boolean" ? L : co(L, U);
    }
    return !0;
  }, [nt, U]), [ee, de, le] = Gb(G, Gt, Le, qe, Me, Se), ie = p.useMemo(() => Qn(ap(), $i), [$i]), [me, Ie] = p.useState([0, 0, 0]), Ae = p.useMemo(() => {
    if (kr === void 0)
      return {};
    const m = {};
    for (const L of kr)
      m[L.kind] = L;
    return m;
  }, [kr]), ge = p.useCallback((m) => m.kind !== ae.Custom ? Ae[m.kind] : qt == null ? void 0 : qt.find((L) => L.isMatch(m)), [qt, Ae]);
  let { sizedColumns: tt, nonGrowWidth: ke } = Z1(y, C, _r, me[0] - (U === 0 ? 0 : Hn) - me[2], Vt, Xr, ie, ge, zt.current);
  ln !== "none" && (ke += Hn);
  const it = p.useMemo(() => tt.some((m) => m.group !== void 0), [tt]), Fe = it ? Rr + Yr : Rr, Xe = G.rows.length, Rt = ln === "none" ? void 0 : Xe === 0 ? !1 : Xe === C ? !0 : void 0, ze = p.useMemo(() => ln === "none" ? tt : [
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
  }), [cn, xt]), et = p.useRef(!1), [_t, Qt, Rn] = Lm(Jt);
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
  const or = _t.x + U, Wi = _t.y, Yt = p.useRef(null), Ut = p.useCallback((m) => {
    var L;
    m === !0 ? (L = Yt.current) == null || L.focus() : window.requestAnimationFrame(() => {
      var D;
      (D = Yt.current) == null || D.focus();
    });
  }, []), $t = bt ? C + 1 : C, un = p.useCallback((m) => {
    const L = U === 0 ? m : m.map((W) => ({
      ...W,
      location: [W.location[0] - U, W.location[1]]
    })), D = re == null ? void 0 : re(L);
    if (D !== !0)
      for (const W of L)
        Y == null || Y(W.location, W.value);
    return D;
  }, [Y, re, U]), [ar, Uo] = p.useState(), ji = G.current !== void 0 && G.current.range.width * G.current.range.height > 1 ? G.current.range : void 0, Mr = Ot ? (gu = G.current) == null ? void 0 : gu.cell : void 0, Ui = Mr == null ? void 0 : Mr[0], Xi = Mr == null ? void 0 : Mr[1], zp = p.useMemo(() => {
    if ((dt === void 0 || dt.length === 0) && (ji ?? Ui ?? Xi ?? ar) === void 0)
      return;
    const m = [];
    if (dt !== void 0)
      for (const L of dt) {
        const D = ze.length - L.range.x - U;
        D > 0 && m.push({
          color: L.color,
          range: {
            ...L.range,
            x: L.range.x + U,
            width: Math.min(D, L.range.width)
          },
          style: L.style
        });
      }
    return ar !== void 0 && m.push({
      color: hr(ie.accentColor, 0),
      range: ar,
      style: "dashed"
    }), ji !== void 0 && m.push({
      color: hr(ie.accentColor, 0.5),
      range: ji,
      style: "solid-outline"
    }), Ui !== void 0 && Xi !== void 0 && m.push({
      color: ie.accentColor,
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
    ie.accentColor,
    U
  ]), tu = p.useRef(ze);
  tu.current = ze;
  const en = p.useCallback(([m, L], D = !1) => {
    var V, X, K, te, Q, he, ye;
    const W = bt && L === $t - 1;
    if (m === 0 && Zt)
      return W ? rc : {
        kind: fn.Marker,
        allowOverlay: !1,
        checkboxStyle: Un,
        checked: (G == null ? void 0 : G.rows.hasIndex(L)) === !0,
        markerKind: ln === "clickable-number" ? "number" : ln,
        row: xr + L,
        drawHandle: xn !== void 0,
        cursor: ln === "clickable-number" ? "pointer" : void 0
      };
    if (W) {
      const Re = m === U ? (Ue == null ? void 0 : Ue.hint) ?? "" : "", _e = tu.current[m];
      if (((V = _e == null ? void 0 : _e.trailingRowOptions) == null ? void 0 : V.disabled) === !0)
        return rc;
      {
        const Qe = ((X = _e == null ? void 0 : _e.trailingRowOptions) == null ? void 0 : X.hint) ?? Re, Te = ((K = _e == null ? void 0 : _e.trailingRowOptions) == null ? void 0 : K.addIcon) ?? (Ue == null ? void 0 : Ue.addIcon);
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
        const _e = wt.current, Qe = _e.x > fe || fe > _e.x + _e.width || _e.y > L || L > _e.y + _e.height || L >= Go.current, Te = fe === ((Q = (te = _e.extras) == null ? void 0 : te.selected) == null ? void 0 : Q[0]) && L === ((he = _e.extras) == null ? void 0 : he.selected[1]);
        let xe = !1;
        if (((ye = _e.extras) == null ? void 0 : ye.freezeRegions) !== void 0) {
          for (const ft of _e.extras.freezeRegions)
            if (Do(ft, fe, L)) {
              xe = !0;
              break;
            }
        }
        if (Qe && !Te && !xe)
          return rc;
      }
      let Re = P([fe, L]);
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
    G == null ? void 0 : G.rows,
    ln,
    xr,
    xn,
    U,
    Ue == null ? void 0 : Ue.hint,
    Ue == null ? void 0 : Ue.addIcon,
    yt == null ? void 0 : yt.strict,
    P
  ]), Xo = p.useCallback((m) => {
    let L = (je == null ? void 0 : je(m)) ?? { name: m };
    return N !== void 0 && m !== "" && (L = {
      // FIXME: Mutate
      icon: L.icon,
      name: L.name,
      overrideTheme: L.overrideTheme,
      actions: [
        ...L.actions ?? [],
        {
          title: "Rename",
          icon: "renameIcon",
          onClick: (D) => Ko({
            group: L.name,
            bounds: D.bounds
          })
        }
      ]
    }), L;
  }, [je, N]), Gi = p.useCallback((m) => {
    var K;
    const [L, D] = m.cell, W = ze[L], j = (W == null ? void 0 : W.group) !== void 0 ? (K = Xo(W.group)) == null ? void 0 : K.overrideTheme : void 0, V = W == null ? void 0 : W.themeOverride, X = f == null ? void 0 : f(D);
    o({
      ...m,
      theme: Qn(ie, j, V, X, m.content.themeOverride)
    });
  }, [f, ze, Xo, ie]), Ir = p.useCallback((m, L, D) => {
    var X;
    if (G.current === void 0)
      return;
    const [W, j] = G.current.cell, V = en([W, j]);
    if (V.kind !== ae.Boolean && V.allowOverlay) {
      let K = V;
      if (D !== void 0)
        switch (K.kind) {
          case ae.Number: {
            const te = v0(() => D === "-" ? -0 : Number.parseFloat(D), 0);
            K = {
              ...K,
              data: Number.isNaN(te) ? 0 : te
            };
            break;
          }
          case ae.Text:
          case ae.Markdown:
          case ae.Uri:
            K = {
              ...K,
              data: D
            };
            break;
        }
      Gi({
        target: m,
        content: K,
        initialValue: D,
        cell: [W, j],
        highlight: D === void 0,
        forceEditMode: D !== void 0
      });
    } else V.kind === ae.Boolean && L && V.readonly !== !0 && (un([
      {
        location: G.current.cell,
        value: {
          ...V,
          data: Pp(V.data)
        }
      }
    ]), (X = Yt.current) == null || X.damage([{ cell: G.current.cell }]));
  }, [en, G, un, Gi]), nu = p.useCallback((m, L) => {
    var j;
    const D = (j = Yt.current) == null ? void 0 : j.getBounds(m, L);
    if (D === void 0 || u.current === null)
      return;
    const W = en([m, L]);
    W.allowOverlay && Gi({
      target: D,
      content: W,
      initialValue: void 0,
      highlight: !0,
      cell: [m, L],
      forceEditMode: !0
    });
  }, [en, Gi]), Tt = p.useCallback((m, L, D = "both", W = 0, j = 0, V = void 0) => {
    if (u.current !== null) {
      const X = Yt.current, K = a.current, te = typeof m != "number" ? m.unit === "cell" ? m.amount : void 0 : m, Q = typeof L != "number" ? L.unit === "cell" ? L.amount : void 0 : L, he = typeof m != "number" && m.unit === "px" ? m.amount : void 0, ye = typeof L != "number" && L.unit === "px" ? L.amount : void 0;
      if (X !== null && K !== null) {
        let fe = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }, Re = 0, _e = 0;
        if ((te !== void 0 || Q !== void 0) && (fe = X.getBounds((te ?? 0) + U, Q ?? 0) ?? fe, fe.width === 0 || fe.height === 0))
          return;
        const Qe = K.getBoundingClientRect(), Te = Qe.width / K.offsetWidth;
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
            x: fe.x - W,
            y: fe.y - j,
            width: fe.width + 2 * W,
            height: fe.height + 2 * j
          };
          let ft = 0;
          for (let ta = 0; ta < We; ta++)
            ft += tt[ta].width;
          let Nt = 0;
          const Et = Je + (ir ? 1 : 0);
          Et > 0 && (Nt = vr($t, Et, jt));
          let bn = ft * Te + Qe.left + U * Hn * Te, Tn = Qe.right, wn = Qe.top + Fe * Te, En = Qe.bottom - Nt * Te;
          const Qi = fe.width + W * 2;
          switch (V == null ? void 0 : V.hAlign) {
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
          const eo = fe.height + j * 2;
          switch (V == null ? void 0 : V.vAlign) {
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
          bn > xe.x ? Re = xe.x - bn : Tn < xe.x + xe.width && (Re = xe.x + xe.width - Tn), wn > xe.y ? _e = xe.y - wn : En < xe.y + xe.height && (_e = xe.y + xe.height - En), D === "vertical" || typeof m == "number" && m < We ? Re = 0 : (D === "horizontal" || typeof L == "number" && L >= $t - Et) && (_e = 0), (Re !== 0 || _e !== 0) && (Te !== 1 && (Re /= Te, _e /= Te), u.current.scrollTo(Re + u.current.scrollLeft, _e + u.current.scrollTop));
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
  ]), ru = p.useRef(nu), iu = p.useRef(P), Go = p.useRef(C);
  ru.current = nu, iu.current = P, Go.current = C;
  const Ar = p.useCallback(async (m, L = !0) => {
    var te;
    const D = ze[m];
    if (((te = D == null ? void 0 : D.trailingRowOptions) == null ? void 0 : te.disabled) === !0)
      return;
    const W = J == null ? void 0 : J();
    let j, V = !0;
    W !== void 0 && (j = await W, j === "top" && (V = !1), typeof j == "number" && (V = !1));
    let X = 0;
    const K = () => {
      if (Go.current <= C) {
        X < 500 && window.setTimeout(K, X), X = 50 + X * 2;
        return;
      }
      const Q = typeof j == "number" ? j : V ? C : 0;
      Ji.current(m - U, Q), ee({
        cell: [m, Q],
        range: {
          x: m,
          y: Q,
          width: 1,
          height: 1
        }
      }, !1, !1, "edit");
      const he = iu.current([m - U, Q]);
      he.allowOverlay && pi(he) && he.readonly !== !0 && L && window.setTimeout(() => {
        ru.current(m, Q);
      }, 0);
    };
    K();
  }, [ze, J, U, C, ee]), Yi = p.useCallback((m) => {
    var D, W;
    const L = ((W = (D = tt[m]) == null ? void 0 : D.trailingRowOptions) == null ? void 0 : W.targetColumn) ?? (Ue == null ? void 0 : Ue.targetColumn);
    if (typeof L == "number")
      return L + (Zt ? 1 : 0);
    if (typeof L == "object") {
      const j = y.indexOf(L);
      if (j >= 0)
        return j + (Zt ? 1 : 0);
    }
  }, [tt, y, Zt, Ue == null ? void 0 : Ue.targetColumn]), Yn = p.useRef(), Pr = p.useRef(), Zr = p.useCallback((m, L) => {
    var j;
    const [D, W] = L;
    return Qn(ie, (j = ze[D]) == null ? void 0 : j.themeOverride, f == null ? void 0 : f(W), m.themeOverride);
  }, [f, ze, ie]), Jr = p.useCallback((m) => {
    var he, ye, fe;
    const L = Co.value ? m.metaKey : m.ctrlKey, D = L && Oe === "multi", W = L && ve === "multi", [j, V] = m.location, X = G.columns, K = G.rows, [te, Q] = ((he = G.current) == null ? void 0 : he.cell) ?? [];
    if (m.kind === "cell") {
      if (Pr.current = void 0, sr.current = [j, V], j === 0 && Zt) {
        if (bt === !0 && V === C || ln === "number" || Oe === "none")
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
        const _e = K.hasIndex(V), Qe = Yn.current;
        if (Oe === "multi" && (m.shiftKey || m.isLongTouch === !0) && Qe !== void 0 && K.hasIndex(Qe)) {
          const Te = [Math.min(Qe, V), Math.max(Qe, V) + 1];
          D || Mt === "multi" ? de(void 0, Te, !0) : de(rt.fromSingleSelection(Te), void 0, D);
        } else D || m.isTouch || Mt === "multi" ? _e ? de(K.remove(V), void 0, !0) : (de(void 0, V, !0), Yn.current = V) : _e && K.length === 1 ? de(rt.empty(), void 0, L) : (de(rt.fromSingleSelection(V), void 0, L), Yn.current = V);
      } else if (j >= U && bt && V === C) {
        const Re = Yi(j);
        Ar(Re ?? j);
      } else if (te !== j || Q !== V) {
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
        const Qe = ir && V === C, Te = ir && G !== void 0 && ((fe = G.current) == null ? void 0 : fe.cell[1]) === C;
        if ((m.shiftKey || m.isLongTouch === !0) && te !== void 0 && Q !== void 0 && G.current !== void 0 && !Te) {
          if (Qe)
            return;
          const xe = Math.min(j, te), ft = Math.max(j, te), Nt = Math.min(V, Q), Et = Math.max(V, Q);
          ee({
            ...G.current,
            range: {
              x: xe,
              y: Nt,
              width: ft - xe + 1,
              height: Et - Nt + 1
            }
          }, !0, L, "click"), Yn.current = void 0, Ut();
        } else
          ee({
            cell: [j, V],
            range: { x: j, y: V, width: 1, height: 1 }
          }, !0, L, "click"), Yn.current = void 0, o(void 0), Ut();
      }
    } else if (m.kind === "header")
      if (sr.current = [j, V], o(void 0), Zt && j === 0)
        Yn.current = void 0, Pr.current = void 0, Oe === "multi" && (K.length !== C ? de(rt.fromSingleSelection([0, C]), void 0, L) : de(rt.empty(), void 0, L), Ut());
      else {
        const Re = Pr.current;
        if (ve === "multi" && (m.shiftKey || m.isLongTouch === !0) && Re !== void 0 && X.hasIndex(Re)) {
          const _e = [Math.min(Re, j), Math.max(Re, j) + 1];
          W ? le(void 0, _e, L) : le(rt.fromSingleSelection(_e), void 0, L);
        } else W ? (X.hasIndex(j) ? le(X.remove(j), void 0, L) : le(void 0, j, L), Pr.current = j) : ve !== "none" && (le(rt.fromSingleSelection(j), void 0, L), Pr.current = j);
        Yn.current = void 0, Ut();
      }
    else m.kind === nn ? sr.current = [j, V] : m.kind === ko && !m.isMaybeScrollbar && (Gt(uo, !1), o(void 0), Ut(), It == null || It(), Yn.current = void 0, Pr.current = void 0);
  }, [
    Ar,
    ve,
    Ut,
    ge,
    Yi,
    en,
    G,
    Zt,
    ir,
    It,
    xn,
    U,
    ln,
    Oe,
    Mt,
    C,
    ee,
    Gt,
    le,
    de,
    bt,
    Zr
  ]), Qr = p.useRef(!1), sr = p.useRef(), ou = p.useRef(_t), dn = p.useRef(), $p = p.useCallback((m) => {
    if (Or.current = !1, ou.current = wt.current, m.button !== 0 && m.button !== 1) {
      dn.current = void 0;
      return;
    }
    const L = performance.now();
    dn.current = {
      button: m.button,
      time: L,
      location: m.location
    }, (m == null ? void 0 : m.kind) === "header" && (Qr.current = !0);
    const D = m.kind === "cell" && m.isFillHandle;
    !D && m.kind !== "cell" && m.isEdge || (c({
      previousSelection: G,
      fillHandle: D
    }), sr.current = void 0, !m.isTouch && m.button === 0 && !D ? Jr(m) : !m.isTouch && m.button === 1 && (sr.current = m.location));
  }, [G, Jr]), [Yo, Ko] = p.useState(), au = p.useCallback((m) => {
    if (m.kind !== nn || ve !== "multi")
      return;
    const L = Co.value ? m.metaKey : m.ctrlKey, [D] = m.location, W = G.columns;
    if (D < U)
      return;
    const j = ze[D];
    let V = D, X = D;
    for (let K = D - 1; K >= U && _i(j.group, ze[K].group); K--)
      V--;
    for (let K = D + 1; K < ze.length && _i(j.group, ze[K].group); K++)
      X++;
    if (Ut(), L)
      if (W.hasAll([V, X + 1])) {
        let K = W;
        for (let te = V; te <= X; te++)
          K = K.remove(te);
        le(K, void 0, L);
      } else
        le(void 0, [V, X + 1], L);
    else
      le(rt.fromSingleSelection([V, X + 1]), void 0, L);
  }, [ve, Ut, G.columns, ze, U, le]), Or = p.useRef(!1), Ki = p.useCallback(async (m) => {
    if (Pt !== void 0 && mn !== void 0) {
      const L = wt.current.y, D = wt.current.height;
      let W = Pt({
        x: m,
        y: L,
        width: 1,
        height: Math.min(D, C - L)
      }, zt.current.signal);
      typeof W != "object" && (W = await W());
      const j = tt[m - U], X = document.createElement("canvas").getContext("2d", { alpha: !1 });
      if (X !== null) {
        X.font = ie.baseFontFull;
        const K = sp(X, ie, j, 0, W, Vt, gn, !1, ge);
        mn == null || mn(j, K.width, m, K.width);
      }
    }
  }, [
    tt,
    Pt,
    gn,
    ie,
    Vt,
    mn,
    U,
    C,
    ge
  ]), [Np, Vo] = p.useState(), Dr = p.useCallback(async (m, L) => {
    var K, te;
    const D = (K = m.current) == null ? void 0 : K.range;
    if (D === void 0 || Pt === void 0 || L.current === void 0)
      return;
    const W = L.current.range;
    if (O !== void 0) {
      let Q = !1;
      if (O({
        fillDestination: { ...W, x: W.x - U },
        patternSource: { ...D, x: D.x - U },
        preventDefault: () => Q = !0
      }), Q)
        return;
    }
    let j = Pt(D, zt.current.signal);
    typeof j != "object" && (j = await j());
    const V = j, X = [];
    for (let Q = 0; Q < W.width; Q++)
      for (let he = 0; he < W.height; he++) {
        const ye = [W.x + Q, W.y + he];
        if (Zg(ye, D))
          continue;
        const fe = V[he % D.height][Q % D.width];
        $r(fe) || !pi(fe) || X.push({
          location: ye,
          value: { ...fe }
        });
      }
    un(X), (te = Yt.current) == null || te.damage(X.map((Q) => ({
      cell: Q.location
    })));
  }, [Pt, un, O, U]), su = p.useCallback(() => {
    if (G.current === void 0 || G.current.range.width <= 1)
      return;
    const m = {
      ...G,
      current: {
        ...G.current,
        range: {
          ...G.current.range,
          width: 1
        }
      }
    };
    Dr(m, G);
  }, [Dr, G]), lu = p.useCallback(() => {
    if (G.current === void 0 || G.current.range.height <= 1)
      return;
    const m = {
      ...G,
      current: {
        ...G.current,
        range: {
          ...G.current.range,
          height: 1
        }
      }
    };
    Dr(m, G);
  }, [Dr, G]), Bp = p.useCallback((m, L) => {
    var he, ye;
    const D = l;
    if (c(void 0), Uo(void 0), Vo(void 0), Qr.current = !1, L)
      return;
    if ((D == null ? void 0 : D.fillHandle) === !0 && G.current !== void 0 && ((he = D.previousSelection) == null ? void 0 : he.current) !== void 0) {
      if (ar === void 0)
        return;
      const fe = {
        ...G,
        current: {
          ...G.current,
          range: mp(D.previousSelection.current.range, ar)
        }
      };
      Dr(D.previousSelection, fe), Gt(fe, !0);
      return;
    }
    const [W, j] = m.location, [V, X] = sr.current ?? [], K = () => {
      Or.current = !0;
    }, te = (fe) => {
      var _e, Qe, Te;
      const Re = fe.isTouch || V === W && X === j;
      if (Re && (b == null || b([W - U, j], {
        ...fe,
        preventDefault: K
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
            preventDefault: K
          });
          Et !== void 0 && !$r(Et) && Hr(Et) && (un([{ location: fe.location, value: Et }]), (_e = Yt.current) == null || _e.damage([
            {
              cell: fe.location
            }
          ]));
        }
        if (Or.current || G.current === void 0)
          return !1;
        let Nt = !1;
        switch (xe.activationBehaviorOverride ?? De) {
          case "double-click":
          case "second-click": {
            if (((Te = (Qe = D == null ? void 0 : D.previousSelection) == null ? void 0 : Qe.current) == null ? void 0 : Te.cell) === void 0)
              break;
            const [Et, bn] = G.current.cell, [Tn, wn] = D.previousSelection.current.cell;
            Nt = W === Et && W === Tn && j === bn && j === wn && (fe.isDoubleClick === !0 || De === "second-click");
            break;
          }
          case "single-click": {
            Nt = !0;
            break;
          }
        }
        if (Nt)
          return M == null || M([W - U, j]), Ir(fe.bounds, !1), !0;
      }
      return !1;
    }, Q = m.location[0] - U;
    if (m.isTouch) {
      const fe = wt.current, Re = ou.current;
      if (fe.x !== Re.x || fe.y !== Re.y)
        return;
      if (m.isLongTouch === !0) {
        if (m.kind === "cell" && Ci((ye = G.current) == null ? void 0 : ye.cell, m.location)) {
          H == null || H([Q, m.location[1]], {
            ...m,
            preventDefault: K
          });
          return;
        } else if (m.kind === "header" && G.columns.hasIndex(W)) {
          ne == null || ne(Q, { ...m, preventDefault: K });
          return;
        } else if (m.kind === nn) {
          if (Q < 0)
            return;
          I == null || I(Q, { ...m, preventDefault: K });
          return;
        }
      }
      m.kind === "cell" ? te(m) || Jr(m) : m.kind === nn ? z == null || z(Q, { ...m, preventDefault: K }) : (m.kind === Jn && (k == null || k(Q, {
        ...m,
        preventDefault: K
      })), Jr(m));
      return;
    }
    if (m.kind === "header") {
      if (Q < 0)
        return;
      m.isEdge ? m.isDoubleClick === !0 && Ki(W) : m.button === 0 && W === V && j === X && (k == null || k(Q, { ...m, preventDefault: K }));
    }
    if (m.kind === nn) {
      if (Q < 0)
        return;
      m.button === 0 && W === V && j === X && (z == null || z(Q, { ...m, preventDefault: K }), Or.current || au(m));
    }
    m.kind === "cell" && (m.button === 0 || m.button === 1) && te(m), sr.current = void 0;
  }, [
    l,
    G,
    U,
    ar,
    Dr,
    Gt,
    b,
    en,
    ge,
    De,
    Zr,
    un,
    M,
    Ir,
    H,
    ne,
    I,
    Jr,
    z,
    k,
    Ki,
    au
  ]), Wp = p.useCallback((m) => {
    const L = {
      ...m,
      location: [m.location[0] - U, m.location[1]]
    };
    Ke == null || Ke(L), l !== void 0 && m.buttons === 0 && (c(void 0), Uo(void 0), Vo(void 0), Qr.current = !1), Vo((D) => {
      var W;
      return Qr.current ? [m.scrollEdge[0], 0] : m.scrollEdge[0] === (D == null ? void 0 : D[0]) && m.scrollEdge[1] === D[1] ? D : l === void 0 || (((W = dn.current) == null ? void 0 : W.location[0]) ?? 0) < U ? void 0 : m.scrollEdge;
    });
  }, [l, Ke, U]), jp = p.useCallback((m, L) => {
    Ve == null || Ve(m - U, L);
  }, [Ve, U]), _n = (pu = G == null ? void 0 : G.current) == null ? void 0 : pu.cell, Up = p.useCallback((m, L, D, W, j, V) => {
    et.current = !1;
    let X = _n;
    X !== void 0 && (X = [X[0] - U, X[1]]);
    const K = We === 0 ? void 0 : {
      x: 0,
      y: m.y,
      width: We,
      height: m.height
    }, te = [];
    K !== void 0 && te.push(K), Je > 0 && (te.push({
      x: m.x - U,
      y: C - Je,
      width: m.width,
      height: Je
    }), We > 0 && te.push({
      x: 0,
      y: C - Je,
      width: We,
      height: Je
    }));
    const Q = {
      x: m.x - U,
      y: m.y,
      width: m.width,
      height: bt && m.y + m.height >= C ? m.height - 1 : m.height,
      tx: j,
      ty: V,
      extras: {
        selected: X,
        freezeRegion: K,
        freezeRegions: te
      }
    };
    wt.current = Q, Qt(Q), Ie([L, D, W]), Kt == null || Kt(Q, Q.tx, Q.ty, Q.extras);
  }, [
    _n,
    U,
    bt,
    C,
    We,
    Je,
    Qt,
    Kt
  ]), Xp = Lr(Ee, p.useCallback((m, L) => {
    Ee == null || Ee(m - U, L - U), ve !== "none" && le(rt.fromSingleSelection(L), void 0, !0);
  }, [ve, Ee, U, le])), Zo = p.useRef(!1), Gp = p.useCallback((m) => {
    if (m.location[0] === 0 && U > 0) {
      m.preventDefault();
      return;
    }
    Ye == null || Ye({
      ...m,
      location: [m.location[0] - U, m.location[1]]
    }), m.defaultPrevented() || (Zo.current = !0), c(void 0);
  }, [Ye, U]), Yp = p.useCallback(() => {
    Zo.current = !1;
  }, []), Jo = p.useRef(), Qo = p.useCallback((m) => {
    var L, D, W;
    if (!Ip(m, Jo.current) && (Jo.current = m, !(((L = dn == null ? void 0 : dn.current) == null ? void 0 : L.button) !== void 0 && dn.current.button >= 1))) {
      if (m.buttons !== 0 && l !== void 0 && ((D = dn.current) == null ? void 0 : D.location[0]) === 0 && m.location[0] === 0 && U === 1 && Oe === "multi" && l.previousSelection && !l.previousSelection.rows.hasIndex(dn.current.location[1]) && G.rows.hasIndex(dn.current.location[1])) {
        const j = Math.min(dn.current.location[1], m.location[1]), V = Math.max(dn.current.location[1], m.location[1]) + 1;
        de(rt.fromSingleSelection([j, V]), void 0, !1);
      }
      if (m.buttons !== 0 && l !== void 0 && G.current !== void 0 && !Zo.current && !Qr.current && (Se === "rect" || Se === "multi-rect")) {
        const [j, V] = G.current.cell;
        let [X, K] = m.location;
        if (K < 0 && (K = wt.current.y), l.fillHandle === !0 && ((W = l.previousSelection) == null ? void 0 : W.current) !== void 0) {
          const te = l.previousSelection.current.range;
          K = Math.min(K, bt ? C - 1 : C);
          const Q = ny(te, X, K, Lt);
          Uo(Q);
        } else {
          if (bt && V === C)
            return;
          if (bt && K === C)
            if (m.kind === ko)
              K--;
            else
              return;
          X = Math.max(X, U);
          const he = X - j, ye = K - V, fe = {
            x: he >= 0 ? j : X,
            y: ye >= 0 ? V : K,
            width: Math.abs(he) + 1,
            height: Math.abs(ye) + 1
          };
          ee({
            ...G.current,
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
    G,
    Se,
    Ct,
    de,
    bt,
    C,
    ee
  ]), Kp = p.useCallback(() => {
    var X, K;
    const m = Jo.current;
    if (m === void 0)
      return;
    const [L, D] = m.scrollEdge;
    let [W, j] = m.location;
    const V = wt.current;
    L === -1 ? W = ((K = (X = V.extras) == null ? void 0 : X.freezeRegion) == null ? void 0 : K.x) ?? V.x : L === 1 && (W = V.x + V.width), D === -1 ? j = Math.max(0, V.y) : D === 1 && (j = Math.min(C - 1, V.y + V.height)), W = Cn(W, 0, ze.length - 1), j = Cn(j, 0, C - 1), Qo({
      ...m,
      location: [W, j]
    });
  }, [ze.length, Qo, C]);
  cw(Np, u, Kp);
  const yn = p.useCallback((m) => {
    if (G.current === void 0)
      return;
    const [L, D] = m, [W, j] = G.current.cell, V = G.current.range;
    let X = V.x, K = V.x + V.width, te = V.y, Q = V.y + V.height;
    if (D !== 0)
      switch (D) {
        case 2: {
          Q = C, te = j, Tt(0, Q, "vertical");
          break;
        }
        case -2: {
          te = 0, Q = j + 1, Tt(0, te, "vertical");
          break;
        }
        case 1: {
          te < j ? (te++, Tt(0, te, "vertical")) : (Q = Math.min(C, Q + 1), Tt(0, Q, "vertical"));
          break;
        }
        case -1: {
          Q > j + 1 ? (Q--, Tt(0, Q, "vertical")) : (te = Math.max(0, te - 1), Tt(0, te, "vertical"));
          break;
        }
        default:
          Ri();
      }
    if (L !== 0)
      if (L === 2)
        K = ze.length, X = W, Tt(K - 1 - U, 0, "horizontal");
      else if (L === -2)
        X = U, K = W + 1, Tt(X - U, 0, "horizontal");
      else {
        let he = [];
        if (Pt !== void 0) {
          const ye = Pt({
            x: X,
            y: te,
            width: K - X - U,
            height: Q - te
          }, zt.current.signal);
          typeof ye == "object" && (he = pw(ye));
        }
        if (L === 1) {
          let ye = !1;
          if (X < W) {
            if (he.length > 0) {
              const fe = ur(X + 1, W + 1).find((Re) => !he.includes(Re - U));
              fe !== void 0 && (X = fe, ye = !0);
            } else
              X++, ye = !0;
            ye && Tt(X, 0, "horizontal");
          }
          ye || (K = Math.min(ze.length, K + 1), Tt(K - 1 - U, 0, "horizontal"));
        } else if (L === -1) {
          let ye = !1;
          if (K > W + 1) {
            if (he.length > 0) {
              const fe = ur(K - 1, W, -1).find((Re) => !he.includes(Re - U));
              fe !== void 0 && (K = fe, ye = !0);
            } else
              K--, ye = !0;
            ye && Tt(K - U, 0, "horizontal");
          }
          ye || (X = Math.max(U, X - 1), Tt(X - U, 0, "horizontal"));
        } else
          Ri();
      }
    ee({
      cell: G.current.cell,
      range: {
        x: X,
        y: te,
        width: K - X,
        height: Q - te
      }
    }, !0, !1, "keyboard-select");
  }, [Pt, G, ze.length, U, C, Tt, ee]), Kn = p.useCallback((m, L, D, W) => {
    const j = $t - (D ? 0 : 1);
    if (m = Cn(m, U, tt.length - 1 + U), L = Cn(L, 0, j), m === (_n == null ? void 0 : _n[0]) && L === (_n == null ? void 0 : _n[1]))
      return !1;
    if (W && G.current !== void 0) {
      const V = [...G.current.rangeStack];
      (G.current.range.width > 1 || G.current.range.height > 1) && V.push(G.current.range), Gt({
        ...G,
        current: {
          cell: [m, L],
          range: { x: m, y: L, width: 1, height: 1 },
          rangeStack: V
        }
      }, !0);
    } else
      ee({
        cell: [m, L],
        range: { x: m, y: L, width: 1, height: 1 }
      }, !0, !1, "keyboard-nav");
    return h.current !== void 0 && h.current[0] === m && h.current[1] === L && (h.current = void 0), Tt(m - U, L), !0;
  }, [
    $t,
    U,
    tt.length,
    _n,
    G,
    Tt,
    Gt,
    ee
  ]), Vp = p.useCallback((m, L) => {
    (i == null ? void 0 : i.cell) !== void 0 && m !== void 0 && Hr(m) && (un([{ location: i.cell, value: m }]), window.requestAnimationFrame(() => {
      var j;
      (j = Yt.current) == null || j.damage([
        {
          cell: i.cell
        }
      ]);
    })), Ut(!0), o(void 0);
    const [D, W] = L;
    if (G.current !== void 0 && (D !== 0 || W !== 0)) {
      const j = G.current.cell[1] === $t - 1 && m !== void 0;
      Kn(Cn(G.current.cell[0] + D, 0, ze.length - 1), Cn(G.current.cell[1] + W, 0, $t - 1), j, !1);
    }
    E == null || E(m, L);
  }, [
    i == null ? void 0 : i.cell,
    Ut,
    G,
    E,
    un,
    $t,
    Kn,
    ze.length
  ]), Zp = p.useMemo(() => `gdg-overlay-${gw++}`, []), lr = p.useCallback((m) => {
    var D, W, j, V;
    Ut();
    const L = [];
    for (let X = m.x; X < m.x + m.width; X++)
      for (let K = m.y; K < m.y + m.height; K++) {
        const te = P([X - U, K]);
        if (!te.allowOverlay && te.kind !== ae.Boolean)
          continue;
        let Q;
        if (te.kind === ae.Custom) {
          const he = ge(te), ye = (D = he == null ? void 0 : he.provideEditor) == null ? void 0 : D.call(he, te);
          (he == null ? void 0 : he.onDelete) !== void 0 ? Q = he.onDelete(te) : J0(ye) && (Q = (W = ye == null ? void 0 : ye.deletedValue) == null ? void 0 : W.call(ye, te));
        } else if (Hr(te) && te.allowOverlay || te.kind === ae.Boolean) {
          const he = ge(te);
          Q = (j = he == null ? void 0 : he.onDelete) == null ? void 0 : j.call(he, te);
        }
        Q !== void 0 && !$r(Q) && Hr(Q) && L.push({ location: [X, K], value: Q });
      }
    un(L), (V = Yt.current) == null || V.damage(L.map((X) => ({ cell: X.location })));
  }, [Ut, P, ge, un, U]), ei = i !== void 0, cu = p.useCallback((m) => {
    var Re, _e;
    const L = () => {
      m.stopPropagation(), m.preventDefault();
    }, D = {
      didMatch: !1
    }, { bounds: W } = m, j = G.columns, V = G.rows, X = pn;
    if (!ei && $e(X.clear, m, D))
      Gt(uo, !1), It == null || It();
    else if (!ei && $e(X.selectAll, m, D))
      Gt({
        columns: rt.empty(),
        rows: rt.empty(),
        current: {
          cell: ((Re = G.current) == null ? void 0 : Re.cell) ?? [U, 0],
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
      const Qe = (q == null ? void 0 : q(G)) ?? !0;
      if (Qe !== !1) {
        const Te = Qe === !0 ? G : Qe;
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
      return L(), !0;
    if (G.current === void 0)
      return !1;
    let [K, te] = G.current.cell, Q = !1, he = !1;
    $e(X.scrollToSelectedCell, m, D) ? Ji.current(K - U, te) : ve !== "none" && $e(X.selectColumn, m, D) ? j.hasIndex(K) ? le(j.remove(K), void 0, !0) : ve === "single" ? le(rt.fromSingleSelection(K), void 0, !0) : le(void 0, K, !0) : Oe !== "none" && $e(X.selectRow, m, D) ? V.hasIndex(te) ? de(V.remove(te), void 0, !0) : Oe === "single" ? de(rt.fromSingleSelection(te), void 0, !0) : de(void 0, te, !0) : !ei && W !== void 0 && $e(X.activateCell, m, D) ? te === C && bt ? window.setTimeout(() => {
      const Qe = Yi(K);
      Ar(Qe ?? K);
    }, 0) : (M == null || M([K - U, te]), Ir(W, !0)) : G.current.range.height > 1 && $e(X.downFill, m, D) ? lu() : G.current.range.width > 1 && $e(X.rightFill, m, D) ? su() : $e(X.goToNextPage, m, D) ? te += Math.max(1, wt.current.height - 4) : $e(X.goToPreviousPage, m, D) ? te -= Math.max(1, wt.current.height - 4) : $e(X.goToFirstCell, m, D) ? (o(void 0), te = 0, K = 0) : $e(X.goToLastCell, m, D) ? (o(void 0), te = Number.MAX_SAFE_INTEGER, K = Number.MAX_SAFE_INTEGER) : $e(X.selectToFirstCell, m, D) ? (o(void 0), yn([-2, -2])) : $e(X.selectToLastCell, m, D) ? (o(void 0), yn([2, 2])) : ei ? ($e(X.closeOverlay, m, D) && o(void 0), $e(X.acceptOverlayDown, m, D) && (o(void 0), te++), $e(X.acceptOverlayUp, m, D) && (o(void 0), te--), $e(X.acceptOverlayLeft, m, D) && (o(void 0), K--), $e(X.acceptOverlayRight, m, D) && (o(void 0), K++)) : ($e(X.goDownCell, m, D) ? te += 1 : $e(X.goUpCell, m, D) ? te -= 1 : $e(X.goRightCell, m, D) ? K += 1 : $e(X.goLeftCell, m, D) ? K -= 1 : $e(X.goDownCellRetainSelection, m, D) ? (te += 1, Q = !0) : $e(X.goUpCellRetainSelection, m, D) ? (te -= 1, Q = !0) : $e(X.goRightCellRetainSelection, m, D) ? (K += 1, Q = !0) : $e(X.goLeftCellRetainSelection, m, D) ? (K -= 1, Q = !0) : $e(X.goToLastRow, m, D) ? te = C - 1 : $e(X.goToFirstRow, m, D) ? te = Number.MIN_SAFE_INTEGER : $e(X.goToLastColumn, m, D) ? K = Number.MAX_SAFE_INTEGER : $e(X.goToFirstColumn, m, D) ? K = Number.MIN_SAFE_INTEGER : (Se === "rect" || Se === "multi-rect") && ($e(X.selectGrowDown, m, D) ? yn([0, 1]) : $e(X.selectGrowUp, m, D) ? yn([0, -1]) : $e(X.selectGrowRight, m, D) ? yn([1, 0]) : $e(X.selectGrowLeft, m, D) ? yn([-1, 0]) : $e(X.selectToLastRow, m, D) ? yn([0, 2]) : $e(X.selectToFirstRow, m, D) ? yn([0, -2]) : $e(X.selectToLastColumn, m, D) ? yn([2, 0]) : $e(X.selectToFirstColumn, m, D) && yn([-2, 0])), he = D.didMatch);
    const ye = Kn(K, te, !1, Q), fe = D.didMatch;
    return fe && (ye || !he || Fi) && L(), fe;
  }, [
    ei,
    G,
    pn,
    ve,
    Oe,
    Se,
    U,
    C,
    Kn,
    Gt,
    It,
    y.length,
    q,
    Fi,
    lr,
    le,
    de,
    bt,
    Yi,
    Ar,
    M,
    Ir,
    lu,
    su,
    yn
  ]), ti = p.useCallback((m) => {
    let L = !1;
    if (pe !== void 0 && pe({
      ...m,
      cancel: () => {
        L = !0;
      }
    }), L || cu(m) || G.current === void 0)
      return;
    const [D, W] = G.current.cell, j = wt.current;
    if (Be && !m.metaKey && !m.ctrlKey && G.current !== void 0 && m.key.length === 1 && /[ -~]/g.test(m.key) && m.bounds !== void 0 && pi(P([D - U, Math.max(0, Math.min(W, C - 1))]))) {
      if ((!bt || W !== C) && (j.y > W || W > j.y + j.height || j.x > D || D > j.x + j.width))
        return;
      Ir(m.bounds, !0, m.key), m.stopPropagation(), m.preventDefault();
    }
  }, [
    Be,
    pe,
    cu,
    G,
    P,
    U,
    C,
    bt,
    Ir
  ]), Jp = p.useCallback((m, L) => {
    const D = m.location[0] - U;
    if (m.kind === "header" && (ne == null || ne(D, { ...m, preventDefault: L })), m.kind === nn) {
      if (D < 0)
        return;
      I == null || I(D, { ...m, preventDefault: L });
    }
    if (m.kind === "cell") {
      const [W, j] = m.location;
      H == null || H([D, j], {
        ...m,
        preventDefault: L
      }), O1(G, m.location) || Kn(W, j, !1, !1);
    }
  }, [
    G,
    H,
    I,
    ne,
    U,
    Kn
  ]), ea = p.useCallback(async (m) => {
    var X, K, te;
    if (!pn.paste)
      return;
    function L(Q, he, ye, fe) {
      var _e, Qe;
      const Re = typeof ye == "object" ? (ye == null ? void 0 : ye.join(`
`)) ?? "" : (ye == null ? void 0 : ye.toString()) ?? "";
      if (!$r(Q) && pi(Q) && Q.readonly !== !0) {
        const Te = _ == null ? void 0 : _(Re, Q);
        if (Te !== void 0 && Hr(Te))
          return fw.NODE_ENV !== "production" && Te.kind !== Q.kind && console.warn("Coercion should not change cell kind."), {
            location: he,
            value: Te
          };
        const xe = ge(Q);
        if (xe === void 0)
          return;
        if (xe.kind === ae.Custom) {
          rn(Q.kind === ae.Custom);
          const ft = (_e = xe.onPaste) == null ? void 0 : _e.call(xe, Re, Q.data);
          return ft === void 0 ? void 0 : {
            location: he,
            value: {
              ...Q,
              data: ft
            }
          };
        } else {
          const ft = (Qe = xe.onPaste) == null ? void 0 : Qe.call(xe, Re, Q, {
            formatted: fe,
            formattedString: typeof fe == "string" ? fe : fe == null ? void 0 : fe.join(`
`),
            rawValue: ye
          });
          return ft === void 0 ? void 0 : (rn(ft.kind === Q.kind), {
            location: he,
            value: ft
          });
        }
      }
    }
    const D = G.columns, W = G.rows, j = ((X = u.current) == null ? void 0 : X.contains(document.activeElement)) === !0 || ((K = a.current) == null ? void 0 : K.contains(document.activeElement)) === !0;
    let V;
    if (G.current !== void 0 ? V = [G.current.range.x, G.current.range.y] : D.length === 1 ? V = [D.first() ?? 0, 0] : W.length === 1 && (V = [U, W.first() ?? 0]), j && V !== void 0) {
      let Q, he;
      const ye = "text/plain", fe = "text/html";
      if (navigator.clipboard.read !== void 0) {
        const Te = await navigator.clipboard.read();
        for (const xe of Te) {
          if (xe.types.includes(fe)) {
            const Nt = await (await xe.getType(fe)).text(), Et = sg(Nt);
            if (Et !== void 0) {
              Q = Et;
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
          Q = sg(Te);
        }
        Q === void 0 && m.clipboardData.types.includes(ye) && (he = m.clipboardData.getData(ye));
      } else
        return;
      const [Re, _e] = V, Qe = [];
      do {
        if (ue === void 0) {
          const Te = en(V), xe = he ?? (Q == null ? void 0 : Q.map((Nt) => Nt.map((Et) => Et.rawValue).join("	")).join("	")) ?? "", ft = L(Te, V, xe, void 0);
          ft !== void 0 && Qe.push(ft);
          break;
        }
        if (Q === void 0) {
          if (he === void 0)
            return;
          Q = nw(he);
        }
        if (ue === !1 || typeof ue == "function" && (ue == null ? void 0 : ue([V[0] - U, V[1]], Q.map((Te) => Te.map((xe) => {
          var ft;
          return ((ft = xe.rawValue) == null ? void 0 : ft.toString()) ?? "";
        })))) !== !0)
          return;
        for (const [Te, xe] of Q.entries()) {
          if (Te + _e >= C)
            break;
          for (const [ft, Nt] of xe.entries()) {
            const Et = [ft + Re, Te + _e], [bn, Tn] = Et;
            if (bn >= ze.length || Tn >= $t)
              continue;
            const wn = en(Et), En = L(wn, Et, Nt.rawValue, Nt.formatted);
            En !== void 0 && Qe.push(En);
          }
        }
      } while (!1);
      un(Qe), (te = Yt.current) == null || te.damage(Qe.map((Te) => ({
        cell: Te.location
      })));
    }
  }, [
    _,
    ge,
    en,
    G,
    pn.paste,
    ze.length,
    un,
    $t,
    ue,
    U,
    C
  ]);
  Ht("paste", ea, d, !1, !0);
  const ni = p.useCallback(async (m, L) => {
    var X, K;
    if (!pn.copy)
      return;
    const D = L === !0 || ((X = u.current) == null ? void 0 : X.contains(document.activeElement)) === !0 || ((K = a.current) == null ? void 0 : K.contains(document.activeElement)) === !0, W = G.columns, j = G.rows, V = (te, Q) => {
      if (!He)
        cg(te, Q, m);
      else {
        const he = Q.map((ye) => ({
          kind: ae.Text,
          data: y[ye].title,
          displayData: y[ye].title,
          allowOverlay: !1
        }));
        cg([he, ...te], Q, m);
      }
    };
    if (D && Pt !== void 0) {
      if (G.current !== void 0) {
        let te = Pt(G.current.range, zt.current.signal);
        typeof te != "object" && (te = await te()), V(te, ur(G.current.range.x - U, G.current.range.x + G.current.range.width - U));
      } else if (j !== void 0 && j.length > 0) {
        const Q = [...j].map((he) => {
          const ye = Pt({
            x: U,
            y: he,
            width: y.length,
            height: 1
          }, zt.current.signal);
          return typeof ye == "object" ? ye[0] : ye().then((fe) => fe[0]);
        });
        if (Q.some((he) => he instanceof Promise)) {
          const he = await Promise.all(Q);
          V(he, ur(y.length));
        } else
          V(Q, ur(y.length));
      } else if (W.length > 0) {
        const te = [], Q = [];
        for (const he of W) {
          let ye = Pt({
            x: he,
            y: 0,
            width: 1,
            height: C
          }, zt.current.signal);
          typeof ye != "object" && (ye = await ye()), te.push(ye), Q.push(he - U);
        }
        if (te.length === 1)
          V(te[0], Q);
        else {
          const he = te.reduce((ye, fe) => ye.map((Re, _e) => [...Re, ...fe[_e]]));
          V(he, Q);
        }
      }
    }
  }, [y, Pt, G, pn.copy, U, C, He]);
  Ht("copy", ni, d, !1, !1);
  const Qp = p.useCallback(async (m) => {
    var D, W;
    if (!(!pn.cut || !(((D = u.current) == null ? void 0 : D.contains(document.activeElement)) === !0 || ((W = a.current) == null ? void 0 : W.contains(document.activeElement)) === !0)) && (await ni(m), G.current !== void 0)) {
      let j = {
        current: {
          cell: G.current.cell,
          range: G.current.range,
          rangeStack: []
        },
        rows: rt.empty(),
        columns: rt.empty()
      };
      const V = q == null ? void 0 : q(j);
      if (V === !1 || (j = V === !0 ? j : V, j.current === void 0))
        return;
      lr(j.current.range);
    }
  }, [lr, G, pn.cut, ni, q]);
  Ht("cut", Qp, d, !1, !1);
  const e0 = p.useCallback((m, L) => {
    if ($ !== void 0) {
      U !== 0 && (m = m.map((j) => [j[0] - U, j[1]])), $(m, L);
      return;
    }
    if (m.length === 0 || L === -1)
      return;
    const [D, W] = m[L];
    h.current !== void 0 && h.current[0] === D && h.current[1] === W || (h.current = [D, W], Kn(D, W, !1, !1));
  }, [$, U, Kn]), [Vi, Zi] = ((mu = mt == null ? void 0 : mt.current) == null ? void 0 : mu.cell) ?? [], Ji = p.useRef(Tt);
  Ji.current = Tt, p.useLayoutEffect(() => {
    var m, L, D, W;
    !et.current && Vi !== void 0 && Zi !== void 0 && (Vi !== ((L = (m = Gn.current) == null ? void 0 : m.current) == null ? void 0 : L.cell[0]) || Zi !== ((W = (D = Gn.current) == null ? void 0 : D.current) == null ? void 0 : W.cell[1])) && Ji.current(Vi, Zi), et.current = !1;
  }, [Vi, Zi]);
  const uu = G.current !== void 0 && (G.current.cell[0] >= ze.length || G.current.cell[1] >= $t);
  p.useLayoutEffect(() => {
    uu && Gt(uo, !1);
  }, [uu, Gt]);
  const t0 = p.useMemo(() => bt === !0 && (Ue == null ? void 0 : Ue.tint) === !0 ? rt.fromSingleSelection($t - 1) : rt.empty(), [$t, bt, Ue == null ? void 0 : Ue.tint]), n0 = p.useCallback((m) => typeof Dt == "boolean" ? Dt : (Dt == null ? void 0 : Dt(m - U)) ?? !0, [U, Dt]), r0 = p.useMemo(() => {
    if (Yo === void 0 || a.current === null)
      return null;
    const { bounds: m, group: L } = Yo, D = a.current.getBoundingClientRect();
    return p.createElement(Ub, { bounds: m, group: L, canvasBounds: D, onClose: () => Ko(void 0), onFinish: (W) => {
      Ko(void 0), N == null || N(L, W);
    } });
  }, [N, Yo]), i0 = Math.min(ze.length, We + (Zt ? 1 : 0));
  p.useImperativeHandle(t, () => ({
    appendRow: (m, L) => Ar(m + U, L),
    updateCells: (m) => {
      var L;
      return U !== 0 && (m = m.map((D) => ({ cell: [D.cell[0] + U, D.cell[1]] }))), (L = Yt.current) == null ? void 0 : L.damage(m);
    },
    getBounds: (m, L) => {
      var D;
      if (!((a == null ? void 0 : a.current) === null || (u == null ? void 0 : u.current) === null)) {
        if (m === void 0 && L === void 0) {
          const W = a.current.getBoundingClientRect(), j = W.width / u.current.clientWidth;
          return {
            x: W.x - u.current.scrollLeft * j,
            y: W.y - u.current.scrollTop * j,
            width: u.current.scrollWidth * j,
            height: u.current.scrollHeight * j
          };
        }
        return (D = Yt.current) == null ? void 0 : D.getBounds((m ?? 0) + U, L);
      }
    },
    focus: () => {
      var m;
      return (m = Yt.current) == null ? void 0 : m.focus();
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
          await ea();
          break;
      }
    },
    scrollTo: Tt,
    remeasureColumns: (m) => {
      for (const L of m)
        Ki(L + U);
    }
  }), [Ar, Ki, ni, ti, ea, U, Tt]);
  const [du, fu] = _n ?? [], o0 = p.useCallback((m) => {
    const [L, D] = m;
    if (D === -1) {
      ve !== "none" && (le(rt.fromSingleSelection(L), void 0, !1), Ut());
      return;
    }
    du === L && fu === D || (ee({
      cell: m,
      range: { x: L, y: D, width: 1, height: 1 }
    }, !0, !1, "keyboard-nav"), Tt(L, D));
  }, [ve, Ut, Tt, du, fu, ee, le]), [a0, s0] = p.useState(!1), hu = p.useRef(Dg((m) => {
    s0(m);
  }, 5)), l0 = p.useCallback(() => {
    hu.current(!0), G.current === void 0 && G.columns.length === 0 && G.rows.length === 0 && l === void 0 && ee({
      cell: [U, Wi],
      range: {
        x: U,
        y: Wi,
        width: 1,
        height: 1
      }
    }, !0, !1, "keyboard-select");
  }, [Wi, G, l, U, ee]), c0 = p.useCallback(() => {
    hu.current(!1);
  }, []), [u0, d0] = p.useMemo(() => {
    let m;
    const L = (yt == null ? void 0 : yt.scrollbarWidthOverride) ?? uc(), D = C + (bt ? 1 : 0);
    if (typeof jt == "number")
      m = Fe + D * jt;
    else {
      let j = 0;
      const V = Math.min(D, 10);
      for (let X = 0; X < V; X++)
        j += jt(X);
      j = Math.floor(j / V), m = Fe + D * j;
    }
    m += L;
    const W = ze.reduce((j, V) => V.width + j, 0) + L;
    return [`${Math.min(1e5, W)}px`, `${Math.min(1e5, m)}px`];
  }, [ze, yt == null ? void 0 : yt.scrollbarWidthOverride, jt, C, bt, Fe]), f0 = p.useMemo(() => Y1(ie), [ie]);
  return p.createElement(
    K1.Provider,
    { value: ie },
    p.createElement(
      aw,
      { style: f0, className: B, inWidth: x ?? u0, inHeight: A ?? d0 },
      p.createElement(Nb, { fillHandle: pt, drawFocusRing: Ot, experimental: yt, fixedShadowX: Oi, fixedShadowY: Wn, getRowThemeOverride: f, headerIcons: Ln, imageWindowLoader: Fn, initialSize: yr, isDraggable: Di, onDragLeave: Li, onRowMoved: xn, overscrollX: zo, overscrollY: Ni, preventDiagonalScrolling: Sr, rightElement: rr, rightElementProps: jn, smoothScrollX: qi, smoothScrollY: Lo, className: B, enableGroups: it, onCanvasFocused: l0, onCanvasBlur: c0, canvasRef: a, onContextMenu: Jp, theme: ie, cellXOffset: or, cellYOffset: Wi, accessibilityHeight: _t.height, onDragEnd: Yp, columns: ze, nonGrowWidth: ke, drawHeader: Wo, onColumnProposeMove: T, drawCell: jo, disabledRows: t0, freezeColumns: i0, lockColumns: U, firstColAccessible: U === 0, getCellContent: en, minColumnWidth: Vt, maxColumnWidth: gn, searchInputRef: s, showSearch: Kr, onSearchClose: No, highlightRegions: zp, getCellsForSelection: Pt, getGroupDetails: Xo, headerHeight: Rr, isFocused: a0, groupHeaderHeight: it ? Yr : 0, freezeTrailingRows: Je + (bt && (Ue == null ? void 0 : Ue.sticky) === !0 ? 1 : 0), hasAppendRow: bt, onColumnResize: mn, onColumnResizeEnd: Bo, onColumnResizeStart: Tr, onCellFocused: o0, onColumnMoved: Xp, onDragStart: Gp, onHeaderMenuClick: jp, onItemHovered: Qo, isFilling: (l == null ? void 0 : l.fillHandle) === !0, onMouseMove: Wp, onKeyDown: ti, onKeyUp: we, onMouseDown: $p, onMouseUp: Bp, onDragOverCell: hn, onDrop: Ge, onSearchResultsChanged: e0, onVisibleRegionChanged: Up, clientSize: me, rowHeight: jt, searchResults: ce, searchValue: oe, onSearchValueChange: se, rows: $t, scrollRef: u, selection: G, translateX: _t.tx, translateY: _t.ty, verticalBorder: n0, gridRef: Yt, getCellRenderer: ge }),
      r0,
      i !== void 0 && p.createElement(
        p.Suspense,
        { fallback: null },
        p.createElement(hw, { ...i, validateCell: Vr, bloom: w, id: Zp, getCellRenderer: ge, className: (yt == null ? void 0 : yt.isSubGrid) === !0 ? "click-outside-ignore" : void 0, provideEditor: gt, imageEditorOverride: g, onFinishEditing: Vp, markdownDivCreateNode: v, isOutsideClick: Hi })
      )
    )
  );
}, vw = p.forwardRef(mw), fg = 20, yw = {
  getAccessibilityString: (e) => {
    var t;
    return ((t = e.data) == null ? void 0 : t.toString()) ?? "false";
  },
  kind: ae.Boolean,
  needsHover: !0,
  useLabel: !1,
  needsHoverPosition: !0,
  measure: () => 50,
  draw: (e) => bw(e, e.cell.data, cc(e.cell), e.cell.maxSize ?? fg),
  onDelete: (e) => ({
    ...e,
    data: !1
  }),
  onClick: (e) => {
    const { cell: t, posX: n, posY: r, bounds: i, theme: o } = e, { width: s, height: a, x: l, y: c } = i, u = t.maxSize ?? fg, h = Math.floor(i.y + a / 2), d = qg(u, a, o.cellVerticalPadding), g = Fg(t.contentAlign ?? "center", l, s, o.cellHorizontalPadding, d), f = Lg(g, h, d), v = Hg(l + n, c + r, f);
    if (cc(t) && v)
      return {
        ...t,
        data: Pp(t.data)
      };
  },
  onPaste: (e, t) => {
    let n = po;
    return e.toLowerCase() === "true" ? n = !0 : e.toLowerCase() === "false" ? n = !1 : e.toLowerCase() === "indeterminate" && (n = Ac), n === t.data ? void 0 : {
      ...t,
      data: n
    };
  }
};
function bw(e, t, n, r) {
  if (!n && t === po)
    return;
  const { ctx: i, hoverAmount: o, theme: s, rect: a, highlighted: l, hoverX: c, hoverY: u, cell: { contentAlign: h } } = e, { x: d, y: g, width: f, height: v } = a, x = 0.35;
  let A = n ? 1 - x + x * o : 0.4;
  t === po && (A *= o), A !== 0 && (i.globalAlpha = A, Zc(i, s, t, d, g, f, v, l, c, u, r, h), i.globalAlpha = 1);
}
const ww = /* @__PURE__ */ an("div")({
  name: "BubblesOverlayEditorStyle",
  class: "gdg-b1ygi5by",
  propsAsIs: !1
}), Sw = (e) => {
  const { bubbles: t } = e;
  return p.createElement(
    ww,
    null,
    t.map((n, r) => p.createElement("div", { key: r, className: "boe-bubble" }, n)),
    p.createElement("textarea", { className: "gdg-input", autoFocus: !0 })
  );
}, Cw = {
  getAccessibilityString: (e) => zg(e.data),
  kind: ae.Bubble,
  needsHover: !1,
  useLabel: !1,
  needsHoverPosition: !1,
  measure: (e, t, n) => t.data.reduce((r, i) => e.measureText(i).width + r + 20, 0) + 2 * n.cellHorizontalPadding - 4,
  draw: (e) => xw(e, e.cell.data),
  provideEditor: () => (e) => {
    const { value: t } = e;
    return p.createElement(Sw, { bubbles: t.data });
  },
  onPaste: () => {
  }
}, kw = 4;
function xw(e, t) {
  const { rect: n, theme: r, ctx: i, highlighted: o } = e, { x: s, y: a, width: l, height: c } = n, u = 20, h = 8, d = kw;
  let g = s + r.cellHorizontalPadding;
  const f = [];
  for (const v of t) {
    if (g > s + l)
      break;
    const x = Ai(v, i, r.baseFontFull).width;
    f.push({
      x: g,
      width: x
    }), g += x + h * 2 + d;
  }
  i.beginPath();
  for (const v of f)
    In(i, v.x, a + (c - u) / 2, v.width + h * 2, u, r.roundingRadius ?? u / 2);
  i.fillStyle = o ? r.bgBubbleSelected : r.bgBubble, i.fill();
  for (const [v, x] of f.entries())
    i.beginPath(), i.fillStyle = r.textBubble, i.fillText(t[v], x.x + h, a + c / 2 + tr(i, r));
}
const Rw = /* @__PURE__ */ an("div")({
  name: "DrilldownOverlayEditorStyle",
  class: "gdg-d4zsq0x",
  propsAsIs: !1
}), _w = (e) => {
  const {
    drilldowns: t
  } = e;
  return p.createElement(Rw, null, t.map((n, r) => p.createElement("div", {
    key: r,
    className: "doe-bubble"
  }, n.img !== void 0 && p.createElement("img", {
    src: n.img
  }), p.createElement("div", null, n.text))));
}, Tw = {
  getAccessibilityString: (e) => zg(e.data.map((t) => t.text)),
  kind: ae.Drilldown,
  needsHover: !1,
  useLabel: !1,
  needsHoverPosition: !1,
  measure: (e, t, n) => t.data.reduce((r, i) => e.measureText(i.text).width + r + 20 + (i.img !== void 0 ? 18 : 0), 0) + 2 * n.cellHorizontalPadding - 4,
  draw: (e) => Iw(e, e.cell.data),
  provideEditor: () => (e) => {
    const { value: t } = e;
    return p.createElement(_w, { drilldowns: t.data });
  },
  onPaste: () => {
  }
}, Ew = 4, ic = {};
function Mw(e, t, n, r) {
  const i = Math.ceil(window.devicePixelRatio), o = 5, s = n - o * 2, a = 4, l = n * i, c = r + o, u = r * 3, h = (u + o * 2) * i, d = `${e},${t},${i},${n}`;
  if (ic[d] !== void 0)
    return {
      el: ic[d],
      height: l,
      width: h,
      middleWidth: a * i,
      sideWidth: c * i,
      padding: o * i,
      dpr: i
    };
  const g = document.createElement("canvas"), f = g.getContext("2d");
  return f === null ? null : (g.width = h, g.height = l, f.scale(i, i), ic[d] = g, f.beginPath(), In(f, o, o, u, s, r), f.shadowColor = "rgba(24, 25, 34, 0.4)", f.shadowBlur = 1, f.fillStyle = e, f.fill(), f.shadowColor = "rgba(24, 25, 34, 0.3)", f.shadowOffsetY = 1, f.shadowBlur = 5, f.fillStyle = e, f.fill(), f.shadowOffsetY = 0, f.shadowBlur = 0, f.shadowBlur = 0, f.beginPath(), In(f, o + 0.5, o + 0.5, u, s, r), f.strokeStyle = t, f.lineWidth = 1, f.stroke(), {
    el: g,
    height: l,
    width: h,
    sideWidth: c * i,
    middleWidth: r * i,
    padding: o * i,
    dpr: i
  });
}
function Iw(e, t) {
  const { rect: n, theme: r, ctx: i, imageLoader: o, col: s, row: a } = e, { x: l, width: c } = n, u = r.baseFontFull, h = np(i, u), d = Math.min(n.height, Math.max(16, Math.ceil(h * r.lineHeight) * 2)), g = Math.floor(n.y + (n.height - d) / 2), f = d - 10, v = 8, x = Ew;
  let A = l + r.cellHorizontalPadding;
  const y = r.roundingRadius ?? 6, C = Mw(r.bgCell, r.drilldownBorder, d, y), P = [];
  for (const b of t) {
    if (A > l + c)
      break;
    const O = Ai(b.text, i, u).width;
    let E = 0;
    b.img !== void 0 && o.loadOrGetImage(b.img, s, a) !== void 0 && (E = f - 8 + 4);
    const _ = O + E + v * 2;
    P.push({
      x: A,
      width: _
    }), A += _ + x;
  }
  if (C !== null) {
    const { el: b, height: M, middleWidth: O, sideWidth: E, width: _, dpr: F, padding: R } = C, w = E / F, k = R / F;
    for (const T of P) {
      const S = Math.floor(T.x), z = Math.floor(T.width), H = z - (w - k) * 2;
      i.imageSmoothingEnabled = !1, i.drawImage(b, 0, 0, E, M, S - k, g, w, d), H > 0 && i.drawImage(b, E, 0, O, M, S + (w - k), g, H, d), i.drawImage(b, _ - E, 0, E, M, S + z - (w - k), g, w, d), i.imageSmoothingEnabled = !0;
    }
  }
  i.beginPath();
  for (const [b, M] of P.entries()) {
    const O = t[b];
    let E = M.x + v;
    if (O.img !== void 0) {
      const _ = o.loadOrGetImage(O.img, s, a);
      if (_ !== void 0) {
        const F = f - 8;
        let R = 0, w = 0, k = _.width, T = _.height;
        k > T ? (R += (k - T) / 2, k = T) : T > k && (w += (T - k) / 2, T = k), i.beginPath(), In(i, E, g + d / 2 - F / 2, F, F, r.roundingRadius ?? 3), i.save(), i.clip(), i.drawImage(_, R, w, k, T, E, g + d / 2 - F / 2, F, F), i.restore(), E += F + 4;
      }
    }
    i.beginPath(), i.fillStyle = r.textBubble, i.fillText(O.text, E, g + d / 2 + tr(i, r));
  }
}
const Aw = {
  getAccessibilityString: (e) => e.data.join(", "),
  kind: ae.Image,
  needsHover: !1,
  useLabel: !1,
  needsHoverPosition: !1,
  draw: (e) => Pw(e, e.cell.displayData ?? e.cell.data, e.cell.rounding ?? e.theme.roundingRadius ?? 4, e.cell.contentAlign),
  measure: (e, t) => t.data.length * 50,
  onDelete: (e) => ({
    ...e,
    data: []
  }),
  provideEditor: () => (e) => {
    const { value: t, onFinishedEditing: n, imageEditorOverride: r } = e, i = r ?? qm;
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
}, oc = 4;
function Pw(e, t, n, r) {
  const { rect: i, col: o, row: s, theme: a, ctx: l, imageLoader: c } = e, { x: u, y: h, height: d, width: g } = i, f = d - a.cellVerticalPadding * 2, v = [];
  let x = 0;
  for (let y = 0; y < t.length; y++) {
    const C = t[y];
    if (C.length === 0)
      continue;
    const P = c.loadOrGetImage(C, o, s);
    if (P !== void 0) {
      v[y] = P;
      const b = P.width * (f / P.height);
      x += b + oc;
    }
  }
  if (x === 0)
    return;
  x -= oc;
  let A = u + a.cellHorizontalPadding;
  r === "right" ? A = Math.floor(u + g - a.cellHorizontalPadding - x) : r === "center" && (A = Math.floor(u + g / 2 - x / 2));
  for (const y of v) {
    if (y === void 0)
      continue;
    const C = y.width * (f / y.height);
    n > 0 && (l.beginPath(), In(l, A, h + a.cellVerticalPadding, C, f, n), l.save(), l.clip()), l.drawImage(y, A, h + a.cellVerticalPadding, C, f), n > 0 && l.restore(), A += C + oc;
  }
}
function Ow(e, t) {
  let n = e * 49632 + t * 325176;
  return n ^= n << 13, n ^= n >> 17, n ^= n << 5, n / 4294967295 * 2;
}
const Dw = {
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
    t.skeletonWidthVariability !== void 0 && t.skeletonWidthVariability > 0 && (a += Math.round(Ow(n, r) * t.skeletonWidthVariability));
    const l = s.cellHorizontalPadding, c = t.skeletonHeight ?? Math.min(18, o.height - 2 * s.cellVerticalPadding);
    In(i, o.x + l, o.y + (o.height - c) / 2, a, c, s.roundingRadius ?? 3), i.fillStyle = hr(s.textDark, 0.1), i.fill();
  },
  onPaste: () => {
  }
}, Lw = () => (e) => e.targetWidth, hg = /* @__PURE__ */ an("div")({
  name: "MarkdownOverlayEditorStyle",
  class: "gdg-m1pnx84e",
  propsAsIs: !1,
  vars: {
    "m1pnx84e-0": [Lw(), "px"]
  }
}), Fw = (e) => {
  const { value: t, onChange: n, forceEditMode: r, createNode: i, targetRect: o, onFinish: s, validatedSelection: a } = e, l = t.data, c = t.readonly === !0, [u, h] = p.useState(l === "" || r), d = p.useCallback(() => {
    h((f) => !f);
  }, []), g = l ? "gdg-ml-6" : "";
  return u ? p.createElement(
    hg,
    { targetWidth: o.width - 20 },
    p.createElement(Po, { autoFocus: !0, highlight: !1, validatedSelection: a, value: l, onKeyDown: (f) => {
      f.key === "Enter" && f.stopPropagation();
    }, onChange: n }),
    p.createElement(
      "div",
      { className: `gdg-edit-icon gdg-checkmark-hover ${g}`, onClick: () => s(t) },
      p.createElement(Im, null)
    )
  ) : p.createElement(
    hg,
    { targetWidth: o.width },
    p.createElement(S1, { contents: l, createNode: i }),
    !c && p.createElement(
      p.Fragment,
      null,
      p.createElement("div", { className: "spacer" }),
      p.createElement(
        "div",
        { className: `gdg-edit-icon gdg-edit-hover ${g}`, onClick: d },
        p.createElement(Lc, null)
      )
    ),
    p.createElement("textarea", { className: "gdg-md-edit-textarea gdg-input", autoFocus: !0 })
  );
}, qw = {
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
    return p.createElement(Fw, { onFinish: i, targetRect: r, value: n, validatedSelection: a, onChange: (l) => t({
      ...n,
      data: l.target.value
    }), forceEditMode: s, createNode: o });
  },
  onPaste: (e, t) => e === t.data ? void 0 : { ...t, data: e }
}, Hw = {
  getAccessibilityString: (e) => e.row.toString(),
  kind: fn.Marker,
  needsHover: !0,
  needsHoverPosition: !1,
  drawPrep: zw,
  measure: () => 44,
  draw: (e) => Nw(e, e.cell.row, e.cell.checked, e.cell.markerKind, e.cell.drawHandle, e.cell.checkboxStyle),
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
function zw(e, t) {
  const { ctx: n, theme: r } = e, i = r.markerFontFull, o = t ?? {};
  return (o == null ? void 0 : o.font) !== i && (n.font = i, o.font = i), o.deprep = $w, n.textAlign = "center", o;
}
function $w(e) {
  const { ctx: t } = e;
  t.textAlign = "start";
}
function Nw(e, t, n, r, i, o) {
  const { ctx: s, rect: a, hoverAmount: l, theme: c } = e, { x: u, y: h, width: d, height: g } = a, f = n ? 1 : r === "checkbox-visible" ? 0.6 + 0.4 * l : l;
  if (r !== "number" && f > 0) {
    s.globalAlpha = f;
    const v = 7 * (n ? l : 1);
    if (Zc(s, c, n, i ? u + v : u, h, i ? d - v : d, g, !0, void 0, void 0, 18, "center", o), i) {
      s.globalAlpha = l, s.beginPath();
      for (const x of [3, 6])
        for (const A of [-5, -1, 3])
          s.rect(u + x, h + g / 2 + A, 2, 2);
      s.fillStyle = c.textLight, s.fill(), s.beginPath();
    }
    s.globalAlpha = 1;
  }
  if (r === "number" || r === "both" && !n) {
    const v = t.toString(), x = c.markerFontFull, A = u + d / 2;
    r === "both" && l !== 0 && (s.globalAlpha = 1 - l), s.fillStyle = c.textLight, s.font = x, s.fillText(v, A, h + g / 2 + tr(s, x)), l !== 0 && (s.globalAlpha = 1);
  }
}
const Bw = {
  getAccessibilityString: () => "",
  kind: fn.NewRow,
  needsHover: !0,
  needsHoverPosition: !1,
  measure: () => 200,
  draw: (e) => Ww(e, e.cell.hint, e.cell.icon),
  onPaste: () => {
  }
};
function Ww(e, t, n) {
  const { ctx: r, rect: i, hoverAmount: o, theme: s, spriteManager: a } = e, { x: l, y: c, width: u, height: h } = i;
  r.beginPath(), r.globalAlpha = o, r.rect(l + 1, c + 1, u, h - 2), r.fillStyle = s.bgHeaderHovered, r.fill(), r.globalAlpha = 1, r.beginPath();
  const d = t !== "";
  let g = 0;
  if (n !== void 0) {
    const v = h - 8, x = l + 8 / 2, A = c + 8 / 2;
    a.drawSprite(n, "normal", r, x, A, v, s, d ? 1 : o), g = v;
  } else {
    g = 24;
    const f = 12, v = d ? f : o * f, x = d ? 0 : (1 - o) * f * 0.5, A = s.cellHorizontalPadding + 4;
    v > 0 && (r.moveTo(l + A + x, c + h / 2), r.lineTo(l + A + x + v, c + h / 2), r.moveTo(l + A + x + v * 0.5, c + h / 2 - v * 0.5), r.lineTo(l + A + x + v * 0.5, c + h / 2 + v * 0.5), r.lineWidth = 2, r.strokeStyle = s.bgIconHeader, r.lineCap = "round", r.stroke());
  }
  r.fillStyle = s.textMedium, r.fillText(t, g + l + s.cellHorizontalPadding + 0.5, c + h / 2 + tr(r, s)), r.beginPath();
}
const jw = p.lazy(async () => await import("/routelit/routelit_glide_data_grid/number-overlay-editor-BrMAcyH8.js")), Uw = {
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
      p.createElement(jw, { highlight: t, disabled: r.readonly === !0, value: r.data, fixedDecimals: r.fixedDecimals, allowNegative: r.allowNegative, thousandSeparator: r.thousandSeparator, decimalSeparator: r.decimalSeparator, validatedSelection: i, onChange: (o) => n({
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
}, Xw = {
  getAccessibilityString: () => "",
  measure: () => 108,
  kind: ae.Protected,
  needsHover: !1,
  needsHoverPosition: !1,
  draw: Gw,
  onPaste: () => {
  }
};
function Gw(e) {
  const { ctx: t, theme: n, rect: r } = e, { x: i, y: o, height: s } = r;
  t.beginPath();
  const a = 2.5;
  let l = i + n.cellHorizontalPadding + a;
  const c = o + s / 2, u = Math.cos(nf(30)) * a, h = Math.sin(nf(30)) * a;
  for (let d = 0; d < 12; d++)
    t.moveTo(l, c - a), t.lineTo(l, c + a), t.moveTo(l + u, c - h), t.lineTo(l - u, c + h), t.moveTo(l - u, c - h), t.lineTo(l + u, c + h), l += 8;
  t.lineWidth = 1.1, t.lineCap = "square", t.strokeStyle = n.textLight, t.stroke();
}
const Yw = {
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
    return St.createElement(Po, { highlight: t, autoFocus: r.readonly !== !0, disabled: r.readonly !== !1, value: r.data, validatedSelection: i, onChange: (o) => n({
      ...r,
      data: o.target.value
    }) });
  },
  onPaste: () => {
  }
}, Kw = {
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
      const d = s.cellHorizontalPadding, g = s.cellVerticalPadding, f = Ai(l, i, s.baseFontFull, "alphabetic"), v = o.height - g, x = Math.min(v, f.actualBoundingBoxAscent * 2.5);
      i.beginPath(), In(i, o.x + d / 2, o.y + (o.height - x) / 2 + 1, f.width + d * 3, x - 1, s.roundingRadius ?? 4), i.globalAlpha = n, i.fillStyle = hr(s.textDark, 0.1), i.fill(), i.globalAlpha = 1, i.fillStyle = s.textDark, i.textBaseline = "middle", a == null || a("text");
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
      return p.createElement(Po, { style: e.allowWrapping === !0 ? { padding: "3px 8.5px" } : void 0, highlight: n, autoFocus: i.readonly !== !0, disabled: i.readonly === !0, altNewline: !0, value: i.data, validatedSelection: o, onChange: (s) => r({
        ...i,
        data: s.target.value
      }) });
    }
  }),
  onPaste: (e, t, n) => e === t.data ? void 0 : { ...t, data: e, displayData: n.formattedString ?? t.displayData }
}, Vw = /* @__PURE__ */ an("div")({
  name: "UriOverlayEditorStyle",
  class: "gdg-u1rrojo",
  propsAsIs: !1
}), Zw = (e) => {
  const { uri: t, onChange: n, forceEditMode: r, readonly: i, validatedSelection: o, preview: s } = e, [a, l] = p.useState(!i && (t === "" || r)), c = p.useCallback(() => {
    l(!0);
  }, []);
  return a ? p.createElement(Po, { validatedSelection: o, highlight: !0, autoFocus: !0, value: t, onChange: n }) : p.createElement(
    Vw,
    null,
    p.createElement("a", { className: "gdg-link-area", href: t, target: "_blank", rel: "noopener noreferrer" }, s),
    !i && p.createElement(
      "div",
      { className: "gdg-edit-icon", onClick: c },
      p.createElement(Lc, null)
    ),
    p.createElement("textarea", { className: "gdg-input", autoFocus: !0 })
  );
};
function gg(e, t, n, r) {
  let i = n.cellHorizontalPadding;
  const o = t.height / 2 - e.actualBoundingBoxAscent / 2, s = e.width, a = e.actualBoundingBoxAscent;
  return r === "right" ? i = t.width - s - n.cellHorizontalPadding : r === "center" && (i = t.width / 2 - s / 2), { x: i, y: o, width: s, height: a };
}
const Jw = {
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
      const u = Ai(l, a, n.baseFontFull), h = gg(u, s, n, t.contentAlign), { x: d, y: g, width: f, height: v } = h;
      if (i >= d - 4 && i <= d - 4 + f + 8 && o >= g - 4 && o <= g - 4 + v + 8) {
        const x = tr(a, n.baseFontFull);
        r("pointer");
        const A = 5, y = g - x;
        a.beginPath(), a.moveTo(s.x + d, Math.floor(s.y + y + v + A) + 0.5), a.lineTo(s.x + d + f, Math.floor(s.y + y + v + A) + 0.5), a.strokeStyle = n.linkColor, a.stroke(), a.save(), a.fillStyle = e.cellFillColor, $n({ ...e, rect: { ...s, x: s.x - 1 } }, l, t.contentAlign), $n({ ...e, rect: { ...s, x: s.x - 2 } }, l, t.contentAlign), $n({ ...e, rect: { ...s, x: s.x + 1 } }, l, t.contentAlign), $n({ ...e, rect: { ...s, x: s.x + 2 } }, l, t.contentAlign), a.restore();
      }
    }
    a.fillStyle = c ? n.linkColor : n.textDark, $n(e, l, t.contentAlign);
  },
  onClick: (e) => {
    const { cell: t, bounds: n, posX: r, posY: i, theme: o } = e, s = t.displayData ?? t.data;
    if (t.hoverEffect !== !0 || t.onClickUri === void 0)
      return;
    const a = $1(s, o.baseFontFull);
    if (a === void 0)
      return;
    const l = gg(a, n, o, t.contentAlign);
    Do({
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
    return p.createElement(Zw, { forceEditMode: r.readonly !== !0 && (i || e.hoverEffect === !0 && e.onClickUri !== void 0), uri: r.data, preview: r.displayData ?? r.data, validatedSelection: o, readonly: r.readonly === !0, onChange: (s) => n({
      ...r,
      data: s.target.value
    }) });
  },
  onPaste: (e, t, n) => e === t.data ? void 0 : { ...t, data: e, displayData: n.formattedString ?? t.displayData }
}, Qw = [
  Hw,
  Bw,
  yw,
  Cw,
  Tw,
  Aw,
  Dw,
  qw,
  Uw,
  Xw,
  Yw,
  Kw,
  Jw
];
var ac, pg;
function eS() {
  if (pg) return ac;
  pg = 1;
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
  return ac = r, ac;
}
var tS = eS();
const nS = /* @__PURE__ */ er(tS), sc = [];
class rS extends ip {
  constructor() {
    super(...arguments);
    be(this, "imageLoaded", () => {
    });
    be(this, "loadedLocations", []);
    be(this, "cache", {});
    // eslint-disable-next-line unicorn/consistent-function-scoping
    be(this, "sendLoaded", nS(() => {
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
    const a = sc.pop() ?? new Image();
    let l = !1;
    const c = {
      img: void 0,
      cells: [kn(r, i)],
      url: n,
      cancel: () => {
        l || (l = !0, sc.length < 12 ? sc.unshift(a) : s || (a.src = ""));
      }
    }, u = new Promise((h) => a.addEventListener("load", () => h(null)));
    requestAnimationFrame(async () => {
      try {
        a.src = n, await u, await a.decode();
        const h = this.cache[o];
        if (h !== void 0 && !l) {
          h.img = a;
          for (const d of h.cells)
            this.loadedLocations.push(Yc(d));
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
const iS = (e, t) => {
  const n = p.useMemo(() => ({ ...Qv, ...e.headerIcons }), [e.headerIcons]), r = p.useMemo(() => e.imageWindowLoader ?? new rS(), [e.imageWindowLoader]);
  return p.createElement(vw, { ...e, renderers: Qw, headerIcons: n, ref: t, imageWindowLoader: r });
}, Op = p.forwardRef(iS);
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
const mg = {
  small: 80,
  medium: 150,
  large: 300
}, oS = (e, t, n) => {
  let r = e;
  return n && (r = n.filter((i) => e.includes(i))), r.map((i) => {
    const o = t == null ? void 0 : t[i];
    let s = i;
    typeof o == "object" && o !== null && "label" in o ? s = String(o.label) : typeof o == "string" && (s = o);
    let a = 150;
    if (typeof o == "object" && o !== null && "width" in o) {
      const c = o.width;
      typeof c == "number" ? a = c : typeof c == "string" && c in mg && (a = mg[c]);
    }
    let l;
    return typeof o == "object" && o !== null && "group" in o && (l = String(o.group)), {
      title: s,
      id: i,
      width: a,
      group: l
    };
  });
}, Lp = (e, t, n) => dr(() => oS(e, t, n), [e, t, n]), wc = (e) => {
  let t = rt.empty();
  if (e)
    for (const n of e)
      t = t.add(n);
  return t;
}, vg = (e) => ({
  rows: wc(e == null ? void 0 : e.rows),
  columns: wc(e == null ? void 0 : e.columns),
  current: e == null ? void 0 : e.current
}), Fp = (e = "auto", t = "stretch") => {
  const n = dr(() => e === "auto" ? 400 : e === "stretch" ? "100%" : e, [e]), r = dr(() => t === "stretch" ? "100%" : t, [t]);
  return { gridHeight: n, gridWidth: r };
}, qp = (e, t, n = "both") => dr(() => e ?? (t ? "none" : n), [e, t, n]), Hp = (e) => {
  const [t, n] = Cc(
    () => vg(e)
  );
  return kc(() => {
    e && n(vg(e));
  }, [e]), [t, n];
}, aS = ({
  data: e,
  columns: t,
  columnTypes: n,
  height: r = "auto",
  width: i = "stretch",
  hideIndex: o = !1,
  rowMarkers: s,
  rowHeight: a,
  selectionMode: l,
  columnConfig: c,
  placeholder: u,
  onSelect: h = "ignore",
  columnOrder: d,
  search: g,
  theme: f,
  freezeTrailingRows: v = 0,
  freezeColumns: x = 0,
  trailingRowOptions: A,
  selection: y,
  id: C
}) => {
  const P = yg(C, "select"), [b, M] = Hp(y), O = dr(() => {
    if (!g || g.trim() === "") return e;
    const S = g.toLowerCase();
    return e.filter(
      (z) => t.some(
        (H) => String(z[H] ?? "").toLowerCase().includes(S)
      )
    );
  }, [e, t, g]), E = Lp(t, c, d), _ = yi(
    (S) => {
      const [z, H] = S, B = O[H], ne = E[z].id, Z = B[ne], I = Z ?? u ?? "", N = n[ne], Y = c == null ? void 0 : c[ne];
      return {
        ...Dp(I, N, Y),
        readonly: !0
      };
    },
    [O, E, n, c, u]
  ), F = yi(
    (S) => {
      var ne;
      let z = S;
      if ((l === "single-row" || l === "multi-row" || Array.isArray(l) && l.includes("row")) && ((ne = S.current) == null ? void 0 : ne.cell) !== void 0) {
        const [Z, I] = S.current.cell;
        l === "single-row" ? z = {
          ...S,
          rows: wc([I])
        } : z = {
          ...S,
          rows: S.rows.add(I)
        };
      }
      if (M(z), h === "ignore") return;
      const B = {
        rows: z.rows.toArray(),
        columns: z.columns.toArray(),
        current: z.current
      };
      P(B);
    },
    [h, P, l, M]
  ), R = dr(() => {
    if (l === "multi-row") return "multi";
    if (l === "single-row") return "auto";
    if (Array.isArray(l) && l.includes("row")) return "multi";
  }, [l]), { gridHeight: w, gridWidth: k } = Fp(r, i), T = qp(s, o, "both");
  return /* @__PURE__ */ go("div", { style: { height: w, width: k }, children: /* @__PURE__ */ go(
    Op,
    {
      width: "100%",
      height: "100%",
      columns: E,
      rows: O.length,
      getCellContent: _,
      gridSelection: b,
      onGridSelectionChange: F,
      rowSelectionMode: R,
      rowHeight: a,
      rowMarkers: T,
      getCellsForSelection: !0,
      theme: f,
      freezeColumns: x,
      freezeTrailingRows: v,
      trailingRowOptions: A
    }
  ) });
}, sS = m0(
  ({
    data: e,
    columns: t,
    columnTypes: n,
    height: r = "auto",
    width: i = "stretch",
    hideIndex: o = !1,
    rowMarkers: s,
    rowHeight: a,
    numRows: l = "fixed",
    disabled: c = !1,
    columnConfig: u,
    onChange: h,
    columnOrder: d,
    freezeTrailingRows: g = 0,
    freezeColumns: f = 0,
    trailingRowOptions: v,
    selection: x,
    id: A
  }) => {
    const y = yg(A, "change"), [C, P] = Hp(x), [b, M] = Cc(e);
    kc(() => {
      M(e);
    }, [e]);
    const O = Lp(t, u, d), E = yi(
      (S) => {
        const [z, H] = S, B = b[H], ne = O[z].id, Z = B ? B[ne] : void 0, I = n[ne], N = u == null ? void 0 : u[ne], Y = Dp(Z, I, N);
        let re = !1;
        const $ = u == null ? void 0 : u[ne];
        return $ && $.disabled === !0 || c === !0 ? re = !0 : Array.isArray(c) && (re = c.includes(ne) || c.includes(z)), {
          ...Y,
          readonly: re || Y.readonly || !1
        };
      },
      [b, O, n, c, u]
    ), _ = yi(
      (S, z) => {
        const [H, B] = S, ne = O[H].id, Z = u == null ? void 0 : u[ne];
        let I = z.data;
        typeof I == "object" && I !== null && ("value" in I ? I = I.value : "values" in I ? I = I.values : "tags" in I && (I = I.tags));
        const N = n[ne];
        if (N === "int") {
          const $ = typeof I == "string" ? parseInt(I) : Number(I);
          if (isNaN($)) return;
          I = $;
        } else if (N === "float") {
          const $ = typeof I == "string" ? parseFloat(I) : Number(I);
          if (isNaN($)) return;
          I = $;
        }
        if (Z && (Z.min_value !== void 0 && I < Z.min_value || Z.max_value !== void 0 && I > Z.max_value || Z.max_chars !== void 0 && String(I).length > Z.max_chars))
          return;
        const Y = [...b], re = { ...Y[B] };
        re[ne] = I, Y[B] = re, M(Y), h !== "ignore" && y({ data: Y });
      },
      [
        b,
        O,
        n,
        u,
        h,
        y,
        A
      ]
    ), F = yi(() => {
      const S = {};
      t.forEach((H) => {
        const B = n[H];
        B === "int" || B === "float" ? S[H] = 0 : B === "bool" ? S[H] = !1 : S[H] = "";
      });
      const z = [...b, S];
      M(z), h !== "ignore" && y({ data: z });
    }, [b, t, n, h, y, A]), { gridHeight: R, gridWidth: w } = Fp(r, i), k = qp(s, o, "number"), T = dr(() => ({
      hint: "Add row",
      ...v
    }), [v]);
    return /* @__PURE__ */ go("div", { style: { height: R, width: w }, children: /* @__PURE__ */ go(
      Op,
      {
        width: "100%",
        height: "100%",
        columns: O,
        rows: b.length,
        getCellContent: E,
        onCellEdited: _,
        onRowAppended: l === "dynamic" || l === "add" ? F : void 0,
        gridSelection: C,
        onGridSelectionChange: P,
        rowHeight: a,
        rowMarkers: k,
        getCellsForSelection: !0,
        freezeColumns: f,
        freezeTrailingRows: g,
        trailingRowOptions: T
      }
    ) });
  }
), lS = () => {
  if (!document.getElementById("portal")) {
    const e = document.createElement("div");
    e.id = "portal", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.zIndex = "9999", document.body.appendChild(e);
  }
};
lS();
Sc.register("grid_data_grid", aS);
Sc.register("grid_data_editor", sS);
Sc.forceUpdate();
export {
  Bb as C,
  K1 as T,
  $r as a,
  J0 as b,
  Hr as i,
  Y1 as m,
  an as s
};
//# sourceMappingURL=index-CSX6Xy1G.js.map
