import * as S from './styles'
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useThemeApp } from '../../hooks/theme-app';
import { Stack, SvgIcon, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/use-cart';

export let updateCart: (quantidade: number) => void;

export function Header() {

  const themeApp = useThemeApp();
  const navigate = useNavigate();
  const cart = useCart();

  const [quantidadeCart, setQuantidadeCart] = useState<number>(0);

  updateCart = (quantidade: number) => {
    if (quantidade && quantidade > 0) {
      setQuantidadeCart(quantidade)
    }
  }

  useEffect(() => {
    const quantityInit = cart.getLengthCart();

    if(quantityInit > 0) setQuantidadeCart(quantidadeCart);
  },[])

  return (
    <S.ContainerMain>
      <SearchIcon sx={{ color: `${themeApp.color.gray}` }} />
      <Stack
        alignItems="center"
        direction="row"
        spacing={2}
      >
        <Tooltip title="Carrinho">
          <IconButton
            onClick={() => navigate("/cart")}
          >
            <Badge
              badgeContent={quantidadeCart}
              color="secondary"
            >
              <SvgIcon
                fontSize="small"
              >
                <ShoppingCartIcon sx={{ color: `${themeApp.color.gray}` }} />
              </SvgIcon>
            </Badge>
          </IconButton>
        </Tooltip>
      </Stack>
    </S.ContainerMain>
  )
}