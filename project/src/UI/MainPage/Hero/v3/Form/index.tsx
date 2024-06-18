import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { send } from "@/serverActions/sendFormCalculation";

export default () => {
  const { push } = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    promo: "",
    message: "",
  });

  // Обработчик изменения полей формы
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendFormCalculation = (e: any) => {
    e.preventDefault();

    const data = {
      ...formData,
    };

    send(data);

    push("/spasibo");
  };

  return (
    <div className="hidden md:block relative isolate  ">
      <div className="max-w-xl lg:max-w-2xl bg-gray-800/20 p-6 shadow-2xl shadow-black rounded-md">
        {/* <p className="mb-6 text-xl font-semibold leading-6 text-white">
          Заявка на бесплатный дизайн проект и просчёт
        </p> */}

        <div className="mt-2 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form onSubmit={handleSendFormCalculation} className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-50"
                >
                  Ваше имя <sup className="text-red-700 w-4 h-4">&#x2736;</sup>
                </label>
                <div className="mt-2.5">
                  <input
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold leading-6 text-gray-50"
                >
                  Телефон или почта{" "}
                  <sup className="text-red-700 w-4 h-4">&#x2736;</sup>
                </label>
                <div className="mt-2.5">
                  <input
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Сколько метров ваша кухня? 
                   <span className="text-gray-400">(необязательно)</span> 
                </label>
                <div className="mt-2.5">
                  <input
                    value={formData.email}
                    onChange={handleInputChange}
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="promo"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Промокод{" "}
                  <span className="text-gray-400">(необязательно)</span>
                </label>
                <div className="mt-2.5">
                  <input
                    value={formData.promo}
                    onChange={handleInputChange}
                    type="text"
                    name="promo"
                    id="promo"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-50"
                >
                  Комментарий (пожелания и промокод)
                </label>
                <div className="mt-2.5">
                  <textarea
                    value={formData.message}
                    onChange={handleInputChange}
                    id="message"
                    name="message"
                    rows={2}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 
                animate-background-shine items-center justify-center  border border-red-800 bg-[linear-gradient(110deg,#b91c1c,45%,#dc2626,55%,#b91c1c)] bg-[length:200%_100%]  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Заказать бесплатный дизайн проект
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              {/* Отправляя форму я соглашаюсь на {' '} */}
              <Link href="/policy" className="font-semibold text-gray-50">
                Политика&nbsp;конфиденциальности
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
