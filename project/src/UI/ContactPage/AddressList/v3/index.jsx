
"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/functions/FadeIn";

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

const showrooms = [
  {
    city: "Москва",
    address: "Мичуринский проспект,  10к1",
    metro: "Ломоносовский проспект",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/chr-0272.resize1200x1200w.jpg?80096ff06e44387e81a13326382b42f5",
    link: "/",
  },
  // {
  //     city: 'Москва',
  //     address: 'Профсоюзная улица, 118',
  //     metro: 'Коньково',
  //     workingMode: '10.00-21.00',
  //     img: 'https://zovrus.ru/files/_cache/salon/abc-photo-98216_1280x0.resize1000x1000.jpg?3eb1cb1fb74218b0d40867bd9cbbb6e1',
  //     link: '/'
  // },
  {
    city: "Москва",
    address: "Варшавское шоссе, 143к5А",
    metro: "Аннино",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/ili05907-hdr.resize1000x1000.jpg?5ca04afcf4771e6bcbe2a5ffff48f2aa",
    link: "/",
  },
  {
    city: "Москва",
    address: "ул. Спартаковская, 21",
    metro: "Бауманская",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/hdr__mg_7445.resize1000x1000.jpg?1b41f8d67214a925d8be92ee8f944a3d",
    link: "/",
  },
  // {
  //     city: 'Москва',
  //     address: 'Полярная улица, 21',
  //     metro: 'Бабушкинская',
  //     workingMode: '10.00-21.00',
  //     img: 'https://zovrus.ru/files/_cache/salon/xxxl-1.resize1000x1000.jpeg?ba69f1ad3ef6fa5dd30548b2f3193fe5',
  //     link: '/'
  // },
  {
    city: "Москва",
    address: "ул. Поляны, 8",
    metro: "Бульвар Дмитрия Донского",
    workingMode: "10.00-22.00",
    img: "https://zovrus.ru/files/_cache/salon/chr-4070.resize1200x1200w.jpg?8125cdedb38ac327b2853aa42170972f",
    link: "/",
  },
  // {
  //     city: 'Москва',
  //     address: 'проспект Мира, 102к1',
  //     metro: 'Алексеевская',
  //     workingMode: '10.00-21.00',
  //     img: 'https://zovrus.ru/files/_cache/salon/photo_2021-09-30_13-45-25.resize1000x1000.jpg?e65b8ba6092d23b2c020c2b52bf5fbd4',
  //     link: '/'
  // },
  {
    city: "Москва",
    address: "ул. Бутырская, 65/68",
    metro: "Дмитровская",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/_mg_7879.resize1000x1000.jpg?6e3e67c77f4b7ce4729655a9f2fb023c",
    link: "/",
  },
  // {
  //     city: 'Москва',
  //     address: 'МКАД, 24-Й КИЛОМЕТР, ТЦ ТВОЙ ДОМ',
  //     metro: 'Домодедовская',
  //     workingMode: '10.00-21.00',
  //     img: 'https://zovrus.ru/files/_cache/salon/chr-6676.resize1000x1000.jpg?d998c197bfa57fb655b21c3fdf3bad90',
  //     link: '/'
  // },
  {
    city: "Москва",
    address: "Каширское шоссе, 62/2",
    metro: "Каширская",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/chr-9111_1.resize1200x1200w.jpg?bcfba8917d9351d842c9a9522b8be24b",
    link: "/",
  },
  // {
  //     city: 'Москва',
  //     address: 'НОВОРЯЗАНСКОЕ ШОССЕ, Д.3',
  //     metro: 'Котельники',
  //     workingMode: '10.00-20.00',
  //     img: 'https://zovrus.ru/files/_cache/salon/2cecffe89917e3b87ef2741073b70f1b.resize1000x1000.jpg?585036492f616f8e03b37f7a9c400bdd',
  //     link: '/'
  // },
  {
    city: "Москва",
    address: "Можайское шоссе, 25",
    metro: "Кунцевская",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/chr-5922.resize1000x1000.jpg?e43df2242c9a949890c1d4529f481e8a",
    link: "/",
  },
  // {
  //     city: 'Москва',
  //     address: 'УЛ. ОБРУЧЕВА, 34/63, СТР.1',
  //     metro: 'Калужская',
  //     workingMode: '10.00-21.00',
  //     img: 'https://zovrus.ru/files/_cache/salon/1bef1c6bdace78a633d444cfd76396e8.resize1000x1000.jpeg?50e08249b3432a375625e2665cb2b220',
  //     link: '/'
  // },
  // {
  //     city: 'Москва',
  //     address: 'НОВОУХТОМСКОЕ ШОССЕ, Д. 2А, ТЦ ГОРОД КОСИНО',
  //     metro: 'Косино',
  //     workingMode: '10.00-22.00',
  //     img: 'https://zovrus.ru/files/_cache/salon/chr-5068.resize1000x1000.jpg?346dd7aaeae38e90bc69c09f97716b2d',
  //     link: '/'
  // },
  // {
  //     city: 'Москва',
  //     address: 'ЛЮБЛИНСКАЯ УЛИЦА, 165',
  //     metro: 'Марьино',
  //     workingMode: '10.00-21.00',
  //     img: 'https://zovrus.ru/files/_cache/salon/mg_8425.resize1000x1000.jpg?b65a57269bf81082f214ef1ea68f54aa',
  //     link: '/'
  // },
  {
    city: "Москва",
    address: "Шоссе Энтузиастов, 76/1",
    metro: "Перово",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/chr-1594.resize1000x1000.jpg?0368abcadf0973c163a36f58dd8a16cd",
    link: "/",
  },
  {
    city: "Москва",
    address: "ул. Большая Черкизовская, 11",
    metro: "Преображенская пл.",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/chr-2183.crop596x380.jpg?0bfd5e9120d5aab3b6063d99b0f8e1f3",
    link: "/",
  },
  {
    city: "Москва",
    address: "МКАД, 23-й км., Киевское шоссе, 8г",
    metro: "Румянцево",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/family-room.crop596x380.png?0ccd953d66713e33cbaa239d3437f708",
    link: "/",
  },
  // {
  //     city: 'Москва',
  //     address: 'ПР. ВЕРНАДСКОГО, 86А',
  //     metro: 'Юго-Западная',
  //     workingMode: '10.00-21.00',
  //     img: 'https://zovrus.ru/files/_cache/salon/avenu.crop596x380.jpg?02792ab35aa7c3009ea23fdccc931186',
  //     link: '/'
  // },
  {
    city: "Москва",
    address: "Ленинградский проспект 74к1",
    metro: "Сокол",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/chr-1286.resize1200x1200w.jpg?28d794097c353dc0b5a3b73a5fae4e3e",
    link: "/",
  },
  {
    city: "Москва",
    address: "ул. Луговая, 1, р.п. Новоивановское",
    metro: "ТЦ Три Кита",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/chr-0474.crop596x380.jpg?0cda281955b6d055fbf117f7e38feda8",
    link: "/",
  },
  {
    city: "Видное",
    address: "ул. Олимпийская, 1к2",
    metro: "Видное",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/chr-5021.resize1000x1000.jpg?958f4e8d32d39d338cc431051b3b44e2",
    link: "/",
  },
  {
    city: "Реутов",
    address: "ТРЦ Шоколад - МКАД, 2-й км.",
    metro: "Новокосино",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/chr-4726.resize1200x1200w.jpg?146ff7552e122dd40c204187e9a9ce56",
    link: "/",
  },
  {
    city: "Химки",
    address: "ул. Молодёжная, 78",
    metro: "",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/chr-141210.crop596x380.jpg?6c5e18028db8f92629e1491869f322e0",
    link: "/",
  },
  {
    city: "Домодедово",
    address: "Каширское шоссе 17а, ТЦ «ГАЛЕРЕЯ»",
    metro: "",
    workingMode: "10.00-21.00",
    img: "https://zovrus.ru/files/_cache/salon/img_20200716_162443.crop596x380.jpg?3717a8c213952bcbd594e84139b670f3",
    link: "/",
  },
  // {
  //     city: 'Троицк',
  //     address: 'АКАДЕМИЧЕСКАЯ ПЛОЩАДЬ, 3',
  //     metro: '',
  //     workingMode: '10.00-21.00',
  //     img: 'https://zovrus.ru/files/_cache/salon/img_20221107_110957.crop596x380.jpg?98e3b9cd86cf5e3372acadf7028b7203',
  //     link: '/'
  // },
];

export default () => {
  const { openVisibleFormConsultation } = visibleFormConsultation();
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 2, y: -10 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <aside
        aria-label="Related articles"
        className="bg-white dark:bg-gray-900"
      >
        <div className="my-4 px-4 md:px-20 mx-auto max-w-full">
          <div className="grid gap-6 lg:gap-12 md:grid-cols-2 font-display">
            {showrooms.map((item) => (
              <FadeIn key={item.address}>
<div
  class="relative mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white ring-4 ring-slate-300/25"
>
  <div class="flex flex-col gap-4 rounded-xl p-6">
    <button
      onClick={openVisibleFormConsultation} class="group relative">
      <div
        class="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-black/50 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-active:opacity-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="hi-outline hi-arrow-up-right inline-block size-6 transition duration-200 group-hover:scale-150 group-active:scale-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
      {item.metro && (
        <div
          class="absolute top-7 right-7 rounded-xl bg-purple-700/50 px-2 py-1 text-xs font-semibold tracking-wider text-white uppercase"
        >
          Метро: "{item.metro}"
        </div>
      )}
     
      <img
        src={item.img}
        alt="Салон"
        class="aspect-16/9 w-full rounded-xl object-cover h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[24rem]"
      />
    </button>
    <div class="grow">
      <div class="mb-1.5 text-sm font-medium text-slate-500">
        г. {item.city}
      </div>
      <h2 class="mb-2 text-xl font-extrabold">
        <p
          class="hover:opacity-75 active:opacity-100"
        >
          {item.address}
        </p>
        
      </h2>
      <p class="text-sm leading-relaxed text-slate-600">
        Режим работы: {item.workingMode}
      </p>
    </div>
  </div>
</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </aside>
    </motion.main>
  );
};

