// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login', () => {

  test('Login page loads successfully', { tag: ['@loginScenario'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('user opens the login page', null, { page }); 
    await When('user enters username "will" and password "will"', null, { page }); 
    await And('user clicks the Login button', null, { page }); 
    await Then('user should be redirected to the dashboard', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@loginScenario"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user opens the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When user enters username \"will\" and password \"will\"","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user clicks the Login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then user should be redirected to the dashboard","stepMatchArguments":[]}]},
]; // bdd-data-end