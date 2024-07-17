package com.mysite.project6;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mysite.project6.comment.Comment;
import com.mysite.project6.comment.CommentRepository;
import com.mysite.project6.cookingstep.CookingStep;
import com.mysite.project6.cookingstep.CookingStepRepository;
import com.mysite.project6.ingredient.Ingredient;
import com.mysite.project6.ingredient.IngredientRepository;
import com.mysite.project6.recipe.Recipe;
import com.mysite.project6.recipe.RecipeRepository;
import com.mysite.project6.user.User;
import com.mysite.project6.user.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {

	@Autowired
	private RecipeRepository recipeRepository;
	
	@Autowired
	private IngredientRepository ingredientRepository;
	
	@GetMapping("/recipes")
	public Iterable<Recipe> getRecipes() {
		return recipeRepository.findAll();
	}
	
	@PostMapping("/recipes")
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        // 여기서 recipe를 저장하는 로직을 구현
        return recipeRepository.save(recipe);
    }
//	
	@GetMapping("/ingredients")
	public Iterable<Ingredient> getingredients() {
		return ingredientRepository.findAll();
	}
//	
	@Autowired
	private CookingStepRepository cookingStepRepository;
	
	@GetMapping("/cookingstep")
	public Iterable<CookingStep> getCookingStep() {
		return cookingStepRepository.findAll();
	}
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/user")
	public Iterable<User> getUser() {
		return userRepository.findAll();
	}
	
	@Autowired
	private CommentRepository commentRepository;
	
	@GetMapping("/comment")
	public Iterable<Comment> getComment() {
		return commentRepository.findAll();
	}
//	
////	@CrossOrigin(origins = "http://localhost:3001")
////    @PostMapping("/recipes")
////    public Recipe createRecipe(@RequestBody Recipe recipe) {
////        // 레시피 저장 로직
////        return recipe;
////    }
}
