/*
 * @Date: 2020-03-19 11:31:37
 * @LastEditors: Pluto
 * @LastEditTime: 2020-03-19 11:59:35
 */
const {
  override,
  fixBabelImports,
  // addWebpackPlugin,
  adjustStyleLoaders
} = require("customize-cra");
// const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  // addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  adjustStyleLoaders(({
    use: [_, css, postcss, resolve, processor]
  }) => {
    if (processor && processor.loader.includes('sass-loader')) {
      processor.options.implementation = require('sass') // sass-loader
    }
  })
);