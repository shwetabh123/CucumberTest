$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Hooks.feature");
formatter.feature({
  "name": "Free CRM Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of Login page is FreeCRM",
  "keyword": "When "
});
formatter.match({
  "location": "Hooks_StepDefinition.title_of_Login_page_is_FreeCRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"shwetabh123\" and \"faridabad3$\"",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button again",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_clicks_on_login_button_again()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [CRM] but found [Cogmento CRM]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat stepdefinitions.Hooks_StepDefinition.user_is_on_home_page(Hooks_StepDefinition.java:121)\r\n\tat ✽.user is on home page(file:features/Hooks.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Title of Login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button again",
  "keyword": "And "
});
formatter.step({
  "name": "user is on home page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "shwetabh123",
        "faridabad3$"
      ]
    },
    {
      "cells": [
        "Tom",
        "haryana123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of Login page is FreeCRM",
  "keyword": "When "
});
formatter.match({
  "location": "Hooks_StepDefinition.title_of_Login_page_is_FreeCRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"shwetabh123\" and \"faridabad3$\"",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button again",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_clicks_on_login_button_again()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [CRM] but found [Cogmento CRM]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat stepdefinitions.Hooks_StepDefinition.user_is_on_home_page(Hooks_StepDefinition.java:121)\r\n\tat ✽.user is on home page(file:features/Hooks.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of Login page is FreeCRM",
  "keyword": "When "
});
formatter.match({
  "location": "Hooks_StepDefinition.title_of_Login_page_is_FreeCRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Tom\" and \"haryana123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button again",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_clicks_on_login_button_again()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [CRM] but found [Cogmento CRM]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat stepdefinitions.Hooks_StepDefinition.user_is_on_home_page(Hooks_StepDefinition.java:121)\r\n\tat ✽.user is on home page(file:features/Hooks.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:features/taggedhooks.feature");
formatter.feature({
  "name": "Test Tagged Hooks",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "This is First Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Fist"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "this is first step",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_first_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is second step",
  "keyword": "When "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_second_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is third step",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_third_step()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "This is Second Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Second"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "this is first step",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_first_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is second step",
  "keyword": "When "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_second_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is third step",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_third_step()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "This is Third Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Third"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "this is first step",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_first_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is second step",
  "keyword": "When "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_second_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is third step",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_third_step()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});