import { useThemeApp } from "../../hooks/theme-app";
import { ContainerPage } from "../../layout/styles";

export function Favorities() {
    const themeApp = useThemeApp();

    return (
        <ContainerPage
            backGroudColor={themeApp.color.pink}
        >
            <p>Favoritos</p>
            {/* <Slider images={images} /> */}
        </ContainerPage>
    )
}