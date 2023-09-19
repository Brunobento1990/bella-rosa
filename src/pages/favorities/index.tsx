import { useThemeApp } from "../../hooks/theme-app";
import { ContainerPage } from "../../layout/styles";

export function Favorities(){
    const themeApp = useThemeApp();

    return(
        <ContainerPage
            color={themeApp.color}
        >
            {/* <Slider images={images} /> */}
        </ContainerPage>
    )
}