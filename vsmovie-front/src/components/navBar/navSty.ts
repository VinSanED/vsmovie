import styled from "styled-components";

export const NavSty = styled.header`
    background-color: var(--color-primary);
    height:6rem;
    display: flex;
    align-items: center;

    .vsmovie-nav-content{
        max-height:100%;
        display:flex;
        align-items : center;
        justify-content: space-between;
    };

    .vsmovie-contact-container{
        display:flex;
        align-items:center;
        color: var(--color-text1)
    };

    .vsmovie-contact-link{
        margin-left:1rem;
    };
`