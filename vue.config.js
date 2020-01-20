const config = require('./config'+  (process.env.webpack_config===undefined ?'':('/'+ process.env.webpack_config+'.index')))
const EndWebpackPlugin = require('./config/plugins/EndWebpackPlugin');
console.log(process.env.webpack_config)
console.log(config.assetPublicPath)

module.exports = {
    publicPath: config.assetPublicPath, 
    configureWebpack: {
        plugins: [
          new EndWebpackPlugin(compilation => {
            //console.info('after webpack all done',compilation)
            compilation.outputOptions.publicPath = '/1111/'
        } )
        ]
      }    
    // chainWebpack: config => {
    //   config
    //     .plugin('html')
    //     .tap(args => {
    //       args[0].template = 'src/template/libModelindex.html'
    //       return args
    //     })
    // }
  }
