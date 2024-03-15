import { HeadContacts, AddressList, Map } from "@/UI";

export const metadata = {
  title: "Белорусская фабрика мебели ЗОВ | Наши салоны",
  description: "Адреса салонов и другая контактная информация",
};
const stats = [
  { name: 'Рубрика', value: 'Мебель' },
  { name: 'Категория', value: 'Кухонные гарнитуры', unit: 'поз.' },
]
export default () => {
  return (
    <>
    <div className="bg-gray-900">
        <div className="max-w-screen-2xl px-4 mx-auto sm:px-6">
          <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 ">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-gray-900 px-4 py-5 sm:px-6 lg:px-8">
                <p className="text-sm font-medium leading-6 text-gray-400">{stat.name}</p>
                <p className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-3xl font-semibold tracking-tight text-white">{stat.value}</span>
                  {stat.unit ? <span className="text-sm text-gray-400">(64 {stat.unit})</span> : null}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> 
      <HeadContacts />
      <AddressList />
      <Map />
    </>
  );
};
