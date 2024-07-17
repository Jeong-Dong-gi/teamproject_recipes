package com.mysite.project6.ingredient;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mysite.project6.recipe.Recipe;
import com.mysite.project6.recipe.RecipeDto;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    
    private String ingredient;  // 요리 제료
    
    private String amount;      // 재료 양
    
    @ManyToOne
    @JoinColumn(name="recipe_id")
//    @JsonIgnoreProperties("ingredients")
    @JsonBackReference
    private Recipe recipe;  
    

    
 // 기본 생성자 
    public Ingredient() {
    }
    
    // 생성자
    public Ingredient(String ingredient, String amount, Recipe recipe) {
        this.ingredient = ingredient;
        this.amount = amount;
        this.recipe = recipe;
    }

    
}


