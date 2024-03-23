import { ProductDetail } from "@/UI";
import { getOneProduct } from "../server";








import { Suspense } from 'react'
// import Loading from "./loading";

export default async ({ params }) => {
  const data = await getOneProduct({ params });

  return (
    <>


      <Suspense fallback={<p>Loading feed...</p>}>
        <ProductDetail product={data.product_one} />
      </Suspense>


    </>
  )
}
