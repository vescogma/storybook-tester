module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 })
  ]
}
