const { composePlugins, withNx } = require("@nx/webpack");
const { withReact } = require("@nx/react");

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  config.module.rules.push({
    test: /\.(mp4|webm)$/,
    use: {
      loader: "file-loader",
      options: {
        name: "[name].[hash].[ext]",
        outputPath: "assets/videos",
      },
    },
  });

  return config;
});
