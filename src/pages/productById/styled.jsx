import styled from "styled-components"

export const ContainerProductsPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    
`
export const ContainerProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 40px;
    padding: 10px;
`
export const ProductCard= styled.div`
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
`