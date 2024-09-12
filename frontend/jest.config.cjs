module.exports = {
      testEnvironment: 'jest-environment-jsdom',
      setupFiles: ['./jest.setup.js'],
      moduleNameMapper: {
            "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
            "\\.(svg|png|jpg|jpeg|gif)$": "jest-transform-stub"
      },
      collectCoverageFrom: ["./src/**"],
      transformIgnorePatterns: [
            "/node_modules/(?!axios/)"
      ],
      transform: {
            "^.+\\.jsx?$": "babel-jest",
      },
}