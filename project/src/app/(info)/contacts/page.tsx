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

      <HeadContacts />
      <AddressList />
      <Map />
    </>
  );
};
