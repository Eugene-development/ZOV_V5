import { FadeIn } from "@/functions/FadeIn";
import Image from "next/image";
export default () => {
  return (
    <FadeIn>
      <div className="relative isolate -z-10 ">
        <div className="py-12 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8 text-center font-display">
          <div className="max-w-screen-lg mx-auto mb-8 lg:mb-12 text-center font-display">
            <h2 className="mb-8 text-center text-2xl md:text-8xl tracking-wide font-extrabold text-gray-800">
              Бытовая техника
            </h2>
            <p className="font-light  text-gray-500 dark:text-gray-400 text-sm sm:text-xl">
              Наша компания при сотрудничестве со всеми передовыми брэндами
              предлагает вам приобрести встравиваемую и стационарную бытовую
              технику
            </p>
          </div>
          <div className="mx-auto  grid max-w-xl grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-2xl sm:grid-cols-6 sm:gap-x-20 lg:mx-0 lg:max-w-full lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-10 w-full object-cover lg:col-span-1"
              src="https://storage.yandexcloud.net/zovrus/site/tech/kerting.png"
              alt="Tuple"
              width={158}
              height={48}
            />

            <Image
              className="col-span-2 max-h-10 w-full object-cover lg:col-span-1"
              src="https://storage.yandexcloud.net/zovrus/site/tech/evelux.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-10 w-full object-cover sm:col-start-2 lg:col-span-1"
              src="https://storage.yandexcloud.net/zovrus/site/tech/krona.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />

            <Image
              className="col-span-2 max-h-10 w-full object-cover lg:col-span-1"
              src="https://storage.yandexcloud.net/zovrus/site/tech/zh.png"
              alt="Transistor"
              width={158}
              height={48}
            />

            <Image
              className="col-span-2 col-start-2 max-h-10 w-full object-cover sm:col-start-auto lg:col-span-1"
              src="https://storage.yandexcloud.net/zovrus/site/tech/graude.svg"
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
                  src="https://storage.yandexcloud.net/zovrus/site/tech/1.jpeg"
                  alt="content gallery 1"
                />
                {/* <img
                  className="hidden col-span-1 sm:block rounded-lg h-[19rem] w-[19rem]"
                  src="https://cartesio777.ru/d/547570_2.jpg"
                  alt="content gallery 2"
                /> */}
                <img
                  className="hidden col-span-1 sm:block rounded-lg "
                  src="https://storage.yandexcloud.net/zovrus/site/tech/2.jpeg"
                  alt="content gallery 2"
                />
                <img
                  className="hidden col-span-1 sm:block rounded-lg "
                  src="https://storage.yandexcloud.net/zovrus/site/tech/3.jpeg"
                  alt="content gallery 3"
                />
                {/* <img
                  className="hidden col-span-1 sm:block rounded-lg h-[19rem]"
                  src="https://tehnomult.ru/uploads/blog/foto-1226-03-2020-10-02.jpg"
                  alt="content gallery 3"
                /> */}
                <img
                  className="hidden col-span-1 sm:block rounded-lg "
                  src="https://storage.yandexcloud.net/zovrus/site/tech/4.jpeg"
                  alt="content gallery 4"
                />
                <img
                  className="hidden col-span-1 sm:block rounded-lg "
                  src="https://storage.yandexcloud.net/zovrus/site/tech/5.jpeg"
                  alt="content gallery 6"
                />
                <img
                  className="col-span-2 rounded-lg aspect-[200/97]"
                  src="https://storage.yandexcloud.net/zovrus/site/tech/6.jpeg"
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
