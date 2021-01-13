package com.forge.PortfolioReviewService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class PortfolioReviewServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortfolioReviewServiceApplication.class, args);
	}

}
