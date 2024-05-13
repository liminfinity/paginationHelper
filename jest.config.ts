import {Config} from 'jest'

const config: Config = {
    roots: ["<rootDir>/src"],
    moduleFileExtensions: ["js", "ts"],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.ts$": "ts-jest",
    },
    testMatch: ["**/?(*.)(spec|test).[jt]s"]
 
};

export default config