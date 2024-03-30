import { HeartIcon } from '@heroicons/react/24/outline'

import { useProductStore } from "@/store/product";
const { favoritesProducts } = useProductStore;

export default ({ id }) => {
    const { addToFavoritesProducts } = favoritesProducts();

    return (
        <button
            type="button"
            onClick={() => addToFavoritesProducts(props.product)}
            className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
        >
            <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
            <span className="sr-only">Избранное</span>
        </button>
    )
}
