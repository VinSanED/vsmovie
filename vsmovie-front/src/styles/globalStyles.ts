import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* Import de fonte Google dentro do escopo do styled-components */
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

    :root {
        --color-primary:${({theme})=>theme.colors.blue};
        --color-btn:${({theme})=>theme.colors.purpeBlue};
        --color-background1:${({theme})=>theme.colors.white};
        --color-background2:${({theme})=>theme.colors.gray300};
        --color-text1:${({theme})=>theme.colors.gray200};
        --color-text2:${({theme})=>theme.colors.gray900};
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background: linear-gradient(-25deg, 
            var(--color-background2)  0%, 
            var(--color-background1) 100%);
        font-family: 'Open Sans', sans-serif;
    }

    img {
        max-width: 100%;
        display: block;
    }

    button {
        cursor: pointer;
        font-family: inherit;
    }

    a, a:hover {
        text-decoration: none;
        color: unset;
    }

    ul, ol {
        list-style: none;
    }
    .container{
        padding:"0.5rem";
        max-width: 90%;
    }
`;
