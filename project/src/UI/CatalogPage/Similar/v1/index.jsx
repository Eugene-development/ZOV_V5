"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

import { useProductStore } from "@/store/product";
const { similarProducts } = useProductStore;

export default ({ categorySlug }) => {
  const { currentSimilarProducts } = similarProducts();
  function getRandomElements(arr, numElements) {
    // Создаем копию исходного массива
    let arrCopy = arr.slice();

    // Перемешиваем массив
    for (let i = arrCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]]; // Это ES6 деструктуризация для обмена элементами
    }

    // Возвращаем первые numElements элементов из перемешанного массива
    return arrCopy.slice(0, numElements);
  }
  const fourRandomProducts = getRandomElements(currentSimilarProducts, 4);

  // Решаем ошибку гидратации
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    domLoaded && (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-full lg:px-24">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-sm lg:text-2xl font-medium text-gray-900">
              Похожее из категории
            </h2>
            <Link
              href={`/catalog/${categorySlug}`}
              className="whitespace-nowrap text-sm font-medium text-red-700 hover:text-red-600"
            >
              В категорию
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {fourRandomProducts.map((product) => (
              <div key={product.slug} className="group relative">
                <Link href={`/product/${product.slug}`}>
                  <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={`${process.env.NEXT_PUBLIC_S3}/${product?.image[0]?.hash}`}
                      alt={product.value}
                      className="object-cover object-center"
                    />
                    <div
                      className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                        Проект - {product.value}
                      </div>
                    </div>
                  </div>
                  {/* <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                                    <h3>
                                        <Link href={`/product/${product.slug}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Проект - {product.value}
                                        </Link>
                                    </h3>
                                </div> */}
                  {/* <p className="mt-1 text-sm text-gray-500">{product.category}</p> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};
