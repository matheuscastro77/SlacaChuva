import styled from "styled-components";

export const Main = styled.main`
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    height: 100vh;
    width: 12.5%;
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
`
