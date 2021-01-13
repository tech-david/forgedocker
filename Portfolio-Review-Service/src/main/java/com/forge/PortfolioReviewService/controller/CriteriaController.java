package com.forge.PortfolioReviewService.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.forge.PortfolioReviewService.models.Criteria;
import com.forge.PortfolioReviewService.repository.CriteriaRepo;

@RestController
@RequestMapping("/criteria")
@CrossOrigin(origins = {"http://localhost:4200"}, allowCredentials = "true")
public class CriteriaController {
	
	@Autowired
	private CriteriaRepo criteriaRepo;
	
	@GetMapping("/getAllCriteria")
	public List<Criteria> getAllCriteria(){
		List<Criteria> myList = criteriaRepo.findAll();
		return myList;
	}

	@PostMapping(value="update/{id}", produces= MediaType.APPLICATION_JSON_VALUE)
	public Criteria updateCriteriaByid(@PathVariable(value="id") int id, @Valid @RequestBody Criteria criteria) {
		//int criteriaId=Integer.valueOf(id);
		Criteria updateCriteria = criteriaRepo.findById(id);
		System.out.println(criteria);
		updateCriteria.setEntryAmount(criteria.getEntryAmount());
		updateCriteria.setCriteriaName(criteria.getCriteriaName());
		updateCriteria.setRequirements(criteria.getRequirements());
		System.out.println(updateCriteria);
		return criteriaRepo.save(updateCriteria);
		
	}
	
	@GetMapping("/{name}")
	public Criteria findCriteriaByName(@PathVariable(value="name") String name) {
		return criteriaRepo.findByName(name);
	}
	

}
