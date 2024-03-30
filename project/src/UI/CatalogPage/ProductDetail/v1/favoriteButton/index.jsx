import { HeartIcon } from '@heroicons/react/24/outline'

import { useProductStore } from "@/store/product";
const { favoritesProducts } = useProductStore;

export default ({ product }) => {
    const { addToFavoritesProducts, removeFromFavoritesProducts, currentFavoritesProducts } = favoritesProducts();
    const isFavoriteProduct = currentFavoritesProducts.some(function (item) {
        return item.id === product.id
    })


    return (
        <button
            type="button"
            onClick={() => isFavoriteProduct ? removeFromFavoritesProducts(product.id) : addToFavoritesProducts(product)}

            className={`ml-4 flex items-center justify-center rounded-md px-3 py-3 ${isFavoriteProduct ? ' bg-red-700 text-gray-50' : ' bg-white text-gray-400'}`}
        >
            <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
            <span className="sr-only">Избранное</span>
        </button >
    )
}
