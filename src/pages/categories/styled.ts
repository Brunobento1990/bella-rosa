import { styled } from "styled-components";

export const ContainerPage = styled(styled.div``)<{colorParam: string}>`
    background-color: ${(props) => props.colorParam};
    height: 100%;
    width: 100%;
    margin-bottom: 75px;
`