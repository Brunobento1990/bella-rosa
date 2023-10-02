import { useState, useEffect } from "react";
import { Title } from "../../components/title";
import { useThemeApp } from "../../hooks/theme-app";
import { useApi } from "../../hooks/use-api";
import { ContainerPage } from "../../layout/styles";
import * as S from './styles'
import { Category } from "../../interfaces/category";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SvgIcon from "@mui/icons-material/NavigateNext";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Categories() {

    const [categories, setCategories] = useState<Category[]>([]);
    const navigate = useNavigate();
    const themeApp = useThemeApp();
    const api = useApi();

    useEffect(() => {
        const init = async () => {
            const response = await api.get('list-categories')
            setCategories(response)
        }
        init();
    }, [])

    return (
        <ContainerPage
            backGroudColorTo={themeApp.color.pink}
            backGroudColorFrom={themeApp.color.gray}
        >
            <S.ContainerTitle>
                <Title text="Categorias" heigth="25px" fontSize="20px" />
            </S.ContainerTitle>
            <S.ContainerCategories>
                {categories.map((category, index) => (
                    <S.ContainerCategoriesItem key={index}>
                        <Title text={category.description} fontSize="16px" />
                        <IconButton edge="end" onClick={() => navigate(`/categories/view/${category.id}`)} >
                            <SvgIcon>
                                <NavigateNextIcon />
                            </SvgIcon>
                        </IconButton>
                    </S.ContainerCategoriesItem>
                ))
                }
            </S.ContainerCategories>
        </ContainerPage>
    )
}