import styled from "styled-components";
import feedbackCard from "../../assets/feedbackCard.svg";

export const Main = styled.main`
  width: 94%;
  margin: 0 auto;
  border: 1px solid #ececec;
  border-radius: 4px;
  margin-bottom: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 820px) {
    margin-top: 4%;
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

export const ContainerTopicSend = styled.div`
  height: 56vh;
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;

  h2 {
    color: #ed7839;
    font-size: 1.1rem;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    @media screen and (max-width: 820px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 414px) {
      font-size: 0.85rem;
    }

    @media screen and (max-width: 360px) {
      font-size: 0.75rem;
    }
  }

  p {
    color: #595959;
    font-weight: 400;
    font-family: "Quicksand", sans-serif;
    font-size: 0.9rem;

    @media screen and (max-width: 820px) {
      font-size: 0.8rem;
      width: 75%;
      text-align: center;
    }

    @media screen and (max-width: 414px) {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 1768px) {
    height: 58vh;
  }

  @media screen and (max-width: 1680px) {
    height: 53vh;
  }

  @media screen and (max-width: 1600px) {
    height: 51vh;
  }

  @media screen and (max-width: 1440px) {
    height: 55vh;
  }

  @media screen and (max-width: 1366px) {
    height: 65vh;
  }

  @media screen and (max-width: 1280px) {
    height: 51vh;
  }

  @media screen and (max-width: 820px) {
    height: 25vh;
  }

  @media screen and (max-width: 768px) {
    height: 30vh;
  }

  @media screen and (max-height: 600px) {
    height: 65.2vh;
  }

  @media screen and (max-width: 375px) {
    height: 32vh;
  }
`;

export const ButtonFind = styled.button`
  background-color: transparent;
  border: 0px;
  border-bottom: 1px solid #f48f44;
  color: #f48f44;
  margin: 2%;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "Quicksand", sans-serif;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 820px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.7rem;
  }
`;

export const ButtonFeedback = styled.button`
  background: linear-gradient(180deg, #ffb354 0%, #ee7a3a 100%);
  border: 0px;
  width: 20%;
  height: 3.5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-family: "Quicksand", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 820px) {
    width: 22%;
    height: 2.5vh;
    font-size: 0.85rem;
  }

  @media screen and (max-width: 768px) {
    width: 25%;
  }

  @media screen and (max-height: 600px) {
    width: 22%;
    font-size: 1rem;
    height: 4vh;
  }

  @media screen and (max-width: 414px) {
    width: 40%;
    font-size: 0.7rem;
    height: 2.5vh;
  }

  @media screen and (max-width: 375px) {
    width: 45%;
    height: 2.8vh;
  }

  
`;

export const FeedbackCard = styled.div`
  background-image: url(${feedbackCard});
  background-size: contain;
  width: 100%;
  height: 25.7vh;
  margin: 1% auto;

  @media screen and (max-width: 1768px) {
    height: 26.1vh;
  }

  @media screen and (max-width: 1680px) {
    height: 23.4vh;
  }

  @media screen and (max-width: 1600px) {
    height: 22.5vh;
  }

  @media screen and (max-width: 1440px) {
    height: 23.5vh;
  }

  @media screen and (max-width: 1366px) {
    height: 27vh;
  }

  @media screen and (max-width: 1280px) {
    height: 18vh;
  }

  @media screen and (max-width: 820px) {
    height: 7.8vh;
  }

  @media screen and (max-width: 768px) {
    height: 8.5vh;
  }

  @media screen and (max-height: 800px) {
    height: 19.8vh;
  }

  @media screen and (max-height: 600px) {
    height: 21vh;
  }

  @media screen and (max-width: 414px) {
    height: 5vh;
  }

  @media screen and (max-width: 375px) {
    height: 6vh;
  }

  @media screen and (max-width: 360px) {
    height: 5.2vh;
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
`;

export const P = styled.p`
  color: #5c5c5c;
  font-size: 0.9rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  margin-left: 2%;

  @media screen and (max-width: 414px) {
    font-size: 0.75rem;
  }
`;

export const Label = styled.label`
  color: #ed7839;
  font-size: 1rem;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 0.3%;
  margin-top: 1%;

  @media screen and (max-width: 414px) {
    font-size: 0.8rem;
  }
`;

export const Input = styled.input`
  border: 1px solid #cccccc;
  border-radius: 3px;
  color: #4d4d4d;
  height: 2vh;
  padding: 10px 10px 10px 20px;
  outline: 0px;
  font-size: 0.9rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;

  ::placeholder {
    color: #4d4d4d;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.8rem;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid #cccccc;
  border-radius: 3px 3px 0px 0px;
  outline: 0px;
  color: #4d4d4d;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  height: 10vh;
  padding: 10px 10px 10px 20px;
  text-align: start;
`;

export const FooterTextArea = styled.div`
  margin-bottom: 1.5%;
  background-color: #eaf1f2;
  border: 1px solid #cccccc;
  border-top: 0px;
  height: 3vh;
  display: flex;
  justify-content: space-between;
  width: 88%;
  border-radius: 0px 0px 0px 3px;

  div {
    display: flex;
    width: 8%;
    justify-content: space-around;

    @media screen and (max-width: 820px) {
      width: 15%;
    }

    @media screen and (max-width: 820px) {
      width: 25%;
    }

    button {
      background-color: transparent;
      border: 0px;

      :hover {
        cursor: pointer;
      }
    }
  }
`;

export const ContainerOptionsComment = styled.div`
  display: flex;
`;

export const SendButton = styled.button`
  background: linear-gradient(180deg, #ffb354 0%, #ee7a3a 100%);
  border: 0px;
  width: 12%;
  height: 3.1vh;
  font-family: "Quicksand", sans-serif;
  color: white;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 0px 0px 3px 0px;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 820px) {
      width: 25%;
      font-size: 0.85rem;
    }
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

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  min-height: 22vh;

  @media screen and (max-width: 820px) {
    width: 75%;
  }

  h3 {
    color: #ed7839;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.1rem;

    @media screen and (max-width: 414px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-family: "Quicksand", sans-serif;
    font-size: 0.9rem;

    @media screen and (max-width: 414px) {
      font-size: 0.75rem;
    }
  }
`;

export const DivIcons = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  img {
    width: 22%;
  }
`;

export const Border = styled.div`
  margin-top: 2%;
  border: 1px solid #e7e7e7;
  width: 98%;
  height: 0vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5%;
`;

export const Button = styled.button`
  background: linear-gradient(180deg, #ffb354 0%, #ee7a3a 100%);
  border: 0px;
  width: 9%;
  height: 4vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-family: "Quicksand", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }

  img {
    width: 15%;
  }

  @media screen and (max-width: 1600px) {
    width: 11%;
  }

  @media screen and (max-width: 1440px) {
    width: 12%;
  }

  @media screen and (max-width: 1280px) {
    width: 13%;
  }

  @media screen and (max-width: 820px) {
    width: 22%;
    font-size: 1rem;
    height: 3vh;
  }

  @media screen and (max-height: 600px) {
    width: 18%;
    font-size: 1rem;
    height: 4vh;
  }

  @media screen and (max-width: 414px) {
    width: 34%;
    font-size: 0.7rem;
    height: 2.5vh;
  }
`;

export const CommentsDiv = styled.div`
  width: 96%;
  margin-top: 1%;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  font-family: "Quicksand", sans-serif;
  margin-bottom: 2%;

  h4 {
    color: #ed7839;
    font-size: 1rem;
    margin-bottom: 5px;
    font-weight: bold;

    @media screen and (max-width: 414px) {
      font-size: 0.8rem;
    }
  }

  h5 {
    color: #5c5c5c;
    font-size: 0.8rem;
    margin-top: 2px;

    @media screen and (max-width: 414px) {
      font-size: 0.7rem;
    }
  }

  p {
    color: #4d4d4d;
    font-size: 0.9rem;

    @media screen and (max-width: 414px) {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 414px) {
    margin-top: 5%;
  }
`;

export const DivCenter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

export const DivOptions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15%;
  height: 4vh;
  margin-bottom: 1%;

  button {
    background-color: transparent;
    border: 0px;
    color: #757575;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 0.85rem;

    :hover {
      cursor: pointer;
    }

    img{
      @media screen and (max-width: 414px) {
        width: 80%;
      }
    }

    @media screen and (max-width: 414px) {
      font-size: 0.7rem;
    }
  }

  p {
    color: #757575;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 0.85rem;

    @media screen and (max-width: 414px) {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 1440px) {
    width: 17%;
  }

  @media screen and (max-width: 1280px) {
    width: 18%;
  }

  @media screen and (max-width: 820px) {
    width: 32%;
  }

  @media screen and (max-height: 600px) {
    width: 23%;
  }

  @media screen and (max-width: 414px) {
    width: 56%;
  }

  @media screen and (max-width: 375px) {
    width: 66%;
  }
`;

export const ContainerComment = styled.div`
  background-color: #f8f8f8;
  width: 96%;
  margin-top: -2%;
  margin-bottom: -1%;
  font-family: "Quicksand", sans-serif;
  border: 1px solid #e7e7e7;

  h4 {
    margin-left: 30px;
    font-size: 0.8rem;
    font-weight: 700;
    color: #5c5c5c;

    @media screen and (max-width: 414px) {
      font-size: 0.7rem;
    }
  }

  p {
    margin-left: 30px;
    font-size: 0.9rem;
    font-weight: 400;
    color: #4d4d4d;

    @media screen and (max-width: 414px) {
      font-size: 0.8rem;
    }
  }
`;

export const ContainerComment2 = styled.div`
  background-color: #f8f8f8;
  width: 96%;
  margin-bottom: 1%;
  font-family: "Quicksand", sans-serif;
  border: 1px solid #e7e7e7;

  h4 {
    margin-left: 30px;
    font-size: 0.8rem;
    font-weight: 700;
    color: #5c5c5c;
  }

  p {
    margin-left: 30px;
    font-size: 0.9rem;
    font-weight: 400;
    color: #4d4d4d;
  }
`;
