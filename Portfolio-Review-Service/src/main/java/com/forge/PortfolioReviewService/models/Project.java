package com.forge.PortfolioReviewService.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Generated;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "project")
@EqualsAndHashCode(exclude = {"projectResponsibilities", "projectTechnologies"})
@Generated()
public class Project{

	@Id
	@Column(name = "project_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	

	@ManyToOne(targetEntity = PortfolioItems.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "portfolio_items_id")
    private int portfolioItemsId;
	
	@OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
	@JsonManagedReference(value="responsibilitiesPortfolio")
	private Set<ProjectResponsibilities> projectResponsibilities;
	
	@OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
	@JsonManagedReference(value="technologiesPortfolio")
	private Set<ProjectTechnologies> projectTechnologies;
	

}
