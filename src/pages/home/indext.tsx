import { useEffect, useState } from 'react';
import { useThemeApp } from '../../hooks/theme-app';
import { useApi } from '../../hooks/use-api';
import { ContainerPage } from '../../layout/styles'
import { Slider } from '../../sections/home/slider'
import { Banner } from '../../interfaces/banner';
import { ProductHighlight } from '../../sections/home/product-highlight';
import { Product } from '../../interfaces/product';

export function Home() {

    const [banners, setBannres] =useState<Banner[]>([]);
    const [products, setProducts] =useState<Product[]>([]);
    const themeApp = useThemeApp();
    const api = useApi();

    useEffect(() => {
        const init = async () => {
            const responseBanner = await api.get("list-banner");
            const responseProduct = await api.get("list-product");
            if(responseBanner){
                setBannres(responseBanner)
            }
            if(responseProduct){
                setProducts(responseProduct)
            }
        }

        init();
    },[])

    return (
        <ContainerPage
            backGroudColor={themeApp.color.gray}
        >
            <Slider banner={banners} />
            <ProductHighlight products={products}/>
        </ContainerPage>
    )
}