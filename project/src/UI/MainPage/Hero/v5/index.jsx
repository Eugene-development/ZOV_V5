"use client";
import Link from "next/link";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ChevronRightIcon } from "@heroicons/react/20/solid";

import { usePromoStore } from "@/store/promocode";
const { visiblePromo } = usePromoStore;

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

export default function index() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".box", { opacity: 0, stagger: 1 });
    },
    { scope: container },
  );

  const { openVisiblePromo } = visiblePromo();
  const { openVisibleFormConsultation } = visibleFormConsultation();

  return (
    // <section className="shadow-xl bg-[url('https://zovofficial.com/image/cache/catalog/products/kuhni/2024/artvud-novyj-2/artwood-1-1087x890.jpg')] bg-no-repeat bg-cover bg-center  bg-blend-multiply bg-gray-800/50">
       <section className="shadow-xl bg-[url('https://storage.yandexcloud.net/zovrus/site/main/1-1600x1086.jpg')] bg-no-repeat bg-cover bg-center bg-gray-300 bg-blend-multiply"> 
      <div
        ref={container}
        className="relative  py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-24 z-1"
      >
        <div className="ml-20 mb-4 sm:mb-6">
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
        <div className="ml-20 mb-6 max-w-4xl lg:mb-12">
          <div className="box">
            <h1 className="mb-96  text-4xl text-gray-100 font-extrabold tracking-wide leading-none md:text-5xl lg:text-7xl">
              Белорусская фабрика мебели <span className="lg:text-8xl">&#171;ЗОВ&#187;</span > 
              {/* Фабрика &#171;ЗОВ&#187; */}
            </h1>
            {/* <p className=" p-6 font-light text-white lg:mb-24 md:text-lg lg:text-xl bg-gray-900/40 ">
              Мебельная фабрика «ЗОВ» - это крупнейший производитель корпусной
              мебели на заказ по индивидуальным размерам в Республике Беларусь и
              за её пределами. <br />{" "}
              <span className="hidden md:block mt-2">
                Наша фабрика гарантирует Вам высочайшее качество премиальной
                мебели и доступную цену на всю линейку продукции.
              </span>
            </p> */}
          </div>
          <button
            onClick={openVisibleFormConsultation}
            className=" inline-flex items-center ml-2 mt-2 py-4 px-10 font-medium text-center text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:ring-4 "
          >
            Бесплатная консультация дизайнера
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
      </div>
    </section>
  );
}
