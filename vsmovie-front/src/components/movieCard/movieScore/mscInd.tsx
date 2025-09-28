import { useState } from "react";
import MovieStars from "./movieStars/msInd";
import { MovieScoreSty } from "../movieCarSty";

export default function MovieScore(){
    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)
    
    return(
        <MovieScoreSty className="vsmovie-score-container">
            <p className="vsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="vsmovie-score-count">{count} avaliações</p>
        </MovieScoreSty>
    )
}