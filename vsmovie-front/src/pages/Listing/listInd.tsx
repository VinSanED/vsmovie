import MovieCard from "components/movieCard/movieCarInd"
import Pagination from "components/pagination/pagInd"
import { GridContainer, ListSty } from "./listSty"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "utils/request"
import { MoviePage } from "models/moviePage"


export const Listing=()=>{
    const [moviePage, setMoviePage] = useState<MoviePage>(
        {
            content: [],
            last: true,
            totalPages: 0,
            totalElements: 12,
            size: 0,
            number: 0,
            first: true,
            numberOfElements: 0,
            empty: 0,
        }
    );
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(()=>{
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
            .then(res=>setMoviePage(res.data))
    },[pageNumber])

    return(
        <ListSty>
            <Pagination setPageNumber={setPageNumber}/>
            <GridContainer className="conteiner">
                {moviePage.content.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}   
            </GridContainer>
        </ListSty>
    )
}