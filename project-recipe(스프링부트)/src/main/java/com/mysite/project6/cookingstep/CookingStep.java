package com.mysite.project6.cookingstep;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mysite.project6.recipe.Recipe;
import com.mysite.project6.user.User;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
public class CookingStep {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    private Integer stepNumber;     // 단계 번호
    
    @Lob
    private String description;     // 단계 설명
    
    @ManyToOne
    @JoinColumn(name="recipe_id")
//    @JsonIgnoreProperties("cookingSteps")
    @JsonBackReference
    private Recipe recipe;
    
 // 기본 생성자 
    public CookingStep() {
    }
    
    // 생성자
    public CookingStep(int stepNumber, String description, Recipe recipe) {
        this.stepNumber = stepNumber;
        this.description = description;
        this.recipe = recipe;
    }
}