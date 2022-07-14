import styled from "styled-components";

export const Main = styled.main`
    height: 100vh;
    display: flex;
`

export const ContainerInfo = styled.div`
    margin-left: 3%;
    width: 92%;
    display: flex;
    justify-content: space-between;
`

export const H1 = styled.h1`
    width: 75%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.85rem;
    color: #ED7839;
    margin: 12px 0px 12px 0px;

    @media screen and (max-width: 1600px){
        width: 76%;
        font-size: 1.65rem;
    }

    @media screen and (max-width: 1440px){
        width: 74%;
        font-size: 1.3rem;
    }

    @media screen and (max-width: 1280px){
        font-size: 1.2rem;
    }
`

export const DivButtons = styled.div`
    display: flex;
    width: 85%;
    justify-content: space-between;

    @media screen and (max-width: 1768px){
        width: 95%;
    }

    @media screen and (max-width: 1680px){
        width: 100%;
    }

    @media screen and (max-width: 1440px){
        width: 100%;
    }

    @media screen and (max-width: 1280px){
        width: 100%;
    }
`

export const ContainerButtons = styled.div`
    width: 17.6%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`

export const Button = styled.button`
    border: 0px;
    background-color: #ED7839;
    border-radius: 5px;
    height: 3.8vh;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    padding: 9px;
    align-items: center;
    justify-content: center;

    img{

        @media screen and (max-width: 1366px){
            width: 120%;
        }
        
    }

    @media screen and (max-width: 1680px){
        height: 3.5vh;
    }
    @media screen and (max-width: 1440px){
        width: 17%;
    }

    @media screen and (max-width: 1280px){
        height: 3vh;
    }
`

export const ButtonDownload = styled.button`
    border: 0px;
    background-color: #ED7839;
    border-radius: 5px;
    height: 3.8vh;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    width: 60%;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 1680px){
        height: 3.5vh;
    }

    @media screen and (max-width: 1440px){
        font-size: 1rem;
        width: 58%;
    }

    @media screen and (max-width: 1366px){
        font-size: 0.90rem;
    }

    @media screen and (max-width: 1280px){
        font-size: 0.80rem;
        height: 3vh;
    }
`

export const H4 = styled.h4`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    color: #ED7839;
    margin: 8px 0px 8px 0px;

    @media screen and (max-width: 1600px){
        font-size: 0.9rem;
    }

    @media screen and (max-width: 1440px){
        font-size: 0.8rem;
    }

    @media screen and (max-width: 1366px){
        font-size: 0.75rem;
    }

    @media screen and (max-width: 1280px){
        font-size: 0.70rem;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2%;
`

export const Body = styled.body`
    width: 87.5%;
    overflow-y: auto;
`
