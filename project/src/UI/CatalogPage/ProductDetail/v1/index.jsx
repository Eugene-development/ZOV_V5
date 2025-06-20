"use client";
import Image from "next/image";
import FavoriteButton from "./favoriteButton";

import { Suspense } from "react";
import { motion } from "framer-motion";

import { Disclosure, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

import { useNotificationStore } from "@/store/notifications";
const { visibleNotification } = useNotificationStore;

const product = {
  // name: 'МИ0000',
  rating: 5,
  // images: [
  //   {
  //     id: 1,
  //     name: 'Angled view',
  //     src: 'https://zovrus.ru/files/_cache/product/chr-1662_1.resize1200x1200w.jpg?af6dc73996cfd1fdd3a81afe24ddc872',
  //     alt: 'Angled front view with bag zipped and handles upright.',
  //   },
  //   {
  //     id: 1,
  //     name: 'Angled view',
  //     src: 'https://zovrus.ru/files/_cache/product/chr-1662_1.resize1200x1200w.jpg?af6dc73996cfd1fdd3a81afe24ddc872',
  //     alt: 'Angled front view with bag zipped and handles upright.',
  //   },
  //   {
  //     id: 1,
  //     name: 'Angled view',
  //     src: 'https://zovrus.ru/files/_cache/product/chr-1662_1.resize1200x1200w.jpg?af6dc73996cfd1fdd3a81afe24ddc872',
  //     alt: 'Angled front view with bag zipped and handles upright.',
  //   },
  //   {
  //     id: 1,
  //     name: 'Angled view',
  //     src: 'https://zovrus.ru/files/_cache/product/chr-1662_1.resize1200x1200w.jpg?af6dc73996cfd1fdd3a81afe24ddc872',
  //     alt: 'Angled front view with bag zipped and handles upright.',
  //   },
  //   // More images...
  // ],
  // colors: [
  //   { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
  //   { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
  //   { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  // ],
  // description: `
  //   <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag.</p>
  // `,
  details: [
    {
      name: "Общая информация",
      items: [
        {
          name: "Цена",
          value:
            "Наша фабрика предлагает идеальное соотношение приемлемой цены к премиальному качеству мебели.",
        },
        {
          name: "Замер",
          value:
            "Замер помещения осуществляется специалистом соответствующими измерительными приборами.",
        },
        {
          name: "Договор",
          value:
            "Договор заключается в наших салонах, где обозначены все условия по срокам, цене и гарантийным обязательствам.",
        },
        {
          name: "Предоплата",
          value:
            "При заключении договора вносится предоплата не менее 40 процентов, а оставшаяся сумма по факту готовности.",
        },
        {
          name: "Рассрочка",
          value:
            "Вы можете приобрести мебель в рассрочку сроком до одного года с первоначальным взносом от 10%.",
        },
        {
          name: "Доставка",
          value:
            "Мы можем организовать вам доставку заказа с грузчиками до квартиры по Москве и области.",
        },
        {
          name: "Сборка",
          value:
            "Сборка и установка мебели осуществляется нашими штатными специалистами, прошедшими обучение.",
        },
      ],
    },
    {
      name: "Комплектация изделия",
      items: [
        {
          name: "Каркас",
          value:
            "Каркас мебели выполнен из высокопрочной плиты ЛДСП Egger, увеличенной толщины 18 мм.",
        },
        {
          name: "Фасады",
          value:
            "Наша фабрика предлагает фасады из массива дерева, покрытые пластиком или крашенные эмалью.",
        },
        {
          name: "Фурнитура",
          value:
            "В наших изделиях мы используем только высококачественную фурнитуру брендов Hettich и BLUM.",
        },
      ],
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default (props) => {
  const { openVisibleFormConsultation } = visibleFormConsultation();
  const { openVisibleNotification, setCurrentNotification } =
    visibleNotification();

  const handleNotification = (item) => {
    openVisibleNotification();
    setCurrentNotification(item);
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <div className="max-w-screen-2xl px-8 mx-auto py-4 sm:px-6 sm:py-12 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-16">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {props.product.image.map((item) => (
                  <Tab
                    key={item.hash}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{item.hash}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_S3}/${item?.hash}`}
                            width={720}
                            height={480}
                            alt={props.product.value}
                            className="object-cover h-full w-full object-center"
                          />
                        </span>
                        {/* {img.hash} */}
                        <span
                          className={classNames(
                            selected ? "ring-gray-500" : "ring-transparent",
                            "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2",
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-h-3 aspect-w-4 w-full">
              {props.product.image.map((img) => (
                <Tab.Panel key={img.hash}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3}/${img?.hash}`}
                    width={720}
                    height={480}
                    alt={props.product.value}
                    className="object-cover h-full w-full object-center sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
          {/* Product info */}
          <div className="mt-8 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Проект - {props.product.value}
            </h1>

            {/* <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-lg tracking-tight text-gray-900">Категория: Шкафы купе</p>
              </div> */}

            {/* Reviews */}
            <div className="hidden lg:block mt-2 sm:mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-red-600"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0",
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">Пять звёзд</p>
              </div>
            </div>

            <div className="mt-2 pr-8">
              <h3 className="sr-only">Описание</h3>

              <div
                className="space-y-6 text-base text-gray-500"
                dangerouslySetInnerHTML={{ __html: props.product?.text?.value }}
              />
            </div>

            <div className="mt-6">
              <div>
                <h3 className="text-xs sm:text-sm text-red-600">
                  АКЦИЯ: Замер в пределах МКАД бесплатно
                </h3>
              </div>

              <div className="mt-8 flex">
                <button
                  type="submit"
                  onClick={openVisibleFormConsultation}
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-600 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  <span className="hidden sm:block">
                    Составить дизайн проект
                  </span>
                  <span className="block sm:hidden">Проект</span>
                </button>
                <button
                  type="submit"
                  onClick={openVisibleFormConsultation}
                  className="ml-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-600 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  <span className="hidden sm:block">
                    Заказать замер помещения
                  </span>
                  <span className="block sm:hidden">Замер</span>
                </button>

                <FavoriteButton product={props.product} />
              </div>
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Информация
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                {product.details.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(
                                open ? "text-gray-600" : "text-gray-900",
                                "text-sm font-medium",
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as="div"
                          className="prose prose-sm pb-6"
                        >
                          <ul role="list">
                            {detail.items.map((item) => (
                              <li
                                key={item}
                                onClick={() => handleNotification(item)}
                                className="cursor-pointer hover:text-red-700"
                              >
                                {item.name}
                              </li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </motion.main>
  );
};
