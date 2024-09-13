function Fd(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, l);
                    o &&
                        Object.defineProperty(
                            e,
                            l,
                            o.get ? o : { enumerable: !0, get: () => r[l] }
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    );
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver((l) => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, { childList: !0, subtree: !0 });

    function n(l) {
        const o = {};
        return (
            l.integrity && (o.integrity = l.integrity),
            l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials" ?
            (o.credentials = "include") :
            l.crossOrigin === "anonymous" ?
            (o.credentials = "omit") :
            (o.credentials = "same-origin"),
            o
        );
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o);
    }
})();
const Id = "modulepreload",
    Ud = function(e) {
        return "/subscription-page/" + e;
    },
    Ea = {},
    Me = function(t, n, r) {
        if (!n || n.length === 0) return t();
        const l = document.getElementsByTagName("link");
        return Promise.all(
                n.map((o) => {
                    if (((o = Ud(o)), o in Ea)) return;
                    Ea[o] = !0;
                    const i = o.endsWith(".css"),
                        u = i ? '[rel="stylesheet"]' : "";
                    if (!!r)
                        for (let p = l.length - 1; p >= 0; p--) {
                            const m = l[p];
                            if (m.href === o && (!i || m.rel === "stylesheet")) return;
                        }
                    else if (document.querySelector(`link[href="${o}"]${u}`)) return;
                    const s = document.createElement("link");
                    if (
                        ((s.rel = i ? "stylesheet" : Id),
                            i || ((s.as = "script"), (s.crossOrigin = "")),
                            (s.href = o),
                            document.head.appendChild(s),
                            i)
                    )
                        return new Promise((p, m) => {
                            s.addEventListener("load", p),
                                s.addEventListener("error", () =>
                                    m(new Error(`Unable to preload CSS for ${o}`))
                                );
                        });
                })
            )
            .then(() => t())
            .catch((o) => {
                const i = new Event("vite:preloadError", { cancelable: !0 });
                if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented))
                    throw o;
            });
    };
var i1 =
    typeof globalThis < "u" ?
    globalThis :
    typeof window < "u" ?
    window :
    typeof global < "u" ?
    global :
    typeof self < "u" ?
    self :
    {};

function Vd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ?
        e.default :
        e;
}
var Xs = { exports: {} },
    mo = {},
    Js = { exports: {} },
    $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rl = Symbol.for("react.element"),
    Hd = Symbol.for("react.portal"),
    Ad = Symbol.for("react.fragment"),
    Bd = Symbol.for("react.strict_mode"),
    $d = Symbol.for("react.profiler"),
    Wd = Symbol.for("react.provider"),
    Qd = Symbol.for("react.context"),
    Zd = Symbol.for("react.forward_ref"),
    Kd = Symbol.for("react.suspense"),
    Yd = Symbol.for("react.memo"),
    Gd = Symbol.for("react.lazy"),
    Ca = Symbol.iterator;

function Xd(e) {
    return e === null || typeof e != "object" ?
        null :
        ((e = (Ca && e[Ca]) || e["@@iterator"]),
            typeof e == "function" ? e : null);
}
var qs = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {},
    },
    bs = Object.assign,
    ec = {};

function lr(e, t, n) {
    (this.props = e),
    (this.context = t),
    (this.refs = ec),
    (this.updater = n || qs);
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
lr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};

function tc() {}
tc.prototype = lr.prototype;

function hu(e, t, n) {
    (this.props = e),
    (this.context = t),
    (this.refs = ec),
    (this.updater = n || qs);
}
var mu = (hu.prototype = new tc());
mu.constructor = hu;
bs(mu, lr.prototype);
mu.isPureReactComponent = !0;
var xa = Array.isArray,
    nc = Object.prototype.hasOwnProperty,
    vu = { current: null },
    rc = { key: !0, ref: !0, __self: !0, __source: !0 };

function lc(e, t, n) {
    var r,
        l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (i = t.ref),
                t.key !== void 0 && (o = "" + t.key),
                t))
            nc.call(t, r) && !rc.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
        for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
        l.children = a;
    }
    if (e && e.defaultProps)
        for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: rl,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: vu.current,
    };
}

function Jd(e, t) {
    return {
        $$typeof: rl,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}

function yu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === rl;
}

function qd(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function(n) {
            return t[n];
        })
    );
}
var ka = /\/+/g;

function $o(e, t) {
    return typeof e == "object" && e !== null && e.key != null ?
        qd("" + e.key) :
        t.toString(36);
}

function Nl(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else
        switch (o) {
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case rl:
                    case Hd:
                        i = !0;
                }
        }
    if (i)
        return (
            (i = e),
            (l = l(i)),
            (e = r === "" ? "." + $o(i, 0) : r),
            xa(l) ?
            ((n = ""),
                e != null && (n = e.replace(ka, "$&/") + "/"),
                Nl(l, t, n, "", function(s) {
                    return s;
                })) :
            l != null &&
            (yu(l) &&
                (l = Jd(
                    l,
                    n +
                    (!l.key || (i && i.key === l.key) ?
                        "" :
                        ("" + l.key).replace(ka, "$&/") + "/") +
                    e
                )),
                t.push(l)),
            1
        );
    if (((i = 0), (r = r === "" ? "." : r + ":"), xa(e)))
        for (var u = 0; u < e.length; u++) {
            o = e[u];
            var a = r + $o(o, u);
            i += Nl(o, t, n, a, l);
        }
    else if (((a = Xd(e)), typeof a == "function"))
        for (e = a.call(e), u = 0; !(o = e.next()).done;)
            (o = o.value), (a = r + $o(o, u++)), (i += Nl(o, t, n, a, l));
    else if (o === "object")
        throw (
            ((t = String(e)),
                Error(
                    "Objects are not valid as a React child (found: " +
                    (t === "[object Object]" ?
                        "object with keys {" + Object.keys(e).join(", ") + "}" :
                        t) +
                    "). If you meant to render a collection of children, use an array instead."
                ))
        );
    return i;
}

function dl(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return (
        Nl(e, r, "", "", function(o) {
            return t.call(n, o, l++);
        }),
        r
    );
}

function bd(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
        t.then(
                function(n) {
                    (e._status === 0 || e._status === -1) &&
                    ((e._status = 1), (e._result = n));
                },
                function(n) {
                    (e._status === 0 || e._status === -1) &&
                    ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var De = { current: null },
    Tl = { transition: null },
    ep = {
        ReactCurrentDispatcher: De,
        ReactCurrentBatchConfig: Tl,
        ReactCurrentOwner: vu,
    };
$.Children = {
    map: dl,
    forEach: function(e, t, n) {
        dl(
            e,
            function() {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function(e) {
        var t = 0;
        return (
            dl(e, function() {
                t++;
            }),
            t
        );
    },
    toArray: function(e) {
        return (
            dl(e, function(t) {
                return t;
            }) || []
        );
    },
    only: function(e) {
        if (!yu(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
$.Component = lr;
$.Fragment = Ad;
$.Profiler = $d;
$.PureComponent = hu;
$.StrictMode = Bd;
$.Suspense = Kd;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ep;
$.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
        );
    var r = bs({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((o = t.ref), (i = vu.current)),
                t.key !== void 0 && (l = "" + t.key),
                e.type && e.type.defaultProps)
        )
            var u = e.type.defaultProps;
        for (a in t)
            nc.call(t, a) &&
            !rc.hasOwnProperty(a) &&
            (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        u = Array(a);
        for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
        r.children = u;
    }
    return { $$typeof: rl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
$.createContext = function(e) {
    return (
        (e = {
            $$typeof: Qd,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Wd, _context: e }),
        (e.Consumer = e)
    );
};
$.createElement = lc;
$.createFactory = function(e) {
    var t = lc.bind(null, e);
    return (t.type = e), t;
};
$.createRef = function() {
    return { current: null };
};
$.forwardRef = function(e) {
    return { $$typeof: Zd, render: e };
};
$.isValidElement = yu;
$.lazy = function(e) {
    return { $$typeof: Gd, _payload: { _status: -1, _result: e }, _init: bd };
};
$.memo = function(e, t) {
    return { $$typeof: Yd, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
    var t = Tl.transition;
    Tl.transition = {};
    try {
        e();
    } finally {
        Tl.transition = t;
    }
};
$.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
};
$.useCallback = function(e, t) {
    return De.current.useCallback(e, t);
};
$.useContext = function(e) {
    return De.current.useContext(e);
};
$.useDebugValue = function() {};
$.useDeferredValue = function(e) {
    return De.current.useDeferredValue(e);
};
$.useEffect = function(e, t) {
    return De.current.useEffect(e, t);
};
$.useId = function() {
    return De.current.useId();
};
$.useImperativeHandle = function(e, t, n) {
    return De.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function(e, t) {
    return De.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function(e, t) {
    return De.current.useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
    return De.current.useMemo(e, t);
};
$.useReducer = function(e, t, n) {
    return De.current.useReducer(e, t, n);
};
$.useRef = function(e) {
    return De.current.useRef(e);
};
$.useState = function(e) {
    return De.current.useState(e);
};
$.useSyncExternalStore = function(e, t, n) {
    return De.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function() {
    return De.current.useTransition();
};
$.version = "18.2.0";
Js.exports = $;
var C = Js.exports;
const oc = Vd(C),
    tp = Fd({ __proto__: null, default: oc }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var np = C,
    rp = Symbol.for("react.element"),
    lp = Symbol.for("react.fragment"),
    op = Object.prototype.hasOwnProperty,
    ip = np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    up = { key: !0, ref: !0, __self: !0, __source: !0 };

function ic(e, t, n) {
    var r,
        l = {},
        o = null,
        i = null;
    n !== void 0 && (o = "" + n),
        t.key !== void 0 && (o = "" + t.key),
        t.ref !== void 0 && (i = t.ref);
    for (r in t) op.call(t, r) && !up.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: rp,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: ip.current,
    };
}
mo.Fragment = lp;
mo.jsx = ic;
mo.jsxs = ic;
Xs.exports = mo;
var B = Xs.exports;

function ap({ title: e, titleId: t, ...n }, r) {
    return C.createElement(
        "svg",
        Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: r,
                "aria-labelledby": t,
            },
            n
        ),
        e ? C.createElement("title", { id: t }, e) : null,
        C.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
        })
    );
}
const sp = C.forwardRef(ap),
    cp = sp;

function fp({ title: e, titleId: t, ...n }, r) {
    return C.createElement(
        "svg",
        Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: r,
                "aria-labelledby": t,
            },
            n
        ),
        e ? C.createElement("title", { id: t }, e) : null,
        C.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
        })
    );
}
const dp = C.forwardRef(fp),
    pp = dp;

function uc(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = uc(e[t])) && (r && (r += " "), (r += n));
        else
            for (t in e) e[t] && (r && (r += " "), (r += t));
    return r;
}

function _a() {
    for (var e, t, n = 0, r = ""; n < arguments.length;)
        (e = arguments[n++]) && (t = uc(e)) && (r && (r += " "), (r += t));
    return r;
}
var yi = {},
    ac = { exports: {} },
    Qe = {},
    sc = { exports: {} },
    cc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(M, j) {
        var H = M.length;
        M.push(j);
        e: for (; 0 < H;) {
            var re = (H - 1) >>> 1,
                fe = M[re];
            if (0 < l(fe, j))(M[re] = j), (M[H] = fe), (H = re);
            else break e;
        }
    }

    function n(M) {
        return M.length === 0 ? null : M[0];
    }

    function r(M) {
        if (M.length === 0) return null;
        var j = M[0],
            H = M.pop();
        if (H !== j) {
            M[0] = H;
            e: for (var re = 0, fe = M.length, Rn = fe >>> 1; re < Rn;) {
                var J = 2 * (re + 1) - 1,
                    gt = M[J],
                    ft = J + 1,
                    Ln = M[ft];
                if (0 > l(gt, H))
                    ft < fe && 0 > l(Ln, gt) ?
                    ((M[re] = Ln), (M[ft] = H), (re = ft)) :
                    ((M[re] = gt), (M[J] = H), (re = J));
                else if (ft < fe && 0 > l(Ln, H))(M[re] = Ln), (M[ft] = H), (re = ft);
                else break e;
            }
        }
        return j;
    }

    function l(M, j) {
        var H = M.sortIndex - j.sortIndex;
        return H !== 0 ? H : M.id - j.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now();
        };
    } else {
        var i = Date,
            u = i.now();
        e.unstable_now = function() {
            return i.now() - u;
        };
    }
    var a = [],
        s = [],
        p = 1,
        m = null,
        v = 3,
        E = !1,
        w = !1,
        S = !1,
        P = typeof setTimeout == "function" ? setTimeout : null,
        d = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function h(M) {
        for (var j = n(s); j !== null;) {
            if (j.callback === null) r(s);
            else if (j.startTime <= M)
                r(s), (j.sortIndex = j.expirationTime), t(a, j);
            else break;
            j = n(s);
        }
    }

    function f(M) {
        if (((S = !1), h(M), !w))
            if (n(a) !== null)(w = !0), Ve(k);
            else {
                var j = n(s);
                j !== null && ct(f, j.startTime - M);
            }
    }

    function k(M, j) {
        (w = !1), S && ((S = !1), d(T), (T = -1)), (E = !0);
        var H = v;
        try {
            for (
                h(j), m = n(a); m !== null && (!(m.expirationTime > j) || (M && !ye()));

            ) {
                var re = m.callback;
                if (typeof re == "function") {
                    (m.callback = null), (v = m.priorityLevel);
                    var fe = re(m.expirationTime <= j);
                    (j = e.unstable_now()),
                    typeof fe == "function" ? (m.callback = fe) : m === n(a) && r(a),
                        h(j);
                } else r(a);
                m = n(a);
            }
            if (m !== null) var Rn = !0;
            else {
                var J = n(s);
                J !== null && ct(f, J.startTime - j), (Rn = !1);
            }
            return Rn;
        } finally {
            (m = null), (v = H), (E = !1);
        }
    }
    var L = !1,
        R = null,
        T = -1,
        W = 5,
        F = -1;

    function ye() {
        return !(e.unstable_now() - F < W);
    }

    function X() {
        if (R !== null) {
            var M = e.unstable_now();
            F = M;
            var j = !0;
            try {
                j = R(!0, M);
            } finally {
                j ? st() : ((L = !1), (R = null));
            }
        } else L = !1;
    }
    var st;
    if (typeof c == "function")
        st = function() {
            c(X);
        };
    else if (typeof MessageChannel < "u") {
        var Dt = new MessageChannel(),
            zt = Dt.port2;
        (Dt.port1.onmessage = X),
        (st = function() {
            zt.postMessage(null);
        });
    } else
        st = function() {
            P(X, 0);
        };

    function Ve(M) {
        (R = M), L || ((L = !0), st());
    }

    function ct(M, j) {
        T = P(function() {
            M(e.unstable_now());
        }, j);
    }
    (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function(M) {
        M.callback = null;
    }),
    (e.unstable_continueExecution = function() {
        w || E || ((w = !0), Ve(k));
    }),
    (e.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ?
            console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            ) :
            (W = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function() {
        return v;
    }),
    (e.unstable_getFirstCallbackNode = function() {
        return n(a);
    }),
    (e.unstable_next = function(M) {
        switch (v) {
            case 1:
            case 2:
            case 3:
                var j = 3;
                break;
            default:
                j = v;
        }
        var H = v;
        v = j;
        try {
            return M();
        } finally {
            v = H;
        }
    }),
    (e.unstable_pauseExecution = function() {}),
    (e.unstable_requestPaint = function() {}),
    (e.unstable_runWithPriority = function(M, j) {
        switch (M) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                M = 3;
        }
        var H = v;
        v = M;
        try {
            return j();
        } finally {
            v = H;
        }
    }),
    (e.unstable_scheduleCallback = function(M, j, H) {
        var re = e.unstable_now();
        switch (
            (typeof H == "object" && H !== null ?
                ((H = H.delay), (H = typeof H == "number" && 0 < H ? re + H : re)) :
                (H = re),
                M)
        ) {
            case 1:
                var fe = -1;
                break;
            case 2:
                fe = 250;
                break;
            case 5:
                fe = 1073741823;
                break;
            case 4:
                fe = 1e4;
                break;
            default:
                fe = 5e3;
        }
        return (
            (fe = H + fe),
            (M = {
                id: p++,
                callback: j,
                priorityLevel: M,
                startTime: H,
                expirationTime: fe,
                sortIndex: -1,
            }),
            H > re ?
            ((M.sortIndex = H),
                t(s, M),
                n(a) === null &&
                M === n(s) &&
                (S ? (d(T), (T = -1)) : (S = !0), ct(f, H - re))) :
            ((M.sortIndex = fe), t(a, M), w || E || ((w = !0), Ve(k))),
            M
        );
    }),
    (e.unstable_shouldYield = ye),
    (e.unstable_wrapCallback = function(M) {
        var j = v;
        return function() {
            var H = v;
            v = j;
            try {
                return M.apply(this, arguments);
            } finally {
                v = H;
            }
        };
    });
})(cc);
sc.exports = cc;
var hp = sc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fc = C,
    We = hp;

function _(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var dc = new Set(),
    Ur = {};

function xn(e, t) {
    Jn(e, t), Jn(e + "Capture", t);
}

function Jn(e, t) {
    for (Ur[e] = t, e = 0; e < t.length; e++) dc.add(t[e]);
}
var Lt = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    gi = Object.prototype.hasOwnProperty,
    mp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ra = {},
    La = {};

function vp(e) {
    return gi.call(La, e) ?
        !0 :
        gi.call(Ra, e) ?
        !1 :
        mp.test(e) ?
        (La[e] = !0) :
        ((Ra[e] = !0), !1);
}

function yp(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ?
                !1 :
                n !== null ?
                !n.acceptsBooleans :
                ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}

function gp(e, t, n, r) {
    if (t === null || typeof t > "u" || yp(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}

function ze(e, t, n, r, l, o, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
.split(" ")
    .forEach(function(e) {
        ke[e] = new ze(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function(e) {
    var t = e[0];
    ke[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ke[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function(e) {
    ke[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
.split(" ")
    .forEach(function(e) {
        ke[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ke[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
    ke[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ke[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
    ke[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var gu = /[\-:]([a-z])/g;

function wu(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
.split(" ")
    .forEach(function(e) {
        var t = e.replace(gu, wu);
        ke[t] = new ze(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
.split(" ")
    .forEach(function(e) {
        var t = e.replace(gu, wu);
        ke[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(gu, wu);
    ke[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ke[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new ze(
    "xlinkHref",
    1, !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink", !0, !1
);
["src", "href", "action", "formAction"].forEach(function(e) {
    ke[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});

function Su(e, t, n, r) {
    var l = ke.hasOwnProperty(t) ? ke[t] : null;
    (l !== null ?
        l.type !== 0 :
        r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
    (gp(t, n, l, r) && (n = null),
        r || l === null ?
        vp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) :
        l.mustUseProperty ?
        (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n) :
        ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null ?
            e.removeAttribute(t) :
            ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tt = fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    pl = Symbol.for("react.element"),
    Nn = Symbol.for("react.portal"),
    Tn = Symbol.for("react.fragment"),
    Eu = Symbol.for("react.strict_mode"),
    wi = Symbol.for("react.profiler"),
    pc = Symbol.for("react.provider"),
    hc = Symbol.for("react.context"),
    Cu = Symbol.for("react.forward_ref"),
    Si = Symbol.for("react.suspense"),
    Ei = Symbol.for("react.suspense_list"),
    xu = Symbol.for("react.memo"),
    Ht = Symbol.for("react.lazy"),
    mc = Symbol.for("react.offscreen"),
    Pa = Symbol.iterator;

function dr(e) {
    return e === null || typeof e != "object" ?
        null :
        ((e = (Pa && e[Pa]) || e["@@iterator"]),
            typeof e == "function" ? e : null);
}
var ie = Object.assign,
    Wo;

function kr(e) {
    if (Wo === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Wo = (t && t[1]) || "";
        }
    return (
        `
` +
        Wo +
        e
    );
}
var Qo = !1;

function Zo(e, t) {
    if (!e || Qo) return "";
    Qo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function() {
                        throw Error();
                    }),
                    Object.defineProperty(t.prototype, "props", {
                        set: function() {
                            throw Error();
                        },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (s) {
                    var r = s;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (s) {
                    r = s;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (s) {
                r = s;
            }
            e();
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (
                var l = s.stack.split(`
`),
                    o = r.stack.split(`
`),
                    i = l.length - 1,
                    u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u];

            )
                u--;
            for (; 1 <= i && 0 <= u; i--, u--)
                if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if ((i--, u--, 0 > u || l[i] !== o[u])) {
                                var a =
                                    `
` + l[i].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                    a.includes("<anonymous>") &&
                                    (a = a.replace("<anonymous>", e.displayName)),
                                    a
                                );
                            }
                    while (1 <= i && 0 <= u);
                    break;
                }
        }
    } finally {
        (Qo = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? kr(e) : "";
}

function wp(e) {
    switch (e.tag) {
        case 5:
            return kr(e.type);
        case 16:
            return kr("Lazy");
        case 13:
            return kr("Suspense");
        case 19:
            return kr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Zo(e.type, !1)), e;
        case 11:
            return (e = Zo(e.type.render, !1)), e;
        case 1:
            return (e = Zo(e.type, !0)), e;
        default:
            return "";
    }
}

function Ci(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Tn:
            return "Fragment";
        case Nn:
            return "Portal";
        case wi:
            return "Profiler";
        case Eu:
            return "StrictMode";
        case Si:
            return "Suspense";
        case Ei:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case hc:
                return (e.displayName || "Context") + ".Consumer";
            case pc:
                return (e._context.displayName || "Context") + ".Provider";
            case Cu:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                    ((e = t.displayName || t.name || ""),
                        (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case xu:
                return (
                    (t = e.displayName || null), t !== null ? t : Ci(e.type) || "Memo"
                );
            case Ht:
                (t = e._payload), (e = e._init);
                try {
                    return Ci(e(t));
                } catch {}
        }
    return null;
}

function Sp(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ci(t);
        case 8:
            return t === Eu ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}

function en(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}

function vc(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}

function Ep(e) {
    var t = vc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var l = n.get,
            o = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return l.call(this);
                },
                set: function(i) {
                    (r = "" + i), o.call(this, i);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }), {
                getValue: function() {
                    return r;
                },
                setValue: function(i) {
                    r = "" + i;
                },
                stopTracking: function() {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}

function hl(e) {
    e._valueTracker || (e._valueTracker = Ep(e));
}

function yc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = vc(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}

function Bl(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}

function xi(e, t) {
    var n = t.checked;
    return ie({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked,
    });
}

function Ma(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = en(t.value != null ? t.value : n)),
    (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ?
            t.checked != null :
            t.value != null,
    });
}

function gc(e, t) {
    (t = t.checked), t != null && Su(e, "checked", t, !1);
}

function ki(e, t) {
    gc(e, t);
    var n = en(t.value),
        r = t.type;
    if (n != null)
        r === "number" ?
        ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) :
        e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value") ?
        _i(e, t.type, n) :
        t.hasOwnProperty("defaultValue") && _i(e, t.type, en(t.defaultValue)),
        t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
}

function Na(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            ))
            return;
        (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
    n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}

function _i(e, t, n) {
    (t !== "number" || Bl(e.ownerDocument) !== e) &&
    (n == null ?
        (e.defaultValue = "" + e._wrapperState.initialValue) :
        e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _r = Array.isArray;

function Wn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            (l = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + en(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                return;
            }
            t !== null || e[l].disabled || (t = e[l]);
        }
        t !== null && (t.selected = !0);
    }
}

function Ri(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
    return ie({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}

function Ta(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(_(92));
            if (_r(n)) {
                if (1 < n.length) throw Error(_(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: en(n) };
}

function wc(e, t) {
    var n = en(t.value),
        r = en(t.defaultValue);
    n != null &&
        ((n = "" + n),
            n !== e.value && (e.value = n),
            t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}

function Da(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}

function Sc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}

function Li(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ?
        Sc(t) :
        e === "http://www.w3.org/2000/svg" && t === "foreignObject" ?
        "http://www.w3.org/1999/xhtml" :
        e;
}
var ml,
    Ec = (function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ?

            function(t, n, r, l) {
                MSApp.execUnsafeLocalFunction(function() {
                    return e(t, n, r, l);
                });
            } :
            e;
    })(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                ml = ml || document.createElement("div"),
                ml.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                t = ml.firstChild; e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild);
        }
    });

function Vr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Pr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Cp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pr).forEach(function(e) {
    Cp.forEach(function(t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pr[t] = Pr[e]);
    });
});

function Cc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ?
        "" :
        n || typeof t != "number" || t === 0 || (Pr.hasOwnProperty(e) && Pr[e]) ?
        ("" + t).trim() :
        t + "px";
}

function xc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Cc(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
        }
}
var xp = ie({ menuitem: !0 }, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
});

function Pi(e, t) {
    if (t) {
        if (xp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(_(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(_(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(_(62));
    }
}

function Mi(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Ni = null;

function ku(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Ti = null,
    Qn = null,
    Zn = null;

function za(e) {
    if ((e = il(e))) {
        if (typeof Ti != "function") throw Error(_(280));
        var t = e.stateNode;
        t && ((t = So(t)), Ti(e.stateNode, e.type, t));
    }
}

function kc(e) {
    Qn ? (Zn ? Zn.push(e) : (Zn = [e])) : (Qn = e);
}

function _c() {
    if (Qn) {
        var e = Qn,
            t = Zn;
        if (((Zn = Qn = null), za(e), t))
            for (e = 0; e < t.length; e++) za(t[e]);
    }
}

function Rc(e, t) {
    return e(t);
}

function Lc() {}
var Ko = !1;

function Pc(e, t, n) {
    if (Ko) return e(t, n);
    Ko = !0;
    try {
        return Rc(e, t, n);
    } finally {
        (Ko = !1), (Qn !== null || Zn !== null) && (Lc(), _c());
    }
}

function Hr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = So(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
            ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
            (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(_(231, t, typeof n));
    return n;
}
var Di = !1;
if (Lt)
    try {
        var pr = {};
        Object.defineProperty(pr, "passive", {
                get: function() {
                    Di = !0;
                },
            }),
            window.addEventListener("test", pr, pr),
            window.removeEventListener("test", pr, pr);
    } catch {
        Di = !1;
    }

function kp(e, t, n, r, l, o, i, u, a) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (p) {
        this.onError(p);
    }
}
var Mr = !1,
    $l = null,
    Wl = !1,
    zi = null,
    _p = {
        onError: function(e) {
            (Mr = !0), ($l = e);
        },
    };

function Rp(e, t, n, r, l, o, i, u, a) {
    (Mr = !1), ($l = null), kp.apply(_p, arguments);
}

function Lp(e, t, n, r, l, o, i, u, a) {
    if ((Rp.apply(this, arguments), Mr)) {
        if (Mr) {
            var s = $l;
            (Mr = !1), ($l = null);
        } else throw Error(_(198));
        Wl || ((Wl = !0), (zi = s));
    }
}

function kn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do(t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}

function Mc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
                t !== null)
        )
            return t.dehydrated;
    }
    return null;
}

function Oa(e) {
    if (kn(e) !== e) throw Error(_(188));
}

function Pp(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = kn(e)), t === null)) throw Error(_(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (((r = l.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n) return Oa(l), e;
                if (o === r) return Oa(l), t;
                o = o.sibling;
            }
            throw Error(_(188));
        }
        if (n.return !== r.return)(n = l), (r = o);
        else {
            for (var i = !1, u = l.child; u;) {
                if (u === n) {
                    (i = !0), (n = l), (r = o);
                    break;
                }
                if (u === r) {
                    (i = !0), (r = l), (n = o);
                    break;
                }
                u = u.sibling;
            }
            if (!i) {
                for (u = o.child; u;) {
                    if (u === n) {
                        (i = !0), (n = o), (r = l);
                        break;
                    }
                    if (u === r) {
                        (i = !0), (r = o), (n = l);
                        break;
                    }
                    u = u.sibling;
                }
                if (!i) throw Error(_(189));
            }
        }
        if (n.alternate !== r) throw Error(_(190));
    }
    if (n.tag !== 3) throw Error(_(188));
    return n.stateNode.current === n ? e : t;
}

function Nc(e) {
    return (e = Pp(e)), e !== null ? Tc(e) : null;
}

function Tc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Tc(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Dc = We.unstable_scheduleCallback,
    ja = We.unstable_cancelCallback,
    Mp = We.unstable_shouldYield,
    Np = We.unstable_requestPaint,
    ce = We.unstable_now,
    Tp = We.unstable_getCurrentPriorityLevel,
    _u = We.unstable_ImmediatePriority,
    zc = We.unstable_UserBlockingPriority,
    Ql = We.unstable_NormalPriority,
    Dp = We.unstable_LowPriority,
    Oc = We.unstable_IdlePriority,
    vo = null,
    mt = null;

function zp(e) {
    if (mt && typeof mt.onCommitFiberRoot == "function")
        try {
            mt.onCommitFiberRoot(vo, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var it = Math.clz32 ? Math.clz32 : Fp,
    Op = Math.log,
    jp = Math.LN2;

function Fp(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Op(e) / jp) | 0)) | 0;
}
var vl = 64,
    yl = 4194304;

function Rr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}

function Zl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? (r = Rr(u)) : ((o &= i), o !== 0 && (r = Rr(o)));
    } else(i = n & ~l), i !== 0 ? (r = Rr(i)) : o !== 0 && (r = Rr(o));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & l) &&
        ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t;)
            (n = 31 - it(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
}

function Ip(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}

function Up(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            o = e.pendingLanes; 0 < o;

    ) {
        var i = 31 - it(o),
            u = 1 << i,
            a = l[i];
        a === -1 ?
            (!(u & n) || u & r) && (l[i] = Ip(u, t)) :
            a <= t && (e.expiredLanes |= u),
            (o &= ~u);
    }
}

function Oi(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}

function jc() {
    var e = vl;
    return (vl <<= 1), !(vl & 4194240) && (vl = 64), e;
}

function Yo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}

function ll(e, t, n) {
    (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - it(t)),
        (e[t] = n);
}

function Vp(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - it(n),
            o = 1 << l;
        (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
}

function Ru(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
        var r = 31 - it(n),
            l = 1 << r;
        (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
}
var Z = 0;

function Fc(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ic,
    Lu,
    Uc,
    Vc,
    Hc,
    ji = !1,
    gl = [],
    Zt = null,
    Kt = null,
    Yt = null,
    Ar = new Map(),
    Br = new Map(),
    Bt = [],
    Hp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
    );

function Fa(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Zt = null;
            break;
        case "dragenter":
        case "dragleave":
            Kt = null;
            break;
        case "mouseover":
        case "mouseout":
            Yt = null;
            break;
        case "pointerover":
        case "pointerout":
            Ar.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Br.delete(t.pointerId);
    }
}

function hr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ?
        ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [l],
            }),
            t !== null && ((t = il(t)), t !== null && Lu(t)),
            e) :
        ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            l !== null && t.indexOf(l) === -1 && t.push(l),
            e);
}

function Ap(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return (Zt = hr(Zt, e, t, n, r, l)), !0;
        case "dragenter":
            return (Kt = hr(Kt, e, t, n, r, l)), !0;
        case "mouseover":
            return (Yt = hr(Yt, e, t, n, r, l)), !0;
        case "pointerover":
            var o = l.pointerId;
            return Ar.set(o, hr(Ar.get(o) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return (
                (o = l.pointerId), Br.set(o, hr(Br.get(o) || null, e, t, n, r, l)), !0
            );
    }
    return !1;
}

function Ac(e) {
    var t = cn(e.target);
    if (t !== null) {
        var n = kn(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Mc(n)), t !== null)) {
                    (e.blockedOn = t),
                    Hc(e.priority, function() {
                        Uc(n);
                    });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}

function Dl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Ni = r), n.target.dispatchEvent(r), (Ni = null);
        } else return (t = il(n)), t !== null && Lu(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}

function Ia(e, t, n) {
    Dl(e) && n.delete(t);
}

function Bp() {
    (ji = !1),
    Zt !== null && Dl(Zt) && (Zt = null),
        Kt !== null && Dl(Kt) && (Kt = null),
        Yt !== null && Dl(Yt) && (Yt = null),
        Ar.forEach(Ia),
        Br.forEach(Ia);
}

function mr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
            ji ||
            ((ji = !0),
                We.unstable_scheduleCallback(We.unstable_NormalPriority, Bp)));
}

function $r(e) {
    function t(l) {
        return mr(l, e);
    }
    if (0 < gl.length) {
        mr(gl[0], e);
        for (var n = 1; n < gl.length; n++) {
            var r = gl[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Zt !== null && mr(Zt, e),
        Kt !== null && mr(Kt, e),
        Yt !== null && mr(Yt, e),
        Ar.forEach(t),
        Br.forEach(t),
        n = 0; n < Bt.length; n++
    )
        (r = Bt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Bt.length && ((n = Bt[0]), n.blockedOn === null);)
        Ac(n), n.blockedOn === null && Bt.shift();
}
var Kn = Tt.ReactCurrentBatchConfig,
    Kl = !0;

function $p(e, t, n, r) {
    var l = Z,
        o = Kn.transition;
    Kn.transition = null;
    try {
        (Z = 1), Pu(e, t, n, r);
    } finally {
        (Z = l), (Kn.transition = o);
    }
}

function Wp(e, t, n, r) {
    var l = Z,
        o = Kn.transition;
    Kn.transition = null;
    try {
        (Z = 4), Pu(e, t, n, r);
    } finally {
        (Z = l), (Kn.transition = o);
    }
}

function Pu(e, t, n, r) {
    if (Kl) {
        var l = Fi(e, t, n, r);
        if (l === null) li(e, t, r, Yl, n), Fa(e, r);
        else if (Ap(l, e, t, n, r)) r.stopPropagation();
        else if ((Fa(e, r), t & 4 && -1 < Hp.indexOf(e))) {
            for (; l !== null;) {
                var o = il(l);
                if (
                    (o !== null && Ic(o),
                        (o = Fi(e, t, n, r)),
                        o === null && li(e, t, r, Yl, n),
                        o === l)
                )
                    break;
                l = o;
            }
            l !== null && r.stopPropagation();
        } else li(e, t, r, null, n);
    }
}
var Yl = null;

function Fi(e, t, n, r) {
    if (((Yl = null), (e = ku(r)), (e = cn(e)), e !== null))
        if (((t = kn(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
        if (((e = Mc(t)), e !== null)) return e;
        e = null;
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
    } else t !== e && (e = null);
    return (Yl = e), null;
}

function Bc(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Tp()) {
                case _u:
                    return 1;
                case zc:
                    return 4;
                case Ql:
                case Dp:
                    return 16;
                case Oc:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Wt = null,
    Mu = null,
    zl = null;

function $c() {
    if (zl) return zl;
    var e,
        t = Mu,
        n = t.length,
        r,
        l = "value" in Wt ? Wt.value : Wt.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (zl = l.slice(e, 1 < r ? 1 - r : void 0));
}

function Ol(e) {
    var t = e.keyCode;
    return (
        "charCode" in e ?
        ((e = e.charCode), e === 0 && t === 13 && (e = 13)) :
        (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}

function wl() {
    return !0;
}

function Ua() {
    return !1;
}

function Ze(e) {
    function t(n, r, l, o, i) {
        (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null);
        for (var u in e)
            e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
        return (
            (this.isDefaultPrevented = (
                    o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
                ) ?
                wl :
                Ua),
            (this.isPropagationStopped = Ua),
            this
        );
    }
    return (
        ie(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault ?
                        n.preventDefault() :
                        typeof n.returnValue != "unknown" && (n.returnValue = !1),
                        (this.isDefaultPrevented = wl));
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation ?
                        n.stopPropagation() :
                        typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                        (this.isPropagationStopped = wl));
            },
            persist: function() {},
            isPersistent: wl,
        }),
        t
    );
}
var or = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Nu = Ze(or),
    ol = ie({}, or, { view: 0, detail: 0 }),
    Qp = Ze(ol),
    Go,
    Xo,
    vr,
    yo = ie({}, ol, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Tu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ?
                e.fromElement === e.srcElement ?
                e.toElement :
                e.fromElement :
                e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ?
                e.movementX :
                (e !== vr &&
                    (vr && e.type === "mousemove" ?
                        ((Go = e.screenX - vr.screenX), (Xo = e.screenY - vr.screenY)) :
                        (Xo = Go = 0),
                        (vr = e)),
                    Go);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Xo;
        },
    }),
    Va = Ze(yo),
    Zp = ie({}, yo, { dataTransfer: 0 }),
    Kp = Ze(Zp),
    Yp = ie({}, ol, { relatedTarget: 0 }),
    Jo = Ze(Yp),
    Gp = ie({}, or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xp = Ze(Gp),
    Jp = ie({}, or, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    qp = Ze(Jp),
    bp = ie({}, or, { data: 0 }),
    Ha = Ze(bp),
    eh = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    th = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    nh = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };

function rh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = nh[e]) ? !!t[e] : !1;
}

function Tu() {
    return rh;
}
var lh = ie({}, ol, {
        key: function(e) {
            if (e.key) {
                var t = eh[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ?
                ((e = Ol(e)), e === 13 ? "Enter" : String.fromCharCode(e)) :
                e.type === "keydown" || e.type === "keyup" ?
                th[e.keyCode] || "Unidentified" :
                "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Tu,
        charCode: function(e) {
            return e.type === "keypress" ? Ol(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ?
                Ol(e) :
                e.type === "keydown" || e.type === "keyup" ?
                e.keyCode :
                0;
        },
    }),
    oh = Ze(lh),
    ih = ie({}, yo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Aa = Ze(ih),
    uh = ie({}, ol, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Tu,
    }),
    ah = Ze(uh),
    sh = ie({}, or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ch = Ze(sh),
    fh = ie({}, yo, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ?
                e.deltaY :
                "wheelDeltaY" in e ?
                -e.wheelDeltaY :
                "wheelDelta" in e ?
                -e.wheelDelta :
                0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    dh = Ze(fh),
    ph = [9, 13, 27, 32],
    Du = Lt && "CompositionEvent" in window,
    Nr = null;
Lt && "documentMode" in document && (Nr = document.documentMode);
var hh = Lt && "TextEvent" in window && !Nr,
    Wc = Lt && (!Du || (Nr && 8 < Nr && 11 >= Nr)),
    Ba = String.fromCharCode(32),
    $a = !1;

function Qc(e, t) {
    switch (e) {
        case "keyup":
            return ph.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}

function Zc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;

function mh(e, t) {
    switch (e) {
        case "compositionend":
            return Zc(t);
        case "keypress":
            return t.which !== 32 ? null : (($a = !0), Ba);
        case "textInput":
            return (e = t.data), e === Ba && $a ? null : e;
        default:
            return null;
    }
}

function vh(e, t) {
    if (Dn)
        return e === "compositionend" || (!Du && Qc(e, t)) ?
            ((e = $c()), (zl = Mu = Wt = null), (Dn = !1), e) :
            null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Wc && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var yh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};

function Wa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!yh[e.type] : t === "textarea";
}

function Kc(e, t, n, r) {
    kc(r),
        (t = Gl(t, "onChange")),
        0 < t.length &&
        ((n = new Nu("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var Tr = null,
    Wr = null;

function gh(e) {
    lf(e, 0);
}

function go(e) {
    var t = jn(e);
    if (yc(t)) return e;
}

function wh(e, t) {
    if (e === "change") return t;
}
var Yc = !1;
if (Lt) {
    var qo;
    if (Lt) {
        var bo = "oninput" in document;
        if (!bo) {
            var Qa = document.createElement("div");
            Qa.setAttribute("oninput", "return;"),
                (bo = typeof Qa.oninput == "function");
        }
        qo = bo;
    } else qo = !1;
    Yc = qo && (!document.documentMode || 9 < document.documentMode);
}

function Za() {
    Tr && (Tr.detachEvent("onpropertychange", Gc), (Wr = Tr = null));
}

function Gc(e) {
    if (e.propertyName === "value" && go(Wr)) {
        var t = [];
        Kc(t, Wr, e, ku(e)), Pc(gh, t);
    }
}

function Sh(e, t, n) {
    e === "focusin" ?
        (Za(), (Tr = t), (Wr = n), Tr.attachEvent("onpropertychange", Gc)) :
        e === "focusout" && Za();
}

function Eh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return go(Wr);
}

function Ch(e, t) {
    if (e === "click") return go(t);
}

function xh(e, t) {
    if (e === "input" || e === "change") return go(t);
}

function kh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var at = typeof Object.is == "function" ? Object.is : kh;

function Qr(e, t) {
    if (at(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!gi.call(t, l) || !at(e[l], t[l])) return !1;
    }
    return !0;
}

function Ka(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
}

function Ya(e, t) {
    var n = Ka(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Ka(n);
    }
}

function Xc(e, t) {
    return e && t ?
        e === t ?
        !0 :
        e && e.nodeType === 3 ?
        !1 :
        t && t.nodeType === 3 ?
        Xc(e, t.parentNode) :
        "contains" in e ?
        e.contains(t) :
        e.compareDocumentPosition ?
        !!(e.compareDocumentPosition(t) & 16) :
        !1 :
        !1;
}

function Jc() {
    for (var e = window, t = Bl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Bl(e.document);
    }
    return t;
}

function zu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
                (e.type === "text" ||
                    e.type === "search" ||
                    e.type === "tel" ||
                    e.type === "url" ||
                    e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}

function _h(e) {
    var t = Jc(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Xc(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && zu(n)) {
            if (
                ((t = r.start),
                    (e = r.end),
                    e === void 0 && (e = t),
                    "selectionStart" in n)
            )
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
                    e.getSelection)
            ) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                (r = r.end === void 0 ? o : Math.min(r.end, l)), !e.extend && o > r && ((l = r), (r = o), (o = l)),
                    (l = Ya(n, o));
                var i = Ya(n, r);
                l &&
                    i &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== l.node ||
                        e.anchorOffset !== l.offset ||
                        e.focusNode !== i.node ||
                        e.focusOffset !== i.offset) &&
                    ((t = t.createRange()),
                        t.setStart(l.node, l.offset),
                        e.removeAllRanges(),
                        o > r ?
                        (e.addRange(t), e.extend(i.node, i.offset)) :
                        (t.setEnd(i.node, i.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n;
            (e = e.parentNode);)
            e.nodeType === 1 &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
            (e = t[n]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top);
    }
}
var Rh = Lt && "documentMode" in document && 11 >= document.documentMode,
    zn = null,
    Ii = null,
    Dr = null,
    Ui = !1;

function Ga(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ui ||
        zn == null ||
        zn !== Bl(r) ||
        ((r = zn),
            "selectionStart" in r && zu(r) ?
            (r = { start: r.selectionStart, end: r.selectionEnd }) :
            ((r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                ).getSelection()),
                (r = {
                    anchorNode: r.anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                })),
            (Dr && Qr(Dr, r)) ||
            ((Dr = r),
                (r = Gl(Ii, "onSelect")),
                0 < r.length &&
                ((t = new Nu("onSelect", "select", null, t, n)),
                    e.push({ event: t, listeners: r }),
                    (t.target = zn))));
}

function Sl(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var On = {
        animationend: Sl("Animation", "AnimationEnd"),
        animationiteration: Sl("Animation", "AnimationIteration"),
        animationstart: Sl("Animation", "AnimationStart"),
        transitionend: Sl("Transition", "TransitionEnd"),
    },
    ei = {},
    qc = {};
Lt &&
    ((qc = document.createElement("div").style),
        "AnimationEvent" in window ||
        (delete On.animationend.animation,
            delete On.animationiteration.animation,
            delete On.animationstart.animation),
        "TransitionEvent" in window || delete On.transitionend.transition);

function wo(e) {
    if (ei[e]) return ei[e];
    if (!On[e]) return e;
    var t = On[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in qc) return (ei[e] = t[n]);
    return e;
}
var bc = wo("animationend"),
    ef = wo("animationiteration"),
    tf = wo("animationstart"),
    nf = wo("transitionend"),
    rf = new Map(),
    Xa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
    );

function nn(e, t) {
    rf.set(e, t), xn(t, [e]);
}
for (var ti = 0; ti < Xa.length; ti++) {
    var ni = Xa[ti],
        Lh = ni.toLowerCase(),
        Ph = ni[0].toUpperCase() + ni.slice(1);
    nn(Lh, "on" + Ph);
}
nn(bc, "onAnimationEnd");
nn(ef, "onAnimationIteration");
nn(tf, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(nf, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
xn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
xn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
xn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
xn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Lr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
    ),
    Mh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));

function Ja(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Lp(r, t, void 0, e), (e.currentTarget = null);
}

function lf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var u = r[i],
                        a = u.instance,
                        s = u.currentTarget;
                    if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
                    Ja(l, u, s), (o = a);
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (
                        ((u = r[i]),
                            (a = u.instance),
                            (s = u.currentTarget),
                            (u = u.listener),
                            a !== o && l.isPropagationStopped())
                    )
                        break e;
                    Ja(l, u, s), (o = a);
                }
        }
    }
    if (Wl) throw ((e = zi), (Wl = !1), (zi = null), e);
}

function b(e, t) {
    var n = t[$i];
    n === void 0 && (n = t[$i] = new Set());
    var r = e + "__bubble";
    n.has(r) || (of(t, e, 2, !1), n.add(r));
}

function ri(e, t, n) {
    var r = 0;
    t && (r |= 4), of(n, e, r, t);
}
var El = "_reactListening" + Math.random().toString(36).slice(2);

function Zr(e) {
    if (!e[El]) {
        (e[El] = !0),
        dc.forEach(function(n) {
            n !== "selectionchange" && (Mh.has(n) || ri(n, !1, e), ri(n, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[El] || ((t[El] = !0), ri("selectionchange", !1, t));
    }
}

function of(e, t, n, r) {
    switch (Bc(t)) {
        case 1:
            var l = $p;
            break;
        case 4:
            l = Wp;
            break;
        default:
            l = Pu;
    }
    (n = l.bind(null, t, n, e)),
    (l = void 0), !Di ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
        r ?
        l !== void 0 ?
        e.addEventListener(t, n, { capture: !0, passive: l }) :
        e.addEventListener(t, n, !0) :
        l !== void 0 ?
        e.addEventListener(t, n, { passive: l }) :
        e.addEventListener(t, n, !1);
}

function li(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
                if (i === 4)
                    for (i = r.return; i !== null;) {
                        var a = i.tag;
                        if (
                            (a === 3 || a === 4) &&
                            ((a = i.stateNode.containerInfo),
                                a === l || (a.nodeType === 8 && a.parentNode === l))
                        )
                            return;
                        i = i.return;
                    }
                for (; u !== null;) {
                    if (((i = cn(u)), i === null)) return;
                    if (((a = i.tag), a === 5 || a === 6)) {
                        r = o = i;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
    Pc(function() {
        var s = o,
            p = ku(n),
            m = [];
        e: {
            var v = rf.get(e);
            if (v !== void 0) {
                var E = Nu,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Ol(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        E = oh;
                        break;
                    case "focusin":
                        (w = "focus"), (E = Jo);
                        break;
                    case "focusout":
                        (w = "blur"), (E = Jo);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        E = Jo;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        E = Va;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        E = Kp;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        E = ah;
                        break;
                    case bc:
                    case ef:
                    case tf:
                        E = Xp;
                        break;
                    case nf:
                        E = ch;
                        break;
                    case "scroll":
                        E = Qp;
                        break;
                    case "wheel":
                        E = dh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        E = qp;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        E = Aa;
                }
                var S = (t & 4) !== 0,
                    P = !S && e === "scroll",
                    d = S ? (v !== null ? v + "Capture" : null) : v;
                S = [];
                for (var c = s, h; c !== null;) {
                    h = c;
                    var f = h.stateNode;
                    if (
                        (h.tag === 5 &&
                            f !== null &&
                            ((h = f),
                                d !== null && ((f = Hr(c, d)), f != null && S.push(Kr(c, f, h)))),
                            P)
                    )
                        break;
                    c = c.return;
                }
                0 < S.length &&
                    ((v = new E(v, w, null, n, p)), m.push({ event: v, listeners: S }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((v = e === "mouseover" || e === "pointerover"),
                        (E = e === "mouseout" || e === "pointerout"),
                        v &&
                        n !== Ni &&
                        (w = n.relatedTarget || n.fromElement) &&
                        (cn(w) || w[Pt]))
                )
                    break e;
                if (
                    (E || v) &&
                    ((v =
                            p.window === p ?
                            p :
                            (v = p.ownerDocument) ?
                            v.defaultView || v.parentWindow :
                            window),
                        E ?
                        ((w = n.relatedTarget || n.toElement),
                            (E = s),
                            (w = w ? cn(w) : null),
                            w !== null &&
                            ((P = kn(w)), w !== P || (w.tag !== 5 && w.tag !== 6)) &&
                            (w = null)) :
                        ((E = null), (w = s)),
                        E !== w)
                ) {
                    if (
                        ((S = Va),
                            (f = "onMouseLeave"),
                            (d = "onMouseEnter"),
                            (c = "mouse"),
                            (e === "pointerout" || e === "pointerover") &&
                            ((S = Aa),
                                (f = "onPointerLeave"),
                                (d = "onPointerEnter"),
                                (c = "pointer")),
                            (P = E == null ? v : jn(E)),
                            (h = w == null ? v : jn(w)),
                            (v = new S(f, c + "leave", E, n, p)),
                            (v.target = P),
                            (v.relatedTarget = h),
                            (f = null),
                            cn(p) === s &&
                            ((S = new S(d, c + "enter", w, n, p)),
                                (S.target = h),
                                (S.relatedTarget = P),
                                (f = S)),
                            (P = f),
                            E && w)
                    )
                        t: {
                            for (S = E, d = w, c = 0, h = S; h; h = Pn(h)) c++;
                            for (h = 0, f = d; f; f = Pn(f)) h++;
                            for (; 0 < c - h;)(S = Pn(S)),
                            c--;
                            for (; 0 < h - c;)(d = Pn(d)),
                            h--;
                            for (; c--;) {
                                if (S === d || (d !== null && S === d.alternate)) break t;
                                (S = Pn(S)), (d = Pn(d));
                            }
                            S = null;
                        }
                    else S = null;
                    E !== null && qa(m, v, E, S, !1),
                        w !== null && P !== null && qa(m, P, w, S, !0);
                }
            }
            e: {
                if (
                    ((v = s ? jn(s) : window),
                        (E = v.nodeName && v.nodeName.toLowerCase()),
                        E === "select" || (E === "input" && v.type === "file"))
                )
                    var k = wh;
                else if (Wa(v))
                    if (Yc) k = xh;
                    else {
                        k = Eh;
                        var L = Sh;
                    }
                else
                    (E = v.nodeName) &&
                    E.toLowerCase() === "input" &&
                    (v.type === "checkbox" || v.type === "radio") &&
                    (k = Ch);
                if (k && (k = k(e, s))) {
                    Kc(m, k, n, p);
                    break e;
                }
                L && L(e, v, s),
                e === "focusout" &&
                (L = v._wrapperState) &&
                L.controlled &&
                v.type === "number" &&
                _i(v, "number", v.value);
            }
            switch (((L = s ? jn(s) : window), e)) {
                case "focusin":
                    (Wa(L) || L.contentEditable === "true") &&
                    ((zn = L), (Ii = s), (Dr = null));
                    break;
                case "focusout":
                    Dr = Ii = zn = null;
                    break;
                case "mousedown":
                    Ui = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Ui = !1), Ga(m, n, p);
                    break;
                case "selectionchange":
                    if (Rh) break;
                case "keydown":
                case "keyup":
                    Ga(m, n, p);
            }
            var R;
            if (Du)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var T = "onCompositionStart";
                            break e;
                        case "compositionend":
                            T = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            T = "onCompositionUpdate";
                            break e;
                    }
                    T = void 0;
                }
            else
                Dn ?
                Qc(e, n) && (T = "onCompositionEnd") :
                e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T &&
            (Wc &&
                n.locale !== "ko" &&
                (Dn || T !== "onCompositionStart" ?
                    T === "onCompositionEnd" && Dn && (R = $c()) :
                    ((Wt = p),
                        (Mu = "value" in Wt ? Wt.value : Wt.textContent),
                        (Dn = !0))),
                (L = Gl(s, T)),
                0 < L.length &&
                ((T = new Ha(T, e, null, n, p)),
                    m.push({ event: T, listeners: L }),
                    R ? (T.data = R) : ((R = Zc(n)), R !== null && (T.data = R)))),
            (R = hh ? mh(e, n) : vh(e, n)) &&
            ((s = Gl(s, "onBeforeInput")),
                0 < s.length &&
                ((p = new Ha("onBeforeInput", "beforeinput", null, n, p)),
                    m.push({ event: p, listeners: s }),
                    (p.data = R)));
        }
        lf(m, t);
    });
}

function Kr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}

function Gl(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 &&
            o !== null &&
            ((l = o),
                (o = Hr(e, n)),
                o != null && r.unshift(Kr(e, o, l)),
                (o = Hr(e, t)),
                o != null && r.push(Kr(e, o, l))),
            (e = e.return);
    }
    return r;
}

function Pn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}

function qa(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var u = n,
            a = u.alternate,
            s = u.stateNode;
        if (a !== null && a === r) break;
        u.tag === 5 &&
            s !== null &&
            ((u = s),
                l ?
                ((a = Hr(n, o)), a != null && i.unshift(Kr(n, a, u))) :
                l || ((a = Hr(n, o)), a != null && i.push(Kr(n, a, u)))),
            (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
}
var Nh = /\r\n?/g,
    Th = /\u0000|\uFFFD/g;

function ba(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Nh,
            `
`
        )
        .replace(Th, "");
}

function Cl(e, t, n) {
    if (((t = ba(t)), ba(e) !== t && n)) throw Error(_(425));
}

function Xl() {}
var Vi = null,
    Hi = null;

function Ai(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Bi = typeof setTimeout == "function" ? setTimeout : void 0,
    Dh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    es = typeof Promise == "function" ? Promise : void 0,
    zh =
    typeof queueMicrotask == "function" ?
    queueMicrotask :
    typeof es < "u" ?

    function(e) {
        return es.resolve(null).then(e).catch(Oh);
    } :
    Bi;

function Oh(e) {
    setTimeout(function() {
        throw e;
    });
}

function oi(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if ((e.removeChild(n), l && l.nodeType === 8))
            if (((n = l.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(l), $r(t);
                    return;
                }
                r--;
            } else(n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = l;
    } while (n);
    $r(t);
}

function Gt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}

function ts(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var ir = Math.random().toString(36).slice(2),
    ht = "__reactFiber$" + ir,
    Yr = "__reactProps$" + ir,
    Pt = "__reactContainer$" + ir,
    $i = "__reactEvents$" + ir,
    jh = "__reactListeners$" + ir,
    Fh = "__reactHandles$" + ir;

function cn(e) {
    var t = e[ht];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if ((t = n[Pt] || n[ht])) {
            if (
                ((n = t.alternate),
                    t.child !== null || (n !== null && n.child !== null))
            )
                for (e = ts(e); e !== null;) {
                    if ((n = e[ht])) return n;
                    e = ts(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}

function il(e) {
    return (
        (e = e[ht] || e[Pt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
}

function jn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(_(33));
}

function So(e) {
    return e[Yr] || null;
}
var Wi = [],
    Fn = -1;

function rn(e) {
    return { current: e };
}

function ee(e) {
    0 > Fn || ((e.current = Wi[Fn]), (Wi[Fn] = null), Fn--);
}

function q(e, t) {
    Fn++, (Wi[Fn] = e.current), (e.current = t);
}
var tn = {},
    Pe = rn(tn),
    Fe = rn(!1),
    vn = tn;

function qn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return tn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return (
        r &&
        ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    );
}

function Ie(e) {
    return (e = e.childContextTypes), e != null;
}

function Jl() {
    ee(Fe), ee(Pe);
}

function ns(e, t, n) {
    if (Pe.current !== tn) throw Error(_(168));
    q(Pe, t), q(Fe, n);
}

function uf(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(_(108, Sp(e) || "Unknown", l));
    return ie({}, n, r);
}

function ql(e) {
    return (
        (e =
            ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn),
        (vn = Pe.current),
        q(Pe, e),
        q(Fe, Fe.current), !0
    );
}

function rs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(_(169));
    n
        ?
        ((e = uf(e, t, vn)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            ee(Fe),
            ee(Pe),
            q(Pe, e)) :
        ee(Fe),
        q(Fe, n);
}
var Ct = null,
    Eo = !1,
    ii = !1;

function af(e) {
    Ct === null ? (Ct = [e]) : Ct.push(e);
}

function Ih(e) {
    (Eo = !0), af(e);
}

function ln() {
    if (!ii && Ct !== null) {
        ii = !0;
        var e = 0,
            t = Z;
        try {
            var n = Ct;
            for (Z = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Ct = null), (Eo = !1);
        } catch (l) {
            throw (Ct !== null && (Ct = Ct.slice(e + 1)), Dc(_u, ln), l);
        } finally {
            (Z = t), (ii = !1);
        }
    }
    return null;
}
var In = [],
    Un = 0,
    bl = null,
    eo = 0,
    Ye = [],
    Ge = 0,
    yn = null,
    xt = 1,
    kt = "";

function an(e, t) {
    (In[Un++] = eo), (In[Un++] = bl), (bl = e), (eo = t);
}

function sf(e, t, n) {
    (Ye[Ge++] = xt), (Ye[Ge++] = kt), (Ye[Ge++] = yn), (yn = e);
    var r = xt;
    e = kt;
    var l = 32 - it(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - it(t) + l;
    if (30 < o) {
        var i = l - (l % 5);
        (o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (xt = (1 << (32 - it(t) + l)) | (n << l) | r),
        (kt = o + e);
    } else(xt = (1 << o) | (n << l) | r), (kt = e);
}

function Ou(e) {
    e.return !== null && (an(e, 1), sf(e, 1, 0));
}

function ju(e) {
    for (; e === bl;)
        (bl = In[--Un]), (In[Un] = null), (eo = In[--Un]), (In[Un] = null);
    for (; e === yn;)
        (yn = Ye[--Ge]),
        (Ye[Ge] = null),
        (kt = Ye[--Ge]),
        (Ye[Ge] = null),
        (xt = Ye[--Ge]),
        (Ye[Ge] = null);
}
var $e = null,
    Be = null,
    ne = !1,
    ot = null;

function cf(e, t) {
    var n = Xe(5, null, null, 0);
    (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}

function ls(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ?
                    null :
                    t),
                t !== null ?
                ((e.stateNode = t), ($e = e), (Be = Gt(t.firstChild)), !0) :
                !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), ($e = e), (Be = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null ?
                ((n = yn !== null ? { id: xt, overflow: kt } : null),
                    (e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824,
                    }),
                    (n = Xe(18, null, null, 0)),
                    (n.stateNode = t),
                    (n.return = e),
                    (e.child = n),
                    ($e = e),
                    (Be = null), !0) :
                !1
            );
        default:
            return !1;
    }
}

function Qi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}

function Zi(e) {
    if (ne) {
        var t = Be;
        if (t) {
            var n = t;
            if (!ls(e, t)) {
                if (Qi(e)) throw Error(_(418));
                t = Gt(n.nextSibling);
                var r = $e;
                t && ls(e, t) ?
                    cf(r, n) :
                    ((e.flags = (e.flags & -4097) | 2), (ne = !1), ($e = e));
            }
        } else {
            if (Qi(e)) throw Error(_(418));
            (e.flags = (e.flags & -4097) | 2), (ne = !1), ($e = e);
        }
    }
}

function os(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
        e = e.return;
    $e = e;
}

function xl(e) {
    if (e !== $e) return !1;
    if (!ne) return os(e), (ne = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
                (t = t !== "head" && t !== "body" && !Ai(e.type, e.memoizedProps))),
            t && (t = Be))
    ) {
        if (Qi(e)) throw (ff(), Error(_(418)));
        for (; t;) cf(e, t), (t = Gt(t.nextSibling));
    }
    if ((os(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(_(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Be = Gt(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else(n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Be = null;
        }
    } else Be = $e ? Gt(e.stateNode.nextSibling) : null;
    return !0;
}

function ff() {
    for (var e = Be; e;) e = Gt(e.nextSibling);
}

function bn() {
    (Be = $e = null), (ne = !1);
}

function Fu(e) {
    ot === null ? (ot = [e]) : ot.push(e);
}
var Uh = Tt.ReactCurrentBatchConfig;

function nt(e, t) {
    if (e && e.defaultProps) {
        (t = ie({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var to = rn(null),
    no = null,
    Vn = null,
    Iu = null;

function Uu() {
    Iu = Vn = no = null;
}

function Vu(e) {
    var t = to.current;
    ee(to), (e._currentValue = t);
}

function Ki(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t ?
                ((e.childLanes |= t), r !== null && (r.childLanes |= t)) :
                r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
                e === n)
        )
            break;
        e = e.return;
    }
}

function Yn(e, t) {
    (no = e),
    (Iu = Vn = null),
    (e = e.dependencies),
    e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (je = !0), (e.firstContext = null));
}

function qe(e) {
    var t = e._currentValue;
    if (Iu !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
            if (no === null) throw Error(_(308));
            (Vn = e), (no.dependencies = { lanes: 0, firstContext: e });
        } else Vn = Vn.next = e;
    return t;
}
var fn = null;

function Hu(e) {
    fn === null ? (fn = [e]) : fn.push(e);
}

function df(e, t, n, r) {
    var l = t.interleaved;
    return (
        l === null ? ((n.next = n), Hu(t)) : ((n.next = l.next), (l.next = n)),
        (t.interleaved = n),
        Mt(e, r)
    );
}

function Mt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
        (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var At = !1;

function Au(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}

function pf(e, t) {
    (e = e.updateQueue),
    t.updateQueue === e &&
        (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
        });
}

function _t(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}

function Xt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), Q & 2)) {
        var l = r.pending;
        return (
            l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
            (r.pending = t),
            Mt(e, n)
        );
    }
    return (
        (l = r.interleaved),
        l === null ? ((t.next = t), Hu(r)) : ((t.next = l.next), (l.next = t)),
        (r.interleaved = t),
        Mt(e, n)
    );
}

function jl(e, t, n) {
    if (
        ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ru(e, n);
    }
}

function is(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var l = null,
            o = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
            } while (n !== null);
            o === null ? (l = o = t) : (o = o.next = t);
        } else l = o = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
        (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}

function ro(e, t, n, r) {
    var l = e.updateQueue;
    At = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var a = u,
            s = a.next;
        (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
        var p = e.alternate;
        p !== null &&
            ((p = p.updateQueue),
                (u = p.lastBaseUpdate),
                u !== i &&
                (u === null ? (p.firstBaseUpdate = s) : (u.next = s),
                    (p.lastBaseUpdate = a)));
    }
    if (o !== null) {
        var m = l.baseState;
        (i = 0), (p = s = a = null), (u = o);
        do {
            var v = u.lane,
                E = u.eventTime;
            if ((r & v) === v) {
                p !== null &&
                    (p = p.next = {
                        eventTime: E,
                        lane: 0,
                        tag: u.tag,
                        payload: u.payload,
                        callback: u.callback,
                        next: null,
                    });
                e: {
                    var w = e,
                        S = u;
                    switch (((v = t), (E = n), S.tag)) {
                        case 1:
                            if (((w = S.payload), typeof w == "function")) {
                                m = w.call(E, m, v);
                                break e;
                            }
                            m = w;
                            break e;
                        case 3:
                            w.flags = (w.flags & -65537) | 128;
                        case 0:
                            if (
                                ((w = S.payload),
                                    (v = typeof w == "function" ? w.call(E, m, v) : w),
                                    v == null)
                            )
                                break e;
                            m = ie({}, m, v);
                            break e;
                        case 2:
                            At = !0;
                    }
                }
                u.callback !== null &&
                    u.lane !== 0 &&
                    ((e.flags |= 64),
                        (v = l.effects),
                        v === null ? (l.effects = [u]) : v.push(u));
            } else
                (E = {
                    eventTime: E,
                    lane: v,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null,
                }),
                p === null ? ((s = p = E), (a = m)) : (p = p.next = E),
                (i |= v);
            if (((u = u.next), u === null)) {
                if (((u = l.shared.pending), u === null)) break;
                (v = u),
                (u = v.next),
                (v.next = null),
                (l.lastBaseUpdate = v),
                (l.shared.pending = null);
            }
        } while (1);
        if (
            (p === null && (a = m),
                (l.baseState = a),
                (l.firstBaseUpdate = s),
                (l.lastBaseUpdate = p),
                (t = l.shared.interleaved),
                t !== null)
        ) {
            l = t;
            do(i |= l.lane), (l = l.next);
            while (l !== t);
        } else o === null && (l.shared.lanes = 0);
        (wn |= i), (e.lanes = i), (e.memoizedState = m);
    }
}

function us(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (((r.callback = null), (r = n), typeof l != "function"))
                    throw Error(_(191, l));
                l.call(r);
            }
        }
}
var hf = new fc.Component().refs;

function Yi(e, t, n, r) {
    (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Co = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? kn(e) === e : !1;
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Te(),
            l = qt(e),
            o = _t(r, l);
        (o.payload = t),
        n != null && (o.callback = n),
            (t = Xt(e, o, l)),
            t !== null && (ut(t, e, l, r), jl(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Te(),
            l = qt(e),
            o = _t(r, l);
        (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
            (t = Xt(e, o, l)),
            t !== null && (ut(t, e, l, r), jl(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Te(),
            r = qt(e),
            l = _t(n, r);
        (l.tag = 2),
        t != null && (l.callback = t),
            (t = Xt(e, l, r)),
            t !== null && (ut(t, e, r, n), jl(t, e, r));
    },
};

function as(e, t, n, r, l, o, i) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function" ?
        e.shouldComponentUpdate(r, o, i) :
        t.prototype && t.prototype.isPureReactComponent ?
        !Qr(n, r) || !Qr(l, o) :
        !0
    );
}

function mf(e, t, n) {
    var r = !1,
        l = tn,
        o = t.contextType;
    return (
        typeof o == "object" && o !== null ?
        (o = qe(o)) :
        ((l = Ie(t) ? vn : Pe.current),
            (r = t.contextTypes),
            (o = (r = r != null) ? qn(e, l) : tn)),
        (t = new t(n, o)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Co),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
        ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}

function ss(e, t, n, r) {
    (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Co.enqueueReplaceState(t, t.state, null);
}

function Gi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = hf), Au(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ?
        (l.context = qe(o)) :
        ((o = Ie(t) ? vn : Pe.current), (l.context = qn(e, o))),
        (l.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (Yi(e, t, o, n), (l.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
            typeof l.componentWillMount != "function") ||
        ((t = l.state),
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" &&
            l.UNSAFE_componentWillMount(),
            t !== l.state && Co.enqueueReplaceState(l, l.state, null),
            ro(e, n, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}

function yr(e, t, n) {
    if (
        ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(_(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(_(147, e));
            var l = r,
                o = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === o ?
                t.ref :
                ((t = function(i) {
                        var u = l.refs;
                        u === hf && (u = l.refs = {}),
                            i === null ? delete u[o] : (u[o] = i);
                    }),
                    (t._stringRef = o),
                    t);
        }
        if (typeof e != "string") throw Error(_(284));
        if (!n._owner) throw Error(_(290, e));
    }
    return e;
}

function kl(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
            Error(
                _(
                    31,
                    e === "[object Object]" ?
                    "object with keys {" + Object.keys(t).join(", ") + "}" :
                    e
                )
            ))
    );
}

function cs(e) {
    var t = e._init;
    return t(e._payload);
}

function vf(e) {
    function t(d, c) {
        if (e) {
            var h = d.deletions;
            h === null ? ((d.deletions = [c]), (d.flags |= 16)) : h.push(c);
        }
    }

    function n(d, c) {
        if (!e) return null;
        for (; c !== null;) t(d, c), (c = c.sibling);
        return null;
    }

    function r(d, c) {
        for (d = new Map(); c !== null;)
            c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
        return d;
    }

    function l(d, c) {
        return (d = bt(d, c)), (d.index = 0), (d.sibling = null), d;
    }

    function o(d, c, h) {
        return (
            (d.index = h),
            e ?
            ((h = d.alternate),
                h !== null ?
                ((h = h.index), h < c ? ((d.flags |= 2), c) : h) :
                ((d.flags |= 2), c)) :
            ((d.flags |= 1048576), c)
        );
    }

    function i(d) {
        return e && d.alternate === null && (d.flags |= 2), d;
    }

    function u(d, c, h, f) {
        return c === null || c.tag !== 6 ?
            ((c = pi(h, d.mode, f)), (c.return = d), c) :
            ((c = l(c, h)), (c.return = d), c);
    }

    function a(d, c, h, f) {
        var k = h.type;
        return k === Tn ?
            p(d, c, h.props.children, f, h.key) :
            c !== null &&
            (c.elementType === k ||
                (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Ht &&
                    cs(k) === c.type)) ?
            ((f = l(c, h.props)), (f.ref = yr(d, c, h)), (f.return = d), f) :
            ((f = Al(h.type, h.key, h.props, null, d.mode, f)),
                (f.ref = yr(d, c, h)),
                (f.return = d),
                f);
    }

    function s(d, c, h, f) {
        return c === null ||
            c.tag !== 4 ||
            c.stateNode.containerInfo !== h.containerInfo ||
            c.stateNode.implementation !== h.implementation ?
            ((c = hi(h, d.mode, f)), (c.return = d), c) :
            ((c = l(c, h.children || [])), (c.return = d), c);
    }

    function p(d, c, h, f, k) {
        return c === null || c.tag !== 7 ?
            ((c = mn(h, d.mode, f, k)), (c.return = d), c) :
            ((c = l(c, h)), (c.return = d), c);
    }

    function m(d, c, h) {
        if ((typeof c == "string" && c !== "") || typeof c == "number")
            return (c = pi("" + c, d.mode, h)), (c.return = d), c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case pl:
                    return (
                        (h = Al(c.type, c.key, c.props, null, d.mode, h)),
                        (h.ref = yr(d, null, c)),
                        (h.return = d),
                        h
                    );
                case Nn:
                    return (c = hi(c, d.mode, h)), (c.return = d), c;
                case Ht:
                    var f = c._init;
                    return m(d, f(c._payload), h);
            }
            if (_r(c) || dr(c))
                return (c = mn(c, d.mode, h, null)), (c.return = d), c;
            kl(d, c);
        }
        return null;
    }

    function v(d, c, h, f) {
        var k = c !== null ? c.key : null;
        if ((typeof h == "string" && h !== "") || typeof h == "number")
            return k !== null ? null : u(d, c, "" + h, f);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case pl:
                    return h.key === k ? a(d, c, h, f) : null;
                case Nn:
                    return h.key === k ? s(d, c, h, f) : null;
                case Ht:
                    return (k = h._init), v(d, c, k(h._payload), f);
            }
            if (_r(h) || dr(h)) return k !== null ? null : p(d, c, h, f, null);
            kl(d, h);
        }
        return null;
    }

    function E(d, c, h, f, k) {
        if ((typeof f == "string" && f !== "") || typeof f == "number")
            return (d = d.get(h) || null), u(c, d, "" + f, k);
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case pl:
                    return (d = d.get(f.key === null ? h : f.key) || null), a(c, d, f, k);
                case Nn:
                    return (d = d.get(f.key === null ? h : f.key) || null), s(c, d, f, k);
                case Ht:
                    var L = f._init;
                    return E(d, c, h, L(f._payload), k);
            }
            if (_r(f) || dr(f)) return (d = d.get(h) || null), p(c, d, f, k, null);
            kl(c, f);
        }
        return null;
    }

    function w(d, c, h, f) {
        for (
            var k = null, L = null, R = c, T = (c = 0), W = null; R !== null && T < h.length; T++
        ) {
            R.index > T ? ((W = R), (R = null)) : (W = R.sibling);
            var F = v(d, R, h[T], f);
            if (F === null) {
                R === null && (R = W);
                break;
            }
            e && R && F.alternate === null && t(d, R),
                (c = o(F, c, T)),
                L === null ? (k = F) : (L.sibling = F),
                (L = F),
                (R = W);
        }
        if (T === h.length) return n(d, R), ne && an(d, T), k;
        if (R === null) {
            for (; T < h.length; T++)
                (R = m(d, h[T], f)),
                R !== null &&
                ((c = o(R, c, T)), L === null ? (k = R) : (L.sibling = R), (L = R));
            return ne && an(d, T), k;
        }
        for (R = r(d, R); T < h.length; T++)
            (W = E(R, d, T, h[T], f)),
            W !== null &&
            (e && W.alternate !== null && R.delete(W.key === null ? T : W.key),
                (c = o(W, c, T)),
                L === null ? (k = W) : (L.sibling = W),
                (L = W));
        return (
            e &&
            R.forEach(function(ye) {
                return t(d, ye);
            }),
            ne && an(d, T),
            k
        );
    }

    function S(d, c, h, f) {
        var k = dr(h);
        if (typeof k != "function") throw Error(_(150));
        if (((h = k.call(h)), h == null)) throw Error(_(151));
        for (
            var L = (k = null), R = c, T = (c = 0), W = null, F = h.next(); R !== null && !F.done; T++, F = h.next()
        ) {
            R.index > T ? ((W = R), (R = null)) : (W = R.sibling);
            var ye = v(d, R, F.value, f);
            if (ye === null) {
                R === null && (R = W);
                break;
            }
            e && R && ye.alternate === null && t(d, R),
                (c = o(ye, c, T)),
                L === null ? (k = ye) : (L.sibling = ye),
                (L = ye),
                (R = W);
        }
        if (F.done) return n(d, R), ne && an(d, T), k;
        if (R === null) {
            for (; !F.done; T++, F = h.next())
                (F = m(d, F.value, f)),
                F !== null &&
                ((c = o(F, c, T)), L === null ? (k = F) : (L.sibling = F), (L = F));
            return ne && an(d, T), k;
        }
        for (R = r(d, R); !F.done; T++, F = h.next())
            (F = E(R, d, T, F.value, f)),
            F !== null &&
            (e && F.alternate !== null && R.delete(F.key === null ? T : F.key),
                (c = o(F, c, T)),
                L === null ? (k = F) : (L.sibling = F),
                (L = F));
        return (
            e &&
            R.forEach(function(X) {
                return t(d, X);
            }),
            ne && an(d, T),
            k
        );
    }

    function P(d, c, h, f) {
        if (
            (typeof h == "object" &&
                h !== null &&
                h.type === Tn &&
                h.key === null &&
                (h = h.props.children),
                typeof h == "object" && h !== null)
        ) {
            switch (h.$$typeof) {
                case pl:
                    e: {
                        for (var k = h.key, L = c; L !== null;) {
                            if (L.key === k) {
                                if (((k = h.type), k === Tn)) {
                                    if (L.tag === 7) {
                                        n(d, L.sibling),
                                            (c = l(L, h.props.children)),
                                            (c.return = d),
                                            (d = c);
                                        break e;
                                    }
                                } else if (
                                    L.elementType === k ||
                                    (typeof k == "object" &&
                                        k !== null &&
                                        k.$$typeof === Ht &&
                                        cs(k) === L.type)
                                ) {
                                    n(d, L.sibling),
                                        (c = l(L, h.props)),
                                        (c.ref = yr(d, L, h)),
                                        (c.return = d),
                                        (d = c);
                                    break e;
                                }
                                n(d, L);
                                break;
                            } else t(d, L);
                            L = L.sibling;
                        }
                        h.type === Tn ?
                        ((c = mn(h.props.children, d.mode, f, h.key)),
                            (c.return = d),
                            (d = c)) :
                            ((f = Al(h.type, h.key, h.props, null, d.mode, f)),
                            (f.ref = yr(d, c, h)),
                            (f.return = d),
                            (d = f));
                    }
                    return i(d);
                case Nn:
                    e: {
                        for (L = h.key; c !== null;) {
                            if (c.key === L)
                                if (
                                    c.tag === 4 &&
                                    c.stateNode.containerInfo === h.containerInfo &&
                                    c.stateNode.implementation === h.implementation
                                ) {
                                    n(d, c.sibling),
                                        (c = l(c, h.children || [])),
                                        (c.return = d),
                                        (d = c);
                                    break e;
                                } else {
                                    n(d, c);
                                    break;
                                }
                            else t(d, c);
                            c = c.sibling;
                        }
                        (c = hi(h, d.mode, f)),
                        (c.return = d),
                        (d = c);
                    }
                    return i(d);
                case Ht:
                    return (L = h._init), P(d, c, L(h._payload), f);
            }
            if (_r(h)) return w(d, c, h, f);
            if (dr(h)) return S(d, c, h, f);
            kl(d, h);
        }
        return (typeof h == "string" && h !== "") || typeof h == "number" ?
            ((h = "" + h),
                c !== null && c.tag === 6 ?
                (n(d, c.sibling), (c = l(c, h)), (c.return = d), (d = c)) :
                (n(d, c), (c = pi(h, d.mode, f)), (c.return = d), (d = c)),
                i(d)) :
            n(d, c);
    }
    return P;
}
var er = vf(!0),
    yf = vf(!1),
    ul = {},
    vt = rn(ul),
    Gr = rn(ul),
    Xr = rn(ul);

function dn(e) {
    if (e === ul) throw Error(_(174));
    return e;
}

function Bu(e, t) {
    switch ((q(Xr, t), q(Gr, e), q(vt, ul), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Li(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = Li(t, e));
    }
    ee(vt), q(vt, t);
}

function tr() {
    ee(vt), ee(Gr), ee(Xr);
}

function gf(e) {
    dn(Xr.current);
    var t = dn(vt.current),
        n = Li(t, e.type);
    t !== n && (q(Gr, e), q(vt, n));
}

function $u(e) {
    Gr.current === e && (ee(vt), ee(Gr));
}
var le = rn(0);

function lo(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var ui = [];

function Wu() {
    for (var e = 0; e < ui.length; e++)
        ui[e]._workInProgressVersionPrimary = null;
    ui.length = 0;
}
var Fl = Tt.ReactCurrentDispatcher,
    ai = Tt.ReactCurrentBatchConfig,
    gn = 0,
    oe = null,
    me = null,
    we = null,
    oo = !1,
    zr = !1,
    Jr = 0,
    Vh = 0;

function _e() {
    throw Error(_(321));
}

function Qu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!at(e[n], t[n])) return !1;
    return !0;
}

function Zu(e, t, n, r, l, o) {
    if (
        ((gn = o),
            (oe = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Fl.current = e === null || e.memoizedState === null ? $h : Wh),
            (e = n(r, l)),
            zr)
    ) {
        o = 0;
        do {
            if (((zr = !1), (Jr = 0), 25 <= o)) throw Error(_(301));
            (o += 1),
            (we = me = null),
            (t.updateQueue = null),
            (Fl.current = Qh),
            (e = n(r, l));
        } while (zr);
    }
    if (
        ((Fl.current = io),
            (t = me !== null && me.next !== null),
            (gn = 0),
            (we = me = oe = null),
            (oo = !1),
            t)
    )
        throw Error(_(300));
    return e;
}

function Ku() {
    var e = Jr !== 0;
    return (Jr = 0), e;
}

function pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return we === null ? (oe.memoizedState = we = e) : (we = we.next = e), we;
}

function be() {
    if (me === null) {
        var e = oe.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var t = we === null ? oe.memoizedState : we.next;
    if (t !== null)(we = t), (me = e);
    else {
        if (e === null) throw Error(_(310));
        (me = e),
        (e = {
            memoizedState: me.memoizedState,
            baseState: me.baseState,
            baseQueue: me.baseQueue,
            queue: me.queue,
            next: null,
        }),
        we === null ? (oe.memoizedState = we = e) : (we = we.next = e);
    }
    return we;
}

function qr(e, t) {
    return typeof t == "function" ? t(e) : t;
}

function si(e) {
    var t = be(),
        n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = me,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            (l.next = o.next), (o.next = i);
        }
        (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
        (o = l.next), (r = r.baseState);
        var u = (i = null),
            a = null,
            s = o;
        do {
            var p = s.lane;
            if ((gn & p) === p)
                a !== null &&
                (a = a.next = {
                    lane: 0,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null,
                }),
                (r = s.hasEagerState ? s.eagerState : e(r, s.action));
            else {
                var m = {
                    lane: p,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null,
                };
                a === null ? ((u = a = m), (i = r)) : (a = a.next = m),
                    (oe.lanes |= p),
                    (wn |= p);
            }
            s = s.next;
        } while (s !== null && s !== o);
        a === null ? (i = r) : (a.next = u),
            at(r, t.memoizedState) || (je = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = a),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        l = e;
        do(o = l.lane), (oe.lanes |= o), (wn |= o), (l = l.next);
        while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}

function ci(e) {
    var t = be(),
        n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = (l = l.next);
        do(o = e(o, i.action)), (i = i.next);
        while (i !== l);
        at(o, t.memoizedState) || (je = !0),
            (t.memoizedState = o),
            t.baseQueue === null && (t.baseState = o),
            (n.lastRenderedState = o);
    }
    return [o, r];
}

function wf() {}

function Sf(e, t) {
    var n = oe,
        r = be(),
        l = t(),
        o = !at(r.memoizedState, l);
    if (
        (o && ((r.memoizedState = l), (je = !0)),
            (r = r.queue),
            Yu(xf.bind(null, n, r, e), [e]),
            r.getSnapshot !== t || o || (we !== null && we.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
                br(9, Cf.bind(null, n, r, l, t), void 0, null),
                Se === null)
        )
            throw Error(_(349));
        gn & 30 || Ef(n, t, l);
    }
    return l;
}

function Ef(e, t, n) {
    (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = oe.updateQueue),
    t === null ?
        ((t = { lastEffect: null, stores: null }),
            (oe.updateQueue = t),
            (t.stores = [e])) :
        ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}

function Cf(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), kf(t) && _f(e);
}

function xf(e, t, n) {
    return n(function() {
        kf(t) && _f(e);
    });
}

function kf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !at(e, n);
    } catch {
        return !0;
    }
}

function _f(e) {
    var t = Mt(e, 1);
    t !== null && ut(t, e, 1, -1);
}

function fs(e) {
    var t = pt();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: qr,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Bh.bind(null, oe, e)), [t.memoizedState, e]
    );
}

function br(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = oe.updateQueue),
        t === null ?
        ((t = { lastEffect: null, stores: null }),
            (oe.updateQueue = t),
            (t.lastEffect = e.next = e)) :
        ((n = t.lastEffect),
            n === null ?
            (t.lastEffect = e.next = e) :
            ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}

function Rf() {
    return be().memoizedState;
}

function Il(e, t, n, r) {
    var l = pt();
    (oe.flags |= e),
    (l.memoizedState = br(1 | t, n, void 0, r === void 0 ? null : r));
}

function xo(e, t, n, r) {
    var l = be();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (me !== null) {
        var i = me.memoizedState;
        if (((o = i.destroy), r !== null && Qu(r, i.deps))) {
            l.memoizedState = br(t, n, o, r);
            return;
        }
    }
    (oe.flags |= e), (l.memoizedState = br(1 | t, n, o, r));
}

function ds(e, t) {
    return Il(8390656, 8, e, t);
}

function Yu(e, t) {
    return xo(2048, 8, e, t);
}

function Lf(e, t) {
    return xo(4, 2, e, t);
}

function Pf(e, t) {
    return xo(4, 4, e, t);
}

function Mf(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function() {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function() {
                t.current = null;
            }
        );
}

function Nf(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), xo(4, 4, Mf.bind(null, t, e), n)
    );
}

function Gu() {}

function Tf(e, t) {
    var n = be();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qu(t, r[1]) ?
        r[0] :
        ((n.memoizedState = [e, t]), e);
}

function Df(e, t) {
    var n = be();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qu(t, r[1]) ?
        r[0] :
        ((e = e()), (n.memoizedState = [e, t]), e);
}

function zf(e, t, n) {
    return gn & 21 ?
        (at(n, t) || ((n = jc()), (oe.lanes |= n), (wn |= n), (e.baseState = !0)),
            t) :
        (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n));
}

function Hh(e, t) {
    var n = Z;
    (Z = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = ai.transition;
    ai.transition = {};
    try {
        e(!1), t();
    } finally {
        (Z = n), (ai.transition = r);
    }
}

function Of() {
    return be().memoizedState;
}

function Ah(e, t, n) {
    var r = qt(e);
    if (
        ((n = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            jf(e))
    )
        Ff(t, n);
    else if (((n = df(e, t, n, r)), n !== null)) {
        var l = Te();
        ut(n, e, r, l), If(n, t, r);
    }
}

function Bh(e, t, n) {
    var r = qt(e),
        l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (jf(e)) Ff(t, l);
    else {
        var o = e.alternate;
        if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = t.lastRenderedReducer), o !== null)
        )
            try {
                var i = t.lastRenderedState,
                    u = o(i, n);
                if (((l.hasEagerState = !0), (l.eagerState = u), at(u, i))) {
                    var a = t.interleaved;
                    a === null ?
                        ((l.next = l), Hu(t)) :
                        ((l.next = a.next), (a.next = l)),
                        (t.interleaved = l);
                    return;
                }
            } catch {} finally {}
            (n = df(e, t, l, r)),
            n !== null && ((l = Te()), ut(n, e, r, l), If(n, t, r));
    }
}

function jf(e) {
    var t = e.alternate;
    return e === oe || (t !== null && t === oe);
}

function Ff(e, t) {
    zr = oo = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}

function If(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ru(e, n);
    }
}
var io = {
        readContext: qe,
        useCallback: _e,
        useContext: _e,
        useEffect: _e,
        useImperativeHandle: _e,
        useInsertionEffect: _e,
        useLayoutEffect: _e,
        useMemo: _e,
        useReducer: _e,
        useRef: _e,
        useState: _e,
        useDebugValue: _e,
        useDeferredValue: _e,
        useTransition: _e,
        useMutableSource: _e,
        useSyncExternalStore: _e,
        useId: _e,
        unstable_isNewReconciler: !1,
    },
    $h = {
        readContext: qe,
        useCallback: function(e, t) {
            return (pt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: qe,
        useEffect: ds,
        useImperativeHandle: function(e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Il(4194308, 4, Mf.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function(e, t) {
            return Il(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return Il(4, 2, e, t);
        },
        useMemo: function(e, t) {
            var n = pt();
            return (
                (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
            );
        },
        useReducer: function(e, t, n) {
            var r = pt();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Ah.bind(null, oe, e)), [r.memoizedState, e]
            );
        },
        useRef: function(e) {
            var t = pt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: fs,
        useDebugValue: Gu,
        useDeferredValue: function(e) {
            return (pt().memoizedState = e);
        },
        useTransition: function() {
            var e = fs(!1),
                t = e[0];
            return (e = Hh.bind(null, e[1])), (pt().memoizedState = e), [t, e];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = oe,
                l = pt();
            if (ne) {
                if (n === void 0) throw Error(_(407));
                n = n();
            } else {
                if (((n = t()), Se === null)) throw Error(_(349));
                gn & 30 || Ef(r, t, n);
            }
            l.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
                (l.queue = o),
                ds(xf.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                br(9, Cf.bind(null, r, o, n, t), void 0, null),
                n
            );
        },
        useId: function() {
            var e = pt(),
                t = Se.identifierPrefix;
            if (ne) {
                var n = kt,
                    r = xt;
                (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
                (t = ":" + t + "R" + n),
                (n = Jr++),
                0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else(n = Vh++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Wh = {
        readContext: qe,
        useCallback: Tf,
        useContext: qe,
        useEffect: Yu,
        useImperativeHandle: Nf,
        useInsertionEffect: Lf,
        useLayoutEffect: Pf,
        useMemo: Df,
        useReducer: si,
        useRef: Rf,
        useState: function() {
            return si(qr);
        },
        useDebugValue: Gu,
        useDeferredValue: function(e) {
            var t = be();
            return zf(t, me.memoizedState, e);
        },
        useTransition: function() {
            var e = si(qr)[0],
                t = be().memoizedState;
            return [e, t];
        },
        useMutableSource: wf,
        useSyncExternalStore: Sf,
        useId: Of,
        unstable_isNewReconciler: !1,
    },
    Qh = {
        readContext: qe,
        useCallback: Tf,
        useContext: qe,
        useEffect: Yu,
        useImperativeHandle: Nf,
        useInsertionEffect: Lf,
        useLayoutEffect: Pf,
        useMemo: Df,
        useReducer: ci,
        useRef: Rf,
        useState: function() {
            return ci(qr);
        },
        useDebugValue: Gu,
        useDeferredValue: function(e) {
            var t = be();
            return me === null ? (t.memoizedState = e) : zf(t, me.memoizedState, e);
        },
        useTransition: function() {
            var e = ci(qr)[0],
                t = be().memoizedState;
            return [e, t];
        },
        useMutableSource: wf,
        useSyncExternalStore: Sf,
        useId: Of,
        unstable_isNewReconciler: !1,
    };

function nr(e, t) {
    try {
        var n = "",
            r = t;
        do(n += wp(r)), (r = r.return);
        while (r);
        var l = n;
    } catch (o) {
        l =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
}

function fi(e, t, n) {
    return { value: e, source: null, stack: n ? ? null, digest: t ? ? null };
}

function Xi(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function() {
            throw n;
        });
    }
}
var Zh = typeof WeakMap == "function" ? WeakMap : Map;

function Uf(e, t, n) {
    (n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function() {
            ao || ((ao = !0), (iu = r)), Xi(e, t);
        }),
        n
    );
}

function Vf(e, t, n) {
    (n = _t(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        (n.payload = function() {
            return r(l);
        }),
        (n.callback = function() {
            Xi(e, t);
        });
    }
    var o = e.stateNode;
    return (
        o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function() {
            Xi(e, t),
                typeof r != "function" &&
                (Jt === null ? (Jt = new Set([this])) : Jt.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : "",
            });
        }),
        n
    );
}

function ps(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Zh();
        var l = new Set();
        r.set(t, l);
    } else(l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = i0.bind(null, e, t, n)), t.then(e, e));
}

function hs(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
                t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}

function ms(e, t, n, r, l) {
    return e.mode & 1 ?
        ((e.flags |= 65536), (e.lanes = l), e) :
        (e === t ?
            (e.flags |= 65536) :
            ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                (n.alternate === null ?
                    (n.tag = 17) :
                    ((t = _t(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
                (n.lanes |= 1)),
            e);
}
var Kh = Tt.ReactCurrentOwner,
    je = !1;

function Ne(e, t, n, r) {
    t.child = e === null ? yf(t, null, n, r) : er(t, e.child, n, r);
}

function vs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
        Yn(t, l),
        (r = Zu(e, t, n, r, o, l)),
        (n = Ku()),
        e !== null && !je ?
        ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~l),
            Nt(e, t, l)) :
        (ne && n && Ou(t), (t.flags |= 1), Ne(e, t, r, l), t.child)
    );
}

function ys(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" &&
            !ra(o) &&
            o.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0 ?
            ((t.tag = 15), (t.type = o), Hf(e, t, o, r, l)) :
            ((e = Al(n.type, null, r, t, t.mode, l)),
                (e.ref = t.ref),
                (e.return = t),
                (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
        var i = o.memoizedProps;
        if (
            ((n = n.compare), (n = n !== null ? n : Qr), n(i, r) && e.ref === t.ref)
        )
            return Nt(e, t, l);
    }
    return (
        (t.flags |= 1),
        (e = bt(o, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}

function Hf(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Qr(o, r) && e.ref === t.ref)
            if (((je = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
                e.flags & 131072 && (je = !0);
            else return (t.lanes = e.lanes), Nt(e, t, l);
    }
    return Ji(e, t, n, r, l);
}

function Af(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
            q(An, Ae),
            (Ae |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    q(An, Ae),
                    (Ae |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
            (r = o !== null ? o.baseLanes : n),
            q(An, Ae),
                (Ae |= r);
        }
    else
        o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        q(An, Ae),
        (Ae |= r);
    return Ne(e, t, l, n), t.child;
}

function Bf(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}

function Ji(e, t, n, r, l) {
    var o = Ie(n) ? vn : Pe.current;
    return (
        (o = qn(t, o)),
        Yn(t, l),
        (n = Zu(e, t, n, r, o, l)),
        (r = Ku()),
        e !== null && !je ?
        ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~l),
            Nt(e, t, l)) :
        (ne && r && Ou(t), (t.flags |= 1), Ne(e, t, n, l), t.child)
    );
}

function gs(e, t, n, r, l) {
    if (Ie(n)) {
        var o = !0;
        ql(t);
    } else o = !1;
    if ((Yn(t, l), t.stateNode === null))
        Ul(e, t), mf(t, n, r), Gi(t, n, r, l), (r = !0);
    else if (e === null) {
        var i = t.stateNode,
            u = t.memoizedProps;
        i.props = u;
        var a = i.context,
            s = n.contextType;
        typeof s == "object" && s !== null ?
            (s = qe(s)) :
            ((s = Ie(n) ? vn : Pe.current), (s = qn(t, s)));
        var p = n.getDerivedStateFromProps,
            m =
            typeof p == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function";
        m ||
            (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
            ((u !== r || a !== s) && ss(t, i, r, s)),
            (At = !1);
        var v = t.memoizedState;
        (i.state = v),
        ro(t, r, i, l),
            (a = t.memoizedState),
            u !== r || v !== a || Fe.current || At ?
            (typeof p == "function" && (Yi(t, n, p, r), (a = t.memoizedState)),
                (u = At || as(t, n, u, r, v, a, s)) ?
                (m ||
                    (typeof i.UNSAFE_componentWillMount != "function" &&
                        typeof i.componentWillMount != "function") ||
                    (typeof i.componentWillMount == "function" &&
                        i.componentWillMount(),
                        typeof i.UNSAFE_componentWillMount == "function" &&
                        i.UNSAFE_componentWillMount()),
                    typeof i.componentDidMount == "function" && (t.flags |= 4194308)) :
                (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                    (t.memoizedProps = r),
                    (t.memoizedState = a)),
                (i.props = r),
                (i.state = a),
                (i.context = s),
                (r = u)) :
            (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                (r = !1));
    } else {
        (i = t.stateNode),
        pf(e, t),
            (u = t.memoizedProps),
            (s = t.type === t.elementType ? u : nt(t.type, u)),
            (i.props = s),
            (m = t.pendingProps),
            (v = i.context),
            (a = n.contextType),
            typeof a == "object" && a !== null ?
            (a = qe(a)) :
            ((a = Ie(n) ? vn : Pe.current), (a = qn(t, a)));
        var E = n.getDerivedStateFromProps;
        (p =
            typeof E == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
        ((u !== m || v !== a) && ss(t, i, r, a)),
        (At = !1),
        (v = t.memoizedState),
        (i.state = v),
        ro(t, r, i, l);
        var w = t.memoizedState;
        u !== m || v !== w || Fe.current || At ?
            (typeof E == "function" && (Yi(t, n, E, r), (w = t.memoizedState)),
                (s = At || as(t, n, s, r, v, w, a) || !1) ?
                (p ||
                    (typeof i.UNSAFE_componentWillUpdate != "function" &&
                        typeof i.componentWillUpdate != "function") ||
                    (typeof i.componentWillUpdate == "function" &&
                        i.componentWillUpdate(r, w, a),
                        typeof i.UNSAFE_componentWillUpdate == "function" &&
                        i.UNSAFE_componentWillUpdate(r, w, a)),
                    typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) :
                (typeof i.componentDidUpdate != "function" ||
                    (u === e.memoizedProps && v === e.memoizedState) ||
                    (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate != "function" ||
                    (u === e.memoizedProps && v === e.memoizedState) ||
                    (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = w)),
                (i.props = r),
                (i.state = w),
                (i.context = a),
                (r = s)) :
            (typeof i.componentDidUpdate != "function" ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
                typeof i.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
                (r = !1));
    }
    return qi(e, t, n, r, o, l);
}

function qi(e, t, n, r, l, o) {
    Bf(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && rs(t, n, !1), Nt(e, t, o);
    (r = t.stateNode), (Kh.current = t);
    var u =
        i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
        (t.flags |= 1),
        e !== null && i ?
        ((t.child = er(t, e.child, null, o)), (t.child = er(t, null, u, o))) :
        Ne(e, t, u, o),
        (t.memoizedState = r.state),
        l && rs(t, n, !0),
        t.child
    );
}

function $f(e) {
    var t = e.stateNode;
    t.pendingContext ?
        ns(e, t.pendingContext, t.pendingContext !== t.context) :
        t.context && ns(e, t.context, !1),
        Bu(e, t.containerInfo);
}

function ws(e, t, n, r, l) {
    return bn(), Fu(l), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var bi = { dehydrated: null, treeContext: null, retryLane: 0 };

function eu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}

function Wf(e, t, n) {
    var r = t.pendingProps,
        l = le.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        u;
    if (
        ((u = i) ||
            (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
            u ?
            ((o = !0), (t.flags &= -129)) :
            (e === null || e.memoizedState !== null) && (l |= 1),
            q(le, l & 1),
            e === null)
    )
        return (
            Zi(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null) ?
            (t.mode & 1 ?
                e.data === "$!" ?
                (t.lanes = 8) :
                (t.lanes = 1073741824) :
                (t.lanes = 1),
                null) :
            ((i = r.children),
                (e = r.fallback),
                o ?
                ((r = t.mode),
                    (o = t.child),
                    (i = { mode: "hidden", children: i }), !(r & 1) && o !== null ?
                    ((o.childLanes = 0), (o.pendingProps = i)) :
                    (o = Ro(i, r, 0, null)),
                    (e = mn(e, r, n, null)),
                    (o.return = t),
                    (e.return = t),
                    (o.sibling = e),
                    (t.child = o),
                    (t.child.memoizedState = eu(n)),
                    (t.memoizedState = bi),
                    e) :
                Xu(t, i))
        );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
        return Yh(e, t, i, r, u, l, n);
    if (o) {
        (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
        var a = { mode: "hidden", children: r.children };
        return (!(i & 1) && t.child !== l ?
            ((r = t.child),
                (r.childLanes = 0),
                (r.pendingProps = a),
                (t.deletions = null)) :
            ((r = bt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
            u !== null ? (o = bt(u, o)) : ((o = mn(o, i, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (i = e.child.memoizedState),
            (i =
                i === null ?
                eu(n) :
                {
                    baseLanes: i.baseLanes | n,
                    cachePool: null,
                    transitions: i.transitions,
                }),
            (o.memoizedState = i),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = bi),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = bt(o, { mode: "visible", children: r.children })), !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
        ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}

function Xu(e, t) {
    return (
        (t = Ro({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}

function _l(e, t, n, r) {
    return (
        r !== null && Fu(r),
        er(t, e.child, null, n),
        (e = Xu(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}

function Yh(e, t, n, r, l, o, i) {
    if (n)
        return t.flags & 256 ?
            ((t.flags &= -257), (r = fi(Error(_(422)))), _l(e, t, i, r)) :
            t.memoizedState !== null ?
            ((t.child = e.child), (t.flags |= 128), null) :
            ((o = r.fallback),
                (l = t.mode),
                (r = Ro({ mode: "visible", children: r.children }, l, 0, null)),
                (o = mn(o, l, i, null)),
                (o.flags |= 2),
                (r.return = t),
                (o.return = t),
                (r.sibling = o),
                (t.child = r),
                t.mode & 1 && er(t, e.child, null, i),
                (t.child.memoizedState = eu(i)),
                (t.memoizedState = bi),
                o);
    if (!(t.mode & 1)) return _l(e, t, i, null);
    if (l.data === "$!") {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
        return (r = u), (o = Error(_(419))), (r = fi(o, r, void 0)), _l(e, t, i, r);
    }
    if (((u = (i & e.childLanes) !== 0), je || u)) {
        if (((r = Se), r !== null)) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0;
            }
            (l = l & (r.suspendedLanes | i) ? 0 : l),
            l !== 0 &&
                l !== o.retryLane &&
                ((o.retryLane = l), Mt(e, l), ut(r, e, l, -1));
        }
        return na(), (r = fi(Error(_(421)))), _l(e, t, i, r);
    }
    return l.data === "$?" ?
        ((t.flags |= 128),
            (t.child = e.child),
            (t = u0.bind(null, e)),
            (l._reactRetry = t),
            null) :
        ((e = o.treeContext),
            (Be = Gt(l.nextSibling)),
            ($e = t),
            (ne = !0),
            (ot = null),
            e !== null &&
            ((Ye[Ge++] = xt),
                (Ye[Ge++] = kt),
                (Ye[Ge++] = yn),
                (xt = e.id),
                (kt = e.overflow),
                (yn = t)),
            (t = Xu(t, r.children)),
            (t.flags |= 4096),
            t);
}

function Ss(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ki(e.return, t, n);
}

function di(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ?
        (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: l,
        }) :
        ((o.isBackwards = t),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = l));
}

function Qf(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if ((Ne(e, t, r.children, n), (r = le.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && Ss(e, n, t);
                else if (e.tag === 19) Ss(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((q(le, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (l) {
            case "forwards":
                for (n = t.child, l = null; n !== null;)
                    (e = n.alternate),
                    e !== null && lo(e) === null && (l = n),
                    (n = n.sibling);
                (n = l),
                n === null ?
                    ((l = t.child), (t.child = null)) :
                    ((l = n.sibling), (n.sibling = null)),
                    di(t, !1, l, n, o);
                break;
            case "backwards":
                for (n = null, l = t.child, t.child = null; l !== null;) {
                    if (((e = l.alternate), e !== null && lo(e) === null)) {
                        t.child = l;
                        break;
                    }
                    (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                }
                di(t, !0, n, null, o);
                break;
            case "together":
                di(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}

function Ul(e, t) {
    !(t.mode & 1) &&
    e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}

function Nt(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
            (wn |= t.lanes), !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(_(153));
    if (t.child !== null) {
        for (
            e = t.child, n = bt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;

        )
            (e = e.sibling), (n = n.sibling = bt(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}

function Gh(e, t, n) {
    switch (t.tag) {
        case 3:
            $f(t), bn();
            break;
        case 5:
            gf(t);
            break;
        case 1:
            Ie(t.type) && ql(t);
            break;
        case 4:
            Bu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            q(to, r._currentValue), (r._currentValue = l);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null ?
                    (q(le, le.current & 1), (t.flags |= 128), null) :
                    n & t.child.childLanes ?
                    Wf(e, t, n) :
                    (q(le, le.current & 1),
                        (e = Nt(e, t, n)),
                        e !== null ? e.sibling : null);
            q(le, le.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Qf(e, t, n);
                t.flags |= 128;
            }
            if (
                ((l = t.memoizedState),
                    l !== null &&
                    ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
                    q(le, le.current),
                    r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Af(e, t, n);
    }
    return Nt(e, t, n);
}
var Zf, tu, Kf, Yf;
Zf = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
tu = function() {};
Kf = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        (e = t.stateNode), dn(vt.current);
        var o = null;
        switch (n) {
            case "input":
                (l = xi(e, l)), (r = xi(e, r)), (o = []);
                break;
            case "select":
                (l = ie({}, l, { value: void 0 })),
                (r = ie({}, r, { value: void 0 })),
                (o = []);
                break;
            case "textarea":
                (l = Ri(e, l)), (r = Ri(e, r)), (o = []);
                break;
            default:
                typeof l.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = Xl);
        }
        Pi(n, r);
        var i;
        n = null;
        for (s in l)
            if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
                if (s === "style") {
                    var u = l[s];
                    for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                } else
                    s !== "dangerouslySetInnerHTML" &&
                    s !== "children" &&
                    s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Ur.hasOwnProperty(s) ?
                        o || (o = []) :
                        (o = o || []).push(s, null));
        for (s in r) {
            var a = r[s];
            if (
                ((u = l != null ? l[s] : void 0),
                    r.hasOwnProperty(s) && a !== u && (a != null || u != null))
            )
                if (s === "style")
                    if (u) {
                        for (i in u)
                            !u.hasOwnProperty(i) ||
                            (a && a.hasOwnProperty(i)) ||
                            (n || (n = {}), (n[i] = ""));
                        for (i in a)
                            a.hasOwnProperty(i) &&
                            u[i] !== a[i] &&
                            (n || (n = {}), (n[i] = a[i]));
                    } else n || (o || (o = []), o.push(s, n)), (n = a);
            else
                s === "dangerouslySetInnerHTML" ?
                ((a = a ? a.__html : void 0),
                    (u = u ? u.__html : void 0),
                    a != null && u !== a && (o = o || []).push(s, a)) :
                s === "children" ?
                (typeof a != "string" && typeof a != "number") ||
                (o = o || []).push(s, "" + a) :
                s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                (Ur.hasOwnProperty(s) ?
                    (a != null && s === "onScroll" && b("scroll", e),
                        o || u === a || (o = [])) :
                    (o = o || []).push(s, a));
        }
        n && (o = o || []).push("style", n);
        var s = o;
        (t.updateQueue = s) && (t.flags |= 4);
    }
};
Yf = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
};

function gr(e, t) {
    if (!ne)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;)
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;)
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null ?
                    t || e.tail === null ?
                    (e.tail = null) :
                    (e.tail.sibling = null) :
                    (r.sibling = null);
        }
}

function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;)
            (n |= l.lanes | l.childLanes),
            (r |= l.subtreeFlags & 14680064),
            (r |= l.flags & 14680064),
            (l.return = e),
            (l = l.sibling);
    else
        for (l = e.child; l !== null;)
            (n |= l.lanes | l.childLanes),
            (r |= l.subtreeFlags),
            (r |= l.flags),
            (l.return = e),
            (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}

function Xh(e, t, n) {
    var r = t.pendingProps;
    switch ((ju(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Re(t), null;
        case 1:
            return Ie(t.type) && Jl(), Re(t), null;
        case 3:
            return (
                (r = t.stateNode),
                tr(),
                ee(Fe),
                ee(Pe),
                Wu(),
                r.pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                (xl(t) ?
                    (t.flags |= 4) :
                    e === null ||
                    (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                    ((t.flags |= 1024), ot !== null && (su(ot), (ot = null)))),
                tu(e, t),
                Re(t),
                null
            );
        case 5:
            $u(t);
            var l = dn(Xr.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Kf(e, t, n, r, l),
                e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(_(166));
                    return Re(t), null;
                }
                if (((e = dn(vt.current)), xl(t))) {
                    (r = t.stateNode), (n = t.type);
                    var o = t.memoizedProps;
                    switch (((r[ht] = t), (r[Yr] = o), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            b("cancel", r), b("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            b("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Lr.length; l++) b(Lr[l], r);
                            break;
                        case "source":
                            b("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            b("error", r), b("load", r);
                            break;
                        case "details":
                            b("toggle", r);
                            break;
                        case "input":
                            Ma(r, o), b("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!o.multiple }),
                            b("invalid", r);
                            break;
                        case "textarea":
                            Ta(r, o), b("invalid", r);
                    }
                    Pi(n, o), (l = null);
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var u = o[i];
                            i === "children" ?
                                typeof u == "string" ?
                                r.textContent !== u &&
                                (o.suppressHydrationWarning !== !0 &&
                                    Cl(r.textContent, u, e),
                                    (l = ["children", u])) :
                                typeof u == "number" &&
                                r.textContent !== "" + u &&
                                (o.suppressHydrationWarning !== !0 &&
                                    Cl(r.textContent, u, e),
                                    (l = ["children", "" + u])) :
                                Ur.hasOwnProperty(i) &&
                                u != null &&
                                i === "onScroll" &&
                                b("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            hl(r), Na(r, o, !0);
                            break;
                        case "textarea":
                            hl(r), Da(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Xl);
                    }
                    (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (i = l.nodeType === 9 ? l : l.ownerDocument),
                    e === "http://www.w3.org/1999/xhtml" && (e = Sc(n)),
                        e === "http://www.w3.org/1999/xhtml" ?
                        n === "script" ?
                        ((e = i.createElement("div")),
                            (e.innerHTML = "<script></script>"),
                            (e = e.removeChild(e.firstChild))) :
                        typeof r.is == "string" ?
                        (e = i.createElement(n, { is: r.is })) :
                        ((e = i.createElement(n)),
                            n === "select" &&
                            ((i = e),
                                r.multiple ?
                                (i.multiple = !0) :
                                r.size && (i.size = r.size))) :
                        (e = i.createElementNS(e, n)),
                        (e[ht] = t),
                        (e[Yr] = r),
                        Zf(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((i = Mi(n, r)), n)) {
                            case "dialog":
                                b("cancel", e), b("close", e), (l = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                b("load", e), (l = r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Lr.length; l++) b(Lr[l], e);
                                l = r;
                                break;
                            case "source":
                                b("error", e), (l = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                b("error", e), b("load", e), (l = r);
                                break;
                            case "details":
                                b("toggle", e), (l = r);
                                break;
                            case "input":
                                Ma(e, r), (l = xi(e, r)), b("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                (l = ie({}, r, { value: void 0 })),
                                b("invalid", e);
                                break;
                            case "textarea":
                                Ta(e, r), (l = Ri(e, r)), b("invalid", e);
                                break;
                            default:
                                l = r;
                        }
                        Pi(n, l),
                        (u = l);
                        for (o in u)
                            if (u.hasOwnProperty(o)) {
                                var a = u[o];
                                o === "style" ?
                                    xc(e, a) :
                                    o === "dangerouslySetInnerHTML" ?
                                    ((a = a ? a.__html : void 0), a != null && Ec(e, a)) :
                                    o === "children" ?
                                    typeof a == "string" ?
                                    (n !== "textarea" || a !== "") && Vr(e, a) :
                                    typeof a == "number" && Vr(e, "" + a) :
                                    o !== "suppressContentEditableWarning" &&
                                    o !== "suppressHydrationWarning" &&
                                    o !== "autoFocus" &&
                                    (Ur.hasOwnProperty(o) ?
                                        a != null && o === "onScroll" && b("scroll", e) :
                                        a != null && Su(e, o, a, i));
                            }
                        switch (n) {
                            case "input":
                                hl(e), Na(e, r, !1);
                                break;
                            case "textarea":
                                hl(e), Da(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + en(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                (o = r.value),
                                o != null ?
                                    Wn(e, !!r.multiple, o, !1) :
                                    r.defaultValue != null &&
                                    Wn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Xl);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Re(t), null;
        case 6:
            if (e && t.stateNode != null) Yf(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
                if (((n = dn(Xr.current)), dn(vt.current), xl(t))) {
                    if (
                        ((r = t.stateNode),
                            (n = t.memoizedProps),
                            (r[ht] = t),
                            (o = r.nodeValue !== n) && ((e = $e), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Cl(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 &&
                                    Cl(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    o && (t.flags |= 4);
                } else
                    (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
                    (r[ht] = t),
                    (t.stateNode = r);
            }
            return Re(t), null;
        case 13:
            if (
                (ee(le),
                    (r = t.memoizedState),
                    e === null ||
                    (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
                if (ne && Be !== null && t.mode & 1 && !(t.flags & 128))
                    ff(), bn(), (t.flags |= 98560), (o = !1);
                else if (((o = xl(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(_(318));
                        if (
                            ((o = t.memoizedState),
                                (o = o !== null ? o.dehydrated : null), !o)
                        )
                            throw Error(_(317));
                        o[ht] = t;
                    } else
                        bn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    Re(t), (o = !1);
                } else ot !== null && (su(ot), (ot = null)), (o = !0);
                if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128 ?
                ((t.lanes = n), t) :
                ((r = r !== null),
                    r !== (e !== null && e.memoizedState !== null) &&
                    r &&
                    ((t.child.flags |= 8192),
                        t.mode & 1 &&
                        (e === null || le.current & 1 ? ve === 0 && (ve = 3) : na())),
                    t.updateQueue !== null && (t.flags |= 4),
                    Re(t),
                    null);
        case 4:
            return (
                tr(), tu(e, t), e === null && Zr(t.stateNode.containerInfo), Re(t), null
            );
        case 10:
            return Vu(t.type._context), Re(t), null;
        case 17:
            return Ie(t.type) && Jl(), Re(t), null;
        case 19:
            if ((ee(le), (o = t.memoizedState), o === null)) return Re(t), null;
            if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
                if (r) gr(o, !1);
                else {
                    if (ve !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null;) {
                            if (((i = lo(e)), i !== null)) {
                                for (
                                    t.flags |= 128,
                                    gr(o, !1),
                                    r = i.updateQueue,
                                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                                    t.subtreeFlags = 0,
                                    r = n,
                                    n = t.child; n !== null;

                                )
                                    (o = n),
                                    (e = r),
                                    (o.flags &= 14680066),
                                    (i = o.alternate),
                                    i === null ?
                                    ((o.childLanes = 0),
                                        (o.lanes = e),
                                        (o.child = null),
                                        (o.subtreeFlags = 0),
                                        (o.memoizedProps = null),
                                        (o.memoizedState = null),
                                        (o.updateQueue = null),
                                        (o.dependencies = null),
                                        (o.stateNode = null)) :
                                    ((o.childLanes = i.childLanes),
                                        (o.lanes = i.lanes),
                                        (o.child = i.child),
                                        (o.subtreeFlags = 0),
                                        (o.deletions = null),
                                        (o.memoizedProps = i.memoizedProps),
                                        (o.memoizedState = i.memoizedState),
                                        (o.updateQueue = i.updateQueue),
                                        (o.type = i.type),
                                        (e = i.dependencies),
                                        (o.dependencies =
                                            e === null ?
                                            null :
                                            {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext,
                                            })),
                                    (n = n.sibling);
                                return q(le, (le.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null &&
                        ce() > rr &&
                        ((t.flags |= 128), (r = !0), gr(o, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = lo(i)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                                (r = !0),
                                (n = e.updateQueue),
                                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                                gr(o, !0),
                                o.tail === null && o.tailMode === "hidden" && !i.alternate && !ne)
                        )
                            return Re(t), null;
                    } else
                        2 * ce() - o.renderingStartTime > rr &&
                        n !== 1073741824 &&
                        ((t.flags |= 128), (r = !0), gr(o, !1), (t.lanes = 4194304));
                o.isBackwards ?
                    ((i.sibling = t.child), (t.child = i)) :
                    ((n = o.last),
                        n !== null ? (n.sibling = i) : (t.child = i),
                        (o.last = i));
            }
            return o.tail !== null ?
                ((t = o.tail),
                    (o.rendering = t),
                    (o.tail = t.sibling),
                    (o.renderingStartTime = ce()),
                    (t.sibling = null),
                    (n = le.current),
                    q(le, r ? (n & 1) | 2 : n & 1),
                    t) :
                (Re(t), null);
        case 22:
        case 23:
            return (
                ta(),
                (r = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                r && t.mode & 1 ?
                Ae & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) :
                Re(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(_(156, t.tag));
}

function Jh(e, t) {
    switch ((ju(t), t.tag)) {
        case 1:
            return (
                Ie(t.type) && Jl(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                tr(),
                ee(Fe),
                ee(Pe),
                Wu(),
                (e = t.flags),
                e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 5:
            return $u(t), null;
        case 13:
            if (
                (ee(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(_(340));
                bn();
            }
            return (
                (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return ee(le), null;
        case 4:
            return tr(), null;
        case 10:
            return Vu(t.type._context), null;
        case 22:
        case 23:
            return ta(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Rl = !1,
    Le = !1,
    qh = typeof WeakSet == "function" ? WeakSet : Set,
    N = null;

function Hn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                ue(e, t, r);
            }
        else n.current = null;
}

function nu(e, t, n) {
    try {
        n();
    } catch (r) {
        ue(e, t, r);
    }
}
var Es = !1;

function bh(e, t) {
    if (((Vi = Kl), (e = Jc()), zu(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var i = 0,
                        u = -1,
                        a = -1,
                        s = 0,
                        p = 0,
                        m = e,
                        v = null;
                    t: for (;;) {
                        for (
                            var E; m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                            m !== o || (r !== 0 && m.nodeType !== 3) || (a = i + r),
                            m.nodeType === 3 && (i += m.nodeValue.length),
                            (E = m.firstChild) !== null;

                        )
                            (v = m), (m = E);
                        for (;;) {
                            if (m === e) break t;
                            if (
                                (v === n && ++s === l && (u = i),
                                    v === o && ++p === r && (a = i),
                                    (E = m.nextSibling) !== null)
                            )
                                break;
                            (m = v), (v = m.parentNode);
                        }
                        m = E;
                    }
                    n = u === -1 || a === -1 ? null : { start: u, end: a };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (Hi = { focusedElem: e, selectionRange: n }, Kl = !1, N = t; N !== null;)
        if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
            (e.return = t), (N = e);
        else
            for (; N !== null;) {
                t = N;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var S = w.memoizedProps,
                                        P = w.memoizedState,
                                        d = t.stateNode,
                                        c = d.getSnapshotBeforeUpdate(
                                            t.elementType === t.type ? S : nt(t.type, S),
                                            P
                                        );
                                    d.__reactInternalSnapshotBeforeUpdate = c;
                                }
                                break;
                            case 3:
                                var h = t.stateNode.containerInfo;
                                h.nodeType === 1 ?
                                    (h.textContent = "") :
                                    h.nodeType === 9 &&
                                    h.documentElement &&
                                    h.removeChild(h.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(_(163));
                        }
                } catch (f) {
                    ue(t, t.return, f);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (N = e);
                    break;
                }
                N = t.return;
            }
    return (w = Es), (Es = !1), w;
}

function Or(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next);
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                (l.destroy = void 0), o !== void 0 && nu(t, n, o);
            }
            l = l.next;
        } while (l !== r);
    }
}

function ko(e, t) {
    if (
        ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}

function ru(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}

function Gf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Gf(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
        ((t = e.stateNode),
            t !== null &&
            (delete t[ht], delete t[Yr], delete t[$i], delete t[jh], delete t[Fh])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}

function Xf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}

function Cs(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Xf(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}

function lu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
        t ?
        n.nodeType === 8 ?
        n.parentNode.insertBefore(e, t) :
        n.insertBefore(e, t) :
        (n.nodeType === 8 ?
            ((t = n.parentNode), t.insertBefore(e, n)) :
            ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Xl));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (lu(e, t, n), e = e.sibling; e !== null;) lu(e, t, n), (e = e.sibling);
}

function ou(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (ou(e, t, n), e = e.sibling; e !== null;) ou(e, t, n), (e = e.sibling);
}
var Ce = null,
    rt = !1;

function It(e, t, n) {
    for (n = n.child; n !== null;) Jf(e, t, n), (n = n.sibling);
}

function Jf(e, t, n) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
        try {
            mt.onCommitFiberUnmount(vo, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Le || Hn(n, t);
        case 6:
            var r = Ce,
                l = rt;
            (Ce = null),
            It(e, t, n),
                (Ce = r),
                (rt = l),
                Ce !== null &&
                (rt ?
                    ((e = Ce),
                        (n = n.stateNode),
                        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) :
                    Ce.removeChild(n.stateNode));
            break;
        case 18:
            Ce !== null &&
                (rt ?
                    ((e = Ce),
                        (n = n.stateNode),
                        e.nodeType === 8 ?
                        oi(e.parentNode, n) :
                        e.nodeType === 1 && oi(e, n),
                        $r(e)) :
                    oi(Ce, n.stateNode));
            break;
        case 4:
            (r = Ce),
            (l = rt),
            (Ce = n.stateNode.containerInfo),
            (rt = !0),
            It(e, t, n),
                (Ce = r),
                (rt = l);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Le &&
                ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
            ) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    (o = o.tag),
                    i !== void 0 && (o & 2 || o & 4) && nu(n, t, i),
                        (l = l.next);
                } while (l !== r);
            }
            It(e, t, n);
            break;
        case 1:
            if (!Le &&
                (Hn(n, t),
                    (r = n.stateNode),
                    typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (u) {
                    ue(n, t, u);
                }
            It(e, t, n);
            break;
        case 21:
            It(e, t, n);
            break;
        case 22:
            n.mode & 1 ?
                ((Le = (r = Le) || n.memoizedState !== null), It(e, t, n), (Le = r)) :
                It(e, t, n);
            break;
        default:
            It(e, t, n);
    }
}

function xs(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new qh()),
            t.forEach(function(r) {
                var l = a0.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l));
            });
    }
}

function tt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    u = i;
                e: for (; u !== null;) {
                    switch (u.tag) {
                        case 5:
                            (Ce = u.stateNode), (rt = !1);
                            break e;
                        case 3:
                            (Ce = u.stateNode.containerInfo), (rt = !0);
                            break e;
                        case 4:
                            (Ce = u.stateNode.containerInfo), (rt = !0);
                            break e;
                    }
                    u = u.return;
                }
                if (Ce === null) throw Error(_(160));
                Jf(o, i, l), (Ce = null), (rt = !1);
                var a = l.alternate;
                a !== null && (a.return = null), (l.return = null);
            } catch (s) {
                ue(l, t, s);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) qf(t, e), (t = t.sibling);
}

function qf(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((tt(t, e), dt(e), r & 4)) {
                try {
                    Or(3, e, e.return), ko(3, e);
                } catch (S) {
                    ue(e, e.return, S);
                }
                try {
                    Or(5, e, e.return);
                } catch (S) {
                    ue(e, e.return, S);
                }
            }
            break;
        case 1:
            tt(t, e), dt(e), r & 512 && n !== null && Hn(n, n.return);
            break;
        case 5:
            if (
                (tt(t, e),
                    dt(e),
                    r & 512 && n !== null && Hn(n, n.return),
                    e.flags & 32)
            ) {
                var l = e.stateNode;
                try {
                    Vr(l, "");
                } catch (S) {
                    ue(e, e.return, S);
                }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    u = e.type,
                    a = e.updateQueue;
                if (((e.updateQueue = null), a !== null))
                    try {
                        u === "input" && o.type === "radio" && o.name != null && gc(l, o),
                            Mi(u, i);
                        var s = Mi(u, o);
                        for (i = 0; i < a.length; i += 2) {
                            var p = a[i],
                                m = a[i + 1];
                            p === "style" ?
                                xc(l, m) :
                                p === "dangerouslySetInnerHTML" ?
                                Ec(l, m) :
                                p === "children" ?
                                Vr(l, m) :
                                Su(l, p, m, s);
                        }
                        switch (u) {
                            case "input":
                                ki(l, o);
                                break;
                            case "textarea":
                                wc(l, o);
                                break;
                            case "select":
                                var v = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!o.multiple;
                                var E = o.value;
                                E != null ?
                                    Wn(l, !!o.multiple, E, !1) :
                                    v !== !!o.multiple &&
                                    (o.defaultValue != null ?
                                        Wn(l, !!o.multiple, o.defaultValue, !0) :
                                        Wn(l, !!o.multiple, o.multiple ? [] : "", !1));
                        }
                        l[Yr] = o;
                    } catch (S) {
                        ue(e, e.return, S);
                    }
            }
            break;
        case 6:
            if ((tt(t, e), dt(e), r & 4)) {
                if (e.stateNode === null) throw Error(_(162));
                (l = e.stateNode), (o = e.memoizedProps);
                try {
                    l.nodeValue = o;
                } catch (S) {
                    ue(e, e.return, S);
                }
            }
            break;
        case 3:
            if (
                (tt(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    $r(t.containerInfo);
                } catch (S) {
                    ue(e, e.return, S);
                }
            break;
        case 4:
            tt(t, e), dt(e);
            break;
        case 13:
            tt(t, e),
                dt(e),
                (l = e.child),
                l.flags & 8192 &&
                ((o = l.memoizedState !== null),
                    (l.stateNode.isHidden = o), !o ||
                    (l.alternate !== null && l.alternate.memoizedState !== null) ||
                    (bu = ce())),
                r & 4 && xs(e);
            break;
        case 22:
            if (
                ((p = n !== null && n.memoizedState !== null),
                    e.mode & 1 ? ((Le = (s = Le) || p), tt(t, e), (Le = s)) : tt(t, e),
                    dt(e),
                    r & 8192)
            ) {
                if (
                    ((s = e.memoizedState !== null),
                        (e.stateNode.isHidden = s) && !p && e.mode & 1)
                )
                    for (N = e, p = e.child; p !== null;) {
                        for (m = N = p; N !== null;) {
                            switch (((v = N), (E = v.child), v.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Or(4, v, v.return);
                                    break;
                                case 1:
                                    Hn(v, v.return);
                                    var w = v.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        (r = v), (n = v.return);
                                        try {
                                            (t = r),
                                            (w.props = t.memoizedProps),
                                            (w.state = t.memoizedState),
                                            w.componentWillUnmount();
                                        } catch (S) {
                                            ue(r, n, S);
                                        }
                                    }
                                    break;
                                case 5:
                                    Hn(v, v.return);
                                    break;
                                case 22:
                                    if (v.memoizedState !== null) {
                                        _s(m);
                                        continue;
                                    }
                            }
                            E !== null ? ((E.return = v), (N = E)) : _s(m);
                        }
                        p = p.sibling;
                    }
                e: for (p = null, m = e;;) {
                    if (m.tag === 5) {
                        if (p === null) {
                            p = m;
                            try {
                                (l = m.stateNode),
                                s
                                    ?
                                    ((o = l.style),
                                        typeof o.setProperty == "function" ?
                                        o.setProperty("display", "none", "important") :
                                        (o.display = "none")) :
                                    ((u = m.stateNode),
                                        (a = m.memoizedProps.style),
                                        (i =
                                            a != null && a.hasOwnProperty("display") ?
                                            a.display :
                                            null),
                                        (u.style.display = Cc("display", i)));
                            } catch (S) {
                                ue(e, e.return, S);
                            }
                        }
                    } else if (m.tag === 6) {
                        if (p === null)
                            try {
                                m.stateNode.nodeValue = s ? "" : m.memoizedProps;
                            } catch (S) {
                                ue(e, e.return, S);
                            }
                    } else if (
                        ((m.tag !== 22 && m.tag !== 23) ||
                            m.memoizedState === null ||
                            m === e) &&
                        m.child !== null
                    ) {
                        (m.child.return = m), (m = m.child);
                        continue;
                    }
                    if (m === e) break e;
                    for (; m.sibling === null;) {
                        if (m.return === null || m.return === e) break e;
                        p === m && (p = null), (m = m.return);
                    }
                    p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
                }
            }
            break;
        case 19:
            tt(t, e), dt(e), r & 4 && xs(e);
            break;
        case 21:
            break;
        default:
            tt(t, e), dt(e);
    }
}

function dt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Xf(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(_(160));
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Vr(l, ""), (r.flags &= -33));
                    var o = Cs(e);
                    ou(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        u = Cs(e);
                    lu(e, u, i);
                    break;
                default:
                    throw Error(_(161));
            }
        }
        catch (a) {
            ue(e, e.return, a);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}

function e0(e, t, n) {
    (N = e), bf(e);
}

function bf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null;) {
        var l = N,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Rl;
            if (!i) {
                var u = l.alternate,
                    a = (u !== null && u.memoizedState !== null) || Le;
                u = Rl;
                var s = Le;
                if (((Rl = i), (Le = a) && !s))
                    for (N = l; N !== null;)
                        (i = N),
                        (a = i.child),
                        i.tag === 22 && i.memoizedState !== null ?
                        Rs(l) :
                        a !== null ?
                        ((a.return = i), (N = a)) :
                        Rs(l);
                for (; o !== null;)(N = o), bf(o), (o = o.sibling);
                (N = l), (Rl = u), (Le = s);
            }
            ks(e);
        } else
            l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (N = o)) : ks(e);
    }
}

function ks(e) {
    for (; N !== null;) {
        var t = N;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Le || ko(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Le)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l =
                                        t.elementType === t.type ?
                                        n.memoizedProps :
                                        nt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        l,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var o = t.updateQueue;
                            o !== null && us(t, o, r);
                            break;
                        case 3:
                            var i = t.updateQueue;
                            if (i !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                us(t, i, n);
                            }
                            break;
                        case 5:
                            var u = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = u;
                                var a = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        a.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        a.src && (n.src = a.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var s = t.alternate;
                                if (s !== null) {
                                    var p = s.memoizedState;
                                    if (p !== null) {
                                        var m = p.dehydrated;
                                        m !== null && $r(m);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(_(163));
                    }
                Le || (t.flags & 512 && ru(t));
            } catch (v) {
                ue(t, t.return, v);
            }
        }
        if (t === e) {
            N = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (N = n);
            break;
        }
        N = t.return;
    }
}

function _s(e) {
    for (; N !== null;) {
        var t = N;
        if (t === e) {
            N = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (N = n);
            break;
        }
        N = t.return;
    }
}

function Rs(e) {
    for (; N !== null;) {
        var t = N;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ko(4, t);
                    } catch (a) {
                        ue(t, n, a);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount();
                        } catch (a) {
                            ue(t, l, a);
                        }
                    }
                    var o = t.return;
                    try {
                        ru(t);
                    } catch (a) {
                        ue(t, o, a);
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        ru(t);
                    } catch (a) {
                        ue(t, i, a);
                    }
            }
        } catch (a) {
            ue(t, t.return, a);
        }
        if (t === e) {
            N = null;
            break;
        }
        var u = t.sibling;
        if (u !== null) {
            (u.return = t.return), (N = u);
            break;
        }
        N = t.return;
    }
}
var t0 = Math.ceil,
    uo = Tt.ReactCurrentDispatcher,
    Ju = Tt.ReactCurrentOwner,
    Je = Tt.ReactCurrentBatchConfig,
    Q = 0,
    Se = null,
    pe = null,
    xe = 0,
    Ae = 0,
    An = rn(0),
    ve = 0,
    el = null,
    wn = 0,
    _o = 0,
    qu = 0,
    jr = null,
    Oe = null,
    bu = 0,
    rr = 1 / 0,
    Et = null,
    ao = !1,
    iu = null,
    Jt = null,
    Ll = !1,
    Qt = null,
    so = 0,
    Fr = 0,
    uu = null,
    Vl = -1,
    Hl = 0;

function Te() {
    return Q & 6 ? ce() : Vl !== -1 ? Vl : (Vl = ce());
}

function qt(e) {
    return e.mode & 1 ?
        Q & 2 && xe !== 0 ?
        xe & -xe :
        Uh.transition !== null ?
        (Hl === 0 && (Hl = jc()), Hl) :
        ((e = Z),
            e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bc(e.type))),
            e) :
        1;
}

function ut(e, t, n, r) {
    if (50 < Fr) throw ((Fr = 0), (uu = null), Error(_(185)));
    ll(e, n, r),
        (!(Q & 2) || e !== Se) &&
        (e === Se && (!(Q & 2) && (_o |= n), ve === 4 && $t(e, xe)),
            Ue(e, r),
            n === 1 && Q === 0 && !(t.mode & 1) && ((rr = ce() + 500), Eo && ln()));
}

function Ue(e, t) {
    var n = e.callbackNode;
    Up(e, t);
    var r = Zl(e, e === Se ? xe : 0);
    if (r === 0)
        n !== null && ja(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && ja(n), t === 1))
            e.tag === 0 ? Ih(Ls.bind(null, e)) : af(Ls.bind(null, e)),
            zh(function() {
                !(Q & 6) && ln();
            }),
            (n = null);
        else {
            switch (Fc(r)) {
                case 1:
                    n = _u;
                    break;
                case 4:
                    n = zc;
                    break;
                case 16:
                    n = Ql;
                    break;
                case 536870912:
                    n = Oc;
                    break;
                default:
                    n = Ql;
            }
            n = ud(n, ed.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}

function ed(e, t) {
    if (((Vl = -1), (Hl = 0), Q & 6)) throw Error(_(327));
    var n = e.callbackNode;
    if (Gn() && e.callbackNode !== n) return null;
    var r = Zl(e, e === Se ? xe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = co(e, r);
    else {
        t = r;
        var l = Q;
        Q |= 2;
        var o = nd();
        (Se !== e || xe !== t) && ((Et = null), (rr = ce() + 500), hn(e, t));
        do
            try {
                l0();
                break;
            } catch (u) {
                td(e, u);
            }
        while (1);
        Uu(),
            (uo.current = o),
            (Q = l),
            pe !== null ? (t = 0) : ((Se = null), (xe = 0), (t = ve));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((l = Oi(e)), l !== 0 && ((r = l), (t = au(e, l)))), t === 1)
        )
            throw ((n = el), hn(e, 0), $t(e, r), Ue(e, ce()), n);
        if (t === 6) $t(e, r);
        else {
            if (
                ((l = e.current.alternate), !(r & 30) &&
                    !n0(l) &&
                    ((t = co(e, r)),
                        t === 2 && ((o = Oi(e)), o !== 0 && ((r = o), (t = au(e, o)))),
                        t === 1))
            )
                throw ((n = el), hn(e, 0), $t(e, r), Ue(e, ce()), n);
            switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(_(345));
                case 2:
                    sn(e, Oe, Et);
                    break;
                case 3:
                    if (
                        ($t(e, r), (r & 130023424) === r && ((t = bu + 500 - ce()), 10 < t))
                    ) {
                        if (Zl(e, 0) !== 0) break;
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            Te(), (e.pingedLanes |= e.suspendedLanes & l);
                            break;
                        }
                        e.timeoutHandle = Bi(sn.bind(null, e, Oe, Et), t);
                        break;
                    }
                    sn(e, Oe, Et);
                    break;
                case 4:
                    if (($t(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - it(r);
                        (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
                    }
                    if (
                        ((r = l),
                            (r = ce() - r),
                            (r =
                                (120 > r ?
                                    120 :
                                    480 > r ?
                                    480 :
                                    1080 > r ?
                                    1080 :
                                    1920 > r ?
                                    1920 :
                                    3e3 > r ?
                                    3e3 :
                                    4320 > r ?
                                    4320 :
                                    1960 * t0(r / 1960)) - r),
                            10 < r)
                    ) {
                        e.timeoutHandle = Bi(sn.bind(null, e, Oe, Et), r);
                        break;
                    }
                    sn(e, Oe, Et);
                    break;
                case 5:
                    sn(e, Oe, Et);
                    break;
                default:
                    throw Error(_(329));
            }
        }
    }
    return Ue(e, ce()), e.callbackNode === n ? ed.bind(null, e) : null;
}

function au(e, t) {
    var n = jr;
    return (
        e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
        (e = co(e, t)),
        e !== 2 && ((t = Oe), (Oe = n), t !== null && su(t)),
        e
    );
}

function su(e) {
    Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
}

function n0(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!at(o(), l)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}

function $t(e, t) {
    for (
        t &= ~qu,
        t &= ~_o,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t;

    ) {
        var n = 31 - it(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}

function Ls(e) {
    if (Q & 6) throw Error(_(327));
    Gn();
    var t = Zl(e, 0);
    if (!(t & 1)) return Ue(e, ce()), null;
    var n = co(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Oi(e);
        r !== 0 && ((t = r), (n = au(e, r)));
    }
    if (n === 1) throw ((n = el), hn(e, 0), $t(e, t), Ue(e, ce()), n);
    if (n === 6) throw Error(_(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        sn(e, Oe, Et),
        Ue(e, ce()),
        null
    );
}

function ea(e, t) {
    var n = Q;
    Q |= 1;
    try {
        return e(t);
    } finally {
        (Q = n), Q === 0 && ((rr = ce() + 500), Eo && ln());
    }
}

function Sn(e) {
    Qt !== null && Qt.tag === 0 && !(Q & 6) && Gn();
    var t = Q;
    Q |= 1;
    var n = Je.transition,
        r = Z;
    try {
        if (((Je.transition = null), (Z = 1), e)) return e();
    } finally {
        (Z = r), (Je.transition = n), (Q = t), !(Q & 6) && ln();
    }
}

function ta() {
    (Ae = An.current), ee(An);
}

function hn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Dh(n)), pe !== null))
        for (n = pe.return; n !== null;) {
            var r = n;
            switch ((ju(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Jl();
                    break;
                case 3:
                    tr(), ee(Fe), ee(Pe), Wu();
                    break;
                case 5:
                    $u(r);
                    break;
                case 4:
                    tr();
                    break;
                case 13:
                    ee(le);
                    break;
                case 19:
                    ee(le);
                    break;
                case 10:
                    Vu(r.type._context);
                    break;
                case 22:
                case 23:
                    ta();
            }
            n = n.return;
        }
    if (
        ((Se = e),
            (pe = e = bt(e.current, null)),
            (xe = Ae = t),
            (ve = 0),
            (el = null),
            (qu = _o = wn = 0),
            (Oe = jr = null),
            fn !== null)
    ) {
        for (t = 0; t < fn.length; t++)
            if (((n = fn[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    (o.next = l), (r.next = i);
                }
                n.pending = r;
            }
        fn = null;
    }
    return e;
}

function td(e, t) {
    do {
        var n = pe;
        try {
            if ((Uu(), (Fl.current = io), oo)) {
                for (var r = oe.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), (r = r.next);
                }
                oo = !1;
            }
            if (
                ((gn = 0),
                    (we = me = oe = null),
                    (zr = !1),
                    (Jr = 0),
                    (Ju.current = null),
                    n === null || n.return === null)
            ) {
                (ve = 1), (el = t), (pe = null);
                break;
            }
            e: {
                var o = e,
                    i = n.return,
                    u = n,
                    a = t;
                if (
                    ((t = xe),
                        (u.flags |= 32768),
                        a !== null && typeof a == "object" && typeof a.then == "function")
                ) {
                    var s = a,
                        p = u,
                        m = p.tag;
                    if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var v = p.alternate;
                        v
                            ?
                            ((p.updateQueue = v.updateQueue),
                                (p.memoizedState = v.memoizedState),
                                (p.lanes = v.lanes)) :
                            ((p.updateQueue = null), (p.memoizedState = null));
                    }
                    var E = hs(i);
                    if (E !== null) {
                        (E.flags &= -257),
                        ms(E, i, u, o, t),
                            E.mode & 1 && ps(o, s, t),
                            (t = E),
                            (a = s);
                        var w = t.updateQueue;
                        if (w === null) {
                            var S = new Set();
                            S.add(a), (t.updateQueue = S);
                        } else w.add(a);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            ps(o, s, t), na();
                            break e;
                        }
                        a = Error(_(426));
                    }
                } else if (ne && u.mode & 1) {
                    var P = hs(i);
                    if (P !== null) {
                        !(P.flags & 65536) && (P.flags |= 256),
                        ms(P, i, u, o, t),
                            Fu(nr(a, u));
                        break e;
                    }
                }
                (o = a = nr(a, u)),
                ve !== 4 && (ve = 2),
                jr === null ? (jr = [o]) : jr.push(o),
                (o = i);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                            var d = Uf(o, a, t);
                            is(o, d);
                            break e;
                        case 1:
                            u = a;
                            var c = o.type,
                                h = o.stateNode;
                            if (!(o.flags & 128) &&
                                (typeof c.getDerivedStateFromError == "function" ||
                                    (h !== null &&
                                        typeof h.componentDidCatch == "function" &&
                                        (Jt === null || !Jt.has(h))))
                            ) {
                                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                var f = Vf(o, u, t);
                                is(o, f);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            ld(n);
        } catch (k) {
            (t = k), pe === n && n !== null && (pe = n = n.return);
            continue;
        }
        break;
    } while (1);
}

function nd() {
    var e = uo.current;
    return (uo.current = io), e === null ? io : e;
}

function na() {
    (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    Se === null || (!(wn & 268435455) && !(_o & 268435455)) || $t(Se, xe);
}

function co(e, t) {
    var n = Q;
    Q |= 2;
    var r = nd();
    (Se !== e || xe !== t) && ((Et = null), hn(e, t));
    do
        try {
            r0();
            break;
        } catch (l) {
            td(e, l);
        }
    while (1);
    if ((Uu(), (Q = n), (uo.current = r), pe !== null)) throw Error(_(261));
    return (Se = null), (xe = 0), ve;
}

function r0() {
    for (; pe !== null;) rd(pe);
}

function l0() {
    for (; pe !== null && !Mp();) rd(pe);
}

function rd(e) {
    var t = id(e.alternate, e, Ae);
    (e.memoizedProps = e.pendingProps),
    t === null ? ld(e) : (pe = t),
        (Ju.current = null);
}

function ld(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Jh(n, t)), n !== null)) {
                (n.flags &= 32767), (pe = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (ve = 6), (pe = null);
                return;
            }
        } else if (((n = Xh(n, t, Ae)), n !== null)) {
            pe = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            pe = t;
            return;
        }
        pe = t = e;
    } while (t !== null);
    ve === 0 && (ve = 5);
}

function sn(e, t, n) {
    var r = Z,
        l = Je.transition;
    try {
        (Je.transition = null), (Z = 1), o0(e, t, n, r);
    } finally {
        (Je.transition = l), (Z = r);
    }
    return null;
}

function o0(e, t, n, r) {
    do Gn();
    while (Qt !== null);
    if (Q & 6) throw Error(_(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(_(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
        (Vp(e, o),
            e === Se && ((pe = Se = null), (xe = 0)),
            (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Ll ||
            ((Ll = !0),
                ud(Ql, function() {
                    return Gn(), null;
                })),
            (o = (n.flags & 15990) !== 0),
            n.subtreeFlags & 15990 || o)
    ) {
        (o = Je.transition), (Je.transition = null);
        var i = Z;
        Z = 1;
        var u = Q;
        (Q |= 4),
        (Ju.current = null),
        bh(e, n),
            qf(n, e),
            _h(Hi),
            (Kl = !!Vi),
            (Hi = Vi = null),
            (e.current = n),
            e0(n),
            Np(),
            (Q = u),
            (Z = i),
            (Je.transition = o);
    } else e.current = n;
    if (
        (Ll && ((Ll = !1), (Qt = e), (so = l)),
            (o = e.pendingLanes),
            o === 0 && (Jt = null),
            zp(n.stateNode),
            Ue(e, ce()),
            t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (ao) throw ((ao = !1), (e = iu), (iu = null), e);
    return (
        so & 1 && e.tag !== 0 && Gn(),
        (o = e.pendingLanes),
        o & 1 ? (e === uu ? Fr++ : ((Fr = 0), (uu = e))) : (Fr = 0),
        ln(),
        null
    );
}

function Gn() {
    if (Qt !== null) {
        var e = Fc(so),
            t = Je.transition,
            n = Z;
        try {
            if (((Je.transition = null), (Z = 16 > e ? 16 : e), Qt === null))
                var r = !1;
            else {
                if (((e = Qt), (Qt = null), (so = 0), Q & 6)) throw Error(_(331));
                var l = Q;
                for (Q |= 4, N = e.current; N !== null;) {
                    var o = N,
                        i = o.child;
                    if (N.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var a = 0; a < u.length; a++) {
                                var s = u[a];
                                for (N = s; N !== null;) {
                                    var p = N;
                                    switch (p.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Or(8, p, o);
                                    }
                                    var m = p.child;
                                    if (m !== null)(m.return = p), (N = m);
                                    else
                                        for (; N !== null;) {
                                            p = N;
                                            var v = p.sibling,
                                                E = p.return;
                                            if ((Gf(p), p === s)) {
                                                N = null;
                                                break;
                                            }
                                            if (v !== null) {
                                                (v.return = E), (N = v);
                                                break;
                                            }
                                            N = E;
                                        }
                                }
                            }
                            var w = o.alternate;
                            if (w !== null) {
                                var S = w.child;
                                if (S !== null) {
                                    w.child = null;
                                    do {
                                        var P = S.sibling;
                                        (S.sibling = null), (S = P);
                                    } while (S !== null);
                                }
                            }
                            N = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)(i.return = o), (N = i);
                    else
                        e: for (; N !== null;) {
                            if (((o = N), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Or(9, o, o.return);
                                }
                            var d = o.sibling;
                            if (d !== null) {
                                (d.return = o.return), (N = d);
                                break e;
                            }
                            N = o.return;
                        }
                }
                var c = e.current;
                for (N = c; N !== null;) {
                    i = N;
                    var h = i.child;
                    if (i.subtreeFlags & 2064 && h !== null)(h.return = i), (N = h);
                    else
                        e: for (i = c; N !== null;) {
                            if (((u = N), u.flags & 2048))
                                try {
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ko(9, u);
                                    }
                                } catch (k) {
                                    ue(u, u.return, k);
                                }
                            if (u === i) {
                                N = null;
                                break e;
                            }
                            var f = u.sibling;
                            if (f !== null) {
                                (f.return = u.return), (N = f);
                                break e;
                            }
                            N = u.return;
                        }
                }
                if (
                    ((Q = l), ln(), mt && typeof mt.onPostCommitFiberRoot == "function")
                )
                    try {
                        mt.onPostCommitFiberRoot(vo, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (Z = n), (Je.transition = t);
        }
    }
    return !1;
}

function Ps(e, t, n) {
    (t = nr(n, t)),
    (t = Uf(e, t, 1)),
    (e = Xt(e, t, 1)),
    (t = Te()),
    e !== null && (ll(e, 1, t), Ue(e, t));
}

function ue(e, t, n) {
    if (e.tag === 3) Ps(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Ps(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (Jt === null || !Jt.has(r)))
                ) {
                    (e = nr(n, e)),
                    (e = Vf(t, e, 1)),
                    (t = Xt(t, e, 1)),
                    (e = Te()),
                    t !== null && (ll(t, 1, e), Ue(t, e));
                    break;
                }
            }
            t = t.return;
        }
}

function i0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = Te()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Se === e &&
        (xe & n) === n &&
        (ve === 4 || (ve === 3 && (xe & 130023424) === xe && 500 > ce() - bu) ?
            hn(e, 0) :
            (qu |= n)),
        Ue(e, t);
}

function od(e, t) {
    t === 0 &&
        (e.mode & 1 ?
            ((t = yl), (yl <<= 1), !(yl & 130023424) && (yl = 4194304)) :
            (t = 1));
    var n = Te();
    (e = Mt(e, t)), e !== null && (ll(e, t, n), Ue(e, n));
}

function u0(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), od(e, n);
}

function a0(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(_(314));
    }
    r !== null && r.delete(t), od(e, n);
}
var id;
id = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Fe.current) je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (je = !1), Gh(e, t, n);
            je = !!(e.flags & 131072);
        }
    else(je = !1), ne && t.flags & 1048576 && sf(t, eo, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Ul(e, t), (e = t.pendingProps);
            var l = qn(t, Pe.current);
            Yn(t, n), (l = Zu(null, t, r, e, l, n));
            var o = Ku();
            return (
                (t.flags |= 1),
                typeof l == "object" &&
                l !== null &&
                typeof l.render == "function" &&
                l.$$typeof === void 0 ?
                ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ie(r) ? ((o = !0), ql(t)) : (o = !1),
                    (t.memoizedState =
                        l.state !== null && l.state !== void 0 ? l.state : null),
                    Au(t),
                    (l.updater = Co),
                    (t.stateNode = l),
                    (l._reactInternals = t),
                    Gi(t, r, e, n),
                    (t = qi(null, t, r, !0, o, n))) :
                ((t.tag = 0), ne && o && Ou(t), Ne(null, t, l, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Ul(e, t),
                        (e = t.pendingProps),
                        (l = r._init),
                        (r = l(r._payload)),
                        (t.type = r),
                        (l = t.tag = c0(r)),
                        (e = nt(r, e)),
                        l)
                ) {
                    case 0:
                        t = Ji(null, t, r, e, n);
                        break e;
                    case 1:
                        t = gs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = vs(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ys(null, t, r, nt(r.type, e), n);
                        break e;
                }
                throw Error(_(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : nt(r, l)),
                Ji(e, t, r, l, n)
            );
        case 1:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : nt(r, l)),
                gs(e, t, r, l, n)
            );
        case 3:
            e: {
                if (($f(t), e === null)) throw Error(_(387));
                (r = t.pendingProps),
                (o = t.memoizedState),
                (l = o.element),
                pf(e, t),
                ro(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated))
                    if (
                        ((o = {
                                element: r,
                                isDehydrated: !1,
                                cache: i.cache,
                                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                                transitions: i.transitions,
                            }),
                            (t.updateQueue.baseState = o),
                            (t.memoizedState = o),
                            t.flags & 256)
                    ) {
                        (l = nr(Error(_(423)), t)), (t = ws(e, t, r, n, l));
                        break e;
                    } else if (r !== l) {
                    (l = nr(Error(_(424)), t)), (t = ws(e, t, r, n, l));
                    break e;
                } else
                    for (
                        Be = Gt(t.stateNode.containerInfo.firstChild),
                        $e = t,
                        ne = !0,
                        ot = null,
                        n = yf(t, null, r, n),
                        t.child = n; n;

                    )
                        (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((bn(), r === l)) {
                        t = Nt(e, t, n);
                        break e;
                    }
                    Ne(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                gf(t),
                e === null && Zi(t),
                (r = t.type),
                (l = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (i = l.children),
                Ai(r, l) ? (i = null) : o !== null && Ai(r, o) && (t.flags |= 32),
                Bf(e, t),
                Ne(e, t, i, n),
                t.child
            );
        case 6:
            return e === null && Zi(t), null;
        case 13:
            return Wf(e, t, n);
        case 4:
            return (
                Bu(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = er(t, null, r, n)) : Ne(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : nt(r, l)),
                vs(e, t, r, l, n)
            );
        case 7:
            return Ne(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ne(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ne(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                        (l = t.pendingProps),
                        (o = t.memoizedProps),
                        (i = l.value),
                        q(to, r._currentValue),
                        (r._currentValue = i),
                        o !== null)
                )
                    if (at(o.value, i)) {
                        if (o.children === l.children && !Fe.current) {
                            t = Nt(e, t, n);
                            break e;
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var u = o.dependencies;
                            if (u !== null) {
                                i = o.child;
                                for (var a = u.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (o.tag === 1) {
                                            (a = _t(-1, n & -n)), (a.tag = 2);
                                            var s = o.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var p = s.pending;
                                                p === null ?
                                                    (a.next = a) :
                                                    ((a.next = p.next), (p.next = a)),
                                                    (s.pending = a);
                                            }
                                        }
                                        (o.lanes |= n),
                                        (a = o.alternate),
                                        a !== null && (a.lanes |= n),
                                            Ki(o.return, n, t),
                                            (u.lanes |= n);
                                        break;
                                    }
                                    a = a.next;
                                }
                            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((i = o.return), i === null)) throw Error(_(341));
                                (i.lanes |= n),
                                (u = i.alternate),
                                u !== null && (u.lanes |= n),
                                    Ki(i, n, t),
                                    (i = o.sibling);
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break;
                                    }
                                    if (((o = i.sibling), o !== null)) {
                                        (o.return = i.return), (i = o);
                                        break;
                                    }
                                    i = i.return;
                                }
                            o = i;
                        }
                Ne(e, t, l.children, n),
                (t = t.child);
            }
            return t;
        case 9:
            return (
                (l = t.type),
                (r = t.pendingProps.children),
                Yn(t, n),
                (l = qe(l)),
                (r = r(l)),
                (t.flags |= 1),
                Ne(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (l = nt(r, t.pendingProps)),
                (l = nt(r.type, l)),
                ys(e, t, r, l, n)
            );
        case 15:
            return Hf(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : nt(r, l)),
                Ul(e, t),
                (t.tag = 1),
                Ie(r) ? ((e = !0), ql(t)) : (e = !1),
                Yn(t, n),
                mf(t, r, l),
                Gi(t, r, l, n),
                qi(null, t, r, !0, e, n)
            );
        case 19:
            return Qf(e, t, n);
        case 22:
            return Af(e, t, n);
    }
    throw Error(_(156, t.tag));
};

function ud(e, t) {
    return Dc(e, t);
}

function s0(e, t, n, r) {
    (this.tag = e),
    (this.key = n),
    (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}

function Xe(e, t, n, r) {
    return new s0(e, t, n, r);
}

function ra(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}

function c0(e) {
    if (typeof e == "function") return ra(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Cu)) return 11;
        if (e === xu) return 14;
    }
    return 2;
}

function bt(e, t) {
    var n = e.alternate;
    return (
        n === null ?
        ((n = Xe(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n)) :
        ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}

function Al(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == "function")) ra(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
        e: switch (e) {
            case Tn:
                return mn(n.children, l, o, t);
            case Eu:
                (i = 8), (l |= 8);
                break;
            case wi:
                return (
                    (e = Xe(12, n, t, l | 2)), (e.elementType = wi), (e.lanes = o), e
                );
            case Si:
                return (e = Xe(13, n, t, l)), (e.elementType = Si), (e.lanes = o), e;
            case Ei:
                return (e = Xe(19, n, t, l)), (e.elementType = Ei), (e.lanes = o), e;
            case mc:
                return Ro(n, l, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case pc:
                            i = 10;
                            break e;
                        case hc:
                            i = 9;
                            break e;
                        case Cu:
                            i = 11;
                            break e;
                        case xu:
                            i = 14;
                            break e;
                        case Ht:
                            (i = 16), (r = null);
                            break e;
                    }
                throw Error(_(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = Xe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
}

function mn(e, t, n, r) {
    return (e = Xe(7, e, r, t)), (e.lanes = n), e;
}

function Ro(e, t, n, r) {
    return (
        (e = Xe(22, e, r, t)),
        (e.elementType = mc),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}

function pi(e, t, n) {
    return (e = Xe(6, e, null, t)), (e.lanes = n), e;
}

function hi(e, t, n) {
    return (
        (t = Xe(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}

function f0(e, t, n, r, l) {
    (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yo(0)),
    (this.expirationTimes = Yo(-1)),
    (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
        0),
    (this.entanglements = Yo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}

function la(e, t, n, r, l, o, i, u, a) {
    return (
        (e = new f0(e, t, n, u, a)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Xe(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Au(o),
        e
    );
}

function d0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Nn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}

function ad(e) {
    if (!e) return tn;
    e = e._reactInternals;
    e: {
        if (kn(e) !== e || e.tag !== 1) throw Error(_(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ie(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(_(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ie(n)) return uf(e, n, t);
    }
    return t;
}

function sd(e, t, n, r, l, o, i, u, a) {
    return (
        (e = la(n, r, !0, e, l, o, i, u, a)),
        (e.context = ad(null)),
        (n = e.current),
        (r = Te()),
        (l = qt(n)),
        (o = _t(r, l)),
        (o.callback = t ? ? null),
        Xt(n, o, l),
        (e.current.lanes = l),
        ll(e, l, r),
        Ue(e, r),
        e
    );
}

function Lo(e, t, n, r) {
    var l = t.current,
        o = Te(),
        i = qt(l);
    return (
        (n = ad(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = _t(o, i)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Xt(l, t, i)),
        e !== null && (ut(e, l, i, o), jl(e, l, i)),
        i
    );
}

function fo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}

function Ms(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}

function oa(e, t) {
    Ms(e, t), (e = e.alternate) && Ms(e, t);
}

function p0() {
    return null;
}
var cd =
    typeof reportError == "function" ?
    reportError :
    function(e) {
        console.error(e);
    };

function ia(e) {
    this._internalRoot = e;
}
Po.prototype.render = ia.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(_(409));
    Lo(e, t, null, null);
};
Po.prototype.unmount = ia.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Sn(function() {
                Lo(null, e, null, null);
            }),
            (t[Pt] = null);
    }
};

function Po(e) {
    this._internalRoot = e;
}
Po.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Vc();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++);
        Bt.splice(n, 0, e), n === 0 && Ac(e);
    }
};

function ua(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}

function Mo(e) {
    return !(!e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
}

function Ns() {}

function h0(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var s = fo(i);
                o.call(s);
            };
        }
        var i = sd(t, r, e, 0, null, !1, !1, "", Ns);
        return (
            (e._reactRootContainer = i),
            (e[Pt] = i.current),
            Zr(e.nodeType === 8 ? e.parentNode : e),
            Sn(),
            i
        );
    }
    for (;
        (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var s = fo(a);
            u.call(s);
        };
    }
    var a = la(e, 0, !1, null, null, !1, !1, "", Ns);
    return (
        (e._reactRootContainer = a),
        (e[Pt] = a.current),
        Zr(e.nodeType === 8 ? e.parentNode : e),
        Sn(function() {
            Lo(t, a, n, r);
        }),
        a
    );
}

function No(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var a = fo(i);
                u.call(a);
            };
        }
        Lo(t, i, e, l);
    } else i = h0(n, t, e, l, r);
    return fo(i);
}
Ic = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Rr(t.pendingLanes);
                n !== 0 &&
                    (Ru(t, n | 1), Ue(t, ce()), !(Q & 6) && ((rr = ce() + 500), ln()));
            }
            break;
        case 13:
            Sn(function() {
                    var r = Mt(e, 1);
                    if (r !== null) {
                        var l = Te();
                        ut(r, e, 1, l);
                    }
                }),
                oa(e, 1);
    }
};
Lu = function(e) {
    if (e.tag === 13) {
        var t = Mt(e, 134217728);
        if (t !== null) {
            var n = Te();
            ut(t, e, 134217728, n);
        }
        oa(e, 134217728);
    }
};
Uc = function(e) {
    if (e.tag === 13) {
        var t = qt(e),
            n = Mt(e, t);
        if (n !== null) {
            var r = Te();
            ut(n, e, t, r);
        }
        oa(e, t);
    }
};
Vc = function() {
    return Z;
};
Hc = function(e, t) {
    var n = Z;
    try {
        return (Z = e), t();
    } finally {
        Z = n;
    }
};
Ti = function(e, t, n) {
    switch (t) {
        case "input":
            if ((ki(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                    t = 0; t < n.length; t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = So(r);
                        if (!l) throw Error(_(90));
                        yc(r), ki(r, l);
                    }
                }
            }
            break;
        case "textarea":
            wc(e, n);
            break;
        case "select":
            (t = n.value), t != null && Wn(e, !!n.multiple, t, !1);
    }
};
Rc = ea;
Lc = Sn;
var m0 = { usingClientEntryPoint: !1, Events: [il, jn, So, kc, _c, ea] },
    wr = {
        findFiberByHostInstance: cn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    v0 = {
        bundleType: wr.bundleType,
        version: wr.version,
        rendererPackageName: wr.rendererPackageName,
        rendererConfig: wr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Tt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return (e = Nc(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: wr.findFiberByHostInstance || p0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber)
        try {
            (vo = Pl.inject(v0)), (mt = Pl);
        } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m0;
Qe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ua(t)) throw Error(_(200));
    return d0(e, t, null, n);
};
Qe.createRoot = function(e, t) {
    if (!ua(e)) throw Error(_(299));
    var n = !1,
        r = "",
        l = cd;
    return (
        t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = la(e, 1, !1, null, null, n, !1, r, l)),
        (e[Pt] = t.current),
        Zr(e.nodeType === 8 ? e.parentNode : e),
        new ia(t)
    );
};
Qe.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ?
            Error(_(188)) :
            ((e = Object.keys(e).join(",")), Error(_(268, e)));
    return (e = Nc(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function(e) {
    return Sn(e);
};
Qe.hydrate = function(e, t, n) {
    if (!Mo(t)) throw Error(_(200));
    return No(null, e, t, !0, n);
};
Qe.hydrateRoot = function(e, t, n) {
    if (!ua(e)) throw Error(_(405));
    var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        i = cd;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (l = !0),
                n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
                n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
            (t = sd(t, null, e, 1, n ? ? null, l, !1, o, i)),
            (e[Pt] = t.current),
            Zr(e),
            r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null ?
            (t.mutableSourceEagerHydrationData = [n, l]) :
            t.mutableSourceEagerHydrationData.push(n, l);
    return new Po(t);
};
Qe.render = function(e, t, n) {
    if (!Mo(t)) throw Error(_(200));
    return No(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function(e) {
    if (!Mo(e)) throw Error(_(40));
    return e._reactRootContainer ?
        (Sn(function() {
            No(null, null, e, !1, function() {
                (e._reactRootContainer = null), (e[Pt] = null);
            });
        }), !0) :
        !1;
};
Qe.unstable_batchedUpdates = ea;
Qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Mo(n)) throw Error(_(200));
    if (e == null || e._reactInternals === void 0) throw Error(_(38));
    return No(e, t, n, !1, r);
};
Qe.version = "18.2.0-next-9e3b772b8-20220608";

function fd() {
    if (!(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        ))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fd);
        } catch (e) {
            console.error(e);
        }
}
fd(), (ac.exports = Qe);
var y0 = ac.exports,
    Ts = y0;
(yi.createRoot = Ts.createRoot), (yi.hydrateRoot = Ts.hydrateRoot);
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function te() {
    return (
        (te = Object.assign ?
            Object.assign.bind() :
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
        te.apply(this, arguments)
    );
}
var de;
(function(e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(de || (de = {}));
const Ds = "popstate";

function g0(e) {
    e === void 0 && (e = {});

    function t(l, o) {
        let {
            pathname: i = "/",
            search: u = "",
            hash: a = "",
        } = yt(l.location.hash.substr(1));
        return (!i.startsWith("/") && !i.startsWith(".") && (i = "/" + i),
            tl(
                "", { pathname: i, search: u, hash: a },
                (o.state && o.state.usr) || null,
                (o.state && o.state.key) || "default"
            )
        );
    }

    function n(l, o) {
        let i = l.document.querySelector("base"),
            u = "";
        if (i && i.getAttribute("href")) {
            let a = l.location.href,
                s = a.indexOf("#");
            u = s === -1 ? a : a.slice(0, s);
        }
        return u + "#" + (typeof o == "string" ? o : Cn(o));
    }

    function r(l, o) {
        En(
            l.pathname.charAt(0) === "/",
            "relative pathnames are not supported in hash history.push(" +
            JSON.stringify(o) +
            ")"
        );
    }
    return S0(t, n, r, e);
}

function A(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}

function En(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}

function w0() {
    return Math.random().toString(36).substr(2, 8);
}

function zs(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}

function tl(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        te({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
            typeof t == "string" ? yt(t) : t, { state: n, key: (t && t.key) || r || w0() }
        )
    );
}

function Cn(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}

function yt(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
    }
    return t;
}

function S0(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
        u = de.Pop,
        a = null,
        s = p();
    s == null && ((s = 0), i.replaceState(te({}, i.state, { idx: s }), ""));

    function p() {
        return (i.state || { idx: null }).idx;
    }

    function m() {
        u = de.Pop;
        let P = p(),
            d = P == null ? null : P - s;
        (s = P), a && a({ action: u, location: S.location, delta: d });
    }

    function v(P, d) {
        u = de.Push;
        let c = tl(S.location, P, d);
        n && n(c, P), (s = p() + 1);
        let h = zs(c, s),
            f = S.createHref(c);
        try {
            i.pushState(h, "", f);
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError") throw k;
            l.location.assign(f);
        }
        o && a && a({ action: u, location: S.location, delta: 1 });
    }

    function E(P, d) {
        u = de.Replace;
        let c = tl(S.location, P, d);
        n && n(c, P), (s = p());
        let h = zs(c, s),
            f = S.createHref(c);
        i.replaceState(h, "", f),
            o && a && a({ action: u, location: S.location, delta: 0 });
    }

    function w(P) {
        let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
            c = typeof P == "string" ? P : Cn(P);
        return (
            A(
                d,
                "No window.location.(origin|href) available to create URL for href: " +
                c
            ),
            new URL(c, d)
        );
    }
    let S = {
        get action() {
            return u;
        },
        get location() {
            return e(l, i);
        },
        listen(P) {
            if (a) throw new Error("A history only accepts one active listener");
            return (
                l.addEventListener(Ds, m),
                (a = P),
                () => {
                    l.removeEventListener(Ds, m), (a = null);
                }
            );
        },
        createHref(P) {
            return t(l, P);
        },
        createURL: w,
        encodeLocation(P) {
            let d = w(P);
            return { pathname: d.pathname, search: d.search, hash: d.hash };
        },
        push: v,
        replace: E,
        go(P) {
            return i.go(P);
        },
    };
    return S;
}
var se;
(function(e) {
    (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(se || (se = {}));
const E0 = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children",
]);

function C0(e) {
    return e.index === !0;
}

function cu(e, t, n, r) {
    return (
        n === void 0 && (n = []),
        r === void 0 && (r = {}),
        e.map((l, o) => {
            let i = [...n, o],
                u = typeof l.id == "string" ? l.id : i.join("-");
            if (
                (A(
                        l.index !== !0 || !l.children,
                        "Cannot specify children on an index route"
                    ),
                    A(!r[u],
                        'Found a route id collision on id "' +
                        u +
                        `".  Route id's must be globally unique within Data Router usages`
                    ),
                    C0(l))
            ) {
                let a = te({}, l, t(l), { id: u });
                return (r[u] = a), a;
            } else {
                let a = te({}, l, t(l), { id: u, children: void 0 });
                return (
                    (r[u] = a), l.children && (a.children = cu(l.children, t, i, r)), a
                );
            }
        })
    );
}

function Bn(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? yt(t) : t,
        l = ur(r.pathname || "/", n);
    if (l == null) return null;
    let o = dd(e);
    x0(o);
    let i = null;
    for (let u = 0; i == null && u < o.length; ++u) i = D0(o[u], j0(l));
    return i;
}

function dd(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let l = (o, i, u) => {
        let a = {
            relativePath: u === void 0 ? o.path || "" : u,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o,
        };
        a.relativePath.startsWith("/") &&
            (A(
                    a.relativePath.startsWith(r),
                    'Absolute route path "' +
                    a.relativePath +
                    '" nested under path ' +
                    ('"' + r + '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
                ),
                (a.relativePath = a.relativePath.slice(r.length)));
        let s = Rt([r, a.relativePath]),
            p = n.concat(a);
        o.children &&
            o.children.length > 0 &&
            (A(
                    o.index !== !0,
                    "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + s + '".')
                ),
                dd(o.children, t, p, s)), !(o.path == null && !o.index) &&
            t.push({ path: s, score: N0(s, o.index), routesMeta: p });
    };
    return (
        e.forEach((o, i) => {
            var u;
            if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
            else
                for (let a of pd(o.path)) l(o, i, a);
        }),
        t
    );
}

function pd(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
    l = n.endsWith("?"),
        o = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [o, ""] : [o];
    let i = pd(r.join("/")),
        u = [];
    return (
        u.push(...i.map((a) => (a === "" ? o : [o, a].join("/")))),
        l && u.push(...i),
        u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
    );
}

function x0(e) {
    e.sort((t, n) =>
        t.score !== n.score ?
        n.score - t.score :
        T0(
            t.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex)
        )
    );
}
const k0 = /^:\w+$/,
    _0 = 3,
    R0 = 2,
    L0 = 1,
    P0 = 10,
    M0 = -2,
    Os = (e) => e === "*";

function N0(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(Os) && (r += M0),
        t && (r += R0),
        n
        .filter((l) => !Os(l))
        .reduce((l, o) => l + (k0.test(o) ? _0 : o === "" ? L0 : P0), r)
    );
}

function T0(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ?
        e[e.length - 1] - t[t.length - 1] :
        0;
}

function D0(e, t) {
    let { routesMeta: n } = e,
    r = {},
        l = "/",
        o = [];
    for (let i = 0; i < n.length; ++i) {
        let u = n[i],
            a = i === n.length - 1,
            s = l === "/" ? t : t.slice(l.length) || "/",
            p = z0({ path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
                s
            );
        if (!p) return null;
        Object.assign(r, p.params);
        let m = u.route;
        o.push({
                params: r,
                pathname: Rt([l, p.pathname]),
                pathnameBase: V0(Rt([l, p.pathnameBase])),
                route: m,
            }),
            p.pathnameBase !== "/" && (l = Rt([l, p.pathnameBase]));
    }
    return o;
}

function z0(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = O0(e.path, e.caseSensitive, e.end),
        l = t.match(n);
    if (!l) return null;
    let o = l[0],
        i = o.replace(/(.)\/+$/, "$1"),
        u = l.slice(1);
    return {
        params: r.reduce((s, p, m) => {
            if (p === "*") {
                let v = u[m] || "";
                i = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
            }
            return (s[p] = F0(u[m] || "", p)), s;
        }, {}),
        pathname: o,
        pathnameBase: i,
        pattern: e,
    };
}

function O0(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        En(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
            e +
            '" will be treated as if it were ' +
            ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
            "always follow a `/` in the pattern. To get rid of this warning, " +
            ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
        );
    let r = [],
        l =
        "^" +
        e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
    return (
        e.endsWith("*") ?
        (r.push("*"),
            (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$")) :
        n ?
        (l += "\\/*$") :
        e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r]
    );
}

function j0(e) {
    try {
        return decodeURI(e);
    } catch (t) {
        return (
            En(!1,
                'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                ("encoding (" + t + ").")
            ),
            e
        );
    }
}

function F0(e, t) {
    try {
        return decodeURIComponent(e);
    } catch (n) {
        return (
            En(!1,
                'The value for the URL param "' +
                t +
                '" will not be decoded because' +
                (' the string "' +
                    e +
                    '" is a malformed URL segment. This is probably') +
                (" due to a bad percent encoding (" + n + ").")
            ),
            e
        );
    }
}

function ur(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}

function I0(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: l = "",
    } = typeof e == "string" ? yt(e) : e;
    return {
        pathname: n ? (n.startsWith("/") ? n : U0(n, t)) : t,
        search: H0(r),
        hash: A0(l),
    };
}

function U0(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((l) => {
            l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}

function mi(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." +
            t +
            "` field [" +
            JSON.stringify(r) +
            "].  Please separate it out to the ") +
        ("`to." + n + "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}

function To(e) {
    return e.filter(
        (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
    );
}

function aa(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ?
        (l = yt(e)) :
        ((l = te({}, e)),
            A(!l.pathname || !l.pathname.includes("?"),
                mi("?", "pathname", "search", l)
            ),
            A(!l.pathname || !l.pathname.includes("#"),
                mi("#", "pathname", "hash", l)
            ),
            A(!l.search || !l.search.includes("#"), mi("#", "search", "hash", l)));
    let o = e === "" || l.pathname === "",
        i = o ? "/" : l.pathname,
        u;
    if (r || i == null) u = n;
    else {
        let m = t.length - 1;
        if (i.startsWith("..")) {
            let v = i.split("/");
            for (; v[0] === "..";) v.shift(), (m -= 1);
            l.pathname = v.join("/");
        }
        u = m >= 0 ? t[m] : "/";
    }
    let a = I0(l, u),
        s = i && i !== "/" && i.endsWith("/"),
        p = (o || i === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (s || p) && (a.pathname += "/"), a;
}
const Rt = (e) => e.join("/").replace(/\/\/+/g, "/"),
    V0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    H0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    A0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class sa {
    constructor(t, n, r, l) {
        l === void 0 && (l = !1),
            (this.status = t),
            (this.statusText = n || ""),
            (this.internal = l),
            r instanceof Error ?
            ((this.data = r.toString()), (this.error = r)) :
            (this.data = r);
    }
}

function hd(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    );
}
const md = ["post", "put", "patch", "delete"],
    B0 = new Set(md),
    $0 = ["get", ...md],
    W0 = new Set($0),
    Q0 = new Set([301, 302, 303, 307, 308]),
    Z0 = new Set([307, 308]),
    vi = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
    },
    K0 = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
    },
    Sr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
    vd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Y0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });

function G0(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0,
        n =
        typeof t < "u" &&
        typeof t.document < "u" &&
        typeof t.document.createElement < "u",
        r = !n;
    A(
        e.routes.length > 0,
        "You must provide a non-empty routes array to createRouter"
    );
    let l;
    if (e.mapRouteProperties) l = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let y = e.detectErrorBoundary;
        l = (g) => ({ hasErrorBoundary: y(g) });
    } else l = Y0;
    let o = {},
        i = cu(e.routes, l, void 0, o),
        u,
        a = e.basename || "/",
        s = te({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
        p = null,
        m = new Set(),
        v = null,
        E = null,
        w = null,
        S = e.hydrationData != null,
        P = Bn(i, e.history.location, a),
        d = null;
    if (P == null) {
        let y = Ke(404, { pathname: e.history.location.pathname }),
            { matches: g, route: x } = Bs(i);
        (P = g), (d = {
            [x.id]: y });
    }
    let c = !P.some((y) => y.route.lazy) &&
        (!P.some((y) => y.route.loader) || e.hydrationData != null),
        h,
        f = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: P,
            initialized: c,
            navigation: vi,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || d,
            fetchers: new Map(),
            blockers: new Map(),
        },
        k = de.Pop,
        L = !1,
        R,
        T = !1,
        W = !1,
        F = [],
        ye = [],
        X = new Map(),
        st = 0,
        Dt = -1,
        zt = new Map(),
        Ve = new Set(),
        ct = new Map(),
        M = new Map(),
        j = new Map(),
        H = !1;

    function re() {
        return (
            (p = e.history.listen((y) => {
                let { action: g, location: x, delta: D } = y;
                if (H) {
                    H = !1;
                    return;
                }
                En(
                    j.size === 0 || D != null,
                    "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
                );
                let V = ya({
                    currentLocation: f.location,
                    nextLocation: x,
                    historyAction: g,
                });
                if (V && D != null) {
                    (H = !0),
                    e.history.go(D * -1),
                        cl(V, {
                            state: "blocked",
                            location: x,
                            proceed() {
                                cl(V, {
                                        state: "proceeding",
                                        proceed: void 0,
                                        reset: void 0,
                                        location: x,
                                    }),
                                    e.history.go(D);
                            },
                            reset() {
                                let I = new Map(f.blockers);
                                I.set(V, Sr), J({ blockers: I });
                            },
                        });
                    return;
                }
                return Ot(g, x);
            })),
            f.initialized || Ot(de.Pop, f.location),
            h
        );
    }

    function fe() {
        p && p(),
            m.clear(),
            R && R.abort(),
            f.fetchers.forEach((y, g) => Fo(g)),
            f.blockers.forEach((y, g) => va(g));
    }

    function Rn(y) {
        return m.add(y), () => m.delete(y);
    }

    function J(y) {
        (f = te({}, f, y)), m.forEach((g) => g(f));
    }

    function gt(y, g) {
        var x, D;
        let V =
            f.actionData != null &&
            f.navigation.formMethod != null &&
            lt(f.navigation.formMethod) &&
            f.navigation.state === "loading" &&
            ((x = y.state) == null ? void 0 : x._isRedirect) !== !0,
            I;
        g.actionData ?
            Object.keys(g.actionData).length > 0 ?
            (I = g.actionData) :
            (I = null) :
            V ?
            (I = f.actionData) :
            (I = null);
        let U = g.loaderData ?
            As(f.loaderData, g.loaderData, g.matches || [], g.errors) :
            f.loaderData,
            O = f.blockers;
        O.size > 0 && ((O = new Map(O)), O.forEach((G, Ee) => O.set(Ee, Sr)));
        let z =
            L === !0 ||
            (f.navigation.formMethod != null &&
                lt(f.navigation.formMethod) &&
                ((D = y.state) == null ? void 0 : D._isRedirect) !== !0);
        u && ((i = u), (u = void 0)),
            T ||
            k === de.Pop ||
            (k === de.Push ?
                e.history.push(y, y.state) :
                k === de.Replace && e.history.replace(y, y.state)),
            J(
                te({}, g, {
                    actionData: I,
                    loaderData: U,
                    historyAction: k,
                    location: y,
                    initialized: !0,
                    navigation: vi,
                    revalidation: "idle",
                    restoreScrollPosition: wa(y, g.matches || f.matches),
                    preventScrollReset: z,
                    blockers: O,
                })
            ),
            (k = de.Pop),
            (L = !1),
            (T = !1),
            (W = !1),
            (F = []),
            (ye = []);
    }
    async function ft(y, g) {
        if (typeof y == "number") {
            e.history.go(y);
            return;
        }
        let x = fu(
                f.location,
                f.matches,
                a,
                s.v7_prependBasename,
                y,
                g == null ? void 0 : g.fromRouteId,
                g == null ? void 0 : g.relative
            ),
            {
                path: D,
                submission: V,
                error: I,
            } = js(s.v7_normalizeFormMethod, !1, x, g),
            U = f.location,
            O = tl(f.location, D, g && g.state);
        O = te({}, O, e.history.encodeLocation(O));
        let z = g && g.replace != null ? g.replace : void 0,
            G = de.Push;
        z === !0 ?
            (G = de.Replace) :
            z === !1 ||
            (V != null &&
                lt(V.formMethod) &&
                V.formAction === f.location.pathname + f.location.search &&
                (G = de.Replace));
        let Ee =
            g && "preventScrollReset" in g ? g.preventScrollReset === !0 : void 0,
            K = ya({ currentLocation: U, nextLocation: O, historyAction: G });
        if (K) {
            cl(K, {
                state: "blocked",
                location: O,
                proceed() {
                    cl(K, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: O,
                        }),
                        ft(y, g);
                },
                reset() {
                    let ae = new Map(f.blockers);
                    ae.set(K, Sr), J({ blockers: ae });
                },
            });
            return;
        }
        return await Ot(G, O, {
            submission: V,
            pendingError: I,
            preventScrollReset: Ee,
            replace: g && g.replace,
        });
    }

    function Ln() {
        if (
            (jo(),
                J({ revalidation: "loading" }),
                f.navigation.state !== "submitting")
        ) {
            if (f.navigation.state === "idle") {
                Ot(f.historyAction, f.location, { startUninterruptedRevalidation: !0 });
                return;
            }
            Ot(k || f.historyAction, f.navigation.location, {
                overrideNavigation: f.navigation,
            });
        }
    }
    async function Ot(y, g, x) {
        R && R.abort(),
            (R = null),
            (k = y),
            (T = (x && x.startUninterruptedRevalidation) === !0),
            zd(f.location, f.matches),
            (L = (x && x.preventScrollReset) === !0);
        let D = u || i,
            V = x && x.overrideNavigation,
            I = Bn(D, g, a);
        if (!I) {
            let ae = Ke(404, { pathname: g.pathname }),
                { matches: ge, route: on } = Bs(D);
            Io(), gt(g, { matches: ge, loaderData: {}, errors: {
                    [on.id]: ae } });
            return;
        }
        if (
            f.initialized &&
            !W &&
            em(f.location, g) &&
            !(x && x.submission && lt(x.submission.formMethod))
        ) {
            gt(g, { matches: I });
            return;
        }
        R = new AbortController();
        let U = Cr(e.history, g, R.signal, x && x.submission),
            O,
            z;
        if (x && x.pendingError) z = {
            [$n(I).route.id]: x.pendingError };
        else if (x && x.submission && lt(x.submission.formMethod)) {
            let ae = await Rd(U, g, x.submission, I, { replace: x.replace });
            if (ae.shortCircuited) return;
            (O = ae.pendingActionData),
            (z = ae.pendingActionError),
            (V = Ml(g, x.submission)),
            (U = new Request(U.url, { signal: U.signal }));
        }
        let {
            shortCircuited: G,
            loaderData: Ee,
            errors: K,
        } = await Ld(
            U,
            g,
            I,
            V,
            x && x.submission,
            x && x.fetcherSubmission,
            x && x.replace,
            O,
            z
        );
        G ||
            ((R = null),
                gt(
                    g,
                    te({ matches: I }, O ? { actionData: O } : {}, {
                        loaderData: Ee,
                        errors: K,
                    })
                ));
    }
    async function Rd(y, g, x, D, V) {
        V === void 0 && (V = {}), jo();
        let I = om(g, x);
        J({ navigation: I });
        let U,
            O = pu(D, g);
        if (!O.route.action && !O.route.lazy)
            U = {
                type: se.error,
                error: Ke(405, {
                    method: y.method,
                    pathname: g.pathname,
                    routeId: O.route.id,
                }),
            };
        else if (((U = await Er("action", y, O, D, o, l, a)), y.signal.aborted))
            return { shortCircuited: !0 };
        if (Xn(U)) {
            let z;
            return (
                V && V.replace != null ?
                (z = V.replace) :
                (z = U.location === f.location.pathname + f.location.search),
                await sr(f, U, { submission: x, replace: z }), { shortCircuited: !0 }
            );
        }
        if (Ir(U)) {
            let z = $n(D, O.route.id);
            return (
                (V && V.replace) !== !0 && (k = de.Push), { pendingActionData: {}, pendingActionError: {
                        [z.route.id]: U.error } }
            );
        }
        if (pn(U)) throw Ke(400, { type: "defer-action" });
        return { pendingActionData: {
                [O.route.id]: U.data } };
    }
    async function Ld(y, g, x, D, V, I, U, O, z) {
        let G = D || Ml(g, V),
            Ee = V || I || Qs(G),
            K = u || i,
            [ae, ge] = Fs(e.history, f, x, Ee, g, W, F, ye, ct, Ve, K, a, O, z);
        if (
            (Io(
                    (Y) =>
                    !(x && x.some((et) => et.route.id === Y)) ||
                    (ae && ae.some((et) => et.route.id === Y))
                ),
                (Dt = ++st),
                ae.length === 0 && ge.length === 0)
        ) {
            let Y = ha();
            return (
                gt(
                    g,
                    te({ matches: x, loaderData: {}, errors: z || null },
                        O ? { actionData: O } : {},
                        Y ? { fetchers: new Map(f.fetchers) } : {}
                    )
                ), { shortCircuited: !0 }
            );
        }
        if (!T) {
            ge.forEach((et) => {
                let Ft = f.fetchers.get(et.key),
                    Bo = xr(void 0, Ft ? Ft.data : void 0);
                f.fetchers.set(et.key, Bo);
            });
            let Y = O || f.actionData;
            J(
                te({ navigation: G },
                    Y ?
                    Object.keys(Y).length === 0 ?
                    { actionData: null } :
                    { actionData: Y } :
                    {},
                    ge.length > 0 ? { fetchers: new Map(f.fetchers) } : {}
                )
            );
        }
        ge.forEach((Y) => {
            X.has(Y.key) && jt(Y.key), Y.controller && X.set(Y.key, Y.controller);
        });
        let on = () => ge.forEach((Y) => jt(Y.key));
        R && R.signal.addEventListener("abort", on);
        let {
            results: un,
            loaderResults: cr,
            fetcherResults: Uo,
        } = await da(f.matches, x, ae, ge, y);
        if (y.signal.aborted) return { shortCircuited: !0 };
        R && R.signal.removeEventListener("abort", on),
            ge.forEach((Y) => X.delete(Y.key));
        let wt = $s(un);
        if (wt) {
            if (wt.idx >= ae.length) {
                let Y = ge[wt.idx - ae.length].key;
                Ve.add(Y);
            }
            return await sr(f, wt.result, { replace: U }), { shortCircuited: !0 };
        }
        let { loaderData: St, errors: fl } = Hs(f, x, ae, cr, z, ge, Uo, M);
        M.forEach((Y, et) => {
            Y.subscribe((Ft) => {
                (Ft || Y.done) && M.delete(et);
            });
        });
        let Vo = ha(),
            Ho = ma(Dt),
            Ao = Vo || Ho || ge.length > 0;
        return te({ loaderData: St, errors: fl },
            Ao ? { fetchers: new Map(f.fetchers) } : {}
        );
    }

    function fa(y) {
        return f.fetchers.get(y) || K0;
    }

    function Pd(y, g, x, D) {
        if (r)
            throw new Error(
                "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
            );
        X.has(y) && jt(y);
        let V = u || i,
            I = fu(
                f.location,
                f.matches,
                a,
                s.v7_prependBasename,
                x,
                g,
                D == null ? void 0 : D.relative
            ),
            U = Bn(V, I, a);
        if (!U) {
            sl(y, g, Ke(404, { pathname: I }));
            return;
        }
        let {
            path: O,
            submission: z,
            error: G,
        } = js(s.v7_normalizeFormMethod, !0, I, D);
        if (G) {
            sl(y, g, G);
            return;
        }
        let Ee = pu(U, O);
        if (((L = (D && D.preventScrollReset) === !0), z && lt(z.formMethod))) {
            Md(y, g, O, Ee, U, z);
            return;
        }
        ct.set(y, { routeId: g, path: O }), Nd(y, g, O, Ee, U, z);
    }
    async function Md(y, g, x, D, V, I) {
        if ((jo(), ct.delete(y), !D.route.action && !D.route.lazy)) {
            let he = Ke(405, { method: I.formMethod, pathname: x, routeId: g });
            sl(y, g, he);
            return;
        }
        let U = f.fetchers.get(y),
            O = im(I, U);
        f.fetchers.set(y, O), J({ fetchers: new Map(f.fetchers) });
        let z = new AbortController(),
            G = Cr(e.history, x, z.signal, I);
        X.set(y, z);
        let Ee = st,
            K = await Er("action", G, D, V, o, l, a);
        if (G.signal.aborted) {
            X.get(y) === z && X.delete(y);
            return;
        }
        if (Xn(K))
            if ((X.delete(y), Dt > Ee)) {
                let he = Mn(void 0);
                f.fetchers.set(y, he), J({ fetchers: new Map(f.fetchers) });
                return;
            } else {
                Ve.add(y);
                let he = xr(I);
                return (
                    f.fetchers.set(y, he),
                    J({ fetchers: new Map(f.fetchers) }),
                    sr(f, K, { submission: I, isFetchActionRedirect: !0 })
                );
            }
        if (Ir(K)) {
            sl(y, g, K.error);
            return;
        }
        if (pn(K)) throw Ke(400, { type: "defer-action" });
        let ae = f.navigation.location || f.location,
            ge = Cr(e.history, ae, z.signal),
            on = u || i,
            un =
            f.navigation.state !== "idle" ?
            Bn(on, f.navigation.location, a) :
            f.matches;
        A(un, "Didn't find any matches after fetcher action");
        let cr = ++st;
        zt.set(y, cr);
        let Uo = xr(I, K.data);
        f.fetchers.set(y, Uo);
        let [wt, St] = Fs(
            e.history,
            f,
            un,
            I,
            ae,
            W,
            F,
            ye,
            ct,
            Ve,
            on,
            a, {
                [D.route.id]: K.data },
            void 0
        );
        St.filter((he) => he.key !== y).forEach((he) => {
                let fr = he.key,
                    Sa = f.fetchers.get(fr),
                    jd = xr(void 0, Sa ? Sa.data : void 0);
                f.fetchers.set(fr, jd),
                    X.has(fr) && jt(fr),
                    he.controller && X.set(fr, he.controller);
            }),
            J({ fetchers: new Map(f.fetchers) });
        let fl = () => St.forEach((he) => jt(he.key));
        z.signal.addEventListener("abort", fl);
        let {
            results: Vo,
            loaderResults: Ho,
            fetcherResults: Ao,
        } = await da(f.matches, un, wt, St, ge);
        if (z.signal.aborted) return;
        z.signal.removeEventListener("abort", fl),
            zt.delete(y),
            X.delete(y),
            St.forEach((he) => X.delete(he.key));
        let Y = $s(Vo);
        if (Y) {
            if (Y.idx >= wt.length) {
                let he = St[Y.idx - wt.length].key;
                Ve.add(he);
            }
            return sr(f, Y.result);
        }
        let { loaderData: et, errors: Ft } = Hs(
            f,
            f.matches,
            wt,
            Ho,
            void 0,
            St,
            Ao,
            M
        );
        if (f.fetchers.has(y)) {
            let he = Mn(K.data);
            f.fetchers.set(y, he);
        }
        let Bo = ma(cr);
        f.navigation.state === "loading" && cr > Dt ?
            (A(k, "Expected pending action"),
                R && R.abort(),
                gt(f.navigation.location, {
                    matches: un,
                    loaderData: et,
                    errors: Ft,
                    fetchers: new Map(f.fetchers),
                })) :
            (J(
                    te({ errors: Ft, loaderData: As(f.loaderData, et, un, Ft) },
                        Bo || St.length > 0 ? { fetchers: new Map(f.fetchers) } : {}
                    )
                ),
                (W = !1));
    }
    async function Nd(y, g, x, D, V, I) {
        let U = f.fetchers.get(y),
            O = xr(I, U ? U.data : void 0);
        f.fetchers.set(y, O), J({ fetchers: new Map(f.fetchers) });
        let z = new AbortController(),
            G = Cr(e.history, x, z.signal);
        X.set(y, z);
        let Ee = st,
            K = await Er("loader", G, D, V, o, l, a);
        if (
            (pn(K) && (K = (await wd(K, G.signal, !0)) || K),
                X.get(y) === z && X.delete(y),
                G.signal.aborted)
        )
            return;
        if (Xn(K))
            if (Dt > Ee) {
                let ge = Mn(void 0);
                f.fetchers.set(y, ge), J({ fetchers: new Map(f.fetchers) });
                return;
            } else {
                Ve.add(y), await sr(f, K);
                return;
            }
        if (Ir(K)) {
            let ge = $n(f.matches, g);
            f.fetchers.delete(y),
                J({
                    fetchers: new Map(f.fetchers),
                    errors: {
                        [ge.route.id]: K.error },
                });
            return;
        }
        A(!pn(K), "Unhandled fetcher deferred data");
        let ae = Mn(K.data);
        f.fetchers.set(y, ae), J({ fetchers: new Map(f.fetchers) });
    }
    async function sr(y, g, x) {
        let {
            submission: D,
            replace: V,
            isFetchActionRedirect: I,
        } = x === void 0 ? {} : x;
        g.revalidate && (W = !0);
        let U = tl(
            y.location,
            g.location,
            te({ _isRedirect: !0 }, I ? { _isFetchActionRedirect: !0 } : {})
        );
        if ((A(U, "Expected a location on the redirect navigation"), n)) {
            let G = !1;
            if (g.reloadDocument) G = !0;
            else if (vd.test(g.location)) {
                const Ee = e.history.createURL(g.location);
                G = Ee.origin !== t.location.origin || ur(Ee.pathname, a) == null;
            }
            if (G) {
                V ? t.location.replace(g.location) : t.location.assign(g.location);
                return;
            }
        }
        R = null;
        let O = V === !0 ? de.Replace : de.Push,
            z = D || Qs(y.navigation);
        if (Z0.has(g.status) && z && lt(z.formMethod))
            await Ot(O, U, {
                submission: te({}, z, { formAction: g.location }),
                preventScrollReset: L,
            });
        else if (I)
            await Ot(O, U, {
                overrideNavigation: Ml(U),
                fetcherSubmission: z,
                preventScrollReset: L,
            });
        else {
            let G = Ml(U, z);
            await Ot(O, U, { overrideNavigation: G, preventScrollReset: L });
        }
    }
    async function da(y, g, x, D, V) {
        let I = await Promise.all([
                ...x.map((z) => Er("loader", V, z, g, o, l, a)),
                ...D.map((z) =>
                    z.matches && z.match && z.controller ?
                    Er(
                        "loader",
                        Cr(e.history, z.path, z.controller.signal),
                        z.match,
                        z.matches,
                        o,
                        l,
                        a
                    ) :
                    { type: se.error, error: Ke(404, { pathname: z.path }) }
                ),
            ]),
            U = I.slice(0, x.length),
            O = I.slice(x.length);
        return (
            await Promise.all([
                Ws(
                    y,
                    x,
                    U,
                    U.map(() => V.signal), !1,
                    f.loaderData
                ),
                Ws(
                    y,
                    D.map((z) => z.match),
                    O,
                    D.map((z) => (z.controller ? z.controller.signal : null)), !0
                ),
            ]), { results: I, loaderResults: U, fetcherResults: O }
        );
    }

    function jo() {
        (W = !0),
        F.push(...Io()),
            ct.forEach((y, g) => {
                X.has(g) && (ye.push(g), jt(g));
            });
    }

    function sl(y, g, x) {
        let D = $n(f.matches, g);
        Fo(y), J({ errors: {
                [D.route.id]: x }, fetchers: new Map(f.fetchers) });
    }

    function Fo(y) {
        let g = f.fetchers.get(y);
        X.has(y) && !(g && g.state === "loading" && zt.has(y)) && jt(y),
            ct.delete(y),
            zt.delete(y),
            Ve.delete(y),
            f.fetchers.delete(y);
    }

    function jt(y) {
        let g = X.get(y);
        A(g, "Expected fetch controller: " + y), g.abort(), X.delete(y);
    }

    function pa(y) {
        for (let g of y) {
            let x = fa(g),
                D = Mn(x.data);
            f.fetchers.set(g, D);
        }
    }

    function ha() {
        let y = [],
            g = !1;
        for (let x of Ve) {
            let D = f.fetchers.get(x);
            A(D, "Expected fetcher: " + x),
                D.state === "loading" && (Ve.delete(x), y.push(x), (g = !0));
        }
        return pa(y), g;
    }

    function ma(y) {
        let g = [];
        for (let [x, D] of zt)
            if (D < y) {
                let V = f.fetchers.get(x);
                A(V, "Expected fetcher: " + x),
                    V.state === "loading" && (jt(x), zt.delete(x), g.push(x));
            }
        return pa(g), g.length > 0;
    }

    function Td(y, g) {
        let x = f.blockers.get(y) || Sr;
        return j.get(y) !== g && j.set(y, g), x;
    }

    function va(y) {
        f.blockers.delete(y), j.delete(y);
    }

    function cl(y, g) {
        let x = f.blockers.get(y) || Sr;
        A(
            (x.state === "unblocked" && g.state === "blocked") ||
            (x.state === "blocked" && g.state === "blocked") ||
            (x.state === "blocked" && g.state === "proceeding") ||
            (x.state === "blocked" && g.state === "unblocked") ||
            (x.state === "proceeding" && g.state === "unblocked"),
            "Invalid blocker state transition: " + x.state + " -> " + g.state
        );
        let D = new Map(f.blockers);
        D.set(y, g), J({ blockers: D });
    }

    function ya(y) {
        let { currentLocation: g, nextLocation: x, historyAction: D } = y;
        if (j.size === 0) return;
        j.size > 1 && En(!1, "A router only supports one blocker at a time");
        let V = Array.from(j.entries()),
            [I, U] = V[V.length - 1],
            O = f.blockers.get(I);
        if (!(O && O.state === "proceeding") &&
            U({ currentLocation: g, nextLocation: x, historyAction: D })
        )
            return I;
    }

    function Io(y) {
        let g = [];
        return (
            M.forEach((x, D) => {
                (!y || y(D)) && (x.cancel(), g.push(D), M.delete(D));
            }),
            g
        );
    }

    function Dd(y, g, x) {
        if (((v = y), (w = g), (E = x || null), !S && f.navigation === vi)) {
            S = !0;
            let D = wa(f.location, f.matches);
            D != null && J({ restoreScrollPosition: D });
        }
        return () => {
            (v = null), (w = null), (E = null);
        };
    }

    function ga(y, g) {
        return (
            (E &&
                E(
                    y,
                    g.map((D) => lm(D, f.loaderData))
                )) ||
            y.key
        );
    }

    function zd(y, g) {
        if (v && w) {
            let x = ga(y, g);
            v[x] = w();
        }
    }

    function wa(y, g) {
        if (v) {
            let x = ga(y, g),
                D = v[x];
            if (typeof D == "number") return D;
        }
        return null;
    }

    function Od(y) {
        (o = {}), (u = cu(y, l, void 0, o));
    }
    return (
        (h = {
            get basename() {
                return a;
            },
            get state() {
                return f;
            },
            get routes() {
                return i;
            },
            initialize: re,
            subscribe: Rn,
            enableScrollRestoration: Dd,
            navigate: ft,
            fetch: Pd,
            revalidate: Ln,
            createHref: (y) => e.history.createHref(y),
            encodeLocation: (y) => e.history.encodeLocation(y),
            getFetcher: fa,
            deleteFetcher: Fo,
            dispose: fe,
            getBlocker: Td,
            deleteBlocker: va,
            _internalFetchControllers: X,
            _internalActiveDeferreds: M,
            _internalSetRoutes: Od,
        }),
        h
    );
}

function X0(e) {
    return (
        e != null &&
        (("formData" in e && e.formData != null) ||
            ("body" in e && e.body !== void 0))
    );
}

function fu(e, t, n, r, l, o, i) {
    let u, a;
    if (o != null && i !== "path") {
        u = [];
        for (let p of t)
            if ((u.push(p), p.route.id === o)) {
                a = p;
                break;
            }
    } else(u = t), (a = t[t.length - 1]);
    let s = aa(
        l || ".",
        To(u).map((p) => p.pathnameBase),
        ur(e.pathname, n) || e.pathname,
        i === "path"
    );
    return (
        l == null && ((s.search = e.search), (s.hash = e.hash)),
        (l == null || l === "" || l === ".") &&
        a &&
        a.route.index &&
        !ca(s.search) &&
        (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
        r &&
        n !== "/" &&
        (s.pathname = s.pathname === "/" ? n : Rt([n, s.pathname])),
        Cn(s)
    );
}

function js(e, t, n, r) {
    if (!r || !X0(r)) return { path: n };
    if (r.formMethod && !rm(r.formMethod))
        return { path: n, error: Ke(405, { method: r.formMethod }) };
    let l = () => ({ path: n, error: Ke(400, { type: "invalid-body" }) }),
        o = r.formMethod || "get",
        i = e ? o.toUpperCase() : o.toLowerCase(),
        u = gd(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!lt(i)) return l();
            let v =
                typeof r.body == "string" ?
                r.body :
                r.body instanceof FormData || r.body instanceof URLSearchParams ?
                Array.from(r.body.entries()).reduce((E, w) => {
                    let [S, P] = w;
                    return (
                        "" +
                        E +
                        S +
                        "=" +
                        P +
                        `
`
                    );
                }, "") :
                String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: i,
                    formAction: u,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: v,
                },
            };
        } else if (r.formEncType === "application/json") {
            if (!lt(i)) return l();
            try {
                let v = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: i,
                        formAction: u,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: v,
                        text: void 0,
                    },
                };
            } catch {
                return l();
            }
        }
    }
    A(
        typeof FormData == "function",
        "FormData is not available in this environment"
    );
    let a, s;
    if (r.formData)(a = du(r.formData)), (s = r.formData);
    else if (r.body instanceof FormData)(a = du(r.body)), (s = r.body);
    else if (r.body instanceof URLSearchParams)(a = r.body), (s = Vs(a));
    else if (r.body == null)(a = new URLSearchParams()), (s = new FormData());
    else
        try {
            (a = new URLSearchParams(r.body)), (s = Vs(a));
        } catch {
            return l();
        }
    let p = {
        formMethod: i,
        formAction: u,
        formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
        formData: s,
        json: void 0,
        text: void 0,
    };
    if (lt(p.formMethod)) return { path: n, submission: p };
    let m = yt(n);
    return (
        t && m.search && ca(m.search) && a.append("index", ""),
        (m.search = "?" + a), { path: Cn(m), submission: p }
    );
}

function J0(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex((l) => l.route.id === t);
        r >= 0 && (n = e.slice(0, r));
    }
    return n;
}

function Fs(e, t, n, r, l, o, i, u, a, s, p, m, v, E) {
    let w = E ? Object.values(E)[0] : v ? Object.values(v)[0] : void 0,
        S = e.createURL(t.location),
        P = e.createURL(l),
        d = E ? Object.keys(E)[0] : void 0,
        h = J0(n, d).filter((k, L) => {
            if (k.route.lazy) return !0;
            if (k.route.loader == null) return !1;
            if (q0(t.loaderData, t.matches[L], k) || i.some((W) => W === k.route.id))
                return !0;
            let R = t.matches[L],
                T = k;
            return Is(
                k,
                te({
                        currentUrl: S,
                        currentParams: R.params,
                        nextUrl: P,
                        nextParams: T.params,
                    },
                    r, {
                        actionResult: w,
                        defaultShouldRevalidate: o ||
                            S.pathname + S.search === P.pathname + P.search ||
                            S.search !== P.search ||
                            yd(R, T),
                    }
                )
            );
        }),
        f = [];
    return (
        a.forEach((k, L) => {
            if (!n.some((ye) => ye.route.id === k.routeId)) return;
            let R = Bn(p, k.path, m);
            if (!R) {
                f.push({
                    key: L,
                    routeId: k.routeId,
                    path: k.path,
                    matches: null,
                    match: null,
                    controller: null,
                });
                return;
            }
            let T = t.fetchers.get(L),
                W = pu(R, k.path),
                F = !1;
            s.has(L) ?
                (F = !1) :
                u.includes(L) ?
                (F = !0) :
                T && T.state !== "idle" && T.data === void 0 ?
                (F = o) :
                (F = Is(
                    W,
                    te({
                            currentUrl: S,
                            currentParams: t.matches[t.matches.length - 1].params,
                            nextUrl: P,
                            nextParams: n[n.length - 1].params,
                        },
                        r, { actionResult: w, defaultShouldRevalidate: o }
                    )
                )),
                F &&
                f.push({
                    key: L,
                    routeId: k.routeId,
                    path: k.path,
                    matches: R,
                    match: W,
                    controller: new AbortController(),
                });
        }), [h, f]
    );
}

function q0(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        l = e[n.route.id] === void 0;
    return r || l;
}

function yd(e, t) {
    let n = e.route.path;
    return (
        e.pathname !== t.pathname ||
        (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
    );
}

function Is(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean") return n;
    }
    return t.defaultShouldRevalidate;
}
async function Us(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let l = n[e.id];
    A(l, "No route found in manifest");
    let o = {};
    for (let i in r) {
        let a = l[i] !== void 0 && i !== "hasErrorBoundary";
        En(!a,
            'Route "' +
            l.id +
            '" has a static property "' +
            i +
            '" defined but its lazy function is also returning a value for this property. ' +
            ('The lazy route property "' + i + '" will be ignored.')
        ), !a && !E0.has(i) && (o[i] = r[i]);
    }
    Object.assign(l, o), Object.assign(l, te({}, t(l), { lazy: void 0 }));
}
async function Er(e, t, n, r, l, o, i, u) {
    u === void 0 && (u = {});
    let a,
        s,
        p,
        m = (w) => {
            let S,
                P = new Promise((d, c) => (S = c));
            return (
                (p = () => S()),
                t.signal.addEventListener("abort", p),
                Promise.race([
                    w({ request: t, params: n.params, context: u.requestContext }),
                    P,
                ])
            );
        };
    try {
        let w = n.route[e];
        if (n.route.lazy)
            if (w) s = (await Promise.all([m(w), Us(n.route, o, l)]))[0];
            else if ((await Us(n.route, o, l), (w = n.route[e]), w)) s = await m(w);
        else if (e === "action") {
            let S = new URL(t.url),
                P = S.pathname + S.search;
            throw Ke(405, { method: t.method, pathname: P, routeId: n.route.id });
        } else return { type: se.data, data: void 0 };
        else if (w) s = await m(w);
        else {
            let S = new URL(t.url),
                P = S.pathname + S.search;
            throw Ke(404, { pathname: P });
        }
        A(
            s !== void 0,
            "You defined " +
            (e === "action" ? "an action" : "a loader") +
            " for route " +
            ('"' +
                n.route.id +
                "\" but didn't return anything from your `" +
                e +
                "` ") +
            "function. Please return a value or `null`."
        );
    } catch (w) {
        (a = se.error), (s = w);
    } finally {
        p && t.signal.removeEventListener("abort", p);
    }
    if (nm(s)) {
        let w = s.status;
        if (Q0.has(w)) {
            let d = s.headers.get("Location");
            if (
                (A(
                    d,
                    "Redirects returned/thrown from loaders/actions must have a Location header"
                ), !vd.test(d))
            )
                d = fu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d);
            else if (!u.isStaticRequest) {
                let c = new URL(t.url),
                    h = d.startsWith("//") ? new URL(c.protocol + d) : new URL(d),
                    f = ur(h.pathname, i) != null;
                h.origin === c.origin && f && (d = h.pathname + h.search + h.hash);
            }
            if (u.isStaticRequest) throw (s.headers.set("Location", d), s);
            return {
                type: se.redirect,
                status: w,
                location: d,
                revalidate: s.headers.get("X-Remix-Revalidate") !== null,
                reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null,
            };
        }
        if (u.isRouteRequest)
            throw { type: a === se.error ? se.error : se.data, response: s };
        let S,
            P = s.headers.get("Content-Type");
        return (
            P && /\bapplication\/json\b/.test(P) ?
            (S = await s.json()) :
            (S = await s.text()),
            a === se.error ?
            { type: a, error: new sa(w, s.statusText, S), headers: s.headers } :
            { type: se.data, data: S, statusCode: s.status, headers: s.headers }
        );
    }
    if (a === se.error) return { type: a, error: s };
    if (tm(s)) {
        var v, E;
        return {
            type: se.deferred,
            deferredData: s,
            statusCode: (v = s.init) == null ? void 0 : v.status,
            headers:
                ((E = s.init) == null ? void 0 : E.headers) &&
                new Headers(s.init.headers),
        };
    }
    return { type: se.data, data: s };
}

function Cr(e, t, n, r) {
    let l = e.createURL(gd(t)).toString(),
        o = { signal: n };
    if (r && lt(r.formMethod)) {
        let { formMethod: i, formEncType: u } = r;
        (o.method = i.toUpperCase()),
        u === "application/json" ?
            ((o.headers = new Headers({ "Content-Type": u })),
                (o.body = JSON.stringify(r.json))) :
            u === "text/plain" ?
            (o.body = r.text) :
            u === "application/x-www-form-urlencoded" && r.formData ?
            (o.body = du(r.formData)) :
            (o.body = r.formData);
    }
    return new Request(l, o);
}

function du(e) {
    let t = new URLSearchParams();
    for (let [n, r] of e.entries())
        t.append(n, typeof r == "string" ? r : r.name);
    return t;
}

function Vs(e) {
    let t = new FormData();
    for (let [n, r] of e.entries()) t.append(n, r);
    return t;
}

function b0(e, t, n, r, l) {
    let o = {},
        i = null,
        u,
        a = !1,
        s = {};
    return (
        n.forEach((p, m) => {
            let v = t[m].route.id;
            if (
                (A(!Xn(p), "Cannot handle redirect results in processLoaderData"),
                    Ir(p))
            ) {
                let E = $n(e, v),
                    w = p.error;
                r && ((w = Object.values(r)[0]), (r = void 0)),
                    (i = i || {}),
                    i[E.route.id] == null && (i[E.route.id] = w),
                    (o[v] = void 0),
                    a || ((a = !0), (u = hd(p.error) ? p.error.status : 500)),
                    p.headers && (s[v] = p.headers);
            } else
                pn(p) ?
                (l.set(v, p.deferredData), (o[v] = p.deferredData.data)) :
                (o[v] = p.data),
                p.statusCode != null &&
                p.statusCode !== 200 &&
                !a &&
                (u = p.statusCode),
                p.headers && (s[v] = p.headers);
        }),
        r && ((i = r), (o[Object.keys(r)[0]] = void 0)), { loaderData: o, errors: i, statusCode: u || 200, loaderHeaders: s }
    );
}

function Hs(e, t, n, r, l, o, i, u) {
    let { loaderData: a, errors: s } = b0(t, n, r, l, u);
    for (let p = 0; p < o.length; p++) {
        let { key: m, match: v, controller: E } = o[p];
        A(
            i !== void 0 && i[p] !== void 0,
            "Did not find corresponding fetcher result"
        );
        let w = i[p];
        if (!(E && E.signal.aborted))
            if (Ir(w)) {
                let S = $n(e.matches, v == null ? void 0 : v.route.id);
                (s && s[S.route.id]) || (s = te({}, s, {
                    [S.route.id]: w.error })),
                e.fetchers.delete(m);
            } else if (Xn(w)) A(!1, "Unhandled fetcher revalidation redirect");
        else if (pn(w)) A(!1, "Unhandled fetcher deferred data");
        else {
            let S = Mn(w.data);
            e.fetchers.set(m, S);
        }
    }
    return { loaderData: a, errors: s };
}

function As(e, t, n, r) {
    let l = te({}, t);
    for (let o of n) {
        let i = o.route.id;
        if (
            (t.hasOwnProperty(i) ?
                t[i] !== void 0 && (l[i] = t[i]) :
                e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
                r && r.hasOwnProperty(i))
        )
            break;
    }
    return l;
}

function $n(e, t) {
    return (
        (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
        .reverse()
        .find((r) => r.route.hasErrorBoundary === !0) || e[0]
    );
}

function Bs(e) {
    let t = e.find((n) => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__",
    };
    return {
        matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
        route: t,
    };
}

function Ke(e, t) {
    let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
        i = "Unknown Server Error",
        u = "Unknown @remix-run/router error";
    return (
        e === 400 ?
        ((i = "Bad Request"),
            l && n && r ?
            (u =
                "You made a " +
                l +
                ' request to "' +
                n +
                '" but ' +
                ('did not provide a `loader` for route "' + r + '", ') +
                "so there is no way to handle the request.") :
            o === "defer-action" ?
            (u = "defer() is not supported in actions") :
            o === "invalid-body" && (u = "Unable to encode submission body")) :
        e === 403 ?
        ((i = "Forbidden"),
            (u = 'Route "' + r + '" does not match URL "' + n + '"')) :
        e === 404 ?
        ((i = "Not Found"), (u = 'No route matches URL "' + n + '"')) :
        e === 405 &&
        ((i = "Method Not Allowed"),
            l && n && r ?
            (u =
                "You made a " +
                l.toUpperCase() +
                ' request to "' +
                n +
                '" but ' +
                ('did not provide an `action` for route "' + r + '", ') +
                "so there is no way to handle the request.") :
            l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
        new sa(e || 500, i, new Error(u), !0)
    );
}

function $s(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (Xn(n)) return { result: n, idx: t };
    }
}

function gd(e) {
    let t = typeof e == "string" ? yt(e) : e;
    return Cn(te({}, t, { hash: "" }));
}

function em(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ?
        !1 :
        e.hash === "" ?
        t.hash !== "" :
        e.hash === t.hash ?
        !0 :
        t.hash !== "";
}

function pn(e) {
    return e.type === se.deferred;
}

function Ir(e) {
    return e.type === se.error;
}

function Xn(e) {
    return (e && e.type) === se.redirect;
}

function tm(e) {
    let t = e;
    return (
        t &&
        typeof t == "object" &&
        typeof t.data == "object" &&
        typeof t.subscribe == "function" &&
        typeof t.cancel == "function" &&
        typeof t.resolveData == "function"
    );
}

function nm(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.headers == "object" &&
        typeof e.body < "u"
    );
}

function rm(e) {
    return W0.has(e.toLowerCase());
}

function lt(e) {
    return B0.has(e.toLowerCase());
}
async function Ws(e, t, n, r, l, o) {
    for (let i = 0; i < n.length; i++) {
        let u = n[i],
            a = t[i];
        if (!a) continue;
        let s = e.find((m) => m.route.id === a.route.id),
            p = s != null && !yd(s, a) && (o && o[a.route.id]) !== void 0;
        if (pn(u) && (l || p)) {
            let m = r[i];
            A(m, "Expected an AbortSignal for revalidating fetcher deferred result"),
                await wd(u, m, l).then((v) => {
                    v && (n[i] = v || n[i]);
                });
        }
    }
}
async function wd(e, t, n) {
    if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
        if (n)
            try {
                return { type: se.data, data: e.deferredData.unwrappedData };
            } catch (l) {
                return { type: se.error, error: l };
            }
        return { type: se.data, data: e.deferredData.data };
    }
}

function ca(e) {
    return new URLSearchParams(e).getAll("index").some((t) => t === "");
}

function lm(e, t) {
    let { route: n, pathname: r, params: l } = e;
    return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}

function pu(e, t) {
    let n = typeof t == "string" ? yt(t).search : t.search;
    if (e[e.length - 1].route.index && ca(n || "")) return e[e.length - 1];
    let r = To(e);
    return r[r.length - 1];
}

function Qs(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: l,
        formData: o,
        json: i,
    } = e;
    if (!(!t || !n || !r)) {
        if (l != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: l,
            };
        if (o != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: o,
                json: void 0,
                text: void 0,
            };
        if (i !== void 0)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: i,
                text: void 0,
            };
    }
}

function Ml(e, t) {
    return t ?
        {
            state: "loading",
            location: e,
            formMethod: t.formMethod,
            formAction: t.formAction,
            formEncType: t.formEncType,
            formData: t.formData,
            json: t.json,
            text: t.text,
        } :
        {
            state: "loading",
            location: e,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            json: void 0,
            text: void 0,
        };
}

function om(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
    };
}

function xr(e, t) {
    return e ?
        {
            state: "loading",
            formMethod: e.formMethod,
            formAction: e.formAction,
            formEncType: e.formEncType,
            formData: e.formData,
            json: e.json,
            text: e.text,
            data: t,
            " _hasFetcherDoneAnything ": !0,
        } :
        {
            state: "loading",
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            json: void 0,
            text: void 0,
            data: t,
            " _hasFetcherDoneAnything ": !0,
        };
}

function im(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0,
        " _hasFetcherDoneAnything ": !0,
    };
}

function Mn(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e,
        " _hasFetcherDoneAnything ": !0,
    };
}
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function po() {
    return (
        (po = Object.assign ?
            Object.assign.bind() :
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
        po.apply(this, arguments)
    );
}
const Do = C.createContext(null),
    Sd = C.createContext(null),
    ar = C.createContext(null),
    zo = C.createContext(null),
    _n = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    Ed = C.createContext(null);

function um(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    al() || A(!1);
    let { basename: r, navigator: l } = C.useContext(ar), { hash: o, pathname: i, search: u } = xd(e, { relative: n }),
        a = i;
    return (
        r !== "/" && (a = i === "/" ? r : Rt([r, i])),
        l.createHref({ pathname: a, search: u, hash: o })
    );
}

function al() {
    return C.useContext(zo) != null;
}

function Oo() {
    return al() || A(!1), C.useContext(zo).location;
}

function Cd(e) {
    C.useContext(ar).static || C.useLayoutEffect(e);
}

function am() {
    let { isDataRoute: e } = C.useContext(_n);
    return e ? Sm() : sm();
}

function sm() {
    al() || A(!1);
    let e = C.useContext(Do),
        { basename: t, navigator: n } = C.useContext(ar),
        { matches: r } = C.useContext(_n),
        { pathname: l } = Oo(),
        o = JSON.stringify(To(r).map((a) => a.pathnameBase)),
        i = C.useRef(!1);
    return (
        Cd(() => {
            i.current = !0;
        }),
        C.useCallback(
            function(a, s) {
                if ((s === void 0 && (s = {}), !i.current)) return;
                if (typeof a == "number") {
                    n.go(a);
                    return;
                }
                let p = aa(a, JSON.parse(o), l, s.relative === "path");
                e == null &&
                    t !== "/" &&
                    (p.pathname = p.pathname === "/" ? t : Rt([t, p.pathname])),
                    (s.replace ? n.replace : n.push)(p, s.state, s);
            }, [t, n, o, l, e]
        )
    );
}

function xd(e, t) {
    let { relative: n } = t === void 0 ? {} : t, { matches: r } = C.useContext(_n), { pathname: l } = Oo(),
        o = JSON.stringify(To(r).map((i) => i.pathnameBase));
    return C.useMemo(() => aa(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}

function cm(e, t, n) {
    al() || A(!1);
    let { navigator: r } = C.useContext(ar), { matches: l } = C.useContext(_n),
        o = l[l.length - 1],
        i = o ? o.params : {};
    o && o.pathname;
    let u = o ? o.pathnameBase : "/";
    o && o.route;
    let a = Oo(),
        s;
    if (t) {
        var p;
        let S = typeof t == "string" ? yt(t) : t;
        u === "/" || ((p = S.pathname) != null && p.startsWith(u)) || A(!1),
            (s = S);
    } else s = a;
    let m = s.pathname || "/",
        v = u === "/" ? m : m.slice(u.length) || "/",
        E = Bn(e, { pathname: v }),
        w = mm(
            E &&
            E.map((S) =>
                Object.assign({}, S, {
                    params: Object.assign({}, i, S.params),
                    pathname: Rt([
                        u,
                        r.encodeLocation ?
                        r.encodeLocation(S.pathname).pathname :
                        S.pathname,
                    ]),
                    pathnameBase: S.pathnameBase === "/" ?
                        u :
                        Rt([
                            u,
                            r.encodeLocation ?
                            r.encodeLocation(S.pathnameBase).pathname :
                            S.pathnameBase,
                        ]),
                })
            ),
            l,
            n
        );
    return t && w ?
        C.createElement(
            zo.Provider, {
                value: {
                    location: po({
                            pathname: "/",
                            search: "",
                            hash: "",
                            state: null,
                            key: "default",
                        },
                        s
                    ),
                    navigationType: de.Pop,
                },
            },
            w
        ) :
        w;
}

function fm() {
    let e = wm(),
        t = hd(e) ?
        e.status + " " + e.statusText :
        e instanceof Error ?
        e.message :
        JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
        o = null;
    return C.createElement(
        C.Fragment,
        null,
        C.createElement("h2", null, "Unexpected Application Error!"),
        C.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? C.createElement("pre", { style: l }, n) : null,
        o
    );
}
const dm = C.createElement(fm, null);
class pm extends C.Component {
    constructor(t) {
        super(t),
            (this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error,
            });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ||
            (n.revalidation !== "idle" && t.revalidation === "idle") ?
            { error: t.error, location: t.location, revalidation: t.revalidation } :
            {
                error: t.error || n.error,
                location: n.location,
                revalidation: t.revalidation || n.revalidation,
            };
    }
    componentDidCatch(t, n) {
        console.error(
            "React Router caught the following error during render",
            t,
            n
        );
    }
    render() {
        return this.state.error ?
            C.createElement(
                _n.Provider, { value: this.props.routeContext },
                C.createElement(Ed.Provider, {
                    value: this.state.error,
                    children: this.props.component,
                })
            ) :
            this.props.children;
    }
}

function hm(e) {
    let { routeContext: t, match: n, children: r } = e,
    l = C.useContext(Do);
    return (
        l &&
        l.static &&
        l.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (l.staticContext._deepestRenderedBoundaryId = n.route.id),
        C.createElement(_n.Provider, { value: t }, r)
    );
}

function mm(e, t, n) {
    var r;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
        var l;
        if ((l = n) != null && l.errors) e = n.matches;
        else return null;
    }
    let o = e,
        i = (r = n) == null ? void 0 : r.errors;
    if (i != null) {
        let u = o.findIndex(
            (a) => a.route.id && (i == null ? void 0 : i[a.route.id])
        );
        u >= 0 || A(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
    }
    return o.reduceRight((u, a, s) => {
        let p = a.route.id ? (i == null ? void 0 : i[a.route.id]) : null,
            m = null;
        n && (m = a.route.errorElement || dm);
        let v = t.concat(o.slice(0, s + 1)),
            E = () => {
                let w;
                return (
                    p ?
                    (w = m) :
                    a.route.Component ?
                    (w = C.createElement(a.route.Component, null)) :
                    a.route.element ?
                    (w = a.route.element) :
                    (w = u),
                    C.createElement(hm, {
                        match: a,
                        routeContext: { outlet: u, matches: v, isDataRoute: n != null },
                        children: w,
                    })
                );
            };
        return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0) ?
            C.createElement(pm, {
                location: n.location,
                revalidation: n.revalidation,
                component: m,
                error: p,
                children: E(),
                routeContext: { outlet: null, matches: v, isDataRoute: !0 },
            }) :
            E();
    }, null);
}
var kd = (function(e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
        );
    })(kd || {}),
    ho = (function(e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
        );
    })(ho || {});

function vm(e) {
    let t = C.useContext(Do);
    return t || A(!1), t;
}

function ym(e) {
    let t = C.useContext(Sd);
    return t || A(!1), t;
}

function gm(e) {
    let t = C.useContext(_n);
    return t || A(!1), t;
}

function _d(e) {
    let t = gm(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || A(!1), n.route.id;
}

function wm() {
    var e;
    let t = C.useContext(Ed),
        n = ym(ho.UseRouteError),
        r = _d(ho.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r]);
}

function Sm() {
    let { router: e } = vm(kd.UseNavigateStable),
        t = _d(ho.UseNavigateStable),
        n = C.useRef(!1);
    return (
        Cd(() => {
            n.current = !0;
        }),
        C.useCallback(
            function(l, o) {
                o === void 0 && (o = {}),
                    n.current &&
                    (typeof l == "number" ?
                        e.navigate(l) :
                        e.navigate(l, po({ fromRouteId: t }, o)));
            }, [e, t]
        )
    );
}
const Em = "startTransition",
    Zs = tp[Em];

function Cm(e) {
    let { fallbackElement: t, router: n, future: r } = e, [l, o] = C.useState(n.state), { v7_startTransition: i } = r || {},
        u = C.useCallback(
            (m) => {
                i && Zs ? Zs(() => o(m)) : o(m);
            }, [o, i]
        );
    C.useLayoutEffect(() => n.subscribe(u), [n, u]);
    let a = C.useMemo(
            () => ({
                createHref: n.createHref,
                encodeLocation: n.encodeLocation,
                go: (m) => n.navigate(m),
                push: (m, v, E) =>
                    n.navigate(m, {
                        state: v,
                        preventScrollReset: E == null ? void 0 : E.preventScrollReset,
                    }),
                replace: (m, v, E) =>
                    n.navigate(m, {
                        replace: !0,
                        state: v,
                        preventScrollReset: E == null ? void 0 : E.preventScrollReset,
                    }),
            }), [n]
        ),
        s = n.basename || "/",
        p = C.useMemo(
            () => ({ router: n, navigator: a, static: !1, basename: s }), [n, a, s]
        );
    return C.createElement(
        C.Fragment,
        null,
        C.createElement(
            Do.Provider, { value: p },
            C.createElement(
                Sd.Provider, { value: l },
                C.createElement(
                    km, {
                        basename: s,
                        location: l.location,
                        navigationType: l.historyAction,
                        navigator: a,
                    },
                    l.initialized ?
                    C.createElement(xm, { routes: n.routes, state: l }) :
                    t
                )
            )
        ),
        null
    );
}

function xm(e) {
    let { routes: t, state: n } = e;
    return cm(t, void 0, n);
}

function km(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = de.Pop,
        navigator: o,
        static: i = !1,
    } = e;
    al() && A(!1);
    let u = t.replace(/^\/*/, "/"),
        a = C.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
    typeof r == "string" && (r = yt(r));
    let {
        pathname: s = "/",
        search: p = "",
        hash: m = "",
        state: v = null,
        key: E = "default",
    } = r,
    w = C.useMemo(() => {
        let S = ur(s, u);
        return S == null ?
            null :
            {
                location: { pathname: S, search: p, hash: m, state: v, key: E },
                navigationType: l,
            };
    }, [u, s, p, m, v, E, l]);
    return w == null ?
        null :
        C.createElement(
            ar.Provider, { value: a },
            C.createElement(zo.Provider, { children: n, value: w })
        );
}
new Promise(() => {});

function _m(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
    };
    return (
        e.Component &&
        Object.assign(t, {
            element: C.createElement(e.Component),
            Component: void 0,
        }),
        e.ErrorBoundary &&
        Object.assign(t, {
            errorElement: C.createElement(e.ErrorBoundary),
            ErrorBoundary: void 0,
        }),
        t
    );
}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function nl() {
    return (
        (nl = Object.assign ?
            Object.assign.bind() :
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
        nl.apply(this, arguments)
    );
}

function Rm(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        l,
        o;
    for (o = 0; o < r.length; o++)
        (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n;
}

function Lm(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}

function Pm(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Lm(e);
}
const Mm = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
];

function Nm(e, t) {
    return G0({
        basename: t == null ? void 0 : t.basename,
        future: nl({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
        history: g0({ window: t == null ? void 0 : t.window }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || Tm(),
        routes: e,
        mapRouteProperties: _m,
    }).initialize();
}

function Tm() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = nl({}, t, { errors: Dm(t.errors) })), t;
}

function Dm(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, l] of t)
        if (l && l.__type === "RouteErrorResponse")
            n[r] = new sa(l.status, l.statusText, l.data, l.internal === !0);
        else if (l && l.__type === "Error") {
        if (l.__subType) {
            let o = window[l.__subType];
            if (typeof o == "function")
                try {
                    let i = new o(l.message);
                    (i.stack = ""), (n[r] = i);
                } catch {}
        }
        if (n[r] == null) {
            let o = new Error(l.message);
            (o.stack = ""), (n[r] = o);
        }
    } else n[r] = l;
    return n;
}
const zm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
    Om = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    u1 = C.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: l,
            reloadDocument: o,
            replace: i,
            state: u,
            target: a,
            to: s,
            preventScrollReset: p,
        } = t,
        m = Rm(t, Mm), { basename: v } = C.useContext(ar),
            E,
            w = !1;
        if (typeof s == "string" && Om.test(s) && ((E = s), zm))
            try {
                let c = new URL(window.location.href),
                    h = s.startsWith("//") ? new URL(c.protocol + s) : new URL(s),
                    f = ur(h.pathname, v);
                h.origin === c.origin && f != null ?
                    (s = f + h.search + h.hash) :
                    (w = !0);
            } catch {}
        let S = um(s, { relative: l }),
            P = jm(s, {
                replace: i,
                state: u,
                target: a,
                preventScrollReset: p,
                relative: l,
            });

        function d(c) {
            r && r(c), c.defaultPrevented || P(c);
        }
        return C.createElement(
            "a",
            nl({}, m, { href: E || S, onClick: w || o ? r : d, ref: n, target: a })
        );
    });
var Ks;
(function(e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Ks || (Ks = {}));
var Ys;
(function(e) {
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ys || (Ys = {}));

function jm(e, t) {
    let {
        target: n,
        replace: r,
        state: l,
        preventScrollReset: o,
        relative: i,
    } = t === void 0 ? {} : t,
        u = am(),
        a = Oo(),
        s = xd(e, { relative: i });
    return C.useCallback(
        (p) => {
            if (Pm(p, n)) {
                p.preventDefault();
                let m = r !== void 0 ? r : Cn(a) === Cn(s);
                u(e, { replace: m, state: l, preventScrollReset: o, relative: i });
            }
        }, [a, u, s, r, l, n, e, o, i]
    );
}
const Fm = /\/$|\/\?|\/#/,
    Im = /^\.?\//;

function Um(e = "", t) {
    return t ? Fm.test(e) : e.endsWith("/");
}

function Vm(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (Um(e, !0)) return e || "/";
    let n = e,
        r = "";
    const l = e.indexOf("#");
    if (l >= 0 && ((n = e.slice(0, l)), (r = e.slice(l)), !n)) return r;
    const [o, ...i] = n.split("?");
    return o + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r;
}

function Hm(e) {
    return e && e !== "/";
}

function Am(e, ...t) {
    let n = e || "";
    for (const r of t.filter((l) => Hm(l)))
        if (n) {
            const l = r.replace(Im, "");
            n = Vm(n) + l;
        } else n = r;
    return n;
}
const Bm = (e) =>
    C.createElement(
        "svg", {
            width: 112,
            height: 92,
            viewBox: "0 0 112 92",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
        },
        C.createElement("path", {
            d: "M3.72949 56.1357L3.37793 55.8281L4.85449 53.9385C5.38184 54.3545 5.90625 54.7734 6.42773 55.1953C6.94922 55.6172 7.42383 56.0537 7.85156 56.5049C8.28516 56.9561 8.63086 57.4307 8.88867 57.9287C9.14648 58.4268 9.27539 58.957 9.27539 59.5195C9.27539 60.2344 9.11719 60.8496 8.80078 61.3652C8.48438 61.8809 8.04785 62.2764 7.49121 62.5518C6.93457 62.8271 6.2959 62.9648 5.5752 62.9648C4.3623 62.9648 3.43945 62.6689 2.80664 62.0771C2.17969 61.4795 1.86621 60.7324 1.86621 59.8359C1.86621 59.1035 2.04492 58.4531 2.40234 57.8848C2.76562 57.3105 3.20801 56.7275 3.72949 56.1357ZM7.03418 59.5371C7.03418 59.3496 6.94922 59.1416 6.7793 58.9131C6.61523 58.6787 6.41016 58.4502 6.16406 58.2275C5.92383 58.0049 5.69238 57.8086 5.46973 57.6387C5.26465 57.8203 5.05664 58.0283 4.8457 58.2627C4.64062 58.4971 4.46777 58.7314 4.32715 58.9658C4.18652 59.2002 4.11621 59.4141 4.11621 59.6074C4.11621 59.877 4.24512 60.0879 4.50293 60.2402C4.7666 60.3867 5.12109 60.46 5.56641 60.46C6.54492 60.46 7.03418 60.1523 7.03418 59.5371ZM11.1738 50.5898H13.582V58.7109C13.582 59.332 13.6699 59.7803 13.8457 60.0557C14.0215 60.3252 14.3936 60.46 14.9619 60.46H15.1729V63H14.9619C13.6494 63 12.6885 62.6602 12.0791 61.9805C11.4756 61.3008 11.1738 60.2812 11.1738 58.9219V50.5898ZM14.8301 60.46H20.1475V63H14.8301V60.46ZM19.8047 60.46H25.1221V63H19.8047V60.46ZM24.7793 60.46H30.0967V63H24.7793V60.46ZM29.7539 60.46H35.0713V63H29.7539V60.46ZM35.4053 52.4795V51.1436L42.5508 48.2344V49.5703L35.4053 52.4795ZM37.9102 54.8789C38.6953 55.3477 39.3896 55.8076 39.9932 56.2588C40.6025 56.7041 41.0801 57.1846 41.4258 57.7002C41.7715 58.2158 41.9443 58.8105 41.9443 59.4844C41.9443 60.4043 41.7334 61.1191 41.3115 61.6289C40.8896 62.1387 40.2979 62.4961 39.5361 62.7012C38.7744 62.9004 37.8867 63 36.873 63H34.7461V60.46H36.8643C37.8018 60.46 38.5049 60.3955 38.9736 60.2666C39.4424 60.1318 39.6768 59.8594 39.6768 59.4492C39.6768 59.2559 39.5332 59.0332 39.2461 58.7812C38.959 58.5234 38.5986 58.2539 38.165 57.9727C37.7373 57.6855 37.2979 57.4043 36.8467 57.1289C36.4014 56.8477 36.0146 56.5898 35.6865 56.3555C35.4404 56.1797 35.2529 55.9482 35.124 55.6611C34.9951 55.374 34.9307 55.0781 34.9307 54.7734C34.9307 54.4453 35.0068 54.1348 35.1592 53.8418C35.3174 53.5488 35.5576 53.3379 35.8799 53.209L42.665 50.4404V52.9541L37.9102 54.8789ZM41.7598 67.7988L40.8633 65.4434C41.7129 65.2617 42.4424 65.0186 43.0518 64.7139C43.667 64.415 44.1416 64.0137 44.4756 63.5098C44.8096 63.0059 44.9766 62.3555 44.9766 61.5586C44.9766 61.0254 44.8916 60.4277 44.7217 59.7656C44.5518 59.0977 44.3701 58.4766 44.1768 57.9023L46.5498 57.1377C46.7783 57.7764 46.9512 58.4648 47.0684 59.2031C47.1914 59.9414 47.2529 60.6504 47.2529 61.3301C47.2529 62.5605 47.0244 63.6152 46.5674 64.4941C46.1162 65.3789 45.4775 66.0938 44.6514 66.6387C43.8311 67.1895 42.8672 67.5762 41.7598 67.7988ZM51.0322 60.4863C51.5127 60.4863 51.9814 60.4541 52.4385 60.3896C52.9014 60.3193 53.2822 60.1904 53.5811 60.0029C53.8857 59.8154 54.0381 59.543 54.0381 59.1855C54.0381 58.8164 53.8594 58.4238 53.502 58.0078C53.1504 57.5859 52.6816 57.1729 52.0957 56.7686C51.5156 56.3643 50.8828 56.001 50.1973 55.6787L51.2783 53.3936C51.8994 53.6982 52.5059 54.041 53.0977 54.4219C53.6953 54.7969 54.2314 55.2158 54.7061 55.6787C55.1865 56.1416 55.5674 56.6543 55.8486 57.2168C56.1357 57.7793 56.2793 58.4004 56.2793 59.0801C56.2793 60.0176 56.0654 60.7734 55.6377 61.3477C55.2158 61.9219 54.6211 62.3379 53.8535 62.5957C53.0859 62.8535 52.1895 62.9824 51.1641 62.9824C50.6953 62.9824 50.2588 62.9678 49.8545 62.9385C49.4502 62.9033 49.0547 62.8418 48.668 62.7539V60.2227C49.0488 60.2988 49.4561 60.3633 49.8896 60.416C50.3291 60.4629 50.71 60.4863 51.0322 60.4863ZM0.240234 81.46H5.55762V84H0.240234V81.46ZM5.21484 81.46H10.5322V84H5.21484V81.46ZM10.1895 81.46H15.5068V84H10.1895V81.46ZM15.1641 81.46H20.4814V84H15.1641V81.46ZM20.1387 81.46H25.4561V84H20.1387V81.46ZM25.1133 81.46H30.4307V84H25.1133V81.46ZM30.0879 81.46H35.4053V84H30.0879V81.46ZM35.0625 81.46H40.3799V84H35.0625V81.46ZM40.0371 81.46H45.3545V84H40.0371V81.46ZM45.9346 73.2246L47.4287 74.7012L48.9053 73.2246L50.4082 74.7188L48.9053 76.2305L47.4287 74.7363L45.9346 76.2305L44.4404 74.7188L45.9346 73.2246ZM45.0117 81.46H46.2422C46.8867 81.46 47.3291 81.3223 47.5693 81.0469C47.8154 80.7656 47.9385 80.332 47.9385 79.7461C47.9385 79.4004 47.9297 79.0664 47.9121 78.7441C47.8945 78.416 47.874 78.0967 47.8506 77.7861L50.0479 77.5137L50.2236 80.0273C50.2529 80.4727 50.376 80.8242 50.5928 81.082C50.8096 81.334 51.1553 81.46 51.6299 81.46H51.8057V84H51.6123C51.0264 84 50.5225 83.8945 50.1006 83.6836C49.6846 83.4727 49.3418 83.1973 49.0723 82.8574C48.7148 83.2148 48.29 83.4961 47.7979 83.7012C47.3115 83.9004 46.793 84 46.2422 84H45.0117V81.46ZM52.4473 84H51.4717V81.46H52.4297C52.9453 81.46 53.3379 81.3721 53.6074 81.1963C53.877 81.0146 54.0117 80.6514 54.0117 80.1064C54.0117 79.7783 53.9766 79.3564 53.9062 78.8408C53.8359 78.3193 53.7129 77.7217 53.5371 77.0479L55.8135 76.4326C55.9658 77.0361 56.0801 77.6162 56.1562 78.1729C56.2324 78.7295 56.2705 79.2686 56.2705 79.79C56.2705 80.6396 56.1475 81.3809 55.9014 82.0137C55.6611 82.6465 55.2598 83.1357 54.6973 83.4814C54.1406 83.8271 53.3906 84 52.4473 84ZM53.8975 72.3721L55.4795 73.9541L53.8975 75.5273L52.3242 73.9541L53.8975 72.3721Z",
            fill: "#F05750",
        }),
        C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M64.0031 24.4499C64.2069 12.0167 74.4249 2 87 2C99.575 2 109.793 12.0167 109.997 24.4499H110V90H64V24.8288V24.4499H64.0031Z",
            fill: "url(#paint0_linear_4_352)",
        }),
        C.createElement("path", {
            d: "M64.0031 24.4499V25.9499H65.4787L65.5029 24.4745L64.0031 24.4499ZM109.997 24.4499L108.497 24.4745L108.521 25.9499H109.997V24.4499ZM110 24.4499H111.5V22.9499H110V24.4499ZM110 90V91.5H111.5V90H110ZM64 90H62.5V91.5H64V90ZM64 24.4499V22.9499H62.5V24.4499H64ZM65.5029 24.4745C65.6932 12.869 75.2348 3.5 87 3.5V0.5C73.6151 0.5 62.7207 11.1644 62.5033 24.4254L65.5029 24.4745ZM87 3.5C98.7652 3.5 108.307 12.869 108.497 24.4745L111.497 24.4254C111.279 11.1644 100.385 0.5 87 0.5V3.5ZM109.997 25.9499H110V22.9499H109.997V25.9499ZM108.5 24.4499V90H111.5V24.4499H108.5ZM110 88.5H64V91.5H110V88.5ZM65.5 90V24.8288H62.5V90H65.5ZM65.5 24.8288V24.4499H62.5V24.8288H65.5ZM64 25.9499H64.0031V22.9499H64V25.9499Z",
            fill: "#F05750",
        }),
        C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M64.0031 24.4499C64.2069 12.0167 74.4249 2 87 2C99.575 2 109.793 12.0167 109.997 24.4499H110V90H64V24.8288V24.4499H64.0031Z",
            fill: "url(#paint1_linear_4_352)",
        }),
        C.createElement("path", {
            d: "M64.0031 24.4499V24.9499H64.495L64.503 24.4581L64.0031 24.4499ZM109.997 24.4499L109.497 24.4581L109.505 24.9499H109.997V24.4499ZM110 24.4499H110.5V23.9499H110V24.4499ZM110 90V90.5H110.5V90H110ZM64 90H63.5V90.5H64V90ZM64 24.4499V23.9499H63.5V24.4499H64ZM64.503 24.4581C64.7024 12.3008 74.6949 2.5 87 2.5V1.5C74.155 1.5 63.7115 11.7326 63.5032 24.4417L64.503 24.4581ZM87 2.5C99.3051 2.5 109.298 12.3008 109.497 24.4581L110.497 24.4417C110.288 11.7326 99.845 1.5 87 1.5V2.5ZM109.997 24.9499H110V23.9499H109.997V24.9499ZM109.5 24.4499V90H110.5V24.4499H109.5ZM110 89.5H64V90.5H110V89.5ZM64.5 90V24.8288H63.5V90H64.5ZM64.5 24.8288V24.4499H63.5V24.8288H64.5ZM64 24.9499H64.0031V23.9499H64V24.9499Z",
            fill: "#FCF7F7",
        }),
        C.createElement("path", {
            d: "M92.6308 80.93L65.4316 88.9108V25.2048C65.4316 21.182 66.0793 19.3385 66.8155 17.2509C67.7674 14.5512 68.962 13.2395 69.7262 12.7041C69.7262 12.7041 80.036 13.56 85.7074 18.8247C93.0349 25.6267 92.6308 36.9789 92.6308 46.9769V80.93Z",
            fill: "#FCF7F7",
        }),
        C.createElement("ellipse", {
            cx: 88.5747,
            cy: 52.2046,
            rx: 1.57469,
            ry: 1.51561,
            fill: "#181818",
        }),
        C.createElement("path", {
            d: "M109.332 89.3368L92.6306 80.9536L65.4315 88.9106L64.668 89.3368H109.332Z",
            fill: "#B02221",
        }),
        C.createElement(
            "defs",
            null,
            C.createElement(
                "linearGradient", {
                    id: "paint0_linear_4_352",
                    x1: 87,
                    y1: 2,
                    x2: 87,
                    y2: 90,
                    gradientUnits: "userSpaceOnUse",
                },
                C.createElement("stop", { stopColor: "#FB715D" }),
                C.createElement("stop", { offset: 1, stopColor: "#D12929" })
            ),
            C.createElement(
                "linearGradient", {
                    id: "paint1_linear_4_352",
                    x1: 87,
                    y1: 2,
                    x2: 87,
                    y2: 90,
                    gradientUnits: "userSpaceOnUse",
                },
                C.createElement("stop", { stopColor: "#FB715D" }),
                C.createElement("stop", { offset: 1, stopColor: "#D12929" })
            )
        )
    ),
    $m = () =>
    B.jsxs("div", {
        className: "flex justify-between items-end",
        children: [B.jsx(Bm, {}), B.jsx("div", {})],
    });
const Gs = C.lazy(() =>
        Me(
            () =>
            import ("./App-797311a9.js"), [
                "assets/App-797311a9.js",
                "assets/date-f41ba057.js",
                "assets/android-0066d14e.js",
                "assets/apple-9aa2c045.js",
                "assets/linux-a286713f.js",
                "assets/windows-838706e6.js",
                "assets/Button-691dff5a.js",
            ]
        )
    ),
    Wm = C.lazy(() =>
        Me(
            () =>
            import ("./android-a46cc6d0.js"), [
                "assets/android-a46cc6d0.js",
                "assets/android-0066d14e.js",
                "assets/Button-691dff5a.js",
                "assets/ArrowRightIcon-fa5ca480.js",
            ]
        )
    ),
    Qm = C.lazy(() =>
        Me(
            () =>
            import ("./android-v2rayng-4dbcb471.js"), [
                "assets/android-v2rayng-4dbcb471.js",
                "assets/android-0066d14e.js",
                "assets/Button-691dff5a.js",
                "assets/Stepper-7e9b872f.js",
                "assets/ArrowRightIcon-fa5ca480.js",
                "assets/PlusIcon-924f7733.js",
                "assets/EllipsisVerticalIcon-2ca9b24a.js",
            ]
        )
    ),
    Zm = C.lazy(() =>
        Me(
            () =>
            import ("./android-singbox-a1292115.js"), [
                "assets/android-singbox-a1292115.js",
                "assets/android-0066d14e.js",
                "assets/Button-691dff5a.js",
                "assets/Stepper-7e9b872f.js",
                "assets/ArrowRightIcon-fa5ca480.js",
                "assets/PlusIcon-924f7733.js",
            ]
        )
    ),
    Km = C.lazy(() =>
        Me(
            () =>
            import ("./apple-5b450dce.js"), [
                "assets/apple-5b450dce.js",
                "assets/apple-9aa2c045.js",
                "assets/Button-691dff5a.js",
                "assets/Stepper-7e9b872f.js",
                "assets/ArrowRightIcon-fa5ca480.js",
                "assets/PlusIcon-924f7733.js",
            ]
        )
    ),
    Ym = C.lazy(() =>
        Me(
            () =>
            import ("./windows-2709d8d3.js"), [
                "assets/windows-2709d8d3.js",
                "assets/windows-838706e6.js",
                "assets/Button-691dff5a.js",
                "assets/Stepper-7e9b872f.js",
                "assets/ArrowRightIcon-fa5ca480.js",
                "assets/PlusIcon-924f7733.js",
            ]
        )
    ),
    Gm = C.lazy(() =>
        Me(
            () =>
            import ("./linux-2b64a489.js"), [
                "assets/linux-2b64a489.js",
                "assets/linux-a286713f.js",
                "assets/Button-691dff5a.js",
                "assets/Stepper-7e9b872f.js",
                "assets/ArrowRightIcon-fa5ca480.js",
                "assets/PlusIcon-924f7733.js",
            ]
        )
    ),
    Xm = C.lazy(() =>
        Me(
            () =>
            import ("./configs-d3440dda.js"), [
                "assets/configs-d3440dda.js",
                "assets/Button-691dff5a.js",
                "assets/ArrowRightIcon-fa5ca480.js",
            ]
        )
    ),
    Jm = C.lazy(() =>
        Me(
            () =>
            import ("./index-2c0884e2.js"), [
                "assets/index-2c0884e2.js",
                "assets/date-f41ba057.js",
                "assets/android-0066d14e.js",
                "assets/apple-9aa2c045.js",
                "assets/linux-a286713f.js",
                "assets/windows-838706e6.js",
            ]
        )
    ),
    qm = C.lazy(() =>
        Me(
            () =>
            import ("./android-cb7a5790.js"), [
                "assets/android-cb7a5790.js",
                "assets/android-0066d14e.js",
                "assets/Button-691dff5a.js",
                "assets/ArrowRightIcon-fa5ca480.js",
            ]
        )
    ),
    bm = C.lazy(() =>
        Me(
            () =>
            import ("./android-singbox-57f45dd8.js"), [
                "assets/android-singbox-57f45dd8.js",
                "assets/android-0066d14e.js",
                "assets/Button-691dff5a.js",
                "assets/Stepper-7e9b872f.js",
                "assets/ArrowRightIcon-fa5ca480.js",
            ]
        )
    ),
    e1 = C.lazy(() =>
        Me(
            () =>
            import ("./android-v2rayng-b3061fdc.js"), [
                "assets/android-v2rayng-b3061fdc.js",
                "assets/android-0066d14e.js",
                "assets/Button-691dff5a.js",
                "assets/Stepper-7e9b872f.js",
                "assets/ArrowRightIcon-fa5ca480.js",
                "assets/EllipsisVerticalIcon-2ca9b24a.js",
            ]
        )
    ),
    t1 = C.lazy(() =>
        Me(
            () =>
            import ("./apple-4bc8a7a1.js"), [
                "assets/apple-4bc8a7a1.js",
                "assets/apple-9aa2c045.js",
                "assets/Button-691dff5a.js",
                "assets/Stepper-7e9b872f.js",
                "assets/ArrowRightIcon-fa5ca480.js",
            ]
        )
    ),
    n1 = C.lazy(() =>
        Me(
            () =>
            import ("./windows-a3d49159.js"), [
                "assets/windows-a3d49159.js",
                "assets/windows-838706e6.js",
                "assets/Button-691dff5a.js",
                "assets/Stepper-7e9b872f.js",
                "assets/ArrowRightIcon-fa5ca480.js",
                "assets/PlusIcon-924f7733.js",
            ]
        )
    ),
    r1 = C.lazy(() =>
        Me(
            () =>
            import ("./linux-0e646ef0.js"), [
                "assets/linux-0e646ef0.js",
                "assets/linux-a286713f.js",
                "assets/Button-691dff5a.js",
                "assets/Stepper-7e9b872f.js",
                "assets/ArrowRightIcon-fa5ca480.js",
                "assets/PlusIcon-924f7733.js",
            ]
        )
    ),
    l1 = C.lazy(() => Me(() =>
        import ("./index-46d236ab.js"), [])),
    He = {
        h1: (e) =>
            B.jsx("h1", {
                ...e,
                className: _a(
                    e.className,
                    "text-primary dark:text-primary-dark py-2 font-semibold"
                ),
            }),
        p: (e) =>
            B.jsx("p", {
                ...e,
                className: _a(
                    e.className,
                    "pb-4 leading-relaxed dark:text-slate-200 text-black"
                ),
            }),
        Spacer: () => B.jsx("div", { className: "py-4" }),
    },
    Ut = async() =>
    window.user ?
    window.user :
    fetch(Am(window.location.pathname, "/info"))
    .then((e) => e.json())
    .then((e) => ((window.user = e), e)),
    Vt = B.jsxs("div", {
        className: "flex flex-col justify-center text-center items-center text-white gap-2",
        children: [
            B.jsx(pp, { width: "50px" }),
            B.jsx("p", {
                className: "font-bold",
                children: "مشکلی در اتصال به سرور پیش آمده است.",
            }),
            B.jsx("p", {
                className: "opacity-80 text-sm",
                children: "در صورت برطرف نشدن مشکل، لطفا به پشتیبانی پیام دهید.",
            }),
        ],
    }),
    o1 = Nm([
        { path: "/", loader: Ut, errorElement: Vt, element: B.jsx(Gs, {}) },
        { path: "how-to-update", element: B.jsx(Jm, {}) },
        {
            path: "how-to-update/android",
            index: !0,
            element: B.jsx(qm, { components: He }),
        },
        {
            path: "how-to-update/android-singbox",
            index: !0,
            element: B.jsx(bm, { components: He }),
        },
        {
            path: "how-to-update/android-v2rayng",
            index: !0,
            element: B.jsx(e1, { components: He }),
        },
        {
            path: "how-to-update/apple",
            index: !0,
            element: B.jsx(t1, { components: He }),
        },
        {
            path: "how-to-update/windows",
            index: !0,
            element: B.jsx(n1, { components: He }),
        },
        {
            path: "how-to-update/linux",
            index: !0,
            element: B.jsx(r1, { components: He }),
        },
        {
            path: "tutorial-android",
            element: B.jsx(Wm, { components: He }),
            loader: Ut,
            errorElement: Vt,
        },
        {
            path: "tutorial-android-singbox",
            element: B.jsx(Zm, { components: He }),
            loader: Ut,
            errorElement: Vt,
        },
        {
            path: "tutorial-android-v2rayng",
            element: B.jsx(Qm, { components: He }),
            loader: Ut,
            errorElement: Vt,
        },
        {
            path: "tutorial-apple",
            element: B.jsx(Km, { components: He }),
            loader: Ut,
            errorElement: Vt,
        },
        {
            path: "tutorial-windows",
            element: B.jsx(Ym, { components: He }),
            loader: Ut,
            errorElement: Vt,
        },
        {
            path: "tutorial-linux",
            element: B.jsx(Gm, { components: He }),
            loader: Ut,
            errorElement: Vt,
        },
        {
            path: "configs",
            element: B.jsx(Xm, { components: He }),
            loader: Ut,
            errorElement: Vt,
        },
        { path: "faq", element: B.jsx(l1, {}) },
        { path: "*", element: B.jsx(Gs, {}) },
    ]);
yi.createRoot(document.getElementById("root")).render(
    B.jsx(oc.StrictMode, {
        children: B.jsxs("div", {
            className: "max-w-[450px] mx-auto py-4 px-4 bg-white dark:bg-neutral-900 h-full flex-grow w-full",
            children: [
                B.jsx($m, {}),
                B.jsx("div", {
                    className: "py-8",
                    children: B.jsx(C.Suspense, {
                        fallback: B.jsxs("div", {
                            className: "mx-auto flex flex-col items-center justify-center  text-primary dark:text-primary-dark",
                            children: [
                                B.jsx(cp, { className: "animate-spin w-[24px] py-4" }),
                                B.jsx("span", { children: "درحال بارگذاری..." }),
                            ],
                        }),
                        children: B.jsx(Cm, { router: o1 }),
                    }),
                }),
            ],
        }),
    })
);
export { u1 as L, oc as R, i1 as a, _a as c, Vd as g, B as j, C as r };