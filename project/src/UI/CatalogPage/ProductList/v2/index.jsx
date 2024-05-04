"use client";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/functions/FadeIn";

// import ProductModal from "./ProductModal";

import { useProductStore } from "@/store/product";
const { visibleProductModal, similarProducts } = useProductStore;




export default ({ products }) => {
  const { openVisibleProductModal } = visibleProductModal();
  const { showSimilarProducts } = similarProducts();

  // Проверяем, есть ли продукты
  if (products && products.length > 0) {
    return (
      <>
        <section className="py-8 sm:py-16 antialiased">
          <div className="max-w-screen-2xl px-4 mx-auto ">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {products.map((item) => (
                <div key={item.value} className="transition ease-in-out hover:scale-105">
                  <FadeIn>
                    <Link href={`/product/${item.slug}`}>
                      <div onClick={() => showSimilarProducts(products)} className="my-2 relative overflow-hidden group ">
                        <Image
                          className="object-cover w-full  shadow-xl shadow-gray-500 border-2 "
                          // TODO: А если нет изображения?
                          src={`${process.env.NEXT_PUBLIC_S3}/${item?.image[0]?.hash}`}
                          width={720}
                          height={480}
                          alt={`Проект ${item.value}`}
                        />
                        <div className="absolute  inset-0 grid items-end justify-center p-2 bg-gradient-to-b from-transparent to-black/60">
                          <div className="mb-2 text-center bg-gray-900 opacity-50 rounded-xl px-3 py-1">
                            <p className="text-sm font-medium text-white">
                              Проект - {item.value}
                            </p>
                          </div>
                        </div>

                      </div>

                    </Link>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  } else {
    // Если массив products пустой, отображаем "Пусто"
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              В данном разделе пока пусто
            </h2>
            {/* <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Позиции отсутствуют.
            </p> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                На главную страницу
              </Link>
              {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    )
  }
};
