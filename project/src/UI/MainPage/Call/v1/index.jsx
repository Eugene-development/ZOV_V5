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
              Готовы к покупке мебели?
            </h2>
            <p className="mx-auto mt-6  text-lg leading-8 text-gray-600">
              Подайте заявку на бесплатный дизайн проект.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 ">
              <button
                onClick={openVisibleFormConsultation}
                className="rounded-md bg-red-700 px-8 py-2.5 text-sm font-semibold shadow-lg shadow-gray-500 text-white hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Бесплатный дизайн проект
              </button>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
