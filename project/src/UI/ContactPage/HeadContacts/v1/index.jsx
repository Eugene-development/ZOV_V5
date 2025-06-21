"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollToMap from "./ScrollToMap";

export default () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <div className="bg-white py-8 sm:py-20">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className=" mb-4 text-2xl lg:text-5xl font-extrabold text-gray-900 dark:text-white ">
            Адреса салонов
          </h2>
          <p className="mb-8 px-2 font-light text-gray-500 text-sm sm:text-lg dark:text-gray-400">
            В связи с высокой загруженностью дизайнеров просьба предупредить нас
            о Вашем визите
          </p>
          <ScrollToMap />
        </div>
      </div>
    </motion.main>
  );
};
