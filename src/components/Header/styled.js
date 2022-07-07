import styled from "styled-components";

export const Main = styled.header`
    background-color: #FDF1EB;
    height: 8vh;
    width: 100%;
`

export const ContainerMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Tittle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 8vh;
    font-size: 0.9rem;
    margin-left: 3%;
`

export const P = styled.p`
    margin: 5px 0px -2px 0px;
    color: #725C5C;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-size: 1.4rem;
`

export const Span = styled.span`
    color: #725C5C;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
`

export const Container = styled.div`
    margin-right: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6vh;
    width: 22%;
`

export const LanguageButton = styled.button`
    display: flex;
    width: 27%;
    justify-content: space-between;
    align-items: center;
    margin-right: 5%;
    height: 3.5vh;
    background-color: transparent;
    border: 1.5px solid #CCCCCC;
    border-radius: 5px;

    :hover{
        cursor: pointer;
    }
`

export const P1 = styled.p`
    margin: 5px 0px -2px 0px;
    color: #333333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: right;
    font-size: 1rem;
`

export const P2 = styled.p`
    margin: 5px 0px -2px 0px;
    color: #333333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: right;
    font-size: 0.9rem;
`

export const Img = styled.img`
    border-radius: 50%;
    margin-left: 3%;
`