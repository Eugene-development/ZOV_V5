"use client";
import Link from "next/link";
/**
 * Renders a list of breadcrumbs.
 * @param {Array} breadCrumbs - An array of breadcrumb objects.
 * @returns {JSX.Element} - The rendered breadcrumbs.
 */
export default function Breadcrumbs({ breadCrumbs }) {
  const breadCrumbsMobile = breadCrumbs.slice(1);
  return (
    <div className="bg-gray-900">
      <div className="hidden sm:block max-w-screen-2xl px-4 mx-auto sm:px-6">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2">
          {breadCrumbs.map((item) => (
            <div
              key={item.name}
              className="bg-gray-900 px-4 py-5 sm:px-6 lg:px-8"
            >
              <Link href={item.href ? `/catalog/${item.href}` : "#"}>
                <p className="text-sm font-medium leading-6 text-gray-400">
                  {item.name}
                </p>
                <p className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-xl sm:text-3xl font-semibold tracking-tight text-white">
                    {item.value}
                  </span>
                  {item.count && (
                    <span className="text-sm text-gray-400">
                      ({item.count} {item.unit})
                    </span>
                  )}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="block sm:hidden max-w-screen-2xl px-4 mx-auto sm:px-6">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2">
          {breadCrumbsMobile.map((item) => (
            <div
              key={item.name}
              className="bg-gray-900 px-4 py-5 sm:px-6 lg:px-8"
            >
              <Link href={item.href ? `/catalog/${item.href}` : "#"}>
                <p className="text-sm font-medium leading-6 text-gray-400">
                  {item.name}
                </p>
                <p className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-xl sm:text-3xl font-semibold tracking-tight text-white">
                    {item.value}
                  </span>
                  {item.count && (
                    <span className="text-sm text-gray-400">
                      ({item.count} {item.unit})
                    </span>
                  )}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
