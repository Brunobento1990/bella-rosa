import styled from "styled-components";

export const ContainerPage = styled(styled.div``) <{ backGroudColor: string }>`
    background-color: ${(props) => props.backGroudColor};
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:10;
    margin-bottom: 75px;
`