import { useThemeApp } from '../../hooks/theme-app'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import * as S from './styles'
import { Button, SvgIcon } from '@mui/material';
import { Title } from '../title';
import { Product } from '../../interfaces/product';
import { useModal } from '../modal';

interface CardProps {
    product: Product
}

export function Card(props: CardProps) {

    const themeApp = useThemeApp();
    const modal = useModal();

    return (
        <S.ContainerCard>
            <S.img
                src={`data:image/jpeg;base64,${props.product?.photograph ?? ''}`}
                alt={props.product.description}
            />
            <S.ContainerText>
                <S.ContainerFavorites>
                    <FavoriteBorderIcon sx={{ color: themeApp.color.red }} />
                </S.ContainerFavorites>
                <S.ContainerTitle>
                    <Title text={props.product.description} />
                    {props.product?.size &&
                        <Title text={props.product?.size} />
                    }
                    {props.product?.color &&
                        <Title text={props.product?.color} />
                    }
                    {props.product?.pricePromotion ?
                        <Title text={`De R$: ${props.product.price} por R$: ${props.product?.pricePromotion}`} /> :
                        <Title text={`R$: ${props.product.price}`} />
                    }
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
                            gap: '10px',
                            fontSize:'12px'
                        }}
                        onClick={() => modal.show(props.product)}
                    >
                        Adicionar
                    </Button>
                </S.ContainerFavorites>
            </S.ContainerText>
        </S.ContainerCard>
    )
}