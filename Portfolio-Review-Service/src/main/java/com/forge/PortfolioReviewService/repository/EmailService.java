package com.forge.PortfolioReviewService.repository;



public interface EmailService {
	void send(String to, String body);
//	void send(Email email);
}