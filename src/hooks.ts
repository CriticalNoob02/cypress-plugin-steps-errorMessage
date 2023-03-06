import { addStyles } from "./addStyles";

beforeEach(function () {
  addStyles()
  window.logCalls = 1;
  window.testFlow = [];
  window.errorText = [];
});


Cypress.on('fail', (err) => {
  console.log(err)
  if(!window.errorText.length && !window.testFlow.length){
    err.message += `${'\n\n' + 'Arquivo de teste sem cobertura de erro!\n\n'}`
  }
  else if(!window.testFlow.length){
    err.message += `${'\n\n' + 'Possivel erro:\n\n'}${window.errorText.pop()}\n\n`
  }
  else{
    err.message += `${'\n\n' + 'Steps de teste:\n\n'}${window.testFlow.join('\n')}`
  }
  throw err;
});