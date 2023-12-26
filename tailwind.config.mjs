/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "background-color": "var(--color-bkg)",
        content: "var(--color-content)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
