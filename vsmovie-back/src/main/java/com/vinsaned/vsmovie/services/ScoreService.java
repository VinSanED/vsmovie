package com.vinsaned.vsmovie.services;

import com.vinsaned.vsmovie.DTO.MovieDTO;
import com.vinsaned.vsmovie.DTO.ScoreDTO;
import com.vinsaned.vsmovie.entities.Movie;
import com.vinsaned.vsmovie.entities.Score;
import com.vinsaned.vsmovie.entities.ScorePK;
import com.vinsaned.vsmovie.entities.User;
import com.vinsaned.vsmovie.repositories.MoviesRepository;
import com.vinsaned.vsmovie.repositories.ScoreRepository;
import com.vinsaned.vsmovie.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ScoreService {

    @Autowired
    private MoviesRepository mrepo;
    @Autowired
    private ScoreRepository srepo;
    @Autowired
    private UserRepository urepo;

    @Transactional
    public MovieDTO saveScore(ScoreDTO scoreDTO){
        User user = urepo.findByEmail(scoreDTO.getEmail());
        if(user==null){
            user = new User();
            user.setName(scoreDTO.getEmail());
            user =  urepo.saveAndFlush(user);
        }
        Movie movie = mrepo.findById(scoreDTO.getMovieId()).orElse(null);
        if (movie!=null) {
            Score score = new Score();
            score.setUser(user);
            score.setMovie(movie);
            score.setValue(scoreDTO.getScore());

            score = srepo.saveAndFlush(score);

            double avg = movie.getScores().stream()
                    .mapToDouble(Score::getValue)
                    .average()
                    .orElse(0.0)
            ;
            if(avg!=0.0){
                movie.setScore(avg);
                movie.setCount(movie.getScores().size());
            }else{
                movie.setScore(score.getValue());
                movie.setCount(1);
            }
            movie = mrepo.save(movie);
            return new MovieDTO(movie);
        } else return null;
    }

}
