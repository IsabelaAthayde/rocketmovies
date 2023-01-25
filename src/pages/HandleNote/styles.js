import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    overflow: hidden;
    &::-webkit-scrollbar {
        width: 0px;
    }
`;

export const Main = styled.main`
    width: 100%;
    height: -webkit-fill-available;
    
    max-width: 2000px;
    max-height: 2000px;

    margin: 0 auto 10rem;

    position: relative;
    z-index: 0;

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

        > Button:first-of-type {
            animation: newEntrance 1s ease 0s 1 normal forwards;

            @keyframes newEntrance {
            0% {
                opacity: 0;
                transform: translateX(-250px);
            }

            100% {
                opacity: 1;
                transform: translateX(0);
            }
            }
        }

        > Button:last-of-type {
            animation: deleteEntrance 1s ease-out 0s 1 normal forwards;

            @keyframes deleteEntrance {
            0% {
                opacity: 0;
                transform: translateX(250px);
            }

            100% {
                opacity: 1;
                transform: translateX(0);
            }
            }
        }

        > Button {

            &:hover {
                background-color: ${({ theme }) => theme.COLORS.PINK};
                color: ${({ theme }) => theme.COLORS.BLACK};
                box-shadow: -1px 9px 34px 3px rgba(0,0,0,0.75);
            }
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

    
`;