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
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "dark-2": "var(--dark-2)",
        "dark-3": "var(--dark-3)",
        "dark-4": "var(--dark-4)",
        "ternary-color": "var(--ternary-color)",
        "gray-color": "var(--gray-color)",
        "secondary-text-color": "var(--secondary-text-color)",
        "text-primary-color": "var(--text-primary-color)",
        "title-color": "var(--title-color)",
        "action-color": "var(--action-color)",
        "close-color": "var(--close-color)",
        "high-color": "var(--high-color)",
      }
    },
  },
  plugins: [],
};
