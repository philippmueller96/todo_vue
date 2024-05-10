/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 10px 30px 0px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
