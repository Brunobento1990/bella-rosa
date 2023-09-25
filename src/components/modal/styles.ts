import { styled } from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: 1000;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(3px);
  display: flex;
  position: absolute;
  transition: 1s ease-in-out 1s;
`;

export const ContainerText = styled.div`
  width: 58%;
  height: 100%;
  display: flex;
  margin-left: 10px;
  align-items: start;
  justify-content: start;
  flex-direction: column;
`;

export const ButtonQuantity = styled(styled.button``)<{
  backGroundColor: string;
}>`
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.backGroundColor};
  border: none;
`;

export const ButtonDiv = styled(styled.button``)<{
  backGroundColor: string;
  borderColor: string;
}>`
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.backGroundColor};
  border-top: ${(props) => `solid 1px ${props.borderColor}`};
  border-bottom: ${(props) => `solid 1px ${props.borderColor}`};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const BoxButton = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const img = styled.img`
  width: 38%;
  height: 90%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerAnimetion = styled.div`
  width: 90%;
  height: 400px;
  max-height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  animation: rotation 1s alternate;

  @keyframes rotation {
    0% {
      opacity: 0;
      width: 0px;
      bottom: -50%;
    }
    100% {
      opacity: 1;
      width: 90%;
      bottom: 50%;
    }
  }
`;

export const ContainerHeader = styled(styled.div``)<{ borderBotton: string }>`
  width: 90%;
  height: 45px;
  border-bottom: ${(props) => `solid 1px ${props.borderBotton}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerFooter = styled(styled.div``)<{ borderBotton: string }>`
  width: 90%;
  height: 45px;
  border-top: ${(props) => `solid 1px ${props.borderBotton}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerMain = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerMainButton = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
