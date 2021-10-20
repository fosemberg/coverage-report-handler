# coverage obtainer

Show how to use the **Coverage report** to remove unused code

## instruction
- run test page
  ```sh
  npm run start
  ```
- record Coverage report and put in data
- in src/obtain-coverage.js write path to your Coverage report
- build files only with used code
  ```sh
  npm run build
  ```
- check result in build folder
- yes, we have only the js code used, but unfortunately it is not valid. you can manually fix the errors and then everything will be ok.

