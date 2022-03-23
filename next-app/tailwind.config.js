module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mukta: ["Mukta", "sans-serif"],
        PT: ["PT Serif", "serif"],
      },
    },
    colors: {
      "light-pink-1": "#EC9DB8",
      "dark-pink-1": "#F06F9B",
      "dark-pink-2": "#F06292",
      yellow: "yellow",
      "light-red-1": "#FC8598",
      "dark-red-1": "#F5415E",
      "light-gunmetal-1": "#1C272D",
    },
  },
  plugins: [],
};
