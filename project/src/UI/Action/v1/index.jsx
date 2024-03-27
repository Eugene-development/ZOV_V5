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
      <section
        aria-labelledby="sale-heading"
        className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h1 id="sale-heading" className="text-4xl font-semibold font-display tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Наши акции и предложения
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Мы стараемся Вас радовать не только качественной и красивой
            мебелью, но и приятными бонусами при покупке!
          </p>
        </div>
      </section>
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
