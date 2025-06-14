const nextJest = require("next/jest");

const createJestConfig = nextJest({
    // Path to Next.js app for loading config and env files
    dir: "./",
});

// Custom Jest config
const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};

// Export Jest config with Next.js integration
module.exports = createJestConfig(customJestConfig);
