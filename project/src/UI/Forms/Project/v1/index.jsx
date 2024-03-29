"use client";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

import { send } from "@/serverActions/sendFormConsultation";

export default () => {
  const { push } = useRouter();
  const { currentVisibleFormConsultation, closeVisibleFormConsultation } =
    visibleFormConsultation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [project, setProject] = useState("Не выбрано");

  const handleSendFormConsultation = (e) => {
    e.preventDefault();

    const data = { name, phone, address, email, comment, project };
    send(data);

    setName("");
    setPhone("");
    setAddress("");
    setEmail("");
    setComment("");
    setProject("");

    push("/spasibo");
  };
  return (
    <Transition.Root show={currentVisibleFormConsultation} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={closeVisibleFormConsultation}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="translate-x-full opacity-0"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form
                    onSubmit={handleSendFormConsultation}
                    className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                  >
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-indigo-900 px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-white">
                            Заявка
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-indigo-900 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => closeVisibleFormConsultation()}
                            >
                              <span className="sr-only">Закрыть панель</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-indigo-100">
                            Составим бесплатный дизайн проект.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <div className="space-y-4 pb-5 pt-6">
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Имя{" "}
                                <sup className="text-red-700 w-4 h-4">
                                  &#x2736;
                                </sup>
                              </label>
                              <div className="mt-1.5">
                                <input
                                  required
                                  onChange={(e) => setName(e.target.value)}
                                  type="text"
                                  name="name"
                                  id="name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="phone"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Телефон{" "}
                                <sup className="text-red-700 w-4 h-4">
                                  &#x2736;
                                </sup>
                              </label>
                              <div className="mt-1.5">
                                <input
                                  required
                                  onChange={(e) => setPhone(e.target.value)}
                                  type="text"
                                  name="phone"
                                  id="phone"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            {/* <div>
                              <label
                                htmlFor="address"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Адрес (не обязательно)
                              </label>
                              <div className="mt-1.5">
                                <input
                                  onChange={(e) => setAddress(e.target.value)}
                                  type="text"
                                  name="address"
                                  id="address"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div> */}
                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Почта (необязательно)
                              </label>
                              <div className="mt-1.5">
                                <input
                                  onChange={(e) => setEmail(e.target.value)}
                                  type="text"
                                  name="email"
                                  id="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            {/* <div>
                              <label
                                htmlFor="promo"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Промокод
                              </label>
                              <div className="mt-1.5">
                                <input
                                  onChange={(e) => setPromo(e.target.value)}
                                  type="text"
                                  name="promo"
                                  id="promo"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div> */}
                            <div>
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Ваш комментарий
                              </label>
                              <div className="mt-1.5">
                                <textarea
                                  onChange={(e) => setComment(e.target.value)}
                                  id="description"
                                  name="description"
                                  rows={2}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <fieldset>
                              <legend className="text-sm font-medium leading-6 text-gray-900">
                                У вас есть готовый проект?{" "}
                                <sup className="text-red-700 w-4 h-4">
                                  &#x2736;
                                </sup>
                              </legend>
                              <div className="mt-1.5 space-y-4">
                                <div className="relative flex items-start">
                                  <div className="absolute flex h-6 items-center">
                                    <input
                                      onChange={(e) =>
                                        setProject(e.target.value)
                                      }
                                      id="privacy-public"
                                      name="project"
                                      value="да"
                                      checked={project === "да"}
                                      aria-describedby="privacy-public-description"
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                  </div>
                                  <div className="pl-7 text-sm leading-6">
                                    <label
                                      htmlFor="privacy-public"
                                      className="font-medium text-gray-900"
                                    >
                                      Да
                                    </label>
                                  </div>
                                </div>

                                <div>
                                  <div className="relative flex items-start">
                                    <div className="absolute flex h-6 items-center">
                                      <input
                                        onChange={(e) =>
                                          setProject(e.target.value)
                                        }
                                        id="privacy-private-to-project"
                                        name="project"
                                        value="нет"
                                        checked={project === "нет"}
                                        aria-describedby="privacy-private-to-project-description"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      />
                                    </div>
                                    <div className="pl-7 text-sm leading-6">
                                      <label
                                        htmlFor="privacy-private-to-project"
                                        className="font-medium text-gray-900"
                                      >
                                        Нет
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                          {/* <div className="pb-6 pt-4">
                            <div className="mt-4 flex text-sm">
                              <p className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                                <QuestionMarkCircleIcon
                                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <span className="ml-2">
                                  Специалист даст вам ориентировочную стоимость
                                  Вашего проекта, а также поможет с выбором
                                  материала и цветов.
                                </span>
                              </p>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0  px-4 py-4">
                      <button
                        onClick={() => closeVisibleFormConsultation()}
                        type="button"
                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Закрыть
                      </button>
                      {name && phone && project !== "Не выбрано" && (
                        <button
                          onClick={() => closeVisibleFormConsultation()}
                          type="submit"
                          className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Отправить
                        </button>
                      )}
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
