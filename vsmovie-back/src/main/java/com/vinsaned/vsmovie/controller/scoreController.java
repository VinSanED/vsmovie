package com.vinsaned.vsmovie.controller;

import com.vinsaned.vsmovie.DTO.MovieDTO;
import com.vinsaned.vsmovie.DTO.ScoreDTO;
import com.vinsaned.vsmovie.services.MovieService;
import com.vinsaned.vsmovie.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/scores")
public class scoreController {

    @Autowired
    protected ScoreService sserv;

    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO scoreDTO){
        return sserv.saveScore(scoreDTO);
    }
}
