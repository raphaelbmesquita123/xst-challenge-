module.exports = {
    testPathIgnorePattern: ['/node_modules', '/.github'],
    setupFilesAfterEnv: ['<rootDir>/src/tests/setUpTests.js'],
    testEnvironment: 'jsdom',
  }
  