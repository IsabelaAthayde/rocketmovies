import styled from "styled-components";

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.GRAY_000};
    border-radius: 10px;

    width: fit-content;
    height: 2.4rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.6rem 2rem;

    font-size: 1.2rem;
`;
