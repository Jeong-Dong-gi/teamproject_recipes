package com.mysite.project6.ingredient;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mysite.project6.recipe.Recipe;
import com.mysite.project6.recipe.RecipeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class IngredientController {

//	@Autowired
//    private RecipeRepository recipeRepository;
//
//    @Autowired
//    private IngredientRepository ingredientRepository;
//
//    @PostMapping("/ingredients/add")
//    public Ingredient createingredient(@RequestBody Ingredient ingredient) {
//        // 재료들이 속한 레시피를 설정
//        List<Ingredient> ingredients = ingredient.getIngredients();
//        
//        return recipeRepository.save(ingredient);
//    }
}
