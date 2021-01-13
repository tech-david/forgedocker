package com.forge.PortfolioReviewService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forge.PortfolioReviewService.models.SkillMatrixItem;

@Repository
public interface SkillMatrixItemRepo extends JpaRepository<SkillMatrixItem, Integer>{
	
	public List<SkillMatrixItem> findAll();
	
	public SkillMatrixItem findById(int id);
	
}
