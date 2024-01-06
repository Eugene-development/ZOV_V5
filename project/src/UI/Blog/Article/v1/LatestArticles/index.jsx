import Link from "next/link";

export default () => {
  return (
    <div className="p-4 mb-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <h4 className="mb-4 text-sm font-bold text-gray-900 dark:text-white uppercase">
        Последнее
      </h4>
      <div className="mb-8">
        <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
          Мебельные тренды 2023 года: слияние комфорта и функциональности.
        </h5>
        <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
          В мире дизайна интерьера мебель является ключевым ...
        </p>
        <Link
          href="/post/2"
          className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
        >
          Подробнее
        </Link>
      </div>
      <div className="mb-8">
        <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
          Плюсы и минусы конкуренции на мебельном рынке.
        </h5>
        <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
          Мебельный рынок является одной из наиболее конкурентных ...
        </p>
        <Link
          href="/post/3"
          className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
        >
          Подробнее
        </Link>
      </div>
      <div className="mb-8">
        <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
          Роль дизайнеров при проектировании корпусной мебели.
        </h5>
        <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
          Дизайнеры играют важную роль в процессе проектирования ...
        </p>
        <Link
          href="/post/4"
          className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
};
