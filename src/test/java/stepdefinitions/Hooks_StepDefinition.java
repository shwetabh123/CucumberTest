package stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Hooks_StepDefinition {
	
WebDriver driver;



@Before
public void setUp()
{
	
	System.out.println("Before");
	  System.setProperty("webdriver.chrome.driver","D:\\workspace1\\CucumberDemo\\chromedriver_78.exe");
	  driver=new ChromeDriver();
}


@After
public void setdown()
{
	
	System.out.println("after");
	
}
	
	@Given("^User is already on Login Page$")
	public void user_is_already_on_Login_Page() throws Throwable {
	 
		
		
		/*
		 * System.setProperty("webdriver.chrome.driver",
		 * "D:\\workspace1\\CucumberDemo\\chromedriver_78.exe"); driver=new
		 * ChromeDriver();
		 */
		 
		driver.get("https://www.freecrm.com");
		System.out.println("User is already on Login Page");
		
	    
	}

	@When("^Title of Login page is FreeCRM$")
	public void title_of_Login_page_is_FreeCRM() throws Throwable {
		String title=driver.getTitle();
		Assert.assertEquals("Free CRM #1 cloud software for any business large or small",title);
		


		System.out.println("Title of Login page is FreeCRM");
		    
	}
	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	
		
		WebElement loginbtn=driver.findElement(By.xpath("//a[@href='https://ui.freecrm.com']"));	
	    JavascriptExecutor  js=(JavascriptExecutor)driver;
				js.executeScript("arguments[0].click", loginbtn);
				
				
		
		driver.findElement(By.xpath("//a[@href='https://ui.freecrm.com']")).click();;
		
				Thread.sleep(20000);
		
				System.out.println("user clicks on login button");
				
	}

	//@And("^User enters username and password$")
	

	@And("^User enters \"(.*?)\" and \"(.*?)\"$")
	public void user_enters_username_and_password(String username,String password) throws Throwable {
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		System.out.println(" User enters username and password");
		
	}
	
	@And("^user clicks on login button again$")
	public void user_clicks_on_login_button_again() throws Throwable {
/*	
		
		WebElement loginbtn=driver.findElement(By.xpath("//a[@href='https://ui.freecrm.com']"));	
	    JavascriptExecutor  js=(JavascriptExecutor)driver;
				js.executeScript("arguments[0].click", loginbtn);
				
				*/
		
	        	driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();;
		
				Thread.sleep(20000);
				System.out.println("user clicks on login button again");
				
		
	}


	@And("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
		String title=driver.getTitle();
		Assert.assertEquals(title,"CRM");
		 driver.quit();
		 System.out.println("user is on home page");
			
	}

	
	
	
}

