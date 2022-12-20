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