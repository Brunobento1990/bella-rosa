import { Card } from "../../components/card";
import { Title } from "../../components/title";
import { Product } from "../../interfaces/product";

interface PropsProductHighlight {
    products: Product[]
}

export function ProductHighlight(props: PropsProductHighlight) {
    return (
        <>
            <Title text="Produtos em destaque" heigth='20px' fontSize='18px' />
            {props.products?.map((product, index) => (
                <Card
                    product={product}
                    key={index}
                />
            ))
            }
        </>
    )
}