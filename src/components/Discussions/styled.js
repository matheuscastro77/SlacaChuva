import styled from "styled-components";

export const Main = styled.main`
    height: 78vh;
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
    width: 98%;
    
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
