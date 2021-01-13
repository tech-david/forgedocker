package com.forge.PortfolioReviewService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forge.PortfolioReviewService.models.ProjectTechnologies;

@Repository
public interface ProjectTechnologiesRepo extends JpaRepository<ProjectTechnologies, Integer>{
	
	public List<ProjectTechnologies> findAll();
	
	public ProjectTechnologies findById(int id);

}
