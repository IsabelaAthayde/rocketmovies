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

    > button {
        width: 80%;
        max-width: 1200px;

        margin: 0 auto 2.4rem;

        color: ${({ theme }) => theme.COLORS.PINK};
        border: none;
        background-color: transparent;
        font-size: 1.8rem;

        margin-top: 4rem;
        display: flex;
        justify-content: flex-start;
        gap: .8rem;
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

export const Movie = styled.div`
    width: 100%;
    max-width: 1200px;
    height: fit-content;

    margin: 0px auto 20rem;
    padding: 3rem;

    overflow: auto;

    > #tags {
        display: flex;
        gap: .8rem;

        margin: 2.6rem 0;

        flex-wrap: wrap;
        
        > div {
            background-color: ${({ theme }) => theme.COLORS.TRANSPARENT_PINK};
        }
    }

    &::-webkit-scrollbar {
        width: 6px;
        height: 5px;
    }
    
    &::-webkit-scrollbar-track {
        background: none;
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.COLORS.PINK};
        border-radius: 9999px;
    }
`;

export const Title = styled.div`
    width: 100%;
    height: 4.7rem;

    margin: 2.4rem 0;
    display: flex;
    gap: 1.9rem;
    align-items: center;

    @media (max-width: 583px) {
        display: block;
    }

    > h1 {
        font-size: 3.6rem;

        @media (max-width: 583px) {
            font-size: 2.7rem;
            font-size: 7vw;
            white-space: nowrap;
        }
    }

    > div {
        width: 14rem;
        height: 2rem;
        
        > svg {
            width: 20px;
            height: 20px;
        }

    }
`;

export const Description = styled.div`
    width: 100%;
    height: 1.9rem;

    display: flex;
    gap: .8rem;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 300;

    color: ${({ theme }) => theme.COLORS.WHITE};

    @media (max-width: 455px) {
        display: block;
    }

    > section#avatarMini, section#time {
        width: fit-content;
        height: 100%;
        display: flex;
        gap: .8rem;
        align-items: center;


        > img {
            width: 1.9rem;
            height: 1.9rem; 
            border-radius: 50%;
        }

        > svg {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    
`;

export const Synopsis = styled.div`
    width: 100%;
    height: 33.6rem;
`;