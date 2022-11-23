const webpack = require('webpack')
const isProduction = process.env.NODE_ENV === 'production'
const pkg = require('./package.json')
const publicPath = isProduction ? './' : '/'
// const cdn = isProduction ? 'http://cdn.lifeline.jinka.cn:32080' : 'http://cdn.lifeline.jinka.cn:7001'

module.exports = {
	publicPath,
	productionSourceMap: false,
	lintOnSave: false,
	devServer: {
		port: 4000,
		hot: true,
		open: true,
		historyApiFallback: true,
		disableHostCheck: true,
		proxy: {
			'^/admin-api': {
				target: 'https://ralifeline.china-goldcard.com',
				changeOrigin: true,
				// pathRewrite: {
				// 	'^/api': '/',
				// },
			},
		},
	},
	css: {
		extract: false,
		sourceMap: false,
	},
	configureWebpack: config => {
		config.resolve.extensions = ['.js', '.vue', '.json', '.ts', '.tsx']
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.version': JSON.stringify(pkg.version),
				// 'process.env.cdn': JSON.stringify(cdn),
			}),
		)
	},
	chainWebpack: config => {
		if (isProduction) {
			config.plugins.delete('prefetch')
		} else {
			config.resolve.symlinks(true)
		}
		config.plugin('named-chunks').use(require('webpack/lib/NamedChunksPlugin'), [
			chunk => {
				if (chunk.name) {
					return chunk.name
				}
				const hash = require('hash-sum')
				const joinedHash = hash(Array.from(chunk.modulesIterable, m => m.id).join('_'))
				return `chunk-` + joinedHash
			},
		])
	},
}
