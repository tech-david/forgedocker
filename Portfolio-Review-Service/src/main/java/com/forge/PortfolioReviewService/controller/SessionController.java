package com.forge.PortfolioReviewService.controller;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.forge.PortfolioReviewService.models.User;



@RestController
@RequestMapping("/session")
@CrossOrigin(origins="http://localhost:4200")
public class SessionController {
	
	@PostMapping(value="/login", produces = "application/json")
	public @ResponseBody User login(HttpServletRequest req, @RequestBody User U) {
		
		HttpSession ses= req.getSession();
		User incomingUser=U;	
		ses.setAttribute("loggedInUser", incomingUser);		
		return incomingUser;
	}
	
	@GetMapping(value="/logout", produces = "application/json")
	public @ResponseBody String logout(HttpSession ses) {
		
		ses.invalidate();
		return "You've successfully logged out";
	}
	
	@GetMapping(value="/loggers")
	public @ResponseBody User getCurUser(HttpSession ses) {
			
		User curUser;
		curUser=(User)ses.getAttribute("loggedInUser");		
		if(curUser == null) {
			curUser = new User();
		}
		return curUser;
	}
}
