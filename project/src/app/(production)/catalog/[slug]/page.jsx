import { BreadCrumbs, ProductList, HeadProductList } from "@/UI";
import { getOneCategory } from "../server";

export async function generateMetadata({ params }) {
  const meta = await getOneCategory({ params });

  return {
    title: "Фабрика мебели ЗОВ | " + meta.category_one.value,
    description:
      "Если Вас интересуют " +
      meta.category_one.value +
      " с нашей фабрики ЗОВ, то ознакомьтесь с нашими предложениями вариантов мебели на нашем сайте.",
  };
}

export default async ({ params }) => {
  const data = await getOneCategory({ params });

  const breadCrumbs = [
    { name: "Раздел", value: "Каталог" },
    {
      name: "Категория",
      value: data.category_one.value,
      count: data.category_one.product.length,
      unit: "поз.",
    },
  ];
  //   const filteredProducts = products.product.filter(
  //     (product) => product.parent.value.toLowerCase() === "кухня",
  //   );

  //   const newJsonData = {
  //     product: filteredProducts,
  //   };

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      {/* <HeadProductList head={data.category_one.value} /> */}
      <ProductList products={data.category_one.product} />
    </>
  );
};
