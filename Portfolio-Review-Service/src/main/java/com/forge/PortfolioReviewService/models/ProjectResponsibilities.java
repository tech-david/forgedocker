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
import lombok.Generated;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "project_responsibilites")
@Generated()
public class ProjectResponsibilities {

	@Id
	@Column(name = "project_responsibilities_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name = "content", nullable = false)
	private String content;
	
	@ManyToOne( cascade = CascadeType.ALL)
	@JoinColumn(name="project_id", nullable=false)
	@JsonBackReference(value="responsibilitiesPortfolio")
	private Project project;
	
	@Override
	public String toString() {
		return "ProjectResponsibilities [id=" + id + ", content=" + content + "]";
	}
}
