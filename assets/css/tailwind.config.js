module.exports = {
  content: [
    "./*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF5EF',
        linen: '#F0E6D4',
        sage: '#A8B5A0',
        olive: '#6B7F5E',
        walnut: '#5C4033',
        bronze: '#8B6914',
      },
      fontFamily: {
        elegant: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
