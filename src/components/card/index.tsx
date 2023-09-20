import { useThemeApp } from '../../hooks/theme-app'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import * as S from './styles'
import { Button, SvgIcon } from '@mui/material';
import { Title } from '../title';

export function Card() {

    const calcinha = "Calcinha";
    const tamanho = "P";
    const cor = "Rosa";
    const preco = "R$ 1,22";
    const themeApp = useThemeApp();

    return (
        <S.ContainerCard>
            <S.img
                src="data:image/jpeg;base64,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"
            />
            <S.ContainerText>
                <S.ContainerFavorites>
                    <FavoriteBorderIcon sx={{ color: themeApp.color.red }} />
                </S.ContainerFavorites>
                <S.ContainerTitle>
                    <Title text={`Descrição : ${calcinha}`} />
                    <Title text={`Tamanho : ${tamanho}`}/>
                    <Title text={`Cor : ${cor}`}/>
                    <Title text={`Preço : ${preco}`}/>
                </S.ContainerTitle>
                <S.ContainerFavorites>
                    <Button
                        endIcon={(
                            <SvgIcon fontSize="small">
                                <AddShoppingCartIcon />
                            </SvgIcon>
                        )}
                        sx={{
                            color: themeApp.color.pink,
                            display: 'flex',
                            gap: '10px'
                        }}
                    >
                        Adicionar
                    </Button>
                </S.ContainerFavorites>
            </S.ContainerText>
        </S.ContainerCard>
    )
}