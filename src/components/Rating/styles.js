import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 12px;
    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-right: .6rem;
    }
`;