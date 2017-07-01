module.exports = {
    entry: './public/app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }
        ]
    },
    resolve: {
        root:__dirname,
        alias:{
            Greeter:'public/app/component/Greeter.jsx',
            GreeterMessage:'public/app/component/GreeterMessage.jsx',
            GreeterForm:'public/app/component/GreeterForm.jsx',
            Weather:'public/app/WeatherComponent/Weather.jsx',
            WeatherData:'public/app/WeatherComponent/WeatherData.jsx',
            WeatherForm:'public/app/WeatherComponent/WeatherForm.jsx',
            OpenWeatherMap:'public/app/apicall/OpenWeatherMap.jsx',
            LocateUs:'public/app/WeatherComponent/LocateUs.jsx',
            AboutUs:'public/app/WeatherComponent/AboutUs.jsx',
            Services:'public/app/WeatherComponent/Services.jsx',
            Main:'public/app/WeatherComponent/Main.jsx',
            NavBar:'public/app/WeatherComponent/NavBar.jsx',
        },
        extensions: ['', '.js', '.jsx']
    }
};