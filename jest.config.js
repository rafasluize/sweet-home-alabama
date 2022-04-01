module.exports = {
  testEnvironment: 'jsdom',
  bail: true,
  passWithNoTests: true,
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,tsx,ts}',
    '!src/{App,index}.{js,jsx,tsx,ts}',
    '!src/styles/*.{js,jsx,tsx,ts}',
    '!src/**/{styles,types}.{js,jsx,tsx,ts}',
  ],

  moduleNameMapper: {
    '^.*.png$': '<rootDir>/src/__mocks__/fileMock.ts',
  },
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
