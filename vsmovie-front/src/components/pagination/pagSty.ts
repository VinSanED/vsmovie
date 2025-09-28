import styled from "styled-components";

export const PagSty = styled.div`

    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    

    .vsmovie-pagination-box {
        width: 180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        form {
            width: 100%;
            display: flex;
        }
    }

    .vsmovie-pagination-button {
        width: 40px;
        height: 40px;
        border-radius: 4px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--color-primary);
        cursor: pointer;
        svg {
            filter: brightness(0) 
                saturate(100%) 
                invert(26%) sepia(19%) 
                saturate(7395%) 
                hue-rotate(234deg) 
                brightness(89%) 
                contrast(92%)
            ;
        };
        &:disabled {
            border: 1px solid #c2c2c2;
            cursor: unset;
            svg {
                filter: none;
            }
        }  
    }


    p {
        margin: 0;
        font-size: 12px;
        color: var(--color-primary);
    }

    .vsmovie-flip-horizontal {
        transform: rotate(180deg);
    }


`