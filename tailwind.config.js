/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto-Sans'],
      },
      fontSize: {
        sm: '0.5rem',
      },
      listStyleImage: {
        logo: 'url("/src/images/logo.png")',
      },
      letterSpacing: {
        wide: '1rem',
      },
      padding: {
        '0.2rem': '2rem',
      },
    },
  },
  plugins: [],
};
