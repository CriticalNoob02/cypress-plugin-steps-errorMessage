import { addStyles } from "./addStyles";

beforeEach(function () {
  addStyles()
  window.logCalls = 1;
  window.testFlow = [];
  window.errorText = [];
});

Cypress.on('fail', (err) => {
  console.log(err)
  if(!window.errorText.length){
    err.message += `${'\n\n' + 'Test steps were:\n\n'}${window.testFlow.join('\n')}`;
  }
  else{
    err.message += `${'\n\n' + 'Error:\n\n'}${window.errorText.pop()}\n\n`;
  }
  throw err;
});