package com.forge.PortfolioReviewService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.forge.PortfolioReviewService.models.IndustryEquivalency;

@Repository
public interface IndustryEquivalencyRepo extends JpaRepository<IndustryEquivalency, Integer>{
	
	public List<IndustryEquivalency> findAll();
	
	public IndustryEquivalency findById(int id);
	
	public void delete(IndustryEquivalency industryEq);
}
