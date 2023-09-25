import { useThemeApp } from "../../hooks/theme-app";
import { ContainerPage } from "../../layout/styles";

export function Categories() {
    const themeApp = useThemeApp();
    return (
        <ContainerPage
            backGroudColorTo={themeApp.color.pink}
            backGroudColorFrom={themeApp.color.gray}
        >
            <p>Categories</p>
        </ContainerPage>
    )
}