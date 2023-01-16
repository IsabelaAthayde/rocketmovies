import styled from "styled-components";

export const Container = styled.div`
    height: 5.6rem;
    width: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    padding: 1.6rem;

    background-color: ${({theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_400};
    border: ${({theme, isNew }) => isNew ? `2px ${theme.COLORS.GRAY_200} dashed ` : "none" };
    border-radius: 10px;
    outline: none;

        animation: addTag 0.8s ease-out 0s 1 normal forwards;
        transition: all 0.8s;
        @keyframes addTag {
        0% {
            opacity: 0;
            transform: translateX(100px);
        }
    
        100% {
            opacity: 1;
            transform: translateX(0);
        }
        }


    > button {
        border: none;
        background-color: transparent;
        font-size: 2rem;
        height: 20px;
        svg {
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }

    > input {
        outline: none;

        height: 5.6rem;
        width: 10rem;

        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_100}
        }
    }
`;