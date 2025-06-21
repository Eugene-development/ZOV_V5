"use client"

export default () => {
  return (


<div
  className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 lg:px-8 lg:py-32"
>
  <div className="text-center">
    <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">
      Наши акции и предложения
    </h2>
    <p className="mt-2 mx-auto text-lg max-w-2xl font-medium text-gray-700">
      Мы стараемся Вас радовать не только качественной и красивой мебелью,
            но и приятными бонусами при покупке!
    </p>
  </div>
  <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">

    <div className="rounded-lg bg-white p-6 ring-8 ring-gray-900/5">
      <div
        className="mb-4 flex size-12 items-center justify-center rounded-xl bg-yellow-100"
      >
        <svg
          className="inline-block size-6 text-yellow-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      </div>
      <h4 className="mb-2 font-bold text-gray-950">Site Speed Optimization</h4>
      <p className="text-sm/relaxed text-gray-600">
        Improve your website's loading speed for better user experience and
        search rankings.
      </p>
    </div>

  </div>
</div>

  );
};
