package com.mysite.project6.photo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
public interface PhotoRepository extends JpaRepository<Photo, Integer>{
	List<Photo> findByRecipeId(Long recipeId);
}
