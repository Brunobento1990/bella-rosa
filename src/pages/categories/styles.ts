import { styled } from "styled-components";

export const ContainerTitle = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerCategories = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    flex-direction: column;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    min-height: 100px;
`

export const ContainerCategoriesItem = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    border-bottom: solid 1px #eeebeb;
    min-height: 50px;
`