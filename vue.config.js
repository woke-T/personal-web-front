const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  configureWebpack: {},
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
        changeOrigin: true
      }
    }
  }
};
