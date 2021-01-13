package com.forge.PortfolioReviewService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forge.PortfolioReviewService.models.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
	
	public List<User> findAll();
	
	public User findByUserId(int id);
	
	public User findByFirstName(String firstName);
	
	public User findByEmail(String username);
	
	public void delete(User user);
	
}
