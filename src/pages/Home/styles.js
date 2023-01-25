import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    &::-webkit-scrollbar {
            width: 0px;
    }

    > main {
        width: 100%;
        height: -webkit-fill-available;
        
        max-width: 2000px;
        max-height: 2000px;

        margin: 0 auto 10rem;

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

        > #main-container {

            max-width: 70vw;
            height: fit-content;
            margin: 0 auto;
            padding-top: 4.7rem;

            > div#intro {
                width: 100%;
                height: 4.8rem;
                margin: 0 0 3.7rem;

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
                height: fit-content;
                width: 100%;

                margin-bottom: 10rem;
            }
        }

        
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
}
`;

