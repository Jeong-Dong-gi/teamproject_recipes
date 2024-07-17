package com.mysite.project6;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Arrays;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import com.mysite.project6.cookingstep.CookingStep;
import com.mysite.project6.cookingstep.CookingStepRepository;
import com.mysite.project6.ingredient.Ingredient;
import com.mysite.project6.ingredient.IngredientRepository;
import com.mysite.project6.recipe.Recipe;
import com.mysite.project6.recipe.RecipeRepository;

@SpringBootTest
class ProjectRecipe1ApplicationTests {

	@Autowired
	private RecipeRepository recipeRepository;
	
	@Autowired
	private IngredientRepository ingredientRepository;
	
	@Autowired 
	private CookingStepRepository cookingStepRepository;
	
	@Test
	void contextLoads() {
		
//		Recipe recipe = new Recipe("라면", null, "라면입니다", "중식", 3, 30, "중");
//		recipeRepository.save(recipe);
		
//		Recipe recipe = new Recipe("우동", null, "우동입니다", "일식", 3, 30, "하", null);
//		recipeRepository.save(recipe);
//		
//		Ingredient ingredient = new Ingredient("면", "1팩", recipe);
//		
//		Recipe recipe = new Recipe();
//		recipe.setName("우동");
//		recipe.setPhoto(null);
//		recipe.setIntroduction("우동입니다");
//		recipe.setCategory("일식");
//		recipe.setAmount(2);
//		recipe.setTime(20);
//		recipe.setLevel("하");
//		recipe.setUser(null);
//		
		
//		CookingStep cookingStep = new CookingStep(1, "안녕하세요", recipe);
//		cookingStepRepository.save(cookingStep);
		
//		Optional<Recipe> oi = this.recipeRepository.findById(102);
//		assertTrue(oi.isPresent());
//		Recipe r = oi.get();
//		
//		Ingredient i1 = new Ingredient();
//		i1.setAmount("1적당히");
//		i1.setIngredient("1소금");
//		i1.setRecipe(r);
//		this.ingredientRepository.save(i1);
//		
//		Ingredient i2 = new Ingredient();
//		i2.setAmount("2적당히");
//		i2.setIngredient("2소금");
//		i2.setRecipe(r);
//		this.ingredientRepository.save(i2);
//		
//		Ingredient i3 = new Ingredient();
//		i3.setAmount("3적당히");
//		i3.setIngredient("3소금");
//		i3.setRecipe(r);
//		this.ingredientRepository.save(i3);
//		
//		Ingredient i4 = new Ingredient();
//		i4.setAmount("4적당히");
//		i4.setIngredient("4소금");
//		i4.setRecipe(r);
//		this.ingredientRepository.save(i4);
//		
//		Ingredient i5 = new Ingredient();
//		i5.setAmount("5적당히");
//		i5.setIngredient("5소금");
//		i5.setRecipe(r);
//		this.ingredientRepository.save(i5);
//		
//		Ingredient i6 = new Ingredient();
//		i6.setAmount("6적당히");
//		i6.setIngredient("6소금");
//		i6.setRecipe(r);
//		this.ingredientRepository.save(i6);
//		
//		Ingredient i7 = new Ingredient();
//		i7.setAmount("1적당히");
//		i7.setIngredient("1소금");
//		i7.setRecipe(r);
//		this.ingredientRepository.save(i7);
//		
//		Ingredient i8 = new Ingredient();
//		i8.setAmount("2적당히");
//		i8.setIngredient("2소금");
//		i8.setRecipe(r);
//		this.ingredientRepository.save(i8);
//		
//		Ingredient i9 = new Ingredient();
//		i9.setAmount("3적당히");
//		i9.setIngredient("3소금");
//		i9.setRecipe(r);
//		this.ingredientRepository.save(i9);
//		
//		Ingredient i10 = new Ingredient();
//		i10.setAmount("4적당히");
//		i10.setIngredient("4소금");
//		i10.setRecipe(r);
//		this.ingredientRepository.save(i10);
//		
//		Ingredient i11 = new Ingredient();
//		i11.setAmount("5적당히");
//		i11.setIngredient("5소금");
//		i11.setRecipe(r);
//		this.ingredientRepository.save(i11);
//		
//		Ingredient i12 = new Ingredient();
//		i12.setAmount("6적당히");
//		i12.setIngredient("6소금");
//		i12.setRecipe(r);
//		this.ingredientRepository.save(i12);
//		
//		Optional<Recipe> oc = this.recipeRepository.findById(202);
//		assertTrue(oc.isPresent());
//		Recipe r = oc.get();
//		
//		CookingStep c1 = new CookingStep();
//		c1.setDescription("1푹 익혀주세요");
//		c1.setStepNumber(1);
//		c1.setRecipe(r);
//		this.cookingStepRepository.save(c1);
//		
//		CookingStep c2 = new CookingStep();
//		c2.setDescription("2푹 익혀주세요");
//		c2.setStepNumber(12);
//		c2.setRecipe(r);
//		this.cookingStepRepository.save(c2);
//		
//		CookingStep c3 = new CookingStep();
//		c3.setDescription("푹 3익혀주세요");
//		c3.setStepNumber(13);
//		c3.setRecipe(r);
//		this.cookingStepRepository.save(c3);
//		
//		CookingStep c4 = new CookingStep();
//		c4.setDescription("푹 익혀주세요");
//		c4.setStepNumber(14);
//		c4.setRecipe(r);
//		this.cookingStepRepository.save(c4);
//		
//		CookingStep c5 = new CookingStep();
//		c5.setDescription("푹 익혀주세요");
//		c5.setStepNumber(16);
//		c5.setRecipe(r);
//		this.cookingStepRepository.save(c5);
//		
//		CookingStep c6 = new CookingStep();
//		c6.setDescription("푹 익혀주세요");
//		c6.setStepNumber(16);
//		c6.setRecipe(r);
//		this.cookingStepRepository.save(c6);
//		
//		CookingStep c7 = new CookingStep();
//		c7.setDescription("푹 익혀주세요");
//		c7.setStepNumber(17);
//		c7.setRecipe(r);
//		this.cookingStepRepository.save(c7);
//		
//		CookingStep c8 = new CookingStep();
//		c8.setDescription("푹 익혀주세요");
//		c8.setStepNumber(18);
//		c8.setRecipe(r);
//		this.cookingStepRepository.save(c8);
//		
//		CookingStep c9 = new CookingStep();
//		c9.setDescription("푹 익혀주세요");
//		c9.setStepNumber(1);
//		c9.setRecipe(r);
//		this.cookingStepRepository.save(c9);
//		
//		CookingStep c12 = new CookingStep();
//		c12.setDescription("푹 익혀주세요");
//		c12.setStepNumber(112);
//		c12.setRecipe(r);
//		this.cookingStepRepository.save(c12);
//		
//		CookingStep c13 = new CookingStep();
//		c13.setDescription("푹 익혀주세요");
//		c13.setStepNumber(113);
//		c13.setRecipe(r);
//		this.cookingStepRepository.save(c13);
//		
//		CookingStep c14 = new CookingStep();
//		c14.setDescription("푹 익혀주세요");
//		c14.setStepNumber(1);
//		c14.setRecipe(r);
//		this.cookingStepRepository.save(c14);
//		
//		CookingStep c15 = new CookingStep();
//		c15.setDescription("푹 익혀주세요");
//		c15.setStepNumber(115);
//		c15.setRecipe(r);
//		this.cookingStepRepository.save(c15);
////		
////		assertEquals(3, this.recipeRepository.count());
////		Optional<Recipe> or = this.recipeRepository.findById(52);
////		assertTrue(or.isPresent());
////		Recipe r = or.get();
////		this.recipeRepository.delete(r);
////		assertEquals(1, this.recipeRepository.count());
//		
////		Optional<Ingredient> oi = this.ingredientRepository.findById(52);
////		assertTrue(oi.isPresent());
////		Ingredient i = oi.get();
////		this.ingredientRepository.delete(i);
////	}
//	
////	@Test
////	void put() {
////		//소유자 객체를 추가하고 데이터베이스에 저장
////		Owner owner1=new Owner();
////		owner1.setFirstname("John");
////		owner1.setLastname("Johnson");
////		Owner owner2=new Owner();
////		owner2.setFirstname("Mary");
////		owner2.setLastname("Robinson");
////		//여러 엔티티를 저장하는 saveAll메서드
////		oRepository.saveAll(Arrays.asList(owner1,owner2));
////		//자동차 객체를 추가하고 소유자와 연결한 후 데이터베이스에 저장
////		Car car1=new Car(
////				"Ford","Mustang","Red",
////				"ADF-1121",2021,59000,owner1);
////		Car car2=new Car(
////				"Nissan","Leaf","White",
////				"SSJ-3002",2019,29000,owner2);
////		Car car3=new Car(
////				"Toyota","Prius","Silver",
////				"KKO-0212",2020,39000,owner2);
////		cRepository.saveAll(Arrays.asList(car1,car2,car3));
////		
////		for(Car car:cRepository.findAll()) {
////			log.info(car.toString());
//////			System.out.println(car);
////		}
////	}
//	
////	for(int i = 1; i<=100; i++) {
////		String name = String.format("이름 테스트: [%03d]", i);
////		int amount = i;
////		String category = String.format("분류 테스트: [%03d]", i);
////		String introduction = String.format("설명 테스트: [%03d]", i);
////		String level = String.format("난이도: [%03d]", i);
////		int time = i;
////		create(name, amount, category, introduction, level, time);
////	}
//	
//}
//
//
//	public void create(String name, Integer amount, String category, String introduction,
//			String level, Integer time) {
//		Recipe r = new Recipe();
//		r.setName(name);
//		r.setAmount(amount);
//		r.setCategory(category);
//		r.setIntroduction(introduction);
//		r.setLevel(level);
//		r.setTime(time);
//		this.recipeRepository.save(r);
//	}
}
}

