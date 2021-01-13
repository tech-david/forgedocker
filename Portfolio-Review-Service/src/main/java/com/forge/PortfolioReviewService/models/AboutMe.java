package com.forge.PortfolioReviewService.models;

import javax.persistence.AttributeOverride;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="about_me")
@Table(name = "about_me")
public class AboutMe extends PortfolioItems{
	
	@Column(name = "item_type")
	private String itemType= "AboutMe" ;
	
	@Column(name = "about_me_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name = "priority")
	private int priority;

	@Column(name = "description")
	private String description;

//	@Override
//	public String toString() {
//		return "AboutMe [id=" + portfolioItemsId + ", description=" + description + ", portfolio_iems_id=" + portfolioItemsId + "]";
//	}
}
