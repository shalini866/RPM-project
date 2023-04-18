import 'jest-preset-angular/setup-jest';
import type { Config } from 'jest';

const jestConfig: Config = {
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^environments/(.*)$': '<rootDir>/src/environments/$1',
  },
};

export default jestConfig;