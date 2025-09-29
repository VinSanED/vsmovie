import { ReactComponent as StarFull } from "assets/icons/starfull.svg"
import { ReactComponent as StarEmpty } from "assets/icons/starempt.svg"
import { ReactComponent as StarHalf } from "assets/icons/starhalf.svg"
import { MsSty } from "components/movieCard/movieCarSty"

type Props = {
    score:number;
}
type StarProps = {
    fill:number;
}
function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
        fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0) {
        fills[integerPart] = 0.5;
    }

    return fills;
}

function Star({fill}:StarProps){
    switch(fill){
        case 1:
            return <StarFull/>
        case 0.5:
            return <StarHalf/>
        default:
            return <StarEmpty/>
    }
}
export default function MovieStars({score}:Props){
  
    
    const fills = getFills(score);

    return(
        <MsSty className="vsmovie-stars-container">
            <Star fill={fills[0]}/>
            <Star fill={fills[1]}/>
            <Star fill={fills[2]}/>
            <Star fill={fills[3]}/>
            <Star fill={fills[4]}/>
        </MsSty>
    )
}