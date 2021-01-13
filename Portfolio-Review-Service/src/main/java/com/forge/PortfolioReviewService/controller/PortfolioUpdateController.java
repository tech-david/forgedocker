package com.forge.PortfolioReviewService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.forge.PortfolioReviewService.models.AboutMe;

import com.forge.PortfolioReviewService.models.Education;
import com.forge.PortfolioReviewService.models.IndustryEquivalency;
import com.forge.PortfolioReviewService.models.Project;
import com.forge.PortfolioReviewService.models.ProjectResponsibilities;
import com.forge.PortfolioReviewService.models.ProjectTechnologies;
import com.forge.PortfolioReviewService.models.SkillMatrix;
import com.forge.PortfolioReviewService.models.SkillMatrixItem;

import com.forge.PortfolioReviewService.repository.AboutMeRepo;
import com.forge.PortfolioReviewService.repository.EducationRepo;
import com.forge.PortfolioReviewService.repository.IndustryEquivalencyRepo;
import com.forge.PortfolioReviewService.repository.ProjectRepo;
import com.forge.PortfolioReviewService.repository.ProjectResponsibilitiesRepo;
import com.forge.PortfolioReviewService.repository.ProjectTechnologiesRepo;
import com.forge.PortfolioReviewService.repository.SkillMatrixItemRepo;
import com.forge.PortfolioReviewService.repository.SkillMatrixRepo;

import io.swagger.annotations.ApiOperation;


@RestController
@RequestMapping("/update")
@CrossOrigin
public class PortfolioUpdateController {

	@Autowired
	private AboutMeRepo aboutMeRepo;
	@Autowired
	private EducationRepo educationRepo;
	@Autowired
	private IndustryEquivalencyRepo industryEquivalencyRepo;
	@Autowired
	private ProjectRepo projectRepo;
	@Autowired
	private ProjectResponsibilitiesRepo projectResponsibilitiesRepo;
	@Autowired
	private ProjectTechnologiesRepo projectTechnologiesRepo;
	@Autowired
	private SkillMatrixItemRepo skillMatrixItemRepo;
	@Autowired
	private SkillMatrixRepo skillMatrixRepo;
	
	
	@GetMapping("/getaboutMe")
	@ApiOperation(value="Getting the About Me",
	  			  notes = "Retrieving the about me section")
	public AboutMe getUpdateAboutMe(@RequestParam int id) {
		return aboutMeRepo.findById(id);
	}
	
	@PutMapping("/aboutMe")
	@ApiOperation(value="Updating the About Me",
				  notes = "Updating the about me section")
	public String updateAboutMe(@RequestBody AboutMe aboutMe) {
		aboutMeRepo.save(aboutMe);
		return "Success!";
	}
	
	@GetMapping("/geteducation")
	@ApiOperation(value="Getting the Education",
	  			  notes = "Retrieving the education section")
	public Education getEducation(@RequestParam int id) {
		return educationRepo.findById(id);
	}
	
	@PutMapping("/education")
	@ApiOperation(value="Updating the Education section",
	  			  notes = "Updating the education section")
	public String updateEducation(@RequestBody Education education) {
		educationRepo.save(education);
		return "Success!";
	}
	
	@GetMapping("/getindustryEquivalency")
	@ApiOperation(value="Getting the Industry Equivalency Items",
	  			  notes = "Retrieving the industry equivalency section")
	public IndustryEquivalency getIndustryEquivalency(@RequestParam int id) {
		return industryEquivalencyRepo.findById(id);
	}
	
	@PutMapping("/industryEquivalency")
	@ApiOperation(value="Updating the Industry Equivalency section",
	  			  notes = "Updating the industry equivalency section")
	public String updateIndustryEquivalency(@RequestBody IndustryEquivalency industryEquivalency) {
		industryEquivalencyRepo.save(industryEquivalency);
		return "Success!";
	}
	
	@DeleteMapping("/deleteIndustryEquivalency")
	public String deleteIndustryEquivalency(@RequestBody IndustryEquivalency industryEquivalency) {
		industryEquivalencyRepo.delete(industryEquivalency);
		return "Success!";
	}
	
	@GetMapping("/getProject")
	@ApiOperation(value="Getting the Project",
	  			  notes = "Retrieving the project section")
	public Project getProject(@RequestParam int id) {
		return projectRepo.findById(id);
	}
	
	@PutMapping("/updateproject")
	@ApiOperation(value="Updating the Project Section",
	  			  notes = "Updating the project section")
	public String updateProject(@RequestBody Project project) {
		projectRepo.save(project);
		return "Success!";
	}
	
	@GetMapping("/getprojectresponsibilities")
	@ApiOperation(value="Getting the Project Responsibilities",
	  			  notes = "Retrieving the project responsibilities section")
	public ProjectResponsibilities getProjectResponsibilities(@RequestParam int id) {
		return projectResponsibilitiesRepo.findById(id);
	}
	
	@PutMapping("/projectResponsibilites")
	@ApiOperation(value="Updating the Project Responsibilities section",
	  			  notes = "Updating the project responsibilities section")
	public String updateProjectResponsibilities(@RequestBody ProjectResponsibilities projectResponsibilities) {
		projectResponsibilitiesRepo.save(projectResponsibilities);
		return "Success!";
	}
	
	@GetMapping("/getprojectTechnologies")
	@ApiOperation(value="Getting the Project Technologies",
	  			  notes = "Retrieving the project technologies section")
	public ProjectTechnologies getProjectTechnologies(@RequestParam int id) {
		return projectTechnologiesRepo.findById(id);
	}
	
	@PutMapping("/projectTechnologies")
	@ApiOperation(value="Updating the Project Technology Section",
	  			  notes = "Updating the project technology section")
	public String updateProjectTechnologies(@RequestBody ProjectTechnologies projectTechnologies) {
		projectTechnologiesRepo.save(projectTechnologies);
		return "Success!";
	}
	
	@GetMapping("/getSkillMatrixItem")
	@ApiOperation(value="Getting the Skills Matrix Item",
	  			  notes = "Retrieving the skills matrix item section")
	public SkillMatrixItem getSkillMatrixItem(@RequestParam int id) {
		return skillMatrixItemRepo.findById(id);
	}
	
	@PutMapping("/skillMatrixItem")
	@ApiOperation(value="Updating the Skill Matrix item section",
	  			  notes = "Updating the skill matrix item section")
	public String updateSkillMatrixItem(@RequestBody SkillMatrixItem skillMatrixItem) {
		skillMatrixItemRepo.save(skillMatrixItem);
		return "Success!";
	}
	
	@GetMapping("/getskillMatrix")
	@ApiOperation(value="Getting the Skill Matrix",
	  			  notes = "Retrieving the skill matrix section")
	public SkillMatrix getSkillMatrix(@RequestParam int id) {
		return skillMatrixRepo.findById(id);
	}
	
	@PutMapping("/skillMatrix")
	@ApiOperation(value="Updating the Skill Matrix section",
	  			  notes = "Updating the skill matrix section")
	public String updateSkillMatrix(@RequestBody SkillMatrix skillMatrix) {
		skillMatrixRepo.save(skillMatrix);
		return "Success!";
	}
}
