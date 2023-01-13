import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
        
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.6rem;

        width: 100vw;
        height: 100vh;

    }

    body, button, input, textarea, select {
        font-family: 'Roboto Slab', serif;
    }

    button, a {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        list-style: none;
    }

`;