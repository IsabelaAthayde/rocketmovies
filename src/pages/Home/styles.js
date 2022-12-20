import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    > main {
        max-width: 1137px;
        width: 80%;
        height: 100%;
        margin: 0 clamp(8rem, 8rem + 5vw, 12.3rem);

        > div {
            width: 100%;
            height: 48px;
            margin: 4.7rem 0 3.7rem;

            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 2rem;
            font-weight: 400;
            
            aside {
                width: 20.7rem;
                height: 48px;
            }
        }

        > #sections_container {
            overflow-y: scroll;

            max-height: 700px;
            height: 70%;
            width: 100%;

            margin-bottom: 6.4rem;
            padding-right: 1rem;

            > a {
                h2 {
                    color: ${({ theme }) => theme.COLORS.WHITE};
                    
                }
                p {
                    color: ${({ theme }) => theme.COLORS.GRAY_100};
                }
            }
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

`;

export const NewMovie = styled(Link)`
    width: 100%;
    height: 48px;
    padding: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
                
                
    svg {
        font-size: 2rem;
        margin-right: .8rem;
    }

    border: none;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    font-size: 1.6rem;
`;

