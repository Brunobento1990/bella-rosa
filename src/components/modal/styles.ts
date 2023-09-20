import { motion } from "framer-motion";
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
`

export const ContainerAnimetion = styled(motion.div)`
    width: 90%;
    height: 200px;
    max-height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`

export const ContainerHeader = styled(styled.div``) <{ borderBotton: string }>`
    width: 90%;
    height: 45px;
    border-bottom: ${(props) => `solid 1px ${props.borderBotton}`};
    display:flex;
    align-items: center;
    justify-content:space-between;
`

export const ContainerFooter = styled(styled.div``) <{ borderBotton: string }>`
    width: 90%;
    height: 45px;
    border-top: ${(props) => `solid 1px ${props.borderBotton}`};
    display:flex;
    align-items: center;
    justify-content:center;
`

export const ContainerMain = styled.div`
    width: 90%;
    height: 110px;
    display:flex;
    align-items: center;
    justify-content:center;
`