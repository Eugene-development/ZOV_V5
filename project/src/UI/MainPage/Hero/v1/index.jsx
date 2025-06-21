"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

import { usePromoStore } from "@/store/promocode";
const { visiblePromo } = usePromoStore;

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Slider from "./Slider";

export default () => {
  const { openVisiblePromo } = visiblePromo();
  const { openVisibleFormConsultation } = visibleFormConsultation();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="bg-white ">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-100/20">
          <div className="mx-auto max-w-full pb-20 pt-10 sm:pb-24 lg:grid lg:grid-cols-2 lg:gap-x-2 lg:px-8 lg:py-16">
            <div className="px-5 lg:px-2 lg:pt-4">
              <div className="mx-auto max-w-2xl ">
                <div className="max-w-xl">
                  {/* <img
                    className="h-48"
                    src="https://zovofficial.com/image/catalog/logo-rus-x2.png"
                    alt="Your Company"
                  /> */}
                  <div className="mt-2 sm:mt-8 lg:mt-16">
                    <div className="inline-flex space-x-6">
                      <span className="rounded-full bg-gray-500/10 px-4 py-1 text-xs md:text-sm font-semibold leading-6 text-gray-950 ring-1 ring-inset ring-gray-600/10 ">
                        Фабрика "ЗОВ"
                      </span>
                      <button
                        onClick={openVisiblePromo}
                        className="inline-flex items-center space-x-2 text-xs md:text-base font-medium leading-6 text-gray-600"
                      >
                        <span>Ваш промокод</span>
                        <ChevronRightIcon
                          className="h-4 w-4 text-red-800"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                  <h1 className="mt-6 text-3xl font-bold text-gray-800 sm:text-5xl antialiased">
                    Мебель для жизни
                  </h1>
                  <p className="mt-4 text-xs md:text-lg leading-6 text-gray-600 ">
                    Фабрика "ЗОВ" - это один из крупнейших производителей
                    кухонной и корпусной мебели как в Республике Беларусь, так и
                    далеко за её пределами.{" "}
                    {/* Наша крупнейшая в Москве и области дилерская сеть насчитывает 39 салонов, где вы можете ознакомиться с образцами и получить полную консультацию.  */}
                  </p>
                  <div className="mt-8 md:mt-24 flex items-center gap-x-8">
                    <button
                      onClick={openVisibleFormConsultation}
                      className="hidden md:block rounded-md bg-gray-800 px-2.5 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      Заявка на просчёт проекта
                    </button>
                    <button
                      onClick={openVisibleFormConsultation}
                      className="md:hidden rounded-md bg-gray-800 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      Просчёт проекта
                    </button>
                    <Link
                      href="/contacts"
                      className="text-sm sm:text-base font-semibold leading-6 text-red-800"
                    >
                      Адреса салонов <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-24 md:mx-auto md:max-w-3xl lg:mx-0 lg:mt-0 lg:w-screen">
              <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[300%] skew-x-[-30deg] bg-white shadow-xl shadow-gray-600/10 ring-1 ring-gray-50 md:-mr-20 lg:-mr-36"
                aria-hidden="true"
              />
              <div className="shadow-lg md:rounded-3xl">
                <div className="bg-gray-200 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                  <div
                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-gray-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                    aria-hidden="true"
                  />
                  <div className="hidden md:block relative pt-0 sm:pt-8 md:pl-16 md:pr-0">
                    <Slider />
                    <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-100/10 md:rounded-3xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </div>
    </motion.main>
  );
};
