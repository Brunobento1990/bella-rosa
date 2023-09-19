import styled from "styled-components";

export const ContainerMain = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #d3d3d3;
  width: 100%;
  height: 70px;
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
  background-color: azure;
  height: 25px;
  width: 80px;
  border-radius: 18px;
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
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.backGroud};
  position: absolute;
  top: ${(props) => props.top};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  transition: 0.3s ease-out;
`;
