import MovieStars from "./movieStars/msInd";
import { MovieScoreSty } from "../movieCarSty";

type Props ={
    count:number;
    score:number;
}
export default function MovieScore({count, score}:Props){
    
    return(
        <MovieScoreSty className="vsmovie-score-container">
            <p className="vsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score} />
            <p className="vsmovie-score-count">{count} avaliações</p>
        </MovieScoreSty>
    )
}