module.exports = {
  preset: 'ts-jest',          // Use ts-jest to compile TypeScript
  testEnvironment: 'node',    // Node environment
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',   // Transform .ts files using ts-jest
  },
};
