/* @refresh reload */
/**
 * Don't forget the line above for HMR!
 *
 * Note: for some reason HMR breaks if you change .stories file,
 * however reloading the page fixes this issue
 */

import { render } from "solid-js/web";
import "tailwindcss/tailwind.css";

export const decorators = [
  (Story) => {
    const solidRoot = document.createElement("div");

    render(Story, solidRoot);

    return solidRoot;
  },
];

/** Autogenerated by Storybook */
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
