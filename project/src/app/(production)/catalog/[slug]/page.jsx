import { HeadProduct, ProductList } from "@/UI";
import { getProduct, getOneCategory } from "../server";

export const metadata = {
  title: "Фабрика ЗОВ | Кухонные гарнитуры",
  description: "Кухонные гарнитуры от фабрики ЗОВ",
};

const data = {
  head: {
    h1: "Кухонные гарнитуры",
    description:
      "Выберите понравившуюся вам конфигурацию, материал, стиль и цвет кухонного гарнитура",
  },
};

export default async ({params}) => {
//   const products = await getProduct();
  const oneCategory = await getOneCategory({ params });
//   console.log(oneCategory)

//   const filteredProducts = products.product.filter(
//     (product) => product.parent.value.toLowerCase() === "кухня",
//   );

//   const newJsonData = {
//     product: filteredProducts,
//   };

  return (
    <>
      <HeadProduct head={data.head} />
      <ProductList products={oneCategory} />
      {/* <ProductList products={newJsonData} /> */}
    </>
  );
};
