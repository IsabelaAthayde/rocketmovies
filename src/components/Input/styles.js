import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 5.6rem;

    color: ${({theme}) => theme.COLORS.GRAY_200};
    background-color: ${({theme}) => theme.COLORS.GRAY_400};

    border-radius: 10px;
    border: none;

    padding: 0 2rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    > input {
        width: 100%;
        height: 100%;
        padding: 0 2rem;

        background: none;
        border: none;
        outline: none;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 1.6rem;

        > svg {
            padding-left: 0 20px;   
        }
    }

`;