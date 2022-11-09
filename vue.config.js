const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // plugins: [
  //   new defineConfig.ProvidePlugin({
  //     $: "jquery",
  //     jquery: "jquery",
  //     "window.jQuery": "jquery",
  //     jQuery: "jquery",
  //   }),
  // ],
});
