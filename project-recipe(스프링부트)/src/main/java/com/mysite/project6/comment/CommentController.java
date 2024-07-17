package com.mysite.project6.comment;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mysite.project6.recipe.Recipe;
import com.mysite.project6.recipe.RecipeRepository;

@RequestMapping("/api/comments")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {

	@Autowired
    private CommentRepository commentRepository;

    @Autowired
    private RecipeRepository recipeRepository;
    
 // 모든 댓글 조회
    @GetMapping
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }
    
 // 특정 레시피의 모든 댓글 조회
    @GetMapping("/recipe/{recipeId}")
    public List<Comment> getCommentsByRecipe(@PathVariable Integer recipeId) {
        Optional<Recipe> recipeOptional = recipeRepository.findById(recipeId);
        if (!recipeOptional.isPresent()) {
            throw new ResourceNotFoundException("Recipe not found with id: " + recipeId);
        }
        Recipe recipe = recipeOptional.get();
        return recipe.getComments();
    }

    // 댓글 생성
    @PostMapping("/recipe/{recipeId}")
    public ResponseEntity<Comment> createComment(@PathVariable Integer recipeId, @RequestBody Comment comment) {
        Optional<Recipe> recipeOptional = recipeRepository.findById(recipeId);
        if (!recipeOptional.isPresent()) {
            throw new ResourceNotFoundException("Recipe not found with id: " + recipeId);
        }
        Recipe recipe = recipeOptional.get();
        comment.setRecipe(recipe);
        Comment savedComment = commentRepository.save(comment);
        return new ResponseEntity<>(savedComment, HttpStatus.CREATED);
    }

    // 댓글 수정
    @PutMapping("/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable Integer commentId, @RequestBody Comment updatedComment) {
        Optional<Comment> commentOptional = commentRepository.findById(commentId);
        if (!commentOptional.isPresent()) {
            throw new ResourceNotFoundException("Comment not found with id: " + commentId);
        }
        Comment existingComment = commentOptional.get();
        existingComment.setText(updatedComment.getText());
        Comment savedComment = commentRepository.save(existingComment);
        return new ResponseEntity<>(savedComment, HttpStatus.OK);
    }

    // 댓글 삭제
    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable Integer commentId) {
        Optional<Comment> commentOptional = commentRepository.findById(commentId);
        if (!commentOptional.isPresent()) {
            throw new ResourceNotFoundException("Comment not found with id: " + commentId);
        }
        commentRepository.deleteById(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
