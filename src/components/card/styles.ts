import { styled } from "styled-components";

export const ContainerCard = styled.div`
    width: 95%;
    height: 160px;
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-bottom: 20px;
`

export const img = styled.img`
    width: 38%;
    height: 90%;
    border-radius: 5px;
`

export const ContainerTitle = styled.div`
    display: flex;
    height: 125px;
    margin-left: 15px;
    width: 100%;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    margin-top: -8px;
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