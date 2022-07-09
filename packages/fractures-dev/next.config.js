module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.tsx?|\.ts?$/,
      use: [options.defaultLoaders.babel],
    })

    return config
  },
}
