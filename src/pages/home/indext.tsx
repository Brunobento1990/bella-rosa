import { useEffect, useState } from "react";
import { useThemeApp } from "../../hooks/theme-app";
import { useApi } from "../../hooks/use-api";
import { ContainerPage } from "../../layout/styles";
import { Slider } from "../../sections/home/slider";
import { Banner } from "../../interfaces/banner";
import { ProductHighlight } from "../../sections/home/product-highlight";
import { Product } from "../../interfaces/product";
import { IPromotion } from "../../interfaces/promotion";
import { SectionPromotion } from "../../sections/home/promotion";

export function Home() {
  const [banners, setBannres] = useState<Banner[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [promotions, setPromotions] = useState<IPromotion[]>([]);
  const themeApp = useThemeApp();
  const { get } = useApi();

  useEffect(() => {
    const init = async () => {
      const responseBanner = await get("list-banner");
      const responseProduct = await get("list-product");
      const responsePromotion = await get("list-promotion");
      if (responseBanner) {
        setBannres(responseBanner);
      }
      if (responseProduct) {
        setProducts(responseProduct);
      }
      if (responsePromotion) {
        setPromotions(responsePromotion);
      }
    };

    init();
  }, []);

  return (
    <ContainerPage
      backGroudColorTo={themeApp.color.pink}
      backGroudColorFrom={themeApp.color.gray}
    >
      <Slider banner={banners} />
      <ProductHighlight products={products} />
      <SectionPromotion promotion={promotions} />
    </ContainerPage>
  );
}
