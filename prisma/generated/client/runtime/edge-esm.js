var ia = Object.create;
var rr = Object.defineProperty;
var oa = Object.getOwnPropertyDescriptor;
var sa = Object.getOwnPropertyNames;
var aa = Object.getPrototypeOf,
  ua = Object.prototype.hasOwnProperty;
var Pt = ((e) =>
  typeof require != "undefined"
    ? require
    : typeof Proxy != "undefined"
    ? new Proxy(e, {
        get: (t, r) => (typeof require != "undefined" ? require : t)[r],
      })
    : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var Ee = (e, t) => () => (e && (t = e((e = 0))), t);
var Ae = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  nr = (e, t) => {
    for (var r in t) rr(e, r, { get: t[r], enumerable: !0 });
  },
  Qn = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of sa(t))
        !ua.call(e, i) &&
          i !== r &&
          rr(e, i, {
            get: () => t[i],
            enumerable: !(n = oa(t, i)) || n.enumerable,
          });
    return e;
  };
var Ue = (e, t, r) => (
    (r = e != null ? ia(aa(e)) : {}),
    Qn(
      t || !e || !e.__esModule
        ? rr(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  Gn = (e) => Qn(rr({}, "__esModule", { value: !0 }), e);
var y,
  c = Ee(() => {
    "use strict";
    y = {
      nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      },
      env: {},
      version: "",
      cwd: () => "/",
      stderr: {},
      argv: ["/bin/node"],
    };
  });
var Hn,
  b,
  p = Ee(() => {
    "use strict";
    b =
      (Hn = globalThis.performance) != null
        ? Hn
        : (() => {
            let e = Date.now();
            return { now: () => Date.now() - e };
          })();
  });
var E,
  f = Ee(() => {
    "use strict";
    E = () => {};
    E.prototype = E;
  });
var m = Ee(() => {
  "use strict";
});
var fi = Ae((rt) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  var Zn = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    la = Zn((e) => {
      "use strict";
      (e.byteLength = u), (e.toByteArray = g), (e.fromByteArray = S);
      var t = [],
        r = [],
        n = typeof Uint8Array < "u" ? Uint8Array : Array,
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (o = 0, s = i.length; o < s; ++o)
        (t[o] = i[o]), (r[i.charCodeAt(o)] = o);
      var o, s;
      (r[45] = 62), (r[95] = 63);
      function a(C) {
        var A = C.length;
        if (A % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var k = C.indexOf("=");
        k === -1 && (k = A);
        var O = k === A ? 0 : 4 - (k % 4);
        return [k, O];
      }
      function u(C) {
        var A = a(C),
          k = A[0],
          O = A[1];
        return ((k + O) * 3) / 4 - O;
      }
      function l(C, A, k) {
        return ((A + k) * 3) / 4 - k;
      }
      function g(C) {
        var A,
          k = a(C),
          O = k[0],
          B = k[1],
          M = new n(l(C, O, B)),
          I = 0,
          Z = B > 0 ? O - 4 : O,
          L;
        for (L = 0; L < Z; L += 4)
          (A =
            (r[C.charCodeAt(L)] << 18) |
            (r[C.charCodeAt(L + 1)] << 12) |
            (r[C.charCodeAt(L + 2)] << 6) |
            r[C.charCodeAt(L + 3)]),
            (M[I++] = (A >> 16) & 255),
            (M[I++] = (A >> 8) & 255),
            (M[I++] = A & 255);
        return (
          B === 2 &&
            ((A = (r[C.charCodeAt(L)] << 2) | (r[C.charCodeAt(L + 1)] >> 4)),
            (M[I++] = A & 255)),
          B === 1 &&
            ((A =
              (r[C.charCodeAt(L)] << 10) |
              (r[C.charCodeAt(L + 1)] << 4) |
              (r[C.charCodeAt(L + 2)] >> 2)),
            (M[I++] = (A >> 8) & 255),
            (M[I++] = A & 255)),
          M
        );
      }
      function h(C) {
        return (
          t[(C >> 18) & 63] + t[(C >> 12) & 63] + t[(C >> 6) & 63] + t[C & 63]
        );
      }
      function x(C, A, k) {
        for (var O, B = [], M = A; M < k; M += 3)
          (O =
            ((C[M] << 16) & 16711680) +
            ((C[M + 1] << 8) & 65280) +
            (C[M + 2] & 255)),
            B.push(h(O));
        return B.join("");
      }
      function S(C) {
        for (
          var A, k = C.length, O = k % 3, B = [], M = 16383, I = 0, Z = k - O;
          I < Z;
          I += M
        )
          B.push(x(C, I, I + M > Z ? Z : I + M));
        return (
          O === 1
            ? ((A = C[k - 1]), B.push(t[A >> 2] + t[(A << 4) & 63] + "=="))
            : O === 2 &&
              ((A = (C[k - 2] << 8) + C[k - 1]),
              B.push(t[A >> 10] + t[(A >> 4) & 63] + t[(A << 2) & 63] + "=")),
          B.join("")
        );
      }
    }),
    ca = Zn((e) => {
      (e.read = function (t, r, n, i, o) {
        var s,
          a,
          u = o * 8 - i - 1,
          l = (1 << u) - 1,
          g = l >> 1,
          h = -7,
          x = n ? o - 1 : 0,
          S = n ? -1 : 1,
          C = t[r + x];
        for (
          x += S, s = C & ((1 << -h) - 1), C >>= -h, h += u;
          h > 0;
          s = s * 256 + t[r + x], x += S, h -= 8
        );
        for (
          a = s & ((1 << -h) - 1), s >>= -h, h += i;
          h > 0;
          a = a * 256 + t[r + x], x += S, h -= 8
        );
        if (s === 0) s = 1 - g;
        else {
          if (s === l) return a ? NaN : (C ? -1 : 1) * (1 / 0);
          (a = a + Math.pow(2, i)), (s = s - g);
        }
        return (C ? -1 : 1) * a * Math.pow(2, s - i);
      }),
        (e.write = function (t, r, n, i, o, s) {
          var a,
            u,
            l,
            g = s * 8 - o - 1,
            h = (1 << g) - 1,
            x = h >> 1,
            S = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            C = i ? 0 : s - 1,
            A = i ? 1 : -1,
            k = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? ((u = isNaN(r) ? 1 : 0), (a = h))
                : ((a = Math.floor(Math.log(r) / Math.LN2)),
                  r * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                  a + x >= 1 ? (r += S / l) : (r += S * Math.pow(2, 1 - x)),
                  r * l >= 2 && (a++, (l /= 2)),
                  a + x >= h
                    ? ((u = 0), (a = h))
                    : a + x >= 1
                    ? ((u = (r * l - 1) * Math.pow(2, o)), (a = a + x))
                    : ((u = r * Math.pow(2, x - 1) * Math.pow(2, o)), (a = 0)));
            o >= 8;
            t[n + C] = u & 255, C += A, u /= 256, o -= 8
          );
          for (
            a = (a << o) | u, g += o;
            g > 0;
            t[n + C] = a & 255, C += A, a /= 256, g -= 8
          );
          t[n + C - A] |= k * 128;
        });
    }),
    Qr = la(),
    et = ca(),
    Wn =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  rt.Buffer = T;
  rt.SlowBuffer = ha;
  rt.INSPECT_MAX_BYTES = 50;
  var ir = 2147483647;
  rt.kMaxLength = ir;
  T.TYPED_ARRAY_SUPPORT = pa();
  !T.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
  function pa() {
    try {
      let e = new Uint8Array(1),
        t = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(e, t),
        e.foo() === 42
      );
    } catch (e) {
      return !1;
    }
  }
  Object.defineProperty(T.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(T.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.byteOffset;
    },
  });
  function be(e) {
    if (e > ir)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"'
      );
    let t = new Uint8Array(e);
    return Object.setPrototypeOf(t, T.prototype), t;
  }
  function T(e, t, r) {
    if (typeof e == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return Wr(e);
    }
    return Xn(e, t, r);
  }
  T.poolSize = 8192;
  function Xn(e, t, r) {
    if (typeof e == "string") return ma(e, t);
    if (ArrayBuffer.isView(e)) return da(e);
    if (e == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof e
      );
    if (
      me(e, ArrayBuffer) ||
      (e && me(e.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (me(e, SharedArrayBuffer) || (e && me(e.buffer, SharedArrayBuffer))))
    )
      return ti(e, t, r);
    if (typeof e == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    let n = e.valueOf && e.valueOf();
    if (n != null && n !== e) return T.from(n, t, r);
    let i = ga(e);
    if (i) return i;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == "function"
    )
      return T.from(e[Symbol.toPrimitive]("string"), t, r);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof e
    );
  }
  T.from = function (e, t, r) {
    return Xn(e, t, r);
  };
  Object.setPrototypeOf(T.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(T, Uint8Array);
  function ei(e) {
    if (typeof e != "number")
      throw new TypeError('"size" argument must be of type number');
    if (e < 0)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"'
      );
  }
  function fa(e, t, r) {
    return (
      ei(e),
      e <= 0
        ? be(e)
        : t !== void 0
        ? typeof r == "string"
          ? be(e).fill(t, r)
          : be(e).fill(t)
        : be(e)
    );
  }
  T.alloc = function (e, t, r) {
    return fa(e, t, r);
  };
  function Wr(e) {
    return ei(e), be(e < 0 ? 0 : Kr(e) | 0);
  }
  T.allocUnsafe = function (e) {
    return Wr(e);
  };
  T.allocUnsafeSlow = function (e) {
    return Wr(e);
  };
  function ma(e, t) {
    if (((typeof t != "string" || t === "") && (t = "utf8"), !T.isEncoding(t)))
      throw new TypeError("Unknown encoding: " + t);
    let r = ri(e, t) | 0,
      n = be(r),
      i = n.write(e, t);
    return i !== r && (n = n.slice(0, i)), n;
  }
  function Gr(e) {
    let t = e.length < 0 ? 0 : Kr(e.length) | 0,
      r = be(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
    return r;
  }
  function da(e) {
    if (me(e, Uint8Array)) {
      let t = new Uint8Array(e);
      return ti(t.buffer, t.byteOffset, t.byteLength);
    }
    return Gr(e);
  }
  function ti(e, t, r) {
    if (t < 0 || e.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      t === void 0 && r === void 0
        ? (n = new Uint8Array(e))
        : r === void 0
        ? (n = new Uint8Array(e, t))
        : (n = new Uint8Array(e, t, r)),
      Object.setPrototypeOf(n, T.prototype),
      n
    );
  }
  function ga(e) {
    if (T.isBuffer(e)) {
      let t = Kr(e.length) | 0,
        r = be(t);
      return r.length === 0 || e.copy(r, 0, 0, t), r;
    }
    if (e.length !== void 0)
      return typeof e.length != "number" || Yr(e.length) ? be(0) : Gr(e);
    if (e.type === "Buffer" && Array.isArray(e.data)) return Gr(e.data);
  }
  function Kr(e) {
    if (e >= ir)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          ir.toString(16) +
          " bytes"
      );
    return e | 0;
  }
  function ha(e) {
    return +e != e && (e = 0), T.alloc(+e);
  }
  T.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== T.prototype;
  };
  T.compare = function (e, t) {
    if (
      (me(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      me(t, Uint8Array) && (t = T.from(t, t.offset, t.byteLength)),
      !T.isBuffer(e) || !T.isBuffer(t))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (e === t) return 0;
    let r = e.length,
      n = t.length;
    for (let i = 0, o = Math.min(r, n); i < o; ++i)
      if (e[i] !== t[i]) {
        (r = e[i]), (n = t[i]);
        break;
      }
    return r < n ? -1 : n < r ? 1 : 0;
  };
  T.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  T.concat = function (e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return T.alloc(0);
    let r;
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
    let n = T.allocUnsafe(t),
      i = 0;
    for (r = 0; r < e.length; ++r) {
      let o = e[r];
      if (me(o, Uint8Array))
        i + o.length > n.length
          ? (T.isBuffer(o) || (o = T.from(o)), o.copy(n, i))
          : Uint8Array.prototype.set.call(n, o, i);
      else if (T.isBuffer(o)) o.copy(n, i);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      i += o.length;
    }
    return n;
  };
  function ri(e, t) {
    if (T.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || me(e, ArrayBuffer)) return e.byteLength;
    if (typeof e != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof e
      );
    let r = e.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && r === 0) return 0;
    let i = !1;
    for (;;)
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return Hr(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return pi(e).length;
        default:
          if (i) return n ? -1 : Hr(e).length;
          (t = ("" + t).toLowerCase()), (i = !0);
      }
  }
  T.byteLength = ri;
  function ya(e, t, r) {
    let n = !1;
    if (
      ((t === void 0 || t < 0) && (t = 0),
      t > this.length ||
        ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
        ((r >>>= 0), (t >>>= 0), r <= t))
    )
      return "";
    for (e || (e = "utf8"); ; )
      switch (e) {
        case "hex":
          return Ra(this, t, r);
        case "utf8":
        case "utf-8":
          return ii(this, t, r);
        case "ascii":
          return Ca(this, t, r);
        case "latin1":
        case "binary":
          return Aa(this, t, r);
        case "base64":
          return va(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Sa(this, t, r);
        default:
          if (n) throw new TypeError("Unknown encoding: " + e);
          (e = (e + "").toLowerCase()), (n = !0);
      }
  }
  T.prototype._isBuffer = !0;
  function Ve(e, t, r) {
    let n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  T.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < e; t += 2) Ve(this, t, t + 1);
    return this;
  };
  T.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < e; t += 4) Ve(this, t, t + 3), Ve(this, t + 1, t + 2);
    return this;
  };
  T.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < e; t += 8)
      Ve(this, t, t + 7),
        Ve(this, t + 1, t + 6),
        Ve(this, t + 2, t + 5),
        Ve(this, t + 3, t + 4);
    return this;
  };
  T.prototype.toString = function () {
    let e = this.length;
    return e === 0
      ? ""
      : arguments.length === 0
      ? ii(this, 0, e)
      : ya.apply(this, arguments);
  };
  T.prototype.toLocaleString = T.prototype.toString;
  T.prototype.equals = function (e) {
    if (!T.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : T.compare(this, e) === 0;
  };
  T.prototype.inspect = function () {
    let e = "",
      t = rt.INSPECT_MAX_BYTES;
    return (
      (e = this.toString("hex", 0, t)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > t && (e += " ... "),
      "<Buffer " + e + ">"
    );
  };
  Wn && (T.prototype[Wn] = T.prototype.inspect);
  T.prototype.compare = function (e, t, r, n, i) {
    if (
      (me(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      !T.isBuffer(e))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e
      );
    if (
      (t === void 0 && (t = 0),
      r === void 0 && (r = e ? e.length : 0),
      n === void 0 && (n = 0),
      i === void 0 && (i = this.length),
      t < 0 || r > e.length || n < 0 || i > this.length)
    )
      throw new RangeError("out of range index");
    if (n >= i && t >= r) return 0;
    if (n >= i) return -1;
    if (t >= r) return 1;
    if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e)) return 0;
    let o = i - n,
      s = r - t,
      a = Math.min(o, s),
      u = this.slice(n, i),
      l = e.slice(t, r);
    for (let g = 0; g < a; ++g)
      if (u[g] !== l[g]) {
        (o = u[g]), (s = l[g]);
        break;
      }
    return o < s ? -1 : s < o ? 1 : 0;
  };
  function ni(e, t, r, n, i) {
    if (e.length === 0) return -1;
    if (
      (typeof r == "string"
        ? ((n = r), (r = 0))
        : r > 2147483647
        ? (r = 2147483647)
        : r < -2147483648 && (r = -2147483648),
      (r = +r),
      Yr(r) && (r = i ? 0 : e.length - 1),
      r < 0 && (r = e.length + r),
      r >= e.length)
    ) {
      if (i) return -1;
      r = e.length - 1;
    } else if (r < 0)
      if (i) r = 0;
      else return -1;
    if ((typeof t == "string" && (t = T.from(t, n)), T.isBuffer(t)))
      return t.length === 0 ? -1 : Kn(e, t, r, n, i);
    if (typeof t == "number")
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? i
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : Kn(e, [t], r, n, i)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function Kn(e, t, r, n, i) {
    let o = 1,
      s = e.length,
      a = t.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      (o = 2), (s /= 2), (a /= 2), (r /= 2);
    }
    function u(g, h) {
      return o === 1 ? g[h] : g.readUInt16BE(h * o);
    }
    let l;
    if (i) {
      let g = -1;
      for (l = r; l < s; l++)
        if (u(e, l) === u(t, g === -1 ? 0 : l - g)) {
          if ((g === -1 && (g = l), l - g + 1 === a)) return g * o;
        } else g !== -1 && (l -= l - g), (g = -1);
    } else
      for (r + a > s && (r = s - a), l = r; l >= 0; l--) {
        let g = !0;
        for (let h = 0; h < a; h++)
          if (u(e, l + h) !== u(t, h)) {
            g = !1;
            break;
          }
        if (g) return l;
      }
    return -1;
  }
  T.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1;
  };
  T.prototype.indexOf = function (e, t, r) {
    return ni(this, e, t, r, !0);
  };
  T.prototype.lastIndexOf = function (e, t, r) {
    return ni(this, e, t, r, !1);
  };
  function wa(e, t, r, n) {
    r = Number(r) || 0;
    let i = e.length - r;
    n ? ((n = Number(n)), n > i && (n = i)) : (n = i);
    let o = t.length;
    n > o / 2 && (n = o / 2);
    let s;
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16);
      if (Yr(a)) return s;
      e[r + s] = a;
    }
    return s;
  }
  function Ea(e, t, r, n) {
    return or(Hr(t, e.length - r), e, r, n);
  }
  function ba(e, t, r, n) {
    return or(Oa(t), e, r, n);
  }
  function xa(e, t, r, n) {
    return or(pi(t), e, r, n);
  }
  function Pa(e, t, r, n) {
    return or(Ma(t, e.length - r), e, r, n);
  }
  T.prototype.write = function (e, t, r, n) {
    if (t === void 0) (n = "utf8"), (r = this.length), (t = 0);
    else if (r === void 0 && typeof t == "string")
      (n = t), (r = this.length), (t = 0);
    else if (isFinite(t))
      (t = t >>> 0),
        isFinite(r)
          ? ((r = r >>> 0), n === void 0 && (n = "utf8"))
          : ((n = r), (r = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    let i = this.length - t;
    if (
      ((r === void 0 || r > i) && (r = i),
      (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    let o = !1;
    for (;;)
      switch (n) {
        case "hex":
          return wa(this, e, t, r);
        case "utf8":
        case "utf-8":
          return Ea(this, e, t, r);
        case "ascii":
        case "latin1":
        case "binary":
          return ba(this, e, t, r);
        case "base64":
          return xa(this, e, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Pa(this, e, t, r);
        default:
          if (o) throw new TypeError("Unknown encoding: " + n);
          (n = ("" + n).toLowerCase()), (o = !0);
      }
  };
  T.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function va(e, t, r) {
    return t === 0 && r === e.length
      ? Qr.fromByteArray(e)
      : Qr.fromByteArray(e.slice(t, r));
  }
  function ii(e, t, r) {
    r = Math.min(e.length, r);
    let n = [],
      i = t;
    for (; i < r; ) {
      let o = e[i],
        s = null,
        a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (i + a <= r) {
        let u, l, g, h;
        switch (a) {
          case 1:
            o < 128 && (s = o);
            break;
          case 2:
            (u = e[i + 1]),
              (u & 192) === 128 &&
                ((h = ((o & 31) << 6) | (u & 63)), h > 127 && (s = h));
            break;
          case 3:
            (u = e[i + 1]),
              (l = e[i + 2]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                ((h = ((o & 15) << 12) | ((u & 63) << 6) | (l & 63)),
                h > 2047 && (h < 55296 || h > 57343) && (s = h));
            break;
          case 4:
            (u = e[i + 1]),
              (l = e[i + 2]),
              (g = e[i + 3]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                (g & 192) === 128 &&
                ((h =
                  ((o & 15) << 18) |
                  ((u & 63) << 12) |
                  ((l & 63) << 6) |
                  (g & 63)),
                h > 65535 && h < 1114112 && (s = h));
        }
      }
      s === null
        ? ((s = 65533), (a = 1))
        : s > 65535 &&
          ((s -= 65536),
          n.push(((s >>> 10) & 1023) | 55296),
          (s = 56320 | (s & 1023))),
        n.push(s),
        (i += a);
    }
    return Ta(n);
  }
  var zn = 4096;
  function Ta(e) {
    let t = e.length;
    if (t <= zn) return String.fromCharCode.apply(String, e);
    let r = "",
      n = 0;
    for (; n < t; )
      r += String.fromCharCode.apply(String, e.slice(n, (n += zn)));
    return r;
  }
  function Ca(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i] & 127);
    return n;
  }
  function Aa(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
    return n;
  }
  function Ra(e, t, r) {
    let n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    let i = "";
    for (let o = t; o < r; ++o) i += Na[e[o]];
    return i;
  }
  function Sa(e, t, r) {
    let n = e.slice(t, r),
      i = "";
    for (let o = 0; o < n.length - 1; o += 2)
      i += String.fromCharCode(n[o] + n[o + 1] * 256);
    return i;
  }
  T.prototype.slice = function (e, t) {
    let r = this.length;
    (e = ~~e),
      (t = t === void 0 ? r : ~~t),
      e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e);
    let n = this.subarray(e, t);
    return Object.setPrototypeOf(n, T.prototype), n;
  };
  function W(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r)
      throw new RangeError("Trying to access beyond buffer length");
  }
  T.prototype.readUintLE = T.prototype.readUIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return n;
  };
  T.prototype.readUintBE = T.prototype.readUIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e + --t],
      i = 1;
    for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
    return n;
  };
  T.prototype.readUint8 = T.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || W(e, 1, this.length), this[e];
  };
  T.prototype.readUint16LE = T.prototype.readUInt16LE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 2, this.length), this[e] | (this[e + 1] << 8)
    );
  };
  T.prototype.readUint16BE = T.prototype.readUInt16BE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 2, this.length), (this[e] << 8) | this[e + 1]
    );
  };
  T.prototype.readUint32LE = T.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        this[e + 3] * 16777216
    );
  };
  T.prototype.readUint32BE = T.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      this[e] * 16777216 +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  };
  T.prototype.readBigUInt64LE = Re(function (e) {
    (e = e >>> 0), tt(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && vt(e, this.length - 8);
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
    return BigInt(n) + (BigInt(i) << BigInt(32));
  });
  T.prototype.readBigUInt64BE = Re(function (e) {
    (e = e >>> 0), tt(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && vt(e, this.length - 8);
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
    return (BigInt(n) << BigInt(32)) + BigInt(i);
  });
  T.prototype.readIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n;
  };
  T.prototype.readIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = t,
      i = 1,
      o = this[e + --n];
    for (; n > 0 && (i *= 256); ) o += this[e + --n] * i;
    return (i *= 128), o >= i && (o -= Math.pow(2, 8 * t)), o;
  };
  T.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    );
  };
  T.prototype.readInt16LE = function (e, t) {
    (e = e >>> 0), t || W(e, 2, this.length);
    let r = this[e] | (this[e + 1] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  T.prototype.readInt16BE = function (e, t) {
    (e = e >>> 0), t || W(e, 2, this.length);
    let r = this[e + 1] | (this[e] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  T.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  };
  T.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  };
  T.prototype.readBigInt64LE = Re(function (e) {
    (e = e >>> 0), tt(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && vt(e, this.length - 8);
    let n =
      this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    );
  });
  T.prototype.readBigInt64BE = Re(function (e) {
    (e = e >>> 0), tt(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && vt(e, this.length - 8);
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r)
    );
  });
  T.prototype.readFloatLE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 4, this.length), et.read(this, e, !0, 23, 4)
    );
  };
  T.prototype.readFloatBE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 4, this.length), et.read(this, e, !1, 23, 4)
    );
  };
  T.prototype.readDoubleLE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 8, this.length), et.read(this, e, !0, 52, 8)
    );
  };
  T.prototype.readDoubleBE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 8, this.length), et.read(this, e, !1, 52, 8)
    );
  };
  function ie(e, t, r, n, i, o) {
    if (!T.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds');
    if (r + n > e.length) throw new RangeError("Index out of range");
  }
  T.prototype.writeUintLE = T.prototype.writeUIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      ie(this, e, t, r, s, 0);
    }
    let i = 1,
      o = 0;
    for (this[t] = e & 255; ++o < r && (i *= 256); )
      this[t + o] = (e / i) & 255;
    return t + r;
  };
  T.prototype.writeUintBE = T.prototype.writeUIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      ie(this, e, t, r, s, 0);
    }
    let i = r - 1,
      o = 1;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      this[t + i] = (e / o) & 255;
    return t + r;
  };
  T.prototype.writeUint8 = T.prototype.writeUInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 1, 255, 0),
      (this[t] = e & 255),
      t + 1
    );
  };
  T.prototype.writeUint16LE = T.prototype.writeUInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  T.prototype.writeUint16BE = T.prototype.writeUInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  T.prototype.writeUint32LE = T.prototype.writeUInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    );
  };
  T.prototype.writeUint32BE = T.prototype.writeUInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  function oi(e, t, r, n, i) {
    ci(t, n, i, e, r, 7);
    let o = Number(t & BigInt(4294967295));
    (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      r
    );
  }
  function si(e, t, r, n, i) {
    ci(t, n, i, e, r, 7);
    let o = Number(t & BigInt(4294967295));
    (e[r + 7] = o),
      (o = o >> 8),
      (e[r + 6] = o),
      (o = o >> 8),
      (e[r + 5] = o),
      (o = o >> 8),
      (e[r + 4] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r + 3] = s),
      (s = s >> 8),
      (e[r + 2] = s),
      (s = s >> 8),
      (e[r + 1] = s),
      (s = s >> 8),
      (e[r] = s),
      r + 8
    );
  }
  T.prototype.writeBigUInt64LE = Re(function (e, t = 0) {
    return oi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  T.prototype.writeBigUInt64BE = Re(function (e, t = 0) {
    return si(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  T.prototype.writeIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      ie(this, e, t, r, a - 1, -a);
    }
    let i = 0,
      o = 1,
      s = 0;
    for (this[t] = e & 255; ++i < r && (o *= 256); )
      e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  T.prototype.writeIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      ie(this, e, t, r, a - 1, -a);
    }
    let i = r - 1,
      o = 1,
      s = 0;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  T.prototype.writeInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    );
  };
  T.prototype.writeInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  T.prototype.writeInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  T.prototype.writeInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    );
  };
  T.prototype.writeInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  T.prototype.writeBigInt64LE = Re(function (e, t = 0) {
    return oi(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  });
  T.prototype.writeBigInt64BE = Re(function (e, t = 0) {
    return si(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  });
  function ai(e, t, r, n, i, o) {
    if (r + n > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  function ui(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || ai(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      et.write(e, t, r, n, 23, 4),
      r + 4
    );
  }
  T.prototype.writeFloatLE = function (e, t, r) {
    return ui(this, e, t, !0, r);
  };
  T.prototype.writeFloatBE = function (e, t, r) {
    return ui(this, e, t, !1, r);
  };
  function li(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || ai(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      et.write(e, t, r, n, 52, 8),
      r + 8
    );
  }
  T.prototype.writeDoubleLE = function (e, t, r) {
    return li(this, e, t, !0, r);
  };
  T.prototype.writeDoubleBE = function (e, t, r) {
    return li(this, e, t, !1, r);
  };
  T.prototype.copy = function (e, t, r, n) {
    if (!T.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (
      (r || (r = 0),
      !n && n !== 0 && (n = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      n > 0 && n < r && (n = r),
      n === r || e.length === 0 || this.length === 0)
    )
      return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      e.length - t < n - r && (n = e.length - t + r);
    let i = n - r;
    return (
      this === e && typeof Uint8Array.prototype.copyWithin == "function"
        ? this.copyWithin(t, r, n)
        : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
      i
    );
  };
  T.prototype.fill = function (e, t, r, n) {
    if (typeof e == "string") {
      if (
        (typeof t == "string"
          ? ((n = t), (t = 0), (r = this.length))
          : typeof r == "string" && ((n = r), (r = this.length)),
        n !== void 0 && typeof n != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof n == "string" && !T.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
      if (e.length === 1) {
        let o = e.charCodeAt(0);
        ((n === "utf8" && o < 128) || n === "latin1") && (e = o);
      }
    } else
      typeof e == "number"
        ? (e = e & 255)
        : typeof e == "boolean" && (e = Number(e));
    if (t < 0 || this.length < t || this.length < r)
      throw new RangeError("Out of range index");
    if (r <= t) return this;
    (t = t >>> 0), (r = r === void 0 ? this.length : r >>> 0), e || (e = 0);
    let i;
    if (typeof e == "number") for (i = t; i < r; ++i) this[i] = e;
    else {
      let o = T.isBuffer(e) ? e : T.from(e, n),
        s = o.length;
      if (s === 0)
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"'
        );
      for (i = 0; i < r - t; ++i) this[i + t] = o[i % s];
    }
    return this;
  };
  var Xe = {};
  function zr(e, t, r) {
    Xe[e] = class extends r {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${e}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return e;
      }
      set code(n) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  zr(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (e) {
      return e
        ? `${e} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  );
  zr(
    "ERR_INVALID_ARG_TYPE",
    function (e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError
  );
  zr(
    "ERR_OUT_OF_RANGE",
    function (e, t, r) {
      let n = `The value of "${e}" is out of range.`,
        i = r;
      return (
        Number.isInteger(r) && Math.abs(r) > 2 ** 32
          ? (i = Yn(String(r)))
          : typeof r == "bigint" &&
            ((i = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (i = Yn(i)),
            (i += "n")),
        (n += ` It must be ${t}. Received ${i}`),
        n
      );
    },
    RangeError
  );
  function Yn(e) {
    let t = "",
      r = e.length,
      n = e[0] === "-" ? 1 : 0;
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
    return `${e.slice(0, r)}${t}`;
  }
  function Ia(e, t, r) {
    tt(t, "offset"),
      (e[t] === void 0 || e[t + r] === void 0) && vt(t, e.length - (r + 1));
  }
  function ci(e, t, r, n, i, o) {
    if (e > r || e < t) {
      let s = typeof t == "bigint" ? "n" : "",
        a;
      throw (
        (o > 3
          ? t === 0 || t === BigInt(0)
            ? (a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}`)
            : (a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${
                (o + 1) * 8 - 1
              }${s}`)
          : (a = `>= ${t}${s} and <= ${r}${s}`),
        new Xe.ERR_OUT_OF_RANGE("value", a, e))
      );
    }
    Ia(n, i, o);
  }
  function tt(e, t) {
    if (typeof e != "number") throw new Xe.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
  function vt(e, t, r) {
    throw Math.floor(e) !== e
      ? (tt(e, r), new Xe.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
      : t < 0
      ? new Xe.ERR_BUFFER_OUT_OF_BOUNDS()
      : new Xe.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${r ? 1 : 0} and <= ${t}`,
          e
        );
  }
  var Da = /[^+/0-9A-Za-z-_]/g;
  function ka(e) {
    if (((e = e.split("=")[0]), (e = e.trim().replace(Da, "")), e.length < 2))
      return "";
    for (; e.length % 4 !== 0; ) e = e + "=";
    return e;
  }
  function Hr(e, t) {
    t = t || 1 / 0;
    let r,
      n = e.length,
      i = null,
      o = [];
    for (let s = 0; s < n; ++s) {
      if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
        if (!i) {
          if (r > 56319) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (s + 1 === n) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          i = r;
          continue;
        }
        if (r < 56320) {
          (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
          continue;
        }
        r = (((i - 55296) << 10) | (r - 56320)) + 65536;
      } else i && (t -= 3) > -1 && o.push(239, 191, 189);
      if (((i = null), r < 128)) {
        if ((t -= 1) < 0) break;
        o.push(r);
      } else if (r < 2048) {
        if ((t -= 2) < 0) break;
        o.push((r >> 6) | 192, (r & 63) | 128);
      } else if (r < 65536) {
        if ((t -= 3) < 0) break;
        o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (r & 63) | 128);
      } else if (r < 1114112) {
        if ((t -= 4) < 0) break;
        o.push(
          (r >> 18) | 240,
          ((r >> 12) & 63) | 128,
          ((r >> 6) & 63) | 128,
          (r & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return o;
  }
  function Oa(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
    return t;
  }
  function Ma(e, t) {
    let r,
      n,
      i,
      o = [];
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
      (r = e.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n);
    return o;
  }
  function pi(e) {
    return Qr.toByteArray(ka(e));
  }
  function or(e, t, r, n) {
    let i;
    for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
      t[i + r] = e[i];
    return i;
  }
  function me(e, t) {
    return (
      e instanceof t ||
      (e != null &&
        e.constructor != null &&
        e.constructor.name != null &&
        e.constructor.name === t.name)
    );
  }
  function Yr(e) {
    return e !== e;
  }
  var Na = (function () {
    let e = "0123456789abcdef",
      t = new Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
    }
    return t;
  })();
  function Re(e) {
    return typeof BigInt > "u" ? _a : e;
  }
  function _a() {
    throw new Error("BigInt not supported");
  }
});
var w,
  d = Ee(() => {
    "use strict";
    w = Ue(fi());
  });
function Fa() {
  return !1;
}
var La,
  Ba,
  wi,
  Ei = Ee(() => {
    "use strict";
    d();
    c();
    p();
    f();
    m();
    (La = {}), (Ba = { existsSync: Fa, promises: La }), (wi = Ba);
  });
var ki = Ae((df, Di) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  Di.exports = (en(), Gn(Xr)).format;
});
var Xr = {};
nr(Xr, {
  default: () => Ua,
  deprecate: () => Mi,
  format: () => _i,
  inspect: () => Ni,
  promisify: () => Oi,
});
function Oi(e) {
  return (...t) =>
    new Promise((r, n) => {
      e(...t, (i, o) => {
        i ? n(i) : r(o);
      });
    });
}
function Mi(e, t) {
  return (...r) => (console.warn(t), e(...r));
}
function Ni(e) {
  return JSON.stringify(e, (t, r) =>
    typeof r == "function"
      ? r.toString()
      : typeof r == "bigint"
      ? `${r}n`
      : r instanceof Error
      ? { ...r, message: r.message, stack: r.stack }
      : r
  );
}
var _i,
  qa,
  Ua,
  en = Ee(() => {
    "use strict";
    d();
    c();
    p();
    f();
    m();
    (_i = ki()),
      (qa = { promisify: Oi, deprecate: Mi, inspect: Ni, format: _i }),
      (Ua = qa);
  });
function Ga(...e) {
  return e.join("/");
}
function Ha(...e) {
  return e.join("/");
}
var ji,
  Wa,
  Ka,
  Ct,
  Ji = Ee(() => {
    "use strict";
    d();
    c();
    p();
    f();
    m();
    (ji = "/"),
      (Wa = { sep: ji }),
      (Ka = { resolve: Ga, posix: Wa, join: Ha, sep: ji }),
      (Ct = Ka);
  });
var lr,
  Gi = Ee(() => {
    "use strict";
    d();
    c();
    p();
    f();
    m();
    lr = class {
      constructor() {
        this.events = {};
      }
      on(t, r) {
        return (
          this.events[t] || (this.events[t] = []), this.events[t].push(r), this
        );
      }
      emit(t, ...r) {
        return this.events[t]
          ? (this.events[t].forEach((n) => {
              n(...r);
            }),
            !0)
          : !1;
      }
    };
  });
var Wi = Ae((bm, Hi) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  Hi.exports = (e, t = 1, r) => {
    if (
      ((r = { indent: " ", includeEmptyLines: !1, ...r }), typeof e != "string")
    )
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``
      );
    if (typeof t != "number")
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``
      );
    if (typeof r.indent != "string")
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``
      );
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var Yi = Ae((Om, zi) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  zi.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
});
var Xi = Ae((Bm, Zi) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  var tu = Yi();
  Zi.exports = (e) => (typeof e == "string" ? e.replace(tu(), "") : e);
});
var ro = Ae((Nh, su) => {
  su.exports = {
    name: "@prisma/engines-version",
    version: "5.15.0-29.12e25d8d06f6ea5a0252864dd9a03b1bb51f3022",
    main: "index.js",
    types: "index.d.ts",
    license: "Apache-2.0",
    author: "Tim Suchanek <suchanek@prisma.io>",
    prisma: { enginesVersion: "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022" },
    repository: {
      type: "git",
      url: "https://github.com/prisma/engines-wrapper.git",
      directory: "packages/engines-version",
    },
    devDependencies: { "@types/node": "18.19.33", typescript: "4.9.5" },
    files: ["index.js", "index.d.ts"],
    scripts: { build: "tsc -d" },
  };
});
var no = Ae(() => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
});
var Fn = Ae((lR, gs) => {
  "use strict";
  d();
  c();
  p();
  f();
  m();
  gs.exports = (function () {
    function e(t, r, n, i, o) {
      return t < r || n < r ? (t > n ? n + 1 : t + 1) : i === o ? r : r + 1;
    }
    return function (t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        (t = r), (r = n);
      }
      for (
        var i = t.length, o = r.length;
        i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);

      )
        i--, o--;
      for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (((i -= s), (o -= s), i === 0 || o < 3)) return o;
      var a = 0,
        u,
        l,
        g,
        h,
        x,
        S,
        C,
        A,
        k,
        O,
        B,
        M,
        I = [];
      for (u = 0; u < i; u++) I.push(u + 1), I.push(t.charCodeAt(s + u));
      for (var Z = I.length - 1; a < o - 3; )
        for (
          k = r.charCodeAt(s + (l = a)),
            O = r.charCodeAt(s + (g = a + 1)),
            B = r.charCodeAt(s + (h = a + 2)),
            M = r.charCodeAt(s + (x = a + 3)),
            S = a += 4,
            u = 0;
          u < Z;
          u += 2
        )
          (C = I[u]),
            (A = I[u + 1]),
            (l = e(C, l, g, k, A)),
            (g = e(l, g, h, O, A)),
            (h = e(g, h, x, B, A)),
            (S = e(h, x, S, M, A)),
            (I[u] = S),
            (x = h),
            (h = g),
            (g = l),
            (l = C);
      for (; a < o; )
        for (k = r.charCodeAt(s + (l = a)), S = ++a, u = 0; u < Z; u += 2)
          (C = I[u]), (I[u] = S = e(C, l, S, k, I[u + 1])), (l = C);
      return S;
    };
  })();
});
d();
c();
p();
f();
m();
var gi = {};
nr(gi, { defineExtension: () => mi, getExtensionContext: () => di });
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function mi(e) {
  return typeof e == "function" ? e : (t) => t.$extends(e);
}
d();
c();
p();
f();
m();
function di(e) {
  return e;
}
var yi = {};
nr(yi, { validator: () => hi });
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function hi(...e) {
  return (t) => t;
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Zr,
  bi,
  xi,
  Pi,
  vi = !0;
typeof y != "undefined" &&
  (({
    FORCE_COLOR: Zr,
    NODE_DISABLE_COLORS: bi,
    NO_COLOR: xi,
    TERM: Pi,
  } = y.env || {}),
  (vi = y.stdout && y.stdout.isTTY));
var $a = {
  enabled:
    !bi && xi == null && Pi !== "dumb" && ((Zr != null && Zr !== "0") || vi),
};
function V(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, "g"),
    n = `\x1B[${e}m`,
    i = `\x1B[${t}m`;
  return function (o) {
    return !$a.enabled || o == null
      ? o
      : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
  };
}
var Jp = V(0, 0),
  sr = V(1, 22),
  ar = V(2, 22),
  Qp = V(3, 23),
  Ti = V(4, 24),
  Gp = V(7, 27),
  Hp = V(8, 28),
  Wp = V(9, 29),
  Kp = V(30, 39),
  nt = V(31, 39),
  Ci = V(32, 39),
  Ai = V(33, 39),
  Ri = V(34, 39),
  zp = V(35, 39),
  Si = V(36, 39),
  Yp = V(37, 39),
  Ii = V(90, 39),
  Zp = V(90, 39),
  Xp = V(40, 49),
  ef = V(41, 49),
  tf = V(42, 49),
  rf = V(43, 49),
  nf = V(44, 49),
  of = V(45, 49),
  sf = V(46, 49),
  af = V(47, 49);
d();
c();
p();
f();
m();
var Va = 100,
  Fi = ["green", "yellow", "blue", "magenta", "cyan", "red"],
  ur = [],
  Li = Date.now(),
  ja = 0,
  tn = typeof y != "undefined" ? y.env : {},
  Bi,
  $i;
($i = globalThis.DEBUG) != null ||
  (globalThis.DEBUG = (Bi = tn.DEBUG) != null ? Bi : "");
var qi;
(qi = globalThis.DEBUG_COLORS) != null ||
  (globalThis.DEBUG_COLORS = tn.DEBUG_COLORS ? tn.DEBUG_COLORS === "true" : !0);
var Tt = {
  enable(e) {
    typeof e == "string" && (globalThis.DEBUG = e);
  },
  disable() {
    let e = globalThis.DEBUG;
    return (globalThis.DEBUG = ""), e;
  },
  enabled(e) {
    let t = globalThis.DEBUG.split(",").map((i) =>
        i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")
      ),
      r = t.some((i) =>
        i === "" || i[0] === "-"
          ? !1
          : e.match(RegExp(i.split("*").join(".*") + "$"))
      ),
      n = t.some((i) =>
        i === "" || i[0] !== "-"
          ? !1
          : e.match(RegExp(i.slice(1).split("*").join(".*") + "$"))
      );
    return r && !n;
  },
  log: (...e) => {
    var o;
    let [t, r, ...n] = e,
      i;
    typeof Pt == "function" &&
    typeof y != "undefined" &&
    typeof y.stderr != "undefined" &&
    typeof y.stderr.write == "function"
      ? (i = (...s) => {
          var a;
          try {
            let u = (en(), Gn(Xr));
            y.stderr.write(
              u.format(...s) +
                `
`
            );
          } catch (u) {
            i = (a = console.warn) != null ? a : console.log;
          }
        })
      : (i = (o = console.warn) != null ? o : console.log),
      i(`${t} ${r}`, ...n);
  },
  formatters: {},
};
function Ja(e) {
  let t = {
      color: Fi[ja++ % Fi.length],
      enabled: Tt.enabled(e),
      namespace: e,
      log: Tt.log,
      extend: () => {},
    },
    r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = t;
      if (
        (n.length !== 0 && ur.push([o, ...n]),
        ur.length > Va && ur.shift(),
        Tt.enabled(o) || i)
      ) {
        let u = n.map((g) => (typeof g == "string" ? g : Qa(g))),
          l = `+${Date.now() - Li}ms`;
        (Li = Date.now()), a(o, ...u, l);
      }
    };
  return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => (t[i] = o) });
}
var Ui = new Proxy(Ja, { get: (e, t) => Tt[t], set: (e, t, r) => (Tt[t] = r) });
function Qa(e, t = 2) {
  let r = new Set();
  return JSON.stringify(
    e,
    (n, i) => {
      if (typeof i == "object" && i !== null) {
        if (r.has(i)) return "[Circular *]";
        r.add(i);
      } else if (typeof i == "bigint") return i.toString();
      return i;
    },
    t
  );
}
function Vi() {
  ur.length = 0;
}
var re = Ui;
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Qi = "library";
function At(e) {
  let t = za();
  return (
    t ||
    ((e == null ? void 0 : e.config.engineType) === "library"
      ? "library"
      : (e == null ? void 0 : e.config.engineType) === "binary"
      ? "binary"
      : Qi)
  );
}
function za() {
  let e = y.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Se;
((t) => {
  let e;
  ((I) => (
    (I.findUnique = "findUnique"),
    (I.findUniqueOrThrow = "findUniqueOrThrow"),
    (I.findFirst = "findFirst"),
    (I.findFirstOrThrow = "findFirstOrThrow"),
    (I.findMany = "findMany"),
    (I.create = "create"),
    (I.createMany = "createMany"),
    (I.createManyAndReturn = "createManyAndReturn"),
    (I.update = "update"),
    (I.updateMany = "updateMany"),
    (I.upsert = "upsert"),
    (I.delete = "delete"),
    (I.deleteMany = "deleteMany"),
    (I.groupBy = "groupBy"),
    (I.count = "count"),
    (I.aggregate = "aggregate"),
    (I.findRaw = "findRaw"),
    (I.aggregateRaw = "aggregateRaw")
  ))((e = t.ModelAction || (t.ModelAction = {})));
})(Se || (Se = {}));
var it = {};
nr(it, {
  error: () => Xa,
  info: () => Za,
  log: () => Ya,
  query: () => eu,
  should: () => Ki,
  tags: () => Rt,
  warn: () => rn,
});
d();
c();
p();
f();
m();
var Rt = {
    error: nt("prisma:error"),
    warn: Ai("prisma:warn"),
    info: Si("prisma:info"),
    query: Ri("prisma:query"),
  },
  Ki = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS };
function Ya(...e) {
  console.log(...e);
}
function rn(e, ...t) {
  Ki.warn() && console.warn(`${Rt.warn} ${e}`, ...t);
}
function Za(e, ...t) {
  console.info(`${Rt.info} ${e}`, ...t);
}
function Xa(e, ...t) {
  console.error(`${Rt.error} ${e}`, ...t);
}
function eu(e, ...t) {
  console.log(`${Rt.query} ${e}`, ...t);
}
d();
c();
p();
f();
m();
function je(e, t) {
  throw new Error(t);
}
d();
c();
p();
f();
m();
function nn(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
d();
c();
p();
f();
m();
var on = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {});
d();
c();
p();
f();
m();
function ot(e, t) {
  let r = {};
  for (let n of Object.keys(e)) r[n] = t(e[n], n);
  return r;
}
d();
c();
p();
f();
m();
function sn(e, t) {
  if (e.length === 0) return;
  let r = e[0];
  for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
  return r;
}
d();
c();
p();
f();
m();
function _(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
d();
c();
p();
f();
m();
var eo = new Set(),
  cr = (e, t, ...r) => {
    eo.has(e) || (eo.add(e), rn(t, ...r));
  };
d();
c();
p();
f();
m();
var z = class extends Error {
  constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
    super(t),
      (this.name = "PrismaClientKnownRequestError"),
      (this.code = r),
      (this.clientVersion = n),
      (this.meta = i),
      Object.defineProperty(this, "batchRequestIdx", {
        value: o,
        enumerable: !1,
        writable: !0,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
_(z, "PrismaClientKnownRequestError");
var Ie = class extends z {
  constructor(t, r) {
    super(t, { code: "P2025", clientVersion: r }),
      (this.name = "NotFoundError");
  }
};
_(Ie, "NotFoundError");
d();
c();
p();
f();
m();
var G = class e extends Error {
  constructor(t, r, n) {
    super(t),
      (this.name = "PrismaClientInitializationError"),
      (this.clientVersion = r),
      (this.errorCode = n),
      Error.captureStackTrace(e);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
_(G, "PrismaClientInitializationError");
d();
c();
p();
f();
m();
var De = class extends Error {
  constructor(t, r) {
    super(t),
      (this.name = "PrismaClientRustPanicError"),
      (this.clientVersion = r);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
_(De, "PrismaClientRustPanicError");
d();
c();
p();
f();
m();
var ae = class extends Error {
  constructor(t, { clientVersion: r, batchRequestIdx: n }) {
    super(t),
      (this.name = "PrismaClientUnknownRequestError"),
      (this.clientVersion = r),
      Object.defineProperty(this, "batchRequestIdx", {
        value: n,
        writable: !0,
        enumerable: !1,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
_(ae, "PrismaClientUnknownRequestError");
d();
c();
p();
f();
m();
var ee = class extends Error {
  constructor(r, { clientVersion: n }) {
    super(r);
    this.name = "PrismaClientValidationError";
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
_(ee, "PrismaClientValidationError");
d();
c();
p();
f();
m();
var St = class {
  constructor(t) {
    this._engine = t;
  }
  prometheus(t) {
    return this._engine.metrics({ format: "prometheus", ...t });
  }
  json(t) {
    return this._engine.metrics({ format: "json", ...t });
  }
};
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function It(e) {
  let t;
  return {
    get() {
      return t || (t = { value: e() }), t.value;
    },
  };
}
function ru(e, t) {
  let r = It(() => nu(t));
  Object.defineProperty(e, "dmmf", { get: () => r.get() });
}
function nu(e) {
  return {
    datamodel: { models: an(e.models), enums: an(e.enums), types: an(e.types) },
  };
}
function an(e) {
  return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
d();
c();
p();
f();
m();
var pr = Symbol(),
  un = new WeakMap(),
  xe = class {
    constructor(t) {
      t === pr
        ? un.set(this, `Prisma.${this._getName()}`)
        : un.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return un.get(this);
    }
  },
  Dt = class extends xe {
    _getNamespace() {
      return "NullTypes";
    }
  },
  kt = class extends Dt {};
cn(kt, "DbNull");
var Ot = class extends Dt {};
cn(Ot, "JsonNull");
var Mt = class extends Dt {};
cn(Mt, "AnyNull");
var ln = {
  classes: { DbNull: kt, JsonNull: Ot, AnyNull: Mt },
  instances: { DbNull: new kt(pr), JsonNull: new Ot(pr), AnyNull: new Mt(pr) },
};
function cn(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function Nt(e) {
  return {
    ok: !1,
    error: e,
    map() {
      return Nt(e);
    },
    flatMap() {
      return Nt(e);
    },
  };
}
var pn = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (; this.registeredErrors[r] !== void 0; ) r++;
      return (this.registeredErrors[r] = { error: t }), r;
    }
  },
  fn = (e) => {
    let t = new pn(),
      r = Je(t, e.startTransaction.bind(e)),
      n = {
        adapterName: e.adapterName,
        errorRegistry: t,
        queryRaw: Je(t, e.queryRaw.bind(e)),
        executeRaw: Je(t, e.executeRaw.bind(e)),
        provider: e.provider,
        startTransaction: async (...i) => (await r(...i)).map((s) => iu(t, s)),
      };
    return (
      e.getConnectionInfo &&
        (n.getConnectionInfo = ou(t, e.getConnectionInfo.bind(e))),
      n
    );
  },
  iu = (e, t) => ({
    adapterName: t.adapterName,
    provider: t.provider,
    options: t.options,
    queryRaw: Je(e, t.queryRaw.bind(t)),
    executeRaw: Je(e, t.executeRaw.bind(t)),
    commit: Je(e, t.commit.bind(t)),
    rollback: Je(e, t.rollback.bind(t)),
  });
function Je(e, t) {
  return async (...r) => {
    try {
      return await t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return Nt({ kind: "GenericJs", id: i });
    }
  };
}
function ou(e, t) {
  return (...r) => {
    try {
      return t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return Nt({ kind: "GenericJs", id: i });
    }
  };
}
var na = Ue(ro());
var yk = Ue(no());
Gi();
Ei();
Ji();
d();
c();
p();
f();
m();
var ue = class e {
  constructor(t, r) {
    if (t.length - 1 !== r.length)
      throw t.length === 0
        ? new TypeError("Expected at least 1 string")
        : new TypeError(
            `Expected ${t.length} strings to have ${t.length - 1} values`
          );
    let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
    (this.values = new Array(n)),
      (this.strings = new Array(n + 1)),
      (this.strings[0] = t[0]);
    let i = 0,
      o = 0;
    for (; i < r.length; ) {
      let s = r[i++],
        a = t[i];
      if (s instanceof e) {
        this.strings[o] += s.strings[0];
        let u = 0;
        for (; u < s.values.length; )
          (this.values[o++] = s.values[u++]), (this.strings[o] = s.strings[u]);
        this.strings[o] += a;
      } else (this.values[o++] = s), (this.strings[o] = a);
    }
  }
  get sql() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `?${this.strings[r++]}`;
    return n;
  }
  get statement() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `:${r}${this.strings[r++]}`;
    return n;
  }
  get text() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `$${r}${this.strings[r++]}`;
    return n;
  }
  inspect() {
    return {
      sql: this.sql,
      statement: this.statement,
      text: this.text,
      values: this.values,
    };
  }
};
function au(e, t = ",", r = "", n = "") {
  if (e.length === 0)
    throw new TypeError(
      "Expected `join([])` to be called with an array of multiple elements, but got an empty array"
    );
  return new ue([r, ...Array(e.length - 1).fill(t), n], e);
}
function io(e) {
  return new ue([e], []);
}
var uu = io("");
function oo(e, ...t) {
  return new ue(e, t);
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function _t(e) {
  return {
    getKeys() {
      return Object.keys(e);
    },
    getPropertyValue(t) {
      return e[t];
    },
  };
}
d();
c();
p();
f();
m();
function ne(e, t) {
  return {
    getKeys() {
      return [e];
    },
    getPropertyValue() {
      return t();
    },
  };
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var de = class {
  constructor() {
    this._map = new Map();
  }
  get(t) {
    var r;
    return (r = this._map.get(t)) == null ? void 0 : r.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let i = r();
    return this.set(t, i), i;
  }
};
function Qe(e) {
  let t = new de();
  return {
    getKeys() {
      return e.getKeys();
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      var n;
      return (n = e.getPropertyDescriptor) == null ? void 0 : n.call(e, r);
    },
  };
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var fr = { enumerable: !0, configurable: !0, writable: !0 };
function mr(e) {
  let t = new Set(e);
  return {
    getOwnPropertyDescriptor: () => fr,
    has: (r, n) => t.has(n),
    set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
    ownKeys: () => [...t],
  };
}
var so = Symbol.for("nodejs.util.inspect.custom");
function ge(e, t) {
  let r = lu(t),
    n = new Set(),
    i = new Proxy(e, {
      get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      },
      has(o, s) {
        var u, l;
        if (n.has(s)) return !0;
        let a = r.get(s);
        return a
          ? (l = (u = a.has) == null ? void 0 : u.call(a, s)) != null
            ? l
            : !0
          : Reflect.has(o, s);
      },
      ownKeys(o) {
        let s = ao(Reflect.ownKeys(o), r),
          a = ao(Array.from(r.keys()), r);
        return [...new Set([...s, ...a, ...n])];
      },
      set(o, s, a) {
        var l, g;
        let u = r.get(s);
        return ((g =
          (l = u == null ? void 0 : u.getPropertyDescriptor) == null
            ? void 0
            : l.call(u, s)) == null
          ? void 0
          : g.writable) === !1
          ? !1
          : (n.add(s), Reflect.set(o, s, a));
      },
      getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let u = r.get(s);
        return u
          ? u.getPropertyDescriptor
            ? { ...fr, ...(u == null ? void 0 : u.getPropertyDescriptor(s)) }
            : fr
          : a;
      },
      defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      },
    });
  return (
    (i[so] = function () {
      let o = { ...this };
      return delete o[so], o;
    }),
    i
  );
}
function lu(e) {
  let t = new Map();
  for (let r of e) {
    let n = r.getKeys();
    for (let i of n) t.set(i, r);
  }
  return t;
}
function ao(e, t) {
  return e.filter((r) => {
    var i, o;
    let n = t.get(r);
    return (o =
      (i = n == null ? void 0 : n.has) == null ? void 0 : i.call(n, r)) != null
      ? o
      : !0;
  });
}
d();
c();
p();
f();
m();
function st(e) {
  return {
    getKeys() {
      return e;
    },
    has() {
      return !1;
    },
    getPropertyValue() {},
  };
}
d();
c();
p();
f();
m();
function dr(e, t) {
  return {
    batch: e,
    transaction:
      (t == null ? void 0 : t.kind) === "batch"
        ? { isolationLevel: t.options.isolationLevel }
        : void 0,
  };
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var at = class {
  constructor(t = 0, r) {
    this.context = r;
    this.lines = [];
    this.currentLine = "";
    this.currentIndent = 0;
    this.currentIndent = t;
  }
  write(t) {
    return typeof t == "string" ? (this.currentLine += t) : t.write(this), this;
  }
  writeJoined(t, r) {
    let n = r.length - 1;
    for (let i = 0; i < r.length; i++)
      this.write(r[i]), i !== n && this.write(t);
    return this;
  }
  writeLine(t) {
    return this.write(t).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()),
      (this.currentLine = ""),
      (this.marginSymbol = void 0);
    let t = this.afterNextNewLineCallback;
    return (this.afterNextNewLineCallback = void 0), t == null || t(), this;
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this;
  }
  afterNextNewline(t) {
    return (this.afterNextNewLineCallback = t), this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(t) {
    return (this.marginSymbol = t), this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(
      this.currentLine.length + 2 * this.currentIndent
    );
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
  }
};
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function uo(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
d();
c();
p();
f();
m();
function ut(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function gr(e) {
  return e.toString() !== "Invalid Date";
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var lt = 9e15,
  Ne = 1e9,
  mn = "0123456789abcdef",
  yr =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  wr =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  dn = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -lt,
    maxE: lt,
    crypto: !1,
  },
  fo,
  Pe,
  F = !0,
  br = "[DecimalError] ",
  Me = br + "Invalid argument: ",
  mo = br + "Precision limit exceeded",
  go = br + "crypto unavailable",
  ho = "[object Decimal]",
  te = Math.floor,
  H = Math.pow,
  cu = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  pu = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  fu = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  yo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  pe = 1e7,
  N = 7,
  mu = 9007199254740991,
  du = yr.length - 1,
  gn = wr.length - 1,
  R = { toStringTag: ho };
R.absoluteValue = R.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), D(e);
};
R.ceil = function () {
  return D(new this.constructor(this), this.e + 1, 2);
};
R.clampedTo = R.clamp = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
  if (e.gt(t)) throw Error(Me + t);
  return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
R.comparedTo = R.cmp = function (e) {
  var t,
    r,
    n,
    i,
    o = this,
    s = o.d,
    a = (e = new o.constructor(e)).d,
    u = o.s,
    l = e.s;
  if (!s || !a)
    return !u || !l ? NaN : u !== l ? u : s === a ? 0 : !s ^ (u < 0) ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -l : 0;
  if (u !== l) return u;
  if (o.e !== e.e) return (o.e > e.e) ^ (u < 0) ? 1 : -1;
  for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (s[t] !== a[t]) return (s[t] > a[t]) ^ (u < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (u < 0) ? 1 : -1;
};
R.cosine = R.cos = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.d
    ? r.d[0]
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + N),
        (n.rounding = 1),
        (r = gu(n, Po(n, r))),
        (n.precision = e),
        (n.rounding = t),
        D(Pe == 2 || Pe == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
R.cubeRoot = R.cbrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    g = this,
    h = g.constructor;
  if (!g.isFinite() || g.isZero()) return new h(g);
  for (
    F = !1,
      o = g.s * H(g.s * g, 1 / 3),
      !o || Math.abs(o) == 1 / 0
        ? ((r = Y(g.d)),
          (e = g.e),
          (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"),
          (o = H(r, 1 / 3)),
          (e = te((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          o == 1 / 0
            ? (r = "5e" + e)
            : ((r = o.toExponential()),
              (r = r.slice(0, r.indexOf("e") + 1) + e)),
          (n = new h(r)),
          (n.s = g.s))
        : (n = new h(o.toString())),
      s = (e = h.precision) + 3;
    ;

  )
    if (
      ((a = n),
      (u = a.times(a).times(a)),
      (l = u.plus(g)),
      (n = q(l.plus(g).times(a), l.plus(u), s + 2, 1)),
      Y(a.d).slice(0, s) === (r = Y(n.d)).slice(0, s))
    )
      if (((r = r.slice(s - 3, s + 1)), r == "9999" || (!i && r == "4999"))) {
        if (!i && (D(a, e + 1, 0), a.times(a).times(a).eq(g))) {
          n = a;
          break;
        }
        (s += 4), (i = 1);
      } else {
        (!+r || (!+r.slice(1) && r.charAt(0) == "5")) &&
          (D(n, e + 1, 1), (t = !n.times(n).times(n).eq(g)));
        break;
      }
  return (F = !0), D(n, e, h.rounding, t);
};
R.decimalPlaces = R.dp = function () {
  var e,
    t = this.d,
    r = NaN;
  if (t) {
    if (((e = t.length - 1), (r = (e - te(this.e / N)) * N), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
R.dividedBy = R.div = function (e) {
  return q(this, new this.constructor(e));
};
R.dividedToIntegerBy = R.divToInt = function (e) {
  var t = this,
    r = t.constructor;
  return D(q(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
R.equals = R.eq = function (e) {
  return this.cmp(e) === 0;
};
R.floor = function () {
  return D(new this.constructor(this), this.e + 1, 3);
};
R.greaterThan = R.gt = function (e) {
  return this.cmp(e) > 0;
};
R.greaterThanOrEqualTo = R.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
R.hyperbolicCosine = R.cosh = function () {
  var e,
    t,
    r,
    n,
    i,
    o = this,
    s = o.constructor,
    a = new s(1);
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  (r = s.precision),
    (n = s.rounding),
    (s.precision = r + Math.max(o.e, o.sd()) + 4),
    (s.rounding = 1),
    (i = o.d.length),
    i < 32
      ? ((e = Math.ceil(i / 3)), (t = (1 / Pr(4, e)).toString()))
      : ((e = 16), (t = "2.3283064365386962890625e-10")),
    (o = ct(s, 1, o.times(t), new s(1), !0));
  for (var u, l = e, g = new s(8); l--; )
    (u = o.times(o)), (o = a.minus(u.times(g.minus(u.times(g)))));
  return D(o, (s.precision = r), (s.rounding = n), !0);
};
R.hyperbolicSine = R.sinh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  if (!i.isFinite() || i.isZero()) return new o(i);
  if (
    ((t = o.precision),
    (r = o.rounding),
    (o.precision = t + Math.max(i.e, i.sd()) + 4),
    (o.rounding = 1),
    (n = i.d.length),
    n < 3)
  )
    i = ct(o, 2, i, i, !0);
  else {
    (e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (i = i.times(1 / Pr(5, e))),
      (i = ct(o, 2, i, i, !0));
    for (var s, a = new o(5), u = new o(16), l = new o(20); e--; )
      (s = i.times(i)), (i = i.times(a.plus(s.times(u.times(s).plus(l)))));
  }
  return (o.precision = t), (o.rounding = r), D(i, t, r, !0);
};
R.hyperbolicTangent = R.tanh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 7),
        (n.rounding = 1),
        q(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(r.s);
};
R.inverseCosine = R.acos = function () {
  var e,
    t = this,
    r = t.constructor,
    n = t.abs().cmp(1),
    i = r.precision,
    o = r.rounding;
  return n !== -1
    ? n === 0
      ? t.isNeg()
        ? ce(r, i, o)
        : new r(0)
      : new r(NaN)
    : t.isZero()
    ? ce(r, i + 4, o).times(0.5)
    : ((r.precision = i + 6),
      (r.rounding = 1),
      (t = t.asin()),
      (e = ce(r, i + 4, o).times(0.5)),
      (r.precision = i),
      (r.rounding = o),
      e.minus(t));
};
R.inverseHyperbolicCosine = R.acosh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
    ? ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
      (n.rounding = 1),
      (F = !1),
      (r = r.times(r).minus(1).sqrt().plus(r)),
      (F = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln())
    : new n(r);
};
R.inverseHyperbolicSine = R.asinh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
      (n.rounding = 1),
      (F = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (F = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln());
};
R.inverseHyperbolicTangent = R.atanh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isFinite()
    ? i.e >= 0
      ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
      : ((e = o.precision),
        (t = o.rounding),
        (n = i.sd()),
        Math.max(n, e) < 2 * -i.e - 1
          ? D(new o(i), e, t, !0)
          : ((o.precision = r = n - i.e),
            (i = q(i.plus(1), new o(1).minus(i), r + e, 1)),
            (o.precision = e + 4),
            (o.rounding = 1),
            (i = i.ln()),
            (o.precision = e),
            (o.rounding = t),
            i.times(0.5)))
    : new o(NaN);
};
R.inverseSine = R.asin = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isZero()
    ? new o(i)
    : ((t = i.abs().cmp(1)),
      (r = o.precision),
      (n = o.rounding),
      t !== -1
        ? t === 0
          ? ((e = ce(o, r + 4, n).times(0.5)), (e.s = i.s), e)
          : new o(NaN)
        : ((o.precision = r + 6),
          (o.rounding = 1),
          (i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan()),
          (o.precision = r),
          (o.rounding = n),
          i.times(2)));
};
R.inverseTangent = R.atan = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l = this,
    g = l.constructor,
    h = g.precision,
    x = g.rounding;
  if (l.isFinite()) {
    if (l.isZero()) return new g(l);
    if (l.abs().eq(1) && h + 4 <= gn)
      return (s = ce(g, h + 4, x).times(0.25)), (s.s = l.s), s;
  } else {
    if (!l.s) return new g(NaN);
    if (h + 4 <= gn) return (s = ce(g, h + 4, x).times(0.5)), (s.s = l.s), s;
  }
  for (
    g.precision = a = h + 10,
      g.rounding = 1,
      r = Math.min(28, (a / N + 2) | 0),
      e = r;
    e;
    --e
  )
    l = l.div(l.times(l).plus(1).sqrt().plus(1));
  for (
    F = !1, t = Math.ceil(a / N), n = 1, u = l.times(l), s = new g(l), i = l;
    e !== -1;

  )
    if (
      ((i = i.times(u)),
      (o = s.minus(i.div((n += 2)))),
      (i = i.times(u)),
      (s = o.plus(i.div((n += 2)))),
      s.d[t] !== void 0)
    )
      for (e = t; s.d[e] === o.d[e] && e--; );
  return (
    r && (s = s.times(2 << (r - 1))),
    (F = !0),
    D(s, (g.precision = h), (g.rounding = x), !0)
  );
};
R.isFinite = function () {
  return !!this.d;
};
R.isInteger = R.isInt = function () {
  return !!this.d && te(this.e / N) > this.d.length - 2;
};
R.isNaN = function () {
  return !this.s;
};
R.isNegative = R.isNeg = function () {
  return this.s < 0;
};
R.isPositive = R.isPos = function () {
  return this.s > 0;
};
R.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
R.lessThan = R.lt = function (e) {
  return this.cmp(e) < 0;
};
R.lessThanOrEqualTo = R.lte = function (e) {
  return this.cmp(e) < 1;
};
R.logarithm = R.log = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l = this,
    g = l.constructor,
    h = g.precision,
    x = g.rounding,
    S = 5;
  if (e == null) (e = new g(10)), (t = !0);
  else {
    if (((e = new g(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
      return new g(NaN);
    t = e.eq(10);
  }
  if (((r = l.d), l.s < 0 || !r || !r[0] || l.eq(1)))
    return new g(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1) o = !0;
    else {
      for (i = r[0]; i % 10 === 0; ) i /= 10;
      o = i !== 1;
    }
  if (
    ((F = !1),
    (a = h + S),
    (s = Oe(l, a)),
    (n = t ? Er(g, a + 10) : Oe(e, a)),
    (u = q(s, n, a, 1)),
    Ft(u.d, (i = h), x))
  )
    do
      if (
        ((a += 10),
        (s = Oe(l, a)),
        (n = t ? Er(g, a + 10) : Oe(e, a)),
        (u = q(s, n, a, 1)),
        !o)
      ) {
        +Y(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = D(u, h + 1, 0));
        break;
      }
    while (Ft(u.d, (i += 10), x));
  return (F = !0), D(u, h, x);
};
R.minus = R.sub = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    g,
    h,
    x,
    S = this,
    C = S.constructor;
  if (((e = new C(e)), !S.d || !e.d))
    return (
      !S.s || !e.s
        ? (e = new C(NaN))
        : S.d
        ? (e.s = -e.s)
        : (e = new C(e.d || S.s !== e.s ? S : NaN)),
      e
    );
  if (S.s != e.s) return (e.s = -e.s), S.plus(e);
  if (
    ((l = S.d), (x = e.d), (a = C.precision), (u = C.rounding), !l[0] || !x[0])
  ) {
    if (x[0]) e.s = -e.s;
    else if (l[0]) e = new C(S);
    else return new C(u === 3 ? -0 : 0);
    return F ? D(e, a, u) : e;
  }
  if (((r = te(e.e / N)), (g = te(S.e / N)), (l = l.slice()), (o = g - r), o)) {
    for (
      h = o < 0,
        h
          ? ((t = l), (o = -o), (s = x.length))
          : ((t = x), (r = g), (s = l.length)),
        n = Math.max(Math.ceil(a / N), s) + 2,
        o > n && ((o = n), (t.length = 1)),
        t.reverse(),
        n = o;
      n--;

    )
      t.push(0);
    t.reverse();
  } else {
    for (n = l.length, s = x.length, h = n < s, h && (s = n), n = 0; n < s; n++)
      if (l[n] != x[n]) {
        h = l[n] < x[n];
        break;
      }
    o = 0;
  }
  for (
    h && ((t = l), (l = x), (x = t), (e.s = -e.s)),
      s = l.length,
      n = x.length - s;
    n > 0;
    --n
  )
    l[s++] = 0;
  for (n = x.length; n > o; ) {
    if (l[--n] < x[n]) {
      for (i = n; i && l[--i] === 0; ) l[i] = pe - 1;
      --l[i], (l[n] += pe);
    }
    l[n] -= x[n];
  }
  for (; l[--s] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --r;
  return l[0]
    ? ((e.d = l), (e.e = xr(l, r)), F ? D(e, a, u) : e)
    : new C(u === 3 ? -0 : 0);
};
R.modulo = R.mod = function (e) {
  var t,
    r = this,
    n = r.constructor;
  return (
    (e = new n(e)),
    !r.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (r.d && !r.d[0])
      ? D(new n(r), n.precision, n.rounding)
      : ((F = !1),
        n.modulo == 9
          ? ((t = q(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
          : (t = q(r, e, 0, n.modulo, 1)),
        (t = t.times(e)),
        (F = !0),
        r.minus(t))
  );
};
R.naturalExponential = R.exp = function () {
  return hn(this);
};
R.naturalLogarithm = R.ln = function () {
  return Oe(this);
};
R.negated = R.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), D(e);
};
R.plus = R.add = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    g,
    h = this,
    x = h.constructor;
  if (((e = new x(e)), !h.d || !e.d))
    return (
      !h.s || !e.s
        ? (e = new x(NaN))
        : h.d || (e = new x(e.d || h.s === e.s ? h : NaN)),
      e
    );
  if (h.s != e.s) return (e.s = -e.s), h.minus(e);
  if (
    ((l = h.d), (g = e.d), (a = x.precision), (u = x.rounding), !l[0] || !g[0])
  )
    return g[0] || (e = new x(h)), F ? D(e, a, u) : e;
  if (((o = te(h.e / N)), (n = te(e.e / N)), (l = l.slice()), (i = o - n), i)) {
    for (
      i < 0
        ? ((r = l), (i = -i), (s = g.length))
        : ((r = g), (n = o), (s = l.length)),
        o = Math.ceil(a / N),
        s = o > s ? o + 1 : s + 1,
        i > s && ((i = s), (r.length = 1)),
        r.reverse();
      i--;

    )
      r.push(0);
    r.reverse();
  }
  for (
    s = l.length,
      i = g.length,
      s - i < 0 && ((i = s), (r = g), (g = l), (l = r)),
      t = 0;
    i;

  )
    (t = ((l[--i] = l[i] + g[i] + t) / pe) | 0), (l[i] %= pe);
  for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0; ) l.pop();
  return (e.d = l), (e.e = xr(l, n)), F ? D(e, a, u) : e;
};
R.precision = R.sd = function (e) {
  var t,
    r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Me + e);
  return (
    r.d ? ((t = wo(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
  );
};
R.round = function () {
  var e = this,
    t = e.constructor;
  return D(new t(e), e.e + 1, t.rounding);
};
R.sine = R.sin = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + N),
        (n.rounding = 1),
        (r = yu(n, Po(n, r))),
        (n.precision = e),
        (n.rounding = t),
        D(Pe > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
R.squareRoot = R.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s = this,
    a = s.d,
    u = s.e,
    l = s.s,
    g = s.constructor;
  if (l !== 1 || !a || !a[0])
    return new g(!l || (l < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0);
  for (
    F = !1,
      l = Math.sqrt(+s),
      l == 0 || l == 1 / 0
        ? ((t = Y(a)),
          (t.length + u) % 2 == 0 && (t += "0"),
          (l = Math.sqrt(t)),
          (u = te((u + 1) / 2) - (u < 0 || u % 2)),
          l == 1 / 0
            ? (t = "5e" + u)
            : ((t = l.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + u)),
          (n = new g(t)))
        : (n = new g(l.toString())),
      r = (u = g.precision) + 3;
    ;

  )
    if (
      ((o = n),
      (n = o.plus(q(s, o, r + 2, 1)).times(0.5)),
      Y(o.d).slice(0, r) === (t = Y(n.d)).slice(0, r))
    )
      if (((t = t.slice(r - 3, r + 1)), t == "9999" || (!i && t == "4999"))) {
        if (!i && (D(o, u + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        (r += 4), (i = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == "5")) &&
          (D(n, u + 1, 1), (e = !n.times(n).eq(s)));
        break;
      }
  return (F = !0), D(n, u, g.rounding, e);
};
R.tangent = R.tan = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 10),
        (n.rounding = 1),
        (r = r.sin()),
        (r.s = 1),
        (r = q(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        D(Pe == 2 || Pe == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
R.times = R.mul = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    g = this,
    h = g.constructor,
    x = g.d,
    S = (e = new h(e)).d;
  if (((e.s *= g.s), !x || !x[0] || !S || !S[0]))
    return new h(
      !e.s || (x && !x[0] && !S) || (S && !S[0] && !x)
        ? NaN
        : !x || !S
        ? e.s / 0
        : e.s * 0
    );
  for (
    r = te(g.e / N) + te(e.e / N),
      u = x.length,
      l = S.length,
      u < l && ((o = x), (x = S), (S = o), (s = u), (u = l), (l = s)),
      o = [],
      s = u + l,
      n = s;
    n--;

  )
    o.push(0);
  for (n = l; --n >= 0; ) {
    for (t = 0, i = u + n; i > n; )
      (a = o[i] + S[n] * x[i - n - 1] + t),
        (o[i--] = a % pe | 0),
        (t = (a / pe) | 0);
    o[i] = (o[i] + t) % pe | 0;
  }
  for (; !o[--s]; ) o.pop();
  return (
    t ? ++r : o.shift(),
    (e.d = o),
    (e.e = xr(o, r)),
    F ? D(e, h.precision, h.rounding) : e
  );
};
R.toBinary = function (e, t) {
  return wn(this, 2, e, t);
};
R.toDecimalPlaces = R.toDP = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (oe(e, 0, Ne),
        t === void 0 ? (t = n.rounding) : oe(t, 0, 8),
        D(r, e + r.e + 1, t))
  );
};
R.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = he(n, !0))
      : (oe(e, 0, Ne),
        t === void 0 ? (t = i.rounding) : oe(t, 0, 8),
        (n = D(new i(n), e + 1, t)),
        (r = he(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
R.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    o = i.constructor;
  return (
    e === void 0
      ? (r = he(i))
      : (oe(e, 0, Ne),
        t === void 0 ? (t = o.rounding) : oe(t, 0, 8),
        (n = D(new o(i), e + i.e + 1, t)),
        (r = he(n, !1, e + n.e + 1))),
    i.isNeg() && !i.isZero() ? "-" + r : r
  );
};
R.toFraction = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    g,
    h,
    x,
    S = this,
    C = S.d,
    A = S.constructor;
  if (!C) return new A(S);
  if (
    ((l = r = new A(1)),
    (n = u = new A(0)),
    (t = new A(n)),
    (o = t.e = wo(C) - S.e - 1),
    (s = o % N),
    (t.d[0] = H(10, s < 0 ? N + s : s)),
    e == null)
  )
    e = o > 0 ? t : l;
  else {
    if (((a = new A(e)), !a.isInt() || a.lt(l))) throw Error(Me + a);
    e = a.gt(t) ? (o > 0 ? t : l) : a;
  }
  for (
    F = !1,
      a = new A(Y(C)),
      g = A.precision,
      A.precision = o = C.length * N * 2;
    (h = q(a, t, 0, 1, 1)), (i = r.plus(h.times(n))), i.cmp(e) != 1;

  )
    (r = n),
      (n = i),
      (i = l),
      (l = u.plus(h.times(i))),
      (u = i),
      (i = t),
      (t = a.minus(h.times(i))),
      (a = i);
  return (
    (i = q(e.minus(r), n, 0, 1, 1)),
    (u = u.plus(i.times(l))),
    (r = r.plus(i.times(n))),
    (u.s = l.s = S.s),
    (x =
      q(l, n, o, 1).minus(S).abs().cmp(q(u, r, o, 1).minus(S).abs()) < 1
        ? [l, n]
        : [u, r]),
    (A.precision = g),
    (F = !0),
    x
  );
};
R.toHexadecimal = R.toHex = function (e, t) {
  return wn(this, 16, e, t);
};
R.toNearest = function (e, t) {
  var r = this,
    n = r.constructor;
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r;
    (e = new n(1)), (t = n.rounding);
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : oe(t, 0, 8), !r.d))
      return e.s ? r : e;
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return (
    e.d[0]
      ? ((F = !1), (r = q(r, e, 0, t, 1).times(e)), (F = !0), D(r))
      : ((e.s = r.s), (r = e)),
    r
  );
};
R.toNumber = function () {
  return +this;
};
R.toOctal = function (e, t) {
  return wn(this, 8, e, t);
};
R.toPower = R.pow = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a = this,
    u = a.constructor,
    l = +(e = new u(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(H(+a, l));
  if (((a = new u(a)), a.eq(1))) return a;
  if (((n = u.precision), (o = u.rounding), e.eq(1))) return D(a, n, o);
  if (((t = te(e.e / N)), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= mu))
    return (i = Eo(u, a, r, n)), e.s < 0 ? new u(1).div(i) : D(i, n, o);
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new u(NaN);
    if ((e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1))
      return (a.s = s), a;
  }
  return (
    (r = H(+a, l)),
    (t =
      r == 0 || !isFinite(r)
        ? te(l * (Math.log("0." + Y(a.d)) / Math.LN10 + a.e + 1))
        : new u(r + "").e),
    t > u.maxE + 1 || t < u.minE - 1
      ? new u(t > 0 ? s / 0 : 0)
      : ((F = !1),
        (u.rounding = a.s = 1),
        (r = Math.min(12, (t + "").length)),
        (i = hn(e.times(Oe(a, n + r)), n)),
        i.d &&
          ((i = D(i, n + 5, 1)),
          Ft(i.d, n, o) &&
            ((t = n + 10),
            (i = D(hn(e.times(Oe(a, t + r)), t), t + 5, 1)),
            +Y(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = D(i, n + 1, 0)))),
        (i.s = s),
        (F = !0),
        (u.rounding = o),
        D(i, n, o))
  );
};
R.toPrecision = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = he(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
      : (oe(e, 1, Ne),
        t === void 0 ? (t = i.rounding) : oe(t, 0, 8),
        (n = D(new i(n), e, t)),
        (r = he(n, e <= n.e || n.e <= i.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
R.toSignificantDigits = R.toSD = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (oe(e, 1, Ne), t === void 0 ? (t = n.rounding) : oe(t, 0, 8)),
    D(new n(r), e, t)
  );
};
R.toString = function () {
  var e = this,
    t = e.constructor,
    r = he(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
R.truncated = R.trunc = function () {
  return D(new this.constructor(this), this.e + 1, 1);
};
R.valueOf = R.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = he(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Y(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    o = "",
    s = e[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      (n = e[t] + ""), (r = N - n.length), r && (o += ke(r)), (o += n);
    (s = e[t]), (n = s + ""), (r = N - n.length), r && (o += ke(r));
  } else if (s === 0) return "0";
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function oe(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Me + e);
}
function Ft(e, t, r, n) {
  var i, o, s, a;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return (
    --t < 0 ? ((t += N), (i = 0)) : ((i = Math.ceil((t + 1) / N)), (t %= N)),
    (o = H(10, N - t)),
    (a = e[i] % o | 0),
    n == null
      ? t < 3
        ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
          (s =
            (r < 4 && a == 99999) ||
            (r > 3 && a == 49999) ||
            a == 5e4 ||
            a == 0))
        : (s =
            (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
              ((e[i + 1] / o / 100) | 0) == H(10, t - 2) - 1) ||
            ((a == o / 2 || a == 0) && ((e[i + 1] / o / 100) | 0) == 0))
      : t < 4
      ? (t == 0
          ? (a = (a / 1e3) | 0)
          : t == 1
          ? (a = (a / 100) | 0)
          : t == 2 && (a = (a / 10) | 0),
        (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
      : (s =
          (((n || r < 4) && a + 1 == o) || (!n && r > 3 && a + 1 == o / 2)) &&
          ((e[i + 1] / o / 1e3) | 0) == H(10, t - 3) - 1),
    s
  );
}
function hr(e, t, r) {
  for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t;
    for (i[0] += mn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
      i[n] > r - 1 &&
        (i[n + 1] === void 0 && (i[n + 1] = 0),
        (i[n + 1] += (i[n] / r) | 0),
        (i[n] %= r));
  }
  return i.reverse();
}
function gu(e, t) {
  var r, n, i;
  if (t.isZero()) return t;
  (n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (i = (1 / Pr(4, r)).toString()))
      : ((r = 16), (i = "2.3283064365386962890625e-10")),
    (e.precision += r),
    (t = ct(e, 1, t.times(i), new e(1)));
  for (var o = r; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return (e.precision -= r), t;
}
var q = (function () {
  function e(n, i, o) {
    var s,
      a = 0,
      u = n.length;
    for (n = n.slice(); u--; )
      (s = n[u] * i + a), (n[u] = s % o | 0), (a = (s / o) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, i, o, s) {
    var a, u;
    if (o != s) u = o > s ? 1 : -1;
    else
      for (a = u = 0; a < o; a++)
        if (n[a] != i[a]) {
          u = n[a] > i[a] ? 1 : -1;
          break;
        }
    return u;
  }
  function r(n, i, o, s) {
    for (var a = 0; o--; )
      (n[o] -= a), (a = n[o] < i[o] ? 1 : 0), (n[o] = a * s + n[o] - i[o]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, o, s, a, u) {
    var l,
      g,
      h,
      x,
      S,
      C,
      A,
      k,
      O,
      B,
      M,
      I,
      Z,
      L,
      Ye,
      Be,
      fe,
      $e,
      Q,
      Ce,
      qe = n.constructor,
      Ze = n.s == i.s ? 1 : -1,
      X = n.d,
      U = i.d;
    if (!X || !X[0] || !U || !U[0])
      return new qe(
        !n.s || !i.s || (X ? U && X[0] == U[0] : !U)
          ? NaN
          : (X && X[0] == 0) || !U
          ? Ze * 0
          : Ze / 0
      );
    for (
      u
        ? ((S = 1), (g = n.e - i.e))
        : ((u = pe), (S = N), (g = te(n.e / S) - te(i.e / S))),
        Q = U.length,
        fe = X.length,
        O = new qe(Ze),
        B = O.d = [],
        h = 0;
      U[h] == (X[h] || 0);
      h++
    );
    if (
      (U[h] > (X[h] || 0) && g--,
      o == null
        ? ((L = o = qe.precision), (s = qe.rounding))
        : a
        ? (L = o + (n.e - i.e) + 1)
        : (L = o),
      L < 0)
    )
      B.push(1), (C = !0);
    else {
      if (((L = (L / S + 2) | 0), (h = 0), Q == 1)) {
        for (x = 0, U = U[0], L++; (h < fe || x) && L--; h++)
          (Ye = x * u + (X[h] || 0)), (B[h] = (Ye / U) | 0), (x = Ye % U | 0);
        C = x || h < fe;
      } else {
        for (
          x = (u / (U[0] + 1)) | 0,
            x > 1 &&
              ((U = e(U, x, u)),
              (X = e(X, x, u)),
              (Q = U.length),
              (fe = X.length)),
            Be = Q,
            M = X.slice(0, Q),
            I = M.length;
          I < Q;

        )
          M[I++] = 0;
        (Ce = U.slice()), Ce.unshift(0), ($e = U[0]), U[1] >= u / 2 && ++$e;
        do
          (x = 0),
            (l = t(U, M, Q, I)),
            l < 0
              ? ((Z = M[0]),
                Q != I && (Z = Z * u + (M[1] || 0)),
                (x = (Z / $e) | 0),
                x > 1
                  ? (x >= u && (x = u - 1),
                    (A = e(U, x, u)),
                    (k = A.length),
                    (I = M.length),
                    (l = t(A, M, k, I)),
                    l == 1 && (x--, r(A, Q < k ? Ce : U, k, u)))
                  : (x == 0 && (l = x = 1), (A = U.slice())),
                (k = A.length),
                k < I && A.unshift(0),
                r(M, A, I, u),
                l == -1 &&
                  ((I = M.length),
                  (l = t(U, M, Q, I)),
                  l < 1 && (x++, r(M, Q < I ? Ce : U, I, u))),
                (I = M.length))
              : l === 0 && (x++, (M = [0])),
            (B[h++] = x),
            l && M[0] ? (M[I++] = X[Be] || 0) : ((M = [X[Be]]), (I = 1));
        while ((Be++ < fe || M[0] !== void 0) && L--);
        C = M[0] !== void 0;
      }
      B[0] || B.shift();
    }
    if (S == 1) (O.e = g), (fo = C);
    else {
      for (h = 1, x = B[0]; x >= 10; x /= 10) h++;
      (O.e = h + g * S - 1), D(O, a ? o + O.e + 1 : o, s, C);
    }
    return O;
  };
})();
function D(e, t, r, n) {
  var i,
    o,
    s,
    a,
    u,
    l,
    g,
    h,
    x,
    S = e.constructor;
  e: if (t != null) {
    if (((h = e.d), !h)) return e;
    for (i = 1, a = h[0]; a >= 10; a /= 10) i++;
    if (((o = t - i), o < 0))
      (o += N),
        (s = t),
        (g = h[(x = 0)]),
        (u = (g / H(10, i - s - 1)) % 10 | 0);
    else if (((x = Math.ceil((o + 1) / N)), (a = h.length), x >= a))
      if (n) {
        for (; a++ <= x; ) h.push(0);
        (g = u = 0), (i = 1), (o %= N), (s = o - N + 1);
      } else break e;
    else {
      for (g = a = h[x], i = 1; a >= 10; a /= 10) i++;
      (o %= N),
        (s = o - N + i),
        (u = s < 0 ? 0 : (g / H(10, i - s - 1)) % 10 | 0);
    }
    if (
      ((n =
        n ||
        t < 0 ||
        h[x + 1] !== void 0 ||
        (s < 0 ? g : g % H(10, i - s - 1))),
      (l =
        r < 4
          ? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  (o > 0 ? (s > 0 ? g / H(10, i - s) : 0) : h[x - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !h[0])
    )
      return (
        (h.length = 0),
        l
          ? ((t -= e.e + 1), (h[0] = H(10, (N - (t % N)) % N)), (e.e = -t || 0))
          : (h[0] = e.e = 0),
        e
      );
    if (
      (o == 0
        ? ((h.length = x), (a = 1), x--)
        : ((h.length = x + 1),
          (a = H(10, N - o)),
          (h[x] = s > 0 ? ((g / H(10, i - s)) % H(10, s) | 0) * a : 0)),
      l)
    )
      for (;;)
        if (x == 0) {
          for (o = 1, s = h[0]; s >= 10; s /= 10) o++;
          for (s = h[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, h[0] == pe && (h[0] = 1));
          break;
        } else {
          if (((h[x] += a), h[x] != pe)) break;
          (h[x--] = 0), (a = 1);
        }
    for (o = h.length; h[--o] === 0; ) h.pop();
  }
  return (
    F &&
      (e.e > S.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < S.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function he(e, t, r) {
  if (!e.isFinite()) return xo(e);
  var n,
    i = e.e,
    o = Y(e.d),
    s = o.length;
  return (
    t
      ? (r && (n = r - s) > 0
          ? (o = o.charAt(0) + "." + o.slice(1) + ke(n))
          : s > 1 && (o = o.charAt(0) + "." + o.slice(1)),
        (o = o + (e.e < 0 ? "e" : "e+") + e.e))
      : i < 0
      ? ((o = "0." + ke(-i - 1) + o), r && (n = r - s) > 0 && (o += ke(n)))
      : i >= s
      ? ((o += ke(i + 1 - s)),
        r && (n = r - i - 1) > 0 && (o = o + "." + ke(n)))
      : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)),
        r && (n = r - s) > 0 && (i + 1 === s && (o += "."), (o += ke(n)))),
    o
  );
}
function xr(e, t) {
  var r = e[0];
  for (t *= N; r >= 10; r /= 10) t++;
  return t;
}
function Er(e, t, r) {
  if (t > du) throw ((F = !0), r && (e.precision = r), Error(mo));
  return D(new e(yr), t, 1, !0);
}
function ce(e, t, r) {
  if (t > gn) throw Error(mo);
  return D(new e(wr), t, r, !0);
}
function wo(e) {
  var t = e.length - 1,
    r = t * N + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function ke(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Eo(e, t, r, n) {
  var i,
    o = new e(1),
    s = Math.ceil(n / N + 4);
  for (F = !1; ; ) {
    if (
      (r % 2 && ((o = o.times(t)), co(o.d, s) && (i = !0)),
      (r = te(r / 2)),
      r === 0)
    ) {
      (r = o.d.length - 1), i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    (t = t.times(t)), co(t.d, s);
  }
  return (F = !0), o;
}
function lo(e) {
  return e.d[e.d.length - 1] & 1;
}
function bo(e, t, r) {
  for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
    if (((n = new e(t[o])), n.s)) i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function hn(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    u,
    l = 0,
    g = 0,
    h = 0,
    x = e.constructor,
    S = x.rounding,
    C = x.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new x(
      e.d ? (e.d[0] ? (e.s < 0 ? 0 : 1 / 0) : 1) : e.s ? (e.s < 0 ? 0 : e) : NaN
    );
  for (
    t == null ? ((F = !1), (u = C)) : (u = t), a = new x(0.03125);
    e.e > -2;

  )
    (e = e.times(a)), (h += 5);
  for (
    n = ((Math.log(H(2, h)) / Math.LN10) * 2 + 5) | 0,
      u += n,
      r = o = s = new x(1),
      x.precision = u;
    ;

  ) {
    if (
      ((o = D(o.times(e), u, 1)),
      (r = r.times(++g)),
      (a = s.plus(q(o, r, u, 1))),
      Y(a.d).slice(0, u) === Y(s.d).slice(0, u))
    ) {
      for (i = h; i--; ) s = D(s.times(s), u, 1);
      if (t == null)
        if (l < 3 && Ft(s.d, u - n, S, l))
          (x.precision = u += 10), (r = o = a = new x(1)), (g = 0), l++;
        else return D(s, (x.precision = C), S, (F = !0));
      else return (x.precision = C), s;
    }
    s = a;
  }
}
function Oe(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    u,
    l,
    g,
    h,
    x,
    S = 1,
    C = 10,
    A = e,
    k = A.d,
    O = A.constructor,
    B = O.rounding,
    M = O.precision;
  if (A.s < 0 || !k || !k[0] || (!A.e && k[0] == 1 && k.length == 1))
    return new O(k && !k[0] ? -1 / 0 : A.s != 1 ? NaN : k ? 0 : A);
  if (
    (t == null ? ((F = !1), (g = M)) : (g = t),
    (O.precision = g += C),
    (r = Y(k)),
    (n = r.charAt(0)),
    Math.abs((o = A.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (A = A.times(e)), (r = Y(A.d)), (n = r.charAt(0)), S++;
    (o = A.e),
      n > 1 ? ((A = new O("0." + r)), o++) : (A = new O(n + "." + r.slice(1)));
  } else
    return (
      (l = Er(O, g + 2, M).times(o + "")),
      (A = Oe(new O(n + "." + r.slice(1)), g - C).plus(l)),
      (O.precision = M),
      t == null ? D(A, M, B, (F = !0)) : A
    );
  for (
    h = A,
      u = s = A = q(A.minus(1), A.plus(1), g, 1),
      x = D(A.times(A), g, 1),
      i = 3;
    ;

  ) {
    if (
      ((s = D(s.times(x), g, 1)),
      (l = u.plus(q(s, new O(i), g, 1))),
      Y(l.d).slice(0, g) === Y(u.d).slice(0, g))
    )
      if (
        ((u = u.times(2)),
        o !== 0 && (u = u.plus(Er(O, g + 2, M).times(o + ""))),
        (u = q(u, new O(S), g, 1)),
        t == null)
      )
        if (Ft(u.d, g - C, B, a))
          (O.precision = g += C),
            (l = s = A = q(h.minus(1), h.plus(1), g, 1)),
            (x = D(A.times(A), g, 1)),
            (i = a = 1);
        else return D(u, (O.precision = M), B, (F = !0));
      else return (O.precision = M), u;
    (u = l), (i += 2);
  }
}
function xo(e) {
  return String((e.s * e.s) / 0);
}
function yn(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (e.e = r = r - n - 1),
      (e.d = []),
      (n = (r + 1) % N),
      r < 0 && (n += N),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= N; n < i; )
        e.d.push(+t.slice(n, (n += N)));
      (t = t.slice(n)), (n = N - t.length);
    } else n -= i;
    for (; n--; ) t += "0";
    e.d.push(+t),
      F &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function hu(e, t) {
  var r, n, i, o, s, a, u, l, g;
  if (t.indexOf("_") > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), yo.test(t))) return yn(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (pu.test(t)) (r = 16), (t = t.toLowerCase());
  else if (cu.test(t)) r = 2;
  else if (fu.test(t)) r = 8;
  else throw Error(Me + t);
  for (
    o = t.search(/p/i),
      o > 0
        ? ((u = +t.slice(o + 1)), (t = t.substring(2, o)))
        : (t = t.slice(2)),
      o = t.indexOf("."),
      s = o >= 0,
      n = e.constructor,
      s &&
        ((t = t.replace(".", "")),
        (a = t.length),
        (o = a - o),
        (i = Eo(n, new n(r), o, o * 2))),
      l = hr(t, r, pe),
      g = l.length - 1,
      o = g;
    l[o] === 0;
    --o
  )
    l.pop();
  return o < 0
    ? new n(e.s * 0)
    : ((e.e = xr(l, g)),
      (e.d = l),
      (F = !1),
      s && (e = q(e, i, a * 4)),
      u && (e = e.times(Math.abs(u) < 54 ? H(2, u) : Ge.pow(2, u))),
      (F = !0),
      e);
}
function yu(e, t) {
  var r,
    n = t.d.length;
  if (n < 3) return t.isZero() ? t : ct(e, 2, t, t);
  (r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / Pr(5, r))),
    (t = ct(e, 2, t, t));
  for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
    (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))));
  return t;
}
function ct(e, t, r, n, i) {
  var o,
    s,
    a,
    u,
    l = 1,
    g = e.precision,
    h = Math.ceil(g / N);
  for (F = !1, u = r.times(r), a = new e(n); ; ) {
    if (
      ((s = q(a.times(u), new e(t++ * t++), g, 1)),
      (a = i ? n.plus(s) : n.minus(s)),
      (n = q(s.times(u), new e(t++ * t++), g, 1)),
      (s = a.plus(n)),
      s.d[h] !== void 0)
    ) {
      for (o = h; s.d[o] === a.d[o] && o--; );
      if (o == -1) break;
    }
    (o = a), (a = n), (n = s), (s = o), l++;
  }
  return (F = !0), (s.d.length = h + 1), s;
}
function Pr(e, t) {
  for (var r = e; --t; ) r *= e;
  return r;
}
function Po(e, t) {
  var r,
    n = t.s < 0,
    i = ce(e, e.precision, 1),
    o = i.times(0.5);
  if (((t = t.abs()), t.lte(o))) return (Pe = n ? 4 : 1), t;
  if (((r = t.divToInt(i)), r.isZero())) Pe = n ? 3 : 2;
  else {
    if (((t = t.minus(r.times(i))), t.lte(o)))
      return (Pe = lo(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
    Pe = lo(r) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function wn(e, t, r, n) {
  var i,
    o,
    s,
    a,
    u,
    l,
    g,
    h,
    x,
    S = e.constructor,
    C = r !== void 0;
  if (
    (C
      ? (oe(r, 1, Ne), n === void 0 ? (n = S.rounding) : oe(n, 0, 8))
      : ((r = S.precision), (n = S.rounding)),
    !e.isFinite())
  )
    g = xo(e);
  else {
    for (
      g = he(e),
        s = g.indexOf("."),
        C
          ? ((i = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
          : (i = t),
        s >= 0 &&
          ((g = g.replace(".", "")),
          (x = new S(1)),
          (x.e = g.length - s),
          (x.d = hr(he(x), 10, i)),
          (x.e = x.d.length)),
        h = hr(g, 10, i),
        o = u = h.length;
      h[--u] == 0;

    )
      h.pop();
    if (!h[0]) g = C ? "0p+0" : "0";
    else {
      if (
        (s < 0
          ? o--
          : ((e = new S(e)),
            (e.d = h),
            (e.e = o),
            (e = q(e, x, r, n, 0, i)),
            (h = e.d),
            (o = e.e),
            (l = fo)),
        (s = h[r]),
        (a = i / 2),
        (l = l || h[r + 1] !== void 0),
        (l =
          n < 4
            ? (s !== void 0 || l) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              (s === a &&
                (n === 4 ||
                  l ||
                  (n === 6 && h[r - 1] & 1) ||
                  n === (e.s < 0 ? 8 : 7)))),
        (h.length = r),
        l)
      )
        for (; ++h[--r] > i - 1; ) (h[r] = 0), r || (++o, h.unshift(1));
      for (u = h.length; !h[u - 1]; --u);
      for (s = 0, g = ""; s < u; s++) g += mn.charAt(h[s]);
      if (C) {
        if (u > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --u; u % s; u++) g += "0";
            for (h = hr(g, i, t), u = h.length; !h[u - 1]; --u);
            for (s = 1, g = "1."; s < u; s++) g += mn.charAt(h[s]);
          } else g = g.charAt(0) + "." + g.slice(1);
        g = g + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; ) g = "0" + g;
        g = "0." + g;
      } else if (++o > u) for (o -= u; o--; ) g += "0";
      else o < u && (g = g.slice(0, o) + "." + g.slice(o));
    }
    g = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + g;
  }
  return e.s < 0 ? "-" + g : g;
}
function co(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function wu(e) {
  return new this(e).abs();
}
function Eu(e) {
  return new this(e).acos();
}
function bu(e) {
  return new this(e).acosh();
}
function xu(e, t) {
  return new this(e).plus(t);
}
function Pu(e) {
  return new this(e).asin();
}
function vu(e) {
  return new this(e).asinh();
}
function Tu(e) {
  return new this(e).atan();
}
function Cu(e) {
  return new this(e).atanh();
}
function Au(e, t) {
  (e = new this(e)), (t = new this(t));
  var r,
    n = this.precision,
    i = this.rounding,
    o = n + 4;
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
      ? ((r = ce(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
      : !t.d || e.isZero()
      ? ((r = t.s < 0 ? ce(this, n, i) : new this(0)), (r.s = e.s))
      : !e.d || t.isZero()
      ? ((r = ce(this, o, 1).times(0.5)), (r.s = e.s))
      : t.s < 0
      ? ((this.precision = o),
        (this.rounding = 1),
        (r = this.atan(q(e, t, o, 1))),
        (t = ce(this, o, 1)),
        (this.precision = n),
        (this.rounding = i),
        (r = e.s < 0 ? r.minus(t) : r.plus(t)))
      : (r = this.atan(q(e, t, o, 1))),
    r
  );
}
function Ru(e) {
  return new this(e).cbrt();
}
function Su(e) {
  return D((e = new this(e)), e.e + 1, 2);
}
function Iu(e, t, r) {
  return new this(e).clamp(t, r);
}
function Du(e) {
  if (!e || typeof e != "object") throw Error(br + "Object expected");
  var t,
    r,
    n,
    i = e.defaults === !0,
    o = [
      "precision",
      1,
      Ne,
      "rounding",
      0,
      8,
      "toExpNeg",
      -lt,
      0,
      "toExpPos",
      0,
      lt,
      "maxE",
      0,
      lt,
      "minE",
      -lt,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < o.length; t += 3)
    if (((r = o[t]), i && (this[r] = dn[r]), (n = e[r]) !== void 0))
      if (te(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(Me + r + ": " + n);
  if (((r = "crypto"), i && (this[r] = dn[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto != "undefined" &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[r] = !0;
        else throw Error(go);
      else this[r] = !1;
    else throw Error(Me + r + ": " + n);
  return this;
}
function ku(e) {
  return new this(e).cos();
}
function Ou(e) {
  return new this(e).cosh();
}
function vo(e) {
  var t, r, n;
  function i(o) {
    var s,
      a,
      u,
      l = this;
    if (!(l instanceof i)) return new i(o);
    if (((l.constructor = i), po(o))) {
      (l.s = o.s),
        F
          ? !o.d || o.e > i.maxE
            ? ((l.e = NaN), (l.d = null))
            : o.e < i.minE
            ? ((l.e = 0), (l.d = [0]))
            : ((l.e = o.e), (l.d = o.d.slice()))
          : ((l.e = o.e), (l.d = o.d ? o.d.slice() : o.d));
      return;
    }
    if (((u = typeof o), u === "number")) {
      if (o === 0) {
        (l.s = 1 / o < 0 ? -1 : 1), (l.e = 0), (l.d = [0]);
        return;
      }
      if ((o < 0 ? ((o = -o), (l.s = -1)) : (l.s = 1), o === ~~o && o < 1e7)) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        F
          ? s > i.maxE
            ? ((l.e = NaN), (l.d = null))
            : s < i.minE
            ? ((l.e = 0), (l.d = [0]))
            : ((l.e = s), (l.d = [o]))
          : ((l.e = s), (l.d = [o]));
        return;
      } else if (o * 0 !== 0) {
        o || (l.s = NaN), (l.e = NaN), (l.d = null);
        return;
      }
      return yn(l, o.toString());
    } else if (u !== "string") throw Error(Me + o);
    return (
      (a = o.charCodeAt(0)) === 45
        ? ((o = o.slice(1)), (l.s = -1))
        : (a === 43 && (o = o.slice(1)), (l.s = 1)),
      yo.test(o) ? yn(l, o) : hu(l, o)
    );
  }
  if (
    ((i.prototype = R),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.EUCLID = 9),
    (i.config = i.set = Du),
    (i.clone = vo),
    (i.isDecimal = po),
    (i.abs = wu),
    (i.acos = Eu),
    (i.acosh = bu),
    (i.add = xu),
    (i.asin = Pu),
    (i.asinh = vu),
    (i.atan = Tu),
    (i.atanh = Cu),
    (i.atan2 = Au),
    (i.cbrt = Ru),
    (i.ceil = Su),
    (i.clamp = Iu),
    (i.cos = ku),
    (i.cosh = Ou),
    (i.div = Mu),
    (i.exp = Nu),
    (i.floor = _u),
    (i.hypot = Fu),
    (i.ln = Lu),
    (i.log = Bu),
    (i.log10 = qu),
    (i.log2 = $u),
    (i.max = Uu),
    (i.min = Vu),
    (i.mod = ju),
    (i.mul = Ju),
    (i.pow = Qu),
    (i.random = Gu),
    (i.round = Hu),
    (i.sign = Wu),
    (i.sin = Ku),
    (i.sinh = zu),
    (i.sqrt = Yu),
    (i.sub = Zu),
    (i.sum = Xu),
    (i.tan = el),
    (i.tanh = tl),
    (i.trunc = rl),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ],
        t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return i.config(e), i;
}
function Mu(e, t) {
  return new this(e).div(t);
}
function Nu(e) {
  return new this(e).exp();
}
function _u(e) {
  return D((e = new this(e)), e.e + 1, 3);
}
function Fu() {
  var e,
    t,
    r = new this(0);
  for (F = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return (F = !0), new this(1 / 0);
      r = t;
    }
  return (F = !0), r.sqrt();
}
function po(e) {
  return e instanceof Ge || (e && e.toStringTag === ho) || !1;
}
function Lu(e) {
  return new this(e).ln();
}
function Bu(e, t) {
  return new this(e).log(t);
}
function $u(e) {
  return new this(e).log(2);
}
function qu(e) {
  return new this(e).log(10);
}
function Uu() {
  return bo(this, arguments, "lt");
}
function Vu() {
  return bo(this, arguments, "gt");
}
function ju(e, t) {
  return new this(e).mod(t);
}
function Ju(e, t) {
  return new this(e).mul(t);
}
function Qu(e, t) {
  return new this(e).pow(t);
}
function Gu(e) {
  var t,
    r,
    n,
    i,
    o = 0,
    s = new this(1),
    a = [];
  if (
    (e === void 0 ? (e = this.precision) : oe(e, 1, Ne),
    (n = Math.ceil(e / N)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        (i = t[o]),
          i >= 429e7
            ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (a[o++] = i % 1e7);
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes((n *= 4)); o < n; )
        (i =
          t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24)),
          i >= 214e7
            ? crypto.randomBytes(4).copy(t, o)
            : (a.push(i % 1e7), (o += 4));
      o = n / 4;
    } else throw Error(go);
  else for (; o < n; ) a[o++] = (Math.random() * 1e7) | 0;
  for (
    n = a[--o],
      e %= N,
      n && e && ((i = H(10, N - e)), (a[o] = ((n / i) | 0) * i));
    a[o] === 0;
    o--
  )
    a.pop();
  if (o < 0) (r = 0), (a = [0]);
  else {
    for (r = -1; a[0] === 0; r -= N) a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
    n < N && (r -= N - n);
  }
  return (s.e = r), (s.d = a), s;
}
function Hu(e) {
  return D((e = new this(e)), e.e + 1, this.rounding);
}
function Wu(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function Ku(e) {
  return new this(e).sin();
}
function zu(e) {
  return new this(e).sinh();
}
function Yu(e) {
  return new this(e).sqrt();
}
function Zu(e, t) {
  return new this(e).sub(t);
}
function Xu() {
  var e = 0,
    t = arguments,
    r = new this(t[e]);
  for (F = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
  return (F = !0), D(r, this.precision, this.rounding);
}
function el(e) {
  return new this(e).tan();
}
function tl(e) {
  return new this(e).tanh();
}
function rl(e) {
  return D((e = new this(e)), e.e + 1, 1);
}
R[Symbol.for("nodejs.util.inspect.custom")] = R.toString;
R[Symbol.toStringTag] = "Decimal";
var Ge = (R.constructor = vo(dn));
yr = new Ge(yr);
wr = new Ge(wr);
var ve = Ge;
function pt(e) {
  return Ge.isDecimal(e)
    ? !0
    : e !== null &&
        typeof e == "object" &&
        typeof e.s == "number" &&
        typeof e.e == "number" &&
        typeof e.toFixed == "function" &&
        Array.isArray(e.d);
}
d();
c();
p();
f();
m();
var Lt = class {
  constructor(t, r, n, i, o) {
    (this.modelName = t),
      (this.name = r),
      (this.typeName = n),
      (this.isList = i),
      (this.isEnum = o);
  }
  _toGraphQLInputType() {
    let t = this.isList ? "List" : "",
      r = this.isEnum ? "Enum" : "";
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function ft(e) {
  return e instanceof Lt;
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var vr = class {
  constructor(t) {
    this.value = t;
  }
  write(t) {
    t.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
d();
c();
p();
f();
m();
var Tr = (e) => e,
  Cr = { bold: Tr, red: Tr, green: Tr, dim: Tr, enabled: !1 },
  To = { bold: sr, red: nt, green: Ci, dim: ar, enabled: !0 },
  mt = {
    write(e) {
      e.writeLine(",");
    },
  };
d();
c();
p();
f();
m();
var ye = class {
  constructor(t) {
    this.contents = t;
    this.isUnderlined = !1;
    this.color = (t) => t;
  }
  underline() {
    return (this.isUnderlined = !0), this;
  }
  setColor(t) {
    return (this.color = t), this;
  }
  write(t) {
    let r = t.getCurrentLineLength();
    t.write(this.color(this.contents)),
      this.isUnderlined &&
        t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(
            this.color("~".repeat(this.contents.length))
          );
        });
  }
};
d();
c();
p();
f();
m();
var _e = class {
  constructor() {
    this.hasError = !1;
  }
  markAsError() {
    return (this.hasError = !0), this;
  }
};
var dt = class extends _e {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  addItem(r) {
    return this.items.push(new vr(r)), this;
  }
  getField(r) {
    return this.items[r];
  }
  getPrintWidth() {
    return this.items.length === 0
      ? 2
      : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
  }
  write(r) {
    if (this.items.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithItems(r);
  }
  writeEmpty(r) {
    let n = new ye("[]");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithItems(r) {
    let { colors: n } = r.context;
    r
      .writeLine("[")
      .withIndent(() => r.writeJoined(mt, this.items).newLine())
      .write("]"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
  }
  asObject() {}
};
d();
c();
p();
f();
m();
var Co = ": ",
  Ar = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = !1;
    }
    markAsError() {
      this.hasError = !0;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + Co.length;
    }
    write(t) {
      let r = new ye(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(Co).write(this.value);
    }
  };
d();
c();
p();
f();
m();
var Rr = class e extends _e {
  constructor() {
    super(...arguments);
    this.fields = {};
    this.suggestions = [];
  }
  addField(r) {
    this.fields[r.name] = r;
  }
  addSuggestion(r) {
    this.suggestions.push(r);
  }
  getField(r) {
    return this.fields[r];
  }
  getDeepField(r) {
    let [n, ...i] = r,
      o = this.getField(n);
    if (!o) return;
    let s = o;
    for (let a of i) {
      let u;
      if (
        (s.value instanceof e
          ? (u = s.value.getField(a))
          : s.value instanceof dt && (u = s.value.getField(Number(a))),
        !u)
      )
        return;
      s = u;
    }
    return s;
  }
  getDeepFieldValue(r) {
    var n;
    return r.length === 0
      ? this
      : (n = this.getDeepField(r)) == null
      ? void 0
      : n.value;
  }
  hasField(r) {
    return !!this.getField(r);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(r) {
    delete this.fields[r];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(r) {
    var n;
    return (n = this.getField(r)) == null ? void 0 : n.value;
  }
  getDeepSubSelectionValue(r) {
    let n = this;
    for (let i of r) {
      if (!(n instanceof e)) return;
      let o = n.getSubSelectionValue(i);
      if (!o) return;
      n = o;
    }
    return n;
  }
  getDeepSelectionParent(r) {
    let n = this.getSelectionParent();
    if (!n) return;
    let i = n;
    for (let o of r) {
      let s = i.value.getFieldValue(o);
      if (!s || !(s instanceof e)) return;
      let a = s.getSelectionParent();
      if (!a) return;
      i = a;
    }
    return i;
  }
  getSelectionParent() {
    var i, o;
    let r = (i = this.getField("select")) == null ? void 0 : i.value.asObject();
    if (r) return { kind: "select", value: r };
    let n =
      (o = this.getField("include")) == null ? void 0 : o.value.asObject();
    if (n) return { kind: "include", value: n };
  }
  getSubSelectionValue(r) {
    var n;
    return (n = this.getSelectionParent()) == null
      ? void 0
      : n.value.fields[r].value;
  }
  getPrintWidth() {
    let r = Object.values(this.fields);
    return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
  }
  write(r) {
    let n = Object.values(this.fields);
    if (n.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithContents(r, n);
  }
  asObject() {
    return this;
  }
  writeEmpty(r) {
    let n = new ye("{}");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithContents(r, n) {
    r.writeLine("{").withIndent(() => {
      r.writeJoined(mt, [...n, ...this.suggestions]).newLine();
    }),
      r.write("}"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
  }
};
d();
c();
p();
f();
m();
var K = class extends _e {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new ye(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
  asObject() {}
};
var En = class {
  constructor(t) {
    this.errorMessages = [];
    this.arguments = t;
  }
  write(t) {
    t.write(this.arguments);
  }
  addErrorMessage(t) {
    this.errorMessages.push(t);
  }
  renderAllMessages(t) {
    return this.errorMessages.map((r) => r(t)).join(`
`);
  }
};
function Sr(e) {
  return new En(Ao(e));
}
function Ao(e) {
  let t = new Rr();
  for (let [r, n] of Object.entries(e)) {
    let i = new Ar(r, Ro(n));
    t.addField(i);
  }
  return t;
}
function Ro(e) {
  if (typeof e == "string") return new K(JSON.stringify(e));
  if (typeof e == "number" || typeof e == "boolean") return new K(String(e));
  if (typeof e == "bigint") return new K(`${e}n`);
  if (e === null) return new K("null");
  if (e === void 0) return new K("undefined");
  if (pt(e)) return new K(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array)
    return w.Buffer.isBuffer(e)
      ? new K(`Buffer.alloc(${e.byteLength})`)
      : new K(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = gr(e) ? e.toISOString() : "Invalid Date";
    return new K(`new Date("${t}")`);
  }
  return e instanceof xe
    ? new K(`Prisma.${e._getName()}`)
    : ft(e)
    ? new K(`prisma.${uo(e.modelName)}.$fields.${e.name}`)
    : Array.isArray(e)
    ? il(e)
    : typeof e == "object"
    ? Ao(e)
    : new K(Object.prototype.toString.call(e));
}
function il(e) {
  let t = new dt();
  for (let r of e) t.addItem(Ro(r));
  return t;
}
function So(e) {
  if (e === void 0) return "";
  let t = Sr(e);
  return new at(0, { colors: Cr }).write(t).toString();
}
d();
c();
p();
f();
m();
var ol = "P2037";
function Bt({ error: e, user_facing_error: t }, r, n) {
  return t.error_code
    ? new z(sl(t, n), {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new ae(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
function sl(e, t) {
  let r = e.message;
  return (
    (t === "postgresql" || t === "postgres" || t === "mysql") &&
      e.error_code === ol &&
      (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`),
    r
  );
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var bn = class {
  getLocation() {
    return null;
  }
};
function Fe(e) {
  return typeof $EnabledCallSite == "function" && e !== "minimal"
    ? new $EnabledCallSite()
    : new bn();
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Io = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function gt(e = {}) {
  let t = ul(e);
  return Object.entries(t).reduce(
    (n, [i, o]) => (
      Io[i] !== void 0 ? (n.select[i] = { select: o }) : (n[i] = o), n
    ),
    { select: {} }
  );
}
function ul(e = {}) {
  return typeof e._count == "boolean"
    ? { ...e, _count: { _all: e._count } }
    : e;
}
function Ir(e = {}) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
function Do(e, t) {
  let r = Ir(e);
  return t({ action: "aggregate", unpacker: r, argsMapper: gt })(e);
}
d();
c();
p();
f();
m();
function ll(e = {}) {
  let { select: t, ...r } = e;
  return typeof t == "object"
    ? gt({ ...r, _count: t })
    : gt({ ...r, _count: { _all: !0 } });
}
function cl(e = {}) {
  return typeof e.select == "object"
    ? (t) => Ir(e)(t)._count
    : (t) => Ir(e)(t)._count._all;
}
function ko(e, t) {
  return t({ action: "count", unpacker: cl(e), argsMapper: ll })(e);
}
d();
c();
p();
f();
m();
function pl(e = {}) {
  let t = gt(e);
  if (Array.isArray(t.by))
    for (let r of t.by) typeof r == "string" && (t.select[r] = !0);
  else typeof t.by == "string" && (t.select[t.by] = !0);
  return t;
}
function fl(e = {}) {
  return (t) => (
    typeof (e == null ? void 0 : e._count) == "boolean" &&
      t.forEach((r) => {
        r._count = r._count._all;
      }),
    t
  );
}
function Oo(e, t) {
  return t({ action: "groupBy", unpacker: fl(e), argsMapper: pl })(e);
}
function Mo(e, t, r) {
  if (t === "aggregate") return (n) => Do(n, r);
  if (t === "count") return (n) => ko(n, r);
  if (t === "groupBy") return (n) => Oo(n, r);
}
d();
c();
p();
f();
m();
function No(e, t) {
  let r = t.fields.filter((i) => !i.relationName),
    n = on(r, (i) => i.name);
  return new Proxy(
    {},
    {
      get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new Lt(e, o, s.type, s.isList, s.kind === "enum");
      },
      ...mr(Object.keys(n)),
    }
  );
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var _o = (e) => (Array.isArray(e) ? e : e.split(".")),
  xn = (e, t) => _o(t).reduce((r, n) => r && r[n], e),
  Fo = (e, t, r) =>
    _o(t).reduceRight(
      (n, i, o, s) => Object.assign({}, xn(e, s.slice(0, o)), { [i]: n }),
      r
    );
function ml(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
function dl(e, t, r) {
  return t === void 0 ? (e != null ? e : {}) : Fo(t, r, e || !0);
}
function Pn(e, t, r, n, i, o) {
  let a = e._runtimeDataModel.models[t].fields.reduce(
    (u, l) => ({ ...u, [l.name]: l }),
    {}
  );
  return (u) => {
    let l = Fe(e._errorFormat),
      g = ml(n, i),
      h = dl(u, o, g),
      x = r({ dataPath: g, callsite: l })(h),
      S = gl(e, t);
    return new Proxy(x, {
      get(C, A) {
        if (!S.includes(A)) return C[A];
        let O = [a[A].type, r, A],
          B = [g, h];
        return Pn(e, ...O, ...B);
      },
      ...mr([...S, ...Object.getOwnPropertyNames(x)]),
    });
  };
}
function gl(e, t) {
  return e._runtimeDataModel.models[t].fields
    .filter((r) => r.kind === "object")
    .map((r) => r.name);
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var hl = Ue(Wi());
var yl = {
    red: nt,
    gray: Ii,
    dim: ar,
    bold: sr,
    underline: Ti,
    highlightSource: (e) => e.highlight(),
  },
  wl = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
function El({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
  return {
    functionName: `prisma.${t}()`,
    message: e,
    isPanic: r != null ? r : !1,
    callArguments: n,
  };
}
function bl(
  {
    functionName: e,
    location: t,
    message: r,
    isPanic: n,
    contextLines: i,
    callArguments: o,
  },
  s
) {
  let a = [""],
    u = t ? " in" : ":";
  if (
    (n
      ? (a.push(
          s.red(
            `Oops, an unknown error occurred! This is ${s.bold(
              "on us"
            )}, you did nothing wrong.`
          )
        ),
        a.push(
          s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`)
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)),
    t && a.push(s.underline(xl(t))),
    i)
  ) {
    a.push("");
    let l = [i.toString()];
    o && (l.push(o), l.push(s.dim(")"))), a.push(l.join("")), o && a.push("");
  } else a.push(""), o && a.push(o), a.push("");
  return (
    a.push(r),
    a.join(`
`)
  );
}
function xl(e) {
  let t = [e.fileName];
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(":")
  );
}
function ht(e) {
  let t = e.showColors ? yl : wl,
    r;
  return (
    typeof $getTemplateParameters != "undefined"
      ? (r = $getTemplateParameters(e, t))
      : (r = El(e)),
    bl(r, t)
  );
}
function Lo(e, t, r, n) {
  return e === Se.ModelAction.findFirstOrThrow ||
    e === Se.ModelAction.findUniqueOrThrow
    ? Pl(t, r, n)
    : n;
}
function Pl(e, t, r) {
  return async (n) => {
    if ("rejectOnNotFound" in n.args) {
      let o = ht({
        originalMethod: n.clientMethod,
        callsite: n.callsite,
        message: "'rejectOnNotFound' option is not supported",
      });
      throw new ee(o, { clientVersion: t });
    }
    return await r(n).catch((o) => {
      throw o instanceof z && o.code === "P2025"
        ? new Ie(`No ${e} found`, t)
        : o;
    });
  };
}
d();
c();
p();
f();
m();
function we(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
var vl = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete",
  ],
  Tl = ["aggregate", "count", "groupBy"];
function vn(e, t) {
  var i;
  let r = (i = e._extensions.getAllModelExtensions(t)) != null ? i : {},
    n = [
      Cl(e, t),
      Rl(e, t),
      _t(r),
      ne("name", () => t),
      ne("$name", () => t),
      ne("$parent", () => e._appliedParent),
    ];
  return ge({}, n);
}
function Cl(e, t) {
  let r = we(t),
    n = Object.keys(Se.ModelAction).concat("count");
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = i,
        s = (u) => e._request(u);
      s = Lo(o, t, e._clientVersion, s);
      let a = (u) => (l) => {
        let g = Fe(e._errorFormat);
        return e._createPrismaPromise((h) => {
          let x = {
            args: l,
            dataPath: [],
            action: o,
            model: t,
            clientMethod: `${r}.${i}`,
            jsModelName: r,
            transaction: h,
            callsite: g,
          };
          return s({ ...x, ...u });
        });
      };
      return vl.includes(o) ? Pn(e, t, a) : Al(i) ? Mo(e, i, a) : a({});
    },
  };
}
function Al(e) {
  return Tl.includes(e);
}
function Rl(e, t) {
  return Qe(
    ne("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return No(t, r);
    })
  );
}
d();
c();
p();
f();
m();
function Bo(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var Tn = Symbol();
function $t(e) {
  let t = [Sl(e), ne(Tn, () => e), ne("$parent", () => e._appliedParent)],
    r = e._extensions.getAllClientExtensions();
  return r && t.push(_t(r)), ge(e, t);
}
function Sl(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(we),
    n = [...new Set(t.concat(r))];
  return Qe({
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = Bo(i);
      if (e._runtimeDataModel.models[o] !== void 0) return vn(e, o);
      if (e._runtimeDataModel.models[i] !== void 0) return vn(e, i);
    },
    getPropertyDescriptor(i) {
      if (!r.includes(i)) return { enumerable: !1 };
    },
  });
}
function $o(e) {
  return e[Tn] ? e[Tn] : e;
}
function qo(e) {
  var r;
  if (typeof e == "function") return e(this);
  if ((r = e.client) != null && r.__AccelerateEngine) {
    let n = e.client.__AccelerateEngine;
    this._originalClient._engine = new n(
      this._originalClient._accelerateEngineConfig
    );
  }
  let t = Object.create(this._originalClient, {
    _extensions: { value: this._extensions.append(e) },
    _appliedParent: { value: this, configurable: !0 },
    $use: { value: void 0 },
    $on: { value: void 0 },
  });
  return $t(t);
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function Uo({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
  let o = i.getAllComputedFields(t);
  if (!o) return e;
  let s = [],
    a = [];
  for (let u of Object.values(o)) {
    if (n) {
      if (n[u.name]) continue;
      let l = u.needs.filter((g) => n[g]);
      l.length > 0 && a.push(st(l));
    } else if (r) {
      if (!r[u.name]) continue;
      let l = u.needs.filter((g) => !r[g]);
      l.length > 0 && a.push(st(l));
    }
    Il(e, u.needs) && s.push(Dl(u, ge(e, s)));
  }
  return s.length > 0 || a.length > 0 ? ge(e, [...s, ...a]) : e;
}
function Il(e, t) {
  return t.every((r) => nn(e, r));
}
function Dl(e, t) {
  return Qe(ne(e.name, () => e.compute(t)));
}
d();
c();
p();
f();
m();
function Dr({
  visitor: e,
  result: t,
  args: r,
  runtimeDataModel: n,
  modelName: i,
}) {
  var s;
  if (Array.isArray(t)) {
    for (let a = 0; a < t.length; a++)
      t[a] = Dr({
        result: t[a],
        args: r,
        modelName: i,
        runtimeDataModel: n,
        visitor: e,
      });
    return t;
  }
  let o = (s = e(t, i, r)) != null ? s : t;
  return (
    r.include &&
      Vo({
        includeOrSelect: r.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      Vo({
        includeOrSelect: r.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    o
  );
}
function Vo({
  includeOrSelect: e,
  result: t,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: i,
}) {
  for (let [o, s] of Object.entries(e)) {
    if (!s || t[o] == null) continue;
    let u = n.models[r].fields.find((g) => g.name === o);
    if (!u || u.kind !== "object" || !u.relationName) continue;
    let l = typeof s == "object" ? s : {};
    t[o] = Dr({
      visitor: i,
      result: t[o],
      args: l,
      modelName: u.type,
      runtimeDataModel: n,
    });
  }
}
function jo({
  result: e,
  modelName: t,
  args: r,
  extensions: n,
  runtimeDataModel: i,
}) {
  return n.isEmpty() || e == null || typeof e != "object" || !i.models[t]
    ? e
    : Dr({
        result: e,
        args: r != null ? r : {},
        modelName: t,
        runtimeDataModel: i,
        visitor: (s, a, u) =>
          Uo({
            result: s,
            modelName: we(a),
            select: u.select,
            omit: u.omit,
            extensions: n,
          }),
      });
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function Jo(e) {
  if (e instanceof ue) return kl(e);
  if (Array.isArray(e)) {
    let r = [e[0]];
    for (let n = 1; n < e.length; n++) r[n] = qt(e[n]);
    return r;
  }
  let t = {};
  for (let r in e) t[r] = qt(e[r]);
  return t;
}
function kl(e) {
  return new ue(e.strings, e.values);
}
function qt(e) {
  if (typeof e != "object" || e == null || e instanceof xe || ft(e)) return e;
  if (pt(e)) return new ve(e.toFixed());
  if (ut(e)) return new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length,
      r;
    for (r = Array(t); t--; ) r[t] = qt(e[t]);
    return r;
  }
  if (typeof e == "object") {
    let t = {};
    for (let r in e)
      r === "__proto__"
        ? Object.defineProperty(t, r, {
            value: qt(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = qt(e[r]));
    return t;
  }
  je(e, "Unknown value");
}
function Go(e, t, r, n = 0) {
  return e._createPrismaPromise((i) => {
    var s, a;
    let o = t.customDataProxyFetch;
    return (
      "transaction" in t &&
        i !== void 0 &&
        (((s = t.transaction) == null ? void 0 : s.kind) === "batch" &&
          t.transaction.lock.then(),
        (t.transaction = i)),
      n === r.length
        ? e._executeRequest(t)
        : r[n]({
            model: t.model,
            operation: t.model ? t.action : t.clientMethod,
            args: Jo((a = t.args) != null ? a : {}),
            __internalParams: t,
            query: (u, l = t) => {
              let g = l.customDataProxyFetch;
              return (
                (l.customDataProxyFetch = zo(o, g)),
                (l.args = u),
                Go(e, l, r, n + 1)
              );
            },
          })
    );
  });
}
function Ho(e, t) {
  let { jsModelName: r, action: n, clientMethod: i } = t,
    o = r ? n : i;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let s = e._extensions.getAllQueryCallbacks(r != null ? r : "$none", o);
  return Go(e, t, s);
}
function Wo(e) {
  return (t) => {
    let r = { requests: t },
      n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? Ko(r, n, 0, e) : e(r);
  };
}
function Ko(e, t, r, n) {
  if (r === t.length) return n(e);
  let i = e.customDataProxyFetch,
    o = e.requests[0].transaction;
  return t[r]({
    args: {
      queries: e.requests.map((s) => ({
        model: s.modelName,
        operation: s.action,
        args: s.args,
      })),
      transaction: o
        ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 }
        : void 0,
    },
    __internalParams: e,
    query(s, a = e) {
      let u = a.customDataProxyFetch;
      return (a.customDataProxyFetch = zo(i, u)), Ko(a, t, r + 1, n);
    },
  });
}
var Qo = (e) => e;
function zo(e = Qo, t = Qo) {
  return (r) => e(t(r));
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function Zo(e, t, r) {
  let n = we(r);
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : Ol({
        ...e,
        ...Yo(t.name, e, t.result.$allModels),
        ...Yo(t.name, e, t.result[n]),
      });
}
function Ol(e) {
  let t = new de(),
    r = (n, i) =>
      t.getOrCreate(n, () =>
        i.has(n)
          ? [n]
          : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n])
      );
  return ot(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function Yo(e, t, r) {
  return r
    ? ot(r, ({ needs: n, compute: i }, o) => ({
        name: o,
        needs: n ? Object.keys(n).filter((s) => n[s]) : [],
        compute: Ml(t, o, i),
      }))
    : {};
}
function Ml(e, t, r) {
  var i;
  let n = (i = e == null ? void 0 : e[t]) == null ? void 0 : i.compute;
  return n ? (o) => r({ ...o, [t]: n(o) }) : r;
}
function Xo(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (e[n.name]) for (let i of n.needs) r[i] = !0;
  return r;
}
function es(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (!e[n.name]) for (let i of n.needs) delete r[i];
  return r;
}
var kr = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new de();
      this.modelExtensionsCache = new de();
      this.queryCallbacksCache = new de();
      this.clientExtensions = It(() => {
        var t, r;
        return this.extension.client
          ? {
              ...((r = this.previous) == null
                ? void 0
                : r.getAllClientExtensions()),
              ...this.extension.client,
            }
          : (t = this.previous) == null
          ? void 0
          : t.getAllClientExtensions();
      });
      this.batchCallbacks = It(() => {
        var n, i, o;
        let t =
            (i =
              (n = this.previous) == null
                ? void 0
                : n.getAllBatchQueryCallbacks()) != null
              ? i
              : [],
          r = (o = this.extension.query) == null ? void 0 : o.$__internalBatch;
        return r ? t.concat(r) : t;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () => {
        var r;
        return Zo(
          (r = this.previous) == null ? void 0 : r.getAllComputedFields(t),
          this.extension,
          t
        );
      });
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        var n, i;
        let r = we(t);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? (n = this.previous) == null
            ? void 0
            : n.getAllModelExtensions(t)
          : {
              ...((i = this.previous) == null
                ? void 0
                : i.getAllModelExtensions(t)),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        var s, a;
        let n =
            (a =
              (s = this.previous) == null
                ? void 0
                : s.getAllQueryCallbacks(t, r)) != null
              ? a
              : [],
          i = [],
          o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations)
          ? n
          : (o[t] !== void 0 &&
              (o[t][r] !== void 0 && i.push(o[t][r]),
              o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)),
            t !== "$none" &&
              o.$allModels !== void 0 &&
              (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]),
              o.$allModels.$allOperations !== void 0 &&
                i.push(o.$allModels.$allOperations)),
            o[r] !== void 0 && i.push(o[r]),
            o.$allOperations !== void 0 && i.push(o.$allOperations),
            n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  },
  Or = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e();
    }
    static single(t) {
      return new e(new kr(t));
    }
    isEmpty() {
      return this.head === void 0;
    }
    append(t) {
      return new e(new kr(t, this.head));
    }
    getAllComputedFields(t) {
      var r;
      return (r = this.head) == null ? void 0 : r.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      var t;
      return (t = this.head) == null ? void 0 : t.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      var r;
      return (r = this.head) == null ? void 0 : r.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      var n, i;
      return (i =
        (n = this.head) == null ? void 0 : n.getAllQueryCallbacks(t, r)) != null
        ? i
        : [];
    }
    getAllBatchQueryCallbacks() {
      var t, r;
      return (r =
        (t = this.head) == null ? void 0 : t.getAllBatchQueryCallbacks()) !=
        null
        ? r
        : [];
    }
  };
d();
c();
p();
f();
m();
var ts = re("prisma:client"),
  rs = { Vercel: "vercel", "Netlify CI": "netlify" };
function ns({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (ts("checkPlatformCaching:postinstall", e),
    ts("checkPlatformCaching:ciName", t),
    e === !0 && t && t in rs)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${rs[t]}-build`;
    throw (console.error(n), new G(n, r));
  }
}
d();
c();
p();
f();
m();
function is(e, t) {
  return e
    ? e.datasources
      ? e.datasources
      : e.datasourceUrl
      ? { [t[0]]: { url: e.datasourceUrl } }
      : {}
    : {};
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Nl = "Cloudflare-Workers",
  _l = "node";
function os() {
  var e, t, r;
  return typeof Netlify == "object"
    ? "netlify"
    : typeof EdgeRuntime == "string"
    ? "edge-light"
    : ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === Nl
    ? "workerd"
    : globalThis.Deno
    ? "deno"
    : globalThis.__lagon__
    ? "lagon"
    : ((r = (t = globalThis.process) == null ? void 0 : t.release) == null
        ? void 0
        : r.name) === _l
    ? "node"
    : globalThis.Bun
    ? "bun"
    : globalThis.fastly
    ? "fastly"
    : "unknown";
}
var Fl = {
  node: "Node.js",
  workerd: "Cloudflare Workers",
  deno: "Deno and Deno Deploy",
  netlify: "Netlify Edge Functions",
  "edge-light": "Vercel Edge Functions or Edge Middleware",
};
function Cn() {
  let e = os();
  return {
    id: e,
    prettyName: Fl[e] || e,
    isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e),
  };
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function yt({
  inlineDatasources: e,
  overrideDatasources: t,
  env: r,
  clientVersion: n,
}) {
  var u, l;
  let i,
    o = Object.keys(e)[0],
    s = (u = e[o]) == null ? void 0 : u.url,
    a = (l = t[o]) == null ? void 0 : l.url;
  if (
    (o === void 0
      ? (i = void 0)
      : a
      ? (i = a)
      : s != null && s.value
      ? (i = s.value)
      : s != null && s.fromEnvVar && (i = r[s.fromEnvVar]),
    (s == null ? void 0 : s.fromEnvVar) !== void 0 && i === void 0)
  )
    throw Cn().id === "workerd"
      ? new G(
          `error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`,
          n
        )
      : new G(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (i === void 0)
    throw new G(
      "error: Missing URL environment variable, value, or override.",
      n
    );
  return i;
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Mr = class extends Error {
  constructor(t, r) {
    super(t), (this.clientVersion = r.clientVersion), (this.cause = r.cause);
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
var se = class extends Mr {
  constructor(t, r) {
    var n;
    super(t, r), (this.isRetryable = (n = r.isRetryable) != null ? n : !0);
  }
};
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
function $(e, t) {
  return { ...e, isRetryable: t };
}
var wt = class extends se {
  constructor(r) {
    super("This request must be retried", $(r, !0));
    this.name = "ForcedRetryError";
    this.code = "P5001";
  }
};
_(wt, "ForcedRetryError");
d();
c();
p();
f();
m();
var He = class extends se {
  constructor(r, n) {
    super(r, $(n, !1));
    this.name = "InvalidDatasourceError";
    this.code = "P6001";
  }
};
_(He, "InvalidDatasourceError");
d();
c();
p();
f();
m();
var We = class extends se {
  constructor(r, n) {
    super(r, $(n, !1));
    this.name = "NotImplementedYetError";
    this.code = "P5004";
  }
};
_(We, "NotImplementedYetError");
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var j = class extends se {
  constructor(t, r) {
    super(t, r), (this.response = r.response);
    let n = this.response.headers.get("prisma-request-id");
    if (n) {
      let i = `(The request id was: ${n})`;
      this.message = this.message + " " + i;
    }
  }
};
var Ke = class extends j {
  constructor(r) {
    super("Schema needs to be uploaded", $(r, !0));
    this.name = "SchemaMissingError";
    this.code = "P5005";
  }
};
_(Ke, "SchemaMissingError");
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var An = "This request could not be understood by the server",
  Ut = class extends j {
    constructor(r, n, i) {
      super(n || An, $(r, !1));
      this.name = "BadRequestError";
      this.code = "P5000";
      i && (this.code = i);
    }
  };
_(Ut, "BadRequestError");
d();
c();
p();
f();
m();
var Vt = class extends j {
  constructor(r, n) {
    super("Engine not started: healthcheck timeout", $(r, !0));
    this.name = "HealthcheckTimeoutError";
    this.code = "P5013";
    this.logs = n;
  }
};
_(Vt, "HealthcheckTimeoutError");
d();
c();
p();
f();
m();
var jt = class extends j {
  constructor(r, n, i) {
    super(n, $(r, !0));
    this.name = "EngineStartupError";
    this.code = "P5014";
    this.logs = i;
  }
};
_(jt, "EngineStartupError");
d();
c();
p();
f();
m();
var Jt = class extends j {
  constructor(r) {
    super("Engine version is not supported", $(r, !1));
    this.name = "EngineVersionNotSupportedError";
    this.code = "P5012";
  }
};
_(Jt, "EngineVersionNotSupportedError");
d();
c();
p();
f();
m();
var Rn = "Request timed out",
  Qt = class extends j {
    constructor(r, n = Rn) {
      super(n, $(r, !1));
      this.name = "GatewayTimeoutError";
      this.code = "P5009";
    }
  };
_(Qt, "GatewayTimeoutError");
d();
c();
p();
f();
m();
var Ll = "Interactive transaction error",
  Gt = class extends j {
    constructor(r, n = Ll) {
      super(n, $(r, !1));
      this.name = "InteractiveTransactionError";
      this.code = "P5015";
    }
  };
_(Gt, "InteractiveTransactionError");
d();
c();
p();
f();
m();
var Bl = "Request parameters are invalid",
  Ht = class extends j {
    constructor(r, n = Bl) {
      super(n, $(r, !1));
      this.name = "InvalidRequestError";
      this.code = "P5011";
    }
  };
_(Ht, "InvalidRequestError");
d();
c();
p();
f();
m();
var Sn = "Requested resource does not exist",
  Wt = class extends j {
    constructor(r, n = Sn) {
      super(n, $(r, !1));
      this.name = "NotFoundError";
      this.code = "P5003";
    }
  };
_(Wt, "NotFoundError");
d();
c();
p();
f();
m();
var In = "Unknown server error",
  Et = class extends j {
    constructor(r, n, i) {
      super(n || In, $(r, !0));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = i;
    }
  };
_(Et, "ServerError");
d();
c();
p();
f();
m();
var Dn = "Unauthorized, check your connection string",
  Kt = class extends j {
    constructor(r, n = Dn) {
      super(n, $(r, !1));
      this.name = "UnauthorizedError";
      this.code = "P5007";
    }
  };
_(Kt, "UnauthorizedError");
d();
c();
p();
f();
m();
var kn = "Usage exceeded, retry again later",
  zt = class extends j {
    constructor(r, n = kn) {
      super(n, $(r, !0));
      this.name = "UsageExceededError";
      this.code = "P5008";
    }
  };
_(zt, "UsageExceededError");
async function $l(e) {
  let t;
  try {
    t = await e.text();
  } catch (r) {
    return { type: "EmptyError" };
  }
  try {
    let r = JSON.parse(t);
    if (typeof r == "string")
      switch (r) {
        case "InternalDataProxyError":
          return { type: "DataProxyError", body: r };
        default:
          return { type: "UnknownTextError", body: r };
      }
    if (typeof r == "object" && r !== null) {
      if ("is_panic" in r && "message" in r && "error_code" in r)
        return { type: "QueryEngineError", body: r };
      if (
        "EngineNotStarted" in r ||
        "InteractiveTransactionMisrouted" in r ||
        "InvalidRequestError" in r
      ) {
        let n = Object.values(r)[0].reason;
        return typeof n == "string" &&
          !["SchemaMissing", "EngineVersionNotSupported"].includes(n)
          ? { type: "UnknownJsonError", body: r }
          : { type: "DataProxyError", body: r };
      }
    }
    return { type: "UnknownJsonError", body: r };
  } catch (r) {
    return t === ""
      ? { type: "EmptyError" }
      : { type: "UnknownTextError", body: t };
  }
}
async function Yt(e, t) {
  if (e.ok) return;
  let r = { clientVersion: t, response: e },
    n = await $l(e);
  if (n.type === "QueryEngineError")
    throw new z(n.body.message, { code: n.body.error_code, clientVersion: t });
  if (n.type === "DataProxyError") {
    if (n.body === "InternalDataProxyError")
      throw new Et(r, "Internal Data Proxy error");
    if ("EngineNotStarted" in n.body) {
      if (n.body.EngineNotStarted.reason === "SchemaMissing") return new Ke(r);
      if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
        throw new Jt(r);
      if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: i, logs: o } =
          n.body.EngineNotStarted.reason.EngineStartupError;
        throw new jt(r, i, o);
      }
      if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: i, error_code: o } =
          n.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new G(i, t, o);
      }
      if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
        let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new Vt(r, i);
      }
    }
    if ("InteractiveTransactionMisrouted" in n.body) {
      let i = {
        IDParseError: "Could not parse interactive transaction ID",
        NoQueryEngineFoundError:
          "Could not find Query Engine for the specified host and transaction ID",
        TransactionStartError: "Could not start interactive transaction",
      };
      throw new Gt(r, i[n.body.InteractiveTransactionMisrouted.reason]);
    }
    if ("InvalidRequestError" in n.body)
      throw new Ht(r, n.body.InvalidRequestError.reason);
  }
  if (e.status === 401 || e.status === 403) throw new Kt(r, bt(Dn, n));
  if (e.status === 404) return new Wt(r, bt(Sn, n));
  if (e.status === 429) throw new zt(r, bt(kn, n));
  if (e.status === 504) throw new Qt(r, bt(Rn, n));
  if (e.status >= 500) throw new Et(r, bt(In, n));
  if (e.status >= 400) throw new Ut(r, bt(An, n));
}
function bt(e, t) {
  return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
}
d();
c();
p();
f();
m();
function ss(e) {
  let t = Math.pow(2, e) * 50,
    r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
    n = t + r;
  return new Promise((i) => setTimeout(() => i(n), n));
}
d();
c();
p();
f();
m();
var Te = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function as(e) {
  let t = new TextEncoder().encode(e),
    r = "",
    n = t.byteLength,
    i = n % 3,
    o = n - i,
    s,
    a,
    u,
    l,
    g;
  for (let h = 0; h < o; h = h + 3)
    (g = (t[h] << 16) | (t[h + 1] << 8) | t[h + 2]),
      (s = (g & 16515072) >> 18),
      (a = (g & 258048) >> 12),
      (u = (g & 4032) >> 6),
      (l = g & 63),
      (r += Te[s] + Te[a] + Te[u] + Te[l]);
  return (
    i == 1
      ? ((g = t[o]),
        (s = (g & 252) >> 2),
        (a = (g & 3) << 4),
        (r += Te[s] + Te[a] + "=="))
      : i == 2 &&
        ((g = (t[o] << 8) | t[o + 1]),
        (s = (g & 64512) >> 10),
        (a = (g & 1008) >> 4),
        (u = (g & 15) << 2),
        (r += Te[s] + Te[a] + Te[u] + "=")),
    r
  );
}
d();
c();
p();
f();
m();
function us(e) {
  var r;
  if (
    !!(
      (r = e.generator) != null &&
      r.previewFeatures.some((n) => n.toLowerCase().includes("metrics"))
    )
  )
    throw new G(
      "The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate",
      e.clientVersion
    );
}
d();
c();
p();
f();
m();
function ql(e) {
  return e[0] * 1e3 + e[1] / 1e6;
}
function ls(e) {
  return new Date(ql(e));
}
d();
c();
p();
f();
m();
var cs = {
  "@prisma/debug": "workspace:*",
  "@prisma/engines-version":
    "5.15.0-29.12e25d8d06f6ea5a0252864dd9a03b1bb51f3022",
  "@prisma/fetch-engine": "workspace:*",
  "@prisma/get-platform": "workspace:*",
};
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Zt = class extends se {
  constructor(r, n) {
    super(
      `Cannot fetch data from service:
${r}`,
      $(n, !0)
    );
    this.name = "RequestError";
    this.code = "P5010";
  }
};
_(Zt, "RequestError");
async function ze(e, t, r = (n) => n) {
  var i;
  let n = t.clientVersion;
  try {
    return typeof fetch == "function"
      ? await r(fetch)(e, t)
      : await r(On)(e, t);
  } catch (o) {
    let s = (i = o.message) != null ? i : "Unknown error";
    throw new Zt(s, { clientVersion: n });
  }
}
function Vl(e) {
  return { ...e.headers, "Content-Type": "application/json" };
}
function jl(e) {
  return { method: e.method, headers: Vl(e) };
}
function Jl(e, t) {
  return {
    text: () => Promise.resolve(w.Buffer.concat(e).toString()),
    json: () =>
      Promise.resolve().then(() => JSON.parse(w.Buffer.concat(e).toString())),
    ok: t.statusCode >= 200 && t.statusCode <= 299,
    status: t.statusCode,
    url: t.url,
    headers: new Mn(t.headers),
  };
}
async function On(e, t = {}) {
  let r = Ql("https"),
    n = jl(t),
    i = [],
    { origin: o } = new URL(e);
  return new Promise((s, a) => {
    var l;
    let u = r.request(e, n, (g) => {
      let {
        statusCode: h,
        headers: { location: x },
      } = g;
      h >= 301 &&
        h <= 399 &&
        x &&
        (x.startsWith("http") === !1 ? s(On(`${o}${x}`, t)) : s(On(x, t))),
        g.on("data", (S) => i.push(S)),
        g.on("end", () => s(Jl(i, g))),
        g.on("error", a);
    });
    u.on("error", a), u.end((l = t.body) != null ? l : "");
  });
}
var Ql = typeof Pt != "undefined" ? Pt : () => {},
  Mn = class {
    constructor(t = {}) {
      this.headers = new Map();
      for (let [r, n] of Object.entries(t))
        if (typeof n == "string") this.headers.set(r, n);
        else if (Array.isArray(n)) for (let i of n) this.headers.set(r, i);
    }
    append(t, r) {
      this.headers.set(t, r);
    }
    delete(t) {
      this.headers.delete(t);
    }
    get(t) {
      var r;
      return (r = this.headers.get(t)) != null ? r : null;
    }
    has(t) {
      return this.headers.has(t);
    }
    set(t, r) {
      this.headers.set(t, r);
    }
    forEach(t, r) {
      for (let [n, i] of this.headers) t.call(r, i, n, this);
    }
  };
var Gl = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
  ps = re("prisma:client:dataproxyEngine");
async function Hl(e, t) {
  var s, a, u;
  let r = cs["@prisma/engines-version"],
    n = (s = t.clientVersion) != null ? s : "unknown";
  if (y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
    return y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
  let [i, o] = (a = n == null ? void 0 : n.split("-")) != null ? a : [];
  if (o === void 0 && Gl.test(i)) return i;
  if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
    if (e.startsWith("localhost") || e.startsWith("127.0.0.1")) return "0.0.0";
    let [l] = (u = r.split("-")) != null ? u : [],
      [g, h, x] = l.split("."),
      S = Wl(`<=${g}.${h}.${x}`),
      C = await ze(S, { clientVersion: n });
    if (!C.ok)
      throw new Error(
        `Failed to fetch stable Prisma version, unpkg.com status ${C.status} ${
          C.statusText
        }, response body: ${(await C.text()) || "<empty body>"}`
      );
    let A = await C.text();
    ps("length of body fetched from unpkg.com", A.length);
    let k;
    try {
      k = JSON.parse(A);
    } catch (O) {
      throw (
        (console.error("JSON.parse error: body fetched from unpkg.com: ", A), O)
      );
    }
    return k.version;
  }
  throw new We(
    "Only `major.minor.patch` versions are supported by Accelerate.",
    { clientVersion: n }
  );
}
async function fs(e, t) {
  let r = await Hl(e, t);
  return ps("version", r), r;
}
function Wl(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var ms = 3,
  Nn = re("prisma:client:dataproxyEngine"),
  _n = class {
    constructor({
      apiKey: t,
      tracingHelper: r,
      logLevel: n,
      logQueries: i,
      engineHash: o,
    }) {
      (this.apiKey = t),
        (this.tracingHelper = r),
        (this.logLevel = n),
        (this.logQueries = i),
        (this.engineHash = o);
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = {
        Authorization: `Bearer ${this.apiKey}`,
        "Prisma-Engine-Hash": this.engineHash,
      };
      this.tracingHelper.isEnabled() &&
        (n.traceparent = t != null ? t : this.tracingHelper.getTraceParent()),
        r && (n["X-transaction-id"] = r.id);
      let i = this.buildCaptureSettings();
      return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
    }
    buildCaptureSettings() {
      let t = [];
      return (
        this.tracingHelper.isEnabled() && t.push("tracing"),
        this.logLevel && t.push(this.logLevel),
        this.logQueries && t.push("query"),
        t
      );
    }
  },
  Xt = class {
    constructor(t) {
      this.name = "DataProxyEngine";
      us(t),
        (this.config = t),
        (this.env = { ...t.env, ...(typeof y != "undefined" ? y.env : {}) }),
        (this.inlineSchema = as(t.inlineSchema)),
        (this.inlineDatasources = t.inlineDatasources),
        (this.inlineSchemaHash = t.inlineSchemaHash),
        (this.clientVersion = t.clientVersion),
        (this.engineHash = t.engineVersion),
        (this.logEmitter = t.logEmitter),
        (this.tracingHelper = t.tracingHelper);
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== void 0 && (await this.startPromise),
        (this.startPromise = (async () => {
          let [t, r] = this.extractHostAndApiKey();
          (this.host = t),
            (this.headerBuilder = new _n({
              apiKey: r,
              tracingHelper: this.tracingHelper,
              logLevel: this.config.logLevel,
              logQueries: this.config.logQueries,
              engineHash: this.engineHash,
            })),
            (this.remoteClientVersion = await fs(t, this.config)),
            Nn("host", this.host);
        })()),
        await this.startPromise;
    }
    async stop() {}
    propagateResponseExtensions(t) {
      var r, n;
      (r = t == null ? void 0 : t.logs) != null &&
        r.length &&
        t.logs.forEach((i) => {
          switch (i.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let o =
                typeof i.attributes.query == "string" ? i.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [s] = o.split("/* traceparent");
                o = s;
              }
              this.logEmitter.emit("query", {
                query: o,
                timestamp: ls(i.timestamp),
                duration: Number(i.attributes.duration_ms),
                params: i.attributes.params,
                target: i.attributes.target,
              });
            }
          }
        }),
        (n = t == null ? void 0 : t.traces) != null &&
          n.length &&
          this.tracingHelper.createEngineSpan({ span: !0, spans: t.traces });
    }
    onBeforeExit() {
      throw new Error(
        '"beforeExit" hook is not applicable to the remote query engine'
      );
    }
    async url(t) {
      return (
        await this.start(),
        `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`
      );
    }
    async uploadSchema() {
      let t = { name: "schemaUpload", internal: !0 };
      return this.tracingHelper.runInChildSpan(t, async () => {
        let r = await ze(await this.url("schema"), {
          method: "PUT",
          headers: this.headerBuilder.build(),
          body: this.inlineSchema,
          clientVersion: this.clientVersion,
        });
        r.ok || Nn("schema response status", r.status);
        let n = await Yt(r, this.clientVersion);
        if (n)
          throw (
            (this.logEmitter.emit("warn", {
              message: `Error while uploading schema: ${n.message}`,
              timestamp: new Date(),
              target: "",
            }),
            n)
          );
        this.logEmitter.emit("info", {
          message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
          timestamp: new Date(),
          target: "",
        });
      });
    }
    request(
      t,
      { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }
    ) {
      return this.requestInternal({
        body: t,
        traceparent: r,
        interactiveTransaction: n,
        customDataProxyFetch: i,
      });
    }
    async requestBatch(
      t,
      { traceparent: r, transaction: n, customDataProxyFetch: i }
    ) {
      let o = (n == null ? void 0 : n.kind) === "itx" ? n.options : void 0,
        s = dr(t, n),
        { batchResult: a, elapsed: u } = await this.requestInternal({
          body: s,
          customDataProxyFetch: i,
          interactiveTransaction: o,
          traceparent: r,
        });
      return a.map((l) =>
        "errors" in l && l.errors.length > 0
          ? Bt(l.errors[0], this.clientVersion, this.config.activeProvider)
          : { data: l, elapsed: u }
      );
    }
    requestInternal({
      body: t,
      traceparent: r,
      customDataProxyFetch: n,
      interactiveTransaction: i,
    }) {
      return this.withRetry({
        actionGerund: "querying",
        callback: async ({ logHttpCall: o }) => {
          let s = i
            ? `${i.payload.endpoint}/graphql`
            : await this.url("graphql");
          o(s);
          let a = await ze(
            s,
            {
              method: "POST",
              headers: this.headerBuilder.build({
                traceparent: r,
                interactiveTransaction: i,
              }),
              body: JSON.stringify(t),
              clientVersion: this.clientVersion,
            },
            n
          );
          a.ok || Nn("graphql response status", a.status),
            await this.handleError(await Yt(a, this.clientVersion));
          let u = await a.json(),
            l = u.extensions;
          if ((l && this.propagateResponseExtensions(l), u.errors))
            throw u.errors.length === 1
              ? Bt(
                  u.errors[0],
                  this.config.clientVersion,
                  this.config.activeProvider
                )
              : new ae(u.errors, { clientVersion: this.config.clientVersion });
          return u;
        },
      });
    }
    async transaction(t, r, n) {
      let i = {
        start: "starting",
        commit: "committing",
        rollback: "rolling back",
      };
      return this.withRetry({
        actionGerund: `${i[t]} transaction`,
        callback: async ({ logHttpCall: o }) => {
          if (t === "start") {
            let s = JSON.stringify({
                max_wait: n.maxWait,
                timeout: n.timeout,
                isolation_level: n.isolationLevel,
              }),
              a = await this.url("transaction/start");
            o(a);
            let u = await ze(a, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              body: s,
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Yt(u, this.clientVersion));
            let l = await u.json(),
              g = l.extensions;
            g && this.propagateResponseExtensions(g);
            let h = l.id,
              x = l["data-proxy"].endpoint;
            return { id: h, payload: { endpoint: x } };
          } else {
            let s = `${n.payload.endpoint}/${t}`;
            o(s);
            let a = await ze(s, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Yt(a, this.clientVersion));
            let l = (await a.json()).extensions;
            l && this.propagateResponseExtensions(l);
            return;
          }
        },
      });
    }
    extractHostAndApiKey() {
      let t = { clientVersion: this.clientVersion },
        r = Object.keys(this.inlineDatasources)[0],
        n = yt({
          inlineDatasources: this.inlineDatasources,
          overrideDatasources: this.config.overrideDatasources,
          clientVersion: this.clientVersion,
          env: this.env,
        }),
        i;
      try {
        i = new URL(n);
      } catch (l) {
        throw new He(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t
        );
      }
      let { protocol: o, host: s, searchParams: a } = i;
      if (o !== "prisma:")
        throw new He(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t
        );
      let u = a.get("api_key");
      if (u === null || u.length < 1)
        throw new He(
          `Error validating datasource \`${r}\`: the URL must contain a valid API key`,
          t
        );
      return [s, u];
    }
    metrics() {
      throw new We("Metrics are not yet supported for Accelerate", {
        clientVersion: this.clientVersion,
      });
    }
    async withRetry(t) {
      var r;
      for (let n = 0; ; n++) {
        let i = (o) => {
          this.logEmitter.emit("info", {
            message: `Calling ${o} (n=${n})`,
            timestamp: new Date(),
            target: "",
          });
        };
        try {
          return await t.callback({ logHttpCall: i });
        } catch (o) {
          if (!(o instanceof se) || !o.isRetryable) throw o;
          if (n >= ms) throw o instanceof wt ? o.cause : o;
          this.logEmitter.emit("warn", {
            message: `Attempt ${n + 1}/${ms} failed for ${t.actionGerund}: ${
              (r = o.message) != null ? r : "(unknown)"
            }`,
            timestamp: new Date(),
            target: "",
          });
          let s = await ss(n);
          this.logEmitter.emit("warn", {
            message: `Retrying after ${s}ms`,
            timestamp: new Date(),
            target: "",
          });
        }
      }
    }
    async handleError(t) {
      if (t instanceof Ke)
        throw (
          (await this.uploadSchema(),
          new wt({ clientVersion: this.clientVersion, cause: t }))
        );
      if (t) throw t;
    }
    applyPendingMigrations() {
      throw new Error("Method not implemented.");
    }
  };
function ds({ copyEngine: e = !0 }, t) {
  let r;
  try {
    r = yt({
      inlineDatasources: t.inlineDatasources,
      overrideDatasources: t.overrideDatasources,
      env: { ...t.env, ...y.env },
      clientVersion: t.clientVersion,
    });
  } catch (u) {}
  e &&
    r != null &&
    r.startsWith("prisma://") &&
    cr(
      "recommend--no-engine",
      "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)"
    );
  let n = At(t.generator),
    i = !!((r != null && r.startsWith("prisma://")) || !e),
    o = !!t.adapter,
    s = n === "library",
    a = n === "binary";
  if ((i && o) || o) {
    let u;
    throw (
      ((u = [
        "Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.",
        "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor.",
      ]),
      new ee(
        u.join(`
`),
        { clientVersion: t.clientVersion }
      ))
    );
  }
  if (i) return new Xt(t);
  throw new ee("Invalid client engine type, please use `library` or `binary`", {
    clientVersion: t.clientVersion,
  });
}
d();
c();
p();
f();
m();
function Nr({ generator: e }) {
  var t;
  return (t = e == null ? void 0 : e.previewFeatures) != null ? t : [];
}
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var bs = Ue(Fn());
d();
c();
p();
f();
m();
function ws(e, t) {
  let r = Es(e),
    n = Kl(r),
    i = Yl(n);
  i ? _r(i, t) : t.addErrorMessage(() => "Unknown error");
}
function Es(e) {
  return e.errors.flatMap((t) => (t.kind === "Union" ? Es(t) : [t]));
}
function Kl(e) {
  let t = new Map(),
    r = [];
  for (let n of e) {
    if (n.kind !== "InvalidArgumentType") {
      r.push(n);
      continue;
    }
    let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`,
      o = t.get(i);
    o
      ? t.set(i, {
          ...n,
          argument: {
            ...n.argument,
            typeNames: zl(o.argument.typeNames, n.argument.typeNames),
          },
        })
      : t.set(i, n);
  }
  return r.push(...t.values()), r;
}
function zl(e, t) {
  return [...new Set(e.concat(t))];
}
function Yl(e) {
  return sn(e, (t, r) => {
    let n = hs(t),
      i = hs(r);
    return n !== i ? n - i : ys(t) - ys(r);
  });
}
function hs(e) {
  let t = 0;
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  );
}
function ys(e) {
  switch (e.kind) {
    case "InvalidArgumentValue":
    case "ValueTooLarge":
      return 20;
    case "InvalidArgumentType":
      return 10;
    case "RequiredArgumentMissing":
      return -10;
    default:
      return 0;
  }
}
d();
c();
p();
f();
m();
var le = class {
  constructor(t, r) {
    this.name = t;
    this.value = r;
    this.isRequired = !1;
  }
  makeRequired() {
    return (this.isRequired = !0), this;
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.addMarginSymbol(r(this.isRequired ? "+" : "?")),
      t.write(r(this.name)),
      this.isRequired || t.write(r("?")),
      t.write(r(": ")),
      typeof this.value == "string"
        ? t.write(r(this.value))
        : t.write(this.value);
  }
};
d();
c();
p();
f();
m();
var Fr = class {
  constructor() {
    this.fields = [];
  }
  addField(t, r) {
    return (
      this.fields.push({
        write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        },
      }),
      this
    );
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.writeLine(r("{"))
      .withIndent(() => {
        t.writeJoined(mt, this.fields).newLine();
      })
      .write(r("}"))
      .addMarginSymbol(r("+"));
  }
};
function _r(e, t) {
  switch (e.kind) {
    case "MutuallyExclusiveFields":
      Zl(e, t);
      break;
    case "IncludeOnScalar":
      Xl(e, t);
      break;
    case "EmptySelection":
      ec(e, t);
      break;
    case "UnknownSelectionField":
      nc(e, t);
      break;
    case "UnknownArgument":
      ic(e, t);
      break;
    case "UnknownInputField":
      oc(e, t);
      break;
    case "RequiredArgumentMissing":
      sc(e, t);
      break;
    case "InvalidArgumentType":
      ac(e, t);
      break;
    case "InvalidArgumentValue":
      uc(e, t);
      break;
    case "ValueTooLarge":
      lc(e, t);
      break;
    case "SomeFieldsMissing":
      cc(e, t);
      break;
    case "TooManyFieldsGiven":
      pc(e, t);
      break;
    case "Union":
      ws(e, t);
      break;
    default:
      throw new Error("not implemented: " + e.kind);
  }
}
function Zl(e, t) {
  var n, i, o;
  let r =
    (n = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null
      ? void 0
      : n.asObject();
  r &&
    ((i = r.getField(e.firstField)) == null || i.markAsError(),
    (o = r.getField(e.secondField)) == null || o.markAsError()),
    t.addErrorMessage(
      (s) =>
        `Please ${s.bold("either")} use ${s.green(
          `\`${e.firstField}\``
        )} or ${s.green(`\`${e.secondField}\``)}, but ${s.red(
          "not both"
        )} at the same time.`
    );
}
function Xl(e, t) {
  var s, a;
  let [r, n] = Lr(e.selectionPath),
    i = e.outputType,
    o = (s = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : s.value;
  if (o && ((a = o.getField(n)) == null || a.markAsError(), i))
    for (let u of i.fields)
      u.isRelation && o.addSuggestion(new le(u.name, "true"));
  t.addErrorMessage((u) => {
    let l = `Invalid scalar field ${u.red(`\`${n}\``)} for ${u.bold(
      "include"
    )} statement`;
    return (
      i ? (l += ` on model ${u.bold(i.name)}. ${er(u)}`) : (l += "."),
      (l += `
Note that ${u.bold("include")} statements only accept relation fields.`),
      l
    );
  });
}
function ec(e, t) {
  var n, i;
  let r =
    (n = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null
      ? void 0
      : n.asObject();
  if (r) {
    let o = (i = r.getField("omit")) == null ? void 0 : i.value.asObject();
    if (o) {
      tc(e, t, o);
      return;
    }
  }
  rc(e, t);
}
function tc(e, t, r) {
  r.removeAllFields();
  for (let n of e.outputType.fields) r.addSuggestion(new le(n.name, "false"));
  t.addErrorMessage(
    (n) =>
      `The ${n.red(
        "omit"
      )} statement includes every field of the model ${n.bold(
        e.outputType.name
      )}. At least one field must be included in the result`
  );
}
function rc(e, t) {
  var o, s;
  let r = e.outputType,
    n =
      (o = t.arguments.getDeepSelectionParent(e.selectionPath)) == null
        ? void 0
        : o.value,
    i = (s = n == null ? void 0 : n.isEmpty()) != null ? s : !1;
  n && (n.removeAllFields(), vs(n, r)),
    t.addErrorMessage((a) =>
      i
        ? `The ${a.red("`select`")} statement for type ${a.bold(
            r.name
          )} must not be empty. ${er(a)}`
        : `The ${a.red("`select`")} statement for type ${a.bold(
            r.name
          )} needs ${a.bold("at least one truthy value")}.`
    );
}
function nc(e, t) {
  var s, a, u, l, g, h, x;
  let [r, n] = Lr(e.selectionPath),
    i =
      (s = t.arguments.getDeepSubSelectionValue(r)) == null
        ? void 0
        : s.asObject(),
    o;
  if (i) {
    let S = (a = i.getFieldValue("select")) == null ? void 0 : a.asObject(),
      C = (u = i.getFieldValue("include")) == null ? void 0 : u.asObject(),
      A = (l = i.getFieldValue("omit")) == null ? void 0 : l.asObject();
    S != null && S.hasField(n)
      ? ((o = "select"),
        (g = S.getField(n)) == null || g.markAsError(),
        vs(S, e.outputType))
      : C != null && C.hasField(n)
      ? ((o = "include"),
        (h = C.getField(n)) == null || h.markAsError(),
        fc(C, e.outputType))
      : A != null &&
        A.hasField(n) &&
        ((o = "omit"),
        (x = A.getField(n)) == null || x.markAsError(),
        mc(A, e.outputType));
  }
  t.addErrorMessage((S) => {
    let C = [`Unknown field ${S.red(`\`${n}\``)}`];
    return (
      o && C.push(`for ${S.bold(o)} statement`),
      C.push(`on model ${S.bold(`\`${e.outputType.name}\``)}.`),
      C.push(er(S)),
      C.join(" ")
    );
  });
}
function ic(e, t) {
  var i, o;
  let r = e.argumentPath[0],
    n =
      (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null
        ? void 0
        : i.asObject();
  n && ((o = n.getField(r)) == null || o.markAsError(), dc(n, e.arguments)),
    t.addErrorMessage((s) =>
      xs(
        s,
        r,
        e.arguments.map((a) => a.name)
      )
    );
}
function oc(e, t) {
  var o, s, a;
  let [r, n] = Lr(e.argumentPath),
    i =
      (o = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null
        ? void 0
        : o.asObject();
  if (i) {
    (s = i.getDeepField(e.argumentPath)) == null || s.markAsError();
    let u = (a = i.getDeepFieldValue(r)) == null ? void 0 : a.asObject();
    u && Ts(u, e.inputType);
  }
  t.addErrorMessage((u) =>
    xs(
      u,
      n,
      e.inputType.fields.map((l) => l.name)
    )
  );
}
function xs(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    i = hc(t, r);
  return (
    i && n.push(`Did you mean \`${e.green(i)}\`?`),
    r.length > 0 && n.push(er(e)),
    n.join(" ")
  );
}
function sc(e, t) {
  var u, l;
  let r;
  t.addErrorMessage((g) =>
    (r == null ? void 0 : r.value) instanceof K && r.value.text === "null"
      ? `Argument \`${g.green(o)}\` must not be ${g.red("null")}.`
      : `Argument \`${g.green(o)}\` is missing.`
  );
  let n =
    (u = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null
      ? void 0
      : u.asObject();
  if (!n) return;
  let [i, o] = Lr(e.argumentPath),
    s = new Fr(),
    a = (l = n.getDeepFieldValue(i)) == null ? void 0 : l.asObject();
  if (a)
    if (
      ((r = a.getField(o)),
      r && a.removeField(o),
      e.inputTypes.length === 1 && e.inputTypes[0].kind === "object")
    ) {
      for (let g of e.inputTypes[0].fields)
        s.addField(g.name, g.typeNames.join(" | "));
      a.addSuggestion(new le(o, s).makeRequired());
    } else {
      let g = e.inputTypes.map(Ps).join(" | ");
      a.addSuggestion(new le(o, g).makeRequired());
    }
}
function Ps(e) {
  return e.kind === "list" ? `${Ps(e.elementType)}[]` : e.name;
}
function ac(e, t) {
  var i, o;
  let r = e.argument.name,
    n =
      (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null
        ? void 0
        : i.asObject();
  n && ((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()),
    t.addErrorMessage((s) => {
      let a = Br(
        "or",
        e.argument.typeNames.map((u) => s.green(u))
      );
      return `Argument \`${s.bold(
        r
      )}\`: Invalid value provided. Expected ${a}, provided ${s.red(
        e.inferredType
      )}.`;
    });
}
function uc(e, t) {
  var i, o;
  let r = e.argument.name,
    n =
      (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null
        ? void 0
        : i.asObject();
  n && ((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()),
    t.addErrorMessage((s) => {
      let a = [`Invalid value for argument \`${s.bold(r)}\``];
      if (
        (e.underlyingError && a.push(`: ${e.underlyingError}`),
        a.push("."),
        e.argument.typeNames.length > 0)
      ) {
        let u = Br(
          "or",
          e.argument.typeNames.map((l) => s.green(l))
        );
        a.push(` Expected ${u}.`);
      }
      return a.join("");
    });
}
function lc(e, t) {
  var o;
  let r = e.argument.name,
    n =
      (o = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null
        ? void 0
        : o.asObject(),
    i;
  if (n) {
    let s = n.getDeepField(e.argumentPath),
      a = s == null ? void 0 : s.value;
    a == null || a.markAsError(), a instanceof K && (i = a.text);
  }
  t.addErrorMessage((s) => {
    let a = ["Unable to fit value"];
    return (
      i && a.push(s.red(i)),
      a.push(`into a 64-bit signed integer for field \`${s.bold(r)}\``),
      a.join(" ")
    );
  });
}
function cc(e, t) {
  var i, o;
  let r = e.argumentPath[e.argumentPath.length - 1],
    n =
      (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null
        ? void 0
        : i.asObject();
  if (n) {
    let s =
      (o = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : o.asObject();
    s && Ts(s, e.inputType);
  }
  t.addErrorMessage((s) => {
    let a = [
      `Argument \`${s.bold(r)}\` of type ${s.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? a.push(
              `${s.green("at least one of")} ${Br(
                "or",
                e.constraints.requiredFields.map((u) => `\`${s.bold(u)}\``)
              )} arguments.`
            )
          : a.push(`${s.green("at least one")} argument.`)
        : a.push(
            `${s.green(`at least ${e.constraints.minFieldCount}`)} arguments.`
          ),
      a.push(er(s)),
      a.join(" ")
    );
  });
}
function pc(e, t) {
  var o, s;
  let r = e.argumentPath[e.argumentPath.length - 1],
    n =
      (o = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null
        ? void 0
        : o.asObject(),
    i = [];
  if (n) {
    let a =
      (s = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : s.asObject();
    a && (a.markAsError(), (i = Object.keys(a.getFields())));
  }
  t.addErrorMessage((a) => {
    let u = [
      `Argument \`${a.bold(r)}\` of type ${a.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
        ? u.push(`${a.green("exactly one")} argument,`)
        : e.constraints.maxFieldCount == 1
        ? u.push(`${a.green("at most one")} argument,`)
        : u.push(
            `${a.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`
          ),
      u.push(
        `but you provided ${Br(
          "and",
          i.map((l) => a.red(l))
        )}. Please choose`
      ),
      e.constraints.maxFieldCount === 1
        ? u.push("one.")
        : u.push(`${e.constraints.maxFieldCount}.`),
      u.join(" ")
    );
  });
}
function vs(e, t) {
  for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new le(r.name, "true"));
}
function fc(e, t) {
  for (let r of t.fields)
    r.isRelation &&
      !e.hasField(r.name) &&
      e.addSuggestion(new le(r.name, "true"));
}
function mc(e, t) {
  for (let r of t.fields)
    !e.hasField(r.name) &&
      !r.isRelation &&
      e.addSuggestion(new le(r.name, "true"));
}
function dc(e, t) {
  for (let r of t)
    e.hasField(r.name) ||
      e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
}
function Ts(e, t) {
  if (t.kind === "object")
    for (let r of t.fields)
      e.hasField(r.name) ||
        e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
}
function Lr(e) {
  let t = [...e],
    r = t.pop();
  if (!r) throw new Error("unexpected empty path");
  return [t, r];
}
function er({ green: e, enabled: t }) {
  return (
    "Available options are " +
    (t ? `listed in ${e("green")}` : "marked with ?") +
    "."
  );
}
function Br(e, t) {
  if (t.length === 1) return t[0];
  let r = [...t],
    n = r.pop();
  return `${r.join(", ")} ${e} ${n}`;
}
var gc = 3;
function hc(e, t) {
  let r = 1 / 0,
    n;
  for (let i of t) {
    let o = (0, bs.default)(e, i);
    o > gc || (o < r && ((r = o), (n = i)));
  }
  return n;
}
function $r({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: i,
  clientVersion: o,
}) {
  let s = Sr(e);
  for (let h of t) _r(h, s);
  let a = r === "pretty" ? To : Cr,
    u = s.renderAllMessages(a),
    l = new at(0, { colors: a }).write(s).toString(),
    g = ht({
      message: u,
      callsite: n,
      originalMethod: i,
      showColors: r === "pretty",
      callArguments: l,
    });
  throw new ee(g, { clientVersion: o });
}
var yc = {
  findUnique: "findUnique",
  findUniqueOrThrow: "findUniqueOrThrow",
  findFirst: "findFirst",
  findFirstOrThrow: "findFirstOrThrow",
  findMany: "findMany",
  count: "aggregate",
  create: "createOne",
  createMany: "createMany",
  createManyAndReturn: "createManyAndReturn",
  update: "updateOne",
  updateMany: "updateMany",
  upsert: "upsertOne",
  delete: "deleteOne",
  deleteMany: "deleteMany",
  executeRaw: "executeRaw",
  queryRaw: "queryRaw",
  aggregate: "aggregate",
  groupBy: "groupBy",
  runCommandRaw: "runCommandRaw",
  findRaw: "findRaw",
  aggregateRaw: "aggregateRaw",
};
function Cs({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: i,
  callsite: o,
  clientMethod: s,
  errorFormat: a,
  clientVersion: u,
  previewFeatures: l,
}) {
  let g = new Ln({
    runtimeDataModel: n,
    modelName: e,
    action: t,
    rootArgs: r,
    callsite: o,
    extensions: i,
    selectionPath: [],
    argumentPath: [],
    originalMethod: s,
    errorFormat: a,
    clientVersion: u,
    previewFeatures: l,
  });
  return { modelName: e, action: yc[t], query: Bn(r, g) };
}
function Bn({ select: e, include: t, ...r } = {}, n) {
  let i;
  return (
    n.isPreviewFeatureOn("omitApi") && ((i = r.omit), delete r.omit),
    { arguments: Rs(r, n), selection: wc(e, t, i, n) }
  );
}
function wc(e, t, r, n) {
  return e
    ? (t
        ? n.throwValidationError({
            kind: "MutuallyExclusiveFields",
            firstField: "include",
            secondField: "select",
            selectionPath: n.getSelectionPath(),
          })
        : r &&
          n.isPreviewFeatureOn("omitApi") &&
          n.throwValidationError({
            kind: "MutuallyExclusiveFields",
            firstField: "omit",
            secondField: "select",
            selectionPath: n.getSelectionPath(),
          }),
      Pc(e, n))
    : Ec(n, t, r);
}
function Ec(e, t, r) {
  let n = {};
  return (
    e.model && !e.isRawAction() && ((n.$composites = !0), (n.$scalars = !0)),
    t && bc(n, t, e),
    r && e.isPreviewFeatureOn("omitApi") && xc(n, r, e),
    n
  );
}
function bc(e, t, r) {
  for (let [n, i] of Object.entries(t)) {
    let o = r.findField(n);
    o &&
      (o == null ? void 0 : o.kind) !== "object" &&
      r.throwValidationError({
        kind: "IncludeOnScalar",
        selectionPath: r.getSelectionPath().concat(n),
        outputType: r.getOutputTypeDescription(),
      }),
      i === !0
        ? (e[n] = !0)
        : typeof i == "object" && (e[n] = Bn(i, r.nestSelection(n)));
  }
}
function xc(e, t, r) {
  let n = r.getComputedFields(),
    i = es(t, n);
  for (let [o, s] of Object.entries(i)) {
    let a = r.findField(o);
    (n != null && n[o] && !a) || (e[o] = !s);
  }
}
function Pc(e, t) {
  let r = {},
    n = t.getComputedFields(),
    i = Xo(e, n);
  for (let [o, s] of Object.entries(i)) {
    let a = t.findField(o);
    (n != null && n[o] && !a) ||
      (s === !0
        ? (r[o] = !0)
        : typeof s == "object" && (r[o] = Bn(s, t.nestSelection(o))));
  }
  return r;
}
function As(e, t) {
  if (e === null) return null;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
  if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
  if (ut(e)) {
    if (gr(e)) return { $type: "DateTime", value: e.toISOString() };
    t.throwValidationError({
      kind: "InvalidArgumentValue",
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ["Date"] },
      underlyingError: "Provided Date object is invalid",
    });
  }
  if (ft(e))
    return {
      $type: "FieldRef",
      value: { _ref: e.name, _container: e.modelName },
    };
  if (Array.isArray(e)) return vc(e, t);
  if (ArrayBuffer.isView(e))
    return { $type: "Bytes", value: w.Buffer.from(e).toString("base64") };
  if (Tc(e)) return e.values;
  if (pt(e)) return { $type: "Decimal", value: e.toFixed() };
  if (e instanceof xe) {
    if (e !== ln.instances[e._getName()])
      throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e._getName() };
  }
  if (Cc(e)) return e.toJSON();
  if (typeof e == "object") return Rs(e, t);
  t.throwValidationError({
    kind: "InvalidArgumentValue",
    selectionPath: t.getSelectionPath(),
    argumentPath: t.getArgumentPath(),
    argument: { name: t.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(
      e
    )} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  });
}
function Rs(e, t) {
  if (e.$type) return { $type: "Raw", value: e };
  let r = {};
  for (let n in e) {
    let i = e[n];
    i !== void 0 && (r[n] = As(i, t.nestArgument(n)));
  }
  return r;
}
function vc(e, t) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let i = t.nestArgument(String(n)),
      o = e[n];
    o === void 0 &&
      t.throwValidationError({
        kind: "InvalidArgumentValue",
        selectionPath: i.getSelectionPath(),
        argumentPath: i.getArgumentPath(),
        argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] },
        underlyingError:
          "Can not use `undefined` value within array. Use `null` or filter out `undefined` values",
      }),
      r.push(As(o, i));
  }
  return r;
}
function Tc(e) {
  return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
function Cc(e) {
  return typeof e == "object" && e !== null && typeof e.toJSON == "function";
}
var Ln = class e {
  constructor(t) {
    this.params = t;
    this.params.modelName &&
      (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
  }
  throwValidationError(t) {
    var r;
    $r({
      errors: [t],
      originalMethod: this.params.originalMethod,
      args: (r = this.params.rootArgs) != null ? r : {},
      callsite: this.params.callsite,
      errorFormat: this.params.errorFormat,
      clientVersion: this.params.clientVersion,
    });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.model))
      return {
        name: this.params.modelName,
        fields: this.model.fields.map((t) => ({
          name: t.name,
          typeName: "boolean",
          isRelation: t.kind === "object",
        })),
      };
  }
  isRawAction() {
    return [
      "executeRaw",
      "queryRaw",
      "runCommandRaw",
      "findRaw",
      "aggregateRaw",
    ].includes(this.params.action);
  }
  isPreviewFeatureOn(t) {
    return this.params.previewFeatures.includes(t);
  }
  getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    var r;
    return (r = this.model) == null
      ? void 0
      : r.fields.find((n) => n.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t),
      n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
    return new e({
      ...this.params,
      modelName: n,
      selectionPath: this.params.selectionPath.concat(t),
    });
  }
  nestArgument(t) {
    return new e({
      ...this.params,
      argumentPath: this.params.argumentPath.concat(t),
    });
  }
};
d();
c();
p();
f();
m();
var Ss = (e) => ({ command: e });
d();
c();
p();
f();
m();
d();
c();
p();
f();
m();
var Is = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
d();
c();
p();
f();
m();
function tr(e) {
  try {
    return Ds(e, "fast");
  } catch (t) {
    return Ds(e, "slow");
  }
}
function Ds(e, t) {
  return JSON.stringify(e.map((r) => Ac(r, t)));
}
function Ac(e, t) {
  return typeof e == "bigint"
    ? { prisma__type: "bigint", prisma__value: e.toString() }
    : ut(e)
    ? { prisma__type: "date", prisma__value: e.toJSON() }
    : ve.isDecimal(e)
    ? { prisma__type: "decimal", prisma__value: e.toJSON() }
    : w.Buffer.isBuffer(e)
    ? { prisma__type: "bytes", prisma__value: e.toString("base64") }
    : Rc(e) || ArrayBuffer.isView(e)
    ? {
        prisma__type: "bytes",
        prisma__value: w.Buffer.from(e).toString("base64"),
      }
    : typeof e == "object" && t === "slow"
    ? Os(e)
    : e;
}
function Rc(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == "object" && e !== null
    ? e[Symbol.toStringTag] === "ArrayBuffer" ||
      e[Symbol.toStringTag] === "SharedArrayBuffer"
    : !1;
}
function Os(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(ks);
  let t = {};
  for (let r of Object.keys(e)) t[r] = ks(e[r]);
  return t;
}
function ks(e) {
  return typeof e == "bigint" ? e.toString() : Os(e);
}
var Sc = /^(\s*alter\s)/i,
  Ms = re("prisma:client");
function $n(e, t, r, n) {
  if (
    !(e !== "postgresql" && e !== "cockroachdb") &&
    r.length > 0 &&
    Sc.exec(t)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var qn =
    ({ clientMethod: e, activeProvider: t }) =>
    (r) => {
      let n = "",
        i;
      if (Array.isArray(r)) {
        let [o, ...s] = r;
        (n = o), (i = { values: tr(s || []), __prismaRawParameters__: !0 });
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            (n = r.sql),
              (i = { values: tr(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            (n = r.text),
              (i = { values: tr(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case "sqlserver": {
            (n = Is(r)),
              (i = { values: tr(r.values), __prismaRawParameters__: !0 });
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return (
        i != null && i.values
          ? Ms(`prisma.${e}(${n}, ${i.values})`)
          : Ms(`prisma.${e}(${n})`),
        { query: n, parameters: i }
      );
    },
  Ns = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new ue(t, r);
    },
  },
  _s = {
    requestArgsToMiddlewareArgs(e) {
      return [e];
    },
    middlewareArgsToRequestArgs(e) {
      return e[0];
    },
  };
d();
c();
p();
f();
m();
function Un(e) {
  return function (r) {
    let n,
      i = (o = e) => {
        try {
          return o === void 0 || (o == null ? void 0 : o.kind) === "itx"
            ? n != null
              ? n
              : (n = Fs(r(o)))
            : Fs(r(o));
        } catch (s) {
          return Promise.reject(s);
        }
      };
    return {
      then(o, s) {
        return i().then(o, s);
      },
      catch(o) {
        return i().catch(o);
      },
      finally(o) {
        return i().finally(o);
      },
      requestTransaction(o) {
        let s = i(o);
        return s.requestTransaction ? s.requestTransaction(o) : s;
      },
      [Symbol.toStringTag]: "PrismaPromise",
    };
  };
}
function Fs(e) {
  return typeof e.then == "function" ? e : Promise.resolve(e);
}
d();
c();
p();
f();
m();
var Ls = {
    isEnabled() {
      return !1;
    },
    getTraceParent() {
      return "00-10-10-00";
    },
    async createEngineSpan() {},
    getActiveContext() {},
    runInChildSpan(e, t) {
      return t();
    },
  },
  Vn = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    createEngineSpan(t) {
      return this.getGlobalTracingHelper().createEngineSpan(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      var t, r;
      return (r =
        (t = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : t.helper) !=
        null
        ? r
        : Ls;
    }
  };
function Bs(e) {
  return e.includes("tracing") ? new Vn() : Ls;
}
d();
c();
p();
f();
m();
function $s(e, t = () => {}) {
  let r,
    n = new Promise((i) => (r = i));
  return {
    then(i) {
      return --e === 0 && r(t()), i == null ? void 0 : i(n);
    },
  };
}
d();
c();
p();
f();
m();
var Ic = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"],
  qs = Ic;
d();
c();
p();
f();
m();
function Us(e) {
  return typeof e == "string"
    ? e
    : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query"
          ? t
          : t && (r === "info" || t === "info")
          ? "info"
          : n;
      }, void 0);
}
d();
c();
p();
f();
m();
var qr = class {
  constructor() {
    this._middlewares = [];
  }
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
d();
c();
p();
f();
m();
var js = Ue(Xi());
d();
c();
p();
f();
m();
function Ur(e) {
  return typeof e.batchRequestIdx == "number";
}
d();
c();
p();
f();
m();
function Vr(e) {
  return e === null
    ? e
    : Array.isArray(e)
    ? e.map(Vr)
    : typeof e == "object"
    ? Dc(e)
      ? kc(e)
      : ot(e, Vr)
    : e;
}
function Dc(e) {
  return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function kc({ $type: e, value: t }) {
  switch (e) {
    case "BigInt":
      return BigInt(t);
    case "Bytes":
      return w.Buffer.from(t, "base64");
    case "DateTime":
      return new Date(t);
    case "Decimal":
      return new ve(t);
    case "Json":
      return JSON.parse(t);
    default:
      je(t, "Unknown tagged value");
  }
}
d();
c();
p();
f();
m();
function Vs(e) {
  if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
  let t = [];
  return (
    e.modelName && t.push(e.modelName),
    e.query.arguments && t.push(jn(e.query.arguments)),
    t.push(jn(e.query.selection)),
    t.join("")
  );
}
function jn(e) {
  return `(${Object.keys(e)
    .sort()
    .map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${jn(n)})` : r;
    })
    .join(" ")})`;
}
d();
c();
p();
f();
m();
var Oc = {
  aggregate: !1,
  aggregateRaw: !1,
  createMany: !0,
  createManyAndReturn: !0,
  createOne: !0,
  deleteMany: !0,
  deleteOne: !0,
  executeRaw: !0,
  findFirst: !1,
  findFirstOrThrow: !1,
  findMany: !1,
  findRaw: !1,
  findUnique: !1,
  findUniqueOrThrow: !1,
  groupBy: !1,
  queryRaw: !1,
  runCommandRaw: !0,
  updateMany: !0,
  updateOne: !0,
  upsertOne: !0,
};
function Jn(e) {
  return Oc[e];
}
d();
c();
p();
f();
m();
var jr = class {
  constructor(t) {
    this.options = t;
    this.tickActive = !1;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
          ((this.batches[r] = []),
          this.tickActive ||
            ((this.tickActive = !0),
            y.nextTick(() => {
              this.dispatchBatches(), (this.tickActive = !1);
            }))),
        new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
        r.length === 1
          ? this.options
              .singleLoader(r[0].request)
              .then((n) => {
                n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
              })
              .catch((n) => {
                r[0].reject(n);
              })
          : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)),
            this.options
              .batchLoader(r.map((n) => n.request))
              .then((n) => {
                if (n instanceof Error)
                  for (let i = 0; i < r.length; i++) r[i].reject(n);
                else
                  for (let i = 0; i < r.length; i++) {
                    let o = n[i];
                    o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
                  }
              })
              .catch((n) => {
                for (let i = 0; i < r.length; i++) r[i].reject(n);
              }));
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
var Mc = re("prisma:client:request_handler"),
  Jr = class {
    constructor(t, r) {
      (this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new jr({
          batchLoader: Wo(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, otelParentCtx: s } = n[0],
              a = n.map((h) => h.protocolQuery),
              u = this.client._tracingHelper.getTraceParent(s),
              l = n.some((h) => Jn(h.protocolQuery.action));
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: u,
                transaction: Nc(o),
                containsWrite: l,
                customDataProxyFetch: i,
              })
            ).map((h, x) => {
              if (h instanceof Error) return h;
              try {
                return this.mapQueryEngineResult(n[x], h);
              } catch (S) {
                return S;
              }
            });
          }),
          singleLoader: async (n) => {
            var s;
            let i =
                ((s = n.transaction) == null ? void 0 : s.kind) === "itx"
                  ? Js(n.transaction)
                  : void 0,
              o = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: i,
                isWrite: Jn(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              });
            return this.mapQueryEngineResult(n, o);
          },
          batchBy: (n) => {
            var i;
            return (i = n.transaction) != null && i.id
              ? `transaction-${n.transaction.id}`
              : Vs(n.protocolQuery);
          },
          batchOrder(n, i) {
            var o, s;
            return ((o = n.transaction) == null ? void 0 : o.kind) ===
              "batch" &&
              ((s = i.transaction) == null ? void 0 : s.kind) === "batch"
              ? n.transaction.index - i.transaction.index
              : 0;
          },
        }));
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let {
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
        } = t;
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
        });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n == null ? void 0 : n.data,
        o = n == null ? void 0 : n.elapsed,
        s = this.unpack(i, t, r);
      return y.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit("error", {
              message: r.message,
              target: t.clientMethod,
              timestamp: new Date(),
            }),
          r)
        );
      }
    }
    handleRequestError({
      error: t,
      clientMethod: r,
      callsite: n,
      transaction: i,
      args: o,
      modelName: s,
    }) {
      if ((Mc(t), _c(t, i) || t instanceof Ie)) throw t;
      if (t instanceof z && Fc(t)) {
        let u = Qs(t.meta);
        $r({
          args: o,
          errors: [u],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
        });
      }
      let a = t.message;
      if (
        (n &&
          (a = ht({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === "pretty",
            message: a,
          })),
        (a = this.sanitizeMessage(a)),
        t.code)
      ) {
        let u = s ? { modelName: s, ...t.meta } : t.meta;
        throw new z(a, {
          code: t.code,
          clientVersion: this.client._clientVersion,
          meta: u,
          batchRequestIdx: t.batchRequestIdx,
        });
      } else {
        if (t.isPanic) throw new De(a, this.client._clientVersion);
        if (t instanceof ae)
          throw new ae(a, {
            clientVersion: this.client._clientVersion,
            batchRequestIdx: t.batchRequestIdx,
          });
        if (t instanceof G) throw new G(a, this.client._clientVersion);
        if (t instanceof De) throw new De(a, this.client._clientVersion);
      }
      throw ((t.clientVersion = this.client._clientVersion), t);
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty"
        ? (0, js.default)(t)
        : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t;
      let i = Object.values(t)[0],
        o = r.filter((a) => a !== "select" && a !== "include"),
        s = Vr(xn(i, o));
      return n ? n(s) : s;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
function Nc(e) {
  if (e) {
    if (e.kind === "batch")
      return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
    if (e.kind === "itx") return { kind: "itx", options: Js(e) };
    je(e, "Unknown transaction kind");
  }
}
function Js(e) {
  return { id: e.id, payload: e.payload };
}
function _c(e, t) {
  return (
    Ur(e) &&
    (t == null ? void 0 : t.kind) === "batch" &&
    e.batchRequestIdx !== t.index
  );
}
function Fc(e) {
  return e.code === "P2009" || e.code === "P2012";
}
function Qs(e) {
  if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Qs) };
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
  }
  return e;
}
d();
c();
p();
f();
m();
var Gs = "5.15.0";
var Hs = Gs;
d();
c();
p();
f();
m();
function Ws(e) {
  return e.map((t) => {
    let r = {};
    for (let n of Object.keys(t)) r[n] = Ks(t[n]);
    return r;
  });
}
function Ks({ prisma__type: e, prisma__value: t }) {
  switch (e) {
    case "bigint":
      return BigInt(t);
    case "bytes":
      return w.Buffer.from(t, "base64");
    case "decimal":
      return new ve(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return new Date(`1970-01-01T${t}Z`);
    case "array":
      return t.map(Ks);
    default:
      return t;
  }
}
d();
c();
p();
f();
m();
var Xs = Ue(Fn());
d();
c();
p();
f();
m();
var J = class extends Error {
  constructor(t) {
    super(
      t +
        `
Read more at https://pris.ly/d/client-constructor`
    ),
      (this.name = "PrismaClientConstructorValidationError");
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
_(J, "PrismaClientConstructorValidationError");
var zs = [
    "datasources",
    "datasourceUrl",
    "errorFormat",
    "adapter",
    "log",
    "transactionOptions",
    "__internal",
  ],
  Ys = ["pretty", "colorless", "minimal"],
  Zs = ["info", "query", "warn", "error"],
  Bc = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new J(
            `Invalid value ${JSON.stringify(
              e
            )} for "datasources" provided to PrismaClient constructor`
          );
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = xt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new J(
              `Unknown datasource ${r} provided to PrismaClient constructor.${i}`
            );
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new J(`Invalid value ${JSON.stringify(
              e
            )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new J(`Invalid value ${JSON.stringify(
                  e
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new J(`Invalid value ${JSON.stringify(
                  o
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    adapter: (e, t) => {
      if (e === null) return;
      if (e === void 0)
        throw new J(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.'
        );
      if (!Nr(t).includes("driverAdapters"))
        throw new J(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.'
        );
      if (At() === "binary")
        throw new J(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.'
        );
    },
    datasourceUrl: (e) => {
      if (typeof e != "undefined" && typeof e != "string")
        throw new J(`Invalid value ${JSON.stringify(
          e
        )} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new J(
            `Invalid value ${JSON.stringify(
              e
            )} for "errorFormat" provided to PrismaClient constructor.`
          );
        if (!Ys.includes(e)) {
          let t = xt(e, Ys);
          throw new J(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e))
        throw new J(
          `Invalid value ${JSON.stringify(
            e
          )} for "log" provided to PrismaClient constructor.`
        );
      function t(r) {
        if (typeof r == "string" && !Zs.includes(r)) {
          let n = xt(r, Zs);
          throw new J(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`
          );
        }
      }
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (i) => {
            let o = ["stdout", "event"];
            if (!o.includes(i)) {
              let s = xt(i, o);
              throw new J(
                `Invalid value ${JSON.stringify(
                  i
                )} for "emit" in logLevel provided to PrismaClient constructor.${s}`
              );
            }
          },
        };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i]) n[i](o);
            else
              throw new J(
                `Invalid property ${i} for "log" provided to PrismaClient constructor`
              );
      }
    },
    transactionOptions: (e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0)
        throw new J(
          `Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`
        );
      let r = e.timeout;
      if (r != null && r <= 0)
        throw new J(
          `Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`
        );
    },
    __internal: (e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object")
        throw new J(
          `Invalid value ${JSON.stringify(
            e
          )} for "__internal" to PrismaClient constructor`
        );
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = xt(r, t);
          throw new J(
            `Invalid property ${JSON.stringify(
              r
            )} for "__internal" provided to PrismaClient constructor.${n}`
          );
        }
    },
  };
function ea(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!zs.includes(r)) {
      let i = xt(r, zs);
      throw new J(
        `Unknown property ${r} provided to PrismaClient constructor.${i}`
      );
    }
    Bc[r](n, t);
  }
  if (e.datasourceUrl && e.datasources)
    throw new J(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them'
    );
}
function xt(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let r = $c(e, t);
  return r ? ` Did you mean "${r}"?` : "";
}
function $c(e, t) {
  if (t.length === 0) return null;
  let r = t.map((i) => ({ value: i, distance: (0, Xs.default)(e, i) }));
  r.sort((i, o) => (i.distance < o.distance ? -1 : 1));
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
d();
c();
p();
f();
m();
function ta(e) {
  return e.length === 0
    ? Promise.resolve([])
    : new Promise((t, r) => {
        let n = new Array(e.length),
          i = null,
          o = !1,
          s = 0,
          a = () => {
            o || (s++, s === e.length && ((o = !0), i ? r(i) : t(n)));
          },
          u = (l) => {
            o || ((o = !0), r(l));
          };
        for (let l = 0; l < e.length; l++)
          e[l].then(
            (g) => {
              (n[l] = g), a();
            },
            (g) => {
              if (!Ur(g)) {
                u(g);
                return;
              }
              g.batchRequestIdx === l ? u(g) : (i || (i = g), a());
            }
          );
      });
}
var Le = re("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var qc = {
    requestArgsToMiddlewareArgs: (e) => e,
    middlewareArgsToRequestArgs: (e) => e,
  },
  Uc = Symbol.for("prisma.client.transaction.id"),
  Vc = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function jc(e) {
  class t {
    constructor(n) {
      this._originalClient = this;
      this._middlewares = new qr();
      this._createPrismaPromise = Un();
      this.$extends = qo;
      var u, l, g, h, x, S, C, A, k, O, B, M, I, Z;
      (e =
        (g =
          (l =
            (u = n == null ? void 0 : n.__internal) == null
              ? void 0
              : u.configOverride) == null
            ? void 0
            : l.call(u, e)) != null
          ? g
          : e),
        ns(e),
        n && ea(n, e);
      let i = n != null && n.adapter ? fn(n.adapter) : void 0,
        o = new lr().on("error", () => {});
      (this._extensions = Or.empty()),
        (this._previewFeatures = Nr(e)),
        (this._clientVersion = (h = e.clientVersion) != null ? h : Hs),
        (this._activeProvider = e.activeProvider),
        (this._tracingHelper = Bs(this._previewFeatures));
      let s = {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            Ct.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            Ct.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        a = (x = e.injectableEdgeEnv) == null ? void 0 : x.call(e);
      try {
        let L = n != null ? n : {},
          Ye = (S = L.__internal) != null ? S : {},
          Be = Ye.debug === !0;
        Be && re.enable("prisma:client");
        let fe = Ct.resolve(e.dirname, e.relativePath);
        wi.existsSync(fe) || (fe = e.dirname),
          Le("dirname", e.dirname),
          Le("relativePath", e.relativePath),
          Le("cwd", fe);
        let $e = Ye.engine || {};
        if (
          (L.errorFormat
            ? (this._errorFormat = L.errorFormat)
            : y.env.NODE_ENV === "production"
            ? (this._errorFormat = "minimal")
            : y.env.NO_COLOR
            ? (this._errorFormat = "colorless")
            : (this._errorFormat = "colorless"),
          (this._runtimeDataModel = e.runtimeDataModel),
          (this._engineConfig = {
            cwd: fe,
            dirname: e.dirname,
            enableDebugLogs: Be,
            allowTriggerPanic: $e.allowTriggerPanic,
            datamodelPath: Ct.join(
              e.dirname,
              (C = e.filename) != null ? C : "schema.prisma"
            ),
            prismaPath: (A = $e.binaryPath) != null ? A : void 0,
            engineEndpoint: $e.endpoint,
            generator: e.generator,
            showColors: this._errorFormat === "pretty",
            logLevel: L.log && Us(L.log),
            logQueries:
              L.log &&
              !!(typeof L.log == "string"
                ? L.log === "query"
                : L.log.find((Q) =>
                    typeof Q == "string" ? Q === "query" : Q.level === "query"
                  )),
            env: (k = a == null ? void 0 : a.parsed) != null ? k : {},
            flags: [],
            engineWasm: e.engineWasm,
            clientVersion: e.clientVersion,
            engineVersion: e.engineVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            overrideDatasources: is(L, e.datasourceNames),
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            transactionOptions: {
              maxWait:
                (B = (O = L.transactionOptions) == null ? void 0 : O.maxWait) !=
                null
                  ? B
                  : 2e3,
              timeout:
                (I = (M = L.transactionOptions) == null ? void 0 : M.timeout) !=
                null
                  ? I
                  : 5e3,
              isolationLevel:
                (Z = L.transactionOptions) == null ? void 0 : Z.isolationLevel,
            },
            logEmitter: o,
            isBundled: e.isBundled,
            adapter: i,
          }),
          (this._accelerateEngineConfig = {
            ...this._engineConfig,
            accelerateUtils: {
              resolveDatasourceUrl: yt,
              getBatchRequestPayload: dr,
              prismaGraphQLToJSError: Bt,
              PrismaClientUnknownRequestError: ae,
              PrismaClientInitializationError: G,
              PrismaClientKnownRequestError: z,
              debug: re("prisma:client:accelerateEngine"),
              engineVersion: na.version,
              clientVersion: e.clientVersion,
            },
          }),
          Le("clientVersion", e.clientVersion),
          (this._engine = ds(e, this._engineConfig)),
          (this._requestHandler = new Jr(this, o)),
          L.log)
        )
          for (let Q of L.log) {
            let Ce =
              typeof Q == "string" ? Q : Q.emit === "stdout" ? Q.level : null;
            Ce &&
              this.$on(Ce, (qe) => {
                var Ze;
                it.log(
                  `${(Ze = it.tags[Ce]) != null ? Ze : ""}`,
                  qe.message || qe.query
                );
              });
          }
        this._metrics = new St(this._engine);
      } catch (L) {
        throw ((L.clientVersion = this._clientVersion), L);
      }
      return (this._appliedParent = $t(this));
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    $use(n) {
      this._middlewares.use(n);
    }
    $on(n, i) {
      n === "beforeExit"
        ? this._engine.onBeforeExit(i)
        : n && this._engineConfig.logEmitter.on(n, i);
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      } finally {
        Vi();
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: "executeRaw",
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: qn({ clientMethod: i, activeProvider: a }),
        callsite: Fe(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = ra(n, i);
          return (
            $n(
              this._activeProvider,
              s.text,
              s.values,
              Array.isArray(n)
                ? "prisma.$executeRaw`<SQL>`"
                : "prisma.$executeRaw(sql`<SQL>`)"
            ),
            this.$executeRawInternal(o, "$executeRaw", s, a)
          );
        }
        throw new ee(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion }
        );
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise(
        (o) => (
          $n(
            this._activeProvider,
            n,
            i,
            "prisma.$executeRawUnsafe(<SQL>, [...values])"
          ),
          this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])
        )
      );
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== "mongodb")
        throw new ee(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion }
        );
      return this._createPrismaPromise((i) =>
        this._request({
          args: n,
          clientMethod: "$runCommandRaw",
          dataPath: [],
          action: "runCommandRaw",
          argsMapper: Ss,
          callsite: Fe(this._errorFormat),
          transaction: i,
        })
      );
    }
    async $queryRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: "queryRaw",
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: qn({ clientMethod: i, activeProvider: a }),
        callsite: Fe(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      }).then(Ws);
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, "$queryRaw", ...ra(n, i));
        throw new ee(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
          { clientVersion: this._clientVersion }
        );
      });
    }
    $queryRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) =>
        this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i])
      );
    }
    _transactionWithArray({ promises: n, options: i }) {
      let o = Vc.nextId(),
        s = $s(n.length),
        a = n.map((u, l) => {
          var x, S, C;
          if ((u == null ? void 0 : u[Symbol.toStringTag]) !== "PrismaPromise")
            throw new Error(
              "All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function."
            );
          let g =
              (x = i == null ? void 0 : i.isolationLevel) != null
                ? x
                : this._engineConfig.transactionOptions.isolationLevel,
            h = { kind: "batch", id: o, index: l, isolationLevel: g, lock: s };
          return (C =
            (S = u.requestTransaction) == null ? void 0 : S.call(u, h)) != null
            ? C
            : u;
        });
      return ta(a);
    }
    async _transactionWithCallback({ callback: n, options: i }) {
      var l, g, h;
      let o = { traceparent: this._tracingHelper.getTraceParent() },
        s = {
          maxWait:
            (l = i == null ? void 0 : i.maxWait) != null
              ? l
              : this._engineConfig.transactionOptions.maxWait,
          timeout:
            (g = i == null ? void 0 : i.timeout) != null
              ? g
              : this._engineConfig.transactionOptions.timeout,
          isolationLevel:
            (h = i == null ? void 0 : i.isolationLevel) != null
              ? h
              : this._engineConfig.transactionOptions.isolationLevel,
        },
        a = await this._engine.transaction("start", o, s),
        u;
      try {
        let x = { kind: "itx", ...a };
        (u = await n(this._createItxClient(x))),
          await this._engine.transaction("commit", o, a);
      } catch (x) {
        throw (
          (await this._engine.transaction("rollback", o, a).catch(() => {}), x)
        );
      }
      return u;
    }
    _createItxClient(n) {
      return $t(
        ge($o(this), [
          ne("_appliedParent", () => this._appliedParent._createItxClient(n)),
          ne("_createPrismaPromise", () => Un(n)),
          ne(Uc, () => n.id),
          st(qs),
        ])
      );
    }
    $transaction(n, i) {
      var a;
      let o;
      typeof n == "function"
        ? ((a = this._engineConfig.adapter) == null
            ? void 0
            : a.adapterName) === "@prisma/adapter-d1"
          ? (o = () => {
              throw new Error(
                "Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable."
              );
            })
          : (o = () =>
              this._transactionWithCallback({ callback: n, options: i }))
        : (o = () => this._transactionWithArray({ promises: n, options: i }));
      let s = { name: "transaction", attributes: { method: "$transaction" } };
      return this._tracingHelper.runInChildSpan(s, o);
    }
    _request(n) {
      var l;
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = (l = n.middlewareArgsMapper) != null ? l : qc,
        o = {
          args: i.requestArgsToMiddlewareArgs(n.args),
          dataPath: n.dataPath,
          runInTransaction: !!n.transaction,
          action: n.action,
          model: n.model,
        },
        s = {
          middleware: {
            name: "middleware",
            middleware: !0,
            attributes: { method: "$use" },
            active: !1,
          },
          operation: {
            name: "operation",
            attributes: {
              method: o.action,
              model: o.model,
              name: o.model ? `${o.model}.${o.action}` : o.action,
            },
          },
        },
        a = -1,
        u = async (g) => {
          let h = this._middlewares.get(++a);
          if (h)
            return this._tracingHelper.runInChildSpan(s.middleware, (O) =>
              h(g, (B) => (O == null || O.end(), u(B)))
            );
          let { runInTransaction: x, args: S, ...C } = g,
            A = { ...n, ...C };
          S && (A.args = i.middlewareArgsToRequestArgs(S)),
            n.transaction !== void 0 && x === !1 && delete A.transaction;
          let k = await Ho(this, A);
          return A.model
            ? jo({
                result: k,
                modelName: A.model,
                args: A.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
              })
            : k;
        };
      return this._tracingHelper.runInChildSpan(s.operation, () => u(o));
    }
    async _executeRequest({
      args: n,
      clientMethod: i,
      dataPath: o,
      callsite: s,
      action: a,
      model: u,
      argsMapper: l,
      transaction: g,
      unpacker: h,
      otelParentCtx: x,
      customDataProxyFetch: S,
    }) {
      try {
        n = l ? l(n) : n;
        let C = { name: "serialize" },
          A = this._tracingHelper.runInChildSpan(C, () =>
            Cs({
              modelName: u,
              runtimeDataModel: this._runtimeDataModel,
              action: a,
              args: n,
              clientMethod: i,
              callsite: s,
              extensions: this._extensions,
              errorFormat: this._errorFormat,
              clientVersion: this._clientVersion,
              previewFeatures: this._previewFeatures,
            })
          );
        return (
          re.enabled("prisma:client") &&
            (Le("Prisma Client call:"),
            Le(`prisma.${i}(${So(n)})`),
            Le("Generated request:"),
            Le(
              JSON.stringify(A, null, 2) +
                `
`
            )),
          (g == null ? void 0 : g.kind) === "batch" && (await g.lock),
          this._requestHandler.request({
            protocolQuery: A,
            modelName: u,
            action: a,
            clientMethod: i,
            dataPath: o,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: g,
            unpacker: h,
            otelParentCtx: x,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            customDataProxyFetch: S,
          })
        );
      } catch (C) {
        throw ((C.clientVersion = this._clientVersion), C);
      }
    }
    get $metrics() {
      if (!this._hasPreviewFlag("metrics"))
        throw new ee(
          "`metrics` preview feature must be enabled in order to access metrics API",
          { clientVersion: this._clientVersion }
        );
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      var i;
      return !!(
        (i = this._engineConfig.previewFeatures) != null && i.includes(n)
      );
    }
    $applyPendingMigrations() {
      return this._engine.applyPendingMigrations();
    }
  }
  return t;
}
function ra(e, t) {
  return Jc(e) ? [new ue(e, t), Ns] : [e, _s];
}
function Jc(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
d();
c();
p();
f();
m();
var Qc = new Set([
  "toJSON",
  "$$typeof",
  "asymmetricMatch",
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function Gc(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r];
      if (!Qc.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
d();
c();
p();
f();
m();
var export_warnEnvConflicts = void 0;
export {
  Ui as Debug,
  ve as Decimal,
  gi as Extensions,
  St as MetricsClient,
  Ie as NotFoundError,
  G as PrismaClientInitializationError,
  z as PrismaClientKnownRequestError,
  De as PrismaClientRustPanicError,
  ae as PrismaClientUnknownRequestError,
  ee as PrismaClientValidationError,
  yi as Public,
  ue as Sql,
  ru as defineDmmfProperty,
  uu as empty,
  jc as getPrismaClient,
  Cn as getRuntime,
  au as join,
  Gc as makeStrictEnum,
  ln as objectEnumValues,
  io as raw,
  oo as sqltag,
  export_warnEnvConflicts as warnEnvConflicts,
  cr as warnOnce,
};
//# sourceMappingURL=edge-esm.js.map
