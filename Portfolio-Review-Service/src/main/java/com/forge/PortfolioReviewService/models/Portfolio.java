package com.forge.PortfolioReviewService.models;

import java.util.ArrayList;
import java.util.List;

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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Generated;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "portfolio")
@EqualsAndHashCode(exclude = "portfolioSection")
@Generated()
public class Portfolio {
 
	@Id
	@Column(name = "portfolio_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;

	@Column(name = "status", nullable = false, columnDefinition="varchar(255) DEFAULT 'pending'")
	private String status;

	
	@JsonBackReference
	@ManyToOne(targetEntity=User.class, cascade = CascadeType.ALL)
	@JoinColumn(name="user_id", nullable=false, referencedColumnName = "user_id")
	@JsonProperty(access = Access.WRITE_ONLY) //write only???


	private User user;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "portfolio", targetEntity=PortfolioItems.class, cascade = CascadeType.ALL)
	private List<PortfolioItems> portfolioSections = new ArrayList<PortfolioItems>();
	
	
	@Override
	public String toString() {
		return "Portfolio [id=" + id + ", " + "status=" + status + ", user=" + user + "]";
	}
}
