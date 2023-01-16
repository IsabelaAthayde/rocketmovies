import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    > main {
        max-width: 70vw;
        height: 100%;
        margin: 0 auto;

        > div {
            width: 100%;
            height: 4.8rem;
            margin: 4.7rem 0 3.7rem;

            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 2rem;
            font-weight: 400;

            @media (max-width: 499px) {
                flex-direction: column;
                height: fit-content;
                gap: 2rem;
            }

            > h1 {
                width: fit-content;
                
                @media (max-width: 720px) {
                    font-size: 3.5rem;
                }
            }
            
            aside {
                width: fit-content;
                height: 48px;

            }
        }

        > #sections_container {

            max-height: 700px;
            height: 70%;
            width: 100%;

            margin-bottom: 6.4rem;

            overflow-y: scroll;
            
        }
        
        #sections_container::-webkit-scrollbar {
            width: 7px;
        }
        
        #sections_container::-webkit-scrollbar-track {
            background: none;
        }
        
        #sections_container::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.COLORS.PINK};
            border-radius: 9999px;
        }
    }

    .animation {
        
        @keyframes goToNewPage {
            0% {
                opacity: 1;
                transform: translateX(0);
            }
            
            100% {
                opacity: 0;
                transform: translateX(-250px);
            }
        }
        animation: goToNewPage 900ms ease 0s 1 normal forwards;
        
        }
`;

export const NewMovie = styled.button`
    height: 48px;
    padding: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    gap: .8rem;

    border: none;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    font-size: 1.6rem;

    > span:first-of-type {
        display: none;
    }

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.TRANSPARENT_PINK};

        color: ${({ theme }) => theme.COLORS.PINK};
    }
                
    @media (max-width: 720px) {
        > span:first-of-type {
            display: block;
        }

        > span:last-of-type {
            display: none;
        }
    }

    @media (max-width: 499px) {
        padding: 1rem;
        > span:first-of-type {
            display: none;
        }

        > span:last-of-type {
            display: block;
        }
    }
                
    svg {
        font-size: 2rem;

        @media (max-width: 422px) {
            font-size: 1.6rem;
        }
    }
`;

