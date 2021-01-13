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
import javax.persistence.Table;

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
@Table(name = "skill_matrix")
@EqualsAndHashCode(exclude = {"skillMatrixItem"})
@Generated()
public class SkillMatrix {

	@Id
	@Column(name = "skill_matrix_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name = "title")
	private String title;
	

	@ManyToOne(targetEntity = PortfolioItems.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "portfolio_items_id")
    private int portfolioItemsId;
	
	@OneToMany(mappedBy = "skillMatrix",  cascade = CascadeType.ALL)
	@JsonManagedReference(value="skillMatrix")
	private Set<SkillMatrixItem> skillMatrixItem;
	
	@Override
	public String toString() {
		return "SkillMatrix [id=" + id + ", title=" + title + ", portfolioItemsId=" + portfolioItemsId
				+ ", skillMatrixItem=" + skillMatrixItem + "]";
	}
}
