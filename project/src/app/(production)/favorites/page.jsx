"use client";
import { useState, useEffect } from "react";

import { BreadCrumbs, ProductList, HeadProductList } from "@/UI";

import { useProductStore } from "@/store/product";
const { favoritesProducts } = useProductStore;

const breadCrumbs = [
  { name: "Раздел", value: "Каталог" },
  { name: "Категория", value: "Избранное", count: null, unit: "поз." },
];

// export const metadata = {
//     title: "Фабрика мебели ЗОВ | Корпусная мебель на заказ по индивидуальным размерам",
//     description:
//         "Кухонные гарнитуры и шкафы купе от белорусской фабрики ЗОВ. Изготовление корпусной мебели на заказ из материалов высокого качества.",
// };

export default () => {
  const { currentFavoritesProducts } = favoritesProducts();

  // Решаем ошибку гидратации
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    domLoaded && (
      <>
        <BreadCrumbs breadCrumbs={breadCrumbs} />
        <ProductList products={currentFavoritesProducts} />
      </>
    )
  );
};
