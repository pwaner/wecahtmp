// https://github.com/shelljs/shelljs
require("./check-versions")();

process.env.NODE_ENV = "production";

var ora = require("ora");
var path = require("path");
var chalk = require("chalk");
var shell = require("shelljs");
var webpack = require("webpack");
var config = require("../config");
var webpackConfig = require("./webpack.prod.conf");
var spinner = ora("building for production...");
var appDir = "../../app-js/app-js-wechatmp"
spinner.start();

var assetsPath = path.join(
  config.build.assetsRoot,
  config.build.assetsSubDirectory
);
shell.rm("-rf", appDir + "/target");
shell.rm("-rf", assetsPath);
shell.mkdir("-p", assetsPath);
shell.config.silent = true;
shell.cp("-R", "static/*", assetsPath);
shell.config.silent = false;

webpack(webpackConfig, function(err, stats) {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + "\n\n"
  );

  console.log(chalk.cyan("  Build complete.\n"));
  console.log(
    chalk.yellow(
      "  Tip: built files are meant to be served over an HTTP server.\n" +
        "  Opening index.html over file:// won't work.\n"
    )
  );

  shell.rm("-rf", appDir + "/src/main/resources/mp");
  shell.mkdir("-p", appDir + "/src/main/resources/mp");
  shell.cp("-R", "dist/*", appDir + "/src/main/resources/mp/");
  shell.rm(appDir + "/src/main/resources/mp/static/js/*.map");
  shell.rm(appDir + "/src/main/resources/mp/static/css/*.map");
});
