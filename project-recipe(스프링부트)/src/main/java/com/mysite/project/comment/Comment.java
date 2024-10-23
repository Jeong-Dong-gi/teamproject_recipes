package com.mysite.project.comment;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.mysite.project.recipe.Recipe;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Comment {

	//댓글
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String text;	//댓글
	
	private String name;
	
	@ManyToOne
    @JoinColumn(name="recipe_id")
    @JsonBackReference
    private Recipe recipe;

}
