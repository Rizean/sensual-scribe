module.exports = {
    testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    coverageReporters: ['text', 'lcov', 'json-summary'],
    collectCoverageFrom: [
        'src/**/*.tsx',
        'src/**/*.js',
        'src/**/*.mjs',
        '!src/**/*.spec.tsx',
        '!dist/**/*',
        '!src/index.tsx',
    ],
    coverageThreshold: {
        global: {
            branches: 95,
            functions: 90,
            lines: 99,
            statements: 99,
        },
    },
};
