module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
        "postcss-flexbugs-fixes",
        ["@fullhuman/postcss-purgecss", {
          "content": [
              "./pages/**/*.{js,jsx,ts,tsx}",
              "./components/**/*.{js,jsx,ts,tsx}"
          ]
        }],
        [
          "postcss-preset-env",
          {
            "autoprefixer": {
              "flexbox": "no-2009"
            },
            "stage": 3,
            "features": {
              "custom-properties": false
            }
          }
        ]
      ]
  : [],
}