module.exports = {
  jit: true,
  purge: [
    content: [
      // Example content paths...
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
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