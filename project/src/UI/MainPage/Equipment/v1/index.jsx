import { FadeIn } from "@/functions/FadeIn";

export default () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-center ">
      <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-32 lg:px-6">
        <div className="max-w-screen-lg mx-auto mb-8 lg:mb-16">
          <h2 className="mb-8 text-3xl md:text-7xl tracking-wide font-extrabold text-gray-800 dark:text-white ">
            Комплектация мебели фабрики "ЗОВ"
          </h2>
          <p className="font-light text-gray-500 dark:text-gray-400 text-sm sm:text-xl">
            Мы комплектуем всю мебель только качественными аксессуарами и
            фурнитурой в зависимости от ваших пожеланий и предпочтений.
          </p>
        </div>
        <FadeIn>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 xl:gap-6 md:space-y-0 text-left ">
            <div className="p-5 space-y-4 bg-white border border-gray-200 rounded-lg shadow-md lg:p-6 dark:bg-gray-800 dark:border-gray-700">
              <img
                className="object-cover w-full rounded-lg shadow-lg"
                src="https://zovofficial.com/image/cache/catalog/products/kuhni/2022/veskona-22/1-1087x890.jpg"
                alt=""
              />
              <div>
                {/* <div className="flex justify-center items-center mb-4 w-10 h-10 bg-primary-100 rounded dark:bg-primary-900 lg:h-16 lg:w-16">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-300 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </div> */}
                <h3 className="my-8 text-2xl font-bold  dark:text-white text-gray-900">
                  Кухонные гарнитуры
                </h3>
                <ul role="list" className="my-6 lg:mb-0 space-y-4">
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-red-600 dark:text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Акриловые и кварцевые столешницы
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-red-600 dark:text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Системы полного выдвижения
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-red-600 dark:text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Освещение рабочей зоны
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-red-600 dark:text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Стеновые панели
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-red-600 dark:text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Мойки, дозаторы и смесители
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-5 space-y-4 bg-white border border-gray-200 rounded-lg shadow-md lg:p-6 dark:bg-gray-800 dark:border-gray-700">
              <img
                className="object-cover w-full rounded-lg shadow-lg"
                src="https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2023/air-sistema/2-1087x890.jpg"
                alt=""
              />
              <div>
                {/* <div className="flex justify-center items-center mb-4 w-10 h-10 bg-primary-100 rounded dark:bg-primary-900 lg:h-16 lg:w-16">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-300 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                </div> */}
                <h3 className="my-8 text-2xl font-bold dark:text-white text-gray-900">
                  Шкафы и гардеробы
                </h3>
                <ul role="list" className="my-6 lg:mb-0 space-y-4">
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Подсветка секций
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Открывание по нажатию
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Пантографы и брючницы
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Корзины и системы хранения
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Профильные двери со стеклом
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-5 space-y-4 bg-white border border-gray-200 rounded-lg shadow-md lg:p-6 dark:bg-gray-800 dark:border-gray-700">
              <img
                className="object-cover w-full rounded-lg shadow-lg"
                src="https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-slim-line/int-2/cam-1-1087x890.jpg"
                alt=""
              />
              <div>
                {/* <div className="flex justify-center items-center mb-4 w-10 h-10 bg-teal-100 rounded dark:bg-teal-900 lg:h-16 lg:w-16">
                    <svg className="w-5 h-5 text-teal-600 dark:text-teal-300 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
                </div> */}
                <h3 className="my-8 text-2xl font-bold dark:text-white text-gray-900">
                  Шкафы купе
                </h3>
                <ul role="list" className="my-6 lg:mb-0 space-y-4">
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Зеркала и стекло
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Подвесная и нижнеопорная система
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Выдвижные ящики
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Доводчики и ограничители
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-teal-500 dark:text-teal-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-tight text-gray-500 dark:text-gray-400">
                      Встраиваемые и независимые двери
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
        <section className="bg-white dark:bg-gray-900"></section>
      </div>
    </section>
  );
};
