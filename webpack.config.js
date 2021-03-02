const path=require('path');

module.exports={
    entry:{
        peachui:'./lib/index.tsx'
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
    }
}
