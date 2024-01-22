import { HeadProduct, ProductList } from "@/UI";
import { getProduct } from "./server";

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
  products: [
    {
      project: "РШ 8327",
      description:
        "Данный вариант - это элегантное и функциональное решение в голубых тонах. Фасады изготовлены из высококачественного ясеня. Кухня оборудована удобными ящиками и шкафами, предоставляющими достаточно места для хранения посуды и кухонных принадлежностей",
      img: "https://zovrus.ru/files/_cache/product/chr-0670_2.resize1200x1200w.jpg?5c92da30a4854ee4a81e8a9dcb3c75ed",
    },
    {
      project: "ОСК 1430",
      description:
        "Кухня OСК 1430 – стильное и практичное решение для вашей кухни. Белый матовый фасад из высококачественного акрила и светло-серый матовый цвет придают ей современный вид. Удобные ящики и шкафы обеспечивают достаточно места для хранения посуды и кухонных принадлежностей.",
      img: "https://zovrus.ru/files/_cache/product/chr-0039_2.resize1200x1200w.jpg?33aaab5064285cbc42245ed8f7a2c20d",
    },
    // {
    //   project: "МШ 2474",
    //   img: 'https://zovrus.ru/files/_cache/product/chr-1587.resize1200x1200w.jpg?0482d8eba3f49309f324bdf695b93932'
    // },
    {
      project: "ТШ 3394",
      description:
        "Современный кухонный гарнитур с элегантным дизайном с интегрированными ручками и просторными шкафами для хранения посуды и продуктов. Идеально подходит для создания функциональной и стильной кухонной зоны.",
      img: "https://zovrus.ru/files/_cache/product/chr-0614.resize1200x1200w.jpg?b00cc4c680739004ce873abc05677f47",
    },
    {
      project: "ОСК 1025",
      description:
        "Стильная и практичная кухонный гарнитур с современным дизайном. Просторные шкафы и выдвижные ящики обеспечат удобное хранение посуды и кухонных принадлежностей. Идеальный выбор для ценителей комфорта и стиля.",
      img: "https://zovrus.ru/files/_cache/product/chr-0572_1.resize1200x1200w.jpg?fdaad047c90f0263ee6e7f71ebd294f0",
    },
    {
      project: "ВП 1108",
      description:
        "Изысканный кухонный гарнитур, предназначенный для создания функционального и элегантного пространства на кухне. Прекрасное сочетание шкафов, полок и столешницы обеспечивает максимальную удобство и организацию приготовления пищи и хранения кухонных принадлежностей.",
      img: "https://zovrus.ru/files/_cache/product/chr-6214.resize1200x1200w.jpg?be70d0fcfbabbfcc59f3a1c2ff02ac6a",
    },
    {
      project: "БР 234",
      description:
        "Стильный и практичный кухонный гарнитур, который обеспечит функциональность и элегантность вашей кухни. Шкафы, выдвижные ящики и полки обеспечат достаточное пространство для хранения посуды, продуктов и кухонных принадлежностей. Идеальный выбор для современных и изысканных интерьеров.",
      img: "https://zovrus.ru/files/_cache/product/chr-6318.resize1200x1200w.jpg?073efb99aacc87fa949aaf1fbeec5b91",
    },
    {
      project: "НК 91",
      description:
        "Изысканный кухонный гарнитур с современным стилем и функциональностью. Прекрасное сочетание просторных шкафов и элегантных деталей создают уютную и стильную атмосферу.",
      img: "https://zovrus.ru/files/_cache/product/chr-5441.resize1200x1200w.jpeg?e94056466848f34e74985e95a3ad0778",
    },
    {
      project: "ФМ 508",
      description:
        "Утонченный и функциональный кухонный гарнитур, созданный для придания кухне изысканности и практичности. Просторные шкафы и ящики обеспечивают достаточное хранение посуды и кухонных принадлежностей, а стильный дизайн добавит элегантности и современности вашему интерьеру.",
      img: "https://zovrus.ru/files/_cache/product/chr-6141_1.resize1200x1200w.jpg?aa00328a7800cf633311da54df405054",
    },
    {
      project: "БОКС 295",
      description:
        "Изысканный и удобный кухонный гарнитур, сочетающий функциональность и эстетику. Просторные шкафы и ящики обеспечивают достаточное хранение посуды, продуктов и кухонных принадлежностей. Стильный дизайн и качественные материалы делают этот гарнитур идеальным выбором для создания привлекательной и организованной кухонной зоны.",
      img: "https://zovrus.ru/files/_cache/product/chr-0623_1.resize1200x1200w.jpg?dff06047258116e7d693ea38c32be95a",
    },
    {
      project: "ПМ 476",
      description: "",
      img: "https://zovrus.ru/files/_cache/product/chr-1944_1.resize1200x1200w.jpg?5b6f17746dc015fb4725adedf44d9c36",
    },
    {
      project: "ФМ 249",
      description: "",
      img: "https://zovrus.ru/files/_cache/product/chr_6626.resize1200x1200w.jpg?4cc726486d40e5e4b668f3bbc612029c",
    },
    {
      project: "ФМ 181",
      description: "",
      img: "https://zovrus.ru/files/_cache/product/chr-8468.resize1200x1200w.jpg?bc675b9b2de0aa459b81e2c3622f06fe",
    },
    {
      project: "ПП 609",
      description: "",
      img: "https://zovrus.ru/files/_cache/product/chr_6410.resize1200x1200w.jpg?d5cd27d947d5180bfc024bc739fe1bab",
    },
    {
      project: "ТК 14013",
      description: "",
      img: "https://zovrus.ru/files/_cache/product/chr_8287.resize1200x1200w.jpg?1f7adf9dbda6284ddfd2b8bcbd932c9b",
    },
    {
      project: "ПА 542",
      description: "",
      img: "https://zovrus.ru/files/_cache/product/chr_7530.resize1200x1200w.jpg?9167372c86f39b8c953bf12a3bc6e74d",
    },
    {
      project: "ИШ 6602",
      description: "",
      img: "https://zovrus.ru/files/_cache/product/chr_8226.resize1200x1200w.jpg?ce537b3f40ece0662fd408085b4be5fe",
    },
    {
      project: "БАРИ 22",
      description: "",
      img: "https://zovrus.ru/files/_cache/product/19621_1-1087x890.resize1200x1200w.jpg?e2f63b3603f2c80706f89e55981b5ecf",
    },
    {
      project: "БШ 1390",
      description: "",
      img: "https://zovrus.ru/files/_cache/product/chr_7591.resize1200x1200w.jpg?2b82b85cca879e925f3be6a695423932",
    },
  ],
};

export default async () => {
  const products = await getProduct()
  // console.log(products)


  
  return (
    <>
      <HeadProduct head={data.head} />
      <ProductList products={products} />
    </>
  );
};
