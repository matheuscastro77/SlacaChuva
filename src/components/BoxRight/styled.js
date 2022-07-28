import styled from "styled-components";

export const Main = styled.div`
  width: 30.2%;
  display: flex;
  flex-direction: column;
  justify-content: end;

  @media screen and (max-width: 820px) {
    width: 94%;
    margin: 2% 3%;
  }

  @media screen and (max-height: 600px) {
    width: 94%;
    margin: 2% 3%;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;

  @media screen and (max-width: 1768px) {
    width: 95%;
  }

  @media screen and (max-width: 1680px) {
    width: 100%;
  }

  @media screen and (max-width: 1440px) {
    width: 100%;
  }

  @media screen and (max-width: 1280px) {
    width: 100%;
  }

  @media screen and (max-width: 820px) {
    justify-content: space-evenly;
  }

  @media screen and (max-height: 600px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: 414px) {
    width: 95%;
  }
`;

export const ContainerButtons = styled.div`
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 5%;

  @media screen and (max-width: 820px) {
    width: 50%;
    margin: 0 auto;
  }

  @media screen and (max-height: 600px) {
    width: 30%;
    margin: 0 auto;
  }

  @media screen and (max-width: 414px) {
    width: 50%;
    align-items: center;
  }
`;

export const Button = styled.button`
  border: 0px;
  background-color: #ed7839;
  border-radius: 5px;
  height: 3.8vh;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  padding: 9px;
  align-items: center;
  justify-content: center;

  img {
    @media screen and (max-width: 1366px) {
      width: 120%;
    }

    @media screen and (max-width: 820px) {
      width: 70%;
    }

    @media screen and (max-height: 600px) {
      width: 60%;
    }

    @media screen and (max-width: 414px) {
      width: 280%;
    }

    @media screen and (max-width: 375px) {
      width: 400%;
    }

    @media screen and (max-width: 360px) {
      width: 650%;
    }
  }

  @media screen and (max-width: 1680px) {
    height: 3.5vh;
  }

  @media screen and (max-width: 1440px) {
    width: 17%;
  }

  @media screen and (max-width: 1366px) {
    height: 3.8vh;
  }

  @media screen and (max-width: 1280px) {
    height: 3vh;
  }

  @media screen and (max-width: 820px) {
    height: 2.5vh;
  }

  @media screen and (max-height: 600px) {
    height: 3.5vh;
  }

  @media screen and (max-width: 375px) {
    height: 3.25vh;
  }
`;

export const ButtonDownload = styled.button`
  border: 0px;
  background-color: #ed7839;
  border-radius: 5px;
  height: 3.8vh;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;

  img {
    @media screen and (max-width: 414px) {
      width: 19%;
    }
  }

  @media screen and (max-width: 1680px) {
    height: 3.5vh;
  }

  @media screen and (max-width: 1440px) {
    font-size: 1rem;
    width: 58%;
  }

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
    height: 3.8vh;
    width: 60%;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.8rem;
    height: 3vh;
  }

  @media screen and (max-width: 820px) {
    font-size: 1rem;
    height: 2.5vh;
    width: 45%;
  }

  @media screen and (max-height: 600px) {
    width: 50%;
    height: 3.5vh;
  }

  @media screen and (max-width: 414px) {
    width: 60%;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 375px) {
    height: 3.25vh;
  }
`;

export const H4Tittle = styled.h4`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  color: #ed7839;
  margin: 8px 0px 8px 0px;
  text-align: right;

  @media screen and (max-width: 1768px) {
    font-size: 0.95rem;
  }

  @media screen and (max-width: 1600px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 1440px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 1366px) {
    font-size: 0.75rem;
    width: 105%;
  }

  @media screen and (max-width: 820px) {
    text-align: center;
    font-size: 0.9rem;
    width: 95%;
  }

  @media screen and (max-height: 600px) {
    text-align: center;
    font-size: 0.9rem;
    width: 95%;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.65rem;
    width: 125%;
  }
`;

export const Container = styled.main`
  border: 1px solid #ececec;
  border-radius: 4px;
  height: 72.4vh;
  width: 85%;

  @media screen and (max-width: 1768px) {
    height: 75vh;
  }

  @media screen and (max-width: 1680px) {
    height: 67.3vh;
  }

  @media screen and (max-width: 1600px) {
    height: 64vh;
  }

  @media screen and (max-width: 1440px) {
    height: 67.3vh;
  }

  @media screen and (max-width: 1366px) {
    height: 78vh;
  }

  @media screen and (max-width: 1280px) {
    height: 50vh;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    height: 35vh;
  }

  @media screen and (max-height: 800px) {
    height: 55.1vh;
  }

  @media screen and (max-height: 600px) {
    width: 100%;
  }
`;

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

  @media screen and (max-width: 1768px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 1440px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 1.3rem;
    height: 4.5vh;
  }

  @media screen and (max-width: 820px) {
    padding-left: 2%;
  }

  @media screen and (max-height: 600px) {
    padding-left: 2%;
  }

  @media screen and (max-width: 414px) {
    font-size: 1rem;
  }
`;

export const Text = styled.div`
  width: 90%;
  margin: 0 auto;
  overflow-y: auto;
  height: 62vh;
  font-family: "Quicksand", sans-serif;

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

  @media screen and (max-width: 1768px) {
    height: 68vh;
  }

  @media screen and (max-width: 1680px) {
    height: 61vh;
  }

  @media screen and (max-width: 1600px) {
    height: 57vh;
  }

  @media screen and (max-width: 1440px) {
    height: 61.6vh;
  }

  @media screen and (max-width: 1366px) {
    height: 71vh;
  }

  @media screen and (max-width: 1280px) {
    height: 44.5vh;
  }

  @media screen and (max-width: 820px) {
    height: 30vh;
  }

  @media screen and (max-height: 800px) {
    height: 50.1vh;
  }

  @media screen and (max-height: 600px) {
    width: 95%;
  }
`;

export const Span = styled.span`
  font-size: 0.75rem;
  color: #5c5c5c;
  font-weight: 700;

  @media screen and (max-width: 820px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.8rem;
  }
`;

export const P1 = styled.p`
  font-size: 0.75rem;
  color: #5c5c5c;

  @media screen and (max-width: 820px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.8rem;
  }
`;

export const H4 = styled.h4`
  font-size: 0.85rem;
  margin-bottom: 4.5%;
  color: #5c5c5c;
  font-weight: 600;

  @media screen and (max-width: 820px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.9rem;
  }
`;

export const H5 = styled.h5`
  font-size: 0.85rem;
  margin-top: 1px;
  margin-bottom: 0px;
  color: #5c5c5c;
  font-weight: 400;

  @media screen and (max-width: 820px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.9rem;
  }
`;

export const P = styled.p`
  font-size: 0.75rem;
  color: #ada0a0;

  @media screen and (max-width: 820px) {
    font-size: 0.9rem;
  }
`;
