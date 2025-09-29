import { Link } from "react-router-dom";
import { FormSty } from "./formSty";
import { Movie } from "models/movie";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/request";
import axios from "axios";

type Props = {
    movieId: String
}
export const FormCard=({movieId}:Props)=>{

    const [movie, setMovie] = useState<Movie>();

    useEffect(()=>{
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(res => {
                setMovie(res.data);
            })
    },[movieId])
    return(
            <FormSty key={movie?.id} className="vsmovie-form-container">
                <img className="vsmovie-movie-card-image" src={movie?.image} alt="The Witcher" />
                <div className="vsmovie-card-bottom-container">
                    <h3>{movie?.title}</h3>
                    <form className="vsmovie-form">
                        <div className="form-group vsmovie-form-group">
                            <label htmlFor="email">Informe seu email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group vsmovie-form-group">
                            <label htmlFor="score">Informe sua avaliação</label>
                            <select className="form-control" id="score">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="vsmovie-form-btn-container">
                            <button type="submit" className="btn btn-primary vsmovie-btn">Salvar</button>
                        </div>
                    </form >
                    <Link to="/">
                        <button className="btn btn-primary vsmovie-btn mt-3">Cancelar</button>
                    </Link>
                </div >
            </FormSty >
    )
}