const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  // publicPath: '/Ken_CirWeb/',
  outputDir: 'docs'
})
