import { addStyles } from "./addStyles";

beforeEach(function () {
  addStyles()
  window.logCalls = 1;
  window.testFlow = [];
  window.errorText = [];
});

Cypress.on('fail', (err) => {
  console.log(err)
  err.message += `${'\n\n' + 'Error:\n\n'}${window.errorText.pop()}\n\n`;
  throw err;
});