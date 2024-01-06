"use client";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default () => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      interval={4000}
      infiniteLoop
      autoPlay
    >
      {/* <Image
        src="https://zovofficial.com/image/cache/catalog/products/kuhni/2023/delfi/1-1600x1086.jpg"
        alt="кухонный гарнитур"
        width={420}
        height={300}
      /> */}
      <Image
        src="https://zovofficial.com/image/cache/catalog/products/kuhni/2022/velvet/1-1600x1573.jpg"
        alt="кухонный гарнитур"
        width={420}
        height={300}
      />
      {/* <Image
        src="https://zovofficial.com/image/cache/catalog/products/kuhni/boston-ru/cam-1-1600x1086.jpg"
        alt="кухонный гарнитур"
        width={420}
        height={300}
      /> */}
    </Carousel>
  );
};
