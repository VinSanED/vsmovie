package com.vinsaned.vsmovie.services;

import com.vinsaned.vsmovie.DTO.MovieDTO;
import com.vinsaned.vsmovie.entities.Movie;
import com.vinsaned.vsmovie.repositories.MoviesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MoviesRepository mrepo;

    @Transactional(readOnly = true)
    public Page<MovieDTO> findMovies(Pageable pageable){
        Page<Movie> res = mrepo.findAll(pageable);
        Page<MovieDTO> dtoPage = res.map(MovieDTO::new);
        return dtoPage;
    }

    @Transactional(readOnly = true)
    public MovieDTO findById(Long id){
        Optional<Movie> res = mrepo.findById(id);
        return res
                .map(MovieDTO::new)
                .orElse(null);
    }
}
