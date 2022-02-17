/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "react-native": path.join(
          __dirname,
          "node_modules",
          "react-native-web"
        ),
      },
      modules: [
        ...config.resolve.modules,
        path.resolve(__dirname, "node_modules"),
      ],
      symlinks: false,
    };

    config.module.rules.push({
      test: /\.+(js|jsx|ts|tsx)$/,
      use: defaultLoaders.babel,
      include: [path.resolve(__dirname, "..", "common")],
    });

    return config;
  },
};
