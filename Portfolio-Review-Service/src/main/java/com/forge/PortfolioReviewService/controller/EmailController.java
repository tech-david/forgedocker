package com.forge.PortfolioReviewService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.forge.PortfolioReviewService.models.Email;
import com.forge.PortfolioReviewService.repository.EmailServiceImpl;

import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(value="/email")
public class EmailController {
	

	
	@Autowired
	private EmailServiceImpl esi;
	
	/*
	 * address
	 * http://localhost:8200/email/sendEmail
	 */
//Email email= new Email("Ken","keeper@yahoo.com","Port", "Pending","Status of your portfolio, but has some errors need more skills for your matix", 2, "John");
	@PostMapping(value="/sendEmail")
	@ApiOperation(value="Sending an email to the respected person",
				  notes = "Sending an email to inform the person of thier porfolio status")
	public String sendEmail(@RequestBody Email email) {
		
		String body= "Hello, "+email.getUserFirstName()+"\n"+"\n"
		+ "Your portfolio number "+email.getPortfolioId()+" has been "+email.getPortfolioStatus().toLowerCase()+ ". Your reviewer has left the following feedback: "+"\n"+"\n"
				+email.getFeedBack()+"\n"+"\n"
		+"Thanks for submitting your portfolio.";
		System.out.println(body);
		if(esi==null) {
			System.out.println("it's null");
		}else {
			esi.send(email.getUserEmail(),  body);
		}
		
		return "sent";
	}
	
}