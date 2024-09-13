import { r as d, j as e, c as x } from "./index-09a1fc96.js";
import { r as c, d as m } from "./date-f41ba057.js";
import { S as u } from "./android-0066d14e.js";
import { S as p } from "./apple-9aa2c045.js";
import { S as f } from "./linux-a286713f.js";
import { S as w } from "./windows-838706e6.js";
import { B as h } from "./Button-691dff5a.js";

function b({ title: r, titleId: a, ...t }, s) {
    return d.createElement(
        "svg",
        Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: s,
                "aria-labelledby": a,
            },
            t
        ),
        r ? d.createElement("title", { id: a }, r) : null,
        d.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
        })
    );
}
const k = d.forwardRef(b),
    g = k;

function l(r, a = !1, t = 1) {
    const s = a ? 1e3 : 1024;
    if (Math.abs(r) < s) return r + " B";
    const n = a ?
        ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] :
        ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    let i = -1;
    const o = 10 ** t;
    do(r /= s), ++i;
    while (Math.round(Math.abs(r) * o) / o >= s && i < n.length - 1);
    return r.toFixed(t) + " " + n[i];
}

function j(r) {
    switch (r) {
        case "active":
            return "فعال";
        case "on_hold":
            return "در انتظار اولین اتصال";
        case "limited":
            return "محدود شده";
        case "expired":
            return "منقضی شده";
    }
}

function E() {
    return e.jsxs("div", {
        className: "w-full flex items-center flex-col",
        children: [
            e.jsxs("div", {
                className: "rounded-full border-2 border-primary dark:border-primary-dark bg dark:bg-primary-dark-fade dark:bg-zinc-800 text-primary dark:text-primary-dark p-6 w-fit relative",
                children: [
                    e.jsx(g, { width: "60px", strokeWidth: "1px" }),
                    e.jsx("span", {
                        className: x(
                            "text-white whitespace-nowrap text-xs text-center inline-block absolute -bottom-3 py-[3px] px-3 rounded-md border-2 border-white dark:border-zinc-900 left-1/2 -translate-x-1/2", {
                                "bg-green dark:bg-green-400": window.user.status === "active",
                                "bg-yellow-500 dark:bg-yellow-600": window.user.status === "on_hold" ||
                                    window.user.status === "expired",
                                "bg-red-500 dark:bg-red-400": window.user.status !== "active" &&
                                    window.user.status !== "on_hold",
                            }
                        ),
                        children: j(window.user.status),
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "flex flex-col max-w-[230px] w-full py-4 mt-4 font-semibold gap-2",
                children: [
                    e.jsxs("div", {
                        className: "flex justify-between w-full",
                        children: [
                            e.jsx("span", {
                                className: "text-gray dark:text-slate-200",
                                children: "حجم کل دوره",
                            }),
                            e.jsx("span", {
                                className: "text-primary dark:text-primary-dark",
                                dir: "ltr",
                                children: window.user.data_limit ?
                                    l(window.user.data_limit) :
                                    "∞",
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "flex justify-between w-full",
                        children: [
                            e.jsx("span", {
                                className: "text-gray dark:text-slate-200",
                                children: "حجم مصرف شده",
                            }),
                            e.jsx("span", {
                                className: "text-primary dark:text-primary-dark",
                                dir: "ltr",
                                children: l(window.user.used_traffic),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "flex justify-between w-full",
                        children: [
                            e.jsx("span", {
                                className: "text-gray dark:text-slate-200",
                                children: "حجم باقیمانده ",
                            }),
                            e.jsx("span", {
                                className: "text-primary dark:text-primary-dark",
                                dir: "ltr",
                                children: window.user.data_limit ?
                                    l(window.user.data_limit - window.user.used_traffic) :
                                    "∞",
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx("div", {
                className: "w-full text-center mt-3 flex font-semibold justify-center items-center",
                children: e.jsx("span", {
                    className: "text-gray  dark:text-slate-200",
                    children: window.user.status === "on_hold" ?
                        c(
                            m()
                            .add(window.user.on_hold_expire_duration, "second")
                            .add(5, "second")
                            .toDate()
                            .getTime() / 1e3
                        ) :
                        window.user.expire ?
                        c(window.user.expire) :
                        "اشتراک شما بدون محدودیت زمانی است.",
                }),
            }),
            e.jsx("hr", {
                className: "border-black dark:border-slate-300 opacity-25 mx-auto w-1/2 my-4 mt-7",
            }),
            e.jsxs("div", {
                className: "flex flex-col justify-center text-center gap-2 py-5 font-semibold text-black dark:text-slate-300",
                children: [
                    e.jsx("span", {
                        className: "text-lg",
                        children: "راهنما راه‌اندازی",
                    }),
                    e.jsx("span", {
                        className: "text-md",
                        children: "دستگاه خود را انتخاب کنید",
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "grid grid-cols-2 gap-4 w-full max-w-[300px] text-primary dark:text-primary-dark font-semibold",
                children: [
                    e.jsxs("a", {
                        href: "#tutorial-android",
                        className: "flex-col gap-5 border-2 border-primary dark:border-primary-dark bg dark:bg-primary-dark-fade dark:bg-zinc-800 rounded-lg flex justify-center items-center w-full aspect-square",
                        children: [e.jsx(u, {}), e.jsx("span", { children: "اندروید" })],
                    }),
                    e.jsxs("a", {
                        href: "#tutorial-apple",
                        className: "flex-col gap-5 border-2 border-primary dark:border-primary-dark bg dark:bg-primary-dark-fade dark:bg-zinc-800 rounded-lg flex justify-center items-center w-full aspect-square",
                        children: [e.jsx(p, {}), e.jsx("span", { children: "آیفون / مک" })],
                    }),
                    e.jsxs("a", {
                        href: "#tutorial-windows",
                        className: "flex-col gap-5 border-2 border-primary dark:border-primary-dark bg dark:bg-primary-dark-fade dark:bg-zinc-800 rounded-lg flex justify-center items-center w-full aspect-square",
                        children: [e.jsx(w, {}), e.jsx("span", { children: "ویندوز" })],
                    }),
                    e.jsxs("a", {
                        href: "#tutorial-linux",
                        className: "flex-col gap-5 border-2 border-primary dark:border-primary-dark bg dark:bg-primary-dark-fade dark:bg-zinc-800 rounded-lg flex justify-center items-center w-full aspect-square",
                        children: [e.jsx(f, {}), e.jsx("span", { children: "لینوکس" })],
                    }),
                ],
            }),
            e.jsx("a", {
                href: "#configs",
                className: "flex justify-center mt-8",
                children: e.jsx(h, {
                    variant: "outline",
                    children: "دریافت کانفیگ ها",
                }),
            }),
        ],
    });
}
export { E as default };