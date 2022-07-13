import styled from "styled-components";
import video from "../../assets/video2.svg"

export const Main = styled.div`
    background-image: url(${video}) ;
    background-size: contain;
    width: 68.8%;
    height: 60vh;
    margin: 0% 3%;
    
    @media screen and (max-width: 1768px){
        height: 60.1vh;
    }

    @media screen and (max-width: 1680px){
        height: 54vh;
    }

    @media screen and (max-width: 1600px){
        height: 58.8vh;
    }

    @media screen and (max-width: 1440px){
        height: 52.9vh;
    }

    @media screen and (max-width: 1366px){
        height: 58.8vh;
    }

    @media screen and (max-width: 1360px){
        height: 58.5vh;
    }

    @media screen and (max-width: 1280px){
        height: 41.3vh;
    }
`