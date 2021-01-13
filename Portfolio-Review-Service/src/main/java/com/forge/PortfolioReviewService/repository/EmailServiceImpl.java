package com.forge.PortfolioReviewService.repository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.forge.PortfolioReviewService.models.Email;






@Service
public class EmailServiceImpl implements EmailService {
	
	private JavaMailSender jms;

	
	@Autowired
	public EmailServiceImpl(JavaMailSender jms) {
		super();
		this.jms = jms;
	}
	
	public void send(String to, String body) {
	
				SimpleMailMessage mimeMessage = new SimpleMailMessage();
			
				mimeMessage.setFrom("revature-b416ab@inbox.mailtrap.io");//set who the massage is from
				mimeMessage.setSubject("Portfolio Status"); //set the title/subject of the message
				mimeMessage.setText(body); //set the body of the message
				mimeMessage.setTo(to);  //set the receiver
				if(jms == null) {
					System.out.println("jms is null");
				}else {
					jms.send(mimeMessage); //actually send the message
				}		
	}

}