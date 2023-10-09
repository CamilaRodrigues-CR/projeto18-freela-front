import styled from "styled-components";

export const ProductmyCard = styled.div`
    width: 445px;
    height: 710px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 230px;
        height: 290px;
    }
    p {
        font-family: 24px;
        text-align: center;
        color: #252424;
    }
    button {
        background-color: #bdb5d1;
        color: white;
        width: 250px;
        height: 40px;
        border: thistle 1px solid;
        border-radius: 10px;
        margin-top:20px;
         &:hover {
            background-color: #5421bb;
         }
    }
`


