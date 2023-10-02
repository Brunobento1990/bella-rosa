import { useParams } from "react-router-dom";
import { ContainerPage } from "../../../layout/styles";
import { useApi } from "../../../hooks/use-api";
import { useEffect, useState } from "react";
import { Category } from "../../../interfaces/category";
import { Title } from "../../../components/title";
import { Card } from "../../../components/card";
import * as S from './styles'
import { DropDown } from "../../../components/dropdown";

const options = [
    {
        id: 1,
        option: 'Maior valor'
    },
    {
        id: 2,
        option: 'Menor valor'
    },
    {
        id: 3,
        option: 'Cor'
    },
    {
        id: 4,
        option: 'Tamanho'
    }
]

export function CategorieView() {

    const [category, setCategory] = useState<Category | undefined>()
    const [orderBy, setOrderBy] = useState<string>('');
    const api = useApi();
    const { id } = useParams();
    
    useEffect(() => {
        init();
    }, [orderBy])

    async function init() {
        const response = await api.get(`get-category?id=${id}&orderBy=${orderBy}`)
        setCategory(response)
    }

    function handleOrderBy(value: string){
        setOrderBy(value)
    }

    return (
        <ContainerPage>
            <S.ContainerOrderBy>
                <Title
                    text={category?.description ?? ''}
                    fontSize="20px"
                    heigth="20px"
                />
                <DropDown 
                    options={options}
                    handleOrderBy={(value) => handleOrderBy(value)}
                />
            </S.ContainerOrderBy>
            {category?.products?.map((product, index) => (
                <Card
                    product={product}
                    key={index}
                />
            ))}

        </ContainerPage>
    )
}