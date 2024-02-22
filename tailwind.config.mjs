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
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1441px",
    },
    fontFamily: {
      Barlow: ['"Barlow"', "sans-serif"],
      Fraunces: ['"Fraunces"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-background-desktop": "url('/images/desktop/image-header.jpg')",
        "hero-background-mobile": "url('/images/mobile/image-header.jpg')",
        "image-photography-desktop": "url('/images/desktop/image-photography.jpg')",
        "image-photography-mobile": "url('/images/mobile/image-photography.jpg')",
        "graphic-design-desktop": "url('/images/desktop/image-graphic-design.jpg')",
        "graphic-design-mobile": "url('/images/mobile/image-graphic-design.jpg')",

      },
      colors: {
        yelowoish: "hsl(51, 100%, 49%)",
        "soft-red": "hsl(7, 99%, 70%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
