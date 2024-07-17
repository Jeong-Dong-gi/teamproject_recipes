package com.mysite.project6.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface UserRepository extends JpaRepository<User, Integer>{

	Optional<User> findByUsername(String username);

	
	Optional<User> findById(Long userID);
	
	
}
