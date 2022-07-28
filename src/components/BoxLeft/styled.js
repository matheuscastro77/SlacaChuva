import styled from "styled-components";

export const Main = styled.main`
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    height: 100vh;
    width: 12.5%;

    img{
        width: 90%;

        @media screen and (max-width: 1440px){
            width: 95%;
        }
    }

    @media screen and (max-width: 1600px){
        width: 14.5%;
    }

    @media screen and (max-width: 820px){
        width: 24%;
    }
`

export const Tittle = styled.div`
    background: linear-gradient(180deg, #FFB354 0%, #EE7A3A 100%);
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 2.2rem;
        font-weight: 700;

        @media screen and (max-width: 1680px){
            font-size: 2.0rem;
        }

        @media screen and (max-width: 1440px){
            font-size: 1.8rem;
        }

        @media screen and (max-width: 1280px){
            font-size: 1.6rem;
        }

        @media screen and (max-width: 414px) {
            font-size: 1.0rem;
        }

        @media screen and (max-width: 375px) {
            font-size: 0.95rem;
        }

        @media screen and (max-width: 360px) {
            font-size: 0.9rem;
        }
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    color: #725C5C;
    padding: 6px;
    background-color: transparent;
    border: 0px;
    border-bottom: 3px solid #E7E7E7;

    :hover{
        cursor: pointer;
        background-color: #FDF1EB;
        border-left: 4px solid #ED7839 ;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 0.8rem;
    }
`

export const SelectButton = styled.button`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    color: #725C5C;
    padding: 6px;
    background-color: #FDF1EB;
    border: 0px;
    border-left: 4px solid #ED7839 ;
    border-bottom: 3px solid #E7E7E7;

    :hover{
        cursor: pointer;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 0.8rem;
    }
`
