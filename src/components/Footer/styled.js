import styled from "styled-components";
import footer from "../../assets/footer.svg"

export const Main = styled.div`
    background-image: url(${footer}) ;
    background-size: contain;
    width: 96%;
    height: 28.4vh;
    margin: 0 auto;

    @media screen and (max-width: 1768px){
    height: 29vh;
    }

    @media screen and (max-width: 1680px){
    height: 25.8vh;
    }

    @media screen and (max-width: 1600px){
        height: 24.7vh;
    }

    @media screen and (max-width: 1440px){
        height: 25.9vh;
    }

    @media screen and (max-width: 1366px){
        height: 29.5vh;
    }

    @media screen and (max-width: 1280px){
        height: 19.7vh;
    }

    @media screen and (max-width: 820px) {
        height: 8.7vh;
    }

    @media screen and (max-width: 768px) {
        height: 9.5vh;
    }
`