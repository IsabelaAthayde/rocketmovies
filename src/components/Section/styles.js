import styled from "styled-components";

export const Container = styled.section`
    width: 100%;

    height: fit-content;
    padding: 3.2rem;
    margin-bottom: 2.4rem;

    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.TRANSPARENT_PINK};
    
    cursor: pointer;

    > h2 {
        margin-bottom: .8rem;
        font-weight: 700;
        letter-spacing: 1px;
    }

    > svg {
        width: 16px;
        height: 16px;
    }

    > p {
        margin: 1.5rem 0;
        max-height: 85px;
        
        overflow: hidden;
    }

    > #rating, #tags {
        display: flex;
        align-items: center;
    }
    
    > #tags {
        gap: .8rem;
        
        width: 100%;
        height: 2.4rem;

    }
`;