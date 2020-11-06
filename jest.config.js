module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleDirectories: ["node_modules", "src"],
  transformIgnorePatterns: [],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    "^@react3l\\/advanced\\-filters\\/(.*)$": "<rootDir>/src/$1",
  },
};
