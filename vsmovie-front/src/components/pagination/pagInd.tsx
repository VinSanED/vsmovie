import { ReactComponent as Arrow } from "assets/img/arrow.svg"
import { PagSty } from "./pagSty"
import { Dispatch, SetStateAction } from "react";

type Props = {
    setPageNumber : Dispatch<SetStateAction<number>>;
}
export default function Pagination({setPageNumber}:Props){
    return(
        <PagSty className="vsmovie-pagination-container">
            <div className="vsmovie-pagination-box">
                <button className="vsmovie-pagination-button" disabled={true} >
                    <Arrow height={25} />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="vsmovie-pagination-button" disabled={false} >
                    <Arrow height={25} className="vsmovie-flip-horizontal" />
                </button>
            </div>
        </PagSty>
    )

}