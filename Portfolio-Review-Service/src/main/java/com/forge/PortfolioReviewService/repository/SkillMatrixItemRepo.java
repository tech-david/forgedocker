package com.forge.PortfolioReviewService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forge.PortfolioReviewService.models.SkillMatrixItems;

@Repository
public interface SkillMatrixItemRepo extends JpaRepository<SkillMatrixItems, Integer>{
	
	public List<SkillMatrixItems> findAll();
	
	public SkillMatrixItems findById(int id);
	
}
