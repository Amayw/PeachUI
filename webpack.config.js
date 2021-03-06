const path=require('path');
module.exports={
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
            },
            {
                test:/\.svg$/,
                loader:'svg-sprite-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}
