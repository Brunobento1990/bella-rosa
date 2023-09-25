import { styled } from "styled-components";

export const Title = styled(styled.p``)<{
  fontFamily: string;
  heigth?: string;
  fontSize?: string;
  textDecoration?: string;
}>`
  font-family: ${(props) => props.fontFamily};
  height: ${(props) => props.heigth ?? 0};
  font-size: ${(props) => props.fontSize ?? "14px"};
  text-decoration: ${(props) => props.textDecoration ?? "none"};
  font-weight: 500;
`;
