"use client";
import Image from "next/image";

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

// import { useFormsStore } from "@/store/forms";
// const { visibleFormConsultation } = useFormsStore;

import { useActionStore } from "@/store/action";
const { visibleActionModal } = useActionStore;

export default () => {
  const cancelButtonRef = useRef(null);
  const { currentVisibleActionModal, closeVisibleActionModal, currentAction } =
    visibleActionModal();
  // const { openVisibleFormConsultation } = visibleFormConsultation();
  return (
    <Transition.Root show={currentVisibleActionModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={closeVisibleActionModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-25"
          enterTo="opacity-75"
          leave="ease-in duration-200"
          leaveFrom="opacity-75"
          leaveTo="opacity-25"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-25 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo=" translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-75 translate-y-0 sm:scale-100"
              leaveTo="opacity-25 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl sm:p-6">
                {/* <div>
                  <div className="mx-auto flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-4 w-4 sm:h-5 sm:w-5 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  
                </div> */}
                <div className="bg-white py-24 sm:py-32">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                      <p className="text-2xl font-semibold leading-7 text-red-600">
                        Наша акция
                      </p>
                      <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        {currentAction.title}
                      </h2>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        {currentAction.description}
                      </p>
                      <p className="mt-4 text-xl text-gray-800">Условия:</p>

                      {currentAction.conditions?.map(({ title }, i) => (
                        <p
                          className="mt-2 text-lg leading-8 text-gray-600"
                          key={i}
                        >
                          <span className="text-gray-800">{i + 1}.</span>{" "}
                          {title}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm mt-8 leading-7 text-red-600">
                      Подробности у наших дизайнеров
                    </p>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={closeVisibleActionModal}
                    ref={cancelButtonRef}
                  >
                    Закрыть
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
