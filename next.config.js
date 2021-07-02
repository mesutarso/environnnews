const withPlugins = require('next-compose-plugins');
const sass = require("@zeit/next-sass")
const css = require("@zeit/next-css")

const nextConfig = {
    webpack: (config, { isServer }) => {
        //config.plugins.push(new webpack.IgnorePlugin(/jsdom$/))
        if (!isServer) {
            config.node = {
              fs: 'empty'
            }
        }
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
            loader: 'url-loader',
                options: {
                limit: 100000,
                name: '[name].[ext]'
            }},
        })
        return config
    },

    //     NEXT_PUBLIC_MONGO_URI: "mongodb://127.0.0.1:27017/db_test_environews",
 
    images: {
        domains: ['i.ytimg.com'],
        domains: ["res.cloudinary.com"]
    },
}

module.exports = withPlugins([
    [css],
    [sass, {
        cssModules: true
    }]
], nextConfig);
