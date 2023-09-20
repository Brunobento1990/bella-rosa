import { useThemeApp } from "../../hooks/theme-app";
import { ContainerPage } from "../../layout/styles";

export function Account(){
    const themeApp = useThemeApp();
    return (
        <ContainerPage
            backGroudColor={themeApp.color.pink}
        >
            <p>Account</p>
        </ContainerPage>
    )
}