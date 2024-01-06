import { HeadContacts, AddressList, Map } from "@/UI";

export const metadata = {
  title: "Белорусская фабрика мебели ЗОВ | Наши салоны",
  description: "Адреса салонов и другая контактная информация",
};

export default () => {
  return (
    <>
      <HeadContacts />
      <AddressList />
      <Map />
    </>
  );
};
