export default () => {
  return (
    <div className="bg-gray-50">
      <div id="map" className=" py-8 sm:pt-24 sm:pb-12">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className=" mb-4 text-2xl lg:text-6xl font-extrabold text-gray-900 dark:text-white ">
            Мы на карте
          </h2>
          <p className="px-2 font-light text-gray-500 text-sm sm:text-lg dark:text-gray-400">
            Выберите для себя наиболее удобный маршрут к ближайшему салону нашей
            сети
          </p>
        </div>
      </div>

      <div className="hidden md:block mx-auto pb-8  overflow-hidden sm:rounded-lg ">
        <iframe
          className="mx-auto  shadow-xl border-2"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Af53eed7fc969b9732e5ac139a551d2ebe71577fc49191db93689b4390e2a2fbf&amp;source=constructor"
          width="1124"
          height="600"
          title="Map"
        />
      </div>
      <div className="md:hidden mx-auto pb-8  overflow-hidden sm:rounded-lg">
        <iframe
          className="mx-auto py-8 shadow-xl border-2"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Af53eed7fc969b9732e5ac139a551d2ebe71577fc49191db93689b4390e2a2fbf&amp;source=constructor"
          width="420"
          height="600"
          title="Map"
        />
      </div>
    </div>
  );
};
