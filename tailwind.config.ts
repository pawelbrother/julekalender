module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transform: {
        "rotate-y-90": "rotateY(90deg)",
        "rotate-y-0": "rotateY(0deg)",
      },
    },
  },
  plugins: [],
};
