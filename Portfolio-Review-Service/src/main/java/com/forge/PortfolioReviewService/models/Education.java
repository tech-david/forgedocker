package com.forge.PortfolioReviewService.models;

import java.util.Date;

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

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Generated;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="education")
@Table(name = "education")
public class Education extends PortfolioItems{
	
	@Column(name = "item_type")
	protected String itemType;
	
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int educationNo;
	

	@Column(name = "priority", columnDefinition = "int DEFAULT 2")
	private int priority;
	
	@Column(name = "university")
	private String university;
	
	@Column(name = "graduation")
	private String graduation;
	
	@Column(name = "major")
	private String major;
	
	@Column(name = "minor")
	private String minor;
	
	@Column(name = "degree")
	private String degree;
	

	
//	@Override
//	public String toString() {
//		return "Education [id=" + portfolioItemsId + ", university=" + university + ", graduation=" + graduation + ", major=" + major
//				+ ", minor=" + minor + ", degree=" + degree + ", portfolioItemId=" + portfolioItemsId + "]";
//	}
}
