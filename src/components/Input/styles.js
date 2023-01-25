import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 5.6rem;

    
    color: ${({theme}) => theme.COLORS.GRAY_200};
    background-color: ${({theme}) => theme.COLORS.GRAY_400};
    
    border-radius: 10px;
    border: none;

    margin: 0 auto;
    padding: 0 2rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
    color: ${({theme}) => theme.COLORS.PINK};
    }

    @media (max-width: 404px) {
        width: 80%;

    }

    > input {
        width: 100%;
        height: 100%;
        padding: 0 2rem;

        background: none;
        border: none;
        outline: none;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 1.6rem;

    }
    
    > svg {
        padding-left: 0 20px;   
       

        
    }

`;