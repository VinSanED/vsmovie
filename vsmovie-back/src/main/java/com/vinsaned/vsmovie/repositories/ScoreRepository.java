package com.vinsaned.vsmovie.repositories;

import com.vinsaned.vsmovie.entities.Movie;
import com.vinsaned.vsmovie.entities.Score;
import com.vinsaned.vsmovie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
