'use client'
export default ({ breadCrumbs }) => {
    console.log(breadCrumbs)
    return (
        <div className="bg-gray-900">
            <div className="max-w-screen-2xl px-4 mx-auto sm:px-6">
                <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 ">
                    {breadCrumbs.map((item) => (
                        <div key={item.name} className="bg-gray-900 px-4 py-5 sm:px-6 lg:px-8">
                            <p className="text-sm font-medium leading-6 text-gray-400">{item.name}</p>
                            <p className="mt-2 flex items-baseline gap-x-2">
                                <span className="text-3xl font-semibold tracking-tight text-white">{item.value}</span>
                                {item.count ? <span className="text-sm text-gray-400">({item.count} {item.unit})</span> : null}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
