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

    > a {
        width: 80%;
        max-width: 1200px;

        margin: 0 auto 4rem;


        color: ${({ theme }) => theme.COLORS.PINK};
        margin-top: 4rem;
        display: flex;
        justify-content: flex-start;
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

export const Create = styled.div`
    width: 80%;
    height: 536px;
    margin: 0 auto 20rem;
    padding-right: 1.2rem;

    max-width: 1200px;

    overflow: auto;

    border-bottom:  2px solid ${({ theme }) => theme.COLORS.GRAY_400};
    box-shadow: inset -25px -104px 74px -113px rgba(25,25,28,1);

    > h1 {
        margin: 0 0 4rem;
    }

    &::-webkit-scrollbar {
        width: 7px;
    }
    
    &::-webkit-scrollbar-track {
        background: none;
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.COLORS.PINK};
        border-radius: 9999px;
    }
`;

export const Form = styled.form`
    width: 100%;
    height: 63.5rem;

    > textarea, > #input_container input {
        height: 5.6rem;
        
        color: ${({theme}) => theme.COLORS.GRAY_200};
        background-color: ${({theme}) => theme.COLORS.GRAY_400};

        border-radius: 10px;
        border: none;

        padding: 0 2rem;

        outline: none;
    }

    > #input_container {
        width: 100%;
        display: flex;
        gap: 3rem;

        #title, #rating {
            flex: 1;
        }
    }
    
    > #obs {
        width: 100%;
        height: 27rem;
        margin: 4rem 0;
        resize: none;
        padding: 2rem;
        font-size: 1.6rem;
    }

    > span {
        color: ${({theme}) => theme.COLORS.GRAY_200};
    }

    > #markers {
        margin-top: 2.4rem;
        padding: 1.6rem;
        
        width: 100%;
        height: 8.8rem;
        
        display: flex;
        gap: 2.4rem;

        border-radius: 5px;
        background-color: ${({theme}) => theme.COLORS.BLACK};
    }

    > #btns {
        width: 100%;
        display: flex;
        gap: 3rem;

        margin-top: 4rem;
        #btns:first-child, #btns:last-child {
            flex: 1;
        }

        button:first-of-type {
            background-color: ${({theme}) => theme.COLORS.BLACK};
            color: ${({theme}) => theme.COLORS.PINK};

            width: 100%;
            height: 4.8rem;

            border: none;
            border-radius: 8px;

            font-size: 1.6rem;
        }
    }

`;
