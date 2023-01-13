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
        background-color: transparent;

        font-size: 1.8rem;
        margin-top: 4rem;
        display: flex;
        justify-content: flex-start;
        color: ${({ theme }) => theme.COLORS.PINK};
        
    }

    > section#switch {
        height: 4rem;
        justify-content: center;
        align-items: center;
        gap: 8rem;

        > Button {
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.PINK};

            border-bottom: dashed 2px ${({ theme }) => theme.COLORS.PINK};

            width: 18rem;
            height: 100%;

            font-size: 1.6rem;

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;

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