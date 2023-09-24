import styled from "styled-components";

export const ContainerPage = styled(styled.div``) <{ backGroudColor: string }>`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:10;
    margin-bottom: 58px;
    animation: pulse 5s alternate;

    @keyframes pulse {
    0% {
      background-color: #001F3F;
    }
    100% {
      background-color: #FF4136;
    }
  }
`