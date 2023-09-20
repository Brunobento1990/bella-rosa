import { useState } from "react";
import { useThemeApp } from "../../hooks/theme-app";
import { ContainerPage } from "../../layout/styles";
import { useModal } from "../../components/modal";

export function Account(){
    const themeApp = useThemeApp();

    const [openModal, setOpenModal] = useState<boolean>(false);
    const modal = useModal();

    return (
        <ContainerPage
            backGroudColor={themeApp.color.pink}
        >
            <p>Account</p>
            <button onClick={() => {
                modal.show()
            }}>
                click
            </button>
        </ContainerPage>
    )
}