import { FormSty } from "pages/Form/formSty";
import MovieScore from "./movieScore/mscInd";
import { Link } from "react-router-dom";
import { Movie } from "models/movie";

type Props = {
    movie:Movie;
}s
export default function MovieCard({movie}:Props){
    return(
        <FormSty>
            <img className="vsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="vsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary vsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </FormSty>
    )
}