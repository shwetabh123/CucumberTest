
package MyRunner;


import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import java.io.File;

import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;


@RunWith(Cucumber.class)

@CucumberOptions(
		
		features= "features",
		glue={"stepdefinitions"},
	
				
        plugin = {"pretty",
        		
        		"html:target/cucumber-html-report",
		
		  "json:target/cucumber.json"
		 		
        		
        		},
		
	
				
		 	
		monochrome = true,//to display the console output in a proper readable format
		
		strict=true,//it will check if any step is not defined in step def file
		
		
		dryRun=false//to check mapping is proper between feature file & step def file
		 
		)
		
	
public class TestRunner extends AbstractTestNGCucumberTests {
	
	public static WebDriver driver;
	private static TestNGCucumberRunner testRunner;
	
	
	@AfterClass
	public static void writeExtentReport() {
		
		
		/*
		 * Reporter.loadXMLConfig(new
		 * File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath())
		 * );
		 * 
		 * Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
		 * Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
		 * Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
		 * Reporter.setSystemInfo("Selenium", "3.7.0"); Reporter.setSystemInfo("Maven",
		 * "3.5.2");
		 * 
		 * Reporter.setSystemInfo("Java Version", "1.8.0_151");
		 */
	
	
	     testRunner.finish();
	
	
	}
	
	
	@BeforeClass
	public void setUP()
	{
		
		/*
		 * System.setProperty("webdriver.chrome.driver","D:\\workspace1\\CucumberDemo\\chromedriver_78.exe");
		 *  //driver=new ChromeDriver(); 
	
		 */
		 testRunner = new TestNGCucumberRunner(TestRunner.class);
		 		
	}
	
	
	
	/*
	 * @Test(description="login",dataProvider="features")
	 * 
	 * public void login(CucumberFeatureWrapper cFeature) {
	 * testRunner.runCucumber(cFeature.getCucumberFeature());
	 * 
	 * }
	 * 
	 * @DataProvider(name="features") public Object[][] getFeatures()
	 * 
	 * { return testRunner.provideFeatures();
	 * 
	 * }
	 */
	
	
	
/*	@AfterClass
	public void tearDown()
	{
		testRunner.finish();
	}*/
	
	
}

