package com.mysite.project.recipe;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

	// 레시피 제목으로 검색
	List<Recipe> findByNameContainingIgnoreCase(String name);

	// 재료 이름으로 검색
	@Query("SELECT DISTINCT r FROM Recipe r JOIN r.ingredients i WHERE LOWER(i.ingredient) LIKE LOWER(concat('%', :ingredient, '%'))")
	List<Recipe> findByIngredientContaining(@Param("ingredient") String ingredient);

}
