package com.mysite.project6.photo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
public interface PhotoRepository extends JpaRepository<Photo, Integer>{

}
