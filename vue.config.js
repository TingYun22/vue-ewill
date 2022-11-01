const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  parallel: false,
  // 避免來自第三方依賴項的意外未編譯代碼
  transpileDependencies: true,
  devServer: {
    port: 3000,
    https: false,
    allowedHosts: 'all',
  },
  configureWebpack: (config) => {
    config.module.rules.push({
      test: require.resolve('jquery'),
      loader: 'expose-loader',
      options: {
        exposes: ['$', 'jQuery'],
      },
    })
  },
})
