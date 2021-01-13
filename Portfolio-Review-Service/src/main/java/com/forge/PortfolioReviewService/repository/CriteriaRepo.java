package com.forge.PortfolioReviewService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.forge.PortfolioReviewService.models.Criteria;


@Repository
public interface CriteriaRepo extends JpaRepository<Criteria, Integer>{
	
	public List<Criteria> findAll();
	public Criteria save(Criteria criteria);
	public Criteria findById (int id);
	
	@Query(value = "SELECT * FROM Criteria_Table WHERE criteria_name =:criteriaName", nativeQuery = true)
	public Criteria findByName( String criteriaName);

}
