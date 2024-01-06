import { HeadProduct, ProductList } from "@/UI";

export const metadata = {
  title: "Фабрика ЗОВ | Шкафы купе",
  description: "Шкафы купе фабрики ЗОВ",
};

const data = {
  head: {
    h1: "Шкафы купе",
    description:
      "Подберите под своё помещение встроенный или корпусный шкаф купе из предложенных вариантов мебели",
  },
  products: [
    {
      project: "MS 110",
      description:
        "Шкаф-купе в современном стиле, идеальное решение для оптимизации пространства. Просторное отделение под верхнюю одежду и удобные полки позволяют организовать хранение с легкостью. Минималистический дизайн и гладкие поверхности создают современную атмосферу.",
      img: "https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/modus/interer-1/1-1600x1086.jpg",
    },
    {
      project: "MS 120",
      description:
        "Модный шкаф-купе в современном стиле с интеллектуальной организацией пространства. Большое отделение для верхней одежды и удобные полки обеспечивают легкий доступ и аккуратное хранение. Превосходное решение для стильного интерьера.",
      img: "https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/modus/interer-2/1-1600x1086.jpg",
    },
    {
      project: "MS 140",
      description:
        "Стильный шкаф-купе в современном стиле с максимальной функциональностью. Просторное отделение для верхней одежды и разнообразные полки создают организованное пространство хранения. Сочетание глянцевых поверхностей и чистых линий придает шкафу элегантный вид.",
      img: "https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/modus/interer-3/1-1600x1086.jpg",
    },
    {
      project: "SLIM LINE-1",
      description:
        "Элегантный шкаф-купе в современном стиле с просторным отделением для верхней одежды и удобными полками. Современный дизайн и плавные формы создают изысканную атмосферу. Оптимальное решение для хранения и подчеркивания вашего современного интерьера.",
      img: "https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-slim-line/int-1/2-1600x1086.jpg",
    },
    {
      project: "SLIM LINE-2",
      description:
        "Стильный шкаф-купе в современном дизайне с умным использованием пространства. Просторное отделение для верхней одежды и разнообразные полки обеспечат оптимальную организацию и хранение. Минималистический стиль и гладкие поверхности придают шкафу современный вид.",
      img: "https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-slim-line/int-2/cam-1-1600x1086.jpg",
    },
    {
      project: "NOVA-2",
      description:
        "Современный шкаф-купе с идеальным сочетанием стиля и функциональности. Просторное отделение для верхней одежды и удобные полки позволят эффективно организовать хранение. Стильный внешний вид и простые формы создают современную эстетику.",
      img: "https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-nova/int-2/cam-1-1600x1086.jpg",
    },
  ],
};

export default () => {
  return (
    <>
      <HeadProduct head={data.head} />
      <ProductList products={data.products} />
    </>
  );
};
