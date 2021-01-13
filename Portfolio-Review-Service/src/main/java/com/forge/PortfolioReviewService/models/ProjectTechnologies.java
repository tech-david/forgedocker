package com.forge.PortfolioReviewService.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Generated;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "project_technologies")
@EqualsAndHashCode(exclude = "project")
@Generated()
public class ProjectTechnologies {

	@Id
	@Column(name = "project_technologies_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name = "name")
	private String name;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="project_id", nullable=false)
	@JsonBackReference(value="technologiesPortfolio")
	private Project project;
	
	@Override
	public String toString() {
		return "ProjectTechnologies [id=" + id + ", name=" + name + "]";
	}
}
