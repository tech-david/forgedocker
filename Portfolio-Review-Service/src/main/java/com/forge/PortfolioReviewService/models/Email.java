package com.forge.PortfolioReviewService.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Generated()
public class Email {
	
	private String userFirstName;
	
	private String userEmail;
	
	private String subject;
	
	private String portfolioStatus;
	
	private String feedBack;
	
	private int portfolioId;
	
	private String adminUserName;
	
	
	
}