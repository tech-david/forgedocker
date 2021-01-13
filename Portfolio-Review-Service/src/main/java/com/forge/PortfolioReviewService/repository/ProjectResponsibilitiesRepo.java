package com.forge.PortfolioReviewService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forge.PortfolioReviewService.models.ProjectResponsibilities;

@Repository
public interface ProjectResponsibilitiesRepo extends JpaRepository<ProjectResponsibilities, Integer>{
	
	public List<ProjectResponsibilities> findAll();
	
	public ProjectResponsibilities findById(int id);

}
