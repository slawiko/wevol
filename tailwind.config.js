/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#3f7dda",
      "light-blue": "#81dde4",
      white: "#ffffff",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      contrast: {
        40: ".40",
      },
      keyframes: {
        "upscale": {
          "0%": {
            opacity: 0,
            transform: "scale(0.75)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "60%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    animation: {
        upscale: "upscale 1s ease-in-out forwards",
        "fade-in": "fade-in 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
