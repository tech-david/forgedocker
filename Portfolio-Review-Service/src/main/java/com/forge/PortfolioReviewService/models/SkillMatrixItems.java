package com.forge.PortfolioReviewService.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embeddable;
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
@Table(name = "skill_matrix_items")
//@EqualsAndHashCode(exclude = {"skillMatrixItems"})
public class SkillMatrixItems {
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="skill_matrix_id")
	@JsonBackReference(value="skillMatrix")
	private SkillMatrix skillMatrix;
	
	@Id
	@Column(name = "skill_matrix_item_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int skillMatrixItemId;
	
	@Column(name = "skill_name")
	private String skillName;
	
	@Column(name = "experience")
	private String experience;



	@Override
	public String toString() {
		return "SkillMatrixItems [" + "name=" + skillName + ", experience=" + experience + "]";
	}
}
