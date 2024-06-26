"use client";
import { motion } from "framer-motion";

import {
  HomeIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  UserPlusIcon,
  PuzzlePieceIcon,
  FaceSmileIcon,
} from "@heroicons/react/20/solid";

const services = [
  {
    name: "Консультация",
    description:
      "Наши дизайнеры предоставят Вам информацию не только по конструкции и размещению шкафов, но и по цветовому решению и по ценам.",
    href: "#",
    icon: UserPlusIcon,
  },
  {
    name: "Замер",
    description:
      "Профессиональный замер помещения является неотъемлемой частью составления проекта. При оформлении договора услуга бесплатна.",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Проект",
    description:
      "Проект мебели, составленный в дизайнерской программе, даст подробное визуальное представление о вашей будущей покупке.",
    href: "#",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Доставка",
    description:
      "Служба логистики обеспечит Вам комфортную доставку заказа в удобное время и место. Есть дополнительная услуга квалифицированных грузчиков.",
    href: "#",
    icon: TruckIcon,
  },
  {
    name: "Сборка",
    description:
      "Сборка и установка приобретённой вами мебели осуществляется нашими квалифицированными специалистами качественно и в кратчайшие сроки. ",
    href: "#",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Поддержка",
    description:
      "Мы всегда готовы придти Вам на помощь в сложной ситуации и стараемся оперативно решать возникшие вопросы на любой стадии проекта.",
    href: "#",
    icon: FaceSmileIcon,
  },
];
export default () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="relative overflow-hidden bg-white">
        {/* Decorative background image and gradient */}
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 mx-auto max-w-full overflow-hidden">
            <img
              src="https://storage.yandexcloud.net/zovrus/site/service/service.webp"
              alt="Сервис компании"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-white bg-opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
        </div>

        <section
          aria-labelledby="sale-heading"
          className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h1
              id="sale-heading"
              className="text-4xl font-semibold font-display tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Сервис от нашей фабрики
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
              На всём пути нашего сотрудничества наши специалисты всегда готовы
              придти вам на помощь и решить любой вопрос.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="testimonial-heading"
          className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-2 lg:py-16"
        >
          <div className="mx-auto max-w-2xl lg:max-w-none">
            {/* <h2 id="testimonial-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                        Наши услуги
                    </h2> */}

            <div className=" lg:grid lg:grid-cols-3 lg:gap-x-8 ">
              {services.map((item) => (
                <div
                  key={item.name}
                  className="sm:flex lg:block mt-12 border-b pb-8"
                >
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                    <item.icon
                      className="size-6 flex-none text-red-700"
                      aria-hidden="true"
                    />
                    {item.name}
                  </dt>
                  <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-4">
                    <p className="text-lg text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.main>
  );
};
