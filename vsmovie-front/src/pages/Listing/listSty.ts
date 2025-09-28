import styled from "styled-components";

export const ListSty = styled.section`
    min-height:100vh;
`

export const GridContainer = styled.div`
    display: grid;
    grid-gap:1rem;
    padding:1rem;
    grid-template-columns:1fr;

    @media (min-width:576px) {
        grid-template-columns: repeat(2, 1fr)
    }
    @media (min-width:992px) {
        grid-template-columns: repeat(3, 1fr)
    }
    @media (min-width:1200px) {
        grid-template-columns: repeat(4, 1fr)
    }
`