package com.forge.PortfolioReviewService.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.forge.PortfolioReviewService.models.AboutMe;
import com.forge.PortfolioReviewService.models.Education;
import com.forge.PortfolioReviewService.models.IndustryEquivalency;
import com.forge.PortfolioReviewService.models.PortfolioItems;
import com.forge.PortfolioReviewService.models.Project;
import com.forge.PortfolioReviewService.models.SkillMatrix;
import com.forge.PortfolioReviewService.models.IndustryEquivalency;
import com.forge.PortfolioReviewService.models.PortfolioItems;
import com.forge.PortfolioReviewService.models.Project;


public interface PortfolioItemsRepo extends JpaRepository<PortfolioItems, Integer> {

	//find one also these say item Id but are actually portfolioid
	
	//public AboutMe findById(int id); //don't think this does anything LOL
	
	@Query(value="SELECT * FROM portfolio_items JOIN about_me ON portfolio_items.portfolio_items_id = about_me.portfolio_items_id WHERE portfolio_items.item_type='about_me' AND portfolio_id=:portfolioId", nativeQuery=true)
	public AboutMe findByItemId(@Param("portfolioId") int portfolioId);
	
	@Query(value="SELECT * FROM portfolio_items JOIN education ON portfolio_items.portfolio_items_id = education.portfolio_items_id WHERE portfolio_items.item_type='education' AND portfolio_id=:portfolioId", nativeQuery=true)
	public Education findEduByItemId(@Param("portfolioId") int portfolioId);

	@Query(value="SELECT * FROM portfolio_items JOIN industry_equivalency ON portfolio_items.portfolio_items_id = industry_equivalency.portfolio_items_id WHERE portfolio_items.item_type='industry_equivalency' AND portfolio_id=:portfolioId", nativeQuery=true)
	public IndustryEquivalency findIndEByItemId(@Param("portfolioId") int portfolioId);
	
	@Query(value= "SELECT * FROM portfolio_items JOIN project ON portfolio_items.portfolio_items_id = project.portfolio_items_id WHERE portfolio_items.item_type='project' AND portfolio_id=:portfolioId", nativeQuery=true)
	public Project findProjectByItemId(@Param("portfolioId") int portfolioId);
	
	@Query(value= "SELECT * FROM portfolio_items JOIN skill_matrix ON portfolio_items.portfolio_items_id = skill_matrix.portfolio_items_id WHERE portfolio_items.item_type='skill_matrix' AND portfolio_id=:portfolioId", nativeQuery=true)
	public SkillMatrix findSkillMatrixByItemId(@Param("portfolioId") int portfolioId);
	
	//findAll
	@Query(value="SELECT * FROM portfolio_items JOIN education ON portfolio_items.portfolio_items_id = education.portfolio_items_id WHERE portfolio_items.item_type='education' AND portfolio_id=:portfolioId", nativeQuery=true)
	public ArrayList<Education> findAllEdusByPortfolioId(@Param("portfolioId") int portfolioId);

	@Query(value="SELECT * FROM portfolio_items JOIN industry_equivalency ON portfolio_items.portfolio_items_id = industry_equivalency.portfolio_items_id WHERE portfolio_items.item_type='industry_equivalency' AND portfolio_id=:portfolioId", nativeQuery=true)
	public IndustryEquivalency[] findByIndustryItemId(@Param("portfolioId") int portfolioId);
	
	@Query(value="SELECT * FROM portfolio_items JOIN project ON portfolio_items.portfolio_items_id = project.portfolio_items_id WHERE portfolio_items.item_type='project' AND portfolio_id=:portfolioId", nativeQuery=true)
	public Project[] findByProjectItemId(@Param("portfolioId") int portfolioId);
}
