import { HeadProduct, ProductList } from "@/UI";

export const metadata = {
  title: "Фабрика ЗОВ | Распродажа",
  description: "Распродажа образцов фабрики ЗОВ",
};

const data = {
  head: {
    h1: "Распродажа мебели",
    description:
      "Продаём образцы мебели из салонов по сниженным ценам в связи с обновлением",
  },
  products: [
    {
      project: "СТРАЙП ЛММ9ОБР",
      description: "143800 рублей",
      img: "https://zovrus.ru/files/_cache/product/1.-osnovnoe-foto.resize1200x1200w.jpg?5a195c08eebce1f98ab113d6d6bb061b",
    },
    {
      project: "ЭМАЛЬ ИНТЕГРА ЛТВДЭ014",
      description: "176 500 рублей",
      img: "https://zovrus.ru/files/_cache/product/1-glavnoe-foto.resize1200x1200w.jpg?2aa0c5a19ce1394fe35b46aadd2d97b8",
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
