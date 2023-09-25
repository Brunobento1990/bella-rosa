import { useThemeApp } from "../../hooks/theme-app";
import { ContainerPage } from "../../layout/styles";

export function Account(){
    const themeApp = useThemeApp();

    return (
        <ContainerPage
            backGroudColorTo={themeApp.color.pink}
            backGroudColorFrom={themeApp.color.gray}
        >
            <p>Account</p>
        </ContainerPage>
    )
}