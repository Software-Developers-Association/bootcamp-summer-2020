module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#0d47a1',
          light: '#5472d3',
          dark: '#002171',
          text: '#ffffff'
        },
        secondary: {
          default: '#1976d2',
          light: '#63a4ff',
          dark: '#004ba0',
          text: '#ffffff',
          '100': '#eeffff',
          '200': '#bbdefb',
          '300': '#8aacc8'
        }
      }
    },
  },
  variants: {
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'active'
    ]
  },
  plugins: [],
}
