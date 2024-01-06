"use client";
import Form from "./Form";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import { usePromoStore } from "@/store/promocode";
const { visiblePromo } = usePromoStore;

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

export default function index() {
  const { openVisiblePromo } = visiblePromo();
  const { openVisibleFormConsultation } = visibleFormConsultation();

  return (
    <section className="shadow-xl bg-[url('https://zovofficial.com/image/cache/catalog/products/kuhni/2022/velvet/1-1600x1573.jpg')] bg-no-repeat bg-cover bg-center bg-gray-300 bg-blend-multiply">
      <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-16 z-1">
        <div className="mb-6 sm:mb-12">
          <div className="inline-flex sm:space-x-6">
            <span className="hidden md:block rounded-full bg-gray-500/10 px-6 py-1 text-xs md:text-sm font-semibold leading-6 text-gray-50 ring-1 ring-inset ring-gray-500/40 ">
              Мебель для жизни
            </span>
            <button
              onClick={openVisiblePromo}
              className="inline-flex items-center space-x-2 text-xs md:text-base font-medium leading-6 text-gray-50 animate-pulse"
            >
              <span>Ваш промокод на подарок</span>
              <ChevronRightIcon
                className="h-4 w-4 text-red-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        <div className="mb-6 max-w-screen-lg lg:mb-0">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-7xl">
            Мебель Белоруссии &#171;ЗОВ&#187;
          </h1>
          <p className="mb-6 p-2 font-light text-white lg:mb-8 md:text-lg lg:text-xl bg-gray-900/20 ">
            Мебельная фабрика «ЗОВ» - это крупнейший производитель корпусной
            мебели в Республике Беларусь, который гарантирует Вам высочайшее
            качество и доступную цену. <br />{" "}
            <span className="hidden md:block">
              <strong>Заполните форму</strong> и наши дизайнеры бесплатно
              составят для Вас дизайн проект и посчитают его ориентировочную
              стоимость.
            </span>
          </p>
          <Form />
          <button
            onClick={openVisibleFormConsultation}
            className="md:hidden inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-gray-900 hover:bg-primary-900 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Составить дизайн проект
            <svg
              className="ml-2 -mr-1 w-5 h-5 text-red-500"
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
        {/* <div className="grid gap-8 pt-8 lg:pt-12 mt-8 lg:mt-12 border-t border-gray-600 sm:grid-cols-2 lg:grid-cols-4">
            <div>
                <h2 className="mb-1 text-lg font-bold">Fourth quarter 2021</h2>
                <p className="mb-1 text-sm text-gray-400">We announced fourth quarter 2021 results</p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
                    Read more
                    <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
            <div>
                <h2 className="mb-1 text-lg font-bold">Zero emissions</h2>
                <p className="mb-1 text-sm text-gray-400">Flowbite aims to achieve net-zero emissions</p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
                    Read more
                    <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
            <div>
                <h2 className="mb-1 text-lg font-bold">New York</h2>
                <p className="mb-1 text-sm text-gray-400">Plans for net zero emissions in New York </p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
                    Read more
                    <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
            <div>
                <h2 className="mb-1 text-lg font-bold">2022 plans</h2>
                <p className="mb-1 text-sm text-gray-400">Investing in the future of Africa</p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
                    Read more
                    <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>               */}
      </div>
    </section>
  );
}
