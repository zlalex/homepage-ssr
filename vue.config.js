module.exports = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: './',
  runtimeCompiler: false,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "./src/styles/_entry.scss";'
      }
    }
  }
}