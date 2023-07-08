/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#3f7dda",
        "dark-blue": "#2d5ca2",
        "light-blue": "#81dde5",
        "light-light-blue": "#cfeafd",
        "light-green": "#c7fd61",
        white: "#ffffff",
      },
      backgroundSize: {
        "300%": "300%",
        "200%": "200%",
      },
      backgroundImage: {
        "green-blue-gradient":
          "radial-gradient(26.76% 55.52% at 86.73% -15.86%, #3f7dda 6.65%, transparent), radial-gradient(farthest-side at bottom left, #c7fd61 6.65%, #81dde5 100%)",
        aurora: "radial-gradient(18% 28% at 24% 50%, #cfeafd 7%, #073AFF00 100%),radial-gradient(70% 53% at 36% 76%, #73F2FFFF 0%, #073AFF00 100%),radial-gradient(42% 53% at 15% 94%, #cfeafd 7%, #073AFF00 100%),radial-gradient(42% 53% at 34% 72%, #cfeafd 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(21% 37% at 72% 23%, #81dde5 24%, #073AFF00 100%),radial-gradient(35% 56% at 91% 74%, #3f7dda 9%, #073AFF00 100%),radial-gradient(74% 86% at 67% 38%, #b4e556 24%, #073AFF00 100%),linear-gradient(125deg, #4EB5FFFF 1%, #3f7dda 100%)",
        wevol: "linear-gradient(70deg, #81DDE5 10%, #3F7DDA 20%, #3F7DDA 55%, #81DDE5 64%, #81DDE5 73.5%, #3F7DDA 83.5%)",
        shine: "linear-gradient(110deg, #3f7dda 0%, #3f7dda 33%, #c7fd61 40%, #3f7dda 47%, #3f7dda 100%)",
      },
      contrast: {
        40: ".40",
      },
      listStyleImage: {
        checkmark: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=')",
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
        "fly-in-l": {
          "0%": {
            transform: "translate(-100vw, 10vh) rotate(0deg)",
          },
          "100%": {
            transform: "translate(0, 0) rotate(360deg)",
          },
        },
        "fly-in-tl": {
          "0%": {
            transform: "translate(-100vw, -60vh) rotate(0deg)",
          },
          "100%": {
            transform: "translate(0, 0) rotate(360deg)",
          },
        },
        "fly-in-r": {
          "0%": {
            transform: "translate(100vw, 50vh) rotate(0deg)",
          },
          "100%": {
            transform: "translate(0, 0) rotate(360deg)",
          },
        },
        "fly-in-b": {
          "0%": {
            transform: "translate(0, 100vh)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        backgroundRotation: {
          "0%": {
            backgroundPosition: "100% 0",
          },
          "100%": {
            backgroundPosition: "0 0",
          },
        },
      },
      animation: {
        upscale: "upscale 1s ease-in-out forwards",
        "fly-in-l": "fly-in-l 2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fly-in-tl": "fly-in-tl 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fly-in-r": "fly-in-r 2.1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fly-in-b": "fly-in-b 2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in": "fade-in 2s ease-in-out forwards",
        "rotate-background": "backgroundRotation 3s cubic-bezier(.78,.1,.1,.98) infinite",
        "rotate-background-shine": "backgroundRotation .5s cubic-bezier(0,.69,.99,.28) 1 forwards",
      },
    },
  },
  plugins: [],
};
