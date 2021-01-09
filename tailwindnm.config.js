module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-focus', 'checked'],
      translate: ['motion-reduce'],
      opacity: ['disabled'],
      borderColor: ['checked']
    },
  },
  plugins: [],
}
