import { ReactComponent as StarFull } from "assets/icons/starfull.svg"
import { ReactComponent as StarEmpty } from "assets/icons/starempt.svg"
import { ReactComponent as StarHalf } from "assets/icons/starhalf.svg"
import { MsSty } from "components/movieCard/movieCarSty"


export default function MovieStars(){
    return(
        <MsSty className="vsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </MsSty>
    )
}