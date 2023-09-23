import { useThemeApp } from "../../hooks/theme-app";
import { ContainerPage } from "../../layout/styles";

export function Favorities() {
    const themeApp = useThemeApp();

    return (
        <ContainerPage
            backGroudColor={themeApp.color.gray}
        >
            <p>Favoritos</p>
        </ContainerPage>
    )
}