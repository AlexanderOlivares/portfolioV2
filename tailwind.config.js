module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      tan: "#FAF0DC",
      emerald: "#0B4141",
      darkRed: "#7C2A30",
      darkBlue: "#2B235C",
      yellow: "#F8D472",
    },
    screens: {
      sm: "640px",
      md: "1350px",
      xl: "2000px",
    },
    extend: {
      keyframes: {
        menuIconOpen: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        menuIconOpen: "menuIconOpen 500ms ease-in-out",
        // showProjectDescription: "showProjectDescription 2000ms ease-in-out",
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
