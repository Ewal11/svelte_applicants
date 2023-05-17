/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    require("path").join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}"
    ),
  ],
  theme: {
    extend: {
      colors: {
        "old-lavender": "#6C6C85",
        "ghost-white": "#F8F8FF",
        "anti-flash-white": "#EDF1F7",
        independence: "#4C5471",
      },
    },
  },
  plugins: [...require("@skeletonlabs/skeleton/tailwind/skeleton.cjs")()],
};
