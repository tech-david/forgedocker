package com.forge.PortfolioReviewService.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.forge.PortfolioReviewService.models.Portfolio;
import com.forge.PortfolioReviewService.models.User;

@Repository
public interface PortfolioRepo extends JpaRepository<Portfolio, Integer>{

	public List<Portfolio> findAll();
	
	@Query(value = "SELECT * FROM portfolio WHERE id =:id", nativeQuery = true)
	public Portfolio findById(int id);
	
	public List<Portfolio> findByUserId(int id);
	
	public List<Portfolio> findByStatus(String status);

	@Query("SELECT MAX(id) from Portfolio Portfolio")
    public int createdPorfolio();

	public List<Portfolio> findAllByUserId(int id);
}
