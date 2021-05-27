module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  webpackFinal: async config => {
    config.module.rules.forEach(rule => {
      if ( rule.test && rule.test.toString().includes('svg|')) {
        rule.test = new RegExp(rule.test.source.replace('svg|', ''))
      }
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'file-loader']
    })

    return config
  }
}
