package com.forge.PortfolioReviewService.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
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
@Entity(name="P")
@Table(name = "project")
@EqualsAndHashCode
@DiscriminatorValue(value="project")
public class Project extends PortfolioItems{
	
	@Column(name = "item_type")
	private String itemType= "Project";
	
	@Column(name = "project_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int projectId;

	@Column(name = "priority", columnDefinition = "int DEFAULT 5")
	private int priority;
	
	@Column(name = "project_name")
	private String projectName;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "project_responsibilities")
	private String projectResponsibilities;
	
	@Column(name = "project_tech")
	private String projectTech;
	

}
