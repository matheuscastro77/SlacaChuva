import styled from "styled-components";

export const Main = styled.main`
  border: 1px solid #ececec;
  border-radius: 4px;
  height: 60vh;
  width: 16%;
  margin-right: 5%;

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
    height: 58.65vh;
  }

  @media screen and (max-width: 1280px){
    height: 41.3vh;
  }
`

export const H1 = styled.h1`
  background-color: #fdf1eb;
  border-bottom: 1px solid #ececec;
  color: #4e4e4e;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0px 0px 0px 0px;
  height: 6vh;
  font-weight: 500;
  padding-left: 10%;
  display: flex;
  align-items: center;
  font-size: 1.7rem;

  @media screen and (max-width: 1768px){
    font-size: 1.8rem;
  }

  @media screen and (max-width: 1440px){
    font-size: 1.5rem;
    height: 5vh;
  }

  @media screen and (max-width: 1280px){
    font-size: 1.4rem;
    height: 4.5vh;
  }
`

export const Text = styled.div`
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
  overflow-y: auto;
  height: 53vh;
  font-family: 'Quicksand', sans-serif;

  ::-webkit-scrollbar-track {
    background-color: #e7e7e7;
    border-radius: 5px;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #bfbfbf;
    border-radius: 5px;
  }

  @media screen and (max-width: 1768px){
    height: 53vh;
  }

  @media screen and (max-width: 1680px){
    height: 47vh;
  }

  @media screen and (max-width: 1600px){
    height: 51vh;
  }

  @media screen and (max-width: 1440px){
    height: 46vh;
  }

  @media screen and (max-width: 1366px){
    height: 52vh;
  }

  @media screen and (max-width: 1280px){
    height: 36vh;
  }
`

export const Span = styled.span`
  font-size: 0.75rem;
  color: #5c5c5c;
  font-weight: 700;
`;

export const P1 = styled.p`
  font-size: 0.75rem;
  color: #5c5c5c;
`;

export const H4 = styled.h4`
  font-size: 0.85rem;
  margin-bottom: 4.5%;
  color: #5c5c5c;
  font-weight: 600;
`;

export const H5 = styled.h5`
  font-size: 0.85rem;
  margin-top: 1px;
  margin-bottom: 0px;
  color: #5c5c5c;
  font-weight: 400;
`;

export const P = styled.p`
  font-size: 0.75rem;
  color: #ada0a0;
`;
