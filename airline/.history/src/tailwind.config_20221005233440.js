module.exports = {
  jit: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      transparent:'transpare'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}