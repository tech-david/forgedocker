package com.forge.PortfolioReviewService.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.forge.PortfolioReviewService.models.AboutMe;
import com.forge.PortfolioReviewService.models.Education;
import com.forge.PortfolioReviewService.models.Portfolio;
import com.forge.PortfolioReviewService.models.IndustryEquivalency;
import com.forge.PortfolioReviewService.models.PortfolioItems;
import com.forge.PortfolioReviewService.models.Project;
import com.forge.PortfolioReviewService.repository.PortfolioItemsRepo;
import com.forge.PortfolioReviewService.repository.PortfolioRepo;
import com.forge.PortfolioReviewService.repository.UserRepo;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/update")
@CrossOrigin
public class PortfolioUpdateController {

	@Autowired
	private PortfolioRepo portfolioRepo;

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private PortfolioItemsRepo portfolioItemsRepo; //potfolio4lyfe
	


	
	//GET
	
	// utility method for testing persistence
	@GetMapping("/getAllPortfolioItems")
	@ApiOperation(value = "Getting a specific portfolio", notes = "Retrieving a specific portfolio from a user to review")
	public List<PortfolioItems> getAllPortfolioItems() {



			return portfolioItemsRepo.findAll();

		}
		
		@GetMapping("/getPortfolioItemsByPortfolioId/{pid}")
		@ApiOperation(value="Getting a specific portfolio",
		  			  notes = "Retrieving a specific portfolio from a user to review")
		public Optional<PortfolioItems> getAllPortfolioItemsByPortfolio(@PathVariable(value = "pid")int id) {
			
			System.out.println(portfolioItemsRepo.findByItemId(id));
					
			return portfolioItemsRepo.findById(id);
		}
		
		@GetMapping(value="/getaboutMe/{id}", produces= MediaType.APPLICATION_JSON_VALUE)
		@ApiOperation(value="Getting the About Me",
		  			  notes = "Retrieving the about me section")
		public AboutMe getUpdateAboutMe(@PathVariable(value="id") int id) {
			
			return portfolioItemsRepo.findByItemId(id);
			
		}
		
		
		
		@GetMapping("/getPortfolioItemsById/{id}")
		@ApiOperation(value="Getting all portfolio items by id",
		  notes = "Retrieving a all portfolio items by id from a user to review")
		public List<PortfolioItems> getAllPortfolioItemsById(@PathVariable(value="id") int id) {
			
			
			return portfolioItemsRepo.findAll();

		}

		@GetMapping(value = "/getIndustryItems/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
		@ApiOperation(value = "Getting the Industry Equivalency", notes = "Retrieving the IndustryEquivalency section")
		public IndustryEquivalency[] getUpdateIndustryEquivalency(@PathVariable(value = "id") int id) {
			IndustryEquivalency[] ie = portfolioItemsRepo.findByIndustryItemId(id);
			for(IndustryEquivalency x : ie) {
				System.out.println(x);
			}
			return portfolioItemsRepo.findByIndustryItemId(id);

		}
		
		@GetMapping(value = "/getProjectItems/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
		@ApiOperation(value = "Getting the Project", notes = "Retrieving the portfolio section section")
		public Project[] getUpdateProjectItems(@PathVariable(value = "id") int id) {
			Project[] ie = portfolioItemsRepo.findByProjectItemId(id);
			for(Project x : ie) {
				System.out.println(x);
			}
			//return portfolioItemsRepo.findByProjectItemId(id);
			return ie;


		}

	
	//POSTS
	

		@PostMapping("/createEducationItem/{id}")
		  @ApiOperation(value="Adds new Portfolio Education Item",
		                 notes ="Adds a new portfolioItem to a specific portfolio")
			public PortfolioItems createEducationItem(@PathVariable(value = "id") int id, @RequestBody Education education) {
				System.out.println("Create Education");
				System.out.println(education);
				education.setPortfolio(portfolioRepo.getOne(id));
				PortfolioItems portItem = education;
				return portfolioItemsRepo.save(portItem);
			}

		
		@PostMapping("/createPortfolioItems/{id}")
//		@ApiOperation(value="Adds new Portfolio Items",
//		  			 notes ="Adds a new portfolioItem to a specific portfolio")
		public PortfolioItems createPortfolioItems(@PathVariable(value = "id") int id,
				@RequestBody PortfolioItems portfolioItem) {
			portfolioItem.setPortfolio(portfolioRepo.findById(id));

			return portfolioItemsRepo.save(portfolioItem);

		}
		
		@PostMapping("/updateIndustryItem/{pid}")
		@ApiOperation(value = "Adds new Portfolio Industry Item", 
		notes = "Adds a new portfolioItem to a specific portfolio")
		public void updateIndustryItem(@PathVariable(value = "pid") int id, @RequestBody IndustryEquivalency[] industry) {
			for(IndustryEquivalency x : industry) {
				x.setPortfolio(portfolioRepo.findById(id));
				portfolioItemsRepo.save(x);
				System.out.println(x);
			}
		}
		
		@PostMapping("/updateProjectItem/{id}")
		@ApiOperation(value = "Adds new Portfolio Project Item", notes = "Adds a new portfolioItem to a specific portfolio")
		public void updateProjectItem(@PathVariable(value = "id") int id, @RequestBody Project[] project) {
			System.out.println("Create project");
			System.out.println(project);
			for(Project x : project) {
				x.setPortfolio(portfolioRepo.findById(id));
				portfolioItemsRepo.save(x);
				System.out.println(x);
			}
		}

	
	//PUTS
	
		// needs testing to determine whether portfolio info is necessary
		// uniform method for updating any
		// must pass in portfolio Id
		@PutMapping("/updatePortfolioItems/{pid}")
		@ApiOperation(value = "Updating the Project Technology Section", notes = "Updating the project technology section")
		public String updatePortfolioItems(@PathVariable(value = "pid") int id,
				@RequestBody PortfolioItems portfolioItems) {
			portfolioItems.setPortfolio(portfolioRepo.findById(id));
			portfolioItemsRepo.save(portfolioItems);
			System.out.println(portfolioItems);
			return "Success!";
		}
		
		

		
		@PutMapping(value = "/updateAboutMe/{pid}", consumes = MediaType.APPLICATION_JSON_VALUE)
		public void updateAboutMe(@PathVariable(value = "pid") int id, @RequestBody AboutMe aboutMe) {
			aboutMe.setPortfolio(portfolioRepo.findById(id));
			portfolioItemsRepo.save(aboutMe);
		}
		
	

	
	//DELETE

	@DeleteMapping("/deletePortfolioItem/{id}")
	public String deleteIndustryEquivalency(@PathVariable(value = "id") int id,
			@RequestBody PortfolioItems portfolioItem) {
		portfolioItemsRepo.delete(portfolioItem);
		return "Success!";
	}



}
