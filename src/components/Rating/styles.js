import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 15px;
    > svg {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-right: .4rem;
    }
`;