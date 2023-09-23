import { useThemeApp } from "../../hooks/theme-app";
import { ContainerPage } from "../../layout/styles";

export function Categories() {
    const themeApp = useThemeApp();
    return (
        <ContainerPage
            backGroudColor={themeApp.color.gray}
        >
            <p>Categories</p>
        </ContainerPage>
    )
}