import { Title } from "../../components/title";
import { IPromotion } from "../../interfaces/promotion";

interface PropsPromotion {
    promotion: IPromotion[]
}

export function SectionPromotion(props: PropsPromotion) {

    return (
        <>
            <Title text="Promoç~es" heigth='20px' fontSize='18px' />
            {props.promotion?.map((promo, index) => (
                <p key={index}>{promo.description}</p>
            ))
            }
        </>
    )
}