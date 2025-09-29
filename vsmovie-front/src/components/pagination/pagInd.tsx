import { ReactComponent as Arrow } from "assets/img/arrow.svg"
import { PagSty } from "./pagSty"
import { Dispatch, SetStateAction } from "react";
import { MoviePage } from "models/moviePage";

type Props = {
    page:MoviePage;
    setPageNumber : Dispatch<SetStateAction<number>>;
}
export default function Pagination({page,setPageNumber}:Props){
    return(
        <PagSty className="vsmovie-pagination-container">
            <div className="vsmovie-pagination-box">
                <button className="vsmovie-pagination-button" onClick={()=>{setPageNumber(prev=>prev-1)}} disabled={page.first} >
                    <Arrow height={25} />
                </button>
                <p>{`${page.number +1} de ${page.totalPages}`}</p>
                <button className="vsmovie-pagination-button" onClick={()=>{setPageNumber(prev=>prev+1)}} disabled={page.last} >
                    <Arrow height={25} className="vsmovie-flip-horizontal" />
                </button>
            </div>
        </PagSty>
    )

}