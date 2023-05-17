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
      // ToDo: Check if true ESM testing can be done here.
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
