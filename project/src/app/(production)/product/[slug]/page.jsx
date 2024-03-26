import { BreadCrumbs, ProductDetail, SimilarProducts, SliderSimple } from "@/UI";
import { getOneProduct } from "../server";

import { Suspense } from 'react'
// import Loading from "./loading";

export default async ({ params }) => {
  const data = await getOneProduct({ params });
  // console.log(data);
  const breadCrumbs = [
    { name: 'Рубрика', value: 'Мебель' },
    { name: 'Категория', value: data.product_one.parent.value, count: null, unit: 'поз.', href: data.product_one.parent.slug },
  ]

  return (
    <>

      <BreadCrumbs breadCrumbs={breadCrumbs} />


      <Suspense fallback={<p>Loading feed...</p>}>
        <ProductDetail product={data.product_one} />
      </Suspense>


      <SimilarProducts />
      <SliderSimple />

    </>
  )
}
