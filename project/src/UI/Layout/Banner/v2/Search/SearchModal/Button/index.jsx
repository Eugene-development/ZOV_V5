'use client'
import Link from "next/link"

import { useStoreSearch } from '@/store/search'
const { visibleSearch } = useStoreSearch


export default ({ slug }) => {
	const { closeVisibleSearch } = visibleSearch()


	return (
		<>
			<Link href={`/product/${slug}`} onClick={closeVisibleSearch}
			>
				<div
					onClick={closeVisibleSearch}

					data-drawer-target="drawer-read-product-advanced"
					data-drawer-show="drawer-read-product-advanced"
					aria-controls="drawer-read-product-advanced"
					className="py-2 px-3 flex items-center mx-auto text-sm font-medium text-center text-primary-900 focus:outline-none  rounded-lg border border-gray-200 bg-primary-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
				>
					{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-4 h-4 mr-2 -ml-0.5"
					>
						<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
						/>
					</svg> */}
					Подробнее
				</div>
			</Link>

		</>
	)
}
