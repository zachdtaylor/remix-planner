module.exports = {
  mode: "jit",
  purge: ["./app/**/*.{ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-neumorphism")],
};
