import MovieCard from "components/movieCard/movieCarInd"
import Pagination from "components/pagination/pagInd"
import { GridContainer, ListSty } from "./listSty"

export const Listing=()=>{
    return(
        <ListSty>
            <Pagination/>
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