process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: ["src/**/*.ts"],
    preprocessors: { "**/*.ts": "karma-typescript" },
    proxies: {
      "/mockServiceWorker.js": "/base/__mocks__/mockServiceWorker.js",
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["ChromeHeadless"],
  });
};
