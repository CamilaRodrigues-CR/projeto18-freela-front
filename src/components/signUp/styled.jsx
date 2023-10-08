import styled from "styled-components";


export const ContainerSignupPage = styled.div`
    background-color: whitesmoke;
    height: 100%;

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
     
`
