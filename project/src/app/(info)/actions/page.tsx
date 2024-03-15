import { Action } from "@/UI";

export const metadata = {
  title: "Белорусская фабрика мебели ЗОВ | Акции",
  description: "Скидки и акции от нашей компании ЗОВ",
};

const stats = [
  { name: 'Рубрика', value: 'Мебель' },
  { name: 'Категория', value: 'Кухонные гарнитуры', unit: 'поз.' },
]
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
  return (
    <>
      <div className="bg-gray-900">
        <div className="max-w-screen-2xl px-4 mx-auto sm:px-6">
          <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 ">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-gray-900 px-4 py-5 sm:px-6 lg:px-8">
                <p className="text-sm font-medium leading-6 text-gray-400">{stat.name}</p>
                <p className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-3xl font-semibold tracking-tight text-white">{stat.value}</span>
                  {stat.unit ? <span className="text-sm text-gray-400">(64 {stat.unit})</span> : null}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>     
    <Action actions={actions} />;
    </>
  ) 
}
