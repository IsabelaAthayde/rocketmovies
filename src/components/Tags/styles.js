import styled from "styled-components";

export const Container = styled.span`
    color: ${({ theme }) => theme.COLORS.GRAY_000};
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    width: fit-content;
    height: 2.4rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;
    padding: 1.6rem 2rem;

    font-size: 1.2rem;
`;
