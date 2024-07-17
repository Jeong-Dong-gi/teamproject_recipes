package com.mysite.project6.recipe;

import java.util.List;

import com.mysite.project6.cookingstep.CookingStep;
import com.mysite.project6.ingredient.Ingredient;
import com.mysite.project6.user.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipeDto {

    private String name;

    private String introduction;

    private String category;

    private String amount;

    private String time;

    private String level;

    private List<Ingredient> ingredients;
    
    private List<CookingStep> cookingSteps;
    
    private User user;

    // getters and setters
}