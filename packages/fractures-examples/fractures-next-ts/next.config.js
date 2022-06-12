// To purge @fractures/css
// https://purgecss.com/guides/next.html#customize-postcss-configuration-next-js-9-3

// Lets Next load global CSS for @fractures/ui
const { withGlobalCss } = require('next-global-css')

module.exports = withGlobalCss()({
  // Optionals
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  devIndicators: {
    autoPrerender: false
  }
})
