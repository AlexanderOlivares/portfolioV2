module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        menuIconOpen: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        menuIconOpen: "menuIconOpen 500ms ease-in-out",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover", "focus"],
      display: ["group-hover"],
    },
  },
  plugins: [],
};
