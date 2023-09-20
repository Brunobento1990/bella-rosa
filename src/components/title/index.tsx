import { useThemeApp } from '../../hooks/theme-app';
import * as S from './styles'

interface PropsTitle{
    text: string,
    heigth?:string,
}

export function Title(props: PropsTitle){

    const themeApp = useThemeApp();

    return(
        <S.Title
            fontFamily={themeApp.fontFamily.fontMain}
            heigth={props.heigth}
        >
            {props.text}
        </S.Title>
    )
}