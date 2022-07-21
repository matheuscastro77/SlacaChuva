import styled from "styled-components";
import video from "../../assets/video2.svg"

export const Main = styled.div`
    margin: 0% 3%;
`

export const VideoContainer = styled.div`
    background-image: url(${video}) ;
    background-size: contain;
    height: 72.4vh;
    
    @media screen and (max-width: 1768px){
        height: 75vh;
    }

    @media screen and (max-width: 1680px){
        height: 67.3vh;
    }

    @media screen and (max-width: 1600px){
        height: 64vh;
    }

    @media screen and (max-width: 1440px){
        height: 67.3vh;
    }

    @media screen and (max-width: 1366px){
        height: 78vh;
    }

    @media screen and (max-width: 1360px){
        height: 77.7vh;
    }

    @media screen and (max-width: 1280px){
        height: 50vh;
    }

    @media screen and (max-width: 820px){
        height: 28.2vh;
        margin-bottom: 2%;
    }    

    @media screen and (max-width: 768px){
        height: 30.4vh;
        margin-bottom: 2%;
    }
    
    @media screen and (max-height: 800px){
        height: 55.1vh;
    } 

    @media screen and (max-height: 600px){
        height: 76.2vh;
    } 
    
    @media screen and (max-width: 414px) {
        height: 17.9vh;
    }
`

export const H1 = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.85rem;
    color: #ED7839;
    margin: 12px 0px 12px 0px;

    @media screen and (max-width: 1600px){
        font-size: 1.65rem;
    }

    @media screen and (max-width: 1440px){
        font-size: 1.5rem;
    }

    @media screen and (max-width: 1280px){
        font-size: 1.2rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.85rem;
    }
`