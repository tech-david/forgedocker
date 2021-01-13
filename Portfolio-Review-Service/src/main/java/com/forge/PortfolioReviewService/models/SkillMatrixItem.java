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
@Table(name = "skill_matrix_item")
//@EqualsAndHashCode(exclude = {"skillMatrixItems"})
@Generated()
public class SkillMatrixItem {

	@Id
	@Column(name = "skill_matrix_item_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "experience")
	private String experience;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="skill_matrix_id", nullable=false)
	@JsonBackReference(value="skillMatrix")
	private SkillMatrix skillMatrix;
	
	@Override
	public String toString() {
		return "SkillMatrixItem [id=" + id + ", name=" + name + ", experience=" + experience + "]";
	}
}
