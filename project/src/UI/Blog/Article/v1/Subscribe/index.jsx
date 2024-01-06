export default () => {
  return (
    <div className="p-4 mb-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <h4 className="mb-2 text-sm font-bold text-gray-900 dark:text-white uppercase">
        Читайте нас
      </h4>
      <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
        Следите за новыми статьями и постами о наших акциях и новостях
      </p>
      <form action="#">
        <label htmlFor="email-address-icon" className="sr-only">
          Ваша почта
        </label>
        <div className="relative mb-4">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            required
            type="text"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="name@email.ru"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 text-center w-full"
        >
          Подписаться
        </button>
      </form>
    </div>
  );
};
