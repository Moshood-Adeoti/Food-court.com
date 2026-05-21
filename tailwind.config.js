// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         marquee: "marquee 20s linear infinite",
//         "marquee-slow": "marquee 40s linear infinite", // 👈 products scroll slower
//       },
//       keyframes: {
//         marquee: {
//           "0%":   { transform: "translateX(0%)" },
//           "100%": { transform: "translateX(-50%)" },
//         },
//       },
//     },
//   },
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};