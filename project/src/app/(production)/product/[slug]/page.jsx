import { BreadCrumbs, ProductDetail, SimilarProducts } from "@/UI";
import { getOneProduct } from "../server";


export async function generateMetadata({ params }) {
  const meta = await getOneProduct({ params })

  return {
    title: meta.product_one.seoTitle.value,
    description: meta.product_one.seoDescription.value,

  }
}

// import { Suspense } from 'react'
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


      {/* <Suspense fallback={<p>Loading feed...</p>}> */}
      <ProductDetail product={data.product_one} />
      {/* </Suspense> */}


      <SimilarProducts categorySlug={data.product_one.parent.slug} />
      {/* <SliderSimple /> */}

    </>
  )
}
