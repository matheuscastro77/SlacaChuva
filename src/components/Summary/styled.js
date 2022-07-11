import styled from "styled-components";

export const Main = styled.main`
    min-height: 18vh;
    width: 94%;
    margin: 0 auto;
    border: 1px solid #ECECEC;
    border-radius: 4px;
    margin-bottom: 2%;

    :hover{
        cursor: pointer;
    }
`

export const TittleDiv = styled.div`
    height: 4.5vh;
    background-color: #FDF1EB;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ECECEC;
    width: 100%;
`

export const H3 = styled.h3`
    margin: 0px 0px 0px 15px;
    color: #4E4E4E;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
`

export const DivText = styled.div`
    width: 95%;
    margin: 1% auto;
`

export const Span = styled.span`
    color: #5C5C5C;
    font-family: 'Quicksand', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
`

export const P = styled.p`
    font-size: 0.85rem;
`

export const Button = styled.button`
    color: #ED7839;
    background-color: transparent;
    border: 0px;
    font-family: 'Quicksand', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    margin-left: 1%;
`