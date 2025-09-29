import MovieCard from "components/movieCard/movieCarInd"
import Pagination from "components/pagination/pagInd"
import { GridContainer, ListSty } from "./listSty"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "utils/request"

export const Listing=()=>{
    const [moviePage, setMoviePage] = useState({});
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(()=>{
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
            .then(res=>setMoviePage(res.data))
    },[pageNumber])

    return(
        <ListSty>
            <Pagination pageNumber={pageNumber}/>
            <GridContainer className="conteiner">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </GridContainer>
        </ListSty>
    )
}