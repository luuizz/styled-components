import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        text-decoration: none;
        list-style: none;
    }

    html, body {
        font-size: 62.5%;
    }

    h1, h2, h3, h4 {
        font-family: var(--font-poppins);
    }
`;

export default GlobalCSS;