import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: 620px auto;
    align-items: center;
`;

export const Login = styled.section`
    width: 34rem;
    height: fit-content;

    margin: 0 clamp(8rem, 8rem + 5vw, 13.4rem);

    > h1 {
        font-size: 4.8rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-bottom: 1.1rem;
    }
    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.4rem;
        font-weight: 400;
    
    }
`;

export const Form = styled.form`
    width: 34rem;
    max-height: 528px;

    > h2 {
        margin: 4.8rem 0;
    }

    > div {
        margin-bottom: .8rem;
    }

    > Button {
        margin: 2rem auto 4.2rem;
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
    background-image: url('src/assets/bgImg.png');
`;
