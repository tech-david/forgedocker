package com.forge.PortfolioReviewService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forge.PortfolioReviewService.models.Project;

@Repository
public interface ProjectRepo extends JpaRepository<Project, Integer>{

	
	public List<Project> findAll();
	
	public Project findById(int id);

	
	
}
