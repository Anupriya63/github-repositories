export default {
    roots: [
        '<rootDir>/src'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testMatch: ['**/integration/**/*.spec.+(ts|tsx|js)', '**/*.spec.+(ts|tsx)'],
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    setupFilesAfterEnv: [
        '@testing-library/react/cleanup-after-each',
        '@testing-library/jest-dom/extend-expect'
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupTestFrameworkScriptFile: '<rootDir>/src/setupEnzyme.ts',
};