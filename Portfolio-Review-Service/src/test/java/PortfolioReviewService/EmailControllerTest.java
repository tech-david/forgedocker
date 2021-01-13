package PortfolioReviewService;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.forge.PortfolioReviewService.controller.EmailController;
import com.forge.PortfolioReviewService.models.Email;
import com.forge.PortfolioReviewService.repository.EmailServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
class EmailControllerTest {

	@Autowired
	@MockBean
	private EmailServiceImpl esi;
	
	@Autowired
	private EmailController emailController;
	
	@Test
	public void sendEmailTest() {
		String firstName = "Charles";
		String userEmail = "cmoore@email.com";
		String subject = "Automated test email from review service";
		String portfolioStatus = "Tested";
		String feedback = "This email was generated by the portfolio review service as a test. If the service is not being tested, please contact an administrator.";
		int portfolioId = -1;
		
		Email email = new Email(firstName, userEmail, subject, portfolioStatus, feedback, portfolioId, null);
        emailController.sendEmail(email);
        verify(esi, times(1)).send(email.getUserEmail(),"Hello, Charles\n\nYour portfolio number -1 has been tested. Your reviewer has left the following feedback: \n\n"+feedback+"\n\nThanks for submitting your portfolio.");
        
        email.setFeedBack("");
        emailController.sendEmail(email);
        verify(esi, times(1)).send(email.getUserEmail(),"Hello, Charles\n\nYour portfolio number -1 has been tested. Your reviewer has left the following feedback: \n\n\n\nThanks for submitting your portfolio.");
		
	}
}