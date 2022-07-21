import styled from "styled-components";

export const Main = styled.main`
    height: 100vh;
    display: flex;
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

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2%;

    @media screen and (max-width: 820px){
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-height: 600px) {
        display: flex;
        flex-direction: column;
    }
`

export const Body = styled.body`
    width: 87.5%;
    overflow-y: auto;

    ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 3px;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background: #bfbfbf;
    border-radius: 3px;
  }
`
