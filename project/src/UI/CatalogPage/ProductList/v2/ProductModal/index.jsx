"use client";
import Image from "next/image";

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

import { useProductStore } from "@/store/product";
const { visibleProductModal } = useProductStore;

export default () => {
  const cancelButtonRef = useRef(null);
  const {
    currentVisibleProductModal,
    closeVisibleProductModal,
    currentProduct,
  } = visibleProductModal();
  const { openVisibleFormConsultation } = visibleFormConsultation();

  return (
    <Transition.Root show={currentVisibleProductModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={closeVisibleProductModal}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                <div>
                  <div className="mx-auto flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-4 w-4 sm:h-5 sm:w-5 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Проект: {currentProduct.value}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="sm:px-8 text-xs sm:text-sm text-gray-500 ">
                        {currentProduct.description}
                      </p>
                    </div>
                  </div>
                </div>

                <Image
                  className="my-8 object-cover w-full sm:h-[320px] lg:h-[600px] scale-100 ease-in duration-300 group-hover:scale-125 rounded-md"
                  src={`${process.env.NEXT_PUBLIC_S3}/${currentProduct?.image?.hash}`}
                  alt={`Проект ${currentProduct.value}`}
                  width={660}
                  height={420}
                />

                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    onClick={openVisibleFormConsultation}
                  >
                    Посчитать ваш вариант?
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={closeVisibleProductModal}
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
