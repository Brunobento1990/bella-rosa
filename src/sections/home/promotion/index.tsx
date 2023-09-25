import { Card } from "../../../components/card";
import { Title } from "../../../components/title";
import { ItemPromotion } from "../../../interfaces/items-promotion";
import { IPromotion } from "../../../interfaces/promotion";
import { invertDate } from "../../../utils/invertDate";
import * as S from "./styles";

interface PropsPromotion {
  promotion: IPromotion[];
}

export function SectionPromotion(props: PropsPromotion) {
  return (
    <>
      <Title text="Promoções" heigth="20px" fontSize="18px" />
      {props.promotion?.map((promo: IPromotion, index) => (
        <>
          <S.BoxText>
            <p key={index}>{promo.description}</p>
            {promo.dt_Expiration && <Title text={`Expira em ${invertDate(promo.dt_Expiration)}`} />}
          </S.BoxText>
          {promo.itemsPromotion.map((item: ItemPromotion, i) => (
            <Card product={item.product} key={i} />
          ))}
        </>
      ))}
    </>
  );
}
