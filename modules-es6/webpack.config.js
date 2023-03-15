const path = require('path'); // CommonJS é o padrão do node. usa-se muito o require para importar os modulos


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'), // pega o arquivo principal dentro da pasta public/assets/js
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            exclude: /node_modules/, // exclui o node_modules do fluxo.
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map' // mapeia o arquivo bundle caso der algum erro.
};