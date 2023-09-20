import { useState } from "react";
import * as S from './styles'

let handleModal : (open: boolean) => void;

function Modal() : React.ReactNode{

    const[openModal, setOpenModal] = useState<boolean>(false);

    handleModal = function(open: boolean){
        setOpenModal(open)
    }

    if(!openModal) return <></>;

    return (
        <S.ContainerModal>
            <p>teste</p>
        </S.ContainerModal>
    )
}

export function useModal(){
    return{
        component: Modal,
        show: () => handleModal(true),
        hide: () => handleModal(false),
    }
}