/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/infra/**'
  ],
  setupFiles: ['./jest.setup.js'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': '@swc/jest',
  },
}