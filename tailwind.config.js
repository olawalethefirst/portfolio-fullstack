module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      mobl: "420px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        tablet: '2.5rem',
        laptop: '4rem',
        desktop: '5rem',
        laptopl: '6rem',
      },
    },
    extend: {
      colors: {
        primary: "#17301B",
        secondary: "#E5FDAE",
        primaryAccent: "#D9E7CB",
        secondaryAccent: "#100C0D",
        primaryCompliment: "#302817",
        secondaryCompliment: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
