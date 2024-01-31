/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      Barlow: ['"Barlow"', "sans-serif"],
      Fraunces: ['"Fraunces"', "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "hero-background": "url('/images/desktop/image-header.jpg')",
      },
      colors: {
        yelowoish: "hsl(51, 100%, 49%)",
        "soft-red": "hsl(7, 99%, 70%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
