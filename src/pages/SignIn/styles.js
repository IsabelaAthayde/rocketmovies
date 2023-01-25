import styled from "styled-components";

import image from '../../assets/bgImg.png';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: 620px auto;
    align-items: center;
    @media (max-height: 550px) {
        height: inherit;
    }

    @media (max-width: 591px) {
        display: block;
        
    }
`;

export const Login = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-height: 550px) {
        margin: 3rem 0 0;
        height: inherit;

    }
    > h1 {
        width: fit-content;
        font-size: 4.8rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
        margin: 0 0 1.1rem;
        
        @media (max-width: 591px) {
            font-size: 10vw;
        }
    }
    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.4rem;
        font-weight: 400;
        width: fit-content;
        @media (max-width: 338px) {
            font-size: 4vw;
        }
    }
`;



export const Form = styled.form`
    width: 34rem;
    height: fit-content;
    display: grid;
    place-items: center;
   

    > h2 {
        margin: 4.8rem 0;
    }
    
    > div {
        margin-bottom: .8rem;
    }
    
    > Button {
        margin: 2rem auto 4.2rem;
        @media (max-width: 591px) {
            width: 80%;
        }
    }

    > a {
        color: ${({ theme }) => theme.COLORS.PINK};
        display: flex;
        gap: .8rem;
        align-items: center;
        justify-content: center;

        @media (max-height: 550px) {
            margin-bottom: 5rem;
        }
    }
`;

export const Img = styled.section`
    width: 100%;
    height: 100%;

    border: none;
    background-image: url(${image});
    background-size: cover;

    @media (max-width: 600px) {
        display: none;
    }
`;


