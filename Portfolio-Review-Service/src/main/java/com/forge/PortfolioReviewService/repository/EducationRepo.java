package com.forge.PortfolioReviewService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forge.PortfolioReviewService.models.Education;

@Repository
public interface EducationRepo extends JpaRepository<Education, Integer>{

	
	public List<Education> findAll();
	
	public Education findById(int id);

}
