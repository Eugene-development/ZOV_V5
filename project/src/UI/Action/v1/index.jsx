"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import ActionModal from "./ActionModal";

import Slide from "./slide";

export default ({ actions }) => {
  return (
    <>
      <ActionModal />
      <div className="overflow-hidden bg-white py-8 sm:pt-20 sm:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-screen-sm text-center font-display">
            <h2 className=" mb-4 text-3xl lg:text-5xl font-extrabold text-gray-800 dark:text-white">
              Наши акции
            </h2>
            <p className="font-light text-gray-500 text-sm sm:text-lg dark:text-gray-400">
              Мы стараемся Вас радовать не только качественной и красивой
              мебелью, но и приятными бонусами при покупке!
            </p>
          </div>
        </div>
      </div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 2, y: -10 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <Carousel
          className="mx-10"
          showThumbs={false}
          showArrows={true}
          showIndicators={true}
          showStatus={false}
          interval={5000}
          transitionTime={1000}
          infiniteLoop
          autoPlay
          stopOnHover
        >
          {actions.map((action, index) => (
            <Slide key={index} action={action} />
          ))}
        </Carousel>
      </motion.main>
    </>
  );
};
