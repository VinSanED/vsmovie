package com.vinsaned.vsmovie.repositories;

import com.vinsaned.vsmovie.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoviesRepository extends JpaRepository<Movie, Long> {
}
