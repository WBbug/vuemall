


// module.exports = {
//   //...
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     compress: true,
//     port: 9000,
//   },
// };
module.exports = {
    productionSourceMap:false,
    lintOnSave:false,
    //跨域代理服务器
    //不写就是向本地服务器请求数据，利用webpack devserver
    devServer: {
        proxy:{
            //请求的时候有api字段  就会开始进行跨域代理
            '/api':{
                target:"http://39.98.123.211",
                // pathRewrite:{'^/api':''}
            }
        }
    }
}