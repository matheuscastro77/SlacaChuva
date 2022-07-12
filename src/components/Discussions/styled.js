import styled from "styled-components";
import feedbackCard from "../../assets/feedbackCard.svg";

export const Main = styled.main`
    width: 94%;
    margin: 0 auto;
    border: 1px solid #ECECEC;
    border-radius: 4px;
    margin-bottom: 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TittleDiv = styled.div`
    height: 4.5vh;
    background-color: #FDF1EB;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ECECEC;
    width: 100%;
`

export const ContainerTopicSend = styled.div`
    height: 56vh;
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;

    h2{
        color: #ED7839;
        font-size: 1.1rem;
        font-weight: 700;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    p{
        color: #595959;
        font-weight: 400;
        font-family: 'Quicksand', sans-serif;
        font-size: 0.9rem;
    }
`

export const ButtonFind = styled.button`
    background-color: transparent;
    border: 0px;
    border-bottom: 1px solid #F48F44;
    color: #F48F44;
    margin: 2%;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: 'Quicksand', sans-serif;

    :hover{
        cursor: pointer;
    }
`

export const ButtonFeedback = styled.button`
    background: linear-gradient(180deg, #FFB354 0%, #EE7A3A 100%);
    border: 0px;
    width: 20%;
    height: 3.5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-family: 'Quicksand', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    border-radius: 5px;

    :hover{
        cursor: pointer;
    }
`

export const FeedbackCard = styled.div`
    background-image: url(${feedbackCard}) ;
    background-size: contain;
    width: 100%;
    height: 29vh;
    margin: 1% auto;
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 98%;
`

export const P = styled.p`
    color: #5C5C5C;
    font-size: 0.9rem;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
`

export const Label = styled.label`
    color: #ED7839;
    font-size: 16px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 0.3%;
    margin-top: 1%;
`

export const Input = styled.input`
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    color: #4D4D4D;
    height: 2vh;
    padding: 10px 10px 10px 20px;
    outline: 0px;
    font-size: 14px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;

    ::placeholder{
        color: #4D4D4D;
    }
`

export const TextArea = styled.textarea`
    border: 1px solid #CCCCCC;
    border-radius: 3px 3px 0px 0px;
    outline: 0px;
    color: #4D4D4D;
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    height: 10vh;
    padding: 10px 10px 10px 20px;
    text-align: start;
`

export const FooterTextArea = styled.div`
    margin-bottom: 1.5%;
    background-color: #EAF1F2;
    border: 1px solid #CCCCCC;
    border-top: 0px;
    height: 3vh;
    display: flex;
    justify-content: space-between;
    width: 88%;
    border-radius: 0px 0px 0px 3px ;

    div{
        display: flex;
        width: 8%;
        justify-content: space-around;

        button{
            background-color: transparent;
            border: 0px;

            :hover{
                cursor: pointer;
            }
        }
    }
`

export const ContainerOptionsComment = styled.div`
    display: flex;
`

export const SendButton = styled.button`
    background: linear-gradient(180deg, #FFB354 0%, #EE7A3A 100%);
    border: 0px;
    width: 12%;
    height: 3.1vh;
    font-family: 'Quicksand', sans-serif;
    color: white;
    font-weight: 700;
    font-size: 15px;
    border-radius: 0px 0px 3px 0px;

    :hover{
        cursor: pointer;
    }
`

export const H3 = styled.h3`
    margin: 0px 0px 0px 15px;
    color: #4E4E4E;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
`

export const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 22vh;

    h3{
        color: #ED7839;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.1rem;
    }

    p{
        font-family: 'Quicksand', sans-serif;
        font-size: 0.9rem;
    }
`

export const DivIcons = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
`

export const Border = styled.div`
    margin-top: 2%;
    border: 1px solid #E7E7E7;
    width: 98%;
    height: 0vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5%;
`

export const Button = styled.button`
    background: linear-gradient(180deg, #FFB354 0%, #EE7A3A 100%);
    border: 0px;
    width: 9%;
    height: 4vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 5px;

    :hover{
        cursor: pointer;
    }
`

export const CommentsDiv = styled.div`
    width: 96%;
    margin-top: 1%;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.20);
    font-family: 'Quicksand', sans-serif;
    margin-bottom: 2%;
    
    h4{
        color: #ED7839;
        font-size: 1rem;
        margin-bottom: 5px;
        font-weight: bold;
    }

    h5{  
        color: #5C5C5C;
        font-size: 0.8rem;
        margin-top: 2px;
    }

    p{
        color: #4D4D4D;
        font-size: 0.9rem;
    }
`

export const DivCenter = styled.div`
    width: 95%;
    margin: 0 auto;
`

export const DivOptions = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 15%;
    height: 4vh;
    margin-bottom: 1%;

    button{
        background-color: transparent;
        border: 0px;
        color: #757575;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 0.85rem;

        :hover{
            cursor: pointer;
        }
    }

    p{
        color: #757575;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 0.85rem;
    }
`