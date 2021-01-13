package com.forge.PortfolioReviewService.models;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="SM")
@Table(name = "skill_matrix")
@EqualsAndHashCode(exclude = "skillMatrixItem")

public class SkillMatrix extends PortfolioItems {
	
	
	@Column(name = "item_type")
	private String itemType= "SkillMatrix" ;
	
	@Column(name = "skill_matrix_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	
	@Column(name = "priority")
	@ColumnDefault(value="4")
	private int priority;


	@Column(name = "skill_title")
	private String skillTitle;

	// may be the root cause of the delete by order issue
	@OneToMany(mappedBy = "skillMatrix", cascade = CascadeType.ALL)
	@JsonManagedReference(value = "skillMatrix")
	@ElementCollection
	@CollectionTable(name="skill_matrix_items",  joinColumns=@JoinColumn(name="skill_matrix_id"))
	private List<SkillMatrixItems> skillMatrixItem;

//	@Override
//	public String toString() {
//		return "SkillMatrix [id=" + portfolioItemsId + ", title=" + skillTitle + ", portfolioItemsId=" + portfolioItemsId
//				+ ", skillMatrixItem=" + skillMatrixItem + "]";
//	}
}
