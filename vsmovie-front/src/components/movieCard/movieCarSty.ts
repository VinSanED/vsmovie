import styled from "styled-components";

export const MovieScoreSty = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;


    .vsmovie-score-value {
        margin: 0;
        color: #FFBB3A;
        font-size: 16px;
        font-weight: 700;
    }

    .vsmovie-score-count {
        font-size: 12px;
        color: #989898;
        margin: 4px 0 10px 0;
    }

`

export const MsSty = styled.div`
   
    width: 130px;
    display: flex;
    justify-content: space-between;

    svg {
        width: 22px;
        height: auto;
    }

`