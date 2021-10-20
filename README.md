# coverage report handler

Show how to use the **Coverage report** to remove unused code

## instruction
- run test page
  ```sh
  npm run start
  ```
- record Coverage report and put in data
- in src/handle-coverage-report.js write path to your Coverage report
- build files only with used code
  ```sh
  npm run build
  ```
- check result in build folder
- yes, we have only the js code used, but unfortunately it is not valid. you can manually fix the errors and then everything will be ok.

The repository was created to answer this question on stackoverflow.com:
[Remove unused javascript code based on coverage report](https://stackoverflow.com/questions/49381864/remove-unused-javascript-code-based-on-coverage-report/69644897#69644897)
