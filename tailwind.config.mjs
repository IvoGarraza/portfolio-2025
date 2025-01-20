/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        myShadow1: "10px -5px 0 0 rgb(255, 255, 255)",
        myShadow2: "-10px -5px 0 0 rgb(255, 255, 255)",
      },
      zIndex: {
        "-1": "-1", // Agrega valores negativos de z-index
        "-10": "-10",
        "-20": "-20",
      },
    },
  },
  plugins: [],
};
