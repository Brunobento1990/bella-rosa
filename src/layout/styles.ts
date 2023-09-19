import styled from "styled-components";

export const ContainerMain = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
`

export const ContainerPage = styled(styled.div``)<{color: string}>`
    background-color: ${(props) => props.color};
    height: 100%;
    width: 100%;
    margin-bottom: 75px;
`