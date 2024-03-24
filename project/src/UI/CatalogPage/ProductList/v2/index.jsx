"use client";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/functions/FadeIn";

import ProductModal from "./ProductModal";

import { useProductStore } from "@/store/product";
const { visibleProductModal, similarProducts } = useProductStore;

export default ({ products }) => {
  const { openVisibleProductModal } = visibleProductModal();
  const { showSimilarProducts } = similarProducts();

  return (
    <>
      <ProductModal />
      {products && (
        <section className="py-8 sm:py-16 antialiased">
          <div className="max-w-screen-2xl px-4 mx-auto ">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {products.map((item) => (
                <div key={item.value} className="transition ease-in-out hover:scale-105">
                  <FadeIn>
                    <Link href={`/product/${item.slug}`}

                    >
                      <div onClick={() => showSimilarProducts(products)} className="my-2 relative overflow-hidden group ">
                        <Image
                          className="object-cover w-full h-[360px] shadow-xl shadow-gray-500 border-2 "
                          // TODO: А если нет изображения?
                          src={`${process.env.NEXT_PUBLIC_S3}/${item?.image[0]?.hash}`}
                          width={360}
                          height={190}
                          alt={`Проект ${item.value}`}
                        />
                        {/* <div className="absolute  inset-0 grid items-end justify-center p-2 bg-gradient-to-b from-transparent to-black/60">
                          <div onClick={() => openVisibleProductModal(item)} className="mb-2 text-center bg-gray-900 opacity-50 rounded-xl px-3 py-1">
                            <p className="text-sm font-medium text-white">
                              {item.value}
                            </p>
                          </div>
                        </div> */}

                      </div>

                    </Link>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </section>

      )}
    </>
  );
};
