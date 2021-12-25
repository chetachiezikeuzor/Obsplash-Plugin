import { addIcon } from "obsidian";
import type { iconsPlot } from "../util/types";

const icons: iconsPlot = {
    pixricon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" stroke-linecap="round" stroke-linejoin="round" fill="currentColor"><g><polygon points="83.203,33.262 87.075,42.61 90.653,42.61 90.651,79.427 61.912,79.427 39.337,88.779 100,88.779 100,33.262  "></polygon></g><g><path d="M0,38.235l67.019-27.76l21.242,51.291l-67.015,27.76L0,38.235z M26.305,77.309l49.741-20.601L61.958,22.69L12.215,43.293   L26.305,77.309z"></path></g></svg>`,
};

export const addIcons = () => {
    Object.keys(icons).forEach((key) => {
        addIcon(key, icons[key]);
    });
};
