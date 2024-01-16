# eslint_precommit

Basic node.js project: jest+eslint with precommit hook

## Project initiation:
- Create project in github
- clone repository locally in IDE
- `npm init -y`

## jest installation
- `npm install --save-dev jest`
 - try run `jest --version`. If it is not found, read your options:
  1. Use tools like `npx` to run local executables without worrying about PATH configurations. (`npx jest --version`)
  2. Install jest (other package) globally so it can be run from anywhere. Otherwise Use pwd or cd to navigate to the project's root directory, where the node_modules folder containing Jest is located.
  3. If you're using a custom PATH configuration, make sure it includes the path to your project's `node_modules` folder. You can temporarily test this by adding `node_modules/.bin` to your PATH using the following command `export PATH=$PATH:./node_modules/.bin` (replace . with the actual path to your project (i.e. `export PATH=$PATH:/Users/sshaiakhmedov/Workspace/eslint_precommit/node_modules/.bin`)).

- `npm init jest` -  command to automatically initiate Jest and create a basic configuration file in your project.
- `npm install --save-dev babel babel-preset-env jest` - for babel
- create manually babel.config.js and paste what you see in the file

## write 1st jest test using (any) axios http lib


- Debugging of tests

If the words `test`, `expect` are undefined:

1. Missing Import: If you're using ES modules, you need to import test, expect from Jest:

- Run Jest: `jest` or `npx jest` (assuming you have Jest configured)
- Recent Jest versions (27 and later) often require explicit imports of `expect`, `test` from @jest/globals for clarity and consistency.
- this .babelrc worked for me 
```
{
  "presets": ["@babel/preset-env"]
}
```

- this jest.config.js worked for me:
```
 module.exports = {
    testRunner: 'jest-jasmine2',
    testEnvironment: 'node',

      testMatch: ['**/*.test.js'], // Adjust the pattern to match your test file naming convention
    };
```






