import styled from "styled-components";
import video from "../../assets/video2.svg"

export const Main = styled.div`
    background-image: url(${video}) ;
    background-size: contain;
    width: 68.8%;
    height: 68.4vh;
    margin: 0% 3%;
    
    @media screen and (max-width: 1768px){
        height: 69.5vh;
    }

    @media screen and (max-width: 1680px){
        height: 61.8vh;
    }

    @media screen and (max-width: 1600px){
        height: 59.3vh;
    }

    @media screen and (max-width: 1440px){
        height: 62vh;
    }

    @media screen and (max-width: 1366px){
        height: 71.2vh;
    }

    @media screen and (max-width: 1360px){
        height: 70.9vh;
    }

    @media screen and (max-width: 1280px){
        height: 47.3vh;
    }
`