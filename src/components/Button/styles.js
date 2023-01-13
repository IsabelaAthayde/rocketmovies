import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 48px;

    border: none;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    font-size: 1.6rem;

`;