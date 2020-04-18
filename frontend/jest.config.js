module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  /* transform: {
    "^.+\\.tsx?$": "ts-jest",
  },*/
  // testMatch: ["**/*.(test|spec).(ts|tsx)", "**/__tests__/*.js?(x)"],
  globals: {
    /*"ts-jest": {
      useBabelrc: true,
      tsConfigFile: "jest.tsconfig.json",
    },*/
  },
  coveragePathIgnorePatterns: ["/node_modules/", "enzyme.js", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/mocks.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/mocks.js",
  },
};
