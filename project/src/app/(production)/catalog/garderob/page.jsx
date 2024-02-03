import { HeadProduct, ProductList } from "@/UI";
// import { getProduct } from "./server";

export const metadata = {
  title: "Фабрика ЗОВ | Гардеробы",
  description: "Гардеробы от фабрики ЗОВ",
};

const data = {
  head: {
    h1: "Шкафы и гардеробы",
    description:
      "Предлагаем для компактных и просторных помещений различные варианты шкафов и гардеробов",
  },
  products: [
    {
      project: "ШКАФ 1. BASIC LINE",
      description:
        "Гардеробный шкаф Basic Line – идеальное решение для организации хранения в вашей комнате. Этот стильный шкаф обладает простым и функциональным дизайном, позволяющим максимально использовать доступное пространство. Удобные полки и штанга позволят хранить вашу одежду и аксессуары в порядке.",
      img: "https://zovofficial.com/image/catalog/products/garderobnye-shkafy-i-sistemy/garderobnyj-sh-kaf-1-basic-line-ru/garderobnyj-sh-kaf-1-basic-line-ru_49206.jpeg",
    },
    {
      project: "ШКАФ 7. SMART LINE",
      description:
        "Стильный шкаф с просторным отделением для верхней одежды и удобными полками. Минималистический дизайн в сочетании с качественными материалами создают элегантную атмосферу. Позволит вам организовать пространство и подчеркнуть ваш современный стиль.",
      img: "https://zovofficial.com/image/catalog/products/garderobnye-shkafy-i-sistemy/garderobnyj-sh-kaf-liniya-smart-wl-elite-wl-ru/garderobnyj-sh-kaf-liniya-smart-wl-elite-wl-ru_49123.jpeg",
    },
    {
      project: "ШКАФ 3. BASIC LINE",
      description:
        "Модный гардероб в современном стиле с высокой функциональностью. Просторное отделение под верхнюю одежду позволяет сохранить ее в идеальном состоянии. Удобные полки дополняют пространство для хранения аксессуаров и других вещей.",
      img: "https://zovofficial.com/image/catalog/products/garderobnye-shkafy-i-sistemy/sh-kaf-liniya-basic-ru/sh-kaf-liniya-basic-ru_49110.jpeg",
    },
    {
      project: "ШКАФ 4. BASIC / SMART LINE",
      description:
        "Стильный шкаф в современном дизайне с практическим разделением для верхней одежды и полками. Идеальное решение для эстетического и функционального хранения. Создайте организованное и привлекательное пространство для вашей коллекции одежды.",
      img: "https://zovofficial.com/image/catalog/products/garderobnye-shkafy-i-sistemy/garderobnyj-sh-kaf-1-basic-smart-line-ru/garderobnyj-sh-kaf-1-basic-smart-line-ru_49189.jpeg",
    },
    {
      project: "ШКАФ 18. BASIC / SMART LINE",
      description:
        "Шкаф в современном стиле с отличной функциональностью. Просторное отделение под верхнюю одежду и удобные полки позволят организовать хранение с легкостью. Чистые линии и минималистический дизайн придают шкафу элегантный вид.",
      img: "https://zovofficial.com/image/catalog/products/garderobnye-shkafy-i-sistemy/2023/garderob-18/1.jpg",
    },
    {
      project: "ШКАФ 17. BASIC / SMART LINE",
      description:
        "Элегантный гардероб в современном стиле с интеллектуальной организацией пространства. Удобные полки и отделение для верхней одежды обеспечат легкую доступность и аккуратность хранения. Идеальное решение для современного интерьера.",
      img: "https://zovofficial.com/image/catalog/products/garderobnye-shkafy-i-sistemy/2023/garderob-17/cam-2.jpg",
    },
  ],
};

export default  () => {
  // const products = await getProduct();

  // const filteredProducts = products.product.filter(
  //   (product) => product.parent.value.toLowerCase() === "гардероб",
  // );

  // const newJsonData = {
  //   product: filteredProducts,
  // };

  return (
    <>
      <HeadProduct head={data.head} />
      {/* <ProductList products={newJsonData} /> */}
    </>
  );
};
