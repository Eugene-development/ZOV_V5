"use client";
import { FadeIn } from "@/functions/FadeIn";

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

export default () => {
  const { openVisibleFormConsultation } = visibleFormConsultation();

  return (
    <FadeIn>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-screen-lg text-center font-display">
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-6xl">
              Хотите узнать цену?
            </h2>
            {/* <p className="mx-auto mt-6  text-lg leading-8 text-gray-600">
              Подайте заявку на бесплатный дизайн проект.
            </p> */}
            <div className="mt-10 flex items-center justify-center  ">
              <button
                onClick={openVisibleFormConsultation}               
                className="block  rounded-md  px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 
                animate-background-shine items-center justify-center  border border-red-800 bg-[linear-gradient(110deg,#b91c1c,45%,#dc2626,55%,#b91c1c)] bg-[length:200%_100%]  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Закажите бесплатный дизайн проект
              </button>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
