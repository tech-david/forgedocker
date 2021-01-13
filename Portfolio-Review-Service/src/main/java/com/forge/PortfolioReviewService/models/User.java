package com.forge.PortfolioReviewService.models;

import java.util.Set;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name = "User_Table")
@EqualsAndHashCode(exclude = "portfolios")
@Generated()
public class User {


	@Id
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "password", nullable = false)
	private String password;
	
	@Column(name = "first_name", nullable = false)
	private String firstName;
	
	@Column(name = "last_name", nullable = false)
	private String lastName;
	
	@Column(name = "is_Admin", nullable = false, columnDefinition="BOOLEAN DEFAULT false")
	private boolean isAdmin;
	
	@JsonManagedReference(value="user_id")
	@OneToMany(mappedBy = "userId")
	private Set<Portfolio> portfolios;

	@Override
	public String toString() {
		return "User [userId=" + userId + ", email=" + email + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", isAdmin=" + isAdmin + "]";
	}
	
	
}
