import { HeadProduct, ProductList } from "@/UI";
import { getProduct, getOneCategory } from "../server";

// export const metadata = {
//   title: "Фабрика ЗОВ | Кухонные гарнитуры",
//   description: "Кухонные гарнитуры от фабрики ЗОВ",
// };

// const data1 = {
//   head: {
//     h1: "Кухонные гарнитуры",
//     description:
//       "Выберите понравившуюся вам конфигурацию, материал, стиль и цвет кухонного гарнитура",
//   },
// };


export async function generateMetadata({ params }) {
	const meta = await getOneCategory({ params })

	return {
		title:
			meta.category_one.value,
		description: meta.category_one.value,
			
	}
}

export default async ({params}) => {
//   const products = await getProduct();
  const data = await getOneCategory({ params });
  console.log(data)

//   const filteredProducts = products.product.filter(
//     (product) => product.parent.value.toLowerCase() === "кухня",
//   );

//   const newJsonData = {
//     product: filteredProducts,
//   };

  return (
    <>
      <HeadProduct head={data.category_one.value} />
      <ProductList products={data.category_one.product} />
      {/* <ProductList products={newJsonData} /> */}
    </>
  );
};
