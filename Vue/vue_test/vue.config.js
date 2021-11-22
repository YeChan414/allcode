module.exports = {
    pages:{
        index:{
            entry:'src/main.js',
        },

    },
    //开启代理服务器
    /* 配置代理方式1 */
    /*devServer: {
        proxy: 'http://localhost:5000'  //只能配置一个配置代理，而且如果public文件夹里面有axios要的数据，
                                        //就会直接给，不会走配置代理
      }*/
    /* 配置代理方式2 */
    devServer: {
        proxy: {
          '/chenyi': {
            target: 'http://localhost:5000',
            pathRewrite:{'^/chenyi':''},  //重写路径，因为/chenyi是浏览器自己定义的开头，服务器没有，所以将所有以/chenyi开头的都换成空字符串
            ws: true,
            changeOrigin: true
          },
          '/chen': {
            target: 'http://localhost:5001',
            pathRewrite:{'^/chen':''},
            ws: true,
            changeOrigin: true
          }
        }
      }
}