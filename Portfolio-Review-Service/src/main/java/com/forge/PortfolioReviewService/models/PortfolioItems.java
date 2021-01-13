package com.forge.PortfolioReviewService.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "portfolio_items")
@Table(name = "portfolio_items")
@EqualsAndHashCode()
/* Wrapper class for potfolio section bean that includes some extra metadata 
 * such as the title of the section, it's priority in the portfolio
 *  and loosely coupling the individuals beans from the portfolio instance
 * */
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name = "ITEM_TYPE", discriminatorType = DiscriminatorType.STRING) //prevents wrong type exception
public class PortfolioItems {
	
	
	@Id
	@Column(name = "portfolio_items_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected int portfolioItemId;
	
	@JsonBackReference
	@ManyToOne(targetEntity = Portfolio.class, cascade = CascadeType.ALL)
	@JoinColumn(name="portfolio_id", nullable = false,  referencedColumnName = "portfolio_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	protected Portfolio portfolio;


	
//	priority value could bE used to set order in future sprints

	@Override
	public String toString() {
		return "PortfolioItems [portfolioItemId=" + portfolioItemId + ", portfolio=" + portfolio + "]";
	}


	
	
}
