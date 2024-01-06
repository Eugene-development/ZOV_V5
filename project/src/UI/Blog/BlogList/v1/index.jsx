"use client";
import { motion } from "framer-motion";

import Link from "next/link";

const articles = [
  {
    topic: "Пост",
    date: "03-05-2023",
    title: "Как выбрать идеальный цвет вашего кухонного гарнитура.",
    preview: "Ваша кухня - сердце вашего дома. Это место, где вы ...",
    author: "Костров Евгений",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    link: "/post/1",
    linkName: "Link 1",
  },
  {
    topic: "Пост",
    date: "04-06-2023",
    title: "Мебельные тренды 2023 года: слияние комфорта и функциональности.",
    preview: "В мире дизайна интерьера мебель является ключевым ...",
    author: "Костров Евгений",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    link: "/post/2",
    linkName: "Link 2",
  },
  {
    topic: "Пост",
    date: "12-06-2023",
    title: "Плюсы и минусы конкуренции на мебельном рынке.",
    preview: "Мебельный рынок является одной из наиболее конкурентных ...",
    author: "Костров Евгений",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    link: "/post/3",
    linkName: "Link 3",
  },
  {
    topic: "Пост",
    date: "19-06-2023",
    title: "Роль дизайнеров при проектировании корпусной мебели.",
    preview: "Дизайнеры играют важную роль в процессе проектирования ...",
    author: "Костров Евгений",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    link: "/post/4",
    linkName: "Link 4",
  },
];

export default () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8 font-display">
          <h2 className=" mb-4 text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Наш блог
          </h2>
          <p className="font-light text-gray-500 text-sm sm:text-lg dark:text-gray-400">
            Посты на мебельную тематику и новости от нашей фабрики из первых
            рук.
          </p>
        </div>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 2, y: -10 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="grid gap-8 lg:grid-cols-2 font-display">
            {articles.map((article) => (
              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                    </svg>
                    {article.topic}
                  </span>
                  <span className="text-sm">{article.date}</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <Link href={article.link}>{article.title}</Link>
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                  {article.preview}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-7 h-7 rounded-full"
                      src={article.avatar}
                      alt=""
                    />
                    <span className="font-medium dark:text-white">
                      {article.author}
                    </span>
                  </div>
                  <Link
                    href={article.link}
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Прочитать
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </motion.main>
      </div>
    </section>
  );
};
