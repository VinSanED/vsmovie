import { FormSty } from "pages/Form/formSty";
import MovieScore from "./movieScore/mscInd";

export default function MovieCard(){
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };
    return(
        <FormSty>
            <img className="vsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="vsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <div className="btn btn-primary vsmovie-btn">Avaliar</div>
            </div>
        </FormSty>
    )
}