import { styled } from "styled-components";

export const Title = styled(styled.p``)<{fontFamily: string, heigth?: string}>`
    font-family: ${(props) => props.fontFamily};
    height: ${(props) => props.heigth ?? 0};
    font-size: 14px;
    font-weight: 500;
`