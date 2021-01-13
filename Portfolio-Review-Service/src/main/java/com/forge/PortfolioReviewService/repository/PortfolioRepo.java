package com.forge.PortfolioReviewService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.forge.PortfolioReviewService.models.Portfolio;
import com.forge.PortfolioReviewService.models.User;

@Repository
public interface PortfolioRepo extends JpaRepository<Portfolio, Integer>{

	public List<Portfolio> findAll();
	
	@Query(value = "SELECT * FROM portfolio WHERE portfolio_id =:id", nativeQuery = true)
	public Portfolio findById(int id);
	
	public List<Portfolio> findByUser(User user); //edited this and final to test... was id

	@Query(value = "SELECT * FROM portfolio WHERE status =:status", nativeQuery = true)
	public List<Portfolio> findByStatus(String status);

	@Query("SELECT MAX(id) from Portfolio Portfolio")
    public int createdPorfolio();

	public List<Portfolio> findAllByUser(User user);
}
