import styled from "styled-components";

export const Create = styled.div`
    width: 80%;
    height: 536px;
    margin: 0 auto 20rem;
    padding-right: 1.2rem;

    max-width: 1200px;

    overflow: auto;

    border-bottom:  2px solid ${({ theme }) => theme.COLORS.GRAY_400};
    box-shadow: inset -25px -104px 74px -113px rgba(25,25,28,1);

    animation: showUp 1s ease 0s 1 normal forwards;
    
    @keyframes showUp {
        0% {
            opacity: 0;
            transform: translateY(-50px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

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
        height: fit-content;
        display: flex;
        gap: 3rem;

        @media (max-width: 546px) {
        flex-direction: column;
        

        }

        #title, #rating {
            @media (max-width: 546px) {
                flex: auto;
            }
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
        overflow-x: scroll;
        overflow-y: hidden;

        &::-webkit-scrollbar {
            height: 4px;
        }
        
        &::-webkit-scrollbar-track {
            background: none;
        }
        
        &::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.COLORS.PINK};
            border-radius: 9999px;
        }
    }

    > button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;

        background-color: ${({theme}) => theme.COLORS.PINK};
        color: ${({theme}) => theme.COLORS.BLACK};

        width: clamp(25rem, 50%, 70rem);
        height: 4.8rem;
        
        margin: 4rem auto 0;

        border: none;
        border-radius: 8px;

        font-size: 1.6rem;
        font-weight: 500;
    }

`;