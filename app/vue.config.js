module.exports = {
  publicPath: process.env.VUE_APP_URL, // 路由基本路径
  outputDir: process.env.outputDir, // 打包输出文件基本路径
  indexPath: 'index.html',
  lintOnSave: false,
  devServer: {
    proxy: {
      // 配置跨域
      '/blogapi': {
        // 代理接口前缀为/blogapi的请求
        target: 'http://localhost:3001/api/', // 需要代理到的目标地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/blogapi': '' // 重写路径
        }
      }
    }
  }
}
