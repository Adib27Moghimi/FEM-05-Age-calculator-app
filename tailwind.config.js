/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      mobile1: "320px",
      // => @media (min-width: 320px) { ... }
      mobile2: "375px",
      // => @media (min-width: 375px) { ... }
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop1: "1280px",
      // => @media (min-width: 1280px) { ... }
      desktop2: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        primary: {
          purple: "hsl(259, 100%, 65%)",
          red: {
            light: "hsl(0, 100%, 67%)",
          },
        },
        Neutral: {
          white: {
            DEFAULT: "hsl(0, 0%, 100%)",
            off: "hsl(0, 0%, 94%)",
          },
          grey: {
            light: "hsl(0, 0%, 86%)",
            smokey: "hsl(0, 1%, 44%)",
          },
          black: {
            off: "hsl(0, 0%, 8%)",
          },
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
