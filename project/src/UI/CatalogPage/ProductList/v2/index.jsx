"use client";
import Image from "next/image";
import { FadeIn } from "@/functions/FadeIn";

import ProductModal from "./ProductModal";

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

import { useProductStore } from "@/store/product";
const { visibleProductModal } = useProductStore;

export default (props) => {
  const { openVisibleFormConsultation } = visibleFormConsultation();
  const { openVisibleProductModal } = visibleProductModal();
  // console.log(props)
  return (
    <>
      <ProductModal />
      {/* { props == null && 
     <p>Список пуст</p>   
    } */}
      {props && (
        <section className="bg-white dark:bg-gray-900 antialiased">
          <div className="max-w-screen-2xl px-4 mx-auto ">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {props.products.product?.map((item) => (
                <div key={item.value}>
                  <FadeIn>
                    <div
                      onClick={() => openVisibleProductModal(item)}
                      className="my-2 relative overflow-hidden group shadow-lg shadow-gray-700"
                    >
                      <Image
                        className="object-cover w-full h-[360px]  scale-100 ease-in duration-300 group-hover:scale-125 "
                        // TODO: А если нет изображения?
                        src={`${process.env.NEXT_PUBLIC_S3}/${item?.image?.hash}`}
                        width={360}
                        height={190}
                        alt={`Проект ${item.value}`}
                      />
                      <div className="absolute inset-0 grid items-end justify-center p-2 bg-gradient-to-b from-transparent to-black/60">
                        {/* <div className="text-center"> */}
                        <div className="text-center bg-gray-900 opacity-50 rounded-xl px-3 py-1">
                          <p className="text-sm font-medium text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
            <div className="max-w-full p-4 mx-auto my-8 rounded-md lg:my-20 bg-gray-50 dark:bg-gray-800 shadow-lg">
              <div className="flex flex-col justify-between gap-3 md:gap-6 md:items-center md:flex-row">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-normal text-gray-700 dark:text-gray-400">
                    <span className="font-semibold">
                      Получите бесплатную консультацию от нашего дизайнера по
                      размерам, комплектации, цвету и ценам
                    </span>
                  </span>
                </div>

                <button
                  onClick={openVisibleFormConsultation}
                  className="inline-flex items-center text-base font-medium text-indigo-600 hover:underline dark:text-red-500"
                >
                  Бесплатная консультация
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-1.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
