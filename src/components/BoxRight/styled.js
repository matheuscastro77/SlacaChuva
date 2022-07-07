import styled from "styled-components";

export const Main = styled.main`
  border: 2px solid #ececec;
  height: 69.1vh;
  width: 16%;
  margin-top: 8%;
  margin-right: 5%;
`;

export const H1 = styled.h1`
  background-color: #fdf1eb;
  color: #4e4e4e;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 0px;
  height: 6vh;
  font-weight: 500;
  padding-left: 10%;
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
  overflow-y: auto;
  height: 60vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

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
`;

export const Span = styled.span`
    font-size: 0.75rem;
    color: #5C5C5C;
    font-weight: 700;
`;

export const P1 = styled.p`
    font-size: 0.75rem;
    color: #5C5C5C;
`;

export const H4 = styled.h4`
    font-size: 0.85rem;
    margin-bottom: 4.5%;
    color: #5C5C5C;
    font-weight: 600;
`;

export const H5 = styled.h5`
    font-size: 0.85rem;
    margin-top: 1px;
    margin-bottom: 0px;
    color: #5C5C5C;
    font-weight: 400;
`;

export const P = styled.p`
    font-size: 0.75rem;
    color: #ADA0A0;
`;