module.exports = {
  jit: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  module.exports = {
    darkMode: 'media',
    // ...
  }// or 'media' or 'class'
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