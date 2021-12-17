


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
    lintOnSave:false,
    //跨域代理服务器
    devServer: {
        proxy:{
            '/api':{
                target:"http://39.98.123.211",
                // pathRewrite:{'^/api':''}
            }
        }
    }
}