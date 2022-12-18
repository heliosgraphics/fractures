module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ts?$/,
      use: [options.defaultLoaders.babel],
    })

    return config
  },
  experimental: {
    appDir: true,
  },
}
