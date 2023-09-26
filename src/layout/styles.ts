import styled from "styled-components";

export const ContainerPage = styled(styled.div``) <{ backGroudColorTo: string , backGroudColorFrom: string}>`
    background-color: ${(props) => props.backGroudColorFrom};
    height: 100%;
    margin-bottom: 9vh;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:10px;
    animation: pulse 3s alternate;

    @keyframes pulse {
    0% {
      background-color: ${(props) => props.backGroudColorTo};
    }
    100% {
      background-color: ${(props) => props.backGroudColorFrom};
    }
  }
`