"use client"

import { GiftIcon } from "@heroicons/react/20/solid";

const actions = [
  {
    name: "Дарим 30000",
    description:
      "Если вы посещаете наш салон, то мы дарим вам 30000 бонусных рублей на покупку мебели при заключении договора.",
    icon: GiftIcon,
  },
  {
    name: "Сборка в подарок",
    description:
      "Если ваш заказ свыше 100000 рублей, то наша компания оплатит работу по сборке и установке мебели за свой счёт.",
    icon: GiftIcon,
  },
  {
    name: "Вместе дешевле",
    description:
      "При единовременном заказе кухонного гарнитура и шкафа, мы предоставим скидку 5% на оба изделия.",
    icon: GiftIcon,
  },
  {
    name: "Дарим технику",
    description:
      "Если вы приобретёте 5 позиций бытовой техники от наших поставщиков, та что по меньшей цене будет вам в подарок.",
    icon: GiftIcon,
  },
  {
    name: "Столешница в подарок",
    description:
      "Дарим столешницу из акрила в подарок определённых цветов при покупке кухонного гарнитура свыше 280000 рублей.",
    icon: GiftIcon,
  },
  {
    name: "Скидка от Omoikiri",
    description:
      "Дарим скидку 15% на покупку всего комплекта сантехники Omoikiri при покупке мойки и смесителя.",
    icon: GiftIcon,
  },
];

const colors = [
  { bg: "bg-yellow-100", text: "text-yellow-600" },
  { bg: "bg-blue-100", text: "text-blue-600" },
  { bg: "bg-green-100", text: "text-green-600" },
  { bg: "bg-red-100", text: "text-red-600" },
  { bg: "bg-cyan-100", text: "text-cyan-600" },
];

export default () => {
  return (


<div
  className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 lg:px-8 lg:py-32"
>
  <div className="text-center">
    <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">
      Наши акции и предложения
    </h2>
    <p className="mt-2 mx-auto text-lg max-w-2xl font-medium text-gray-700">
      Мы стараемся Вас радовать не только качественной и красивой мебелью,
            но и приятными бонусами при покупке!
    </p>
  </div>
  <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
    {actions.map((action, index) => {
      const color = colors[index % colors.length];
      return (
        <div
          key={action.name}
          className="rounded-lg bg-white p-6 ring-8 ring-gray-900/5"
        >
          <div
            className={`mb-4 flex size-12 items-center justify-center rounded-xl ${color.bg}`}
          >
            <action.icon
              className={`inline-block size-6 ${color.text}`}
            />
          </div>
          <h4 className="mb-2 font-bold text-gray-950">{action.name}</h4>
          <p className="text-sm/relaxed text-gray-600">
            {action.description}
          </p>
        </div>
      );
    })}
  </div>
</div>

  );
};
