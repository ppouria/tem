import { j as e, c as s } from "./index-09a1fc96.js";
const i = ({ children: t, variant: r = "solid", className: o, onClick: d }) =>
    e.jsx("button", {
        className: s(
            "border-2 border-primary dark:border-primary-dark border-solid text-sm rounded-md font-semibold",
            o, {
                "bg dark:bg-primary-dark text-white": r === "solid",
                "bg-transparent text-primary dark:text-primary-dark": r === "outline",
                "px-5 py-2": r !== "icon",
            }
        ),
        onClick: d,
        children: t,
    });
export { i as B };