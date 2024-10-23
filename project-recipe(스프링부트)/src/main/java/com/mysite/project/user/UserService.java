package com.mysite.project.user;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mysite.project.recipe.Recipe;
import com.mysite.project.recipe.RecipeRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RecipeRepository recipeRepository;

    @Autowired
    public UserService(UserRepository userRepository, RecipeRepository recipeRepository) {
        this.userRepository = userRepository;
        this.recipeRepository = recipeRepository;
    }

    public void bookmarkRecipe(Long userId, Integer recipeId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        Optional<Recipe> optionalRecipe = recipeRepository.findById(recipeId);

        if (optionalUser.isPresent() && optionalRecipe.isPresent()) {
            User user = optionalUser.get();
            Recipe recipe = optionalRecipe.get();

            // 사용자의 북마크 목록에 추가
            user.getBookmarkedRecipes().add(recipe);

            // 사용자 엔티티를 저장하여 데이터베이스에 반영
            userRepository.save(user);
        } else {
            throw new RuntimeException("User or Recipe not found");
        }
    }

    public void removeBookmark(Long userId, Integer recipeId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        Optional<Recipe> optionalRecipe = recipeRepository.findById(recipeId);

        if (optionalUser.isPresent() && optionalRecipe.isPresent()) {
            User user = optionalUser.get();
            Recipe recipe = optionalRecipe.get();

            // 사용자의 북마크 목록에서 제거
            user.getBookmarkedRecipes().remove(recipe);

            // 사용자 엔티티를 저장하여 데이터베이스에 반영
            userRepository.save(user);
        } else {
            throw new RuntimeException("User or Recipe not found");
        }
    }
    
    public void likeRecipe(Long userId, Integer recipeId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        Optional<Recipe> optionalRecipe = recipeRepository.findById(recipeId);

        if (optionalUser.isPresent() && optionalRecipe.isPresent()) {
            User user = optionalUser.get();
            Recipe recipe = optionalRecipe.get();

            // 사용자의 좋아요 목록에 추가
            user.getLikedRecipes().add(recipe);

            // 레시피의 좋아요 받은 횟수 업데이트
            recipe.setLikeCount(recipe.getLikeCount() + 1);
            
            // 사용자 엔티티를 저장하여 데이터베이스에 반영
            userRepository.save(user);
        } else {
            throw new RuntimeException("User or Recipe not found");
        }
    }
    
    public void removeLike(Long userId, Integer recipeId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        Optional<Recipe> optionalRecipe = recipeRepository.findById(recipeId);

        if (optionalUser.isPresent() && optionalRecipe.isPresent()) {
            User user = optionalUser.get();
            Recipe recipe = optionalRecipe.get();

            // 사용자의 북마크 목록에서 제거
            user.getLikedRecipes().remove(recipe);
            
            // 레시피의 좋아요 받은 횟수 업데이트
            recipe.setLikeCount(recipe.getLikeCount() - 1);

            // 사용자 엔티티를 저장하여 데이터베이스에 반영
            userRepository.save(user);
        } else {
            throw new RuntimeException("User or Recipe not found");
        }
    }
}