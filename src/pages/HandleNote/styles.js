import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    overflow: hidden;
`;

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    max-width: 2000px;
    max-height: 2000px;

    margin: 0 auto;

    > #return, #switch {
        margin: 0 auto 4rem;

        width: 80%;
        max-width: 1200px;

        display: flex;
        
    }
    > #return {
        border: none;
        
        font-size: 1.6rem;
        margin-top: 4rem;
        display: flex;
        justify-content: flex-start;
        color: ${({ theme }) => theme.COLORS.PINK};
        background-color: transparent;
    }

    > section#switch {
        justify-content: center;
        align-items: center;
        gap: 5rem;
        > button {
            color: ${({ theme }) => theme.COLORS.PINK};
            background-color: transparent;
            border: none;

            font-size: 1.6rem;

        }
    }

    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 12px;
    }
    
    &::-webkit-scrollbar-track {
        background: none;
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.COLORS.GRAY_400};
    }
`;


