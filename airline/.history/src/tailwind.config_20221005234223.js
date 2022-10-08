module.exports = {
  jit: true,

  purge: content: [ ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {},
    colors:{
      transparent:'transparent',
      current:'currentColor'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}