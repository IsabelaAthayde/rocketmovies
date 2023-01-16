import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    height: 11.6rem;
    padding: 0 clamp(8rem, 5rem + 5vw, 12.3rem);

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    background-color: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_900};


    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2.4rem;
    
    @media (max-width: 506px) {
        height: 15rem;
        padding: 2rem auto;

        display: grid;
        grid-template-areas: 
        "logo avatar"
        "search search";
        gap: 0;
    }

    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        grid-area: logo;

        @media (max-width: 800px) {
            font-size: 2.3rem;
        }
    }

    > input {
        grid-area: search;

        min-width: 191px;
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
    
    width: 19.8rem;
    
    color: ${({theme}) => theme.COLORS.WHITE};

    @media (max-width: 645px) {
        height: fit-content;

        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        gap: unset;
    }
    @media (max-width: 506px) {
        flex-direction:  row;
        gap: 1rem;
        width: fit-content;
        margin-left: 1rem;
    }
    
    > div {
        width: 11rem;
        font-size: 1.4rem;
        @media (max-width: 645px) {
            width: fit-content;
        }
        
        > span {
            color: ${({theme}) => theme.COLORS.WHITE};
            
            font-weight: 500;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            margin-bottom: .3rem;

            @media (max-width: 645px) {
                display: none;
            }
        }

        #LogOut {
            text-decoration: transparent;
            background-color: transparent;
            border: none;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.GRAY_200};
            width: fit-content;
            @media (max-width: 645px) {
                width: fit-content;
                text-align: center;
            }

        }
    }

    > a {
        img {
            width: 6.4rem;
            height: 6.4rem;
    
            border-radius: 50%;

            grid-area: avatar;

            transform: scale(1);
            transition: all 0.8s ease;

            &:hover {
            transform: scale(0.78);

            }

        }
    }
`;