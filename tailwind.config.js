/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-hero-image": "url('/images/bg-intro-mobile.png')",
      },

      boxShadow: {
        "shadow-bottom":
          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 4px 4px, rgba(0, 0, 0, 0.09) 0px 4px 8px, rgba(0, 0, 0, 0.09) 0px 4px 2px",
      },
    },
  },
  plugins: [],
};
