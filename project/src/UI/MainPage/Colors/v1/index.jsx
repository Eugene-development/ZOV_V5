import { FadeIn } from "@/functions/FadeIn";

export default () => {
  return (
    // <section className="bg-white dark:bg-gray-900">
    //     <div className="pt-8 mx-auto max-w-full px-8 sm:px-16 lg:px-24 sm:text-center lg:pt-32 text-center">
    //         <h2 className="font-[lato] mb-4 text-3xl md:text-4xl  font-extrabold text-gray-900 dark:text-white">Разнообразие <br className="md:hidden" /> цветов и оттенков</h2>
    //         <p className="font-light text-gray-500 text-sm sm:text-lg md:px-20 lg:px-38 xl:px-48 dark:text-gray-400">Вы обязательно найдёте подходящий цвет под ваш интерьер из более чем 2000 вариантов. От нежных пастельных тонов до ярких цветовых решений в матовом или глянцевом исполнении. </p>
    //         <div className="gap-6 mt-8 sm:grid sm:grid-cols-4 sm:mt-20">
    //             <img className="col-span-1 mb-4 sm:mb-0 rounded-lg" src="https://zovrus.ru/files/_cache/product/chr-3018.resize800x800w.jpg?e74c691be26de5528a034a590850de05" alt="content gallery 1"/>
    //             <img className="col-span-1 mb-4 sm:mb-0 rounded-lg" src="https://zovrus.ru/files/_cache/product/dsc08929.resize1200x1200w.jpg?a273c3827b30640f85991bf1f23dc707" alt="content gallery 2"/>
    //             <img className="hidden col-span-1 sm:block rounded-lg" src="https://zovrus.ru/files/_cache/product/dsc08417.resize1200x1200w.jpg?ec23029eadf7df31e3e86bf91a6a148c" alt="content gallery 3"/>
    //             <img className="hidden col-span-1 sm:block rounded-lg" src="https://zovrus.ru/files/_cache/product/chr-0670_2.resize800x800w.jpg?e203baad1ef1f66dffc7d65195163458" alt="content gallery 4"/>
    //             <img className="col-span-1 mb-4 sm:mb-0 rounded-lg" src="https://zovrus.ru/files/_cache/product/chr-3780.resize1200x1200w.jpg?8edcdce1cd9a796b5c426d3c25905ccf" alt="content gallery 5"/>
    //             <img className="col-span-1 mb-4 sm:mb-0 rounded-lg" src="https://zovrus.ru/files/_cache/product/chr-5650.resize1200x1200w.jpg?99512fcbd6b465ce180887a22497881a" alt="content gallery 6"/>
    //             <img className="col-span-1 mb-4 sm:mb-0 rounded-lg" src="https://zovrus.ru/files/_cache/product/chr-2152.resize1200x1200w.jpg?f3b82632ecac9231dab2f9442233cec9" alt="content gallery 6"/>
    //             <img className="col-span-1 mb-4 sm:mb-0 rounded-lg" src="https://zovrus.ru/files/_cache/product/chr-8945.resize800x800w.jpg?d1734f6452cf2d662162fce1a1ea377f" alt="content gallery 6"/>
    //         </div>
    //     </div>
    // </section>

    <section className=" my-12  md:mb-24">
      <div className=" mx-auto max-w-full px-6 sm:px-16 lg:px-24 sm:text-center lg:pt-24 text-center font-display">
        <div className="max-w-screen-lg mx-auto mb-8 lg:mb-20 text-center font-display">
          {/* <h2 className="tracking-wide mb-8 text-3xl md:text-7xl  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-400 to-violet-600">
            ЦВЕТОВАЯ ПАЛИТРА
          </h2> */}
          <h2 className="tracking-wide mb-8 text-2xl md:text-8xl  font-extrabold">
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute mt-2 left-0 top-2/3 h-[0.78em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-violet-600">
                ЦВЕТОВАЯ ПАЛИТРА
              </span>
            </span>
          </h2>
          <p className="pt-2 sm:py-10 font-light text-sm sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-violet-600">
            Вы обязательно найдёте подходящий цвет под ваш интерьер из более чем
            2000 вариантов. От нежных пастельных тонов до ярких цветовых решений
            в матовом или глянцевом исполнении.
          </p>
        </div>
        <div className="hidden  relative lg:flex flex-col justify-center">
          <FadeIn>
            <div className="pointer-events-none relative flex gap-6 ">
              <div className=" flex  min-w-full shrink-0 items-center justify-around gap-6">
                <img
                  className="aspect-square max-w-[clamp(22rem,28vmin,22rem)] rounded-md object-cover shadow-2xl shadow-[#c2b098]"
                  src="https://zovrus.ru/files/_cache/product/chr-5650.resize1200x1200w.jpg?99512fcbd6b465ce180887a22497881a"
                  alt="цвет кухни"
                />
                <img
                  className="aspect-square max-w-[clamp(22rem,28vmin,22rem)] rounded-md object-cover shadow-2xl shadow-green-800"
                  src="https://zovrus.ru/files/_cache/product/dsc08417.resize1200x1200w.jpg?ec23029eadf7df31e3e86bf91a6a148c"
                  alt="цвет кухни"
                />
                <img
                  className="aspect-square max-w-[clamp(22rem,28vmin,22rem)] rounded-md object-cover shadow-2xl shadow-pink-900"
                  src="https://zovrus.ru/files/_cache/product/chr-2152.resize1200x1200w.jpg?f3b82632ecac9231dab2f9442233cec9"
                  alt="цвет кухни"
                />
                <img
                  className="aspect-square max-w-[clamp(22rem,28vmin,22rem)] rounded-md object-cover shadow-2xl shadow-yellow-600"
                  src="https://zovrus.ru/files/_cache/product/chr-8945.resize800x800w.jpg?d1734f6452cf2d662162fce1a1ea377f"
                  alt="цвет кухни"
                />
              </div>
            </div>

            <div className="mt-16 pointer-events-none relative flex gap-6">
              <div className=" flex min-w-full shrink-0 items-center justify-around gap-6 ">
                <img
                  className="aspect-square max-w-[clamp(22rem,28vmin,22rem)] rounded-md object-cover shadow-2xl shadow-[#5a5a74] "
                  src="https://zovrus.ru/files/_cache/product/chr-3018.resize800x800w.jpg?e74c691be26de5528a034a590850de05"
                  alt="цвет кухни"
                />
                <img
                  className="aspect-square max-w-[clamp(22rem,28vmin,22rem)] rounded-md object-cover shadow-2xl shadow-lime-800"
                  src="https://zovrus.ru/files/_cache/product/dsc08929.resize1200x1200w.jpg?a273c3827b30640f85991bf1f23dc707"
                  alt="цвет кухни"
                />
                <img
                  className="aspect-square max-w-[clamp(22rem,28vmin,22rem)] rounded-md object-cover shadow-2xl shadow-blue-400"
                  src="https://zovrus.ru/files/_cache/product/chr-0670_2.resize800x800w.jpg?e203baad1ef1f66dffc7d65195163458"
                  alt="цвет кухни"
                />
                <img
                  className="aspect-square max-w-[clamp(22rem,28vmin,22rem)] rounded-md object-cover shadow-2xl shadow-gray-800"
                  src="https://zovrus.ru/files/_cache/product/chr-3780.resize1200x1200w.jpg?8edcdce1cd9a796b5c426d3c25905ccf"
                  alt="цвет кухни"
                />
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:hidden relative flex-col justify-center">
          <div className="pointer-events-none relative flex gap-6 ">
            <div className="mt-6 flex  min-w-full shrink-0 items-center justify-around gap-6">
              <img
                className="aspect-square max-w-[clamp(19rem,28vmin,22rem)] rounded-md object-contain shadow-2xl shadow-green-800"
                src="https://zovrus.ru/files/_cache/product/dsc08417.resize1200x1200w.jpg?ec23029eadf7df31e3e86bf91a6a148c"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
