package com.mysite.project6.photo;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mysite.project6.cookingstep.CookingStep;
import com.mysite.project6.ingredient.Ingredient;
import com.mysite.project6.recipe.Recipe;
import com.mysite.project6.recipe.RecipeRepository;
import com.mysite.project6.user.User;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PhotoController {

	@Autowired
	private RecipeRepository recipeRepository;

	@Autowired
	private PhotoRepository photoRepository;
	
	@Value("${file.upload.path}")
	private String filepath;
	
	@GetMapping("/static/files/{filename:.+}")
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
        try {
            // 요청된 파일 경로를 실제 파일 경로로 변환
            Path filePath = Paths.get(filepath).resolve(filename).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            // 파일이 존재하고 읽을 수 있는지 확인
            if (resource.exists() && resource.isReadable()) {
                // 다운로드할 때 파일 이름을 정확히 설정하기 위해 HttpHeaders를 사용
                HttpHeaders headers = new HttpHeaders();
                headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"");

                // 파일을 ResponseEntity를 통해 반환
                return ResponseEntity.ok()
                        .headers(headers)
                        .body(resource);
            } else {
                // 파일이 존재하지 않는 경우 404 에러 반환
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        } catch (MalformedURLException e) {
            // 파일 경로를 URL로 변환하는 중에 예외가 발생한 경우 처리
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

	
	
//	@PostMapping("/recipes/add")
//	@Transactional
//	public ResponseEntity<Recipe> addRecipe(@RequestParam(value = "files") MultipartFile[] files,
//	        @RequestParam("recipe") String recipeJson) {
//	    
//	    // Convert JSON to Recipe object
//	    Recipe recipe = convertJsonToRecipe(recipeJson);
//	    
//	    if (recipe == null) {
//	        throw new RuntimeException("Recipe data is invalid");
//	    }
//	    
//	    List<Photo> entities = new ArrayList<>();
//	    for (MultipartFile file : files) {
//	        String fileName = generateFileName(Objects.requireNonNull(file.getOriginalFilename()));
//	        saveFile(file, fileName);
//
//	        Photo photo = new Photo();
//	        photo.setPhoto(filepath + fileName); // 파일 경로 설정
//	        photo.setRecipe(recipe);
//	        entities.add(photo);
//	    }
//
//	    List<Photo> savedPhotos = photoRepository.saveAll(entities);
//
//	    // Set photos to recipe
//	    recipe.getPhotos().addAll(savedPhotos);
//
//	    // Set ingredients to recipe
//	    List<Ingredient> ingredients = recipe.getIngredients();
//	    if (ingredients != null) {
//	        for (Ingredient ingredient : ingredients) {
//	            ingredient.setRecipe(recipe);
//	        }
//	    }
//
//	    // Set cooking steps to recipe
//	    List<CookingStep> cookingSteps = recipe.getCookingSteps();
//	    if (cookingSteps != null) {
//	        for (CookingStep step : cookingSteps) {
//	            step.setRecipe(recipe);
//	        }
//	    }
//
//	    // Set user to recipe
//	    User user = recipe.getUser();
//	    recipe.setUser(user);
//
//	    // Save recipe
//	    Recipe savedRecipe = recipeRepository.save(recipe);
//
//	    return ResponseEntity.ok().body(savedRecipe);
//	}
	
	@PostMapping("/recipes/add")
	@Transactional
	public ResponseEntity<Recipe> addRecipe(@RequestParam(value = "files") MultipartFile[] files,
	        @RequestParam("recipe") String recipeJson) {
	    
	    // Convert JSON to Recipe object
	    Recipe recipe = convertJsonToRecipe(recipeJson);
	    
	    if (recipe == null) {
	        throw new RuntimeException("Recipe data is invalid");
	    }
	    
	    List<Photo> entities = new ArrayList<>();
	    for (MultipartFile file : files) {
	        if (!file.isEmpty()) {
	            String fileName = generateFileName(Objects.requireNonNull(file.getOriginalFilename()));
	            saveFile(file, fileName);

	            Photo photo = new Photo();
	            photo.setPhoto(filepath + fileName); // 파일 경로 설정
	            photo.setRecipe(recipe);
	            entities.add(photo);
	        }
	    }

	    // Save photos
	    List<Photo> savedPhotos = photoRepository.saveAll(entities);

	    // Set photos to recipe
	    recipe.setPhotos(savedPhotos);

	    // Save recipe
	    Recipe savedRecipe = recipeRepository.save(recipe);

	    return ResponseEntity.ok().body(savedRecipe);
	}


	
	private String generateFileName(String originalFileName) {
	    int lastIndexOfDot = originalFileName.lastIndexOf(".");
	    String name = originalFileName.substring(0, lastIndexOfDot);
	    // 확장자
	    String extension = originalFileName.substring(lastIndexOfDot);
	    int fileNumber = 1;
	    // 이름 중복 시 증가할 순번
	    String fileSequence = "";
	    while (new File(filepath + name + fileSequence + extension).exists()) {
	        fileSequence = "(" + fileNumber + ")";
	        fileNumber++;
	    }
	    return name + fileSequence + extension;
	}
	
	private void saveFile(MultipartFile file, String fileName) {
	    File targetFile = new File(filepath + fileName);
	    try {
	        file.transferTo(targetFile);
	    } catch (IOException e) {
	        throw new RuntimeException("File not saved");
	    }
	}
	
	private Recipe convertJsonToRecipe(String recipeJson) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            Recipe recipe = objectMapper.readValue(recipeJson, Recipe.class);
            return recipe;
        } catch (Exception e) {
            throw new RuntimeException("Failed to convert JSON to Recipe", e);
        }
    }
}