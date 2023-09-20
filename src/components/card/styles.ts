import { styled } from "styled-components";

export const ContainerCard = styled.div`
    width: 95%;
    height: 180px;
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    margin-bottom: 20px;
`

export const img = styled.img`
    width: 38%;
    height: 90%;
    border-radius: 5px;
`

export const ContainerTitle = styled.div`
    display: flex;
    height: 120px;
    margin-left: 15px;
    width: 100%;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    margin-top: -20px;
`

export const ContainerFavorites = styled.div`
    width: 90%;
    align-items: end;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const ContainerText = styled.div`
    width: 58%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`