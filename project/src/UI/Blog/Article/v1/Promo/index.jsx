import Link from "next/link";
export default () => {
  return (
    <div>
      {/* <div className="flex justify-center items-center mb-3 w-full h-48 bg-gray-100 rounded-lg dark:bg-gray-800">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
        </div> */}
      <div className="flex justify-center items-center  ">
        <img
          src="https://art-holding.su/image/catalog/category/gifts2.jpg"
          alt="Product screenshot"
          className="object-cover h-32 w-56"
          width={2432}
          height={1442}
        />
      </div>
      <p className="mb-2 text-sm font-light text-gray-500 dark:text-gray-400">
        Так же следите за нашими акциями и специальными предложениями
      </p>
      <Link
        href="/actions"
        className="text-xs font-light text-gray-400 uppercase dark:text-gray-500"
      >
        Подробнее
      </Link>
    </div>
  );
};
