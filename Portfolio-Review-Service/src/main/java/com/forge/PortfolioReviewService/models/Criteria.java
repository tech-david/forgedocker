package com.forge.PortfolioReviewService.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Criteria_Table")
@Generated()
public class Criteria {

	@Id
	@Column(name = "criteria_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int criteriaId;
	
	@Column(name = "criteria_name")
	private String criteriaName;
	
	@Column(name = "entry_amount")
	private String entryAmount;
	
	@Column(name = "requirements")
	private String requirements;
	
	


}
