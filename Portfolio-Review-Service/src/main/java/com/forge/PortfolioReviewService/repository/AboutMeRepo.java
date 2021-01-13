package com.forge.PortfolioReviewService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forge.PortfolioReviewService.models.AboutMe;

@Repository
public interface AboutMeRepo extends JpaRepository<AboutMe, Integer>{
	
	public List<AboutMe> findAll();
	
	public AboutMe findById(int id);

}
