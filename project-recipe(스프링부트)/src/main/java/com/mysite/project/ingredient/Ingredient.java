package com.mysite.project.ingredient;

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
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    
    private String ingredient;  // 요리 제료
    
    private String amount;      // 재료 양
    
    @ManyToOne
    @JoinColumn(name="recipe_id")
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


