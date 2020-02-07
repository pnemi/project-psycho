module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@psycho(.*)$': '<rootDir>/src/$1',
  },
}
