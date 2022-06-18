module.exports = {
  testEnvironment: "jsdom",
  testTimeout: 10000,
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
