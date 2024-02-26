"use client";
import Image from "next/image";
import { FadeIn } from "@/functions/FadeIn";

import ProductModal from "./ProductModal";

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

import { useProductStore } from "@/store/product";
const { visibleProductModal } = useProductStore;

export default (props) => {
  const { openVisibleFormConsultation } = visibleFormConsultation();
  const { openVisibleProductModal } = visibleProductModal();
  // console.log(props)
  return (
    <>
      <ProductModal />
      {/* { props == null && 
     <p>Список пуст</p>   
    } */}
      {props && (
        <section className="bg-white dark:bg-gray-900 antialiased">
          <div className="max-w-screen-2xl px-4 mx-auto ">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {props.products.product?.map((item) => (
                <div key={item.value}>
                  <FadeIn>
                    <div
                      onClick={() => openVisibleProductModal(item)}
                      className="my-2 relative overflow-hidden group shadow-lg shadow-gray-700"
                    >
                      <Image
                        className="object-cover w-full h-[360px]  scale-100 ease-in duration-300 group-hover:scale-125 "
                        // TODO: А если нет изображения?
                        src={`${process.env.NEXT_PUBLIC_S3}/${item?.image?.hash}`}
                        width={360}
                        height={190}
                        alt={`Проект ${item.value}`}
                      />
                      <div className="absolute inset-0 grid items-end justify-center p-2 bg-gradient-to-b from-transparent to-black/60">
                        {/* <div className="text-center"> */}
                        <div className="text-center bg-gray-900 opacity-50 rounded-xl px-3 py-1">
                          <p className="text-sm font-medium text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>

            
          </div>
  <section className="relative z-10 overflow-hidden bg-gray-700 py-16 px-24 mt-40">
    <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
                <div className="text-center lg:text-left ">
                    <div className="mb-10 lg:mb-0 ">
                        <h2
                            className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white ">
                            Бесплатная услуга от нашей фабрики "ЗОВ"</h2>
                        <p
                            className="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white">
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
                <div className="text-center lg:text-right"><button onClick={openVisibleFormConsultation}
                        className="font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90"
                        href="#">Заказать дизайн-проект</button>
                </div>
            </div>
        </div>
    </div>
    <span className="absolute top-0 right-0 -z-10">
        <svg width="488" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)"></path><defs><linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient></defs></svg></span><span className="absolute top-0 right-0 -z-10">
        <svg width="324" height="250" viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6911)"></path><defs><linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient></defs></svg></span><span className="absolute top-4 left-4 -z-10">
        <svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white"></circle><circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" fill="white"></circle><circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white"></circle><circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" fill="white"></circle>
        <circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white"></circle><circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" fill="white"></circle><circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white"></circle><circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" fill="white"></circle><circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white"></circle><circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" fill="white"></circle><circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white"></circle><circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" fill="white"></circle><circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white"></circle><circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" fill="white"></circle><circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white"></circle><circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" fill="white"></circle><circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white"></circle><circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" fill="white"></circle><circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white"></circle><circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" fill="white"></circle></g>
        </svg>
    </span>
</section>

        </section>
        
      )}
    </>
  );
};
