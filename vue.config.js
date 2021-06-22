const { join } = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@lib': join(__dirname, './src/lib'),
        '@src': join(__dirname, './src'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  },
  publicPath: '/sudoku-solver/',
  runtimeCompiler: true,
}
