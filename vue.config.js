const config = require('./config'+  (process.env.webpack_config===undefined ?'':('/'+ process.env.webpack_config+'.index')))
module.exports = {
    publicPath: config.assetPublicPath,
  }
