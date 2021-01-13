package com.forge.PortfolioReviewService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.forge.PortfolioReviewService.models.Education;
import com.forge.PortfolioReviewService.models.PortfolioItems;

public interface EducationRepo extends JpaRepository<Education, Integer> {
	
	
}
