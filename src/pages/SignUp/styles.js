import styled from "styled-components";

import image from '../../assets/bgImg.png';

export const Container = styled.div`
     width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: 620px auto;
    align-items: center;
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

    > h1 {
        font-size: 4.8rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-bottom: 1.1rem;
        width: fit-content;
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
   
    max-height: 528px;

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

    > Button:nth-of-type(2) {
        background-color: transparent;
        border: none;

        font-size: 1.6rem;

        color: ${({ theme }) => theme.COLORS.PINK};
        display: flex;
        gap: .8rem;
        align-items: center;
        justify-content: center;
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
