import { r as C, R as O, j as g } from "./index-09a1fc96.js";
import { B as I } from "./Button-691dff5a.js";
import { A as K } from "./ArrowRightIcon-fa5ca480.js";

function J({ title: o, titleId: e, ...a }, i) {
    return C.createElement(
        "svg",
        Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": e,
            },
            a
        ),
        o ? C.createElement("title", { id: e }, o) : null,
        C.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4.5 12.75l6 6 9-13.5",
        })
    );
}
const Z = C.forwardRef(J),
    q = Z;

function ee({ title: o, titleId: e, ...a }, i) {
    return C.createElement(
        "svg",
        Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": e,
            },
            a
        ),
        o ? C.createElement("title", { id: e }, o) : null,
        C.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184",
        })
    );
}
const te = C.forwardRef(ee),
    re = te;

function ne({ title: o, titleId: e, ...a }, i) {
    return C.createElement(
        "svg",
        Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": e,
            },
            a
        ),
        o ? C.createElement("title", { id: e }, o) : null,
        C.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z",
        }),
        C.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z",
        })
    );
}
const oe = C.forwardRef(ne),
    ie = oe;
var se = Object.defineProperty,
    x = Object.getOwnPropertySymbols,
    Q = Object.prototype.hasOwnProperty,
    $ = Object.prototype.propertyIsEnumerable,
    D = (o, e, a) =>
    e in o ?
    se(o, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) :
    (o[e] = a),
    ae = (o, e) => {
        for (var a in e || (e = {})) Q.call(e, a) && D(o, a, e[a]);
        if (x)
            for (var a of x(e)) $.call(e, a) && D(o, a, e[a]);
        return o;
    },
    le = (o, e) => {
        var a = {};
        for (var i in o) Q.call(o, i) && e.indexOf(i) < 0 && (a[i] = o[i]);
        if (o != null && x)
            for (var i of x(o)) e.indexOf(i) < 0 && $.call(o, i) && (a[i] = o[i]);
        return a;
    };
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var E;
((o) => {
    const e = class {
        constructor(t, n, r, s) {
            if (
                ((this.version = t),
                    (this.errorCorrectionLevel = n),
                    (this.modules = []),
                    (this.isFunction = []),
                    t < e.MIN_VERSION || t > e.MAX_VERSION)
            )
                throw new RangeError("Version value out of range");
            if (s < -1 || s > 7) throw new RangeError("Mask value out of range");
            this.size = t * 4 + 17;
            let l = [];
            for (let f = 0; f < this.size; f++) l.push(!1);
            for (let f = 0; f < this.size; f++)
                this.modules.push(l.slice()), this.isFunction.push(l.slice());
            this.drawFunctionPatterns();
            const d = this.addEccAndInterleave(r);
            if ((this.drawCodewords(d), s == -1)) {
                let f = 1e9;
                for (let w = 0; w < 8; w++) {
                    this.applyMask(w), this.drawFormatBits(w);
                    const m = this.getPenaltyScore();
                    m < f && ((s = w), (f = m)), this.applyMask(w);
                }
            }
            u(0 <= s && s <= 7),
                (this.mask = s),
                this.applyMask(s),
                this.drawFormatBits(s),
                (this.isFunction = []);
        }
        static encodeText(t, n) {
            const r = o.QrSegment.makeSegments(t);
            return e.encodeSegments(r, n);
        }
        static encodeBinary(t, n) {
            const r = o.QrSegment.makeBytes(t);
            return e.encodeSegments([r], n);
        }
        static encodeSegments(t, n, r = 1, s = 40, l = -1, d = !0) {
            if (!(e.MIN_VERSION <= r && r <= s && s <= e.MAX_VERSION) ||
                l < -1 ||
                l > 7
            )
                throw new RangeError("Invalid value");
            let f, w;
            for (f = r;; f++) {
                const y = e.getNumDataCodewords(f, n) * 8,
                    v = p.getTotalBits(t, f);
                if (v <= y) {
                    w = v;
                    break;
                }
                if (f >= s) throw new RangeError("Data too long");
            }
            for (const y of[e.Ecc.MEDIUM, e.Ecc.QUARTILE, e.Ecc.HIGH])
                d && w <= e.getNumDataCodewords(f, y) * 8 && (n = y);
            let m = [];
            for (const y of t) {
                i(y.mode.modeBits, 4, m), i(y.numChars, y.mode.numCharCountBits(f), m);
                for (const v of y.getData()) m.push(v);
            }
            u(m.length == w);
            const R = e.getNumDataCodewords(f, n) * 8;
            u(m.length <= R),
                i(0, Math.min(4, R - m.length), m),
                i(0, (8 - (m.length % 8)) % 8, m),
                u(m.length % 8 == 0);
            for (let y = 236; m.length < R; y ^= 253) i(y, 8, m);
            let b = [];
            for (; b.length * 8 < m.length;) b.push(0);
            return (
                m.forEach((y, v) => (b[v >>> 3] |= y << (7 - (v & 7)))),
                new e(f, n, b, l)
            );
        }
        getModule(t, n) {
            return (
                0 <= t && t < this.size && 0 <= n && n < this.size && this.modules[n][t]
            );
        }
        getModules() {
            return this.modules;
        }
        drawFunctionPatterns() {
            for (let r = 0; r < this.size; r++)
                this.setFunctionModule(6, r, r % 2 == 0),
                this.setFunctionModule(r, 6, r % 2 == 0);
            this.drawFinderPattern(3, 3),
                this.drawFinderPattern(this.size - 4, 3),
                this.drawFinderPattern(3, this.size - 4);
            const t = this.getAlignmentPatternPositions(),
                n = t.length;
            for (let r = 0; r < n; r++)
                for (let s = 0; s < n; s++)
                    (r == 0 && s == 0) ||
                    (r == 0 && s == n - 1) ||
                    (r == n - 1 && s == 0) ||
                    this.drawAlignmentPattern(t[r], t[s]);
            this.drawFormatBits(0), this.drawVersion();
        }
        drawFormatBits(t) {
            const n = (this.errorCorrectionLevel.formatBits << 3) | t;
            let r = n;
            for (let l = 0; l < 10; l++) r = (r << 1) ^ ((r >>> 9) * 1335);
            const s = ((n << 10) | r) ^ 21522;
            u(s >>> 15 == 0);
            for (let l = 0; l <= 5; l++) this.setFunctionModule(8, l, c(s, l));
            this.setFunctionModule(8, 7, c(s, 6)),
                this.setFunctionModule(8, 8, c(s, 7)),
                this.setFunctionModule(7, 8, c(s, 8));
            for (let l = 9; l < 15; l++) this.setFunctionModule(14 - l, 8, c(s, l));
            for (let l = 0; l < 8; l++)
                this.setFunctionModule(this.size - 1 - l, 8, c(s, l));
            for (let l = 8; l < 15; l++)
                this.setFunctionModule(8, this.size - 15 + l, c(s, l));
            this.setFunctionModule(8, this.size - 8, !0);
        }
        drawVersion() {
            if (this.version < 7) return;
            let t = this.version;
            for (let r = 0; r < 12; r++) t = (t << 1) ^ ((t >>> 11) * 7973);
            const n = (this.version << 12) | t;
            u(n >>> 18 == 0);
            for (let r = 0; r < 18; r++) {
                const s = c(n, r),
                    l = this.size - 11 + (r % 3),
                    d = Math.floor(r / 3);
                this.setFunctionModule(l, d, s), this.setFunctionModule(d, l, s);
            }
        }
        drawFinderPattern(t, n) {
            for (let r = -4; r <= 4; r++)
                for (let s = -4; s <= 4; s++) {
                    const l = Math.max(Math.abs(s), Math.abs(r)),
                        d = t + s,
                        f = n + r;
                    0 <= d &&
                        d < this.size &&
                        0 <= f &&
                        f < this.size &&
                        this.setFunctionModule(d, f, l != 2 && l != 4);
                }
        }
        drawAlignmentPattern(t, n) {
            for (let r = -2; r <= 2; r++)
                for (let s = -2; s <= 2; s++)
                    this.setFunctionModule(
                        t + s,
                        n + r,
                        Math.max(Math.abs(s), Math.abs(r)) != 1
                    );
        }
        setFunctionModule(t, n, r) {
            (this.modules[n][t] = r), (this.isFunction[n][t] = !0);
        }
        addEccAndInterleave(t) {
            const n = this.version,
                r = this.errorCorrectionLevel;
            if (t.length != e.getNumDataCodewords(n, r))
                throw new RangeError("Invalid argument");
            const s = e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],
                l = e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],
                d = Math.floor(e.getNumRawDataModules(n) / 8),
                f = s - (d % s),
                w = Math.floor(d / s);
            let m = [];
            const R = e.reedSolomonComputeDivisor(l);
            for (let y = 0, v = 0; y < s; y++) {
                let M = t.slice(v, v + w - l + (y < f ? 0 : 1));
                v += M.length;
                const V = e.reedSolomonComputeRemainder(M, R);
                y < f && M.push(0), m.push(M.concat(V));
            }
            let b = [];
            for (let y = 0; y < m[0].length; y++)
                m.forEach((v, M) => {
                    (y != w - l || M >= f) && b.push(v[y]);
                });
            return u(b.length == d), b;
        }
        drawCodewords(t) {
            if (t.length != Math.floor(e.getNumRawDataModules(this.version) / 8))
                throw new RangeError("Invalid argument");
            let n = 0;
            for (let r = this.size - 1; r >= 1; r -= 2) {
                r == 6 && (r = 5);
                for (let s = 0; s < this.size; s++)
                    for (let l = 0; l < 2; l++) {
                        const d = r - l,
                            w = ((r + 1) & 2) == 0 ? this.size - 1 - s : s;
                        !this.isFunction[w][d] &&
                            n < t.length * 8 &&
                            ((this.modules[w][d] = c(t[n >>> 3], 7 - (n & 7))), n++);
                    }
            }
            u(n == t.length * 8);
        }
        applyMask(t) {
            if (t < 0 || t > 7) throw new RangeError("Mask value out of range");
            for (let n = 0; n < this.size; n++)
                for (let r = 0; r < this.size; r++) {
                    let s;
                    switch (t) {
                        case 0:
                            s = (r + n) % 2 == 0;
                            break;
                        case 1:
                            s = n % 2 == 0;
                            break;
                        case 2:
                            s = r % 3 == 0;
                            break;
                        case 3:
                            s = (r + n) % 3 == 0;
                            break;
                        case 4:
                            s = (Math.floor(r / 3) + Math.floor(n / 2)) % 2 == 0;
                            break;
                        case 5:
                            s = ((r * n) % 2) + ((r * n) % 3) == 0;
                            break;
                        case 6:
                            s = (((r * n) % 2) + ((r * n) % 3)) % 2 == 0;
                            break;
                        case 7:
                            s = (((r + n) % 2) + ((r * n) % 3)) % 2 == 0;
                            break;
                        default:
                            throw new Error("Unreachable");
                    }!this.isFunction[n][r] &&
                        s &&
                        (this.modules[n][r] = !this.modules[n][r]);
                }
        }
        getPenaltyScore() {
            let t = 0;
            for (let l = 0; l < this.size; l++) {
                let d = !1,
                    f = 0,
                    w = [0, 0, 0, 0, 0, 0, 0];
                for (let m = 0; m < this.size; m++)
                    this.modules[l][m] == d ?
                    (f++, f == 5 ? (t += e.PENALTY_N1) : f > 5 && t++) :
                    (this.finderPenaltyAddHistory(f, w),
                        d || (t += this.finderPenaltyCountPatterns(w) * e.PENALTY_N3),
                        (d = this.modules[l][m]),
                        (f = 1));
                t += this.finderPenaltyTerminateAndCount(d, f, w) * e.PENALTY_N3;
            }
            for (let l = 0; l < this.size; l++) {
                let d = !1,
                    f = 0,
                    w = [0, 0, 0, 0, 0, 0, 0];
                for (let m = 0; m < this.size; m++)
                    this.modules[m][l] == d ?
                    (f++, f == 5 ? (t += e.PENALTY_N1) : f > 5 && t++) :
                    (this.finderPenaltyAddHistory(f, w),
                        d || (t += this.finderPenaltyCountPatterns(w) * e.PENALTY_N3),
                        (d = this.modules[m][l]),
                        (f = 1));
                t += this.finderPenaltyTerminateAndCount(d, f, w) * e.PENALTY_N3;
            }
            for (let l = 0; l < this.size - 1; l++)
                for (let d = 0; d < this.size - 1; d++) {
                    const f = this.modules[l][d];
                    f == this.modules[l][d + 1] &&
                        f == this.modules[l + 1][d] &&
                        f == this.modules[l + 1][d + 1] &&
                        (t += e.PENALTY_N2);
                }
            let n = 0;
            for (const l of this.modules) n = l.reduce((d, f) => d + (f ? 1 : 0), n);
            const r = this.size * this.size,
                s = Math.ceil(Math.abs(n * 20 - r * 10) / r) - 1;
            return (
                u(0 <= s && s <= 9),
                (t += s * e.PENALTY_N4),
                u(0 <= t && t <= 2568888),
                t
            );
        }
        getAlignmentPatternPositions() {
            if (this.version == 1) return []; {
                const t = Math.floor(this.version / 7) + 2,
                    n =
                    this.version == 32 ?
                    26 :
                    Math.ceil((this.version * 4 + 4) / (t * 2 - 2)) * 2;
                let r = [6];
                for (let s = this.size - 7; r.length < t; s -= n) r.splice(1, 0, s);
                return r;
            }
        }
        static getNumRawDataModules(t) {
            if (t < e.MIN_VERSION || t > e.MAX_VERSION)
                throw new RangeError("Version number out of range");
            let n = (16 * t + 128) * t + 64;
            if (t >= 2) {
                const r = Math.floor(t / 7) + 2;
                (n -= (25 * r - 10) * r - 55), t >= 7 && (n -= 36);
            }
            return u(208 <= n && n <= 29648), n;
        }
        static getNumDataCodewords(t, n) {
            return (
                Math.floor(e.getNumRawDataModules(t) / 8) -
                e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t] *
                e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]
            );
        }
        static reedSolomonComputeDivisor(t) {
            if (t < 1 || t > 255) throw new RangeError("Degree out of range");
            let n = [];
            for (let s = 0; s < t - 1; s++) n.push(0);
            n.push(1);
            let r = 1;
            for (let s = 0; s < t; s++) {
                for (let l = 0; l < n.length; l++)
                    (n[l] = e.reedSolomonMultiply(n[l], r)),
                    l + 1 < n.length && (n[l] ^= n[l + 1]);
                r = e.reedSolomonMultiply(r, 2);
            }
            return n;
        }
        static reedSolomonComputeRemainder(t, n) {
            let r = n.map((s) => 0);
            for (const s of t) {
                const l = s ^ r.shift();
                r.push(0), n.forEach((d, f) => (r[f] ^= e.reedSolomonMultiply(d, l)));
            }
            return r;
        }
        static reedSolomonMultiply(t, n) {
            if (t >>> 8 || n >>> 8) throw new RangeError("Byte out of range");
            let r = 0;
            for (let s = 7; s >= 0; s--)
                (r = (r << 1) ^ ((r >>> 7) * 285)), (r ^= ((n >>> s) & 1) * t);
            return u(r >>> 8 == 0), r;
        }
        finderPenaltyCountPatterns(t) {
            const n = t[1];
            u(n <= this.size * 3);
            const r = n > 0 && t[2] == n && t[3] == n * 3 && t[4] == n && t[5] == n;
            return (
                (r && t[0] >= n * 4 && t[6] >= n ? 1 : 0) +
                (r && t[6] >= n * 4 && t[0] >= n ? 1 : 0)
            );
        }
        finderPenaltyTerminateAndCount(t, n, r) {
            return (
                t && (this.finderPenaltyAddHistory(n, r), (n = 0)),
                (n += this.size),
                this.finderPenaltyAddHistory(n, r),
                this.finderPenaltyCountPatterns(r)
            );
        }
        finderPenaltyAddHistory(t, n) {
            n[0] == 0 && (t += this.size), n.pop(), n.unshift(t);
        }
    };
    let a = e;
    (a.MIN_VERSION = 1),
    (a.MAX_VERSION = 40),
    (a.PENALTY_N1 = 3),
    (a.PENALTY_N2 = 3),
    (a.PENALTY_N3 = 40),
    (a.PENALTY_N4 = 10),
    (a.ECC_CODEWORDS_PER_BLOCK = [
        [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28,
            30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30,
        ],
        [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28,
            26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
            28, 28, 28, 28, 28,
        ],
        [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28,
            28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30,
        ],
        [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28,
            28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30,
        ],
    ]),
    (a.NUM_ERROR_CORRECTION_BLOCKS = [
        [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9,
            10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25,
        ],
        [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16,
            17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45,
            47, 49,
        ],
        [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20,
            23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62,
            65, 68,
        ],
        [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25,
            25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70,
            74, 77, 81,
        ],
    ]),
    (o.QrCode = a);

    function i(t, n, r) {
        if (n < 0 || n > 31 || t >>> n) throw new RangeError("Value out of range");
        for (let s = n - 1; s >= 0; s--) r.push((t >>> s) & 1);
    }

    function c(t, n) {
        return ((t >>> n) & 1) != 0;
    }

    function u(t) {
        if (!t) throw new Error("Assertion error");
    }
    const h = class {
        constructor(t, n, r) {
            if (((this.mode = t), (this.numChars = n), (this.bitData = r), n < 0))
                throw new RangeError("Invalid argument");
            this.bitData = r.slice();
        }
        static makeBytes(t) {
            let n = [];
            for (const r of t) i(r, 8, n);
            return new h(h.Mode.BYTE, t.length, n);
        }
        static makeNumeric(t) {
            if (!h.isNumeric(t))
                throw new RangeError("String contains non-numeric characters");
            let n = [];
            for (let r = 0; r < t.length;) {
                const s = Math.min(t.length - r, 3);
                i(parseInt(t.substr(r, s), 10), s * 3 + 1, n), (r += s);
            }
            return new h(h.Mode.NUMERIC, t.length, n);
        }
        static makeAlphanumeric(t) {
            if (!h.isAlphanumeric(t))
                throw new RangeError(
                    "String contains unencodable characters in alphanumeric mode"
                );
            let n = [],
                r;
            for (r = 0; r + 2 <= t.length; r += 2) {
                let s = h.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)) * 45;
                (s += h.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r + 1))), i(s, 11, n);
            }
            return (
                r < t.length && i(h.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)), 6, n),
                new h(h.Mode.ALPHANUMERIC, t.length, n)
            );
        }
        static makeSegments(t) {
            return t == "" ? [] :
                h.isNumeric(t) ? [h.makeNumeric(t)] :
                h.isAlphanumeric(t) ? [h.makeAlphanumeric(t)] : [h.makeBytes(h.toUtf8ByteArray(t))];
        }
        static makeEci(t) {
            let n = [];
            if (t < 0) throw new RangeError("ECI assignment value out of range");
            if (t < 128) i(t, 8, n);
            else if (t < 16384) i(2, 2, n), i(t, 14, n);
            else if (t < 1e6) i(6, 3, n), i(t, 21, n);
            else throw new RangeError("ECI assignment value out of range");
            return new h(h.Mode.ECI, 0, n);
        }
        static isNumeric(t) {
            return h.NUMERIC_REGEX.test(t);
        }
        static isAlphanumeric(t) {
            return h.ALPHANUMERIC_REGEX.test(t);
        }
        getData() {
            return this.bitData.slice();
        }
        static getTotalBits(t, n) {
            let r = 0;
            for (const s of t) {
                const l = s.mode.numCharCountBits(n);
                if (s.numChars >= 1 << l) return 1 / 0;
                r += 4 + l + s.bitData.length;
            }
            return r;
        }
        static toUtf8ByteArray(t) {
            t = encodeURI(t);
            let n = [];
            for (let r = 0; r < t.length; r++)
                t.charAt(r) != "%" ?
                n.push(t.charCodeAt(r)) :
                (n.push(parseInt(t.substr(r + 1, 2), 16)), (r += 2));
            return n;
        }
    };
    let p = h;
    (p.NUMERIC_REGEX = /^[0-9]*$/),
    (p.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
    (p.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"),
    (o.QrSegment = p);
})(E || (E = {}));
((o) => {
    ((e) => {
        const a = class {
            constructor(c, u) {
                (this.ordinal = c), (this.formatBits = u);
            }
        };
        let i = a;
        (i.LOW = new a(0, 1)),
        (i.MEDIUM = new a(1, 0)),
        (i.QUARTILE = new a(2, 3)),
        (i.HIGH = new a(3, 2)),
        (e.Ecc = i);
    })(o.QrCode || (o.QrCode = {}));
})(E || (E = {}));
((o) => {
    ((e) => {
        const a = class {
            constructor(c, u) {
                (this.modeBits = c), (this.numBitsCharCount = u);
            }
            numCharCountBits(c) {
                return this.numBitsCharCount[Math.floor((c + 7) / 17)];
            }
        };
        let i = a;
        (i.NUMERIC = new a(1, [10, 12, 14])),
        (i.ALPHANUMERIC = new a(2, [9, 11, 13])),
        (i.BYTE = new a(4, [8, 16, 16])),
        (i.KANJI = new a(8, [8, 10, 12])),
        (i.ECI = new a(7, [0, 0, 0])),
        (e.Mode = i);
    })(o.QrSegment || (o.QrSegment = {}));
})(E || (E = {}));
var _ = E;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var ce = {
        L: _.QrCode.Ecc.LOW,
        M: _.QrCode.Ecc.MEDIUM,
        Q: _.QrCode.Ecc.QUARTILE,
        H: _.QrCode.Ecc.HIGH,
    },
    ue = 128,
    fe = "L",
    de = "#FFFFFF",
    he = "#000000",
    pe = !1,
    H = 4,
    me = 0.1;

function ge(o, e = 0) {
    const a = [];
    return (
        o.forEach(function(i, c) {
            let u = null;
            i.forEach(function(h, p) {
                if (!h && u !== null) {
                    a.push(`M${u + e} ${c + e}h${p - u}v1H${u + e}z`), (u = null);
                    return;
                }
                if (p === i.length - 1) {
                    if (!h) return;
                    u === null ?
                        a.push(`M${p + e},${c + e} h1v1H${p + e}z`) :
                        a.push(`M${u + e},${c + e} h${p + 1 - u}v1H${u + e}z`);
                    return;
                }
                h && u === null && (u = p);
            });
        }),
        a.join("")
    );
}

function we(o, e) {
    return o
        .slice()
        .map((a, i) =>
            i < e.y || i >= e.y + e.h ?
            a :
            a.map((c, u) => (u < e.x || u >= e.x + e.w ? c : !1))
        );
}

function ye(o, e, a, i) {
    if (i == null) return null;
    const c = a ? H : 0,
        u = o.length + c * 2,
        h = Math.floor(e * me),
        p = u / e,
        t = (i.width || h) * p,
        n = (i.height || h) * p,
        r = i.x == null ? o.length / 2 - t / 2 : i.x * p,
        s = i.y == null ? o.length / 2 - n / 2 : i.y * p;
    let l = null;
    if (i.excavate) {
        let d = Math.floor(r),
            f = Math.floor(s),
            w = Math.ceil(t + r - d),
            m = Math.ceil(n + s - f);
        l = { x: d, y: f, w, h: m };
    }
    return { x: r, y: s, h: n, w: t, excavation: l };
}
(function() {
    try {
        new Path2D().addPath(new Path2D());
    } catch {
        return !1;
    }
    return !0;
})();

function Ce(o) {
    const e = o,
        {
            value: a,
            size: i = ue,
            level: c = fe,
            bgColor: u = de,
            fgColor: h = he,
            includeMargin: p = pe,
            imageSettings: t,
        } = e,
        n = le(e, [
            "value",
            "size",
            "level",
            "bgColor",
            "fgColor",
            "includeMargin",
            "imageSettings",
        ]);
    let r = _.QrCode.encodeText(a, ce[c]).getModules();
    const s = p ? H : 0,
        l = r.length + s * 2,
        d = ye(r, i, p, t);
    let f = null;
    t != null &&
        d != null &&
        (d.excavation != null && (r = we(r, d.excavation)),
            (f = O.createElement("image", {
                xlinkHref: t.src,
                height: d.h,
                width: d.w,
                x: d.x + s,
                y: d.y + s,
                preserveAspectRatio: "none",
            })));
    const w = ge(r, s);
    return O.createElement(
        "svg",
        ae({ height: i, width: i, viewBox: `0 0 ${l} ${l}` }, n),
        O.createElement("path", {
            fill: u,
            d: `M0,0 h${l}v${l}H0z`,
            shapeRendering: "crispEdges",
        }),
        O.createElement("path", { fill: h, d: w, shapeRendering: "crispEdges" }),
        f
    );
}
var A = {},
    ve = function() {
        var o = document.getSelection();
        if (!o.rangeCount) return function() {};
        for (var e = document.activeElement, a = [], i = 0; i < o.rangeCount; i++)
            a.push(o.getRangeAt(i));
        switch (e.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                e.blur();
                break;
            default:
                e = null;
                break;
        }
        return (
            o.removeAllRanges(),
            function() {
                o.type === "Caret" && o.removeAllRanges(),
                    o.rangeCount ||
                    a.forEach(function(c) {
                        o.addRange(c);
                    }),
                    e && e.focus();
            }
        );
    },
    be = ve,
    T = { "text/plain": "Text", "text/html": "Url", default: "Text" },
    Ee = "Copy to clipboard: #{key}, Enter";

function Me(o) {
    var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return o.replace(/#{\s*key\s*}/g, e);
}

function Re(o, e) {
    var a,
        i,
        c,
        u,
        h,
        p,
        t = !1;
    e || (e = {}), (a = e.debug || !1);
    try {
        (c = be()),
        (u = document.createRange()),
        (h = document.getSelection()),
        (p = document.createElement("span")),
        (p.textContent = o),
        (p.ariaHidden = "true"),
        (p.style.all = "unset"),
        (p.style.position = "fixed"),
        (p.style.top = 0),
        (p.style.clip = "rect(0, 0, 0, 0)"),
        (p.style.whiteSpace = "pre"),
        (p.style.webkitUserSelect = "text"),
        (p.style.MozUserSelect = "text"),
        (p.style.msUserSelect = "text"),
        (p.style.userSelect = "text"),
        p.addEventListener("copy", function(r) {
                if ((r.stopPropagation(), e.format))
                    if ((r.preventDefault(), typeof r.clipboardData > "u")) {
                        a && console.warn("unable to use e.clipboardData"),
                            a && console.warn("trying IE specific stuff"),
                            window.clipboardData.clearData();
                        var s = T[e.format] || T.default;
                        window.clipboardData.setData(s, o);
                    } else
                        r.clipboardData.clearData(), r.clipboardData.setData(e.format, o);
                e.onCopy && (r.preventDefault(), e.onCopy(r.clipboardData));
            }),
            document.body.appendChild(p),
            u.selectNodeContents(p),
            h.addRange(u);
        var n = document.execCommand("copy");
        if (!n) throw new Error("copy command was unsuccessful");
        t = !0;
    } catch (r) {
        a && console.error("unable to copy using execCommand: ", r),
            a && console.warn("trying IE specific stuff");
        try {
            window.clipboardData.setData(e.format || "text", o),
                e.onCopy && e.onCopy(window.clipboardData),
                (t = !0);
        } catch (s) {
            a && console.error("unable to copy using clipboardData: ", s),
                a && console.error("falling back to prompt"),
                (i = Me("message" in e ? e.message : Ee)),
                window.prompt(i, o);
        }
    } finally {
        h &&
            (typeof h.removeRange == "function" ?
                h.removeRange(u) :
                h.removeAllRanges()),
            p && document.body.removeChild(p),
            c();
    }
    return t;
}
var _e = Re;

function S(o) {
    "@babel/helpers - typeof";
    return (
        (S =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ?

            function(e) {
                return typeof e;
            } :
            function(e) {
                return e &&
                    typeof Symbol == "function" &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype ?
                    "symbol" :
                    typeof e;
            }),
        S(o)
    );
}
Object.defineProperty(A, "__esModule", { value: !0 });
A.CopyToClipboard = void 0;
var P = Y(C),
    Oe = Y(_e),
    Pe = ["text", "onCopy", "options", "children"];

function Y(o) {
    return o && o.__esModule ? o : { default: o };
}

function z(o, e) {
    var a = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(o);
        e &&
            (i = i.filter(function(c) {
                return Object.getOwnPropertyDescriptor(o, c).enumerable;
            })),
            a.push.apply(a, i);
    }
    return a;
}

function F(o) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e] != null ? arguments[e] : {};
        e % 2 ?
            z(Object(a), !0).forEach(function(i) {
                L(o, i, a[i]);
            }) :
            Object.getOwnPropertyDescriptors ?
            Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) :
            z(Object(a)).forEach(function(i) {
                Object.defineProperty(o, i, Object.getOwnPropertyDescriptor(a, i));
            });
    }
    return o;
}

function xe(o, e) {
    if (o == null) return {};
    var a = Ne(o, e),
        i,
        c;
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(o);
        for (c = 0; c < u.length; c++)
            (i = u[c]), !(e.indexOf(i) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(o, i) &&
            (a[i] = o[i]);
    }
    return a;
}

function Ne(o, e) {
    if (o == null) return {};
    var a = {},
        i = Object.keys(o),
        c,
        u;
    for (u = 0; u < i.length; u++)
        (c = i[u]), !(e.indexOf(c) >= 0) && (a[c] = o[c]);
    return a;
}

function Ae(o, e) {
    if (!(o instanceof e))
        throw new TypeError("Cannot call a class as a function");
}

function B(o, e) {
    for (var a = 0; a < e.length; a++) {
        var i = e[a];
        (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
            Object.defineProperty(o, i.key, i);
    }
}

function Ie(o, e, a) {
    return (
        e && B(o.prototype, e),
        a && B(o, a),
        Object.defineProperty(o, "prototype", { writable: !1 }),
        o
    );
}

function Se(o, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function");
    (o.prototype = Object.create(e && e.prototype, {
        constructor: { value: o, writable: !0, configurable: !0 },
    })),
    Object.defineProperty(o, "prototype", { writable: !1 }),
        e && j(o, e);
}

function j(o, e) {
    return (
        (j =
            Object.setPrototypeOf ||
            function(i, c) {
                return (i.__proto__ = c), i;
            }),
        j(o, e)
    );
}

function je(o) {
    var e = Le();
    return function() {
        var i = N(o),
            c;
        if (e) {
            var u = N(this).constructor;
            c = Reflect.construct(i, arguments, u);
        } else c = i.apply(this, arguments);
        return ke(this, c);
    };
}

function ke(o, e) {
    if (e && (S(e) === "object" || typeof e == "function")) return e;
    if (e !== void 0)
        throw new TypeError(
            "Derived constructors may only return object or undefined"
        );
    return W(o);
}

function W(o) {
    if (o === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return o;
}

function Le() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {})
            ), !0
        );
    } catch {
        return !1;
    }
}

function N(o) {
    return (
        (N = Object.setPrototypeOf ?
            Object.getPrototypeOf :
            function(a) {
                return a.__proto__ || Object.getPrototypeOf(a);
            }),
        N(o)
    );
}

function L(o, e, a) {
    return (
        e in o ?
        Object.defineProperty(o, e, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
        }) :
        (o[e] = a),
        o
    );
}
var G = (function(o) {
    Se(a, o);
    var e = je(a);

    function a() {
        var i;
        Ae(this, a);
        for (var c = arguments.length, u = new Array(c), h = 0; h < c; h++)
            u[h] = arguments[h];
        return (
            (i = e.call.apply(e, [this].concat(u))),
            L(W(i), "onClick", function(p) {
                var t = i.props,
                    n = t.text,
                    r = t.onCopy,
                    s = t.children,
                    l = t.options,
                    d = P.default.Children.only(s),
                    f = (0, Oe.default)(n, l);
                r && r(n, f),
                    d &&
                    d.props &&
                    typeof d.props.onClick == "function" &&
                    d.props.onClick(p);
            }),
            i
        );
    }
    return (
        Ie(a, [{
            key: "render",
            value: function() {
                var c = this.props;
                c.text, c.onCopy, c.options;
                var u = c.children,
                    h = xe(c, Pe),
                    p = P.default.Children.only(u);
                return P.default.cloneElement(
                    p,
                    F(F({}, h), {}, { onClick: this.onClick })
                );
            },
        }, ]),
        a
    );
})(P.default.PureComponent);
A.CopyToClipboard = G;
L(G, "defaultProps", { onCopy: void 0, options: void 0 });
var De = A,
    k = De.CopyToClipboard;
k.CopyToClipboard = k;
var Te = k;
const ze = (o) => {
        try {
            const e = new URL(o);
            switch (e.protocol.toLowerCase()) {
                case "vmess:":
                    return JSON.parse(atob(o.substring(8))).ps;
                case "vless:":
                case "trojan:":
                    return decodeURI(e.hash.substring(1));
            }
        } catch {
            return "Config";
        }
    },
    Fe = (o) => {
        try {
            const a = new URL(o);
            switch (a.protocol.toLowerCase()) {
                case "vmess:":
                    return JSON.parse(atob(o.substring(8))).add !== "localhost";
                case "vless:":
                case "trojan:":
                    let i = a.pathname;
                    var e = i.substring(i.indexOf("@") + 1, i.lastIndexOf(":"));
                    return e !== "localhost";
            }
        } catch {
            return !1;
        }
    },
    X = ({ link: o, name: e }) => {
        const [a, i] = C.useState(!1), [c, u] = C.useState(!1),
            h = C.useRef(),
            p = () => {
                u(!0),
                    h.current && clearTimeout(h.current),
                    (h.current = setTimeout(() => {
                        u(!1);
                    }, 1e3));
            };
        return g.jsxs("div", {
            className: "flex justify-between items-center rounded-md border-2 border-primary dark:border-primary-dark border-opacity-60 py-1 bg dark:bg-primary-dark-fade dark:bg-zinc-800 pl-1 pr-3 text-sm flex-wrap mb-2 text-black dark:text-slate-300",
            children: [
                g.jsxs("span", {
                    className: "font-semibold",
                    children: [e || ze(o), " ", c ? "(کپی شد)" : ""],
                }),
                g.jsxs("div", {
                    className: "flex gap-1",
                    children: [
                        g.jsx(I, {
                            variant: "icon",
                            className: "p-1 px-1 border-transparent text-primary dark:text-primary-dark",
                            onClick: i.bind(null, !a),
                            children: g.jsx(ie, { width: "20px", strokeWidth: "2px" }),
                        }),
                        g.jsx(Te.CopyToClipboard, {
                            text: o,
                            onCopy: p,
                            children: g.jsx(I, {
                                variant: "icon",
                                className: "p-1 px-1 border-transparent text-primary dark:text-primary-dark",
                                children: c ?
                                    g.jsx(q, { width: "20px", strokeWidth: "2px" }) : g.jsx(re, { width: "20px", strokeWidth: "2px" }),
                            }),
                        }),
                    ],
                }),
                a &&
                g.jsx("div", {
                    className: "w-full flex items-center justify-center py-4",
                    children: g.jsx("div", {
                        className: "bg-white border-8 border-white border-solid",
                        children: g.jsx(Ce, { value: o, size: 200 }),
                    }),
                }),
            ],
        });
    },
    Be = ({ links: o }) =>
    g.jsx(g.Fragment, {
        children: o.filter(Fe).map((e) => g.jsx(X, { link: e }, e)),
    }),
    He = void 0;

function U(o) {
    return g.jsxs(g.Fragment, {
        children: [
            g.jsx("a", {
                href: "#",
                children: g.jsxs(I, {
                    variant: "outline",
                    className: "flex gap-2",
                    children: [
                        g.jsx(K, { width: "20px", strokeWidth: "2px" }),
                        g.jsx("span", { children: "برگشت" }),
                    ],
                }),
            }),
            `
`,
            g.jsx("div", { className: "mt-4" }),
            `
`,
            g.jsx("span", {
                className: "flex text-black dark:text-slate-200 gap-2 items-center font-semibold pt-2",
                children: g.jsx("span", {
                    className: "text-[18px]",
                    children: "کانفیگ ها",
                }),
            }),
            `
`,
            g.jsx("div", { className: "mt-2" }),
            `
`,
            g.jsx(Be, { links: window.user.links }),
            `
`,
            g.jsx("div", { className: "mt-4" }),
            `
`,
            g.jsx("span", {
                className: "flex text-black dark:text-slate-200 gap-2 items-center font-semibold pt-2",
                children: g.jsx("span", {
                    className: "text-[18px]",
                    children: "کانکشن هوشمند",
                }),
            }),
            `
`,
            g.jsx("div", { className: "mt-2" }),
            `
`,
            g.jsx(X, {
                name: "آدرس کانکشن هوشمند",
                link: [window.user.subscription_url],
            }),
        ],
    });
}

function Ye(o = {}) {
    const { wrapper: e } = o.components || {};
    return e ? g.jsx(e, Object.assign({}, o, { children: g.jsx(U, o) })) : U();
}
export { Ye as default, He as frontmatter };