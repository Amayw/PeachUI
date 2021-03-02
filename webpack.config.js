const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    mode:'production',
    entry:{
        peachui:'./lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts','.js','.tsx','.jsx']
    },
    output:{
        path:path.resolve(__dirname,'dist/lib'),
        library: 'PeachUI',
        libraryTarget: 'umd'
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'awesome-typescript-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'PeachUI - React',
            template:'index.html'
        })
    ]
}
