import { Card } from "../../components/card";
import { Title } from "../../components/title";
import { ItemPromotion } from "../../interfaces/items-promotion";
import { IPromotion } from "../../interfaces/promotion";

interface PropsPromotion {
    promotion: IPromotion[]
}

export function SectionPromotion(props: PropsPromotion) {

    return (
        <>
            <Title text="Promoções" heigth='20px' fontSize='18px' />
            {props.promotion?.map((promo : IPromotion, index) => (
                <>
                    <p key={index}>{promo.description}</p>
                    {promo.dt_Expiration && <Title text={promo.dt_Expiration} /> }
                    {promo.itemsPromotion.map((item: ItemPromotion, i) => (
                        <Card 
                            product={item.product}
                            key={i}
                        />
                    ))

                    }

                </>
            ))
            }
        </>
    )
}