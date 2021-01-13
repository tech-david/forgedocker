package com.forge.PortfolioReviewService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forge.PortfolioReviewService.models.SkillMatrix;

@Repository
public interface SkillMatrixRepo extends JpaRepository<SkillMatrix, Integer>{
	
	public List<SkillMatrix> findAll();
	
	public SkillMatrix findById(int id);

}
