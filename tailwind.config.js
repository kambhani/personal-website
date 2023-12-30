const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

const radialGradientPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        // map to bg-radient-[*]
        "bg-radient": (value) => ({
          "background-image": `radial-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme("radialGradients") },
    );
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  },
);

/**
 * utility class presets
 */
function _presets() {
  const shapes = ["circle", "ellipse"];
  const pos = {
    c: "center",
    t: "top",
    b: "bottom",
    l: "left",
    r: "right",
    tl: "top left",
    tr: "top right",
    bl: "bottom left",
    br: "bottom right",
  };
  let result = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}

/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "520px",
      ...defaultTheme.screens,
      "3xl": "1800px",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {},
        },
      },
    }),
    radialGradientPlugin,
  ],
};
