import CloseIcon from '@mui/icons-material/Close';
import { ReactElement, useState } from "react";
import * as S from './styles'
import { useThemeApp } from '../../hooks/theme-app';
import { Title } from '../title';
import { Button } from '@mui/material';

let handleModal: (open: boolean) => void;

function Modal(): ReactElement | null {

    const [openModal, setOpenModal] = useState<boolean>(false);
    const themeApp = useThemeApp();

    handleModal = function (open: boolean) {
        setOpenModal(open)
    }

    if (!openModal) return null;

    return (
        <S.ContainerModal>
            <S.ContainerAnimetion
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                exit={{ rotate: 0 }}
            >
                <S.ContainerHeader
                    borderBotton={themeApp.color.gray}
                >
                    <Title
                        text='Bella rosa'
                        heigth='20px'
                        fontSize='18px'
                    />
                    <CloseIcon onClick={() => setOpenModal(false)} />
                </S.ContainerHeader>
                <S.ContainerMain>

                </S.ContainerMain>
                <S.ContainerFooter
                    borderBotton={themeApp.color.gray}
                >
                    <Button
                        sx={{ color: themeApp.color.pink, }}
                    >
                        Adicionar
                    </Button>
                </S.ContainerFooter>
            </S.ContainerAnimetion>
        </S.ContainerModal>
    )
}

export function useModal() {
    return {
        component: Modal,
        show: () => handleModal(true),
        hide: () => handleModal(false),
    }
}