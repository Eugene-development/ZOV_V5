import { Action } from "@/UI";

export const metadata = {
  title: "Белорусская фабрика мебели ЗОВ | Акции",
  description: "Скидки и акции от нашей компании ЗОВ",
};

const actions = [
  {
    id: 1,
    title: "Сборка в подарок",
    description:
      "Наша компания оплатит работу мастеров, которые выполнят сборку и установку мебели.",
    conditions: [
      {
        title: "Сумма заказа свыше 70000 рублей",
      },
      {
        title: "Вы заказали кухонный гарнитур или гардероб фабрики ЗОВ",
      },
    ],
    image: "https://art-holding.su/image/catalog/category/gifts2.jpg",
  },
  {
    id: 1,
    title: "Столешница по спеццене",
    description:
      "Выберите свой цвет столешницы из искусственного камня из акционной серии по сниженным ценам",
    conditions: [
      {
        title: "Материал из  акционного списка",
      },
      {
        title: "Прямые или угловые изделия глубиной 60см",
      },
    ],
    image:
      "https://www.stoleshka.ru/upload/iblock/90a/90ab6288fe4e6bacdf79ddf0299f9590.jpg",
  },
  // {
  //   id: 2,
  //   title: "Бытовая техника KRONA",
  //   description:
  //     "Эксклюзивные предложения от немецкого бренда на приобретение комплектов бытовой техники",
  //   conditions: [
  //     {
  //       title:
  //         "При покупке 3 позиций - любая Варочная поверхность стоимостью до 20 500 руб в Подарок",
  //     },
  //     {
  //       title: "При покупке 3 позиций - СВЧ LAUNE 60 в Подарок",
  //     },
  //     {
  //       title: "При покупке 4 позиций - ПММ BRENTA на 45/60 в Подарок",
  //     },
  //   ],
  //   image: "https://storage.yandexcloud.net/zovrus/site/tech/krona.png",
  // },
];

export default function page() {
  return <Action actions={actions} />;
}
