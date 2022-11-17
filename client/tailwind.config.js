/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('assets/bg.svg')",
        "home-30": "url('assets/bg-30.svg')",
        "home-60": "url('assets/bg-60.svg')",
        "home-blue": "url('assets/bg-blue.svg')",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
