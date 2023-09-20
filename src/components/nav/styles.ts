import styled from "styled-components";

export const ContainerMain = styled(styled.div``)<{backGroundColor: string}> `
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.backGroundColor};
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.ul`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -25px;
`;

export const NavLi = styled.li`
  height: 100%;
  width: 100%;
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
export const Text = styled(styled.span``)<{ display: string; color: string }>`
  display: ${(props) => props.display};
  color: ${(props) => props.color};
  margin-top: 13px;
  text-align: center;
`;

export const ContainerIcon = styled(styled.div``)<{
  backGroud: string;
  top: string;
  borderRadius: string;
  border: string;
}>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.backGroud};
  position: absolute;
  top: ${(props) => props.top};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  transition: 1s ease-in-out 1s;
`;
