import styled from "styled-components";

export const Main = styled.header`
  background-color: #fdf1eb;
  height: 8vh;
  width: 100%;
`;

export const ContainerMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tittle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 8vh;
  font-size: 0.9rem;
  margin-left: 3%;
`;

export const H1 = styled.h1`
  margin: 3px 0px -2px 0px;
  color: #725c5c;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 1.4rem;

  @media screen and (max-width: 1440px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 830px) {
    font-size: 1.15rem;
  }

  @media screen and (max-width: 820px) {
    font-size: 1.05rem;
  }

  @media screen and (max-height: 600px) {
    margin: 0px;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.75rem;
  }
`;

export const Span = styled.span`
  color: #725c5c;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;

  @media screen and (max-width: 1440px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 1366px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 820px) {
    font-size: 0.8rem;
  }

  @media screen and (max-height: 600px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.6rem;
  }
`;

export const Container = styled.div`
  margin-right: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vh;
  width: 22%;

  @media screen and (max-width: 1680px) {
    width: 23%;
  }

  @media screen and (max-width: 1600px) {
    width: 24%;
  }

  @media screen and (max-width: 1440px) {
    width: 25%;
  }

  @media screen and (max-width: 1366px) {
    width: 26%;
  }

  @media screen and (max-width: 1280px) {
    width: 27%;
  }

  @media screen and (max-width: 414px) {
    flex-direction: column;
    height: 7vh;
    justify-content: space-around;
  }
`;

export const LanguageButton = styled.button`
  display: flex;
  width: 27%;
  justify-content: space-between;
  align-items: center;
  margin-right: 5%;
  height: 3.5vh;
  background-color: transparent;
  border: 1.5px solid #cccccc;
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }

  img {
    @media screen and (max-width: 414px) {
      width: 50%;
    }
  }

  @media screen and (max-width: 1600px) {
    font-size: 0.7rem;
    width: 25%;
    height: 3.2vh;
  }

  @media screen and (max-width: 1440px) {
    font-size: 0.6rem;
    width: 26%;
  }

  @media screen and (max-width: 1366px) {
    font-size: 0.6rem;
    height: 3.8vh;
  }

  @media screen and (max-width: 1280px) {
    height: 3vh;
  }

  @media screen and (max-width: 820px) {
    height: 2.5vh;
    width: 56%;
  }

  @media screen and (max-height: 600px) {
    height: 4vh;
    width: 35%;
  }

  @media screen and (max-width: 414px) {
    width: 90%;
    font-size: 0.5rem;
  }
`;

export const P1 = styled.p`
  margin: 5px 0px -2px 0px;
  color: #333333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: right;
  font-size: 1rem;

  @media screen and (max-width: 1600px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 1440px) {
    font-size: 0.85rem;
  }

  @media screen and (max-width: 1366px) {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 820px) {
    display: none;
  }

  @media screen and (max-height: 600px) {
    display: none;
  }
`;

export const P2 = styled.p`
  margin: 5px 0px -2px 0px;
  color: #333333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: right;
  font-size: 0.9rem;

  @media screen and (max-width: 1600px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 1440px) {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 1366px) {
    font-size: 0.65rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.6rem;
  }

  @media screen and (max-width: 820px) {
    display: none;
  }

  @media screen and (max-height: 600px) {
    display: none;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  margin-left: 3%;

  @media screen and (max-width: 414px) {
    width: 50%;
  }
`;
