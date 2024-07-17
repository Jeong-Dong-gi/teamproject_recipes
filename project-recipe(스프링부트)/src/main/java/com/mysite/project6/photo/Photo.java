package com.mysite.project6.photo;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.mysite.project6.recipe.Recipe;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Photo {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	
	private String photo;	//사진 파일 이름
	
	@ManyToOne
	@JoinColumn(name="recipe_id")
	@JsonBackReference
	private Recipe recipe;
	
	public Photo() {
		
	}
	
	public Photo(String photo, Recipe recipe) {
		this.photo = photo;
		this.recipe = recipe;
	}
}
