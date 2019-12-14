package stepdefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHooksStepDefinition {
	
	
	@Before(order=0)
	public void setUp()
	{
		
		System.out.println("Launch FF");
		System.out.println("Enter URL for Free CRM App");
	}


	@After(order=0)
	public void setdown()
	{
		
		System.out.println("close the browser");
		
	}

	@Before(order=1)
	public void setUp1()
	{
		
		System.out.println("Launch Chrome");
		System.out.println("Enter URL for Free CRM App");
	}


	@After(order=1)
	public void setdown1()
	{
		
		System.out.println("close the browser");
		
	}

	
	@Before("@First")
	public void beforeSecond()
	{
		
		System.out.println("Before only first scenario");
	}


	@After("@First")
	public void afterSecond()
	{
		
		System.out.println("After only first scenario");
		
	}

	
	@Before("@Second")
	public void beforeThird()
	{
		
		System.out.println("Before only Second scenario");
	}


	@After("@Second")
	public void afterThird()
	{
		
		System.out.println("After only Second scenario");
		
	}
	@Before("@Third")
	public void beforeFirst()
	{
		
		System.out.println("Before only Third scenario");
	}


	@After("@Third")
	public void afterFirst()
	{
		
		System.out.println("After only Third scenario");
		
	}

	
	@Given("^this is first step$")
	public void this_is_first_step() throws Throwable {
	
		System.out.println("This is first step");
	}

	@When("^this is second step$")
	public void this_is_second_step() throws Throwable {
		System.out.println("This is second step");

	}

	@Then("^this is third step$")
	public void this_is_third_step() throws Throwable {
		System.out.println("This is third step");
	}



}
