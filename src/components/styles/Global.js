import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }

    body{
        width: 80vw;
        margin: 0 auto;
    }

    a{
        text-decoration: none;
    }

`;

export default GlobalStyles;
