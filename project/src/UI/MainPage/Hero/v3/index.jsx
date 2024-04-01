"use client";
import Link from "next/link";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";


import Form from "./Form";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import { usePromoStore } from "@/store/promocode";
const { visiblePromo } = usePromoStore;

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

export default function index() {

  const container = useRef();

  useGSAP(() => {
    gsap.from(".box", { opacity: 0, stagger: 0.5 });
  }, { scope: container });

  const { openVisiblePromo } = visiblePromo();
  const { openVisibleFormConsultation } = visibleFormConsultation();

  return (
    <section className="shadow-xl bg-[url('https://storage.yandexcloud.net/zovrus/site/1-1600x1573.jpg')] bg-no-repeat bg-cover bg-center bg-gray-200 bg-blend-multiply">
      {/* <section className="shadow-xl bg-[url('https://zovofficial.com/image/cache/catalog/products/kuhni/2022/velvet/1-1600x1573.jpg')] bg-no-repeat bg-cover bg-center bg-gray-300 bg-blend-multiply"> */}
      <div ref={container} className="relative py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-16 z-1">
        <div className="box mb-4 sm:mb-6">
          <div className=" inline-flex sm:space-x-6">
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
        <div className=" mb-6 max-w-4xl lg:mb-0">
          <div className="box">
            <h1 className="mb-16 ml-2 text-4xl text-gray-100 font-extrabold font-display tracking-wide leading-none md:text-5xl lg:text-8xl">
              Фабрика &#171;ЗОВ&#187;
            </h1>
            <p className=" p-2 font-light text-white lg:mb-8 md:text-lg lg:text-xl bg-gray-900/20 ">
              Мебельная фабрика «ЗОВ» - это крупнейший производитель корпусной
              мебели на заказ по индивидуальным размерам в Республике Беларусь и за её пределами. <br />{" "}
              <span className="hidden md:block mt-2">
                Наша фабрика гарантирует Вам высочайшее качество премиальной мебели и доступную цену на всю линейку продукции.
              </span>
            </p>
          </div>
          <div className="box">
            <Form />
          </div>
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
        <div className="grid gap-8 pt-8 lg:py-12 mt-8 lg:mt-12 sm:grid-cols-2 lg:grid-cols-4 bg-gray-800/60 p-6 shadow-2xl shadow-black rounded-md">
          <div>
            <h2 className="mb-1 text-xl font-semibold">Кухонные гарнитуры</h2>
            {/* <p className="mb-1 text-sm text-gray-200">Бесплатный дизайн-проект</p> */}
            <Link
              href="/catalog/kuhna"
              className="mt-2 inline-flex items-center text-sm font-semibold text-gray-200 hover:underline"
            >
              Подробнее
              <svg
                className="ml-2 w-5 h-5 text-red-500"
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
            </Link>
          </div>
          <div>
            <h2 className="mb-1 text-xl font-semibold">Гардеробные комнаты</h2>
            {/* <p className="mb-1 text-sm text-gray-200">Бесплатный дизайн-проект</p> */}
            <Link
              href="/catalog/garderob"
              className="mt-2 inline-flex items-center text-sm font-semibold text-gray-200 hover:underline"
            >
              Подробнее
              <svg
                className="ml-2 w-5 h-5 text-red-500"
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
            </Link>
          </div>
          <div>
            <h2 className="mb-1 text-xl font-semibold">Шкафы купе</h2>
            {/* <p className="mb-1 text-sm text-gray-200">Бесплатный дизайн-проект</p> */}
            <Link
              href="/catalog/kupe"
              className="mt-2 inline-flex items-center text-sm font-semibold text-gray-200 hover:underline"
            >
              Подробнее
              <svg
                className="ml-2 w-5 h-5 text-red-500"
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
            </Link>
          </div>
          <div>
            <h2 className="mb-1 text-xl font-semibold">Распродажа мебели</h2>
            {/* <p className="mb-1 text-sm text-gray-200">Бесплатный дизайн-проект</p> */}
            <Link
              href="/catalog/rasprodazha"
              className="mt-2 inline-flex items-center text-sm font-semibold text-gray-200 hover:underline"
            >
              Подробнее
              <svg
                className="ml-2 w-5 h-5 text-red-500"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
