// module.exports = {
  // Test file patterns
  // testMatch: [], // Include .mjs
  // moduleNameMapper: {
  //   'src(?!.*src)(.*)$': '<rootDir>/src/$1'
  // },
  // transformIgnorePatterns: ["node_modules/(?!(@babel|jest-runtime))/"],

  // // Module file extensions for transformation
  // moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  // // Test environment
  // transform: {
  //   '^.+\\.jsx?$': 'babel-jest'
  // },
  // // Automatically clear mock calls and instances between every test
  // clearMocks: true,
  module.exports = {
    // testRunner: 'jest-jasmine2', // another option
    testEnvironment: 'node',
      testMatch: ['**/*.test.js'], // Adjust the pattern to match your test file naming convention
    };
// };