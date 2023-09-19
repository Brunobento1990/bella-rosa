import NavBottomNavigation from '../components/nav';
import * as S from './styles'

interface PropsLayout{
    children: React.ReactNode;
}

export function Layout(props: PropsLayout){
    return(
        <S.ContainerMain>
            {props.children}
            <NavBottomNavigation />
        </S.ContainerMain>
    )
}