process.env.CHROME_BIN = require("playwright").chromium.executablePath();

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: ["src/**/*.ts"],
    preprocessors: { "**/*.ts": "karma-typescript" },
    reporters: ["progress", "karma-typescript"],
    // ToDo: Add tests for Chromuim, WebKit and Firefox from playwright https://github.com/microsoft/playwright
    browsers: ["ChromeHeadless"],
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
      // ToDo: karma-typescript does not support ES modules
      // https://github.com/monounity/karma-typescript/issues/345#issuecomment-869121158
      compilerOptions: {
        module: "commonjs",
      },
      bundlerOptions: {
        transforms: [require("karma-typescript-es6-transform")()],
      },
    },
    singleRun: true,
  });
};
