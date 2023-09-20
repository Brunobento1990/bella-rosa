import CloseIcon from '@mui/icons-material/Close';
import { ReactElement, useState } from "react";
import * as S from './styles'
import { useThemeApp } from '../../hooks/theme-app';

let handleModal : (open: boolean) => void;

function Modal() : ReactElement | null{

    const[openModal, setOpenModal] = useState<boolean>(false);
    const themeApp = useThemeApp();

    handleModal = function(open: boolean){
        setOpenModal(open)
    }

    if(!openModal) return null;

    return (
        <S.ContainerModal>
            <S.ContainerMain>
                <S.ContainerHeader
                    borderBotton={themeApp.color.gray}
                >
                </S.ContainerHeader>
                <p>teste</p>
            </S.ContainerMain>
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