class EndWebpackPlugin {

    constructor(shouldEmitCallback) {
        this.shouldEmitCallback = shouldEmitCallback;
    }
    apply(compiler) {
        // compiler.hooks.done.tap('EndWebpackPlugin', (stats) => {
        //     this.doneCallback(stats);
        // });
        // compiler.hooks.failed.tap('EndWebpackPlugin', (err) => {
        //     this.failCallback(err);
        // });
        compiler.hooks.shouldEmit.tap('EndWebpackPlugin', (compilation) => {
            // return true to emit the output, otherwise false
            this.shouldEmitCallback(compilation);
            for (let i = 0; i < compilation.compiler.options.plugins.length; i++)
            {
                let plugin = compilation.compiler.options.plugins[i];
                if(plugin.__pluginConstructorName && plugin.__pluginConstructorName =="HtmlWebpackPlugin"){
                    i=i;
                    plugin.options.template = "e:\\work\\myproject\\vue2\\myshoppingcart\\node_modules\\html-webpack-plugin\\lib\\loader.js!"  + compilation.compiler.context+"\\" + "template\\demo.html";
                }
            }
            return true;
          });        
    }
}

module.exports = EndWebpackPlugin;