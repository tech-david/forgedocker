package com.forge.PortfolioReviewService.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.forge.PortfolioReviewService.models.AboutMe;
import com.forge.PortfolioReviewService.models.Portfolio;
import com.forge.PortfolioReviewService.models.User;
import com.forge.PortfolioReviewService.repository.PortfolioRepo;
import com.forge.PortfolioReviewService.repository.UserRepo;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/service")
@CrossOrigin(origins = {"http://localhost:4200"}, allowCredentials = "true")
public class ServiceController {
	
	@Autowired
	private PortfolioRepo portfolioRepo;
	
	@Autowired
	private UserRepo userRepo;
	
	/*
 	Gets all portfolios from the database.
	Returns a lists of all portfolios.
	 */
	@GetMapping("/getAllPortfolios")
	@ApiOperation(value="Getting all portofios",
	  			  notes = "Retrieving all the portfolios to view them")
	public List<Portfolio> getPortfolios(){
		List<Portfolio> myList = portfolioRepo.findAll();
		return myList;
	}
	
	/*
 	Gets all portfolios by their status from the database.
 	Input is status. 
	Returns a lists of portfolios by status.
	 */
	@GetMapping("/getPortfoliosByStatus")
	@ApiOperation(value="Getting portfolio status",
	  			  notes = "Retrieving portfolio status to filter accordingly")
	public List<Portfolio> getPortfoliosByStatus(@RequestParam String status){
		List<Portfolio> myList = portfolioRepo.findByStatus(status);
		return myList;
	}
	
	/*
 	Gets all users from the database.
	Returns a lists of all users.
	 */
	@GetMapping("/getAllUsers")
	@ApiOperation(value="Getting the users",
				  notes = "Retrieving the users that correspond with the portfolios")
	public List<User> getUsers() {
		return userRepo.findAll();
	}


	
	/*
 	Gets user by id from the database.
 	Input is user id.
	Returns one user.
	 */
//	//bug fix modified method 1/1 no longer using this 1/2 its still going to this method
//	//added user id parameter 
	@GetMapping(value="/{id}", produces= MediaType.APPLICATION_JSON_VALUE)
//	@ApiOperation(value="Getting a user for verification",
//	  			  notes = "Retrieving a specific user so they can login in accordingly")
	public User getUser(@RequestParam int id) {
		return userRepo.findByUserId(id);
	}

	
	/*
 	Sending user info to database.
 	Input is user object.
 	No output, but user info is saved into database.
	 */
  @PostMapping("/createUser")
  @ApiOperation(value = "Creating a new user",
		  		notes = "Sending user information to the database")
	public void saveUser(@RequestBody User u) {
		System.out.println(u);
		userRepo.save(u);
		
	}


	/*
	 ~~~~REFACTOR~~~~
	 SHOULD update portfolio in database.
	 Input portfolio object.
	 No output, but it updates portfolio.
	 Special Notes/Suggestions: Should update by id not a object, by first getting the portfolio and then
	 		updating info within the portfolio because portfolio exists in database prior to this.
	 */
	@PutMapping("/updatePortfolio")
	@ApiOperation(value="Updating Portfolios",
	  			  notes ="Updating a portfolio from a specific user")
	public void updatePortfolio(@RequestBody Portfolio portfolio) {
		System.out.println("Received portfolio " + portfolio);
		portfolioRepo.save(portfolio);
	}

	/*
	 Gets portfolio by id.
	 Input is portfolio id.
	 Returns portfolio.
	 */

	//trying something new this works 
	@GetMapping(value="/getUser/{id}", produces= MediaType.APPLICATION_JSON_VALUE)
	public Optional<User> getUserById(@PathVariable(value="id") int id) {
		Optional<User> user = userRepo.findById(id);
		return user;
	}
	

	@GetMapping("/getPortfolioByID/{id}")
//	@ApiOperation(value="Getting a portfolio by Id",
//	  			  notes = "Retrieving a specific portfolio from a user")
	public @ResponseBody Portfolio getPortfolioByID(@PathVariable("id") String id) {
		int i = Integer.parseInt(id);
		Portfolio p = portfolioRepo.findById(i);
		return p;
	}

	
	/*
	 Creates a portfolio.
	 Input is portfolio object.
	 No output, because portfolio is saved in database.
	 */


	//bug fix fixing this 
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping("/createPortfolio/{id}")
//	@ApiOperation(value="Adding a Portfolios",
//	  			 notes ="Adding a portfolio to a specific user")
    public Portfolio createPortfolio(@PathVariable(value="id") int id ,@RequestBody Portfolio portfolio) {
		User user = userRepo.findByUserId(id);
		portfolio.setStatus("Pending");
		return portfolioRepo.save(portfolio);

    }

	/*
	 ~~~~REFACTOR~~~~
	 Should get portfolios by user id.
	 Input user id.
	 Returns a list of portfolios?
	 */
	@GetMapping("/getPortfolio")
	@ApiOperation(value="Getting a specific portfolio",
	  			  notes = "Retrieving a specific portfolio from a user to review")
	public List<Portfolio> getPortfolio(@RequestParam int id) {

		
		return portfolioRepo.findAllByUserId(id);

	}	

}
