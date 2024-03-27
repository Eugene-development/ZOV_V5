"use client";
import Link from "next/link";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CursorArrowRaysIcon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  PhoneIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Кухонные гарнитуры",
    description: "Функциональное решение организации вашей кухни",
    href: "/catalog/kuhna",
    icon: CursorArrowRaysIcon,
    img: "https://zovrus.ru/files/_cache/product/chr_7591.resize1200x1200w.jpg?2b82b85cca879e925f3be6a695423932",
  },
  {
    name: "Шкафы и гардеробы",
    description: "Вместительные конструкции с различным наполнением",
    href: "/catalog/garderob",
    icon: CursorArrowRaysIcon,
    img: "https://zovofficial.com/image/catalog/products/garderobnye-shkafy-i-sistemy/garderobnyj-sh-kaf-1-basic-line-ru/garderobnyj-sh-kaf-1-basic-line-ru_49206.jpeg",
  },
  {
    name: "Шкафы купе",
    description: "Дизайнерские решения для экономии пространства",
    href: "/catalog/kupe",
    icon: CursorArrowRaysIcon,
    img: "https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-slim-line/int-2/cam-1-1600x1086.jpg",
  },
  {
    name: "Распродажа мебели",
    description: "Реализация продукции по сниженным ценам",
    href: "/catalog/rasprodazha",
    icon: CursorArrowRaysIcon,
    img: "https://zovrus.ru/files/_cache/product/chr-1468-1.resize1200x1200w.jpg?bb6ff66a75163cd326252dd51a442d6b",
  },
];
const equipment = [
  { name: "Бытовая техника", href: "#", icon: RectangleGroupIcon },
  { name: "Мебельная фурнитура", href: "#", icon: RectangleGroupIcon },
  { name: "Мойки и аксессуары", href: "#", icon: RectangleGroupIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0  isolate z-10 bg-gray-50/90 shadow-lg">
      <nav
        className="mx-auto flex max-w-full items-center justify-between p-4 lg:px-8"
        //  ^?
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 pl-3">
            <span className="sr-only">Фабрика "ЗОВ"</span>
            <img
              className="size-10"
              src="https://storage.yandexcloud.net/zovrus/brand/logo-rus-x2.png"
              alt="логотип"
            />
          </Link>
        </div>
        <div className="flex 2xl:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Открыть меню</span>
            <span className="mr-2">Меню</span>

            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden 2xl:flex divide-x font-display">
          <Link
            href="/"
            className="px-3 text-sm xl:text-base leading-6 text-gray-900 hover:text-red-800 transition ease-in-out hover:scale-110"
          >
            Главная
          </Link>
          <Link
            href="/company"
            className="px-3 text-sm xl:text-base leading-6 text-gray-900 hover:text-red-800 transition ease-in-out hover:scale-110"
          >
            Компания
          </Link>
          <Link
            href="/blog"
            className="px-3 text-sm xl:text-base leading-6 text-gray-900 hover:text-red-800 transition ease-in-out hover:scale-110"
          >
            Блог
          </Link>

          <Popover>
            <Popover.Button className="outline-none pl-4 pr-3 flex *:hover:rotate-90 items-center gap-x-1 text-sm xl:text-base font-display font-semibold leading-6 text-gray-950 hover:text-red-800 transition ease-in-out hover:scale-110">
              Каталог
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-red-700  animate-pulse"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 -z-10 bg-gray-50 pt-12 shadow-lg ring-1 ring-gray-900/5 border-t">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-6 lg:px-8 xl:gap-x-8 ">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative rounded-lg p-5 text-sm leading-6 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-50 border-t ransparent border-gray-300 transition ease-in-out hover:scale-110"
                    >
                      <div className="flex ">
                        {/* <img
                          src={item.img}
                          className="h-16 w-24 object-fill rounded-md  shadow-xl"
                          aria-hidden="true"
                        /> */}
                        <item.icon className="size-5 text-red-900" aria-hidden="true" />
                        <Link
                          href={item.href}
                          className="ml-2 block text-lg font-semibold text-gray-800"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>

                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-800">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      {equipment.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-50 hover:bg-gray-800"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-gray-50"
                            aria-hidden="true"
                          />
                          {item.name}
                        </div>
                        // <Link
                        //   key={item.name}
                        //   href={item.href}
                        //   className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-50 hover:bg-gray-800"
                        // >
                        //   <item.icon className="h-5 w-5 flex-none text-gray-50" aria-hidden="true" />
                        //   {item.name}
                        // </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </Popover>

          <Link
            href="/service"
            className="px-3 text-sm xl:text-base leading-6 text-gray-900 hover:text-red-800 transition ease-in-out hover:scale-110"
          >
            Сервис
          </Link>
          <Link
            href="/actions"
            className="px-3 text-sm xl:text-base leading-6 text-gray-900 hover:text-red-800 transition ease-in-out hover:scale-110"
          >
            Акции
          </Link>
          <Link
            href="/contacts"
            className="pl-4 text-sm xl:text-base leading-6 text-gray-900 hover:text-red-800 transition ease-in-out hover:scale-110"
          >
            Салоны
          </Link>
        </Popover.Group>
        <div className="hidden 2xl:flex 2xl:flex-1 ">
          <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <div className="mr-4 bg-white flex rounded-lg px-2 xl:px-4 py-1 text-xl font-semibold leading-6  shadow-lg shadow-gray-300/10 bg-gradient-to-r from-gray-50/50 via-gray-50/50 to-gray-100/50 ring-offset-2 ring-1 ring-gray-200">
              <PhoneIcon
                className="block h-4 w-4 xl:h-6 xl:w-6 text-gray-950 animate-pulse"
                aria-hidden="true"
              />
              <Link
                href="tel:+79154000020"
                className=" ml-2 text-sm xl:text-base font-bold text-gray-950"
              >
                8 (915) 400-00-20
              </Link>
            </div>
            <div className="bg-white flex rounded-lg px-2 xl:px-4 py-1 text-xl font-semibold leading-6  shadow-lg shadow-gray-300/10 bg-gradient-to-r from-gray-50/50 via-gray-50/50 to-gray-100/50 ring-offset-2 ring-1 ring-gray-200">
              <EnvelopeIcon
                className="block h-4 w-4 xl:h-6 xl:w-6 text-gray-950 animate-pulse"
                aria-hidden="true"
              />
              <div
                className=" ml-2 text-sm xl:text-base font-bold text-gray-950"
              >
                info@zov.top
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MobileMenu */}
      <Dialog
        as="div"
        className="2xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/"
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Логотип</span>
              <img
                className="h-8 w-auto"
                src="https://zov.ru/img/logo.png"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 hover:text-red-800"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg font-bold leading-7 hover:bg-gray-50 hover:text-red-800">
                        Каталог
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none",
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <Disclosure.Button
                            onClick={() => setMobileMenuOpen(false)}
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-red-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/company"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-red-800"
                >
                  Компания
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/contacts"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-red-800"
                >
                  Салоны
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/service"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-red-800"
                >
                  Сервис
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/actions"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-red-800"
                >
                  Акции
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-red-800"
                >
                  Блог
                </Link>
              </div>
              <div className="py-6">
                <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                  <div className="flex rounded-lg px-3 py-1.5 text-xl mx-auto font-semibold leading-6 text-gray-800 shadow-xl ring-2 ring-gray-200/100 hover:ring-gray-500/20 ">
                    <div className="flex mx-auto">
                      <Link
                        href="tel:+79154000020"
                        className="flex ml-2 text-lg font-bold "
                      >
                        {" "}
                        <PhoneIcon
                          className="block mr-3 h-6 w-6"
                          aria-hidden="true"
                        />{" "}
                        8 (915) 400-00-20
                      </Link>
                    </div>
                  </div>
                  <div className="flex rounded-lg mt-4 px-3 py-1.5 text-xl mx-auto font-semibold leading-6 text-gray-800 shadow-xl ring-2 ring-gray-200/100 hover:ring-gray-500/20 ">
                    <div className="flex mx-auto">
                      <EnvelopeIcon
                        className="block mr-3 h-6 w-6"
                        aria-hidden="true"
                      />
                      info@zov.top
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header >
  );
};
