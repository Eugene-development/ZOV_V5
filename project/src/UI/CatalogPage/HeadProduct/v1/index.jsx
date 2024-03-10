"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default (props) => {
  console.log(props)
  const pages = [
    { name: "Каталог", href: "#", current: false },
    { name: props.head, href: "#", current: true },
  ];
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <div className="bg-white py-8 sm:py-20">
        <div className="mx-auto max-w-screen-base text-center font-display">
          <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4 mx-auto">
              <li>
                <div>
                  <Link href="/" className="text-gray-400 hover:text-gray-500">
                    <HomeIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </Link>
                </div>
              </li>
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href={page.href}
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                      aria-current={page.current ? "page" : undefined}
                    >
                      {page.name}
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <h1 className="mb-4 text-2xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white">
            {props.head}
          </h1>
          {/* <p className="px-2 font-light text-gray-500 text-sm sm:text-lg dark:text-gray-400">
            {props.head}
          </p> */}
          <p className="px-2 font-light text-gray-500 text-sm sm:text-xl dark:text-gray-400">Выберите подходящую конфигурацию, стиль и цвет вашего будущего кухонного гарнитура</p>
        </div>
      </div>
    </motion.main>
  );
};
