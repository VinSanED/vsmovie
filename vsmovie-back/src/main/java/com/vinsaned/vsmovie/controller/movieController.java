package com.vinsaned.vsmovie.controller;

import com.vinsaned.vsmovie.DTO.MovieDTO;
import com.vinsaned.vsmovie.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/movies")
public class movieController {

    @Autowired
    protected MovieService mserv;
    @GetMapping
    public Page<MovieDTO> findMovies(Pageable pageable){
        return mserv.findMovies(pageable);
    }

    @GetMapping("/{id}")
    public MovieDTO findById(@PathVariable Long id){
        return mserv.findById(id);
    }
}
