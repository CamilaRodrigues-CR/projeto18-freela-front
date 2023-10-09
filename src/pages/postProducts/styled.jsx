import styled from "styled-components";

export const Container = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;

`

export const ContainerNewProduct = styled.div `
    background-color: whitesmoke;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

     form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px;
        
     }
     input {
        width: 350px;
        height: 50px;
        margin-top: 20px;
        border-radius: 5px;
        border: thistle 1px solid;

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

     div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        color: #020d46;
        width: 250px;
        height: 20px;
        margin-top:20px;
      
     }
     select {
        width: 250px;
        height: 50px;
        margin-top: 20px;
        border-radius: 5px;
        border: thistle 1px solid;
     }

`