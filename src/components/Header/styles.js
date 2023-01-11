import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    height: 11.6rem;
    padding: 0 clamp(8rem, 5rem + 5vw, 12.3rem);

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 6.4rem;
    
    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > input {
        width: 100%;
        height: 5rem;

        padding: 0 2rem;
        
        font-size: 1.6rem;
        
        background-color: ${({theme}) => theme.COLORS.GRAY_400};
        color: ${({theme}) => theme.COLORS.GRAY_200};
        border: none;
        border-radius: 5px;

    }
    `;

export const Profile = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;
    
    text-align: right;
    
    width: 198px;
    
    color: ${({theme}) => theme.COLORS.WHITE};
    > div {
        width: 13.5rem;
        font-size: 1.4rem;

        > span {
            width: 13.5rem;
            color: ${({theme}) => theme.COLORS.WHITE};

            font-weight: 500;
            display: block;
            margin-bottom: .3rem;
        }

        #LogOut {
            text-decoration: transparent;
            background-color: transparent;
            border: none;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.GRAY_200};
        }
    }

    > a {

        img {
            width: 6.4rem;
            height: 6.4rem;
    
            border-radius: 50%;
        }
    }
`;