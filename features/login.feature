@loginScenario
Feature: Login 

Scenario: Login page loads successfully
    Given user opens the login page
    When user enters username "will" and password "will"
    And user clicks the Login button
    Then user should be redirected to the dashboard


