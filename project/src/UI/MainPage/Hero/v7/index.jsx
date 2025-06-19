"use client";

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { usePromoStore } from "@/store/promocode";
const { visiblePromo } = usePromoStore;

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

export default () => {
  const { openVisiblePromo } = visiblePromo();
  const { openVisibleFormConsultation } = visibleFormConsultation();

  // URL фонового изображения, замените на нужный
  const backgroundImageUrl = "https://storage.yandexcloud.net/zovrus/site/1-1600x1573.jpg";

  return (
    <div
      className="relative isolate overflow-hidden bg-gray-100 h-[calc(100vh-80px)] flex items-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Оверлей для затемнения фона */}
      <div className="absolute inset-0 z-0 bg-black/10 pointer-events-none" />
      {/* <svg className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg> */}
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 font-display relative z-10">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-2xl lg:pt-8">
          <img
            alt="Фабрика ЗОВ"
            src="https://storage.yandexcloud.net/zovrus/brand/logo-white.svg"
            className="h-36"
          />
        <div className="max-w-xl lg:max-w-3xl bg-black/20 p-8 -ml-8 mt-8 shadow-2xl shadow-black rounded-md">

          <div className="mt-4 sm:mt-2 lg:mt-2">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-gray-200 px-4 py-1.5 text-xs sm:text-sm font-semibold leading-6 text-gray-800 ring-1 ring-inset ring-gray-500/20">
                Сайт мебельной фабрики ЗОВ в Москве
              </span>
              <button
                onClick={openVisiblePromo}
                className="inline-flex items-center space-x-2 text-xs md:text-sm font-medium leading-6 text-gray-200"
              >
                <span>Ваш промокод</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-red-800"
                  aria-hidden="true"
                />
              </button>
            </a>
          </div>

          <h1 className="mt-16 text-4xl font-semibold tracking-tight text-gray-200 sm:text-7xl">
            ФАБРИКА "ЗОВ"
          </h1>
          <p className="mt-6 text-sm sm:text-lg leading-8 text-gray-200">
            Мебельная фабрика «ЗОВ» - это крупнейший производитель высококачественной корпусной мебели на заказ в Республике Беларусь и далеко за её пределами.
          </p>
          <p className="mt-6 text-sm sm:text-lg leading-8 text-gray-200">
            Наша фабрика гарантирует Вам высочайшее качество премиальной мебели и доступную цену на всю линейку продукции, приемлемые сроки изготовления и сервис.
          </p>
          
          <div className="mt-12 flex items-center">
            <button
              onClick={openVisibleFormConsultation}
              className="border-2 border-gray-300 inline-flex items-center py-3 px-10 font-medium text-center text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:ring-4 "
            >
              Бесплатная консультация дизайнера в Москве
              <svg
                className="ml-2 -mr-1 w-5 h-5 text-red-800"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
} 