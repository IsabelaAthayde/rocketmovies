import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    @keyframes goDown {
        0% {
            opacity: 0;
            transform: translateY(-250px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fade {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 0.6;
        }

        100% {
            opacity: 1.5;
        }
    }

    @keyframes goUp {
        0% {
            opacity: 0;
            transform: translateY(250px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 14.4rem;

    background-color: ${({theme}) => theme.COLORS.TRANSPARENT_PINK};
    
    animation: fade 1s ease 0s 1 normal forwards;
    
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

    animation: goDown 1s ease 0s normal forwards;

    @media (max-width: 404px) {
        width: 150px;
        height: 150px;
    }

    > img {
        width: inherit;
        height: inherit;

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

        transition: all 0.4s ease;

        &:hover {
            background-color: ${({theme}) => theme.COLORS.BLACK}; 
            > svg {
                color: ${({theme}) => theme.COLORS.PINK};   
            }
        }

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

    animation: goUp 1s ease 0s normal forwards;

    > div {
        margin-bottom: .8rem;
    }

    > div:nth-of-type(3) {
        margin-top: 2.5rem;

    }

    > Button {
        margin: 2rem auto 4.2rem;
        @media (max-width: 404px) {
            width: 80%;
            display: block;
        }
    }
`;


