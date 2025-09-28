package com.vinsaned.vsmovie.entities;

import jakarta.persistence.*;

@Entity
@Table(name="tb_score")
public class Score {
    @EmbeddedId
    private ScorePK id= new ScorePK();
    private Double valueScore;

    public Score(){}

    public Score(ScorePK id, Double value) {
        this.id = id;
        this.valueScore = value;
    }

    public ScorePK getId() {
        return id;
    }

    public void setId(ScorePK id) {
        this.id = id;
    }
    public void setMovie(Movie movie){
        this.id.setMovie(movie);
    }
    public void setUser(User user){
        this.id.setUser(user);
    }


    public Double getValue() {
        return valueScore;
    }

    public void setValue(Double value) {
        this.valueScore = value;
    }
}
