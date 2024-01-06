import { FadeIn } from "@/functions/FadeIn";
import Image from "next/image";
export default () => {
  return (
    <FadeIn>
      <div className="relative isolate -z-10 ">
        <div className="py-12 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8 text-center font-display">
          <div className="max-w-screen-lg mx-auto mb-8 lg:mb-12 text-center font-display">
            <h2 className="mb-8 text-center text-2xl md:text-7xl tracking-wide font-extrabold text-gray-800">
              Бытовая техника
            </h2>
            <p className="font-light  text-gray-500 dark:text-gray-400 text-sm sm:text-xl">
              Наша компания при сотрудничестве со всеми передовыми брэндами
              предлагает вам приобрести встравиваемую и стационарную бытовую
              технику
            </p>
          </div>
          <div className="mx-auto  grid max-w-xl grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-2xl sm:grid-cols-6 sm:gap-x-20 lg:mx-0 lg:max-w-full lg:grid-cols-5">
            <img
              className="col-span-2 max-h-10 w-full object-cover lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/K%C3%B6rting_Hannover_Logo.svg/1200px-K%C3%B6rting_Hannover_Logo.svg.png"
              alt="Tuple"
              width={158}
              height={48}
            />

            <img
              className="col-span-2 max-h-10 w-full object-cover lg:col-span-1"
              src="https://www.ocs.ru/uploads/2022-07-25-snwcau-evelux_logo.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-10 w-full object-cover sm:col-start-2 lg:col-span-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHaStuvIcCz8Sk90Lb2F6atIRol9dutdi9mC94tc1&s"
              alt="SavvyCal"
              width={158}
              height={48}
            />

            <img
              className="col-span-2 max-h-10 w-full object-cover lg:col-span-1"
              src="data:image/png;base64,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"
              alt="Transistor"
              width={158}
              height={48}
            />

            <img
              className="col-span-2 col-start-2 max-h-10 w-full object-cover sm:col-start-auto lg:col-span-1"
              src="https://www.ocs.ru/uploads/vendors/p159554ed39ca-9542-4ce6-a2e3-0cd3259ab5f6.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16">
              {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
        <p className="font-light text-gray-500 sm:text-lg md:px-20 lg:px-38 xl:px-48 dark:text-gray-400">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p> */}
              <div className="gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12 object-contain">
                <img
                  className="col-span-2 mb-4 sm:mb-0 rounded-lg [200/80]"
                  src="https://avatars.mds.yandex.net/get-yabs_performance/1887606/picdf653584f1cddfcb7c3f7666d5d65772/hugeX"
                  alt="content gallery 1"
                />
                {/* <img
                  className="hidden col-span-1 sm:block rounded-lg h-[19rem] w-[19rem]"
                  src="https://cartesio777.ru/d/547570_2.jpg"
                  alt="content gallery 2"
                /> */}
                <img
                  className="hidden col-span-1 sm:block rounded-lg "
                  src="https://proreiling.ru/wp-content/uploads/8/2/3/82356d35a56e50470847da9781fe2415.jpeg"
                  alt="content gallery 2"
                />
                <img
                  className="hidden col-span-1 sm:block rounded-lg "
                  src="https://tehnomult.ru/uploads/blog/foto-1226-03-2020-10-02.jpg"
                  alt="content gallery 3"
                />
                {/* <img
                  className="hidden col-span-1 sm:block rounded-lg h-[19rem]"
                  src="https://tehnomult.ru/uploads/blog/foto-1226-03-2020-10-02.jpg"
                  alt="content gallery 3"
                /> */}
                <img
                  className="hidden col-span-1 sm:block rounded-lg "
                  src="https://avatars.mds.yandex.net/get-mpic/4219717/img_id5024808702663609812.jpeg/orig"
                  alt="content gallery 4"
                />
                <img
                  className="hidden col-span-1 sm:block rounded-lg "
                  src="https://btkorzina.ru/wp-content/uploads/2021/02/603350e88733b.jpg"
                  alt="content gallery 6"
                />
                <img
                  className="col-span-2 rounded-lg aspect-[200/97]"
                  src="https://mafa-kzn.ru/images/Interer_uglovoy_kuhni_8_15162501.jpg"
                  alt="content gallery 5"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </FadeIn>
  );
};
