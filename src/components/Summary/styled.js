import styled from "styled-components";

export const Main = styled.main`
  min-height: 18vh;
  width: 94%;
  margin: 0 auto;
  border: 1px solid #ececec;
  border-radius: 4px;
  margin-bottom: 2%;

  :hover {
    cursor: pointer;
  }
`;

export const TittleDiv = styled.div`
  height: 4.5vh;
  background-color: #fdf1eb;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;
  width: 100%;
`;

export const H3 = styled.h3`
  margin: 0px 0px 0px 15px;
  color: #4e4e4e;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.3rem;
  font-weight: 600;

  @media screen and (max-width: 414px) {
        font-size: 1rem;
    }
`;

export const DivText = styled.div`
  width: 95%;
  margin: 1% auto;
`;

export const Span = styled.span`
  color: #5c5c5c;
  font-family: "Quicksand", sans-serif;
  font-size: 0.85rem;
  font-weight: 400;

  @media screen and (max-width: 820px) {
    font-size: 0.95rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.75rem;
  }
`;

export const P = styled.p`
  font-size: 0.85rem;

  @media screen and (max-width: 820px) {
    font-size: 0.95rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.75rem;
  }
`;

export const Button = styled.button`
  color: #ed7839;
  background-color: transparent;
  border: 0px;
  font-family: "Quicksand", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  margin-left: 1%;

  @media screen and (max-width: 414px) {
        font-size: 0.75rem;
    }
`;
