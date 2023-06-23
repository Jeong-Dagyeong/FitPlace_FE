/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto-Sans'],
      },
      listStyleImage: {
        logo: 'url("/src/images/logo.png")',
      },
    },
  },
  plugins: [],
};
