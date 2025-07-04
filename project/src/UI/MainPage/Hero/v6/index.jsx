"use client";

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { usePromoStore } from "@/store/promocode";
const { visiblePromo } = usePromoStore;

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

export default () => {
  const { openVisiblePromo } = visiblePromo();
  const { openVisibleFormConsultation } = visibleFormConsultation();

  // URL фонового изображения, легко заменить
  const backgroundImageUrl = "https://storage.yandexcloud.net/zovrus/site/1-1600x1573.jpg";

  return (
    <div
      className="relative isolate overflow-hidden bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Оверлей для затемнения фона */}
      <div className="absolute inset-0 z-0 bg-black/40 pointer-events-none" />
       <svg class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
        </svg>
      {/* <div
        aria-hidden="true"
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
        />
      </div> */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-12 relative z-10">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-2xl lg:pt-8">
          <img
            alt="Фабрика ЗОВ"
            src="https://storage.yandexcloud.net/zovrus/brand/logo-rus-x2.png"
            className="h-32"
          />
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-gray-200/50 px-4 py-1 text-xs sm:text-sm font-semibold leading-6 text-gray-800 ring-1 ring-inset ring-gray-500/20">
                Сайт мебельной фабрики ЗОВ
              </span>
              {/* <span className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium leading-6 text-gray-300">
                <span>Ваш промокод на скидку</span>
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
              </span> */}
              
              
              <button
                onClick={openVisiblePromo}
                className="inline-flex items-center space-x-2 text-xs md:text-sm font-medium leading-6 text-gray-800"
              >
                <span>Ваш промокод на подарок</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-red-800"
                  aria-hidden="true"
                />
              </button>
              
            </a>
          </div>
          <h1 className="mt-12 text-4xl font-bold tracking-tight text-gray-800 sm:text-8xl">
            Мебель ЗОВ
          </h1>
          <p className="mt-6 text-sm sm:text-lg leading-8 text-gray-700">
            Мебельная фабрика «ЗОВ» - это крупнейший производитель корпусной мебели на заказ в Республике Беларусь и за её пределами.
          </p>
          <p className="mt-6 text-sm sm:text-lg leading-8 text-gray-700">
            Наша фабрика гарантирует Вам высочайшее качество премиальной мебели и доступную цену на всю линейку продукции.
          </p>
          <p className="mt-6 text-sm font-semibold sm:text-lg leading-8 text-gray-900">
            Получите консультацию нашего представителя в Москве.
          </p>
          <div className="mt-12 flex items-center">
            <button
              onClick={openVisibleFormConsultation}
              className="border-2 border-gray-300 inline-flex items-center py-4 px-10 font-medium text-center text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:ring-4 "
            >
              Бесплатная консультация дизайнера
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
        {/* <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              alt="App screenshot"
              src="https://storage.yandexcloud.net/zovrus/site/1-1600x1573.jpg"
              width={2432}
              height={1442}
              className="w-[46rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}
