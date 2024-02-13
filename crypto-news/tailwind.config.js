/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        blue: '#2196F3',
        red: '#E04957',
        blackColor: '#333333',
        lightBlack: '#555555'
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        "lg-a": "1149px",
        xl: "1280px",
        "xl-a": "1460px",

        "2xl": "1900px",

      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
