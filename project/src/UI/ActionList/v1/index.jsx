"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiftIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Сборка в подарок",
    description:
      "Если ваш заказ свыше 70000 рублей, то наша компания оплатит работу сборщиков за свой счёт.",
    icon: GiftIcon,
  },
  {
    name: "Вместе дешевле",
    description:
      "При разовом заказе кухонного гарнитура и шкафа, мы предоставим скидку 5% на оба изделия.",
    icon: GiftIcon,
  },
  {
    name: "Каперсберг дарит",
    description:
      "Если вы приобретёте 5 позиций техники Kuppersberg, та что по меньшей цене будет вам в подарок.",
    icon: GiftIcon,
  },
  {
    name: "Искусственный камень (акрил)",
    description:
      "Выберите свой цвет столешницы из искустввенного камня из акционной серии по сниженным ценам.",
    icon: GiftIcon,
  },
];

export default () => {
  return (
    <div className="overflow-hidden bg-white py-8 sm:py-20">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto max-w-screen-sm text-center mb-4 lg:mb-8 font-display">
          <h2 className=" mb-4 text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Акции и подарки
          </h2>
          <p className="font-light text-gray-500 text-sm sm:text-lg dark:text-gray-400">
            Мы стараемся Вас радовать не только качественной и красивой мебелью,
            но и приятными бонусами при покупке!
          </p>
        </div>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 2, y: -10 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-7xl">
                <dl className="mt-10 max-w-xl space-y-8  leading-7 text-gray-600 lg:max-w-none font-display">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-10 pt-1">
                      <dt className="inline text-lg font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-6 w-6 text-indigo-400"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <br />
                      <dd className="inline text-sm sm:text-base">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              src="https://art-holding.su/image/catalog/category/gifts2.jpg"
              alt="Акции"
              className="w-[20rem] max-w-none sm:w-[60rem] mx-auto"
              width={2432}
              height={1442}
            />
          </div>
        </motion.main>
      </div>
    </div>
  );
};
