/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      max150: { max: "150px" },
      // => @media (max-width: 150px) { ... }
      max221: { max: "221px" },
      // => @media (max-width: 221px) { ... }
      min222: "222px",
      // => @media (min-width: 22px) { ... }
      max259: { max: "259px" },
      // => @media (max-width: 259px) { ... }
      min260: "260px",
      // => @media (min-width: 260px) { ... }
      min280: "280px",
      // => @media (min-width: 280px) { ... }
      max319: { max: "319px" },
      // => @media (max-width: 319px) { ... }
      mobile1: "320px",
      // => @media (min-width: 320px) { ... }
      mobile2: "375px",
      // => @media (min-width: 375px) { ... }
      tablet1: "640px",
      // => @media (min-width: 640px) { ... }
      tablet2: "768px",
      // => @media (min-width: 768px) { ... }
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
