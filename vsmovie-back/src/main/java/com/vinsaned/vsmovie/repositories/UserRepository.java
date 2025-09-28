package com.vinsaned.vsmovie.repositories;

import com.vinsaned.vsmovie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
    User findByEmail(String email);
}
