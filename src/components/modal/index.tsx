import CloseIcon from "@mui/icons-material/Close";
import { ReactElement, useState } from "react";
import * as S from "./styles";
import { useThemeApp } from "../../hooks/theme-app";
import { Title } from "../title";
import { Button, SvgIcon } from "@mui/material";
import { Product } from "../../interfaces/product";
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useCart } from "../../hooks/use-cart";

let handleModal: (open: boolean, productParam: Product | null) => void;

function Modal(): ReactElement | null {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [product, setProdutct] = useState<Product>();
  const [quantity, setQuantity] = useState<number>(0);
  const themeApp = useThemeApp();
  const cart = useCart();

  function handleQuantity(sum: boolean) {
    if (sum) {
      setQuantity(quantity + 1);
      return;
    }

    if (quantity > 0) {
      setQuantity(quantity - 1);
      return;
    }
  }

  handleModal = function (open: boolean, productParam: Product | null) {
    if (productParam) {
      setProdutct(productParam);
    }
    setOpenModal(open);
  };

  function handleAddCart() {
    cart.setCart(product?.id ?? '', quantity)
    setQuantity(0);
    setOpenModal(false)
  }

  if (!openModal) return null;

  return (
    <S.ContainerModal>
      <S.ContainerAnimetion>
        <S.ContainerHeader borderBotton={themeApp.color.gray}>
          <Title text={product?.description ?? ''} heigth="20px" fontSize="16px" />
          <CloseIcon onClick={() => {
            setQuantity(0)
            setOpenModal(false)
          }} />
        </S.ContainerHeader>
        <S.ContainerMain>
          <S.img
            src={`data:image/jpeg;base64,${product?.photograph ?? ""}`}
            alt={product?.description}
          />
          <S.Container>
            <S.ContainerText>
              {product?.pricePromotion ? (
                <>
                  <Title
                    text={`De R$: ${product.price}`}
                    textDecoration="line-through"
                  />
                  <Title text={`por R$: ${product?.pricePromotion}`} />
                </>
              ) : (
                <Title text={`R$: ${product?.price}`} />
              )}
            </S.ContainerText>
            <S.ContainerMainButton>
              <S.ButtonQuantity
                backGroundColor={themeApp.color.pink}
                onClick={() => handleQuantity(false)}
                style={{
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                <SvgIcon fontSize="small">
                  <RemoveIcon sx={{ color:`${themeApp.color.gray}` }}/>
                </SvgIcon>
              </S.ButtonQuantity>
              <S.ButtonDiv
                borderColor={themeApp.color.pink}
              >
                {quantity}
              </S.ButtonDiv>
              <S.ButtonQuantity
                backGroundColor={themeApp.color.pink}
                onClick={() => handleQuantity(true)}
                style={{
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              >
                <SvgIcon fontSize="small">
                  <AddCircleIcon sx={{ color:`${themeApp.color.gray}` }} />
                </SvgIcon>
              </S.ButtonQuantity>
            </S.ContainerMainButton>
          </S.Container>
        </S.ContainerMain>
        <S.ContainerFooter borderBotton={themeApp.color.gray}>
          <Button 
            sx={{ color: themeApp.color.pink, fontSize: "10px", width: '75px' }}
            onClick={handleAddCart}
          >
            Adicionar
          </Button>
        </S.ContainerFooter>
      </S.ContainerAnimetion>
    </S.ContainerModal>
  );
}

export function useModal() {
  return {
    component: Modal,
    show: (product: Product) => handleModal(true, product),
    hide: () => handleModal(false, null),
  };
}
