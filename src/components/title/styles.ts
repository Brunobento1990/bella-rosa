import { styled } from "styled-components";

export const Title = styled(styled.p``)<{fontFamily: string, heigth?: string, fontSize?:string}>`
    font-family: ${(props) => props.fontFamily};
    height: ${(props) => props.heigth ?? 0};
    font-size: ${(props) => props.fontSize ?? '14px'};
    font-weight: 500;
`