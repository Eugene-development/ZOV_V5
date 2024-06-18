import Link from "next/link";

export default () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-full py-16  sm:py-20 px-4 sm:px-16 lg:px-24 ">
          <div className="max-w-screen-lg mx-auto  lg:mb-20 text-center font-display">
            <h2 className="tracking-wide my-8 text-3xl md:text-8xl font-display font-extrabold text-gray-800 dark:text-white">
              Мебель <br className="md:hidden" /> для жизни
            </h2>
            <p className="font-light mx-auto max-w-3xl text-gray-500 dark:text-gray-400 text-sm sm:text-xl">
              Предлагаем корпусную и встраиваемую мебель трёх основных
              направлений: кухонные гарнитуры, гардеробные шкафы и шкафы купе.
            </p>
          </div>

          <div className="my-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
              <img
                src="https://storage.yandexcloud.net/zovrus/site/main/cam-2-1087x890.jpg"
                alt="Гардероб"
                className="object-cover object-center group-hover:opacity-75"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50"
              />
              <div className="flex items-end p-6">
                <div>
                  <h3 className="font-semibold font-display text-white text-2xl">
                    <Link href="/catalog/garderob">
                      <span className="absolute inset-0" />
                      Шкафы и гардеробы
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
              <img
                src="https://zovofficial.com/image/cache/catalog/products/kuhni/2024/norvud/cam-1-1087x890.jpg"
                alt="Кухонный гарнитур"
                className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold font-display text-white text-2xl">
                    <Link href="/catalog/kuhna">
                      <span className="absolute inset-0" />
                      Кухонные гарнитуры
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
              <img
                src="https://shkafy-spb.ru/upload/iblock/5cf/5cff3716d080aa68a418437c84497c31.jpg"
                alt="Шкаф купе"
                className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold font-display text-white text-2xl">
                    <Link href="/catalog/kupe">
                      <span className="absolute inset-0" />
                      Шкафы купе
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-6 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};
