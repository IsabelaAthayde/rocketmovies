import styled from "styled-components";

export const Create = styled.div`
    width: 80%;
    margin: 5rem auto 7rem;
    padding-right: 1.2rem;

    max-width: 1200px;
    max-height: 2000px;

    border-bottom:  2px solid ${({ theme }) => theme.COLORS.GRAY_400};
    box-shadow: inset -25px -104px 74px -113px rgba(25,25,28,1);

    animation: showUp 1s ease 0s 1 normal forwards;
    
    @keyframes showUp {
        0% {
            opacity: 0;
            transform: translateY(-40px);
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
    height: fit-content;

    > #sections_container {
        height: fit-content;
        width: 100%;

        margin: 2rem 0;

        
        > section {
            height: 5.6rem;
            width: 100%;
            margin: 1rem 0;
            
            color: ${({theme}) => theme.COLORS.GRAY_200};
            background-color: ${({theme}) => theme.COLORS.GRAY_300};
            
            border-radius: 10px;
            border: none;
            
            padding: 2rem;
            
            > input {
                margin-right: 1rem;
            }
        }

    }

    > button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;

        background-color: ${({theme}) => theme.COLORS.BLACK};
        color: ${({theme}) => theme.COLORS.PINK};
        
        width: clamp(25rem, 50%, 70rem);
        height: 4.8rem;
        
        margin: 6rem auto;
        
        border: none;
        border-radius: 8px;

        font-size: 1.6rem;
        font-weight: 500;
    }

`;