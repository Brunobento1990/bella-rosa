import { useThemeApp } from '../../hooks/theme-app';
import { ContainerPage } from '../../layout/styles'
import { Slider } from '../../sections/home/slider'
const images = [
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-Bgmt9Nj6yQPkcf8HrUroL1AKyd2t9SKSs92Sk94JBvjtw5ECYFjdBqhzh8a5RzB1yJHJLFGguLuus7AZtgAWaBQXpFDQNEBsa5ozVJuY3MGnJg_hoaU9LA&usqp=CAE',
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRYdNv-e-KhPqzjkS5s-WyRUC4gvdzNdPCOeJumTPTJmtP5qmvtSkMviVQBfbOFSaitR-EV2f3mpSuWqMAWd-pf8Xbzf0O0sPrEn-0xaax3&usqp=CAE'
]

export function Home(){

    const themeApp = useThemeApp();

    return(
        <ContainerPage
            color={themeApp.color}
        >
            {/* <Slider images={images} /> */}
        </ContainerPage>
    )
}