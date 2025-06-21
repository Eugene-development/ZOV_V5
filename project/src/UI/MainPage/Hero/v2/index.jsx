"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Slider from "./Slider";
import Form from "./Form";
import { TextTypingEffectWithTexts } from "./TypingEffect";

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

import { usePromoStore } from "@/store/promocode";
const { visiblePromo } = usePromoStore;

import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default () => {
  const { openVisiblePromo } = visiblePromo();
  const { openVisibleFormConsultation } = visibleFormConsultation();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="">
        {/* <div className="bg-[url('https://zovofficial.com/image/cache/catalog/products/kuhni/2023/delfi/1-1600x1086.jpg')]  bg-center bg-no-repeat bg-blue-500"> */}

        <div className="mx-auto max-w-full mb-20 lg:grid lg:grid-cols-2 lg:gap-x-2  ">
          {/* <div className="mx-auto max-w-full pb-20  sm:pb-20 lg:grid lg:grid-cols-2 lg:gap-x-2  "> */}
          <div className="px-5 lg:pl-12 lg:py-4 ">
            <div className="mx-auto max-w-2xl ">
              <div className="max-w-xl">
                {/* <img
                    className="h-48"
                    src="https://zovofficial.com/image/catalog/logo-rus-x2.png"
                    alt="Your Company"
                  /> */}
                <div className="mt-8  ">
                  <div className="inline-flex space-x-6">
                    <span className="hidden md:block rounded-full bg-gray-500/10 px-4 py-1 text-xs md:text-sm font-semibold leading-6 text-gray-950 ring-1 ring-inset ring-gray-600/10 ">
                      Мебель для жизни
                    </span>
                    <button
                      onClick={openVisiblePromo}
                      className="inline-flex items-center space-x-2 text-xs md:text-base font-medium leading-6 text-gray-600 animate-pulse"
                    >
                      <span>Ваш промокод на скидку 40%</span>
                      <ChevronRightIcon
                        className="h-4 w-4 text-red-800"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
                {/* <h1 className="flex items-center mt-6 text-3xl font-semibold font-[system-ui] text-gray-700 sm:text-5xl ">
                  МЕБЕЛЬ ДЛЯ ЖИЗНИ
                  <span className="relative ml-3 h-[1em] w-48 -py-0.5 overflow-hidden">
                    <span
                      className="absolute sm:text-5xl -translate-y-full animate-slide leading-none text-black [animation-delay:2s]"
                    >
                      дома
                    </span>
                    <span
                      className="absolute sm:text-5xl -translate-y-full animate-slide leading-none text-black [animation-delay:4s]"
                    >
                      жизни
                    </span>
                    <span
                      className="absolute sm:text-5xl -translate-y-full animate-slide leading-none text-black [animation-delay:6s]"
                    >
                      тебя
                    </span>
                  </span>
                </h1> */}
                <div className="items-center mt-6 text-3xl font-extrabold text-gray-700 sm:text-6xl">
                  <h1 className="">Фабрика &#171;ЗОВ&#187;</h1>
                  {/* <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-violet-500">
                   Фабрика &#171;ЗОВ&#187;
                  </h1> */}
                </div>
                <p className="mt-4 text-xs md:text-lg leading-6 text-gray-600 ">
                  Мебельная фабрика &#171;ЗОВ&#187; - это крупнейший
                  производитель корпусной мебели в Республике Беларусь,
                  гарантирующий высочайшее качество за разумную цену. <br />{" "}
                  <strong>Заполните форму</strong> и наши дизайнеры бесплатно
                  составят для Вас проект и посчитают его стоимость.
                  {/* Наша крупнейшая в Москве и области дилерская сеть насчитывает 39 салонов, где вы можете ознакомиться с образцами и получить полную консультацию.  */}
                </p>
                <Form />
              </div>
            </div>
          </div>
          <div className=" md:mx-auto ">
            {/* <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[300%] skew-x-[-30deg] bg-white shadow-xl shadow-gray-600/10 ring-1 ring-gray-50 md:-mr-20 lg:-mr-36"
                aria-hidden="true"
              /> */}
            <div className="shadow-lg md:rounded-3xl">
              <div className="hidden md:block ">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};
