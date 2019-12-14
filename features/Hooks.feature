Feature: Free CRM Login Feature

Scenario: Free CRM Login Test Scenario

Given User is already on Login Page

When Title of Login page is FreeCRM

Then user clicks on login button

And User enters "shwetabh123" and "faridabad3$"

And user clicks on login button again

And user is on home page



Scenario Outline: Free CRM Login Test Scenario

Given User is already on Login Page

When Title of Login page is FreeCRM

Then user clicks on login button

And User enters "<username>" and "<password>"

And user clicks on login button again

And user is on home page

Examples:

 | username    | password   |
 | shwetabh123 | faridabad3$|
 | Tom | haryana123 |