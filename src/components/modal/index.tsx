import CloseIcon from "@mui/icons-material/Close";
import { ReactElement, useState } from "react";
import * as S from "./styles";
import { useThemeApp } from "../../hooks/theme-app";
import { Title } from "../title";
import { Button } from "@mui/material";
import { Product } from "../../interfaces/product";
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleIcon from "@mui/icons-material/AddCircle";

let handleModal: (open: boolean, productParam: Product | null) => void;

function Modal(): ReactElement | null {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [product, setProdutct] = useState<Product>();
  const [quantity, setQuantity] = useState<number>(0);
  const themeApp = useThemeApp();

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

  if (!openModal) return null;

  return (
    <S.ContainerModal>
      <S.ContainerAnimetion>
        <S.ContainerHeader borderBotton={themeApp.color.gray}>
          <Title text="Bella rosa" heigth="20px" fontSize="18px" />
          <CloseIcon onClick={() => setOpenModal(false)} />
        </S.ContainerHeader>
        <S.ContainerMain>
          <S.img
            src={`data:image/jpeg;base64,${product?.photograph ?? ""}`}
            alt={product?.description}
          />
          <S.ContainerText>
            <Title text={product?.description ?? ""} />
            {product?.pricePromotion ? (
              <Title
                text={`De R$: ${product.price} por R$: ${product?.pricePromotion}`}
              />
            ) : (
              <Title text={`R$: ${product?.price}`} />
            )}
          </S.ContainerText>
          <S.BoxButton>
            <S.ButtonQuantity
              backGroundColor={themeApp.color.pink}
              onClick={() => handleQuantity(false)}
              style={{
                borderTopLeftRadius: "2px",
                borderBottomLeftRadius: "2px",
              }}
            >
              <RemoveIcon />
            </S.ButtonQuantity>
            <S.ButtonDiv
              borderColor={themeApp.color.pink}
              backGroundColor={themeApp.color.gray}
            >
              {quantity}
            </S.ButtonDiv>
            <S.ButtonQuantity
              backGroundColor={themeApp.color.pink}
              onClick={() => handleQuantity(true)}
              style={{
                borderTopRightRadius: "2px",
                borderBottomRightRadius: "2px",
              }}
            >
              <AddCircleIcon />
            </S.ButtonQuantity>
          </S.BoxButton>
        </S.ContainerMain>
        <S.ContainerFooter borderBotton={themeApp.color.gray}>
          <Button sx={{ color: themeApp.color.pink }}>Adicionar</Button>
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
