// babel.config.js
module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true,
      },
    ],
  ],
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
