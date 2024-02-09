import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "almost-white": "#FFFFFC",
        "light-gray": "#EEEEEE",
        "sea-blue": "#00ADB5",
        "darkish-gray": "#393E46",
        "almost-black": "#222831",
        "whiteish-gray": "#6C7882",
        "spotify-green": "#1DB954",
      },

      screens: {
        desktop: "1080px",
        desktop2: "1280px",
        mac: "1440px",
        ultrawide: "2560px",
      },
    },
  },

  darkMode: "class",
};
export default config;
