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
    <div className="bg-white py-8 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-screen-sm text-center mb-4 lg:mb-8">
          <h2 className=" mb-4 text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Сервис компании
          </h2>
          <p className="font-light text-gray-500 text-sm sm:text-lg dark:text-gray-400">
            На всём пути нашего сотрудничества наши специалисты всегда готовы
            придти вам на помощь и решить любой вопрос.
          </p>
        </div>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 2, y: -10 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="mx-auto mt-8 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <item.icon
                      className="h-5 w-5 flex-none text-indigo-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{item.description}</p>
                    <p className="mt-2">
                      {/* <a href={item.href} className="text-sm font-semibold leading-6 text-indigo-900">
                              Learn more <span aria-hidden="true">→</span>
                            </a> */}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.main>
      </div>
    </div>
  );
};
