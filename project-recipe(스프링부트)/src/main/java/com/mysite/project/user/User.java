package com.mysite.project.user;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.mysite.project.recipe.Recipe;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties("defaultReference")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique=true)
	private String userID;
	
	@Column(unique=true)
	private String username;
	
	private String password;
	
	@Column(unique = true)
	private String email;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Recipe> recipes = new ArrayList<>();
	
	
	public User(String userID, String username, String password, String email, List<Recipe> recipes) {
		super();
		this.userID = userID;
		this.username = username;
		this.password = password;
		this.email = email;
		this.recipes = recipes;
	}
	
	 public User(int id) {
	        this.id = (long) id; // int 타입을 long 타입으로 변환하여 필드에 설정
	    }
	 
	 
	 @ManyToMany
	    @JoinTable(
	            name = "user_bookmarked_recipes",
	            joinColumns = @JoinColumn(name = "user_id"),
	            inverseJoinColumns = @JoinColumn(name = "recipe_id")
	    )
	    private Set<Recipe> bookmarkedRecipes = new HashSet<>();
	 
	 @ManyToMany
		@JoinTable(
				name = "user_liked_recipes",
	            joinColumns = @JoinColumn(name = "user_id"),
	            inverseJoinColumns = @JoinColumn(name = "recipe_id")
		)
		private Set<Recipe> likedRecipes = new HashSet<>();
	
}
