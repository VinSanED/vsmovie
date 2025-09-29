import { FormCard } from "components/formCard/formCardInd";
import { useParams } from "react-router-dom";

export const Forme=()=>{
    const params = useParams();
    return(
        <FormCard movieId={`${params.moveId}`}/>
    )
}