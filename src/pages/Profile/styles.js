import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Header = styled.header`
    width: 100%;
    height: 14.4rem;

    background-color: ${({theme}) => theme.COLORS.TRANSPARENT_PINK};

    > a {
       display: flex;
       justify-content: flex-start;
       align-items: center;
       gap: .8rem;
       font-size: 1.8rem;
       height: 100%;
       color: ${({theme}) => theme.COLORS.PINK};


       padding-left: clamp(4rem, 4rem + 5vw, 14.4rem);
    }
`;

export const Avatar = styled.div`
    width: 186px;
    height: 186px;
    margin: -70px auto 32px;

    position: relative;

    > img {
        width: 186px;
        height: 186px;

        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;
        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 50%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        position: absolute;
        bottom: 7px;
        right: 7px;

        > svg {
            color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            font-size: 2.2rem;
        }
        
        > input {
            display: none;
        }
    }
`;

export const Form = styled.form`
    width: 34rem;
    height: 33.6rem;
    margin: 6.4rem auto;
    > div {
        margin-bottom: .8rem;
    }

    > div:nth-of-type(3) {
        margin-top: 2.5rem;

    }

    > Button {
        margin: 2rem auto 4.2rem;
    }
`;


